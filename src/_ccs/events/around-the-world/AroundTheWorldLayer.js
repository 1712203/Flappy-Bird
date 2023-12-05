/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.AroundTheWorldLayer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.AroundTheWorldLayer = cc.Layer.extend({

    /** @type {ccui.ImageView} */
    _background: null,
    /** @type {ccui.ImageView} */
    _board: null,
    /** @type {London} */
    _london: null,
    /** @type {Moscow} */
    _moscow: null,
    /** @type {Tokyo} */
    _tokyo: null,
    /** @type {Otakoy} */
    _hanoi: null,
    /** @type {Rio} */
    _rio: null,
    /** @type {NewYork} */
    _newyork: null,
    /** @type {Taipei} */
    _taipei: null,
    /** @type {Beijing} */
    _beijing: null,
    /** @type {NewDelhi} */
    _newdelhi: null,
    /** @type {Singapore} */
    _singapore: null,
    /** @type {Amsterdam} */
    _amsterdam: null,
    /** @type {Paris} */
    _paris: null,
    /** @type {AroundTheWorldAirPlane} */
    _plane: null,
    /** @type {ccui.Layout} */
    _canvas: null,
    /** @type {ccui.ImageView} */
    _imgFly: null,
    /** @type {ck.Text} */
    _txtFly: null,
    /** @type {ck.Text} */
    _txtCost: null,
    /** @type {ccui.ImageView} */
    _imgTokenCost: null,
    /** @type {ShopEventIcon} */
    _shopToken: null,
    /** @type {ccui.ImageView} */
    _imgReset: null,
    /** @type {ck.Text} */
    _txtReset: null,
    /** @type {ck.Text} */
    _txtResetCost: null,
    /** @type {ccui.ImageView} */
    _imgResetGem: null,
    /** @type {ccui.Layout} */
    _layoutToken: null,
    /** @type {ccui.ImageView} */
    _imgToken: null,
    /** @type {ck.Text} */
    _txtToken: null,
    /** @type {ccui.Layout} */
    _layoutGem: null,
    /** @type {ccui.ImageView} */
    _imgGem: null,
    /** @type {ck.Text} */
    _txtGem: null,
    /** @type {ccui.Layout} */
    _layoutRewards: null,
    /** @type {ccui.ImageView} */
    _imgRewardsBgr: null,
    /** @type {ck.GridViewVertical} */
    _gridRewards: null,
    /** @type {ccui.Layout} */
    _layoutParisRewards: null,
    /** @type {ccui.ImageView} */
    _imgParisRewardBgr: null,
    /** @type {ck.GridViewVertical} */
    _gridParisRewards: null,
    /** @type {ccui.ImageView} */
    _imgParisRewardIcon: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ccui.ImageView} */
    _imgHeaderText: null,
    /** @type {ccui.ImageView} */
    _imgHelp: null,
    /** @type {ccui.ImageView} */
    _imgInfo: null,
    /** @type {ccui.ImageView} */
    _imgExit: null,
    /** @type {ccui.ImageView} */
    imgCloseIcon: null,
    /** @type {ccui.ImageView} */
    _imgInventory: null,
    /** @type {ccui.Layout} */
    _layoutLandInfo: null,
    /** @type {ccui.ImageView} */
    _imgLandInfo: null,
    /** @type {ck.GridViewVertical} */
    _gridLandRewards: null,


    /**
     * _ccs.AroundTheWorldLayer constructor
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
        this._background = new ccui.ImageView();
        this._background.setName("_background");
        this.addChild(this._background);
        this._background.setCascadeOpacityEnabled(true);
        this._background.setCascadeColorEnabled(true);
        this._background.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._background, 0.5, 0.5);
        if (!PlatformUtils.hasNotch()) {
            let _backgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._background);
            _backgroundLayoutComponent.setPositionPercentXEnabled(true);
            _backgroundLayoutComponent.setPositionPercentX(0.5);
            _backgroundLayoutComponent.setPositionPercentYEnabled(true);
            _backgroundLayoutComponent.setPositionPercentY(0.5);
            _backgroundLayoutComponent.setPercentWidthEnabled(true);
            _backgroundLayoutComponent.setPercentWidth(1);
            _backgroundLayoutComponent.setPercentHeightEnabled(true);
            _backgroundLayoutComponent.setPercentHeight(1);
        }
        this._background.loadTexture("around-the-world/Background.png", 1);
        this._background.setUnifySizeEnabled(false);
        this._background.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._background, 1, 1);
        this._background.setTouchEnabled(false);
        UIUtils.initFullScreenBackground(this._background);

        ///// # _board
        this._board = new ccui.ImageView();
        this._board.setName("_board");
        this.addChild(this._board);
        this._board.setCascadeOpacityEnabled(true);
        this._board.setCascadeColorEnabled(true);
        this._board.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._board, 0.5, 0.4974);
        let _boardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._board);
        _boardLayoutComponent.setPositionPercentXEnabled(true);
        _boardLayoutComponent.setPositionPercentX(0.5);
        _boardLayoutComponent.setPositionPercentYEnabled(true);
        _boardLayoutComponent.setPositionPercentY(0.4974);
        this._board.loadTexture("around-the-world/Board.png", 1);
        this._board.setUnifySizeEnabled(false);
        this._board.ignoreContentAdaptWithSize(false);
        this._board.setContentSize(cc.size(1026, 629));
        this._board.setTouchEnabled(false);

        ///// # _london
        this._london = new London();
        this._london.setName("_london");
        this._board.addChild(this._london);
        this._london.setCascadeOpacityEnabled(true);
        this._london.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._london, 0.5082, 0.8316);
        let _londonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._london);
        _londonLayoutComponent.setPositionPercentXEnabled(true);
        _londonLayoutComponent.setPositionPercentX(0.5082);

        ///// # _moscow
        this._moscow = new Moscow();
        this._moscow.setName("_moscow");
        this._board.addChild(this._moscow);
        this._moscow.setCascadeOpacityEnabled(true);
        this._moscow.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._moscow, 0.4148, 0.7475);
        let _moscowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._moscow);

        ///// # _tokyo
        this._tokyo = new Tokyo();
        this._tokyo.setName("_tokyo");
        this._board.addChild(this._tokyo);
        this._tokyo.setCascadeOpacityEnabled(true);
        this._tokyo.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._tokyo, 0.5921, 0.7407);
        let _tokyoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._tokyo);

        ///// # _hanoi
        this._hanoi = new Otakoy();
        this._hanoi.setName("_hanoi");
        this._board.addChild(this._hanoi);
        this._hanoi.setCascadeOpacityEnabled(true);
        this._hanoi.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._hanoi, 0.3512, 0.637);
        let _hanoiLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._hanoi);

        ///// # _rio
        this._rio = new Rio();
        this._rio.setName("_rio");
        this._board.addChild(this._rio);
        this._rio.setCascadeOpacityEnabled(true);
        this._rio.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._rio, 0.6615, 0.6634);
        let _rioLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._rio);

        ///// # _newyork
        this._newyork = new NewYork();
        this._newyork.setName("_newyork");
        this._board.addChild(this._newyork);
        this._newyork.setCascadeOpacityEnabled(true);
        this._newyork.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._newyork, 0.2853, 0.5799);
        let _newyorkLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._newyork);

        ///// # _taipei
        this._taipei = new Taipei();
        this._taipei.setName("_taipei");
        this._board.addChild(this._taipei);
        this._taipei.setCascadeOpacityEnabled(true);
        this._taipei.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._taipei, 0.7323, 0.5714);
        let _taipeiLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._taipei);

        ///// # _beijing
        this._beijing = new Beijing();
        this._beijing.setName("_beijing");
        this._board.addChild(this._beijing);
        this._beijing.setCascadeOpacityEnabled(true);
        this._beijing.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._beijing, 0.3631, 0.4961);
        let _beijingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._beijing);

        ///// # _newdelhi
        this._newdelhi = new NewDelhi();
        this._newdelhi.setName("_newdelhi");
        this._board.addChild(this._newdelhi);
        this._newdelhi.setCascadeOpacityEnabled(true);
        this._newdelhi.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._newdelhi, 0.6301, 0.4779);
        let _newdelhiLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._newdelhi);

        ///// # _singapore
        this._singapore = new Singapore();
        this._singapore.setName("_singapore");
        this._board.addChild(this._singapore);
        this._singapore.setCascadeOpacityEnabled(true);
        this._singapore.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._singapore, 0.4307, 0.4257);
        let _singaporeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._singapore);

        ///// # _amsterdam
        this._amsterdam = new Amsterdam();
        this._amsterdam.setName("_amsterdam");
        this._board.addChild(this._amsterdam);
        this._amsterdam.setCascadeOpacityEnabled(true);
        this._amsterdam.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._amsterdam, 0.5657, 0.4157);
        let _amsterdamLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._amsterdam);

        ///// # _paris
        this._paris = new Paris();
        this._paris.setName("_paris");
        this._board.addChild(this._paris);
        this._paris.setCascadeOpacityEnabled(true);
        this._paris.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._paris, 0.4995, 0.3227);
        let _parisLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._paris);
        _parisLayoutComponent.setPositionPercentXEnabled(true);
        _parisLayoutComponent.setPositionPercentX(0.4995);

        ///// # _plane
        this._plane = new AroundTheWorldAirPlane();
        this._plane.setName("_plane");
        this.addChild(this._plane);
        this._plane.setCascadeOpacityEnabled(true);
        this._plane.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._plane, 0.8531, 0.6803);
        let _planeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._plane);

        ///// # _canvas
        this._canvas = new ccui.Layout();
        this._canvas.setName("_canvas");
        this.addChild(this._canvas);
        this._canvas.setCascadeOpacityEnabled(true);
        this._canvas.setCascadeColorEnabled(true);
        this._canvas.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._canvas, 0.5009, 0.5);
        let _canvasLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._canvas);
        _canvasLayoutComponent.setPositionPercentXEnabled(true);
        _canvasLayoutComponent.setPositionPercentX(0.5009);
        _canvasLayoutComponent.setPositionPercentYEnabled(true);
        _canvasLayoutComponent.setPositionPercentY(0.5);
        _canvasLayoutComponent.setPercentWidthEnabled(true);
        _canvasLayoutComponent.setPercentWidth(1);
        _canvasLayoutComponent.setPercentHeightEnabled(true);
        _canvasLayoutComponent.setPercentHeight(1);
        this._canvas.setTouchEnabled(false);
        this._canvas.setUnifySizeEnabled(false);
        this._canvas.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._canvas, 1, 1);

        ///// # _imgFly
        this._imgFly = new ccui.ImageView();
        this._imgFly.setName("_imgFly");
        this._canvas.addChild(this._imgFly);
        this._imgFly.setCascadeOpacityEnabled(true);
        this._imgFly.setCascadeColorEnabled(true);
        this._imgFly.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgFly, 0.5, 0.2018);
        let _imgFlyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFly);
        _imgFlyLayoutComponent.setPositionPercentXEnabled(true);
        _imgFlyLayoutComponent.setPositionPercentX(0.5);
        _imgFlyLayoutComponent.setPositionPercentYEnabled(true);
        _imgFlyLayoutComponent.setPositionPercentY(0.2018);
        this._imgFly.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgFly.setUnifySizeEnabled(false);
        this._imgFly.ignoreContentAdaptWithSize(false);
        this._imgFly.setContentSize(cc.size(232, 91));
        this._imgFly.setTouchEnabled(false);

        ///// # _txtFly
        this._txtFly = new ck.Text();
        this._txtFly.setName("_txtFly");
        this._imgFly.addChild(this._txtFly);
        this._txtFly.setCascadeOpacityEnabled(true);
        this._txtFly.setCascadeColorEnabled(true);
        this._txtFly.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtFly, 0.25, 0.5);
        let _txtFlyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtFly);
        _txtFlyLayoutComponent.setPositionPercentXEnabled(true);
        _txtFlyLayoutComponent.setPositionPercentX(0.25);
        _txtFlyLayoutComponent.setPositionPercentYEnabled(true);
        _txtFlyLayoutComponent.setPositionPercentY(0.5);
        this._txtFly.setTouchEnabled(false);
        this._txtFly.ignoreContentAdaptWithSize(true);
        this._txtFly.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtFly.setDefaultFontSize(40);
        this._txtFly.setString(gm.localize.getText("TXT_FLY"));
        this._txtFly.setTextHorizontalAlignment(1);
        this._txtFly.setTextVerticalAlignment(1);
        this._txtFly.enableOutline(cc.color(158, 82, 9, 255), 3);

        ///// # _txtCost
        this._txtCost = new ck.Text();
        this._txtCost.setName("_txtCost");
        this._imgFly.addChild(this._txtCost);
        this._txtCost.setCascadeOpacityEnabled(true);
        this._txtCost.setCascadeColorEnabled(true);
        this._txtCost.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCost, 0.7694, 0.5);
        this._txtCost.setTextColor(cc.color(255, 250, 135, 255));
        let _txtCostLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCost);
        _txtCostLayoutComponent.setPositionPercentXEnabled(true);
        _txtCostLayoutComponent.setPositionPercentX(0.7694);
        _txtCostLayoutComponent.setPositionPercentYEnabled(true);
        _txtCostLayoutComponent.setPositionPercentY(0.5);
        this._txtCost.setTouchEnabled(false);
        this._txtCost.ignoreContentAdaptWithSize(true);
        this._txtCost.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCost.setDefaultFontSize(35);
        this._txtCost.setString("-100");
        this._txtCost.setTextHorizontalAlignment(0);
        this._txtCost.setTextVerticalAlignment(1);
        this._txtCost.enableOutline(cc.color(87, 56, 0, 255), 3);

        ///// # _imgTokenCost
        this._imgTokenCost = new ccui.ImageView();
        this._imgTokenCost.setName("_imgTokenCost");
        this._imgFly.addChild(this._imgTokenCost);
        this._imgTokenCost.setCascadeOpacityEnabled(true);
        this._imgTokenCost.setCascadeColorEnabled(true);
        this._imgTokenCost.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTokenCost, 0.4914, 0.5);
        let _imgTokenCostLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTokenCost);
        _imgTokenCostLayoutComponent.setPositionPercentXEnabled(true);
        _imgTokenCostLayoutComponent.setPositionPercentX(0.4914);
        _imgTokenCostLayoutComponent.setPositionPercentYEnabled(true);
        _imgTokenCostLayoutComponent.setPositionPercentY(0.5);
        this._imgTokenCost.loadTexture("icons/color/tokens/Clover.png", 1);
        this._imgTokenCost.setUnifySizeEnabled(false);
        this._imgTokenCost.ignoreContentAdaptWithSize(false);
        this._imgTokenCost.setContentSize(cc.size(50, 50));
        this._imgTokenCost.setTouchEnabled(false);

        ///// # _shopToken
        this._shopToken = new ShopEventIcon();
        this._shopToken.setName("_shopToken");
        this._canvas.addChild(this._shopToken);
        this._shopToken.setCascadeOpacityEnabled(true);
        this._shopToken.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._shopToken, 0.7848, 0.202);
        let _shopTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._shopToken);
        _shopTokenLayoutComponent.setPositionPercentXEnabled(true);
        _shopTokenLayoutComponent.setPositionPercentX(0.7848);
        _shopTokenLayoutComponent.setPositionPercentYEnabled(true);
        _shopTokenLayoutComponent.setPositionPercentY(0.202);

        ///// # _imgReset
        this._imgReset = new ccui.ImageView();
        this._imgReset.setName("_imgReset");
        this._canvas.addChild(this._imgReset);
        this._imgReset.setCascadeOpacityEnabled(true);
        this._imgReset.setCascadeColorEnabled(true);
        this._imgReset.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgReset, 0.5, 0.2018);
        let _imgResetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgReset);
        _imgResetLayoutComponent.setPositionPercentXEnabled(true);
        _imgResetLayoutComponent.setPositionPercentX(0.5);
        _imgResetLayoutComponent.setPositionPercentYEnabled(true);
        _imgResetLayoutComponent.setPositionPercentY(0.2018);
        this._imgReset.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgReset.setUnifySizeEnabled(false);
        this._imgReset.ignoreContentAdaptWithSize(false);
        this._imgReset.setContentSize(cc.size(235, 100));
        this._imgReset.setTouchEnabled(false);

        ///// # _txtReset
        this._txtReset = new ck.Text();
        this._txtReset.setName("_txtReset");
        this._imgReset.addChild(this._txtReset);
        this._txtReset.setCascadeOpacityEnabled(true);
        this._txtReset.setCascadeColorEnabled(true);
        this._txtReset.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtReset, 0.25, 0.5);
        let _txtResetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtReset);
        _txtResetLayoutComponent.setPositionPercentXEnabled(true);
        _txtResetLayoutComponent.setPositionPercentX(0.25);
        _txtResetLayoutComponent.setPositionPercentYEnabled(true);
        _txtResetLayoutComponent.setPositionPercentY(0.5);
        this._txtReset.setTouchEnabled(false);
        this._txtReset.ignoreContentAdaptWithSize(true);
        this._txtReset.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtReset.setDefaultFontSize(35);
        this._txtReset.setString(gm.localize.getText("TXT_RESET"));
        this._txtReset.setTextHorizontalAlignment(1);
        this._txtReset.setTextVerticalAlignment(1);
        this._txtReset.enableOutline(cc.color(158, 82, 9, 255), 3);

        ///// # _txtResetCost
        this._txtResetCost = new ck.Text();
        this._txtResetCost.setName("_txtResetCost");
        this._imgReset.addChild(this._txtResetCost);
        this._txtResetCost.setCascadeOpacityEnabled(true);
        this._txtResetCost.setCascadeColorEnabled(true);
        this._txtResetCost.setAnchorPoint(cc.p(0.538, 0.3515));
        ck.UIUtils.setPositionPercent(this._txtResetCost, 0.8024, 0.4251);
        let _txtResetCostLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtResetCost);
        _txtResetCostLayoutComponent.setPositionPercentXEnabled(true);
        _txtResetCostLayoutComponent.setPositionPercentX(0.8024);
        _txtResetCostLayoutComponent.setPositionPercentYEnabled(true);
        _txtResetCostLayoutComponent.setPositionPercentY(0.4251);
        this._txtResetCost.setTouchEnabled(false);
        this._txtResetCost.ignoreContentAdaptWithSize(true);
        this._txtResetCost.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtResetCost.setDefaultFontSize(35);
        this._txtResetCost.setTextHorizontalAlignment(0);
        this._txtResetCost.setTextVerticalAlignment(1);
        this._txtResetCost.enableOutline(cc.color(158, 82, 9, 255), 2);

        ///// # _imgResetGem
        this._imgResetGem = new ccui.ImageView();
        this._imgResetGem.setName("_imgResetGem");
        this._imgReset.addChild(this._imgResetGem);
        this._imgResetGem.setCascadeOpacityEnabled(true);
        this._imgResetGem.setCascadeColorEnabled(true);
        this._imgResetGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgResetGem, 0.5431, 0.5);
        let _imgResetGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgResetGem);
        _imgResetGemLayoutComponent.setPositionPercentXEnabled(true);
        _imgResetGemLayoutComponent.setPositionPercentX(0.5431);
        _imgResetGemLayoutComponent.setPositionPercentYEnabled(true);
        _imgResetGemLayoutComponent.setPositionPercentY(0.5);
        this._imgResetGem.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgResetGem.setUnifySizeEnabled(false);
        this._imgResetGem.ignoreContentAdaptWithSize(false);
        this._imgResetGem.setContentSize(cc.size(50, 50));
        this._imgResetGem.setTouchEnabled(false);

        ///// # _layoutToken
        this._layoutToken = new ccui.Layout();
        this._layoutToken.setName("_layoutToken");
        this._canvas.addChild(this._layoutToken);
        this._layoutToken.setCascadeOpacityEnabled(true);
        this._layoutToken.setCascadeColorEnabled(true);
        this._layoutToken.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutToken, 0.5, 0.1298);
        let _layoutTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutToken);
        _layoutTokenLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTokenLayoutComponent.setPositionPercentX(0.5);
        _layoutTokenLayoutComponent.setPositionPercentYEnabled(true);
        _layoutTokenLayoutComponent.setPositionPercentY(0.1298);
        this._layoutToken.setTouchEnabled(false);
        this._layoutToken.setUnifySizeEnabled(false);
        this._layoutToken.ignoreContentAdaptWithSize(false);
        this._layoutToken.setContentSize(cc.size(182.6741, 61.0744));

        ///// # _imgToken
        this._imgToken = new ccui.ImageView();
        this._imgToken.setName("_imgToken");
        this._layoutToken.addChild(this._imgToken);
        this._imgToken.setCascadeOpacityEnabled(true);
        this._imgToken.setCascadeColorEnabled(true);
        this._imgToken.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgToken, 0.1469, 0.5);
        let _imgTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken);
        _imgTokenLayoutComponent.setPositionPercentXEnabled(true);
        _imgTokenLayoutComponent.setPositionPercentX(0.1469);
        _imgTokenLayoutComponent.setPositionPercentYEnabled(true);
        _imgTokenLayoutComponent.setPositionPercentY(0.5);
        this._imgToken.loadTexture("icons/color/tokens/Clover.png", 1);
        this._imgToken.setUnifySizeEnabled(false);
        this._imgToken.ignoreContentAdaptWithSize(false);
        this._imgToken.setContentSize(cc.size(64, 64));
        this._imgToken.setTouchEnabled(false);

        ///// # _txtToken
        this._txtToken = new ck.Text();
        this._txtToken.setName("_txtToken");
        this._layoutToken.addChild(this._txtToken);
        this._txtToken.setCascadeOpacityEnabled(true);
        this._txtToken.setCascadeColorEnabled(true);
        this._txtToken.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtToken, 0.6148, 0.5);
        let _txtTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtToken);
        _txtTokenLayoutComponent.setPositionPercentXEnabled(true);
        _txtTokenLayoutComponent.setPositionPercentX(0.6148);
        _txtTokenLayoutComponent.setPositionPercentYEnabled(true);
        _txtTokenLayoutComponent.setPositionPercentY(0.5);
        this._txtToken.setTouchEnabled(false);
        this._txtToken.ignoreContentAdaptWithSize(true);
        this._txtToken.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtToken.setDefaultFontSize(45);
        this._txtToken.setTextHorizontalAlignment(1);
        this._txtToken.setTextVerticalAlignment(1);
        this._txtToken.enableOutline(cc.color(0, 66, 130, 255), 2);

        ///// # _layoutGem
        this._layoutGem = new ccui.Layout();
        this._layoutGem.setName("_layoutGem");
        this._canvas.addChild(this._layoutGem);
        this._layoutGem.setCascadeOpacityEnabled(true);
        this._layoutGem.setCascadeColorEnabled(true);
        this._layoutGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutGem, 0.5, 0.0709);
        let _layoutGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGem);
        _layoutGemLayoutComponent.setPositionPercentXEnabled(true);
        _layoutGemLayoutComponent.setPositionPercentX(0.5);
        _layoutGemLayoutComponent.setPositionPercentYEnabled(true);
        _layoutGemLayoutComponent.setPositionPercentY(0.0709);
        this._layoutGem.setTouchEnabled(false);
        this._layoutGem.setUnifySizeEnabled(false);
        this._layoutGem.ignoreContentAdaptWithSize(false);
        this._layoutGem.setContentSize(cc.size(182.6741, 61.07));

        ///// # _imgGem
        this._imgGem = new ccui.ImageView();
        this._imgGem.setName("_imgGem");
        this._layoutGem.addChild(this._imgGem);
        this._imgGem.setCascadeOpacityEnabled(true);
        this._imgGem.setCascadeColorEnabled(true);
        this._imgGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGem, 0.1485, 0.5);
        let _imgGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGem);
        _imgGemLayoutComponent.setPositionPercentXEnabled(true);
        _imgGemLayoutComponent.setPositionPercentX(0.1485);
        _imgGemLayoutComponent.setPositionPercentYEnabled(true);
        _imgGemLayoutComponent.setPositionPercentY(0.5);
        this._imgGem.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgGem.setUnifySizeEnabled(false);
        this._imgGem.ignoreContentAdaptWithSize(false);
        this._imgGem.setContentSize(cc.size(64, 64));
        this._imgGem.setTouchEnabled(false);

        ///// # _txtGem
        this._txtGem = new ck.Text();
        this._txtGem.setName("_txtGem");
        this._layoutGem.addChild(this._txtGem);
        this._txtGem.setCascadeOpacityEnabled(true);
        this._txtGem.setCascadeColorEnabled(true);
        this._txtGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGem, 0.6164, 0.5);
        let _txtGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGem);
        _txtGemLayoutComponent.setPositionPercentXEnabled(true);
        _txtGemLayoutComponent.setPositionPercentX(0.6164);
        _txtGemLayoutComponent.setPositionPercentYEnabled(true);
        _txtGemLayoutComponent.setPositionPercentY(0.5);
        this._txtGem.setTouchEnabled(false);
        this._txtGem.ignoreContentAdaptWithSize(true);
        this._txtGem.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGem.setDefaultFontSize(45);
        this._txtGem.setTextHorizontalAlignment(1);
        this._txtGem.setTextVerticalAlignment(1);
        this._txtGem.enableOutline(cc.color(0, 66, 130, 255), 2);

        ///// # _layoutRewards
        this._layoutRewards = new ccui.Layout();
        this._layoutRewards.setName("_layoutRewards");
        this._canvas.addChild(this._layoutRewards);
        this._layoutRewards.setCascadeOpacityEnabled(true);
        this._layoutRewards.setCascadeColorEnabled(true);
        this._layoutRewards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutRewards, 0.5118, 0.2975);
        let _layoutRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRewards);
        _layoutRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRewardsLayoutComponent.setPositionPercentX(0.5118);
        _layoutRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _layoutRewardsLayoutComponent.setPositionPercentY(0.2975);
        this._layoutRewards.setTouchEnabled(true);
        this._layoutRewards.setUnifySizeEnabled(false);
        this._layoutRewards.ignoreContentAdaptWithSize(false);
        this._layoutRewards.setContentSize(cc.size(300, 90));

        ///// # _imgRewardsBgr
        this._imgRewardsBgr = new ccui.ImageView();
        this._imgRewardsBgr.setName("_imgRewardsBgr");
        this._layoutRewards.addChild(this._imgRewardsBgr);
        this._imgRewardsBgr.setCascadeOpacityEnabled(true);
        this._imgRewardsBgr.setCascadeColorEnabled(true);
        this._imgRewardsBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRewardsBgr, 0.5, 0.5);
        this._imgRewardsBgr.setOpacity(127);
        this._imgRewardsBgr.setColor(cc.color(0, 0, 0, 255));
        let _imgRewardsBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRewardsBgr);
        _imgRewardsBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgRewardsBgrLayoutComponent.setPositionPercentX(0.5);
        _imgRewardsBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgRewardsBgrLayoutComponent.setPositionPercentY(0.5);
        _imgRewardsBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgRewardsBgrLayoutComponent.setPercentWidth(1);
        _imgRewardsBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgRewardsBgrLayoutComponent.setPercentHeight(1);
        this._imgRewardsBgr.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgRewardsBgr.setUnifySizeEnabled(false);
        this._imgRewardsBgr.ignoreContentAdaptWithSize(false);
        this._imgRewardsBgr.setScale9Enabled(true);
        this._imgRewardsBgr.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgRewardsBgr, 1, 1);
        this._imgRewardsBgr.setTouchEnabled(false);

        ///// # _gridRewards
        this._gridRewards = new ck.GridViewVertical();
        this._gridRewards.setName("_gridRewards");
        this._layoutRewards.addChild(this._gridRewards);
        this._gridRewards.setCascadeOpacityEnabled(true);
        this._gridRewards.setCascadeColorEnabled(true);
        this._gridRewards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridRewards, 0.5, 0.5);
        let _gridRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridRewards);
        _gridRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentX(0.5);
        _gridRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentY(0.5);

        ///// # _layoutParisRewards
        this._layoutParisRewards = new ccui.Layout();
        this._layoutParisRewards.setName("_layoutParisRewards");
        this._canvas.addChild(this._layoutParisRewards);
        this._layoutParisRewards.setCascadeOpacityEnabled(true);
        this._layoutParisRewards.setCascadeColorEnabled(true);
        this._layoutParisRewards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutParisRewards, 0.5, 0.05);
        let _layoutParisRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutParisRewards);
        _layoutParisRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutParisRewardsLayoutComponent.setPositionPercentX(0.5);
        _layoutParisRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _layoutParisRewardsLayoutComponent.setPositionPercentY(0.05);
        this._layoutParisRewards.setTouchEnabled(true);
        this._layoutParisRewards.setUnifySizeEnabled(false);
        this._layoutParisRewards.ignoreContentAdaptWithSize(false);
        this._layoutParisRewards.setContentSize(cc.size(366.6194, 90));

        ///// # _imgParisRewardBgr
        this._imgParisRewardBgr = new ccui.ImageView();
        this._imgParisRewardBgr.setName("_imgParisRewardBgr");
        this._layoutParisRewards.addChild(this._imgParisRewardBgr);
        this._imgParisRewardBgr.setCascadeOpacityEnabled(true);
        this._imgParisRewardBgr.setCascadeColorEnabled(true);
        this._imgParisRewardBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgParisRewardBgr, 0.5, 0.5);
        this._imgParisRewardBgr.setOpacity(127);
        this._imgParisRewardBgr.setColor(cc.color(0, 0, 0, 255));
        let _imgParisRewardBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgParisRewardBgr);
        _imgParisRewardBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgParisRewardBgrLayoutComponent.setPositionPercentX(0.5);
        _imgParisRewardBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgParisRewardBgrLayoutComponent.setPositionPercentY(0.5);
        _imgParisRewardBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgParisRewardBgrLayoutComponent.setPercentWidth(1);
        _imgParisRewardBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgParisRewardBgrLayoutComponent.setPercentHeight(1);
        this._imgParisRewardBgr.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgParisRewardBgr.setUnifySizeEnabled(false);
        this._imgParisRewardBgr.ignoreContentAdaptWithSize(false);
        this._imgParisRewardBgr.setScale9Enabled(true);
        this._imgParisRewardBgr.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgParisRewardBgr, 1, 1);
        this._imgParisRewardBgr.setTouchEnabled(false);

        ///// # _gridParisRewards
        this._gridParisRewards = new ck.GridViewVertical();
        this._gridParisRewards.setName("_gridParisRewards");
        this._layoutParisRewards.addChild(this._gridParisRewards);
        this._gridParisRewards.setCascadeOpacityEnabled(true);
        this._gridParisRewards.setCascadeColorEnabled(true);
        this._gridParisRewards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridParisRewards, 0.6429, 0.5049);
        let _gridParisRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridParisRewards);
        _gridParisRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _gridParisRewardsLayoutComponent.setPositionPercentX(0.6429);
        _gridParisRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _gridParisRewardsLayoutComponent.setPositionPercentY(0.5049);

        ///// # _imgParisRewardIcon
        this._imgParisRewardIcon = new ccui.ImageView();
        this._imgParisRewardIcon.setName("_imgParisRewardIcon");
        this._layoutParisRewards.addChild(this._imgParisRewardIcon);
        this._imgParisRewardIcon.setCascadeOpacityEnabled(true);
        this._imgParisRewardIcon.setCascadeColorEnabled(true);
        this._imgParisRewardIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgParisRewardIcon, 0.1587, 0.6561);
        this._imgParisRewardIcon.setScale(0.48, 0.48);
        let _imgParisRewardIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgParisRewardIcon);
        _imgParisRewardIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgParisRewardIconLayoutComponent.setPositionPercentX(0.1587);
        _imgParisRewardIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgParisRewardIconLayoutComponent.setPositionPercentY(0.6561);
        _imgParisRewardIconLayoutComponent.setPercentWidthEnabled(true);
        _imgParisRewardIconLayoutComponent.setPercentWidth(0.4555);
        _imgParisRewardIconLayoutComponent.setPercentHeightEnabled(true);
        _imgParisRewardIconLayoutComponent.setPercentHeight(2.6889);
        this._imgParisRewardIcon.loadTexture("around-the-world/BuildingParis.png", 1);
        this._imgParisRewardIcon.setUnifySizeEnabled(false);
        this._imgParisRewardIcon.ignoreContentAdaptWithSize(false);
        this._imgParisRewardIcon.setScale9Enabled(true);
        this._imgParisRewardIcon.setCapInsets(cc.rect(21, 21, 125, 200));
        ck.UIUtils.setSizePercent(this._imgParisRewardIcon, 0.4555, 2.6889);
        this._imgParisRewardIcon.setTouchEnabled(false);

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._canvas.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 0.8782);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(0.8782);
        this._imgHeader.loadTexture("basics/popup/HeaderRed_03.png", 1);
        this._imgHeader.setUnifySizeEnabled(false);
        this._imgHeader.ignoreContentAdaptWithSize(false);
        this._imgHeader.setContentSize(cc.size(516.4579, 246.4729));
        this._imgHeader.setTouchEnabled(false);

        ///// # _imgHeaderText
        this._imgHeaderText = new ccui.ImageView();
        this._imgHeaderText.setName("_imgHeaderText");
        this._imgHeader.addChild(this._imgHeaderText);
        this._imgHeaderText.setCascadeOpacityEnabled(true);
        this._imgHeaderText.setCascadeColorEnabled(true);
        this._imgHeaderText.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeaderText, 0.5, 0.4507);
        let _imgHeaderTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeaderText);
        _imgHeaderTextLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderTextLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderTextLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderTextLayoutComponent.setPositionPercentY(0.4507);
        this._imgHeaderText.loadTexture("texts/around-the-world/Header_01.png", 1);
        this._imgHeaderText.setTouchEnabled(false);

        ///// # _imgHelp
        this._imgHelp = new ccui.ImageView();
        this._imgHelp.setName("_imgHelp");
        this._canvas.addChild(this._imgHelp);
        this._imgHelp.setCascadeOpacityEnabled(true);
        this._imgHelp.setCascadeColorEnabled(true);
        this._imgHelp.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHelp, 0.0599, 0.9583);
        let _imgHelpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHelp);
        _imgHelpLayoutComponent.setPositionPercentXEnabled(true);
        _imgHelpLayoutComponent.setPositionPercentX(0.0599);
        _imgHelpLayoutComponent.setPositionPercentYEnabled(true);
        _imgHelpLayoutComponent.setPositionPercentY(0.9583);
        this._imgHelp.loadTexture("buttons/squares/Info.png", 1);
        this._imgHelp.setUnifySizeEnabled(false);
        this._imgHelp.ignoreContentAdaptWithSize(false);
        this._imgHelp.setContentSize(cc.size(55, 53));
        this._imgHelp.setTouchEnabled(false);

        ///// # _imgInfo
        this._imgInfo = new ccui.ImageView();
        this._imgInfo.setName("_imgInfo");
        this._imgHelp.addChild(this._imgInfo);
        this._imgInfo.setCascadeOpacityEnabled(true);
        this._imgInfo.setCascadeColorEnabled(true);
        this._imgInfo.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgInfo, 0.5, 0.55);
        let _imgInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgInfo);
        _imgInfoLayoutComponent.setPositionPercentXEnabled(true);
        _imgInfoLayoutComponent.setPositionPercentX(0.5);
        _imgInfoLayoutComponent.setPositionPercentYEnabled(true);
        _imgInfoLayoutComponent.setPositionPercentY(0.55);
        this._imgInfo.loadTexture("icons/flat/Info.png", 1);
        this._imgInfo.setUnifySizeEnabled(false);
        this._imgInfo.ignoreContentAdaptWithSize(false);
        this._imgInfo.setContentSize(cc.size(14, 32));
        this._imgInfo.setTouchEnabled(false);

        ///// # _imgExit
        this._imgExit = new ccui.ImageView();
        this._imgExit.setName("_imgExit");
        this._canvas.addChild(this._imgExit);
        this._imgExit.setCascadeOpacityEnabled(true);
        this._imgExit.setCascadeColorEnabled(true);
        this._imgExit.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgExit, 0.0886, 0.0493);
        this._imgExit.setScale(0.85, 0.85);
        let _imgExitLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExit);
        _imgExitLayoutComponent.setPositionPercentXEnabled(true);
        _imgExitLayoutComponent.setPositionPercentX(0.0886);
        _imgExitLayoutComponent.setPositionPercentYEnabled(true);
        _imgExitLayoutComponent.setPositionPercentY(0.0493);
        this._imgExit.loadTexture("buttons/circles/Gray.png", 1);
        this._imgExit.setUnifySizeEnabled(false);
        this._imgExit.ignoreContentAdaptWithSize(false);
        this._imgExit.setContentSize(cc.size(80, 82));
        this._imgExit.setTouchEnabled(true);

        ///// # imgCloseIcon
        this.imgCloseIcon = new ccui.ImageView();
        this.imgCloseIcon.setName("imgCloseIcon");
        this._imgExit.addChild(this.imgCloseIcon);
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

        ///// # _imgInventory
        this._imgInventory = new ccui.ImageView();
        this._imgInventory.setName("_imgInventory");
        this._canvas.addChild(this._imgInventory);
        this._imgInventory.setCascadeOpacityEnabled(true);
        this._imgInventory.setCascadeColorEnabled(true);
        this._imgInventory.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgInventory, 0.9198, 0.0525);
        let _imgInventoryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgInventory);
        _imgInventoryLayoutComponent.setPositionPercentXEnabled(true);
        _imgInventoryLayoutComponent.setPositionPercentX(0.9198);
        _imgInventoryLayoutComponent.setPositionPercentYEnabled(true);
        _imgInventoryLayoutComponent.setPositionPercentY(0.0525);
        this._imgInventory.loadTexture("icons/color/basic/Inventory.png", 1);
        this._imgInventory.setUnifySizeEnabled(false);
        this._imgInventory.ignoreContentAdaptWithSize(false);
        this._imgInventory.setContentSize(cc.size(73, 69));
        this._imgInventory.setTouchEnabled(false);

        ///// # _layoutLandInfo
        this._layoutLandInfo = new ccui.Layout();
        this._layoutLandInfo.setName("_layoutLandInfo");
        this._canvas.addChild(this._layoutLandInfo);
        this._layoutLandInfo.setCascadeOpacityEnabled(true);
        this._layoutLandInfo.setCascadeColorEnabled(true);
        this._layoutLandInfo.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutLandInfo, 0.703, 0.5406);
        let _layoutLandInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLandInfo);
        this._layoutLandInfo.setTouchEnabled(false);
        this._layoutLandInfo.setUnifySizeEnabled(false);
        this._layoutLandInfo.ignoreContentAdaptWithSize(false);
        this._layoutLandInfo.setContentSize(cc.size(328.0978, 138.6024));

        ///// # _imgLandInfo
        this._imgLandInfo = new ccui.ImageView();
        this._imgLandInfo.setName("_imgLandInfo");
        this._layoutLandInfo.addChild(this._imgLandInfo);
        this._imgLandInfo.setCascadeOpacityEnabled(true);
        this._imgLandInfo.setCascadeColorEnabled(true);
        this._imgLandInfo.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLandInfo, 0.5, 0.5);
        let _imgLandInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLandInfo);
        _imgLandInfoLayoutComponent.setPositionPercentXEnabled(true);
        _imgLandInfoLayoutComponent.setPositionPercentX(0.5);
        _imgLandInfoLayoutComponent.setPositionPercentYEnabled(true);
        _imgLandInfoLayoutComponent.setPositionPercentY(0.5);
        this._imgLandInfo.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgLandInfo.setUnifySizeEnabled(false);
        this._imgLandInfo.ignoreContentAdaptWithSize(false);
        this._imgLandInfo.setScale9Enabled(true);
        this._imgLandInfo.setCapInsets(cc.rect(115, 58, 38, 16));
        this._imgLandInfo.setContentSize(cc.size(308.5425, 132.1052));
        this._imgLandInfo.setTouchEnabled(false);

        ///// # _gridLandRewards
        this._gridLandRewards = new ck.GridViewVertical();
        this._gridLandRewards.setName("_gridLandRewards");
        this._layoutLandInfo.addChild(this._gridLandRewards);
        this._gridLandRewards.setCascadeOpacityEnabled(true);
        this._gridLandRewards.setCascadeColorEnabled(true);
        this._gridLandRewards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridLandRewards, 0.5, 0.5988);
        let _gridLandRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridLandRewards);
        _gridLandRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _gridLandRewardsLayoutComponent.setPositionPercentX(0.5);
        _gridLandRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _gridLandRewardsLayoutComponent.setPositionPercentY(0.5988);

    },



});

/**
 * Create AroundTheWorldLayer
 * @returns {_ccs.AroundTheWorldLayer}
 */
_ccs.AroundTheWorldLayer.create = function () {
    return new _ccs.AroundTheWorldLayer();
};
