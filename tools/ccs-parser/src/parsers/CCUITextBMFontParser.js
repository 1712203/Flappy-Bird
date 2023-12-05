const BaseParser = require("./BaseParser");

class CCUITextBMFontParser extends BaseParser {
    constructor(className) {
        super(className);
    }

    parseBMFontName(json) {
        const data = json["LabelBMFontFile_CNB"];
        if (!data) return "";
        let file = data["Path"];
        if (!file) return "";
        file = this.wrap(file);
        return this.formatLine("this.__name.setFntFile({file})".replace("{file}", file));

    }

    parseCustomAttribute(json) {
        return super.parseCustomAttribute(json)
            + this.parseTouchEnabled(json)
            + this.parseBMFontName(json)
            + this.parseTextString(json);
    }
}

module.exports = CCUITextBMFontParser;