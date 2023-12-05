/**
 * @class
 * @extends _ccs.LanguageWidget
 * @extends ck.GridViewCell
 */
ck.LanguageWidget = _ccs.LanguageWidget.extend({

    _isSelected: false,
    _pressCallback: null,

    /**
     * @type {ck.LanguageInfo}
     */
    _data: null,

    ctor: function () {
        _ccs.LanguageWidget.prototype.ctor.call(this);
        ck.UIUtils.fillContainer(this, this._root);
        this.setSelected(false);
        this.setTouchEnabled(true);
        this.addClickEventListener(this.onPressed.bind(this));
    },

    onPressed: function () {
        if (this._pressCallback) {
            this._pressCallback(this);
        }
    },

    setLanguageName: function (name) {
        if (!ck.isValid(this)) return;
        if (!name) return;
        this._txtName.setString(name);
    },

    setFlag: function (flag) {
        if (!ck.isValid(this)) return;
        if (!flag) return;
        this._imgFlag.loadTexture(flag, ccui.Widget.PLIST_TEXTURE);
    },

    setSelected: function (isSelected) {
        if (!ck.isValid(this)) return;
        this._isSelected = isSelected;
        this._imgSelect.setVisible(isSelected);
        this._imgUnselect.setVisible(!isSelected);
        this._check.setVisible(isSelected);
        this._txtName.setTextColor(isSelected ? cc.color("#FFFFFF") : cc.color("#808080"));
        this._imgFlag.setOpacity(isSelected ? 255 : 178);
    },

    /**
     * @param {ck.LanguageInfo} data
     */
    setData: function (data) {
        if (!ck.isValid(this)) return;
        this._data = data;
        if (!data) return;
        this.setLanguageName(data.getName());
        this.setFlag(data.getFlag());
        this._languageCode = data.getLanguageCode();
    },

    isSelected: function () {return this._isSelected;},

    setPressCallback: function (callback) {this._pressCallback = callback;},

    getLanguageCode: function () { return this._data ? this._data.getLanguageCode() : ""; },

    getLanguageCodeServer: function () { return this._data ? this._data.getLanguageCodeServer() : 1; },
});

/**
 * @return {ck.LanguageWidget}
 */
ck.LanguageWidget.create = () => new ck.LanguageWidget();

let LanguageWidget = ck.LanguageWidget;
