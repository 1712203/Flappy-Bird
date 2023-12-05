/**
 * Used as interface for node that contains a ClaimLayer
 *
 * @class
 * @abstract
 * @extends cc.Class
 */
ck.ClaimLayerContainer = cc.Class.extend({

    /**
     * Used for claim item effects
     * @type {ClaimLayer}
     */
    _claimLayer: null,

    ctor: function () {
        this._initClaimLayer();
        this._initItemPositions();
    },

    /**
     * Returns claim item layer
     * @returns {ClaimLayer}
     */
    getClaimLayer: function () {
        return this._claimLayer;
    },

    /**
     * Init item positions for claim items animation
     * @virtual
     * @example
     *  _initItemPositions: function () {
     *      this._claimLayer.addPositionByNode(ItemID.COIN, this._imgCoinIcon);
     *      this._claimLayer.addPositionByNode(ItemID.GEM, this._imgCoinIcon);
     *  }
     */
    _initItemPositions: function () {
    },

    /**
     * Init claim item effect layer
     * @private
     */
    _initClaimLayer: function () {
        this._claimLayer = ClaimLayer.create();
        // Make claim layer above other layers/popups
        this._claimLayer.setLocalZOrder(100);
        this.addChild(this._claimLayer);
    },
});
