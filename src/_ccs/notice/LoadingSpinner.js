/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.LoadingSpinner
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.LoadingSpinner = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _bgr: null,
    /** @type {ccui.ImageView} */
    _imgSpinner: null,
    /** @type {ck.Text} */
    _txtMessage: null,


    /**
     * _ccs.LoadingSpinner constructor
     * @constructor
     */
    ctor: function () {
        cc.Layer.prototype.ctor.call(this);
        this.setCascadeOpacityEnabled(true);
        if (PlatformUtils.hasNotch())
            this._initNotch();
        this._initCCSChildren();
    },

    /**
     * Init notch for main layer
     * @private
     */
    _initNotch: function () {
        let notchHeight = PlatformUtils.NOTCH_HEIGHT;
        let marginBottom = PlatformUtils.MARGIN_BOTTOM;
        this.height = this.height - (notchHeight + marginBottom);
        this.setPosition(0, marginBottom);
    },

    /**
     * Init full screen background
     * @private
     */
    _initFullScreenBackground: function (background) {
        if (!PlatformUtils.hasNotch()) return;
        let backgroundScaleHeight = background.height / background.getParent().height;
        let notchHeight = PlatformUtils.NOTCH_HEIGHT;
        let marginBottom = PlatformUtils.MARGIN_BOTTOM;
        background.height = cc.winSize.height * backgroundScaleHeight;
        background.setAnchorPoint(0.5, 0.5);
        background.setPosition(cc.winSize.width * 0.5, background.height * 0.5 - marginBottom);
    },

    /**
     * Init nodes from ccs
     * @private
     */
    _initCCSChildren: function () {

        ///// # _bgr
        this._bgr = new ccui.Layout();
        this._bgr.setName("_bgr");
        this.addChild(this._bgr);
        this._bgr.setCascadeOpacityEnabled(true);
        this._bgr.setCascadeColorEnabled(true);
        this._bgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._bgr, 0.5, 0.5);
        if (!PlatformUtils.hasNotch()) {
            let _bgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._bgr);
            _bgrLayoutComponent.setPositionPercentXEnabled(true);
            _bgrLayoutComponent.setPositionPercentX(0.5);
            _bgrLayoutComponent.setPositionPercentYEnabled(true);
            _bgrLayoutComponent.setPositionPercentY(0.5);
            _bgrLayoutComponent.setPercentWidthEnabled(true);
            _bgrLayoutComponent.setPercentWidth(1);
            _bgrLayoutComponent.setPercentHeightEnabled(true);
            _bgrLayoutComponent.setPercentHeight(1);
        }
        this._bgr.setTouchEnabled(true);
        this._bgr.setUnifySizeEnabled(false);
        this._bgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._bgr, 1, 1);
        this._bgr.setBackGroundColorType(1);
        this._bgr.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._bgr.setBackGroundColorOpacity(191);
        UIUtils.initFullScreenBackground(this._bgr);

        ///// # _imgSpinner
        this._imgSpinner = new ccui.ImageView();
        this._imgSpinner.setName("_imgSpinner");
        this.addChild(this._imgSpinner);
        this._imgSpinner.setCascadeOpacityEnabled(true);
        this._imgSpinner.setCascadeColorEnabled(true);
        this._imgSpinner.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgSpinner, 0.5, 0.5);
        let _imgSpinnerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgSpinner);
        _imgSpinnerLayoutComponent.setPositionPercentXEnabled(true);
        _imgSpinnerLayoutComponent.setPositionPercentX(0.5);
        _imgSpinnerLayoutComponent.setPositionPercentYEnabled(true);
        _imgSpinnerLayoutComponent.setPositionPercentY(0.5);
        this._imgSpinner.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgSpinner.setUnifySizeEnabled(false);
        this._imgSpinner.ignoreContentAdaptWithSize(false);
        this._imgSpinner.setContentSize(cc.size(128, 128));
        this._imgSpinner.setTouchEnabled(false);

        ///// # _txtMessage
        this._txtMessage = new ck.Text();
        this._txtMessage.setName("_txtMessage");
        this.addChild(this._txtMessage);
        this._txtMessage.setCascadeOpacityEnabled(true);
        this._txtMessage.setCascadeColorEnabled(true);
        this._txtMessage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMessage, 0.5, 0.4);
        let _txtMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMessage);
        _txtMessageLayoutComponent.setPositionPercentXEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentX(0.5);
        _txtMessageLayoutComponent.setPositionPercentYEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentY(0.4);
        this._txtMessage.setTouchEnabled(false);
        this._txtMessage.ignoreContentAdaptWithSize(true);
        this._txtMessage.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMessage.setDefaultFontSize(50);
        this._txtMessage.setString(gm.localize.getText("TXT_LOADING"));
        this._txtMessage.setTextHorizontalAlignment(1);
        this._txtMessage.setTextVerticalAlignment(1);

    },



});

/**
 * Create LoadingSpinner
 * @returns {_ccs.LoadingSpinner}
 */
_ccs.LoadingSpinner.create = function () {
    return new _ccs.LoadingSpinner();
};
