ck.ServerAddress = cc.Class.extend({
    _ip: "",
    _port: 0,

    ctor: function (ip, port) {
        this._ip = ip;
        this._port = port;
    },

    getIP: function () {
        return this._ip;
    },

    getPort: function () {
        return this._port;
    }
});

/**
 * @class
 * @extends ck.ServerAddress
 */
let ServerAddress = ck.ServerAddress;

/**
 * @returns {ServerAddress}
 */
ServerAddress.create = function (ip, port) {
    return new ServerAddress(ip, port);
};
