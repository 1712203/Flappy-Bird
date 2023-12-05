/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.CardFlipLayer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.CardFlipLayer = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ccui.Layout} */
    _layoutBgrClipping: null,
    /** @type {ccui.ImageView} */
    _imgChair: null,
    /** @type {ccui.Layout} */
    _layoutNPC: null,
    /** @type {ccui.ImageView} */
    _imgNPC: null,
    /** @type {ccui.ImageView} */
    _imgTable: null,
    /** @type {ccui.Button} */
    _btnHelp: null,
    /** @type {ccui.ImageView} */
    _imgHelpIcon: null,
    /** @type {ccui.Button} */
    _btnQuit: null,
    /** @type {ccui.ImageView} */
    _imgQuitIcon: null,
    /** @type {ccui.Button} */
    _btnChat: null,
    /** @type {ccui.ImageView} */
    _imgChatIcon: null,
    /** @type {cc.Node} */
    _nodeX2Icon: null,
    /** @type {ccui.Button} */
    _btnCamera: null,
    /** @type {ccui.Button} */
    _btnBet: null,
    /** @type {ccui.ImageView} */
    _imgLogo: null,
    /** @type {ccui.ImageView} */
    _imgHintBorder: null,
    /** @type {ck.Text} */
    _txtHint: null,
    /** @type {ccui.ImageView} */
    _imgHint: null,
    /** @type {cc.Sprite} */
    _imgBoardGoldWin: null,
    /** @type {cc.Sprite} */
    _imgLight01: null,
    /** @type {cc.Sprite} */
    _imgLight02: null,
    /** @type {ck.Text} */
    _txtGoldWin: null,
    /** @type {ccui.ImageView} */
    _imgStart: null,
    /** @type {ccui.ImageView} */
    _imgResult: null,
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
    /** @type {GuiCardFlipTimer} */
    _guiCardFlipTimer: null,
    /** @type {GuiCardFlipUser} */
    _guiCardFlipUser: null,
    /** @type {GuiCardFlipPlayer} */
    _guiCardFlipPlayer0: null,
    /** @type {GuiCardFlipPlayer} */
    _guiCardFlipPlayer1: null,
    /** @type {GuiCardFlipPlayer} */
    _guiCardFlipPlayer2: null,
    /** @type {GuiCardFlipPlayer} */
    _guiCardFlipPlayer3: null,
    /** @type {GuiCardFlipPlayer} */
    _guiCardFlipPlayer4: null,
    /** @type {GuiCardFlipPlayer} */
    _guiCardFlipPlayer5: null,
    /** @type {GuiCardFlipPlayer} */
    _guiCardFlipPlayer6: null,
    /** @type {GuiCardFlipPlayer} */
    _guiCardFlipPlayer7: null,
    /** @type {CardFlipEffectLose} */
    _effectLose: null,
    /** @type {CardFlipEffectWin} */
    _effectWin: null,
    /** @type {ck.OfferIconGrid} */
    _gridOfferIcons: null,
    /** @type {ChatPopup} */
    _chatPopup: null,
    /** @type {InteractPopup} */
    _interactPopup: null,
    /** @type {cc.Node} */
    _nodeTrophyProgress: null,


    /**
     * _ccs.CardFlipLayer constructor
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

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._layoutRoot.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr, 0.5, 0.5);
        if (!PlatformUtils.hasNotch()) {
            let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
            _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
            _imgBgrLayoutComponent.setPositionPercentX(0.5);
            _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
            _imgBgrLayoutComponent.setPositionPercentY(0.5);
            _imgBgrLayoutComponent.setPercentWidthEnabled(true);
            _imgBgrLayoutComponent.setPercentWidth(1);
            _imgBgrLayoutComponent.setPercentHeightEnabled(true);
            _imgBgrLayoutComponent.setPercentHeight(1);
        }
        this._imgBgr.loadTexture("sprites/backgrounds/CardFlip.png", 0);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBgr, 1, 1);
        this._imgBgr.setTouchEnabled(false);
        UIUtils.initFullScreenBackground(this._imgBgr);

        ///// # _layoutBgrClipping
        this._layoutBgrClipping = new ccui.Layout();
        this._layoutBgrClipping.setName("_layoutBgrClipping");
        this._layoutRoot.addChild(this._layoutBgrClipping);
        this._layoutBgrClipping.setCascadeOpacityEnabled(true);
        this._layoutBgrClipping.setCascadeColorEnabled(true);
        let _layoutBgrClippingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBgrClipping);
        _layoutBgrClippingLayoutComponent.setPercentWidthEnabled(true);
        _layoutBgrClippingLayoutComponent.setPercentWidth(1);
        _layoutBgrClippingLayoutComponent.setPercentHeightEnabled(true);
        _layoutBgrClippingLayoutComponent.setPercentHeight(1);
        this._layoutBgrClipping.setTouchEnabled(false);
        this._layoutBgrClipping.setUnifySizeEnabled(false);
        this._layoutBgrClipping.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBgrClipping, 1, 1);
        this._layoutBgrClipping.setClippingEnabled(true);

        ///// # _imgChair
        this._imgChair = new ccui.ImageView();
        this._imgChair.setName("_imgChair");
        this._layoutBgrClipping.addChild(this._imgChair);
        this._imgChair.setCascadeOpacityEnabled(true);
        this._imgChair.setCascadeColorEnabled(true);
        this._imgChair.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgChair, 0.45, 0.805);
        let _imgChairLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgChair);
        _imgChairLayoutComponent.setPositionPercentYEnabled(true);
        _imgChairLayoutComponent.setPositionPercentY(0.805);
        this._imgChair.loadTexture("new-card-flip/Chair.png", 1);
        this._imgChair.setUnifySizeEnabled(false);
        this._imgChair.ignoreContentAdaptWithSize(false);
        this._imgChair.setContentSize(cc.size(151, 152));
        this._imgChair.setTouchEnabled(false);

        ///// # _layoutNPC
        this._layoutNPC = new ccui.Layout();
        this._layoutNPC.setName("_layoutNPC");
        this._layoutBgrClipping.addChild(this._layoutNPC);
        this._layoutNPC.setCascadeOpacityEnabled(true);
        this._layoutNPC.setCascadeColorEnabled(true);
        this._layoutNPC.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutNPC, 0.54, 0.75);
        let _layoutNPCLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutNPC);
        _layoutNPCLayoutComponent.setPositionPercentYEnabled(true);
        _layoutNPCLayoutComponent.setPositionPercentY(0.75);
        _layoutNPCLayoutComponent.setPercentWidthEnabled(true);
        _layoutNPCLayoutComponent.setPercentWidth(0);
        this._layoutNPC.setTouchEnabled(true);
        this._layoutNPC.setUnifySizeEnabled(false);
        this._layoutNPC.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutNPC, 0);
        this._layoutNPC.setContentSize(cc.size(this._layoutNPC.width, 606));

        ///// # _imgNPC
        this._imgNPC = new ccui.ImageView();
        this._imgNPC.setName("_imgNPC");
        this._layoutNPC.addChild(this._imgNPC);
        this._imgNPC.setCascadeOpacityEnabled(true);
        this._imgNPC.setCascadeColorEnabled(true);
        this._imgNPC.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgNPC, 0, 0.5);
        let _imgNPCLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNPC);
        _imgNPCLayoutComponent.setPositionPercentXEnabled(true);
        _imgNPCLayoutComponent.setPositionPercentX(0);
        _imgNPCLayoutComponent.setPositionPercentYEnabled(true);
        _imgNPCLayoutComponent.setPositionPercentY(0.5);
        this._imgNPC.loadTexture("new-card-flip/DealCard_01.png", 1);
        this._imgNPC.setUnifySizeEnabled(false);
        this._imgNPC.ignoreContentAdaptWithSize(false);
        this._imgNPC.setContentSize(cc.size(152, 606));
        this._imgNPC.setTouchEnabled(false);

        ///// # _imgTable
        this._imgTable = new ccui.ImageView();
        this._imgTable.setName("_imgTable");
        this._layoutBgrClipping.addChild(this._imgTable);
        this._imgTable.setCascadeOpacityEnabled(true);
        this._imgTable.setCascadeColorEnabled(true);
        this._imgTable.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTable, 0.5, 0.2641);
        let _imgTableLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTable);
        _imgTableLayoutComponent.setPositionPercentYEnabled(true);
        _imgTableLayoutComponent.setPositionPercentY(0.2641);
        _imgTableLayoutComponent.setPercentWidthEnabled(true);
        _imgTableLayoutComponent.setPercentWidth(1.6641);
        _imgTableLayoutComponent.setPercentHeightEnabled(true);
        _imgTableLayoutComponent.setPercentHeight(1);
        this._imgTable.loadTexture("new-card-flip/Table.png", 1);
        this._imgTable.setUnifySizeEnabled(false);
        this._imgTable.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgTable, 1.6641, 1);
        this._imgTable.setTouchEnabled(false);

        ///// # _btnHelp
        this._btnHelp = new ccui.Button();
        this._btnHelp.setName("_btnHelp");
        this._layoutRoot.addChild(this._btnHelp);
        this._btnHelp.setCascadeOpacityEnabled(true);
        this._btnHelp.setCascadeColorEnabled(true);
        this._btnHelp.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnHelp, 0.08, 0.9453);
        let _btnHelpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnHelp);
        _btnHelpLayoutComponent.setPositionPercentXEnabled(true);
        _btnHelpLayoutComponent.setPositionPercentX(0.08);
        _btnHelpLayoutComponent.setPositionPercentYEnabled(true);
        _btnHelpLayoutComponent.setPositionPercentY(0.9453);
        this._btnHelp.loadTextureDisabled("buttons/circles/Gray.png", 1);
        this._btnHelp.loadTexturePressed("buttons/circles/Gray.png", 1);
        this._btnHelp.loadTextureNormal("buttons/circles/Gray.png", 1);
        this._btnHelp.setUnifySizeEnabled(false);
        this._btnHelp.ignoreContentAdaptWithSize(false);
        this._btnHelp.setScale9Enabled(true);
        this._btnHelp.setCapInsets(cc.rect(15, 11, 50, 60));
        this._btnHelp.setContentSize(cc.size(80, 82));
        this._btnHelp.setTouchEnabled(true);

        ///// # _imgHelpIcon
        this._imgHelpIcon = new ccui.ImageView();
        this._imgHelpIcon.setName("_imgHelpIcon");
        this._btnHelp.addChild(this._imgHelpIcon);
        this._imgHelpIcon.setCascadeOpacityEnabled(true);
        this._imgHelpIcon.setCascadeColorEnabled(true);
        this._imgHelpIcon.setAnchorPoint(cc.p(0.4, 0.55));
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

        ///// # _btnQuit
        this._btnQuit = new ccui.Button();
        this._btnQuit.setName("_btnQuit");
        this._layoutRoot.addChild(this._btnQuit);
        this._btnQuit.setCascadeOpacityEnabled(true);
        this._btnQuit.setCascadeColorEnabled(true);
        this._btnQuit.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnQuit, 0.08, 0.05);
        let _btnQuitLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnQuit);
        _btnQuitLayoutComponent.setPositionPercentXEnabled(true);
        _btnQuitLayoutComponent.setPositionPercentX(0.08);
        _btnQuitLayoutComponent.setPositionPercentYEnabled(true);
        _btnQuitLayoutComponent.setPositionPercentY(0.05);
        this._btnQuit.loadTextureDisabled("buttons/circles/Gray.png", 1);
        this._btnQuit.loadTexturePressed("buttons/circles/Gray.png", 1);
        this._btnQuit.loadTextureNormal("buttons/circles/Gray.png", 1);
        this._btnQuit.setUnifySizeEnabled(false);
        this._btnQuit.ignoreContentAdaptWithSize(false);
        this._btnQuit.setScale9Enabled(true);
        this._btnQuit.setCapInsets(cc.rect(15, 11, 50, 60));
        this._btnQuit.setContentSize(cc.size(80, 82));
        this._btnQuit.setTouchEnabled(true);

        ///// # _imgQuitIcon
        this._imgQuitIcon = new ccui.ImageView();
        this._imgQuitIcon.setName("_imgQuitIcon");
        this._btnQuit.addChild(this._imgQuitIcon);
        this._imgQuitIcon.setCascadeOpacityEnabled(true);
        this._imgQuitIcon.setCascadeColorEnabled(true);
        this._imgQuitIcon.setAnchorPoint(cc.p(0.58, 0.55));
        ck.UIUtils.setPositionPercent(this._imgQuitIcon, 0.5, 0.5);
        let _imgQuitIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgQuitIcon);
        _imgQuitIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgQuitIconLayoutComponent.setPositionPercentX(0.5);
        _imgQuitIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgQuitIconLayoutComponent.setPositionPercentY(0.5);
        this._imgQuitIcon.loadTexture("icons/flat/Exit.png", 1);
        this._imgQuitIcon.setUnifySizeEnabled(false);
        this._imgQuitIcon.ignoreContentAdaptWithSize(false);
        this._imgQuitIcon.setContentSize(cc.size(43, 37));
        this._imgQuitIcon.setTouchEnabled(false);

        ///// # _btnChat
        this._btnChat = new ccui.Button();
        this._btnChat.setName("_btnChat");
        this._layoutRoot.addChild(this._btnChat);
        this._btnChat.setCascadeOpacityEnabled(true);
        this._btnChat.setCascadeColorEnabled(true);
        this._btnChat.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnChat, 0.08, 0.1275);
        let _btnChatLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnChat);
        _btnChatLayoutComponent.setPositionPercentXEnabled(true);
        _btnChatLayoutComponent.setPositionPercentX(0.08);
        _btnChatLayoutComponent.setPositionPercentYEnabled(true);
        _btnChatLayoutComponent.setPositionPercentY(0.1275);
        this._btnChat.loadTextureDisabled("buttons/circles/Gray.png", 1);
        this._btnChat.loadTexturePressed("buttons/circles/Gray.png", 1);
        this._btnChat.loadTextureNormal("buttons/circles/Gray.png", 1);
        this._btnChat.setUnifySizeEnabled(false);
        this._btnChat.ignoreContentAdaptWithSize(false);
        this._btnChat.setScale9Enabled(true);
        this._btnChat.setCapInsets(cc.rect(15, 11, 50, 60));
        this._btnChat.setContentSize(cc.size(80, 82));
        this._btnChat.setTouchEnabled(true);

        ///// # _imgChatIcon
        this._imgChatIcon = new ccui.ImageView();
        this._imgChatIcon.setName("_imgChatIcon");
        this._btnChat.addChild(this._imgChatIcon);
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
        this._imgChatIcon.setContentSize(cc.size(47, 37));
        this._imgChatIcon.setTouchEnabled(false);

        ///// # _nodeX2Icon
        this._nodeX2Icon = new cc.Node();
        this._nodeX2Icon.setName("_nodeX2Icon");
        this._layoutRoot.addChild(this._nodeX2Icon);
        this._nodeX2Icon.setCascadeOpacityEnabled(true);
        this._nodeX2Icon.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeX2Icon, 0.08, 0.2);
        let _nodeX2IconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeX2Icon);
        _nodeX2IconLayoutComponent.setPositionPercentXEnabled(true);
        _nodeX2IconLayoutComponent.setPositionPercentX(0.08);
        _nodeX2IconLayoutComponent.setPositionPercentYEnabled(true);
        _nodeX2IconLayoutComponent.setPositionPercentY(0.2);

        ///// # _btnCamera
        this._btnCamera = new ccui.Button();
        this._btnCamera.setName("_btnCamera");
        this._layoutRoot.addChild(this._btnCamera);
        this._btnCamera.setCascadeOpacityEnabled(true);
        this._btnCamera.setCascadeColorEnabled(true);
        this._btnCamera.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnCamera, 0.55, 0.0238);
        this._btnCamera.setVisible(false);
        let _btnCameraLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnCamera);
        _btnCameraLayoutComponent.setHorizontalEdge(ccui.LayoutComponent.horizontalEdge.CENTER);
        _btnCameraLayoutComponent.setLeftMargin(324.5);
        _btnCameraLayoutComponent.setRightMargin(260.5);
        _btnCameraLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.CENTER);
        _btnCameraLayoutComponent.setTopMargin(1087.9633);
        _btnCameraLayoutComponent.setBottomMargin(6.0368);
        this._btnCamera.setUnifySizeEnabled(false);
        this._btnCamera.ignoreContentAdaptWithSize(false);
        this._btnCamera.setScale9Enabled(true);
        this._btnCamera.setCapInsets(cc.rect(-15, -11, 30, 22));
        this._btnCamera.setContentSize(cc.size(55, 42));
        this._btnCamera.setTouchEnabled(true);

        ///// # _btnBet
        this._btnBet = new ccui.Button();
        this._btnBet.setName("_btnBet");
        this._layoutRoot.addChild(this._btnBet);
        this._btnBet.setCascadeOpacityEnabled(true);
        this._btnBet.setCascadeColorEnabled(true);
        this._btnBet.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnBet, 0.5, 0.5);
        this._btnBet.setOpacity(0);
        let _btnBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnBet);
        _btnBetLayoutComponent.setPositionPercentXEnabled(true);
        _btnBetLayoutComponent.setPositionPercentX(0.5);
        _btnBetLayoutComponent.setPositionPercentYEnabled(true);
        _btnBetLayoutComponent.setPositionPercentY(0.5);
        this._btnBet.loadTextureDisabled("Default/Button_Disable.png", 0);
        this._btnBet.loadTexturePressed("Default/Button_Press.png", 0);
        this._btnBet.loadTextureNormal("Default/Button_Normal.png", 0);
        this._btnBet.setUnifySizeEnabled(false);
        this._btnBet.ignoreContentAdaptWithSize(false);
        this._btnBet.setScale9Enabled(true);
        this._btnBet.setCapInsets(cc.rect(15, 11, 16, 14));
        this._btnBet.setContentSize(cc.size(260, 360));
        this._btnBet.setTouchEnabled(true);

        ///// # _imgLogo
        this._imgLogo = new ccui.ImageView();
        this._imgLogo.setName("_imgLogo");
        this._layoutRoot.addChild(this._imgLogo);
        this._imgLogo.setCascadeOpacityEnabled(true);
        this._imgLogo.setCascadeColorEnabled(true);
        this._imgLogo.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLogo, 0.5, 0.6851);
        this._imgLogo.setVisible(false);
        let _imgLogoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLogo);
        _imgLogoLayoutComponent.setPositionPercentXEnabled(true);
        _imgLogoLayoutComponent.setPositionPercentX(0.5);
        _imgLogoLayoutComponent.setPositionPercentYEnabled(true);
        _imgLogoLayoutComponent.setPositionPercentY(0.6851);
        this._imgLogo.loadTexture("Default/ImageFile.png", 0);
        this._imgLogo.setUnifySizeEnabled(false);
        this._imgLogo.ignoreContentAdaptWithSize(false);
        this._imgLogo.setContentSize(cc.size(109, 83));
        this._imgLogo.setTouchEnabled(false);

        ///// # _imgHintBorder
        this._imgHintBorder = new ccui.ImageView();
        this._imgHintBorder.setName("_imgHintBorder");
        this._layoutRoot.addChild(this._imgHintBorder);
        this._imgHintBorder.setCascadeOpacityEnabled(true);
        this._imgHintBorder.setCascadeColorEnabled(true);
        this._imgHintBorder.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHintBorder, 0.5, 0.5);
        let _imgHintBorderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHintBorder);
        _imgHintBorderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHintBorderLayoutComponent.setPositionPercentX(0.5);
        _imgHintBorderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHintBorderLayoutComponent.setPositionPercentY(0.5);
        this._imgHintBorder.loadTexture("basics/effects/RingShine_01.png", 1);
        this._imgHintBorder.setUnifySizeEnabled(false);
        this._imgHintBorder.ignoreContentAdaptWithSize(false);
        this._imgHintBorder.setContentSize(cc.size(225, 226));
        this._imgHintBorder.setTouchEnabled(false);

        ///// # _txtHint
        this._txtHint = new ck.Text();
        this._txtHint.setName("_txtHint");
        this._imgHintBorder.addChild(this._txtHint);
        this._txtHint.setCascadeOpacityEnabled(true);
        this._txtHint.setCascadeColorEnabled(true);
        this._txtHint.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHint, 0.5, 0.5);
        this._txtHint.setVisible(false);
        let _txtHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHint);
        _txtHintLayoutComponent.setPositionPercentXEnabled(true);
        _txtHintLayoutComponent.setPositionPercentX(0.5);
        _txtHintLayoutComponent.setPositionPercentYEnabled(true);
        _txtHintLayoutComponent.setPositionPercentY(0.5);
        this._txtHint.setTouchEnabled(false);
        this._txtHint.ignoreContentAdaptWithSize(true);
        this._txtHint.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHint.setDefaultFontSize(36);
        this._txtHint.setTextHorizontalAlignment(1);
        this._txtHint.setTextVerticalAlignment(1);

        ///// # _imgHint
        this._imgHint = new ccui.ImageView();
        this._imgHint.setName("_imgHint");
        this._imgHintBorder.addChild(this._imgHint);
        this._imgHint.setCascadeOpacityEnabled(true);
        this._imgHint.setCascadeColorEnabled(true);
        this._imgHint.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHint, 0.5, 0.5);
        let _imgHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHint);
        _imgHintLayoutComponent.setPositionPercentXEnabled(true);
        _imgHintLayoutComponent.setPositionPercentX(0.5);
        _imgHintLayoutComponent.setPositionPercentYEnabled(true);
        _imgHintLayoutComponent.setPositionPercentY(0.5);
        this._imgHint.loadTexture("Default/ImageFile.png", 0);
        this._imgHint.setUnifySizeEnabled(false);
        this._imgHint.ignoreContentAdaptWithSize(false);
        this._imgHint.setContentSize(cc.size(94, 76));
        this._imgHint.setTouchEnabled(false);

        ///// # _imgBoardGoldWin
        this._imgBoardGoldWin = new cc.Sprite();
        this._imgBoardGoldWin.setName("_imgBoardGoldWin");
        this._layoutRoot.addChild(this._imgBoardGoldWin);
        this._imgBoardGoldWin.setCascadeOpacityEnabled(true);
        this._imgBoardGoldWin.setCascadeColorEnabled(true);
        this._imgBoardGoldWin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBoardGoldWin, 0.5, 0.615);
        this._imgBoardGoldWin.setScale(1.5, 1.5);
        let _imgBoardGoldWinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBoardGoldWin);
        _imgBoardGoldWinLayoutComponent.setPositionPercentXEnabled(true);
        _imgBoardGoldWinLayoutComponent.setPositionPercentX(0.5);
        _imgBoardGoldWinLayoutComponent.setPositionPercentYEnabled(true);
        _imgBoardGoldWinLayoutComponent.setPositionPercentY(0.615);
        let sf = cc.spriteFrameCache.getSpriteFrame("basics/other/Box_10.png"); if (sf) this._imgBoardGoldWin.setSpriteFrame(sf);
        let _imgBoardGoldWinBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _imgBoardGoldWinBlendFunc.src = 1;
        _imgBoardGoldWinBlendFunc.dst = 771;
        this._imgBoardGoldWin.setBlendFunc(_imgBoardGoldWinBlendFunc);

        ///// # _imgLight01
        this._imgLight01 = new cc.Sprite();
        this._imgLight01.setName("_imgLight01");
        this._imgBoardGoldWin.addChild(this._imgLight01);
        this._imgLight01.setCascadeOpacityEnabled(true);
        this._imgLight01.setCascadeColorEnabled(true);
        this._imgLight01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLight01, 0.7242, 0.6655);
        this._imgLight01.setVisible(false);
        let _imgLight01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLight01);
        this._imgLight01.setTexture("Default/Sprite.png");
        let _imgLight01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _imgLight01BlendFunc.src = 1;
        _imgLight01BlendFunc.dst = 771;
        this._imgLight01.setBlendFunc(_imgLight01BlendFunc);

        ///// # _imgLight02
        this._imgLight02 = new cc.Sprite();
        this._imgLight02.setName("_imgLight02");
        this._imgBoardGoldWin.addChild(this._imgLight02);
        this._imgLight02.setCascadeOpacityEnabled(true);
        this._imgLight02.setCascadeColorEnabled(true);
        this._imgLight02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLight02, 0.7303, 0.6656);
        this._imgLight02.setVisible(false);
        let _imgLight02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLight02);
        this._imgLight02.setTexture("Default/Sprite.png");
        let _imgLight02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _imgLight02BlendFunc.src = 1;
        _imgLight02BlendFunc.dst = 771;
        this._imgLight02.setBlendFunc(_imgLight02BlendFunc);

        ///// # _txtGoldWin
        this._txtGoldWin = new ck.Text();
        this._txtGoldWin.setName("_txtGoldWin");
        this._imgBoardGoldWin.addChild(this._txtGoldWin);
        this._txtGoldWin.setCascadeOpacityEnabled(true);
        this._txtGoldWin.setCascadeColorEnabled(true);
        this._txtGoldWin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGoldWin, 0.5, 0.4972);
        this._txtGoldWin.setTextColor(cc.color(255, 255, 0, 255));
        let _txtGoldWinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGoldWin);
        _txtGoldWinLayoutComponent.setPositionPercentXEnabled(true);
        _txtGoldWinLayoutComponent.setPositionPercentX(0.5);
        _txtGoldWinLayoutComponent.setPositionPercentYEnabled(true);
        _txtGoldWinLayoutComponent.setPositionPercentY(0.4972);
        this._txtGoldWin.setTouchEnabled(false);
        this._txtGoldWin.ignoreContentAdaptWithSize(true);
        this._txtGoldWin.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGoldWin.setDefaultFontSize(25);
        this._txtGoldWin.setTextHorizontalAlignment(1);
        this._txtGoldWin.setTextVerticalAlignment(1);

        ///// # _imgStart
        this._imgStart = new ccui.ImageView();
        this._imgStart.setName("_imgStart");
        this._layoutRoot.addChild(this._imgStart);
        this._imgStart.setCascadeOpacityEnabled(true);
        this._imgStart.setCascadeColorEnabled(true);
        this._imgStart.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStart, 0.5, 0.5);
        this._imgStart.setVisible(false);
        let _imgStartLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStart);
        _imgStartLayoutComponent.setPositionPercentXEnabled(true);
        _imgStartLayoutComponent.setPositionPercentX(0.5);
        _imgStartLayoutComponent.setPositionPercentYEnabled(true);
        _imgStartLayoutComponent.setPositionPercentY(0.5);
        this._imgStart.loadTexture("texts/minigames/LetsBet_01.png", 1);
        this._imgStart.setTouchEnabled(false);

        ///// # _imgResult
        this._imgResult = new ccui.ImageView();
        this._imgResult.setName("_imgResult");
        this._layoutRoot.addChild(this._imgResult);
        this._imgResult.setCascadeOpacityEnabled(true);
        this._imgResult.setCascadeColorEnabled(true);
        this._imgResult.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgResult, 0.5, 0.5);
        this._imgResult.setVisible(false);
        let _imgResultLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgResult);
        _imgResultLayoutComponent.setPositionPercentXEnabled(true);
        _imgResultLayoutComponent.setPositionPercentX(0.5);
        _imgResultLayoutComponent.setPositionPercentYEnabled(true);
        _imgResultLayoutComponent.setPositionPercentY(0.5);
        this._imgResult.loadTexture("texts/minigames/ShowTime.png", 1);
        this._imgResult.setTouchEnabled(false);

        ///// # _chatHistoryWidget
        this._chatHistoryWidget = new ChatHistoryWidget();
        this._chatHistoryWidget.setName("_chatHistoryWidget");
        this._layoutRoot.addChild(this._chatHistoryWidget);
        this._chatHistoryWidget.setCascadeOpacityEnabled(true);
        this._chatHistoryWidget.setCascadeColorEnabled(true);
        this._chatHistoryWidget.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._chatHistoryWidget, 0.1706, 0.89);
        let _chatHistoryWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._chatHistoryWidget);
        _chatHistoryWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _chatHistoryWidgetLayoutComponent.setPositionPercentY(0.89);
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

        ///// # _guiCardFlipTimer
        this._guiCardFlipTimer = new GuiCardFlipTimer();
        this._guiCardFlipTimer.setName("_guiCardFlipTimer");
        this._layoutRoot.addChild(this._guiCardFlipTimer);
        this._guiCardFlipTimer.setCascadeOpacityEnabled(true);
        this._guiCardFlipTimer.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._guiCardFlipTimer, 0.5, 0.69);
        let _guiCardFlipTimerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._guiCardFlipTimer);
        _guiCardFlipTimerLayoutComponent.setPositionPercentXEnabled(true);
        _guiCardFlipTimerLayoutComponent.setPositionPercentX(0.5);
        _guiCardFlipTimerLayoutComponent.setPositionPercentYEnabled(true);
        _guiCardFlipTimerLayoutComponent.setPositionPercentY(0.69);

        ///// # _guiCardFlipUser
        this._guiCardFlipUser = new GuiCardFlipUser();
        this._guiCardFlipUser.setName("_guiCardFlipUser");
        this._layoutRoot.addChild(this._guiCardFlipUser);
        this._guiCardFlipUser.setCascadeOpacityEnabled(true);
        this._guiCardFlipUser.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._guiCardFlipUser, 0.5, 0.08);
        let _guiCardFlipUserLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._guiCardFlipUser);
        _guiCardFlipUserLayoutComponent.setPositionPercentXEnabled(true);
        _guiCardFlipUserLayoutComponent.setPositionPercentX(0.5);
        _guiCardFlipUserLayoutComponent.setPositionPercentYEnabled(true);
        _guiCardFlipUserLayoutComponent.setPositionPercentY(0.08);

        ///// # _guiCardFlipPlayer0
        this._guiCardFlipPlayer0 = new GuiCardFlipPlayer();
        this._guiCardFlipPlayer0.setName("_guiCardFlipPlayer0");
        this._layoutRoot.addChild(this._guiCardFlipPlayer0);
        this._guiCardFlipPlayer0.setCascadeOpacityEnabled(true);
        this._guiCardFlipPlayer0.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._guiCardFlipPlayer0, 0.105, 0.305);
        let _guiCardFlipPlayer0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._guiCardFlipPlayer0);
        _guiCardFlipPlayer0LayoutComponent.setPositionPercentXEnabled(true);
        _guiCardFlipPlayer0LayoutComponent.setPositionPercentX(0.105);
        _guiCardFlipPlayer0LayoutComponent.setPositionPercentYEnabled(true);
        _guiCardFlipPlayer0LayoutComponent.setPositionPercentY(0.305);

        ///// # _guiCardFlipPlayer1
        this._guiCardFlipPlayer1 = new GuiCardFlipPlayer();
        this._guiCardFlipPlayer1.setName("_guiCardFlipPlayer1");
        this._layoutRoot.addChild(this._guiCardFlipPlayer1);
        this._guiCardFlipPlayer1.setCascadeOpacityEnabled(true);
        this._guiCardFlipPlayer1.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._guiCardFlipPlayer1, 0.895, 0.305);
        let _guiCardFlipPlayer1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._guiCardFlipPlayer1);
        _guiCardFlipPlayer1LayoutComponent.setPositionPercentXEnabled(true);
        _guiCardFlipPlayer1LayoutComponent.setPositionPercentX(0.895);
        _guiCardFlipPlayer1LayoutComponent.setPositionPercentYEnabled(true);
        _guiCardFlipPlayer1LayoutComponent.setPositionPercentY(0.305);

        ///// # _guiCardFlipPlayer2
        this._guiCardFlipPlayer2 = new GuiCardFlipPlayer();
        this._guiCardFlipPlayer2.setName("_guiCardFlipPlayer2");
        this._layoutRoot.addChild(this._guiCardFlipPlayer2);
        this._guiCardFlipPlayer2.setCascadeOpacityEnabled(true);
        this._guiCardFlipPlayer2.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._guiCardFlipPlayer2, 0.075, 0.436);
        let _guiCardFlipPlayer2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._guiCardFlipPlayer2);
        _guiCardFlipPlayer2LayoutComponent.setPositionPercentXEnabled(true);
        _guiCardFlipPlayer2LayoutComponent.setPositionPercentX(0.075);
        _guiCardFlipPlayer2LayoutComponent.setPositionPercentYEnabled(true);
        _guiCardFlipPlayer2LayoutComponent.setPositionPercentY(0.436);

        ///// # _guiCardFlipPlayer3
        this._guiCardFlipPlayer3 = new GuiCardFlipPlayer();
        this._guiCardFlipPlayer3.setName("_guiCardFlipPlayer3");
        this._layoutRoot.addChild(this._guiCardFlipPlayer3);
        this._guiCardFlipPlayer3.setCascadeOpacityEnabled(true);
        this._guiCardFlipPlayer3.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._guiCardFlipPlayer3, 0.925, 0.436);
        let _guiCardFlipPlayer3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._guiCardFlipPlayer3);
        _guiCardFlipPlayer3LayoutComponent.setPositionPercentXEnabled(true);
        _guiCardFlipPlayer3LayoutComponent.setPositionPercentX(0.925);
        _guiCardFlipPlayer3LayoutComponent.setPositionPercentYEnabled(true);
        _guiCardFlipPlayer3LayoutComponent.setPositionPercentY(0.436);

        ///// # _guiCardFlipPlayer4
        this._guiCardFlipPlayer4 = new GuiCardFlipPlayer();
        this._guiCardFlipPlayer4.setName("_guiCardFlipPlayer4");
        this._layoutRoot.addChild(this._guiCardFlipPlayer4);
        this._guiCardFlipPlayer4.setCascadeOpacityEnabled(true);
        this._guiCardFlipPlayer4.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._guiCardFlipPlayer4, 0.075, 0.575);
        let _guiCardFlipPlayer4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._guiCardFlipPlayer4);
        _guiCardFlipPlayer4LayoutComponent.setPositionPercentXEnabled(true);
        _guiCardFlipPlayer4LayoutComponent.setPositionPercentX(0.075);
        _guiCardFlipPlayer4LayoutComponent.setPositionPercentYEnabled(true);
        _guiCardFlipPlayer4LayoutComponent.setPositionPercentY(0.575);

        ///// # _guiCardFlipPlayer5
        this._guiCardFlipPlayer5 = new GuiCardFlipPlayer();
        this._guiCardFlipPlayer5.setName("_guiCardFlipPlayer5");
        this._layoutRoot.addChild(this._guiCardFlipPlayer5);
        this._guiCardFlipPlayer5.setCascadeOpacityEnabled(true);
        this._guiCardFlipPlayer5.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._guiCardFlipPlayer5, 0.925, 0.575);
        let _guiCardFlipPlayer5LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._guiCardFlipPlayer5);
        _guiCardFlipPlayer5LayoutComponent.setPositionPercentXEnabled(true);
        _guiCardFlipPlayer5LayoutComponent.setPositionPercentX(0.925);
        _guiCardFlipPlayer5LayoutComponent.setPositionPercentYEnabled(true);
        _guiCardFlipPlayer5LayoutComponent.setPositionPercentY(0.575);

        ///// # _guiCardFlipPlayer6
        this._guiCardFlipPlayer6 = new GuiCardFlipPlayer();
        this._guiCardFlipPlayer6.setName("_guiCardFlipPlayer6");
        this._layoutRoot.addChild(this._guiCardFlipPlayer6);
        this._guiCardFlipPlayer6.setCascadeOpacityEnabled(true);
        this._guiCardFlipPlayer6.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._guiCardFlipPlayer6, 0.165, 0.706);
        let _guiCardFlipPlayer6LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._guiCardFlipPlayer6);
        _guiCardFlipPlayer6LayoutComponent.setPositionPercentXEnabled(true);
        _guiCardFlipPlayer6LayoutComponent.setPositionPercentX(0.165);
        _guiCardFlipPlayer6LayoutComponent.setPositionPercentYEnabled(true);
        _guiCardFlipPlayer6LayoutComponent.setPositionPercentY(0.706);

        ///// # _guiCardFlipPlayer7
        this._guiCardFlipPlayer7 = new GuiCardFlipPlayer();
        this._guiCardFlipPlayer7.setName("_guiCardFlipPlayer7");
        this._layoutRoot.addChild(this._guiCardFlipPlayer7);
        this._guiCardFlipPlayer7.setCascadeOpacityEnabled(true);
        this._guiCardFlipPlayer7.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._guiCardFlipPlayer7, 0.835, 0.706);
        let _guiCardFlipPlayer7LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._guiCardFlipPlayer7);
        _guiCardFlipPlayer7LayoutComponent.setPositionPercentXEnabled(true);
        _guiCardFlipPlayer7LayoutComponent.setPositionPercentX(0.835);
        _guiCardFlipPlayer7LayoutComponent.setPositionPercentYEnabled(true);
        _guiCardFlipPlayer7LayoutComponent.setPositionPercentY(0.706);

        ///// # _effectLose
        this._effectLose = new CardFlipEffectLose();
        this._effectLose.setName("_effectLose");
        this._layoutRoot.addChild(this._effectLose);
        this._effectLose.setCascadeOpacityEnabled(true);
        this._effectLose.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._effectLose, 0.5, 0.5);
        this._effectLose.setVisible(false);
        let _effectLoseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._effectLose);
        _effectLoseLayoutComponent.setPositionPercentXEnabled(true);
        _effectLoseLayoutComponent.setPositionPercentX(0.5);
        _effectLoseLayoutComponent.setPositionPercentYEnabled(true);
        _effectLoseLayoutComponent.setPositionPercentY(0.5);

        ///// # _effectWin
        this._effectWin = new CardFlipEffectWin();
        this._effectWin.setName("_effectWin");
        this._layoutRoot.addChild(this._effectWin);
        this._effectWin.setCascadeOpacityEnabled(true);
        this._effectWin.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._effectWin, 0.5, 0.5);
        this._effectWin.setVisible(false);
        let _effectWinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._effectWin);
        _effectWinLayoutComponent.setPositionPercentXEnabled(true);
        _effectWinLayoutComponent.setPositionPercentX(0.5);
        _effectWinLayoutComponent.setPositionPercentYEnabled(true);
        _effectWinLayoutComponent.setPositionPercentY(0.5);

        ///// # _gridOfferIcons
        this._gridOfferIcons = new ck.OfferIconGrid();
        this._gridOfferIcons.setName("_gridOfferIcons");
        this._layoutRoot.addChild(this._gridOfferIcons);
        this._gridOfferIcons.setCascadeOpacityEnabled(true);
        this._gridOfferIcons.setCascadeColorEnabled(true);
        this._gridOfferIcons.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._gridOfferIcons, 0.8999, 0.9818);
        let _gridOfferIconsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridOfferIcons);
        _gridOfferIconsLayoutComponent.setPositionPercentXEnabled(true);
        _gridOfferIconsLayoutComponent.setPositionPercentX(0.8999);
        _gridOfferIconsLayoutComponent.setPositionPercentYEnabled(true);
        _gridOfferIconsLayoutComponent.setPositionPercentY(0.9818);

        ///// # _chatPopup
        this._chatPopup = new ChatPopup();
        this._chatPopup.setName("_chatPopup");
        this._layoutRoot.addChild(this._chatPopup);
        this._chatPopup.setCascadeOpacityEnabled(true);
        this._chatPopup.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._chatPopup, 0.5, 0.5);
        this._chatPopup.setVisible(false);
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
        this._interactPopup.setVisible(false);
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
        ck.UIUtils.setPositionPercent(this._nodeTrophyProgress, 0.5, 0.25);
        let _nodeTrophyProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeTrophyProgress);
        _nodeTrophyProgressLayoutComponent.setPositionPercentXEnabled(true);
        _nodeTrophyProgressLayoutComponent.setPositionPercentX(0.5);
        _nodeTrophyProgressLayoutComponent.setPositionPercentYEnabled(true);
        _nodeTrophyProgressLayoutComponent.setPositionPercentY(0.25);

    },



});

/**
 * Create CardFlipLayer
 * @returns {_ccs.CardFlipLayer}
 */
_ccs.CardFlipLayer.create = function () {
    return new _ccs.CardFlipLayer();
};
