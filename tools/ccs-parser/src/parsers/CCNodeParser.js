const BaseParser = require("./BaseParser");

class CCNodeParser extends BaseParser {
    constructor(className) {
        super(className);
    }

    parseCustomAttribute(json) {
        return super.parseCustomAttribute(json);
    }
}

module.exports = CCNodeParser;