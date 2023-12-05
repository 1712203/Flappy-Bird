/**
 * @class
 * @extends cc.Class
 *
 */
fr.Wrapper = cc.Class.extend({
    _plugin: null,

    init: function () {
        if (!plugin.PluginManager) return;
        const pluginManager = plugin.PluginManager.getInstance();
        if (!pluginManager) return;
        this._plugin = pluginManager.loadPlugin("PlatformWrapper") || pluginManager.loadPlugin("Platform");
        if (this._plugin && this._plugin.configDeveloperInfo) {
            this._plugin.configDeveloperInfo({ test: "test" });
        }
    },
    
    getPhoneNumber: function () {
        if (this.getPhoneCount() > 1) return "";
        return this._plugin ? this._plugin.callStringFuncWithParam("getPhoneNumber") : "";
    },

    getMailAccount: function () {
        return this._plugin ? this._plugin.callStringFuncWithParam("getMailAccount") : "";
    },

    getDeviceModel: function () {
        return this._plugin ? this._plugin.callStringFuncWithParam("getDeviceModel") : "";
    },

    getAvailableRAM: function () {
        return this._plugin ? this._plugin.callIntFuncWithParam("getAvailableRAM") : -1;
    },

    getVersionCode: function () {
        return this._plugin ? this._plugin.callIntFuncWithParam("getVersionCode") : -1;
    },

    getOSVersion: function () {
        return this._plugin ? this._plugin.callStringFuncWithParam("getOSVersion") : "";
    },

    /**
     * @returns 0 - no network, 1: 3G, 2: Wifi
     */
    getConnectionStatus: function () {
        return this._plugin ? this._plugin.callIntFuncWithParam("getConnectionStatus") : -1;
    },

    getConnectionStatusName: function () {
        const connectionType = this.getConnectionStatus();
        switch (connectionType) {
            case 1:
                return "3g";
            case 2:
                return "wifi";
        }
        return "unknown";
    },

    getOSName: function () {
        if (cc.sys.platform === cc.sys.WIN32) {
            return "Win32";
        }
        if (cc.sys.platform === cc.sys.ANDROID) {
            return "android";
        }
        if (cc.sys.platform === cc.sys.IPAD || cc.sys.platform === cc.sys.IPHONE) {
            return "ios";
        }
        if (cc.sys.platform === cc.sys.WP8) {
            return "WindowPhone8";
        }
        return "";
    },

    getExternalDataPath: function () {
        return this._plugin ? this._plugin.callStringFuncWithParam("getExternalDataPath") : jsb.fileUtils.getWritablePath();
    },

    addNotify: function (notify) {
        if (!this._plugin) return;
        const param = new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, JSON.stringify(notify));
        this._plugin.callFuncWithParam("addNotify", param);
    },

    showNotify: function () {
        this._plugin && this._plugin.callFuncWithParam("showNotify", null);
    },

    cancelAllNotification: function () {
        this._plugin && this._plugin.callFuncWithParam("cancelAllNotification", null);
    },

    getNotificationExtraData: function () {
        return this._plugin ? this._plugin.callStringFuncWithParam("getNotificationExtraData") : "";
    },

    getStoreType: function () {
        return this._plugin ? this._plugin.callIntFuncWithParam("getStoreType") : -1;
    },

    getDeviceID: function () {
        return this._plugin ? this._plugin.callStringFuncWithParam("getDeviceID") || this.getMailAccount() : "";
    },

    /**
     * @param accountId
     * @param accountType
     * @param openAccount
     * @param zingName
     * @param portalID
     */
    trackLoginGSN: function (accountId, accountType, openAccount, zingName, portalID) {
        if (!this._plugin) return;
        const data = {
            accountId: accountId,
            accountType: accountType, // google, zingme, facebook, zalo
            openAccount: openAccount, // socialID, voi zingme la username
            zingName: zingName,
            ZPSID: portalID
        };
        const param = new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, JSON.stringify(data));
        this._plugin.callFuncWithParam("trackLoginGSN", param);
    },

    openCSApplication: function (userId) {
        if (!this._plugin) return;
        const data = "UserId: " + userId + "\n";
        const param = new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, data);
        this._plugin.callFuncWithParam("openCSApplication", param);
    },

    isInstalledApp: function (uri) {
        if (!this._plugin) return 0;
        const param = new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, uri);
        return this._plugin.callIntFuncWithParam("isInstalledApp", param);
    },

    getSimOperator: function () {
        return this._plugin ? this._plugin.callStringFuncWithParam("getSimOperator") : "";
    },

    getSimOperatorName: function () {
        return this._plugin ? this._plugin.callStringFuncWithParam("getSimOperatorName") : "";
    },

    getSimState: function () {
        return this._plugin ? this._plugin.callIntFuncWithParam("getSimState") : -1;
    },

    launchSMS: function (serviceNumber, content) {
        if (!this._plugin) return;
        const data = {
            message: content,
            recipent: serviceNumber
        };
        const param = new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, JSON.stringify(data));
        this._plugin.callFuncWithParam("sendMessage", param);
    },

    initGSNTracking: function (location) {
        if (!this._plugin) return;
        const data = {
            location: location
        };
        const param = new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, JSON.stringify(data));
        this._plugin.callFuncWithParam("initGSNTracking", param);
    },

    getPackageName: function () {
        return this._plugin ? this._plugin.callStringFuncWithParam("getPackageName") : "";
    },

    getOSSymbol: function () {
        let sym = "";
        if (cc.sys.platform === cc.sys.WIN32) {
            sym = "#Win";
        }
        if (cc.sys.platform === cc.sys.ANDROID) {
            sym = "#Android";
        }
        if (cc.sys.platform === cc.sys.IPAD || cc.sys.platform === cc.sys.IPHONE) {
            sym = "#iOS";
        }
        return sym;
    },

    logLoginFail: function (loginType, errorType, accountName, message) {
        if (!this._plugin) return;
        const data = {
            Param1: loginType,
            Param2: errorType,
            Param3: accountName,
            Param4: message
        };
        const param = new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, JSON.stringify(data));
        this._plugin.callFuncWithParam("logLoginFail", param);
    },

    launchMail: function (body, subject) {
        if (!this._plugin) return;
        const data = {
            body: body,
            subject: subject
        };
        const param = new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, JSON.stringify(data));
        this._plugin.callFuncWithParam("launchMail", param);
    },

    checkIOSMicAccess: function () {
        return this._plugin ? this._plugin.callIntFuncWithParam("checkIOSMicAccess") : 0;
    },

    getPhoneCount: function () {
        return this._plugin ? this._plugin.callIntFuncWithParam("getPhoneCount") : 1;
    },

    getPhone1: function () {
        return this._plugin ? this._plugin.callStringFuncWithParam("getPhone1") : "";
    },

    getPhone1MNC: function () {
        return this._plugin ? this._plugin.callStringFuncWithParam("getPhone1MNC") : "";
    },

    getPhone2: function () {
        return this._plugin ? this._plugin.callStringFuncWithParam("getPhone2") : "";
    },

    getPhone2MNC: function () {
        return this._plugin ? this._plugin.callStringFuncWithParam("getPhone2MNC") : "";
    },

    getDeepLink: function () {
        return this._plugin ? this._plugin.callStringFuncWithParam("getDeepLink") : "";
    },

    getInstallReferrer: function () {
        return this._plugin ? this._plugin.callStringFuncWithParam("getInstallReferrer") : "";
    },

    /**
     *
     * @param {string} str
     * @return {boolean}
     */
    copy2Clipboard: function (str) {
        if (!this._plugin) return false;
        cc.log("copy2Clipboard");
        const data = {
            label: "copied",
            text: str
        };
        const param = new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, JSON.stringify(data));
        return this._plugin.callBoolFuncWithParam("copy2Clipboard", param);
    },

    share: function (msg, title) {
        if (!this._plugin) return false;
        cc.log("share");
        const data = {
            msg: msg,
            title: title
        };
        const param = new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, JSON.stringify(data));
        return this._plugin.callBoolFuncWithParam("share", param);
    },

    isEmulator: function () {
        return this._plugin ? this._plugin.callBoolFuncWithParam("isEmulator") : false;
    },

    crashlyticsLog: function (msg) {
        if (!this._plugin) return;
        const param = new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, msg);
        this._plugin.callFuncWithParam("crashlyticsLog", param);
    },

    crashlyticsSetString: function (key, value) {
        if (!this._plugin) return;
        const data = {key: key, value: value};
        const param = new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, JSON.stringify(data));
        this._plugin.callFuncWithParam("crashlyticsSetString", param);
    },

    crashlyticsSetBool: function (key, value) {
        if (!this._plugin) return;
        const data = {key: key, value: value};
        const param = new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, JSON.stringify(data));
        this._plugin.callFuncWithParam("crashlyticsSetBool", param);
    },

    crashlyticsSetDouble: function (key, value) {
        if (!this._plugin) return;
        const data = {key: key, value: value};
        const param = new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, JSON.stringify(data));
        this._plugin.callFuncWithParam("crashlyticsSetDouble", param);
    },

    crashlyticsSetInt: function (key, value) {
        if (!this._plugin) return;
        const data = {key: key, value: value};
        const param = new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, JSON.stringify(data));
        this._plugin.callFuncWithParam("crashlyticsSetInt", param);
    },

    crashlyticsSetUserIdentifier: function (userId) {
        if (!this._plugin) return;
        const param = new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, userId);
        this._plugin.callFuncWithParam("crashlyticsSetUserIdentifier", param);
    },

    openInAppReview: function () {
        if (!this._plugin) return;
        if (ck.isIOS()) {
            this._plugin.callFuncWithParam("requestReview", null);
        } else this._plugin.callFuncWithParam("openInAppReview", null);
    },
});

fr.Wrapper._instance = null;

fr.Wrapper.getInstance = function () {
    if (!fr.Wrapper._instance) {
        fr.Wrapper._instance = new fr.Wrapper();
    }
    return fr.Wrapper._instance;
};

/**
 * @type {fr.Wrapper}
 */
fr.wrapper = fr.Wrapper.getInstance();

