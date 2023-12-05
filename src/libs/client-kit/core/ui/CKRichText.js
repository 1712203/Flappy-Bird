/**
 * Created by Cantaloupe on 4/24/2016.
 */

ck.RichTextColor = {
    RED: "RED",
    GREEN: "GREEN",
    BLUE: "BLUE",
    BLACK: "BLACK",
    WHITE: "WHITE",
    YELLOW: "YELLOW"
};

ck.RichTextAlignment = {
    LEFT: 0,
    RIGHT: 1,
    CENTER: 2,
    JUSTIFIED: 3,
    TOP: 4,
    MIDDLE: 5,
    BOTTOM: 6
};

/**
 * example:
 * var ARENA_DESCRIPTION_1 = "<color = #F4A43C><size = 23><shadow = -2;-2;#F4A43C;1>1. Phần thưởng Vua đấu trường</shadow></size></color>\n- <stroke = 3;#B9F856>Phần thưởng khi tổng kết <image = @path@>0.5</image> event</stroke> :";
 var rt = ck.CustomRichText.create(ARENA_DESCRIPTION_1.replace("@path@", "res/lobby/g_icon.png"));
 * */
ck.CustomRichTextExtend = ccui.RichText.extend({
    LOGTAG: '[ck.CustomRichTextExtend]',

    ctor: function (size) {
        this._super();
        this._curId = 0;

        this._formatTextDirty = false;
        this._richElements = [];
        this._elementRenders = [];
        this._leftSpaceWidth = 0;
        this._verticalSpace = 0;
        this._textHorizontalAlignment = cc.TEXT_ALIGNMENT_LEFT;
        if (cc.sys.isNative)
            this._textVerticalAlignment = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        else
            this._textVerticalAlignment = cc.VERTICAL_TEXT_ALIGNMENT_CENTER;

        this._font = gm.getDefaultFont();
        this._size = 20;
        this._color = cc.color.WHITE;

        if (size !== undefined) {
            size = (size.width !== undefined && size.height !== undefined) ? size : cc.size(size, 0);
        } else {
            size = cc.size(cc.winSize.width, 0);
        }
        this.setContentSize(size);
        this._contentSizeRichText = size;

        this.setCascadeOpacityEnabled(true);

        this.ignoreContentAdaptWithSize(false);

        if (!cc.sys.isNative) {
            this.setLineBreakOnSpace(true);
        }

        this.setName("ck.CustomRichTextExtend");
    },

    getFontName: function () {
        return this._font;
    },

    getFontSize: function () {
        return this._size;
    },

    setTextContentSize: function (size) {
        this.setContentSize(size);
        this._contentSizeRichText = size;
    },

    setDefaultFont: function (font) {
        this._font = font;
    },

    setDefaultSize: function (size) {
        this._size = size;
    },

    setDefaultColor: function (color) {
        this._color = color;
    },

    /**
     * @param {cc.TEXT_ALIGNMENT_RIGHT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_LEFT} val
     */
    setDefaultAlignHorizontal: function (val) {
        if (cc.sys.isNative) {
            this.setAlignmentHorizontal(val);
        } else {
            if (val == ck.RichTextAlignment.RIGHT) val = cc.TEXT_ALIGNMENT_RIGHT;
            else if (val == ck.RichTextAlignment.CENTER) val = cc.TEXT_ALIGNMENT_CENTER;
            else if (val == ck.RichTextAlignment.LEFT) val = cc.TEXT_ALIGNMENT_LEFT;
            this.setTextHorizontalAlignment(val);
        }
    },

    /**
     * @param {cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_TOP} val
     */
    setDefaultAlignVertical: function (val) {
        if (cc.sys.isNative) {
            this.setAlignmentVertical(val);
        } else {
            if (val == ck.RichTextAlignment.BOTTOM) val = cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM;
            else if (val == ck.RichTextAlignment.MIDDLE) val = cc.VERTICAL_TEXT_ALIGNMENT_CENTER;
            else if (val == ck.RichTextAlignment.TOP) val = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
            this.setTextVerticalAlignment(val);
        }
    },


    createLabel: function (text, fontName, fontSize, color, opacity, stroke, shadow) {
        var label = new ccui.Text(text + '', fontName, fontSize);
        label.setTextColor(cc.color(color));
        label.setOpacity(opacity);
        label.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
        if (cc.sys.isNative)
            label.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_TOP);
        else
            label.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
        if (stroke) {
            label.enableOutline(stroke.strokeColor, stroke.strokeSize);
        }
        if (shadow) {
            label.enableShadow(shadow.shadowColor, shadow.shadowOffset, shadow.shadowSize);
        }

        return label;
    },

    appendText: function (text, font, size, color, opacity) {
        if (!text) return;
        var el = new ccui.RichElementText(
            this.getAutoId(),
            (color !== undefined) ? cc.color(color) : this._color,
            (opacity !== undefined) ? opacity : 255,
            text,
            (font !== undefined) ? font : this._font,
            (size !== undefined) ? parseInt(size) : this._size
        );
        this.pushBackElement(el);
    },

    appendTextWithFontDefinition: function (text, fontName, fontSize, fontColor, opacity, stroke, shadow) {
        if (!text) return;
        fontName = (fontName !== undefined) ? fontName : this._font;
        fontSize = (fontSize !== undefined) ? parseInt(fontSize) : this._size;
        fontColor = (fontColor !== undefined) ? cc.color(fontColor) : this._color;
        opacity = (opacity !== undefined) ? opacity : 255;
        var enableStroke = false;
        var enableShadow = false;
        var strokeSize = 1;
        var strokeColor = fontColor;
        var shadowOffsetX = 0;
        var shadowOffsetY = -2;
        var shadowColor = cc.color.BLACK;
        var shadowOffset = cc.size(shadowOffsetX, shadowOffsetY);
        var shadowSize = 1;
        if (stroke != null) {
            var arrStroke = stroke.split(";");
            if (arrStroke.length > 0) {
                enableStroke = true;
                strokeSize = arrStroke[0] != null ? arrStroke[0] : 1;
                strokeColor = arrStroke[1] != null ? cc.color(arrStroke[1]) : cc.color.BLACK;
            }
        }

        if (shadow != null) {
            var arrShadow = shadow.split(";");
            if (arrShadow.length > 0) {
                enableShadow = true;
                shadowOffsetX = arrShadow[0] != null ? arrShadow[0] : 0;
                shadowOffsetY = arrShadow[1] != null ? arrShadow[1] : -2;
                shadowColor = arrShadow[2] != null ? cc.color(arrShadow[2]) : cc.color.BLACK;
                shadowSize = arrShadow[3] != null ? arrShadow[3] : 1;
                shadowOffset = cc.size(shadowOffsetX, shadowOffsetY);
            }
        }
        if (enableStroke || enableShadow) {
            var strokeObj = enableStroke ? { strokeColor: strokeColor, strokeSize: strokeSize } : false;
            var shadowObj = enableShadow ? {
                shadowColor: shadowColor,
                shadowOffset: shadowOffset,
                shadowSize: shadowSize
            } : false;
            var breakLine = "\n";
            if (text.indexOf(breakLine) >= 0) {
                var splitArr = [];
                var tmpStr = text;
                //TODO LOOP WHILE
                while (true) {
                    if (tmpStr == "") {
                        break;
                    }
                    var index1 = tmpStr.indexOf(breakLine);//start search from 0 to end
                    if (index1 == 0) {
                        splitArr.push(breakLine);//start with breakLine
                        //todo find other
                        index1 = tmpStr.indexOf(breakLine, 1);//start search from 1 to end
                    }
                    if (index1 < 0) {
                        splitArr.push(tmpStr);
                        break;//todo not exist breakLine then break loop
                    }

                    var contentText = tmpStr.substr(0, index1);
                    if (contentText != "") {
                        splitArr.push(contentText);
                        splitArr.push(breakLine);
                    }
                    tmpStr = tmpStr.substr(index1 + 1);
                }
                for (var i = 0; i < splitArr.length; ++i) {
                    if (splitArr[i] == breakLine) {
                        this.appendText(breakLine, fontName, fontSize, fontColor, opacity);
                    } else {
                        this.appendTextStrokeShadow(splitArr[i], fontName, fontSize, fontColor, opacity, strokeObj, shadowObj);
                    }
                }
            } else {
                this.appendTextStrokeShadow(text, fontName, fontSize, fontColor, opacity, strokeObj, shadowObj);
            }
        } else {
            this.appendText(text, fontName, fontSize, fontColor, opacity);
        }
    },

    appendTextStrokeShadow: function (text, fontName, fontSize, fontColor, opacity, stroke, shadow) {
        this.appendNode(this.createLabel(text, fontName, fontSize, fontColor, opacity, stroke, shadow));
    },

    appendNode: function (node, color, opacity) {
        if (!node) return;
        //tag, color, opacity, customNode
        var el = new ccui.RichElementCustomNode(
            this.getAutoId(),
            (color !== undefined) ? cc.color(color) : this._color,
            (opacity !== undefined) ? opacity : 255,
            node
        );
        this.pushBackElement(el);
    },

    appendImage: function (filePath, color, opacity) {
        filePath = cc.isString(filePath) ? filePath : '';
        color = color || cc.color(0, 0, 0);
        opacity = cc.isNumber(opacity) ? opacity : 255;
        var sprite = new cc.Sprite();
        var spriteFrame = cc.spriteFrameCache.getSpriteFrame(filePath);
        if (spriteFrame) {
            sprite.setSpriteFrame(spriteFrame);
        } else {
            // cc.warn(this.LOGTAG, '<appendImage>', 'Sprite frame not found', filePath);
        }
        return this.appendNode(sprite, color, opacity);
    },

    appendImageWithScale: function (filePath, color, opacity, scale) {
        filePath = cc.isString(filePath) ? filePath : '';
        color = color || cc.color(0, 0, 0);
        opacity = cc.isNumber(opacity) ? opacity : 255;
        scale = cc.isString(scale) ? Number(scale) : scale;
        scale = cc.isNumber(scale) ? scale : 1;
        var sprite = new cc.Sprite();
        var spriteFrame = cc.spriteFrameCache.getSpriteFrame(filePath);
        if (spriteFrame) {
            sprite.setSpriteFrame(spriteFrame);
        } else {
            // cc.warn(this.LOGTAG, '<appendImage>', 'Sprite frame not found', filePath);
        }
        var originalSize = sprite.getContentSize();
        sprite.setScale(scale);
        sprite.setContentSize(cc.size(originalSize.width * scale, originalSize.height * scale));
        sprite.setAnchorPoint(0.0, 0.5);
        this.appendNode(sprite, color, opacity);
    },

    clearText: function () {
        for (var i = 0; i < this._curId; ++i) {
            this.removeElement(0);
        }
        this._curId = 0;
    },

    getAutoId: function () {
        return ++this._curId;
    },
    /**
     * add symbol ">" or "<" by "@_greater@" and "@_lower@"
     * tag format: <tagName = value>content</tagName>
     * tagName: font, size, color, opacity, image
     * with image, format is <image = filePath></image> or <image = filePath>scaleValue</image> with scaleValue is float 0 -> 1
     * with shadow, format is <shadow = x;y;shadowColorValue;sizeNumber>content</shadow>
     * with stroke, format is <stroke = size;colorValue>content</stroke>
     * */
    setString: function (text, updateHeight) {
        this.clearText();

        var splitArr = [];

        var tmpStr = text;
        //TODO LOOP WHILE
        while (true) {
            var index1 = tmpStr.indexOf("<");//start search from 0 to end
            if (index1 == 0) {
                //todo find second < with format: "<tagName ....>...<"
                index1 = tmpStr.indexOf("<", 1);//start search from 1 to end
            }
            if (index1 < 0) {
                splitArr.push(tmpStr);
                break;//todo not exist < then break loop
            }

            splitArr.push(tmpStr.substr(0, index1));
            tmpStr = tmpStr.substr(index1);
        }

        var tmp1 = [];
        //TODO LOOP FOR
        for (var i = 0; i < splitArr.length; ++i) {
            var tmpIdx = splitArr[i].indexOf(">");
            if (tmpIdx < 0) {
                tmp1.push(splitArr[i]);
                continue;
            }
            tmp1.push(splitArr[i].substr(0, tmpIdx + 1));
            if (tmpIdx + 1 < splitArr[i].length) {
                tmp1.push(splitArr[i].substr(tmpIdx + 1));
            }
        }

        var isInitElement = false;
        var obj;
        var numTag = 0;
        var textForAppend;
        var textForCalculate = "";
        var maxFontSize = this.getFontSize();
        var isImgTag = false;
        //todo LOOP FOR
        for (var i = 0; i < tmp1.length; ++i) {
            if (!isInitElement) {
                numTag = 0;
                obj = {};
                isInitElement = true;
            }
            //check content is text
            if (tmp1[i].indexOf("</") < 0 && tmp1[i].indexOf("<") < 0) {
                if (isImgTag) {
                    obj['scale'] = tmp1[i];
                } else {
                    obj["text"] = tmp1[i];
                }
                //check draw without tag
                if (numTag == 0) {
                    // begin or end of text -> use default format
                    if (obj["text"] !== null && obj["text"] !== undefined) {
                        textForAppend = obj["text"].replace(/@_greater@/g, ">").replace(/@_lower@/g, "<");
                        textForCalculate += textForAppend;
                        if (!cc.sys.isNative) {
                            var index1 = textForAppend.indexOf("\n");
                            if (index1 >= 0) {
                                var temp = textForAppend;
                                var list = temp.split("\n");
                                for (var txt = 0; txt < list.length - 1; txt++) {
                                    this.appendText(list[txt]);
                                    this.appendText("\n");
                                }
                                this.appendText(list[list.length - 1]);
                            }
                            else {
                                this.appendText(textForAppend);
                            }
                        }
                        else {
                            this.appendText(textForAppend);
                        }
                    }
                    isInitElement = false;//require create new element
                }
                continue;//TODO skip bellow
            }
            //check start format
            if (tmp1[i].indexOf("</") < 0 && tmp1[i].indexOf("<") >= 0) {
                // have override format
                numTag++;
                var oneTag = tmp1[i];
                //todo format is <tagName = value>
                var fSpaceIdx = oneTag.indexOf(" ");
                var equalIdx = oneTag.indexOf("=");
                var sSpaceIdx = oneTag.lastIndexOf(" ");
                var endTagIdx = oneTag.indexOf(">");
                var isExistFirstSpace = (fSpaceIdx >= 0) && (fSpaceIdx == (equalIdx - 1));
                var isExistLastSpace = (sSpaceIdx >= 0) && (sSpaceIdx == (equalIdx + 1));
                var tagName, tagValue;
                if (!isExistFirstSpace || !isExistLastSpace) {
                    if (isExistFirstSpace) {
                        //todo format is <tagName =value>
                        tagName = oneTag.substr(1, fSpaceIdx - 1);
                        tagValue = oneTag.substr(equalIdx + 1, endTagIdx - equalIdx - 1);
                    } else if (isExistLastSpace) {
                        //todo format is <tagName= value>
                        tagName = oneTag.substr(1, equalIdx - 1);
                        tagValue = oneTag.substr(sSpaceIdx + 1, endTagIdx - sSpaceIdx - 1);
                    } else {
                        //todo format is <tagName=value>
                        tagName = oneTag.substr(1, equalIdx - 1);
                        tagValue = oneTag.substr(equalIdx + 1, endTagIdx - equalIdx - 1);
                    }
                } else {
                    //todo format is <tagName = value>
                    tagName = oneTag.substr(1, fSpaceIdx - 1);
                    tagValue = oneTag.substr(sSpaceIdx + 1, endTagIdx - sSpaceIdx - 1);
                }
                obj[tagName] = tagValue;
                isImgTag = tagName == "image";
                //check tag image and draw immediately
                if (isImgTag) {
                    if (obj["text"] !== null && obj["text"] !== undefined) {
                        textForAppend = obj["text"].replace(/@_greater@/g, ">").replace(/@_lower@/g, "<");
                        textForCalculate += textForAppend;
                        maxFontSize = Math.max(maxFontSize, obj["size"] != null ? obj["size"] : 0);
                        if (obj["stroke"] != null || obj["shadow"] != null) {
                            this.appendTextWithFontDefinition(textForAppend, obj["font"], obj["size"], obj["color"], obj["opacity"], obj["stroke"], obj["shadow"]);
                        } else {
                            this.appendText(textForAppend, obj["font"], obj["size"], obj["color"], obj["opacity"]);
                        }
                        obj["text"] = null;
                    }
                }
                if (tagValue.indexOf(" ") >= 0) {
                    // cc.error("ck.CustomRichText error setString with tag <" + tagName + "> has contained space symbol value = <" + tagValue + ">");
                }
                continue;//TODO skip bellow
            }
            //check end of format
            if (tmp1[i].indexOf("</") >= 0) {
                // end of format
                //todo </tagName>
                numTag--;
                if (obj["image"] != null) {
                    //draw text before
                    if (obj["scale"] !== null && obj["scale"] !== undefined) {
                        //filePath, color, opacity, scale
                        this.appendImageWithScale(obj["image"], obj["color"], obj["opacity"], obj["scale"]);
                        obj["scale"] = null;
                    } else {
                        //filePath, color, opacity
                        this.appendImage(obj["image"], obj["color"], obj["opacity"]);
                    }
                    textForCalculate += " image ";
                    obj["image"] = null;
                    isImgTag = false;
                    continue;//TODO skip bellow
                }
                //check last tag
                if (numTag <= 0) {
                    if (obj["text"] !== null && obj["text"] !== undefined) {
                        textForAppend = obj["text"].replace(/@_greater@/g, ">").replace(/@_lower@/g, "<");
                        textForCalculate += textForAppend;
                        maxFontSize = Math.max(maxFontSize, obj["size"] != null ? obj["size"] : 0);
                        if (obj["stroke"] != null || obj["shadow"] != null) {
                            this.appendTextWithFontDefinition(textForAppend, obj["font"], obj["size"], obj["color"], obj["opacity"], obj["stroke"], obj["shadow"]);
                        } else {
                            this.appendText(textForAppend, obj["font"], obj["size"], obj["color"], obj["opacity"]);
                        }
                        obj["text"] = null;
                    }
                    isInitElement = false;//require create new element
                }
            }
        }//======== END LOOP
        //todo calculate height
        if (this._contentSizeRichText.height <= 0 || updateHeight) {
            var height = ck.CustomRichTextExtend.getHeightDynamicFromText(this._contentSizeRichText.width, textForCalculate, this.getFontName(), maxFontSize);
            this.setContentSize(cc.size(this._contentSizeRichText.width, height));
        }
    }
});
ck.CustomRichTextExtend.getDynamicContentSizeText = function (width, height, text, fontName, fontSize) {
    if (fontName === undefined) {
        fontName = gm.getDefaultFont();
    }
    if (fontSize === undefined) {
        fontSize = 20;
    }

    if (!this.preDynamicText) {
        this.preDynamicText = new ccui.Text("", fontName, fontSize);
        this.preDynamicText.retain();
        this.preDynamicText.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
        this.preDynamicText.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_TOP);
    }
    this.preDynamicText.setTextAreaSize(cc.size(width, height));
    this.preDynamicText.setString(text);
    return this.preDynamicText.getContentSize();
};
ck.CustomRichTextExtend.getHeightDynamicFromText = function (width, text, fontName, fontSize) {
    return ck.CustomRichTextExtend.getDynamicContentSizeText(width, 0, text, fontName, fontSize).height;
};
ck.CustomRichElementTextExtend = ccui.RichElementText.extend({
    _text: "",
    _fontName: "",
    _fontSize: 0,
    /** @type cc.FontDefinition */
    _fontDefinition: null,
    ctor: function (tag, fontDef, opacity, text) {
        ccui.RichElementText.prototype.ctor.call(this, tag, fontDef.fillStyle, opacity, text, fontDef.fontName, fontDef.fontSize);
        this._type = ccui.RichElement.TEXT;
        this._text = "";
        this._fontName = "";
        this._fontSize = 0;

        this.initWithStringAndTextDefinition(tag, text, fontDef, opacity);
    },
    init: function (tag, color, opacity, text, fontName, fontSize) {
        ccui.RichElementText.prototype.init.call(this, tag, color, opacity, text, fontName, fontSize);
        this._text = text;
        this._fontName = fontName;
        this._fontSize = fontSize;
    },
    initWithStringAndTextDefinition: function (tag, text, /** @type cc.FontDefinition */fontDef, opacity) {
        ccui.RichElement.prototype.init.call(this, tag, fontDef.fillStyle, opacity);
        this._fontDefinition = fontDef;
        this._text = text;
        this._fontName = fontDef.fontName;
        this._fontSize = fontDef.fontSize;
    }
});

/**
 * @class
 */
ck.CustomRichText = {};

/**
 *
 * @param {string} [text=""]
 * @param {cc.Size} [size=cc.size(500, 200)]
 * @param {string} [defFont=""]
 * @param {number} [defSize=20]
 * @param {cc.color} [defColor=cc.color.WHITE]
 * @param {ck.RichTextAlignment} [defAlignHorizontal]
 * @param {ck.RichTextAlignment} [defAlignVertical]
 * @returns {ck.CustomRichTextExtend}
 */
ck.CustomRichText.create = function (text, size, defFont, defSize, defColor, defAlignHorizontal, defAlignVertical) {
    defAlignHorizontal = defAlignHorizontal !== undefined ? defAlignHorizontal : ck.RichTextAlignment.CENTER;
    defAlignVertical = defAlignVertical !== undefined ? defAlignVertical : ck.RichTextAlignment.MIDDLE;
    text = text !== undefined ? text : "";
    defSize = defSize !== undefined ? defSize : 20;
    defColor = defColor !== undefined ? defColor : cc.color.WHITE;
    defFont = defFont !== undefined ? defFont : "";
    size = size !== undefined ? size : cc.size(500, 200);

    var label = new ck.CustomRichTextExtend(size);
    label.setDefaultFont(defFont);
    label.setDefaultColor(defColor);
    label.setDefaultSize(defSize);
    label.setDefaultAlignHorizontal(defAlignHorizontal);
    label.setDefaultAlignVertical(defAlignVertical);
    label.setString(text);
    return label;
};

/**
 * @param {ccui.Text} normalText
 * @returns {ck.CustomRichTextExtend}
 */
ck.CustomRichText.replaceNormalTextWithRichText = function(normalText){
    var str = normalText.getString();
    var size = normalText.getContentSize();
    var font = normalText.getFontName();
    var fontSize = normalText.getFontSize();
    var position = normalText.getPosition();
    var richText = ck.CustomRichText.create(str, size, font, fontSize);

    if (richText) {
        richText.removeFromParent();
        richText.setPosition(position);
        normalText.getParent().addChild(richText);
        normalText.setVisible(false);
    }

    return richText;
};

var RichTextUtils = {
    addPadding: function (str, count = 1){
        var pad = " ".repeat(count);
        return pad + str + pad;
    },

    colorAndStroke: function (str, textColor, strokeColor, thickness){
        return RichTextUtils.color(RichTextUtils.stroke(str, strokeColor, thickness), textColor);
    },

    /**
     * @param {string} str
     * @param {string | object} strokeColor #aabbcc
     * @param {number} thickness
     * @return {string}
     */
    stroke: function (str, strokeColor, thickness){
        strokeColor = RichTextUtils.convertColor(strokeColor);
        return "<stroke = " + thickness + ";" + strokeColor + ">" + str + "</stroke>";
    },

    /**
     * @param {string} str
     * @param {cc.Point} shadowOffset
     * @param {string} shadowColor
     * @param {number} thickness
     * @return {string}
     */
    shadow: function (str, shadowOffset, shadowColor, thickness){
        shadowColor = RichTextUtils.convertColor(shadowColor);
        return "<shadow = " + shadowOffset.x + ";" + shadowOffset.y + ";" + shadowColor + ";" + thickness + ">" + str + "</shadow>";
    },

    fontSize: function (str, fontSize){
        return "<size = " + fontSize + ">" + str + "</size>";
    },

    color: function (str, color){
        color = RichTextUtils.convertColor(color);
        return "<color = " + color + ">" + str + "</color>";
    },

    image: function (path, scale){
        scale = scale || 1;
        return "<image = " + path + ">" + scale + "</image>";
    },

    convertColor: function (color){
        if (typeof color == "object")
            color = cc.colorToHex(color);
        return color;
    }
}

/**
 * @enum
 * @type {{string}}
 */
ck.CustomRichText.Format = {};

/**
 * @class
 * @extends ck.CustomRichText
 */
let CustomRichText = ck.CustomRichText;