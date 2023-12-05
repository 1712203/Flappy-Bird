/**
 * @class
 * @extends _ccs.SpotLight
 * @extends ck.SimpleAnimatedNode
 */
ck.SpotLight = _ccs.SpotLight.extend({

    /**
     * @constructor
     */
    ctor: function () {
        _ccs.SpotLight.prototype.ctor.call(this);
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

ck.extend(ck.SpotLight, ck.SimpleAnimatedNode);

/**
 * @class
 * @extends ck.SpotLight
 */
let SpotLight = ck.SpotLight;

/**
 * Create SpotLight
 * @returns {SpotLight}
 */
SpotLight.create = function () {
    return new SpotLight();
};


