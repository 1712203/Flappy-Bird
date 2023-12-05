const BaseParser = require("./BaseParser");

class CCUICheckBoxParser extends BaseParser {
    constructor(className) {
        super(className);
    }

    _parseCheckBoxTexture(json, key, functionName) {
        let data = json[key];
        if (!data) return "";
        let textureType = this.getTextureType(data["Type"]);
        let texturePath = this.wrap(data["Path"]);
        return this.formatLine("this.__name.functionName(texturePath, textureType)"
            .replace("functionName", functionName)
            .replace("texturePath", texturePath)
            .replace("textureType", textureType)
        );
    }

    parseCheckBoxTextures(json) {
        return this._parseCheckBoxTexture(json, "NormalBackFileData", "loadTextureBackGround")
            + this._parseCheckBoxTexture(json, "PressedBackFileData", "loadTextureBackGroundSelected")
            + this._parseCheckBoxTexture(json, "DisableBackFileData", "loadTextureBackGroundDisabled")
            + this._parseCheckBoxTexture(json, "NodeNormalFileData", "loadTextureFrontCross")
            + this._parseCheckBoxTexture(json, "NodeDisableFileData", "loadTextureFrontCrossDisabled");
    }

    parseCheckBoxDisplayState(json) {
        const displayState = this.getParam(json["DisplayState"], true);
        let code = this.formatLine("this.__name.setBright(displayState)".replace("displayState", displayState));
        code += this.formatLine("this.__name.setEnabled(displayState)".replace("displayState", displayState));
        return code;
    }

    parseCheckBoxSelectedState(json) {
        const selectedState = this.getParam(json["CheckedState"], false);
        return this.formatLine("this.__name.setSelected(selectedState)".replace("selectedState", selectedState));
    }

    parseCustomAttribute(json) {
        return super.parseCustomAttribute(json)
            + this.parseSize(json)
            + this.parseTouchEnabled(json)
            + this.parseCheckBoxTextures(json)
            + this.parseCheckBoxDisplayState(json)
            + this.parseCheckBoxSelectedState(json);
    }
}

module.exports = CCUICheckBoxParser;