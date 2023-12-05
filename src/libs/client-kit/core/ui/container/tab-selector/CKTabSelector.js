/**
 * Used as a container of TabSelectorItem(s) (as tab buttons to switch between tabs) <br/>
 * Main purpose: Layout tab items in an order, update tabs when a tab is select
 *
 * @class
 * @extends ck.GridViewVertical
 *
 */
ck.TabSelector = ck.GridViewVertical.extend({

    /**
     * @type {ck.TabSelectorItem[]}
     */
    _widgets: null,

    /**
     * Selected tab id
     * @type {number}
     */
    _selectedTabID: -1,

    /**
     * @type {ck.TabSelectorDelegate}
     */
    _delegate: null,

    /**
     * @type {boolean}
     */
    _ignoreCheckCurrentTab: false,

    /**
     * @type {boolean}
     */
    _isChangeTabEnabled: true,

    /**
     * @constructor
     */
    ctor: function () {
        ck.GridViewVertical.prototype.ctor.call(this, 1000);
    },

    /**
     * @override
     * @return {ck.TabSelectorItem|ccui.Widget}
     */
    _createCell: function (index) {
        let tab = this._delegate ? this._delegate.createTabSelectorItem(this, index) : new ccui.Widget();
        this.addTab(tab);
        return tab;
    },

    /**
     * Callback when a tab is pressed
     * @param {ck.TabSelectorItem} tab
     */
    onTabPressed: function (tab) {
        if (!ck.isValid(this)) return;
        if (!this._isChangeTabEnabled) return;
        if (!tab) return;
        this.selectTab(tab.getID());
    },

    /**
     * Has tab with id or not
     * @param {number} id
     * @returns {boolean}
     */
    hasTab: function (id) {
        return this._widgets.some(tab => tab && tab.getID() === id);
    },

    /**
     * Add a tab
     * @param {ck.TabSelectorItem} tab
     */
    addTab: function (tab) {
        if (!ck.isValid(this)) return;
        if (!tab) return;
        if (this.hasTab(tab.getID())) {
            cc.error("[ck.TabSelector] Tab with id %d existed!!!!!", tab.getID());
            return;
        }
        this.addCell(tab);
        tab.setPressCallback(this.onTabPressed.bind(this));
    },

    /**
     * Set tabs
     * @param {ck.TabSelectorItem[]} tabs
     */
    setTabs: function (tabs) {
        this.setCells(tabs);
    },

    /**
     * Get a tab selector item
     * @param {number} id
     * @return {ck.TabSelectorItem}
     */
    getTab: function (id) {
        return this._widgets.find(tab => tab && tab.getID() === id);
    },

    /**
     * Select the first tab
     * @returns {boolean} Change tab success or not
     */
    selectFirstTab: function () {
        let firstTab = this._widgets[0];
        return firstTab ? this.selectTab(firstTab.getID()) : false;
    },

    /**
     * Select a tab
     * @param {number} id
     * @returns {boolean} Change tab success or not (if id is the same as current tab id, nothing will change, false will be returned)
     */
    selectTab: function (id) {
        if (!ck.isValid(this)) return false;
        if (!this._ignoreCheckCurrentTab && id === this._selectedTabID) return false;
        const prevTab = this.getTab(this._selectedTabID);
        const currentTab = this.getTab(id);
        if (!currentTab) return false;
        if (prevTab) prevTab.setSelected(false);
        this._selectedTabID = id;
        currentTab.setSelected(true);
        if (this._delegate) {
            this._delegate.onTabSelected(this, id);
        }
        return true;
    },

    /**
     * Get selected tab id
     * @returns {number}
     */
    getSelectedTabID: function () {
        return this._selectedTabID;
    },

    /**
     * @returns {ck.TabSelectorDelegate}
     */
    getDelegate: function () {
        return this._delegate;
    },

    /**
     * @param {ck.TabSelectorDelegate} delegate
     */
    setDelegate: function (delegate) {
        this._delegate = delegate;
    },

    /**
     * @return {ck.TabSelectorItem[]}
     */
    getTabs: function () {
        return this._widgets;
    },

    /**
     * @param value
     */
    setIgnoreCheckCurrentTab: function (value) {
        this._ignoreCheckCurrentTab = value;
    },

    /**
     * @param {ck.TabSelectorItemData[]} tabsData
     */
    loadTabsData: function (tabsData) {
        this.loadCellsData(tabsData);
    },

    /**
     * @param enabled
     */
    setChangeTabEnabled: function (enabled) {
        this._isChangeTabEnabled = enabled;
    },

    getNoTabs: function () {
        return this._widgets.length;
    },
});

/**
 * @returns {ck.TabSelector}
 */
ck.TabSelector.create = function () {
    return new ck.TabSelector();
};
