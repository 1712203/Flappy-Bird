/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PistiPlayerRenderer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.PistiPlayerRenderer = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _widgetGameInfo: null,
    /** @type {cc.Node} */
    _nodeCollectedCard: null,
    /** @type {ccui.ImageView} */
    _imgCollectedCardShadow: null,
    /** @type {ccui.ImageView} */
    _imgCollectedCard: null,
    /** @type {ck.Text} */
    _txtCollectedCardAmount: null,
    /** @type {ck.Text} */
    _txtScoreHeader: null,
    /** @type {ck.Text} */
    _txtScore: null,
    /** @type {ck.Text} */
    _txtMostCard: null,
    /** @type {cc.Node} */
    _nodeCollectExp: null,
    /** @type {ccui.ImageView} */
    _widgetProfile: null,
    /** @type {ccui.Layout} */
    _layoutCoin: null,
    /** @type {ccui.ImageView} */
    _imgCoinIcon: null,
    /** @type {ck.Text} */
    _txtCoin: null,
    /** @type {ccui.Button} */
    _btnAddCoin: null,
    /** @type {ccui.Layout} */
    _layoutGem: null,
    /** @type {ccui.ImageView} */
    _imgGemIcon: null,
    /** @type {ck.Text} */
    _txtGem: null,
    /** @type {ccui.Button} */
    _btnAddGem: null,
    /** @type {cc.Node} */
    _nodeAvatar: null,
    /** @type {Avatar} */
    _avatarNode: null,
    /** @type {cc.ProgressTimer} */
    _timer: null,
    /** @type {ck.Text} */
    _txtTime: null,
    /** @type {ccui.Layout} */
    _layoutLevel: null,
    /** @type {ccui.ImageView} */
    _imgLevelBgr: null,
    /** @type {ck.LoadingBar} */
    _loadingBarLevel: null,
    /** @type {ck.Text} */
    _txtLevel: null,
    /** @type {ck.Text} */
    _txtPlayerName: null,


    /**
     * _ccs.PistiPlayerRenderer constructor
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

        ///// # _layoutRoot
        this._layoutRoot = new ccui.Layout();
        this._layoutRoot.setName("_layoutRoot");
        this.addChild(this._layoutRoot);
        this._layoutRoot.setCascadeOpacityEnabled(true);
        this._layoutRoot.setCascadeColorEnabled(true);
        this._layoutRoot.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        this._layoutRoot.setTouchEnabled(true);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(447.4491, 136.4332));

        ///// # _widgetGameInfo
        this._widgetGameInfo = new ccui.ImageView();
        this._widgetGameInfo.setName("_widgetGameInfo");
        this._layoutRoot.addChild(this._widgetGameInfo);
        this._widgetGameInfo.setCascadeOpacityEnabled(true);
        this._widgetGameInfo.setCascadeColorEnabled(true);
        this._widgetGameInfo.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._widgetGameInfo, 0.655, 0.511);
        let _widgetGameInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._widgetGameInfo);
        _widgetGameInfoLayoutComponent.setPositionPercentXEnabled(true);
        _widgetGameInfoLayoutComponent.setPositionPercentX(0.655);
        _widgetGameInfoLayoutComponent.setPositionPercentYEnabled(true);
        _widgetGameInfoLayoutComponent.setPositionPercentY(0.511);
        this._widgetGameInfo.loadTexture("basics/other/HalfBlueBoard.png", 1);
        this._widgetGameInfo.setUnifySizeEnabled(false);
        this._widgetGameInfo.ignoreContentAdaptWithSize(false);
        this._widgetGameInfo.setScale9Enabled(true);
        this._widgetGameInfo.setCapInsets(cc.rect(22, 14, 3, 2));
        this._widgetGameInfo.setContentSize(cc.size(143, 102));
        this._widgetGameInfo.setTouchEnabled(false);

        ///// # _nodeCollectedCard
        this._nodeCollectedCard = new cc.Node();
        this._nodeCollectedCard.setName("_nodeCollectedCard");
        this._widgetGameInfo.addChild(this._nodeCollectedCard);
        this._nodeCollectedCard.setCascadeOpacityEnabled(true);
        this._nodeCollectedCard.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeCollectedCard, 0.28, 0.5);
        let _nodeCollectedCardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCollectedCard);
        _nodeCollectedCardLayoutComponent.setPositionPercentXEnabled(true);
        _nodeCollectedCardLayoutComponent.setPositionPercentX(0.28);
        _nodeCollectedCardLayoutComponent.setPositionPercentYEnabled(true);
        _nodeCollectedCardLayoutComponent.setPositionPercentY(0.5);

        ///// # _imgCollectedCardShadow
        this._imgCollectedCardShadow = new ccui.ImageView();
        this._imgCollectedCardShadow.setName("_imgCollectedCardShadow");
        this._nodeCollectedCard.addChild(this._imgCollectedCardShadow);
        this._imgCollectedCardShadow.setCascadeOpacityEnabled(true);
        this._imgCollectedCardShadow.setCascadeColorEnabled(true);
        this._imgCollectedCardShadow.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCollectedCardShadow.setScale(0.8, 0.8);
        this._imgCollectedCardShadow.setOpacity(127);
        this._imgCollectedCardShadow.setColor(cc.color(0, 0, 0, 255));
        let _imgCollectedCardShadowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCollectedCardShadow);
        this._imgCollectedCardShadow.loadTexture("game/ui/Deck.png", 1);
        this._imgCollectedCardShadow.setUnifySizeEnabled(false);
        this._imgCollectedCardShadow.ignoreContentAdaptWithSize(false);
        this._imgCollectedCardShadow.setContentSize(cc.size(69, 98));
        this._imgCollectedCardShadow.setTouchEnabled(false);

        ///// # _imgCollectedCard
        this._imgCollectedCard = new ccui.ImageView();
        this._imgCollectedCard.setName("_imgCollectedCard");
        this._nodeCollectedCard.addChild(this._imgCollectedCard);
        this._imgCollectedCard.setCascadeOpacityEnabled(true);
        this._imgCollectedCard.setCascadeColorEnabled(true);
        this._imgCollectedCard.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCollectedCard.setScale(0.75, 0.75);
        let _imgCollectedCardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCollectedCard);
        this._imgCollectedCard.loadTexture("game/ui/Deck.png", 1);
        this._imgCollectedCard.setUnifySizeEnabled(false);
        this._imgCollectedCard.ignoreContentAdaptWithSize(false);
        this._imgCollectedCard.setContentSize(cc.size(69, 98));
        this._imgCollectedCard.setTouchEnabled(false);

        ///// # _txtCollectedCardAmount
        this._txtCollectedCardAmount = new ck.Text();
        this._txtCollectedCardAmount.setName("_txtCollectedCardAmount");
        this._nodeCollectedCard.addChild(this._txtCollectedCardAmount);
        this._txtCollectedCardAmount.setCascadeOpacityEnabled(true);
        this._txtCollectedCardAmount.setCascadeColorEnabled(true);
        this._txtCollectedCardAmount.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtCollectedCardAmount.setPosition(0, 5);
        let _txtCollectedCardAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCollectedCardAmount);
        this._txtCollectedCardAmount.setTouchEnabled(false);
        this._txtCollectedCardAmount.ignoreContentAdaptWithSize(true);
        this._txtCollectedCardAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCollectedCardAmount.setDefaultFontSize(30);
        this._txtCollectedCardAmount.setTextHorizontalAlignment(1);
        this._txtCollectedCardAmount.setTextVerticalAlignment(1);
        this._txtCollectedCardAmount.enableOutline(cc.color(0, 47, 47, 255), 1);

        ///// # _txtScoreHeader
        this._txtScoreHeader = new ck.Text();
        this._txtScoreHeader.setName("_txtScoreHeader");
        this._widgetGameInfo.addChild(this._txtScoreHeader);
        this._txtScoreHeader.setCascadeOpacityEnabled(true);
        this._txtScoreHeader.setCascadeColorEnabled(true);
        this._txtScoreHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtScoreHeader, 0.7124, 0.7684);
        this._txtScoreHeader.setScale(1, 0.9377);
        let _txtScoreHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtScoreHeader);
        _txtScoreHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtScoreHeaderLayoutComponent.setPositionPercentX(0.7124);
        _txtScoreHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtScoreHeaderLayoutComponent.setPositionPercentY(0.7684);
        this._txtScoreHeader.setTouchEnabled(false);
        this._txtScoreHeader.ignoreContentAdaptWithSize(true);
        this._txtScoreHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtScoreHeader.setDefaultFontSize(22);
        this._txtScoreHeader.setString(gm.localize.getText("TXT_POINT"));
        this._txtScoreHeader.setTextHorizontalAlignment(1);
        this._txtScoreHeader.setTextVerticalAlignment(1);
        this._txtScoreHeader.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _txtScore
        this._txtScore = new ck.Text();
        this._txtScore.setName("_txtScore");
        this._widgetGameInfo.addChild(this._txtScore);
        this._txtScore.setCascadeOpacityEnabled(true);
        this._txtScore.setCascadeColorEnabled(true);
        this._txtScore.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtScore, 0.6943, 0.5);
        let _txtScoreLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtScore);
        _txtScoreLayoutComponent.setPositionPercentXEnabled(true);
        _txtScoreLayoutComponent.setPositionPercentX(0.6943);
        _txtScoreLayoutComponent.setPositionPercentYEnabled(true);
        _txtScoreLayoutComponent.setPositionPercentY(0.5);
        this._txtScore.setTouchEnabled(false);
        this._txtScore.ignoreContentAdaptWithSize(true);
        this._txtScore.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtScore.setDefaultFontSize(45);
        this._txtScore.setTextHorizontalAlignment(1);
        this._txtScore.setTextVerticalAlignment(1);
        this._txtScore.enableOutline(cc.color(0, 47, 47, 255), 2);

        ///// # _txtMostCard
        this._txtMostCard = new ck.Text();
        this._txtMostCard.setName("_txtMostCard");
        this._widgetGameInfo.addChild(this._txtMostCard);
        this._txtMostCard.setCascadeOpacityEnabled(true);
        this._txtMostCard.setCascadeColorEnabled(true);
        this._txtMostCard.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMostCard, 0.8088, 0.2823);
        this._txtMostCard.setTextColor(cc.color(255, 235, 138, 255));
        let _txtMostCardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMostCard);
        _txtMostCardLayoutComponent.setPositionPercentXEnabled(true);
        _txtMostCardLayoutComponent.setPositionPercentX(0.8088);
        _txtMostCardLayoutComponent.setPositionPercentYEnabled(true);
        _txtMostCardLayoutComponent.setPositionPercentY(0.2823);
        this._txtMostCard.setTouchEnabled(false);
        this._txtMostCard.ignoreContentAdaptWithSize(true);
        this._txtMostCard.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtMostCard.setDefaultFontSize(35);
        this._txtMostCard.setString("+3");
        this._txtMostCard.setTextHorizontalAlignment(1);
        this._txtMostCard.setTextVerticalAlignment(1);
        this._txtMostCard.enableOutline(cc.color(0, 80, 80, 255), 2);

        ///// # _nodeCollectExp
        this._nodeCollectExp = new cc.Node();
        this._nodeCollectExp.setName("_nodeCollectExp");
        this._widgetGameInfo.addChild(this._nodeCollectExp);
        this._nodeCollectExp.setCascadeOpacityEnabled(true);
        this._nodeCollectExp.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeCollectExp, 0.28, 0.5);
        let _nodeCollectExpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCollectExp);
        _nodeCollectExpLayoutComponent.setPositionPercentXEnabled(true);
        _nodeCollectExpLayoutComponent.setPositionPercentX(0.28);
        _nodeCollectExpLayoutComponent.setPositionPercentYEnabled(true);
        _nodeCollectExpLayoutComponent.setPositionPercentY(0.5);

        ///// # _widgetProfile
        this._widgetProfile = new ccui.ImageView();
        this._widgetProfile.setName("_widgetProfile");
        this._layoutRoot.addChild(this._widgetProfile);
        this._widgetProfile.setCascadeOpacityEnabled(true);
        this._widgetProfile.setCascadeColorEnabled(true);
        this._widgetProfile.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._widgetProfile, 0.3779, 0.5);
        let _widgetProfileLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._widgetProfile);
        _widgetProfileLayoutComponent.setPositionPercentXEnabled(true);
        _widgetProfileLayoutComponent.setPositionPercentX(0.3779);
        _widgetProfileLayoutComponent.setPositionPercentYEnabled(true);
        _widgetProfileLayoutComponent.setPositionPercentY(0.5);
        this._widgetProfile.loadTexture("home/ProfilePanel.png", 1);
        this._widgetProfile.setUnifySizeEnabled(false);
        this._widgetProfile.ignoreContentAdaptWithSize(false);
        this._widgetProfile.setContentSize(cc.size(270, 105));
        this._widgetProfile.setTouchEnabled(true);

        ///// # _layoutCoin
        this._layoutCoin = new ccui.Layout();
        this._layoutCoin.setName("_layoutCoin");
        this._widgetProfile.addChild(this._layoutCoin);
        this._layoutCoin.setCascadeOpacityEnabled(true);
        this._layoutCoin.setCascadeColorEnabled(true);
        this._layoutCoin.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCoin, 0.362, 0.8165);
        let _layoutCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCoin);
        _layoutCoinLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentX(0.362);
        _layoutCoinLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentY(0.8165);
        this._layoutCoin.setTouchEnabled(true);
        this._layoutCoin.setUnifySizeEnabled(false);
        this._layoutCoin.ignoreContentAdaptWithSize(false);
        this._layoutCoin.setContentSize(cc.size(153, 28));
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
        this._imgCoinIcon.setContentSize(cc.size(40, 40));
        this._imgCoinIcon.setTouchEnabled(false);

        ///// # _txtCoin
        this._txtCoin = new ck.Text();
        this._txtCoin.setName("_txtCoin");
        this._layoutCoin.addChild(this._txtCoin);
        this._txtCoin.setCascadeOpacityEnabled(true);
        this._txtCoin.setCascadeColorEnabled(true);
        this._txtCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCoin, 0.488, 0.5);
        this._txtCoin.setTextColor(cc.color(255, 255, 141, 255));
        let _txtCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCoin);
        _txtCoinLayoutComponent.setPositionPercentXEnabled(true);
        _txtCoinLayoutComponent.setPositionPercentX(0.488);
        _txtCoinLayoutComponent.setPositionPercentYEnabled(true);
        _txtCoinLayoutComponent.setPositionPercentY(0.5);
        this._txtCoin.setTouchEnabled(false);
        this._txtCoin.ignoreContentAdaptWithSize(true);
        this._txtCoin.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCoin.setDefaultFontSize(18);
        this._txtCoin.setTextHorizontalAlignment(1);
        this._txtCoin.setTextVerticalAlignment(1);

        ///// # _btnAddCoin
        this._btnAddCoin = new ccui.Button();
        this._btnAddCoin.setName("_btnAddCoin");
        this._layoutCoin.addChild(this._btnAddCoin);
        this._btnAddCoin.setCascadeOpacityEnabled(true);
        this._btnAddCoin.setCascadeColorEnabled(true);
        this._btnAddCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAddCoin, 1, 0.5);
        let _btnAddCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddCoin);
        _btnAddCoinLayoutComponent.setPositionPercentXEnabled(true);
        _btnAddCoinLayoutComponent.setPositionPercentX(1);
        _btnAddCoinLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddCoinLayoutComponent.setPositionPercentY(0.5);
        this._btnAddCoin.loadTextureDisabled("buttons/rectangles/Add.png", 1);
        this._btnAddCoin.loadTexturePressed("buttons/rectangles/Add.png", 1);
        this._btnAddCoin.loadTextureNormal("buttons/rectangles/Add.png", 1);
        this._btnAddCoin.setUnifySizeEnabled(false);
        this._btnAddCoin.ignoreContentAdaptWithSize(false);
        this._btnAddCoin.setScale9Enabled(true);
        this._btnAddCoin.setCapInsets(cc.rect(15, 11, 1, 10));
        this._btnAddCoin.setContentSize(cc.size(31, 32));
        this._btnAddCoin.setTouchEnabled(true);

        ///// # _layoutGem
        this._layoutGem = new ccui.Layout();
        this._layoutGem.setName("_layoutGem");
        this._widgetProfile.addChild(this._layoutGem);
        this._layoutGem.setCascadeOpacityEnabled(true);
        this._layoutGem.setCascadeColorEnabled(true);
        this._layoutGem.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutGem, 0.362, 0.5225);
        let _layoutGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGem);
        _layoutGemLayoutComponent.setPositionPercentXEnabled(true);
        _layoutGemLayoutComponent.setPositionPercentX(0.362);
        _layoutGemLayoutComponent.setPositionPercentYEnabled(true);
        _layoutGemLayoutComponent.setPositionPercentY(0.5225);
        this._layoutGem.setTouchEnabled(true);
        this._layoutGem.setUnifySizeEnabled(false);
        this._layoutGem.ignoreContentAdaptWithSize(false);
        this._layoutGem.setContentSize(cc.size(153, 28));
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
        this._imgGemIcon.setContentSize(cc.size(40, 40));
        this._imgGemIcon.setTouchEnabled(false);

        ///// # _txtGem
        this._txtGem = new ck.Text();
        this._txtGem.setName("_txtGem");
        this._layoutGem.addChild(this._txtGem);
        this._txtGem.setCascadeOpacityEnabled(true);
        this._txtGem.setCascadeColorEnabled(true);
        this._txtGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGem, 0.488, 0.5);
        this._txtGem.setTextColor(cc.color(243, 192, 255, 255));
        let _txtGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGem);
        _txtGemLayoutComponent.setPositionPercentXEnabled(true);
        _txtGemLayoutComponent.setPositionPercentX(0.488);
        _txtGemLayoutComponent.setPositionPercentYEnabled(true);
        _txtGemLayoutComponent.setPositionPercentY(0.5);
        this._txtGem.setTouchEnabled(false);
        this._txtGem.ignoreContentAdaptWithSize(true);
        this._txtGem.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGem.setDefaultFontSize(18);
        this._txtGem.setTextHorizontalAlignment(1);
        this._txtGem.setTextVerticalAlignment(1);

        ///// # _btnAddGem
        this._btnAddGem = new ccui.Button();
        this._btnAddGem.setName("_btnAddGem");
        this._layoutGem.addChild(this._btnAddGem);
        this._btnAddGem.setCascadeOpacityEnabled(true);
        this._btnAddGem.setCascadeColorEnabled(true);
        this._btnAddGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAddGem, 1, 0.5);
        let _btnAddGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddGem);
        _btnAddGemLayoutComponent.setPositionPercentXEnabled(true);
        _btnAddGemLayoutComponent.setPositionPercentX(1);
        _btnAddGemLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddGemLayoutComponent.setPositionPercentY(0.5);
        this._btnAddGem.loadTextureDisabled("buttons/rectangles/Add.png", 1);
        this._btnAddGem.loadTexturePressed("buttons/rectangles/Add.png", 1);
        this._btnAddGem.loadTextureNormal("buttons/rectangles/Add.png", 1);
        this._btnAddGem.setUnifySizeEnabled(false);
        this._btnAddGem.ignoreContentAdaptWithSize(false);
        this._btnAddGem.setScale9Enabled(true);
        this._btnAddGem.setCapInsets(cc.rect(15, 11, 1, 10));
        this._btnAddGem.setContentSize(cc.size(31, 32));
        this._btnAddGem.setTouchEnabled(true);

        ///// # _nodeAvatar
        this._nodeAvatar = new cc.Node();
        this._nodeAvatar.setName("_nodeAvatar");
        this._widgetProfile.addChild(this._nodeAvatar);
        this._nodeAvatar.setCascadeOpacityEnabled(true);
        this._nodeAvatar.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeAvatar, 0.0908, 0.5);
        let _nodeAvatarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeAvatar);
        _nodeAvatarLayoutComponent.setPositionPercentXEnabled(true);
        _nodeAvatarLayoutComponent.setPositionPercentX(0.0908);
        _nodeAvatarLayoutComponent.setPositionPercentYEnabled(true);
        _nodeAvatarLayoutComponent.setPositionPercentY(0.5);

        ///// # _avatarNode
        this._avatarNode = new Avatar(ck.AvatarType.CIRCLE);
        this._avatarNode.setName("_avatarNode");
        this._nodeAvatar.addChild(this._avatarNode);
        this._avatarNode.setCascadeOpacityEnabled(true);
        this._avatarNode.setCascadeColorEnabled(true);
        this._avatarNode.setAnchorPoint(cc.p(0.5, 0.5));
        let _avatarNodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._avatarNode);
        this._avatarNode.setWidth(105);

        ///// # _timer
        let __sprite = new cc.Sprite();
        __sprite.setSpriteFrame(cc.spriteFrameCache.getSpriteFrame("avatars/CountdownYellow.png"));
        this._timer = new cc.ProgressTimer(__sprite);
        this._timer.setName("_timer");
        this._nodeAvatar.addChild(this._timer);
        this._timer.setCascadeOpacityEnabled(true);
        this._timer.setCascadeColorEnabled(true);
        this._timer.setAnchorPoint(cc.p(0.5, 0.5));
        this._timer.setScale(0.93, 0.93);
        let _timerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._timer);
        this._timer.setType(cc.ProgressTimer.TYPE_RADIAL);

        ///// # _txtTime
        this._txtTime = new ck.Text();
        this._txtTime.setName("_txtTime");
        this._nodeAvatar.addChild(this._txtTime);
        this._txtTime.setCascadeOpacityEnabled(true);
        this._txtTime.setCascadeColorEnabled(true);
        this._txtTime.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtTime.setTextColor(cc.color(254, 255, 191, 255));
        let _txtTimeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTime);
        this._txtTime.setTouchEnabled(false);
        this._txtTime.ignoreContentAdaptWithSize(true);
        this._txtTime.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtTime.setDefaultFontSize(48);
        this._txtTime.setTextHorizontalAlignment(1);
        this._txtTime.setTextVerticalAlignment(1);
        this._txtTime.enableOutline(cc.color(94, 27, 0, 255), 2);

        ///// # _layoutLevel
        this._layoutLevel = new ccui.Layout();
        this._layoutLevel.setName("_layoutLevel");
        this._widgetProfile.addChild(this._layoutLevel);
        this._layoutLevel.setCascadeOpacityEnabled(true);
        this._layoutLevel.setCascadeColorEnabled(true);
        this._layoutLevel.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutLevel, 0.0908, 0.1107);
        let _layoutLevelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLevel);
        _layoutLevelLayoutComponent.setPositionPercentXEnabled(true);
        _layoutLevelLayoutComponent.setPositionPercentX(0.0908);
        _layoutLevelLayoutComponent.setPositionPercentYEnabled(true);
        _layoutLevelLayoutComponent.setPositionPercentY(0.1107);
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
        _imgLevelBgrLayoutComponent.setPercentWidth(1.2061);
        _imgLevelBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgLevelBgrLayoutComponent.setPercentHeight(1);
        this._imgLevelBgr.loadTexture("home/LevelBox.png", 1);
        this._imgLevelBgr.setUnifySizeEnabled(false);
        this._imgLevelBgr.ignoreContentAdaptWithSize(false);
        this._imgLevelBgr.setScale9Enabled(true);
        this._imgLevelBgr.setCapInsets(cc.rect(25, 15, 5, 1));
        ck.UIUtils.setSizePercent(this._imgLevelBgr, 1.2061, 1);
        this._imgLevelBgr.setTouchEnabled(false);

        ///// # _loadingBarLevel
        this._loadingBarLevel = new ck.LoadingBar();
        this._loadingBarLevel.setName("_loadingBarLevel");
        this._layoutLevel.addChild(this._loadingBarLevel);
        this._loadingBarLevel.setCascadeOpacityEnabled(true);
        this._loadingBarLevel.setCascadeColorEnabled(true);
        this._loadingBarLevel.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._loadingBarLevel, 0.5, 0.54);
        let _loadingBarLevelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._loadingBarLevel);
        _loadingBarLevelLayoutComponent.setPositionPercentXEnabled(true);
        _loadingBarLevelLayoutComponent.setPositionPercentX(0.5);
        _loadingBarLevelLayoutComponent.setPositionPercentYEnabled(true);
        _loadingBarLevelLayoutComponent.setPositionPercentY(0.54);
        this._loadingBarLevel.setTouchEnabled(false);
        this._loadingBarLevel.setUnifySizeEnabled(false);
        this._loadingBarLevel.ignoreContentAdaptWithSize(false);
        this._loadingBarLevel.setContentSize(cc.size(65, 29.1926));
        this._loadingBarLevel.loadTexture("basics/bars/Bar_17.png", 1);

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

        ///// # _txtPlayerName
        this._txtPlayerName = new ck.Text();
        this._txtPlayerName.setName("_txtPlayerName");
        this._widgetProfile.addChild(this._txtPlayerName);
        this._txtPlayerName.setCascadeOpacityEnabled(true);
        this._txtPlayerName.setCascadeColorEnabled(true);
        this._txtPlayerName.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPlayerName, 0.3321, 0.1747);
        let _txtPlayerNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPlayerName);
        _txtPlayerNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtPlayerNameLayoutComponent.setPositionPercentX(0.3321);
        _txtPlayerNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtPlayerNameLayoutComponent.setPositionPercentY(0.1747);
        this._txtPlayerName.setTouchEnabled(false);
        this._txtPlayerName.ignoreContentAdaptWithSize(true);
        this._txtPlayerName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtPlayerName.setDefaultFontSize(22);
        this._txtPlayerName.setTextHorizontalAlignment(2);
        this._txtPlayerName.setTextVerticalAlignment(1);

    },



});

/**
 * Create PistiPlayerRenderer
 * @returns {_ccs.PistiPlayerRenderer}
 */
_ccs.PistiPlayerRenderer.create = function () {
    return new _ccs.PistiPlayerRenderer();
};
