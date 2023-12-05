/**
 * @class
 * @extends ck.NetworkRequest
 */
ck.LoginRequest = ck.NetworkRequest.extend({
    _sessionKey: null,
    _userId: 0,
    _clientVersion: 0,
    _deviceId: null,
    _deviceName: null,
    _osVersion: null,
    _connectionStatusName: null,
    _simOperatorName: null,
    _osName: null,
    _packageName: null,
    _simOperator: null,
    _decodeSession: null,

    ctor: function () {
        ck.NetworkRequest.prototype.ctor.call(this, ck.PacketID.LOGIN);
    },

    /**
     * @override
     */
    _writeData: function () {
        const manager = gm.login;
        let data = manager.getData();
        let config = manager.getConfig();

        this._sessionKey = data.getSessionKey();
        this._userId = data.getUserID();
        this._clientVersion = gm.login.getConfig().getClientVersion();
        this._deviceId = fr.wrapper.getDeviceID();
        this._deviceName = fr.wrapper.getDeviceID();
        this._osVersion = fr.wrapper.getOSVersion();
        this._connectionStatusName = fr.wrapper.getConnectionStatusName();
        this._simOperatorName = fr.wrapper.getSimOperatorName();
        this._osName = gm.login.isLocal() ? "android" : fr.wrapper.getOSName();
        //this._osName = gm.login.isLocal() ? "ios" : fr.wrapper.getOSName();
        this._packageName = fr.wrapper.getPackageName() || config.getDefaultPackageName();
        this._simOperator = fr.wrapper.getSimOperator();
        this._decodeSession = "";

        this.putString(this._sessionKey);
        this.putInt(this._userId);
        this.putShort(this._clientVersion);
        this.putString(this._deviceId);
        this.putString(this._deviceName);
        this.putString(this._osVersion);
        this.putString(this._connectionStatusName);
        this.putString(this._simOperatorName);
        this.putString(this._osName);
        this.putString(this._packageName);
        this.putString(this._simOperator);
        this.putShort(this._decodeSession);

        this.log();
    },

    log: function () {
        // cc.log(JSON.stringify(this));
    }
});

/**
 * @class
 * @extends ck.LoginRequest
 */
let LoginRequest = ck.LoginRequest;

/**
 * @returns {LoginRequest}
 */
LoginRequest.create = function () {
    return new LoginRequest();
};