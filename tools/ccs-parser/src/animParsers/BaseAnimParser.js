const EasingParser = require("./EasingParser");
const ParserUtils = require("../ParserUtils");
const config = require("../../config");

class BaseAnimParser {
    constructor(animName, frames, startFrame, endFrame, speed) {
        this.animName = animName || "";
        this.frames = frames || [];
        this.startFrame = startFrame || 0;
        this.endFrame = endFrame || 0;
        this.speed = speed || 1;
        this.nodeName = "";
    }

    setNodeName(nodeName) {
        this.nodeName = nodeName || "";
    }

    formatLine(line) {
        return line.replace(/__name/g, this.nodeName) + ";";
    }

    addIndent(line) {
        return "    " + line;
    }

    addIndentAndFormatLine(line) {
        return this.addIndent(this.formatLine(line));
    }

    addIndentAllLine(str) {
        return "    " + str.split("\r\n").join("\r\n    ");
    }

    getDelayTimeAction(delayTime) {
        return "cc.delayTime({number})".replace("{number}", delayTime);
    }

    getPositionAction(duration, x, y) {
        return "cc.moveTo({duration}, {x}, {y})"
            .replace("{duration}", duration)
            .replace("{x}", x)
            .replace("{y}", y);
    }

    getScaleAction(duration, sx, sy) {
        return "cc.scaleTo({duration}, {sx}, {sy})"
        .replace("{duration}", duration)
        .replace("{sx}", sx)
        .replace("{sy}", sy);
    }

    getRotationAction(duration, deltaAngleX, deltaAngleY) {
        return "cc.rotateBy({duration}, {deltaAngleX}, {deltaAngleY})"
        .replace("{duration}", duration)
        .replace("{deltaAngleX}", deltaAngleX)
        .replace("{deltaAngleY}", deltaAngleY);
    }

    getOpacityAction(duration, opacity) {
        return "cc.fadeTo({duration}, {opacity})"
        .replace("{duration}", duration)
        .replace("{opacity}", opacity);
    }

    getVisibleAction(duration, visible) {
        return this.getDelayTimeAction(duration) + ",\r\n" +
            this.createCallFuncAction([this.formatLine(`this.__name.setVisible(${visible})`)]);
    }

    getNestedActionAction(duration, innerActionType, currentAnimationName, lastAnimationName) {
        if (innerActionType !== config.NestedActionType.NO_LOOP_ACTION) return null;
        let playCurrentFunctionName = config.AnimFunctionNameFormat.PLAY.replace("{name}",ParserUtils.upperCaseFirstChar(currentAnimationName));
        let resetLastFunctionName = config.AnimFunctionNameFormat.RESET.replace("{name}",ParserUtils.upperCaseFirstChar(lastAnimationName));
        return this.getDelayTimeAction(duration) + ",\r\n" +
            this.createCallFuncAction([this.formatLine(`this.__name.${resetLastFunctionName}()`), this.formatLine(`this.__name.${playCurrentFunctionName}()`)]);
    }

    getSpriteFrameAction(duration, textureType, path) {
        let setTextureCfArr = [this.formatLine("let sf = cc.spriteFrameCache.getSpriteFrame(\"" + path + "\")")
            , this.formatLine("if (sf) this.__name.setSpriteFrame(sf)")];
        if (textureType === config.TextureType.LOCAL_TEXTURE)
            setTextureCfArr = [this.formatLine("this.__name.setTexture(\"" + path + "\")")];
        return this.getDelayTimeAction(duration) + ",\r\n" +
            this.createCallFuncAction(setTextureCfArr);
    }

    getCallbackAction(callback) {
        return "cc.callFunc(function () { if (cc.isFunction({callback})) {callback}(); }.bind(this))".replace(/{callback}/g, callback);
    }

    createCallFuncAction(functionStrArr) {
        if (functionStrArr.length < 0) return "";
        let functionStr = functionStrArr.map(line => this.addIndent(line)).join("\r\n");
        return "cc.callFunc(function () {\r\n"
            + functionStr
            + "\r\n}.bind(this))";
    }

    getSequence(arrAction) {
        let code = "cc.sequence(\r\n" + "{arrActionCode}\r\n" + ")";
        let arrActionCode = arrAction.map(action => this.addIndentAllLine(action)).join(",\r\n");
        code = code.replace("{arrActionCode}", arrActionCode);
        return code;
    }

    getSpawn(arrAction) {
        let code = "cc.spawn(\r\n" + "{arrActionCode}\r\n" + ")";
        let arrActionCode = arrAction.map(action => this.addIndentAllLine(action)).join(",\r\n");
        code = code.replace("{arrActionCode}", arrActionCode);
        return code;
    }

    getDuration(nFrame) {
        return `${nFrame} / (${Math.round(60 * this.speed)} * speed)`;
    }

    addRepeat(repeat) {
        return ".repeat({repeat})".replace("{repeat}", repeat);
    }

    addEasing(easingType) {
        let easing = EasingParser.getEasing(easingType);
        if (easing === "") return easing;
        return ".easing(cc.{easing}())".replace("{easing}", easing);
    }

    getAction(frame, duration, lastFrame) {
    }

    parsePosition(x, y) {
        return this.formatLine(`this.__name.setPosition(${x}, ${y})`);
    }

    parseScale(x, y) {
        return this.formatLine(`this.__name.setScale(${x}, ${y})`);
    }

    parseRotation(rotate) {
        return this.formatLine(`this.__name.setRotation(${rotate})`);
    }

    parseOpacity(opacity) {
        return this.formatLine(`this.__name.setOpacity(${opacity})`);
    }

    parseColor(color) {
        color = this.getColor(color);
        return this.formatLine(`this.__name.setColor(${color})`);
    }

    parseVisible(visible) {
        return this.formatLine(`this.__name.setVisible(${visible})`);
    }

    parseNestedAction(innerActionType, currentAnimationName) {
        if (innerActionType !== config.NestedActionType.NO_LOOP_ACTION) return null;
        let playCurrentFunctionName = config.AnimFunctionNameFormat.PLAY.replace("{name}", ParserUtils.upperCaseFirstChar(currentAnimationName));
        return this.formatLine(`this.__name.${playCurrentFunctionName}()`);
    }

    parseSpriteFrame(textureType, path) {
        let setTextureStr = this.formatLine("let sf = cc.spriteFrameCache.getSpriteFrame(\"" + path + "\")")
            + " " + this.formatLine("if (sf) this.__name.setSpriteFrame(sf)");
        if (textureType === config.TextureType.LOCAL_TEXTURE)
            setTextureStr = this.formatLine("this.__name.setTexture(\"" + path + "\")");
        return setTextureStr;
    }

    parseProperty(frame) {
    }

    parseFirstState() {
        let frames = this.frames.filter(frame => frame.frameIndex >= this.startFrame && frame.frameIndex <= this.endFrame);
        if (frames.length <= 0) return "";
        let startFrame = frames[0];
        return this.parseProperty(startFrame);
    }

    parseAction() {
        let frames = this.frames.filter(frame => frame.frameIndex >= this.startFrame && frame.frameIndex <= this.endFrame);
        if (frames.length <= 0) return "";
        let lastFrame = null;
        let lastFrameIndex = frames[0].frameIndex;
        let lastEasing = 0;
        let arrAction = frames.map(frame => {
            if (frame.frameIndex === this.startFrame) {
                lastFrame = frame;
                lastFrameIndex = frame.frameIndex;
                lastEasing = frame.easingType;
                return null;
            }

            let duration = this.getDuration(frame.frameIndex - lastFrameIndex);
            let action = this.getAction(frame, duration, lastFrame);
            if (action === null) return action;
            action = action + this.addEasing(lastEasing);

            lastFrame = frame;
            lastFrameIndex = frame.frameIndex;
            lastEasing = frame.easingType;

            return action;
        }, this);

        // NO START FRAME
        if (frames[0].frameIndex > this.startFrame) {
            let duration = this.getDuration(frames[0].frameIndex - this.startFrame);
            arrAction.unshift(this.getDelayTimeAction(duration));
        }

        // NO END FRAME
        if (frames[frames.length - 1].frameIndex < this.endFrame) {
            let duration = this.getDuration(this.endFrame - frames[frames.length - 1].frameIndex);
            arrAction.push(this.getDelayTimeAction(duration));
        }
        arrAction = arrAction.filter(action => action !== null);
        return this._getMainActionFromArrAction(arrAction);
    }

    _getMainActionFromArrAction(arrAction) {
        if (arrAction.length <= 0) return "";
        if (arrAction.length === 1) return arrAction[0];
        return this.getSequence(arrAction);
    }

    getColor(json){
        return ParserUtils.parseColor(json);
    }
}

module.exports = BaseAnimParser;