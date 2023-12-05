/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PokerHelpLayer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.PokerHelpLayer = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.ImageView} */
    _imgPopup: null,
    /** @type {ck.Text} */
    _txtGuide: null,
    /** @type {ccui.Button} */
    _btnClose: null,
    /** @type {ccui.Layout} */
    _layoutTabView: null,
    /** @type {ccui.Layout} */
    _layoutTabBar: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundTabBar: null,
    /** @type {ccui.Layout} */
    _layoutTab01: null,
    /** @type {ccui.ImageView} */
    _imgTab01: null,
    /** @type {ck.Text} */
    _txtTab01: null,
    /** @type {ccui.Layout} */
    _layoutTab02: null,
    /** @type {ccui.ImageView} */
    _imgTab02: null,
    /** @type {ck.Text} */
    _txtTab02: null,
    /** @type {ccui.Layout} */
    _layoutRootTab: null,


    /**
     * _ccs.PokerHelpLayer constructor
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

        ///// # _layoutPopup
        this._layoutPopup = new ccui.Layout();
        this._layoutPopup.setName("_layoutPopup");
        this.addChild(this._layoutPopup);
        this._layoutPopup.setCascadeOpacityEnabled(true);
        this._layoutPopup.setCascadeColorEnabled(true);
        this._layoutPopup.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutPopup, 0.5, 0.5);
        let _layoutPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        _layoutPopupLayoutComponent.setPositionPercentXEnabled(true);
        _layoutPopupLayoutComponent.setPositionPercentX(0.5);
        _layoutPopupLayoutComponent.setPositionPercentYEnabled(true);
        _layoutPopupLayoutComponent.setPositionPercentY(0.5);
        this._layoutPopup.setTouchEnabled(true);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(540.5, 923.79));

        ///// # _imgPopup
        this._imgPopup = new ccui.ImageView();
        this._imgPopup.setName("_imgPopup");
        this._layoutPopup.addChild(this._imgPopup);
        this._imgPopup.setCascadeOpacityEnabled(true);
        this._imgPopup.setCascadeColorEnabled(true);
        this._imgPopup.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPopup, 0.5, 0.5);
        this._imgPopup.setOpacity(204);
        this._imgPopup.setColor(cc.color(0, 0, 0, 255));
        let _imgPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPopup);
        _imgPopupLayoutComponent.setPositionPercentXEnabled(true);
        _imgPopupLayoutComponent.setPositionPercentX(0.5);
        _imgPopupLayoutComponent.setPositionPercentYEnabled(true);
        _imgPopupLayoutComponent.setPositionPercentY(0.5);
        _imgPopupLayoutComponent.setPercentWidthEnabled(true);
        _imgPopupLayoutComponent.setPercentWidth(1);
        _imgPopupLayoutComponent.setPercentHeightEnabled(true);
        _imgPopupLayoutComponent.setPercentHeight(1);
        this._imgPopup.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgPopup.setUnifySizeEnabled(false);
        this._imgPopup.ignoreContentAdaptWithSize(false);
        this._imgPopup.setScale9Enabled(true);
        this._imgPopup.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgPopup, 1, 1);
        this._imgPopup.setTouchEnabled(false);

        ///// # _txtGuide
        this._txtGuide = new ck.Text();
        this._txtGuide.setName("_txtGuide");
        this._layoutPopup.addChild(this._txtGuide);
        this._txtGuide.setCascadeOpacityEnabled(true);
        this._txtGuide.setCascadeColorEnabled(true);
        this._txtGuide.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGuide, 0.5, 0.9637);
        this._txtGuide.setTextColor(cc.color(255, 165, 0, 255));
        let _txtGuideLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGuide);
        _txtGuideLayoutComponent.setPositionPercentXEnabled(true);
        _txtGuideLayoutComponent.setPositionPercentX(0.5);
        _txtGuideLayoutComponent.setPositionPercentYEnabled(true);
        _txtGuideLayoutComponent.setPositionPercentY(0.9637);
        this._txtGuide.setTouchEnabled(false);
        this._txtGuide.ignoreContentAdaptWithSize(true);
        this._txtGuide.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtGuide.setDefaultFontSize(45);
        this._txtGuide.setString(gm.localize.getText("TXT_GUIDE"));
        this._txtGuide.setTextHorizontalAlignment(0);
        this._txtGuide.setTextVerticalAlignment(0);
        this._txtGuide.enableShadow(cc.color(0, 0, 0, 255), cc.size(2, -2), 0);

        ///// # _btnClose
        this._btnClose = new ccui.Button();
        this._btnClose.setName("_btnClose");
        this._layoutPopup.addChild(this._btnClose);
        this._btnClose.setCascadeOpacityEnabled(true);
        this._btnClose.setCascadeColorEnabled(true);
        this._btnClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnClose, 0.98, 0.98);
        this._btnClose.setScale(0.7, 0.7);
        let _btnCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnClose);
        _btnCloseLayoutComponent.setPositionPercentXEnabled(true);
        _btnCloseLayoutComponent.setPositionPercentX(0.98);
        _btnCloseLayoutComponent.setPositionPercentYEnabled(true);
        _btnCloseLayoutComponent.setPositionPercentY(0.98);
        this._btnClose.loadTextureDisabled("buttons/squares/Close.png", 1);
        this._btnClose.loadTexturePressed("buttons/squares/Close.png", 1);
        this._btnClose.loadTextureNormal("buttons/squares/Close.png", 1);
        this._btnClose.setUnifySizeEnabled(false);
        this._btnClose.ignoreContentAdaptWithSize(false);
        this._btnClose.setScale9Enabled(true);
        this._btnClose.setCapInsets(cc.rect(15, 11, 43, 51));
        this._btnClose.setContentSize(cc.size(73, 73));
        this._btnClose.setTouchEnabled(true);

        ///// # _layoutTabView
        this._layoutTabView = new ccui.Layout();
        this._layoutTabView.setName("_layoutTabView");
        this._layoutPopup.addChild(this._layoutTabView);
        this._layoutTabView.setCascadeOpacityEnabled(true);
        this._layoutTabView.setCascadeColorEnabled(true);
        this._layoutTabView.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutTabView, 0.5, 0);
        let _layoutTabViewLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTabView);
        _layoutTabViewLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTabViewLayoutComponent.setPositionPercentX(0.5);
        _layoutTabViewLayoutComponent.setPercentWidthEnabled(true);
        _layoutTabViewLayoutComponent.setPercentWidth(1);
        _layoutTabViewLayoutComponent.setPercentHeightEnabled(true);
        _layoutTabViewLayoutComponent.setPercentHeight(1);
        _layoutTabViewLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.BOTTOM);
        _layoutTabViewLayoutComponent.setBottomMargin(0);
        this._layoutTabView.setTouchEnabled(true);
        this._layoutTabView.setUnifySizeEnabled(false);
        this._layoutTabView.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutTabView, 1, 1);

        ///// # _layoutTabBar
        this._layoutTabBar = new ccui.Layout();
        this._layoutTabBar.setName("_layoutTabBar");
        this._layoutTabView.addChild(this._layoutTabBar);
        this._layoutTabBar.setCascadeOpacityEnabled(true);
        this._layoutTabBar.setCascadeColorEnabled(true);
        this._layoutTabBar.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutTabBar, 0.5, 0.9309);
        let _layoutTabBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTabBar);
        _layoutTabBarLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTabBarLayoutComponent.setPositionPercentX(0.5);
        _layoutTabBarLayoutComponent.setPositionPercentYEnabled(true);
        _layoutTabBarLayoutComponent.setPositionPercentY(0.9309);
        this._layoutTabBar.setTouchEnabled(true);
        this._layoutTabBar.setUnifySizeEnabled(false);
        this._layoutTabBar.ignoreContentAdaptWithSize(false);
        this._layoutTabBar.setContentSize(cc.size(336, 42));

        ///// # _imgBackgroundTabBar
        this._imgBackgroundTabBar = new ccui.ImageView();
        this._imgBackgroundTabBar.setName("_imgBackgroundTabBar");
        this._layoutTabBar.addChild(this._imgBackgroundTabBar);
        this._imgBackgroundTabBar.setCascadeOpacityEnabled(true);
        this._imgBackgroundTabBar.setCascadeColorEnabled(true);
        this._imgBackgroundTabBar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundTabBar, 0.5, 0.5);
        let _imgBackgroundTabBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundTabBar);
        _imgBackgroundTabBarLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundTabBarLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundTabBarLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundTabBarLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundTabBarLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundTabBarLayoutComponent.setPercentWidth(1);
        _imgBackgroundTabBarLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundTabBarLayoutComponent.setPercentHeight(1);
        this._imgBackgroundTabBar.loadTexture("basics/tabs/TabBackground01.png", 1);
        this._imgBackgroundTabBar.setUnifySizeEnabled(false);
        this._imgBackgroundTabBar.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBackgroundTabBar, 1, 1);
        this._imgBackgroundTabBar.setTouchEnabled(false);

        ///// # _layoutTab01
        this._layoutTab01 = new ccui.Layout();
        this._layoutTab01.setName("_layoutTab01");
        this._layoutTabBar.addChild(this._layoutTab01);
        this._layoutTab01.setCascadeOpacityEnabled(true);
        this._layoutTab01.setCascadeColorEnabled(true);
        this._layoutTab01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTab01, 0.25, 0.5);
        let _layoutTab01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTab01);
        _layoutTab01LayoutComponent.setPositionPercentXEnabled(true);
        _layoutTab01LayoutComponent.setPositionPercentX(0.25);
        _layoutTab01LayoutComponent.setPositionPercentYEnabled(true);
        _layoutTab01LayoutComponent.setPositionPercentY(0.5);
        _layoutTab01LayoutComponent.setPercentWidthEnabled(true);
        _layoutTab01LayoutComponent.setPercentWidth(0.5);
        _layoutTab01LayoutComponent.setPercentHeightEnabled(true);
        _layoutTab01LayoutComponent.setPercentHeight(1);
        this._layoutTab01.setTouchEnabled(true);
        this._layoutTab01.setUnifySizeEnabled(false);
        this._layoutTab01.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutTab01, 0.5, 1);

        ///// # _imgTab01
        this._imgTab01 = new ccui.ImageView();
        this._imgTab01.setName("_imgTab01");
        this._layoutTab01.addChild(this._imgTab01);
        this._imgTab01.setCascadeOpacityEnabled(true);
        this._imgTab01.setCascadeColorEnabled(true);
        this._imgTab01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTab01, 0.5, 0.5);
        let _imgTab01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTab01);
        _imgTab01LayoutComponent.setPositionPercentXEnabled(true);
        _imgTab01LayoutComponent.setPositionPercentX(0.5);
        _imgTab01LayoutComponent.setPositionPercentYEnabled(true);
        _imgTab01LayoutComponent.setPositionPercentY(0.5);
        this._imgTab01.loadTexture("basics/tabs/Tab01.png", 1);
        this._imgTab01.setUnifySizeEnabled(false);
        this._imgTab01.ignoreContentAdaptWithSize(false);
        this._imgTab01.setContentSize(cc.size(164, 37));
        this._imgTab01.setTouchEnabled(false);

        ///// # _txtTab01
        this._txtTab01 = new ck.Text();
        this._txtTab01.setName("_txtTab01");
        this._layoutTab01.addChild(this._txtTab01);
        this._txtTab01.setCascadeOpacityEnabled(true);
        this._txtTab01.setCascadeColorEnabled(true);
        this._txtTab01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTab01, 0.48, 0.5089);
        this._txtTab01.setTextColor(cc.color(148, 66, 44, 255));
        let _txtTab01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTab01);
        _txtTab01LayoutComponent.setPositionPercentXEnabled(true);
        _txtTab01LayoutComponent.setPositionPercentX(0.48);
        _txtTab01LayoutComponent.setPositionPercentYEnabled(true);
        _txtTab01LayoutComponent.setPositionPercentY(0.5089);
        this._txtTab01.setTouchEnabled(false);
        this._txtTab01.ignoreContentAdaptWithSize(true);
        this._txtTab01.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTab01.setDefaultFontSize(33);
        this._txtTab01.setString(gm.localize.getText("TXT_HOW_TO_PLAY"));
        this._txtTab01.setTextHorizontalAlignment(1);
        this._txtTab01.setTextVerticalAlignment(1);

        ///// # _layoutTab02
        this._layoutTab02 = new ccui.Layout();
        this._layoutTab02.setName("_layoutTab02");
        this._layoutTabBar.addChild(this._layoutTab02);
        this._layoutTab02.setCascadeOpacityEnabled(true);
        this._layoutTab02.setCascadeColorEnabled(true);
        this._layoutTab02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTab02, 0.75, 0.5);
        let _layoutTab02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTab02);
        _layoutTab02LayoutComponent.setPositionPercentXEnabled(true);
        _layoutTab02LayoutComponent.setPositionPercentX(0.75);
        _layoutTab02LayoutComponent.setPositionPercentYEnabled(true);
        _layoutTab02LayoutComponent.setPositionPercentY(0.5);
        _layoutTab02LayoutComponent.setPercentWidthEnabled(true);
        _layoutTab02LayoutComponent.setPercentWidth(0.5);
        _layoutTab02LayoutComponent.setPercentHeightEnabled(true);
        _layoutTab02LayoutComponent.setPercentHeight(1);
        this._layoutTab02.setTouchEnabled(true);
        this._layoutTab02.setUnifySizeEnabled(false);
        this._layoutTab02.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutTab02, 0.5, 1);

        ///// # _imgTab02
        this._imgTab02 = new ccui.ImageView();
        this._imgTab02.setName("_imgTab02");
        this._layoutTab02.addChild(this._imgTab02);
        this._imgTab02.setCascadeOpacityEnabled(true);
        this._imgTab02.setCascadeColorEnabled(true);
        this._imgTab02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTab02, 0.5, 0.5);
        this._imgTab02.setFlippedX(true);
        let _imgTab02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTab02);
        _imgTab02LayoutComponent.setPositionPercentXEnabled(true);
        _imgTab02LayoutComponent.setPositionPercentX(0.5);
        _imgTab02LayoutComponent.setPositionPercentYEnabled(true);
        _imgTab02LayoutComponent.setPositionPercentY(0.5);
        this._imgTab02.loadTexture("basics/tabs/Tab01.png", 1);
        this._imgTab02.setUnifySizeEnabled(false);
        this._imgTab02.ignoreContentAdaptWithSize(false);
        this._imgTab02.setContentSize(cc.size(164, 37));
        this._imgTab02.setTouchEnabled(false);
        this._imgTab02.setFlippedX(true);

        ///// # _txtTab02
        this._txtTab02 = new ck.Text();
        this._txtTab02.setName("_txtTab02");
        this._layoutTab02.addChild(this._txtTab02);
        this._txtTab02.setCascadeOpacityEnabled(true);
        this._txtTab02.setCascadeColorEnabled(true);
        this._txtTab02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTab02, 0.52, 0.5);
        this._txtTab02.setTextColor(cc.color(233, 217, 194, 255));
        let _txtTab02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTab02);
        _txtTab02LayoutComponent.setPositionPercentXEnabled(true);
        _txtTab02LayoutComponent.setPositionPercentX(0.52);
        _txtTab02LayoutComponent.setPositionPercentYEnabled(true);
        _txtTab02LayoutComponent.setPositionPercentY(0.5);
        this._txtTab02.setTouchEnabled(false);
        this._txtTab02.ignoreContentAdaptWithSize(true);
        this._txtTab02.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTab02.setDefaultFontSize(33);
        this._txtTab02.setString(gm.localize.getText("TXT_HAND_RANKINGS"));
        this._txtTab02.setTextHorizontalAlignment(1);
        this._txtTab02.setTextVerticalAlignment(1);

        ///// # _layoutRootTab
        this._layoutRootTab = new ccui.Layout();
        this._layoutRootTab.setName("_layoutRootTab");
        this._layoutTabView.addChild(this._layoutRootTab);
        this._layoutRootTab.setCascadeOpacityEnabled(true);
        this._layoutRootTab.setCascadeColorEnabled(true);
        this._layoutRootTab.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutRootTab, 0.5, 0.87);
        let _layoutRootTabLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRootTab);
        _layoutRootTabLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRootTabLayoutComponent.setPositionPercentX(0.5);
        _layoutRootTabLayoutComponent.setPositionPercentYEnabled(true);
        _layoutRootTabLayoutComponent.setPositionPercentY(0.87);
        this._layoutRootTab.setTouchEnabled(true);
        this._layoutRootTab.setUnifySizeEnabled(false);
        this._layoutRootTab.ignoreContentAdaptWithSize(false);
        this._layoutRootTab.setContentSize(cc.size(486, 764.5345));

    },



});

/**
 * Create PokerHelpLayer
 * @returns {_ccs.PokerHelpLayer}
 */
_ccs.PokerHelpLayer.create = function () {
    return new _ccs.PokerHelpLayer();
};
