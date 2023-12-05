const BaseParser = require("./BaseParser");

class CCUIScrollViewParser extends BaseParser {
    constructor(className) {
        super(className);
    }

    parseScrollViewAttributes(json){
        let code = "";
        const innerNodeSize = json["InnerNodeSize"];
        if (innerNodeSize) {
            const innerNodeWidth = innerNodeSize["Width"] || 0;
            const innerNodeHeight = innerNodeSize["Height"] || 0;
            if (innerNodeWidth !== 0 || innerNodeHeight !== 0) {
                code += this.formatLine("this.__name.setInnerContainerSize(cc.size(width, height))"
                    .replace("width", innerNodeWidth)
                    .replace("height", innerNodeHeight)
                );
            }
        }
        let direction = 0;
        if(json["ScrollDirectionType"] === "Vertical") direction = 1;
        if(json["ScrollDirectionType"] === "Horizontal") direction = 2;
        if(json["ScrollDirectionType"] === "Vertical_Horizontal") direction = 3;
        if (direction) {
            code += this.formatLine("this.__name.setDirection({direction})"
                .replace("{direction}", direction)
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
        + this.parseClipping(json, false)
        + this.parseLayoutBgr(json)
        + this.parseScrollViewAttributes(json);
    }
}

module.exports = CCUIScrollViewParser;