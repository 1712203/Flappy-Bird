/**
 * @class
 * @abstract
 * @extends cc.Class
 * @extends ccui.Widget - For API purpose only
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
    _isSwitchEnabled: false,

    /**
     * @type {string}
     */
    _backgroundOnTexture: "",

    /**
     * @type {string}
     */
    _backgroundOffTexture: "",

    /**
     * @type {string}
     */
    _switchOnTexture: "",

    /**
     * @type {string}
     */
    _switchOffTexture: "",

    /**
     * @constructor
     */
    ctor: function () {
        UIUtils.fillContainer(this, this._root);
        this.setTouchEnabled(true);
        this.setSwitchEnabled(false);
    },

    /**
     * @private
     */
    _updateTextState: function () {
        const str = this._isSwitchEnabled ? "TXT_ON" : "TXT_OFF";
        this._txtState.setString(gm.localize.getText(str));
        const x = this._isSwitchEnabled ? this._root.width * 0.25 : this._root.width * 0.75;
        this._txtState.setPositionX(x);
    },

    /**
     * @private
     */
    _updateBackground: function () {
        let file = this._isSwitchEnabled ? this._backgroundOnTexture : this._backgroundOffTexture;
        UIUtils.loadTexture(this._imgBack, file);
    },

    /**
     * @private
     */
    _updateSwitch: function () {
        // Update texture
        const file = this._isSwitchEnabled ? this._switchOnTexture : this._switchOffTexture;
        UIUtils.loadTexture(this._imgSwitch, file);

        // Run an animation
        this._imgSwitch.stopAllActions();
        const halfWidth = this._imgSwitch.getContentSize().width * 0.5;
        const x = this._isSwitchEnabled ? this._root.width - halfWidth : halfWidth;
        const position = cc.p(x, this._imgSwitch.getPositionY());
        this._imgSwitch.runAction(cc.moveTo(0.2, position));
    },

    /**
     * @param {boolean} enabled
     */
    setSwitchEnabled: function (enabled) {
        if (!ck.isValid(this)) return;
        this._isSwitchEnabled = enabled;
        this._updateTextState();
        this._updateBackground();
        this._updateSwitch();
    },

    /**
     * Is switch on
     * @return {boolean}
     */
    isSwitchEnabled: function () {
        return this._isSwitchEnabled;
    },

    /**
     * Switch state
     */
    switch: function () {
        if (!ck.isValid(this)) return;
        this.setSwitchEnabled(!this._isSwitchEnabled);
        gm.system.playSFXButtonPressed();
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
