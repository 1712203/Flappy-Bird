/**
 * @class
 * @extends ck.LoginInfoResponse
 */
let LoginInfoResponse = ck.LoginInfoResponse.extend({
    /**
     * @type {ModeInfo[]}
     */
    _modes: null,
    _isInReview: false,
    _portalID: null,

    ctor: function (data) {
        ck.NetworkResponse.prototype.ctor.call(this, data);
        // this.log("LoginInfoResponse");
    },

    /**
     * @override
     */
    _readData: function () {
        ck.LoginInfoResponse.prototype._readData.call(this);
        this._modes = [];
        let nModes = this.getByte();
        for (let i = 0; i < nModes; i++) {
            let mode = ModeInfo.create();
            mode.setMode(this.getShort());
            mode.setMinCoin(this.getLong());
            this._modes.push(mode);
        }
        this._isInReview = this.getBool();
        this._portalID = this.getString();
    },

    /**
     * @return {ModeInfo[]}
     */
    getModes: function () {
        return this._modes;
    },

    /**
     * @return {Boolean}
     */
    isInReview: function () {
        return this._isInReview;
    },

    /**
     * @return {String}
     */
    getPortalID: function () {
        return this._portalID;
    }

});

/**
 * @returns {LoginInfoResponse}
 */
LoginInfoResponse.create = function (data) {
    return new LoginInfoResponse(data);
};

ck.LoginInfoResponse.create = LoginInfoResponse.create;