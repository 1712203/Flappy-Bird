/**
 * Base class for scene in game <br/>
 * Each scene has a main layer and a main claim layer<br/>
 * Item positions in claim layer will be got from the main layer <br/>
 * Override _getClaimPositions() to define item positions <br/>
 *
 * @class
 * @abstract
 * @extends cc.Scene
 *
 */
ck.BaseScene = cc.Scene.extend({

    /**
     * Main layer
     * @type {ck.BaseMainLayer}
     */
    _layer: null,

    /**
     * Layer for claim item(s) animations
     * @type {ClaimLayer}
     */
    _claimLayer: null,

    /**
     * @type {function(): void}
     */
    _onEnterTransitionDidFinishCallback: null,

    /**
     * Scene id
     * @type {number}
     */
    _id: 0,

    ctor: function () {
        cc.Scene.prototype.ctor.call(this);
        this._id = this._getID();
        this._initMainLayer();
    },

    /**
     * @virtual
     * @returns {number}
     */
    _getID: function () {
        return 0;
    },

    /**
     * @virtual
     * @returns {ck.BaseMainLayer}
     */
    _createMainLayer: function () {
        return null;
    },

    _initMainLayer: function () {
        this._layer = this._createMainLayer();
        this.addChild(this._layer);
    },

    onExit: function () {
        cc.Scene.prototype.onExit.call(this);
    },

    onEnterTransitionDidFinish: function () {
        cc.Scene.prototype.onEnterTransitionDidFinish.call(this);
        if (this._onEnterTransitionDidFinishCallback) {
            this._onEnterTransitionDidFinishCallback();
        }
    },

    setOnEnterTransitionDidFinishCallback: function (callback) {
        this._onEnterTransitionDidFinishCallback = callback;
    },

    /**
     * @returns {number}
     */
    getID: function () {
        return this._id;
    },

    /**
     * @returns {ck.BaseMainLayer}
     */
    getMainLayer: function () {
        return this._layer;
    },

    /**
     * Returns claim item layer
     * @returns {ClaimLayer}
     */
    getClaimLayer: function () {
        return this._claimLayer;
    },
});
