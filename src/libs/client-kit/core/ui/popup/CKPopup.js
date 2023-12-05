/**
 * Base class for popups created from CocosStudio
 * Includes some basics things for a popup (show, hide, close when touch outside, close button, etc.)
 * 
 * @class
 * @abstract
 * @extends ck.CCSWidget
 * @extends ck.PopupBehavior
 * @deprecated Will be removed, please use ck.PopupBehavior
 */
ck.Popup = ck.CCSWidget.extend({
    /**
     * @constructor
     * @param {cc.Node} ccsNode - Node from CCS
     */
    ctor: function (ccsNode) {
        ck.CCSWidget.prototype.ctor.call(this, ccsNode);
        ck.PopupBehavior.prototype.ctor.call(this);
    },

    /**
     * @virtual
     * @returns {string}
     * @protected
     */
    _getCCSFile: function () {
        return "";
    },

    /**
     * @override
     */
    onExit: function () {
        ck.CCSWidget.prototype.onExit.call(this);
    },
});

ck.extend(ck.Popup, ck.PopupBehavior);
