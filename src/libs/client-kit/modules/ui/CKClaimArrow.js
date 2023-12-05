/**
 * @class
 * @extends _ccs.ClaimArrow
 */
ck.ClaimArrow = _ccs.ClaimArrow.extend({

    /**
     * @constructor
     */
    ctor: function () {
        _ccs.ClaimArrow.prototype.ctor.call(this);
    },

    idle: function () {
        this.playCCSAnimIdle(0, null, -1);
    },

});

/**
 * @class
 * @extends ck.ClaimArrow
 */
let ClaimArrow = ck.ClaimArrow;

/**
 * Create ClaimArrow
 * @returns {ClaimArrow}
 */
ClaimArrow.create = function () {
    return new ClaimArrow();
};
