/**
 * @class
 * @abstract
 * @extends cc.Class
 */
ck.AutoButtonBehavior = cc.Class.extend({

    /**
     * @type {ccui.Layout}
     */
    _root: null,

    /**
     * @type {ccui.ImageView}
     */
    _imgNormal: null,

    /**
     * @type {ccui.ImageView}
     */
    _imgPressed: null,

    /**
     * @type {ccui.Text}
     */
    _txtPressed: null,

    /**
     * @type {ccui.Text}
     */
    _txtStop: null,

    /**
     * Time pressed to change to auto mode (seconds)
     * @type {number}
     */
    _timeToAuto: 1,

    /**
     * @type {boolean}
     */
    _isAuto: false,

    /**
     * @type {boolean}
     */
    _isPressWhenAuto: false,

    /**
     * @type {Function}
     */
    _callback: null,

    /**
     * @type {boolean}
     */
    _isPressEnabled: true,

    /**
     * @constructor
     */
    ctor: function () {
        UIUtils.fillContainer(this, this._root);
        if (this._root) this._root.addTouchEventListener(this.onTouched.bind(this));
        this._changeStateToNormal();
        if (this._txtStop) this._txtStop.setVisible(false);
    },

    _changeStateToPressed: function () {
        if (this._imgPressed) this._imgPressed.setVisible(true);
        if (this._imgNormal) this._imgNormal.setVisible(false);
    },

    _changeStateToNormal: function () {
        if (this._imgNormal) this._imgNormal.setVisible(true);
        if (this._imgPressed) this._imgPressed.setVisible(false);
    },

    _enabledAuto: function () {
        this._isAuto = true;
        if (this._txtStop) this._txtStop.setVisible(true);
        if (this._txtPressed) this._txtPressed.setVisible(false);
    },

    _stopAuto: function () {
        this.unschedule(this._enabledAuto);
        this._isAuto = false;
        if (this._txtStop) this._txtStop.setVisible(false);
        if (this._txtPressed) this._txtPressed.setVisible(true);
    },

    onButtonTouchBegan: function () {
        this._isPressWhenAuto = this._isAuto;
        if (this._isAuto) return;
        this._changeStateToPressed();
        this.scheduleOnce(this._enabledAuto, this._timeToAuto);
        if (this._isPressEnabled) {
            this._callback && this._callback();
        }
    },

    onButtonTouchEnded: function () {
        if (!this._isPressWhenAuto && this._isAuto) return;
        this._changeStateToNormal();
        this._stopAuto();
    },

    onButtonTouchCancelled: function () {
        this.onButtonTouchEnded();
    },

    /**
     *
     * @param {cc.Node} sender
     * @param {number} type
     * @private
     */
    onTouched: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                this.onButtonTouchBegan();
                break;
            case ccui.Widget.TOUCH_ENDED:
                this.onButtonTouchEnded();
                break;
            case ccui.Widget.TOUCH_CANCELED:
                this.onButtonTouchCancelled();
                break
        }
    },

    /**
     * @param {number} seconds
     */
    setTimeToAuto: function (seconds) {
        this._timeToAuto = seconds;
    },

    /**
     * Set callback called on touched began
     * @param {Function} callback
     */
    setCallback: function (callback) {
        this._callback = callback;
    },

    /**
     * @param {boolean} enabled
     */
    setPressEnabled: function (enabled) {
        this._isPressEnabled = enabled;
    },

    /**
     * @return {boolean}
     */
    isAuto: function () {
        return this._isAuto;
    }
});
