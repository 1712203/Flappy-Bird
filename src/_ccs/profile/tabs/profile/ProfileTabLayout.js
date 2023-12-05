/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ProfileTabLayout
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ProfileTabLayout = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutGeneral: null,
    /** @type {cc.Node} */
    _nodeAvatar: null,
    /** @type {Avatar} */
    _avatarNode: null,
    /** @type {ccui.Layout} */
    _layoutLevel: null,
    /** @type {ccui.ImageView} */
    _imgLevelBgr: null,
    /** @type {ck.Text} */
    _txtLevel: null,
    /** @type {ccui.Layout} */
    _layoutCoin: null,
    /** @type {ccui.ImageView} */
    _imgCoinBox: null,
    /** @type {ccui.ImageView} */
    _imgCoinIcon: null,
    /** @type {ck.Text} */
    _txtCoin: null,
    /** @type {ccui.Layout} */
    _layoutGem: null,
    /** @type {ccui.ImageView} */
    _imgGemBox: null,
    /** @type {ccui.ImageView} */
    _imgGemIcon: null,
    /** @type {ck.Text} */
    _txtGem: null,
    /** @type {ck.Text} */
    _txtPlayerName: null,
    /** @type {ck.Text} */
    _txtID: null,
    /** @type {ccui.Layout} */
    _layoutWinLose: null,
    /** @type {ccui.Layout} */
    _layoutLine01: null,
    /** @type {ccui.ImageView} */
    _imgBgrLine01: null,
    /** @type {ck.Text} */
    _txtTitleLine01: null,
    /** @type {ck.Text} */
    _txtInfoLine01: null,
    /** @type {ccui.Layout} */
    _layoutLine02: null,
    /** @type {ccui.ImageView} */
    _imgBgrLine02: null,
    /** @type {ck.Text} */
    _txtTitleLine02: null,
    /** @type {ck.Text} */
    _txtInfoLine02: null,
    /** @type {ccui.ImageView} */
    _imgCoinIconLine02: null,
    /** @type {ccui.Layout} */
    _layoutLine03: null,
    /** @type {ccui.ImageView} */
    _imgBgrLine03: null,
    /** @type {ck.Text} */
    _txtTitleLine03: null,
    /** @type {ck.Text} */
    _txtInfoLine03: null,
    /** @type {ccui.Layout} */
    _layoutRankingMedal: null,
    /** @type {ck.TableView} */
    _tableViewRankingMedal: null,
    /** @type {ck.Text} */
    _txtEmptyRankingMedal: null,
    /** @type {ccui.ImageView} */
    _imgShelf02: null,
    /** @type {ccui.PageView} */
    _pageViewShelf02: null,
    /** @type {ccui.ImageView} */
    _imgShelf01: null,
    /** @type {ccui.PageView} */
    _pageViewShelf01: null,
    /** @type {ccui.Button} */
    _btnRankingMedalLeft: null,
    /** @type {ccui.Button} */
    _btnRankingMedalRight: null,
    /** @type {ShareImageRewardWidget} */
    _nodeShareReward: null,


    /**
     * _ccs.ProfileTabLayout constructor
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
        _layoutRootLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRootLayoutComponent.setPositionPercentX(0);
        _layoutRootLayoutComponent.setPositionPercentYEnabled(true);
        _layoutRootLayoutComponent.setPositionPercentY(0);
        this._layoutRoot.setTouchEnabled(true);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(640, 1136));

        ///// # _layoutGeneral
        this._layoutGeneral = new ccui.Layout();
        this._layoutGeneral.setName("_layoutGeneral");
        this._layoutRoot.addChild(this._layoutGeneral);
        this._layoutGeneral.setCascadeOpacityEnabled(true);
        this._layoutGeneral.setCascadeColorEnabled(true);
        this._layoutGeneral.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutGeneral, 0.5, 0.8892);
        let _layoutGeneralLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGeneral);
        _layoutGeneralLayoutComponent.setPositionPercentXEnabled(true);
        _layoutGeneralLayoutComponent.setPositionPercentX(0.5);
        _layoutGeneralLayoutComponent.setPositionPercentYEnabled(true);
        _layoutGeneralLayoutComponent.setPositionPercentY(0.8892);
        _layoutGeneralLayoutComponent.setPercentWidthEnabled(true);
        _layoutGeneralLayoutComponent.setPercentWidth(1);
        this._layoutGeneral.setTouchEnabled(true);
        this._layoutGeneral.setUnifySizeEnabled(false);
        this._layoutGeneral.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutGeneral, 1);
        this._layoutGeneral.setContentSize(cc.size(this._layoutGeneral.width, 184.73));

        ///// # _nodeAvatar
        this._nodeAvatar = new cc.Node();
        this._nodeAvatar.setName("_nodeAvatar");
        this._layoutGeneral.addChild(this._nodeAvatar);
        this._nodeAvatar.setCascadeOpacityEnabled(true);
        this._nodeAvatar.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeAvatar, 0.275, 0.5531);
        this._nodeAvatar.setScale(1.5, 1.5);
        let _nodeAvatarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeAvatar);
        _nodeAvatarLayoutComponent.setPositionPercentXEnabled(true);
        _nodeAvatarLayoutComponent.setPositionPercentX(0.275);
        _nodeAvatarLayoutComponent.setPositionPercentYEnabled(true);
        _nodeAvatarLayoutComponent.setPositionPercentY(0.5531);

        ///// # _avatarNode
        this._avatarNode = new Avatar(ck.AvatarType.CIRCLE);
        this._avatarNode.setName("_avatarNode");
        this._nodeAvatar.addChild(this._avatarNode);
        this._avatarNode.setCascadeOpacityEnabled(true);
        this._avatarNode.setCascadeColorEnabled(true);
        this._avatarNode.setAnchorPoint(cc.p(0.5, 0.5));
        let _avatarNodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._avatarNode);
        this._avatarNode.setWidth(105);

        ///// # _layoutLevel
        this._layoutLevel = new ccui.Layout();
        this._layoutLevel.setName("_layoutLevel");
        this._layoutGeneral.addChild(this._layoutLevel);
        this._layoutLevel.setCascadeOpacityEnabled(true);
        this._layoutLevel.setCascadeColorEnabled(true);
        this._layoutLevel.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutLevel, 0.275, 0.1462);
        this._layoutLevel.setScale(1.5, 1.5);
        let _layoutLevelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLevel);
        _layoutLevelLayoutComponent.setPositionPercentXEnabled(true);
        _layoutLevelLayoutComponent.setPositionPercentX(0.275);
        this._layoutLevel.setTouchEnabled(false);
        this._layoutLevel.setUnifySizeEnabled(false);
        this._layoutLevel.ignoreContentAdaptWithSize(false);
        this._layoutLevel.setContentSize(cc.size(58.4941, 35.05));

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

        ///// # _layoutCoin
        this._layoutCoin = new ccui.Layout();
        this._layoutCoin.setName("_layoutCoin");
        this._layoutGeneral.addChild(this._layoutCoin);
        this._layoutCoin.setCascadeOpacityEnabled(true);
        this._layoutCoin.setCascadeColorEnabled(true);
        this._layoutCoin.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCoin, 0.5, 0.8878);
        let _layoutCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCoin);
        _layoutCoinLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentX(0.5);
        this._layoutCoin.setTouchEnabled(true);
        this._layoutCoin.setUnifySizeEnabled(false);
        this._layoutCoin.ignoreContentAdaptWithSize(false);
        this._layoutCoin.setContentSize(cc.size(235, 35));

        ///// # _imgCoinBox
        this._imgCoinBox = new ccui.ImageView();
        this._imgCoinBox.setName("_imgCoinBox");
        this._layoutCoin.addChild(this._imgCoinBox);
        this._imgCoinBox.setCascadeOpacityEnabled(true);
        this._imgCoinBox.setCascadeColorEnabled(true);
        this._imgCoinBox.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCoinBox, 0.5, 0.5);
        this._imgCoinBox.setOpacity(63);
        this._imgCoinBox.setColor(cc.color(0, 0, 0, 255));
        let _imgCoinBoxLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCoinBox);
        _imgCoinBoxLayoutComponent.setPositionPercentXEnabled(true);
        _imgCoinBoxLayoutComponent.setPositionPercentX(0.5);
        _imgCoinBoxLayoutComponent.setPositionPercentYEnabled(true);
        _imgCoinBoxLayoutComponent.setPositionPercentY(0.5);
        _imgCoinBoxLayoutComponent.setPercentWidthEnabled(true);
        _imgCoinBoxLayoutComponent.setPercentWidth(1);
        _imgCoinBoxLayoutComponent.setPercentHeightEnabled(true);
        _imgCoinBoxLayoutComponent.setPercentHeight(1);
        this._imgCoinBox.loadTexture("basics/other/BlueBox_02.png", 1);
        this._imgCoinBox.setUnifySizeEnabled(false);
        this._imgCoinBox.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgCoinBox, 1, 1);
        this._imgCoinBox.setTouchEnabled(false);

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
        this._imgCoinIcon.setContentSize(cc.size(60, 60));
        this._imgCoinIcon.setTouchEnabled(false);

        ///// # _txtCoin
        this._txtCoin = new ck.Text();
        this._txtCoin.setName("_txtCoin");
        this._layoutCoin.addChild(this._txtCoin);
        this._txtCoin.setCascadeOpacityEnabled(true);
        this._txtCoin.setCascadeColorEnabled(true);
        this._txtCoin.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCoin, 0.95, 0.5);
        this._txtCoin.setTextColor(cc.color(255, 203, 91, 255));
        let _txtCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCoin);
        _txtCoinLayoutComponent.setPositionPercentXEnabled(true);
        _txtCoinLayoutComponent.setPositionPercentX(0.95);
        _txtCoinLayoutComponent.setPositionPercentYEnabled(true);
        _txtCoinLayoutComponent.setPositionPercentY(0.5);
        this._txtCoin.setTouchEnabled(false);
        this._txtCoin.ignoreContentAdaptWithSize(true);
        this._txtCoin.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCoin.setDefaultFontSize(28);
        this._txtCoin.setTextHorizontalAlignment(1);
        this._txtCoin.setTextVerticalAlignment(1);

        ///// # _layoutGem
        this._layoutGem = new ccui.Layout();
        this._layoutGem.setName("_layoutGem");
        this._layoutGeneral.addChild(this._layoutGem);
        this._layoutGem.setCascadeOpacityEnabled(true);
        this._layoutGem.setCascadeColorEnabled(true);
        this._layoutGem.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutGem, 0.5, 0.6171);
        let _layoutGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGem);
        _layoutGemLayoutComponent.setPositionPercentXEnabled(true);
        _layoutGemLayoutComponent.setPositionPercentX(0.5);
        this._layoutGem.setTouchEnabled(true);
        this._layoutGem.setUnifySizeEnabled(false);
        this._layoutGem.ignoreContentAdaptWithSize(false);
        this._layoutGem.setContentSize(cc.size(235, 35));

        ///// # _imgGemBox
        this._imgGemBox = new ccui.ImageView();
        this._imgGemBox.setName("_imgGemBox");
        this._layoutGem.addChild(this._imgGemBox);
        this._imgGemBox.setCascadeOpacityEnabled(true);
        this._imgGemBox.setCascadeColorEnabled(true);
        this._imgGemBox.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGemBox, 0.5, 0.5);
        this._imgGemBox.setOpacity(63);
        this._imgGemBox.setColor(cc.color(0, 0, 0, 255));
        let _imgGemBoxLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGemBox);
        _imgGemBoxLayoutComponent.setPositionPercentXEnabled(true);
        _imgGemBoxLayoutComponent.setPositionPercentX(0.5);
        _imgGemBoxLayoutComponent.setPositionPercentYEnabled(true);
        _imgGemBoxLayoutComponent.setPositionPercentY(0.5);
        _imgGemBoxLayoutComponent.setPercentWidthEnabled(true);
        _imgGemBoxLayoutComponent.setPercentWidth(1);
        _imgGemBoxLayoutComponent.setPercentHeightEnabled(true);
        _imgGemBoxLayoutComponent.setPercentHeight(1);
        this._imgGemBox.loadTexture("basics/other/BlueBox_02.png", 1);
        this._imgGemBox.setUnifySizeEnabled(false);
        this._imgGemBox.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgGemBox, 1, 1);
        this._imgGemBox.setTouchEnabled(false);

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
        this._imgGemIcon.setContentSize(cc.size(60, 60));
        this._imgGemIcon.setTouchEnabled(false);

        ///// # _txtGem
        this._txtGem = new ck.Text();
        this._txtGem.setName("_txtGem");
        this._layoutGem.addChild(this._txtGem);
        this._txtGem.setCascadeOpacityEnabled(true);
        this._txtGem.setCascadeColorEnabled(true);
        this._txtGem.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGem, 0.95, 0.5);
        this._txtGem.setTextColor(cc.color(224, 129, 255, 255));
        let _txtGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGem);
        _txtGemLayoutComponent.setPositionPercentXEnabled(true);
        _txtGemLayoutComponent.setPositionPercentX(0.95);
        _txtGemLayoutComponent.setPositionPercentYEnabled(true);
        _txtGemLayoutComponent.setPositionPercentY(0.5);
        this._txtGem.setTouchEnabled(false);
        this._txtGem.ignoreContentAdaptWithSize(true);
        this._txtGem.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGem.setDefaultFontSize(28);
        this._txtGem.setTextHorizontalAlignment(1);
        this._txtGem.setTextVerticalAlignment(1);

        ///// # _txtPlayerName
        this._txtPlayerName = new ck.Text();
        this._txtPlayerName.setName("_txtPlayerName");
        this._layoutGeneral.addChild(this._txtPlayerName);
        this._txtPlayerName.setCascadeOpacityEnabled(true);
        this._txtPlayerName.setCascadeColorEnabled(true);
        this._txtPlayerName.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPlayerName, 0.85, 0.3519);
        let _txtPlayerNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPlayerName);
        _txtPlayerNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtPlayerNameLayoutComponent.setPositionPercentX(0.85);
        this._txtPlayerName.setTouchEnabled(false);
        this._txtPlayerName.ignoreContentAdaptWithSize(true);
        this._txtPlayerName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtPlayerName.setDefaultFontSize(36);
        this._txtPlayerName.setTextHorizontalAlignment(2);
        this._txtPlayerName.setTextVerticalAlignment(1);

        ///// # _txtID
        this._txtID = new ck.Text();
        this._txtID.setName("_txtID");
        this._layoutGeneral.addChild(this._txtID);
        this._txtID.setCascadeOpacityEnabled(true);
        this._txtID.setCascadeColorEnabled(true);
        this._txtID.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtID, 0.85, 0.1137);
        let _txtIDLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtID);
        _txtIDLayoutComponent.setPositionPercentXEnabled(true);
        _txtIDLayoutComponent.setPositionPercentX(0.85);
        this._txtID.setTouchEnabled(false);
        this._txtID.ignoreContentAdaptWithSize(true);
        this._txtID.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtID.setDefaultFontSize(36);
        this._txtID.setTextHorizontalAlignment(2);
        this._txtID.setTextVerticalAlignment(1);

        ///// # _layoutWinLose
        this._layoutWinLose = new ccui.Layout();
        this._layoutWinLose.setName("_layoutWinLose");
        this._layoutRoot.addChild(this._layoutWinLose);
        this._layoutWinLose.setCascadeOpacityEnabled(true);
        this._layoutWinLose.setCascadeColorEnabled(true);
        this._layoutWinLose.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutWinLose, 0.5, 0.7042);
        let _layoutWinLoseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutWinLose);
        _layoutWinLoseLayoutComponent.setPositionPercentXEnabled(true);
        _layoutWinLoseLayoutComponent.setPositionPercentX(0.5);
        _layoutWinLoseLayoutComponent.setPositionPercentYEnabled(true);
        _layoutWinLoseLayoutComponent.setPositionPercentY(0.7042);
        _layoutWinLoseLayoutComponent.setPercentWidthEnabled(true);
        _layoutWinLoseLayoutComponent.setPercentWidth(1);
        this._layoutWinLose.setTouchEnabled(true);
        this._layoutWinLose.setUnifySizeEnabled(false);
        this._layoutWinLose.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutWinLose, 1);
        this._layoutWinLose.setContentSize(cc.size(this._layoutWinLose.width, 160));

        ///// # _layoutLine01
        this._layoutLine01 = new ccui.Layout();
        this._layoutLine01.setName("_layoutLine01");
        this._layoutWinLose.addChild(this._layoutLine01);
        this._layoutLine01.setCascadeOpacityEnabled(true);
        this._layoutLine01.setCascadeColorEnabled(true);
        this._layoutLine01.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutLine01, 0.5, 1);
        let _layoutLine01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLine01);
        _layoutLine01LayoutComponent.setPositionPercentXEnabled(true);
        _layoutLine01LayoutComponent.setPositionPercentX(0.5);
        _layoutLine01LayoutComponent.setPositionPercentYEnabled(true);
        _layoutLine01LayoutComponent.setPositionPercentY(1);
        _layoutLine01LayoutComponent.setPercentWidthEnabled(true);
        _layoutLine01LayoutComponent.setPercentWidth(0.8);
        this._layoutLine01.setTouchEnabled(false);
        this._layoutLine01.setUnifySizeEnabled(false);
        this._layoutLine01.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutLine01, 0.8);
        this._layoutLine01.setContentSize(cc.size(this._layoutLine01.width, 43));

        ///// # _imgBgrLine01
        this._imgBgrLine01 = new ccui.ImageView();
        this._imgBgrLine01.setName("_imgBgrLine01");
        this._layoutLine01.addChild(this._imgBgrLine01);
        this._imgBgrLine01.setCascadeOpacityEnabled(true);
        this._imgBgrLine01.setCascadeColorEnabled(true);
        this._imgBgrLine01.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgrLine01, 1, 0.5);
        let _imgBgrLine01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrLine01);
        _imgBgrLine01LayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLine01LayoutComponent.setPositionPercentX(1);
        _imgBgrLine01LayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLine01LayoutComponent.setPositionPercentY(0.5);
        _imgBgrLine01LayoutComponent.setPercentWidthEnabled(true);
        _imgBgrLine01LayoutComponent.setPercentWidth(1);
        _imgBgrLine01LayoutComponent.setPercentHeightEnabled(true);
        _imgBgrLine01LayoutComponent.setPercentHeight(1.0465);
        this._imgBgrLine01.loadTexture("basics/other/RadientBoard_02.png", 1);
        this._imgBgrLine01.setUnifySizeEnabled(false);
        this._imgBgrLine01.ignoreContentAdaptWithSize(false);
        this._imgBgrLine01.setScale9Enabled(true);
        this._imgBgrLine01.setCapInsets(cc.rect(121, 11, 269, 23));
        ck.UIUtils.setSizePercent(this._imgBgrLine01, 1, 1.0465);
        this._imgBgrLine01.setTouchEnabled(false);

        ///// # _txtTitleLine01
        this._txtTitleLine01 = new ck.Text();
        this._txtTitleLine01.setName("_txtTitleLine01");
        this._layoutLine01.addChild(this._txtTitleLine01);
        this._txtTitleLine01.setCascadeOpacityEnabled(true);
        this._txtTitleLine01.setCascadeColorEnabled(true);
        this._txtTitleLine01.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitleLine01, 0.075, 0.5);
        this._txtTitleLine01.setTextColor(cc.color(55, 210, 195, 255));
        let _txtTitleLine01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitleLine01);
        _txtTitleLine01LayoutComponent.setPositionPercentXEnabled(true);
        _txtTitleLine01LayoutComponent.setPositionPercentX(0.075);
        _txtTitleLine01LayoutComponent.setPositionPercentYEnabled(true);
        _txtTitleLine01LayoutComponent.setPositionPercentY(0.5);
        this._txtTitleLine01.setTouchEnabled(false);
        this._txtTitleLine01.ignoreContentAdaptWithSize(true);
        this._txtTitleLine01.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTitleLine01.setDefaultFontSize(30);
        this._txtTitleLine01.setTextHorizontalAlignment(0);
        this._txtTitleLine01.setTextVerticalAlignment(1);

        ///// # _txtInfoLine01
        this._txtInfoLine01 = new ck.Text();
        this._txtInfoLine01.setName("_txtInfoLine01");
        this._layoutLine01.addChild(this._txtInfoLine01);
        this._txtInfoLine01.setCascadeOpacityEnabled(true);
        this._txtInfoLine01.setCascadeColorEnabled(true);
        this._txtInfoLine01.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtInfoLine01, 0.975, 0.5);
        this._txtInfoLine01.setTextColor(cc.color(180, 234, 96, 255));
        let _txtInfoLine01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtInfoLine01);
        _txtInfoLine01LayoutComponent.setPositionPercentXEnabled(true);
        _txtInfoLine01LayoutComponent.setPositionPercentX(0.975);
        _txtInfoLine01LayoutComponent.setPositionPercentYEnabled(true);
        _txtInfoLine01LayoutComponent.setPositionPercentY(0.5);
        this._txtInfoLine01.setTouchEnabled(false);
        this._txtInfoLine01.ignoreContentAdaptWithSize(true);
        this._txtInfoLine01.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtInfoLine01.setDefaultFontSize(26);
        this._txtInfoLine01.setTextHorizontalAlignment(2);
        this._txtInfoLine01.setTextVerticalAlignment(1);

        ///// # _layoutLine02
        this._layoutLine02 = new ccui.Layout();
        this._layoutLine02.setName("_layoutLine02");
        this._layoutWinLose.addChild(this._layoutLine02);
        this._layoutLine02.setCascadeOpacityEnabled(true);
        this._layoutLine02.setCascadeColorEnabled(true);
        this._layoutLine02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutLine02, 0.5, 0.5);
        let _layoutLine02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLine02);
        _layoutLine02LayoutComponent.setPositionPercentXEnabled(true);
        _layoutLine02LayoutComponent.setPositionPercentX(0.5);
        _layoutLine02LayoutComponent.setPositionPercentYEnabled(true);
        _layoutLine02LayoutComponent.setPositionPercentY(0.5);
        _layoutLine02LayoutComponent.setPercentWidthEnabled(true);
        _layoutLine02LayoutComponent.setPercentWidth(0.8);
        this._layoutLine02.setTouchEnabled(false);
        this._layoutLine02.setUnifySizeEnabled(false);
        this._layoutLine02.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutLine02, 0.8);
        this._layoutLine02.setContentSize(cc.size(this._layoutLine02.width, 43));

        ///// # _imgBgrLine02
        this._imgBgrLine02 = new ccui.ImageView();
        this._imgBgrLine02.setName("_imgBgrLine02");
        this._layoutLine02.addChild(this._imgBgrLine02);
        this._imgBgrLine02.setCascadeOpacityEnabled(true);
        this._imgBgrLine02.setCascadeColorEnabled(true);
        this._imgBgrLine02.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgrLine02, 1, 0.5);
        let _imgBgrLine02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrLine02);
        _imgBgrLine02LayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLine02LayoutComponent.setPositionPercentX(1);
        _imgBgrLine02LayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLine02LayoutComponent.setPositionPercentY(0.5);
        _imgBgrLine02LayoutComponent.setPercentWidthEnabled(true);
        _imgBgrLine02LayoutComponent.setPercentWidth(1);
        _imgBgrLine02LayoutComponent.setPercentHeightEnabled(true);
        _imgBgrLine02LayoutComponent.setPercentHeight(1.0465);
        this._imgBgrLine02.loadTexture("basics/other/RadientBoard_02.png", 1);
        this._imgBgrLine02.setUnifySizeEnabled(false);
        this._imgBgrLine02.ignoreContentAdaptWithSize(false);
        this._imgBgrLine02.setScale9Enabled(true);
        this._imgBgrLine02.setCapInsets(cc.rect(121, 11, 269, 23));
        ck.UIUtils.setSizePercent(this._imgBgrLine02, 1, 1.0465);
        this._imgBgrLine02.setTouchEnabled(false);

        ///// # _txtTitleLine02
        this._txtTitleLine02 = new ck.Text();
        this._txtTitleLine02.setName("_txtTitleLine02");
        this._layoutLine02.addChild(this._txtTitleLine02);
        this._txtTitleLine02.setCascadeOpacityEnabled(true);
        this._txtTitleLine02.setCascadeColorEnabled(true);
        this._txtTitleLine02.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitleLine02, 0.075, 0.5);
        this._txtTitleLine02.setTextColor(cc.color(55, 210, 195, 255));
        let _txtTitleLine02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitleLine02);
        _txtTitleLine02LayoutComponent.setPositionPercentXEnabled(true);
        _txtTitleLine02LayoutComponent.setPositionPercentX(0.075);
        _txtTitleLine02LayoutComponent.setPositionPercentYEnabled(true);
        _txtTitleLine02LayoutComponent.setPositionPercentY(0.5);
        this._txtTitleLine02.setTouchEnabled(false);
        this._txtTitleLine02.ignoreContentAdaptWithSize(true);
        this._txtTitleLine02.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTitleLine02.setDefaultFontSize(30);
        this._txtTitleLine02.setString(gm.localize.getText("TXT_BIGGEST_GOLD_WIN"));
        this._txtTitleLine02.setTextHorizontalAlignment(0);
        this._txtTitleLine02.setTextVerticalAlignment(1);

        ///// # _txtInfoLine02
        this._txtInfoLine02 = new ck.Text();
        this._txtInfoLine02.setName("_txtInfoLine02");
        this._layoutLine02.addChild(this._txtInfoLine02);
        this._txtInfoLine02.setCascadeOpacityEnabled(true);
        this._txtInfoLine02.setCascadeColorEnabled(true);
        this._txtInfoLine02.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtInfoLine02, 0.975, 0.5);
        this._txtInfoLine02.setTextColor(cc.color(255, 203, 91, 255));
        let _txtInfoLine02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtInfoLine02);
        _txtInfoLine02LayoutComponent.setPositionPercentXEnabled(true);
        _txtInfoLine02LayoutComponent.setPositionPercentX(0.975);
        _txtInfoLine02LayoutComponent.setPositionPercentYEnabled(true);
        _txtInfoLine02LayoutComponent.setPositionPercentY(0.5);
        this._txtInfoLine02.setTouchEnabled(false);
        this._txtInfoLine02.ignoreContentAdaptWithSize(true);
        this._txtInfoLine02.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtInfoLine02.setDefaultFontSize(26);
        this._txtInfoLine02.setTextHorizontalAlignment(2);
        this._txtInfoLine02.setTextVerticalAlignment(1);

        ///// # _imgCoinIconLine02
        this._imgCoinIconLine02 = new ccui.ImageView();
        this._imgCoinIconLine02.setName("_imgCoinIconLine02");
        this._txtInfoLine02.addChild(this._imgCoinIconLine02);
        this._imgCoinIconLine02.setCascadeOpacityEnabled(true);
        this._imgCoinIconLine02.setCascadeColorEnabled(true);
        this._imgCoinIconLine02.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCoinIconLine02, 0.025, 0.6);
        let _imgCoinIconLine02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCoinIconLine02);
        _imgCoinIconLine02LayoutComponent.setPositionPercentXEnabled(true);
        _imgCoinIconLine02LayoutComponent.setPositionPercentX(0.025);
        _imgCoinIconLine02LayoutComponent.setPositionPercentYEnabled(true);
        _imgCoinIconLine02LayoutComponent.setPositionPercentY(0.6);
        this._imgCoinIconLine02.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgCoinIconLine02.setUnifySizeEnabled(false);
        this._imgCoinIconLine02.ignoreContentAdaptWithSize(false);
        this._imgCoinIconLine02.setContentSize(cc.size(42, 42));
        this._imgCoinIconLine02.setTouchEnabled(false);

        ///// # _layoutLine03
        this._layoutLine03 = new ccui.Layout();
        this._layoutLine03.setName("_layoutLine03");
        this._layoutWinLose.addChild(this._layoutLine03);
        this._layoutLine03.setCascadeOpacityEnabled(true);
        this._layoutLine03.setCascadeColorEnabled(true);
        this._layoutLine03.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutLine03, 0.5, 0);
        let _layoutLine03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLine03);
        _layoutLine03LayoutComponent.setPositionPercentXEnabled(true);
        _layoutLine03LayoutComponent.setPositionPercentX(0.5);
        _layoutLine03LayoutComponent.setPositionPercentYEnabled(true);
        _layoutLine03LayoutComponent.setPositionPercentY(0);
        _layoutLine03LayoutComponent.setPercentWidthEnabled(true);
        _layoutLine03LayoutComponent.setPercentWidth(0.8);
        this._layoutLine03.setTouchEnabled(false);
        this._layoutLine03.setUnifySizeEnabled(false);
        this._layoutLine03.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutLine03, 0.8);
        this._layoutLine03.setContentSize(cc.size(this._layoutLine03.width, 43));

        ///// # _imgBgrLine03
        this._imgBgrLine03 = new ccui.ImageView();
        this._imgBgrLine03.setName("_imgBgrLine03");
        this._layoutLine03.addChild(this._imgBgrLine03);
        this._imgBgrLine03.setCascadeOpacityEnabled(true);
        this._imgBgrLine03.setCascadeColorEnabled(true);
        this._imgBgrLine03.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgrLine03, 1, 0.5);
        let _imgBgrLine03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrLine03);
        _imgBgrLine03LayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLine03LayoutComponent.setPositionPercentX(1);
        _imgBgrLine03LayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLine03LayoutComponent.setPositionPercentY(0.5);
        _imgBgrLine03LayoutComponent.setPercentWidthEnabled(true);
        _imgBgrLine03LayoutComponent.setPercentWidth(1);
        _imgBgrLine03LayoutComponent.setPercentHeightEnabled(true);
        _imgBgrLine03LayoutComponent.setPercentHeight(1.0465);
        this._imgBgrLine03.loadTexture("basics/other/RadientBoard_02.png", 1);
        this._imgBgrLine03.setUnifySizeEnabled(false);
        this._imgBgrLine03.ignoreContentAdaptWithSize(false);
        this._imgBgrLine03.setScale9Enabled(true);
        this._imgBgrLine03.setCapInsets(cc.rect(121, 11, 269, 23));
        ck.UIUtils.setSizePercent(this._imgBgrLine03, 1, 1.0465);
        this._imgBgrLine03.setTouchEnabled(false);

        ///// # _txtTitleLine03
        this._txtTitleLine03 = new ck.Text();
        this._txtTitleLine03.setName("_txtTitleLine03");
        this._layoutLine03.addChild(this._txtTitleLine03);
        this._txtTitleLine03.setCascadeOpacityEnabled(true);
        this._txtTitleLine03.setCascadeColorEnabled(true);
        this._txtTitleLine03.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitleLine03, 0.075, 0.5);
        this._txtTitleLine03.setTextColor(cc.color(55, 210, 195, 255));
        let _txtTitleLine03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitleLine03);
        _txtTitleLine03LayoutComponent.setPositionPercentXEnabled(true);
        _txtTitleLine03LayoutComponent.setPositionPercentX(0.075);
        _txtTitleLine03LayoutComponent.setPositionPercentYEnabled(true);
        _txtTitleLine03LayoutComponent.setPositionPercentY(0.5);
        this._txtTitleLine03.setTouchEnabled(false);
        this._txtTitleLine03.ignoreContentAdaptWithSize(true);
        this._txtTitleLine03.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTitleLine03.setDefaultFontSize(30);
        this._txtTitleLine03.setString(gm.localize.getText("TXT_WIN_RATE"));
        this._txtTitleLine03.setTextHorizontalAlignment(0);
        this._txtTitleLine03.setTextVerticalAlignment(1);

        ///// # _txtInfoLine03
        this._txtInfoLine03 = new ck.Text();
        this._txtInfoLine03.setName("_txtInfoLine03");
        this._layoutLine03.addChild(this._txtInfoLine03);
        this._txtInfoLine03.setCascadeOpacityEnabled(true);
        this._txtInfoLine03.setCascadeColorEnabled(true);
        this._txtInfoLine03.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtInfoLine03, 0.975, 0.5);
        this._txtInfoLine03.setTextColor(cc.color(180, 234, 96, 255));
        let _txtInfoLine03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtInfoLine03);
        _txtInfoLine03LayoutComponent.setPositionPercentXEnabled(true);
        _txtInfoLine03LayoutComponent.setPositionPercentX(0.975);
        _txtInfoLine03LayoutComponent.setPositionPercentYEnabled(true);
        _txtInfoLine03LayoutComponent.setPositionPercentY(0.5);
        this._txtInfoLine03.setTouchEnabled(false);
        this._txtInfoLine03.ignoreContentAdaptWithSize(true);
        this._txtInfoLine03.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtInfoLine03.setDefaultFontSize(26);
        this._txtInfoLine03.setTextHorizontalAlignment(2);
        this._txtInfoLine03.setTextVerticalAlignment(1);

        ///// # _layoutRankingMedal
        this._layoutRankingMedal = new ccui.Layout();
        this._layoutRankingMedal.setName("_layoutRankingMedal");
        this._layoutRoot.addChild(this._layoutRankingMedal);
        this._layoutRankingMedal.setCascadeOpacityEnabled(true);
        this._layoutRankingMedal.setCascadeColorEnabled(true);
        this._layoutRankingMedal.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutRankingMedal, 0.5, 0);
        let _layoutRankingMedalLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRankingMedal);
        _layoutRankingMedalLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRankingMedalLayoutComponent.setPositionPercentX(0.5);
        _layoutRankingMedalLayoutComponent.setPositionPercentYEnabled(true);
        _layoutRankingMedalLayoutComponent.setPositionPercentY(0);
        _layoutRankingMedalLayoutComponent.setPercentWidthEnabled(true);
        _layoutRankingMedalLayoutComponent.setPercentWidth(1);
        this._layoutRankingMedal.setTouchEnabled(true);
        this._layoutRankingMedal.setUnifySizeEnabled(false);
        this._layoutRankingMedal.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutRankingMedal, 1);
        this._layoutRankingMedal.setContentSize(cc.size(this._layoutRankingMedal.width, 610));

        ///// # _tableViewRankingMedal
        this._tableViewRankingMedal = new ck.TableView();
        this._tableViewRankingMedal.setName("_tableViewRankingMedal");
        this._layoutRankingMedal.addChild(this._tableViewRankingMedal);
        this._tableViewRankingMedal.setCascadeOpacityEnabled(true);
        this._tableViewRankingMedal.setCascadeColorEnabled(true);
        this._tableViewRankingMedal.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._tableViewRankingMedal, 0.5, 0.4375);
        let _tableViewRankingMedalLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._tableViewRankingMedal);
        _tableViewRankingMedalLayoutComponent.setPositionPercentXEnabled(true);
        _tableViewRankingMedalLayoutComponent.setPositionPercentX(0.5);
        _tableViewRankingMedalLayoutComponent.setPositionPercentYEnabled(true);
        _tableViewRankingMedalLayoutComponent.setPositionPercentY(0.4375);
        _tableViewRankingMedalLayoutComponent.setPercentWidthEnabled(true);
        _tableViewRankingMedalLayoutComponent.setPercentWidth(1);
        _tableViewRankingMedalLayoutComponent.setPercentHeightEnabled(true);
        _tableViewRankingMedalLayoutComponent.setPercentHeight(0.875);

        ///// # _txtEmptyRankingMedal
        this._txtEmptyRankingMedal = new ck.Text();
        this._txtEmptyRankingMedal.setName("_txtEmptyRankingMedal");
        this._layoutRankingMedal.addChild(this._txtEmptyRankingMedal);
        this._txtEmptyRankingMedal.setCascadeOpacityEnabled(true);
        this._txtEmptyRankingMedal.setCascadeColorEnabled(true);
        this._txtEmptyRankingMedal.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtEmptyRankingMedal, 0.5, 0.775);
        this._txtEmptyRankingMedal.setTextColor(cc.color(75, 236, 221, 255));
        let _txtEmptyRankingMedalLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtEmptyRankingMedal);
        _txtEmptyRankingMedalLayoutComponent.setPositionPercentXEnabled(true);
        _txtEmptyRankingMedalLayoutComponent.setPositionPercentX(0.5);
        _txtEmptyRankingMedalLayoutComponent.setPositionPercentYEnabled(true);
        _txtEmptyRankingMedalLayoutComponent.setPositionPercentY(0.775);
        this._txtEmptyRankingMedal.setTouchEnabled(false);
        this._txtEmptyRankingMedal.ignoreContentAdaptWithSize(true);
        this._txtEmptyRankingMedal.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtEmptyRankingMedal.setDefaultFontSize(36);
        this._txtEmptyRankingMedal.setString("REACH TOP 3 RANKING\nTO OPEN HALL OF FAME");
        this._txtEmptyRankingMedal.setTextHorizontalAlignment(1);
        this._txtEmptyRankingMedal.setTextVerticalAlignment(1);

        ///// # _imgShelf02
        this._imgShelf02 = new ccui.ImageView();
        this._imgShelf02.setName("_imgShelf02");
        this._layoutRankingMedal.addChild(this._imgShelf02);
        this._imgShelf02.setCascadeOpacityEnabled(true);
        this._imgShelf02.setCascadeColorEnabled(true);
        this._imgShelf02.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgShelf02, 0.5, 0.03);
        let _imgShelf02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgShelf02);
        _imgShelf02LayoutComponent.setPositionPercentXEnabled(true);
        _imgShelf02LayoutComponent.setPositionPercentX(0.5);
        this._imgShelf02.loadTexture("basics/other/Shelf.png", 1);
        this._imgShelf02.setUnifySizeEnabled(false);
        this._imgShelf02.ignoreContentAdaptWithSize(false);
        this._imgShelf02.setContentSize(cc.size(640, 128));
        this._imgShelf02.setTouchEnabled(false);

        ///// # _pageViewShelf02
        this._pageViewShelf02 = new ccui.PageView();
        this._pageViewShelf02.setName("_pageViewShelf02");
        this._layoutRankingMedal.addChild(this._pageViewShelf02);
        this._pageViewShelf02.setCascadeOpacityEnabled(true);
        this._pageViewShelf02.setCascadeColorEnabled(true);
        this._pageViewShelf02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._pageViewShelf02, 0.5, 0.3501);
        let _pageViewShelf02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._pageViewShelf02);
        this._pageViewShelf02.setTouchEnabled(false);
        this._pageViewShelf02.setUnifySizeEnabled(false);
        this._pageViewShelf02.ignoreContentAdaptWithSize(false);
        this._pageViewShelf02.setContentSize(cc.size(640, 250));

        ///// # _imgShelf01
        this._imgShelf01 = new ccui.ImageView();
        this._imgShelf01.setName("_imgShelf01");
        this._layoutRankingMedal.addChild(this._imgShelf01);
        this._imgShelf01.setCascadeOpacityEnabled(true);
        this._imgShelf01.setCascadeColorEnabled(true);
        this._imgShelf01.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgShelf01, 0.5, 0.475);
        let _imgShelf01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgShelf01);
        _imgShelf01LayoutComponent.setPositionPercentXEnabled(true);
        _imgShelf01LayoutComponent.setPositionPercentX(0.5);
        _imgShelf01LayoutComponent.setPercentWidthEnabled(true);
        _imgShelf01LayoutComponent.setPercentWidth(1);
        this._imgShelf01.loadTexture("basics/other/Shelf.png", 1);
        this._imgShelf01.setUnifySizeEnabled(false);
        this._imgShelf01.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._imgShelf01, 1);
        this._imgShelf01.setContentSize(cc.size(this._imgShelf01.width, 128));
        this._imgShelf01.setTouchEnabled(false);

        ///// # _pageViewShelf01
        this._pageViewShelf01 = new ccui.PageView();
        this._pageViewShelf01.setName("_pageViewShelf01");
        this._layoutRankingMedal.addChild(this._pageViewShelf01);
        this._pageViewShelf01.setCascadeOpacityEnabled(true);
        this._pageViewShelf01.setCascadeColorEnabled(true);
        this._pageViewShelf01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._pageViewShelf01, 0.5, 0.7951);
        let _pageViewShelf01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._pageViewShelf01);
        this._pageViewShelf01.setTouchEnabled(false);
        this._pageViewShelf01.setUnifySizeEnabled(false);
        this._pageViewShelf01.ignoreContentAdaptWithSize(false);
        this._pageViewShelf01.setContentSize(cc.size(640, 250));

        ///// # _btnRankingMedalLeft
        this._btnRankingMedalLeft = new ccui.Button();
        this._btnRankingMedalLeft.setName("_btnRankingMedalLeft");
        this._layoutRankingMedal.addChild(this._btnRankingMedalLeft);
        this._btnRankingMedalLeft.setCascadeOpacityEnabled(true);
        this._btnRankingMedalLeft.setCascadeColorEnabled(true);
        this._btnRankingMedalLeft.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._btnRankingMedalLeft, 0.005, 0.5);
        let _btnRankingMedalLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnRankingMedalLeft);
        _btnRankingMedalLeftLayoutComponent.setPositionPercentXEnabled(true);
        _btnRankingMedalLeftLayoutComponent.setPositionPercentX(0.005);
        _btnRankingMedalLeftLayoutComponent.setPositionPercentYEnabled(true);
        _btnRankingMedalLeftLayoutComponent.setPositionPercentY(0.5);
        this._btnRankingMedalLeft.loadTextureDisabled("icons/color/other/Arrow.png", 1);
        this._btnRankingMedalLeft.loadTexturePressed("icons/color/other/Arrow.png", 1);
        this._btnRankingMedalLeft.loadTextureNormal("icons/color/other/Arrow.png", 1);
        this._btnRankingMedalLeft.setUnifySizeEnabled(false);
        this._btnRankingMedalLeft.ignoreContentAdaptWithSize(false);
        this._btnRankingMedalLeft.setContentSize(cc.size(47.5, 91.25));
        this._btnRankingMedalLeft.setTouchEnabled(true);

        ///// # _btnRankingMedalRight
        this._btnRankingMedalRight = new ccui.Button();
        this._btnRankingMedalRight.setName("_btnRankingMedalRight");
        this._layoutRankingMedal.addChild(this._btnRankingMedalRight);
        this._btnRankingMedalRight.setCascadeOpacityEnabled(true);
        this._btnRankingMedalRight.setCascadeColorEnabled(true);
        this._btnRankingMedalRight.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._btnRankingMedalRight, 0.995, 0.5);
        this._btnRankingMedalRight.setFlippedX(true);
        let _btnRankingMedalRightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnRankingMedalRight);
        _btnRankingMedalRightLayoutComponent.setPositionPercentXEnabled(true);
        _btnRankingMedalRightLayoutComponent.setPositionPercentX(0.995);
        _btnRankingMedalRightLayoutComponent.setPositionPercentYEnabled(true);
        _btnRankingMedalRightLayoutComponent.setPositionPercentY(0.5);
        this._btnRankingMedalRight.loadTextureDisabled("icons/color/other/Arrow.png", 1);
        this._btnRankingMedalRight.loadTexturePressed("icons/color/other/Arrow.png", 1);
        this._btnRankingMedalRight.loadTextureNormal("icons/color/other/Arrow.png", 1);
        this._btnRankingMedalRight.setUnifySizeEnabled(false);
        this._btnRankingMedalRight.ignoreContentAdaptWithSize(false);
        this._btnRankingMedalRight.setContentSize(cc.size(47.5, 91.25));
        this._btnRankingMedalRight.setTouchEnabled(true);

        ///// # _nodeShareReward
        this._nodeShareReward = new ShareImageRewardWidget();
        this._nodeShareReward.setName("_nodeShareReward");
        this._layoutRoot.addChild(this._nodeShareReward);
        this._nodeShareReward.setCascadeOpacityEnabled(true);
        this._nodeShareReward.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeShareReward, 0.5, 0.25);
        let _nodeShareRewardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeShareReward);
        _nodeShareRewardLayoutComponent.setPositionPercentXEnabled(true);
        _nodeShareRewardLayoutComponent.setPositionPercentX(0.5);
        _nodeShareRewardLayoutComponent.setPositionPercentYEnabled(true);
        _nodeShareRewardLayoutComponent.setPositionPercentY(0.25);

    },



});

/**
 * Create ProfileTabLayout
 * @returns {_ccs.ProfileTabLayout}
 */
_ccs.ProfileTabLayout.create = function () {
    return new _ccs.ProfileTabLayout();
};
