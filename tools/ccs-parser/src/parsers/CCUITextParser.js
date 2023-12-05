const BaseParser = require("./BaseParser");

class CCUITextParser extends BaseParser {
    constructor(className) {
        super(className);
    }

    getSetColorFuncName() {
        return "setTextColor";
    }

    parseTextSize(json) {
        let code = "";
        const isCustomSize = json["IsCustomSize"];
        if (isCustomSize) {
            code += this.parseSize(json);
        } else {
            code += this.formatLine("this.__name.ignoreContentAdaptWithSize(true)");
        }
        return code;
    };

    parseFontName(json) {
        const data = json["FontResource"];
        let fontName = data ? data["Path"] : "";
        if (fontName) {
            fontName = this.wrap(fontName);
            return this.formatLine("this.__name.setFontName({fontName})".replace("{fontName}", fontName));
        }
        return "";
    };

    parseFontSize(json) {
        let fontSize = json["FontSize"];
        if (fontSize !== undefined) {
            return this.formatLine("this.__name.setDefaultFontSize({fontSize})".replace("{fontSize}", fontSize));
        }
        return "";
    };

    parseTextAlign(json) {
        let alignment = json["HorizontalAlignmentType"];
        let h_alignment;
        let code = "";
        switch (alignment) {
            case "HT_Right":
                h_alignment = 2;
                break;
            case "HT_Center":
                h_alignment = 1;
                break;
            case "HT_Left":
            default:
                h_alignment = 0;
        }
        code += this.formatLine("this.__name.setTextHorizontalAlignment({h_alignment})".replace("{h_alignment}", h_alignment));

        alignment = json["VerticalAlignmentType"];
        let v_alignment;
        switch (alignment) {
            case "VT_Bottom":
                v_alignment = 2;
                break;
            case "VT_Center":
                v_alignment = 1;
                break;
            case "VT_Top":
            default:
                v_alignment = 0;
        }
        code += this.formatLine("this.__name.setTextVerticalAlignment({v_alignment})".replace("{v_alignment}", v_alignment));
        return code;
    };

    parseTextOutline(json) {
        const enabled = json["OutlineEnabled"];
        if (!enabled) return "";
        const color = this.getColor(json["OutlineColor"]);
        const size = json["OutlineSize"] || 1;
        return this.formatLine("this.__name.enableOutline(color, size)"
            .replace("color", color)
            .replace("size", size));
    };

    parseTextShadow(json) {
        const enabled = json["ShadowEnabled"];
        if (!enabled) return "";
        const color = this.getColor(json["ShadowColor"]);
        const x = json["ShadowOffsetX"] || 0;
        const y = json["ShadowOffsetY"] || -2;
        return this.formatLine("this.__name.enableShadow(color, cc.size({x}, {y}), 0)"
            .replace("color", color)
            .replace("{x}", x)
            .replace("{y}", y));
    };

    parseFitCustomSize(json) {
        let userData = json["UserData"];
        if (!userData) return "";
        if (userData.includes("fitSingleLine")) {
            return this.formatLine("this.__name.autoFitSingleLine()");
        }
        if (userData.includes("fitMultipleLine")) {
            return this.formatLine("this.__name.autoFitMultipleLine()");
        }
        return "";
    };

    parseCustomAttribute(json) {
        return super.parseCustomAttribute(json)
            + this.parseTouchEnabled(json)
            + this.parseFlip(json)
            + this.parseTextSize(json)
            + this.parseFontName(json)
            + this.parseFontSize(json)
            + this.parseTextString(json)
            + this.parseTextAlign(json)
            + this.parseTextOutline(json)
            + this.parseTextShadow(json)
            + this.parseFitCustomSize(json);
    }
}

module.exports = CCUITextParser;