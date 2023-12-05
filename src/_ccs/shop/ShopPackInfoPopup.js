/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ShopPackInfoPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ShopPackInfoPopup = ccui.Widget.extend({

    /** @type {ccui.ImageView} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgFont: null,
    /** @type {ck.Text} */
    _txtHeader: null,
    /** @type {ccui.ImageView} */
    _imgShadow: null,
    /** @type {ccui.ImageView} */
    _imgItem: null,
    /** @type {ck.Text} */
    _txtDuration: null,
    /** @type {ck.Text} */
    _txtDescription: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtLimit: null,
    /** @type {ccui.ImageView} */
    _imgMinus: null,
    /** @type {ccui.ImageView} */
    _imgPlus: null,
    /** @type {ck.EditBox} */
    _editBoxAmount: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxBackground: null,
    /** @type {ccui.ImageView} */
    _imgEditBoxBackground: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxText: null,
    /** @type {ck.Text} */
    _txtEditBoxTextDisplay: null,
    /** @type {ccui.ImageView} */
    _imgBuy: null,
    /** @type {ck.Text} */
    _txtPrice: null,
    /** @type {ccui.ImageView} */
    _imgGem: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,


    /**
     * _ccs.ShopPackInfoPopup constructor
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
        this._root = new ccui.ImageView();
        this._root.setName("_root");
        this.addChild(this._root);
        this._root.setCascadeOpacityEnabled(true);
        this._root.setCascadeColorEnabled(true);
        this._root.setAnchorPoint(cc.p(0.5, 0.5));
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.loadTexture("basics/popup/Back.png", 1);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setScale9Enabled(true);
        this._root.setCapInsets(cc.rect(69, 57, 72, 61));
        this._root.setContentSize(cc.size(533.3687, 577.8606));
        this._root.setTouchEnabled(true);

        ///// # _imgFont
        this._imgFont = new ccui.ImageView();
        this._imgFont.setName("_imgFont");
        this._root.addChild(this._imgFont);
        this._imgFont.setCascadeOpacityEnabled(true);
        this._imgFont.setCascadeColorEnabled(true);
        this._imgFont.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgFont, 0.5006, 0.5);
        let _imgFontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFont);
        _imgFontLayoutComponent.setPositionPercentXEnabled(true);
        _imgFontLayoutComponent.setPositionPercentX(0.5006);
        _imgFontLayoutComponent.setPositionPercentYEnabled(true);
        _imgFontLayoutComponent.setPositionPercentY(0.5);
        _imgFontLayoutComponent.setPercentWidthEnabled(true);
        _imgFontLayoutComponent.setPercentWidth(0.9353);
        _imgFontLayoutComponent.setPercentHeightEnabled(true);
        _imgFontLayoutComponent.setPercentHeight(0.9353);
        this._imgFont.loadTexture("basics/popup/Font.png", 1);
        this._imgFont.setUnifySizeEnabled(false);
        this._imgFont.ignoreContentAdaptWithSize(false);
        this._imgFont.setScale9Enabled(true);
        this._imgFont.setCapInsets(cc.rect(52, 48, 49, 49));
        ck.UIUtils.setSizePercent(this._imgFont, 0.9353, 0.9353);
        this._imgFont.setTouchEnabled(false);

        ///// # _txtHeader
        this._txtHeader = new ck.Text();
        this._txtHeader.setName("_txtHeader");
        this._root.addChild(this._txtHeader);
        this._txtHeader.setCascadeOpacityEnabled(true);
        this._txtHeader.setCascadeColorEnabled(true);
        this._txtHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHeader, 0.5, 0.8806);
        this._txtHeader.setTextColor(cc.color(135, 110, 80, 255));
        let _txtHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHeader);
        _txtHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentX(0.5);
        _txtHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentY(0.8806);
        this._txtHeader.setTouchEnabled(false);
        this._txtHeader.ignoreContentAdaptWithSize(true);
        this._txtHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHeader.setDefaultFontSize(45);
        this._txtHeader.setTextHorizontalAlignment(1);
        this._txtHeader.setTextVerticalAlignment(1);

        ///// # _imgShadow
        this._imgShadow = new ccui.ImageView();
        this._imgShadow.setName("_imgShadow");
        this._root.addChild(this._imgShadow);
        this._imgShadow.setCascadeOpacityEnabled(true);
        this._imgShadow.setCascadeColorEnabled(true);
        this._imgShadow.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgShadow, 0.5, 0.5678);
        this._imgShadow.setColor(cc.color(0, 0, 0, 255));
        let _imgShadowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgShadow);
        _imgShadowLayoutComponent.setPositionPercentXEnabled(true);
        _imgShadowLayoutComponent.setPositionPercentX(0.5);
        _imgShadowLayoutComponent.setPositionPercentYEnabled(true);
        _imgShadowLayoutComponent.setPositionPercentY(0.5678);
        this._imgShadow.loadTexture("basics/effects/Shadow.png", 1);
        this._imgShadow.setUnifySizeEnabled(false);
        this._imgShadow.ignoreContentAdaptWithSize(false);
        this._imgShadow.setContentSize(cc.size(98, 20));
        this._imgShadow.setTouchEnabled(true);

        ///// # _imgItem
        this._imgItem = new ccui.ImageView();
        this._imgItem.setName("_imgItem");
        this._root.addChild(this._imgItem);
        this._imgItem.setCascadeOpacityEnabled(true);
        this._imgItem.setCascadeColorEnabled(true);
        this._imgItem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgItem, 0.5, 0.6748);
        let _imgItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgItem);
        _imgItemLayoutComponent.setPositionPercentXEnabled(true);
        _imgItemLayoutComponent.setPositionPercentX(0.5);
        _imgItemLayoutComponent.setPositionPercentYEnabled(true);
        _imgItemLayoutComponent.setPositionPercentY(0.6748);
        this._imgItem.loadTexture("icons/color/items/Swapper.png", 1);
        this._imgItem.setUnifySizeEnabled(false);
        this._imgItem.ignoreContentAdaptWithSize(false);
        this._imgItem.setContentSize(cc.size(128, 128));
        this._imgItem.setTouchEnabled(false);

        ///// # _txtDuration
        this._txtDuration = new ck.Text();
        this._txtDuration.setName("_txtDuration");
        this._imgItem.addChild(this._txtDuration);
        this._txtDuration.setCascadeOpacityEnabled(true);
        this._txtDuration.setCascadeColorEnabled(true);
        this._txtDuration.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDuration, 0.509, 0.1244);
        let _txtDurationLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDuration);
        _txtDurationLayoutComponent.setPositionPercentXEnabled(true);
        _txtDurationLayoutComponent.setPositionPercentX(0.509);
        _txtDurationLayoutComponent.setPositionPercentYEnabled(true);
        _txtDurationLayoutComponent.setPositionPercentY(0.1244);
        this._txtDuration.setTouchEnabled(false);
        this._txtDuration.ignoreContentAdaptWithSize(true);
        this._txtDuration.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtDuration.setDefaultFontSize(30);
        this._txtDuration.setTextHorizontalAlignment(1);
        this._txtDuration.setTextVerticalAlignment(1);
        this._txtDuration.enableOutline(cc.color(9, 76, 135, 255), 3);

        ///// # _txtDescription
        this._txtDescription = new ck.Text();
        this._txtDescription.setName("_txtDescription");
        this._root.addChild(this._txtDescription);
        this._txtDescription.setCascadeOpacityEnabled(true);
        this._txtDescription.setCascadeColorEnabled(true);
        this._txtDescription.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDescription, 0.5, 0.4582);
        this._txtDescription.setTextColor(cc.color(135, 110, 80, 255));
        let _txtDescriptionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDescription);
        _txtDescriptionLayoutComponent.setPositionPercentXEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentX(0.5);
        _txtDescriptionLayoutComponent.setPositionPercentYEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentY(0.4582);
        this._txtDescription.setTouchEnabled(false);
        this._txtDescription.setUnifySizeEnabled(false);
        this._txtDescription.ignoreContentAdaptWithSize(false);
        this._txtDescription.setContentSize(cc.size(433.056, 94));
        this._txtDescription.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDescription.setDefaultFontSize(30);
        this._txtDescription.setTextHorizontalAlignment(1);
        this._txtDescription.setTextVerticalAlignment(1);

        ///// # _txtLimit
        this._txtLimit = new ck.CustomRichTextExtend(cc.size(480.4265, 38.3246));
        this._txtLimit.setName("_txtLimit");
        this._root.addChild(this._txtLimit);
        this._txtLimit.setCascadeOpacityEnabled(true);
        this._txtLimit.setCascadeColorEnabled(true);
        this._txtLimit.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLimit, 0.5, 0.41);
        this._txtLimit.setDefaultColor(cc.color(135, 110, 80, 255));
        let _txtLimitLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLimit);
        _txtLimitLayoutComponent.setPositionPercentXEnabled(true);
        _txtLimitLayoutComponent.setPositionPercentX(0.5);
        _txtLimitLayoutComponent.setPositionPercentYEnabled(true);
        _txtLimitLayoutComponent.setPositionPercentY(0.41);
        this._txtLimit.setTouchEnabled(false);
        this._txtLimit.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtLimit.setDefaultSize(30);
        this._txtLimit.setDefaultAlignHorizontal(2);
        this._txtLimit.setDefaultAlignVertical(5);

        ///// # _imgMinus
        this._imgMinus = new ccui.ImageView();
        this._imgMinus.setName("_imgMinus");
        this._root.addChild(this._imgMinus);
        this._imgMinus.setCascadeOpacityEnabled(true);
        this._imgMinus.setCascadeColorEnabled(true);
        this._imgMinus.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgMinus, 0.25, 0.31);
        let _imgMinusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgMinus);
        _imgMinusLayoutComponent.setPositionPercentXEnabled(true);
        _imgMinusLayoutComponent.setPositionPercentX(0.25);
        _imgMinusLayoutComponent.setPositionPercentYEnabled(true);
        _imgMinusLayoutComponent.setPositionPercentY(0.31);
        this._imgMinus.loadTexture("buttons/rectangles/Minus.png", 1);
        this._imgMinus.setUnifySizeEnabled(false);
        this._imgMinus.ignoreContentAdaptWithSize(false);
        this._imgMinus.setContentSize(cc.size(62, 61));
        this._imgMinus.setTouchEnabled(true);

        ///// # _imgPlus
        this._imgPlus = new ccui.ImageView();
        this._imgPlus.setName("_imgPlus");
        this._root.addChild(this._imgPlus);
        this._imgPlus.setCascadeOpacityEnabled(true);
        this._imgPlus.setCascadeColorEnabled(true);
        this._imgPlus.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPlus, 0.75, 0.31);
        let _imgPlusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPlus);
        _imgPlusLayoutComponent.setPositionPercentXEnabled(true);
        _imgPlusLayoutComponent.setPositionPercentX(0.75);
        _imgPlusLayoutComponent.setPositionPercentYEnabled(true);
        _imgPlusLayoutComponent.setPositionPercentY(0.31);
        this._imgPlus.loadTexture("buttons/rectangles/Plus.png", 1);
        this._imgPlus.setUnifySizeEnabled(false);
        this._imgPlus.ignoreContentAdaptWithSize(false);
        this._imgPlus.setContentSize(cc.size(62, 61));
        this._imgPlus.setTouchEnabled(true);

        ///// # _editBoxAmount
        this._editBoxAmount = new ck.EditBox();
        this._editBoxAmount.setName("_editBoxAmount");
        this._root.addChild(this._editBoxAmount);
        this._editBoxAmount.setCascadeOpacityEnabled(true);
        this._editBoxAmount.setCascadeColorEnabled(true);
        this._editBoxAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxAmount, 0.5, 0.31);
        let _editBoxAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxAmount);
        _editBoxAmountLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxAmountLayoutComponent.setPositionPercentX(0.5);
        _editBoxAmountLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxAmountLayoutComponent.setPositionPercentY(0.31);
        this._editBoxAmount.setUnifySizeEnabled(false);
        this._editBoxAmount.ignoreContentAdaptWithSize(false);
        this._editBoxAmount.setContentSize(cc.size(190.64, 52.87));
        this._editBoxAmount.setTouchEnabled(false);

        ///// # _layoutEditBoxBackground
        this._layoutEditBoxBackground = new ccui.Layout();
        this._layoutEditBoxBackground.setName("_layoutEditBoxBackground");
        this._editBoxAmount.addChild(this._layoutEditBoxBackground);
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
        this._imgEditBoxBackground.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgEditBoxBackground.setUnifySizeEnabled(false);
        this._imgEditBoxBackground.ignoreContentAdaptWithSize(false);
        this._imgEditBoxBackground.setScale9Enabled(true);
        this._imgEditBoxBackground.setCapInsets(cc.rect(26, 21, 12, 22));
        ck.UIUtils.setSizePercent(this._imgEditBoxBackground, 1, 1);
        this._imgEditBoxBackground.setTouchEnabled(false);

        ///// # _layoutEditBoxText
        this._layoutEditBoxText = new ccui.Layout();
        this._layoutEditBoxText.setName("_layoutEditBoxText");
        this._editBoxAmount.addChild(this._layoutEditBoxText);
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
        let _txtEditBoxTextDisplayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtEditBoxTextDisplay);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentXEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentX(0.5);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentYEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentY(0.5);
        this._txtEditBoxTextDisplay.setTouchEnabled(false);
        this._txtEditBoxTextDisplay.ignoreContentAdaptWithSize(true);
        this._txtEditBoxTextDisplay.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtEditBoxTextDisplay.setDefaultFontSize(40);
        this._txtEditBoxTextDisplay.setTextHorizontalAlignment(1);
        this._txtEditBoxTextDisplay.setTextVerticalAlignment(1);

        ///// # _initEditBox for this._editBoxAmount;
        this._editBoxAmount._initEditBox();

        ///// # _imgBuy
        this._imgBuy = new ccui.ImageView();
        this._imgBuy.setName("_imgBuy");
        this._root.addChild(this._imgBuy);
        this._imgBuy.setCascadeOpacityEnabled(true);
        this._imgBuy.setCascadeColorEnabled(true);
        this._imgBuy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBuy, 0.5, 0.1429);
        let _imgBuyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBuy);
        _imgBuyLayoutComponent.setPositionPercentXEnabled(true);
        _imgBuyLayoutComponent.setPositionPercentX(0.5);
        _imgBuyLayoutComponent.setPositionPercentYEnabled(true);
        _imgBuyLayoutComponent.setPositionPercentY(0.1429);
        this._imgBuy.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgBuy.setUnifySizeEnabled(false);
        this._imgBuy.ignoreContentAdaptWithSize(false);
        this._imgBuy.setContentSize(cc.size(205.99, 81));
        this._imgBuy.setTouchEnabled(true);

        ///// # _txtPrice
        this._txtPrice = new ck.Text();
        this._txtPrice.setName("_txtPrice");
        this._imgBuy.addChild(this._txtPrice);
        this._txtPrice.setCascadeOpacityEnabled(true);
        this._txtPrice.setCascadeColorEnabled(true);
        this._txtPrice.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPrice, 0.3702, 0.55);
        let _txtPriceLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPrice);
        _txtPriceLayoutComponent.setPositionPercentXEnabled(true);
        _txtPriceLayoutComponent.setPositionPercentX(0.3702);
        _txtPriceLayoutComponent.setPositionPercentYEnabled(true);
        _txtPriceLayoutComponent.setPositionPercentY(0.55);
        this._txtPrice.setTouchEnabled(false);
        this._txtPrice.ignoreContentAdaptWithSize(true);
        this._txtPrice.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtPrice.setDefaultFontSize(40);
        this._txtPrice.setTextHorizontalAlignment(1);
        this._txtPrice.setTextVerticalAlignment(1);
        this._txtPrice.enableOutline(cc.color(164, 49, 41, 255), 3);

        ///// # _imgGem
        this._imgGem = new ccui.ImageView();
        this._imgGem.setName("_imgGem");
        this._imgBuy.addChild(this._imgGem);
        this._imgGem.setCascadeOpacityEnabled(true);
        this._imgGem.setCascadeColorEnabled(true);
        this._imgGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGem, 0.8136, 0.55);
        let _imgGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGem);
        _imgGemLayoutComponent.setPositionPercentXEnabled(true);
        _imgGemLayoutComponent.setPositionPercentX(0.8136);
        _imgGemLayoutComponent.setPositionPercentYEnabled(true);
        _imgGemLayoutComponent.setPositionPercentY(0.55);
        this._imgGem.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgGem.setUnifySizeEnabled(false);
        this._imgGem.ignoreContentAdaptWithSize(false);
        this._imgGem.setContentSize(cc.size(64, 64));
        this._imgGem.setTouchEnabled(false);

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._root.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.97, 0.97);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.97);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.97);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(81, 83));
        this._imgClose.setTouchEnabled(true);

    },



});

/**
 * Create ShopPackInfoPopup
 * @returns {_ccs.ShopPackInfoPopup}
 */
_ccs.ShopPackInfoPopup.create = function () {
    return new _ccs.ShopPackInfoPopup();
};
