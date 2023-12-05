/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.AvatarSkinWidgetBig
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.AvatarSkinWidgetBig = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgItem: null,


    /**
     * _ccs.AvatarSkinWidgetBig constructor
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
        ck.UIUtils.setPositionPercent(this._imgItem, 0.5, 0.5);
        let _imgItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgItem);
        _imgItemLayoutComponent.setPositionPercentXEnabled(true);
        _imgItemLayoutComponent.setPositionPercentX(0.5);
        _imgItemLayoutComponent.setPositionPercentYEnabled(true);
        _imgItemLayoutComponent.setPositionPercentY(0.5);
        this._imgItem.loadTexture("avatars/Circle02.png", 1);
        this._imgItem.setUnifySizeEnabled(false);
        this._imgItem.ignoreContentAdaptWithSize(false);
        this._imgItem.setContentSize(cc.size(250, 250));
        this._imgItem.setTouchEnabled(false);

    },



});

/**
 * Create AvatarSkinWidgetBig
 * @returns {_ccs.AvatarSkinWidgetBig}
 */
_ccs.AvatarSkinWidgetBig.create = function () {
    return new _ccs.AvatarSkinWidgetBig();
};
