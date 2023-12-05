/**
 * A ccui.Widget parsed from a ccs file
 *
 * @class
 * @extends ccui.Widget
 * @extends ck.CCSNode
 * @deprecated Will be removed, please use ccs parser script to parse and use class in _ccs namespace for better performance
 */
ck.CCSWidget = ccui.Widget.extend({
    /**
     * Constructor
     * @param {cc.Node} [ccsNode] - Node from ccs file
     */
    ctor: function (ccsNode) {
        ccui.Widget.prototype.ctor.call(this);
        ck.CCSNode.prototype.ctor.call(this, ccsNode);
    },

    /**
     * @override
     */
    onExit: function () {
        ccui.Widget.prototype.onExit.call(this);
    },

    /**
     * Get ccs file path
     * @virtual
     * @returns {string}
     * @protected
     */
    _getCCSFile: function () {
        return "";
    },
});

ck.extend(ck.CCSWidget, ck.CCSNode);
