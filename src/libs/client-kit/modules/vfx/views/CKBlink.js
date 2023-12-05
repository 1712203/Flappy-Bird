/**
 * @class
 * @extends _ccs.Blink
 * @extends ck.SimpleAnimatedNode
 */
ck.Blink = _ccs.Blink.extend({

    /**
     * @constructor
     */
    ctor: function () {
        _ccs.Blink.prototype.ctor.call(this);
        ck.SimpleAnimatedNode.prototype.ctor.call(this);
    },

    /**
     * @override
     * @param callback
     */
    playShowAnimation: function (callback) {
        this.playCCSAnimShow(0, callback, 1);
    },
});

ck.extend(ck.Blink, ck.SimpleAnimatedNode);

/**
 * @class
 * @extends ck.Blink
 */
let Blink = ck.Blink;

/**
 * Create Blink
 * @returns {Blink}
 */
Blink.create = function () {
    return new Blink();
};


