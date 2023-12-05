const BaseParser = require("./BaseParser");

class CCUIListViewParser extends BaseParser {
    constructor(className) {
        super(className);
    }

    parseListViewAttributes(json) {
        let code = "";
        const directionType = this.getParam(json["DirectionType"], "");
        const verticalType = this.getParam(json["VerticalType"], "Align_Left");
        const horizontalType = this.getParam(json["HorizontalType"], "Align_Top");
        if (directionType === "Vertical") {
            code += this.formatLine("this.__name.setDirection(ccui.ScrollView.DIR_VERTICAL)");
            if (horizontalType === "")
                code += this.formatLine("this.__name.setGravity(ccui.ListView.GRAVITY_LEFT)");
            else if (horizontalType === "Align_Right")
                code += this.formatLine("this.__name.setGravity(ccui.ListView.GRAVITY_RIGHT)");
            else if (horizontalType === "Align_HorizontalCenter")
                code += this.formatLine("this.__name.setGravity(ccui.ListView.GRAVITY_CENTER_HORIZONTAL)");
        } else {
            code += this.formatLine("this.__name.setDirection(ccui.ScrollView.DIR_HORIZONTAL)");
            if (verticalType === "Align_Bottom")
                code += this.formatLine("this.__name.setGravity(ccui.ListView.GRAVITY_BOTTOM)");
            else if (verticalType === "Align_VerticalCenter")
                code += this.formatLine("this.__name.setGravity(ccui.ListView.GRAVITY_CENTER_VERTICAL)");
            else
                code += this.formatLine("this.__name.setGravity(ccui.ListView.GRAVITY_TOP)");
        }
        const itemMargin = json["ItemMargin"] || 0;
        if (itemMargin) {
            code += this.formatLine("this.__name.setItemsMargin({itemMargin})"
                .replace("{itemMargin}", itemMargin)
            );
        }
        const bounceEnabled = this.getParam(json["IsBounceEnabled"], false);
        if (bounceEnabled) {
            code += this.formatLine("this.__name.setBounceEnabled(true)");
        }
        return code;
    }

    parseCustomAttribute(json) {
        return super.parseCustomAttribute(json)
            + this.parseTouchEnabled(json)
            + this.parseSize(json, true)
            + this.parseClipping(json, true)
            + this.parseLayoutBgr(json)
            + this.parseListViewAttributes(json);
    }
}

module.exports = CCUIListViewParser;