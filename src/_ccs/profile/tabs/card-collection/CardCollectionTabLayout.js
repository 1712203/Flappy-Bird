/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.CardCollectionTabLayout
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.CardCollectionTabLayout = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ck.TabSelector} */
    _tabSelector: null,
    /** @type {ccui.Layout} */
    _layoutMid: null,
    /** @type {ccui.ImageView} */
    _imgInfo: null,
    /** @type {ccui.ImageView} */
    _imgInfoIcon: null,
    /** @type {CardCollectionJokerCardButton} */
    _jokerCardButton: null,
    /** @type {ccui.Layout} */
    _layoutCardSetPopup: null,
    /** @type {ShopPackInfoPopup} */
    _shopPackInfo: null,


    /**
     * _ccs.CardCollectionTabLayout constructor
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

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._layoutRoot.addChild(this._imgBgr);
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
        this._imgBgr.loadTexture("sprites/backgrounds/CardCollection.png", 0);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBgr, 1, 1);
        this._imgBgr.setTouchEnabled(false);

        ///// # _tabSelector
        this._tabSelector = new ck.TabSelector();
        this._tabSelector.setName("_tabSelector");
        this._layoutRoot.addChild(this._tabSelector);
        this._tabSelector.setCascadeOpacityEnabled(true);
        this._tabSelector.setCascadeColorEnabled(true);
        this._tabSelector.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._tabSelector, 0.5, 0.93);
        let _tabSelectorLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._tabSelector);
        _tabSelectorLayoutComponent.setPositionPercentXEnabled(true);
        _tabSelectorLayoutComponent.setPositionPercentX(0.5);
        _tabSelectorLayoutComponent.setPositionPercentYEnabled(true);
        _tabSelectorLayoutComponent.setPositionPercentY(0.93);
        _tabSelectorLayoutComponent.setPercentWidthEnabled(true);
        _tabSelectorLayoutComponent.setPercentWidth(1);

        ///// # _layoutMid
        this._layoutMid = new ccui.Layout();
        this._layoutMid.setName("_layoutMid");
        this._layoutRoot.addChild(this._layoutMid);
        this._layoutMid.setCascadeOpacityEnabled(true);
        this._layoutMid.setCascadeColorEnabled(true);
        this._layoutMid.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutMid, 0.5, 0.8671);
        let _layoutMidLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutMid);
        _layoutMidLayoutComponent.setPositionPercentXEnabled(true);
        _layoutMidLayoutComponent.setPositionPercentX(0.5);
        _layoutMidLayoutComponent.setPercentWidthEnabled(true);
        _layoutMidLayoutComponent.setPercentWidth(1);
        this._layoutMid.setTouchEnabled(true);
        this._layoutMid.setUnifySizeEnabled(false);
        this._layoutMid.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutMid, 1);
        this._layoutMid.setContentSize(cc.size(this._layoutMid.width, 885));

        ///// # _imgInfo
        this._imgInfo = new ccui.ImageView();
        this._imgInfo.setName("_imgInfo");
        this._layoutRoot.addChild(this._imgInfo);
        this._imgInfo.setCascadeOpacityEnabled(true);
        this._imgInfo.setCascadeColorEnabled(true);
        this._imgInfo.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgInfo, 0.075, 0.9225);
        let _imgInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgInfo);
        _imgInfoLayoutComponent.setPositionPercentXEnabled(true);
        _imgInfoLayoutComponent.setPositionPercentX(0.075);
        _imgInfoLayoutComponent.setPositionPercentYEnabled(true);
        _imgInfoLayoutComponent.setPositionPercentY(0.9225);
        this._imgInfo.loadTexture("buttons/squares/Info.png", 1);
        this._imgInfo.setUnifySizeEnabled(false);
        this._imgInfo.ignoreContentAdaptWithSize(false);
        this._imgInfo.setContentSize(cc.size(55, 53));
        this._imgInfo.setTouchEnabled(true);

        ///// # _imgInfoIcon
        this._imgInfoIcon = new ccui.ImageView();
        this._imgInfoIcon.setName("_imgInfoIcon");
        this._imgInfo.addChild(this._imgInfoIcon);
        this._imgInfoIcon.setCascadeOpacityEnabled(true);
        this._imgInfoIcon.setCascadeColorEnabled(true);
        this._imgInfoIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgInfoIcon, 0.5, 0.5689);
        let _imgInfoIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgInfoIcon);
        _imgInfoIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgInfoIconLayoutComponent.setPositionPercentX(0.5);
        _imgInfoIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgInfoIconLayoutComponent.setPositionPercentY(0.5689);
        this._imgInfoIcon.loadTexture("icons/flat/Info.png", 1);
        this._imgInfoIcon.setUnifySizeEnabled(false);
        this._imgInfoIcon.ignoreContentAdaptWithSize(false);
        this._imgInfoIcon.setContentSize(cc.size(14, 32));
        this._imgInfoIcon.setTouchEnabled(false);

        ///// # _jokerCardButton
        this._jokerCardButton = new CardCollectionJokerCardButton();
        this._jokerCardButton.setName("_jokerCardButton");
        this._layoutRoot.addChild(this._jokerCardButton);
        this._jokerCardButton.setCascadeOpacityEnabled(true);
        this._jokerCardButton.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._jokerCardButton, 0.105, 0.13);
        this._jokerCardButton.setVisible(false);
        let _jokerCardButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._jokerCardButton);
        _jokerCardButtonLayoutComponent.setPositionPercentXEnabled(true);
        _jokerCardButtonLayoutComponent.setPositionPercentX(0.105);
        _jokerCardButtonLayoutComponent.setPositionPercentYEnabled(true);
        _jokerCardButtonLayoutComponent.setPositionPercentY(0.13);

        ///// # _layoutCardSetPopup
        this._layoutCardSetPopup = new ccui.Layout();
        this._layoutCardSetPopup.setName("_layoutCardSetPopup");
        this._layoutRoot.addChild(this._layoutCardSetPopup);
        this._layoutCardSetPopup.setCascadeOpacityEnabled(true);
        this._layoutCardSetPopup.setCascadeColorEnabled(true);
        let _layoutCardSetPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCardSetPopup);
        _layoutCardSetPopupLayoutComponent.setPercentWidthEnabled(true);
        _layoutCardSetPopupLayoutComponent.setPercentWidth(1);
        _layoutCardSetPopupLayoutComponent.setPercentHeightEnabled(true);
        _layoutCardSetPopupLayoutComponent.setPercentHeight(1);
        this._layoutCardSetPopup.setTouchEnabled(false);
        this._layoutCardSetPopup.setUnifySizeEnabled(false);
        this._layoutCardSetPopup.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutCardSetPopup, 1, 1);

        ///// # _shopPackInfo
        this._shopPackInfo = new ShopPackInfoPopup();
        this._shopPackInfo.setName("_shopPackInfo");
        this._layoutRoot.addChild(this._shopPackInfo);
        this._shopPackInfo.setCascadeOpacityEnabled(true);
        this._shopPackInfo.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._shopPackInfo, 0.5, 0.5);
        this._shopPackInfo.setVisible(false);
        let _shopPackInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._shopPackInfo);
        _shopPackInfoLayoutComponent.setPositionPercentXEnabled(true);
        _shopPackInfoLayoutComponent.setPositionPercentX(0.5);
        _shopPackInfoLayoutComponent.setPositionPercentYEnabled(true);
        _shopPackInfoLayoutComponent.setPositionPercentY(0.5);

    },



});

/**
 * Create CardCollectionTabLayout
 * @returns {_ccs.CardCollectionTabLayout}
 */
_ccs.CardCollectionTabLayout.create = function () {
    return new _ccs.CardCollectionTabLayout();
};
