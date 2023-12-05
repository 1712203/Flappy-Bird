/**
 * @class
 * @extends ck.NetworkResponse
 */
ck.ReloginResponse = ck.NetworkResponse.extend({
    _ip: "",
    _port: 0,

    ctor: function (data) {
        ck.NetworkResponse.prototype.ctor.call(this, data);
    },

    /**
     * @override
     */
    _readData: function () {
        this._ip = this.getString();
        this._port = this.getInt();
    },

    getIP: function () {
        return this._ip;
    },

    getPort: function () {
        return this._port;
    },

    getAddress: function () {
        return ServerAddress.create(this._ip, this._port);
    },

    fakeData: function () {
        this._ip = "127.0.0.1";
        this._port = 19301;
    },
});

/**
 * @class
 * @extends ck.ReloginResponse
 */
let ReloginResponse = ck.ReloginResponse;

/**
 * @returns {ReloginResponse}
 */
ReloginResponse.create = function (data) {
    return new ReloginResponse(data);
};