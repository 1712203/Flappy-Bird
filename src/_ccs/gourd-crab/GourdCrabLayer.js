/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.GourdCrabLayer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.GourdCrabLayer = cc.Layer.extend({

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
    _layoutChat: null,
    /** @type {ccui.ImageView} */
    _imgChatBgr: null,
    /** @type {ccui.ImageView} */
    _imgChatIcon: null,
    /** @type {ccui.Layout} */
    _layoutExit: null,
    /** @type {ccui.ImageView} */
    _imgExitBgr: null,
    /** @type {ccui.ImageView} */
    _imgExitIcon: null,
    /** @type {ccui.ImageView} */
    _imgExitIconDark: null,
    /** @type {ck.OfferIconGrid} */
    _gridOfferIcons: null,
    /** @type {ccui.Layout} */
    _layoutHighlight: null,
    /** @type {ccui.Layout} */
    _layoutDealer: null,
    /** @type {ccui.Layout} */
    _layoutNPC: null,
    /** @type {GourdCrabNPCWidget} */
    _npcWidget: null,
    /** @type {ccui.Layout} */
    _layoutHintLetsBet: null,
    /** @type {ccui.ImageView} */
    _imgBubbleBackgroundHintLetsBet: null,
    /** @type {ck.Text} */
    _txtBubbleHintLetsBet: null,
    /** @type {ChatHistoryWidget} */
    _chatHistoryWidget: null,
    /** @type {ccui.Layout} */
    _layoutBackgroundChatHistoryWidget: null,
    /** @type {ccui.ImageView} */
    _imgBackground01ChatHistoryWidget: null,
    /** @type {ccui.ImageView} */
    _imgBackground02ChatHistoryWidget: null,
    /** @type {ccui.ScrollView} */
    _scrollViewChatMessages: null,
    /** @type {ccui.Layout} */
    _layoutChatMessages: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtChatMessages: null,
    /** @type {ccui.Layout} */
    _layoutTableDoor: null,
    /** @type {ccui.ImageView} */
    _imgTable: null,
    /** @type {ccui.Layout} */
    _layoutButtonDoor: null,
    /** @type {GourdCrabDoorWidget} */
    _doorWidget00: null,
    /** @type {GourdCrabDoorWidget} */
    _doorWidget01: null,
    /** @type {GourdCrabDoorWidget} */
    _doorWidget02: null,
    /** @type {GourdCrabDoorWidget} */
    _doorWidget03: null,
    /** @type {GourdCrabDoorWidget} */
    _doorWidget04: null,
    /** @type {GourdCrabDoorWidget} */
    _doorWidget05: null,
    /** @type {ccui.Layout} */
    _layoutPlayer: null,
    /** @type {ccui.Layout} */
    _layoutPlayerLeft: null,
    /** @type {GourdCrabPlayerWidget} */
    _playerWidget00: null,
    /** @type {GourdCrabPlayerWidget} */
    _playerWidget02: null,
    /** @type {GourdCrabPlayerWidget} */
    _playerWidget04: null,
    /** @type {GourdCrabPlayerWidget} */
    _playerWidget06: null,
    /** @type {ccui.Layout} */
    _layoutPlayerRight: null,
    /** @type {GourdCrabPlayerWidget} */
    _playerWidget01: null,
    /** @type {GourdCrabPlayerWidget} */
    _playerWidget03: null,
    /** @type {GourdCrabPlayerWidget} */
    _playerWidget05: null,
    /** @type {GourdCrabPlayerWidget} */
    _playerWidget07: null,
    /** @type {ccui.Layout} */
    _layoutUser: null,
    /** @type {GourdCrabUserWidget} */
    _userWidget: null,
    /** @type {progressExp} */
    _expBar: null,
    /** @type {ccui.Layout} */
    _layoutBet: null,
    /** @type {ccui.Layout} */
    _layoutListBetIcon: null,
    /** @type {GourdCrabTimerWidget} */
    _timerWidget: null,
    /** @type {ccui.Layout} */
    _layoutElementEffect: null,
    /** @type {ccui.Layout} */
    _layoutStateText: null,
    /** @type {ccui.ImageView} */
    _imgTextWaiting: null,
    /** @type {ccui.ImageView} */
    _imgTextStart: null,
    /** @type {ccui.ImageView} */
    _imgTextResult: null,
    /** @type {ccui.Layout} */
    _layoutInteract: null,
    /** @type {ccui.Layout} */
    _layoutResult: null,
    /** @type {GourdCrabResultWidget} */
    _resultWidget: null,
    /** @type {ccui.Layout} */
    _layoutTutorial: null,
    /** @type {ccui.Layout} */
    _layoutTutorialBackground: null,
    /** @type {ccui.Layout} */
    _layoutTutorialDoor: null,
    /** @type {ccui.ImageView} */
    _imgBubbleBackgroundTutorialDoor: null,
    /** @type {ck.Text} */
    _txtBubbleTutorialDoor: null,
    /** @type {ccui.Layout} */
    _layoutTutorialBet: null,
    /** @type {ccui.ImageView} */
    _imgBubbleBackgroundTutorialBet: null,
    /** @type {ck.Text} */
    _txtBubbleTutorialBet: null,
    /** @type {ccui.Layout} */
    _layoutTutorialRetract: null,
    /** @type {ccui.ImageView} */
    _imgBubbleBackgroundTutorialRetract: null,
    /** @type {ck.Text} */
    _txtBubbleTutorialRetract: null,
    /** @type {ccui.Layout} */
    _layoutTutorialResult: null,
    /** @type {ccui.ImageView} */
    _imgBubbleBackgroundTutorialResult: null,
    /** @type {ck.Text} */
    _txtBubbleTutorialResult: null,
    /** @type {ChatPopup} */
    _chatPopup: null,
    /** @type {InteractPopup} */
    _interactPopup: null,
    /** @type {cc.Node} */
    _nodeX2Icon: null,
    /** @type {cc.Node} */
    _nodeTrophyProgress: null,


    /**
     * _ccs.GourdCrabLayer constructor
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
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.0018);
        if (!PlatformUtils.hasNotch()) {
            let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
            _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
            _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
            _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
            _imgBackgroundLayoutComponent.setPositionPercentY(0.0018);
            _imgBackgroundLayoutComponent.setPercentWidthEnabled(true);
            _imgBackgroundLayoutComponent.setPercentWidth(1);
            _imgBackgroundLayoutComponent.setPercentHeightEnabled(true);
            _imgBackgroundLayoutComponent.setPercentHeight(1);
        }
        this._imgBackground.loadTexture("sprites/backgrounds/GourdCrab.png", 0);
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
        ck.UIUtils.setPositionPercent(this._layoutHelp, 0.08, 0.956);
        let _layoutHelpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHelp);
        _layoutHelpLayoutComponent.setPositionPercentXEnabled(true);
        _layoutHelpLayoutComponent.setPositionPercentX(0.08);
        _layoutHelpLayoutComponent.setPositionPercentYEnabled(true);
        _layoutHelpLayoutComponent.setPositionPercentY(0.956);
        this._layoutHelp.setTouchEnabled(true);
        this._layoutHelp.setUnifySizeEnabled(false);
        this._layoutHelp.ignoreContentAdaptWithSize(false);
        this._layoutHelp.setContentSize(cc.size(75, 75));

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
        this._imgHelpIcon.setContentSize(cc.size(30, 47));
        this._imgHelpIcon.setTouchEnabled(false);

        ///// # _layoutChat
        this._layoutChat = new ccui.Layout();
        this._layoutChat.setName("_layoutChat");
        this._layoutUI.addChild(this._layoutChat);
        this._layoutChat.setCascadeOpacityEnabled(true);
        this._layoutChat.setCascadeColorEnabled(true);
        this._layoutChat.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutChat, 0.9438, 0.0341);
        this._layoutChat.setScale(0.85, 0.85);
        let _layoutChatLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutChat);
        _layoutChatLayoutComponent.setPositionPercentXEnabled(true);
        _layoutChatLayoutComponent.setPositionPercentX(0.9438);
        _layoutChatLayoutComponent.setPositionPercentYEnabled(true);
        _layoutChatLayoutComponent.setPositionPercentY(0.0341);
        this._layoutChat.setTouchEnabled(true);
        this._layoutChat.setUnifySizeEnabled(false);
        this._layoutChat.ignoreContentAdaptWithSize(false);
        this._layoutChat.setContentSize(cc.size(75, 75));

        ///// # _imgChatBgr
        this._imgChatBgr = new ccui.ImageView();
        this._imgChatBgr.setName("_imgChatBgr");
        this._layoutChat.addChild(this._imgChatBgr);
        this._imgChatBgr.setCascadeOpacityEnabled(true);
        this._imgChatBgr.setCascadeColorEnabled(true);
        this._imgChatBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgChatBgr, 0.5, 0.5);
        let _imgChatBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgChatBgr);
        _imgChatBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgChatBgrLayoutComponent.setPositionPercentX(0.5);
        _imgChatBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgChatBgrLayoutComponent.setPositionPercentY(0.5);
        _imgChatBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgChatBgrLayoutComponent.setPercentWidth(1);
        _imgChatBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgChatBgrLayoutComponent.setPercentHeight(1);
        this._imgChatBgr.loadTexture("buttons/circles/Gray.png", 1);
        this._imgChatBgr.setUnifySizeEnabled(false);
        this._imgChatBgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgChatBgr, 1, 1);
        this._imgChatBgr.setTouchEnabled(false);

        ///// # _imgChatIcon
        this._imgChatIcon = new ccui.ImageView();
        this._imgChatIcon.setName("_imgChatIcon");
        this._layoutChat.addChild(this._imgChatIcon);
        this._imgChatIcon.setCascadeOpacityEnabled(true);
        this._imgChatIcon.setCascadeColorEnabled(true);
        this._imgChatIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgChatIcon, 0.5, 0.5);
        let _imgChatIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgChatIcon);
        _imgChatIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgChatIconLayoutComponent.setPositionPercentX(0.5);
        _imgChatIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgChatIconLayoutComponent.setPositionPercentY(0.5);
        this._imgChatIcon.loadTexture("icons/flat/Chat.png", 1);
        this._imgChatIcon.setUnifySizeEnabled(false);
        this._imgChatIcon.ignoreContentAdaptWithSize(false);
        this._imgChatIcon.setContentSize(cc.size(49, 40));
        this._imgChatIcon.setTouchEnabled(false);

        ///// # _layoutExit
        this._layoutExit = new ccui.Layout();
        this._layoutExit.setName("_layoutExit");
        this._layoutUI.addChild(this._layoutExit);
        this._layoutExit.setCascadeOpacityEnabled(true);
        this._layoutExit.setCascadeColorEnabled(true);
        this._layoutExit.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutExit, 0.0584, 0.0341);
        this._layoutExit.setScale(0.8, 0.8);
        let _layoutExitLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutExit);
        _layoutExitLayoutComponent.setPositionPercentXEnabled(true);
        _layoutExitLayoutComponent.setPositionPercentX(0.0584);
        _layoutExitLayoutComponent.setPositionPercentYEnabled(true);
        _layoutExitLayoutComponent.setPositionPercentY(0.0341);
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

        ///// # _gridOfferIcons
        this._gridOfferIcons = new ck.OfferIconGrid();
        this._gridOfferIcons.setName("_gridOfferIcons");
        this._layoutUI.addChild(this._gridOfferIcons);
        this._gridOfferIcons.setCascadeOpacityEnabled(true);
        this._gridOfferIcons.setCascadeColorEnabled(true);
        this._gridOfferIcons.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._gridOfferIcons, 0.915, 0.995);
        let _gridOfferIconsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridOfferIcons);
        _gridOfferIconsLayoutComponent.setPositionPercentXEnabled(true);
        _gridOfferIconsLayoutComponent.setPositionPercentX(0.915);
        _gridOfferIconsLayoutComponent.setPositionPercentYEnabled(true);
        _gridOfferIconsLayoutComponent.setPositionPercentY(0.995);

        ///// # _layoutHighlight
        this._layoutHighlight = new ccui.Layout();
        this._layoutHighlight.setName("_layoutHighlight");
        this._layoutRoot.addChild(this._layoutHighlight);
        this._layoutHighlight.setCascadeOpacityEnabled(true);
        this._layoutHighlight.setCascadeColorEnabled(true);
        let _layoutHighlightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHighlight);
        _layoutHighlightLayoutComponent.setPercentWidthEnabled(true);
        _layoutHighlightLayoutComponent.setPercentWidth(1);
        _layoutHighlightLayoutComponent.setPercentHeightEnabled(true);
        _layoutHighlightLayoutComponent.setPercentHeight(1);
        this._layoutHighlight.setTouchEnabled(false);
        this._layoutHighlight.setUnifySizeEnabled(false);
        this._layoutHighlight.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutHighlight, 1, 1);
        this._layoutHighlight.setBackGroundColorType(1);
        this._layoutHighlight.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutHighlight.setBackGroundColorOpacity(102);

        ///// # _layoutDealer
        this._layoutDealer = new ccui.Layout();
        this._layoutDealer.setName("_layoutDealer");
        this._layoutRoot.addChild(this._layoutDealer);
        this._layoutDealer.setCascadeOpacityEnabled(true);
        this._layoutDealer.setCascadeColorEnabled(true);
        this._layoutDealer.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutDealer, 0.5, 0.6177);
        let _layoutDealerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutDealer);
        _layoutDealerLayoutComponent.setPositionPercentXEnabled(true);
        _layoutDealerLayoutComponent.setPositionPercentX(0.5);
        _layoutDealerLayoutComponent.setPositionPercentYEnabled(true);
        _layoutDealerLayoutComponent.setPositionPercentY(0.6177);
        _layoutDealerLayoutComponent.setPercentWidthEnabled(true);
        _layoutDealerLayoutComponent.setPercentWidth(1);
        this._layoutDealer.setTouchEnabled(false);
        this._layoutDealer.setUnifySizeEnabled(false);
        this._layoutDealer.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutDealer, 1);
        this._layoutDealer.setContentSize(cc.size(this._layoutDealer.width, 362));

        ///// # _layoutNPC
        this._layoutNPC = new ccui.Layout();
        this._layoutNPC.setName("_layoutNPC");
        this._layoutDealer.addChild(this._layoutNPC);
        this._layoutNPC.setCascadeOpacityEnabled(true);
        this._layoutNPC.setCascadeColorEnabled(true);
        this._layoutNPC.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutNPC, 0.5, 0.5);
        let _layoutNPCLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutNPC);
        _layoutNPCLayoutComponent.setPositionPercentXEnabled(true);
        _layoutNPCLayoutComponent.setPositionPercentX(0.5);
        _layoutNPCLayoutComponent.setPositionPercentYEnabled(true);
        _layoutNPCLayoutComponent.setPositionPercentY(0.5);
        _layoutNPCLayoutComponent.setPercentWidthEnabled(true);
        _layoutNPCLayoutComponent.setPercentWidth(1);
        _layoutNPCLayoutComponent.setPercentHeightEnabled(true);
        _layoutNPCLayoutComponent.setPercentHeight(1);
        this._layoutNPC.setTouchEnabled(false);
        this._layoutNPC.setUnifySizeEnabled(false);
        this._layoutNPC.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutNPC, 1, 1);

        ///// # _npcWidget
        this._npcWidget = new GourdCrabNPCWidget();
        this._npcWidget.setName("_npcWidget");
        this._layoutNPC.addChild(this._npcWidget);
        this._npcWidget.setCascadeOpacityEnabled(true);
        this._npcWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._npcWidget, 0.5, 0.61);
        let _npcWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._npcWidget);
        _npcWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _npcWidgetLayoutComponent.setPositionPercentX(0.5);
        _npcWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _npcWidgetLayoutComponent.setPositionPercentY(0.61);

        ///// # _layoutHintLetsBet
        this._layoutHintLetsBet = new ccui.Layout();
        this._layoutHintLetsBet.setName("_layoutHintLetsBet");
        this._layoutNPC.addChild(this._layoutHintLetsBet);
        this._layoutHintLetsBet.setCascadeOpacityEnabled(true);
        this._layoutHintLetsBet.setCascadeColorEnabled(true);
        this._layoutHintLetsBet.setAnchorPoint(cc.p(0.1515, -0.2531));
        ck.UIUtils.setPositionPercent(this._layoutHintLetsBet, 0.6073, 0.5858);
        this._layoutHintLetsBet.setScale(0.001, 0.001);
        this._layoutHintLetsBet.setRotation(-135);
        this._layoutHintLetsBet.setOpacity(0);
        let _layoutHintLetsBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHintLetsBet);
        _layoutHintLetsBetLayoutComponent.setPositionPercentXEnabled(true);
        _layoutHintLetsBetLayoutComponent.setPositionPercentX(0.6073);
        _layoutHintLetsBetLayoutComponent.setPositionPercentYEnabled(true);
        _layoutHintLetsBetLayoutComponent.setPositionPercentY(0.5858);
        this._layoutHintLetsBet.setTouchEnabled(false);
        this._layoutHintLetsBet.setUnifySizeEnabled(false);
        this._layoutHintLetsBet.ignoreContentAdaptWithSize(false);
        this._layoutHintLetsBet.setContentSize(cc.size(174, 100));

        ///// # _imgBubbleBackgroundHintLetsBet
        this._imgBubbleBackgroundHintLetsBet = new ccui.ImageView();
        this._imgBubbleBackgroundHintLetsBet.setName("_imgBubbleBackgroundHintLetsBet");
        this._layoutHintLetsBet.addChild(this._imgBubbleBackgroundHintLetsBet);
        this._imgBubbleBackgroundHintLetsBet.setCascadeOpacityEnabled(true);
        this._imgBubbleBackgroundHintLetsBet.setCascadeColorEnabled(true);
        this._imgBubbleBackgroundHintLetsBet.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBubbleBackgroundHintLetsBet, 0.5, 1);
        let _imgBubbleBackgroundHintLetsBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBubbleBackgroundHintLetsBet);
        _imgBubbleBackgroundHintLetsBetLayoutComponent.setPositionPercentXEnabled(true);
        _imgBubbleBackgroundHintLetsBetLayoutComponent.setPositionPercentX(0.5);
        _imgBubbleBackgroundHintLetsBetLayoutComponent.setPositionPercentYEnabled(true);
        _imgBubbleBackgroundHintLetsBetLayoutComponent.setPositionPercentY(1);
        _imgBubbleBackgroundHintLetsBetLayoutComponent.setPercentWidthEnabled(true);
        _imgBubbleBackgroundHintLetsBetLayoutComponent.setPercentWidth(1);
        this._imgBubbleBackgroundHintLetsBet.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgBubbleBackgroundHintLetsBet.setUnifySizeEnabled(false);
        this._imgBubbleBackgroundHintLetsBet.ignoreContentAdaptWithSize(false);
        this._imgBubbleBackgroundHintLetsBet.setScale9Enabled(true);
        this._imgBubbleBackgroundHintLetsBet.setCapInsets(cc.rect(57, 33, 60, 30));
        ck.UIUtils.setWidthPercent(this._imgBubbleBackgroundHintLetsBet, 1);
        this._imgBubbleBackgroundHintLetsBet.setContentSize(cc.size(this._imgBubbleBackgroundHintLetsBet.width, 126));
        this._imgBubbleBackgroundHintLetsBet.setTouchEnabled(false);

        ///// # _txtBubbleHintLetsBet
        this._txtBubbleHintLetsBet = new ck.Text();
        this._txtBubbleHintLetsBet.setName("_txtBubbleHintLetsBet");
        this._layoutHintLetsBet.addChild(this._txtBubbleHintLetsBet);
        this._txtBubbleHintLetsBet.setCascadeOpacityEnabled(true);
        this._txtBubbleHintLetsBet.setCascadeColorEnabled(true);
        this._txtBubbleHintLetsBet.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBubbleHintLetsBet, 0.5, 0.5);
        let _txtBubbleHintLetsBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBubbleHintLetsBet);
        _txtBubbleHintLetsBetLayoutComponent.setPositionPercentXEnabled(true);
        _txtBubbleHintLetsBetLayoutComponent.setPositionPercentX(0.5);
        _txtBubbleHintLetsBetLayoutComponent.setPositionPercentYEnabled(true);
        _txtBubbleHintLetsBetLayoutComponent.setPositionPercentY(0.5);
        _txtBubbleHintLetsBetLayoutComponent.setPercentWidthEnabled(true);
        _txtBubbleHintLetsBetLayoutComponent.setPercentWidth(0.9);
        _txtBubbleHintLetsBetLayoutComponent.setPercentHeightEnabled(true);
        _txtBubbleHintLetsBetLayoutComponent.setPercentHeight(0.9);
        this._txtBubbleHintLetsBet.setTouchEnabled(false);
        this._txtBubbleHintLetsBet.setUnifySizeEnabled(false);
        this._txtBubbleHintLetsBet.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtBubbleHintLetsBet, 0.9, 0.9);
        this._txtBubbleHintLetsBet.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBubbleHintLetsBet.setDefaultFontSize(30);
        this._txtBubbleHintLetsBet.setString(gm.localize.getText("TXT_LETS_PLAY"));
        this._txtBubbleHintLetsBet.setTextHorizontalAlignment(1);
        this._txtBubbleHintLetsBet.setTextVerticalAlignment(1);

        ///// # _chatHistoryWidget
        this._chatHistoryWidget = new ChatHistoryWidget();
        this._chatHistoryWidget.setName("_chatHistoryWidget");
        this._layoutRoot.addChild(this._chatHistoryWidget);
        this._chatHistoryWidget.setCascadeOpacityEnabled(true);
        this._chatHistoryWidget.setCascadeColorEnabled(true);
        this._chatHistoryWidget.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._chatHistoryWidget, 0.1697, 0.8288);
        let _chatHistoryWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._chatHistoryWidget);
        _chatHistoryWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _chatHistoryWidgetLayoutComponent.setPositionPercentY(0.8288);
        this._chatHistoryWidget.setUnifySizeEnabled(false);
        this._chatHistoryWidget.ignoreContentAdaptWithSize(false);
        this._chatHistoryWidget.setContentSize(cc.size(200, 200));
        this._chatHistoryWidget.setTouchEnabled(false);

        ///// # _layoutBackgroundChatHistoryWidget
        this._layoutBackgroundChatHistoryWidget = new ccui.Layout();
        this._layoutBackgroundChatHistoryWidget.setName("_layoutBackgroundChatHistoryWidget");
        this._chatHistoryWidget.addChild(this._layoutBackgroundChatHistoryWidget);
        this._layoutBackgroundChatHistoryWidget.setCascadeOpacityEnabled(true);
        this._layoutBackgroundChatHistoryWidget.setCascadeColorEnabled(true);
        this._layoutBackgroundChatHistoryWidget.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBackgroundChatHistoryWidget, 0.5, 0.5);
        let _layoutBackgroundChatHistoryWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBackgroundChatHistoryWidget);
        _layoutBackgroundChatHistoryWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBackgroundChatHistoryWidgetLayoutComponent.setPositionPercentX(0.5);
        _layoutBackgroundChatHistoryWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBackgroundChatHistoryWidgetLayoutComponent.setPositionPercentY(0.5);
        _layoutBackgroundChatHistoryWidgetLayoutComponent.setPercentWidthEnabled(true);
        _layoutBackgroundChatHistoryWidgetLayoutComponent.setPercentWidth(1);
        _layoutBackgroundChatHistoryWidgetLayoutComponent.setPercentHeightEnabled(true);
        _layoutBackgroundChatHistoryWidgetLayoutComponent.setPercentHeight(1);
        this._layoutBackgroundChatHistoryWidget.setTouchEnabled(false);
        this._layoutBackgroundChatHistoryWidget.setUnifySizeEnabled(false);
        this._layoutBackgroundChatHistoryWidget.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBackgroundChatHistoryWidget, 1, 1);

        ///// # _imgBackground01ChatHistoryWidget
        this._imgBackground01ChatHistoryWidget = new ccui.ImageView();
        this._imgBackground01ChatHistoryWidget.setName("_imgBackground01ChatHistoryWidget");
        this._layoutBackgroundChatHistoryWidget.addChild(this._imgBackground01ChatHistoryWidget);
        this._imgBackground01ChatHistoryWidget.setCascadeOpacityEnabled(true);
        this._imgBackground01ChatHistoryWidget.setCascadeColorEnabled(true);
        this._imgBackground01ChatHistoryWidget.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground01ChatHistoryWidget, 0.5, 0.5);
        this._imgBackground01ChatHistoryWidget.setOpacity(102);
        this._imgBackground01ChatHistoryWidget.setColor(cc.color(0, 0, 0, 255));
        let _imgBackground01ChatHistoryWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground01ChatHistoryWidget);
        _imgBackground01ChatHistoryWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackground01ChatHistoryWidgetLayoutComponent.setPositionPercentX(0.5);
        _imgBackground01ChatHistoryWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackground01ChatHistoryWidgetLayoutComponent.setPositionPercentY(0.5);
        _imgBackground01ChatHistoryWidgetLayoutComponent.setPercentWidthEnabled(true);
        _imgBackground01ChatHistoryWidgetLayoutComponent.setPercentWidth(1);
        _imgBackground01ChatHistoryWidgetLayoutComponent.setPercentHeightEnabled(true);
        _imgBackground01ChatHistoryWidgetLayoutComponent.setPercentHeight(1);
        this._imgBackground01ChatHistoryWidget.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgBackground01ChatHistoryWidget.setUnifySizeEnabled(false);
        this._imgBackground01ChatHistoryWidget.ignoreContentAdaptWithSize(false);
        this._imgBackground01ChatHistoryWidget.setScale9Enabled(true);
        this._imgBackground01ChatHistoryWidget.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgBackground01ChatHistoryWidget, 1, 1);
        this._imgBackground01ChatHistoryWidget.setTouchEnabled(false);

        ///// # _imgBackground02ChatHistoryWidget
        this._imgBackground02ChatHistoryWidget = new ccui.ImageView();
        this._imgBackground02ChatHistoryWidget.setName("_imgBackground02ChatHistoryWidget");
        this._layoutBackgroundChatHistoryWidget.addChild(this._imgBackground02ChatHistoryWidget);
        this._imgBackground02ChatHistoryWidget.setCascadeOpacityEnabled(true);
        this._imgBackground02ChatHistoryWidget.setCascadeColorEnabled(true);
        this._imgBackground02ChatHistoryWidget.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground02ChatHistoryWidget, 0.5, 0.5);
        this._imgBackground02ChatHistoryWidget.setColor(cc.color(170, 169, 53, 255));
        let _imgBackground02ChatHistoryWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground02ChatHistoryWidget);
        _imgBackground02ChatHistoryWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackground02ChatHistoryWidgetLayoutComponent.setPositionPercentX(0.5);
        _imgBackground02ChatHistoryWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackground02ChatHistoryWidgetLayoutComponent.setPositionPercentY(0.5);
        this._imgBackground02ChatHistoryWidget.loadTexture("basics/shapes/StrokeRoundedRectangle_64px_5px.png", 1);
        this._imgBackground02ChatHistoryWidget.setUnifySizeEnabled(false);
        this._imgBackground02ChatHistoryWidget.ignoreContentAdaptWithSize(false);
        this._imgBackground02ChatHistoryWidget.setScale9Enabled(true);
        this._imgBackground02ChatHistoryWidget.setCapInsets(cc.rect(21, 21, 24, 24));
        this._imgBackground02ChatHistoryWidget.setContentSize(cc.size(202, 202));
        this._imgBackground02ChatHistoryWidget.setTouchEnabled(false);

        ///// # _scrollViewChatMessages
        this._scrollViewChatMessages = new ccui.ScrollView();
        this._scrollViewChatMessages.setName("_scrollViewChatMessages");
        this._chatHistoryWidget.addChild(this._scrollViewChatMessages);
        this._scrollViewChatMessages.setCascadeOpacityEnabled(true);
        this._scrollViewChatMessages.setCascadeColorEnabled(true);
        let _scrollViewChatMessagesLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._scrollViewChatMessages);
        _scrollViewChatMessagesLayoutComponent.setPercentWidthEnabled(true);
        _scrollViewChatMessagesLayoutComponent.setPercentWidth(1);
        _scrollViewChatMessagesLayoutComponent.setPercentHeightEnabled(true);
        _scrollViewChatMessagesLayoutComponent.setPercentHeight(1);
        this._scrollViewChatMessages.setTouchEnabled(true);
        this._scrollViewChatMessages.setUnifySizeEnabled(false);
        this._scrollViewChatMessages.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._scrollViewChatMessages, 1, 1);
        this._scrollViewChatMessages.setInnerContainerSize(cc.size(200, 200));
        this._scrollViewChatMessages.setDirection(1);

        ///// # _layoutChatMessages
        this._layoutChatMessages = new ccui.Layout();
        this._layoutChatMessages.setName("_layoutChatMessages");
        this._scrollViewChatMessages.addChild(this._layoutChatMessages);
        this._layoutChatMessages.setCascadeOpacityEnabled(true);
        this._layoutChatMessages.setCascadeColorEnabled(true);
        let _layoutChatMessagesLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutChatMessages);
        _layoutChatMessagesLayoutComponent.setPercentWidthEnabled(true);
        _layoutChatMessagesLayoutComponent.setPercentWidth(1);
        _layoutChatMessagesLayoutComponent.setPercentHeightEnabled(true);
        _layoutChatMessagesLayoutComponent.setPercentHeight(1);
        this._layoutChatMessages.setTouchEnabled(true);
        this._layoutChatMessages.setUnifySizeEnabled(false);
        this._layoutChatMessages.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutChatMessages, 1, 1);

        ///// # _txtChatMessages
        this._txtChatMessages = new ck.CustomRichTextExtend(cc.size(180, 180));
        this._txtChatMessages.setName("_txtChatMessages");
        this._layoutChatMessages.addChild(this._txtChatMessages);
        this._txtChatMessages.setCascadeOpacityEnabled(true);
        this._txtChatMessages.setCascadeColorEnabled(true);
        this._txtChatMessages.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._txtChatMessages, 0.5, 0.05);
        let _txtChatMessagesLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtChatMessages);
        _txtChatMessagesLayoutComponent.setPositionPercentXEnabled(true);
        _txtChatMessagesLayoutComponent.setPositionPercentX(0.5);
        _txtChatMessagesLayoutComponent.setPercentWidthEnabled(true);
        _txtChatMessagesLayoutComponent.setPercentWidth(0.9);
        this._txtChatMessages.setTouchEnabled(false);
        this._txtChatMessages.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtChatMessages.setDefaultSize(22);
        this._txtChatMessages.setDefaultAlignHorizontal(0);
        this._txtChatMessages.setDefaultAlignVertical(6);

        ///// # _initChatHistory for this._chatHistoryWidget;
        this._chatHistoryWidget._initChatHistory();

        ///// # _layoutTableDoor
        this._layoutTableDoor = new ccui.Layout();
        this._layoutTableDoor.setName("_layoutTableDoor");
        this._layoutRoot.addChild(this._layoutTableDoor);
        this._layoutTableDoor.setCascadeOpacityEnabled(true);
        this._layoutTableDoor.setCascadeColorEnabled(true);
        this._layoutTableDoor.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTableDoor, 0.5, 0.48);
        let _layoutTableDoorLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTableDoor);
        _layoutTableDoorLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTableDoorLayoutComponent.setPositionPercentX(0.5);
        _layoutTableDoorLayoutComponent.setPositionPercentYEnabled(true);
        _layoutTableDoorLayoutComponent.setPositionPercentY(0.48);
        this._layoutTableDoor.setTouchEnabled(false);
        this._layoutTableDoor.setUnifySizeEnabled(false);
        this._layoutTableDoor.ignoreContentAdaptWithSize(false);
        this._layoutTableDoor.setContentSize(cc.size(432, 385));

        ///// # _imgTable
        this._imgTable = new ccui.ImageView();
        this._imgTable.setName("_imgTable");
        this._layoutTableDoor.addChild(this._imgTable);
        this._imgTable.setCascadeOpacityEnabled(true);
        this._imgTable.setCascadeColorEnabled(true);
        this._imgTable.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTable, 0.5, 0.5);
        let _imgTableLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTable);
        _imgTableLayoutComponent.setPositionPercentXEnabled(true);
        _imgTableLayoutComponent.setPositionPercentX(0.5);
        _imgTableLayoutComponent.setPositionPercentYEnabled(true);
        _imgTableLayoutComponent.setPositionPercentY(0.5);
        this._imgTable.loadTexture("gourd-crab/Table.png", 1);
        this._imgTable.setUnifySizeEnabled(false);
        this._imgTable.ignoreContentAdaptWithSize(false);
        this._imgTable.setContentSize(cc.size(432, 385));
        this._imgTable.setTouchEnabled(false);

        ///// # _layoutButtonDoor
        this._layoutButtonDoor = new ccui.Layout();
        this._layoutButtonDoor.setName("_layoutButtonDoor");
        this._layoutTableDoor.addChild(this._layoutButtonDoor);
        this._layoutButtonDoor.setCascadeOpacityEnabled(true);
        this._layoutButtonDoor.setCascadeColorEnabled(true);
        this._layoutButtonDoor.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutButtonDoor, 0.515, 0.55);
        let _layoutButtonDoorLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutButtonDoor);
        _layoutButtonDoorLayoutComponent.setPositionPercentXEnabled(true);
        _layoutButtonDoorLayoutComponent.setPositionPercentX(0.515);
        _layoutButtonDoorLayoutComponent.setPositionPercentYEnabled(true);
        _layoutButtonDoorLayoutComponent.setPositionPercentY(0.55);
        _layoutButtonDoorLayoutComponent.setPercentWidthEnabled(true);
        _layoutButtonDoorLayoutComponent.setPercentWidth(1);
        _layoutButtonDoorLayoutComponent.setPercentHeightEnabled(true);
        _layoutButtonDoorLayoutComponent.setPercentHeight(1);
        this._layoutButtonDoor.setTouchEnabled(false);
        this._layoutButtonDoor.setUnifySizeEnabled(false);
        this._layoutButtonDoor.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutButtonDoor, 1, 1);

        ///// # _doorWidget00
        this._doorWidget00 = new GourdCrabDoorWidget();
        this._doorWidget00.setName("_doorWidget00");
        this._layoutButtonDoor.addChild(this._doorWidget00);
        this._doorWidget00.setCascadeOpacityEnabled(true);
        this._doorWidget00.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._doorWidget00, 0.1852, 0.7325);
        let _doorWidget00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._doorWidget00);

        ///// # _doorWidget01
        this._doorWidget01 = new GourdCrabDoorWidget();
        this._doorWidget01.setName("_doorWidget01");
        this._layoutButtonDoor.addChild(this._doorWidget01);
        this._doorWidget01.setCascadeOpacityEnabled(true);
        this._doorWidget01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._doorWidget01, 0.4861, 0.7325);
        let _doorWidget01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._doorWidget01);

        ///// # _doorWidget02
        this._doorWidget02 = new GourdCrabDoorWidget();
        this._doorWidget02.setName("_doorWidget02");
        this._layoutButtonDoor.addChild(this._doorWidget02);
        this._doorWidget02.setCascadeOpacityEnabled(true);
        this._doorWidget02.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._doorWidget02, 0.7894, 0.7325);
        let _doorWidget02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._doorWidget02);

        ///// # _doorWidget03
        this._doorWidget03 = new GourdCrabDoorWidget();
        this._doorWidget03.setName("_doorWidget03");
        this._layoutButtonDoor.addChild(this._doorWidget03);
        this._doorWidget03.setCascadeOpacityEnabled(true);
        this._doorWidget03.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._doorWidget03, 0.1852, 0.3065);
        let _doorWidget03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._doorWidget03);

        ///// # _doorWidget04
        this._doorWidget04 = new GourdCrabDoorWidget();
        this._doorWidget04.setName("_doorWidget04");
        this._layoutButtonDoor.addChild(this._doorWidget04);
        this._doorWidget04.setCascadeOpacityEnabled(true);
        this._doorWidget04.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._doorWidget04, 0.4861, 0.3065);
        let _doorWidget04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._doorWidget04);

        ///// # _doorWidget05
        this._doorWidget05 = new GourdCrabDoorWidget();
        this._doorWidget05.setName("_doorWidget05");
        this._layoutButtonDoor.addChild(this._doorWidget05);
        this._doorWidget05.setCascadeOpacityEnabled(true);
        this._doorWidget05.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._doorWidget05, 0.7894, 0.3065);
        let _doorWidget05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._doorWidget05);

        ///// # _layoutPlayer
        this._layoutPlayer = new ccui.Layout();
        this._layoutPlayer.setName("_layoutPlayer");
        this._layoutRoot.addChild(this._layoutPlayer);
        this._layoutPlayer.setCascadeOpacityEnabled(true);
        this._layoutPlayer.setCascadeColorEnabled(true);
        let _layoutPlayerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPlayer);
        _layoutPlayerLayoutComponent.setPercentWidthEnabled(true);
        _layoutPlayerLayoutComponent.setPercentWidth(1);
        _layoutPlayerLayoutComponent.setPercentHeightEnabled(true);
        _layoutPlayerLayoutComponent.setPercentHeight(1);
        this._layoutPlayer.setTouchEnabled(false);
        this._layoutPlayer.setUnifySizeEnabled(false);
        this._layoutPlayer.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutPlayer, 1, 1);

        ///// # _layoutPlayerLeft
        this._layoutPlayerLeft = new ccui.Layout();
        this._layoutPlayerLeft.setName("_layoutPlayerLeft");
        this._layoutPlayer.addChild(this._layoutPlayerLeft);
        this._layoutPlayerLeft.setCascadeOpacityEnabled(true);
        this._layoutPlayerLeft.setCascadeColorEnabled(true);
        this._layoutPlayerLeft.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutPlayerLeft, 0, 0.5);
        let _layoutPlayerLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPlayerLeft);
        _layoutPlayerLeftLayoutComponent.setPositionPercentXEnabled(true);
        _layoutPlayerLeftLayoutComponent.setPositionPercentX(0);
        _layoutPlayerLeftLayoutComponent.setPositionPercentYEnabled(true);
        _layoutPlayerLeftLayoutComponent.setPositionPercentY(0.5);
        _layoutPlayerLeftLayoutComponent.setPercentHeightEnabled(true);
        _layoutPlayerLeftLayoutComponent.setPercentHeight(1);
        this._layoutPlayerLeft.setTouchEnabled(false);
        this._layoutPlayerLeft.setUnifySizeEnabled(false);
        this._layoutPlayerLeft.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this._layoutPlayerLeft, 1);
        this._layoutPlayerLeft.setContentSize(cc.size(108, this._layoutPlayerLeft.height));

        ///// # _playerWidget00
        this._playerWidget00 = new GourdCrabPlayerWidget();
        this._playerWidget00.setName("_playerWidget00");
        this._layoutPlayerLeft.addChild(this._playerWidget00);
        this._playerWidget00.setCascadeOpacityEnabled(true);
        this._playerWidget00.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._playerWidget00, 0.5, 0.32);
        let _playerWidget00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._playerWidget00);
        _playerWidget00LayoutComponent.setPositionPercentXEnabled(true);
        _playerWidget00LayoutComponent.setPositionPercentX(0.5);
        _playerWidget00LayoutComponent.setPositionPercentYEnabled(true);
        _playerWidget00LayoutComponent.setPositionPercentY(0.32);

        ///// # _playerWidget02
        this._playerWidget02 = new GourdCrabPlayerWidget();
        this._playerWidget02.setName("_playerWidget02");
        this._layoutPlayerLeft.addChild(this._playerWidget02);
        this._playerWidget02.setCascadeOpacityEnabled(true);
        this._playerWidget02.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._playerWidget02, 0.5, 0.44);
        let _playerWidget02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._playerWidget02);
        _playerWidget02LayoutComponent.setPositionPercentXEnabled(true);
        _playerWidget02LayoutComponent.setPositionPercentX(0.5);
        _playerWidget02LayoutComponent.setPositionPercentYEnabled(true);
        _playerWidget02LayoutComponent.setPositionPercentY(0.44);

        ///// # _playerWidget04
        this._playerWidget04 = new GourdCrabPlayerWidget();
        this._playerWidget04.setName("_playerWidget04");
        this._layoutPlayerLeft.addChild(this._playerWidget04);
        this._playerWidget04.setCascadeOpacityEnabled(true);
        this._playerWidget04.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._playerWidget04, 0.5, 0.56);
        let _playerWidget04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._playerWidget04);
        _playerWidget04LayoutComponent.setPositionPercentXEnabled(true);
        _playerWidget04LayoutComponent.setPositionPercentX(0.5);
        _playerWidget04LayoutComponent.setPositionPercentYEnabled(true);
        _playerWidget04LayoutComponent.setPositionPercentY(0.56);

        ///// # _playerWidget06
        this._playerWidget06 = new GourdCrabPlayerWidget();
        this._playerWidget06.setName("_playerWidget06");
        this._layoutPlayerLeft.addChild(this._playerWidget06);
        this._playerWidget06.setCascadeOpacityEnabled(true);
        this._playerWidget06.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._playerWidget06, 0.5, 0.68);
        let _playerWidget06LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._playerWidget06);
        _playerWidget06LayoutComponent.setPositionPercentXEnabled(true);
        _playerWidget06LayoutComponent.setPositionPercentX(0.5);
        _playerWidget06LayoutComponent.setPositionPercentYEnabled(true);
        _playerWidget06LayoutComponent.setPositionPercentY(0.68);

        ///// # _layoutPlayerRight
        this._layoutPlayerRight = new ccui.Layout();
        this._layoutPlayerRight.setName("_layoutPlayerRight");
        this._layoutPlayer.addChild(this._layoutPlayerRight);
        this._layoutPlayerRight.setCascadeOpacityEnabled(true);
        this._layoutPlayerRight.setCascadeColorEnabled(true);
        this._layoutPlayerRight.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutPlayerRight, 1, 0.5);
        let _layoutPlayerRightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPlayerRight);
        _layoutPlayerRightLayoutComponent.setPositionPercentXEnabled(true);
        _layoutPlayerRightLayoutComponent.setPositionPercentX(1);
        _layoutPlayerRightLayoutComponent.setPositionPercentYEnabled(true);
        _layoutPlayerRightLayoutComponent.setPositionPercentY(0.5);
        _layoutPlayerRightLayoutComponent.setPercentHeightEnabled(true);
        _layoutPlayerRightLayoutComponent.setPercentHeight(1);
        this._layoutPlayerRight.setTouchEnabled(false);
        this._layoutPlayerRight.setUnifySizeEnabled(false);
        this._layoutPlayerRight.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this._layoutPlayerRight, 1);
        this._layoutPlayerRight.setContentSize(cc.size(108, this._layoutPlayerRight.height));

        ///// # _playerWidget01
        this._playerWidget01 = new GourdCrabPlayerWidget();
        this._playerWidget01.setName("_playerWidget01");
        this._layoutPlayerRight.addChild(this._playerWidget01);
        this._playerWidget01.setCascadeOpacityEnabled(true);
        this._playerWidget01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._playerWidget01, 0.5, 0.32);
        let _playerWidget01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._playerWidget01);
        _playerWidget01LayoutComponent.setPositionPercentXEnabled(true);
        _playerWidget01LayoutComponent.setPositionPercentX(0.5);
        _playerWidget01LayoutComponent.setPositionPercentYEnabled(true);
        _playerWidget01LayoutComponent.setPositionPercentY(0.32);

        ///// # _playerWidget03
        this._playerWidget03 = new GourdCrabPlayerWidget();
        this._playerWidget03.setName("_playerWidget03");
        this._layoutPlayerRight.addChild(this._playerWidget03);
        this._playerWidget03.setCascadeOpacityEnabled(true);
        this._playerWidget03.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._playerWidget03, 0.5, 0.44);
        let _playerWidget03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._playerWidget03);
        _playerWidget03LayoutComponent.setPositionPercentXEnabled(true);
        _playerWidget03LayoutComponent.setPositionPercentX(0.5);
        _playerWidget03LayoutComponent.setPositionPercentYEnabled(true);
        _playerWidget03LayoutComponent.setPositionPercentY(0.44);

        ///// # _playerWidget05
        this._playerWidget05 = new GourdCrabPlayerWidget();
        this._playerWidget05.setName("_playerWidget05");
        this._layoutPlayerRight.addChild(this._playerWidget05);
        this._playerWidget05.setCascadeOpacityEnabled(true);
        this._playerWidget05.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._playerWidget05, 0.5, 0.56);
        let _playerWidget05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._playerWidget05);
        _playerWidget05LayoutComponent.setPositionPercentXEnabled(true);
        _playerWidget05LayoutComponent.setPositionPercentX(0.5);
        _playerWidget05LayoutComponent.setPositionPercentYEnabled(true);
        _playerWidget05LayoutComponent.setPositionPercentY(0.56);

        ///// # _playerWidget07
        this._playerWidget07 = new GourdCrabPlayerWidget();
        this._playerWidget07.setName("_playerWidget07");
        this._layoutPlayerRight.addChild(this._playerWidget07);
        this._playerWidget07.setCascadeOpacityEnabled(true);
        this._playerWidget07.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._playerWidget07, 0.5, 0.68);
        let _playerWidget07LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._playerWidget07);
        _playerWidget07LayoutComponent.setPositionPercentXEnabled(true);
        _playerWidget07LayoutComponent.setPositionPercentX(0.5);
        _playerWidget07LayoutComponent.setPositionPercentYEnabled(true);
        _playerWidget07LayoutComponent.setPositionPercentY(0.68);

        ///// # _layoutUser
        this._layoutUser = new ccui.Layout();
        this._layoutUser.setName("_layoutUser");
        this._layoutRoot.addChild(this._layoutUser);
        this._layoutUser.setCascadeOpacityEnabled(true);
        this._layoutUser.setCascadeColorEnabled(true);
        let _layoutUserLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutUser);
        _layoutUserLayoutComponent.setPercentWidthEnabled(true);
        _layoutUserLayoutComponent.setPercentWidth(1);
        _layoutUserLayoutComponent.setPercentHeightEnabled(true);
        _layoutUserLayoutComponent.setPercentHeight(1);
        this._layoutUser.setTouchEnabled(false);
        this._layoutUser.setUnifySizeEnabled(false);
        this._layoutUser.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutUser, 1, 1);

        ///// # _userWidget
        this._userWidget = new GourdCrabUserWidget();
        this._userWidget.setName("_userWidget");
        this._layoutUser.addChild(this._userWidget);
        this._userWidget.setCascadeOpacityEnabled(true);
        this._userWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._userWidget, 0.5, 0.1);
        let _userWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._userWidget);
        _userWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _userWidgetLayoutComponent.setPositionPercentX(0.5);
        _userWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _userWidgetLayoutComponent.setPositionPercentY(0.1);

        ///// # _expBar
        this._expBar = new progressExp();
        this._expBar.setName("_expBar");
        this._layoutUser.addChild(this._expBar);
        this._expBar.setCascadeOpacityEnabled(true);
        this._expBar.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._expBar, 0.5, 0.191);
        let _expBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._expBar);
        _expBarLayoutComponent.setPositionPercentXEnabled(true);
        _expBarLayoutComponent.setPositionPercentX(0.5);

        ///// # _layoutBet
        this._layoutBet = new ccui.Layout();
        this._layoutBet.setName("_layoutBet");
        this._layoutRoot.addChild(this._layoutBet);
        this._layoutBet.setCascadeOpacityEnabled(true);
        this._layoutBet.setCascadeColorEnabled(true);
        let _layoutBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBet);
        _layoutBetLayoutComponent.setPercentWidthEnabled(true);
        _layoutBetLayoutComponent.setPercentWidth(1);
        _layoutBetLayoutComponent.setPercentHeightEnabled(true);
        _layoutBetLayoutComponent.setPercentHeight(1);
        this._layoutBet.setTouchEnabled(false);
        this._layoutBet.setUnifySizeEnabled(false);
        this._layoutBet.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBet, 1, 1);

        ///// # _layoutListBetIcon
        this._layoutListBetIcon = new ccui.Layout();
        this._layoutListBetIcon.setName("_layoutListBetIcon");
        this._layoutBet.addChild(this._layoutListBetIcon);
        this._layoutListBetIcon.setCascadeOpacityEnabled(true);
        this._layoutListBetIcon.setCascadeColorEnabled(true);
        this._layoutListBetIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutListBetIcon, 0.5, 0.5);
        let _layoutListBetIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutListBetIcon);
        _layoutListBetIconLayoutComponent.setPositionPercentXEnabled(true);
        _layoutListBetIconLayoutComponent.setPositionPercentX(0.5);
        _layoutListBetIconLayoutComponent.setPositionPercentYEnabled(true);
        _layoutListBetIconLayoutComponent.setPositionPercentY(0.5);
        _layoutListBetIconLayoutComponent.setPercentWidthEnabled(true);
        _layoutListBetIconLayoutComponent.setPercentWidth(1);
        _layoutListBetIconLayoutComponent.setPercentHeightEnabled(true);
        _layoutListBetIconLayoutComponent.setPercentHeight(1);
        this._layoutListBetIcon.setTouchEnabled(false);
        this._layoutListBetIcon.setUnifySizeEnabled(false);
        this._layoutListBetIcon.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutListBetIcon, 1, 1);

        ///// # _timerWidget
        this._timerWidget = new GourdCrabTimerWidget();
        this._timerWidget.setName("_timerWidget");
        this._layoutBet.addChild(this._timerWidget);
        this._timerWidget.setCascadeOpacityEnabled(true);
        this._timerWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._timerWidget, 0.5, 0.725);
        this._timerWidget.setScale(0.8, 0.8);
        let _timerWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._timerWidget);
        _timerWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _timerWidgetLayoutComponent.setPositionPercentX(0.5);
        _timerWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _timerWidgetLayoutComponent.setPositionPercentY(0.725);

        ///// # _layoutElementEffect
        this._layoutElementEffect = new ccui.Layout();
        this._layoutElementEffect.setName("_layoutElementEffect");
        this._layoutRoot.addChild(this._layoutElementEffect);
        this._layoutElementEffect.setCascadeOpacityEnabled(true);
        this._layoutElementEffect.setCascadeColorEnabled(true);
        let _layoutElementEffectLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutElementEffect);
        _layoutElementEffectLayoutComponent.setPercentWidthEnabled(true);
        _layoutElementEffectLayoutComponent.setPercentWidth(1);
        _layoutElementEffectLayoutComponent.setPercentHeightEnabled(true);
        _layoutElementEffectLayoutComponent.setPercentHeight(1);
        this._layoutElementEffect.setTouchEnabled(false);
        this._layoutElementEffect.setUnifySizeEnabled(false);
        this._layoutElementEffect.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutElementEffect, 1, 1);

        ///// # _layoutStateText
        this._layoutStateText = new ccui.Layout();
        this._layoutStateText.setName("_layoutStateText");
        this._layoutElementEffect.addChild(this._layoutStateText);
        this._layoutStateText.setCascadeOpacityEnabled(true);
        this._layoutStateText.setCascadeColorEnabled(true);
        let _layoutStateTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutStateText);
        _layoutStateTextLayoutComponent.setPercentWidthEnabled(true);
        _layoutStateTextLayoutComponent.setPercentWidth(1);
        _layoutStateTextLayoutComponent.setPercentHeightEnabled(true);
        _layoutStateTextLayoutComponent.setPercentHeight(1);
        this._layoutStateText.setTouchEnabled(false);
        this._layoutStateText.setUnifySizeEnabled(false);
        this._layoutStateText.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutStateText, 1, 1);

        ///// # _imgTextWaiting
        this._imgTextWaiting = new ccui.ImageView();
        this._imgTextWaiting.setName("_imgTextWaiting");
        this._layoutStateText.addChild(this._imgTextWaiting);
        this._imgTextWaiting.setCascadeOpacityEnabled(true);
        this._imgTextWaiting.setCascadeColorEnabled(true);
        this._imgTextWaiting.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTextWaiting, 0.5, 0.5);
        this._imgTextWaiting.setVisible(false);
        let _imgTextWaitingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTextWaiting);
        _imgTextWaitingLayoutComponent.setPositionPercentXEnabled(true);
        _imgTextWaitingLayoutComponent.setPositionPercentX(0.5);
        _imgTextWaitingLayoutComponent.setPositionPercentYEnabled(true);
        _imgTextWaitingLayoutComponent.setPositionPercentY(0.5);
        this._imgTextWaiting.loadTexture("texts/gourd-crab/Waiting.png", 1);
        this._imgTextWaiting.setTouchEnabled(false);

        ///// # _imgTextStart
        this._imgTextStart = new ccui.ImageView();
        this._imgTextStart.setName("_imgTextStart");
        this._layoutStateText.addChild(this._imgTextStart);
        this._imgTextStart.setCascadeOpacityEnabled(true);
        this._imgTextStart.setCascadeColorEnabled(true);
        this._imgTextStart.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTextStart, 0.5, 0.5);
        this._imgTextStart.setVisible(false);
        let _imgTextStartLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTextStart);
        _imgTextStartLayoutComponent.setPositionPercentXEnabled(true);
        _imgTextStartLayoutComponent.setPositionPercentX(0.5);
        _imgTextStartLayoutComponent.setPositionPercentYEnabled(true);
        _imgTextStartLayoutComponent.setPositionPercentY(0.5);
        this._imgTextStart.loadTexture("texts/minigames/LetsPlay_01.png", 1);
        this._imgTextStart.setTouchEnabled(false);

        ///// # _imgTextResult
        this._imgTextResult = new ccui.ImageView();
        this._imgTextResult.setName("_imgTextResult");
        this._layoutStateText.addChild(this._imgTextResult);
        this._imgTextResult.setCascadeOpacityEnabled(true);
        this._imgTextResult.setCascadeColorEnabled(true);
        this._imgTextResult.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTextResult, 0.5, 0.5);
        this._imgTextResult.setVisible(false);
        let _imgTextResultLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTextResult);
        _imgTextResultLayoutComponent.setPositionPercentXEnabled(true);
        _imgTextResultLayoutComponent.setPositionPercentX(0.5);
        _imgTextResultLayoutComponent.setPositionPercentYEnabled(true);
        _imgTextResultLayoutComponent.setPositionPercentY(0.5);
        this._imgTextResult.loadTexture("texts/gourd-crab/ShowTime.png", 1);
        this._imgTextResult.setTouchEnabled(false);

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

        ///// # _layoutResult
        this._layoutResult = new ccui.Layout();
        this._layoutResult.setName("_layoutResult");
        this._layoutRoot.addChild(this._layoutResult);
        this._layoutResult.setCascadeOpacityEnabled(true);
        this._layoutResult.setCascadeColorEnabled(true);
        let _layoutResultLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutResult);
        _layoutResultLayoutComponent.setPercentWidthEnabled(true);
        _layoutResultLayoutComponent.setPercentWidth(1);
        _layoutResultLayoutComponent.setPercentHeightEnabled(true);
        _layoutResultLayoutComponent.setPercentHeight(1);
        this._layoutResult.setTouchEnabled(false);
        this._layoutResult.setUnifySizeEnabled(false);
        this._layoutResult.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutResult, 1, 1);

        ///// # _resultWidget
        this._resultWidget = new GourdCrabResultWidget();
        this._resultWidget.setName("_resultWidget");
        this._layoutResult.addChild(this._resultWidget);
        this._resultWidget.setCascadeOpacityEnabled(true);
        this._resultWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._resultWidget, 0.5, 0.8143);
        this._resultWidget.setScale(0.9, 0.9);
        let _resultWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._resultWidget);
        _resultWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _resultWidgetLayoutComponent.setPositionPercentX(0.5);

        ///// # _layoutTutorial
        this._layoutTutorial = new ccui.Layout();
        this._layoutTutorial.setName("_layoutTutorial");
        this._layoutRoot.addChild(this._layoutTutorial);
        this._layoutTutorial.setCascadeOpacityEnabled(true);
        this._layoutTutorial.setCascadeColorEnabled(true);
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
        UIUtils.initFullScreenBackground(this._layoutTutorialBackground);

        ///// # _layoutTutorialDoor
        this._layoutTutorialDoor = new ccui.Layout();
        this._layoutTutorialDoor.setName("_layoutTutorialDoor");
        this._layoutTutorial.addChild(this._layoutTutorialDoor);
        this._layoutTutorialDoor.setCascadeOpacityEnabled(true);
        this._layoutTutorialDoor.setCascadeColorEnabled(true);
        this._layoutTutorialDoor.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutTutorialDoor, 0.3957, 0.5803);
        let _layoutTutorialDoorLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTutorialDoor);
        this._layoutTutorialDoor.setTouchEnabled(false);
        this._layoutTutorialDoor.setUnifySizeEnabled(false);
        this._layoutTutorialDoor.ignoreContentAdaptWithSize(false);
        this._layoutTutorialDoor.setContentSize(cc.size(174, 100));

        ///// # _imgBubbleBackgroundTutorialDoor
        this._imgBubbleBackgroundTutorialDoor = new ccui.ImageView();
        this._imgBubbleBackgroundTutorialDoor.setName("_imgBubbleBackgroundTutorialDoor");
        this._layoutTutorialDoor.addChild(this._imgBubbleBackgroundTutorialDoor);
        this._imgBubbleBackgroundTutorialDoor.setCascadeOpacityEnabled(true);
        this._imgBubbleBackgroundTutorialDoor.setCascadeColorEnabled(true);
        this._imgBubbleBackgroundTutorialDoor.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBubbleBackgroundTutorialDoor, 0.5, 1);
        this._imgBubbleBackgroundTutorialDoor.setFlippedX(true);
        let _imgBubbleBackgroundTutorialDoorLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBubbleBackgroundTutorialDoor);
        _imgBubbleBackgroundTutorialDoorLayoutComponent.setPositionPercentXEnabled(true);
        _imgBubbleBackgroundTutorialDoorLayoutComponent.setPositionPercentX(0.5);
        _imgBubbleBackgroundTutorialDoorLayoutComponent.setPositionPercentYEnabled(true);
        _imgBubbleBackgroundTutorialDoorLayoutComponent.setPositionPercentY(1);
        _imgBubbleBackgroundTutorialDoorLayoutComponent.setPercentWidthEnabled(true);
        _imgBubbleBackgroundTutorialDoorLayoutComponent.setPercentWidth(1);
        this._imgBubbleBackgroundTutorialDoor.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgBubbleBackgroundTutorialDoor.setUnifySizeEnabled(false);
        this._imgBubbleBackgroundTutorialDoor.ignoreContentAdaptWithSize(false);
        this._imgBubbleBackgroundTutorialDoor.setScale9Enabled(true);
        this._imgBubbleBackgroundTutorialDoor.setCapInsets(cc.rect(57, 33, 60, 30));
        ck.UIUtils.setWidthPercent(this._imgBubbleBackgroundTutorialDoor, 1);
        this._imgBubbleBackgroundTutorialDoor.setContentSize(cc.size(this._imgBubbleBackgroundTutorialDoor.width, 126));
        this._imgBubbleBackgroundTutorialDoor.setTouchEnabled(false);
        this._imgBubbleBackgroundTutorialDoor.setFlippedX(true);

        ///// # _txtBubbleTutorialDoor
        this._txtBubbleTutorialDoor = new ck.Text();
        this._txtBubbleTutorialDoor.setName("_txtBubbleTutorialDoor");
        this._layoutTutorialDoor.addChild(this._txtBubbleTutorialDoor);
        this._txtBubbleTutorialDoor.setCascadeOpacityEnabled(true);
        this._txtBubbleTutorialDoor.setCascadeColorEnabled(true);
        this._txtBubbleTutorialDoor.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBubbleTutorialDoor, 0.5, 0.5);
        let _txtBubbleTutorialDoorLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBubbleTutorialDoor);
        _txtBubbleTutorialDoorLayoutComponent.setPositionPercentXEnabled(true);
        _txtBubbleTutorialDoorLayoutComponent.setPositionPercentX(0.5);
        _txtBubbleTutorialDoorLayoutComponent.setPositionPercentYEnabled(true);
        _txtBubbleTutorialDoorLayoutComponent.setPositionPercentY(0.5);
        _txtBubbleTutorialDoorLayoutComponent.setPercentWidthEnabled(true);
        _txtBubbleTutorialDoorLayoutComponent.setPercentWidth(0.9);
        _txtBubbleTutorialDoorLayoutComponent.setPercentHeightEnabled(true);
        _txtBubbleTutorialDoorLayoutComponent.setPercentHeight(0.9);
        this._txtBubbleTutorialDoor.setTouchEnabled(false);
        this._txtBubbleTutorialDoor.setUnifySizeEnabled(false);
        this._txtBubbleTutorialDoor.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtBubbleTutorialDoor, 0.9, 0.9);
        this._txtBubbleTutorialDoor.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBubbleTutorialDoor.setDefaultFontSize(30);
        this._txtBubbleTutorialDoor.setString(gm.localize.getText("TXT_CLICK_TO_BET"));
        this._txtBubbleTutorialDoor.setTextHorizontalAlignment(1);
        this._txtBubbleTutorialDoor.setTextVerticalAlignment(1);

        ///// # _layoutTutorialBet
        this._layoutTutorialBet = new ccui.Layout();
        this._layoutTutorialBet.setName("_layoutTutorialBet");
        this._layoutTutorial.addChild(this._layoutTutorialBet);
        this._layoutTutorialBet.setCascadeOpacityEnabled(true);
        this._layoutTutorialBet.setCascadeColorEnabled(true);
        this._layoutTutorialBet.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutTutorialBet, 0.2854, 0.2437);
        let _layoutTutorialBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTutorialBet);
        this._layoutTutorialBet.setTouchEnabled(false);
        this._layoutTutorialBet.setUnifySizeEnabled(false);
        this._layoutTutorialBet.ignoreContentAdaptWithSize(false);
        this._layoutTutorialBet.setContentSize(cc.size(174, 100));

        ///// # _imgBubbleBackgroundTutorialBet
        this._imgBubbleBackgroundTutorialBet = new ccui.ImageView();
        this._imgBubbleBackgroundTutorialBet.setName("_imgBubbleBackgroundTutorialBet");
        this._layoutTutorialBet.addChild(this._imgBubbleBackgroundTutorialBet);
        this._imgBubbleBackgroundTutorialBet.setCascadeOpacityEnabled(true);
        this._imgBubbleBackgroundTutorialBet.setCascadeColorEnabled(true);
        this._imgBubbleBackgroundTutorialBet.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBubbleBackgroundTutorialBet, 0.5, 1);
        this._imgBubbleBackgroundTutorialBet.setFlippedX(true);
        let _imgBubbleBackgroundTutorialBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBubbleBackgroundTutorialBet);
        _imgBubbleBackgroundTutorialBetLayoutComponent.setPositionPercentXEnabled(true);
        _imgBubbleBackgroundTutorialBetLayoutComponent.setPositionPercentX(0.5);
        _imgBubbleBackgroundTutorialBetLayoutComponent.setPositionPercentYEnabled(true);
        _imgBubbleBackgroundTutorialBetLayoutComponent.setPositionPercentY(1);
        _imgBubbleBackgroundTutorialBetLayoutComponent.setPercentWidthEnabled(true);
        _imgBubbleBackgroundTutorialBetLayoutComponent.setPercentWidth(1);
        this._imgBubbleBackgroundTutorialBet.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgBubbleBackgroundTutorialBet.setUnifySizeEnabled(false);
        this._imgBubbleBackgroundTutorialBet.ignoreContentAdaptWithSize(false);
        this._imgBubbleBackgroundTutorialBet.setScale9Enabled(true);
        this._imgBubbleBackgroundTutorialBet.setCapInsets(cc.rect(57, 33, 60, 30));
        ck.UIUtils.setWidthPercent(this._imgBubbleBackgroundTutorialBet, 1);
        this._imgBubbleBackgroundTutorialBet.setContentSize(cc.size(this._imgBubbleBackgroundTutorialBet.width, 126));
        this._imgBubbleBackgroundTutorialBet.setTouchEnabled(false);
        this._imgBubbleBackgroundTutorialBet.setFlippedX(true);

        ///// # _txtBubbleTutorialBet
        this._txtBubbleTutorialBet = new ck.Text();
        this._txtBubbleTutorialBet.setName("_txtBubbleTutorialBet");
        this._layoutTutorialBet.addChild(this._txtBubbleTutorialBet);
        this._txtBubbleTutorialBet.setCascadeOpacityEnabled(true);
        this._txtBubbleTutorialBet.setCascadeColorEnabled(true);
        this._txtBubbleTutorialBet.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBubbleTutorialBet, 0.5, 0.5);
        let _txtBubbleTutorialBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBubbleTutorialBet);
        _txtBubbleTutorialBetLayoutComponent.setPositionPercentXEnabled(true);
        _txtBubbleTutorialBetLayoutComponent.setPositionPercentX(0.5);
        _txtBubbleTutorialBetLayoutComponent.setPositionPercentYEnabled(true);
        _txtBubbleTutorialBetLayoutComponent.setPositionPercentY(0.5);
        _txtBubbleTutorialBetLayoutComponent.setPercentWidthEnabled(true);
        _txtBubbleTutorialBetLayoutComponent.setPercentWidth(0.9);
        _txtBubbleTutorialBetLayoutComponent.setPercentHeightEnabled(true);
        _txtBubbleTutorialBetLayoutComponent.setPercentHeight(0.9);
        this._txtBubbleTutorialBet.setTouchEnabled(false);
        this._txtBubbleTutorialBet.setUnifySizeEnabled(false);
        this._txtBubbleTutorialBet.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtBubbleTutorialBet, 0.9, 0.9);
        this._txtBubbleTutorialBet.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBubbleTutorialBet.setDefaultFontSize(30);
        this._txtBubbleTutorialBet.setString(gm.localize.getText("TXT_CHANGE_THE_BET_HERE"));
        this._txtBubbleTutorialBet.setTextHorizontalAlignment(1);
        this._txtBubbleTutorialBet.setTextVerticalAlignment(1);

        ///// # _layoutTutorialRetract
        this._layoutTutorialRetract = new ccui.Layout();
        this._layoutTutorialRetract.setName("_layoutTutorialRetract");
        this._layoutTutorial.addChild(this._layoutTutorialRetract);
        this._layoutTutorialRetract.setCascadeOpacityEnabled(true);
        this._layoutTutorialRetract.setCascadeColorEnabled(true);
        this._layoutTutorialRetract.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutTutorialRetract, 0.698, 0.2725);
        let _layoutTutorialRetractLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTutorialRetract);
        this._layoutTutorialRetract.setTouchEnabled(false);
        this._layoutTutorialRetract.setUnifySizeEnabled(false);
        this._layoutTutorialRetract.ignoreContentAdaptWithSize(false);
        this._layoutTutorialRetract.setContentSize(cc.size(174, 100));

        ///// # _imgBubbleBackgroundTutorialRetract
        this._imgBubbleBackgroundTutorialRetract = new ccui.ImageView();
        this._imgBubbleBackgroundTutorialRetract.setName("_imgBubbleBackgroundTutorialRetract");
        this._layoutTutorialRetract.addChild(this._imgBubbleBackgroundTutorialRetract);
        this._imgBubbleBackgroundTutorialRetract.setCascadeOpacityEnabled(true);
        this._imgBubbleBackgroundTutorialRetract.setCascadeColorEnabled(true);
        this._imgBubbleBackgroundTutorialRetract.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBubbleBackgroundTutorialRetract, 0.5, 1);
        this._imgBubbleBackgroundTutorialRetract.setFlippedX(true);
        let _imgBubbleBackgroundTutorialRetractLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBubbleBackgroundTutorialRetract);
        _imgBubbleBackgroundTutorialRetractLayoutComponent.setPositionPercentXEnabled(true);
        _imgBubbleBackgroundTutorialRetractLayoutComponent.setPositionPercentX(0.5);
        _imgBubbleBackgroundTutorialRetractLayoutComponent.setPositionPercentYEnabled(true);
        _imgBubbleBackgroundTutorialRetractLayoutComponent.setPositionPercentY(1);
        _imgBubbleBackgroundTutorialRetractLayoutComponent.setPercentWidthEnabled(true);
        _imgBubbleBackgroundTutorialRetractLayoutComponent.setPercentWidth(1);
        this._imgBubbleBackgroundTutorialRetract.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgBubbleBackgroundTutorialRetract.setUnifySizeEnabled(false);
        this._imgBubbleBackgroundTutorialRetract.ignoreContentAdaptWithSize(false);
        this._imgBubbleBackgroundTutorialRetract.setScale9Enabled(true);
        this._imgBubbleBackgroundTutorialRetract.setCapInsets(cc.rect(57, 33, 60, 30));
        ck.UIUtils.setWidthPercent(this._imgBubbleBackgroundTutorialRetract, 1);
        this._imgBubbleBackgroundTutorialRetract.setContentSize(cc.size(this._imgBubbleBackgroundTutorialRetract.width, 126));
        this._imgBubbleBackgroundTutorialRetract.setTouchEnabled(false);
        this._imgBubbleBackgroundTutorialRetract.setFlippedX(true);

        ///// # _txtBubbleTutorialRetract
        this._txtBubbleTutorialRetract = new ck.Text();
        this._txtBubbleTutorialRetract.setName("_txtBubbleTutorialRetract");
        this._layoutTutorialRetract.addChild(this._txtBubbleTutorialRetract);
        this._txtBubbleTutorialRetract.setCascadeOpacityEnabled(true);
        this._txtBubbleTutorialRetract.setCascadeColorEnabled(true);
        this._txtBubbleTutorialRetract.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBubbleTutorialRetract, 0.5, 0.5);
        let _txtBubbleTutorialRetractLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBubbleTutorialRetract);
        _txtBubbleTutorialRetractLayoutComponent.setPositionPercentXEnabled(true);
        _txtBubbleTutorialRetractLayoutComponent.setPositionPercentX(0.5);
        _txtBubbleTutorialRetractLayoutComponent.setPositionPercentYEnabled(true);
        _txtBubbleTutorialRetractLayoutComponent.setPositionPercentY(0.5);
        _txtBubbleTutorialRetractLayoutComponent.setPercentWidthEnabled(true);
        _txtBubbleTutorialRetractLayoutComponent.setPercentWidth(0.9);
        _txtBubbleTutorialRetractLayoutComponent.setPercentHeightEnabled(true);
        _txtBubbleTutorialRetractLayoutComponent.setPercentHeight(0.9);
        this._txtBubbleTutorialRetract.setTouchEnabled(false);
        this._txtBubbleTutorialRetract.setUnifySizeEnabled(false);
        this._txtBubbleTutorialRetract.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtBubbleTutorialRetract, 0.9, 0.9);
        this._txtBubbleTutorialRetract.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBubbleTutorialRetract.setDefaultFontSize(30);
        this._txtBubbleTutorialRetract.setString(gm.localize.getText("TXT_WITHDRAW_COIN_GEM"));
        this._txtBubbleTutorialRetract.setTextHorizontalAlignment(1);
        this._txtBubbleTutorialRetract.setTextVerticalAlignment(1);

        ///// # _layoutTutorialResult
        this._layoutTutorialResult = new ccui.Layout();
        this._layoutTutorialResult.setName("_layoutTutorialResult");
        this._layoutTutorial.addChild(this._layoutTutorialResult);
        this._layoutTutorialResult.setCascadeOpacityEnabled(true);
        this._layoutTutorialResult.setCascadeColorEnabled(true);
        this._layoutTutorialResult.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutTutorialResult, 0.3188, 0.7131);
        let _layoutTutorialResultLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTutorialResult);
        this._layoutTutorialResult.setTouchEnabled(false);
        this._layoutTutorialResult.setUnifySizeEnabled(false);
        this._layoutTutorialResult.ignoreContentAdaptWithSize(false);
        this._layoutTutorialResult.setContentSize(cc.size(174, 100));

        ///// # _imgBubbleBackgroundTutorialResult
        this._imgBubbleBackgroundTutorialResult = new ccui.ImageView();
        this._imgBubbleBackgroundTutorialResult.setName("_imgBubbleBackgroundTutorialResult");
        this._layoutTutorialResult.addChild(this._imgBubbleBackgroundTutorialResult);
        this._imgBubbleBackgroundTutorialResult.setCascadeOpacityEnabled(true);
        this._imgBubbleBackgroundTutorialResult.setCascadeColorEnabled(true);
        this._imgBubbleBackgroundTutorialResult.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBubbleBackgroundTutorialResult, 0.5, 0);
        this._imgBubbleBackgroundTutorialResult.setFlippedX(true);
        this._imgBubbleBackgroundTutorialResult.setFlippedY(true);
        let _imgBubbleBackgroundTutorialResultLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBubbleBackgroundTutorialResult);
        _imgBubbleBackgroundTutorialResultLayoutComponent.setPositionPercentXEnabled(true);
        _imgBubbleBackgroundTutorialResultLayoutComponent.setPositionPercentX(0.5);
        _imgBubbleBackgroundTutorialResultLayoutComponent.setPositionPercentYEnabled(true);
        _imgBubbleBackgroundTutorialResultLayoutComponent.setPositionPercentY(0);
        _imgBubbleBackgroundTutorialResultLayoutComponent.setPercentWidthEnabled(true);
        _imgBubbleBackgroundTutorialResultLayoutComponent.setPercentWidth(1);
        this._imgBubbleBackgroundTutorialResult.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgBubbleBackgroundTutorialResult.setUnifySizeEnabled(false);
        this._imgBubbleBackgroundTutorialResult.ignoreContentAdaptWithSize(false);
        this._imgBubbleBackgroundTutorialResult.setScale9Enabled(true);
        this._imgBubbleBackgroundTutorialResult.setCapInsets(cc.rect(57, 33, 60, 30));
        ck.UIUtils.setWidthPercent(this._imgBubbleBackgroundTutorialResult, 1);
        this._imgBubbleBackgroundTutorialResult.setContentSize(cc.size(this._imgBubbleBackgroundTutorialResult.width, 126));
        this._imgBubbleBackgroundTutorialResult.setTouchEnabled(false);
        this._imgBubbleBackgroundTutorialResult.setFlippedX(true);
        this._imgBubbleBackgroundTutorialResult.setFlippedY(true);

        ///// # _txtBubbleTutorialResult
        this._txtBubbleTutorialResult = new ck.Text();
        this._txtBubbleTutorialResult.setName("_txtBubbleTutorialResult");
        this._layoutTutorialResult.addChild(this._txtBubbleTutorialResult);
        this._txtBubbleTutorialResult.setCascadeOpacityEnabled(true);
        this._txtBubbleTutorialResult.setCascadeColorEnabled(true);
        this._txtBubbleTutorialResult.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBubbleTutorialResult, 0.5, 0.5);
        let _txtBubbleTutorialResultLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBubbleTutorialResult);
        _txtBubbleTutorialResultLayoutComponent.setPositionPercentXEnabled(true);
        _txtBubbleTutorialResultLayoutComponent.setPositionPercentX(0.5);
        _txtBubbleTutorialResultLayoutComponent.setPositionPercentYEnabled(true);
        _txtBubbleTutorialResultLayoutComponent.setPositionPercentY(0.5);
        _txtBubbleTutorialResultLayoutComponent.setPercentWidthEnabled(true);
        _txtBubbleTutorialResultLayoutComponent.setPercentWidth(0.9);
        _txtBubbleTutorialResultLayoutComponent.setPercentHeightEnabled(true);
        _txtBubbleTutorialResultLayoutComponent.setPercentHeight(0.9);
        this._txtBubbleTutorialResult.setTouchEnabled(false);
        this._txtBubbleTutorialResult.setUnifySizeEnabled(false);
        this._txtBubbleTutorialResult.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtBubbleTutorialResult, 0.9, 0.9);
        this._txtBubbleTutorialResult.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBubbleTutorialResult.setDefaultFontSize(28);
        this._txtBubbleTutorialResult.setString(gm.localize.getText("TXT_RESULT_AND_TIME_REMAINING"));
        this._txtBubbleTutorialResult.setTextHorizontalAlignment(1);
        this._txtBubbleTutorialResult.setTextVerticalAlignment(1);

        ///// # _chatPopup
        this._chatPopup = new ChatPopup();
        this._chatPopup.setName("_chatPopup");
        this._layoutRoot.addChild(this._chatPopup);
        this._chatPopup.setCascadeOpacityEnabled(true);
        this._chatPopup.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._chatPopup, 0.5, 0.5);
        let _chatPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._chatPopup);
        _chatPopupLayoutComponent.setPositionPercentXEnabled(true);
        _chatPopupLayoutComponent.setPositionPercentX(0.5);
        _chatPopupLayoutComponent.setPositionPercentYEnabled(true);
        _chatPopupLayoutComponent.setPositionPercentY(0.5);

        ///// # _interactPopup
        this._interactPopup = new InteractPopup();
        this._interactPopup.setName("_interactPopup");
        this._layoutRoot.addChild(this._interactPopup);
        this._interactPopup.setCascadeOpacityEnabled(true);
        this._interactPopup.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._interactPopup, 0.5, 0.5);
        let _interactPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._interactPopup);
        _interactPopupLayoutComponent.setPositionPercentXEnabled(true);
        _interactPopupLayoutComponent.setPositionPercentX(0.5);
        _interactPopupLayoutComponent.setPositionPercentYEnabled(true);
        _interactPopupLayoutComponent.setPositionPercentY(0.5);

        ///// # _nodeX2Icon
        this._nodeX2Icon = new cc.Node();
        this._nodeX2Icon.setName("_nodeX2Icon");
        this._layoutRoot.addChild(this._nodeX2Icon);
        this._nodeX2Icon.setCascadeOpacityEnabled(true);
        this._nodeX2Icon.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeX2Icon, 0.052, 0.1647);
        let _nodeX2IconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeX2Icon);
        _nodeX2IconLayoutComponent.setPositionPercentXEnabled(true);
        _nodeX2IconLayoutComponent.setPositionPercentX(0.052);
        _nodeX2IconLayoutComponent.setPositionPercentYEnabled(true);
        _nodeX2IconLayoutComponent.setPositionPercentY(0.1647);

        ///// # _nodeTrophyProgress
        this._nodeTrophyProgress = new cc.Node();
        this._nodeTrophyProgress.setName("_nodeTrophyProgress");
        this._layoutRoot.addChild(this._nodeTrophyProgress);
        this._nodeTrophyProgress.setCascadeOpacityEnabled(true);
        this._nodeTrophyProgress.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeTrophyProgress, 0.5, 0.26);
        let _nodeTrophyProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeTrophyProgress);
        _nodeTrophyProgressLayoutComponent.setPositionPercentXEnabled(true);
        _nodeTrophyProgressLayoutComponent.setPositionPercentX(0.5);
        _nodeTrophyProgressLayoutComponent.setPositionPercentYEnabled(true);
        _nodeTrophyProgressLayoutComponent.setPositionPercentY(0.26);

    },


    playCCSAnimNpcHint: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimNpcHint();
    
        let _layoutHintLetsBetAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(30 / (60 * speed), 1, 1).easing(cc.easeBackOut()),
                    cc.scaleTo(120 / (60 * speed), 1, 1),
                    cc.scaleTo(30 / (60 * speed), 0.001, 0.001).easing(cc.easeBackIn())
                ),
                cc.sequence(
                    cc.rotateBy(30 / (60 * speed), 135, 135).easing(cc.easeBackOut()),
                    cc.rotateBy(120 / (60 * speed), 0, 0),
                    cc.rotateBy(30 / (60 * speed), -135, -135).easing(cc.easeBackIn())
                ),
                cc.sequence(
                    cc.fadeTo(30 / (60 * speed), 255),
                    cc.fadeTo(120 / (60 * speed), 255),
                    cc.fadeTo(30 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._layoutHintLetsBet.setScale(0.001, 0.001);
                this._layoutHintLetsBet.setRotation(-135);
                this._layoutHintLetsBet.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _layoutHintLetsBetAction = _layoutHintLetsBetAction.repeatForever();
        } else _layoutHintLetsBetAction = cc.sequence(
            cc.delayTime(delay),
            _layoutHintLetsBetAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._layoutHintLetsBet.runAction(_layoutHintLetsBetAction);
    },

    resetCCSAnimNpcHint: function () {
        this._layoutHintLetsBet.stopAllActions();
        this._layoutHintLetsBet.setScale(0.001, 0.001);
        this._layoutHintLetsBet.setRotation(-135);
        this._layoutHintLetsBet.setOpacity(0);
    }
});

/**
 * Create GourdCrabLayer
 * @returns {_ccs.GourdCrabLayer}
 */
_ccs.GourdCrabLayer.create = function () {
    return new _ccs.GourdCrabLayer();
};
