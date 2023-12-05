/**
 * @class
 * @extends _ccs.Glow
 * @extends ck.SimpleAnimatedNode
 */
ck.Glow = _ccs.Glow.extend({

    /**
     * @constructor
     */
    ctor: function () {
        _ccs.Glow.prototype.ctor.call(this);
        ck.SimpleAnimatedNode.prototype.ctor.call(this);
    },

    /**
     * @override
     * @param callback
     */
    playShowAnimation: function (callback) {
        this.playCCSAnimShow(0, callback, 1);
    },

    /**
     * @override
     * @param callback
     */
    playHideAnimation: function (callback) {
        this.playCCSAnimHide(0, callback, 1);
    },

    /**
     * @override
     */
    onShowDone: function () {
        ck.SimpleAnimatedNode.prototype.onShowDone.call(this);
        this.playCCSAnimIdle(0, null, -1);
    },
});

ck.extend(ck.Glow, ck.SimpleAnimatedNode);

/**
 * @class
 * @extends ck.Glow
 */
let Glow = ck.Glow;

/**
 * Create Glow
 * @returns {Glow}
 */
Glow.create = function () {
    return new Glow();
};
