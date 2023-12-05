const BaseParser = require("./BaseParser");

class CCUIButtonParser extends BaseParser {
    constructor(className) {
        super(className);
    }

    parseDisabledTexture(json) {
        let disabledData = json["DisabledFileData"];
        if (!disabledData) return "";
        let disabledPath = disabledData["Path"];
        let disabledType = this.getTextureType(disabledData["Type"]);
        return this.formatLine("this.__name.loadTextureDisabled(\"path\", type)"
            .replace("path", disabledPath)
            .replace("type", disabledType)
        );
    }

    parsePressedTexture(json) {
        let pressedData = json["PressedFileData"];
        if (!pressedData) return "";
        let pressedPath = pressedData["Path"];
        let pressedType = this.getTextureType(pressedData["Type"]);
        return this.formatLine("this.__name.loadTexturePressed(\"path\", type)"
            .replace("path", pressedPath)
            .replace("type", pressedType)
        );
    }

    parseNormalTexture(json) {
        let normalData = json["NormalFileData"];
        if (!normalData) return "";
        let normalPath = normalData["Path"];
        let normalType = this.getTextureType(normalData["Type"]);
        return this.formatLine("this.__name.loadTextureNormal(\"path\", type)"
            .replace("path", normalPath)
            .replace("type", normalType)
        );
    }

    parseButtonTextures(json) {
        return this.parseDisabledTexture(json)
            + this.parsePressedTexture(json)
            + this.parseNormalTexture(json);
    }

    parseButtonState(json) {
        const state = json["DisplayState"];
        if (state === false) {
            return this.formatLine("this.__name.setEnabled(false)");
        }
        return "";
    }

    parseCustomAttribute(json) {
        return super.parseCustomAttribute(json)
            + this.parseButtonTextures(json)
            + this.parseSize(json)
            + this.parseTouchEnabled(json)
            + this.parseButtonState(json);
    }
}

module.exports = CCUIButtonParser;