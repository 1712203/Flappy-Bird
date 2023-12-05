const BaseParser = require("./BaseParser");

class CCUIPageViewParser extends BaseParser {
    constructor(className) {
        super(className);
    }

    parseCustomAttribute(json) {
        return super.parseCustomAttribute(json)
            + this.parseTouchEnabled(json)
            + this.parseSize(json, true)
            + this.parseLayoutBgr(json);
    }
}

module.exports = CCUIPageViewParser;