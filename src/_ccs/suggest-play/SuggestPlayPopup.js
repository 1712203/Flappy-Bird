/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.SuggestPlayPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.SuggestPlayPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ccui.Layout} */
    _layoutTitle: null,
    /** @type {ccui.ImageView} */
    _imgTitleDecor01: null,
    /** @type {ck.Text} */
    _txtTitle: null,
    /** @type {ccui.ImageView} */
    _imgTitleDecor02: null,
    /** @type {ccui.Layout} */
    _layoutSuggestion: null,
    /** @type {ccui.Layout} */
    _layoutBetAmount: null,
    /** @type {ck.Text} */
    _txtBetAmountHeader: null,
    /** @type {ccui.ImageView} */
    _imgIconCoin: null,
    /** @type {ck.Text} */
    _txtBetAmount: null,
    /** @type {AsyncButton} */
    _btnAccept: null,
    /** @type {ccui.ImageView} */
    _imgButtonAccept: null,
    /** @type {ck.Text} */
    _txtButtonAccept: null,
    /** @type {ccui.ImageView} */
    _imgLoadingButtonAccept: null,
    /** @type {AsyncButton} */
    _btnDecline: null,
    /** @type {ccui.ImageView} */
    _imgButtonDecline: null,
    /** @type {ck.Text} */
    _txtButtonDecline: null,
    /** @type {ccui.ImageView} */
    _imgLoadingButtonDecline: null,
    /** @type {ck.Text} */
    _txtNeverSuggestToday: null,
    /** @type {ccui.Layout} */
    _layoutNeverSuggestToday: null,
    /** @type {ccui.ImageView} */
    _imgToggleNeverSuggestTodayBackground: null,
    /** @type {ccui.ImageView} */
    _imgCheckNeverSuggestToday: null,
    /** @type {ccui.Layout} */
    _layoutWaitingJoin: null,
    /** @type {ck.Text} */
    _txtWaiting: null,
    /** @type {ccui.Layout} */
    _layoutJoinFailed: null,
    /** @type {ck.Text} */
    _txtJoinFailed: null,


    /**
     * _ccs.SuggestPlayPopup constructor
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

        ///// # _layoutPopup
        this._layoutPopup = new ccui.Layout();
        this._layoutPopup.setName("_layoutPopup");
        this.addChild(this._layoutPopup);
        this._layoutPopup.setCascadeOpacityEnabled(true);
        this._layoutPopup.setCascadeColorEnabled(true);
        this._layoutPopup.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        this._layoutPopup.setTouchEnabled(true);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(330, 190));

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._layoutPopup.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr, 0.5, 0.5);
        let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
        _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentY(0.5);
        _imgBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrLayoutComponent.setPercentWidth(1);
        _imgBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrLayoutComponent.setPercentHeight(1);
        this._imgBgr.loadTexture("basics/other/Box_17.png", 1);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setScale9Enabled(true);
        this._imgBgr.setCapInsets(cc.rect(16, 14, 1, 1));
        ck.UIUtils.setSizePercent(this._imgBgr, 1, 1);
        this._imgBgr.setTouchEnabled(false);

        ///// # _layoutTitle
        this._layoutTitle = new ccui.Layout();
        this._layoutTitle.setName("_layoutTitle");
        this._layoutPopup.addChild(this._layoutTitle);
        this._layoutTitle.setCascadeOpacityEnabled(true);
        this._layoutTitle.setCascadeColorEnabled(true);
        this._layoutTitle.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutTitle, 0.5, 1);
        let _layoutTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTitle);
        _layoutTitleLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTitleLayoutComponent.setPositionPercentX(0.5);
        _layoutTitleLayoutComponent.setPositionPercentYEnabled(true);
        _layoutTitleLayoutComponent.setPositionPercentY(1);
        _layoutTitleLayoutComponent.setPercentWidthEnabled(true);
        _layoutTitleLayoutComponent.setPercentWidth(1);
        this._layoutTitle.setTouchEnabled(false);
        this._layoutTitle.setUnifySizeEnabled(false);
        this._layoutTitle.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutTitle, 1);
        this._layoutTitle.setContentSize(cc.size(this._layoutTitle.width, 45));

        ///// # _imgTitleDecor01
        this._imgTitleDecor01 = new ccui.ImageView();
        this._imgTitleDecor01.setName("_imgTitleDecor01");
        this._layoutTitle.addChild(this._imgTitleDecor01);
        this._imgTitleDecor01.setCascadeOpacityEnabled(true);
        this._imgTitleDecor01.setCascadeColorEnabled(true);
        this._imgTitleDecor01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTitleDecor01, 0.1, 0.5);
        let _imgTitleDecor01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTitleDecor01);
        _imgTitleDecor01LayoutComponent.setPositionPercentXEnabled(true);
        _imgTitleDecor01LayoutComponent.setPositionPercentX(0.1);
        _imgTitleDecor01LayoutComponent.setPositionPercentYEnabled(true);
        _imgTitleDecor01LayoutComponent.setPositionPercentY(0.5);
        this._imgTitleDecor01.loadTexture("basics/other/NumberBoard.png", 1);
        this._imgTitleDecor01.setUnifySizeEnabled(false);
        this._imgTitleDecor01.ignoreContentAdaptWithSize(false);
        this._imgTitleDecor01.setContentSize(cc.size(15, 16));
        this._imgTitleDecor01.setTouchEnabled(false);

        ///// # _txtTitle
        this._txtTitle = new ck.Text();
        this._txtTitle.setName("_txtTitle");
        this._layoutTitle.addChild(this._txtTitle);
        this._txtTitle.setCascadeOpacityEnabled(true);
        this._txtTitle.setCascadeColorEnabled(true);
        this._txtTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle, 0.5, 0.5);
        let _txtTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle);
        _txtTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentX(0.5);
        _txtTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentY(0.5);
        _txtTitleLayoutComponent.setPercentWidthEnabled(true);
        _txtTitleLayoutComponent.setPercentWidth(0.7);
        this._txtTitle.setTouchEnabled(false);
        this._txtTitle.setUnifySizeEnabled(false);
        this._txtTitle.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtTitle, 0.7);
        this._txtTitle.setContentSize(cc.size(this._txtTitle.width, 41));
        this._txtTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTitle.setDefaultFontSize(35);
        this._txtTitle.setString(gm.localize.getText("TXT_SUGGESTION_MATCH").toUpperCase());
        this._txtTitle.setTextHorizontalAlignment(1);
        this._txtTitle.setTextVerticalAlignment(1);
        this._txtTitle.enableOutline(cc.color(0, 0, 0, 255), 1);
        this._txtTitle.autoFitSingleLine();

        ///// # _imgTitleDecor02
        this._imgTitleDecor02 = new ccui.ImageView();
        this._imgTitleDecor02.setName("_imgTitleDecor02");
        this._layoutTitle.addChild(this._imgTitleDecor02);
        this._imgTitleDecor02.setCascadeOpacityEnabled(true);
        this._imgTitleDecor02.setCascadeColorEnabled(true);
        this._imgTitleDecor02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTitleDecor02, 0.9, 0.5);
        let _imgTitleDecor02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTitleDecor02);
        _imgTitleDecor02LayoutComponent.setPositionPercentXEnabled(true);
        _imgTitleDecor02LayoutComponent.setPositionPercentX(0.9);
        _imgTitleDecor02LayoutComponent.setPositionPercentYEnabled(true);
        _imgTitleDecor02LayoutComponent.setPositionPercentY(0.5);
        this._imgTitleDecor02.loadTexture("basics/other/NumberBoard.png", 1);
        this._imgTitleDecor02.setUnifySizeEnabled(false);
        this._imgTitleDecor02.ignoreContentAdaptWithSize(false);
        this._imgTitleDecor02.setContentSize(cc.size(15, 16));
        this._imgTitleDecor02.setTouchEnabled(false);

        ///// # _layoutSuggestion
        this._layoutSuggestion = new ccui.Layout();
        this._layoutSuggestion.setName("_layoutSuggestion");
        this._layoutPopup.addChild(this._layoutSuggestion);
        this._layoutSuggestion.setCascadeOpacityEnabled(true);
        this._layoutSuggestion.setCascadeColorEnabled(true);
        let _layoutSuggestionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSuggestion);
        _layoutSuggestionLayoutComponent.setPercentWidthEnabled(true);
        _layoutSuggestionLayoutComponent.setPercentWidth(1);
        _layoutSuggestionLayoutComponent.setPercentHeightEnabled(true);
        _layoutSuggestionLayoutComponent.setPercentHeight(1);
        this._layoutSuggestion.setTouchEnabled(false);
        this._layoutSuggestion.setUnifySizeEnabled(false);
        this._layoutSuggestion.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutSuggestion, 1, 1);

        ///// # _layoutBetAmount
        this._layoutBetAmount = new ccui.Layout();
        this._layoutBetAmount.setName("_layoutBetAmount");
        this._layoutSuggestion.addChild(this._layoutBetAmount);
        this._layoutBetAmount.setCascadeOpacityEnabled(true);
        this._layoutBetAmount.setCascadeColorEnabled(true);
        this._layoutBetAmount.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutBetAmount, 0.5, 0.7895);
        let _layoutBetAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBetAmount);
        _layoutBetAmountLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBetAmountLayoutComponent.setPositionPercentX(0.5);
        _layoutBetAmountLayoutComponent.setPercentWidthEnabled(true);
        _layoutBetAmountLayoutComponent.setPercentWidth(1);
        this._layoutBetAmount.setTouchEnabled(false);
        this._layoutBetAmount.setUnifySizeEnabled(false);
        this._layoutBetAmount.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutBetAmount, 1);
        this._layoutBetAmount.setContentSize(cc.size(this._layoutBetAmount.width, 45));

        ///// # _txtBetAmountHeader
        this._txtBetAmountHeader = new ck.Text();
        this._txtBetAmountHeader.setName("_txtBetAmountHeader");
        this._layoutBetAmount.addChild(this._txtBetAmountHeader);
        this._txtBetAmountHeader.setCascadeOpacityEnabled(true);
        this._txtBetAmountHeader.setCascadeColorEnabled(true);
        this._txtBetAmountHeader.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBetAmountHeader, 0.3636, 0.5);
        let _txtBetAmountHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBetAmountHeader);
        _txtBetAmountHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtBetAmountHeaderLayoutComponent.setPositionPercentY(0.5);
        this._txtBetAmountHeader.setTouchEnabled(false);
        this._txtBetAmountHeader.setUnifySizeEnabled(false);
        this._txtBetAmountHeader.ignoreContentAdaptWithSize(false);
        this._txtBetAmountHeader.setContentSize(cc.size(105, 35));
        this._txtBetAmountHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBetAmountHeader.setDefaultFontSize(25);
        this._txtBetAmountHeader.setTextHorizontalAlignment(2);
        this._txtBetAmountHeader.setTextVerticalAlignment(1);
        this._txtBetAmountHeader.enableOutline(cc.color(0, 0, 0, 255), 1);
        this._txtBetAmountHeader.autoFitSingleLine();

        ///// # _imgIconCoin
        this._imgIconCoin = new ccui.ImageView();
        this._imgIconCoin.setName("_imgIconCoin");
        this._layoutBetAmount.addChild(this._imgIconCoin);
        this._imgIconCoin.setCascadeOpacityEnabled(true);
        this._imgIconCoin.setCascadeColorEnabled(true);
        this._imgIconCoin.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconCoin, 0.3788, 0.5);
        let _imgIconCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconCoin);
        _imgIconCoinLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconCoinLayoutComponent.setPositionPercentY(0.5);
        this._imgIconCoin.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIconCoin.setUnifySizeEnabled(false);
        this._imgIconCoin.ignoreContentAdaptWithSize(false);
        this._imgIconCoin.setContentSize(cc.size(50, 50));
        this._imgIconCoin.setTouchEnabled(false);

        ///// # _txtBetAmount
        this._txtBetAmount = new ck.Text();
        this._txtBetAmount.setName("_txtBetAmount");
        this._layoutBetAmount.addChild(this._txtBetAmount);
        this._txtBetAmount.setCascadeOpacityEnabled(true);
        this._txtBetAmount.setCascadeColorEnabled(true);
        this._txtBetAmount.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBetAmount, 0.5303, 0.5);
        this._txtBetAmount.setTextColor(cc.color(255, 222, 0, 255));
        let _txtBetAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBetAmount);
        _txtBetAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtBetAmountLayoutComponent.setPositionPercentY(0.5);
        this._txtBetAmount.setTouchEnabled(false);
        this._txtBetAmount.setUnifySizeEnabled(false);
        this._txtBetAmount.ignoreContentAdaptWithSize(false);
        this._txtBetAmount.setContentSize(cc.size(135, 38));
        this._txtBetAmount.setFontName("fonts/GroBold.ttf");
        this._txtBetAmount.setDefaultFontSize(30);
        this._txtBetAmount.setString("100.000");
        this._txtBetAmount.setTextHorizontalAlignment(0);
        this._txtBetAmount.setTextVerticalAlignment(1);
        this._txtBetAmount.enableOutline(cc.color(92, 25, 17, 255), 2);
        this._txtBetAmount.autoFitSingleLine();

        ///// # _btnAccept
        this._btnAccept = new AsyncButton();
        this._btnAccept.setName("_btnAccept");
        this._layoutSuggestion.addChild(this._btnAccept);
        this._btnAccept.setCascadeOpacityEnabled(true);
        this._btnAccept.setCascadeColorEnabled(true);
        this._btnAccept.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAccept, 0.75, 0.3684);
        let _btnAcceptLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAccept);
        _btnAcceptLayoutComponent.setPositionPercentXEnabled(true);
        _btnAcceptLayoutComponent.setPositionPercentX(0.75);
        _btnAcceptLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.BOTTOM);
        _btnAcceptLayoutComponent.setBottomMargin(42.5);
        this._btnAccept.setUnifySizeEnabled(false);
        this._btnAccept.ignoreContentAdaptWithSize(false);
        this._btnAccept.setContentSize(cc.size(140, 55));
        this._btnAccept.setTouchEnabled(true);

        ///// # _imgButtonAccept
        this._imgButtonAccept = new ccui.ImageView();
        this._imgButtonAccept.setName("_imgButtonAccept");
        this._btnAccept.addChild(this._imgButtonAccept);
        this._imgButtonAccept.setCascadeOpacityEnabled(true);
        this._imgButtonAccept.setCascadeColorEnabled(true);
        this._imgButtonAccept.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonAccept, 0.5, 0.5);
        let _imgButtonAcceptLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonAccept);
        _imgButtonAcceptLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonAcceptLayoutComponent.setPositionPercentX(0.5);
        _imgButtonAcceptLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonAcceptLayoutComponent.setPositionPercentY(0.5);
        _imgButtonAcceptLayoutComponent.setPercentWidthEnabled(true);
        _imgButtonAcceptLayoutComponent.setPercentWidth(1);
        _imgButtonAcceptLayoutComponent.setPercentHeightEnabled(true);
        _imgButtonAcceptLayoutComponent.setPercentHeight(1);
        this._imgButtonAccept.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgButtonAccept.setUnifySizeEnabled(false);
        this._imgButtonAccept.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonAccept, 1, 1);
        this._imgButtonAccept.setTouchEnabled(false);

        ///// # _txtButtonAccept
        this._txtButtonAccept = new ck.Text();
        this._txtButtonAccept.setName("_txtButtonAccept");
        this._btnAccept.addChild(this._txtButtonAccept);
        this._txtButtonAccept.setCascadeOpacityEnabled(true);
        this._txtButtonAccept.setCascadeColorEnabled(true);
        this._txtButtonAccept.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonAccept, 0.5, 0.53);
        let _txtButtonAcceptLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonAccept);
        _txtButtonAcceptLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonAcceptLayoutComponent.setPositionPercentX(0.5);
        _txtButtonAcceptLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonAcceptLayoutComponent.setPositionPercentY(0.53);
        _txtButtonAcceptLayoutComponent.setPercentWidthEnabled(true);
        _txtButtonAcceptLayoutComponent.setPercentWidth(0.9);
        this._txtButtonAccept.setTouchEnabled(false);
        this._txtButtonAccept.setUnifySizeEnabled(false);
        this._txtButtonAccept.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtButtonAccept, 0.9);
        this._txtButtonAccept.setContentSize(cc.size(this._txtButtonAccept.width, 43));
        this._txtButtonAccept.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonAccept.setDefaultFontSize(30);
        this._txtButtonAccept.setString(gm.localize.getText("TXT_ACCEPT").toUpperCase());
        this._txtButtonAccept.setTextHorizontalAlignment(1);
        this._txtButtonAccept.setTextVerticalAlignment(1);
        this._txtButtonAccept.enableOutline(cc.color(11, 102, 57, 255), 1);
        this._txtButtonAccept.autoFitSingleLine();

        ///// # _imgLoadingButtonAccept
        this._imgLoadingButtonAccept = new ccui.ImageView();
        this._imgLoadingButtonAccept.setName("_imgLoadingButtonAccept");
        this._btnAccept.addChild(this._imgLoadingButtonAccept);
        this._imgLoadingButtonAccept.setCascadeOpacityEnabled(true);
        this._imgLoadingButtonAccept.setCascadeColorEnabled(true);
        this._imgLoadingButtonAccept.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLoadingButtonAccept, 0.5, 0.54);
        this._imgLoadingButtonAccept.setVisible(false);
        let _imgLoadingButtonAcceptLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoadingButtonAccept);
        _imgLoadingButtonAcceptLayoutComponent.setPositionPercentXEnabled(true);
        _imgLoadingButtonAcceptLayoutComponent.setPositionPercentX(0.5);
        _imgLoadingButtonAcceptLayoutComponent.setPositionPercentYEnabled(true);
        _imgLoadingButtonAcceptLayoutComponent.setPositionPercentY(0.54);
        this._imgLoadingButtonAccept.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgLoadingButtonAccept.setUnifySizeEnabled(false);
        this._imgLoadingButtonAccept.ignoreContentAdaptWithSize(false);
        this._imgLoadingButtonAccept.setContentSize(cc.size(50, 50));
        this._imgLoadingButtonAccept.setTouchEnabled(false);

        ///// # _btnDecline
        this._btnDecline = new AsyncButton();
        this._btnDecline.setName("_btnDecline");
        this._layoutSuggestion.addChild(this._btnDecline);
        this._btnDecline.setCascadeOpacityEnabled(true);
        this._btnDecline.setCascadeColorEnabled(true);
        this._btnDecline.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnDecline, 0.25, 0.3684);
        let _btnDeclineLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnDecline);
        _btnDeclineLayoutComponent.setPositionPercentXEnabled(true);
        _btnDeclineLayoutComponent.setPositionPercentX(0.25);
        _btnDeclineLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.BOTTOM);
        _btnDeclineLayoutComponent.setBottomMargin(42.5);
        this._btnDecline.setUnifySizeEnabled(false);
        this._btnDecline.ignoreContentAdaptWithSize(false);
        this._btnDecline.setContentSize(cc.size(140, 55));
        this._btnDecline.setTouchEnabled(true);

        ///// # _imgButtonDecline
        this._imgButtonDecline = new ccui.ImageView();
        this._imgButtonDecline.setName("_imgButtonDecline");
        this._btnDecline.addChild(this._imgButtonDecline);
        this._imgButtonDecline.setCascadeOpacityEnabled(true);
        this._imgButtonDecline.setCascadeColorEnabled(true);
        this._imgButtonDecline.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonDecline, 0.5, 0.5);
        let _imgButtonDeclineLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonDecline);
        _imgButtonDeclineLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonDeclineLayoutComponent.setPositionPercentX(0.5);
        _imgButtonDeclineLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonDeclineLayoutComponent.setPositionPercentY(0.5);
        _imgButtonDeclineLayoutComponent.setPercentWidthEnabled(true);
        _imgButtonDeclineLayoutComponent.setPercentWidth(1);
        _imgButtonDeclineLayoutComponent.setPercentHeightEnabled(true);
        _imgButtonDeclineLayoutComponent.setPercentHeight(1);
        this._imgButtonDecline.loadTexture("buttons/rectangles/Red.png", 1);
        this._imgButtonDecline.setUnifySizeEnabled(false);
        this._imgButtonDecline.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonDecline, 1, 1);
        this._imgButtonDecline.setTouchEnabled(false);

        ///// # _txtButtonDecline
        this._txtButtonDecline = new ck.Text();
        this._txtButtonDecline.setName("_txtButtonDecline");
        this._btnDecline.addChild(this._txtButtonDecline);
        this._txtButtonDecline.setCascadeOpacityEnabled(true);
        this._txtButtonDecline.setCascadeColorEnabled(true);
        this._txtButtonDecline.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonDecline, 0.5, 0.53);
        let _txtButtonDeclineLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonDecline);
        _txtButtonDeclineLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonDeclineLayoutComponent.setPositionPercentX(0.5);
        _txtButtonDeclineLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonDeclineLayoutComponent.setPositionPercentY(0.53);
        _txtButtonDeclineLayoutComponent.setPercentWidthEnabled(true);
        _txtButtonDeclineLayoutComponent.setPercentWidth(0.9);
        this._txtButtonDecline.setTouchEnabled(false);
        this._txtButtonDecline.setUnifySizeEnabled(false);
        this._txtButtonDecline.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtButtonDecline, 0.9);
        this._txtButtonDecline.setContentSize(cc.size(this._txtButtonDecline.width, 43));
        this._txtButtonDecline.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonDecline.setDefaultFontSize(30);
        this._txtButtonDecline.setString(gm.localize.getText("TXT_DECLINE").toUpperCase());
        this._txtButtonDecline.setTextHorizontalAlignment(1);
        this._txtButtonDecline.setTextVerticalAlignment(1);
        this._txtButtonDecline.enableOutline(cc.color(164, 49, 41, 255), 1);
        this._txtButtonDecline.autoFitSingleLine();

        ///// # _imgLoadingButtonDecline
        this._imgLoadingButtonDecline = new ccui.ImageView();
        this._imgLoadingButtonDecline.setName("_imgLoadingButtonDecline");
        this._btnDecline.addChild(this._imgLoadingButtonDecline);
        this._imgLoadingButtonDecline.setCascadeOpacityEnabled(true);
        this._imgLoadingButtonDecline.setCascadeColorEnabled(true);
        this._imgLoadingButtonDecline.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLoadingButtonDecline, 0.5, 0.54);
        this._imgLoadingButtonDecline.setVisible(false);
        let _imgLoadingButtonDeclineLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoadingButtonDecline);
        _imgLoadingButtonDeclineLayoutComponent.setPositionPercentXEnabled(true);
        _imgLoadingButtonDeclineLayoutComponent.setPositionPercentX(0.5);
        _imgLoadingButtonDeclineLayoutComponent.setPositionPercentYEnabled(true);
        _imgLoadingButtonDeclineLayoutComponent.setPositionPercentY(0.54);
        this._imgLoadingButtonDecline.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgLoadingButtonDecline.setUnifySizeEnabled(false);
        this._imgLoadingButtonDecline.ignoreContentAdaptWithSize(false);
        this._imgLoadingButtonDecline.setContentSize(cc.size(50, 50));
        this._imgLoadingButtonDecline.setTouchEnabled(false);

        ///// # _txtNeverSuggestToday
        this._txtNeverSuggestToday = new ck.Text();
        this._txtNeverSuggestToday.setName("_txtNeverSuggestToday");
        this._layoutSuggestion.addChild(this._txtNeverSuggestToday);
        this._txtNeverSuggestToday.setCascadeOpacityEnabled(true);
        this._txtNeverSuggestToday.setCascadeColorEnabled(true);
        this._txtNeverSuggestToday.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNeverSuggestToday, 0.55, 0.11);
        let _txtNeverSuggestTodayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNeverSuggestToday);
        _txtNeverSuggestTodayLayoutComponent.setPositionPercentXEnabled(true);
        _txtNeverSuggestTodayLayoutComponent.setPositionPercentX(0.55);
        _txtNeverSuggestTodayLayoutComponent.setPositionPercentYEnabled(true);
        _txtNeverSuggestTodayLayoutComponent.setPositionPercentY(0.11);
        this._txtNeverSuggestToday.setTouchEnabled(true);
        this._txtNeverSuggestToday.ignoreContentAdaptWithSize(true);
        this._txtNeverSuggestToday.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtNeverSuggestToday.setDefaultFontSize(22);
        this._txtNeverSuggestToday.setString(gm.localize.getText("TXT_NEVER_SUGGEST_TODAY").toUpperCase());
        this._txtNeverSuggestToday.setTextHorizontalAlignment(0);
        this._txtNeverSuggestToday.setTextVerticalAlignment(0);
        this._txtNeverSuggestToday.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutNeverSuggestToday
        this._layoutNeverSuggestToday = new ccui.Layout();
        this._layoutNeverSuggestToday.setName("_layoutNeverSuggestToday");
        this._txtNeverSuggestToday.addChild(this._layoutNeverSuggestToday);
        this._layoutNeverSuggestToday.setCascadeOpacityEnabled(true);
        this._layoutNeverSuggestToday.setCascadeColorEnabled(true);
        this._layoutNeverSuggestToday.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutNeverSuggestToday, -0.0318, 0.5);
        let _layoutNeverSuggestTodayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutNeverSuggestToday);
        _layoutNeverSuggestTodayLayoutComponent.setPositionPercentYEnabled(true);
        _layoutNeverSuggestTodayLayoutComponent.setPositionPercentY(0.5);
        this._layoutNeverSuggestToday.setTouchEnabled(true);
        this._layoutNeverSuggestToday.setUnifySizeEnabled(false);
        this._layoutNeverSuggestToday.ignoreContentAdaptWithSize(false);
        this._layoutNeverSuggestToday.setContentSize(cc.size(30, 30));

        ///// # _imgToggleNeverSuggestTodayBackground
        this._imgToggleNeverSuggestTodayBackground = new ccui.ImageView();
        this._imgToggleNeverSuggestTodayBackground.setName("_imgToggleNeverSuggestTodayBackground");
        this._layoutNeverSuggestToday.addChild(this._imgToggleNeverSuggestTodayBackground);
        this._imgToggleNeverSuggestTodayBackground.setCascadeOpacityEnabled(true);
        this._imgToggleNeverSuggestTodayBackground.setCascadeColorEnabled(true);
        this._imgToggleNeverSuggestTodayBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgToggleNeverSuggestTodayBackground, 0.5, 0.5);
        let _imgToggleNeverSuggestTodayBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToggleNeverSuggestTodayBackground);
        _imgToggleNeverSuggestTodayBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgToggleNeverSuggestTodayBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgToggleNeverSuggestTodayBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgToggleNeverSuggestTodayBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgToggleNeverSuggestTodayBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgToggleNeverSuggestTodayBackgroundLayoutComponent.setPercentWidth(1);
        _imgToggleNeverSuggestTodayBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgToggleNeverSuggestTodayBackgroundLayoutComponent.setPercentHeight(1.0192);
        this._imgToggleNeverSuggestTodayBackground.loadTexture("basics/other/Box_09.png", 1);
        this._imgToggleNeverSuggestTodayBackground.setUnifySizeEnabled(false);
        this._imgToggleNeverSuggestTodayBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgToggleNeverSuggestTodayBackground, 1, 1.0192);
        this._imgToggleNeverSuggestTodayBackground.setTouchEnabled(false);

        ///// # _imgCheckNeverSuggestToday
        this._imgCheckNeverSuggestToday = new ccui.ImageView();
        this._imgCheckNeverSuggestToday.setName("_imgCheckNeverSuggestToday");
        this._layoutNeverSuggestToday.addChild(this._imgCheckNeverSuggestToday);
        this._imgCheckNeverSuggestToday.setCascadeOpacityEnabled(true);
        this._imgCheckNeverSuggestToday.setCascadeColorEnabled(true);
        this._imgCheckNeverSuggestToday.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCheckNeverSuggestToday, 0.5, 0.6);
        let _imgCheckNeverSuggestTodayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCheckNeverSuggestToday);
        _imgCheckNeverSuggestTodayLayoutComponent.setPositionPercentXEnabled(true);
        _imgCheckNeverSuggestTodayLayoutComponent.setPositionPercentX(0.5);
        _imgCheckNeverSuggestTodayLayoutComponent.setPositionPercentYEnabled(true);
        _imgCheckNeverSuggestTodayLayoutComponent.setPositionPercentY(0.6);
        this._imgCheckNeverSuggestToday.loadTexture("icons/color/other/Check.png", 1);
        this._imgCheckNeverSuggestToday.setUnifySizeEnabled(false);
        this._imgCheckNeverSuggestToday.ignoreContentAdaptWithSize(false);
        this._imgCheckNeverSuggestToday.setContentSize(cc.size(35, 30));
        this._imgCheckNeverSuggestToday.setTouchEnabled(false);

        ///// # _layoutWaitingJoin
        this._layoutWaitingJoin = new ccui.Layout();
        this._layoutWaitingJoin.setName("_layoutWaitingJoin");
        this._layoutPopup.addChild(this._layoutWaitingJoin);
        this._layoutWaitingJoin.setCascadeOpacityEnabled(true);
        this._layoutWaitingJoin.setCascadeColorEnabled(true);
        this._layoutWaitingJoin.setVisible(false);
        let _layoutWaitingJoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutWaitingJoin);
        _layoutWaitingJoinLayoutComponent.setPercentWidthEnabled(true);
        _layoutWaitingJoinLayoutComponent.setPercentWidth(1);
        _layoutWaitingJoinLayoutComponent.setPercentHeightEnabled(true);
        _layoutWaitingJoinLayoutComponent.setPercentHeight(1);
        this._layoutWaitingJoin.setTouchEnabled(false);
        this._layoutWaitingJoin.setUnifySizeEnabled(false);
        this._layoutWaitingJoin.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutWaitingJoin, 1, 1);

        ///// # _txtWaiting
        this._txtWaiting = new ck.Text();
        this._txtWaiting.setName("_txtWaiting");
        this._layoutWaitingJoin.addChild(this._txtWaiting);
        this._txtWaiting.setCascadeOpacityEnabled(true);
        this._txtWaiting.setCascadeColorEnabled(true);
        this._txtWaiting.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtWaiting, 0.5, 0.41);
        this._txtWaiting.setTextColor(cc.color(169, 255, 219, 255));
        let _txtWaitingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtWaiting);
        _txtWaitingLayoutComponent.setPositionPercentXEnabled(true);
        _txtWaitingLayoutComponent.setPositionPercentX(0.5);
        _txtWaitingLayoutComponent.setPositionPercentYEnabled(true);
        _txtWaitingLayoutComponent.setPositionPercentY(0.41);
        this._txtWaiting.setTouchEnabled(false);
        this._txtWaiting.setUnifySizeEnabled(false);
        this._txtWaiting.ignoreContentAdaptWithSize(false);
        this._txtWaiting.setContentSize(cc.size(296.96, 129.61));
        this._txtWaiting.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtWaiting.setDefaultFontSize(30);
        this._txtWaiting.setString(gm.localize.getText("TXT_WAITING_JOIN_SUGGESTION_ROOM").toUpperCase());
        this._txtWaiting.setTextHorizontalAlignment(1);
        this._txtWaiting.setTextVerticalAlignment(1);
        this._txtWaiting.enableOutline(cc.color(11, 102, 57, 255), 1);

        ///// # _layoutJoinFailed
        this._layoutJoinFailed = new ccui.Layout();
        this._layoutJoinFailed.setName("_layoutJoinFailed");
        this._layoutPopup.addChild(this._layoutJoinFailed);
        this._layoutJoinFailed.setCascadeOpacityEnabled(true);
        this._layoutJoinFailed.setCascadeColorEnabled(true);
        this._layoutJoinFailed.setVisible(false);
        let _layoutJoinFailedLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutJoinFailed);
        _layoutJoinFailedLayoutComponent.setPercentWidthEnabled(true);
        _layoutJoinFailedLayoutComponent.setPercentWidth(1);
        _layoutJoinFailedLayoutComponent.setPercentHeightEnabled(true);
        _layoutJoinFailedLayoutComponent.setPercentHeight(1);
        this._layoutJoinFailed.setTouchEnabled(false);
        this._layoutJoinFailed.setUnifySizeEnabled(false);
        this._layoutJoinFailed.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutJoinFailed, 1, 1);

        ///// # _txtJoinFailed
        this._txtJoinFailed = new ck.Text();
        this._txtJoinFailed.setName("_txtJoinFailed");
        this._layoutJoinFailed.addChild(this._txtJoinFailed);
        this._txtJoinFailed.setCascadeOpacityEnabled(true);
        this._txtJoinFailed.setCascadeColorEnabled(true);
        this._txtJoinFailed.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtJoinFailed, 0.5, 0.41);
        this._txtJoinFailed.setTextColor(cc.color(255, 175, 169, 255));
        let _txtJoinFailedLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtJoinFailed);
        _txtJoinFailedLayoutComponent.setPositionPercentXEnabled(true);
        _txtJoinFailedLayoutComponent.setPositionPercentX(0.5);
        _txtJoinFailedLayoutComponent.setPositionPercentYEnabled(true);
        _txtJoinFailedLayoutComponent.setPositionPercentY(0.41);
        this._txtJoinFailed.setTouchEnabled(false);
        this._txtJoinFailed.setUnifySizeEnabled(false);
        this._txtJoinFailed.ignoreContentAdaptWithSize(false);
        this._txtJoinFailed.setContentSize(cc.size(296.96, 129.61));
        this._txtJoinFailed.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtJoinFailed.setDefaultFontSize(30);
        this._txtJoinFailed.setString(gm.localize.getText("TXT_JOIN_SUGGESTION_ROOM_FAILED").toUpperCase());
        this._txtJoinFailed.setTextHorizontalAlignment(1);
        this._txtJoinFailed.setTextVerticalAlignment(1);
        this._txtJoinFailed.enableOutline(cc.color(102, 14, 11, 255), 1);

    },


    playCCSAnimSuggestion: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimSuggestion();
    
    
    
    
    
    
    },

    resetCCSAnimSuggestion: function () {
        this._layoutSuggestion.stopAllActions();
        this._layoutSuggestion.setVisible(true);
    
        this._layoutWaitingJoin.stopAllActions();
        this._layoutWaitingJoin.setVisible(false);
    
        this._layoutJoinFailed.stopAllActions();
        this._layoutJoinFailed.setVisible(false);
    },

    playCCSAnimWaitingJoin: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimWaitingJoin();
    
    
    
    
    
    
    },

    resetCCSAnimWaitingJoin: function () {
        this._layoutSuggestion.stopAllActions();
        this._layoutSuggestion.setVisible(false);
    
        this._layoutWaitingJoin.stopAllActions();
        this._layoutWaitingJoin.setVisible(true);
    
        this._layoutJoinFailed.stopAllActions();
        this._layoutJoinFailed.setVisible(false);
    },

    playCCSAnimJoinFailed: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimJoinFailed();
    
    
    
    
    
    
    },

    resetCCSAnimJoinFailed: function () {
        this._layoutSuggestion.stopAllActions();
        this._layoutSuggestion.setVisible(false);
    
        this._layoutWaitingJoin.stopAllActions();
        this._layoutWaitingJoin.setVisible(false);
    
        this._layoutJoinFailed.stopAllActions();
        this._layoutJoinFailed.setVisible(true);
    }
});

/**
 * Create SuggestPlayPopup
 * @returns {_ccs.SuggestPlayPopup}
 */
_ccs.SuggestPlayPopup.create = function () {
    return new _ccs.SuggestPlayPopup();
};
