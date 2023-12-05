/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ShareImageRewardItemWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ShareImageRewardItemWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtAmount: null,


    /**
     * _ccs.ShareImageRewardItemWidget constructor
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
        this._layoutRoot.setContentSize(cc.size(200, 64));

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._layoutRoot.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.225, 0.5);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.225);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.5);
        this._imgIcon.loadTexture("icons/color/items/EyeCounter.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(64, 64));
        this._imgIcon.setTouchEnabled(false);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._layoutRoot.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.675, 0.5);
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.675);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.5);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(true);
        this._txtAmount.setFontName("fonts/GroBold.ttf");
        this._txtAmount.setDefaultFontSize(40);
        this._txtAmount.setTextHorizontalAlignment(1);
        this._txtAmount.setTextVerticalAlignment(1);
        this._txtAmount.enableOutline(cc.color(7, 44, 81, 255), 2);

    },



});

/**
 * Create ShareImageRewardItemWidget
 * @returns {_ccs.ShareImageRewardItemWidget}
 */
_ccs.ShareImageRewardItemWidget.create = function () {
    return new _ccs.ShareImageRewardItemWidget();
};
