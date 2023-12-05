/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.GuiCardFlipUser
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.GuiCardFlipUser = cc.Layer.extend({

    /** @type {ccui.ImageView} */
    _imgFrame: null,
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
    _btnRefresh: null,
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
    /** @type {ccui.ImageView} */
    _imgChooseTicket: null,
    /** @type {Avatar} */
    _avatarNode: null,
    /** @type {ccui.Layout} */
    _layoutLevel: null,
    /** @type {ccui.ImageView} */
    _imgLevelBgr: null,
    /** @type {ck.Text} */
    _txtLevel: null,
    /** @type {ccui.ImageView} */
    _imgBgrProgressBarExp: null,
    /** @type {ck.LoadingBar} */
    _progressBarExp: null,
    /** @type {ccui.ImageView} */
    _imgBarGoldBetting: null,
    /** @type {cc.Sprite} */
    _imgGoldBetting: null,
    /** @type {ck.Text} */
    _txtGoldBetting: null,
    /** @type {ccui.Button} */
    _btnAutoPlay: null,
    /** @type {ccui.ImageView} */
    _imgCheckAutoPlay: null,
    /** @type {ccui.ImageView} */
    _imgTxtAutoPlay: null,
    /** @type {progressExp} */
    _expBar: null,
    /** @type {cc.Sprite} */
    _cardPos: null,


    /**
     * _ccs.GuiCardFlipUser constructor
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

        ///// # _imgFrame
        this._imgFrame = new ccui.ImageView();
        this._imgFrame.setName("_imgFrame");
        this.addChild(this._imgFrame);
        this._imgFrame.setCascadeOpacityEnabled(true);
        this._imgFrame.setCascadeColorEnabled(true);
        this._imgFrame.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgFrameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFrame);
        _imgFrameLayoutComponent.setHorizontalEdge(ccui.LayoutComponent.horizontalEdge.CENTER);
        _imgFrameLayoutComponent.setLeftMargin(-219);
        _imgFrameLayoutComponent.setRightMargin(-218);
        _imgFrameLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.CENTER);
        _imgFrameLayoutComponent.setTopMargin(-86.5);
        _imgFrameLayoutComponent.setBottomMargin(-87.5);
        this._imgFrame.loadTexture("basics/other/BoardPurple.png", 1);
        this._imgFrame.setUnifySizeEnabled(false);
        this._imgFrame.ignoreContentAdaptWithSize(false);
        this._imgFrame.setScale9Enabled(true);
        this._imgFrame.setCapInsets(cc.rect(15, 15, 408, 145));
        this._imgFrame.setContentSize(cc.size(438, 175));
        this._imgFrame.setTouchEnabled(false);

        ///// # _layoutBetButton
        this._layoutBetButton = new ccui.Layout();
        this._layoutBetButton.setName("_layoutBetButton");
        this._imgFrame.addChild(this._layoutBetButton);
        this._layoutBetButton.setCascadeOpacityEnabled(true);
        this._layoutBetButton.setCascadeColorEnabled(true);
        this._layoutBetButton.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBetButton, 0.62, 0.2463);
        let _layoutBetButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBetButton);
        _layoutBetButtonLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBetButtonLayoutComponent.setPositionPercentX(0.62);
        _layoutBetButtonLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBetButtonLayoutComponent.setPositionPercentY(0.2463);
        this._layoutBetButton.setTouchEnabled(false);
        this._layoutBetButton.setUnifySizeEnabled(false);
        this._layoutBetButton.ignoreContentAdaptWithSize(false);
        this._layoutBetButton.setContentSize(cc.size(296, 50));

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

        ///// # _btnRefresh
        this._btnRefresh = new ccui.Button();
        this._btnRefresh.setName("_btnRefresh");
        this._imgFrame.addChild(this._btnRefresh);
        this._btnRefresh.setCascadeOpacityEnabled(true);
        this._btnRefresh.setCascadeColorEnabled(true);
        this._btnRefresh.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnRefresh, 0.925, 0.8);
        let _btnRefreshLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnRefresh);
        _btnRefreshLayoutComponent.setPositionPercentXEnabled(true);
        _btnRefreshLayoutComponent.setPositionPercentX(0.925);
        _btnRefreshLayoutComponent.setPositionPercentYEnabled(true);
        _btnRefreshLayoutComponent.setPositionPercentY(0.8);
        this._btnRefresh.loadTextureDisabled("icons/color/other/Refresh.png", 1);
        this._btnRefresh.loadTexturePressed("icons/color/other/Refresh.png", 1);
        this._btnRefresh.loadTextureNormal("icons/color/other/Refresh.png", 1);
        this._btnRefresh.setUnifySizeEnabled(false);
        this._btnRefresh.ignoreContentAdaptWithSize(false);
        this._btnRefresh.setScale9Enabled(true);
        this._btnRefresh.setCapInsets(cc.rect(15, 11, 3, 11));
        this._btnRefresh.setContentSize(cc.size(33, 33));
        this._btnRefresh.setTouchEnabled(true);

        ///// # _layoutCoin
        this._layoutCoin = new ccui.Layout();
        this._layoutCoin.setName("_layoutCoin");
        this._imgFrame.addChild(this._layoutCoin);
        this._layoutCoin.setCascadeOpacityEnabled(true);
        this._layoutCoin.setCascadeColorEnabled(true);
        this._layoutCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCoin, 0.57, 0.8);
        let _layoutCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCoin);
        _layoutCoinLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentX(0.57);
        _layoutCoinLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentY(0.8);
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

        ///// # _imgChooseTicket
        this._imgChooseTicket = new ccui.ImageView();
        this._imgChooseTicket.setName("_imgChooseTicket");
        this._imgFrame.addChild(this._imgChooseTicket);
        this._imgChooseTicket.setCascadeOpacityEnabled(true);
        this._imgChooseTicket.setCascadeColorEnabled(true);
        this._imgChooseTicket.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgChooseTicket, 0.62, 0.55);
        let _imgChooseTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgChooseTicket);
        _imgChooseTicketLayoutComponent.setPositionPercentXEnabled(true);
        _imgChooseTicketLayoutComponent.setPositionPercentX(0.62);
        _imgChooseTicketLayoutComponent.setPositionPercentYEnabled(true);
        _imgChooseTicketLayoutComponent.setPositionPercentY(0.55);
        this._imgChooseTicket.loadTexture("texts/minigames/ChooseTicket.png", 1);
        this._imgChooseTicket.setTouchEnabled(false);

        ///// # _avatarNode
        this._avatarNode = new Avatar(ck.AvatarType.CIRCLE);
        this._avatarNode.setName("_avatarNode");
        this._imgFrame.addChild(this._avatarNode);
        this._avatarNode.setCascadeOpacityEnabled(true);
        this._avatarNode.setCascadeColorEnabled(true);
        this._avatarNode.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._avatarNode, 0.1325, 0.51);
        let _avatarNodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._avatarNode);
        _avatarNodeLayoutComponent.setPositionPercentXEnabled(true);
        _avatarNodeLayoutComponent.setPositionPercentX(0.1325);
        _avatarNodeLayoutComponent.setPositionPercentYEnabled(true);
        _avatarNodeLayoutComponent.setPositionPercentY(0.51);
        this._avatarNode.setWidth(105);

        ///// # _layoutLevel
        this._layoutLevel = new ccui.Layout();
        this._layoutLevel.setName("_layoutLevel");
        this._imgFrame.addChild(this._layoutLevel);
        this._layoutLevel.setCascadeOpacityEnabled(true);
        this._layoutLevel.setCascadeColorEnabled(true);
        this._layoutLevel.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutLevel, 0.1325, 0.35);
        this._layoutLevel.setVisible(false);
        let _layoutLevelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLevel);
        _layoutLevelLayoutComponent.setPositionPercentXEnabled(true);
        _layoutLevelLayoutComponent.setPositionPercentX(0.1325);
        _layoutLevelLayoutComponent.setPositionPercentYEnabled(true);
        _layoutLevelLayoutComponent.setPositionPercentY(0.35);
        this._layoutLevel.setTouchEnabled(false);
        this._layoutLevel.setUnifySizeEnabled(false);
        this._layoutLevel.ignoreContentAdaptWithSize(false);
        this._layoutLevel.setContentSize(cc.size(58.4941, 35.0522));

        ///// # _imgLevelBgr
        this._imgLevelBgr = new ccui.ImageView();
        this._imgLevelBgr.setName("_imgLevelBgr");
        this._layoutLevel.addChild(this._imgLevelBgr);
        this._imgLevelBgr.setCascadeOpacityEnabled(true);
        this._imgLevelBgr.setCascadeColorEnabled(true);
        this._imgLevelBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLevelBgr, 0.5, 0.5);
        let _imgLevelBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLevelBgr);
        _imgLevelBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgLevelBgrLayoutComponent.setPositionPercentX(0.5);
        _imgLevelBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgLevelBgrLayoutComponent.setPositionPercentY(0.5);
        _imgLevelBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgLevelBgrLayoutComponent.setPercentWidth(1.1331);
        _imgLevelBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgLevelBgrLayoutComponent.setPercentHeight(1);
        this._imgLevelBgr.loadTexture("home/LevelBox.png", 1);
        this._imgLevelBgr.setUnifySizeEnabled(false);
        this._imgLevelBgr.ignoreContentAdaptWithSize(false);
        this._imgLevelBgr.setScale9Enabled(true);
        this._imgLevelBgr.setCapInsets(cc.rect(25, 15, 5, 1));
        ck.UIUtils.setSizePercent(this._imgLevelBgr, 1.1331, 1);
        this._imgLevelBgr.setTouchEnabled(false);

        ///// # _txtLevel
        this._txtLevel = new ck.Text();
        this._txtLevel.setName("_txtLevel");
        this._layoutLevel.addChild(this._txtLevel);
        this._txtLevel.setCascadeOpacityEnabled(true);
        this._txtLevel.setCascadeColorEnabled(true);
        this._txtLevel.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLevel, 0.5, 0.55);
        let _txtLevelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLevel);
        _txtLevelLayoutComponent.setPositionPercentXEnabled(true);
        _txtLevelLayoutComponent.setPositionPercentX(0.5);
        _txtLevelLayoutComponent.setPositionPercentYEnabled(true);
        _txtLevelLayoutComponent.setPositionPercentY(0.55);
        this._txtLevel.setTouchEnabled(false);
        this._txtLevel.ignoreContentAdaptWithSize(true);
        this._txtLevel.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtLevel.setDefaultFontSize(18);
        this._txtLevel.setTextHorizontalAlignment(1);
        this._txtLevel.setTextVerticalAlignment(1);
        this._txtLevel.enableOutline(cc.color(0, 39, 79, 255), 1);

        ///// # _imgBgrProgressBarExp
        this._imgBgrProgressBarExp = new ccui.ImageView();
        this._imgBgrProgressBarExp.setName("_imgBgrProgressBarExp");
        this._imgFrame.addChild(this._imgBgrProgressBarExp);
        this._imgBgrProgressBarExp.setCascadeOpacityEnabled(true);
        this._imgBgrProgressBarExp.setCascadeColorEnabled(true);
        this._imgBgrProgressBarExp.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgrProgressBarExp, 0.1325, 0.19);
        this._imgBgrProgressBarExp.setVisible(false);
        let _imgBgrProgressBarExpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrProgressBarExp);
        _imgBgrProgressBarExpLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrProgressBarExpLayoutComponent.setPositionPercentX(0.1325);
        _imgBgrProgressBarExpLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrProgressBarExpLayoutComponent.setPositionPercentY(0.19);
        this._imgBgrProgressBarExp.loadTexture("basics/bars/Bar_11.png", 1);
        this._imgBgrProgressBarExp.setUnifySizeEnabled(false);
        this._imgBgrProgressBarExp.ignoreContentAdaptWithSize(false);
        this._imgBgrProgressBarExp.setContentSize(cc.size(78, 14));
        this._imgBgrProgressBarExp.setTouchEnabled(false);

        ///// # _progressBarExp
        this._progressBarExp = new ck.LoadingBar();
        this._progressBarExp.setName("_progressBarExp");
        this._imgBgrProgressBarExp.addChild(this._progressBarExp);
        this._progressBarExp.setCascadeOpacityEnabled(true);
        this._progressBarExp.setCascadeColorEnabled(true);
        this._progressBarExp.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._progressBarExp, 0.5, 0.5);
        let _progressBarExpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._progressBarExp);
        _progressBarExpLayoutComponent.setPositionPercentXEnabled(true);
        _progressBarExpLayoutComponent.setPositionPercentX(0.5);
        _progressBarExpLayoutComponent.setPositionPercentYEnabled(true);
        _progressBarExpLayoutComponent.setPositionPercentY(0.5);
        this._progressBarExp.setTouchEnabled(false);
        this._progressBarExp.setUnifySizeEnabled(false);
        this._progressBarExp.ignoreContentAdaptWithSize(false);
        this._progressBarExp.setContentSize(cc.size(78, 14));
        this._progressBarExp.loadTexture("basics/bars/Bar_12.png", 1);

        ///// # _imgBarGoldBetting
        this._imgBarGoldBetting = new ccui.ImageView();
        this._imgBarGoldBetting.setName("_imgBarGoldBetting");
        this._imgFrame.addChild(this._imgBarGoldBetting);
        this._imgBarGoldBetting.setCascadeOpacityEnabled(true);
        this._imgBarGoldBetting.setCascadeColorEnabled(true);
        this._imgBarGoldBetting.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBarGoldBetting, 1.03, 1.3697);
        let _imgBarGoldBettingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBarGoldBetting);
        _imgBarGoldBettingLayoutComponent.setPositionPercentXEnabled(true);
        _imgBarGoldBettingLayoutComponent.setPositionPercentX(1.03);
        _imgBarGoldBettingLayoutComponent.setPositionPercentYEnabled(true);
        _imgBarGoldBettingLayoutComponent.setPositionPercentY(1.3697);
        this._imgBarGoldBetting.loadTexture("basics/other/Box_10.png", 1);
        this._imgBarGoldBetting.setUnifySizeEnabled(false);
        this._imgBarGoldBetting.ignoreContentAdaptWithSize(false);
        this._imgBarGoldBetting.setContentSize(cc.size(125, 36));
        this._imgBarGoldBetting.setTouchEnabled(false);

        ///// # _imgGoldBetting
        this._imgGoldBetting = new cc.Sprite();
        this._imgGoldBetting.setName("_imgGoldBetting");
        this._imgBarGoldBetting.addChild(this._imgGoldBetting);
        this._imgGoldBetting.setCascadeOpacityEnabled(true);
        this._imgGoldBetting.setCascadeColorEnabled(true);
        this._imgGoldBetting.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGoldBetting, 0.05, 0.6);
        this._imgGoldBetting.setScale(0.4, 0.4);
        let _imgGoldBettingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGoldBetting);
        _imgGoldBettingLayoutComponent.setPositionPercentXEnabled(true);
        _imgGoldBettingLayoutComponent.setPositionPercentX(0.05);
        _imgGoldBettingLayoutComponent.setPositionPercentYEnabled(true);
        _imgGoldBettingLayoutComponent.setPositionPercentY(0.6);
        let sf = cc.spriteFrameCache.getSpriteFrame("icons/color/coins/Coin.png"); if (sf) this._imgGoldBetting.setSpriteFrame(sf);
        let _imgGoldBettingBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _imgGoldBettingBlendFunc.src = 1;
        _imgGoldBettingBlendFunc.dst = 771;
        this._imgGoldBetting.setBlendFunc(_imgGoldBettingBlendFunc);

        ///// # _txtGoldBetting
        this._txtGoldBetting = new ck.Text();
        this._txtGoldBetting.setName("_txtGoldBetting");
        this._imgBarGoldBetting.addChild(this._txtGoldBetting);
        this._txtGoldBetting.setCascadeOpacityEnabled(true);
        this._txtGoldBetting.setCascadeColorEnabled(true);
        this._txtGoldBetting.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGoldBetting, 0.56, 0.5);
        this._txtGoldBetting.setTextColor(cc.color(254, 247, 55, 255));
        let _txtGoldBettingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGoldBetting);
        _txtGoldBettingLayoutComponent.setPositionPercentXEnabled(true);
        _txtGoldBettingLayoutComponent.setPositionPercentX(0.56);
        _txtGoldBettingLayoutComponent.setPositionPercentYEnabled(true);
        _txtGoldBettingLayoutComponent.setPositionPercentY(0.5);
        this._txtGoldBetting.setTouchEnabled(false);
        this._txtGoldBetting.ignoreContentAdaptWithSize(true);
        this._txtGoldBetting.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGoldBetting.setDefaultFontSize(26);
        this._txtGoldBetting.setTextHorizontalAlignment(1);
        this._txtGoldBetting.setTextVerticalAlignment(1);
        this._txtGoldBetting.autoFitSingleLine();

        ///// # _btnAutoPlay
        this._btnAutoPlay = new ccui.Button();
        this._btnAutoPlay.setName("_btnAutoPlay");
        this._imgFrame.addChild(this._btnAutoPlay);
        this._btnAutoPlay.setCascadeOpacityEnabled(true);
        this._btnAutoPlay.setCascadeColorEnabled(true);
        this._btnAutoPlay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAutoPlay, 1.1316, 0.7457);
        let _btnAutoPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAutoPlay);
        _btnAutoPlayLayoutComponent.setPositionPercentXEnabled(true);
        _btnAutoPlayLayoutComponent.setPositionPercentX(1.1316);
        _btnAutoPlayLayoutComponent.setPositionPercentYEnabled(true);
        _btnAutoPlayLayoutComponent.setPositionPercentY(0.7457);
        this._btnAutoPlay.loadTextureDisabled("basics/other/Box_09.png", 1);
        this._btnAutoPlay.loadTexturePressed("basics/other/Box_09.png", 1);
        this._btnAutoPlay.loadTextureNormal("basics/other/Box_09.png", 1);
        this._btnAutoPlay.setUnifySizeEnabled(false);
        this._btnAutoPlay.ignoreContentAdaptWithSize(false);
        this._btnAutoPlay.setScale9Enabled(true);
        this._btnAutoPlay.setCapInsets(cc.rect(15, 11, 22, 31));
        this._btnAutoPlay.setContentSize(cc.size(52, 53));
        this._btnAutoPlay.setTouchEnabled(true);

        ///// # _imgCheckAutoPlay
        this._imgCheckAutoPlay = new ccui.ImageView();
        this._imgCheckAutoPlay.setName("_imgCheckAutoPlay");
        this._btnAutoPlay.addChild(this._imgCheckAutoPlay);
        this._imgCheckAutoPlay.setCascadeOpacityEnabled(true);
        this._imgCheckAutoPlay.setCascadeColorEnabled(true);
        this._imgCheckAutoPlay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCheckAutoPlay, 0.55, 0.5);
        let _imgCheckAutoPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCheckAutoPlay);
        _imgCheckAutoPlayLayoutComponent.setPositionPercentXEnabled(true);
        _imgCheckAutoPlayLayoutComponent.setPositionPercentX(0.55);
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
        this._btnAutoPlay.addChild(this._imgTxtAutoPlay);
        this._imgTxtAutoPlay.setCascadeOpacityEnabled(true);
        this._imgTxtAutoPlay.setCascadeColorEnabled(true);
        this._imgTxtAutoPlay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTxtAutoPlay, 0.5, -0.7);
        let _imgTxtAutoPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTxtAutoPlay);
        _imgTxtAutoPlayLayoutComponent.setPositionPercentXEnabled(true);
        _imgTxtAutoPlayLayoutComponent.setPositionPercentX(0.5);
        _imgTxtAutoPlayLayoutComponent.setPositionPercentYEnabled(true);
        _imgTxtAutoPlayLayoutComponent.setPositionPercentY(-0.7);
        this._imgTxtAutoPlay.loadTexture("texts/minigames/AutoPlay.png", 1);
        this._imgTxtAutoPlay.setTouchEnabled(false);

        ///// # _expBar
        this._expBar = new progressExp();
        this._expBar.setName("_expBar");
        this._imgFrame.addChild(this._expBar);
        this._expBar.setCascadeOpacityEnabled(true);
        this._expBar.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._expBar, 0.5, 1.11);
        let _expBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._expBar);
        _expBarLayoutComponent.setPositionPercentXEnabled(true);
        _expBarLayoutComponent.setPositionPercentX(0.5);
        _expBarLayoutComponent.setPositionPercentYEnabled(true);
        _expBarLayoutComponent.setPositionPercentY(1.11);

        ///// # _cardPos
        this._cardPos = new cc.Sprite();
        this._cardPos.setName("_cardPos");
        this._imgFrame.addChild(this._cardPos);
        this._cardPos.setCascadeOpacityEnabled(true);
        this._cardPos.setCascadeColorEnabled(true);
        this._cardPos.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._cardPos, 0.5, 1.7771);
        this._cardPos.setOpacity(0);
        let _cardPosLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._cardPos);
        _cardPosLayoutComponent.setPositionPercentXEnabled(true);
        _cardPosLayoutComponent.setPositionPercentX(0.5);
        let sf = cc.spriteFrameCache.getSpriteFrame("card-flip-particular/Cards.png"); if (sf) this._cardPos.setSpriteFrame(sf);
        let _cardPosBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _cardPosBlendFunc.src = 1;
        _cardPosBlendFunc.dst = 771;
        this._cardPos.setBlendFunc(_cardPosBlendFunc);

    },



});

/**
 * Create GuiCardFlipUser
 * @returns {_ccs.GuiCardFlipUser}
 */
_ccs.GuiCardFlipUser.create = function () {
    return new _ccs.GuiCardFlipUser();
};
