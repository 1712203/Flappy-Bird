/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.QuestPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.QuestPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {ccui.ImageView} */
    _imgFont: null,
    /** @type {ccui.Layout} */
    _layoutHeader: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ck.Text} */
    _txtHeader: null,
    /** @type {ccui.ListView} */
    _listViewQuests: null,
    /** @type {ck.Text} */
    _txtRefreshTime: null,
    /** @type {ccui.Layout} */
    _layoutRefresh: null,
    /** @type {ccui.ImageView} */
    _imgRefresh: null,
    /** @type {ck.Text} */
    _txtRefresh: null,
    /** @type {ck.Text} */
    _txtRefreshCost: null,
    /** @type {ccui.ImageView} */
    _imgRefreshGem: null,
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
    /** @type {ck.Text} */
    _txtMilestone: null,
    /** @type {ck.Text} */
    _txtMilestoneDescription: null,
    /** @type {ck.GridViewVertical} */
    _gridViewMilestoneRewards: null,
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
    _layoutFinished: null,
    /** @type {ccui.ImageView} */
    _imgEmo: null,
    /** @type {ck.Text} */
    _txtCongrats: null,
    /** @type {ccui.Layout} */
    _layoutRenew: null,
    /** @type {ccui.ImageView} */
    _imgRenew: null,
    /** @type {ck.Text} */
    _txtRenew: null,
    /** @type {ck.Text} */
    _txtRenewCost: null,
    /** @type {ccui.ImageView} */
    _imgRenewGem: null,


    /**
     * _ccs.QuestPopup constructor
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
        this._layoutPopup.setContentSize(cc.size(540, 855));

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
        this._imgBack.loadTexture("basics/popup/Back.png", 1);
        this._imgBack.setUnifySizeEnabled(false);
        this._imgBack.ignoreContentAdaptWithSize(false);
        this._imgBack.setScale9Enabled(true);
        this._imgBack.setCapInsets(cc.rect(69, 57, 72, 61));
        ck.UIUtils.setSizePercent(this._imgBack, 1, 1);
        this._imgBack.setTouchEnabled(false);

        ///// # _imgFont
        this._imgFont = new ccui.ImageView();
        this._imgFont.setName("_imgFont");
        this._layoutPopup.addChild(this._imgFont);
        this._imgFont.setCascadeOpacityEnabled(true);
        this._imgFont.setCascadeColorEnabled(true);
        this._imgFont.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgFont, 0.5, 0.975);
        let _imgFontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFont);
        _imgFontLayoutComponent.setPositionPercentXEnabled(true);
        _imgFontLayoutComponent.setPositionPercentX(0.5);
        _imgFontLayoutComponent.setPositionPercentYEnabled(true);
        _imgFontLayoutComponent.setPositionPercentY(0.975);
        _imgFontLayoutComponent.setPercentWidthEnabled(true);
        _imgFontLayoutComponent.setPercentWidth(0.95);
        this._imgFont.loadTexture("basics/popup/Font.png", 1);
        this._imgFont.setUnifySizeEnabled(false);
        this._imgFont.ignoreContentAdaptWithSize(false);
        this._imgFont.setScale9Enabled(true);
        this._imgFont.setCapInsets(cc.rect(69, 57, 15, 31));
        ck.UIUtils.setWidthPercent(this._imgFont, 0.95);
        this._imgFont.setContentSize(cc.size(this._imgFont.width, 730.483));
        this._imgFont.setTouchEnabled(false);

        ///// # _layoutHeader
        this._layoutHeader = new ccui.Layout();
        this._layoutHeader.setName("_layoutHeader");
        this._layoutPopup.addChild(this._layoutHeader);
        this._layoutHeader.setCascadeOpacityEnabled(true);
        this._layoutHeader.setCascadeColorEnabled(true);
        this._layoutHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutHeader, 0.5, 1);
        let _layoutHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHeader);
        _layoutHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _layoutHeaderLayoutComponent.setPositionPercentX(0.5);
        _layoutHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _layoutHeaderLayoutComponent.setPositionPercentY(1);
        this._layoutHeader.setTouchEnabled(false);
        this._layoutHeader.setUnifySizeEnabled(false);
        this._layoutHeader.ignoreContentAdaptWithSize(false);
        this._layoutHeader.setContentSize(cc.size(385.5069, 139.95));

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._layoutHeader.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 0.5);
        this._imgHeader.setRotation(-0.1547);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(0.5);
        _imgHeaderLayoutComponent.setPercentWidthEnabled(true);
        _imgHeaderLayoutComponent.setPercentWidth(0.8975);
        _imgHeaderLayoutComponent.setPercentHeightEnabled(true);
        _imgHeaderLayoutComponent.setPercentHeight(0.6002);
        this._imgHeader.loadTexture("basics/popup/HeaderBlue.png", 1);
        this._imgHeader.setUnifySizeEnabled(false);
        this._imgHeader.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgHeader, 0.8975, 0.6002);
        this._imgHeader.setTouchEnabled(false);

        ///// # _txtHeader
        this._txtHeader = new ck.Text();
        this._txtHeader.setName("_txtHeader");
        this._layoutHeader.addChild(this._txtHeader);
        this._txtHeader.setCascadeOpacityEnabled(true);
        this._txtHeader.setCascadeColorEnabled(true);
        this._txtHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHeader, 0.5, 0.5286);
        this._txtHeader.setTextColor(cc.color(255, 252, 225, 255));
        let _txtHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHeader);
        _txtHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentX(0.5);
        _txtHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentY(0.5286);
        this._txtHeader.setTouchEnabled(false);
        this._txtHeader.ignoreContentAdaptWithSize(true);
        this._txtHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHeader.setDefaultFontSize(55);
        this._txtHeader.setString(gm.localize.getText("TXT_QUEST"));
        this._txtHeader.setTextHorizontalAlignment(1);
        this._txtHeader.setTextVerticalAlignment(1);
        this._txtHeader.enableOutline(cc.color(155, 68, 38, 255), 2);
        this._txtHeader.enableShadow(cc.color(155, 68, 38, 255), cc.size(0, -2), 0);

        ///// # _listViewQuests
        this._listViewQuests = new ccui.ListView();
        this._listViewQuests.setName("_listViewQuests");
        this._layoutPopup.addChild(this._listViewQuests);
        this._listViewQuests.setCascadeOpacityEnabled(true);
        this._listViewQuests.setCascadeColorEnabled(true);
        this._listViewQuests.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._listViewQuests, 0.5, 0.4988);
        let _listViewQuestsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._listViewQuests);
        _listViewQuestsLayoutComponent.setPositionPercentXEnabled(true);
        _listViewQuestsLayoutComponent.setPositionPercentX(0.5);
        _listViewQuestsLayoutComponent.setPositionPercentYEnabled(true);
        _listViewQuestsLayoutComponent.setPositionPercentY(0.4988);
        _listViewQuestsLayoutComponent.setPercentHeightEnabled(true);
        _listViewQuestsLayoutComponent.setPercentHeight(0.7435);
        this._listViewQuests.setTouchEnabled(true);
        this._listViewQuests.setUnifySizeEnabled(false);
        this._listViewQuests.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this._listViewQuests, 0.7435);
        this._listViewQuests.setContentSize(cc.size(527.4664, this._listViewQuests.height));
        this._listViewQuests.setDirection(ccui.ScrollView.DIR_VERTICAL);
        this._listViewQuests.setGravity(ccui.ListView.GRAVITY_CENTER_HORIZONTAL);
        this._listViewQuests.setItemsMargin(5);
        this._listViewQuests.setBounceEnabled(true);

        ///// # _txtRefreshTime
        this._txtRefreshTime = new ck.Text();
        this._txtRefreshTime.setName("_txtRefreshTime");
        this._layoutPopup.addChild(this._txtRefreshTime);
        this._txtRefreshTime.setCascadeOpacityEnabled(true);
        this._txtRefreshTime.setCascadeColorEnabled(true);
        this._txtRefreshTime.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRefreshTime, 0.5, 0.914);
        this._txtRefreshTime.setTextColor(cc.color(134, 96, 69, 255));
        let _txtRefreshTimeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRefreshTime);
        _txtRefreshTimeLayoutComponent.setPositionPercentXEnabled(true);
        _txtRefreshTimeLayoutComponent.setPositionPercentX(0.5);
        _txtRefreshTimeLayoutComponent.setPositionPercentYEnabled(true);
        _txtRefreshTimeLayoutComponent.setPositionPercentY(0.914);
        this._txtRefreshTime.setTouchEnabled(false);
        this._txtRefreshTime.ignoreContentAdaptWithSize(true);
        this._txtRefreshTime.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtRefreshTime.setDefaultFontSize(30);
        this._txtRefreshTime.setTextHorizontalAlignment(1);
        this._txtRefreshTime.setTextVerticalAlignment(1);

        ///// # _layoutRefresh
        this._layoutRefresh = new ccui.Layout();
        this._layoutRefresh.setName("_layoutRefresh");
        this._layoutPopup.addChild(this._layoutRefresh);
        this._layoutRefresh.setCascadeOpacityEnabled(true);
        this._layoutRefresh.setCascadeColorEnabled(true);
        this._layoutRefresh.setAnchorPoint(cc.p(0.5026, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutRefresh, 0.8247, 0.9125);
        let _layoutRefreshLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRefresh);
        _layoutRefreshLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRefreshLayoutComponent.setPositionPercentX(0.8247);
        _layoutRefreshLayoutComponent.setPositionPercentYEnabled(true);
        _layoutRefreshLayoutComponent.setPositionPercentY(0.9125);
        this._layoutRefresh.setTouchEnabled(true);
        this._layoutRefresh.setUnifySizeEnabled(false);
        this._layoutRefresh.ignoreContentAdaptWithSize(false);
        this._layoutRefresh.setContentSize(cc.size(139.02, 52));
        this._layoutRefresh.setClippingEnabled(true);

        ///// # _imgRefresh
        this._imgRefresh = new ccui.ImageView();
        this._imgRefresh.setName("_imgRefresh");
        this._layoutRefresh.addChild(this._imgRefresh);
        this._imgRefresh.setCascadeOpacityEnabled(true);
        this._imgRefresh.setCascadeColorEnabled(true);
        this._imgRefresh.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRefresh, 0.5, 0.5);
        let _imgRefreshLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRefresh);
        _imgRefreshLayoutComponent.setPositionPercentXEnabled(true);
        _imgRefreshLayoutComponent.setPositionPercentX(0.5);
        _imgRefreshLayoutComponent.setPositionPercentYEnabled(true);
        _imgRefreshLayoutComponent.setPositionPercentY(0.5);
        _imgRefreshLayoutComponent.setPercentWidthEnabled(true);
        _imgRefreshLayoutComponent.setPercentWidth(0.9063);
        _imgRefreshLayoutComponent.setPercentHeightEnabled(true);
        _imgRefreshLayoutComponent.setPercentHeight(1);
        this._imgRefresh.loadTexture("buttons/rectangles/BlueSmall.png", 1);
        this._imgRefresh.setUnifySizeEnabled(false);
        this._imgRefresh.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgRefresh, 0.9063, 1);
        this._imgRefresh.setTouchEnabled(false);

        ///// # _txtRefresh
        this._txtRefresh = new ck.Text();
        this._txtRefresh.setName("_txtRefresh");
        this._layoutRefresh.addChild(this._txtRefresh);
        this._txtRefresh.setCascadeOpacityEnabled(true);
        this._txtRefresh.setCascadeColorEnabled(true);
        this._txtRefresh.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRefresh, 0.3405, 0.55);
        let _txtRefreshLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRefresh);
        _txtRefreshLayoutComponent.setPositionPercentXEnabled(true);
        _txtRefreshLayoutComponent.setPositionPercentX(0.3405);
        _txtRefreshLayoutComponent.setPositionPercentYEnabled(true);
        _txtRefreshLayoutComponent.setPositionPercentY(0.55);
        this._txtRefresh.setTouchEnabled(false);
        this._txtRefresh.ignoreContentAdaptWithSize(true);
        this._txtRefresh.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtRefresh.setDefaultFontSize(23);
        this._txtRefresh.setString(gm.localize.getText("TXT_REFRESH"));
        this._txtRefresh.setTextHorizontalAlignment(1);
        this._txtRefresh.setTextVerticalAlignment(1);
        this._txtRefresh.enableOutline(cc.color(53, 79, 202, 255), 2);

        ///// # _txtRefreshCost
        this._txtRefreshCost = new ck.Text();
        this._txtRefreshCost.setName("_txtRefreshCost");
        this._layoutRefresh.addChild(this._txtRefreshCost);
        this._txtRefreshCost.setCascadeOpacityEnabled(true);
        this._txtRefreshCost.setCascadeColorEnabled(true);
        this._txtRefreshCost.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRefreshCost, 0.6511, 0.55);
        let _txtRefreshCostLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRefreshCost);
        _txtRefreshCostLayoutComponent.setPositionPercentXEnabled(true);
        _txtRefreshCostLayoutComponent.setPositionPercentX(0.6511);
        _txtRefreshCostLayoutComponent.setPositionPercentYEnabled(true);
        _txtRefreshCostLayoutComponent.setPositionPercentY(0.55);
        this._txtRefreshCost.setTouchEnabled(false);
        this._txtRefreshCost.ignoreContentAdaptWithSize(true);
        this._txtRefreshCost.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtRefreshCost.setDefaultFontSize(23);
        this._txtRefreshCost.setTextHorizontalAlignment(1);
        this._txtRefreshCost.setTextVerticalAlignment(1);
        this._txtRefreshCost.enableOutline(cc.color(53, 79, 202, 255), 1);

        ///// # _imgRefreshGem
        this._imgRefreshGem = new ccui.ImageView();
        this._imgRefreshGem.setName("_imgRefreshGem");
        this._layoutRefresh.addChild(this._imgRefreshGem);
        this._imgRefreshGem.setCascadeOpacityEnabled(true);
        this._imgRefreshGem.setCascadeColorEnabled(true);
        this._imgRefreshGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRefreshGem, 0.8354, 0.55);
        let _imgRefreshGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRefreshGem);
        _imgRefreshGemLayoutComponent.setPositionPercentXEnabled(true);
        _imgRefreshGemLayoutComponent.setPositionPercentX(0.8354);
        _imgRefreshGemLayoutComponent.setPositionPercentYEnabled(true);
        _imgRefreshGemLayoutComponent.setPositionPercentY(0.55);
        this._imgRefreshGem.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgRefreshGem.setUnifySizeEnabled(false);
        this._imgRefreshGem.ignoreContentAdaptWithSize(false);
        this._imgRefreshGem.setContentSize(cc.size(30, 30));
        this._imgRefreshGem.setTouchEnabled(false);

        ///// # _layoutClose
        this._layoutClose = new ccui.Layout();
        this._layoutClose.setName("_layoutClose");
        this._layoutPopup.addChild(this._layoutClose);
        this._layoutClose.setCascadeOpacityEnabled(true);
        this._layoutClose.setCascadeColorEnabled(true);
        this._layoutClose.setAnchorPoint(cc.p(0.5026, 0.5236));
        ck.UIUtils.setPositionPercent(this._layoutClose, 0.98, 0.98);
        let _layoutCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutClose);
        _layoutCloseLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentX(0.98);
        _layoutCloseLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentY(0.98);
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
        ck.UIUtils.setPositionPercent(this._imgClose, 0.5, 0.6896);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.5);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.6896);
        _imgCloseLayoutComponent.setPercentWidthEnabled(true);
        _imgCloseLayoutComponent.setPercentWidth(1.0267);
        _imgCloseLayoutComponent.setPercentHeightEnabled(true);
        _imgCloseLayoutComponent.setPercentHeight(1.0667);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgClose, 1.0267, 1.0667);
        this._imgClose.setTouchEnabled(false);

        ///// # _layoutMilestone
        this._layoutMilestone = new ccui.Layout();
        this._layoutMilestone.setName("_layoutMilestone");
        this._layoutPopup.addChild(this._layoutMilestone);
        this._layoutMilestone.setCascadeOpacityEnabled(true);
        this._layoutMilestone.setCascadeColorEnabled(true);
        this._layoutMilestone.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutMilestone, 0.5, 0.0553);
        let _layoutMilestoneLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutMilestone);
        _layoutMilestoneLayoutComponent.setPositionPercentXEnabled(true);
        _layoutMilestoneLayoutComponent.setPositionPercentX(0.5);
        _layoutMilestoneLayoutComponent.setPositionPercentYEnabled(true);
        _layoutMilestoneLayoutComponent.setPositionPercentY(0.0553);
        this._layoutMilestone.setTouchEnabled(true);
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
        ck.UIUtils.setPositionPercent(this._imgMilestoneBgr, 0, 0.5);
        this._imgMilestoneBgr.setColor(cc.color(59, 161, 192, 255));
        let _imgMilestoneBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgMilestoneBgr);
        _imgMilestoneBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgMilestoneBgrLayoutComponent.setPositionPercentX(0);
        _imgMilestoneBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgMilestoneBgrLayoutComponent.setPositionPercentY(0.5);
        _imgMilestoneBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgMilestoneBgrLayoutComponent.setPercentWidth(0.95);
        this._imgMilestoneBgr.loadTexture("basics/bars/Bar_01.png", 1);
        this._imgMilestoneBgr.setUnifySizeEnabled(false);
        this._imgMilestoneBgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._imgMilestoneBgr, 0.95);
        this._imgMilestoneBgr.setContentSize(cc.size(this._imgMilestoneBgr.width, 17));
        this._imgMilestoneBgr.setTouchEnabled(false);

        ///// # _loadingBarMilestone
        this._loadingBarMilestone = new ck.LoadingBar();
        this._loadingBarMilestone.setName("_loadingBarMilestone");
        this._layoutMilestone.addChild(this._loadingBarMilestone);
        this._loadingBarMilestone.setCascadeOpacityEnabled(true);
        this._loadingBarMilestone.setCascadeColorEnabled(true);
        this._loadingBarMilestone.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._loadingBarMilestone, 0, 0.5);
        this._loadingBarMilestone.setColor(cc.color(255, 247, 145, 255));
        let _loadingBarMilestoneLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._loadingBarMilestone);
        _loadingBarMilestoneLayoutComponent.setPositionPercentXEnabled(true);
        _loadingBarMilestoneLayoutComponent.setPositionPercentX(0);
        _loadingBarMilestoneLayoutComponent.setPositionPercentYEnabled(true);
        _loadingBarMilestoneLayoutComponent.setPositionPercentY(0.5);
        _loadingBarMilestoneLayoutComponent.setPercentWidthEnabled(true);
        _loadingBarMilestoneLayoutComponent.setPercentWidth(0.95);
        this._loadingBarMilestone.setTouchEnabled(false);
        this._loadingBarMilestone.setUnifySizeEnabled(false);
        this._loadingBarMilestone.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._loadingBarMilestone, 0.95);
        this._loadingBarMilestone.setContentSize(cc.size(this._loadingBarMilestone.width, 10));
        this._loadingBarMilestone.loadTexture("basics/bars/Bar_02.png", 1);

        ///// # _txtMilestone
        this._txtMilestone = new ck.Text();
        this._txtMilestone.setName("_txtMilestone");
        this._layoutMilestone.addChild(this._txtMilestone);
        this._txtMilestone.setCascadeOpacityEnabled(true);
        this._txtMilestone.setCascadeColorEnabled(true);
        this._txtMilestone.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMilestone, 0.5, 0.55);
        this._txtMilestone.setTextColor(cc.color(255, 255, 156, 255));
        let _txtMilestoneLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMilestone);
        _txtMilestoneLayoutComponent.setPositionPercentXEnabled(true);
        _txtMilestoneLayoutComponent.setPositionPercentX(0.5);
        this._txtMilestone.setTouchEnabled(false);
        this._txtMilestone.ignoreContentAdaptWithSize(true);
        this._txtMilestone.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtMilestone.setDefaultFontSize(30);
        this._txtMilestone.setTextHorizontalAlignment(1);
        this._txtMilestone.setTextVerticalAlignment(1);
        this._txtMilestone.enableOutline(cc.color(74, 48, 0, 255), 2);

        ///// # _txtMilestoneDescription
        this._txtMilestoneDescription = new ck.Text();
        this._txtMilestoneDescription.setName("_txtMilestoneDescription");
        this._layoutMilestone.addChild(this._txtMilestoneDescription);
        this._txtMilestoneDescription.setCascadeOpacityEnabled(true);
        this._txtMilestoneDescription.setCascadeColorEnabled(true);
        this._txtMilestoneDescription.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMilestoneDescription, 0.5, 2.35);
        let _txtMilestoneDescriptionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMilestoneDescription);
        _txtMilestoneDescriptionLayoutComponent.setPositionPercentXEnabled(true);
        _txtMilestoneDescriptionLayoutComponent.setPositionPercentX(0.5);
        this._txtMilestoneDescription.setTouchEnabled(false);
        this._txtMilestoneDescription.ignoreContentAdaptWithSize(true);
        this._txtMilestoneDescription.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMilestoneDescription.setDefaultFontSize(23);
        this._txtMilestoneDescription.setString(gm.localize.getText("TXT_QUEST_MILESTONE_HINT"));
        this._txtMilestoneDescription.setTextHorizontalAlignment(1);
        this._txtMilestoneDescription.setTextVerticalAlignment(1);
        this._txtMilestoneDescription.enableOutline(cc.color(61, 30, 0, 255), 1);

        ///// # _gridViewMilestoneRewards
        this._gridViewMilestoneRewards = new ck.GridViewVertical();
        this._gridViewMilestoneRewards.setName("_gridViewMilestoneRewards");
        this._layoutMilestone.addChild(this._gridViewMilestoneRewards);
        this._gridViewMilestoneRewards.setCascadeOpacityEnabled(true);
        this._gridViewMilestoneRewards.setCascadeColorEnabled(true);
        this._gridViewMilestoneRewards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridViewMilestoneRewards, 0.9424, 1.0432);
        let _gridViewMilestoneRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewMilestoneRewards);
        _gridViewMilestoneRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _gridViewMilestoneRewardsLayoutComponent.setPositionPercentX(0.9424);
        _gridViewMilestoneRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _gridViewMilestoneRewardsLayoutComponent.setPositionPercentY(1.0432);

        ///// # _layoutInfo
        this._layoutInfo = new ccui.Layout();
        this._layoutInfo.setName("_layoutInfo");
        this._layoutPopup.addChild(this._layoutInfo);
        this._layoutInfo.setCascadeOpacityEnabled(true);
        this._layoutInfo.setCascadeColorEnabled(true);
        this._layoutInfo.setAnchorPoint(cc.p(0.5026, 0.5236));
        ck.UIUtils.setPositionPercent(this._layoutInfo, 0.1, 0.914);
        let _layoutInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInfo);
        _layoutInfoLayoutComponent.setPositionPercentXEnabled(true);
        _layoutInfoLayoutComponent.setPositionPercentX(0.1);
        _layoutInfoLayoutComponent.setPositionPercentYEnabled(true);
        _layoutInfoLayoutComponent.setPositionPercentY(0.914);
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
        ck.UIUtils.setPositionPercent(this._layoutInfoHint, 0.1025, 0.8983);
        let _layoutInfoHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInfoHint);
        _layoutInfoHintLayoutComponent.setPositionPercentXEnabled(true);
        _layoutInfoHintLayoutComponent.setPositionPercentX(0.1025);
        _layoutInfoHintLayoutComponent.setPositionPercentYEnabled(true);
        _layoutInfoHintLayoutComponent.setPositionPercentY(0.8983);
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
        ck.UIUtils.setPositionPercent(this._txtInfo, 0.5, 0.4572);
        let _txtInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtInfo);
        _txtInfoLayoutComponent.setPositionPercentXEnabled(true);
        _txtInfoLayoutComponent.setPositionPercentX(0.5);
        _txtInfoLayoutComponent.setPositionPercentYEnabled(true);
        _txtInfoLayoutComponent.setPositionPercentY(0.4572);
        this._txtInfo.setTouchEnabled(false);
        this._txtInfo.setUnifySizeEnabled(false);
        this._txtInfo.ignoreContentAdaptWithSize(false);
        this._txtInfo.setContentSize(cc.size(318.535, 146.335));
        this._txtInfo.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtInfo.setDefaultFontSize(25);
        this._txtInfo.setString(gm.localize.getText("TXT_QUEST_HINT"));
        this._txtInfo.setTextHorizontalAlignment(1);
        this._txtInfo.setTextVerticalAlignment(1);
        this._txtInfo.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutFinished
        this._layoutFinished = new ccui.Layout();
        this._layoutFinished.setName("_layoutFinished");
        this._layoutPopup.addChild(this._layoutFinished);
        this._layoutFinished.setCascadeOpacityEnabled(true);
        this._layoutFinished.setCascadeColorEnabled(true);
        this._layoutFinished.setAnchorPoint(cc.p(0.5026, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutFinished, 0.5, 0.5);
        let _layoutFinishedLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutFinished);
        _layoutFinishedLayoutComponent.setPositionPercentXEnabled(true);
        _layoutFinishedLayoutComponent.setPositionPercentX(0.5);
        _layoutFinishedLayoutComponent.setPositionPercentYEnabled(true);
        _layoutFinishedLayoutComponent.setPositionPercentY(0.5);
        this._layoutFinished.setTouchEnabled(true);
        this._layoutFinished.setUnifySizeEnabled(false);
        this._layoutFinished.ignoreContentAdaptWithSize(false);
        this._layoutFinished.setContentSize(cc.size(461.9028, 550.5341));
        this._layoutFinished.setClippingEnabled(true);

        ///// # _imgEmo
        this._imgEmo = new ccui.ImageView();
        this._imgEmo.setName("_imgEmo");
        this._layoutFinished.addChild(this._imgEmo);
        this._imgEmo.setCascadeOpacityEnabled(true);
        this._imgEmo.setCascadeColorEnabled(true);
        this._imgEmo.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgEmo, 0.5, 0.77);
        let _imgEmoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgEmo);
        _imgEmoLayoutComponent.setPositionPercentXEnabled(true);
        _imgEmoLayoutComponent.setPositionPercentX(0.5);
        _imgEmoLayoutComponent.setPositionPercentYEnabled(true);
        _imgEmoLayoutComponent.setPositionPercentY(0.77);
        _imgEmoLayoutComponent.setPercentWidthEnabled(true);
        _imgEmoLayoutComponent.setPercentWidth(0.1884);
        _imgEmoLayoutComponent.setPercentHeightEnabled(true);
        _imgEmoLayoutComponent.setPercentHeight(0.2434);
        this._imgEmo.loadTexture("emoticons/Emo_Girl_01.png", 1);
        this._imgEmo.setUnifySizeEnabled(false);
        this._imgEmo.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgEmo, 0.1884, 0.2434);
        this._imgEmo.setTouchEnabled(false);

        ///// # _txtCongrats
        this._txtCongrats = new ck.Text();
        this._txtCongrats.setName("_txtCongrats");
        this._layoutFinished.addChild(this._txtCongrats);
        this._txtCongrats.setCascadeOpacityEnabled(true);
        this._txtCongrats.setCascadeColorEnabled(true);
        this._txtCongrats.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._txtCongrats, 0.5, 0.6379);
        this._txtCongrats.setTextColor(cc.color(58, 48, 48, 255));
        let _txtCongratsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCongrats);
        _txtCongratsLayoutComponent.setPositionPercentXEnabled(true);
        _txtCongratsLayoutComponent.setPositionPercentX(0.5);
        _txtCongratsLayoutComponent.setPositionPercentYEnabled(true);
        _txtCongratsLayoutComponent.setPositionPercentY(0.6379);
        _txtCongratsLayoutComponent.setPercentWidthEnabled(true);
        _txtCongratsLayoutComponent.setPercentWidth(1);
        this._txtCongrats.setTouchEnabled(false);
        this._txtCongrats.setUnifySizeEnabled(false);
        this._txtCongrats.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtCongrats, 1);
        this._txtCongrats.setContentSize(cc.size(this._txtCongrats.width, 137.0623));
        this._txtCongrats.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCongrats.setDefaultFontSize(30);
        this._txtCongrats.setString(gm.localize.getText("TXT_EXELLENT!_YOU_HAVE_COMPLETED_ALL_QUEST."));
        this._txtCongrats.setTextHorizontalAlignment(1);
        this._txtCongrats.setTextVerticalAlignment(0);
        this._txtCongrats.autoFitMultipleLine();

        ///// # _layoutRenew
        this._layoutRenew = new ccui.Layout();
        this._layoutRenew.setName("_layoutRenew");
        this._layoutFinished.addChild(this._layoutRenew);
        this._layoutRenew.setCascadeOpacityEnabled(true);
        this._layoutRenew.setCascadeColorEnabled(true);
        this._layoutRenew.setAnchorPoint(cc.p(0.5026, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutRenew, 0.5042, 0.3929);
        let _layoutRenewLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRenew);
        _layoutRenewLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRenewLayoutComponent.setPositionPercentX(0.5042);
        _layoutRenewLayoutComponent.setPositionPercentYEnabled(true);
        _layoutRenewLayoutComponent.setPositionPercentY(0.3929);
        this._layoutRenew.setTouchEnabled(true);
        this._layoutRenew.setUnifySizeEnabled(false);
        this._layoutRenew.ignoreContentAdaptWithSize(false);
        this._layoutRenew.setContentSize(cc.size(179, 82));
        this._layoutRenew.setClippingEnabled(true);

        ///// # _imgRenew
        this._imgRenew = new ccui.ImageView();
        this._imgRenew.setName("_imgRenew");
        this._layoutRenew.addChild(this._imgRenew);
        this._imgRenew.setCascadeOpacityEnabled(true);
        this._imgRenew.setCascadeColorEnabled(true);
        this._imgRenew.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRenew, 0.5, 0.5);
        let _imgRenewLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRenew);
        _imgRenewLayoutComponent.setPositionPercentXEnabled(true);
        _imgRenewLayoutComponent.setPositionPercentX(0.5);
        _imgRenewLayoutComponent.setPositionPercentYEnabled(true);
        _imgRenewLayoutComponent.setPositionPercentY(0.5);
        _imgRenewLayoutComponent.setPercentWidthEnabled(true);
        _imgRenewLayoutComponent.setPercentWidth(1);
        _imgRenewLayoutComponent.setPercentHeightEnabled(true);
        _imgRenewLayoutComponent.setPercentHeight(1);
        this._imgRenew.loadTexture("buttons/rectangles/BlueSmall.png", 1);
        this._imgRenew.setUnifySizeEnabled(false);
        this._imgRenew.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgRenew, 1, 1);
        this._imgRenew.setTouchEnabled(false);

        ///// # _txtRenew
        this._txtRenew = new ck.Text();
        this._txtRenew.setName("_txtRenew");
        this._layoutRenew.addChild(this._txtRenew);
        this._txtRenew.setCascadeOpacityEnabled(true);
        this._txtRenew.setCascadeColorEnabled(true);
        this._txtRenew.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRenew, 0.2846, 0.55);
        let _txtRenewLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRenew);
        _txtRenewLayoutComponent.setPositionPercentXEnabled(true);
        _txtRenewLayoutComponent.setPositionPercentX(0.2846);
        _txtRenewLayoutComponent.setPositionPercentYEnabled(true);
        _txtRenewLayoutComponent.setPositionPercentY(0.55);
        this._txtRenew.setTouchEnabled(false);
        this._txtRenew.ignoreContentAdaptWithSize(true);
        this._txtRenew.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtRenew.setDefaultFontSize(30);
        this._txtRenew.setString(gm.localize.getText("TXT_REFRESH"));
        this._txtRenew.setTextHorizontalAlignment(1);
        this._txtRenew.setTextVerticalAlignment(1);
        this._txtRenew.enableOutline(cc.color(53, 79, 202, 255), 2);

        ///// # _txtRenewCost
        this._txtRenewCost = new ck.Text();
        this._txtRenewCost.setName("_txtRenewCost");
        this._layoutRenew.addChild(this._txtRenewCost);
        this._txtRenewCost.setCascadeOpacityEnabled(true);
        this._txtRenewCost.setCascadeColorEnabled(true);
        this._txtRenewCost.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRenewCost, 0.6288, 0.55);
        let _txtRenewCostLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRenewCost);
        _txtRenewCostLayoutComponent.setPositionPercentXEnabled(true);
        _txtRenewCostLayoutComponent.setPositionPercentX(0.6288);
        _txtRenewCostLayoutComponent.setPositionPercentYEnabled(true);
        _txtRenewCostLayoutComponent.setPositionPercentY(0.55);
        this._txtRenewCost.setTouchEnabled(false);
        this._txtRenewCost.ignoreContentAdaptWithSize(true);
        this._txtRenewCost.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtRenewCost.setDefaultFontSize(33);
        this._txtRenewCost.setTextHorizontalAlignment(1);
        this._txtRenewCost.setTextVerticalAlignment(1);
        this._txtRenewCost.enableOutline(cc.color(53, 79, 202, 255), 1);

        ///// # _imgRenewGem
        this._imgRenewGem = new ccui.ImageView();
        this._imgRenewGem.setName("_imgRenewGem");
        this._layoutRenew.addChild(this._imgRenewGem);
        this._imgRenewGem.setCascadeOpacityEnabled(true);
        this._imgRenewGem.setCascadeColorEnabled(true);
        this._imgRenewGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRenewGem, 0.8354, 0.55);
        let _imgRenewGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRenewGem);
        _imgRenewGemLayoutComponent.setPositionPercentXEnabled(true);
        _imgRenewGemLayoutComponent.setPositionPercentX(0.8354);
        _imgRenewGemLayoutComponent.setPositionPercentYEnabled(true);
        _imgRenewGemLayoutComponent.setPositionPercentY(0.55);
        this._imgRenewGem.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgRenewGem.setUnifySizeEnabled(false);
        this._imgRenewGem.ignoreContentAdaptWithSize(false);
        this._imgRenewGem.setContentSize(cc.size(50, 50));
        this._imgRenewGem.setTouchEnabled(false);

    },



});

/**
 * Create QuestPopup
 * @returns {_ccs.QuestPopup}
 */
_ccs.QuestPopup.create = function () {
    return new _ccs.QuestPopup();
};
