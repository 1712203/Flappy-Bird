/**
 * Used for nodes/classes with a countdown timer (Ex. timer to reset quest, end event, etc.) <br/>
 * Class extended from this class need to has a ccui.Text call `_txtTimeLeft` to update the time left <br/>
 * If your time left text is using another name, make sure you call `this.setTextTimeLeft(yourNode)` <br/>
 *
 * @class
 * @extends cc.Node
 *
 */
ck.CountdownTimer = cc.Class.extend({

    /**
     * Text used to display time left
     * @type {ccui.Text}
     */
    _txtTimeLeft: null,

    /**
     * Image time left background
     * @type {ccui.ImageView}
     */
    _imgTimeLeft: null,

    /**
     * Unix time (seconds) that end this timer
     * @type {number}
     */
    _expireTime: 0,

    /**
     * @type {string}
     */
    _timeStringFormat: "%s",

    /**
     * @type {function(sender: cc.Node): void}
     */
    _expiredCallback: null,

    /**
     * @constructor
     */
    ctor: function () {

    },

    /**
     * This function used to format time string displayed by this._txtTimeLeft <br/>
     * Default format is format using by TimeUtils.formatCountdownTime(seconds) <br/>
     * Override me if you use another format
     *
     * @param {number} seconds
     * @returns {string}
     */
    _getTimeStr: function (seconds) {
        let str = TimeUtils.formatCountdownTime(seconds);
        return this._timeStringFormat ? cc.formatStr(this._timeStringFormat, str) : str;
    },

    _setTimeString: function (seconds) {
        if (!ck.isValid(this._txtTimeLeft)) return;
        this._txtTimeLeft.setString(this._getTimeStr(seconds));
    },

    _updateTime: function (dt) {
        if (this._expireTime < 0) {
            this._stopUpdateTime();
            this.onTimeExpired();
            return;
        }
        const timeLeft = this._expireTime - TimeUtils.getCurrentSecond();
        if (timeLeft <= 0) {
            this._stopUpdateTime();
            this.onTimeExpired();
        } else {
            this._setTimeString(timeLeft);
        }
    },

    _startUpdateTime: function () {
        if (!cc.isFunction(this.schedule)) return;
        this.schedule(this._updateTime, 0.5);
    },

    _stopUpdateTime: function () {
        if (!cc.isFunction(this.unschedule)) return;
        this.unschedule(this._updateTime);
    },

    onTimeExpired: function () {
        this._stopUpdateTime();
        this.setTimeLeftVisible(false);
        if (cc.isFunction(this.setRedDotVisible)) {
            this.setRedDotVisible(false);
        }
        if (this._expiredCallback) {
            this._expiredCallback(this);
        }
    },

    setTimeStringFormat: function (format) {
        this._timeStringFormat = format;
    },

    setExpireTime: function (seconds) {
        this._expireTime = seconds;
        if (this._expireTime <= 0) {
            this.onTimeExpired();
        } else {
            const timeLeft = this._expireTime - TimeUtils.getCurrentSecond();
            if (timeLeft <= 0) {
                this.onTimeExpired();
            } else {
                this.setTimeLeftVisible(true);
                // only schedule update if remain time is smaller than one day
                if (timeLeft < ck.SECONDS_PER_DAY) {
                    this._setTimeString(timeLeft);
                    this._startUpdateTime();
                } else {
                    this._setTimeString(timeLeft);
                }
            }
        }
    },

    setRemainTime: function (seconds) {
        this.setExpireTime(seconds + TimeUtils.getCurrentSecond());
    },

    setTextTimeLeft: function (text) {
        this._txtTimeLeft = text;
    },

    setTimeLeftVisible: function (visible) {
        if (ck.isValid(this._txtTimeLeft)) {
            this._txtTimeLeft.setVisible(visible);
        }
        if (ck.isValid(this._imgTimeLeft)) {
            this._imgTimeLeft.setVisible(visible);
        }
    },

    /**
     * @return {boolean}
     */
    isExpired: function () {
        return this._expireTime <= TimeUtils.getCurrentSecond();
    },

    /**
     * @param {function(sender: cc.Node): void} cb
     */
    setExpiredCallback: function (cb) { this._expiredCallback = cb; },
});

/**
 * Key used by scheduler
 * @constant
 * @type {string}
 */
ck.CountdownTimer.SCHEUDLE_KEY = "CountdownTimerScheduleKey";
