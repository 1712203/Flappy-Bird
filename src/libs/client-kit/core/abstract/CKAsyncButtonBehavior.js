/**
 * @class
 * @abstract
 * @extends cc.Class
 */
ck.AsyncButtonBehavior = cc.Class.extend({

    /**
     * @type {ccui.ImageView}
     */
    _imgButton: null,

    /**
     * @type {ccui.ImageView}
     */
    _imgIconButton: null,

    /**
     * @type {ccui.ImageView}
     */
    _imgLoadingButton: null,

    /**
     * @type {ccui.Text}
     */
    _txtButton: null,

    /**
     * @type {Function}
     */
    _responseCallbackFunc: null,

    /**
     * ck.AsyncButtonBehavior constructor
     * @constructor
     */
    ctor: function () {
        if (this._imgLoadingButton) {
            this._imgLoadingButton.setVisible(false);
        }
        this.setTouchEnabled(true);
        ck.UIUtils.initPressableWidget(this);
    },

    onWaiting: function () {
        this.setBtnEnabled(false);
        this.setBtnLoading(true);
    },

    onResponse: function () {
        this.unschedule(this.onResponse);
        this.setBtnEnabled(true);
        this.setBtnLoading(false);
        if (cc.isFunction(this._responseCallbackFunc)) {
            this._responseCallbackFunc();
        }
    },

    setBtnEnabled: function (enable) {
        ck.UIUtils.setAllChildGrayscaleEnabled(this, !enable);
        this.setTouchEnabled(enable);
    },

    setBtnLoading: function (loading) {
        if (this._txtButton)
            this._txtButton.setVisible(!loading);
        if (this._imgIconButton)
            this._imgIconButton.setVisible(!loading);
        if (this._imgLoadingButton) {
            this._imgLoadingButton.setVisible(loading);
            this._imgLoadingButton.stopAllActions();
            if (loading) {
                this._imgLoadingButton.runAction(cc.sequence(cc.rotateBy(0.5, 360)).repeatForever());
            }
        }
    },

    /**
     * @param seconds {number} AsyncButton will timeout after @seconds@ seconds
     */
    setTimeout: function (seconds) {
        this.unschedule(this.onResponse);
        this.scheduleOnce(this.onResponse, seconds);
    },

    addResponseListener: function (func) {
        this._responseCallbackFunc = func;
    },

    getImage: function () {
        return this._imgButton;
    },

    getText: function () {
        return this._txtButton;
    },

    getIcon: function () {
        return this._imgIconButton;
    },

    getImageLoading: function () {
        return this._imgLoadingButton;
    },

});
