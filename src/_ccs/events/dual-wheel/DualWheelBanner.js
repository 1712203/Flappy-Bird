/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.DualWheelBanner
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.DualWheelBanner = ccui.Widget.extend({

    /** @type {ccui.ImageView} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgPlay: null,
    /** @type {ck.Text} */
    _txtPlay: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ck.Text} */
    _txtTimeLeft: null,
    /** @type {ccui.ImageView} */
    _imgGoldPile: null,
    /** @type {ck.Text} */
    _txtX: null,


    /**
     * _ccs.DualWheelBanner constructor
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

        ///// # _root
        this._root = new ccui.ImageView();
        this._root.setName("_root");
        this.addChild(this._root);
        this._root.setCascadeOpacityEnabled(true);
        this._root.setCascadeColorEnabled(true);
        this._root.setAnchorPoint(cc.p(0.5, 0.5));
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.loadTexture("sprites/banner/DualWheel.png", 0);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(640, 793));
        this._root.setTouchEnabled(false);

        ///// # _imgPlay
        this._imgPlay = new ccui.ImageView();
        this._imgPlay.setName("_imgPlay");
        this._root.addChild(this._imgPlay);
        this._imgPlay.setCascadeOpacityEnabled(true);
        this._imgPlay.setCascadeColorEnabled(true);
        this._imgPlay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPlay, 0.5, 0.09);
        let _imgPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPlay);
        _imgPlayLayoutComponent.setPositionPercentXEnabled(true);
        _imgPlayLayoutComponent.setPositionPercentX(0.5);
        _imgPlayLayoutComponent.setPositionPercentYEnabled(true);
        _imgPlayLayoutComponent.setPositionPercentY(0.09);
        this._imgPlay.loadTexture("buttons/rectangles/02_Green.png", 1);
        this._imgPlay.setUnifySizeEnabled(false);
        this._imgPlay.ignoreContentAdaptWithSize(false);
        this._imgPlay.setContentSize(cc.size(240, 88));
        this._imgPlay.setTouchEnabled(false);

        ///// # _txtPlay
        this._txtPlay = new ck.Text();
        this._txtPlay.setName("_txtPlay");
        this._imgPlay.addChild(this._txtPlay);
        this._txtPlay.setCascadeOpacityEnabled(true);
        this._txtPlay.setCascadeColorEnabled(true);
        this._txtPlay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPlay, 0.5, 0.53);
        this._txtPlay.setTextColor(cc.color(63, 96, 0, 255));
        let _txtPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPlay);
        _txtPlayLayoutComponent.setPositionPercentXEnabled(true);
        _txtPlayLayoutComponent.setPositionPercentX(0.5);
        _txtPlayLayoutComponent.setPositionPercentYEnabled(true);
        _txtPlayLayoutComponent.setPositionPercentY(0.53);
        this._txtPlay.setTouchEnabled(false);
        this._txtPlay.setUnifySizeEnabled(false);
        this._txtPlay.ignoreContentAdaptWithSize(false);
        this._txtPlay.setContentSize(cc.size(215, 56));
        this._txtPlay.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtPlay.setDefaultFontSize(50);
        this._txtPlay.setString(gm.localize.getText("TXT_PLAY_NOW").toUpperCase());
        this._txtPlay.setTextHorizontalAlignment(1);
        this._txtPlay.setTextVerticalAlignment(1);
        this._txtPlay.enableShadow(cc.color(205, 253, 0, 255), cc.size(0, -2), 0);
        this._txtPlay.autoFitSingleLine();

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._root.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.9167, 0.88);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.9167);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.88);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(81, 83));
        this._imgClose.setTouchEnabled(false);

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._root.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 0.9269);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        this._imgHeader.loadTexture("texts/events/dual-wheel/DualWheel.png", 1);
        this._imgHeader.setTouchEnabled(false);

        ///// # _txtTimeLeft
        this._txtTimeLeft = new ck.Text();
        this._txtTimeLeft.setName("_txtTimeLeft");
        this._root.addChild(this._txtTimeLeft);
        this._txtTimeLeft.setCascadeOpacityEnabled(true);
        this._txtTimeLeft.setCascadeColorEnabled(true);
        this._txtTimeLeft.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTimeLeft, 0.3671, 0.1937);
        let _txtTimeLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTimeLeft);
        _txtTimeLeftLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentX(0.3671);
        _txtTimeLeftLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentY(0.1937);
        this._txtTimeLeft.setTouchEnabled(false);
        this._txtTimeLeft.ignoreContentAdaptWithSize(true);
        this._txtTimeLeft.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTimeLeft.setDefaultFontSize(40);
        this._txtTimeLeft.setTextHorizontalAlignment(1);
        this._txtTimeLeft.setTextVerticalAlignment(1);
        this._txtTimeLeft.enableOutline(cc.color(141, 60, 25, 255), 2);
        this._txtTimeLeft.enableShadow(cc.color(130, 76, 23, 255), cc.size(0, -2), 0);

        ///// # _imgGoldPile
        this._imgGoldPile = new ccui.ImageView();
        this._imgGoldPile.setName("_imgGoldPile");
        this._root.addChild(this._imgGoldPile);
        this._imgGoldPile.setCascadeOpacityEnabled(true);
        this._imgGoldPile.setCascadeColorEnabled(true);
        this._imgGoldPile.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGoldPile, 0.3063, 0.5876);
        let _imgGoldPileLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGoldPile);
        this._imgGoldPile.loadTexture("icons/color/coins/Coin_x3.png", 1);
        this._imgGoldPile.setUnifySizeEnabled(false);
        this._imgGoldPile.ignoreContentAdaptWithSize(false);
        this._imgGoldPile.setContentSize(cc.size(150, 150));
        this._imgGoldPile.setTouchEnabled(false);

        ///// # _txtX
        this._txtX = new ck.Text();
        this._txtX.setName("_txtX");
        this._root.addChild(this._txtX);
        this._txtX.setCascadeOpacityEnabled(true);
        this._txtX.setCascadeColorEnabled(true);
        this._txtX.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtX, 0.6547, 0.575);
        this._txtX.setTextColor(cc.color(255, 234, 3, 255));
        let _txtXLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtX);
        this._txtX.setTouchEnabled(false);
        this._txtX.setUnifySizeEnabled(false);
        this._txtX.ignoreContentAdaptWithSize(false);
        this._txtX.setContentSize(cc.size(200, 128));
        this._txtX.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtX.setDefaultFontSize(90);
        this._txtX.setString("x10");
        this._txtX.setTextHorizontalAlignment(1);
        this._txtX.setTextVerticalAlignment(1);
        this._txtX.enableOutline(cc.color(110, 47, 8, 255), 3);
        this._txtX.enableShadow(cc.color(245, 114, 0, 255), cc.size(0, -4), 0);

    },



});

/**
 * Create DualWheelBanner
 * @returns {_ccs.DualWheelBanner}
 */
_ccs.DualWheelBanner.create = function () {
    return new _ccs.DualWheelBanner();
};
