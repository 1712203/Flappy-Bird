/**
 * @class
 * @extends ck.BaseScene
 */
ck.LoadingScene = ck.BaseScene.extend({
    ctor: function () {
        ck.BaseScene.prototype.ctor.call(this);
    },

    /**
     * @override
     * @return {LoadingLayer}
     */
    _createMainLayer: function () {
        return ck.LoadingLayer.create();
    },

    /**
     * @override
     * @return {SceneID|number}
     */
    _getID: function () {
        return SceneID.LOADING;
    },
});

/**
 * @class
 * @extends ck.LoadingScene
 */
let LoadingScene = ck.LoadingScene;

/**
 * @returns {LoadingScene}
 */
LoadingScene.create = function () {
    return new LoadingScene();
};
