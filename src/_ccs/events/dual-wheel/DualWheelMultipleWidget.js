/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.DualWheelMultipleWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.DualWheelMultipleWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ck.Text} */
    _txtX: null,


    /**
     * _ccs.DualWheelMultipleWidget constructor
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
        this._layoutRoot.setContentSize(cc.size(200, 128));

        ///// # _txtX
        this._txtX = new ck.Text();
        this._txtX.setName("_txtX");
        this._layoutRoot.addChild(this._txtX);
        this._txtX.setCascadeOpacityEnabled(true);
        this._txtX.setCascadeColorEnabled(true);
        this._txtX.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtX, 0.5, 0.5);
        let _txtXLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtX);
        _txtXLayoutComponent.setPositionPercentXEnabled(true);
        _txtXLayoutComponent.setPositionPercentX(0.5);
        _txtXLayoutComponent.setPositionPercentYEnabled(true);
        _txtXLayoutComponent.setPositionPercentY(0.5);
        _txtXLayoutComponent.setPercentWidthEnabled(true);
        _txtXLayoutComponent.setPercentWidth(1);
        _txtXLayoutComponent.setPercentHeightEnabled(true);
        _txtXLayoutComponent.setPercentHeight(1);
        this._txtX.setTouchEnabled(false);
        this._txtX.setUnifySizeEnabled(false);
        this._txtX.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtX, 1, 1);
        this._txtX.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtX.setDefaultFontSize(90);
        this._txtX.setTextHorizontalAlignment(1);
        this._txtX.setTextVerticalAlignment(1);
        this._txtX.enableOutline(cc.color(28, 38, 114, 255), 2);
        this._txtX.enableShadow(cc.color(0, 84, 166, 255), cc.size(0, -4), 0);
        this._txtX.autoFitSingleLine();

    },



});

/**
 * Create DualWheelMultipleWidget
 * @returns {_ccs.DualWheelMultipleWidget}
 */
_ccs.DualWheelMultipleWidget.create = function () {
    return new _ccs.DualWheelMultipleWidget();
};
