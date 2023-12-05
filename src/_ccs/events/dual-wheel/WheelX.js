/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.WheelX
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.WheelX = ccui.Widget.extend({

    /** @type {cc.Node} */
    _nodeWheel: null,
    /** @type {ccui.ImageView} */
    _imgWheel: null,


    /**
     * _ccs.WheelX constructor
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

        ///// # _nodeWheel
        this._nodeWheel = new cc.Node();
        this._nodeWheel.setName("_nodeWheel");
        this.addChild(this._nodeWheel);
        this._nodeWheel.setCascadeOpacityEnabled(true);
        this._nodeWheel.setCascadeColorEnabled(true);
        let _nodeWheelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeWheel);
        _nodeWheelLayoutComponent.setPositionPercentXEnabled(true);
        _nodeWheelLayoutComponent.setPositionPercentX(0);
        _nodeWheelLayoutComponent.setPositionPercentYEnabled(true);
        _nodeWheelLayoutComponent.setPositionPercentY(0);

        ///// # _imgWheel
        this._imgWheel = new ccui.ImageView();
        this._imgWheel.setName("_imgWheel");
        this._nodeWheel.addChild(this._imgWheel);
        this._imgWheel.setCascadeOpacityEnabled(true);
        this._imgWheel.setCascadeColorEnabled(true);
        this._imgWheel.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgWheelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgWheel);
        _imgWheelLayoutComponent.setPositionPercentXEnabled(true);
        _imgWheelLayoutComponent.setPositionPercentX(0);
        _imgWheelLayoutComponent.setPositionPercentYEnabled(true);
        _imgWheelLayoutComponent.setPositionPercentY(0);
        this._imgWheel.loadTexture("dual-wheel/Round_02.png", 1);
        this._imgWheel.setUnifySizeEnabled(false);
        this._imgWheel.ignoreContentAdaptWithSize(false);
        this._imgWheel.setContentSize(cc.size(327, 326));
        this._imgWheel.setTouchEnabled(false);

    },



});

/**
 * Create WheelX
 * @returns {_ccs.WheelX}
 */
_ccs.WheelX.create = function () {
    return new _ccs.WheelX();
};
