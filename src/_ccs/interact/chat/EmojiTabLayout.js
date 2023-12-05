/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.EmojiTabLayout
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.EmojiTabLayout = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutGridview: null,


    /**
     * _ccs.EmojiTabLayout constructor
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
        this._layoutRoot.setContentSize(cc.size(450, 468));

        ///// # _layoutGridview
        this._layoutGridview = new ccui.Layout();
        this._layoutGridview.setName("_layoutGridview");
        this._layoutRoot.addChild(this._layoutGridview);
        this._layoutGridview.setCascadeOpacityEnabled(true);
        this._layoutGridview.setCascadeColorEnabled(true);
        let _layoutGridviewLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGridview);
        _layoutGridviewLayoutComponent.setPercentWidthEnabled(true);
        _layoutGridviewLayoutComponent.setPercentWidth(1);
        _layoutGridviewLayoutComponent.setPercentHeightEnabled(true);
        _layoutGridviewLayoutComponent.setPercentHeight(1);
        this._layoutGridview.setTouchEnabled(true);
        this._layoutGridview.setUnifySizeEnabled(false);
        this._layoutGridview.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutGridview, 1, 1);

    },



});

/**
 * Create EmojiTabLayout
 * @returns {_ccs.EmojiTabLayout}
 */
_ccs.EmojiTabLayout.create = function () {
    return new _ccs.EmojiTabLayout();
};
