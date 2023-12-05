/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PokerLayer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.PokerLayer = cc.Layer.extend({

    /** @type {ccui.ImageView} */
    _imgBg: null,
    /** @type {ccui.ImageView} */
    _imgTable1: null,
    /** @type {ccui.Layout} */
    _layoutRewardInfo: null,
    /** @type {ccui.ImageView} */
    _imgRewardBg: null,
    /** @type {ccui.ImageView} */
    _imgTablePrizeLine: null,
    /** @type {ccui.ImageView} */
    _imgPrizeHighlight: null,
    /** @type {ccui.Layout} */
    _layoutInfo0: null,
    /** @type {ck.Text} */
    _txtRewardName: null,
    /** @type {ck.Text} */
    _txtRewardTime: null,
    /** @type {ccui.Button} */
    _btnHelp: null,
    /** @type {ccui.ImageView} */
    Image_1: null,
    /** @type {ccui.Layout} */
    _layoutTouchToBet: null,
    /** @type {ccui.ImageView} */
    _imgTable2: null,
    /** @type {cc.Node} */
    _nodeHint: null,
    /** @type {ccui.ImageView} */
    _imgFlower: null,
    /** @type {ck.Text} */
    _txtLetBet: null,
    /** @type {ccui.ImageView} */
    _imgGoldBetBg: null,
    /** @type {ccui.Layout} */
    _layoutCards: null,
    /** @type {cc.Node} */
    _nodeCardPos: null,
    /** @type {ccui.Layout} */
    _layoutGoldBet: null,
    /** @type {ccui.Layout} */
    _layoutHUD: null,
    /** @type {ccui.ImageView} */
    _imgHUDBg: null,
    /** @type {ccui.ImageView} */
    _imgChooseTicket: null,
    /** @type {ccui.Layout} */
    _layoutInfo: null,
    /** @type {ccui.Layout} */
    _layoutAvatar: null,
    /** @type {Avatar} */
    _avatarNode: null,
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
    _layoutBetButton: null,
    /** @type {ccui.Layout} */
    _layoutButtonBet00: null,
    /** @type {ccui.ImageView} */
    _imgButtonBet00: null,
    /** @type {ck.Text} */
    _txtButtonBet00: null,
    /** @type {ccui.ImageView} */
    _imgIconBet00: null,
    /** @type {ccui.Layout} */
    _layoutButtonBet01: null,
    /** @type {ccui.ImageView} */
    _imgButtonBet01: null,
    /** @type {ck.Text} */
    _txtButtonBet01: null,
    /** @type {ccui.ImageView} */
    _imgIconBet01: null,
    /** @type {ccui.Layout} */
    _layoutButtonBet02: null,
    /** @type {ccui.ImageView} */
    _imgButtonBet02: null,
    /** @type {ck.Text} */
    _txtButtonBet02: null,
    /** @type {ccui.ImageView} */
    _imgIconBet02: null,
    /** @type {ccui.Button} */
    _btnReset: null,
    /** @type {ck.Text} */
    _txtCountdownTime: null,
    /** @type {ccui.Button} */
    _btnDeal: null,
    /** @type {ck.Text} */
    _txtDeal: null,
    /** @type {ccui.Button} */
    _btnDraw: null,
    /** @type {ck.Text} */
    _txtDraw: null,
    /** @type {ck.OfferIconGrid} */
    _gridOfferIcons: null,
    /** @type {ccui.Button} */
    _btnCheat: null,
    /** @type {ck.Text} */
    _txtCheat: null,
    /** @type {ccui.Layout} */
    _layoutExit: null,
    /** @type {ccui.ImageView} */
    _imgExitBgr: null,
    /** @type {ccui.ImageView} */
    _imgExitIcon: null,
    /** @type {progressExp} */
    _expBar: null,
    /** @type {cc.Node} */
    _nodeTrophyProgress: null,


    /**
     * _ccs.PokerLayer constructor
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

        ///// # _imgBg
        this._imgBg = new ccui.ImageView();
        this._imgBg.setName("_imgBg");
        this.addChild(this._imgBg);
        this._imgBg.setCascadeOpacityEnabled(true);
        this._imgBg.setCascadeColorEnabled(true);
        this._imgBg.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBg, 0.4982, 0.5001);
        if (!PlatformUtils.hasNotch()) {
            let _imgBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBg);
            _imgBgLayoutComponent.setPositionPercentXEnabled(true);
            _imgBgLayoutComponent.setPositionPercentX(0.4982);
            _imgBgLayoutComponent.setPositionPercentYEnabled(true);
            _imgBgLayoutComponent.setPositionPercentY(0.5001);
            _imgBgLayoutComponent.setPercentWidthEnabled(true);
            _imgBgLayoutComponent.setPercentWidth(1);
            _imgBgLayoutComponent.setPercentHeightEnabled(true);
            _imgBgLayoutComponent.setPercentHeight(1);
        }
        this._imgBg.loadTexture("sprites/backgrounds/Poker.png", 0);
        this._imgBg.setUnifySizeEnabled(false);
        this._imgBg.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBg, 1, 1);
        this._imgBg.setTouchEnabled(false);
        UIUtils.initFullScreenBackground(this._imgBg);

        ///// # _imgTable1
        this._imgTable1 = new ccui.ImageView();
        this._imgTable1.setName("_imgTable1");
        this.addChild(this._imgTable1);
        this._imgTable1.setCascadeOpacityEnabled(true);
        this._imgTable1.setCascadeColorEnabled(true);
        this._imgTable1.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgTable1, 0.5, -0.0034);
        let _imgTable1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTable1);
        _imgTable1LayoutComponent.setPositionPercentXEnabled(true);
        _imgTable1LayoutComponent.setPositionPercentX(0.5);
        this._imgTable1.loadTexture("ui/PokerTable1.png", 1);
        this._imgTable1.setUnifySizeEnabled(false);
        this._imgTable1.ignoreContentAdaptWithSize(false);
        this._imgTable1.setScale9Enabled(true);
        this._imgTable1.setCapInsets(cc.rect(211, 109, 218, 98));
        this._imgTable1.setContentSize(cc.size(640, 349.1662));
        this._imgTable1.setTouchEnabled(false);

        ///// # _layoutRewardInfo
        this._layoutRewardInfo = new ccui.Layout();
        this._layoutRewardInfo.setName("_layoutRewardInfo");
        this.addChild(this._layoutRewardInfo);
        this._layoutRewardInfo.setCascadeOpacityEnabled(true);
        this._layoutRewardInfo.setCascadeColorEnabled(true);
        let _layoutRewardInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRewardInfo);
        _layoutRewardInfoLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRewardInfoLayoutComponent.setPositionPercentX(0);
        _layoutRewardInfoLayoutComponent.setPositionPercentYEnabled(true);
        _layoutRewardInfoLayoutComponent.setPositionPercentY(0);
        _layoutRewardInfoLayoutComponent.setPercentWidthEnabled(true);
        _layoutRewardInfoLayoutComponent.setPercentWidth(1);
        _layoutRewardInfoLayoutComponent.setPercentHeightEnabled(true);
        _layoutRewardInfoLayoutComponent.setPercentHeight(1);
        this._layoutRewardInfo.setTouchEnabled(false);
        this._layoutRewardInfo.setUnifySizeEnabled(false);
        this._layoutRewardInfo.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutRewardInfo, 1, 1);

        ///// # _imgRewardBg
        this._imgRewardBg = new ccui.ImageView();
        this._imgRewardBg.setName("_imgRewardBg");
        this._layoutRewardInfo.addChild(this._imgRewardBg);
        this._imgRewardBg.setCascadeOpacityEnabled(true);
        this._imgRewardBg.setCascadeColorEnabled(true);
        this._imgRewardBg.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRewardBg, 0.9678, 0.8419);
        this._imgRewardBg.setOpacity(216);
        let _imgRewardBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRewardBg);
        _imgRewardBgLayoutComponent.setPositionPercentXEnabled(true);
        _imgRewardBgLayoutComponent.setPositionPercentX(0.9678);
        _imgRewardBgLayoutComponent.setPositionPercentYEnabled(true);
        _imgRewardBgLayoutComponent.setPositionPercentY(0.8419);
        this._imgRewardBg.loadTexture("ui/PokerTablePrize.png", 1);
        this._imgRewardBg.setUnifySizeEnabled(false);
        this._imgRewardBg.ignoreContentAdaptWithSize(false);
        this._imgRewardBg.setScale9Enabled(true);
        this._imgRewardBg.setCapInsets(cc.rect(13, 16, 15, 1));
        this._imgRewardBg.setContentSize(cc.size(520, 135.4745));
        this._imgRewardBg.setTouchEnabled(false);

        ///// # _imgTablePrizeLine
        this._imgTablePrizeLine = new ccui.ImageView();
        this._imgTablePrizeLine.setName("_imgTablePrizeLine");
        this._imgRewardBg.addChild(this._imgTablePrizeLine);
        this._imgTablePrizeLine.setCascadeOpacityEnabled(true);
        this._imgTablePrizeLine.setCascadeColorEnabled(true);
        this._imgTablePrizeLine.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTablePrizeLine, 0.5, 0.5);
        let _imgTablePrizeLineLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTablePrizeLine);
        _imgTablePrizeLineLayoutComponent.setPositionPercentXEnabled(true);
        _imgTablePrizeLineLayoutComponent.setPositionPercentX(0.5);
        _imgTablePrizeLineLayoutComponent.setPositionPercentYEnabled(true);
        _imgTablePrizeLineLayoutComponent.setPositionPercentY(0.5);
        this._imgTablePrizeLine.loadTexture("ui/PokerTableLine.png", 1);
        this._imgTablePrizeLine.setUnifySizeEnabled(false);
        this._imgTablePrizeLine.ignoreContentAdaptWithSize(false);
        this._imgTablePrizeLine.setContentSize(cc.size(3, 108));
        this._imgTablePrizeLine.setTouchEnabled(false);

        ///// # _imgPrizeHighlight
        this._imgPrizeHighlight = new ccui.ImageView();
        this._imgPrizeHighlight.setName("_imgPrizeHighlight");
        this._imgRewardBg.addChild(this._imgPrizeHighlight);
        this._imgPrizeHighlight.setCascadeOpacityEnabled(true);
        this._imgPrizeHighlight.setCascadeColorEnabled(true);
        this._imgPrizeHighlight.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPrizeHighlight, 0.26, 0.8293);
        let _imgPrizeHighlightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPrizeHighlight);
        _imgPrizeHighlightLayoutComponent.setPositionPercentXEnabled(true);
        _imgPrizeHighlightLayoutComponent.setPositionPercentX(0.26);
        _imgPrizeHighlightLayoutComponent.setPositionPercentYEnabled(true);
        _imgPrizeHighlightLayoutComponent.setPositionPercentY(0.8293);
        this._imgPrizeHighlight.loadTexture("ui/PokerPrizeLight.png", 1);
        this._imgPrizeHighlight.setUnifySizeEnabled(false);
        this._imgPrizeHighlight.ignoreContentAdaptWithSize(false);
        this._imgPrizeHighlight.setScale9Enabled(true);
        this._imgPrizeHighlight.setCapInsets(cc.rect(31, 5, 124, 7));
        this._imgPrizeHighlight.setContentSize(cc.size(259.82, 21.1761));
        this._imgPrizeHighlight.setTouchEnabled(false);

        ///// # _layoutInfo0
        this._layoutInfo0 = new ccui.Layout();
        this._layoutInfo0.setName("_layoutInfo0");
        this._imgRewardBg.addChild(this._layoutInfo0);
        this._layoutInfo0.setCascadeOpacityEnabled(true);
        this._layoutInfo0.setCascadeColorEnabled(true);
        this._layoutInfo0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutInfo0, 0.2507, 0.8293);
        let _layoutInfo0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInfo0);
        _layoutInfo0LayoutComponent.setPositionPercentXEnabled(true);
        _layoutInfo0LayoutComponent.setPositionPercentX(0.2507);
        _layoutInfo0LayoutComponent.setPositionPercentYEnabled(true);
        _layoutInfo0LayoutComponent.setPositionPercentY(0.8293);
        this._layoutInfo0.setTouchEnabled(true);
        this._layoutInfo0.setUnifySizeEnabled(false);
        this._layoutInfo0.ignoreContentAdaptWithSize(false);
        this._layoutInfo0.setContentSize(cc.size(262.3753, 21.1741));

        ///// # _txtRewardName
        this._txtRewardName = new ck.Text();
        this._txtRewardName.setName("_txtRewardName");
        this._layoutInfo0.addChild(this._txtRewardName);
        this._txtRewardName.setCascadeOpacityEnabled(true);
        this._txtRewardName.setCascadeColorEnabled(true);
        this._txtRewardName.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRewardName, 0.05, 0.6);
        let _txtRewardNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRewardName);
        _txtRewardNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtRewardNameLayoutComponent.setPositionPercentX(0.05);
        _txtRewardNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtRewardNameLayoutComponent.setPositionPercentY(0.6);
        this._txtRewardName.setTouchEnabled(false);
        this._txtRewardName.ignoreContentAdaptWithSize(true);
        this._txtRewardName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtRewardName.setDefaultFontSize(20);
        this._txtRewardName.setString(gm.localize.getText("TXT_THREE_OF_KIND"));
        this._txtRewardName.setTextHorizontalAlignment(0);
        this._txtRewardName.setTextVerticalAlignment(1);

        ///// # _txtRewardTime
        this._txtRewardTime = new ck.Text();
        this._txtRewardTime.setName("_txtRewardTime");
        this._layoutInfo0.addChild(this._txtRewardTime);
        this._txtRewardTime.setCascadeOpacityEnabled(true);
        this._txtRewardTime.setCascadeColorEnabled(true);
        this._txtRewardTime.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRewardTime, 0.95, 0.6);
        let _txtRewardTimeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRewardTime);
        _txtRewardTimeLayoutComponent.setPositionPercentXEnabled(true);
        _txtRewardTimeLayoutComponent.setPositionPercentX(0.95);
        _txtRewardTimeLayoutComponent.setPositionPercentYEnabled(true);
        _txtRewardTimeLayoutComponent.setPositionPercentY(0.6);
        this._txtRewardTime.setTouchEnabled(false);
        this._txtRewardTime.ignoreContentAdaptWithSize(true);
        this._txtRewardTime.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtRewardTime.setDefaultFontSize(20);
        this._txtRewardTime.setTextHorizontalAlignment(2);
        this._txtRewardTime.setTextVerticalAlignment(1);

        ///// # _btnHelp
        this._btnHelp = new ccui.Button();
        this._btnHelp.setName("_btnHelp");
        this.addChild(this._btnHelp);
        this._btnHelp.setCascadeOpacityEnabled(true);
        this._btnHelp.setCascadeColorEnabled(true);
        this._btnHelp.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnHelp, 0.07, 0.95);
        let _btnHelpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnHelp);
        _btnHelpLayoutComponent.setPositionPercentXEnabled(true);
        _btnHelpLayoutComponent.setPositionPercentX(0.07);
        _btnHelpLayoutComponent.setPositionPercentYEnabled(true);
        _btnHelpLayoutComponent.setPositionPercentY(0.95);
        this._btnHelp.loadTextureDisabled("buttons/squares/Info.png", 1);
        this._btnHelp.loadTexturePressed("buttons/squares/Info.png", 1);
        this._btnHelp.loadTextureNormal("buttons/squares/Info.png", 1);
        this._btnHelp.setUnifySizeEnabled(false);
        this._btnHelp.ignoreContentAdaptWithSize(false);
        this._btnHelp.setScale9Enabled(true);
        this._btnHelp.setCapInsets(cc.rect(15, 11, 25, 31));
        this._btnHelp.setContentSize(cc.size(60, 60));
        this._btnHelp.setTouchEnabled(true);

        ///// # Image_1
        this.Image_1 = new ccui.ImageView();
        this.Image_1.setName("Image_1");
        this._btnHelp.addChild(this.Image_1);
        this.Image_1.setCascadeOpacityEnabled(true);
        this.Image_1.setCascadeColorEnabled(true);
        this.Image_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.Image_1, 0.5, 0.6);
        let Image_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.Image_1);
        Image_1LayoutComponent.setPositionPercentXEnabled(true);
        Image_1LayoutComponent.setPositionPercentX(0.5);
        Image_1LayoutComponent.setPositionPercentYEnabled(true);
        Image_1LayoutComponent.setPositionPercentY(0.6);
        this.Image_1.loadTexture("icons/flat/Info.png", 1);
        this.Image_1.setUnifySizeEnabled(false);
        this.Image_1.ignoreContentAdaptWithSize(false);
        this.Image_1.setContentSize(cc.size(14, 32));
        this.Image_1.setTouchEnabled(false);

        ///// # _layoutTouchToBet
        this._layoutTouchToBet = new ccui.Layout();
        this._layoutTouchToBet.setName("_layoutTouchToBet");
        this.addChild(this._layoutTouchToBet);
        this._layoutTouchToBet.setCascadeOpacityEnabled(true);
        this._layoutTouchToBet.setCascadeColorEnabled(true);
        this._layoutTouchToBet.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTouchToBet, 0.5, 0.58);
        let _layoutTouchToBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTouchToBet);
        _layoutTouchToBetLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTouchToBetLayoutComponent.setPositionPercentX(0.5);
        _layoutTouchToBetLayoutComponent.setPositionPercentYEnabled(true);
        _layoutTouchToBetLayoutComponent.setPositionPercentY(0.58);
        _layoutTouchToBetLayoutComponent.setPercentWidthEnabled(true);
        _layoutTouchToBetLayoutComponent.setPercentWidth(1);
        this._layoutTouchToBet.setTouchEnabled(false);
        this._layoutTouchToBet.setUnifySizeEnabled(false);
        this._layoutTouchToBet.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutTouchToBet, 1);
        this._layoutTouchToBet.setContentSize(cc.size(this._layoutTouchToBet.width, 389.1542));

        ///// # _imgTable2
        this._imgTable2 = new ccui.ImageView();
        this._imgTable2.setName("_imgTable2");
        this._layoutTouchToBet.addChild(this._imgTable2);
        this._imgTable2.setCascadeOpacityEnabled(true);
        this._imgTable2.setCascadeColorEnabled(true);
        this._imgTable2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTable2, 0.5, 0.5);
        let _imgTable2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTable2);
        _imgTable2LayoutComponent.setPositionPercentXEnabled(true);
        _imgTable2LayoutComponent.setPositionPercentX(0.5);
        _imgTable2LayoutComponent.setPositionPercentYEnabled(true);
        _imgTable2LayoutComponent.setPositionPercentY(0.5);
        this._imgTable2.loadTexture("ui/PokerTable2.png", 1);
        this._imgTable2.setUnifySizeEnabled(false);
        this._imgTable2.ignoreContentAdaptWithSize(false);
        this._imgTable2.setContentSize(cc.size(826, 595));
        this._imgTable2.setTouchEnabled(false);

        ///// # _nodeHint
        this._nodeHint = new cc.Node();
        this._nodeHint.setName("_nodeHint");
        this._imgTable2.addChild(this._nodeHint);
        this._nodeHint.setCascadeOpacityEnabled(true);
        this._nodeHint.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeHint, 0.5, 0.5137);
        let _nodeHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeHint);
        _nodeHintLayoutComponent.setPositionPercentXEnabled(true);
        _nodeHintLayoutComponent.setPositionPercentX(0.5);
        _nodeHintLayoutComponent.setPositionPercentYEnabled(true);
        _nodeHintLayoutComponent.setPositionPercentY(0.5137);

        ///// # _imgFlower
        this._imgFlower = new ccui.ImageView();
        this._imgFlower.setName("_imgFlower");
        this._nodeHint.addChild(this._imgFlower);
        this._imgFlower.setCascadeOpacityEnabled(true);
        this._imgFlower.setCascadeColorEnabled(true);
        this._imgFlower.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgFlower.setScale(1.07, 1);
        let _imgFlowerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFlower);
        _imgFlowerLayoutComponent.setPositionPercentXEnabled(true);
        _imgFlowerLayoutComponent.setPositionPercentX(0);
        _imgFlowerLayoutComponent.setPositionPercentYEnabled(true);
        _imgFlowerLayoutComponent.setPositionPercentY(0);
        this._imgFlower.loadTexture("ui/LetBetHint.png", 1);
        this._imgFlower.setUnifySizeEnabled(false);
        this._imgFlower.ignoreContentAdaptWithSize(false);
        this._imgFlower.setContentSize(cc.size(225, 225));
        this._imgFlower.setTouchEnabled(false);

        ///// # _txtLetBet
        this._txtLetBet = new ck.Text();
        this._txtLetBet.setName("_txtLetBet");
        this._nodeHint.addChild(this._txtLetBet);
        this._txtLetBet.setCascadeOpacityEnabled(true);
        this._txtLetBet.setCascadeColorEnabled(true);
        this._txtLetBet.setAnchorPoint(cc.p(0.5, 0.5));
        let _txtLetBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLetBet);
        _txtLetBetLayoutComponent.setPositionPercentXEnabled(true);
        _txtLetBetLayoutComponent.setPositionPercentX(0);
        _txtLetBetLayoutComponent.setPositionPercentYEnabled(true);
        _txtLetBetLayoutComponent.setPositionPercentY(0);
        this._txtLetBet.setTouchEnabled(false);
        this._txtLetBet.ignoreContentAdaptWithSize(true);
        this._txtLetBet.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLetBet.setDefaultFontSize(45);
        this._txtLetBet.setString(gm.localize.getText("TXT_LETS_BET"));
        this._txtLetBet.setTextHorizontalAlignment(1);
        this._txtLetBet.setTextVerticalAlignment(0);

        ///// # _imgGoldBetBg
        this._imgGoldBetBg = new ccui.ImageView();
        this._imgGoldBetBg.setName("_imgGoldBetBg");
        this.addChild(this._imgGoldBetBg);
        this._imgGoldBetBg.setCascadeOpacityEnabled(true);
        this._imgGoldBetBg.setCascadeColorEnabled(true);
        this._imgGoldBetBg.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGoldBetBg, 0.503, 0.7414);
        let _imgGoldBetBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGoldBetBg);
        _imgGoldBetBgLayoutComponent.setPositionPercentXEnabled(true);
        _imgGoldBetBgLayoutComponent.setPositionPercentX(0.503);
        _imgGoldBetBgLayoutComponent.setPositionPercentYEnabled(true);
        _imgGoldBetBgLayoutComponent.setPositionPercentY(0.7414);
        this._imgGoldBetBg.loadTexture("basics/popup/HeaderYellow.png", 1);
        this._imgGoldBetBg.setUnifySizeEnabled(false);
        this._imgGoldBetBg.ignoreContentAdaptWithSize(false);
        this._imgGoldBetBg.setContentSize(cc.size(346, 84));
        this._imgGoldBetBg.setTouchEnabled(false);

        ///// # _layoutCards
        this._layoutCards = new ccui.Layout();
        this._layoutCards.setName("_layoutCards");
        this.addChild(this._layoutCards);
        this._layoutCards.setCascadeOpacityEnabled(true);
        this._layoutCards.setCascadeColorEnabled(true);
        this._layoutCards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCards, 0.5, 0.5009);
        let _layoutCardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCards);
        _layoutCardsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCardsLayoutComponent.setPositionPercentX(0.5);
        _layoutCardsLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCardsLayoutComponent.setPositionPercentY(0.5009);
        _layoutCardsLayoutComponent.setPercentWidthEnabled(true);
        _layoutCardsLayoutComponent.setPercentWidth(1);
        _layoutCardsLayoutComponent.setPercentHeightEnabled(true);
        _layoutCardsLayoutComponent.setPercentHeight(1);
        this._layoutCards.setTouchEnabled(false);
        this._layoutCards.setUnifySizeEnabled(false);
        this._layoutCards.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutCards, 1, 1);

        ///// # _nodeCardPos
        this._nodeCardPos = new cc.Node();
        this._nodeCardPos.setName("_nodeCardPos");
        this._layoutCards.addChild(this._nodeCardPos);
        this._nodeCardPos.setCascadeOpacityEnabled(true);
        this._nodeCardPos.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeCardPos, 0.5, 0.37);
        let _nodeCardPosLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCardPos);
        _nodeCardPosLayoutComponent.setPositionPercentXEnabled(true);
        _nodeCardPosLayoutComponent.setPositionPercentX(0.5);
        _nodeCardPosLayoutComponent.setPositionPercentYEnabled(true);
        _nodeCardPosLayoutComponent.setPositionPercentY(0.37);

        ///// # _layoutGoldBet
        this._layoutGoldBet = new ccui.Layout();
        this._layoutGoldBet.setName("_layoutGoldBet");
        this.addChild(this._layoutGoldBet);
        this._layoutGoldBet.setCascadeOpacityEnabled(true);
        this._layoutGoldBet.setCascadeColorEnabled(true);
        this._layoutGoldBet.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutGoldBet, 0.5, 0.5);
        let _layoutGoldBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGoldBet);
        _layoutGoldBetLayoutComponent.setPositionPercentXEnabled(true);
        _layoutGoldBetLayoutComponent.setPositionPercentX(0.5);
        _layoutGoldBetLayoutComponent.setPositionPercentYEnabled(true);
        _layoutGoldBetLayoutComponent.setPositionPercentY(0.5);
        _layoutGoldBetLayoutComponent.setPercentWidthEnabled(true);
        _layoutGoldBetLayoutComponent.setPercentWidth(1);
        _layoutGoldBetLayoutComponent.setPercentHeightEnabled(true);
        _layoutGoldBetLayoutComponent.setPercentHeight(1);
        this._layoutGoldBet.setTouchEnabled(false);
        this._layoutGoldBet.setUnifySizeEnabled(false);
        this._layoutGoldBet.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutGoldBet, 1, 1);

        ///// # _layoutHUD
        this._layoutHUD = new ccui.Layout();
        this._layoutHUD.setName("_layoutHUD");
        this.addChild(this._layoutHUD);
        this._layoutHUD.setCascadeOpacityEnabled(true);
        this._layoutHUD.setCascadeColorEnabled(true);
        this._layoutHUD.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutHUD, 0.5, 0.01);
        let _layoutHUDLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHUD);
        _layoutHUDLayoutComponent.setPositionPercentXEnabled(true);
        _layoutHUDLayoutComponent.setPositionPercentX(0.5);
        _layoutHUDLayoutComponent.setPositionPercentYEnabled(true);
        _layoutHUDLayoutComponent.setPositionPercentY(0.01);
        this._layoutHUD.setTouchEnabled(false);
        this._layoutHUD.setUnifySizeEnabled(false);
        this._layoutHUD.ignoreContentAdaptWithSize(false);
        this._layoutHUD.setContentSize(cc.size(438, 171));

        ///// # _imgHUDBg
        this._imgHUDBg = new ccui.ImageView();
        this._imgHUDBg.setName("_imgHUDBg");
        this._layoutHUD.addChild(this._imgHUDBg);
        this._imgHUDBg.setCascadeOpacityEnabled(true);
        this._imgHUDBg.setCascadeColorEnabled(true);
        this._imgHUDBg.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgHUDBg, 0.5, 0.0084);
        let _imgHUDBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHUDBg);
        _imgHUDBgLayoutComponent.setPositionPercentXEnabled(true);
        _imgHUDBgLayoutComponent.setPositionPercentX(0.5);
        _imgHUDBgLayoutComponent.setPositionPercentYEnabled(true);
        _imgHUDBgLayoutComponent.setPositionPercentY(0.0084);
        this._imgHUDBg.loadTexture("containers/UserContainerBackground.png", 1);
        this._imgHUDBg.setUnifySizeEnabled(false);
        this._imgHUDBg.ignoreContentAdaptWithSize(false);
        this._imgHUDBg.setScale9Enabled(true);
        this._imgHUDBg.setCapInsets(cc.rect(54, 16, 330, 139));
        this._imgHUDBg.setContentSize(cc.size(438, 187));
        this._imgHUDBg.setTouchEnabled(false);

        ///// # _imgChooseTicket
        this._imgChooseTicket = new ccui.ImageView();
        this._imgChooseTicket.setName("_imgChooseTicket");
        this._layoutHUD.addChild(this._imgChooseTicket);
        this._imgChooseTicket.setCascadeOpacityEnabled(true);
        this._imgChooseTicket.setCascadeColorEnabled(true);
        this._imgChooseTicket.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgChooseTicket, 0.6255, 0.6451);
        this._imgChooseTicket.setScale(0.9, 0.9);
        let _imgChooseTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgChooseTicket);
        this._imgChooseTicket.loadTexture("texts/minigames/ChooseTicket.png", 1);
        this._imgChooseTicket.setTouchEnabled(false);

        ///// # _layoutInfo
        this._layoutInfo = new ccui.Layout();
        this._layoutInfo.setName("_layoutInfo");
        this._layoutHUD.addChild(this._layoutInfo);
        this._layoutInfo.setCascadeOpacityEnabled(true);
        this._layoutInfo.setCascadeColorEnabled(true);
        this._layoutInfo.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutInfo, 0.15, 0);
        let _layoutInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInfo);
        _layoutInfoLayoutComponent.setPositionPercentXEnabled(true);
        _layoutInfoLayoutComponent.setPositionPercentX(0.15);
        _layoutInfoLayoutComponent.setPercentWidthEnabled(true);
        _layoutInfoLayoutComponent.setPercentWidth(0.3);
        _layoutInfoLayoutComponent.setPercentHeightEnabled(true);
        _layoutInfoLayoutComponent.setPercentHeight(1);
        this._layoutInfo.setTouchEnabled(false);
        this._layoutInfo.setUnifySizeEnabled(false);
        this._layoutInfo.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutInfo, 0.3, 1);

        ///// # _layoutAvatar
        this._layoutAvatar = new ccui.Layout();
        this._layoutAvatar.setName("_layoutAvatar");
        this._layoutInfo.addChild(this._layoutAvatar);
        this._layoutAvatar.setCascadeOpacityEnabled(true);
        this._layoutAvatar.setCascadeColorEnabled(true);
        this._layoutAvatar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutAvatar, 0.5, 0.6079);
        let _layoutAvatarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAvatar);
        _layoutAvatarLayoutComponent.setPositionPercentXEnabled(true);
        _layoutAvatarLayoutComponent.setPositionPercentX(0.5);
        _layoutAvatarLayoutComponent.setPositionPercentYEnabled(true);
        _layoutAvatarLayoutComponent.setPositionPercentY(0.6079);
        this._layoutAvatar.setTouchEnabled(true);
        this._layoutAvatar.setUnifySizeEnabled(false);
        this._layoutAvatar.ignoreContentAdaptWithSize(false);
        this._layoutAvatar.setContentSize(cc.size(100, 100));

        ///// # _avatarNode
        this._avatarNode = new Avatar(ck.AvatarType.SQUARE);
        this._avatarNode.setName("_avatarNode");
        this._layoutAvatar.addChild(this._avatarNode);
        this._avatarNode.setCascadeOpacityEnabled(true);
        this._avatarNode.setCascadeColorEnabled(true);
        this._avatarNode.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._avatarNode, 0.5, 0.5);
        let _avatarNodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._avatarNode);
        _avatarNodeLayoutComponent.setPositionPercentXEnabled(true);
        _avatarNodeLayoutComponent.setPositionPercentX(0.5);
        _avatarNodeLayoutComponent.setPositionPercentYEnabled(true);
        _avatarNodeLayoutComponent.setPositionPercentY(0.5);
        this._avatarNode.setWidth(100);

        ///// # _layoutCoin
        this._layoutCoin = new ccui.Layout();
        this._layoutCoin.setName("_layoutCoin");
        this._layoutHUD.addChild(this._layoutCoin);
        this._layoutCoin.setCascadeOpacityEnabled(true);
        this._layoutCoin.setCascadeColorEnabled(true);
        this._layoutCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCoin, 0.57, 0.8766);
        let _layoutCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCoin);
        _layoutCoinLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentX(0.57);
        _layoutCoinLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentY(0.8766);
        this._layoutCoin.setTouchEnabled(true);
        this._layoutCoin.setUnifySizeEnabled(false);
        this._layoutCoin.ignoreContentAdaptWithSize(false);
        this._layoutCoin.setContentSize(cc.size(259.3217, 47));

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
        _imgBackgroundCoinLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundCoinLayoutComponent.setPercentWidth(0.9036);
        this._imgBackgroundCoin.loadTexture("home/CurrencyBox.png", 1);
        this._imgBackgroundCoin.setUnifySizeEnabled(false);
        this._imgBackgroundCoin.ignoreContentAdaptWithSize(false);
        this._imgBackgroundCoin.setScale9Enabled(true);
        this._imgBackgroundCoin.setCapInsets(cc.rect(53, 8, 55, 9));
        ck.UIUtils.setWidthPercent(this._imgBackgroundCoin, 0.9036);
        this._imgBackgroundCoin.setContentSize(cc.size(this._imgBackgroundCoin.width, 39.4751));
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
        this._txtCoin.setContentSize(cc.size(168, 32));
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

        ///// # _layoutBetButton
        this._layoutBetButton = new ccui.Layout();
        this._layoutBetButton.setName("_layoutBetButton");
        this._layoutHUD.addChild(this._layoutBetButton);
        this._layoutBetButton.setCascadeOpacityEnabled(true);
        this._layoutBetButton.setCascadeColorEnabled(true);
        this._layoutBetButton.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBetButton, 0.63, 0.4063);
        let _layoutBetButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBetButton);
        _layoutBetButtonLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBetButtonLayoutComponent.setPositionPercentX(0.63);
        _layoutBetButtonLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBetButtonLayoutComponent.setPositionPercentY(0.4063);
        this._layoutBetButton.setTouchEnabled(false);
        this._layoutBetButton.setUnifySizeEnabled(false);
        this._layoutBetButton.ignoreContentAdaptWithSize(false);
        this._layoutBetButton.setContentSize(cc.size(275, 50));

        ///// # _layoutButtonBet00
        this._layoutButtonBet00 = new ccui.Layout();
        this._layoutButtonBet00.setName("_layoutButtonBet00");
        this._layoutBetButton.addChild(this._layoutButtonBet00);
        this._layoutButtonBet00.setCascadeOpacityEnabled(true);
        this._layoutButtonBet00.setCascadeColorEnabled(true);
        this._layoutButtonBet00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutButtonBet00, 0.15, 0.5);
        let _layoutButtonBet00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutButtonBet00);
        _layoutButtonBet00LayoutComponent.setPositionPercentXEnabled(true);
        _layoutButtonBet00LayoutComponent.setPositionPercentX(0.15);
        _layoutButtonBet00LayoutComponent.setPositionPercentYEnabled(true);
        _layoutButtonBet00LayoutComponent.setPositionPercentY(0.5);
        this._layoutButtonBet00.setTouchEnabled(true);
        this._layoutButtonBet00.setUnifySizeEnabled(false);
        this._layoutButtonBet00.ignoreContentAdaptWithSize(false);
        this._layoutButtonBet00.setContentSize(cc.size(105, 50));

        ///// # _imgButtonBet00
        this._imgButtonBet00 = new ccui.ImageView();
        this._imgButtonBet00.setName("_imgButtonBet00");
        this._layoutButtonBet00.addChild(this._imgButtonBet00);
        this._imgButtonBet00.setCascadeOpacityEnabled(true);
        this._imgButtonBet00.setCascadeColorEnabled(true);
        this._imgButtonBet00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonBet00, 0.5, 0.5);
        let _imgButtonBet00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonBet00);
        _imgButtonBet00LayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonBet00LayoutComponent.setPositionPercentX(0.5);
        _imgButtonBet00LayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonBet00LayoutComponent.setPositionPercentY(0.5);
        _imgButtonBet00LayoutComponent.setPercentWidthEnabled(true);
        _imgButtonBet00LayoutComponent.setPercentWidth(1);
        _imgButtonBet00LayoutComponent.setPercentHeightEnabled(true);
        _imgButtonBet00LayoutComponent.setPercentHeight(1);
        this._imgButtonBet00.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgButtonBet00.setUnifySizeEnabled(false);
        this._imgButtonBet00.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonBet00, 1, 1);
        this._imgButtonBet00.setTouchEnabled(false);

        ///// # _txtButtonBet00
        this._txtButtonBet00 = new ck.Text();
        this._txtButtonBet00.setName("_txtButtonBet00");
        this._layoutButtonBet00.addChild(this._txtButtonBet00);
        this._txtButtonBet00.setCascadeOpacityEnabled(true);
        this._txtButtonBet00.setCascadeColorEnabled(true);
        this._txtButtonBet00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonBet00, 0.3783, 0.53);
        this._txtButtonBet00.setTextColor(cc.color(86, 47, 31, 255));
        let _txtButtonBet00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonBet00);
        _txtButtonBet00LayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonBet00LayoutComponent.setPositionPercentX(0.3783);
        _txtButtonBet00LayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonBet00LayoutComponent.setPositionPercentY(0.53);
        this._txtButtonBet00.setTouchEnabled(false);
        this._txtButtonBet00.setUnifySizeEnabled(false);
        this._txtButtonBet00.ignoreContentAdaptWithSize(false);
        this._txtButtonBet00.setContentSize(cc.size(73, 38));
        this._txtButtonBet00.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtButtonBet00.setDefaultFontSize(30);
        this._txtButtonBet00.setTextHorizontalAlignment(1);
        this._txtButtonBet00.setTextVerticalAlignment(1);
        this._txtButtonBet00.enableShadow(cc.color(110, 110, 110, 255), cc.size(0, -1), 0);
        this._txtButtonBet00.autoFitSingleLine();

        ///// # _imgIconBet00
        this._imgIconBet00 = new ccui.ImageView();
        this._imgIconBet00.setName("_imgIconBet00");
        this._layoutButtonBet00.addChild(this._imgIconBet00);
        this._imgIconBet00.setCascadeOpacityEnabled(true);
        this._imgIconBet00.setCascadeColorEnabled(true);
        this._imgIconBet00.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconBet00, 0.675, 0.53);
        let _imgIconBet00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconBet00);
        _imgIconBet00LayoutComponent.setPositionPercentXEnabled(true);
        _imgIconBet00LayoutComponent.setPositionPercentX(0.675);
        _imgIconBet00LayoutComponent.setPositionPercentYEnabled(true);
        _imgIconBet00LayoutComponent.setPositionPercentY(0.53);
        this._imgIconBet00.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIconBet00.setUnifySizeEnabled(false);
        this._imgIconBet00.ignoreContentAdaptWithSize(false);
        this._imgIconBet00.setContentSize(cc.size(36, 36));
        this._imgIconBet00.setTouchEnabled(false);

        ///// # _layoutButtonBet01
        this._layoutButtonBet01 = new ccui.Layout();
        this._layoutButtonBet01.setName("_layoutButtonBet01");
        this._layoutBetButton.addChild(this._layoutButtonBet01);
        this._layoutButtonBet01.setCascadeOpacityEnabled(true);
        this._layoutButtonBet01.setCascadeColorEnabled(true);
        this._layoutButtonBet01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutButtonBet01, 0.5, 0.5);
        let _layoutButtonBet01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutButtonBet01);
        _layoutButtonBet01LayoutComponent.setPositionPercentXEnabled(true);
        _layoutButtonBet01LayoutComponent.setPositionPercentX(0.5);
        _layoutButtonBet01LayoutComponent.setPositionPercentYEnabled(true);
        _layoutButtonBet01LayoutComponent.setPositionPercentY(0.5);
        this._layoutButtonBet01.setTouchEnabled(true);
        this._layoutButtonBet01.setUnifySizeEnabled(false);
        this._layoutButtonBet01.ignoreContentAdaptWithSize(false);
        this._layoutButtonBet01.setContentSize(cc.size(105, 50));

        ///// # _imgButtonBet01
        this._imgButtonBet01 = new ccui.ImageView();
        this._imgButtonBet01.setName("_imgButtonBet01");
        this._layoutButtonBet01.addChild(this._imgButtonBet01);
        this._imgButtonBet01.setCascadeOpacityEnabled(true);
        this._imgButtonBet01.setCascadeColorEnabled(true);
        this._imgButtonBet01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonBet01, 0.5, 0.5);
        let _imgButtonBet01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonBet01);
        _imgButtonBet01LayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonBet01LayoutComponent.setPositionPercentX(0.5);
        _imgButtonBet01LayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonBet01LayoutComponent.setPositionPercentY(0.5);
        _imgButtonBet01LayoutComponent.setPercentWidthEnabled(true);
        _imgButtonBet01LayoutComponent.setPercentWidth(1);
        _imgButtonBet01LayoutComponent.setPercentHeightEnabled(true);
        _imgButtonBet01LayoutComponent.setPercentHeight(1);
        this._imgButtonBet01.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgButtonBet01.setUnifySizeEnabled(false);
        this._imgButtonBet01.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonBet01, 1, 1);
        this._imgButtonBet01.setTouchEnabled(false);

        ///// # _txtButtonBet01
        this._txtButtonBet01 = new ck.Text();
        this._txtButtonBet01.setName("_txtButtonBet01");
        this._layoutButtonBet01.addChild(this._txtButtonBet01);
        this._txtButtonBet01.setCascadeOpacityEnabled(true);
        this._txtButtonBet01.setCascadeColorEnabled(true);
        this._txtButtonBet01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonBet01, 0.3783, 0.53);
        this._txtButtonBet01.setTextColor(cc.color(86, 47, 31, 255));
        let _txtButtonBet01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonBet01);
        _txtButtonBet01LayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonBet01LayoutComponent.setPositionPercentX(0.3783);
        _txtButtonBet01LayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonBet01LayoutComponent.setPositionPercentY(0.53);
        this._txtButtonBet01.setTouchEnabled(false);
        this._txtButtonBet01.setUnifySizeEnabled(false);
        this._txtButtonBet01.ignoreContentAdaptWithSize(false);
        this._txtButtonBet01.setContentSize(cc.size(73, 38));
        this._txtButtonBet01.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtButtonBet01.setDefaultFontSize(30);
        this._txtButtonBet01.setTextHorizontalAlignment(1);
        this._txtButtonBet01.setTextVerticalAlignment(1);
        this._txtButtonBet01.enableShadow(cc.color(110, 110, 110, 255), cc.size(0, -1), 0);
        this._txtButtonBet01.autoFitSingleLine();

        ///// # _imgIconBet01
        this._imgIconBet01 = new ccui.ImageView();
        this._imgIconBet01.setName("_imgIconBet01");
        this._layoutButtonBet01.addChild(this._imgIconBet01);
        this._imgIconBet01.setCascadeOpacityEnabled(true);
        this._imgIconBet01.setCascadeColorEnabled(true);
        this._imgIconBet01.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconBet01, 0.675, 0.53);
        let _imgIconBet01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconBet01);
        _imgIconBet01LayoutComponent.setPositionPercentXEnabled(true);
        _imgIconBet01LayoutComponent.setPositionPercentX(0.675);
        _imgIconBet01LayoutComponent.setPositionPercentYEnabled(true);
        _imgIconBet01LayoutComponent.setPositionPercentY(0.53);
        this._imgIconBet01.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIconBet01.setUnifySizeEnabled(false);
        this._imgIconBet01.ignoreContentAdaptWithSize(false);
        this._imgIconBet01.setContentSize(cc.size(36, 36));
        this._imgIconBet01.setTouchEnabled(false);

        ///// # _layoutButtonBet02
        this._layoutButtonBet02 = new ccui.Layout();
        this._layoutButtonBet02.setName("_layoutButtonBet02");
        this._layoutBetButton.addChild(this._layoutButtonBet02);
        this._layoutButtonBet02.setCascadeOpacityEnabled(true);
        this._layoutButtonBet02.setCascadeColorEnabled(true);
        this._layoutButtonBet02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutButtonBet02, 0.85, 0.5);
        let _layoutButtonBet02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutButtonBet02);
        _layoutButtonBet02LayoutComponent.setPositionPercentXEnabled(true);
        _layoutButtonBet02LayoutComponent.setPositionPercentX(0.85);
        _layoutButtonBet02LayoutComponent.setPositionPercentYEnabled(true);
        _layoutButtonBet02LayoutComponent.setPositionPercentY(0.5);
        this._layoutButtonBet02.setTouchEnabled(true);
        this._layoutButtonBet02.setUnifySizeEnabled(false);
        this._layoutButtonBet02.ignoreContentAdaptWithSize(false);
        this._layoutButtonBet02.setContentSize(cc.size(105, 50));

        ///// # _imgButtonBet02
        this._imgButtonBet02 = new ccui.ImageView();
        this._imgButtonBet02.setName("_imgButtonBet02");
        this._layoutButtonBet02.addChild(this._imgButtonBet02);
        this._imgButtonBet02.setCascadeOpacityEnabled(true);
        this._imgButtonBet02.setCascadeColorEnabled(true);
        this._imgButtonBet02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonBet02, 0.5, 0.5);
        let _imgButtonBet02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonBet02);
        _imgButtonBet02LayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonBet02LayoutComponent.setPositionPercentX(0.5);
        _imgButtonBet02LayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonBet02LayoutComponent.setPositionPercentY(0.5);
        _imgButtonBet02LayoutComponent.setPercentWidthEnabled(true);
        _imgButtonBet02LayoutComponent.setPercentWidth(1);
        _imgButtonBet02LayoutComponent.setPercentHeightEnabled(true);
        _imgButtonBet02LayoutComponent.setPercentHeight(1);
        this._imgButtonBet02.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgButtonBet02.setUnifySizeEnabled(false);
        this._imgButtonBet02.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonBet02, 1, 1);
        this._imgButtonBet02.setTouchEnabled(false);

        ///// # _txtButtonBet02
        this._txtButtonBet02 = new ck.Text();
        this._txtButtonBet02.setName("_txtButtonBet02");
        this._layoutButtonBet02.addChild(this._txtButtonBet02);
        this._txtButtonBet02.setCascadeOpacityEnabled(true);
        this._txtButtonBet02.setCascadeColorEnabled(true);
        this._txtButtonBet02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonBet02, 0.3783, 0.53);
        this._txtButtonBet02.setTextColor(cc.color(86, 47, 31, 255));
        let _txtButtonBet02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonBet02);
        _txtButtonBet02LayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonBet02LayoutComponent.setPositionPercentX(0.3783);
        _txtButtonBet02LayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonBet02LayoutComponent.setPositionPercentY(0.53);
        this._txtButtonBet02.setTouchEnabled(false);
        this._txtButtonBet02.setUnifySizeEnabled(false);
        this._txtButtonBet02.ignoreContentAdaptWithSize(false);
        this._txtButtonBet02.setContentSize(cc.size(73, 38));
        this._txtButtonBet02.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtButtonBet02.setDefaultFontSize(30);
        this._txtButtonBet02.setTextHorizontalAlignment(1);
        this._txtButtonBet02.setTextVerticalAlignment(1);
        this._txtButtonBet02.enableShadow(cc.color(110, 110, 110, 255), cc.size(0, -1), 0);
        this._txtButtonBet02.autoFitSingleLine();

        ///// # _imgIconBet02
        this._imgIconBet02 = new ccui.ImageView();
        this._imgIconBet02.setName("_imgIconBet02");
        this._layoutButtonBet02.addChild(this._imgIconBet02);
        this._imgIconBet02.setCascadeOpacityEnabled(true);
        this._imgIconBet02.setCascadeColorEnabled(true);
        this._imgIconBet02.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconBet02, 0.675, 0.53);
        let _imgIconBet02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconBet02);
        _imgIconBet02LayoutComponent.setPositionPercentXEnabled(true);
        _imgIconBet02LayoutComponent.setPositionPercentX(0.675);
        _imgIconBet02LayoutComponent.setPositionPercentYEnabled(true);
        _imgIconBet02LayoutComponent.setPositionPercentY(0.53);
        this._imgIconBet02.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIconBet02.setUnifySizeEnabled(false);
        this._imgIconBet02.ignoreContentAdaptWithSize(false);
        this._imgIconBet02.setContentSize(cc.size(36, 36));
        this._imgIconBet02.setTouchEnabled(false);

        ///// # _btnReset
        this._btnReset = new ccui.Button();
        this._btnReset.setName("_btnReset");
        this._layoutHUD.addChild(this._btnReset);
        this._btnReset.setCascadeOpacityEnabled(true);
        this._btnReset.setCascadeColorEnabled(true);
        this._btnReset.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnReset, 0.9274, 0.8669);
        let _btnResetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnReset);
        _btnResetLayoutComponent.setPositionPercentXEnabled(true);
        _btnResetLayoutComponent.setPositionPercentX(0.9274);
        _btnResetLayoutComponent.setPositionPercentYEnabled(true);
        _btnResetLayoutComponent.setPositionPercentY(0.8669);
        this._btnReset.loadTextureDisabled("ui/Refresh.png", 1);
        this._btnReset.loadTexturePressed("ui/Refresh.png", 1);
        this._btnReset.loadTextureNormal("ui/Refresh.png", 1);
        this._btnReset.setUnifySizeEnabled(false);
        this._btnReset.ignoreContentAdaptWithSize(false);
        this._btnReset.setScale9Enabled(true);
        this._btnReset.setCapInsets(cc.rect(15, 11, 3, 11));
        this._btnReset.setContentSize(cc.size(33, 33));
        this._btnReset.setTouchEnabled(true);

        ///// # _txtCountdownTime
        this._txtCountdownTime = new ck.Text();
        this._txtCountdownTime.setName("_txtCountdownTime");
        this.addChild(this._txtCountdownTime);
        this._txtCountdownTime.setCascadeOpacityEnabled(true);
        this._txtCountdownTime.setCascadeColorEnabled(true);
        this._txtCountdownTime.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCountdownTime, 0.6702, 0.24);
        let _txtCountdownTimeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCountdownTime);
        _txtCountdownTimeLayoutComponent.setPositionPercentXEnabled(true);
        _txtCountdownTimeLayoutComponent.setPositionPercentX(0.6702);
        _txtCountdownTimeLayoutComponent.setPositionPercentYEnabled(true);
        _txtCountdownTimeLayoutComponent.setPositionPercentY(0.24);
        this._txtCountdownTime.setTouchEnabled(false);
        this._txtCountdownTime.ignoreContentAdaptWithSize(true);
        this._txtCountdownTime.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCountdownTime.setDefaultFontSize(40);
        this._txtCountdownTime.setTextHorizontalAlignment(1);
        this._txtCountdownTime.setTextVerticalAlignment(0);
        this._txtCountdownTime.enableOutline(cc.color(0, 0, 0, 255), 1);
        this._txtCountdownTime.enableShadow(cc.color(0, 0, 0, 255), cc.size(0, -2), 0);

        ///// # _btnDeal
        this._btnDeal = new ccui.Button();
        this._btnDeal.setName("_btnDeal");
        this.addChild(this._btnDeal);
        this._btnDeal.setCascadeOpacityEnabled(true);
        this._btnDeal.setCascadeColorEnabled(true);
        this._btnDeal.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._btnDeal, 0.4984, 0.2);
        let _btnDealLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnDeal);
        _btnDealLayoutComponent.setPositionPercentXEnabled(true);
        _btnDealLayoutComponent.setPositionPercentX(0.4984);
        _btnDealLayoutComponent.setPositionPercentYEnabled(true);
        _btnDealLayoutComponent.setPositionPercentY(0.2);
        this._btnDeal.loadTextureDisabled("buttons/rectangles/Yellow.png", 1);
        this._btnDeal.loadTexturePressed("buttons/rectangles/Yellow.png", 1);
        this._btnDeal.loadTextureNormal("buttons/rectangles/Yellow.png", 1);
        this._btnDeal.setUnifySizeEnabled(false);
        this._btnDeal.ignoreContentAdaptWithSize(false);
        this._btnDeal.setScale9Enabled(true);
        this._btnDeal.setCapInsets(cc.rect(15, 11, 176, 59));
        this._btnDeal.setContentSize(cc.size(170, 81));
        this._btnDeal.setTouchEnabled(true);

        ///// # _txtDeal
        this._txtDeal = new ck.Text();
        this._txtDeal.setName("_txtDeal");
        this._btnDeal.addChild(this._txtDeal);
        this._txtDeal.setCascadeOpacityEnabled(true);
        this._txtDeal.setCascadeColorEnabled(true);
        this._txtDeal.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDeal, 0.5, 0.6);
        let _txtDealLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDeal);
        _txtDealLayoutComponent.setPositionPercentXEnabled(true);
        _txtDealLayoutComponent.setPositionPercentX(0.5);
        _txtDealLayoutComponent.setPositionPercentYEnabled(true);
        _txtDealLayoutComponent.setPositionPercentY(0.6);
        this._txtDeal.setTouchEnabled(false);
        this._txtDeal.ignoreContentAdaptWithSize(true);
        this._txtDeal.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDeal.setDefaultFontSize(35);
        this._txtDeal.setString(gm.localize.getText("TXT_DEAL"));
        this._txtDeal.setTextHorizontalAlignment(0);
        this._txtDeal.setTextVerticalAlignment(0);
        this._txtDeal.enableOutline(cc.color(194, 80, 62, 255), 1);
        this._txtDeal.enableShadow(cc.color(194, 80, 62, 255), cc.size(0, -3), 0);

        ///// # _btnDraw
        this._btnDraw = new ccui.Button();
        this._btnDraw.setName("_btnDraw");
        this.addChild(this._btnDraw);
        this._btnDraw.setCascadeOpacityEnabled(true);
        this._btnDraw.setCascadeColorEnabled(true);
        this._btnDraw.setAnchorPoint(cc.p(0.5002, 0));
        ck.UIUtils.setPositionPercent(this._btnDraw, 0.4984, 0.2);
        let _btnDrawLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnDraw);
        _btnDrawLayoutComponent.setPositionPercentXEnabled(true);
        _btnDrawLayoutComponent.setPositionPercentX(0.4984);
        _btnDrawLayoutComponent.setPositionPercentYEnabled(true);
        _btnDrawLayoutComponent.setPositionPercentY(0.2);
        this._btnDraw.loadTextureDisabled("buttons/rectangles/Yellow.png", 1);
        this._btnDraw.loadTexturePressed("buttons/rectangles/Yellow.png", 1);
        this._btnDraw.loadTextureNormal("buttons/rectangles/Yellow.png", 1);
        this._btnDraw.setUnifySizeEnabled(false);
        this._btnDraw.ignoreContentAdaptWithSize(false);
        this._btnDraw.setScale9Enabled(true);
        this._btnDraw.setCapInsets(cc.rect(15, 11, 176, 59));
        this._btnDraw.setContentSize(cc.size(170, 81));
        this._btnDraw.setTouchEnabled(true);

        ///// # _txtDraw
        this._txtDraw = new ck.Text();
        this._txtDraw.setName("_txtDraw");
        this._btnDraw.addChild(this._txtDraw);
        this._txtDraw.setCascadeOpacityEnabled(true);
        this._txtDraw.setCascadeColorEnabled(true);
        this._txtDraw.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDraw, 0.5, 0.6);
        let _txtDrawLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDraw);
        _txtDrawLayoutComponent.setPositionPercentXEnabled(true);
        _txtDrawLayoutComponent.setPositionPercentX(0.5);
        _txtDrawLayoutComponent.setPositionPercentYEnabled(true);
        _txtDrawLayoutComponent.setPositionPercentY(0.6);
        this._txtDraw.setTouchEnabled(false);
        this._txtDraw.ignoreContentAdaptWithSize(true);
        this._txtDraw.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDraw.setDefaultFontSize(35);
        this._txtDraw.setString(gm.localize.getText("TXT_DRAW"));
        this._txtDraw.setTextHorizontalAlignment(0);
        this._txtDraw.setTextVerticalAlignment(0);
        this._txtDraw.enableOutline(cc.color(194, 80, 62, 255), 1);
        this._txtDraw.enableShadow(cc.color(194, 80, 62, 255), cc.size(0, -3), 0);

        ///// # _gridOfferIcons
        this._gridOfferIcons = new ck.OfferIconGrid();
        this._gridOfferIcons.setName("_gridOfferIcons");
        this.addChild(this._gridOfferIcons);
        this._gridOfferIcons.setCascadeOpacityEnabled(true);
        this._gridOfferIcons.setCascadeColorEnabled(true);
        this._gridOfferIcons.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._gridOfferIcons, 0.0792, 0.9188);
        let _gridOfferIconsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridOfferIcons);
        _gridOfferIconsLayoutComponent.setPositionPercentXEnabled(true);
        _gridOfferIconsLayoutComponent.setPositionPercentX(0.0792);
        _gridOfferIconsLayoutComponent.setPositionPercentYEnabled(true);
        _gridOfferIconsLayoutComponent.setPositionPercentY(0.9188);

        ///// # _btnCheat
        this._btnCheat = new ccui.Button();
        this._btnCheat.setName("_btnCheat");
        this.addChild(this._btnCheat);
        this._btnCheat.setCascadeOpacityEnabled(true);
        this._btnCheat.setCascadeColorEnabled(true);
        this._btnCheat.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnCheat, 0.232, 0.9518);
        let _btnCheatLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnCheat);
        _btnCheatLayoutComponent.setPositionPercentXEnabled(true);
        _btnCheatLayoutComponent.setPositionPercentX(0.232);
        _btnCheatLayoutComponent.setPositionPercentYEnabled(true);
        _btnCheatLayoutComponent.setPositionPercentY(0.9518);
        this._btnCheat.loadTextureDisabled("buttons/rectangles/Gray.png", 1);
        this._btnCheat.loadTexturePressed("buttons/rectangles/Gray.png", 1);
        this._btnCheat.loadTextureNormal("buttons/rectangles/Gray.png", 1);
        this._btnCheat.setUnifySizeEnabled(false);
        this._btnCheat.ignoreContentAdaptWithSize(false);
        this._btnCheat.setScale9Enabled(true);
        this._btnCheat.setCapInsets(cc.rect(15, 11, 176, 59));
        this._btnCheat.setContentSize(cc.size(122.7341, 53.8481));
        this._btnCheat.setTouchEnabled(true);

        ///// # _txtCheat
        this._txtCheat = new ck.Text();
        this._txtCheat.setName("_txtCheat");
        this._btnCheat.addChild(this._txtCheat);
        this._txtCheat.setCascadeOpacityEnabled(true);
        this._txtCheat.setCascadeColorEnabled(true);
        this._txtCheat.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCheat, 0.4649, 0.5604);
        let _txtCheatLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCheat);
        this._txtCheat.setTouchEnabled(false);
        this._txtCheat.ignoreContentAdaptWithSize(true);
        this._txtCheat.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCheat.setDefaultFontSize(30);
        this._txtCheat.setString("Cheat");
        this._txtCheat.setTextHorizontalAlignment(0);
        this._txtCheat.setTextVerticalAlignment(0);
        this._txtCheat.enableOutline(cc.color(0, 0, 0, 255), 1);
        this._txtCheat.enableShadow(cc.color(0, 0, 0, 255), cc.size(1, -2), 0);

        ///// # _layoutExit
        this._layoutExit = new ccui.Layout();
        this._layoutExit.setName("_layoutExit");
        this.addChild(this._layoutExit);
        this._layoutExit.setCascadeOpacityEnabled(true);
        this._layoutExit.setCascadeColorEnabled(true);
        this._layoutExit.setAnchorPoint(cc.p(0.4935, 0));
        ck.UIUtils.setPositionPercent(this._layoutExit, 0.0594, 0.022);
        let _layoutExitLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutExit);
        _layoutExitLayoutComponent.setPositionPercentXEnabled(true);
        _layoutExitLayoutComponent.setPositionPercentX(0.0594);
        this._layoutExit.setTouchEnabled(true);
        this._layoutExit.setUnifySizeEnabled(false);
        this._layoutExit.ignoreContentAdaptWithSize(false);
        this._layoutExit.setContentSize(cc.size(60, 60));

        ///// # _imgExitBgr
        this._imgExitBgr = new ccui.ImageView();
        this._imgExitBgr.setName("_imgExitBgr");
        this._layoutExit.addChild(this._imgExitBgr);
        this._imgExitBgr.setCascadeOpacityEnabled(true);
        this._imgExitBgr.setCascadeColorEnabled(true);
        this._imgExitBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgExitBgr, 0.5, 0.5);
        let _imgExitBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExitBgr);
        _imgExitBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgExitBgrLayoutComponent.setPositionPercentX(0.5);
        _imgExitBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgExitBgrLayoutComponent.setPositionPercentY(0.5);
        _imgExitBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgExitBgrLayoutComponent.setPercentWidth(1);
        _imgExitBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgExitBgrLayoutComponent.setPercentHeight(1);
        this._imgExitBgr.loadTexture("buttons/circles/Gray.png", 1);
        this._imgExitBgr.setUnifySizeEnabled(false);
        this._imgExitBgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgExitBgr, 1, 1);
        this._imgExitBgr.setTouchEnabled(false);

        ///// # _imgExitIcon
        this._imgExitIcon = new ccui.ImageView();
        this._imgExitIcon.setName("_imgExitIcon");
        this._layoutExit.addChild(this._imgExitIcon);
        this._imgExitIcon.setCascadeOpacityEnabled(true);
        this._imgExitIcon.setCascadeColorEnabled(true);
        this._imgExitIcon.setAnchorPoint(cc.p(0.58, 0.55));
        ck.UIUtils.setPositionPercent(this._imgExitIcon, 0.5, 0.5);
        this._imgExitIcon.setScale(0.8, 0.8);
        let _imgExitIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExitIcon);
        _imgExitIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgExitIconLayoutComponent.setPositionPercentX(0.5);
        _imgExitIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgExitIconLayoutComponent.setPositionPercentY(0.5);
        this._imgExitIcon.loadTexture("icons/flat/Exit.png", 1);
        this._imgExitIcon.setUnifySizeEnabled(false);
        this._imgExitIcon.ignoreContentAdaptWithSize(false);
        this._imgExitIcon.setContentSize(cc.size(43, 37));
        this._imgExitIcon.setTouchEnabled(false);

        ///// # _expBar
        this._expBar = new progressExp();
        this._expBar.setName("_expBar");
        this.addChild(this._expBar);
        this._expBar.setCascadeOpacityEnabled(true);
        this._expBar.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._expBar, 0.5, 0.0329);
        this._expBar.setScale(0.95, 0.95);
        let _expBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._expBar);
        _expBarLayoutComponent.setPositionPercentXEnabled(true);
        _expBarLayoutComponent.setPositionPercentX(0.5);

        ///// # _nodeTrophyProgress
        this._nodeTrophyProgress = new cc.Node();
        this._nodeTrophyProgress.setName("_nodeTrophyProgress");
        this.addChild(this._nodeTrophyProgress);
        this._nodeTrophyProgress.setCascadeOpacityEnabled(true);
        this._nodeTrophyProgress.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeTrophyProgress, 0.5, 0.24);
        let _nodeTrophyProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeTrophyProgress);
        _nodeTrophyProgressLayoutComponent.setPositionPercentXEnabled(true);
        _nodeTrophyProgressLayoutComponent.setPositionPercentX(0.5);
        _nodeTrophyProgressLayoutComponent.setPositionPercentYEnabled(true);
        _nodeTrophyProgressLayoutComponent.setPositionPercentY(0.24);

    },



});

/**
 * Create PokerLayer
 * @returns {_ccs.PokerLayer}
 */
_ccs.PokerLayer.create = function () {
    return new _ccs.PokerLayer();
};
