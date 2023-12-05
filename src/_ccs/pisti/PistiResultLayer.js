/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PistiResultLayer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.PistiResultLayer = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutBackground: null,
    /** @type {ccui.Layout} */
    _layoutAvatar00: null,
    /** @type {ccui.ImageView} */
    _imgRadial00: null,
    /** @type {ccui.ImageView} */
    _imgCrown00: null,
    /** @type {Avatar} */
    _avatar00: null,
    /** @type {ccui.ImageView} */
    _imgWin00: null,
    /** @type {ccui.Layout} */
    _layoutCoin00: null,
    /** @type {ccui.ImageView} */
    _imgCoinIcon00: null,
    /** @type {ck.Text} */
    _txtCoin00: null,
    /** @type {ccui.Layout} */
    _layoutAvatar01: null,
    /** @type {ccui.ImageView} */
    _imgRadial01: null,
    /** @type {ccui.ImageView} */
    _imgCrown01: null,
    /** @type {Avatar} */
    _avatar01: null,
    /** @type {ccui.ImageView} */
    _imgWin01: null,
    /** @type {ccui.Layout} */
    _layoutCoin01: null,
    /** @type {ccui.ImageView} */
    _imgCoinIcon01: null,
    /** @type {ck.Text} */
    _txtCoin01: null,
    /** @type {cc.Node} */
    _nodeScore00: null,
    /** @type {ccui.ImageView} */
    _imgScore00: null,
    /** @type {ck.Text} */
    _txtScore00: null,
    /** @type {cc.Node} */
    _nodeScore01: null,
    /** @type {ccui.ImageView} */
    _imgScore01: null,
    /** @type {ck.Text} */
    _txtScore01: null,
    /** @type {ck.Text} */
    _txtScoreGapHeader: null,
    /** @type {cc.Node} */
    _nodeScoreGap: null,
    /** @type {ccui.ImageView} */
    _imgScoreGap: null,
    /** @type {ck.Text} */
    _txtScoreGap: null,
    /** @type {ccui.Layout} */
    _layoutSummary: null,
    /** @type {ccui.ImageView} */
    _imgSummaryBgr: null,
    /** @type {ccui.ImageView} */
    _imgSummaryHeaderBackground: null,
    /** @type {ccui.ImageView} */
    _imgSummaryHeader: null,
    /** @type {ccui.Layout} */
    _gridViewSummary: null,
    /** @type {ccui.Layout} */
    _layoutSummaryGold: null,
    /** @type {cc.Node} */
    _nodeScoreGapSummary: null,
    /** @type {ccui.ImageView} */
    _imgScoreGapSummary: null,
    /** @type {ck.Text} */
    _txtScoreGapSummary: null,
    /** @type {ck.Text} */
    _txtX: null,
    /** @type {ccui.ImageView} */
    _imgBetCoin: null,
    /** @type {ck.Text} */
    _txtBetAmount: null,
    /** @type {ck.Text} */
    _txtEqual: null,
    /** @type {ccui.ImageView} */
    _imgResultCoin: null,
    /** @type {ck.Text} */
    _txtResultAmount: null,
    /** @type {ccui.Layout} */
    _layoutHintCorrectGold: null,
    /** @type {ccui.ImageView} */
    _imgHintCorrectGoldBg: null,
    /** @type {ck.Text} */
    _txtHintCorrectGold: null,
    /** @type {ccui.Layout} */
    _layoutSummaryExp: null,
    /** @type {ccui.ImageView} */
    _imgXP: null,
    /** @type {ck.Text} */
    _txtXP: null,
    /** @type {ccui.Layout} */
    _layoutBonusExp: null,
    /** @type {ccui.Layout} */
    _layoutBonusExpIcon: null,
    /** @type {ccui.ImageView} */
    _imgXP2: null,
    /** @type {ck.Text} */
    _txtBonus: null,
    /** @type {ck.Text} */
    _txtBonusXP: null,
    /** @type {ccui.Layout} */
    _layoutSummaryEventToken: null,
    /** @type {ccui.Layout} */
    _layoutProgressToken: null,
    /** @type {ccui.ImageView} */
    _imgProgressTokenBackground: null,
    /** @type {ck.LoadingBar} */
    _loadingBarToken: null,
    /** @type {ccui.ImageView} */
    _imgIconProgressToken: null,
    /** @type {ccui.ImageView} */
    _imgToken: null,
    /** @type {ck.Text} */
    _txtAmontToken: null,
    /** @type {ck.Text} */
    _txtProgressTokenStatus: null,
    /** @type {ccui.Layout} */
    _layoutSummaryRewards: null,
    /** @type {ck.GridViewVertical} */
    _gridViewRewards: null,
    /** @type {ccui.Layout} */
    _layoutSummaryCollectionRewards: null,
    /** @type {ck.GridViewVertical} */
    _gridViewCardCollectionRewards: null,
    /** @type {ccui.Layout} */
    _layoutHintTax: null,
    /** @type {ck.Text} */
    _txtHintTax: null,
    /** @type {ck.Text} */
    _txtCorrectGoldEffect: null,
    /** @type {ShareImageRewardWidget} */
    _nodeShareReward: null,
    /** @type {cc.Node} */
    _nodeBigBet: null,
    /** @type {ccui.ImageView} */
    _imgIconBigBet: null,
    /** @type {ck.Text} */
    _txtBigBetValue: null,


    /**
     * _ccs.PistiResultLayer constructor
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
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutRoot, 1, 1);

        ///// # _layoutBackground
        this._layoutBackground = new ccui.Layout();
        this._layoutBackground.setName("_layoutBackground");
        this._layoutRoot.addChild(this._layoutBackground);
        this._layoutBackground.setCascadeOpacityEnabled(true);
        this._layoutBackground.setCascadeColorEnabled(true);
        this._layoutBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBackground, 0.5, 0.5);
        if (!PlatformUtils.hasNotch()) {
            let _layoutBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBackground);
            _layoutBackgroundLayoutComponent.setPositionPercentXEnabled(true);
            _layoutBackgroundLayoutComponent.setPositionPercentX(0.5);
            _layoutBackgroundLayoutComponent.setPositionPercentYEnabled(true);
            _layoutBackgroundLayoutComponent.setPositionPercentY(0.5);
            _layoutBackgroundLayoutComponent.setPercentWidthEnabled(true);
            _layoutBackgroundLayoutComponent.setPercentWidth(1);
            _layoutBackgroundLayoutComponent.setPercentHeightEnabled(true);
            _layoutBackgroundLayoutComponent.setPercentHeight(1);
        }
        this._layoutBackground.setTouchEnabled(true);
        this._layoutBackground.setUnifySizeEnabled(false);
        this._layoutBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBackground, 1, 1);
        this._layoutBackground.setBackGroundColorType(1);
        this._layoutBackground.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutBackground.setBackGroundColorOpacity(191);
        UIUtils.initFullScreenBackground(this._layoutBackground);

        ///// # _layoutAvatar00
        this._layoutAvatar00 = new ccui.Layout();
        this._layoutAvatar00.setName("_layoutAvatar00");
        this._layoutRoot.addChild(this._layoutAvatar00);
        this._layoutAvatar00.setCascadeOpacityEnabled(true);
        this._layoutAvatar00.setCascadeColorEnabled(true);
        this._layoutAvatar00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutAvatar00, 0.5, 0.13);
        let _layoutAvatar00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAvatar00);
        _layoutAvatar00LayoutComponent.setPositionPercentXEnabled(true);
        _layoutAvatar00LayoutComponent.setPositionPercentX(0.5);
        _layoutAvatar00LayoutComponent.setPositionPercentYEnabled(true);
        _layoutAvatar00LayoutComponent.setPositionPercentY(0.13);
        this._layoutAvatar00.setTouchEnabled(false);
        this._layoutAvatar00.setUnifySizeEnabled(false);
        this._layoutAvatar00.ignoreContentAdaptWithSize(false);
        this._layoutAvatar00.setContentSize(cc.size(150, 150));

        ///// # _imgRadial00
        this._imgRadial00 = new ccui.ImageView();
        this._imgRadial00.setName("_imgRadial00");
        this._layoutAvatar00.addChild(this._imgRadial00);
        this._imgRadial00.setCascadeOpacityEnabled(true);
        this._imgRadial00.setCascadeColorEnabled(true);
        this._imgRadial00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRadial00, 0.5, 0.5);
        let _imgRadial00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRadial00);
        _imgRadial00LayoutComponent.setPositionPercentXEnabled(true);
        _imgRadial00LayoutComponent.setPositionPercentX(0.5);
        _imgRadial00LayoutComponent.setPositionPercentYEnabled(true);
        _imgRadial00LayoutComponent.setPositionPercentY(0.5);
        this._imgRadial00.loadTexture("basics/effects/RadialYellow.png", 1);
        this._imgRadial00.setUnifySizeEnabled(false);
        this._imgRadial00.ignoreContentAdaptWithSize(false);
        this._imgRadial00.setContentSize(cc.size(375, 375));
        this._imgRadial00.setTouchEnabled(false);

        ///// # _imgCrown00
        this._imgCrown00 = new ccui.ImageView();
        this._imgCrown00.setName("_imgCrown00");
        this._layoutAvatar00.addChild(this._imgCrown00);
        this._imgCrown00.setCascadeOpacityEnabled(true);
        this._imgCrown00.setCascadeColorEnabled(true);
        this._imgCrown00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCrown00, 0.1135, 0.9053);
        this._imgCrown00.setRotationX(-10);
        this._imgCrown00.setRotationY(-9.9998);
        let _imgCrown00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCrown00);
        _imgCrown00LayoutComponent.setPositionPercentXEnabled(true);
        _imgCrown00LayoutComponent.setPositionPercentX(0.1135);
        _imgCrown00LayoutComponent.setPositionPercentYEnabled(true);
        _imgCrown00LayoutComponent.setPositionPercentY(0.9053);
        this._imgCrown00.loadTexture("game/popups/result/Crown.png", 1);
        this._imgCrown00.setUnifySizeEnabled(false);
        this._imgCrown00.ignoreContentAdaptWithSize(false);
        this._imgCrown00.setContentSize(cc.size(88, 78));
        this._imgCrown00.setTouchEnabled(false);

        ///// # _avatar00
        this._avatar00 = new Avatar(ck.AvatarType.CIRCLE);
        this._avatar00.setName("_avatar00");
        this._layoutAvatar00.addChild(this._avatar00);
        this._avatar00.setCascadeOpacityEnabled(true);
        this._avatar00.setCascadeColorEnabled(true);
        this._avatar00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._avatar00, 0.5, 0.5);
        let _avatar00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._avatar00);
        _avatar00LayoutComponent.setPositionPercentXEnabled(true);
        _avatar00LayoutComponent.setPositionPercentX(0.5);
        _avatar00LayoutComponent.setPositionPercentYEnabled(true);
        _avatar00LayoutComponent.setPositionPercentY(0.5);
        this._avatar00.setWidth(150);

        ///// # _imgWin00
        this._imgWin00 = new ccui.ImageView();
        this._imgWin00.setName("_imgWin00");
        this._layoutAvatar00.addChild(this._imgWin00);
        this._imgWin00.setCascadeOpacityEnabled(true);
        this._imgWin00.setCascadeColorEnabled(true);
        this._imgWin00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgWin00, 0.5, 0.25);
        let _imgWin00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgWin00);
        _imgWin00LayoutComponent.setPositionPercentXEnabled(true);
        _imgWin00LayoutComponent.setPositionPercentX(0.5);
        _imgWin00LayoutComponent.setPositionPercentYEnabled(true);
        _imgWin00LayoutComponent.setPositionPercentY(0.25);
        this._imgWin00.loadTexture("game/popups/result/WinHeader.png", 1);
        this._imgWin00.setUnifySizeEnabled(false);
        this._imgWin00.ignoreContentAdaptWithSize(false);
        this._imgWin00.setContentSize(cc.size(323, 165));
        this._imgWin00.setTouchEnabled(false);

        ///// # _layoutCoin00
        this._layoutCoin00 = new ccui.Layout();
        this._layoutCoin00.setName("_layoutCoin00");
        this._layoutAvatar00.addChild(this._layoutCoin00);
        this._layoutCoin00.setCascadeOpacityEnabled(true);
        this._layoutCoin00.setCascadeColorEnabled(true);
        this._layoutCoin00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCoin00, 0.4915, -0.25);
        let _layoutCoin00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCoin00);
        _layoutCoin00LayoutComponent.setPositionPercentXEnabled(true);
        _layoutCoin00LayoutComponent.setPositionPercentX(0.4915);
        _layoutCoin00LayoutComponent.setPositionPercentYEnabled(true);
        _layoutCoin00LayoutComponent.setPositionPercentY(-0.25);
        this._layoutCoin00.setTouchEnabled(true);
        this._layoutCoin00.setUnifySizeEnabled(false);
        this._layoutCoin00.ignoreContentAdaptWithSize(false);
        this._layoutCoin00.setContentSize(cc.size(153, 30));
        this._layoutCoin00.setBackGroundColorType(1);
        this._layoutCoin00.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutCoin00.setBackGroundColorOpacity(127);

        ///// # _imgCoinIcon00
        this._imgCoinIcon00 = new ccui.ImageView();
        this._imgCoinIcon00.setName("_imgCoinIcon00");
        this._layoutCoin00.addChild(this._imgCoinIcon00);
        this._imgCoinIcon00.setCascadeOpacityEnabled(true);
        this._imgCoinIcon00.setCascadeColorEnabled(true);
        this._imgCoinIcon00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCoinIcon00, 0, 0.5);
        let _imgCoinIcon00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCoinIcon00);
        _imgCoinIcon00LayoutComponent.setPositionPercentXEnabled(true);
        _imgCoinIcon00LayoutComponent.setPositionPercentX(0);
        _imgCoinIcon00LayoutComponent.setPositionPercentYEnabled(true);
        _imgCoinIcon00LayoutComponent.setPositionPercentY(0.5);
        this._imgCoinIcon00.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgCoinIcon00.setUnifySizeEnabled(false);
        this._imgCoinIcon00.ignoreContentAdaptWithSize(false);
        this._imgCoinIcon00.setContentSize(cc.size(40, 40));
        this._imgCoinIcon00.setTouchEnabled(false);

        ///// # _txtCoin00
        this._txtCoin00 = new ck.Text();
        this._txtCoin00.setName("_txtCoin00");
        this._layoutCoin00.addChild(this._txtCoin00);
        this._txtCoin00.setCascadeOpacityEnabled(true);
        this._txtCoin00.setCascadeColorEnabled(true);
        this._txtCoin00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCoin00, 0.528, 0.5);
        this._txtCoin00.setTextColor(cc.color(255, 255, 141, 255));
        let _txtCoin00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCoin00);
        _txtCoin00LayoutComponent.setPositionPercentXEnabled(true);
        _txtCoin00LayoutComponent.setPositionPercentX(0.528);
        _txtCoin00LayoutComponent.setPositionPercentYEnabled(true);
        _txtCoin00LayoutComponent.setPositionPercentY(0.5);
        this._txtCoin00.setTouchEnabled(false);
        this._txtCoin00.ignoreContentAdaptWithSize(true);
        this._txtCoin00.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCoin00.setDefaultFontSize(20);
        this._txtCoin00.setTextHorizontalAlignment(1);
        this._txtCoin00.setTextVerticalAlignment(1);

        ///// # _layoutAvatar01
        this._layoutAvatar01 = new ccui.Layout();
        this._layoutAvatar01.setName("_layoutAvatar01");
        this._layoutRoot.addChild(this._layoutAvatar01);
        this._layoutAvatar01.setCascadeOpacityEnabled(true);
        this._layoutAvatar01.setCascadeColorEnabled(true);
        this._layoutAvatar01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutAvatar01, 0.5, 0.85);
        let _layoutAvatar01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAvatar01);
        _layoutAvatar01LayoutComponent.setPositionPercentXEnabled(true);
        _layoutAvatar01LayoutComponent.setPositionPercentX(0.5);
        _layoutAvatar01LayoutComponent.setPositionPercentYEnabled(true);
        _layoutAvatar01LayoutComponent.setPositionPercentY(0.85);
        this._layoutAvatar01.setTouchEnabled(false);
        this._layoutAvatar01.setUnifySizeEnabled(false);
        this._layoutAvatar01.ignoreContentAdaptWithSize(false);
        this._layoutAvatar01.setContentSize(cc.size(150, 150));

        ///// # _imgRadial01
        this._imgRadial01 = new ccui.ImageView();
        this._imgRadial01.setName("_imgRadial01");
        this._layoutAvatar01.addChild(this._imgRadial01);
        this._imgRadial01.setCascadeOpacityEnabled(true);
        this._imgRadial01.setCascadeColorEnabled(true);
        this._imgRadial01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRadial01, 0.5, 0.5);
        let _imgRadial01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRadial01);
        _imgRadial01LayoutComponent.setPositionPercentXEnabled(true);
        _imgRadial01LayoutComponent.setPositionPercentX(0.5);
        _imgRadial01LayoutComponent.setPositionPercentYEnabled(true);
        _imgRadial01LayoutComponent.setPositionPercentY(0.5);
        this._imgRadial01.loadTexture("basics/effects/RadialYellow.png", 1);
        this._imgRadial01.setUnifySizeEnabled(false);
        this._imgRadial01.ignoreContentAdaptWithSize(false);
        this._imgRadial01.setContentSize(cc.size(375, 375));
        this._imgRadial01.setTouchEnabled(false);

        ///// # _imgCrown01
        this._imgCrown01 = new ccui.ImageView();
        this._imgCrown01.setName("_imgCrown01");
        this._layoutAvatar01.addChild(this._imgCrown01);
        this._imgCrown01.setCascadeOpacityEnabled(true);
        this._imgCrown01.setCascadeColorEnabled(true);
        this._imgCrown01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCrown01, 0.0738, 0.8854);
        this._imgCrown01.setRotationX(-10);
        this._imgCrown01.setRotationY(-9.999);
        let _imgCrown01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCrown01);
        _imgCrown01LayoutComponent.setPositionPercentXEnabled(true);
        _imgCrown01LayoutComponent.setPositionPercentX(0.0738);
        _imgCrown01LayoutComponent.setPositionPercentYEnabled(true);
        _imgCrown01LayoutComponent.setPositionPercentY(0.8854);
        this._imgCrown01.loadTexture("game/popups/result/Crown.png", 1);
        this._imgCrown01.setUnifySizeEnabled(false);
        this._imgCrown01.ignoreContentAdaptWithSize(false);
        this._imgCrown01.setContentSize(cc.size(88, 78));
        this._imgCrown01.setTouchEnabled(false);

        ///// # _avatar01
        this._avatar01 = new Avatar(ck.AvatarType.CIRCLE);
        this._avatar01.setName("_avatar01");
        this._layoutAvatar01.addChild(this._avatar01);
        this._avatar01.setCascadeOpacityEnabled(true);
        this._avatar01.setCascadeColorEnabled(true);
        this._avatar01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._avatar01, 0.5, 0.5);
        let _avatar01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._avatar01);
        _avatar01LayoutComponent.setPositionPercentXEnabled(true);
        _avatar01LayoutComponent.setPositionPercentX(0.5);
        _avatar01LayoutComponent.setPositionPercentYEnabled(true);
        _avatar01LayoutComponent.setPositionPercentY(0.5);
        this._avatar01.setWidth(150);

        ///// # _imgWin01
        this._imgWin01 = new ccui.ImageView();
        this._imgWin01.setName("_imgWin01");
        this._layoutAvatar01.addChild(this._imgWin01);
        this._imgWin01.setCascadeOpacityEnabled(true);
        this._imgWin01.setCascadeColorEnabled(true);
        this._imgWin01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgWin01, 0.5, 0.25);
        let _imgWin01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgWin01);
        _imgWin01LayoutComponent.setPositionPercentXEnabled(true);
        _imgWin01LayoutComponent.setPositionPercentX(0.5);
        _imgWin01LayoutComponent.setPositionPercentYEnabled(true);
        _imgWin01LayoutComponent.setPositionPercentY(0.25);
        this._imgWin01.loadTexture("game/popups/result/WinHeader.png", 1);
        this._imgWin01.setUnifySizeEnabled(false);
        this._imgWin01.ignoreContentAdaptWithSize(false);
        this._imgWin01.setContentSize(cc.size(323, 165));
        this._imgWin01.setTouchEnabled(false);

        ///// # _layoutCoin01
        this._layoutCoin01 = new ccui.Layout();
        this._layoutCoin01.setName("_layoutCoin01");
        this._layoutAvatar01.addChild(this._layoutCoin01);
        this._layoutCoin01.setCascadeOpacityEnabled(true);
        this._layoutCoin01.setCascadeColorEnabled(true);
        this._layoutCoin01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCoin01, 0.5, 1.25);
        let _layoutCoin01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCoin01);
        _layoutCoin01LayoutComponent.setPositionPercentXEnabled(true);
        _layoutCoin01LayoutComponent.setPositionPercentX(0.5);
        _layoutCoin01LayoutComponent.setPositionPercentYEnabled(true);
        _layoutCoin01LayoutComponent.setPositionPercentY(1.25);
        this._layoutCoin01.setTouchEnabled(true);
        this._layoutCoin01.setUnifySizeEnabled(false);
        this._layoutCoin01.ignoreContentAdaptWithSize(false);
        this._layoutCoin01.setContentSize(cc.size(153, 30));
        this._layoutCoin01.setBackGroundColorType(1);
        this._layoutCoin01.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutCoin01.setBackGroundColorOpacity(127);

        ///// # _imgCoinIcon01
        this._imgCoinIcon01 = new ccui.ImageView();
        this._imgCoinIcon01.setName("_imgCoinIcon01");
        this._layoutCoin01.addChild(this._imgCoinIcon01);
        this._imgCoinIcon01.setCascadeOpacityEnabled(true);
        this._imgCoinIcon01.setCascadeColorEnabled(true);
        this._imgCoinIcon01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCoinIcon01, 0, 0.5);
        let _imgCoinIcon01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCoinIcon01);
        _imgCoinIcon01LayoutComponent.setPositionPercentXEnabled(true);
        _imgCoinIcon01LayoutComponent.setPositionPercentX(0);
        _imgCoinIcon01LayoutComponent.setPositionPercentYEnabled(true);
        _imgCoinIcon01LayoutComponent.setPositionPercentY(0.5);
        this._imgCoinIcon01.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgCoinIcon01.setUnifySizeEnabled(false);
        this._imgCoinIcon01.ignoreContentAdaptWithSize(false);
        this._imgCoinIcon01.setContentSize(cc.size(40, 40));
        this._imgCoinIcon01.setTouchEnabled(false);

        ///// # _txtCoin01
        this._txtCoin01 = new ck.Text();
        this._txtCoin01.setName("_txtCoin01");
        this._layoutCoin01.addChild(this._txtCoin01);
        this._txtCoin01.setCascadeOpacityEnabled(true);
        this._txtCoin01.setCascadeColorEnabled(true);
        this._txtCoin01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCoin01, 0.528, 0.5);
        this._txtCoin01.setTextColor(cc.color(255, 255, 141, 255));
        let _txtCoin01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCoin01);
        _txtCoin01LayoutComponent.setPositionPercentXEnabled(true);
        _txtCoin01LayoutComponent.setPositionPercentX(0.528);
        _txtCoin01LayoutComponent.setPositionPercentYEnabled(true);
        _txtCoin01LayoutComponent.setPositionPercentY(0.5);
        this._txtCoin01.setTouchEnabled(false);
        this._txtCoin01.ignoreContentAdaptWithSize(true);
        this._txtCoin01.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCoin01.setDefaultFontSize(20);
        this._txtCoin01.setTextHorizontalAlignment(1);
        this._txtCoin01.setTextVerticalAlignment(1);

        ///// # _nodeScore00
        this._nodeScore00 = new cc.Node();
        this._nodeScore00.setName("_nodeScore00");
        this._layoutRoot.addChild(this._nodeScore00);
        this._nodeScore00.setCascadeOpacityEnabled(true);
        this._nodeScore00.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeScore00, 0.5, 0.35);
        let _nodeScore00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeScore00);
        _nodeScore00LayoutComponent.setPositionPercentXEnabled(true);
        _nodeScore00LayoutComponent.setPositionPercentX(0.5);
        _nodeScore00LayoutComponent.setPositionPercentYEnabled(true);
        _nodeScore00LayoutComponent.setPositionPercentY(0.35);

        ///// # _imgScore00
        this._imgScore00 = new ccui.ImageView();
        this._imgScore00.setName("_imgScore00");
        this._nodeScore00.addChild(this._imgScore00);
        this._imgScore00.setCascadeOpacityEnabled(true);
        this._imgScore00.setCascadeColorEnabled(true);
        this._imgScore00.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgScore00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgScore00);
        this._imgScore00.loadTexture("game/popups/result/BlueBox.png", 1);
        this._imgScore00.setUnifySizeEnabled(false);
        this._imgScore00.ignoreContentAdaptWithSize(false);
        this._imgScore00.setContentSize(cc.size(121, 102));
        this._imgScore00.setTouchEnabled(false);

        ///// # _txtScore00
        this._txtScore00 = new ck.Text();
        this._txtScore00.setName("_txtScore00");
        this._nodeScore00.addChild(this._txtScore00);
        this._txtScore00.setCascadeOpacityEnabled(true);
        this._txtScore00.setCascadeColorEnabled(true);
        this._txtScore00.setAnchorPoint(cc.p(0.5, 0.5));
        let _txtScore00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtScore00);
        this._txtScore00.setTouchEnabled(false);
        this._txtScore00.ignoreContentAdaptWithSize(true);
        this._txtScore00.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtScore00.setDefaultFontSize(60);
        this._txtScore00.setTextHorizontalAlignment(1);
        this._txtScore00.setTextVerticalAlignment(1);
        this._txtScore00.enableOutline(cc.color(162, 41, 173, 255), 2);

        ///// # _nodeScore01
        this._nodeScore01 = new cc.Node();
        this._nodeScore01.setName("_nodeScore01");
        this._layoutRoot.addChild(this._nodeScore01);
        this._nodeScore01.setCascadeOpacityEnabled(true);
        this._nodeScore01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeScore01, 0.5, 0.65);
        let _nodeScore01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeScore01);
        _nodeScore01LayoutComponent.setPositionPercentXEnabled(true);
        _nodeScore01LayoutComponent.setPositionPercentX(0.5);
        _nodeScore01LayoutComponent.setPositionPercentYEnabled(true);
        _nodeScore01LayoutComponent.setPositionPercentY(0.65);

        ///// # _imgScore01
        this._imgScore01 = new ccui.ImageView();
        this._imgScore01.setName("_imgScore01");
        this._nodeScore01.addChild(this._imgScore01);
        this._imgScore01.setCascadeOpacityEnabled(true);
        this._imgScore01.setCascadeColorEnabled(true);
        this._imgScore01.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgScore01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgScore01);
        this._imgScore01.loadTexture("game/popups/result/BlueBox.png", 1);
        this._imgScore01.setUnifySizeEnabled(false);
        this._imgScore01.ignoreContentAdaptWithSize(false);
        this._imgScore01.setContentSize(cc.size(121, 102));
        this._imgScore01.setTouchEnabled(false);

        ///// # _txtScore01
        this._txtScore01 = new ck.Text();
        this._txtScore01.setName("_txtScore01");
        this._nodeScore01.addChild(this._txtScore01);
        this._txtScore01.setCascadeOpacityEnabled(true);
        this._txtScore01.setCascadeColorEnabled(true);
        this._txtScore01.setAnchorPoint(cc.p(0.5, 0.5));
        let _txtScore01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtScore01);
        this._txtScore01.setTouchEnabled(false);
        this._txtScore01.ignoreContentAdaptWithSize(true);
        this._txtScore01.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtScore01.setDefaultFontSize(60);
        this._txtScore01.setTextHorizontalAlignment(1);
        this._txtScore01.setTextVerticalAlignment(1);
        this._txtScore01.enableOutline(cc.color(162, 41, 173, 255), 2);

        ///// # _txtScoreGapHeader
        this._txtScoreGapHeader = new ck.Text();
        this._txtScoreGapHeader.setName("_txtScoreGapHeader");
        this._layoutRoot.addChild(this._txtScoreGapHeader);
        this._txtScoreGapHeader.setCascadeOpacityEnabled(true);
        this._txtScoreGapHeader.setCascadeColorEnabled(true);
        this._txtScoreGapHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtScoreGapHeader, 0.5, 0.5771);
        this._txtScoreGapHeader.setTextColor(cc.color(255, 233, 51, 255));
        let _txtScoreGapHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtScoreGapHeader);
        _txtScoreGapHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtScoreGapHeaderLayoutComponent.setPositionPercentX(0.5);
        _txtScoreGapHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtScoreGapHeaderLayoutComponent.setPositionPercentY(0.5771);
        this._txtScoreGapHeader.setTouchEnabled(false);
        this._txtScoreGapHeader.ignoreContentAdaptWithSize(true);
        this._txtScoreGapHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtScoreGapHeader.setDefaultFontSize(65);
        this._txtScoreGapHeader.setString(gm.localize.getText("TXT_POINT_GAP"));
        this._txtScoreGapHeader.setTextHorizontalAlignment(1);
        this._txtScoreGapHeader.setTextVerticalAlignment(1);
        this._txtScoreGapHeader.enableOutline(cc.color(97, 58, 17, 255), 3);

        ///// # _nodeScoreGap
        this._nodeScoreGap = new cc.Node();
        this._nodeScoreGap.setName("_nodeScoreGap");
        this._layoutRoot.addChild(this._nodeScoreGap);
        this._nodeScoreGap.setCascadeOpacityEnabled(true);
        this._nodeScoreGap.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeScoreGap, 0.5, 0.5);
        let _nodeScoreGapLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeScoreGap);
        _nodeScoreGapLayoutComponent.setPositionPercentXEnabled(true);
        _nodeScoreGapLayoutComponent.setPositionPercentX(0.5);
        _nodeScoreGapLayoutComponent.setPositionPercentYEnabled(true);
        _nodeScoreGapLayoutComponent.setPositionPercentY(0.5);

        ///// # _imgScoreGap
        this._imgScoreGap = new ccui.ImageView();
        this._imgScoreGap.setName("_imgScoreGap");
        this._nodeScoreGap.addChild(this._imgScoreGap);
        this._imgScoreGap.setCascadeOpacityEnabled(true);
        this._imgScoreGap.setCascadeColorEnabled(true);
        this._imgScoreGap.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgScoreGapLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgScoreGap);
        this._imgScoreGap.loadTexture("game/popups/result/OrangeBox.png", 1);
        this._imgScoreGap.setUnifySizeEnabled(false);
        this._imgScoreGap.ignoreContentAdaptWithSize(false);
        this._imgScoreGap.setContentSize(cc.size(121, 102));
        this._imgScoreGap.setTouchEnabled(false);

        ///// # _txtScoreGap
        this._txtScoreGap = new ck.Text();
        this._txtScoreGap.setName("_txtScoreGap");
        this._nodeScoreGap.addChild(this._txtScoreGap);
        this._txtScoreGap.setCascadeOpacityEnabled(true);
        this._txtScoreGap.setCascadeColorEnabled(true);
        this._txtScoreGap.setAnchorPoint(cc.p(0.5, 0.5));
        let _txtScoreGapLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtScoreGap);
        this._txtScoreGap.setTouchEnabled(false);
        this._txtScoreGap.ignoreContentAdaptWithSize(true);
        this._txtScoreGap.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtScoreGap.setDefaultFontSize(60);
        this._txtScoreGap.setTextHorizontalAlignment(1);
        this._txtScoreGap.setTextVerticalAlignment(1);
        this._txtScoreGap.enableOutline(cc.color(192, 93, 5, 255), 3);

        ///// # _layoutSummary
        this._layoutSummary = new ccui.Layout();
        this._layoutSummary.setName("_layoutSummary");
        this._layoutRoot.addChild(this._layoutSummary);
        this._layoutSummary.setCascadeOpacityEnabled(true);
        this._layoutSummary.setCascadeColorEnabled(true);
        this._layoutSummary.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutSummary, 0.5, 0.4865);
        let _layoutSummaryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSummary);
        _layoutSummaryLayoutComponent.setPositionPercentXEnabled(true);
        _layoutSummaryLayoutComponent.setPositionPercentX(0.5);
        _layoutSummaryLayoutComponent.setPositionPercentYEnabled(true);
        _layoutSummaryLayoutComponent.setPositionPercentY(0.4865);
        _layoutSummaryLayoutComponent.setPercentWidthEnabled(true);
        _layoutSummaryLayoutComponent.setPercentWidth(1);
        this._layoutSummary.setTouchEnabled(true);
        this._layoutSummary.setUnifySizeEnabled(false);
        this._layoutSummary.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutSummary, 1);
        this._layoutSummary.setContentSize(cc.size(this._layoutSummary.width, 485));

        ///// # _imgSummaryBgr
        this._imgSummaryBgr = new ccui.ImageView();
        this._imgSummaryBgr.setName("_imgSummaryBgr");
        this._layoutSummary.addChild(this._imgSummaryBgr);
        this._imgSummaryBgr.setCascadeOpacityEnabled(true);
        this._imgSummaryBgr.setCascadeColorEnabled(true);
        this._imgSummaryBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgSummaryBgr, 0.5, 0.5);
        let _imgSummaryBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgSummaryBgr);
        _imgSummaryBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgSummaryBgrLayoutComponent.setPositionPercentX(0.5);
        _imgSummaryBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgSummaryBgrLayoutComponent.setPositionPercentY(0.5);
        _imgSummaryBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgSummaryBgrLayoutComponent.setPercentWidth(1);
        _imgSummaryBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgSummaryBgrLayoutComponent.setPercentHeight(1);
        this._imgSummaryBgr.loadTexture("game/popups/result/Background.png", 1);
        this._imgSummaryBgr.setUnifySizeEnabled(false);
        this._imgSummaryBgr.ignoreContentAdaptWithSize(false);
        this._imgSummaryBgr.setScale9Enabled(true);
        this._imgSummaryBgr.setCapInsets(cc.rect(315, 210, 9, 396));
        ck.UIUtils.setSizePercent(this._imgSummaryBgr, 1, 1);
        this._imgSummaryBgr.setTouchEnabled(false);

        ///// # _imgSummaryHeaderBackground
        this._imgSummaryHeaderBackground = new ccui.ImageView();
        this._imgSummaryHeaderBackground.setName("_imgSummaryHeaderBackground");
        this._layoutSummary.addChild(this._imgSummaryHeaderBackground);
        this._imgSummaryHeaderBackground.setCascadeOpacityEnabled(true);
        this._imgSummaryHeaderBackground.setCascadeColorEnabled(true);
        this._imgSummaryHeaderBackground.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgSummaryHeaderBackground, 0.5, 1);
        let _imgSummaryHeaderBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgSummaryHeaderBackground);
        _imgSummaryHeaderBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgSummaryHeaderBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgSummaryHeaderBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgSummaryHeaderBackgroundLayoutComponent.setPositionPercentY(1);
        this._imgSummaryHeaderBackground.loadTexture("game/popups/result/BackgroundHeader.png", 1);
        this._imgSummaryHeaderBackground.setUnifySizeEnabled(false);
        this._imgSummaryHeaderBackground.ignoreContentAdaptWithSize(false);
        this._imgSummaryHeaderBackground.setContentSize(cc.size(585, 208));
        this._imgSummaryHeaderBackground.setTouchEnabled(false);

        ///// # _imgSummaryHeader
        this._imgSummaryHeader = new ccui.ImageView();
        this._imgSummaryHeader.setName("_imgSummaryHeader");
        this._imgSummaryHeaderBackground.addChild(this._imgSummaryHeader);
        this._imgSummaryHeader.setCascadeOpacityEnabled(true);
        this._imgSummaryHeader.setCascadeColorEnabled(true);
        this._imgSummaryHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgSummaryHeader, 0.5, 0.0889);
        let _imgSummaryHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgSummaryHeader);
        _imgSummaryHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgSummaryHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgSummaryHeaderLayoutComponent.setPercentWidthEnabled(true);
        _imgSummaryHeaderLayoutComponent.setPercentWidth(0.412);
        this._imgSummaryHeader.loadTexture("texts/game/SummaryGreen.png", 1);
        this._imgSummaryHeader.setTouchEnabled(false);

        ///// # _gridViewSummary
        this._gridViewSummary = new ccui.Layout();
        this._gridViewSummary.setName("_gridViewSummary");
        this._layoutSummary.addChild(this._gridViewSummary);
        this._gridViewSummary.setCascadeOpacityEnabled(true);
        this._gridViewSummary.setCascadeColorEnabled(true);
        this._gridViewSummary.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridViewSummary, 0.5, 0.5);
        let _gridViewSummaryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewSummary);
        _gridViewSummaryLayoutComponent.setPositionPercentXEnabled(true);
        _gridViewSummaryLayoutComponent.setPositionPercentX(0.5);
        _gridViewSummaryLayoutComponent.setPositionPercentYEnabled(true);
        _gridViewSummaryLayoutComponent.setPositionPercentY(0.5);
        _gridViewSummaryLayoutComponent.setPercentWidthEnabled(true);
        _gridViewSummaryLayoutComponent.setPercentWidth(1);
        this._gridViewSummary.setTouchEnabled(false);
        this._gridViewSummary.setUnifySizeEnabled(false);
        this._gridViewSummary.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._gridViewSummary, 1);
        this._gridViewSummary.setContentSize(cc.size(this._gridViewSummary.width, 485));

        ///// # _layoutSummaryGold
        this._layoutSummaryGold = new ccui.Layout();
        this._layoutSummaryGold.setName("_layoutSummaryGold");
        this._gridViewSummary.addChild(this._layoutSummaryGold);
        this._layoutSummaryGold.setCascadeOpacityEnabled(true);
        this._layoutSummaryGold.setCascadeColorEnabled(true);
        this._layoutSummaryGold.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutSummaryGold, 0.5, 0.8763);
        let _layoutSummaryGoldLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSummaryGold);
        _layoutSummaryGoldLayoutComponent.setPercentWidthEnabled(true);
        _layoutSummaryGoldLayoutComponent.setPercentWidth(1);
        this._layoutSummaryGold.setTouchEnabled(false);
        this._layoutSummaryGold.setUnifySizeEnabled(false);
        this._layoutSummaryGold.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutSummaryGold, 1);
        this._layoutSummaryGold.setContentSize(cc.size(this._layoutSummaryGold.width, 120));

        ///// # _nodeScoreGapSummary
        this._nodeScoreGapSummary = new cc.Node();
        this._nodeScoreGapSummary.setName("_nodeScoreGapSummary");
        this._layoutSummaryGold.addChild(this._nodeScoreGapSummary);
        this._nodeScoreGapSummary.setCascadeOpacityEnabled(true);
        this._nodeScoreGapSummary.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeScoreGapSummary, 0.1469, 0.5);
        let _nodeScoreGapSummaryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeScoreGapSummary);
        _nodeScoreGapSummaryLayoutComponent.setPositionPercentXEnabled(true);
        _nodeScoreGapSummaryLayoutComponent.setPositionPercentX(0.1469);
        _nodeScoreGapSummaryLayoutComponent.setPositionPercentYEnabled(true);
        _nodeScoreGapSummaryLayoutComponent.setPositionPercentY(0.5);

        ///// # _imgScoreGapSummary
        this._imgScoreGapSummary = new ccui.ImageView();
        this._imgScoreGapSummary.setName("_imgScoreGapSummary");
        this._nodeScoreGapSummary.addChild(this._imgScoreGapSummary);
        this._imgScoreGapSummary.setCascadeOpacityEnabled(true);
        this._imgScoreGapSummary.setCascadeColorEnabled(true);
        this._imgScoreGapSummary.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgScoreGapSummaryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgScoreGapSummary);
        _imgScoreGapSummaryLayoutComponent.setPositionPercentYEnabled(true);
        _imgScoreGapSummaryLayoutComponent.setPositionPercentY(0);
        this._imgScoreGapSummary.loadTexture("game/popups/result/OrangeBox.png", 1);
        this._imgScoreGapSummary.setUnifySizeEnabled(false);
        this._imgScoreGapSummary.ignoreContentAdaptWithSize(false);
        this._imgScoreGapSummary.setContentSize(cc.size(121, 102));
        this._imgScoreGapSummary.setTouchEnabled(false);

        ///// # _txtScoreGapSummary
        this._txtScoreGapSummary = new ck.Text();
        this._txtScoreGapSummary.setName("_txtScoreGapSummary");
        this._nodeScoreGapSummary.addChild(this._txtScoreGapSummary);
        this._txtScoreGapSummary.setCascadeOpacityEnabled(true);
        this._txtScoreGapSummary.setCascadeColorEnabled(true);
        this._txtScoreGapSummary.setAnchorPoint(cc.p(0.5, 0.5));
        let _txtScoreGapSummaryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtScoreGapSummary);
        _txtScoreGapSummaryLayoutComponent.setPositionPercentYEnabled(true);
        _txtScoreGapSummaryLayoutComponent.setPositionPercentY(0);
        this._txtScoreGapSummary.setTouchEnabled(false);
        this._txtScoreGapSummary.ignoreContentAdaptWithSize(true);
        this._txtScoreGapSummary.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtScoreGapSummary.setDefaultFontSize(60);
        this._txtScoreGapSummary.setTextHorizontalAlignment(1);
        this._txtScoreGapSummary.setTextVerticalAlignment(1);
        this._txtScoreGapSummary.enableOutline(cc.color(192, 93, 5, 255), 3);

        ///// # _txtX
        this._txtX = new ck.Text();
        this._txtX.setName("_txtX");
        this._layoutSummaryGold.addChild(this._txtX);
        this._txtX.setCascadeOpacityEnabled(true);
        this._txtX.setCascadeColorEnabled(true);
        this._txtX.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtX, 0.2859, 0.54);
        this._txtX.setTextColor(cc.color(254, 225, 12, 255));
        let _txtXLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtX);
        _txtXLayoutComponent.setPositionPercentXEnabled(true);
        _txtXLayoutComponent.setPositionPercentX(0.2859);
        _txtXLayoutComponent.setPositionPercentYEnabled(true);
        _txtXLayoutComponent.setPositionPercentY(0.54);
        this._txtX.setTouchEnabled(false);
        this._txtX.ignoreContentAdaptWithSize(true);
        this._txtX.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtX.setDefaultFontSize(45);
        this._txtX.setString("x");
        this._txtX.setTextHorizontalAlignment(1);
        this._txtX.setTextVerticalAlignment(1);
        this._txtX.enableOutline(cc.color(57, 29, 29, 255), 3);

        ///// # _imgBetCoin
        this._imgBetCoin = new ccui.ImageView();
        this._imgBetCoin.setName("_imgBetCoin");
        this._layoutSummaryGold.addChild(this._imgBetCoin);
        this._imgBetCoin.setCascadeOpacityEnabled(true);
        this._imgBetCoin.setCascadeColorEnabled(true);
        this._imgBetCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBetCoin, 0.3553, 0.5);
        let _imgBetCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBetCoin);
        _imgBetCoinLayoutComponent.setPositionPercentXEnabled(true);
        _imgBetCoinLayoutComponent.setPositionPercentX(0.3553);
        _imgBetCoinLayoutComponent.setPositionPercentYEnabled(true);
        _imgBetCoinLayoutComponent.setPositionPercentY(0.5);
        this._imgBetCoin.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgBetCoin.setUnifySizeEnabled(false);
        this._imgBetCoin.ignoreContentAdaptWithSize(false);
        this._imgBetCoin.setContentSize(cc.size(64, 64));
        this._imgBetCoin.setTouchEnabled(false);

        ///// # _txtBetAmount
        this._txtBetAmount = new ck.Text();
        this._txtBetAmount.setName("_txtBetAmount");
        this._layoutSummaryGold.addChild(this._txtBetAmount);
        this._txtBetAmount.setCascadeOpacityEnabled(true);
        this._txtBetAmount.setCascadeColorEnabled(true);
        this._txtBetAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBetAmount, 0.5032, 0.5);
        this._txtBetAmount.setTextColor(cc.color(254, 225, 12, 255));
        let _txtBetAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBetAmount);
        _txtBetAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtBetAmountLayoutComponent.setPositionPercentX(0.5032);
        _txtBetAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtBetAmountLayoutComponent.setPositionPercentY(0.5);
        this._txtBetAmount.setTouchEnabled(false);
        this._txtBetAmount.ignoreContentAdaptWithSize(true);
        this._txtBetAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtBetAmount.setDefaultFontSize(35);
        this._txtBetAmount.setTextHorizontalAlignment(1);
        this._txtBetAmount.setTextVerticalAlignment(1);
        this._txtBetAmount.enableOutline(cc.color(57, 29, 29, 255), 3);

        ///// # _txtEqual
        this._txtEqual = new ck.Text();
        this._txtEqual.setName("_txtEqual");
        this._layoutSummaryGold.addChild(this._txtEqual);
        this._txtEqual.setCascadeOpacityEnabled(true);
        this._txtEqual.setCascadeColorEnabled(true);
        this._txtEqual.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtEqual, 0.6368, 0.5);
        this._txtEqual.setTextColor(cc.color(254, 225, 12, 255));
        let _txtEqualLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtEqual);
        _txtEqualLayoutComponent.setPositionPercentXEnabled(true);
        _txtEqualLayoutComponent.setPositionPercentX(0.6368);
        _txtEqualLayoutComponent.setPositionPercentYEnabled(true);
        _txtEqualLayoutComponent.setPositionPercentY(0.5);
        this._txtEqual.setTouchEnabled(false);
        this._txtEqual.ignoreContentAdaptWithSize(true);
        this._txtEqual.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtEqual.setDefaultFontSize(45);
        this._txtEqual.setString("=");
        this._txtEqual.setTextHorizontalAlignment(1);
        this._txtEqual.setTextVerticalAlignment(1);
        this._txtEqual.enableOutline(cc.color(57, 29, 29, 255), 3);

        ///// # _imgResultCoin
        this._imgResultCoin = new ccui.ImageView();
        this._imgResultCoin.setName("_imgResultCoin");
        this._layoutSummaryGold.addChild(this._imgResultCoin);
        this._imgResultCoin.setCascadeOpacityEnabled(true);
        this._imgResultCoin.setCascadeColorEnabled(true);
        this._imgResultCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgResultCoin, 0.7091, 0.5);
        let _imgResultCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgResultCoin);
        _imgResultCoinLayoutComponent.setPositionPercentXEnabled(true);
        _imgResultCoinLayoutComponent.setPositionPercentX(0.7091);
        _imgResultCoinLayoutComponent.setPositionPercentYEnabled(true);
        _imgResultCoinLayoutComponent.setPositionPercentY(0.5);
        this._imgResultCoin.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgResultCoin.setUnifySizeEnabled(false);
        this._imgResultCoin.ignoreContentAdaptWithSize(false);
        this._imgResultCoin.setContentSize(cc.size(64, 64));
        this._imgResultCoin.setTouchEnabled(false);

        ///// # _txtResultAmount
        this._txtResultAmount = new ck.Text();
        this._txtResultAmount.setName("_txtResultAmount");
        this._layoutSummaryGold.addChild(this._txtResultAmount);
        this._txtResultAmount.setCascadeOpacityEnabled(true);
        this._txtResultAmount.setCascadeColorEnabled(true);
        this._txtResultAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtResultAmount, 0.8554, 0.5);
        this._txtResultAmount.setTextColor(cc.color(254, 225, 12, 255));
        let _txtResultAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtResultAmount);
        _txtResultAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtResultAmountLayoutComponent.setPositionPercentX(0.8554);
        _txtResultAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtResultAmountLayoutComponent.setPositionPercentY(0.5);
        this._txtResultAmount.setTouchEnabled(false);
        this._txtResultAmount.ignoreContentAdaptWithSize(true);
        this._txtResultAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtResultAmount.setDefaultFontSize(35);
        this._txtResultAmount.setTextHorizontalAlignment(1);
        this._txtResultAmount.setTextVerticalAlignment(1);
        this._txtResultAmount.enableOutline(cc.color(57, 29, 29, 255), 3);

        ///// # _layoutHintCorrectGold
        this._layoutHintCorrectGold = new ccui.Layout();
        this._layoutHintCorrectGold.setName("_layoutHintCorrectGold");
        this._gridViewSummary.addChild(this._layoutHintCorrectGold);
        this._layoutHintCorrectGold.setCascadeOpacityEnabled(true);
        this._layoutHintCorrectGold.setCascadeColorEnabled(true);
        this._layoutHintCorrectGold.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutHintCorrectGold, 0, 0.8763);
        let _layoutHintCorrectGoldLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHintCorrectGold);
        _layoutHintCorrectGoldLayoutComponent.setPositionPercentXEnabled(true);
        _layoutHintCorrectGoldLayoutComponent.setPositionPercentX(0);
        _layoutHintCorrectGoldLayoutComponent.setPercentWidthEnabled(true);
        _layoutHintCorrectGoldLayoutComponent.setPercentWidth(1);
        this._layoutHintCorrectGold.setTouchEnabled(false);
        this._layoutHintCorrectGold.setUnifySizeEnabled(false);
        this._layoutHintCorrectGold.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutHintCorrectGold, 1);
        this._layoutHintCorrectGold.setContentSize(cc.size(this._layoutHintCorrectGold.width, 120));
        this._layoutHintCorrectGold.setClippingEnabled(true);

        ///// # _imgHintCorrectGoldBg
        this._imgHintCorrectGoldBg = new ccui.ImageView();
        this._imgHintCorrectGoldBg.setName("_imgHintCorrectGoldBg");
        this._layoutHintCorrectGold.addChild(this._imgHintCorrectGoldBg);
        this._imgHintCorrectGoldBg.setCascadeOpacityEnabled(true);
        this._imgHintCorrectGoldBg.setCascadeColorEnabled(true);
        this._imgHintCorrectGoldBg.setAnchorPoint(cc.p(0.1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHintCorrectGoldBg, 0, 0.5);
        this._imgHintCorrectGoldBg.setColor(cc.color(0, 121, 104, 255));
        let _imgHintCorrectGoldBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHintCorrectGoldBg);
        _imgHintCorrectGoldBgLayoutComponent.setPositionPercentYEnabled(true);
        _imgHintCorrectGoldBgLayoutComponent.setPositionPercentY(0.5);
        _imgHintCorrectGoldBgLayoutComponent.setPercentWidthEnabled(true);
        _imgHintCorrectGoldBgLayoutComponent.setPercentWidth(0.7084);
        _imgHintCorrectGoldBgLayoutComponent.setPercentHeightEnabled(true);
        _imgHintCorrectGoldBgLayoutComponent.setPercentHeight(1);
        this._imgHintCorrectGoldBg.loadTexture("basics/effects/Gradient_01.png", 1);
        this._imgHintCorrectGoldBg.setUnifySizeEnabled(false);
        this._imgHintCorrectGoldBg.ignoreContentAdaptWithSize(false);
        this._imgHintCorrectGoldBg.setScale9Enabled(true);
        this._imgHintCorrectGoldBg.setCapInsets(cc.rect(30, 16, 4, 1));
        ck.UIUtils.setSizePercent(this._imgHintCorrectGoldBg, 0.7084, 1);
        this._imgHintCorrectGoldBg.setTouchEnabled(false);

        ///// # _txtHintCorrectGold
        this._txtHintCorrectGold = new ck.Text();
        this._txtHintCorrectGold.setName("_txtHintCorrectGold");
        this._layoutHintCorrectGold.addChild(this._txtHintCorrectGold);
        this._txtHintCorrectGold.setCascadeOpacityEnabled(true);
        this._txtHintCorrectGold.setCascadeColorEnabled(true);
        this._txtHintCorrectGold.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHintCorrectGold, 0.0475, 0.5);
        let _txtHintCorrectGoldLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHintCorrectGold);
        _txtHintCorrectGoldLayoutComponent.setPositionPercentXEnabled(true);
        _txtHintCorrectGoldLayoutComponent.setPositionPercentX(0.0475);
        _txtHintCorrectGoldLayoutComponent.setPositionPercentYEnabled(true);
        _txtHintCorrectGoldLayoutComponent.setPositionPercentY(0.5);
        _txtHintCorrectGoldLayoutComponent.setPercentWidthEnabled(true);
        _txtHintCorrectGoldLayoutComponent.setPercentWidth(0.545);
        this._txtHintCorrectGold.setTouchEnabled(false);
        this._txtHintCorrectGold.setUnifySizeEnabled(false);
        this._txtHintCorrectGold.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtHintCorrectGold, 0.545);
        this._txtHintCorrectGold.setContentSize(cc.size(this._txtHintCorrectGold.width, 99));
        this._txtHintCorrectGold.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHintCorrectGold.setDefaultFontSize(32);
        this._txtHintCorrectGold.setTextHorizontalAlignment(0);
        this._txtHintCorrectGold.setTextVerticalAlignment(1);
        this._txtHintCorrectGold.autoFitMultipleLine();

        ///// # _layoutSummaryExp
        this._layoutSummaryExp = new ccui.Layout();
        this._layoutSummaryExp.setName("_layoutSummaryExp");
        this._gridViewSummary.addChild(this._layoutSummaryExp);
        this._layoutSummaryExp.setCascadeOpacityEnabled(true);
        this._layoutSummaryExp.setCascadeColorEnabled(true);
        this._layoutSummaryExp.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutSummaryExp, 0.5, 0.6804);
        let _layoutSummaryExpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSummaryExp);
        _layoutSummaryExpLayoutComponent.setPositionPercentXEnabled(true);
        _layoutSummaryExpLayoutComponent.setPositionPercentX(0.5);
        _layoutSummaryExpLayoutComponent.setPercentWidthEnabled(true);
        _layoutSummaryExpLayoutComponent.setPercentWidth(1);
        this._layoutSummaryExp.setTouchEnabled(false);
        this._layoutSummaryExp.setUnifySizeEnabled(false);
        this._layoutSummaryExp.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutSummaryExp, 1);
        this._layoutSummaryExp.setContentSize(cc.size(this._layoutSummaryExp.width, 70));

        ///// # _imgXP
        this._imgXP = new ccui.ImageView();
        this._imgXP.setName("_imgXP");
        this._layoutSummaryExp.addChild(this._imgXP);
        this._imgXP.setCascadeOpacityEnabled(true);
        this._imgXP.setCascadeColorEnabled(true);
        this._imgXP.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgXP, 0.3437, 0.52);
        let _imgXPLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgXP);
        _imgXPLayoutComponent.setPositionPercentXEnabled(true);
        _imgXPLayoutComponent.setPositionPercentX(0.3437);
        _imgXPLayoutComponent.setPositionPercentYEnabled(true);
        _imgXPLayoutComponent.setPositionPercentY(0.52);
        this._imgXP.loadTexture("icons/color/stars/Blue.png", 1);
        this._imgXP.setUnifySizeEnabled(false);
        this._imgXP.ignoreContentAdaptWithSize(false);
        this._imgXP.setContentSize(cc.size(64, 64));
        this._imgXP.setTouchEnabled(false);

        ///// # _txtXP
        this._txtXP = new ck.Text();
        this._txtXP.setName("_txtXP");
        this._layoutSummaryExp.addChild(this._txtXP);
        this._txtXP.setCascadeOpacityEnabled(true);
        this._txtXP.setCascadeColorEnabled(true);
        this._txtXP.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtXP, 0.5134, 0.5);
        let _txtXPLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtXP);
        _txtXPLayoutComponent.setPositionPercentXEnabled(true);
        _txtXPLayoutComponent.setPositionPercentX(0.5134);
        _txtXPLayoutComponent.setPositionPercentYEnabled(true);
        _txtXPLayoutComponent.setPositionPercentY(0.5);
        this._txtXP.setTouchEnabled(false);
        this._txtXP.ignoreContentAdaptWithSize(true);
        this._txtXP.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtXP.setDefaultFontSize(45);
        this._txtXP.setTextHorizontalAlignment(1);
        this._txtXP.setTextVerticalAlignment(1);
        this._txtXP.enableOutline(cc.color(57, 29, 29, 255), 3);

        ///// # _layoutBonusExp
        this._layoutBonusExp = new ccui.Layout();
        this._layoutBonusExp.setName("_layoutBonusExp");
        this._layoutSummaryExp.addChild(this._layoutBonusExp);
        this._layoutBonusExp.setCascadeOpacityEnabled(true);
        this._layoutBonusExp.setCascadeColorEnabled(true);
        this._layoutBonusExp.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBonusExp, 0.6802, 0.5083);
        let _layoutBonusExpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBonusExp);
        _layoutBonusExpLayoutComponent.setPercentHeightEnabled(true);
        _layoutBonusExpLayoutComponent.setPercentHeight(1);
        this._layoutBonusExp.setTouchEnabled(true);
        this._layoutBonusExp.setUnifySizeEnabled(false);
        this._layoutBonusExp.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this._layoutBonusExp, 1);
        this._layoutBonusExp.setContentSize(cc.size(203.8898, this._layoutBonusExp.height));

        ///// # _layoutBonusExpIcon
        this._layoutBonusExpIcon = new ccui.Layout();
        this._layoutBonusExpIcon.setName("_layoutBonusExpIcon");
        this._layoutBonusExp.addChild(this._layoutBonusExpIcon);
        this._layoutBonusExpIcon.setCascadeOpacityEnabled(true);
        this._layoutBonusExpIcon.setCascadeColorEnabled(true);
        this._layoutBonusExpIcon.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBonusExpIcon, 0, 0.5);
        let _layoutBonusExpIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBonusExpIcon);
        _layoutBonusExpIconLayoutComponent.setPercentHeightEnabled(true);
        _layoutBonusExpIconLayoutComponent.setPercentHeight(1);
        this._layoutBonusExpIcon.setTouchEnabled(true);
        this._layoutBonusExpIcon.setUnifySizeEnabled(false);
        this._layoutBonusExpIcon.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this._layoutBonusExpIcon, 1);
        this._layoutBonusExpIcon.setContentSize(cc.size(70, this._layoutBonusExpIcon.height));

        ///// # _imgXP2
        this._imgXP2 = new ccui.ImageView();
        this._imgXP2.setName("_imgXP2");
        this._layoutBonusExpIcon.addChild(this._imgXP2);
        this._imgXP2.setCascadeOpacityEnabled(true);
        this._imgXP2.setCascadeColorEnabled(true);
        this._imgXP2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgXP2, 0.5, 0.5);
        let _imgXP2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgXP2);
        _imgXP2LayoutComponent.setPositionPercentXEnabled(true);
        _imgXP2LayoutComponent.setPositionPercentX(0.5);
        _imgXP2LayoutComponent.setPositionPercentYEnabled(true);
        _imgXP2LayoutComponent.setPositionPercentY(0.5);
        this._imgXP2.loadTexture("icons/color/stars/Blue.png", 1);
        this._imgXP2.setUnifySizeEnabled(false);
        this._imgXP2.ignoreContentAdaptWithSize(false);
        this._imgXP2.setContentSize(cc.size(64, 64));
        this._imgXP2.setTouchEnabled(false);

        ///// # _txtBonus
        this._txtBonus = new ck.Text();
        this._txtBonus.setName("_txtBonus");
        this._layoutBonusExpIcon.addChild(this._txtBonus);
        this._txtBonus.setCascadeOpacityEnabled(true);
        this._txtBonus.setCascadeColorEnabled(true);
        this._txtBonus.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._txtBonus, 0.5, 0);
        this._txtBonus.setTextColor(cc.color(129, 198, 255, 255));
        let _txtBonusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBonus);
        _txtBonusLayoutComponent.setPositionPercentXEnabled(true);
        _txtBonusLayoutComponent.setPositionPercentX(0.5);
        _txtBonusLayoutComponent.setPositionPercentYEnabled(true);
        _txtBonusLayoutComponent.setPositionPercentY(0);
        _txtBonusLayoutComponent.setPercentWidthEnabled(true);
        _txtBonusLayoutComponent.setPercentWidth(1);
        this._txtBonus.setTouchEnabled(false);
        this._txtBonus.setUnifySizeEnabled(false);
        this._txtBonus.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtBonus, 1);
        this._txtBonus.setContentSize(cc.size(this._txtBonus.width, 25));
        this._txtBonus.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBonus.setDefaultFontSize(24);
        this._txtBonus.setString(gm.localize.getText("TXT_BONUS"));
        this._txtBonus.setTextHorizontalAlignment(1);
        this._txtBonus.setTextVerticalAlignment(1);
        this._txtBonus.enableOutline(cc.color(0, 55, 100, 255), 1);
        this._txtBonus.enableShadow(cc.color(0, 45, 82, 255), cc.size(1, -1), 0);
        this._txtBonus.autoFitSingleLine();

        ///// # _txtBonusXP
        this._txtBonusXP = new ck.Text();
        this._txtBonusXP.setName("_txtBonusXP");
        this._layoutBonusExp.addChild(this._txtBonusXP);
        this._txtBonusXP.setCascadeOpacityEnabled(true);
        this._txtBonusXP.setCascadeColorEnabled(true);
        this._txtBonusXP.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBonusXP, 0.3433, 0.5);
        let _txtBonusXPLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBonusXP);
        _txtBonusXPLayoutComponent.setPositionPercentYEnabled(true);
        _txtBonusXPLayoutComponent.setPositionPercentY(0.5);
        this._txtBonusXP.setTouchEnabled(false);
        this._txtBonusXP.setUnifySizeEnabled(false);
        this._txtBonusXP.ignoreContentAdaptWithSize(false);
        this._txtBonusXP.setContentSize(cc.size(134.1126, 40));
        this._txtBonusXP.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtBonusXP.setDefaultFontSize(33);
        this._txtBonusXP.setTextHorizontalAlignment(0);
        this._txtBonusXP.setTextVerticalAlignment(1);
        this._txtBonusXP.enableOutline(cc.color(57, 29, 29, 255), 2);
        this._txtBonusXP.autoFitSingleLine();

        ///// # _layoutSummaryEventToken
        this._layoutSummaryEventToken = new ccui.Layout();
        this._layoutSummaryEventToken.setName("_layoutSummaryEventToken");
        this._gridViewSummary.addChild(this._layoutSummaryEventToken);
        this._layoutSummaryEventToken.setCascadeOpacityEnabled(true);
        this._layoutSummaryEventToken.setCascadeColorEnabled(true);
        this._layoutSummaryEventToken.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutSummaryEventToken, 0.5, 0.5258);
        let _layoutSummaryEventTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSummaryEventToken);
        _layoutSummaryEventTokenLayoutComponent.setPositionPercentXEnabled(true);
        _layoutSummaryEventTokenLayoutComponent.setPositionPercentX(0.5);
        _layoutSummaryEventTokenLayoutComponent.setPercentWidthEnabled(true);
        _layoutSummaryEventTokenLayoutComponent.setPercentWidth(1);
        this._layoutSummaryEventToken.setTouchEnabled(false);
        this._layoutSummaryEventToken.setUnifySizeEnabled(false);
        this._layoutSummaryEventToken.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutSummaryEventToken, 1);
        this._layoutSummaryEventToken.setContentSize(cc.size(this._layoutSummaryEventToken.width, 80));

        ///// # _layoutProgressToken
        this._layoutProgressToken = new ccui.Layout();
        this._layoutProgressToken.setName("_layoutProgressToken");
        this._layoutSummaryEventToken.addChild(this._layoutProgressToken);
        this._layoutProgressToken.setCascadeOpacityEnabled(true);
        this._layoutProgressToken.setCascadeColorEnabled(true);
        this._layoutProgressToken.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutProgressToken, 0.5, 0.5);
        let _layoutProgressTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProgressToken);
        _layoutProgressTokenLayoutComponent.setPositionPercentXEnabled(true);
        _layoutProgressTokenLayoutComponent.setPositionPercentX(0.5);
        _layoutProgressTokenLayoutComponent.setPositionPercentYEnabled(true);
        _layoutProgressTokenLayoutComponent.setPositionPercentY(0.5);
        this._layoutProgressToken.setTouchEnabled(false);
        this._layoutProgressToken.setUnifySizeEnabled(false);
        this._layoutProgressToken.ignoreContentAdaptWithSize(false);
        this._layoutProgressToken.setContentSize(cc.size(510, 44));

        ///// # _imgProgressTokenBackground
        this._imgProgressTokenBackground = new ccui.ImageView();
        this._imgProgressTokenBackground.setName("_imgProgressTokenBackground");
        this._layoutProgressToken.addChild(this._imgProgressTokenBackground);
        this._imgProgressTokenBackground.setCascadeOpacityEnabled(true);
        this._imgProgressTokenBackground.setCascadeColorEnabled(true);
        this._imgProgressTokenBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgProgressTokenBackground, 0.5, 0.5);
        let _imgProgressTokenBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgProgressTokenBackground);
        _imgProgressTokenBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgProgressTokenBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgProgressTokenBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgProgressTokenBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgProgressTokenBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgProgressTokenBackgroundLayoutComponent.setPercentWidth(1);
        _imgProgressTokenBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgProgressTokenBackgroundLayoutComponent.setPercentHeight(1);
        this._imgProgressTokenBackground.loadTexture("basics/bars/Bar_01.png", 1);
        this._imgProgressTokenBackground.setUnifySizeEnabled(false);
        this._imgProgressTokenBackground.ignoreContentAdaptWithSize(false);
        this._imgProgressTokenBackground.setScale9Enabled(true);
        this._imgProgressTokenBackground.setCapInsets(cc.rect(164, 5, 170, 7));
        ck.UIUtils.setSizePercent(this._imgProgressTokenBackground, 1, 1);
        this._imgProgressTokenBackground.setTouchEnabled(false);

        ///// # _loadingBarToken
        this._loadingBarToken = new ck.LoadingBar();
        this._loadingBarToken.setName("_loadingBarToken");
        this._layoutProgressToken.addChild(this._loadingBarToken);
        this._loadingBarToken.setCascadeOpacityEnabled(true);
        this._loadingBarToken.setCascadeColorEnabled(true);
        this._loadingBarToken.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._loadingBarToken, 0.5, 0.515);
        let _loadingBarTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._loadingBarToken);
        _loadingBarTokenLayoutComponent.setPositionPercentXEnabled(true);
        _loadingBarTokenLayoutComponent.setPositionPercentX(0.5);
        _loadingBarTokenLayoutComponent.setPositionPercentYEnabled(true);
        _loadingBarTokenLayoutComponent.setPositionPercentY(0.515);
        this._loadingBarToken.setTouchEnabled(false);
        this._loadingBarToken.setUnifySizeEnabled(false);
        this._loadingBarToken.ignoreContentAdaptWithSize(false);
        this._loadingBarToken.setContentSize(cc.size(505, 37));
        this._loadingBarToken.loadTexture("basics/bars/Bar_02.png", 1);

        ///// # _imgIconProgressToken
        this._imgIconProgressToken = new ccui.ImageView();
        this._imgIconProgressToken.setName("_imgIconProgressToken");
        this._layoutProgressToken.addChild(this._imgIconProgressToken);
        this._imgIconProgressToken.setCascadeOpacityEnabled(true);
        this._imgIconProgressToken.setCascadeColorEnabled(true);
        this._imgIconProgressToken.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconProgressToken, 0, 0.5);
        let _imgIconProgressTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconProgressToken);
        _imgIconProgressTokenLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconProgressTokenLayoutComponent.setPositionPercentX(0);
        _imgIconProgressTokenLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconProgressTokenLayoutComponent.setPositionPercentY(0.5);
        this._imgIconProgressToken.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIconProgressToken.setUnifySizeEnabled(false);
        this._imgIconProgressToken.ignoreContentAdaptWithSize(false);
        this._imgIconProgressToken.setContentSize(cc.size(64, 64));
        this._imgIconProgressToken.setTouchEnabled(false);

        ///// # _imgToken
        this._imgToken = new ccui.ImageView();
        this._imgToken.setName("_imgToken");
        this._layoutProgressToken.addChild(this._imgToken);
        this._imgToken.setCascadeOpacityEnabled(true);
        this._imgToken.setCascadeColorEnabled(true);
        this._imgToken.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgToken, 1, 0.5);
        let _imgTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken);
        _imgTokenLayoutComponent.setPositionPercentXEnabled(true);
        _imgTokenLayoutComponent.setPositionPercentX(1);
        _imgTokenLayoutComponent.setPositionPercentYEnabled(true);
        _imgTokenLayoutComponent.setPositionPercentY(0.5);
        this._imgToken.loadTexture("icons/color/tokens/DualWheelToken.png", 1);
        this._imgToken.setUnifySizeEnabled(false);
        this._imgToken.ignoreContentAdaptWithSize(false);
        this._imgToken.setContentSize(cc.size(64, 64));
        this._imgToken.setTouchEnabled(false);

        ///// # _txtAmontToken
        this._txtAmontToken = new ck.Text();
        this._txtAmontToken.setName("_txtAmontToken");
        this._imgToken.addChild(this._txtAmontToken);
        this._txtAmontToken.setCascadeOpacityEnabled(true);
        this._txtAmontToken.setCascadeColorEnabled(true);
        this._txtAmontToken.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmontToken, 0.5, 0.13);
        let _txtAmontTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmontToken);
        _txtAmontTokenLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmontTokenLayoutComponent.setPositionPercentX(0.5);
        _txtAmontTokenLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmontTokenLayoutComponent.setPositionPercentY(0.13);
        this._txtAmontToken.setTouchEnabled(false);
        this._txtAmontToken.setUnifySizeEnabled(false);
        this._txtAmontToken.ignoreContentAdaptWithSize(false);
        this._txtAmontToken.setContentSize(cc.size(50, 36));
        this._txtAmontToken.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmontToken.setDefaultFontSize(30);
        this._txtAmontToken.setString("1");
        this._txtAmontToken.setTextHorizontalAlignment(1);
        this._txtAmontToken.setTextVerticalAlignment(1);
        this._txtAmontToken.enableOutline(cc.color(113, 53, 13, 255), 2);
        this._txtAmontToken.enableShadow(cc.color(113, 53, 13, 255), cc.size(0, -1), 0);
        this._txtAmontToken.autoFitSingleLine();

        ///// # _txtProgressTokenStatus
        this._txtProgressTokenStatus = new ck.Text();
        this._txtProgressTokenStatus.setName("_txtProgressTokenStatus");
        this._layoutProgressToken.addChild(this._txtProgressTokenStatus);
        this._txtProgressTokenStatus.setCascadeOpacityEnabled(true);
        this._txtProgressTokenStatus.setCascadeColorEnabled(true);
        this._txtProgressTokenStatus.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtProgressTokenStatus, 0.5, 0.5);
        let _txtProgressTokenStatusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtProgressTokenStatus);
        _txtProgressTokenStatusLayoutComponent.setPositionPercentXEnabled(true);
        _txtProgressTokenStatusLayoutComponent.setPositionPercentX(0.5);
        _txtProgressTokenStatusLayoutComponent.setPositionPercentYEnabled(true);
        _txtProgressTokenStatusLayoutComponent.setPositionPercentY(0.5);
        this._txtProgressTokenStatus.setTouchEnabled(false);
        this._txtProgressTokenStatus.setUnifySizeEnabled(false);
        this._txtProgressTokenStatus.ignoreContentAdaptWithSize(false);
        this._txtProgressTokenStatus.setContentSize(cc.size(410, 36));
        this._txtProgressTokenStatus.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtProgressTokenStatus.setDefaultFontSize(30);
        this._txtProgressTokenStatus.setString("999,999/999,999");
        this._txtProgressTokenStatus.setTextHorizontalAlignment(1);
        this._txtProgressTokenStatus.setTextVerticalAlignment(1);
        this._txtProgressTokenStatus.enableOutline(cc.color(0, 94, 105, 255), 1);
        this._txtProgressTokenStatus.autoFitSingleLine();

        ///// # _layoutSummaryRewards
        this._layoutSummaryRewards = new ccui.Layout();
        this._layoutSummaryRewards.setName("_layoutSummaryRewards");
        this._gridViewSummary.addChild(this._layoutSummaryRewards);
        this._layoutSummaryRewards.setCascadeOpacityEnabled(true);
        this._layoutSummaryRewards.setCascadeColorEnabled(true);
        this._layoutSummaryRewards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutSummaryRewards, 0.5, 0.366);
        let _layoutSummaryRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSummaryRewards);
        _layoutSummaryRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutSummaryRewardsLayoutComponent.setPositionPercentX(0.5);
        _layoutSummaryRewardsLayoutComponent.setPercentWidthEnabled(true);
        _layoutSummaryRewardsLayoutComponent.setPercentWidth(1);
        this._layoutSummaryRewards.setTouchEnabled(false);
        this._layoutSummaryRewards.setUnifySizeEnabled(false);
        this._layoutSummaryRewards.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutSummaryRewards, 1);
        this._layoutSummaryRewards.setContentSize(cc.size(this._layoutSummaryRewards.width, 75));

        ///// # _gridViewRewards
        this._gridViewRewards = new ck.GridViewVertical();
        this._gridViewRewards.setName("_gridViewRewards");
        this._layoutSummaryRewards.addChild(this._gridViewRewards);
        this._gridViewRewards.setCascadeOpacityEnabled(true);
        this._gridViewRewards.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._gridViewRewards, 0.5, 0.5);
        let _gridViewRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewRewards);
        _gridViewRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _gridViewRewardsLayoutComponent.setPositionPercentX(0.5);
        _gridViewRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _gridViewRewardsLayoutComponent.setPositionPercentY(0.5);

        ///// # _layoutSummaryCollectionRewards
        this._layoutSummaryCollectionRewards = new ccui.Layout();
        this._layoutSummaryCollectionRewards.setName("_layoutSummaryCollectionRewards");
        this._gridViewSummary.addChild(this._layoutSummaryCollectionRewards);
        this._layoutSummaryCollectionRewards.setCascadeOpacityEnabled(true);
        this._layoutSummaryCollectionRewards.setCascadeColorEnabled(true);
        this._layoutSummaryCollectionRewards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutSummaryCollectionRewards, 0.5, 0.1443);
        let _layoutSummaryCollectionRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSummaryCollectionRewards);
        _layoutSummaryCollectionRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutSummaryCollectionRewardsLayoutComponent.setPositionPercentX(0.5);
        _layoutSummaryCollectionRewardsLayoutComponent.setPercentWidthEnabled(true);
        _layoutSummaryCollectionRewardsLayoutComponent.setPercentWidth(1);
        this._layoutSummaryCollectionRewards.setTouchEnabled(false);
        this._layoutSummaryCollectionRewards.setUnifySizeEnabled(false);
        this._layoutSummaryCollectionRewards.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutSummaryCollectionRewards, 1);
        this._layoutSummaryCollectionRewards.setContentSize(cc.size(this._layoutSummaryCollectionRewards.width, 140));

        ///// # _gridViewCardCollectionRewards
        this._gridViewCardCollectionRewards = new ck.GridViewVertical();
        this._gridViewCardCollectionRewards.setName("_gridViewCardCollectionRewards");
        this._layoutSummaryCollectionRewards.addChild(this._gridViewCardCollectionRewards);
        this._gridViewCardCollectionRewards.setCascadeOpacityEnabled(true);
        this._gridViewCardCollectionRewards.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._gridViewCardCollectionRewards, 0.5, 0.5);
        let _gridViewCardCollectionRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewCardCollectionRewards);
        _gridViewCardCollectionRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _gridViewCardCollectionRewardsLayoutComponent.setPositionPercentX(0.5);
        _gridViewCardCollectionRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _gridViewCardCollectionRewardsLayoutComponent.setPositionPercentY(0.5);

        ///// # _layoutHintTax
        this._layoutHintTax = new ccui.Layout();
        this._layoutHintTax.setName("_layoutHintTax");
        this._layoutSummary.addChild(this._layoutHintTax);
        this._layoutHintTax.setCascadeOpacityEnabled(true);
        this._layoutHintTax.setCascadeColorEnabled(true);
        this._layoutHintTax.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutHintTax, 0.5, 0);
        let _layoutHintTaxLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHintTax);
        _layoutHintTaxLayoutComponent.setPositionPercentXEnabled(true);
        _layoutHintTaxLayoutComponent.setPositionPercentX(0.5);
        _layoutHintTaxLayoutComponent.setPercentWidthEnabled(true);
        _layoutHintTaxLayoutComponent.setPercentWidth(1);
        this._layoutHintTax.setTouchEnabled(true);
        this._layoutHintTax.setUnifySizeEnabled(false);
        this._layoutHintTax.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutHintTax, 1);
        this._layoutHintTax.setContentSize(cc.size(this._layoutHintTax.width, 40));

        ///// # _txtHintTax
        this._txtHintTax = new ck.Text();
        this._txtHintTax.setName("_txtHintTax");
        this._layoutHintTax.addChild(this._txtHintTax);
        this._txtHintTax.setCascadeOpacityEnabled(true);
        this._txtHintTax.setCascadeColorEnabled(true);
        this._txtHintTax.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHintTax, 0.5, 0.5);
        let _txtHintTaxLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHintTax);
        _txtHintTaxLayoutComponent.setPositionPercentXEnabled(true);
        _txtHintTaxLayoutComponent.setPositionPercentX(0.5);
        _txtHintTaxLayoutComponent.setPositionPercentYEnabled(true);
        _txtHintTaxLayoutComponent.setPositionPercentY(0.5);
        this._txtHintTax.setTouchEnabled(false);
        this._txtHintTax.ignoreContentAdaptWithSize(true);
        this._txtHintTax.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHintTax.setDefaultFontSize(25);
        this._txtHintTax.setTextHorizontalAlignment(0);
        this._txtHintTax.setTextVerticalAlignment(0);
        this._txtHintTax.enableOutline(cc.color(0, 0, 0, 255), 1);
        this._txtHintTax.enableShadow(cc.color(0, 0, 0, 255), cc.size(0, -1), 0);
        this._txtHintTax.autoFitSingleLine();

        ///// # _txtCorrectGoldEffect
        this._txtCorrectGoldEffect = new ck.Text();
        this._txtCorrectGoldEffect.setName("_txtCorrectGoldEffect");
        this._layoutRoot.addChild(this._txtCorrectGoldEffect);
        this._txtCorrectGoldEffect.setCascadeOpacityEnabled(true);
        this._txtCorrectGoldEffect.setCascadeColorEnabled(true);
        this._txtCorrectGoldEffect.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCorrectGoldEffect, 0.5, 0.0176);
        this._txtCorrectGoldEffect.setTextColor(cc.color(255, 255, 141, 255));
        let _txtCorrectGoldEffectLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCorrectGoldEffect);
        _txtCorrectGoldEffectLayoutComponent.setPositionPercentXEnabled(true);
        _txtCorrectGoldEffectLayoutComponent.setPositionPercentX(0.5);
        this._txtCorrectGoldEffect.setTouchEnabled(false);
        this._txtCorrectGoldEffect.ignoreContentAdaptWithSize(true);
        this._txtCorrectGoldEffect.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCorrectGoldEffect.setDefaultFontSize(20);
        this._txtCorrectGoldEffect.setTextHorizontalAlignment(0);
        this._txtCorrectGoldEffect.setTextVerticalAlignment(0);

        ///// # _nodeShareReward
        this._nodeShareReward = new ShareImageRewardWidget();
        this._nodeShareReward.setName("_nodeShareReward");
        this._layoutRoot.addChild(this._nodeShareReward);
        this._nodeShareReward.setCascadeOpacityEnabled(true);
        this._nodeShareReward.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeShareReward, 0.5, 0.15);
        let _nodeShareRewardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeShareReward);
        _nodeShareRewardLayoutComponent.setPositionPercentXEnabled(true);
        _nodeShareRewardLayoutComponent.setPositionPercentX(0.5);
        _nodeShareRewardLayoutComponent.setPositionPercentYEnabled(true);
        _nodeShareRewardLayoutComponent.setPositionPercentY(0.15);

        ///// # _nodeBigBet
        this._nodeBigBet = new cc.Node();
        this._nodeBigBet.setName("_nodeBigBet");
        this._layoutRoot.addChild(this._nodeBigBet);
        this._nodeBigBet.setCascadeOpacityEnabled(true);
        this._nodeBigBet.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeBigBet, 0.915, 0.8658);
        let _nodeBigBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeBigBet);
        _nodeBigBetLayoutComponent.setPositionPercentXEnabled(true);
        _nodeBigBetLayoutComponent.setPositionPercentX(0.915);
        _nodeBigBetLayoutComponent.setPositionPercentYEnabled(true);
        _nodeBigBetLayoutComponent.setPositionPercentY(0.8658);

        ///// # _imgIconBigBet
        this._imgIconBigBet = new ccui.ImageView();
        this._imgIconBigBet.setName("_imgIconBigBet");
        this._nodeBigBet.addChild(this._imgIconBigBet);
        this._imgIconBigBet.setCascadeOpacityEnabled(true);
        this._imgIconBigBet.setCascadeColorEnabled(true);
        this._imgIconBigBet.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgIconBigBet.setScale(0.7, 0.7);
        let _imgIconBigBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconBigBet);
        this._imgIconBigBet.loadTexture("bigbet/Star.png", 1);
        this._imgIconBigBet.setUnifySizeEnabled(false);
        this._imgIconBigBet.ignoreContentAdaptWithSize(false);
        this._imgIconBigBet.setContentSize(cc.size(119, 125));
        this._imgIconBigBet.setTouchEnabled(false);

        ///// # _txtBigBetValue
        this._txtBigBetValue = new ck.Text();
        this._txtBigBetValue.setName("_txtBigBetValue");
        this._nodeBigBet.addChild(this._txtBigBetValue);
        this._txtBigBetValue.setCascadeOpacityEnabled(true);
        this._txtBigBetValue.setCascadeColorEnabled(true);
        this._txtBigBetValue.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtBigBetValue.setPosition(0.0002, 3);
        let _txtBigBetValueLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBigBetValue);
        this._txtBigBetValue.setTouchEnabled(false);
        this._txtBigBetValue.ignoreContentAdaptWithSize(true);
        this._txtBigBetValue.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtBigBetValue.setDefaultFontSize(35);
        this._txtBigBetValue.setTextHorizontalAlignment(0);
        this._txtBigBetValue.setTextVerticalAlignment(0);
        this._txtBigBetValue.enableOutline(cc.color(80, 57, 0, 255), 2);

    },



});

/**
 * Create PistiResultLayer
 * @returns {_ccs.PistiResultLayer}
 */
_ccs.PistiResultLayer.create = function () {
    return new _ccs.PistiResultLayer();
};
