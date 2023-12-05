/**
 * A ccui.Layout parsed from a ccs file
 *
 * @class
 * @extends ccui.Layout
 * @extends ck.CCSNode
 * @deprecated Will be removed, please use ccs parser script to parse and use class in _ccs namespace for better performance
 */
ck.CCSLayout = ccui.Layout.extend({
    /**
     * Constructor
     * @param {cc.Node} [ccsNode] - Node from ccs file
     */
    ctor: function (ccsNode) {
        ccui.Layout.prototype.ctor.call(this);
        ck.CCSNode.prototype.ctor.call(this, ccsNode);
    },

    /**
     * Get ccs file path
     * @virtual
     * @returns {string}
     * @protected
     */
    _getCCSFile: function () {
        return "";
    }
});

ck.extend(ck.CCSLayout, ck.CCSNode);
