/**
 * @class
 * @abstract
 * @extends ck.BaseData
 */
ck.BaseFeatureData = ck.BaseData.extend({

    _featureID: 0,
    _levelUnlocked: 0,
    _isEnabled: true,

    /**
     * @constructor
     */
    ctor: function () {
        ck.BaseData.prototype.ctor.call(this);
        this._featureID = this._getFeatureID();
    },

    /**
     * Return feature id of this module <br/>
     * Feature ID used to set on/off flag when received info from server
     * Feature ID must be the same as Feature ID on server
     * @abstract
     * @return {number|ck.FeatureID}
     */
    _getFeatureID: function () {
        return ck.FeatureID.NONE;
    },

    copyFrom: function (another) {
        if (!ck.isValid(this)) return; // Some widgets extend from this so needs to prevent Invalid Native Object
        this.setLevelUnlocked(another._levelUnlocked);
        this.setEnabled(another._isEnabled);
    },

    /**
     * @virtual
     */
    reset: function () {
        ck.BaseData.prototype.reset.call(this);
        this._levelUnlocked = 0;
        this._isEnabled = true;
    },

    /**
     * @returns {number}
     */
    getLevelUnlocked: function () {
        return this._levelUnlocked;
    },

    /**
     * @param {number} levelUnlocked
     */
    setLevelUnlocked: function (levelUnlocked) {
        this._levelUnlocked = levelUnlocked;
    },

    /**
     * @returns {boolean}
     */
    isEnabled: function () {
        return this._isEnabled;
    },

    /**
     * @param {boolean} isEnabled
     */
    setEnabled: function (isEnabled) {
        this._isEnabled = isEnabled;
    },

    /**
     * @returns {number}
     */
    getFeatureID: function () {
        return this._featureID;
    }
});
