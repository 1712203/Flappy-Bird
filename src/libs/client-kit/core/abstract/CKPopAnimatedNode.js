/**
 * Animated node with show is `popIn` and hide is `popOut` animation
 *
 * @class
 * @abstract
 * @extends ck.SimpleAnimatedNode
 *
 */
ck.PopAnimatedNode = ck.SimpleAnimatedNode.extend({
    /**
     * @constructor
     */
    ctor: function () {
        ck.SimpleAnimatedNode.prototype.ctor.call(this);
    },

    /**
     * @param callback
     */
    playShowAnimation: function (callback) {
        AnimationUtils.popIn(this, this._showDuration, callback);
    },

    /**
     * @param callback
     */
    playHideAnimation: function (callback) {
        AnimationUtils.popOut(this, this._hideDuration, callback);
    },
});
