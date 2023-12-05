/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.BingoUserWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.BingoUserWidget = ccui.Widget.extend({

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
    /** @type {ccui.ImageView} */
    _imgTextChooseTicket: null,
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
    _layoutGoldBet: null,
    /** @type {ccui.ImageView} */
    _imgGoldBetBackground: null,
    /** @type {ck.Text} */
    _txtGoldBet: null,
    /** @type {ccui.Layout} */
    _layoutAutoPlay: null,
    /** @type {ccui.Layout} */
    _layoutToggleAutoPlay: null,
    /** @type {ccui.ImageView} */
    _imgToggleAutoPlayBackground: null,
    /** @type {ccui.ImageView} */
    _imgCheckAutoPlay: null,
    /** @type {ccui.ImageView} */
    _imgTextAutoPlay: null,
    /** @type {BingoTicketWidget} */
    _ticketWidget: null,
    /** @type {ccui.Layout} */
    _layoutInteract: null,
    /** @type {cc.Node} */
    _nodeInteract: null,
    /** @type {ck.Text} */
    _txtGoldWin: null,
    /** @type {progressExp} */
    _expBar: null,


    /**
     * _ccs.BingoUserWidget constructor
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
        this._layoutRoot.setAnchorPoint(cc.p(0.5, 0));
        this._layoutRoot.setPosition(-1.15, -87.9276);
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(623.8829, 275.452));

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
        this._layoutHub.setTouchEnabled(false);
        this._layoutHub.setUnifySizeEnabled(false);
        this._layoutHub.ignoreContentAdaptWithSize(false);
        this._layoutHub.setContentSize(cc.size(438, 171));

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
        this._imgHubBackground.loadTexture("bingo/ui/UserContainerBackground.png", 1);
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

        ///// # _imgLevelBar
        this._imgLevelBar = new ccui.ImageView();
        this._imgLevelBar.setName("_imgLevelBar");
        this._layoutInfo.addChild(this._imgLevelBar);
        this._imgLevelBar.setCascadeOpacityEnabled(true);
        this._imgLevelBar.setCascadeColorEnabled(true);
        this._imgLevelBar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLevelBar, 0.5, 0.13);
        this._imgLevelBar.setVisible(false);
        let _imgLevelBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLevelBar);
        _imgLevelBarLayoutComponent.setPositionPercentXEnabled(true);
        _imgLevelBarLayoutComponent.setPositionPercentX(0.5);
        _imgLevelBarLayoutComponent.setPositionPercentYEnabled(true);
        _imgLevelBarLayoutComponent.setPositionPercentY(0.13);
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
        this._avatarNode.setPosition(0, -23.0003);
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
        this._layoutLevel.setVisible(false);
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
        ck.UIUtils.setPositionPercent(this._txtLevel, 0.5, 0.5);
        let _txtLevelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLevel);
        _txtLevelLayoutComponent.setPositionPercentXEnabled(true);
        _txtLevelLayoutComponent.setPositionPercentX(0.5);
        _txtLevelLayoutComponent.setPositionPercentYEnabled(true);
        _txtLevelLayoutComponent.setPositionPercentY(0.5);
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
        ck.UIUtils.setPositionPercent(this._layoutBet, 0.62, 0);
        let _layoutBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBet);
        _layoutBetLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBetLayoutComponent.setPositionPercentX(0.62);
        _layoutBetLayoutComponent.setPercentWidthEnabled(true);
        _layoutBetLayoutComponent.setPercentWidth(0.66);
        _layoutBetLayoutComponent.setPercentHeightEnabled(true);
        _layoutBetLayoutComponent.setPercentHeight(1);
        this._layoutBet.setTouchEnabled(false);
        this._layoutBet.setUnifySizeEnabled(false);
        this._layoutBet.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBet, 0.66, 1);

        ///// # _layoutBetButton
        this._layoutBetButton = new ccui.Layout();
        this._layoutBetButton.setName("_layoutBetButton");
        this._layoutBet.addChild(this._layoutBetButton);
        this._layoutBetButton.setCascadeOpacityEnabled(true);
        this._layoutBetButton.setCascadeColorEnabled(true);
        this._layoutBetButton.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBetButton, 0.5, 0.2);
        let _layoutBetButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBetButton);
        _layoutBetButtonLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBetButtonLayoutComponent.setPositionPercentX(0.5);
        _layoutBetButtonLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBetButtonLayoutComponent.setPositionPercentY(0.2);
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

        ///// # _imgTextChooseTicket
        this._imgTextChooseTicket = new ccui.ImageView();
        this._imgTextChooseTicket.setName("_imgTextChooseTicket");
        this._layoutBet.addChild(this._imgTextChooseTicket);
        this._imgTextChooseTicket.setCascadeOpacityEnabled(true);
        this._imgTextChooseTicket.setCascadeColorEnabled(true);
        this._imgTextChooseTicket.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTextChooseTicket, 0.5, 0.4681);
        let _imgTextChooseTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTextChooseTicket);
        _imgTextChooseTicketLayoutComponent.setPositionPercentXEnabled(true);
        _imgTextChooseTicketLayoutComponent.setPositionPercentX(0.5);
        _imgTextChooseTicketLayoutComponent.setPositionPercentYEnabled(true);
        _imgTextChooseTicketLayoutComponent.setPositionPercentY(0.4681);
        this._imgTextChooseTicket.loadTexture("texts/minigames/ChooseTicket.png", 1);
        this._imgTextChooseTicket.setTouchEnabled(false);

        ///// # _layoutCoin
        this._layoutCoin = new ccui.Layout();
        this._layoutCoin.setName("_layoutCoin");
        this._layoutBet.addChild(this._layoutCoin);
        this._layoutCoin.setCascadeOpacityEnabled(true);
        this._layoutCoin.setCascadeColorEnabled(true);
        this._layoutCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCoin, 0.5, 0.69);
        let _layoutCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCoin);
        _layoutCoinLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentX(0.5);
        _layoutCoinLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentY(0.69);
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

        ///// # _layoutGoldBet
        this._layoutGoldBet = new ccui.Layout();
        this._layoutGoldBet.setName("_layoutGoldBet");
        this._layoutRoot.addChild(this._layoutGoldBet);
        this._layoutGoldBet.setCascadeOpacityEnabled(true);
        this._layoutGoldBet.setCascadeColorEnabled(true);
        this._layoutGoldBet.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutGoldBet, 0.8655, 0.7624);
        let _layoutGoldBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGoldBet);
        this._layoutGoldBet.setTouchEnabled(false);
        this._layoutGoldBet.setUnifySizeEnabled(false);
        this._layoutGoldBet.ignoreContentAdaptWithSize(false);
        this._layoutGoldBet.setContentSize(cc.size(125, 37));

        ///// # _imgGoldBetBackground
        this._imgGoldBetBackground = new ccui.ImageView();
        this._imgGoldBetBackground.setName("_imgGoldBetBackground");
        this._layoutGoldBet.addChild(this._imgGoldBetBackground);
        this._imgGoldBetBackground.setCascadeOpacityEnabled(true);
        this._imgGoldBetBackground.setCascadeColorEnabled(true);
        this._imgGoldBetBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGoldBetBackground, 0.5, 0.5);
        let _imgGoldBetBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGoldBetBackground);
        _imgGoldBetBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgGoldBetBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgGoldBetBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgGoldBetBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgGoldBetBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgGoldBetBackgroundLayoutComponent.setPercentWidth(1);
        _imgGoldBetBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgGoldBetBackgroundLayoutComponent.setPercentHeight(1);
        this._imgGoldBetBackground.loadTexture("bingo/ui/BarGoldBet.png", 1);
        this._imgGoldBetBackground.setUnifySizeEnabled(false);
        this._imgGoldBetBackground.ignoreContentAdaptWithSize(false);
        this._imgGoldBetBackground.setScale9Enabled(true);
        this._imgGoldBetBackground.setCapInsets(cc.rect(41, 12, 43, 13));
        ck.UIUtils.setSizePercent(this._imgGoldBetBackground, 1, 1);
        this._imgGoldBetBackground.setTouchEnabled(false);

        ///// # _txtGoldBet
        this._txtGoldBet = new ck.Text();
        this._txtGoldBet.setName("_txtGoldBet");
        this._layoutGoldBet.addChild(this._txtGoldBet);
        this._txtGoldBet.setCascadeOpacityEnabled(true);
        this._txtGoldBet.setCascadeColorEnabled(true);
        this._txtGoldBet.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGoldBet, 0.6, 0.5);
        this._txtGoldBet.setTextColor(cc.color(252, 206, 0, 255));
        let _txtGoldBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGoldBet);
        _txtGoldBetLayoutComponent.setPositionPercentXEnabled(true);
        _txtGoldBetLayoutComponent.setPositionPercentX(0.6);
        _txtGoldBetLayoutComponent.setPositionPercentYEnabled(true);
        _txtGoldBetLayoutComponent.setPositionPercentY(0.5);
        this._txtGoldBet.setTouchEnabled(false);
        this._txtGoldBet.ignoreContentAdaptWithSize(true);
        this._txtGoldBet.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGoldBet.setDefaultFontSize(22);
        this._txtGoldBet.setTextHorizontalAlignment(0);
        this._txtGoldBet.setTextVerticalAlignment(0);
        this._txtGoldBet.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutAutoPlay
        this._layoutAutoPlay = new ccui.Layout();
        this._layoutAutoPlay.setName("_layoutAutoPlay");
        this._layoutRoot.addChild(this._layoutAutoPlay);
        this._layoutAutoPlay.setCascadeOpacityEnabled(true);
        this._layoutAutoPlay.setCascadeColorEnabled(true);
        this._layoutAutoPlay.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutAutoPlay, 0.9457, 0.5809);
        let _layoutAutoPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAutoPlay);
        this._layoutAutoPlay.setTouchEnabled(false);
        this._layoutAutoPlay.setUnifySizeEnabled(false);
        this._layoutAutoPlay.ignoreContentAdaptWithSize(false);
        this._layoutAutoPlay.setContentSize(cc.size(70, 121.3602));

        ///// # _layoutToggleAutoPlay
        this._layoutToggleAutoPlay = new ccui.Layout();
        this._layoutToggleAutoPlay.setName("_layoutToggleAutoPlay");
        this._layoutAutoPlay.addChild(this._layoutToggleAutoPlay);
        this._layoutToggleAutoPlay.setCascadeOpacityEnabled(true);
        this._layoutToggleAutoPlay.setCascadeColorEnabled(true);
        this._layoutToggleAutoPlay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutToggleAutoPlay, 0.5, 0.7858);
        let _layoutToggleAutoPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutToggleAutoPlay);
        _layoutToggleAutoPlayLayoutComponent.setPositionPercentXEnabled(true);
        _layoutToggleAutoPlayLayoutComponent.setPositionPercentX(0.5);
        _layoutToggleAutoPlayLayoutComponent.setPositionPercentYEnabled(true);
        _layoutToggleAutoPlayLayoutComponent.setPositionPercentY(0.7858);
        this._layoutToggleAutoPlay.setTouchEnabled(true);
        this._layoutToggleAutoPlay.setUnifySizeEnabled(false);
        this._layoutToggleAutoPlay.ignoreContentAdaptWithSize(false);
        this._layoutToggleAutoPlay.setContentSize(cc.size(52, 52));

        ///// # _imgToggleAutoPlayBackground
        this._imgToggleAutoPlayBackground = new ccui.ImageView();
        this._imgToggleAutoPlayBackground.setName("_imgToggleAutoPlayBackground");
        this._layoutToggleAutoPlay.addChild(this._imgToggleAutoPlayBackground);
        this._imgToggleAutoPlayBackground.setCascadeOpacityEnabled(true);
        this._imgToggleAutoPlayBackground.setCascadeColorEnabled(true);
        this._imgToggleAutoPlayBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgToggleAutoPlayBackground, 0.5, 0.5);
        let _imgToggleAutoPlayBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToggleAutoPlayBackground);
        _imgToggleAutoPlayBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgToggleAutoPlayBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgToggleAutoPlayBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgToggleAutoPlayBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgToggleAutoPlayBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgToggleAutoPlayBackgroundLayoutComponent.setPercentWidth(1);
        _imgToggleAutoPlayBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgToggleAutoPlayBackgroundLayoutComponent.setPercentHeight(1);
        this._imgToggleAutoPlayBackground.loadTexture("bingo/ui/AutoPlayCheckBoxBackground.png", 1);
        this._imgToggleAutoPlayBackground.setUnifySizeEnabled(false);
        this._imgToggleAutoPlayBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgToggleAutoPlayBackground, 1, 1);
        this._imgToggleAutoPlayBackground.setTouchEnabled(false);

        ///// # _imgCheckAutoPlay
        this._imgCheckAutoPlay = new ccui.ImageView();
        this._imgCheckAutoPlay.setName("_imgCheckAutoPlay");
        this._layoutToggleAutoPlay.addChild(this._imgCheckAutoPlay);
        this._imgCheckAutoPlay.setCascadeOpacityEnabled(true);
        this._imgCheckAutoPlay.setCascadeColorEnabled(true);
        this._imgCheckAutoPlay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCheckAutoPlay, 0.5, 0.6);
        let _imgCheckAutoPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCheckAutoPlay);
        _imgCheckAutoPlayLayoutComponent.setPositionPercentXEnabled(true);
        _imgCheckAutoPlayLayoutComponent.setPositionPercentX(0.5);
        _imgCheckAutoPlayLayoutComponent.setPositionPercentYEnabled(true);
        _imgCheckAutoPlayLayoutComponent.setPositionPercentY(0.6);
        this._imgCheckAutoPlay.loadTexture("icons/color/other/Check.png", 1);
        this._imgCheckAutoPlay.setUnifySizeEnabled(false);
        this._imgCheckAutoPlay.ignoreContentAdaptWithSize(false);
        this._imgCheckAutoPlay.setContentSize(cc.size(62, 56));
        this._imgCheckAutoPlay.setTouchEnabled(false);

        ///// # _imgTextAutoPlay
        this._imgTextAutoPlay = new ccui.ImageView();
        this._imgTextAutoPlay.setName("_imgTextAutoPlay");
        this._layoutAutoPlay.addChild(this._imgTextAutoPlay);
        this._imgTextAutoPlay.setCascadeOpacityEnabled(true);
        this._imgTextAutoPlay.setCascadeColorEnabled(true);
        this._imgTextAutoPlay.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgTextAutoPlay, 0.5, 0.4779);
        let _imgTextAutoPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTextAutoPlay);
        _imgTextAutoPlayLayoutComponent.setPositionPercentXEnabled(true);
        _imgTextAutoPlayLayoutComponent.setPositionPercentX(0.5);
        this._imgTextAutoPlay.loadTexture("texts/minigames/AutoPlay.png", 1);
        this._imgTextAutoPlay.setTouchEnabled(false);

        ///// # _ticketWidget
        this._ticketWidget = new BingoTicketWidget();
        this._ticketWidget.setName("_ticketWidget");
        this._layoutRoot.addChild(this._ticketWidget);
        this._ticketWidget.setCascadeOpacityEnabled(true);
        this._ticketWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._ticketWidget, 0.5, 0.84);
        let _ticketWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._ticketWidget);
        _ticketWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _ticketWidgetLayoutComponent.setPositionPercentX(0.5);
        _ticketWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _ticketWidgetLayoutComponent.setPositionPercentY(0.84);

        ///// # _layoutInteract
        this._layoutInteract = new ccui.Layout();
        this._layoutInteract.setName("_layoutInteract");
        this._layoutRoot.addChild(this._layoutInteract);
        this._layoutInteract.setCascadeOpacityEnabled(true);
        this._layoutInteract.setCascadeColorEnabled(true);
        let _layoutInteractLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInteract);
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
        ck.UIUtils.setPositionPercent(this._nodeInteract, 0.254, 0.5);
        let _nodeInteractLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeInteract);
        _nodeInteractLayoutComponent.setPositionPercentXEnabled(true);
        _nodeInteractLayoutComponent.setPositionPercentX(0.254);
        _nodeInteractLayoutComponent.setPositionPercentYEnabled(true);
        _nodeInteractLayoutComponent.setPositionPercentY(0.5);

        ///// # _txtGoldWin
        this._txtGoldWin = new ck.Text();
        this._txtGoldWin.setName("_txtGoldWin");
        this._layoutRoot.addChild(this._txtGoldWin);
        this._txtGoldWin.setCascadeOpacityEnabled(true);
        this._txtGoldWin.setCascadeColorEnabled(true);
        this._txtGoldWin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGoldWin, 0.5, 1.0891);
        this._txtGoldWin.setTextColor(cc.color(252, 206, 0, 255));
        let _txtGoldWinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGoldWin);
        _txtGoldWinLayoutComponent.setPositionPercentXEnabled(true);
        _txtGoldWinLayoutComponent.setPositionPercentX(0.5);
        this._txtGoldWin.setTouchEnabled(false);
        this._txtGoldWin.ignoreContentAdaptWithSize(true);
        this._txtGoldWin.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtGoldWin.setDefaultFontSize(40);
        this._txtGoldWin.setTextHorizontalAlignment(0);
        this._txtGoldWin.setTextVerticalAlignment(0);
        this._txtGoldWin.enableOutline(cc.color(0, 0, 0, 255), 2);
        this._txtGoldWin.enableShadow(cc.color(0, 0, 0, 255), cc.size(2, -1), 0);

        ///// # _expBar
        this._expBar = new progressExp();
        this._expBar.setName("_expBar");
        this._layoutRoot.addChild(this._expBar);
        this._expBar.setCascadeOpacityEnabled(true);
        this._expBar.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._expBar, 0.5, 0.61);
        this._expBar.setScale(0.93, 0.93);
        let _expBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._expBar);
        _expBarLayoutComponent.setPositionPercentXEnabled(true);
        _expBarLayoutComponent.setPositionPercentX(0.5);
        _expBarLayoutComponent.setPositionPercentYEnabled(true);
        _expBarLayoutComponent.setPositionPercentY(0.61);

    },



});

/**
 * Create BingoUserWidget
 * @returns {_ccs.BingoUserWidget}
 */
_ccs.BingoUserWidget.create = function () {
    return new _ccs.BingoUserWidget();
};
