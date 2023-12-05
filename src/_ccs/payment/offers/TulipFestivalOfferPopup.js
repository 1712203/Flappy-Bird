/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.TulipFestivalOfferPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.TulipFestivalOfferPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundLayoutItems: null,
    /** @type {ccui.ImageView} */
    _imgBanner: null,
    /** @type {ccui.ImageView} */
    _imgTitle: null,
    /** @type {ccui.ImageView} */
    _imgBonus: null,
    /** @type {ck.Text} */
    _txtBonusPercent: null,
    /** @type {ck.Text} */
    _txtBonus: null,
    /** @type {ccui.Layout} */
    _layoutItems: null,
    /** @type {cc.Node} */
    _nodeMainItem: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundMainItem: null,
    /** @type {ck.Text} */
    _txtAmountMainItem: null,
    /** @type {ccui.ImageView} */
    _imgIconMainItem: null,
    /** @type {ck.GridViewVertical} */
    _gridItems: null,
    /** @type {ccui.Layout} */
    _layoutBonusItems: null,
    /** @type {ccui.ImageView} */
    _imgBonusItems: null,
    /** @type {ck.GridViewVertical} */
    _gridBonusItems: null,
    /** @type {ccui.ImageView} */
    _imgPlus: null,
    /** @type {ck.Text} */
    _txtTimeLeft: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtHint01: null,
    /** @type {ck.Text} */
    _txtHint02: null,
    /** @type {ccui.ImageView} */
    _imgBuy: null,
    /** @type {ck.Text} */
    _txtPrice: null,
    /** @type {ccui.Button} */
    _btnChannels: null,
    /** @type {ccui.ImageView} */
    _imgNext: null,
    /** @type {ck.Text} */
    _txtName: null,
    /** @type {ccui.ImageView} */
    _imgChannels: null,


    /**
     * _ccs.TulipFestivalOfferPopup constructor
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

        ///// # _root
        this._root = new ccui.Layout();
        this._root.setName("_root");
        this.addChild(this._root);
        this._root.setCascadeOpacityEnabled(true);
        this._root.setCascadeColorEnabled(true);
        this._root.setAnchorPoint(cc.p(0.5, 0.5));
        this._root.setPosition(-0.0016, -0.0018);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(640, 967.2782));

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._root.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.9297, 0.9542);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(81, 83));
        this._imgClose.setTouchEnabled(false);

        ///// # _imgBackgroundLayoutItems
        this._imgBackgroundLayoutItems = new ccui.ImageView();
        this._imgBackgroundLayoutItems.setName("_imgBackgroundLayoutItems");
        this._root.addChild(this._imgBackgroundLayoutItems);
        this._imgBackgroundLayoutItems.setCascadeOpacityEnabled(true);
        this._imgBackgroundLayoutItems.setCascadeColorEnabled(true);
        this._imgBackgroundLayoutItems.setAnchorPoint(cc.p(1, 1));
        ck.UIUtils.setPositionPercent(this._imgBackgroundLayoutItems, 0.9914, 0.7374);
        let _imgBackgroundLayoutItemsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundLayoutItems);
        _imgBackgroundLayoutItemsLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutItemsLayoutComponent.setPositionPercentX(0.9914);
        this._imgBackgroundLayoutItems.loadTexture("offers/tulip-festival/BackgroundItems.png", 1);
        this._imgBackgroundLayoutItems.setUnifySizeEnabled(false);
        this._imgBackgroundLayoutItems.ignoreContentAdaptWithSize(false);
        this._imgBackgroundLayoutItems.setContentSize(cc.size(433, 353));
        this._imgBackgroundLayoutItems.setTouchEnabled(false);

        ///// # _imgBanner
        this._imgBanner = new ccui.ImageView();
        this._imgBanner.setName("_imgBanner");
        this._root.addChild(this._imgBanner);
        this._imgBanner.setCascadeOpacityEnabled(true);
        this._imgBanner.setCascadeColorEnabled(true);
        this._imgBanner.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBanner, 0.3187, 0.5758);
        let _imgBannerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBanner);
        this._imgBanner.loadTexture("offers/tulip-festival/Banner.png", 1);
        this._imgBanner.setUnifySizeEnabled(false);
        this._imgBanner.ignoreContentAdaptWithSize(false);
        this._imgBanner.setContentSize(cc.size(406, 501));
        this._imgBanner.setTouchEnabled(false);

        ///// # _imgTitle
        this._imgTitle = new ccui.ImageView();
        this._imgTitle.setName("_imgTitle");
        this._root.addChild(this._imgTitle);
        this._imgTitle.setCascadeOpacityEnabled(true);
        this._imgTitle.setCascadeColorEnabled(true);
        this._imgTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTitle, 0.5, 0.8508);
        let _imgTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTitle);
        _imgTitleLayoutComponent.setPositionPercentXEnabled(true);
        _imgTitleLayoutComponent.setPositionPercentX(0.5);
        this._imgTitle.loadTexture("texts/offers/TulipFestival.png", 1);
        this._imgTitle.setTouchEnabled(false);

        ///// # _imgBonus
        this._imgBonus = new ccui.ImageView();
        this._imgBonus.setName("_imgBonus");
        this._root.addChild(this._imgBonus);
        this._imgBonus.setCascadeOpacityEnabled(true);
        this._imgBonus.setCascadeColorEnabled(true);
        this._imgBonus.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBonus, 0.1716, 0.4208);
        this._imgBonus.setScale(0.8, 0.8);
        this._imgBonus.setRotationX(-14.9955);
        this._imgBonus.setRotationY(-14.9983);
        let _imgBonusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBonus);
        this._imgBonus.loadTexture("icons/color/badges/Badges_01.png", 1);
        this._imgBonus.setUnifySizeEnabled(false);
        this._imgBonus.ignoreContentAdaptWithSize(false);
        this._imgBonus.setContentSize(cc.size(150, 150));
        this._imgBonus.setTouchEnabled(false);

        ///// # _txtBonusPercent
        this._txtBonusPercent = new ck.Text();
        this._txtBonusPercent.setName("_txtBonusPercent");
        this._imgBonus.addChild(this._txtBonusPercent);
        this._txtBonusPercent.setCascadeOpacityEnabled(true);
        this._txtBonusPercent.setCascadeColorEnabled(true);
        this._txtBonusPercent.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBonusPercent, 0.5, 0.44);
        this._txtBonusPercent.setRotationY(0.0006);
        this._txtBonusPercent.setTextColor(cc.color(247, 192, 77, 255));
        let _txtBonusPercentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBonusPercent);
        _txtBonusPercentLayoutComponent.setPositionPercentXEnabled(true);
        _txtBonusPercentLayoutComponent.setPositionPercentX(0.5);
        _txtBonusPercentLayoutComponent.setPositionPercentYEnabled(true);
        _txtBonusPercentLayoutComponent.setPositionPercentY(0.44);
        this._txtBonusPercent.setTouchEnabled(false);
        this._txtBonusPercent.ignoreContentAdaptWithSize(true);
        this._txtBonusPercent.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtBonusPercent.setDefaultFontSize(50);
        this._txtBonusPercent.setTextHorizontalAlignment(1);
        this._txtBonusPercent.setTextVerticalAlignment(1);
        this._txtBonusPercent.enableOutline(cc.color(129, 36, 3, 255), 3);

        ///// # _txtBonus
        this._txtBonus = new ck.Text();
        this._txtBonus.setName("_txtBonus");
        this._imgBonus.addChild(this._txtBonus);
        this._txtBonus.setCascadeOpacityEnabled(true);
        this._txtBonus.setCascadeColorEnabled(true);
        this._txtBonus.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBonus, 0.5, 0.7261);
        this._txtBonus.setRotationY(0.0004);
        let _txtBonusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBonus);
        _txtBonusLayoutComponent.setPositionPercentXEnabled(true);
        _txtBonusLayoutComponent.setPositionPercentX(0.5);
        _txtBonusLayoutComponent.setPositionPercentYEnabled(true);
        _txtBonusLayoutComponent.setPositionPercentY(0.7261);
        this._txtBonus.setTouchEnabled(false);
        this._txtBonus.ignoreContentAdaptWithSize(true);
        this._txtBonus.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBonus.setDefaultFontSize(40);
        this._txtBonus.setString(gm.localize.getText("TXT_BONUS"));
        this._txtBonus.setTextHorizontalAlignment(1);
        this._txtBonus.setTextVerticalAlignment(1);
        this._txtBonus.enableOutline(cc.color(129, 36, 3, 255), 2);

        ///// # _layoutItems
        this._layoutItems = new ccui.Layout();
        this._layoutItems.setName("_layoutItems");
        this._root.addChild(this._layoutItems);
        this._layoutItems.setCascadeOpacityEnabled(true);
        this._layoutItems.setCascadeColorEnabled(true);
        this._layoutItems.setAnchorPoint(cc.p(1, 1));
        ck.UIUtils.setPositionPercent(this._layoutItems, 0.9914, 0.7374);
        let _layoutItemsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutItems);
        _layoutItemsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutItemsLayoutComponent.setPositionPercentX(0.9914);
        this._layoutItems.setTouchEnabled(true);
        this._layoutItems.setUnifySizeEnabled(false);
        this._layoutItems.ignoreContentAdaptWithSize(false);
        this._layoutItems.setContentSize(cc.size(438, 353));

        ///// # _nodeMainItem
        this._nodeMainItem = new cc.Node();
        this._nodeMainItem.setName("_nodeMainItem");
        this._layoutItems.addChild(this._nodeMainItem);
        this._nodeMainItem.setCascadeOpacityEnabled(true);
        this._nodeMainItem.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeMainItem, 0.6055, 0.8019);
        let _nodeMainItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeMainItem);
        _nodeMainItemLayoutComponent.setPositionPercentXEnabled(true);
        _nodeMainItemLayoutComponent.setPositionPercentX(0.6055);
        _nodeMainItemLayoutComponent.setPositionPercentYEnabled(true);
        _nodeMainItemLayoutComponent.setPositionPercentY(0.8019);

        ///// # _imgBackgroundMainItem
        this._imgBackgroundMainItem = new ccui.ImageView();
        this._imgBackgroundMainItem.setName("_imgBackgroundMainItem");
        this._nodeMainItem.addChild(this._imgBackgroundMainItem);
        this._imgBackgroundMainItem.setCascadeOpacityEnabled(true);
        this._imgBackgroundMainItem.setCascadeColorEnabled(true);
        this._imgBackgroundMainItem.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgBackgroundMainItem.setColor(cc.color(161, 59, 10, 255));
        let _imgBackgroundMainItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundMainItem);
        this._imgBackgroundMainItem.loadTexture("offers/MainItemBackground.png", 1);
        this._imgBackgroundMainItem.setUnifySizeEnabled(false);
        this._imgBackgroundMainItem.ignoreContentAdaptWithSize(false);
        this._imgBackgroundMainItem.setContentSize(cc.size(328.6855, 72.3464));
        this._imgBackgroundMainItem.setTouchEnabled(false);

        ///// # _txtAmountMainItem
        this._txtAmountMainItem = new ck.Text();
        this._txtAmountMainItem.setName("_txtAmountMainItem");
        this._nodeMainItem.addChild(this._txtAmountMainItem);
        this._txtAmountMainItem.setCascadeOpacityEnabled(true);
        this._txtAmountMainItem.setCascadeColorEnabled(true);
        this._txtAmountMainItem.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtAmountMainItem.setPosition(40, 0);
        this._txtAmountMainItem.setTextColor(cc.color(255, 220, 73, 255));
        let _txtAmountMainItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmountMainItem);
        this._txtAmountMainItem.setTouchEnabled(false);
        this._txtAmountMainItem.ignoreContentAdaptWithSize(true);
        this._txtAmountMainItem.setFontName("fonts/GroBold.ttf");
        this._txtAmountMainItem.setDefaultFontSize(42);
        this._txtAmountMainItem.setString("10.000.000");
        this._txtAmountMainItem.setTextHorizontalAlignment(0);
        this._txtAmountMainItem.setTextVerticalAlignment(0);
        this._txtAmountMainItem.enableOutline(cc.color(72, 9, 5, 255), 2);
        this._txtAmountMainItem.enableShadow(cc.color(128, 35, 0, 255), cc.size(0, -5), 0);

        ///// # _imgIconMainItem
        this._imgIconMainItem = new ccui.ImageView();
        this._imgIconMainItem.setName("_imgIconMainItem");
        this._txtAmountMainItem.addChild(this._imgIconMainItem);
        this._imgIconMainItem.setCascadeOpacityEnabled(true);
        this._imgIconMainItem.setCascadeColorEnabled(true);
        this._imgIconMainItem.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconMainItem, 0, 0.5);
        let _imgIconMainItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconMainItem);
        _imgIconMainItemLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconMainItemLayoutComponent.setPositionPercentY(0.5);
        this._imgIconMainItem.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIconMainItem.setUnifySizeEnabled(false);
        this._imgIconMainItem.ignoreContentAdaptWithSize(false);
        this._imgIconMainItem.setContentSize(cc.size(64, 64));
        this._imgIconMainItem.setTouchEnabled(false);

        ///// # _gridItems
        this._gridItems = new ck.GridViewVertical();
        this._gridItems.setName("_gridItems");
        this._layoutItems.addChild(this._gridItems);
        this._gridItems.setCascadeOpacityEnabled(true);
        this._gridItems.setCascadeColorEnabled(true);
        this._gridItems.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridItems, 0.6238, 0.3648);
        let _gridItemsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridItems);
        _gridItemsLayoutComponent.setPositionPercentXEnabled(true);
        _gridItemsLayoutComponent.setPositionPercentX(0.6238);
        _gridItemsLayoutComponent.setPositionPercentYEnabled(true);
        _gridItemsLayoutComponent.setPositionPercentY(0.3648);
        _gridItemsLayoutComponent.setPercentWidthEnabled(true);
        _gridItemsLayoutComponent.setPercentWidth(0.7523);

        ///// # _layoutBonusItems
        this._layoutBonusItems = new ccui.Layout();
        this._layoutBonusItems.setName("_layoutBonusItems");
        this._root.addChild(this._layoutBonusItems);
        this._layoutBonusItems.setCascadeOpacityEnabled(true);
        this._layoutBonusItems.setCascadeColorEnabled(true);
        this._layoutBonusItems.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutBonusItems, 0.6968, 0.3663);
        let _layoutBonusItemsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBonusItems);
        _layoutBonusItemsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBonusItemsLayoutComponent.setPositionPercentX(0.6968);
        _layoutBonusItemsLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBonusItemsLayoutComponent.setPositionPercentY(0.3663);
        this._layoutBonusItems.setTouchEnabled(true);
        this._layoutBonusItems.setUnifySizeEnabled(false);
        this._layoutBonusItems.ignoreContentAdaptWithSize(false);
        this._layoutBonusItems.setContentSize(cc.size(365.5957, 120));

        ///// # _imgBonusItems
        this._imgBonusItems = new ccui.ImageView();
        this._imgBonusItems.setName("_imgBonusItems");
        this._layoutBonusItems.addChild(this._imgBonusItems);
        this._imgBonusItems.setCascadeOpacityEnabled(true);
        this._imgBonusItems.setCascadeColorEnabled(true);
        this._imgBonusItems.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBonusItems, 0.5, 0.5);
        let _imgBonusItemsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBonusItems);
        _imgBonusItemsLayoutComponent.setPositionPercentXEnabled(true);
        _imgBonusItemsLayoutComponent.setPositionPercentX(0.5);
        _imgBonusItemsLayoutComponent.setPositionPercentYEnabled(true);
        _imgBonusItemsLayoutComponent.setPositionPercentY(0.5);
        _imgBonusItemsLayoutComponent.setPercentWidthEnabled(true);
        _imgBonusItemsLayoutComponent.setPercentWidth(1);
        _imgBonusItemsLayoutComponent.setPercentHeightEnabled(true);
        _imgBonusItemsLayoutComponent.setPercentHeight(1);
        this._imgBonusItems.loadTexture("offers/BackgroundItems.png", 1);
        this._imgBonusItems.setUnifySizeEnabled(false);
        this._imgBonusItems.ignoreContentAdaptWithSize(false);
        this._imgBonusItems.setScale9Enabled(true);
        this._imgBonusItems.setCapInsets(cc.rect(15, 11, 16, 13));
        ck.UIUtils.setSizePercent(this._imgBonusItems, 1, 1);
        this._imgBonusItems.setTouchEnabled(false);

        ///// # _gridBonusItems
        this._gridBonusItems = new ck.GridViewVertical();
        this._gridBonusItems.setName("_gridBonusItems");
        this._layoutBonusItems.addChild(this._gridBonusItems);
        this._gridBonusItems.setCascadeOpacityEnabled(true);
        this._gridBonusItems.setCascadeColorEnabled(true);
        this._gridBonusItems.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridBonusItems, 0.5, 0.5);
        let _gridBonusItemsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridBonusItems);
        _gridBonusItemsLayoutComponent.setPositionPercentXEnabled(true);
        _gridBonusItemsLayoutComponent.setPositionPercentX(0.5);
        _gridBonusItemsLayoutComponent.setPositionPercentYEnabled(true);
        _gridBonusItemsLayoutComponent.setPositionPercentY(0.5);
        _gridBonusItemsLayoutComponent.setPercentWidthEnabled(true);
        _gridBonusItemsLayoutComponent.setPercentWidth(1);
        _gridBonusItemsLayoutComponent.setPercentHeightEnabled(true);
        _gridBonusItemsLayoutComponent.setPercentHeight(1);

        ///// # _imgPlus
        this._imgPlus = new ccui.ImageView();
        this._imgPlus.setName("_imgPlus");
        this._root.addChild(this._imgPlus);
        this._imgPlus.setCascadeOpacityEnabled(true);
        this._imgPlus.setCascadeColorEnabled(true);
        this._imgPlus.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPlus, 0.7086, 0.3638);
        let _imgPlusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPlus);
        _imgPlusLayoutComponent.setPositionPercentXEnabled(true);
        _imgPlusLayoutComponent.setPositionPercentX(0.7086);
        _imgPlusLayoutComponent.setPositionPercentYEnabled(true);
        _imgPlusLayoutComponent.setPositionPercentY(0.3638);
        this._imgPlus.loadTexture("basics/other/Plus.png", 1);
        this._imgPlus.setUnifySizeEnabled(false);
        this._imgPlus.ignoreContentAdaptWithSize(false);
        this._imgPlus.setScale9Enabled(true);
        this._imgPlus.setCapInsets(cc.rect(15, 11, 33, 41));
        this._imgPlus.setContentSize(cc.size(63, 63));
        this._imgPlus.setTouchEnabled(false);

        ///// # _txtTimeLeft
        this._txtTimeLeft = new ck.Text();
        this._txtTimeLeft.setName("_txtTimeLeft");
        this._root.addChild(this._txtTimeLeft);
        this._txtTimeLeft.setCascadeOpacityEnabled(true);
        this._txtTimeLeft.setCascadeColorEnabled(true);
        this._txtTimeLeft.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTimeLeft, 0.9677, 0.7702);
        this._txtTimeLeft.setRotationY(-0.0035);
        let _txtTimeLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTimeLeft);
        _txtTimeLeftLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentX(0.9677);
        this._txtTimeLeft.setTouchEnabled(false);
        this._txtTimeLeft.ignoreContentAdaptWithSize(true);
        this._txtTimeLeft.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTimeLeft.setDefaultFontSize(32);
        this._txtTimeLeft.setTextHorizontalAlignment(1);
        this._txtTimeLeft.setTextVerticalAlignment(1);
        this._txtTimeLeft.enableOutline(cc.color(16, 27, 68, 255), 1);
        this._txtTimeLeft.enableShadow(cc.color(16, 27, 68, 255), cc.size(0, -1), 0);

        ///// # _txtHint01
        this._txtHint01 = new ck.CustomRichTextExtend(cc.size(640, 73));
        this._txtHint01.setName("_txtHint01");
        this._root.addChild(this._txtHint01);
        this._txtHint01.setCascadeOpacityEnabled(true);
        this._txtHint01.setCascadeColorEnabled(true);
        this._txtHint01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHint01, 0.5, 0.1861);
        let _txtHint01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHint01);
        _txtHint01LayoutComponent.setPositionPercentXEnabled(true);
        _txtHint01LayoutComponent.setPositionPercentX(0.5);
        _txtHint01LayoutComponent.setPercentWidthEnabled(true);
        _txtHint01LayoutComponent.setPercentWidth(1);
        this._txtHint01.setTouchEnabled(false);
        this._txtHint01.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtHint01.setDefaultSize(30);
        this._txtHint01.setDefaultAlignHorizontal(2);
        this._txtHint01.setDefaultAlignVertical(5);
        this._txtHint01.setString("Offer Hint 01");

        ///// # _txtHint02
        this._txtHint02 = new ck.Text();
        this._txtHint02.setName("_txtHint02");
        this._root.addChild(this._txtHint02);
        this._txtHint02.setCascadeOpacityEnabled(true);
        this._txtHint02.setCascadeColorEnabled(true);
        this._txtHint02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHint02, 0.5, -0.0465);
        let _txtHint02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHint02);
        _txtHint02LayoutComponent.setPositionPercentXEnabled(true);
        _txtHint02LayoutComponent.setPositionPercentX(0.5);
        this._txtHint02.setTouchEnabled(false);
        this._txtHint02.setUnifySizeEnabled(false);
        this._txtHint02.ignoreContentAdaptWithSize(false);
        this._txtHint02.setContentSize(cc.size(544.5195, 35));
        this._txtHint02.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHint02.setDefaultFontSize(27);
        this._txtHint02.setString(gm.localize.getText("TXT_OFFER_HINT_02"));
        this._txtHint02.setTextHorizontalAlignment(1);
        this._txtHint02.setTextVerticalAlignment(1);
        this._txtHint02.enableOutline(cc.color(20, 18, 101, 255), 1);
        this._txtHint02.enableShadow(cc.color(20, 18, 101, 255), cc.size(0, -1), 0);
        this._txtHint02.autoFitSingleLine();

        ///// # _imgBuy
        this._imgBuy = new ccui.ImageView();
        this._imgBuy.setName("_imgBuy");
        this._root.addChild(this._imgBuy);
        this._imgBuy.setCascadeOpacityEnabled(true);
        this._imgBuy.setCascadeColorEnabled(true);
        this._imgBuy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBuy, 0.5, 0.0902);
        let _imgBuyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBuy);
        _imgBuyLayoutComponent.setPositionPercentXEnabled(true);
        _imgBuyLayoutComponent.setPositionPercentX(0.5);
        _imgBuyLayoutComponent.setPositionPercentYEnabled(true);
        _imgBuyLayoutComponent.setPositionPercentY(0.0902);
        this._imgBuy.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgBuy.setUnifySizeEnabled(false);
        this._imgBuy.ignoreContentAdaptWithSize(false);
        this._imgBuy.setContentSize(cc.size(250, 100));
        this._imgBuy.setTouchEnabled(false);

        ///// # _txtPrice
        this._txtPrice = new ck.Text();
        this._txtPrice.setName("_txtPrice");
        this._imgBuy.addChild(this._txtPrice);
        this._txtPrice.setCascadeOpacityEnabled(true);
        this._txtPrice.setCascadeColorEnabled(true);
        this._txtPrice.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPrice, 0.5, 0.54);
        let _txtPriceLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPrice);
        _txtPriceLayoutComponent.setPositionPercentXEnabled(true);
        _txtPriceLayoutComponent.setPositionPercentX(0.5);
        _txtPriceLayoutComponent.setPositionPercentYEnabled(true);
        _txtPriceLayoutComponent.setPositionPercentY(0.54);
        this._txtPrice.setTouchEnabled(false);
        this._txtPrice.setUnifySizeEnabled(false);
        this._txtPrice.ignoreContentAdaptWithSize(false);
        this._txtPrice.setContentSize(cc.size(222.7904, 69));
        this._txtPrice.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtPrice.setDefaultFontSize(55);
        this._txtPrice.setTextHorizontalAlignment(1);
        this._txtPrice.setTextVerticalAlignment(1);
        this._txtPrice.enableOutline(cc.color(22, 92, 56, 255), 2);
        this._txtPrice.enableShadow(cc.color(22, 92, 56, 255), cc.size(0, -3), 0);
        this._txtPrice.autoFitSingleLine();

        ///// # _btnChannels
        this._btnChannels = new ccui.Button();
        this._btnChannels.setName("_btnChannels");
        this._root.addChild(this._btnChannels);
        this._btnChannels.setCascadeOpacityEnabled(true);
        this._btnChannels.setCascadeColorEnabled(true);
        this._btnChannels.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnChannels, 0.5, 0);
        let _btnChannelsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnChannels);
        _btnChannelsLayoutComponent.setPositionPercentXEnabled(true);
        _btnChannelsLayoutComponent.setPositionPercentX(0.5);
        _btnChannelsLayoutComponent.setPositionPercentYEnabled(true);
        _btnChannelsLayoutComponent.setPositionPercentY(0);
        this._btnChannels.loadTextureDisabled("buttons/rectangles/Green_02.png", 1);
        this._btnChannels.loadTexturePressed("buttons/rectangles/Green_02.png", 1);
        this._btnChannels.loadTextureNormal("buttons/rectangles/Green_02.png", 1);
        this._btnChannels.setUnifySizeEnabled(false);
        this._btnChannels.ignoreContentAdaptWithSize(false);
        this._btnChannels.setScale9Enabled(true);
        this._btnChannels.setCapInsets(cc.rect(56, 0, 12, 67));
        this._btnChannels.setContentSize(cc.size(159, 67));
        this._btnChannels.setTouchEnabled(true);

        ///// # _imgNext
        this._imgNext = new ccui.ImageView();
        this._imgNext.setName("_imgNext");
        this._btnChannels.addChild(this._imgNext);
        this._imgNext.setCascadeOpacityEnabled(true);
        this._imgNext.setCascadeColorEnabled(true);
        this._imgNext.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgNext, 0.9114, 0.5549);
        let _imgNextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNext);
        _imgNextLayoutComponent.setPositionPercentXEnabled(true);
        _imgNextLayoutComponent.setPositionPercentX(0.9114);
        _imgNextLayoutComponent.setPositionPercentYEnabled(true);
        _imgNextLayoutComponent.setPositionPercentY(0.5549);
        this._imgNext.loadTexture("channel_next.png", 1);
        this._imgNext.setUnifySizeEnabled(false);
        this._imgNext.ignoreContentAdaptWithSize(false);
        this._imgNext.setContentSize(cc.size(13, 17));
        this._imgNext.setTouchEnabled(false);

        ///// # _txtName
        this._txtName = new ck.Text();
        this._txtName.setName("_txtName");
        this._btnChannels.addChild(this._txtName);
        this._txtName.setCascadeOpacityEnabled(true);
        this._txtName.setCascadeColorEnabled(true);
        this._txtName.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName, 0.5843, 0.573);
        let _txtNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName);
        _txtNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameLayoutComponent.setPositionPercentX(0.5843);
        _txtNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameLayoutComponent.setPositionPercentY(0.573);
        this._txtName.setTouchEnabled(false);
        this._txtName.setUnifySizeEnabled(false);
        this._txtName.ignoreContentAdaptWithSize(false);
        this._txtName.setContentSize(cc.size(87, 32));
        this._txtName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName.setDefaultFontSize(22);
        this._txtName.setString(gm.localize.getText("TXT_VODAFONE"));
        this._txtName.setTextHorizontalAlignment(1);
        this._txtName.setTextVerticalAlignment(1);
        this._txtName.enableOutline(cc.color(31, 100, 124, 255), 1);

        ///// # _imgChannels
        this._imgChannels = new ccui.ImageView();
        this._imgChannels.setName("_imgChannels");
        this._btnChannels.addChild(this._imgChannels);
        this._imgChannels.setCascadeOpacityEnabled(true);
        this._imgChannels.setCascadeColorEnabled(true);
        this._imgChannels.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgChannels, 0.16, 0.575);
        this._imgChannels.setScale(0.6, 0.6);
        let _imgChannelsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgChannels);
        _imgChannelsLayoutComponent.setPositionPercentXEnabled(true);
        _imgChannelsLayoutComponent.setPositionPercentX(0.16);
        _imgChannelsLayoutComponent.setPositionPercentYEnabled(true);
        _imgChannelsLayoutComponent.setPositionPercentY(0.575);
        this._imgChannels.loadTexture("event15_tlkom.png", 1);
        this._imgChannels.setUnifySizeEnabled(false);
        this._imgChannels.ignoreContentAdaptWithSize(false);
        this._imgChannels.setContentSize(cc.size(78, 69));
        this._imgChannels.setTouchEnabled(false);

    },



});

/**
 * Create TulipFestivalOfferPopup
 * @returns {_ccs.TulipFestivalOfferPopup}
 */
_ccs.TulipFestivalOfferPopup.create = function () {
    return new _ccs.TulipFestivalOfferPopup();
};
