/**
 * @class
 * @extends cc.Class
 */
ck.CountryInfo = cc.Class.extend({
    _id: 0,
    _countryCode: "",
    _currencyCode: "",
    _currencySign: "",
    _languageCode: "",
    _flag: "",

    ctor: function () {
    },

    getID: function () {
        return this._id;
    },

    setID: function (id) {
        this._id = id;
    },

    getCountryCode: function () {
        return this._countryCode;
    },

    setCountryCode: function (countryCode) {
        this._countryCode = countryCode;
    },

    getCurrencyCode: function () {
        return this._currencyCode;
    },

    setCurrencyCode: function (currencyCode) {
        this._currencyCode = currencyCode;
    },

    getCurrencySign: function () {
        return this._currencySign;
    },

    setCurrencySign: function (currencySign) {
        this._currencySign = currencySign;
    },

    getLanguageCode: function (languageCode) {
        return this._languageCode;
    },

    setLanguageCode: function (languageCode) {
        this._languageCode = languageCode;
    },

    getFlag: function () {
        return this._flag;
    },

    setFlag: function (flag) {
        this._flag = flag;
    },

});

/**
 * @returns {ck.CountryInfo}
 */
ck.CountryInfo.create = function () {
    return new ck.CountryInfo();
};
