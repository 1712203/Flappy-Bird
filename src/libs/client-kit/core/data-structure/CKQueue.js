/**
 * Simple implement Javascript queue using array
 * 
 * @class
 * @extends cc.Class
 */
ck.Queue = cc.Class.extend({
    /**
     * @type {any[]}
     */
    _elements: null,

    ctor: function () {
        this._elements = [];
    },

    enqueue: function (element) {
        this._elements.push(element);
    },

    push: function (element) {
        this.enqueue(element);
    },

    dequeue: function () {
        return this._elements.shift();
    },

    pop: function () {
        return this.dequeue();
    },

    empty: function () {
        return this._elements.length < 1;
    },

    peek: function () {
        return this.empty() ? null : this._elements[0];
    },

    size: function () {
        return this._elements.length;
    },

    clear: function () {
        this._elements = [];
    },
});

/**
 * @returns {ck.Queue}
 */
ck.Queue.create = function () {
    return new ck.Queue();
};

