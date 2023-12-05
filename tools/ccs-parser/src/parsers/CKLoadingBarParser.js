const BaseParser = require("./BaseParser");

class CKLoadingBarParser extends BaseParser {
    constructor(className) {
        super(className);
    }

    parseLoadingBarAttributes(json) {
        let code = "";
        const textureData = json["ImageFileData"];
        if (textureData) {
            const texturePath = textureData["Path"];
            if (texturePath) {
                const textureType = this.getTextureType(textureData["Type"]);
                code += this.formatLine("this.__name.loadTexture(textureData, textureType)"
                    .replace("textureData", this.wrap(texturePath))
                    .replace("textureType", textureType)
                );
            }
        }

        const direction = json["ProgressType"] === "Right_To_Left" ? 1 : 0;
        if (direction > 0) {
            code += this.formatLine("this.__name.setDirection(1)");
        }
        return code;
    }

    parseCustomAttribute(json) {
        return super.parseCustomAttribute(json)
            + this.parseTouchEnabled(json)
            + this.parseSize(json, true)
            + this.parseLoadingBarAttributes(json);
    }
}

module.exports = CKLoadingBarParser;