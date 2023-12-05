class ParserResult {
    constructor(code, memberCode, animCode) {
        this.code = code || "";
        this.memberCode = memberCode || "";
        this.animCode = animCode || "";
        this.actionTagMap = new Map();
    }

    appendCode(code) {
        this.code += code;
    }

    /**
     * @param {string} name
     * @param {string} type
     */
    appendMember(name, type) {
        this.memberCode += "    /** @type {__type__} */".replace("__type__", type) + "\r\n";
        this.memberCode += "    __name__: null,".replace("__name__", name) + "\r\n";
    }

    appendAnim(code) {
        this.animCode += code;
    }

    append(anotherResult) {
        this.code += anotherResult.code;
        this.memberCode += anotherResult.memberCode;
        this.animCode += anotherResult.animCode;
        this.actionTagMap = new Map([...this.actionTagMap, ...anotherResult.actionTagMap]);
    }

    putActionTag(actionTag, nodeName) {
        this.actionTagMap.set(actionTag, nodeName);
    }
}

module.exports = ParserResult;