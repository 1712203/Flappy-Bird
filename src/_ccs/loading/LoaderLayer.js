/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.LoaderLayer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.LoaderLayer = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _layoutBgr: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ck.Text} */
    _txtHint: null,
    /** @type {ccui.Layout} */
    _layoutBar: null,
    /** @type {ccui.ImageView} */
    _loadingBarBackground: null,
    /** @type {ck.LoadingBar} */
    _loadingBar: null,
    /** @type {ck.Text} */
    _txtPercent: null,
    /** @type {cc.Node} */
    _nodeLoadingHead: null,


    /**
     * _ccs.LoaderLayer constructor
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

        ///// # _layoutBgr
        this._layoutBgr = new ccui.Layout();
        this._layoutBgr.setName("_layoutBgr");
        this.addChild(this._layoutBgr);
        this._layoutBgr.setCascadeOpacityEnabled(true);
        this._layoutBgr.setCascadeColorEnabled(true);
        this._layoutBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBgr, 0.5, 0.5);
        if (!PlatformUtils.hasNotch()) {
            let _layoutBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBgr);
            _layoutBgrLayoutComponent.setPositionPercentXEnabled(true);
            _layoutBgrLayoutComponent.setPositionPercentX(0.5);
            _layoutBgrLayoutComponent.setPositionPercentYEnabled(true);
            _layoutBgrLayoutComponent.setPositionPercentY(0.5);
            _layoutBgrLayoutComponent.setPercentWidthEnabled(true);
            _layoutBgrLayoutComponent.setPercentWidth(1);
            _layoutBgrLayoutComponent.setPercentHeightEnabled(true);
            _layoutBgrLayoutComponent.setPercentHeight(1);
        }
        this._layoutBgr.setTouchEnabled(true);
        this._layoutBgr.setUnifySizeEnabled(false);
        this._layoutBgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBgr, 1, 1);
        UIUtils.initFullScreenBackground(this._layoutBgr);

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._layoutBgr.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr, 0.5, 0.5);
        let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
        _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentY(0.5);
        this._imgBgr.loadTexture("sprites/backgrounds/Loading.png", 0);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setContentSize(cc.size(640, 1136));
        this._imgBgr.setTouchEnabled(false);

        ///// # _txtHint
        this._txtHint = new ck.Text();
        this._txtHint.setName("_txtHint");
        this.addChild(this._txtHint);
        this._txtHint.setCascadeOpacityEnabled(true);
        this._txtHint.setCascadeColorEnabled(true);
        this._txtHint.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._txtHint, 0.5, 0.0856);
        let _txtHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHint);
        _txtHintLayoutComponent.setPositionPercentXEnabled(true);
        _txtHintLayoutComponent.setPositionPercentX(0.5);
        _txtHintLayoutComponent.setPositionPercentYEnabled(true);
        _txtHintLayoutComponent.setPositionPercentY(0.0856);
        this._txtHint.setTouchEnabled(false);
        this._txtHint.setUnifySizeEnabled(false);
        this._txtHint.ignoreContentAdaptWithSize(false);
        this._txtHint.setContentSize(cc.size(598.202, 75.8888));
        this._txtHint.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHint.setDefaultFontSize(32);
        this._txtHint.setString("LOADING...");
        this._txtHint.setTextHorizontalAlignment(1);
        this._txtHint.setTextVerticalAlignment(0);
        this._txtHint.enableOutline(cc.color(96, 96, 96, 255), 1);

        ///// # _layoutBar
        this._layoutBar = new ccui.Layout();
        this._layoutBar.setName("_layoutBar");
        this.addChild(this._layoutBar);
        this._layoutBar.setCascadeOpacityEnabled(true);
        this._layoutBar.setCascadeColorEnabled(true);
        this._layoutBar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBar, 0.5, 0.1034);
        let _layoutBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBar);
        _layoutBarLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBarLayoutComponent.setPositionPercentX(0.5);
        _layoutBarLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBarLayoutComponent.setPositionPercentY(0.1034);
        _layoutBarLayoutComponent.setPercentWidthEnabled(true);
        _layoutBarLayoutComponent.setPercentWidth(0.9797);
        this._layoutBar.setTouchEnabled(true);
        this._layoutBar.setUnifySizeEnabled(false);
        this._layoutBar.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutBar, 0.9797);
        this._layoutBar.setContentSize(cc.size(this._layoutBar.width, 35));

        ///// # _loadingBarBackground
        this._loadingBarBackground = new ccui.ImageView();
        this._loadingBarBackground.setName("_loadingBarBackground");
        this._layoutBar.addChild(this._loadingBarBackground);
        this._loadingBarBackground.setCascadeOpacityEnabled(true);
        this._loadingBarBackground.setCascadeColorEnabled(true);
        this._loadingBarBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._loadingBarBackground, 0.5, 0.41);
        let _loadingBarBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._loadingBarBackground);
        _loadingBarBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _loadingBarBackgroundLayoutComponent.setPositionPercentX(0.5);
        _loadingBarBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _loadingBarBackgroundLayoutComponent.setPositionPercentY(0.41);
        this._loadingBarBackground.loadTexture("sprites/basics/LoadingBar_01.png", 0);
        this._loadingBarBackground.setUnifySizeEnabled(false);
        this._loadingBarBackground.ignoreContentAdaptWithSize(false);
        this._loadingBarBackground.setScale9Enabled(true);
        this._loadingBarBackground.setCapInsets(cc.rect(199, 8, 207, 3));
        this._loadingBarBackground.setContentSize(cc.size(605, 33));
        this._loadingBarBackground.setTouchEnabled(false);

        ///// # _loadingBar
        this._loadingBar = new ck.LoadingBar();
        this._loadingBar.setName("_loadingBar");
        this._layoutBar.addChild(this._loadingBar);
        this._loadingBar.setCascadeOpacityEnabled(true);
        this._loadingBar.setCascadeColorEnabled(true);
        this._loadingBar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._loadingBar, 0.5, 0.5);
        let _loadingBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._loadingBar);
        _loadingBarLayoutComponent.setPositionPercentXEnabled(true);
        _loadingBarLayoutComponent.setPositionPercentX(0.5);
        _loadingBarLayoutComponent.setPositionPercentYEnabled(true);
        _loadingBarLayoutComponent.setPositionPercentY(0.5);
        this._loadingBar.setTouchEnabled(false);
        this._loadingBar.setUnifySizeEnabled(false);
        this._loadingBar.ignoreContentAdaptWithSize(false);
        this._loadingBar.setContentSize(cc.size(605, 26));
        this._loadingBar.loadTexture("sprites/basics/LoadingBar_02.png", 0);

        ///// # _txtPercent
        this._txtPercent = new ck.Text();
        this._txtPercent.setName("_txtPercent");
        this._layoutBar.addChild(this._txtPercent);
        this._txtPercent.setCascadeOpacityEnabled(true);
        this._txtPercent.setCascadeColorEnabled(true);
        this._txtPercent.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPercent, 0.5, 0.5);
        let _txtPercentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPercent);
        _txtPercentLayoutComponent.setPositionPercentXEnabled(true);
        _txtPercentLayoutComponent.setPositionPercentX(0.5);
        _txtPercentLayoutComponent.setPositionPercentYEnabled(true);
        _txtPercentLayoutComponent.setPositionPercentY(0.5);
        this._txtPercent.setTouchEnabled(false);
        this._txtPercent.ignoreContentAdaptWithSize(true);
        this._txtPercent.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtPercent.setDefaultFontSize(25);
        this._txtPercent.setString("30%");
        this._txtPercent.setTextHorizontalAlignment(1);
        this._txtPercent.setTextVerticalAlignment(1);
        this._txtPercent.enableOutline(cc.color(58, 0, 27, 255), 1);

        ///// # _nodeLoadingHead
        this._nodeLoadingHead = new cc.Node();
        this._nodeLoadingHead.setName("_nodeLoadingHead");
        this._layoutBar.addChild(this._nodeLoadingHead);
        this._nodeLoadingHead.setCascadeOpacityEnabled(true);
        this._nodeLoadingHead.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeLoadingHead, 0.5, 0.5);
        this._nodeLoadingHead.setScale(0.35, 0.35);
        let _nodeLoadingHeadLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeLoadingHead);
        _nodeLoadingHeadLayoutComponent.setPositionPercentXEnabled(true);
        _nodeLoadingHeadLayoutComponent.setPositionPercentX(0.5);
        _nodeLoadingHeadLayoutComponent.setPositionPercentYEnabled(true);
        _nodeLoadingHeadLayoutComponent.setPositionPercentY(0.5);

    },



});

/**
 * Create LoaderLayer
 * @returns {_ccs.LoaderLayer}
 */
_ccs.LoaderLayer.create = function () {
    return new _ccs.LoaderLayer();
};
