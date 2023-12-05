const BaseParser = require("./BaseParser");

class CCUILayoutParser extends BaseParser {
    constructor(className) {
        super(className);
    }

    parseCustomAttribute(json) {
        return super.parseCustomAttribute(json)
        + this.parseTouchEnabled(json)
        + this.parseSize(json, true)
        + this.parseClipping(json, false)
        + this.parseLayoutBgr(json)
        + this.parseFullScreenBackground(json);
    }
}

module.exports = CCUILayoutParser;