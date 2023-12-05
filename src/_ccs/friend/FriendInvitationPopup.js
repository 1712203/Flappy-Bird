/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.FriendInvitationPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.FriendInvitationPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.Layout} */
    _layoutBackground: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundBack: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundFront: null,
    /** @type {ccui.Layout} */
    _layoutTitle: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundTitle: null,
    /** @type {ck.Text} */
    _txtTitle: null,
    /** @type {ccui.Layout} */
    _layoutClose: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.Layout} */
    _layoutSearching: null,
    /** @type {ck.EditBox} */
    _editBoxSearch: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxBackground: null,
    /** @type {ccui.ImageView} */
    _imgEditBoxBackground: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxText: null,
    /** @type {ck.Text} */
    _txtEditBoxTextDisplay: null,
    /** @type {AsyncButton} */
    _btnSearch: null,
    /** @type {ccui.ImageView} */
    _imgButtonSearch: null,
    /** @type {ck.Text} */
    _txtButtonSearch: null,
    /** @type {ccui.ImageView} */
    _imgLoadingButtonSearch: null,
    /** @type {ccui.Layout} */
    _layoutSearchResult: null,
    /** @type {FriendSearchWidget} */
    _friendSearchWidget: null,
    /** @type {ccui.ListView} */
    _listviewInvitations: null,


    /**
     * _ccs.FriendInvitationPopup constructor
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
        this._layoutPopup.setContentSize(cc.size(540, 772));

        ///// # _layoutBackground
        this._layoutBackground = new ccui.Layout();
        this._layoutBackground.setName("_layoutBackground");
        this._layoutPopup.addChild(this._layoutBackground);
        this._layoutBackground.setCascadeOpacityEnabled(true);
        this._layoutBackground.setCascadeColorEnabled(true);
        this._layoutBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBackground, 0.5, 0.5);
        let _layoutBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBackground);
        _layoutBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBackgroundLayoutComponent.setPositionPercentX(0.5);
        _layoutBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBackgroundLayoutComponent.setPositionPercentY(0.5);
        _layoutBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentWidth(1);
        _layoutBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentHeight(1);
        this._layoutBackground.setTouchEnabled(true);
        this._layoutBackground.setUnifySizeEnabled(false);
        this._layoutBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBackground, 1, 1);

        ///// # _imgBackgroundBack
        this._imgBackgroundBack = new ccui.ImageView();
        this._imgBackgroundBack.setName("_imgBackgroundBack");
        this._layoutBackground.addChild(this._imgBackgroundBack);
        this._imgBackgroundBack.setCascadeOpacityEnabled(true);
        this._imgBackgroundBack.setCascadeColorEnabled(true);
        this._imgBackgroundBack.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundBack, 0.5, 0.5);
        let _imgBackgroundBackLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundBack);
        _imgBackgroundBackLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundBackLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundBackLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundBackLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundBackLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundBackLayoutComponent.setPercentWidth(1);
        _imgBackgroundBackLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundBackLayoutComponent.setPercentHeight(1);
        this._imgBackgroundBack.loadTexture("basics/popup/Back.png", 1);
        this._imgBackgroundBack.setUnifySizeEnabled(false);
        this._imgBackgroundBack.ignoreContentAdaptWithSize(false);
        this._imgBackgroundBack.setScale9Enabled(true);
        this._imgBackgroundBack.setCapInsets(cc.rect(69, 57, 72, 61));
        ck.UIUtils.setSizePercent(this._imgBackgroundBack, 1, 1);
        this._imgBackgroundBack.setTouchEnabled(false);

        ///// # _imgBackgroundFront
        this._imgBackgroundFront = new ccui.ImageView();
        this._imgBackgroundFront.setName("_imgBackgroundFront");
        this._layoutBackground.addChild(this._imgBackgroundFront);
        this._imgBackgroundFront.setCascadeOpacityEnabled(true);
        this._imgBackgroundFront.setCascadeColorEnabled(true);
        this._imgBackgroundFront.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundFront, 0.5, 0.5);
        let _imgBackgroundFrontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundFront);
        _imgBackgroundFrontLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundFrontLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundFrontLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPercentWidth(0.95);
        _imgBackgroundFrontLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPercentHeight(0.96);
        this._imgBackgroundFront.loadTexture("basics/popup/Font.png", 1);
        this._imgBackgroundFront.setUnifySizeEnabled(false);
        this._imgBackgroundFront.ignoreContentAdaptWithSize(false);
        this._imgBackgroundFront.setScale9Enabled(true);
        this._imgBackgroundFront.setCapInsets(cc.rect(69, 57, 15, 31));
        ck.UIUtils.setSizePercent(this._imgBackgroundFront, 0.95, 0.96);
        this._imgBackgroundFront.setTouchEnabled(false);

        ///// # _layoutTitle
        this._layoutTitle = new ccui.Layout();
        this._layoutTitle.setName("_layoutTitle");
        this._layoutPopup.addChild(this._layoutTitle);
        this._layoutTitle.setCascadeOpacityEnabled(true);
        this._layoutTitle.setCascadeColorEnabled(true);
        this._layoutTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTitle, 0.5, 1);
        let _layoutTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTitle);
        _layoutTitleLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTitleLayoutComponent.setPositionPercentX(0.5);
        _layoutTitleLayoutComponent.setPositionPercentYEnabled(true);
        _layoutTitleLayoutComponent.setPositionPercentY(1);
        this._layoutTitle.setTouchEnabled(false);
        this._layoutTitle.setUnifySizeEnabled(false);
        this._layoutTitle.ignoreContentAdaptWithSize(false);
        this._layoutTitle.setContentSize(cc.size(369.2084, 88.5504));

        ///// # _imgBackgroundTitle
        this._imgBackgroundTitle = new ccui.ImageView();
        this._imgBackgroundTitle.setName("_imgBackgroundTitle");
        this._layoutTitle.addChild(this._imgBackgroundTitle);
        this._imgBackgroundTitle.setCascadeOpacityEnabled(true);
        this._imgBackgroundTitle.setCascadeColorEnabled(true);
        this._imgBackgroundTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundTitle, 0.5, 0.5);
        let _imgBackgroundTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundTitle);
        _imgBackgroundTitleLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundTitleLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundTitleLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundTitleLayoutComponent.setPositionPercentY(0.5);
        this._imgBackgroundTitle.loadTexture("basics/popup/HeaderBlue.png", 1);
        this._imgBackgroundTitle.setUnifySizeEnabled(false);
        this._imgBackgroundTitle.ignoreContentAdaptWithSize(false);
        this._imgBackgroundTitle.setContentSize(cc.size(346, 84));
        this._imgBackgroundTitle.setTouchEnabled(false);

        ///// # _txtTitle
        this._txtTitle = new ck.Text();
        this._txtTitle.setName("_txtTitle");
        this._layoutTitle.addChild(this._txtTitle);
        this._txtTitle.setCascadeOpacityEnabled(true);
        this._txtTitle.setCascadeColorEnabled(true);
        this._txtTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle, 0.5, 0.5);
        this._txtTitle.setTextColor(cc.color(255, 252, 225, 255));
        let _txtTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle);
        _txtTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentX(0.5);
        _txtTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentY(0.5);
        this._txtTitle.setTouchEnabled(false);
        this._txtTitle.ignoreContentAdaptWithSize(true);
        this._txtTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTitle.setDefaultFontSize(55);
        this._txtTitle.setString(gm.localize.getText("TXT_ADD_FRIEND"));
        this._txtTitle.setTextHorizontalAlignment(0);
        this._txtTitle.setTextVerticalAlignment(0);
        this._txtTitle.enableOutline(cc.color(155, 68, 38, 255), 2);
        this._txtTitle.enableShadow(cc.color(155, 68, 38, 255), cc.size(0, -2), 0);

        ///// # _layoutClose
        this._layoutClose = new ccui.Layout();
        this._layoutClose.setName("_layoutClose");
        this._layoutPopup.addChild(this._layoutClose);
        this._layoutClose.setCascadeOpacityEnabled(true);
        this._layoutClose.setCascadeColorEnabled(true);
        this._layoutClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutClose, 0.99, 0.99);
        let _layoutCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutClose);
        _layoutCloseLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentX(0.99);
        _layoutCloseLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentY(0.99);
        this._layoutClose.setTouchEnabled(true);
        this._layoutClose.setUnifySizeEnabled(false);
        this._layoutClose.ignoreContentAdaptWithSize(false);
        this._layoutClose.setContentSize(cc.size(68.5109, 71.6));

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._layoutClose.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.5, 0.5);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.5);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.5);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(81, 83));
        this._imgClose.setTouchEnabled(false);

        ///// # _layoutSearching
        this._layoutSearching = new ccui.Layout();
        this._layoutSearching.setName("_layoutSearching");
        this._layoutPopup.addChild(this._layoutSearching);
        this._layoutSearching.setCascadeOpacityEnabled(true);
        this._layoutSearching.setCascadeColorEnabled(true);
        this._layoutSearching.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutSearching, 0.5, 0.9398);
        let _layoutSearchingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSearching);
        _layoutSearchingLayoutComponent.setPositionPercentXEnabled(true);
        _layoutSearchingLayoutComponent.setPositionPercentX(0.5);
        this._layoutSearching.setTouchEnabled(true);
        this._layoutSearching.setUnifySizeEnabled(false);
        this._layoutSearching.ignoreContentAdaptWithSize(false);
        this._layoutSearching.setContentSize(cc.size(490, 90));

        ///// # _editBoxSearch
        this._editBoxSearch = new ck.EditBox();
        this._editBoxSearch.setName("_editBoxSearch");
        this._layoutSearching.addChild(this._editBoxSearch);
        this._editBoxSearch.setCascadeOpacityEnabled(true);
        this._editBoxSearch.setCascadeColorEnabled(true);
        this._editBoxSearch.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxSearch, 0.6224, 0.5);
        let _editBoxSearchLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxSearch);
        _editBoxSearchLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxSearchLayoutComponent.setPositionPercentY(0.5);
        this._editBoxSearch.setUnifySizeEnabled(false);
        this._editBoxSearch.ignoreContentAdaptWithSize(false);
        this._editBoxSearch.setContentSize(cc.size(296.5802, 61));
        this._editBoxSearch.setTouchEnabled(false);

        ///// # _layoutEditBoxBackground
        this._layoutEditBoxBackground = new ccui.Layout();
        this._layoutEditBoxBackground.setName("_layoutEditBoxBackground");
        this._editBoxSearch.addChild(this._layoutEditBoxBackground);
        this._layoutEditBoxBackground.setCascadeOpacityEnabled(true);
        this._layoutEditBoxBackground.setCascadeColorEnabled(true);
        let _layoutEditBoxBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEditBoxBackground);
        _layoutEditBoxBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _layoutEditBoxBackgroundLayoutComponent.setPercentWidth(1);
        _layoutEditBoxBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _layoutEditBoxBackgroundLayoutComponent.setPercentHeight(1);
        this._layoutEditBoxBackground.setTouchEnabled(true);
        this._layoutEditBoxBackground.setUnifySizeEnabled(false);
        this._layoutEditBoxBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutEditBoxBackground, 1, 1);

        ///// # _imgEditBoxBackground
        this._imgEditBoxBackground = new ccui.ImageView();
        this._imgEditBoxBackground.setName("_imgEditBoxBackground");
        this._layoutEditBoxBackground.addChild(this._imgEditBoxBackground);
        this._imgEditBoxBackground.setCascadeOpacityEnabled(true);
        this._imgEditBoxBackground.setCascadeColorEnabled(true);
        this._imgEditBoxBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgEditBoxBackground, 0.5, 0.5);
        this._imgEditBoxBackground.setColor(cc.color(156, 129, 110, 255));
        let _imgEditBoxBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgEditBoxBackground);
        _imgEditBoxBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgEditBoxBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgEditBoxBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgEditBoxBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgEditBoxBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgEditBoxBackgroundLayoutComponent.setPercentWidth(1);
        _imgEditBoxBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgEditBoxBackgroundLayoutComponent.setPercentHeight(1);
        this._imgEditBoxBackground.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgEditBoxBackground.setUnifySizeEnabled(false);
        this._imgEditBoxBackground.ignoreContentAdaptWithSize(false);
        this._imgEditBoxBackground.setScale9Enabled(true);
        this._imgEditBoxBackground.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgEditBoxBackground, 1, 1);
        this._imgEditBoxBackground.setTouchEnabled(false);

        ///// # _layoutEditBoxText
        this._layoutEditBoxText = new ccui.Layout();
        this._layoutEditBoxText.setName("_layoutEditBoxText");
        this._editBoxSearch.addChild(this._layoutEditBoxText);
        this._layoutEditBoxText.setCascadeOpacityEnabled(true);
        this._layoutEditBoxText.setCascadeColorEnabled(true);
        this._layoutEditBoxText.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutEditBoxText, 0.05, 0.5);
        let _layoutEditBoxTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEditBoxText);
        _layoutEditBoxTextLayoutComponent.setPositionPercentXEnabled(true);
        _layoutEditBoxTextLayoutComponent.setPositionPercentX(0.05);
        _layoutEditBoxTextLayoutComponent.setPositionPercentYEnabled(true);
        _layoutEditBoxTextLayoutComponent.setPositionPercentY(0.5);
        _layoutEditBoxTextLayoutComponent.setPercentWidthEnabled(true);
        _layoutEditBoxTextLayoutComponent.setPercentWidth(0.9);
        _layoutEditBoxTextLayoutComponent.setPercentHeightEnabled(true);
        _layoutEditBoxTextLayoutComponent.setPercentHeight(1);
        this._layoutEditBoxText.setTouchEnabled(false);
        this._layoutEditBoxText.setUnifySizeEnabled(false);
        this._layoutEditBoxText.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutEditBoxText, 0.9, 1);
        this._layoutEditBoxText.setClippingEnabled(true);

        ///// # _txtEditBoxTextDisplay
        this._txtEditBoxTextDisplay = new ck.Text();
        this._txtEditBoxTextDisplay.setName("_txtEditBoxTextDisplay");
        this._layoutEditBoxText.addChild(this._txtEditBoxTextDisplay);
        this._txtEditBoxTextDisplay.setCascadeOpacityEnabled(true);
        this._txtEditBoxTextDisplay.setCascadeColorEnabled(true);
        this._txtEditBoxTextDisplay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtEditBoxTextDisplay, 0.5, 0.5);
        this._txtEditBoxTextDisplay.setTextColor(cc.color(211, 191, 170, 255));
        let _txtEditBoxTextDisplayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtEditBoxTextDisplay);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentXEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentX(0.5);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentYEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentY(0.5);
        this._txtEditBoxTextDisplay.setTouchEnabled(false);
        this._txtEditBoxTextDisplay.ignoreContentAdaptWithSize(true);
        this._txtEditBoxTextDisplay.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtEditBoxTextDisplay.setDefaultFontSize(40);
        this._txtEditBoxTextDisplay.setString(gm.localize.getText("TXT_ENTER_HERE"));
        this._txtEditBoxTextDisplay.setTextHorizontalAlignment(1);
        this._txtEditBoxTextDisplay.setTextVerticalAlignment(1);

        ///// # _initEditBox for this._editBoxSearch;
        this._editBoxSearch._initEditBox();

        ///// # _btnSearch
        this._btnSearch = new AsyncButton();
        this._btnSearch.setName("_btnSearch");
        this._layoutSearching.addChild(this._btnSearch);
        this._btnSearch.setCascadeOpacityEnabled(true);
        this._btnSearch.setCascadeColorEnabled(true);
        this._btnSearch.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnSearch, 0.8163, 0.5);
        let _btnSearchLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnSearch);
        _btnSearchLayoutComponent.setPositionPercentYEnabled(true);
        _btnSearchLayoutComponent.setPositionPercentY(0.5);
        this._btnSearch.setUnifySizeEnabled(false);
        this._btnSearch.ignoreContentAdaptWithSize(false);
        this._btnSearch.setContentSize(cc.size(170, 65));
        this._btnSearch.setTouchEnabled(true);

        ///// # _imgButtonSearch
        this._imgButtonSearch = new ccui.ImageView();
        this._imgButtonSearch.setName("_imgButtonSearch");
        this._btnSearch.addChild(this._imgButtonSearch);
        this._imgButtonSearch.setCascadeOpacityEnabled(true);
        this._imgButtonSearch.setCascadeColorEnabled(true);
        this._imgButtonSearch.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonSearch, 0.5, 0.5);
        let _imgButtonSearchLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonSearch);
        _imgButtonSearchLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonSearchLayoutComponent.setPositionPercentX(0.5);
        _imgButtonSearchLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonSearchLayoutComponent.setPositionPercentY(0.5);
        _imgButtonSearchLayoutComponent.setPercentWidthEnabled(true);
        _imgButtonSearchLayoutComponent.setPercentWidth(1);
        _imgButtonSearchLayoutComponent.setPercentHeightEnabled(true);
        _imgButtonSearchLayoutComponent.setPercentHeight(1);
        this._imgButtonSearch.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgButtonSearch.setUnifySizeEnabled(false);
        this._imgButtonSearch.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonSearch, 1, 1);
        this._imgButtonSearch.setTouchEnabled(false);

        ///// # _txtButtonSearch
        this._txtButtonSearch = new ck.Text();
        this._txtButtonSearch.setName("_txtButtonSearch");
        this._btnSearch.addChild(this._txtButtonSearch);
        this._txtButtonSearch.setCascadeOpacityEnabled(true);
        this._txtButtonSearch.setCascadeColorEnabled(true);
        this._txtButtonSearch.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonSearch, 0.5, 0.52);
        let _txtButtonSearchLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonSearch);
        _txtButtonSearchLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonSearchLayoutComponent.setPositionPercentX(0.5);
        _txtButtonSearchLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonSearchLayoutComponent.setPositionPercentY(0.52);
        this._txtButtonSearch.setTouchEnabled(false);
        this._txtButtonSearch.ignoreContentAdaptWithSize(true);
        this._txtButtonSearch.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonSearch.setDefaultFontSize(27);
        this._txtButtonSearch.setString(gm.localize.getText("TXT_SEARCH"));
        this._txtButtonSearch.setTextHorizontalAlignment(0);
        this._txtButtonSearch.setTextVerticalAlignment(0);
        this._txtButtonSearch.enableOutline(cc.color(16, 124, 104, 255), 2);

        ///// # _imgLoadingButtonSearch
        this._imgLoadingButtonSearch = new ccui.ImageView();
        this._imgLoadingButtonSearch.setName("_imgLoadingButtonSearch");
        this._btnSearch.addChild(this._imgLoadingButtonSearch);
        this._imgLoadingButtonSearch.setCascadeOpacityEnabled(true);
        this._imgLoadingButtonSearch.setCascadeColorEnabled(true);
        this._imgLoadingButtonSearch.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLoadingButtonSearch, 0.5, 0.52);
        this._imgLoadingButtonSearch.setVisible(false);
        let _imgLoadingButtonSearchLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoadingButtonSearch);
        _imgLoadingButtonSearchLayoutComponent.setPositionPercentXEnabled(true);
        _imgLoadingButtonSearchLayoutComponent.setPositionPercentX(0.5);
        _imgLoadingButtonSearchLayoutComponent.setPositionPercentYEnabled(true);
        _imgLoadingButtonSearchLayoutComponent.setPositionPercentY(0.52);
        this._imgLoadingButtonSearch.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgLoadingButtonSearch.setUnifySizeEnabled(false);
        this._imgLoadingButtonSearch.ignoreContentAdaptWithSize(false);
        this._imgLoadingButtonSearch.setContentSize(cc.size(50, 50));
        this._imgLoadingButtonSearch.setTouchEnabled(false);

        ///// # _layoutSearchResult
        this._layoutSearchResult = new ccui.Layout();
        this._layoutSearchResult.setName("_layoutSearchResult");
        this._layoutPopup.addChild(this._layoutSearchResult);
        this._layoutSearchResult.setCascadeOpacityEnabled(true);
        this._layoutSearchResult.setCascadeColorEnabled(true);
        this._layoutSearchResult.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutSearchResult, 0.5, 0.8232);
        let _layoutSearchResultLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSearchResult);
        _layoutSearchResultLayoutComponent.setPositionPercentXEnabled(true);
        _layoutSearchResultLayoutComponent.setPositionPercentX(0.5);
        this._layoutSearchResult.setTouchEnabled(true);
        this._layoutSearchResult.setUnifySizeEnabled(false);
        this._layoutSearchResult.ignoreContentAdaptWithSize(false);
        this._layoutSearchResult.setContentSize(cc.size(490, 145));

        ///// # _friendSearchWidget
        this._friendSearchWidget = new FriendSearchWidget();
        this._friendSearchWidget.setName("_friendSearchWidget");
        this._layoutSearchResult.addChild(this._friendSearchWidget);
        this._friendSearchWidget.setCascadeOpacityEnabled(true);
        this._friendSearchWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._friendSearchWidget, 0.5, 0.5517);
        let _friendSearchWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._friendSearchWidget);
        _friendSearchWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _friendSearchWidgetLayoutComponent.setPositionPercentX(0.5);
        _friendSearchWidgetLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _friendSearchWidgetLayoutComponent.setTopMargin(65);

        ///// # _listviewInvitations
        this._listviewInvitations = new ccui.ListView();
        this._listviewInvitations.setName("_listviewInvitations");
        this._layoutPopup.addChild(this._listviewInvitations);
        this._listviewInvitations.setCascadeOpacityEnabled(true);
        this._listviewInvitations.setCascadeColorEnabled(true);
        this._listviewInvitations.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._listviewInvitations, 0.5, 0.0473);
        let _listviewInvitationsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._listviewInvitations);
        _listviewInvitationsLayoutComponent.setPositionPercentXEnabled(true);
        _listviewInvitationsLayoutComponent.setPositionPercentX(0.5);
        _listviewInvitationsLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _listviewInvitationsLayoutComponent.setTopMargin(135.5);
        this._listviewInvitations.setTouchEnabled(true);
        this._listviewInvitations.setUnifySizeEnabled(false);
        this._listviewInvitations.ignoreContentAdaptWithSize(false);
        this._listviewInvitations.setContentSize(cc.size(490, 600));
        this._listviewInvitations.setDirection(ccui.ScrollView.DIR_VERTICAL);
        this._listviewInvitations.setItemsMargin(10);
        this._listviewInvitations.setBounceEnabled(true);

    },



});

/**
 * Create FriendInvitationPopup
 * @returns {_ccs.FriendInvitationPopup}
 */
_ccs.FriendInvitationPopup.create = function () {
    return new _ccs.FriendInvitationPopup();
};
