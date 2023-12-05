/**
 * 2D Table View (Scrollable Grid)
 * @class
 * @extends ccui.Widget
 * @extends ck.GridViewDelegate
 */
ck.TableView = ccui.Widget.extend({
    /**
     * @type {ccui.ListView}
     */
    _listView: null,

    /**
     * @type {ck.GridView}
     */
    _gridView: null,

    /**
     * @type {boolean}
     */
    _isRefreshToBot: false,

    /**
     * @type {ck.TableViewDelegate}
     */
    _delegate: null,

    /**
     * @type {cc.Point}
     */
    _currentInnerContainerPos: cc.p(0, 0),

    ctor: function (direction = ck.Direction.VERTICAL, rowsOrColumns = 5) {
        ccui.Widget.prototype.ctor.call(this);
        this.setCascadeOpacityEnabled(true);
        this._initListView(direction);
        this._initGridView(direction, rowsOrColumns);
    },

    _initListView: function (direction) {
        this._listView = new ccui.ListView();
        this.addChild(this._listView);
        this._listView.setCascadeOpacityEnabled(true);
        this._listView.setClippingEnabled(true);
        this._listView.setBounceEnabled(true);
        this._listView.setCascadeOpacityEnabled(true);
        const isVertical = direction === ck.Direction.VERTICAL;
        this._listView.setDirection(isVertical ? ccui.ScrollView.DIR_VERTICAL : ccui.ScrollView.DIR_HORIZONTAL);

        // grid view in center
        this._listView.setGravity(isVertical ? ccui.ListView.GRAVITY_CENTER_HORIZONTAL : ccui.ListView.GRAVITY_CENTER_VERTICAL);

        // grid view in top-left
        // this._listView.setGravity(isVertical ? ccui.ListView.GRAVITY_LEFT : ccui.ListView.GRAVITY_TOP);

        this._listView.setAnchorPoint(cc.p(0.5, 0.5));
        this._listView.setScrollBarEnabled(false);

        // Add event listener for ScrollView (This function is overridden by ListView so need to call explicitly)
        ccui.ScrollView.prototype.addEventListener.call(this._listView, this.onScrollViewEvent, this);
    },

    /**
     * @param {ccui.ListView} sender
     * @param {number} type
     */
    onScrollViewEvent: function (sender, type) {
        if (!ck.isValid(this)) return;
        if (!ck.isValid(sender)) return;
        if (!ck.isValid(this._delegate)) return;

        const prevPos = this._currentInnerContainerPos;
        this._currentInnerContainerPos = sender.getInnerContainer().getPosition();
        const isScrollingUp = prevPos.y - this._currentInnerContainerPos.y > 0;

        switch (type) {
            case ccui.ScrollView.EVENT_BOUNCE_BOTTOM:
                this._delegate.onTableViewBounceBottom(this);
                break;
            case ccui.ScrollView.EVENT_SCROLLING:
                if (isScrollingUp) this._delegate.onTableViewScrollingUp(this);
                break;
        }
    },

    _initGridView: function (direction, rowsOrColumns) {
        this._gridView = ck.GridView.create(direction, rowsOrColumns);
        const isVertical = direction === ck.Direction.VERTICAL;
        this._gridView.setAnchorPoint(isVertical ? cc.p(0.5, 1) : cc.p(0, 0.5));
        this._listView.pushBackCustomItem(this._gridView);
        this._gridView.setDelegate(this);
    },

    /**
     * @override
     * @param gridView
     * @param index
     * @return {ccui.Widget}
     */
    createGridViewCell: function (gridView, index) {
        return this._delegate ? this._delegate.createTableViewCell(this, index) : new ccui.Widget();
    },

    setContentSize: function (size) {
        ccui.Widget.prototype.setContentSize.call(this, size);
        this._listView.setContentSize(size);
        UIUtils.alignCenter(this._listView);
    },

    setMargin: function (margin) {
        this._gridView.setMargin(margin);
    },

    setMarginX: function (marginX) {
        this._gridView.setMarginX(marginX);
    },

    setMarginY: function (marginY) {
        this._gridView.setMarginY(marginY);
    },

    setOffsetX: function (offsetX) {
        this._gridView.setOffsetX(offsetX);
    },

    setOffsetY: function (offsetY) {
        this._gridView.setOffsetY(offsetY);
    },

    /**
     * Add a cell
     * @param {ccui.Widget} cell
     */
    addCell: function (cell) {
        this._gridView.addCell(cell);
        this._listView.refreshView();
    },

    /**
     * @param {ccui.Widget[]} cells
     */
    addCells: function (cells) {
        this._gridView.addCells(cells);
        this._listView.refreshView();
    },

    /**
     * @param {ccui.Widget} cell
     */
    removeCell: function (cell) {
        this._gridView.removeCell(cell);
        this.refresh();
    },

    removeAllCells: function () {
        this._gridView.removeAllCells();
        this.refresh();
    },

    /**
     * @param {ccui.Widget[]} cells
     */
    setCells: function (cells) {
        this._gridView.setCells(cells);
    },

    getCells: function () {
        return this._gridView.getCells();
    },

    getFirstCell: function () {
        return this._gridView.getFirstCell();
    },

    show: function (callback) {
        this._gridView.show(callback);
    },

    /**
     * @param [isJumpToTop=true]
     */
    refresh: function (isJumpToTop = true) {
        this._gridView.refresh();
        this._listView.refreshView();
        if (isJumpToTop) {
            this._listView.jumpToTop();
        }
    },

    jumpToBot: function () {
        this._listView.jumpToBottom();
    },

    jumpToTop: function (){
        this._listView.jumpToTop();
    },

    hideAllCells: function () {
        this._gridView.hideAllCells();
    },

    /**
     * @param {any[]} cellsData
     */
    loadCellsData: function (cellsData) {
        this._gridView.loadCellsData(cellsData, false);
        this.refresh();
    },

    /**
     * @param {ck.TableViewDelegate} delegate
     */
    setDelegate: function (delegate) {
        this._delegate = delegate;
    },

    /**
     * @param {number} maxRowOrColumn
     */
    setMaxRowOrColumn: function (maxRowOrColumn) {
        this._gridView.setMaxRowOrColumn(maxRowOrColumn);
    },
});

/**
 * @param {ck.Direction|number} [direction=ck.Direction.VERTICAL]
 * @param {number} [rowsOrColumns=5]
 * @return {ck.TableView}
 */
ck.TableView.create = function (direction = ck.Direction.VERTICAL, rowsOrColumns = 5) {
    return new ck.TableView(direction, rowsOrColumns);
};

/**
 * @param {number} [maxColumns=5]
 * @return {ck.TableView}
 */
ck.TableView.createVertical = function (maxColumns = 5) {
    return ck.TableView.create(ck.Direction.VERTICAL, maxColumns);
};

/**
 * @param {number} [maxRows=5]
 * @return {ck.TableView}
 */
ck.TableView.createHorizontal = function (maxRows = 5) {
    return ck.TableView.create(ck.Direction.HORIZONTAL, maxRows);
};
