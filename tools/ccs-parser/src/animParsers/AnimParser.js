const config = require("../../config");
const KeyFrameParser = require("./KeyFrameParser");
const PositionParser = require("./PositionParser");
const ScaleParser = require("./ScaleParser");
const RotationParser = require("./RotationParser");
const OpacityParser = require("./OpacityParser");
const ColorParser = require("./ColorParser");
const VisibleParser = require("./VisibleParser");
const NestedActionParser = require("./NestedActionParser");
const SpriteFrameParser = require("./SpriteFrameParser");
const BaseAnimParser = require("./BaseAnimParser");
const ParserUtils = require("../ParserUtils");

let AnimParser = {};

AnimParser.parseAnims = function (jsonFrame, jsonAnimationList, actionTagMap) {
    let duration = jsonFrame["Duration"];
    let speed = jsonFrame["Speed"];
    let timelines = jsonFrame["Timelines"];
    let frames = [];
    timelines.forEach(timeline => {
        let lineFrames = KeyFrameParser.parse(timeline).getFrames();
        frames = [...frames, ...lineFrames];
    });

    let functionList = jsonAnimationList.map(animationData => {
        return AnimParser.parseAnimFunction(frames, animationData["Name"], animationData["StartIndex"], animationData["EndIndex"], speed, actionTagMap);
    });

    return functionList.join(",\r\n\r\n");
}

AnimParser.parseAnimFunction = function (frames, name, startFrame, endFrame, speed, actionTagMap) {
    name = ParserUtils.upperCaseFirstChar(name);
    let animFunctionCode = `${config.AnimFunctionNameFormat.PLAY.replace("{name}",name)}: function (delay = 0, callback = null, repeat = 1, speed = 1) {{content}\r\n}`;
    animFunctionCode = AnimParser.addIndentAllLine(animFunctionCode);

    let resetFunctionCode = `${config.AnimFunctionNameFormat.RESET.replace("{name}",name)}: function () {{content}\r\n}`;
    resetFunctionCode = AnimParser.addIndentAllLine(resetFunctionCode);

    let animFrames = frames.filter(frame => frame.frameIndex >= startFrame && frame.frameIndex <= endFrame);

    let actionMap = new Map();
    animFrames.forEach(frame => {
        if (actionMap.has(frame.actionTag)) {
            let arr = actionMap.get(frame.actionTag);
            arr.push(frame);
        } else actionMap.set(frame.actionTag, [frame]);
    }, this);

    let callReset = `    this.resetCCSAnim${name}();`;
    let nodeAnimArr = [callReset];
    let nodeResetArr = [];
    let hasCallback = true;
    actionMap.forEach((actionFrames, actionTag) => {
        let anim = AnimParser.parseAnimForNode(name, actionTagMap.get(actionTag), actionFrames, startFrame, endFrame, speed, hasCallback);
        nodeAnimArr.push(anim.actionCode);
        nodeResetArr.push(anim.resetCode);
        hasCallback = false;
    }, this);
    let contentAnim = nodeAnimArr.join("\r\n\r\n");
    animFunctionCode = animFunctionCode.replace("{content}", "\r\n" + AnimParser.addIndentAllLine(contentAnim));

    let contentReset = nodeResetArr.join("\r\n\r\n");
    resetFunctionCode = resetFunctionCode.replace("{content}", "\r\n" + AnimParser.addIndentAllLine(contentReset));

    return animFunctionCode + ",\r\n\r\n" + resetFunctionCode;
}

AnimParser.addIndentAllLine = function(str) {
    return "    " + str.split("\r\n").join("\r\n    ");
}

AnimParser.parseAnimForNode = function (animName, nodeName, frames, startFrame, endFrame, speed, hasCallback) {
    let actionMap = new Map();
    frames.forEach(frame => {
        if (actionMap.has(frame.property)) {
            let arr = actionMap.get(frame.property);
            arr.push(frame);
        } else actionMap.set(frame.property, [frame]);
    }, this);

    let spawnArr = [];
    let firstStateArr = [];
    actionMap.forEach((actionFrames, property) => {
        let parser = AnimParser.getPropertyParser(property, animName, actionFrames, startFrame, endFrame, speed);
        parser.setNodeName(nodeName);
        if (!parser) return;
        let action = parser.parseAction();
        if (action !== "") spawnArr.push(action);
        let firstState = parser.parseFirstState();
        if (firstState !== "") firstStateArr.push(firstState);
    }, this);

    let stopAllAction = AnimParser.addIndentAllLine("this.{nodeName}.stopAllActions();".replace("{nodeName}", nodeName));

    let firstStateCode = "";
    if (firstStateArr.length > 0) {
        let firstState = firstStateArr.join("\r\n");
        firstStateCode = AnimParser.addIndentAllLine(firstState);
    }

    let actionCode = "";
    if (spawnArr.length > 0) {
        let baseAnimParser = new BaseAnimParser();
        let spawnAction = baseAnimParser.getSpawn(spawnArr);
        let mainAction = baseAnimParser.getSequence([spawnAction]);
        if (firstStateArr.length > 0) {
            let creCallFunc = baseAnimParser.createCallFuncAction(["if (repeat === 1) return;", ...firstStateArr]);
            mainAction = baseAnimParser.getSequence([spawnAction, creCallFunc]);
        }
        let delayAction = baseAnimParser.getDelayTimeAction("delay");
        let callbackAction = baseAnimParser.getCallbackAction("callback");
        let actionName = nodeName + "Action";
        let actionWithRepeat = actionName + baseAnimParser.addRepeat("repeat");
        let action;
        if (hasCallback)
            action = baseAnimParser.getSequence([delayAction, actionWithRepeat, callbackAction]);
        else action = baseAnimParser.getSequence([delayAction, actionWithRepeat]);
        actionCode =  "let {actionName} = {mainAction};\r\n"
                    + "if (repeat <= 0) {\r\n"
                    + "    {actionName} = {actionName}.repeatForever();\r\n"
                    + "} else {actionName} = {action}\r\n\r\n"
                    + "this.{nodeName}.runAction({actionName});";
        actionCode = actionCode.replace(/{actionName}/g, actionName);
        actionCode = actionCode.replace(/{mainAction}/g, mainAction.trim());
        actionCode = actionCode.replace(/{nodeName}/g, nodeName);
        actionCode = actionCode.replace("{action}", action.trim());

        actionCode = AnimParser.addIndentAllLine(actionCode);
    }

    return {
        actionCode: actionCode,
        resetCode: stopAllAction + "\r\n" + firstStateCode
    };
}

AnimParser.getPropertyParser = function (property, animName, frames, startFrame, endFrame, speed) {
    const animArguments = Array.from(arguments).slice(1);
    switch (property) {
        case config.AnimProperty.POSITION:
            return new PositionParser(...animArguments);
        case config.AnimProperty.SCALE:
            return new ScaleParser(...animArguments);
        case config.AnimProperty.ROTATION:
            return new RotationParser(...animArguments);
        case config.AnimProperty.OPACITY:
            return new OpacityParser(...animArguments);
        case config.AnimProperty.COLOR:
            return new ColorParser(...animArguments);
        case config.AnimProperty.VISIBLE:
            return new VisibleParser(...animArguments);
        case config.AnimProperty.NESTED_ACTION:
            return new NestedActionParser(...animArguments);
        case config.AnimProperty.SPRITE_FRAME:
            return new SpriteFrameParser(...animArguments);
    }
    return null;
}

module.exports = AnimParser;