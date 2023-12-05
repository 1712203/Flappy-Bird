fr.Apple = cc.Class.extend({
    _pluginUser: null,

    /**
     * Initial
     */
    init: function () {
        if (!plugin.PluginManager) return false;
        if (this._pluginUser) return true;
        const pluginManager = plugin.PluginManager.getInstance();
        this._pluginUser = pluginManager.loadPlugin("AppleID");
        if(!this._pluginUser) cc.log("[fr.Apple] Load plugin \"AppleID\" failed !!");
        else this._pluginUser.configDeveloperInfo({});
        return true;
    },

    /***
     *
     * @param callback
     */
    login: function (callback) {
        cc.log("[fr.Apple] login");
        if(!this._pluginUser)
        {
            cc.log("[fr.Apple] this._pluginUser is NULL");
            callback(fr.Apple.ReturnCode.Login.NOT_INIT, "");
            return;
        }
        const self = this;
        this._pluginUser.login(function (result, msg) {
            callback(result, msg, self.getUserID(), self.getFullName());
        });

    },

    getUserID: function(){
        return this._pluginUser ? this._pluginUser.callStringFuncWithParam("getUserID") : "";
    },

    getFullName: function() {
        return this._pluginUser ? this._pluginUser.callStringFuncWithParam("getFullName") : "";
    },

    getEmail: function() {
        return this._pluginUser ? this._pluginUser.callStringFuncWithParam("getEmail") : "";
    }
});

fr.Apple.ReturnCode = {
    Login: {
        SUCCEED: 0,
        FAILED: 1,
        NOT_INIT: 100
    },
};

fr.Apple._instance = null;

fr.Apple.getInstance = function () {
    if (!fr.Apple._instance) {
        fr.Apple._instance = new fr.Apple();
    }
    return fr.Apple._instance;
};

/** @type {fr.Apple} */
fr.apple = fr.Apple.getInstance();
