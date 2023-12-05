/**
 * Delegate for a ck.TabSelector
 *
 * @class
 * @abstract
 * @extends cc.Class
 *
 */
ck.TabSelectorDelegate = cc.Class.extend({

    /**
     * Called when a tab is selected
     *
     * @virtual
     * @param {ck.TabSelector} sender - Tab Selector trigger this delegate event
     * @param {number} id - Tab ID
     */
    onTabSelected: function (sender, id) {
    },

    /**
     * Create tab selector item <br/>
     * Override this method if you use `ck.TabSelector.loadTabsData(tabsData)`
     * @virtual
     * @param {ck.TabSelector} tabSelector
     * @param {number} index - Tab index
     * @return {ck.TabSelectorItem}
     */
    createTabSelectorItem: function (tabSelector, index) {
        return null;
    },
});
