/**
 * @class
 * @extends ck.NetworkResponse
 */
ck.LoginInfoResponse = ck.NetworkResponse.extend({
    _id: 0,
    _name: "",
    _level: 0,
    _xp: 0,
    _avatar: "",
    _coin: 0,
    _gem: 0,
    _isNewbie: false,
    _languageID: 0,
    _snsID: "",
    _isTutorialFinished: false,

    ctor: function (data) {
        ck.NetworkResponse.prototype.ctor.call(this, data);
    },

    /**
     * @override
     */
    _readData: function () {
        this._id = this.getInt();
        this._name = this.getString();
        this._level = this.getInt();
        this._xp = this.getLong();
        this._avatar = this.getString();
        this._coin = this.getLong();
        this._isNewbie = this.getBool();
        this._languageID = this.getShort();
        this._snsID = this.getString();
        this._isTutorialFinished = this.getBool();
    },

    getID: function () {
        return this._id;
    },

    getPlayerName: function () {
        return this._name;
    },

    getLevel: function () {
        return this._level;
    },

    getXP: function () {
        return this._xp;
    },

    getAvatar: function () {
        return this._avatar;
    },

    getCoin: function () {
        return this._coin;
    },

    getGem: function () {
        return this._gem;
    },

    isNewbie: function () {
        return this._isNewbie;
    },

    getLanguageID: function () {
        return this._languageID;
    },

    getSNSID: function () {
        return this._snsID;
    },

    isTutorialFinished: function () {
        return this._isTutorialFinished;
    }

});

/**
 * @class
 * @extends ck.LoginInfoResponse
 */
let LoginInfoResponse = ck.LoginInfoResponse;

/**
 * @returns {LoginInfoResponse}
 */
LoginInfoResponse.create = function (data) {
    return new LoginInfoResponse(data);
};