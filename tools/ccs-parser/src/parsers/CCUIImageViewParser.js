const BaseParser = require("./BaseParser");

class CCUIImageViewParser extends BaseParser {
    constructor(className) {
        super(className);
    }

    parseImageTexture(json) {
        let fileData = json["FileData"];
        if (!fileData) return "";
        let path = fileData["Path"];
        if (!path) return "";
        let type = this.getTextureType(fileData["Type"]);
        return this.formatLine("this.__name.loadTexture(\"path\", type)"
            .replace("path", path)
            .replace("type", type)
        );
    }

    getTextureFilePath(json) {
        let fileData = json["FileData"];
        if (!fileData) return "";
        return fileData["Path"];
    }

    parseCustomAttribute(json) {
        let textureFilePath = this.getTextureFilePath(json);
        let sizeStr = "";
        if (!textureFilePath.startsWith("texts/")) {
            sizeStr = this.parseSize(json);
        }
        return super.parseCustomAttribute(json)
        + this.parseImageTexture(json)
        + sizeStr
        + this.parseTouchEnabled(json)
        + this.parseFlip(json)
        + this.parseFullScreenBackground(json);
    }
}

module.exports = CCUIImageViewParser;