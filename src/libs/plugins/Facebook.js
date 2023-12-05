fr.Facebook = cc.Class.extend({
    _pluginUser: null,
    _agent: null,

    /**
     * Initial
     */
    init: function () {
        if (!plugin.PluginManager) return false;
        if (this._pluginUser) return true;
        const pluginManager = plugin.PluginManager.getInstance();
        this._pluginUser = pluginManager.loadPlugin("UserFacebook");
        this._pluginUser.callFuncWithParam("activateApp");
        this._agent = plugin.FacebookAgent.getInstance();
        return true;
    },

    /**
     * Return user facebook ID
     * @returns {string} User facebook ID
     */
    getUserID: function () {
        return this._pluginUser ? this._pluginUser.callStringFuncWithParam("getUserID") : "";
    },

    // MARK: LOG IN & LOG OUT

    /**
     * Log In using Facebook
     * @param {Function} callback callback(Number, Object) - callback(returnCode, data) - returnCode is fr.Facebook.ReturnCode.Login
     */
    login: function (callback) {
        if (!this._pluginUser || !this._agent) {
            callback && callback(fr.Facebook.ReturnCode.Login.FAILED, null);
            return;
        }
        if (this.isLoggedIn()) {
            this.logout();
        }
        const permissions = ["public_profile", "email"];
        this._agent.login(permissions, callback);
    },

    /**
     * Returns is logged in with facebook or not
     * @returns True if user is logged in with facebook
     */
    isLoggedIn: function () {
        return this._pluginUser && this._pluginUser.isLoggedIn();
    },
    
    /**
     * Log Out facebook
     */
    logout: function () {
        if (!this._pluginUser) return;
        this._pluginUser.logout();
    },

    /**
     * Invite friends to play our game
     * @param {Array<Number>} ids Friend ids
     * @param {string} message Message send to friend
     * @param {string} title Message title
     * @param {Function} callback - callback(returnCode, message) - returnCode is fr.Facebook.ReturnCode.Invite
     */
    invite: function (ids, message, title, callback) {
        if (!ids || ids.length < 1) {
            callback && callback(fr.Facebook.ReturnCode.Invite.FAILED, "ids is empty!");
            cc.warn("fr.Facebook.invite: ids is empty!");
            return;
        }
        if (!this._agent) {
            callback && callback(fr.Facebook.ReturnCode.Invite.FAILED, "this._agent is null");
            cc.warn("fr.Facebook.invite: this._agent is null");
            return;
        }
        title = title || "Play with me";
        message = message || "Let's play together";
        const idStrings = [];
        ids.forEach(function(id){
            idStrings.push("'" + id + "'");
        });
        const toStr = idStrings.join(',');
        const map = {
            "message": message,
            "title": title,
            "to": toStr
        };
        this._agent.appRequest(map, callback);
    },

    // MARK: SHARE

    /**
     * Share something on Facebook
     * @param {Object} info Info to share
     * @param {Function} callback callback(Number, String) - callback(returnCode, message) - returnCode is fr.Facebook.ReturnCode.Share
     */
    share: function (info, callback) {
        if (!this._agent) {
            callback && callback(fr.Facebook.ReturnCode.Share.FAILED, "this._agent is null");
            cc.warn("fr.Facebook.share: this._agent is null");
            return;
        }
        this._agent.dialog(info, callback);
    },

    /**
     * Share photo on Facebook
     * @param {string} imagePath Image file path
     * @param {Function} callback callback(Number, String) - callback(returnCode, message) - returnCode is fr.Facebook.ReturnCode.Share
     */
    sharePhoto: function (imagePath, callback) {
        this.share({"dialog": "sharePhoto","photo": imagePath}, callback);
    },
});

fr.Facebook.ReturnCode = {
    Login: {
        SUCCEED: 0,
        FAILED: 1
    },
    Invite: {
        SUCCEED: 0,
        FAILED: 1
    },
    Share: {
        SUCCEED: 0,
        NO_APP: 1,
        CANCELED: 2,
        FAILED: -1
    }
};

fr.Facebook._instance = null;

fr.Facebook.getInstance = function () {
    if (!fr.Facebook._instance) {
        fr.Facebook._instance = new fr.Facebook();
    }
    return fr.Facebook._instance;
};

/**
 * @type {fr.Facebook}
 */
fr.facebook = fr.Facebook.getInstance();
