/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.BingoLayer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.BingoLayer = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutBackground: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ccui.ImageView} */
    _imgTableBackground: null,
    /** @type {ccui.ImageView} */
    _imgBetCircle: null,
    /** @type {ccui.Layout} */
    _layoutHint: null,
    /** @type {ccui.ImageView} */
    _imgTextHint: null,
    /** @type {ccui.ImageView} */
    _imgHint01: null,
    /** @type {ccui.ImageView} */
    _imgHint02: null,
    /** @type {ccui.ImageView} */
    _imgHandHint: null,
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
    /** @type {cc.Node} */
    _nodeX2Icon: null,
    /** @type {ck.OfferIconGrid} */
    _gridOfferIcons: null,
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
    _layoutHighlight: null,
    /** @type {ccui.Layout} */
    _layoutPlayer: null,
    /** @type {ccui.Layout} */
    _layoutPlayerLeft: null,
    /** @type {BingoPlayerWidget} */
    _playerWidget00: null,
    /** @type {BingoPlayerWidget} */
    _playerWidget02: null,
    /** @type {BingoPlayerWidget} */
    _playerWidget04: null,
    /** @type {BingoPlayerWidget} */
    _playerWidget06: null,
    /** @type {ccui.Layout} */
    _layoutPlayerRight: null,
    /** @type {BingoPlayerWidget} */
    _playerWidget01: null,
    /** @type {BingoPlayerWidget} */
    _playerWidget03: null,
    /** @type {BingoPlayerWidget} */
    _playerWidget05: null,
    /** @type {BingoPlayerWidget} */
    _playerWidget07: null,
    /** @type {ccui.Layout} */
    _layoutUser: null,
    /** @type {BingoUserWidget} */
    _userWidget: null,
    /** @type {ccui.Layout} */
    _layoutBall: null,
    /** @type {ccui.Layout} */
    _layoutNPC: null,
    /** @type {ccui.ImageView} */
    _imgChairBackground: null,
    /** @type {ccui.ImageView} */
    _imgNPC: null,
    /** @type {ccui.Layout} */
    _layoutHintLetsBet: null,
    /** @type {ccui.ImageView} */
    _imgBubbleBackgroundHintLetsBet: null,
    /** @type {ck.Text} */
    _txtBubbleHintLetsBet: null,
    /** @type {ccui.ImageView} */
    _imgBallBackground: null,
    /** @type {ck.Text} */
    _txtWaitingOtherPlayer: null,
    /** @type {ccui.Layout} */
    _layoutBet: null,
    /** @type {ck.Text} */
    _txtRound: null,
    /** @type {ccui.Layout} */
    _layoutListGoldBetIcon: null,
    /** @type {ccui.Layout} */
    _layoutGoldWin: null,
    /** @type {ccui.ImageView} */
    _imgGoldWinBackground: null,
    /** @type {ck.Text} */
    _txtGoldWin: null,
    /** @type {ccui.Layout} */
    _layoutButtonBet: null,
    /** @type {BingoTimerWidget} */
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
    _layoutEffect: null,
    /** @type {BingoEffectWinWidget} */
    _effectWinWidget: null,
    /** @type {BingoEffectLoseWidget} */
    _effectLoseWidget: null,
    /** @type {ccui.Layout} */
    _layoutTutorial: null,
    /** @type {ccui.Layout} */
    _layoutTutorialBackground: null,
    /** @type {ccui.Layout} */
    _layoutTutorialBetButton: null,
    /** @type {ccui.ImageView} */
    _imgBubbleBackgroundTutorialBetButton: null,
    /** @type {ck.Text} */
    _txtBubbleTutorialBetButton: null,
    /** @type {BingoUserWidget} */
    _userWidgetFake: null,
    /** @type {ccui.ImageView} */
    _imgTutorialNumbers: null,
    /** @type {ck.Text} */
    _txtTutorialNumbers: null,
    /** @type {ccui.Layout} */
    _layoutTutorialTicket: null,
    /** @type {ccui.ImageView} */
    _imgBubbleBackgroundTutorialTicket: null,
    /** @type {ck.Text} */
    _txtBubbleTutorialTicket: null,
    /** @type {ChatPopup} */
    _chatPopup: null,
    /** @type {InteractPopup} */
    _interactPopup: null,
    /** @type {cc.Node} */
    _nodeTrophyProgress: null,


    /**
     * _ccs.BingoLayer constructor
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
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.5);
        if (!PlatformUtils.hasNotch()) {
            let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
            _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
            _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
            _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
            _imgBackgroundLayoutComponent.setPositionPercentY(0.5);
            _imgBackgroundLayoutComponent.setPercentWidthEnabled(true);
            _imgBackgroundLayoutComponent.setPercentWidth(1);
            _imgBackgroundLayoutComponent.setPercentHeightEnabled(true);
            _imgBackgroundLayoutComponent.setPercentHeight(1);
        }
        this._imgBackground.loadTexture("sprites/backgrounds/Bingo.png", 0);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBackground, 1, 1);
        this._imgBackground.setTouchEnabled(false);
        UIUtils.initFullScreenBackground(this._imgBackground);

        ///// # _imgTableBackground
        this._imgTableBackground = new ccui.ImageView();
        this._imgTableBackground.setName("_imgTableBackground");
        this._layoutBackground.addChild(this._imgTableBackground);
        this._imgTableBackground.setCascadeOpacityEnabled(true);
        this._imgTableBackground.setCascadeColorEnabled(true);
        this._imgTableBackground.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgTableBackground, 0.4802, 0.7251);
        let _imgTableBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTableBackground);
        _imgTableBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgTableBackgroundLayoutComponent.setPositionPercentY(0.7251);
        _imgTableBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgTableBackgroundLayoutComponent.setPercentHeight(1.029);
        this._imgTableBackground.loadTexture("bingo/ui/Table.png", 1);
        this._imgTableBackground.setUnifySizeEnabled(false);
        this._imgTableBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this._imgTableBackground, 1.029);
        this._imgTableBackground.setContentSize(cc.size(1065, this._imgTableBackground.height));
        this._imgTableBackground.setTouchEnabled(false);

        ///// # _imgBetCircle
        this._imgBetCircle = new ccui.ImageView();
        this._imgBetCircle.setName("_imgBetCircle");
        this._layoutBackground.addChild(this._imgBetCircle);
        this._imgBetCircle.setCascadeOpacityEnabled(true);
        this._imgBetCircle.setCascadeColorEnabled(true);
        this._imgBetCircle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBetCircle, 0.5, 0.47);
        let _imgBetCircleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBetCircle);
        _imgBetCircleLayoutComponent.setPositionPercentXEnabled(true);
        _imgBetCircleLayoutComponent.setPositionPercentX(0.5);
        _imgBetCircleLayoutComponent.setPositionPercentYEnabled(true);
        _imgBetCircleLayoutComponent.setPositionPercentY(0.47);
        this._imgBetCircle.loadTexture("bingo/ui/EffectLetsBet_02.png", 1);
        this._imgBetCircle.setUnifySizeEnabled(false);
        this._imgBetCircle.ignoreContentAdaptWithSize(false);
        this._imgBetCircle.setContentSize(cc.size(196, 196));
        this._imgBetCircle.setTouchEnabled(false);

        ///// # _layoutHint
        this._layoutHint = new ccui.Layout();
        this._layoutHint.setName("_layoutHint");
        this._layoutBackground.addChild(this._layoutHint);
        this._layoutHint.setCascadeOpacityEnabled(true);
        this._layoutHint.setCascadeColorEnabled(true);
        this._layoutHint.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutHint, 0.5, 0.47);
        let _layoutHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHint);
        _layoutHintLayoutComponent.setPositionPercentXEnabled(true);
        _layoutHintLayoutComponent.setPositionPercentX(0.5);
        _layoutHintLayoutComponent.setPositionPercentYEnabled(true);
        _layoutHintLayoutComponent.setPositionPercentY(0.47);
        this._layoutHint.setTouchEnabled(true);
        this._layoutHint.setUnifySizeEnabled(false);
        this._layoutHint.ignoreContentAdaptWithSize(false);
        this._layoutHint.setContentSize(cc.size(200, 200));

        ///// # _imgTextHint
        this._imgTextHint = new ccui.ImageView();
        this._imgTextHint.setName("_imgTextHint");
        this._layoutHint.addChild(this._imgTextHint);
        this._imgTextHint.setCascadeOpacityEnabled(true);
        this._imgTextHint.setCascadeColorEnabled(true);
        this._imgTextHint.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTextHint, 0.5, 0.5);
        let _imgTextHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTextHint);
        _imgTextHintLayoutComponent.setPositionPercentXEnabled(true);
        _imgTextHintLayoutComponent.setPositionPercentX(0.5);
        _imgTextHintLayoutComponent.setPositionPercentYEnabled(true);
        _imgTextHintLayoutComponent.setPositionPercentY(0.5);
        this._imgTextHint.loadTexture("texts/minigames/LetsPlay_02.png", 1);
        this._imgTextHint.setTouchEnabled(false);

        ///// # _imgHint01
        this._imgHint01 = new ccui.ImageView();
        this._imgHint01.setName("_imgHint01");
        this._layoutHint.addChild(this._imgHint01);
        this._imgHint01.setCascadeOpacityEnabled(true);
        this._imgHint01.setCascadeColorEnabled(true);
        this._imgHint01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHint01, 0.5, 0.5);
        this._imgHint01.setScale(1.4, 1.4);
        this._imgHint01.setOpacity(0);
        let _imgHint01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHint01);
        _imgHint01LayoutComponent.setPositionPercentXEnabled(true);
        _imgHint01LayoutComponent.setPositionPercentX(0.5);
        _imgHint01LayoutComponent.setPositionPercentYEnabled(true);
        _imgHint01LayoutComponent.setPositionPercentY(0.5);
        this._imgHint01.loadTexture("bingo/ui/EffectLetsBet_01.png", 1);
        this._imgHint01.setUnifySizeEnabled(false);
        this._imgHint01.ignoreContentAdaptWithSize(false);
        this._imgHint01.setContentSize(cc.size(226, 226));
        this._imgHint01.setTouchEnabled(false);

        ///// # _imgHint02
        this._imgHint02 = new ccui.ImageView();
        this._imgHint02.setName("_imgHint02");
        this._layoutHint.addChild(this._imgHint02);
        this._imgHint02.setCascadeOpacityEnabled(true);
        this._imgHint02.setCascadeColorEnabled(true);
        this._imgHint02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHint02, 0.5, 0.5);
        this._imgHint02.setScale(0.4, 0.4);
        this._imgHint02.setOpacity(0);
        let _imgHint02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHint02);
        _imgHint02LayoutComponent.setPositionPercentXEnabled(true);
        _imgHint02LayoutComponent.setPositionPercentX(0.5);
        _imgHint02LayoutComponent.setPositionPercentYEnabled(true);
        _imgHint02LayoutComponent.setPositionPercentY(0.5);
        this._imgHint02.loadTexture("bingo/ui/EffectLetsBet_01.png", 1);
        this._imgHint02.setUnifySizeEnabled(false);
        this._imgHint02.ignoreContentAdaptWithSize(false);
        this._imgHint02.setContentSize(cc.size(226, 226));
        this._imgHint02.setTouchEnabled(false);

        ///// # _imgHandHint
        this._imgHandHint = new ccui.ImageView();
        this._imgHandHint.setName("_imgHandHint");
        this._layoutHint.addChild(this._imgHandHint);
        this._imgHandHint.setCascadeOpacityEnabled(true);
        this._imgHandHint.setCascadeColorEnabled(true);
        this._imgHandHint.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHandHint, 1.02, -0.145);
        this._imgHandHint.setScale(0.8, 0.8);
        this._imgHandHint.setRotationX(135.0011);
        this._imgHandHint.setRotationY(134.9989);
        let _imgHandHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHandHint);
        this._imgHandHint.loadTexture("bingo/ui/HintHand.png", 1);
        this._imgHandHint.setUnifySizeEnabled(false);
        this._imgHandHint.ignoreContentAdaptWithSize(false);
        this._imgHandHint.setContentSize(cc.size(99, 137));
        this._imgHandHint.setTouchEnabled(false);

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
        ck.UIUtils.setPositionPercent(this._layoutChat, 0.08, 0.1174);
        let _layoutChatLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutChat);
        _layoutChatLayoutComponent.setPositionPercentXEnabled(true);
        _layoutChatLayoutComponent.setPositionPercentX(0.08);
        _layoutChatLayoutComponent.setPositionPercentYEnabled(true);
        _layoutChatLayoutComponent.setPositionPercentY(0.1174);
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
        ck.UIUtils.setPositionPercent(this._layoutExit, 0.08, 0.044);
        let _layoutExitLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutExit);
        _layoutExitLayoutComponent.setPositionPercentXEnabled(true);
        _layoutExitLayoutComponent.setPositionPercentX(0.08);
        _layoutExitLayoutComponent.setPositionPercentYEnabled(true);
        _layoutExitLayoutComponent.setPositionPercentY(0.044);
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

        ///// # _nodeX2Icon
        this._nodeX2Icon = new cc.Node();
        this._nodeX2Icon.setName("_nodeX2Icon");
        this._layoutUI.addChild(this._nodeX2Icon);
        this._nodeX2Icon.setCascadeOpacityEnabled(true);
        this._nodeX2Icon.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeX2Icon, 0.08, 0.19);
        let _nodeX2IconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeX2Icon);
        _nodeX2IconLayoutComponent.setPositionPercentXEnabled(true);
        _nodeX2IconLayoutComponent.setPositionPercentX(0.08);
        _nodeX2IconLayoutComponent.setPositionPercentYEnabled(true);
        _nodeX2IconLayoutComponent.setPositionPercentY(0.19);

        ///// # _gridOfferIcons
        this._gridOfferIcons = new ck.OfferIconGrid();
        this._gridOfferIcons.setName("_gridOfferIcons");
        this._layoutUI.addChild(this._gridOfferIcons);
        this._gridOfferIcons.setCascadeOpacityEnabled(true);
        this._gridOfferIcons.setCascadeColorEnabled(true);
        this._gridOfferIcons.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._gridOfferIcons, 0.9027, 0.9902);
        let _gridOfferIconsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridOfferIcons);
        _gridOfferIconsLayoutComponent.setPositionPercentXEnabled(true);
        _gridOfferIconsLayoutComponent.setPositionPercentX(0.9027);
        _gridOfferIconsLayoutComponent.setPositionPercentYEnabled(true);
        _gridOfferIconsLayoutComponent.setPositionPercentY(0.9902);

        ///// # _chatHistoryWidget
        this._chatHistoryWidget = new ChatHistoryWidget();
        this._chatHistoryWidget.setName("_chatHistoryWidget");
        this._layoutUI.addChild(this._chatHistoryWidget);
        this._chatHistoryWidget.setCascadeOpacityEnabled(true);
        this._chatHistoryWidget.setCascadeColorEnabled(true);
        this._chatHistoryWidget.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._chatHistoryWidget, 0.1706, 0.9187);
        let _chatHistoryWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._chatHistoryWidget);
        _chatHistoryWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _chatHistoryWidgetLayoutComponent.setPositionPercentY(0.9187);
        this._chatHistoryWidget.setUnifySizeEnabled(false);
        this._chatHistoryWidget.ignoreContentAdaptWithSize(false);
        this._chatHistoryWidget.setContentSize(cc.size(200, 150));
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
        this._imgBackground02ChatHistoryWidget.setContentSize(cc.size(202, 152));
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
        this._scrollViewChatMessages.setInnerContainerSize(cc.size(200, 150));
        this._scrollViewChatMessages.setDirection(1);

        ///// # _layoutChatMessages
        this._layoutChatMessages = new ccui.Layout();
        this._layoutChatMessages.setName("_layoutChatMessages");
        this._scrollViewChatMessages.addChild(this._layoutChatMessages);
        this._layoutChatMessages.setCascadeOpacityEnabled(true);
        this._layoutChatMessages.setCascadeColorEnabled(true);
        let _layoutChatMessagesLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutChatMessages);
        this._layoutChatMessages.setTouchEnabled(true);
        this._layoutChatMessages.setUnifySizeEnabled(false);
        this._layoutChatMessages.ignoreContentAdaptWithSize(false);
        this._layoutChatMessages.setContentSize(cc.size(200, 150));

        ///// # _txtChatMessages
        this._txtChatMessages = new ck.CustomRichTextExtend(cc.size(180, 130));
        this._txtChatMessages.setName("_txtChatMessages");
        this._layoutChatMessages.addChild(this._txtChatMessages);
        this._txtChatMessages.setCascadeOpacityEnabled(true);
        this._txtChatMessages.setCascadeColorEnabled(true);
        this._txtChatMessages.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._txtChatMessages, 0.5, 0.0667);
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
        this._layoutPlayerLeft.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutPlayerLeft, 0.15, 0.5);
        let _layoutPlayerLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPlayerLeft);
        _layoutPlayerLeftLayoutComponent.setPositionPercentXEnabled(true);
        _layoutPlayerLeftLayoutComponent.setPositionPercentX(0.15);
        _layoutPlayerLeftLayoutComponent.setPositionPercentYEnabled(true);
        _layoutPlayerLeftLayoutComponent.setPositionPercentY(0.5);
        _layoutPlayerLeftLayoutComponent.setPercentHeightEnabled(true);
        _layoutPlayerLeftLayoutComponent.setPercentHeight(1);
        this._layoutPlayerLeft.setTouchEnabled(false);
        this._layoutPlayerLeft.setUnifySizeEnabled(false);
        this._layoutPlayerLeft.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this._layoutPlayerLeft, 1);
        this._layoutPlayerLeft.setContentSize(cc.size(150, this._layoutPlayerLeft.height));

        ///// # _playerWidget00
        this._playerWidget00 = new BingoPlayerWidget();
        this._playerWidget00.setName("_playerWidget00");
        this._layoutPlayerLeft.addChild(this._playerWidget00);
        this._playerWidget00.setCascadeOpacityEnabled(true);
        this._playerWidget00.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._playerWidget00, 0.5, 0.3);
        let _playerWidget00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._playerWidget00);
        _playerWidget00LayoutComponent.setPositionPercentXEnabled(true);
        _playerWidget00LayoutComponent.setPositionPercentX(0.5);
        _playerWidget00LayoutComponent.setPositionPercentYEnabled(true);
        _playerWidget00LayoutComponent.setPositionPercentY(0.3);

        ///// # _playerWidget02
        this._playerWidget02 = new BingoPlayerWidget();
        this._playerWidget02.setName("_playerWidget02");
        this._layoutPlayerLeft.addChild(this._playerWidget02);
        this._playerWidget02.setCascadeOpacityEnabled(true);
        this._playerWidget02.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._playerWidget02, 0.5, 0.41);
        let _playerWidget02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._playerWidget02);
        _playerWidget02LayoutComponent.setPositionPercentXEnabled(true);
        _playerWidget02LayoutComponent.setPositionPercentX(0.5);
        _playerWidget02LayoutComponent.setPositionPercentYEnabled(true);
        _playerWidget02LayoutComponent.setPositionPercentY(0.41);

        ///// # _playerWidget04
        this._playerWidget04 = new BingoPlayerWidget();
        this._playerWidget04.setName("_playerWidget04");
        this._layoutPlayerLeft.addChild(this._playerWidget04);
        this._playerWidget04.setCascadeOpacityEnabled(true);
        this._playerWidget04.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._playerWidget04, 0.5, 0.52);
        let _playerWidget04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._playerWidget04);
        _playerWidget04LayoutComponent.setPositionPercentXEnabled(true);
        _playerWidget04LayoutComponent.setPositionPercentX(0.5);
        _playerWidget04LayoutComponent.setPositionPercentYEnabled(true);
        _playerWidget04LayoutComponent.setPositionPercentY(0.52);

        ///// # _playerWidget06
        this._playerWidget06 = new BingoPlayerWidget();
        this._playerWidget06.setName("_playerWidget06");
        this._layoutPlayerLeft.addChild(this._playerWidget06);
        this._playerWidget06.setCascadeOpacityEnabled(true);
        this._playerWidget06.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._playerWidget06, 0.5, 0.63);
        let _playerWidget06LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._playerWidget06);
        _playerWidget06LayoutComponent.setPositionPercentXEnabled(true);
        _playerWidget06LayoutComponent.setPositionPercentX(0.5);
        _playerWidget06LayoutComponent.setPositionPercentYEnabled(true);
        _playerWidget06LayoutComponent.setPositionPercentY(0.63);

        ///// # _layoutPlayerRight
        this._layoutPlayerRight = new ccui.Layout();
        this._layoutPlayerRight.setName("_layoutPlayerRight");
        this._layoutPlayer.addChild(this._layoutPlayerRight);
        this._layoutPlayerRight.setCascadeOpacityEnabled(true);
        this._layoutPlayerRight.setCascadeColorEnabled(true);
        this._layoutPlayerRight.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutPlayerRight, 0.85, 0.5);
        let _layoutPlayerRightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPlayerRight);
        _layoutPlayerRightLayoutComponent.setPositionPercentXEnabled(true);
        _layoutPlayerRightLayoutComponent.setPositionPercentX(0.85);
        _layoutPlayerRightLayoutComponent.setPositionPercentYEnabled(true);
        _layoutPlayerRightLayoutComponent.setPositionPercentY(0.5);
        _layoutPlayerRightLayoutComponent.setPercentHeightEnabled(true);
        _layoutPlayerRightLayoutComponent.setPercentHeight(1);
        this._layoutPlayerRight.setTouchEnabled(false);
        this._layoutPlayerRight.setUnifySizeEnabled(false);
        this._layoutPlayerRight.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this._layoutPlayerRight, 1);
        this._layoutPlayerRight.setContentSize(cc.size(150, this._layoutPlayerRight.height));

        ///// # _playerWidget01
        this._playerWidget01 = new BingoPlayerWidget();
        this._playerWidget01.setName("_playerWidget01");
        this._layoutPlayerRight.addChild(this._playerWidget01);
        this._playerWidget01.setCascadeOpacityEnabled(true);
        this._playerWidget01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._playerWidget01, 0.5, 0.3);
        let _playerWidget01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._playerWidget01);
        _playerWidget01LayoutComponent.setPositionPercentXEnabled(true);
        _playerWidget01LayoutComponent.setPositionPercentX(0.5);
        _playerWidget01LayoutComponent.setPositionPercentYEnabled(true);
        _playerWidget01LayoutComponent.setPositionPercentY(0.3);

        ///// # _playerWidget03
        this._playerWidget03 = new BingoPlayerWidget();
        this._playerWidget03.setName("_playerWidget03");
        this._layoutPlayerRight.addChild(this._playerWidget03);
        this._playerWidget03.setCascadeOpacityEnabled(true);
        this._playerWidget03.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._playerWidget03, 0.5, 0.41);
        let _playerWidget03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._playerWidget03);
        _playerWidget03LayoutComponent.setPositionPercentXEnabled(true);
        _playerWidget03LayoutComponent.setPositionPercentX(0.5);
        _playerWidget03LayoutComponent.setPositionPercentYEnabled(true);
        _playerWidget03LayoutComponent.setPositionPercentY(0.41);

        ///// # _playerWidget05
        this._playerWidget05 = new BingoPlayerWidget();
        this._playerWidget05.setName("_playerWidget05");
        this._layoutPlayerRight.addChild(this._playerWidget05);
        this._playerWidget05.setCascadeOpacityEnabled(true);
        this._playerWidget05.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._playerWidget05, 0.5, 0.52);
        let _playerWidget05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._playerWidget05);
        _playerWidget05LayoutComponent.setPositionPercentXEnabled(true);
        _playerWidget05LayoutComponent.setPositionPercentX(0.5);
        _playerWidget05LayoutComponent.setPositionPercentYEnabled(true);
        _playerWidget05LayoutComponent.setPositionPercentY(0.52);

        ///// # _playerWidget07
        this._playerWidget07 = new BingoPlayerWidget();
        this._playerWidget07.setName("_playerWidget07");
        this._layoutPlayerRight.addChild(this._playerWidget07);
        this._playerWidget07.setCascadeOpacityEnabled(true);
        this._playerWidget07.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._playerWidget07, 0.5, 0.63);
        let _playerWidget07LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._playerWidget07);
        _playerWidget07LayoutComponent.setPositionPercentXEnabled(true);
        _playerWidget07LayoutComponent.setPositionPercentX(0.5);
        _playerWidget07LayoutComponent.setPositionPercentYEnabled(true);
        _playerWidget07LayoutComponent.setPositionPercentY(0.63);

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
        this._userWidget = new BingoUserWidget();
        this._userWidget.setName("_userWidget");
        this._layoutUser.addChild(this._userWidget);
        this._userWidget.setCascadeOpacityEnabled(true);
        this._userWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._userWidget, 0.5, 0.09);
        let _userWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._userWidget);
        _userWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _userWidgetLayoutComponent.setPositionPercentX(0.5);
        _userWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _userWidgetLayoutComponent.setPositionPercentY(0.09);

        ///// # _layoutBall
        this._layoutBall = new ccui.Layout();
        this._layoutBall.setName("_layoutBall");
        this._layoutRoot.addChild(this._layoutBall);
        this._layoutBall.setCascadeOpacityEnabled(true);
        this._layoutBall.setCascadeColorEnabled(true);
        this._layoutBall.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutBall, 0.5, 0.6919);
        let _layoutBallLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBall);
        _layoutBallLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBallLayoutComponent.setPositionPercentX(0.5);
        _layoutBallLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBallLayoutComponent.setPositionPercentY(0.6919);
        this._layoutBall.setTouchEnabled(false);
        this._layoutBall.setUnifySizeEnabled(false);
        this._layoutBall.ignoreContentAdaptWithSize(false);
        this._layoutBall.setContentSize(cc.size(460, 350));

        ///// # _layoutNPC
        this._layoutNPC = new ccui.Layout();
        this._layoutNPC.setName("_layoutNPC");
        this._layoutBall.addChild(this._layoutNPC);
        this._layoutNPC.setCascadeOpacityEnabled(true);
        this._layoutNPC.setCascadeColorEnabled(true);
        this._layoutNPC.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutNPC, 0.5, 1);
        let _layoutNPCLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutNPC);
        _layoutNPCLayoutComponent.setPositionPercentXEnabled(true);
        _layoutNPCLayoutComponent.setPositionPercentX(0.5);
        _layoutNPCLayoutComponent.setPositionPercentYEnabled(true);
        _layoutNPCLayoutComponent.setPositionPercentY(1);
        _layoutNPCLayoutComponent.setPercentWidthEnabled(true);
        _layoutNPCLayoutComponent.setPercentWidth(1);
        this._layoutNPC.setTouchEnabled(false);
        this._layoutNPC.setUnifySizeEnabled(false);
        this._layoutNPC.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutNPC, 1);
        this._layoutNPC.setContentSize(cc.size(this._layoutNPC.width, 299.6046));
        this._layoutNPC.setClippingEnabled(true);

        ///// # _imgChairBackground
        this._imgChairBackground = new ccui.ImageView();
        this._imgChairBackground.setName("_imgChairBackground");
        this._layoutNPC.addChild(this._imgChairBackground);
        this._imgChairBackground.setCascadeOpacityEnabled(true);
        this._imgChairBackground.setCascadeColorEnabled(true);
        this._imgChairBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgChairBackground, 0.4, 0.4);
        let _imgChairBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgChairBackground);
        _imgChairBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgChairBackgroundLayoutComponent.setPositionPercentX(0.4);
        _imgChairBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgChairBackgroundLayoutComponent.setPositionPercentY(0.4);
        this._imgChairBackground.loadTexture("bingo/ui/Chair.png", 1);
        this._imgChairBackground.setUnifySizeEnabled(false);
        this._imgChairBackground.ignoreContentAdaptWithSize(false);
        this._imgChairBackground.setContentSize(cc.size(151, 152));
        this._imgChairBackground.setTouchEnabled(false);

        ///// # _imgNPC
        this._imgNPC = new ccui.ImageView();
        this._imgNPC.setName("_imgNPC");
        this._layoutNPC.addChild(this._imgNPC);
        this._imgNPC.setCascadeOpacityEnabled(true);
        this._imgNPC.setCascadeColorEnabled(true);
        this._imgNPC.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgNPC, 0.5, 1);
        this._imgNPC.setScale(0.65, 0.65);
        let _imgNPCLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNPC);
        _imgNPCLayoutComponent.setPositionPercentXEnabled(true);
        _imgNPCLayoutComponent.setPositionPercentX(0.5);
        _imgNPCLayoutComponent.setPositionPercentYEnabled(true);
        _imgNPCLayoutComponent.setPositionPercentY(1);
        this._imgNPC.loadTexture("bingo/ui/bingo_npc.png", 1);
        this._imgNPC.setUnifySizeEnabled(false);
        this._imgNPC.ignoreContentAdaptWithSize(false);
        this._imgNPC.setContentSize(cc.size(400, 400));
        this._imgNPC.setTouchEnabled(false);

        ///// # _layoutHintLetsBet
        this._layoutHintLetsBet = new ccui.Layout();
        this._layoutHintLetsBet.setName("_layoutHintLetsBet");
        this._layoutBall.addChild(this._layoutHintLetsBet);
        this._layoutHintLetsBet.setCascadeOpacityEnabled(true);
        this._layoutHintLetsBet.setCascadeColorEnabled(true);
        this._layoutHintLetsBet.setAnchorPoint(cc.p(0.1515, -0.2531));
        ck.UIUtils.setPositionPercent(this._layoutHintLetsBet, 0.6834, 0.5705);
        this._layoutHintLetsBet.setScale(0.001, 0.001);
        this._layoutHintLetsBet.setRotation(-135);
        this._layoutHintLetsBet.setOpacity(0);
        let _layoutHintLetsBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHintLetsBet);
        this._layoutHintLetsBet.setTouchEnabled(true);
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

        ///// # _imgBallBackground
        this._imgBallBackground = new ccui.ImageView();
        this._imgBallBackground.setName("_imgBallBackground");
        this._layoutBall.addChild(this._imgBallBackground);
        this._imgBallBackground.setCascadeOpacityEnabled(true);
        this._imgBallBackground.setCascadeColorEnabled(true);
        this._imgBallBackground.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgBallBackground, 0.5, 0);
        let _imgBallBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBallBackground);
        _imgBallBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBallBackgroundLayoutComponent.setPositionPercentX(0.5);
        this._imgBallBackground.loadTexture("bingo/ui/BoxNumberBackground.png", 1);
        this._imgBallBackground.setUnifySizeEnabled(false);
        this._imgBallBackground.ignoreContentAdaptWithSize(false);
        this._imgBallBackground.setContentSize(cc.size(452, 102));
        this._imgBallBackground.setTouchEnabled(false);

        ///// # _txtWaitingOtherPlayer
        this._txtWaitingOtherPlayer = new ck.Text();
        this._txtWaitingOtherPlayer.setName("_txtWaitingOtherPlayer");
        this._imgBallBackground.addChild(this._txtWaitingOtherPlayer);
        this._txtWaitingOtherPlayer.setCascadeOpacityEnabled(true);
        this._txtWaitingOtherPlayer.setCascadeColorEnabled(true);
        this._txtWaitingOtherPlayer.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtWaitingOtherPlayer, 0.5, 0.55);
        this._txtWaitingOtherPlayer.setTextColor(cc.color(252, 206, 0, 255));
        let _txtWaitingOtherPlayerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtWaitingOtherPlayer);
        _txtWaitingOtherPlayerLayoutComponent.setPositionPercentXEnabled(true);
        _txtWaitingOtherPlayerLayoutComponent.setPositionPercentX(0.5);
        _txtWaitingOtherPlayerLayoutComponent.setPositionPercentYEnabled(true);
        _txtWaitingOtherPlayerLayoutComponent.setPositionPercentY(0.55);
        this._txtWaitingOtherPlayer.setTouchEnabled(false);
        this._txtWaitingOtherPlayer.ignoreContentAdaptWithSize(true);
        this._txtWaitingOtherPlayer.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtWaitingOtherPlayer.setDefaultFontSize(30);
        this._txtWaitingOtherPlayer.setString(gm.localize.getText("TXT_WAITING_FOR_OTHER_PLAYER"));
        this._txtWaitingOtherPlayer.setTextHorizontalAlignment(0);
        this._txtWaitingOtherPlayer.setTextVerticalAlignment(0);
        this._txtWaitingOtherPlayer.enableShadow(cc.color(86, 47, 31, 255), cc.size(2, -2), 0);

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

        ///// # _txtRound
        this._txtRound = new ck.Text();
        this._txtRound.setName("_txtRound");
        this._layoutBet.addChild(this._txtRound);
        this._txtRound.setCascadeOpacityEnabled(true);
        this._txtRound.setCascadeColorEnabled(true);
        this._txtRound.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRound, 0.5, 0.67);
        this._txtRound.setTextColor(cc.color(252, 206, 0, 255));
        let _txtRoundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRound);
        _txtRoundLayoutComponent.setPositionPercentXEnabled(true);
        _txtRoundLayoutComponent.setPositionPercentX(0.5);
        _txtRoundLayoutComponent.setPositionPercentYEnabled(true);
        _txtRoundLayoutComponent.setPositionPercentY(0.67);
        this._txtRound.setTouchEnabled(false);
        this._txtRound.ignoreContentAdaptWithSize(true);
        this._txtRound.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtRound.setDefaultFontSize(40);
        this._txtRound.setString("Round 1");
        this._txtRound.setTextHorizontalAlignment(0);
        this._txtRound.setTextVerticalAlignment(0);
        this._txtRound.enableOutline(cc.color(86, 47, 31, 255), 1);
        this._txtRound.enableShadow(cc.color(86, 47, 31, 255), cc.size(2, -2), 0);

        ///// # _layoutListGoldBetIcon
        this._layoutListGoldBetIcon = new ccui.Layout();
        this._layoutListGoldBetIcon.setName("_layoutListGoldBetIcon");
        this._layoutBet.addChild(this._layoutListGoldBetIcon);
        this._layoutListGoldBetIcon.setCascadeOpacityEnabled(true);
        this._layoutListGoldBetIcon.setCascadeColorEnabled(true);
        this._layoutListGoldBetIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutListGoldBetIcon, 0.5, 0.47);
        let _layoutListGoldBetIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutListGoldBetIcon);
        _layoutListGoldBetIconLayoutComponent.setPositionPercentXEnabled(true);
        _layoutListGoldBetIconLayoutComponent.setPositionPercentX(0.5);
        _layoutListGoldBetIconLayoutComponent.setPositionPercentYEnabled(true);
        _layoutListGoldBetIconLayoutComponent.setPositionPercentY(0.47);
        this._layoutListGoldBetIcon.setTouchEnabled(false);
        this._layoutListGoldBetIcon.setUnifySizeEnabled(false);
        this._layoutListGoldBetIcon.ignoreContentAdaptWithSize(false);
        this._layoutListGoldBetIcon.setContentSize(cc.size(200, 200));

        ///// # _layoutGoldWin
        this._layoutGoldWin = new ccui.Layout();
        this._layoutGoldWin.setName("_layoutGoldWin");
        this._layoutBet.addChild(this._layoutGoldWin);
        this._layoutGoldWin.setCascadeOpacityEnabled(true);
        this._layoutGoldWin.setCascadeColorEnabled(true);
        this._layoutGoldWin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutGoldWin, 0.5, 0.59);
        let _layoutGoldWinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGoldWin);
        _layoutGoldWinLayoutComponent.setPositionPercentXEnabled(true);
        _layoutGoldWinLayoutComponent.setPositionPercentX(0.5);
        _layoutGoldWinLayoutComponent.setPositionPercentYEnabled(true);
        _layoutGoldWinLayoutComponent.setPositionPercentY(0.59);
        this._layoutGoldWin.setTouchEnabled(false);
        this._layoutGoldWin.setUnifySizeEnabled(false);
        this._layoutGoldWin.ignoreContentAdaptWithSize(false);
        this._layoutGoldWin.setContentSize(cc.size(250, 60));

        ///// # _imgGoldWinBackground
        this._imgGoldWinBackground = new ccui.ImageView();
        this._imgGoldWinBackground.setName("_imgGoldWinBackground");
        this._layoutGoldWin.addChild(this._imgGoldWinBackground);
        this._imgGoldWinBackground.setCascadeOpacityEnabled(true);
        this._imgGoldWinBackground.setCascadeColorEnabled(true);
        this._imgGoldWinBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGoldWinBackground, 0.5, 0.5);
        let _imgGoldWinBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGoldWinBackground);
        _imgGoldWinBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgGoldWinBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgGoldWinBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgGoldWinBackgroundLayoutComponent.setPositionPercentY(0.5);
        this._imgGoldWinBackground.loadTexture("bingo/ui/BoxGoldWin.png", 1);
        this._imgGoldWinBackground.setUnifySizeEnabled(false);
        this._imgGoldWinBackground.ignoreContentAdaptWithSize(false);
        this._imgGoldWinBackground.setScale9Enabled(true);
        this._imgGoldWinBackground.setCapInsets(cc.rect(35, 15, 37, 17));
        this._imgGoldWinBackground.setContentSize(cc.size(180, 47));
        this._imgGoldWinBackground.setTouchEnabled(false);

        ///// # _txtGoldWin
        this._txtGoldWin = new ck.Text();
        this._txtGoldWin.setName("_txtGoldWin");
        this._layoutGoldWin.addChild(this._txtGoldWin);
        this._txtGoldWin.setCascadeOpacityEnabled(true);
        this._txtGoldWin.setCascadeColorEnabled(true);
        this._txtGoldWin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGoldWin, 0.5, 0.5);
        this._txtGoldWin.setTextColor(cc.color(252, 206, 0, 255));
        let _txtGoldWinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGoldWin);
        _txtGoldWinLayoutComponent.setPositionPercentXEnabled(true);
        _txtGoldWinLayoutComponent.setPositionPercentX(0.5);
        _txtGoldWinLayoutComponent.setPositionPercentYEnabled(true);
        _txtGoldWinLayoutComponent.setPositionPercentY(0.5);
        this._txtGoldWin.setTouchEnabled(false);
        this._txtGoldWin.ignoreContentAdaptWithSize(true);
        this._txtGoldWin.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGoldWin.setDefaultFontSize(24);
        this._txtGoldWin.setTextHorizontalAlignment(0);
        this._txtGoldWin.setTextVerticalAlignment(0);

        ///// # _layoutButtonBet
        this._layoutButtonBet = new ccui.Layout();
        this._layoutButtonBet.setName("_layoutButtonBet");
        this._layoutBet.addChild(this._layoutButtonBet);
        this._layoutButtonBet.setCascadeOpacityEnabled(true);
        this._layoutButtonBet.setCascadeColorEnabled(true);
        this._layoutButtonBet.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutButtonBet, 0.5, 0.47);
        let _layoutButtonBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutButtonBet);
        _layoutButtonBetLayoutComponent.setPositionPercentXEnabled(true);
        _layoutButtonBetLayoutComponent.setPositionPercentX(0.5);
        _layoutButtonBetLayoutComponent.setPositionPercentYEnabled(true);
        _layoutButtonBetLayoutComponent.setPositionPercentY(0.47);
        this._layoutButtonBet.setTouchEnabled(true);
        this._layoutButtonBet.setUnifySizeEnabled(false);
        this._layoutButtonBet.ignoreContentAdaptWithSize(false);
        this._layoutButtonBet.setContentSize(cc.size(236, 236));

        ///// # _timerWidget
        this._timerWidget = new BingoTimerWidget();
        this._timerWidget.setName("_timerWidget");
        this._layoutBet.addChild(this._timerWidget);
        this._timerWidget.setCascadeOpacityEnabled(true);
        this._timerWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._timerWidget, 0.5, 0.655);
        this._timerWidget.setScale(0.8, 0.8);
        let _timerWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._timerWidget);
        _timerWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _timerWidgetLayoutComponent.setPositionPercentX(0.5);
        _timerWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _timerWidgetLayoutComponent.setPositionPercentY(0.655);

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
        this._imgTextWaiting.loadTexture("texts/minigames/Waiting_02.png", 1);
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
        this._imgTextResult.loadTexture("texts/minigames/PickUpBall.png", 1);
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

        ///// # _layoutEffect
        this._layoutEffect = new ccui.Layout();
        this._layoutEffect.setName("_layoutEffect");
        this._layoutRoot.addChild(this._layoutEffect);
        this._layoutEffect.setCascadeOpacityEnabled(true);
        this._layoutEffect.setCascadeColorEnabled(true);
        let _layoutEffectLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEffect);
        _layoutEffectLayoutComponent.setPercentWidthEnabled(true);
        _layoutEffectLayoutComponent.setPercentWidth(1);
        _layoutEffectLayoutComponent.setPercentHeightEnabled(true);
        _layoutEffectLayoutComponent.setPercentHeight(1);
        this._layoutEffect.setTouchEnabled(false);
        this._layoutEffect.setUnifySizeEnabled(false);
        this._layoutEffect.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutEffect, 1, 1);

        ///// # _effectWinWidget
        this._effectWinWidget = new BingoEffectWinWidget();
        this._effectWinWidget.setName("_effectWinWidget");
        this._layoutEffect.addChild(this._effectWinWidget);
        this._effectWinWidget.setCascadeOpacityEnabled(true);
        this._effectWinWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._effectWinWidget, 0.5, 0.5);
        let _effectWinWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._effectWinWidget);
        _effectWinWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _effectWinWidgetLayoutComponent.setPositionPercentX(0.5);
        _effectWinWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _effectWinWidgetLayoutComponent.setPositionPercentY(0.5);

        ///// # _effectLoseWidget
        this._effectLoseWidget = new BingoEffectLoseWidget();
        this._effectLoseWidget.setName("_effectLoseWidget");
        this._layoutEffect.addChild(this._effectLoseWidget);
        this._effectLoseWidget.setCascadeOpacityEnabled(true);
        this._effectLoseWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._effectLoseWidget, 0.5, 0.5);
        let _effectLoseWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._effectLoseWidget);
        _effectLoseWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _effectLoseWidgetLayoutComponent.setPositionPercentX(0.5);
        _effectLoseWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _effectLoseWidgetLayoutComponent.setPositionPercentY(0.5);

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
        this._layoutTutorialBackground.setBackGroundColorType(1);
        this._layoutTutorialBackground.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutTutorialBackground.setBackGroundColorOpacity(127);
        UIUtils.initFullScreenBackground(this._layoutTutorialBackground);

        ///// # _layoutTutorialBetButton
        this._layoutTutorialBetButton = new ccui.Layout();
        this._layoutTutorialBetButton.setName("_layoutTutorialBetButton");
        this._layoutTutorial.addChild(this._layoutTutorialBetButton);
        this._layoutTutorialBetButton.setCascadeOpacityEnabled(true);
        this._layoutTutorialBetButton.setCascadeColorEnabled(true);
        this._layoutTutorialBetButton.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutTutorialBetButton, 0.3957, 0.5803);
        let _layoutTutorialBetButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTutorialBetButton);
        this._layoutTutorialBetButton.setTouchEnabled(false);
        this._layoutTutorialBetButton.setUnifySizeEnabled(false);
        this._layoutTutorialBetButton.ignoreContentAdaptWithSize(false);
        this._layoutTutorialBetButton.setContentSize(cc.size(174, 100));

        ///// # _imgBubbleBackgroundTutorialBetButton
        this._imgBubbleBackgroundTutorialBetButton = new ccui.ImageView();
        this._imgBubbleBackgroundTutorialBetButton.setName("_imgBubbleBackgroundTutorialBetButton");
        this._layoutTutorialBetButton.addChild(this._imgBubbleBackgroundTutorialBetButton);
        this._imgBubbleBackgroundTutorialBetButton.setCascadeOpacityEnabled(true);
        this._imgBubbleBackgroundTutorialBetButton.setCascadeColorEnabled(true);
        this._imgBubbleBackgroundTutorialBetButton.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBubbleBackgroundTutorialBetButton, 0.5, 1);
        this._imgBubbleBackgroundTutorialBetButton.setFlippedX(true);
        let _imgBubbleBackgroundTutorialBetButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBubbleBackgroundTutorialBetButton);
        _imgBubbleBackgroundTutorialBetButtonLayoutComponent.setPositionPercentXEnabled(true);
        _imgBubbleBackgroundTutorialBetButtonLayoutComponent.setPositionPercentX(0.5);
        _imgBubbleBackgroundTutorialBetButtonLayoutComponent.setPositionPercentYEnabled(true);
        _imgBubbleBackgroundTutorialBetButtonLayoutComponent.setPositionPercentY(1);
        _imgBubbleBackgroundTutorialBetButtonLayoutComponent.setPercentWidthEnabled(true);
        _imgBubbleBackgroundTutorialBetButtonLayoutComponent.setPercentWidth(1);
        this._imgBubbleBackgroundTutorialBetButton.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgBubbleBackgroundTutorialBetButton.setUnifySizeEnabled(false);
        this._imgBubbleBackgroundTutorialBetButton.ignoreContentAdaptWithSize(false);
        this._imgBubbleBackgroundTutorialBetButton.setScale9Enabled(true);
        this._imgBubbleBackgroundTutorialBetButton.setCapInsets(cc.rect(57, 33, 60, 30));
        ck.UIUtils.setWidthPercent(this._imgBubbleBackgroundTutorialBetButton, 1);
        this._imgBubbleBackgroundTutorialBetButton.setContentSize(cc.size(this._imgBubbleBackgroundTutorialBetButton.width, 126));
        this._imgBubbleBackgroundTutorialBetButton.setTouchEnabled(false);
        this._imgBubbleBackgroundTutorialBetButton.setFlippedX(true);

        ///// # _txtBubbleTutorialBetButton
        this._txtBubbleTutorialBetButton = new ck.Text();
        this._txtBubbleTutorialBetButton.setName("_txtBubbleTutorialBetButton");
        this._layoutTutorialBetButton.addChild(this._txtBubbleTutorialBetButton);
        this._txtBubbleTutorialBetButton.setCascadeOpacityEnabled(true);
        this._txtBubbleTutorialBetButton.setCascadeColorEnabled(true);
        this._txtBubbleTutorialBetButton.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBubbleTutorialBetButton, 0.5, 0.5);
        let _txtBubbleTutorialBetButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBubbleTutorialBetButton);
        _txtBubbleTutorialBetButtonLayoutComponent.setPositionPercentXEnabled(true);
        _txtBubbleTutorialBetButtonLayoutComponent.setPositionPercentX(0.5);
        _txtBubbleTutorialBetButtonLayoutComponent.setPositionPercentYEnabled(true);
        _txtBubbleTutorialBetButtonLayoutComponent.setPositionPercentY(0.5);
        _txtBubbleTutorialBetButtonLayoutComponent.setPercentWidthEnabled(true);
        _txtBubbleTutorialBetButtonLayoutComponent.setPercentWidth(0.9);
        _txtBubbleTutorialBetButtonLayoutComponent.setPercentHeightEnabled(true);
        _txtBubbleTutorialBetButtonLayoutComponent.setPercentHeight(0.9);
        this._txtBubbleTutorialBetButton.setTouchEnabled(false);
        this._txtBubbleTutorialBetButton.setUnifySizeEnabled(false);
        this._txtBubbleTutorialBetButton.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtBubbleTutorialBetButton, 0.9, 0.9);
        this._txtBubbleTutorialBetButton.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBubbleTutorialBetButton.setDefaultFontSize(30);
        this._txtBubbleTutorialBetButton.setString(gm.localize.getText("TXT_CLICK_TO_BET"));
        this._txtBubbleTutorialBetButton.setTextHorizontalAlignment(1);
        this._txtBubbleTutorialBetButton.setTextVerticalAlignment(1);

        ///// # _userWidgetFake
        this._userWidgetFake = new BingoUserWidget();
        this._userWidgetFake.setName("_userWidgetFake");
        this._layoutTutorial.addChild(this._userWidgetFake);
        this._userWidgetFake.setCascadeOpacityEnabled(true);
        this._userWidgetFake.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._userWidgetFake, 0.5, 0.09);
        let _userWidgetFakeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._userWidgetFake);
        _userWidgetFakeLayoutComponent.setPositionPercentXEnabled(true);
        _userWidgetFakeLayoutComponent.setPositionPercentX(0.5);
        _userWidgetFakeLayoutComponent.setPositionPercentYEnabled(true);
        _userWidgetFakeLayoutComponent.setPositionPercentY(0.09);

        ///// # _imgTutorialNumbers
        this._imgTutorialNumbers = new ccui.ImageView();
        this._imgTutorialNumbers.setName("_imgTutorialNumbers");
        this._layoutTutorial.addChild(this._imgTutorialNumbers);
        this._imgTutorialNumbers.setCascadeOpacityEnabled(true);
        this._imgTutorialNumbers.setCascadeColorEnabled(true);
        this._imgTutorialNumbers.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgTutorialNumbers, 0.5, 0.2514);
        let _imgTutorialNumbersLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTutorialNumbers);
        _imgTutorialNumbersLayoutComponent.setPositionPercentXEnabled(true);
        _imgTutorialNumbersLayoutComponent.setPositionPercentX(0.5);
        _imgTutorialNumbersLayoutComponent.setPositionPercentYEnabled(true);
        _imgTutorialNumbersLayoutComponent.setPositionPercentY(0.2514);
        this._imgTutorialNumbers.loadTexture("bingo/ui/BoxNumberBackground.png", 1);
        this._imgTutorialNumbers.setUnifySizeEnabled(false);
        this._imgTutorialNumbers.ignoreContentAdaptWithSize(false);
        this._imgTutorialNumbers.setContentSize(cc.size(452, 102));
        this._imgTutorialNumbers.setTouchEnabled(false);

        ///// # _txtTutorialNumbers
        this._txtTutorialNumbers = new ck.Text();
        this._txtTutorialNumbers.setName("_txtTutorialNumbers");
        this._imgTutorialNumbers.addChild(this._txtTutorialNumbers);
        this._txtTutorialNumbers.setCascadeOpacityEnabled(true);
        this._txtTutorialNumbers.setCascadeColorEnabled(true);
        this._txtTutorialNumbers.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTutorialNumbers, 0.5, 0.55);
        this._txtTutorialNumbers.setTextColor(cc.color(252, 206, 0, 255));
        let _txtTutorialNumbersLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTutorialNumbers);
        _txtTutorialNumbersLayoutComponent.setPositionPercentXEnabled(true);
        _txtTutorialNumbersLayoutComponent.setPositionPercentX(0.5);
        _txtTutorialNumbersLayoutComponent.setPositionPercentYEnabled(true);
        _txtTutorialNumbersLayoutComponent.setPositionPercentY(0.55);
        this._txtTutorialNumbers.setTouchEnabled(false);
        this._txtTutorialNumbers.setUnifySizeEnabled(false);
        this._txtTutorialNumbers.ignoreContentAdaptWithSize(false);
        this._txtTutorialNumbers.setContentSize(cc.size(384.901, 74.0579));
        this._txtTutorialNumbers.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTutorialNumbers.setDefaultFontSize(30);
        this._txtTutorialNumbers.setString(gm.localize.getText("TXT_GET_THE_FIRST_FIVE_NUMBER_TO_WIN"));
        this._txtTutorialNumbers.setTextHorizontalAlignment(1);
        this._txtTutorialNumbers.setTextVerticalAlignment(1);
        this._txtTutorialNumbers.enableShadow(cc.color(86, 47, 31, 255), cc.size(2, -2), 0);

        ///// # _layoutTutorialTicket
        this._layoutTutorialTicket = new ccui.Layout();
        this._layoutTutorialTicket.setName("_layoutTutorialTicket");
        this._layoutTutorial.addChild(this._layoutTutorialTicket);
        this._layoutTutorialTicket.setCascadeOpacityEnabled(true);
        this._layoutTutorialTicket.setCascadeColorEnabled(true);
        this._layoutTutorialTicket.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutTutorialTicket, 0.3183, 0.1694);
        let _layoutTutorialTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTutorialTicket);
        this._layoutTutorialTicket.setTouchEnabled(false);
        this._layoutTutorialTicket.setUnifySizeEnabled(false);
        this._layoutTutorialTicket.ignoreContentAdaptWithSize(false);
        this._layoutTutorialTicket.setContentSize(cc.size(174, 100));

        ///// # _imgBubbleBackgroundTutorialTicket
        this._imgBubbleBackgroundTutorialTicket = new ccui.ImageView();
        this._imgBubbleBackgroundTutorialTicket.setName("_imgBubbleBackgroundTutorialTicket");
        this._layoutTutorialTicket.addChild(this._imgBubbleBackgroundTutorialTicket);
        this._imgBubbleBackgroundTutorialTicket.setCascadeOpacityEnabled(true);
        this._imgBubbleBackgroundTutorialTicket.setCascadeColorEnabled(true);
        this._imgBubbleBackgroundTutorialTicket.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBubbleBackgroundTutorialTicket, 0.5, 1);
        this._imgBubbleBackgroundTutorialTicket.setFlippedX(true);
        let _imgBubbleBackgroundTutorialTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBubbleBackgroundTutorialTicket);
        _imgBubbleBackgroundTutorialTicketLayoutComponent.setPositionPercentXEnabled(true);
        _imgBubbleBackgroundTutorialTicketLayoutComponent.setPositionPercentX(0.5);
        _imgBubbleBackgroundTutorialTicketLayoutComponent.setPositionPercentYEnabled(true);
        _imgBubbleBackgroundTutorialTicketLayoutComponent.setPositionPercentY(1);
        _imgBubbleBackgroundTutorialTicketLayoutComponent.setPercentWidthEnabled(true);
        _imgBubbleBackgroundTutorialTicketLayoutComponent.setPercentWidth(1);
        this._imgBubbleBackgroundTutorialTicket.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgBubbleBackgroundTutorialTicket.setUnifySizeEnabled(false);
        this._imgBubbleBackgroundTutorialTicket.ignoreContentAdaptWithSize(false);
        this._imgBubbleBackgroundTutorialTicket.setScale9Enabled(true);
        this._imgBubbleBackgroundTutorialTicket.setCapInsets(cc.rect(57, 33, 60, 30));
        ck.UIUtils.setWidthPercent(this._imgBubbleBackgroundTutorialTicket, 1);
        this._imgBubbleBackgroundTutorialTicket.setContentSize(cc.size(this._imgBubbleBackgroundTutorialTicket.width, 126));
        this._imgBubbleBackgroundTutorialTicket.setTouchEnabled(false);
        this._imgBubbleBackgroundTutorialTicket.setFlippedX(true);

        ///// # _txtBubbleTutorialTicket
        this._txtBubbleTutorialTicket = new ck.Text();
        this._txtBubbleTutorialTicket.setName("_txtBubbleTutorialTicket");
        this._layoutTutorialTicket.addChild(this._txtBubbleTutorialTicket);
        this._txtBubbleTutorialTicket.setCascadeOpacityEnabled(true);
        this._txtBubbleTutorialTicket.setCascadeColorEnabled(true);
        this._txtBubbleTutorialTicket.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBubbleTutorialTicket, 0.5, 0.5);
        let _txtBubbleTutorialTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBubbleTutorialTicket);
        _txtBubbleTutorialTicketLayoutComponent.setPositionPercentXEnabled(true);
        _txtBubbleTutorialTicketLayoutComponent.setPositionPercentX(0.5);
        _txtBubbleTutorialTicketLayoutComponent.setPositionPercentYEnabled(true);
        _txtBubbleTutorialTicketLayoutComponent.setPositionPercentY(0.5);
        _txtBubbleTutorialTicketLayoutComponent.setPercentWidthEnabled(true);
        _txtBubbleTutorialTicketLayoutComponent.setPercentWidth(0.9);
        _txtBubbleTutorialTicketLayoutComponent.setPercentHeightEnabled(true);
        _txtBubbleTutorialTicketLayoutComponent.setPercentHeight(0.9);
        this._txtBubbleTutorialTicket.setTouchEnabled(false);
        this._txtBubbleTutorialTicket.setUnifySizeEnabled(false);
        this._txtBubbleTutorialTicket.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtBubbleTutorialTicket, 0.9, 0.9);
        this._txtBubbleTutorialTicket.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBubbleTutorialTicket.setDefaultFontSize(30);
        this._txtBubbleTutorialTicket.setString(gm.localize.getText("TXT_CHANGE_THE_BET_HERE"));
        this._txtBubbleTutorialTicket.setTextHorizontalAlignment(1);
        this._txtBubbleTutorialTicket.setTextVerticalAlignment(1);

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

        ///// # _nodeTrophyProgress
        this._nodeTrophyProgress = new cc.Node();
        this._nodeTrophyProgress.setName("_nodeTrophyProgress");
        this._layoutRoot.addChild(this._nodeTrophyProgress);
        this._nodeTrophyProgress.setCascadeOpacityEnabled(true);
        this._nodeTrophyProgress.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeTrophyProgress, 0.5, 0.23);
        let _nodeTrophyProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeTrophyProgress);
        _nodeTrophyProgressLayoutComponent.setPositionPercentXEnabled(true);
        _nodeTrophyProgressLayoutComponent.setPositionPercentX(0.5);
        _nodeTrophyProgressLayoutComponent.setPositionPercentYEnabled(true);
        _nodeTrophyProgressLayoutComponent.setPositionPercentY(0.23);

    },


    playCCSAnimHint: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimHint();
    
        let _imgHint01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(40 / (60 * speed), 1, 1),
                    cc.scaleTo(40 / (60 * speed), 1.1, 1.1)
                ),
                cc.sequence(
                    cc.fadeTo(40 / (60 * speed), 255),
                    cc.fadeTo(40 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgHint01.setScale(1.4, 1.4);
                this._imgHint01.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgHint01Action = _imgHint01Action.repeatForever();
        } else _imgHint01Action = cc.sequence(
            cc.delayTime(delay),
            _imgHint01Action.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgHint01.runAction(_imgHint01Action);
    
        let _imgHint02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(15 / (60 * speed), 0.4, 0.4),
                    cc.scaleTo(25 / (60 * speed), 1, 1),
                    cc.scaleTo(40 / (60 * speed), 1.1, 1.1)
                ),
                cc.sequence(
                    cc.fadeTo(15 / (60 * speed), 0),
                    cc.fadeTo(25 / (60 * speed), 255),
                    cc.fadeTo(40 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgHint02.setScale(0.4, 0.4);
                this._imgHint02.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgHint02Action = _imgHint02Action.repeatForever();
        } else _imgHint02Action = cc.sequence(
            cc.delayTime(delay),
            _imgHint02Action.repeat(repeat)
        )
        
        this._imgHint02.runAction(_imgHint02Action);
    
        let _imgHandHintAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(40 / (60 * speed), 183.4307, 3.774),
                    cc.moveTo(40 / (60 * speed), 204, -29)
                ),
                cc.sequence(
                    cc.scaleTo(40 / (60 * speed), 0.7, 0.7).easing(cc.easeQuarticActionIn()),
                    cc.scaleTo(40 / (60 * speed), 0.8, 0.8).easing(cc.easeQuarticActionOut())
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgHandHint.setPosition(204, -29);
                this._imgHandHint.setScale(0.8, 0.8);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgHandHintAction = _imgHandHintAction.repeatForever();
        } else _imgHandHintAction = cc.sequence(
            cc.delayTime(delay),
            _imgHandHintAction.repeat(repeat)
        )
        
        this._imgHandHint.runAction(_imgHandHintAction);
    },

    resetCCSAnimHint: function () {
        this._imgHint01.stopAllActions();
        this._imgHint01.setScale(1.4, 1.4);
        this._imgHint01.setOpacity(0);
    
        this._imgHint02.stopAllActions();
        this._imgHint02.setScale(0.4, 0.4);
        this._imgHint02.setOpacity(0);
    
        this._imgHandHint.stopAllActions();
        this._imgHandHint.setPosition(204, -29);
        this._imgHandHint.setScale(0.8, 0.8);
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
 * Create BingoLayer
 * @returns {_ccs.BingoLayer}
 */
_ccs.BingoLayer.create = function () {
    return new _ccs.BingoLayer();
};
