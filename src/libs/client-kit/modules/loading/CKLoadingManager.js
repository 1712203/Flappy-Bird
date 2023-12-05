/**
 * @class
 * @extends ck.BaseManager
 */
ck.LoadingManager = ck.BaseManager.extend({

    /**
     * @type {null}
     */
    _data: null,

    /**
     * @type {LoadingConfig}
     */
    _config: null,

    /**
     * @type {null}
     */
    _handler: null,

    /**
     * @type {LoadingLayer}
     */
    _view: null,

    /**
     * @type {ck.BaseScene}
     */
    _currentScene: null,

    /**
     * @constructor
     */
    ctor: function () {
        ck.BaseManager.prototype.ctor.call(this);
    },

    /**
     * @override
     * @return {string}
     */
    _getConfigFile: function () {
        return ck.LoadingManager.CONFIG_FILE;
    },

    /**
     * @override
     * @return {LoadingConfig}
     */
    _createConfig: function () {
        return LoadingConfig.create();
    },

    /**
     * @override
     * @return {null}
     */
    _createData: function () {
        return null;
    },

    /**
     * @override
     * @return {null}
     */
    _createHandler: function () {
        return null;
    },

    /**
     * @override
     * @return {LoadingLayer}
     */
    _createView: function () {
        return ck.LoadingLayer.create();
    },

    /**
     * @override
     * @return {SceneID|Number}
     */
    _getSceneID: function () {
        return SceneID.LOADING;
    },

    /**
     * @override
     */
    requestData: function () {

    },

    /**
     * Create scene by id
     * @return {ck.BaseScene}
     * @virtual
     */
    _createScene: function (id) {
        switch (id) {
            case SceneID.LOGIN:
                return LoginScene.create();
            case SceneID.LOADING:
                return LoadingScene.create();
            case SceneID.HOME:
                return HomeScene.create();
            case SceneID.TUTORIAL:
                return TutorialScene.create();
            case SceneID.GAMEPLAY:
                return GameplayScene.create();
            case SceneID.AROUND_THE_WORLD:
                return AroundTheWorldScene.create();
            case SceneID.DUAL_WHEEL:
                return DualWheelScene.create();
        }
        return null;
    },

    /**
     * @param {number} id scene id
     * @returns {LoaderLayer} Loader layer used to load that scene
     */
    _getLoaderLayer: function (id) {
        const assets = this._config.getSceneAssets(id);
        // if (!assets || assets.length < 1) return null;
        const layer = LoaderLayer.create();
        layer.addAssets(assets);
        return layer;
    },

    /**
     * Run a scene (without loading)
     * @param {number|SceneID} id - Scene ID
     * @param {function(scene: ck.BaseScene): void} [callback=null] - Callback when scene is loaded
     */
    runScene: function (id, callback = null) {
        fr.wrapper.crashlyticsLog("[Pisti][LoadingManager] - runScene " + id.toString());
        cc.log("[Pisti][LoadingManager] - runScene " + id.toString());
        let scene = this._createScene(id);
        if (!scene) {
            callback && callback(null);
            cc.warn("[ck.LoadingManager] <runScene> scene is null %d", id);
            return null;
        }
        // Do NOT use transition here!!!
        // If a scene is in a transition and another transition being called, it will cause an error
        cc.director.runScene(scene);
        callback && callback(scene);
        gm.notice.clearToastQueue();
        gm.system.stopBGM();
        const bgm = this._config.getBackgroundMusic(id);
        if (bgm) {
            gm.system.playBGM(bgm);
        }
        this.setCurrentScene(null);
        if (scene.setOnEnterTransitionDidFinishCallback) {
            scene.setOnEnterTransitionDidFinishCallback(function () {
                this.setCurrentScene(scene);
            }.bind(this));
        }
        if (UIUtils.hasLogLayer()){
            scene.addChild(LogLayer.create(), 10000);
        }
        return scene;
    },

    /**
     * Load a scene
     * @param {number|SceneID} id - Scene ID
     * @param {function(scene: ck.BaseScene): void} [callback=null] - Callback when scene is loaded
     */
    loadScene: function (id, callback = null) {
        fr.wrapper.crashlyticsLog("[Pisti][LoadingManager] - loadScene " + id.toString());
        this.setCurrentScene(null);
        const loaderLayer = this._getLoaderLayer(id);
        if (!loaderLayer) {
            cc.log("[ck.LoadingManager] <loadScene> loaderLayer for scene %d is null!", id);
            this.runScene(id, callback);
            return;
        }
        loaderLayer.setCallback(function () {
            const scene = this._createScene(id);
            if (!scene) {
                callback && callback(null);
                cc.warn("[LoadingManager] - loadScene - Can not create scene %d", id);
                return;
            }
            cc.director.runScene(scene);
            callback && callback(scene);
            const bgm = this._config.getBackgroundMusic(id);
            if (bgm) {
                gm.system.playBGM(bgm);
            }

            if (scene.setOnEnterTransitionDidFinishCallback) {
                scene.setOnEnterTransitionDidFinishCallback(function () {
                    this.setCurrentScene(scene);
                }.bind(this));
            }
        }.bind(this));
        const loaderScene = LoaderScene.create();
        loaderScene.addLayer(loaderLayer);
        cc.director.runScene(loaderScene);
        gm.notice.clearToastQueue();
        gm.system.stopBGM();
    },

    setCurrentScene:function (scene){
        this._currentScene = scene;
        if(!scene)
            return;

        gm.notice.changeScreen();
        gm.suggestPlay.scheduleIdleTime();
        if (UIUtils.hasLogLayer()){
            scene.addChild(LogLayer.create(), 10000);
        }
    },

    /**
     *
     * @returns {ck.BaseMainLayer}
     */
    getCurrentMainLayer: function () {
        if (!cc.sys.isObjectValid(this._currentScene)) return null;
        if (!cc.isFunction(this._currentScene.getMainLayer)) return null;
        return this._currentScene.getMainLayer();
    },

    /**
     * @param {number|ck.SceneID} id
     * @return {ck.AssetInfo[]}
     */
    getSceneAssets: function (id) {
        return this._config.getSceneAssets(id);
    },

    /**
     * @param {number} id
     */
    loadSceneAssets: function (id) {
        const assets = this.getSceneAssets(id);
        if (!assets || assets.length < 1) return;
        assets.forEach(asset => ck.loader.loadAsset(asset));
    },

    /**
     * @return {ck.BaseScene|null}
     */
    getCurrentScene: function () {
        if (!ck.isValid(this._currentScene)) return null;
        return this._currentScene;
    },

    getCurrentManager: function () {
        let mainLayer = this.getCurrentMainLayer();
        if (!mainLayer || !cc.isFunction(mainLayer.getManager)) return null;
        return mainLayer.getManager();
    },
});

/**
 * @class
 * @extends ck.LoadingManager
 */
let LoadingManager = ck.LoadingManager;

/**
 * @return {LoadingManager}
 */
LoadingManager.create = function () {
    return new LoadingManager();
};

/**
 * @constant
 * @type {string}
 */
ck.LoadingManager.CONFIG_FILE = "configs/LoadingConfig.json";
