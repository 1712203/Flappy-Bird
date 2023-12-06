/**
 * @class
 * @extends cc.Layer
 * @extends ck.BaseMainLayer
 */
ck.FlappyBirdLayer = _ccs.FlappyBirdLayer.extend({

    ctor: function () {
        this._loadAssets();
        _ccs.FlappyBirdLayer.prototype.ctor.call(this);
        ck.BaseMainLayer.prototype.ctor.call(this);
        this.playCCSAnimIdle(0, null, -1);
    },

    onEnterTransitionDidFinish: function (){
        this._super();
    },

    _loadAssets: function () {
        gm.loading.loadSceneAssets(ck.SceneID.FLAPPY_BIRD);
    },

    /**
     * @override
     * @return {null}
     */
    getItemPositions: function () {
        return null;
    },

    /**
     * @override
     * @param {ck.FlappyBirdData} data
     */
    setData: function (data) {

    },

    _initTouchEvents: function () {

    },

    _initLoginMethods: function () {

    },
});

ck.extend(ck.FlappyBirdLayer, ck.BaseMainLayer);

/**
 * @class
 * @extends ck.FlappyBirdLayer
 */
let FlappyBirdLayer = ck.FlappyBirdLayer;

/**
 * @returns {FlappyBirdLayer}
 */
FlappyBirdLayer.create = function () {
    return new FlappyBirdLayer();
};
