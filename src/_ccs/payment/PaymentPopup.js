/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PaymentPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.PaymentPopup = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ccui.Layout} */
    _layoutMid: null,
    /** @type {ccui.Layout} */
    _layoutBonusItems: null,
    /** @type {cc.Node} */
    _nodeBonusItems: null,
    /** @type {ccui.ImageView} */
    _imgBonusItemsBgr: null,
    /** @type {ccui.ImageView} */
    _imgBonusItemsBgr_0: null,
    /** @type {ck.Text} */
    _txtBonusHint0: null,
    /** @type {ck.GridViewVertical} */
    _gridViewBonusItems: null,
    /** @type {ccui.Layout} */
    _layoutBestValue: null,
    /** @type {ccui.ImageView} */
    _imgBestValueBgr: null,
    /** @type {ck.Text} */
    _txtBestValue: null,
    /** @type {ccui.Layout} */
    _layoutPacks: null,
    /** @type {ck.TabSelector} */
    _tabSelector: null,
    /** @type {ccui.Layout} */
    _layoutWebPay: null,
    /** @type {ccui.ImageView} */
    _webBanner: null,
    /** @type {cc.Sprite} */
    _webpayHeader: null,
    /** @type {cc.Sprite} */
    texts_payment_WebpayUrl_3: null,
    /** @type {ccui.ImageView} */
    _imgWebpayChannel01: null,
    /** @type {ck.Text} */
    _txtWebPayChannel01: null,
    /** @type {ccui.ImageView} */
    _imgLogoWebPayChannel01: null,
    /** @type {ccui.ImageView} */
    _imgWebpayChannel02: null,
    /** @type {ck.Text} */
    _txtWebPayChannel02: null,
    /** @type {ccui.ImageView} */
    _imgLogoWebPayChannel01_0: null,
    /** @type {ccui.ImageView} */
    _imgWebpayChannel03: null,
    /** @type {ck.Text} */
    _txtWebPayChannel03: null,
    /** @type {ccui.ImageView} */
    _imgLogoWebPayChannel01_0_0: null,
    /** @type {ccui.ImageView} */
    _imgWebpayChannel04: null,
    /** @type {ck.Text} */
    _txtWebPayChannel04: null,
    /** @type {ccui.ImageView} */
    _imgLogoWebPayChannel01_0_0_0: null,
    /** @type {ccui.Layout} */
    _layoutHintWebPay: null,
    /** @type {ccui.ImageView} */
    _imgHintWebPayBackground: null,
    /** @type {ck.Text} */
    _txtHintWebPay: null,
    /** @type {ccui.ImageView} */
    _imgWebpayPay: null,
    /** @type {ck.Text} */
    _txtWebpayText: null,
    /** @type {ccui.ImageView} */
    _imgWebpayInputCode: null,
    /** @type {ck.Text} */
    _txtWebpayInputCode: null,
    /** @type {ccui.Layout} */
    _layoutTop: null,
    /** @type {ccui.ImageView} */
    _imgTopBgr: null,
    /** @type {ccui.Layout} */
    _layoutGem: null,
    /** @type {ccui.ImageView} */
    _imgGemIcon: null,
    /** @type {ck.Text} */
    _txtGem: null,
    /** @type {ccui.Button} */
    _btnAddGem: null,
    /** @type {ccui.Layout} */
    _layoutCoin: null,
    /** @type {ccui.ImageView} */
    _imgCoinIcon: null,
    /** @type {ck.Text} */
    _txtCoin: null,
    /** @type {ccui.Button} */
    _btnAddCoin: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.ImageView} */
    imgCloseIcon: null,


    /**
     * _ccs.PaymentPopup constructor
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
            _imgBackgroundLayoutComponent.setPercentHeight(1.0035);
        }
        this._imgBackground.loadTexture("sprites/backgrounds/Login.png", 0);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBackground, 1, 1.0035);
        this._imgBackground.setTouchEnabled(true);
        UIUtils.initFullScreenBackground(this._imgBackground);

        ///// # _layoutMid
        this._layoutMid = new ccui.Layout();
        this._layoutMid.setName("_layoutMid");
        this._root.addChild(this._layoutMid);
        this._layoutMid.setCascadeOpacityEnabled(true);
        this._layoutMid.setCascadeColorEnabled(true);
        this._layoutMid.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutMid, 0.5, 0.9337);
        let _layoutMidLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutMid);
        _layoutMidLayoutComponent.setPositionPercentXEnabled(true);
        _layoutMidLayoutComponent.setPositionPercentX(0.5);
        _layoutMidLayoutComponent.setPositionPercentYEnabled(true);
        _layoutMidLayoutComponent.setPositionPercentY(0.9337);
        _layoutMidLayoutComponent.setPercentWidthEnabled(true);
        _layoutMidLayoutComponent.setPercentWidth(1);
        _layoutMidLayoutComponent.setPercentHeightEnabled(true);
        _layoutMidLayoutComponent.setPercentHeight(0.8657);
        this._layoutMid.setTouchEnabled(false);
        this._layoutMid.setUnifySizeEnabled(false);
        this._layoutMid.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutMid, 1, 0.8657);

        ///// # _layoutBonusItems
        this._layoutBonusItems = new ccui.Layout();
        this._layoutBonusItems.setName("_layoutBonusItems");
        this._layoutMid.addChild(this._layoutBonusItems);
        this._layoutBonusItems.setCascadeOpacityEnabled(true);
        this._layoutBonusItems.setCascadeColorEnabled(true);
        this._layoutBonusItems.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutBonusItems, 0.5, 1);
        let _layoutBonusItemsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBonusItems);
        _layoutBonusItemsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBonusItemsLayoutComponent.setPositionPercentX(0.5);
        _layoutBonusItemsLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBonusItemsLayoutComponent.setPositionPercentY(1);
        _layoutBonusItemsLayoutComponent.setPercentWidthEnabled(true);
        _layoutBonusItemsLayoutComponent.setPercentWidth(1);
        _layoutBonusItemsLayoutComponent.setPercentHeightEnabled(true);
        _layoutBonusItemsLayoutComponent.setPercentHeight(0.25);
        this._layoutBonusItems.setTouchEnabled(false);
        this._layoutBonusItems.setUnifySizeEnabled(false);
        this._layoutBonusItems.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBonusItems, 1, 0.25);

        ///// # _nodeBonusItems
        this._nodeBonusItems = new cc.Node();
        this._nodeBonusItems.setName("_nodeBonusItems");
        this._layoutBonusItems.addChild(this._nodeBonusItems);
        this._nodeBonusItems.setCascadeOpacityEnabled(true);
        this._nodeBonusItems.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeBonusItems, 0.5, 0.45);
        let _nodeBonusItemsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeBonusItems);
        _nodeBonusItemsLayoutComponent.setPositionPercentXEnabled(true);
        _nodeBonusItemsLayoutComponent.setPositionPercentX(0.5);
        _nodeBonusItemsLayoutComponent.setPositionPercentYEnabled(true);
        _nodeBonusItemsLayoutComponent.setPositionPercentY(0.45);

        ///// # _imgBonusItemsBgr
        this._imgBonusItemsBgr = new ccui.ImageView();
        this._imgBonusItemsBgr.setName("_imgBonusItemsBgr");
        this._nodeBonusItems.addChild(this._imgBonusItemsBgr);
        this._imgBonusItemsBgr.setCascadeOpacityEnabled(true);
        this._imgBonusItemsBgr.setCascadeColorEnabled(true);
        this._imgBonusItemsBgr.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgBonusItemsBgr.setPosition(-0.0014, 0);
        let _imgBonusItemsBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBonusItemsBgr);
        this._imgBonusItemsBgr.loadTexture("payment/BonusBoard.png", 1);
        this._imgBonusItemsBgr.setUnifySizeEnabled(false);
        this._imgBonusItemsBgr.ignoreContentAdaptWithSize(false);
        this._imgBonusItemsBgr.setScale9Enabled(true);
        this._imgBonusItemsBgr.setCapInsets(cc.rect(18, 21, 591, 241));
        this._imgBonusItemsBgr.setContentSize(cc.size(627, 283));
        this._imgBonusItemsBgr.setTouchEnabled(false);

        ///// # _imgBonusItemsBgr_0
        this._imgBonusItemsBgr_0 = new ccui.ImageView();
        this._imgBonusItemsBgr_0.setName("_imgBonusItemsBgr_0");
        this._imgBonusItemsBgr.addChild(this._imgBonusItemsBgr_0);
        this._imgBonusItemsBgr_0.setCascadeOpacityEnabled(true);
        this._imgBonusItemsBgr_0.setCascadeColorEnabled(true);
        this._imgBonusItemsBgr_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBonusItemsBgr_0, 0.2837, 0.5396);
        let _imgBonusItemsBgr_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBonusItemsBgr_0);
        _imgBonusItemsBgr_0LayoutComponent.setPositionPercentXEnabled(true);
        _imgBonusItemsBgr_0LayoutComponent.setPositionPercentX(0.2837);
        _imgBonusItemsBgr_0LayoutComponent.setPositionPercentYEnabled(true);
        _imgBonusItemsBgr_0LayoutComponent.setPositionPercentY(0.5396);
        this._imgBonusItemsBgr_0.loadTexture("texts/payment/FirstPayReward.png", 1);
        this._imgBonusItemsBgr_0.setTouchEnabled(false);

        ///// # _txtBonusHint0
        this._txtBonusHint0 = new ck.Text();
        this._txtBonusHint0.setName("_txtBonusHint0");
        this._imgBonusItemsBgr.addChild(this._txtBonusHint0);
        this._txtBonusHint0.setCascadeOpacityEnabled(true);
        this._txtBonusHint0.setCascadeColorEnabled(true);
        this._txtBonusHint0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBonusHint0, 0.7192, 0.2416);
        let _txtBonusHint0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBonusHint0);
        _txtBonusHint0LayoutComponent.setPositionPercentXEnabled(true);
        _txtBonusHint0LayoutComponent.setPositionPercentX(0.7192);
        _txtBonusHint0LayoutComponent.setPositionPercentYEnabled(true);
        _txtBonusHint0LayoutComponent.setPositionPercentY(0.2416);
        this._txtBonusHint0.setTouchEnabled(false);
        this._txtBonusHint0.ignoreContentAdaptWithSize(true);
        this._txtBonusHint0.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBonusHint0.setDefaultFontSize(30);
        this._txtBonusHint0.setString(gm.localize.getText("TXT_FOR_ANY_PURCHASE"));
        this._txtBonusHint0.setTextHorizontalAlignment(1);
        this._txtBonusHint0.setTextVerticalAlignment(1);
        this._txtBonusHint0.enableOutline(cc.color(132, 25, 132, 255), 2);

        ///// # _gridViewBonusItems
        this._gridViewBonusItems = new ck.GridViewVertical();
        this._gridViewBonusItems.setName("_gridViewBonusItems");
        this._imgBonusItemsBgr.addChild(this._gridViewBonusItems);
        this._gridViewBonusItems.setCascadeOpacityEnabled(true);
        this._gridViewBonusItems.setCascadeColorEnabled(true);
        this._gridViewBonusItems.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridViewBonusItems, 0.7136, 0.5858);
        let _gridViewBonusItemsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewBonusItems);
        _gridViewBonusItemsLayoutComponent.setPositionPercentXEnabled(true);
        _gridViewBonusItemsLayoutComponent.setPositionPercentX(0.7136);
        _gridViewBonusItemsLayoutComponent.setPositionPercentYEnabled(true);
        _gridViewBonusItemsLayoutComponent.setPositionPercentY(0.5858);

        ///// # _layoutBestValue
        this._layoutBestValue = new ccui.Layout();
        this._layoutBestValue.setName("_layoutBestValue");
        this._imgBonusItemsBgr.addChild(this._layoutBestValue);
        this._layoutBestValue.setCascadeOpacityEnabled(true);
        this._layoutBestValue.setCascadeColorEnabled(true);
        this._layoutBestValue.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBestValue, 0.0728, 0.8259);
        let _layoutBestValueLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBestValue);
        this._layoutBestValue.setTouchEnabled(false);
        this._layoutBestValue.setUnifySizeEnabled(false);
        this._layoutBestValue.ignoreContentAdaptWithSize(false);
        this._layoutBestValue.setContentSize(cc.size(95.39, 95.3912));

        ///// # _imgBestValueBgr
        this._imgBestValueBgr = new ccui.ImageView();
        this._imgBestValueBgr.setName("_imgBestValueBgr");
        this._layoutBestValue.addChild(this._imgBestValueBgr);
        this._imgBestValueBgr.setCascadeOpacityEnabled(true);
        this._imgBestValueBgr.setCascadeColorEnabled(true);
        this._imgBestValueBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBestValueBgr, 0.5, 0.5);
        let _imgBestValueBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBestValueBgr);
        _imgBestValueBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBestValueBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBestValueBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBestValueBgrLayoutComponent.setPositionPercentY(0.5);
        this._imgBestValueBgr.loadTexture("payment/Tag.png", 1);
        this._imgBestValueBgr.setUnifySizeEnabled(false);
        this._imgBestValueBgr.ignoreContentAdaptWithSize(false);
        this._imgBestValueBgr.setContentSize(cc.size(89, 90));
        this._imgBestValueBgr.setTouchEnabled(false);

        ///// # _txtBestValue
        this._txtBestValue = new ck.Text();
        this._txtBestValue.setName("_txtBestValue");
        this._layoutBestValue.addChild(this._txtBestValue);
        this._txtBestValue.setCascadeOpacityEnabled(true);
        this._txtBestValue.setCascadeColorEnabled(true);
        this._txtBestValue.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBestValue, 0.479, 0.5315);
        let _txtBestValueLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBestValue);
        _txtBestValueLayoutComponent.setPositionPercentXEnabled(true);
        _txtBestValueLayoutComponent.setPositionPercentX(0.479);
        _txtBestValueLayoutComponent.setPositionPercentYEnabled(true);
        _txtBestValueLayoutComponent.setPositionPercentY(0.5315);
        this._txtBestValue.setTouchEnabled(false);
        this._txtBestValue.ignoreContentAdaptWithSize(true);
        this._txtBestValue.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBestValue.setDefaultFontSize(25);
        this._txtBestValue.setString(gm.localize.getText("TXT_BEST_VALUE"));
        this._txtBestValue.setTextHorizontalAlignment(1);
        this._txtBestValue.setTextVerticalAlignment(1);
        this._txtBestValue.enableOutline(cc.color(132, 25, 132, 255), 1);
        this._txtBestValue.enableShadow(cc.color(90, 0, 90, 255), cc.size(0, -2), 0);

        ///// # _layoutPacks
        this._layoutPacks = new ccui.Layout();
        this._layoutPacks.setName("_layoutPacks");
        this._layoutMid.addChild(this._layoutPacks);
        this._layoutPacks.setCascadeOpacityEnabled(true);
        this._layoutPacks.setCascadeColorEnabled(true);
        this._layoutPacks.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutPacks, 0.5, 0);
        let _layoutPacksLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPacks);
        _layoutPacksLayoutComponent.setPositionPercentXEnabled(true);
        _layoutPacksLayoutComponent.setPositionPercentX(0.5);
        _layoutPacksLayoutComponent.setPositionPercentYEnabled(true);
        _layoutPacksLayoutComponent.setPositionPercentY(0);
        _layoutPacksLayoutComponent.setPercentWidthEnabled(true);
        _layoutPacksLayoutComponent.setPercentWidth(1);
        _layoutPacksLayoutComponent.setPercentHeightEnabled(true);
        _layoutPacksLayoutComponent.setPercentHeight(0.75);
        this._layoutPacks.setTouchEnabled(false);
        this._layoutPacks.setUnifySizeEnabled(false);
        this._layoutPacks.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutPacks, 1, 0.75);

        ///// # _tabSelector
        this._tabSelector = new ck.TabSelector();
        this._tabSelector.setName("_tabSelector");
        this._root.addChild(this._tabSelector);
        this._tabSelector.setCascadeOpacityEnabled(true);
        this._tabSelector.setCascadeColorEnabled(true);
        this._tabSelector.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._tabSelector, 0.5, 0.034);
        let _tabSelectorLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._tabSelector);
        _tabSelectorLayoutComponent.setPositionPercentXEnabled(true);
        _tabSelectorLayoutComponent.setPositionPercentX(0.5);
        _tabSelectorLayoutComponent.setPositionPercentYEnabled(true);
        _tabSelectorLayoutComponent.setPositionPercentY(0.034);
        _tabSelectorLayoutComponent.setPercentWidthEnabled(true);
        _tabSelectorLayoutComponent.setPercentWidth(1);
        _tabSelectorLayoutComponent.setPercentHeightEnabled(true);
        _tabSelectorLayoutComponent.setPercentHeight(0.068);

        ///// # _layoutWebPay
        this._layoutWebPay = new ccui.Layout();
        this._layoutWebPay.setName("_layoutWebPay");
        this._root.addChild(this._layoutWebPay);
        this._layoutWebPay.setCascadeOpacityEnabled(true);
        this._layoutWebPay.setCascadeColorEnabled(true);
        this._layoutWebPay.setAnchorPoint(cc.p(0.5004, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutWebPay, 0.5, 0.3979);
        let _layoutWebPayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutWebPay);
        _layoutWebPayLayoutComponent.setPositionPercentXEnabled(true);
        _layoutWebPayLayoutComponent.setPositionPercentX(0.5);
        _layoutWebPayLayoutComponent.setPositionPercentYEnabled(true);
        _layoutWebPayLayoutComponent.setPositionPercentY(0.3979);
        _layoutWebPayLayoutComponent.setPercentWidthEnabled(true);
        _layoutWebPayLayoutComponent.setPercentWidth(0.9);
        this._layoutWebPay.setTouchEnabled(false);
        this._layoutWebPay.setUnifySizeEnabled(false);
        this._layoutWebPay.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutWebPay, 0.9);
        this._layoutWebPay.setContentSize(cc.size(this._layoutWebPay.width, 696.03));

        ///// # _webBanner
        this._webBanner = new ccui.ImageView();
        this._webBanner.setName("_webBanner");
        this._layoutWebPay.addChild(this._webBanner);
        this._webBanner.setCascadeOpacityEnabled(true);
        this._webBanner.setCascadeColorEnabled(true);
        this._webBanner.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._webBanner, 0.5, 0.55);
        let _webBannerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._webBanner);
        _webBannerLayoutComponent.setPositionPercentXEnabled(true);
        _webBannerLayoutComponent.setPositionPercentX(0.5);
        _webBannerLayoutComponent.setPositionPercentYEnabled(true);
        _webBannerLayoutComponent.setPositionPercentY(0.55);
        _webBannerLayoutComponent.setPercentWidthEnabled(true);
        _webBannerLayoutComponent.setPercentWidth(1.0903);
        _webBannerLayoutComponent.setPercentHeightEnabled(true);
        _webBannerLayoutComponent.setPercentHeight(0.9367);
        this._webBanner.loadTexture("payment/BannerBewyap.png", 1);
        this._webBanner.setUnifySizeEnabled(false);
        this._webBanner.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._webBanner, 1.0903, 0.9367);
        this._webBanner.setTouchEnabled(false);

        ///// # _webpayHeader
        this._webpayHeader = new cc.Sprite();
        this._webpayHeader.setName("_webpayHeader");
        this._webBanner.addChild(this._webpayHeader);
        this._webpayHeader.setCascadeOpacityEnabled(true);
        this._webpayHeader.setCascadeColorEnabled(true);
        this._webpayHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._webpayHeader, 0.5, 0.81);
        let _webpayHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._webpayHeader);
        _webpayHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _webpayHeaderLayoutComponent.setPositionPercentX(0.5);
        _webpayHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _webpayHeaderLayoutComponent.setPositionPercentY(0.81);
        let sf = cc.spriteFrameCache.getSpriteFrame("texts/payment/BewyapChannel.png"); if (sf) this._webpayHeader.setSpriteFrame(sf);
        let _webpayHeaderBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _webpayHeaderBlendFunc.src = 1;
        _webpayHeaderBlendFunc.dst = 771;
        this._webpayHeader.setBlendFunc(_webpayHeaderBlendFunc);

        ///// # texts_payment_WebpayUrl_3
        this.texts_payment_WebpayUrl_3 = new cc.Sprite();
        this.texts_payment_WebpayUrl_3.setName("texts_payment_WebpayUrl_3");
        this._webBanner.addChild(this.texts_payment_WebpayUrl_3);
        this.texts_payment_WebpayUrl_3.setCascadeOpacityEnabled(true);
        this.texts_payment_WebpayUrl_3.setCascadeColorEnabled(true);
        this.texts_payment_WebpayUrl_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.texts_payment_WebpayUrl_3, 0.5, 0.6);
        let texts_payment_WebpayUrl_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.texts_payment_WebpayUrl_3);
        texts_payment_WebpayUrl_3LayoutComponent.setPositionPercentXEnabled(true);
        texts_payment_WebpayUrl_3LayoutComponent.setPositionPercentX(0.5);
        texts_payment_WebpayUrl_3LayoutComponent.setPositionPercentYEnabled(true);
        texts_payment_WebpayUrl_3LayoutComponent.setPositionPercentY(0.6);
        let sf = cc.spriteFrameCache.getSpriteFrame("texts/payment/BewyapUrl.png"); if (sf) this.texts_payment_WebpayUrl_3.setSpriteFrame(sf);
        let texts_payment_WebpayUrl_3BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        texts_payment_WebpayUrl_3BlendFunc.src = 1;
        texts_payment_WebpayUrl_3BlendFunc.dst = 771;
        this.texts_payment_WebpayUrl_3.setBlendFunc(texts_payment_WebpayUrl_3BlendFunc);

        ///// # _imgWebpayChannel01
        this._imgWebpayChannel01 = new ccui.ImageView();
        this._imgWebpayChannel01.setName("_imgWebpayChannel01");
        this._webBanner.addChild(this._imgWebpayChannel01);
        this._imgWebpayChannel01.setCascadeOpacityEnabled(true);
        this._imgWebpayChannel01.setCascadeColorEnabled(true);
        this._imgWebpayChannel01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgWebpayChannel01, 0.15, 0.32);
        let _imgWebpayChannel01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgWebpayChannel01);
        _imgWebpayChannel01LayoutComponent.setPositionPercentXEnabled(true);
        _imgWebpayChannel01LayoutComponent.setPositionPercentX(0.15);
        _imgWebpayChannel01LayoutComponent.setPositionPercentYEnabled(true);
        _imgWebpayChannel01LayoutComponent.setPositionPercentY(0.32);
        this._imgWebpayChannel01.loadTexture("payment/BaseChannel.png", 1);
        this._imgWebpayChannel01.setUnifySizeEnabled(false);
        this._imgWebpayChannel01.ignoreContentAdaptWithSize(false);
        this._imgWebpayChannel01.setContentSize(cc.size(131, 187));
        this._imgWebpayChannel01.setTouchEnabled(false);

        ///// # _txtWebPayChannel01
        this._txtWebPayChannel01 = new ck.Text();
        this._txtWebPayChannel01.setName("_txtWebPayChannel01");
        this._imgWebpayChannel01.addChild(this._txtWebPayChannel01);
        this._txtWebPayChannel01.setCascadeOpacityEnabled(true);
        this._txtWebPayChannel01.setCascadeColorEnabled(true);
        this._txtWebPayChannel01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtWebPayChannel01, 0.5, 0.38);
        let _txtWebPayChannel01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtWebPayChannel01);
        _txtWebPayChannel01LayoutComponent.setPositionPercentXEnabled(true);
        _txtWebPayChannel01LayoutComponent.setPositionPercentX(0.5);
        _txtWebPayChannel01LayoutComponent.setPositionPercentYEnabled(true);
        _txtWebPayChannel01LayoutComponent.setPositionPercentY(0.38);
        this._txtWebPayChannel01.setTouchEnabled(false);
        this._txtWebPayChannel01.ignoreContentAdaptWithSize(true);
        this._txtWebPayChannel01.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtWebPayChannel01.setDefaultFontSize(30);
        this._txtWebPayChannel01.setString("BANKA");
        this._txtWebPayChannel01.setTextHorizontalAlignment(1);
        this._txtWebPayChannel01.setTextVerticalAlignment(1);

        ///// # _imgLogoWebPayChannel01
        this._imgLogoWebPayChannel01 = new ccui.ImageView();
        this._imgLogoWebPayChannel01.setName("_imgLogoWebPayChannel01");
        this._imgWebpayChannel01.addChild(this._imgLogoWebPayChannel01);
        this._imgLogoWebPayChannel01.setCascadeOpacityEnabled(true);
        this._imgLogoWebPayChannel01.setCascadeColorEnabled(true);
        this._imgLogoWebPayChannel01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLogoWebPayChannel01, 0.5, 0.75);
        let _imgLogoWebPayChannel01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLogoWebPayChannel01);
        _imgLogoWebPayChannel01LayoutComponent.setPositionPercentXEnabled(true);
        _imgLogoWebPayChannel01LayoutComponent.setPositionPercentX(0.5);
        _imgLogoWebPayChannel01LayoutComponent.setPositionPercentYEnabled(true);
        _imgLogoWebPayChannel01LayoutComponent.setPositionPercentY(0.75);
        this._imgLogoWebPayChannel01.loadTexture("payment/KanbLogo.png", 1);
        this._imgLogoWebPayChannel01.setUnifySizeEnabled(false);
        this._imgLogoWebPayChannel01.ignoreContentAdaptWithSize(false);
        this._imgLogoWebPayChannel01.setContentSize(cc.size(91, 82));
        this._imgLogoWebPayChannel01.setTouchEnabled(false);

        ///// # _imgWebpayChannel02
        this._imgWebpayChannel02 = new ccui.ImageView();
        this._imgWebpayChannel02.setName("_imgWebpayChannel02");
        this._webBanner.addChild(this._imgWebpayChannel02);
        this._imgWebpayChannel02.setCascadeOpacityEnabled(true);
        this._imgWebpayChannel02.setCascadeColorEnabled(true);
        this._imgWebpayChannel02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgWebpayChannel02, 0.38, 0.28);
        let _imgWebpayChannel02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgWebpayChannel02);
        _imgWebpayChannel02LayoutComponent.setPositionPercentXEnabled(true);
        _imgWebpayChannel02LayoutComponent.setPositionPercentX(0.38);
        _imgWebpayChannel02LayoutComponent.setPositionPercentYEnabled(true);
        _imgWebpayChannel02LayoutComponent.setPositionPercentY(0.28);
        this._imgWebpayChannel02.loadTexture("payment/BaseChannel.png", 1);
        this._imgWebpayChannel02.setUnifySizeEnabled(false);
        this._imgWebpayChannel02.ignoreContentAdaptWithSize(false);
        this._imgWebpayChannel02.setContentSize(cc.size(131, 187));
        this._imgWebpayChannel02.setTouchEnabled(false);

        ///// # _txtWebPayChannel02
        this._txtWebPayChannel02 = new ck.Text();
        this._txtWebPayChannel02.setName("_txtWebPayChannel02");
        this._imgWebpayChannel02.addChild(this._txtWebPayChannel02);
        this._txtWebPayChannel02.setCascadeOpacityEnabled(true);
        this._txtWebPayChannel02.setCascadeColorEnabled(true);
        this._txtWebPayChannel02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtWebPayChannel02, 0.5, 0.38);
        let _txtWebPayChannel02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtWebPayChannel02);
        _txtWebPayChannel02LayoutComponent.setPositionPercentXEnabled(true);
        _txtWebPayChannel02LayoutComponent.setPositionPercentX(0.5);
        _txtWebPayChannel02LayoutComponent.setPositionPercentYEnabled(true);
        _txtWebPayChannel02LayoutComponent.setPositionPercentY(0.38);
        this._txtWebPayChannel02.setTouchEnabled(false);
        this._txtWebPayChannel02.ignoreContentAdaptWithSize(true);
        this._txtWebPayChannel02.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtWebPayChannel02.setDefaultFontSize(30);
        this._txtWebPayChannel02.setString("VODAFONE");
        this._txtWebPayChannel02.setTextHorizontalAlignment(1);
        this._txtWebPayChannel02.setTextVerticalAlignment(1);

        ///// # _imgLogoWebPayChannel01_0
        this._imgLogoWebPayChannel01_0 = new ccui.ImageView();
        this._imgLogoWebPayChannel01_0.setName("_imgLogoWebPayChannel01_0");
        this._imgWebpayChannel02.addChild(this._imgLogoWebPayChannel01_0);
        this._imgLogoWebPayChannel01_0.setCascadeOpacityEnabled(true);
        this._imgLogoWebPayChannel01_0.setCascadeColorEnabled(true);
        this._imgLogoWebPayChannel01_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLogoWebPayChannel01_0, 0.5, 0.75);
        let _imgLogoWebPayChannel01_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLogoWebPayChannel01_0);
        _imgLogoWebPayChannel01_0LayoutComponent.setPositionPercentXEnabled(true);
        _imgLogoWebPayChannel01_0LayoutComponent.setPositionPercentX(0.5);
        _imgLogoWebPayChannel01_0LayoutComponent.setPositionPercentYEnabled(true);
        _imgLogoWebPayChannel01_0LayoutComponent.setPositionPercentY(0.75);
        this._imgLogoWebPayChannel01_0.loadTexture("payment/EnofadovLogo.png", 1);
        this._imgLogoWebPayChannel01_0.setUnifySizeEnabled(false);
        this._imgLogoWebPayChannel01_0.ignoreContentAdaptWithSize(false);
        this._imgLogoWebPayChannel01_0.setContentSize(cc.size(74, 74));
        this._imgLogoWebPayChannel01_0.setTouchEnabled(false);

        ///// # _imgWebpayChannel03
        this._imgWebpayChannel03 = new ccui.ImageView();
        this._imgWebpayChannel03.setName("_imgWebpayChannel03");
        this._webBanner.addChild(this._imgWebpayChannel03);
        this._imgWebpayChannel03.setCascadeOpacityEnabled(true);
        this._imgWebpayChannel03.setCascadeColorEnabled(true);
        this._imgWebpayChannel03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgWebpayChannel03, 0.62, 0.28);
        let _imgWebpayChannel03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgWebpayChannel03);
        _imgWebpayChannel03LayoutComponent.setPositionPercentXEnabled(true);
        _imgWebpayChannel03LayoutComponent.setPositionPercentX(0.62);
        _imgWebpayChannel03LayoutComponent.setPositionPercentYEnabled(true);
        _imgWebpayChannel03LayoutComponent.setPositionPercentY(0.28);
        this._imgWebpayChannel03.loadTexture("payment/BaseChannel.png", 1);
        this._imgWebpayChannel03.setUnifySizeEnabled(false);
        this._imgWebpayChannel03.ignoreContentAdaptWithSize(false);
        this._imgWebpayChannel03.setContentSize(cc.size(131, 187));
        this._imgWebpayChannel03.setTouchEnabled(false);

        ///// # _txtWebPayChannel03
        this._txtWebPayChannel03 = new ck.Text();
        this._txtWebPayChannel03.setName("_txtWebPayChannel03");
        this._imgWebpayChannel03.addChild(this._txtWebPayChannel03);
        this._txtWebPayChannel03.setCascadeOpacityEnabled(true);
        this._txtWebPayChannel03.setCascadeColorEnabled(true);
        this._txtWebPayChannel03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtWebPayChannel03, 0.5, 0.38);
        let _txtWebPayChannel03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtWebPayChannel03);
        _txtWebPayChannel03LayoutComponent.setPositionPercentXEnabled(true);
        _txtWebPayChannel03LayoutComponent.setPositionPercentX(0.5);
        _txtWebPayChannel03LayoutComponent.setPositionPercentYEnabled(true);
        _txtWebPayChannel03LayoutComponent.setPositionPercentY(0.38);
        this._txtWebPayChannel03.setTouchEnabled(false);
        this._txtWebPayChannel03.ignoreContentAdaptWithSize(true);
        this._txtWebPayChannel03.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtWebPayChannel03.setDefaultFontSize(30);
        this._txtWebPayChannel03.setString("TELEKOM");
        this._txtWebPayChannel03.setTextHorizontalAlignment(1);
        this._txtWebPayChannel03.setTextVerticalAlignment(1);

        ///// # _imgLogoWebPayChannel01_0_0
        this._imgLogoWebPayChannel01_0_0 = new ccui.ImageView();
        this._imgLogoWebPayChannel01_0_0.setName("_imgLogoWebPayChannel01_0_0");
        this._imgWebpayChannel03.addChild(this._imgLogoWebPayChannel01_0_0);
        this._imgLogoWebPayChannel01_0_0.setCascadeOpacityEnabled(true);
        this._imgLogoWebPayChannel01_0_0.setCascadeColorEnabled(true);
        this._imgLogoWebPayChannel01_0_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLogoWebPayChannel01_0_0, 0.5, 0.75);
        let _imgLogoWebPayChannel01_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLogoWebPayChannel01_0_0);
        _imgLogoWebPayChannel01_0_0LayoutComponent.setPositionPercentXEnabled(true);
        _imgLogoWebPayChannel01_0_0LayoutComponent.setPositionPercentX(0.5);
        _imgLogoWebPayChannel01_0_0LayoutComponent.setPositionPercentYEnabled(true);
        _imgLogoWebPayChannel01_0_0LayoutComponent.setPositionPercentY(0.75);
        this._imgLogoWebPayChannel01_0_0.loadTexture("payment/MokeletLogo.png", 1);
        this._imgLogoWebPayChannel01_0_0.setUnifySizeEnabled(false);
        this._imgLogoWebPayChannel01_0_0.ignoreContentAdaptWithSize(false);
        this._imgLogoWebPayChannel01_0_0.setContentSize(cc.size(106, 74));
        this._imgLogoWebPayChannel01_0_0.setTouchEnabled(false);

        ///// # _imgWebpayChannel04
        this._imgWebpayChannel04 = new ccui.ImageView();
        this._imgWebpayChannel04.setName("_imgWebpayChannel04");
        this._webBanner.addChild(this._imgWebpayChannel04);
        this._imgWebpayChannel04.setCascadeOpacityEnabled(true);
        this._imgWebpayChannel04.setCascadeColorEnabled(true);
        this._imgWebpayChannel04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgWebpayChannel04, 0.85, 0.32);
        let _imgWebpayChannel04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgWebpayChannel04);
        _imgWebpayChannel04LayoutComponent.setPositionPercentXEnabled(true);
        _imgWebpayChannel04LayoutComponent.setPositionPercentX(0.85);
        _imgWebpayChannel04LayoutComponent.setPositionPercentYEnabled(true);
        _imgWebpayChannel04LayoutComponent.setPositionPercentY(0.32);
        this._imgWebpayChannel04.loadTexture("payment/BaseChannel.png", 1);
        this._imgWebpayChannel04.setUnifySizeEnabled(false);
        this._imgWebpayChannel04.ignoreContentAdaptWithSize(false);
        this._imgWebpayChannel04.setContentSize(cc.size(131, 187));
        this._imgWebpayChannel04.setTouchEnabled(false);

        ///// # _txtWebPayChannel04
        this._txtWebPayChannel04 = new ck.Text();
        this._txtWebPayChannel04.setName("_txtWebPayChannel04");
        this._imgWebpayChannel04.addChild(this._txtWebPayChannel04);
        this._txtWebPayChannel04.setCascadeOpacityEnabled(true);
        this._txtWebPayChannel04.setCascadeColorEnabled(true);
        this._txtWebPayChannel04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtWebPayChannel04, 0.5, 0.38);
        let _txtWebPayChannel04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtWebPayChannel04);
        _txtWebPayChannel04LayoutComponent.setPositionPercentXEnabled(true);
        _txtWebPayChannel04LayoutComponent.setPositionPercentX(0.5);
        _txtWebPayChannel04LayoutComponent.setPositionPercentYEnabled(true);
        _txtWebPayChannel04LayoutComponent.setPositionPercentY(0.38);
        this._txtWebPayChannel04.setTouchEnabled(false);
        this._txtWebPayChannel04.ignoreContentAdaptWithSize(true);
        this._txtWebPayChannel04.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtWebPayChannel04.setDefaultFontSize(30);
        this._txtWebPayChannel04.setString("PAPARA");
        this._txtWebPayChannel04.setTextHorizontalAlignment(1);
        this._txtWebPayChannel04.setTextVerticalAlignment(1);

        ///// # _imgLogoWebPayChannel01_0_0_0
        this._imgLogoWebPayChannel01_0_0_0 = new ccui.ImageView();
        this._imgLogoWebPayChannel01_0_0_0.setName("_imgLogoWebPayChannel01_0_0_0");
        this._imgWebpayChannel04.addChild(this._imgLogoWebPayChannel01_0_0_0);
        this._imgLogoWebPayChannel01_0_0_0.setCascadeOpacityEnabled(true);
        this._imgLogoWebPayChannel01_0_0_0.setCascadeColorEnabled(true);
        this._imgLogoWebPayChannel01_0_0_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLogoWebPayChannel01_0_0_0, 0.5, 0.75);
        let _imgLogoWebPayChannel01_0_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLogoWebPayChannel01_0_0_0);
        _imgLogoWebPayChannel01_0_0_0LayoutComponent.setPositionPercentXEnabled(true);
        _imgLogoWebPayChannel01_0_0_0LayoutComponent.setPositionPercentX(0.5);
        _imgLogoWebPayChannel01_0_0_0LayoutComponent.setPositionPercentYEnabled(true);
        _imgLogoWebPayChannel01_0_0_0LayoutComponent.setPositionPercentY(0.75);
        this._imgLogoWebPayChannel01_0_0_0.loadTexture("payment/ArapapLogo.png", 1);
        this._imgLogoWebPayChannel01_0_0_0.setUnifySizeEnabled(false);
        this._imgLogoWebPayChannel01_0_0_0.ignoreContentAdaptWithSize(false);
        this._imgLogoWebPayChannel01_0_0_0.setContentSize(cc.size(109, 31));
        this._imgLogoWebPayChannel01_0_0_0.setTouchEnabled(false);

        ///// # _layoutHintWebPay
        this._layoutHintWebPay = new ccui.Layout();
        this._layoutHintWebPay.setName("_layoutHintWebPay");
        this._webBanner.addChild(this._layoutHintWebPay);
        this._layoutHintWebPay.setCascadeOpacityEnabled(true);
        this._layoutHintWebPay.setCascadeColorEnabled(true);
        this._layoutHintWebPay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutHintWebPay, 0.5, 0.1);
        let _layoutHintWebPayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHintWebPay);
        _layoutHintWebPayLayoutComponent.setPositionPercentXEnabled(true);
        _layoutHintWebPayLayoutComponent.setPositionPercentX(0.5);
        _layoutHintWebPayLayoutComponent.setPositionPercentYEnabled(true);
        _layoutHintWebPayLayoutComponent.setPositionPercentY(0.1);
        this._layoutHintWebPay.setTouchEnabled(true);
        this._layoutHintWebPay.setUnifySizeEnabled(false);
        this._layoutHintWebPay.ignoreContentAdaptWithSize(false);
        this._layoutHintWebPay.setContentSize(cc.size(520, 64));
        this._layoutHintWebPay.setBackGroundColorType(1);
        this._layoutHintWebPay.setBackGroundColor(cc.color(150, 200, 255, 255));
        this._layoutHintWebPay.setBackGroundColorOpacity(102);

        ///// # _imgHintWebPayBackground
        this._imgHintWebPayBackground = new ccui.ImageView();
        this._imgHintWebPayBackground.setName("_imgHintWebPayBackground");
        this._layoutHintWebPay.addChild(this._imgHintWebPayBackground);
        this._imgHintWebPayBackground.setCascadeOpacityEnabled(true);
        this._imgHintWebPayBackground.setCascadeColorEnabled(true);
        this._imgHintWebPayBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHintWebPayBackground, 0.5, 0.5);
        this._imgHintWebPayBackground.setOpacity(127);
        this._imgHintWebPayBackground.setColor(cc.color(0, 0, 0, 255));
        let _imgHintWebPayBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHintWebPayBackground);
        _imgHintWebPayBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgHintWebPayBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgHintWebPayBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgHintWebPayBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgHintWebPayBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgHintWebPayBackgroundLayoutComponent.setPercentWidth(1);
        _imgHintWebPayBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgHintWebPayBackgroundLayoutComponent.setPercentHeight(1);
        this._imgHintWebPayBackground.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgHintWebPayBackground.setUnifySizeEnabled(false);
        this._imgHintWebPayBackground.ignoreContentAdaptWithSize(false);
        this._imgHintWebPayBackground.setScale9Enabled(true);
        this._imgHintWebPayBackground.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgHintWebPayBackground, 1, 1);
        this._imgHintWebPayBackground.setTouchEnabled(false);

        ///// # _txtHintWebPay
        this._txtHintWebPay = new ck.Text();
        this._txtHintWebPay.setName("_txtHintWebPay");
        this._layoutHintWebPay.addChild(this._txtHintWebPay);
        this._txtHintWebPay.setCascadeOpacityEnabled(true);
        this._txtHintWebPay.setCascadeColorEnabled(true);
        this._txtHintWebPay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHintWebPay, 0.5, 0.5);
        let _txtHintWebPayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHintWebPay);
        _txtHintWebPayLayoutComponent.setPositionPercentXEnabled(true);
        _txtHintWebPayLayoutComponent.setPositionPercentX(0.5);
        _txtHintWebPayLayoutComponent.setPositionPercentYEnabled(true);
        _txtHintWebPayLayoutComponent.setPositionPercentY(0.5);
        this._txtHintWebPay.setTouchEnabled(false);
        this._txtHintWebPay.setUnifySizeEnabled(false);
        this._txtHintWebPay.ignoreContentAdaptWithSize(false);
        this._txtHintWebPay.setContentSize(cc.size(490, 50));
        this._txtHintWebPay.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHintWebPay.setDefaultFontSize(34);
        this._txtHintWebPay.setString(gm.localize.getText("TXT_HINT_WEB_PAY"));
        this._txtHintWebPay.setTextHorizontalAlignment(1);
        this._txtHintWebPay.setTextVerticalAlignment(1);
        this._txtHintWebPay.autoFitSingleLine();

        ///// # _imgWebpayPay
        this._imgWebpayPay = new ccui.ImageView();
        this._imgWebpayPay.setName("_imgWebpayPay");
        this._layoutWebPay.addChild(this._imgWebpayPay);
        this._imgWebpayPay.setCascadeOpacityEnabled(true);
        this._imgWebpayPay.setCascadeColorEnabled(true);
        this._imgWebpayPay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgWebpayPay, 0.3, 0.02);
        let _imgWebpayPayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgWebpayPay);
        _imgWebpayPayLayoutComponent.setPositionPercentXEnabled(true);
        _imgWebpayPayLayoutComponent.setPositionPercentX(0.3);
        _imgWebpayPayLayoutComponent.setPositionPercentYEnabled(true);
        _imgWebpayPayLayoutComponent.setPositionPercentY(0.02);
        this._imgWebpayPay.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgWebpayPay.setUnifySizeEnabled(false);
        this._imgWebpayPay.ignoreContentAdaptWithSize(false);
        this._imgWebpayPay.setContentSize(cc.size(206, 81));
        this._imgWebpayPay.setTouchEnabled(false);

        ///// # _txtWebpayText
        this._txtWebpayText = new ck.Text();
        this._txtWebpayText.setName("_txtWebpayText");
        this._imgWebpayPay.addChild(this._txtWebpayText);
        this._txtWebpayText.setCascadeOpacityEnabled(true);
        this._txtWebpayText.setCascadeColorEnabled(true);
        this._txtWebpayText.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtWebpayText, 0.5, 0.54);
        let _txtWebpayTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtWebpayText);
        _txtWebpayTextLayoutComponent.setPositionPercentXEnabled(true);
        _txtWebpayTextLayoutComponent.setPositionPercentX(0.5);
        _txtWebpayTextLayoutComponent.setPositionPercentYEnabled(true);
        _txtWebpayTextLayoutComponent.setPositionPercentY(0.54);
        this._txtWebpayText.setTouchEnabled(false);
        this._txtWebpayText.ignoreContentAdaptWithSize(true);
        this._txtWebpayText.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtWebpayText.setDefaultFontSize(50);
        this._txtWebpayText.setString(gm.localize.getText("TXT_PAY"));
        this._txtWebpayText.setTextHorizontalAlignment(0);
        this._txtWebpayText.setTextVerticalAlignment(0);
        this._txtWebpayText.enableShadow(cc.color(194, 80, 62, 255), cc.size(0, -2), 0);

        ///// # _imgWebpayInputCode
        this._imgWebpayInputCode = new ccui.ImageView();
        this._imgWebpayInputCode.setName("_imgWebpayInputCode");
        this._layoutWebPay.addChild(this._imgWebpayInputCode);
        this._imgWebpayInputCode.setCascadeOpacityEnabled(true);
        this._imgWebpayInputCode.setCascadeColorEnabled(true);
        this._imgWebpayInputCode.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgWebpayInputCode, 0.7, 0.02);
        let _imgWebpayInputCodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgWebpayInputCode);
        _imgWebpayInputCodeLayoutComponent.setPositionPercentXEnabled(true);
        _imgWebpayInputCodeLayoutComponent.setPositionPercentX(0.7);
        _imgWebpayInputCodeLayoutComponent.setPositionPercentYEnabled(true);
        _imgWebpayInputCodeLayoutComponent.setPositionPercentY(0.02);
        this._imgWebpayInputCode.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgWebpayInputCode.setUnifySizeEnabled(false);
        this._imgWebpayInputCode.ignoreContentAdaptWithSize(false);
        this._imgWebpayInputCode.setContentSize(cc.size(206, 81));
        this._imgWebpayInputCode.setTouchEnabled(false);

        ///// # _txtWebpayInputCode
        this._txtWebpayInputCode = new ck.Text();
        this._txtWebpayInputCode.setName("_txtWebpayInputCode");
        this._imgWebpayInputCode.addChild(this._txtWebpayInputCode);
        this._txtWebpayInputCode.setCascadeOpacityEnabled(true);
        this._txtWebpayInputCode.setCascadeColorEnabled(true);
        this._txtWebpayInputCode.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtWebpayInputCode, 0.5, 0.54);
        let _txtWebpayInputCodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtWebpayInputCode);
        _txtWebpayInputCodeLayoutComponent.setPositionPercentXEnabled(true);
        _txtWebpayInputCodeLayoutComponent.setPositionPercentX(0.5);
        _txtWebpayInputCodeLayoutComponent.setPositionPercentYEnabled(true);
        _txtWebpayInputCodeLayoutComponent.setPositionPercentY(0.54);
        this._txtWebpayInputCode.setTouchEnabled(false);
        this._txtWebpayInputCode.ignoreContentAdaptWithSize(true);
        this._txtWebpayInputCode.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtWebpayInputCode.setDefaultFontSize(50);
        this._txtWebpayInputCode.setString(gm.localize.getText("TXT_INPUT_CODE"));
        this._txtWebpayInputCode.setTextHorizontalAlignment(0);
        this._txtWebpayInputCode.setTextVerticalAlignment(0);
        this._txtWebpayInputCode.enableShadow(cc.color(194, 80, 62, 255), cc.size(0, -2), 0);

        ///// # _layoutTop
        this._layoutTop = new ccui.Layout();
        this._layoutTop.setName("_layoutTop");
        this._root.addChild(this._layoutTop);
        this._layoutTop.setCascadeOpacityEnabled(true);
        this._layoutTop.setCascadeColorEnabled(true);
        this._layoutTop.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutTop, 0.5, 1);
        let _layoutTopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTop);
        _layoutTopLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTopLayoutComponent.setPositionPercentX(0.5);
        _layoutTopLayoutComponent.setPositionPercentYEnabled(true);
        _layoutTopLayoutComponent.setPositionPercentY(1);
        _layoutTopLayoutComponent.setPercentWidthEnabled(true);
        _layoutTopLayoutComponent.setPercentWidth(1);
        _layoutTopLayoutComponent.setPercentHeightEnabled(true);
        _layoutTopLayoutComponent.setPercentHeight(0.0645);
        this._layoutTop.setTouchEnabled(false);
        this._layoutTop.setUnifySizeEnabled(false);
        this._layoutTop.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutTop, 1, 0.0645);

        ///// # _imgTopBgr
        this._imgTopBgr = new ccui.ImageView();
        this._imgTopBgr.setName("_imgTopBgr");
        this._layoutTop.addChild(this._imgTopBgr);
        this._imgTopBgr.setCascadeOpacityEnabled(true);
        this._imgTopBgr.setCascadeColorEnabled(true);
        this._imgTopBgr.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgTopBgr, 0.5, 1);
        let _imgTopBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTopBgr);
        _imgTopBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgTopBgrLayoutComponent.setPositionPercentX(0.5);
        _imgTopBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgTopBgrLayoutComponent.setPositionPercentY(1);
        _imgTopBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgTopBgrLayoutComponent.setPercentWidth(1);
        _imgTopBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgTopBgrLayoutComponent.setPercentHeight(1);
        this._imgTopBgr.loadTexture("basics/other/Top.png", 1);
        this._imgTopBgr.setUnifySizeEnabled(false);
        this._imgTopBgr.ignoreContentAdaptWithSize(false);
        this._imgTopBgr.setScale9Enabled(true);
        this._imgTopBgr.setCapInsets(cc.rect(78, 1, 19, 1));
        ck.UIUtils.setSizePercent(this._imgTopBgr, 1, 1);
        this._imgTopBgr.setTouchEnabled(false);

        ///// # _layoutGem
        this._layoutGem = new ccui.Layout();
        this._layoutGem.setName("_layoutGem");
        this._layoutTop.addChild(this._layoutGem);
        this._layoutGem.setCascadeOpacityEnabled(true);
        this._layoutGem.setCascadeColorEnabled(true);
        this._layoutGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutGem, 0.3, 0.5);
        let _layoutGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGem);
        _layoutGemLayoutComponent.setPositionPercentXEnabled(true);
        _layoutGemLayoutComponent.setPositionPercentX(0.3);
        _layoutGemLayoutComponent.setPositionPercentYEnabled(true);
        _layoutGemLayoutComponent.setPositionPercentY(0.5);
        this._layoutGem.setTouchEnabled(true);
        this._layoutGem.setUnifySizeEnabled(false);
        this._layoutGem.ignoreContentAdaptWithSize(false);
        this._layoutGem.setContentSize(cc.size(180, 35));
        this._layoutGem.setBackGroundColorType(1);
        this._layoutGem.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutGem.setBackGroundColorOpacity(127);

        ///// # _imgGemIcon
        this._imgGemIcon = new ccui.ImageView();
        this._imgGemIcon.setName("_imgGemIcon");
        this._layoutGem.addChild(this._imgGemIcon);
        this._imgGemIcon.setCascadeOpacityEnabled(true);
        this._imgGemIcon.setCascadeColorEnabled(true);
        this._imgGemIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGemIcon, 0, 0.5);
        let _imgGemIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGemIcon);
        _imgGemIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgGemIconLayoutComponent.setPositionPercentX(0);
        _imgGemIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgGemIconLayoutComponent.setPositionPercentY(0.5);
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
        ck.UIUtils.setPositionPercent(this._txtGem, 0.8802, 0.5);
        this._txtGem.setTextColor(cc.color(243, 192, 255, 255));
        let _txtGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGem);
        _txtGemLayoutComponent.setPositionPercentXEnabled(true);
        _txtGemLayoutComponent.setPositionPercentX(0.8802);
        _txtGemLayoutComponent.setPositionPercentYEnabled(true);
        _txtGemLayoutComponent.setPositionPercentY(0.5);
        this._txtGem.setTouchEnabled(false);
        this._txtGem.ignoreContentAdaptWithSize(true);
        this._txtGem.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGem.setDefaultFontSize(20);
        this._txtGem.setTextHorizontalAlignment(1);
        this._txtGem.setTextVerticalAlignment(1);

        ///// # _btnAddGem
        this._btnAddGem = new ccui.Button();
        this._btnAddGem.setName("_btnAddGem");
        this._layoutGem.addChild(this._btnAddGem);
        this._btnAddGem.setCascadeOpacityEnabled(true);
        this._btnAddGem.setCascadeColorEnabled(true);
        this._btnAddGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAddGem, 1, 0.5);
        let _btnAddGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddGem);
        _btnAddGemLayoutComponent.setPositionPercentXEnabled(true);
        _btnAddGemLayoutComponent.setPositionPercentX(1);
        _btnAddGemLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddGemLayoutComponent.setPositionPercentY(0.5);
        this._btnAddGem.loadTextureDisabled("buttons/rectangles/Add.png", 1);
        this._btnAddGem.loadTexturePressed("buttons/rectangles/Add.png", 1);
        this._btnAddGem.loadTextureNormal("buttons/rectangles/Add.png", 1);
        this._btnAddGem.setUnifySizeEnabled(false);
        this._btnAddGem.ignoreContentAdaptWithSize(false);
        this._btnAddGem.setContentSize(cc.size(40, 40));
        this._btnAddGem.setTouchEnabled(true);

        ///// # _layoutCoin
        this._layoutCoin = new ccui.Layout();
        this._layoutCoin.setName("_layoutCoin");
        this._layoutTop.addChild(this._layoutCoin);
        this._layoutCoin.setCascadeOpacityEnabled(true);
        this._layoutCoin.setCascadeColorEnabled(true);
        this._layoutCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCoin, 0.7, 0.5);
        let _layoutCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCoin);
        _layoutCoinLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentX(0.7);
        _layoutCoinLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentY(0.5);
        this._layoutCoin.setTouchEnabled(true);
        this._layoutCoin.setUnifySizeEnabled(false);
        this._layoutCoin.ignoreContentAdaptWithSize(false);
        this._layoutCoin.setContentSize(cc.size(180, 35));
        this._layoutCoin.setBackGroundColorType(1);
        this._layoutCoin.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutCoin.setBackGroundColorOpacity(127);

        ///// # _imgCoinIcon
        this._imgCoinIcon = new ccui.ImageView();
        this._imgCoinIcon.setName("_imgCoinIcon");
        this._layoutCoin.addChild(this._imgCoinIcon);
        this._imgCoinIcon.setCascadeOpacityEnabled(true);
        this._imgCoinIcon.setCascadeColorEnabled(true);
        this._imgCoinIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCoinIcon, 0, 0.5);
        let _imgCoinIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCoinIcon);
        _imgCoinIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgCoinIconLayoutComponent.setPositionPercentX(0);
        _imgCoinIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgCoinIconLayoutComponent.setPositionPercentY(0.5);
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
        ck.UIUtils.setPositionPercent(this._txtCoin, 0.9052, 0.5);
        this._txtCoin.setTextColor(cc.color(255, 255, 141, 255));
        let _txtCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCoin);
        _txtCoinLayoutComponent.setPositionPercentXEnabled(true);
        _txtCoinLayoutComponent.setPositionPercentX(0.9052);
        _txtCoinLayoutComponent.setPositionPercentYEnabled(true);
        _txtCoinLayoutComponent.setPositionPercentY(0.5);
        this._txtCoin.setTouchEnabled(false);
        this._txtCoin.ignoreContentAdaptWithSize(true);
        this._txtCoin.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCoin.setDefaultFontSize(20);
        this._txtCoin.setTextHorizontalAlignment(1);
        this._txtCoin.setTextVerticalAlignment(1);

        ///// # _btnAddCoin
        this._btnAddCoin = new ccui.Button();
        this._btnAddCoin.setName("_btnAddCoin");
        this._layoutCoin.addChild(this._btnAddCoin);
        this._btnAddCoin.setCascadeOpacityEnabled(true);
        this._btnAddCoin.setCascadeColorEnabled(true);
        this._btnAddCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAddCoin, 1, 0.5);
        let _btnAddCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddCoin);
        _btnAddCoinLayoutComponent.setPositionPercentXEnabled(true);
        _btnAddCoinLayoutComponent.setPositionPercentX(1);
        _btnAddCoinLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddCoinLayoutComponent.setPositionPercentY(0.5);
        this._btnAddCoin.loadTextureDisabled("buttons/rectangles/Add.png", 1);
        this._btnAddCoin.loadTexturePressed("buttons/rectangles/Add.png", 1);
        this._btnAddCoin.loadTextureNormal("buttons/rectangles/Add.png", 1);
        this._btnAddCoin.setUnifySizeEnabled(false);
        this._btnAddCoin.ignoreContentAdaptWithSize(false);
        this._btnAddCoin.setContentSize(cc.size(40, 40));
        this._btnAddCoin.setTouchEnabled(true);

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._root.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.0772, 0.0338);
        this._imgClose.setScale(0.8, 0.8);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.0772);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.0338);
        this._imgClose.loadTexture("buttons/circles/Gray.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(80, 82));
        this._imgClose.setTouchEnabled(true);

        ///// # imgCloseIcon
        this.imgCloseIcon = new ccui.ImageView();
        this.imgCloseIcon.setName("imgCloseIcon");
        this._imgClose.addChild(this.imgCloseIcon);
        this.imgCloseIcon.setCascadeOpacityEnabled(true);
        this.imgCloseIcon.setCascadeColorEnabled(true);
        this.imgCloseIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgCloseIcon, 0.475, 0.4878);
        let imgCloseIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgCloseIcon);
        imgCloseIconLayoutComponent.setPositionPercentXEnabled(true);
        imgCloseIconLayoutComponent.setPositionPercentX(0.475);
        imgCloseIconLayoutComponent.setPositionPercentYEnabled(true);
        imgCloseIconLayoutComponent.setPositionPercentY(0.4878);
        this.imgCloseIcon.loadTexture("buttons/squares/ExitBlue.png", 1);
        this.imgCloseIcon.setUnifySizeEnabled(false);
        this.imgCloseIcon.ignoreContentAdaptWithSize(false);
        this.imgCloseIcon.setContentSize(cc.size(44, 38));
        this.imgCloseIcon.setTouchEnabled(false);

    },



});

/**
 * Create PaymentPopup
 * @returns {_ccs.PaymentPopup}
 */
_ccs.PaymentPopup.create = function () {
    return new _ccs.PaymentPopup();
};
