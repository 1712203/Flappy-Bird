/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.CheatMenu
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.CheatMenu = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutContent: null,
    /** @type {ccui.ListView} */
    _listView: null,
    /** @type {ccui.Layout} */
    _layoutCmdHeader: null,
    /** @type {ck.Text} */
    _txtCmdHeader: null,
    /** @type {ccui.Layout} */
    _lineBot: null,
    /** @type {ccui.Layout} */
    _lineTop: null,
    /** @type {ccui.ImageView} */
    _imgExpandCmd: null,
    /** @type {ccui.ImageView} */
    _imgCollapseCmd: null,
    /** @type {ccui.Layout} */
    _layoutCmd: null,
    /** @type {ccui.Layout} */
    _layoutBoxCmd: null,
    /** @type {cc.EditBox} */
    _editBoxCmd: null,
    /** @type {ccui.Layout} */
    _layoutSendCmd: null,
    /** @type {ck.Text} */
    _txtSendCmd: null,
    /** @type {ccui.Layout} */
    _layoutProfileHeader: null,
    /** @type {ck.Text} */
    _txtHeaderProfile: null,
    /** @type {ccui.Layout} */
    _lineBot: null,
    /** @type {ccui.Layout} */
    _lineTop: null,
    /** @type {ccui.ImageView} */
    _imgExpandProfile: null,
    /** @type {ccui.ImageView} */
    _imgCollapseProfile: null,
    /** @type {ccui.Layout} */
    _layoutProfile: null,
    /** @type {ccui.Layout} */
    _layoutCoin: null,
    /** @type {ck.Text} */
    _txtCoinHeader: null,
    /** @type {ccui.Layout} */
    _layoutBoxCoin: null,
    /** @type {cc.EditBox} */
    _editBoxCoin: null,
    /** @type {ccui.Layout} */
    _layoutSetCoin: null,
    /** @type {ck.Text} */
    _txtSetCoin: null,
    /** @type {ccui.Layout} */
    _layoutAddCoin: null,
    /** @type {ck.Text} */
    _txtAddCoin: null,
    /** @type {ccui.Layout} */
    _layoutGem: null,
    /** @type {ck.Text} */
    _txtGemHeader: null,
    /** @type {ccui.Layout} */
    _layoutBoxGem: null,
    /** @type {cc.EditBox} */
    _editBoxGem: null,
    /** @type {ccui.Layout} */
    _layoutSetGem: null,
    /** @type {ck.Text} */
    _txtSetGem: null,
    /** @type {ccui.Layout} */
    _layoutAddGem: null,
    /** @type {ck.Text} */
    _txtAddGem: null,
    /** @type {ccui.Layout} */
    _layoutFinishQuests: null,
    /** @type {ck.Text} */
    _txtFinishQuests: null,
    /** @type {ccui.Layout} */
    _layoutBtnNewDay: null,
    /** @type {ck.Text} */
    _txtBtnNewDay: null,
    /** @type {ccui.Layout} */
    _layoutClearCache: null,
    /** @type {ck.Text} */
    _txtClearCache: null,
    /** @type {ccui.Layout} */
    _layoutAddBotRanking: null,
    /** @type {ck.Text} */
    _txtAddBotRanking: null,
    /** @type {ccui.Layout} */
    _layoutEndRanking: null,
    /** @type {ck.Text} */
    _txtEndRanking: null,
    /** @type {ccui.Layout} */
    _layoutDetach: null,
    /** @type {ck.Text} */
    _txtDetach: null,
    /** @type {ck.Text} */
    _txtIOS: null,
    /** @type {ccui.Layout} */
    _layoutForceUseCDN: null,
    /** @type {ck.Text} */
    _txtForceUseCDN: null,
    /** @type {ccui.Layout} */
    _layoutTransformPortal: null,
    /** @type {ck.Text} */
    _txtTransformPortal: null,
    /** @type {ccui.Layout} */
    _layoutNewDay: null,
    /** @type {ck.Text} */
    _txtNewDayHeader: null,
    /** @type {ccui.Layout} */
    _layoutBoxNewDay: null,
    /** @type {cc.EditBox} */
    _editBoxNewDay: null,
    /** @type {ccui.Layout} */
    _layoutAddNewDay: null,
    /** @type {ck.Text} */
    _txtAddNewDay: null,
    /** @type {ccui.Layout} */
    _layoutTimeOver: null,
    /** @type {ck.Text} */
    _txtTimeOverHeader: null,
    /** @type {ccui.Layout} */
    _layoutBoxTimeOver: null,
    /** @type {cc.EditBox} */
    _editBoxTimeOver: null,
    /** @type {ccui.Layout} */
    _layoutAddTimeOver: null,
    /** @type {ck.Text} */
    _txtAddTimeOver: null,
    /** @type {ccui.Layout} */
    _layoutPaymentHeader: null,
    /** @type {ck.Text} */
    _txtHeaderPayment: null,
    /** @type {ccui.Layout} */
    _lineBot: null,
    /** @type {ccui.Layout} */
    _lineTop: null,
    /** @type {ccui.ImageView} */
    _imgExpandPayment: null,
    /** @type {ccui.ImageView} */
    _imgCollapsePayment: null,
    /** @type {ccui.Layout} */
    _layoutPayment: null,
    /** @type {ccui.Layout} */
    _layoutCheatPayment: null,
    /** @type {ck.Text} */
    _txtCheatPayment: null,
    /** @type {ccui.Layout} */
    _layoutResetOffer: null,
    /** @type {ck.Text} */
    _txtResetOffer: null,
    /** @type {ccui.Layout} */
    _layoutIAPProductKey: null,
    /** @type {cc.EditBox} */
    _editBoxIAPProductKey: null,
    /** @type {ccui.Layout} */
    _layoutBuyIAP: null,
    /** @type {ck.Text} */
    _txtBuyIAP: null,
    /** @type {ccui.Layout} */
    _layoutServerHeader: null,
    /** @type {ck.Text} */
    _txtServerHeader: null,
    /** @type {ccui.Layout} */
    _lineBot: null,
    /** @type {ccui.Layout} */
    _lineTop: null,
    /** @type {ccui.ImageView} */
    _imgExpandServer: null,
    /** @type {ccui.ImageView} */
    _imgCollapseServer: null,
    /** @type {ccui.Layout} */
    _layoutServer: null,
    /** @type {ccui.Layout} */
    _layoutAddress: null,
    /** @type {cc.EditBox} */
    _editBoxAddress: null,
    /** @type {ccui.Layout} */
    _layoutConnect: null,
    /** @type {ck.Text} */
    _txtConnect: null,
    /** @type {ccui.Layout} */
    _layoutDev: null,
    /** @type {ck.Text} */
    _txtDev: null,
    /** @type {ccui.Layout} */
    _layoutSandbox: null,
    /** @type {ck.Text} */
    _txtSandbox: null,
    /** @type {ccui.Layout} */
    _layoutLive: null,
    /** @type {ck.Text} */
    _txtLive: null,
    /** @type {ccui.Layout} */
    _layoutHappy: null,
    /** @type {ck.Text} */
    _txtHappy: null,
    /** @type {ccui.Layout} */
    _layoutBalancer: null,
    /** @type {ck.Text} */
    _txtBalancer: null,
    /** @type {ccui.Layout} */
    _layoutTurnHeader: null,
    /** @type {ck.Text} */
    _txtTurnHeader: null,
    /** @type {ccui.Layout} */
    _lineBot: null,
    /** @type {ccui.Layout} */
    _lineTop: null,
    /** @type {ccui.ImageView} */
    _imgExpandTurn: null,
    /** @type {ccui.ImageView} */
    _imgCollapseTurn: null,
    /** @type {ccui.Layout} */
    _layoutTurn: null,
    /** @type {ccui.Layout} */
    _layoutBoxTurn: null,
    /** @type {cc.EditBox} */
    _editBoxTurn: null,
    /** @type {ccui.Layout} */
    _layoutSetTurn: null,
    /** @type {ck.Text} */
    _txtSetTurn: null,
    /** @type {ccui.Layout} */
    _layoutDeckHeader: null,
    /** @type {ck.Text} */
    _txtDeckHeader: null,
    /** @type {ccui.Layout} */
    _lineBot: null,
    /** @type {ccui.Layout} */
    _lineTop: null,
    /** @type {ccui.ImageView} */
    _imgExpandDeck: null,
    /** @type {ccui.ImageView} */
    _imgCollapseDeck: null,
    /** @type {ccui.Layout} */
    _layoutDeck: null,
    /** @type {ccui.Layout} */
    _layoutCards: null,
    /** @type {ck.Text} */
    _txtCards: null,
    /** @type {ccui.Layout} */
    _layoutSelectedCards: null,
    /** @type {ck.Text} */
    _txtOrder: null,
    /** @type {ccui.Layout} */
    _layoutSetDeck: null,
    /** @type {ck.Text} */
    _txtSetDeck: null,
    /** @type {ccui.Layout} */
    _layoutClearDeck: null,
    /** @type {ck.Text} */
    _txtClearDeck: null,
    /** @type {ccui.CheckBox} */
    _checkBoxAI: null,
    /** @type {ccui.CheckBox} */
    _checkBoxAuto: null,
    /** @type {ck.Text} */
    _txtAI: null,
    /** @type {ck.Text} */
    _txtAuto: null,
    /** @type {ccui.Layout} */
    _layoutPokerHeader: null,
    /** @type {ck.Text} */
    _txtPokerHeader: null,
    /** @type {ccui.Layout} */
    _lineBot: null,
    /** @type {ccui.Layout} */
    _lineTop: null,
    /** @type {ccui.ImageView} */
    _imgExpandPoker: null,
    /** @type {ccui.ImageView} */
    _imgCollapsePoker: null,
    /** @type {ccui.Layout} */
    _layoutPoker: null,
    /** @type {ck.Text} */
    _txtPokerNote: null,
    /** @type {ccui.Layout} */
    _layoutCheatPoker: null,
    /** @type {ck.Text} */
    _txtCheatPoker: null,
    /** @type {ccui.Layout} */
    _layoutOffCheatPoker: null,
    /** @type {ck.Text} */
    _txtOffCheatPoker: null,
    /** @type {ccui.Layout} */
    _layoutProtocolHeader: null,
    /** @type {ck.Text} */
    _txtProtocolHeader: null,
    /** @type {ccui.Layout} */
    _lineBot: null,
    /** @type {ccui.Layout} */
    _lineTop: null,
    /** @type {ccui.ImageView} */
    _imgExpandProtocol: null,
    /** @type {ccui.ImageView} */
    _imgCollapseProtocol: null,
    /** @type {ccui.Layout} */
    _layoutProtocol: null,
    /** @type {ck.Text} */
    _txtProtocolDetail: null,
    /** @type {ccui.Layout} */
    _layoutProtocolValue: null,
    /** @type {cc.EditBox} */
    _editBoxProtocolValue: null,
    /** @type {ccui.Layout} */
    _layoutProtocolByte: null,
    /** @type {ck.Text} */
    _txtProtocolByte: null,
    /** @type {ccui.Layout} */
    _layoutProtocolShort: null,
    /** @type {ck.Text} */
    _txtProtocolShort: null,
    /** @type {ccui.Layout} */
    _layoutProtocolInt: null,
    /** @type {ck.Text} */
    _txtProtocolInt: null,
    /** @type {ccui.Layout} */
    _layoutProtocolLong: null,
    /** @type {ck.Text} */
    _txtProtocolLong: null,
    /** @type {ccui.Layout} */
    _layoutProtocolDouble: null,
    /** @type {ck.Text} */
    _txtProtocolDouble: null,
    /** @type {ccui.Layout} */
    _layoutProtocolString: null,
    /** @type {ck.Text} */
    _txtProtocolString: null,
    /** @type {ccui.Layout} */
    _layoutProtocolBool: null,
    /** @type {ck.Text} */
    _txtProtocolBool: null,
    /** @type {ccui.Layout} */
    _layoutProtocolID: null,
    /** @type {cc.EditBox} */
    _editBoxProtocolID: null,
    /** @type {ccui.Layout} */
    _layoutProtocolClear: null,
    /** @type {ck.Text} */
    _txtProtocolClear: null,
    /** @type {ccui.Layout} */
    _layoutProtocolSend: null,
    /** @type {ck.Text} */
    _txtProtocolSet: null,
    /** @type {ccui.Layout} */
    _layoutCardCollectionHeader: null,
    /** @type {ck.Text} */
    _txtCardCollectionHeader: null,
    /** @type {ccui.Layout} */
    _lineBot: null,
    /** @type {ccui.Layout} */
    _lineTop: null,
    /** @type {ccui.ImageView} */
    _imgExpandCardCollection: null,
    /** @type {ccui.ImageView} */
    _imgCollapseCardCollection: null,
    /** @type {ccui.Layout} */
    _layoutCardCollection: null,
    /** @type {ccui.Layout} */
    _layoutCardCollectionCard: null,
    /** @type {ck.Text} */
    _txtCardCollectionCardNote: null,
    /** @type {ccui.Layout} */
    _layoutBoxCardCollectionCard: null,
    /** @type {cc.EditBox} */
    _editBoxCardCollectionCard: null,
    /** @type {ccui.Layout} */
    _layoutAddCardCollectionCard: null,
    /** @type {ck.Text} */
    _txtAddCardCollectionCard: null,
    /** @type {ccui.Layout} */
    _layoutCardCollectionCardSet: null,
    /** @type {ck.Text} */
    _txtCardCollectionCardSetNote: null,
    /** @type {ccui.Layout} */
    _layoutBoxCardCollectionCardSet: null,
    /** @type {cc.EditBox} */
    _editBoxCardCollectionCardSet: null,
    /** @type {ccui.Layout} */
    _layoutAddCardCollectionCardSet: null,
    /** @type {ck.Text} */
    _txtAddCardCollectionCardSet: null,
    /** @type {ccui.Layout} */
    _layoutCardCollectionChance: null,
    /** @type {ck.Text} */
    _txtCardCollectionChanceNote: null,
    /** @type {ccui.Layout} */
    _layoutBoxCardCollectionChance: null,
    /** @type {cc.EditBox} */
    _editBoxCardCollectionChance: null,
    /** @type {ccui.Layout} */
    _layoutUseCardCollectionChance: null,
    /** @type {ck.Text} */
    _txtUseCardCollectionChance: null,
    /** @type {ccui.Layout} */
    _layoutCardCollectionButtons: null,
    /** @type {ccui.Layout} */
    _layoutAddCardCollectionAllSets: null,
    /** @type {ck.Text} */
    _txtAddCardCollectionAllSets: null,
    /** @type {ccui.Layout} */
    _layoutUseCardCollectionClearChance: null,
    /** @type {ck.Text} */
    _txtUseCardCollectionClearChance: null,
    /** @type {ccui.Layout} */
    _layoutShareImageHeader: null,
    /** @type {ck.Text} */
    _txtShareImageHeader: null,
    /** @type {ccui.Layout} */
    _lineBot: null,
    /** @type {ccui.Layout} */
    _lineTop: null,
    /** @type {ccui.ImageView} */
    _imgExpandShareImage: null,
    /** @type {ccui.ImageView} */
    _imgCollapseShareImage: null,
    /** @type {ccui.Layout} */
    _layoutShareImage: null,
    /** @type {ccui.Layout} */
    _layoutShareImagePisti: null,
    /** @type {ck.Text} */
    _txtShareImagePistiNote: null,
    /** @type {ccui.Layout} */
    _layoutBoxShareImagePisti: null,
    /** @type {cc.EditBox} */
    _editBoxShareImagePisti: null,
    /** @type {ccui.Layout} */
    _layoutSetShareImagePisti: null,
    /** @type {ck.Text} */
    _txtSetShareImagePisti: null,
    /** @type {ccui.Layout} */
    _layoutShareImageRanking: null,
    /** @type {ck.Text} */
    _txtShareImageRankingNote: null,
    /** @type {ccui.Layout} */
    _layoutBoxShareImageRanking: null,
    /** @type {cc.EditBox} */
    _editBoxShareImageRanking: null,
    /** @type {ccui.Layout} */
    _layoutSetShareImageRanking: null,
    /** @type {ck.Text} */
    _txtSetShareImageRanking: null,
    /** @type {ccui.Layout} */
    _layoutShareImageFrame: null,
    /** @type {ck.Text} */
    _txtShareImageFrameNote: null,
    /** @type {ccui.Layout} */
    _layoutBoxShareImageFrame: null,
    /** @type {cc.EditBox} */
    _editBoxShareImageFrame: null,
    /** @type {ccui.Layout} */
    _layoutSetShareImageFrame: null,
    /** @type {ck.Text} */
    _txtSetShareImageFrame: null,
    /** @type {ccui.Layout} */
    _layoutTrophyHeader: null,
    /** @type {ck.Text} */
    _txtTrophyHeader: null,
    /** @type {ccui.Layout} */
    _lineBot: null,
    /** @type {ccui.Layout} */
    _lineTop: null,
    /** @type {ccui.ImageView} */
    _imgExpandTrophy: null,
    /** @type {ccui.ImageView} */
    _imgCollapseTrophy: null,
    /** @type {ccui.Layout} */
    _layoutTrophy: null,
    /** @type {ccui.Layout} */
    _layoutAddTrophy: null,
    /** @type {ck.Text} */
    _txtAddTrophyNote: null,
    /** @type {ccui.Layout} */
    _layoutBoxAddTrophy: null,
    /** @type {cc.EditBox} */
    _editBoxAddTrophy: null,
    /** @type {ccui.Layout} */
    _layoutBtnAddTrophy: null,
    /** @type {ck.Text} */
    _txtAddTrophy: null,
    /** @type {ccui.Layout} */
    _layoutSetTrophyLv: null,
    /** @type {ck.Text} */
    _txtSetTrophyLvNote: null,
    /** @type {ccui.Layout} */
    _layoutBoxSetTrophyLv: null,
    /** @type {cc.EditBox} */
    _editBoxSetTrophyLv: null,
    /** @type {ccui.Layout} */
    _layoutBtnSetTrophyLv: null,
    /** @type {ck.Text} */
    _txtSetTrophyLv: null,
    /** @type {ccui.Layout} */
    _layoutSetTrophyTop: null,
    /** @type {ck.Text} */
    _txtSetTrophyTopNote: null,
    /** @type {ccui.Layout} */
    _layoutBoxSetTrophyTop: null,
    /** @type {cc.EditBox} */
    _editBoxSetTrophyTop: null,
    /** @type {ccui.Layout} */
    _layoutBtnSetTrophyTop: null,
    /** @type {ck.Text} */
    _txtSetTrophyTop: null,
    /** @type {ccui.Layout} */
    _layoutNewYearTrophy: null,
    /** @type {ck.Text} */
    _txtNewYearTrophyNote: null,
    /** @type {ccui.Layout} */
    _layoutBoxNewYearTrophy: null,
    /** @type {cc.EditBox} */
    _editBoxNewYearTrophy: null,
    /** @type {ccui.Layout} */
    _layoutBtnNewYearTrophy: null,
    /** @type {ck.Text} */
    _txtNewYearTrophy: null,
    /** @type {ccui.Layout} */
    _layoutClearTrophy: null,
    /** @type {ck.Text} */
    _txtClearTrophyNote: null,
    /** @type {ccui.Layout} */
    _layoutBtnClearTrophy: null,
    /** @type {ck.Text} */
    _txtClearTrophy: null,
    /** @type {ccui.Layout} */
    _layoutLeagueHeader: null,
    /** @type {ck.Text} */
    _txtLeagueHeader: null,
    /** @type {ccui.Layout} */
    _lineBot: null,
    /** @type {ccui.Layout} */
    _lineTop: null,
    /** @type {ccui.ImageView} */
    _imgExpandLeague: null,
    /** @type {ccui.ImageView} */
    _imgCollapseLeague: null,
    /** @type {ccui.Layout} */
    _layoutLeague: null,
    /** @type {ccui.Layout} */
    _layoutSetTimeLeague: null,
    /** @type {ck.Text} */
    _txtSetTimeLeagueNote: null,
    /** @type {ccui.Layout} */
    _layoutBoxAddBotLeague1: null,
    /** @type {cc.EditBox} */
    _editBoxAddBotLeague1: null,
    /** @type {ccui.Layout} */
    _layoutBtnSetTimeLeague: null,
    /** @type {ck.Text} */
    _txtAddTrophy: null,
    /** @type {ccui.Layout} */
    _layoutAddBotLeague: null,
    /** @type {ccui.Layout} */
    _layoutBoxAddBotLeague1_0: null,
    /** @type {cc.EditBox} */
    _editBoxAddBotScoreLeague1: null,
    /** @type {ck.Text} */
    _txtSetTrophyLvNote: null,
    /** @type {ccui.Layout} */
    _layoutBtnSetMinBot: null,
    /** @type {ck.Text} */
    _txtSetTrophyLv: null,
    /** @type {ccui.Layout} */
    _layoutAddBotLeague2: null,
    /** @type {ck.Text} */
    _txtSetTrophyTopNote: null,
    /** @type {ccui.Layout} */
    _layoutBoxSetTrophyTop: null,
    /** @type {cc.EditBox} */
    _editBoxAddBot2: null,
    /** @type {ccui.Layout} */
    _layoutBtnAddBotLeague: null,
    /** @type {ck.Text} */
    _txtLeagueAdd: null,
    /** @type {ccui.Layout} */
    _layoutHeader: null,
    /** @type {ck.Text} */
    _txtHeader: null,
    /** @type {ccui.Layout} */
    _layoutClose: null,
    /** @type {ccui.ImageView} */
    Image_1: null,


    /**
     * _ccs.CheatMenu constructor
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
        this._layoutRoot.setBackGroundColorType(1);
        this._layoutRoot.setBackGroundColor(cc.color(63, 63, 63, 255));

        ///// # _layoutContent
        this._layoutContent = new ccui.Layout();
        this._layoutContent.setName("_layoutContent");
        this._layoutRoot.addChild(this._layoutContent);
        this._layoutContent.setCascadeOpacityEnabled(true);
        this._layoutContent.setCascadeColorEnabled(true);
        this._layoutContent.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutContent, 0.5, 0);
        let _layoutContentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutContent);
        _layoutContentLayoutComponent.setPositionPercentXEnabled(true);
        _layoutContentLayoutComponent.setPositionPercentX(0.5);
        _layoutContentLayoutComponent.setPositionPercentYEnabled(true);
        _layoutContentLayoutComponent.setPositionPercentY(0);
        _layoutContentLayoutComponent.setPercentWidthEnabled(true);
        _layoutContentLayoutComponent.setPercentWidth(1);
        _layoutContentLayoutComponent.setPercentHeightEnabled(true);
        _layoutContentLayoutComponent.setPercentHeight(0.95);
        this._layoutContent.setTouchEnabled(true);
        this._layoutContent.setUnifySizeEnabled(false);
        this._layoutContent.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutContent, 1, 0.95);

        ///// # _listView
        this._listView = new ccui.ListView();
        this._listView.setName("_listView");
        this._layoutContent.addChild(this._listView);
        this._listView.setCascadeOpacityEnabled(true);
        this._listView.setCascadeColorEnabled(true);
        this._listView.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._listView, 0.5, 0.5);
        let _listViewLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._listView);
        _listViewLayoutComponent.setPositionPercentXEnabled(true);
        _listViewLayoutComponent.setPositionPercentX(0.5);
        _listViewLayoutComponent.setPositionPercentYEnabled(true);
        _listViewLayoutComponent.setPositionPercentY(0.5);
        _listViewLayoutComponent.setPercentWidthEnabled(true);
        _listViewLayoutComponent.setPercentWidth(1);
        _listViewLayoutComponent.setPercentHeightEnabled(true);
        _listViewLayoutComponent.setPercentHeight(1);
        this._listView.setTouchEnabled(true);
        this._listView.setUnifySizeEnabled(false);
        this._listView.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._listView, 1, 1);
        this._listView.setClippingEnabled(false);
        this._listView.setDirection(ccui.ScrollView.DIR_VERTICAL);
        this._listView.setGravity(ccui.ListView.GRAVITY_CENTER_HORIZONTAL);
        this._listView.setItemsMargin(5);
        this._listView.setBounceEnabled(true);

        ///// # _layoutCmdHeader
        this._layoutCmdHeader = new ccui.Layout();
        this._layoutCmdHeader.setName("_layoutCmdHeader");
        this._listView.pushBackCustomItem(this._layoutCmdHeader);
        this._layoutCmdHeader.setCascadeOpacityEnabled(true);
        this._layoutCmdHeader.setCascadeColorEnabled(true);
        this._layoutCmdHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCmdHeader, 0.5, 0.9943);
        let _layoutCmdHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCmdHeader);
        this._layoutCmdHeader.setTouchEnabled(true);
        this._layoutCmdHeader.setUnifySizeEnabled(false);
        this._layoutCmdHeader.ignoreContentAdaptWithSize(false);
        this._layoutCmdHeader.setContentSize(cc.size(640, 40));

        ///// # _txtCmdHeader
        this._txtCmdHeader = new ck.Text();
        this._txtCmdHeader.setName("_txtCmdHeader");
        this._layoutCmdHeader.addChild(this._txtCmdHeader);
        this._txtCmdHeader.setCascadeOpacityEnabled(true);
        this._txtCmdHeader.setCascadeColorEnabled(true);
        this._txtCmdHeader.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCmdHeader, 0.07, 0.5);
        let _txtCmdHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCmdHeader);
        _txtCmdHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtCmdHeaderLayoutComponent.setPositionPercentX(0.07);
        _txtCmdHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtCmdHeaderLayoutComponent.setPositionPercentY(0.5);
        this._txtCmdHeader.setTouchEnabled(false);
        this._txtCmdHeader.ignoreContentAdaptWithSize(true);
        this._txtCmdHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCmdHeader.setDefaultFontSize(25);
        this._txtCmdHeader.setString("Command");
        this._txtCmdHeader.setTextHorizontalAlignment(1);
        this._txtCmdHeader.setTextVerticalAlignment(1);
        this._txtCmdHeader.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _lineBot
        this._lineBot = new ccui.Layout();
        this._lineBot.setName("_lineBot");
        this._layoutCmdHeader.addChild(this._lineBot);
        this._lineBot.setCascadeOpacityEnabled(true);
        this._lineBot.setCascadeColorEnabled(true);
        this._lineBot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineBot, 0.5, 0);
        let _lineBotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineBot);
        _lineBotLayoutComponent.setPositionPercentXEnabled(true);
        _lineBotLayoutComponent.setPositionPercentX(0.5);
        _lineBotLayoutComponent.setPercentWidthEnabled(true);
        _lineBotLayoutComponent.setPercentWidth(0.97);
        this._lineBot.setTouchEnabled(false);
        this._lineBot.setUnifySizeEnabled(false);
        this._lineBot.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineBot, 0.97);
        this._lineBot.setContentSize(cc.size(this._lineBot.width, 3));
        this._lineBot.setBackGroundColorType(1);
        this._lineBot.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _lineTop
        this._lineTop = new ccui.Layout();
        this._lineTop.setName("_lineTop");
        this._layoutCmdHeader.addChild(this._lineTop);
        this._lineTop.setCascadeOpacityEnabled(true);
        this._lineTop.setCascadeColorEnabled(true);
        this._lineTop.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineTop, 0.5, 1);
        let _lineTopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineTop);
        _lineTopLayoutComponent.setPositionPercentXEnabled(true);
        _lineTopLayoutComponent.setPositionPercentX(0.5);
        _lineTopLayoutComponent.setPositionPercentYEnabled(true);
        _lineTopLayoutComponent.setPositionPercentY(1);
        _lineTopLayoutComponent.setPercentWidthEnabled(true);
        _lineTopLayoutComponent.setPercentWidth(0.97);
        this._lineTop.setTouchEnabled(false);
        this._lineTop.setUnifySizeEnabled(false);
        this._lineTop.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineTop, 0.97);
        this._lineTop.setContentSize(cc.size(this._lineTop.width, 3));
        this._lineTop.setBackGroundColorType(1);
        this._lineTop.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _imgExpandCmd
        this._imgExpandCmd = new ccui.ImageView();
        this._imgExpandCmd.setName("_imgExpandCmd");
        this._layoutCmdHeader.addChild(this._imgExpandCmd);
        this._imgExpandCmd.setCascadeOpacityEnabled(true);
        this._imgExpandCmd.setCascadeColorEnabled(true);
        this._imgExpandCmd.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgExpandCmd, 0.04, 0.5);
        this._imgExpandCmd.setScale(0.5, 0.5);
        this._imgExpandCmd.setRotation(90);
        let _imgExpandCmdLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExpandCmd);
        _imgExpandCmdLayoutComponent.setPositionPercentXEnabled(true);
        _imgExpandCmdLayoutComponent.setPositionPercentX(0.04);
        _imgExpandCmdLayoutComponent.setPositionPercentYEnabled(true);
        _imgExpandCmdLayoutComponent.setPositionPercentY(0.5);
        this._imgExpandCmd.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgExpandCmd.setUnifySizeEnabled(false);
        this._imgExpandCmd.ignoreContentAdaptWithSize(false);
        this._imgExpandCmd.setContentSize(cc.size(32, 32));
        this._imgExpandCmd.setTouchEnabled(false);

        ///// # _imgCollapseCmd
        this._imgCollapseCmd = new ccui.ImageView();
        this._imgCollapseCmd.setName("_imgCollapseCmd");
        this._layoutCmdHeader.addChild(this._imgCollapseCmd);
        this._imgCollapseCmd.setCascadeOpacityEnabled(true);
        this._imgCollapseCmd.setCascadeColorEnabled(true);
        this._imgCollapseCmd.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCollapseCmd, 0.0313, 0.5);
        this._imgCollapseCmd.setScale(0.5, 0.5);
        this._imgCollapseCmd.setFlippedY(true);
        let _imgCollapseCmdLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCollapseCmd);
        this._imgCollapseCmd.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgCollapseCmd.setUnifySizeEnabled(false);
        this._imgCollapseCmd.ignoreContentAdaptWithSize(false);
        this._imgCollapseCmd.setContentSize(cc.size(32, 32));
        this._imgCollapseCmd.setTouchEnabled(false);
        this._imgCollapseCmd.setFlippedY(true);

        ///// # _layoutCmd
        this._layoutCmd = new ccui.Layout();
        this._layoutCmd.setName("_layoutCmd");
        this._listView.pushBackCustomItem(this._layoutCmd);
        this._layoutCmd.setCascadeOpacityEnabled(true);
        this._layoutCmd.setCascadeColorEnabled(true);
        this._layoutCmd.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCmd, 0.5, 0.9771);
        let _layoutCmdLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCmd);
        this._layoutCmd.setTouchEnabled(false);
        this._layoutCmd.setUnifySizeEnabled(false);
        this._layoutCmd.ignoreContentAdaptWithSize(false);
        this._layoutCmd.setContentSize(cc.size(640, 70));

        ///// # _layoutBoxCmd
        this._layoutBoxCmd = new ccui.Layout();
        this._layoutBoxCmd.setName("_layoutBoxCmd");
        this._layoutCmd.addChild(this._layoutBoxCmd);
        this._layoutBoxCmd.setCascadeOpacityEnabled(true);
        this._layoutBoxCmd.setCascadeColorEnabled(true);
        this._layoutBoxCmd.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBoxCmd, 0.0234, 0.5);
        let _layoutBoxCmdLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBoxCmd);
        _layoutBoxCmdLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBoxCmdLayoutComponent.setPositionPercentY(0.5);
        this._layoutBoxCmd.setTouchEnabled(true);
        this._layoutBoxCmd.setUnifySizeEnabled(false);
        this._layoutBoxCmd.ignoreContentAdaptWithSize(false);
        this._layoutBoxCmd.setContentSize(cc.size(361.8453, 50));
        this._layoutBoxCmd.setBackGroundColorType(1);
        this._layoutBoxCmd.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxCmd
        this._editBoxCmd = new cc.EditBox(cc.size(361.8453, 50), new cc.Scale9Sprite());
        this._editBoxCmd.setName("_editBoxCmd");
        this._layoutBoxCmd.addChild(this._editBoxCmd);
        this._editBoxCmd.setCascadeOpacityEnabled(true);
        this._editBoxCmd.setCascadeColorEnabled(true);
        this._editBoxCmd.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxCmd, 0.5, 0.5);
        this._editBoxCmd.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxCmdLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxCmd);
        _editBoxCmdLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxCmdLayoutComponent.setPositionPercentX(0.5);
        _editBoxCmdLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxCmdLayoutComponent.setPositionPercentY(0.5);
        _editBoxCmdLayoutComponent.setPercentWidthEnabled(true);
        _editBoxCmdLayoutComponent.setPercentWidth(1);
        _editBoxCmdLayoutComponent.setPercentHeightEnabled(true);
        _editBoxCmdLayoutComponent.setPercentHeight(1);
        this._editBoxCmd.setUnifySizeEnabled(false);
        this._editBoxCmd.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxCmd, 1, 1);
        this._editBoxCmd.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxCmd.setFontSize(22);
        this._editBoxCmd.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxCmd.setPlaceholderFontSize(22);
        this._editBoxCmd.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxCmd.setPlaceHolder("Ex. addItem;10;1000");
        this._editBoxCmd.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxCmd.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutSendCmd
        this._layoutSendCmd = new ccui.Layout();
        this._layoutSendCmd.setName("_layoutSendCmd");
        this._layoutCmd.addChild(this._layoutSendCmd);
        this._layoutSendCmd.setCascadeOpacityEnabled(true);
        this._layoutSendCmd.setCascadeColorEnabled(true);
        this._layoutSendCmd.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutSendCmd, 0.7578, 0.5);
        let _layoutSendCmdLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSendCmd);
        _layoutSendCmdLayoutComponent.setPositionPercentYEnabled(true);
        _layoutSendCmdLayoutComponent.setPositionPercentY(0.5);
        this._layoutSendCmd.setTouchEnabled(true);
        this._layoutSendCmd.setUnifySizeEnabled(false);
        this._layoutSendCmd.ignoreContentAdaptWithSize(false);
        this._layoutSendCmd.setContentSize(cc.size(100, 50));
        this._layoutSendCmd.setBackGroundColorType(1);
        this._layoutSendCmd.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtSendCmd
        this._txtSendCmd = new ck.Text();
        this._txtSendCmd.setName("_txtSendCmd");
        this._layoutSendCmd.addChild(this._txtSendCmd);
        this._txtSendCmd.setCascadeOpacityEnabled(true);
        this._txtSendCmd.setCascadeColorEnabled(true);
        this._txtSendCmd.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtSendCmd, 0.5, 0.5);
        let _txtSendCmdLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSendCmd);
        this._txtSendCmd.setTouchEnabled(false);
        this._txtSendCmd.ignoreContentAdaptWithSize(true);
        this._txtSendCmd.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSendCmd.setDefaultFontSize(22);
        this._txtSendCmd.setString("Send");
        this._txtSendCmd.setTextHorizontalAlignment(1);
        this._txtSendCmd.setTextVerticalAlignment(1);

        ///// # _layoutProfileHeader
        this._layoutProfileHeader = new ccui.Layout();
        this._layoutProfileHeader.setName("_layoutProfileHeader");
        this._listView.pushBackCustomItem(this._layoutProfileHeader);
        this._layoutProfileHeader.setCascadeOpacityEnabled(true);
        this._layoutProfileHeader.setCascadeColorEnabled(true);
        this._layoutProfileHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutProfileHeader, 0.5, 0.96);
        let _layoutProfileHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProfileHeader);
        this._layoutProfileHeader.setTouchEnabled(true);
        this._layoutProfileHeader.setUnifySizeEnabled(false);
        this._layoutProfileHeader.ignoreContentAdaptWithSize(false);
        this._layoutProfileHeader.setContentSize(cc.size(640, 40));

        ///// # _txtHeaderProfile
        this._txtHeaderProfile = new ck.Text();
        this._txtHeaderProfile.setName("_txtHeaderProfile");
        this._layoutProfileHeader.addChild(this._txtHeaderProfile);
        this._txtHeaderProfile.setCascadeOpacityEnabled(true);
        this._txtHeaderProfile.setCascadeColorEnabled(true);
        this._txtHeaderProfile.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHeaderProfile, 0.07, 0.5);
        let _txtHeaderProfileLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHeaderProfile);
        _txtHeaderProfileLayoutComponent.setPositionPercentXEnabled(true);
        _txtHeaderProfileLayoutComponent.setPositionPercentX(0.07);
        _txtHeaderProfileLayoutComponent.setPositionPercentYEnabled(true);
        _txtHeaderProfileLayoutComponent.setPositionPercentY(0.5);
        this._txtHeaderProfile.setTouchEnabled(false);
        this._txtHeaderProfile.ignoreContentAdaptWithSize(true);
        this._txtHeaderProfile.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHeaderProfile.setDefaultFontSize(25);
        this._txtHeaderProfile.setString("Basic");
        this._txtHeaderProfile.setTextHorizontalAlignment(1);
        this._txtHeaderProfile.setTextVerticalAlignment(1);
        this._txtHeaderProfile.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _lineBot
        this._lineBot = new ccui.Layout();
        this._lineBot.setName("_lineBot");
        this._layoutProfileHeader.addChild(this._lineBot);
        this._lineBot.setCascadeOpacityEnabled(true);
        this._lineBot.setCascadeColorEnabled(true);
        this._lineBot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineBot, 0.5, 0);
        let _lineBotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineBot);
        _lineBotLayoutComponent.setPositionPercentXEnabled(true);
        _lineBotLayoutComponent.setPositionPercentX(0.5);
        _lineBotLayoutComponent.setPercentWidthEnabled(true);
        _lineBotLayoutComponent.setPercentWidth(0.97);
        this._lineBot.setTouchEnabled(false);
        this._lineBot.setUnifySizeEnabled(false);
        this._lineBot.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineBot, 0.97);
        this._lineBot.setContentSize(cc.size(this._lineBot.width, 3));
        this._lineBot.setBackGroundColorType(1);
        this._lineBot.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _lineTop
        this._lineTop = new ccui.Layout();
        this._lineTop.setName("_lineTop");
        this._layoutProfileHeader.addChild(this._lineTop);
        this._lineTop.setCascadeOpacityEnabled(true);
        this._lineTop.setCascadeColorEnabled(true);
        this._lineTop.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineTop, 0.5, 1);
        let _lineTopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineTop);
        _lineTopLayoutComponent.setPositionPercentXEnabled(true);
        _lineTopLayoutComponent.setPositionPercentX(0.5);
        _lineTopLayoutComponent.setPercentWidthEnabled(true);
        _lineTopLayoutComponent.setPercentWidth(0.97);
        this._lineTop.setTouchEnabled(false);
        this._lineTop.setUnifySizeEnabled(false);
        this._lineTop.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineTop, 0.97);
        this._lineTop.setContentSize(cc.size(this._lineTop.width, 3));
        this._lineTop.setBackGroundColorType(1);
        this._lineTop.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _imgExpandProfile
        this._imgExpandProfile = new ccui.ImageView();
        this._imgExpandProfile.setName("_imgExpandProfile");
        this._layoutProfileHeader.addChild(this._imgExpandProfile);
        this._imgExpandProfile.setCascadeOpacityEnabled(true);
        this._imgExpandProfile.setCascadeColorEnabled(true);
        this._imgExpandProfile.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgExpandProfile, 0.04, 0.5);
        this._imgExpandProfile.setScale(0.5, 0.5);
        this._imgExpandProfile.setRotation(90);
        let _imgExpandProfileLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExpandProfile);
        _imgExpandProfileLayoutComponent.setPositionPercentXEnabled(true);
        _imgExpandProfileLayoutComponent.setPositionPercentX(0.04);
        _imgExpandProfileLayoutComponent.setPositionPercentYEnabled(true);
        _imgExpandProfileLayoutComponent.setPositionPercentY(0.5);
        this._imgExpandProfile.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgExpandProfile.setUnifySizeEnabled(false);
        this._imgExpandProfile.ignoreContentAdaptWithSize(false);
        this._imgExpandProfile.setContentSize(cc.size(32, 32));
        this._imgExpandProfile.setTouchEnabled(false);

        ///// # _imgCollapseProfile
        this._imgCollapseProfile = new ccui.ImageView();
        this._imgCollapseProfile.setName("_imgCollapseProfile");
        this._layoutProfileHeader.addChild(this._imgCollapseProfile);
        this._imgCollapseProfile.setCascadeOpacityEnabled(true);
        this._imgCollapseProfile.setCascadeColorEnabled(true);
        this._imgCollapseProfile.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCollapseProfile, 0.0313, 0.5);
        this._imgCollapseProfile.setScale(0.5, 0.5);
        this._imgCollapseProfile.setRotation(180);
        let _imgCollapseProfileLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCollapseProfile);
        this._imgCollapseProfile.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgCollapseProfile.setUnifySizeEnabled(false);
        this._imgCollapseProfile.ignoreContentAdaptWithSize(false);
        this._imgCollapseProfile.setContentSize(cc.size(32, 32));
        this._imgCollapseProfile.setTouchEnabled(false);

        ///// # _layoutProfile
        this._layoutProfile = new ccui.Layout();
        this._layoutProfile.setName("_layoutProfile");
        this._listView.pushBackCustomItem(this._layoutProfile);
        this._layoutProfile.setCascadeOpacityEnabled(true);
        this._layoutProfile.setCascadeColorEnabled(true);
        this._layoutProfile.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutProfile, 0.5, 0.8971);
        let _layoutProfileLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProfile);
        this._layoutProfile.setTouchEnabled(false);
        this._layoutProfile.setUnifySizeEnabled(false);
        this._layoutProfile.ignoreContentAdaptWithSize(false);
        this._layoutProfile.setContentSize(cc.size(640, 390));

        ///// # _layoutCoin
        this._layoutCoin = new ccui.Layout();
        this._layoutCoin.setName("_layoutCoin");
        this._layoutProfile.addChild(this._layoutCoin);
        this._layoutCoin.setCascadeOpacityEnabled(true);
        this._layoutCoin.setCascadeColorEnabled(true);
        this._layoutCoin.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutCoin, 0.5, 0.9992);
        let _layoutCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCoin);
        _layoutCoinLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentX(0.5);
        _layoutCoinLayoutComponent.setPercentWidthEnabled(true);
        _layoutCoinLayoutComponent.setPercentWidth(1);
        this._layoutCoin.setTouchEnabled(true);
        this._layoutCoin.setUnifySizeEnabled(false);
        this._layoutCoin.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutCoin, 1);
        this._layoutCoin.setContentSize(cc.size(this._layoutCoin.width, 70));

        ///// # _txtCoinHeader
        this._txtCoinHeader = new ck.Text();
        this._txtCoinHeader.setName("_txtCoinHeader");
        this._layoutCoin.addChild(this._txtCoinHeader);
        this._txtCoinHeader.setCascadeOpacityEnabled(true);
        this._txtCoinHeader.setCascadeColorEnabled(true);
        this._txtCoinHeader.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCoinHeader, 0.0318, 0.5);
        let _txtCoinHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCoinHeader);
        _txtCoinHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtCoinHeaderLayoutComponent.setPositionPercentX(0.0318);
        _txtCoinHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtCoinHeaderLayoutComponent.setPositionPercentY(0.5);
        this._txtCoinHeader.setTouchEnabled(false);
        this._txtCoinHeader.ignoreContentAdaptWithSize(true);
        this._txtCoinHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCoinHeader.setDefaultFontSize(25);
        this._txtCoinHeader.setString("Coin");
        this._txtCoinHeader.setTextHorizontalAlignment(1);
        this._txtCoinHeader.setTextVerticalAlignment(1);
        this._txtCoinHeader.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutBoxCoin
        this._layoutBoxCoin = new ccui.Layout();
        this._layoutBoxCoin.setName("_layoutBoxCoin");
        this._layoutCoin.addChild(this._layoutBoxCoin);
        this._layoutBoxCoin.setCascadeOpacityEnabled(true);
        this._layoutBoxCoin.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutBoxCoin, 0.1503, 0.1429);
        let _layoutBoxCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBoxCoin);
        _layoutBoxCoinLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBoxCoinLayoutComponent.setPositionPercentX(0.1503);
        _layoutBoxCoinLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBoxCoinLayoutComponent.setPositionPercentY(0.1429);
        _layoutBoxCoinLayoutComponent.setPercentWidthEnabled(true);
        _layoutBoxCoinLayoutComponent.setPercentWidth(0.382);
        this._layoutBoxCoin.setTouchEnabled(true);
        this._layoutBoxCoin.setUnifySizeEnabled(false);
        this._layoutBoxCoin.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutBoxCoin, 0.382);
        this._layoutBoxCoin.setContentSize(cc.size(this._layoutBoxCoin.width, 50));
        this._layoutBoxCoin.setBackGroundColorType(1);
        this._layoutBoxCoin.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxCoin
        this._editBoxCoin = new cc.EditBox(cc.size(244.48, 50), new cc.Scale9Sprite());
        this._editBoxCoin.setName("_editBoxCoin");
        this._layoutBoxCoin.addChild(this._editBoxCoin);
        this._editBoxCoin.setCascadeOpacityEnabled(true);
        this._editBoxCoin.setCascadeColorEnabled(true);
        this._editBoxCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxCoin, 0.5, 0.5);
        this._editBoxCoin.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxCoin);
        _editBoxCoinLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxCoinLayoutComponent.setPositionPercentX(0.5);
        _editBoxCoinLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxCoinLayoutComponent.setPositionPercentY(0.5);
        _editBoxCoinLayoutComponent.setPercentWidthEnabled(true);
        _editBoxCoinLayoutComponent.setPercentWidth(1);
        _editBoxCoinLayoutComponent.setPercentHeightEnabled(true);
        _editBoxCoinLayoutComponent.setPercentHeight(1);
        this._editBoxCoin.setUnifySizeEnabled(false);
        this._editBoxCoin.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxCoin, 1, 1);
        this._editBoxCoin.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxCoin.setFontSize(22);
        this._editBoxCoin.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxCoin.setPlaceholderFontSize(22);
        this._editBoxCoin.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxCoin.setPlaceHolder("Ex. 100,000,000");
        this._editBoxCoin.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxCoin.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutSetCoin
        this._layoutSetCoin = new ccui.Layout();
        this._layoutSetCoin.setName("_layoutSetCoin");
        this._layoutCoin.addChild(this._layoutSetCoin);
        this._layoutSetCoin.setCascadeOpacityEnabled(true);
        this._layoutSetCoin.setCascadeColorEnabled(true);
        this._layoutSetCoin.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutSetCoin, 0.964, 0.5);
        let _layoutSetCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSetCoin);
        _layoutSetCoinLayoutComponent.setPositionPercentXEnabled(true);
        _layoutSetCoinLayoutComponent.setPositionPercentX(0.964);
        _layoutSetCoinLayoutComponent.setPositionPercentYEnabled(true);
        _layoutSetCoinLayoutComponent.setPositionPercentY(0.5);
        this._layoutSetCoin.setTouchEnabled(true);
        this._layoutSetCoin.setUnifySizeEnabled(false);
        this._layoutSetCoin.ignoreContentAdaptWithSize(false);
        this._layoutSetCoin.setContentSize(cc.size(100, 50));
        this._layoutSetCoin.setBackGroundColorType(1);
        this._layoutSetCoin.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtSetCoin
        this._txtSetCoin = new ck.Text();
        this._txtSetCoin.setName("_txtSetCoin");
        this._layoutSetCoin.addChild(this._txtSetCoin);
        this._txtSetCoin.setCascadeOpacityEnabled(true);
        this._txtSetCoin.setCascadeColorEnabled(true);
        this._txtSetCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtSetCoin, 0.5, 0.5);
        let _txtSetCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSetCoin);
        this._txtSetCoin.setTouchEnabled(false);
        this._txtSetCoin.ignoreContentAdaptWithSize(true);
        this._txtSetCoin.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSetCoin.setDefaultFontSize(22);
        this._txtSetCoin.setString("Set");
        this._txtSetCoin.setTextHorizontalAlignment(1);
        this._txtSetCoin.setTextVerticalAlignment(1);

        ///// # _layoutAddCoin
        this._layoutAddCoin = new ccui.Layout();
        this._layoutAddCoin.setName("_layoutAddCoin");
        this._layoutCoin.addChild(this._layoutAddCoin);
        this._layoutAddCoin.setCascadeOpacityEnabled(true);
        this._layoutAddCoin.setCascadeColorEnabled(true);
        this._layoutAddCoin.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutAddCoin, 0.749, 0.5);
        let _layoutAddCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAddCoin);
        _layoutAddCoinLayoutComponent.setPositionPercentXEnabled(true);
        _layoutAddCoinLayoutComponent.setPositionPercentX(0.749);
        _layoutAddCoinLayoutComponent.setPositionPercentYEnabled(true);
        _layoutAddCoinLayoutComponent.setPositionPercentY(0.5);
        this._layoutAddCoin.setTouchEnabled(true);
        this._layoutAddCoin.setUnifySizeEnabled(false);
        this._layoutAddCoin.ignoreContentAdaptWithSize(false);
        this._layoutAddCoin.setContentSize(cc.size(100, 50));
        this._layoutAddCoin.setBackGroundColorType(1);
        this._layoutAddCoin.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtAddCoin
        this._txtAddCoin = new ck.Text();
        this._txtAddCoin.setName("_txtAddCoin");
        this._layoutAddCoin.addChild(this._txtAddCoin);
        this._txtAddCoin.setCascadeOpacityEnabled(true);
        this._txtAddCoin.setCascadeColorEnabled(true);
        this._txtAddCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAddCoin, 0.5, 0.5);
        let _txtAddCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAddCoin);
        this._txtAddCoin.setTouchEnabled(false);
        this._txtAddCoin.ignoreContentAdaptWithSize(true);
        this._txtAddCoin.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAddCoin.setDefaultFontSize(22);
        this._txtAddCoin.setString("Add");
        this._txtAddCoin.setTextHorizontalAlignment(1);
        this._txtAddCoin.setTextVerticalAlignment(1);

        ///// # _layoutGem
        this._layoutGem = new ccui.Layout();
        this._layoutGem.setName("_layoutGem");
        this._layoutProfile.addChild(this._layoutGem);
        this._layoutGem.setCascadeOpacityEnabled(true);
        this._layoutGem.setCascadeColorEnabled(true);
        this._layoutGem.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutGem, 0.5, 0.8505);
        let _layoutGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGem);
        _layoutGemLayoutComponent.setPositionPercentXEnabled(true);
        _layoutGemLayoutComponent.setPositionPercentX(0.5);
        _layoutGemLayoutComponent.setPercentWidthEnabled(true);
        _layoutGemLayoutComponent.setPercentWidth(1);
        this._layoutGem.setTouchEnabled(true);
        this._layoutGem.setUnifySizeEnabled(false);
        this._layoutGem.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutGem, 1);
        this._layoutGem.setContentSize(cc.size(this._layoutGem.width, 70));

        ///// # _txtGemHeader
        this._txtGemHeader = new ck.Text();
        this._txtGemHeader.setName("_txtGemHeader");
        this._layoutGem.addChild(this._txtGemHeader);
        this._txtGemHeader.setCascadeOpacityEnabled(true);
        this._txtGemHeader.setCascadeColorEnabled(true);
        this._txtGemHeader.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGemHeader, 0.0338, 0.5);
        let _txtGemHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGemHeader);
        _txtGemHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtGemHeaderLayoutComponent.setPositionPercentX(0.0338);
        _txtGemHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtGemHeaderLayoutComponent.setPositionPercentY(0.5);
        this._txtGemHeader.setTouchEnabled(false);
        this._txtGemHeader.ignoreContentAdaptWithSize(true);
        this._txtGemHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtGemHeader.setDefaultFontSize(25);
        this._txtGemHeader.setString("Gem");
        this._txtGemHeader.setTextHorizontalAlignment(1);
        this._txtGemHeader.setTextVerticalAlignment(1);
        this._txtGemHeader.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutBoxGem
        this._layoutBoxGem = new ccui.Layout();
        this._layoutBoxGem.setName("_layoutBoxGem");
        this._layoutGem.addChild(this._layoutBoxGem);
        this._layoutBoxGem.setCascadeOpacityEnabled(true);
        this._layoutBoxGem.setCascadeColorEnabled(true);
        this._layoutBoxGem.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBoxGem, 0.5343, 0.5);
        let _layoutBoxGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBoxGem);
        _layoutBoxGemLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBoxGemLayoutComponent.setPositionPercentX(0.5343);
        _layoutBoxGemLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBoxGemLayoutComponent.setPositionPercentY(0.5);
        _layoutBoxGemLayoutComponent.setPercentWidthEnabled(true);
        _layoutBoxGemLayoutComponent.setPercentWidth(0.382);
        this._layoutBoxGem.setTouchEnabled(true);
        this._layoutBoxGem.setUnifySizeEnabled(false);
        this._layoutBoxGem.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutBoxGem, 0.382);
        this._layoutBoxGem.setContentSize(cc.size(this._layoutBoxGem.width, 50));
        this._layoutBoxGem.setBackGroundColorType(1);
        this._layoutBoxGem.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxGem
        this._editBoxGem = new cc.EditBox(cc.size(244.48, 50), new cc.Scale9Sprite());
        this._editBoxGem.setName("_editBoxGem");
        this._layoutBoxGem.addChild(this._editBoxGem);
        this._editBoxGem.setCascadeOpacityEnabled(true);
        this._editBoxGem.setCascadeColorEnabled(true);
        this._editBoxGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxGem, 0.5, 0.5);
        this._editBoxGem.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxGem);
        _editBoxGemLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxGemLayoutComponent.setPositionPercentX(0.5);
        _editBoxGemLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxGemLayoutComponent.setPositionPercentY(0.5);
        _editBoxGemLayoutComponent.setPercentWidthEnabled(true);
        _editBoxGemLayoutComponent.setPercentWidth(1);
        _editBoxGemLayoutComponent.setPercentHeightEnabled(true);
        _editBoxGemLayoutComponent.setPercentHeight(1);
        this._editBoxGem.setUnifySizeEnabled(false);
        this._editBoxGem.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxGem, 1, 1);
        this._editBoxGem.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxGem.setFontSize(22);
        this._editBoxGem.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxGem.setPlaceholderFontSize(22);
        this._editBoxGem.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxGem.setPlaceHolder("Ex. 100,000,000");
        this._editBoxGem.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxGem.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutSetGem
        this._layoutSetGem = new ccui.Layout();
        this._layoutSetGem.setName("_layoutSetGem");
        this._layoutGem.addChild(this._layoutSetGem);
        this._layoutSetGem.setCascadeOpacityEnabled(true);
        this._layoutSetGem.setCascadeColorEnabled(true);
        this._layoutSetGem.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutSetGem, 0.966, 0.5);
        let _layoutSetGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSetGem);
        _layoutSetGemLayoutComponent.setPositionPercentXEnabled(true);
        _layoutSetGemLayoutComponent.setPositionPercentX(0.966);
        _layoutSetGemLayoutComponent.setPositionPercentYEnabled(true);
        _layoutSetGemLayoutComponent.setPositionPercentY(0.5);
        this._layoutSetGem.setTouchEnabled(true);
        this._layoutSetGem.setUnifySizeEnabled(false);
        this._layoutSetGem.ignoreContentAdaptWithSize(false);
        this._layoutSetGem.setContentSize(cc.size(100, 50));
        this._layoutSetGem.setBackGroundColorType(1);
        this._layoutSetGem.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtSetGem
        this._txtSetGem = new ck.Text();
        this._txtSetGem.setName("_txtSetGem");
        this._layoutSetGem.addChild(this._txtSetGem);
        this._txtSetGem.setCascadeOpacityEnabled(true);
        this._txtSetGem.setCascadeColorEnabled(true);
        this._txtSetGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtSetGem, 0.5, 0.5);
        let _txtSetGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSetGem);
        this._txtSetGem.setTouchEnabled(false);
        this._txtSetGem.ignoreContentAdaptWithSize(true);
        this._txtSetGem.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSetGem.setDefaultFontSize(22);
        this._txtSetGem.setString("Set");
        this._txtSetGem.setTextHorizontalAlignment(1);
        this._txtSetGem.setTextVerticalAlignment(1);

        ///// # _layoutAddGem
        this._layoutAddGem = new ccui.Layout();
        this._layoutAddGem.setName("_layoutAddGem");
        this._layoutGem.addChild(this._layoutAddGem);
        this._layoutAddGem.setCascadeOpacityEnabled(true);
        this._layoutAddGem.setCascadeColorEnabled(true);
        this._layoutAddGem.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutAddGem, 0.751, 0.5);
        let _layoutAddGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAddGem);
        _layoutAddGemLayoutComponent.setPositionPercentXEnabled(true);
        _layoutAddGemLayoutComponent.setPositionPercentX(0.751);
        _layoutAddGemLayoutComponent.setPositionPercentYEnabled(true);
        _layoutAddGemLayoutComponent.setPositionPercentY(0.5);
        this._layoutAddGem.setTouchEnabled(true);
        this._layoutAddGem.setUnifySizeEnabled(false);
        this._layoutAddGem.ignoreContentAdaptWithSize(false);
        this._layoutAddGem.setContentSize(cc.size(100, 50));
        this._layoutAddGem.setBackGroundColorType(1);
        this._layoutAddGem.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtAddGem
        this._txtAddGem = new ck.Text();
        this._txtAddGem.setName("_txtAddGem");
        this._layoutAddGem.addChild(this._txtAddGem);
        this._txtAddGem.setCascadeOpacityEnabled(true);
        this._txtAddGem.setCascadeColorEnabled(true);
        this._txtAddGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAddGem, 0.5, 0.5);
        let _txtAddGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAddGem);
        this._txtAddGem.setTouchEnabled(false);
        this._txtAddGem.ignoreContentAdaptWithSize(true);
        this._txtAddGem.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAddGem.setDefaultFontSize(22);
        this._txtAddGem.setString("Add");
        this._txtAddGem.setTextHorizontalAlignment(1);
        this._txtAddGem.setTextVerticalAlignment(1);

        ///// # _layoutFinishQuests
        this._layoutFinishQuests = new ccui.Layout();
        this._layoutFinishQuests.setName("_layoutFinishQuests");
        this._layoutProfile.addChild(this._layoutFinishQuests);
        this._layoutFinishQuests.setCascadeOpacityEnabled(true);
        this._layoutFinishQuests.setCascadeColorEnabled(true);
        this._layoutFinishQuests.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutFinishQuests, 0.1038, 0.6103);
        let _layoutFinishQuestsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutFinishQuests);
        this._layoutFinishQuests.setTouchEnabled(true);
        this._layoutFinishQuests.setUnifySizeEnabled(false);
        this._layoutFinishQuests.ignoreContentAdaptWithSize(false);
        this._layoutFinishQuests.setContentSize(cc.size(100, 50));
        this._layoutFinishQuests.setBackGroundColorType(1);
        this._layoutFinishQuests.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtFinishQuests
        this._txtFinishQuests = new ck.Text();
        this._txtFinishQuests.setName("_txtFinishQuests");
        this._layoutFinishQuests.addChild(this._txtFinishQuests);
        this._txtFinishQuests.setCascadeOpacityEnabled(true);
        this._txtFinishQuests.setCascadeColorEnabled(true);
        this._txtFinishQuests.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtFinishQuests, 0.5, 0.5);
        let _txtFinishQuestsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtFinishQuests);
        _txtFinishQuestsLayoutComponent.setPositionPercentXEnabled(true);
        _txtFinishQuestsLayoutComponent.setPositionPercentX(0.5);
        _txtFinishQuestsLayoutComponent.setPositionPercentYEnabled(true);
        _txtFinishQuestsLayoutComponent.setPositionPercentY(0.5);
        this._txtFinishQuests.setTouchEnabled(false);
        this._txtFinishQuests.ignoreContentAdaptWithSize(true);
        this._txtFinishQuests.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtFinishQuests.setDefaultFontSize(22);
        this._txtFinishQuests.setString("Finish Quests");
        this._txtFinishQuests.setTextHorizontalAlignment(1);
        this._txtFinishQuests.setTextVerticalAlignment(1);

        ///// # _layoutBtnNewDay
        this._layoutBtnNewDay = new ccui.Layout();
        this._layoutBtnNewDay.setName("_layoutBtnNewDay");
        this._layoutProfile.addChild(this._layoutBtnNewDay);
        this._layoutBtnNewDay.setCascadeOpacityEnabled(true);
        this._layoutBtnNewDay.setCascadeColorEnabled(true);
        this._layoutBtnNewDay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBtnNewDay, 0.268, 0.6103);
        let _layoutBtnNewDayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBtnNewDay);
        this._layoutBtnNewDay.setTouchEnabled(true);
        this._layoutBtnNewDay.setUnifySizeEnabled(false);
        this._layoutBtnNewDay.ignoreContentAdaptWithSize(false);
        this._layoutBtnNewDay.setContentSize(cc.size(100, 50));
        this._layoutBtnNewDay.setBackGroundColorType(1);
        this._layoutBtnNewDay.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtBtnNewDay
        this._txtBtnNewDay = new ck.Text();
        this._txtBtnNewDay.setName("_txtBtnNewDay");
        this._layoutBtnNewDay.addChild(this._txtBtnNewDay);
        this._txtBtnNewDay.setCascadeOpacityEnabled(true);
        this._txtBtnNewDay.setCascadeColorEnabled(true);
        this._txtBtnNewDay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBtnNewDay, 0.5, 0.5);
        let _txtBtnNewDayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBtnNewDay);
        _txtBtnNewDayLayoutComponent.setPositionPercentXEnabled(true);
        _txtBtnNewDayLayoutComponent.setPositionPercentX(0.5);
        _txtBtnNewDayLayoutComponent.setPositionPercentYEnabled(true);
        _txtBtnNewDayLayoutComponent.setPositionPercentY(0.5);
        this._txtBtnNewDay.setTouchEnabled(false);
        this._txtBtnNewDay.ignoreContentAdaptWithSize(true);
        this._txtBtnNewDay.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBtnNewDay.setDefaultFontSize(22);
        this._txtBtnNewDay.setString("New day");
        this._txtBtnNewDay.setTextHorizontalAlignment(1);
        this._txtBtnNewDay.setTextVerticalAlignment(1);

        ///// # _layoutClearCache
        this._layoutClearCache = new ccui.Layout();
        this._layoutClearCache.setName("_layoutClearCache");
        this._layoutProfile.addChild(this._layoutClearCache);
        this._layoutClearCache.setCascadeOpacityEnabled(true);
        this._layoutClearCache.setCascadeColorEnabled(true);
        this._layoutClearCache.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutClearCache, 0.4298, 0.6103);
        let _layoutClearCacheLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutClearCache);
        this._layoutClearCache.setTouchEnabled(true);
        this._layoutClearCache.setUnifySizeEnabled(false);
        this._layoutClearCache.ignoreContentAdaptWithSize(false);
        this._layoutClearCache.setContentSize(cc.size(100, 50));
        this._layoutClearCache.setBackGroundColorType(1);
        this._layoutClearCache.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtClearCache
        this._txtClearCache = new ck.Text();
        this._txtClearCache.setName("_txtClearCache");
        this._layoutClearCache.addChild(this._txtClearCache);
        this._txtClearCache.setCascadeOpacityEnabled(true);
        this._txtClearCache.setCascadeColorEnabled(true);
        this._txtClearCache.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtClearCache, 0.5, 0.5);
        let _txtClearCacheLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtClearCache);
        _txtClearCacheLayoutComponent.setPositionPercentXEnabled(true);
        _txtClearCacheLayoutComponent.setPositionPercentX(0.5);
        _txtClearCacheLayoutComponent.setPositionPercentYEnabled(true);
        _txtClearCacheLayoutComponent.setPositionPercentY(0.5);
        this._txtClearCache.setTouchEnabled(false);
        this._txtClearCache.ignoreContentAdaptWithSize(true);
        this._txtClearCache.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtClearCache.setDefaultFontSize(22);
        this._txtClearCache.setString("Clear cache");
        this._txtClearCache.setTextHorizontalAlignment(1);
        this._txtClearCache.setTextVerticalAlignment(1);

        ///// # _layoutAddBotRanking
        this._layoutAddBotRanking = new ccui.Layout();
        this._layoutAddBotRanking.setName("_layoutAddBotRanking");
        this._layoutProfile.addChild(this._layoutAddBotRanking);
        this._layoutAddBotRanking.setCascadeOpacityEnabled(true);
        this._layoutAddBotRanking.setCascadeColorEnabled(true);
        this._layoutAddBotRanking.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutAddBotRanking, 0.2667, 0.4667);
        let _layoutAddBotRankingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAddBotRanking);
        this._layoutAddBotRanking.setTouchEnabled(true);
        this._layoutAddBotRanking.setUnifySizeEnabled(false);
        this._layoutAddBotRanking.ignoreContentAdaptWithSize(false);
        this._layoutAddBotRanking.setContentSize(cc.size(100, 50));
        this._layoutAddBotRanking.setBackGroundColorType(1);
        this._layoutAddBotRanking.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtAddBotRanking
        this._txtAddBotRanking = new ck.Text();
        this._txtAddBotRanking.setName("_txtAddBotRanking");
        this._layoutAddBotRanking.addChild(this._txtAddBotRanking);
        this._txtAddBotRanking.setCascadeOpacityEnabled(true);
        this._txtAddBotRanking.setCascadeColorEnabled(true);
        this._txtAddBotRanking.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAddBotRanking, 0.5, 0.5);
        let _txtAddBotRankingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAddBotRanking);
        _txtAddBotRankingLayoutComponent.setPositionPercentXEnabled(true);
        _txtAddBotRankingLayoutComponent.setPositionPercentX(0.5);
        _txtAddBotRankingLayoutComponent.setPositionPercentYEnabled(true);
        _txtAddBotRankingLayoutComponent.setPositionPercentY(0.5);
        this._txtAddBotRanking.setTouchEnabled(false);
        this._txtAddBotRanking.ignoreContentAdaptWithSize(true);
        this._txtAddBotRanking.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAddBotRanking.setDefaultFontSize(18);
        this._txtAddBotRanking.setString("Add Bot Ranking");
        this._txtAddBotRanking.setTextHorizontalAlignment(1);
        this._txtAddBotRanking.setTextVerticalAlignment(1);

        ///// # _layoutEndRanking
        this._layoutEndRanking = new ccui.Layout();
        this._layoutEndRanking.setName("_layoutEndRanking");
        this._layoutProfile.addChild(this._layoutEndRanking);
        this._layoutEndRanking.setCascadeOpacityEnabled(true);
        this._layoutEndRanking.setCascadeColorEnabled(true);
        this._layoutEndRanking.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutEndRanking, 0.1015, 0.4667);
        let _layoutEndRankingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEndRanking);
        this._layoutEndRanking.setTouchEnabled(true);
        this._layoutEndRanking.setUnifySizeEnabled(false);
        this._layoutEndRanking.ignoreContentAdaptWithSize(false);
        this._layoutEndRanking.setContentSize(cc.size(100, 50));
        this._layoutEndRanking.setBackGroundColorType(1);
        this._layoutEndRanking.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtEndRanking
        this._txtEndRanking = new ck.Text();
        this._txtEndRanking.setName("_txtEndRanking");
        this._layoutEndRanking.addChild(this._txtEndRanking);
        this._txtEndRanking.setCascadeOpacityEnabled(true);
        this._txtEndRanking.setCascadeColorEnabled(true);
        this._txtEndRanking.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtEndRanking, 0.5, 0.5);
        let _txtEndRankingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtEndRanking);
        _txtEndRankingLayoutComponent.setPositionPercentXEnabled(true);
        _txtEndRankingLayoutComponent.setPositionPercentX(0.5);
        _txtEndRankingLayoutComponent.setPositionPercentYEnabled(true);
        _txtEndRankingLayoutComponent.setPositionPercentY(0.5);
        this._txtEndRanking.setTouchEnabled(false);
        this._txtEndRanking.ignoreContentAdaptWithSize(true);
        this._txtEndRanking.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtEndRanking.setDefaultFontSize(22);
        this._txtEndRanking.setString("End Ranking");
        this._txtEndRanking.setTextHorizontalAlignment(1);
        this._txtEndRanking.setTextVerticalAlignment(1);

        ///// # _layoutDetach
        this._layoutDetach = new ccui.Layout();
        this._layoutDetach.setName("_layoutDetach");
        this._layoutProfile.addChild(this._layoutDetach);
        this._layoutDetach.setCascadeOpacityEnabled(true);
        this._layoutDetach.setCascadeColorEnabled(true);
        this._layoutDetach.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutDetach, 0.4287, 0.4635);
        let _layoutDetachLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutDetach);
        this._layoutDetach.setTouchEnabled(true);
        this._layoutDetach.setUnifySizeEnabled(false);
        this._layoutDetach.ignoreContentAdaptWithSize(false);
        this._layoutDetach.setContentSize(cc.size(100, 50));
        this._layoutDetach.setBackGroundColorType(1);
        this._layoutDetach.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtDetach
        this._txtDetach = new ck.Text();
        this._txtDetach.setName("_txtDetach");
        this._layoutDetach.addChild(this._txtDetach);
        this._txtDetach.setCascadeOpacityEnabled(true);
        this._txtDetach.setCascadeColorEnabled(true);
        this._txtDetach.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDetach, 0.5, 0.5);
        let _txtDetachLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDetach);
        _txtDetachLayoutComponent.setPositionPercentXEnabled(true);
        _txtDetachLayoutComponent.setPositionPercentX(0.5);
        _txtDetachLayoutComponent.setPositionPercentYEnabled(true);
        _txtDetachLayoutComponent.setPositionPercentY(0.5);
        this._txtDetach.setTouchEnabled(false);
        this._txtDetach.ignoreContentAdaptWithSize(true);
        this._txtDetach.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDetach.setDefaultFontSize(18);
        this._txtDetach.setString("Detach");
        this._txtDetach.setTextHorizontalAlignment(1);
        this._txtDetach.setTextVerticalAlignment(1);

        ///// # _txtIOS
        this._txtIOS = new ck.Text();
        this._txtIOS.setName("_txtIOS");
        this._layoutProfile.addChild(this._txtIOS);
        this._txtIOS.setCascadeOpacityEnabled(true);
        this._txtIOS.setCascadeColorEnabled(true);
        this._txtIOS.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtIOS, 0.5745, 0.622);
        let _txtIOSLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtIOS);
        _txtIOSLayoutComponent.setPositionPercentXEnabled(true);
        _txtIOSLayoutComponent.setPositionPercentX(0.5745);
        this._txtIOS.setTouchEnabled(false);
        this._txtIOS.ignoreContentAdaptWithSize(true);
        this._txtIOS.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtIOS.setDefaultFontSize(25);
        this._txtIOS.setString("IOS:");
        this._txtIOS.setTextHorizontalAlignment(1);
        this._txtIOS.setTextVerticalAlignment(1);
        this._txtIOS.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutForceUseCDN
        this._layoutForceUseCDN = new ccui.Layout();
        this._layoutForceUseCDN.setName("_layoutForceUseCDN");
        this._layoutProfile.addChild(this._layoutForceUseCDN);
        this._layoutForceUseCDN.setCascadeOpacityEnabled(true);
        this._layoutForceUseCDN.setCascadeColorEnabled(true);
        this._layoutForceUseCDN.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutForceUseCDN, 0.7265, 0.6103);
        let _layoutForceUseCDNLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutForceUseCDN);
        this._layoutForceUseCDN.setTouchEnabled(true);
        this._layoutForceUseCDN.setUnifySizeEnabled(false);
        this._layoutForceUseCDN.ignoreContentAdaptWithSize(false);
        this._layoutForceUseCDN.setContentSize(cc.size(100, 50));
        this._layoutForceUseCDN.setBackGroundColorType(1);
        this._layoutForceUseCDN.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtForceUseCDN
        this._txtForceUseCDN = new ck.Text();
        this._txtForceUseCDN.setName("_txtForceUseCDN");
        this._layoutForceUseCDN.addChild(this._txtForceUseCDN);
        this._txtForceUseCDN.setCascadeOpacityEnabled(true);
        this._txtForceUseCDN.setCascadeColorEnabled(true);
        this._txtForceUseCDN.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtForceUseCDN, 0.5, 0.5);
        let _txtForceUseCDNLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtForceUseCDN);
        _txtForceUseCDNLayoutComponent.setPositionPercentXEnabled(true);
        _txtForceUseCDNLayoutComponent.setPositionPercentX(0.5);
        _txtForceUseCDNLayoutComponent.setPositionPercentYEnabled(true);
        _txtForceUseCDNLayoutComponent.setPositionPercentY(0.5);
        this._txtForceUseCDN.setTouchEnabled(false);
        this._txtForceUseCDN.ignoreContentAdaptWithSize(true);
        this._txtForceUseCDN.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtForceUseCDN.setDefaultFontSize(22);
        this._txtForceUseCDN.setString("Force Use CDN");
        this._txtForceUseCDN.setTextHorizontalAlignment(1);
        this._txtForceUseCDN.setTextVerticalAlignment(1);

        ///// # _layoutTransformPortal
        this._layoutTransformPortal = new ccui.Layout();
        this._layoutTransformPortal.setName("_layoutTransformPortal");
        this._layoutProfile.addChild(this._layoutTransformPortal);
        this._layoutTransformPortal.setCascadeOpacityEnabled(true);
        this._layoutTransformPortal.setCascadeColorEnabled(true);
        this._layoutTransformPortal.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTransformPortal, 0.7286, 0.4655);
        let _layoutTransformPortalLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTransformPortal);
        this._layoutTransformPortal.setTouchEnabled(true);
        this._layoutTransformPortal.setUnifySizeEnabled(false);
        this._layoutTransformPortal.ignoreContentAdaptWithSize(false);
        this._layoutTransformPortal.setContentSize(cc.size(100, 50));
        this._layoutTransformPortal.setBackGroundColorType(1);
        this._layoutTransformPortal.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtTransformPortal
        this._txtTransformPortal = new ck.Text();
        this._txtTransformPortal.setName("_txtTransformPortal");
        this._layoutTransformPortal.addChild(this._txtTransformPortal);
        this._txtTransformPortal.setCascadeOpacityEnabled(true);
        this._txtTransformPortal.setCascadeColorEnabled(true);
        this._txtTransformPortal.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTransformPortal, 0.5, 0.5);
        let _txtTransformPortalLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTransformPortal);
        _txtTransformPortalLayoutComponent.setPositionPercentXEnabled(true);
        _txtTransformPortalLayoutComponent.setPositionPercentX(0.5);
        _txtTransformPortalLayoutComponent.setPositionPercentYEnabled(true);
        _txtTransformPortalLayoutComponent.setPositionPercentY(0.5);
        this._txtTransformPortal.setTouchEnabled(false);
        this._txtTransformPortal.ignoreContentAdaptWithSize(true);
        this._txtTransformPortal.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTransformPortal.setDefaultFontSize(18);
        this._txtTransformPortal.setString("Transform Portal");
        this._txtTransformPortal.setTextHorizontalAlignment(1);
        this._txtTransformPortal.setTextVerticalAlignment(1);

        ///// # _layoutNewDay
        this._layoutNewDay = new ccui.Layout();
        this._layoutNewDay.setName("_layoutNewDay");
        this._layoutProfile.addChild(this._layoutNewDay);
        this._layoutNewDay.setCascadeOpacityEnabled(true);
        this._layoutNewDay.setCascadeColorEnabled(true);
        this._layoutNewDay.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutNewDay, 0.5, 0.359);
        let _layoutNewDayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutNewDay);
        _layoutNewDayLayoutComponent.setPositionPercentXEnabled(true);
        _layoutNewDayLayoutComponent.setPositionPercentX(0.5);
        _layoutNewDayLayoutComponent.setPercentWidthEnabled(true);
        _layoutNewDayLayoutComponent.setPercentWidth(1);
        this._layoutNewDay.setTouchEnabled(true);
        this._layoutNewDay.setUnifySizeEnabled(false);
        this._layoutNewDay.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutNewDay, 1);
        this._layoutNewDay.setContentSize(cc.size(this._layoutNewDay.width, 70));

        ///// # _txtNewDayHeader
        this._txtNewDayHeader = new ck.Text();
        this._txtNewDayHeader.setName("_txtNewDayHeader");
        this._layoutNewDay.addChild(this._txtNewDayHeader);
        this._txtNewDayHeader.setCascadeOpacityEnabled(true);
        this._txtNewDayHeader.setCascadeColorEnabled(true);
        this._txtNewDayHeader.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNewDayHeader, 0.023, 0.5);
        let _txtNewDayHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNewDayHeader);
        _txtNewDayHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtNewDayHeaderLayoutComponent.setPositionPercentX(0.023);
        _txtNewDayHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtNewDayHeaderLayoutComponent.setPositionPercentY(0.5);
        this._txtNewDayHeader.setTouchEnabled(false);
        this._txtNewDayHeader.ignoreContentAdaptWithSize(true);
        this._txtNewDayHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtNewDayHeader.setDefaultFontSize(25);
        this._txtNewDayHeader.setString("New day");
        this._txtNewDayHeader.setTextHorizontalAlignment(1);
        this._txtNewDayHeader.setTextVerticalAlignment(1);
        this._txtNewDayHeader.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutBoxNewDay
        this._layoutBoxNewDay = new ccui.Layout();
        this._layoutBoxNewDay.setName("_layoutBoxNewDay");
        this._layoutNewDay.addChild(this._layoutBoxNewDay);
        this._layoutBoxNewDay.setCascadeOpacityEnabled(true);
        this._layoutBoxNewDay.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutBoxNewDay, 0.1503, 0.1429);
        let _layoutBoxNewDayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBoxNewDay);
        _layoutBoxNewDayLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBoxNewDayLayoutComponent.setPositionPercentX(0.1503);
        _layoutBoxNewDayLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBoxNewDayLayoutComponent.setPositionPercentY(0.1429);
        _layoutBoxNewDayLayoutComponent.setPercentWidthEnabled(true);
        _layoutBoxNewDayLayoutComponent.setPercentWidth(0.382);
        this._layoutBoxNewDay.setTouchEnabled(true);
        this._layoutBoxNewDay.setUnifySizeEnabled(false);
        this._layoutBoxNewDay.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutBoxNewDay, 0.382);
        this._layoutBoxNewDay.setContentSize(cc.size(this._layoutBoxNewDay.width, 50));
        this._layoutBoxNewDay.setBackGroundColorType(1);
        this._layoutBoxNewDay.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxNewDay
        this._editBoxNewDay = new cc.EditBox(cc.size(244.48, 50), new cc.Scale9Sprite());
        this._editBoxNewDay.setName("_editBoxNewDay");
        this._layoutBoxNewDay.addChild(this._editBoxNewDay);
        this._editBoxNewDay.setCascadeOpacityEnabled(true);
        this._editBoxNewDay.setCascadeColorEnabled(true);
        this._editBoxNewDay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxNewDay, 0.5, 0.5);
        this._editBoxNewDay.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxNewDayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxNewDay);
        _editBoxNewDayLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxNewDayLayoutComponent.setPositionPercentX(0.5);
        _editBoxNewDayLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxNewDayLayoutComponent.setPositionPercentY(0.5);
        _editBoxNewDayLayoutComponent.setPercentWidthEnabled(true);
        _editBoxNewDayLayoutComponent.setPercentWidth(1);
        _editBoxNewDayLayoutComponent.setPercentHeightEnabled(true);
        _editBoxNewDayLayoutComponent.setPercentHeight(1);
        this._editBoxNewDay.setUnifySizeEnabled(false);
        this._editBoxNewDay.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxNewDay, 1, 1);
        this._editBoxNewDay.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxNewDay.setFontSize(22);
        this._editBoxNewDay.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxNewDay.setPlaceholderFontSize(22);
        this._editBoxNewDay.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxNewDay.setPlaceHolder("Ex. 1 -> 1 day");
        this._editBoxNewDay.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxNewDay.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutAddNewDay
        this._layoutAddNewDay = new ccui.Layout();
        this._layoutAddNewDay.setName("_layoutAddNewDay");
        this._layoutNewDay.addChild(this._layoutAddNewDay);
        this._layoutAddNewDay.setCascadeOpacityEnabled(true);
        this._layoutAddNewDay.setCascadeColorEnabled(true);
        this._layoutAddNewDay.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutAddNewDay, 0.749, 0.5);
        let _layoutAddNewDayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAddNewDay);
        _layoutAddNewDayLayoutComponent.setPositionPercentXEnabled(true);
        _layoutAddNewDayLayoutComponent.setPositionPercentX(0.749);
        _layoutAddNewDayLayoutComponent.setPositionPercentYEnabled(true);
        _layoutAddNewDayLayoutComponent.setPositionPercentY(0.5);
        this._layoutAddNewDay.setTouchEnabled(true);
        this._layoutAddNewDay.setUnifySizeEnabled(false);
        this._layoutAddNewDay.ignoreContentAdaptWithSize(false);
        this._layoutAddNewDay.setContentSize(cc.size(100, 50));
        this._layoutAddNewDay.setBackGroundColorType(1);
        this._layoutAddNewDay.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtAddNewDay
        this._txtAddNewDay = new ck.Text();
        this._txtAddNewDay.setName("_txtAddNewDay");
        this._layoutAddNewDay.addChild(this._txtAddNewDay);
        this._txtAddNewDay.setCascadeOpacityEnabled(true);
        this._txtAddNewDay.setCascadeColorEnabled(true);
        this._txtAddNewDay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAddNewDay, 0.5, 0.5);
        let _txtAddNewDayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAddNewDay);
        this._txtAddNewDay.setTouchEnabled(false);
        this._txtAddNewDay.ignoreContentAdaptWithSize(true);
        this._txtAddNewDay.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAddNewDay.setDefaultFontSize(22);
        this._txtAddNewDay.setString("Add");
        this._txtAddNewDay.setTextHorizontalAlignment(1);
        this._txtAddNewDay.setTextVerticalAlignment(1);

        ///// # _layoutTimeOver
        this._layoutTimeOver = new ccui.Layout();
        this._layoutTimeOver.setName("_layoutTimeOver");
        this._layoutProfile.addChild(this._layoutTimeOver);
        this._layoutTimeOver.setCascadeOpacityEnabled(true);
        this._layoutTimeOver.setCascadeColorEnabled(true);
        this._layoutTimeOver.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutTimeOver, 0.5, 0.1538);
        let _layoutTimeOverLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTimeOver);
        _layoutTimeOverLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTimeOverLayoutComponent.setPositionPercentX(0.5);
        _layoutTimeOverLayoutComponent.setPercentWidthEnabled(true);
        _layoutTimeOverLayoutComponent.setPercentWidth(1);
        this._layoutTimeOver.setTouchEnabled(true);
        this._layoutTimeOver.setUnifySizeEnabled(false);
        this._layoutTimeOver.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutTimeOver, 1);
        this._layoutTimeOver.setContentSize(cc.size(this._layoutTimeOver.width, 70));

        ///// # _txtTimeOverHeader
        this._txtTimeOverHeader = new ck.Text();
        this._txtTimeOverHeader.setName("_txtTimeOverHeader");
        this._layoutTimeOver.addChild(this._txtTimeOverHeader);
        this._txtTimeOverHeader.setCascadeOpacityEnabled(true);
        this._txtTimeOverHeader.setCascadeColorEnabled(true);
        this._txtTimeOverHeader.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTimeOverHeader, 0.023, 0.5);
        let _txtTimeOverHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTimeOverHeader);
        _txtTimeOverHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeOverHeaderLayoutComponent.setPositionPercentX(0.023);
        _txtTimeOverHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeOverHeaderLayoutComponent.setPositionPercentY(0.5);
        this._txtTimeOverHeader.setTouchEnabled(false);
        this._txtTimeOverHeader.ignoreContentAdaptWithSize(true);
        this._txtTimeOverHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTimeOverHeader.setDefaultFontSize(25);
        this._txtTimeOverHeader.setString("Time over");
        this._txtTimeOverHeader.setTextHorizontalAlignment(1);
        this._txtTimeOverHeader.setTextVerticalAlignment(1);
        this._txtTimeOverHeader.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutBoxTimeOver
        this._layoutBoxTimeOver = new ccui.Layout();
        this._layoutBoxTimeOver.setName("_layoutBoxTimeOver");
        this._layoutTimeOver.addChild(this._layoutBoxTimeOver);
        this._layoutBoxTimeOver.setCascadeOpacityEnabled(true);
        this._layoutBoxTimeOver.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutBoxTimeOver, 0.1503, 0.1429);
        let _layoutBoxTimeOverLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBoxTimeOver);
        _layoutBoxTimeOverLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBoxTimeOverLayoutComponent.setPositionPercentX(0.1503);
        _layoutBoxTimeOverLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBoxTimeOverLayoutComponent.setPositionPercentY(0.1429);
        _layoutBoxTimeOverLayoutComponent.setPercentWidthEnabled(true);
        _layoutBoxTimeOverLayoutComponent.setPercentWidth(0.382);
        this._layoutBoxTimeOver.setTouchEnabled(true);
        this._layoutBoxTimeOver.setUnifySizeEnabled(false);
        this._layoutBoxTimeOver.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutBoxTimeOver, 0.382);
        this._layoutBoxTimeOver.setContentSize(cc.size(this._layoutBoxTimeOver.width, 50));
        this._layoutBoxTimeOver.setBackGroundColorType(1);
        this._layoutBoxTimeOver.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxTimeOver
        this._editBoxTimeOver = new cc.EditBox(cc.size(244.48, 50), new cc.Scale9Sprite());
        this._editBoxTimeOver.setName("_editBoxTimeOver");
        this._layoutBoxTimeOver.addChild(this._editBoxTimeOver);
        this._editBoxTimeOver.setCascadeOpacityEnabled(true);
        this._editBoxTimeOver.setCascadeColorEnabled(true);
        this._editBoxTimeOver.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxTimeOver, 0.5, 0.5);
        this._editBoxTimeOver.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxTimeOverLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxTimeOver);
        _editBoxTimeOverLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxTimeOverLayoutComponent.setPositionPercentX(0.5);
        _editBoxTimeOverLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxTimeOverLayoutComponent.setPositionPercentY(0.5);
        _editBoxTimeOverLayoutComponent.setPercentWidthEnabled(true);
        _editBoxTimeOverLayoutComponent.setPercentWidth(1);
        _editBoxTimeOverLayoutComponent.setPercentHeightEnabled(true);
        _editBoxTimeOverLayoutComponent.setPercentHeight(1);
        this._editBoxTimeOver.setUnifySizeEnabled(false);
        this._editBoxTimeOver.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxTimeOver, 1, 1);
        this._editBoxTimeOver.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxTimeOver.setFontSize(22);
        this._editBoxTimeOver.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxTimeOver.setPlaceholderFontSize(22);
        this._editBoxTimeOver.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxTimeOver.setPlaceHolder("Ex. 60 -> 60 seconds");
        this._editBoxTimeOver.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxTimeOver.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutAddTimeOver
        this._layoutAddTimeOver = new ccui.Layout();
        this._layoutAddTimeOver.setName("_layoutAddTimeOver");
        this._layoutTimeOver.addChild(this._layoutAddTimeOver);
        this._layoutAddTimeOver.setCascadeOpacityEnabled(true);
        this._layoutAddTimeOver.setCascadeColorEnabled(true);
        this._layoutAddTimeOver.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutAddTimeOver, 0.749, 0.5);
        let _layoutAddTimeOverLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAddTimeOver);
        _layoutAddTimeOverLayoutComponent.setPositionPercentXEnabled(true);
        _layoutAddTimeOverLayoutComponent.setPositionPercentX(0.749);
        _layoutAddTimeOverLayoutComponent.setPositionPercentYEnabled(true);
        _layoutAddTimeOverLayoutComponent.setPositionPercentY(0.5);
        this._layoutAddTimeOver.setTouchEnabled(true);
        this._layoutAddTimeOver.setUnifySizeEnabled(false);
        this._layoutAddTimeOver.ignoreContentAdaptWithSize(false);
        this._layoutAddTimeOver.setContentSize(cc.size(100, 50));
        this._layoutAddTimeOver.setBackGroundColorType(1);
        this._layoutAddTimeOver.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtAddTimeOver
        this._txtAddTimeOver = new ck.Text();
        this._txtAddTimeOver.setName("_txtAddTimeOver");
        this._layoutAddTimeOver.addChild(this._txtAddTimeOver);
        this._txtAddTimeOver.setCascadeOpacityEnabled(true);
        this._txtAddTimeOver.setCascadeColorEnabled(true);
        this._txtAddTimeOver.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAddTimeOver, 0.5, 0.5);
        let _txtAddTimeOverLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAddTimeOver);
        this._txtAddTimeOver.setTouchEnabled(false);
        this._txtAddTimeOver.ignoreContentAdaptWithSize(true);
        this._txtAddTimeOver.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAddTimeOver.setDefaultFontSize(22);
        this._txtAddTimeOver.setString("Add");
        this._txtAddTimeOver.setTextHorizontalAlignment(1);
        this._txtAddTimeOver.setTextVerticalAlignment(1);

        ///// # _layoutPaymentHeader
        this._layoutPaymentHeader = new ccui.Layout();
        this._layoutPaymentHeader.setName("_layoutPaymentHeader");
        this._listView.pushBackCustomItem(this._layoutPaymentHeader);
        this._layoutPaymentHeader.setCascadeOpacityEnabled(true);
        this._layoutPaymentHeader.setCascadeColorEnabled(true);
        this._layoutPaymentHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutPaymentHeader, 0.5, 0.8342);
        let _layoutPaymentHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPaymentHeader);
        this._layoutPaymentHeader.setTouchEnabled(true);
        this._layoutPaymentHeader.setUnifySizeEnabled(false);
        this._layoutPaymentHeader.ignoreContentAdaptWithSize(false);
        this._layoutPaymentHeader.setContentSize(cc.size(640, 40));

        ///// # _txtHeaderPayment
        this._txtHeaderPayment = new ck.Text();
        this._txtHeaderPayment.setName("_txtHeaderPayment");
        this._layoutPaymentHeader.addChild(this._txtHeaderPayment);
        this._txtHeaderPayment.setCascadeOpacityEnabled(true);
        this._txtHeaderPayment.setCascadeColorEnabled(true);
        this._txtHeaderPayment.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHeaderPayment, 0.07, 0.5);
        let _txtHeaderPaymentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHeaderPayment);
        _txtHeaderPaymentLayoutComponent.setPositionPercentXEnabled(true);
        _txtHeaderPaymentLayoutComponent.setPositionPercentX(0.07);
        _txtHeaderPaymentLayoutComponent.setPositionPercentYEnabled(true);
        _txtHeaderPaymentLayoutComponent.setPositionPercentY(0.5);
        this._txtHeaderPayment.setTouchEnabled(false);
        this._txtHeaderPayment.ignoreContentAdaptWithSize(true);
        this._txtHeaderPayment.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHeaderPayment.setDefaultFontSize(25);
        this._txtHeaderPayment.setString("Payment");
        this._txtHeaderPayment.setTextHorizontalAlignment(1);
        this._txtHeaderPayment.setTextVerticalAlignment(1);
        this._txtHeaderPayment.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _lineBot
        this._lineBot = new ccui.Layout();
        this._lineBot.setName("_lineBot");
        this._layoutPaymentHeader.addChild(this._lineBot);
        this._lineBot.setCascadeOpacityEnabled(true);
        this._lineBot.setCascadeColorEnabled(true);
        this._lineBot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineBot, 0.5, 0);
        let _lineBotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineBot);
        _lineBotLayoutComponent.setPositionPercentXEnabled(true);
        _lineBotLayoutComponent.setPositionPercentX(0.5);
        _lineBotLayoutComponent.setPositionPercentYEnabled(true);
        _lineBotLayoutComponent.setPositionPercentY(0);
        _lineBotLayoutComponent.setPercentWidthEnabled(true);
        _lineBotLayoutComponent.setPercentWidth(0.97);
        this._lineBot.setTouchEnabled(false);
        this._lineBot.setUnifySizeEnabled(false);
        this._lineBot.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineBot, 0.97);
        this._lineBot.setContentSize(cc.size(this._lineBot.width, 3));
        this._lineBot.setBackGroundColorType(1);
        this._lineBot.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _lineTop
        this._lineTop = new ccui.Layout();
        this._lineTop.setName("_lineTop");
        this._layoutPaymentHeader.addChild(this._lineTop);
        this._lineTop.setCascadeOpacityEnabled(true);
        this._lineTop.setCascadeColorEnabled(true);
        this._lineTop.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineTop, 0.5, 1);
        let _lineTopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineTop);
        _lineTopLayoutComponent.setPositionPercentXEnabled(true);
        _lineTopLayoutComponent.setPositionPercentX(0.5);
        _lineTopLayoutComponent.setPercentWidthEnabled(true);
        _lineTopLayoutComponent.setPercentWidth(0.97);
        this._lineTop.setTouchEnabled(false);
        this._lineTop.setUnifySizeEnabled(false);
        this._lineTop.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineTop, 0.97);
        this._lineTop.setContentSize(cc.size(this._lineTop.width, 3));
        this._lineTop.setBackGroundColorType(1);
        this._lineTop.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _imgExpandPayment
        this._imgExpandPayment = new ccui.ImageView();
        this._imgExpandPayment.setName("_imgExpandPayment");
        this._layoutPaymentHeader.addChild(this._imgExpandPayment);
        this._imgExpandPayment.setCascadeOpacityEnabled(true);
        this._imgExpandPayment.setCascadeColorEnabled(true);
        this._imgExpandPayment.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgExpandPayment, 0.04, 0.5);
        this._imgExpandPayment.setScale(0.5, 0.5);
        this._imgExpandPayment.setRotation(90);
        let _imgExpandPaymentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExpandPayment);
        _imgExpandPaymentLayoutComponent.setPositionPercentXEnabled(true);
        _imgExpandPaymentLayoutComponent.setPositionPercentX(0.04);
        _imgExpandPaymentLayoutComponent.setPositionPercentYEnabled(true);
        _imgExpandPaymentLayoutComponent.setPositionPercentY(0.5);
        this._imgExpandPayment.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgExpandPayment.setUnifySizeEnabled(false);
        this._imgExpandPayment.ignoreContentAdaptWithSize(false);
        this._imgExpandPayment.setContentSize(cc.size(32, 32));
        this._imgExpandPayment.setTouchEnabled(false);

        ///// # _imgCollapsePayment
        this._imgCollapsePayment = new ccui.ImageView();
        this._imgCollapsePayment.setName("_imgCollapsePayment");
        this._layoutPaymentHeader.addChild(this._imgCollapsePayment);
        this._imgCollapsePayment.setCascadeOpacityEnabled(true);
        this._imgCollapsePayment.setCascadeColorEnabled(true);
        this._imgCollapsePayment.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCollapsePayment, 0.0313, 0.5);
        this._imgCollapsePayment.setScale(0.5, 0.5);
        this._imgCollapsePayment.setRotation(180);
        let _imgCollapsePaymentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCollapsePayment);
        this._imgCollapsePayment.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgCollapsePayment.setUnifySizeEnabled(false);
        this._imgCollapsePayment.ignoreContentAdaptWithSize(false);
        this._imgCollapsePayment.setContentSize(cc.size(32, 32));
        this._imgCollapsePayment.setTouchEnabled(false);

        ///// # _layoutPayment
        this._layoutPayment = new ccui.Layout();
        this._layoutPayment.setName("_layoutPayment");
        this._listView.pushBackCustomItem(this._layoutPayment);
        this._layoutPayment.setCascadeOpacityEnabled(true);
        this._layoutPayment.setCascadeColorEnabled(true);
        this._layoutPayment.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutPayment, 0.5, 0.8167);
        let _layoutPaymentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPayment);
        this._layoutPayment.setTouchEnabled(false);
        this._layoutPayment.setUnifySizeEnabled(false);
        this._layoutPayment.ignoreContentAdaptWithSize(false);
        this._layoutPayment.setContentSize(cc.size(640, 73));

        ///// # _layoutCheatPayment
        this._layoutCheatPayment = new ccui.Layout();
        this._layoutCheatPayment.setName("_layoutCheatPayment");
        this._layoutPayment.addChild(this._layoutCheatPayment);
        this._layoutCheatPayment.setCascadeOpacityEnabled(true);
        this._layoutCheatPayment.setCascadeColorEnabled(true);
        this._layoutCheatPayment.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCheatPayment, 0.0949, 0.5);
        let _layoutCheatPaymentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCheatPayment);
        _layoutCheatPaymentLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCheatPaymentLayoutComponent.setPositionPercentX(0.0949);
        _layoutCheatPaymentLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCheatPaymentLayoutComponent.setPositionPercentY(0.5);
        this._layoutCheatPayment.setTouchEnabled(true);
        this._layoutCheatPayment.setUnifySizeEnabled(false);
        this._layoutCheatPayment.ignoreContentAdaptWithSize(false);
        this._layoutCheatPayment.setContentSize(cc.size(71.5459, 50));
        this._layoutCheatPayment.setBackGroundColorType(1);
        this._layoutCheatPayment.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtCheatPayment
        this._txtCheatPayment = new ck.Text();
        this._txtCheatPayment.setName("_txtCheatPayment");
        this._layoutCheatPayment.addChild(this._txtCheatPayment);
        this._txtCheatPayment.setCascadeOpacityEnabled(true);
        this._txtCheatPayment.setCascadeColorEnabled(true);
        this._txtCheatPayment.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCheatPayment, 0.5, 0.5);
        let _txtCheatPaymentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCheatPayment);
        _txtCheatPaymentLayoutComponent.setPositionPercentXEnabled(true);
        _txtCheatPaymentLayoutComponent.setPositionPercentX(0.5);
        _txtCheatPaymentLayoutComponent.setPositionPercentYEnabled(true);
        _txtCheatPaymentLayoutComponent.setPositionPercentY(0.5);
        this._txtCheatPayment.setTouchEnabled(false);
        this._txtCheatPayment.ignoreContentAdaptWithSize(true);
        this._txtCheatPayment.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCheatPayment.setDefaultFontSize(22);
        this._txtCheatPayment.setString("Turn ON");
        this._txtCheatPayment.setTextHorizontalAlignment(1);
        this._txtCheatPayment.setTextVerticalAlignment(1);

        ///// # _layoutResetOffer
        this._layoutResetOffer = new ccui.Layout();
        this._layoutResetOffer.setName("_layoutResetOffer");
        this._layoutPayment.addChild(this._layoutResetOffer);
        this._layoutResetOffer.setCascadeOpacityEnabled(true);
        this._layoutResetOffer.setCascadeColorEnabled(true);
        this._layoutResetOffer.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutResetOffer, 0.2145, 0.5);
        let _layoutResetOfferLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutResetOffer);
        _layoutResetOfferLayoutComponent.setPositionPercentYEnabled(true);
        _layoutResetOfferLayoutComponent.setPositionPercentY(0.5);
        this._layoutResetOffer.setTouchEnabled(true);
        this._layoutResetOffer.setUnifySizeEnabled(false);
        this._layoutResetOffer.ignoreContentAdaptWithSize(false);
        this._layoutResetOffer.setContentSize(cc.size(95.1614, 50));
        this._layoutResetOffer.setBackGroundColorType(1);
        this._layoutResetOffer.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtResetOffer
        this._txtResetOffer = new ck.Text();
        this._txtResetOffer.setName("_txtResetOffer");
        this._layoutResetOffer.addChild(this._txtResetOffer);
        this._txtResetOffer.setCascadeOpacityEnabled(true);
        this._txtResetOffer.setCascadeColorEnabled(true);
        this._txtResetOffer.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtResetOffer, 0.5, 0.5);
        let _txtResetOfferLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtResetOffer);
        _txtResetOfferLayoutComponent.setPositionPercentXEnabled(true);
        _txtResetOfferLayoutComponent.setPositionPercentX(0.5);
        _txtResetOfferLayoutComponent.setPositionPercentYEnabled(true);
        _txtResetOfferLayoutComponent.setPositionPercentY(0.5);
        this._txtResetOffer.setTouchEnabled(false);
        this._txtResetOffer.ignoreContentAdaptWithSize(true);
        this._txtResetOffer.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtResetOffer.setDefaultFontSize(22);
        this._txtResetOffer.setString("Reset Offer");
        this._txtResetOffer.setTextHorizontalAlignment(1);
        this._txtResetOffer.setTextVerticalAlignment(1);

        ///// # _layoutIAPProductKey
        this._layoutIAPProductKey = new ccui.Layout();
        this._layoutIAPProductKey.setName("_layoutIAPProductKey");
        this._layoutPayment.addChild(this._layoutIAPProductKey);
        this._layoutIAPProductKey.setCascadeOpacityEnabled(true);
        this._layoutIAPProductKey.setCascadeColorEnabled(true);
        this._layoutIAPProductKey.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutIAPProductKey, 0.8824, 0.483);
        let _layoutIAPProductKeyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutIAPProductKey);
        _layoutIAPProductKeyLayoutComponent.setPositionPercentXEnabled(true);
        _layoutIAPProductKeyLayoutComponent.setPositionPercentX(0.8824);
        _layoutIAPProductKeyLayoutComponent.setPositionPercentYEnabled(true);
        _layoutIAPProductKeyLayoutComponent.setPositionPercentY(0.483);
        this._layoutIAPProductKey.setTouchEnabled(true);
        this._layoutIAPProductKey.setUnifySizeEnabled(false);
        this._layoutIAPProductKey.ignoreContentAdaptWithSize(false);
        this._layoutIAPProductKey.setContentSize(cc.size(66.7756, 50));
        this._layoutIAPProductKey.setBackGroundColorType(1);
        this._layoutIAPProductKey.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxIAPProductKey
        this._editBoxIAPProductKey = new cc.EditBox(cc.size(66.7756, 50), new cc.Scale9Sprite());
        this._editBoxIAPProductKey.setName("_editBoxIAPProductKey");
        this._layoutIAPProductKey.addChild(this._editBoxIAPProductKey);
        this._editBoxIAPProductKey.setCascadeOpacityEnabled(true);
        this._editBoxIAPProductKey.setCascadeColorEnabled(true);
        this._editBoxIAPProductKey.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxIAPProductKey, 0.5, 0.5);
        this._editBoxIAPProductKey.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxIAPProductKeyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxIAPProductKey);
        _editBoxIAPProductKeyLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxIAPProductKeyLayoutComponent.setPositionPercentX(0.5);
        _editBoxIAPProductKeyLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxIAPProductKeyLayoutComponent.setPositionPercentY(0.5);
        _editBoxIAPProductKeyLayoutComponent.setPercentWidthEnabled(true);
        _editBoxIAPProductKeyLayoutComponent.setPercentWidth(1);
        _editBoxIAPProductKeyLayoutComponent.setPercentHeightEnabled(true);
        _editBoxIAPProductKeyLayoutComponent.setPercentHeight(1);
        this._editBoxIAPProductKey.setUnifySizeEnabled(false);
        this._editBoxIAPProductKey.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxIAPProductKey, 1, 1);
        this._editBoxIAPProductKey.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxIAPProductKey.setFontSize(22);
        this._editBoxIAPProductKey.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxIAPProductKey.setPlaceholderFontSize(22);
        this._editBoxIAPProductKey.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxIAPProductKey.setPlaceHolder("Ex. 1A");
        this._editBoxIAPProductKey.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxIAPProductKey.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutBuyIAP
        this._layoutBuyIAP = new ccui.Layout();
        this._layoutBuyIAP.setName("_layoutBuyIAP");
        this._layoutPayment.addChild(this._layoutBuyIAP);
        this._layoutBuyIAP.setCascadeOpacityEnabled(true);
        this._layoutBuyIAP.setCascadeColorEnabled(true);
        this._layoutBuyIAP.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBuyIAP, 0.6884, 0.4811);
        let _layoutBuyIAPLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBuyIAP);
        this._layoutBuyIAP.setTouchEnabled(true);
        this._layoutBuyIAP.setUnifySizeEnabled(false);
        this._layoutBuyIAP.ignoreContentAdaptWithSize(false);
        this._layoutBuyIAP.setContentSize(cc.size(95.1614, 50));
        this._layoutBuyIAP.setBackGroundColorType(1);
        this._layoutBuyIAP.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtBuyIAP
        this._txtBuyIAP = new ck.Text();
        this._txtBuyIAP.setName("_txtBuyIAP");
        this._layoutBuyIAP.addChild(this._txtBuyIAP);
        this._txtBuyIAP.setCascadeOpacityEnabled(true);
        this._txtBuyIAP.setCascadeColorEnabled(true);
        this._txtBuyIAP.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBuyIAP, 0.5, 0.5);
        let _txtBuyIAPLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBuyIAP);
        _txtBuyIAPLayoutComponent.setPositionPercentXEnabled(true);
        _txtBuyIAPLayoutComponent.setPositionPercentX(0.5);
        _txtBuyIAPLayoutComponent.setPositionPercentYEnabled(true);
        _txtBuyIAPLayoutComponent.setPositionPercentY(0.5);
        this._txtBuyIAP.setTouchEnabled(false);
        this._txtBuyIAP.ignoreContentAdaptWithSize(true);
        this._txtBuyIAP.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBuyIAP.setDefaultFontSize(22);
        this._txtBuyIAP.setString("Buy IAP");
        this._txtBuyIAP.setTextHorizontalAlignment(1);
        this._txtBuyIAP.setTextVerticalAlignment(1);

        ///// # _layoutServerHeader
        this._layoutServerHeader = new ccui.Layout();
        this._layoutServerHeader.setName("_layoutServerHeader");
        this._listView.pushBackCustomItem(this._layoutServerHeader);
        this._layoutServerHeader.setCascadeOpacityEnabled(true);
        this._layoutServerHeader.setCascadeColorEnabled(true);
        this._layoutServerHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutServerHeader, 0.5, 0.7991);
        let _layoutServerHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutServerHeader);
        this._layoutServerHeader.setTouchEnabled(true);
        this._layoutServerHeader.setUnifySizeEnabled(false);
        this._layoutServerHeader.ignoreContentAdaptWithSize(false);
        this._layoutServerHeader.setContentSize(cc.size(640, 40));

        ///// # _txtServerHeader
        this._txtServerHeader = new ck.Text();
        this._txtServerHeader.setName("_txtServerHeader");
        this._layoutServerHeader.addChild(this._txtServerHeader);
        this._txtServerHeader.setCascadeOpacityEnabled(true);
        this._txtServerHeader.setCascadeColorEnabled(true);
        this._txtServerHeader.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtServerHeader, 0.07, 0.5);
        let _txtServerHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtServerHeader);
        _txtServerHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtServerHeaderLayoutComponent.setPositionPercentX(0.07);
        _txtServerHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtServerHeaderLayoutComponent.setPositionPercentY(0.5);
        this._txtServerHeader.setTouchEnabled(false);
        this._txtServerHeader.ignoreContentAdaptWithSize(true);
        this._txtServerHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtServerHeader.setDefaultFontSize(25);
        this._txtServerHeader.setString("Server");
        this._txtServerHeader.setTextHorizontalAlignment(1);
        this._txtServerHeader.setTextVerticalAlignment(1);
        this._txtServerHeader.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _lineBot
        this._lineBot = new ccui.Layout();
        this._lineBot.setName("_lineBot");
        this._layoutServerHeader.addChild(this._lineBot);
        this._lineBot.setCascadeOpacityEnabled(true);
        this._lineBot.setCascadeColorEnabled(true);
        this._lineBot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineBot, 0.5, 0);
        let _lineBotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineBot);
        _lineBotLayoutComponent.setPositionPercentXEnabled(true);
        _lineBotLayoutComponent.setPositionPercentX(0.5);
        _lineBotLayoutComponent.setPositionPercentYEnabled(true);
        _lineBotLayoutComponent.setPositionPercentY(0);
        _lineBotLayoutComponent.setPercentWidthEnabled(true);
        _lineBotLayoutComponent.setPercentWidth(0.97);
        this._lineBot.setTouchEnabled(false);
        this._lineBot.setUnifySizeEnabled(false);
        this._lineBot.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineBot, 0.97);
        this._lineBot.setContentSize(cc.size(this._lineBot.width, 3));
        this._lineBot.setBackGroundColorType(1);
        this._lineBot.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _lineTop
        this._lineTop = new ccui.Layout();
        this._lineTop.setName("_lineTop");
        this._layoutServerHeader.addChild(this._lineTop);
        this._lineTop.setCascadeOpacityEnabled(true);
        this._lineTop.setCascadeColorEnabled(true);
        this._lineTop.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineTop, 0.5, 1);
        let _lineTopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineTop);
        _lineTopLayoutComponent.setPositionPercentXEnabled(true);
        _lineTopLayoutComponent.setPositionPercentX(0.5);
        _lineTopLayoutComponent.setPositionPercentYEnabled(true);
        _lineTopLayoutComponent.setPositionPercentY(1);
        _lineTopLayoutComponent.setPercentWidthEnabled(true);
        _lineTopLayoutComponent.setPercentWidth(0.97);
        this._lineTop.setTouchEnabled(false);
        this._lineTop.setUnifySizeEnabled(false);
        this._lineTop.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineTop, 0.97);
        this._lineTop.setContentSize(cc.size(this._lineTop.width, 3));
        this._lineTop.setBackGroundColorType(1);
        this._lineTop.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _imgExpandServer
        this._imgExpandServer = new ccui.ImageView();
        this._imgExpandServer.setName("_imgExpandServer");
        this._layoutServerHeader.addChild(this._imgExpandServer);
        this._imgExpandServer.setCascadeOpacityEnabled(true);
        this._imgExpandServer.setCascadeColorEnabled(true);
        this._imgExpandServer.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgExpandServer, 0.04, 0.5);
        this._imgExpandServer.setScale(0.5, 0.5);
        this._imgExpandServer.setRotation(-90);
        this._imgExpandServer.setFlippedY(true);
        let _imgExpandServerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExpandServer);
        _imgExpandServerLayoutComponent.setPositionPercentXEnabled(true);
        _imgExpandServerLayoutComponent.setPositionPercentX(0.04);
        _imgExpandServerLayoutComponent.setPositionPercentYEnabled(true);
        _imgExpandServerLayoutComponent.setPositionPercentY(0.5);
        this._imgExpandServer.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgExpandServer.setUnifySizeEnabled(false);
        this._imgExpandServer.ignoreContentAdaptWithSize(false);
        this._imgExpandServer.setContentSize(cc.size(32, 32));
        this._imgExpandServer.setTouchEnabled(false);
        this._imgExpandServer.setFlippedY(true);

        ///// # _imgCollapseServer
        this._imgCollapseServer = new ccui.ImageView();
        this._imgCollapseServer.setName("_imgCollapseServer");
        this._layoutServerHeader.addChild(this._imgCollapseServer);
        this._imgCollapseServer.setCascadeOpacityEnabled(true);
        this._imgCollapseServer.setCascadeColorEnabled(true);
        this._imgCollapseServer.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCollapseServer, 0.0313, 0.5);
        this._imgCollapseServer.setScale(0.5, 0.5);
        this._imgCollapseServer.setRotation(180);
        let _imgCollapseServerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCollapseServer);
        this._imgCollapseServer.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgCollapseServer.setUnifySizeEnabled(false);
        this._imgCollapseServer.ignoreContentAdaptWithSize(false);
        this._imgCollapseServer.setContentSize(cc.size(32, 32));
        this._imgCollapseServer.setTouchEnabled(false);

        ///// # _layoutServer
        this._layoutServer = new ccui.Layout();
        this._layoutServer.setName("_layoutServer");
        this._listView.pushBackCustomItem(this._layoutServer);
        this._layoutServer.setCascadeOpacityEnabled(true);
        this._layoutServer.setCascadeColorEnabled(true);
        this._layoutServer.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutServer, 0.5, 0.7719);
        let _layoutServerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutServer);
        this._layoutServer.setTouchEnabled(false);
        this._layoutServer.setUnifySizeEnabled(false);
        this._layoutServer.ignoreContentAdaptWithSize(false);
        this._layoutServer.setContentSize(cc.size(640, 140));

        ///// # _layoutAddress
        this._layoutAddress = new ccui.Layout();
        this._layoutAddress.setName("_layoutAddress");
        this._layoutServer.addChild(this._layoutAddress);
        this._layoutAddress.setCascadeOpacityEnabled(true);
        this._layoutAddress.setCascadeColorEnabled(true);
        this._layoutAddress.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutAddress, 0.0234, 0.7083);
        let _layoutAddressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAddress);
        _layoutAddressLayoutComponent.setPositionPercentYEnabled(true);
        _layoutAddressLayoutComponent.setPositionPercentY(0.7083);
        this._layoutAddress.setTouchEnabled(true);
        this._layoutAddress.setUnifySizeEnabled(false);
        this._layoutAddress.ignoreContentAdaptWithSize(false);
        this._layoutAddress.setContentSize(cc.size(361.1021, 50));
        this._layoutAddress.setBackGroundColorType(1);
        this._layoutAddress.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxAddress
        this._editBoxAddress = new cc.EditBox(cc.size(361.1021, 50), new cc.Scale9Sprite());
        this._editBoxAddress.setName("_editBoxAddress");
        this._layoutAddress.addChild(this._editBoxAddress);
        this._editBoxAddress.setCascadeOpacityEnabled(true);
        this._editBoxAddress.setCascadeColorEnabled(true);
        this._editBoxAddress.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxAddress, 0.5, 0.5);
        this._editBoxAddress.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxAddressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxAddress);
        _editBoxAddressLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxAddressLayoutComponent.setPositionPercentX(0.5);
        _editBoxAddressLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxAddressLayoutComponent.setPositionPercentY(0.5);
        _editBoxAddressLayoutComponent.setPercentWidthEnabled(true);
        _editBoxAddressLayoutComponent.setPercentWidth(1);
        _editBoxAddressLayoutComponent.setPercentHeightEnabled(true);
        _editBoxAddressLayoutComponent.setPercentHeight(1);
        this._editBoxAddress.setUnifySizeEnabled(false);
        this._editBoxAddress.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxAddress, 1, 1);
        this._editBoxAddress.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxAddress.setFontSize(22);
        this._editBoxAddress.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxAddress.setPlaceholderFontSize(22);
        this._editBoxAddress.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxAddress.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxAddress.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutConnect
        this._layoutConnect = new ccui.Layout();
        this._layoutConnect.setName("_layoutConnect");
        this._layoutServer.addChild(this._layoutConnect);
        this._layoutConnect.setCascadeOpacityEnabled(true);
        this._layoutConnect.setCascadeColorEnabled(true);
        this._layoutConnect.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutConnect, 0.7578, 0.726);
        let _layoutConnectLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutConnect);
        _layoutConnectLayoutComponent.setPositionPercentYEnabled(true);
        _layoutConnectLayoutComponent.setPositionPercentY(0.726);
        this._layoutConnect.setTouchEnabled(true);
        this._layoutConnect.setUnifySizeEnabled(false);
        this._layoutConnect.ignoreContentAdaptWithSize(false);
        this._layoutConnect.setContentSize(cc.size(100, 50));
        this._layoutConnect.setBackGroundColorType(1);
        this._layoutConnect.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtConnect
        this._txtConnect = new ck.Text();
        this._txtConnect.setName("_txtConnect");
        this._layoutConnect.addChild(this._txtConnect);
        this._txtConnect.setCascadeOpacityEnabled(true);
        this._txtConnect.setCascadeColorEnabled(true);
        this._txtConnect.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtConnect, 0.5, 0.5);
        let _txtConnectLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtConnect);
        this._txtConnect.setTouchEnabled(false);
        this._txtConnect.ignoreContentAdaptWithSize(true);
        this._txtConnect.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtConnect.setDefaultFontSize(22);
        this._txtConnect.setString("Connect");
        this._txtConnect.setTextHorizontalAlignment(1);
        this._txtConnect.setTextVerticalAlignment(1);

        ///// # _layoutDev
        this._layoutDev = new ccui.Layout();
        this._layoutDev.setName("_layoutDev");
        this._layoutServer.addChild(this._layoutDev);
        this._layoutDev.setCascadeOpacityEnabled(true);
        this._layoutDev.setCascadeColorEnabled(true);
        this._layoutDev.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutDev, 0.0234, 0.2853);
        let _layoutDevLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutDev);
        _layoutDevLayoutComponent.setPositionPercentYEnabled(true);
        _layoutDevLayoutComponent.setPositionPercentY(0.2853);
        this._layoutDev.setTouchEnabled(true);
        this._layoutDev.setUnifySizeEnabled(false);
        this._layoutDev.ignoreContentAdaptWithSize(false);
        this._layoutDev.setContentSize(cc.size(100, 50));
        this._layoutDev.setBackGroundColorType(1);
        this._layoutDev.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtDev
        this._txtDev = new ck.Text();
        this._txtDev.setName("_txtDev");
        this._layoutDev.addChild(this._txtDev);
        this._txtDev.setCascadeOpacityEnabled(true);
        this._txtDev.setCascadeColorEnabled(true);
        this._txtDev.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDev, 0.5, 0.5);
        let _txtDevLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDev);
        this._txtDev.setTouchEnabled(false);
        this._txtDev.ignoreContentAdaptWithSize(true);
        this._txtDev.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDev.setDefaultFontSize(22);
        this._txtDev.setString("Dev");
        this._txtDev.setTextHorizontalAlignment(1);
        this._txtDev.setTextVerticalAlignment(1);

        ///// # _layoutSandbox
        this._layoutSandbox = new ccui.Layout();
        this._layoutSandbox.setName("_layoutSandbox");
        this._layoutServer.addChild(this._layoutSandbox);
        this._layoutSandbox.setCascadeOpacityEnabled(true);
        this._layoutSandbox.setCascadeColorEnabled(true);
        this._layoutSandbox.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutSandbox, 0.2995, 0.2853);
        let _layoutSandboxLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSandbox);
        _layoutSandboxLayoutComponent.setPositionPercentYEnabled(true);
        _layoutSandboxLayoutComponent.setPositionPercentY(0.2853);
        this._layoutSandbox.setTouchEnabled(true);
        this._layoutSandbox.setUnifySizeEnabled(false);
        this._layoutSandbox.ignoreContentAdaptWithSize(false);
        this._layoutSandbox.setContentSize(cc.size(100, 50));
        this._layoutSandbox.setBackGroundColorType(1);
        this._layoutSandbox.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtSandbox
        this._txtSandbox = new ck.Text();
        this._txtSandbox.setName("_txtSandbox");
        this._layoutSandbox.addChild(this._txtSandbox);
        this._txtSandbox.setCascadeOpacityEnabled(true);
        this._txtSandbox.setCascadeColorEnabled(true);
        this._txtSandbox.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtSandbox, 0.486, 0.5);
        let _txtSandboxLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSandbox);
        this._txtSandbox.setTouchEnabled(false);
        this._txtSandbox.ignoreContentAdaptWithSize(true);
        this._txtSandbox.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSandbox.setDefaultFontSize(22);
        this._txtSandbox.setString("Sandbox");
        this._txtSandbox.setTextHorizontalAlignment(1);
        this._txtSandbox.setTextVerticalAlignment(1);

        ///// # _layoutLive
        this._layoutLive = new ccui.Layout();
        this._layoutLive.setName("_layoutLive");
        this._layoutServer.addChild(this._layoutLive);
        this._layoutLive.setCascadeOpacityEnabled(true);
        this._layoutLive.setCascadeColorEnabled(true);
        this._layoutLive.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutLive, 0.4917, 0.2853);
        let _layoutLiveLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLive);
        _layoutLiveLayoutComponent.setPositionPercentYEnabled(true);
        _layoutLiveLayoutComponent.setPositionPercentY(0.2853);
        this._layoutLive.setTouchEnabled(true);
        this._layoutLive.setUnifySizeEnabled(false);
        this._layoutLive.ignoreContentAdaptWithSize(false);
        this._layoutLive.setContentSize(cc.size(100, 50));
        this._layoutLive.setBackGroundColorType(1);
        this._layoutLive.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtLive
        this._txtLive = new ck.Text();
        this._txtLive.setName("_txtLive");
        this._layoutLive.addChild(this._txtLive);
        this._txtLive.setCascadeOpacityEnabled(true);
        this._txtLive.setCascadeColorEnabled(true);
        this._txtLive.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLive, 0.486, 0.5);
        let _txtLiveLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLive);
        this._txtLive.setTouchEnabled(false);
        this._txtLive.ignoreContentAdaptWithSize(true);
        this._txtLive.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLive.setDefaultFontSize(22);
        this._txtLive.setString("Live");
        this._txtLive.setTextHorizontalAlignment(1);
        this._txtLive.setTextVerticalAlignment(1);

        ///// # _layoutHappy
        this._layoutHappy = new ccui.Layout();
        this._layoutHappy.setName("_layoutHappy");
        this._layoutServer.addChild(this._layoutHappy);
        this._layoutHappy.setCascadeOpacityEnabled(true);
        this._layoutHappy.setCascadeColorEnabled(true);
        this._layoutHappy.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutHappy, 0.7578, 0.2853);
        let _layoutHappyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHappy);
        _layoutHappyLayoutComponent.setPositionPercentYEnabled(true);
        _layoutHappyLayoutComponent.setPositionPercentY(0.2853);
        this._layoutHappy.setTouchEnabled(true);
        this._layoutHappy.setUnifySizeEnabled(false);
        this._layoutHappy.ignoreContentAdaptWithSize(false);
        this._layoutHappy.setContentSize(cc.size(100, 50));
        this._layoutHappy.setBackGroundColorType(1);
        this._layoutHappy.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtHappy
        this._txtHappy = new ck.Text();
        this._txtHappy.setName("_txtHappy");
        this._layoutHappy.addChild(this._txtHappy);
        this._txtHappy.setCascadeOpacityEnabled(true);
        this._txtHappy.setCascadeColorEnabled(true);
        this._txtHappy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHappy, 0.486, 0.5);
        let _txtHappyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHappy);
        this._txtHappy.setTouchEnabled(false);
        this._txtHappy.ignoreContentAdaptWithSize(true);
        this._txtHappy.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHappy.setDefaultFontSize(22);
        this._txtHappy.setString("Happy");
        this._txtHappy.setTextHorizontalAlignment(1);
        this._txtHappy.setTextVerticalAlignment(1);

        ///// # _layoutBalancer
        this._layoutBalancer = new ccui.Layout();
        this._layoutBalancer.setName("_layoutBalancer");
        this._layoutServer.addChild(this._layoutBalancer);
        this._layoutBalancer.setCascadeOpacityEnabled(true);
        this._layoutBalancer.setCascadeColorEnabled(true);
        this._layoutBalancer.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBalancer, 0.9531, 0.2853);
        let _layoutBalancerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBalancer);
        _layoutBalancerLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBalancerLayoutComponent.setPositionPercentY(0.2853);
        this._layoutBalancer.setTouchEnabled(true);
        this._layoutBalancer.setUnifySizeEnabled(false);
        this._layoutBalancer.ignoreContentAdaptWithSize(false);
        this._layoutBalancer.setContentSize(cc.size(100, 50));
        this._layoutBalancer.setBackGroundColorType(1);
        this._layoutBalancer.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtBalancer
        this._txtBalancer = new ck.Text();
        this._txtBalancer.setName("_txtBalancer");
        this._layoutBalancer.addChild(this._txtBalancer);
        this._txtBalancer.setCascadeOpacityEnabled(true);
        this._txtBalancer.setCascadeColorEnabled(true);
        this._txtBalancer.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBalancer, 0.486, 0.5);
        let _txtBalancerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBalancer);
        this._txtBalancer.setTouchEnabled(false);
        this._txtBalancer.ignoreContentAdaptWithSize(true);
        this._txtBalancer.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBalancer.setDefaultFontSize(22);
        this._txtBalancer.setString("Balancer");
        this._txtBalancer.setTextHorizontalAlignment(1);
        this._txtBalancer.setTextVerticalAlignment(1);

        ///// # _layoutTurnHeader
        this._layoutTurnHeader = new ccui.Layout();
        this._layoutTurnHeader.setName("_layoutTurnHeader");
        this._listView.pushBackCustomItem(this._layoutTurnHeader);
        this._layoutTurnHeader.setCascadeOpacityEnabled(true);
        this._layoutTurnHeader.setCascadeColorEnabled(true);
        this._layoutTurnHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTurnHeader, 0.5, 0.7448);
        let _layoutTurnHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTurnHeader);
        this._layoutTurnHeader.setTouchEnabled(true);
        this._layoutTurnHeader.setUnifySizeEnabled(false);
        this._layoutTurnHeader.ignoreContentAdaptWithSize(false);
        this._layoutTurnHeader.setContentSize(cc.size(640, 40));

        ///// # _txtTurnHeader
        this._txtTurnHeader = new ck.Text();
        this._txtTurnHeader.setName("_txtTurnHeader");
        this._layoutTurnHeader.addChild(this._txtTurnHeader);
        this._txtTurnHeader.setCascadeOpacityEnabled(true);
        this._txtTurnHeader.setCascadeColorEnabled(true);
        this._txtTurnHeader.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTurnHeader, 0.07, 0.5);
        let _txtTurnHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTurnHeader);
        _txtTurnHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtTurnHeaderLayoutComponent.setPositionPercentX(0.07);
        _txtTurnHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtTurnHeaderLayoutComponent.setPositionPercentY(0.5);
        this._txtTurnHeader.setTouchEnabled(false);
        this._txtTurnHeader.ignoreContentAdaptWithSize(true);
        this._txtTurnHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTurnHeader.setDefaultFontSize(25);
        this._txtTurnHeader.setString("First turn");
        this._txtTurnHeader.setTextHorizontalAlignment(1);
        this._txtTurnHeader.setTextVerticalAlignment(1);
        this._txtTurnHeader.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _lineBot
        this._lineBot = new ccui.Layout();
        this._lineBot.setName("_lineBot");
        this._layoutTurnHeader.addChild(this._lineBot);
        this._lineBot.setCascadeOpacityEnabled(true);
        this._lineBot.setCascadeColorEnabled(true);
        this._lineBot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineBot, 0.5, 0);
        let _lineBotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineBot);
        _lineBotLayoutComponent.setPositionPercentXEnabled(true);
        _lineBotLayoutComponent.setPositionPercentX(0.5);
        _lineBotLayoutComponent.setPositionPercentYEnabled(true);
        _lineBotLayoutComponent.setPositionPercentY(0);
        _lineBotLayoutComponent.setPercentWidthEnabled(true);
        _lineBotLayoutComponent.setPercentWidth(0.97);
        this._lineBot.setTouchEnabled(false);
        this._lineBot.setUnifySizeEnabled(false);
        this._lineBot.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineBot, 0.97);
        this._lineBot.setContentSize(cc.size(this._lineBot.width, 3));
        this._lineBot.setBackGroundColorType(1);
        this._lineBot.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _lineTop
        this._lineTop = new ccui.Layout();
        this._lineTop.setName("_lineTop");
        this._layoutTurnHeader.addChild(this._lineTop);
        this._lineTop.setCascadeOpacityEnabled(true);
        this._lineTop.setCascadeColorEnabled(true);
        this._lineTop.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineTop, 0.5, 1);
        let _lineTopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineTop);
        _lineTopLayoutComponent.setPositionPercentXEnabled(true);
        _lineTopLayoutComponent.setPositionPercentX(0.5);
        _lineTopLayoutComponent.setPositionPercentYEnabled(true);
        _lineTopLayoutComponent.setPositionPercentY(1);
        _lineTopLayoutComponent.setPercentWidthEnabled(true);
        _lineTopLayoutComponent.setPercentWidth(0.97);
        this._lineTop.setTouchEnabled(false);
        this._lineTop.setUnifySizeEnabled(false);
        this._lineTop.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineTop, 0.97);
        this._lineTop.setContentSize(cc.size(this._lineTop.width, 3));
        this._lineTop.setBackGroundColorType(1);
        this._lineTop.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _imgExpandTurn
        this._imgExpandTurn = new ccui.ImageView();
        this._imgExpandTurn.setName("_imgExpandTurn");
        this._layoutTurnHeader.addChild(this._imgExpandTurn);
        this._imgExpandTurn.setCascadeOpacityEnabled(true);
        this._imgExpandTurn.setCascadeColorEnabled(true);
        this._imgExpandTurn.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgExpandTurn, 0.04, 0.5);
        this._imgExpandTurn.setScale(0.5, 0.5);
        this._imgExpandTurn.setRotation(-90);
        this._imgExpandTurn.setFlippedY(true);
        let _imgExpandTurnLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExpandTurn);
        _imgExpandTurnLayoutComponent.setPositionPercentXEnabled(true);
        _imgExpandTurnLayoutComponent.setPositionPercentX(0.04);
        _imgExpandTurnLayoutComponent.setPositionPercentYEnabled(true);
        _imgExpandTurnLayoutComponent.setPositionPercentY(0.5);
        this._imgExpandTurn.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgExpandTurn.setUnifySizeEnabled(false);
        this._imgExpandTurn.ignoreContentAdaptWithSize(false);
        this._imgExpandTurn.setContentSize(cc.size(32, 32));
        this._imgExpandTurn.setTouchEnabled(false);
        this._imgExpandTurn.setFlippedY(true);

        ///// # _imgCollapseTurn
        this._imgCollapseTurn = new ccui.ImageView();
        this._imgCollapseTurn.setName("_imgCollapseTurn");
        this._layoutTurnHeader.addChild(this._imgCollapseTurn);
        this._imgCollapseTurn.setCascadeOpacityEnabled(true);
        this._imgCollapseTurn.setCascadeColorEnabled(true);
        this._imgCollapseTurn.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCollapseTurn, 0.04, 0.5);
        this._imgCollapseTurn.setScale(0.5, 0.5);
        this._imgCollapseTurn.setRotation(180);
        let _imgCollapseTurnLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCollapseTurn);
        _imgCollapseTurnLayoutComponent.setPositionPercentXEnabled(true);
        _imgCollapseTurnLayoutComponent.setPositionPercentX(0.04);
        _imgCollapseTurnLayoutComponent.setPositionPercentYEnabled(true);
        _imgCollapseTurnLayoutComponent.setPositionPercentY(0.5);
        this._imgCollapseTurn.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgCollapseTurn.setUnifySizeEnabled(false);
        this._imgCollapseTurn.ignoreContentAdaptWithSize(false);
        this._imgCollapseTurn.setContentSize(cc.size(32, 32));
        this._imgCollapseTurn.setTouchEnabled(false);

        ///// # _layoutTurn
        this._layoutTurn = new ccui.Layout();
        this._layoutTurn.setName("_layoutTurn");
        this._listView.pushBackCustomItem(this._layoutTurn);
        this._layoutTurn.setCascadeOpacityEnabled(true);
        this._layoutTurn.setCascadeColorEnabled(true);
        this._layoutTurn.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTurn, 0.5, 0.7276);
        let _layoutTurnLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTurn);
        this._layoutTurn.setTouchEnabled(false);
        this._layoutTurn.setUnifySizeEnabled(false);
        this._layoutTurn.ignoreContentAdaptWithSize(false);
        this._layoutTurn.setContentSize(cc.size(640, 70));

        ///// # _layoutBoxTurn
        this._layoutBoxTurn = new ccui.Layout();
        this._layoutBoxTurn.setName("_layoutBoxTurn");
        this._layoutTurn.addChild(this._layoutBoxTurn);
        this._layoutBoxTurn.setCascadeOpacityEnabled(true);
        this._layoutBoxTurn.setCascadeColorEnabled(true);
        this._layoutBoxTurn.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBoxTurn, 0.03, 0.5);
        let _layoutBoxTurnLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBoxTurn);
        _layoutBoxTurnLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBoxTurnLayoutComponent.setPositionPercentX(0.03);
        _layoutBoxTurnLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBoxTurnLayoutComponent.setPositionPercentY(0.5);
        this._layoutBoxTurn.setTouchEnabled(true);
        this._layoutBoxTurn.setUnifySizeEnabled(false);
        this._layoutBoxTurn.ignoreContentAdaptWithSize(false);
        this._layoutBoxTurn.setContentSize(cc.size(360.6274, 50));
        this._layoutBoxTurn.setBackGroundColorType(1);
        this._layoutBoxTurn.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxTurn
        this._editBoxTurn = new cc.EditBox(cc.size(360.6274, 50), new cc.Scale9Sprite());
        this._editBoxTurn.setName("_editBoxTurn");
        this._layoutBoxTurn.addChild(this._editBoxTurn);
        this._editBoxTurn.setCascadeOpacityEnabled(true);
        this._editBoxTurn.setCascadeColorEnabled(true);
        this._editBoxTurn.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxTurn, 0.5, 0.5);
        this._editBoxTurn.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxTurnLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxTurn);
        _editBoxTurnLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxTurnLayoutComponent.setPositionPercentX(0.5);
        _editBoxTurnLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxTurnLayoutComponent.setPositionPercentY(0.5);
        _editBoxTurnLayoutComponent.setPercentWidthEnabled(true);
        _editBoxTurnLayoutComponent.setPercentWidth(1);
        _editBoxTurnLayoutComponent.setPercentHeightEnabled(true);
        _editBoxTurnLayoutComponent.setPercentHeight(1);
        this._editBoxTurn.setUnifySizeEnabled(false);
        this._editBoxTurn.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxTurn, 1, 1);
        this._editBoxTurn.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxTurn.setFontSize(22);
        this._editBoxTurn.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxTurn.setPlaceholderFontSize(22);
        this._editBoxTurn.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxTurn.setPlaceHolder("Player ID (Ex. 12345)");
        this._editBoxTurn.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxTurn.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutSetTurn
        this._layoutSetTurn = new ccui.Layout();
        this._layoutSetTurn.setName("_layoutSetTurn");
        this._layoutTurn.addChild(this._layoutSetTurn);
        this._layoutSetTurn.setCascadeOpacityEnabled(true);
        this._layoutSetTurn.setCascadeColorEnabled(true);
        this._layoutSetTurn.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutSetTurn, 0.97, 0.5);
        let _layoutSetTurnLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSetTurn);
        _layoutSetTurnLayoutComponent.setPositionPercentXEnabled(true);
        _layoutSetTurnLayoutComponent.setPositionPercentX(0.97);
        _layoutSetTurnLayoutComponent.setPositionPercentYEnabled(true);
        _layoutSetTurnLayoutComponent.setPositionPercentY(0.5);
        this._layoutSetTurn.setTouchEnabled(true);
        this._layoutSetTurn.setUnifySizeEnabled(false);
        this._layoutSetTurn.ignoreContentAdaptWithSize(false);
        this._layoutSetTurn.setContentSize(cc.size(100, 50));
        this._layoutSetTurn.setBackGroundColorType(1);
        this._layoutSetTurn.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtSetTurn
        this._txtSetTurn = new ck.Text();
        this._txtSetTurn.setName("_txtSetTurn");
        this._layoutSetTurn.addChild(this._txtSetTurn);
        this._txtSetTurn.setCascadeOpacityEnabled(true);
        this._txtSetTurn.setCascadeColorEnabled(true);
        this._txtSetTurn.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtSetTurn, 0.5, 0.5);
        let _txtSetTurnLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSetTurn);
        this._txtSetTurn.setTouchEnabled(false);
        this._txtSetTurn.ignoreContentAdaptWithSize(true);
        this._txtSetTurn.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSetTurn.setDefaultFontSize(22);
        this._txtSetTurn.setString("Set");
        this._txtSetTurn.setTextHorizontalAlignment(1);
        this._txtSetTurn.setTextVerticalAlignment(1);

        ///// # _layoutDeckHeader
        this._layoutDeckHeader = new ccui.Layout();
        this._layoutDeckHeader.setName("_layoutDeckHeader");
        this._listView.pushBackCustomItem(this._layoutDeckHeader);
        this._layoutDeckHeader.setCascadeOpacityEnabled(true);
        this._layoutDeckHeader.setCascadeColorEnabled(true);
        this._layoutDeckHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutDeckHeader, 0.5, 0.7105);
        let _layoutDeckHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutDeckHeader);
        this._layoutDeckHeader.setTouchEnabled(true);
        this._layoutDeckHeader.setUnifySizeEnabled(false);
        this._layoutDeckHeader.ignoreContentAdaptWithSize(false);
        this._layoutDeckHeader.setContentSize(cc.size(640, 40));

        ///// # _txtDeckHeader
        this._txtDeckHeader = new ck.Text();
        this._txtDeckHeader.setName("_txtDeckHeader");
        this._layoutDeckHeader.addChild(this._txtDeckHeader);
        this._txtDeckHeader.setCascadeOpacityEnabled(true);
        this._txtDeckHeader.setCascadeColorEnabled(true);
        this._txtDeckHeader.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDeckHeader, 0.07, 0.5);
        let _txtDeckHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDeckHeader);
        _txtDeckHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtDeckHeaderLayoutComponent.setPositionPercentX(0.07);
        _txtDeckHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtDeckHeaderLayoutComponent.setPositionPercentY(0.5);
        this._txtDeckHeader.setTouchEnabled(false);
        this._txtDeckHeader.ignoreContentAdaptWithSize(true);
        this._txtDeckHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDeckHeader.setDefaultFontSize(25);
        this._txtDeckHeader.setString("Pisti");
        this._txtDeckHeader.setTextHorizontalAlignment(1);
        this._txtDeckHeader.setTextVerticalAlignment(1);
        this._txtDeckHeader.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _lineBot
        this._lineBot = new ccui.Layout();
        this._lineBot.setName("_lineBot");
        this._layoutDeckHeader.addChild(this._lineBot);
        this._lineBot.setCascadeOpacityEnabled(true);
        this._lineBot.setCascadeColorEnabled(true);
        this._lineBot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineBot, 0.5, 0);
        let _lineBotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineBot);
        _lineBotLayoutComponent.setPositionPercentXEnabled(true);
        _lineBotLayoutComponent.setPositionPercentX(0.5);
        _lineBotLayoutComponent.setPositionPercentYEnabled(true);
        _lineBotLayoutComponent.setPositionPercentY(0);
        _lineBotLayoutComponent.setPercentWidthEnabled(true);
        _lineBotLayoutComponent.setPercentWidth(0.97);
        this._lineBot.setTouchEnabled(false);
        this._lineBot.setUnifySizeEnabled(false);
        this._lineBot.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineBot, 0.97);
        this._lineBot.setContentSize(cc.size(this._lineBot.width, 3));
        this._lineBot.setBackGroundColorType(1);
        this._lineBot.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _lineTop
        this._lineTop = new ccui.Layout();
        this._lineTop.setName("_lineTop");
        this._layoutDeckHeader.addChild(this._lineTop);
        this._lineTop.setCascadeOpacityEnabled(true);
        this._lineTop.setCascadeColorEnabled(true);
        this._lineTop.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineTop, 0.5, 1);
        let _lineTopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineTop);
        _lineTopLayoutComponent.setPositionPercentXEnabled(true);
        _lineTopLayoutComponent.setPositionPercentX(0.5);
        _lineTopLayoutComponent.setPositionPercentYEnabled(true);
        _lineTopLayoutComponent.setPositionPercentY(1);
        _lineTopLayoutComponent.setPercentWidthEnabled(true);
        _lineTopLayoutComponent.setPercentWidth(0.97);
        this._lineTop.setTouchEnabled(false);
        this._lineTop.setUnifySizeEnabled(false);
        this._lineTop.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineTop, 0.97);
        this._lineTop.setContentSize(cc.size(this._lineTop.width, 3));
        this._lineTop.setBackGroundColorType(1);
        this._lineTop.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _imgExpandDeck
        this._imgExpandDeck = new ccui.ImageView();
        this._imgExpandDeck.setName("_imgExpandDeck");
        this._layoutDeckHeader.addChild(this._imgExpandDeck);
        this._imgExpandDeck.setCascadeOpacityEnabled(true);
        this._imgExpandDeck.setCascadeColorEnabled(true);
        this._imgExpandDeck.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgExpandDeck, 0.04, 0.5);
        this._imgExpandDeck.setScale(0.5, 0.5);
        this._imgExpandDeck.setRotation(-90);
        this._imgExpandDeck.setFlippedY(true);
        let _imgExpandDeckLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExpandDeck);
        _imgExpandDeckLayoutComponent.setPositionPercentXEnabled(true);
        _imgExpandDeckLayoutComponent.setPositionPercentX(0.04);
        _imgExpandDeckLayoutComponent.setPositionPercentYEnabled(true);
        _imgExpandDeckLayoutComponent.setPositionPercentY(0.5);
        this._imgExpandDeck.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgExpandDeck.setUnifySizeEnabled(false);
        this._imgExpandDeck.ignoreContentAdaptWithSize(false);
        this._imgExpandDeck.setContentSize(cc.size(32, 32));
        this._imgExpandDeck.setTouchEnabled(false);
        this._imgExpandDeck.setFlippedY(true);

        ///// # _imgCollapseDeck
        this._imgCollapseDeck = new ccui.ImageView();
        this._imgCollapseDeck.setName("_imgCollapseDeck");
        this._layoutDeckHeader.addChild(this._imgCollapseDeck);
        this._imgCollapseDeck.setCascadeOpacityEnabled(true);
        this._imgCollapseDeck.setCascadeColorEnabled(true);
        this._imgCollapseDeck.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCollapseDeck, 0.04, 0.5);
        this._imgCollapseDeck.setScale(0.5, 0.5);
        this._imgCollapseDeck.setRotation(180);
        let _imgCollapseDeckLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCollapseDeck);
        _imgCollapseDeckLayoutComponent.setPositionPercentXEnabled(true);
        _imgCollapseDeckLayoutComponent.setPositionPercentX(0.04);
        _imgCollapseDeckLayoutComponent.setPositionPercentYEnabled(true);
        _imgCollapseDeckLayoutComponent.setPositionPercentY(0.5);
        this._imgCollapseDeck.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgCollapseDeck.setUnifySizeEnabled(false);
        this._imgCollapseDeck.ignoreContentAdaptWithSize(false);
        this._imgCollapseDeck.setContentSize(cc.size(32, 32));
        this._imgCollapseDeck.setTouchEnabled(false);

        ///// # _layoutDeck
        this._layoutDeck = new ccui.Layout();
        this._layoutDeck.setName("_layoutDeck");
        this._listView.pushBackCustomItem(this._layoutDeck);
        this._layoutDeck.setCascadeOpacityEnabled(true);
        this._layoutDeck.setCascadeColorEnabled(true);
        this._layoutDeck.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutDeck, 0.5, 0.7033);
        let _layoutDeckLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutDeck);
        this._layoutDeck.setTouchEnabled(false);
        this._layoutDeck.setUnifySizeEnabled(false);
        this._layoutDeck.ignoreContentAdaptWithSize(false);
        this._layoutDeck.setContentSize(cc.size(640, 385));

        ///// # _layoutCards
        this._layoutCards = new ccui.Layout();
        this._layoutCards.setName("_layoutCards");
        this._layoutDeck.addChild(this._layoutCards);
        this._layoutCards.setCascadeOpacityEnabled(true);
        this._layoutCards.setCascadeColorEnabled(true);
        this._layoutCards.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._layoutCards, 0.0234, 0.9659);
        let _layoutCardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCards);
        _layoutCardsLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCardsLayoutComponent.setPositionPercentY(0.9659);
        this._layoutCards.setTouchEnabled(true);
        this._layoutCards.setUnifySizeEnabled(false);
        this._layoutCards.ignoreContentAdaptWithSize(false);
        this._layoutCards.setContentSize(cc.size(230, 300));
        this._layoutCards.setBackGroundColorType(1);
        this._layoutCards.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _txtCards
        this._txtCards = new ck.Text();
        this._txtCards.setName("_txtCards");
        this._layoutCards.addChild(this._txtCards);
        this._txtCards.setCascadeOpacityEnabled(true);
        this._txtCards.setCascadeColorEnabled(true);
        this._txtCards.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCards, 0, 1);
        let _txtCardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCards);
        this._txtCards.setTouchEnabled(false);
        this._txtCards.ignoreContentAdaptWithSize(true);
        this._txtCards.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCards.setDefaultFontSize(20);
        this._txtCards.setString("Cards:");
        this._txtCards.setTextHorizontalAlignment(1);
        this._txtCards.setTextVerticalAlignment(1);
        this._txtCards.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutSelectedCards
        this._layoutSelectedCards = new ccui.Layout();
        this._layoutSelectedCards.setName("_layoutSelectedCards");
        this._layoutDeck.addChild(this._layoutSelectedCards);
        this._layoutSelectedCards.setCascadeOpacityEnabled(true);
        this._layoutSelectedCards.setCascadeColorEnabled(true);
        this._layoutSelectedCards.setAnchorPoint(cc.p(1, 1));
        ck.UIUtils.setPositionPercent(this._layoutSelectedCards, 0.7578, 0.9659);
        let _layoutSelectedCardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSelectedCards);
        _layoutSelectedCardsLayoutComponent.setPositionPercentYEnabled(true);
        _layoutSelectedCardsLayoutComponent.setPositionPercentY(0.9659);
        this._layoutSelectedCards.setTouchEnabled(true);
        this._layoutSelectedCards.setUnifySizeEnabled(false);
        this._layoutSelectedCards.ignoreContentAdaptWithSize(false);
        this._layoutSelectedCards.setContentSize(cc.size(230, 300));
        this._layoutSelectedCards.setBackGroundColorType(1);
        this._layoutSelectedCards.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _txtOrder
        this._txtOrder = new ck.Text();
        this._txtOrder.setName("_txtOrder");
        this._layoutSelectedCards.addChild(this._txtOrder);
        this._txtOrder.setCascadeOpacityEnabled(true);
        this._txtOrder.setCascadeColorEnabled(true);
        this._txtOrder.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtOrder, 0, 1);
        let _txtOrderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtOrder);
        this._txtOrder.setTouchEnabled(false);
        this._txtOrder.ignoreContentAdaptWithSize(true);
        this._txtOrder.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtOrder.setDefaultFontSize(20);
        this._txtOrder.setString("Selected cards:");
        this._txtOrder.setTextHorizontalAlignment(1);
        this._txtOrder.setTextVerticalAlignment(1);
        this._txtOrder.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutSetDeck
        this._layoutSetDeck = new ccui.Layout();
        this._layoutSetDeck.setName("_layoutSetDeck");
        this._layoutDeck.addChild(this._layoutSetDeck);
        this._layoutSetDeck.setCascadeOpacityEnabled(true);
        this._layoutSetDeck.setCascadeColorEnabled(true);
        this._layoutSetDeck.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutSetDeck, 0.7578, 0.0888);
        let _layoutSetDeckLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSetDeck);
        _layoutSetDeckLayoutComponent.setPositionPercentYEnabled(true);
        _layoutSetDeckLayoutComponent.setPositionPercentY(0.0888);
        this._layoutSetDeck.setTouchEnabled(true);
        this._layoutSetDeck.setUnifySizeEnabled(false);
        this._layoutSetDeck.ignoreContentAdaptWithSize(false);
        this._layoutSetDeck.setContentSize(cc.size(100, 50));
        this._layoutSetDeck.setBackGroundColorType(1);
        this._layoutSetDeck.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtSetDeck
        this._txtSetDeck = new ck.Text();
        this._txtSetDeck.setName("_txtSetDeck");
        this._layoutSetDeck.addChild(this._txtSetDeck);
        this._txtSetDeck.setCascadeOpacityEnabled(true);
        this._txtSetDeck.setCascadeColorEnabled(true);
        this._txtSetDeck.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtSetDeck, 0.5, 0.5);
        let _txtSetDeckLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSetDeck);
        this._txtSetDeck.setTouchEnabled(false);
        this._txtSetDeck.ignoreContentAdaptWithSize(true);
        this._txtSetDeck.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSetDeck.setDefaultFontSize(22);
        this._txtSetDeck.setString("Set");
        this._txtSetDeck.setTextHorizontalAlignment(1);
        this._txtSetDeck.setTextVerticalAlignment(1);

        ///// # _layoutClearDeck
        this._layoutClearDeck = new ccui.Layout();
        this._layoutClearDeck.setName("_layoutClearDeck");
        this._layoutDeck.addChild(this._layoutClearDeck);
        this._layoutClearDeck.setCascadeOpacityEnabled(true);
        this._layoutClearDeck.setCascadeColorEnabled(true);
        this._layoutClearDeck.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutClearDeck, 0.5848, 0.0888);
        let _layoutClearDeckLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutClearDeck);
        _layoutClearDeckLayoutComponent.setPositionPercentYEnabled(true);
        _layoutClearDeckLayoutComponent.setPositionPercentY(0.0888);
        this._layoutClearDeck.setTouchEnabled(true);
        this._layoutClearDeck.setUnifySizeEnabled(false);
        this._layoutClearDeck.ignoreContentAdaptWithSize(false);
        this._layoutClearDeck.setContentSize(cc.size(100, 50));
        this._layoutClearDeck.setBackGroundColorType(1);
        this._layoutClearDeck.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtClearDeck
        this._txtClearDeck = new ck.Text();
        this._txtClearDeck.setName("_txtClearDeck");
        this._layoutClearDeck.addChild(this._txtClearDeck);
        this._txtClearDeck.setCascadeOpacityEnabled(true);
        this._txtClearDeck.setCascadeColorEnabled(true);
        this._txtClearDeck.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtClearDeck, 0.5, 0.5);
        let _txtClearDeckLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtClearDeck);
        this._txtClearDeck.setTouchEnabled(false);
        this._txtClearDeck.ignoreContentAdaptWithSize(true);
        this._txtClearDeck.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtClearDeck.setDefaultFontSize(22);
        this._txtClearDeck.setString("Clear");
        this._txtClearDeck.setTextHorizontalAlignment(1);
        this._txtClearDeck.setTextVerticalAlignment(1);

        ///// # _checkBoxAI
        this._checkBoxAI = new ccui.CheckBox();
        this._checkBoxAI.setName("_checkBoxAI");
        this._layoutDeck.addChild(this._checkBoxAI);
        this._checkBoxAI.setCascadeOpacityEnabled(true);
        this._checkBoxAI.setCascadeColorEnabled(true);
        this._checkBoxAI.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._checkBoxAI, 0.0685, 0.1183);
        let _checkBoxAILayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._checkBoxAI);
        _checkBoxAILayoutComponent.setPositionPercentXEnabled(true);
        _checkBoxAILayoutComponent.setPositionPercentX(0.0685);
        _checkBoxAILayoutComponent.setPositionPercentYEnabled(true);
        _checkBoxAILayoutComponent.setPositionPercentY(0.1183);
        this._checkBoxAI.setUnifySizeEnabled(false);
        this._checkBoxAI.ignoreContentAdaptWithSize(false);
        this._checkBoxAI.setContentSize(cc.size(40, 40));
        this._checkBoxAI.setTouchEnabled(true);
        this._checkBoxAI.loadTextureBackGround("Default/CheckBox_Normal.png", 0);
        this._checkBoxAI.loadTextureFrontCross("Default/CheckBoxNode_Normal.png", 0);
        this._checkBoxAI.setBright(true);
        this._checkBoxAI.setEnabled(true);
        this._checkBoxAI.setSelected(false);

        ///// # _checkBoxAuto
        this._checkBoxAuto = new ccui.CheckBox();
        this._checkBoxAuto.setName("_checkBoxAuto");
        this._layoutDeck.addChild(this._checkBoxAuto);
        this._checkBoxAuto.setCascadeOpacityEnabled(true);
        this._checkBoxAuto.setCascadeColorEnabled(true);
        this._checkBoxAuto.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._checkBoxAuto, 0.1647, 0.1187);
        let _checkBoxAutoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._checkBoxAuto);
        _checkBoxAutoLayoutComponent.setPositionPercentXEnabled(true);
        _checkBoxAutoLayoutComponent.setPositionPercentX(0.1647);
        _checkBoxAutoLayoutComponent.setPositionPercentYEnabled(true);
        _checkBoxAutoLayoutComponent.setPositionPercentY(0.1187);
        this._checkBoxAuto.setUnifySizeEnabled(false);
        this._checkBoxAuto.ignoreContentAdaptWithSize(false);
        this._checkBoxAuto.setContentSize(cc.size(40, 40));
        this._checkBoxAuto.setTouchEnabled(true);
        this._checkBoxAuto.loadTextureBackGround("Default/CheckBox_Normal.png", 0);
        this._checkBoxAuto.loadTextureFrontCross("Default/CheckBoxNode_Normal.png", 0);
        this._checkBoxAuto.setBright(true);
        this._checkBoxAuto.setEnabled(true);
        this._checkBoxAuto.setSelected(false);

        ///// # _txtAI
        this._txtAI = new ck.Text();
        this._txtAI.setName("_txtAI");
        this._layoutDeck.addChild(this._txtAI);
        this._txtAI.setCascadeOpacityEnabled(true);
        this._txtAI.setCascadeColorEnabled(true);
        this._txtAI.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAI, 0.0653, 0.0315);
        let _txtAILayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAI);
        _txtAILayoutComponent.setPositionPercentXEnabled(true);
        _txtAILayoutComponent.setPositionPercentX(0.0653);
        _txtAILayoutComponent.setPositionPercentYEnabled(true);
        _txtAILayoutComponent.setPositionPercentY(0.0315);
        this._txtAI.setTouchEnabled(false);
        this._txtAI.ignoreContentAdaptWithSize(true);
        this._txtAI.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAI.setDefaultFontSize(22);
        this._txtAI.setString("AI");
        this._txtAI.setTextHorizontalAlignment(1);
        this._txtAI.setTextVerticalAlignment(1);

        ///// # _txtAuto
        this._txtAuto = new ck.Text();
        this._txtAuto.setName("_txtAuto");
        this._layoutDeck.addChild(this._txtAuto);
        this._txtAuto.setCascadeOpacityEnabled(true);
        this._txtAuto.setCascadeColorEnabled(true);
        this._txtAuto.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAuto, 0.1655, 0.032);
        let _txtAutoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAuto);
        _txtAutoLayoutComponent.setPositionPercentXEnabled(true);
        _txtAutoLayoutComponent.setPositionPercentX(0.1655);
        _txtAutoLayoutComponent.setPositionPercentYEnabled(true);
        _txtAutoLayoutComponent.setPositionPercentY(0.032);
        this._txtAuto.setTouchEnabled(false);
        this._txtAuto.ignoreContentAdaptWithSize(true);
        this._txtAuto.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAuto.setDefaultFontSize(22);
        this._txtAuto.setString("Auto");
        this._txtAuto.setTextHorizontalAlignment(1);
        this._txtAuto.setTextVerticalAlignment(1);

        ///// # _layoutPokerHeader
        this._layoutPokerHeader = new ccui.Layout();
        this._layoutPokerHeader.setName("_layoutPokerHeader");
        this._listView.pushBackCustomItem(this._layoutPokerHeader);
        this._layoutPokerHeader.setCascadeOpacityEnabled(true);
        this._layoutPokerHeader.setCascadeColorEnabled(true);
        this._layoutPokerHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutPokerHeader, 0.5, 0.5862);
        let _layoutPokerHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPokerHeader);
        this._layoutPokerHeader.setTouchEnabled(true);
        this._layoutPokerHeader.setUnifySizeEnabled(false);
        this._layoutPokerHeader.ignoreContentAdaptWithSize(false);
        this._layoutPokerHeader.setContentSize(cc.size(640, 40));

        ///// # _txtPokerHeader
        this._txtPokerHeader = new ck.Text();
        this._txtPokerHeader.setName("_txtPokerHeader");
        this._layoutPokerHeader.addChild(this._txtPokerHeader);
        this._txtPokerHeader.setCascadeOpacityEnabled(true);
        this._txtPokerHeader.setCascadeColorEnabled(true);
        this._txtPokerHeader.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPokerHeader, 0.07, 0.5);
        let _txtPokerHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPokerHeader);
        _txtPokerHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtPokerHeaderLayoutComponent.setPositionPercentX(0.07);
        _txtPokerHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtPokerHeaderLayoutComponent.setPositionPercentY(0.5);
        this._txtPokerHeader.setTouchEnabled(false);
        this._txtPokerHeader.ignoreContentAdaptWithSize(true);
        this._txtPokerHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtPokerHeader.setDefaultFontSize(25);
        this._txtPokerHeader.setString("Video Poker");
        this._txtPokerHeader.setTextHorizontalAlignment(1);
        this._txtPokerHeader.setTextVerticalAlignment(1);
        this._txtPokerHeader.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _lineBot
        this._lineBot = new ccui.Layout();
        this._lineBot.setName("_lineBot");
        this._layoutPokerHeader.addChild(this._lineBot);
        this._lineBot.setCascadeOpacityEnabled(true);
        this._lineBot.setCascadeColorEnabled(true);
        this._lineBot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineBot, 0.5, 0);
        let _lineBotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineBot);
        _lineBotLayoutComponent.setPositionPercentXEnabled(true);
        _lineBotLayoutComponent.setPositionPercentX(0.5);
        _lineBotLayoutComponent.setPositionPercentYEnabled(true);
        _lineBotLayoutComponent.setPositionPercentY(0);
        _lineBotLayoutComponent.setPercentWidthEnabled(true);
        _lineBotLayoutComponent.setPercentWidth(0.97);
        this._lineBot.setTouchEnabled(false);
        this._lineBot.setUnifySizeEnabled(false);
        this._lineBot.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineBot, 0.97);
        this._lineBot.setContentSize(cc.size(this._lineBot.width, 3));
        this._lineBot.setBackGroundColorType(1);
        this._lineBot.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _lineTop
        this._lineTop = new ccui.Layout();
        this._lineTop.setName("_lineTop");
        this._layoutPokerHeader.addChild(this._lineTop);
        this._lineTop.setCascadeOpacityEnabled(true);
        this._lineTop.setCascadeColorEnabled(true);
        this._lineTop.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineTop, 0.5, 1);
        let _lineTopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineTop);
        _lineTopLayoutComponent.setPositionPercentXEnabled(true);
        _lineTopLayoutComponent.setPositionPercentX(0.5);
        _lineTopLayoutComponent.setPositionPercentYEnabled(true);
        _lineTopLayoutComponent.setPositionPercentY(1);
        _lineTopLayoutComponent.setPercentWidthEnabled(true);
        _lineTopLayoutComponent.setPercentWidth(0.97);
        this._lineTop.setTouchEnabled(false);
        this._lineTop.setUnifySizeEnabled(false);
        this._lineTop.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineTop, 0.97);
        this._lineTop.setContentSize(cc.size(this._lineTop.width, 3));
        this._lineTop.setBackGroundColorType(1);
        this._lineTop.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _imgExpandPoker
        this._imgExpandPoker = new ccui.ImageView();
        this._imgExpandPoker.setName("_imgExpandPoker");
        this._layoutPokerHeader.addChild(this._imgExpandPoker);
        this._imgExpandPoker.setCascadeOpacityEnabled(true);
        this._imgExpandPoker.setCascadeColorEnabled(true);
        this._imgExpandPoker.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgExpandPoker, 0.04, 0.5);
        this._imgExpandPoker.setScale(0.5, 0.5);
        this._imgExpandPoker.setRotation(-90);
        this._imgExpandPoker.setFlippedY(true);
        let _imgExpandPokerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExpandPoker);
        _imgExpandPokerLayoutComponent.setPositionPercentXEnabled(true);
        _imgExpandPokerLayoutComponent.setPositionPercentX(0.04);
        _imgExpandPokerLayoutComponent.setPositionPercentYEnabled(true);
        _imgExpandPokerLayoutComponent.setPositionPercentY(0.5);
        this._imgExpandPoker.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgExpandPoker.setUnifySizeEnabled(false);
        this._imgExpandPoker.ignoreContentAdaptWithSize(false);
        this._imgExpandPoker.setContentSize(cc.size(32, 32));
        this._imgExpandPoker.setTouchEnabled(false);
        this._imgExpandPoker.setFlippedY(true);

        ///// # _imgCollapsePoker
        this._imgCollapsePoker = new ccui.ImageView();
        this._imgCollapsePoker.setName("_imgCollapsePoker");
        this._layoutPokerHeader.addChild(this._imgCollapsePoker);
        this._imgCollapsePoker.setCascadeOpacityEnabled(true);
        this._imgCollapsePoker.setCascadeColorEnabled(true);
        this._imgCollapsePoker.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCollapsePoker, 0.04, 0.5);
        this._imgCollapsePoker.setScale(0.5, 0.5);
        this._imgCollapsePoker.setRotation(180);
        let _imgCollapsePokerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCollapsePoker);
        _imgCollapsePokerLayoutComponent.setPositionPercentXEnabled(true);
        _imgCollapsePokerLayoutComponent.setPositionPercentX(0.04);
        _imgCollapsePokerLayoutComponent.setPositionPercentYEnabled(true);
        _imgCollapsePokerLayoutComponent.setPositionPercentY(0.5);
        this._imgCollapsePoker.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgCollapsePoker.setUnifySizeEnabled(false);
        this._imgCollapsePoker.ignoreContentAdaptWithSize(false);
        this._imgCollapsePoker.setContentSize(cc.size(32, 32));
        this._imgCollapsePoker.setTouchEnabled(false);

        ///// # _layoutPoker
        this._layoutPoker = new ccui.Layout();
        this._layoutPoker.setName("_layoutPoker");
        this._listView.pushBackCustomItem(this._layoutPoker);
        this._layoutPoker.setCascadeOpacityEnabled(true);
        this._layoutPoker.setCascadeColorEnabled(true);
        this._layoutPoker.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutPoker, 0.5, 0.579);
        let _layoutPokerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPoker);
        this._layoutPoker.setTouchEnabled(false);
        this._layoutPoker.setUnifySizeEnabled(false);
        this._layoutPoker.ignoreContentAdaptWithSize(false);
        this._layoutPoker.setContentSize(cc.size(640, 70));

        ///// # _txtPokerNote
        this._txtPokerNote = new ck.Text();
        this._txtPokerNote.setName("_txtPokerNote");
        this._layoutPoker.addChild(this._txtPokerNote);
        this._txtPokerNote.setCascadeOpacityEnabled(true);
        this._txtPokerNote.setCascadeColorEnabled(true);
        this._txtPokerNote.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPokerNote, 0.0802, 0.5);
        let _txtPokerNoteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPokerNote);
        _txtPokerNoteLayoutComponent.setPositionPercentYEnabled(true);
        _txtPokerNoteLayoutComponent.setPositionPercentY(0.5);
        this._txtPokerNote.setTouchEnabled(false);
        this._txtPokerNote.setUnifySizeEnabled(false);
        this._txtPokerNote.ignoreContentAdaptWithSize(false);
        this._txtPokerNote.setContentSize(cc.size(215.3954, 50.7355));
        this._txtPokerNote.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtPokerNote.setDefaultFontSize(20);
        this._txtPokerNote.setString("Select 5 cards on Deck section then press Set button");
        this._txtPokerNote.setTextHorizontalAlignment(0);
        this._txtPokerNote.setTextVerticalAlignment(1);
        this._txtPokerNote.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutCheatPoker
        this._layoutCheatPoker = new ccui.Layout();
        this._layoutCheatPoker.setName("_layoutCheatPoker");
        this._layoutPoker.addChild(this._layoutCheatPoker);
        this._layoutCheatPoker.setCascadeOpacityEnabled(true);
        this._layoutCheatPoker.setCascadeColorEnabled(true);
        this._layoutCheatPoker.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCheatPoker, 0.7578, 0.5);
        let _layoutCheatPokerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCheatPoker);
        _layoutCheatPokerLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCheatPokerLayoutComponent.setPositionPercentY(0.5);
        this._layoutCheatPoker.setTouchEnabled(true);
        this._layoutCheatPoker.setUnifySizeEnabled(false);
        this._layoutCheatPoker.ignoreContentAdaptWithSize(false);
        this._layoutCheatPoker.setContentSize(cc.size(100, 50));
        this._layoutCheatPoker.setBackGroundColorType(1);
        this._layoutCheatPoker.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtCheatPoker
        this._txtCheatPoker = new ck.Text();
        this._txtCheatPoker.setName("_txtCheatPoker");
        this._layoutCheatPoker.addChild(this._txtCheatPoker);
        this._txtCheatPoker.setCascadeOpacityEnabled(true);
        this._txtCheatPoker.setCascadeColorEnabled(true);
        this._txtCheatPoker.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCheatPoker, 0.5, 0.5);
        let _txtCheatPokerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCheatPoker);
        this._txtCheatPoker.setTouchEnabled(false);
        this._txtCheatPoker.ignoreContentAdaptWithSize(true);
        this._txtCheatPoker.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCheatPoker.setDefaultFontSize(22);
        this._txtCheatPoker.setString("Set");
        this._txtCheatPoker.setTextHorizontalAlignment(1);
        this._txtCheatPoker.setTextVerticalAlignment(1);

        ///// # _layoutOffCheatPoker
        this._layoutOffCheatPoker = new ccui.Layout();
        this._layoutOffCheatPoker.setName("_layoutOffCheatPoker");
        this._layoutPoker.addChild(this._layoutOffCheatPoker);
        this._layoutOffCheatPoker.setCascadeOpacityEnabled(true);
        this._layoutOffCheatPoker.setCascadeColorEnabled(true);
        this._layoutOffCheatPoker.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutOffCheatPoker, 0.5848, 0.5);
        let _layoutOffCheatPokerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutOffCheatPoker);
        _layoutOffCheatPokerLayoutComponent.setPositionPercentYEnabled(true);
        _layoutOffCheatPokerLayoutComponent.setPositionPercentY(0.5);
        this._layoutOffCheatPoker.setTouchEnabled(true);
        this._layoutOffCheatPoker.setUnifySizeEnabled(false);
        this._layoutOffCheatPoker.ignoreContentAdaptWithSize(false);
        this._layoutOffCheatPoker.setContentSize(cc.size(100, 50));
        this._layoutOffCheatPoker.setBackGroundColorType(1);
        this._layoutOffCheatPoker.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtOffCheatPoker
        this._txtOffCheatPoker = new ck.Text();
        this._txtOffCheatPoker.setName("_txtOffCheatPoker");
        this._layoutOffCheatPoker.addChild(this._txtOffCheatPoker);
        this._txtOffCheatPoker.setCascadeOpacityEnabled(true);
        this._txtOffCheatPoker.setCascadeColorEnabled(true);
        this._txtOffCheatPoker.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtOffCheatPoker, 0.5, 0.5);
        let _txtOffCheatPokerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtOffCheatPoker);
        this._txtOffCheatPoker.setTouchEnabled(false);
        this._txtOffCheatPoker.ignoreContentAdaptWithSize(true);
        this._txtOffCheatPoker.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtOffCheatPoker.setDefaultFontSize(22);
        this._txtOffCheatPoker.setString("Off Cheat");
        this._txtOffCheatPoker.setTextHorizontalAlignment(1);
        this._txtOffCheatPoker.setTextVerticalAlignment(1);

        ///// # _layoutProtocolHeader
        this._layoutProtocolHeader = new ccui.Layout();
        this._layoutProtocolHeader.setName("_layoutProtocolHeader");
        this._listView.pushBackCustomItem(this._layoutProtocolHeader);
        this._layoutProtocolHeader.setCascadeOpacityEnabled(true);
        this._layoutProtocolHeader.setCascadeColorEnabled(true);
        this._layoutProtocolHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutProtocolHeader, 0.5, 0.5519);
        let _layoutProtocolHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProtocolHeader);
        this._layoutProtocolHeader.setTouchEnabled(true);
        this._layoutProtocolHeader.setUnifySizeEnabled(false);
        this._layoutProtocolHeader.ignoreContentAdaptWithSize(false);
        this._layoutProtocolHeader.setContentSize(cc.size(640, 40));

        ///// # _txtProtocolHeader
        this._txtProtocolHeader = new ck.Text();
        this._txtProtocolHeader.setName("_txtProtocolHeader");
        this._layoutProtocolHeader.addChild(this._txtProtocolHeader);
        this._txtProtocolHeader.setCascadeOpacityEnabled(true);
        this._txtProtocolHeader.setCascadeColorEnabled(true);
        this._txtProtocolHeader.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtProtocolHeader, 0.07, 0.5);
        let _txtProtocolHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtProtocolHeader);
        _txtProtocolHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtProtocolHeaderLayoutComponent.setPositionPercentX(0.07);
        _txtProtocolHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtProtocolHeaderLayoutComponent.setPositionPercentY(0.5);
        this._txtProtocolHeader.setTouchEnabled(false);
        this._txtProtocolHeader.ignoreContentAdaptWithSize(true);
        this._txtProtocolHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtProtocolHeader.setDefaultFontSize(25);
        this._txtProtocolHeader.setString("Protocol");
        this._txtProtocolHeader.setTextHorizontalAlignment(1);
        this._txtProtocolHeader.setTextVerticalAlignment(1);
        this._txtProtocolHeader.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _lineBot
        this._lineBot = new ccui.Layout();
        this._lineBot.setName("_lineBot");
        this._layoutProtocolHeader.addChild(this._lineBot);
        this._lineBot.setCascadeOpacityEnabled(true);
        this._lineBot.setCascadeColorEnabled(true);
        this._lineBot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineBot, 0.5, 0);
        let _lineBotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineBot);
        _lineBotLayoutComponent.setPositionPercentXEnabled(true);
        _lineBotLayoutComponent.setPositionPercentX(0.5);
        _lineBotLayoutComponent.setPositionPercentYEnabled(true);
        _lineBotLayoutComponent.setPositionPercentY(0);
        _lineBotLayoutComponent.setPercentWidthEnabled(true);
        _lineBotLayoutComponent.setPercentWidth(0.97);
        this._lineBot.setTouchEnabled(false);
        this._lineBot.setUnifySizeEnabled(false);
        this._lineBot.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineBot, 0.97);
        this._lineBot.setContentSize(cc.size(this._lineBot.width, 3));
        this._lineBot.setBackGroundColorType(1);
        this._lineBot.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _lineTop
        this._lineTop = new ccui.Layout();
        this._lineTop.setName("_lineTop");
        this._layoutProtocolHeader.addChild(this._lineTop);
        this._lineTop.setCascadeOpacityEnabled(true);
        this._lineTop.setCascadeColorEnabled(true);
        this._lineTop.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineTop, 0.5, 1);
        let _lineTopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineTop);
        _lineTopLayoutComponent.setPositionPercentXEnabled(true);
        _lineTopLayoutComponent.setPositionPercentX(0.5);
        _lineTopLayoutComponent.setPositionPercentYEnabled(true);
        _lineTopLayoutComponent.setPositionPercentY(1);
        _lineTopLayoutComponent.setPercentWidthEnabled(true);
        _lineTopLayoutComponent.setPercentWidth(0.97);
        this._lineTop.setTouchEnabled(false);
        this._lineTop.setUnifySizeEnabled(false);
        this._lineTop.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineTop, 0.97);
        this._lineTop.setContentSize(cc.size(this._lineTop.width, 3));
        this._lineTop.setBackGroundColorType(1);
        this._lineTop.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _imgExpandProtocol
        this._imgExpandProtocol = new ccui.ImageView();
        this._imgExpandProtocol.setName("_imgExpandProtocol");
        this._layoutProtocolHeader.addChild(this._imgExpandProtocol);
        this._imgExpandProtocol.setCascadeOpacityEnabled(true);
        this._imgExpandProtocol.setCascadeColorEnabled(true);
        this._imgExpandProtocol.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgExpandProtocol, 0.04, 0.5);
        this._imgExpandProtocol.setScale(0.5, 0.5);
        this._imgExpandProtocol.setRotation(-90);
        this._imgExpandProtocol.setFlippedY(true);
        let _imgExpandProtocolLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExpandProtocol);
        _imgExpandProtocolLayoutComponent.setPositionPercentXEnabled(true);
        _imgExpandProtocolLayoutComponent.setPositionPercentX(0.04);
        _imgExpandProtocolLayoutComponent.setPositionPercentYEnabled(true);
        _imgExpandProtocolLayoutComponent.setPositionPercentY(0.5);
        this._imgExpandProtocol.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgExpandProtocol.setUnifySizeEnabled(false);
        this._imgExpandProtocol.ignoreContentAdaptWithSize(false);
        this._imgExpandProtocol.setContentSize(cc.size(32, 32));
        this._imgExpandProtocol.setTouchEnabled(false);
        this._imgExpandProtocol.setFlippedY(true);

        ///// # _imgCollapseProtocol
        this._imgCollapseProtocol = new ccui.ImageView();
        this._imgCollapseProtocol.setName("_imgCollapseProtocol");
        this._layoutProtocolHeader.addChild(this._imgCollapseProtocol);
        this._imgCollapseProtocol.setCascadeOpacityEnabled(true);
        this._imgCollapseProtocol.setCascadeColorEnabled(true);
        this._imgCollapseProtocol.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCollapseProtocol, 0.04, 0.5);
        this._imgCollapseProtocol.setScale(0.5, 0.5);
        this._imgCollapseProtocol.setRotation(180);
        let _imgCollapseProtocolLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCollapseProtocol);
        _imgCollapseProtocolLayoutComponent.setPositionPercentXEnabled(true);
        _imgCollapseProtocolLayoutComponent.setPositionPercentX(0.04);
        _imgCollapseProtocolLayoutComponent.setPositionPercentYEnabled(true);
        _imgCollapseProtocolLayoutComponent.setPositionPercentY(0.5);
        this._imgCollapseProtocol.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgCollapseProtocol.setUnifySizeEnabled(false);
        this._imgCollapseProtocol.ignoreContentAdaptWithSize(false);
        this._imgCollapseProtocol.setContentSize(cc.size(32, 32));
        this._imgCollapseProtocol.setTouchEnabled(false);

        ///// # _layoutProtocol
        this._layoutProtocol = new ccui.Layout();
        this._layoutProtocol.setName("_layoutProtocol");
        this._listView.pushBackCustomItem(this._layoutProtocol);
        this._layoutProtocol.setCascadeOpacityEnabled(true);
        this._layoutProtocol.setCascadeColorEnabled(true);
        this._layoutProtocol.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutProtocol, 0.5, 0.5447);
        let _layoutProtocolLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProtocol);
        this._layoutProtocol.setTouchEnabled(false);
        this._layoutProtocol.setUnifySizeEnabled(false);
        this._layoutProtocol.ignoreContentAdaptWithSize(false);
        this._layoutProtocol.setContentSize(cc.size(640, 200));

        ///// # _txtProtocolDetail
        this._txtProtocolDetail = new ck.Text();
        this._txtProtocolDetail.setName("_txtProtocolDetail");
        this._layoutProtocol.addChild(this._txtProtocolDetail);
        this._txtProtocolDetail.setCascadeOpacityEnabled(true);
        this._txtProtocolDetail.setCascadeColorEnabled(true);
        this._txtProtocolDetail.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtProtocolDetail, 0.0212, 0.373);
        let _txtProtocolDetailLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtProtocolDetail);
        _txtProtocolDetailLayoutComponent.setPositionPercentYEnabled(true);
        _txtProtocolDetailLayoutComponent.setPositionPercentY(0.373);
        this._txtProtocolDetail.setTouchEnabled(false);
        this._txtProtocolDetail.setUnifySizeEnabled(false);
        this._txtProtocolDetail.ignoreContentAdaptWithSize(false);
        this._txtProtocolDetail.setContentSize(cc.size(479.137, 65.0397));
        this._txtProtocolDetail.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtProtocolDetail.setDefaultFontSize(20);
        this._txtProtocolDetail.setString("short: 10, byte: 1, bool: false, string: Something, double: 3.14");
        this._txtProtocolDetail.setTextHorizontalAlignment(0);
        this._txtProtocolDetail.setTextVerticalAlignment(1);
        this._txtProtocolDetail.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutProtocolValue
        this._layoutProtocolValue = new ccui.Layout();
        this._layoutProtocolValue.setName("_layoutProtocolValue");
        this._layoutProtocol.addChild(this._layoutProtocolValue);
        this._layoutProtocolValue.setCascadeOpacityEnabled(true);
        this._layoutProtocolValue.setCascadeColorEnabled(true);
        this._layoutProtocolValue.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutProtocolValue, 0.027, 0.555);
        let _layoutProtocolValueLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProtocolValue);
        _layoutProtocolValueLayoutComponent.setPositionPercentXEnabled(true);
        _layoutProtocolValueLayoutComponent.setPositionPercentX(0.027);
        _layoutProtocolValueLayoutComponent.setPositionPercentYEnabled(true);
        _layoutProtocolValueLayoutComponent.setPositionPercentY(0.555);
        this._layoutProtocolValue.setTouchEnabled(true);
        this._layoutProtocolValue.setUnifySizeEnabled(false);
        this._layoutProtocolValue.ignoreContentAdaptWithSize(false);
        this._layoutProtocolValue.setContentSize(cc.size(77.6198, 50));
        this._layoutProtocolValue.setBackGroundColorType(1);
        this._layoutProtocolValue.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxProtocolValue
        this._editBoxProtocolValue = new cc.EditBox(cc.size(77.6198, 50), new cc.Scale9Sprite());
        this._editBoxProtocolValue.setName("_editBoxProtocolValue");
        this._layoutProtocolValue.addChild(this._editBoxProtocolValue);
        this._editBoxProtocolValue.setCascadeOpacityEnabled(true);
        this._editBoxProtocolValue.setCascadeColorEnabled(true);
        this._editBoxProtocolValue.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxProtocolValue, 0.5, 0.5);
        this._editBoxProtocolValue.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxProtocolValueLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxProtocolValue);
        _editBoxProtocolValueLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxProtocolValueLayoutComponent.setPositionPercentX(0.5);
        _editBoxProtocolValueLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxProtocolValueLayoutComponent.setPositionPercentY(0.5);
        _editBoxProtocolValueLayoutComponent.setPercentWidthEnabled(true);
        _editBoxProtocolValueLayoutComponent.setPercentWidth(1);
        _editBoxProtocolValueLayoutComponent.setPercentHeightEnabled(true);
        _editBoxProtocolValueLayoutComponent.setPercentHeight(1);
        this._editBoxProtocolValue.setUnifySizeEnabled(false);
        this._editBoxProtocolValue.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxProtocolValue, 1, 1);
        this._editBoxProtocolValue.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxProtocolValue.setFontSize(22);
        this._editBoxProtocolValue.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxProtocolValue.setPlaceholderFontSize(22);
        this._editBoxProtocolValue.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxProtocolValue.setPlaceHolder("Ex. 10");
        this._editBoxProtocolValue.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxProtocolValue.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutProtocolByte
        this._layoutProtocolByte = new ccui.Layout();
        this._layoutProtocolByte.setName("_layoutProtocolByte");
        this._layoutProtocol.addChild(this._layoutProtocolByte);
        this._layoutProtocolByte.setCascadeOpacityEnabled(true);
        this._layoutProtocolByte.setCascadeColorEnabled(true);
        this._layoutProtocolByte.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutProtocolByte, 0.2471, 0.555);
        let _layoutProtocolByteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProtocolByte);
        _layoutProtocolByteLayoutComponent.setPositionPercentXEnabled(true);
        _layoutProtocolByteLayoutComponent.setPositionPercentX(0.2471);
        _layoutProtocolByteLayoutComponent.setPositionPercentYEnabled(true);
        _layoutProtocolByteLayoutComponent.setPositionPercentY(0.555);
        this._layoutProtocolByte.setTouchEnabled(true);
        this._layoutProtocolByte.setUnifySizeEnabled(false);
        this._layoutProtocolByte.ignoreContentAdaptWithSize(false);
        this._layoutProtocolByte.setContentSize(cc.size(50.78, 50));
        this._layoutProtocolByte.setBackGroundColorType(1);
        this._layoutProtocolByte.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtProtocolByte
        this._txtProtocolByte = new ck.Text();
        this._txtProtocolByte.setName("_txtProtocolByte");
        this._layoutProtocolByte.addChild(this._txtProtocolByte);
        this._txtProtocolByte.setCascadeOpacityEnabled(true);
        this._txtProtocolByte.setCascadeColorEnabled(true);
        this._txtProtocolByte.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtProtocolByte, 0.5, 0.5);
        let _txtProtocolByteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtProtocolByte);
        _txtProtocolByteLayoutComponent.setPositionPercentXEnabled(true);
        _txtProtocolByteLayoutComponent.setPositionPercentX(0.5);
        _txtProtocolByteLayoutComponent.setPositionPercentYEnabled(true);
        _txtProtocolByteLayoutComponent.setPositionPercentY(0.5);
        this._txtProtocolByte.setTouchEnabled(false);
        this._txtProtocolByte.ignoreContentAdaptWithSize(true);
        this._txtProtocolByte.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtProtocolByte.setDefaultFontSize(22);
        this._txtProtocolByte.setString("byte");
        this._txtProtocolByte.setTextHorizontalAlignment(1);
        this._txtProtocolByte.setTextVerticalAlignment(1);

        ///// # _layoutProtocolShort
        this._layoutProtocolShort = new ccui.Layout();
        this._layoutProtocolShort.setName("_layoutProtocolShort");
        this._layoutProtocol.addChild(this._layoutProtocolShort);
        this._layoutProtocolShort.setCascadeOpacityEnabled(true);
        this._layoutProtocolShort.setCascadeColorEnabled(true);
        this._layoutProtocolShort.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutProtocolShort, 0.357, 0.555);
        let _layoutProtocolShortLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProtocolShort);
        _layoutProtocolShortLayoutComponent.setPositionPercentXEnabled(true);
        _layoutProtocolShortLayoutComponent.setPositionPercentX(0.357);
        _layoutProtocolShortLayoutComponent.setPositionPercentYEnabled(true);
        _layoutProtocolShortLayoutComponent.setPositionPercentY(0.555);
        this._layoutProtocolShort.setTouchEnabled(true);
        this._layoutProtocolShort.setUnifySizeEnabled(false);
        this._layoutProtocolShort.ignoreContentAdaptWithSize(false);
        this._layoutProtocolShort.setContentSize(cc.size(50.78, 50));
        this._layoutProtocolShort.setBackGroundColorType(1);
        this._layoutProtocolShort.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtProtocolShort
        this._txtProtocolShort = new ck.Text();
        this._txtProtocolShort.setName("_txtProtocolShort");
        this._layoutProtocolShort.addChild(this._txtProtocolShort);
        this._txtProtocolShort.setCascadeOpacityEnabled(true);
        this._txtProtocolShort.setCascadeColorEnabled(true);
        this._txtProtocolShort.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtProtocolShort, 0.5, 0.5);
        let _txtProtocolShortLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtProtocolShort);
        _txtProtocolShortLayoutComponent.setPositionPercentXEnabled(true);
        _txtProtocolShortLayoutComponent.setPositionPercentX(0.5);
        _txtProtocolShortLayoutComponent.setPositionPercentYEnabled(true);
        _txtProtocolShortLayoutComponent.setPositionPercentY(0.5);
        this._txtProtocolShort.setTouchEnabled(false);
        this._txtProtocolShort.ignoreContentAdaptWithSize(true);
        this._txtProtocolShort.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtProtocolShort.setDefaultFontSize(22);
        this._txtProtocolShort.setString("short");
        this._txtProtocolShort.setTextHorizontalAlignment(1);
        this._txtProtocolShort.setTextVerticalAlignment(1);

        ///// # _layoutProtocolInt
        this._layoutProtocolInt = new ccui.Layout();
        this._layoutProtocolInt.setName("_layoutProtocolInt");
        this._layoutProtocol.addChild(this._layoutProtocolInt);
        this._layoutProtocolInt.setCascadeOpacityEnabled(true);
        this._layoutProtocolInt.setCascadeColorEnabled(true);
        this._layoutProtocolInt.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutProtocolInt, 0.4669, 0.555);
        let _layoutProtocolIntLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProtocolInt);
        _layoutProtocolIntLayoutComponent.setPositionPercentXEnabled(true);
        _layoutProtocolIntLayoutComponent.setPositionPercentX(0.4669);
        _layoutProtocolIntLayoutComponent.setPositionPercentYEnabled(true);
        _layoutProtocolIntLayoutComponent.setPositionPercentY(0.555);
        this._layoutProtocolInt.setTouchEnabled(true);
        this._layoutProtocolInt.setUnifySizeEnabled(false);
        this._layoutProtocolInt.ignoreContentAdaptWithSize(false);
        this._layoutProtocolInt.setContentSize(cc.size(50.78, 50));
        this._layoutProtocolInt.setBackGroundColorType(1);
        this._layoutProtocolInt.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtProtocolInt
        this._txtProtocolInt = new ck.Text();
        this._txtProtocolInt.setName("_txtProtocolInt");
        this._layoutProtocolInt.addChild(this._txtProtocolInt);
        this._txtProtocolInt.setCascadeOpacityEnabled(true);
        this._txtProtocolInt.setCascadeColorEnabled(true);
        this._txtProtocolInt.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtProtocolInt, 0.5, 0.5);
        let _txtProtocolIntLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtProtocolInt);
        _txtProtocolIntLayoutComponent.setPositionPercentXEnabled(true);
        _txtProtocolIntLayoutComponent.setPositionPercentX(0.5);
        _txtProtocolIntLayoutComponent.setPositionPercentYEnabled(true);
        _txtProtocolIntLayoutComponent.setPositionPercentY(0.5);
        this._txtProtocolInt.setTouchEnabled(false);
        this._txtProtocolInt.ignoreContentAdaptWithSize(true);
        this._txtProtocolInt.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtProtocolInt.setDefaultFontSize(22);
        this._txtProtocolInt.setString("int");
        this._txtProtocolInt.setTextHorizontalAlignment(1);
        this._txtProtocolInt.setTextVerticalAlignment(1);

        ///// # _layoutProtocolLong
        this._layoutProtocolLong = new ccui.Layout();
        this._layoutProtocolLong.setName("_layoutProtocolLong");
        this._layoutProtocol.addChild(this._layoutProtocolLong);
        this._layoutProtocolLong.setCascadeOpacityEnabled(true);
        this._layoutProtocolLong.setCascadeColorEnabled(true);
        this._layoutProtocolLong.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutProtocolLong, 0.5769, 0.555);
        let _layoutProtocolLongLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProtocolLong);
        _layoutProtocolLongLayoutComponent.setPositionPercentXEnabled(true);
        _layoutProtocolLongLayoutComponent.setPositionPercentX(0.5769);
        _layoutProtocolLongLayoutComponent.setPositionPercentYEnabled(true);
        _layoutProtocolLongLayoutComponent.setPositionPercentY(0.555);
        this._layoutProtocolLong.setTouchEnabled(true);
        this._layoutProtocolLong.setUnifySizeEnabled(false);
        this._layoutProtocolLong.ignoreContentAdaptWithSize(false);
        this._layoutProtocolLong.setContentSize(cc.size(50.78, 50));
        this._layoutProtocolLong.setBackGroundColorType(1);
        this._layoutProtocolLong.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtProtocolLong
        this._txtProtocolLong = new ck.Text();
        this._txtProtocolLong.setName("_txtProtocolLong");
        this._layoutProtocolLong.addChild(this._txtProtocolLong);
        this._txtProtocolLong.setCascadeOpacityEnabled(true);
        this._txtProtocolLong.setCascadeColorEnabled(true);
        this._txtProtocolLong.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtProtocolLong, 0.5, 0.5);
        let _txtProtocolLongLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtProtocolLong);
        _txtProtocolLongLayoutComponent.setPositionPercentXEnabled(true);
        _txtProtocolLongLayoutComponent.setPositionPercentX(0.5);
        _txtProtocolLongLayoutComponent.setPositionPercentYEnabled(true);
        _txtProtocolLongLayoutComponent.setPositionPercentY(0.5);
        this._txtProtocolLong.setTouchEnabled(false);
        this._txtProtocolLong.ignoreContentAdaptWithSize(true);
        this._txtProtocolLong.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtProtocolLong.setDefaultFontSize(22);
        this._txtProtocolLong.setString("long");
        this._txtProtocolLong.setTextHorizontalAlignment(1);
        this._txtProtocolLong.setTextVerticalAlignment(1);

        ///// # _layoutProtocolDouble
        this._layoutProtocolDouble = new ccui.Layout();
        this._layoutProtocolDouble.setName("_layoutProtocolDouble");
        this._layoutProtocol.addChild(this._layoutProtocolDouble);
        this._layoutProtocolDouble.setCascadeOpacityEnabled(true);
        this._layoutProtocolDouble.setCascadeColorEnabled(true);
        this._layoutProtocolDouble.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutProtocolDouble, 0.6864, 0.555);
        let _layoutProtocolDoubleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProtocolDouble);
        _layoutProtocolDoubleLayoutComponent.setPositionPercentXEnabled(true);
        _layoutProtocolDoubleLayoutComponent.setPositionPercentX(0.6864);
        _layoutProtocolDoubleLayoutComponent.setPositionPercentYEnabled(true);
        _layoutProtocolDoubleLayoutComponent.setPositionPercentY(0.555);
        this._layoutProtocolDouble.setTouchEnabled(true);
        this._layoutProtocolDouble.setUnifySizeEnabled(false);
        this._layoutProtocolDouble.ignoreContentAdaptWithSize(false);
        this._layoutProtocolDouble.setContentSize(cc.size(50.78, 50));
        this._layoutProtocolDouble.setBackGroundColorType(1);
        this._layoutProtocolDouble.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtProtocolDouble
        this._txtProtocolDouble = new ck.Text();
        this._txtProtocolDouble.setName("_txtProtocolDouble");
        this._layoutProtocolDouble.addChild(this._txtProtocolDouble);
        this._txtProtocolDouble.setCascadeOpacityEnabled(true);
        this._txtProtocolDouble.setCascadeColorEnabled(true);
        this._txtProtocolDouble.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtProtocolDouble, 0.5, 0.5);
        let _txtProtocolDoubleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtProtocolDouble);
        _txtProtocolDoubleLayoutComponent.setPositionPercentXEnabled(true);
        _txtProtocolDoubleLayoutComponent.setPositionPercentX(0.5);
        _txtProtocolDoubleLayoutComponent.setPositionPercentYEnabled(true);
        _txtProtocolDoubleLayoutComponent.setPositionPercentY(0.5);
        this._txtProtocolDouble.setTouchEnabled(false);
        this._txtProtocolDouble.ignoreContentAdaptWithSize(true);
        this._txtProtocolDouble.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtProtocolDouble.setDefaultFontSize(22);
        this._txtProtocolDouble.setString("double");
        this._txtProtocolDouble.setTextHorizontalAlignment(1);
        this._txtProtocolDouble.setTextVerticalAlignment(1);

        ///// # _layoutProtocolString
        this._layoutProtocolString = new ccui.Layout();
        this._layoutProtocolString.setName("_layoutProtocolString");
        this._layoutProtocol.addChild(this._layoutProtocolString);
        this._layoutProtocolString.setCascadeOpacityEnabled(true);
        this._layoutProtocolString.setCascadeColorEnabled(true);
        this._layoutProtocolString.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutProtocolString, 0.7948, 0.555);
        let _layoutProtocolStringLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProtocolString);
        _layoutProtocolStringLayoutComponent.setPositionPercentXEnabled(true);
        _layoutProtocolStringLayoutComponent.setPositionPercentX(0.7948);
        _layoutProtocolStringLayoutComponent.setPositionPercentYEnabled(true);
        _layoutProtocolStringLayoutComponent.setPositionPercentY(0.555);
        this._layoutProtocolString.setTouchEnabled(true);
        this._layoutProtocolString.setUnifySizeEnabled(false);
        this._layoutProtocolString.ignoreContentAdaptWithSize(false);
        this._layoutProtocolString.setContentSize(cc.size(50.78, 50));
        this._layoutProtocolString.setBackGroundColorType(1);
        this._layoutProtocolString.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtProtocolString
        this._txtProtocolString = new ck.Text();
        this._txtProtocolString.setName("_txtProtocolString");
        this._layoutProtocolString.addChild(this._txtProtocolString);
        this._txtProtocolString.setCascadeOpacityEnabled(true);
        this._txtProtocolString.setCascadeColorEnabled(true);
        this._txtProtocolString.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtProtocolString, 0.5, 0.5);
        let _txtProtocolStringLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtProtocolString);
        _txtProtocolStringLayoutComponent.setPositionPercentXEnabled(true);
        _txtProtocolStringLayoutComponent.setPositionPercentX(0.5);
        _txtProtocolStringLayoutComponent.setPositionPercentYEnabled(true);
        _txtProtocolStringLayoutComponent.setPositionPercentY(0.5);
        this._txtProtocolString.setTouchEnabled(false);
        this._txtProtocolString.ignoreContentAdaptWithSize(true);
        this._txtProtocolString.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtProtocolString.setDefaultFontSize(22);
        this._txtProtocolString.setString("string");
        this._txtProtocolString.setTextHorizontalAlignment(1);
        this._txtProtocolString.setTextVerticalAlignment(1);

        ///// # _layoutProtocolBool
        this._layoutProtocolBool = new ccui.Layout();
        this._layoutProtocolBool.setName("_layoutProtocolBool");
        this._layoutProtocol.addChild(this._layoutProtocolBool);
        this._layoutProtocolBool.setCascadeOpacityEnabled(true);
        this._layoutProtocolBool.setCascadeColorEnabled(true);
        this._layoutProtocolBool.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutProtocolBool, 0.9037, 0.555);
        let _layoutProtocolBoolLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProtocolBool);
        _layoutProtocolBoolLayoutComponent.setPositionPercentXEnabled(true);
        _layoutProtocolBoolLayoutComponent.setPositionPercentX(0.9037);
        _layoutProtocolBoolLayoutComponent.setPositionPercentYEnabled(true);
        _layoutProtocolBoolLayoutComponent.setPositionPercentY(0.555);
        this._layoutProtocolBool.setTouchEnabled(true);
        this._layoutProtocolBool.setUnifySizeEnabled(false);
        this._layoutProtocolBool.ignoreContentAdaptWithSize(false);
        this._layoutProtocolBool.setContentSize(cc.size(50.78, 50));
        this._layoutProtocolBool.setBackGroundColorType(1);
        this._layoutProtocolBool.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtProtocolBool
        this._txtProtocolBool = new ck.Text();
        this._txtProtocolBool.setName("_txtProtocolBool");
        this._layoutProtocolBool.addChild(this._txtProtocolBool);
        this._txtProtocolBool.setCascadeOpacityEnabled(true);
        this._txtProtocolBool.setCascadeColorEnabled(true);
        this._txtProtocolBool.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtProtocolBool, 0.5, 0.5);
        let _txtProtocolBoolLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtProtocolBool);
        _txtProtocolBoolLayoutComponent.setPositionPercentXEnabled(true);
        _txtProtocolBoolLayoutComponent.setPositionPercentX(0.5);
        _txtProtocolBoolLayoutComponent.setPositionPercentYEnabled(true);
        _txtProtocolBoolLayoutComponent.setPositionPercentY(0.5);
        this._txtProtocolBool.setTouchEnabled(false);
        this._txtProtocolBool.ignoreContentAdaptWithSize(true);
        this._txtProtocolBool.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtProtocolBool.setDefaultFontSize(22);
        this._txtProtocolBool.setString("bool");
        this._txtProtocolBool.setTextHorizontalAlignment(1);
        this._txtProtocolBool.setTextVerticalAlignment(1);

        ///// # _layoutProtocolID
        this._layoutProtocolID = new ccui.Layout();
        this._layoutProtocolID.setName("_layoutProtocolID");
        this._layoutProtocol.addChild(this._layoutProtocolID);
        this._layoutProtocolID.setCascadeOpacityEnabled(true);
        this._layoutProtocolID.setCascadeColorEnabled(true);
        this._layoutProtocolID.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutProtocolID, 0.0274, 0.8357);
        let _layoutProtocolIDLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProtocolID);
        _layoutProtocolIDLayoutComponent.setPositionPercentXEnabled(true);
        _layoutProtocolIDLayoutComponent.setPositionPercentX(0.0274);
        _layoutProtocolIDLayoutComponent.setPositionPercentYEnabled(true);
        _layoutProtocolIDLayoutComponent.setPositionPercentY(0.8357);
        this._layoutProtocolID.setTouchEnabled(true);
        this._layoutProtocolID.setUnifySizeEnabled(false);
        this._layoutProtocolID.ignoreContentAdaptWithSize(false);
        this._layoutProtocolID.setContentSize(cc.size(189.6808, 50));
        this._layoutProtocolID.setBackGroundColorType(1);
        this._layoutProtocolID.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxProtocolID
        this._editBoxProtocolID = new cc.EditBox(cc.size(189.6808, 50), new cc.Scale9Sprite());
        this._editBoxProtocolID.setName("_editBoxProtocolID");
        this._layoutProtocolID.addChild(this._editBoxProtocolID);
        this._editBoxProtocolID.setCascadeOpacityEnabled(true);
        this._editBoxProtocolID.setCascadeColorEnabled(true);
        this._editBoxProtocolID.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxProtocolID, 0.5, 0.46);
        this._editBoxProtocolID.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxProtocolIDLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxProtocolID);
        _editBoxProtocolIDLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxProtocolIDLayoutComponent.setPositionPercentX(0.5);
        _editBoxProtocolIDLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxProtocolIDLayoutComponent.setPositionPercentY(0.46);
        _editBoxProtocolIDLayoutComponent.setPercentWidthEnabled(true);
        _editBoxProtocolIDLayoutComponent.setPercentWidth(1);
        _editBoxProtocolIDLayoutComponent.setPercentHeightEnabled(true);
        _editBoxProtocolIDLayoutComponent.setPercentHeight(1);
        this._editBoxProtocolID.setUnifySizeEnabled(false);
        this._editBoxProtocolID.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxProtocolID, 1, 1);
        this._editBoxProtocolID.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxProtocolID.setFontSize(22);
        this._editBoxProtocolID.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxProtocolID.setPlaceholderFontSize(22);
        this._editBoxProtocolID.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxProtocolID.setPlaceHolder("Packet ID (Ex. 10025)");
        this._editBoxProtocolID.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxProtocolID.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutProtocolClear
        this._layoutProtocolClear = new ccui.Layout();
        this._layoutProtocolClear.setName("_layoutProtocolClear");
        this._layoutProtocol.addChild(this._layoutProtocolClear);
        this._layoutProtocolClear.setCascadeOpacityEnabled(true);
        this._layoutProtocolClear.setCascadeColorEnabled(true);
        this._layoutProtocolClear.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutProtocolClear, 0.5736, 0.8499);
        let _layoutProtocolClearLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProtocolClear);
        _layoutProtocolClearLayoutComponent.setPositionPercentYEnabled(true);
        _layoutProtocolClearLayoutComponent.setPositionPercentY(0.8499);
        this._layoutProtocolClear.setTouchEnabled(true);
        this._layoutProtocolClear.setUnifySizeEnabled(false);
        this._layoutProtocolClear.ignoreContentAdaptWithSize(false);
        this._layoutProtocolClear.setContentSize(cc.size(100, 50));
        this._layoutProtocolClear.setBackGroundColorType(1);
        this._layoutProtocolClear.setBackGroundColor(cc.color(255, 0, 0, 255));

        ///// # _txtProtocolClear
        this._txtProtocolClear = new ck.Text();
        this._txtProtocolClear.setName("_txtProtocolClear");
        this._layoutProtocolClear.addChild(this._txtProtocolClear);
        this._txtProtocolClear.setCascadeOpacityEnabled(true);
        this._txtProtocolClear.setCascadeColorEnabled(true);
        this._txtProtocolClear.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtProtocolClear, 0.5, 0.5);
        let _txtProtocolClearLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtProtocolClear);
        this._txtProtocolClear.setTouchEnabled(false);
        this._txtProtocolClear.ignoreContentAdaptWithSize(true);
        this._txtProtocolClear.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtProtocolClear.setDefaultFontSize(22);
        this._txtProtocolClear.setString("Clear");
        this._txtProtocolClear.setTextHorizontalAlignment(1);
        this._txtProtocolClear.setTextVerticalAlignment(1);

        ///// # _layoutProtocolSend
        this._layoutProtocolSend = new ccui.Layout();
        this._layoutProtocolSend.setName("_layoutProtocolSend");
        this._layoutProtocol.addChild(this._layoutProtocolSend);
        this._layoutProtocolSend.setCascadeOpacityEnabled(true);
        this._layoutProtocolSend.setCascadeColorEnabled(true);
        this._layoutProtocolSend.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutProtocolSend, 0.7466, 0.8499);
        let _layoutProtocolSendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProtocolSend);
        _layoutProtocolSendLayoutComponent.setPositionPercentYEnabled(true);
        _layoutProtocolSendLayoutComponent.setPositionPercentY(0.8499);
        this._layoutProtocolSend.setTouchEnabled(true);
        this._layoutProtocolSend.setUnifySizeEnabled(false);
        this._layoutProtocolSend.ignoreContentAdaptWithSize(false);
        this._layoutProtocolSend.setContentSize(cc.size(100, 50));
        this._layoutProtocolSend.setBackGroundColorType(1);
        this._layoutProtocolSend.setBackGroundColor(cc.color(30, 144, 255, 255));

        ///// # _txtProtocolSet
        this._txtProtocolSet = new ck.Text();
        this._txtProtocolSet.setName("_txtProtocolSet");
        this._layoutProtocolSend.addChild(this._txtProtocolSet);
        this._txtProtocolSet.setCascadeOpacityEnabled(true);
        this._txtProtocolSet.setCascadeColorEnabled(true);
        this._txtProtocolSet.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtProtocolSet, 0.5, 0.5);
        let _txtProtocolSetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtProtocolSet);
        this._txtProtocolSet.setTouchEnabled(false);
        this._txtProtocolSet.ignoreContentAdaptWithSize(true);
        this._txtProtocolSet.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtProtocolSet.setDefaultFontSize(22);
        this._txtProtocolSet.setString("Send");
        this._txtProtocolSet.setTextHorizontalAlignment(1);
        this._txtProtocolSet.setTextVerticalAlignment(1);

        ///// # _layoutCardCollectionHeader
        this._layoutCardCollectionHeader = new ccui.Layout();
        this._layoutCardCollectionHeader.setName("_layoutCardCollectionHeader");
        this._listView.pushBackCustomItem(this._layoutCardCollectionHeader);
        this._layoutCardCollectionHeader.setCascadeOpacityEnabled(true);
        this._layoutCardCollectionHeader.setCascadeColorEnabled(true);
        this._layoutCardCollectionHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCardCollectionHeader, 0.5, 0.4804);
        let _layoutCardCollectionHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCardCollectionHeader);
        this._layoutCardCollectionHeader.setTouchEnabled(true);
        this._layoutCardCollectionHeader.setUnifySizeEnabled(false);
        this._layoutCardCollectionHeader.ignoreContentAdaptWithSize(false);
        this._layoutCardCollectionHeader.setContentSize(cc.size(640, 40));

        ///// # _txtCardCollectionHeader
        this._txtCardCollectionHeader = new ck.Text();
        this._txtCardCollectionHeader.setName("_txtCardCollectionHeader");
        this._layoutCardCollectionHeader.addChild(this._txtCardCollectionHeader);
        this._txtCardCollectionHeader.setCascadeOpacityEnabled(true);
        this._txtCardCollectionHeader.setCascadeColorEnabled(true);
        this._txtCardCollectionHeader.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCardCollectionHeader, 0.07, 0.5);
        let _txtCardCollectionHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCardCollectionHeader);
        _txtCardCollectionHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtCardCollectionHeaderLayoutComponent.setPositionPercentX(0.07);
        _txtCardCollectionHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtCardCollectionHeaderLayoutComponent.setPositionPercentY(0.5);
        this._txtCardCollectionHeader.setTouchEnabled(false);
        this._txtCardCollectionHeader.ignoreContentAdaptWithSize(true);
        this._txtCardCollectionHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCardCollectionHeader.setDefaultFontSize(25);
        this._txtCardCollectionHeader.setString("Card Collection");
        this._txtCardCollectionHeader.setTextHorizontalAlignment(1);
        this._txtCardCollectionHeader.setTextVerticalAlignment(1);
        this._txtCardCollectionHeader.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _lineBot
        this._lineBot = new ccui.Layout();
        this._lineBot.setName("_lineBot");
        this._layoutCardCollectionHeader.addChild(this._lineBot);
        this._lineBot.setCascadeOpacityEnabled(true);
        this._lineBot.setCascadeColorEnabled(true);
        this._lineBot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineBot, 0.5, 0);
        let _lineBotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineBot);
        _lineBotLayoutComponent.setPositionPercentXEnabled(true);
        _lineBotLayoutComponent.setPositionPercentX(0.5);
        _lineBotLayoutComponent.setPositionPercentYEnabled(true);
        _lineBotLayoutComponent.setPositionPercentY(0);
        _lineBotLayoutComponent.setPercentWidthEnabled(true);
        _lineBotLayoutComponent.setPercentWidth(0.97);
        this._lineBot.setTouchEnabled(false);
        this._lineBot.setUnifySizeEnabled(false);
        this._lineBot.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineBot, 0.97);
        this._lineBot.setContentSize(cc.size(this._lineBot.width, 3));
        this._lineBot.setBackGroundColorType(1);
        this._lineBot.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _lineTop
        this._lineTop = new ccui.Layout();
        this._lineTop.setName("_lineTop");
        this._layoutCardCollectionHeader.addChild(this._lineTop);
        this._lineTop.setCascadeOpacityEnabled(true);
        this._lineTop.setCascadeColorEnabled(true);
        this._lineTop.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineTop, 0.5, 1);
        let _lineTopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineTop);
        _lineTopLayoutComponent.setPositionPercentXEnabled(true);
        _lineTopLayoutComponent.setPositionPercentX(0.5);
        _lineTopLayoutComponent.setPositionPercentYEnabled(true);
        _lineTopLayoutComponent.setPositionPercentY(1);
        _lineTopLayoutComponent.setPercentWidthEnabled(true);
        _lineTopLayoutComponent.setPercentWidth(0.97);
        this._lineTop.setTouchEnabled(false);
        this._lineTop.setUnifySizeEnabled(false);
        this._lineTop.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineTop, 0.97);
        this._lineTop.setContentSize(cc.size(this._lineTop.width, 3));
        this._lineTop.setBackGroundColorType(1);
        this._lineTop.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _imgExpandCardCollection
        this._imgExpandCardCollection = new ccui.ImageView();
        this._imgExpandCardCollection.setName("_imgExpandCardCollection");
        this._layoutCardCollectionHeader.addChild(this._imgExpandCardCollection);
        this._imgExpandCardCollection.setCascadeOpacityEnabled(true);
        this._imgExpandCardCollection.setCascadeColorEnabled(true);
        this._imgExpandCardCollection.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgExpandCardCollection, 0.04, 0.5);
        this._imgExpandCardCollection.setScale(0.5, 0.5);
        this._imgExpandCardCollection.setRotation(-90);
        this._imgExpandCardCollection.setFlippedY(true);
        let _imgExpandCardCollectionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExpandCardCollection);
        _imgExpandCardCollectionLayoutComponent.setPositionPercentXEnabled(true);
        _imgExpandCardCollectionLayoutComponent.setPositionPercentX(0.04);
        _imgExpandCardCollectionLayoutComponent.setPositionPercentYEnabled(true);
        _imgExpandCardCollectionLayoutComponent.setPositionPercentY(0.5);
        this._imgExpandCardCollection.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgExpandCardCollection.setUnifySizeEnabled(false);
        this._imgExpandCardCollection.ignoreContentAdaptWithSize(false);
        this._imgExpandCardCollection.setContentSize(cc.size(32, 32));
        this._imgExpandCardCollection.setTouchEnabled(false);
        this._imgExpandCardCollection.setFlippedY(true);

        ///// # _imgCollapseCardCollection
        this._imgCollapseCardCollection = new ccui.ImageView();
        this._imgCollapseCardCollection.setName("_imgCollapseCardCollection");
        this._layoutCardCollectionHeader.addChild(this._imgCollapseCardCollection);
        this._imgCollapseCardCollection.setCascadeOpacityEnabled(true);
        this._imgCollapseCardCollection.setCascadeColorEnabled(true);
        this._imgCollapseCardCollection.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCollapseCardCollection, 0.04, 0.5);
        this._imgCollapseCardCollection.setScale(0.5, 0.5);
        this._imgCollapseCardCollection.setRotation(180);
        let _imgCollapseCardCollectionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCollapseCardCollection);
        _imgCollapseCardCollectionLayoutComponent.setPositionPercentXEnabled(true);
        _imgCollapseCardCollectionLayoutComponent.setPositionPercentX(0.04);
        _imgCollapseCardCollectionLayoutComponent.setPositionPercentYEnabled(true);
        _imgCollapseCardCollectionLayoutComponent.setPositionPercentY(0.5);
        this._imgCollapseCardCollection.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgCollapseCardCollection.setUnifySizeEnabled(false);
        this._imgCollapseCardCollection.ignoreContentAdaptWithSize(false);
        this._imgCollapseCardCollection.setContentSize(cc.size(32, 32));
        this._imgCollapseCardCollection.setTouchEnabled(false);

        ///// # _layoutCardCollection
        this._layoutCardCollection = new ccui.Layout();
        this._layoutCardCollection.setName("_layoutCardCollection");
        this._listView.pushBackCustomItem(this._layoutCardCollection);
        this._layoutCardCollection.setCascadeOpacityEnabled(true);
        this._layoutCardCollection.setCascadeColorEnabled(true);
        this._layoutCardCollection.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCardCollection, 0.5, 0.4195);
        let _layoutCardCollectionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCardCollection);
        this._layoutCardCollection.setTouchEnabled(false);
        this._layoutCardCollection.setUnifySizeEnabled(false);
        this._layoutCardCollection.ignoreContentAdaptWithSize(false);
        this._layoutCardCollection.setContentSize(cc.size(640, 376));

        ///// # _layoutCardCollectionCard
        this._layoutCardCollectionCard = new ccui.Layout();
        this._layoutCardCollectionCard.setName("_layoutCardCollectionCard");
        this._layoutCardCollection.addChild(this._layoutCardCollectionCard);
        this._layoutCardCollectionCard.setCascadeOpacityEnabled(true);
        this._layoutCardCollectionCard.setCascadeColorEnabled(true);
        this._layoutCardCollectionCard.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutCardCollectionCard, 0.5, 1);
        let _layoutCardCollectionCardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCardCollectionCard);
        _layoutCardCollectionCardLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCardCollectionCardLayoutComponent.setPositionPercentX(0.5);
        _layoutCardCollectionCardLayoutComponent.setPercentWidthEnabled(true);
        _layoutCardCollectionCardLayoutComponent.setPercentWidth(1);
        this._layoutCardCollectionCard.setTouchEnabled(false);
        this._layoutCardCollectionCard.setUnifySizeEnabled(false);
        this._layoutCardCollectionCard.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutCardCollectionCard, 1);
        this._layoutCardCollectionCard.setContentSize(cc.size(this._layoutCardCollectionCard.width, 99));

        ///// # _txtCardCollectionCardNote
        this._txtCardCollectionCardNote = new ck.Text();
        this._txtCardCollectionCardNote.setName("_txtCardCollectionCardNote");
        this._layoutCardCollectionCard.addChild(this._txtCardCollectionCardNote);
        this._txtCardCollectionCardNote.setCascadeOpacityEnabled(true);
        this._txtCardCollectionCardNote.setCascadeColorEnabled(true);
        this._txtCardCollectionCardNote.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtCardCollectionCardNote, 0.0212, 1);
        let _txtCardCollectionCardNoteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCardCollectionCardNote);
        _txtCardCollectionCardNoteLayoutComponent.setPositionPercentYEnabled(true);
        _txtCardCollectionCardNoteLayoutComponent.setPositionPercentY(1);
        this._txtCardCollectionCardNote.setTouchEnabled(false);
        this._txtCardCollectionCardNote.setUnifySizeEnabled(false);
        this._txtCardCollectionCardNote.ignoreContentAdaptWithSize(false);
        this._txtCardCollectionCardNote.setContentSize(cc.size(615, 48));
        this._txtCardCollectionCardNote.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCardCollectionCardNote.setDefaultFontSize(20);
        this._txtCardCollectionCardNote.setString("Card ID: 1501-1506, 1521-1526, 1541-1546, 1561-1566, 1581-1586, 1601-1606\nJoker card ID: 1301");
        this._txtCardCollectionCardNote.setTextHorizontalAlignment(0);
        this._txtCardCollectionCardNote.setTextVerticalAlignment(1);
        this._txtCardCollectionCardNote.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutBoxCardCollectionCard
        this._layoutBoxCardCollectionCard = new ccui.Layout();
        this._layoutBoxCardCollectionCard.setName("_layoutBoxCardCollectionCard");
        this._layoutCardCollectionCard.addChild(this._layoutBoxCardCollectionCard);
        this._layoutBoxCardCollectionCard.setCascadeOpacityEnabled(true);
        this._layoutBoxCardCollectionCard.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutBoxCardCollectionCard, 0.0234, 0);
        let _layoutBoxCardCollectionCardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBoxCardCollectionCard);
        _layoutBoxCardCollectionCardLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBoxCardCollectionCardLayoutComponent.setPositionPercentY(0);
        this._layoutBoxCardCollectionCard.setTouchEnabled(true);
        this._layoutBoxCardCollectionCard.setUnifySizeEnabled(false);
        this._layoutBoxCardCollectionCard.ignoreContentAdaptWithSize(false);
        this._layoutBoxCardCollectionCard.setContentSize(cc.size(510.63, 50));
        this._layoutBoxCardCollectionCard.setBackGroundColorType(1);
        this._layoutBoxCardCollectionCard.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxCardCollectionCard
        this._editBoxCardCollectionCard = new cc.EditBox(cc.size(510.63, 50), new cc.Scale9Sprite());
        this._editBoxCardCollectionCard.setName("_editBoxCardCollectionCard");
        this._layoutBoxCardCollectionCard.addChild(this._editBoxCardCollectionCard);
        this._editBoxCardCollectionCard.setCascadeOpacityEnabled(true);
        this._editBoxCardCollectionCard.setCascadeColorEnabled(true);
        this._editBoxCardCollectionCard.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxCardCollectionCard, 0.5, 0.5);
        this._editBoxCardCollectionCard.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxCardCollectionCardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxCardCollectionCard);
        _editBoxCardCollectionCardLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxCardCollectionCardLayoutComponent.setPositionPercentX(0.5);
        _editBoxCardCollectionCardLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxCardCollectionCardLayoutComponent.setPositionPercentY(0.5);
        _editBoxCardCollectionCardLayoutComponent.setPercentWidthEnabled(true);
        _editBoxCardCollectionCardLayoutComponent.setPercentWidth(1);
        _editBoxCardCollectionCardLayoutComponent.setPercentHeightEnabled(true);
        _editBoxCardCollectionCardLayoutComponent.setPercentHeight(1);
        this._editBoxCardCollectionCard.setUnifySizeEnabled(false);
        this._editBoxCardCollectionCard.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxCardCollectionCard, 1, 1);
        this._editBoxCardCollectionCard.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxCardCollectionCard.setFontSize(22);
        this._editBoxCardCollectionCard.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxCardCollectionCard.setPlaceholderFontSize(22);
        this._editBoxCardCollectionCard.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxCardCollectionCard.setPlaceHolder("cardID;amount (Ex. 1501;3)");
        this._editBoxCardCollectionCard.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxCardCollectionCard.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutAddCardCollectionCard
        this._layoutAddCardCollectionCard = new ccui.Layout();
        this._layoutAddCardCollectionCard.setName("_layoutAddCardCollectionCard");
        this._layoutCardCollectionCard.addChild(this._layoutAddCardCollectionCard);
        this._layoutAddCardCollectionCard.setCascadeOpacityEnabled(true);
        this._layoutAddCardCollectionCard.setCascadeColorEnabled(true);
        this._layoutAddCardCollectionCard.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._layoutAddCardCollectionCard, 0.9922, 0);
        let _layoutAddCardCollectionCardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAddCardCollectionCard);
        _layoutAddCardCollectionCardLayoutComponent.setPositionPercentYEnabled(true);
        _layoutAddCardCollectionCardLayoutComponent.setPositionPercentY(0);
        this._layoutAddCardCollectionCard.setTouchEnabled(true);
        this._layoutAddCardCollectionCard.setUnifySizeEnabled(false);
        this._layoutAddCardCollectionCard.ignoreContentAdaptWithSize(false);
        this._layoutAddCardCollectionCard.setContentSize(cc.size(100, 50));
        this._layoutAddCardCollectionCard.setBackGroundColorType(1);
        this._layoutAddCardCollectionCard.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtAddCardCollectionCard
        this._txtAddCardCollectionCard = new ck.Text();
        this._txtAddCardCollectionCard.setName("_txtAddCardCollectionCard");
        this._layoutAddCardCollectionCard.addChild(this._txtAddCardCollectionCard);
        this._txtAddCardCollectionCard.setCascadeOpacityEnabled(true);
        this._txtAddCardCollectionCard.setCascadeColorEnabled(true);
        this._txtAddCardCollectionCard.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAddCardCollectionCard, 0.5, 0.5);
        let _txtAddCardCollectionCardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAddCardCollectionCard);
        this._txtAddCardCollectionCard.setTouchEnabled(false);
        this._txtAddCardCollectionCard.ignoreContentAdaptWithSize(true);
        this._txtAddCardCollectionCard.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAddCardCollectionCard.setDefaultFontSize(22);
        this._txtAddCardCollectionCard.setString("Add");
        this._txtAddCardCollectionCard.setTextHorizontalAlignment(1);
        this._txtAddCardCollectionCard.setTextVerticalAlignment(1);

        ///// # _layoutCardCollectionCardSet
        this._layoutCardCollectionCardSet = new ccui.Layout();
        this._layoutCardCollectionCardSet.setName("_layoutCardCollectionCardSet");
        this._layoutCardCollection.addChild(this._layoutCardCollectionCardSet);
        this._layoutCardCollectionCardSet.setCascadeOpacityEnabled(true);
        this._layoutCardCollectionCardSet.setCascadeColorEnabled(true);
        this._layoutCardCollectionCardSet.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutCardCollectionCardSet, 0.5, 0.734);
        let _layoutCardCollectionCardSetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCardCollectionCardSet);
        _layoutCardCollectionCardSetLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCardCollectionCardSetLayoutComponent.setPositionPercentX(0.5);
        _layoutCardCollectionCardSetLayoutComponent.setPercentWidthEnabled(true);
        _layoutCardCollectionCardSetLayoutComponent.setPercentWidth(1);
        this._layoutCardCollectionCardSet.setTouchEnabled(false);
        this._layoutCardCollectionCardSet.setUnifySizeEnabled(false);
        this._layoutCardCollectionCardSet.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutCardCollectionCardSet, 1);
        this._layoutCardCollectionCardSet.setContentSize(cc.size(this._layoutCardCollectionCardSet.width, 75));

        ///// # _txtCardCollectionCardSetNote
        this._txtCardCollectionCardSetNote = new ck.Text();
        this._txtCardCollectionCardSetNote.setName("_txtCardCollectionCardSetNote");
        this._layoutCardCollectionCardSet.addChild(this._txtCardCollectionCardSetNote);
        this._txtCardCollectionCardSetNote.setCascadeOpacityEnabled(true);
        this._txtCardCollectionCardSetNote.setCascadeColorEnabled(true);
        this._txtCardCollectionCardSetNote.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtCardCollectionCardSetNote, 0.0212, 1);
        let _txtCardCollectionCardSetNoteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCardCollectionCardSetNote);
        _txtCardCollectionCardSetNoteLayoutComponent.setPositionPercentYEnabled(true);
        _txtCardCollectionCardSetNoteLayoutComponent.setPositionPercentY(1);
        this._txtCardCollectionCardSetNote.setTouchEnabled(false);
        this._txtCardCollectionCardSetNote.setUnifySizeEnabled(false);
        this._txtCardCollectionCardSetNote.ignoreContentAdaptWithSize(false);
        this._txtCardCollectionCardSetNote.setContentSize(cc.size(415, 24));
        this._txtCardCollectionCardSetNote.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCardCollectionCardSetNote.setDefaultFontSize(20);
        this._txtCardCollectionCardSetNote.setString("Card Set ID: 1401-1406");
        this._txtCardCollectionCardSetNote.setTextHorizontalAlignment(0);
        this._txtCardCollectionCardSetNote.setTextVerticalAlignment(1);
        this._txtCardCollectionCardSetNote.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutBoxCardCollectionCardSet
        this._layoutBoxCardCollectionCardSet = new ccui.Layout();
        this._layoutBoxCardCollectionCardSet.setName("_layoutBoxCardCollectionCardSet");
        this._layoutCardCollectionCardSet.addChild(this._layoutBoxCardCollectionCardSet);
        this._layoutBoxCardCollectionCardSet.setCascadeOpacityEnabled(true);
        this._layoutBoxCardCollectionCardSet.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutBoxCardCollectionCardSet, 0.0234, 0);
        let _layoutBoxCardCollectionCardSetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBoxCardCollectionCardSet);
        _layoutBoxCardCollectionCardSetLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBoxCardCollectionCardSetLayoutComponent.setPositionPercentY(0);
        this._layoutBoxCardCollectionCardSet.setTouchEnabled(true);
        this._layoutBoxCardCollectionCardSet.setUnifySizeEnabled(false);
        this._layoutBoxCardCollectionCardSet.ignoreContentAdaptWithSize(false);
        this._layoutBoxCardCollectionCardSet.setContentSize(cc.size(510.63, 50));
        this._layoutBoxCardCollectionCardSet.setBackGroundColorType(1);
        this._layoutBoxCardCollectionCardSet.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxCardCollectionCardSet
        this._editBoxCardCollectionCardSet = new cc.EditBox(cc.size(510.63, 50), new cc.Scale9Sprite());
        this._editBoxCardCollectionCardSet.setName("_editBoxCardCollectionCardSet");
        this._layoutBoxCardCollectionCardSet.addChild(this._editBoxCardCollectionCardSet);
        this._editBoxCardCollectionCardSet.setCascadeOpacityEnabled(true);
        this._editBoxCardCollectionCardSet.setCascadeColorEnabled(true);
        this._editBoxCardCollectionCardSet.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxCardCollectionCardSet, 0.5, 0.5);
        this._editBoxCardCollectionCardSet.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxCardCollectionCardSetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxCardCollectionCardSet);
        _editBoxCardCollectionCardSetLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxCardCollectionCardSetLayoutComponent.setPositionPercentX(0.5);
        _editBoxCardCollectionCardSetLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxCardCollectionCardSetLayoutComponent.setPositionPercentY(0.5);
        _editBoxCardCollectionCardSetLayoutComponent.setPercentWidthEnabled(true);
        _editBoxCardCollectionCardSetLayoutComponent.setPercentWidth(1);
        _editBoxCardCollectionCardSetLayoutComponent.setPercentHeightEnabled(true);
        _editBoxCardCollectionCardSetLayoutComponent.setPercentHeight(1);
        this._editBoxCardCollectionCardSet.setUnifySizeEnabled(false);
        this._editBoxCardCollectionCardSet.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxCardCollectionCardSet, 1, 1);
        this._editBoxCardCollectionCardSet.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxCardCollectionCardSet.setFontSize(22);
        this._editBoxCardCollectionCardSet.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxCardCollectionCardSet.setPlaceholderFontSize(22);
        this._editBoxCardCollectionCardSet.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxCardCollectionCardSet.setPlaceHolder("cardSetID;amount (Ex. 1401;1)");
        this._editBoxCardCollectionCardSet.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxCardCollectionCardSet.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutAddCardCollectionCardSet
        this._layoutAddCardCollectionCardSet = new ccui.Layout();
        this._layoutAddCardCollectionCardSet.setName("_layoutAddCardCollectionCardSet");
        this._layoutCardCollectionCardSet.addChild(this._layoutAddCardCollectionCardSet);
        this._layoutAddCardCollectionCardSet.setCascadeOpacityEnabled(true);
        this._layoutAddCardCollectionCardSet.setCascadeColorEnabled(true);
        this._layoutAddCardCollectionCardSet.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._layoutAddCardCollectionCardSet, 0.9922, 0);
        let _layoutAddCardCollectionCardSetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAddCardCollectionCardSet);
        _layoutAddCardCollectionCardSetLayoutComponent.setPositionPercentYEnabled(true);
        _layoutAddCardCollectionCardSetLayoutComponent.setPositionPercentY(0);
        this._layoutAddCardCollectionCardSet.setTouchEnabled(true);
        this._layoutAddCardCollectionCardSet.setUnifySizeEnabled(false);
        this._layoutAddCardCollectionCardSet.ignoreContentAdaptWithSize(false);
        this._layoutAddCardCollectionCardSet.setContentSize(cc.size(100, 50));
        this._layoutAddCardCollectionCardSet.setBackGroundColorType(1);
        this._layoutAddCardCollectionCardSet.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtAddCardCollectionCardSet
        this._txtAddCardCollectionCardSet = new ck.Text();
        this._txtAddCardCollectionCardSet.setName("_txtAddCardCollectionCardSet");
        this._layoutAddCardCollectionCardSet.addChild(this._txtAddCardCollectionCardSet);
        this._txtAddCardCollectionCardSet.setCascadeOpacityEnabled(true);
        this._txtAddCardCollectionCardSet.setCascadeColorEnabled(true);
        this._txtAddCardCollectionCardSet.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAddCardCollectionCardSet, 0.5, 0.5);
        let _txtAddCardCollectionCardSetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAddCardCollectionCardSet);
        this._txtAddCardCollectionCardSet.setTouchEnabled(false);
        this._txtAddCardCollectionCardSet.ignoreContentAdaptWithSize(true);
        this._txtAddCardCollectionCardSet.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAddCardCollectionCardSet.setDefaultFontSize(22);
        this._txtAddCardCollectionCardSet.setString("Add");
        this._txtAddCardCollectionCardSet.setTextHorizontalAlignment(1);
        this._txtAddCardCollectionCardSet.setTextVerticalAlignment(1);

        ///// # _layoutCardCollectionChance
        this._layoutCardCollectionChance = new ccui.Layout();
        this._layoutCardCollectionChance.setName("_layoutCardCollectionChance");
        this._layoutCardCollection.addChild(this._layoutCardCollectionChance);
        this._layoutCardCollectionChance.setCascadeOpacityEnabled(true);
        this._layoutCardCollectionChance.setCascadeColorEnabled(true);
        this._layoutCardCollectionChance.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutCardCollectionChance, 0.5, 0.5372);
        let _layoutCardCollectionChanceLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCardCollectionChance);
        _layoutCardCollectionChanceLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCardCollectionChanceLayoutComponent.setPositionPercentX(0.5);
        _layoutCardCollectionChanceLayoutComponent.setPercentWidthEnabled(true);
        _layoutCardCollectionChanceLayoutComponent.setPercentWidth(1);
        this._layoutCardCollectionChance.setTouchEnabled(false);
        this._layoutCardCollectionChance.setUnifySizeEnabled(false);
        this._layoutCardCollectionChance.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutCardCollectionChance, 1);
        this._layoutCardCollectionChance.setContentSize(cc.size(this._layoutCardCollectionChance.width, 147));

        ///// # _txtCardCollectionChanceNote
        this._txtCardCollectionChanceNote = new ck.Text();
        this._txtCardCollectionChanceNote.setName("_txtCardCollectionChanceNote");
        this._layoutCardCollectionChance.addChild(this._txtCardCollectionChanceNote);
        this._txtCardCollectionChanceNote.setCascadeOpacityEnabled(true);
        this._txtCardCollectionChanceNote.setCascadeColorEnabled(true);
        this._txtCardCollectionChanceNote.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtCardCollectionChanceNote, 0.0212, 1);
        let _txtCardCollectionChanceNoteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCardCollectionChanceNote);
        _txtCardCollectionChanceNoteLayoutComponent.setPositionPercentYEnabled(true);
        _txtCardCollectionChanceNoteLayoutComponent.setPositionPercentY(1);
        this._txtCardCollectionChanceNote.setTouchEnabled(false);
        this._txtCardCollectionChanceNote.setUnifySizeEnabled(false);
        this._txtCardCollectionChanceNote.ignoreContentAdaptWithSize(false);
        this._txtCardCollectionChanceNote.setContentSize(cc.size(615, 96));
        this._txtCardCollectionChanceNote.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCardCollectionChanceNote.setDefaultFontSize(20);
        this._txtCardCollectionChanceNote.setString("Chance Type: 1 - From Card, 2 - From Pisti, 3 - From Double Pisti, 4 - From Win\nor Chance Type là 1 trong các Card ID (1501,...)\nChance: Min: 0, Max: 1\nSub Type (Dành cho From Card): 1 - Normal Cards, 2 - Special Cards, 3 - All");
        this._txtCardCollectionChanceNote.setTextHorizontalAlignment(0);
        this._txtCardCollectionChanceNote.setTextVerticalAlignment(1);
        this._txtCardCollectionChanceNote.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutBoxCardCollectionChance
        this._layoutBoxCardCollectionChance = new ccui.Layout();
        this._layoutBoxCardCollectionChance.setName("_layoutBoxCardCollectionChance");
        this._layoutCardCollectionChance.addChild(this._layoutBoxCardCollectionChance);
        this._layoutBoxCardCollectionChance.setCascadeOpacityEnabled(true);
        this._layoutBoxCardCollectionChance.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutBoxCardCollectionChance, 0.0234, 0);
        let _layoutBoxCardCollectionChanceLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBoxCardCollectionChance);
        _layoutBoxCardCollectionChanceLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBoxCardCollectionChanceLayoutComponent.setPositionPercentY(0);
        this._layoutBoxCardCollectionChance.setTouchEnabled(true);
        this._layoutBoxCardCollectionChance.setUnifySizeEnabled(false);
        this._layoutBoxCardCollectionChance.ignoreContentAdaptWithSize(false);
        this._layoutBoxCardCollectionChance.setContentSize(cc.size(510.63, 50));
        this._layoutBoxCardCollectionChance.setBackGroundColorType(1);
        this._layoutBoxCardCollectionChance.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxCardCollectionChance
        this._editBoxCardCollectionChance = new cc.EditBox(cc.size(510.63, 50), new cc.Scale9Sprite());
        this._editBoxCardCollectionChance.setName("_editBoxCardCollectionChance");
        this._layoutBoxCardCollectionChance.addChild(this._editBoxCardCollectionChance);
        this._editBoxCardCollectionChance.setCascadeOpacityEnabled(true);
        this._editBoxCardCollectionChance.setCascadeColorEnabled(true);
        this._editBoxCardCollectionChance.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxCardCollectionChance, 0.5, 0.5);
        this._editBoxCardCollectionChance.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxCardCollectionChanceLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxCardCollectionChance);
        _editBoxCardCollectionChanceLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxCardCollectionChanceLayoutComponent.setPositionPercentX(0.5);
        _editBoxCardCollectionChanceLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxCardCollectionChanceLayoutComponent.setPositionPercentY(0.5);
        _editBoxCardCollectionChanceLayoutComponent.setPercentWidthEnabled(true);
        _editBoxCardCollectionChanceLayoutComponent.setPercentWidth(1);
        _editBoxCardCollectionChanceLayoutComponent.setPercentHeightEnabled(true);
        _editBoxCardCollectionChanceLayoutComponent.setPercentHeight(1);
        this._editBoxCardCollectionChance.setUnifySizeEnabled(false);
        this._editBoxCardCollectionChance.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxCardCollectionChance, 1, 1);
        this._editBoxCardCollectionChance.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxCardCollectionChance.setFontSize(22);
        this._editBoxCardCollectionChance.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxCardCollectionChance.setPlaceholderFontSize(22);
        this._editBoxCardCollectionChance.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxCardCollectionChance.setPlaceHolder("chanceType;chance;subType (Ex. 1;1;1 or 1501;1)");
        this._editBoxCardCollectionChance.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxCardCollectionChance.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutUseCardCollectionChance
        this._layoutUseCardCollectionChance = new ccui.Layout();
        this._layoutUseCardCollectionChance.setName("_layoutUseCardCollectionChance");
        this._layoutCardCollectionChance.addChild(this._layoutUseCardCollectionChance);
        this._layoutUseCardCollectionChance.setCascadeOpacityEnabled(true);
        this._layoutUseCardCollectionChance.setCascadeColorEnabled(true);
        this._layoutUseCardCollectionChance.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._layoutUseCardCollectionChance, 0.9922, 0);
        let _layoutUseCardCollectionChanceLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutUseCardCollectionChance);
        _layoutUseCardCollectionChanceLayoutComponent.setPositionPercentYEnabled(true);
        _layoutUseCardCollectionChanceLayoutComponent.setPositionPercentY(0);
        this._layoutUseCardCollectionChance.setTouchEnabled(true);
        this._layoutUseCardCollectionChance.setUnifySizeEnabled(false);
        this._layoutUseCardCollectionChance.ignoreContentAdaptWithSize(false);
        this._layoutUseCardCollectionChance.setContentSize(cc.size(100, 50));
        this._layoutUseCardCollectionChance.setBackGroundColorType(1);
        this._layoutUseCardCollectionChance.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtUseCardCollectionChance
        this._txtUseCardCollectionChance = new ck.Text();
        this._txtUseCardCollectionChance.setName("_txtUseCardCollectionChance");
        this._layoutUseCardCollectionChance.addChild(this._txtUseCardCollectionChance);
        this._txtUseCardCollectionChance.setCascadeOpacityEnabled(true);
        this._txtUseCardCollectionChance.setCascadeColorEnabled(true);
        this._txtUseCardCollectionChance.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtUseCardCollectionChance, 0.5, 0.5);
        let _txtUseCardCollectionChanceLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtUseCardCollectionChance);
        this._txtUseCardCollectionChance.setTouchEnabled(false);
        this._txtUseCardCollectionChance.ignoreContentAdaptWithSize(true);
        this._txtUseCardCollectionChance.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtUseCardCollectionChance.setDefaultFontSize(22);
        this._txtUseCardCollectionChance.setString("Use");
        this._txtUseCardCollectionChance.setTextHorizontalAlignment(1);
        this._txtUseCardCollectionChance.setTextVerticalAlignment(1);

        ///// # _layoutCardCollectionButtons
        this._layoutCardCollectionButtons = new ccui.Layout();
        this._layoutCardCollectionButtons.setName("_layoutCardCollectionButtons");
        this._layoutCardCollection.addChild(this._layoutCardCollectionButtons);
        this._layoutCardCollectionButtons.setCascadeOpacityEnabled(true);
        this._layoutCardCollectionButtons.setCascadeColorEnabled(true);
        this._layoutCardCollectionButtons.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutCardCollectionButtons, 0.5, 0.1463);
        let _layoutCardCollectionButtonsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCardCollectionButtons);
        _layoutCardCollectionButtonsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCardCollectionButtonsLayoutComponent.setPositionPercentX(0.5);
        _layoutCardCollectionButtonsLayoutComponent.setPercentWidthEnabled(true);
        _layoutCardCollectionButtonsLayoutComponent.setPercentWidth(1);
        this._layoutCardCollectionButtons.setTouchEnabled(false);
        this._layoutCardCollectionButtons.setUnifySizeEnabled(false);
        this._layoutCardCollectionButtons.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutCardCollectionButtons, 1);
        this._layoutCardCollectionButtons.setContentSize(cc.size(this._layoutCardCollectionButtons.width, 55));

        ///// # _layoutAddCardCollectionAllSets
        this._layoutAddCardCollectionAllSets = new ccui.Layout();
        this._layoutAddCardCollectionAllSets.setName("_layoutAddCardCollectionAllSets");
        this._layoutCardCollectionButtons.addChild(this._layoutAddCardCollectionAllSets);
        this._layoutAddCardCollectionAllSets.setCascadeOpacityEnabled(true);
        this._layoutAddCardCollectionAllSets.setCascadeColorEnabled(true);
        this._layoutAddCardCollectionAllSets.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._layoutAddCardCollectionAllSets, 0.9922, 0);
        let _layoutAddCardCollectionAllSetsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAddCardCollectionAllSets);
        _layoutAddCardCollectionAllSetsLayoutComponent.setPositionPercentYEnabled(true);
        _layoutAddCardCollectionAllSetsLayoutComponent.setPositionPercentY(0);
        this._layoutAddCardCollectionAllSets.setTouchEnabled(true);
        this._layoutAddCardCollectionAllSets.setUnifySizeEnabled(false);
        this._layoutAddCardCollectionAllSets.ignoreContentAdaptWithSize(false);
        this._layoutAddCardCollectionAllSets.setContentSize(cc.size(100, 50));
        this._layoutAddCardCollectionAllSets.setBackGroundColorType(1);
        this._layoutAddCardCollectionAllSets.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtAddCardCollectionAllSets
        this._txtAddCardCollectionAllSets = new ck.Text();
        this._txtAddCardCollectionAllSets.setName("_txtAddCardCollectionAllSets");
        this._layoutAddCardCollectionAllSets.addChild(this._txtAddCardCollectionAllSets);
        this._txtAddCardCollectionAllSets.setCascadeOpacityEnabled(true);
        this._txtAddCardCollectionAllSets.setCascadeColorEnabled(true);
        this._txtAddCardCollectionAllSets.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAddCardCollectionAllSets, 0.5, 0.5);
        let _txtAddCardCollectionAllSetsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAddCardCollectionAllSets);
        this._txtAddCardCollectionAllSets.setTouchEnabled(false);
        this._txtAddCardCollectionAllSets.ignoreContentAdaptWithSize(true);
        this._txtAddCardCollectionAllSets.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAddCardCollectionAllSets.setDefaultFontSize(18);
        this._txtAddCardCollectionAllSets.setString("Complete All Sets");
        this._txtAddCardCollectionAllSets.setTextHorizontalAlignment(1);
        this._txtAddCardCollectionAllSets.setTextVerticalAlignment(1);

        ///// # _layoutUseCardCollectionClearChance
        this._layoutUseCardCollectionClearChance = new ccui.Layout();
        this._layoutUseCardCollectionClearChance.setName("_layoutUseCardCollectionClearChance");
        this._layoutCardCollectionButtons.addChild(this._layoutUseCardCollectionClearChance);
        this._layoutUseCardCollectionClearChance.setCascadeOpacityEnabled(true);
        this._layoutUseCardCollectionClearChance.setCascadeColorEnabled(true);
        this._layoutUseCardCollectionClearChance.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._layoutUseCardCollectionClearChance, 0.8203, 0);
        let _layoutUseCardCollectionClearChanceLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutUseCardCollectionClearChance);
        _layoutUseCardCollectionClearChanceLayoutComponent.setPositionPercentYEnabled(true);
        _layoutUseCardCollectionClearChanceLayoutComponent.setPositionPercentY(0);
        this._layoutUseCardCollectionClearChance.setTouchEnabled(true);
        this._layoutUseCardCollectionClearChance.setUnifySizeEnabled(false);
        this._layoutUseCardCollectionClearChance.ignoreContentAdaptWithSize(false);
        this._layoutUseCardCollectionClearChance.setContentSize(cc.size(100, 50));
        this._layoutUseCardCollectionClearChance.setBackGroundColorType(1);
        this._layoutUseCardCollectionClearChance.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtUseCardCollectionClearChance
        this._txtUseCardCollectionClearChance = new ck.Text();
        this._txtUseCardCollectionClearChance.setName("_txtUseCardCollectionClearChance");
        this._layoutUseCardCollectionClearChance.addChild(this._txtUseCardCollectionClearChance);
        this._txtUseCardCollectionClearChance.setCascadeOpacityEnabled(true);
        this._txtUseCardCollectionClearChance.setCascadeColorEnabled(true);
        this._txtUseCardCollectionClearChance.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtUseCardCollectionClearChance, 0.5, 0.5);
        let _txtUseCardCollectionClearChanceLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtUseCardCollectionClearChance);
        this._txtUseCardCollectionClearChance.setTouchEnabled(false);
        this._txtUseCardCollectionClearChance.ignoreContentAdaptWithSize(true);
        this._txtUseCardCollectionClearChance.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtUseCardCollectionClearChance.setDefaultFontSize(18);
        this._txtUseCardCollectionClearChance.setString("Clear All\nCheat Chance");
        this._txtUseCardCollectionClearChance.setTextHorizontalAlignment(1);
        this._txtUseCardCollectionClearChance.setTextVerticalAlignment(1);

        ///// # _layoutShareImageHeader
        this._layoutShareImageHeader = new ccui.Layout();
        this._layoutShareImageHeader.setName("_layoutShareImageHeader");
        this._listView.pushBackCustomItem(this._layoutShareImageHeader);
        this._layoutShareImageHeader.setCascadeOpacityEnabled(true);
        this._layoutShareImageHeader.setCascadeColorEnabled(true);
        this._layoutShareImageHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutShareImageHeader, 0.5, 0.3587);
        let _layoutShareImageHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutShareImageHeader);
        this._layoutShareImageHeader.setTouchEnabled(true);
        this._layoutShareImageHeader.setUnifySizeEnabled(false);
        this._layoutShareImageHeader.ignoreContentAdaptWithSize(false);
        this._layoutShareImageHeader.setContentSize(cc.size(640, 40));

        ///// # _txtShareImageHeader
        this._txtShareImageHeader = new ck.Text();
        this._txtShareImageHeader.setName("_txtShareImageHeader");
        this._layoutShareImageHeader.addChild(this._txtShareImageHeader);
        this._txtShareImageHeader.setCascadeOpacityEnabled(true);
        this._txtShareImageHeader.setCascadeColorEnabled(true);
        this._txtShareImageHeader.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtShareImageHeader, 0.07, 0.5);
        let _txtShareImageHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtShareImageHeader);
        _txtShareImageHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtShareImageHeaderLayoutComponent.setPositionPercentX(0.07);
        _txtShareImageHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtShareImageHeaderLayoutComponent.setPositionPercentY(0.5);
        this._txtShareImageHeader.setTouchEnabled(false);
        this._txtShareImageHeader.ignoreContentAdaptWithSize(true);
        this._txtShareImageHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtShareImageHeader.setDefaultFontSize(25);
        this._txtShareImageHeader.setString("Share Image");
        this._txtShareImageHeader.setTextHorizontalAlignment(1);
        this._txtShareImageHeader.setTextVerticalAlignment(1);
        this._txtShareImageHeader.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _lineBot
        this._lineBot = new ccui.Layout();
        this._lineBot.setName("_lineBot");
        this._layoutShareImageHeader.addChild(this._lineBot);
        this._lineBot.setCascadeOpacityEnabled(true);
        this._lineBot.setCascadeColorEnabled(true);
        this._lineBot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineBot, 0.5, 0);
        let _lineBotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineBot);
        _lineBotLayoutComponent.setPositionPercentXEnabled(true);
        _lineBotLayoutComponent.setPositionPercentX(0.5);
        _lineBotLayoutComponent.setPositionPercentYEnabled(true);
        _lineBotLayoutComponent.setPositionPercentY(0);
        _lineBotLayoutComponent.setPercentWidthEnabled(true);
        _lineBotLayoutComponent.setPercentWidth(0.97);
        this._lineBot.setTouchEnabled(false);
        this._lineBot.setUnifySizeEnabled(false);
        this._lineBot.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineBot, 0.97);
        this._lineBot.setContentSize(cc.size(this._lineBot.width, 3));
        this._lineBot.setBackGroundColorType(1);
        this._lineBot.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _lineTop
        this._lineTop = new ccui.Layout();
        this._lineTop.setName("_lineTop");
        this._layoutShareImageHeader.addChild(this._lineTop);
        this._lineTop.setCascadeOpacityEnabled(true);
        this._lineTop.setCascadeColorEnabled(true);
        this._lineTop.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineTop, 0.5, 1);
        let _lineTopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineTop);
        _lineTopLayoutComponent.setPositionPercentXEnabled(true);
        _lineTopLayoutComponent.setPositionPercentX(0.5);
        _lineTopLayoutComponent.setPositionPercentYEnabled(true);
        _lineTopLayoutComponent.setPositionPercentY(1);
        _lineTopLayoutComponent.setPercentWidthEnabled(true);
        _lineTopLayoutComponent.setPercentWidth(0.97);
        this._lineTop.setTouchEnabled(false);
        this._lineTop.setUnifySizeEnabled(false);
        this._lineTop.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineTop, 0.97);
        this._lineTop.setContentSize(cc.size(this._lineTop.width, 3));
        this._lineTop.setBackGroundColorType(1);
        this._lineTop.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _imgExpandShareImage
        this._imgExpandShareImage = new ccui.ImageView();
        this._imgExpandShareImage.setName("_imgExpandShareImage");
        this._layoutShareImageHeader.addChild(this._imgExpandShareImage);
        this._imgExpandShareImage.setCascadeOpacityEnabled(true);
        this._imgExpandShareImage.setCascadeColorEnabled(true);
        this._imgExpandShareImage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgExpandShareImage, 0.04, 0.5);
        this._imgExpandShareImage.setScale(0.5, 0.5);
        this._imgExpandShareImage.setRotation(-90);
        this._imgExpandShareImage.setFlippedY(true);
        let _imgExpandShareImageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExpandShareImage);
        _imgExpandShareImageLayoutComponent.setPositionPercentXEnabled(true);
        _imgExpandShareImageLayoutComponent.setPositionPercentX(0.04);
        _imgExpandShareImageLayoutComponent.setPositionPercentYEnabled(true);
        _imgExpandShareImageLayoutComponent.setPositionPercentY(0.5);
        this._imgExpandShareImage.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgExpandShareImage.setUnifySizeEnabled(false);
        this._imgExpandShareImage.ignoreContentAdaptWithSize(false);
        this._imgExpandShareImage.setContentSize(cc.size(32, 32));
        this._imgExpandShareImage.setTouchEnabled(false);
        this._imgExpandShareImage.setFlippedY(true);

        ///// # _imgCollapseShareImage
        this._imgCollapseShareImage = new ccui.ImageView();
        this._imgCollapseShareImage.setName("_imgCollapseShareImage");
        this._layoutShareImageHeader.addChild(this._imgCollapseShareImage);
        this._imgCollapseShareImage.setCascadeOpacityEnabled(true);
        this._imgCollapseShareImage.setCascadeColorEnabled(true);
        this._imgCollapseShareImage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCollapseShareImage, 0.04, 0.5);
        this._imgCollapseShareImage.setScale(0.5, 0.5);
        this._imgCollapseShareImage.setRotation(180);
        let _imgCollapseShareImageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCollapseShareImage);
        _imgCollapseShareImageLayoutComponent.setPositionPercentXEnabled(true);
        _imgCollapseShareImageLayoutComponent.setPositionPercentX(0.04);
        _imgCollapseShareImageLayoutComponent.setPositionPercentYEnabled(true);
        _imgCollapseShareImageLayoutComponent.setPositionPercentY(0.5);
        this._imgCollapseShareImage.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgCollapseShareImage.setUnifySizeEnabled(false);
        this._imgCollapseShareImage.ignoreContentAdaptWithSize(false);
        this._imgCollapseShareImage.setContentSize(cc.size(32, 32));
        this._imgCollapseShareImage.setTouchEnabled(false);

        ///// # _layoutShareImage
        this._layoutShareImage = new ccui.Layout();
        this._layoutShareImage.setName("_layoutShareImage");
        this._listView.pushBackCustomItem(this._layoutShareImage);
        this._layoutShareImage.setCascadeOpacityEnabled(true);
        this._layoutShareImage.setCascadeColorEnabled(true);
        this._layoutShareImage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutShareImage, 0.5, 0.2988);
        let _layoutShareImageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutShareImage);
        this._layoutShareImage.setTouchEnabled(false);
        this._layoutShareImage.setUnifySizeEnabled(false);
        this._layoutShareImage.ignoreContentAdaptWithSize(false);
        this._layoutShareImage.setContentSize(cc.size(640, 369));

        ///// # _layoutShareImagePisti
        this._layoutShareImagePisti = new ccui.Layout();
        this._layoutShareImagePisti.setName("_layoutShareImagePisti");
        this._layoutShareImage.addChild(this._layoutShareImagePisti);
        this._layoutShareImagePisti.setCascadeOpacityEnabled(true);
        this._layoutShareImagePisti.setCascadeColorEnabled(true);
        this._layoutShareImagePisti.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutShareImagePisti, 0.5, 1);
        let _layoutShareImagePistiLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutShareImagePisti);
        _layoutShareImagePistiLayoutComponent.setPositionPercentXEnabled(true);
        _layoutShareImagePistiLayoutComponent.setPositionPercentX(0.5);
        _layoutShareImagePistiLayoutComponent.setPercentWidthEnabled(true);
        _layoutShareImagePistiLayoutComponent.setPercentWidth(1);
        this._layoutShareImagePisti.setTouchEnabled(false);
        this._layoutShareImagePisti.setUnifySizeEnabled(false);
        this._layoutShareImagePisti.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutShareImagePisti, 1);
        this._layoutShareImagePisti.setContentSize(cc.size(this._layoutShareImagePisti.width, 99));

        ///// # _txtShareImagePistiNote
        this._txtShareImagePistiNote = new ck.Text();
        this._txtShareImagePistiNote.setName("_txtShareImagePistiNote");
        this._layoutShareImagePisti.addChild(this._txtShareImagePistiNote);
        this._txtShareImagePistiNote.setCascadeOpacityEnabled(true);
        this._txtShareImagePistiNote.setCascadeColorEnabled(true);
        this._txtShareImagePistiNote.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtShareImagePistiNote, 0.0212, 1);
        let _txtShareImagePistiNoteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtShareImagePistiNote);
        _txtShareImagePistiNoteLayoutComponent.setPositionPercentYEnabled(true);
        _txtShareImagePistiNoteLayoutComponent.setPositionPercentY(1);
        this._txtShareImagePistiNote.setTouchEnabled(false);
        this._txtShareImagePistiNote.setUnifySizeEnabled(false);
        this._txtShareImagePistiNote.ignoreContentAdaptWithSize(false);
        this._txtShareImagePistiNote.setContentSize(cc.size(615, 48));
        this._txtShareImagePistiNote.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtShareImagePistiNote.setDefaultFontSize(20);
        this._txtShareImagePistiNote.setString("Su dung trong ban choi -> Set point cua minh va doi thu -> Hien Popup tong ket cuoi van");
        this._txtShareImagePistiNote.setTextHorizontalAlignment(0);
        this._txtShareImagePistiNote.setTextVerticalAlignment(1);
        this._txtShareImagePistiNote.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutBoxShareImagePisti
        this._layoutBoxShareImagePisti = new ccui.Layout();
        this._layoutBoxShareImagePisti.setName("_layoutBoxShareImagePisti");
        this._layoutShareImagePisti.addChild(this._layoutBoxShareImagePisti);
        this._layoutBoxShareImagePisti.setCascadeOpacityEnabled(true);
        this._layoutBoxShareImagePisti.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutBoxShareImagePisti, 0.0234, 0);
        let _layoutBoxShareImagePistiLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBoxShareImagePisti);
        _layoutBoxShareImagePistiLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBoxShareImagePistiLayoutComponent.setPositionPercentY(0);
        this._layoutBoxShareImagePisti.setTouchEnabled(true);
        this._layoutBoxShareImagePisti.setUnifySizeEnabled(false);
        this._layoutBoxShareImagePisti.ignoreContentAdaptWithSize(false);
        this._layoutBoxShareImagePisti.setContentSize(cc.size(510.63, 50));
        this._layoutBoxShareImagePisti.setBackGroundColorType(1);
        this._layoutBoxShareImagePisti.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxShareImagePisti
        this._editBoxShareImagePisti = new cc.EditBox(cc.size(510.63, 50), new cc.Scale9Sprite());
        this._editBoxShareImagePisti.setName("_editBoxShareImagePisti");
        this._layoutBoxShareImagePisti.addChild(this._editBoxShareImagePisti);
        this._editBoxShareImagePisti.setCascadeOpacityEnabled(true);
        this._editBoxShareImagePisti.setCascadeColorEnabled(true);
        this._editBoxShareImagePisti.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxShareImagePisti, 0.5, 0.5);
        this._editBoxShareImagePisti.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxShareImagePistiLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxShareImagePisti);
        _editBoxShareImagePistiLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxShareImagePistiLayoutComponent.setPositionPercentX(0.5);
        _editBoxShareImagePistiLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxShareImagePistiLayoutComponent.setPositionPercentY(0.5);
        _editBoxShareImagePistiLayoutComponent.setPercentWidthEnabled(true);
        _editBoxShareImagePistiLayoutComponent.setPercentWidth(1);
        _editBoxShareImagePistiLayoutComponent.setPercentHeightEnabled(true);
        _editBoxShareImagePistiLayoutComponent.setPercentHeight(1);
        this._editBoxShareImagePisti.setUnifySizeEnabled(false);
        this._editBoxShareImagePisti.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxShareImagePisti, 1, 1);
        this._editBoxShareImagePisti.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxShareImagePisti.setFontSize(22);
        this._editBoxShareImagePisti.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxShareImagePisti.setPlaceholderFontSize(22);
        this._editBoxShareImagePisti.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxShareImagePisti.setPlaceHolder("myPoint;opponentPoint (Ex. 80;60)");
        this._editBoxShareImagePisti.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxShareImagePisti.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutSetShareImagePisti
        this._layoutSetShareImagePisti = new ccui.Layout();
        this._layoutSetShareImagePisti.setName("_layoutSetShareImagePisti");
        this._layoutShareImagePisti.addChild(this._layoutSetShareImagePisti);
        this._layoutSetShareImagePisti.setCascadeOpacityEnabled(true);
        this._layoutSetShareImagePisti.setCascadeColorEnabled(true);
        this._layoutSetShareImagePisti.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._layoutSetShareImagePisti, 0.9922, 0);
        let _layoutSetShareImagePistiLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSetShareImagePisti);
        _layoutSetShareImagePistiLayoutComponent.setPositionPercentYEnabled(true);
        _layoutSetShareImagePistiLayoutComponent.setPositionPercentY(0);
        this._layoutSetShareImagePisti.setTouchEnabled(true);
        this._layoutSetShareImagePisti.setUnifySizeEnabled(false);
        this._layoutSetShareImagePisti.ignoreContentAdaptWithSize(false);
        this._layoutSetShareImagePisti.setContentSize(cc.size(100, 50));
        this._layoutSetShareImagePisti.setBackGroundColorType(1);
        this._layoutSetShareImagePisti.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtSetShareImagePisti
        this._txtSetShareImagePisti = new ck.Text();
        this._txtSetShareImagePisti.setName("_txtSetShareImagePisti");
        this._layoutSetShareImagePisti.addChild(this._txtSetShareImagePisti);
        this._txtSetShareImagePisti.setCascadeOpacityEnabled(true);
        this._txtSetShareImagePisti.setCascadeColorEnabled(true);
        this._txtSetShareImagePisti.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtSetShareImagePisti, 0.5, 0.5);
        let _txtSetShareImagePistiLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSetShareImagePisti);
        this._txtSetShareImagePisti.setTouchEnabled(false);
        this._txtSetShareImagePisti.ignoreContentAdaptWithSize(true);
        this._txtSetShareImagePisti.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSetShareImagePisti.setDefaultFontSize(22);
        this._txtSetShareImagePisti.setString("Set");
        this._txtSetShareImagePisti.setTextHorizontalAlignment(1);
        this._txtSetShareImagePisti.setTextVerticalAlignment(1);

        ///// # _layoutShareImageRanking
        this._layoutShareImageRanking = new ccui.Layout();
        this._layoutShareImageRanking.setName("_layoutShareImageRanking");
        this._layoutShareImage.addChild(this._layoutShareImageRanking);
        this._layoutShareImageRanking.setCascadeOpacityEnabled(true);
        this._layoutShareImageRanking.setCascadeColorEnabled(true);
        this._layoutShareImageRanking.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutShareImageRanking, 0.5, 0.7317);
        let _layoutShareImageRankingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutShareImageRanking);
        _layoutShareImageRankingLayoutComponent.setPositionPercentXEnabled(true);
        _layoutShareImageRankingLayoutComponent.setPositionPercentX(0.5);
        _layoutShareImageRankingLayoutComponent.setPercentWidthEnabled(true);
        _layoutShareImageRankingLayoutComponent.setPercentWidth(1);
        this._layoutShareImageRanking.setTouchEnabled(false);
        this._layoutShareImageRanking.setUnifySizeEnabled(false);
        this._layoutShareImageRanking.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutShareImageRanking, 1);
        this._layoutShareImageRanking.setContentSize(cc.size(this._layoutShareImageRanking.width, 99));

        ///// # _txtShareImageRankingNote
        this._txtShareImageRankingNote = new ck.Text();
        this._txtShareImageRankingNote.setName("_txtShareImageRankingNote");
        this._layoutShareImageRanking.addChild(this._txtShareImageRankingNote);
        this._txtShareImageRankingNote.setCascadeOpacityEnabled(true);
        this._txtShareImageRankingNote.setCascadeColorEnabled(true);
        this._txtShareImageRankingNote.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtShareImageRankingNote, 0.0212, 1);
        let _txtShareImageRankingNoteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtShareImageRankingNote);
        _txtShareImageRankingNoteLayoutComponent.setPositionPercentYEnabled(true);
        _txtShareImageRankingNoteLayoutComponent.setPositionPercentY(1);
        this._txtShareImageRankingNote.setTouchEnabled(false);
        this._txtShareImageRankingNote.setUnifySizeEnabled(false);
        this._txtShareImageRankingNote.ignoreContentAdaptWithSize(false);
        this._txtShareImageRankingNote.setContentSize(cc.size(615, 48));
        this._txtShareImageRankingNote.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtShareImageRankingNote.setDefaultFontSize(20);
        this._txtShareImageRankingNote.setString("Set top trong Popup nhan thuong Ranking (Nhan vao icon Ranking se luon hien ra popup nay)\n-1 -> Off cheat");
        this._txtShareImageRankingNote.setTextHorizontalAlignment(0);
        this._txtShareImageRankingNote.setTextVerticalAlignment(1);
        this._txtShareImageRankingNote.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutBoxShareImageRanking
        this._layoutBoxShareImageRanking = new ccui.Layout();
        this._layoutBoxShareImageRanking.setName("_layoutBoxShareImageRanking");
        this._layoutShareImageRanking.addChild(this._layoutBoxShareImageRanking);
        this._layoutBoxShareImageRanking.setCascadeOpacityEnabled(true);
        this._layoutBoxShareImageRanking.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutBoxShareImageRanking, 0.0234, 0);
        let _layoutBoxShareImageRankingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBoxShareImageRanking);
        _layoutBoxShareImageRankingLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBoxShareImageRankingLayoutComponent.setPositionPercentY(0);
        this._layoutBoxShareImageRanking.setTouchEnabled(true);
        this._layoutBoxShareImageRanking.setUnifySizeEnabled(false);
        this._layoutBoxShareImageRanking.ignoreContentAdaptWithSize(false);
        this._layoutBoxShareImageRanking.setContentSize(cc.size(510.63, 50));
        this._layoutBoxShareImageRanking.setBackGroundColorType(1);
        this._layoutBoxShareImageRanking.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxShareImageRanking
        this._editBoxShareImageRanking = new cc.EditBox(cc.size(510.63, 50), new cc.Scale9Sprite());
        this._editBoxShareImageRanking.setName("_editBoxShareImageRanking");
        this._layoutBoxShareImageRanking.addChild(this._editBoxShareImageRanking);
        this._editBoxShareImageRanking.setCascadeOpacityEnabled(true);
        this._editBoxShareImageRanking.setCascadeColorEnabled(true);
        this._editBoxShareImageRanking.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxShareImageRanking, 0.5, 0.5);
        this._editBoxShareImageRanking.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxShareImageRankingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxShareImageRanking);
        _editBoxShareImageRankingLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxShareImageRankingLayoutComponent.setPositionPercentX(0.5);
        _editBoxShareImageRankingLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxShareImageRankingLayoutComponent.setPositionPercentY(0.5);
        _editBoxShareImageRankingLayoutComponent.setPercentWidthEnabled(true);
        _editBoxShareImageRankingLayoutComponent.setPercentWidth(1);
        _editBoxShareImageRankingLayoutComponent.setPercentHeightEnabled(true);
        _editBoxShareImageRankingLayoutComponent.setPercentHeight(1);
        this._editBoxShareImageRanking.setUnifySizeEnabled(false);
        this._editBoxShareImageRanking.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxShareImageRanking, 1, 1);
        this._editBoxShareImageRanking.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxShareImageRanking.setFontSize(22);
        this._editBoxShareImageRanking.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxShareImageRanking.setPlaceholderFontSize(22);
        this._editBoxShareImageRanking.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxShareImageRanking.setPlaceHolder("Ex. 1 -> Top 1 | 2 -> Top 2 | -1 -> Off cheat");
        this._editBoxShareImageRanking.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxShareImageRanking.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutSetShareImageRanking
        this._layoutSetShareImageRanking = new ccui.Layout();
        this._layoutSetShareImageRanking.setName("_layoutSetShareImageRanking");
        this._layoutShareImageRanking.addChild(this._layoutSetShareImageRanking);
        this._layoutSetShareImageRanking.setCascadeOpacityEnabled(true);
        this._layoutSetShareImageRanking.setCascadeColorEnabled(true);
        this._layoutSetShareImageRanking.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._layoutSetShareImageRanking, 0.9922, 0);
        let _layoutSetShareImageRankingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSetShareImageRanking);
        _layoutSetShareImageRankingLayoutComponent.setPositionPercentYEnabled(true);
        _layoutSetShareImageRankingLayoutComponent.setPositionPercentY(0);
        this._layoutSetShareImageRanking.setTouchEnabled(true);
        this._layoutSetShareImageRanking.setUnifySizeEnabled(false);
        this._layoutSetShareImageRanking.ignoreContentAdaptWithSize(false);
        this._layoutSetShareImageRanking.setContentSize(cc.size(100, 50));
        this._layoutSetShareImageRanking.setBackGroundColorType(1);
        this._layoutSetShareImageRanking.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtSetShareImageRanking
        this._txtSetShareImageRanking = new ck.Text();
        this._txtSetShareImageRanking.setName("_txtSetShareImageRanking");
        this._layoutSetShareImageRanking.addChild(this._txtSetShareImageRanking);
        this._txtSetShareImageRanking.setCascadeOpacityEnabled(true);
        this._txtSetShareImageRanking.setCascadeColorEnabled(true);
        this._txtSetShareImageRanking.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtSetShareImageRanking, 0.5, 0.5);
        let _txtSetShareImageRankingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSetShareImageRanking);
        this._txtSetShareImageRanking.setTouchEnabled(false);
        this._txtSetShareImageRanking.ignoreContentAdaptWithSize(true);
        this._txtSetShareImageRanking.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSetShareImageRanking.setDefaultFontSize(22);
        this._txtSetShareImageRanking.setString("Set");
        this._txtSetShareImageRanking.setTextHorizontalAlignment(1);
        this._txtSetShareImageRanking.setTextVerticalAlignment(1);

        ///// # _layoutShareImageFrame
        this._layoutShareImageFrame = new ccui.Layout();
        this._layoutShareImageFrame.setName("_layoutShareImageFrame");
        this._layoutShareImage.addChild(this._layoutShareImageFrame);
        this._layoutShareImageFrame.setCascadeOpacityEnabled(true);
        this._layoutShareImageFrame.setCascadeColorEnabled(true);
        this._layoutShareImageFrame.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutShareImageFrame, 0.5, 0.4634);
        let _layoutShareImageFrameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutShareImageFrame);
        _layoutShareImageFrameLayoutComponent.setPositionPercentXEnabled(true);
        _layoutShareImageFrameLayoutComponent.setPositionPercentX(0.5);
        _layoutShareImageFrameLayoutComponent.setPercentWidthEnabled(true);
        _layoutShareImageFrameLayoutComponent.setPercentWidth(1);
        this._layoutShareImageFrame.setTouchEnabled(false);
        this._layoutShareImageFrame.setUnifySizeEnabled(false);
        this._layoutShareImageFrame.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutShareImageFrame, 1);
        this._layoutShareImageFrame.setContentSize(cc.size(this._layoutShareImageFrame.width, 171));

        ///// # _txtShareImageFrameNote
        this._txtShareImageFrameNote = new ck.Text();
        this._txtShareImageFrameNote.setName("_txtShareImageFrameNote");
        this._layoutShareImageFrame.addChild(this._txtShareImageFrameNote);
        this._txtShareImageFrameNote.setCascadeOpacityEnabled(true);
        this._txtShareImageFrameNote.setCascadeColorEnabled(true);
        this._txtShareImageFrameNote.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtShareImageFrameNote, 0.0212, 1);
        let _txtShareImageFrameNoteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtShareImageFrameNote);
        _txtShareImageFrameNoteLayoutComponent.setPositionPercentYEnabled(true);
        _txtShareImageFrameNoteLayoutComponent.setPositionPercentY(1);
        this._txtShareImageFrameNote.setTouchEnabled(false);
        this._txtShareImageFrameNote.setUnifySizeEnabled(false);
        this._txtShareImageFrameNote.ignoreContentAdaptWithSize(false);
        this._txtShareImageFrameNote.setContentSize(cc.size(504, 120));
        this._txtShareImageFrameNote.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtShareImageFrameNote.setDefaultFontSize(20);
        this._txtShareImageFrameNote.setString("Set banner share image (themeID;bannerID)\nthemeID: 1->2; frameID: 1->6 (Theme 1: Default, Theme 2: Ramadan)\n1;-1 -> Random 1 trong 6 banner cua Default theme\n2;-1 -> Random 1 trong 6 banner cua Ramadan theme\n-1;-1 -> Off cheat");
        this._txtShareImageFrameNote.setTextHorizontalAlignment(0);
        this._txtShareImageFrameNote.setTextVerticalAlignment(1);
        this._txtShareImageFrameNote.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutBoxShareImageFrame
        this._layoutBoxShareImageFrame = new ccui.Layout();
        this._layoutBoxShareImageFrame.setName("_layoutBoxShareImageFrame");
        this._layoutShareImageFrame.addChild(this._layoutBoxShareImageFrame);
        this._layoutBoxShareImageFrame.setCascadeOpacityEnabled(true);
        this._layoutBoxShareImageFrame.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutBoxShareImageFrame, 0.0234, 0);
        let _layoutBoxShareImageFrameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBoxShareImageFrame);
        _layoutBoxShareImageFrameLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBoxShareImageFrameLayoutComponent.setPositionPercentY(0);
        this._layoutBoxShareImageFrame.setTouchEnabled(true);
        this._layoutBoxShareImageFrame.setUnifySizeEnabled(false);
        this._layoutBoxShareImageFrame.ignoreContentAdaptWithSize(false);
        this._layoutBoxShareImageFrame.setContentSize(cc.size(510.63, 50));
        this._layoutBoxShareImageFrame.setBackGroundColorType(1);
        this._layoutBoxShareImageFrame.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxShareImageFrame
        this._editBoxShareImageFrame = new cc.EditBox(cc.size(510.63, 50), new cc.Scale9Sprite());
        this._editBoxShareImageFrame.setName("_editBoxShareImageFrame");
        this._layoutBoxShareImageFrame.addChild(this._editBoxShareImageFrame);
        this._editBoxShareImageFrame.setCascadeOpacityEnabled(true);
        this._editBoxShareImageFrame.setCascadeColorEnabled(true);
        this._editBoxShareImageFrame.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxShareImageFrame, 0.5, 0.5);
        this._editBoxShareImageFrame.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxShareImageFrameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxShareImageFrame);
        _editBoxShareImageFrameLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxShareImageFrameLayoutComponent.setPositionPercentX(0.5);
        _editBoxShareImageFrameLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxShareImageFrameLayoutComponent.setPositionPercentY(0.5);
        _editBoxShareImageFrameLayoutComponent.setPercentWidthEnabled(true);
        _editBoxShareImageFrameLayoutComponent.setPercentWidth(1);
        _editBoxShareImageFrameLayoutComponent.setPercentHeightEnabled(true);
        _editBoxShareImageFrameLayoutComponent.setPercentHeight(1);
        this._editBoxShareImageFrame.setUnifySizeEnabled(false);
        this._editBoxShareImageFrame.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxShareImageFrame, 1, 1);
        this._editBoxShareImageFrame.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxShareImageFrame.setFontSize(22);
        this._editBoxShareImageFrame.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxShareImageFrame.setPlaceholderFontSize(22);
        this._editBoxShareImageFrame.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxShareImageFrame.setPlaceHolder("themeID;bannerID (Ex. 2;5 -> Banner 5 cua Theme 2)");
        this._editBoxShareImageFrame.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxShareImageFrame.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutSetShareImageFrame
        this._layoutSetShareImageFrame = new ccui.Layout();
        this._layoutSetShareImageFrame.setName("_layoutSetShareImageFrame");
        this._layoutShareImageFrame.addChild(this._layoutSetShareImageFrame);
        this._layoutSetShareImageFrame.setCascadeOpacityEnabled(true);
        this._layoutSetShareImageFrame.setCascadeColorEnabled(true);
        this._layoutSetShareImageFrame.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._layoutSetShareImageFrame, 0.9922, 0);
        let _layoutSetShareImageFrameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSetShareImageFrame);
        _layoutSetShareImageFrameLayoutComponent.setPositionPercentYEnabled(true);
        _layoutSetShareImageFrameLayoutComponent.setPositionPercentY(0);
        this._layoutSetShareImageFrame.setTouchEnabled(true);
        this._layoutSetShareImageFrame.setUnifySizeEnabled(false);
        this._layoutSetShareImageFrame.ignoreContentAdaptWithSize(false);
        this._layoutSetShareImageFrame.setContentSize(cc.size(100, 50));
        this._layoutSetShareImageFrame.setBackGroundColorType(1);
        this._layoutSetShareImageFrame.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtSetShareImageFrame
        this._txtSetShareImageFrame = new ck.Text();
        this._txtSetShareImageFrame.setName("_txtSetShareImageFrame");
        this._layoutSetShareImageFrame.addChild(this._txtSetShareImageFrame);
        this._txtSetShareImageFrame.setCascadeOpacityEnabled(true);
        this._txtSetShareImageFrame.setCascadeColorEnabled(true);
        this._txtSetShareImageFrame.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtSetShareImageFrame, 0.5, 0.5);
        let _txtSetShareImageFrameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSetShareImageFrame);
        this._txtSetShareImageFrame.setTouchEnabled(false);
        this._txtSetShareImageFrame.ignoreContentAdaptWithSize(true);
        this._txtSetShareImageFrame.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSetShareImageFrame.setDefaultFontSize(22);
        this._txtSetShareImageFrame.setString("Set");
        this._txtSetShareImageFrame.setTextHorizontalAlignment(1);
        this._txtSetShareImageFrame.setTextVerticalAlignment(1);

        ///// # _layoutTrophyHeader
        this._layoutTrophyHeader = new ccui.Layout();
        this._layoutTrophyHeader.setName("_layoutTrophyHeader");
        this._listView.pushBackCustomItem(this._layoutTrophyHeader);
        this._layoutTrophyHeader.setCascadeOpacityEnabled(true);
        this._layoutTrophyHeader.setCascadeColorEnabled(true);
        this._layoutTrophyHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTrophyHeader, 0.5, 0.2389);
        let _layoutTrophyHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTrophyHeader);
        this._layoutTrophyHeader.setTouchEnabled(true);
        this._layoutTrophyHeader.setUnifySizeEnabled(false);
        this._layoutTrophyHeader.ignoreContentAdaptWithSize(false);
        this._layoutTrophyHeader.setContentSize(cc.size(640, 40));

        ///// # _txtTrophyHeader
        this._txtTrophyHeader = new ck.Text();
        this._txtTrophyHeader.setName("_txtTrophyHeader");
        this._layoutTrophyHeader.addChild(this._txtTrophyHeader);
        this._txtTrophyHeader.setCascadeOpacityEnabled(true);
        this._txtTrophyHeader.setCascadeColorEnabled(true);
        this._txtTrophyHeader.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTrophyHeader, 0.07, 0.5);
        let _txtTrophyHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTrophyHeader);
        _txtTrophyHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtTrophyHeaderLayoutComponent.setPositionPercentX(0.07);
        _txtTrophyHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtTrophyHeaderLayoutComponent.setPositionPercentY(0.5);
        this._txtTrophyHeader.setTouchEnabled(false);
        this._txtTrophyHeader.ignoreContentAdaptWithSize(true);
        this._txtTrophyHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTrophyHeader.setDefaultFontSize(25);
        this._txtTrophyHeader.setString("Trophy");
        this._txtTrophyHeader.setTextHorizontalAlignment(1);
        this._txtTrophyHeader.setTextVerticalAlignment(1);
        this._txtTrophyHeader.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _lineBot
        this._lineBot = new ccui.Layout();
        this._lineBot.setName("_lineBot");
        this._layoutTrophyHeader.addChild(this._lineBot);
        this._lineBot.setCascadeOpacityEnabled(true);
        this._lineBot.setCascadeColorEnabled(true);
        this._lineBot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineBot, 0.5, 0);
        let _lineBotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineBot);
        _lineBotLayoutComponent.setPositionPercentXEnabled(true);
        _lineBotLayoutComponent.setPositionPercentX(0.5);
        _lineBotLayoutComponent.setPositionPercentYEnabled(true);
        _lineBotLayoutComponent.setPositionPercentY(0);
        _lineBotLayoutComponent.setPercentWidthEnabled(true);
        _lineBotLayoutComponent.setPercentWidth(0.97);
        this._lineBot.setTouchEnabled(false);
        this._lineBot.setUnifySizeEnabled(false);
        this._lineBot.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineBot, 0.97);
        this._lineBot.setContentSize(cc.size(this._lineBot.width, 3));
        this._lineBot.setBackGroundColorType(1);
        this._lineBot.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _lineTop
        this._lineTop = new ccui.Layout();
        this._lineTop.setName("_lineTop");
        this._layoutTrophyHeader.addChild(this._lineTop);
        this._lineTop.setCascadeOpacityEnabled(true);
        this._lineTop.setCascadeColorEnabled(true);
        this._lineTop.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineTop, 0.5, 1);
        let _lineTopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineTop);
        _lineTopLayoutComponent.setPositionPercentXEnabled(true);
        _lineTopLayoutComponent.setPositionPercentX(0.5);
        _lineTopLayoutComponent.setPositionPercentYEnabled(true);
        _lineTopLayoutComponent.setPositionPercentY(1);
        _lineTopLayoutComponent.setPercentWidthEnabled(true);
        _lineTopLayoutComponent.setPercentWidth(0.97);
        this._lineTop.setTouchEnabled(false);
        this._lineTop.setUnifySizeEnabled(false);
        this._lineTop.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineTop, 0.97);
        this._lineTop.setContentSize(cc.size(this._lineTop.width, 3));
        this._lineTop.setBackGroundColorType(1);
        this._lineTop.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _imgExpandTrophy
        this._imgExpandTrophy = new ccui.ImageView();
        this._imgExpandTrophy.setName("_imgExpandTrophy");
        this._layoutTrophyHeader.addChild(this._imgExpandTrophy);
        this._imgExpandTrophy.setCascadeOpacityEnabled(true);
        this._imgExpandTrophy.setCascadeColorEnabled(true);
        this._imgExpandTrophy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgExpandTrophy, 0.04, 0.5);
        this._imgExpandTrophy.setScale(0.5, 0.5);
        this._imgExpandTrophy.setRotation(-90);
        this._imgExpandTrophy.setFlippedY(true);
        let _imgExpandTrophyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExpandTrophy);
        _imgExpandTrophyLayoutComponent.setPositionPercentXEnabled(true);
        _imgExpandTrophyLayoutComponent.setPositionPercentX(0.04);
        _imgExpandTrophyLayoutComponent.setPositionPercentYEnabled(true);
        _imgExpandTrophyLayoutComponent.setPositionPercentY(0.5);
        this._imgExpandTrophy.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgExpandTrophy.setUnifySizeEnabled(false);
        this._imgExpandTrophy.ignoreContentAdaptWithSize(false);
        this._imgExpandTrophy.setContentSize(cc.size(32, 32));
        this._imgExpandTrophy.setTouchEnabled(false);
        this._imgExpandTrophy.setFlippedY(true);

        ///// # _imgCollapseTrophy
        this._imgCollapseTrophy = new ccui.ImageView();
        this._imgCollapseTrophy.setName("_imgCollapseTrophy");
        this._layoutTrophyHeader.addChild(this._imgCollapseTrophy);
        this._imgCollapseTrophy.setCascadeOpacityEnabled(true);
        this._imgCollapseTrophy.setCascadeColorEnabled(true);
        this._imgCollapseTrophy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCollapseTrophy, 0.04, 0.5);
        this._imgCollapseTrophy.setScale(0.5, 0.5);
        this._imgCollapseTrophy.setRotation(180);
        let _imgCollapseTrophyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCollapseTrophy);
        _imgCollapseTrophyLayoutComponent.setPositionPercentXEnabled(true);
        _imgCollapseTrophyLayoutComponent.setPositionPercentX(0.04);
        _imgCollapseTrophyLayoutComponent.setPositionPercentYEnabled(true);
        _imgCollapseTrophyLayoutComponent.setPositionPercentY(0.5);
        this._imgCollapseTrophy.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgCollapseTrophy.setUnifySizeEnabled(false);
        this._imgCollapseTrophy.ignoreContentAdaptWithSize(false);
        this._imgCollapseTrophy.setContentSize(cc.size(32, 32));
        this._imgCollapseTrophy.setTouchEnabled(false);

        ///// # _layoutTrophy
        this._layoutTrophy = new ccui.Layout();
        this._layoutTrophy.setName("_layoutTrophy");
        this._listView.pushBackCustomItem(this._layoutTrophy);
        this._layoutTrophy.setCascadeOpacityEnabled(true);
        this._layoutTrophy.setCascadeColorEnabled(true);
        this._layoutTrophy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTrophy, 0.5, 0.1673);
        let _layoutTrophyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTrophy);
        this._layoutTrophy.setTouchEnabled(false);
        this._layoutTrophy.setUnifySizeEnabled(false);
        this._layoutTrophy.ignoreContentAdaptWithSize(false);
        this._layoutTrophy.setContentSize(cc.size(640, 451));

        ///// # _layoutAddTrophy
        this._layoutAddTrophy = new ccui.Layout();
        this._layoutAddTrophy.setName("_layoutAddTrophy");
        this._layoutTrophy.addChild(this._layoutAddTrophy);
        this._layoutAddTrophy.setCascadeOpacityEnabled(true);
        this._layoutAddTrophy.setCascadeColorEnabled(true);
        this._layoutAddTrophy.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutAddTrophy, 0.5, 1);
        let _layoutAddTrophyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAddTrophy);
        _layoutAddTrophyLayoutComponent.setPositionPercentXEnabled(true);
        _layoutAddTrophyLayoutComponent.setPositionPercentX(0.5);
        _layoutAddTrophyLayoutComponent.setPercentWidthEnabled(true);
        _layoutAddTrophyLayoutComponent.setPercentWidth(1);
        this._layoutAddTrophy.setTouchEnabled(false);
        this._layoutAddTrophy.setUnifySizeEnabled(false);
        this._layoutAddTrophy.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutAddTrophy, 1);
        this._layoutAddTrophy.setContentSize(cc.size(this._layoutAddTrophy.width, 99));

        ///// # _txtAddTrophyNote
        this._txtAddTrophyNote = new ck.Text();
        this._txtAddTrophyNote.setName("_txtAddTrophyNote");
        this._layoutAddTrophy.addChild(this._txtAddTrophyNote);
        this._txtAddTrophyNote.setCascadeOpacityEnabled(true);
        this._txtAddTrophyNote.setCascadeColorEnabled(true);
        this._txtAddTrophyNote.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtAddTrophyNote, 0.0212, 1);
        let _txtAddTrophyNoteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAddTrophyNote);
        _txtAddTrophyNoteLayoutComponent.setPositionPercentYEnabled(true);
        _txtAddTrophyNoteLayoutComponent.setPositionPercentY(1);
        this._txtAddTrophyNote.setTouchEnabled(false);
        this._txtAddTrophyNote.setUnifySizeEnabled(false);
        this._txtAddTrophyNote.ignoreContentAdaptWithSize(false);
        this._txtAddTrophyNote.setContentSize(cc.size(615, 48));
        this._txtAddTrophyNote.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAddTrophyNote.setDefaultFontSize(20);
        this._txtAddTrophyNote.setString("Them amount cho trophy (year;ID;amount)\nYear <= Nam hien tai; Trophy ID: 1-28");
        this._txtAddTrophyNote.setTextHorizontalAlignment(0);
        this._txtAddTrophyNote.setTextVerticalAlignment(1);
        this._txtAddTrophyNote.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutBoxAddTrophy
        this._layoutBoxAddTrophy = new ccui.Layout();
        this._layoutBoxAddTrophy.setName("_layoutBoxAddTrophy");
        this._layoutAddTrophy.addChild(this._layoutBoxAddTrophy);
        this._layoutBoxAddTrophy.setCascadeOpacityEnabled(true);
        this._layoutBoxAddTrophy.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutBoxAddTrophy, 0.0234, 0);
        let _layoutBoxAddTrophyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBoxAddTrophy);
        _layoutBoxAddTrophyLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBoxAddTrophyLayoutComponent.setPositionPercentY(0);
        this._layoutBoxAddTrophy.setTouchEnabled(true);
        this._layoutBoxAddTrophy.setUnifySizeEnabled(false);
        this._layoutBoxAddTrophy.ignoreContentAdaptWithSize(false);
        this._layoutBoxAddTrophy.setContentSize(cc.size(510.63, 50));
        this._layoutBoxAddTrophy.setBackGroundColorType(1);
        this._layoutBoxAddTrophy.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxAddTrophy
        this._editBoxAddTrophy = new cc.EditBox(cc.size(510.63, 50), new cc.Scale9Sprite());
        this._editBoxAddTrophy.setName("_editBoxAddTrophy");
        this._layoutBoxAddTrophy.addChild(this._editBoxAddTrophy);
        this._editBoxAddTrophy.setCascadeOpacityEnabled(true);
        this._editBoxAddTrophy.setCascadeColorEnabled(true);
        this._editBoxAddTrophy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxAddTrophy, 0.5, 0.5);
        this._editBoxAddTrophy.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxAddTrophyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxAddTrophy);
        _editBoxAddTrophyLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxAddTrophyLayoutComponent.setPositionPercentX(0.5);
        _editBoxAddTrophyLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxAddTrophyLayoutComponent.setPositionPercentY(0.5);
        _editBoxAddTrophyLayoutComponent.setPercentWidthEnabled(true);
        _editBoxAddTrophyLayoutComponent.setPercentWidth(1);
        _editBoxAddTrophyLayoutComponent.setPercentHeightEnabled(true);
        _editBoxAddTrophyLayoutComponent.setPercentHeight(1);
        this._editBoxAddTrophy.setUnifySizeEnabled(false);
        this._editBoxAddTrophy.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxAddTrophy, 1, 1);
        this._editBoxAddTrophy.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxAddTrophy.setFontSize(22);
        this._editBoxAddTrophy.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxAddTrophy.setPlaceholderFontSize(22);
        this._editBoxAddTrophy.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxAddTrophy.setPlaceHolder("year;ID;amount (Ex. 2023;1;10)");
        this._editBoxAddTrophy.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxAddTrophy.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutBtnAddTrophy
        this._layoutBtnAddTrophy = new ccui.Layout();
        this._layoutBtnAddTrophy.setName("_layoutBtnAddTrophy");
        this._layoutAddTrophy.addChild(this._layoutBtnAddTrophy);
        this._layoutBtnAddTrophy.setCascadeOpacityEnabled(true);
        this._layoutBtnAddTrophy.setCascadeColorEnabled(true);
        this._layoutBtnAddTrophy.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._layoutBtnAddTrophy, 0.9922, 0);
        let _layoutBtnAddTrophyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBtnAddTrophy);
        _layoutBtnAddTrophyLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBtnAddTrophyLayoutComponent.setPositionPercentY(0);
        this._layoutBtnAddTrophy.setTouchEnabled(true);
        this._layoutBtnAddTrophy.setUnifySizeEnabled(false);
        this._layoutBtnAddTrophy.ignoreContentAdaptWithSize(false);
        this._layoutBtnAddTrophy.setContentSize(cc.size(100, 50));
        this._layoutBtnAddTrophy.setBackGroundColorType(1);
        this._layoutBtnAddTrophy.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtAddTrophy
        this._txtAddTrophy = new ck.Text();
        this._txtAddTrophy.setName("_txtAddTrophy");
        this._layoutBtnAddTrophy.addChild(this._txtAddTrophy);
        this._txtAddTrophy.setCascadeOpacityEnabled(true);
        this._txtAddTrophy.setCascadeColorEnabled(true);
        this._txtAddTrophy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAddTrophy, 0.5, 0.5);
        let _txtAddTrophyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAddTrophy);
        this._txtAddTrophy.setTouchEnabled(false);
        this._txtAddTrophy.ignoreContentAdaptWithSize(true);
        this._txtAddTrophy.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAddTrophy.setDefaultFontSize(22);
        this._txtAddTrophy.setString("Add");
        this._txtAddTrophy.setTextHorizontalAlignment(1);
        this._txtAddTrophy.setTextVerticalAlignment(1);

        ///// # _layoutSetTrophyLv
        this._layoutSetTrophyLv = new ccui.Layout();
        this._layoutSetTrophyLv.setName("_layoutSetTrophyLv");
        this._layoutTrophy.addChild(this._layoutSetTrophyLv);
        this._layoutSetTrophyLv.setCascadeOpacityEnabled(true);
        this._layoutSetTrophyLv.setCascadeColorEnabled(true);
        this._layoutSetTrophyLv.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutSetTrophyLv, 0.5, 0.7805);
        let _layoutSetTrophyLvLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSetTrophyLv);
        _layoutSetTrophyLvLayoutComponent.setPositionPercentXEnabled(true);
        _layoutSetTrophyLvLayoutComponent.setPositionPercentX(0.5);
        _layoutSetTrophyLvLayoutComponent.setPercentWidthEnabled(true);
        _layoutSetTrophyLvLayoutComponent.setPercentWidth(1);
        this._layoutSetTrophyLv.setTouchEnabled(false);
        this._layoutSetTrophyLv.setUnifySizeEnabled(false);
        this._layoutSetTrophyLv.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutSetTrophyLv, 1);
        this._layoutSetTrophyLv.setContentSize(cc.size(this._layoutSetTrophyLv.width, 99));

        ///// # _txtSetTrophyLvNote
        this._txtSetTrophyLvNote = new ck.Text();
        this._txtSetTrophyLvNote.setName("_txtSetTrophyLvNote");
        this._layoutSetTrophyLv.addChild(this._txtSetTrophyLvNote);
        this._txtSetTrophyLvNote.setCascadeOpacityEnabled(true);
        this._txtSetTrophyLvNote.setCascadeColorEnabled(true);
        this._txtSetTrophyLvNote.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtSetTrophyLvNote, 0.0212, 1);
        let _txtSetTrophyLvNoteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSetTrophyLvNote);
        _txtSetTrophyLvNoteLayoutComponent.setPositionPercentYEnabled(true);
        _txtSetTrophyLvNoteLayoutComponent.setPositionPercentY(1);
        this._txtSetTrophyLvNote.setTouchEnabled(false);
        this._txtSetTrophyLvNote.setUnifySizeEnabled(false);
        this._txtSetTrophyLvNote.ignoreContentAdaptWithSize(false);
        this._txtSetTrophyLvNote.setContentSize(cc.size(615, 48));
        this._txtSetTrophyLvNote.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSetTrophyLvNote.setDefaultFontSize(20);
        this._txtSetTrophyLvNote.setString("Set level cho trophy (year;minID;maxID;level)\nYear <= Nam hien tai; Trophy ID: 1-28; minID <= maxID; level: 0-9");
        this._txtSetTrophyLvNote.setTextHorizontalAlignment(0);
        this._txtSetTrophyLvNote.setTextVerticalAlignment(1);
        this._txtSetTrophyLvNote.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutBoxSetTrophyLv
        this._layoutBoxSetTrophyLv = new ccui.Layout();
        this._layoutBoxSetTrophyLv.setName("_layoutBoxSetTrophyLv");
        this._layoutSetTrophyLv.addChild(this._layoutBoxSetTrophyLv);
        this._layoutBoxSetTrophyLv.setCascadeOpacityEnabled(true);
        this._layoutBoxSetTrophyLv.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutBoxSetTrophyLv, 0.0234, 0);
        let _layoutBoxSetTrophyLvLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBoxSetTrophyLv);
        _layoutBoxSetTrophyLvLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBoxSetTrophyLvLayoutComponent.setPositionPercentY(0);
        this._layoutBoxSetTrophyLv.setTouchEnabled(true);
        this._layoutBoxSetTrophyLv.setUnifySizeEnabled(false);
        this._layoutBoxSetTrophyLv.ignoreContentAdaptWithSize(false);
        this._layoutBoxSetTrophyLv.setContentSize(cc.size(510.63, 50));
        this._layoutBoxSetTrophyLv.setBackGroundColorType(1);
        this._layoutBoxSetTrophyLv.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxSetTrophyLv
        this._editBoxSetTrophyLv = new cc.EditBox(cc.size(510.63, 50), new cc.Scale9Sprite());
        this._editBoxSetTrophyLv.setName("_editBoxSetTrophyLv");
        this._layoutBoxSetTrophyLv.addChild(this._editBoxSetTrophyLv);
        this._editBoxSetTrophyLv.setCascadeOpacityEnabled(true);
        this._editBoxSetTrophyLv.setCascadeColorEnabled(true);
        this._editBoxSetTrophyLv.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxSetTrophyLv, 0.5, 0.5);
        this._editBoxSetTrophyLv.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxSetTrophyLvLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxSetTrophyLv);
        _editBoxSetTrophyLvLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxSetTrophyLvLayoutComponent.setPositionPercentX(0.5);
        _editBoxSetTrophyLvLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxSetTrophyLvLayoutComponent.setPositionPercentY(0.5);
        _editBoxSetTrophyLvLayoutComponent.setPercentWidthEnabled(true);
        _editBoxSetTrophyLvLayoutComponent.setPercentWidth(1);
        _editBoxSetTrophyLvLayoutComponent.setPercentHeightEnabled(true);
        _editBoxSetTrophyLvLayoutComponent.setPercentHeight(1);
        this._editBoxSetTrophyLv.setUnifySizeEnabled(false);
        this._editBoxSetTrophyLv.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxSetTrophyLv, 1, 1);
        this._editBoxSetTrophyLv.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxSetTrophyLv.setFontSize(20);
        this._editBoxSetTrophyLv.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxSetTrophyLv.setPlaceholderFontSize(20);
        this._editBoxSetTrophyLv.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxSetTrophyLv.setPlaceHolder("year;minID;maxID;level (Ex. 2023;1;28;9)");
        this._editBoxSetTrophyLv.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxSetTrophyLv.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutBtnSetTrophyLv
        this._layoutBtnSetTrophyLv = new ccui.Layout();
        this._layoutBtnSetTrophyLv.setName("_layoutBtnSetTrophyLv");
        this._layoutSetTrophyLv.addChild(this._layoutBtnSetTrophyLv);
        this._layoutBtnSetTrophyLv.setCascadeOpacityEnabled(true);
        this._layoutBtnSetTrophyLv.setCascadeColorEnabled(true);
        this._layoutBtnSetTrophyLv.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._layoutBtnSetTrophyLv, 0.9922, 0);
        let _layoutBtnSetTrophyLvLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBtnSetTrophyLv);
        _layoutBtnSetTrophyLvLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBtnSetTrophyLvLayoutComponent.setPositionPercentY(0);
        this._layoutBtnSetTrophyLv.setTouchEnabled(true);
        this._layoutBtnSetTrophyLv.setUnifySizeEnabled(false);
        this._layoutBtnSetTrophyLv.ignoreContentAdaptWithSize(false);
        this._layoutBtnSetTrophyLv.setContentSize(cc.size(100, 50));
        this._layoutBtnSetTrophyLv.setBackGroundColorType(1);
        this._layoutBtnSetTrophyLv.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtSetTrophyLv
        this._txtSetTrophyLv = new ck.Text();
        this._txtSetTrophyLv.setName("_txtSetTrophyLv");
        this._layoutBtnSetTrophyLv.addChild(this._txtSetTrophyLv);
        this._txtSetTrophyLv.setCascadeOpacityEnabled(true);
        this._txtSetTrophyLv.setCascadeColorEnabled(true);
        this._txtSetTrophyLv.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtSetTrophyLv, 0.5, 0.5);
        let _txtSetTrophyLvLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSetTrophyLv);
        this._txtSetTrophyLv.setTouchEnabled(false);
        this._txtSetTrophyLv.ignoreContentAdaptWithSize(true);
        this._txtSetTrophyLv.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSetTrophyLv.setDefaultFontSize(22);
        this._txtSetTrophyLv.setString("Set");
        this._txtSetTrophyLv.setTextHorizontalAlignment(1);
        this._txtSetTrophyLv.setTextVerticalAlignment(1);

        ///// # _layoutSetTrophyTop
        this._layoutSetTrophyTop = new ccui.Layout();
        this._layoutSetTrophyTop.setName("_layoutSetTrophyTop");
        this._layoutTrophy.addChild(this._layoutSetTrophyTop);
        this._layoutSetTrophyTop.setCascadeOpacityEnabled(true);
        this._layoutSetTrophyTop.setCascadeColorEnabled(true);
        this._layoutSetTrophyTop.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutSetTrophyTop, 0.5, 0.561);
        let _layoutSetTrophyTopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSetTrophyTop);
        _layoutSetTrophyTopLayoutComponent.setPositionPercentXEnabled(true);
        _layoutSetTrophyTopLayoutComponent.setPositionPercentX(0.5);
        _layoutSetTrophyTopLayoutComponent.setPercentWidthEnabled(true);
        _layoutSetTrophyTopLayoutComponent.setPercentWidth(1);
        this._layoutSetTrophyTop.setTouchEnabled(false);
        this._layoutSetTrophyTop.setUnifySizeEnabled(false);
        this._layoutSetTrophyTop.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutSetTrophyTop, 1);
        this._layoutSetTrophyTop.setContentSize(cc.size(this._layoutSetTrophyTop.width, 99));

        ///// # _txtSetTrophyTopNote
        this._txtSetTrophyTopNote = new ck.Text();
        this._txtSetTrophyTopNote.setName("_txtSetTrophyTopNote");
        this._layoutSetTrophyTop.addChild(this._txtSetTrophyTopNote);
        this._txtSetTrophyTopNote.setCascadeOpacityEnabled(true);
        this._txtSetTrophyTopNote.setCascadeColorEnabled(true);
        this._txtSetTrophyTopNote.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtSetTrophyTopNote, 0.0212, 1);
        let _txtSetTrophyTopNoteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSetTrophyTopNote);
        _txtSetTrophyTopNoteLayoutComponent.setPositionPercentYEnabled(true);
        _txtSetTrophyTopNoteLayoutComponent.setPositionPercentY(1);
        this._txtSetTrophyTopNote.setTouchEnabled(false);
        this._txtSetTrophyTopNote.setUnifySizeEnabled(false);
        this._txtSetTrophyTopNote.ignoreContentAdaptWithSize(false);
        this._txtSetTrophyTopNote.setContentSize(cc.size(615, 48));
        this._txtSetTrophyTopNote.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSetTrophyTopNote.setDefaultFontSize(20);
        this._txtSetTrophyTopNote.setString("Set top cho trophy (year;minID;maxID;top). Don vi cua top la phan ngan\nYear <= Nam hien tai; Trophy ID: 1-28; minID <= maxID; top: 1-1000");
        this._txtSetTrophyTopNote.setTextHorizontalAlignment(0);
        this._txtSetTrophyTopNote.setTextVerticalAlignment(1);
        this._txtSetTrophyTopNote.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutBoxSetTrophyTop
        this._layoutBoxSetTrophyTop = new ccui.Layout();
        this._layoutBoxSetTrophyTop.setName("_layoutBoxSetTrophyTop");
        this._layoutSetTrophyTop.addChild(this._layoutBoxSetTrophyTop);
        this._layoutBoxSetTrophyTop.setCascadeOpacityEnabled(true);
        this._layoutBoxSetTrophyTop.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutBoxSetTrophyTop, 0.0234, 0);
        let _layoutBoxSetTrophyTopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBoxSetTrophyTop);
        _layoutBoxSetTrophyTopLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBoxSetTrophyTopLayoutComponent.setPositionPercentY(0);
        this._layoutBoxSetTrophyTop.setTouchEnabled(true);
        this._layoutBoxSetTrophyTop.setUnifySizeEnabled(false);
        this._layoutBoxSetTrophyTop.ignoreContentAdaptWithSize(false);
        this._layoutBoxSetTrophyTop.setContentSize(cc.size(510.63, 50));
        this._layoutBoxSetTrophyTop.setBackGroundColorType(1);
        this._layoutBoxSetTrophyTop.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxSetTrophyTop
        this._editBoxSetTrophyTop = new cc.EditBox(cc.size(510.63, 50), new cc.Scale9Sprite());
        this._editBoxSetTrophyTop.setName("_editBoxSetTrophyTop");
        this._layoutBoxSetTrophyTop.addChild(this._editBoxSetTrophyTop);
        this._editBoxSetTrophyTop.setCascadeOpacityEnabled(true);
        this._editBoxSetTrophyTop.setCascadeColorEnabled(true);
        this._editBoxSetTrophyTop.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxSetTrophyTop, 0.5, 0.5);
        this._editBoxSetTrophyTop.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxSetTrophyTopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxSetTrophyTop);
        _editBoxSetTrophyTopLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxSetTrophyTopLayoutComponent.setPositionPercentX(0.5);
        _editBoxSetTrophyTopLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxSetTrophyTopLayoutComponent.setPositionPercentY(0.5);
        _editBoxSetTrophyTopLayoutComponent.setPercentWidthEnabled(true);
        _editBoxSetTrophyTopLayoutComponent.setPercentWidth(1);
        _editBoxSetTrophyTopLayoutComponent.setPercentHeightEnabled(true);
        _editBoxSetTrophyTopLayoutComponent.setPercentHeight(1);
        this._editBoxSetTrophyTop.setUnifySizeEnabled(false);
        this._editBoxSetTrophyTop.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxSetTrophyTop, 1, 1);
        this._editBoxSetTrophyTop.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxSetTrophyTop.setFontSize(20);
        this._editBoxSetTrophyTop.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxSetTrophyTop.setPlaceholderFontSize(20);
        this._editBoxSetTrophyTop.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxSetTrophyTop.setPlaceHolder("year;minID;maxID;top (Ex. 2023;1;28;800) -> Top 80%");
        this._editBoxSetTrophyTop.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxSetTrophyTop.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutBtnSetTrophyTop
        this._layoutBtnSetTrophyTop = new ccui.Layout();
        this._layoutBtnSetTrophyTop.setName("_layoutBtnSetTrophyTop");
        this._layoutSetTrophyTop.addChild(this._layoutBtnSetTrophyTop);
        this._layoutBtnSetTrophyTop.setCascadeOpacityEnabled(true);
        this._layoutBtnSetTrophyTop.setCascadeColorEnabled(true);
        this._layoutBtnSetTrophyTop.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._layoutBtnSetTrophyTop, 0.9922, 0);
        let _layoutBtnSetTrophyTopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBtnSetTrophyTop);
        _layoutBtnSetTrophyTopLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBtnSetTrophyTopLayoutComponent.setPositionPercentY(0);
        this._layoutBtnSetTrophyTop.setTouchEnabled(true);
        this._layoutBtnSetTrophyTop.setUnifySizeEnabled(false);
        this._layoutBtnSetTrophyTop.ignoreContentAdaptWithSize(false);
        this._layoutBtnSetTrophyTop.setContentSize(cc.size(100, 50));
        this._layoutBtnSetTrophyTop.setBackGroundColorType(1);
        this._layoutBtnSetTrophyTop.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtSetTrophyTop
        this._txtSetTrophyTop = new ck.Text();
        this._txtSetTrophyTop.setName("_txtSetTrophyTop");
        this._layoutBtnSetTrophyTop.addChild(this._txtSetTrophyTop);
        this._txtSetTrophyTop.setCascadeOpacityEnabled(true);
        this._txtSetTrophyTop.setCascadeColorEnabled(true);
        this._txtSetTrophyTop.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtSetTrophyTop, 0.5, 0.5);
        let _txtSetTrophyTopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSetTrophyTop);
        this._txtSetTrophyTop.setTouchEnabled(false);
        this._txtSetTrophyTop.ignoreContentAdaptWithSize(true);
        this._txtSetTrophyTop.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSetTrophyTop.setDefaultFontSize(22);
        this._txtSetTrophyTop.setString("Set");
        this._txtSetTrophyTop.setTextHorizontalAlignment(1);
        this._txtSetTrophyTop.setTextVerticalAlignment(1);

        ///// # _layoutNewYearTrophy
        this._layoutNewYearTrophy = new ccui.Layout();
        this._layoutNewYearTrophy.setName("_layoutNewYearTrophy");
        this._layoutTrophy.addChild(this._layoutNewYearTrophy);
        this._layoutNewYearTrophy.setCascadeOpacityEnabled(true);
        this._layoutNewYearTrophy.setCascadeColorEnabled(true);
        this._layoutNewYearTrophy.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutNewYearTrophy, 0.5, 0.3415);
        let _layoutNewYearTrophyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutNewYearTrophy);
        _layoutNewYearTrophyLayoutComponent.setPositionPercentXEnabled(true);
        _layoutNewYearTrophyLayoutComponent.setPositionPercentX(0.5);
        _layoutNewYearTrophyLayoutComponent.setPercentWidthEnabled(true);
        _layoutNewYearTrophyLayoutComponent.setPercentWidth(1);
        this._layoutNewYearTrophy.setTouchEnabled(false);
        this._layoutNewYearTrophy.setUnifySizeEnabled(false);
        this._layoutNewYearTrophy.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutNewYearTrophy, 1);
        this._layoutNewYearTrophy.setContentSize(cc.size(this._layoutNewYearTrophy.width, 99));

        ///// # _txtNewYearTrophyNote
        this._txtNewYearTrophyNote = new ck.Text();
        this._txtNewYearTrophyNote.setName("_txtNewYearTrophyNote");
        this._layoutNewYearTrophy.addChild(this._txtNewYearTrophyNote);
        this._txtNewYearTrophyNote.setCascadeOpacityEnabled(true);
        this._txtNewYearTrophyNote.setCascadeColorEnabled(true);
        this._txtNewYearTrophyNote.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtNewYearTrophyNote, 0.0212, 1);
        let _txtNewYearTrophyNoteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNewYearTrophyNote);
        _txtNewYearTrophyNoteLayoutComponent.setPositionPercentYEnabled(true);
        _txtNewYearTrophyNoteLayoutComponent.setPositionPercentY(1);
        this._txtNewYearTrophyNote.setTouchEnabled(false);
        this._txtNewYearTrophyNote.setUnifySizeEnabled(false);
        this._txtNewYearTrophyNote.ignoreContentAdaptWithSize(false);
        this._txtNewYearTrophyNote.setContentSize(cc.size(615, 48));
        this._txtNewYearTrophyNote.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtNewYearTrophyNote.setDefaultFontSize(20);
        this._txtNewYearTrophyNote.setString("Cong so nam vao nam hien tai (Vi du nam hien tai la 2023 -> +1 thanh 2024)");
        this._txtNewYearTrophyNote.setTextHorizontalAlignment(0);
        this._txtNewYearTrophyNote.setTextVerticalAlignment(1);
        this._txtNewYearTrophyNote.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutBoxNewYearTrophy
        this._layoutBoxNewYearTrophy = new ccui.Layout();
        this._layoutBoxNewYearTrophy.setName("_layoutBoxNewYearTrophy");
        this._layoutNewYearTrophy.addChild(this._layoutBoxNewYearTrophy);
        this._layoutBoxNewYearTrophy.setCascadeOpacityEnabled(true);
        this._layoutBoxNewYearTrophy.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutBoxNewYearTrophy, 0.0234, 0);
        let _layoutBoxNewYearTrophyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBoxNewYearTrophy);
        _layoutBoxNewYearTrophyLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBoxNewYearTrophyLayoutComponent.setPositionPercentY(0);
        this._layoutBoxNewYearTrophy.setTouchEnabled(true);
        this._layoutBoxNewYearTrophy.setUnifySizeEnabled(false);
        this._layoutBoxNewYearTrophy.ignoreContentAdaptWithSize(false);
        this._layoutBoxNewYearTrophy.setContentSize(cc.size(510.63, 50));
        this._layoutBoxNewYearTrophy.setBackGroundColorType(1);
        this._layoutBoxNewYearTrophy.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxNewYearTrophy
        this._editBoxNewYearTrophy = new cc.EditBox(cc.size(510.63, 50), new cc.Scale9Sprite());
        this._editBoxNewYearTrophy.setName("_editBoxNewYearTrophy");
        this._layoutBoxNewYearTrophy.addChild(this._editBoxNewYearTrophy);
        this._editBoxNewYearTrophy.setCascadeOpacityEnabled(true);
        this._editBoxNewYearTrophy.setCascadeColorEnabled(true);
        this._editBoxNewYearTrophy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxNewYearTrophy, 0.5, 0.5);
        this._editBoxNewYearTrophy.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxNewYearTrophyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxNewYearTrophy);
        _editBoxNewYearTrophyLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxNewYearTrophyLayoutComponent.setPositionPercentX(0.5);
        _editBoxNewYearTrophyLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxNewYearTrophyLayoutComponent.setPositionPercentY(0.5);
        _editBoxNewYearTrophyLayoutComponent.setPercentWidthEnabled(true);
        _editBoxNewYearTrophyLayoutComponent.setPercentWidth(1);
        _editBoxNewYearTrophyLayoutComponent.setPercentHeightEnabled(true);
        _editBoxNewYearTrophyLayoutComponent.setPercentHeight(1);
        this._editBoxNewYearTrophy.setUnifySizeEnabled(false);
        this._editBoxNewYearTrophy.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxNewYearTrophy, 1, 1);
        this._editBoxNewYearTrophy.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxNewYearTrophy.setFontSize(22);
        this._editBoxNewYearTrophy.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxNewYearTrophy.setPlaceholderFontSize(22);
        this._editBoxNewYearTrophy.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxNewYearTrophy.setPlaceHolder("Ex. 1 -> +1 Year");
        this._editBoxNewYearTrophy.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxNewYearTrophy.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutBtnNewYearTrophy
        this._layoutBtnNewYearTrophy = new ccui.Layout();
        this._layoutBtnNewYearTrophy.setName("_layoutBtnNewYearTrophy");
        this._layoutNewYearTrophy.addChild(this._layoutBtnNewYearTrophy);
        this._layoutBtnNewYearTrophy.setCascadeOpacityEnabled(true);
        this._layoutBtnNewYearTrophy.setCascadeColorEnabled(true);
        this._layoutBtnNewYearTrophy.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._layoutBtnNewYearTrophy, 0.9922, 0);
        let _layoutBtnNewYearTrophyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBtnNewYearTrophy);
        _layoutBtnNewYearTrophyLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBtnNewYearTrophyLayoutComponent.setPositionPercentY(0);
        this._layoutBtnNewYearTrophy.setTouchEnabled(true);
        this._layoutBtnNewYearTrophy.setUnifySizeEnabled(false);
        this._layoutBtnNewYearTrophy.ignoreContentAdaptWithSize(false);
        this._layoutBtnNewYearTrophy.setContentSize(cc.size(100, 50));
        this._layoutBtnNewYearTrophy.setBackGroundColorType(1);
        this._layoutBtnNewYearTrophy.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtNewYearTrophy
        this._txtNewYearTrophy = new ck.Text();
        this._txtNewYearTrophy.setName("_txtNewYearTrophy");
        this._layoutBtnNewYearTrophy.addChild(this._txtNewYearTrophy);
        this._txtNewYearTrophy.setCascadeOpacityEnabled(true);
        this._txtNewYearTrophy.setCascadeColorEnabled(true);
        this._txtNewYearTrophy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNewYearTrophy, 0.5, 0.5);
        let _txtNewYearTrophyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNewYearTrophy);
        this._txtNewYearTrophy.setTouchEnabled(false);
        this._txtNewYearTrophy.ignoreContentAdaptWithSize(true);
        this._txtNewYearTrophy.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtNewYearTrophy.setDefaultFontSize(22);
        this._txtNewYearTrophy.setString("Add");
        this._txtNewYearTrophy.setTextHorizontalAlignment(1);
        this._txtNewYearTrophy.setTextVerticalAlignment(1);

        ///// # _layoutClearTrophy
        this._layoutClearTrophy = new ccui.Layout();
        this._layoutClearTrophy.setName("_layoutClearTrophy");
        this._layoutTrophy.addChild(this._layoutClearTrophy);
        this._layoutClearTrophy.setCascadeOpacityEnabled(true);
        this._layoutClearTrophy.setCascadeColorEnabled(true);
        this._layoutClearTrophy.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutClearTrophy, 0.5, 0.122);
        let _layoutClearTrophyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutClearTrophy);
        _layoutClearTrophyLayoutComponent.setPositionPercentXEnabled(true);
        _layoutClearTrophyLayoutComponent.setPositionPercentX(0.5);
        _layoutClearTrophyLayoutComponent.setPercentWidthEnabled(true);
        _layoutClearTrophyLayoutComponent.setPercentWidth(1);
        this._layoutClearTrophy.setTouchEnabled(false);
        this._layoutClearTrophy.setUnifySizeEnabled(false);
        this._layoutClearTrophy.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutClearTrophy, 1);
        this._layoutClearTrophy.setContentSize(cc.size(this._layoutClearTrophy.width, 55));

        ///// # _txtClearTrophyNote
        this._txtClearTrophyNote = new ck.Text();
        this._txtClearTrophyNote.setName("_txtClearTrophyNote");
        this._layoutClearTrophy.addChild(this._txtClearTrophyNote);
        this._txtClearTrophyNote.setCascadeOpacityEnabled(true);
        this._txtClearTrophyNote.setCascadeColorEnabled(true);
        this._txtClearTrophyNote.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtClearTrophyNote, 0.0212, 1);
        let _txtClearTrophyNoteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtClearTrophyNote);
        _txtClearTrophyNoteLayoutComponent.setPositionPercentYEnabled(true);
        _txtClearTrophyNoteLayoutComponent.setPositionPercentY(1);
        this._txtClearTrophyNote.setTouchEnabled(false);
        this._txtClearTrophyNote.setUnifySizeEnabled(false);
        this._txtClearTrophyNote.ignoreContentAdaptWithSize(false);
        this._txtClearTrophyNote.setContentSize(cc.size(615, 48));
        this._txtClearTrophyNote.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtClearTrophyNote.setDefaultFontSize(20);
        this._txtClearTrophyNote.setString("Reset data tat ca trophy va Reset nam hien tai");
        this._txtClearTrophyNote.setTextHorizontalAlignment(0);
        this._txtClearTrophyNote.setTextVerticalAlignment(1);
        this._txtClearTrophyNote.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutBtnClearTrophy
        this._layoutBtnClearTrophy = new ccui.Layout();
        this._layoutBtnClearTrophy.setName("_layoutBtnClearTrophy");
        this._layoutClearTrophy.addChild(this._layoutBtnClearTrophy);
        this._layoutBtnClearTrophy.setCascadeOpacityEnabled(true);
        this._layoutBtnClearTrophy.setCascadeColorEnabled(true);
        this._layoutBtnClearTrophy.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._layoutBtnClearTrophy, 0.9922, 0);
        let _layoutBtnClearTrophyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBtnClearTrophy);
        _layoutBtnClearTrophyLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBtnClearTrophyLayoutComponent.setPositionPercentY(0);
        this._layoutBtnClearTrophy.setTouchEnabled(true);
        this._layoutBtnClearTrophy.setUnifySizeEnabled(false);
        this._layoutBtnClearTrophy.ignoreContentAdaptWithSize(false);
        this._layoutBtnClearTrophy.setContentSize(cc.size(100, 50));
        this._layoutBtnClearTrophy.setBackGroundColorType(1);
        this._layoutBtnClearTrophy.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtClearTrophy
        this._txtClearTrophy = new ck.Text();
        this._txtClearTrophy.setName("_txtClearTrophy");
        this._layoutBtnClearTrophy.addChild(this._txtClearTrophy);
        this._txtClearTrophy.setCascadeOpacityEnabled(true);
        this._txtClearTrophy.setCascadeColorEnabled(true);
        this._txtClearTrophy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtClearTrophy, 0.5, 0.5);
        let _txtClearTrophyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtClearTrophy);
        this._txtClearTrophy.setTouchEnabled(false);
        this._txtClearTrophy.ignoreContentAdaptWithSize(true);
        this._txtClearTrophy.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtClearTrophy.setDefaultFontSize(22);
        this._txtClearTrophy.setString("Clear All\nTrophy");
        this._txtClearTrophy.setTextHorizontalAlignment(1);
        this._txtClearTrophy.setTextVerticalAlignment(1);

        ///// # _layoutLeagueHeader
        this._layoutLeagueHeader = new ccui.Layout();
        this._layoutLeagueHeader.setName("_layoutLeagueHeader");
        this._listView.pushBackCustomItem(this._layoutLeagueHeader);
        this._layoutLeagueHeader.setCascadeOpacityEnabled(true);
        this._layoutLeagueHeader.setCascadeColorEnabled(true);
        this._layoutLeagueHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutLeagueHeader, 0.5, 0.0957);
        let _layoutLeagueHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLeagueHeader);
        this._layoutLeagueHeader.setTouchEnabled(true);
        this._layoutLeagueHeader.setUnifySizeEnabled(false);
        this._layoutLeagueHeader.ignoreContentAdaptWithSize(false);
        this._layoutLeagueHeader.setContentSize(cc.size(640, 40));

        ///// # _txtLeagueHeader
        this._txtLeagueHeader = new ck.Text();
        this._txtLeagueHeader.setName("_txtLeagueHeader");
        this._layoutLeagueHeader.addChild(this._txtLeagueHeader);
        this._txtLeagueHeader.setCascadeOpacityEnabled(true);
        this._txtLeagueHeader.setCascadeColorEnabled(true);
        this._txtLeagueHeader.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLeagueHeader, 0.07, 0.5);
        let _txtLeagueHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLeagueHeader);
        _txtLeagueHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtLeagueHeaderLayoutComponent.setPositionPercentX(0.07);
        _txtLeagueHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtLeagueHeaderLayoutComponent.setPositionPercentY(0.5);
        this._txtLeagueHeader.setTouchEnabled(false);
        this._txtLeagueHeader.ignoreContentAdaptWithSize(true);
        this._txtLeagueHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLeagueHeader.setDefaultFontSize(25);
        this._txtLeagueHeader.setString("League");
        this._txtLeagueHeader.setTextHorizontalAlignment(1);
        this._txtLeagueHeader.setTextVerticalAlignment(1);
        this._txtLeagueHeader.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _lineBot
        this._lineBot = new ccui.Layout();
        this._lineBot.setName("_lineBot");
        this._layoutLeagueHeader.addChild(this._lineBot);
        this._lineBot.setCascadeOpacityEnabled(true);
        this._lineBot.setCascadeColorEnabled(true);
        this._lineBot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineBot, 0.5, 0);
        let _lineBotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineBot);
        _lineBotLayoutComponent.setPositionPercentXEnabled(true);
        _lineBotLayoutComponent.setPositionPercentX(0.5);
        _lineBotLayoutComponent.setPositionPercentYEnabled(true);
        _lineBotLayoutComponent.setPositionPercentY(0);
        _lineBotLayoutComponent.setPercentWidthEnabled(true);
        _lineBotLayoutComponent.setPercentWidth(0.97);
        this._lineBot.setTouchEnabled(false);
        this._lineBot.setUnifySizeEnabled(false);
        this._lineBot.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineBot, 0.97);
        this._lineBot.setContentSize(cc.size(this._lineBot.width, 3));
        this._lineBot.setBackGroundColorType(1);
        this._lineBot.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _lineTop
        this._lineTop = new ccui.Layout();
        this._lineTop.setName("_lineTop");
        this._layoutLeagueHeader.addChild(this._lineTop);
        this._lineTop.setCascadeOpacityEnabled(true);
        this._lineTop.setCascadeColorEnabled(true);
        this._lineTop.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lineTop, 0.5, 1);
        let _lineTopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lineTop);
        _lineTopLayoutComponent.setPositionPercentXEnabled(true);
        _lineTopLayoutComponent.setPositionPercentX(0.5);
        _lineTopLayoutComponent.setPositionPercentYEnabled(true);
        _lineTopLayoutComponent.setPositionPercentY(1);
        _lineTopLayoutComponent.setPercentWidthEnabled(true);
        _lineTopLayoutComponent.setPercentWidth(0.97);
        this._lineTop.setTouchEnabled(false);
        this._lineTop.setUnifySizeEnabled(false);
        this._lineTop.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lineTop, 0.97);
        this._lineTop.setContentSize(cc.size(this._lineTop.width, 3));
        this._lineTop.setBackGroundColorType(1);
        this._lineTop.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _imgExpandLeague
        this._imgExpandLeague = new ccui.ImageView();
        this._imgExpandLeague.setName("_imgExpandLeague");
        this._layoutLeagueHeader.addChild(this._imgExpandLeague);
        this._imgExpandLeague.setCascadeOpacityEnabled(true);
        this._imgExpandLeague.setCascadeColorEnabled(true);
        this._imgExpandLeague.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgExpandLeague, 0.04, 0.5);
        this._imgExpandLeague.setScale(0.5, 0.5);
        this._imgExpandLeague.setRotation(-90);
        this._imgExpandLeague.setFlippedY(true);
        let _imgExpandLeagueLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExpandLeague);
        _imgExpandLeagueLayoutComponent.setPositionPercentXEnabled(true);
        _imgExpandLeagueLayoutComponent.setPositionPercentX(0.04);
        _imgExpandLeagueLayoutComponent.setPositionPercentYEnabled(true);
        _imgExpandLeagueLayoutComponent.setPositionPercentY(0.5);
        this._imgExpandLeague.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgExpandLeague.setUnifySizeEnabled(false);
        this._imgExpandLeague.ignoreContentAdaptWithSize(false);
        this._imgExpandLeague.setContentSize(cc.size(32, 32));
        this._imgExpandLeague.setTouchEnabled(false);
        this._imgExpandLeague.setFlippedY(true);

        ///// # _imgCollapseLeague
        this._imgCollapseLeague = new ccui.ImageView();
        this._imgCollapseLeague.setName("_imgCollapseLeague");
        this._layoutLeagueHeader.addChild(this._imgCollapseLeague);
        this._imgCollapseLeague.setCascadeOpacityEnabled(true);
        this._imgCollapseLeague.setCascadeColorEnabled(true);
        this._imgCollapseLeague.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCollapseLeague, 0.04, 0.5);
        this._imgCollapseLeague.setScale(0.5, 0.5);
        this._imgCollapseLeague.setRotation(180);
        let _imgCollapseLeagueLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCollapseLeague);
        _imgCollapseLeagueLayoutComponent.setPositionPercentXEnabled(true);
        _imgCollapseLeagueLayoutComponent.setPositionPercentX(0.04);
        _imgCollapseLeagueLayoutComponent.setPositionPercentYEnabled(true);
        _imgCollapseLeagueLayoutComponent.setPositionPercentY(0.5);
        this._imgCollapseLeague.loadTexture("sprites/basics/Triangle32x32.png", 0);
        this._imgCollapseLeague.setUnifySizeEnabled(false);
        this._imgCollapseLeague.ignoreContentAdaptWithSize(false);
        this._imgCollapseLeague.setContentSize(cc.size(32, 32));
        this._imgCollapseLeague.setTouchEnabled(false);

        ///// # _layoutLeague
        this._layoutLeague = new ccui.Layout();
        this._layoutLeague.setName("_layoutLeague");
        this._listView.pushBackCustomItem(this._layoutLeague);
        this._layoutLeague.setCascadeOpacityEnabled(true);
        this._layoutLeague.setCascadeColorEnabled(true);
        this._layoutLeague.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutLeague, 0.5, 0.0443);
        let _layoutLeagueLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLeague);
        this._layoutLeague.setTouchEnabled(false);
        this._layoutLeague.setUnifySizeEnabled(false);
        this._layoutLeague.ignoreContentAdaptWithSize(false);
        this._layoutLeague.setContentSize(cc.size(640, 310));

        ///// # _layoutSetTimeLeague
        this._layoutSetTimeLeague = new ccui.Layout();
        this._layoutSetTimeLeague.setName("_layoutSetTimeLeague");
        this._layoutLeague.addChild(this._layoutSetTimeLeague);
        this._layoutSetTimeLeague.setCascadeOpacityEnabled(true);
        this._layoutSetTimeLeague.setCascadeColorEnabled(true);
        this._layoutSetTimeLeague.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutSetTimeLeague, 0.5, 1);
        let _layoutSetTimeLeagueLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSetTimeLeague);
        _layoutSetTimeLeagueLayoutComponent.setPositionPercentXEnabled(true);
        _layoutSetTimeLeagueLayoutComponent.setPositionPercentX(0.5);
        _layoutSetTimeLeagueLayoutComponent.setPositionPercentYEnabled(true);
        _layoutSetTimeLeagueLayoutComponent.setPositionPercentY(1);
        _layoutSetTimeLeagueLayoutComponent.setPercentWidthEnabled(true);
        _layoutSetTimeLeagueLayoutComponent.setPercentWidth(1);
        this._layoutSetTimeLeague.setTouchEnabled(false);
        this._layoutSetTimeLeague.setUnifySizeEnabled(false);
        this._layoutSetTimeLeague.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutSetTimeLeague, 1);
        this._layoutSetTimeLeague.setContentSize(cc.size(this._layoutSetTimeLeague.width, 99));

        ///// # _txtSetTimeLeagueNote
        this._txtSetTimeLeagueNote = new ck.Text();
        this._txtSetTimeLeagueNote.setName("_txtSetTimeLeagueNote");
        this._layoutSetTimeLeague.addChild(this._txtSetTimeLeagueNote);
        this._txtSetTimeLeagueNote.setCascadeOpacityEnabled(true);
        this._txtSetTimeLeagueNote.setCascadeColorEnabled(true);
        this._txtSetTimeLeagueNote.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtSetTimeLeagueNote, 0.0212, 1);
        let _txtSetTimeLeagueNoteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSetTimeLeagueNote);
        _txtSetTimeLeagueNoteLayoutComponent.setPositionPercentYEnabled(true);
        _txtSetTimeLeagueNoteLayoutComponent.setPositionPercentY(1);
        this._txtSetTimeLeagueNote.setTouchEnabled(false);
        this._txtSetTimeLeagueNote.setUnifySizeEnabled(false);
        this._txtSetTimeLeagueNote.ignoreContentAdaptWithSize(false);
        this._txtSetTimeLeagueNote.setContentSize(cc.size(615, 48));
        this._txtSetTimeLeagueNote.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSetTimeLeagueNote.setDefaultFontSize(20);
        this._txtSetTimeLeagueNote.setString("Set Thoi gian con lai cua League (mins)");
        this._txtSetTimeLeagueNote.setTextHorizontalAlignment(0);
        this._txtSetTimeLeagueNote.setTextVerticalAlignment(1);
        this._txtSetTimeLeagueNote.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutBoxAddBotLeague1
        this._layoutBoxAddBotLeague1 = new ccui.Layout();
        this._layoutBoxAddBotLeague1.setName("_layoutBoxAddBotLeague1");
        this._layoutSetTimeLeague.addChild(this._layoutBoxAddBotLeague1);
        this._layoutBoxAddBotLeague1.setCascadeOpacityEnabled(true);
        this._layoutBoxAddBotLeague1.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutBoxAddBotLeague1, 0.0234, 0);
        let _layoutBoxAddBotLeague1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBoxAddBotLeague1);
        _layoutBoxAddBotLeague1LayoutComponent.setPositionPercentYEnabled(true);
        _layoutBoxAddBotLeague1LayoutComponent.setPositionPercentY(0);
        this._layoutBoxAddBotLeague1.setTouchEnabled(true);
        this._layoutBoxAddBotLeague1.setUnifySizeEnabled(false);
        this._layoutBoxAddBotLeague1.ignoreContentAdaptWithSize(false);
        this._layoutBoxAddBotLeague1.setContentSize(cc.size(510.63, 50));
        this._layoutBoxAddBotLeague1.setBackGroundColorType(1);
        this._layoutBoxAddBotLeague1.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxAddBotLeague1
        this._editBoxAddBotLeague1 = new cc.EditBox(cc.size(510.63, 50), new cc.Scale9Sprite());
        this._editBoxAddBotLeague1.setName("_editBoxAddBotLeague1");
        this._layoutBoxAddBotLeague1.addChild(this._editBoxAddBotLeague1);
        this._editBoxAddBotLeague1.setCascadeOpacityEnabled(true);
        this._editBoxAddBotLeague1.setCascadeColorEnabled(true);
        this._editBoxAddBotLeague1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxAddBotLeague1, 0.5, 0.5);
        this._editBoxAddBotLeague1.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxAddBotLeague1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxAddBotLeague1);
        _editBoxAddBotLeague1LayoutComponent.setPositionPercentXEnabled(true);
        _editBoxAddBotLeague1LayoutComponent.setPositionPercentX(0.5);
        _editBoxAddBotLeague1LayoutComponent.setPositionPercentYEnabled(true);
        _editBoxAddBotLeague1LayoutComponent.setPositionPercentY(0.5);
        _editBoxAddBotLeague1LayoutComponent.setPercentWidthEnabled(true);
        _editBoxAddBotLeague1LayoutComponent.setPercentWidth(1);
        _editBoxAddBotLeague1LayoutComponent.setPercentHeightEnabled(true);
        _editBoxAddBotLeague1LayoutComponent.setPercentHeight(1);
        this._editBoxAddBotLeague1.setUnifySizeEnabled(false);
        this._editBoxAddBotLeague1.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxAddBotLeague1, 1, 1);
        this._editBoxAddBotLeague1.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxAddBotLeague1.setFontSize(22);
        this._editBoxAddBotLeague1.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxAddBotLeague1.setPlaceholderFontSize(22);
        this._editBoxAddBotLeague1.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxAddBotLeague1.setPlaceHolder("5");
        this._editBoxAddBotLeague1.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxAddBotLeague1.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutBtnSetTimeLeague
        this._layoutBtnSetTimeLeague = new ccui.Layout();
        this._layoutBtnSetTimeLeague.setName("_layoutBtnSetTimeLeague");
        this._layoutSetTimeLeague.addChild(this._layoutBtnSetTimeLeague);
        this._layoutBtnSetTimeLeague.setCascadeOpacityEnabled(true);
        this._layoutBtnSetTimeLeague.setCascadeColorEnabled(true);
        this._layoutBtnSetTimeLeague.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._layoutBtnSetTimeLeague, 0.9922, 0);
        let _layoutBtnSetTimeLeagueLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBtnSetTimeLeague);
        _layoutBtnSetTimeLeagueLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBtnSetTimeLeagueLayoutComponent.setPositionPercentY(0);
        this._layoutBtnSetTimeLeague.setTouchEnabled(true);
        this._layoutBtnSetTimeLeague.setUnifySizeEnabled(false);
        this._layoutBtnSetTimeLeague.ignoreContentAdaptWithSize(false);
        this._layoutBtnSetTimeLeague.setContentSize(cc.size(100, 50));
        this._layoutBtnSetTimeLeague.setBackGroundColorType(1);
        this._layoutBtnSetTimeLeague.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtAddTrophy
        this._txtAddTrophy = new ck.Text();
        this._txtAddTrophy.setName("_txtAddTrophy");
        this._layoutBtnSetTimeLeague.addChild(this._txtAddTrophy);
        this._txtAddTrophy.setCascadeOpacityEnabled(true);
        this._txtAddTrophy.setCascadeColorEnabled(true);
        this._txtAddTrophy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAddTrophy, 0.5, 0.5);
        let _txtAddTrophyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAddTrophy);
        this._txtAddTrophy.setTouchEnabled(false);
        this._txtAddTrophy.ignoreContentAdaptWithSize(true);
        this._txtAddTrophy.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAddTrophy.setDefaultFontSize(22);
        this._txtAddTrophy.setString("Set");
        this._txtAddTrophy.setTextHorizontalAlignment(1);
        this._txtAddTrophy.setTextVerticalAlignment(1);

        ///// # _layoutAddBotLeague
        this._layoutAddBotLeague = new ccui.Layout();
        this._layoutAddBotLeague.setName("_layoutAddBotLeague");
        this._layoutLeague.addChild(this._layoutAddBotLeague);
        this._layoutAddBotLeague.setCascadeOpacityEnabled(true);
        this._layoutAddBotLeague.setCascadeColorEnabled(true);
        this._layoutAddBotLeague.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutAddBotLeague, 0.5, 0.6848);
        let _layoutAddBotLeagueLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAddBotLeague);
        _layoutAddBotLeagueLayoutComponent.setPositionPercentXEnabled(true);
        _layoutAddBotLeagueLayoutComponent.setPositionPercentX(0.5);
        _layoutAddBotLeagueLayoutComponent.setPositionPercentYEnabled(true);
        _layoutAddBotLeagueLayoutComponent.setPositionPercentY(0.6848);
        _layoutAddBotLeagueLayoutComponent.setPercentWidthEnabled(true);
        _layoutAddBotLeagueLayoutComponent.setPercentWidth(1);
        this._layoutAddBotLeague.setTouchEnabled(false);
        this._layoutAddBotLeague.setUnifySizeEnabled(false);
        this._layoutAddBotLeague.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutAddBotLeague, 1);
        this._layoutAddBotLeague.setContentSize(cc.size(this._layoutAddBotLeague.width, 99));

        ///// # _layoutBoxAddBotLeague1_0
        this._layoutBoxAddBotLeague1_0 = new ccui.Layout();
        this._layoutBoxAddBotLeague1_0.setName("_layoutBoxAddBotLeague1_0");
        this._layoutAddBotLeague.addChild(this._layoutBoxAddBotLeague1_0);
        this._layoutBoxAddBotLeague1_0.setCascadeOpacityEnabled(true);
        this._layoutBoxAddBotLeague1_0.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutBoxAddBotLeague1_0, 0.0271, 0.0611);
        let _layoutBoxAddBotLeague1_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBoxAddBotLeague1_0);
        _layoutBoxAddBotLeague1_0LayoutComponent.setPositionPercentYEnabled(true);
        _layoutBoxAddBotLeague1_0LayoutComponent.setPositionPercentY(0.0611);
        this._layoutBoxAddBotLeague1_0.setTouchEnabled(true);
        this._layoutBoxAddBotLeague1_0.setUnifySizeEnabled(false);
        this._layoutBoxAddBotLeague1_0.ignoreContentAdaptWithSize(false);
        this._layoutBoxAddBotLeague1_0.setContentSize(cc.size(131.6643, 50));
        this._layoutBoxAddBotLeague1_0.setBackGroundColorType(1);
        this._layoutBoxAddBotLeague1_0.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxAddBotScoreLeague1
        this._editBoxAddBotScoreLeague1 = new cc.EditBox(cc.size(131.6643, 50), new cc.Scale9Sprite());
        this._editBoxAddBotScoreLeague1.setName("_editBoxAddBotScoreLeague1");
        this._layoutBoxAddBotLeague1_0.addChild(this._editBoxAddBotScoreLeague1);
        this._editBoxAddBotScoreLeague1.setCascadeOpacityEnabled(true);
        this._editBoxAddBotScoreLeague1.setCascadeColorEnabled(true);
        this._editBoxAddBotScoreLeague1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxAddBotScoreLeague1, 0.5, 0.5);
        this._editBoxAddBotScoreLeague1.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxAddBotScoreLeague1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxAddBotScoreLeague1);
        _editBoxAddBotScoreLeague1LayoutComponent.setPositionPercentXEnabled(true);
        _editBoxAddBotScoreLeague1LayoutComponent.setPositionPercentX(0.5);
        _editBoxAddBotScoreLeague1LayoutComponent.setPositionPercentYEnabled(true);
        _editBoxAddBotScoreLeague1LayoutComponent.setPositionPercentY(0.5);
        _editBoxAddBotScoreLeague1LayoutComponent.setPercentWidthEnabled(true);
        _editBoxAddBotScoreLeague1LayoutComponent.setPercentWidth(1);
        _editBoxAddBotScoreLeague1LayoutComponent.setPercentHeightEnabled(true);
        _editBoxAddBotScoreLeague1LayoutComponent.setPercentHeight(1);
        this._editBoxAddBotScoreLeague1.setUnifySizeEnabled(false);
        this._editBoxAddBotScoreLeague1.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxAddBotScoreLeague1, 1, 1);
        this._editBoxAddBotScoreLeague1.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxAddBotScoreLeague1.setFontSize(22);
        this._editBoxAddBotScoreLeague1.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxAddBotScoreLeague1.setPlaceholderFontSize(22);
        this._editBoxAddBotScoreLeague1.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxAddBotScoreLeague1.setPlaceHolder("100");
        this._editBoxAddBotScoreLeague1.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxAddBotScoreLeague1.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _txtSetTrophyLvNote
        this._txtSetTrophyLvNote = new ck.Text();
        this._txtSetTrophyLvNote.setName("_txtSetTrophyLvNote");
        this._layoutAddBotLeague.addChild(this._txtSetTrophyLvNote);
        this._txtSetTrophyLvNote.setCascadeOpacityEnabled(true);
        this._txtSetTrophyLvNote.setCascadeColorEnabled(true);
        this._txtSetTrophyLvNote.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtSetTrophyLvNote, 0.0212, 1);
        let _txtSetTrophyLvNoteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSetTrophyLvNote);
        _txtSetTrophyLvNoteLayoutComponent.setPositionPercentYEnabled(true);
        _txtSetTrophyLvNoteLayoutComponent.setPositionPercentY(1);
        this._txtSetTrophyLvNote.setTouchEnabled(false);
        this._txtSetTrophyLvNote.setUnifySizeEnabled(false);
        this._txtSetTrophyLvNote.ignoreContentAdaptWithSize(false);
        this._txtSetTrophyLvNote.setContentSize(cc.size(615, 48));
        this._txtSetTrophyLvNote.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSetTrophyLvNote.setDefaultFontSize(20);
        this._txtSetTrophyLvNote.setString("Them Bot cho vua du min(Score: 100)");
        this._txtSetTrophyLvNote.setTextHorizontalAlignment(0);
        this._txtSetTrophyLvNote.setTextVerticalAlignment(1);
        this._txtSetTrophyLvNote.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutBtnSetMinBot
        this._layoutBtnSetMinBot = new ccui.Layout();
        this._layoutBtnSetMinBot.setName("_layoutBtnSetMinBot");
        this._layoutAddBotLeague.addChild(this._layoutBtnSetMinBot);
        this._layoutBtnSetMinBot.setCascadeOpacityEnabled(true);
        this._layoutBtnSetMinBot.setCascadeColorEnabled(true);
        this._layoutBtnSetMinBot.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._layoutBtnSetMinBot, 0.3998, 0.0588);
        let _layoutBtnSetMinBotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBtnSetMinBot);
        _layoutBtnSetMinBotLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBtnSetMinBotLayoutComponent.setPositionPercentY(0.0588);
        this._layoutBtnSetMinBot.setTouchEnabled(true);
        this._layoutBtnSetMinBot.setUnifySizeEnabled(false);
        this._layoutBtnSetMinBot.ignoreContentAdaptWithSize(false);
        this._layoutBtnSetMinBot.setContentSize(cc.size(100, 50));
        this._layoutBtnSetMinBot.setBackGroundColorType(1);
        this._layoutBtnSetMinBot.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtSetTrophyLv
        this._txtSetTrophyLv = new ck.Text();
        this._txtSetTrophyLv.setName("_txtSetTrophyLv");
        this._layoutBtnSetMinBot.addChild(this._txtSetTrophyLv);
        this._txtSetTrophyLv.setCascadeOpacityEnabled(true);
        this._txtSetTrophyLv.setCascadeColorEnabled(true);
        this._txtSetTrophyLv.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtSetTrophyLv, 0.5, 0.5);
        let _txtSetTrophyLvLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSetTrophyLv);
        this._txtSetTrophyLv.setTouchEnabled(false);
        this._txtSetTrophyLv.ignoreContentAdaptWithSize(true);
        this._txtSetTrophyLv.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSetTrophyLv.setDefaultFontSize(22);
        this._txtSetTrophyLv.setString("Add");
        this._txtSetTrophyLv.setTextHorizontalAlignment(1);
        this._txtSetTrophyLv.setTextVerticalAlignment(1);

        ///// # _layoutAddBotLeague2
        this._layoutAddBotLeague2 = new ccui.Layout();
        this._layoutAddBotLeague2.setName("_layoutAddBotLeague2");
        this._layoutLeague.addChild(this._layoutAddBotLeague2);
        this._layoutAddBotLeague2.setCascadeOpacityEnabled(true);
        this._layoutAddBotLeague2.setCascadeColorEnabled(true);
        this._layoutAddBotLeague2.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutAddBotLeague2, 0.5, 0.3722);
        let _layoutAddBotLeague2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAddBotLeague2);
        _layoutAddBotLeague2LayoutComponent.setPositionPercentXEnabled(true);
        _layoutAddBotLeague2LayoutComponent.setPositionPercentX(0.5);
        _layoutAddBotLeague2LayoutComponent.setPositionPercentYEnabled(true);
        _layoutAddBotLeague2LayoutComponent.setPositionPercentY(0.3722);
        _layoutAddBotLeague2LayoutComponent.setPercentWidthEnabled(true);
        _layoutAddBotLeague2LayoutComponent.setPercentWidth(1);
        this._layoutAddBotLeague2.setTouchEnabled(false);
        this._layoutAddBotLeague2.setUnifySizeEnabled(false);
        this._layoutAddBotLeague2.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutAddBotLeague2, 1);
        this._layoutAddBotLeague2.setContentSize(cc.size(this._layoutAddBotLeague2.width, 99));

        ///// # _txtSetTrophyTopNote
        this._txtSetTrophyTopNote = new ck.Text();
        this._txtSetTrophyTopNote.setName("_txtSetTrophyTopNote");
        this._layoutAddBotLeague2.addChild(this._txtSetTrophyTopNote);
        this._txtSetTrophyTopNote.setCascadeOpacityEnabled(true);
        this._txtSetTrophyTopNote.setCascadeColorEnabled(true);
        this._txtSetTrophyTopNote.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtSetTrophyTopNote, 0.0212, 1);
        let _txtSetTrophyTopNoteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSetTrophyTopNote);
        _txtSetTrophyTopNoteLayoutComponent.setPositionPercentYEnabled(true);
        _txtSetTrophyTopNoteLayoutComponent.setPositionPercentY(1);
        this._txtSetTrophyTopNote.setTouchEnabled(false);
        this._txtSetTrophyTopNote.setUnifySizeEnabled(false);
        this._txtSetTrophyTopNote.ignoreContentAdaptWithSize(false);
        this._txtSetTrophyTopNote.setContentSize(cc.size(615, 48));
        this._txtSetTrophyTopNote.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSetTrophyTopNote.setDefaultFontSize(20);
        this._txtSetTrophyTopNote.setString("Them EXP: [amount];[score]");
        this._txtSetTrophyTopNote.setTextHorizontalAlignment(0);
        this._txtSetTrophyTopNote.setTextVerticalAlignment(1);
        this._txtSetTrophyTopNote.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutBoxSetTrophyTop
        this._layoutBoxSetTrophyTop = new ccui.Layout();
        this._layoutBoxSetTrophyTop.setName("_layoutBoxSetTrophyTop");
        this._layoutAddBotLeague2.addChild(this._layoutBoxSetTrophyTop);
        this._layoutBoxSetTrophyTop.setCascadeOpacityEnabled(true);
        this._layoutBoxSetTrophyTop.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutBoxSetTrophyTop, 0.0234, 0);
        let _layoutBoxSetTrophyTopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBoxSetTrophyTop);
        _layoutBoxSetTrophyTopLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBoxSetTrophyTopLayoutComponent.setPositionPercentY(0);
        this._layoutBoxSetTrophyTop.setTouchEnabled(true);
        this._layoutBoxSetTrophyTop.setUnifySizeEnabled(false);
        this._layoutBoxSetTrophyTop.ignoreContentAdaptWithSize(false);
        this._layoutBoxSetTrophyTop.setContentSize(cc.size(510.63, 50));
        this._layoutBoxSetTrophyTop.setBackGroundColorType(1);
        this._layoutBoxSetTrophyTop.setBackGroundColor(cc.color(37, 37, 37, 255));

        ///// # _editBoxAddBot2
        this._editBoxAddBot2 = new cc.EditBox(cc.size(510.63, 50), new cc.Scale9Sprite());
        this._editBoxAddBot2.setName("_editBoxAddBot2");
        this._layoutBoxSetTrophyTop.addChild(this._editBoxAddBot2);
        this._editBoxAddBot2.setCascadeOpacityEnabled(true);
        this._editBoxAddBot2.setCascadeColorEnabled(true);
        this._editBoxAddBot2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxAddBot2, 0.5, 0.5);
        this._editBoxAddBot2.setFontColor(cc.color(127, 127, 127, 255));
        let _editBoxAddBot2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxAddBot2);
        _editBoxAddBot2LayoutComponent.setPositionPercentXEnabled(true);
        _editBoxAddBot2LayoutComponent.setPositionPercentX(0.5);
        _editBoxAddBot2LayoutComponent.setPositionPercentYEnabled(true);
        _editBoxAddBot2LayoutComponent.setPositionPercentY(0.5);
        _editBoxAddBot2LayoutComponent.setPercentWidthEnabled(true);
        _editBoxAddBot2LayoutComponent.setPercentWidth(1);
        _editBoxAddBot2LayoutComponent.setPercentHeightEnabled(true);
        _editBoxAddBot2LayoutComponent.setPercentHeight(1);
        this._editBoxAddBot2.setUnifySizeEnabled(false);
        this._editBoxAddBot2.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxAddBot2, 1, 1);
        this._editBoxAddBot2.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxAddBot2.setFontSize(20);
        this._editBoxAddBot2.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxAddBot2.setPlaceholderFontSize(20);
        this._editBoxAddBot2.setPlaceholderFontColor(cc.color(127, 127, 127, 255));
        this._editBoxAddBot2.setPlaceHolder("1;100");
        this._editBoxAddBot2.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxAddBot2.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _layoutBtnAddBotLeague
        this._layoutBtnAddBotLeague = new ccui.Layout();
        this._layoutBtnAddBotLeague.setName("_layoutBtnAddBotLeague");
        this._layoutAddBotLeague2.addChild(this._layoutBtnAddBotLeague);
        this._layoutBtnAddBotLeague.setCascadeOpacityEnabled(true);
        this._layoutBtnAddBotLeague.setCascadeColorEnabled(true);
        this._layoutBtnAddBotLeague.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._layoutBtnAddBotLeague, 0.9922, 0);
        let _layoutBtnAddBotLeagueLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBtnAddBotLeague);
        _layoutBtnAddBotLeagueLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBtnAddBotLeagueLayoutComponent.setPositionPercentY(0);
        this._layoutBtnAddBotLeague.setTouchEnabled(true);
        this._layoutBtnAddBotLeague.setUnifySizeEnabled(false);
        this._layoutBtnAddBotLeague.ignoreContentAdaptWithSize(false);
        this._layoutBtnAddBotLeague.setContentSize(cc.size(100, 50));
        this._layoutBtnAddBotLeague.setBackGroundColorType(1);
        this._layoutBtnAddBotLeague.setBackGroundColor(cc.color(111, 111, 111, 255));

        ///// # _txtLeagueAdd
        this._txtLeagueAdd = new ck.Text();
        this._txtLeagueAdd.setName("_txtLeagueAdd");
        this._layoutBtnAddBotLeague.addChild(this._txtLeagueAdd);
        this._txtLeagueAdd.setCascadeOpacityEnabled(true);
        this._txtLeagueAdd.setCascadeColorEnabled(true);
        this._txtLeagueAdd.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLeagueAdd, 0.5, 0.5);
        let _txtLeagueAddLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLeagueAdd);
        this._txtLeagueAdd.setTouchEnabled(false);
        this._txtLeagueAdd.ignoreContentAdaptWithSize(true);
        this._txtLeagueAdd.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLeagueAdd.setDefaultFontSize(22);
        this._txtLeagueAdd.setString("Add");
        this._txtLeagueAdd.setTextHorizontalAlignment(1);
        this._txtLeagueAdd.setTextVerticalAlignment(1);

        ///// # _layoutHeader
        this._layoutHeader = new ccui.Layout();
        this._layoutHeader.setName("_layoutHeader");
        this._layoutRoot.addChild(this._layoutHeader);
        this._layoutHeader.setCascadeOpacityEnabled(true);
        this._layoutHeader.setCascadeColorEnabled(true);
        this._layoutHeader.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutHeader, 0.5, 1);
        let _layoutHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHeader);
        _layoutHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _layoutHeaderLayoutComponent.setPositionPercentX(0.5);
        _layoutHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _layoutHeaderLayoutComponent.setPositionPercentY(1);
        _layoutHeaderLayoutComponent.setPercentWidthEnabled(true);
        _layoutHeaderLayoutComponent.setPercentWidth(1);
        _layoutHeaderLayoutComponent.setPercentHeightEnabled(true);
        _layoutHeaderLayoutComponent.setPercentHeight(0.05);
        this._layoutHeader.setTouchEnabled(false);
        this._layoutHeader.setUnifySizeEnabled(false);
        this._layoutHeader.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutHeader, 1, 0.05);
        this._layoutHeader.setBackGroundColorType(1);
        this._layoutHeader.setBackGroundColor(cc.color(45, 45, 45, 255));

        ///// # _txtHeader
        this._txtHeader = new ck.Text();
        this._txtHeader.setName("_txtHeader");
        this._layoutHeader.addChild(this._txtHeader);
        this._txtHeader.setCascadeOpacityEnabled(true);
        this._txtHeader.setCascadeColorEnabled(true);
        this._txtHeader.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHeader, 0.03, 0.5);
        let _txtHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHeader);
        _txtHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentX(0.03);
        _txtHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentY(0.5);
        this._txtHeader.setTouchEnabled(false);
        this._txtHeader.ignoreContentAdaptWithSize(true);
        this._txtHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHeader.setDefaultFontSize(30);
        this._txtHeader.setString("CHEAT MENU");
        this._txtHeader.setTextHorizontalAlignment(1);
        this._txtHeader.setTextVerticalAlignment(1);

        ///// # _layoutClose
        this._layoutClose = new ccui.Layout();
        this._layoutClose.setName("_layoutClose");
        this._layoutHeader.addChild(this._layoutClose);
        this._layoutClose.setCascadeOpacityEnabled(true);
        this._layoutClose.setCascadeColorEnabled(true);
        this._layoutClose.setAnchorPoint(cc.p(0.5026, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutClose, 0.9437, 0.5);
        let _layoutCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutClose);
        _layoutCloseLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentX(0.9437);
        _layoutCloseLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentY(0.5);
        this._layoutClose.setTouchEnabled(true);
        this._layoutClose.setUnifySizeEnabled(false);
        this._layoutClose.ignoreContentAdaptWithSize(false);
        this._layoutClose.setContentSize(cc.size(40, 40));
        this._layoutClose.setBackGroundColorType(1);
        this._layoutClose.setBackGroundColor(cc.color(255, 0, 0, 255));

        ///// # Image_1
        this.Image_1 = new ccui.ImageView();
        this.Image_1.setName("Image_1");
        this._layoutClose.addChild(this.Image_1);
        this.Image_1.setCascadeOpacityEnabled(true);
        this.Image_1.setCascadeColorEnabled(true);
        this.Image_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.Image_1, 0.5, 0.5);
        let Image_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.Image_1);
        Image_1LayoutComponent.setPositionPercentXEnabled(true);
        Image_1LayoutComponent.setPositionPercentX(0.5);
        Image_1LayoutComponent.setPositionPercentYEnabled(true);
        Image_1LayoutComponent.setPositionPercentY(0.5);
        this.Image_1.loadTexture("icons/flat/Close.png", 1);
        this.Image_1.setUnifySizeEnabled(false);
        this.Image_1.ignoreContentAdaptWithSize(false);
        this.Image_1.setContentSize(cc.size(23, 25));
        this.Image_1.setTouchEnabled(false);

    },



});

/**
 * Create CheatMenu
 * @returns {_ccs.CheatMenu}
 */
_ccs.CheatMenu.create = function () {
    return new _ccs.CheatMenu();
};
