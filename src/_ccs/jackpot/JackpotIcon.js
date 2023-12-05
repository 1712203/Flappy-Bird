/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.JackpotIcon
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.JackpotIcon = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ccui.Layout} */
    _layoutJackpotBoard: null,
    /** @type {ccui.ImageView} */
    _imgJackpotBoard: null,
    /** @type {ccui.ImageView} */
    _imgJackpotBoardCoin: null,
    /** @type {ck.Text} */
    _txtJackpotValue: null,
    /** @type {ccui.ImageView} */
    _imgProgressBgr: null,
    /** @type {cc.ProgressTimer} */
    _progressTimer: null,
    /** @type {ccui.ImageView} */
    _imgCardTmp: null,
    /** @type {ccui.ImageView} */
    _imgCard: null,
    /** @type {ccui.ImageView} */
    _imgTicket: null,
    /** @type {ck.Text} */
    _txtProgress: null,
    /** @type {ccui.ImageView} */
    _imgJackpot: null,
    /** @type {ccui.ImageView} */
    _imgRedDot: null,


    /**
     * _ccs.JackpotIcon constructor
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

        ///// # _root
        this._root = new ccui.Layout();
        this._root.setName("_root");
        this.addChild(this._root);
        this._root.setCascadeOpacityEnabled(true);
        this._root.setCascadeColorEnabled(true);
        this._root.setAnchorPoint(cc.p(0.5, 0.5));
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(false);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(100, 100));

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._root.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.5);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.5);
        this._imgIcon.loadTexture("icons/color/wheel/Yellow.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(100, 100));
        this._imgIcon.setTouchEnabled(false);

        ///// # _layoutJackpotBoard
        this._layoutJackpotBoard = new ccui.Layout();
        this._layoutJackpotBoard.setName("_layoutJackpotBoard");
        this._root.addChild(this._layoutJackpotBoard);
        this._layoutJackpotBoard.setCascadeOpacityEnabled(true);
        this._layoutJackpotBoard.setCascadeColorEnabled(true);
        this._layoutJackpotBoard.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutJackpotBoard, 0.5, 0.2815);
        this._layoutJackpotBoard.setVisible(false);
        this._layoutJackpotBoard.setScale(0.85, 0.85);
        let _layoutJackpotBoardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutJackpotBoard);
        _layoutJackpotBoardLayoutComponent.setPositionPercentXEnabled(true);
        _layoutJackpotBoardLayoutComponent.setPositionPercentX(0.5);
        _layoutJackpotBoardLayoutComponent.setPositionPercentYEnabled(true);
        _layoutJackpotBoardLayoutComponent.setPositionPercentY(0.2815);
        this._layoutJackpotBoard.setTouchEnabled(false);
        this._layoutJackpotBoard.setUnifySizeEnabled(false);
        this._layoutJackpotBoard.ignoreContentAdaptWithSize(false);
        this._layoutJackpotBoard.setContentSize(cc.size(154.2542, 55.8357));

        ///// # _imgJackpotBoard
        this._imgJackpotBoard = new ccui.ImageView();
        this._imgJackpotBoard.setName("_imgJackpotBoard");
        this._layoutJackpotBoard.addChild(this._imgJackpotBoard);
        this._imgJackpotBoard.setCascadeOpacityEnabled(true);
        this._imgJackpotBoard.setCascadeColorEnabled(true);
        this._imgJackpotBoard.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgJackpotBoard, 0.5, 0.2346);
        this._imgJackpotBoard.setScale(0.34, 0.34);
        let _imgJackpotBoardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgJackpotBoard);
        _imgJackpotBoardLayoutComponent.setPositionPercentXEnabled(true);
        _imgJackpotBoardLayoutComponent.setPositionPercentX(0.5);
        _imgJackpotBoardLayoutComponent.setPositionPercentYEnabled(true);
        _imgJackpotBoardLayoutComponent.setPositionPercentY(0.2346);
        this._imgJackpotBoard.loadTexture("jackpot/mega/JackpotBoard.png", 1);
        this._imgJackpotBoard.setUnifySizeEnabled(false);
        this._imgJackpotBoard.ignoreContentAdaptWithSize(false);
        this._imgJackpotBoard.setScale9Enabled(true);
        this._imgJackpotBoard.setCapInsets(cc.rect(181, 31, 46, 55));
        this._imgJackpotBoard.setContentSize(cc.size(368.9873, 117));
        this._imgJackpotBoard.setTouchEnabled(false);

        ///// # _imgJackpotBoardCoin
        this._imgJackpotBoardCoin = new ccui.ImageView();
        this._imgJackpotBoardCoin.setName("_imgJackpotBoardCoin");
        this._layoutJackpotBoard.addChild(this._imgJackpotBoardCoin);
        this._imgJackpotBoardCoin.setCascadeOpacityEnabled(true);
        this._imgJackpotBoardCoin.setCascadeColorEnabled(true);
        this._imgJackpotBoardCoin.setAnchorPoint(cc.p(0.505, 0.4));
        ck.UIUtils.setPositionPercent(this._imgJackpotBoardCoin, 0.2644, 0.5462);
        this._imgJackpotBoardCoin.setScale(0.4, 0.4);
        let _imgJackpotBoardCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgJackpotBoardCoin);
        _imgJackpotBoardCoinLayoutComponent.setPositionPercentXEnabled(true);
        _imgJackpotBoardCoinLayoutComponent.setPositionPercentX(0.2644);
        _imgJackpotBoardCoinLayoutComponent.setPositionPercentYEnabled(true);
        _imgJackpotBoardCoinLayoutComponent.setPositionPercentY(0.5462);
        this._imgJackpotBoardCoin.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgJackpotBoardCoin.setUnifySizeEnabled(false);
        this._imgJackpotBoardCoin.ignoreContentAdaptWithSize(false);
        this._imgJackpotBoardCoin.setContentSize(cc.size(50, 50));
        this._imgJackpotBoardCoin.setTouchEnabled(false);

        ///// # _txtJackpotValue
        this._txtJackpotValue = new ck.Text();
        this._txtJackpotValue.setName("_txtJackpotValue");
        this._layoutJackpotBoard.addChild(this._txtJackpotValue);
        this._txtJackpotValue.setCascadeOpacityEnabled(true);
        this._txtJackpotValue.setCascadeColorEnabled(true);
        this._txtJackpotValue.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtJackpotValue, 0.5642, 0.5841);
        this._txtJackpotValue.setTextColor(cc.color(255, 254, 147, 255));
        let _txtJackpotValueLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtJackpotValue);
        _txtJackpotValueLayoutComponent.setPositionPercentXEnabled(true);
        _txtJackpotValueLayoutComponent.setPositionPercentX(0.5642);
        _txtJackpotValueLayoutComponent.setPositionPercentYEnabled(true);
        _txtJackpotValueLayoutComponent.setPositionPercentY(0.5841);
        this._txtJackpotValue.setTouchEnabled(false);
        this._txtJackpotValue.ignoreContentAdaptWithSize(true);
        this._txtJackpotValue.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtJackpotValue.setDefaultFontSize(15);
        this._txtJackpotValue.setTextHorizontalAlignment(1);
        this._txtJackpotValue.setTextVerticalAlignment(1);
        this._txtJackpotValue.enableOutline(cc.color(68, 44, 0, 255), 2);

        ///// # _imgProgressBgr
        this._imgProgressBgr = new ccui.ImageView();
        this._imgProgressBgr.setName("_imgProgressBgr");
        this._root.addChild(this._imgProgressBgr);
        this._imgProgressBgr.setCascadeOpacityEnabled(true);
        this._imgProgressBgr.setCascadeColorEnabled(true);
        this._imgProgressBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgProgressBgr, 0.47, 0.09);
        let _imgProgressBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgProgressBgr);
        _imgProgressBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgProgressBgrLayoutComponent.setPositionPercentX(0.47);
        _imgProgressBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgProgressBgrLayoutComponent.setPositionPercentY(0.09);
        this._imgProgressBgr.loadTexture("basics/bars/Bar_03.png", 1);
        this._imgProgressBgr.setUnifySizeEnabled(false);
        this._imgProgressBgr.ignoreContentAdaptWithSize(false);
        this._imgProgressBgr.setContentSize(cc.size(70, 21));
        this._imgProgressBgr.setTouchEnabled(false);

        ///// # _progressTimer
        let __sprite = new cc.Sprite();
        __sprite.setSpriteFrame(cc.spriteFrameCache.getSpriteFrame("basics/bars/Bar_04.png"));
        this._progressTimer = new cc.ProgressTimer(__sprite);
        this._progressTimer.setName("_progressTimer");
        this._imgProgressBgr.addChild(this._progressTimer);
        this._progressTimer.setCascadeOpacityEnabled(true);
        this._progressTimer.setCascadeColorEnabled(true);
        this._progressTimer.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._progressTimer, 0.5, 0.5);
        this._progressTimer.setScale(0.5882, 1);
        let _progressTimerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._progressTimer);
        _progressTimerLayoutComponent.setPositionPercentXEnabled(true);
        _progressTimerLayoutComponent.setPositionPercentX(0.5);
        _progressTimerLayoutComponent.setPositionPercentYEnabled(true);
        _progressTimerLayoutComponent.setPositionPercentY(0.5);
        this._progressTimer.setType(cc.ProgressTimer.TYPE_BAR);
        this._progressTimer.setMidpoint(cc.p(0, 0));
        this._progressTimer.setBarChangeRate(cc.p(1, 0));

        ///// # _imgCardTmp
        this._imgCardTmp = new ccui.ImageView();
        this._imgCardTmp.setName("_imgCardTmp");
        this._imgProgressBgr.addChild(this._imgCardTmp);
        this._imgCardTmp.setCascadeOpacityEnabled(true);
        this._imgCardTmp.setCascadeColorEnabled(true);
        this._imgCardTmp.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCardTmp, 1.0143, 0.5);
        this._imgCardTmp.setScale(0.09, 0.09);
        let _imgCardTmpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCardTmp);
        _imgCardTmpLayoutComponent.setPositionPercentXEnabled(true);
        _imgCardTmpLayoutComponent.setPositionPercentX(1.0143);
        _imgCardTmpLayoutComponent.setPositionPercentYEnabled(true);
        _imgCardTmpLayoutComponent.setPositionPercentY(0.5);
        this._imgCardTmp.loadTexture("cards/37.png", 1);
        this._imgCardTmp.setUnifySizeEnabled(false);
        this._imgCardTmp.ignoreContentAdaptWithSize(false);
        this._imgCardTmp.setContentSize(cc.size(210, 304));
        this._imgCardTmp.setTouchEnabled(false);

        ///// # _imgCard
        this._imgCard = new ccui.ImageView();
        this._imgCard.setName("_imgCard");
        this._imgProgressBgr.addChild(this._imgCard);
        this._imgCard.setCascadeOpacityEnabled(true);
        this._imgCard.setCascadeColorEnabled(true);
        this._imgCard.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCard, 1.0143, 0.5);
        this._imgCard.setScale(0.22, 0.22);
        let _imgCardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard);
        _imgCardLayoutComponent.setPositionPercentXEnabled(true);
        _imgCardLayoutComponent.setPositionPercentX(1.0143);
        _imgCardLayoutComponent.setPositionPercentYEnabled(true);
        _imgCardLayoutComponent.setPositionPercentY(0.5);
        this._imgCard.loadTexture("icons/color/quests/CardJacks.png", 1);
        this._imgCard.setUnifySizeEnabled(false);
        this._imgCard.ignoreContentAdaptWithSize(false);
        this._imgCard.setContentSize(cc.size(128, 128));
        this._imgCard.setTouchEnabled(false);

        ///// # _imgTicket
        this._imgTicket = new ccui.ImageView();
        this._imgTicket.setName("_imgTicket");
        this._imgProgressBgr.addChild(this._imgTicket);
        this._imgTicket.setCascadeOpacityEnabled(true);
        this._imgTicket.setCascadeColorEnabled(true);
        this._imgTicket.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTicket, 1.0799, 0.5);
        this._imgTicket.setVisible(false);
        this._imgTicket.setScale(0.25, 0.25);
        let _imgTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTicket);
        _imgTicketLayoutComponent.setPositionPercentXEnabled(true);
        _imgTicketLayoutComponent.setPositionPercentX(1.0799);
        _imgTicketLayoutComponent.setPositionPercentYEnabled(true);
        _imgTicketLayoutComponent.setPositionPercentY(0.5);
        this._imgTicket.loadTexture("icons/color/wheel/Yellow.png", 1);
        this._imgTicket.setUnifySizeEnabled(false);
        this._imgTicket.ignoreContentAdaptWithSize(false);
        this._imgTicket.setContentSize(cc.size(128, 128));
        this._imgTicket.setTouchEnabled(false);

        ///// # _txtProgress
        this._txtProgress = new ck.Text();
        this._txtProgress.setName("_txtProgress");
        this._imgProgressBgr.addChild(this._txtProgress);
        this._txtProgress.setCascadeOpacityEnabled(true);
        this._txtProgress.setCascadeColorEnabled(true);
        this._txtProgress.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtProgress, 0.4429, 0.4524);
        let _txtProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtProgress);
        _txtProgressLayoutComponent.setPositionPercentXEnabled(true);
        _txtProgressLayoutComponent.setPositionPercentX(0.4429);
        _txtProgressLayoutComponent.setPositionPercentYEnabled(true);
        _txtProgressLayoutComponent.setPositionPercentY(0.4524);
        this._txtProgress.setTouchEnabled(false);
        this._txtProgress.ignoreContentAdaptWithSize(true);
        this._txtProgress.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtProgress.setDefaultFontSize(18);
        this._txtProgress.setTextHorizontalAlignment(1);
        this._txtProgress.setTextVerticalAlignment(1);
        this._txtProgress.enableOutline(cc.color(0, 67, 64, 255), 1);

        ///// # _imgJackpot
        this._imgJackpot = new ccui.ImageView();
        this._imgJackpot.setName("_imgJackpot");
        this._root.addChild(this._imgJackpot);
        this._imgJackpot.setCascadeOpacityEnabled(true);
        this._imgJackpot.setCascadeColorEnabled(true);
        this._imgJackpot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgJackpot, 0.5, 0.35);
        this._imgJackpot.setScale(0.55, 0.55);
        let _imgJackpotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgJackpot);
        _imgJackpotLayoutComponent.setPositionPercentXEnabled(true);
        _imgJackpotLayoutComponent.setPositionPercentX(0.5);
        _imgJackpotLayoutComponent.setPositionPercentYEnabled(true);
        _imgJackpotLayoutComponent.setPositionPercentY(0.35);
        this._imgJackpot.loadTexture("jackpot/other/Logo.png", 1);
        this._imgJackpot.setUnifySizeEnabled(false);
        this._imgJackpot.ignoreContentAdaptWithSize(false);
        this._imgJackpot.setContentSize(cc.size(176, 57));
        this._imgJackpot.setTouchEnabled(false);

        ///// # _imgRedDot
        this._imgRedDot = new ccui.ImageView();
        this._imgRedDot.setName("_imgRedDot");
        this._root.addChild(this._imgRedDot);
        this._imgRedDot.setCascadeOpacityEnabled(true);
        this._imgRedDot.setCascadeColorEnabled(true);
        this._imgRedDot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRedDot, 0.8221, 0.7663);
        let _imgRedDotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRedDot);
        _imgRedDotLayoutComponent.setPositionPercentXEnabled(true);
        _imgRedDotLayoutComponent.setPositionPercentX(0.8221);
        _imgRedDotLayoutComponent.setPositionPercentYEnabled(true);
        _imgRedDotLayoutComponent.setPositionPercentY(0.7663);
        this._imgRedDot.loadTexture("basics/other/RedDot.png", 1);
        this._imgRedDot.setUnifySizeEnabled(false);
        this._imgRedDot.ignoreContentAdaptWithSize(false);
        this._imgRedDot.setContentSize(cc.size(31, 31));
        this._imgRedDot.setTouchEnabled(false);

    },



});

/**
 * Create JackpotIcon
 * @returns {_ccs.JackpotIcon}
 */
_ccs.JackpotIcon.create = function () {
    return new _ccs.JackpotIcon();
};
