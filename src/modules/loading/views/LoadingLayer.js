/**
 * @class
 * @extends ck.LoadingLayer
 */
let LoadingLayer = ck.LoadingLayer.extend({

    /**
     * LoadingLayer constructor
     * @constructor
     */
    ctor: function () {
        ck.LoadingLayer.prototype.ctor.call(this);
    },

    /**
     * @override
     */
    loadNextScene: function () {
        let pisti = gm.pisti;
        if (pisti.isReconnected()) {
            pisti.reconnect();
        } else {
            this.loadHomeScene();
        }
    },
});

/**
 * Create LoadingLayer
 * @returns {LoadingLayer}
 */
LoadingLayer.create = function () {
    return new LoadingLayer();
};

ck.LoadingLayer.create = LoadingLayer.create;