const BaseParser = require("./BaseParser");

class ChatHistoryWidgetParser extends BaseParser {
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
            + this.parseInitChatHistory();
    }

    parseInitChatHistory(json) {
        return this.formatLine("///// # _initChatHistory for this.__name")
            + this.formatLine("this.__name._initChatHistory()");
    }
}

module.exports = ChatHistoryWidgetParser;