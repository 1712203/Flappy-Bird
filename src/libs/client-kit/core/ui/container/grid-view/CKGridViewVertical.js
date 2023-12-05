
/**
 * ck.GridView in vertical direction
 * @class
 * @extends ck.GridView
 */
ck.GridViewVertical = ck.GridView.extend({

    /**
     * Maximum columns
     * @type {number}
     */
    _maxColumns: 0,

    /**
     * Current number of column
     * @type {number}
     */
    _nColumns: 0,

    /**
     * @constructor
     * @param {number} [maxColumns=5] Maximum No. columns
     */
    ctor: function (maxColumns = 5) {
        ck.GridView.prototype.ctor.call(this);
        this._maxColumns = maxColumns;
    },

    /**
     * @override
     */
    _updateSize: function () {
        ck.GridView.prototype._updateSize.call(this);
        const nWidgets = this.getNumberOfVisibleWidgets();
        const nRows = Math.ceil(nWidgets / this._maxColumns);
        const nCols = nWidgets > this._maxColumns ? this._maxColumns : nWidgets;
        const width = nCols * this._cellWidth + (nCols + 1) * this._marginX;
        const height = nRows * this._cellHeight + (nRows + 1) * this._marginY;
        this._nColumns = nCols;
        this.setContentSize(width, height);
    },

    /**
     * @override
     * @param value
     */
    setMaxRowOrColumn: function (value) {
        this.setMaxColumn(value);
    },

    /**
     * @override
     */
    relayout: function () {
        ck.GridView.prototype.relayout.call(this);
        const nWidgets = this._widgets.length;
        const nItemSurplus = nWidgets % this._nColumns;
        const dColSurplus = this._alignCenter && nItemSurplus !== 0 ? (this._nColumns - nItemSurplus) * 0.5 : 0;
        const startSurplusIndex = Math.floor(nWidgets / this._nColumns) * this._nColumns;
        for (let i = 0; i < nWidgets; i++) {
            const widget = this._widgets[i];
            if (!widget || !widget.isVisible()) continue;
            const row = Math.floor(i / this._nColumns);
            const dCol = i >= startSurplusIndex ? dColSurplus : 0;
            const col = i % this._nColumns + dCol;
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

    setMaxColumn: function (maxColumns) {
        this._maxColumns = maxColumns;
    },

    getMaxColumn: function () {
        return this._maxColumns;
    },

    autoMargin: function (width, height) {
        const nWidgets = this.getNumberOfVisibleWidgets();
        const nRows = Math.ceil(nWidgets / this._maxColumns);
        this._marginX = this._maxColumns > 1 ? (width - this._maxColumns * this._cellWidth) / (this._maxColumns - 1) : 0;
        this._marginY = nRows > 1 ? (height - nRows * this._cellHeight) / (nRows - 1) : 0;
        this.relayout();
    },

    getNRows: function () {
        const nWidgets = this.getNumberOfVisibleWidgets();
        return Math.ceil(nWidgets / this._maxColumns);
    },

    getNCols: function () {
        const nWidgets = this.getNumberOfVisibleWidgets();
        return nWidgets > this._maxColumns ? this._maxColumns : nWidgets;
    },
});

/**
 * @param [maxColumns=5]
 * @return {ck.GridViewVertical}
 */
ck.GridViewVertical.create = function (maxColumns = 5) {
    return new ck.GridViewVertical(maxColumns);
};
