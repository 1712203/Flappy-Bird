/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.CardCollectionJokerCardButton
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.CardCollectionJokerCardButton = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBuyBtn: null,
    /** @type {ck.Text} */
    _txtBuy: null,
    /** @type {ccui.Layout} */
    _layoutPrice: null,
    /** @type {ck.Text} */
    _txtPrice: null,
    /** @type {ccui.ImageView} */
    _imgGem: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ccui.Layout} */
    _layoutTips: null,
    /** @type {ccui.ImageView} */
    _imgBgrTips: null,
    /** @type {ccui.ListView} */
    _listViewTips: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtTips: null,
    /** @type {ccui.ImageView} */
    _imgAmount: null,
    /** @type {ck.Text} */
    _txtAmount: null,


    /**
     * _ccs.CardCollectionJokerCardButton constructor
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
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(89, 92));

        ///// # _imgBuyBtn
        this._imgBuyBtn = new ccui.ImageView();
        this._imgBuyBtn.setName("_imgBuyBtn");
        this._layoutRoot.addChild(this._imgBuyBtn);
        this._imgBuyBtn.setCascadeOpacityEnabled(true);
        this._imgBuyBtn.setCascadeColorEnabled(true);
        this._imgBuyBtn.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBuyBtn, 1.5364, 0.5003);
        let _imgBuyBtnLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBuyBtn);
        this._imgBuyBtn.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgBuyBtn.setUnifySizeEnabled(false);
        this._imgBuyBtn.ignoreContentAdaptWithSize(false);
        this._imgBuyBtn.setContentSize(cc.size(108.62, 72.26));
        this._imgBuyBtn.setTouchEnabled(false);

        ///// # _txtBuy
        this._txtBuy = new ck.Text();
        this._txtBuy.setName("_txtBuy");
        this._imgBuyBtn.addChild(this._txtBuy);
        this._txtBuy.setCascadeOpacityEnabled(true);
        this._txtBuy.setCascadeColorEnabled(true);
        this._txtBuy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBuy, 0.4837, 0.723);
        this._txtBuy.setTextColor(cc.color(164, 49, 41, 255));
        let _txtBuyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBuy);
        _txtBuyLayoutComponent.setPositionPercentXEnabled(true);
        _txtBuyLayoutComponent.setPositionPercentX(0.4837);
        _txtBuyLayoutComponent.setPositionPercentYEnabled(true);
        _txtBuyLayoutComponent.setPositionPercentY(0.723);
        this._txtBuy.setTouchEnabled(false);
        this._txtBuy.ignoreContentAdaptWithSize(true);
        this._txtBuy.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBuy.setDefaultFontSize(25);
        this._txtBuy.setString(gm.localize.getText("TXT_BUY"));
        this._txtBuy.setTextHorizontalAlignment(0);
        this._txtBuy.setTextVerticalAlignment(0);

        ///// # _layoutPrice
        this._layoutPrice = new ccui.Layout();
        this._layoutPrice.setName("_layoutPrice");
        this._imgBuyBtn.addChild(this._layoutPrice);
        this._layoutPrice.setCascadeOpacityEnabled(true);
        this._layoutPrice.setCascadeColorEnabled(true);
        this._layoutPrice.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutPrice, 0.5, 0.3489);
        let _layoutPriceLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPrice);
        _layoutPriceLayoutComponent.setPositionPercentXEnabled(true);
        _layoutPriceLayoutComponent.setPositionPercentX(0.5);
        _layoutPriceLayoutComponent.setPositionPercentYEnabled(true);
        _layoutPriceLayoutComponent.setPositionPercentY(0.3489);
        _layoutPriceLayoutComponent.setPercentWidthEnabled(true);
        _layoutPriceLayoutComponent.setPercentWidth(1);
        this._layoutPrice.setTouchEnabled(false);
        this._layoutPrice.setUnifySizeEnabled(false);
        this._layoutPrice.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutPrice, 1);
        this._layoutPrice.setContentSize(cc.size(this._layoutPrice.width, 35.6944));

        ///// # _txtPrice
        this._txtPrice = new ck.Text();
        this._txtPrice.setName("_txtPrice");
        this._layoutPrice.addChild(this._txtPrice);
        this._txtPrice.setCascadeOpacityEnabled(true);
        this._txtPrice.setCascadeColorEnabled(true);
        this._txtPrice.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPrice, 0.3838, 0.5);
        let _txtPriceLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPrice);
        _txtPriceLayoutComponent.setPositionPercentXEnabled(true);
        _txtPriceLayoutComponent.setPositionPercentX(0.3838);
        _txtPriceLayoutComponent.setPositionPercentYEnabled(true);
        _txtPriceLayoutComponent.setPositionPercentY(0.5);
        this._txtPrice.setTouchEnabled(false);
        this._txtPrice.ignoreContentAdaptWithSize(true);
        this._txtPrice.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtPrice.setDefaultFontSize(25);
        this._txtPrice.setString("50");
        this._txtPrice.setTextHorizontalAlignment(0);
        this._txtPrice.setTextVerticalAlignment(0);
        this._txtPrice.enableOutline(cc.color(164, 49, 41, 255), 2);

        ///// # _imgGem
        this._imgGem = new ccui.ImageView();
        this._imgGem.setName("_imgGem");
        this._layoutPrice.addChild(this._imgGem);
        this._imgGem.setCascadeOpacityEnabled(true);
        this._imgGem.setCascadeColorEnabled(true);
        this._imgGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGem, 0.675, 0.5);
        this._imgGem.setScale(0.5, 0.5);
        let _imgGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGem);
        _imgGemLayoutComponent.setPositionPercentXEnabled(true);
        _imgGemLayoutComponent.setPositionPercentX(0.675);
        _imgGemLayoutComponent.setPositionPercentYEnabled(true);
        _imgGemLayoutComponent.setPositionPercentY(0.5);
        this._imgGem.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgGem.setUnifySizeEnabled(false);
        this._imgGem.ignoreContentAdaptWithSize(false);
        this._imgGem.setContentSize(cc.size(64, 64));
        this._imgGem.setTouchEnabled(false);

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._layoutRoot.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.5);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.5);
        this._imgIcon.loadTexture("card-collection/joker-card/Icon.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(89, 92));
        this._imgIcon.setTouchEnabled(false);

        ///// # _layoutTips
        this._layoutTips = new ccui.Layout();
        this._layoutTips.setName("_layoutTips");
        this._imgIcon.addChild(this._layoutTips);
        this._layoutTips.setCascadeOpacityEnabled(true);
        this._layoutTips.setCascadeColorEnabled(true);
        this._layoutTips.setAnchorPoint(cc.p(0.1627, 0));
        ck.UIUtils.setPositionPercent(this._layoutTips, 0.65, 1.01);
        let _layoutTipsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTips);
        _layoutTipsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTipsLayoutComponent.setPositionPercentX(0.65);
        _layoutTipsLayoutComponent.setPositionPercentYEnabled(true);
        _layoutTipsLayoutComponent.setPositionPercentY(1.01);
        this._layoutTips.setTouchEnabled(true);
        this._layoutTips.setUnifySizeEnabled(false);
        this._layoutTips.ignoreContentAdaptWithSize(false);
        this._layoutTips.setContentSize(cc.size(325.16, 163.6904));

        ///// # _imgBgrTips
        this._imgBgrTips = new ccui.ImageView();
        this._imgBgrTips.setName("_imgBgrTips");
        this._layoutTips.addChild(this._imgBgrTips);
        this._imgBgrTips.setCascadeOpacityEnabled(true);
        this._imgBgrTips.setCascadeColorEnabled(true);
        this._imgBgrTips.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgrTips, 0.5, 0.5);
        this._imgBgrTips.setFlippedY(true);
        let _imgBgrTipsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrTips);
        _imgBgrTipsLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrTipsLayoutComponent.setPositionPercentX(0.5);
        _imgBgrTipsLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrTipsLayoutComponent.setPositionPercentY(0.5);
        _imgBgrTipsLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrTipsLayoutComponent.setPercentWidth(1);
        _imgBgrTipsLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrTipsLayoutComponent.setPercentHeight(1);
        this._imgBgrTips.loadTexture("basics/other/Bubble.png", 1);
        this._imgBgrTips.setUnifySizeEnabled(false);
        this._imgBgrTips.ignoreContentAdaptWithSize(false);
        this._imgBgrTips.setScale9Enabled(true);
        this._imgBgrTips.setCapInsets(cc.rect(75, 24, 6, 2));
        ck.UIUtils.setSizePercent(this._imgBgrTips, 1, 1);
        this._imgBgrTips.setTouchEnabled(false);
        this._imgBgrTips.setFlippedY(true);

        ///// # _listViewTips
        this._listViewTips = new ccui.ListView();
        this._listViewTips.setName("_listViewTips");
        this._layoutTips.addChild(this._listViewTips);
        this._listViewTips.setCascadeOpacityEnabled(true);
        this._listViewTips.setCascadeColorEnabled(true);
        this._listViewTips.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._listViewTips, 0.5, 0.5445);
        let _listViewTipsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._listViewTips);
        _listViewTipsLayoutComponent.setPositionPercentXEnabled(true);
        _listViewTipsLayoutComponent.setPositionPercentX(0.5);
        _listViewTipsLayoutComponent.setPositionPercentYEnabled(true);
        _listViewTipsLayoutComponent.setPositionPercentY(0.5445);
        this._listViewTips.setTouchEnabled(true);
        this._listViewTips.setUnifySizeEnabled(false);
        this._listViewTips.ignoreContentAdaptWithSize(false);
        this._listViewTips.setContentSize(cc.size(310, 135));
        this._listViewTips.setDirection(ccui.ScrollView.DIR_VERTICAL);
        this._listViewTips.setBounceEnabled(true);

        ///// # _txtTips
        this._txtTips = new ck.CustomRichTextExtend(cc.size(310, 135));
        this._txtTips.setName("_txtTips");
        this._listViewTips.pushBackCustomItem(this._txtTips);
        this._txtTips.setCascadeOpacityEnabled(true);
        this._txtTips.setCascadeColorEnabled(true);
        this._txtTips.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._txtTips, 0.5, 1);
        let _txtTipsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTips);
        this._txtTips.setTouchEnabled(false);
        this._txtTips.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtTips.setDefaultSize(22);
        this._txtTips.setDefaultAlignHorizontal(0);
        this._txtTips.setDefaultAlignVertical(4);

        ///// # _imgAmount
        this._imgAmount = new ccui.ImageView();
        this._imgAmount.setName("_imgAmount");
        this._imgIcon.addChild(this._imgAmount);
        this._imgAmount.setCascadeOpacityEnabled(true);
        this._imgAmount.setCascadeColorEnabled(true);
        this._imgAmount.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._imgAmount, 1.2, -0.05);
        let _imgAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgAmount);
        _imgAmountLayoutComponent.setPositionPercentXEnabled(true);
        _imgAmountLayoutComponent.setPositionPercentX(1.2);
        _imgAmountLayoutComponent.setPositionPercentYEnabled(true);
        _imgAmountLayoutComponent.setPositionPercentY(-0.05);
        this._imgAmount.loadTexture("basics/other/NumberBox.png", 1);
        this._imgAmount.setUnifySizeEnabled(false);
        this._imgAmount.ignoreContentAdaptWithSize(false);
        this._imgAmount.setContentSize(cc.size(40, 40));
        this._imgAmount.setTouchEnabled(false);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._imgAmount.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.5, 0.5);
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.5);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.5);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(true);
        this._txtAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmount.setDefaultFontSize(24);
        this._txtAmount.setTextHorizontalAlignment(1);
        this._txtAmount.setTextVerticalAlignment(1);
        this._txtAmount.enableOutline(cc.color(0, 74, 0, 255), 2);

    },



});

/**
 * Create CardCollectionJokerCardButton
 * @returns {_ccs.CardCollectionJokerCardButton}
 */
_ccs.CardCollectionJokerCardButton.create = function () {
    return new _ccs.CardCollectionJokerCardButton();
};
