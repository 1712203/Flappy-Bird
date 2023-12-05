
/**
 * ck.GridView in horizontal direction
 * @class
 * @extends ck.GridView
 */
ck.GridViewHorizontal = ck.GridView.extend({
    _maxRows: 0,
    _nRows: 0,

    /**
     * @constructor
     * @param {number} maxRows Maximum No. rows
     */
    ctor: function (maxRows = 5) {
        ck.GridView.prototype.ctor.call(this);
        this._maxRows = maxRows;
    },

    /**
     * @override
     */
    _updateSize: function () {
        ck.GridView.prototype._updateSize.call(this);
        const nWidgets = this.getNumberOfVisibleWidgets();
        const nRows = nWidgets > this._maxRows ? this._maxRows : nWidgets;
        const nCols = Math.ceil(nWidgets / this._maxRows);
        const width = nCols * this._cellWidth + (nCols + 1) * this._marginX;
        const height = nRows * this._cellHeight + (nRows + 1) * this._marginY;
        this._nRows = nRows;
        this.setContentSize(width, height);
    },

    /**
     * @override
     * @param value
     */
    setMaxRowOrColumn: function (value) {
        this.setMaxRow(value);
    },

    /**
     * @override
     */
    relayout: function () {
        ck.GridView.prototype.relayout.call(this);
        const nWidgets = this._widgets.length;
        const nItemSurplus = nWidgets % this._nRows;
        const dRowSurplus = this._alignCenter && nItemSurplus !== 0 ? (this._nRows - nItemSurplus) * 0.5 : 0;
        const startSurplusIndex = Math.floor(nWidgets / this._nRows) * this._nRows;
        for (let i = 0; i < nWidgets; i++) {
            const widget = this._widgets[i];
            if (!widget || !widget.isVisible()) continue;
            const dRow = i >= startSurplusIndex ? dRowSurplus : 0;
            const row = i % this._nRows + dRow;
            const col = Math.floor(i / this._nRows);
            let x = (col + 0.5) * this._cellWidth + (col + 1) * this._marginX;
            x += this._offsetX;
            let y = this.height - (row + 0.5) * this._cellHeight - (row + 1) * this._marginY;
            y += this._offsetY;
            if (this._verticalFillOrder === ck.VerticalFillOrder.BOTTOM_UP) {
                y = this.height - y;
            }
            if (this._horizontalFillOrder === ck.HorizontalFillOrder.RIGHT_TO_LEFT) {
                x = this.width - x;
            }
            widget.setPosition(x, y);
        }
    },

    setMaxRow: function (maxRows) {
        this._maxRows = maxRows;
    },

    getMaxRow: function () {
        return this._maxRows;
    },

    autoMargin: function (height) {
        const nWidgets = this.getNumberOfVisibleWidgets();
        const nCols = Math.ceil(nWidgets / this._maxRows);
        this._marginX = nCols > 1 ? (width - nCols * this._cellWidth) / (nCols - 1) : 0;
        this._marginY = this._maxRows > 1 ? (height - this._maxRows * this._cellHeight) / (this._maxRows - 1) : 0;
        this.relayout();
    },

    getNRows: function () {
        const nWidgets = this.getNumberOfVisibleWidgets();
        const nRows = nWidgets > this._maxRows ? this._maxRows : nWidgets;
        return Math.ceil(nWidgets / this._maxRows);
    },

    getNCols: function () {
        const nWidgets = this.getNumberOfVisibleWidgets();
        return nWidgets > this._maxRows ? this._maxRows : nWidgets;
    },
});

/**
 * @param [maxRows=5]
 * @return {ck.GridViewHorizontal}
 */
ck.GridViewHorizontal.create = function (maxRows = 5) {
    return new ck.GridViewHorizontal(maxRows);
};
