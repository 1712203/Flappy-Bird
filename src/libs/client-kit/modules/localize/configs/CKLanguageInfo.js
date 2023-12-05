/**
 * @class
 * @extends cc.Class
 */
ck.LanguageInfo = cc.Class.extend({
    /** @type {ck.AssetInfo[]} */
    _assets: null,
    _languageCode: "",
    _textFile: "",
    _flag: "",
    _name: "",
    _languageCodeServer: 0,
    /** @type {Map<String, String>} */
    _spineSkins: null,

    /**
     * @constructor
     */
    ctor: function () {
        this._assets = [];
        this._spineSkins = new Map();
    },

    getLanguageCode: function () {
        return this._languageCode;
    },

    setLanguageCode: function (languageCode) {
        this._languageCode = languageCode;
    },

    getAssets: function () {
        return this._assets;
    },

    setAssets: function (assets) {
        this._assets = assets || [];
    },

    getTextFile: function () {
        return this._textFile;
    },

    setTextFile: function (textFile) {
        this._textFile = textFile;
    },

    getFlag: function () {
        return this._flag;
    },

    setFlag: function (flag) {
        this._flag = flag;
    },

    /**
     * @returns {string}
     */
    getName: function () {
        return this._name;
    },

    /**
     * @param {string} name
     */
    setName: function (name) {
        this._name = name;
    },

    /**
     * @returns {number}
     */
    getLanguageCodeServer: function () {
        return this._languageCodeServer;
    },

    /**
     * @param {number} languageCodeServer
     */
    setLanguageCodeServer: function (languageCodeServer) {
        this._languageCodeServer = languageCodeServer;
    },

    /**
     * @param {[Object]} arrSkins
     */
    setSpineSkinsMap: function (arrSkins) {
        arrSkins.forEach(skin => {
            this.addSpineSkin(skin["jsonPath"], skin["skinName"]);
        }, this);
    },

    /**
     * @param {String} jsonPath
     * @param {String} skinName
     */
    addSpineSkin: function (jsonPath, skinName) {
        this._spineSkins.set(jsonPath, skinName);
    },

    /**
     * @param {String} jsonPath
     * @return {String}
     */
    getSpineSkin: function (jsonPath) {
        return this._spineSkins.get(jsonPath);
    },
});

/**
 * Create LanguageInfo
 * @returns {ck.LanguageInfo}
 */
ck.LanguageInfo.create = function () {
    return new ck.LanguageInfo();
};

