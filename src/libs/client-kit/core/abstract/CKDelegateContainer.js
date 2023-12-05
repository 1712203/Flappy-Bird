/**
 * For classes has a delegate property
 *
 * @class
 * @abstract
 * @extends cc.Class
 *
 */
ck.DelegateContainer = cc.Class.extend({

    _delegate: null,

    /**
     * @constructor
     */
    ctor: function () {

    },

    /**
     * Returns its delegate
     */
    getDelegate: function () {
        return this._delegate;
    },

    /**
     * Set delegate
     */
    setDelegate: function (delegate) {
        this._delegate = delegate;
    },
});
