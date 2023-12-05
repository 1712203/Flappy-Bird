/**
 * Base class for request packet
 *
 * @class
 * @extends cc.Class
 *
 */
fr.OutPacket = cc.Class.extend({

    /**
     * fr.OutPacket constructor
     * @constructor
     */
    ctor: function () {

    },

    /**
     * Init packet
     * @param {number} size - Packet size
     * @protected
     */
    initData: function (size) {

    },

    /**
     * Set packet id
     * @param {number} id - Packet id
     * @protected
     */
    setCmdId: function (id) {

    },

    /**
     * Pack packet header
     * @protected
     */
    packHeader: function () {

    },

    /**
     * Update packet size after putting data into it <br/>
     * Should called after data is all put
     * @protected
     */
    updateSize: function () {

    },

    /**
     * Put a boolean
     * @param {boolean} value
     */
    putBool: function (value) {

    },

    /**
     * Put a byte
     * @param {number} value
     */
    putByte: function (value) {

    },

    /**
     * Put a short number (2 bytes)
     * @param {number} value
     */
    putShort: function (value) {

    },

    /**
     * Put a integer number (4 bytes)
     * @param {number} value
     */
    putInt: function (value) {

    },

    /**
     * Put a long number (8 bytes)
     * @param {number} value
     */
    putLong: function (value) {

    },

    /**
     * Put a double number (8 bytes)
     * @param {number} value
     */
    putDouble: function (value) {

    },

    /**
     * Put a string
     * @param {string} value
     */
    putString: function (value) {

    },
});

/**
 * Create fr.OutPacket
 * @returns {fr.OutPacket}
 */
fr.OutPacket.create = function () {
    return new fr.OutPacket();
};