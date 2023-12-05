fr.Google = cc.Class.extend({
    _pluginUser: null,
    _agent: null,

    /**
     * Initial
     */
    init: function () {
        if (!plugin.PluginManager) return false;
        if (this._pluginUser) return true;
        const pluginManager = plugin.PluginManager.getInstance();
        this._pluginUser = pluginManager.loadPlugin("UserGoogle");
        if (!this._pluginUser) {
            cc.log("[fr.Google] Load plugin \"UserGoogle\" failed !!");
            return false;
        }
        this._pluginUser.configDeveloperInfo({googleClientID: fr.Google.CLIENT_ID});
        return true;
    },

    /**
     * Return user google ID
     * @returns {string} User google ID
     */
    getUserID: function () {
        return this._pluginUser ? this._pluginUser.callStringFuncWithParam("getUserID") : "";
    },

    // MARK: LOG IN & LOG OUT

    /**
     * Log In using Facebook
     * @param {Function} callback callback(Number, String, String) - callback(returnCode, token, id) - returnCode is fr.Google.ReturnCode.Login
     */
    login: function (callback) {
        if (!this.init()) {
            callback && callback(fr.Google.ReturnCode.Login.FAILED, "", "");
            return;
        }
        if (!this._pluginUser) {
            callback && callback(fr.Google.ReturnCode.Login.FAILED, "", "");
            return;
        }
        this._pluginUser.login(callback);
    },

    /**
     * Log Out google
     */
    logout: function () {
        if (!this._pluginUser) return;
        this._pluginUser.logout();
    },
});

fr.Google.ReturnCode = {
    Login: {
        SUCCEED: 0,
        FAILED: 1
    },
};

// noinspection SpellCheckingInspection
fr.Google.CLIENT_ID = "381952236417-a5kc318okeh1v96nb4s16rlacqdt4bcp.apps.googleusercontent.com";

fr.Google._instance = null;

fr.Google.getInstance = function () {
    if (!fr.Google._instance) {
        fr.Google._instance = new fr.Google();
    }
    return fr.Google._instance;
};

/**
 * @type {fr.Google}
 */
fr.google = fr.Google.getInstance();
