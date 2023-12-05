/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.TemplateClass
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.TemplateClass = ccui.Widget.extend({

    // {ClassMembers}

    /**
     * _ccs.TemplateClass constructor
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
        // {InitCode}
    },


    // {CCSAnim}
});

/**
 * Create TemplateClass
 * @returns {_ccs.TemplateClass}
 */
_ccs.TemplateClass.create = function () {
    return new _ccs.TemplateClass();
};
