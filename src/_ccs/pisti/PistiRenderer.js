/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PistiRenderer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.PistiRenderer = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutBgr: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ccui.ImageView} */
    _imgDeckBgr: null,
    /** @type {ccui.ImageView} */
    _imgLogo: null,
    /** @type {ccui.Layout} */
    _layoutWaiting: null,
    /** @type {ck.Text} */
    _txtWaitingHeader: null,
    /** @type {ck.Text} */
    _txtWaitingTime: null,
    /** @type {TextFindingOpponent} */
    _txtWaitingPlayer: null,
    /** @type {ccui.Layout} */
    _layoutTips: null,
    /** @type {ccui.ImageView} */
    _imgBgrTip: null,
    /** @type {ck.Text} */
    _txtTipTitle: null,
    /** @type {ck.Text} */
    _txtTip: null,
    /** @type {ccui.Layout} */
    _layoutProfiles: null,
    /** @type {PistiPlayerRenderer} */
    _profileWidget00: null,
    /** @type {PistiPlayerRenderer} */
    _profileWidget01: null,
    /** @type {AccumulateTokenWidget} */
    _accumulateTokenWidget: null,
    /** @type {AccumulateExpWidget} */
    _accumulateExpWidget: null,
    /** @type {cc.Node} */
    _nodeMoveOut00: null,
    /** @type {cc.Node} */
    _nodeMoveOut01: null,
    /** @type {progressExp} */
    _expBar: null,
    /** @type {ccui.Layout} */
    _layoutCards: null,
    /** @type {ccui.Layout} */
    _layoutDeck: null,
    /** @type {ccui.ImageView} */
    _imgDeck: null,
    /** @type {ck.Text} */
    _txtCardAmount: null,
    /** @type {ccui.ImageView} */
    _imgCard00: null,
    /** @type {ccui.ImageView} */
    _imgCard01: null,
    /** @type {ccui.ImageView} */
    _imgCard02: null,
    /** @type {ccui.ImageView} */
    _imgCard03: null,
    /** @type {ccui.Layout} */
    _layoutUI: null,
    /** @type {ccui.Layout} */
    _layoutExit: null,
    /** @type {ccui.ImageView} */
    _imgExitBgr: null,
    /** @type {ccui.ImageView} */
    _imgExitIcon: null,
    /** @type {ccui.ImageView} */
    _imgExitIconDark: null,
    /** @type {ccui.Layout} */
    _layoutChat: null,
    /** @type {ccui.ImageView} */
    _imgChatBgr: null,
    /** @type {ccui.ImageView} */
    _imgChatIcon: null,
    /** @type {ccui.Layout} */
    _layoutHelp: null,
    /** @type {ccui.ImageView} */
    _imgHelpBgr: null,
    /** @type {ccui.ImageView} */
    _imgHelpIcon: null,
    /** @type {ccui.Layout} */
    _layoutBetInfo: null,
    /** @type {ccui.ImageView} */
    _imgBetInfoBgr: null,
    /** @type {ck.Text} */
    _txtBetAmountHeader: null,
    /** @type {ck.Text} */
    _txtBetAmount: null,
    /** @type {ccui.Layout} */
    _layoutAFK: null,
    /** @type {cc.Sprite} */
    _spriteAFKEmoji: null,
    /** @type {ck.Text} */
    _txtAFKMessage: null,
    /** @type {ck.Text} */
    _txtAFKMessage_0: null,
    /** @type {TextAFK} */
    _textAFK: null,
    /** @type {InventoryPanel} */
    _inventoryPanelLeft: null,
    /** @type {InventoryPanel} */
    _inventoryPanelRight: null,
    /** @type {ccui.ImageView} */
    _imgBgrQuest: null,
    /** @type {QuestIcon} */
    _iconQuest: null,
    /** @type {ck.GridViewHorizontal} */
    _gridViewEventIcons: null,
    /** @type {ck.OfferIconGrid} */
    _gridOfferIcons: null,
    /** @type {cc.Node} */
    _nodeJackpot: null,
    /** @type {ccui.Layout} */
    _layoutTurnAlert: null,
    /** @type {ccui.ImageView} */
    _imgTurnAlert: null,
    /** @type {ck.Text} */
    _txtTurnSkin: null,
    /** @type {ccui.Layout} */
    _layoutInteract: null,
    /** @type {cc.Node} */
    _playerInteractNode00: null,
    /** @type {cc.Node} */
    _playerChatNode00: null,
    /** @type {cc.Node} */
    _playerInteractNode01: null,
    /** @type {cc.Node} */
    _playerChatNode01: null,
    /** @type {EffectJUp} */
    _effectJUp: null,
    /** @type {EffectEye} */
    _effectEye: null,
    /** @type {EffectEyeCounter} */
    _effectEyeCounter: null,
    /** @type {EffectEyeCounterTrigger} */
    _effectEyeCounterTrigger: null,
    /** @type {EffectXPX2} */
    _effectXPX2: null,
    /** @type {ccui.Layout} */
    _layoutPisti: null,
    /** @type {cc.Node} */
    _nodePisti: null,
    /** @type {ccui.Layout} */
    _layoutHiddenCards: null,
    /** @type {cc.Sprite} */
    _spriteHiddenCard00: null,
    /** @type {cc.Sprite} */
    _spriteHiddenCard01: null,
    /** @type {cc.Sprite} */
    _spriteHiddenCard02: null,
    /** @type {ccui.Layout} */
    _layoutHiddenCardHeader: null,
    /** @type {ccui.ImageView} */
    _imgHiddenCardHeader: null,
    /** @type {ck.Text} */
    _txtHiddenCardHeader: null,
    /** @type {InteractPopup} */
    _interactPopup: null,
    /** @type {ChatPopup} */
    _chatPopup: null,
    /** @type {cc.Node} */
    _nodeBigBet: null,
    /** @type {ccui.ImageView} */
    _imgIconBigBet: null,
    /** @type {ck.Text} */
    _txtBigBetValue: null,
    /** @type {ccui.Layout} */
    _layoutEndGame: null,
    /** @type {ccui.Layout} */
    _layoutEndGameBgr: null,
    /** @type {ccui.ImageView} */
    _imgGameOver: null,
    /** @type {PistiResultLayer} */
    _resultLayer: null,
    /** @type {PistiSummaryLayer} */
    _summaryPopup: null,
    /** @type {ccui.Layout} */
    _layoutSkip: null,
    /** @type {ccui.ImageView} */
    _imgSkipBgr: null,
    /** @type {ck.Text} */
    _txtSkip: null,
    /** @type {ItemTip} */
    _itemTip: null,
    /** @type {cc.Node} */
    _nodeTrophyProgress: null,
    /** @type {cc.Node} */
    _portalFoxPosition: null,


    /**
     * _ccs.PistiRenderer constructor
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
        this._layoutRoot.setTouchEnabled(true);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutRoot, 1, 1);

        ///// # _layoutBgr
        this._layoutBgr = new ccui.Layout();
        this._layoutBgr.setName("_layoutBgr");
        this._layoutRoot.addChild(this._layoutBgr);
        this._layoutBgr.setCascadeOpacityEnabled(true);
        this._layoutBgr.setCascadeColorEnabled(true);
        this._layoutBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBgr, 0.5, 0.5);
        let _layoutBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBgr);
        _layoutBgrLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBgrLayoutComponent.setPositionPercentX(0.5);
        _layoutBgrLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBgrLayoutComponent.setPositionPercentY(0.5);
        _layoutBgrLayoutComponent.setPercentWidthEnabled(true);
        _layoutBgrLayoutComponent.setPercentWidth(1);
        _layoutBgrLayoutComponent.setPercentHeightEnabled(true);
        _layoutBgrLayoutComponent.setPercentHeight(1);
        this._layoutBgr.setTouchEnabled(true);
        this._layoutBgr.setUnifySizeEnabled(false);
        this._layoutBgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBgr, 1, 1);

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._layoutBgr.addChild(this._imgBgr);
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
        this._imgBgr.loadTexture("sprites/backgrounds/Game.png", 0);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBgr, 1, 1);
        this._imgBgr.setTouchEnabled(false);
        UIUtils.initFullScreenBackground(this._imgBgr);

        ///// # _imgDeckBgr
        this._imgDeckBgr = new ccui.ImageView();
        this._imgDeckBgr.setName("_imgDeckBgr");
        this._layoutBgr.addChild(this._imgDeckBgr);
        this._imgDeckBgr.setCascadeOpacityEnabled(true);
        this._imgDeckBgr.setCascadeColorEnabled(true);
        this._imgDeckBgr.setAnchorPoint(cc.p(0, 0.4871));
        ck.UIUtils.setPositionPercent(this._imgDeckBgr, 0, 0.5);
        let _imgDeckBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDeckBgr);
        _imgDeckBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgDeckBgrLayoutComponent.setPositionPercentX(0);
        _imgDeckBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgDeckBgrLayoutComponent.setPositionPercentY(0.5);
        this._imgDeckBgr.loadTexture("game/ui/DeckBox.png", 1);
        this._imgDeckBgr.setUnifySizeEnabled(false);
        this._imgDeckBgr.ignoreContentAdaptWithSize(false);
        this._imgDeckBgr.setScale9Enabled(true);
        this._imgDeckBgr.setCapInsets(cc.rect(30, 51, 32, 27));
        this._imgDeckBgr.setContentSize(cc.size(92, 129));
        this._imgDeckBgr.setTouchEnabled(false);

        ///// # _imgLogo
        this._imgLogo = new ccui.ImageView();
        this._imgLogo.setName("_imgLogo");
        this._layoutBgr.addChild(this._imgLogo);
        this._imgLogo.setCascadeOpacityEnabled(true);
        this._imgLogo.setCascadeColorEnabled(true);
        this._imgLogo.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLogo, 0.5, 0.5);
        let _imgLogoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLogo);
        _imgLogoLayoutComponent.setPositionPercentXEnabled(true);
        _imgLogoLayoutComponent.setPositionPercentX(0.5);
        _imgLogoLayoutComponent.setPositionPercentYEnabled(true);
        _imgLogoLayoutComponent.setPositionPercentY(0.5);
        _imgLogoLayoutComponent.setPercentWidthEnabled(true);
        _imgLogoLayoutComponent.setPercentWidth(0.5109);
        _imgLogoLayoutComponent.setPercentHeightEnabled(true);
        _imgLogoLayoutComponent.setPercentHeight(0.1673);
        this._imgLogo.loadTexture("texts/game/PistiLogo.png", 1);
        this._imgLogo.setTouchEnabled(false);

        ///// # _layoutWaiting
        this._layoutWaiting = new ccui.Layout();
        this._layoutWaiting.setName("_layoutWaiting");
        this._layoutRoot.addChild(this._layoutWaiting);
        this._layoutWaiting.setCascadeOpacityEnabled(true);
        this._layoutWaiting.setCascadeColorEnabled(true);
        this._layoutWaiting.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutWaiting, 0.5, 0.5);
        let _layoutWaitingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutWaiting);
        _layoutWaitingLayoutComponent.setPositionPercentXEnabled(true);
        _layoutWaitingLayoutComponent.setPositionPercentX(0.5);
        _layoutWaitingLayoutComponent.setPositionPercentYEnabled(true);
        _layoutWaitingLayoutComponent.setPositionPercentY(0.5);
        _layoutWaitingLayoutComponent.setPercentWidthEnabled(true);
        _layoutWaitingLayoutComponent.setPercentWidth(1);
        _layoutWaitingLayoutComponent.setPercentHeightEnabled(true);
        _layoutWaitingLayoutComponent.setPercentHeight(1);
        this._layoutWaiting.setTouchEnabled(false);
        this._layoutWaiting.setUnifySizeEnabled(false);
        this._layoutWaiting.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutWaiting, 1, 1);

        ///// # _txtWaitingHeader
        this._txtWaitingHeader = new ck.Text();
        this._txtWaitingHeader.setName("_txtWaitingHeader");
        this._layoutWaiting.addChild(this._txtWaitingHeader);
        this._txtWaitingHeader.setCascadeOpacityEnabled(true);
        this._txtWaitingHeader.setCascadeColorEnabled(true);
        this._txtWaitingHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtWaitingHeader, 0.5, 0.6);
        let _txtWaitingHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtWaitingHeader);
        _txtWaitingHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtWaitingHeaderLayoutComponent.setPositionPercentX(0.5);
        _txtWaitingHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtWaitingHeaderLayoutComponent.setPositionPercentY(0.6);
        this._txtWaitingHeader.setTouchEnabled(false);
        this._txtWaitingHeader.ignoreContentAdaptWithSize(true);
        this._txtWaitingHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtWaitingHeader.setDefaultFontSize(50);
        this._txtWaitingHeader.setString(gm.localize.getText("TXT_GAME_START_MESSAGE"));
        this._txtWaitingHeader.setTextHorizontalAlignment(1);
        this._txtWaitingHeader.setTextVerticalAlignment(1);

        ///// # _txtWaitingTime
        this._txtWaitingTime = new ck.Text();
        this._txtWaitingTime.setName("_txtWaitingTime");
        this._layoutWaiting.addChild(this._txtWaitingTime);
        this._txtWaitingTime.setCascadeOpacityEnabled(true);
        this._txtWaitingTime.setCascadeColorEnabled(true);
        this._txtWaitingTime.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtWaitingTime, 0.5, 0.5);
        this._txtWaitingTime.setTextColor(cc.color(255, 246, 180, 255));
        let _txtWaitingTimeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtWaitingTime);
        _txtWaitingTimeLayoutComponent.setPositionPercentXEnabled(true);
        _txtWaitingTimeLayoutComponent.setPositionPercentX(0.5);
        _txtWaitingTimeLayoutComponent.setPositionPercentYEnabled(true);
        _txtWaitingTimeLayoutComponent.setPositionPercentY(0.5);
        this._txtWaitingTime.setTouchEnabled(false);
        this._txtWaitingTime.ignoreContentAdaptWithSize(true);
        this._txtWaitingTime.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtWaitingTime.setDefaultFontSize(100);
        this._txtWaitingTime.setString("30");
        this._txtWaitingTime.setTextHorizontalAlignment(1);
        this._txtWaitingTime.setTextVerticalAlignment(1);
        this._txtWaitingTime.enableOutline(cc.color(81, 57, 0, 255), 3);

        ///// # _txtWaitingPlayer
        this._txtWaitingPlayer = new TextFindingOpponent();
        this._txtWaitingPlayer.setName("_txtWaitingPlayer");
        this._layoutRoot.addChild(this._txtWaitingPlayer);
        this._txtWaitingPlayer.setCascadeOpacityEnabled(true);
        this._txtWaitingPlayer.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._txtWaitingPlayer, 0.7145, 0.45);
        let _txtWaitingPlayerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtWaitingPlayer);
        _txtWaitingPlayerLayoutComponent.setPositionPercentXEnabled(true);
        _txtWaitingPlayerLayoutComponent.setPositionPercentX(0.7145);
        _txtWaitingPlayerLayoutComponent.setPositionPercentYEnabled(true);
        _txtWaitingPlayerLayoutComponent.setPositionPercentY(0.45);

        ///// # _layoutTips
        this._layoutTips = new ccui.Layout();
        this._layoutTips.setName("_layoutTips");
        this._layoutRoot.addChild(this._layoutTips);
        this._layoutTips.setCascadeOpacityEnabled(true);
        this._layoutTips.setCascadeColorEnabled(true);
        this._layoutTips.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutTips, 0.5, 0.8);
        let _layoutTipsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTips);
        _layoutTipsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTipsLayoutComponent.setPositionPercentX(0.5);
        _layoutTipsLayoutComponent.setPositionPercentYEnabled(true);
        _layoutTipsLayoutComponent.setPositionPercentY(0.8);
        this._layoutTips.setTouchEnabled(true);
        this._layoutTips.setUnifySizeEnabled(false);
        this._layoutTips.ignoreContentAdaptWithSize(false);
        this._layoutTips.setContentSize(cc.size(400, 170));

        ///// # _imgBgrTip
        this._imgBgrTip = new ccui.ImageView();
        this._imgBgrTip.setName("_imgBgrTip");
        this._layoutTips.addChild(this._imgBgrTip);
        this._imgBgrTip.setCascadeOpacityEnabled(true);
        this._imgBgrTip.setCascadeColorEnabled(true);
        this._imgBgrTip.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgrTip, 0.5, 0.5);
        this._imgBgrTip.setOpacity(51);
        this._imgBgrTip.setColor(cc.color(0, 0, 0, 255));
        let _imgBgrTipLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrTip);
        _imgBgrTipLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrTipLayoutComponent.setPositionPercentX(0.5);
        _imgBgrTipLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrTipLayoutComponent.setPositionPercentY(0.5);
        _imgBgrTipLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrTipLayoutComponent.setPercentWidth(1);
        _imgBgrTipLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrTipLayoutComponent.setPercentHeight(1);
        this._imgBgrTip.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgBgrTip.setUnifySizeEnabled(false);
        this._imgBgrTip.ignoreContentAdaptWithSize(false);
        this._imgBgrTip.setScale9Enabled(true);
        this._imgBgrTip.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgBgrTip, 1, 1);
        this._imgBgrTip.setTouchEnabled(false);

        ///// # _txtTipTitle
        this._txtTipTitle = new ck.Text();
        this._txtTipTitle.setName("_txtTipTitle");
        this._layoutTips.addChild(this._txtTipTitle);
        this._txtTipTitle.setCascadeOpacityEnabled(true);
        this._txtTipTitle.setCascadeColorEnabled(true);
        this._txtTipTitle.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._txtTipTitle, 0.5, 0.94);
        let _txtTipTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTipTitle);
        _txtTipTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtTipTitleLayoutComponent.setPositionPercentX(0.5);
        _txtTipTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtTipTitleLayoutComponent.setPositionPercentY(0.94);
        this._txtTipTitle.setTouchEnabled(false);
        this._txtTipTitle.ignoreContentAdaptWithSize(true);
        this._txtTipTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTipTitle.setDefaultFontSize(40);
        this._txtTipTitle.setString("Tips:");
        this._txtTipTitle.setTextHorizontalAlignment(0);
        this._txtTipTitle.setTextVerticalAlignment(0);
        this._txtTipTitle.enableOutline(cc.color(55, 55, 55, 255), 1);
        this._txtTipTitle.enableShadow(cc.color(55, 55, 55, 255), cc.size(0, -1), 0);

        ///// # _txtTip
        this._txtTip = new ck.Text();
        this._txtTip.setName("_txtTip");
        this._layoutTips.addChild(this._txtTip);
        this._txtTip.setCascadeOpacityEnabled(true);
        this._txtTip.setCascadeColorEnabled(true);
        this._txtTip.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTip, 0.5, 0.37);
        let _txtTipLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTip);
        _txtTipLayoutComponent.setPositionPercentXEnabled(true);
        _txtTipLayoutComponent.setPositionPercentX(0.5);
        _txtTipLayoutComponent.setPositionPercentYEnabled(true);
        _txtTipLayoutComponent.setPositionPercentY(0.37);
        this._txtTip.setTouchEnabled(false);
        this._txtTip.setUnifySizeEnabled(false);
        this._txtTip.ignoreContentAdaptWithSize(false);
        this._txtTip.setContentSize(cc.size(379.6796, 97.52));
        this._txtTip.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTip.setDefaultFontSize(34);
        this._txtTip.setString("Login game oftenly to get free gold and gifts");
        this._txtTip.setTextHorizontalAlignment(1);
        this._txtTip.setTextVerticalAlignment(1);
        this._txtTip.enableOutline(cc.color(55, 55, 55, 255), 1);

        ///// # _layoutProfiles
        this._layoutProfiles = new ccui.Layout();
        this._layoutProfiles.setName("_layoutProfiles");
        this._layoutRoot.addChild(this._layoutProfiles);
        this._layoutProfiles.setCascadeOpacityEnabled(true);
        this._layoutProfiles.setCascadeColorEnabled(true);
        let _layoutProfilesLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProfiles);
        _layoutProfilesLayoutComponent.setPositionPercentXEnabled(true);
        _layoutProfilesLayoutComponent.setPositionPercentX(0);
        _layoutProfilesLayoutComponent.setPositionPercentYEnabled(true);
        _layoutProfilesLayoutComponent.setPositionPercentY(0);
        _layoutProfilesLayoutComponent.setPercentWidthEnabled(true);
        _layoutProfilesLayoutComponent.setPercentWidth(1);
        _layoutProfilesLayoutComponent.setPercentHeightEnabled(true);
        _layoutProfilesLayoutComponent.setPercentHeight(1);
        this._layoutProfiles.setTouchEnabled(false);
        this._layoutProfiles.setUnifySizeEnabled(false);
        this._layoutProfiles.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutProfiles, 1, 1);

        ///// # _profileWidget00
        this._profileWidget00 = new PistiPlayerRenderer();
        this._profileWidget00.setName("_profileWidget00");
        this._layoutProfiles.addChild(this._profileWidget00);
        this._profileWidget00.setCascadeOpacityEnabled(true);
        this._profileWidget00.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._profileWidget00, 0.5, 0.095);
        let _profileWidget00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._profileWidget00);
        _profileWidget00LayoutComponent.setPositionPercentXEnabled(true);
        _profileWidget00LayoutComponent.setPositionPercentX(0.5);
        _profileWidget00LayoutComponent.setPositionPercentYEnabled(true);
        _profileWidget00LayoutComponent.setPositionPercentY(0.095);

        ///// # _profileWidget01
        this._profileWidget01 = new PistiPlayerRenderer();
        this._profileWidget01.setName("_profileWidget01");
        this._layoutProfiles.addChild(this._profileWidget01);
        this._profileWidget01.setCascadeOpacityEnabled(true);
        this._profileWidget01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._profileWidget01, 0.5, 0.94);
        let _profileWidget01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._profileWidget01);
        _profileWidget01LayoutComponent.setPositionPercentXEnabled(true);
        _profileWidget01LayoutComponent.setPositionPercentX(0.5);
        _profileWidget01LayoutComponent.setPositionPercentYEnabled(true);
        _profileWidget01LayoutComponent.setPositionPercentY(0.94);

        ///// # _accumulateTokenWidget
        this._accumulateTokenWidget = new AccumulateTokenWidget();
        this._accumulateTokenWidget.setName("_accumulateTokenWidget");
        this._layoutProfiles.addChild(this._accumulateTokenWidget);
        this._accumulateTokenWidget.setCascadeOpacityEnabled(true);
        this._accumulateTokenWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._accumulateTokenWidget, 0.5, 0.14);
        let _accumulateTokenWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._accumulateTokenWidget);
        _accumulateTokenWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _accumulateTokenWidgetLayoutComponent.setPositionPercentX(0.5);
        _accumulateTokenWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _accumulateTokenWidgetLayoutComponent.setPositionPercentY(0.14);

        ///// # _accumulateExpWidget
        this._accumulateExpWidget = new AccumulateExpWidget();
        this._accumulateExpWidget.setName("_accumulateExpWidget");
        this._layoutProfiles.addChild(this._accumulateExpWidget);
        this._accumulateExpWidget.setCascadeOpacityEnabled(true);
        this._accumulateExpWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._accumulateExpWidget, 0.5, 0.13);
        let _accumulateExpWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._accumulateExpWidget);
        _accumulateExpWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _accumulateExpWidgetLayoutComponent.setPositionPercentX(0.5);
        _accumulateExpWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _accumulateExpWidgetLayoutComponent.setPositionPercentY(0.13);

        ///// # _nodeMoveOut00
        this._nodeMoveOut00 = new cc.Node();
        this._nodeMoveOut00.setName("_nodeMoveOut00");
        this._layoutProfiles.addChild(this._nodeMoveOut00);
        this._nodeMoveOut00.setCascadeOpacityEnabled(true);
        this._nodeMoveOut00.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeMoveOut00, 0.5, -0.125);
        let _nodeMoveOut00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeMoveOut00);
        _nodeMoveOut00LayoutComponent.setPositionPercentXEnabled(true);
        _nodeMoveOut00LayoutComponent.setPositionPercentX(0.5);
        _nodeMoveOut00LayoutComponent.setPositionPercentYEnabled(true);
        _nodeMoveOut00LayoutComponent.setPositionPercentY(-0.125);

        ///// # _nodeMoveOut01
        this._nodeMoveOut01 = new cc.Node();
        this._nodeMoveOut01.setName("_nodeMoveOut01");
        this._layoutProfiles.addChild(this._nodeMoveOut01);
        this._nodeMoveOut01.setCascadeOpacityEnabled(true);
        this._nodeMoveOut01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeMoveOut01, 0.5, 1.125);
        let _nodeMoveOut01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeMoveOut01);
        _nodeMoveOut01LayoutComponent.setPositionPercentXEnabled(true);
        _nodeMoveOut01LayoutComponent.setPositionPercentX(0.5);
        _nodeMoveOut01LayoutComponent.setPositionPercentYEnabled(true);
        _nodeMoveOut01LayoutComponent.setPositionPercentY(1.125);

        ///// # _expBar
        this._expBar = new progressExp();
        this._expBar.setName("_expBar");
        this._layoutProfiles.addChild(this._expBar);
        this._expBar.setCascadeOpacityEnabled(true);
        this._expBar.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._expBar, 0.5, 0.0264);
        this._expBar.setScale(0.93, 0.93);
        let _expBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._expBar);
        _expBarLayoutComponent.setPositionPercentXEnabled(true);
        _expBarLayoutComponent.setPositionPercentX(0.5);

        ///// # _layoutCards
        this._layoutCards = new ccui.Layout();
        this._layoutCards.setName("_layoutCards");
        this._layoutRoot.addChild(this._layoutCards);
        this._layoutCards.setCascadeOpacityEnabled(true);
        this._layoutCards.setCascadeColorEnabled(true);
        let _layoutCardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCards);
        _layoutCardsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCardsLayoutComponent.setPositionPercentX(0);
        _layoutCardsLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCardsLayoutComponent.setPositionPercentY(0);
        _layoutCardsLayoutComponent.setPercentWidthEnabled(true);
        _layoutCardsLayoutComponent.setPercentWidth(1);
        _layoutCardsLayoutComponent.setPercentHeightEnabled(true);
        _layoutCardsLayoutComponent.setPercentHeight(1);
        this._layoutCards.setTouchEnabled(false);
        this._layoutCards.setUnifySizeEnabled(false);
        this._layoutCards.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutCards, 1, 1);

        ///// # _layoutDeck
        this._layoutDeck = new ccui.Layout();
        this._layoutDeck.setName("_layoutDeck");
        this._layoutCards.addChild(this._layoutDeck);
        this._layoutDeck.setCascadeOpacityEnabled(true);
        this._layoutDeck.setCascadeColorEnabled(true);
        this._layoutDeck.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutDeck, 0, 0.5);
        let _layoutDeckLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutDeck);
        _layoutDeckLayoutComponent.setPositionPercentXEnabled(true);
        _layoutDeckLayoutComponent.setPositionPercentX(0);
        _layoutDeckLayoutComponent.setPositionPercentYEnabled(true);
        _layoutDeckLayoutComponent.setPositionPercentY(0.5);
        this._layoutDeck.setTouchEnabled(false);
        this._layoutDeck.setUnifySizeEnabled(false);
        this._layoutDeck.ignoreContentAdaptWithSize(false);
        this._layoutDeck.setContentSize(cc.size(92, 130));

        ///// # _imgDeck
        this._imgDeck = new ccui.ImageView();
        this._imgDeck.setName("_imgDeck");
        this._layoutDeck.addChild(this._imgDeck);
        this._imgDeck.setCascadeOpacityEnabled(true);
        this._imgDeck.setCascadeColorEnabled(true);
        this._imgDeck.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgDeck, 0.5, 0.5);
        let _imgDeckLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDeck);
        _imgDeckLayoutComponent.setPositionPercentXEnabled(true);
        _imgDeckLayoutComponent.setPositionPercentX(0.5);
        _imgDeckLayoutComponent.setPositionPercentYEnabled(true);
        _imgDeckLayoutComponent.setPositionPercentY(0.5);
        this._imgDeck.loadTexture("game/ui/Deck.png", 1);
        this._imgDeck.setUnifySizeEnabled(false);
        this._imgDeck.ignoreContentAdaptWithSize(false);
        this._imgDeck.setScale9Enabled(true);
        this._imgDeck.setCapInsets(cc.rect(2, 47, 65, 4));
        this._imgDeck.setContentSize(cc.size(69, 98));
        this._imgDeck.setTouchEnabled(false);

        ///// # _txtCardAmount
        this._txtCardAmount = new ck.Text();
        this._txtCardAmount.setName("_txtCardAmount");
        this._layoutDeck.addChild(this._txtCardAmount);
        this._txtCardAmount.setCascadeOpacityEnabled(true);
        this._txtCardAmount.setCascadeColorEnabled(true);
        this._txtCardAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCardAmount, 0.5, 0.55);
        let _txtCardAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCardAmount);
        _txtCardAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtCardAmountLayoutComponent.setPositionPercentX(0.5);
        _txtCardAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtCardAmountLayoutComponent.setPositionPercentY(0.55);
        this._txtCardAmount.setTouchEnabled(false);
        this._txtCardAmount.ignoreContentAdaptWithSize(true);
        this._txtCardAmount.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCardAmount.setDefaultFontSize(35);
        this._txtCardAmount.setTextHorizontalAlignment(1);
        this._txtCardAmount.setTextVerticalAlignment(1);
        this._txtCardAmount.enableOutline(cc.color(50, 46, 87, 255), 2);

        ///// # _imgCard00
        this._imgCard00 = new ccui.ImageView();
        this._imgCard00.setName("_imgCard00");
        this._layoutCards.addChild(this._imgCard00);
        this._imgCard00.setCascadeOpacityEnabled(true);
        this._imgCard00.setCascadeColorEnabled(true);
        this._imgCard00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCard00, 0.5, 0.23);
        this._imgCard00.setScale(0.68, 0.68);
        let _imgCard00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard00);
        _imgCard00LayoutComponent.setPositionPercentXEnabled(true);
        _imgCard00LayoutComponent.setPositionPercentX(0.5);
        _imgCard00LayoutComponent.setPositionPercentYEnabled(true);
        _imgCard00LayoutComponent.setPositionPercentY(0.23);
        this._imgCard00.loadTexture("cards/02.png", 1);
        this._imgCard00.setUnifySizeEnabled(false);
        this._imgCard00.ignoreContentAdaptWithSize(false);
        this._imgCard00.setScale9Enabled(true);
        this._imgCard00.setCapInsets(cc.rect(67, 95, 52, 66));
        this._imgCard00.setContentSize(cc.size(186, 256));
        this._imgCard00.setTouchEnabled(false);

        ///// # _imgCard01
        this._imgCard01 = new ccui.ImageView();
        this._imgCard01.setName("_imgCard01");
        this._layoutCards.addChild(this._imgCard01);
        this._imgCard01.setCascadeOpacityEnabled(true);
        this._imgCard01.setCascadeColorEnabled(true);
        this._imgCard01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCard01, 0.5, 0.8143);
        this._imgCard01.setScale(0.55, 0.55);
        let _imgCard01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard01);
        _imgCard01LayoutComponent.setPositionPercentXEnabled(true);
        _imgCard01LayoutComponent.setPositionPercentX(0.5);
        _imgCard01LayoutComponent.setPositionPercentYEnabled(true);
        _imgCard01LayoutComponent.setPositionPercentY(0.8143);
        this._imgCard01.loadTexture("cards/backs/Green.png", 1);
        this._imgCard01.setUnifySizeEnabled(false);
        this._imgCard01.ignoreContentAdaptWithSize(false);
        this._imgCard01.setScale9Enabled(true);
        this._imgCard01.setCapInsets(cc.rect(67, 95, 52, 66));
        this._imgCard01.setContentSize(cc.size(186, 256));
        this._imgCard01.setTouchEnabled(false);

        ///// # _imgCard02
        this._imgCard02 = new ccui.ImageView();
        this._imgCard02.setName("_imgCard02");
        this._layoutCards.addChild(this._imgCard02);
        this._imgCard02.setCascadeOpacityEnabled(true);
        this._imgCard02.setCascadeColorEnabled(true);
        this._imgCard02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCard02, 0.5, 0.5);
        this._imgCard02.setScale(0.625, 0.625);
        let _imgCard02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard02);
        _imgCard02LayoutComponent.setPositionPercentXEnabled(true);
        _imgCard02LayoutComponent.setPositionPercentX(0.5);
        _imgCard02LayoutComponent.setPositionPercentYEnabled(true);
        _imgCard02LayoutComponent.setPositionPercentY(0.5);
        this._imgCard02.loadTexture("cards/03.png", 1);
        this._imgCard02.setUnifySizeEnabled(false);
        this._imgCard02.ignoreContentAdaptWithSize(false);
        this._imgCard02.setScale9Enabled(true);
        this._imgCard02.setCapInsets(cc.rect(67, 95, 52, 66));
        this._imgCard02.setContentSize(cc.size(186, 256));
        this._imgCard02.setTouchEnabled(false);

        ///// # _imgCard03
        this._imgCard03 = new ccui.ImageView();
        this._imgCard03.setName("_imgCard03");
        this._layoutCards.addChild(this._imgCard03);
        this._imgCard03.setCascadeOpacityEnabled(true);
        this._imgCard03.setCascadeColorEnabled(true);
        this._imgCard03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCard03, 0.0735, 0.5044);
        this._imgCard03.setScale(0.35, 0.35);
        let _imgCard03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard03);
        _imgCard03LayoutComponent.setPositionPercentXEnabled(true);
        _imgCard03LayoutComponent.setPositionPercentX(0.0735);
        _imgCard03LayoutComponent.setPositionPercentYEnabled(true);
        _imgCard03LayoutComponent.setPositionPercentY(0.5044);
        this._imgCard03.loadTexture("cards/backs/Green.png", 1);
        this._imgCard03.setUnifySizeEnabled(false);
        this._imgCard03.ignoreContentAdaptWithSize(false);
        this._imgCard03.setScale9Enabled(true);
        this._imgCard03.setCapInsets(cc.rect(67, 95, 52, 66));
        this._imgCard03.setContentSize(cc.size(186, 256));
        this._imgCard03.setTouchEnabled(false);

        ///// # _layoutUI
        this._layoutUI = new ccui.Layout();
        this._layoutUI.setName("_layoutUI");
        this._layoutRoot.addChild(this._layoutUI);
        this._layoutUI.setCascadeOpacityEnabled(true);
        this._layoutUI.setCascadeColorEnabled(true);
        this._layoutUI.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutUI, 0.5, 0.5);
        let _layoutUILayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutUI);
        _layoutUILayoutComponent.setPositionPercentXEnabled(true);
        _layoutUILayoutComponent.setPositionPercentX(0.5);
        _layoutUILayoutComponent.setPositionPercentYEnabled(true);
        _layoutUILayoutComponent.setPositionPercentY(0.5);
        _layoutUILayoutComponent.setPercentWidthEnabled(true);
        _layoutUILayoutComponent.setPercentWidth(1);
        _layoutUILayoutComponent.setPercentHeightEnabled(true);
        _layoutUILayoutComponent.setPercentHeight(1);
        this._layoutUI.setTouchEnabled(false);
        this._layoutUI.setUnifySizeEnabled(false);
        this._layoutUI.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutUI, 1, 1);

        ///// # _layoutExit
        this._layoutExit = new ccui.Layout();
        this._layoutExit.setName("_layoutExit");
        this._layoutUI.addChild(this._layoutExit);
        this._layoutExit.setCascadeOpacityEnabled(true);
        this._layoutExit.setCascadeColorEnabled(true);
        this._layoutExit.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutExit, 0.0825, 0.0493);
        let _layoutExitLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutExit);
        _layoutExitLayoutComponent.setPositionPercentXEnabled(true);
        _layoutExitLayoutComponent.setPositionPercentX(0.0825);
        _layoutExitLayoutComponent.setPositionPercentYEnabled(true);
        _layoutExitLayoutComponent.setPositionPercentY(0.0493);
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

        ///// # _layoutChat
        this._layoutChat = new ccui.Layout();
        this._layoutChat.setName("_layoutChat");
        this._layoutUI.addChild(this._layoutChat);
        this._layoutChat.setCascadeOpacityEnabled(true);
        this._layoutChat.setCascadeColorEnabled(true);
        this._layoutChat.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutChat, 0.9112, 0.0496);
        let _layoutChatLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutChat);
        _layoutChatLayoutComponent.setPositionPercentXEnabled(true);
        _layoutChatLayoutComponent.setPositionPercentX(0.9112);
        _layoutChatLayoutComponent.setPositionPercentYEnabled(true);
        _layoutChatLayoutComponent.setPositionPercentY(0.0496);
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

        ///// # _layoutHelp
        this._layoutHelp = new ccui.Layout();
        this._layoutHelp.setName("_layoutHelp");
        this._layoutUI.addChild(this._layoutHelp);
        this._layoutHelp.setCascadeOpacityEnabled(true);
        this._layoutHelp.setCascadeColorEnabled(true);
        this._layoutHelp.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutHelp, 0.0825, 0.9511);
        let _layoutHelpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHelp);
        _layoutHelpLayoutComponent.setPositionPercentXEnabled(true);
        _layoutHelpLayoutComponent.setPositionPercentX(0.0825);
        _layoutHelpLayoutComponent.setPositionPercentYEnabled(true);
        _layoutHelpLayoutComponent.setPositionPercentY(0.9511);
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

        ///// # _layoutBetInfo
        this._layoutBetInfo = new ccui.Layout();
        this._layoutBetInfo.setName("_layoutBetInfo");
        this._layoutUI.addChild(this._layoutBetInfo);
        this._layoutBetInfo.setCascadeOpacityEnabled(true);
        this._layoutBetInfo.setCascadeColorEnabled(true);
        this._layoutBetInfo.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBetInfo, 0.9147, 0.951);
        let _layoutBetInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBetInfo);
        _layoutBetInfoLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBetInfoLayoutComponent.setPositionPercentX(0.9147);
        _layoutBetInfoLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBetInfoLayoutComponent.setPositionPercentY(0.951);
        this._layoutBetInfo.setTouchEnabled(true);
        this._layoutBetInfo.setUnifySizeEnabled(false);
        this._layoutBetInfo.ignoreContentAdaptWithSize(false);
        this._layoutBetInfo.setContentSize(cc.size(99.3707, 73.0301));

        ///// # _imgBetInfoBgr
        this._imgBetInfoBgr = new ccui.ImageView();
        this._imgBetInfoBgr.setName("_imgBetInfoBgr");
        this._layoutBetInfo.addChild(this._imgBetInfoBgr);
        this._imgBetInfoBgr.setCascadeOpacityEnabled(true);
        this._imgBetInfoBgr.setCascadeColorEnabled(true);
        this._imgBetInfoBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBetInfoBgr, 0.5, 0.5);
        let _imgBetInfoBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBetInfoBgr);
        _imgBetInfoBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBetInfoBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBetInfoBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBetInfoBgrLayoutComponent.setPositionPercentY(0.5);
        _imgBetInfoBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgBetInfoBgrLayoutComponent.setPercentWidth(1);
        _imgBetInfoBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgBetInfoBgrLayoutComponent.setPercentHeight(1);
        this._imgBetInfoBgr.loadTexture("basics/other/GrayBox.png", 1);
        this._imgBetInfoBgr.setUnifySizeEnabled(false);
        this._imgBetInfoBgr.ignoreContentAdaptWithSize(false);
        this._imgBetInfoBgr.setScale9Enabled(true);
        this._imgBetInfoBgr.setCapInsets(cc.rect(6, 5, 2, 2));
        ck.UIUtils.setSizePercent(this._imgBetInfoBgr, 1, 1);
        this._imgBetInfoBgr.setTouchEnabled(false);

        ///// # _txtBetAmountHeader
        this._txtBetAmountHeader = new ck.Text();
        this._txtBetAmountHeader.setName("_txtBetAmountHeader");
        this._layoutBetInfo.addChild(this._txtBetAmountHeader);
        this._txtBetAmountHeader.setCascadeOpacityEnabled(true);
        this._txtBetAmountHeader.setCascadeColorEnabled(true);
        this._txtBetAmountHeader.setAnchorPoint(cc.p(0.5206, 0.4047));
        ck.UIUtils.setPositionPercent(this._txtBetAmountHeader, 0.5356, 0.6905);
        let _txtBetAmountHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBetAmountHeader);
        _txtBetAmountHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtBetAmountHeaderLayoutComponent.setPositionPercentX(0.5356);
        _txtBetAmountHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtBetAmountHeaderLayoutComponent.setPositionPercentY(0.6905);
        this._txtBetAmountHeader.setTouchEnabled(false);
        this._txtBetAmountHeader.ignoreContentAdaptWithSize(true);
        this._txtBetAmountHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBetAmountHeader.setDefaultFontSize(23);
        this._txtBetAmountHeader.setString(gm.localize.getText("TXT_BET"));
        this._txtBetAmountHeader.setTextHorizontalAlignment(1);
        this._txtBetAmountHeader.setTextVerticalAlignment(1);
        this._txtBetAmountHeader.enableShadow(cc.color(82, 52, 0, 255), cc.size(0, -1), 0);

        ///// # _txtBetAmount
        this._txtBetAmount = new ck.Text();
        this._txtBetAmount.setName("_txtBetAmount");
        this._layoutBetInfo.addChild(this._txtBetAmount);
        this._txtBetAmount.setCascadeOpacityEnabled(true);
        this._txtBetAmount.setCascadeColorEnabled(true);
        this._txtBetAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBetAmount, 0.5, 0.3353);
        this._txtBetAmount.setTextColor(cc.color(255, 243, 91, 255));
        let _txtBetAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBetAmount);
        _txtBetAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtBetAmountLayoutComponent.setPositionPercentX(0.5);
        _txtBetAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtBetAmountLayoutComponent.setPositionPercentY(0.3353);
        this._txtBetAmount.setTouchEnabled(false);
        this._txtBetAmount.ignoreContentAdaptWithSize(true);
        this._txtBetAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtBetAmount.setDefaultFontSize(23);
        this._txtBetAmount.setTextHorizontalAlignment(1);
        this._txtBetAmount.setTextVerticalAlignment(1);
        this._txtBetAmount.enableOutline(cc.color(78, 56, 0, 255), 1);

        ///// # _layoutAFK
        this._layoutAFK = new ccui.Layout();
        this._layoutAFK.setName("_layoutAFK");
        this._layoutUI.addChild(this._layoutAFK);
        this._layoutAFK.setCascadeOpacityEnabled(true);
        this._layoutAFK.setCascadeColorEnabled(true);
        this._layoutAFK.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutAFK, 0.5, 0.0012);
        let _layoutAFKLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAFK);
        _layoutAFKLayoutComponent.setPositionPercentXEnabled(true);
        _layoutAFKLayoutComponent.setPositionPercentX(0.5);
        _layoutAFKLayoutComponent.setPositionPercentYEnabled(true);
        _layoutAFKLayoutComponent.setPositionPercentY(0.0012);
        _layoutAFKLayoutComponent.setPercentWidthEnabled(true);
        _layoutAFKLayoutComponent.setPercentWidth(1);
        this._layoutAFK.setTouchEnabled(true);
        this._layoutAFK.setUnifySizeEnabled(false);
        this._layoutAFK.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutAFK, 1);
        this._layoutAFK.setContentSize(cc.size(this._layoutAFK.width, 281));
        this._layoutAFK.setBackGroundImage("game/ui/BlackBoard.png", 1);

        ///// # _spriteAFKEmoji
        this._spriteAFKEmoji = new cc.Sprite();
        this._spriteAFKEmoji.setName("_spriteAFKEmoji");
        this._layoutAFK.addChild(this._spriteAFKEmoji);
        this._spriteAFKEmoji.setCascadeOpacityEnabled(true);
        this._spriteAFKEmoji.setCascadeColorEnabled(true);
        this._spriteAFKEmoji.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._spriteAFKEmoji, 0.1164, 0);
        let _spriteAFKEmojiLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteAFKEmoji);
        _spriteAFKEmojiLayoutComponent.setPositionPercentXEnabled(true);
        _spriteAFKEmojiLayoutComponent.setPositionPercentX(0.1164);
        _spriteAFKEmojiLayoutComponent.setPositionPercentYEnabled(true);
        _spriteAFKEmojiLayoutComponent.setPositionPercentY(0);
        let sf = cc.spriteFrameCache.getSpriteFrame("game/ui/EmojiCry.png"); if (sf) this._spriteAFKEmoji.setSpriteFrame(sf);
        let _spriteAFKEmojiBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteAFKEmojiBlendFunc.src = 1;
        _spriteAFKEmojiBlendFunc.dst = 771;
        this._spriteAFKEmoji.setBlendFunc(_spriteAFKEmojiBlendFunc);

        ///// # _txtAFKMessage
        this._txtAFKMessage = new ck.Text();
        this._txtAFKMessage.setName("_txtAFKMessage");
        this._layoutAFK.addChild(this._txtAFKMessage);
        this._txtAFKMessage.setCascadeOpacityEnabled(true);
        this._txtAFKMessage.setCascadeColorEnabled(true);
        this._txtAFKMessage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAFKMessage, 0.5, 0.3794);
        let _txtAFKMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAFKMessage);
        _txtAFKMessageLayoutComponent.setPositionPercentXEnabled(true);
        _txtAFKMessageLayoutComponent.setPositionPercentX(0.5);
        _txtAFKMessageLayoutComponent.setPositionPercentYEnabled(true);
        _txtAFKMessageLayoutComponent.setPositionPercentY(0.3794);
        this._txtAFKMessage.setTouchEnabled(false);
        this._txtAFKMessage.ignoreContentAdaptWithSize(true);
        this._txtAFKMessage.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAFKMessage.setDefaultFontSize(35);
        this._txtAFKMessage.setString(gm.localize.getText("TXT_LONG_TIME_NO_PLAY"));
        this._txtAFKMessage.setTextHorizontalAlignment(0);
        this._txtAFKMessage.setTextVerticalAlignment(1);
        this._txtAFKMessage.enableOutline(cc.color(14, 26, 136, 255), 2);

        ///// # _txtAFKMessage_0
        this._txtAFKMessage_0 = new ck.Text();
        this._txtAFKMessage_0.setName("_txtAFKMessage_0");
        this._layoutAFK.addChild(this._txtAFKMessage_0);
        this._txtAFKMessage_0.setCascadeOpacityEnabled(true);
        this._txtAFKMessage_0.setCascadeColorEnabled(true);
        this._txtAFKMessage_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAFKMessage_0, 0.5, 0.21);
        this._txtAFKMessage_0.setTextColor(cc.color(242, 191, 36, 255));
        let _txtAFKMessage_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAFKMessage_0);
        _txtAFKMessage_0LayoutComponent.setPositionPercentXEnabled(true);
        _txtAFKMessage_0LayoutComponent.setPositionPercentX(0.5);
        _txtAFKMessage_0LayoutComponent.setPositionPercentYEnabled(true);
        _txtAFKMessage_0LayoutComponent.setPositionPercentY(0.21);
        this._txtAFKMessage_0.setTouchEnabled(false);
        this._txtAFKMessage_0.ignoreContentAdaptWithSize(true);
        this._txtAFKMessage_0.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAFKMessage_0.setDefaultFontSize(35);
        this._txtAFKMessage_0.setString(gm.localize.getText("TXT_TOUCH_TO_PLAY"));
        this._txtAFKMessage_0.setTextHorizontalAlignment(0);
        this._txtAFKMessage_0.setTextVerticalAlignment(1);
        this._txtAFKMessage_0.enableOutline(cc.color(14, 26, 136, 255), 1);

        ///// # _textAFK
        this._textAFK = new TextAFK();
        this._textAFK.setName("_textAFK");
        this._layoutAFK.addChild(this._textAFK);
        this._textAFK.setCascadeOpacityEnabled(true);
        this._textAFK.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._textAFK, 0.5, 0.0741);
        let _textAFKLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._textAFK);
        _textAFKLayoutComponent.setPositionPercentXEnabled(true);
        _textAFKLayoutComponent.setPositionPercentX(0.5);
        _textAFKLayoutComponent.setPositionPercentYEnabled(true);
        _textAFKLayoutComponent.setPositionPercentY(0.0741);

        ///// # _inventoryPanelLeft
        this._inventoryPanelLeft = new InventoryPanel();
        this._inventoryPanelLeft.setName("_inventoryPanelLeft");
        this._layoutUI.addChild(this._inventoryPanelLeft);
        this._inventoryPanelLeft.setCascadeOpacityEnabled(true);
        this._inventoryPanelLeft.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._inventoryPanelLeft, 0.08, 0.44);
        let _inventoryPanelLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._inventoryPanelLeft);
        _inventoryPanelLeftLayoutComponent.setPositionPercentXEnabled(true);
        _inventoryPanelLeftLayoutComponent.setPositionPercentX(0.08);
        _inventoryPanelLeftLayoutComponent.setPositionPercentYEnabled(true);
        _inventoryPanelLeftLayoutComponent.setPositionPercentY(0.44);

        ///// # _inventoryPanelRight
        this._inventoryPanelRight = new InventoryPanel();
        this._inventoryPanelRight.setName("_inventoryPanelRight");
        this._layoutUI.addChild(this._inventoryPanelRight);
        this._inventoryPanelRight.setCascadeOpacityEnabled(true);
        this._inventoryPanelRight.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._inventoryPanelRight, 0.92, 0.44);
        let _inventoryPanelRightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._inventoryPanelRight);
        _inventoryPanelRightLayoutComponent.setPositionPercentXEnabled(true);
        _inventoryPanelRightLayoutComponent.setPositionPercentX(0.92);
        _inventoryPanelRightLayoutComponent.setPositionPercentYEnabled(true);
        _inventoryPanelRightLayoutComponent.setPositionPercentY(0.44);

        ///// # _imgBgrQuest
        this._imgBgrQuest = new ccui.ImageView();
        this._imgBgrQuest.setName("_imgBgrQuest");
        this._layoutUI.addChild(this._imgBgrQuest);
        this._imgBgrQuest.setCascadeOpacityEnabled(true);
        this._imgBgrQuest.setCascadeColorEnabled(true);
        this._imgBgrQuest.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBgrQuest, 0.0789, 0.1721);
        let _imgBgrQuestLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrQuest);
        _imgBgrQuestLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrQuestLayoutComponent.setPositionPercentX(0.0789);
        _imgBgrQuestLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrQuestLayoutComponent.setPositionPercentY(0.1721);
        this._imgBgrQuest.loadTexture("basics2/other/Box_02.png", 1);
        this._imgBgrQuest.setUnifySizeEnabled(false);
        this._imgBgrQuest.ignoreContentAdaptWithSize(false);
        this._imgBgrQuest.setScale9Enabled(true);
        this._imgBgrQuest.setCapInsets(cc.rect(40, 40, 18, 18));
        this._imgBgrQuest.setContentSize(cc.size(98, 98));
        this._imgBgrQuest.setTouchEnabled(false);

        ///// # _iconQuest
        this._iconQuest = new QuestIcon();
        this._iconQuest.setName("_iconQuest");
        this._imgBgrQuest.addChild(this._iconQuest);
        this._iconQuest.setCascadeOpacityEnabled(true);
        this._iconQuest.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._iconQuest, 0.4985, 0.5612);
        let _iconQuestLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._iconQuest);
        _iconQuestLayoutComponent.setPositionPercentXEnabled(true);
        _iconQuestLayoutComponent.setPositionPercentX(0.4985);
        _iconQuestLayoutComponent.setPositionPercentYEnabled(true);
        _iconQuestLayoutComponent.setPositionPercentY(0.5612);

        ///// # _gridViewEventIcons
        this._gridViewEventIcons = new ck.GridViewHorizontal();
        this._gridViewEventIcons.setName("_gridViewEventIcons");
        this._layoutUI.addChild(this._gridViewEventIcons);
        this._gridViewEventIcons.setCascadeOpacityEnabled(true);
        this._gridViewEventIcons.setCascadeColorEnabled(true);
        this._gridViewEventIcons.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._gridViewEventIcons, 0.915, 0.8177);
        let _gridViewEventIconsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewEventIcons);
        _gridViewEventIconsLayoutComponent.setPositionPercentXEnabled(true);
        _gridViewEventIconsLayoutComponent.setPositionPercentX(0.915);
        _gridViewEventIconsLayoutComponent.setPositionPercentYEnabled(true);
        _gridViewEventIconsLayoutComponent.setPositionPercentY(0.8177);

        ///// # _gridOfferIcons
        this._gridOfferIcons = new ck.OfferIconGrid();
        this._gridOfferIcons.setName("_gridOfferIcons");
        this._layoutUI.addChild(this._gridOfferIcons);
        this._gridOfferIcons.setCascadeOpacityEnabled(true);
        this._gridOfferIcons.setCascadeColorEnabled(true);
        this._gridOfferIcons.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._gridOfferIcons, 0.085, 0.9075);
        let _gridOfferIconsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridOfferIcons);
        _gridOfferIconsLayoutComponent.setPositionPercentXEnabled(true);
        _gridOfferIconsLayoutComponent.setPositionPercentX(0.085);
        _gridOfferIconsLayoutComponent.setPositionPercentYEnabled(true);
        _gridOfferIconsLayoutComponent.setPositionPercentY(0.9075);

        ///// # _nodeJackpot
        this._nodeJackpot = new cc.Node();
        this._nodeJackpot.setName("_nodeJackpot");
        this._layoutUI.addChild(this._nodeJackpot);
        this._nodeJackpot.setCascadeOpacityEnabled(true);
        this._nodeJackpot.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeJackpot, 0.9115, 0.5);
        let _nodeJackpotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeJackpot);
        _nodeJackpotLayoutComponent.setPositionPercentXEnabled(true);
        _nodeJackpotLayoutComponent.setPositionPercentX(0.9115);
        _nodeJackpotLayoutComponent.setPositionPercentYEnabled(true);
        _nodeJackpotLayoutComponent.setPositionPercentY(0.5);

        ///// # _layoutTurnAlert
        this._layoutTurnAlert = new ccui.Layout();
        this._layoutTurnAlert.setName("_layoutTurnAlert");
        this._layoutUI.addChild(this._layoutTurnAlert);
        this._layoutTurnAlert.setCascadeOpacityEnabled(true);
        this._layoutTurnAlert.setCascadeColorEnabled(true);
        this._layoutTurnAlert.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTurnAlert, 0.5, 0.5008);
        let _layoutTurnAlertLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTurnAlert);
        _layoutTurnAlertLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTurnAlertLayoutComponent.setPositionPercentX(0.5);
        _layoutTurnAlertLayoutComponent.setPositionPercentYEnabled(true);
        _layoutTurnAlertLayoutComponent.setPositionPercentY(0.5008);
        _layoutTurnAlertLayoutComponent.setPercentWidthEnabled(true);
        _layoutTurnAlertLayoutComponent.setPercentWidth(1);
        _layoutTurnAlertLayoutComponent.setPercentHeightEnabled(true);
        _layoutTurnAlertLayoutComponent.setPercentHeight(1);
        this._layoutTurnAlert.setTouchEnabled(false);
        this._layoutTurnAlert.setUnifySizeEnabled(false);
        this._layoutTurnAlert.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutTurnAlert, 1, 1);

        ///// # _imgTurnAlert
        this._imgTurnAlert = new ccui.ImageView();
        this._imgTurnAlert.setName("_imgTurnAlert");
        this._layoutTurnAlert.addChild(this._imgTurnAlert);
        this._imgTurnAlert.setCascadeOpacityEnabled(true);
        this._imgTurnAlert.setCascadeColorEnabled(true);
        this._imgTurnAlert.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTurnAlert, 0.5, 0.5);
        let _imgTurnAlertLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTurnAlert);
        _imgTurnAlertLayoutComponent.setPositionPercentXEnabled(true);
        _imgTurnAlertLayoutComponent.setPositionPercentX(0.5);
        _imgTurnAlertLayoutComponent.setPositionPercentYEnabled(true);
        _imgTurnAlertLayoutComponent.setPositionPercentY(0.5);
        this._imgTurnAlert.loadTexture("texts/game/GoFirst.png", 1);
        this._imgTurnAlert.setTouchEnabled(false);

        ///// # _txtTurnSkin
        this._txtTurnSkin = new ck.Text();
        this._txtTurnSkin.setName("_txtTurnSkin");
        this._layoutTurnAlert.addChild(this._txtTurnSkin);
        this._txtTurnSkin.setCascadeOpacityEnabled(true);
        this._txtTurnSkin.setCascadeColorEnabled(true);
        this._txtTurnSkin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTurnSkin, 0.525, 0.3912);
        this._txtTurnSkin.setTextColor(cc.color(255, 255, 0, 255));
        let _txtTurnSkinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTurnSkin);
        _txtTurnSkinLayoutComponent.setPositionPercentXEnabled(true);
        _txtTurnSkinLayoutComponent.setPositionPercentX(0.525);
        _txtTurnSkinLayoutComponent.setPositionPercentYEnabled(true);
        _txtTurnSkinLayoutComponent.setPositionPercentY(0.3912);
        this._txtTurnSkin.setTouchEnabled(false);
        this._txtTurnSkin.setUnifySizeEnabled(false);
        this._txtTurnSkin.ignoreContentAdaptWithSize(false);
        this._txtTurnSkin.setContentSize(cc.size(379.6796, 97.52));
        this._txtTurnSkin.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTurnSkin.setDefaultFontSize(34);
        this._txtTurnSkin.setString("%s Skin is used.");
        this._txtTurnSkin.setTextHorizontalAlignment(1);
        this._txtTurnSkin.setTextVerticalAlignment(1);
        this._txtTurnSkin.enableOutline(cc.color(55, 55, 55, 255), 1);

        ///// # _layoutInteract
        this._layoutInteract = new ccui.Layout();
        this._layoutInteract.setName("_layoutInteract");
        this._layoutUI.addChild(this._layoutInteract);
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

        ///// # _playerInteractNode00
        this._playerInteractNode00 = new cc.Node();
        this._playerInteractNode00.setName("_playerInteractNode00");
        this._layoutInteract.addChild(this._playerInteractNode00);
        this._playerInteractNode00.setCascadeOpacityEnabled(true);
        this._playerInteractNode00.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._playerInteractNode00, 0.2188, 0.1276);
        let _playerInteractNode00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._playerInteractNode00);
        _playerInteractNode00LayoutComponent.setPositionPercentYEnabled(true);
        _playerInteractNode00LayoutComponent.setPositionPercentY(0.1276);

        ///// # _playerChatNode00
        this._playerChatNode00 = new cc.Node();
        this._playerChatNode00.setName("_playerChatNode00");
        this._layoutInteract.addChild(this._playerChatNode00);
        this._playerChatNode00.setCascadeOpacityEnabled(true);
        this._playerChatNode00.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._playerChatNode00, 0.5, 0.3);
        let _playerChatNode00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._playerChatNode00);
        _playerChatNode00LayoutComponent.setPositionPercentXEnabled(true);
        _playerChatNode00LayoutComponent.setPositionPercentX(0.5);
        _playerChatNode00LayoutComponent.setPositionPercentYEnabled(true);
        _playerChatNode00LayoutComponent.setPositionPercentY(0.3);

        ///// # _playerInteractNode01
        this._playerInteractNode01 = new cc.Node();
        this._playerInteractNode01.setName("_playerInteractNode01");
        this._layoutInteract.addChild(this._playerInteractNode01);
        this._playerInteractNode01.setCascadeOpacityEnabled(true);
        this._playerInteractNode01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._playerInteractNode01, 0.2188, 0.8803);
        let _playerInteractNode01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._playerInteractNode01);
        _playerInteractNode01LayoutComponent.setPositionPercentYEnabled(true);
        _playerInteractNode01LayoutComponent.setPositionPercentY(0.8803);

        ///// # _playerChatNode01
        this._playerChatNode01 = new cc.Node();
        this._playerChatNode01.setName("_playerChatNode01");
        this._layoutInteract.addChild(this._playerChatNode01);
        this._playerChatNode01.setCascadeOpacityEnabled(true);
        this._playerChatNode01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._playerChatNode01, 0.5, 0.73);
        let _playerChatNode01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._playerChatNode01);
        _playerChatNode01LayoutComponent.setPositionPercentXEnabled(true);
        _playerChatNode01LayoutComponent.setPositionPercentX(0.5);
        _playerChatNode01LayoutComponent.setPositionPercentYEnabled(true);
        _playerChatNode01LayoutComponent.setPositionPercentY(0.73);

        ///// # _effectJUp
        this._effectJUp = new EffectJUp();
        this._effectJUp.setName("_effectJUp");
        this._layoutUI.addChild(this._effectJUp);
        this._effectJUp.setCascadeOpacityEnabled(true);
        this._effectJUp.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._effectJUp, 0.0813, 0.6023);
        let _effectJUpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._effectJUp);
        _effectJUpLayoutComponent.setPositionPercentXEnabled(true);
        _effectJUpLayoutComponent.setPositionPercentX(0.0813);
        _effectJUpLayoutComponent.setPositionPercentYEnabled(true);
        _effectJUpLayoutComponent.setPositionPercentY(0.6023);

        ///// # _effectEye
        this._effectEye = new EffectEye();
        this._effectEye.setName("_effectEye");
        this._layoutUI.addChild(this._effectEye);
        this._effectEye.setCascadeOpacityEnabled(true);
        this._effectEye.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._effectEye, 0.5, 0.5);
        let _effectEyeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._effectEye);
        _effectEyeLayoutComponent.setPositionPercentXEnabled(true);
        _effectEyeLayoutComponent.setPositionPercentX(0.5);
        _effectEyeLayoutComponent.setPositionPercentYEnabled(true);
        _effectEyeLayoutComponent.setPositionPercentY(0.5);

        ///// # _effectEyeCounter
        this._effectEyeCounter = new EffectEyeCounter();
        this._effectEyeCounter.setName("_effectEyeCounter");
        this._layoutUI.addChild(this._effectEyeCounter);
        this._effectEyeCounter.setCascadeOpacityEnabled(true);
        this._effectEyeCounter.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._effectEyeCounter, 0.8305, 0.1064);
        this._effectEyeCounter.setScale(0.5, 0.5);
        let _effectEyeCounterLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._effectEyeCounter);
        _effectEyeCounterLayoutComponent.setPositionPercentXEnabled(true);
        _effectEyeCounterLayoutComponent.setPositionPercentX(0.8305);
        _effectEyeCounterLayoutComponent.setPositionPercentYEnabled(true);
        _effectEyeCounterLayoutComponent.setPositionPercentY(0.1064);

        ///// # _effectEyeCounterTrigger
        this._effectEyeCounterTrigger = new EffectEyeCounterTrigger();
        this._effectEyeCounterTrigger.setName("_effectEyeCounterTrigger");
        this._layoutUI.addChild(this._effectEyeCounterTrigger);
        this._effectEyeCounterTrigger.setCascadeOpacityEnabled(true);
        this._effectEyeCounterTrigger.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._effectEyeCounterTrigger, 0.5, 0.8097);
        this._effectEyeCounterTrigger.setScale(0.7, 0.7);
        let _effectEyeCounterTriggerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._effectEyeCounterTrigger);
        _effectEyeCounterTriggerLayoutComponent.setPositionPercentXEnabled(true);
        _effectEyeCounterTriggerLayoutComponent.setPositionPercentX(0.5);
        _effectEyeCounterTriggerLayoutComponent.setPositionPercentYEnabled(true);
        _effectEyeCounterTriggerLayoutComponent.setPositionPercentY(0.8097);

        ///// # _effectXPX2
        this._effectXPX2 = new EffectXPX2();
        this._effectXPX2.setName("_effectXPX2");
        this._layoutUI.addChild(this._effectXPX2);
        this._effectXPX2.setCascadeOpacityEnabled(true);
        this._effectXPX2.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._effectXPX2, 0.1867, 0.0925);
        this._effectXPX2.setScale(0.5, 0.5);
        let _effectXPX2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._effectXPX2);
        _effectXPX2LayoutComponent.setPositionPercentXEnabled(true);
        _effectXPX2LayoutComponent.setPositionPercentX(0.1867);
        _effectXPX2LayoutComponent.setPositionPercentYEnabled(true);
        _effectXPX2LayoutComponent.setPositionPercentY(0.0925);

        ///// # _layoutPisti
        this._layoutPisti = new ccui.Layout();
        this._layoutPisti.setName("_layoutPisti");
        this._layoutUI.addChild(this._layoutPisti);
        this._layoutPisti.setCascadeOpacityEnabled(true);
        this._layoutPisti.setCascadeColorEnabled(true);
        this._layoutPisti.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutPisti, 0.5, 0.5);
        let _layoutPistiLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPisti);
        _layoutPistiLayoutComponent.setPositionPercentXEnabled(true);
        _layoutPistiLayoutComponent.setPositionPercentX(0.5);
        _layoutPistiLayoutComponent.setPositionPercentYEnabled(true);
        _layoutPistiLayoutComponent.setPositionPercentY(0.5);
        _layoutPistiLayoutComponent.setPercentWidthEnabled(true);
        _layoutPistiLayoutComponent.setPercentWidth(1);
        this._layoutPisti.setTouchEnabled(true);
        this._layoutPisti.setUnifySizeEnabled(false);
        this._layoutPisti.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutPisti, 1);
        this._layoutPisti.setContentSize(cc.size(this._layoutPisti.width, 235));

        ///// # _nodePisti
        this._nodePisti = new cc.Node();
        this._nodePisti.setName("_nodePisti");
        this._layoutPisti.addChild(this._nodePisti);
        this._nodePisti.setCascadeOpacityEnabled(true);
        this._nodePisti.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodePisti, 0.5, 0.5);
        let _nodePistiLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodePisti);
        _nodePistiLayoutComponent.setPositionPercentXEnabled(true);
        _nodePistiLayoutComponent.setPositionPercentX(0.5);
        _nodePistiLayoutComponent.setPositionPercentYEnabled(true);
        _nodePistiLayoutComponent.setPositionPercentY(0.5);

        ///// # _layoutHiddenCards
        this._layoutHiddenCards = new ccui.Layout();
        this._layoutHiddenCards.setName("_layoutHiddenCards");
        this._layoutUI.addChild(this._layoutHiddenCards);
        this._layoutHiddenCards.setCascadeOpacityEnabled(true);
        this._layoutHiddenCards.setCascadeColorEnabled(true);
        this._layoutHiddenCards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutHiddenCards, 0.165, 0.3713);
        this._layoutHiddenCards.setScale(0.85, 0.85);
        let _layoutHiddenCardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHiddenCards);
        _layoutHiddenCardsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutHiddenCardsLayoutComponent.setPositionPercentX(0.165);
        _layoutHiddenCardsLayoutComponent.setPositionPercentYEnabled(true);
        _layoutHiddenCardsLayoutComponent.setPositionPercentY(0.3713);
        this._layoutHiddenCards.setTouchEnabled(false);
        this._layoutHiddenCards.setUnifySizeEnabled(false);
        this._layoutHiddenCards.ignoreContentAdaptWithSize(false);
        this._layoutHiddenCards.setContentSize(cc.size(235, 136.9318));

        ///// # _spriteHiddenCard00
        this._spriteHiddenCard00 = new cc.Sprite();
        this._spriteHiddenCard00.setName("_spriteHiddenCard00");
        this._layoutHiddenCards.addChild(this._spriteHiddenCard00);
        this._spriteHiddenCard00.setCascadeOpacityEnabled(true);
        this._spriteHiddenCard00.setCascadeColorEnabled(true);
        this._spriteHiddenCard00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteHiddenCard00, 0.2, 0.6);
        this._spriteHiddenCard00.setScale(0.4, 0.4);
        this._spriteHiddenCard00.setRotationY(-0.0153);
        let _spriteHiddenCard00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteHiddenCard00);
        _spriteHiddenCard00LayoutComponent.setPositionPercentXEnabled(true);
        _spriteHiddenCard00LayoutComponent.setPositionPercentX(0.2);
        _spriteHiddenCard00LayoutComponent.setPositionPercentYEnabled(true);
        _spriteHiddenCard00LayoutComponent.setPositionPercentY(0.6);
        let sf = cc.spriteFrameCache.getSpriteFrame("cards/01.png"); if (sf) this._spriteHiddenCard00.setSpriteFrame(sf);
        let _spriteHiddenCard00BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteHiddenCard00BlendFunc.src = 1;
        _spriteHiddenCard00BlendFunc.dst = 771;
        this._spriteHiddenCard00.setBlendFunc(_spriteHiddenCard00BlendFunc);

        ///// # _spriteHiddenCard01
        this._spriteHiddenCard01 = new cc.Sprite();
        this._spriteHiddenCard01.setName("_spriteHiddenCard01");
        this._layoutHiddenCards.addChild(this._spriteHiddenCard01);
        this._spriteHiddenCard01.setCascadeOpacityEnabled(true);
        this._spriteHiddenCard01.setCascadeColorEnabled(true);
        this._spriteHiddenCard01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteHiddenCard01, 0.5, 0.6);
        this._spriteHiddenCard01.setScale(0.4, 0.4);
        let _spriteHiddenCard01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteHiddenCard01);
        _spriteHiddenCard01LayoutComponent.setPositionPercentXEnabled(true);
        _spriteHiddenCard01LayoutComponent.setPositionPercentX(0.5);
        _spriteHiddenCard01LayoutComponent.setPositionPercentYEnabled(true);
        _spriteHiddenCard01LayoutComponent.setPositionPercentY(0.6);
        let sf = cc.spriteFrameCache.getSpriteFrame("cards/01.png"); if (sf) this._spriteHiddenCard01.setSpriteFrame(sf);
        let _spriteHiddenCard01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteHiddenCard01BlendFunc.src = 1;
        _spriteHiddenCard01BlendFunc.dst = 771;
        this._spriteHiddenCard01.setBlendFunc(_spriteHiddenCard01BlendFunc);

        ///// # _spriteHiddenCard02
        this._spriteHiddenCard02 = new cc.Sprite();
        this._spriteHiddenCard02.setName("_spriteHiddenCard02");
        this._layoutHiddenCards.addChild(this._spriteHiddenCard02);
        this._spriteHiddenCard02.setCascadeOpacityEnabled(true);
        this._spriteHiddenCard02.setCascadeColorEnabled(true);
        this._spriteHiddenCard02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteHiddenCard02, 0.8, 0.6);
        this._spriteHiddenCard02.setScale(0.4, 0.4);
        let _spriteHiddenCard02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteHiddenCard02);
        _spriteHiddenCard02LayoutComponent.setPositionPercentXEnabled(true);
        _spriteHiddenCard02LayoutComponent.setPositionPercentX(0.8);
        _spriteHiddenCard02LayoutComponent.setPositionPercentYEnabled(true);
        _spriteHiddenCard02LayoutComponent.setPositionPercentY(0.6);
        let sf = cc.spriteFrameCache.getSpriteFrame("cards/01.png"); if (sf) this._spriteHiddenCard02.setSpriteFrame(sf);
        let _spriteHiddenCard02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteHiddenCard02BlendFunc.src = 1;
        _spriteHiddenCard02BlendFunc.dst = 771;
        this._spriteHiddenCard02.setBlendFunc(_spriteHiddenCard02BlendFunc);

        ///// # _layoutHiddenCardHeader
        this._layoutHiddenCardHeader = new ccui.Layout();
        this._layoutHiddenCardHeader.setName("_layoutHiddenCardHeader");
        this._layoutHiddenCards.addChild(this._layoutHiddenCardHeader);
        this._layoutHiddenCardHeader.setCascadeOpacityEnabled(true);
        this._layoutHiddenCardHeader.setCascadeColorEnabled(true);
        this._layoutHiddenCardHeader.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutHiddenCardHeader, 0.5, 0);
        let _layoutHiddenCardHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHiddenCardHeader);
        _layoutHiddenCardHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _layoutHiddenCardHeaderLayoutComponent.setPositionPercentX(0.5);
        _layoutHiddenCardHeaderLayoutComponent.setPercentWidthEnabled(true);
        _layoutHiddenCardHeaderLayoutComponent.setPercentWidth(1);
        _layoutHiddenCardHeaderLayoutComponent.setPercentHeightEnabled(true);
        _layoutHiddenCardHeaderLayoutComponent.setPercentHeight(0.51);
        this._layoutHiddenCardHeader.setTouchEnabled(false);
        this._layoutHiddenCardHeader.setUnifySizeEnabled(false);
        this._layoutHiddenCardHeader.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutHiddenCardHeader, 1, 0.51);

        ///// # _imgHiddenCardHeader
        this._imgHiddenCardHeader = new ccui.ImageView();
        this._imgHiddenCardHeader.setName("_imgHiddenCardHeader");
        this._layoutHiddenCardHeader.addChild(this._imgHiddenCardHeader);
        this._imgHiddenCardHeader.setCascadeOpacityEnabled(true);
        this._imgHiddenCardHeader.setCascadeColorEnabled(true);
        this._imgHiddenCardHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHiddenCardHeader, 0.5, 0.5);
        let _imgHiddenCardHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHiddenCardHeader);
        _imgHiddenCardHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHiddenCardHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHiddenCardHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHiddenCardHeaderLayoutComponent.setPositionPercentY(0.5);
        _imgHiddenCardHeaderLayoutComponent.setPercentWidthEnabled(true);
        _imgHiddenCardHeaderLayoutComponent.setPercentWidth(1);
        _imgHiddenCardHeaderLayoutComponent.setPercentHeightEnabled(true);
        _imgHiddenCardHeaderLayoutComponent.setPercentHeight(1);
        this._imgHiddenCardHeader.loadTexture("game/ui/GreenHeader.png", 1);
        this._imgHiddenCardHeader.setUnifySizeEnabled(false);
        this._imgHiddenCardHeader.ignoreContentAdaptWithSize(false);
        this._imgHiddenCardHeader.setScale9Enabled(true);
        this._imgHiddenCardHeader.setCapInsets(cc.rect(85, 34, 34, 6));
        ck.UIUtils.setSizePercent(this._imgHiddenCardHeader, 1, 1);
        this._imgHiddenCardHeader.setTouchEnabled(false);

        ///// # _txtHiddenCardHeader
        this._txtHiddenCardHeader = new ck.Text();
        this._txtHiddenCardHeader.setName("_txtHiddenCardHeader");
        this._layoutHiddenCardHeader.addChild(this._txtHiddenCardHeader);
        this._txtHiddenCardHeader.setCascadeOpacityEnabled(true);
        this._txtHiddenCardHeader.setCascadeColorEnabled(true);
        this._txtHiddenCardHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHiddenCardHeader, 0.5, 0.4057);
        let _txtHiddenCardHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHiddenCardHeader);
        _txtHiddenCardHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtHiddenCardHeaderLayoutComponent.setPositionPercentX(0.5);
        _txtHiddenCardHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtHiddenCardHeaderLayoutComponent.setPositionPercentY(0.4057);
        this._txtHiddenCardHeader.setTouchEnabled(false);
        this._txtHiddenCardHeader.ignoreContentAdaptWithSize(true);
        this._txtHiddenCardHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHiddenCardHeader.setDefaultFontSize(30);
        this._txtHiddenCardHeader.setString(gm.localize.getText("TXT_HIDDEN_CARDS"));
        this._txtHiddenCardHeader.setTextHorizontalAlignment(1);
        this._txtHiddenCardHeader.setTextVerticalAlignment(1);
        this._txtHiddenCardHeader.enableShadow(cc.color(29, 79, 22, 255), cc.size(0, -2), 0);

        ///// # _interactPopup
        this._interactPopup = new InteractPopup();
        this._interactPopup.setName("_interactPopup");
        this._layoutUI.addChild(this._interactPopup);
        this._interactPopup.setCascadeOpacityEnabled(true);
        this._interactPopup.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._interactPopup, 0.5, 0.5);
        let _interactPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._interactPopup);
        _interactPopupLayoutComponent.setPositionPercentXEnabled(true);
        _interactPopupLayoutComponent.setPositionPercentX(0.5);
        _interactPopupLayoutComponent.setPositionPercentYEnabled(true);
        _interactPopupLayoutComponent.setPositionPercentY(0.5);

        ///// # _chatPopup
        this._chatPopup = new ChatPopup();
        this._chatPopup.setName("_chatPopup");
        this._layoutUI.addChild(this._chatPopup);
        this._chatPopup.setCascadeOpacityEnabled(true);
        this._chatPopup.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._chatPopup, 0.5, 0.5);
        let _chatPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._chatPopup);
        _chatPopupLayoutComponent.setPositionPercentXEnabled(true);
        _chatPopupLayoutComponent.setPositionPercentX(0.5);
        _chatPopupLayoutComponent.setPositionPercentYEnabled(true);
        _chatPopupLayoutComponent.setPositionPercentY(0.5);

        ///// # _nodeBigBet
        this._nodeBigBet = new cc.Node();
        this._nodeBigBet.setName("_nodeBigBet");
        this._layoutUI.addChild(this._nodeBigBet);
        this._nodeBigBet.setCascadeOpacityEnabled(true);
        this._nodeBigBet.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeBigBet, 0.915, 0.8658);
        let _nodeBigBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeBigBet);
        _nodeBigBetLayoutComponent.setPositionPercentXEnabled(true);
        _nodeBigBetLayoutComponent.setPositionPercentX(0.915);
        _nodeBigBetLayoutComponent.setPositionPercentYEnabled(true);
        _nodeBigBetLayoutComponent.setPositionPercentY(0.8658);

        ///// # _imgIconBigBet
        this._imgIconBigBet = new ccui.ImageView();
        this._imgIconBigBet.setName("_imgIconBigBet");
        this._nodeBigBet.addChild(this._imgIconBigBet);
        this._imgIconBigBet.setCascadeOpacityEnabled(true);
        this._imgIconBigBet.setCascadeColorEnabled(true);
        this._imgIconBigBet.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgIconBigBet.setScale(0.7, 0.7);
        let _imgIconBigBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconBigBet);
        this._imgIconBigBet.loadTexture("bigbet/Star.png", 1);
        this._imgIconBigBet.setUnifySizeEnabled(false);
        this._imgIconBigBet.ignoreContentAdaptWithSize(false);
        this._imgIconBigBet.setContentSize(cc.size(119, 125));
        this._imgIconBigBet.setTouchEnabled(false);

        ///// # _txtBigBetValue
        this._txtBigBetValue = new ck.Text();
        this._txtBigBetValue.setName("_txtBigBetValue");
        this._nodeBigBet.addChild(this._txtBigBetValue);
        this._txtBigBetValue.setCascadeOpacityEnabled(true);
        this._txtBigBetValue.setCascadeColorEnabled(true);
        this._txtBigBetValue.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtBigBetValue.setPosition(0.0002, 3);
        let _txtBigBetValueLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBigBetValue);
        this._txtBigBetValue.setTouchEnabled(false);
        this._txtBigBetValue.ignoreContentAdaptWithSize(true);
        this._txtBigBetValue.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtBigBetValue.setDefaultFontSize(35);
        this._txtBigBetValue.setTextHorizontalAlignment(0);
        this._txtBigBetValue.setTextVerticalAlignment(0);
        this._txtBigBetValue.enableOutline(cc.color(80, 57, 0, 255), 2);

        ///// # _layoutEndGame
        this._layoutEndGame = new ccui.Layout();
        this._layoutEndGame.setName("_layoutEndGame");
        this._layoutUI.addChild(this._layoutEndGame);
        this._layoutEndGame.setCascadeOpacityEnabled(true);
        this._layoutEndGame.setCascadeColorEnabled(true);
        this._layoutEndGame.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutEndGame, 0.5, 0.5);
        let _layoutEndGameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEndGame);
        _layoutEndGameLayoutComponent.setPositionPercentXEnabled(true);
        _layoutEndGameLayoutComponent.setPositionPercentX(0.5);
        _layoutEndGameLayoutComponent.setPositionPercentYEnabled(true);
        _layoutEndGameLayoutComponent.setPositionPercentY(0.5);
        _layoutEndGameLayoutComponent.setPercentWidthEnabled(true);
        _layoutEndGameLayoutComponent.setPercentWidth(1);
        _layoutEndGameLayoutComponent.setPercentHeightEnabled(true);
        _layoutEndGameLayoutComponent.setPercentHeight(1);
        this._layoutEndGame.setTouchEnabled(false);
        this._layoutEndGame.setUnifySizeEnabled(false);
        this._layoutEndGame.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutEndGame, 1, 1);

        ///// # _layoutEndGameBgr
        this._layoutEndGameBgr = new ccui.Layout();
        this._layoutEndGameBgr.setName("_layoutEndGameBgr");
        this._layoutEndGame.addChild(this._layoutEndGameBgr);
        this._layoutEndGameBgr.setCascadeOpacityEnabled(true);
        this._layoutEndGameBgr.setCascadeColorEnabled(true);
        this._layoutEndGameBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutEndGameBgr, 0.5, 0.5);
        if (!PlatformUtils.hasNotch()) {
            let _layoutEndGameBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEndGameBgr);
            _layoutEndGameBgrLayoutComponent.setPositionPercentXEnabled(true);
            _layoutEndGameBgrLayoutComponent.setPositionPercentX(0.5);
            _layoutEndGameBgrLayoutComponent.setPositionPercentYEnabled(true);
            _layoutEndGameBgrLayoutComponent.setPositionPercentY(0.5);
            _layoutEndGameBgrLayoutComponent.setPercentWidthEnabled(true);
            _layoutEndGameBgrLayoutComponent.setPercentWidth(1);
            _layoutEndGameBgrLayoutComponent.setPercentHeightEnabled(true);
            _layoutEndGameBgrLayoutComponent.setPercentHeight(1);
        }
        this._layoutEndGameBgr.setTouchEnabled(false);
        this._layoutEndGameBgr.setUnifySizeEnabled(false);
        this._layoutEndGameBgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutEndGameBgr, 1, 1);
        this._layoutEndGameBgr.setBackGroundColorType(1);
        this._layoutEndGameBgr.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutEndGameBgr.setBackGroundColorOpacity(191);
        UIUtils.initFullScreenBackground(this._layoutEndGameBgr);

        ///// # _imgGameOver
        this._imgGameOver = new ccui.ImageView();
        this._imgGameOver.setName("_imgGameOver");
        this._layoutEndGame.addChild(this._imgGameOver);
        this._imgGameOver.setCascadeOpacityEnabled(true);
        this._imgGameOver.setCascadeColorEnabled(true);
        this._imgGameOver.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGameOver, 0.5, 0.5);
        let _imgGameOverLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGameOver);
        _imgGameOverLayoutComponent.setPositionPercentXEnabled(true);
        _imgGameOverLayoutComponent.setPositionPercentX(0.5);
        _imgGameOverLayoutComponent.setPositionPercentYEnabled(true);
        _imgGameOverLayoutComponent.setPositionPercentY(0.5);
        this._imgGameOver.loadTexture("texts/game/RoundOver.png", 1);
        this._imgGameOver.setTouchEnabled(false);

        ///// # _resultLayer
        this._resultLayer = new PistiResultLayer();
        this._resultLayer.setName("_resultLayer");
        this._layoutUI.addChild(this._resultLayer);
        this._resultLayer.setCascadeOpacityEnabled(true);
        this._resultLayer.setCascadeColorEnabled(true);
        let _resultLayerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._resultLayer);

        ///// # _summaryPopup
        this._summaryPopup = new PistiSummaryLayer();
        this._summaryPopup.setName("_summaryPopup");
        this._layoutUI.addChild(this._summaryPopup);
        this._summaryPopup.setCascadeOpacityEnabled(true);
        this._summaryPopup.setCascadeColorEnabled(true);
        let _summaryPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._summaryPopup);

        ///// # _layoutSkip
        this._layoutSkip = new ccui.Layout();
        this._layoutSkip.setName("_layoutSkip");
        this._layoutUI.addChild(this._layoutSkip);
        this._layoutSkip.setCascadeOpacityEnabled(true);
        this._layoutSkip.setCascadeColorEnabled(true);
        this._layoutSkip.setAnchorPoint(cc.p(0.5, 0.4872));
        ck.UIUtils.setPositionPercent(this._layoutSkip, 0.9191, 0.0561);
        let _layoutSkipLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSkip);
        _layoutSkipLayoutComponent.setPositionPercentXEnabled(true);
        _layoutSkipLayoutComponent.setPositionPercentX(0.9191);
        _layoutSkipLayoutComponent.setPositionPercentYEnabled(true);
        _layoutSkipLayoutComponent.setPositionPercentY(0.0561);
        this._layoutSkip.setTouchEnabled(true);
        this._layoutSkip.setUnifySizeEnabled(false);
        this._layoutSkip.ignoreContentAdaptWithSize(false);
        this._layoutSkip.setContentSize(cc.size(89.6019, 57.0211));

        ///// # _imgSkipBgr
        this._imgSkipBgr = new ccui.ImageView();
        this._imgSkipBgr.setName("_imgSkipBgr");
        this._layoutSkip.addChild(this._imgSkipBgr);
        this._imgSkipBgr.setCascadeOpacityEnabled(true);
        this._imgSkipBgr.setCascadeColorEnabled(true);
        this._imgSkipBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgSkipBgr, 0.5, 0.5);
        let _imgSkipBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgSkipBgr);
        _imgSkipBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgSkipBgrLayoutComponent.setPositionPercentX(0.5);
        _imgSkipBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgSkipBgrLayoutComponent.setPositionPercentY(0.5);
        _imgSkipBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgSkipBgrLayoutComponent.setPercentWidth(1);
        _imgSkipBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgSkipBgrLayoutComponent.setPercentHeight(1);
        this._imgSkipBgr.loadTexture("buttons/rectangles/Blue.png", 1);
        this._imgSkipBgr.setUnifySizeEnabled(false);
        this._imgSkipBgr.ignoreContentAdaptWithSize(false);
        this._imgSkipBgr.setScale9Enabled(true);
        this._imgSkipBgr.setCapInsets(cc.rect(31, 17, 51, 22));
        ck.UIUtils.setSizePercent(this._imgSkipBgr, 1, 1);
        this._imgSkipBgr.setTouchEnabled(false);

        ///// # _txtSkip
        this._txtSkip = new ck.Text();
        this._txtSkip.setName("_txtSkip");
        this._layoutSkip.addChild(this._txtSkip);
        this._txtSkip.setCascadeOpacityEnabled(true);
        this._txtSkip.setCascadeColorEnabled(true);
        this._txtSkip.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtSkip, 0.5, 0.5789);
        let _txtSkipLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSkip);
        _txtSkipLayoutComponent.setPositionPercentXEnabled(true);
        _txtSkipLayoutComponent.setPositionPercentX(0.5);
        _txtSkipLayoutComponent.setPositionPercentYEnabled(true);
        _txtSkipLayoutComponent.setPositionPercentY(0.5789);
        this._txtSkip.setTouchEnabled(false);
        this._txtSkip.ignoreContentAdaptWithSize(true);
        this._txtSkip.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSkip.setDefaultFontSize(20);
        this._txtSkip.setString(gm.localize.getText("TXT_SKIP"));
        this._txtSkip.setTextHorizontalAlignment(1);
        this._txtSkip.setTextVerticalAlignment(1);

        ///// # _itemTip
        this._itemTip = new ItemTip();
        this._itemTip.setName("_itemTip");
        this._layoutUI.addChild(this._itemTip);
        this._itemTip.setCascadeOpacityEnabled(true);
        this._itemTip.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._itemTip, 0.1561, 0.4099);
        let _itemTipLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._itemTip);
        _itemTipLayoutComponent.setPositionPercentXEnabled(true);
        _itemTipLayoutComponent.setPositionPercentX(0.1561);
        _itemTipLayoutComponent.setPositionPercentYEnabled(true);
        _itemTipLayoutComponent.setPositionPercentY(0.4099);

        ///// # _nodeTrophyProgress
        this._nodeTrophyProgress = new cc.Node();
        this._nodeTrophyProgress.setName("_nodeTrophyProgress");
        this._layoutUI.addChild(this._nodeTrophyProgress);
        this._nodeTrophyProgress.setCascadeOpacityEnabled(true);
        this._nodeTrophyProgress.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeTrophyProgress, 0.5, 0.2);
        let _nodeTrophyProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeTrophyProgress);
        _nodeTrophyProgressLayoutComponent.setPositionPercentXEnabled(true);
        _nodeTrophyProgressLayoutComponent.setPositionPercentX(0.5);
        _nodeTrophyProgressLayoutComponent.setPositionPercentYEnabled(true);
        _nodeTrophyProgressLayoutComponent.setPositionPercentY(0.2);

        ///// # _portalFoxPosition
        this._portalFoxPosition = new cc.Node();
        this._portalFoxPosition.setName("_portalFoxPosition");
        this._layoutRoot.addChild(this._portalFoxPosition);
        this._portalFoxPosition.setCascadeOpacityEnabled(true);
        this._portalFoxPosition.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._portalFoxPosition, 0.0562, 0.15);
        let _portalFoxPositionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._portalFoxPosition);
        _portalFoxPositionLayoutComponent.setPositionPercentYEnabled(true);
        _portalFoxPositionLayoutComponent.setPositionPercentY(0.15);

    },



});

/**
 * Create PistiRenderer
 * @returns {_ccs.PistiRenderer}
 */
_ccs.PistiRenderer.create = function () {
    return new _ccs.PistiRenderer();
};
