const BaseParser = require("./BaseParser");

class AvatarParser extends BaseParser {
    constructor(className) {
        super(className);
    }

    getCtorParam(json) {
        let fileData = json["FileData"];
        if (!fileData) return "";
        let filePath = fileData["Path"];
        if (!filePath) return "";
        if (filePath.endsWith("AvatarCircle.png")) {
            return "ck.AvatarType.CIRCLE";
        }
        return "ck.AvatarType.SQUARE";
    }

    parseAvatarWidth(json) {
        let scale = json["Scale"];
        let scaleX = scale ? scale["ScaleX"] || 1 : 1;
        let size = json["Size"];
        let width = size ? size["X"] || 100 : 100;
        width *= scaleX;
        return this.formatLine("this.__name.setWidth({width})".replace("{width}", width));
    }

    parseCustomAttribute(json) {
        return super.parseCustomAttribute(json)
            + this.parseAvatarWidth(json);
    }
}

module.exports = AvatarParser;