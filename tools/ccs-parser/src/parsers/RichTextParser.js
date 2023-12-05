const BaseParser = require("./BaseParser");

class RichTextParser extends BaseParser {
    constructor(className) {
        super(className);
        this.className = "ck.CustomRichTextExtend";
    }

    getCtorParam(json) {
        const size = json["Size"];
        const width = size ? size["X"] : 0;
        const height = size ? size["Y"] : 0;
        return "cc.size({width}, {height})"
            .replace("{width}", width)
            .replace("{height}", height);
    }

    getSetColorFuncName() {
        return "setDefaultColor";
    }

    parseFontName(json) {
        const data = json["FontResource"];
        let fontName = data ? data["Path"] : "";
        if (fontName) {
            fontName = this.wrap(fontName);
            return this.formatLine("this.__name.setDefaultFont({fontName})".replace("{fontName}", fontName));
        }
        return "";
    };

    parseFontSize(json) {
        let fontSize = json["FontSize"];
        if (fontSize !== undefined) {
            return this.formatLine("this.__name.setDefaultSize({fontSize})".replace("{fontSize}", fontSize));
        }
        return "";
    };

    parseTextAlign(json) {
        let alignment = json["HorizontalAlignmentType"];
        let h_alignment;
        let code = "";
        switch (alignment) {
            case "HT_Right":
                h_alignment = 1;
                break;
            case "HT_Center":
                h_alignment = 2;
                break;
            case "HT_Left":
            default:
                h_alignment = 0;
        }
        code += this.formatLine("this.__name.setDefaultAlignHorizontal({h_alignment})".replace("{h_alignment}", h_alignment));

        alignment = json["VerticalAlignmentType"];
        let v_alignment;
        switch (alignment) {
            case "VT_Bottom":
                v_alignment = 6;
                break;
            case "VT_Center":
                v_alignment = 5;
                break;
            case "VT_Top":
            default:
                v_alignment = 4;
        }
        code += this.formatLine("this.__name.setDefaultAlignVertical({v_alignment})".replace("{v_alignment}", v_alignment));
        return code;
    };

    parseCustomAttribute(json) {
        return super.parseCustomAttribute(json)
            + this.parseTouchEnabled(json)
            + this.parseFlip(json)
            + this.parseFontName(json)
            + this.parseFontSize(json)
            + this.parseTextAlign(json)
            + this.parseTextString(json);
    }
}

module.exports = RichTextParser;