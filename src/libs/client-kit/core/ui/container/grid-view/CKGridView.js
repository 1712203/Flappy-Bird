/**
 * A grid can be used to layout items into rows and column (items should have same size (width, height))
 * Size of the first item will be used as a cell size
 * Ex. It can be used to layout packages in shop (add it to scrollview)
 * Ex. It can be used to layout items in a reward popup
 *
 * @class
 * @extends ccui.Widget
 */
ck.GridView = ccui.Widget.extend({

    _verticalFillOrder: ck.VerticalFillOrder.TOP_DOWN,
    _horizontalFillOrder: ck.HorizontalFillOrder.LEFT_TO_RIGHT,

    /**
     * @type {number}
     */
    _marginX: 0,

    /**
     * @type {number}
     */
    _marginY: 0,

    /**
     * Offset x to be added when calculate x
     * (Useful when need to adjust all cells to left or right by some pixels)
     * @type {number}
     */
    _offsetX: 0,

    /**
     * Offset y to be added when calculate y
     * (Useful when need to adjust all cells to up or down by some pixels)
     * @type {number}
     */
    _offsetY: 0,

    /**
     * @type {number}
     */
    _cellWidth: 0,

    /**
     * @type {number}
     */
    _cellHeight: 0,

    /**
     * @type {ccui.Widget[]}
     */
    _widgets: null,

    /**
     * @type {ck.GridViewDelegate}
     */
    _delegate: null,

    /**
     * @type {boolean}
     */
    _alignCenter: false,

    /**
     * @constructor
     */
    ctor: function () {
        ccui.Widget.prototype.ctor.call(this);
        this._widgets = [];
        this.setCascadeOpacityEnabled(true);
        this.setCascadeColorEnabled(true);
    },

    _updateCellSize: function () {
        if (this._widgets.length < 1) return;
        const widget = this._widgets[0];
        if (!widget) return;
        this._cellWidth = widget.width * widget.getScaleX();
        this._cellHeight = widget.height * widget.getScaleY();
    },

    /**
     * @virtual
     */
    _updateSize: function () {
        this._updateCellSize();
        // Override me
    },

    /**
     * Helper function - add child and push a cell into _widgets array
     * @param {ccui.Widget} widget
     * @private
     */
    _pushCell: function (widget) {
        if (!ck.isValid(widget)) return;
        this.addChild(widget);
        this._widgets.push(widget);
    },

    /**
     * @param {number} index
     * @return {ccui.Widget|any}
     */
    _createCell: function (index) {
        if (!this._delegate) {
            cc.warn("[GridView] - %s - _createCell - Delegate is missing!!!!!", this.getName());
            let cell = new ccui.Widget();
            this.addCell(cell, false);
            return cell;
        }
        let cell = this._delegate.createGridViewCell(this, index);
        this.addCell(cell, false);
        return cell;
    },

    /**
     * @param {ck.GridViewDelegate} delegate
     */
    setDelegate: function (delegate) {
        this._delegate = delegate;
    },

    /**
     * @virtual
     * @param value
     */
    setMaxRowOrColumn: function (value) {

    },

    getMarginX: function () {
        return this._marginX;
    },

    getMarginY: function () {
        return this._marginY;
    },

    getMargin: function () {
        if (this._marginX !== this._marginY)
            cc.warn("ck.GridView", "<getMargin>", "marginX !== marginY, don't know what to return => default is marginX");
        return this._marginX;
    },

    setMargin: function (margin) {
        this._marginX = margin;
        this._marginY = margin;
    },

    setMarginX: function (marginX) {
        this._marginX = marginX;
    },

    setMarginY: function (marginY) {
        this._marginY = marginY;
    },

    getOffsetX: function () {
        return this._offsetX;
    },

    getOffsetY: function () {
        return this._offsetY;
    },

    setOffsetX: function (offsetX) {
        this._offsetX = offsetX;
    },

    setOffsetY: function (offsetY) {
        this._offsetY = offsetY;
    },

    relayout: function () {
        this._updateSize();
        // Override me
    },

    /**
     * Add a cell
     * @param {ccui.Widget|any} cell
     * @param {boolean} [isRelayout = true]
     */
    addCell: function (cell, isRelayout = true) {
        this._pushCell(cell);
        if (isRelayout) this.relayout();
    },

    /**
     * Add cells
     * @param {ccui.Widget[]|any[]} widgets
     */
    addCells: function (widgets) {
        if (!widgets || widgets.length < 1) return;
        widgets.forEach(function (widget) {
            this._pushCell(widget);
        }.bind(this));
        this.relayout();
    },

    removeCell: function (cell) {
        if (!ck.isValid(cell)) return;
        const index = this._widgets.indexOf(cell);
        if (index >= 0) {
            cell.removeFromParent(true);
            this._widgets.splice(index, 1);
            this.relayout();
        }
    },

    removeCellAt: function (index) {
        if (index >= 0 && index < this._widgets.length) {
            let cell = this._widgets[index];
            cell.removeFromParent(true);
            this._widgets.splice(index, 1);
            this.relayout();
        }
    },

    /**
     * @param {function(cell: ck.GridViewCell): boolean} predicate
     */
    removeCellIf: function (predicate) {
        const index = this._widgets.findIndex(predicate);
        if (index >= 0) {
            const cell = this._widgets[index];
            if (cell) cell.removeFromParent(true);
            this._widgets.splice(index, 1);
            this.relayout();
        }
    },

    /**
     * Remove all cells
     */
    removeAllCells: function () {
        this._widgets.forEach(function (widget) {
            widget && widget.removeFromParent(true);
        }.bind(this));
        this._widgets = [];
        this.setContentSize(cc.size(0, 0));
    },

    /**
     * Set cells without add child
     */
    setWidgets: function (widgets) {
        if (!widgets || widgets.length < 1) return;
        this._widgets = widgets;
        this.relayout();
    },

    /**
     * Clear widgets array without removing them from parent
     */
    clearWidgets: function () {
        this._widgets = [];
        this.setContentSize(cc.size(0, 0));
    },

    /**
     * Set cells
     * @param {ccui.Widget[]} widgets
     */
    setCells: function (widgets) {
        this.removeAllCells();
        this.addCells(widgets);
    },

    /**
     * @param {any[]} [listData=[]]
     * @param {boolean} [isRefresh=true]
     */
    loadCellsData: function (listData = [], isRefresh = true) {
        if (!ck.isValid(this)) return;
        const dataLength = listData.length;
        for (let i = 0; i < dataLength; i++) {
            let itemData = listData[i];
            if (!itemData) continue;
            let cell = this._widgets[i] || this._createCell(i);
            if (!cell) continue;
            cell.setVisible(true);
            if (cell.setData) {
                cell.setData(itemData);
            } else {
                cc.warn("[GridView] - loadCellsData - setData method is not found!!!!!");
            }
        }
        const nCells = this._widgets.length;
        for (let i = dataLength; i < nCells; i++) {
            let cell = this._widgets[i];
            if (cell) {
                cell.setVisible(false);
            }
        }
        if (isRefresh) this.refresh();
    },

    addCellData:function (itemId, amount, isRefresh){
        if(isRefresh == undefined)
            isRefresh = true;
        const nCells = this._widgets.length;
        let cell = null;
        for (let i = 0; i < nCells; i++) {
            if (this._widgets[i] && !this._widgets[i].isVisible()) {
                cell = this._widgets[i];
                break;
            }
        }
        if(!cell)
            cell = this._createCell(nCells);

        if (cell && cell.setData)
            cell.setData(ck.Item.create(itemId, amount));

        if(isRefresh)
            this.refresh();
        return cell;
    },

    /**
     * @param {Item[]} items
     */
    setItems: function (items) {
        this.loadCellsData(items);
    },

    /**
     * Show cells one by one
     * @param {Function} [callback=null]
     */
    show: function (callback = null) {
        if (!ck.isValid(this)) {
            callback && callback();
        }
        const nWidgets = this._widgets.length;
        const duration = 0.1;
        let delay = 0;
        for (let i = 0; i < nWidgets; i++) {
            const widget = this._widgets[i];
            if (!widget) continue;
            const onFinish = i === nWidgets - 1 ? callback : null;
            AnimationUtils.popIn(widget, duration, onFinish, delay);
            delay += duration;
        }
    },

    /**
     * Show cells one by one
     * @param {function():void} [callback=null]
     */
    hideCells: function (callback = null) {
        if (!ck.isValid(this)) {
            callback && callback();
        }
        const nWidgets = this._widgets.length;
        const duration = 0.1;
        let delay = 0;
        for (let i = 0; i < nWidgets; i++) {
            const widget = this._widgets[i];
            if (!widget) continue;
            const onFinish = i === nWidgets - 1 ? callback : null;
            AnimationUtils.popOut(widget, duration, onFinish, delay);
            delay += duration;
        }
    },

    getCells: function () {
        return this._widgets;
    },

    getFirstCell: function () {
        return this._widgets[0];
    },

    isEmpty: function () {
        return this._widgets.length < 1;
    },

    getNumberOfVisibleWidgets: function () {
        let nWidgets = this._widgets.length;
        let count = 0;
        for (let i = 0; i < nWidgets; i++) {
            let widget = this._widgets[i];
            if (widget && widget.isVisible()) count++;
        }
        return count;
    },

    refresh: function () {
        this.relayout();
    },

    hideAllCells: function () {
        this._widgets.forEach(widget => widget && widget.setVisible(false));
        this.relayout();
    },

    /**
     * @return {cc.Size}
     */
    getCellSize: function () {
        return cc.size(this._cellWidth, this._cellHeight);
    },

    /**
     * @virtual
     */
    autoMargin: function (widthOrHeight) {

    },

    /**
     * @returns {ck.VerticalFillOrder}
     */
    getVerticalFillOrder: function () { return this._verticalFillOrder; },

    /**
     * @param {ck.VerticalFillOrder} verticalFillOrder
     */
    setVerticalFillOrder: function (verticalFillOrder) { this._verticalFillOrder = verticalFillOrder; },

    /**
     * @returns {ck.HorizontalFillOrder}
     */
    getHorizontalFillOrder: function () { return this._horizontalFillOrder; },

    /**
     * @param {ck.HorizontalFillOrder} horizontalFillOrder
     */
    setHorizontalFillOrder: function (horizontalFillOrder) { this._horizontalFillOrder = horizontalFillOrder; },

    /**
     * Get current n rows
     * @virtual
     */
    getNRows: function () {
        return 0;
    },

    /**
     * Get current n cols
     * @virtual
     */
    getNCols: function () {
        return 0;
    },

    alignCenter: function (center = true) {
        this._alignCenter = center;
    },
});

/**
 * Create a ck.GridView
 * @param {ck.Direction|number} [direction=ck.Direction.VERTICAL]
 * @param {number} [rowsOrColumns=3] maxRows or maxCols base or direction
 * @returns {ck.GridView}
 */
ck.GridView.create = function (direction = ck.Direction.VERTICAL, rowsOrColumns = 3) {
    const isHorizontal = direction === ck.Direction.HORIZONTAL;
    return isHorizontal ? ck.GridViewHorizontal.create(rowsOrColumns) : ck.GridViewVertical.create(rowsOrColumns);
};

/**
 * Create grid view with only one column
 * @return {ck.GridView}
 */
ck.GridView.createOneColumn = function () {
    return ck.GridView.create(ck.Direction.HORIZONTAL, 10000);
};

/**
 * Create grid view with only one row
 * @return {ck.GridView}
 */
ck.GridView.createOneRow = function () {
    return ck.GridView.create(ck.Direction.VERTICAL, 10000);
};
