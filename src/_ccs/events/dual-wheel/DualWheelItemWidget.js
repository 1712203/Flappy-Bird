/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.DualWheelItemWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.DualWheelItemWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtAmount: null,
    /** @type {ccui.ImageView} */
    _imgChoices: null,
    /** @type {ccui.ImageView} */
    _imgChoices2: null,


    /**
     * _ccs.DualWheelItemWidget constructor
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
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(128, 128));

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._layoutRoot.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr, 0.5, 0.5);
        this._imgBgr.setOpacity(127);
        this._imgBgr.setColor(cc.color(0, 0, 0, 255));
        let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
        _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentY(0.5);
        _imgBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrLayoutComponent.setPercentWidth(1);
        _imgBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrLayoutComponent.setPercentHeight(1);
        this._imgBgr.loadTexture("basics/shapes/RoundedRectangle_256px.png", 1);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setScale9Enabled(true);
        this._imgBgr.setCapInsets(cc.rect(125, 125, 6, 6));
        ck.UIUtils.setSizePercent(this._imgBgr, 1, 1);
        this._imgBgr.setTouchEnabled(false);

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._layoutRoot.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.59);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.59);
        this._imgIcon.loadTexture("icons/color/coins/Coin.png", 1);
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
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.5, 0.1575);
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.5);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.1575);
        _txtAmountLayoutComponent.setPercentWidthEnabled(true);
        _txtAmountLayoutComponent.setPercentWidth(1);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.setUnifySizeEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtAmount, 1);
        this._txtAmount.setContentSize(cc.size(this._txtAmount.width, 61));
        this._txtAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmount.setDefaultFontSize(50);
        this._txtAmount.setTextHorizontalAlignment(1);
        this._txtAmount.setTextVerticalAlignment(1);
        this._txtAmount.enableOutline(cc.color(73, 24, 10, 255), 2);
        this._txtAmount.autoFitSingleLine();

        ///// # _imgChoices
        this._imgChoices = new ccui.ImageView();
        this._imgChoices.setName("_imgChoices");
        this._layoutRoot.addChild(this._imgChoices);
        this._imgChoices.setCascadeOpacityEnabled(true);
        this._imgChoices.setCascadeColorEnabled(true);
        this._imgChoices.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgChoices, 0.877, 0.5286);
        let _imgChoicesLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgChoices);
        _imgChoicesLayoutComponent.setPositionPercentXEnabled(true);
        _imgChoicesLayoutComponent.setPositionPercentX(0.877);
        _imgChoicesLayoutComponent.setPositionPercentYEnabled(true);
        _imgChoicesLayoutComponent.setPositionPercentY(0.5286);
        this._imgChoices.loadTexture("dual-wheel/Switch_Button_01.png", 1);
        this._imgChoices.setUnifySizeEnabled(false);
        this._imgChoices.ignoreContentAdaptWithSize(false);
        this._imgChoices.setContentSize(cc.size(51, 54));
        this._imgChoices.setTouchEnabled(false);

        ///// # _imgChoices2
        this._imgChoices2 = new ccui.ImageView();
        this._imgChoices2.setName("_imgChoices2");
        this._imgChoices.addChild(this._imgChoices2);
        this._imgChoices2.setCascadeOpacityEnabled(true);
        this._imgChoices2.setCascadeColorEnabled(true);
        this._imgChoices2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgChoices2, 0.5, 0.5556);
        let _imgChoices2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgChoices2);
        _imgChoices2LayoutComponent.setPositionPercentXEnabled(true);
        _imgChoices2LayoutComponent.setPositionPercentX(0.5);
        _imgChoices2LayoutComponent.setPositionPercentYEnabled(true);
        _imgChoices2LayoutComponent.setPositionPercentY(0.5556);
        this._imgChoices2.loadTexture("dual-wheel/Switch_Button_02.png", 1);
        this._imgChoices2.setUnifySizeEnabled(false);
        this._imgChoices2.ignoreContentAdaptWithSize(false);
        this._imgChoices2.setContentSize(cc.size(50, 50));
        this._imgChoices2.setTouchEnabled(false);

    },



});

/**
 * Create DualWheelItemWidget
 * @returns {_ccs.DualWheelItemWidget}
 */
_ccs.DualWheelItemWidget.create = function () {
    return new _ccs.DualWheelItemWidget();
};
