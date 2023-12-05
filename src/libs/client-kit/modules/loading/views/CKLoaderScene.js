/**
 * @class
 * @extends cc.Scene
 */
ck.LoaderScene = cc.Scene.extend({
    /**
     * @type {LoaderLayer}
     */
    _layer: null,

    ctor: function () {
        cc.Scene.prototype.ctor.call(this);
    },

    /**
     * Add loader layer
     * @param {LoaderLayer} layer
     */
    addLayer: function (layer) {
        if (!layer) return;
        this._layer = layer;
        this.addChild(layer);
    },
});

/**
 * @class
 * @extends ck.LoaderScene
 */
let LoaderScene = ck.LoaderScene;

/**
 * @returns {LoaderScene}
 */
LoaderScene.create = function () {
    return new LoaderScene();
};
