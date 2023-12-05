/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.HomeLayer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.HomeLayer = cc.Layer.extend({

    /** @type {HomeBackground} */
    _background: null,
    /** @type {ccui.Layout} */
    _widgetProfile: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundProfile: null,
    /** @type {ccui.Layout} */
    _layoutCoin: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundCoin: null,
    /** @type {ccui.ImageView} */
    _imgCoinIcon: null,
    /** @type {ck.Text} */
    _txtCoin: null,
    /** @type {ccui.Button} */
    _btnAddCoin: null,
    /** @type {ccui.Layout} */
    _layoutGem: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundGem: null,
    /** @type {ccui.ImageView} */
    _imgGemIcon: null,
    /** @type {ck.Text} */
    _txtGem: null,
    /** @type {ccui.Button} */
    _btnAddGem: null,
    /** @type {ccui.Layout} */
    _layoutItem: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundItem: null,
    /** @type {ccui.ImageView} */
    _imgItemIcon: null,
    /** @type {ck.Text} */
    _txtItem: null,
    /** @type {ccui.Button} */
    _btnAddItem: null,
    /** @type {ccui.Layout} */
    _layoutShield: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundShield: null,
    /** @type {ccui.ImageView} */
    _imgShield: null,
    /** @type {ck.Text} */
    _txtShield: null,
    /** @type {ccui.Button} */
    _btnAddShield: null,
    /** @type {Avatar} */
    _avatarNode: null,
    /** @type {ccui.Layout} */
    _layoutLevel: null,
    /** @type {ccui.ImageView} */
    _imgLevelBgr: null,
    /** @type {ck.LoadingBar} */
    _loadingBarLevel: null,
    /** @type {ck.Text} */
    _txtLevel: null,
    /** @type {ck.Text} */
    _txtPlayerName: null,
    /** @type {ck.Text} */
    _txtID: null,
    /** @type {ccui.Layout} */
    _layoutSetting: null,
    /** @type {ccui.ImageView} */
    _imgSetting: null,
    /** @type {cc.Node} */
    _nodeMainButtons: null,
    /** @type {SlotThreeButtonWidget} */
    _btnSlot3: null,
    /** @type {PinballButtonWidget} */
    _btnPinball: null,
    /** @type {ck.GridViewVertical} */
    _gridViewOtherMiniGames: null,
    /** @type {ccui.Layout} */
    _layoutTutorial: null,
    /** @type {ccui.Layout} */
    _layoutPlay: null,
    /** @type {ccui.Layout} */
    _layoutBetChannel: null,
    /** @type {ccui.ImageView} */
    _imgBetChannelBgr: null,
    /** @type {ccui.PageView} */
    _pageViewBetChannels: null,
    /** @type {ccui.Layout} */
    _btnBetChannelLeft: null,
    /** @type {ccui.ImageView} */
    _imgBetChannelLeft: null,
    /** @type {ccui.Layout} */
    _btnBetChannelRight: null,
    /** @type {ccui.ImageView} */
    _imgBetChannelRight: null,
    /** @type {ItemFactorTip} */
    _itemFactorTip: null,
    /** @type {ccui.ImageView} */
    _imgBot: null,
    /** @type {ccui.ImageView} */
    _imgShopBgr: null,
    /** @type {MailboxIcon} */
    _iconMailbox: null,
    /** @type {FreeGiftIcon} */
    _iconFreeGift: null,
    /** @type {FriendIcon} */
    _iconFriend: null,
    /** @type {QuestIcon} */
    _iconQuest: null,
    /** @type {ShopIcon} */
    _iconShop: null,
    /** @type {cc.Node} */
    _nodeBigBetHint: null,
    /** @type {Hand} */
    _handBigBetHint: null,
    /** @type {ccui.Layout} */
    _layoutGuideTip: null,
    /** @type {ck.Text} */
    _txtGuideTip: null,
    /** @type {ccui.Layout} */
    _layoutHighlightOtherMiniGames: null,
    /** @type {ccui.ImageView} */
    _btnSurvey: null,
    /** @type {ccui.ImageView} */
    _imgHowToPlay: null,
    /** @type {ck.Text} */
    _txtHowToPlay: null,
    /** @type {ck.OfferIconGrid} */
    _gridOfferIcons: null,
    /** @type {ck.GridViewHorizontal} */
    _gridViewRight: null,
    /** @type {cc.Node} */
    _nodeGuideHint: null,
    /** @type {Hand} */
    _handHowToPlay: null,
    /** @type {ccui.Layout} */
    _layoutGuideTip: null,
    /** @type {ck.Text} */
    _txtGuideTip: null,
    /** @type {cc.Node} */
    _portalFoxPosition: null,
    /** @type {cc.Node} */
    _nodeTrophyProgress: null,


    /**
     * _ccs.HomeLayer constructor
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

        ///// # _background
        this._background = new HomeBackground();
        this._background.setName("_background");
        this.addChild(this._background);
        this._background.setCascadeOpacityEnabled(true);
        this._background.setCascadeColorEnabled(true);
        let _backgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._background);
        _backgroundLayoutComponent.setPercentWidthEnabled(true);
        _backgroundLayoutComponent.setPercentWidth(1);
        _backgroundLayoutComponent.setPercentHeightEnabled(true);
        _backgroundLayoutComponent.setPercentHeight(1);

        ///// # _widgetProfile
        this._widgetProfile = new ccui.Layout();
        this._widgetProfile.setName("_widgetProfile");
        this.addChild(this._widgetProfile);
        this._widgetProfile.setCascadeOpacityEnabled(true);
        this._widgetProfile.setCascadeColorEnabled(true);
        this._widgetProfile.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._widgetProfile, 0.5017, 0.9274);
        let _widgetProfileLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._widgetProfile);
        _widgetProfileLayoutComponent.setPositionPercentXEnabled(true);
        _widgetProfileLayoutComponent.setPositionPercentX(0.5017);
        _widgetProfileLayoutComponent.setPositionPercentYEnabled(true);
        _widgetProfileLayoutComponent.setPositionPercentY(0.9274);
        this._widgetProfile.setTouchEnabled(true);
        this._widgetProfile.setUnifySizeEnabled(false);
        this._widgetProfile.ignoreContentAdaptWithSize(false);
        this._widgetProfile.setContentSize(cc.size(600, 136.85));

        ///// # _imgBackgroundProfile
        this._imgBackgroundProfile = new ccui.ImageView();
        this._imgBackgroundProfile.setName("_imgBackgroundProfile");
        this._widgetProfile.addChild(this._imgBackgroundProfile);
        this._imgBackgroundProfile.setCascadeOpacityEnabled(true);
        this._imgBackgroundProfile.setCascadeColorEnabled(true);
        this._imgBackgroundProfile.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._imgBackgroundProfile, 0.1067, 0.9882);
        let _imgBackgroundProfileLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundProfile);
        _imgBackgroundProfileLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundProfileLayoutComponent.setPositionPercentX(0.1067);
        _imgBackgroundProfileLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundProfileLayoutComponent.setPositionPercentY(0.9882);
        this._imgBackgroundProfile.loadTexture("basics/shapes/RoundedRectangle_Black_292x62px.png", 1);
        this._imgBackgroundProfile.setUnifySizeEnabled(false);
        this._imgBackgroundProfile.ignoreContentAdaptWithSize(false);
        this._imgBackgroundProfile.setScale9Enabled(true);
        this._imgBackgroundProfile.setCapInsets(cc.rect(100, 20, 92, 22));
        this._imgBackgroundProfile.setContentSize(cc.size(542, 103));
        this._imgBackgroundProfile.setTouchEnabled(false);

        ///// # _layoutCoin
        this._layoutCoin = new ccui.Layout();
        this._layoutCoin.setName("_layoutCoin");
        this._widgetProfile.addChild(this._layoutCoin);
        this._layoutCoin.setCascadeOpacityEnabled(true);
        this._layoutCoin.setCascadeColorEnabled(true);
        this._layoutCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCoin, 0.4237, 0.7858);
        let _layoutCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCoin);
        _layoutCoinLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentX(0.4237);
        _layoutCoinLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentY(0.7858);
        this._layoutCoin.setTouchEnabled(true);
        this._layoutCoin.setUnifySizeEnabled(false);
        this._layoutCoin.ignoreContentAdaptWithSize(false);
        this._layoutCoin.setContentSize(cc.size(230, 47));

        ///// # _imgBackgroundCoin
        this._imgBackgroundCoin = new ccui.ImageView();
        this._imgBackgroundCoin.setName("_imgBackgroundCoin");
        this._layoutCoin.addChild(this._imgBackgroundCoin);
        this._imgBackgroundCoin.setCascadeOpacityEnabled(true);
        this._imgBackgroundCoin.setCascadeColorEnabled(true);
        this._imgBackgroundCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundCoin, 0.5, 0.5);
        let _imgBackgroundCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundCoin);
        _imgBackgroundCoinLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundCoinLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundCoinLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundCoinLayoutComponent.setPositionPercentY(0.5);
        this._imgBackgroundCoin.loadTexture("home/CurrencyBox.png", 1);
        this._imgBackgroundCoin.setUnifySizeEnabled(false);
        this._imgBackgroundCoin.ignoreContentAdaptWithSize(false);
        this._imgBackgroundCoin.setScale9Enabled(true);
        this._imgBackgroundCoin.setCapInsets(cc.rect(53, 8, 55, 9));
        this._imgBackgroundCoin.setContentSize(cc.size(200, 39.4751));
        this._imgBackgroundCoin.setTouchEnabled(false);

        ///// # _imgCoinIcon
        this._imgCoinIcon = new ccui.ImageView();
        this._imgCoinIcon.setName("_imgCoinIcon");
        this._layoutCoin.addChild(this._imgCoinIcon);
        this._imgCoinIcon.setCascadeOpacityEnabled(true);
        this._imgCoinIcon.setCascadeColorEnabled(true);
        this._imgCoinIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCoinIcon, 0.09, 0.55);
        let _imgCoinIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCoinIcon);
        _imgCoinIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgCoinIconLayoutComponent.setPositionPercentX(0.09);
        _imgCoinIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgCoinIconLayoutComponent.setPositionPercentY(0.55);
        this._imgCoinIcon.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgCoinIcon.setUnifySizeEnabled(false);
        this._imgCoinIcon.ignoreContentAdaptWithSize(false);
        this._imgCoinIcon.setContentSize(cc.size(50, 50));
        this._imgCoinIcon.setTouchEnabled(false);

        ///// # _txtCoin
        this._txtCoin = new ck.Text();
        this._txtCoin.setName("_txtCoin");
        this._layoutCoin.addChild(this._txtCoin);
        this._txtCoin.setCascadeOpacityEnabled(true);
        this._txtCoin.setCascadeColorEnabled(true);
        this._txtCoin.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCoin, 0.814, 0.5);
        this._txtCoin.setTextColor(cc.color(247, 204, 89, 255));
        let _txtCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCoin);
        _txtCoinLayoutComponent.setPositionPercentXEnabled(true);
        _txtCoinLayoutComponent.setPositionPercentX(0.814);
        _txtCoinLayoutComponent.setPositionPercentYEnabled(true);
        _txtCoinLayoutComponent.setPositionPercentY(0.5);
        this._txtCoin.setTouchEnabled(false);
        this._txtCoin.setUnifySizeEnabled(false);
        this._txtCoin.ignoreContentAdaptWithSize(false);
        this._txtCoin.setContentSize(cc.size(145, 32));
        this._txtCoin.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCoin.setDefaultFontSize(28);
        this._txtCoin.setTextHorizontalAlignment(2);
        this._txtCoin.setTextVerticalAlignment(1);
        this._txtCoin.autoFitSingleLine();

        ///// # _btnAddCoin
        this._btnAddCoin = new ccui.Button();
        this._btnAddCoin.setName("_btnAddCoin");
        this._layoutCoin.addChild(this._btnAddCoin);
        this._btnAddCoin.setCascadeOpacityEnabled(true);
        this._btnAddCoin.setCascadeColorEnabled(true);
        this._btnAddCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAddCoin, 0.915, 0.46);
        let _btnAddCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddCoin);
        _btnAddCoinLayoutComponent.setPositionPercentXEnabled(true);
        _btnAddCoinLayoutComponent.setPositionPercentX(0.915);
        _btnAddCoinLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddCoinLayoutComponent.setPositionPercentY(0.46);
        this._btnAddCoin.loadTextureDisabled("buttons/rectangles/Add.png", 1);
        this._btnAddCoin.loadTexturePressed("buttons/rectangles/Add.png", 1);
        this._btnAddCoin.loadTextureNormal("buttons/rectangles/Add.png", 1);
        this._btnAddCoin.setUnifySizeEnabled(false);
        this._btnAddCoin.ignoreContentAdaptWithSize(false);
        this._btnAddCoin.setContentSize(cc.size(38, 38));
        this._btnAddCoin.setTouchEnabled(true);

        ///// # _layoutGem
        this._layoutGem = new ccui.Layout();
        this._layoutGem.setName("_layoutGem");
        this._widgetProfile.addChild(this._layoutGem);
        this._layoutGem.setCascadeOpacityEnabled(true);
        this._layoutGem.setCascadeColorEnabled(true);
        this._layoutGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutGem, 0.4237, 0.4362);
        let _layoutGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGem);
        _layoutGemLayoutComponent.setPositionPercentXEnabled(true);
        _layoutGemLayoutComponent.setPositionPercentX(0.4237);
        _layoutGemLayoutComponent.setPositionPercentYEnabled(true);
        _layoutGemLayoutComponent.setPositionPercentY(0.4362);
        this._layoutGem.setTouchEnabled(true);
        this._layoutGem.setUnifySizeEnabled(false);
        this._layoutGem.ignoreContentAdaptWithSize(false);
        this._layoutGem.setContentSize(cc.size(230, 47));

        ///// # _imgBackgroundGem
        this._imgBackgroundGem = new ccui.ImageView();
        this._imgBackgroundGem.setName("_imgBackgroundGem");
        this._layoutGem.addChild(this._imgBackgroundGem);
        this._imgBackgroundGem.setCascadeOpacityEnabled(true);
        this._imgBackgroundGem.setCascadeColorEnabled(true);
        this._imgBackgroundGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundGem, 0.5, 0.5);
        let _imgBackgroundGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundGem);
        _imgBackgroundGemLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundGemLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundGemLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundGemLayoutComponent.setPositionPercentY(0.5);
        this._imgBackgroundGem.loadTexture("home/CurrencyBox.png", 1);
        this._imgBackgroundGem.setUnifySizeEnabled(false);
        this._imgBackgroundGem.ignoreContentAdaptWithSize(false);
        this._imgBackgroundGem.setScale9Enabled(true);
        this._imgBackgroundGem.setCapInsets(cc.rect(53, 8, 55, 9));
        this._imgBackgroundGem.setContentSize(cc.size(200, 39.4751));
        this._imgBackgroundGem.setTouchEnabled(false);

        ///// # _imgGemIcon
        this._imgGemIcon = new ccui.ImageView();
        this._imgGemIcon.setName("_imgGemIcon");
        this._layoutGem.addChild(this._imgGemIcon);
        this._imgGemIcon.setCascadeOpacityEnabled(true);
        this._imgGemIcon.setCascadeColorEnabled(true);
        this._imgGemIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGemIcon, 0.09, 0.55);
        let _imgGemIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGemIcon);
        _imgGemIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgGemIconLayoutComponent.setPositionPercentX(0.09);
        _imgGemIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgGemIconLayoutComponent.setPositionPercentY(0.55);
        this._imgGemIcon.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgGemIcon.setUnifySizeEnabled(false);
        this._imgGemIcon.ignoreContentAdaptWithSize(false);
        this._imgGemIcon.setContentSize(cc.size(50, 50));
        this._imgGemIcon.setTouchEnabled(false);

        ///// # _txtGem
        this._txtGem = new ck.Text();
        this._txtGem.setName("_txtGem");
        this._layoutGem.addChild(this._txtGem);
        this._txtGem.setCascadeOpacityEnabled(true);
        this._txtGem.setCascadeColorEnabled(true);
        this._txtGem.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGem, 0.814, 0.5);
        this._txtGem.setTextColor(cc.color(224, 129, 255, 255));
        let _txtGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGem);
        _txtGemLayoutComponent.setPositionPercentXEnabled(true);
        _txtGemLayoutComponent.setPositionPercentX(0.814);
        _txtGemLayoutComponent.setPositionPercentYEnabled(true);
        _txtGemLayoutComponent.setPositionPercentY(0.5);
        this._txtGem.setTouchEnabled(false);
        this._txtGem.setUnifySizeEnabled(false);
        this._txtGem.ignoreContentAdaptWithSize(false);
        this._txtGem.setContentSize(cc.size(145, 32));
        this._txtGem.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGem.setDefaultFontSize(28);
        this._txtGem.setTextHorizontalAlignment(2);
        this._txtGem.setTextVerticalAlignment(1);
        this._txtGem.autoFitSingleLine();

        ///// # _btnAddGem
        this._btnAddGem = new ccui.Button();
        this._btnAddGem.setName("_btnAddGem");
        this._layoutGem.addChild(this._btnAddGem);
        this._btnAddGem.setCascadeOpacityEnabled(true);
        this._btnAddGem.setCascadeColorEnabled(true);
        this._btnAddGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAddGem, 0.915, 0.46);
        let _btnAddGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddGem);
        _btnAddGemLayoutComponent.setPositionPercentXEnabled(true);
        _btnAddGemLayoutComponent.setPositionPercentX(0.915);
        _btnAddGemLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddGemLayoutComponent.setPositionPercentY(0.46);
        this._btnAddGem.loadTextureDisabled("buttons/rectangles/Add.png", 1);
        this._btnAddGem.loadTexturePressed("buttons/rectangles/Add.png", 1);
        this._btnAddGem.loadTextureNormal("buttons/rectangles/Add.png", 1);
        this._btnAddGem.setUnifySizeEnabled(false);
        this._btnAddGem.ignoreContentAdaptWithSize(false);
        this._btnAddGem.setContentSize(cc.size(38, 38));
        this._btnAddGem.setTouchEnabled(true);

        ///// # _layoutItem
        this._layoutItem = new ccui.Layout();
        this._layoutItem.setName("_layoutItem");
        this._widgetProfile.addChild(this._layoutItem);
        this._layoutItem.setCascadeOpacityEnabled(true);
        this._layoutItem.setCascadeColorEnabled(true);
        this._layoutItem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutItem, 0.8158, 0.7858);
        let _layoutItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutItem);
        _layoutItemLayoutComponent.setPositionPercentXEnabled(true);
        _layoutItemLayoutComponent.setPositionPercentX(0.8158);
        _layoutItemLayoutComponent.setPositionPercentYEnabled(true);
        _layoutItemLayoutComponent.setPositionPercentY(0.7858);
        this._layoutItem.setTouchEnabled(true);
        this._layoutItem.setUnifySizeEnabled(false);
        this._layoutItem.ignoreContentAdaptWithSize(false);
        this._layoutItem.setContentSize(cc.size(214, 47));

        ///// # _imgBackgroundItem
        this._imgBackgroundItem = new ccui.ImageView();
        this._imgBackgroundItem.setName("_imgBackgroundItem");
        this._layoutItem.addChild(this._imgBackgroundItem);
        this._imgBackgroundItem.setCascadeOpacityEnabled(true);
        this._imgBackgroundItem.setCascadeColorEnabled(true);
        this._imgBackgroundItem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundItem, 0.5, 0.5);
        let _imgBackgroundItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundItem);
        _imgBackgroundItemLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundItemLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundItemLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundItemLayoutComponent.setPositionPercentY(0.5);
        this._imgBackgroundItem.loadTexture("home/CurrencyBox.png", 1);
        this._imgBackgroundItem.setUnifySizeEnabled(false);
        this._imgBackgroundItem.ignoreContentAdaptWithSize(false);
        this._imgBackgroundItem.setScale9Enabled(true);
        this._imgBackgroundItem.setCapInsets(cc.rect(53, 8, 55, 9));
        this._imgBackgroundItem.setContentSize(cc.size(200, 39.4751));
        this._imgBackgroundItem.setTouchEnabled(false);

        ///// # _imgItemIcon
        this._imgItemIcon = new ccui.ImageView();
        this._imgItemIcon.setName("_imgItemIcon");
        this._layoutItem.addChild(this._imgItemIcon);
        this._imgItemIcon.setCascadeOpacityEnabled(true);
        this._imgItemIcon.setCascadeColorEnabled(true);
        this._imgItemIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgItemIcon, 0.09, 0.5);
        let _imgItemIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgItemIcon);
        _imgItemIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgItemIconLayoutComponent.setPositionPercentX(0.09);
        _imgItemIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgItemIconLayoutComponent.setPositionPercentY(0.5);
        this._imgItemIcon.loadTexture("icons/color/items/Item.png", 1);
        this._imgItemIcon.setUnifySizeEnabled(false);
        this._imgItemIcon.ignoreContentAdaptWithSize(false);
        this._imgItemIcon.setContentSize(cc.size(37, 37));
        this._imgItemIcon.setTouchEnabled(false);

        ///// # _txtItem
        this._txtItem = new ck.Text();
        this._txtItem.setName("_txtItem");
        this._layoutItem.addChild(this._txtItem);
        this._txtItem.setCascadeOpacityEnabled(true);
        this._txtItem.setCascadeColorEnabled(true);
        this._txtItem.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtItem, 0.814, 0.5);
        this._txtItem.setOpacity(229);
        this._txtItem.setTextColor(cc.color(203, 188, 188, 255));
        let _txtItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtItem);
        _txtItemLayoutComponent.setPositionPercentXEnabled(true);
        _txtItemLayoutComponent.setPositionPercentX(0.814);
        _txtItemLayoutComponent.setPositionPercentYEnabled(true);
        _txtItemLayoutComponent.setPositionPercentY(0.5);
        this._txtItem.setTouchEnabled(false);
        this._txtItem.setUnifySizeEnabled(false);
        this._txtItem.ignoreContentAdaptWithSize(false);
        this._txtItem.setContentSize(cc.size(130, 32));
        this._txtItem.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtItem.setDefaultFontSize(28);
        this._txtItem.setTextHorizontalAlignment(2);
        this._txtItem.setTextVerticalAlignment(1);
        this._txtItem.autoFitSingleLine();

        ///// # _btnAddItem
        this._btnAddItem = new ccui.Button();
        this._btnAddItem.setName("_btnAddItem");
        this._layoutItem.addChild(this._btnAddItem);
        this._btnAddItem.setCascadeOpacityEnabled(true);
        this._btnAddItem.setCascadeColorEnabled(true);
        this._btnAddItem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAddItem, 0.915, 0.46);
        let _btnAddItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddItem);
        _btnAddItemLayoutComponent.setPositionPercentXEnabled(true);
        _btnAddItemLayoutComponent.setPositionPercentX(0.915);
        _btnAddItemLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddItemLayoutComponent.setPositionPercentY(0.46);
        this._btnAddItem.loadTextureDisabled("buttons/rectangles/Add.png", 1);
        this._btnAddItem.loadTexturePressed("buttons/rectangles/Add.png", 1);
        this._btnAddItem.loadTextureNormal("buttons/rectangles/Add.png", 1);
        this._btnAddItem.setUnifySizeEnabled(false);
        this._btnAddItem.ignoreContentAdaptWithSize(false);
        this._btnAddItem.setContentSize(cc.size(38, 38));
        this._btnAddItem.setTouchEnabled(true);

        ///// # _layoutShield
        this._layoutShield = new ccui.Layout();
        this._layoutShield.setName("_layoutShield");
        this._widgetProfile.addChild(this._layoutShield);
        this._layoutShield.setCascadeOpacityEnabled(true);
        this._layoutShield.setCascadeColorEnabled(true);
        this._layoutShield.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutShield, 0.8158, 0.4362);
        let _layoutShieldLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutShield);
        _layoutShieldLayoutComponent.setPositionPercentXEnabled(true);
        _layoutShieldLayoutComponent.setPositionPercentX(0.8158);
        _layoutShieldLayoutComponent.setPositionPercentYEnabled(true);
        _layoutShieldLayoutComponent.setPositionPercentY(0.4362);
        this._layoutShield.setTouchEnabled(true);
        this._layoutShield.setUnifySizeEnabled(false);
        this._layoutShield.ignoreContentAdaptWithSize(false);
        this._layoutShield.setContentSize(cc.size(214, 47));

        ///// # _imgBackgroundShield
        this._imgBackgroundShield = new ccui.ImageView();
        this._imgBackgroundShield.setName("_imgBackgroundShield");
        this._layoutShield.addChild(this._imgBackgroundShield);
        this._imgBackgroundShield.setCascadeOpacityEnabled(true);
        this._imgBackgroundShield.setCascadeColorEnabled(true);
        this._imgBackgroundShield.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundShield, 0.5, 0.5);
        let _imgBackgroundShieldLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundShield);
        _imgBackgroundShieldLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundShieldLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundShieldLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundShieldLayoutComponent.setPositionPercentY(0.5);
        this._imgBackgroundShield.loadTexture("home/CurrencyBox.png", 1);
        this._imgBackgroundShield.setUnifySizeEnabled(false);
        this._imgBackgroundShield.ignoreContentAdaptWithSize(false);
        this._imgBackgroundShield.setScale9Enabled(true);
        this._imgBackgroundShield.setCapInsets(cc.rect(53, 8, 55, 9));
        this._imgBackgroundShield.setContentSize(cc.size(200, 39.4751));
        this._imgBackgroundShield.setTouchEnabled(false);

        ///// # _imgShield
        this._imgShield = new ccui.ImageView();
        this._imgShield.setName("_imgShield");
        this._layoutShield.addChild(this._imgShield);
        this._imgShield.setCascadeOpacityEnabled(true);
        this._imgShield.setCascadeColorEnabled(true);
        this._imgShield.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgShield, 0.09, 0.5);
        let _imgShieldLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgShield);
        _imgShieldLayoutComponent.setPositionPercentXEnabled(true);
        _imgShieldLayoutComponent.setPositionPercentX(0.09);
        _imgShieldLayoutComponent.setPositionPercentYEnabled(true);
        _imgShieldLayoutComponent.setPositionPercentY(0.5);
        this._imgShield.loadTexture("icons/color/items/ShieldNoBorder.png", 1);
        this._imgShield.setUnifySizeEnabled(false);
        this._imgShield.ignoreContentAdaptWithSize(false);
        this._imgShield.setContentSize(cc.size(40, 40));
        this._imgShield.setTouchEnabled(false);

        ///// # _txtShield
        this._txtShield = new ck.Text();
        this._txtShield.setName("_txtShield");
        this._layoutShield.addChild(this._txtShield);
        this._txtShield.setCascadeOpacityEnabled(true);
        this._txtShield.setCascadeColorEnabled(true);
        this._txtShield.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtShield, 0.814, 0.5);
        this._txtShield.setOpacity(229);
        this._txtShield.setTextColor(cc.color(203, 188, 188, 255));
        let _txtShieldLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtShield);
        _txtShieldLayoutComponent.setPositionPercentXEnabled(true);
        _txtShieldLayoutComponent.setPositionPercentX(0.814);
        _txtShieldLayoutComponent.setPositionPercentYEnabled(true);
        _txtShieldLayoutComponent.setPositionPercentY(0.5);
        this._txtShield.setTouchEnabled(false);
        this._txtShield.setUnifySizeEnabled(false);
        this._txtShield.ignoreContentAdaptWithSize(false);
        this._txtShield.setContentSize(cc.size(130, 32));
        this._txtShield.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtShield.setDefaultFontSize(28);
        this._txtShield.setTextHorizontalAlignment(2);
        this._txtShield.setTextVerticalAlignment(1);
        this._txtShield.autoFitSingleLine();

        ///// # _btnAddShield
        this._btnAddShield = new ccui.Button();
        this._btnAddShield.setName("_btnAddShield");
        this._layoutShield.addChild(this._btnAddShield);
        this._btnAddShield.setCascadeOpacityEnabled(true);
        this._btnAddShield.setCascadeColorEnabled(true);
        this._btnAddShield.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAddShield, 0.915, 0.46);
        let _btnAddShieldLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddShield);
        _btnAddShieldLayoutComponent.setPositionPercentXEnabled(true);
        _btnAddShieldLayoutComponent.setPositionPercentX(0.915);
        _btnAddShieldLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddShieldLayoutComponent.setPositionPercentY(0.46);
        this._btnAddShield.loadTextureDisabled("buttons/rectangles/Add.png", 1);
        this._btnAddShield.loadTexturePressed("buttons/rectangles/Add.png", 1);
        this._btnAddShield.loadTextureNormal("buttons/rectangles/Add.png", 1);
        this._btnAddShield.setUnifySizeEnabled(false);
        this._btnAddShield.ignoreContentAdaptWithSize(false);
        this._btnAddShield.setContentSize(cc.size(38, 38));
        this._btnAddShield.setTouchEnabled(true);

        ///// # _avatarNode
        this._avatarNode = new Avatar(ck.AvatarType.CIRCLE);
        this._avatarNode.setName("_avatarNode");
        this._widgetProfile.addChild(this._avatarNode);
        this._avatarNode.setCascadeOpacityEnabled(true);
        this._avatarNode.setCascadeColorEnabled(true);
        this._avatarNode.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._avatarNode, 0.1083, 0.5416);
        let _avatarNodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._avatarNode);
        _avatarNodeLayoutComponent.setPositionPercentXEnabled(true);
        _avatarNodeLayoutComponent.setPositionPercentX(0.1083);
        _avatarNodeLayoutComponent.setPositionPercentYEnabled(true);
        _avatarNodeLayoutComponent.setPositionPercentY(0.5416);
        this._avatarNode.setWidth(128);

        ///// # _layoutLevel
        this._layoutLevel = new ccui.Layout();
        this._layoutLevel.setName("_layoutLevel");
        this._widgetProfile.addChild(this._layoutLevel);
        this._layoutLevel.setCascadeOpacityEnabled(true);
        this._layoutLevel.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutLevel, 0.0515, -0.0565);
        let _layoutLevelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLevel);
        _layoutLevelLayoutComponent.setPositionPercentXEnabled(true);
        _layoutLevelLayoutComponent.setPositionPercentX(0.0515);
        _layoutLevelLayoutComponent.setPositionPercentYEnabled(true);
        _layoutLevelLayoutComponent.setPositionPercentY(-0.0565);
        this._layoutLevel.setTouchEnabled(false);
        this._layoutLevel.setUnifySizeEnabled(false);
        this._layoutLevel.ignoreContentAdaptWithSize(false);
        this._layoutLevel.setContentSize(cc.size(68.3405, 41.1895));

        ///// # _imgLevelBgr
        this._imgLevelBgr = new ccui.ImageView();
        this._imgLevelBgr.setName("_imgLevelBgr");
        this._layoutLevel.addChild(this._imgLevelBgr);
        this._imgLevelBgr.setCascadeOpacityEnabled(true);
        this._imgLevelBgr.setCascadeColorEnabled(true);
        this._imgLevelBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLevelBgr, 0.5, 0.474);
        let _imgLevelBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLevelBgr);
        _imgLevelBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgLevelBgrLayoutComponent.setPositionPercentX(0.5);
        _imgLevelBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgLevelBgrLayoutComponent.setPositionPercentY(0.474);
        _imgLevelBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgLevelBgrLayoutComponent.setPercentWidth(1.1331);
        _imgLevelBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgLevelBgrLayoutComponent.setPercentHeight(1);
        this._imgLevelBgr.loadTexture("home/LevelBox.png", 1);
        this._imgLevelBgr.setUnifySizeEnabled(false);
        this._imgLevelBgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgLevelBgr, 1.1331, 1);
        this._imgLevelBgr.setTouchEnabled(false);

        ///// # _loadingBarLevel
        this._loadingBarLevel = new ck.LoadingBar();
        this._loadingBarLevel.setName("_loadingBarLevel");
        this._layoutLevel.addChild(this._loadingBarLevel);
        this._loadingBarLevel.setCascadeOpacityEnabled(true);
        this._loadingBarLevel.setCascadeColorEnabled(true);
        this._loadingBarLevel.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._loadingBarLevel, 0.5, 0.5157);
        let _loadingBarLevelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._loadingBarLevel);
        _loadingBarLevelLayoutComponent.setPositionPercentXEnabled(true);
        _loadingBarLevelLayoutComponent.setPositionPercentX(0.5);
        _loadingBarLevelLayoutComponent.setPositionPercentYEnabled(true);
        _loadingBarLevelLayoutComponent.setPositionPercentY(0.5157);
        _loadingBarLevelLayoutComponent.setPercentWidthEnabled(true);
        _loadingBarLevelLayoutComponent.setPercentWidth(0.9621);
        _loadingBarLevelLayoutComponent.setPercentHeightEnabled(true);
        _loadingBarLevelLayoutComponent.setPercentHeight(0.7512);
        this._loadingBarLevel.setTouchEnabled(false);
        this._loadingBarLevel.setUnifySizeEnabled(false);
        this._loadingBarLevel.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._loadingBarLevel, 0.9621, 0.7512);
        this._loadingBarLevel.loadTexture("basics/bars/Bar_17.png", 1);

        ///// # _txtLevel
        this._txtLevel = new ck.Text();
        this._txtLevel.setName("_txtLevel");
        this._layoutLevel.addChild(this._txtLevel);
        this._txtLevel.setCascadeOpacityEnabled(true);
        this._txtLevel.setCascadeColorEnabled(true);
        this._txtLevel.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLevel, 0.5, 0.5215);
        let _txtLevelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLevel);
        _txtLevelLayoutComponent.setPositionPercentXEnabled(true);
        _txtLevelLayoutComponent.setPositionPercentX(0.5);
        _txtLevelLayoutComponent.setPositionPercentYEnabled(true);
        _txtLevelLayoutComponent.setPositionPercentY(0.5215);
        this._txtLevel.setTouchEnabled(false);
        this._txtLevel.ignoreContentAdaptWithSize(true);
        this._txtLevel.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtLevel.setDefaultFontSize(18);
        this._txtLevel.setTextHorizontalAlignment(1);
        this._txtLevel.setTextVerticalAlignment(1);
        this._txtLevel.enableOutline(cc.color(0, 39, 79, 255), 1);

        ///// # _txtPlayerName
        this._txtPlayerName = new ck.Text();
        this._txtPlayerName.setName("_txtPlayerName");
        this._widgetProfile.addChild(this._txtPlayerName);
        this._txtPlayerName.setCascadeOpacityEnabled(true);
        this._txtPlayerName.setCascadeColorEnabled(true);
        this._txtPlayerName.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPlayerName, 0.2321, 0.1189);
        let _txtPlayerNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPlayerName);
        _txtPlayerNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtPlayerNameLayoutComponent.setPositionPercentX(0.2321);
        _txtPlayerNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtPlayerNameLayoutComponent.setPositionPercentY(0.1189);
        this._txtPlayerName.setTouchEnabled(false);
        this._txtPlayerName.setUnifySizeEnabled(false);
        this._txtPlayerName.ignoreContentAdaptWithSize(false);
        this._txtPlayerName.setContentSize(cc.size(268.7912, 38));
        this._txtPlayerName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtPlayerName.setDefaultFontSize(32);
        this._txtPlayerName.setTextHorizontalAlignment(0);
        this._txtPlayerName.setTextVerticalAlignment(1);
        this._txtPlayerName.enableOutline(cc.color(0, 6, 47, 255), 1);
        this._txtPlayerName.enableShadow(cc.color(0, 6, 47, 255), cc.size(0, -2), 0);
        this._txtPlayerName.autoFitSingleLine();

        ///// # _txtID
        this._txtID = new ck.Text();
        this._txtID.setName("_txtID");
        this._widgetProfile.addChild(this._txtID);
        this._txtID.setCascadeOpacityEnabled(true);
        this._txtID.setCascadeColorEnabled(true);
        this._txtID.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtID, 0.9738, 0.1189);
        let _txtIDLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtID);
        _txtIDLayoutComponent.setPositionPercentXEnabled(true);
        _txtIDLayoutComponent.setPositionPercentX(0.9738);
        _txtIDLayoutComponent.setPositionPercentYEnabled(true);
        _txtIDLayoutComponent.setPositionPercentY(0.1189);
        this._txtID.setTouchEnabled(false);
        this._txtID.setUnifySizeEnabled(false);
        this._txtID.ignoreContentAdaptWithSize(false);
        this._txtID.setContentSize(cc.size(157.1083, 38));
        this._txtID.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtID.setDefaultFontSize(32);
        this._txtID.setTextHorizontalAlignment(2);
        this._txtID.setTextVerticalAlignment(1);
        this._txtID.enableOutline(cc.color(47, 20, 0, 255), 1);
        this._txtID.enableShadow(cc.color(47, 20, 0, 255), cc.size(0, -2), 0);
        this._txtID.autoFitSingleLine();

        ///// # _layoutSetting
        this._layoutSetting = new ccui.Layout();
        this._layoutSetting.setName("_layoutSetting");
        this._widgetProfile.addChild(this._layoutSetting);
        this._layoutSetting.setCascadeOpacityEnabled(true);
        this._layoutSetting.setCascadeColorEnabled(true);
        this._layoutSetting.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutSetting, 0.0162, 0.2746);
        let _layoutSettingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSetting);
        _layoutSettingLayoutComponent.setPositionPercentXEnabled(true);
        _layoutSettingLayoutComponent.setPositionPercentX(0.0162);
        _layoutSettingLayoutComponent.setPositionPercentYEnabled(true);
        _layoutSettingLayoutComponent.setPositionPercentY(0.2746);
        this._layoutSetting.setTouchEnabled(true);
        this._layoutSetting.setUnifySizeEnabled(false);
        this._layoutSetting.ignoreContentAdaptWithSize(false);
        this._layoutSetting.setContentSize(cc.size(55, 55));

        ///// # _imgSetting
        this._imgSetting = new ccui.ImageView();
        this._imgSetting.setName("_imgSetting");
        this._layoutSetting.addChild(this._imgSetting);
        this._imgSetting.setCascadeOpacityEnabled(true);
        this._imgSetting.setCascadeColorEnabled(true);
        this._imgSetting.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgSetting, 0.5, 0.5);
        let _imgSettingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgSetting);
        _imgSettingLayoutComponent.setPositionPercentXEnabled(true);
        _imgSettingLayoutComponent.setPositionPercentX(0.5);
        _imgSettingLayoutComponent.setPositionPercentYEnabled(true);
        _imgSettingLayoutComponent.setPositionPercentY(0.5);
        this._imgSetting.loadTexture("icons/color/basic/Setting.png", 1);
        this._imgSetting.setUnifySizeEnabled(false);
        this._imgSetting.ignoreContentAdaptWithSize(false);
        this._imgSetting.setContentSize(cc.size(40, 40));
        this._imgSetting.setTouchEnabled(false);

        ///// # _nodeMainButtons
        this._nodeMainButtons = new cc.Node();
        this._nodeMainButtons.setName("_nodeMainButtons");
        this.addChild(this._nodeMainButtons);
        this._nodeMainButtons.setCascadeOpacityEnabled(true);
        this._nodeMainButtons.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeMainButtons, 0.5, 0.29);
        let _nodeMainButtonsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeMainButtons);
        _nodeMainButtonsLayoutComponent.setPositionPercentXEnabled(true);
        _nodeMainButtonsLayoutComponent.setPositionPercentX(0.5);
        _nodeMainButtonsLayoutComponent.setPositionPercentYEnabled(true);
        _nodeMainButtonsLayoutComponent.setPositionPercentY(0.29);

        ///// # _btnSlot3
        this._btnSlot3 = new SlotThreeButtonWidget();
        this._btnSlot3.setName("_btnSlot3");
        this._nodeMainButtons.addChild(this._btnSlot3);
        this._btnSlot3.setCascadeOpacityEnabled(true);
        this._btnSlot3.setCascadeColorEnabled(true);
        this._btnSlot3.setPosition(-225, 20);
        let _btnSlot3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnSlot3);

        ///// # _btnPinball
        this._btnPinball = new PinballButtonWidget();
        this._btnPinball.setName("_btnPinball");
        this._nodeMainButtons.addChild(this._btnPinball);
        this._btnPinball.setCascadeOpacityEnabled(true);
        this._btnPinball.setCascadeColorEnabled(true);
        this._btnPinball.setPosition(225, 20);
        let _btnPinballLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnPinball);

        ///// # _gridViewOtherMiniGames
        this._gridViewOtherMiniGames = new ck.GridViewVertical();
        this._gridViewOtherMiniGames.setName("_gridViewOtherMiniGames");
        this.addChild(this._gridViewOtherMiniGames);
        this._gridViewOtherMiniGames.setCascadeOpacityEnabled(true);
        this._gridViewOtherMiniGames.setCascadeColorEnabled(true);
        this._gridViewOtherMiniGames.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridViewOtherMiniGames, 0.5, 0.1409);
        let _gridViewOtherMiniGamesLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewOtherMiniGames);
        _gridViewOtherMiniGamesLayoutComponent.setPositionPercentXEnabled(true);
        _gridViewOtherMiniGamesLayoutComponent.setPositionPercentX(0.5);
        _gridViewOtherMiniGamesLayoutComponent.setPositionPercentYEnabled(true);
        _gridViewOtherMiniGamesLayoutComponent.setPositionPercentY(0.1409);

        ///// # _layoutTutorial
        this._layoutTutorial = new ccui.Layout();
        this._layoutTutorial.setName("_layoutTutorial");
        this.addChild(this._layoutTutorial);
        this._layoutTutorial.setCascadeOpacityEnabled(true);
        this._layoutTutorial.setCascadeColorEnabled(true);
        this._layoutTutorial.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTutorial, 0.5, 0.5);
        let _layoutTutorialLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTutorial);
        _layoutTutorialLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTutorialLayoutComponent.setPositionPercentX(0.5);
        _layoutTutorialLayoutComponent.setPositionPercentYEnabled(true);
        _layoutTutorialLayoutComponent.setPositionPercentY(0.5);
        _layoutTutorialLayoutComponent.setPercentWidthEnabled(true);
        _layoutTutorialLayoutComponent.setPercentWidth(1);
        _layoutTutorialLayoutComponent.setPercentHeightEnabled(true);
        _layoutTutorialLayoutComponent.setPercentHeight(1);
        this._layoutTutorial.setTouchEnabled(true);
        this._layoutTutorial.setUnifySizeEnabled(false);
        this._layoutTutorial.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutTutorial, 1, 1);
        this._layoutTutorial.setBackGroundColorType(1);
        this._layoutTutorial.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutTutorial.setBackGroundColorOpacity(191);

        ///// # _layoutPlay
        this._layoutPlay = new ccui.Layout();
        this._layoutPlay.setName("_layoutPlay");
        this.addChild(this._layoutPlay);
        this._layoutPlay.setCascadeOpacityEnabled(true);
        this._layoutPlay.setCascadeColorEnabled(true);
        this._layoutPlay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutPlay, 0.5, 0.32);
        this._layoutPlay.setScale(0.9, 0.9);
        let _layoutPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPlay);
        _layoutPlayLayoutComponent.setPositionPercentXEnabled(true);
        _layoutPlayLayoutComponent.setPositionPercentX(0.5);
        _layoutPlayLayoutComponent.setPositionPercentYEnabled(true);
        _layoutPlayLayoutComponent.setPositionPercentY(0.32);
        this._layoutPlay.setTouchEnabled(true);
        this._layoutPlay.setUnifySizeEnabled(false);
        this._layoutPlay.ignoreContentAdaptWithSize(false);
        this._layoutPlay.setContentSize(cc.size(270, 296));
        this._layoutPlay.setBackGroundColorType(1);
        this._layoutPlay.setBackGroundColor(cc.color(255, 234, 0, 255));
        this._layoutPlay.setBackGroundColorOpacity(76);

        ///// # _layoutBetChannel
        this._layoutBetChannel = new ccui.Layout();
        this._layoutBetChannel.setName("_layoutBetChannel");
        this._layoutPlay.addChild(this._layoutBetChannel);
        this._layoutBetChannel.setCascadeOpacityEnabled(true);
        this._layoutBetChannel.setCascadeColorEnabled(true);
        this._layoutBetChannel.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBetChannel, 0.5, 0.5214);
        let _layoutBetChannelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBetChannel);
        _layoutBetChannelLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBetChannelLayoutComponent.setPositionPercentX(0.5);
        _layoutBetChannelLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBetChannelLayoutComponent.setPositionPercentY(0.5214);
        this._layoutBetChannel.setTouchEnabled(false);
        this._layoutBetChannel.setUnifySizeEnabled(false);
        this._layoutBetChannel.ignoreContentAdaptWithSize(false);
        this._layoutBetChannel.setContentSize(cc.size(165, 63.4419));

        ///// # _imgBetChannelBgr
        this._imgBetChannelBgr = new ccui.ImageView();
        this._imgBetChannelBgr.setName("_imgBetChannelBgr");
        this._layoutBetChannel.addChild(this._imgBetChannelBgr);
        this._imgBetChannelBgr.setCascadeOpacityEnabled(true);
        this._imgBetChannelBgr.setCascadeColorEnabled(true);
        this._imgBetChannelBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBetChannelBgr, 0.5, 0.5);
        this._imgBetChannelBgr.setOpacity(141);
        let _imgBetChannelBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBetChannelBgr);
        _imgBetChannelBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBetChannelBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBetChannelBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBetChannelBgrLayoutComponent.setPositionPercentY(0.5);
        _imgBetChannelBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgBetChannelBgrLayoutComponent.setPercentWidth(1);
        _imgBetChannelBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgBetChannelBgrLayoutComponent.setPercentHeight(1);
        this._imgBetChannelBgr.loadTexture("home/BetBox.png", 1);
        this._imgBetChannelBgr.setUnifySizeEnabled(false);
        this._imgBetChannelBgr.ignoreContentAdaptWithSize(false);
        this._imgBetChannelBgr.setScale9Enabled(true);
        this._imgBetChannelBgr.setCapInsets(cc.rect(6, 5, 137, 49));
        ck.UIUtils.setSizePercent(this._imgBetChannelBgr, 1, 1);
        this._imgBetChannelBgr.setTouchEnabled(false);

        ///// # _pageViewBetChannels
        this._pageViewBetChannels = new ccui.PageView();
        this._pageViewBetChannels.setName("_pageViewBetChannels");
        this._layoutBetChannel.addChild(this._pageViewBetChannels);
        this._pageViewBetChannels.setCascadeOpacityEnabled(true);
        this._pageViewBetChannels.setCascadeColorEnabled(true);
        this._pageViewBetChannels.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._pageViewBetChannels, 0.5, 0.5);
        let _pageViewBetChannelsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._pageViewBetChannels);
        _pageViewBetChannelsLayoutComponent.setPositionPercentXEnabled(true);
        _pageViewBetChannelsLayoutComponent.setPositionPercentX(0.5);
        _pageViewBetChannelsLayoutComponent.setPositionPercentYEnabled(true);
        _pageViewBetChannelsLayoutComponent.setPositionPercentY(0.5);
        _pageViewBetChannelsLayoutComponent.setPercentWidthEnabled(true);
        _pageViewBetChannelsLayoutComponent.setPercentWidth(1);
        _pageViewBetChannelsLayoutComponent.setPercentHeightEnabled(true);
        _pageViewBetChannelsLayoutComponent.setPercentHeight(1);
        this._pageViewBetChannels.setTouchEnabled(true);
        this._pageViewBetChannels.setUnifySizeEnabled(false);
        this._pageViewBetChannels.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._pageViewBetChannels, 1, 1);

        ///// # _btnBetChannelLeft
        this._btnBetChannelLeft = new ccui.Layout();
        this._btnBetChannelLeft.setName("_btnBetChannelLeft");
        this._layoutBetChannel.addChild(this._btnBetChannelLeft);
        this._btnBetChannelLeft.setCascadeOpacityEnabled(true);
        this._btnBetChannelLeft.setCascadeColorEnabled(true);
        this._btnBetChannelLeft.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._btnBetChannelLeft, -0.0121, 0.5);
        let _btnBetChannelLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnBetChannelLeft);
        _btnBetChannelLeftLayoutComponent.setPositionPercentYEnabled(true);
        _btnBetChannelLeftLayoutComponent.setPositionPercentY(0.5);
        this._btnBetChannelLeft.setTouchEnabled(true);
        this._btnBetChannelLeft.setUnifySizeEnabled(false);
        this._btnBetChannelLeft.ignoreContentAdaptWithSize(false);
        this._btnBetChannelLeft.setContentSize(cc.size(80, 70));

        ///// # _imgBetChannelLeft
        this._imgBetChannelLeft = new ccui.ImageView();
        this._imgBetChannelLeft.setName("_imgBetChannelLeft");
        this._btnBetChannelLeft.addChild(this._imgBetChannelLeft);
        this._imgBetChannelLeft.setCascadeOpacityEnabled(true);
        this._imgBetChannelLeft.setCascadeColorEnabled(true);
        this._imgBetChannelLeft.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBetChannelLeft, 0.95, 0.5);
        let _imgBetChannelLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBetChannelLeft);
        _imgBetChannelLeftLayoutComponent.setPositionPercentXEnabled(true);
        _imgBetChannelLeftLayoutComponent.setPositionPercentX(0.95);
        _imgBetChannelLeftLayoutComponent.setPositionPercentYEnabled(true);
        _imgBetChannelLeftLayoutComponent.setPositionPercentY(0.5);
        this._imgBetChannelLeft.loadTexture("Default/ImageFile.png", 0);
        this._imgBetChannelLeft.setUnifySizeEnabled(false);
        this._imgBetChannelLeft.ignoreContentAdaptWithSize(false);
        this._imgBetChannelLeft.setContentSize(cc.size(48, 50));
        this._imgBetChannelLeft.setTouchEnabled(false);

        ///// # _btnBetChannelRight
        this._btnBetChannelRight = new ccui.Layout();
        this._btnBetChannelRight.setName("_btnBetChannelRight");
        this._layoutBetChannel.addChild(this._btnBetChannelRight);
        this._btnBetChannelRight.setCascadeOpacityEnabled(true);
        this._btnBetChannelRight.setCascadeColorEnabled(true);
        this._btnBetChannelRight.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._btnBetChannelRight, 1.0121, 0.5);
        let _btnBetChannelRightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnBetChannelRight);
        _btnBetChannelRightLayoutComponent.setPositionPercentYEnabled(true);
        _btnBetChannelRightLayoutComponent.setPositionPercentY(0.5);
        this._btnBetChannelRight.setTouchEnabled(true);
        this._btnBetChannelRight.setUnifySizeEnabled(false);
        this._btnBetChannelRight.ignoreContentAdaptWithSize(false);
        this._btnBetChannelRight.setContentSize(cc.size(80, 70));

        ///// # _imgBetChannelRight
        this._imgBetChannelRight = new ccui.ImageView();
        this._imgBetChannelRight.setName("_imgBetChannelRight");
        this._btnBetChannelRight.addChild(this._imgBetChannelRight);
        this._imgBetChannelRight.setCascadeOpacityEnabled(true);
        this._imgBetChannelRight.setCascadeColorEnabled(true);
        this._imgBetChannelRight.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBetChannelRight, 0.05, 0.5);
        this._imgBetChannelRight.setFlippedX(true);
        let _imgBetChannelRightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBetChannelRight);
        _imgBetChannelRightLayoutComponent.setPositionPercentXEnabled(true);
        _imgBetChannelRightLayoutComponent.setPositionPercentX(0.05);
        _imgBetChannelRightLayoutComponent.setPositionPercentYEnabled(true);
        _imgBetChannelRightLayoutComponent.setPositionPercentY(0.5);
        this._imgBetChannelRight.loadTexture("Default/ImageFile.png", 0);
        this._imgBetChannelRight.setUnifySizeEnabled(false);
        this._imgBetChannelRight.ignoreContentAdaptWithSize(false);
        this._imgBetChannelRight.setContentSize(cc.size(48, 50));
        this._imgBetChannelRight.setTouchEnabled(false);
        this._imgBetChannelRight.setFlippedX(true);

        ///// # _itemFactorTip
        this._itemFactorTip = new ItemFactorTip();
        this._itemFactorTip.setName("_itemFactorTip");
        this._layoutPlay.addChild(this._itemFactorTip);
        this._itemFactorTip.setCascadeOpacityEnabled(true);
        this._itemFactorTip.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._itemFactorTip, 0.5, 0.8208);
        let _itemFactorTipLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._itemFactorTip);
        _itemFactorTipLayoutComponent.setPositionPercentXEnabled(true);
        _itemFactorTipLayoutComponent.setPositionPercentX(0.5);

        ///// # _imgBot
        this._imgBot = new ccui.ImageView();
        this._imgBot.setName("_imgBot");
        this.addChild(this._imgBot);
        this._imgBot.setCascadeOpacityEnabled(true);
        this._imgBot.setCascadeColorEnabled(true);
        this._imgBot.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgBot, 0.5, 0);
        let _imgBotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBot);
        _imgBotLayoutComponent.setPositionPercentXEnabled(true);
        _imgBotLayoutComponent.setPositionPercentX(0.5);
        _imgBotLayoutComponent.setPositionPercentYEnabled(true);
        _imgBotLayoutComponent.setPositionPercentY(0);
        _imgBotLayoutComponent.setPercentWidthEnabled(true);
        _imgBotLayoutComponent.setPercentWidth(1);
        _imgBotLayoutComponent.setPercentHeightEnabled(true);
        _imgBotLayoutComponent.setPercentHeight(0.0766);
        this._imgBot.loadTexture("home/MenuBarNormal.png", 1);
        this._imgBot.setUnifySizeEnabled(false);
        this._imgBot.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBot, 1, 0.0766);
        this._imgBot.setTouchEnabled(false);

        ///// # _imgShopBgr
        this._imgShopBgr = new ccui.ImageView();
        this._imgShopBgr.setName("_imgShopBgr");
        this._imgBot.addChild(this._imgShopBgr);
        this._imgShopBgr.setCascadeOpacityEnabled(true);
        this._imgShopBgr.setCascadeColorEnabled(true);
        this._imgShopBgr.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgShopBgr, 1, 0.5);
        let _imgShopBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgShopBgr);
        _imgShopBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgShopBgrLayoutComponent.setPositionPercentX(1);
        _imgShopBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgShopBgrLayoutComponent.setPositionPercentY(0.5);
        _imgShopBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgShopBgrLayoutComponent.setPercentWidth(0.1969);
        _imgShopBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgShopBgrLayoutComponent.setPercentHeight(0.9885);
        this._imgShopBgr.loadTexture("home/MenuBarHighlight.png", 1);
        this._imgShopBgr.setUnifySizeEnabled(false);
        this._imgShopBgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgShopBgr, 0.1969, 0.9885);
        this._imgShopBgr.setTouchEnabled(false);

        ///// # _iconMailbox
        this._iconMailbox = new MailboxIcon();
        this._iconMailbox.setName("_iconMailbox");
        this._imgBot.addChild(this._iconMailbox);
        this._iconMailbox.setCascadeOpacityEnabled(true);
        this._iconMailbox.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._iconMailbox, 0.104, 0.571);
        let _iconMailboxLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._iconMailbox);
        _iconMailboxLayoutComponent.setPositionPercentYEnabled(true);
        _iconMailboxLayoutComponent.setPositionPercentY(0.571);

        ///// # _iconFreeGift
        this._iconFreeGift = new FreeGiftIcon();
        this._iconFreeGift.setName("_iconFreeGift");
        this._imgBot.addChild(this._iconFreeGift);
        this._iconFreeGift.setCascadeOpacityEnabled(true);
        this._iconFreeGift.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._iconFreeGift, 0.3033, 0.569);
        let _iconFreeGiftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._iconFreeGift);
        _iconFreeGiftLayoutComponent.setPositionPercentYEnabled(true);
        _iconFreeGiftLayoutComponent.setPositionPercentY(0.569);

        ///// # _iconFriend
        this._iconFriend = new FriendIcon();
        this._iconFriend.setName("_iconFriend");
        this._imgBot.addChild(this._iconFriend);
        this._iconFriend.setCascadeOpacityEnabled(true);
        this._iconFriend.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._iconFriend, 0.4985, 0.563);
        let _iconFriendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._iconFriend);
        _iconFriendLayoutComponent.setPositionPercentYEnabled(true);
        _iconFriendLayoutComponent.setPositionPercentY(0.563);

        ///// # _iconQuest
        this._iconQuest = new QuestIcon();
        this._iconQuest.setName("_iconQuest");
        this._imgBot.addChild(this._iconQuest);
        this._iconQuest.setCascadeOpacityEnabled(true);
        this._iconQuest.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._iconQuest, 0.6881, 0.5425);
        let _iconQuestLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._iconQuest);
        _iconQuestLayoutComponent.setPositionPercentYEnabled(true);
        _iconQuestLayoutComponent.setPositionPercentY(0.5425);

        ///// # _iconShop
        this._iconShop = new ShopIcon();
        this._iconShop.setName("_iconShop");
        this._imgBot.addChild(this._iconShop);
        this._iconShop.setCascadeOpacityEnabled(true);
        this._iconShop.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._iconShop, 0.9001, 0.7067);
        let _iconShopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._iconShop);
        _iconShopLayoutComponent.setPositionPercentYEnabled(true);
        _iconShopLayoutComponent.setPositionPercentY(0.7067);

        ///// # _nodeBigBetHint
        this._nodeBigBetHint = new cc.Node();
        this._nodeBigBetHint.setName("_nodeBigBetHint");
        this.addChild(this._nodeBigBetHint);
        this._nodeBigBetHint.setCascadeOpacityEnabled(true);
        this._nodeBigBetHint.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeBigBetHint, 0.1516, 0.3037);
        let _nodeBigBetHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeBigBetHint);

        ///// # _handBigBetHint
        this._handBigBetHint = new Hand();
        this._handBigBetHint.setName("_handBigBetHint");
        this._nodeBigBetHint.addChild(this._handBigBetHint);
        this._handBigBetHint.setCascadeOpacityEnabled(true);
        this._handBigBetHint.setCascadeColorEnabled(true);
        this._handBigBetHint.setPosition(0.0002, 0);
        let _handBigBetHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._handBigBetHint);

        ///// # _layoutGuideTip
        this._layoutGuideTip = new ccui.Layout();
        this._layoutGuideTip.setName("_layoutGuideTip");
        this._nodeBigBetHint.addChild(this._layoutGuideTip);
        this._layoutGuideTip.setCascadeOpacityEnabled(true);
        this._layoutGuideTip.setCascadeColorEnabled(true);
        this._layoutGuideTip.setAnchorPoint(cc.p(0.5, 0.5));
        this._layoutGuideTip.setPosition(105.67, -140.68);
        let _layoutGuideTipLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGuideTip);
        this._layoutGuideTip.setTouchEnabled(true);
        this._layoutGuideTip.setUnifySizeEnabled(false);
        this._layoutGuideTip.ignoreContentAdaptWithSize(false);
        this._layoutGuideTip.setContentSize(cc.size(375, 65));
        this._layoutGuideTip.setBackGroundColorType(1);
        this._layoutGuideTip.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutGuideTip.setBackGroundColorOpacity(153);

        ///// # _txtGuideTip
        this._txtGuideTip = new ck.Text();
        this._txtGuideTip.setName("_txtGuideTip");
        this._layoutGuideTip.addChild(this._txtGuideTip);
        this._txtGuideTip.setCascadeOpacityEnabled(true);
        this._txtGuideTip.setCascadeColorEnabled(true);
        this._txtGuideTip.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGuideTip, 0.5, 0.5);
        let _txtGuideTipLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGuideTip);
        _txtGuideTipLayoutComponent.setPositionPercentXEnabled(true);
        _txtGuideTipLayoutComponent.setPositionPercentX(0.5);
        _txtGuideTipLayoutComponent.setPositionPercentYEnabled(true);
        _txtGuideTipLayoutComponent.setPositionPercentY(0.5);
        this._txtGuideTip.setTouchEnabled(false);
        this._txtGuideTip.setUnifySizeEnabled(false);
        this._txtGuideTip.ignoreContentAdaptWithSize(false);
        this._txtGuideTip.setContentSize(cc.size(363, 64));
        this._txtGuideTip.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtGuideTip.setDefaultFontSize(25);
        this._txtGuideTip.setString(gm.localize.getText("TXT_BIG_BET_HINT"));
        this._txtGuideTip.setTextHorizontalAlignment(1);
        this._txtGuideTip.setTextVerticalAlignment(1);
        this._txtGuideTip.enableOutline(cc.color(60, 43, 0, 255), 2);
        this._txtGuideTip.autoFitMultipleLine();

        ///// # _layoutHighlightOtherMiniGames
        this._layoutHighlightOtherMiniGames = new ccui.Layout();
        this._layoutHighlightOtherMiniGames.setName("_layoutHighlightOtherMiniGames");
        this.addChild(this._layoutHighlightOtherMiniGames);
        this._layoutHighlightOtherMiniGames.setCascadeOpacityEnabled(true);
        this._layoutHighlightOtherMiniGames.setCascadeColorEnabled(true);
        this._layoutHighlightOtherMiniGames.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutHighlightOtherMiniGames, 0.5, 0.5);
        let _layoutHighlightOtherMiniGamesLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHighlightOtherMiniGames);
        _layoutHighlightOtherMiniGamesLayoutComponent.setPositionPercentXEnabled(true);
        _layoutHighlightOtherMiniGamesLayoutComponent.setPositionPercentX(0.5);
        _layoutHighlightOtherMiniGamesLayoutComponent.setPositionPercentYEnabled(true);
        _layoutHighlightOtherMiniGamesLayoutComponent.setPositionPercentY(0.5);
        _layoutHighlightOtherMiniGamesLayoutComponent.setPercentWidthEnabled(true);
        _layoutHighlightOtherMiniGamesLayoutComponent.setPercentWidth(1);
        _layoutHighlightOtherMiniGamesLayoutComponent.setPercentHeightEnabled(true);
        _layoutHighlightOtherMiniGamesLayoutComponent.setPercentHeight(1);
        this._layoutHighlightOtherMiniGames.setTouchEnabled(true);
        this._layoutHighlightOtherMiniGames.setUnifySizeEnabled(false);
        this._layoutHighlightOtherMiniGames.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutHighlightOtherMiniGames, 1, 1);
        this._layoutHighlightOtherMiniGames.setBackGroundColorType(1);
        this._layoutHighlightOtherMiniGames.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutHighlightOtherMiniGames.setBackGroundColorOpacity(76);

        ///// # _btnSurvey
        this._btnSurvey = new ccui.ImageView();
        this._btnSurvey.setName("_btnSurvey");
        this.addChild(this._btnSurvey);
        this._btnSurvey.setCascadeOpacityEnabled(true);
        this._btnSurvey.setCascadeColorEnabled(true);
        this._btnSurvey.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnSurvey, 0.2576, 0.813);
        this._btnSurvey.setScale(0.9, 0.9);
        let _btnSurveyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnSurvey);
        _btnSurveyLayoutComponent.setPositionPercentXEnabled(true);
        _btnSurveyLayoutComponent.setPositionPercentX(0.2576);
        _btnSurveyLayoutComponent.setPositionPercentYEnabled(true);
        _btnSurveyLayoutComponent.setPositionPercentY(0.813);
        this._btnSurvey.loadTexture("icons/color/basic/Survey.png", 1);
        this._btnSurvey.setUnifySizeEnabled(false);
        this._btnSurvey.ignoreContentAdaptWithSize(false);
        this._btnSurvey.setContentSize(cc.size(88, 95));
        this._btnSurvey.setTouchEnabled(false);

        ///// # _imgHowToPlay
        this._imgHowToPlay = new ccui.ImageView();
        this._imgHowToPlay.setName("_imgHowToPlay");
        this.addChild(this._imgHowToPlay);
        this._imgHowToPlay.setCascadeOpacityEnabled(true);
        this._imgHowToPlay.setCascadeColorEnabled(true);
        this._imgHowToPlay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHowToPlay, 0.1, 0.818);
        let _imgHowToPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHowToPlay);
        _imgHowToPlayLayoutComponent.setPositionPercentXEnabled(true);
        _imgHowToPlayLayoutComponent.setPositionPercentX(0.1);
        _imgHowToPlayLayoutComponent.setPositionPercentYEnabled(true);
        _imgHowToPlayLayoutComponent.setPositionPercentY(0.818);
        this._imgHowToPlay.loadTexture("icons/color/other/GuideBook.png", 1);
        this._imgHowToPlay.setUnifySizeEnabled(false);
        this._imgHowToPlay.ignoreContentAdaptWithSize(false);
        this._imgHowToPlay.setContentSize(cc.size(90, 90));
        this._imgHowToPlay.setTouchEnabled(false);

        ///// # _txtHowToPlay
        this._txtHowToPlay = new ck.Text();
        this._txtHowToPlay.setName("_txtHowToPlay");
        this._imgHowToPlay.addChild(this._txtHowToPlay);
        this._txtHowToPlay.setCascadeOpacityEnabled(true);
        this._txtHowToPlay.setCascadeColorEnabled(true);
        this._txtHowToPlay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHowToPlay, 0.5, 0.1889);
        let _txtHowToPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHowToPlay);
        _txtHowToPlayLayoutComponent.setPositionPercentXEnabled(true);
        _txtHowToPlayLayoutComponent.setPositionPercentX(0.5);
        _txtHowToPlayLayoutComponent.setPositionPercentYEnabled(true);
        _txtHowToPlayLayoutComponent.setPositionPercentY(0.1889);
        this._txtHowToPlay.setTouchEnabled(false);
        this._txtHowToPlay.ignoreContentAdaptWithSize(true);
        this._txtHowToPlay.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHowToPlay.setDefaultFontSize(25);
        this._txtHowToPlay.setString(gm.localize.getText("TXT_GUIDE"));
        this._txtHowToPlay.setTextHorizontalAlignment(1);
        this._txtHowToPlay.setTextVerticalAlignment(1);
        this._txtHowToPlay.enableOutline(cc.color(60, 43, 0, 255), 2);

        ///// # _gridOfferIcons
        this._gridOfferIcons = new ck.OfferIconGrid();
        this._gridOfferIcons.setName("_gridOfferIcons");
        this.addChild(this._gridOfferIcons);
        this._gridOfferIcons.setCascadeOpacityEnabled(true);
        this._gridOfferIcons.setCascadeColorEnabled(true);
        this._gridOfferIcons.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._gridOfferIcons, 0.1, 0.7656);
        this._gridOfferIcons.setScale(0.8, 0.8);
        let _gridOfferIconsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridOfferIcons);
        _gridOfferIconsLayoutComponent.setPositionPercentXEnabled(true);
        _gridOfferIconsLayoutComponent.setPositionPercentX(0.1);
        _gridOfferIconsLayoutComponent.setPositionPercentYEnabled(true);
        _gridOfferIconsLayoutComponent.setPositionPercentY(0.7656);

        ///// # _gridViewRight
        this._gridViewRight = new ck.GridViewHorizontal();
        this._gridViewRight.setName("_gridViewRight");
        this.addChild(this._gridViewRight);
        this._gridViewRight.setCascadeOpacityEnabled(true);
        this._gridViewRight.setCascadeColorEnabled(true);
        this._gridViewRight.setAnchorPoint(cc.p(1, 1));
        ck.UIUtils.setPositionPercent(this._gridViewRight, 0.9862, 0.8579);
        this._gridViewRight.setScale(0.8, 0.8);
        let _gridViewRightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewRight);
        _gridViewRightLayoutComponent.setPositionPercentXEnabled(true);
        _gridViewRightLayoutComponent.setPositionPercentX(0.9862);
        _gridViewRightLayoutComponent.setPositionPercentYEnabled(true);
        _gridViewRightLayoutComponent.setPositionPercentY(0.8579);

        ///// # _nodeGuideHint
        this._nodeGuideHint = new cc.Node();
        this._nodeGuideHint.setName("_nodeGuideHint");
        this.addChild(this._nodeGuideHint);
        this._nodeGuideHint.setCascadeOpacityEnabled(true);
        this._nodeGuideHint.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeGuideHint, 0.1022, 0.818);
        let _nodeGuideHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeGuideHint);
        _nodeGuideHintLayoutComponent.setPositionPercentXEnabled(true);
        _nodeGuideHintLayoutComponent.setPositionPercentX(0.1022);
        _nodeGuideHintLayoutComponent.setPositionPercentYEnabled(true);
        _nodeGuideHintLayoutComponent.setPositionPercentY(0.818);

        ///// # _handHowToPlay
        this._handHowToPlay = new Hand();
        this._handHowToPlay.setName("_handHowToPlay");
        this._nodeGuideHint.addChild(this._handHowToPlay);
        this._handHowToPlay.setCascadeOpacityEnabled(true);
        this._handHowToPlay.setCascadeColorEnabled(true);
        let _handHowToPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._handHowToPlay);

        ///// # _layoutGuideTip
        this._layoutGuideTip = new ccui.Layout();
        this._layoutGuideTip.setName("_layoutGuideTip");
        this._nodeGuideHint.addChild(this._layoutGuideTip);
        this._layoutGuideTip.setCascadeOpacityEnabled(true);
        this._layoutGuideTip.setCascadeColorEnabled(true);
        this._layoutGuideTip.setAnchorPoint(cc.p(0.5, 0.5));
        this._layoutGuideTip.setPosition(260.716, -29.8716);
        let _layoutGuideTipLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGuideTip);
        this._layoutGuideTip.setTouchEnabled(true);
        this._layoutGuideTip.setUnifySizeEnabled(false);
        this._layoutGuideTip.ignoreContentAdaptWithSize(false);
        this._layoutGuideTip.setContentSize(cc.size(375.29, 65.6825));
        this._layoutGuideTip.setBackGroundColorType(1);
        this._layoutGuideTip.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutGuideTip.setBackGroundColorOpacity(153);

        ///// # _txtGuideTip
        this._txtGuideTip = new ck.Text();
        this._txtGuideTip.setName("_txtGuideTip");
        this._layoutGuideTip.addChild(this._txtGuideTip);
        this._txtGuideTip.setCascadeOpacityEnabled(true);
        this._txtGuideTip.setCascadeColorEnabled(true);
        this._txtGuideTip.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGuideTip, 0.5, 0.5);
        let _txtGuideTipLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGuideTip);
        _txtGuideTipLayoutComponent.setPositionPercentXEnabled(true);
        _txtGuideTipLayoutComponent.setPositionPercentX(0.5);
        _txtGuideTipLayoutComponent.setPositionPercentYEnabled(true);
        _txtGuideTipLayoutComponent.setPositionPercentY(0.5);
        this._txtGuideTip.setTouchEnabled(false);
        this._txtGuideTip.setUnifySizeEnabled(false);
        this._txtGuideTip.ignoreContentAdaptWithSize(false);
        this._txtGuideTip.setContentSize(cc.size(363, 64));
        this._txtGuideTip.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtGuideTip.setDefaultFontSize(25);
        this._txtGuideTip.setString(gm.localize.getText("TXT_GUIDE_HINT"));
        this._txtGuideTip.setTextHorizontalAlignment(1);
        this._txtGuideTip.setTextVerticalAlignment(1);
        this._txtGuideTip.enableOutline(cc.color(60, 43, 0, 255), 2);
        this._txtGuideTip.autoFitMultipleLine();

        ///// # _portalFoxPosition
        this._portalFoxPosition = new cc.Node();
        this._portalFoxPosition.setName("_portalFoxPosition");
        this.addChild(this._portalFoxPosition);
        this._portalFoxPosition.setCascadeOpacityEnabled(true);
        this._portalFoxPosition.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._portalFoxPosition, 0.0641, 0.41);
        let _portalFoxPositionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._portalFoxPosition);
        _portalFoxPositionLayoutComponent.setPositionPercentYEnabled(true);
        _portalFoxPositionLayoutComponent.setPositionPercentY(0.41);

        ///// # _nodeTrophyProgress
        this._nodeTrophyProgress = new cc.Node();
        this._nodeTrophyProgress.setName("_nodeTrophyProgress");
        this.addChild(this._nodeTrophyProgress);
        this._nodeTrophyProgress.setCascadeOpacityEnabled(true);
        this._nodeTrophyProgress.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeTrophyProgress, 0.5, 0.5);
        let _nodeTrophyProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeTrophyProgress);
        _nodeTrophyProgressLayoutComponent.setPositionPercentXEnabled(true);
        _nodeTrophyProgressLayoutComponent.setPositionPercentX(0.5);
        _nodeTrophyProgressLayoutComponent.setPositionPercentYEnabled(true);
        _nodeTrophyProgressLayoutComponent.setPositionPercentY(0.5);

    },



});

/**
 * Create HomeLayer
 * @returns {_ccs.HomeLayer}
 */
_ccs.HomeLayer.create = function () {
    return new _ccs.HomeLayer();
};
