/**
 * Base class for response packet
 *
 * @class
 * @extends cc.Class
 *
 */
fr.InPacket = cc.Class.extend({

    /**
     * InPacket constructor
     * @param {string} data
     * @constructor
     */
    ctor: function (data) {

    },

    /**
     * Read boolean
     * @returns {boolean}
     */
    getBool: function () {
        return false;
    },

    /**
     * Read 1 byte
     * @returns {number}
     */
    getByte: function () {
        return 0;
    },

    /**
     * Read short (2 bytes)
     * @returns {number}
     */
    getShort: function () {
        return 0;
    },

    /**
     * Read int (4 bytes)
     * @returns {number}
     */
    getInt: function () {
        return 0;
    },

    /**
     * Read long (8 bytes)
     * @returns {number}
     */
    getLong: function () {
        return 0;
    },

    /**
     * Read double (8 bytes)
     * @returns {number}
     */
    getDouble: function () {
        return 0;
    },

    /**
     * Read string
     * @returns {string}
     */
    getString: function () {
        return "";
    },


});
