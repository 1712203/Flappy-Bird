/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.GiftCodeSubmitButton
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.GiftCodeSubmitButton = ccui.Widget.extend({

    /** @type {ccui.ImageView} */
    _imgButton: null,
    /** @type {ck.Text} */
    _txtButton: null,
    /** @type {ccui.ImageView} */
    _imgLoadingButton: null,


    /**
     * _ccs.GiftCodeSubmitButton constructor
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

        ///// # _imgButton
        this._imgButton = new ccui.ImageView();
        this._imgButton.setName("_imgButton");
        this.addChild(this._imgButton);
        this._imgButton.setCascadeOpacityEnabled(true);
        this._imgButton.setCascadeColorEnabled(true);
        this._imgButton.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButton);
        this._imgButton.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgButton.setUnifySizeEnabled(false);
        this._imgButton.ignoreContentAdaptWithSize(false);
        this._imgButton.setContentSize(cc.size(150, 60));
        this._imgButton.setTouchEnabled(false);

        ///// # _txtButton
        this._txtButton = new ck.Text();
        this._txtButton.setName("_txtButton");
        this._imgButton.addChild(this._txtButton);
        this._txtButton.setCascadeOpacityEnabled(true);
        this._txtButton.setCascadeColorEnabled(true);
        this._txtButton.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButton, 0.5, 0.53);
        let _txtButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButton);
        _txtButtonLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonLayoutComponent.setPositionPercentX(0.5);
        _txtButtonLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonLayoutComponent.setPositionPercentY(0.53);
        this._txtButton.setTouchEnabled(false);
        this._txtButton.ignoreContentAdaptWithSize(true);
        this._txtButton.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButton.setDefaultFontSize(35);
        this._txtButton.setString(gm.localize.getText("TXT_SUBMIT"));
        this._txtButton.setTextHorizontalAlignment(1);
        this._txtButton.setTextVerticalAlignment(1);
        this._txtButton.enableOutline(cc.color(164, 49, 41, 255), 2);

        ///// # _imgLoadingButton
        this._imgLoadingButton = new ccui.ImageView();
        this._imgLoadingButton.setName("_imgLoadingButton");
        this._imgButton.addChild(this._imgLoadingButton);
        this._imgLoadingButton.setCascadeOpacityEnabled(true);
        this._imgLoadingButton.setCascadeColorEnabled(true);
        this._imgLoadingButton.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLoadingButton, 0.5, 0.52);
        let _imgLoadingButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoadingButton);
        _imgLoadingButtonLayoutComponent.setPositionPercentXEnabled(true);
        _imgLoadingButtonLayoutComponent.setPositionPercentX(0.5);
        _imgLoadingButtonLayoutComponent.setPositionPercentYEnabled(true);
        _imgLoadingButtonLayoutComponent.setPositionPercentY(0.52);
        this._imgLoadingButton.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgLoadingButton.setUnifySizeEnabled(false);
        this._imgLoadingButton.ignoreContentAdaptWithSize(false);
        this._imgLoadingButton.setContentSize(cc.size(50, 50));
        this._imgLoadingButton.setTouchEnabled(false);

    },



});

/**
 * Create GiftCodeSubmitButton
 * @returns {_ccs.GiftCodeSubmitButton}
 */
_ccs.GiftCodeSubmitButton.create = function () {
    return new _ccs.GiftCodeSubmitButton();
};
