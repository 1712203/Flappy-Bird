const BaseParser = require("./BaseParser");

class CCEditBoxParser extends BaseParser {
    constructor(className) {
        super(className);
    }

    getCtorParam(json) {
        let size = json["Size"];
        let width = size["X"] || 100;
        let height = size["Y"] || 100;
        return "cc.size(width, height), new cc.Scale9Sprite()".replace("width", width).replace("height", height);
    }

    getSetColorFuncName() {
        return "setFontColor";
    }

    parseEditBoxAttributes(json) {
        let fontRes = json["FontResource"];
        let fontName = fontRes ? fontRes["Path"] : "";
        let fontSize = json["FontSize"] || 20;
        let color = this.getColor(json["CColor"]);
        let str = this.getTextString(json);
        let isNumber = json["UserData"] && json["UserData"].includes("Number");
        let inputMode = isNumber ? "cc.EDITBOX_INPUT_MODE_PHONENUMBER" : "cc.EDITBOX_INPUT_MODE_SINGLELINE";
        let code = "";

        code += this.formatLine("this.__name.setFontName({fontName})".replace("{fontName}", this.wrap(fontName)));
        code += this.formatLine("this.__name.setFontSize({fontSize})".replace("{fontSize}", fontSize));

        code += this.formatLine("this.__name.setPlaceholderFontName({fontName})".replace("{fontName}", this.wrap(fontName)));
        code += this.formatLine("this.__name.setPlaceholderFontSize({fontSize})".replace("{fontSize}", fontSize));
        code += this.formatLine("this.__name.setPlaceholderFontColor({color})".replace("{color}", color));

        if (str) {
            code += this.formatLine("this.__name.setPlaceHolder({str})".replace("{str}", str));
        }

        code += this.formatLine("this.__name.setInputMode({inputMode})".replace("{inputMode}", inputMode));
        code += this.formatLine("this.__name.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE)");
        return code;
    }

    parseCustomAttribute(json) {
        return super.parseCustomAttribute(json)
            + this.parseSize(json, true)
            + this.parseEditBoxAttributes(json);

    }
}

module.exports = CCEditBoxParser;