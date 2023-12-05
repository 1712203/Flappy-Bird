/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.Event15Popup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.Event15Popup = cc.Layer.extend({

    /** @type {ccui.ImageView} */
    _imgPopup: null,
    /** @type {ccui.Button} */
    _btnClose: null,
    /** @type {ccui.Button} */
    _btnInfo: null,
    /** @type {ccui.ImageView} */
    _imgFrameTime: null,
    /** @type {ccui.ImageView} */
    _imgClock: null,
    /** @type {ck.Text} */
    _txtTimeLeft: null,
    /** @type {ccui.ImageView} */
    _imgTitleBackground: null,
    /** @type {ccui.ImageView} */
    _imgTitle: null,
    /** @type {ccui.Button} */
    _btnGift: null,
    /** @type {ccui.ImageView} */
    _imgReddot: null,
    /** @type {ccui.ImageView} */
    _imgBg: null,
    /** @type {ccui.ImageView} */
    _imgKittyBank: null,
    /** @type {ccui.ImageView} */
    _imgFrame: null,
    /** @type {ck.Text} */
    _txtFull: null,
    /** @type {ccui.ImageView} */
    _imgGlow: null,
    /** @type {ccui.ImageView} */
    _imgFx: null,
    /** @type {ccui.ImageView} */
    _imgBonus: null,
    /** @type {ck.Text} */
    _txtBonus: null,
    /** @type {ck.Text} */
    _txtPercentBonus: null,
    /** @type {Event15NodeGift} */
    _chooseGift: null,
    /** @type {ccui.Layout} */
    _layoutBonusItems: null,
    /** @type {ccui.ImageView} */
    _imgBonusItems: null,
    /** @type {ck.GridViewVertical} */
    _gridBonusItems: null,
    /** @type {ccui.ImageView} */
    _imgPlus: null,
    /** @type {ck.Text} */
    _txtNote: null,
    /** @type {ck.Text} */
    _txtNote_1: null,
    /** @type {Event15NodePay} */
    _choosePacks: null,
    /** @type {ItemInfoBubbleWidget} */
    _itemInfoBubbleWidget: null,
    /** @type {ccui.Button} */
    _btnChannels: null,
    /** @type {ccui.ImageView} */
    _imgNext: null,
    /** @type {ck.Text} */
    _txtName: null,
    /** @type {ccui.ImageView} */
    _imgChannels: null,
    /** @type {ccui.Layout} */
    _panelLock: null,


    /**
     * _ccs.Event15Popup constructor
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

        ///// # _imgPopup
        this._imgPopup = new ccui.ImageView();
        this._imgPopup.setName("_imgPopup");
        this.addChild(this._imgPopup);
        this._imgPopup.setCascadeOpacityEnabled(true);
        this._imgPopup.setCascadeColorEnabled(true);
        this._imgPopup.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPopup, 0.5013, 0.61);
        let _imgPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPopup);
        _imgPopupLayoutComponent.setPositionPercentXEnabled(true);
        _imgPopupLayoutComponent.setPositionPercentX(0.5013);
        _imgPopupLayoutComponent.setPositionPercentYEnabled(true);
        _imgPopupLayoutComponent.setPositionPercentY(0.61);
        this._imgPopup.loadTexture("event15_popup.png", 1);
        this._imgPopup.setUnifySizeEnabled(false);
        this._imgPopup.ignoreContentAdaptWithSize(false);
        this._imgPopup.setScale9Enabled(true);
        this._imgPopup.setCapInsets(cc.rect(254, 313, 75, 197));
        this._imgPopup.setContentSize(cc.size(595, 872));
        this._imgPopup.setTouchEnabled(true);

        ///// # _btnClose
        this._btnClose = new ccui.Button();
        this._btnClose.setName("_btnClose");
        this._imgPopup.addChild(this._btnClose);
        this._btnClose.setCascadeOpacityEnabled(true);
        this._btnClose.setCascadeColorEnabled(true);
        this._btnClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnClose, 0.916, 0.867);
        this._btnClose.setScale(0.8, 0.8);
        let _btnCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnClose);
        _btnCloseLayoutComponent.setPositionPercentXEnabled(true);
        _btnCloseLayoutComponent.setPositionPercentX(0.916);
        _btnCloseLayoutComponent.setPositionPercentYEnabled(true);
        _btnCloseLayoutComponent.setPositionPercentY(0.867);
        this._btnClose.loadTextureDisabled("buttons/circles/Close.png", 1);
        this._btnClose.loadTexturePressed("buttons/circles/Close.png", 1);
        this._btnClose.loadTextureNormal("buttons/circles/Close.png", 1);
        this._btnClose.setUnifySizeEnabled(false);
        this._btnClose.ignoreContentAdaptWithSize(false);
        this._btnClose.setContentSize(cc.size(68, 76));
        this._btnClose.setTouchEnabled(true);

        ///// # _btnInfo
        this._btnInfo = new ccui.Button();
        this._btnInfo.setName("_btnInfo");
        this._imgPopup.addChild(this._btnInfo);
        this._btnInfo.setCascadeOpacityEnabled(true);
        this._btnInfo.setCascadeColorEnabled(true);
        this._btnInfo.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnInfo, 0.097, 0.8686);
        this._btnInfo.setScale(0.8, 0.8);
        let _btnInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnInfo);
        _btnInfoLayoutComponent.setPositionPercentXEnabled(true);
        _btnInfoLayoutComponent.setPositionPercentX(0.097);
        _btnInfoLayoutComponent.setPositionPercentYEnabled(true);
        _btnInfoLayoutComponent.setPositionPercentY(0.8686);
        this._btnInfo.loadTextureDisabled("e15_button_info.png", 1);
        this._btnInfo.loadTexturePressed("e15_button_info.png", 1);
        this._btnInfo.loadTextureNormal("e15_button_info.png", 1);
        this._btnInfo.setUnifySizeEnabled(false);
        this._btnInfo.ignoreContentAdaptWithSize(false);
        this._btnInfo.setScale9Enabled(true);
        this._btnInfo.setCapInsets(cc.rect(4, 11, 69, 55));
        this._btnInfo.setContentSize(cc.size(77, 77));
        this._btnInfo.setTouchEnabled(true);

        ///// # _imgFrameTime
        this._imgFrameTime = new ccui.ImageView();
        this._imgFrameTime.setName("_imgFrameTime");
        this._imgPopup.addChild(this._imgFrameTime);
        this._imgFrameTime.setCascadeOpacityEnabled(true);
        this._imgFrameTime.setCascadeColorEnabled(true);
        this._imgFrameTime.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgFrameTime, 0.5, 0.6741);
        let _imgFrameTimeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFrameTime);
        _imgFrameTimeLayoutComponent.setPositionPercentXEnabled(true);
        _imgFrameTimeLayoutComponent.setPositionPercentX(0.5);
        _imgFrameTimeLayoutComponent.setPositionPercentYEnabled(true);
        _imgFrameTimeLayoutComponent.setPositionPercentY(0.6741);
        this._imgFrameTime.loadTexture("e15_time.png", 1);
        this._imgFrameTime.setUnifySizeEnabled(false);
        this._imgFrameTime.ignoreContentAdaptWithSize(false);
        this._imgFrameTime.setContentSize(cc.size(235, 57));
        this._imgFrameTime.setTouchEnabled(false);

        ///// # _imgClock
        this._imgClock = new ccui.ImageView();
        this._imgClock.setName("_imgClock");
        this._imgFrameTime.addChild(this._imgClock);
        this._imgClock.setCascadeOpacityEnabled(true);
        this._imgClock.setCascadeColorEnabled(true);
        this._imgClock.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClock, 0.229, 0.4021);
        this._imgClock.setScale(0.5, 0.5);
        let _imgClockLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClock);
        _imgClockLayoutComponent.setPositionPercentXEnabled(true);
        _imgClockLayoutComponent.setPositionPercentX(0.229);
        _imgClockLayoutComponent.setPositionPercentYEnabled(true);
        _imgClockLayoutComponent.setPositionPercentY(0.4021);
        this._imgClock.loadTexture("icons/color/basic/Clock.png", 1);
        this._imgClock.setUnifySizeEnabled(false);
        this._imgClock.ignoreContentAdaptWithSize(false);
        this._imgClock.setContentSize(cc.size(47, 56));
        this._imgClock.setTouchEnabled(false);

        ///// # _txtTimeLeft
        this._txtTimeLeft = new ck.Text();
        this._txtTimeLeft.setName("_txtTimeLeft");
        this._imgFrameTime.addChild(this._txtTimeLeft);
        this._txtTimeLeft.setCascadeOpacityEnabled(true);
        this._txtTimeLeft.setCascadeColorEnabled(true);
        this._txtTimeLeft.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTimeLeft, 0.5398, 0.3813);
        let _txtTimeLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTimeLeft);
        _txtTimeLeftLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentX(0.5398);
        _txtTimeLeftLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentY(0.3813);
        this._txtTimeLeft.setTouchEnabled(false);
        this._txtTimeLeft.ignoreContentAdaptWithSize(true);
        this._txtTimeLeft.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtTimeLeft.setDefaultFontSize(26);
        this._txtTimeLeft.setTextHorizontalAlignment(1);
        this._txtTimeLeft.setTextVerticalAlignment(1);
        this._txtTimeLeft.enableOutline(cc.color(43, 100, 177, 255), 2);

        ///// # _imgTitleBackground
        this._imgTitleBackground = new ccui.ImageView();
        this._imgTitleBackground.setName("_imgTitleBackground");
        this._imgPopup.addChild(this._imgTitleBackground);
        this._imgTitleBackground.setCascadeOpacityEnabled(true);
        this._imgTitleBackground.setCascadeColorEnabled(true);
        this._imgTitleBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTitleBackground, 0.5, 0.8559);
        this._imgTitleBackground.setScale(0.5, 0.5);
        let _imgTitleBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTitleBackground);
        _imgTitleBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgTitleBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgTitleBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgTitleBackgroundLayoutComponent.setPositionPercentY(0.8559);
        this._imgTitleBackground.loadTexture("event15_title_background.png", 1);
        this._imgTitleBackground.setUnifySizeEnabled(false);
        this._imgTitleBackground.ignoreContentAdaptWithSize(false);
        this._imgTitleBackground.setContentSize(cc.size(1118, 620));
        this._imgTitleBackground.setTouchEnabled(false);

        ///// # _imgTitle
        this._imgTitle = new ccui.ImageView();
        this._imgTitle.setName("_imgTitle");
        this._imgTitleBackground.addChild(this._imgTitle);
        this._imgTitle.setCascadeOpacityEnabled(true);
        this._imgTitle.setCascadeColorEnabled(true);
        this._imgTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTitle, 0.5, 0.3281);
        let _imgTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTitle);
        _imgTitleLayoutComponent.setPositionPercentXEnabled(true);
        _imgTitleLayoutComponent.setPositionPercentX(0.5);
        _imgTitleLayoutComponent.setPositionPercentYEnabled(true);
        _imgTitleLayoutComponent.setPositionPercentY(0.3281);
        this._imgTitle.loadTexture("texts/events/van-cat/event_15_title.png", 1);
        this._imgTitle.setTouchEnabled(false);

        ///// # _btnGift
        this._btnGift = new ccui.Button();
        this._btnGift.setName("_btnGift");
        this._imgPopup.addChild(this._btnGift);
        this._btnGift.setCascadeOpacityEnabled(true);
        this._btnGift.setCascadeColorEnabled(true);
        this._btnGift.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._btnGift, 0.9371, 0.6753);
        let _btnGiftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnGift);
        _btnGiftLayoutComponent.setPositionPercentXEnabled(true);
        _btnGiftLayoutComponent.setPositionPercentX(0.9371);
        _btnGiftLayoutComponent.setPositionPercentYEnabled(true);
        _btnGiftLayoutComponent.setPositionPercentY(0.6753);
        this._btnGift.loadTextureDisabled("event15_icon_gift.png", 1);
        this._btnGift.loadTexturePressed("event15_icon_gift.png", 1);
        this._btnGift.loadTextureNormal("event15_icon_gift.png", 1);
        this._btnGift.setUnifySizeEnabled(false);
        this._btnGift.ignoreContentAdaptWithSize(false);
        this._btnGift.setScale9Enabled(true);
        this._btnGift.setCapInsets(cc.rect(15, 11, 73, 90));
        this._btnGift.setContentSize(cc.size(103, 112));
        this._btnGift.setTouchEnabled(true);

        ///// # _imgReddot
        this._imgReddot = new ccui.ImageView();
        this._imgReddot.setName("_imgReddot");
        this._btnGift.addChild(this._imgReddot);
        this._imgReddot.setCascadeOpacityEnabled(true);
        this._imgReddot.setCascadeColorEnabled(true);
        this._imgReddot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgReddot, 0.9331, 0.7913);
        this._imgReddot.setVisible(false);
        let _imgReddotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgReddot);
        this._imgReddot.loadTexture("basics/other/RedDot.png", 1);
        this._imgReddot.setUnifySizeEnabled(false);
        this._imgReddot.ignoreContentAdaptWithSize(false);
        this._imgReddot.setContentSize(cc.size(31, 31));
        this._imgReddot.setTouchEnabled(false);

        ///// # _imgBg
        this._imgBg = new ccui.ImageView();
        this._imgBg.setName("_imgBg");
        this._imgPopup.addChild(this._imgBg);
        this._imgBg.setCascadeOpacityEnabled(true);
        this._imgBg.setCascadeColorEnabled(true);
        this._imgBg.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBg, 0.4876, 0.2176);
        this._imgBg.setScale(0.8, 0.8);
        let _imgBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBg);
        _imgBgLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgLayoutComponent.setPositionPercentX(0.4876);
        _imgBgLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgLayoutComponent.setPositionPercentY(0.2176);
        this._imgBg.loadTexture("cat_base.png", 1);
        this._imgBg.setUnifySizeEnabled(false);
        this._imgBg.ignoreContentAdaptWithSize(false);
        this._imgBg.setContentSize(cc.size(327, 207));
        this._imgBg.setTouchEnabled(false);

        ///// # _imgKittyBank
        this._imgKittyBank = new ccui.ImageView();
        this._imgKittyBank.setName("_imgKittyBank");
        this._imgBg.addChild(this._imgKittyBank);
        this._imgKittyBank.setCascadeOpacityEnabled(true);
        this._imgKittyBank.setCascadeColorEnabled(true);
        this._imgKittyBank.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgKittyBank, 0.5, 1.3637);
        let _imgKittyBankLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgKittyBank);
        _imgKittyBankLayoutComponent.setPositionPercentXEnabled(true);
        _imgKittyBankLayoutComponent.setPositionPercentX(0.5);
        _imgKittyBankLayoutComponent.setPositionPercentYEnabled(true);
        _imgKittyBankLayoutComponent.setPositionPercentY(1.3637);
        this._imgKittyBank.loadTexture("event15_icon_big_gray.png", 1);
        this._imgKittyBank.setUnifySizeEnabled(false);
        this._imgKittyBank.ignoreContentAdaptWithSize(false);
        this._imgKittyBank.setContentSize(cc.size(319, 254));
        this._imgKittyBank.setTouchEnabled(false);

        ///// # _imgFrame
        this._imgFrame = new ccui.ImageView();
        this._imgFrame.setName("_imgFrame");
        this._imgKittyBank.addChild(this._imgFrame);
        this._imgFrame.setCascadeOpacityEnabled(true);
        this._imgFrame.setCascadeColorEnabled(true);
        this._imgFrame.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgFrame, 0.44, 1);
        this._imgFrame.setRotationY(-0.0052);
        let _imgFrameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFrame);
        _imgFrameLayoutComponent.setPositionPercentXEnabled(true);
        _imgFrameLayoutComponent.setPositionPercentX(0.44);
        _imgFrameLayoutComponent.setPositionPercentYEnabled(true);
        _imgFrameLayoutComponent.setPositionPercentY(1);
        this._imgFrame.loadTexture("frame_token_2.png", 1);
        this._imgFrame.setUnifySizeEnabled(false);
        this._imgFrame.ignoreContentAdaptWithSize(false);
        this._imgFrame.setScale9Enabled(true);
        this._imgFrame.setCapInsets(cc.rect(40, 19, 42, 20));
        this._imgFrame.setContentSize(cc.size(122, 58));
        this._imgFrame.setTouchEnabled(false);

        ///// # _txtFull
        this._txtFull = new ck.Text();
        this._txtFull.setName("_txtFull");
        this._imgFrame.addChild(this._txtFull);
        this._txtFull.setCascadeOpacityEnabled(true);
        this._txtFull.setCascadeColorEnabled(true);
        this._txtFull.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtFull, 0.5, 0.6074);
        this._txtFull.setTextColor(cc.color(106, 32, 15, 255));
        let _txtFullLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtFull);
        _txtFullLayoutComponent.setPositionPercentXEnabled(true);
        _txtFullLayoutComponent.setPositionPercentX(0.5);
        _txtFullLayoutComponent.setPositionPercentYEnabled(true);
        _txtFullLayoutComponent.setPositionPercentY(0.6074);
        this._txtFull.setTouchEnabled(false);
        this._txtFull.setUnifySizeEnabled(false);
        this._txtFull.ignoreContentAdaptWithSize(false);
        this._txtFull.setContentSize(cc.size(105.2028, 29));
        this._txtFull.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtFull.setDefaultFontSize(25);
        this._txtFull.setString(gm.localize.getText("TXT_FULL"));
        this._txtFull.setTextHorizontalAlignment(1);
        this._txtFull.setTextVerticalAlignment(1);

        ///// # _imgGlow
        this._imgGlow = new ccui.ImageView();
        this._imgGlow.setName("_imgGlow");
        this._imgKittyBank.addChild(this._imgGlow);
        this._imgGlow.setCascadeOpacityEnabled(true);
        this._imgGlow.setCascadeColorEnabled(true);
        this._imgGlow.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGlow, 0.4709, 0.622);
        this._imgGlow.setVisible(false);
        let _imgGlowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGlow);
        _imgGlowLayoutComponent.setPositionPercentXEnabled(true);
        _imgGlowLayoutComponent.setPositionPercentX(0.4709);
        _imgGlowLayoutComponent.setPositionPercentYEnabled(true);
        _imgGlowLayoutComponent.setPositionPercentY(0.622);
        this._imgGlow.loadTexture("event15_icon_glow.png", 1);
        this._imgGlow.setUnifySizeEnabled(false);
        this._imgGlow.ignoreContentAdaptWithSize(false);
        this._imgGlow.setContentSize(cc.size(264, 203));
        this._imgGlow.setTouchEnabled(false);

        ///// # _imgFx
        this._imgFx = new ccui.ImageView();
        this._imgFx.setName("_imgFx");
        this._imgKittyBank.addChild(this._imgFx);
        this._imgFx.setCascadeOpacityEnabled(true);
        this._imgFx.setCascadeColorEnabled(true);
        this._imgFx.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgFx, 0.4963, 0.6436);
        this._imgFx.setVisible(false);
        let _imgFxLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFx);
        _imgFxLayoutComponent.setPositionPercentXEnabled(true);
        _imgFxLayoutComponent.setPositionPercentX(0.4963);
        _imgFxLayoutComponent.setPositionPercentYEnabled(true);
        _imgFxLayoutComponent.setPositionPercentY(0.6436);
        this._imgFx.loadTexture("event15_icon_fx.png", 1);
        this._imgFx.setUnifySizeEnabled(false);
        this._imgFx.ignoreContentAdaptWithSize(false);
        this._imgFx.setContentSize(cc.size(445, 287));
        this._imgFx.setTouchEnabled(false);

        ///// # _imgBonus
        this._imgBonus = new ccui.ImageView();
        this._imgBonus.setName("_imgBonus");
        this._imgBg.addChild(this._imgBonus);
        this._imgBonus.setCascadeOpacityEnabled(true);
        this._imgBonus.setCascadeColorEnabled(true);
        this._imgBonus.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBonus, 0.9244, 2.1087);
        let _imgBonusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBonus);
        _imgBonusLayoutComponent.setPositionPercentXEnabled(true);
        _imgBonusLayoutComponent.setPositionPercentX(0.9244);
        _imgBonusLayoutComponent.setPositionPercentYEnabled(true);
        _imgBonusLayoutComponent.setPositionPercentY(2.1087);
        this._imgBonus.loadTexture("event15_icon_discount.png", 1);
        this._imgBonus.setUnifySizeEnabled(false);
        this._imgBonus.ignoreContentAdaptWithSize(false);
        this._imgBonus.setContentSize(cc.size(94, 103));
        this._imgBonus.setTouchEnabled(false);

        ///// # _txtBonus
        this._txtBonus = new ck.Text();
        this._txtBonus.setName("_txtBonus");
        this._imgBonus.addChild(this._txtBonus);
        this._txtBonus.setCascadeOpacityEnabled(true);
        this._txtBonus.setCascadeColorEnabled(true);
        this._txtBonus.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBonus, 0.5213, 0.7223);
        let _txtBonusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBonus);
        _txtBonusLayoutComponent.setPositionPercentXEnabled(true);
        _txtBonusLayoutComponent.setPositionPercentX(0.5213);
        _txtBonusLayoutComponent.setPositionPercentYEnabled(true);
        _txtBonusLayoutComponent.setPositionPercentY(0.7223);
        this._txtBonus.setTouchEnabled(false);
        this._txtBonus.ignoreContentAdaptWithSize(true);
        this._txtBonus.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtBonus.setDefaultFontSize(22);
        this._txtBonus.setString(gm.localize.getText("TXT_BONUS"));
        this._txtBonus.setTextHorizontalAlignment(1);
        this._txtBonus.setTextVerticalAlignment(1);
        this._txtBonus.enableOutline(cc.color(165, 42, 42, 255), 2);

        ///// # _txtPercentBonus
        this._txtPercentBonus = new ck.Text();
        this._txtPercentBonus.setName("_txtPercentBonus");
        this._imgBonus.addChild(this._txtPercentBonus);
        this._txtPercentBonus.setCascadeOpacityEnabled(true);
        this._txtPercentBonus.setCascadeColorEnabled(true);
        this._txtPercentBonus.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPercentBonus, 0.5319, 0.4402);
        let _txtPercentBonusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPercentBonus);
        _txtPercentBonusLayoutComponent.setPositionPercentXEnabled(true);
        _txtPercentBonusLayoutComponent.setPositionPercentX(0.5319);
        _txtPercentBonusLayoutComponent.setPositionPercentYEnabled(true);
        _txtPercentBonusLayoutComponent.setPositionPercentY(0.4402);
        this._txtPercentBonus.setTouchEnabled(false);
        this._txtPercentBonus.ignoreContentAdaptWithSize(true);
        this._txtPercentBonus.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtPercentBonus.setDefaultFontSize(35);
        this._txtPercentBonus.setString(gm.localize.getText("TXT_666%"));
        this._txtPercentBonus.setTextHorizontalAlignment(1);
        this._txtPercentBonus.setTextVerticalAlignment(1);
        this._txtPercentBonus.enableOutline(cc.color(165, 42, 42, 255), 2);

        ///// # _chooseGift
        this._chooseGift = new Event15NodeGift();
        this._chooseGift.setName("_chooseGift");
        this._imgPopup.addChild(this._chooseGift);
        this._chooseGift.setCascadeOpacityEnabled(true);
        this._chooseGift.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._chooseGift, 0.5, 0.179);
        let _chooseGiftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._chooseGift);
        _chooseGiftLayoutComponent.setPositionPercentXEnabled(true);
        _chooseGiftLayoutComponent.setPositionPercentX(0.5);
        _chooseGiftLayoutComponent.setPositionPercentYEnabled(true);
        _chooseGiftLayoutComponent.setPositionPercentY(0.179);

        ///// # _layoutBonusItems
        this._layoutBonusItems = new ccui.Layout();
        this._layoutBonusItems.setName("_layoutBonusItems");
        this._imgPopup.addChild(this._layoutBonusItems);
        this._layoutBonusItems.setCascadeOpacityEnabled(true);
        this._layoutBonusItems.setCascadeColorEnabled(true);
        this._layoutBonusItems.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutBonusItems, 0.5, 0.125);
        let _layoutBonusItemsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBonusItems);
        _layoutBonusItemsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBonusItemsLayoutComponent.setPositionPercentX(0.5);
        _layoutBonusItemsLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBonusItemsLayoutComponent.setPositionPercentY(0.125);
        this._layoutBonusItems.setTouchEnabled(true);
        this._layoutBonusItems.setUnifySizeEnabled(false);
        this._layoutBonusItems.ignoreContentAdaptWithSize(false);
        this._layoutBonusItems.setContentSize(cc.size(340.5417, 120));

        ///// # _imgBonusItems
        this._imgBonusItems = new ccui.ImageView();
        this._imgBonusItems.setName("_imgBonusItems");
        this._layoutBonusItems.addChild(this._imgBonusItems);
        this._imgBonusItems.setCascadeOpacityEnabled(true);
        this._imgBonusItems.setCascadeColorEnabled(true);
        this._imgBonusItems.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBonusItems, 0.5, 0.56);
        let _imgBonusItemsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBonusItems);
        _imgBonusItemsLayoutComponent.setPositionPercentXEnabled(true);
        _imgBonusItemsLayoutComponent.setPositionPercentX(0.5);
        _imgBonusItemsLayoutComponent.setPositionPercentYEnabled(true);
        _imgBonusItemsLayoutComponent.setPositionPercentY(0.56);
        _imgBonusItemsLayoutComponent.setPercentWidthEnabled(true);
        _imgBonusItemsLayoutComponent.setPercentWidth(0.9338);
        _imgBonusItemsLayoutComponent.setPercentHeightEnabled(true);
        _imgBonusItemsLayoutComponent.setPercentHeight(0.6667);
        this._imgBonusItems.loadTexture("event15_frame_item.png", 1);
        this._imgBonusItems.setUnifySizeEnabled(false);
        this._imgBonusItems.ignoreContentAdaptWithSize(false);
        this._imgBonusItems.setScale9Enabled(true);
        this._imgBonusItems.setCapInsets(cc.rect(15, 11, 164, 58));
        ck.UIUtils.setSizePercent(this._imgBonusItems, 0.9338, 0.6667);
        this._imgBonusItems.setTouchEnabled(false);

        ///// # _gridBonusItems
        this._gridBonusItems = new ck.GridViewVertical();
        this._gridBonusItems.setName("_gridBonusItems");
        this._layoutBonusItems.addChild(this._gridBonusItems);
        this._gridBonusItems.setCascadeOpacityEnabled(true);
        this._gridBonusItems.setCascadeColorEnabled(true);
        this._gridBonusItems.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridBonusItems, 0.5018, 0.56);
        let _gridBonusItemsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridBonusItems);
        _gridBonusItemsLayoutComponent.setPositionPercentXEnabled(true);
        _gridBonusItemsLayoutComponent.setPositionPercentX(0.5018);
        _gridBonusItemsLayoutComponent.setPositionPercentYEnabled(true);
        _gridBonusItemsLayoutComponent.setPositionPercentY(0.56);
        _gridBonusItemsLayoutComponent.setPercentWidthEnabled(true);
        _gridBonusItemsLayoutComponent.setPercentWidth(0.9237);
        _gridBonusItemsLayoutComponent.setPercentHeightEnabled(true);
        _gridBonusItemsLayoutComponent.setPercentHeight(0.5833);

        ///// # _imgPlus
        this._imgPlus = new ccui.ImageView();
        this._imgPlus.setName("_imgPlus");
        this._layoutBonusItems.addChild(this._imgPlus);
        this._imgPlus.setCascadeOpacityEnabled(true);
        this._imgPlus.setCascadeColorEnabled(true);
        this._imgPlus.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPlus, 0.5, 0.9629);
        this._imgPlus.setScale(0.6, 0.6);
        let _imgPlusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPlus);
        _imgPlusLayoutComponent.setPositionPercentXEnabled(true);
        _imgPlusLayoutComponent.setPositionPercentX(0.5);
        _imgPlusLayoutComponent.setPositionPercentYEnabled(true);
        _imgPlusLayoutComponent.setPositionPercentY(0.9629);
        this._imgPlus.loadTexture("basics/other/Plus.png", 1);
        this._imgPlus.setUnifySizeEnabled(false);
        this._imgPlus.ignoreContentAdaptWithSize(false);
        this._imgPlus.setScale9Enabled(true);
        this._imgPlus.setCapInsets(cc.rect(15, 11, 33, 41));
        this._imgPlus.setContentSize(cc.size(63, 63));
        this._imgPlus.setTouchEnabled(false);

        ///// # _txtNote
        this._txtNote = new ck.Text();
        this._txtNote.setName("_txtNote");
        this._imgPopup.addChild(this._txtNote);
        this._txtNote.setCascadeOpacityEnabled(true);
        this._txtNote.setCascadeColorEnabled(true);
        this._txtNote.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNote, 0.5, -0.0448);
        let _txtNoteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNote);
        _txtNoteLayoutComponent.setPositionPercentXEnabled(true);
        _txtNoteLayoutComponent.setPositionPercentX(0.5);
        _txtNoteLayoutComponent.setPositionPercentYEnabled(true);
        _txtNoteLayoutComponent.setPositionPercentY(-0.0448);
        this._txtNote.setTouchEnabled(false);
        this._txtNote.ignoreContentAdaptWithSize(true);
        this._txtNote.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtNote.setDefaultFontSize(26);
        this._txtNote.setTextHorizontalAlignment(1);
        this._txtNote.setTextVerticalAlignment(1);

        ///// # _txtNote_1
        this._txtNote_1 = new ck.Text();
        this._txtNote_1.setName("_txtNote_1");
        this._imgPopup.addChild(this._txtNote_1);
        this._txtNote_1.setCascadeOpacityEnabled(true);
        this._txtNote_1.setCascadeColorEnabled(true);
        this._txtNote_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNote_1, 0.5, -0.0139);
        let _txtNote_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNote_1);
        _txtNote_1LayoutComponent.setPositionPercentXEnabled(true);
        _txtNote_1LayoutComponent.setPositionPercentX(0.5);
        _txtNote_1LayoutComponent.setPositionPercentYEnabled(true);
        _txtNote_1LayoutComponent.setPositionPercentY(-0.0139);
        this._txtNote_1.setTouchEnabled(false);
        this._txtNote_1.ignoreContentAdaptWithSize(true);
        this._txtNote_1.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtNote_1.setDefaultFontSize(20);
        this._txtNote_1.setString(gm.localize.getText("TXT_BUA_CANG_XIN,_DAP_CANG_NHIEU_QUA"));
        this._txtNote_1.setTextHorizontalAlignment(1);
        this._txtNote_1.setTextVerticalAlignment(1);

        ///// # _choosePacks
        this._choosePacks = new Event15NodePay();
        this._choosePacks.setName("_choosePacks");
        this._imgPopup.addChild(this._choosePacks);
        this._choosePacks.setCascadeOpacityEnabled(true);
        this._choosePacks.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._choosePacks, 0.5, -0.1125);
        let _choosePacksLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._choosePacks);
        _choosePacksLayoutComponent.setPositionPercentXEnabled(true);
        _choosePacksLayoutComponent.setPositionPercentX(0.5);
        _choosePacksLayoutComponent.setPositionPercentYEnabled(true);
        _choosePacksLayoutComponent.setPositionPercentY(-0.1125);

        ///// # _itemInfoBubbleWidget
        this._itemInfoBubbleWidget = new ItemInfoBubbleWidget();
        this._itemInfoBubbleWidget.setName("_itemInfoBubbleWidget");
        this._imgPopup.addChild(this._itemInfoBubbleWidget);
        this._itemInfoBubbleWidget.setCascadeOpacityEnabled(true);
        this._itemInfoBubbleWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._itemInfoBubbleWidget, 0.495, 0.4843);
        this._itemInfoBubbleWidget.setVisible(false);
        let _itemInfoBubbleWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._itemInfoBubbleWidget);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentX(0.495);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentY(0.4843);

        ///// # _btnChannels
        this._btnChannels = new ccui.Button();
        this._btnChannels.setName("_btnChannels");
        this._imgPopup.addChild(this._btnChannels);
        this._btnChannels.setCascadeOpacityEnabled(true);
        this._btnChannels.setCascadeColorEnabled(true);
        this._btnChannels.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnChannels, 0.5018, -0.2037);
        let _btnChannelsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnChannels);
        _btnChannelsLayoutComponent.setPositionPercentXEnabled(true);
        _btnChannelsLayoutComponent.setPositionPercentX(0.5018);
        _btnChannelsLayoutComponent.setPositionPercentYEnabled(true);
        _btnChannelsLayoutComponent.setPositionPercentY(-0.2037);
        this._btnChannels.loadTextureDisabled("buttons/rectangles/Green_02.png", 1);
        this._btnChannels.loadTexturePressed("buttons/rectangles/Green_02.png", 1);
        this._btnChannels.loadTextureNormal("buttons/rectangles/Green_02.png", 1);
        this._btnChannels.setUnifySizeEnabled(false);
        this._btnChannels.ignoreContentAdaptWithSize(false);
        this._btnChannels.setScale9Enabled(true);
        this._btnChannels.setCapInsets(cc.rect(56, 0, 12, 67));
        this._btnChannels.setContentSize(cc.size(140, 67));
        this._btnChannels.setTouchEnabled(true);

        ///// # _imgNext
        this._imgNext = new ccui.ImageView();
        this._imgNext.setName("_imgNext");
        this._btnChannels.addChild(this._imgNext);
        this._imgNext.setCascadeOpacityEnabled(true);
        this._imgNext.setCascadeColorEnabled(true);
        this._imgNext.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgNext, 0.9051, 0.5549);
        let _imgNextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNext);
        _imgNextLayoutComponent.setPositionPercentXEnabled(true);
        _imgNextLayoutComponent.setPositionPercentX(0.9051);
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
        this._txtName.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName, 0.3359, 0.573);
        let _txtNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName);
        _txtNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameLayoutComponent.setPositionPercentX(0.3359);
        _txtNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameLayoutComponent.setPositionPercentY(0.573);
        this._txtName.setTouchEnabled(false);
        this._txtName.setUnifySizeEnabled(false);
        this._txtName.ignoreContentAdaptWithSize(false);
        this._txtName.setContentSize(cc.size(72, 32));
        this._txtName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName.setDefaultFontSize(22);
        this._txtName.setString(gm.localize.getText("TXT_VODAFONE"));
        this._txtName.setTextHorizontalAlignment(0);
        this._txtName.setTextVerticalAlignment(1);
        this._txtName.enableOutline(cc.color(62, 112, 128, 255), 1);

        ///// # _imgChannels
        this._imgChannels = new ccui.ImageView();
        this._imgChannels.setName("_imgChannels");
        this._btnChannels.addChild(this._imgChannels);
        this._imgChannels.setCascadeOpacityEnabled(true);
        this._imgChannels.setCascadeColorEnabled(true);
        this._imgChannels.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgChannels, 0.18, 0.575);
        this._imgChannels.setScale(0.6, 0.6);
        let _imgChannelsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgChannels);
        _imgChannelsLayoutComponent.setPositionPercentXEnabled(true);
        _imgChannelsLayoutComponent.setPositionPercentX(0.18);
        _imgChannelsLayoutComponent.setPositionPercentYEnabled(true);
        _imgChannelsLayoutComponent.setPositionPercentY(0.575);
        this._imgChannels.loadTexture("event15_voda.png", 1);
        this._imgChannels.setUnifySizeEnabled(false);
        this._imgChannels.ignoreContentAdaptWithSize(false);
        this._imgChannels.setContentSize(cc.size(65, 64));
        this._imgChannels.setTouchEnabled(false);

        ///// # _panelLock
        this._panelLock = new ccui.Layout();
        this._panelLock.setName("_panelLock");
        this.addChild(this._panelLock);
        this._panelLock.setCascadeOpacityEnabled(true);
        this._panelLock.setCascadeColorEnabled(true);
        this._panelLock.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._panelLock, 0.5, 0.8439);
        let _panelLockLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._panelLock);
        _panelLockLayoutComponent.setPositionPercentXEnabled(true);
        _panelLockLayoutComponent.setPositionPercentX(0.5);
        _panelLockLayoutComponent.setPositionPercentYEnabled(true);
        _panelLockLayoutComponent.setPositionPercentY(0.8439);
        this._panelLock.setTouchEnabled(true);
        this._panelLock.setUnifySizeEnabled(false);
        this._panelLock.ignoreContentAdaptWithSize(false);
        this._panelLock.setContentSize(cc.size(594.2273, 936.687));

    },



});

/**
 * Create Event15Popup
 * @returns {_ccs.Event15Popup}
 */
_ccs.Event15Popup.create = function () {
    return new _ccs.Event15Popup();
};
