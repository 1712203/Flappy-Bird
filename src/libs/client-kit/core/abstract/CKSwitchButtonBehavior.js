/**
 * @class
 * @abstract
 * @extends cc.Class
 */
ck.SwitchButtonBehavior = cc.Class.extend({

    /**
     * @type {ccui.Widget}
     */
    _root: null,

    /**
     * @type {ccui.ImageView}
     */
    _imgBack: null,

    /**
     * @type {ccui.ImageView}
     */
    _imgSwitch: null,

    /**
     * @type {ccui.Text}
     */
    _txtState: null,

    /**
     * @type {boolean}
     */
    _isEnabled: false,

    _backgroundOnTexture: "",

    _backgroundOffTexture: "",

    _switchOnTexture: "",

    _switchOffTexture: "",

    /**
     * ck.SwitchButtonBehavior constructor
     * @constructor
     */
    ctor: function () {
        ck.UIUtils.fillContainer(this, this._root);
        this.setTouchEnabled(true);
        this.setSwitchEnabled(false);
    },

    /**
     * @private
     */
    _updateTextState: function () {
        const str = this._isEnabled ? "TXT_ON" : "TXT_OFF";
        this._txtState.setString(gm.localize.getText(str));
        const x = this._isEnabled ? this._root.width * 0.25 : this._root.width * 0.75;
        this._txtState.setPositionX(x);
    },

    /**
     * @private
     */
    _updateBackground: function () {
        let file = this._isEnabled ? this._backgroundOnTexture : this._backgroundOffTexture;
        ck.UIUtils.loadTexture(this._imgBack, file);
    },

    /**
     * @private
     */
    _updateSwitch: function () {
        // Update texture
        const file = this._isEnabled ? this._switchOnTexture : this._switchOffTexture;
        ck.UIUtils.loadTexture(this._imgSwitch, file);

        // Run an animation
        this._imgSwitch.stopAllActions();
        const halfWidth = this._imgSwitch.getContentSize().width * 0.5;
        const x = this._isEnabled ? this._root.width - halfWidth : halfWidth;
        const position = cc.p(x, this._imgSwitch.getPositionY());
        this._imgSwitch.runAction(cc.moveTo(0.2, position));
    },

    /**
     * @param {boolean} enabled
     */
    setSwitchEnabled: function (enabled) {
        if (!ck.isValid(this)) return;
        this._isEnabled = enabled;
        this._updateTextState();
        this._updateBackground();
        this._updateSwitch();
    },

    /**
     * Is switch on
     * @return {boolean}
     */
    isEnabled: function () {
        return this._isEnabled;
    },

    /**
     * Switch state
     */
    switch: function () {
        if (!ck.isValid(this)) return;
        this.setSwitchEnabled(!this._isEnabled);
    },

    /**
     * @param {string} backgroundOnTexture
     */
    setBackgroundOnTexture: function (backgroundOnTexture) {
        this._backgroundOnTexture = backgroundOnTexture;
    },

    /**
     * @param {string} backgroundOffTexture
     */
    setBackgroundOffTexture: function (backgroundOffTexture) {
        this._backgroundOffTexture = backgroundOffTexture;
    },

    /**
     * @param {string} switchOnTexture
     */
    setSwitchOnTexture: function (switchOnTexture) {
        this._switchOnTexture = switchOnTexture;
    },

    /**
     * @param {string} switchOffTexture
     */
    setSwitchOffTexture: function (switchOffTexture) {
        this._switchOffTexture = switchOffTexture;
    },

});
