/**
 * @class
 * @extends ck.BaseManager
 * @property {ck.LocalizeConfig} config
 * @property {ck.LocalizeHandler} handler
 */
ck.LocalizeManager = ck.BaseManager.extend({

    _currentLanguageCode: "",
    _currentCountryCode: "",

    /**
     * @type {ck.LocalizeConfig}
     */
    _config: null,

    /**
     * Map<key, text>
     * @type {Map<string, string>}
     */
    _texts: null,

    ctor: function () {
        ck.BaseManager.prototype.ctor.call(this);
        this._texts = new Map();
    },

    // region Overrides

    _createConfig: () => ck.LocalizeConfig.create(),

    _createData: () => null,

    _createHandler: () => ck.LocalizeHandler.create(),

    _createView: () => ck.LanguagePopup.create(),

    _getSceneID: () => 0,

    _getConfigFile: () => ck.LocalizeManager.CONFIG_FILE,

    requestData: function () {},

    // endregion

    // region Language

    /**
     * Set language
     * @param {string} languageCode
     */
    setLanguage: function (languageCode) {
        const info = this._config.getLanguageInfo(languageCode);
        if (!info) return;
        this.handler.requestChangeLanguage(info.getLanguageCodeServer());

        if (languageCode === this._currentLanguageCode) return;
        cc.log("[LocalizeManager] - setLanguage: %s", languageCode, this._currentLanguageCode);
        const oldAssets = this._config.getAssets(this._currentLanguageCode);
        this._currentLanguageCode = languageCode;
        ck.cache.setString(ck.LocalizeManager.CACHE_LANGUAGE_KEY, languageCode);
        this.loadTexts(info.getTextFile());
        const currentAssets = info.getAssets();
        ck.loader.unloadAssets(oldAssets);
        ck.loader.loadAssets(currentAssets);
        ck.fireEvent(ck.LocalizeEvents.LANGUAGE_CHANGED, this._currentLanguageCode);
    },

    /**
     * Set language from server
     * @param {number} languageCodeServer
     */
    setLanguageServer: function (languageCodeServer) {
        const serverLanguageInfo = this._config.getLanguageServerInfo(languageCodeServer);
        if (!serverLanguageInfo) return;
        cc.log("setLanguageServer", serverLanguageInfo.getLanguageCode());

        // // If languageCodeServer is the same -> Don't need to setLanguage
        // const currentLanguageInfo = this._config.getLanguageInfo(this._currentLanguageCode);
        // if (currentLanguageInfo && currentLanguageInfo.getLanguageCodeServer() === serverLanguageInfo.getLanguageCodeServer()) {
        //     return;
        // }

        this.setLanguage(serverLanguageInfo.getLanguageCode());
    },

    /**
     * Load texts for a language
     * @param {string} file
     * @return {boolean}
     */
    loadTexts: function (file) {
        if (!file) return;
        this._texts.clear();
        const obj = ck.loader.loadJson(file);
        if (!obj) return;
        for (let key in obj) {
            this._texts.set(key, obj[key]);
        }
    },

    /**
     * Load player's language from cache
     */
    loadCache: function () {
        const cacheLanguage = ck.cache.getString(ck.LocalizeManager.CACHE_LANGUAGE_KEY, "");
        this.setLanguage(cacheLanguage || this._config.getDefaultLanguage());
    },

    /**
     * Get text for a key
     * @param {string} key
     * @returns {string}
     */
    getText: function (key) {
        return this._texts.get(key) || key;
    },

    getCurrentLanguageCode: function () {
        return this._currentLanguageCode;
    },

    /**
     * @return {ck.LanguageInfo|null}
     */
    getCurrentLanguageInfo: function () {
        return this._config.getLanguageInfo(this._currentLanguageCode);
    },

    getSpineSkin: function (jsonPath) {
        const info = this.getCurrentLanguageInfo();
        if (!info) return null;
        return info.getSpineSkin(jsonPath);
    },

    showLanguagePopup: function (parent) {
        this.showView(parent);
    },

    // endregion

    // region Country

    /**
     * @returns {string}
     */
    getCurrentCountryCode: function () {
        return this._currentCountryCode;
    },

    isMena: function () {
        return ck.MenaCountryCodes.indexOf(this._currentCountryCode) >= 0;
    },

    /**
     * @param {ck.LanguageCode} languageCode
     * @returns {boolean}
     */
    isLanguage: function (languageCode) {
        return this._currentLanguageCode === languageCode;
    },

    /**
     * @param {string} countryCode
     */
    setCurrentCountryCode: function (countryCode) {
        this._currentCountryCode = countryCode;
    },

    /**
     * @return {string}
     */
    getCurrencyCode: function () {
        return this._config.getCurrencyCode(this._currentCountryCode);
    },

    /**
     * @return {string}
     */
    getCurrencySign: function () {
        return this._config.getCurrencySign(this._currentCountryCode);
    },

    /**
     * @param countryID
     * @return {string}
     */
    toCountryCode: function (countryID) {
        return this._config.toCountryCode(countryID);
    },

    /**
     * @param {number} price
     * @return {string}
     */
    getPriceString: function (price) {
        return this.getCurrencySign() + " " + ck.StringUtils.formatNumber(price);
    },

    // endregion

});

/**
 * @returns {ck.LocalizeManager}
 */
ck.LocalizeManager.create = function () {
    return new ck.LocalizeManager();
};

/**
 * @constant
 * @type {string}
 */
ck.LocalizeManager.CONFIG_FILE = "configs/LocalizeConfig.json";

/**
 * @constant
 * @type {string}
 */
ck.LocalizeManager.CACHE_LANGUAGE_KEY = "CACHE_LANGUAGE";
