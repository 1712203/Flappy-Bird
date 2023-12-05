/**
 * @class
 * @static
 */
ck.UIUtils = {};

/**
 * @class
 * @static
 */
let UIUtils = ck.UIUtils;

/**
 * Too large font size for ccui.Text causing crashes <br/>
 * This constant is used to avoid this issue <br/>
 * @constant
 * @type {number}
 */
UIUtils.FONT_SIZE_MAX = 100;

/**
 * Size is width or height
 * @enum
 */
UIUtils.SIZE = {
    WIDTH: 0,
    HEIGHT: 1
}

UIUtils.tempUITextSingleLine = null;
UIUtils.tempUITextMultipleLine = null;

UIUtils.getTempUITextSingleLine = function () {
    if (ck.isValid(UIUtils.tempUITextSingleLine)) {
        UIUtils.tempUITextSingleLine.setString("");
        UIUtils.tempUITextSingleLine.setFontName(gm.getDefaultFont());
        UIUtils.tempUITextSingleLine.setFontSize(30);
        UIUtils.tempUITextSingleLine.enableOutline(cc.color("#ffffff"), 0);
        UIUtils.tempUITextSingleLine.enableShadow(cc.color("#ffffff"), cc.size(0, 0), 0);
        return UIUtils.tempUITextSingleLine;
    }
    UIUtils.tempUITextSingleLine = new ck.Text("");
    UIUtils.tempUITextSingleLine.retain();
    return UIUtils.tempUITextSingleLine;
};

UIUtils.getTempUITextMultipleLine = function () {
    if (ck.isValid(UIUtils.tempUITextMultipleLine)) {
        UIUtils.tempUITextMultipleLine.setString("");
        UIUtils.tempUITextMultipleLine.setFontName(gm.getDefaultFont());
        UIUtils.tempUITextMultipleLine.setFontSize(30);
        UIUtils.tempUITextMultipleLine.enableOutline(cc.color("#ffffff"), 0);
        UIUtils.tempUITextMultipleLine.enableShadow(cc.color("#ffffff"), cc.size(0, 0), 0);
        UIUtils.tempUITextMultipleLine.ignoreContentAdaptWithSize(true);
        return UIUtils.tempUITextMultipleLine;
    }
    UIUtils.tempUITextMultipleLine = new ck.Text("");
    UIUtils.tempUITextMultipleLine.ignoreContentAdaptWithSize(true);
    UIUtils.tempUITextMultipleLine.retain();
    return UIUtils.tempUITextMultipleLine;
};

/**
 * Get renderer size of a ck.Text
 * @param {ck.Text} text
 */
UIUtils.getTextRendererSize = function (text) {
    if (!text || !ck.isValid(text)) return;
    let tempText = UIUtils.getTempUITextSingleLine();
    if (!ck.isValid(tempText)) return text.getVirtualRendererSize();
    tempText.setString(text.getString());
    tempText.setFontName(text.getFontName());
    tempText.setFontSize(text.getFontSize());
    if (text.__strokeEnabled) {
        text.enableOutline(text.__strokeColor, text.__strokeSize);
    }
    if (text.__shadowEnabled) {
        text.enableShadow(text.__shadowColor, text.__shadowOffset, text.__shadowBlurRadius);
    }
    return tempText.getVirtualRendererSize();
};

/**
 * Get font size to fit a text multiple line to a container
 * @param {ck.Text} text
 * @param {cc.Size} container
 */
UIUtils.getFontSizeToFitMultipleLine = function (text, container) {
    if (!text || !ck.isValid(text)) return;
    if (!container) return;
    let tempText = UIUtils.getTempUITextMultipleLine();
    if (!ck.isValid(tempText)) return text.getFontSize();
    tempText.setString(text.getString());
    tempText.setFontName(text.getFontName());
    tempText.setFontSize(text.getFontSize());
    if (text.__strokeEnabled) {
        text.enableOutline(text.__strokeColor, text.__strokeSize);
    }
    if (text.__shadowEnabled) {
        text.enableShadow(text.__shadowColor, text.__shadowOffset, text.__shadowBlurRadius);
    }
    tempText.setTextAreaSize(cc.size(container.width, 0));
    let fontSize = tempText.getFontSize();
    let textHeight = tempText.height;
    if (textHeight <= container.height || fontSize <= 0) return fontSize;
    while (true) {
        fontSize -= 1;
        tempText.setFontSize(fontSize);
        textHeight = tempText.height;
        if (textHeight <= container.height || fontSize <= 0)
            break;
    }

    return fontSize;
};

/**
 * Get world position of a node <br/>
 * @param {cc.Node} node - This node must has a parent to work
 * @returns {cc.Point}
 */
UIUtils.getWorldPosition = function (node) {
    if (!(node instanceof cc.Node)) return cc.p(0, 0);
    if (!ck.isValid(node)) return cc.p(0, 0);
    const parent = node.getParent();
    if (!parent) return cc.p(0, 0);
    return parent.convertToWorldSpace(node.getPosition());
};

/**
 * Get world position of a node <br/>
 * @param {cc.Node} node - This node must has a parent to work
 * @param {cc.Point} position
 */
UIUtils.setWorldPosition = function (node, position) {
    if (!(node instanceof cc.Node)) return cc.p(0, 0);
    if (!ck.isValid(node)) return cc.p(0, 0);
    const parent = node.getParent();
    if (!parent) return;
    position = parent.convertToNodeSpace(position);
    node.setPosition(position)
};

/**
 * Scale a background to fill the screen
 * @param {cc.Node} background
 * @returns {number} - The background scale
 */
UIUtils.scaleBackground = function (background) {
    if (!background) return 0;
    if (background.width <= 0 || background.height <= 0) return 0;
    const scaleX = cc.winSize.width / background.width;
    const scaleY = cc.winSize.height / background.height;
    const scale = Math.max(scaleX, scaleY);
    background.setScale(scale);
    return scale;
};

// noinspection DuplicatedCode
/**
 * Set a node position to make it in center of its parent
 * @param {cc.Node} node
 * @param {cc.Node} [parent]
 */
UIUtils.alignCenter = function (node, parent) {
    if (!ck.isValid(node)) return;
    parent = parent || node.getParent();
    if (!parent) return;
    const size = parent.getContentSize();
    node.setPosition(cc.p(size.width * 0.5, size.height * 0.5));
    UIUtils.clearPositionLayoutComponent(node);
};

/**
 * Get total width for nodes <br/>
 * This is a helper function for align functions
 * @param {cc.Node[]} nodes
 * @param {number} [margin=0]
 * @returns {number}
 */
UIUtils.getTotalWidth = function (nodes, margin = 0) {
    if (!nodes || nodes.length <= 0) return 0;
    const nNodes = nodes.length;
    let width = margin * (nNodes - 1);
    for (let i = 0; i < nNodes; i++) {
        const node = nodes[i];
        if (node) width += node.width * node.getScaleX();
    }
    return width;
};

/**
 * Align center (horizontal) for a list of nodes <br/>
 * @param {cc.Node[]} nodes
 * @param {number} [margin=0] - Distance between nodes
 * @param {cc.Node} [parent=null] - Parent of all nodes in the array
 * @example
 *  UIUtils.alignCenterNodes([imageIcon, textAmount, bonusIcon], 10);
 */
UIUtils.alignCenterNodes = function (nodes, margin = 0, parent = null) {
    if (!nodes || nodes.length < 1) return;
    const firstNode = nodes[0];
    parent = parent || firstNode.getParent();
    if (!parent) return;
    const width = UIUtils.getTotalWidth(nodes, margin);
    const center = parent.width * 0.5;
    let x = center - width * 0.5;
    const nNodes = nodes.length;
    for (let i = 0; i < nNodes; i++) {
        const node = nodes[i];
        if (!node) continue;
        const nodeWidth = node.width * node.getScaleX();
        const anchorX = node.getAnchorPoint().x;
        node.setPositionX(x + nodeWidth * anchorX);
        x += nodeWidth + margin;
    }
};

/**
 * Align center all children of a node
 * @param {cc.Node} node
 * @param {number} [margin=0] - Distance between nodes
 */
UIUtils.alignCenterChildren = function (node, margin = 0) {
    if (!ck.isValid(node)) return;
    UIUtils.alignCenterNodes(node.getChildren(), margin);
};

/**
 * Create a ck.TextWithIcon with format "-1,0000,000<icon>"
 * @param {string} font - Font name
 * @param {number} amount - Item amount
 * @param {string} icon - Icon file name / sprite frame name
 * @param {number} [textureType=ccui.Widget.PLIST_TEXTURE]
 * @returns {ck.TextWithIcon}
 */
UIUtils.createTextSpentItem = function (font, amount, icon, textureType = ccui.Widget.PLIST_TEXTURE) {
    const str = "-" + StringUtils.formatNumber(amount);
    return ck.TextWithIcon.create(str, font, icon, textureType);
};

/**
 * Create a ck.TextWithIcon with format "+1,0000,000<icon>"
 * @param {string} font - Font name
 * @param {number} amount - Item amount
 * @param {string} icon - Icon file name / sprite frame name
 * @param {number} [textureType=ccui.Widget.PLIST_TEXTURE]
 * @param {number} maxFormatAmount Maximum number to format
 * @returns {ck.TextWithIcon}
 */
UIUtils.createTextEarnItem = function (font, amount, icon, textureType = ccui.Widget.PLIST_TEXTURE, maxFormatAmount) {
    const str = "+" + StringUtils.formatNumber(amount, maxFormatAmount);
    return ck.TextWithIcon.create(str, font, icon, textureType);
};

/**
 * Call a function in next frame
 * @param {Function} callback
 */
UIUtils.doInNextFrame = function (callback) {
    const scene = cc.director.getRunningScene();
    if (!ck.isValid(scene)) return;
    scene.scheduleOnce(callback, 0);
};

/**
 *  Node is scale to fit within the size </br>
 * Target scale will be Math.min(scaleX, scaleY) <br/>
 * @param {cc.Node} node
 * @param {cc.Size} size
 */
UIUtils.fitMin = function (node, size) {
    if (!ck.isValid(node)) return;
    if (!size) return;
    const scaleX = node.width > 0 ? size.width / node.width : node.getScaleX();
    const scaleY = node.height > 0 ? size.height / node.height : node.getScaleY();
    const scale = Math.min(scaleX, scaleY);
    node.setScale(scale);
};

/**
 * Node is scale to cover the size </br>
 * Target scale will be Math.max(scaleX, scaleY) <br/>
 * @param {cc.Node} node
 * @param {cc.Size} size
 */
UIUtils.fitMax = function (node, size) {
    if (!ck.isValid(node)) return;
    if (!size) return;
    const scaleX = node.width > 0 ? size.width / node.width : node.getScaleX();
    const scaleY = node.height > 0 ? size.height / node.height : node.getScaleY();
    const scale = Math.max(scaleX, scaleY);
    node.setScale(scale);
};

/**
 * Check if a sprite frame is existed in cc.spriteFrameCache
 * @param {string} key
 * @returns {boolean}
 */
UIUtils.hasSpriteFrame = function (key) {
    const frame = cc.spriteFrameCache.getSpriteFrame(key);
    return frame !== undefined && frame !== null;
};

/**
 * Check and create sprite with frame name (safe way - if there is no frame, just create empty sprite)
 * @param {String} spriteFrameName
 * @returns {cc.Sprite}
 */
ck.UIUtils.createSpriteWithFrameName = function (spriteFrameName) {
    var sprite = new cc.Sprite();
    sprite.setCascadeOpacityEnabled(true);
    var spriteFrame = cc.spriteFrameCache.getSpriteFrame(spriteFrameName);
    if (spriteFrame) {
        sprite.setSpriteFrame(spriteFrame);
    }
    return sprite;
}

/**
 * Set grayscale a widget
 * @param widget {ccui.Widget} widget want to grayscale
 * @param enabled {boolean} condition for grayscale
 */
UIUtils.setGrayscaleEnabled = function (widget, enabled) {
    if (!ck.isValid(widget)) return;

    // Nothing to do with ccui.Layout
    if (widget instanceof ccui.Layout) return;

    // Grayscale for text
    if (widget instanceof ccui.Text) {
        this.setTextGrayscaleEnabled(widget, enabled);
        return;
    }

    // Grayscale for widget with shader
    if (enabled) {
        ShaderUtils.grayScale(widget);
    } else ShaderUtils.clearGLProgramState(widget);
};

/**
 * Set grayscale a widget and all children
 * @param widget {ccui.Widget} widget want to grayscale all child
 * @param enabled {Boolean} condition for grayscale
 */
UIUtils.setAllChildGrayscaleEnabled = function (widget, enabled) {
    if (!ck.isValid(widget)) return;
    this.setGrayscaleEnabled(widget, enabled);
    const children = widget.getChildren();
    children.forEach(child => {
        if (!ck.isValid(child)) return;
        this.setAllChildGrayscaleEnabled(child, enabled);
    });
};

/**
 * Set grayscale a ccui.Text (include text color, stroke style and shadow style)
 * @param {ccui.Text} widget
 * @param {boolean} enabled
 */
UIUtils.setTextGrayscaleEnabled = function (widget, enabled) {
    if (enabled) {
        const colorTextGrayscale = UIUtils.getColorGrayscale(widget.getTextColor());
        // backup
        widget.__textColor = widget.getTextColor();
        // setColor
        widget.setTextColor(colorTextGrayscale);
        if (widget.__strokeEnabled) {
            const colorStrokeGrayscale = UIUtils.getColorGrayscale(widget.__strokeColor);
            widget.enableOutline(colorStrokeGrayscale, widget.__strokeSize);
        }
        if (widget.__shadowEnabled) {
            const colorShadowGrayscale = UIUtils.getColorGrayscale(widget.__shadowColor);
            widget.enableShadow(colorShadowGrayscale, widget.__shadowOffset, widget.__shadowBlurRadius);
        }
    } else {
        if(widget.__textColor)
            widget.setTextColor(widget.__textColor);
        if (widget.__strokeEnabled) {
            widget.enableOutline(widget.__strokeColor, widget.__strokeSize);
        }
        if (widget.__shadowEnabled) {
            widget.enableShadow(widget.__shadowColor, widget.__shadowOffset, widget.__shadowBlurRadius);
        }
    }
};

/**
 * Get a grayscale color of a color
 * @param {cc.Color} color - Color want to grayscale
 * @return {cc.Color} - grayscale of input color
 */
UIUtils.getColorGrayscale = function (color) {
    const avgValue = (color.r + color.g + color.b) / 3;
    return cc.color(avgValue, avgValue, avgValue);
};

/**
 * Change font size of a text to fit a target width
 * @param {ccui.Text} text - Text want to change font size
 * @param {number} targetWidth - Target width
 * @param {boolean} [isFitMax=false] - Flag if true: keep fit if target width is bigger than current width of text - Default: false
 */
UIUtils.fitTextWidth = function (text, targetWidth, isFitMax = false) {
    if (!ck.isValid(text) || targetWidth <= 0) return;
    const curFontSize = text.getFontSize();
    const currentWidth = text.width;
    if (!isFitMax && targetWidth >= currentWidth) return;
    const fontSize = curFontSize * (targetWidth / currentWidth);
    if (fontSize > UIUtils.FONT_SIZE_MAX) {
        cc.error("[UIUtils.fitTextWidth] Calculate font size is bigger than FONT_SIZE_MAX (" + UIUtils.FONT_SIZE_MAX + "), calculate font size: " + fontSize);
        return;
    }
    text.setFontSize(fontSize);
};

/**
 * Change font size of a text to fit it custom size in 1 line
 * @param {ccui.Text} text
 * @param {Boolean} [isFitMax=false] - Flag if true: keep fit if target width is bigger than current width of text - Default: false
 * @param {cc.Size} [virtualRendererSize=null] - Force renderer size text - Default: null
 */
UIUtils.fitTextCustomSizeSingleLine = function (text, isFitMax, virtualRendererSize) {
    if (!text || !ck.isValid(text)) return;
    if (!cc.isFunction(text.ignoreContentAdaptWithSize)) {
        cc.warn("[UIUtils.fitTextCustomSize] This type of text has NO ignoreContentAdaptWithSize function");
        return;
    }
    if (!cc.isFunction(text.getVirtualRendererSize)) {
        cc.warn("[UIUtils.fitTextCustomSize] This type of text has NO getVirtualRendererSize function");
        return;
    }
    if (!text.__customSize) {
        cc.warn("[UIUtils.fitTextCustomSize] This type of text has NO __customSize value");
        return;
    }

    text.ignoreContentAdaptWithSize(true);
    let layoutComponent = ccui.LayoutComponent.bindLayoutComponent(text);
    if (layoutComponent) {
        layoutComponent.setPercentWidthEnabled(false);
        layoutComponent.setPercentHeightEnabled(false);
    }

    if (!virtualRendererSize)
        virtualRendererSize = UIUtils.getTextRendererSize(text);
    const contentSize = text.__customSize;
    const curFontSize = text.getFontSize();
    if (!isFitMax && contentSize.width >= virtualRendererSize.width) {
        text.ignoreContentAdaptWithSize(false);
        text.setContentSize(contentSize);
        return;
    }

    const fontSize = curFontSize * (contentSize.width / virtualRendererSize.width);
    if (fontSize > UIUtils.FONT_SIZE_MAX) {
        text.ignoreContentAdaptWithSize(false);
        text.setContentSize(contentSize);
        cc.warn("[UIUtils.fitTextCustomSizeSingleLine] Calculate font size is bigger than FONT_SIZE_MAX (" + UIUtils.FONT_SIZE_MAX + "), calculate font size: " + fontSize);
        return;
    }
    text.setFontSize(fontSize);
};

/**
 * Change font size of a text to fit it custom size in multiple
 * @param {ccui.Text} text
 * @param {Boolean} [isFitMax=false] - Flag if true: keep fit if target width is bigger than current width of text - Default: false
 */
UIUtils.fitTextCustomSizeMultipleLine = function (text, isFitMax) {
    if (!text || !ck.isValid(text)) return;
    if (!cc.isFunction(text.ignoreContentAdaptWithSize)) {
        cc.warn("[UIUtils.fitTextCustomSize] This type of text has NO ignoreContentAdaptWithSize function");
        return;
    }
    if (!cc.isFunction(text.getContentSize)) {
        cc.warn("[UIUtils.fitTextCustomSize] This type of text has NO getContentSize function");
        return;
    }
    if (!text.__customSize) {
        cc.warn("[UIUtils.fitTextCustomSize] This type of text has NO __customSize value");
        return;
    }

    let layoutComponent = ccui.LayoutComponent.bindLayoutComponent(text);
    if (layoutComponent) {
        layoutComponent.setPercentWidthEnabled(false);
        layoutComponent.setPercentHeightEnabled(false);
    }

    const targetSize = text.__customSize;
    let fontSize = UIUtils.getFontSizeToFitMultipleLine(text, targetSize);
    text.setFontSize(fontSize);

    // fit width
    const content = text.getString();
    const longestWord = content.split("\n").join(" ").split(" ").reduce(function (longest, currentWord) {
        if (currentWord.length > longest.length)
            return currentWord;
        else
            return longest;
    }, "");
    const sampleText = new ccui.Text(longestWord, text.getFontName(), text.getFontSize());
    UIUtils.fitTextCustomSizeSingleLine(text, false, sampleText.getContentSize());
    sampleText.removeFromParent(true);
};

/**
 * Add a black layer to parent (usually a background to highlight)
 * @param {cc.Layer|cc.Scene} parent
 * @param {Number} alpha in range [0; 255];
 * @returns {cc.LayerColor} The created black layer
 */
 ck.UIUtils.addBlackLayer = function (parent, alpha) {
    if (!ck.isValid(parent)) {
        return;
    }
    alpha = alpha || 255 * 0.75;
    var layer = new cc.LayerColor(cc.color(0, 0, 0, alpha), cc.winSize.width, cc.winSize.height);
    parent.addChild(layer, -1);
    layer.ignoreAnchorPointForPosition(false);
    layer.setPosition(cc.winSize.width * 0.5, cc.winSize.height * 0.5);
    return layer;
};

/**
 * @param {cc.Node} parent
 * @param {number} zOrder
 * @param {string} message
 * @param {number} fontSize
 * @param {cc.Point} pos
 * @param {number} delayTime
 * @param {Function} callback
 * @returns {ccui.Text}
 */
ck.UIUtils.notifyToast = function (parent, zOrder, message, fontSize, pos, delayTime, callback) {
    if(!ck.isValid(parent)) return this.createUTLabel(fontSize);
    if(delayTime == undefined || delayTime == null)
        delayTime = 0.1;
    var label = this.createUTLabel(fontSize);
    label.setString(message);
    label.setPosition(pos);
    parent.addChild(label, zOrder);
    var finish = cc.callFunc(function () {
        if (callback) callback();
    }.bind(this));
    label.runAction(cc.sequence(cc.moveBy(0.9, 0, 35), cc.delayTime(delayTime), cc.fadeOut(0.3), cc.removeSelf(), finish));
    return label;
};

/**
 * @param {cc.Node} child
 * @param {cc.Node} newParent
 * @param {number} [zOrder=1]
 * @param {string} [name=""]
 * @param {boolean} [clean=true]
 */
ck.UIUtils.changeParent = function (child, newParent, zOrder = 1, name = "", clean = true) {
    zOrder = zOrder || 1;
    name = name || "";
    if(clean == undefined)
        clean = true;
    if (!ck.isValid(child)) return;
    if (!ck.isValid(newParent)) return;
    var oldParent = child.getParent();
    var posInWorld = oldParent ? oldParent.convertToWorldSpace(child.getPosition()) : null;
    var posInNewParent = posInWorld ? newParent.convertToNodeSpace(posInWorld) : cc.p(0, 0);
    child.retain();
    child.removeFromParent(clean);
    newParent.addChild(child, zOrder, name);
    child.setPosition(posInNewParent);
    child.release();
};

/**
 * Set enabled for a widget <br/>
 * Widget will be grayscale if enabled is false
 * @param {ccui.Widget} widget
 * @param {boolean} enabled
 */
UIUtils.setWidgetEnabled = function (widget, enabled) {
    if (!ck.isValid(widget)) return;
    if (!widget instanceof ccui.Widget) return;
    widget.setEnabled(enabled);
    UIUtils.setAllChildGrayscaleEnabled(widget, !enabled);
};

/**
 * Load texture for an image view and reset origin size of resource
 * @param {ccui.ImageView} image
 * @param {string} file
 * @param {number} [textureType=ccui.Widget.PLIST_TEXTURE]
 */
UIUtils.loadTexture = function (image, file, textureType = ccui.Widget.PLIST_TEXTURE) {
    if (!ck.isValid(image)) return;
    if (!file) return;
    image.loadTexture(file, textureType);
    image.setContentSize(image.getVirtualRendererSize());
};

/**
 * Add click event listener with a delay before call the callback <br/>
 * Why delay? Wait for animation pressed to finish then do whatever in callback
 *
 * @param {ccui.Widget} widget
 * @param {Function} callback
 * @param {number} [delay=0]
 */
UIUtils.addClickListenerWithDelay = function (widget, callback, delay = 0) {
    if (!ck.isValid(widget)) return;
    if (delay > 0) {
        widget.addClickEventListener(function(){
            setTimeout(callback,delay * 1000);
        });
    } else {
        widget.addClickEventListener(callback);
    }
};

/**
 * Add touch event listener with a delay before call the callback <br/>
 * Why delay? Wait for animation pressed to finish then do whatever in callback
 *
 * @param {ccui.Widget} widget
 * @param {Function} callback
 * @param {number} [delay=0]
 */
UIUtils.addTouchListenerWithDelay = function (widget, callback, delay = 0) {
    if (!ck.isValid(widget)) return;
    if (delay > 0) {
        widget.addTouchEventListener(function(){
            setTimeout(callback,delay * 1000);
        });
    } else {
        widget.addTouchEventListener(callback);
    }
};

/**
 * Init a pressable widget (add click listener and animation when press)
 * @param {ccui.Widget} widget
 * @param {Function} onPressed
 * @param {number} [delay=0.1] - Delay time before call onPressed function after a widget is pressed (used for animation)
 * @param {number} scaleSmall
 * @param {number} scaleBig
 */
UIUtils.initPressableWidget = function (widget, onPressed, delay = 0, scaleSmall = 0.9, scaleBig = 1) {
    if (!ck.isValid(widget)) return;
    widget.setTouchEnabled(true);
    AnimationUtils.addPressAnimation(widget, undefined, undefined, scaleSmall, scaleBig);
    UIUtils.addClickListenerWithDelay(widget, onPressed, delay);
};

/**
 * Init a pressable widget (add touch listener and animation when press)
 * @param {ccui.Widget} widget
 * @param {Function} onPressed
 * @param {number} [delay=0.1] - Delay time before call onPressed function after a widget is pressed (used for animation)
 * @param {number} scaleSmall
 * @param {number} scaleBig
 */
UIUtils.initPressableWidgetTouch = function (widget, onPressed, delay = 0, scaleSmall = 0.9, scaleBig = 1) {
    if (!ck.isValid(widget)) return;
    widget.setTouchEnabled(true);
    AnimationUtils.addPressAnimation(widget, undefined, undefined, scaleSmall, scaleBig);
    UIUtils.addTouchListenerWithDelay(widget, onPressed, delay);
};

/**
 * @param {cc.Sprite} sprite
 * @returns {cc.Sprite}
 */
UIUtils.cloneSprite = function (sprite) {
    const cloneSprite = new cc.Sprite(sprite.getSpriteFrame());
    cloneSprite.setPosition(sprite.getPosition());
    cloneSprite.setScaleX(sprite.getScaleX());
    cloneSprite.setScaleY(sprite.getScaleY());
    cloneSprite.setRotation(sprite.getRotationX());
    return cloneSprite;
};

/**
 * Set content size by percent
 * @param {cc.Node} node
 * @param {number} widthPercent
 * @param {number} heightPercent
 */
UIUtils.setSizePercent = function (node, widthPercent, heightPercent) {
    if (!ck.isValid(node)) return;
    const parent = node.getParent();
    if (!ck.isValid(parent)) return;
    const size = parent.getContentSize();
    //widget.setLayoutComponentEnabled(true);
    node.setContentSize(cc.size(size.width * widthPercent, size.height * heightPercent));
};

/**
 * Set width by percent
 * @param {cc.Node} node
 * @param {number} widthPercent
 */
UIUtils.setWidthPercent = function (node, widthPercent) {
    if (!ck.isValid(node)) return;
    const parent = node.getParent();
    if (!ck.isValid(parent)) return;
    const size = parent.getContentSize();
    node.setContentSize(size.width * widthPercent, node.getContentSize().height);
};

/**
 * Set height by percent
 * @param {cc.Node} node
 * @param {number} heightPercent
 */
UIUtils.setHeightPercent = function (node, heightPercent) {
    if (!ck.isValid(node)) return;
    const parent = node.getParent();
    if (!ck.isValid(parent)) return;
    const size = parent.getContentSize();
    node.setContentSize(node.getContentSize().width, size.height * heightPercent);
};

/**
 * Change a node size to fill it into another node
 * @param {cc.Node} node
 * @param {cc.Node} container
 */
UIUtils.fillContainer = function (node, container) {
    if (!ck.isValid(node)) return;
    if (!ck.isValid(container)) return;
    const size = container.getContentSize();
    node.setContentSize(size);
    node.setAnchorPoint(cc.p(0.5, 0.5));
    UIUtils.alignCenter(container);
};

/**
 * Set position by percent
 * @param {cc.Node} node
 * @param {number} x
 * @param {number} y
 */
UIUtils.setPositionPercent = function (node, x, y) {
    if (!ck.isValid(node)) return;
    let parent = node.getParent();
    if (!parent) return;
    const size = parent.getContentSize();
    node.setPosition(cc.p(size.width * x, size.height * y));
};

/**
 * @param {string} fileName
 * @param {string} textureName
 * @returns {cc.ParticleSystem}
 */
ck.UIUtils.createParticle = function (fileName, textureName) {
    const particle = new cc.ParticleSystem(fileName);

    if (textureName) {
        const texture = cc.textureCache.addImage(textureName);
        if (texture) particle.setTexture(texture);
        else cc.warn("ck.UIUtils.createParticle", "Particle texture is null");
    }

    return particle;
};

/**
 * @param {ccui.Text} label
 * @param {cc.Color} outlineColor
 * @param {cc.Color} shadowColor
 * @param {number} outlineSize
 */
UIUtils.setOutline = function (label, outlineColor, shadowColor, outlineSize) {
    if (!ck.isValid(label)) return;
    if (label instanceof ccui.TextBMFont) return;
    if (!outlineSize) outlineSize = 1;
    if (outlineColor) label.enableOutline(outlineColor, outlineSize);
    if (shadowColor) label.enableShadow(shadowColor, cc.size(0, -1), 0);
};

/**
 * @param {ccui.Text} label
 */
UIUtils.setTextBtnOrange = function (label) {
    if (!ck.isValid(label)) return;
    label.setTextColor(cc.color(85, 18, 3));
    UIUtils.setOutline(label, null, cc.color(164, 148, 148), 2);
};

/**
 * @param {ccui.ImageView} image
 * @param {string} res
 * @param {number} [texType=ccui.Widget.PLIST_TEXTURE]
 * @param {UIUtils.SIZE} dimensionLimit
 * @param {number} maxValue
 */
UIUtils.reloadImageTexture = function (image, res, texType = ccui.Widget.PLIST_TEXTURE, dimensionLimit, maxValue) {
    if (!image || !ck.isValid(image)) return;
    if (dimensionLimit != undefined && maxValue == undefined)
        maxValue = dimensionLimit == UIUtils.SIZE.WIDTH ? image.width : image.height;

    res = cc.isString(res) ? res : '';
    texType = cc.isNumber(texType) ? texType : ccui.Widget.PLIST_TEXTURE;
    if (texType === ccui.Widget.PLIST_TEXTURE && !UIUtils.hasSpriteFrame(res)) {
        // cc.warn("<Utility.reloadImageTexture>", "sprite frame not found", res);
        return;
    }

    if (cc.isFunction(image.loadTexture)) {
        image.loadTexture(res, texType);
        if (cc.isFunction(image.setContentSize) && cc.isFunction(image.getVirtualRendererSize)) {
            image.setContentSize(image.getVirtualRendererSize());
        }
    }

    var curValue = -1;
    if (dimensionLimit != undefined) {
        curValue = dimensionLimit == UIUtils.SIZE.WIDTH ? image.width : image.height;
        image.setScale(maxValue / curValue);
    }
};

UIUtils.reloadImageTextureWithOldSize = function (image, res, texType, dimensionLimit, maxValue) {
    if (!image || !cc.sys.isObjectValid(image)) return;
    if (texType == undefined)
        texType = ccui.Widget.PLIST_TEXTURE;
    if (!this.hasSpriteFrame(res, texType))
        return;
    if (dimensionLimit != undefined && maxValue == undefined)
        maxValue = dimensionLimit == UIUtils.SIZE.WIDTH ? image.width : image.height;

    var capInsets = null;
    if(image.isScale9Enabled()){
        capInsets = image.getCapInsets();
    }

    var size = image.getContentSize();
    image.loadTexture(res, texType);
    image.setContentSize(size);

    var curValue = -1;
    if (dimensionLimit != undefined) {
        curValue = dimensionLimit == UIUtils.SIZE.WIDTH ? image.width : image.height;
        if (curValue > maxValue) {
            image.setScale(maxValue / curValue);
        }
    }

    if(capInsets){
        image.setScale9Enabled(true);
        image.setCapInsets(capInsets);
    }
},

/**
 * @param {ccui.Button} btn
 * @param {string} normalFile
 * @param {string} pressedFile
 * @param {string} disabledFile
 * @param {number} [textureType=ccui.Widget.PLIST_TEXTURE]
 */
UIUtils.loadButtonTextures = function (btn, normalFile, pressedFile, disabledFile, textureType = ccui.Widget.PLIST_TEXTURE) {
    if (!ck.isValid(btn)) return;
    if (textureType === undefined) textureType = ccui.Widget.PLIST_TEXTURE;
    if (!normalFile) return;
    if (!pressedFile) pressedFile = normalFile;
    if (!disabledFile) disabledFile = normalFile;
    if (textureType === ccui.Widget.PLIST_TEXTURE) {
        if (!this.hasSpriteFrame(normalFile))
        {
            cc.warn("[ck.UIUtils]", "<loadButtonTextures>", "sprite frame not loaded", normalFile);
            return;
        }
        if (!this.hasSpriteFrame(pressedFile))
        {
            cc.warn("[ck.UIUtils]", "<loadButtonTextures>", "sprite frame not loaded", pressedFile);
            return;
        }
        if (!this.hasSpriteFrame(disabledFile))
        {
            cc.warn("[ck.UIUtils]", "<loadButtonTextures>", "sprite frame not loaded", disabledFile);
            return;
        }
    }
    btn.loadTextures(normalFile, pressedFile, disabledFile, textureType);
};

/**
 * @param {ccui.Text} text
 * @param {cc.Node} container
 * @param {number} margin
 */
UIUtils.adjustFontSize = function (text, container, margin) {
    if (margin === undefined) margin = 0;
    if (!ck.isValid(text) || !ck.isValid(container)) {
        return;
    }
    var containerWidth = container.width * container.getScaleX();
    var containerHeight = container.height * container.getScaleY();
    this.adjustFontSizeWithArea(text, cc.size(containerWidth, containerHeight), margin);
};

/**
 * @param {ccui.Text} text
 * @param {cc.Size} size
 * @param {number} margin
 * @returns {number} scale
 */
UIUtils.adjustFontSizeWithArea = function (text, size, margin) {
    if (!ck.isValid(text) || !size) {
        return 1;
    }
    if (margin === undefined) margin = 0;
    var containerWidth = size.width - margin * 2;
    var containerHeight = size.height - margin * 2;

    text.ignoreContentAdaptWithSize(true);
    var textWidth = text.getContentSize().width;
    var textHeight;
    if (textWidth > containerWidth) {
        text.setTextAreaSize(cc.size(containerWidth, 0));

        var currentFontSize = text.getFontSize();
        while (true){
            currentFontSize--;
            text.setFontSize(currentFontSize);
            textHeight = text.getContentSize().height;
            if (textHeight <= containerHeight)
                break;
        }
    }

    var parent = text.getParent();
    if (parent) {
        var scale = 1 / parent.getScale();
        text.setScale(scale);
        return scale;
    }

    return 1;
};

/**
 * @param {ccui.Text} uiText
 * @param {number} targetWidth
 * @param {string} [fontName]
 * @returns {number}
 */
UIUtils.fixTextWidth = function (uiText, targetWidth, fontName) {
    if (!ck.isValid(uiText)) return 0;
    if (fontName === undefined) {
        fontName = uiText.getFontName();
    }
    var str = uiText.getString();
    var fontSize = uiText.getFontSize();

    uiText.ignoreContentAdaptWithSize(true);
    var width = uiText.width;
    if (width > targetWidth) {
        var scale = targetWidth / width;
        var newFontSize = scale * fontSize;
        if (newFontSize < fontSize) {
            uiText.setFontSize(newFontSize);
            return newFontSize;
        }
        else {
            return fontSize;
        }
    }
    return fontSize;
};

/**
 * @param {string} file
 * @param {number} [textureType=ccui.Widget.PLIST_TEXTURE]
 * @returns {ccui.ImageView}
 */
UIUtils.createImageView = function (file, textureType = ccui.Widget.PLIST_TEXTURE) {
    if (!file) return new ccui.ImageView();
    if (!textureType) textureType = ccui.Widget.PLIST_TEXTURE;
    var imageView = new ccui.ImageView();
    this.loadTexture(imageView, file, textureType);
    return imageView;
};

/**
 * @param {number} fontSize
 * @param {cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT} hAlignment
 * @param {cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM} vAlignment
 * @returns {ccui.Text}
 */
UIUtils.createUTLabel = function (fontSize, hAlignment, vAlignment) {
    var label = new ccui.Text();
    label.setFontName(GameManager.DEFAULT_FONT);
    if (hAlignment == undefined) hAlignment = cc.TEXT_ALIGNMENT_LEFT;
    label.setTextHorizontalAlignment(hAlignment);
    if (vAlignment == undefined) vAlignment = cc.VERTICAL_TEXT_ALIGNMENT_CENTER;
    label.setTextVerticalAlignment(vAlignment);
    if (fontSize) label.setFontSize(fontSize);
    return label;
};

/**
 * @param {[]} nodes
 * @param {cc.Point} centerPoint
 * @param {Number} dx
 * @param {Number} [leftIdx]
 * @param {Number} [rightIdx]
 */
UIUtils.layoutHorizontal = function (nodes, centerPoint, dx, leftIdx, rightIdx) {
    leftIdx = leftIdx || 0;
    rightIdx = rightIdx || nodes.length - 1;
    rightIdx = Math.min(rightIdx, nodes.length - 1);
    let nNode = rightIdx - leftIdx + 1;
    let xFirst = centerPoint.x - (nNode - 1)/2 * dx;
    for (let i = 0; i < nNode; i++){
        const node = nodes[leftIdx + i];
        if(!ck.isValid(node)) continue;
        node.setPosition(xFirst + dx * i, centerPoint.y);
    }
};

/**
 *
 * @param {[]} nodes
 * @param {cc.Point} centerPoint
 * @param {Number} dx
 * @param {Number} dy
 * @param {Number} maxCol
 * @param {Number} [nRow]
 */
UIUtils.layoutGrid = function (nodes, centerPoint, dx, dy, maxCol, nRow){
    let nNode = nodes.length;
    nRow = nRow || Math.ceil(nNode/maxCol);
    let yFirst = centerPoint.y + (nRow - 1)/2 * dy;
    for (let i = 0; i < nRow; i++){
        UIUtils.layoutHorizontal(nodes, cc.p(centerPoint.x, yFirst - i * dy), dx, i * maxCol, i * maxCol + maxCol - 1);
    }
};

UIUtils.clearLayoutComponent = function (node) {
    if (!ck.isValid(node)) return;
    let _layoutComponent = ccui.LayoutComponent.bindLayoutComponent(node);
    if (!_layoutComponent) return;
    _layoutComponent.setPositionPercentXEnabled(false);
    _layoutComponent.setPositionPercentYEnabled(false);
    _layoutComponent.setPercentWidthEnabled(false);
    _layoutComponent.setPercentHeightEnabled(false);
};

UIUtils.clearPositionLayoutComponent = function (node) {
    if (!ck.isValid(node)) return;
    let _layoutComponent = ccui.LayoutComponent.bindLayoutComponent(node);
    if (!_layoutComponent) return;
    _layoutComponent.setPositionPercentXEnabled(false);
    _layoutComponent.setPositionPercentYEnabled(false);
};

UIUtils.clearSizeLayoutComponent = function (node) {
    if (!ck.isValid(node)) return;
    let _layoutComponent = ccui.LayoutComponent.bindLayoutComponent(node);
    if (!_layoutComponent) return;
    _layoutComponent.setPercentWidthEnabled(false);
    _layoutComponent.setPercentHeightEnabled(false);
};

UIUtils.center = function (node) {
    if (!ck.isValid(node)) return;
    return cc.p(node.width * 0.5, node.height * 0.5);
};

UIUtils.initFullScreenBackground = function (background) {
    if (!PlatformUtils.hasNotch()) return;
    let backgroundScaleHeight = background.height / background.getParent().height;
    let notchHeight = PlatformUtils.NOTCH_HEIGHT;
    let marginBottom = PlatformUtils.MARGIN_BOTTOM;
    background.height = cc.winSize.height * backgroundScaleHeight;
    background.setAnchorPoint(0.5, 0.5);
    background.setPosition(cc.winSize.width * 0.5, background.height * 0.5 - marginBottom);
};

UIUtils.setContainer = function(widget, container, sizeTurning){
    if(!container || !widget) return;
    if(!sizeTurning) sizeTurning = cc.size(0, 0);
    var anchorPoint = container.getAnchorPoint();
    var container_size = container.getContentSize();
    container_size.width = container_size.width + sizeTurning.width;
    container_size.height = container_size.height + sizeTurning.height;
    widget.setContentSize(container_size);
    widget.setAnchorPoint(anchorPoint);
    container.x = container_size.width*anchorPoint.x;
    container.y = container_size.height*anchorPoint.y;
};

/**
 * @param {cc.Node} parent
 * @param {string} file
 * @param {cc.Point} position
 * @param {boolean} removeOnFinish
 * @param {string} [name=""]
 * @returns {cc.ParticleSystem|null}
 */
UIUtils.addParticleEffect = function (parent, file, position, removeOnFinish, name = "") {
    if (!ck.isValid(parent))
        return null;
    /**
     * @type {cc.ParticleSystem}
     */
    let particle;
    if (name) {
        particle = parent.getChildByName(name);
        if (particle)
            return particle;
    }
    particle = cc.ParticleSystem.create(file);
    particle.setAnchorPoint(cc.p(0.5, 0.5));
    particle.setPosition(position);
    particle.setAutoRemoveOnFinish(removeOnFinish);
    if (name)
        particle.setName(name);
    parent.addChild(particle);
    return particle;
};


UIUtils.getActionButtonMove = function (deltaY, duration_1, duration_2) {
    deltaY = deltaY === undefined ? 29 : deltaY;
    duration_1 = duration_1 === undefined ? 22 / 30 : duration_1;
    duration_2 = duration_2 === undefined ? 28 / 30 : duration_2;
    var move0 = cc.moveBy(duration_1, 0, deltaY);
    var move1 = cc.moveBy(duration_2, 0, -deltaY);
    var moveSeq = cc.sequence(move0, move1);
    var moveRepeat = cc.repeatForever(moveSeq);
    return moveRepeat;
};

UIUtils.getActionButtonScale = function (dx, dy, delay, duration_1, duration_2, duration_3, scale) {
    scale = scale === undefined ? 1 :scale;
    dx = dx === undefined ? 0.1 : dx;
    dy = dy === undefined ? 0.05 : dy;
    delay = delay === undefined ? 17 / 30 : delay;
    duration_1 = duration_1 === undefined ? 5 / 30 : duration_1;
    duration_2 = duration_2 === undefined ? 13 / 30 : duration_2;
    duration_3 = duration_3 === undefined ? 15 / 30 : duration_3;
    var scaleDelay = cc.delayTime(delay);
    var scale0 = cc.scaleTo(duration_1, scale + dx, scale - dx);
    var scale1 = cc.scaleTo(duration_2, scale - dy, scale + dy);
    var scale2 = cc.scaleTo(duration_3, scale, scale);
    var scaleSeq = cc.sequence(scaleDelay, scale0, scale1, scale2);
    var scaleRepeat = cc.repeatForever(scaleSeq);
    return scaleRepeat;
};

UIUtils.hasLogLayer = function (){
   // return ck.isIOS() && !gm.login.isLive();
    return false;
};

UIUtils.customLog = function(...args){
    args.forEach(function(arg, i){
        if (typeof arg == "object")
            args[i] = JSON.stringify(arg);
    })
    var str = args.join(" ");
    LogLayer.addLog(str);
};

/**
 * @param {cc.Node} node
 * @param {string} eventName
 * @param {function} callback
 * @return {null|cc.EventListener}
 */
UIUtils.addListenerToNode = function(node, eventName, callback){
    if (!cc.sys.isObjectValid(node) || typeof node !== "object"){
        cc.warn("<addListenerToNode> node is invalid or not an object");
        return null;
    }
    var key = "__listeners";
    if (!node[key])
        node[key] = [];
    var listener = cc.eventManager.addListener({
        event: cc.EventListener.CUSTOM,
        eventName: eventName,
        callback: callback
    }, node);
    node[key].push(listener);
    return listener;
};

UIUtils.removeListenerForNode = function (node){
    if (!cc.sys.isObjectValid(node) || typeof node !== "object"){
        cc.warn("<addListenerToNode> node is invalid or not an object");
        return;
    }
    var key = "__listeners";
    var listeners = node[key];
    if (cc.isArray(listeners)) {
        listeners.forEach(function (listener) {
            if (listener)
                cc.eventManager.removeListener(listener);
        });
        node[key] = [];
    }
}
