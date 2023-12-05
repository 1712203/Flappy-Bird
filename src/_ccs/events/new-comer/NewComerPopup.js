/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.NewComerPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.NewComerPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {ccui.ImageView} */
    _imgFront: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ccui.ImageView} */
    _imgTextHeader: null,
    /** @type {ccui.ListView} */
    _listViewQuests: null,
    /** @type {ck.Text} */
    _txtTimeLeft: null,
    /** @type {ccui.Layout} */
    _layoutInfo: null,
    /** @type {ccui.ImageView} */
    _imgInfo: null,
    /** @type {ccui.ImageView} */
    _imgInfoIcon: null,
    /** @type {ccui.Layout} */
    _layoutInfoHint: null,
    /** @type {ccui.ImageView} */
    _imgInfoHint: null,
    /** @type {ck.Text} */
    _txtInfo: null,
    /** @type {ccui.Layout} */
    _layoutClose: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.Layout} */
    _layoutMilestone: null,
    /** @type {ccui.ImageView} */
    _imgMilestoneBgr: null,
    /** @type {ck.LoadingBar} */
    _loadingBarMilestone: null,
    /** @type {ccui.ImageView} */
    _imgMilestoneIcon: null,
    /** @type {ck.Text} */
    _txtMilestone: null,
    /** @type {ccui.ImageView} */
    _imgMilestoneGift: null,
    /** @type {ck.Text} */
    _txtMilestoneGift: null,


    /**
     * _ccs.NewComerPopup constructor
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
        this._layoutPopup.setPosition(-0.0002, 0.0004);
        let _layoutPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        this._layoutPopup.setTouchEnabled(false);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(540, 830));

        ///// # _imgBack
        this._imgBack = new ccui.ImageView();
        this._imgBack.setName("_imgBack");
        this._layoutPopup.addChild(this._imgBack);
        this._imgBack.setCascadeOpacityEnabled(true);
        this._imgBack.setCascadeColorEnabled(true);
        this._imgBack.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBack, 0.5, 0.5);
        let _imgBackLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBack);
        _imgBackLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackLayoutComponent.setPositionPercentX(0.5);
        _imgBackLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackLayoutComponent.setPositionPercentY(0.5);
        _imgBackLayoutComponent.setPercentWidthEnabled(true);
        _imgBackLayoutComponent.setPercentWidth(1);
        _imgBackLayoutComponent.setPercentHeightEnabled(true);
        _imgBackLayoutComponent.setPercentHeight(1);
        this._imgBack.loadTexture("basics/popup/BoardYellow.png", 1);
        this._imgBack.setUnifySizeEnabled(false);
        this._imgBack.ignoreContentAdaptWithSize(false);
        this._imgBack.setScale9Enabled(true);
        this._imgBack.setCapInsets(cc.rect(15, 13, 17, 14));
        ck.UIUtils.setSizePercent(this._imgBack, 1, 1);
        this._imgBack.setTouchEnabled(false);

        ///// # _imgFront
        this._imgFront = new ccui.ImageView();
        this._imgFront.setName("_imgFront");
        this._layoutPopup.addChild(this._imgFront);
        this._imgFront.setCascadeOpacityEnabled(true);
        this._imgFront.setCascadeColorEnabled(true);
        this._imgFront.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgFront, 0.5, 0.9138);
        let _imgFrontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFront);
        _imgFrontLayoutComponent.setPositionPercentXEnabled(true);
        _imgFrontLayoutComponent.setPositionPercentX(0.5);
        _imgFrontLayoutComponent.setPositionPercentYEnabled(true);
        _imgFrontLayoutComponent.setPositionPercentY(0.9138);
        _imgFrontLayoutComponent.setPercentWidthEnabled(true);
        _imgFrontLayoutComponent.setPercentWidth(0.95);
        _imgFrontLayoutComponent.setPercentHeightEnabled(true);
        _imgFrontLayoutComponent.setPercentHeight(0.8305);
        this._imgFront.loadTexture("basics/popup/Font.png", 1);
        this._imgFront.setUnifySizeEnabled(false);
        this._imgFront.ignoreContentAdaptWithSize(false);
        this._imgFront.setScale9Enabled(true);
        this._imgFront.setCapInsets(cc.rect(69, 57, 15, 31));
        ck.UIUtils.setSizePercent(this._imgFront, 0.95, 0.8305);
        this._imgFront.setTouchEnabled(false);

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._layoutPopup.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 0.9973);
        this._imgHeader.setRotation(-0.1539);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(0.9973);
        this._imgHeader.loadTexture("basics/popup/HeaderYellowCards.png", 1);
        this._imgHeader.setUnifySizeEnabled(false);
        this._imgHeader.ignoreContentAdaptWithSize(false);
        this._imgHeader.setContentSize(cc.size(519, 147));
        this._imgHeader.setTouchEnabled(false);

        ///// # _imgTextHeader
        this._imgTextHeader = new ccui.ImageView();
        this._imgTextHeader.setName("_imgTextHeader");
        this._imgHeader.addChild(this._imgTextHeader);
        this._imgTextHeader.setCascadeOpacityEnabled(true);
        this._imgTextHeader.setCascadeColorEnabled(true);
        this._imgTextHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTextHeader, 0.5, 0.1502);
        let _imgTextHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTextHeader);
        _imgTextHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgTextHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgTextHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgTextHeaderLayoutComponent.setPositionPercentY(0.1502);
        this._imgTextHeader.loadTexture("texts/new-comer/PistiMaster.png", 1);
        this._imgTextHeader.setTouchEnabled(false);

        ///// # _listViewQuests
        this._listViewQuests = new ccui.ListView();
        this._listViewQuests.setName("_listViewQuests");
        this._layoutPopup.addChild(this._listViewQuests);
        this._listViewQuests.setCascadeOpacityEnabled(true);
        this._listViewQuests.setCascadeColorEnabled(true);
        this._listViewQuests.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._listViewQuests, 0.5, 0.8459);
        let _listViewQuestsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._listViewQuests);
        _listViewQuestsLayoutComponent.setPositionPercentXEnabled(true);
        _listViewQuestsLayoutComponent.setPositionPercentX(0.5);
        _listViewQuestsLayoutComponent.setPositionPercentYEnabled(true);
        _listViewQuestsLayoutComponent.setPositionPercentY(0.8459);
        _listViewQuestsLayoutComponent.setPercentHeightEnabled(true);
        _listViewQuestsLayoutComponent.setPercentHeight(0.7412);
        this._listViewQuests.setTouchEnabled(true);
        this._listViewQuests.setUnifySizeEnabled(false);
        this._listViewQuests.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this._listViewQuests, 0.7412);
        this._listViewQuests.setContentSize(cc.size(527.47, this._listViewQuests.height));
        this._listViewQuests.setDirection(ccui.ScrollView.DIR_VERTICAL);
        this._listViewQuests.setGravity(ccui.ListView.GRAVITY_CENTER_HORIZONTAL);
        this._listViewQuests.setItemsMargin(5);

        ///// # _txtTimeLeft
        this._txtTimeLeft = new ck.Text();
        this._txtTimeLeft.setName("_txtTimeLeft");
        this._layoutPopup.addChild(this._txtTimeLeft);
        this._txtTimeLeft.setCascadeOpacityEnabled(true);
        this._txtTimeLeft.setCascadeColorEnabled(true);
        this._txtTimeLeft.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTimeLeft, 0.5, 0.873);
        this._txtTimeLeft.setTextColor(cc.color(135, 110, 80, 255));
        let _txtTimeLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTimeLeft);
        _txtTimeLeftLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentX(0.5);
        _txtTimeLeftLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentY(0.873);
        this._txtTimeLeft.setTouchEnabled(false);
        this._txtTimeLeft.ignoreContentAdaptWithSize(true);
        this._txtTimeLeft.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTimeLeft.setDefaultFontSize(30);
        this._txtTimeLeft.setTextHorizontalAlignment(1);
        this._txtTimeLeft.setTextVerticalAlignment(1);

        ///// # _layoutInfo
        this._layoutInfo = new ccui.Layout();
        this._layoutInfo.setName("_layoutInfo");
        this._layoutPopup.addChild(this._layoutInfo);
        this._layoutInfo.setCascadeOpacityEnabled(true);
        this._layoutInfo.setCascadeColorEnabled(true);
        this._layoutInfo.setAnchorPoint(cc.p(0.5026, 0.5236));
        ck.UIUtils.setPositionPercent(this._layoutInfo, 0.0926, 0.9501);
        let _layoutInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInfo);
        _layoutInfoLayoutComponent.setPositionPercentXEnabled(true);
        _layoutInfoLayoutComponent.setPositionPercentX(0.0926);
        _layoutInfoLayoutComponent.setPositionPercentYEnabled(true);
        _layoutInfoLayoutComponent.setPositionPercentY(0.9501);
        this._layoutInfo.setTouchEnabled(true);
        this._layoutInfo.setUnifySizeEnabled(false);
        this._layoutInfo.ignoreContentAdaptWithSize(false);
        this._layoutInfo.setContentSize(cc.size(55, 55));

        ///// # _imgInfo
        this._imgInfo = new ccui.ImageView();
        this._imgInfo.setName("_imgInfo");
        this._layoutInfo.addChild(this._imgInfo);
        this._imgInfo.setCascadeOpacityEnabled(true);
        this._imgInfo.setCascadeColorEnabled(true);
        this._imgInfo.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgInfo, 0.5, 0.4763);
        let _imgInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgInfo);
        _imgInfoLayoutComponent.setPositionPercentXEnabled(true);
        _imgInfoLayoutComponent.setPositionPercentX(0.5);
        _imgInfoLayoutComponent.setPositionPercentYEnabled(true);
        _imgInfoLayoutComponent.setPositionPercentY(0.4763);
        this._imgInfo.loadTexture("buttons/squares/Info.png", 1);
        this._imgInfo.setUnifySizeEnabled(false);
        this._imgInfo.ignoreContentAdaptWithSize(false);
        this._imgInfo.setContentSize(cc.size(55, 53));
        this._imgInfo.setTouchEnabled(false);

        ///// # _imgInfoIcon
        this._imgInfoIcon = new ccui.ImageView();
        this._imgInfoIcon.setName("_imgInfoIcon");
        this._layoutInfo.addChild(this._imgInfoIcon);
        this._imgInfoIcon.setCascadeOpacityEnabled(true);
        this._imgInfoIcon.setCascadeColorEnabled(true);
        this._imgInfoIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgInfoIcon, 0.5, 0.55);
        let _imgInfoIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgInfoIcon);
        _imgInfoIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgInfoIconLayoutComponent.setPositionPercentX(0.5);
        _imgInfoIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgInfoIconLayoutComponent.setPositionPercentY(0.55);
        this._imgInfoIcon.loadTexture("icons/flat/Info.png", 1);
        this._imgInfoIcon.setUnifySizeEnabled(false);
        this._imgInfoIcon.ignoreContentAdaptWithSize(false);
        this._imgInfoIcon.setContentSize(cc.size(14, 32));
        this._imgInfoIcon.setTouchEnabled(false);

        ///// # _layoutInfoHint
        this._layoutInfoHint = new ccui.Layout();
        this._layoutInfoHint.setName("_layoutInfoHint");
        this._layoutPopup.addChild(this._layoutInfoHint);
        this._layoutInfoHint.setCascadeOpacityEnabled(true);
        this._layoutInfoHint.setCascadeColorEnabled(true);
        this._layoutInfoHint.setAnchorPoint(cc.p(0.1627, 1));
        ck.UIUtils.setPositionPercent(this._layoutInfoHint, 0.0914, 0.9382);
        let _layoutInfoHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInfoHint);
        _layoutInfoHintLayoutComponent.setPositionPercentXEnabled(true);
        _layoutInfoHintLayoutComponent.setPositionPercentX(0.0914);
        _layoutInfoHintLayoutComponent.setPositionPercentYEnabled(true);
        _layoutInfoHintLayoutComponent.setPositionPercentY(0.9382);
        this._layoutInfoHint.setTouchEnabled(true);
        this._layoutInfoHint.setUnifySizeEnabled(false);
        this._layoutInfoHint.ignoreContentAdaptWithSize(false);
        this._layoutInfoHint.setContentSize(cc.size(325.16, 163.6904));

        ///// # _imgInfoHint
        this._imgInfoHint = new ccui.ImageView();
        this._imgInfoHint.setName("_imgInfoHint");
        this._layoutInfoHint.addChild(this._imgInfoHint);
        this._imgInfoHint.setCascadeOpacityEnabled(true);
        this._imgInfoHint.setCascadeColorEnabled(true);
        this._imgInfoHint.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgInfoHint, 0.5, 0.5);
        let _imgInfoHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgInfoHint);
        _imgInfoHintLayoutComponent.setPositionPercentXEnabled(true);
        _imgInfoHintLayoutComponent.setPositionPercentX(0.5);
        _imgInfoHintLayoutComponent.setPositionPercentYEnabled(true);
        _imgInfoHintLayoutComponent.setPositionPercentY(0.5);
        _imgInfoHintLayoutComponent.setPercentWidthEnabled(true);
        _imgInfoHintLayoutComponent.setPercentWidth(1);
        _imgInfoHintLayoutComponent.setPercentHeightEnabled(true);
        _imgInfoHintLayoutComponent.setPercentHeight(1);
        this._imgInfoHint.loadTexture("basics/other/Bubble.png", 1);
        this._imgInfoHint.setUnifySizeEnabled(false);
        this._imgInfoHint.ignoreContentAdaptWithSize(false);
        this._imgInfoHint.setScale9Enabled(true);
        this._imgInfoHint.setCapInsets(cc.rect(75, 24, 6, 2));
        ck.UIUtils.setSizePercent(this._imgInfoHint, 1, 1);
        this._imgInfoHint.setTouchEnabled(false);

        ///// # _txtInfo
        this._txtInfo = new ck.Text();
        this._txtInfo.setName("_txtInfo");
        this._layoutInfoHint.addChild(this._txtInfo);
        this._txtInfo.setCascadeOpacityEnabled(true);
        this._txtInfo.setCascadeColorEnabled(true);
        this._txtInfo.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtInfo, 0.5, 0.4511);
        let _txtInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtInfo);
        _txtInfoLayoutComponent.setPositionPercentXEnabled(true);
        _txtInfoLayoutComponent.setPositionPercentX(0.5);
        _txtInfoLayoutComponent.setPositionPercentYEnabled(true);
        _txtInfoLayoutComponent.setPositionPercentY(0.4511);
        this._txtInfo.setTouchEnabled(false);
        this._txtInfo.setUnifySizeEnabled(false);
        this._txtInfo.ignoreContentAdaptWithSize(false);
        this._txtInfo.setContentSize(cc.size(307.7, 135.5));
        this._txtInfo.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtInfo.setDefaultFontSize(30);
        this._txtInfo.setString(gm.localize.getText("TXT_NEW_COMER_INFO_HINT"));
        this._txtInfo.setTextHorizontalAlignment(1);
        this._txtInfo.setTextVerticalAlignment(1);
        this._txtInfo.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutClose
        this._layoutClose = new ccui.Layout();
        this._layoutClose.setName("_layoutClose");
        this._layoutPopup.addChild(this._layoutClose);
        this._layoutClose.setCascadeOpacityEnabled(true);
        this._layoutClose.setCascadeColorEnabled(true);
        this._layoutClose.setAnchorPoint(cc.p(0.5026, 0.5236));
        ck.UIUtils.setPositionPercent(this._layoutClose, 0.9893, 0.9952);
        let _layoutCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutClose);
        _layoutCloseLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentX(0.9893);
        _layoutCloseLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentY(0.9952);
        this._layoutClose.setTouchEnabled(true);
        this._layoutClose.setUnifySizeEnabled(false);
        this._layoutClose.ignoreContentAdaptWithSize(false);
        this._layoutClose.setContentSize(cc.size(75, 75));

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
        _imgCloseLayoutComponent.setPercentWidthEnabled(true);
        _imgCloseLayoutComponent.setPercentWidth(1.08);
        _imgCloseLayoutComponent.setPercentHeightEnabled(true);
        _imgCloseLayoutComponent.setPercentHeight(1.1067);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgClose, 1.08, 1.1067);
        this._imgClose.setTouchEnabled(false);

        ///// # _layoutMilestone
        this._layoutMilestone = new ccui.Layout();
        this._layoutMilestone.setName("_layoutMilestone");
        this._layoutPopup.addChild(this._layoutMilestone);
        this._layoutMilestone.setCascadeOpacityEnabled(true);
        this._layoutMilestone.setCascadeColorEnabled(true);
        this._layoutMilestone.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutMilestone, 0.5, 0.047);
        let _layoutMilestoneLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutMilestone);
        _layoutMilestoneLayoutComponent.setPositionPercentXEnabled(true);
        _layoutMilestoneLayoutComponent.setPositionPercentX(0.5);
        _layoutMilestoneLayoutComponent.setPositionPercentYEnabled(true);
        _layoutMilestoneLayoutComponent.setPositionPercentY(0.047);
        this._layoutMilestone.setTouchEnabled(false);
        this._layoutMilestone.setUnifySizeEnabled(false);
        this._layoutMilestone.ignoreContentAdaptWithSize(false);
        this._layoutMilestone.setContentSize(cc.size(470.5206, 20));

        ///// # _imgMilestoneBgr
        this._imgMilestoneBgr = new ccui.ImageView();
        this._imgMilestoneBgr.setName("_imgMilestoneBgr");
        this._layoutMilestone.addChild(this._imgMilestoneBgr);
        this._imgMilestoneBgr.setCascadeOpacityEnabled(true);
        this._imgMilestoneBgr.setCascadeColorEnabled(true);
        this._imgMilestoneBgr.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgMilestoneBgr, -0.0303, 0.5);
        let _imgMilestoneBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgMilestoneBgr);
        _imgMilestoneBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgMilestoneBgrLayoutComponent.setPositionPercentX(-0.0303);
        _imgMilestoneBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgMilestoneBgrLayoutComponent.setPositionPercentY(0.5);
        _imgMilestoneBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgMilestoneBgrLayoutComponent.setPercentWidth(1.0605);
        this._imgMilestoneBgr.loadTexture("basics/bars/Bar_06.png", 1);
        this._imgMilestoneBgr.setUnifySizeEnabled(false);
        this._imgMilestoneBgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._imgMilestoneBgr, 1.0605);
        this._imgMilestoneBgr.setContentSize(cc.size(this._imgMilestoneBgr.width, 35));
        this._imgMilestoneBgr.setTouchEnabled(false);

        ///// # _loadingBarMilestone
        this._loadingBarMilestone = new ck.LoadingBar();
        this._loadingBarMilestone.setName("_loadingBarMilestone");
        this._layoutMilestone.addChild(this._loadingBarMilestone);
        this._loadingBarMilestone.setCascadeOpacityEnabled(true);
        this._loadingBarMilestone.setCascadeColorEnabled(true);
        this._loadingBarMilestone.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._loadingBarMilestone, -0.0175, 0.5);
        let _loadingBarMilestoneLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._loadingBarMilestone);
        _loadingBarMilestoneLayoutComponent.setPositionPercentXEnabled(true);
        _loadingBarMilestoneLayoutComponent.setPositionPercentX(-0.0175);
        _loadingBarMilestoneLayoutComponent.setPositionPercentYEnabled(true);
        _loadingBarMilestoneLayoutComponent.setPositionPercentY(0.5);
        _loadingBarMilestoneLayoutComponent.setPercentWidthEnabled(true);
        _loadingBarMilestoneLayoutComponent.setPercentWidth(1.035);
        this._loadingBarMilestone.setTouchEnabled(false);
        this._loadingBarMilestone.setUnifySizeEnabled(false);
        this._loadingBarMilestone.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._loadingBarMilestone, 1.035);
        this._loadingBarMilestone.setContentSize(cc.size(this._loadingBarMilestone.width, 23));
        this._loadingBarMilestone.loadTexture("basics/bars/Bar_07.png", 1);

        ///// # _imgMilestoneIcon
        this._imgMilestoneIcon = new ccui.ImageView();
        this._imgMilestoneIcon.setName("_imgMilestoneIcon");
        this._layoutMilestone.addChild(this._imgMilestoneIcon);
        this._imgMilestoneIcon.setCascadeOpacityEnabled(true);
        this._imgMilestoneIcon.setCascadeColorEnabled(true);
        this._imgMilestoneIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgMilestoneIcon, 0.005, 0.5);
        let _imgMilestoneIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgMilestoneIcon);
        _imgMilestoneIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgMilestoneIconLayoutComponent.setPositionPercentX(0.005);
        _imgMilestoneIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgMilestoneIconLayoutComponent.setPositionPercentY(0.5);
        this._imgMilestoneIcon.loadTexture("icons/color/tokens/ActionPoint.png", 1);
        this._imgMilestoneIcon.setUnifySizeEnabled(false);
        this._imgMilestoneIcon.ignoreContentAdaptWithSize(false);
        this._imgMilestoneIcon.setContentSize(cc.size(61, 60));
        this._imgMilestoneIcon.setTouchEnabled(false);

        ///// # _txtMilestone
        this._txtMilestone = new ck.Text();
        this._txtMilestone.setName("_txtMilestone");
        this._layoutMilestone.addChild(this._txtMilestone);
        this._txtMilestone.setCascadeOpacityEnabled(true);
        this._txtMilestone.setCascadeColorEnabled(true);
        this._txtMilestone.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMilestone, 0.5, 0.5);
        let _txtMilestoneLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMilestone);
        _txtMilestoneLayoutComponent.setPositionPercentXEnabled(true);
        _txtMilestoneLayoutComponent.setPositionPercentX(0.5);
        this._txtMilestone.setTouchEnabled(false);
        this._txtMilestone.ignoreContentAdaptWithSize(true);
        this._txtMilestone.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtMilestone.setDefaultFontSize(23);
        this._txtMilestone.setTextHorizontalAlignment(1);
        this._txtMilestone.setTextVerticalAlignment(1);
        this._txtMilestone.enableOutline(cc.color(61, 30, 0, 255), 1);

        ///// # _imgMilestoneGift
        this._imgMilestoneGift = new ccui.ImageView();
        this._imgMilestoneGift.setName("_imgMilestoneGift");
        this._layoutMilestone.addChild(this._imgMilestoneGift);
        this._imgMilestoneGift.setCascadeOpacityEnabled(true);
        this._imgMilestoneGift.setCascadeColorEnabled(true);
        this._imgMilestoneGift.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgMilestoneGift, 0.95, 0.9);
        let _imgMilestoneGiftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgMilestoneGift);
        _imgMilestoneGiftLayoutComponent.setPositionPercentXEnabled(true);
        _imgMilestoneGiftLayoutComponent.setPositionPercentX(0.95);
        _imgMilestoneGiftLayoutComponent.setPositionPercentYEnabled(true);
        _imgMilestoneGiftLayoutComponent.setPositionPercentY(0.9);
        this._imgMilestoneGift.loadTexture("icons/color/coins/CoinPile_02.png", 1);
        this._imgMilestoneGift.setUnifySizeEnabled(false);
        this._imgMilestoneGift.ignoreContentAdaptWithSize(false);
        this._imgMilestoneGift.setContentSize(cc.size(91, 71));
        this._imgMilestoneGift.setTouchEnabled(false);

        ///// # _txtMilestoneGift
        this._txtMilestoneGift = new ck.Text();
        this._txtMilestoneGift.setName("_txtMilestoneGift");
        this._layoutMilestone.addChild(this._txtMilestoneGift);
        this._txtMilestoneGift.setCascadeOpacityEnabled(true);
        this._txtMilestoneGift.setCascadeColorEnabled(true);
        this._txtMilestoneGift.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMilestoneGift, 0.95, 0);
        this._txtMilestoneGift.setTextColor(cc.color(254, 219, 0, 255));
        let _txtMilestoneGiftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMilestoneGift);
        _txtMilestoneGiftLayoutComponent.setPositionPercentXEnabled(true);
        _txtMilestoneGiftLayoutComponent.setPositionPercentX(0.95);
        _txtMilestoneGiftLayoutComponent.setPositionPercentYEnabled(true);
        _txtMilestoneGiftLayoutComponent.setPositionPercentY(0);
        this._txtMilestoneGift.setTouchEnabled(false);
        this._txtMilestoneGift.ignoreContentAdaptWithSize(true);
        this._txtMilestoneGift.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtMilestoneGift.setDefaultFontSize(25);
        this._txtMilestoneGift.setTextHorizontalAlignment(1);
        this._txtMilestoneGift.setTextVerticalAlignment(1);
        this._txtMilestoneGift.enableOutline(cc.color(110, 14, 6, 255), 2);

    },



});

/**
 * Create NewComerPopup
 * @returns {_ccs.NewComerPopup}
 */
_ccs.NewComerPopup.create = function () {
    return new _ccs.NewComerPopup();
};
