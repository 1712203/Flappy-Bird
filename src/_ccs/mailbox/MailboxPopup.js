/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.MailboxPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.MailboxPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.Layout} */
    _layoutBackground: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundBack: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundFront: null,
    /** @type {ccui.Layout} */
    _layoutTitle: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundTitle: null,
    /** @type {ck.Text} */
    _txtTitle: null,
    /** @type {cc.Node} */
    _nodeTabView: null,
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
    /** @type {ccui.ImageView} */
    _imgReddotTab01: null,
    /** @type {ccui.Layout} */
    _layoutTab02: null,
    /** @type {ccui.ImageView} */
    _imgTab02: null,
    /** @type {ck.Text} */
    _txtTab02: null,
    /** @type {ccui.ImageView} */
    _imgReddotTab02: null,
    /** @type {ccui.Layout} */
    _layoutRootTab: null,
    /** @type {ccui.Layout} */
    _layoutClose: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,


    /**
     * _ccs.MailboxPopup constructor
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

        ///// # _layoutPopup
        this._layoutPopup = new ccui.Layout();
        this._layoutPopup.setName("_layoutPopup");
        this.addChild(this._layoutPopup);
        this._layoutPopup.setCascadeOpacityEnabled(true);
        this._layoutPopup.setCascadeColorEnabled(true);
        this._layoutPopup.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        this._layoutPopup.setTouchEnabled(true);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(540, 772));

        ///// # _layoutBackground
        this._layoutBackground = new ccui.Layout();
        this._layoutBackground.setName("_layoutBackground");
        this._layoutPopup.addChild(this._layoutBackground);
        this._layoutBackground.setCascadeOpacityEnabled(true);
        this._layoutBackground.setCascadeColorEnabled(true);
        this._layoutBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBackground, 0.5, 0.5);
        let _layoutBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBackground);
        _layoutBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBackgroundLayoutComponent.setPositionPercentX(0.5);
        _layoutBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBackgroundLayoutComponent.setPositionPercentY(0.5);
        _layoutBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentWidth(1);
        _layoutBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentHeight(1);
        this._layoutBackground.setTouchEnabled(true);
        this._layoutBackground.setUnifySizeEnabled(false);
        this._layoutBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBackground, 1, 1);

        ///// # _imgBackgroundBack
        this._imgBackgroundBack = new ccui.ImageView();
        this._imgBackgroundBack.setName("_imgBackgroundBack");
        this._layoutBackground.addChild(this._imgBackgroundBack);
        this._imgBackgroundBack.setCascadeOpacityEnabled(true);
        this._imgBackgroundBack.setCascadeColorEnabled(true);
        this._imgBackgroundBack.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundBack, 0.5, 0.5);
        let _imgBackgroundBackLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundBack);
        _imgBackgroundBackLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundBackLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundBackLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundBackLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundBackLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundBackLayoutComponent.setPercentWidth(1);
        _imgBackgroundBackLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundBackLayoutComponent.setPercentHeight(1);
        this._imgBackgroundBack.loadTexture("basics/popup/Back.png", 1);
        this._imgBackgroundBack.setUnifySizeEnabled(false);
        this._imgBackgroundBack.ignoreContentAdaptWithSize(false);
        this._imgBackgroundBack.setScale9Enabled(true);
        this._imgBackgroundBack.setCapInsets(cc.rect(69, 57, 72, 61));
        ck.UIUtils.setSizePercent(this._imgBackgroundBack, 1, 1);
        this._imgBackgroundBack.setTouchEnabled(false);

        ///// # _imgBackgroundFront
        this._imgBackgroundFront = new ccui.ImageView();
        this._imgBackgroundFront.setName("_imgBackgroundFront");
        this._layoutBackground.addChild(this._imgBackgroundFront);
        this._imgBackgroundFront.setCascadeOpacityEnabled(true);
        this._imgBackgroundFront.setCascadeColorEnabled(true);
        this._imgBackgroundFront.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundFront, 0.5, 0.5);
        let _imgBackgroundFrontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundFront);
        _imgBackgroundFrontLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundFrontLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundFrontLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPercentWidth(0.95);
        _imgBackgroundFrontLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPercentHeight(0.96);
        this._imgBackgroundFront.loadTexture("basics/popup/Font.png", 1);
        this._imgBackgroundFront.setUnifySizeEnabled(false);
        this._imgBackgroundFront.ignoreContentAdaptWithSize(false);
        this._imgBackgroundFront.setScale9Enabled(true);
        this._imgBackgroundFront.setCapInsets(cc.rect(69, 57, 15, 31));
        ck.UIUtils.setSizePercent(this._imgBackgroundFront, 0.95, 0.96);
        this._imgBackgroundFront.setTouchEnabled(false);

        ///// # _layoutTitle
        this._layoutTitle = new ccui.Layout();
        this._layoutTitle.setName("_layoutTitle");
        this._layoutPopup.addChild(this._layoutTitle);
        this._layoutTitle.setCascadeOpacityEnabled(true);
        this._layoutTitle.setCascadeColorEnabled(true);
        this._layoutTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTitle, 0.5, 1);
        let _layoutTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTitle);
        _layoutTitleLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTitleLayoutComponent.setPositionPercentX(0.5);
        _layoutTitleLayoutComponent.setPositionPercentYEnabled(true);
        _layoutTitleLayoutComponent.setPositionPercentY(1);
        this._layoutTitle.setTouchEnabled(false);
        this._layoutTitle.setUnifySizeEnabled(false);
        this._layoutTitle.ignoreContentAdaptWithSize(false);
        this._layoutTitle.setContentSize(cc.size(369.2084, 88.5504));

        ///// # _imgBackgroundTitle
        this._imgBackgroundTitle = new ccui.ImageView();
        this._imgBackgroundTitle.setName("_imgBackgroundTitle");
        this._layoutTitle.addChild(this._imgBackgroundTitle);
        this._imgBackgroundTitle.setCascadeOpacityEnabled(true);
        this._imgBackgroundTitle.setCascadeColorEnabled(true);
        this._imgBackgroundTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundTitle, 0.5, 0.5);
        let _imgBackgroundTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundTitle);
        _imgBackgroundTitleLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundTitleLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundTitleLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundTitleLayoutComponent.setPositionPercentY(0.5);
        this._imgBackgroundTitle.loadTexture("basics/popup/HeaderBlue.png", 1);
        this._imgBackgroundTitle.setUnifySizeEnabled(false);
        this._imgBackgroundTitle.ignoreContentAdaptWithSize(false);
        this._imgBackgroundTitle.setContentSize(cc.size(346, 84));
        this._imgBackgroundTitle.setTouchEnabled(false);

        ///// # _txtTitle
        this._txtTitle = new ck.Text();
        this._txtTitle.setName("_txtTitle");
        this._layoutTitle.addChild(this._txtTitle);
        this._txtTitle.setCascadeOpacityEnabled(true);
        this._txtTitle.setCascadeColorEnabled(true);
        this._txtTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle, 0.5, 0.5);
        this._txtTitle.setTextColor(cc.color(255, 252, 225, 255));
        let _txtTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle);
        _txtTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentX(0.5);
        _txtTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentY(0.5);
        this._txtTitle.setTouchEnabled(false);
        this._txtTitle.ignoreContentAdaptWithSize(true);
        this._txtTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTitle.setDefaultFontSize(55);
        this._txtTitle.setString(gm.localize.getText("TXT_MAILBOX"));
        this._txtTitle.setTextHorizontalAlignment(1);
        this._txtTitle.setTextVerticalAlignment(1);
        this._txtTitle.enableOutline(cc.color(155, 68, 38, 255), 2);
        this._txtTitle.enableShadow(cc.color(155, 68, 38, 255), cc.size(0, -2), 0);

        ///// # _nodeTabView
        this._nodeTabView = new cc.Node();
        this._nodeTabView.setName("_nodeTabView");
        this._layoutPopup.addChild(this._nodeTabView);
        this._nodeTabView.setCascadeOpacityEnabled(true);
        this._nodeTabView.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeTabView, 0.5, 0.9213);
        let _nodeTabViewLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeTabView);
        _nodeTabViewLayoutComponent.setPositionPercentXEnabled(true);
        _nodeTabViewLayoutComponent.setPositionPercentX(0.5);
        _nodeTabViewLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _nodeTabViewLayoutComponent.setTopMargin(60.7855);

        ///// # _layoutTabBar
        this._layoutTabBar = new ccui.Layout();
        this._layoutTabBar.setName("_layoutTabBar");
        this._nodeTabView.addChild(this._layoutTabBar);
        this._layoutTabBar.setCascadeOpacityEnabled(true);
        this._layoutTabBar.setCascadeColorEnabled(true);
        this._layoutTabBar.setAnchorPoint(cc.p(0.5, 1));
        this._layoutTabBar.setPosition(0, -0.0011);
        let _layoutTabBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTabBar);
        _layoutTabBarLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _layoutTabBarLayoutComponent.setTopMargin(0.0011);
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
        this._layoutTab01.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTab01, 0, 0.5);
        let _layoutTab01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTab01);
        _layoutTab01LayoutComponent.setPositionPercentXEnabled(true);
        _layoutTab01LayoutComponent.setPositionPercentX(0);
        _layoutTab01LayoutComponent.setPercentWidthEnabled(true);
        _layoutTab01LayoutComponent.setPercentWidth(0.5);
        _layoutTab01LayoutComponent.setPercentHeightEnabled(true);
        _layoutTab01LayoutComponent.setPercentHeight(1);
        _layoutTab01LayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _layoutTab01LayoutComponent.setTopMargin(0);
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
        this._txtTab01.setString(gm.localize.getText("TXT_MAIL"));
        this._txtTab01.setTextHorizontalAlignment(1);
        this._txtTab01.setTextVerticalAlignment(1);

        ///// # _imgReddotTab01
        this._imgReddotTab01 = new ccui.ImageView();
        this._imgReddotTab01.setName("_imgReddotTab01");
        this._layoutTab01.addChild(this._imgReddotTab01);
        this._imgReddotTab01.setCascadeOpacityEnabled(true);
        this._imgReddotTab01.setCascadeColorEnabled(true);
        this._imgReddotTab01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgReddotTab01, 0.6304, 0.65);
        this._imgReddotTab01.setScale(0.7, 0.7);
        let _imgReddotTab01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgReddotTab01);
        _imgReddotTab01LayoutComponent.setPositionPercentXEnabled(true);
        _imgReddotTab01LayoutComponent.setPositionPercentX(0.6304);
        _imgReddotTab01LayoutComponent.setPositionPercentYEnabled(true);
        _imgReddotTab01LayoutComponent.setPositionPercentY(0.65);
        this._imgReddotTab01.loadTexture("basics/other/RedDot.png", 1);
        this._imgReddotTab01.setUnifySizeEnabled(false);
        this._imgReddotTab01.ignoreContentAdaptWithSize(false);
        this._imgReddotTab01.setContentSize(cc.size(31, 31));
        this._imgReddotTab01.setTouchEnabled(false);

        ///// # _layoutTab02
        this._layoutTab02 = new ccui.Layout();
        this._layoutTab02.setName("_layoutTab02");
        this._layoutTabBar.addChild(this._layoutTab02);
        this._layoutTab02.setCascadeOpacityEnabled(true);
        this._layoutTab02.setCascadeColorEnabled(true);
        this._layoutTab02.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTab02, 1, 0.5);
        let _layoutTab02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTab02);
        _layoutTab02LayoutComponent.setPositionPercentXEnabled(true);
        _layoutTab02LayoutComponent.setPositionPercentX(1);
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
        this._txtTab02.setString(gm.localize.getText("TXT_NEWS"));
        this._txtTab02.setTextHorizontalAlignment(1);
        this._txtTab02.setTextVerticalAlignment(1);

        ///// # _imgReddotTab02
        this._imgReddotTab02 = new ccui.ImageView();
        this._imgReddotTab02.setName("_imgReddotTab02");
        this._layoutTab02.addChild(this._imgReddotTab02);
        this._imgReddotTab02.setCascadeOpacityEnabled(true);
        this._imgReddotTab02.setCascadeColorEnabled(true);
        this._imgReddotTab02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgReddotTab02, 0.6873, 0.65);
        this._imgReddotTab02.setScale(0.7, 0.7);
        let _imgReddotTab02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgReddotTab02);
        _imgReddotTab02LayoutComponent.setPositionPercentXEnabled(true);
        _imgReddotTab02LayoutComponent.setPositionPercentX(0.6873);
        _imgReddotTab02LayoutComponent.setPositionPercentYEnabled(true);
        _imgReddotTab02LayoutComponent.setPositionPercentY(0.65);
        this._imgReddotTab02.loadTexture("basics/other/RedDot.png", 1);
        this._imgReddotTab02.setUnifySizeEnabled(false);
        this._imgReddotTab02.ignoreContentAdaptWithSize(false);
        this._imgReddotTab02.setContentSize(cc.size(31, 31));
        this._imgReddotTab02.setTouchEnabled(false);

        ///// # _layoutRootTab
        this._layoutRootTab = new ccui.Layout();
        this._layoutRootTab.setName("_layoutRootTab");
        this._nodeTabView.addChild(this._layoutRootTab);
        this._layoutRootTab.setCascadeOpacityEnabled(true);
        this._layoutRootTab.setCascadeColorEnabled(true);
        this._layoutRootTab.setAnchorPoint(cc.p(0.5, 1));
        this._layoutRootTab.setPosition(0, -57.0035);
        let _layoutRootTabLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRootTab);
        _layoutRootTabLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _layoutRootTabLayoutComponent.setTopMargin(57.0035);
        this._layoutRootTab.setTouchEnabled(true);
        this._layoutRootTab.setUnifySizeEnabled(false);
        this._layoutRootTab.ignoreContentAdaptWithSize(false);
        this._layoutRootTab.setContentSize(cc.size(470, 610));

        ///// # _layoutClose
        this._layoutClose = new ccui.Layout();
        this._layoutClose.setName("_layoutClose");
        this._layoutPopup.addChild(this._layoutClose);
        this._layoutClose.setCascadeOpacityEnabled(true);
        this._layoutClose.setCascadeColorEnabled(true);
        this._layoutClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutClose, 0.99, 0.99);
        let _layoutCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutClose);
        _layoutCloseLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentX(0.99);
        _layoutCloseLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentY(0.99);
        this._layoutClose.setTouchEnabled(true);
        this._layoutClose.setUnifySizeEnabled(false);
        this._layoutClose.ignoreContentAdaptWithSize(false);
        this._layoutClose.setContentSize(cc.size(68.5109, 71.5959));

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._layoutClose.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.5, 0.5);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.5);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.5);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(81, 83));
        this._imgClose.setTouchEnabled(false);

    },



});

/**
 * Create MailboxPopup
 * @returns {_ccs.MailboxPopup}
 */
_ccs.MailboxPopup.create = function () {
    return new _ccs.MailboxPopup();
};
