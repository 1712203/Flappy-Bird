/**
 * @class
 * @extends ck.BaseScene
 */
ck.FlappyBirdScene = ck.BaseScene.extend({
    ctor: function () {
        ck.BaseScene.prototype.ctor.call(this);
    },

    /**
     * @override
     * @return {ck.SceneID|number}
     */
    _getID: function () {
        return ck.SceneID.FLAPPY_BIRD;
    },

    /**
     * @override
     * @return {FlappyBirdLayer}
     * @private
     */
    _createMainLayer: function () {
        return FlappyBirdLayer.create();
    },
});

/**
 * @class
 * @extends ck.FlappyBirdScene
 */
let FlappyBirdScene = ck.FlappyBirdScene;

/**
 * @returns {FlappyBirdScene}
 */
FlappyBirdScene.create = function () {
    return new FlappyBirdScene();
};