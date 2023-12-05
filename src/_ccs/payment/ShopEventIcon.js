/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ShopEventIcon
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ShopEventIcon = ccui.Widget.extend({

    /** @type {ccui.ImageView} */
    _imgGlow: null,
    /** @type {ccui.Button} */
    _btnShop: null,


    /**
     * _ccs.ShopEventIcon constructor
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

        ///// # _imgGlow
        this._imgGlow = new ccui.ImageView();
        this._imgGlow.setName("_imgGlow");
        this.addChild(this._imgGlow);
        this._imgGlow.setCascadeOpacityEnabled(true);
        this._imgGlow.setCascadeColorEnabled(true);
        this._imgGlow.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgGlow.setScale(0.34, 0.34);
        this._imgGlow.setOpacity(186);
        let _imgGlowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGlow);
        _imgGlowLayoutComponent.setPositionPercentXEnabled(true);
        _imgGlowLayoutComponent.setPositionPercentX(0);
        _imgGlowLayoutComponent.setPositionPercentYEnabled(true);
        _imgGlowLayoutComponent.setPositionPercentY(0);
        this._imgGlow.loadTexture("vfx/glows/Glow_01.png", 1);
        this._imgGlow.setUnifySizeEnabled(false);
        this._imgGlow.ignoreContentAdaptWithSize(false);
        this._imgGlow.setContentSize(cc.size(317, 314));
        this._imgGlow.setTouchEnabled(false);

        ///// # _btnShop
        this._btnShop = new ccui.Button();
        this._btnShop.setName("_btnShop");
        this.addChild(this._btnShop);
        this._btnShop.setCascadeOpacityEnabled(true);
        this._btnShop.setCascadeColorEnabled(true);
        this._btnShop.setAnchorPoint(cc.p(0.5, 0.5));
        let _btnShopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnShop);
        _btnShopLayoutComponent.setPositionPercentXEnabled(true);
        _btnShopLayoutComponent.setPositionPercentX(0);
        _btnShopLayoutComponent.setPositionPercentYEnabled(true);
        _btnShopLayoutComponent.setPositionPercentY(0);
        this._btnShop.loadTextureDisabled("icons/color/basic/shop_02.png", 1);
        this._btnShop.loadTexturePressed("icons/color/basic/shop_02.png", 1);
        this._btnShop.loadTextureNormal("icons/color/basic/shop_02.png", 1);
        this._btnShop.setUnifySizeEnabled(false);
        this._btnShop.ignoreContentAdaptWithSize(false);
        this._btnShop.setScale9Enabled(true);
        this._btnShop.setCapInsets(cc.rect(15, 11, 56, 64));
        this._btnShop.setContentSize(cc.size(86, 86));
        this._btnShop.setTouchEnabled(true);

    },



});

/**
 * Create ShopEventIcon
 * @returns {_ccs.ShopEventIcon}
 */
_ccs.ShopEventIcon.create = function () {
    return new _ccs.ShopEventIcon();
};
