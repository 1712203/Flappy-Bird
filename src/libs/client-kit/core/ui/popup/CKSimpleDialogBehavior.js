/**
 * @class
 * @abstract
 * @extends ck.PopupBehavior
 */
ck.SimpleDialogBehavior = ck.PopupBehavior.extend({

    /**
     * @type {ccui.Text}
     */
    _txtButton: null,

    /**
     * @type {ccui.Text}
     */
    _txtMessage: null,

    /**
     * @type {ccui.ImageView}
     */
    _imgButton: null,

    /**
     * Callback when click ok button
     * @type {Function}
     */
    _callback: null,

    /**
     * Callback when click close button or click outside
     * @type {Function}
     */
    _closeCallback: null,

    /**
     * @type {ccui.Text}
     */
    _txtHeader: null,

    /**
     * @type {boolean}
     */
    _isHideOnButtonPressed: true,

    /**
     * @constructor
     */
    ctor: function () {
        ck.PopupBehavior.prototype.ctor.call(this);
        UIUtils.initPressableWidget(this._imgButton, this.onButtonPressed.bind(this));
    },

    setButtonText: function (text) {
        if (!ck.isValid(this._txtButton)) return;
        this._txtButton.setString(text || "OK");
    },

    setMessage: function (message) {
        if (!ck.isValid(this._txtMessage)) return;
        this._txtMessage.setString(message || "");
    },

    onButtonPressed: function () {
        if (this._callback) {
            this._callback();
        }
        if (this._isHideOnButtonPressed) {
            this.hide();
        }
    },

    onClosePressed: function () {
        if(this._closeCallback) {
            this._closeCallback();
            this._closeCallback = null;
        }
        ck.PopupBehavior.prototype.onClosePressed.call(this);
    },

    onBackgroundPressed: function () {
        if(this._closeCallback) {
            this._closeCallback();
            this._closeCallback = null;
        }
        ck.PopupBehavior.prototype.onBackgroundPressed.call(this);
    },

    setCallback: function (callback) {
        this._callback = callback;
    },

    setCloseCallback: function (closeCallback) {
        this._closeCallback = closeCallback;
    },

    setHeader: function (text) {
        if (!ck.isValid(this._txtHeader)) return;
        this._txtHeader.setString(text);
    },

    setHideOnButtonPressed: function (isHide) {
        this._isHideOnButtonPressed = isHide;
    },
});
