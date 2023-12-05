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

let AnimFileParser = {};

AnimFileParser.parseAnims = function (jsonFrame, actionTagMap) {
    let duration = jsonFrame["Duration"];
    let speed = jsonFrame["Speed"];
    let timelines = jsonFrame["Timelines"];
    let frames = [];
    timelines.forEach(timeline => {
        let lineFrames = KeyFrameParser.parse(timeline).getFrames();
        frames = [...frames, ...lineFrames];
    });

    let functionList = []
    actionTagMap.forEach(function (nodeName, actionTag) {
        if (frames.findIndex(frame => frame.actionTag === actionTag) < 0) return;
        functionList.push(AnimFileParser.parseAnimFunction(frames, nodeName, actionTag))
    })

    return functionList.join("\r\n\r\n");
}

AnimFileParser.parseAnimFunction = function (frames, nodeName, actionTag) {
    let functionCode = "_ccs.anim.getAction{name} = function (speed = 1) {{content}\r\n};";

    let name = nodeName[0].toUpperCase() + nodeName.slice(1);
    functionCode = functionCode.replace("{name}", name);

    let animFrames = frames.filter(frame => frame.actionTag === actionTag);
    let startFrame = Math.min(...frames.map(frame => frame.frameIndex));
    let endFrame = Math.max(...frames.map(frame => frame.frameIndex));

    let content = AnimFileParser.parseAnimForNode(name, animFrames, startFrame, endFrame);
    functionCode = functionCode.replace("{content}", "\r\n" + content);

    return functionCode;
}

AnimFileParser.addIndentAllLine = function(str) {
    return "    " + str.split("\r\n").join("\r\n    ");
}

AnimFileParser.parseAnimForNode = function (animName, frames, startFrame, endFrame) {
    let actionMap = new Map();
    frames.forEach(frame => {
        if (actionMap.has(frame.property)) {
            let arr = actionMap.get(frame.property);
            arr.push(frame);
        } else actionMap.set(frame.property, [frame]);
    }, this);

    let spawnArr = [];
    actionMap.forEach((actionFrames, property) => {
        let parser = AnimFileParser.getPropertyParser(property, animName, actionFrames, startFrame, endFrame);
        if (!parser) return;
        spawnArr.push(parser.parseAction());
    })

    let baseAnimParser = new BaseAnimParser();
    let spawnAction = baseAnimParser.getSpawn(spawnArr);
    spawnAction = baseAnimParser.getSequence([spawnAction]);

    let code = "return {mainAction};";
    code = AnimFileParser.addIndentAllLine(code);

    code = code.replace(/{mainAction}/g, spawnAction.trim());

    return code;
}

AnimFileParser.getPropertyParser = function (property, animName, frames, startFrame, endFrame) {
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

module.exports = AnimFileParser;