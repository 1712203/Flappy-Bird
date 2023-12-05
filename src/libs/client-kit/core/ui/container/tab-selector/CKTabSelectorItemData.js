/**
 * Data for a tab selector item
 * @class
 */
ck.TabSelectorItemData = cc.Class.extend({
    /**
     * @type {number}
     */
    _id: -1,

    /**
     * @type {string}
     */
    _name: "",

    /**
     * @type {boolean}
     */
    _hasRedDot: false,

    /**
     * @constructor
     * @param {number} id
     * @param {string} name
     * @param {boolean} [hasRedDot=false]
     */
    ctor: function (id = -1, name = "", hasRedDot = false) {
        this._id = id;
        this._name = name;
        this._hasRedDot = hasRedDot;
    },

    /**
     * @returns {number}
     */
    getID: function () {
        return this._id;
    },

    /**
     * @param {number} id
     */
    setID: function (id) {
        this._id = id;
    },

    /**
     * @return {string}
     */
    getName: function () {
        return this._name;
    },

    /**
     * @param {string} name
     */
    setName: function (name) {
        this._name = name;
    },

    /**
     * @returns {boolean}
     */
    hasRedDot: function () {
        return this._hasRedDot;
    },

    /**
     * @param {boolean} hasRedDot
     */
    setHasRedDot: function (hasRedDot) {
        this._hasRedDot = hasRedDot;
    },
});

/**
 * @param {number} id
 * @param {string} name
 * @param {boolean} [hasRedDot=false]
 * @return {ck.TabSelectorItemData}
 */
ck.TabSelectorItemData.create = function (id, name, hasRedDot = false) {
    return new ck.TabSelectorItemData(id, name, hasRedDot);
};
