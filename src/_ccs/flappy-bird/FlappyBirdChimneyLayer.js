/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.FlappyBirdChimneyLayer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.FlappyBirdChimneyLayer = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _layout: null,
    /** @type {cc.Node} */
    _nodeChimney: null,
    /** @type {FlappyBirdChimney} */
    _chimneyUp: null,
    /** @type {FlappyBirdChimney} */
    _chimneyDown: null,


    /**
     * _ccs.FlappyBirdChimneyLayer constructor
     * @constructor
     */
    ctor: function () {
        cc.Layer.prototype.ctor.call(this);
        this.setCascadeOpacityEnabled(true);
        this._initCCSChildren();
    },

    /**
     * Init nodes from ccs
     * @private
     */
    _initCCSChildren: function () {

        ///// # _layout
        this._layout = new ccui.Layout();
        this._layout.setName("_layout");
        this.addChild(this._layout);
        this._layout.setCascadeOpacityEnabled(true);
        this._layout.setCascadeColorEnabled(true);
        this._layout.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layout, 0.5, 0.5);
        let _layoutLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layout);
        _layoutLayoutComponent.setPositionPercentXEnabled(true);
        _layoutLayoutComponent.setPositionPercentX(0.5);
        _layoutLayoutComponent.setPositionPercentYEnabled(true);
        _layoutLayoutComponent.setPositionPercentY(0.5);
        _layoutLayoutComponent.setPercentWidthEnabled(true);
        _layoutLayoutComponent.setPercentWidth(1);
        _layoutLayoutComponent.setPercentHeightEnabled(true);
        _layoutLayoutComponent.setPercentHeight(1);
        this._layout.setTouchEnabled(true);
        this._layout.setUnifySizeEnabled(false);
        this._layout.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layout, 1, 1);
        this._layout.setClippingEnabled(true);

        ///// # _nodeChimney
        this._nodeChimney = new cc.Node();
        this._nodeChimney.setName("_nodeChimney");
        this._layout.addChild(this._nodeChimney);
        this._nodeChimney.setCascadeOpacityEnabled(true);
        this._nodeChimney.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeChimney, 0.5, 0.5);
        let _nodeChimneyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeChimney);
        _nodeChimneyLayoutComponent.setPositionPercentXEnabled(true);
        _nodeChimneyLayoutComponent.setPositionPercentX(0.5);
        _nodeChimneyLayoutComponent.setPositionPercentYEnabled(true);
        _nodeChimneyLayoutComponent.setPositionPercentY(0.5);

        ///// # _chimneyUp
        this._chimneyUp = new FlappyBirdChimney();
        this._chimneyUp.setName("_chimneyUp");
        this._nodeChimney.addChild(this._chimneyUp);
        this._chimneyUp.setCascadeOpacityEnabled(true);
        this._chimneyUp.setCascadeColorEnabled(true);
        this._chimneyUp.setPosition(0, 750);
        let _chimneyUpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._chimneyUp);

        ///// # _chimneyDown
        this._chimneyDown = new FlappyBirdChimney();
        this._chimneyDown.setName("_chimneyDown");
        this._nodeChimney.addChild(this._chimneyDown);
        this._chimneyDown.setCascadeOpacityEnabled(true);
        this._chimneyDown.setCascadeColorEnabled(true);
        this._chimneyDown.setPosition(0, -750);
        let _chimneyDownLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._chimneyDown);

    },



});

/**
 * Create FlappyBirdChimneyLayer
 * @returns {_ccs.FlappyBirdChimneyLayer}
 */
_ccs.FlappyBirdChimneyLayer.create = function () {
    return new _ccs.FlappyBirdChimneyLayer();
};
