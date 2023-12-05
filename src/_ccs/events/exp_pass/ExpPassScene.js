/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ExpPassScene
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.ExpPassScene = cc.Layer.extend({

    /** @type {ccui.ImageView} */
    imgFullBgr: null,
    /** @type {ccui.ImageView} */
    imgTimerBackground: null,
    /** @type {ccui.ImageView} */
    imgClock: null,
    /** @type {ck.Text} */
    _txtTimeLeft: null,
    /** @type {ccui.Button} */
    btnTutorial: null,
    /** @type {ccui.Layout} */
    imgStarBG: null,
    /** @type {ccui.ScrollView} */
    scrollView: null,
    /** @type {ccui.ImageView} */
    imgProgressBgr: null,
    /** @type {ck.LoadingBar} */
    LoadingBar: null,
    /** @type {ccui.ImageView} */
    imgBg2: null,
    /** @type {ccui.ImageView} */
    imgTicketNormal: null,
    /** @type {ck.Text} */
    txtFree: null,
    /** @type {ccui.Layout} */
    layoutBuyTicket: null,
    /** @type {ccui.Button} */
    btnBuyTicket: null,
    /** @type {ccui.ImageView} */
    imgGem: null,
    /** @type {ck.Text} */
    txtPriceTicket: null,
    /** @type {ck.Text} */
    txtPriceReset: null,
    /** @type {ccui.Button} */
    btnPlay: null,
    /** @type {ck.Text} */
    txtPlay: null,
    /** @type {ccui.Button} */
    btnClose: null,
    /** @type {ItemInfoBubbleWidget} */
    _itemInfoBubbleWidget: null,
    /** @type {ccui.ImageView} */
    _imgInventory: null,


    /**
     * _ccs.ExpPassScene constructor
     * @constructor
     */
    ctor: function () {
        cc.Layer.prototype.ctor.call(this);
        this.setCascadeOpacityEnabled(true);
        this._initCCSChildren();
    },

    /**
     * Init nodes from ccs
     * @private
     */
    _initCCSChildren: function () {

        ///// # imgFullBgr
        this.imgFullBgr = new ccui.ImageView();
        this.imgFullBgr.setName("imgFullBgr");
        this.addChild(this.imgFullBgr);
        this.imgFullBgr.setCascadeOpacityEnabled(true);
        this.imgFullBgr.setCascadeColorEnabled(true);
        this.imgFullBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgFullBgr, 0.5, 0.5);
        let imgFullBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgFullBgr);
        imgFullBgrLayoutComponent.setPositionPercentXEnabled(true);
        imgFullBgrLayoutComponent.setPositionPercentX(0.5);
        imgFullBgrLayoutComponent.setPositionPercentYEnabled(true);
        imgFullBgrLayoutComponent.setPositionPercentY(0.5);
        imgFullBgrLayoutComponent.setPercentWidthEnabled(true);
        imgFullBgrLayoutComponent.setPercentWidth(1);
        imgFullBgrLayoutComponent.setPercentHeightEnabled(true);
        imgFullBgrLayoutComponent.setPercentHeight(1.0035);
        this.imgFullBgr.loadTexture("e12_bg1.png", 1);
        this.imgFullBgr.setUnifySizeEnabled(false);
        this.imgFullBgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this.imgFullBgr, 1, 1.0035);
        this.imgFullBgr.setTouchEnabled(true);

        ///// # imgTimerBackground
        this.imgTimerBackground = new ccui.ImageView();
        this.imgTimerBackground.setName("imgTimerBackground");
        this.imgFullBgr.addChild(this.imgTimerBackground);
        this.imgTimerBackground.setCascadeOpacityEnabled(true);
        this.imgTimerBackground.setCascadeColorEnabled(true);
        this.imgTimerBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgTimerBackground, 0.5, 0.9266);
        let imgTimerBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgTimerBackground);
        imgTimerBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        imgTimerBackgroundLayoutComponent.setPositionPercentX(0.5);
        imgTimerBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        imgTimerBackgroundLayoutComponent.setPositionPercentY(0.9266);
        this.imgTimerBackground.loadTexture("e12_timeline_bar.png", 1);
        this.imgTimerBackground.setUnifySizeEnabled(false);
        this.imgTimerBackground.ignoreContentAdaptWithSize(false);
        this.imgTimerBackground.setContentSize(cc.size(177, 119));
        this.imgTimerBackground.setTouchEnabled(false);

        ///// # imgClock
        this.imgClock = new ccui.ImageView();
        this.imgClock.setName("imgClock");
        this.imgTimerBackground.addChild(this.imgClock);
        this.imgClock.setCascadeOpacityEnabled(true);
        this.imgClock.setCascadeColorEnabled(true);
        this.imgClock.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgClock, 0.5085, 0.6981);
        let imgClockLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgClock);
        imgClockLayoutComponent.setPositionPercentXEnabled(true);
        imgClockLayoutComponent.setPositionPercentX(0.5085);
        imgClockLayoutComponent.setPositionPercentYEnabled(true);
        imgClockLayoutComponent.setPositionPercentY(0.6981);
        this.imgClock.loadTexture("continuous-purchase_clock.png", 1);
        this.imgClock.setUnifySizeEnabled(false);
        this.imgClock.ignoreContentAdaptWithSize(false);
        this.imgClock.setContentSize(cc.size(45, 53));
        this.imgClock.setTouchEnabled(false);

        ///// # _txtTimeLeft
        this._txtTimeLeft = new ck.Text();
        this._txtTimeLeft.setName("_txtTimeLeft");
        this.imgTimerBackground.addChild(this._txtTimeLeft);
        this._txtTimeLeft.setCascadeOpacityEnabled(true);
        this._txtTimeLeft.setCascadeColorEnabled(true);
        this._txtTimeLeft.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTimeLeft, 0.5, 0.2829);
        let _txtTimeLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTimeLeft);
        _txtTimeLeftLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentX(0.5);
        _txtTimeLeftLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentY(0.2829);
        this._txtTimeLeft.setTouchEnabled(false);
        this._txtTimeLeft.setUnifySizeEnabled(false);
        this._txtTimeLeft.ignoreContentAdaptWithSize(false);
        this._txtTimeLeft.setContentSize(cc.size(155.2198, 35));
        this._txtTimeLeft.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTimeLeft.setDefaultFontSize(27);
        this._txtTimeLeft.setTextHorizontalAlignment(1);
        this._txtTimeLeft.setTextVerticalAlignment(1);
        this._txtTimeLeft.enableOutline(cc.color(104, 104, 205, 255), 1);

        ///// # btnTutorial
        this.btnTutorial = new ccui.Button();
        this.btnTutorial.setName("btnTutorial");
        this.imgFullBgr.addChild(this.btnTutorial);
        this.btnTutorial.setCascadeOpacityEnabled(true);
        this.btnTutorial.setCascadeColorEnabled(true);
        this.btnTutorial.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.btnTutorial, 0.0813, 0.937);
        this.btnTutorial.setScale(0.9, 0.9);
        let btnTutorialLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.btnTutorial);
        btnTutorialLayoutComponent.setPositionPercentXEnabled(true);
        btnTutorialLayoutComponent.setPositionPercentX(0.0813);
        btnTutorialLayoutComponent.setPositionPercentYEnabled(true);
        btnTutorialLayoutComponent.setPositionPercentY(0.937);
        this.btnTutorial.loadTextureDisabled("e12_btn_help.png", 1);
        this.btnTutorial.loadTexturePressed("e12_btn_help.png", 1);
        this.btnTutorial.loadTextureNormal("e12_btn_help.png", 1);
        this.btnTutorial.setUnifySizeEnabled(false);
        this.btnTutorial.ignoreContentAdaptWithSize(false);
        this.btnTutorial.setScale9Enabled(true);
        this.btnTutorial.setCapInsets(cc.rect(15, 11, 31, 38));
        this.btnTutorial.setContentSize(cc.size(61, 60));
        this.btnTutorial.setTouchEnabled(true);

        ///// # imgStarBG
        this.imgStarBG = new ccui.Layout();
        this.imgStarBG.setName("imgStarBG");
        this.imgFullBgr.addChild(this.imgStarBG);
        this.imgStarBG.setCascadeOpacityEnabled(true);
        this.imgStarBG.setCascadeColorEnabled(true);
        this.imgStarBG.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgStarBG, 0.25, 0.3666);
        let imgStarBGLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgStarBG);
        imgStarBGLayoutComponent.setPositionPercentXEnabled(true);
        imgStarBGLayoutComponent.setPositionPercentX(0.25);
        imgStarBGLayoutComponent.setPositionPercentYEnabled(true);
        imgStarBGLayoutComponent.setPositionPercentY(0.3666);
        imgStarBGLayoutComponent.setPercentWidthEnabled(true);
        imgStarBGLayoutComponent.setPercentWidth(0.5);
        imgStarBGLayoutComponent.setPercentHeightEnabled(true);
        imgStarBGLayoutComponent.setPercentHeight(0.48);
        this.imgStarBG.setTouchEnabled(true);
        this.imgStarBG.setUnifySizeEnabled(false);
        this.imgStarBG.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this.imgStarBG, 0.5, 0.48);

        ///// # scrollView
        this.scrollView = new ccui.ScrollView();
        this.scrollView.setName("scrollView");
        this.imgFullBgr.addChild(this.scrollView);
        this.scrollView.setCascadeOpacityEnabled(true);
        this.scrollView.setCascadeColorEnabled(true);
        this.scrollView.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this.scrollView, 0.5, 0.6163);
        let scrollViewLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.scrollView);
        scrollViewLayoutComponent.setPositionPercentXEnabled(true);
        scrollViewLayoutComponent.setPositionPercentX(0.5);
        scrollViewLayoutComponent.setPositionPercentYEnabled(true);
        scrollViewLayoutComponent.setPositionPercentY(0.6163);
        scrollViewLayoutComponent.setPercentWidthEnabled(true);
        scrollViewLayoutComponent.setPercentWidth(1);
        scrollViewLayoutComponent.setPercentHeightEnabled(true);
        scrollViewLayoutComponent.setPercentHeight(0.4956);
        this.scrollView.setTouchEnabled(true);
        this.scrollView.setUnifySizeEnabled(false);
        this.scrollView.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this.scrollView, 1, 0.4956);
        this.scrollView.setClippingEnabled(true);
        this.scrollView.setInnerContainerSize(cc.size(640, 567));
        this.scrollView.setDirection(1);
        this.scrollView.setBounceEnabled(true);

        ///// # imgProgressBgr
        this.imgProgressBgr = new ccui.ImageView();
        this.imgProgressBgr.setName("imgProgressBgr");
        this.scrollView.addChild(this.imgProgressBgr);
        this.imgProgressBgr.setCascadeOpacityEnabled(true);
        this.imgProgressBgr.setCascadeColorEnabled(true);
        this.imgProgressBgr.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this.imgProgressBgr, 0.5, 1);
        let imgProgressBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgProgressBgr);
        imgProgressBgrLayoutComponent.setPositionPercentXEnabled(true);
        imgProgressBgrLayoutComponent.setPositionPercentX(0.5);
        imgProgressBgrLayoutComponent.setPositionPercentYEnabled(true);
        imgProgressBgrLayoutComponent.setPositionPercentY(1);
        this.imgProgressBgr.loadTexture("e12_Energy_bar.png", 1);
        this.imgProgressBgr.setUnifySizeEnabled(false);
        this.imgProgressBgr.ignoreContentAdaptWithSize(false);
        this.imgProgressBgr.setScale9Enabled(true);
        this.imgProgressBgr.setCapInsets(cc.rect(16, 16, 17, 541));
        this.imgProgressBgr.setContentSize(cc.size(49, 573));
        this.imgProgressBgr.setTouchEnabled(false);

        ///// # LoadingBar
        this.LoadingBar = new ck.LoadingBar();
        this.LoadingBar.setName("LoadingBar");
        this.scrollView.addChild(this.LoadingBar);
        this.LoadingBar.setCascadeOpacityEnabled(true);
        this.LoadingBar.setCascadeColorEnabled(true);
        this.LoadingBar.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this.LoadingBar, 0.5, 0.9771);
        this.LoadingBar.setRotation(90);
        let LoadingBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.LoadingBar);
        LoadingBarLayoutComponent.setPositionPercentXEnabled(true);
        LoadingBarLayoutComponent.setPositionPercentX(0.5);
        LoadingBarLayoutComponent.setPositionPercentYEnabled(true);
        LoadingBarLayoutComponent.setPositionPercentY(0.9771);
        this.LoadingBar.setTouchEnabled(false);
        this.LoadingBar.setUnifySizeEnabled(false);
        this.LoadingBar.ignoreContentAdaptWithSize(false);
        this.LoadingBar.setContentSize(cc.size(558, 23));
        this.LoadingBar.loadTexture("e12_Energy.png", 1);

        ///// # imgBg2
        this.imgBg2 = new ccui.ImageView();
        this.imgBg2.setName("imgBg2");
        this.imgFullBgr.addChild(this.imgBg2);
        this.imgBg2.setCascadeOpacityEnabled(true);
        this.imgBg2.setCascadeColorEnabled(true);
        this.imgBg2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgBg2, 0.5, 0.4694);
        let imgBg2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgBg2);
        imgBg2LayoutComponent.setPositionPercentXEnabled(true);
        imgBg2LayoutComponent.setPositionPercentX(0.5);
        imgBg2LayoutComponent.setPositionPercentYEnabled(true);
        imgBg2LayoutComponent.setPositionPercentY(0.4694);
        imgBg2LayoutComponent.setPercentWidthEnabled(true);
        imgBg2LayoutComponent.setPercentWidth(1);
        imgBg2LayoutComponent.setPercentHeightEnabled(true);
        imgBg2LayoutComponent.setPercentHeight(0.7325);
        this.imgBg2.loadTexture("e12_bg2.png", 1);
        this.imgBg2.setUnifySizeEnabled(false);
        this.imgBg2.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this.imgBg2, 1, 0.7325);
        this.imgBg2.setTouchEnabled(false);

        ///// # imgTicketNormal
        this.imgTicketNormal = new ccui.ImageView();
        this.imgTicketNormal.setName("imgTicketNormal");
        this.imgBg2.addChild(this.imgTicketNormal);
        this.imgTicketNormal.setCascadeOpacityEnabled(true);
        this.imgTicketNormal.setCascadeColorEnabled(true);
        this.imgTicketNormal.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgTicketNormal, 0.7512, 0.8188);
        let imgTicketNormalLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgTicketNormal);
        imgTicketNormalLayoutComponent.setPositionPercentXEnabled(true);
        imgTicketNormalLayoutComponent.setPositionPercentX(0.7512);
        imgTicketNormalLayoutComponent.setPositionPercentYEnabled(true);
        imgTicketNormalLayoutComponent.setPositionPercentY(0.8188);
        this.imgTicketNormal.loadTexture("e12_pass_free.png", 1);
        this.imgTicketNormal.setUnifySizeEnabled(false);
        this.imgTicketNormal.ignoreContentAdaptWithSize(false);
        this.imgTicketNormal.setContentSize(cc.size(164, 92));
        this.imgTicketNormal.setTouchEnabled(false);

        ///// # txtFree
        this.txtFree = new ck.Text();
        this.txtFree.setName("txtFree");
        this.imgTicketNormal.addChild(this.txtFree);
        this.txtFree.setCascadeOpacityEnabled(true);
        this.txtFree.setCascadeColorEnabled(true);
        this.txtFree.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this.txtFree, 0.5, 0.0761);
        this.txtFree.setRotationX(8);
        let txtFreeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.txtFree);
        txtFreeLayoutComponent.setPositionPercentXEnabled(true);
        txtFreeLayoutComponent.setPositionPercentX(0.5);
        this.txtFree.setTouchEnabled(false);
        this.txtFree.setUnifySizeEnabled(false);
        this.txtFree.ignoreContentAdaptWithSize(false);
        this.txtFree.setContentSize(cc.size(253.5371, 42));
        this.txtFree.setFontName("fonts/LilitaOneRegular.ttf");
        this.txtFree.setDefaultFontSize(35);
        this.txtFree.setString(gm.localize.getText("TXT_FREE"));
        this.txtFree.setTextHorizontalAlignment(1);
        this.txtFree.setTextVerticalAlignment(1);
        this.txtFree.enableOutline(cc.color(0, 0, 0, 255), 1);
        this.txtFree.enableShadow(cc.color(58, 50, 112, 255), cc.size(0, -3), 0);

        ///// # layoutBuyTicket
        this.layoutBuyTicket = new ccui.Layout();
        this.layoutBuyTicket.setName("layoutBuyTicket");
        this.imgFullBgr.addChild(this.layoutBuyTicket);
        this.layoutBuyTicket.setCascadeOpacityEnabled(true);
        this.layoutBuyTicket.setCascadeColorEnabled(true);
        this.layoutBuyTicket.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this.layoutBuyTicket, 0.5, 0);
        let layoutBuyTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.layoutBuyTicket);
        layoutBuyTicketLayoutComponent.setPositionPercentXEnabled(true);
        layoutBuyTicketLayoutComponent.setPositionPercentX(0.5);
        layoutBuyTicketLayoutComponent.setPercentWidthEnabled(true);
        layoutBuyTicketLayoutComponent.setPercentWidth(1);
        this.layoutBuyTicket.setTouchEnabled(false);
        this.layoutBuyTicket.setUnifySizeEnabled(false);
        this.layoutBuyTicket.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this.layoutBuyTicket, 1);
        this.layoutBuyTicket.setContentSize(cc.size(this.layoutBuyTicket.width, 127.89));

        ///// # btnBuyTicket
        this.btnBuyTicket = new ccui.Button();
        this.btnBuyTicket.setName("btnBuyTicket");
        this.layoutBuyTicket.addChild(this.btnBuyTicket);
        this.btnBuyTicket.setCascadeOpacityEnabled(true);
        this.btnBuyTicket.setCascadeColorEnabled(true);
        this.btnBuyTicket.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.btnBuyTicket, 0.6711, 0.4665);
        let btnBuyTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.btnBuyTicket);
        btnBuyTicketLayoutComponent.setPositionPercentXEnabled(true);
        btnBuyTicketLayoutComponent.setPositionPercentX(0.6711);
        btnBuyTicketLayoutComponent.setPositionPercentYEnabled(true);
        btnBuyTicketLayoutComponent.setPositionPercentY(0.4665);
        this.btnBuyTicket.loadTextureDisabled("buttons/rectangles/02_Green.png", 1);
        this.btnBuyTicket.loadTexturePressed("buttons/rectangles/02_Green.png", 1);
        this.btnBuyTicket.loadTextureNormal("buttons/rectangles/02_Green.png", 1);
        this.btnBuyTicket.setUnifySizeEnabled(false);
        this.btnBuyTicket.ignoreContentAdaptWithSize(false);
        this.btnBuyTicket.setContentSize(cc.size(200, 57));
        this.btnBuyTicket.setTouchEnabled(true);

        ///// # imgGem
        this.imgGem = new ccui.ImageView();
        this.imgGem.setName("imgGem");
        this.btnBuyTicket.addChild(this.imgGem);
        this.imgGem.setCascadeOpacityEnabled(true);
        this.imgGem.setCascadeColorEnabled(true);
        this.imgGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgGem, 0.3528, 1.2208);
        this.imgGem.setScale(0.3, 0.3);
        let imgGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgGem);
        imgGemLayoutComponent.setPositionPercentXEnabled(true);
        imgGemLayoutComponent.setPositionPercentX(0.3528);
        imgGemLayoutComponent.setPositionPercentYEnabled(true);
        imgGemLayoutComponent.setPositionPercentY(1.2208);
        this.imgGem.loadTexture("icons/color/gems/Gem.png", 1);
        this.imgGem.setUnifySizeEnabled(false);
        this.imgGem.ignoreContentAdaptWithSize(false);
        this.imgGem.setContentSize(cc.size(128, 128));
        this.imgGem.setTouchEnabled(false);

        ///// # txtPriceTicket
        this.txtPriceTicket = new ck.Text();
        this.txtPriceTicket.setName("txtPriceTicket");
        this.btnBuyTicket.addChild(this.txtPriceTicket);
        this.txtPriceTicket.setCascadeOpacityEnabled(true);
        this.txtPriceTicket.setCascadeColorEnabled(true);
        this.txtPriceTicket.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.txtPriceTicket, 0.5, 0.5615);
        let txtPriceTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.txtPriceTicket);
        txtPriceTicketLayoutComponent.setPositionPercentXEnabled(true);
        txtPriceTicketLayoutComponent.setPositionPercentX(0.5);
        txtPriceTicketLayoutComponent.setPositionPercentYEnabled(true);
        txtPriceTicketLayoutComponent.setPositionPercentY(0.5615);
        this.txtPriceTicket.setTouchEnabled(false);
        this.txtPriceTicket.setUnifySizeEnabled(false);
        this.txtPriceTicket.ignoreContentAdaptWithSize(false);
        this.txtPriceTicket.setContentSize(cc.size(173.6174, 40));
        this.txtPriceTicket.setFontName("fonts/LilitaOneRegular.ttf");
        this.txtPriceTicket.setDefaultFontSize(27);
        this.txtPriceTicket.setString(gm.localize.getText("TXT_UNLOCK_PASS"));
        this.txtPriceTicket.setTextHorizontalAlignment(1);
        this.txtPriceTicket.setTextVerticalAlignment(1);
        this.txtPriceTicket.enableShadow(cc.color(0, 128, 0, 255), cc.size(0, -2), 0);

        ///// # txtPriceReset
        this.txtPriceReset = new ck.Text();
        this.txtPriceReset.setName("txtPriceReset");
        this.btnBuyTicket.addChild(this.txtPriceReset);
        this.txtPriceReset.setCascadeOpacityEnabled(true);
        this.txtPriceReset.setCascadeColorEnabled(true);
        this.txtPriceReset.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this.txtPriceReset, 0.4506, 1.2157);
        let txtPriceResetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.txtPriceReset);
        txtPriceResetLayoutComponent.setPositionPercentXEnabled(true);
        txtPriceResetLayoutComponent.setPositionPercentX(0.4506);
        txtPriceResetLayoutComponent.setPositionPercentYEnabled(true);
        txtPriceResetLayoutComponent.setPositionPercentY(1.2157);
        this.txtPriceReset.setTouchEnabled(false);
        this.txtPriceReset.setUnifySizeEnabled(false);
        this.txtPriceReset.ignoreContentAdaptWithSize(false);
        this.txtPriceReset.setContentSize(cc.size(92.6835, 24));
        this.txtPriceReset.setFontName("fonts/LilitaOneRegular.ttf");
        this.txtPriceReset.setDefaultFontSize(25);
        this.txtPriceReset.setString("500");
        this.txtPriceReset.setTextHorizontalAlignment(0);
        this.txtPriceReset.setTextVerticalAlignment(1);
        this.txtPriceReset.enableShadow(cc.color(0, 0, 255, 255), cc.size(0, -2), 0);

        ///// # btnPlay
        this.btnPlay = new ccui.Button();
        this.btnPlay.setName("btnPlay");
        this.layoutBuyTicket.addChild(this.btnPlay);
        this.btnPlay.setCascadeOpacityEnabled(true);
        this.btnPlay.setCascadeColorEnabled(true);
        this.btnPlay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.btnPlay, 0.33, 0.4665);
        let btnPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.btnPlay);
        btnPlayLayoutComponent.setPositionPercentXEnabled(true);
        btnPlayLayoutComponent.setPositionPercentX(0.33);
        btnPlayLayoutComponent.setPositionPercentYEnabled(true);
        btnPlayLayoutComponent.setPositionPercentY(0.4665);
        this.btnPlay.loadTextureDisabled("buttons/rectangles/02_Blue.png", 1);
        this.btnPlay.loadTexturePressed("buttons/rectangles/02_Blue.png", 1);
        this.btnPlay.loadTextureNormal("buttons/rectangles/02_Blue.png", 1);
        this.btnPlay.setUnifySizeEnabled(false);
        this.btnPlay.ignoreContentAdaptWithSize(false);
        this.btnPlay.setContentSize(cc.size(200, 57));
        this.btnPlay.setTouchEnabled(true);

        ///// # txtPlay
        this.txtPlay = new ck.Text();
        this.txtPlay.setName("txtPlay");
        this.btnPlay.addChild(this.txtPlay);
        this.txtPlay.setCascadeOpacityEnabled(true);
        this.txtPlay.setCascadeColorEnabled(true);
        this.txtPlay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.txtPlay, 0.5, 0.5615);
        let txtPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.txtPlay);
        txtPlayLayoutComponent.setPositionPercentXEnabled(true);
        txtPlayLayoutComponent.setPositionPercentX(0.5);
        txtPlayLayoutComponent.setPositionPercentYEnabled(true);
        txtPlayLayoutComponent.setPositionPercentY(0.5615);
        this.txtPlay.setTouchEnabled(false);
        this.txtPlay.setUnifySizeEnabled(false);
        this.txtPlay.ignoreContentAdaptWithSize(false);
        this.txtPlay.setContentSize(cc.size(174.9364, 40));
        this.txtPlay.setFontName("fonts/LilitaOneRegular.ttf");
        this.txtPlay.setDefaultFontSize(27);
        this.txtPlay.setString(gm.localize.getText("TXT_PLAY_NOW"));
        this.txtPlay.setTextHorizontalAlignment(1);
        this.txtPlay.setTextVerticalAlignment(1);
        this.txtPlay.enableShadow(cc.color(0, 128, 0, 255), cc.size(0, -2), 0);

        ///// # btnClose
        this.btnClose = new ccui.Button();
        this.btnClose.setName("btnClose");
        this.layoutBuyTicket.addChild(this.btnClose);
        this.btnClose.setCascadeOpacityEnabled(true);
        this.btnClose.setCascadeColorEnabled(true);
        this.btnClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.btnClose, 0.0731, 0.4665);
        let btnCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.btnClose);
        btnCloseLayoutComponent.setPositionPercentXEnabled(true);
        btnCloseLayoutComponent.setPositionPercentX(0.0731);
        btnCloseLayoutComponent.setPositionPercentYEnabled(true);
        btnCloseLayoutComponent.setPositionPercentY(0.4665);
        btnCloseLayoutComponent.setPercentWidthEnabled(true);
        btnCloseLayoutComponent.setPercentWidth(0.0969);
        this.btnClose.loadTextureDisabled("e12_btn_exit.png", 1);
        this.btnClose.loadTexturePressed("e12_btn_exit.png", 1);
        this.btnClose.loadTextureNormal("e12_btn_exit.png", 1);
        this.btnClose.setUnifySizeEnabled(false);
        this.btnClose.ignoreContentAdaptWithSize(false);
        this.btnClose.setScale9Enabled(true);
        this.btnClose.setCapInsets(cc.rect(15, 11, 32, 38));
        ck.UIUtils.setWidthPercent(this.btnClose, 0.0969);
        this.btnClose.setContentSize(cc.size(this.btnClose.width, 60));
        this.btnClose.setTouchEnabled(true);

        ///// # _itemInfoBubbleWidget
        this._itemInfoBubbleWidget = new ItemInfoBubbleWidget();
        this._itemInfoBubbleWidget.setName("_itemInfoBubbleWidget");
        this.imgFullBgr.addChild(this._itemInfoBubbleWidget);
        this._itemInfoBubbleWidget.setCascadeOpacityEnabled(true);
        this._itemInfoBubbleWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._itemInfoBubbleWidget, 0.46, 0.3579);
        this._itemInfoBubbleWidget.setVisible(false);
        let _itemInfoBubbleWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._itemInfoBubbleWidget);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentX(0.46);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentY(0.3579);

        ///// # _imgInventory
        this._imgInventory = new ccui.ImageView();
        this._imgInventory.setName("_imgInventory");
        this.imgFullBgr.addChild(this._imgInventory);
        this._imgInventory.setCascadeOpacityEnabled(true);
        this._imgInventory.setCascadeColorEnabled(true);
        this._imgInventory.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgInventory, 0.9104, 0.0543);
        let _imgInventoryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgInventory);
        _imgInventoryLayoutComponent.setPositionPercentXEnabled(true);
        _imgInventoryLayoutComponent.setPositionPercentX(0.9104);
        _imgInventoryLayoutComponent.setPositionPercentYEnabled(true);
        _imgInventoryLayoutComponent.setPositionPercentY(0.0543);
        this._imgInventory.loadTexture("icons/color/basic/Inventory.png", 1);
        this._imgInventory.setUnifySizeEnabled(false);
        this._imgInventory.ignoreContentAdaptWithSize(false);
        this._imgInventory.setContentSize(cc.size(73, 69));
        this._imgInventory.setTouchEnabled(false);

    },



});

/**
 * Create ExpPassScene
 * @returns {_ccs.ExpPassScene}
 */
_ccs.ExpPassScene.create = function () {
    return new _ccs.ExpPassScene();
};
