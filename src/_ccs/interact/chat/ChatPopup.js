/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ChatPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ChatPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.Layout} */
    _layoutBackground: null,
    /** @type {ccui.ImageView} */
    _imgBackground01: null,
    /** @type {ccui.ImageView} */
    _imgBackground02: null,
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
    /** @type {ccui.ImageView} */
    _imgIconTab01: null,
    /** @type {ccui.ImageView} */
    _imgReddotTab01: null,
    /** @type {ccui.Layout} */
    _layoutTab02: null,
    /** @type {ccui.ImageView} */
    _imgTab02: null,
    /** @type {ck.Text} */
    _txtTab02: null,
    /** @type {ccui.ImageView} */
    _imgIconTab02: null,
    /** @type {ccui.ImageView} */
    _imgReddotTab02: null,
    /** @type {ccui.Layout} */
    _layoutTab03: null,
    /** @type {ccui.ImageView} */
    _imgTab03: null,
    /** @type {ck.Text} */
    _txtTab03: null,
    /** @type {ccui.ImageView} */
    _imgIconTab03: null,
    /** @type {ccui.ImageView} */
    _imgReddotTab03: null,
    /** @type {ccui.Layout} */
    _layoutRootTab: null,


    /**
     * _ccs.ChatPopup constructor
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
        this._layoutPopup.setContentSize(cc.size(450, 515));

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

        ///// # _imgBackground01
        this._imgBackground01 = new ccui.ImageView();
        this._imgBackground01.setName("_imgBackground01");
        this._layoutBackground.addChild(this._imgBackground01);
        this._imgBackground01.setCascadeOpacityEnabled(true);
        this._imgBackground01.setCascadeColorEnabled(true);
        this._imgBackground01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground01, 0.5, 0.5);
        this._imgBackground01.setOpacity(102);
        this._imgBackground01.setColor(cc.color(0, 0, 0, 255));
        let _imgBackground01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground01);
        _imgBackground01LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackground01LayoutComponent.setPositionPercentX(0.5);
        _imgBackground01LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackground01LayoutComponent.setPositionPercentY(0.5);
        _imgBackground01LayoutComponent.setPercentWidthEnabled(true);
        _imgBackground01LayoutComponent.setPercentWidth(1);
        _imgBackground01LayoutComponent.setPercentHeightEnabled(true);
        _imgBackground01LayoutComponent.setPercentHeight(1);
        this._imgBackground01.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgBackground01.setUnifySizeEnabled(false);
        this._imgBackground01.ignoreContentAdaptWithSize(false);
        this._imgBackground01.setScale9Enabled(true);
        this._imgBackground01.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgBackground01, 1, 1);
        this._imgBackground01.setTouchEnabled(false);

        ///// # _imgBackground02
        this._imgBackground02 = new ccui.ImageView();
        this._imgBackground02.setName("_imgBackground02");
        this._layoutBackground.addChild(this._imgBackground02);
        this._imgBackground02.setCascadeOpacityEnabled(true);
        this._imgBackground02.setCascadeColorEnabled(true);
        this._imgBackground02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground02, 0.5, 0.5);
        this._imgBackground02.setColor(cc.color(53, 170, 165, 255));
        let _imgBackground02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground02);
        _imgBackground02LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackground02LayoutComponent.setPositionPercentX(0.5);
        _imgBackground02LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackground02LayoutComponent.setPositionPercentY(0.5);
        this._imgBackground02.loadTexture("basics/shapes/StrokeRoundedRectangle_64px_5px.png", 1);
        this._imgBackground02.setUnifySizeEnabled(false);
        this._imgBackground02.ignoreContentAdaptWithSize(false);
        this._imgBackground02.setScale9Enabled(true);
        this._imgBackground02.setCapInsets(cc.rect(21, 21, 24, 24));
        this._imgBackground02.setContentSize(cc.size(452, 517));
        this._imgBackground02.setTouchEnabled(false);

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
        this._layoutTabBar.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutTabBar, 0.5, 0);
        let _layoutTabBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTabBar);
        _layoutTabBarLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTabBarLayoutComponent.setPositionPercentX(0.5);
        _layoutTabBarLayoutComponent.setPercentWidthEnabled(true);
        _layoutTabBarLayoutComponent.setPercentWidth(1);
        _layoutTabBarLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.BOTTOM);
        _layoutTabBarLayoutComponent.setBottomMargin(0);
        this._layoutTabBar.setTouchEnabled(true);
        this._layoutTabBar.setUnifySizeEnabled(false);
        this._layoutTabBar.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutTabBar, 1);
        this._layoutTabBar.setContentSize(cc.size(this._layoutTabBar.width, 47));

        ///// # _imgBackgroundTabBar
        this._imgBackgroundTabBar = new ccui.ImageView();
        this._imgBackgroundTabBar.setName("_imgBackgroundTabBar");
        this._layoutTabBar.addChild(this._imgBackgroundTabBar);
        this._imgBackgroundTabBar.setCascadeOpacityEnabled(true);
        this._imgBackgroundTabBar.setCascadeColorEnabled(true);
        this._imgBackgroundTabBar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundTabBar, 0.5, 0.5);
        this._imgBackgroundTabBar.setColor(cc.color(35, 106, 131, 255));
        let _imgBackgroundTabBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundTabBar);
        _imgBackgroundTabBarLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundTabBarLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundTabBarLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundTabBarLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundTabBarLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundTabBarLayoutComponent.setPercentWidth(1);
        _imgBackgroundTabBarLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundTabBarLayoutComponent.setPercentHeight(1);
        this._imgBackgroundTabBar.loadTexture("basics/shapes/RoundedRectangle_64px_0055px.png", 1);
        this._imgBackgroundTabBar.setUnifySizeEnabled(false);
        this._imgBackgroundTabBar.ignoreContentAdaptWithSize(false);
        this._imgBackgroundTabBar.setScale9Enabled(true);
        this._imgBackgroundTabBar.setCapInsets(cc.rect(21, 13, 22, 38));
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
        _layoutTab01LayoutComponent.setPercentWidth(0.3333);
        _layoutTab01LayoutComponent.setPercentHeightEnabled(true);
        _layoutTab01LayoutComponent.setPercentHeight(1);
        _layoutTab01LayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _layoutTab01LayoutComponent.setTopMargin(0);
        this._layoutTab01.setTouchEnabled(true);
        this._layoutTab01.setUnifySizeEnabled(false);
        this._layoutTab01.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutTab01, 0.3333, 1);

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
        _imgTab01LayoutComponent.setPercentWidthEnabled(true);
        _imgTab01LayoutComponent.setPercentWidth(1);
        _imgTab01LayoutComponent.setPercentHeightEnabled(true);
        _imgTab01LayoutComponent.setPercentHeight(1);
        this._imgTab01.loadTexture("basics/tabs/Tab02.png", 1);
        this._imgTab01.setUnifySizeEnabled(false);
        this._imgTab01.ignoreContentAdaptWithSize(false);
        this._imgTab01.setScale9Enabled(true);
        this._imgTab01.setCapInsets(cc.rect(54, 17, 40, 13));
        ck.UIUtils.setSizePercent(this._imgTab01, 1, 1);
        this._imgTab01.setTouchEnabled(false);

        ///// # _txtTab01
        this._txtTab01 = new ck.Text();
        this._txtTab01.setName("_txtTab01");
        this._layoutTab01.addChild(this._txtTab01);
        this._txtTab01.setCascadeOpacityEnabled(true);
        this._txtTab01.setCascadeColorEnabled(true);
        this._txtTab01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTab01, 0.5, 0.5);
        this._txtTab01.setVisible(false);
        this._txtTab01.setTextColor(cc.color(209, 237, 255, 255));
        let _txtTab01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTab01);
        _txtTab01LayoutComponent.setPositionPercentXEnabled(true);
        _txtTab01LayoutComponent.setPositionPercentX(0.5);
        _txtTab01LayoutComponent.setPositionPercentYEnabled(true);
        _txtTab01LayoutComponent.setPositionPercentY(0.5);
        this._txtTab01.setTouchEnabled(false);
        this._txtTab01.ignoreContentAdaptWithSize(true);
        this._txtTab01.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTab01.setDefaultFontSize(33);
        this._txtTab01.setString(gm.localize.getText("TXT_CHAT"));
        this._txtTab01.setTextHorizontalAlignment(1);
        this._txtTab01.setTextVerticalAlignment(1);
        this._txtTab01.enableOutline(cc.color(17, 94, 123, 255), 1);

        ///// # _imgIconTab01
        this._imgIconTab01 = new ccui.ImageView();
        this._imgIconTab01.setName("_imgIconTab01");
        this._layoutTab01.addChild(this._imgIconTab01);
        this._imgIconTab01.setCascadeOpacityEnabled(true);
        this._imgIconTab01.setCascadeColorEnabled(true);
        this._imgIconTab01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconTab01, 0.5, 0.5);
        let _imgIconTab01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconTab01);
        _imgIconTab01LayoutComponent.setPositionPercentXEnabled(true);
        _imgIconTab01LayoutComponent.setPositionPercentX(0.5);
        _imgIconTab01LayoutComponent.setPositionPercentYEnabled(true);
        _imgIconTab01LayoutComponent.setPositionPercentY(0.5);
        this._imgIconTab01.loadTexture("icons/color/other/Chat_02.png", 1);
        this._imgIconTab01.setUnifySizeEnabled(false);
        this._imgIconTab01.ignoreContentAdaptWithSize(false);
        this._imgIconTab01.setContentSize(cc.size(39, 30));
        this._imgIconTab01.setTouchEnabled(false);

        ///// # _imgReddotTab01
        this._imgReddotTab01 = new ccui.ImageView();
        this._imgReddotTab01.setName("_imgReddotTab01");
        this._layoutTab01.addChild(this._imgReddotTab01);
        this._imgReddotTab01.setCascadeOpacityEnabled(true);
        this._imgReddotTab01.setCascadeColorEnabled(true);
        this._imgReddotTab01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgReddotTab01, 0.6304, 0.65);
        this._imgReddotTab01.setVisible(false);
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
        this._layoutTab02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTab02, 0.5, 0.5);
        let _layoutTab02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTab02);
        _layoutTab02LayoutComponent.setPositionPercentXEnabled(true);
        _layoutTab02LayoutComponent.setPositionPercentX(0.5);
        _layoutTab02LayoutComponent.setPositionPercentYEnabled(true);
        _layoutTab02LayoutComponent.setPositionPercentY(0.5);
        _layoutTab02LayoutComponent.setPercentWidthEnabled(true);
        _layoutTab02LayoutComponent.setPercentWidth(0.3333);
        _layoutTab02LayoutComponent.setPercentHeightEnabled(true);
        _layoutTab02LayoutComponent.setPercentHeight(1);
        this._layoutTab02.setTouchEnabled(true);
        this._layoutTab02.setUnifySizeEnabled(false);
        this._layoutTab02.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutTab02, 0.3333, 1);

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
        _imgTab02LayoutComponent.setPercentWidthEnabled(true);
        _imgTab02LayoutComponent.setPercentWidth(1);
        _imgTab02LayoutComponent.setPercentHeightEnabled(true);
        _imgTab02LayoutComponent.setPercentHeight(1);
        this._imgTab02.loadTexture("basics/tabs/Tab02.png", 1);
        this._imgTab02.setUnifySizeEnabled(false);
        this._imgTab02.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgTab02, 1, 1);
        this._imgTab02.setTouchEnabled(false);
        this._imgTab02.setFlippedX(true);

        ///// # _txtTab02
        this._txtTab02 = new ck.Text();
        this._txtTab02.setName("_txtTab02");
        this._layoutTab02.addChild(this._txtTab02);
        this._txtTab02.setCascadeOpacityEnabled(true);
        this._txtTab02.setCascadeColorEnabled(true);
        this._txtTab02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTab02, 0.5, 0.5);
        this._txtTab02.setVisible(false);
        this._txtTab02.setTextColor(cc.color(106, 147, 186, 255));
        let _txtTab02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTab02);
        _txtTab02LayoutComponent.setPositionPercentXEnabled(true);
        _txtTab02LayoutComponent.setPositionPercentX(0.5);
        _txtTab02LayoutComponent.setPositionPercentYEnabled(true);
        _txtTab02LayoutComponent.setPositionPercentY(0.5);
        this._txtTab02.setTouchEnabled(false);
        this._txtTab02.ignoreContentAdaptWithSize(true);
        this._txtTab02.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTab02.setDefaultFontSize(33);
        this._txtTab02.setString(gm.localize.getText("TXT_EMOJI"));
        this._txtTab02.setTextHorizontalAlignment(1);
        this._txtTab02.setTextVerticalAlignment(1);

        ///// # _imgIconTab02
        this._imgIconTab02 = new ccui.ImageView();
        this._imgIconTab02.setName("_imgIconTab02");
        this._layoutTab02.addChild(this._imgIconTab02);
        this._imgIconTab02.setCascadeOpacityEnabled(true);
        this._imgIconTab02.setCascadeColorEnabled(true);
        this._imgIconTab02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconTab02, 0.5, 0.5);
        let _imgIconTab02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconTab02);
        _imgIconTab02LayoutComponent.setPositionPercentXEnabled(true);
        _imgIconTab02LayoutComponent.setPositionPercentX(0.5);
        _imgIconTab02LayoutComponent.setPositionPercentYEnabled(true);
        _imgIconTab02LayoutComponent.setPositionPercentY(0.5);
        this._imgIconTab02.loadTexture("icons/color/other/Emo_01.png", 1);
        this._imgIconTab02.setUnifySizeEnabled(false);
        this._imgIconTab02.ignoreContentAdaptWithSize(false);
        this._imgIconTab02.setContentSize(cc.size(29, 29));
        this._imgIconTab02.setTouchEnabled(false);

        ///// # _imgReddotTab02
        this._imgReddotTab02 = new ccui.ImageView();
        this._imgReddotTab02.setName("_imgReddotTab02");
        this._layoutTab02.addChild(this._imgReddotTab02);
        this._imgReddotTab02.setCascadeOpacityEnabled(true);
        this._imgReddotTab02.setCascadeColorEnabled(true);
        this._imgReddotTab02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgReddotTab02, 0.6873, 0.65);
        this._imgReddotTab02.setVisible(false);
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

        ///// # _layoutTab03
        this._layoutTab03 = new ccui.Layout();
        this._layoutTab03.setName("_layoutTab03");
        this._layoutTabBar.addChild(this._layoutTab03);
        this._layoutTab03.setCascadeOpacityEnabled(true);
        this._layoutTab03.setCascadeColorEnabled(true);
        this._layoutTab03.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTab03, 1, 0.5);
        let _layoutTab03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTab03);
        _layoutTab03LayoutComponent.setPositionPercentXEnabled(true);
        _layoutTab03LayoutComponent.setPositionPercentX(1);
        _layoutTab03LayoutComponent.setPositionPercentYEnabled(true);
        _layoutTab03LayoutComponent.setPositionPercentY(0.5);
        _layoutTab03LayoutComponent.setPercentWidthEnabled(true);
        _layoutTab03LayoutComponent.setPercentWidth(0.3333);
        _layoutTab03LayoutComponent.setPercentHeightEnabled(true);
        _layoutTab03LayoutComponent.setPercentHeight(1);
        this._layoutTab03.setTouchEnabled(true);
        this._layoutTab03.setUnifySizeEnabled(false);
        this._layoutTab03.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutTab03, 0.3333, 1);

        ///// # _imgTab03
        this._imgTab03 = new ccui.ImageView();
        this._imgTab03.setName("_imgTab03");
        this._layoutTab03.addChild(this._imgTab03);
        this._imgTab03.setCascadeOpacityEnabled(true);
        this._imgTab03.setCascadeColorEnabled(true);
        this._imgTab03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTab03, 0.5, 0.5);
        this._imgTab03.setFlippedX(true);
        let _imgTab03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTab03);
        _imgTab03LayoutComponent.setPositionPercentXEnabled(true);
        _imgTab03LayoutComponent.setPositionPercentX(0.5);
        _imgTab03LayoutComponent.setPositionPercentYEnabled(true);
        _imgTab03LayoutComponent.setPositionPercentY(0.5);
        _imgTab03LayoutComponent.setPercentWidthEnabled(true);
        _imgTab03LayoutComponent.setPercentWidth(1);
        _imgTab03LayoutComponent.setPercentHeightEnabled(true);
        _imgTab03LayoutComponent.setPercentHeight(1);
        this._imgTab03.loadTexture("basics/tabs/Tab02.png", 1);
        this._imgTab03.setUnifySizeEnabled(false);
        this._imgTab03.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgTab03, 1, 1);
        this._imgTab03.setTouchEnabled(false);
        this._imgTab03.setFlippedX(true);

        ///// # _txtTab03
        this._txtTab03 = new ck.Text();
        this._txtTab03.setName("_txtTab03");
        this._layoutTab03.addChild(this._txtTab03);
        this._txtTab03.setCascadeOpacityEnabled(true);
        this._txtTab03.setCascadeColorEnabled(true);
        this._txtTab03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTab03, 0.5, 0.5);
        this._txtTab03.setVisible(false);
        this._txtTab03.setTextColor(cc.color(106, 147, 186, 255));
        let _txtTab03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTab03);
        _txtTab03LayoutComponent.setPositionPercentXEnabled(true);
        _txtTab03LayoutComponent.setPositionPercentX(0.5);
        _txtTab03LayoutComponent.setPositionPercentYEnabled(true);
        _txtTab03LayoutComponent.setPositionPercentY(0.5);
        this._txtTab03.setTouchEnabled(false);
        this._txtTab03.ignoreContentAdaptWithSize(true);
        this._txtTab03.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTab03.setDefaultFontSize(33);
        this._txtTab03.setString(gm.localize.getText("TXT_EMOJI"));
        this._txtTab03.setTextHorizontalAlignment(1);
        this._txtTab03.setTextVerticalAlignment(1);

        ///// # _imgIconTab03
        this._imgIconTab03 = new ccui.ImageView();
        this._imgIconTab03.setName("_imgIconTab03");
        this._layoutTab03.addChild(this._imgIconTab03);
        this._imgIconTab03.setCascadeOpacityEnabled(true);
        this._imgIconTab03.setCascadeColorEnabled(true);
        this._imgIconTab03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconTab03, 0.5, 0.5);
        let _imgIconTab03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconTab03);
        _imgIconTab03LayoutComponent.setPositionPercentXEnabled(true);
        _imgIconTab03LayoutComponent.setPositionPercentX(0.5);
        _imgIconTab03LayoutComponent.setPositionPercentYEnabled(true);
        _imgIconTab03LayoutComponent.setPositionPercentY(0.5);
        this._imgIconTab03.loadTexture("icons/color/other/Trophy_01.png", 1);
        this._imgIconTab03.setUnifySizeEnabled(false);
        this._imgIconTab03.ignoreContentAdaptWithSize(false);
        this._imgIconTab03.setContentSize(cc.size(34, 30));
        this._imgIconTab03.setTouchEnabled(false);

        ///// # _imgReddotTab03
        this._imgReddotTab03 = new ccui.ImageView();
        this._imgReddotTab03.setName("_imgReddotTab03");
        this._layoutTab03.addChild(this._imgReddotTab03);
        this._imgReddotTab03.setCascadeOpacityEnabled(true);
        this._imgReddotTab03.setCascadeColorEnabled(true);
        this._imgReddotTab03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgReddotTab03, 0.6873, 0.65);
        this._imgReddotTab03.setVisible(false);
        this._imgReddotTab03.setScale(0.7, 0.7);
        let _imgReddotTab03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgReddotTab03);
        _imgReddotTab03LayoutComponent.setPositionPercentXEnabled(true);
        _imgReddotTab03LayoutComponent.setPositionPercentX(0.6873);
        _imgReddotTab03LayoutComponent.setPositionPercentYEnabled(true);
        _imgReddotTab03LayoutComponent.setPositionPercentY(0.65);
        this._imgReddotTab03.loadTexture("basics/other/RedDot.png", 1);
        this._imgReddotTab03.setUnifySizeEnabled(false);
        this._imgReddotTab03.ignoreContentAdaptWithSize(false);
        this._imgReddotTab03.setContentSize(cc.size(31, 31));
        this._imgReddotTab03.setTouchEnabled(false);

        ///// # _layoutRootTab
        this._layoutRootTab = new ccui.Layout();
        this._layoutRootTab.setName("_layoutRootTab");
        this._layoutTabView.addChild(this._layoutRootTab);
        this._layoutRootTab.setCascadeOpacityEnabled(true);
        this._layoutRootTab.setCascadeColorEnabled(true);
        this._layoutRootTab.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutRootTab, 0.5, 1);
        let _layoutRootTabLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRootTab);
        _layoutRootTabLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRootTabLayoutComponent.setPositionPercentX(0.5);
        _layoutRootTabLayoutComponent.setPercentWidthEnabled(true);
        _layoutRootTabLayoutComponent.setPercentWidth(1);
        _layoutRootTabLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _layoutRootTabLayoutComponent.setTopMargin(0);
        this._layoutRootTab.setTouchEnabled(true);
        this._layoutRootTab.setUnifySizeEnabled(false);
        this._layoutRootTab.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutRootTab, 1);
        this._layoutRootTab.setContentSize(cc.size(this._layoutRootTab.width, 468));

    },



});

/**
 * Create ChatPopup
 * @returns {_ccs.ChatPopup}
 */
_ccs.ChatPopup.create = function () {
    return new _ccs.ChatPopup();
};
