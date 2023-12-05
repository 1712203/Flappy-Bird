/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.WebView
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.WebView = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ccui.Layout} */
    _layoutTitle: null,
    /** @type {ck.Text} */
    _txtTitle: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.Layout} */
    _layoutWebView: null,


    /**
     * _ccs.WebView constructor
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

        ///// # _root
        this._root = new ccui.Layout();
        this._root.setName("_root");
        this.addChild(this._root);
        this._root.setCascadeOpacityEnabled(true);
        this._root.setCascadeColorEnabled(true);
        this._root.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._root, 0.5, 0.5);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        _rootLayoutComponent.setPositionPercentXEnabled(true);
        _rootLayoutComponent.setPositionPercentX(0.5);
        _rootLayoutComponent.setPositionPercentYEnabled(true);
        _rootLayoutComponent.setPositionPercentY(0.5);
        _rootLayoutComponent.setPercentWidthEnabled(true);
        _rootLayoutComponent.setPercentWidth(1);
        _rootLayoutComponent.setPercentHeightEnabled(true);
        _rootLayoutComponent.setPercentHeight(1);
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._root, 1, 1);
        this._root.setBackGroundColorType(1);
        this._root.setBackGroundColor(cc.color(62, 149, 177, 255));

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._root.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.5);
        if (!PlatformUtils.hasNotch()) {
            let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
            _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
            _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
            _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
            _imgBackgroundLayoutComponent.setPositionPercentY(0.5);
            _imgBackgroundLayoutComponent.setPercentWidthEnabled(true);
            _imgBackgroundLayoutComponent.setPercentWidth(1);
            _imgBackgroundLayoutComponent.setPercentHeightEnabled(true);
            _imgBackgroundLayoutComponent.setPercentHeight(1);
        }
        this._imgBackground.loadTexture("sprites/backgrounds/Login.png", 0);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBackground, 1, 1);
        this._imgBackground.setTouchEnabled(false);
        UIUtils.initFullScreenBackground(this._imgBackground);

        ///// # _layoutTitle
        this._layoutTitle = new ccui.Layout();
        this._layoutTitle.setName("_layoutTitle");
        this._root.addChild(this._layoutTitle);
        this._layoutTitle.setCascadeOpacityEnabled(true);
        this._layoutTitle.setCascadeColorEnabled(true);
        this._layoutTitle.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutTitle, 0.5, 1);
        let _layoutTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTitle);
        _layoutTitleLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTitleLayoutComponent.setPositionPercentX(0.5);
        _layoutTitleLayoutComponent.setPositionPercentYEnabled(true);
        _layoutTitleLayoutComponent.setPositionPercentY(1);
        _layoutTitleLayoutComponent.setPercentWidthEnabled(true);
        _layoutTitleLayoutComponent.setPercentWidth(1);
        _layoutTitleLayoutComponent.setPercentHeightEnabled(true);
        _layoutTitleLayoutComponent.setPercentHeight(0.09);
        this._layoutTitle.setTouchEnabled(true);
        this._layoutTitle.setUnifySizeEnabled(false);
        this._layoutTitle.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutTitle, 1, 0.09);

        ///// # _txtTitle
        this._txtTitle = new ck.Text();
        this._txtTitle.setName("_txtTitle");
        this._layoutTitle.addChild(this._txtTitle);
        this._txtTitle.setCascadeOpacityEnabled(true);
        this._txtTitle.setCascadeColorEnabled(true);
        this._txtTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle, 0.5, 0.5);
        let _txtTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle);
        _txtTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentX(0.5);
        _txtTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentY(0.5);
        this._txtTitle.setTouchEnabled(false);
        this._txtTitle.ignoreContentAdaptWithSize(true);
        this._txtTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTitle.setDefaultFontSize(70);
        this._txtTitle.setTextHorizontalAlignment(1);
        this._txtTitle.setTextVerticalAlignment(1);
        this._txtTitle.enableOutline(cc.color(41, 107, 130, 255), 4);
        this._txtTitle.enableShadow(cc.color(63, 147, 186, 255), cc.size(-1, -2), 0);

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._layoutTitle.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.93, 0.5196);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.93);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.5196);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(77, 80));
        this._imgClose.setTouchEnabled(false);

        ///// # _layoutWebView
        this._layoutWebView = new ccui.Layout();
        this._layoutWebView.setName("_layoutWebView");
        this._root.addChild(this._layoutWebView);
        this._layoutWebView.setCascadeOpacityEnabled(true);
        this._layoutWebView.setCascadeColorEnabled(true);
        this._layoutWebView.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutWebView, 0.5, 0);
        let _layoutWebViewLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutWebView);
        _layoutWebViewLayoutComponent.setPositionPercentXEnabled(true);
        _layoutWebViewLayoutComponent.setPositionPercentX(0.5);
        _layoutWebViewLayoutComponent.setPositionPercentYEnabled(true);
        _layoutWebViewLayoutComponent.setPositionPercentY(0);
        _layoutWebViewLayoutComponent.setPercentWidthEnabled(true);
        _layoutWebViewLayoutComponent.setPercentWidth(1);
        _layoutWebViewLayoutComponent.setPercentHeightEnabled(true);
        _layoutWebViewLayoutComponent.setPercentHeight(0.91);
        this._layoutWebView.setTouchEnabled(false);
        this._layoutWebView.setUnifySizeEnabled(false);
        this._layoutWebView.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutWebView, 1, 0.91);
        this._layoutWebView.setClippingEnabled(true);

    },



});

/**
 * Create WebView
 * @returns {_ccs.WebView}
 */
_ccs.WebView.create = function () {
    return new _ccs.WebView();
};
