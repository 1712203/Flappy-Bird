// noinspection JSUnusedLocalSymbols
/**
 * Everything about login<br/>
 * Login flow:<br/>
 *      0: Run login scene <br/>
 *      1: Reset player data (except login)<br/>
 *      2: Get login data (from portal, from cache, login fb/gg/id, etc,). <br/>
 *      6: Request session key (if login without portal && login with fb/gg) <br/>
 *      4: Request balancer (update config) <br/>
 *      5: Connect server (choose server from list servers in config) <br/>
 *      6: Handshake (if failed, try another server - back to step #4) <br/>
 *      7: Send LoginRequest (if failed, try another server - back to step #4) <br/>
 *      8: When login success, save login data to cache (session key) <br/>
 * <br/>
 * Disconnect flow:<br/>
 *      0: Popup disconnect<br/>
 *      1: Start Login flow again (gm.login.start())<br/>
 * <br/>
 * Logout flow:<br/>
 *      0: Reset all modules, cache<br/>
 *      1: Send Logout request & disconnect<br/>
 *      1: If using portal back to portal, else back to LoginScene<br/>
 *
 * @class
 * @extends ck.BaseManager
 */
ck.LoginManager = ck.BaseManager.extend({

    /** @type {ck.LoginConfig} */
    _config: null,

    /** @type {ck.LoginData} */
    _data: null,

    /** @type {ck.LoginHandler} */
    _handler: null,

    /** @type {ck.LoginLayer} */
    _view: null,

    /** @type {number} */
    _connectTimeout: -1939,

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
        return ck.LoginManager.CONFIG_FILE;
    },

    /**
     * Create config object
     * @return {LoginConfig}
     * @override
     */
    _createConfig: function () {
        return LoginConfig.create();
    },

    /**
     * Create data
     * @override
     * @return {ck.LoginData}
     */
    _createData: function() {
        return ck.LoginData.create();
    },

    /**
     * @return {LoginHandler}
     * @override
     */
    _createHandler: function () {
        return LoginHandler.create();
    },

    /**
     * @override
     * @return {SceneID|number}
     */
    _getSceneID: function () {
        return SceneID.LOGIN;
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
     * @return {LoginData}
     */
    getData: function () {
        return this._data;
    },

    /**
     * @return {LoginConfig}
     */
    getConfig: function () {
        return this._config;
    },

    // endregion

    // region Start login flow

    start: function () {
        let layer = this.runViewAsScene();
        this._data.resetBalancerRequestCount();
        this.resetPlayerData();
        let hasData = this.readLoginData();
        layer.setLoginMethodsVisible(!hasData);
        if (hasData) {
            this.requestBalancer();
        }
    },

    /**
     * @override
     * @return {boolean}
     */
    isResetDataOnLogin: function () {
        return false;
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
        const isUsingPortal = cc.director.isUsePortal && cc.director.isUsePortal();
        if (isUsingPortal) {
            this._data.setSessionKey(fr.NativePortal.getInstance().getSessionKey());
            let socialType = fr.NativePortal.getInstance().getSocialType();
            cc.log("PORTAL------------------socialType: ", socialType);
            if (socialType === "facebook") {
                this._data.setLoginType(ck.LoginType.FACEBOOK);
            } else if (socialType === "google") {
                this._data.setLoginType(ck.LoginType.GOOGLE);
            } else if (socialType === "apple") {
                this._data.setLoginType(ck.LoginType.APPLE);
            }  else if (socialType === "guest") {
                this._data.setLoginType(ck.LoginType.GUEST);
            } else {
                this._data.setLoginType(ck.LoginType.NONE);
            }
            return true;
        }
        return this._data.loadCache();
    },

    // endregion

    // region LOGIN WITHOUT PORTAL

    loginWithID: function (id) {
        cc.log("[LoginManager] <loginWithID>", id);

        this._data.setUserID(Math.max(id, 1));
        this.requestBalancer();
    },

    loginWithFacebook: function () {
        this._data.setLoginType(LoginType.FACEBOOK);
        fr.facebook.login(this.onFacebookLoginResponse.bind(this));
    },

    onFacebookLoginResponse: function (returnCode, data) {
        const isSucceed = returnCode === fr.Facebook.ReturnCode.Login.SUCCEED;
        if (isSucceed) {
            this._data.setFacebookToken(data ? data["accessToken"] : "");
            this._data.setFacebookID(fr.facebook.getUserID());
            this.requestSessionKey();
        } else {
            this.showPopupFacebookLoginFailed(returnCode);
        }
    },

    showPopupFacebookLoginFailed: function (code) {
        const popup = gm.notice.error(gm.localize.getText("TXT_FACEBOOK_LOGIN_FAILED"), code);
        if (!popup) return null;
        popup.setButtonText(gm.localize.getText("TXT_RETRY"));
        popup.setCallback(this.loginWithFacebook.bind(this));
        return popup;
    },

    loginWithGoogle: function () {
        this._data.setLoginType(LoginType.GOOGLE);
        fr.google.login(this.onGoogleLoginResponse.bind(this));
    },

    onGoogleLoginResponse: function (returnCode, token, id) {
        const isSucceed = returnCode === fr.Google.ReturnCode.Login.SUCCEED;
        if (isSucceed) {
            this._data.setGoogleToken(token || "");
            this._data.setGoogleID(fr.google.getUserID());
            this.requestSessionKey();
        } else {
            this.showPopupGoogleLoginFailed(returnCode);
        }
    },

    showPopupGoogleLoginFailed: function (code) {
        const popup = gm.notice.error(gm.localize.getText("TXT_GOOGLE_LOGIN_FAILED"), code);
        if (!popup) return null;
        popup.setButtonText(gm.localize.getText("TXT_RETRY"));
        popup.setCallback(this.loginWithGoogle.bind(this));
        return popup;
    },

    loginWithApple: function () {
        this._data.setLoginType(LoginType.APPLE);
        fr.apple.login(this.onAppleLoginResponse.bind(this));
    },

    onAppleLoginResponse: function (returnCode, token, id) {
        const isSucceed = returnCode === fr.Apple.ReturnCode.Login.SUCCEED;
        if (isSucceed) {
            this._data.setAppleToken(token || "");
            this._data.setAppleID(fr.apple.getUserID());
            this.requestSessionKey();
        } else {
            this.showPopupAppleLoginFailed(returnCode);
        }
    },

    showPopupAppleLoginFailed: function (code) {
        const popup = gm.notice.error(gm.localize.getText("TXT_APPLE_LOGIN_FAILED"), code);
        if (!popup) return null;
        popup.setButtonText(gm.localize.getText("TXT_RETRY"));
        popup.setCallback(this.loginWithApple.bind(this));
        return popup;
    },

    // endregion

    // region BALANCER

    /**
     * Send balancer request (http get);
     */
    requestBalancer: function () {
        const text = gm.localize.getText("TXT_GET_SERVER_INFO");
        gm.notice.showSpinner(text);

        this._data.countBalancerRequest();
        const serverInfo = this._config.getCurrentServerInfo();
        let url = serverInfo ? this.formatBalancer(serverInfo.getBalancerURL()) : "";
        cc.log("[LoginManager] <requestBalancer>", url);
        NetworkUtils.sendHttpGetJson(url, this.onBalancerResponse.bind(this));
    },

    formatBalancer: function (url) {
        if (!url) return "";
        let result = url;
        
        let cachedUserID = ck.cache.getNumber(ck.LoginManager.CACHE_KEY_USER_ID,0);
        if (cachedUserID > 0) {
            result += "&userId=" + cachedUserID.toString();
        }

        let deviceID = fr.wrapper.getDeviceID();
        if (deviceID) {
            result += "&deviceId=" + deviceID;
        }
        return result;
    },

    /**
     * Balancer callback
     * @param {boolean} isSuccess
     * @param {Object} obj
     * @callback
        */
    onBalancerResponse: function (isSuccess, obj) {
        cc.log("[LoginManager] <onBalancerResponse>", isSuccess, JSON.stringify(obj));
        /** @type {ServerInfo} */
        let serverInfo = null;
        if (isSuccess) {
            gm.notice.hideSpinner();
            this._data.resetBalancerRequestCount();
            serverInfo = this._config.getCurrentServerInfo();
            if (serverInfo && obj) {
                const ip = obj["ip"] || "";
                const port = obj["port"] || 0;
                serverInfo.addAddress(ip, port);
                serverInfo.setAddressIndexToLast();
            }
            this.connectAndLogin();
        } else {
            // If balancer request count reach max
            if (this._data.getBalancerRequestCount() >= this._config.getMaxBalancerRequest()) {
                // Connect and login with address in config
                gm.notice.hideSpinner();
                this.connectAndLogin();
            } else {
                // Else, retry with another balancer url
                serverInfo = this._config.getCurrentServerInfo();
                if (serverInfo) serverInfo.increaseBalancerIndex();
                this.requestBalancer();
            }
        }
    },

    // endregion

    // region SESSION KEY

    getSessionKeyURL: function () {
        const prefix = this._config.getSessionKeyURL();
        const clientInfo = "pisti";
        const gameID = this._config.getGameID();
        const deviceID = fr.wrapper.getDeviceID();
        const socialName = this._data.getSocialName();
        const accessToken = this._data.getAccessToken();
        const packageName = fr.wrapper.getPackageName();
        const secretKey = this._config.getSecretKey();
        const mac = md5(socialName + accessToken + clientInfo + deviceID + gameID + secretKey);
        return prefix +
            "?service_name=getSessionKey" +
            "&clientInfo=" + clientInfo +
            "&gameId=" + gameID +
            "&deviceId=" + deviceID +
            "&social=" + socialName +
            "&accessToken=" + accessToken +
            "&appName=" + packageName +
            "&isSpam=1" +
            "&mac=" + mac;
    },

    /**
     * Send session request (http get);
     * @private
     */
    requestSessionKey: function () {
        const text = gm.localize.getText("TXT_GETTING_SESSION_KEY");
        gm.notice.showSpinner(text);

        const url = this.getSessionKeyURL();
        cc.log("<requestSessionKey>", url);
        NetworkUtils.sendHttpGetJson(url, this.onSessionKeyResponse.bind(this));
    },


    /**
     * Session key response
     * @param {boolean} isSuccess
     * @param {Object} obj
     * @callback
        */
    onSessionKeyResponse: function (isSuccess, obj) {
        if (isSuccess && obj) {
            const sessionKey = obj["sessionKey"] || "";
            this._data.setSessionKey(sessionKey);
            this.requestBalancer();
        } else {
            this.requestSessionKey();
        }
    },

    // endregion

    // region CONNECT, SEND LOGIN, REQUEST USER PROFILE

    connectAndLogin: function (address) {
        if (!address) {
            const serverInfo = this._config.getCurrentServerInfo();
            const serverID = this._config.getCurrentServerID();
            // cc.log("[LoginManager] <connectAndLogin> server",serverID, JSON.stringify(serverInfo));
            if (!serverInfo) return;
            address = serverInfo.getCurrentAddress();
            serverInfo.increaseAddressIndex();
        }
        cc.log("[LoginManager] <connectAndLogin>", JSON.stringify(address));
        if (!address) return;

        const text = gm.localize.getText("TXT_CONNECTING");
        gm.notice.showSpinner(text);

        this._connectTimeout = setTimeout(this.onServerConnectTimeout.bind(this), ck.LoginManager.CONNECT_TIMEOUT);

        gm.network.connect(address.getIP(), address.getPort(), this.onServerConnected.bind(this));
    },

    clearConnectTimeout: function () {
        if (this._connectTimeout >= 0) {
            clearTimeout(this._connectTimeout);
            this._connectTimeout = -1939;
        }
    },

    onServerConnected: function (isSuccess) {
        cc.log("[LoginManager] <onServerConnected>", isSuccess);
        this.clearConnectTimeout();

        if (isSuccess) {
            this._handler.sendHandshakeRequest();
        } else {
            // Retry
            this.connectAndLogin();
        }
    },

    onServerConnectTimeout: function () {
        cc.log("[LoginManager] <onServerConnectTimeout>");
        this.clearConnectTimeout();
        this.connectAndLogin();
    },

    onLoginSuccess: function () {
        this.requestUserData();
        gm.loading.runViewAsScene();
        this._data.cache();
        pm.payment.init(gm.payment.config.getProductID(), this._data.getSessionKey(), false, this.isLive());
        ck.fireEvent(ck.LoginEvents.ON_LOGIN_SUCCESS);
    },

    requestUserData: function () {
        gm.requestDataAfterLogin();
    },

    // endregion

    // region LOGOUT

    logout: function () {
        cc.log("Logout!!!!!");
        // Logout plugin
        if (this._data.isFacebook()) {
            fr.facebook.logout();
        } else if (this._data.isGoogle()) {
            fr.google.logout();
        }

        // Reset all player data
        this.resetPlayerData();
        this._data.reset();
        this._data.clearCache();

        // Send logout and disconnect
        this._handler.sendLogout();
        gm.network.disconnect();

        // Back to portal / login scene;
        const isUsingPortal = cc.director.isUsePortal && cc.director.isUsePortal();
        if (isUsingPortal) {
            fr.NativeService && fr.NativeService.endGame();
        } else {
            this.runViewAsScene();
        }
    },

    /**
     * Set server connect id
     * @param {string|ServerID} id
     */
    setServerConnect: function (id) {
        this._config.setServerConnect(id);
    },

    /**
     * @param {LoginInfoResponse} response
     */
    onLoginInfoResponse: function (response) {
        if (gm.profile.isUserBanned()) {
            gm.profile.checkShowRefundBanPopup();
            return;
        }

        this.onLoginSuccess();

        const profileData = gm.profile.getData();
        profileData.setID(response.getID());
        profileData.setPlayerName(response.getPlayerName());
        profileData.setLevel(response.getLevel());
        profileData.setCoin(response.getCoin());
        const avatar = response.getAvatar();
        profileData.setAvatar(avatar);
        gm.avatar.getData().saveAvatar(response.getID(), avatar);
        profileData.setSnsID(response.getSNSID());
        profileData.setPortalID(response.getPortalID());
        profileData.setXP(response.getXP());

        const tutorial = gm.tutorial.getData();
        tutorial.setFinished(response.isTutorialFinished());

        // Set language from server
        gm.localize.setLanguageServer(response.getLanguageID());

        // Request user info once after login
        gm.profile.requestUserInfo(profileData.getID());

        // Tracker
        if (this.isLive()) {
            cc.log("[ck.LoginManager] <onLoginInfoResponse> Init tracker: ", profileData.getID(), this._data.getSocialName(), response.getSNSID(), profileData.getPlayerName(), profileData.getPortalID());
            fr.wrapper.trackLoginGSN(profileData.getID(), this._data.getSocialName(), response.getSNSID(), profileData.getPlayerName(), profileData.getPortalID());
        }
        cc.log("LOGIN----------------------this._data.getSocialName()", this._data.getSocialName());

        // Cache User ID
        ck.cache.setNumber(ck.LoginManager.CACHE_KEY_USER_ID, profileData.getID());
        fr.wrapper.crashlyticsSetUserIdentifier(profileData.getID().toString());

        // Check invite friend deeplink
        let deepLinkData = gm.inviteFriend.getData().getDeepLinkData();
        if (deepLinkData && deepLinkData.code) {
            gm.system.writeSystemLog(ck.SystemLogKey.SUBMIT_INVITE_CODE_FROM_DEEP_LINK);
            gm.inviteFriend.getHandler().sendInviteFriendSubmit(deepLinkData.code);
            gm.inviteFriend.getData().setDeepLinkData(null);
            fr.firebaseAnalytic.resetDynamicLink();
        }
    },

    isLocal: function () {
        return this._config.getCurrentServerID() === ServerID.LOCAL;
    },

     isLive: function () {
        return this._config.getCurrentServerID() === ServerID.LIVE;
    },

    getVersionCode: function () {
        return cc.formatStr("v%s.%d.%d", this._config.getBuildVersion(), this._config.getClientVersion(), this._config.getCurrentServerID());
    },

    // endregion
});

/**
 * @class
 * @extends ck.LoginManager
 */
let LoginManager = ck.LoginManager;

/**
 * @returns {LoginManager}
 */
LoginManager.create = function () {
    return new LoginManager();
};

/**
 * @constant
 * @type {number}
 */
ck.LoginManager.CONNECT_TIMEOUT = 5000;

/**
 * @constant
 * @type {string}
 */
ck.LoginManager.CONFIG_FILE = "configs/LoginConfig.json";

ck.LoginManager.CACHE_KEY_USER_ID = "USER_ID";

