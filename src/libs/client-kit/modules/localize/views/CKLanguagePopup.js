/**
 * @class
 * @extends _ccs.LanguagePopup
 * @extends ck.PopupBehavior
 * @extends ck.BaseView
 * @extends ck.GridViewDelegate
 */
ck.LanguagePopup = _ccs.LanguagePopup.extend({

    /** @type {ck.LanguageWidget} */
    _selectedWidget: null,

    /** @type {ck.LocalizeManager} */
    _manager: null,

    ctor: function () {
        _ccs.LanguagePopup.prototype.ctor.call(this);
        ck.PopupBehavior.prototype.ctor.call(this);
        this.initGridView();
        this.initButtons();
    },

    initGridView: function () {
        this._gridView.setMaxColumn(1);
        this._gridView.setMargin(25);
        this._gridView.setDelegate(this);
    },

    initButtons: function () {
        ck.UIUtils.initPressableWidget(this._imgChange, this.onChangePressed.bind(this));
    },

    createGridViewCell: function (gridView, index) {
        let widget = ck.LanguageWidget.create();
        widget.setPressCallback(this.onWidgetPressed.bind(this));
        return widget;
    },

    /**
     * @param {ck.LanguageWidget} widget
     */
    onWidgetPressed: function (widget) {
        if (!widget) return;
        if (widget.isSelected()) return;
        if (this._selectedWidget) this._selectedWidget.setSelected(false);
        this._selectedWidget = widget;
        this._selectedWidget.setSelected(true);
    },

    onChangePressed: function () {
        if (!this._selectedWidget) return;
        const selectedLanguage = this._selectedWidget.getLanguageCode();
        if (selectedLanguage == this._manager.getCurrentLanguageCode()) return;
        this._manager.setLanguage(selectedLanguage);
        this.hide();
    },

    getWidget: function (languageCode) {
        let widgets = this._gridView.getCells();
        return widgets.find(widget => widget && widget instanceof ck.LanguageWidget && widget.getLanguageCode() === languageCode);
    },

    selectLanguage: function (languageCode) {
        let widget = this.getWidget(languageCode);
        if (widget) {
            this.onWidgetPressed(widget);
        }
    },

    refresh: function () {
        this._gridView.loadCellsData(gm.localize.config.getLanguagesArray());
        this.selectLanguage(gm.localize.getCurrentLanguageCode())
    },
});

ck.extend(ck.LanguagePopup, ck.PopupBehavior);
ck.extend(ck.LanguagePopup, ck.BaseView);

/**
 * @returns {ck.LanguagePopup}
 */
ck.LanguagePopup.create = () => new ck.LanguagePopup();

let LanguagePopup = ck.LanguagePopup;
