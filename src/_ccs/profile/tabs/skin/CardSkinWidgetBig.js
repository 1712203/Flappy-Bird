/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.CardSkinWidgetBig
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.CardSkinWidgetBig = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgItem: null,


    /**
     * _ccs.CardSkinWidgetBig constructor
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
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(260, 260));

        ///// # _imgItem
        this._imgItem = new ccui.ImageView();
        this._imgItem.setName("_imgItem");
        this._layoutRoot.addChild(this._imgItem);
        this._imgItem.setCascadeOpacityEnabled(true);
        this._imgItem.setCascadeColorEnabled(true);
        this._imgItem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgItem, 0.45, 0.5);
        this._imgItem.setRotation(-25);
        let _imgItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgItem);
        _imgItemLayoutComponent.setPositionPercentXEnabled(true);
        _imgItemLayoutComponent.setPositionPercentX(0.45);
        _imgItemLayoutComponent.setPositionPercentYEnabled(true);
        _imgItemLayoutComponent.setPositionPercentY(0.5);
        this._imgItem.loadTexture("cards/backs/Green.png", 1);
        this._imgItem.setUnifySizeEnabled(false);
        this._imgItem.ignoreContentAdaptWithSize(false);
        this._imgItem.setContentSize(cc.size(158.1, 217.6));
        this._imgItem.setTouchEnabled(false);

    },



});

/**
 * Create CardSkinWidgetBig
 * @returns {_ccs.CardSkinWidgetBig}
 */
_ccs.CardSkinWidgetBig.create = function () {
    return new _ccs.CardSkinWidgetBig();
};
