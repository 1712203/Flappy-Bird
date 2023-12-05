const ParserResult = require("../ParserResult");
const Parser = require("../Parser");
const ParserUtils = require("../ParserUtils");

class BaseParser {
    constructor(className) {
        this.className = className || "cc.Node";
        this.name = "";
    }

    wrap(str) {
        return '"' + str + '"';
    }

    formatLine(line) {
        return "        " + line.replace(/__name/g, this.name) + ";\r\n";
    }

    addIndentAllLine(str) {
        return "    " + str.split("\r\n").join("\r\n    ");
    }

    getParam(value, defaultValue) {
        return value === undefined ? defaultValue : value;
    }

    getCtorParam(json) {
        return "";
    }

    getSetColorFuncName() {
        return "setColor";
    }

    getAddChildFunction(parentType) {
        if (parentType === "ccui.ListView") {
            return "pushBackCustomItem";
        } else if (parentType === "ccui.PageView") {
            return "addPage";
        }
        return "addChild";
    }

    getColor(json) {
        return ParserUtils.parseColor(json);
    }

    getTextureType(type) {
        return type === "Default" || type === "Normal" ? 0 : 1;
    };

    parseConstructor(json) {
        let code = "this.__name = new {className}({ctorParam})"
            .replace("{className}", this.className)
            .replace("{ctorParam}", this.getCtorParam(json));
        return this.formatLine(code)
            + this.parseNodeName();
    }

    parseComment(json) {
        return "\r\n        ///// # " + json["Name"] + "\r\n";
    }

    parseBeforeCtor(json) {
        return ""
    }

    parseAddChild(json, parent = "this", parentType = "") {
        let code = "{parent}.addChild(this.__name)";
        code = code.replace('{parent}', parent);
        code = code.replace('addChild', this.getAddChildFunction(parentType));
        return this.formatLine(code);
    }

    parseCascadeOpacity() {
        return this.formatLine("this.__name.setCascadeOpacityEnabled(true)");
    }

    parseCascadeColor() {
        return this.formatLine("this.__name.setCascadeColorEnabled(true)");
    }

    parseNodeName() {
        if (!this.name) return "";
        return this.formatLine("this.__name.setName({name})".replace("{name}", this.wrap(this.name)));
    }

    parseAnchorPoint(json) {
        const anchor = json["AnchorPoint"];
        if (!anchor) return "";
        const x = anchor["ScaleX"];
        const y = anchor["ScaleY"];
        if (x === undefined && y === undefined) return "";
        let code = "this.__name.setAnchorPoint(cc.p({x}, {y}))"
            .replace("{x}", x || 0)
            .replace("{y}", y || 0);
        return this.formatLine(code);
    }

    parsePosition(json) {
        const posPercent = json["PrePosition"];
        const xPercent = posPercent["X"];
        const yPercent = posPercent["Y"];
        const position = json["Position"];
        const x = position["X"] || 0;
        const y = position["Y"] || 0;
        const usingPercent = xPercent !== 0 || yPercent !== 0;
        if (usingPercent) {
            return this.formatLine("ck.UIUtils.setPositionPercent(this.__name, {xPercent}, {yPercent})"
                .replace("{xPercent}", xPercent)
                .replace("{yPercent}", yPercent)
            );
        }
        if (x !== 0 || y !== 0) {
            return this.formatLine("this.__name.setPosition({x}, {y})"
                .replace("{x}", x)
                .replace("{y}", y)
            );
        }
        return "";
    }

    parseVisible(json) {
        const visible = json["VisibleForFrame"];
        if (visible === false) {
            return this.formatLine("this.__name.setVisible(false)");
        }
        return "";
    }

    parseScale(json) {
        const scale = json["Scale"];
        const scaleX = scale["ScaleX"] || 1;
        const scaleY = scale["ScaleY"] || 1;
        if (scaleX !== 1 || scaleY !== 1) {
            return this.formatLine("this.__name.setScale({x}, {y})"
                .replace("{x}", scaleX)
                .replace("{y}", scaleY)
            );
        }
        return "";
    }

    parseRotation(json) {
        const rotationX = json["RotationSkewX"];
        const rotationY = json["RotationSkewY"];
        if (rotationX && rotationY && rotationX === rotationY) {
            return this.formatLine("this.__name.setRotation({x})"
                .replace("{x}", rotationX)
            );
        }
        let code = "";
        if (rotationX) {
            code += this.formatLine("this.__name.setRotationX({x})"
                .replace("{x}", rotationX)
            );
        }
        if (rotationY) {
            code += this.formatLine("this.__name.setRotationY({y})"
                .replace("{y}", rotationY)
            );
        }
        return code;
    }

    parseOpacity(json) {
        const opacity = json["Alpha"];
        if (opacity !== undefined && opacity !== 255) {
            return this.formatLine("this.__name.setOpacity({opacity})"
                .replace("{opacity}", opacity)
            );
        }
        return "";
    }

    parseColor(json) {
        const color = this.getColor(json["CColor"]);
        if (color !== "cc.color.WHITE") {
            let funcName = this.getSetColorFuncName();
            return this.formatLine("this.__name.funcName({color})"
                .replace("funcName", funcName)
                .replace("{color}", color)
            );
        }
        return "";
    }

    parseFlip(json) {
        const flipX = json["FlipX"] || false;
        const flipY = json["FlipY"] || false;
        let code = "";
        if (flipX) code += this.formatLine("this.__name.setFlippedX(true)");
        if (flipY) code += this.formatLine("this.__name.setFlippedY(true)");
        return code;
    }

    parseScale9(json, ignoreScale9 = false) {
        const scale9Enabled = json["Scale9Enable"] || false;
        if (ignoreScale9 || !scale9Enabled) return "";
        const scale9OriginX = json["Scale9OriginX"] || 0;
        const scale9OriginY = json["Scale9OriginY"] || 0;
        const scale9Width = json["Scale9Width"] || 0;
        const scale9Height = json["Scale9Height"] || 0;
        let code = "";
        code += this.formatLine("this.__name.setScale9Enabled(true)");
        code += this.formatLine("this.__name.setCapInsets(cc.rect(scale9OriginX, scale9OriginY, scale9Width, scale9Height))"
            .replace("scale9OriginX", scale9OriginX)
            .replace("scale9OriginY", scale9OriginY)
            .replace("scale9Width", scale9Width)
            .replace("scale9Height", scale9Height)
        );
        return code;
    }

    parseSize(json, ignoreScale9 = false) {
        let code = "";
        code += this.formatLine("this.__name.setUnifySizeEnabled(false)");
        code += this.formatLine("this.__name.ignoreContentAdaptWithSize(false)");
        code += this.parseScale9(json, ignoreScale9);
        const xEnabled = json["PercentWidthEnable"] || json["PercentWidthEnabled"] || false;
        const yEnabled = json["PercentHeightEnable"] || json["PercentHeightEnabled"] || false
        const percentSize = json["PreSize"];
        const xPercent = percentSize ? percentSize["X"] : 1;
        const yPercent = percentSize ? percentSize["Y"] : 1;
        const size = json["Size"];
        const width = size ? size["X"] : 0;
        const height = size ? size["Y"] : 0;
        if (xEnabled && yEnabled) {
            code += this.formatLine("ck.UIUtils.setSizePercent(this.__name, {xPercent}, {yPercent})"
                    .replace("{xPercent}", xPercent)
                    .replace("{yPercent}", yPercent)
            );
        } else if (xEnabled && !yEnabled) {
            code += this.formatLine("ck.UIUtils.setWidthPercent(this.__name, {xPercent})"
                    .replace("{xPercent}", xPercent)
            );
            code += this.formatLine("this.__name.setContentSize(cc.size(this.__name.width, {height}))"
                    .replace("{height}", height)
            );
        } else if (!xEnabled && yEnabled) {
            code += this.formatLine("ck.UIUtils.setHeightPercent(this.__name, {yPercent})"
                    .replace("{yPercent}", yPercent)
            );
            code += this.formatLine("this.__name.setContentSize(cc.size({width}, this.__name.height))"
                    .replace("{width}", width)
            );
        } else {
            code += this.formatLine("this.__name.setContentSize(cc.size({width}, {height}))"
                    .replace("{width}", width)
                    .replace("{height}", height)
            );
        }
        return code;
    }

    parseTouchEnabled(json) {
        const enabled = json["TouchEnable"] || false;
        return this.formatLine("this.__name.setTouchEnabled({enabled})".replace("{enabled}", enabled));
    }

    parseClipping(json, defaultValue = false) {
        const enabled = json["ClipAble"];
        if (enabled === undefined || enabled === defaultValue) return "";
        return this.formatLine("this.__name.setClippingEnabled({enabled})"
            .replace("{enabled}", enabled)
        );
    }

    parseBgrGradient(json) {
        let code = "";
        const startColor = this.getColor(json["FirstColor"]);
        const endColor = this.getColor(json["EndColor"]);
        code += this.formatLine("this.__name.setBackGroundColor(startColor, endColor)"
            .replace("startColor", startColor)
            .replace("endColor", endColor)
        );
        const colorVector = json["ColorVector"];
        const colorVectorX = colorVector["ScaleX"] || 0;
        const colorVectorY = colorVector["ScaleY"] || 0;
        code += this.formatLine("this.__name.setBackGroundColorVector(cc.p(colorVectorX, colorVectorY))"
            .replace("colorVectorX", colorVectorX)
            .replace("colorVectorY", colorVectorY)
        );
        return code;
    }

    parseBgrColor(json) {
        const singleColor = this.getColor(json["SingleColor"]);
        return this.formatLine("this.__name.setBackGroundColor(singleColor)"
            .replace("singleColor", singleColor)
        );
    }

    parseBgrOpacity(json) {
        const opacity = json["BackColorAlpha"];
        if (opacity === undefined || opacity === 255) return "";
        return this.formatLine("this.__name.setBackGroundColorOpacity({opacity})"
            .replace("{opacity}", opacity)
        );
    }

    parseBgrType(json) {
        const type = json["ComboBoxIndex"] || 0;
        if (!type) return "";
        let code = "";
        code += this.formatLine("this.__name.setBackGroundColorType({type})"
            .replace("{type}", type)
        );
        code += type === 2 ? this.parseBgrGradient(json) : this.parseBgrColor(json);
        code += this.parseBgrOpacity(json);
        return code;
    }

    parseBgrTexture(json) {
        const textureData = json["FileData"];
        let texturePath = textureData ? textureData["Path"] : "";
        let textureType = this.getTextureType(textureData ? textureData["Type"] : "");
        if (!texturePath) return "";
        let code = "";
        const scale9Enabled = json["Scale9Enable"];
        if (scale9Enabled) {
            code += this.formatLine("this.__name.setBackGroundImageScale9Enabled(true)");
            const scale9OriginX = json["Scale9OriginX"] || 0;
            const scale9OriginY = json["Scale9OriginY"] || 0;
            const scale9Width = json["Scale9Width"] || 0;
            const scale9Height = json["Scale9Height"] || 0;
            code += this.formatLine("this.__name.setBackGroundImageCapInsets(cc.rect(scale9OriginX, scale9OriginY, scale9Width, scale9Height))"
                .replace("scale9OriginX", scale9OriginX)
                .replace("scale9OriginY", scale9OriginY)
                .replace("scale9Width", scale9Width)
                .replace("scale9Height", scale9Height)
            );
        }
        code += this.formatLine("this.__name.setBackGroundImage(texturePath, textureType)"
            .replace("texturePath", this.wrap(texturePath))
            .replace("textureType", textureType)
        );
        return code;
    }

    parseLayoutBgr(json) {
        let userData = json["UserData"];
        if (userData && userData.includes("IgnoreFill")) {
            return "";
        }
        return this.parseBgrType(json) + this.parseBgrTexture(json);
    }

    getTextKey(json) {
        let key = json["LabelText"];
        if (!key) return "";
        let number = Number(key);
        if (number) return "";
        if (key.includes(":")) return "";
        if (key.startsWith("This is") || key.startsWith("Player Name")) return "";
        if (key.includes("Holder")) return "";
        if (key.includes("Ex.")) return key;
        let firstChar = key[0];
        number = Number(key);
        if (number) return "";
        return "TXT_" + key.toUpperCase().replace(/ /g, '_').replace(/\n/g, '_');
    }

    getTextString(json) {
        let userData = json["UserData"];
        if (userData && userData.includes("EmptyString")) {
            return "";
        }
        let str = json["LabelText"].split("\n").join("\\n");
        if (userData && userData.includes("KeepString")) {
            return this.wrap(str);
        }
        if (str.startsWith("{")) return "";
        if (Number(str) || str.length === 1) return this.wrap(str);
        let key = this.getTextKey(json);
        if (!key) return "";
        let code = "gm.localize.getText(key)".replace("key", this.wrap(key));
        if (userData && userData.includes("uppercase")) {
            return code + ".toUpperCase()";
        }
        if (userData && userData.includes("lowercase")) {
            return code + ".toLowerCase()";
        }
        return code;
    }

    parseTextString(json) {
        let str = this.getTextString(json);
        if (!str) return "";
        return this.formatLine("this.__name.setString({str})".replace("{str}", str));
    }
    
    parseLayoutComponent(json) {
        let code = "";
        code += this.formatLine("let __nameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.__name)");
        code += this.parseLayoutPositionPercent(json);
        code += this.parseLayoutSizePercent(json);
        code += this.parseLayoutMargin(json);

        let userData = json["UserData"];
        if (userData && userData.includes("FullScreenBackground")) {
            code = this.addIndentAllLine(code);
            code = "        if (!PlatformUtils.hasNotch()) {\r\n" + code + "    }\r\n";
        }

        return code;
    }

    parseLayoutPositionPercent(json) {
        let code = "";
        let positionXPercentEnabled = json["PositionPercentXEnable"] || json["PositionPercentXEnabled"] || false;
        let positionYPercentEnabled = json["PositionPercentYEnable"] || json["PositionPercentYEnabled"] || false;
        let positionXPercent = 0,
            positionYPercent = 0,
            PrePosition = json["PrePosition"];
        if (PrePosition != null) {
            positionXPercent = PrePosition["X"] || 0;
            positionYPercent = PrePosition["Y"] || 0;
        }
        if (positionXPercentEnabled) {
            code += this.formatLine("__nameLayoutComponent.setPositionPercentXEnabled(true)");
            code += this.formatLine("__nameLayoutComponent.setPositionPercentX({x})".replace("{x}", positionXPercent));
        }
        if (positionYPercentEnabled) {
            code += this.formatLine("__nameLayoutComponent.setPositionPercentYEnabled(true)");
            code += this.formatLine("__nameLayoutComponent.setPositionPercentY({y})".replace("{y}", positionYPercent));
        }
        return code;
    }

    parseLayoutSizePercent(json) {
        let code = "";
        let sizeXPercentEnable = json["PercentWidthEnable"] || json["PercentWidthEnabled"]  || false;
        let sizeYPercentEnable = json["PercentHeightEnable"]|| json["PercentHeightEnabled"]  || false;
        let sizeXPercent = 0,
            sizeYPercent = 0,
            PreSize = json["PreSize"];
        if (PreSize != null) {
            sizeXPercent = PreSize["X"] || 0;
            sizeYPercent = PreSize["Y"] || 0;
        }
        let stretchHorizontalEnabled = json["StretchWidthEnable"] || false;
        let stretchVerticalEnabled = json["StretchHeightEnable"] || false;
        if (sizeXPercentEnable) {
            code += this.formatLine("__nameLayoutComponent.setPercentWidthEnabled(true)");
            code += this.formatLine("__nameLayoutComponent.setPercentWidth({x})".replace("{x}", sizeXPercent));
        }
        if (sizeYPercentEnable) {
            code += this.formatLine("__nameLayoutComponent.setPercentHeightEnabled(true)");
            code += this.formatLine("__nameLayoutComponent.setPercentHeight({y})".replace("{y}", sizeYPercent));
        }
        if (stretchHorizontalEnabled) code += this.formatLine("__nameLayoutComponent.setStretchWidthEnabled(true)");
        if (stretchVerticalEnabled) code += this.formatLine("__nameLayoutComponent.setStretchHeightEnabled(true)");
        return code;
    }

    parseLayoutMargin(json) {
        let code = "";
        let horizontalEdge = json["HorizontalEdge"];
        if (horizontalEdge) {
            let leftMargin = json["LeftMargin"] || 0;
            let rightMargin = json["RightMargin"] || 0;
            let horizontalEdgeType = "ccui.LayoutComponent.horizontalEdge.NONE";
            if (horizontalEdge === "LeftEdge") {
                horizontalEdgeType = "ccui.LayoutComponent.horizontalEdge.LEFT";
                code += this.formatLine("__nameLayoutComponent.setHorizontalEdge({type})".replace("{type}", horizontalEdgeType));
                code += this.formatLine("__nameLayoutComponent.setLeftMargin({v})".replace("{v}", leftMargin));
            } else if (horizontalEdge === "RightEdge") {
                horizontalEdgeType = "ccui.LayoutComponent.horizontalEdge.RIGHT";
                code += this.formatLine("__nameLayoutComponent.setHorizontalEdge({type})".replace("{type}", horizontalEdgeType));
                code += this.formatLine("__nameLayoutComponent.setRightMargin({v})".replace("{v}", rightMargin));
            } else if (horizontalEdge === "BothEdge") {
                horizontalEdgeType = "ccui.LayoutComponent.horizontalEdge.CENTER";
                code += this.formatLine("__nameLayoutComponent.setHorizontalEdge({type})".replace("{type}", horizontalEdgeType));
                code += this.formatLine("__nameLayoutComponent.setLeftMargin({v})".replace("{v}", leftMargin));
                code += this.formatLine("__nameLayoutComponent.setRightMargin({v})".replace("{v}", rightMargin));
            }
        }

        let verticalEdge = json["VerticalEdge"];
        if (verticalEdge) {
            let topMargin = json["TopMargin"] || 0;
            let bottomMargin = json["BottomMargin"] || 0;
            let verticalEdgeType = "ccui.LayoutComponent.verticalEdge.NONE";
            if (verticalEdge === "TopEdge") {
                verticalEdgeType = "ccui.LayoutComponent.verticalEdge.TOP";
                code += this.formatLine("__nameLayoutComponent.setVerticalEdge({type})".replace("{type}", verticalEdgeType));
                code += this.formatLine("__nameLayoutComponent.setTopMargin({v})".replace("{v}", topMargin));
            } else if (verticalEdge === "BottomEdge") {
                verticalEdgeType = "ccui.LayoutComponent.verticalEdge.BOTTOM";
                code += this.formatLine("__nameLayoutComponent.setVerticalEdge({type})".replace("{type}", verticalEdgeType));
                code += this.formatLine("__nameLayoutComponent.setBottomMargin({v})".replace("{v}", bottomMargin));
            } else if (verticalEdge === "BothEdge") {
                verticalEdgeType = "ccui.LayoutComponent.verticalEdge.CENTER";
                code += this.formatLine("__nameLayoutComponent.setVerticalEdge({type})".replace("{type}", verticalEdgeType));
                code += this.formatLine("__nameLayoutComponent.setTopMargin({v})".replace("{v}", topMargin));
                code += this.formatLine("__nameLayoutComponent.setBottomMargin({v})".replace("{v}", bottomMargin));
            }
        }

        return code;
    }

    parseFullScreenBackground(json) {
        let userData = json["UserData"];
        if (userData && userData.includes("FullScreenBackground")) {
            return this.formatLine("UIUtils.initFullScreenBackground(this.__name)");
        }
        return ""
    }

    parseBasicAttribute(json) {
        return this.parseCascadeOpacity(json)
            + this.parseCascadeColor(json)
            + this.parseAnchorPoint(json)
            + this.parsePosition(json)
            + this.parseVisible(json)
            + this.parseScale(json)
            + this.parseRotation(json)
            + this.parseOpacity(json)
            + this.parseColor(json)
            + this.parseFlip(json)
            + this.parseLayoutComponent(json);
    }

    /**
     * @virtual
     * @param json
     * @return {string}
     */
    parseCustomAttribute(json) {
        return "";
    }

    /**
     * @param json
     * @return {string}
     */
    parseAfterInitAllChild(json) {
        return "";
    }

    /**
     * Parse a json to a node
     * @param {string} json - ccs json object
     * @param {string} [parent="this"] - parent string
     * @param {string} [parentType=""] - parent type string
     * @return {ParserResult}
     */
    parse(json, parent = "this", parentType = "") {
        this.name = json["Name"];
        let result = new ParserResult();
        result.appendMember(this.name, this.className);
        result.appendCode(this.parseComment(json));
        result.appendCode(this.parseBeforeCtor(json));
        result.appendCode(this.parseConstructor(json));
        result.appendCode(this.parseAddChild(json, parent, parentType));
        result.appendCode(this.parseBasicAttribute(json));
        result.appendCode(this.parseCustomAttribute(json));
        return result;
    }
}

module.exports = BaseParser;