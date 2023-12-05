/**
 * ClassName
 *
 * @class
 * @extends cc.Class
 *
 */
let ClassName = cc.Class.extend({

    // init-property

    /**
     * ClassName constructor
     * @constructor
     */
    ctor: function () {
        // ctor
    },

    reset: function () {
        this._init();
    },

    /**
     * init function
     * @private
     */
    _init: function () {
        // init
    },

    /**
     * copy from another object
     * @param {ClassName} newData
     */
    copyFrom: function (newData) {
        if (!newData) return;
        // copy-from
    },

    // get-set
});

/**
 * Create ClassName
 * @returns {ClassName}
 */
ClassName.create = function () {
    return new ClassName();
};

/**
 * Create ClassName with data
 * rem-param-constructor
 * @returns {ClassName}
 */
ClassName.createWithData = function (/** param-constructor */) {
    let object = new ClassName();
    // set-property
    return object;
};