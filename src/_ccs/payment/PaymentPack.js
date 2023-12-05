/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PaymentPack
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.PaymentPack = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtAmount: null,
    /** @type {cc.Node} */
    _nodeBonusPercent: null,
    /** @type {ccui.Layout} */
    _layoutLine: null,
    /** @type {ck.Text} */
    _txtOldAmount: null,
    /** @type {ccui.ImageView} */
    _imgPromotion: null,
    /** @type {ck.Text} */
    _txtPromotion: null,
    /** @type {ccui.ImageView} */
    _imgPrice: null,
    /** @type {ck.Text} */
    _txtPrice: null,
    /** @type {ck.GridViewVertical} */
    _gridViewBonusItems: null,


    /**
     * _ccs.PaymentPack constructor
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
        this._layoutRoot.setTouchEnabled(true);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(190, 342));

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._layoutRoot.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.5);
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundLayoutComponent.setPercentWidth(1);
        _imgBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundLayoutComponent.setPercentHeight(1);
        this._imgBackground.loadTexture("basics/popup/BoxNormal.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setScale9Enabled(true);
        this._imgBackground.setCapInsets(cc.rect(11, 14, 3, 314));
        ck.UIUtils.setSizePercent(this._imgBackground, 1, 1);
        this._imgBackground.setTouchEnabled(false);

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._layoutRoot.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.7052);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.7052);
        this._imgIcon.loadTexture("icons/color/coins/Coin_x3.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(128, 128));
        this._imgIcon.setTouchEnabled(false);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._layoutRoot.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.5, 0.4367);
        this._txtAmount.setTextColor(cc.color(197, 70, 1, 255));
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.5);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.4367);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(true);
        this._txtAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmount.setDefaultFontSize(30);
        this._txtAmount.setTextHorizontalAlignment(1);
        this._txtAmount.setTextVerticalAlignment(1);

        ///// # _nodeBonusPercent
        this._nodeBonusPercent = new cc.Node();
        this._nodeBonusPercent.setName("_nodeBonusPercent");
        this._layoutRoot.addChild(this._nodeBonusPercent);
        this._nodeBonusPercent.setCascadeOpacityEnabled(true);
        this._nodeBonusPercent.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeBonusPercent, 0.5, 0.5);
        let _nodeBonusPercentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeBonusPercent);
        _nodeBonusPercentLayoutComponent.setPositionPercentXEnabled(true);
        _nodeBonusPercentLayoutComponent.setPositionPercentX(0.5);
        _nodeBonusPercentLayoutComponent.setPositionPercentYEnabled(true);
        _nodeBonusPercentLayoutComponent.setPositionPercentY(0.5);

        ///// # _layoutLine
        this._layoutLine = new ccui.Layout();
        this._layoutLine.setName("_layoutLine");
        this._nodeBonusPercent.addChild(this._layoutLine);
        this._layoutLine.setCascadeOpacityEnabled(true);
        this._layoutLine.setCascadeColorEnabled(true);
        this._layoutLine.setAnchorPoint(cc.p(0.5, 0.5));
        this._layoutLine.setPosition(0, 11);
        let _layoutLineLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLine);
        _layoutLineLayoutComponent.setPositionPercentXEnabled(true);
        _layoutLineLayoutComponent.setPositionPercentX(0);
        this._layoutLine.setTouchEnabled(true);
        this._layoutLine.setUnifySizeEnabled(false);
        this._layoutLine.ignoreContentAdaptWithSize(false);
        this._layoutLine.setContentSize(cc.size(100, 2));
        this._layoutLine.setBackGroundColorType(1);
        this._layoutLine.setBackGroundColor(cc.color(108, 80, 0, 255));

        ///// # _txtOldAmount
        this._txtOldAmount = new ck.Text();
        this._txtOldAmount.setName("_txtOldAmount");
        this._nodeBonusPercent.addChild(this._txtOldAmount);
        this._txtOldAmount.setCascadeOpacityEnabled(true);
        this._txtOldAmount.setCascadeColorEnabled(true);
        this._txtOldAmount.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtOldAmount.setPosition(0, 11);
        this._txtOldAmount.setTextColor(cc.color(74, 70, 71, 255));
        let _txtOldAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtOldAmount);
        this._txtOldAmount.setTouchEnabled(false);
        this._txtOldAmount.ignoreContentAdaptWithSize(true);
        this._txtOldAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtOldAmount.setDefaultFontSize(25);
        this._txtOldAmount.setTextHorizontalAlignment(1);
        this._txtOldAmount.setTextVerticalAlignment(1);

        ///// # _imgPromotion
        this._imgPromotion = new ccui.ImageView();
        this._imgPromotion.setName("_imgPromotion");
        this._nodeBonusPercent.addChild(this._imgPromotion);
        this._imgPromotion.setCascadeOpacityEnabled(true);
        this._imgPromotion.setCascadeColorEnabled(true);
        this._imgPromotion.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgPromotion.setPosition(-61.6603, 135.0918);
        let _imgPromotionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPromotion);
        this._imgPromotion.loadTexture("icons/color/badges/Badges_02.png", 1);
        this._imgPromotion.setUnifySizeEnabled(false);
        this._imgPromotion.ignoreContentAdaptWithSize(false);
        this._imgPromotion.setContentSize(cc.size(100, 100));
        this._imgPromotion.setTouchEnabled(false);

        ///// # _txtPromotion
        this._txtPromotion = new ck.Text();
        this._txtPromotion.setName("_txtPromotion");
        this._imgPromotion.addChild(this._txtPromotion);
        this._txtPromotion.setCascadeOpacityEnabled(true);
        this._txtPromotion.setCascadeColorEnabled(true);
        this._txtPromotion.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPromotion, 0.4726, 0.6211);
        let _txtPromotionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPromotion);
        _txtPromotionLayoutComponent.setPositionPercentXEnabled(true);
        _txtPromotionLayoutComponent.setPositionPercentX(0.4726);
        _txtPromotionLayoutComponent.setPositionPercentYEnabled(true);
        _txtPromotionLayoutComponent.setPositionPercentY(0.6211);
        this._txtPromotion.setTouchEnabled(false);
        this._txtPromotion.ignoreContentAdaptWithSize(true);
        this._txtPromotion.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtPromotion.setDefaultFontSize(20);
        this._txtPromotion.setTextHorizontalAlignment(1);
        this._txtPromotion.setTextVerticalAlignment(1);
        this._txtPromotion.enableOutline(cc.color(82, 0, 0, 255), 2);

        ///// # _imgPrice
        this._imgPrice = new ccui.ImageView();
        this._imgPrice.setName("_imgPrice");
        this._layoutRoot.addChild(this._imgPrice);
        this._imgPrice.setCascadeOpacityEnabled(true);
        this._imgPrice.setCascadeColorEnabled(true);
        this._imgPrice.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPrice, 0.5, 0.0984);
        let _imgPriceLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPrice);
        _imgPriceLayoutComponent.setPositionPercentXEnabled(true);
        _imgPriceLayoutComponent.setPositionPercentX(0.5);
        _imgPriceLayoutComponent.setPositionPercentYEnabled(true);
        _imgPriceLayoutComponent.setPositionPercentY(0.0984);
        this._imgPrice.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgPrice.setUnifySizeEnabled(false);
        this._imgPrice.ignoreContentAdaptWithSize(false);
        this._imgPrice.setContentSize(cc.size(148.7638, 58.4945));
        this._imgPrice.setTouchEnabled(true);

        ///// # _txtPrice
        this._txtPrice = new ck.Text();
        this._txtPrice.setName("_txtPrice");
        this._imgPrice.addChild(this._txtPrice);
        this._txtPrice.setCascadeOpacityEnabled(true);
        this._txtPrice.setCascadeColorEnabled(true);
        this._txtPrice.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPrice, 0.5, 0.5116);
        let _txtPriceLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPrice);
        _txtPriceLayoutComponent.setPositionPercentXEnabled(true);
        _txtPriceLayoutComponent.setPositionPercentX(0.5);
        _txtPriceLayoutComponent.setPositionPercentYEnabled(true);
        _txtPriceLayoutComponent.setPositionPercentY(0.5116);
        this._txtPrice.setTouchEnabled(false);
        this._txtPrice.ignoreContentAdaptWithSize(true);
        this._txtPrice.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtPrice.setDefaultFontSize(25);
        this._txtPrice.setTextHorizontalAlignment(1);
        this._txtPrice.setTextVerticalAlignment(1);
        this._txtPrice.enableOutline(cc.color(146, 70, 0, 255), 2);

        ///// # _gridViewBonusItems
        this._gridViewBonusItems = new ck.GridViewVertical();
        this._gridViewBonusItems.setName("_gridViewBonusItems");
        this._layoutRoot.addChild(this._gridViewBonusItems);
        this._gridViewBonusItems.setCascadeOpacityEnabled(true);
        this._gridViewBonusItems.setCascadeColorEnabled(true);
        this._gridViewBonusItems.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridViewBonusItems, 0.5, 0.2887);
        let _gridViewBonusItemsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewBonusItems);
        _gridViewBonusItemsLayoutComponent.setPositionPercentXEnabled(true);
        _gridViewBonusItemsLayoutComponent.setPositionPercentX(0.5);
        _gridViewBonusItemsLayoutComponent.setPositionPercentYEnabled(true);
        _gridViewBonusItemsLayoutComponent.setPositionPercentY(0.2887);

    },



});

/**
 * Create PaymentPack
 * @returns {_ccs.PaymentPack}
 */
_ccs.PaymentPack.create = function () {
    return new _ccs.PaymentPack();
};
