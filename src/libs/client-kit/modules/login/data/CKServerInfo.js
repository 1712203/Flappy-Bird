/**
 * @class
 * @extends cc.Class
 */
ck.ServerInfo = cc.Class.extend({
    _id: 0,
    _name: "",
    _balancers: null,
    _addresses: null,
    _addressIndex: 0,
    _balancerIndex: 0,

    ctor: function () {
        this._balancers = [];
        this._addresses = [];
    },

    setID: function (id) {
        this._id = id;
    },

    getID: function () {
        return this._id;
    },

    getName: function () {
        return this._name;
    },

    setName: function (name) {
        this._name = name;
    },

    addBalancer: function (url) {
        this._balancers.push(url);
    },

    setBalancers: function (balancers) {
        this._balancers = balancers;
    },

    addAddress: function (ip, port) {
        if (!ip || !port) return; 
        this._addresses.push(ServerAddress.create(ip, port));
    },

    getCurrentAddress: function () {
        return this._addresses[this._addressIndex];
    },

    increaseAddressIndex: function () {
        const size = this._addresses.length;
        if (size < 1) return;
        this._addressIndex = (this._addressIndex + 1) % size;
    },

    setAddressIndexToLast: function () {
        this._addressIndex = this._addresses.length - 1;
    },

    getBalancerURL: function () {
        return this._balancers[this._balancerIndex];
    },

    increaseBalancerIndex: function () {
        const size = this._balancers.length;
        if (size < 1) return;
        this._balancerIndex = (this._balancerIndex + 1) % size;
    }
});

/**
 * @class
 * @extends ck.ServerInfo
 */
let ServerInfo = ck.ServerInfo;

/**
 * @returns {ServerInfo}
 */
ServerInfo.create = function () {
    return new ServerInfo();
};
