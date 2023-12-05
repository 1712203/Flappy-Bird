/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.SlotThreeShip
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.SlotThreeShip = ccui.Widget.extend({

    /** @type {ccui.ImageView} */
    _imgShipWheel: null,
    /** @type {ccui.ImageView} */
    _imgBoardJackpotPrize: null,
    /** @type {ck.Text} */
    _txtJackpotPrize: null,
    /** @type {ccui.ImageView} */
    _imgTitleJackpot: null,
    /** @type {ccui.Button} */
    _btnInfo: null,
    /** @type {ccui.Button} */
    _btnClose: null,
    /** @type {ccui.ImageView} */
    _imgShipShadow: null,
    /** @type {ccui.ImageView} */
    _imgShipBanner: null,
    /** @type {ccui.ImageView} */
    _imgShipCenter: null,
    /** @type {ccui.ImageView} */
    _imgReel: null,
    /** @type {SlotThreeSlot} */
    _pnlLeft: null,
    /** @type {SlotThreeSlot} */
    _pnlMid: null,
    /** @type {SlotThreeSlot} */
    _pnlRight: null,
    /** @type {ccui.ImageView} */
    _imgBarBet: null,
    /** @type {ck.Text} */
    _txtGoldBet: null,
    /** @type {ccui.Button} */
    _btnDecreaseBet: null,
    /** @type {ccui.Button} */
    _btnIncreaseBet: null,
    /** @type {ck.Text} */
    _txtBet: null,
    /** @type {ck.Text} */
    _txtPrize: null,
    /** @type {ccui.ImageView} */
    _imgPosBtnSpin: null,
    /** @type {progressExp} */
    _expBar: null,


    /**
     * _ccs.SlotThreeShip constructor
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

        ///// # _imgShipWheel
        this._imgShipWheel = new ccui.ImageView();
        this._imgShipWheel.setName("_imgShipWheel");
        this.addChild(this._imgShipWheel);
        this._imgShipWheel.setCascadeOpacityEnabled(true);
        this._imgShipWheel.setCascadeColorEnabled(true);
        this._imgShipWheel.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgShipWheel.setPosition(0, 274.26);
        let _imgShipWheelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgShipWheel);
        this._imgShipWheel.loadTexture("sprites/minigames/slot-three/slot3_ship_top.png", 0);
        this._imgShipWheel.setUnifySizeEnabled(false);
        this._imgShipWheel.ignoreContentAdaptWithSize(false);
        this._imgShipWheel.setContentSize(cc.size(567, 433));
        this._imgShipWheel.setTouchEnabled(false);

        ///// # _imgBoardJackpotPrize
        this._imgBoardJackpotPrize = new ccui.ImageView();
        this._imgBoardJackpotPrize.setName("_imgBoardJackpotPrize");
        this._imgShipWheel.addChild(this._imgBoardJackpotPrize);
        this._imgBoardJackpotPrize.setCascadeOpacityEnabled(true);
        this._imgBoardJackpotPrize.setCascadeColorEnabled(true);
        this._imgBoardJackpotPrize.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBoardJackpotPrize, 0.5, 0.54);
        let _imgBoardJackpotPrizeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBoardJackpotPrize);
        _imgBoardJackpotPrizeLayoutComponent.setPositionPercentXEnabled(true);
        _imgBoardJackpotPrizeLayoutComponent.setPositionPercentX(0.5);
        _imgBoardJackpotPrizeLayoutComponent.setPositionPercentYEnabled(true);
        _imgBoardJackpotPrizeLayoutComponent.setPositionPercentY(0.54);
        this._imgBoardJackpotPrize.loadTexture("sprites/minigames/slot-three/slot3_jackot_box.png", 0);
        this._imgBoardJackpotPrize.setUnifySizeEnabled(false);
        this._imgBoardJackpotPrize.ignoreContentAdaptWithSize(false);
        this._imgBoardJackpotPrize.setContentSize(cc.size(342, 116));
        this._imgBoardJackpotPrize.setTouchEnabled(false);

        ///// # _txtJackpotPrize
        this._txtJackpotPrize = new ck.Text();
        this._txtJackpotPrize.setName("_txtJackpotPrize");
        this._imgBoardJackpotPrize.addChild(this._txtJackpotPrize);
        this._txtJackpotPrize.setCascadeOpacityEnabled(true);
        this._txtJackpotPrize.setCascadeColorEnabled(true);
        this._txtJackpotPrize.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtJackpotPrize, 0.5, 0.38);
        let _txtJackpotPrizeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtJackpotPrize);
        _txtJackpotPrizeLayoutComponent.setPositionPercentXEnabled(true);
        _txtJackpotPrizeLayoutComponent.setPositionPercentX(0.5);
        _txtJackpotPrizeLayoutComponent.setPositionPercentYEnabled(true);
        _txtJackpotPrizeLayoutComponent.setPositionPercentY(0.38);
        this._txtJackpotPrize.setTouchEnabled(false);
        this._txtJackpotPrize.ignoreContentAdaptWithSize(true);
        this._txtJackpotPrize.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtJackpotPrize.setDefaultFontSize(35);
        this._txtJackpotPrize.setTextHorizontalAlignment(0);
        this._txtJackpotPrize.setTextVerticalAlignment(0);
        this._txtJackpotPrize.enableOutline(cc.color(255, 0, 84, 255), 1);

        ///// # _imgTitleJackpot
        this._imgTitleJackpot = new ccui.ImageView();
        this._imgTitleJackpot.setName("_imgTitleJackpot");
        this._imgBoardJackpotPrize.addChild(this._imgTitleJackpot);
        this._imgTitleJackpot.setCascadeOpacityEnabled(true);
        this._imgTitleJackpot.setCascadeColorEnabled(true);
        this._imgTitleJackpot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTitleJackpot, 0.5, 0.8);
        let _imgTitleJackpotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTitleJackpot);
        _imgTitleJackpotLayoutComponent.setPositionPercentXEnabled(true);
        _imgTitleJackpotLayoutComponent.setPositionPercentX(0.5);
        _imgTitleJackpotLayoutComponent.setPositionPercentYEnabled(true);
        _imgTitleJackpotLayoutComponent.setPositionPercentY(0.8);
        this._imgTitleJackpot.loadTexture("sprites/minigames/slot-three/title_jackpot.png", 0);
        this._imgTitleJackpot.setUnifySizeEnabled(false);
        this._imgTitleJackpot.ignoreContentAdaptWithSize(false);
        this._imgTitleJackpot.setContentSize(cc.size(232, 92));
        this._imgTitleJackpot.setTouchEnabled(false);

        ///// # _btnInfo
        this._btnInfo = new ccui.Button();
        this._btnInfo.setName("_btnInfo");
        this._imgShipWheel.addChild(this._btnInfo);
        this._btnInfo.setCascadeOpacityEnabled(true);
        this._btnInfo.setCascadeColorEnabled(true);
        this._btnInfo.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnInfo, 0.043, 0.4634);
        let _btnInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnInfo);
        this._btnInfo.loadTextureDisabled("sprites/minigames/slot-three/slot3_btn_info.png", 0);
        this._btnInfo.loadTexturePressed("sprites/minigames/slot-three/slot3_btn_info.png", 0);
        this._btnInfo.loadTextureNormal("sprites/minigames/slot-three/slot3_btn_info.png", 0);
        this._btnInfo.setUnifySizeEnabled(false);
        this._btnInfo.ignoreContentAdaptWithSize(false);
        this._btnInfo.setScale9Enabled(true);
        this._btnInfo.setCapInsets(cc.rect(15, 11, 27, 72));
        this._btnInfo.setContentSize(cc.size(57, 94));
        this._btnInfo.setTouchEnabled(true);

        ///// # _btnClose
        this._btnClose = new ccui.Button();
        this._btnClose.setName("_btnClose");
        this._imgShipWheel.addChild(this._btnClose);
        this._btnClose.setCascadeOpacityEnabled(true);
        this._btnClose.setCascadeColorEnabled(true);
        this._btnClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnClose, 0.967, 0.4746);
        let _btnCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnClose);
        this._btnClose.loadTextureDisabled("sprites/minigames/slot-three/slot3_btn_close.png", 0);
        this._btnClose.loadTexturePressed("sprites/minigames/slot-three/slot3_btn_close.png", 0);
        this._btnClose.loadTextureNormal("sprites/minigames/slot-three/slot3_btn_close.png", 0);
        this._btnClose.setUnifySizeEnabled(false);
        this._btnClose.ignoreContentAdaptWithSize(false);
        this._btnClose.setScale9Enabled(true);
        this._btnClose.setCapInsets(cc.rect(15, 11, 28, 72));
        this._btnClose.setContentSize(cc.size(58, 94));
        this._btnClose.setTouchEnabled(true);

        ///// # _imgShipShadow
        this._imgShipShadow = new ccui.ImageView();
        this._imgShipShadow.setName("_imgShipShadow");
        this.addChild(this._imgShipShadow);
        this._imgShipShadow.setCascadeOpacityEnabled(true);
        this._imgShipShadow.setCascadeColorEnabled(true);
        this._imgShipShadow.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgShipShadow.setPosition(0, -276.97);
        let _imgShipShadowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgShipShadow);
        _imgShipShadowLayoutComponent.setPositionPercentXEnabled(true);
        _imgShipShadowLayoutComponent.setPositionPercentX(0);
        this._imgShipShadow.loadTexture("sprites/minigames/slot-three/slot3_water.png", 0);
        this._imgShipShadow.setUnifySizeEnabled(false);
        this._imgShipShadow.ignoreContentAdaptWithSize(false);
        this._imgShipShadow.setContentSize(cc.size(617, 268));
        this._imgShipShadow.setTouchEnabled(false);

        ///// # _imgShipBanner
        this._imgShipBanner = new ccui.ImageView();
        this._imgShipBanner.setName("_imgShipBanner");
        this.addChild(this._imgShipBanner);
        this._imgShipBanner.setCascadeOpacityEnabled(true);
        this._imgShipBanner.setCascadeColorEnabled(true);
        this._imgShipBanner.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgShipBannerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgShipBanner);
        _imgShipBannerLayoutComponent.setPositionPercentXEnabled(true);
        _imgShipBannerLayoutComponent.setPositionPercentX(0);
        _imgShipBannerLayoutComponent.setPositionPercentYEnabled(true);
        _imgShipBannerLayoutComponent.setPositionPercentY(0);
        this._imgShipBanner.loadTexture("sprites/minigames/slot-three/slot3_ship_center.png", 0);
        this._imgShipBanner.setUnifySizeEnabled(false);
        this._imgShipBanner.ignoreContentAdaptWithSize(false);
        this._imgShipBanner.setContentSize(cc.size(623, 403));
        this._imgShipBanner.setTouchEnabled(false);

        ///// # _imgShipCenter
        this._imgShipCenter = new ccui.ImageView();
        this._imgShipCenter.setName("_imgShipCenter");
        this._imgShipBanner.addChild(this._imgShipCenter);
        this._imgShipCenter.setCascadeOpacityEnabled(true);
        this._imgShipCenter.setCascadeColorEnabled(true);
        this._imgShipCenter.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgShipCenter, 0.5, 0.64);
        let _imgShipCenterLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgShipCenter);
        _imgShipCenterLayoutComponent.setPositionPercentXEnabled(true);
        _imgShipCenterLayoutComponent.setPositionPercentX(0.5);
        _imgShipCenterLayoutComponent.setPositionPercentYEnabled(true);
        _imgShipCenterLayoutComponent.setPositionPercentY(0.64);
        this._imgShipCenter.loadTexture("sprites/minigames/slot-three/slot3_ship_center_1.png", 0);
        this._imgShipCenter.setUnifySizeEnabled(false);
        this._imgShipCenter.ignoreContentAdaptWithSize(false);
        this._imgShipCenter.setContentSize(cc.size(539, 320));
        this._imgShipCenter.setTouchEnabled(false);

        ///// # _imgReel
        this._imgReel = new ccui.ImageView();
        this._imgReel.setName("_imgReel");
        this._imgShipCenter.addChild(this._imgReel);
        this._imgReel.setCascadeOpacityEnabled(true);
        this._imgReel.setCascadeColorEnabled(true);
        this._imgReel.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgReel, 0.5, 0.45);
        let _imgReelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgReel);
        _imgReelLayoutComponent.setPositionPercentXEnabled(true);
        _imgReelLayoutComponent.setPositionPercentX(0.5);
        _imgReelLayoutComponent.setPositionPercentYEnabled(true);
        _imgReelLayoutComponent.setPositionPercentY(0.45);
        this._imgReel.loadTexture("sprites/minigames/slot-three/slot3_reel.png", 0);
        this._imgReel.setUnifySizeEnabled(false);
        this._imgReel.ignoreContentAdaptWithSize(false);
        this._imgReel.setContentSize(cc.size(416, 194));
        this._imgReel.setTouchEnabled(false);

        ///// # _pnlLeft
        this._pnlLeft = new SlotThreeSlot();
        this._pnlLeft.setName("_pnlLeft");
        this._imgReel.addChild(this._pnlLeft);
        this._pnlLeft.setCascadeOpacityEnabled(true);
        this._pnlLeft.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._pnlLeft, 0.1714, 0.4966);
        let _pnlLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._pnlLeft);
        _pnlLeftLayoutComponent.setPositionPercentXEnabled(true);
        _pnlLeftLayoutComponent.setPositionPercentX(0.1714);
        _pnlLeftLayoutComponent.setPositionPercentYEnabled(true);
        _pnlLeftLayoutComponent.setPositionPercentY(0.4966);

        ///// # _pnlMid
        this._pnlMid = new SlotThreeSlot();
        this._pnlMid.setName("_pnlMid");
        this._imgReel.addChild(this._pnlMid);
        this._pnlMid.setCascadeOpacityEnabled(true);
        this._pnlMid.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._pnlMid, 0.4984, 0.5057);
        let _pnlMidLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._pnlMid);
        _pnlMidLayoutComponent.setPositionPercentXEnabled(true);
        _pnlMidLayoutComponent.setPositionPercentX(0.4984);
        _pnlMidLayoutComponent.setPositionPercentYEnabled(true);
        _pnlMidLayoutComponent.setPositionPercentY(0.5057);

        ///// # _pnlRight
        this._pnlRight = new SlotThreeSlot();
        this._pnlRight.setName("_pnlRight");
        this._imgReel.addChild(this._pnlRight);
        this._pnlRight.setCascadeOpacityEnabled(true);
        this._pnlRight.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._pnlRight, 0.8248, 0.5059);
        let _pnlRightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._pnlRight);
        _pnlRightLayoutComponent.setPositionPercentXEnabled(true);
        _pnlRightLayoutComponent.setPositionPercentX(0.8248);
        _pnlRightLayoutComponent.setPositionPercentYEnabled(true);
        _pnlRightLayoutComponent.setPositionPercentY(0.5059);

        ///// # _imgBarBet
        this._imgBarBet = new ccui.ImageView();
        this._imgBarBet.setName("_imgBarBet");
        this._imgShipBanner.addChild(this._imgBarBet);
        this._imgBarBet.setCascadeOpacityEnabled(true);
        this._imgBarBet.setCascadeColorEnabled(true);
        this._imgBarBet.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBarBet, 0.5, 0.12);
        let _imgBarBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBarBet);
        _imgBarBetLayoutComponent.setPositionPercentXEnabled(true);
        _imgBarBetLayoutComponent.setPositionPercentX(0.5);
        _imgBarBetLayoutComponent.setPositionPercentYEnabled(true);
        _imgBarBetLayoutComponent.setPositionPercentY(0.12);
        this._imgBarBet.loadTexture("sprites/minigames/slot-three/slot3_bet_box.png", 0);
        this._imgBarBet.setUnifySizeEnabled(false);
        this._imgBarBet.ignoreContentAdaptWithSize(false);
        this._imgBarBet.setContentSize(cc.size(173, 87));
        this._imgBarBet.setTouchEnabled(false);

        ///// # _txtGoldBet
        this._txtGoldBet = new ck.Text();
        this._txtGoldBet.setName("_txtGoldBet");
        this._imgBarBet.addChild(this._txtGoldBet);
        this._txtGoldBet.setCascadeOpacityEnabled(true);
        this._txtGoldBet.setCascadeColorEnabled(true);
        this._txtGoldBet.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGoldBet, 0.5, 0.38);
        this._txtGoldBet.setTextColor(cc.color(255, 243, 56, 255));
        let _txtGoldBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGoldBet);
        _txtGoldBetLayoutComponent.setPositionPercentXEnabled(true);
        _txtGoldBetLayoutComponent.setPositionPercentX(0.5);
        _txtGoldBetLayoutComponent.setPositionPercentYEnabled(true);
        _txtGoldBetLayoutComponent.setPositionPercentY(0.38);
        this._txtGoldBet.setTouchEnabled(false);
        this._txtGoldBet.setUnifySizeEnabled(false);
        this._txtGoldBet.ignoreContentAdaptWithSize(false);
        this._txtGoldBet.setContentSize(cc.size(135, 29));
        this._txtGoldBet.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGoldBet.setDefaultFontSize(25);
        this._txtGoldBet.setTextHorizontalAlignment(1);
        this._txtGoldBet.setTextVerticalAlignment(0);
        this._txtGoldBet.autoFitSingleLine();

        ///// # _btnDecreaseBet
        this._btnDecreaseBet = new ccui.Button();
        this._btnDecreaseBet.setName("_btnDecreaseBet");
        this._imgBarBet.addChild(this._btnDecreaseBet);
        this._btnDecreaseBet.setCascadeOpacityEnabled(true);
        this._btnDecreaseBet.setCascadeColorEnabled(true);
        this._btnDecreaseBet.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnDecreaseBet, -0.3, 0.45);
        let _btnDecreaseBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnDecreaseBet);
        _btnDecreaseBetLayoutComponent.setPositionPercentXEnabled(true);
        _btnDecreaseBetLayoutComponent.setPositionPercentX(-0.3);
        _btnDecreaseBetLayoutComponent.setPositionPercentYEnabled(true);
        _btnDecreaseBetLayoutComponent.setPositionPercentY(0.45);
        this._btnDecreaseBet.loadTextureDisabled("sprites/minigames/slot-three/btnMinus.png", 0);
        this._btnDecreaseBet.loadTexturePressed("sprites/minigames/slot-three/btnMinus.png", 0);
        this._btnDecreaseBet.loadTextureNormal("sprites/minigames/slot-three/btnMinus.png", 0);
        this._btnDecreaseBet.setUnifySizeEnabled(false);
        this._btnDecreaseBet.ignoreContentAdaptWithSize(false);
        this._btnDecreaseBet.setScale9Enabled(true);
        this._btnDecreaseBet.setCapInsets(cc.rect(15, 11, 36, 42));
        this._btnDecreaseBet.setContentSize(cc.size(66, 64));
        this._btnDecreaseBet.setTouchEnabled(true);

        ///// # _btnIncreaseBet
        this._btnIncreaseBet = new ccui.Button();
        this._btnIncreaseBet.setName("_btnIncreaseBet");
        this._imgBarBet.addChild(this._btnIncreaseBet);
        this._btnIncreaseBet.setCascadeOpacityEnabled(true);
        this._btnIncreaseBet.setCascadeColorEnabled(true);
        this._btnIncreaseBet.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnIncreaseBet, 1.3, 0.45);
        let _btnIncreaseBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnIncreaseBet);
        _btnIncreaseBetLayoutComponent.setPositionPercentXEnabled(true);
        _btnIncreaseBetLayoutComponent.setPositionPercentX(1.3);
        _btnIncreaseBetLayoutComponent.setPositionPercentYEnabled(true);
        _btnIncreaseBetLayoutComponent.setPositionPercentY(0.45);
        this._btnIncreaseBet.loadTextureDisabled("sprites/minigames/slot-three/btnPlus.png", 0);
        this._btnIncreaseBet.loadTexturePressed("sprites/minigames/slot-three/btnPlus.png", 0);
        this._btnIncreaseBet.loadTextureNormal("sprites/minigames/slot-three/btnPlus.png", 0);
        this._btnIncreaseBet.setUnifySizeEnabled(false);
        this._btnIncreaseBet.ignoreContentAdaptWithSize(false);
        this._btnIncreaseBet.setScale9Enabled(true);
        this._btnIncreaseBet.setCapInsets(cc.rect(15, 11, 36, 42));
        this._btnIncreaseBet.setContentSize(cc.size(66, 64));
        this._btnIncreaseBet.setTouchEnabled(true);

        ///// # _txtBet
        this._txtBet = new ck.Text();
        this._txtBet.setName("_txtBet");
        this._imgBarBet.addChild(this._txtBet);
        this._txtBet.setCascadeOpacityEnabled(true);
        this._txtBet.setCascadeColorEnabled(true);
        this._txtBet.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBet, 0.5, 0.7);
        this._txtBet.setTextColor(cc.color(78, 244, 176, 255));
        let _txtBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBet);
        _txtBetLayoutComponent.setPositionPercentXEnabled(true);
        _txtBetLayoutComponent.setPositionPercentX(0.5);
        _txtBetLayoutComponent.setPositionPercentYEnabled(true);
        _txtBetLayoutComponent.setPositionPercentY(0.7);
        this._txtBet.setTouchEnabled(false);
        this._txtBet.ignoreContentAdaptWithSize(true);
        this._txtBet.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBet.setDefaultFontSize(20);
        this._txtBet.setString(gm.localize.getText("TXT_BET"));
        this._txtBet.setTextHorizontalAlignment(0);
        this._txtBet.setTextVerticalAlignment(0);
        this._txtBet.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _txtPrize
        this._txtPrize = new ck.Text();
        this._txtPrize.setName("_txtPrize");
        this.addChild(this._txtPrize);
        this._txtPrize.setCascadeOpacityEnabled(true);
        this._txtPrize.setCascadeColorEnabled(true);
        this._txtPrize.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtPrize.setPosition(0, 176.89);
        this._txtPrize.setTextColor(cc.color(255, 243, 56, 255));
        let _txtPrizeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPrize);
        _txtPrizeLayoutComponent.setPositionPercentXEnabled(true);
        _txtPrizeLayoutComponent.setPositionPercentX(0);
        this._txtPrize.setTouchEnabled(false);
        this._txtPrize.ignoreContentAdaptWithSize(true);
        this._txtPrize.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtPrize.setDefaultFontSize(40);
        this._txtPrize.setTextHorizontalAlignment(0);
        this._txtPrize.setTextVerticalAlignment(0);
        this._txtPrize.enableShadow(cc.color(73, 240, 240, 255), cc.size(0, -1), 0);

        ///// # _imgPosBtnSpin
        this._imgPosBtnSpin = new ccui.ImageView();
        this._imgPosBtnSpin.setName("_imgPosBtnSpin");
        this.addChild(this._imgPosBtnSpin);
        this._imgPosBtnSpin.setCascadeOpacityEnabled(true);
        this._imgPosBtnSpin.setCascadeColorEnabled(true);
        this._imgPosBtnSpin.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgPosBtnSpin.setPosition(0, -313.42);
        let _imgPosBtnSpinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPosBtnSpin);
        _imgPosBtnSpinLayoutComponent.setPositionPercentXEnabled(true);
        _imgPosBtnSpinLayoutComponent.setPositionPercentX(0);
        this._imgPosBtnSpin.loadTexture("Default/ImageFile.png", 0);
        this._imgPosBtnSpin.setUnifySizeEnabled(false);
        this._imgPosBtnSpin.ignoreContentAdaptWithSize(false);
        this._imgPosBtnSpin.setContentSize(cc.size(46, 46));
        this._imgPosBtnSpin.setTouchEnabled(false);

        ///// # _expBar
        this._expBar = new progressExp();
        this._expBar.setName("_expBar");
        this.addChild(this._expBar);
        this._expBar.setCascadeOpacityEnabled(true);
        this._expBar.setCascadeColorEnabled(true);
        this._expBar.setPosition(0, 521.94);
        let _expBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._expBar);
        _expBarLayoutComponent.setPositionPercentXEnabled(true);
        _expBarLayoutComponent.setPositionPercentX(0);

    },



});

/**
 * Create SlotThreeShip
 * @returns {_ccs.SlotThreeShip}
 */
_ccs.SlotThreeShip.create = function () {
    return new _ccs.SlotThreeShip();
};
