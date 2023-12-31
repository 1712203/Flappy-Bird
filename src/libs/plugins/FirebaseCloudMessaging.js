fr.fcm = {
    pluginUser: null,
    init: function () {
        if (!cc.sys.isNative) {
            return false;
        }
        if (plugin.PluginManager == null) {
            return false;
        }
        if (this.pluginFCM == null) {
            var pluginManager = plugin.PluginManager.getInstance();
            this.pluginFCM = pluginManager.loadPlugin("Fcm");
        }
        return true;
    },

    getToken: function () {
        if (this.isSupported()) {
            return this.pluginFCM.callStringFuncWithParam("getToken");
        }
        return "";
    },

    subscribeTopic: function (topic) {
        cc.log("[FCM] start subscribeTopic: ", topic);
        if (this.isSupported()) {
            cc.log("[FCM]", "<subscribeTopic>", topic);
            return this.pluginFCM.callFuncWithParam("subscribeTopic", plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, topic));
        }
    },

    unsubscribeTopic: function (topic) {
        if (this.isSupported()) {
            return this.pluginFCM.callFuncWithParam("unsubscribeTopic", plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, topic));
        }
    },

    isSupported: function () {
        return this.pluginFCM != null;
    },

    getExtraData: function () {
        if (this.isSupported()) {
            return this.pluginFCM.callStringFuncWithParam("getExtraData");
        }
        return "";
    },

    clearExtraData: function () {
        if (this.isSupported()) {
            return this.pluginFCM.callFuncWithParam("clearExtraData");
        }
    },

    isOldVersion: function () {
        if (this.isSupported()) {
            return this.pluginFCM.callStringFuncWithParam("getPluginVersion") == "1.0.0";
        }
        return true;
    }
};