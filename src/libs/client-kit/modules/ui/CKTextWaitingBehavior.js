/**
 * @class
 * @abstract
 */
ck.TextWaitingBehavior = cc.Class.extend({

    _spriteDots: null,
    _interval: 0.42,
    _index: 0,

    ctor: function () {
        this._spriteDots = [
            this._spriteDot01, this._spriteDot02, this._spriteDot03
        ];
    },

    idle: function () {
        this.hideAllDots();
        this._index = 0;
        this.schedule(this.updateDot, this._interval);
    },

    updateDot: function () {
        let sprite = this._spriteDots[this._index];
        if (sprite) {
            sprite.setVisible(true);
        } else {
            this.hideAllDots();
        }
        this._index = (this._index + 1) % 4;
    },

    hideAllDots: function () {
        if (!ck.isValid(this)) return;
        this._spriteDots.forEach(sprite => sprite && sprite.setVisible(false));
    },

    stopIdle: function () {
        if (!ck.isValid(this)) return;
        this.unschedule(this.updateDot);
        this.hideAllDots();
        this._index = 0;
    },
});
