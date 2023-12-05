/**
 * @class
 * @extends ck.NetworkResponse
 */
ck.HandshakeResponse = ck.NetworkResponse.extend({
    ctor: function (data) {
        ck.NetworkResponse.prototype.ctor.call(this, data);
    },

    /**
     * @override
     */
    _readData: function () {

    },
});

/**
 * @class
 * @extends ck.HandshakeResponse
 */
let HandshakeResponse = ck.HandshakeResponse;

/**
 * @returns {HandshakeResponse}
 */
HandshakeResponse.create = function (data) {
    return new HandshakeResponse(data);
};
