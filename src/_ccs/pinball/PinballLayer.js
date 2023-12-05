/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PinballLayer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.PinballLayer = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutBackground: null,
    /** @type {ccui.ImageView} */
    _imgBg: null,
    /** @type {ccui.ImageView} */
    _imgFloor1: null,
    /** @type {ccui.ImageView} */
    _imgFloor2: null,
    /** @type {PinballTable} */
    _nodeTable: null,
    /** @type {ccui.Layout} */
    _layoutCenter: null,
    /** @type {ccui.Layout} */
    _layoutTop: null,
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
    /** @type {ccui.Layout} */
    _layoutInventory: null,
    /** @type {ccui.ImageView} */
    _imgInventory: null,
    /** @type {ccui.Layout} */
    _layoutHelp: null,
    /** @type {ccui.ImageView} */
    _imgHelpBgr: null,
    /** @type {ccui.ImageView} */
    _imgHelpIcon: null,
    /** @type {ccui.Layout} */
    _layoutBetButtons: null,
    /** @type {ccui.ImageView} */
    _imgBetBg: null,
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
    /** @type {ccui.Layout} */
    _layoutPriceContainer: null,
    /** @type {ccui.ImageView} */
    _imgPriceBg: null,
    /** @type {ccui.Layout} */
    _layoutPrice: null,
    /** @type {ccui.ImageView} */
    _imgGemCost: null,
    /** @type {ck.Text} */
    _txtCost: null,
    /** @type {ck.Text} */
    _txtSplash: null,
    /** @type {ck.Text} */
    _txtTurn: null,
    /** @type {ccui.Button} */
    _btnPlay: null,
    /** @type {ck.Text} */
    _txtPlayHint: null,
    /** @type {ccui.Layout} */
    _layoutAuto: null,
    /** @type {ccui.Layout} */
    _layoutBtnAuto: null,
    /** @type {ccui.ImageView} */
    _imgBtnAuto: null,
    /** @type {ccui.ImageView} */
    _imgCheckAutoPlay: null,
    /** @type {ccui.ImageView} */
    _imgTxtAutoPlay: null,
    /** @type {ccui.Layout} */
    _layoutTutorial: null,
    /** @type {ccui.Layout} */
    _layoutTutBet: null,
    /** @type {ccui.ImageView} */
    _imgTutBetBg: null,
    /** @type {ck.Text} */
    _txtTutBet: null,
    /** @type {ccui.Layout} */
    _layoutTutSpin: null,
    /** @type {ccui.ImageView} */
    _imgTutSpinBg: null,
    /** @type {ck.Text} */
    _txtTutSpin: null,
    /** @type {ccui.Layout} */
    _layoutExit: null,
    /** @type {ccui.ImageView} */
    _imgExitBgr: null,
    /** @type {ccui.ImageView} */
    _imgExitIcon: null,


    /**
     * _ccs.PinballLayer constructor
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

        ///// # _layoutRoot
        this._layoutRoot = new ccui.Layout();
        this._layoutRoot.setName("_layoutRoot");
        this.addChild(this._layoutRoot);
        this._layoutRoot.setCascadeOpacityEnabled(true);
        this._layoutRoot.setCascadeColorEnabled(true);
        this._layoutRoot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutRoot, 0.5, 0.5);
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        _layoutRootLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRootLayoutComponent.setPositionPercentX(0.5);
        _layoutRootLayoutComponent.setPositionPercentYEnabled(true);
        _layoutRootLayoutComponent.setPositionPercentY(0.5);
        _layoutRootLayoutComponent.setPercentWidthEnabled(true);
        _layoutRootLayoutComponent.setPercentWidth(1);
        _layoutRootLayoutComponent.setPercentHeightEnabled(true);
        _layoutRootLayoutComponent.setPercentHeight(1);
        this._layoutRoot.setTouchEnabled(true);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutRoot, 1, 1);

        ///// # _layoutBackground
        this._layoutBackground = new ccui.Layout();
        this._layoutBackground.setName("_layoutBackground");
        this._layoutRoot.addChild(this._layoutBackground);
        this._layoutBackground.setCascadeOpacityEnabled(true);
        this._layoutBackground.setCascadeColorEnabled(true);
        let _layoutBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBackground);
        _layoutBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentWidth(1);
        _layoutBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentHeight(1);
        this._layoutBackground.setTouchEnabled(false);
        this._layoutBackground.setUnifySizeEnabled(false);
        this._layoutBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBackground, 1, 1);

        ///// # _imgBg
        this._imgBg = new ccui.ImageView();
        this._imgBg.setName("_imgBg");
        this._layoutBackground.addChild(this._imgBg);
        this._imgBg.setCascadeOpacityEnabled(true);
        this._imgBg.setCascadeColorEnabled(true);
        this._imgBg.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBg, 0.5, 0.5005);
        this._imgBg.setColor(cc.color(160, 160, 160, 255));
        if (!PlatformUtils.hasNotch()) {
            let _imgBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBg);
            _imgBgLayoutComponent.setPositionPercentXEnabled(true);
            _imgBgLayoutComponent.setPositionPercentX(0.5);
            _imgBgLayoutComponent.setPositionPercentYEnabled(true);
            _imgBgLayoutComponent.setPositionPercentY(0.5005);
            _imgBgLayoutComponent.setPercentWidthEnabled(true);
            _imgBgLayoutComponent.setPercentWidth(1);
            _imgBgLayoutComponent.setPercentHeightEnabled(true);
            _imgBgLayoutComponent.setPercentHeight(1);
        }
        this._imgBg.loadTexture("pinball/PinballBg.png", 1);
        this._imgBg.setUnifySizeEnabled(false);
        this._imgBg.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBg, 1, 1);
        this._imgBg.setTouchEnabled(false);
        UIUtils.initFullScreenBackground(this._imgBg);

        ///// # _imgFloor1
        this._imgFloor1 = new ccui.ImageView();
        this._imgFloor1.setName("_imgFloor1");
        this._layoutBackground.addChild(this._imgFloor1);
        this._imgFloor1.setCascadeOpacityEnabled(true);
        this._imgFloor1.setCascadeColorEnabled(true);
        this._imgFloor1.setAnchorPoint(cc.p(1, 1));
        ck.UIUtils.setPositionPercent(this._imgFloor1, 1, 1);
        let _imgFloor1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFloor1);
        _imgFloor1LayoutComponent.setPositionPercentXEnabled(true);
        _imgFloor1LayoutComponent.setPositionPercentX(1);
        _imgFloor1LayoutComponent.setPositionPercentYEnabled(true);
        _imgFloor1LayoutComponent.setPositionPercentY(1);
        this._imgFloor1.loadTexture("pinball/PinballFloor1.png", 1);
        this._imgFloor1.setUnifySizeEnabled(false);
        this._imgFloor1.ignoreContentAdaptWithSize(false);
        this._imgFloor1.setContentSize(cc.size(605, 176));
        this._imgFloor1.setTouchEnabled(false);

        ///// # _imgFloor2
        this._imgFloor2 = new ccui.ImageView();
        this._imgFloor2.setName("_imgFloor2");
        this._layoutBackground.addChild(this._imgFloor2);
        this._imgFloor2.setCascadeOpacityEnabled(true);
        this._imgFloor2.setCascadeColorEnabled(true);
        this._imgFloor2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgFloor2, 0.2594, 0.0638);
        let _imgFloor2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFloor2);
        this._imgFloor2.loadTexture("pinball/PinballFloor2.png", 1);
        this._imgFloor2.setUnifySizeEnabled(false);
        this._imgFloor2.ignoreContentAdaptWithSize(false);
        this._imgFloor2.setContentSize(cc.size(332, 145));
        this._imgFloor2.setTouchEnabled(false);

        ///// # _nodeTable
        this._nodeTable = new PinballTable();
        this._nodeTable.setName("_nodeTable");
        this._layoutRoot.addChild(this._nodeTable);
        this._nodeTable.setCascadeOpacityEnabled(true);
        this._nodeTable.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeTable, 0.5, 0.535);
        this._nodeTable.setScale(0.95, 0.95);
        let _nodeTableLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeTable);
        _nodeTableLayoutComponent.setPositionPercentXEnabled(true);
        _nodeTableLayoutComponent.setPositionPercentX(0.5);
        _nodeTableLayoutComponent.setPositionPercentYEnabled(true);
        _nodeTableLayoutComponent.setPositionPercentY(0.535);

        ///// # _layoutCenter
        this._layoutCenter = new ccui.Layout();
        this._layoutCenter.setName("_layoutCenter");
        this._layoutRoot.addChild(this._layoutCenter);
        this._layoutCenter.setCascadeOpacityEnabled(true);
        this._layoutCenter.setCascadeColorEnabled(true);
        this._layoutCenter.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutCenter, 0.5, 0);
        let _layoutCenterLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCenter);
        _layoutCenterLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCenterLayoutComponent.setPositionPercentX(0.5);
        _layoutCenterLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCenterLayoutComponent.setPositionPercentY(0);
        _layoutCenterLayoutComponent.setPercentHeightEnabled(true);
        _layoutCenterLayoutComponent.setPercentHeight(1);
        this._layoutCenter.setTouchEnabled(false);
        this._layoutCenter.setUnifySizeEnabled(false);
        this._layoutCenter.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this._layoutCenter, 1);
        this._layoutCenter.setContentSize(cc.size(640, this._layoutCenter.height));

        ///// # _layoutTop
        this._layoutTop = new ccui.Layout();
        this._layoutTop.setName("_layoutTop");
        this._layoutCenter.addChild(this._layoutTop);
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
        this._layoutTop.setTouchEnabled(true);
        this._layoutTop.setUnifySizeEnabled(false);
        this._layoutTop.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutTop, 1);
        this._layoutTop.setContentSize(cc.size(this._layoutTop.width, 85));

        ///// # _layoutGem
        this._layoutGem = new ccui.Layout();
        this._layoutGem.setName("_layoutGem");
        this._layoutTop.addChild(this._layoutGem);
        this._layoutGem.setCascadeOpacityEnabled(true);
        this._layoutGem.setCascadeColorEnabled(true);
        this._layoutGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutGem, 0.32, 0.5);
        let _layoutGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGem);
        _layoutGemLayoutComponent.setPositionPercentXEnabled(true);
        _layoutGemLayoutComponent.setPositionPercentX(0.32);
        _layoutGemLayoutComponent.setPositionPercentYEnabled(true);
        _layoutGemLayoutComponent.setPositionPercentY(0.5);
        this._layoutGem.setTouchEnabled(true);
        this._layoutGem.setUnifySizeEnabled(false);
        this._layoutGem.ignoreContentAdaptWithSize(false);
        this._layoutGem.setContentSize(cc.size(150, 35));
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
        this._txtGem.setUnifySizeEnabled(false);
        this._txtGem.ignoreContentAdaptWithSize(false);
        this._txtGem.setContentSize(cc.size(110, 23));
        this._txtGem.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGem.setDefaultFontSize(20);
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
        ck.UIUtils.setPositionPercent(this._btnAddGem, 1, 0.4757);
        let _btnAddGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddGem);
        _btnAddGemLayoutComponent.setPositionPercentXEnabled(true);
        _btnAddGemLayoutComponent.setPositionPercentX(1);
        _btnAddGemLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddGemLayoutComponent.setPositionPercentY(0.4757);
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
        ck.UIUtils.setPositionPercent(this._layoutCoin, 0.68, 0.5);
        let _layoutCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCoin);
        _layoutCoinLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentX(0.68);
        _layoutCoinLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentY(0.5);
        this._layoutCoin.setTouchEnabled(true);
        this._layoutCoin.setUnifySizeEnabled(false);
        this._layoutCoin.ignoreContentAdaptWithSize(false);
        this._layoutCoin.setContentSize(cc.size(150, 35));
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
        ck.UIUtils.setPositionPercent(this._txtCoin, 0.8802, 0.5);
        this._txtCoin.setTextColor(cc.color(255, 255, 141, 255));
        let _txtCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCoin);
        _txtCoinLayoutComponent.setPositionPercentXEnabled(true);
        _txtCoinLayoutComponent.setPositionPercentX(0.8802);
        _txtCoinLayoutComponent.setPositionPercentYEnabled(true);
        _txtCoinLayoutComponent.setPositionPercentY(0.5);
        this._txtCoin.setTouchEnabled(false);
        this._txtCoin.setUnifySizeEnabled(false);
        this._txtCoin.ignoreContentAdaptWithSize(false);
        this._txtCoin.setContentSize(cc.size(110, 23));
        this._txtCoin.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCoin.setDefaultFontSize(20);
        this._txtCoin.setTextHorizontalAlignment(2);
        this._txtCoin.setTextVerticalAlignment(1);
        this._txtCoin.autoFitSingleLine();

        ///// # _layoutInventory
        this._layoutInventory = new ccui.Layout();
        this._layoutInventory.setName("_layoutInventory");
        this._layoutTop.addChild(this._layoutInventory);
        this._layoutInventory.setCascadeOpacityEnabled(true);
        this._layoutInventory.setCascadeColorEnabled(true);
        this._layoutInventory.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutInventory, 0.9, 0.5);
        let _layoutInventoryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInventory);
        _layoutInventoryLayoutComponent.setPositionPercentXEnabled(true);
        _layoutInventoryLayoutComponent.setPositionPercentX(0.9);
        _layoutInventoryLayoutComponent.setPositionPercentYEnabled(true);
        _layoutInventoryLayoutComponent.setPositionPercentY(0.5);
        this._layoutInventory.setTouchEnabled(false);
        this._layoutInventory.setUnifySizeEnabled(false);
        this._layoutInventory.ignoreContentAdaptWithSize(false);
        this._layoutInventory.setContentSize(cc.size(50, 50));

        ///// # _imgInventory
        this._imgInventory = new ccui.ImageView();
        this._imgInventory.setName("_imgInventory");
        this._layoutInventory.addChild(this._imgInventory);
        this._imgInventory.setCascadeOpacityEnabled(true);
        this._imgInventory.setCascadeColorEnabled(true);
        this._imgInventory.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgInventory, 0.5, 0.5);
        this._imgInventory.setScale(0.7, 0.7);
        let _imgInventoryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgInventory);
        _imgInventoryLayoutComponent.setPositionPercentXEnabled(true);
        _imgInventoryLayoutComponent.setPositionPercentX(0.5);
        _imgInventoryLayoutComponent.setPositionPercentYEnabled(true);
        _imgInventoryLayoutComponent.setPositionPercentY(0.5);
        this._imgInventory.loadTexture("icons/color/basic/Inventory.png", 1);
        this._imgInventory.setUnifySizeEnabled(false);
        this._imgInventory.ignoreContentAdaptWithSize(false);
        this._imgInventory.setContentSize(cc.size(73, 69));
        this._imgInventory.setTouchEnabled(false);

        ///// # _layoutHelp
        this._layoutHelp = new ccui.Layout();
        this._layoutHelp.setName("_layoutHelp");
        this._layoutTop.addChild(this._layoutHelp);
        this._layoutHelp.setCascadeOpacityEnabled(true);
        this._layoutHelp.setCascadeColorEnabled(true);
        this._layoutHelp.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutHelp, 0.07, 0.5);
        let _layoutHelpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHelp);
        _layoutHelpLayoutComponent.setPositionPercentXEnabled(true);
        _layoutHelpLayoutComponent.setPositionPercentX(0.07);
        _layoutHelpLayoutComponent.setPositionPercentYEnabled(true);
        _layoutHelpLayoutComponent.setPositionPercentY(0.5);
        this._layoutHelp.setTouchEnabled(true);
        this._layoutHelp.setUnifySizeEnabled(false);
        this._layoutHelp.ignoreContentAdaptWithSize(false);
        this._layoutHelp.setContentSize(cc.size(60, 60));

        ///// # _imgHelpBgr
        this._imgHelpBgr = new ccui.ImageView();
        this._imgHelpBgr.setName("_imgHelpBgr");
        this._layoutHelp.addChild(this._imgHelpBgr);
        this._imgHelpBgr.setCascadeOpacityEnabled(true);
        this._imgHelpBgr.setCascadeColorEnabled(true);
        this._imgHelpBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHelpBgr, 0.5, 0.5);
        let _imgHelpBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHelpBgr);
        _imgHelpBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgHelpBgrLayoutComponent.setPositionPercentX(0.5);
        _imgHelpBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgHelpBgrLayoutComponent.setPositionPercentY(0.5);
        _imgHelpBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgHelpBgrLayoutComponent.setPercentWidth(1);
        _imgHelpBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgHelpBgrLayoutComponent.setPercentHeight(1);
        this._imgHelpBgr.loadTexture("buttons/circles/Gray.png", 1);
        this._imgHelpBgr.setUnifySizeEnabled(false);
        this._imgHelpBgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgHelpBgr, 1, 1);
        this._imgHelpBgr.setTouchEnabled(false);

        ///// # _imgHelpIcon
        this._imgHelpIcon = new ccui.ImageView();
        this._imgHelpIcon.setName("_imgHelpIcon");
        this._layoutHelp.addChild(this._imgHelpIcon);
        this._imgHelpIcon.setCascadeOpacityEnabled(true);
        this._imgHelpIcon.setCascadeColorEnabled(true);
        this._imgHelpIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHelpIcon, 0.54, 0.4915);
        this._imgHelpIcon.setScale(0.8, 0.8);
        let _imgHelpIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHelpIcon);
        _imgHelpIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgHelpIconLayoutComponent.setPositionPercentX(0.54);
        _imgHelpIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgHelpIconLayoutComponent.setPositionPercentY(0.4915);
        this._imgHelpIcon.loadTexture("icons/flat/Question.png", 1);
        this._imgHelpIcon.setUnifySizeEnabled(false);
        this._imgHelpIcon.ignoreContentAdaptWithSize(false);
        this._imgHelpIcon.setContentSize(cc.size(30, 47));
        this._imgHelpIcon.setTouchEnabled(false);

        ///// # _layoutBetButtons
        this._layoutBetButtons = new ccui.Layout();
        this._layoutBetButtons.setName("_layoutBetButtons");
        this._layoutCenter.addChild(this._layoutBetButtons);
        this._layoutBetButtons.setCascadeOpacityEnabled(true);
        this._layoutBetButtons.setCascadeColorEnabled(true);
        this._layoutBetButtons.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBetButtons, 0.4, 0.0792);
        let _layoutBetButtonsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBetButtons);
        _layoutBetButtonsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBetButtonsLayoutComponent.setPositionPercentX(0.4);
        this._layoutBetButtons.setTouchEnabled(false);
        this._layoutBetButtons.setUnifySizeEnabled(false);
        this._layoutBetButtons.ignoreContentAdaptWithSize(false);
        this._layoutBetButtons.setContentSize(cc.size(370, 66.97));

        ///// # _imgBetBg
        this._imgBetBg = new ccui.ImageView();
        this._imgBetBg.setName("_imgBetBg");
        this._layoutBetButtons.addChild(this._imgBetBg);
        this._imgBetBg.setCascadeOpacityEnabled(true);
        this._imgBetBg.setCascadeColorEnabled(true);
        this._imgBetBg.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBetBg, 0.5, 0.5);
        this._imgBetBg.setOpacity(178);
        let _imgBetBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBetBg);
        _imgBetBgLayoutComponent.setPositionPercentXEnabled(true);
        _imgBetBgLayoutComponent.setPositionPercentX(0.5);
        _imgBetBgLayoutComponent.setPositionPercentYEnabled(true);
        _imgBetBgLayoutComponent.setPositionPercentY(0.5);
        _imgBetBgLayoutComponent.setPercentWidthEnabled(true);
        _imgBetBgLayoutComponent.setPercentWidth(1);
        _imgBetBgLayoutComponent.setPercentHeightEnabled(true);
        _imgBetBgLayoutComponent.setPercentHeight(1);
        this._imgBetBg.loadTexture("basics/other/Box_09.png", 1);
        this._imgBetBg.setUnifySizeEnabled(false);
        this._imgBetBg.ignoreContentAdaptWithSize(false);
        this._imgBetBg.setScale9Enabled(true);
        this._imgBetBg.setCapInsets(cc.rect(17, 17, 18, 19));
        ck.UIUtils.setSizePercent(this._imgBetBg, 1, 1);
        this._imgBetBg.setTouchEnabled(false);

        ///// # _layoutButtonBet00
        this._layoutButtonBet00 = new ccui.Layout();
        this._layoutButtonBet00.setName("_layoutButtonBet00");
        this._layoutBetButtons.addChild(this._layoutButtonBet00);
        this._layoutButtonBet00.setCascadeOpacityEnabled(true);
        this._layoutButtonBet00.setCascadeColorEnabled(true);
        this._layoutButtonBet00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutButtonBet00, 0.18, 0.5);
        let _layoutButtonBet00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutButtonBet00);
        _layoutButtonBet00LayoutComponent.setPositionPercentXEnabled(true);
        _layoutButtonBet00LayoutComponent.setPositionPercentX(0.18);
        _layoutButtonBet00LayoutComponent.setPositionPercentYEnabled(true);
        _layoutButtonBet00LayoutComponent.setPositionPercentY(0.5);
        this._layoutButtonBet00.setTouchEnabled(true);
        this._layoutButtonBet00.setUnifySizeEnabled(false);
        this._layoutButtonBet00.ignoreContentAdaptWithSize(false);
        this._layoutButtonBet00.setContentSize(cc.size(105, 45));

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
        this._imgIconBet00.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgIconBet00.setUnifySizeEnabled(false);
        this._imgIconBet00.ignoreContentAdaptWithSize(false);
        this._imgIconBet00.setContentSize(cc.size(36, 36));
        this._imgIconBet00.setTouchEnabled(false);

        ///// # _layoutButtonBet01
        this._layoutButtonBet01 = new ccui.Layout();
        this._layoutButtonBet01.setName("_layoutButtonBet01");
        this._layoutBetButtons.addChild(this._layoutButtonBet01);
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
        this._layoutButtonBet01.setContentSize(cc.size(105, 45));

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
        this._imgIconBet01.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgIconBet01.setUnifySizeEnabled(false);
        this._imgIconBet01.ignoreContentAdaptWithSize(false);
        this._imgIconBet01.setContentSize(cc.size(36, 36));
        this._imgIconBet01.setTouchEnabled(false);

        ///// # _layoutButtonBet02
        this._layoutButtonBet02 = new ccui.Layout();
        this._layoutButtonBet02.setName("_layoutButtonBet02");
        this._layoutBetButtons.addChild(this._layoutButtonBet02);
        this._layoutButtonBet02.setCascadeOpacityEnabled(true);
        this._layoutButtonBet02.setCascadeColorEnabled(true);
        this._layoutButtonBet02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutButtonBet02, 0.82, 0.5);
        let _layoutButtonBet02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutButtonBet02);
        _layoutButtonBet02LayoutComponent.setPositionPercentXEnabled(true);
        _layoutButtonBet02LayoutComponent.setPositionPercentX(0.82);
        _layoutButtonBet02LayoutComponent.setPositionPercentYEnabled(true);
        _layoutButtonBet02LayoutComponent.setPositionPercentY(0.5);
        this._layoutButtonBet02.setTouchEnabled(true);
        this._layoutButtonBet02.setUnifySizeEnabled(false);
        this._layoutButtonBet02.ignoreContentAdaptWithSize(false);
        this._layoutButtonBet02.setContentSize(cc.size(105, 45));

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
        this._imgIconBet02.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgIconBet02.setUnifySizeEnabled(false);
        this._imgIconBet02.ignoreContentAdaptWithSize(false);
        this._imgIconBet02.setContentSize(cc.size(36, 36));
        this._imgIconBet02.setTouchEnabled(false);

        ///// # _layoutPriceContainer
        this._layoutPriceContainer = new ccui.Layout();
        this._layoutPriceContainer.setName("_layoutPriceContainer");
        this._layoutCenter.addChild(this._layoutPriceContainer);
        this._layoutPriceContainer.setCascadeOpacityEnabled(true);
        this._layoutPriceContainer.setCascadeColorEnabled(true);
        this._layoutPriceContainer.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutPriceContainer, 0.4, 0.045);
        this._layoutPriceContainer.setVisible(false);
        let _layoutPriceContainerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPriceContainer);
        _layoutPriceContainerLayoutComponent.setPositionPercentXEnabled(true);
        _layoutPriceContainerLayoutComponent.setPositionPercentX(0.4);
        this._layoutPriceContainer.setTouchEnabled(false);
        this._layoutPriceContainer.setUnifySizeEnabled(false);
        this._layoutPriceContainer.ignoreContentAdaptWithSize(false);
        this._layoutPriceContainer.setContentSize(cc.size(200, 45));

        ///// # _imgPriceBg
        this._imgPriceBg = new ccui.ImageView();
        this._imgPriceBg.setName("_imgPriceBg");
        this._layoutPriceContainer.addChild(this._imgPriceBg);
        this._imgPriceBg.setCascadeOpacityEnabled(true);
        this._imgPriceBg.setCascadeColorEnabled(true);
        this._imgPriceBg.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPriceBg, 0.5, 0.5);
        this._imgPriceBg.setOpacity(153);
        let _imgPriceBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPriceBg);
        _imgPriceBgLayoutComponent.setPositionPercentXEnabled(true);
        _imgPriceBgLayoutComponent.setPositionPercentX(0.5);
        _imgPriceBgLayoutComponent.setPositionPercentYEnabled(true);
        _imgPriceBgLayoutComponent.setPositionPercentY(0.5);
        _imgPriceBgLayoutComponent.setPercentWidthEnabled(true);
        _imgPriceBgLayoutComponent.setPercentWidth(1);
        _imgPriceBgLayoutComponent.setPercentHeightEnabled(true);
        _imgPriceBgLayoutComponent.setPercentHeight(1);
        this._imgPriceBg.loadTexture("basics/other/Box_12.png", 1);
        this._imgPriceBg.setUnifySizeEnabled(false);
        this._imgPriceBg.ignoreContentAdaptWithSize(false);
        this._imgPriceBg.setScale9Enabled(true);
        this._imgPriceBg.setCapInsets(cc.rect(32, 32, 90, 62));
        ck.UIUtils.setSizePercent(this._imgPriceBg, 1, 1);
        this._imgPriceBg.setTouchEnabled(false);

        ///// # _layoutPrice
        this._layoutPrice = new ccui.Layout();
        this._layoutPrice.setName("_layoutPrice");
        this._layoutPriceContainer.addChild(this._layoutPrice);
        this._layoutPrice.setCascadeOpacityEnabled(true);
        this._layoutPrice.setCascadeColorEnabled(true);
        this._layoutPrice.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutPrice, 0.5, 0.5);
        let _layoutPriceLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPrice);
        _layoutPriceLayoutComponent.setPositionPercentXEnabled(true);
        _layoutPriceLayoutComponent.setPositionPercentX(0.5);
        _layoutPriceLayoutComponent.setPositionPercentYEnabled(true);
        _layoutPriceLayoutComponent.setPositionPercentY(0.5);
        this._layoutPrice.setTouchEnabled(false);
        this._layoutPrice.setUnifySizeEnabled(false);
        this._layoutPrice.ignoreContentAdaptWithSize(false);
        this._layoutPrice.setContentSize(cc.size(200, 45));

        ///// # _imgGemCost
        this._imgGemCost = new ccui.ImageView();
        this._imgGemCost.setName("_imgGemCost");
        this._layoutPrice.addChild(this._imgGemCost);
        this._imgGemCost.setCascadeOpacityEnabled(true);
        this._imgGemCost.setCascadeColorEnabled(true);
        this._imgGemCost.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGemCost, 0.2829, 0.4604);
        this._imgGemCost.setScale(0.3, 0.3);
        let _imgGemCostLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGemCost);
        this._imgGemCost.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgGemCost.setUnifySizeEnabled(false);
        this._imgGemCost.ignoreContentAdaptWithSize(false);
        this._imgGemCost.setContentSize(cc.size(128, 128));
        this._imgGemCost.setTouchEnabled(false);

        ///// # _txtCost
        this._txtCost = new ck.Text();
        this._txtCost.setName("_txtCost");
        this._layoutPrice.addChild(this._txtCost);
        this._txtCost.setCascadeOpacityEnabled(true);
        this._txtCost.setCascadeColorEnabled(true);
        this._txtCost.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCost, 0.4609, 0.4604);
        let _txtCostLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCost);
        this._txtCost.setTouchEnabled(false);
        this._txtCost.ignoreContentAdaptWithSize(true);
        this._txtCost.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCost.setDefaultFontSize(25);
        this._txtCost.setTextHorizontalAlignment(0);
        this._txtCost.setTextVerticalAlignment(0);

        ///// # _txtSplash
        this._txtSplash = new ck.Text();
        this._txtSplash.setName("_txtSplash");
        this._layoutPrice.addChild(this._txtSplash);
        this._txtSplash.setCascadeOpacityEnabled(true);
        this._txtSplash.setCascadeColorEnabled(true);
        this._txtSplash.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtSplash, 0.5754, 0.4604);
        let _txtSplashLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSplash);
        this._txtSplash.setTouchEnabled(false);
        this._txtSplash.ignoreContentAdaptWithSize(true);
        this._txtSplash.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSplash.setDefaultFontSize(26);
        this._txtSplash.setString("/");
        this._txtSplash.setTextHorizontalAlignment(0);
        this._txtSplash.setTextVerticalAlignment(0);

        ///// # _txtTurn
        this._txtTurn = new ck.Text();
        this._txtTurn.setName("_txtTurn");
        this._layoutPrice.addChild(this._txtTurn);
        this._txtTurn.setCascadeOpacityEnabled(true);
        this._txtTurn.setCascadeColorEnabled(true);
        this._txtTurn.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTurn, 0.7149, 0.4604);
        let _txtTurnLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTurn);
        this._txtTurn.setTouchEnabled(false);
        this._txtTurn.ignoreContentAdaptWithSize(true);
        this._txtTurn.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTurn.setDefaultFontSize(26);
        this._txtTurn.setString("TURN");
        this._txtTurn.setTextHorizontalAlignment(0);
        this._txtTurn.setTextVerticalAlignment(0);

        ///// # _btnPlay
        this._btnPlay = new ccui.Button();
        this._btnPlay.setName("_btnPlay");
        this._layoutCenter.addChild(this._btnPlay);
        this._btnPlay.setCascadeOpacityEnabled(true);
        this._btnPlay.setCascadeColorEnabled(true);
        this._btnPlay.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._btnPlay, 0.85, 0.0528);
        this._btnPlay.setScale(0.5, 0.5);
        let _btnPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnPlay);
        _btnPlayLayoutComponent.setPositionPercentXEnabled(true);
        _btnPlayLayoutComponent.setPositionPercentX(0.85);
        this._btnPlay.loadTextureDisabled("buttons/rectangles/RedHold_00.png", 1);
        this._btnPlay.loadTexturePressed("buttons/rectangles/RedHold_00.png", 1);
        this._btnPlay.loadTextureNormal("buttons/rectangles/RedHold_00.png", 1);
        this._btnPlay.setUnifySizeEnabled(false);
        this._btnPlay.ignoreContentAdaptWithSize(false);
        this._btnPlay.setScale9Enabled(true);
        this._btnPlay.setCapInsets(cc.rect(15, 11, 265, 123));
        this._btnPlay.setContentSize(cc.size(295, 145));
        this._btnPlay.setTouchEnabled(true);

        ///// # _txtPlayHint
        this._txtPlayHint = new ck.Text();
        this._txtPlayHint.setName("_txtPlayHint");
        this._btnPlay.addChild(this._txtPlayHint);
        this._txtPlayHint.setCascadeOpacityEnabled(true);
        this._txtPlayHint.setCascadeColorEnabled(true);
        this._txtPlayHint.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPlayHint, 0.4945, 0.3555);
        let _txtPlayHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPlayHint);
        this._txtPlayHint.setTouchEnabled(false);
        this._txtPlayHint.setUnifySizeEnabled(false);
        this._txtPlayHint.ignoreContentAdaptWithSize(false);
        this._txtPlayHint.setContentSize(cc.size(225.9484, 39));
        this._txtPlayHint.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtPlayHint.setDefaultFontSize(35);
        this._txtPlayHint.setString(gm.localize.getText("TXT_HOLD_FOR_STRONGER"));
        this._txtPlayHint.setTextHorizontalAlignment(1);
        this._txtPlayHint.setTextVerticalAlignment(1);
        this._txtPlayHint.autoFitSingleLine();

        ///// # _layoutAuto
        this._layoutAuto = new ccui.Layout();
        this._layoutAuto.setName("_layoutAuto");
        this._layoutCenter.addChild(this._layoutAuto);
        this._layoutAuto.setCascadeOpacityEnabled(true);
        this._layoutAuto.setCascadeColorEnabled(true);
        this._layoutAuto.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutAuto, 0.85, 0.0528);
        let _layoutAutoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAuto);
        _layoutAutoLayoutComponent.setPositionPercentXEnabled(true);
        _layoutAutoLayoutComponent.setPositionPercentX(0.85);
        this._layoutAuto.setTouchEnabled(false);
        this._layoutAuto.setUnifySizeEnabled(false);
        this._layoutAuto.ignoreContentAdaptWithSize(false);
        this._layoutAuto.setContentSize(cc.size(122.1401, 50.0906));

        ///// # _layoutBtnAuto
        this._layoutBtnAuto = new ccui.Layout();
        this._layoutBtnAuto.setName("_layoutBtnAuto");
        this._layoutAuto.addChild(this._layoutBtnAuto);
        this._layoutBtnAuto.setCascadeOpacityEnabled(true);
        this._layoutBtnAuto.setCascadeColorEnabled(true);
        this._layoutBtnAuto.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBtnAuto, 0.2744, 0.5103);
        this._layoutBtnAuto.setScale(1.2, 1.2);
        let _layoutBtnAutoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBtnAuto);
        this._layoutBtnAuto.setTouchEnabled(true);
        this._layoutBtnAuto.setUnifySizeEnabled(false);
        this._layoutBtnAuto.ignoreContentAdaptWithSize(false);
        this._layoutBtnAuto.setContentSize(cc.size(30, 30));

        ///// # _imgBtnAuto
        this._imgBtnAuto = new ccui.ImageView();
        this._imgBtnAuto.setName("_imgBtnAuto");
        this._layoutBtnAuto.addChild(this._imgBtnAuto);
        this._imgBtnAuto.setCascadeOpacityEnabled(true);
        this._imgBtnAuto.setCascadeColorEnabled(true);
        this._imgBtnAuto.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBtnAuto, 0.5, 0.5);
        let _imgBtnAutoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBtnAuto);
        _imgBtnAutoLayoutComponent.setPositionPercentXEnabled(true);
        _imgBtnAutoLayoutComponent.setPositionPercentX(0.5);
        _imgBtnAutoLayoutComponent.setPositionPercentYEnabled(true);
        _imgBtnAutoLayoutComponent.setPositionPercentY(0.5);
        _imgBtnAutoLayoutComponent.setPercentWidthEnabled(true);
        _imgBtnAutoLayoutComponent.setPercentWidth(1);
        _imgBtnAutoLayoutComponent.setPercentHeightEnabled(true);
        _imgBtnAutoLayoutComponent.setPercentHeight(1);
        this._imgBtnAuto.loadTexture("basics/other/Box_09.png", 1);
        this._imgBtnAuto.setUnifySizeEnabled(false);
        this._imgBtnAuto.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBtnAuto, 1, 1);
        this._imgBtnAuto.setTouchEnabled(false);

        ///// # _imgCheckAutoPlay
        this._imgCheckAutoPlay = new ccui.ImageView();
        this._imgCheckAutoPlay.setName("_imgCheckAutoPlay");
        this._layoutBtnAuto.addChild(this._imgCheckAutoPlay);
        this._imgCheckAutoPlay.setCascadeOpacityEnabled(true);
        this._imgCheckAutoPlay.setCascadeColorEnabled(true);
        this._imgCheckAutoPlay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCheckAutoPlay, 0.5, 0.5);
        this._imgCheckAutoPlay.setScale(0.5, 0.5);
        let _imgCheckAutoPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCheckAutoPlay);
        _imgCheckAutoPlayLayoutComponent.setPositionPercentXEnabled(true);
        _imgCheckAutoPlayLayoutComponent.setPositionPercentX(0.5);
        _imgCheckAutoPlayLayoutComponent.setPositionPercentYEnabled(true);
        _imgCheckAutoPlayLayoutComponent.setPositionPercentY(0.5);
        this._imgCheckAutoPlay.loadTexture("icons/color/other/Check_02.png", 1);
        this._imgCheckAutoPlay.setUnifySizeEnabled(false);
        this._imgCheckAutoPlay.ignoreContentAdaptWithSize(false);
        this._imgCheckAutoPlay.setContentSize(cc.size(50, 38));
        this._imgCheckAutoPlay.setTouchEnabled(false);

        ///// # _imgTxtAutoPlay
        this._imgTxtAutoPlay = new ccui.ImageView();
        this._imgTxtAutoPlay.setName("_imgTxtAutoPlay");
        this._layoutAuto.addChild(this._imgTxtAutoPlay);
        this._imgTxtAutoPlay.setCascadeOpacityEnabled(true);
        this._imgTxtAutoPlay.setCascadeColorEnabled(true);
        this._imgTxtAutoPlay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTxtAutoPlay, 0.7221, 0.5);
        let _imgTxtAutoPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTxtAutoPlay);
        _imgTxtAutoPlayLayoutComponent.setPositionPercentXEnabled(true);
        _imgTxtAutoPlayLayoutComponent.setPositionPercentX(0.7221);
        _imgTxtAutoPlayLayoutComponent.setPositionPercentYEnabled(true);
        _imgTxtAutoPlayLayoutComponent.setPositionPercentY(0.5);
        this._imgTxtAutoPlay.loadTexture("texts/minigames/AutoPlay.png", 1);
        this._imgTxtAutoPlay.setTouchEnabled(false);

        ///// # _layoutTutorial
        this._layoutTutorial = new ccui.Layout();
        this._layoutTutorial.setName("_layoutTutorial");
        this._layoutCenter.addChild(this._layoutTutorial);
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
        this._layoutTutorial.setTouchEnabled(false);
        this._layoutTutorial.setUnifySizeEnabled(false);
        this._layoutTutorial.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutTutorial, 1, 1);

        ///// # _layoutTutBet
        this._layoutTutBet = new ccui.Layout();
        this._layoutTutBet.setName("_layoutTutBet");
        this._layoutTutorial.addChild(this._layoutTutBet);
        this._layoutTutBet.setCascadeOpacityEnabled(true);
        this._layoutTutBet.setCascadeColorEnabled(true);
        this._layoutTutBet.setAnchorPoint(cc.p(0.8464, 0));
        ck.UIUtils.setPositionPercent(this._layoutTutBet, 0.3769, 0.0918);
        let _layoutTutBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTutBet);
        _layoutTutBetLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTutBetLayoutComponent.setPositionPercentX(0.3769);
        _layoutTutBetLayoutComponent.setPositionPercentYEnabled(true);
        _layoutTutBetLayoutComponent.setPositionPercentY(0.0918);
        this._layoutTutBet.setTouchEnabled(false);
        this._layoutTutBet.setUnifySizeEnabled(false);
        this._layoutTutBet.ignoreContentAdaptWithSize(false);
        this._layoutTutBet.setContentSize(cc.size(174, 126));

        ///// # _imgTutBetBg
        this._imgTutBetBg = new ccui.ImageView();
        this._imgTutBetBg.setName("_imgTutBetBg");
        this._layoutTutBet.addChild(this._imgTutBetBg);
        this._imgTutBetBg.setCascadeOpacityEnabled(true);
        this._imgTutBetBg.setCascadeColorEnabled(true);
        this._imgTutBetBg.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgTutBetBg, 0.5, 1);
        this._imgTutBetBg.setFlippedX(true);
        let _imgTutBetBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTutBetBg);
        _imgTutBetBgLayoutComponent.setPositionPercentXEnabled(true);
        _imgTutBetBgLayoutComponent.setPositionPercentX(0.5);
        _imgTutBetBgLayoutComponent.setPositionPercentYEnabled(true);
        _imgTutBetBgLayoutComponent.setPositionPercentY(1);
        _imgTutBetBgLayoutComponent.setPercentHeightEnabled(true);
        _imgTutBetBgLayoutComponent.setPercentHeight(1);
        this._imgTutBetBg.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgTutBetBg.setUnifySizeEnabled(false);
        this._imgTutBetBg.ignoreContentAdaptWithSize(false);
        this._imgTutBetBg.setScale9Enabled(true);
        this._imgTutBetBg.setCapInsets(cc.rect(57, 33, 60, 30));
        ck.UIUtils.setHeightPercent(this._imgTutBetBg, 1);
        this._imgTutBetBg.setContentSize(cc.size(174, this._imgTutBetBg.height));
        this._imgTutBetBg.setTouchEnabled(false);
        this._imgTutBetBg.setFlippedX(true);

        ///// # _txtTutBet
        this._txtTutBet = new ck.Text();
        this._txtTutBet.setName("_txtTutBet");
        this._layoutTutBet.addChild(this._txtTutBet);
        this._txtTutBet.setCascadeOpacityEnabled(true);
        this._txtTutBet.setCascadeColorEnabled(true);
        this._txtTutBet.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTutBet, 0.5, 0.6029);
        let _txtTutBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTutBet);
        _txtTutBetLayoutComponent.setPositionPercentXEnabled(true);
        _txtTutBetLayoutComponent.setPositionPercentX(0.5);
        _txtTutBetLayoutComponent.setPositionPercentYEnabled(true);
        _txtTutBetLayoutComponent.setPositionPercentY(0.6029);
        _txtTutBetLayoutComponent.setPercentWidthEnabled(true);
        _txtTutBetLayoutComponent.setPercentWidth(0.9);
        _txtTutBetLayoutComponent.setPercentHeightEnabled(true);
        _txtTutBetLayoutComponent.setPercentHeight(0.7305);
        this._txtTutBet.setTouchEnabled(false);
        this._txtTutBet.setUnifySizeEnabled(false);
        this._txtTutBet.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtTutBet, 0.9, 0.7305);
        this._txtTutBet.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTutBet.setDefaultFontSize(30);
        this._txtTutBet.setString(gm.localize.getText("TXT_CHANGE_GEM_HERE"));
        this._txtTutBet.setTextHorizontalAlignment(1);
        this._txtTutBet.setTextVerticalAlignment(1);
        this._txtTutBet.autoFitMultipleLine();

        ///// # _layoutTutSpin
        this._layoutTutSpin = new ccui.Layout();
        this._layoutTutSpin.setName("_layoutTutSpin");
        this._layoutTutorial.addChild(this._layoutTutSpin);
        this._layoutTutSpin.setCascadeOpacityEnabled(true);
        this._layoutTutSpin.setCascadeColorEnabled(true);
        this._layoutTutSpin.setAnchorPoint(cc.p(0.8509, 0));
        ck.UIUtils.setPositionPercent(this._layoutTutSpin, 0.846, 0.1008);
        let _layoutTutSpinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTutSpin);
        this._layoutTutSpin.setTouchEnabled(false);
        this._layoutTutSpin.setUnifySizeEnabled(false);
        this._layoutTutSpin.ignoreContentAdaptWithSize(false);
        this._layoutTutSpin.setContentSize(cc.size(174, 140.4948));

        ///// # _imgTutSpinBg
        this._imgTutSpinBg = new ccui.ImageView();
        this._imgTutSpinBg.setName("_imgTutSpinBg");
        this._layoutTutSpin.addChild(this._imgTutSpinBg);
        this._imgTutSpinBg.setCascadeOpacityEnabled(true);
        this._imgTutSpinBg.setCascadeColorEnabled(true);
        this._imgTutSpinBg.setAnchorPoint(cc.p(0.1469, 0));
        ck.UIUtils.setPositionPercent(this._imgTutSpinBg, 0.8531, 0);
        this._imgTutSpinBg.setFlippedX(true);
        let _imgTutSpinBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTutSpinBg);
        _imgTutSpinBgLayoutComponent.setPositionPercentXEnabled(true);
        _imgTutSpinBgLayoutComponent.setPositionPercentX(0.8531);
        _imgTutSpinBgLayoutComponent.setPositionPercentYEnabled(true);
        _imgTutSpinBgLayoutComponent.setPositionPercentY(0);
        _imgTutSpinBgLayoutComponent.setPercentWidthEnabled(true);
        _imgTutSpinBgLayoutComponent.setPercentWidth(1);
        _imgTutSpinBgLayoutComponent.setPercentHeightEnabled(true);
        _imgTutSpinBgLayoutComponent.setPercentHeight(1);
        this._imgTutSpinBg.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgTutSpinBg.setUnifySizeEnabled(false);
        this._imgTutSpinBg.ignoreContentAdaptWithSize(false);
        this._imgTutSpinBg.setScale9Enabled(true);
        this._imgTutSpinBg.setCapInsets(cc.rect(57, 33, 60, 30));
        ck.UIUtils.setSizePercent(this._imgTutSpinBg, 1, 1);
        this._imgTutSpinBg.setTouchEnabled(false);
        this._imgTutSpinBg.setFlippedX(true);

        ///// # _txtTutSpin
        this._txtTutSpin = new ck.Text();
        this._txtTutSpin.setName("_txtTutSpin");
        this._layoutTutSpin.addChild(this._txtTutSpin);
        this._txtTutSpin.setCascadeOpacityEnabled(true);
        this._txtTutSpin.setCascadeColorEnabled(true);
        this._txtTutSpin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTutSpin, 0.5, 0.5935);
        let _txtTutSpinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTutSpin);
        _txtTutSpinLayoutComponent.setPositionPercentXEnabled(true);
        _txtTutSpinLayoutComponent.setPositionPercentX(0.5);
        _txtTutSpinLayoutComponent.setPositionPercentYEnabled(true);
        _txtTutSpinLayoutComponent.setPositionPercentY(0.5935);
        _txtTutSpinLayoutComponent.setPercentWidthEnabled(true);
        _txtTutSpinLayoutComponent.setPercentWidth(0.9);
        this._txtTutSpin.setTouchEnabled(false);
        this._txtTutSpin.setUnifySizeEnabled(false);
        this._txtTutSpin.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtTutSpin, 0.9);
        this._txtTutSpin.setContentSize(cc.size(this._txtTutSpin.width, 102));
        this._txtTutSpin.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTutSpin.setDefaultFontSize(30);
        this._txtTutSpin.setString(gm.localize.getText("TXT_PINBALL_SPIN_TUT"));
        this._txtTutSpin.setTextHorizontalAlignment(1);
        this._txtTutSpin.setTextVerticalAlignment(1);
        this._txtTutSpin.autoFitMultipleLine();

        ///// # _layoutExit
        this._layoutExit = new ccui.Layout();
        this._layoutExit.setName("_layoutExit");
        this._layoutRoot.addChild(this._layoutExit);
        this._layoutExit.setCascadeOpacityEnabled(true);
        this._layoutExit.setCascadeColorEnabled(true);
        this._layoutExit.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutExit, 0.06, 0.0484);
        let _layoutExitLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutExit);
        _layoutExitLayoutComponent.setPositionPercentXEnabled(true);
        _layoutExitLayoutComponent.setPositionPercentX(0.06);
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

    },



});

/**
 * Create PinballLayer
 * @returns {_ccs.PinballLayer}
 */
_ccs.PinballLayer.create = function () {
    return new _ccs.PinballLayer();
};
