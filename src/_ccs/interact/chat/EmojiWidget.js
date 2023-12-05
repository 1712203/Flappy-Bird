/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.EmojiWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.EmojiWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutBackground: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ccui.Layout} */
    _layoutEmoji: null,
    /** @type {_ccs.EmoCrazy} */
    _nodeEmoji: null,


    /**
     * _ccs.EmojiWidget constructor
     * @constructor
     */
    ctor: function () {
        ccui.Widget.prototype.ctor.call(this);
        this.setCascadeOpacityEnabled(true);
        this._initCCSChildren();
    },

    /**
     * Init nodes from ccs
     * @private
     */
    _initCCSChildren: function () {

        ///// # _layoutRoot
        this._layoutRoot = new ccui.Layout();
        this._layoutRoot.setName("_layoutRoot");
        this.addChild(this._layoutRoot);
        this._layoutRoot.setCascadeOpacityEnabled(true);
        this._layoutRoot.setCascadeColorEnabled(true);
        this._layoutRoot.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        this._layoutRoot.setTouchEnabled(true);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(150, 150));

        ///// # _layoutBackground
        this._layoutBackground = new ccui.Layout();
        this._layoutBackground.setName("_layoutBackground");
        this._layoutRoot.addChild(this._layoutBackground);
        this._layoutBackground.setCascadeOpacityEnabled(true);
        this._layoutBackground.setCascadeColorEnabled(true);
        let _layoutBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBackground);
        _layoutBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentWidth(1);
        _layoutBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentHeight(1);
        this._layoutBackground.setTouchEnabled(false);
        this._layoutBackground.setUnifySizeEnabled(false);
        this._layoutBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBackground, 1, 1);

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._layoutBackground.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, -0.02);
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(-0.02);
        _imgBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundLayoutComponent.setPercentWidth(1);
        _imgBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundLayoutComponent.setPercentHeight(0.7);
        this._imgBackground.loadTexture("basics/other/ChatBubble_01.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setScale9Enabled(true);
        this._imgBackground.setCapInsets(cc.rect(99, 21, 104, 22));
        ck.UIUtils.setSizePercent(this._imgBackground, 1, 0.7);
        this._imgBackground.setTouchEnabled(false);

        ///// # _layoutEmoji
        this._layoutEmoji = new ccui.Layout();
        this._layoutEmoji.setName("_layoutEmoji");
        this._layoutRoot.addChild(this._layoutEmoji);
        this._layoutEmoji.setCascadeOpacityEnabled(true);
        this._layoutEmoji.setCascadeColorEnabled(true);
        let _layoutEmojiLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEmoji);
        _layoutEmojiLayoutComponent.setPercentWidthEnabled(true);
        _layoutEmojiLayoutComponent.setPercentWidth(1);
        _layoutEmojiLayoutComponent.setPercentHeightEnabled(true);
        _layoutEmojiLayoutComponent.setPercentHeight(1);
        this._layoutEmoji.setTouchEnabled(false);
        this._layoutEmoji.setUnifySizeEnabled(false);
        this._layoutEmoji.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutEmoji, 1, 1);

        ///// # _nodeEmoji
        this._nodeEmoji = new _ccs.EmoCrazy();
        this._nodeEmoji.setName("_nodeEmoji");
        this._layoutEmoji.addChild(this._nodeEmoji);
        this._nodeEmoji.setCascadeOpacityEnabled(true);
        this._nodeEmoji.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeEmoji, 0.5, 0.03);
        let _nodeEmojiLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeEmoji);
        _nodeEmojiLayoutComponent.setPositionPercentXEnabled(true);
        _nodeEmojiLayoutComponent.setPositionPercentX(0.5);
        _nodeEmojiLayoutComponent.setPositionPercentYEnabled(true);
        _nodeEmojiLayoutComponent.setPositionPercentY(0.03);

    },



});

/**
 * Create EmojiWidget
 * @returns {_ccs.EmojiWidget}
 */
_ccs.EmojiWidget.create = function () {
    return new _ccs.EmojiWidget();
};
