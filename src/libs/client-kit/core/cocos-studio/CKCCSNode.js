/**
 * Used to parse nodes created from cocos studio
 * Note: Class extend this class must be a cc.Node
 *
 * @class
 * @abstract
 * @extends ck.SimpleAnimatedNode
 * @deprecated Will be removed, please use ccs parser script to parse and use class in _ccs namespace for better performance
 */
ck.CCSNode = ck.SimpleAnimatedNode.extend({

    /**
     * Action parsed from CCS
     * @type {ccs.ActionTimeline}
     */
    _ccsAction: null,

    /**
     * Create new node parsed from a ccsNode. <br/>
     * If ccsNode is null, ccs file returned from this._getCCSFile() will be used to create this node. <br/>
     *
     * @constructor
     * @param {cc.Node} [ccsNode] A node in ccs file (will be replaced by `this`)
     */
    ctor: function (ccsNode) {
        this.setCascadeColorEnabled(true);
        this.setCascadeOpacityEnabled(true);
        if(ccsNode instanceof cc.Node) {
            this._initFromCCSNode(ccsNode);
        } else {
            this._initFromCCSFile(this._getCCSFile());
        }
    },

    /**
     *
     * @virtual
     * @returns {string}
     * @protected
     */
    _getCCSFile: function () {
        return "";
    },

    /**
     * Returns node names you don't want to parse its children to properties
     * Ignore node names usually are names of node you drag from other ccs file
     * @returns {string[]}
     */
    _getIgnoreNodeNames: function () {
        return [];
    },

    /**
     * Init from CCS json file
     * @param file Json file path
     * @param path Resource search path
     * @returns {boolean}
     * @private
     */
    _initFromCCSFile: function (file, path = "") {
        if (!file) return;
        var obj = ck.ccs.load(file, path);
        this._initFromCCSNode(obj.node);
        return true;
    },

    /**
     * Initial from a node in another ccs file
     * @param node
     * @private
     */
    _initFromCCSNode: function (node) {
        if (!node) {
            cc.warn("[ck.CCSNode] <_initFromCCSNode> node is null");
            return false;
        }
        ck.ccs.replaceNode(node, this);
        if (this.getTag() !== cc.NODE_TAG_INVALID)
            this._ccsAction = this.getActionByTag(this.getTag());
        this._onCCSLoaded();
        return true;
    },

    /**
     * Callback when ccs nodes loading has finished
     * @private
     */
    _onCCSLoaded: function () {
        ck.ccs.parseChildren(this, this._getIgnoreNodeNames());
    },

    /**
     * Get the action timeline parse from ccs
     * @returns {ccs.ActionTimeline}
     */
    getCCSAction: function () {
        return this._ccsAction;
    },
});


