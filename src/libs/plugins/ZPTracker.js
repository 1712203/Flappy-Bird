var fr = fr || {};

fr.tracker = {

    init: function () {
        // init after PlatformWrapper init
        if(!fr.wrapper) {
            if (plugin.PluginManager == null) return false;

            fr.wrapper = {};
            if (fr.wrapper._plugin == null) {
                var pluginManager = plugin.PluginManager.getInstance();
                fr.wrapper._plugin = pluginManager.loadPlugin("PlatformWrapper");
            }
        }
    },

    enableLogErrorJSNew : function () {
        try {
            if (fr.wrapper._plugin != null) {
                fr.wrapper._plugin.callFuncWithParam("changeLogJSErrorNew", null);
            }
        }
        catch(e) {

        }
    },

    /**
     * DEBUG LOG
     * DebugString : thông tin log cần check
     * @param debugString
     */
    logDebug : function (debugString) {
        try {
            var dataObj = {
                DebugString : debugString
            }

            var obj = {
                ActionType : "LOG_DEBUG",
                ActionData : dataObj
            };

            if (fr.wrapper._plugin != null) {
                var sParam = new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, JSON.stringify(obj));
                fr.wrapper._plugin.callFuncWithParam("sendLogBulk", sParam);
            }
        } catch (e) {

        }
    },

    /**
     * LOG APK PACKAGE EXIST
     * @param packageName
     */
    logCheckAPK : function (packageName) {
        try {
            var isExist = fr.tracker.isPackageExisted(packageName);

            var dataObj = {
                PackageName : packageName,
                IsExists : isExist
            };

            var obj = {
                ActionType : "CHECK_APK",
                ActionData : dataObj
            };

            this.sendLogBulk(JSON.stringify(obj));
        } catch (e) {

        }
    },

    /**
     * LOG APK PACKAGE WITH STATE EXIST
     * @param packageName
     * @param isExist
     */
    logAPK : function (packageName,isExist) {
        try {
            var dataObj = {
                PackageName : packageName,
                IsExists : isExist
            };

            var obj = {
                ActionType : "CHECK_APK",
                ActionData : dataObj
            };

            this.sendLogBulk(JSON.stringify(obj));
        } catch (e) {

        }
    },

    sendLogBulk : function (str) {
        try {
            if (fr.wrapper._plugin != null) {
                var sParam = new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, str);
                fr.wrapper._plugin.callFuncWithParam("sendLogBulk", sParam);
            }
        }
        catch(e) {

        }
    },

    isPackageExisted : function (pName) {
        if (fr.wrapper._plugin != null) {
            return fr.wrapper._plugin.callIntFuncWithParam("isPackageExisted",
                new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, pName));
        }
        return 0;
    },

    /**
     * LOG STEP GAME
     * @param group             : tên group các step chung ( LOADING, LOGIN ... )
     * @param stepName          : tên step ( _begin_loadgui , _end_ )
     * @param info              : thông tin của step object
     * @param debug             : thông tin debug cho step
     * @param prevStatus        : kết quả step trước ( SUCC hoặc mã lỗi )
     * @param prevAfterInfo     : thông tin của step trước sau khi thực hiện
     * @param prevAfterDebug    : thông tin của step trước hỗ trợ debug
     */
    logStepStart: function (group, stepName, info, debug, prevStatus, prevAfterInfo, prevAfterDebug) {
        try {
            var obj = {
                "group": group,
                "name": stepName,
                "debug": debug || "",
                "info": info || "",
                "prev_status": prevStatus || "SUCC",
                "prev_after_debug": prevAfterDebug || "",
                "prev_after_info": prevAfterInfo || ""
            };

            // cc.log("Tracker Step : " + JSON.stringify(obj));
            if (fr.wrapper._plugin != null) {
                var sParam = new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, JSON.stringify(obj));
                fr.wrapper._plugin.callFuncWithParam("logStepgGame", sParam);
            }
        } catch (e) {

        }
    },

    /**
     * LOG STEP GAME
     * @param group             : tên group các step chung ( LOADING, LOGIN ... )
     * @param gameID            : tên game trong portal ( tienlen , pokdeng_th ... )
     * @param stepName          : tên step ( _begin_loadgui , _end_ )
     * @param info              : thông tin của step object
     * @param debug             : thông tin debug cho step
     * @param prevStatus        : kết quả step trước ( SUCC hoặc mã lỗi )
     * @param prevAfterInfo     : thông tin của step trước sau khi thực hiện
     * @param prevAfterDebug    : thông tin của step trước hỗ trợ debug
     */
    logStepPortalListGame: function (group, gameId, stepName, info, debug, prevStatus, prevAfterInfo, prevAfterDebug) {
        try {
            var obj = {
                "group": group,
                "name": stepName,
                "debug": debug || "",
                "info": info || "",
                "prev_status": prevStatus || "SUCC",
                "prev_after_debug": prevAfterDebug || "",
                "prev_after_info": prevAfterInfo || ""
            };

            cc.log("Tracker Portal : " + JSON.stringify(obj));
            if (fr.wrapper._plugin != null) {
                var sParam = new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, JSON.stringify(obj));
                fr.wrapper._plugin.callFuncWithParam("logStepgPortalListGame", sParam);
            }
        } catch (e) {

        }
    }
};