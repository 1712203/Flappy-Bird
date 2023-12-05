/**
 * Base class of a main view <br/>
 * This class provides some basics stuffs (functions, properties, etc.) for manager to call <br/>
 * Main view can be anything (layer, popup, scene, etc.) extends from cc.Node <br/>
 * How to used: See the example below <br/>
 *
 * @class
 * @abstract
 * @extends ck.SimpleAnimatedNode
 * @extends ck.ManagerContainer
 * @extends ck.EventListenerNode
 * @extends cc.Node
 */
ck.BaseView = ck.SimpleAnimatedNode.extend({
    /**
     * Data used for render
     * @type {ck.BaseData|any}
     * @readonly
     */
    _data: null,

    /**
     * @type {ck.BaseManager}
     */
    _manager: null,

    /**
     * @constructor
     */
    ctor: function () {
        ck.SimpleAnimatedNode.prototype.ctor.call(this);
        ck.ManagerContainer.prototype.ctor.call(this);
        ck.EventListenerNode.prototype.ctor.call(this);
    },

    /**
     * Set and render data
     * @param {ck.BaseData|any} data
     */
    setData: function (data) {
        if (!ck.isValid(this)) return;
        this._data = data;
        this.refresh();
    },

    /**
     * Re-render data
     * @virtual
     */
    refresh: function () {

    },

    /**
     * Returns data
     * @returns {ck.BaseData|any}
     */
    getData: function () {
        return this._data;
    },

});

ck.extend(ck.BaseView, ck.ManagerContainer);
ck.extend(ck.BaseView, ck.EventListenerNode);

