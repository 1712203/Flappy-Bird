/**
 * A cc.Layer parsed from a ccs file
 *
 * @class
 * @extends cc.Layer
 * @extends ck.CCSNode
 * @deprecated Will be removed, please use ccs parser script to parse and use class in _ccs namespace for better performance
 */
ck.CCSLayer = cc.Layer.extend({
    /**
     * Constructor
     * @param {cc.Node} [ccsNode] - Node from ccs file
     */
    ctor: function (ccsNode) {
        cc.Layer.prototype.ctor.call(this);
        ck.CCSNode.prototype.ctor.call(this, ccsNode);
    },

    /**
     * @override
     */
    onExit: function () {
        cc.Layer.prototype.onExit.call(this);
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

ck.extend(ck.CCSLayer, ck.CCSNode);
