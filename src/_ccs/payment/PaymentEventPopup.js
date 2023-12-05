/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PaymentEventPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.PaymentEventPopup = cc.Layer.extend({

    /** @type {ccui.ImageView} */
    imageBgr: null,
    /** @type {ccui.ImageView} */
    _imgTitle: null,
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
    /** @type {ccui.ImageView} */
    _tokenBg: null,
    /** @type {ccui.ImageView} */
    _imgGlow: null,
    /** @type {ccui.ImageView} */
    _imgIcon1: null,
    /** @type {ccui.ImageView} */
    _imgIcon2: null,
    /** @type {ccui.ImageView} */
    _imgIcon3: null,
    /** @type {ck.Text} */
    _txtAmount: null,
    /** @type {ccui.ImageView} */
    _imgBonus: null,
    /** @type {ck.Text} */
    _txtPercentBonus: null,
    /** @type {PaymentNodePay} */
    _choosePacks: null,
    /** @type {ccui.Button} */
    _btnChannels: null,
    /** @type {ccui.ImageView} */
    _imgNext: null,
    /** @type {ck.Text} */
    _txtName: null,
    /** @type {ccui.ImageView} */
    _imgChannels: null,
    /** @type {ccui.Button} */
    _btnClose: null,
    /** @type {ItemInfoBubbleWidget} */
    _itemInfoBubbleWidget: null,


    /**
     * _ccs.PaymentEventPopup constructor
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

        ///// # imageBgr
        this.imageBgr = new ccui.ImageView();
        this.imageBgr.setName("imageBgr");
        this.addChild(this.imageBgr);
        this.imageBgr.setCascadeOpacityEnabled(true);
        this.imageBgr.setCascadeColorEnabled(true);
        this.imageBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imageBgr, 0.5, 0.5);
        let imageBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imageBgr);
        imageBgrLayoutComponent.setPositionPercentXEnabled(true);
        imageBgrLayoutComponent.setPositionPercentX(0.5);
        imageBgrLayoutComponent.setPositionPercentYEnabled(true);
        imageBgrLayoutComponent.setPositionPercentY(0.5);
        this.imageBgr.loadTexture("payment/Board_Shop_Ev.png", 1);
        this.imageBgr.setUnifySizeEnabled(false);
        this.imageBgr.ignoreContentAdaptWithSize(false);
        this.imageBgr.setContentSize(cc.size(617, 783));
        this.imageBgr.setTouchEnabled(true);

        ///// # _imgTitle
        this._imgTitle = new ccui.ImageView();
        this._imgTitle.setName("_imgTitle");
        this.imageBgr.addChild(this._imgTitle);
        this._imgTitle.setCascadeOpacityEnabled(true);
        this._imgTitle.setCascadeColorEnabled(true);
        this._imgTitle.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTitle, 0.0109, 0.8531);
        let _imgTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTitle);
        _imgTitleLayoutComponent.setPositionPercentXEnabled(true);
        _imgTitleLayoutComponent.setPositionPercentX(0.0109);
        _imgTitleLayoutComponent.setPositionPercentYEnabled(true);
        _imgTitleLayoutComponent.setPositionPercentY(0.8531);
        this._imgTitle.loadTexture("texts/payment/Event_Shop.png", 1);
        this._imgTitle.setTouchEnabled(false);

        ///// # _webBanner
        this._webBanner = new ccui.ImageView();
        this._webBanner.setName("_webBanner");
        this.imageBgr.addChild(this._webBanner);
        this._webBanner.setCascadeOpacityEnabled(true);
        this._webBanner.setCascadeColorEnabled(true);
        this._webBanner.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._webBanner, 0.4951, 0.3947);
        this._webBanner.setScale(0.78, 0.78);
        let _webBannerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._webBanner);
        _webBannerLayoutComponent.setPositionPercentXEnabled(true);
        _webBannerLayoutComponent.setPositionPercentX(0.4951);
        _webBannerLayoutComponent.setPositionPercentYEnabled(true);
        _webBannerLayoutComponent.setPositionPercentY(0.3947);
        _webBannerLayoutComponent.setPercentWidthEnabled(true);
        _webBannerLayoutComponent.setPercentWidth(1.2303);
        _webBannerLayoutComponent.setPercentHeightEnabled(true);
        _webBannerLayoutComponent.setPercentHeight(0.9367);
        this._webBanner.loadTexture("payment/BannerBewyap.png", 1);
        this._webBanner.setUnifySizeEnabled(false);
        this._webBanner.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._webBanner, 1.2303, 0.9367);
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
        ck.UIUtils.setPositionPercent(this.texts_payment_WebpayUrl_3, 0.5, 0.58);
        let texts_payment_WebpayUrl_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.texts_payment_WebpayUrl_3);
        texts_payment_WebpayUrl_3LayoutComponent.setPositionPercentXEnabled(true);
        texts_payment_WebpayUrl_3LayoutComponent.setPositionPercentX(0.5);
        texts_payment_WebpayUrl_3LayoutComponent.setPositionPercentYEnabled(true);
        texts_payment_WebpayUrl_3LayoutComponent.setPositionPercentY(0.58);
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
        this._webBanner.addChild(this._imgWebpayPay);
        this._imgWebpayPay.setCascadeOpacityEnabled(true);
        this._imgWebpayPay.setCascadeColorEnabled(true);
        this._imgWebpayPay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgWebpayPay, 0.5, -0.02);
        let _imgWebpayPayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgWebpayPay);
        _imgWebpayPayLayoutComponent.setPositionPercentXEnabled(true);
        _imgWebpayPayLayoutComponent.setPositionPercentX(0.5);
        _imgWebpayPayLayoutComponent.setPositionPercentYEnabled(true);
        _imgWebpayPayLayoutComponent.setPositionPercentY(-0.02);
        this._imgWebpayPay.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgWebpayPay.setUnifySizeEnabled(false);
        this._imgWebpayPay.ignoreContentAdaptWithSize(false);
        this._imgWebpayPay.setContentSize(cc.size(230, 81));
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

        ///// # _imgBonusItemsBgr
        this._imgBonusItemsBgr = new ccui.ImageView();
        this._imgBonusItemsBgr.setName("_imgBonusItemsBgr");
        this.imageBgr.addChild(this._imgBonusItemsBgr);
        this._imgBonusItemsBgr.setCascadeOpacityEnabled(true);
        this._imgBonusItemsBgr.setCascadeColorEnabled(true);
        this._imgBonusItemsBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBonusItemsBgr, 0.5, 0.59);
        this._imgBonusItemsBgr.setScale(0.93, 0.93);
        let _imgBonusItemsBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBonusItemsBgr);
        _imgBonusItemsBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBonusItemsBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBonusItemsBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBonusItemsBgrLayoutComponent.setPositionPercentY(0.59);
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

        ///// # _tokenBg
        this._tokenBg = new ccui.ImageView();
        this._tokenBg.setName("_tokenBg");
        this.imageBgr.addChild(this._tokenBg);
        this._tokenBg.setCascadeOpacityEnabled(true);
        this._tokenBg.setCascadeColorEnabled(true);
        this._tokenBg.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._tokenBg, 0.4932, 0.18);
        this._tokenBg.setScale(1.2, 1.2);
        let _tokenBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._tokenBg);
        _tokenBgLayoutComponent.setPositionPercentXEnabled(true);
        _tokenBgLayoutComponent.setPositionPercentX(0.4932);
        _tokenBgLayoutComponent.setPositionPercentYEnabled(true);
        _tokenBgLayoutComponent.setPositionPercentY(0.18);
        this._tokenBg.loadTexture("event-collector/Pillow.png", 1);
        this._tokenBg.setUnifySizeEnabled(false);
        this._tokenBg.ignoreContentAdaptWithSize(false);
        this._tokenBg.setScale9Enabled(true);
        this._tokenBg.setCapInsets(cc.rect(83, 29, 61, 32));
        this._tokenBg.setContentSize(cc.size(227, 90));
        this._tokenBg.setTouchEnabled(false);

        ///// # _imgGlow
        this._imgGlow = new ccui.ImageView();
        this._imgGlow.setName("_imgGlow");
        this._tokenBg.addChild(this._imgGlow);
        this._imgGlow.setCascadeOpacityEnabled(true);
        this._imgGlow.setCascadeColorEnabled(true);
        this._imgGlow.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGlow, 0.5, 1.2752);
        this._imgGlow.setScale(0.7, 0.7);
        this._imgGlow.setOpacity(207);
        let _imgGlowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGlow);
        _imgGlowLayoutComponent.setPositionPercentXEnabled(true);
        _imgGlowLayoutComponent.setPositionPercentX(0.5);
        _imgGlowLayoutComponent.setPositionPercentYEnabled(true);
        _imgGlowLayoutComponent.setPositionPercentY(1.2752);
        this._imgGlow.loadTexture("vfx/glows/Glow_01.png", 1);
        this._imgGlow.setUnifySizeEnabled(false);
        this._imgGlow.ignoreContentAdaptWithSize(false);
        this._imgGlow.setContentSize(cc.size(317, 314));
        this._imgGlow.setTouchEnabled(false);

        ///// # _imgIcon1
        this._imgIcon1 = new ccui.ImageView();
        this._imgIcon1.setName("_imgIcon1");
        this._tokenBg.addChild(this._imgIcon1);
        this._imgIcon1.setCascadeOpacityEnabled(true);
        this._imgIcon1.setCascadeColorEnabled(true);
        this._imgIcon1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon1, 0.3942, 1.3429);
        this._imgIcon1.setRotation(-11.4721);
        let _imgIcon1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon1);
        _imgIcon1LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon1LayoutComponent.setPositionPercentX(0.3942);
        _imgIcon1LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon1LayoutComponent.setPositionPercentY(1.3429);
        this._imgIcon1.loadTexture("Default/ImageFile.png", 0);
        this._imgIcon1.setUnifySizeEnabled(false);
        this._imgIcon1.ignoreContentAdaptWithSize(false);
        this._imgIcon1.setContentSize(cc.size(46, 46));
        this._imgIcon1.setTouchEnabled(false);

        ///// # _imgIcon2
        this._imgIcon2 = new ccui.ImageView();
        this._imgIcon2.setName("_imgIcon2");
        this._tokenBg.addChild(this._imgIcon2);
        this._imgIcon2.setCascadeOpacityEnabled(true);
        this._imgIcon2.setCascadeColorEnabled(true);
        this._imgIcon2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon2, 0.5217, 1.5784);
        let _imgIcon2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon2);
        _imgIcon2LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon2LayoutComponent.setPositionPercentX(0.5217);
        _imgIcon2LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon2LayoutComponent.setPositionPercentY(1.5784);
        this._imgIcon2.loadTexture("Default/ImageFile.png", 0);
        this._imgIcon2.setUnifySizeEnabled(false);
        this._imgIcon2.ignoreContentAdaptWithSize(false);
        this._imgIcon2.setContentSize(cc.size(46, 46));
        this._imgIcon2.setTouchEnabled(false);

        ///// # _imgIcon3
        this._imgIcon3 = new ccui.ImageView();
        this._imgIcon3.setName("_imgIcon3");
        this._tokenBg.addChild(this._imgIcon3);
        this._imgIcon3.setCascadeOpacityEnabled(true);
        this._imgIcon3.setCascadeColorEnabled(true);
        this._imgIcon3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon3, 0.6189, 1.3256);
        this._imgIcon3.setRotationX(11.7028);
        this._imgIcon3.setRotationY(11.701);
        let _imgIcon3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon3);
        _imgIcon3LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon3LayoutComponent.setPositionPercentX(0.6189);
        _imgIcon3LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon3LayoutComponent.setPositionPercentY(1.3256);
        this._imgIcon3.loadTexture("Default/ImageFile.png", 0);
        this._imgIcon3.setUnifySizeEnabled(false);
        this._imgIcon3.ignoreContentAdaptWithSize(false);
        this._imgIcon3.setContentSize(cc.size(46, 46));
        this._imgIcon3.setTouchEnabled(false);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._tokenBg.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.5, 0.2871);
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.5);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.2871);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(true);
        this._txtAmount.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAmount.setDefaultFontSize(45);
        this._txtAmount.setTextHorizontalAlignment(2);
        this._txtAmount.setTextVerticalAlignment(1);
        this._txtAmount.enableOutline(cc.color(53, 96, 125, 255), 2);

        ///// # _imgBonus
        this._imgBonus = new ccui.ImageView();
        this._imgBonus.setName("_imgBonus");
        this._tokenBg.addChild(this._imgBonus);
        this._imgBonus.setCascadeOpacityEnabled(true);
        this._imgBonus.setCascadeColorEnabled(true);
        this._imgBonus.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBonus, 0.9667, 1.917);
        this._imgBonus.setScale(0.8, 0.8);
        let _imgBonusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBonus);
        _imgBonusLayoutComponent.setPositionPercentXEnabled(true);
        _imgBonusLayoutComponent.setPositionPercentX(0.9667);
        _imgBonusLayoutComponent.setPositionPercentYEnabled(true);
        _imgBonusLayoutComponent.setPositionPercentY(1.917);
        this._imgBonus.loadTexture("payment/Tag_01.png", 1);
        this._imgBonus.setUnifySizeEnabled(false);
        this._imgBonus.ignoreContentAdaptWithSize(false);
        this._imgBonus.setContentSize(cc.size(110, 112));
        this._imgBonus.setTouchEnabled(false);

        ///// # _txtPercentBonus
        this._txtPercentBonus = new ck.Text();
        this._txtPercentBonus.setName("_txtPercentBonus");
        this._imgBonus.addChild(this._txtPercentBonus);
        this._txtPercentBonus.setCascadeOpacityEnabled(true);
        this._txtPercentBonus.setCascadeColorEnabled(true);
        this._txtPercentBonus.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPercentBonus, 0.5319, 0.5295);
        this._txtPercentBonus.setRotation(19.1636);
        this._txtPercentBonus.setTextColor(cc.color(255, 255, 0, 255));
        let _txtPercentBonusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPercentBonus);
        _txtPercentBonusLayoutComponent.setPositionPercentXEnabled(true);
        _txtPercentBonusLayoutComponent.setPositionPercentX(0.5319);
        _txtPercentBonusLayoutComponent.setPositionPercentYEnabled(true);
        _txtPercentBonusLayoutComponent.setPositionPercentY(0.5295);
        this._txtPercentBonus.setTouchEnabled(false);
        this._txtPercentBonus.ignoreContentAdaptWithSize(true);
        this._txtPercentBonus.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtPercentBonus.setDefaultFontSize(40);
        this._txtPercentBonus.setString(gm.localize.getText("TXT_666%"));
        this._txtPercentBonus.setTextHorizontalAlignment(1);
        this._txtPercentBonus.setTextVerticalAlignment(1);
        this._txtPercentBonus.enableOutline(cc.color(77, 77, 77, 255), 2);

        ///// # _choosePacks
        this._choosePacks = new PaymentNodePay();
        this._choosePacks.setName("_choosePacks");
        this.imageBgr.addChild(this._choosePacks);
        this._choosePacks.setCascadeOpacityEnabled(true);
        this._choosePacks.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._choosePacks, 0.5, 0.0117);
        let _choosePacksLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._choosePacks);
        _choosePacksLayoutComponent.setPositionPercentXEnabled(true);
        _choosePacksLayoutComponent.setPositionPercentX(0.5);
        _choosePacksLayoutComponent.setPositionPercentYEnabled(true);
        _choosePacksLayoutComponent.setPositionPercentY(0.0117);

        ///// # _btnChannels
        this._btnChannels = new ccui.Button();
        this._btnChannels.setName("_btnChannels");
        this.imageBgr.addChild(this._btnChannels);
        this._btnChannels.setCascadeOpacityEnabled(true);
        this._btnChannels.setCascadeColorEnabled(true);
        this._btnChannels.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnChannels, 0.5, -0.1033);
        let _btnChannelsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnChannels);
        _btnChannelsLayoutComponent.setPositionPercentXEnabled(true);
        _btnChannelsLayoutComponent.setPositionPercentX(0.5);
        _btnChannelsLayoutComponent.setPositionPercentYEnabled(true);
        _btnChannelsLayoutComponent.setPositionPercentY(-0.1033);
        this._btnChannels.loadTextureDisabled("buttons/rectangles/Green_02.png", 1);
        this._btnChannels.loadTexturePressed("buttons/rectangles/Green_02.png", 1);
        this._btnChannels.loadTextureNormal("buttons/rectangles/Green_02.png", 1);
        this._btnChannels.setUnifySizeEnabled(false);
        this._btnChannels.ignoreContentAdaptWithSize(false);
        this._btnChannels.setScale9Enabled(true);
        this._btnChannels.setCapInsets(cc.rect(56, 0, 12, 67));
        this._btnChannels.setContentSize(cc.size(159, 67));
        this._btnChannels.setTouchEnabled(true);

        ///// # _imgNext
        this._imgNext = new ccui.ImageView();
        this._imgNext.setName("_imgNext");
        this._btnChannels.addChild(this._imgNext);
        this._imgNext.setCascadeOpacityEnabled(true);
        this._imgNext.setCascadeColorEnabled(true);
        this._imgNext.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgNext, 0.9114, 0.5549);
        let _imgNextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNext);
        _imgNextLayoutComponent.setPositionPercentXEnabled(true);
        _imgNextLayoutComponent.setPositionPercentX(0.9114);
        _imgNextLayoutComponent.setPositionPercentYEnabled(true);
        _imgNextLayoutComponent.setPositionPercentY(0.5549);
        this._imgNext.loadTexture("channel_next.png", 1);
        this._imgNext.setUnifySizeEnabled(false);
        this._imgNext.ignoreContentAdaptWithSize(false);
        this._imgNext.setContentSize(cc.size(13, 17));
        this._imgNext.setTouchEnabled(false);

        ///// # _txtName
        this._txtName = new ck.Text();
        this._txtName.setName("_txtName");
        this._btnChannels.addChild(this._txtName);
        this._txtName.setCascadeOpacityEnabled(true);
        this._txtName.setCascadeColorEnabled(true);
        this._txtName.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName, 0.5843, 0.573);
        let _txtNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName);
        _txtNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameLayoutComponent.setPositionPercentX(0.5843);
        _txtNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameLayoutComponent.setPositionPercentY(0.573);
        this._txtName.setTouchEnabled(false);
        this._txtName.setUnifySizeEnabled(false);
        this._txtName.ignoreContentAdaptWithSize(false);
        this._txtName.setContentSize(cc.size(87, 32));
        this._txtName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName.setDefaultFontSize(22);
        this._txtName.setString(gm.localize.getText("TXT_VODAFONE"));
        this._txtName.setTextHorizontalAlignment(1);
        this._txtName.setTextVerticalAlignment(1);
        this._txtName.enableOutline(cc.color(74, 29, 13, 255), 1);

        ///// # _imgChannels
        this._imgChannels = new ccui.ImageView();
        this._imgChannels.setName("_imgChannels");
        this._btnChannels.addChild(this._imgChannels);
        this._imgChannels.setCascadeOpacityEnabled(true);
        this._imgChannels.setCascadeColorEnabled(true);
        this._imgChannels.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgChannels, 0.16, 0.575);
        this._imgChannels.setScale(0.6, 0.6);
        let _imgChannelsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgChannels);
        _imgChannelsLayoutComponent.setPositionPercentXEnabled(true);
        _imgChannelsLayoutComponent.setPositionPercentX(0.16);
        _imgChannelsLayoutComponent.setPositionPercentYEnabled(true);
        _imgChannelsLayoutComponent.setPositionPercentY(0.575);
        this._imgChannels.loadTexture("event15_tlkom.png", 1);
        this._imgChannels.setUnifySizeEnabled(false);
        this._imgChannels.ignoreContentAdaptWithSize(false);
        this._imgChannels.setContentSize(cc.size(78, 69));
        this._imgChannels.setTouchEnabled(false);

        ///// # _btnClose
        this._btnClose = new ccui.Button();
        this._btnClose.setName("_btnClose");
        this.imageBgr.addChild(this._btnClose);
        this._btnClose.setCascadeOpacityEnabled(true);
        this._btnClose.setCascadeColorEnabled(true);
        this._btnClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnClose, 0.9294, 0.954);
        let _btnCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnClose);
        _btnCloseLayoutComponent.setPositionPercentXEnabled(true);
        _btnCloseLayoutComponent.setPositionPercentX(0.9294);
        _btnCloseLayoutComponent.setPositionPercentYEnabled(true);
        _btnCloseLayoutComponent.setPositionPercentY(0.954);
        this._btnClose.loadTextureDisabled("buttons/rectangles/Close.png", 1);
        this._btnClose.loadTexturePressed("buttons/rectangles/Close.png", 1);
        this._btnClose.loadTextureNormal("buttons/rectangles/Close.png", 1);
        this._btnClose.setUnifySizeEnabled(false);
        this._btnClose.ignoreContentAdaptWithSize(false);
        this._btnClose.setContentSize(cc.size(77, 80));
        this._btnClose.setTouchEnabled(true);

        ///// # _itemInfoBubbleWidget
        this._itemInfoBubbleWidget = new ItemInfoBubbleWidget();
        this._itemInfoBubbleWidget.setName("_itemInfoBubbleWidget");
        this.imageBgr.addChild(this._itemInfoBubbleWidget);
        this._itemInfoBubbleWidget.setCascadeOpacityEnabled(true);
        this._itemInfoBubbleWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._itemInfoBubbleWidget, 0.495, 0.4843);
        this._itemInfoBubbleWidget.setVisible(false);
        let _itemInfoBubbleWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._itemInfoBubbleWidget);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentX(0.495);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentY(0.4843);

    },



});

/**
 * Create PaymentEventPopup
 * @returns {_ccs.PaymentEventPopup}
 */
_ccs.PaymentEventPopup.create = function () {
    return new _ccs.PaymentEventPopup();
};
