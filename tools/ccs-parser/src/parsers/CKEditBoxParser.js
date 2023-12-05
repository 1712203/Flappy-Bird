const BaseParser = require("./BaseParser");

class CKEditBoxParser extends BaseParser {
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
            + this.parseInitEditBox();
    }

    parseInitEditBox(json) {
        return this.formatLine("///// # _initEditBox for this.__name")
            + this.formatLine("this.__name._initEditBox()");
    }
}

module.exports = CKEditBoxParser;