/**
 * Created by Hunter on 10/04/2023
 */

fr.appsflyer = {
    pluginAppsflyer: null,

    init:function(){
        if(!cc.sys.isNative)
            return false;

        if (plugin.PluginManager == null)
            return false;

        if(fr.appsflyer.pluginAppsflyer == null) {
            var pluginManager = plugin.PluginManager.getInstance();
            fr.appsflyer.pluginAppsflyer = pluginManager.loadPlugin("AppsFlyer");
        }
        return true;
    },

    disableLog: function () {
        if (this.pluginAppsflyer) {
            this.pluginAppsflyer.callFuncWithParam("disableILog", null);
        }
    },

    logEvent: function (data) {
        if (this.pluginAppsflyer) {
            this.pluginAppsflyer.callFuncWithParam("logEvent",
                plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, data));
        }
    },

    logPurchaseAppsFlyer:function (revenue, currency) {
        if(!cc.sys.isNative) {
            return;
        }

        if(Utility.isIos()){
            this.logPurchaseIOS(revenue, currency);
        }else{
            this.logPurchaseAndroid(revenue, currency);
        }
    },

    logPurchaseIOS:function (revenue, currency) {
        if (!this.pluginAppsflyer)
            return;

        var obj = {
            name: 'af_purchase',
            params:{
                "af_currency" : currency,
                "af_revenue": revenue
            }
        };
        fr.appsflyer.logEvent(JSON.stringify(obj));
    },

    logPurchaseAndroid:function (revenue, currency) {
        if (!this.pluginAppsflyer)
            return;
        var obj = {
            key: 'af_purchase',
            iParams : {
                "af_revenue" : revenue
            },
            sParams : {
                "af_currency" : currency
            }
        };
        fr.appsflyer.logEvent(JSON.stringify(obj));
    }
};
