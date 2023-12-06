/**
 * Each module usually has a manager class to manager things <br/>
 * This class used as base class for a module manager (Ex. QuestManager, ProfileManager, etc) <br/>
 *
 * A fully functions manager has: <br/>
 *  - view: Can be Scene, Popup, etc. -> Represent for this module data <br/>
 *  - data: Contains all data this module need <br/>
 *  - config: Contains config data <br/>
 *  - handler: Send/Receive/Handle network packets <br/>
 *  - network: Network Manager used for init the handler <br/>
 *
 * How to use: <br/>
 * Override which function you want your module to have. <br/>
 * Example, if your module only has config -> just override `_createConfig` and `_getConfigFile` <br/>
 * If your module has data and handler -> override `_createData` and `_createHandler` and `_getNetworkManager` <br/>
 *
 * @class
 * @abstract
 * @extends cc.Class
 * @property {ck.BaseData} data
 * @property {ck.BaseConfig} config
 * @property {ck.NetworkHandler} handler
 * @property {ck.BaseView} view
 */
ck.BaseManager = cc.Class.extend({

    /**
     * Data for this module
     * @type {ck.BaseData}
     */
    _data: null,

    /**
     * Store config for this module (read from local json or server)
     * @type {ck.BaseConfig}
     */
    _config: null,

    /**
     * Main view for this module
     * @type {ck.BaseView}
     */
    _view: null,

    /**
     * @type {boolean}
     */
    _isSettingDataWhenShowView: true,

    /**
     * @type {function(ck.BaseScene): void}
     */
    _sceneLoadedCallback: null,

    /**
     * @constructor
     */
    ctor: function () {
        this._initConfig();
        this._initData();
    },

    /**
     * Returns config json file
     * @return {string}
     * @virtual
     */
    _getConfigFile: function () {
        return "";
    },

    /**
     * Create config object
     * @return {ck.BaseConfig|null}
     * @virtual
     */
    _createConfig: function () {
        return null;
    },

    /**
     * Create data object
     * @virtual
     * @return {ck.BaseData|null}
     */
    _createData: function() {
        return null;
    },

    /**
     * Create handler
     * @virtual
     * @return {ck.NetworkHandler|null}
     */
    _createHandler: function () {
        return null;
    },

    /**
     * Used in case main view is not a scene (Ex. Popup, layer, node, etc.)
     * @virtual
     * @return {ck.BaseView|null}
     */
    _createView: function () {
        return null;
    },

    /**
     * Returns scene id of the main view (if main view is a main layer in a scene)
     * Override me if your main view is a main layer in a scene
     * This ID used to load that scene
     * @virtual
     * @return {Number}
     */
    _getSceneID: function () {
        return -1;
    },

    _initConfig: function () {
        this._config = this._createConfig();
    },

    _initData: function () {
        this._data = this._createData();
    },

    /**
     * Init some basic stuff for a view and show it
     * @param {ck.BaseView} view
     */
    _initViewAndShow: function (view) {
        if (!view) return;
        view.setManager(this);
        if (this._isSettingDataWhenShowView) {
            view.setData(this._data);
        }
        view.setOnExitCallback(this.resetView.bind(this));
        view.show();
    },

    /**
     * @param {ck.BaseView} view
     */
    setView: function (view) {
        this._view = view;
        if (!view) return;
        view.setManager(this);
        view.setData(this._data);
        view.setOnExitCallback(this.resetView.bind(this));
    },

    /**
     * Reset view to null
     * Usually call when close the view
     */
    resetView: function () {
        this._view = null;
    },

    /**
     * Reset data
     * Usually call when logout, before login, etc.
     */
    resetData: function () {
        if (this._data) this._data.reset();
    },

    /**
     * @return {boolean}
     */
    isResetDataOnLogin: function () {
        return true;
    },

    /**
     * Returns data 
     * @returns {ck.BaseData}
     */
    getData: function () {
        return this._data;
    },

    /**
     * Returns view
     * @returns {ck.BaseView}
     */
    getView: function () {
        return this._view;
    },

    /**
     * Returns config
     * @returns {ck.BaseConfig}
     */
    getConfig: function () {
        return this._config;
    },

    /**
     * Loading config from local file
     * Usually call when init/loading the game
     */
    loadConfig: function () {
        if (this._config) this._config.load(this._getConfigFile());
    },

    /**
     * Show the view (used for popup, layer, etc - anything excepts cc.Scene)
     * @param {cc.Node} [parent]
     * @returns {cc.Node|ck.BaseView}
     */
    showView: function (parent) {
        if (ck.isValid(this._view)) {
            this._view.show();
            return this._view;
        }
        parent = parent || gm.loading.getCurrentScene();
        if (!ck.isValid(parent)) return null;
        this._view = this._createView();
        if (!this._view) return null;
        parent.addChild(this._view);
        this._initViewAndShow(this._view);
        return this._view;
    },

    hideView: function () {
        if (ck.isValid(this._view) && this._view.isVisible()) {
            this._view.hide();
        }
    },

    /**
     * Load the scene of this module
     * Used in case main view is a main layer in a scene
     * @param {function(ck.BaseScene): void} [callback=null]
     */
    loadViewAsScene: function (callback = null) {
        const sceneID = this._getSceneID();
        if (sceneID <= 0) {
            cc.error("[BaseManager] - loadViewAsScene - sceneID is %d", sceneID);
            callback && callback(null);
            return;
        }
        this._sceneLoadedCallback = callback;
        gm.loading.loadScene(sceneID, this.onSceneLoaded.bind(this));
    },

    onSceneLoaded: function (scene) {
        if (!scene) return;
        if (scene instanceof ck.BaseScene) {
            this._view = scene.getMainLayer();
            this._initViewAndShow(this._view);
            if (this._sceneLoadedCallback) {
                this._sceneLoadedCallback(scene);
                this._sceneLoadedCallback = null;
            }
        }
    },

    /**
     * Run the scene of this module (without loading)
     * Used in case main view is a main layer in a scene
     * @param {function(): void} [callback=null]
     * @returns {cc.Node|ck.BaseView} The main view of this module
     */
    runViewAsScene: function (callback = null) {
        const loading = gm.loading;
        if (!loading) return null;
        const scene = loading.runScene(this._getSceneID(), callback);
        if (!scene) return null;
        this.onSceneLoaded(scene);
        return this._view;
    },

    /**
     * Request module data from server after login success
     * @virtual
     */
    requestData: function () {

    },

    /**
     * Load cache (called when game start)
     */
    loadCache: function () {

    },

    getSceneID: function () { return this._getSceneID(); },

    /**
     * @param {ck.BroadcastInfo} broadcast
     */
    onBroadcast: function (broadcast) {

    },

    viewIsShown: function (){
        return ck.isValid(this._view) && this._view.isShown();
    }

});

let _p = ck.BaseManager.prototype;
cc.defineGetterSetter(_p, "data", _p.getData);
cc.defineGetterSetter(_p, "config", _p.getConfig);
cc.defineGetterSetter(_p, "handler", _p.getHandler);
cc.defineGetterSetter(_p, "view", _p.getView);
_p = null;
