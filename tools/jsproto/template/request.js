/**
 * ClassName
 *
 * @class
 * @extends ck.NetworkRequest
 *
 */
const ClassName = ck.NetworkRequest.extend({

    // init-property

    /**
     * ClassName constructor
     * @constructor
     * rem-param-constructor
     */
    ctor: function (/** param-constructor */) {
        // ctor
        // this.log();
    },

    /**
     * Write data to packet
     * @override
     * @private
     */
    _writeData: function () {
        // write-data
    },

    // write-function

    // get-set
});

/**
 * Create ClassName
 * rem-param-constructor
 * @returns {ClassName}
 */
ClassName.create = function (/** param-constructor */) {
    return new ClassName(/** param */);
};