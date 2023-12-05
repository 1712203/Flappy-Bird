/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.BetChannelWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.BetChannelWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBetAmountCoin: null,
    /** @type {ck.Text} */
    _txtAmount: null,
    /** @type {ccui.Layout} */
    _layoutItemFactor: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtItemFactor: null,


    /**
     * _ccs.BetChannelWidget constructor
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
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(false);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(165, 50));

        ///// # _imgBetAmountCoin
        this._imgBetAmountCoin = new ccui.ImageView();
        this._imgBetAmountCoin.setName("_imgBetAmountCoin");
        this._root.addChild(this._imgBetAmountCoin);
        this._imgBetAmountCoin.setCascadeOpacityEnabled(true);
        this._imgBetAmountCoin.setCascadeColorEnabled(true);
        this._imgBetAmountCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBetAmountCoin, 0.1849, 0.7912);
        this._imgBetAmountCoin.setScale(0.8, 0.8);
        let _imgBetAmountCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBetAmountCoin);
        this._imgBetAmountCoin.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgBetAmountCoin.setUnifySizeEnabled(false);
        this._imgBetAmountCoin.ignoreContentAdaptWithSize(false);
        this._imgBetAmountCoin.setContentSize(cc.size(45, 45));
        this._imgBetAmountCoin.setTouchEnabled(false);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._root.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.6002, 0.7395);
        this._txtAmount.setTextColor(cc.color(247, 204, 89, 255));
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.6002);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.7395);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(true);
        this._txtAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmount.setDefaultFontSize(26);
        this._txtAmount.setTextHorizontalAlignment(1);
        this._txtAmount.setTextVerticalAlignment(1);

        ///// # _layoutItemFactor
        this._layoutItemFactor = new ccui.Layout();
        this._layoutItemFactor.setName("_layoutItemFactor");
        this._root.addChild(this._layoutItemFactor);
        this._layoutItemFactor.setCascadeOpacityEnabled(true);
        this._layoutItemFactor.setCascadeColorEnabled(true);
        this._layoutItemFactor.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutItemFactor, 0.5, 0.2);
        let _layoutItemFactorLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutItemFactor);
        _layoutItemFactorLayoutComponent.setPositionPercentXEnabled(true);
        _layoutItemFactorLayoutComponent.setPositionPercentX(0.5);
        _layoutItemFactorLayoutComponent.setPositionPercentYEnabled(true);
        _layoutItemFactorLayoutComponent.setPositionPercentY(0.2);
        _layoutItemFactorLayoutComponent.setPercentWidthEnabled(true);
        _layoutItemFactorLayoutComponent.setPercentWidth(1);
        this._layoutItemFactor.setTouchEnabled(false);
        this._layoutItemFactor.setUnifySizeEnabled(false);
        this._layoutItemFactor.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutItemFactor, 1);
        this._layoutItemFactor.setContentSize(cc.size(this._layoutItemFactor.width, 29.2725));

        ///// # _txtItemFactor
        this._txtItemFactor = new ck.CustomRichTextExtend(cc.size(165, 29.2725));
        this._txtItemFactor.setName("_txtItemFactor");
        this._layoutItemFactor.addChild(this._txtItemFactor);
        this._txtItemFactor.setCascadeOpacityEnabled(true);
        this._txtItemFactor.setCascadeColorEnabled(true);
        this._txtItemFactor.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtItemFactor, 0.5, 0.5);
        let _txtItemFactorLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtItemFactor);
        _txtItemFactorLayoutComponent.setPositionPercentXEnabled(true);
        _txtItemFactorLayoutComponent.setPositionPercentX(0.5);
        _txtItemFactorLayoutComponent.setPositionPercentYEnabled(true);
        _txtItemFactorLayoutComponent.setPositionPercentY(0.5);
        _txtItemFactorLayoutComponent.setPercentWidthEnabled(true);
        _txtItemFactorLayoutComponent.setPercentWidth(1);
        _txtItemFactorLayoutComponent.setPercentHeightEnabled(true);
        _txtItemFactorLayoutComponent.setPercentHeight(1);
        this._txtItemFactor.setTouchEnabled(false);
        this._txtItemFactor.setDefaultFont("fonts/LilitaOneRegular.ttf");
        this._txtItemFactor.setDefaultSize(23);
        this._txtItemFactor.setDefaultAlignHorizontal(2);
        this._txtItemFactor.setDefaultAlignVertical(5);

    },



});

/**
 * Create BetChannelWidget
 * @returns {_ccs.BetChannelWidget}
 */
_ccs.BetChannelWidget.create = function () {
    return new _ccs.BetChannelWidget();
};
