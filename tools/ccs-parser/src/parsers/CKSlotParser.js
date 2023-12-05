const BaseParser = require("./BaseParser");

class CKSlotParser extends BaseParser {
    constructor(className) {
        super(className);
    }

    parseCustomAttribute(json) {
        return super.parseCustomAttribute(json)
            + this.parseSize(json)
            + this.parseTouchEnabled(json)
    }

    parseAfterInitAllChild(json) {
        return "\r\n" + super.parseAfterInitAllChild(json)
            + this.parseInitChildren();
    }

    parseInitChildren(json) {
        return this.formatLine("///// # initChildren for this.__name")
            + this.formatLine("this.__name.initChildren()");
    }
}

module.exports = CKSlotParser;