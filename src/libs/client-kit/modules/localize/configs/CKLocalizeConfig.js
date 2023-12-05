/**
 * @class
 * @extends ck.BaseConfig
 */
ck.LocalizeConfig = ck.BaseConfig.extend({

    /**
     * @type {Map<string, ck.LanguageInfo>}
     */
    _languages: null,

    /**
     * @type {Map<number, ck.LanguageInfo>}
     */
    _languagesServer: null,

    /**
     * @type {ck.LanguageInfo[]}
     */
    _languagesArray: null,

    /**
     * Map<countryCode, ck.CountryInfo>
     * @type {Map<string, ck.CountryInfo>}
     */
    _countries: null,

    /**
     * Map<countryID, countryCode>
     * @type {Map<number, string>}
     */
    _countryCodes: null,

    /**
     * @type {string}
     */
    _defaultLanguage: "EN",

    /**
     * @type {ck.LanguageInfo}
     */
    _defaultLanguageInfo: null,

    /**
     * @type {ck.CountryInfo}
     */
    _defaultCountryInfo: null,

    ctor: function () {
        ck.BaseConfig.prototype.ctor.call(this);
        this._languages = new Map();
        this._languagesServer = new Map();
        this._countries = new Map();
        this._countryCodes = new Map();
    },

    /**
     * @override
     * @param file
     */
    load: function (file) {
        ck.BaseConfig.prototype.load.call(this, file);
        this._languages.clear();
        this._languagesServer.clear();
        const obj = ck.loader.loadJson(file);
        if (!obj) return;
        this._defaultLanguage = obj["defaultLanguage"];
        this.loadLanguages(obj["languages"]);
        this.loadCountries(obj["countries"]);
    },

    loadCountries: function (countries) {
        this._countries.clear();
        this._countryCodes.clear();
        if (!countries) return;
        for (let country of countries) {
            if (!country) return;
            const countryInfo = ck.CountryInfo.create();
            countryInfo.setID(country["id"]);
            countryInfo.setCountryCode(country["countryCode"]);
            countryInfo.setLanguageCode(country["languageCode"]);
            countryInfo.setCurrencyCode(country["currencyCode"]);
            countryInfo.setCurrencySign(country["currencySign"]);
            countryInfo.setFlag(country["flag"]);
            this._countries.set(countryInfo.getCountryCode(), countryInfo);
            this._countryCodes.set(countryInfo.getID(), countryInfo.getCountryCode());
        }
        this._defaultCountryInfo = this._countries.get("");
    },

    loadLanguages: function (languages) {
        this._languages.clear();
        this._languagesServer.clear();
        this._languagesArray = [];
        if (!languages) return;
        for (let language of languages) {
            if (!language) return;
            const info = ck.LanguageInfo.create();
            info.setLanguageCode(language["languageCode"]);
            info.setLanguageCodeServer(language["languageCodeServer"]);
            info.setTextFile(language["textFile"]);
            info.setAssets(this.loadAssets(language["assets"]));
            info.setFlag(language["flag"]);
            info.setName(language["name"]);
            info.setSpineSkinsMap(language["spineSkins"]);
            this._languages.set(info.getLanguageCode(), info);
            this._languagesServer.set(info.getLanguageCodeServer(), info);
            this._languagesArray.push(info);
        }
        this._defaultLanguageInfo = this._languages.get(this._defaultLanguage);
    },

    /**
     * @param {string} languageCode
     * @return {ck.LanguageInfo|null}
     */
    getLanguageInfo: function (languageCode) {
        return this._languages.get(languageCode);
    },

    /**
     * @param {number} languageCodeServer
     * @returns {ck.LanguageInfo|null}
     */
    getLanguageServerInfo: function (languageCodeServer) {
        return this._languagesServer.get(languageCodeServer);
    },

    /**
     * @return {ck.LanguageInfo}
     */
    getDefaultLanguageInfo: function () {
        return this._defaultLanguageInfo;
    },

    /**
     * @return {string}
     */
    getDefaultLanguage: function () {
        return this._defaultLanguage;
    },

    /**
     * @param languageCode
     * @return {string}
     */
    getTextFile: function (languageCode) {
        let info = this.getLanguageInfo(languageCode);
        return info ? info.getTextFile() : "";
    },

    /**
     * @param languageCode
     * @return {ck.AssetInfo[]}
     */
    getAssets: function (languageCode) {
        let info = this.getLanguageInfo(languageCode);
        return info ? info.getAssets() : [];
    },

    /**
     * @param countryCode
     * @return {ck.CountryInfo}
     */
    getCountryInfo: function (countryCode) {
        return this._countries.get(countryCode) || this._defaultCountryInfo;
    },

    /**
     * @param countryCode
     * @return {string}
     */
    getCurrencyCode: function (countryCode) {
        const info = this.getCountryInfo(countryCode);
        return info ? info.getCurrencyCode() : "USD";
    },

    /**
     * @param countryCode
     * @return {string}
     */
    getCurrencySign: function (countryCode) {
        const info = this.getCountryInfo(countryCode);
        return info ? info.getCurrencySign() : "$";
    },

    /**
     * @param countryID
     * @return {string}
     */
    toCountryCode: function (countryID) {
        return this._countryCodes.get(countryID) || "";
    },

    /**
     * @param languageCode
     * @return {string}
     */
    getLanguageFlag: function (languageCode) {
        let info = this.getLanguageInfo(languageCode);
        return info ? info.getFlag() : "";
    },

    /**
     * @param countryCode
     * @return {string}
     */
    getCountryFlag: function (countryCode) {
        let info = this.getCountryInfo(countryCode);
        return info ? info.getFlag() : "";
    },

    /**
     * @return {ck.LanguageInfo[]}
     */
    getLanguagesArray: function () { return this._languagesArray; },

});

/**
 * @returns {ck.LocalizeConfig}
 */
ck.LocalizeConfig.create = function () {
    return new ck.LocalizeConfig();
};
