/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.LeagueGuide
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.LeagueGuide = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.PageView} */
    _pageView: null,
    /** @type {ccui.Layout} */
    _page1: null,
    /** @type {cc.Node} */
    _step01: null,
    /** @type {ccui.ImageView} */
    _imgStep01: null,
    /** @type {ccui.ImageView} */
    _imgCallout01: null,
    /** @type {ck.Text} */
    _txtStep01: null,
    /** @type {cc.Node} */
    _step02: null,
    /** @type {ccui.ImageView} */
    _imgCallout02: null,
    /** @type {ck.Text} */
    _txtStep02: null,
    /** @type {ccui.ImageView} */
    _imgStep02: null,
    /** @type {cc.Node} */
    _step03: null,
    /** @type {ccui.ImageView} */
    _imgStep03: null,
    /** @type {ccui.ImageView} */
    _imgCallout03: null,
    /** @type {ck.Text} */
    _txtStep03: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtHint: null,
    /** @type {ccui.Layout} */
    _page2: null,
    /** @type {ck.Text} */
    _txtTips: null,
    /** @type {ck.Text} */
    _txtPistiMaster: null,
    /** @type {cc.Sprite} */
    league_7: null,
    /** @type {ccui.ImageView} */
    Image_5_0_0_0_0_0_0: null,
    /** @type {ck.Text} */
    _txtName7: null,
    /** @type {ccui.Layout} */
    panelStar_7: null,
    /** @type {cc.Sprite} */
    league_Star_10: null,
    /** @type {cc.Sprite} */
    league_Star_10_0: null,
    /** @type {cc.Sprite} */
    league_Star_10_0_0: null,
    /** @type {cc.Sprite} */
    league_6: null,
    /** @type {ccui.Layout} */
    panelStar_6: null,
    /** @type {cc.Sprite} */
    league_Star_10: null,
    /** @type {cc.Sprite} */
    league_Star_10_0: null,
    /** @type {cc.Sprite} */
    league_Star_10_0_0: null,
    /** @type {ck.Text} */
    _txtName6: null,
    /** @type {ccui.ImageView} */
    Image_5_0_0_0_0_0: null,
    /** @type {cc.Sprite} */
    league_5: null,
    /** @type {ccui.Layout} */
    panelStar_5: null,
    /** @type {cc.Sprite} */
    league_Star_10: null,
    /** @type {cc.Sprite} */
    league_Star_10_0: null,
    /** @type {cc.Sprite} */
    league_Star_10_0_0: null,
    /** @type {ccui.ImageView} */
    Image_5_0_0_0_0: null,
    /** @type {ck.Text} */
    _txtName5: null,
    /** @type {cc.Sprite} */
    league_1: null,
    /** @type {ccui.Layout} */
    panelStar_1: null,
    /** @type {cc.Sprite} */
    league_Star_10: null,
    /** @type {cc.Sprite} */
    league_Star_10_0: null,
    /** @type {cc.Sprite} */
    league_Star_10_0_0: null,
    /** @type {ccui.ImageView} */
    Image_5: null,
    /** @type {ck.Text} */
    _txtName1: null,
    /** @type {cc.Sprite} */
    league_2: null,
    /** @type {ccui.Layout} */
    panelStar_2: null,
    /** @type {cc.Sprite} */
    league_Star_10: null,
    /** @type {cc.Sprite} */
    league_Star_10_0: null,
    /** @type {cc.Sprite} */
    league_Star_10_0_0: null,
    /** @type {ccui.ImageView} */
    Image_5_0: null,
    /** @type {ck.Text} */
    _txtName2: null,
    /** @type {cc.Sprite} */
    league_3: null,
    /** @type {ccui.Layout} */
    panelStar_3: null,
    /** @type {cc.Sprite} */
    league_Star_10: null,
    /** @type {cc.Sprite} */
    league_Star_10_0: null,
    /** @type {cc.Sprite} */
    league_Star_10_0_0: null,
    /** @type {ccui.ImageView} */
    Image_5_0_0: null,
    /** @type {ck.Text} */
    _txtName3: null,
    /** @type {cc.Sprite} */
    league_4: null,
    /** @type {ccui.Layout} */
    panelStar_4: null,
    /** @type {cc.Sprite} */
    league_Star_10: null,
    /** @type {cc.Sprite} */
    league_Star_10_0: null,
    /** @type {cc.Sprite} */
    league_Star_10_0_0: null,
    /** @type {ck.Text} */
    _txtName4: null,
    /** @type {ccui.ImageView} */
    Image_5_0_0_0: null,
    /** @type {ccui.ImageView} */
    _imgYouAreHere: null,
    /** @type {ck.Text} */
    _txtYouAreHere: null,
    /** @type {ccui.Layout} */
    _panelBottom: null,
    /** @type {ccui.Button} */
    _btnLeft: null,
    /** @type {ccui.Button} */
    _btnRight: null,
    /** @type {ccui.Button} */
    _btnClose: null,


    /**
     * _ccs.LeagueGuide constructor
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
        _layoutPopupLayoutComponent.setPercentWidthEnabled(true);
        _layoutPopupLayoutComponent.setPercentWidth(1);
        _layoutPopupLayoutComponent.setPercentHeightEnabled(true);
        _layoutPopupLayoutComponent.setPercentHeight(1);
        this._layoutPopup.setTouchEnabled(false);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutPopup, 1, 1);

        ///// # _pageView
        this._pageView = new ccui.PageView();
        this._pageView.setName("_pageView");
        this._layoutPopup.addChild(this._pageView);
        this._pageView.setCascadeOpacityEnabled(true);
        this._pageView.setCascadeColorEnabled(true);
        this._pageView.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._pageView, 0.5, 0.5);
        let _pageViewLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._pageView);
        _pageViewLayoutComponent.setPositionPercentXEnabled(true);
        _pageViewLayoutComponent.setPositionPercentX(0.5);
        _pageViewLayoutComponent.setPositionPercentYEnabled(true);
        _pageViewLayoutComponent.setPositionPercentY(0.5);
        _pageViewLayoutComponent.setPercentWidthEnabled(true);
        _pageViewLayoutComponent.setPercentWidth(1);
        _pageViewLayoutComponent.setPercentHeightEnabled(true);
        _pageViewLayoutComponent.setPercentHeight(0.8);
        this._pageView.setTouchEnabled(true);
        this._pageView.setUnifySizeEnabled(false);
        this._pageView.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._pageView, 1, 0.8);

        ///// # _page1
        this._page1 = new ccui.Layout();
        this._page1.setName("_page1");
        this._pageView.addPage(this._page1);
        this._page1.setCascadeOpacityEnabled(true);
        this._page1.setCascadeColorEnabled(true);
        let _page1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._page1);
        this._page1.setTouchEnabled(true);
        this._page1.setUnifySizeEnabled(false);
        this._page1.ignoreContentAdaptWithSize(false);
        this._page1.setContentSize(cc.size(640, 908.8));

        ///// # _step01
        this._step01 = new cc.Node();
        this._step01.setName("_step01");
        this._page1.addChild(this._step01);
        this._step01.setCascadeOpacityEnabled(true);
        this._step01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._step01, 0.1589, 0.4095);
        let _step01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._step01);
        _step01LayoutComponent.setPositionPercentXEnabled(true);
        _step01LayoutComponent.setPositionPercentX(0.1589);

        ///// # _imgStep01
        this._imgStep01 = new ccui.ImageView();
        this._imgStep01.setName("_imgStep01");
        this._step01.addChild(this._imgStep01);
        this._imgStep01.setCascadeOpacityEnabled(true);
        this._imgStep01.setCascadeColorEnabled(true);
        this._imgStep01.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgStep01.setPosition(61.7422, -2.7948);
        this._imgStep01.setScale(0.9, 0.9);
        let _imgStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep01);
        this._imgStep01.loadTexture("league/Tutorial_01.png", 1);
        this._imgStep01.setUnifySizeEnabled(false);
        this._imgStep01.ignoreContentAdaptWithSize(false);
        this._imgStep01.setContentSize(cc.size(320, 341));
        this._imgStep01.setTouchEnabled(false);

        ///// # _imgCallout01
        this._imgCallout01 = new ccui.ImageView();
        this._imgCallout01.setName("_imgCallout01");
        this._step01.addChild(this._imgCallout01);
        this._imgCallout01.setCascadeOpacityEnabled(true);
        this._imgCallout01.setCascadeColorEnabled(true);
        this._imgCallout01.setAnchorPoint(cc.p(0.1239, 0));
        this._imgCallout01.setPosition(-13.4647, -106.1356);
        this._imgCallout01.setRotationX(180);
        this._imgCallout01.setRotationY(179.993);
        this._imgCallout01.setFlippedX(true);
        let _imgCallout01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCallout01);
        this._imgCallout01.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgCallout01.setUnifySizeEnabled(false);
        this._imgCallout01.ignoreContentAdaptWithSize(false);
        this._imgCallout01.setScale9Enabled(true);
        this._imgCallout01.setCapInsets(cc.rect(106, 30, 11, 68));
        this._imgCallout01.setContentSize(cc.size(222.45, 128));
        this._imgCallout01.setTouchEnabled(false);
        this._imgCallout01.setFlippedX(true);

        ///// # _txtStep01
        this._txtStep01 = new ck.Text();
        this._txtStep01.setName("_txtStep01");
        this._step01.addChild(this._txtStep01);
        this._txtStep01.setCascadeOpacityEnabled(true);
        this._txtStep01.setCascadeColorEnabled(true);
        this._txtStep01.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtStep01.setPosition(69.6972, -184.8286);
        let _txtStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep01);
        this._txtStep01.setTouchEnabled(false);
        this._txtStep01.setUnifySizeEnabled(false);
        this._txtStep01.ignoreContentAdaptWithSize(false);
        this._txtStep01.setContentSize(cc.size(196.0488, 91.5611));
        this._txtStep01.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtStep01.setDefaultFontSize(25);
        this._txtStep01.setTextHorizontalAlignment(1);
        this._txtStep01.setTextVerticalAlignment(1);

        ///// # _step02
        this._step02 = new cc.Node();
        this._step02.setName("_step02");
        this._page1.addChild(this._step02);
        this._step02.setCascadeOpacityEnabled(true);
        this._step02.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._step02, 0.5021, 0.7352);
        let _step02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._step02);
        _step02LayoutComponent.setPositionPercentXEnabled(true);
        _step02LayoutComponent.setPositionPercentX(0.5021);

        ///// # _imgCallout02
        this._imgCallout02 = new ccui.ImageView();
        this._imgCallout02.setName("_imgCallout02");
        this._step02.addChild(this._imgCallout02);
        this._imgCallout02.setCascadeOpacityEnabled(true);
        this._imgCallout02.setCascadeColorEnabled(true);
        this._imgCallout02.setAnchorPoint(cc.p(0.1282, 0));
        this._imgCallout02.setPosition(-77.3312, 112.0003);
        this._imgCallout02.setRotationY(-0.007);
        let _imgCallout02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCallout02);
        this._imgCallout02.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgCallout02.setUnifySizeEnabled(false);
        this._imgCallout02.ignoreContentAdaptWithSize(false);
        this._imgCallout02.setScale9Enabled(true);
        this._imgCallout02.setCapInsets(cc.rect(131, 3, 5, 122));
        this._imgCallout02.setContentSize(cc.size(218.7467, 128));
        this._imgCallout02.setTouchEnabled(false);

        ///// # _txtStep02
        this._txtStep02 = new ck.Text();
        this._txtStep02.setName("_txtStep02");
        this._step02.addChild(this._txtStep02);
        this._txtStep02.setCascadeOpacityEnabled(true);
        this._txtStep02.setCascadeColorEnabled(true);
        this._txtStep02.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtStep02.setPosition(3.9984, 189.0089);
        let _txtStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep02);
        this._txtStep02.setTouchEnabled(false);
        this._txtStep02.setUnifySizeEnabled(false);
        this._txtStep02.ignoreContentAdaptWithSize(false);
        this._txtStep02.setContentSize(cc.size(188.7257, 87.7609));
        this._txtStep02.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtStep02.setDefaultFontSize(25);
        this._txtStep02.setTextHorizontalAlignment(1);
        this._txtStep02.setTextVerticalAlignment(1);

        ///// # _imgStep02
        this._imgStep02 = new ccui.ImageView();
        this._imgStep02.setName("_imgStep02");
        this._step02.addChild(this._imgStep02);
        this._imgStep02.setCascadeOpacityEnabled(true);
        this._imgStep02.setCascadeColorEnabled(true);
        this._imgStep02.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep02);
        this._imgStep02.loadTexture("league/Tutorial_02.png", 1);
        this._imgStep02.setUnifySizeEnabled(false);
        this._imgStep02.ignoreContentAdaptWithSize(false);
        this._imgStep02.setContentSize(cc.size(447, 315));
        this._imgStep02.setTouchEnabled(false);

        ///// # _step03
        this._step03 = new cc.Node();
        this._step03.setName("_step03");
        this._page1.addChild(this._step03);
        this._step03.setCascadeOpacityEnabled(true);
        this._step03.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._step03, 0.7818, 0.4084);
        let _step03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._step03);
        _step03LayoutComponent.setPositionPercentXEnabled(true);
        _step03LayoutComponent.setPositionPercentX(0.7818);

        ///// # _imgStep03
        this._imgStep03 = new ccui.ImageView();
        this._imgStep03.setName("_imgStep03");
        this._step03.addChild(this._imgStep03);
        this._imgStep03.setCascadeOpacityEnabled(true);
        this._imgStep03.setCascadeColorEnabled(true);
        this._imgStep03.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgStep03.setPosition(0.0001, -1.7498);
        this._imgStep03.setScale(0.9, 0.9);
        let _imgStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep03);
        this._imgStep03.loadTexture("league/Tutorial_03.png", 1);
        this._imgStep03.setUnifySizeEnabled(false);
        this._imgStep03.ignoreContentAdaptWithSize(false);
        this._imgStep03.setContentSize(cc.size(359, 362));
        this._imgStep03.setTouchEnabled(false);

        ///// # _imgCallout03
        this._imgCallout03 = new ccui.ImageView();
        this._imgCallout03.setName("_imgCallout03");
        this._step03.addChild(this._imgCallout03);
        this._imgCallout03.setCascadeOpacityEnabled(true);
        this._imgCallout03.setCascadeColorEnabled(true);
        this._imgCallout03.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCallout03.setPosition(-29.2534, -204.4604);
        this._imgCallout03.setRotationX(180);
        this._imgCallout03.setRotationY(179.9948);
        let _imgCallout03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCallout03);
        this._imgCallout03.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgCallout03.setUnifySizeEnabled(false);
        this._imgCallout03.ignoreContentAdaptWithSize(false);
        this._imgCallout03.setScale9Enabled(true);
        this._imgCallout03.setCapInsets(cc.rect(47, 31, 14, 67));
        this._imgCallout03.setContentSize(cc.size(222.45, 128));
        this._imgCallout03.setTouchEnabled(false);

        ///// # _txtStep03
        this._txtStep03 = new ck.Text();
        this._txtStep03.setName("_txtStep03");
        this._step03.addChild(this._txtStep03);
        this._txtStep03.setCascadeOpacityEnabled(true);
        this._txtStep03.setCascadeColorEnabled(true);
        this._txtStep03.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtStep03.setPosition(-31.1467, -218.5149);
        let _txtStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep03);
        this._txtStep03.setTouchEnabled(false);
        this._txtStep03.setUnifySizeEnabled(false);
        this._txtStep03.ignoreContentAdaptWithSize(false);
        this._txtStep03.setContentSize(cc.size(206.3961, 89.0786));
        this._txtStep03.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtStep03.setDefaultFontSize(25);
        this._txtStep03.setTextHorizontalAlignment(1);
        this._txtStep03.setTextVerticalAlignment(1);

        ///// # _txtHint
        this._txtHint = new ck.CustomRichTextExtend(cc.size(265, 28));
        this._txtHint.setName("_txtHint");
        this._page1.addChild(this._txtHint);
        this._txtHint.setCascadeOpacityEnabled(true);
        this._txtHint.setCascadeColorEnabled(true);
        this._txtHint.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHint, 0.5093, 0.061);
        this._txtHint.setDefaultColor(cc.color(255, 255, 0, 255));
        let _txtHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHint);
        _txtHintLayoutComponent.setPositionPercentXEnabled(true);
        _txtHintLayoutComponent.setPositionPercentX(0.5093);
        _txtHintLayoutComponent.setPositionPercentYEnabled(true);
        _txtHintLayoutComponent.setPositionPercentY(0.061);
        this._txtHint.setTouchEnabled(false);
        this._txtHint.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtHint.setDefaultSize(25);
        this._txtHint.setDefaultAlignHorizontal(2);
        this._txtHint.setDefaultAlignVertical(5);

        ///// # _page2
        this._page2 = new ccui.Layout();
        this._page2.setName("_page2");
        this._pageView.addPage(this._page2);
        this._page2.setCascadeOpacityEnabled(true);
        this._page2.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._page2, 0.5, 0);
        let _page2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._page2);
        this._page2.setTouchEnabled(true);
        this._page2.setUnifySizeEnabled(false);
        this._page2.ignoreContentAdaptWithSize(false);
        this._page2.setContentSize(cc.size(640, 908.8));

        ///// # _txtTips
        this._txtTips = new ck.Text();
        this._txtTips.setName("_txtTips");
        this._page2.addChild(this._txtTips);
        this._txtTips.setCascadeOpacityEnabled(true);
        this._txtTips.setCascadeColorEnabled(true);
        this._txtTips.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTips, 0.04, 0.9581);
        this._txtTips.setTextColor(cc.color(176, 92, 18, 255));
        let _txtTipsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTips);
        _txtTipsLayoutComponent.setPositionPercentXEnabled(true);
        _txtTipsLayoutComponent.setPositionPercentX(0.04);
        _txtTipsLayoutComponent.setPositionPercentYEnabled(true);
        _txtTipsLayoutComponent.setPositionPercentY(0.9581);
        this._txtTips.setTouchEnabled(false);
        this._txtTips.setUnifySizeEnabled(false);
        this._txtTips.ignoreContentAdaptWithSize(false);
        this._txtTips.setContentSize(cc.size(318.7301, 33));
        this._txtTips.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTips.setDefaultFontSize(27);
        this._txtTips.setString(gm.localize.getText("TXT_MOVE_UP_THE_LEAGUE_TO_BECOME"));
        this._txtTips.setTextHorizontalAlignment(0);
        this._txtTips.setTextVerticalAlignment(1);
        this._txtTips.enableShadow(cc.color(32, 16, 16, 255), cc.size(0, -2), 0);

        ///// # _txtPistiMaster
        this._txtPistiMaster = new ck.Text();
        this._txtPistiMaster.setName("_txtPistiMaster");
        this._page2.addChild(this._txtPistiMaster);
        this._txtPistiMaster.setCascadeOpacityEnabled(true);
        this._txtPistiMaster.setCascadeColorEnabled(true);
        this._txtPistiMaster.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPistiMaster, 0.04, 0.907);
        this._txtPistiMaster.setTextColor(cc.color(252, 213, 59, 255));
        let _txtPistiMasterLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPistiMaster);
        _txtPistiMasterLayoutComponent.setPositionPercentXEnabled(true);
        _txtPistiMasterLayoutComponent.setPositionPercentX(0.04);
        _txtPistiMasterLayoutComponent.setPositionPercentYEnabled(true);
        _txtPistiMasterLayoutComponent.setPositionPercentY(0.907);
        this._txtPistiMaster.setTouchEnabled(false);
        this._txtPistiMaster.setUnifySizeEnabled(false);
        this._txtPistiMaster.ignoreContentAdaptWithSize(false);
        this._txtPistiMaster.setContentSize(cc.size(318.1663, 56));
        this._txtPistiMaster.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtPistiMaster.setDefaultFontSize(50);
        this._txtPistiMaster.setString(gm.localize.getText("TXT_PISTI_MASTER"));
        this._txtPistiMaster.setTextHorizontalAlignment(0);
        this._txtPistiMaster.setTextVerticalAlignment(1);
        this._txtPistiMaster.enableShadow(cc.color(32, 16, 16, 255), cc.size(0, -2), 0);

        ///// # league_7
        this.league_7 = new cc.Sprite();
        this.league_7.setName("league_7");
        this._page2.addChild(this.league_7);
        this.league_7.setCascadeOpacityEnabled(true);
        this.league_7.setCascadeColorEnabled(true);
        this.league_7.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this.league_7, 0.7961, -0.1354);
        let league_7LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_7);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Pile_04.png"); if (sf) this.league_7.setSpriteFrame(sf);
        let league_7BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_7BlendFunc.src = 1;
        league_7BlendFunc.dst = 771;
        this.league_7.setBlendFunc(league_7BlendFunc);

        ///// # Image_5_0_0_0_0_0_0
        this.Image_5_0_0_0_0_0_0 = new ccui.ImageView();
        this.Image_5_0_0_0_0_0_0.setName("Image_5_0_0_0_0_0_0");
        this.league_7.addChild(this.Image_5_0_0_0_0_0_0);
        this.Image_5_0_0_0_0_0_0.setCascadeOpacityEnabled(true);
        this.Image_5_0_0_0_0_0_0.setCascadeColorEnabled(true);
        this.Image_5_0_0_0_0_0_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.Image_5_0_0_0_0_0_0, 0.5279, 1.1449);
        let Image_5_0_0_0_0_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.Image_5_0_0_0_0_0_0);
        this.Image_5_0_0_0_0_0_0.loadTexture("league/league_7.png", 1);
        this.Image_5_0_0_0_0_0_0.setUnifySizeEnabled(false);
        this.Image_5_0_0_0_0_0_0.ignoreContentAdaptWithSize(false);
        this.Image_5_0_0_0_0_0_0.setContentSize(cc.size(246, 250));
        this.Image_5_0_0_0_0_0_0.setTouchEnabled(false);

        ///// # _txtName7
        this._txtName7 = new ck.Text();
        this._txtName7.setName("_txtName7");
        this.league_7.addChild(this._txtName7);
        this._txtName7.setCascadeOpacityEnabled(true);
        this._txtName7.setCascadeColorEnabled(true);
        this._txtName7.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName7, 0.5, 0.875);
        this._txtName7.setTextColor(cc.color(44, 243, 236, 255));
        let _txtName7LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName7);
        _txtName7LayoutComponent.setPositionPercentXEnabled(true);
        _txtName7LayoutComponent.setPositionPercentX(0.5);
        _txtName7LayoutComponent.setPositionPercentYEnabled(true);
        _txtName7LayoutComponent.setPositionPercentY(0.875);
        this._txtName7.setTouchEnabled(false);
        this._txtName7.setUnifySizeEnabled(false);
        this._txtName7.ignoreContentAdaptWithSize(false);
        this._txtName7.setContentSize(cc.size(194.3312, 33));
        this._txtName7.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName7.setDefaultFontSize(40);
        this._txtName7.setString(gm.localize.getText("TXT_DIAMOND"));
        this._txtName7.setTextHorizontalAlignment(1);
        this._txtName7.setTextVerticalAlignment(1);
        this._txtName7.enableShadow(cc.color(32, 16, 16, 255), cc.size(0, -2), 0);

        ///// # panelStar_7
        this.panelStar_7 = new ccui.Layout();
        this.panelStar_7.setName("panelStar_7");
        this.league_7.addChild(this.panelStar_7);
        this.panelStar_7.setCascadeOpacityEnabled(true);
        this.panelStar_7.setCascadeColorEnabled(true);
        this.panelStar_7.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.panelStar_7, 0.5, 0.9514);
        let panelStar_7LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.panelStar_7);
        panelStar_7LayoutComponent.setPositionPercentXEnabled(true);
        panelStar_7LayoutComponent.setPositionPercentX(0.5);
        panelStar_7LayoutComponent.setPositionPercentYEnabled(true);
        panelStar_7LayoutComponent.setPositionPercentY(0.9514);
        this.panelStar_7.setTouchEnabled(true);
        this.panelStar_7.setUnifySizeEnabled(false);
        this.panelStar_7.ignoreContentAdaptWithSize(false);
        this.panelStar_7.setContentSize(cc.size(141.1205, 50));

        ///// # league_Star_10
        this.league_Star_10 = new cc.Sprite();
        this.league_Star_10.setName("league_Star_10");
        this.panelStar_7.addChild(this.league_Star_10);
        this.league_Star_10.setCascadeOpacityEnabled(true);
        this.league_Star_10.setCascadeColorEnabled(true);
        this.league_Star_10.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.league_Star_10, 0.2567, 0.5168);
        let league_Star_10LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_Star_10);
        league_Star_10LayoutComponent.setPositionPercentXEnabled(true);
        league_Star_10LayoutComponent.setPositionPercentX(0.2567);
        league_Star_10LayoutComponent.setPositionPercentYEnabled(true);
        league_Star_10LayoutComponent.setPositionPercentY(0.5168);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Star.png"); if (sf) this.league_Star_10.setSpriteFrame(sf);
        let league_Star_10BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_Star_10BlendFunc.src = 1;
        league_Star_10BlendFunc.dst = 771;
        this.league_Star_10.setBlendFunc(league_Star_10BlendFunc);

        ///// # league_Star_10_0
        this.league_Star_10_0 = new cc.Sprite();
        this.league_Star_10_0.setName("league_Star_10_0");
        this.panelStar_7.addChild(this.league_Star_10_0);
        this.league_Star_10_0.setCascadeOpacityEnabled(true);
        this.league_Star_10_0.setCascadeColorEnabled(true);
        this.league_Star_10_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.league_Star_10_0, 0.4978, 0.5168);
        let league_Star_10_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_Star_10_0);
        league_Star_10_0LayoutComponent.setPositionPercentXEnabled(true);
        league_Star_10_0LayoutComponent.setPositionPercentX(0.4978);
        league_Star_10_0LayoutComponent.setPositionPercentYEnabled(true);
        league_Star_10_0LayoutComponent.setPositionPercentY(0.5168);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Star.png"); if (sf) this.league_Star_10_0.setSpriteFrame(sf);
        let league_Star_10_0BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_Star_10_0BlendFunc.src = 1;
        league_Star_10_0BlendFunc.dst = 771;
        this.league_Star_10_0.setBlendFunc(league_Star_10_0BlendFunc);

        ///// # league_Star_10_0_0
        this.league_Star_10_0_0 = new cc.Sprite();
        this.league_Star_10_0_0.setName("league_Star_10_0_0");
        this.panelStar_7.addChild(this.league_Star_10_0_0);
        this.league_Star_10_0_0.setCascadeOpacityEnabled(true);
        this.league_Star_10_0_0.setCascadeColorEnabled(true);
        this.league_Star_10_0_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.league_Star_10_0_0, 0.739, 0.5168);
        let league_Star_10_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_Star_10_0_0);
        league_Star_10_0_0LayoutComponent.setPositionPercentXEnabled(true);
        league_Star_10_0_0LayoutComponent.setPositionPercentX(0.739);
        league_Star_10_0_0LayoutComponent.setPositionPercentYEnabled(true);
        league_Star_10_0_0LayoutComponent.setPositionPercentY(0.5168);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Star.png"); if (sf) this.league_Star_10_0_0.setSpriteFrame(sf);
        let league_Star_10_0_0BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_Star_10_0_0BlendFunc.src = 1;
        league_Star_10_0_0BlendFunc.dst = 771;
        this.league_Star_10_0_0.setBlendFunc(league_Star_10_0_0BlendFunc);

        ///// # league_6
        this.league_6 = new cc.Sprite();
        this.league_6.setName("league_6");
        this._page2.addChild(this.league_6);
        this.league_6.setCascadeOpacityEnabled(true);
        this.league_6.setCascadeColorEnabled(true);
        this.league_6.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this.league_6, 0.4851, -0.1369);
        let league_6LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_6);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Pile_03.png"); if (sf) this.league_6.setSpriteFrame(sf);
        let league_6BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_6BlendFunc.src = 1;
        league_6BlendFunc.dst = 771;
        this.league_6.setBlendFunc(league_6BlendFunc);

        ///// # panelStar_6
        this.panelStar_6 = new ccui.Layout();
        this.panelStar_6.setName("panelStar_6");
        this.league_6.addChild(this.panelStar_6);
        this.panelStar_6.setCascadeOpacityEnabled(true);
        this.panelStar_6.setCascadeColorEnabled(true);
        this.panelStar_6.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.panelStar_6, 0.5, 0.9458);
        let panelStar_6LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.panelStar_6);
        panelStar_6LayoutComponent.setPositionPercentXEnabled(true);
        panelStar_6LayoutComponent.setPositionPercentX(0.5);
        panelStar_6LayoutComponent.setPositionPercentYEnabled(true);
        panelStar_6LayoutComponent.setPositionPercentY(0.9458);
        this.panelStar_6.setTouchEnabled(true);
        this.panelStar_6.setUnifySizeEnabled(false);
        this.panelStar_6.ignoreContentAdaptWithSize(false);
        this.panelStar_6.setContentSize(cc.size(141.1205, 50));

        ///// # league_Star_10
        this.league_Star_10 = new cc.Sprite();
        this.league_Star_10.setName("league_Star_10");
        this.panelStar_6.addChild(this.league_Star_10);
        this.league_Star_10.setCascadeOpacityEnabled(true);
        this.league_Star_10.setCascadeColorEnabled(true);
        this.league_Star_10.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.league_Star_10, 0.2567, 0.5168);
        let league_Star_10LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_Star_10);
        league_Star_10LayoutComponent.setPositionPercentXEnabled(true);
        league_Star_10LayoutComponent.setPositionPercentX(0.2567);
        league_Star_10LayoutComponent.setPositionPercentYEnabled(true);
        league_Star_10LayoutComponent.setPositionPercentY(0.5168);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Star.png"); if (sf) this.league_Star_10.setSpriteFrame(sf);
        let league_Star_10BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_Star_10BlendFunc.src = 1;
        league_Star_10BlendFunc.dst = 771;
        this.league_Star_10.setBlendFunc(league_Star_10BlendFunc);

        ///// # league_Star_10_0
        this.league_Star_10_0 = new cc.Sprite();
        this.league_Star_10_0.setName("league_Star_10_0");
        this.panelStar_6.addChild(this.league_Star_10_0);
        this.league_Star_10_0.setCascadeOpacityEnabled(true);
        this.league_Star_10_0.setCascadeColorEnabled(true);
        this.league_Star_10_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.league_Star_10_0, 0.4978, 0.5168);
        let league_Star_10_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_Star_10_0);
        league_Star_10_0LayoutComponent.setPositionPercentXEnabled(true);
        league_Star_10_0LayoutComponent.setPositionPercentX(0.4978);
        league_Star_10_0LayoutComponent.setPositionPercentYEnabled(true);
        league_Star_10_0LayoutComponent.setPositionPercentY(0.5168);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Star.png"); if (sf) this.league_Star_10_0.setSpriteFrame(sf);
        let league_Star_10_0BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_Star_10_0BlendFunc.src = 1;
        league_Star_10_0BlendFunc.dst = 771;
        this.league_Star_10_0.setBlendFunc(league_Star_10_0BlendFunc);

        ///// # league_Star_10_0_0
        this.league_Star_10_0_0 = new cc.Sprite();
        this.league_Star_10_0_0.setName("league_Star_10_0_0");
        this.panelStar_6.addChild(this.league_Star_10_0_0);
        this.league_Star_10_0_0.setCascadeOpacityEnabled(true);
        this.league_Star_10_0_0.setCascadeColorEnabled(true);
        this.league_Star_10_0_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.league_Star_10_0_0, 0.739, 0.5168);
        let league_Star_10_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_Star_10_0_0);
        league_Star_10_0_0LayoutComponent.setPositionPercentXEnabled(true);
        league_Star_10_0_0LayoutComponent.setPositionPercentX(0.739);
        league_Star_10_0_0LayoutComponent.setPositionPercentYEnabled(true);
        league_Star_10_0_0LayoutComponent.setPositionPercentY(0.5168);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Star.png"); if (sf) this.league_Star_10_0_0.setSpriteFrame(sf);
        let league_Star_10_0_0BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_Star_10_0_0BlendFunc.src = 1;
        league_Star_10_0_0BlendFunc.dst = 771;
        this.league_Star_10_0_0.setBlendFunc(league_Star_10_0_0BlendFunc);

        ///// # _txtName6
        this._txtName6 = new ck.Text();
        this._txtName6.setName("_txtName6");
        this.league_6.addChild(this._txtName6);
        this._txtName6.setCascadeOpacityEnabled(true);
        this._txtName6.setCascadeColorEnabled(true);
        this._txtName6.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName6, 0.5, 0.8544);
        this._txtName6.setTextColor(cc.color(44, 243, 236, 255));
        let _txtName6LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName6);
        _txtName6LayoutComponent.setPositionPercentXEnabled(true);
        _txtName6LayoutComponent.setPositionPercentX(0.5);
        _txtName6LayoutComponent.setPositionPercentYEnabled(true);
        _txtName6LayoutComponent.setPositionPercentY(0.8544);
        this._txtName6.setTouchEnabled(false);
        this._txtName6.setUnifySizeEnabled(false);
        this._txtName6.ignoreContentAdaptWithSize(false);
        this._txtName6.setContentSize(cc.size(171.4506, 33));
        this._txtName6.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName6.setDefaultFontSize(40);
        this._txtName6.setString(gm.localize.getText("TXT_PLATINUM"));
        this._txtName6.setTextHorizontalAlignment(1);
        this._txtName6.setTextVerticalAlignment(1);
        this._txtName6.enableShadow(cc.color(32, 16, 16, 255), cc.size(0, -2), 0);

        ///// # Image_5_0_0_0_0_0
        this.Image_5_0_0_0_0_0 = new ccui.ImageView();
        this.Image_5_0_0_0_0_0.setName("Image_5_0_0_0_0_0");
        this.league_6.addChild(this.Image_5_0_0_0_0_0);
        this.Image_5_0_0_0_0_0.setCascadeOpacityEnabled(true);
        this.Image_5_0_0_0_0_0.setCascadeColorEnabled(true);
        this.Image_5_0_0_0_0_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.Image_5_0_0_0_0_0, 0.4896, 1.1453);
        let Image_5_0_0_0_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.Image_5_0_0_0_0_0);
        this.Image_5_0_0_0_0_0.loadTexture("league/league_6.png", 1);
        this.Image_5_0_0_0_0_0.setUnifySizeEnabled(false);
        this.Image_5_0_0_0_0_0.ignoreContentAdaptWithSize(false);
        this.Image_5_0_0_0_0_0.setContentSize(cc.size(226, 231));
        this.Image_5_0_0_0_0_0.setTouchEnabled(false);

        ///// # league_5
        this.league_5 = new cc.Sprite();
        this.league_5.setName("league_5");
        this._page2.addChild(this.league_5);
        this.league_5.setCascadeOpacityEnabled(true);
        this.league_5.setCascadeColorEnabled(true);
        this.league_5.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this.league_5, 0.168, -0.1347);
        let league_5LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_5);
        league_5LayoutComponent.setPositionPercentXEnabled(true);
        league_5LayoutComponent.setPositionPercentX(0.168);
        league_5LayoutComponent.setPositionPercentYEnabled(true);
        league_5LayoutComponent.setPositionPercentY(-0.1347);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Pile_02.png"); if (sf) this.league_5.setSpriteFrame(sf);
        let league_5BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_5BlendFunc.src = 1;
        league_5BlendFunc.dst = 771;
        this.league_5.setBlendFunc(league_5BlendFunc);

        ///// # panelStar_5
        this.panelStar_5 = new ccui.Layout();
        this.panelStar_5.setName("panelStar_5");
        this.league_5.addChild(this.panelStar_5);
        this.panelStar_5.setCascadeOpacityEnabled(true);
        this.panelStar_5.setCascadeColorEnabled(true);
        this.panelStar_5.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.panelStar_5, 0.5, 0.935);
        let panelStar_5LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.panelStar_5);
        panelStar_5LayoutComponent.setPositionPercentXEnabled(true);
        panelStar_5LayoutComponent.setPositionPercentX(0.5);
        panelStar_5LayoutComponent.setPositionPercentYEnabled(true);
        panelStar_5LayoutComponent.setPositionPercentY(0.935);
        this.panelStar_5.setTouchEnabled(true);
        this.panelStar_5.setUnifySizeEnabled(false);
        this.panelStar_5.ignoreContentAdaptWithSize(false);
        this.panelStar_5.setContentSize(cc.size(141.1205, 50));

        ///// # league_Star_10
        this.league_Star_10 = new cc.Sprite();
        this.league_Star_10.setName("league_Star_10");
        this.panelStar_5.addChild(this.league_Star_10);
        this.league_Star_10.setCascadeOpacityEnabled(true);
        this.league_Star_10.setCascadeColorEnabled(true);
        this.league_Star_10.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.league_Star_10, 0.2567, 0.5168);
        let league_Star_10LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_Star_10);
        league_Star_10LayoutComponent.setPositionPercentXEnabled(true);
        league_Star_10LayoutComponent.setPositionPercentX(0.2567);
        league_Star_10LayoutComponent.setPositionPercentYEnabled(true);
        league_Star_10LayoutComponent.setPositionPercentY(0.5168);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Star.png"); if (sf) this.league_Star_10.setSpriteFrame(sf);
        let league_Star_10BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_Star_10BlendFunc.src = 1;
        league_Star_10BlendFunc.dst = 771;
        this.league_Star_10.setBlendFunc(league_Star_10BlendFunc);

        ///// # league_Star_10_0
        this.league_Star_10_0 = new cc.Sprite();
        this.league_Star_10_0.setName("league_Star_10_0");
        this.panelStar_5.addChild(this.league_Star_10_0);
        this.league_Star_10_0.setCascadeOpacityEnabled(true);
        this.league_Star_10_0.setCascadeColorEnabled(true);
        this.league_Star_10_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.league_Star_10_0, 0.4978, 0.5168);
        let league_Star_10_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_Star_10_0);
        league_Star_10_0LayoutComponent.setPositionPercentXEnabled(true);
        league_Star_10_0LayoutComponent.setPositionPercentX(0.4978);
        league_Star_10_0LayoutComponent.setPositionPercentYEnabled(true);
        league_Star_10_0LayoutComponent.setPositionPercentY(0.5168);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Star.png"); if (sf) this.league_Star_10_0.setSpriteFrame(sf);
        let league_Star_10_0BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_Star_10_0BlendFunc.src = 1;
        league_Star_10_0BlendFunc.dst = 771;
        this.league_Star_10_0.setBlendFunc(league_Star_10_0BlendFunc);

        ///// # league_Star_10_0_0
        this.league_Star_10_0_0 = new cc.Sprite();
        this.league_Star_10_0_0.setName("league_Star_10_0_0");
        this.panelStar_5.addChild(this.league_Star_10_0_0);
        this.league_Star_10_0_0.setCascadeOpacityEnabled(true);
        this.league_Star_10_0_0.setCascadeColorEnabled(true);
        this.league_Star_10_0_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.league_Star_10_0_0, 0.739, 0.5168);
        let league_Star_10_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_Star_10_0_0);
        league_Star_10_0_0LayoutComponent.setPositionPercentXEnabled(true);
        league_Star_10_0_0LayoutComponent.setPositionPercentX(0.739);
        league_Star_10_0_0LayoutComponent.setPositionPercentYEnabled(true);
        league_Star_10_0_0LayoutComponent.setPositionPercentY(0.5168);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Star.png"); if (sf) this.league_Star_10_0_0.setSpriteFrame(sf);
        let league_Star_10_0_0BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_Star_10_0_0BlendFunc.src = 1;
        league_Star_10_0_0BlendFunc.dst = 771;
        this.league_Star_10_0_0.setBlendFunc(league_Star_10_0_0BlendFunc);

        ///// # Image_5_0_0_0_0
        this.Image_5_0_0_0_0 = new ccui.ImageView();
        this.Image_5_0_0_0_0.setName("Image_5_0_0_0_0");
        this.league_5.addChild(this.Image_5_0_0_0_0);
        this.Image_5_0_0_0_0.setCascadeOpacityEnabled(true);
        this.Image_5_0_0_0_0.setCascadeColorEnabled(true);
        this.Image_5_0_0_0_0.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this.Image_5_0_0_0_0, 0.5053, 0.9766);
        let Image_5_0_0_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.Image_5_0_0_0_0);
        Image_5_0_0_0_0LayoutComponent.setPositionPercentXEnabled(true);
        Image_5_0_0_0_0LayoutComponent.setPositionPercentX(0.5053);
        Image_5_0_0_0_0LayoutComponent.setPositionPercentYEnabled(true);
        Image_5_0_0_0_0LayoutComponent.setPositionPercentY(0.9766);
        this.Image_5_0_0_0_0.loadTexture("league/league_5.png", 1);
        this.Image_5_0_0_0_0.setUnifySizeEnabled(false);
        this.Image_5_0_0_0_0.ignoreContentAdaptWithSize(false);
        this.Image_5_0_0_0_0.setContentSize(cc.size(219, 207));
        this.Image_5_0_0_0_0.setTouchEnabled(false);

        ///// # _txtName5
        this._txtName5 = new ck.Text();
        this._txtName5.setName("_txtName5");
        this.league_5.addChild(this._txtName5);
        this._txtName5.setCascadeOpacityEnabled(true);
        this._txtName5.setCascadeColorEnabled(true);
        this._txtName5.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName5, 0.5, 0.8384);
        this._txtName5.setTextColor(cc.color(235, 198, 49, 255));
        let _txtName5LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName5);
        _txtName5LayoutComponent.setPositionPercentXEnabled(true);
        _txtName5LayoutComponent.setPositionPercentX(0.5);
        _txtName5LayoutComponent.setPositionPercentYEnabled(true);
        _txtName5LayoutComponent.setPositionPercentY(0.8384);
        this._txtName5.setTouchEnabled(false);
        this._txtName5.setUnifySizeEnabled(false);
        this._txtName5.ignoreContentAdaptWithSize(false);
        this._txtName5.setContentSize(cc.size(153.6541, 33));
        this._txtName5.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName5.setDefaultFontSize(40);
        this._txtName5.setString(gm.localize.getText("TXT_GOLD"));
        this._txtName5.setTextHorizontalAlignment(1);
        this._txtName5.setTextVerticalAlignment(1);
        this._txtName5.enableShadow(cc.color(32, 16, 16, 255), cc.size(0, -2), 0);

        ///// # league_1
        this.league_1 = new cc.Sprite();
        this.league_1.setName("league_1");
        this._page2.addChild(this.league_1);
        this.league_1.setCascadeOpacityEnabled(true);
        this.league_1.setCascadeColorEnabled(true);
        this.league_1.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this.league_1, 0.1354, -0.4389);
        let league_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_1);
        league_1LayoutComponent.setPositionPercentXEnabled(true);
        league_1LayoutComponent.setPositionPercentX(0.1354);
        league_1LayoutComponent.setPositionPercentYEnabled(true);
        league_1LayoutComponent.setPositionPercentY(-0.4389);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Pile_01.png"); if (sf) this.league_1.setSpriteFrame(sf);
        let league_1BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_1BlendFunc.src = 1;
        league_1BlendFunc.dst = 771;
        this.league_1.setBlendFunc(league_1BlendFunc);

        ///// # panelStar_1
        this.panelStar_1 = new ccui.Layout();
        this.panelStar_1.setName("panelStar_1");
        this.league_1.addChild(this.panelStar_1);
        this.panelStar_1.setCascadeOpacityEnabled(true);
        this.panelStar_1.setCascadeColorEnabled(true);
        this.panelStar_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.panelStar_1, 0.5, 0.944);
        let panelStar_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.panelStar_1);
        panelStar_1LayoutComponent.setPositionPercentXEnabled(true);
        panelStar_1LayoutComponent.setPositionPercentX(0.5);
        panelStar_1LayoutComponent.setPositionPercentYEnabled(true);
        panelStar_1LayoutComponent.setPositionPercentY(0.944);
        this.panelStar_1.setTouchEnabled(true);
        this.panelStar_1.setUnifySizeEnabled(false);
        this.panelStar_1.ignoreContentAdaptWithSize(false);
        this.panelStar_1.setContentSize(cc.size(141.1205, 50));

        ///// # league_Star_10
        this.league_Star_10 = new cc.Sprite();
        this.league_Star_10.setName("league_Star_10");
        this.panelStar_1.addChild(this.league_Star_10);
        this.league_Star_10.setCascadeOpacityEnabled(true);
        this.league_Star_10.setCascadeColorEnabled(true);
        this.league_Star_10.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.league_Star_10, 0.2567, 0.5168);
        let league_Star_10LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_Star_10);
        league_Star_10LayoutComponent.setPositionPercentXEnabled(true);
        league_Star_10LayoutComponent.setPositionPercentX(0.2567);
        league_Star_10LayoutComponent.setPositionPercentYEnabled(true);
        league_Star_10LayoutComponent.setPositionPercentY(0.5168);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Star.png"); if (sf) this.league_Star_10.setSpriteFrame(sf);
        let league_Star_10BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_Star_10BlendFunc.src = 1;
        league_Star_10BlendFunc.dst = 771;
        this.league_Star_10.setBlendFunc(league_Star_10BlendFunc);

        ///// # league_Star_10_0
        this.league_Star_10_0 = new cc.Sprite();
        this.league_Star_10_0.setName("league_Star_10_0");
        this.panelStar_1.addChild(this.league_Star_10_0);
        this.league_Star_10_0.setCascadeOpacityEnabled(true);
        this.league_Star_10_0.setCascadeColorEnabled(true);
        this.league_Star_10_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.league_Star_10_0, 0.4978, 0.5168);
        let league_Star_10_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_Star_10_0);
        league_Star_10_0LayoutComponent.setPositionPercentXEnabled(true);
        league_Star_10_0LayoutComponent.setPositionPercentX(0.4978);
        league_Star_10_0LayoutComponent.setPositionPercentYEnabled(true);
        league_Star_10_0LayoutComponent.setPositionPercentY(0.5168);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Star.png"); if (sf) this.league_Star_10_0.setSpriteFrame(sf);
        let league_Star_10_0BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_Star_10_0BlendFunc.src = 1;
        league_Star_10_0BlendFunc.dst = 771;
        this.league_Star_10_0.setBlendFunc(league_Star_10_0BlendFunc);

        ///// # league_Star_10_0_0
        this.league_Star_10_0_0 = new cc.Sprite();
        this.league_Star_10_0_0.setName("league_Star_10_0_0");
        this.panelStar_1.addChild(this.league_Star_10_0_0);
        this.league_Star_10_0_0.setCascadeOpacityEnabled(true);
        this.league_Star_10_0_0.setCascadeColorEnabled(true);
        this.league_Star_10_0_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.league_Star_10_0_0, 0.739, 0.5168);
        let league_Star_10_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_Star_10_0_0);
        league_Star_10_0_0LayoutComponent.setPositionPercentXEnabled(true);
        league_Star_10_0_0LayoutComponent.setPositionPercentX(0.739);
        league_Star_10_0_0LayoutComponent.setPositionPercentYEnabled(true);
        league_Star_10_0_0LayoutComponent.setPositionPercentY(0.5168);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Star.png"); if (sf) this.league_Star_10_0_0.setSpriteFrame(sf);
        let league_Star_10_0_0BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_Star_10_0_0BlendFunc.src = 1;
        league_Star_10_0_0BlendFunc.dst = 771;
        this.league_Star_10_0_0.setBlendFunc(league_Star_10_0_0BlendFunc);

        ///// # Image_5
        this.Image_5 = new ccui.ImageView();
        this.Image_5.setName("Image_5");
        this.league_1.addChild(this.Image_5);
        this.Image_5.setCascadeOpacityEnabled(true);
        this.Image_5.setCascadeColorEnabled(true);
        this.Image_5.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this.Image_5, 0.5, 1);
        let Image_5LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.Image_5);
        Image_5LayoutComponent.setPositionPercentXEnabled(true);
        Image_5LayoutComponent.setPositionPercentX(0.5);
        Image_5LayoutComponent.setPositionPercentYEnabled(true);
        Image_5LayoutComponent.setPositionPercentY(1);
        this.Image_5.loadTexture("league/league_1.png", 1);
        this.Image_5.setUnifySizeEnabled(false);
        this.Image_5.ignoreContentAdaptWithSize(false);
        this.Image_5.setContentSize(cc.size(155, 151));
        this.Image_5.setTouchEnabled(false);

        ///// # _txtName1
        this._txtName1 = new ck.Text();
        this._txtName1.setName("_txtName1");
        this.league_1.addChild(this._txtName1);
        this._txtName1.setCascadeOpacityEnabled(true);
        this._txtName1.setCascadeColorEnabled(true);
        this._txtName1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName1, 0.5, 0.84);
        this._txtName1.setTextColor(cc.color(150, 154, 165, 255));
        let _txtName1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName1);
        _txtName1LayoutComponent.setPositionPercentXEnabled(true);
        _txtName1LayoutComponent.setPositionPercentX(0.5);
        _txtName1LayoutComponent.setPositionPercentYEnabled(true);
        _txtName1LayoutComponent.setPositionPercentY(0.84);
        this._txtName1.setTouchEnabled(false);
        this._txtName1.setUnifySizeEnabled(false);
        this._txtName1.ignoreContentAdaptWithSize(false);
        this._txtName1.setContentSize(cc.size(172.256, 33));
        this._txtName1.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName1.setDefaultFontSize(40);
        this._txtName1.setString(gm.localize.getText("TXT_WOOD"));
        this._txtName1.setTextHorizontalAlignment(1);
        this._txtName1.setTextVerticalAlignment(1);
        this._txtName1.enableShadow(cc.color(32, 16, 16, 255), cc.size(0, -2), 0);

        ///// # league_2
        this.league_2 = new cc.Sprite();
        this.league_2.setName("league_2");
        this._page2.addChild(this.league_2);
        this.league_2.setCascadeOpacityEnabled(true);
        this.league_2.setCascadeColorEnabled(true);
        this.league_2.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this.league_2, 0.3615, -0.3547);
        let league_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_2);
        league_2LayoutComponent.setPositionPercentXEnabled(true);
        league_2LayoutComponent.setPositionPercentX(0.3615);
        league_2LayoutComponent.setPositionPercentYEnabled(true);
        league_2LayoutComponent.setPositionPercentY(-0.3547);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Pile_01.png"); if (sf) this.league_2.setSpriteFrame(sf);
        let league_2BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_2BlendFunc.src = 1;
        league_2BlendFunc.dst = 771;
        this.league_2.setBlendFunc(league_2BlendFunc);

        ///// # panelStar_2
        this.panelStar_2 = new ccui.Layout();
        this.panelStar_2.setName("panelStar_2");
        this.league_2.addChild(this.panelStar_2);
        this.panelStar_2.setCascadeOpacityEnabled(true);
        this.panelStar_2.setCascadeColorEnabled(true);
        this.panelStar_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.panelStar_2, 0.5, 0.94);
        let panelStar_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.panelStar_2);
        panelStar_2LayoutComponent.setPositionPercentXEnabled(true);
        panelStar_2LayoutComponent.setPositionPercentX(0.5);
        panelStar_2LayoutComponent.setPositionPercentYEnabled(true);
        panelStar_2LayoutComponent.setPositionPercentY(0.94);
        this.panelStar_2.setTouchEnabled(true);
        this.panelStar_2.setUnifySizeEnabled(false);
        this.panelStar_2.ignoreContentAdaptWithSize(false);
        this.panelStar_2.setContentSize(cc.size(141.1205, 50));

        ///// # league_Star_10
        this.league_Star_10 = new cc.Sprite();
        this.league_Star_10.setName("league_Star_10");
        this.panelStar_2.addChild(this.league_Star_10);
        this.league_Star_10.setCascadeOpacityEnabled(true);
        this.league_Star_10.setCascadeColorEnabled(true);
        this.league_Star_10.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.league_Star_10, 0.2567, 0.5168);
        let league_Star_10LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_Star_10);
        league_Star_10LayoutComponent.setPositionPercentXEnabled(true);
        league_Star_10LayoutComponent.setPositionPercentX(0.2567);
        league_Star_10LayoutComponent.setPositionPercentYEnabled(true);
        league_Star_10LayoutComponent.setPositionPercentY(0.5168);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Star.png"); if (sf) this.league_Star_10.setSpriteFrame(sf);
        let league_Star_10BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_Star_10BlendFunc.src = 1;
        league_Star_10BlendFunc.dst = 771;
        this.league_Star_10.setBlendFunc(league_Star_10BlendFunc);

        ///// # league_Star_10_0
        this.league_Star_10_0 = new cc.Sprite();
        this.league_Star_10_0.setName("league_Star_10_0");
        this.panelStar_2.addChild(this.league_Star_10_0);
        this.league_Star_10_0.setCascadeOpacityEnabled(true);
        this.league_Star_10_0.setCascadeColorEnabled(true);
        this.league_Star_10_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.league_Star_10_0, 0.4978, 0.5168);
        let league_Star_10_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_Star_10_0);
        league_Star_10_0LayoutComponent.setPositionPercentXEnabled(true);
        league_Star_10_0LayoutComponent.setPositionPercentX(0.4978);
        league_Star_10_0LayoutComponent.setPositionPercentYEnabled(true);
        league_Star_10_0LayoutComponent.setPositionPercentY(0.5168);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Star.png"); if (sf) this.league_Star_10_0.setSpriteFrame(sf);
        let league_Star_10_0BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_Star_10_0BlendFunc.src = 1;
        league_Star_10_0BlendFunc.dst = 771;
        this.league_Star_10_0.setBlendFunc(league_Star_10_0BlendFunc);

        ///// # league_Star_10_0_0
        this.league_Star_10_0_0 = new cc.Sprite();
        this.league_Star_10_0_0.setName("league_Star_10_0_0");
        this.panelStar_2.addChild(this.league_Star_10_0_0);
        this.league_Star_10_0_0.setCascadeOpacityEnabled(true);
        this.league_Star_10_0_0.setCascadeColorEnabled(true);
        this.league_Star_10_0_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.league_Star_10_0_0, 0.739, 0.5168);
        let league_Star_10_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_Star_10_0_0);
        league_Star_10_0_0LayoutComponent.setPositionPercentXEnabled(true);
        league_Star_10_0_0LayoutComponent.setPositionPercentX(0.739);
        league_Star_10_0_0LayoutComponent.setPositionPercentYEnabled(true);
        league_Star_10_0_0LayoutComponent.setPositionPercentY(0.5168);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Star.png"); if (sf) this.league_Star_10_0_0.setSpriteFrame(sf);
        let league_Star_10_0_0BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_Star_10_0_0BlendFunc.src = 1;
        league_Star_10_0_0BlendFunc.dst = 771;
        this.league_Star_10_0_0.setBlendFunc(league_Star_10_0_0BlendFunc);

        ///// # Image_5_0
        this.Image_5_0 = new ccui.ImageView();
        this.Image_5_0.setName("Image_5_0");
        this.league_2.addChild(this.Image_5_0);
        this.Image_5_0.setCascadeOpacityEnabled(true);
        this.Image_5_0.setCascadeColorEnabled(true);
        this.Image_5_0.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this.Image_5_0, 0.4797, 0.9762);
        let Image_5_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.Image_5_0);
        Image_5_0LayoutComponent.setPositionPercentXEnabled(true);
        Image_5_0LayoutComponent.setPositionPercentX(0.4797);
        Image_5_0LayoutComponent.setPositionPercentYEnabled(true);
        Image_5_0LayoutComponent.setPositionPercentY(0.9762);
        this.Image_5_0.loadTexture("league/league_2.png", 1);
        this.Image_5_0.setUnifySizeEnabled(false);
        this.Image_5_0.ignoreContentAdaptWithSize(false);
        this.Image_5_0.setContentSize(cc.size(176, 179));
        this.Image_5_0.setTouchEnabled(false);

        ///// # _txtName2
        this._txtName2 = new ck.Text();
        this._txtName2.setName("_txtName2");
        this.league_2.addChild(this._txtName2);
        this._txtName2.setCascadeOpacityEnabled(true);
        this._txtName2.setCascadeColorEnabled(true);
        this._txtName2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName2, 0.5, 0.84);
        this._txtName2.setTextColor(cc.color(150, 154, 165, 255));
        let _txtName2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName2);
        _txtName2LayoutComponent.setPositionPercentXEnabled(true);
        _txtName2LayoutComponent.setPositionPercentX(0.5);
        _txtName2LayoutComponent.setPositionPercentYEnabled(true);
        _txtName2LayoutComponent.setPositionPercentY(0.84);
        this._txtName2.setTouchEnabled(false);
        this._txtName2.setUnifySizeEnabled(false);
        this._txtName2.ignoreContentAdaptWithSize(false);
        this._txtName2.setContentSize(cc.size(194.7967, 33));
        this._txtName2.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName2.setDefaultFontSize(40);
        this._txtName2.setString(gm.localize.getText("TXT_METAL"));
        this._txtName2.setTextHorizontalAlignment(1);
        this._txtName2.setTextVerticalAlignment(1);
        this._txtName2.enableShadow(cc.color(32, 16, 16, 255), cc.size(0, -2), 0);

        ///// # league_3
        this.league_3 = new cc.Sprite();
        this.league_3.setName("league_3");
        this._page2.addChild(this.league_3);
        this.league_3.setCascadeOpacityEnabled(true);
        this.league_3.setCascadeColorEnabled(true);
        this.league_3.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this.league_3, 0.5995, -0.2609);
        let league_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_3);
        league_3LayoutComponent.setPositionPercentXEnabled(true);
        league_3LayoutComponent.setPositionPercentX(0.5995);
        league_3LayoutComponent.setPositionPercentYEnabled(true);
        league_3LayoutComponent.setPositionPercentY(-0.2609);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Pile_01.png"); if (sf) this.league_3.setSpriteFrame(sf);
        let league_3BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_3BlendFunc.src = 1;
        league_3BlendFunc.dst = 771;
        this.league_3.setBlendFunc(league_3BlendFunc);

        ///// # panelStar_3
        this.panelStar_3 = new ccui.Layout();
        this.panelStar_3.setName("panelStar_3");
        this.league_3.addChild(this.panelStar_3);
        this.panelStar_3.setCascadeOpacityEnabled(true);
        this.panelStar_3.setCascadeColorEnabled(true);
        this.panelStar_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.panelStar_3, 0.5, 0.94);
        let panelStar_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.panelStar_3);
        panelStar_3LayoutComponent.setPositionPercentXEnabled(true);
        panelStar_3LayoutComponent.setPositionPercentX(0.5);
        panelStar_3LayoutComponent.setPositionPercentYEnabled(true);
        panelStar_3LayoutComponent.setPositionPercentY(0.94);
        this.panelStar_3.setTouchEnabled(true);
        this.panelStar_3.setUnifySizeEnabled(false);
        this.panelStar_3.ignoreContentAdaptWithSize(false);
        this.panelStar_3.setContentSize(cc.size(141.1205, 50));

        ///// # league_Star_10
        this.league_Star_10 = new cc.Sprite();
        this.league_Star_10.setName("league_Star_10");
        this.panelStar_3.addChild(this.league_Star_10);
        this.league_Star_10.setCascadeOpacityEnabled(true);
        this.league_Star_10.setCascadeColorEnabled(true);
        this.league_Star_10.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.league_Star_10, 0.2567, 0.5168);
        let league_Star_10LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_Star_10);
        league_Star_10LayoutComponent.setPositionPercentXEnabled(true);
        league_Star_10LayoutComponent.setPositionPercentX(0.2567);
        league_Star_10LayoutComponent.setPositionPercentYEnabled(true);
        league_Star_10LayoutComponent.setPositionPercentY(0.5168);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Star.png"); if (sf) this.league_Star_10.setSpriteFrame(sf);
        let league_Star_10BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_Star_10BlendFunc.src = 1;
        league_Star_10BlendFunc.dst = 771;
        this.league_Star_10.setBlendFunc(league_Star_10BlendFunc);

        ///// # league_Star_10_0
        this.league_Star_10_0 = new cc.Sprite();
        this.league_Star_10_0.setName("league_Star_10_0");
        this.panelStar_3.addChild(this.league_Star_10_0);
        this.league_Star_10_0.setCascadeOpacityEnabled(true);
        this.league_Star_10_0.setCascadeColorEnabled(true);
        this.league_Star_10_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.league_Star_10_0, 0.4978, 0.5168);
        let league_Star_10_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_Star_10_0);
        league_Star_10_0LayoutComponent.setPositionPercentXEnabled(true);
        league_Star_10_0LayoutComponent.setPositionPercentX(0.4978);
        league_Star_10_0LayoutComponent.setPositionPercentYEnabled(true);
        league_Star_10_0LayoutComponent.setPositionPercentY(0.5168);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Star.png"); if (sf) this.league_Star_10_0.setSpriteFrame(sf);
        let league_Star_10_0BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_Star_10_0BlendFunc.src = 1;
        league_Star_10_0BlendFunc.dst = 771;
        this.league_Star_10_0.setBlendFunc(league_Star_10_0BlendFunc);

        ///// # league_Star_10_0_0
        this.league_Star_10_0_0 = new cc.Sprite();
        this.league_Star_10_0_0.setName("league_Star_10_0_0");
        this.panelStar_3.addChild(this.league_Star_10_0_0);
        this.league_Star_10_0_0.setCascadeOpacityEnabled(true);
        this.league_Star_10_0_0.setCascadeColorEnabled(true);
        this.league_Star_10_0_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.league_Star_10_0_0, 0.739, 0.5168);
        let league_Star_10_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_Star_10_0_0);
        league_Star_10_0_0LayoutComponent.setPositionPercentXEnabled(true);
        league_Star_10_0_0LayoutComponent.setPositionPercentX(0.739);
        league_Star_10_0_0LayoutComponent.setPositionPercentYEnabled(true);
        league_Star_10_0_0LayoutComponent.setPositionPercentY(0.5168);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Star.png"); if (sf) this.league_Star_10_0_0.setSpriteFrame(sf);
        let league_Star_10_0_0BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_Star_10_0_0BlendFunc.src = 1;
        league_Star_10_0_0BlendFunc.dst = 771;
        this.league_Star_10_0_0.setBlendFunc(league_Star_10_0_0BlendFunc);

        ///// # Image_5_0_0
        this.Image_5_0_0 = new ccui.ImageView();
        this.Image_5_0_0.setName("Image_5_0_0");
        this.league_3.addChild(this.Image_5_0_0);
        this.Image_5_0_0.setCascadeOpacityEnabled(true);
        this.Image_5_0_0.setCascadeColorEnabled(true);
        this.Image_5_0_0.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this.Image_5_0_0, 0.5, 0.9663);
        let Image_5_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.Image_5_0_0);
        Image_5_0_0LayoutComponent.setPositionPercentXEnabled(true);
        Image_5_0_0LayoutComponent.setPositionPercentX(0.5);
        Image_5_0_0LayoutComponent.setPositionPercentYEnabled(true);
        Image_5_0_0LayoutComponent.setPositionPercentY(0.9663);
        this.Image_5_0_0.loadTexture("league/league_3.png", 1);
        this.Image_5_0_0.setUnifySizeEnabled(false);
        this.Image_5_0_0.ignoreContentAdaptWithSize(false);
        this.Image_5_0_0.setContentSize(cc.size(187, 188));
        this.Image_5_0_0.setTouchEnabled(false);

        ///// # _txtName3
        this._txtName3 = new ck.Text();
        this._txtName3.setName("_txtName3");
        this.league_3.addChild(this._txtName3);
        this._txtName3.setCascadeOpacityEnabled(true);
        this._txtName3.setCascadeColorEnabled(true);
        this._txtName3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName3, 0.5, 0.84);
        this._txtName3.setTextColor(cc.color(150, 154, 165, 255));
        let _txtName3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName3);
        _txtName3LayoutComponent.setPositionPercentXEnabled(true);
        _txtName3LayoutComponent.setPositionPercentX(0.5);
        _txtName3LayoutComponent.setPositionPercentYEnabled(true);
        _txtName3LayoutComponent.setPositionPercentY(0.84);
        this._txtName3.setTouchEnabled(false);
        this._txtName3.setUnifySizeEnabled(false);
        this._txtName3.ignoreContentAdaptWithSize(false);
        this._txtName3.setContentSize(cc.size(168.9079, 33));
        this._txtName3.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName3.setDefaultFontSize(40);
        this._txtName3.setString(gm.localize.getText("TXT_BRONZE"));
        this._txtName3.setTextHorizontalAlignment(1);
        this._txtName3.setTextVerticalAlignment(1);
        this._txtName3.enableShadow(cc.color(32, 16, 16, 255), cc.size(0, -2), 0);

        ///// # league_4
        this.league_4 = new cc.Sprite();
        this.league_4.setName("league_4");
        this._page2.addChild(this.league_4);
        this.league_4.setCascadeOpacityEnabled(true);
        this.league_4.setCascadeColorEnabled(true);
        this.league_4.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this.league_4, 0.8358, -0.1395);
        let league_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_4);
        league_4LayoutComponent.setPositionPercentXEnabled(true);
        league_4LayoutComponent.setPositionPercentX(0.8358);
        league_4LayoutComponent.setPositionPercentYEnabled(true);
        league_4LayoutComponent.setPositionPercentY(-0.1395);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Pile_01.png"); if (sf) this.league_4.setSpriteFrame(sf);
        let league_4BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_4BlendFunc.src = 1;
        league_4BlendFunc.dst = 771;
        this.league_4.setBlendFunc(league_4BlendFunc);

        ///// # panelStar_4
        this.panelStar_4 = new ccui.Layout();
        this.panelStar_4.setName("panelStar_4");
        this.league_4.addChild(this.panelStar_4);
        this.panelStar_4.setCascadeOpacityEnabled(true);
        this.panelStar_4.setCascadeColorEnabled(true);
        this.panelStar_4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.panelStar_4, 0.5, 0.94);
        let panelStar_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.panelStar_4);
        panelStar_4LayoutComponent.setPositionPercentXEnabled(true);
        panelStar_4LayoutComponent.setPositionPercentX(0.5);
        panelStar_4LayoutComponent.setPositionPercentYEnabled(true);
        panelStar_4LayoutComponent.setPositionPercentY(0.94);
        this.panelStar_4.setTouchEnabled(true);
        this.panelStar_4.setUnifySizeEnabled(false);
        this.panelStar_4.ignoreContentAdaptWithSize(false);
        this.panelStar_4.setContentSize(cc.size(141.1205, 50));

        ///// # league_Star_10
        this.league_Star_10 = new cc.Sprite();
        this.league_Star_10.setName("league_Star_10");
        this.panelStar_4.addChild(this.league_Star_10);
        this.league_Star_10.setCascadeOpacityEnabled(true);
        this.league_Star_10.setCascadeColorEnabled(true);
        this.league_Star_10.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.league_Star_10, 0.2567, 0.5168);
        let league_Star_10LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_Star_10);
        league_Star_10LayoutComponent.setPositionPercentXEnabled(true);
        league_Star_10LayoutComponent.setPositionPercentX(0.2567);
        league_Star_10LayoutComponent.setPositionPercentYEnabled(true);
        league_Star_10LayoutComponent.setPositionPercentY(0.5168);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Star.png"); if (sf) this.league_Star_10.setSpriteFrame(sf);
        let league_Star_10BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_Star_10BlendFunc.src = 1;
        league_Star_10BlendFunc.dst = 771;
        this.league_Star_10.setBlendFunc(league_Star_10BlendFunc);

        ///// # league_Star_10_0
        this.league_Star_10_0 = new cc.Sprite();
        this.league_Star_10_0.setName("league_Star_10_0");
        this.panelStar_4.addChild(this.league_Star_10_0);
        this.league_Star_10_0.setCascadeOpacityEnabled(true);
        this.league_Star_10_0.setCascadeColorEnabled(true);
        this.league_Star_10_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.league_Star_10_0, 0.4978, 0.5168);
        let league_Star_10_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_Star_10_0);
        league_Star_10_0LayoutComponent.setPositionPercentXEnabled(true);
        league_Star_10_0LayoutComponent.setPositionPercentX(0.4978);
        league_Star_10_0LayoutComponent.setPositionPercentYEnabled(true);
        league_Star_10_0LayoutComponent.setPositionPercentY(0.5168);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Star.png"); if (sf) this.league_Star_10_0.setSpriteFrame(sf);
        let league_Star_10_0BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_Star_10_0BlendFunc.src = 1;
        league_Star_10_0BlendFunc.dst = 771;
        this.league_Star_10_0.setBlendFunc(league_Star_10_0BlendFunc);

        ///// # league_Star_10_0_0
        this.league_Star_10_0_0 = new cc.Sprite();
        this.league_Star_10_0_0.setName("league_Star_10_0_0");
        this.panelStar_4.addChild(this.league_Star_10_0_0);
        this.league_Star_10_0_0.setCascadeOpacityEnabled(true);
        this.league_Star_10_0_0.setCascadeColorEnabled(true);
        this.league_Star_10_0_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.league_Star_10_0_0, 0.739, 0.5168);
        let league_Star_10_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.league_Star_10_0_0);
        league_Star_10_0_0LayoutComponent.setPositionPercentXEnabled(true);
        league_Star_10_0_0LayoutComponent.setPositionPercentX(0.739);
        league_Star_10_0_0LayoutComponent.setPositionPercentYEnabled(true);
        league_Star_10_0_0LayoutComponent.setPositionPercentY(0.5168);
        let sf = cc.spriteFrameCache.getSpriteFrame("league/Star.png"); if (sf) this.league_Star_10_0_0.setSpriteFrame(sf);
        let league_Star_10_0_0BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        league_Star_10_0_0BlendFunc.src = 1;
        league_Star_10_0_0BlendFunc.dst = 771;
        this.league_Star_10_0_0.setBlendFunc(league_Star_10_0_0BlendFunc);

        ///// # _txtName4
        this._txtName4 = new ck.Text();
        this._txtName4.setName("_txtName4");
        this.league_4.addChild(this._txtName4);
        this._txtName4.setCascadeOpacityEnabled(true);
        this._txtName4.setCascadeColorEnabled(true);
        this._txtName4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName4, 0.5, 0.84);
        this._txtName4.setTextColor(cc.color(150, 154, 165, 255));
        let _txtName4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName4);
        _txtName4LayoutComponent.setPositionPercentXEnabled(true);
        _txtName4LayoutComponent.setPositionPercentX(0.5);
        _txtName4LayoutComponent.setPositionPercentYEnabled(true);
        _txtName4LayoutComponent.setPositionPercentY(0.84);
        this._txtName4.setTouchEnabled(false);
        this._txtName4.setUnifySizeEnabled(false);
        this._txtName4.ignoreContentAdaptWithSize(false);
        this._txtName4.setContentSize(cc.size(179.0766, 33));
        this._txtName4.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName4.setDefaultFontSize(40);
        this._txtName4.setString(gm.localize.getText("TXT_SILVER"));
        this._txtName4.setTextHorizontalAlignment(1);
        this._txtName4.setTextVerticalAlignment(1);
        this._txtName4.enableShadow(cc.color(32, 16, 16, 255), cc.size(0, -2), 0);

        ///// # Image_5_0_0_0
        this.Image_5_0_0_0 = new ccui.ImageView();
        this.Image_5_0_0_0.setName("Image_5_0_0_0");
        this.league_4.addChild(this.Image_5_0_0_0);
        this.Image_5_0_0_0.setCascadeOpacityEnabled(true);
        this.Image_5_0_0_0.setCascadeColorEnabled(true);
        this.Image_5_0_0_0.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this.Image_5_0_0_0, 0.473, 0.9702);
        let Image_5_0_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.Image_5_0_0_0);
        Image_5_0_0_0LayoutComponent.setPositionPercentXEnabled(true);
        Image_5_0_0_0LayoutComponent.setPositionPercentX(0.473);
        Image_5_0_0_0LayoutComponent.setPositionPercentYEnabled(true);
        Image_5_0_0_0LayoutComponent.setPositionPercentY(0.9702);
        this.Image_5_0_0_0.loadTexture("league/league_4.png", 1);
        this.Image_5_0_0_0.setUnifySizeEnabled(false);
        this.Image_5_0_0_0.ignoreContentAdaptWithSize(false);
        this.Image_5_0_0_0.setContentSize(cc.size(212, 188));
        this.Image_5_0_0_0.setTouchEnabled(false);

        ///// # _imgYouAreHere
        this._imgYouAreHere = new ccui.ImageView();
        this._imgYouAreHere.setName("_imgYouAreHere");
        this._page2.addChild(this._imgYouAreHere);
        this._imgYouAreHere.setCascadeOpacityEnabled(true);
        this._imgYouAreHere.setCascadeColorEnabled(true);
        this._imgYouAreHere.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgYouAreHere, 0.8067, 0.8743);
        let _imgYouAreHereLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgYouAreHere);
        _imgYouAreHereLayoutComponent.setPositionPercentXEnabled(true);
        _imgYouAreHereLayoutComponent.setPositionPercentX(0.8067);
        _imgYouAreHereLayoutComponent.setPositionPercentYEnabled(true);
        _imgYouAreHereLayoutComponent.setPositionPercentY(0.8743);
        this._imgYouAreHere.loadTexture("league/YouareHere_Bubble.png", 1);
        this._imgYouAreHere.setUnifySizeEnabled(false);
        this._imgYouAreHere.ignoreContentAdaptWithSize(false);
        this._imgYouAreHere.setContentSize(cc.size(116, 86));
        this._imgYouAreHere.setTouchEnabled(false);

        ///// # _txtYouAreHere
        this._txtYouAreHere = new ck.Text();
        this._txtYouAreHere.setName("_txtYouAreHere");
        this._imgYouAreHere.addChild(this._txtYouAreHere);
        this._txtYouAreHere.setCascadeOpacityEnabled(true);
        this._txtYouAreHere.setCascadeColorEnabled(true);
        this._txtYouAreHere.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtYouAreHere, 0.5, 0.6119);
        this._txtYouAreHere.setTextColor(cc.color(73, 49, 49, 255));
        let _txtYouAreHereLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtYouAreHere);
        _txtYouAreHereLayoutComponent.setPositionPercentXEnabled(true);
        _txtYouAreHereLayoutComponent.setPositionPercentX(0.5);
        _txtYouAreHereLayoutComponent.setPositionPercentYEnabled(true);
        _txtYouAreHereLayoutComponent.setPositionPercentY(0.6119);
        this._txtYouAreHere.setTouchEnabled(false);
        this._txtYouAreHere.setUnifySizeEnabled(false);
        this._txtYouAreHere.ignoreContentAdaptWithSize(false);
        this._txtYouAreHere.setContentSize(cc.size(101, 46.9938));
        this._txtYouAreHere.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtYouAreHere.setDefaultFontSize(23);
        this._txtYouAreHere.setTextHorizontalAlignment(1);
        this._txtYouAreHere.setTextVerticalAlignment(1);

        ///// # _panelBottom
        this._panelBottom = new ccui.Layout();
        this._panelBottom.setName("_panelBottom");
        this._layoutPopup.addChild(this._panelBottom);
        this._panelBottom.setCascadeOpacityEnabled(true);
        this._panelBottom.setCascadeColorEnabled(true);
        this._panelBottom.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._panelBottom, 0.5, 0);
        let _panelBottomLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._panelBottom);
        _panelBottomLayoutComponent.setPositionPercentXEnabled(true);
        _panelBottomLayoutComponent.setPositionPercentX(0.5);
        _panelBottomLayoutComponent.setPositionPercentYEnabled(true);
        _panelBottomLayoutComponent.setPositionPercentY(0);
        _panelBottomLayoutComponent.setPercentWidthEnabled(true);
        _panelBottomLayoutComponent.setPercentWidth(1);
        _panelBottomLayoutComponent.setPercentHeightEnabled(true);
        _panelBottomLayoutComponent.setPercentHeight(0.135);
        this._panelBottom.setTouchEnabled(true);
        this._panelBottom.setUnifySizeEnabled(false);
        this._panelBottom.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._panelBottom, 1, 0.135);

        ///// # _btnLeft
        this._btnLeft = new ccui.Button();
        this._btnLeft.setName("_btnLeft");
        this._panelBottom.addChild(this._btnLeft);
        this._btnLeft.setCascadeOpacityEnabled(true);
        this._btnLeft.setCascadeColorEnabled(true);
        this._btnLeft.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnLeft, 0.35, 0.4499);
        let _btnLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnLeft);
        _btnLeftLayoutComponent.setPositionPercentXEnabled(true);
        _btnLeftLayoutComponent.setPositionPercentX(0.35);
        _btnLeftLayoutComponent.setPositionPercentYEnabled(true);
        _btnLeftLayoutComponent.setPositionPercentY(0.4499);
        this._btnLeft.loadTextureDisabled("buttons/triangles/Gold.png", 1);
        this._btnLeft.loadTexturePressed("buttons/triangles/Gold.png", 1);
        this._btnLeft.loadTextureNormal("buttons/triangles/Gold.png", 1);
        this._btnLeft.setUnifySizeEnabled(false);
        this._btnLeft.ignoreContentAdaptWithSize(false);
        this._btnLeft.setScale9Enabled(true);
        this._btnLeft.setCapInsets(cc.rect(15, 11, 18, 28));
        this._btnLeft.setContentSize(cc.size(48, 50));
        this._btnLeft.setTouchEnabled(true);

        ///// # _btnRight
        this._btnRight = new ccui.Button();
        this._btnRight.setName("_btnRight");
        this._panelBottom.addChild(this._btnRight);
        this._btnRight.setCascadeOpacityEnabled(true);
        this._btnRight.setCascadeColorEnabled(true);
        this._btnRight.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnRight, 0.65, 0.4499);
        this._btnRight.setFlippedX(true);
        let _btnRightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnRight);
        _btnRightLayoutComponent.setPositionPercentXEnabled(true);
        _btnRightLayoutComponent.setPositionPercentX(0.65);
        _btnRightLayoutComponent.setPositionPercentYEnabled(true);
        _btnRightLayoutComponent.setPositionPercentY(0.4499);
        this._btnRight.loadTextureDisabled("buttons/triangles/Gold.png", 1);
        this._btnRight.loadTexturePressed("buttons/triangles/Gold.png", 1);
        this._btnRight.loadTextureNormal("buttons/triangles/Gold.png", 1);
        this._btnRight.setUnifySizeEnabled(false);
        this._btnRight.ignoreContentAdaptWithSize(false);
        this._btnRight.setScale9Enabled(true);
        this._btnRight.setCapInsets(cc.rect(15, 11, 18, 28));
        this._btnRight.setContentSize(cc.size(48, 50));
        this._btnRight.setTouchEnabled(true);

        ///// # _btnClose
        this._btnClose = new ccui.Button();
        this._btnClose.setName("_btnClose");
        this._layoutPopup.addChild(this._btnClose);
        this._btnClose.setCascadeOpacityEnabled(true);
        this._btnClose.setCascadeColorEnabled(true);
        this._btnClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnClose, 0.8918, 0.9368);
        let _btnCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnClose);
        _btnCloseLayoutComponent.setPositionPercentXEnabled(true);
        _btnCloseLayoutComponent.setPositionPercentX(0.8918);
        _btnCloseLayoutComponent.setPositionPercentYEnabled(true);
        _btnCloseLayoutComponent.setPositionPercentY(0.9368);
        this._btnClose.loadTextureDisabled("buttons/rectangles/Close.png", 1);
        this._btnClose.loadTexturePressed("buttons/rectangles/Close.png", 1);
        this._btnClose.loadTextureNormal("buttons/rectangles/Close.png", 1);
        this._btnClose.setUnifySizeEnabled(false);
        this._btnClose.ignoreContentAdaptWithSize(false);
        this._btnClose.setScale9Enabled(true);
        this._btnClose.setCapInsets(cc.rect(15, 11, 47, 58));
        this._btnClose.setContentSize(cc.size(77, 80));
        this._btnClose.setTouchEnabled(true);

    },



});

/**
 * Create LeagueGuide
 * @returns {_ccs.LeagueGuide}
 */
_ccs.LeagueGuide.create = function () {
    return new _ccs.LeagueGuide();
};
