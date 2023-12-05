/**
 * ck.LoadingBar is a ccui.LoadingBar with more function:
 * - progress to percent
 * - progress from percent to percent
 * - can set a dispatch function when percent change
 * @todo cc.ProgressTimer now can be used in Cocos Studio
 */
ck.LoadingBar = ccui.LoadingBar.extend({
    _fromPercent: 0,
    _toPercent: 0,
    _elapsed: 0,
    _duration: 0,
    _firstTick: false,
    _dispatchFunc: null,

    ctor: function () {
        this._super();
    },

    setPercent: function (percent) {
        var sp = 0;
        if(percent >= 0 && percent <= 100)
            sp = this._super(percent);
        if (this._dispatchFunc && cc.isFunction(this._dispatchFunc))
            this._dispatchFunc(percent);
        return sp;
    },

    progressTo: function (duration = 0, toPercent = 0) {
        if (!ck.isValid(this)) return;
        if (this.getPercent() === toPercent) return;
        if (duration === 0) {
            this.setPercent(toPercent);
            return;
        }
        this._fromPercent = this.getPercent();
        this._toPercent = toPercent;
        this._elapsed = 0;
        this._firstTick = true;
        this._duration = duration;
        this.unschedule(this._updatePercentInterval);
        this.schedule(this._updatePercentInterval);
    },

    progressFromTo: function (duration = 0, fromPercent = 0, toPercent = 0) {
        if (!ck.isValid(this)) return;
        if (fromPercent === toPercent) return;
        if (duration === 0) {
            this.setPercent(toPercent);
            return;
        }
        this._fromPercent = fromPercent;
        this._toPercent = toPercent;
        this._elapsed = 0;
        this._firstTick = true;
        this._duration = duration;
        this.unschedule(this._updatePercentInterval);
        this.schedule(this._updatePercentInterval);
    },

    stopProgress: function () {
        this.unschedule(this._updatePercentInterval);
    },

    _updatePercentInterval: function (dt) {
        if(!cc.sys.isObjectValid(this)){
            return;
        }

        if (this._firstTick) {
            this._firstTick = false;
            this._elapsed = 0;
        } else
            this._elapsed += dt;

        let t = this._elapsed / (this._duration > 0.0000001192092896 ? this._duration : 0.0000001192092896);
        t = (1 > t ? t : 1);
        this._updatePercent(t > 0 ? t : 0);

        if (this._elapsed >= this._duration)
            this.unschedule(this._updatePercentInterval);
    },

    _updatePercent: function (time) {
        this.setPercent(this._fromPercent + (this._toPercent - this._fromPercent) * time);
    },

    setDispatchProgressPercentFunction: function (func) {
        this._dispatchFunc = func;
    },
});

/**
 * @return {ck.LoadingBar}
 */
ck.LoadingBar.create = function () {
    return new ck.LoadingBar();
};