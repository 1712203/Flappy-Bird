/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.AroundTheWorldAirPlane
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.AroundTheWorldAirPlane = ccui.Widget.extend({



    /**
     * _ccs.AroundTheWorldAirPlane constructor
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

    },



});

/**
 * Create AroundTheWorldAirPlane
 * @returns {_ccs.AroundTheWorldAirPlane}
 */
_ccs.AroundTheWorldAirPlane.create = function () {
    return new _ccs.AroundTheWorldAirPlane();
};
