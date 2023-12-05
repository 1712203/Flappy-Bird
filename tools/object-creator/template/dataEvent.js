/**
 * ModuleNameData
 *
 * @class
 * @extends ck.BaseEventData
 *
 */
const ModuleNameData = ck.BaseEventData.extend({
    LOGTAG: '[ModuleNameData]',

    /**
     * ModuleNameData constructor
     * @constructor
     */
    ctor: function () {
        this._super();
        this._init();
    },

    _getTokenID: function () {
        return ItemID;
    },

    _getFeatureID: () => ck.FeatureID,

    /**
     * init function
     * @private
     */
    _init: function () {
    },

    /**
     * copy from another object
     * @param {ModuleNameData} newData
     */
    copyFrom: function (newData) {
        if (!newData) return;
        this._super(newData);
    },

});

/**
 * Create ModuleNameData
 * @returns {ModuleNameData}
 */
ModuleNameData.create = function () {
    return new ModuleNameData();
};