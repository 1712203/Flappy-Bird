const BaseParser = require("./BaseParser");

class CCSpriteParser extends BaseParser {
    constructor(className) {
        super(className);
    }

    parseSpriteTexture (json) {
        const textureData = json["FileData"];
        if (!textureData) return "";
        let texturePath = textureData["Path"];
        if (!texturePath) return "";
        const textureType = this.getTextureType(textureData["Type"]);
        texturePath = this.wrap(texturePath);
        let code = textureType > 0 ?
            "let sf = cc.spriteFrameCache.getSpriteFrame(texturePath); if (sf) this.__name.setSpriteFrame(sf)"
            : "this.__name.setTexture(texturePath)";
        return this.formatLine(code.replace("texturePath", texturePath));
    }

    parseBlendFunc(json) {
        const blendData = json["BlendFunc"];
        let code = "";
        if(json["BlendFunc"]) {
            code += this.formatLine("let __nameBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED");
            if (blendData["Src"] !== undefined){
                code += this.formatLine("__nameBlendFunc.src = {src}".replace("{src}", blendData["Src"]));
            }
            if (blendData["Dst"] !== undefined){
                code += this.formatLine("__nameBlendFunc.dst = {dst}".replace("{dst}", blendData["Dst"]));
            }
            code += this.formatLine("this.__name.setBlendFunc(__nameBlendFunc)");
        }
        return code;
    }

    parseCustomAttribute(json) {
        let code = super.parseCustomAttribute(json);
        code += this.parseSpriteTexture(json);
        code += this.parseBlendFunc(json);
        return code;
    }
}

module.exports = CCSpriteParser;