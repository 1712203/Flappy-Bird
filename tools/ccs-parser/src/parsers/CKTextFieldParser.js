const BaseParser = require("./BaseParser");

class CKTextFieldParser extends BaseParser {
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
            + this.parseInitTextField();
    }

    parseInitTextField(json) {
        return this.formatLine("///// # _initTextField for this.__name")
            + this.formatLine("this.__name._initTextField()");
    }
}

module.exports = CKTextFieldParser;