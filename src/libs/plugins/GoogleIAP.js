/**
 * @class
 * @extends cc.Class
 */
fr.GoogleIAP = cc.Class.extend({

    /**
     * @type {boolean}
     */
    _initialized: false,

    /**
     * @type {string}
     */
    _licenseKey: "",

    /**
     * @type {Map<number, string>}
     */
    _skuMap: null,

    /**
     * @type {IAPPlugin}
     */
    _plugin: null,

    ctor: function () {

    },

    /**
     * Init Google IAP wrapper
     * @param {string[]} productIDs
     * @param {string} licenseKey
     * @return {boolean}
     */
    init: function (productIDs, licenseKey) {
        if (this._initialized) return false;
        cc.log("[GoogleIAP] - init - productIDS: %s, licenseKey: %s", productIDs, licenseKey);
        this._licenseKey = licenseKey;
        this._initPlugin(productIDs, licenseKey);
        this._initSKU();
        this._initialized = true;
        return true;
    },

    isInitialized: function () {return this._initialized;},

    _initPlugin: function (productIDs, licenseKey) {
        if (!plugin.PluginManager) return false;
        this._plugin = plugin.PluginManager.getInstance().loadPlugin("IAPGooglePlay");
        if (!this._plugin) return false;
        this._plugin.setListener(this);
        this._plugin.configDeveloperInfo({
            itemPacks: productIDs.join("|"),
            GooglePlayAppKey: licenseKey
        });
        this._plugin.callFuncWithParam("configSkuInfo", null);
    },

    _initSKU: function () {
        this._skuMap = new Map();
        if (!this._plugin) return false;
        const str = this._plugin.callStringFuncWithParam("getListSKU");
        if (!str) return false;
        const obj = JSON.parse(str);
        for (let key in obj) {
            let data = obj[key];
            this._skuMap.set(data["productId"], data["price"]);
        }
        return true;
    },

    /**
     * Get SKU price string from product ID
     * @param productID
     * @return {string}
     */
    getSKUPrice: function (productID) {
        if (!this._skuMap || this._skuMap.size < 1) this._initSKU();
        return this._skuMap ? this._skuMap.get(productID) || "" : "";
    },

    /**
     * Call when player click to buy an IAP pack
     * @param productID
     * @return {boolean}
     */
    pay: function (productID) {
        if (!productID || !this._plugin) return false;
        cc.log("[GoogleIAP] - pay - %s", productID);
        this._plugin.payForProduct({
            IAPId: productID,
            IAPSecKey: this._licenseKey
        });
        return true;
    },

    /**
     * Callback when player finish pay progress
     * @param {number|plugin.ProtocolIAP.PayResultCode} returnCode
     * @param {string} jsonStr
     */
    onPayResult: function (returnCode, jsonStr) {
        cc.log("[GoogleIAP] - onPayResult", returnCode, jsonStr);
        if (returnCode !== plugin.ProtocolIAP.PayResultCode.PaySuccess) {
            cc.log("[GoogleIAP] - onPayResult - Pay failed!!!!!");
            gm.payment.onIAPPayFailed(returnCode);
            return;
        }
        const obj = JSON.parse(jsonStr);
        if (!obj) {
            cc.error("[GoogleIAP] - onPayResult - Object parsed from json is null", obj);
            return;
        }
        const purchaseData = obj["purchaseData"];
        const orderID = purchaseData ? purchaseData["orderId"] : "";
        const signature = obj["signature"];
        gm.payment.onGoogleIAPPayResult(orderID, purchaseData, signature);
    },

    /**
     * Consume a purchase after verify it
     * @param {object} purchaseData
     * @param {string} signature
     */
    consume: function (purchaseData, signature) {
        if (!purchaseData || !signature || !this._plugin) return;
        const jsonStr = JSON.stringify({purchaseData: purchaseData, signature: signature});
        const param = plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, jsonStr);
        this._plugin.callFuncWithParam("consumePurchase", param);
    },
});

/**
 * @type {fr.GoogleIAP}
 * @private
 */
fr.GoogleIAP._instance = null;

/**
 * @return {fr.GoogleIAP}
 */
fr.GoogleIAP.getInstance = function () {
    if (!fr.GoogleIAP._instance) {
        fr.GoogleIAP._instance = new fr.GoogleIAP();
    }
    return fr.GoogleIAP._instance;
};

/**
 * @type {fr.GoogleIAP}
 */
fr.googleIAP = fr.GoogleIAP.getInstance();

/**
 * @constant
 * @type {string}
 */
fr.GoogleIAP.SECRET_KEY = "g$n_secret_n0!";
