const ModuleNameManager = ck.BaseEventManager.extend({
    _queueCallbackAfterInitView: null,

    //region Constructor
    ctor: function () {
        this._super();
        this._init();
    },

    _init: function () {
        this._queueCallbackAfterInitView = [];
    },

    resetData: function () {
        this._super();
        this._init();
    },

    _createData: () => ModuleNameData.create(),
    _createHandler: () => ModuleNameHandler.create(),
    _createView: () => ModuleNameLayer.create(),
    _createConfig: () => ModuleNameConfig.create(),
    _getConfigFile: () => ModuleNameManager.CONFIG_FILE,
    _getSceneID: () => SceneID.DUAL_WHEEL,

    /** @returns {ModuleNameData} */
    getData: function () { return this._super(); },

    /** @returns {ModuleNameLayer} */
    getView: function () { return this._super(); },

    /** @returns {ModuleNameHandler} */
    getHandler: function () { return this._super(); },

    /** @returns {ModuleNameConfig} */
    getConfig: function () { return this._super(); },

    /** @returns {ModuleNameBanner} */
    _createBanner: function () { return ModuleNameBanner.create(); },

    /** @return {ModuleNameEventIcon} */
    _createIcon: function () { return ModuleNameEventIcon.create(); },

    play: function () {
    },

    exit: function () {
        gm.profile.requestInfo();
        gm.home.runHomeScene();
        this.getHandler().sendModuleNameLeaveRequest();
        if (this.getView()) this.getView().removeFromParent(true);
    },

    gotoPisti: function () {
        gm.pisti.play();
        this.getHandler().sendModuleNameLeaveRequest();
        if (this.getView()) this.getView().removeFromParent(true);
    },

    /**
     * @override
     */
    _initViewAndShow: function (view) {
        if (!view) return null;
        this._super(view);
        this.updateViewAfterInit();
    },

    updateViewAfterInit: function () {
        for (let i = 0; i < this._queueCallbackAfterInitView.length; i++) {
            let func = this._queueCallbackAfterInitView[i];
            if (cc.isFunction(func)) func();
        }
        this._queueCallbackAfterInitView = [];
    },

    addCallFuncAfterInitView: function (func) {
        this._queueCallbackAfterInitView.push(func);
    },

    /**
     * @override
     * @return {boolean}
     */
    hasIconRedDot: function () { return this._data.getToken() > 0; },

    /**
     * @override
     * @return {number}
     */
    getNumRedDot: function () { return this._data.getToken(); },
});

ModuleNameManager.CONFIG_FILE = "configs/ModuleNameConfig.json";

/**
 * @return {ModuleNameManager}
 */
ModuleNameManager.create = function () {
    return new ModuleNameManager();
};