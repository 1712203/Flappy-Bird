/**
 * Cocos studio related things
 * @namespace
 * @deprecated Will be removed, please use ccs parser script to parse and use class in _ccs namespace for better performance
 */
ck.ccs = {};

/**
 * Load ccs exported file (json) into node and action
 * Node will run the parsed action timeline
 *
 * @param file Json file path
 * @param path Resource search path
 * @returns {{node, action}} Object store node and action
 * @deprecated Will be removed, please use ccs parser script to parse and use class in _ccs namespace for better performance
 */
ck.ccs.load = function (file, path) {
    const obj = ccs.load(file, path);
    if (!obj || !obj.node) {
        cc.error("<ck.ccs.load> file not found %s", file);
        return obj;
    }
    const nodeSize = obj.node.getContentSize();
    const designSize = ck.getDesignSize();
    if (nodeSize.width === designSize.width && nodeSize.height === designSize.height) {
        ck.ccs.fitWithVisibleSize(obj.node);
    }
    if (obj.action) {
        obj.action.setTag(obj.node.getTag());
        obj.node.runAction(obj.action);
        obj.action.gotoFrameAndPause(0);
    }
    ck.ccs.formatChildren(obj.node);
    return obj;
};

/**
 * Load ccs json file and re-layout it with visible size
 *
 * @param file
 * @param path
 * @returns {{node: cc.Node, action: ccs.ActionTimeline}}
 * @deprecated Will be removed, please use ccs parser script to parse and use class in _ccs namespace for better performance
 */
ck.ccs.loadWithVisibleSize = function (file, path) {
    const object = ck.ccs.load(file, path);
    ck.ccs.fitWithVisibleSize(object.node);
    return object;
};

/**
 * Resize a node with visible size and re-layout children
 *
 * @param {cc.Node} node
 * @deprecated Will be removed, please use ccs parser script to parse and use class in _ccs namespace for better performance
 */
ck.ccs.fitWithVisibleSize = function (node) {
    if (!node) return;
    const size = cc.director.getVisibleSize();
    if (node && size) {
        node.setContentSize(size.width, size.height);
        ccui.helper.doLayout(node);
    }
};

/**
 * Helper function to format all node loaded from cocos studio
 * Children z-order will be increase from 0 to length
 * This Z-order adjustment will be useful in case you want to replace a node with a specific class
 *
 * @param node
 * @deprecated Will be removed, please use ccs parser script to parse and use class in _ccs namespace for better performance
 */
ck.ccs.formatChildren = function (node) {
    if (!node) return;
    node.setCascadeOpacityEnabled(true);
    node.setCascadeColorEnabled(true);
    const children = node.getChildren();
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child) {
            child.setLocalZOrder(i);
            ck.ccs.formatChildren(child);
        }
    }
};

/**
 * Get all children and store as key in node properties (if that key is not existed)
 * @param {cc.Node} node
 * @param {String[]} ignoreNames
 * @deprecated Will be removed, please use ccs parser script to parse and use class in _ccs namespace for better performance
 */
ck.ccs.parseChildren = function (node, ignoreNames) {
    ck.ccs.parseChildrenRecursive(node, node, ignoreNames);
};

/**
 *
 * @param obj
 * @param node
 * @param ignoreNames
 * @deprecated Will be removed, please use ccs parser script to parse and use class in _ccs namespace for better performance
 */
ck.ccs.parseChildrenRecursive = function (obj, node, ignoreNames) {
    if (!node || !obj) return;
    if (ignoreNames && ignoreNames.some(name => name === node.getName())) return;
    const children = node.getChildren();
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (!child) continue;
        const key = child.getName();
        if (key && !obj[key]) {
            obj[key] = child;
        } else if (!key) {
            cc.warn("<ck.ccs.parseChildren> Key %s existed or empty!!!!, node is %s", key, node.getName());
        } else cc.warn("<ck.ccs.parseChildren> obj[%s] is existed!!!!, node is %s", key, node.getName());
        ck.ccs.parseChildrenRecursive(obj, child, ignoreNames);
    }
};

/**
 * Copy all attributes fromNode to toNode
 *
 * @param fromNode
 * @param toNode
 * @deprecated Will be removed, please use ccs parser script to parse and use class in _ccs namespace for better performance
 */
ck.ccs.copyNodeAttributes = function (fromNode, toNode) {
    if (!fromNode || !toNode) return;
    toNode.setName(fromNode.getName());
    toNode.setPosition(fromNode.getPosition());
    toNode.setScaleX(fromNode.getScaleX());
    toNode.setScaleY(fromNode.getScaleY());
    toNode.setRotationX(fromNode.getRotationX());
    toNode.setRotationY(fromNode.getRotationY());
    toNode.setAnchorPoint(fromNode.getAnchorPoint());
    toNode.setLocalZOrder(fromNode.getLocalZOrder());
    toNode.setVisible(fromNode.isVisible());
    toNode.setOpacity(fromNode.getOpacity());
    toNode.setTag(fromNode.getTag());
    toNode.setContentSize(fromNode.getContentSize());
    toNode.setCascadeOpacityEnabled(fromNode.isCascadeOpacityEnabled());
};

/**
 * Copy all layout component fromNode to toNode
 *
 * @param fromNode
 * @param toNode
 * @deprecated Will be removed, please use ccs parser script to parse and use class in _ccs namespace for better performance
 */
ck.ccs.copyLayoutComponent = function (fromNode, toNode) {
    if (!fromNode || !toNode) return;
    /** @type {ccui.LayoutComponent} */
    const fromLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(fromNode);
    /** @type {ccui.LayoutComponent} */
    const toLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(toNode);

    toLayoutComponent.setPositionPercentXEnabled(fromLayoutComponent.isPositionPercentXEnabled());
    toLayoutComponent.setPositionPercentYEnabled(fromLayoutComponent.isPositionPercentYEnabled());
    toLayoutComponent.setPositionPercentX(fromLayoutComponent.getPositionPercentX());
    toLayoutComponent.setPositionPercentY(fromLayoutComponent.getPositionPercentY());

    toLayoutComponent.setPercentWidthEnabled(fromLayoutComponent.isPercentWidthEnabled());
    toLayoutComponent.setPercentHeightEnabled(fromLayoutComponent.isPercentHeightEnabled());
    toLayoutComponent.setPercentWidth(fromLayoutComponent.getPercentWidth());
    toLayoutComponent.setPercentHeight(fromLayoutComponent.getPercentHeight());

    toLayoutComponent.setStretchWidthEnabled(fromLayoutComponent.isStretchWidthEnabled());
    toLayoutComponent.setStretchHeightEnabled(fromLayoutComponent.isStretchHeightEnabled());

    toLayoutComponent.setHorizontalEdge(fromLayoutComponent.getHorizontalEdge());
    toLayoutComponent.setVerticalEdge(fromLayoutComponent.getVerticalEdge());
    toLayoutComponent.setTopMargin(fromLayoutComponent.getTopMargin());
    toLayoutComponent.setBottomMargin(fromLayoutComponent.getBottomMargin());
    toLayoutComponent.setLeftMargin(fromLayoutComponent.getLeftMargin());
    toLayoutComponent.setRightMargin(fromLayoutComponent.getRightMargin());
};

/**
 *
 * @param node
 * @param newSize
 * @deprecated Will be removed, please use ccs parser script to parse and use class in _ccs namespace for better performance
 */
ck.ccs.resetMarginLayoutComponent = function (node, newSize) {
    /** @type {ccui.LayoutComponent} */
    const layoutComponent = ccui.LayoutComponent.bindLayoutComponent(node);
    layoutComponent.setTopMargin(layoutComponent.getTopMargin() - newSize.height * 0.5);
    layoutComponent.setBottomMargin(layoutComponent.getBottomMargin() + newSize.height * 0.5);
    layoutComponent.setLeftMargin(layoutComponent.getLeftMargin() - newSize.width * 0.5);
    layoutComponent.setRightMargin(layoutComponent.getRightMargin() + newSize.width * 0.5);
}

/**
 * Replace a node (create from Cocos Studio) with another (create from class in your code)
 *
 * @param node
 * @param byNode
 * @returns byNode
 * @deprecated Will be removed, please use ccs parser script to parse and use class in _ccs namespace for better performance
 */
ck.ccs.replaceNode = function (node, byNode) {
    if (!node || !byNode) return byNode;

    // Copy attributes
    ck.ccs.copyNodeAttributes(node, byNode);
    ck.ccs.copyLayoutComponent(node, byNode);

    // Move children
    const children = node.getChildren();
    const temp = []; // need that array to not modify children array when removing child
    children.forEach(function(child){
        temp.push(child);
    });
    temp.forEach(function(child){
        if (!child) return;
        child.removeFromParent(false);
        byNode.addChild(child, child.getLocalZOrder());
    });

    // Copy action timeline
    if (node.getTag() !== cc.NODE_TAG_INVALID) {
        const action = node.getActionByTag(node.getTag());
        if (action) {
            byNode.runAction(action);
            action.gotoFrameAndPause(0);
        }
    }

    // Add to parent
    const parent = node.getParent();
    if (parent) parent.addChild(byNode);
    node.removeFromParent(false);

    return byNode;
};

/**
 * Replace a sprite in ccs with progress timer object
 * @param {cc.Sprite} sprite
 * @param {number|cc.ProgressTimer.TYPE_RADIAL|cc.ProgressTimer.TYPE_BAR} [type=cc.ProgressTimer.TYPE_BAR]
 * @returns {cc.ProgressTimer}
 * @deprecated Will be removed, please use ccs parser script to parse and use class in _ccs namespace for better performance
 */
ck.ccs.replaceSpriteByProgressTimer = function (sprite, type = cc.ProgressTimer.TYPE_BAR) {
    if (!sprite) return null;
    const parent = sprite.getParent();
    sprite.removeFromParent(true);
    const timer = new cc.ProgressTimer(sprite);
    timer.setType(type);
    if (parent) parent.addChild(timer);
    ck.ccs.copyNodeAttributes(sprite, timer);
    ck.ccs.copyLayoutComponent(sprite, timer);
    if (type === cc.ProgressTimer.TYPE_BAR) {
        timer.setMidpoint(cc.p(0, 0));
        timer.setBarChangeRate(cc.p(1, 0));
    }
    timer.setCascadeOpacityEnabled(true);
    timer.setCascadeColorEnabled(true);
    sprite.setScale(1);
    return timer;
};

/**
 * Add edit box with text as a template
 * @param {cc.Node} container
 * @param {ccui.Text|cc.Node} text
 * @deprecated Will be removed, please use ccs parser script to parse and use class in _ccs namespace for better performance
 */
ck.ccs.addEditBox = function (container, text) {
    if (!cc.sys.isObjectValid(container)) return null;
    if (!cc.sys.isObjectValid(text)) return null;
    text.setVisible(false);

    // basic
    const size = container.getContentSize();
    const editBox = new cc.EditBox(size, new cc.Scale9Sprite());
    container.addChild(editBox);
    editBox.setAnchorPoint(cc.p(0.5, 0.5));
    editBox.setPosition(size.width * 0.5, size.height * 0.5);
    editBox.setCascadeColorEnabled(true);
    editBox.setCascadeOpacityEnabled(true);

    // text & font
    const fontName = text.getFontName();
    const fontSize = text.getFontSize();
    const fontColor = text.getTextColor();
    editBox.setFontName(fontName);
    editBox.setFontSize(text.getFontSize());
    editBox.setFontColor(fontColor);
    editBox.setPlaceHolder(text.getString());
    editBox.setPlaceholderFontName(fontName);
    editBox.setPlaceholderFontSize(fontSize);
    editBox.setPlaceholderFontColor(fontColor);

    // input
    editBox.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
    editBox.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

    return editBox;
};

/**
 * Add a number edit box into a container node
 * @param {cc.Node} container
 * @param {ccui.Text} text
 * @deprecated Will be removed, please use ccs parser script to parse and use class in _ccs namespace for better performance
 */
ck.ccs.addEditBoxNumber = function (container, text) {
    const editBox = ck.ccs.addEditBox(container, text);
    editBox && editBox.setInputMode(cc.EDITBOX_INPUT_MODE_PHONENUMBER);
    return editBox;
};

/**
 * Add a password edit box into a container node
 * @param {cc.Node} container
 * @param {ccui.Text} text
 * @deprecated Will be removed, please use ccs parser script to parse and use class in _ccs namespace for better performance
 */
ck.ccs.addEditBoxPassword = function (container, text) {
    const editBox = ck.ccs.addEditBox(container, text);
    editBox && editBox.setInputMode(cc.EDITBOX_INPUT_FLAG_PASSWORD);
    return editBox;
};

/**
 * Replace a text by rich text
 * @param {ccui.Text} text
 * @deprecated Will be removed, please use ccs parser script to parse and use class in _ccs namespace for better performance
 * @param {boolean} [disableRemoveTextFromParent=false]
 * @returns {ck.CustomRichTextExtend}
 */
ck.ccs.replaceTextByRichText = function (text, disableRemoveTextFromParent=false) {
    if (!text || !(text instanceof ccui.Text)) {
        cc.warn("ck.ccs", "replaceTextByRichText", "text is null or not a ccui.Text!");
        return null;
    }

    const name = text.getName();
    let alignHorizontal = text.getTextHorizontalAlignment();
    let alignVertical = text.getTextVerticalAlignment();
    const newAlign = this.convertAlignCustomRichText(alignHorizontal, alignVertical);
    alignHorizontal = newAlign.x;
    alignVertical = newAlign.y;
    const size = text.getContentSize();
    const fontSize = text.getFontSize();
    const content = text.getString();
    const textColor = text.getTextColor();
    const font = text.getFontName();
    const richText = ck.CustomRichText.create(content, size, font, fontSize, textColor, alignHorizontal, alignVertical);
    if (richText && text.getParent()) {
        richText.removeFromParent();
        text.getParent().addChild(richText);
    }
    richText.setPosition(text.getPosition());
    richText.setAnchorPoint(text.getAnchorPoint());
    if(!disableRemoveTextFromParent) {
        text.removeFromParent(true);
    }
    richText.setName(name);

    return richText;
}

/**
 * Convert align custom RichText
 * @param {TEXT_ALIGNMENT_LEFT | TEXT_ALIGNMENT_CENTER | TEXT_ALIGNMENT_RIGHT} alignHorizontal
 * @param {VERTICAL_TEXT_ALIGNMENT_TOP | VERTICAL_TEXT_ALIGNMENT_CENTER | VERTICAL_TEXT_ALIGNMENT_BOTTOM} alignVertical
 * @deprecated Will be removed, please use ccs parser script to parse and use class in _ccs namespace for better performance
 */
ck.ccs.convertAlignCustomRichText = function (alignHorizontal, alignVertical) {
    alignHorizontal = cc.isNumber(alignHorizontal) ? alignHorizontal : cc.TEXT_ALIGNMENT_CENTER;
    alignVertical = cc.isNumber(alignVertical) ? alignVertical : cc.VERTICAL_TEXT_ALIGNMENT_CENTER;
    switch (alignHorizontal) {
        case cc.TEXT_ALIGNMENT_CENTER:
            alignHorizontal = ck.RichTextAlignment.CENTER;
            break;
        case cc.TEXT_ALIGNMENT_RIGHT:
            alignHorizontal = ck.RichTextAlignment.RIGHT;
            break;
        case cc.TEXT_ALIGNMENT_LEFT:
            alignHorizontal = ck.RichTextAlignment.LEFT;
            break;

    }
    switch (alignVertical) {
        case cc.VERTICAL_TEXT_ALIGNMENT_TOP:
            alignVertical = ck.RichTextAlignment.TOP;
            break;
        case cc.VERTICAL_TEXT_ALIGNMENT_CENTER:
            alignVertical = ck.RichTextAlignment.MIDDLE;
            break;
        case cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM:
            alignVertical = ck.RichTextAlignment.BOTTOM;
            break;
    }
    return cc.p(alignHorizontal, alignVertical);
}
