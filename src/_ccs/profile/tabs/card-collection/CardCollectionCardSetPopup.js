/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.CardCollectionCardSetPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.CardCollectionCardSetPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {ck.Text} */
    _txtCardSetName: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.ImageView} */
    _imgFront: null,
    /** @type {ccui.Layout} */
    _layoutWidgets: null,
    /** @type {ck.TableView} */
    _tableViewWidgets: null,
    /** @type {Glow} */
    _glow: null,
    /** @type {ccui.Layout} */
    _layoutCardSetRewards: null,
    /** @type {ccui.ImageView} */
    _imgCardSetRewardsBgr: null,
    /** @type {ck.Text} */
    _txtCardSetRewardsTitle: null,
    /** @type {ck.Text} */
    _txtCardSetCompleteAmount: null,
    /** @type {CardCollectionJokerCardButton} */
    _jokerCardButton: null,


    /**
     * _ccs.CardCollectionCardSetPopup constructor
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
        this._layoutPopup.setTouchEnabled(false);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(518.6558, 810));

        ///// # _imgBack
        this._imgBack = new ccui.ImageView();
        this._imgBack.setName("_imgBack");
        this._layoutPopup.addChild(this._imgBack);
        this._imgBack.setCascadeOpacityEnabled(true);
        this._imgBack.setCascadeColorEnabled(true);
        this._imgBack.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBack, 0.5, 0.5);
        let _imgBackLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBack);
        _imgBackLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackLayoutComponent.setPositionPercentX(0.5);
        _imgBackLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackLayoutComponent.setPositionPercentY(0.5);
        _imgBackLayoutComponent.setPercentWidthEnabled(true);
        _imgBackLayoutComponent.setPercentWidth(1);
        _imgBackLayoutComponent.setPercentHeightEnabled(true);
        _imgBackLayoutComponent.setPercentHeight(1);
        this._imgBack.loadTexture("basics/popup/Back.png", 1);
        this._imgBack.setUnifySizeEnabled(false);
        this._imgBack.ignoreContentAdaptWithSize(false);
        this._imgBack.setScale9Enabled(true);
        this._imgBack.setCapInsets(cc.rect(69, 57, 72, 61));
        ck.UIUtils.setSizePercent(this._imgBack, 1, 1);
        this._imgBack.setTouchEnabled(false);

        ///// # _txtCardSetName
        this._txtCardSetName = new ck.Text();
        this._txtCardSetName.setName("_txtCardSetName");
        this._layoutPopup.addChild(this._txtCardSetName);
        this._txtCardSetName.setCascadeOpacityEnabled(true);
        this._txtCardSetName.setCascadeColorEnabled(true);
        this._txtCardSetName.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCardSetName, 0.5, 0.945);
        this._txtCardSetName.setTextColor(cc.color(26, 76, 87, 255));
        let _txtCardSetNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCardSetName);
        _txtCardSetNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtCardSetNameLayoutComponent.setPositionPercentX(0.5);
        _txtCardSetNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtCardSetNameLayoutComponent.setPositionPercentY(0.945);
        this._txtCardSetName.setTouchEnabled(false);
        this._txtCardSetName.setUnifySizeEnabled(false);
        this._txtCardSetName.ignoreContentAdaptWithSize(false);
        this._txtCardSetName.setContentSize(cc.size(400, 54));
        this._txtCardSetName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCardSetName.setDefaultFontSize(48);
        this._txtCardSetName.setTextHorizontalAlignment(1);
        this._txtCardSetName.setTextVerticalAlignment(1);
        this._txtCardSetName.autoFitSingleLine();

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._layoutPopup.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.98, 0.99);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.98);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.99);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(81, 83));
        this._imgClose.setTouchEnabled(false);

        ///// # _imgFront
        this._imgFront = new ccui.ImageView();
        this._imgFront.setName("_imgFront");
        this._layoutPopup.addChild(this._imgFront);
        this._imgFront.setCascadeOpacityEnabled(true);
        this._imgFront.setCascadeColorEnabled(true);
        this._imgFront.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgFront, 0.5, 0.9);
        let _imgFrontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFront);
        _imgFrontLayoutComponent.setPositionPercentXEnabled(true);
        _imgFrontLayoutComponent.setPositionPercentX(0.5);
        _imgFrontLayoutComponent.setPositionPercentYEnabled(true);
        _imgFrontLayoutComponent.setPositionPercentY(0.9);
        _imgFrontLayoutComponent.setPercentWidthEnabled(true);
        _imgFrontLayoutComponent.setPercentWidth(0.9353);
        this._imgFront.loadTexture("basics/popup/Font.png", 1);
        this._imgFront.setUnifySizeEnabled(false);
        this._imgFront.ignoreContentAdaptWithSize(false);
        this._imgFront.setScale9Enabled(true);
        this._imgFront.setCapInsets(cc.rect(52, 48, 49, 49));
        ck.UIUtils.setWidthPercent(this._imgFront, 0.9353);
        this._imgFront.setContentSize(cc.size(this._imgFront.width, 615));
        this._imgFront.setTouchEnabled(false);

        ///// # _layoutWidgets
        this._layoutWidgets = new ccui.Layout();
        this._layoutWidgets.setName("_layoutWidgets");
        this._imgFront.addChild(this._layoutWidgets);
        this._layoutWidgets.setCascadeOpacityEnabled(true);
        this._layoutWidgets.setCascadeColorEnabled(true);
        this._layoutWidgets.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutWidgets, 0.5, 0.595);
        let _layoutWidgetsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutWidgets);
        _layoutWidgetsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutWidgetsLayoutComponent.setPositionPercentX(0.5);
        _layoutWidgetsLayoutComponent.setPositionPercentYEnabled(true);
        _layoutWidgetsLayoutComponent.setPositionPercentY(0.595);
        _layoutWidgetsLayoutComponent.setPercentWidthEnabled(true);
        _layoutWidgetsLayoutComponent.setPercentWidth(0.95);
        _layoutWidgetsLayoutComponent.setPercentHeightEnabled(true);
        _layoutWidgetsLayoutComponent.setPercentHeight(0.74);
        this._layoutWidgets.setTouchEnabled(false);
        this._layoutWidgets.setUnifySizeEnabled(false);
        this._layoutWidgets.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutWidgets, 0.95, 0.74);

        ///// # _tableViewWidgets
        this._tableViewWidgets = new ck.TableView();
        this._tableViewWidgets.setName("_tableViewWidgets");
        this._layoutWidgets.addChild(this._tableViewWidgets);
        this._tableViewWidgets.setCascadeOpacityEnabled(true);
        this._tableViewWidgets.setCascadeColorEnabled(true);
        this._tableViewWidgets.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._tableViewWidgets, 0.5, 0.5);
        let _tableViewWidgetsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._tableViewWidgets);
        _tableViewWidgetsLayoutComponent.setPositionPercentXEnabled(true);
        _tableViewWidgetsLayoutComponent.setPositionPercentX(0.5);
        _tableViewWidgetsLayoutComponent.setPositionPercentYEnabled(true);
        _tableViewWidgetsLayoutComponent.setPositionPercentY(0.5);
        _tableViewWidgetsLayoutComponent.setPercentWidthEnabled(true);
        _tableViewWidgetsLayoutComponent.setPercentWidth(1);
        _tableViewWidgetsLayoutComponent.setPercentHeightEnabled(true);
        _tableViewWidgetsLayoutComponent.setPercentHeight(1);

        ///// # _glow
        this._glow = new Glow();
        this._glow.setName("_glow");
        this._layoutWidgets.addChild(this._glow);
        this._glow.setCascadeOpacityEnabled(true);
        this._glow.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._glow, 0.5, 0.5);
        let _glowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._glow);
        _glowLayoutComponent.setPositionPercentXEnabled(true);
        _glowLayoutComponent.setPositionPercentX(0.5);
        _glowLayoutComponent.setPositionPercentYEnabled(true);
        _glowLayoutComponent.setPositionPercentY(0.5);

        ///// # _layoutCardSetRewards
        this._layoutCardSetRewards = new ccui.Layout();
        this._layoutCardSetRewards.setName("_layoutCardSetRewards");
        this._imgFront.addChild(this._layoutCardSetRewards);
        this._layoutCardSetRewards.setCascadeOpacityEnabled(true);
        this._layoutCardSetRewards.setCascadeColorEnabled(true);
        this._layoutCardSetRewards.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutCardSetRewards, 0.5, 0.045);
        let _layoutCardSetRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCardSetRewards);
        _layoutCardSetRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCardSetRewardsLayoutComponent.setPositionPercentX(0.5);
        _layoutCardSetRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCardSetRewardsLayoutComponent.setPositionPercentY(0.045);
        _layoutCardSetRewardsLayoutComponent.setPercentWidthEnabled(true);
        _layoutCardSetRewardsLayoutComponent.setPercentWidth(0.65);
        this._layoutCardSetRewards.setTouchEnabled(false);
        this._layoutCardSetRewards.setUnifySizeEnabled(false);
        this._layoutCardSetRewards.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutCardSetRewards, 0.65);
        this._layoutCardSetRewards.setContentSize(cc.size(this._layoutCardSetRewards.width, 100));

        ///// # _imgCardSetRewardsBgr
        this._imgCardSetRewardsBgr = new ccui.ImageView();
        this._imgCardSetRewardsBgr.setName("_imgCardSetRewardsBgr");
        this._layoutCardSetRewards.addChild(this._imgCardSetRewardsBgr);
        this._imgCardSetRewardsBgr.setCascadeOpacityEnabled(true);
        this._imgCardSetRewardsBgr.setCascadeColorEnabled(true);
        this._imgCardSetRewardsBgr.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgCardSetRewardsBgr, 0.5, 0);
        this._imgCardSetRewardsBgr.setColor(cc.color(209, 189, 164, 255));
        let _imgCardSetRewardsBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCardSetRewardsBgr);
        _imgCardSetRewardsBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgCardSetRewardsBgrLayoutComponent.setPositionPercentX(0.5);
        _imgCardSetRewardsBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgCardSetRewardsBgrLayoutComponent.setPositionPercentY(0);
        _imgCardSetRewardsBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgCardSetRewardsBgrLayoutComponent.setPercentWidth(1);
        this._imgCardSetRewardsBgr.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgCardSetRewardsBgr.setUnifySizeEnabled(false);
        this._imgCardSetRewardsBgr.ignoreContentAdaptWithSize(false);
        this._imgCardSetRewardsBgr.setScale9Enabled(true);
        this._imgCardSetRewardsBgr.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setWidthPercent(this._imgCardSetRewardsBgr, 1);
        this._imgCardSetRewardsBgr.setContentSize(cc.size(this._imgCardSetRewardsBgr.width, 100));
        this._imgCardSetRewardsBgr.setTouchEnabled(false);

        ///// # _txtCardSetRewardsTitle
        this._txtCardSetRewardsTitle = new ck.Text();
        this._txtCardSetRewardsTitle.setName("_txtCardSetRewardsTitle");
        this._layoutCardSetRewards.addChild(this._txtCardSetRewardsTitle);
        this._txtCardSetRewardsTitle.setCascadeOpacityEnabled(true);
        this._txtCardSetRewardsTitle.setCascadeColorEnabled(true);
        this._txtCardSetRewardsTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCardSetRewardsTitle, 0.5, 0.725);
        this._txtCardSetRewardsTitle.setTextColor(cc.color(128, 109, 92, 255));
        let _txtCardSetRewardsTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCardSetRewardsTitle);
        _txtCardSetRewardsTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtCardSetRewardsTitleLayoutComponent.setPositionPercentX(0.5);
        _txtCardSetRewardsTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtCardSetRewardsTitleLayoutComponent.setPositionPercentY(0.725);
        this._txtCardSetRewardsTitle.setTouchEnabled(false);
        this._txtCardSetRewardsTitle.setUnifySizeEnabled(false);
        this._txtCardSetRewardsTitle.ignoreContentAdaptWithSize(false);
        this._txtCardSetRewardsTitle.setContentSize(cc.size(289, 40));
        this._txtCardSetRewardsTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCardSetRewardsTitle.setDefaultFontSize(34);
        this._txtCardSetRewardsTitle.setString(gm.localize.getText("TXT_COMPLETE_CARDS_SET_TO_GET"));
        this._txtCardSetRewardsTitle.setTextHorizontalAlignment(1);
        this._txtCardSetRewardsTitle.setTextVerticalAlignment(1);
        this._txtCardSetRewardsTitle.autoFitSingleLine();

        ///// # _txtCardSetCompleteAmount
        this._txtCardSetCompleteAmount = new ck.Text();
        this._txtCardSetCompleteAmount.setName("_txtCardSetCompleteAmount");
        this._layoutPopup.addChild(this._txtCardSetCompleteAmount);
        this._txtCardSetCompleteAmount.setCascadeOpacityEnabled(true);
        this._txtCardSetCompleteAmount.setCascadeColorEnabled(true);
        this._txtCardSetCompleteAmount.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._txtCardSetCompleteAmount, 0.53, 0.0509);
        this._txtCardSetCompleteAmount.setTextColor(cc.color(26, 76, 87, 255));
        let _txtCardSetCompleteAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCardSetCompleteAmount);
        _txtCardSetCompleteAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtCardSetCompleteAmountLayoutComponent.setPositionPercentX(0.53);
        this._txtCardSetCompleteAmount.setTouchEnabled(false);
        this._txtCardSetCompleteAmount.setUnifySizeEnabled(false);
        this._txtCardSetCompleteAmount.ignoreContentAdaptWithSize(false);
        this._txtCardSetCompleteAmount.setContentSize(cc.size(300, 40));
        this._txtCardSetCompleteAmount.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCardSetCompleteAmount.setDefaultFontSize(36);
        this._txtCardSetCompleteAmount.setTextHorizontalAlignment(1);
        this._txtCardSetCompleteAmount.setTextVerticalAlignment(1);
        this._txtCardSetCompleteAmount.autoFitSingleLine();

        ///// # _jokerCardButton
        this._jokerCardButton = new CardCollectionJokerCardButton();
        this._jokerCardButton.setName("_jokerCardButton");
        this._layoutPopup.addChild(this._jokerCardButton);
        this._jokerCardButton.setCascadeOpacityEnabled(true);
        this._jokerCardButton.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._jokerCardButton, 0.1147, 0.0784);
        let _jokerCardButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._jokerCardButton);

    },



});

/**
 * Create CardCollectionCardSetPopup
 * @returns {_ccs.CardCollectionCardSetPopup}
 */
_ccs.CardCollectionCardSetPopup.create = function () {
    return new _ccs.CardCollectionCardSetPopup();
};
