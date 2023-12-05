/**
 * @class
 * @extends ck.NetworkRequest
 */
ck.HandshakeRequest = ck.NetworkRequest.extend({
    ctor: function () {
        ck.NetworkRequest.prototype.ctor.call(this, ck.PacketID.HANDSHAKE);
        this.setControllerId(0);
    },

    /**
     * @override
     */
    _writeData: function () {

    },
});

/**
 * @class
 * @extends ck.HandshakeRequest
 */
let HandshakeRequest = ck.HandshakeRequest;

/**
 * @returns {HandshakeRequest}
 */
HandshakeRequest.create = function () {
    return new HandshakeRequest();
};