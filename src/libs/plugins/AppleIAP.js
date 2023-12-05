/**
 * @class
 * @extends cc.Class
 */
fr.AppleIAP = cc.Class.extend({

    /**
     * @type {boolean}
     */
    _initialized: false,

    /**
     * @type {boolean}
     */
    _isLoadedProductInfo: false,

    /**
     * @type {Map<number, string>}
     */
    _skuMap: null,

    /**
     * @type {Map<number, AppleIAPProduct>}
     */
    _mapProducts: null,

    /**
     * @type {IAPPlugin}
     */
    _plugin: null,

    ctor: function () {

    },

    /**
     * Init Apple IAP wrapper
     * @param {string[]} productIDs
     * @return {boolean}
     */
    init: function (productIDs) {
        if (this._initialized) return false;
        this._initPlugin(productIDs);
        this._initialized = true;
        return true;
    },

    isInitialized: function () {return this._initialized;},

    _initPlugin: function (productIDs) {
        if (!plugin.PluginManager) return false;
        this._plugin = plugin.PluginManager.getInstance().loadPlugin("IOSIAP");
        if (!this._plugin) {
            cc.log("[fr.AppleIAP] Load plugin \"IOSIAP\" failed !!");
            return false;
        }
        this._plugin.setListener(this);
        this._plugin.callFuncWithParam("setServerMode");
        // cc.log("[fr.AppleIAP] - requestProducts: ", JSON.stringify(productIDs));
        cc.director.getScheduler().unschedule("scheduleAppleIAPRequestProducts", this);
        cc.director.getScheduler().schedule(function () { this.requestProducts(productIDs); }.bind(this), this, 2, 0, 0, false, "scheduleAppleIAPRequestProducts");
        this.verifyIncompletePurchase();
    },

    _initSKU: function () {
        this._skuMap = new Map();
        if (!this._plugin || !this._mapProducts) return false;
        cc.log("[fr.AppleIAP] - initSKU: ");
        this._mapProducts.forEach(((product, productId) => {
            let price = this._plugin.callStringFuncWithParam("getProductLocalCurrencyById", plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, productId));
            this._skuMap.set(productId, price);
            cc.log("", productId, price);
        }));
        return true;
    },

    /**
     * Get SKU price string from product ID
     * @param productID
     * @return {string}
     */
    getSKUPrice: function (productID) {
        return this._skuMap ? this._skuMap.get(productID) || "" : "";
    },

    requestProducts: function (productIDs) {
        if (!this._plugin) return;
        this._plugin.callFuncWithParam("requestProducts", plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, productIDs.toString()));
    },

    onRequestProductResult: function (ret, productInfo) {
        cc.log("[fr.AppleIAP]", "<onRequestProductResult>");
        if (ret == plugin.ProtocolIAP.RequestProductCode.RequestFail) {
            cc.log("[fr.AppleIAP]", "<onRequestProductResult>", "Request error");
            this._isLoadedProductInfo = false;
        } else if (ret == plugin.ProtocolIAP.RequestProductCode.RequestSuccess) {
            this._mapProducts = new Map();
            for (let i = 0; i < productInfo.length; i++) {
                let product = productInfo[i];
                this._mapProducts.set(product["productId"], product);
            }
            this._isLoadedProductInfo = true;
            cc.log("[fr.AppleIAP]", "<onRequestProductResult>", "Request successfull:");
            this._initSKU();
        }
    },

    verifyIncompletePurchase: function () {
        if (!this._plugin) return;
        this._plugin.callFuncWithParam("verifyIncompletePurchase");
    },

    /**
     * Call when player click to buy an IAP pack
     * @param productID
     * @return {boolean}
     */
    pay: function (productID) {
        cc.log("[AppleIAP] - pay: %s", productID);
        cc.log("[AppleIAP] - this._plugin: " + this._plugin);
        if (!productID || !this._plugin) return false;
        /** @type {AppleIAPProduct} */
        let product = this._mapProducts.get(productID);
         cc.log("[AppleIAP] - product: " + JSON.stringify(product));
        //product = {
        //  productDesc: "Nạp gói 5000 sẽ nhận được ...."
        //  productId: "ica_gold_002",
        //  productName: "Nano Cash Pack"
        //  productPrice: "5000"
        //}
        if (product)
            this._plugin.payForProduct(product);
        else
            this._plugin.payForProduct({productId: productID});
        return true;
    },

    /**
     * Callback when player finish pay progress
     * @param {number|plugin.ProtocolIAP.PayResultCode} returnCode
     * @param {string} receipt
     */
    onPayResult: function (returnCode, receipt) {
        cc.log("[AppleIAP] - onPayResult", returnCode, receipt);
        if (returnCode !== plugin.ProtocolIAP.PayResultCode.PaySuccess) {
            cc.log("[AppleIAP] - onPayResult - Pay failed!!!!!");
            gm.payment.onIAPPayFailed(returnCode);
            return;
        }
        if (!receipt || receipt.length <= 0) {
            cc.error("[AppleIAP] - onPayResult - receipt is null", receipt);
            return;
        }
        gm.payment.onAppleIAPPayResult(receipt);
    },

    /**
     * Consume a purchase after verify it
     * @param {string} productId
     */
    consume: function (productId) {
        cc.log("[Apple IAP] <finishTransaction> productId = ", productId);
        if (this._plugin) {
            this._plugin.callFuncWithParam("finishTransaction", new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, productId));
        }
    },
});

/**
 * @type {fr.AppleIAP}
 * @private
 */
fr.AppleIAP._instance = null;

/**
 * @return {fr.AppleIAP}
 */
fr.AppleIAP.getInstance = function () {
    if (!fr.AppleIAP._instance) {
        fr.AppleIAP._instance = new fr.AppleIAP();
    }
    return fr.AppleIAP._instance;
};

/**
 * @type {fr.AppleIAP}
 */
fr.appleIAP = fr.AppleIAP.getInstance();
