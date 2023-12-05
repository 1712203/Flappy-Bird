/**
 * Node that has event listeners
 * @class
 * @abstract
 * @extends cc.Class
 */
ck.EventListenerNode = cc.Class.extend({

    /**
     * List of event listeners
     * @type {cc.EventListener[]}
     */
    _listeners: null,

    /**
     * @type {Set<string>}
     */
    _listenerNames: null,

    /**
     * @constructor
     */
    ctor: function () {
        this._listeners = [];
        this._listenerNames = new Set();
    },

    /**
     * Add a listener
     * @param {string} name Event name
     * @param {Function} callback
     */
    addListener: function (name, callback) {
        if (!this._listeners) this._listeners = [];
        if (!this._listenerNames) this._listenerNames = new Set();
        if (this._listenerNames.has(name)) return; // Prevent adding twice
        this._listeners.push(cc.eventManager.addCustomListener(name, function (event) {
            if (ck.isValid(this) && cc.isFunction(callback)) callback(event);
        }.bind(this)));
        this._listenerNames.add(name);
    },

    /**
     * Remove all listeners
     */
    removeListeners: function () {
        if (!this._listeners) return;
        if (!this._listenerNames) return;
        this._listeners.forEach(listener => {
            cc.eventManager.removeListener(listener);
        });
        this._listeners = [];
        this._listenerNames.clear();
    },

});

