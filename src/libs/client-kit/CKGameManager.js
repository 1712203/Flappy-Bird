/**
 * Manager game modules
 *
 * @class
 * @extends cc.Class
 *
 * @property {ck.LocalizeManager} localize
 * @property {ck.LoadingManager} loading
 * @property {ck.BaseFeatureManager[]} features
 *
 */
ck.GameManager = cc.Class.extend({
    /** @type {cc.Size} */
    _designSize: cc.size(640, 1136),

    /** @type {string} */
    _defaultFont: "",

    /** @type {ck.LoadingManager} */
    _loading: null,

    /** @type {ck.FlappyBirdManager} */
    _flappyBird: null,

    /** @type {string} */
    _numberFont: "",

    _isPoolInit: false,

    _isMinigamesSorted: false,

    ctor: function () {
        this._managers = [];
    },

    _initManagers: function () {
        this._managers = [];

        // loading

        // basic stuffs
        this._flappyBird = ck.FlappyBirdManager.create();
        this.pushManager(this._flappyBird);

        this._loading = LoadingManager.create();
        this.pushManager(this._loading);

    },

    _initDesignSize: function () {
        ck.setDesignSize(this._designSize);
    },

    _initSearchPaths: function () {
        jsb.fileUtils.addSearchPath(fr.NativeService.getFolderUpdateAssets() + "/res", true);
        jsb.fileUtils.addSearchPath("res");
    },

    _initPlugins: function () {
        fr.wrapper.init();
        fr.tracker.init();
        fr.facebook.init();
        fr.google.init();
        fr.firebaseAnalytic.init();
        fr.fcm.init();
        if(ck.isIOS())
            fr.apple.init();
    },

    loadCache: function () {
        this._managers.forEach(manager => manager.loadCache());
    },

    /**
     * @param {ck.BaseManager} manager
     * @param {boolean} ignoreMinigame
     */
    pushManager: function (manager, ignoreMinigame=false) {
        if (!manager) return;
        this._managers.push(manager);
    },

    getLoading: function () {
        return this._loading;
    },

    getFlappyBird: function () {
        return this._flappyBird;
    },

    getDesignSize: function () {
        return this._designSize;
    },

    getDefaultFont: function () {
        return this._defaultFont;
    },

    getNumberFont: function () {
        return this._numberFont;
    },

    /** Start the game */
    start: function () {
        this._designSize = GameManager.DESIGN_SIZE;
        this._defaultFont = GameManager.DEFAULT_FONT;
        this._numberFont = GameManager.NUMBER_FONT;
        this._initDesignSize();
        this._initManagers();
        this._initSearchPaths();
        this._initPlugins();
        this.loadConfigs();
        this.loadCache();
        this._flappyBird.start();
    },


    /** Reset modules data on login */
    resetDataOnLogin: function () {
        this._managers.forEach(manager => {
            if (manager && manager.isResetDataOnLogin()) {
                manager.resetData();
            }
        });
    },

    requestDataAfterLogin: function () {
        this._managers.forEach(manager => manager && manager.requestData());
    },

    loadConfigs: function () {
        this._managers.forEach(manager => manager && manager.loadConfig());
    },

    initPools: function () {
        if (this._isPoolInit) return;
        ck.NetworkPair.initPool(5);
        this._isPoolInit = true;
    },

});

/**
 * @class
 * @extends ck.GameManager
 */
let GameManager = ck.GameManager;

/**
 * @return {GameManager}
 * @private
 */
GameManager.create = function () {
    return new GameManager();
};

/**
 * @type {GameManager}
 * @static
 * @private
 */
GameManager._instance = null;

/**
 * @return {GameManager}
 */
GameManager.getInstance = function () {
    if (!GameManager._instance) {
        GameManager._instance = GameManager.create();
    }
    return GameManager._instance;
};

/**
 * Game design size
 * @constant
 * @type {cc.Size}
 */
GameManager.DESIGN_SIZE = cc.size(640, 1136);

/**
 * Game default font path
 * @constant
 * @type {String}
 */
GameManager.DEFAULT_FONT = "fonts/BebasNeueProBold.ttf";

/**
 * Game default font path
 * @constant
 * @type {String}
 */
GameManager.NUMBER_FONT = "fonts/LilitaOneRegular.ttf";

let _p = GameManager.prototype;
cc.defineGetterSetter(_p, "loading", _p.getLoading);
cc.defineGetterSetter(_p, "flappyBird", _p.getFlappyBird);
_p = null;
