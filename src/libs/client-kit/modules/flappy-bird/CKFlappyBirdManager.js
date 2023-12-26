// noinspection JSUnusedLocalSymbols
/**
 * @class
 * @extends ck.BaseManager
 */
ck.FlappyBirdManager = ck.BaseManager.extend({

    /** @type {ck.FlappyBirdData} */
    _data: null,

    /** @type {ck.FlappyBirdConfig} */
    _config: null,

    /**
     * @constructor
     */
    ctor: function () {
        ck.BaseManager.prototype.ctor.call(this);
    },

    // region Overrides

    /**
     * Get config file path
     * @return {String}
     * @override
     */
    _getConfigFile: function () {
        return ck.FlappyBirdManager.CONFIG_FILE;
    },

    /**
     * Create config object
     * @return {FlappyBirdConfig}
     * @override
     */
    _createConfig: function () {
        return FlappyBirdConfig.create();
    },

    /**
     * Create data
     * @override
     * @return {ck.LoginData}
     */
    _createData: function() {
        return ck.FlappyBirdData.create();
    },

    /**
     * @return {LoginHandler}
     * @override
     */
    _createHandler: function () {
        return null;
    },

    /**
     * @override
     * @return {SceneID|number}
     */
    _getSceneID: function () {
        return SceneID.FLAPPY_BIRD;
    },

    /**
     * @override
     * @return {null}
     */
    _createView: function () {
        return null;
    },

    /**
     * @override
     */
    requestData: function () {

    },

    /**
     * @return {FlappyBirdData}
     */
    getData: function () {
        return this._data;
    },

    /**
     * @return {FlappyBirdConfig}
     */
    getConfig: function () {
        return this._config;
    },

    // endregion

    // region Start login flow

    start: function () {
        cc.log("<ck.FlappyBirdManager>: start");
        let layer = this.runViewAsScene();
    },

    /**
     * Reset all modules except login
     */
    resetPlayerData: function () {
        gm.resetDataOnLogin();
    },

    /**
     * Read login data from portal or from cache
     * @returns {boolean} Whether can get data from portal/cache or not (has data or not)
     */
    readLoginData: function () {

    },

    // endregion

    // region LOGIN WITHOUT PORTAL
});

/**
 * @class
 * @extends ck.FlappyBirdManager
 */
let FlappyBirdManager = ck.FlappyBirdManager;

/**
 * @returns {FlappyBirdManager}
 */
FlappyBirdManager.create = function () {
    return new FlappyBirdManager();
};

ck.FlappyBirdManager.CONFIG_FILE = "configs/FlappyBirdConfig.json";