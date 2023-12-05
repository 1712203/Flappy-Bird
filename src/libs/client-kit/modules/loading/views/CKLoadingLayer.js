/**
 * Loading layer used to load assets and do some task before user can play (Ex. load configs, load assets, load texts, etc.)
 *
 * @class
 * @extends ck.LoaderLayer
 * @extends ck.BaseMainLayer
 */
ck.LoadingLayer = ck.LoaderLayer.extend({

    ctor: function () {
        ck.LoaderLayer.prototype.ctor.call(this);
        ck.BaseMainLayer.prototype.ctor.call(this);
    },

    /**
     * @override
     * @return {Map<number, cc.Point>}
     */
    getItemPositions: function () { return new Map(); },

    /**
     * @override
     */
    refresh: function () {},

    /**
     * @override
     */
    startLoading: function () {
        this.loadAssets();
    },

    loadAssets: function () {
        const config = gm.loading.config;
        this.addAssets(config.getSceneAssets(ck.SceneID.LOADING));
        this.addAssets(config.getSceneAssets(ck.SceneID.HOME));
        this.addAssets(config.getSceneAssets(ck.SceneID.GAMEPLAY));
        this.setCallback(this.loadNextScene.bind(this));
        this.startLoadingAssets(80);
    },

    /**
     * @override
     * @private
     */
    _onAssetsLoaded: function () {
        gm.initPools();
        this.progressTo(100, this._onEverythingLoaded.bind(this));
    },

    loadNextScene: function () {
        this.loadHomeScene();
    },

    loadHomeScene: function () {
        gm.home.runHomeScene(() => {
            gm.home.onEnterFromLogin();
        });
    },



});

ck.extend(ck.LoadingLayer, ck.BaseMainLayer);

/**
 * @returns {ck.LoadingLayer}
 */
ck.LoadingLayer.create = function () {
    return new ck.LoadingLayer();
};

