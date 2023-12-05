const BaseParser = require("./BaseParser");

class CCProgressTimerParser extends BaseParser {
    constructor(className) {
        super(className);
    }

    parseBeforeCtor(json) {
        let code = this.formatLine("let __sprite = new cc.Sprite()");
        const textureData = json["FileData"];
        if (!textureData) return code;
        let texturePath = textureData["Path"];
        if (!texturePath) return code;
        const textureType = this.getTextureType(textureData["Type"]);
        texturePath = this.wrap(texturePath);
        if (textureType > 0) {
            code += this.formatLine("__sprite.setSpriteFrame(cc.spriteFrameCache.getSpriteFrame(texturePath))".replace("texturePath", texturePath));
        } else {
            code += this.formatLine("__sprite.setTexture(texturePath)".replace("texturePath", texturePath));
        }
        return code;
    }

    getCtorParam(json){
        return "__sprite";
    }

    parseProgressTimerType(json) {
        const userData = json["UserData"];
        const isRadial = userData && userData.endsWith("Radial");
        const isBar = !isRadial;
        const type = isBar ? "cc.ProgressTimer.TYPE_BAR" : "cc.ProgressTimer.TYPE_RADIAL";
        let code = this.formatLine("this.__name.setType({type})".replace("{type}", type));
        if (isBar) {
            code += this.formatLine("this.__name.setMidpoint(cc.p(0, 0))");
            code += this.formatLine("this.__name.setBarChangeRate(cc.p(1, 0))");
        }
        return code;
    }

    parseCustomAttribute(json) {
        return super.parseCustomAttribute(json)
            + this.parseProgressTimerType(json);

    }
}

module.exports = CCProgressTimerParser;