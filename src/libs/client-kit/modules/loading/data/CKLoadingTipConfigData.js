ck.LoadingTipConfigData = cc.Class.extend({

    /**
     * @type {string}
     */
    _text: null,

    /**
     * @type {number}
     */
    _levelRequired: 0,

    ctor: function () {
        this._text = "";
        this._levelRequired = 0;
    },

    getText: function () {
        return gm.localize.getText(this._text);
    },

    setText: function (value) {
        this._text = value;
    },

    getLevelRequired: function () {
        return this._levelRequired;
    },

    setLevelRequired: function (value) {
        this._levelRequired = value;
    },

});

/**
 * @class
 * @extends ck.LoadingTipConfigData
 */
let LoadingTipConfigData = ck.LoadingTipConfigData;

/**
 * @return {LoadingTipConfigData}
 */
LoadingTipConfigData.create = function () {
    return new LoadingTipConfigData();
};