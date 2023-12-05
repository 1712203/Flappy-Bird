/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.HappySharkLayer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.HappySharkLayer = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutBackground: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ccui.Layout} */
    _layoutUI: null,
    /** @type {ccui.Layout} */
    _layoutHelp: null,
    /** @type {ccui.ImageView} */
    _imgHelpBgr: null,
    /** @type {ccui.ImageView} */
    _imgHelpIcon: null,
    /** @type {ccui.Layout} */
    _layoutExit: null,
    /** @type {ccui.ImageView} */
    _imgExitBgr: null,
    /** @type {ccui.ImageView} */
    _imgExitIcon: null,
    /** @type {ccui.ImageView} */
    _imgExitIconDark: null,
    /** @type {ccui.Layout} */
    _layoutUser: null,
    /** @type {ccui.ImageView} */
    _imgUserBackground: null,
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
    /** @type {ccui.Button} */
    _btnAddCoin: null,
    /** @type {ccui.Layout} */
    _layoutInventory: null,
    /** @type {ccui.ImageView} */
    _imgInventoryIcon: null,
    /** @type {ck.Text} */
    _txtInventory: null,
    /** @type {ccui.Button} */
    _btnAddInventory: null,
    /** @type {HappySharkProgressMilestoneWidget} */
    _progressMilestoneWidget: null,
    /** @type {ck.GridViewVertical} */
    _gridviewBox: null,
    /** @type {HappySharkListChest} */
    _listChest: null,
    /** @type {ccui.Layout} */
    _layoutItemSpawn: null,
    /** @type {HappySharkNPCWidget} */
    _npcWidget: null,
    /** @type {ccui.Layout} */
    _layoutBottom: null,
    /** @type {ccui.Layout} */
    _layoutToken: null,
    /** @type {ccui.ImageView} */
    _imgTokenBackground: null,
    /** @type {ccui.Button} */
    _btnAddToken: null,
    /** @type {ccui.ImageView} */
    _imgToken: null,
    /** @type {ck.Text} */
    _txtToken: null,
    /** @type {ccui.Layout} */
    _layoutTurn: null,
    /** @type {AsyncButton} */
    _btnTurn00: null,
    /** @type {ccui.ImageView} */
    _imgButtonTurn00: null,
    /** @type {ck.Text} */
    _txtButtonTurn00: null,
    /** @type {ccui.ImageView} */
    _imgLoadingButtonTurn00: null,
    /** @type {AsyncButton} */
    _btnTurn01: null,
    /** @type {ccui.ImageView} */
    _imgButtonTurn01: null,
    /** @type {ck.Text} */
    _txtButtonTurn01: null,
    /** @type {ccui.ImageView} */
    _imgLoadingButtonTurn01: null,
    /** @type {ShopEventIcon} */
    _shopToken: null,
    /** @type {ccui.Layout} */
    _layoutTutorial: null,
    /** @type {ccui.Layout} */
    _layoutTutorialBackground: null,
    /** @type {ck.Text} */
    _txtTutorial: null,
    /** @type {cc.Node} */
    _widgetTutorialStep01: null,
    /** @type {ccui.Layout} */
    _layoutPlayTutorialStep01: null,
    /** @type {ccui.ImageView} */
    _imgProgressTutorialStep01: null,
    /** @type {ccui.ImageView} */
    _imgToken00TutorialStep01: null,
    /** @type {ccui.ImageView} */
    _imgToken01TutorialStep01: null,
    /** @type {ccui.ImageView} */
    _imgBagTutorialStep01: null,
    /** @type {ccui.Layout} */
    _layoutBubbleTutorialStep01: null,
    /** @type {ccui.ImageView} */
    _imgBubbleBackgroundTutorialStep01: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtBubbleTutorialStep01: null,
    /** @type {ccui.ImageView} */
    _imgArrow00: null,
    /** @type {cc.Node} */
    _widgetTutorialStep02: null,
    /** @type {ccui.ImageView} */
    _imgNPCTutorialStep02: null,
    /** @type {cc.Node} */
    _widgetBoxTutorialStep02: null,
    /** @type {ccui.ImageView} */
    _imgBoxTutorialStep02: null,
    /** @type {ccui.ImageView} */
    _imgBoxBackgroundTutorialStep02: null,
    /** @type {ccui.Layout} */
    _layoutBubbleTutorialStep02: null,
    /** @type {ccui.ImageView} */
    _imgBubbleBackgroundTutorialStep02: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtBubbleTutorialStep02: null,
    /** @type {ccui.ImageView} */
    _imgArrow01: null,
    /** @type {cc.Node} */
    _widgetTutorialStep03: null,
    /** @type {ccui.ImageView} */
    _imgBoxTutorialStep03: null,
    /** @type {ccui.ImageView} */
    _imgMilestoneTokenTutorialStep03: null,
    /** @type {ccui.Layout} */
    _layoutBubbleTutorialStep03: null,
    /** @type {ccui.ImageView} */
    _imgBubbleBackgroundTutorialStep03: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtBubbleTutorialStep03: null,
    /** @type {cc.Node} */
    _widgetTutorialStep04: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundTutorialStep04: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtTutorialStep04: null,
    /** @type {ccui.ImageView} */
    _imgCoinPieTutorialStep04: null,
    /** @type {ccui.ImageView} */
    _imgArrowTutorialStep04: null,
    /** @type {cc.Node} */
    _widgetTokenTutorialStep04: null,
    /** @type {ccui.ImageView} */
    _imgToken01TutorialStep04: null,
    /** @type {ccui.ImageView} */
    _imgToken02TutorialStep04: null,
    /** @type {ccui.ImageView} */
    _imgToken03TutorialStep04: null,
    /** @type {ck.Text} */
    _txtTapToClose: null,
    /** @type {HappySharkAlertDialog} */
    _popupNotEnoughToken: null,


    /**
     * _ccs.HappySharkLayer constructor
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
        let _layoutBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBackground);
        _layoutBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentWidth(1);
        _layoutBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentHeight(1);
        this._layoutBackground.setTouchEnabled(false);
        this._layoutBackground.setUnifySizeEnabled(false);
        this._layoutBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBackground, 1, 1);

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._layoutBackground.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5017, 0.5);
        if (!PlatformUtils.hasNotch()) {
            let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
            _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
            _imgBackgroundLayoutComponent.setPositionPercentX(0.5017);
            _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
            _imgBackgroundLayoutComponent.setPositionPercentY(0.5);
            _imgBackgroundLayoutComponent.setPercentWidthEnabled(true);
            _imgBackgroundLayoutComponent.setPercentWidth(1);
            _imgBackgroundLayoutComponent.setPercentHeightEnabled(true);
            _imgBackgroundLayoutComponent.setPercentHeight(1);
        }
        this._imgBackground.loadTexture("sprites/backgrounds/HappyShark.png", 0);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBackground, 1, 1);
        this._imgBackground.setTouchEnabled(false);
        UIUtils.initFullScreenBackground(this._imgBackground);

        ///// # _layoutUI
        this._layoutUI = new ccui.Layout();
        this._layoutUI.setName("_layoutUI");
        this._layoutRoot.addChild(this._layoutUI);
        this._layoutUI.setCascadeOpacityEnabled(true);
        this._layoutUI.setCascadeColorEnabled(true);
        let _layoutUILayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutUI);
        _layoutUILayoutComponent.setPercentWidthEnabled(true);
        _layoutUILayoutComponent.setPercentWidth(1);
        _layoutUILayoutComponent.setPercentHeightEnabled(true);
        _layoutUILayoutComponent.setPercentHeight(1);
        this._layoutUI.setTouchEnabled(false);
        this._layoutUI.setUnifySizeEnabled(false);
        this._layoutUI.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutUI, 1, 1);

        ///// # _layoutHelp
        this._layoutHelp = new ccui.Layout();
        this._layoutHelp.setName("_layoutHelp");
        this._layoutUI.addChild(this._layoutHelp);
        this._layoutHelp.setCascadeOpacityEnabled(true);
        this._layoutHelp.setCascadeColorEnabled(true);
        this._layoutHelp.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutHelp, 0.08, 0.836);
        let _layoutHelpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHelp);
        _layoutHelpLayoutComponent.setPositionPercentXEnabled(true);
        _layoutHelpLayoutComponent.setPositionPercentX(0.08);
        _layoutHelpLayoutComponent.setPositionPercentYEnabled(true);
        _layoutHelpLayoutComponent.setPositionPercentY(0.836);
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
        ck.UIUtils.setPositionPercent(this._imgHelpIcon, 0.5, 0.5);
        let _imgHelpIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHelpIcon);
        _imgHelpIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgHelpIconLayoutComponent.setPositionPercentX(0.5);
        _imgHelpIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgHelpIconLayoutComponent.setPositionPercentY(0.5);
        this._imgHelpIcon.loadTexture("icons/flat/Question.png", 1);
        this._imgHelpIcon.setUnifySizeEnabled(false);
        this._imgHelpIcon.ignoreContentAdaptWithSize(false);
        this._imgHelpIcon.setContentSize(cc.size(22, 34));
        this._imgHelpIcon.setTouchEnabled(false);

        ///// # _layoutExit
        this._layoutExit = new ccui.Layout();
        this._layoutExit.setName("_layoutExit");
        this._layoutUI.addChild(this._layoutExit);
        this._layoutExit.setCascadeOpacityEnabled(true);
        this._layoutExit.setCascadeColorEnabled(true);
        this._layoutExit.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutExit, 0.0642, 0.0351);
        let _layoutExitLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutExit);
        _layoutExitLayoutComponent.setPositionPercentXEnabled(true);
        _layoutExitLayoutComponent.setPositionPercentX(0.0642);
        _layoutExitLayoutComponent.setPositionPercentYEnabled(true);
        _layoutExitLayoutComponent.setPositionPercentY(0.0351);
        this._layoutExit.setTouchEnabled(true);
        this._layoutExit.setUnifySizeEnabled(false);
        this._layoutExit.ignoreContentAdaptWithSize(false);
        this._layoutExit.setContentSize(cc.size(75, 75));

        ///// # _imgExitBgr
        this._imgExitBgr = new ccui.ImageView();
        this._imgExitBgr.setName("_imgExitBgr");
        this._layoutExit.addChild(this._imgExitBgr);
        this._imgExitBgr.setCascadeOpacityEnabled(true);
        this._imgExitBgr.setCascadeColorEnabled(true);
        this._imgExitBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgExitBgr, 0.5, 0.5);
        this._imgExitBgr.setScale(0.8, 0.8);
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

        ///// # _imgExitIconDark
        this._imgExitIconDark = new ccui.ImageView();
        this._imgExitIconDark.setName("_imgExitIconDark");
        this._layoutExit.addChild(this._imgExitIconDark);
        this._imgExitIconDark.setCascadeOpacityEnabled(true);
        this._imgExitIconDark.setCascadeColorEnabled(true);
        this._imgExitIconDark.setAnchorPoint(cc.p(0.58, 0.55));
        ck.UIUtils.setPositionPercent(this._imgExitIconDark, 0.5, 0.5);
        this._imgExitIconDark.setVisible(false);
        let _imgExitIconDarkLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExitIconDark);
        _imgExitIconDarkLayoutComponent.setPositionPercentXEnabled(true);
        _imgExitIconDarkLayoutComponent.setPositionPercentX(0.5);
        _imgExitIconDarkLayoutComponent.setPositionPercentYEnabled(true);
        _imgExitIconDarkLayoutComponent.setPositionPercentY(0.5);
        this._imgExitIconDark.loadTexture("icons/flat/ExitGreen.png", 1);
        this._imgExitIconDark.setUnifySizeEnabled(false);
        this._imgExitIconDark.ignoreContentAdaptWithSize(false);
        this._imgExitIconDark.setContentSize(cc.size(43, 37));
        this._imgExitIconDark.setTouchEnabled(false);

        ///// # _layoutUser
        this._layoutUser = new ccui.Layout();
        this._layoutUser.setName("_layoutUser");
        this._layoutRoot.addChild(this._layoutUser);
        this._layoutUser.setCascadeOpacityEnabled(true);
        this._layoutUser.setCascadeColorEnabled(true);
        this._layoutUser.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutUser, 0.5, 1);
        let _layoutUserLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutUser);
        _layoutUserLayoutComponent.setPositionPercentXEnabled(true);
        _layoutUserLayoutComponent.setPositionPercentX(0.5);
        _layoutUserLayoutComponent.setPositionPercentYEnabled(true);
        _layoutUserLayoutComponent.setPositionPercentY(1);
        _layoutUserLayoutComponent.setPercentWidthEnabled(true);
        _layoutUserLayoutComponent.setPercentWidth(1);
        this._layoutUser.setTouchEnabled(true);
        this._layoutUser.setUnifySizeEnabled(false);
        this._layoutUser.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutUser, 1);
        this._layoutUser.setContentSize(cc.size(this._layoutUser.width, 55.1425));

        ///// # _imgUserBackground
        this._imgUserBackground = new ccui.ImageView();
        this._imgUserBackground.setName("_imgUserBackground");
        this._layoutUser.addChild(this._imgUserBackground);
        this._imgUserBackground.setCascadeOpacityEnabled(true);
        this._imgUserBackground.setCascadeColorEnabled(true);
        this._imgUserBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgUserBackground, 0.5, 0.5);
        this._imgUserBackground.setOpacity(89);
        this._imgUserBackground.setColor(cc.color(0, 0, 0, 255));
        let _imgUserBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgUserBackground);
        _imgUserBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgUserBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgUserBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgUserBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgUserBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgUserBackgroundLayoutComponent.setPercentWidth(1);
        _imgUserBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgUserBackgroundLayoutComponent.setPercentHeight(1);
        this._imgUserBackground.loadTexture("basics/other/Top.png", 1);
        this._imgUserBackground.setUnifySizeEnabled(false);
        this._imgUserBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgUserBackground, 1, 1);
        this._imgUserBackground.setTouchEnabled(false);

        ///// # _layoutGem
        this._layoutGem = new ccui.Layout();
        this._layoutGem.setName("_layoutGem");
        this._layoutUser.addChild(this._layoutGem);
        this._layoutGem.setCascadeOpacityEnabled(true);
        this._layoutGem.setCascadeColorEnabled(true);
        this._layoutGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutGem, 0.82, 0.5);
        let _layoutGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGem);
        _layoutGemLayoutComponent.setPositionPercentXEnabled(true);
        _layoutGemLayoutComponent.setPositionPercentX(0.82);
        _layoutGemLayoutComponent.setPositionPercentYEnabled(true);
        _layoutGemLayoutComponent.setPositionPercentY(0.5);
        this._layoutGem.setTouchEnabled(true);
        this._layoutGem.setUnifySizeEnabled(false);
        this._layoutGem.ignoreContentAdaptWithSize(false);
        this._layoutGem.setContentSize(cc.size(160, 28));
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
        this._txtGem.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGem, 0.8864, 0.5);
        this._txtGem.setTextColor(cc.color(243, 192, 255, 255));
        let _txtGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGem);
        _txtGemLayoutComponent.setPositionPercentXEnabled(true);
        _txtGemLayoutComponent.setPositionPercentX(0.8864);
        _txtGemLayoutComponent.setPositionPercentYEnabled(true);
        _txtGemLayoutComponent.setPositionPercentY(0.5);
        this._txtGem.setTouchEnabled(false);
        this._txtGem.ignoreContentAdaptWithSize(true);
        this._txtGem.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGem.setDefaultFontSize(20);
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

        ///// # _layoutCoin
        this._layoutCoin = new ccui.Layout();
        this._layoutCoin.setName("_layoutCoin");
        this._layoutUser.addChild(this._layoutCoin);
        this._layoutCoin.setCascadeOpacityEnabled(true);
        this._layoutCoin.setCascadeColorEnabled(true);
        this._layoutCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCoin, 0.5, 0.5);
        let _layoutCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCoin);
        _layoutCoinLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentX(0.5);
        _layoutCoinLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentY(0.5);
        this._layoutCoin.setTouchEnabled(true);
        this._layoutCoin.setUnifySizeEnabled(false);
        this._layoutCoin.ignoreContentAdaptWithSize(false);
        this._layoutCoin.setContentSize(cc.size(160, 28));
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
        this._imgCoinIcon.setContentSize(cc.size(45, 45));
        this._imgCoinIcon.setTouchEnabled(false);

        ///// # _txtCoin
        this._txtCoin = new ck.Text();
        this._txtCoin.setName("_txtCoin");
        this._layoutCoin.addChild(this._txtCoin);
        this._txtCoin.setCascadeOpacityEnabled(true);
        this._txtCoin.setCascadeColorEnabled(true);
        this._txtCoin.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCoin, 0.899, 0.5);
        this._txtCoin.setTextColor(cc.color(255, 255, 141, 255));
        let _txtCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCoin);
        _txtCoinLayoutComponent.setPositionPercentXEnabled(true);
        _txtCoinLayoutComponent.setPositionPercentX(0.899);
        _txtCoinLayoutComponent.setPositionPercentYEnabled(true);
        _txtCoinLayoutComponent.setPositionPercentY(0.5);
        this._txtCoin.setTouchEnabled(false);
        this._txtCoin.ignoreContentAdaptWithSize(true);
        this._txtCoin.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCoin.setDefaultFontSize(20);
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

        ///// # _layoutInventory
        this._layoutInventory = new ccui.Layout();
        this._layoutInventory.setName("_layoutInventory");
        this._layoutUser.addChild(this._layoutInventory);
        this._layoutInventory.setCascadeOpacityEnabled(true);
        this._layoutInventory.setCascadeColorEnabled(true);
        this._layoutInventory.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutInventory, 0.18, 0.5);
        let _layoutInventoryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInventory);
        _layoutInventoryLayoutComponent.setPositionPercentXEnabled(true);
        _layoutInventoryLayoutComponent.setPositionPercentX(0.18);
        _layoutInventoryLayoutComponent.setPositionPercentYEnabled(true);
        _layoutInventoryLayoutComponent.setPositionPercentY(0.5);
        this._layoutInventory.setTouchEnabled(true);
        this._layoutInventory.setUnifySizeEnabled(false);
        this._layoutInventory.ignoreContentAdaptWithSize(false);
        this._layoutInventory.setContentSize(cc.size(160, 28));
        this._layoutInventory.setBackGroundColorType(1);
        this._layoutInventory.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutInventory.setBackGroundColorOpacity(127);

        ///// # _imgInventoryIcon
        this._imgInventoryIcon = new ccui.ImageView();
        this._imgInventoryIcon.setName("_imgInventoryIcon");
        this._layoutInventory.addChild(this._imgInventoryIcon);
        this._imgInventoryIcon.setCascadeOpacityEnabled(true);
        this._imgInventoryIcon.setCascadeColorEnabled(true);
        this._imgInventoryIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgInventoryIcon, 0, 0.5);
        let _imgInventoryIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgInventoryIcon);
        _imgInventoryIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgInventoryIconLayoutComponent.setPositionPercentX(0);
        _imgInventoryIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgInventoryIconLayoutComponent.setPositionPercentY(0.5);
        this._imgInventoryIcon.loadTexture("basics/bags/Bag_00_00.png", 1);
        this._imgInventoryIcon.setUnifySizeEnabled(false);
        this._imgInventoryIcon.ignoreContentAdaptWithSize(false);
        this._imgInventoryIcon.setContentSize(cc.size(41, 38));
        this._imgInventoryIcon.setTouchEnabled(false);

        ///// # _txtInventory
        this._txtInventory = new ck.Text();
        this._txtInventory.setName("_txtInventory");
        this._layoutInventory.addChild(this._txtInventory);
        this._txtInventory.setCascadeOpacityEnabled(true);
        this._txtInventory.setCascadeColorEnabled(true);
        this._txtInventory.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtInventory, 0.8927, 0.5);
        this._txtInventory.setTextColor(cc.color(255, 168, 127, 255));
        let _txtInventoryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtInventory);
        _txtInventoryLayoutComponent.setPositionPercentXEnabled(true);
        _txtInventoryLayoutComponent.setPositionPercentX(0.8927);
        _txtInventoryLayoutComponent.setPositionPercentYEnabled(true);
        _txtInventoryLayoutComponent.setPositionPercentY(0.5);
        this._txtInventory.setTouchEnabled(false);
        this._txtInventory.ignoreContentAdaptWithSize(true);
        this._txtInventory.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtInventory.setDefaultFontSize(20);
        this._txtInventory.setTextHorizontalAlignment(1);
        this._txtInventory.setTextVerticalAlignment(1);

        ///// # _btnAddInventory
        this._btnAddInventory = new ccui.Button();
        this._btnAddInventory.setName("_btnAddInventory");
        this._layoutInventory.addChild(this._btnAddInventory);
        this._btnAddInventory.setCascadeOpacityEnabled(true);
        this._btnAddInventory.setCascadeColorEnabled(true);
        this._btnAddInventory.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAddInventory, 1, 0.5);
        let _btnAddInventoryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddInventory);
        _btnAddInventoryLayoutComponent.setPositionPercentXEnabled(true);
        _btnAddInventoryLayoutComponent.setPositionPercentX(1);
        _btnAddInventoryLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddInventoryLayoutComponent.setPositionPercentY(0.5);
        this._btnAddInventory.loadTextureDisabled("buttons/rectangles/Add.png", 1);
        this._btnAddInventory.loadTexturePressed("buttons/rectangles/Add.png", 1);
        this._btnAddInventory.loadTextureNormal("buttons/rectangles/Add.png", 1);
        this._btnAddInventory.setUnifySizeEnabled(false);
        this._btnAddInventory.ignoreContentAdaptWithSize(false);
        this._btnAddInventory.setScale9Enabled(true);
        this._btnAddInventory.setCapInsets(cc.rect(15, 11, 1, 10));
        this._btnAddInventory.setContentSize(cc.size(31, 32));
        this._btnAddInventory.setTouchEnabled(true);

        ///// # _progressMilestoneWidget
        this._progressMilestoneWidget = new HappySharkProgressMilestoneWidget();
        this._progressMilestoneWidget.setName("_progressMilestoneWidget");
        this._layoutRoot.addChild(this._progressMilestoneWidget);
        this._progressMilestoneWidget.setCascadeOpacityEnabled(true);
        this._progressMilestoneWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._progressMilestoneWidget, 0.5, 0.915);
        let _progressMilestoneWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._progressMilestoneWidget);
        _progressMilestoneWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _progressMilestoneWidgetLayoutComponent.setPositionPercentX(0.5);
        _progressMilestoneWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _progressMilestoneWidgetLayoutComponent.setPositionPercentY(0.915);

        ///// # _gridviewBox
        this._gridviewBox = new ck.GridViewVertical();
        this._gridviewBox.setName("_gridviewBox");
        this._layoutRoot.addChild(this._gridviewBox);
        this._gridviewBox.setCascadeOpacityEnabled(true);
        this._gridviewBox.setCascadeColorEnabled(true);
        this._gridviewBox.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._gridviewBox, 0.015, 0.47);
        let _gridviewBoxLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridviewBox);
        _gridviewBoxLayoutComponent.setPositionPercentXEnabled(true);
        _gridviewBoxLayoutComponent.setPositionPercentX(0.015);
        _gridviewBoxLayoutComponent.setPositionPercentYEnabled(true);
        _gridviewBoxLayoutComponent.setPositionPercentY(0.47);
        _gridviewBoxLayoutComponent.setPercentWidthEnabled(true);
        _gridviewBoxLayoutComponent.setPercentWidth(0.58);
        _gridviewBoxLayoutComponent.setPercentHeightEnabled(true);
        _gridviewBoxLayoutComponent.setPercentHeight(0.66);

        ///// # _listChest
        this._listChest = new HappySharkListChest();
        this._listChest.setName("_listChest");
        this._layoutRoot.addChild(this._listChest);
        this._listChest.setCascadeOpacityEnabled(true);
        this._listChest.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._listChest, 0.8235, 0.8168);
        let _listChestLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._listChest);
        _listChestLayoutComponent.setPositionPercentXEnabled(true);
        _listChestLayoutComponent.setPositionPercentX(0.8235);
        _listChestLayoutComponent.setPositionPercentYEnabled(true);
        _listChestLayoutComponent.setPositionPercentY(0.8168);

        ///// # _layoutItemSpawn
        this._layoutItemSpawn = new ccui.Layout();
        this._layoutItemSpawn.setName("_layoutItemSpawn");
        this._layoutRoot.addChild(this._layoutItemSpawn);
        this._layoutItemSpawn.setCascadeOpacityEnabled(true);
        this._layoutItemSpawn.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutItemSpawn, 0.0016, 0);
        let _layoutItemSpawnLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutItemSpawn);
        _layoutItemSpawnLayoutComponent.setPercentWidthEnabled(true);
        _layoutItemSpawnLayoutComponent.setPercentWidth(1);
        _layoutItemSpawnLayoutComponent.setPercentHeightEnabled(true);
        _layoutItemSpawnLayoutComponent.setPercentHeight(1);
        this._layoutItemSpawn.setTouchEnabled(false);
        this._layoutItemSpawn.setUnifySizeEnabled(false);
        this._layoutItemSpawn.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutItemSpawn, 1, 1);

        ///// # _npcWidget
        this._npcWidget = new HappySharkNPCWidget();
        this._npcWidget.setName("_npcWidget");
        this._layoutRoot.addChild(this._npcWidget);
        this._npcWidget.setCascadeOpacityEnabled(true);
        this._npcWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._npcWidget, 0.2344, 0.1761);
        let _npcWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._npcWidget);

        ///// # _layoutBottom
        this._layoutBottom = new ccui.Layout();
        this._layoutBottom.setName("_layoutBottom");
        this._layoutRoot.addChild(this._layoutBottom);
        this._layoutBottom.setCascadeOpacityEnabled(true);
        this._layoutBottom.setCascadeColorEnabled(true);
        let _layoutBottomLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBottom);
        _layoutBottomLayoutComponent.setPercentWidthEnabled(true);
        _layoutBottomLayoutComponent.setPercentWidth(1);
        _layoutBottomLayoutComponent.setPercentHeightEnabled(true);
        _layoutBottomLayoutComponent.setPercentHeight(0.1358);
        this._layoutBottom.setTouchEnabled(false);
        this._layoutBottom.setUnifySizeEnabled(false);
        this._layoutBottom.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBottom, 1, 0.1358);

        ///// # _layoutToken
        this._layoutToken = new ccui.Layout();
        this._layoutToken.setName("_layoutToken");
        this._layoutBottom.addChild(this._layoutToken);
        this._layoutToken.setCascadeOpacityEnabled(true);
        this._layoutToken.setCascadeColorEnabled(true);
        this._layoutToken.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutToken, 0.94, 0.2593);
        let _layoutTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutToken);
        _layoutTokenLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTokenLayoutComponent.setPositionPercentX(0.94);
        this._layoutToken.setTouchEnabled(false);
        this._layoutToken.setUnifySizeEnabled(false);
        this._layoutToken.ignoreContentAdaptWithSize(false);
        this._layoutToken.setContentSize(cc.size(200, 50));

        ///// # _imgTokenBackground
        this._imgTokenBackground = new ccui.ImageView();
        this._imgTokenBackground.setName("_imgTokenBackground");
        this._layoutToken.addChild(this._imgTokenBackground);
        this._imgTokenBackground.setCascadeOpacityEnabled(true);
        this._imgTokenBackground.setCascadeColorEnabled(true);
        this._imgTokenBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTokenBackground, 0.5, 0.5);
        this._imgTokenBackground.setOpacity(102);
        this._imgTokenBackground.setColor(cc.color(0, 0, 0, 255));
        let _imgTokenBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTokenBackground);
        _imgTokenBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgTokenBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgTokenBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgTokenBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgTokenBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgTokenBackgroundLayoutComponent.setPercentWidth(1);
        _imgTokenBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgTokenBackgroundLayoutComponent.setPercentHeight(1);
        this._imgTokenBackground.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgTokenBackground.setUnifySizeEnabled(false);
        this._imgTokenBackground.ignoreContentAdaptWithSize(false);
        this._imgTokenBackground.setScale9Enabled(true);
        this._imgTokenBackground.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgTokenBackground, 1, 1);
        this._imgTokenBackground.setTouchEnabled(false);

        ///// # _btnAddToken
        this._btnAddToken = new ccui.Button();
        this._btnAddToken.setName("_btnAddToken");
        this._layoutToken.addChild(this._btnAddToken);
        this._btnAddToken.setCascadeOpacityEnabled(true);
        this._btnAddToken.setCascadeColorEnabled(true);
        this._btnAddToken.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAddToken, 0.895, 0.46);
        let _btnAddTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddToken);
        _btnAddTokenLayoutComponent.setPositionPercentXEnabled(true);
        _btnAddTokenLayoutComponent.setPositionPercentX(0.895);
        _btnAddTokenLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddTokenLayoutComponent.setPositionPercentY(0.46);
        this._btnAddToken.loadTextureDisabled("buttons/rectangles/Add.png", 1);
        this._btnAddToken.loadTexturePressed("buttons/rectangles/Add.png", 1);
        this._btnAddToken.loadTextureNormal("buttons/rectangles/Add.png", 1);
        this._btnAddToken.setUnifySizeEnabled(false);
        this._btnAddToken.ignoreContentAdaptWithSize(false);
        this._btnAddToken.setContentSize(cc.size(55, 55));
        this._btnAddToken.setTouchEnabled(true);

        ///// # _imgToken
        this._imgToken = new ccui.ImageView();
        this._imgToken.setName("_imgToken");
        this._layoutToken.addChild(this._imgToken);
        this._imgToken.setCascadeOpacityEnabled(true);
        this._imgToken.setCascadeColorEnabled(true);
        this._imgToken.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgToken, 0.0367, 0.5);
        let _imgTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken);
        _imgTokenLayoutComponent.setPositionPercentXEnabled(true);
        _imgTokenLayoutComponent.setPositionPercentX(0.0367);
        _imgTokenLayoutComponent.setPositionPercentYEnabled(true);
        _imgTokenLayoutComponent.setPositionPercentY(0.5);
        this._imgToken.loadTexture("happy-shark/ui/Token.png", 1);
        this._imgToken.setUnifySizeEnabled(false);
        this._imgToken.ignoreContentAdaptWithSize(false);
        this._imgToken.setContentSize(cc.size(70, 70));
        this._imgToken.setTouchEnabled(false);

        ///// # _txtToken
        this._txtToken = new ck.Text();
        this._txtToken.setName("_txtToken");
        this._layoutToken.addChild(this._txtToken);
        this._txtToken.setCascadeOpacityEnabled(true);
        this._txtToken.setCascadeColorEnabled(true);
        this._txtToken.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtToken, 0.733, 0.5);
        let _txtTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtToken);
        _txtTokenLayoutComponent.setPositionPercentXEnabled(true);
        _txtTokenLayoutComponent.setPositionPercentX(0.733);
        _txtTokenLayoutComponent.setPositionPercentYEnabled(true);
        _txtTokenLayoutComponent.setPositionPercentY(0.5);
        this._txtToken.setTouchEnabled(false);
        this._txtToken.setUnifySizeEnabled(false);
        this._txtToken.ignoreContentAdaptWithSize(false);
        this._txtToken.setContentSize(cc.size(105.2119, 40.6986));
        this._txtToken.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtToken.setDefaultFontSize(40);
        this._txtToken.setTextHorizontalAlignment(1);
        this._txtToken.setTextVerticalAlignment(1);
        this._txtToken.autoFitSingleLine();

        ///// # _layoutTurn
        this._layoutTurn = new ccui.Layout();
        this._layoutTurn.setName("_layoutTurn");
        this._layoutBottom.addChild(this._layoutTurn);
        this._layoutTurn.setCascadeOpacityEnabled(true);
        this._layoutTurn.setCascadeColorEnabled(true);
        this._layoutTurn.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTurn, 0.3332, 0.6755);
        let _layoutTurnLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTurn);
        _layoutTurnLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTurnLayoutComponent.setPositionPercentX(0.3332);
        _layoutTurnLayoutComponent.setPositionPercentYEnabled(true);
        _layoutTurnLayoutComponent.setPositionPercentY(0.6755);
        this._layoutTurn.setTouchEnabled(false);
        this._layoutTurn.setUnifySizeEnabled(false);
        this._layoutTurn.ignoreContentAdaptWithSize(false);
        this._layoutTurn.setContentSize(cc.size(300.2284, 60));

        ///// # _btnTurn00
        this._btnTurn00 = new AsyncButton();
        this._btnTurn00.setName("_btnTurn00");
        this._layoutTurn.addChild(this._btnTurn00);
        this._btnTurn00.setCascadeOpacityEnabled(true);
        this._btnTurn00.setCascadeColorEnabled(true);
        this._btnTurn00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnTurn00, 0.28, 0.5);
        let _btnTurn00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnTurn00);
        _btnTurn00LayoutComponent.setPositionPercentXEnabled(true);
        _btnTurn00LayoutComponent.setPositionPercentX(0.28);
        _btnTurn00LayoutComponent.setPositionPercentYEnabled(true);
        _btnTurn00LayoutComponent.setPositionPercentY(0.5);
        this._btnTurn00.setUnifySizeEnabled(false);
        this._btnTurn00.ignoreContentAdaptWithSize(false);
        this._btnTurn00.setContentSize(cc.size(120, 60));
        this._btnTurn00.setTouchEnabled(true);

        ///// # _imgButtonTurn00
        this._imgButtonTurn00 = new ccui.ImageView();
        this._imgButtonTurn00.setName("_imgButtonTurn00");
        this._btnTurn00.addChild(this._imgButtonTurn00);
        this._imgButtonTurn00.setCascadeOpacityEnabled(true);
        this._imgButtonTurn00.setCascadeColorEnabled(true);
        this._imgButtonTurn00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonTurn00, 0.5, 0.5);
        let _imgButtonTurn00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonTurn00);
        _imgButtonTurn00LayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonTurn00LayoutComponent.setPositionPercentX(0.5);
        _imgButtonTurn00LayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonTurn00LayoutComponent.setPositionPercentY(0.5);
        _imgButtonTurn00LayoutComponent.setPercentWidthEnabled(true);
        _imgButtonTurn00LayoutComponent.setPercentWidth(1);
        _imgButtonTurn00LayoutComponent.setPercentHeightEnabled(true);
        _imgButtonTurn00LayoutComponent.setPercentHeight(1);
        this._imgButtonTurn00.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgButtonTurn00.setUnifySizeEnabled(false);
        this._imgButtonTurn00.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonTurn00, 1, 1);
        this._imgButtonTurn00.setTouchEnabled(false);

        ///// # _txtButtonTurn00
        this._txtButtonTurn00 = new ck.Text();
        this._txtButtonTurn00.setName("_txtButtonTurn00");
        this._btnTurn00.addChild(this._txtButtonTurn00);
        this._txtButtonTurn00.setCascadeOpacityEnabled(true);
        this._txtButtonTurn00.setCascadeColorEnabled(true);
        this._txtButtonTurn00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonTurn00, 0.5, 0.53);
        let _txtButtonTurn00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonTurn00);
        _txtButtonTurn00LayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonTurn00LayoutComponent.setPositionPercentX(0.5);
        _txtButtonTurn00LayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonTurn00LayoutComponent.setPositionPercentY(0.53);
        _txtButtonTurn00LayoutComponent.setPercentWidthEnabled(true);
        _txtButtonTurn00LayoutComponent.setPercentWidth(0.9);
        this._txtButtonTurn00.setTouchEnabled(false);
        this._txtButtonTurn00.setUnifySizeEnabled(false);
        this._txtButtonTurn00.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtButtonTurn00, 0.9);
        this._txtButtonTurn00.setContentSize(cc.size(this._txtButtonTurn00.width, 47));
        this._txtButtonTurn00.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtButtonTurn00.setDefaultFontSize(40);
        this._txtButtonTurn00.setTextHorizontalAlignment(1);
        this._txtButtonTurn00.setTextVerticalAlignment(1);
        this._txtButtonTurn00.enableOutline(cc.color(140, 80, 3, 255), 2);
        this._txtButtonTurn00.autoFitSingleLine();

        ///// # _imgLoadingButtonTurn00
        this._imgLoadingButtonTurn00 = new ccui.ImageView();
        this._imgLoadingButtonTurn00.setName("_imgLoadingButtonTurn00");
        this._btnTurn00.addChild(this._imgLoadingButtonTurn00);
        this._imgLoadingButtonTurn00.setCascadeOpacityEnabled(true);
        this._imgLoadingButtonTurn00.setCascadeColorEnabled(true);
        this._imgLoadingButtonTurn00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLoadingButtonTurn00, 0.5, 0.54);
        this._imgLoadingButtonTurn00.setVisible(false);
        let _imgLoadingButtonTurn00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoadingButtonTurn00);
        _imgLoadingButtonTurn00LayoutComponent.setPositionPercentXEnabled(true);
        _imgLoadingButtonTurn00LayoutComponent.setPositionPercentX(0.5);
        _imgLoadingButtonTurn00LayoutComponent.setPositionPercentYEnabled(true);
        _imgLoadingButtonTurn00LayoutComponent.setPositionPercentY(0.54);
        this._imgLoadingButtonTurn00.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgLoadingButtonTurn00.setUnifySizeEnabled(false);
        this._imgLoadingButtonTurn00.ignoreContentAdaptWithSize(false);
        this._imgLoadingButtonTurn00.setContentSize(cc.size(40, 40));
        this._imgLoadingButtonTurn00.setTouchEnabled(false);

        ///// # _btnTurn01
        this._btnTurn01 = new AsyncButton();
        this._btnTurn01.setName("_btnTurn01");
        this._layoutTurn.addChild(this._btnTurn01);
        this._btnTurn01.setCascadeOpacityEnabled(true);
        this._btnTurn01.setCascadeColorEnabled(true);
        this._btnTurn01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnTurn01, 0.72, 0.5);
        let _btnTurn01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnTurn01);
        _btnTurn01LayoutComponent.setPositionPercentXEnabled(true);
        _btnTurn01LayoutComponent.setPositionPercentX(0.72);
        _btnTurn01LayoutComponent.setPositionPercentYEnabled(true);
        _btnTurn01LayoutComponent.setPositionPercentY(0.5);
        this._btnTurn01.setUnifySizeEnabled(false);
        this._btnTurn01.ignoreContentAdaptWithSize(false);
        this._btnTurn01.setContentSize(cc.size(120, 60));
        this._btnTurn01.setTouchEnabled(true);

        ///// # _imgButtonTurn01
        this._imgButtonTurn01 = new ccui.ImageView();
        this._imgButtonTurn01.setName("_imgButtonTurn01");
        this._btnTurn01.addChild(this._imgButtonTurn01);
        this._imgButtonTurn01.setCascadeOpacityEnabled(true);
        this._imgButtonTurn01.setCascadeColorEnabled(true);
        this._imgButtonTurn01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonTurn01, 0.5, 0.5);
        let _imgButtonTurn01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonTurn01);
        _imgButtonTurn01LayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonTurn01LayoutComponent.setPositionPercentX(0.5);
        _imgButtonTurn01LayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonTurn01LayoutComponent.setPositionPercentY(0.5);
        _imgButtonTurn01LayoutComponent.setPercentWidthEnabled(true);
        _imgButtonTurn01LayoutComponent.setPercentWidth(1);
        _imgButtonTurn01LayoutComponent.setPercentHeightEnabled(true);
        _imgButtonTurn01LayoutComponent.setPercentHeight(1);
        this._imgButtonTurn01.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgButtonTurn01.setUnifySizeEnabled(false);
        this._imgButtonTurn01.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonTurn01, 1, 1);
        this._imgButtonTurn01.setTouchEnabled(false);

        ///// # _txtButtonTurn01
        this._txtButtonTurn01 = new ck.Text();
        this._txtButtonTurn01.setName("_txtButtonTurn01");
        this._btnTurn01.addChild(this._txtButtonTurn01);
        this._txtButtonTurn01.setCascadeOpacityEnabled(true);
        this._txtButtonTurn01.setCascadeColorEnabled(true);
        this._txtButtonTurn01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonTurn01, 0.5, 0.53);
        let _txtButtonTurn01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonTurn01);
        _txtButtonTurn01LayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonTurn01LayoutComponent.setPositionPercentX(0.5);
        _txtButtonTurn01LayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonTurn01LayoutComponent.setPositionPercentY(0.53);
        _txtButtonTurn01LayoutComponent.setPercentWidthEnabled(true);
        _txtButtonTurn01LayoutComponent.setPercentWidth(0.9);
        this._txtButtonTurn01.setTouchEnabled(false);
        this._txtButtonTurn01.setUnifySizeEnabled(false);
        this._txtButtonTurn01.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtButtonTurn01, 0.9);
        this._txtButtonTurn01.setContentSize(cc.size(this._txtButtonTurn01.width, 47));
        this._txtButtonTurn01.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtButtonTurn01.setDefaultFontSize(40);
        this._txtButtonTurn01.setTextHorizontalAlignment(1);
        this._txtButtonTurn01.setTextVerticalAlignment(1);
        this._txtButtonTurn01.enableOutline(cc.color(140, 80, 3, 255), 2);

        ///// # _imgLoadingButtonTurn01
        this._imgLoadingButtonTurn01 = new ccui.ImageView();
        this._imgLoadingButtonTurn01.setName("_imgLoadingButtonTurn01");
        this._btnTurn01.addChild(this._imgLoadingButtonTurn01);
        this._imgLoadingButtonTurn01.setCascadeOpacityEnabled(true);
        this._imgLoadingButtonTurn01.setCascadeColorEnabled(true);
        this._imgLoadingButtonTurn01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLoadingButtonTurn01, 0.5, 0.54);
        this._imgLoadingButtonTurn01.setVisible(false);
        let _imgLoadingButtonTurn01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoadingButtonTurn01);
        _imgLoadingButtonTurn01LayoutComponent.setPositionPercentXEnabled(true);
        _imgLoadingButtonTurn01LayoutComponent.setPositionPercentX(0.5);
        _imgLoadingButtonTurn01LayoutComponent.setPositionPercentYEnabled(true);
        _imgLoadingButtonTurn01LayoutComponent.setPositionPercentY(0.54);
        this._imgLoadingButtonTurn01.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgLoadingButtonTurn01.setUnifySizeEnabled(false);
        this._imgLoadingButtonTurn01.ignoreContentAdaptWithSize(false);
        this._imgLoadingButtonTurn01.setContentSize(cc.size(40, 40));
        this._imgLoadingButtonTurn01.setTouchEnabled(false);

        ///// # _shopToken
        this._shopToken = new ShopEventIcon();
        this._shopToken.setName("_shopToken");
        this._layoutBottom.addChild(this._shopToken);
        this._shopToken.setCascadeOpacityEnabled(true);
        this._shopToken.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._shopToken, 0.9055, 0.2716);
        let _shopTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._shopToken);
        _shopTokenLayoutComponent.setPositionPercentXEnabled(true);
        _shopTokenLayoutComponent.setPositionPercentX(0.9055);
        _shopTokenLayoutComponent.setPositionPercentYEnabled(true);
        _shopTokenLayoutComponent.setPositionPercentY(0.2716);

        ///// # _layoutTutorial
        this._layoutTutorial = new ccui.Layout();
        this._layoutTutorial.setName("_layoutTutorial");
        this._layoutRoot.addChild(this._layoutTutorial);
        this._layoutTutorial.setCascadeOpacityEnabled(true);
        this._layoutTutorial.setCascadeColorEnabled(true);
        this._layoutTutorial.setOpacity(0);
        let _layoutTutorialLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTutorial);
        _layoutTutorialLayoutComponent.setPercentWidthEnabled(true);
        _layoutTutorialLayoutComponent.setPercentWidth(1);
        _layoutTutorialLayoutComponent.setPercentHeightEnabled(true);
        _layoutTutorialLayoutComponent.setPercentHeight(1);
        this._layoutTutorial.setTouchEnabled(true);
        this._layoutTutorial.setUnifySizeEnabled(false);
        this._layoutTutorial.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutTutorial, 1, 1);

        ///// # _layoutTutorialBackground
        this._layoutTutorialBackground = new ccui.Layout();
        this._layoutTutorialBackground.setName("_layoutTutorialBackground");
        this._layoutTutorial.addChild(this._layoutTutorialBackground);
        this._layoutTutorialBackground.setCascadeOpacityEnabled(true);
        this._layoutTutorialBackground.setCascadeColorEnabled(true);
        if (!PlatformUtils.hasNotch()) {
            let _layoutTutorialBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTutorialBackground);
            _layoutTutorialBackgroundLayoutComponent.setPercentWidthEnabled(true);
            _layoutTutorialBackgroundLayoutComponent.setPercentWidth(1);
            _layoutTutorialBackgroundLayoutComponent.setPercentHeightEnabled(true);
            _layoutTutorialBackgroundLayoutComponent.setPercentHeight(1);
        }
        this._layoutTutorialBackground.setTouchEnabled(true);
        this._layoutTutorialBackground.setUnifySizeEnabled(false);
        this._layoutTutorialBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutTutorialBackground, 1, 1);
        this._layoutTutorialBackground.setBackGroundColorType(1);
        this._layoutTutorialBackground.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutTutorialBackground.setBackGroundColorOpacity(204);
        UIUtils.initFullScreenBackground(this._layoutTutorialBackground);

        ///// # _txtTutorial
        this._txtTutorial = new ck.Text();
        this._txtTutorial.setName("_txtTutorial");
        this._layoutTutorial.addChild(this._txtTutorial);
        this._txtTutorial.setCascadeOpacityEnabled(true);
        this._txtTutorial.setCascadeColorEnabled(true);
        this._txtTutorial.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTutorial, 0.5, 0.94);
        this._txtTutorial.setTextColor(cc.color(222, 247, 255, 255));
        let _txtTutorialLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTutorial);
        _txtTutorialLayoutComponent.setPositionPercentXEnabled(true);
        _txtTutorialLayoutComponent.setPositionPercentX(0.5);
        _txtTutorialLayoutComponent.setPositionPercentYEnabled(true);
        _txtTutorialLayoutComponent.setPositionPercentY(0.94);
        this._txtTutorial.setTouchEnabled(false);
        this._txtTutorial.ignoreContentAdaptWithSize(true);
        this._txtTutorial.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTutorial.setDefaultFontSize(55);
        this._txtTutorial.setString(gm.localize.getText("TXT_TUTORIAL"));
        this._txtTutorial.setTextHorizontalAlignment(1);
        this._txtTutorial.setTextVerticalAlignment(1);
        this._txtTutorial.enableOutline(cc.color(41, 107, 130, 255), 2);
        this._txtTutorial.enableShadow(cc.color(63, 147, 186, 255), cc.size(0, -2), 0);

        ///// # _widgetTutorialStep01
        this._widgetTutorialStep01 = new cc.Node();
        this._widgetTutorialStep01.setName("_widgetTutorialStep01");
        this._layoutTutorial.addChild(this._widgetTutorialStep01);
        this._widgetTutorialStep01.setCascadeOpacityEnabled(true);
        this._widgetTutorialStep01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._widgetTutorialStep01, 0.26, 0.42);
        this._widgetTutorialStep01.setScale(0.0001, 0.0001);
        let _widgetTutorialStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._widgetTutorialStep01);
        _widgetTutorialStep01LayoutComponent.setPositionPercentXEnabled(true);
        _widgetTutorialStep01LayoutComponent.setPositionPercentX(0.26);
        _widgetTutorialStep01LayoutComponent.setPositionPercentYEnabled(true);
        _widgetTutorialStep01LayoutComponent.setPositionPercentY(0.42);

        ///// # _layoutPlayTutorialStep01
        this._layoutPlayTutorialStep01 = new ccui.Layout();
        this._layoutPlayTutorialStep01.setName("_layoutPlayTutorialStep01");
        this._widgetTutorialStep01.addChild(this._layoutPlayTutorialStep01);
        this._layoutPlayTutorialStep01.setCascadeOpacityEnabled(true);
        this._layoutPlayTutorialStep01.setCascadeColorEnabled(true);
        this._layoutPlayTutorialStep01.setAnchorPoint(cc.p(0.5, 0.5));
        this._layoutPlayTutorialStep01.setPosition(0, 110);
        this._layoutPlayTutorialStep01.setScale(0.5, 0.5);
        let _layoutPlayTutorialStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPlayTutorialStep01);
        this._layoutPlayTutorialStep01.setTouchEnabled(true);
        this._layoutPlayTutorialStep01.setUnifySizeEnabled(false);
        this._layoutPlayTutorialStep01.ignoreContentAdaptWithSize(false);
        this._layoutPlayTutorialStep01.setContentSize(cc.size(340, 355));
        this._layoutPlayTutorialStep01.setBackGroundColorType(1);
        this._layoutPlayTutorialStep01.setBackGroundColor(cc.color.WHITE);

        ///// # _imgProgressTutorialStep01
        this._imgProgressTutorialStep01 = new ccui.ImageView();
        this._imgProgressTutorialStep01.setName("_imgProgressTutorialStep01");
        this._widgetTutorialStep01.addChild(this._imgProgressTutorialStep01);
        this._imgProgressTutorialStep01.setCascadeOpacityEnabled(true);
        this._imgProgressTutorialStep01.setCascadeColorEnabled(true);
        this._imgProgressTutorialStep01.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgProgressTutorialStep01.setScale(0.6, 0.6);
        let _imgProgressTutorialStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgProgressTutorialStep01);
        _imgProgressTutorialStep01LayoutComponent.setPositionPercentXEnabled(true);
        _imgProgressTutorialStep01LayoutComponent.setPositionPercentX(0);
        this._imgProgressTutorialStep01.loadTexture("basics/bars/Bar_10.png", 1);
        this._imgProgressTutorialStep01.setUnifySizeEnabled(false);
        this._imgProgressTutorialStep01.ignoreContentAdaptWithSize(false);
        this._imgProgressTutorialStep01.setScale9Enabled(true);
        this._imgProgressTutorialStep01.setCapInsets(cc.rect(83, 2, 87, 4));
        this._imgProgressTutorialStep01.setContentSize(cc.size(315, 8));
        this._imgProgressTutorialStep01.setTouchEnabled(false);

        ///// # _imgToken00TutorialStep01
        this._imgToken00TutorialStep01 = new ccui.ImageView();
        this._imgToken00TutorialStep01.setName("_imgToken00TutorialStep01");
        this._imgProgressTutorialStep01.addChild(this._imgToken00TutorialStep01);
        this._imgToken00TutorialStep01.setCascadeOpacityEnabled(true);
        this._imgToken00TutorialStep01.setCascadeColorEnabled(true);
        this._imgToken00TutorialStep01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgToken00TutorialStep01, 0.4, 0);
        let _imgToken00TutorialStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken00TutorialStep01);
        _imgToken00TutorialStep01LayoutComponent.setPositionPercentXEnabled(true);
        _imgToken00TutorialStep01LayoutComponent.setPositionPercentX(0.4);
        this._imgToken00TutorialStep01.loadTexture("happy-shark/ui/Token.png", 1);
        this._imgToken00TutorialStep01.setUnifySizeEnabled(false);
        this._imgToken00TutorialStep01.ignoreContentAdaptWithSize(false);
        this._imgToken00TutorialStep01.setContentSize(cc.size(54, 54));
        this._imgToken00TutorialStep01.setTouchEnabled(false);

        ///// # _imgToken01TutorialStep01
        this._imgToken01TutorialStep01 = new ccui.ImageView();
        this._imgToken01TutorialStep01.setName("_imgToken01TutorialStep01");
        this._imgProgressTutorialStep01.addChild(this._imgToken01TutorialStep01);
        this._imgToken01TutorialStep01.setCascadeOpacityEnabled(true);
        this._imgToken01TutorialStep01.setCascadeColorEnabled(true);
        this._imgToken01TutorialStep01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgToken01TutorialStep01, 1, 0);
        let _imgToken01TutorialStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken01TutorialStep01);
        _imgToken01TutorialStep01LayoutComponent.setPositionPercentXEnabled(true);
        _imgToken01TutorialStep01LayoutComponent.setPositionPercentX(1);
        this._imgToken01TutorialStep01.loadTexture("happy-shark/ui/Token.png", 1);
        this._imgToken01TutorialStep01.setUnifySizeEnabled(false);
        this._imgToken01TutorialStep01.ignoreContentAdaptWithSize(false);
        this._imgToken01TutorialStep01.setContentSize(cc.size(54, 54));
        this._imgToken01TutorialStep01.setTouchEnabled(false);

        ///// # _imgBagTutorialStep01
        this._imgBagTutorialStep01 = new ccui.ImageView();
        this._imgBagTutorialStep01.setName("_imgBagTutorialStep01");
        this._imgProgressTutorialStep01.addChild(this._imgBagTutorialStep01);
        this._imgBagTutorialStep01.setCascadeOpacityEnabled(true);
        this._imgBagTutorialStep01.setCascadeColorEnabled(true);
        this._imgBagTutorialStep01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBagTutorialStep01, -0.0508, 0.5);
        let _imgBagTutorialStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBagTutorialStep01);
        _imgBagTutorialStep01LayoutComponent.setPositionPercentYEnabled(true);
        _imgBagTutorialStep01LayoutComponent.setPositionPercentY(0.5);
        this._imgBagTutorialStep01.loadTexture("basics/bags/Bag_00_00.png", 1);
        this._imgBagTutorialStep01.setUnifySizeEnabled(false);
        this._imgBagTutorialStep01.ignoreContentAdaptWithSize(false);
        this._imgBagTutorialStep01.setContentSize(cc.size(41, 38));
        this._imgBagTutorialStep01.setTouchEnabled(false);

        ///// # _layoutBubbleTutorialStep01
        this._layoutBubbleTutorialStep01 = new ccui.Layout();
        this._layoutBubbleTutorialStep01.setName("_layoutBubbleTutorialStep01");
        this._widgetTutorialStep01.addChild(this._layoutBubbleTutorialStep01);
        this._layoutBubbleTutorialStep01.setCascadeOpacityEnabled(true);
        this._layoutBubbleTutorialStep01.setCascadeColorEnabled(true);
        this._layoutBubbleTutorialStep01.setAnchorPoint(cc.p(0.5, 1));
        this._layoutBubbleTutorialStep01.setPosition(-2.2083, -43.538);
        let _layoutBubbleTutorialStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBubbleTutorialStep01);
        this._layoutBubbleTutorialStep01.setTouchEnabled(false);
        this._layoutBubbleTutorialStep01.setUnifySizeEnabled(false);
        this._layoutBubbleTutorialStep01.ignoreContentAdaptWithSize(false);
        this._layoutBubbleTutorialStep01.setContentSize(cc.size(250, 100));

        ///// # _imgBubbleBackgroundTutorialStep01
        this._imgBubbleBackgroundTutorialStep01 = new ccui.ImageView();
        this._imgBubbleBackgroundTutorialStep01.setName("_imgBubbleBackgroundTutorialStep01");
        this._layoutBubbleTutorialStep01.addChild(this._imgBubbleBackgroundTutorialStep01);
        this._imgBubbleBackgroundTutorialStep01.setCascadeOpacityEnabled(true);
        this._imgBubbleBackgroundTutorialStep01.setCascadeColorEnabled(true);
        this._imgBubbleBackgroundTutorialStep01.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBubbleBackgroundTutorialStep01, 0.5, 0);
        this._imgBubbleBackgroundTutorialStep01.setFlippedY(true);
        let _imgBubbleBackgroundTutorialStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBubbleBackgroundTutorialStep01);
        _imgBubbleBackgroundTutorialStep01LayoutComponent.setPositionPercentXEnabled(true);
        _imgBubbleBackgroundTutorialStep01LayoutComponent.setPositionPercentX(0.5);
        _imgBubbleBackgroundTutorialStep01LayoutComponent.setPositionPercentYEnabled(true);
        _imgBubbleBackgroundTutorialStep01LayoutComponent.setPositionPercentY(0);
        _imgBubbleBackgroundTutorialStep01LayoutComponent.setPercentWidthEnabled(true);
        _imgBubbleBackgroundTutorialStep01LayoutComponent.setPercentWidth(1);
        this._imgBubbleBackgroundTutorialStep01.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgBubbleBackgroundTutorialStep01.setUnifySizeEnabled(false);
        this._imgBubbleBackgroundTutorialStep01.ignoreContentAdaptWithSize(false);
        this._imgBubbleBackgroundTutorialStep01.setScale9Enabled(true);
        this._imgBubbleBackgroundTutorialStep01.setCapInsets(cc.rect(57, 33, 60, 30));
        ck.UIUtils.setWidthPercent(this._imgBubbleBackgroundTutorialStep01, 1);
        this._imgBubbleBackgroundTutorialStep01.setContentSize(cc.size(this._imgBubbleBackgroundTutorialStep01.width, 126));
        this._imgBubbleBackgroundTutorialStep01.setTouchEnabled(false);
        this._imgBubbleBackgroundTutorialStep01.setFlippedY(true);

        ///// # _txtBubbleTutorialStep01
        this._txtBubbleTutorialStep01 = new ck.CustomRichTextExtend(cc.size(225, 90));
        this._txtBubbleTutorialStep01.setName("_txtBubbleTutorialStep01");
        this._layoutBubbleTutorialStep01.addChild(this._txtBubbleTutorialStep01);
        this._txtBubbleTutorialStep01.setCascadeOpacityEnabled(true);
        this._txtBubbleTutorialStep01.setCascadeColorEnabled(true);
        this._txtBubbleTutorialStep01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBubbleTutorialStep01, 0.5, 0.5);
        let _txtBubbleTutorialStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBubbleTutorialStep01);
        _txtBubbleTutorialStep01LayoutComponent.setPositionPercentXEnabled(true);
        _txtBubbleTutorialStep01LayoutComponent.setPositionPercentX(0.5);
        _txtBubbleTutorialStep01LayoutComponent.setPositionPercentYEnabled(true);
        _txtBubbleTutorialStep01LayoutComponent.setPositionPercentY(0.5);
        _txtBubbleTutorialStep01LayoutComponent.setPercentWidthEnabled(true);
        _txtBubbleTutorialStep01LayoutComponent.setPercentWidth(0.9);
        _txtBubbleTutorialStep01LayoutComponent.setPercentHeightEnabled(true);
        _txtBubbleTutorialStep01LayoutComponent.setPercentHeight(0.9);
        this._txtBubbleTutorialStep01.setTouchEnabled(false);
        this._txtBubbleTutorialStep01.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtBubbleTutorialStep01.setDefaultSize(30);
        this._txtBubbleTutorialStep01.setDefaultAlignHorizontal(2);
        this._txtBubbleTutorialStep01.setDefaultAlignVertical(5);
        this._txtBubbleTutorialStep01.setString(gm.localize.getText("TXT_HAPPY_SHARK_TUTORIAL_01"));

        ///// # _imgArrow00
        this._imgArrow00 = new ccui.ImageView();
        this._imgArrow00.setName("_imgArrow00");
        this._layoutTutorial.addChild(this._imgArrow00);
        this._imgArrow00.setCascadeOpacityEnabled(true);
        this._imgArrow00.setCascadeColorEnabled(true);
        this._imgArrow00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgArrow00, 0.35, 0.62);
        this._imgArrow00.setScale(0.0001, 0.0001);
        this._imgArrow00.setRotationX(110);
        this._imgArrow00.setRotationY(109.9999);
        let _imgArrow00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgArrow00);
        _imgArrow00LayoutComponent.setPositionPercentXEnabled(true);
        _imgArrow00LayoutComponent.setPositionPercentX(0.35);
        _imgArrow00LayoutComponent.setPositionPercentYEnabled(true);
        _imgArrow00LayoutComponent.setPositionPercentY(0.62);
        this._imgArrow00.loadTexture("basics/arrows/Arrow_00.png", 1);
        this._imgArrow00.setUnifySizeEnabled(false);
        this._imgArrow00.ignoreContentAdaptWithSize(false);
        this._imgArrow00.setContentSize(cc.size(40, 77));
        this._imgArrow00.setTouchEnabled(false);

        ///// # _widgetTutorialStep02
        this._widgetTutorialStep02 = new cc.Node();
        this._widgetTutorialStep02.setName("_widgetTutorialStep02");
        this._layoutTutorial.addChild(this._widgetTutorialStep02);
        this._widgetTutorialStep02.setCascadeOpacityEnabled(true);
        this._widgetTutorialStep02.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._widgetTutorialStep02, 0.5, 0.72);
        this._widgetTutorialStep02.setScale(0.0001, 0.0001);
        let _widgetTutorialStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._widgetTutorialStep02);
        _widgetTutorialStep02LayoutComponent.setPositionPercentXEnabled(true);
        _widgetTutorialStep02LayoutComponent.setPositionPercentX(0.5);
        _widgetTutorialStep02LayoutComponent.setPositionPercentYEnabled(true);
        _widgetTutorialStep02LayoutComponent.setPositionPercentY(0.72);

        ///// # _imgNPCTutorialStep02
        this._imgNPCTutorialStep02 = new ccui.ImageView();
        this._imgNPCTutorialStep02.setName("_imgNPCTutorialStep02");
        this._widgetTutorialStep02.addChild(this._imgNPCTutorialStep02);
        this._imgNPCTutorialStep02.setCascadeOpacityEnabled(true);
        this._imgNPCTutorialStep02.setCascadeColorEnabled(true);
        this._imgNPCTutorialStep02.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgNPCTutorialStep02.setPosition(57.0776, -15.3163);
        this._imgNPCTutorialStep02.setFlippedX(true);
        let _imgNPCTutorialStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNPCTutorialStep02);
        this._imgNPCTutorialStep02.loadTexture("happy-shark/npc/idle/Idle_00000.png", 1);
        this._imgNPCTutorialStep02.setUnifySizeEnabled(false);
        this._imgNPCTutorialStep02.ignoreContentAdaptWithSize(false);
        this._imgNPCTutorialStep02.setContentSize(cc.size(200, 150));
        this._imgNPCTutorialStep02.setTouchEnabled(false);
        this._imgNPCTutorialStep02.setFlippedX(true);

        ///// # _widgetBoxTutorialStep02
        this._widgetBoxTutorialStep02 = new cc.Node();
        this._widgetBoxTutorialStep02.setName("_widgetBoxTutorialStep02");
        this._widgetTutorialStep02.addChild(this._widgetBoxTutorialStep02);
        this._widgetBoxTutorialStep02.setCascadeOpacityEnabled(true);
        this._widgetBoxTutorialStep02.setCascadeColorEnabled(true);
        this._widgetBoxTutorialStep02.setPosition(-69.0551, 6.866);
        let _widgetBoxTutorialStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._widgetBoxTutorialStep02);

        ///// # _imgBoxTutorialStep02
        this._imgBoxTutorialStep02 = new ccui.ImageView();
        this._imgBoxTutorialStep02.setName("_imgBoxTutorialStep02");
        this._widgetBoxTutorialStep02.addChild(this._imgBoxTutorialStep02);
        this._imgBoxTutorialStep02.setCascadeOpacityEnabled(true);
        this._imgBoxTutorialStep02.setCascadeColorEnabled(true);
        this._imgBoxTutorialStep02.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgBoxTutorialStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBoxTutorialStep02);
        this._imgBoxTutorialStep02.loadTexture("happy-shark/ui/Box.png", 1);
        this._imgBoxTutorialStep02.setUnifySizeEnabled(false);
        this._imgBoxTutorialStep02.ignoreContentAdaptWithSize(false);
        this._imgBoxTutorialStep02.setContentSize(cc.size(64, 64));
        this._imgBoxTutorialStep02.setTouchEnabled(false);

        ///// # _imgBoxBackgroundTutorialStep02
        this._imgBoxBackgroundTutorialStep02 = new ccui.ImageView();
        this._imgBoxBackgroundTutorialStep02.setName("_imgBoxBackgroundTutorialStep02");
        this._widgetBoxTutorialStep02.addChild(this._imgBoxBackgroundTutorialStep02);
        this._imgBoxBackgroundTutorialStep02.setCascadeOpacityEnabled(true);
        this._imgBoxBackgroundTutorialStep02.setCascadeColorEnabled(true);
        this._imgBoxBackgroundTutorialStep02.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgBoxBackgroundTutorialStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBoxBackgroundTutorialStep02);
        this._imgBoxBackgroundTutorialStep02.loadTexture("happy-shark/ui/BubbleNormal.png", 1);
        this._imgBoxBackgroundTutorialStep02.setUnifySizeEnabled(false);
        this._imgBoxBackgroundTutorialStep02.ignoreContentAdaptWithSize(false);
        this._imgBoxBackgroundTutorialStep02.setContentSize(cc.size(96, 95));
        this._imgBoxBackgroundTutorialStep02.setTouchEnabled(false);

        ///// # _layoutBubbleTutorialStep02
        this._layoutBubbleTutorialStep02 = new ccui.Layout();
        this._layoutBubbleTutorialStep02.setName("_layoutBubbleTutorialStep02");
        this._widgetTutorialStep02.addChild(this._layoutBubbleTutorialStep02);
        this._layoutBubbleTutorialStep02.setCascadeOpacityEnabled(true);
        this._layoutBubbleTutorialStep02.setCascadeColorEnabled(true);
        this._layoutBubbleTutorialStep02.setAnchorPoint(cc.p(0.5, 1));
        this._layoutBubbleTutorialStep02.setPosition(45.767, 184.1817);
        let _layoutBubbleTutorialStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBubbleTutorialStep02);
        this._layoutBubbleTutorialStep02.setTouchEnabled(false);
        this._layoutBubbleTutorialStep02.setUnifySizeEnabled(false);
        this._layoutBubbleTutorialStep02.ignoreContentAdaptWithSize(false);
        this._layoutBubbleTutorialStep02.setContentSize(cc.size(250, 100));

        ///// # _imgBubbleBackgroundTutorialStep02
        this._imgBubbleBackgroundTutorialStep02 = new ccui.ImageView();
        this._imgBubbleBackgroundTutorialStep02.setName("_imgBubbleBackgroundTutorialStep02");
        this._layoutBubbleTutorialStep02.addChild(this._imgBubbleBackgroundTutorialStep02);
        this._imgBubbleBackgroundTutorialStep02.setCascadeOpacityEnabled(true);
        this._imgBubbleBackgroundTutorialStep02.setCascadeColorEnabled(true);
        this._imgBubbleBackgroundTutorialStep02.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBubbleBackgroundTutorialStep02, 0.5, 1);
        let _imgBubbleBackgroundTutorialStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBubbleBackgroundTutorialStep02);
        _imgBubbleBackgroundTutorialStep02LayoutComponent.setPositionPercentXEnabled(true);
        _imgBubbleBackgroundTutorialStep02LayoutComponent.setPositionPercentX(0.5);
        _imgBubbleBackgroundTutorialStep02LayoutComponent.setPositionPercentYEnabled(true);
        _imgBubbleBackgroundTutorialStep02LayoutComponent.setPositionPercentY(1);
        _imgBubbleBackgroundTutorialStep02LayoutComponent.setPercentWidthEnabled(true);
        _imgBubbleBackgroundTutorialStep02LayoutComponent.setPercentWidth(1);
        this._imgBubbleBackgroundTutorialStep02.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgBubbleBackgroundTutorialStep02.setUnifySizeEnabled(false);
        this._imgBubbleBackgroundTutorialStep02.ignoreContentAdaptWithSize(false);
        this._imgBubbleBackgroundTutorialStep02.setScale9Enabled(true);
        this._imgBubbleBackgroundTutorialStep02.setCapInsets(cc.rect(57, 33, 60, 30));
        ck.UIUtils.setWidthPercent(this._imgBubbleBackgroundTutorialStep02, 1);
        this._imgBubbleBackgroundTutorialStep02.setContentSize(cc.size(this._imgBubbleBackgroundTutorialStep02.width, 126));
        this._imgBubbleBackgroundTutorialStep02.setTouchEnabled(false);

        ///// # _txtBubbleTutorialStep02
        this._txtBubbleTutorialStep02 = new ck.CustomRichTextExtend(cc.size(225, 90));
        this._txtBubbleTutorialStep02.setName("_txtBubbleTutorialStep02");
        this._layoutBubbleTutorialStep02.addChild(this._txtBubbleTutorialStep02);
        this._txtBubbleTutorialStep02.setCascadeOpacityEnabled(true);
        this._txtBubbleTutorialStep02.setCascadeColorEnabled(true);
        this._txtBubbleTutorialStep02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBubbleTutorialStep02, 0.5, 0.5);
        let _txtBubbleTutorialStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBubbleTutorialStep02);
        _txtBubbleTutorialStep02LayoutComponent.setPositionPercentXEnabled(true);
        _txtBubbleTutorialStep02LayoutComponent.setPositionPercentX(0.5);
        _txtBubbleTutorialStep02LayoutComponent.setPositionPercentYEnabled(true);
        _txtBubbleTutorialStep02LayoutComponent.setPositionPercentY(0.5);
        _txtBubbleTutorialStep02LayoutComponent.setPercentWidthEnabled(true);
        _txtBubbleTutorialStep02LayoutComponent.setPercentWidth(0.9);
        _txtBubbleTutorialStep02LayoutComponent.setPercentHeightEnabled(true);
        _txtBubbleTutorialStep02LayoutComponent.setPercentHeight(0.9);
        this._txtBubbleTutorialStep02.setTouchEnabled(false);
        this._txtBubbleTutorialStep02.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtBubbleTutorialStep02.setDefaultSize(30);
        this._txtBubbleTutorialStep02.setDefaultAlignHorizontal(2);
        this._txtBubbleTutorialStep02.setDefaultAlignVertical(5);
        this._txtBubbleTutorialStep02.setString(gm.localize.getText("TXT_HAPPY_SHARK_TUTORIAL_02"));

        ///// # _imgArrow01
        this._imgArrow01 = new ccui.ImageView();
        this._imgArrow01.setName("_imgArrow01");
        this._layoutTutorial.addChild(this._imgArrow01);
        this._imgArrow01.setCascadeOpacityEnabled(true);
        this._imgArrow01.setCascadeColorEnabled(true);
        this._imgArrow01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgArrow01, 0.65, 0.61);
        this._imgArrow01.setScale(0.0001, 0.0001);
        this._imgArrow01.setRotationX(-110);
        this._imgArrow01.setRotationY(-110.0017);
        let _imgArrow01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgArrow01);
        _imgArrow01LayoutComponent.setPositionPercentXEnabled(true);
        _imgArrow01LayoutComponent.setPositionPercentX(0.65);
        _imgArrow01LayoutComponent.setPositionPercentYEnabled(true);
        _imgArrow01LayoutComponent.setPositionPercentY(0.61);
        this._imgArrow01.loadTexture("basics/arrows/Arrow_00.png", 1);
        this._imgArrow01.setUnifySizeEnabled(false);
        this._imgArrow01.ignoreContentAdaptWithSize(false);
        this._imgArrow01.setContentSize(cc.size(40, 77));
        this._imgArrow01.setTouchEnabled(false);

        ///// # _widgetTutorialStep03
        this._widgetTutorialStep03 = new cc.Node();
        this._widgetTutorialStep03.setName("_widgetTutorialStep03");
        this._layoutTutorial.addChild(this._widgetTutorialStep03);
        this._widgetTutorialStep03.setCascadeOpacityEnabled(true);
        this._widgetTutorialStep03.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._widgetTutorialStep03, 0.78, 0.5);
        this._widgetTutorialStep03.setScale(0.0001, 0.0001);
        let _widgetTutorialStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._widgetTutorialStep03);
        _widgetTutorialStep03LayoutComponent.setPositionPercentXEnabled(true);
        _widgetTutorialStep03LayoutComponent.setPositionPercentX(0.78);
        _widgetTutorialStep03LayoutComponent.setPositionPercentYEnabled(true);
        _widgetTutorialStep03LayoutComponent.setPositionPercentY(0.5);

        ///// # _imgBoxTutorialStep03
        this._imgBoxTutorialStep03 = new ccui.ImageView();
        this._imgBoxTutorialStep03.setName("_imgBoxTutorialStep03");
        this._widgetTutorialStep03.addChild(this._imgBoxTutorialStep03);
        this._imgBoxTutorialStep03.setCascadeOpacityEnabled(true);
        this._imgBoxTutorialStep03.setCascadeColorEnabled(true);
        this._imgBoxTutorialStep03.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgBoxTutorialStep03.setPosition(-12.4485, 14.9349);
        let _imgBoxTutorialStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBoxTutorialStep03);
        this._imgBoxTutorialStep03.loadTexture("happy-shark/ui/Box.png", 1);
        this._imgBoxTutorialStep03.setUnifySizeEnabled(false);
        this._imgBoxTutorialStep03.ignoreContentAdaptWithSize(false);
        this._imgBoxTutorialStep03.setContentSize(cc.size(128, 128));
        this._imgBoxTutorialStep03.setTouchEnabled(false);

        ///// # _imgMilestoneTokenTutorialStep03
        this._imgMilestoneTokenTutorialStep03 = new ccui.ImageView();
        this._imgMilestoneTokenTutorialStep03.setName("_imgMilestoneTokenTutorialStep03");
        this._widgetTutorialStep03.addChild(this._imgMilestoneTokenTutorialStep03);
        this._imgMilestoneTokenTutorialStep03.setCascadeOpacityEnabled(true);
        this._imgMilestoneTokenTutorialStep03.setCascadeColorEnabled(true);
        this._imgMilestoneTokenTutorialStep03.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgMilestoneTokenTutorialStep03.setPosition(15.9416, -27.5984);
        let _imgMilestoneTokenTutorialStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgMilestoneTokenTutorialStep03);
        this._imgMilestoneTokenTutorialStep03.loadTexture("happy-shark/ui/MilestoneToken.png", 1);
        this._imgMilestoneTokenTutorialStep03.setUnifySizeEnabled(false);
        this._imgMilestoneTokenTutorialStep03.ignoreContentAdaptWithSize(false);
        this._imgMilestoneTokenTutorialStep03.setContentSize(cc.size(128, 128));
        this._imgMilestoneTokenTutorialStep03.setTouchEnabled(false);

        ///// # _layoutBubbleTutorialStep03
        this._layoutBubbleTutorialStep03 = new ccui.Layout();
        this._layoutBubbleTutorialStep03.setName("_layoutBubbleTutorialStep03");
        this._widgetTutorialStep03.addChild(this._layoutBubbleTutorialStep03);
        this._layoutBubbleTutorialStep03.setCascadeOpacityEnabled(true);
        this._layoutBubbleTutorialStep03.setCascadeColorEnabled(true);
        this._layoutBubbleTutorialStep03.setAnchorPoint(cc.p(0.5, 1));
        this._layoutBubbleTutorialStep03.setPosition(-43.8246, -97.5744);
        let _layoutBubbleTutorialStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBubbleTutorialStep03);
        this._layoutBubbleTutorialStep03.setTouchEnabled(false);
        this._layoutBubbleTutorialStep03.setUnifySizeEnabled(false);
        this._layoutBubbleTutorialStep03.ignoreContentAdaptWithSize(false);
        this._layoutBubbleTutorialStep03.setContentSize(cc.size(250, 100));

        ///// # _imgBubbleBackgroundTutorialStep03
        this._imgBubbleBackgroundTutorialStep03 = new ccui.ImageView();
        this._imgBubbleBackgroundTutorialStep03.setName("_imgBubbleBackgroundTutorialStep03");
        this._layoutBubbleTutorialStep03.addChild(this._imgBubbleBackgroundTutorialStep03);
        this._imgBubbleBackgroundTutorialStep03.setCascadeOpacityEnabled(true);
        this._imgBubbleBackgroundTutorialStep03.setCascadeColorEnabled(true);
        this._imgBubbleBackgroundTutorialStep03.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBubbleBackgroundTutorialStep03, 0.5, 0);
        this._imgBubbleBackgroundTutorialStep03.setFlippedX(true);
        this._imgBubbleBackgroundTutorialStep03.setFlippedY(true);
        let _imgBubbleBackgroundTutorialStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBubbleBackgroundTutorialStep03);
        _imgBubbleBackgroundTutorialStep03LayoutComponent.setPositionPercentXEnabled(true);
        _imgBubbleBackgroundTutorialStep03LayoutComponent.setPositionPercentX(0.5);
        _imgBubbleBackgroundTutorialStep03LayoutComponent.setPositionPercentYEnabled(true);
        _imgBubbleBackgroundTutorialStep03LayoutComponent.setPositionPercentY(0);
        _imgBubbleBackgroundTutorialStep03LayoutComponent.setPercentWidthEnabled(true);
        _imgBubbleBackgroundTutorialStep03LayoutComponent.setPercentWidth(1);
        this._imgBubbleBackgroundTutorialStep03.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgBubbleBackgroundTutorialStep03.setUnifySizeEnabled(false);
        this._imgBubbleBackgroundTutorialStep03.ignoreContentAdaptWithSize(false);
        this._imgBubbleBackgroundTutorialStep03.setScale9Enabled(true);
        this._imgBubbleBackgroundTutorialStep03.setCapInsets(cc.rect(57, 33, 60, 30));
        ck.UIUtils.setWidthPercent(this._imgBubbleBackgroundTutorialStep03, 1);
        this._imgBubbleBackgroundTutorialStep03.setContentSize(cc.size(this._imgBubbleBackgroundTutorialStep03.width, 126));
        this._imgBubbleBackgroundTutorialStep03.setTouchEnabled(false);
        this._imgBubbleBackgroundTutorialStep03.setFlippedX(true);
        this._imgBubbleBackgroundTutorialStep03.setFlippedY(true);

        ///// # _txtBubbleTutorialStep03
        this._txtBubbleTutorialStep03 = new ck.CustomRichTextExtend(cc.size(225, 90));
        this._txtBubbleTutorialStep03.setName("_txtBubbleTutorialStep03");
        this._layoutBubbleTutorialStep03.addChild(this._txtBubbleTutorialStep03);
        this._txtBubbleTutorialStep03.setCascadeOpacityEnabled(true);
        this._txtBubbleTutorialStep03.setCascadeColorEnabled(true);
        this._txtBubbleTutorialStep03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBubbleTutorialStep03, 0.5, 0.5);
        let _txtBubbleTutorialStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBubbleTutorialStep03);
        _txtBubbleTutorialStep03LayoutComponent.setPositionPercentXEnabled(true);
        _txtBubbleTutorialStep03LayoutComponent.setPositionPercentX(0.5);
        _txtBubbleTutorialStep03LayoutComponent.setPositionPercentYEnabled(true);
        _txtBubbleTutorialStep03LayoutComponent.setPositionPercentY(0.5);
        _txtBubbleTutorialStep03LayoutComponent.setPercentWidthEnabled(true);
        _txtBubbleTutorialStep03LayoutComponent.setPercentWidth(0.9);
        _txtBubbleTutorialStep03LayoutComponent.setPercentHeightEnabled(true);
        _txtBubbleTutorialStep03LayoutComponent.setPercentHeight(0.9);
        this._txtBubbleTutorialStep03.setTouchEnabled(false);
        this._txtBubbleTutorialStep03.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtBubbleTutorialStep03.setDefaultSize(30);
        this._txtBubbleTutorialStep03.setDefaultAlignHorizontal(2);
        this._txtBubbleTutorialStep03.setDefaultAlignVertical(5);
        this._txtBubbleTutorialStep03.setString(gm.localize.getText("TXT_HAPPY_SHARK_TUTORIAL_03"));

        ///// # _widgetTutorialStep04
        this._widgetTutorialStep04 = new cc.Node();
        this._widgetTutorialStep04.setName("_widgetTutorialStep04");
        this._layoutTutorial.addChild(this._widgetTutorialStep04);
        this._widgetTutorialStep04.setCascadeOpacityEnabled(true);
        this._widgetTutorialStep04.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._widgetTutorialStep04, 0.5, 0.18);
        this._widgetTutorialStep04.setScale(0.0001, 0.0001);
        let _widgetTutorialStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._widgetTutorialStep04);
        _widgetTutorialStep04LayoutComponent.setPositionPercentXEnabled(true);
        _widgetTutorialStep04LayoutComponent.setPositionPercentX(0.5);
        _widgetTutorialStep04LayoutComponent.setPositionPercentYEnabled(true);
        _widgetTutorialStep04LayoutComponent.setPositionPercentY(0.18);

        ///// # _imgBackgroundTutorialStep04
        this._imgBackgroundTutorialStep04 = new ccui.ImageView();
        this._imgBackgroundTutorialStep04.setName("_imgBackgroundTutorialStep04");
        this._widgetTutorialStep04.addChild(this._imgBackgroundTutorialStep04);
        this._imgBackgroundTutorialStep04.setCascadeOpacityEnabled(true);
        this._imgBackgroundTutorialStep04.setCascadeColorEnabled(true);
        this._imgBackgroundTutorialStep04.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgBackgroundTutorialStep04.setOpacity(204);
        this._imgBackgroundTutorialStep04.setColor(cc.color(0, 0, 0, 255));
        let _imgBackgroundTutorialStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundTutorialStep04);
        this._imgBackgroundTutorialStep04.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgBackgroundTutorialStep04.setUnifySizeEnabled(false);
        this._imgBackgroundTutorialStep04.ignoreContentAdaptWithSize(false);
        this._imgBackgroundTutorialStep04.setScale9Enabled(true);
        this._imgBackgroundTutorialStep04.setCapInsets(cc.rect(21, 21, 22, 22));
        this._imgBackgroundTutorialStep04.setContentSize(cc.size(450, 150));
        this._imgBackgroundTutorialStep04.setTouchEnabled(false);

        ///// # _txtTutorialStep04
        this._txtTutorialStep04 = new ck.CustomRichTextExtend(cc.size(420, 60));
        this._txtTutorialStep04.setName("_txtTutorialStep04");
        this._widgetTutorialStep04.addChild(this._txtTutorialStep04);
        this._txtTutorialStep04.setCascadeOpacityEnabled(true);
        this._txtTutorialStep04.setCascadeColorEnabled(true);
        this._txtTutorialStep04.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtTutorialStep04.setPosition(0, 42);
        let _txtTutorialStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTutorialStep04);
        this._txtTutorialStep04.setTouchEnabled(false);
        this._txtTutorialStep04.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtTutorialStep04.setDefaultSize(30);
        this._txtTutorialStep04.setDefaultAlignHorizontal(2);
        this._txtTutorialStep04.setDefaultAlignVertical(5);
        this._txtTutorialStep04.setString(gm.localize.getText("TXT_HAPPY_SHARK_TUTORIAL_04"));

        ///// # _imgCoinPieTutorialStep04
        this._imgCoinPieTutorialStep04 = new ccui.ImageView();
        this._imgCoinPieTutorialStep04.setName("_imgCoinPieTutorialStep04");
        this._widgetTutorialStep04.addChild(this._imgCoinPieTutorialStep04);
        this._imgCoinPieTutorialStep04.setCascadeOpacityEnabled(true);
        this._imgCoinPieTutorialStep04.setCascadeColorEnabled(true);
        this._imgCoinPieTutorialStep04.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCoinPieTutorialStep04.setPosition(-104.4176, -29.4968);
        let _imgCoinPieTutorialStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCoinPieTutorialStep04);
        this._imgCoinPieTutorialStep04.loadTexture("icons/color/coins/CoinPile.png", 1);
        this._imgCoinPieTutorialStep04.setUnifySizeEnabled(false);
        this._imgCoinPieTutorialStep04.ignoreContentAdaptWithSize(false);
        this._imgCoinPieTutorialStep04.setContentSize(cc.size(150, 92));
        this._imgCoinPieTutorialStep04.setTouchEnabled(false);

        ///// # _imgArrowTutorialStep04
        this._imgArrowTutorialStep04 = new ccui.ImageView();
        this._imgArrowTutorialStep04.setName("_imgArrowTutorialStep04");
        this._widgetTutorialStep04.addChild(this._imgArrowTutorialStep04);
        this._imgArrowTutorialStep04.setCascadeOpacityEnabled(true);
        this._imgArrowTutorialStep04.setCascadeColorEnabled(true);
        this._imgArrowTutorialStep04.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgArrowTutorialStep04.setPosition(0, -23.3266);
        this._imgArrowTutorialStep04.setScale(0.0001, 0.0001);
        this._imgArrowTutorialStep04.setRotationX(180);
        this._imgArrowTutorialStep04.setRotationY(179.9999);
        this._imgArrowTutorialStep04.setFlippedY(true);
        let _imgArrowTutorialStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgArrowTutorialStep04);
        _imgArrowTutorialStep04LayoutComponent.setPositionPercentXEnabled(true);
        _imgArrowTutorialStep04LayoutComponent.setPositionPercentX(0);
        this._imgArrowTutorialStep04.loadTexture("basics/arrows/Arrow_00.png", 1);
        this._imgArrowTutorialStep04.setUnifySizeEnabled(false);
        this._imgArrowTutorialStep04.ignoreContentAdaptWithSize(false);
        this._imgArrowTutorialStep04.setContentSize(cc.size(18.2279, 35.0888));
        this._imgArrowTutorialStep04.setTouchEnabled(false);
        this._imgArrowTutorialStep04.setFlippedY(true);

        ///// # _widgetTokenTutorialStep04
        this._widgetTokenTutorialStep04 = new cc.Node();
        this._widgetTokenTutorialStep04.setName("_widgetTokenTutorialStep04");
        this._widgetTutorialStep04.addChild(this._widgetTokenTutorialStep04);
        this._widgetTokenTutorialStep04.setCascadeOpacityEnabled(true);
        this._widgetTokenTutorialStep04.setCascadeColorEnabled(true);
        this._widgetTokenTutorialStep04.setPosition(90.803, -20.1641);
        let _widgetTokenTutorialStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._widgetTokenTutorialStep04);

        ///// # _imgToken01TutorialStep04
        this._imgToken01TutorialStep04 = new ccui.ImageView();
        this._imgToken01TutorialStep04.setName("_imgToken01TutorialStep04");
        this._widgetTokenTutorialStep04.addChild(this._imgToken01TutorialStep04);
        this._imgToken01TutorialStep04.setCascadeOpacityEnabled(true);
        this._imgToken01TutorialStep04.setCascadeColorEnabled(true);
        this._imgToken01TutorialStep04.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgToken01TutorialStep04.setPosition(-28, 4.9999);
        this._imgToken01TutorialStep04.setRotation(-14);
        let _imgToken01TutorialStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken01TutorialStep04);
        this._imgToken01TutorialStep04.loadTexture("happy-shark/ui/Token.png", 1);
        this._imgToken01TutorialStep04.setUnifySizeEnabled(false);
        this._imgToken01TutorialStep04.ignoreContentAdaptWithSize(false);
        this._imgToken01TutorialStep04.setContentSize(cc.size(54, 54));
        this._imgToken01TutorialStep04.setTouchEnabled(false);

        ///// # _imgToken02TutorialStep04
        this._imgToken02TutorialStep04 = new ccui.ImageView();
        this._imgToken02TutorialStep04.setName("_imgToken02TutorialStep04");
        this._widgetTokenTutorialStep04.addChild(this._imgToken02TutorialStep04);
        this._imgToken02TutorialStep04.setCascadeOpacityEnabled(true);
        this._imgToken02TutorialStep04.setCascadeColorEnabled(true);
        this._imgToken02TutorialStep04.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgToken02TutorialStep04.setPosition(26, -5.0001);
        this._imgToken02TutorialStep04.setRotationY(0.0001);
        let _imgToken02TutorialStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken02TutorialStep04);
        this._imgToken02TutorialStep04.loadTexture("happy-shark/ui/Token.png", 1);
        this._imgToken02TutorialStep04.setUnifySizeEnabled(false);
        this._imgToken02TutorialStep04.ignoreContentAdaptWithSize(false);
        this._imgToken02TutorialStep04.setContentSize(cc.size(45, 45));
        this._imgToken02TutorialStep04.setTouchEnabled(false);

        ///// # _imgToken03TutorialStep04
        this._imgToken03TutorialStep04 = new ccui.ImageView();
        this._imgToken03TutorialStep04.setName("_imgToken03TutorialStep04");
        this._widgetTokenTutorialStep04.addChild(this._imgToken03TutorialStep04);
        this._imgToken03TutorialStep04.setCascadeOpacityEnabled(true);
        this._imgToken03TutorialStep04.setCascadeColorEnabled(true);
        this._imgToken03TutorialStep04.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgToken03TutorialStep04.setPosition(-0.0001, -11.0001);
        this._imgToken03TutorialStep04.setRotation(6);
        let _imgToken03TutorialStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken03TutorialStep04);
        this._imgToken03TutorialStep04.loadTexture("happy-shark/ui/Token.png", 1);
        this._imgToken03TutorialStep04.setUnifySizeEnabled(false);
        this._imgToken03TutorialStep04.ignoreContentAdaptWithSize(false);
        this._imgToken03TutorialStep04.setContentSize(cc.size(70, 70));
        this._imgToken03TutorialStep04.setTouchEnabled(false);

        ///// # _txtTapToClose
        this._txtTapToClose = new ck.Text();
        this._txtTapToClose.setName("_txtTapToClose");
        this._layoutTutorial.addChild(this._txtTapToClose);
        this._txtTapToClose.setCascadeOpacityEnabled(true);
        this._txtTapToClose.setCascadeColorEnabled(true);
        this._txtTapToClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTapToClose, 0.5, 0.05);
        this._txtTapToClose.setScale(0.0001, 0.0001);
        let _txtTapToCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTapToClose);
        _txtTapToCloseLayoutComponent.setPositionPercentXEnabled(true);
        _txtTapToCloseLayoutComponent.setPositionPercentX(0.5);
        _txtTapToCloseLayoutComponent.setPositionPercentYEnabled(true);
        _txtTapToCloseLayoutComponent.setPositionPercentY(0.05);
        this._txtTapToClose.setTouchEnabled(false);
        this._txtTapToClose.ignoreContentAdaptWithSize(true);
        this._txtTapToClose.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTapToClose.setDefaultFontSize(40);
        this._txtTapToClose.setString(gm.localize.getText("TXT_TAP_TO_CLOSE"));
        this._txtTapToClose.setTextHorizontalAlignment(0);
        this._txtTapToClose.setTextVerticalAlignment(0);

        ///// # _popupNotEnoughToken
        this._popupNotEnoughToken = new HappySharkAlertDialog();
        this._popupNotEnoughToken.setName("_popupNotEnoughToken");
        this.addChild(this._popupNotEnoughToken);
        this._popupNotEnoughToken.setCascadeOpacityEnabled(true);
        this._popupNotEnoughToken.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._popupNotEnoughToken, 0.5, 0.5);
        this._popupNotEnoughToken.setVisible(false);
        let _popupNotEnoughTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._popupNotEnoughToken);
        _popupNotEnoughTokenLayoutComponent.setPositionPercentXEnabled(true);
        _popupNotEnoughTokenLayoutComponent.setPositionPercentX(0.5);
        _popupNotEnoughTokenLayoutComponent.setPositionPercentYEnabled(true);
        _popupNotEnoughTokenLayoutComponent.setPositionPercentY(0.5);

    },


    playCCSAnimShowTutorial: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimShowTutorial();
    
        let _widgetTutorialStep01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(15 / (60 * speed), 0.0001, 0.0001),
                    cc.scaleTo(15 / (60 * speed), 1, 1).easing(cc.easeBackOut()),
                    cc.scaleTo(60 / (60 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._widgetTutorialStep01.setScale(0.0001, 0.0001);
            }.bind(this))
        );
        if (repeat <= 0) {
            _widgetTutorialStep01Action = _widgetTutorialStep01Action.repeatForever();
        } else _widgetTutorialStep01Action = cc.sequence(
            cc.delayTime(delay),
            _widgetTutorialStep01Action.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._widgetTutorialStep01.runAction(_widgetTutorialStep01Action);
    
        let _imgArrow00Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(25 / (60 * speed), 0.0001, 0.0001),
                    cc.scaleTo(15 / (60 * speed), 1, 1).easing(cc.easeBackOut()),
                    cc.scaleTo(50 / (60 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgArrow00.setScale(0.0001, 0.0001);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgArrow00Action = _imgArrow00Action.repeatForever();
        } else _imgArrow00Action = cc.sequence(
            cc.delayTime(delay),
            _imgArrow00Action.repeat(repeat)
        )
        
        this._imgArrow00.runAction(_imgArrow00Action);
    
        let _widgetTutorialStep02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(30 / (60 * speed), 0.0001, 0.0001),
                    cc.scaleTo(15 / (60 * speed), 1, 1).easing(cc.easeQuadraticActionOut()),
                    cc.scaleTo(45 / (60 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._widgetTutorialStep02.setScale(0.0001, 0.0001);
            }.bind(this))
        );
        if (repeat <= 0) {
            _widgetTutorialStep02Action = _widgetTutorialStep02Action.repeatForever();
        } else _widgetTutorialStep02Action = cc.sequence(
            cc.delayTime(delay),
            _widgetTutorialStep02Action.repeat(repeat)
        )
        
        this._widgetTutorialStep02.runAction(_widgetTutorialStep02Action);
    
        let _imgArrow01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(40 / (60 * speed), 0.0001, 0.0001),
                    cc.scaleTo(15 / (60 * speed), 1, 1).easing(cc.easeQuadraticActionOut()),
                    cc.scaleTo(35 / (60 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgArrow01.setScale(0.0001, 0.0001);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgArrow01Action = _imgArrow01Action.repeatForever();
        } else _imgArrow01Action = cc.sequence(
            cc.delayTime(delay),
            _imgArrow01Action.repeat(repeat)
        )
        
        this._imgArrow01.runAction(_imgArrow01Action);
    
        let _widgetTutorialStep03Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(45 / (60 * speed), 0.0001, 0.0001),
                    cc.scaleTo(15 / (60 * speed), 1, 1).easing(cc.easeBackOut()),
                    cc.scaleTo(30 / (60 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._widgetTutorialStep03.setScale(0.0001, 0.0001);
            }.bind(this))
        );
        if (repeat <= 0) {
            _widgetTutorialStep03Action = _widgetTutorialStep03Action.repeatForever();
        } else _widgetTutorialStep03Action = cc.sequence(
            cc.delayTime(delay),
            _widgetTutorialStep03Action.repeat(repeat)
        )
        
        this._widgetTutorialStep03.runAction(_widgetTutorialStep03Action);
    
        let _imgArrowTutorialStep04Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(25 / (60 * speed), 0.0001, 0.0001),
                    cc.scaleTo(15 / (60 * speed), 1, 1).easing(cc.easeBackOut()),
                    cc.scaleTo(50 / (60 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgArrowTutorialStep04.setScale(0.0001, 0.0001);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgArrowTutorialStep04Action = _imgArrowTutorialStep04Action.repeatForever();
        } else _imgArrowTutorialStep04Action = cc.sequence(
            cc.delayTime(delay),
            _imgArrowTutorialStep04Action.repeat(repeat)
        )
        
        this._imgArrowTutorialStep04.runAction(_imgArrowTutorialStep04Action);
    
        let _widgetTutorialStep04Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(60 / (60 * speed), 0.0001, 0.0001),
                    cc.scaleTo(15 / (60 * speed), 1, 1).easing(cc.easeBackOut()),
                    cc.scaleTo(15 / (60 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._widgetTutorialStep04.setScale(0.0001, 0.0001);
            }.bind(this))
        );
        if (repeat <= 0) {
            _widgetTutorialStep04Action = _widgetTutorialStep04Action.repeatForever();
        } else _widgetTutorialStep04Action = cc.sequence(
            cc.delayTime(delay),
            _widgetTutorialStep04Action.repeat(repeat)
        )
        
        this._widgetTutorialStep04.runAction(_widgetTutorialStep04Action);
    
        let _txtTapToCloseAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(75 / (60 * speed), 0.0001, 0.0001),
                    cc.scaleTo(15 / (60 * speed), 1, 1).easing(cc.easeBackOut())
                ),
                cc.sequence(
                    cc.moveTo(75 / (60 * speed), 320, 56.8),
                    cc.delayTime(15 / (60 * speed))
                ),
                cc.sequence(
                    cc.rotateBy(75 / (60 * speed), 0, 0),
                    cc.delayTime(15 / (60 * speed))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._txtTapToClose.setScale(0.0001, 0.0001);
                this._txtTapToClose.setPosition(320, 56.8);
                this._txtTapToClose.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _txtTapToCloseAction = _txtTapToCloseAction.repeatForever();
        } else _txtTapToCloseAction = cc.sequence(
            cc.delayTime(delay),
            _txtTapToCloseAction.repeat(repeat)
        )
        
        this._txtTapToClose.runAction(_txtTapToCloseAction);
    
        let _layoutTutorialAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(15 / (60 * speed), 255),
                    cc.fadeTo(75 / (60 * speed), 255)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._layoutTutorial.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _layoutTutorialAction = _layoutTutorialAction.repeatForever();
        } else _layoutTutorialAction = cc.sequence(
            cc.delayTime(delay),
            _layoutTutorialAction.repeat(repeat)
        )
        
        this._layoutTutorial.runAction(_layoutTutorialAction);
    },

    resetCCSAnimShowTutorial: function () {
        this._widgetTutorialStep01.stopAllActions();
        this._widgetTutorialStep01.setScale(0.0001, 0.0001);
    
        this._imgArrow00.stopAllActions();
        this._imgArrow00.setScale(0.0001, 0.0001);
    
        this._widgetTutorialStep02.stopAllActions();
        this._widgetTutorialStep02.setScale(0.0001, 0.0001);
    
        this._imgArrow01.stopAllActions();
        this._imgArrow01.setScale(0.0001, 0.0001);
    
        this._widgetTutorialStep03.stopAllActions();
        this._widgetTutorialStep03.setScale(0.0001, 0.0001);
    
        this._imgArrowTutorialStep04.stopAllActions();
        this._imgArrowTutorialStep04.setScale(0.0001, 0.0001);
    
        this._widgetTutorialStep04.stopAllActions();
        this._widgetTutorialStep04.setScale(0.0001, 0.0001);
    
        this._txtTapToClose.stopAllActions();
        this._txtTapToClose.setScale(0.0001, 0.0001);
        this._txtTapToClose.setPosition(320, 56.8);
        this._txtTapToClose.setRotation(0);
    
        this._layoutTutorial.stopAllActions();
        this._layoutTutorial.setOpacity(0);
    }
});

/**
 * Create HappySharkLayer
 * @returns {_ccs.HappySharkLayer}
 */
_ccs.HappySharkLayer.create = function () {
    return new _ccs.HappySharkLayer();
};
