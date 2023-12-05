/**
 * For classes has a manager property
 *
 * @class
 * @abstract
 * @extends cc.Class
 *
 */
ck.ManagerContainer = cc.Class.extend({

    /**
     * @type {ck.BaseManager}
     */
    _manager: null,

    /**
     * @constructor
     */
    ctor: function () {

    },

    /**
     * Returns its manager
     */
    getManager: function () {
        return this._manager;
    },

    /**
     * Set manager
     */
    setManager: function (manager) {
        this._manager = manager;
    },
});
