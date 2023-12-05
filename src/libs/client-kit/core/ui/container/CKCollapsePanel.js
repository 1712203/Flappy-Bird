/**
 * Class using this component must be a cc.Node
 * @class
 * @abstract
 * @extends cc.Class
 * @example
 *    let InventoryPanel = ccui.Widget.extend({
 *
 *    });
 *    ck.extend(InventoryPanel, ck.CollapsePanel);
 */
ck.CollapsePanel = cc.Class.extend({

    /**
     * @type {ccui.Widget}
     */
    _root: null,

    /**
     * @type {ccui.ImageView}
     */
    _imgCollapseExpand: null,

    /**
     * @type {ccui.ImageView}
     */
    _imgBgr: null,

    /**
     * @type {ccui.ImageView}
     */
    _imgArrow: null,

    /**
     * @type {cc.Node}
     */
    _nodeContent: null,

    /**
     * @type {ck.CollapseState}
     */
    _state: 0,

    /**
     * Collapse/expand speed in pixels per second
     * @type {number}
     */
    _speed: 1000,

    /**
     * @type {number}
     */
    _collapseHeight: 100,

    /**
     * @type {number}
     */
    _expandHeight: 200,

    /**
     * @constructor
     */
    ctor: function () {
        UIUtils.initPressableWidget(this._imgCollapseExpand, this.onCollapseExpandPressed.bind(this));
        this.onExpanded();
    },

    onCollapseExpandPressed: function () {
        if (this.isCollapsing() || this.isCollapsed()) {
            this.expand();
        } else {
            this.collapse();
        }
    },

    /**
     * @returns {number}
     */
    getSpeed: function () {
        return this._speed;
    },

    /**
     * @param {number} speed
     */
    setSpeed: function (speed) {
        this._speed = speed;
    },

    /**
     * @returns {number}
     */
    getExpandHeight: function () {
        return this._expandHeight;
    },

    /**
     * @param {number} expandHeight
     */
    setExpandHeight: function (expandHeight) {
        this._expandHeight = expandHeight;
    },

    /**
     * @returns {number}
     */
    getCollapseHeight: function () {
        return this._collapseHeight;
    },

    /**
     * @param {number} collapseHeight
     */
    setCollapseHeight: function (collapseHeight) {
        this._collapseHeight = collapseHeight;
    },

    isCollapsing: function () {
        return this._state === ck.CollapseState.COLLAPSING;
    },

    isCollapsed: function () {
        return this._state === ck.CollapseState.COLLAPSED;
    },

    isExpanding: function () {
        return this._state === ck.CollapseState.EXPANDING;
    },

    isExpanded: function () {
        return this._state === ck.CollapseState.EXPANDED;
    },

    setRootHeight: function (height) {
        if (!ck.isValid(this)) return;
        this._root.height = height;
        this._nodeContent.y = this._root.height;
        this._imgBgr.height = height;
        this._imgBgr.y = height;
        this._imgCollapseExpand.y = -height;
    },

    increaseRootHeight: function (amount) {
        if (!ck.isValid(this)) return;
        this.setRootHeight(this._root.height + amount);
    },

    decreaseRootHeight: function (amount) {
        if (!ck.isValid(this)) return;
        this.setRootHeight(this._root.height - amount);
    },

    updateRootHeight: function (dt) {
        if (!ck.isValid(this)) return;
        const dy = dt * this._speed;
        if (this.isCollapsing()) {
            this.decreaseRootHeight(dy);
            if (this._root.height <= this._collapseHeight) {
                this.onCollapsed();
            }
        } else if (this.isExpanding()) {
            this.increaseRootHeight(dy);
            if (this._root.height >= this._expandHeight) {
                this.onExpanded();
            }
        }
    },

    startUpdateRootHeight: function () {
        this.schedule(this.updateRootHeight);
    },

    stopUpdateRootHeight: function () {
        this.unschedule(this.updateRootHeight);
    },
    
    onCollapsed: function () {
        this._state = ck.CollapseState.COLLAPSED;
        this.setRootHeight(this._collapseHeight);
        this.stopUpdateRootHeight();
        this._imgArrow.setFlippedY(true);
    },

    onExpanded: function () {
        this._state = ck.CollapseState.EXPANDED;
        this.setRootHeight(this._expandHeight);
        this.stopUpdateRootHeight();
        this._imgArrow.setFlippedY(false);
    },

    collapse: function () {
        if (!ck.isValid(this)) return;
        if (this.isCollapsed() || this.isCollapsing()) return;
        this._state = ck.CollapseState.COLLAPSING;
        this.startUpdateRootHeight();
    },

    expand: function () {
        if (!ck.isValid(this)) return;
        if (this.isExpanded() || this.isExpanding()) return;
        this._state = ck.CollapseState.EXPANDING;
        this.startUpdateRootHeight();
    },

});

/**
 * @enum
 */
ck.CollapseState = {
    COLLAPSING: 1,
    COLLAPSED: 2,
    EXPANDING: 3,
    EXPANDED: 4
};

