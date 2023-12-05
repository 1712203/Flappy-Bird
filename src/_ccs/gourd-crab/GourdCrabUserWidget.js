/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.GourdCrabUserWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.GourdCrabUserWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutHub: null,
    /** @type {ccui.ImageView} */
    _imgHubBackground: null,
    /** @type {ccui.Layout} */
    _layoutInfo: null,
    /** @type {ccui.ImageView} */
    _imgLevelBar: null,
    /** @type {ck.LoadingBar} */
    _loadingBarLevel: null,
    /** @type {cc.Node} */
    _nodeAvatar: null,
    /** @type {Avatar} */
    _avatarNode: null,
    /** @type {ccui.ImageView} */
    _imgCrown: null,
    /** @type {ccui.Layout} */
    _layoutLevel: null,
    /** @type {ccui.ImageView} */
    _imgLevelBgr: null,
    /** @type {ck.Text} */
    _txtLevel: null,
    /** @type {ccui.Layout} */
    _layoutBet: null,
    /** @type {ccui.Layout} */
    _layoutBetButton0: null,
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
    _layoutBetButton1: null,
    /** @type {ccui.Layout} */
    _layoutButtonBet10: null,
    /** @type {ccui.ImageView} */
    _imgButtonBet10: null,
    /** @type {ck.Text} */
    _txtButtonBet10: null,
    /** @type {ccui.ImageView} */
    _imgIconBet10: null,
    /** @type {ccui.Layout} */
    _layoutButtonBet11: null,
    /** @type {ccui.ImageView} */
    _imgButtonBet11: null,
    /** @type {ck.Text} */
    _txtButtonBet11: null,
    /** @type {ccui.ImageView} */
    _imgIconBet11: null,
    /** @type {ccui.Layout} */
    _layoutButtonBet12: null,
    /** @type {ccui.ImageView} */
    _imgButtonBet12: null,
    /** @type {ck.Text} */
    _txtButtonBet12: null,
    /** @type {ccui.ImageView} */
    _imgIconBet12: null,
    /** @type {ccui.Layout} */
    _layoutGem: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundGem: null,
    /** @type {ccui.ImageView} */
    _imgGemIcon: null,
    /** @type {ck.Text} */
    _txtGem: null,
    /** @type {ccui.Button} */
    _btnAddGem: null,
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
    _imgButtonRetract: null,
    /** @type {ccui.Layout} */
    _layoutInteract: null,
    /** @type {cc.Node} */
    _nodeInteract: null,
    /** @type {ck.Text} */
    _txtCoinWin: null,
    /** @type {ccui.ImageView} */
    _imgIconCoinWin: null,
    /** @type {ck.Text} */
    _txtGemWin: null,
    /** @type {ccui.ImageView} */
    _imgIconGemWin: null,


    /**
     * _ccs.GourdCrabUserWidget constructor
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
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(510, 190));

        ///// # _layoutHub
        this._layoutHub = new ccui.Layout();
        this._layoutHub.setName("_layoutHub");
        this._layoutRoot.addChild(this._layoutHub);
        this._layoutHub.setCascadeOpacityEnabled(true);
        this._layoutHub.setCascadeColorEnabled(true);
        this._layoutHub.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutHub, 0.5, 0);
        let _layoutHubLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHub);
        _layoutHubLayoutComponent.setPositionPercentXEnabled(true);
        _layoutHubLayoutComponent.setPositionPercentX(0.5);
        _layoutHubLayoutComponent.setPercentWidthEnabled(true);
        _layoutHubLayoutComponent.setPercentWidth(0.97);
        _layoutHubLayoutComponent.setPercentHeightEnabled(true);
        _layoutHubLayoutComponent.setPercentHeight(1);
        this._layoutHub.setTouchEnabled(false);
        this._layoutHub.setUnifySizeEnabled(false);
        this._layoutHub.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutHub, 0.97, 1);

        ///// # _imgHubBackground
        this._imgHubBackground = new ccui.ImageView();
        this._imgHubBackground.setName("_imgHubBackground");
        this._layoutHub.addChild(this._imgHubBackground);
        this._imgHubBackground.setCascadeOpacityEnabled(true);
        this._imgHubBackground.setCascadeColorEnabled(true);
        this._imgHubBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHubBackground, 0.5, 0.5);
        let _imgHubBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHubBackground);
        _imgHubBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgHubBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgHubBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgHubBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgHubBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgHubBackgroundLayoutComponent.setPercentWidth(1);
        _imgHubBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgHubBackgroundLayoutComponent.setPercentHeight(1);
        this._imgHubBackground.loadTexture("gourd-crab/UserContainerBackground.png", 1);
        this._imgHubBackground.setUnifySizeEnabled(false);
        this._imgHubBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgHubBackground, 1, 1);
        this._imgHubBackground.setTouchEnabled(false);

        ///// # _layoutInfo
        this._layoutInfo = new ccui.Layout();
        this._layoutInfo.setName("_layoutInfo");
        this._layoutHub.addChild(this._layoutInfo);
        this._layoutInfo.setCascadeOpacityEnabled(true);
        this._layoutInfo.setCascadeColorEnabled(true);
        this._layoutInfo.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutInfo, 0.14, 0);
        let _layoutInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInfo);
        _layoutInfoLayoutComponent.setPositionPercentXEnabled(true);
        _layoutInfoLayoutComponent.setPositionPercentX(0.14);
        _layoutInfoLayoutComponent.setPercentWidthEnabled(true);
        _layoutInfoLayoutComponent.setPercentWidth(0.25);
        _layoutInfoLayoutComponent.setPercentHeightEnabled(true);
        _layoutInfoLayoutComponent.setPercentHeight(0.8278);
        this._layoutInfo.setTouchEnabled(false);
        this._layoutInfo.setUnifySizeEnabled(false);
        this._layoutInfo.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutInfo, 0.25, 0.8278);

        ///// # _imgLevelBar
        this._imgLevelBar = new ccui.ImageView();
        this._imgLevelBar.setName("_imgLevelBar");
        this._layoutInfo.addChild(this._imgLevelBar);
        this._imgLevelBar.setCascadeOpacityEnabled(true);
        this._imgLevelBar.setCascadeColorEnabled(true);
        this._imgLevelBar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLevelBar, 0.5, 0.18);
        let _imgLevelBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLevelBar);
        _imgLevelBarLayoutComponent.setPositionPercentXEnabled(true);
        _imgLevelBarLayoutComponent.setPositionPercentX(0.5);
        _imgLevelBarLayoutComponent.setPositionPercentYEnabled(true);
        _imgLevelBarLayoutComponent.setPositionPercentY(0.18);
        this._imgLevelBar.loadTexture("bingo/ui/BarExpBackground.png", 1);
        this._imgLevelBar.setUnifySizeEnabled(false);
        this._imgLevelBar.ignoreContentAdaptWithSize(false);
        this._imgLevelBar.setContentSize(cc.size(78, 14));
        this._imgLevelBar.setTouchEnabled(false);

        ///// # _loadingBarLevel
        this._loadingBarLevel = new ck.LoadingBar();
        this._loadingBarLevel.setName("_loadingBarLevel");
        this._imgLevelBar.addChild(this._loadingBarLevel);
        this._loadingBarLevel.setCascadeOpacityEnabled(true);
        this._loadingBarLevel.setCascadeColorEnabled(true);
        this._loadingBarLevel.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._loadingBarLevel, 0.5, 0.52);
        let _loadingBarLevelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._loadingBarLevel);
        _loadingBarLevelLayoutComponent.setPositionPercentXEnabled(true);
        _loadingBarLevelLayoutComponent.setPositionPercentX(0.5);
        _loadingBarLevelLayoutComponent.setPositionPercentYEnabled(true);
        _loadingBarLevelLayoutComponent.setPositionPercentY(0.52);
        this._loadingBarLevel.setTouchEnabled(false);
        this._loadingBarLevel.setUnifySizeEnabled(false);
        this._loadingBarLevel.ignoreContentAdaptWithSize(false);
        this._loadingBarLevel.setContentSize(cc.size(78, 13));
        this._loadingBarLevel.loadTexture("bingo/ui/BarExp.png", 1);

        ///// # _nodeAvatar
        this._nodeAvatar = new cc.Node();
        this._nodeAvatar.setName("_nodeAvatar");
        this._layoutInfo.addChild(this._nodeAvatar);
        this._nodeAvatar.setCascadeOpacityEnabled(true);
        this._nodeAvatar.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeAvatar, 0.5, 0.6079);
        let _nodeAvatarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeAvatar);
        _nodeAvatarLayoutComponent.setPositionPercentXEnabled(true);
        _nodeAvatarLayoutComponent.setPositionPercentX(0.5);
        _nodeAvatarLayoutComponent.setPositionPercentYEnabled(true);
        _nodeAvatarLayoutComponent.setPositionPercentY(0.6079);

        ///// # _avatarNode
        this._avatarNode = new Avatar(ck.AvatarType.CIRCLE);
        this._avatarNode.setName("_avatarNode");
        this._nodeAvatar.addChild(this._avatarNode);
        this._avatarNode.setCascadeOpacityEnabled(true);
        this._avatarNode.setCascadeColorEnabled(true);
        this._avatarNode.setAnchorPoint(cc.p(0.5, 0.5));
        this._avatarNode.setPosition(0, -1);
        let _avatarNodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._avatarNode);
        this._avatarNode.setWidth(105);

        ///// # _imgCrown
        this._imgCrown = new ccui.ImageView();
        this._imgCrown.setName("_imgCrown");
        this._layoutInfo.addChild(this._imgCrown);
        this._imgCrown.setCascadeOpacityEnabled(true);
        this._imgCrown.setCascadeColorEnabled(true);
        this._imgCrown.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCrown, 0.5, 0.94);
        this._imgCrown.setVisible(false);
        let _imgCrownLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCrown);
        _imgCrownLayoutComponent.setPositionPercentXEnabled(true);
        _imgCrownLayoutComponent.setPositionPercentX(0.5);
        _imgCrownLayoutComponent.setPositionPercentYEnabled(true);
        _imgCrownLayoutComponent.setPositionPercentY(0.94);
        this._imgCrown.loadTexture("bingo/ui/Crown.png", 1);
        this._imgCrown.setUnifySizeEnabled(false);
        this._imgCrown.ignoreContentAdaptWithSize(false);
        this._imgCrown.setContentSize(cc.size(48, 35));
        this._imgCrown.setTouchEnabled(false);

        ///// # _layoutLevel
        this._layoutLevel = new ccui.Layout();
        this._layoutLevel.setName("_layoutLevel");
        this._layoutInfo.addChild(this._layoutLevel);
        this._layoutLevel.setCascadeOpacityEnabled(true);
        this._layoutLevel.setCascadeColorEnabled(true);
        this._layoutLevel.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutLevel, 0.5, 0.3311);
        let _layoutLevelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLevel);
        _layoutLevelLayoutComponent.setPositionPercentXEnabled(true);
        _layoutLevelLayoutComponent.setPositionPercentX(0.5);
        _layoutLevelLayoutComponent.setPositionPercentYEnabled(true);
        _layoutLevelLayoutComponent.setPositionPercentY(0.3311);
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

        ///// # _layoutBet
        this._layoutBet = new ccui.Layout();
        this._layoutBet.setName("_layoutBet");
        this._layoutHub.addChild(this._layoutBet);
        this._layoutBet.setCascadeOpacityEnabled(true);
        this._layoutBet.setCascadeColorEnabled(true);
        this._layoutBet.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutBet, 0.625, 0);
        let _layoutBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBet);
        _layoutBetLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBetLayoutComponent.setPositionPercentX(0.625);
        _layoutBetLayoutComponent.setPercentWidthEnabled(true);
        _layoutBetLayoutComponent.setPercentWidth(0.7439);
        _layoutBetLayoutComponent.setPercentHeightEnabled(true);
        _layoutBetLayoutComponent.setPercentHeight(1);
        this._layoutBet.setTouchEnabled(false);
        this._layoutBet.setUnifySizeEnabled(false);
        this._layoutBet.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBet, 0.7439, 1);

        ///// # _layoutBetButton0
        this._layoutBetButton0 = new ccui.Layout();
        this._layoutBetButton0.setName("_layoutBetButton0");
        this._layoutBet.addChild(this._layoutBetButton0);
        this._layoutBetButton0.setCascadeOpacityEnabled(true);
        this._layoutBetButton0.setCascadeColorEnabled(true);
        this._layoutBetButton0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBetButton0, 0.43, 0.1825);
        let _layoutBetButton0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBetButton0);
        _layoutBetButton0LayoutComponent.setPositionPercentXEnabled(true);
        _layoutBetButton0LayoutComponent.setPositionPercentX(0.43);
        _layoutBetButton0LayoutComponent.setPositionPercentYEnabled(true);
        _layoutBetButton0LayoutComponent.setPositionPercentY(0.1825);
        this._layoutBetButton0.setTouchEnabled(false);
        this._layoutBetButton0.setUnifySizeEnabled(false);
        this._layoutBetButton0.ignoreContentAdaptWithSize(false);
        this._layoutBetButton0.setContentSize(cc.size(296, 50));

        ///// # _layoutButtonBet00
        this._layoutButtonBet00 = new ccui.Layout();
        this._layoutButtonBet00.setName("_layoutButtonBet00");
        this._layoutBetButton0.addChild(this._layoutButtonBet00);
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
        this._layoutBetButton0.addChild(this._layoutButtonBet01);
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
        this._layoutBetButton0.addChild(this._layoutButtonBet02);
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

        ///// # _layoutBetButton1
        this._layoutBetButton1 = new ccui.Layout();
        this._layoutBetButton1.setName("_layoutBetButton1");
        this._layoutBet.addChild(this._layoutBetButton1);
        this._layoutBetButton1.setCascadeOpacityEnabled(true);
        this._layoutBetButton1.setCascadeColorEnabled(true);
        this._layoutBetButton1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBetButton1, 0.43, 0.4825);
        let _layoutBetButton1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBetButton1);
        _layoutBetButton1LayoutComponent.setPositionPercentXEnabled(true);
        _layoutBetButton1LayoutComponent.setPositionPercentX(0.43);
        _layoutBetButton1LayoutComponent.setPositionPercentYEnabled(true);
        _layoutBetButton1LayoutComponent.setPositionPercentY(0.4825);
        this._layoutBetButton1.setTouchEnabled(false);
        this._layoutBetButton1.setUnifySizeEnabled(false);
        this._layoutBetButton1.ignoreContentAdaptWithSize(false);
        this._layoutBetButton1.setContentSize(cc.size(296, 50));

        ///// # _layoutButtonBet10
        this._layoutButtonBet10 = new ccui.Layout();
        this._layoutButtonBet10.setName("_layoutButtonBet10");
        this._layoutBetButton1.addChild(this._layoutButtonBet10);
        this._layoutButtonBet10.setCascadeOpacityEnabled(true);
        this._layoutButtonBet10.setCascadeColorEnabled(true);
        this._layoutButtonBet10.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutButtonBet10, 0.15, 0.5);
        let _layoutButtonBet10LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutButtonBet10);
        _layoutButtonBet10LayoutComponent.setPositionPercentXEnabled(true);
        _layoutButtonBet10LayoutComponent.setPositionPercentX(0.15);
        _layoutButtonBet10LayoutComponent.setPositionPercentYEnabled(true);
        _layoutButtonBet10LayoutComponent.setPositionPercentY(0.5);
        this._layoutButtonBet10.setTouchEnabled(true);
        this._layoutButtonBet10.setUnifySizeEnabled(false);
        this._layoutButtonBet10.ignoreContentAdaptWithSize(false);
        this._layoutButtonBet10.setContentSize(cc.size(105, 50));

        ///// # _imgButtonBet10
        this._imgButtonBet10 = new ccui.ImageView();
        this._imgButtonBet10.setName("_imgButtonBet10");
        this._layoutButtonBet10.addChild(this._imgButtonBet10);
        this._imgButtonBet10.setCascadeOpacityEnabled(true);
        this._imgButtonBet10.setCascadeColorEnabled(true);
        this._imgButtonBet10.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonBet10, 0.5, 0.5);
        let _imgButtonBet10LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonBet10);
        _imgButtonBet10LayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonBet10LayoutComponent.setPositionPercentX(0.5);
        _imgButtonBet10LayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonBet10LayoutComponent.setPositionPercentY(0.5);
        _imgButtonBet10LayoutComponent.setPercentWidthEnabled(true);
        _imgButtonBet10LayoutComponent.setPercentWidth(1);
        _imgButtonBet10LayoutComponent.setPercentHeightEnabled(true);
        _imgButtonBet10LayoutComponent.setPercentHeight(1);
        this._imgButtonBet10.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgButtonBet10.setUnifySizeEnabled(false);
        this._imgButtonBet10.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonBet10, 1, 1);
        this._imgButtonBet10.setTouchEnabled(false);

        ///// # _txtButtonBet10
        this._txtButtonBet10 = new ck.Text();
        this._txtButtonBet10.setName("_txtButtonBet10");
        this._layoutButtonBet10.addChild(this._txtButtonBet10);
        this._txtButtonBet10.setCascadeOpacityEnabled(true);
        this._txtButtonBet10.setCascadeColorEnabled(true);
        this._txtButtonBet10.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonBet10, 0.3783, 0.53);
        this._txtButtonBet10.setTextColor(cc.color(86, 47, 31, 255));
        let _txtButtonBet10LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonBet10);
        _txtButtonBet10LayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonBet10LayoutComponent.setPositionPercentX(0.3783);
        _txtButtonBet10LayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonBet10LayoutComponent.setPositionPercentY(0.53);
        this._txtButtonBet10.setTouchEnabled(false);
        this._txtButtonBet10.setUnifySizeEnabled(false);
        this._txtButtonBet10.ignoreContentAdaptWithSize(false);
        this._txtButtonBet10.setContentSize(cc.size(73, 38));
        this._txtButtonBet10.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtButtonBet10.setDefaultFontSize(30);
        this._txtButtonBet10.setTextHorizontalAlignment(1);
        this._txtButtonBet10.setTextVerticalAlignment(1);
        this._txtButtonBet10.enableShadow(cc.color(110, 110, 110, 255), cc.size(0, -1), 0);
        this._txtButtonBet10.autoFitSingleLine();

        ///// # _imgIconBet10
        this._imgIconBet10 = new ccui.ImageView();
        this._imgIconBet10.setName("_imgIconBet10");
        this._layoutButtonBet10.addChild(this._imgIconBet10);
        this._imgIconBet10.setCascadeOpacityEnabled(true);
        this._imgIconBet10.setCascadeColorEnabled(true);
        this._imgIconBet10.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconBet10, 0.675, 0.53);
        let _imgIconBet10LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconBet10);
        _imgIconBet10LayoutComponent.setPositionPercentXEnabled(true);
        _imgIconBet10LayoutComponent.setPositionPercentX(0.675);
        _imgIconBet10LayoutComponent.setPositionPercentYEnabled(true);
        _imgIconBet10LayoutComponent.setPositionPercentY(0.53);
        this._imgIconBet10.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgIconBet10.setUnifySizeEnabled(false);
        this._imgIconBet10.ignoreContentAdaptWithSize(false);
        this._imgIconBet10.setContentSize(cc.size(36, 36));
        this._imgIconBet10.setTouchEnabled(false);

        ///// # _layoutButtonBet11
        this._layoutButtonBet11 = new ccui.Layout();
        this._layoutButtonBet11.setName("_layoutButtonBet11");
        this._layoutBetButton1.addChild(this._layoutButtonBet11);
        this._layoutButtonBet11.setCascadeOpacityEnabled(true);
        this._layoutButtonBet11.setCascadeColorEnabled(true);
        this._layoutButtonBet11.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutButtonBet11, 0.5, 0.5);
        let _layoutButtonBet11LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutButtonBet11);
        _layoutButtonBet11LayoutComponent.setPositionPercentXEnabled(true);
        _layoutButtonBet11LayoutComponent.setPositionPercentX(0.5);
        _layoutButtonBet11LayoutComponent.setPositionPercentYEnabled(true);
        _layoutButtonBet11LayoutComponent.setPositionPercentY(0.5);
        this._layoutButtonBet11.setTouchEnabled(true);
        this._layoutButtonBet11.setUnifySizeEnabled(false);
        this._layoutButtonBet11.ignoreContentAdaptWithSize(false);
        this._layoutButtonBet11.setContentSize(cc.size(105, 50));

        ///// # _imgButtonBet11
        this._imgButtonBet11 = new ccui.ImageView();
        this._imgButtonBet11.setName("_imgButtonBet11");
        this._layoutButtonBet11.addChild(this._imgButtonBet11);
        this._imgButtonBet11.setCascadeOpacityEnabled(true);
        this._imgButtonBet11.setCascadeColorEnabled(true);
        this._imgButtonBet11.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonBet11, 0.5, 0.5);
        let _imgButtonBet11LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonBet11);
        _imgButtonBet11LayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonBet11LayoutComponent.setPositionPercentX(0.5);
        _imgButtonBet11LayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonBet11LayoutComponent.setPositionPercentY(0.5);
        _imgButtonBet11LayoutComponent.setPercentWidthEnabled(true);
        _imgButtonBet11LayoutComponent.setPercentWidth(1);
        _imgButtonBet11LayoutComponent.setPercentHeightEnabled(true);
        _imgButtonBet11LayoutComponent.setPercentHeight(1);
        this._imgButtonBet11.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgButtonBet11.setUnifySizeEnabled(false);
        this._imgButtonBet11.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonBet11, 1, 1);
        this._imgButtonBet11.setTouchEnabled(false);

        ///// # _txtButtonBet11
        this._txtButtonBet11 = new ck.Text();
        this._txtButtonBet11.setName("_txtButtonBet11");
        this._layoutButtonBet11.addChild(this._txtButtonBet11);
        this._txtButtonBet11.setCascadeOpacityEnabled(true);
        this._txtButtonBet11.setCascadeColorEnabled(true);
        this._txtButtonBet11.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonBet11, 0.3783, 0.53);
        this._txtButtonBet11.setTextColor(cc.color(86, 47, 31, 255));
        let _txtButtonBet11LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonBet11);
        _txtButtonBet11LayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonBet11LayoutComponent.setPositionPercentX(0.3783);
        _txtButtonBet11LayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonBet11LayoutComponent.setPositionPercentY(0.53);
        this._txtButtonBet11.setTouchEnabled(false);
        this._txtButtonBet11.setUnifySizeEnabled(false);
        this._txtButtonBet11.ignoreContentAdaptWithSize(false);
        this._txtButtonBet11.setContentSize(cc.size(73, 38));
        this._txtButtonBet11.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtButtonBet11.setDefaultFontSize(30);
        this._txtButtonBet11.setTextHorizontalAlignment(1);
        this._txtButtonBet11.setTextVerticalAlignment(1);
        this._txtButtonBet11.enableShadow(cc.color(110, 110, 110, 255), cc.size(0, -1), 0);
        this._txtButtonBet11.autoFitSingleLine();

        ///// # _imgIconBet11
        this._imgIconBet11 = new ccui.ImageView();
        this._imgIconBet11.setName("_imgIconBet11");
        this._layoutButtonBet11.addChild(this._imgIconBet11);
        this._imgIconBet11.setCascadeOpacityEnabled(true);
        this._imgIconBet11.setCascadeColorEnabled(true);
        this._imgIconBet11.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconBet11, 0.675, 0.53);
        let _imgIconBet11LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconBet11);
        _imgIconBet11LayoutComponent.setPositionPercentXEnabled(true);
        _imgIconBet11LayoutComponent.setPositionPercentX(0.675);
        _imgIconBet11LayoutComponent.setPositionPercentYEnabled(true);
        _imgIconBet11LayoutComponent.setPositionPercentY(0.53);
        this._imgIconBet11.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgIconBet11.setUnifySizeEnabled(false);
        this._imgIconBet11.ignoreContentAdaptWithSize(false);
        this._imgIconBet11.setContentSize(cc.size(36, 36));
        this._imgIconBet11.setTouchEnabled(false);

        ///// # _layoutButtonBet12
        this._layoutButtonBet12 = new ccui.Layout();
        this._layoutButtonBet12.setName("_layoutButtonBet12");
        this._layoutBetButton1.addChild(this._layoutButtonBet12);
        this._layoutButtonBet12.setCascadeOpacityEnabled(true);
        this._layoutButtonBet12.setCascadeColorEnabled(true);
        this._layoutButtonBet12.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutButtonBet12, 0.85, 0.5);
        let _layoutButtonBet12LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutButtonBet12);
        _layoutButtonBet12LayoutComponent.setPositionPercentXEnabled(true);
        _layoutButtonBet12LayoutComponent.setPositionPercentX(0.85);
        _layoutButtonBet12LayoutComponent.setPositionPercentYEnabled(true);
        _layoutButtonBet12LayoutComponent.setPositionPercentY(0.5);
        this._layoutButtonBet12.setTouchEnabled(true);
        this._layoutButtonBet12.setUnifySizeEnabled(false);
        this._layoutButtonBet12.ignoreContentAdaptWithSize(false);
        this._layoutButtonBet12.setContentSize(cc.size(105, 50));

        ///// # _imgButtonBet12
        this._imgButtonBet12 = new ccui.ImageView();
        this._imgButtonBet12.setName("_imgButtonBet12");
        this._layoutButtonBet12.addChild(this._imgButtonBet12);
        this._imgButtonBet12.setCascadeOpacityEnabled(true);
        this._imgButtonBet12.setCascadeColorEnabled(true);
        this._imgButtonBet12.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonBet12, 0.5, 0.5);
        let _imgButtonBet12LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonBet12);
        _imgButtonBet12LayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonBet12LayoutComponent.setPositionPercentX(0.5);
        _imgButtonBet12LayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonBet12LayoutComponent.setPositionPercentY(0.5);
        _imgButtonBet12LayoutComponent.setPercentWidthEnabled(true);
        _imgButtonBet12LayoutComponent.setPercentWidth(1);
        _imgButtonBet12LayoutComponent.setPercentHeightEnabled(true);
        _imgButtonBet12LayoutComponent.setPercentHeight(1);
        this._imgButtonBet12.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgButtonBet12.setUnifySizeEnabled(false);
        this._imgButtonBet12.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonBet12, 1, 1);
        this._imgButtonBet12.setTouchEnabled(false);

        ///// # _txtButtonBet12
        this._txtButtonBet12 = new ck.Text();
        this._txtButtonBet12.setName("_txtButtonBet12");
        this._layoutButtonBet12.addChild(this._txtButtonBet12);
        this._txtButtonBet12.setCascadeOpacityEnabled(true);
        this._txtButtonBet12.setCascadeColorEnabled(true);
        this._txtButtonBet12.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonBet12, 0.3783, 0.53);
        this._txtButtonBet12.setTextColor(cc.color(86, 47, 31, 255));
        let _txtButtonBet12LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonBet12);
        _txtButtonBet12LayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonBet12LayoutComponent.setPositionPercentX(0.3783);
        _txtButtonBet12LayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonBet12LayoutComponent.setPositionPercentY(0.53);
        this._txtButtonBet12.setTouchEnabled(false);
        this._txtButtonBet12.setUnifySizeEnabled(false);
        this._txtButtonBet12.ignoreContentAdaptWithSize(false);
        this._txtButtonBet12.setContentSize(cc.size(73, 38));
        this._txtButtonBet12.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtButtonBet12.setDefaultFontSize(30);
        this._txtButtonBet12.setTextHorizontalAlignment(1);
        this._txtButtonBet12.setTextVerticalAlignment(1);
        this._txtButtonBet12.enableShadow(cc.color(110, 110, 110, 255), cc.size(0, -1), 0);
        this._txtButtonBet12.autoFitSingleLine();

        ///// # _imgIconBet12
        this._imgIconBet12 = new ccui.ImageView();
        this._imgIconBet12.setName("_imgIconBet12");
        this._layoutButtonBet12.addChild(this._imgIconBet12);
        this._imgIconBet12.setCascadeOpacityEnabled(true);
        this._imgIconBet12.setCascadeColorEnabled(true);
        this._imgIconBet12.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconBet12, 0.675, 0.53);
        let _imgIconBet12LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconBet12);
        _imgIconBet12LayoutComponent.setPositionPercentXEnabled(true);
        _imgIconBet12LayoutComponent.setPositionPercentX(0.675);
        _imgIconBet12LayoutComponent.setPositionPercentYEnabled(true);
        _imgIconBet12LayoutComponent.setPositionPercentY(0.53);
        this._imgIconBet12.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgIconBet12.setUnifySizeEnabled(false);
        this._imgIconBet12.ignoreContentAdaptWithSize(false);
        this._imgIconBet12.setContentSize(cc.size(36, 36));
        this._imgIconBet12.setTouchEnabled(false);

        ///// # _layoutGem
        this._layoutGem = new ccui.Layout();
        this._layoutGem.setName("_layoutGem");
        this._layoutBet.addChild(this._layoutGem);
        this._layoutGem.setCascadeOpacityEnabled(true);
        this._layoutGem.setCascadeColorEnabled(true);
        this._layoutGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutGem, 0.74, 0.8);
        let _layoutGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGem);
        _layoutGemLayoutComponent.setPositionPercentXEnabled(true);
        _layoutGemLayoutComponent.setPositionPercentX(0.74);
        _layoutGemLayoutComponent.setPositionPercentYEnabled(true);
        _layoutGemLayoutComponent.setPositionPercentY(0.8);
        this._layoutGem.setTouchEnabled(true);
        this._layoutGem.setUnifySizeEnabled(false);
        this._layoutGem.ignoreContentAdaptWithSize(false);
        this._layoutGem.setContentSize(cc.size(180, 47));

        ///// # _imgBackgroundGem
        this._imgBackgroundGem = new ccui.ImageView();
        this._imgBackgroundGem.setName("_imgBackgroundGem");
        this._layoutGem.addChild(this._imgBackgroundGem);
        this._imgBackgroundGem.setCascadeOpacityEnabled(true);
        this._imgBackgroundGem.setCascadeColorEnabled(true);
        this._imgBackgroundGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundGem, 0.5, 0.5);
        let _imgBackgroundGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundGem);
        _imgBackgroundGemLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundGemLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundGemLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundGemLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundGemLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundGemLayoutComponent.setPercentWidth(1);
        this._imgBackgroundGem.loadTexture("home/CurrencyBox.png", 1);
        this._imgBackgroundGem.setUnifySizeEnabled(false);
        this._imgBackgroundGem.ignoreContentAdaptWithSize(false);
        this._imgBackgroundGem.setScale9Enabled(true);
        this._imgBackgroundGem.setCapInsets(cc.rect(53, 8, 55, 9));
        ck.UIUtils.setWidthPercent(this._imgBackgroundGem, 1);
        this._imgBackgroundGem.setContentSize(cc.size(this._imgBackgroundGem.width, 39.4751));
        this._imgBackgroundGem.setTouchEnabled(false);

        ///// # _imgGemIcon
        this._imgGemIcon = new ccui.ImageView();
        this._imgGemIcon.setName("_imgGemIcon");
        this._layoutGem.addChild(this._imgGemIcon);
        this._imgGemIcon.setCascadeOpacityEnabled(true);
        this._imgGemIcon.setCascadeColorEnabled(true);
        this._imgGemIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGemIcon, 0.09, 0.55);
        let _imgGemIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGemIcon);
        _imgGemIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgGemIconLayoutComponent.setPositionPercentX(0.09);
        _imgGemIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgGemIconLayoutComponent.setPositionPercentY(0.55);
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
        ck.UIUtils.setPositionPercent(this._txtGem, 0.814, 0.5);
        this._txtGem.setTextColor(cc.color(224, 129, 255, 255));
        let _txtGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGem);
        _txtGemLayoutComponent.setPositionPercentXEnabled(true);
        _txtGemLayoutComponent.setPositionPercentX(0.814);
        _txtGemLayoutComponent.setPositionPercentYEnabled(true);
        _txtGemLayoutComponent.setPositionPercentY(0.5);
        this._txtGem.setTouchEnabled(false);
        this._txtGem.setUnifySizeEnabled(false);
        this._txtGem.ignoreContentAdaptWithSize(false);
        this._txtGem.setContentSize(cc.size(110, 32));
        this._txtGem.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGem.setDefaultFontSize(28);
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
        ck.UIUtils.setPositionPercent(this._btnAddGem, 0.915, 0.46);
        let _btnAddGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddGem);
        _btnAddGemLayoutComponent.setPositionPercentXEnabled(true);
        _btnAddGemLayoutComponent.setPositionPercentX(0.915);
        _btnAddGemLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddGemLayoutComponent.setPositionPercentY(0.46);
        this._btnAddGem.loadTextureDisabled("buttons/rectangles/Add.png", 1);
        this._btnAddGem.loadTexturePressed("buttons/rectangles/Add.png", 1);
        this._btnAddGem.loadTextureNormal("buttons/rectangles/Add.png", 1);
        this._btnAddGem.setUnifySizeEnabled(false);
        this._btnAddGem.ignoreContentAdaptWithSize(false);
        this._btnAddGem.setContentSize(cc.size(38, 38));
        this._btnAddGem.setTouchEnabled(true);

        ///// # _layoutCoin
        this._layoutCoin = new ccui.Layout();
        this._layoutCoin.setName("_layoutCoin");
        this._layoutBet.addChild(this._layoutCoin);
        this._layoutCoin.setCascadeOpacityEnabled(true);
        this._layoutCoin.setCascadeColorEnabled(true);
        this._layoutCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCoin, 0.23, 0.8);
        let _layoutCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCoin);
        _layoutCoinLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentX(0.23);
        _layoutCoinLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentY(0.8);
        this._layoutCoin.setTouchEnabled(true);
        this._layoutCoin.setUnifySizeEnabled(false);
        this._layoutCoin.ignoreContentAdaptWithSize(false);
        this._layoutCoin.setContentSize(cc.size(180, 47));

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
        _imgBackgroundCoinLayoutComponent.setPercentWidth(1);
        this._imgBackgroundCoin.loadTexture("home/CurrencyBox.png", 1);
        this._imgBackgroundCoin.setUnifySizeEnabled(false);
        this._imgBackgroundCoin.ignoreContentAdaptWithSize(false);
        this._imgBackgroundCoin.setScale9Enabled(true);
        this._imgBackgroundCoin.setCapInsets(cc.rect(53, 8, 55, 9));
        ck.UIUtils.setWidthPercent(this._imgBackgroundCoin, 1);
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
        this._txtCoin.setContentSize(cc.size(110, 32));
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

        ///// # _imgButtonRetract
        this._imgButtonRetract = new ccui.ImageView();
        this._imgButtonRetract.setName("_imgButtonRetract");
        this._layoutBet.addChild(this._imgButtonRetract);
        this._imgButtonRetract.setCascadeOpacityEnabled(true);
        this._imgButtonRetract.setCascadeColorEnabled(true);
        this._imgButtonRetract.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonRetract, 0.915, 0.3695);
        let _imgButtonRetractLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonRetract);
        _imgButtonRetractLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonRetractLayoutComponent.setPositionPercentX(0.915);
        _imgButtonRetractLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonRetractLayoutComponent.setPositionPercentY(0.3695);
        this._imgButtonRetract.loadTexture("gourd-crab/ButtonRetract.png", 1);
        this._imgButtonRetract.setUnifySizeEnabled(false);
        this._imgButtonRetract.ignoreContentAdaptWithSize(false);
        this._imgButtonRetract.setContentSize(cc.size(35, 35));
        this._imgButtonRetract.setTouchEnabled(false);

        ///// # _layoutInteract
        this._layoutInteract = new ccui.Layout();
        this._layoutInteract.setName("_layoutInteract");
        this._layoutRoot.addChild(this._layoutInteract);
        this._layoutInteract.setCascadeOpacityEnabled(true);
        this._layoutInteract.setCascadeColorEnabled(true);
        this._layoutInteract.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutInteract, 0.5, 0.5);
        let _layoutInteractLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInteract);
        _layoutInteractLayoutComponent.setPositionPercentXEnabled(true);
        _layoutInteractLayoutComponent.setPositionPercentX(0.5);
        _layoutInteractLayoutComponent.setPositionPercentYEnabled(true);
        _layoutInteractLayoutComponent.setPositionPercentY(0.5);
        _layoutInteractLayoutComponent.setPercentWidthEnabled(true);
        _layoutInteractLayoutComponent.setPercentWidth(1);
        _layoutInteractLayoutComponent.setPercentHeightEnabled(true);
        _layoutInteractLayoutComponent.setPercentHeight(1);
        this._layoutInteract.setTouchEnabled(false);
        this._layoutInteract.setUnifySizeEnabled(false);
        this._layoutInteract.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutInteract, 1, 1);

        ///// # _nodeInteract
        this._nodeInteract = new cc.Node();
        this._nodeInteract.setName("_nodeInteract");
        this._layoutInteract.addChild(this._nodeInteract);
        this._nodeInteract.setCascadeOpacityEnabled(true);
        this._nodeInteract.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeInteract, 0.14, 0.6079);
        let _nodeInteractLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeInteract);
        _nodeInteractLayoutComponent.setPositionPercentXEnabled(true);
        _nodeInteractLayoutComponent.setPositionPercentX(0.14);
        _nodeInteractLayoutComponent.setPositionPercentYEnabled(true);
        _nodeInteractLayoutComponent.setPositionPercentY(0.6079);

        ///// # _txtCoinWin
        this._txtCoinWin = new ck.Text();
        this._txtCoinWin.setName("_txtCoinWin");
        this._layoutRoot.addChild(this._txtCoinWin);
        this._txtCoinWin.setCascadeOpacityEnabled(true);
        this._txtCoinWin.setCascadeColorEnabled(true);
        this._txtCoinWin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCoinWin, 0.4728, 1.4737);
        this._txtCoinWin.setTextColor(cc.color(252, 206, 0, 255));
        let _txtCoinWinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCoinWin);
        _txtCoinWinLayoutComponent.setPositionPercentXEnabled(true);
        _txtCoinWinLayoutComponent.setPositionPercentX(0.4728);
        this._txtCoinWin.setTouchEnabled(false);
        this._txtCoinWin.ignoreContentAdaptWithSize(true);
        this._txtCoinWin.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCoinWin.setDefaultFontSize(38);
        this._txtCoinWin.setTextHorizontalAlignment(0);
        this._txtCoinWin.setTextVerticalAlignment(0);
        this._txtCoinWin.enableOutline(cc.color(0, 0, 0, 255), 2);
        this._txtCoinWin.enableShadow(cc.color(0, 0, 0, 255), cc.size(2, -1), 0);

        ///// # _imgIconCoinWin
        this._imgIconCoinWin = new ccui.ImageView();
        this._imgIconCoinWin.setName("_imgIconCoinWin");
        this._txtCoinWin.addChild(this._imgIconCoinWin);
        this._imgIconCoinWin.setCascadeOpacityEnabled(true);
        this._imgIconCoinWin.setCascadeColorEnabled(true);
        this._imgIconCoinWin.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconCoinWin, 1, 0.5);
        let _imgIconCoinWinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconCoinWin);
        _imgIconCoinWinLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconCoinWinLayoutComponent.setPositionPercentX(1);
        _imgIconCoinWinLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconCoinWinLayoutComponent.setPositionPercentY(0.5);
        this._imgIconCoinWin.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIconCoinWin.setUnifySizeEnabled(false);
        this._imgIconCoinWin.ignoreContentAdaptWithSize(false);
        this._imgIconCoinWin.setContentSize(cc.size(48, 48));
        this._imgIconCoinWin.setTouchEnabled(false);

        ///// # _txtGemWin
        this._txtGemWin = new ck.Text();
        this._txtGemWin.setName("_txtGemWin");
        this._layoutRoot.addChild(this._txtGemWin);
        this._txtGemWin.setCascadeOpacityEnabled(true);
        this._txtGemWin.setCascadeColorEnabled(true);
        this._txtGemWin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGemWin, 0.4728, 1.7211);
        this._txtGemWin.setTextColor(cc.color(243, 192, 255, 255));
        let _txtGemWinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGemWin);
        _txtGemWinLayoutComponent.setPositionPercentXEnabled(true);
        _txtGemWinLayoutComponent.setPositionPercentX(0.4728);
        this._txtGemWin.setTouchEnabled(false);
        this._txtGemWin.ignoreContentAdaptWithSize(true);
        this._txtGemWin.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGemWin.setDefaultFontSize(38);
        this._txtGemWin.setTextHorizontalAlignment(0);
        this._txtGemWin.setTextVerticalAlignment(0);
        this._txtGemWin.enableOutline(cc.color(0, 0, 0, 255), 2);
        this._txtGemWin.enableShadow(cc.color(0, 0, 0, 255), cc.size(2, -1), 0);

        ///// # _imgIconGemWin
        this._imgIconGemWin = new ccui.ImageView();
        this._imgIconGemWin.setName("_imgIconGemWin");
        this._txtGemWin.addChild(this._imgIconGemWin);
        this._imgIconGemWin.setCascadeOpacityEnabled(true);
        this._imgIconGemWin.setCascadeColorEnabled(true);
        this._imgIconGemWin.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconGemWin, 1, 0.5);
        let _imgIconGemWinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconGemWin);
        _imgIconGemWinLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconGemWinLayoutComponent.setPositionPercentX(1);
        _imgIconGemWinLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconGemWinLayoutComponent.setPositionPercentY(0.5);
        this._imgIconGemWin.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgIconGemWin.setUnifySizeEnabled(false);
        this._imgIconGemWin.ignoreContentAdaptWithSize(false);
        this._imgIconGemWin.setContentSize(cc.size(48, 48));
        this._imgIconGemWin.setTouchEnabled(false);

    },



});

/**
 * Create GourdCrabUserWidget
 * @returns {_ccs.GourdCrabUserWidget}
 */
_ccs.GourdCrabUserWidget.create = function () {
    return new _ccs.GourdCrabUserWidget();
};
