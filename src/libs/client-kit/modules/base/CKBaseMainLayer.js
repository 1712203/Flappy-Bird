/**
 * Base Main Layer for each scene (Ex. HomeLayer for HomeScene)
 * @class
 * @abstract
 * @extends ck.BaseView
 */
ck.BaseMainLayer = ck.BaseView.extend({

    /**
     * @constructor
     */
    ctor: function () {
        ck.BaseView.prototype.ctor.call(this);
    },

    /**
     * @virtual
     * @return {Map<number, cc.Point>}
     */
    getItemPositions: function () {
        return new Map();
    },

    /**
     * @return {cc.Point}
     */
    getDefaultItemPosition: function () {
        return cc.p(0, 0);
    },

    // region Overrides

    playShowAnimation: function (callback) {
        callback && callback();
    },

    playHideAnimation: function (callback) {
        callback && callback();
    }

    // endregion

});