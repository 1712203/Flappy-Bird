/**
 * ClassName
 *
 * @class
 * @extends ck.NetworkResponse
 *
 */
const ClassName = ck.NetworkResponse.extend({

    // init-property

    ctor: function (data) {
        // ctor
    },

    /**
     * Read data
     * @virtual
     */
    _readData: function () {
        // read-data
    },

    // read-function

    // get-set
});

/**
 * Create ClassName
 * @returns {ClassName}
 */
ClassName.create = function (data) {
    return new ClassName(data);
};