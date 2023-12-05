/**
 * A pre-built tab view behaviours
 *
 * @class
 * @extends ck.CCSWidget
 *
 * @example
 * this._tabView = ck.TabView.create(this._layoutTabViewRoot, delegate);
 * this._tabView.setDefaultTabIndex(defaultTabIndex);
 * @todo Change this class to a component class (remove ck.CCSWidget)
 */
ck.TabView = ck.CCSWidget.extend({
    LOG_TAG: "[ck.TabView]",

    ctor: function (ccsNode, delegate) {
        this._init();
        ck.CCSWidget.prototype.ctor.call(this, ccsNode);
        this.setDelegate(delegate);
        this._initState();
        this._initTabView();
    },

    _getCCSFile: function () {
        return "";
    },

    _init: function () {
        /**
         * @type {ck.TabViewDelegate}
         */
        this._delegate = null;

        this._layoutTabBar = null;
        this._layoutRootTab = null;

        this._listTabs = [];
        this._defaultTabIndex = 0;
        this._currentTabIndex = 0;
    },

    _initState: function () {

    },

    _initTabView: function () {
        let nTabs = this._delegate.getNumberOfTabs();

        for (let i = 0; i < nTabs; i++) {
            this._initTab(i);
        }
    },
    
    _initTab: function (index) {
        // init
        let layout = this.getLayoutTab(index);
        // let image = this.getImageTab(index);
        let text = this.getTextTab(index);
        let reddot = this.getReddotTab(index);

        // setup
        let tab = this._delegate.createTabByIndex(index);
        if (!tab) return;
        tab.setVisible(false);
        this._layoutRootTab.addChild(tab);
        this._listTabs.push(tab);

        AnimationUtils.addPressAnimation(layout);
        layout.addClickEventListener(function () {
            this.activeTab(index);
        }.bind(this));
        text.setString(this._delegate.getTitleAtIndex(index));

        //check reddot
        if (reddot){
            reddot.setPositionX(text.x + text.width * 0.5 + 5);
            reddot.setVisible(this._delegate.checkReddot(index));
        }
    },

    activeTab: function (index) {
        this.resetStateAllTabs();
        this._currentTabIndex = index;

        // init
        let layout = this.getLayoutTab(index);
        // let image = this.getImageTab(index);
        // let text = this.getTextTab(index);
        let reddot = this.getReddotTab(index);
        let tab = this.getTabByIndex(index);

        layout.setLocalZOrder(1);
        tab.setVisible(true);
        if (reddot)
            reddot.setVisible(false);

        this._delegate.setStateActiveTab(this, index);
    },

    activeDefaultTab: function () {
        let index = this._defaultTabIndex;
        let defaultTab = this.getTabByIndex(index);

        if (this._delegate.isTabEmpty(this, defaultTab, index)) {
            for (let i = 0; i < this._listTabs.length; i++) {
                let tab = this._listTabs[i];
                if (!this._delegate.isTabEmpty(this, tab, i)) {
                    index = i;
                    break;
                }
            }
        }

        this.activeTab(index);
    },

    resetStateAllTabs: function () {
        let nTabs = this._delegate.getNumberOfTabs();

        for (let i = 0; i < nTabs; i++) {
            let layout = this.getLayoutTab(i);
            // let image = this.getImageTab(i);
            // let text = this.getTextTab(i);
            // let redDot = this.getReddotTab(i);
            let tab = this.getTabByIndex(i);
            this._delegate.setStateInactiveTab(this, i);

            layout.setLocalZOrder(0);
            tab.setVisible(false);
        }
    },

    getTabByIndex: function (index) {
        return this._listTabs[index];
    },

    getDelegate: function () {
        return this._delegate;
    },

    setDelegate: function (value) {
        this._delegate = value;
    },

    getDefaultTabIndex: function () {
        return this._defaultTabIndex;
    },

    setDefaultTabIndex: function (value) {
        this._defaultTabIndex = value;
    },

    getCurrentTabIndex: function () {
        return this._currentTabIndex;
    },
    
    getCurrentTab: function () {
        return this.getTabByIndex(this._currentTabIndex);
    },
    
    _getIndexString: function (index) {
        let padLength = this._delegate.getPadLength();
        return (index + 1).pad(padLength);
    },

    getLayoutTab: function (index) {
        if (index >= this._delegate.getNumberOfTabs()) {
            cc.error(this.LOG_TAG, "<getLayoutTab>", "don't have layout tab at index: " + index);
            return null;
        }
        let prefix = this._delegate.getTabBarLayoutPrefix();
        let indexStr = this._getIndexString(index);
        return this[prefix + indexStr];
    },

    getImageTab: function (index) {
        if (index >= this._delegate.getNumberOfTabs()) {
            cc.error(this.LOG_TAG, "<getImageTab>", "don't have image tab at index: " + index);
            return null;
        }
        let prefix = this._delegate.getTabBarImagePrefix();
        let indexStr = this._getIndexString(index);
        return this[prefix + indexStr];
    },

    getTextTab: function (index) {
        if (index >= this._delegate.getNumberOfTabs()) {
            cc.error(this.LOG_TAG, "<getTextTab>", "don't have text tab at index: " + index);
            return null;
        }
        let prefix = this._delegate.getTabBarTextPrefix();
        let indexStr = this._getIndexString(index);
        return this[prefix + indexStr];
    },

    getReddotTab: function (index) {
        if (index >= this._delegate.getNumberOfTabs()) {
            cc.error(this.LOG_TAG, "<getReddotTab>", "don't have reddot tab at index: " + index);
            return null;
        }
        let prefix = this._delegate.getTabBarReddotPrefix();
        let indexStr = this._getIndexString(index);
        return this[prefix + indexStr];
    },

    doFunctionForAllTabs: function () {
        if (arguments.length < 1) {
            cc.warn(this.LOG_TAG, "<doFunctionForAllTabs>", "missing function name");
            return;
        }

        let argumentArr = Array.from(arguments);
        let funcName = argumentArr.splice(0, 1);
        let nTabs = this._delegate.getNumberOfTabs();
        for (let i = 0; i < nTabs; i++) {
            let tab = this.getTabByIndex(i);
            if (cc.isFunction(tab[funcName]))
                tab[funcName].apply(tab, argumentArr)
        }
    }
});

/**
 * @return {ck.TabView}
 */
ck.TabView.create = function (ccsNode, delegate) {
    return new ck.TabView(ccsNode, delegate);
};

ck.TabViewDelegate = cc.Class.extend({
    getNumberOfTabs: function () {
        return 0;
    },

    getTabBarLayoutPrefix: function () {
        return "_layoutTab"
    },

    getTabBarImagePrefix: function () {
        return "_imgTab"
    },

    getTabBarTextPrefix: function () {
        return "_txtTab"
    },

    getTabBarReddotPrefix: function () {
        return "_imgReddotTab";
    },

    getPadLength: function () {
        return 2;
    },

    getTitleAtIndex: function (index) {
        cc.warn("[ck.TabViewDelegate]", "getTitleAtIndex", "OVERRIDE MEEEE!!!");
        return "TAB " + index;
    },

    createTabByIndex: function (index) {
        cc.warn("[ck.TabViewDelegate]", "createTabByIndex", "OVERRIDE MEEEE!!!");
        return null;
    },

    checkReddot: function (index) {
        cc.warn("[ck.TabViewDelegate]", "checkReddot", "OVERRIDE MEEEE!!!");
        return false;
    },

    setStateActiveTab: function (tabView, index) {
    },

    setStateInactiveTab: function (tabView, index) {
    },

    isTabEmpty: function (tabView, tab, index) {
        cc.warn("[ck.TabViewDelegate]", "isTabEmpty", "OVERRIDE MEEEE!!!");
        return false;
    }
});