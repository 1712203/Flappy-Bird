const BaseParser = require("./BaseParser");

class CKSlotMachineParser extends BaseParser {
    constructor(className) {
        super(className);
    }

    parseCustomAttribute(json) {
        return super.parseCustomAttribute(json)
            + this.parseSize(json)
            + this.parseTouchEnabled(json)
    }
}

module.exports = CKSlotMachineParser;