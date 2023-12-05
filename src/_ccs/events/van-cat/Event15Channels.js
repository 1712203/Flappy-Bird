/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.Event15Channels
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.Event15Channels = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layout: null,
    /** @type {ccui.ImageView} */
    _imgBg: null,
    /** @type {ccui.ImageView} */
    _imgLogo: null,
    /** @type {ck.Text} */
    _txtName: null,


    /**
     * _ccs.Event15Channels constructor
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

        ///// # _layout
        this._layout = new ccui.Layout();
        this._layout.setName("_layout");
        this.addChild(this._layout);
        this._layout.setCascadeOpacityEnabled(true);
        this._layout.setCascadeColorEnabled(true);
        this._layout.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layout);
        this._layout.setTouchEnabled(true);
        this._layout.setUnifySizeEnabled(false);
        this._layout.ignoreContentAdaptWithSize(false);
        this._layout.setContentSize(cc.size(155, 90));

        ///// # _imgBg
        this._imgBg = new ccui.ImageView();
        this._imgBg.setName("_imgBg");
        this._layout.addChild(this._imgBg);
        this._imgBg.setCascadeOpacityEnabled(true);
        this._imgBg.setCascadeColorEnabled(true);
        this._imgBg.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBg, 0.5, 0.5);
        let _imgBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBg);
        _imgBgLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgLayoutComponent.setPositionPercentX(0.5);
        _imgBgLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgLayoutComponent.setPositionPercentY(0.5);
        this._imgBg.loadTexture("e15_btn_channels.png", 1);
        this._imgBg.setUnifySizeEnabled(false);
        this._imgBg.ignoreContentAdaptWithSize(false);
        this._imgBg.setContentSize(cc.size(153, 87));
        this._imgBg.setTouchEnabled(false);

        ///// # _imgLogo
        this._imgLogo = new ccui.ImageView();
        this._imgLogo.setName("_imgLogo");
        this._imgBg.addChild(this._imgLogo);
        this._imgLogo.setCascadeOpacityEnabled(true);
        this._imgLogo.setCascadeColorEnabled(true);
        this._imgLogo.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLogo, 0.2026, 0.5302);
        this._imgLogo.setScale(0.7, 0.7);
        let _imgLogoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLogo);
        _imgLogoLayoutComponent.setPositionPercentXEnabled(true);
        _imgLogoLayoutComponent.setPositionPercentX(0.2026);
        _imgLogoLayoutComponent.setPositionPercentYEnabled(true);
        _imgLogoLayoutComponent.setPositionPercentY(0.5302);
        this._imgLogo.loadTexture("event15_voda.png", 1);
        this._imgLogo.setUnifySizeEnabled(false);
        this._imgLogo.ignoreContentAdaptWithSize(false);
        this._imgLogo.setContentSize(cc.size(65, 64));
        this._imgLogo.setTouchEnabled(false);

        ///// # _txtName
        this._txtName = new ck.Text();
        this._txtName.setName("_txtName");
        this._imgBg.addChild(this._txtName);
        this._txtName.setCascadeOpacityEnabled(true);
        this._txtName.setCascadeColorEnabled(true);
        this._txtName.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName, 0.3735, 0.5219);
        let _txtNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName);
        _txtNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameLayoutComponent.setPositionPercentX(0.3735);
        _txtNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameLayoutComponent.setPositionPercentY(0.5219);
        this._txtName.setTouchEnabled(false);
        this._txtName.setUnifySizeEnabled(false);
        this._txtName.ignoreContentAdaptWithSize(false);
        this._txtName.setContentSize(cc.size(93, 32));
        this._txtName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName.setDefaultFontSize(27);
        this._txtName.setString(gm.localize.getText("TXT_VODAFONE"));
        this._txtName.setTextHorizontalAlignment(0);
        this._txtName.setTextVerticalAlignment(1);
        this._txtName.enableOutline(cc.color(62, 112, 128, 255), 1);

    },



});

/**
 * Create Event15Channels
 * @returns {_ccs.Event15Channels}
 */
_ccs.Event15Channels.create = function () {
    return new _ccs.Event15Channels();
};
