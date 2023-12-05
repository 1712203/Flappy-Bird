/**
 * Feature manager with basic stuff: feature icon, level unlocked, on/off flag (read from server or config)
 * @class
 * @abstract
 * @extends ck.BaseManager
 * @property {ck.BaseFeatureData} data
 * @property {ck.BaseFeatureIcon} icon
 */
ck.BaseFeatureManager = ck.BaseManager.extend({

    /**
     * @type {ck.BaseFeatureData}
     */
    _data: null,

    /**
     * @type {ck.BaseFeatureIcon}
     */
    _icon: null,

    /**
     * @constructor
     */
    ctor: function () {
        ck.BaseManager.prototype.ctor.call(this);
        this.setEnabled(true);
    },

    // region Icon

    /**
     * @abstract
     * @return {ck.BaseFeatureIcon}
     */
    _createIcon: function () {
        return null;
    },

    /**
     * Reset icon
     */
    resetIcon: function () {
        this._icon = null;
    },

    /**
     * @param {ck.BaseFeatureIcon} icon
     */
    setIcon: function (icon) {
        this._icon = icon;
        if (!icon) return;
        this._icon.setManager(this);
        this._icon.setData(this._data);
        this._icon.setOnExitCallback(this.resetIcon.bind(this));
    },

    /**
     * @return {ck.BaseFeatureIcon}
     */
    getIcon: function () {
        return this._icon;
    },

    /**
     * @return {ck.BaseEventIcon|null}
     */
    createIcon: function () {
        this._icon = this._createIcon();
        if (!this._icon) return null;
        this._icon.setManager(this);
        this._icon.setData(this._data);
        this._icon.setOnExitCallback(this.resetIcon.bind(this));
        return this._icon;
    },

    /**
     * @return {ck.BaseEventIcon|null}
     */
    createCloneIcon: function () {
        let icon = this._createIcon();
        if (!icon) return null;
        icon.setManager(this);
        icon.setData(this._data);
        return icon;
    },

    checkEnabledAndUnlockWhenIconPressed: function () {
        if (!this.isEnabled()) {
            this.showPopupUnLockedLevelRequired();
            return false;
        }
        if (!this.isUnlocked()) {
            this.showPopupUnLockedLevelRequired();
            return false
        }
        return true;
    },

    /**
     * @param {ck.BaseFeatureIcon} icon
     */
    onIconPressed: function (icon) {
        if (this.checkEnabledAndUnlockWhenIconPressed()) {
            this.showView();
        }
    },

    /**
     * @abstract
     * @return {boolean}
     */
    hasIconRedDot: function () {
        return false;
    },

    /**
     * Returns number display on icon red dot
     * @returns {number}
     */
    getNumRedDot: function () {
        return 0;
    },

    /**
     * Update icon red dot
     */
    refreshRedDot: function () {
        if (!ck.isValid(this._icon)) return;
        this._icon.refreshRedDot();
    },

    refreshIcon: function () {
        if (!ck.isValid(this._icon)) return;
        this._icon.refresh();
    },

    setIconRedDotVisible: function (visible) {
        if (!ck.isValid(this._icon)) return;
        this._icon.setRedDotVisible(visible)
    },

    // endregion

    // region Unlock, Enabled, Available check

    /**
     * Is this feature enabled (on/off from server or config)
     * @return {boolean}
     */
    isEnabled: function () {
        return this._data.isEnabled();
    },

    /**
     * @return {boolean}
     */
    isUnlocked: function () {
        return gm.getPlayerLevel() >= this._data.getLevelUnlocked();
    },

    /**
     * Is this feature available
     * @return {boolean}
     */
    isAvailable: function () {
        return this.isEnabled() && this.isUnlocked();
    },

    /**
     * @return {AlertDialog}
     */
    showPopupUnLockedLevelRequired: function () {
        const message = gm.localize.getText("TXT_FEATURE_LEVEL_UNLOCKED_MESSAGE");
        return gm.notice.alert(message.replace("{level}", this._data.getLevelUnlocked()));
    },

    setEnabled: function (enabled) {
        this._data.setEnabled(enabled);
    },

    // endregion


});

let _p = ck.BaseFeatureManager.prototype;
cc.defineGetterSetter(_p, "icon", _p.getIcon);
_p = null;

