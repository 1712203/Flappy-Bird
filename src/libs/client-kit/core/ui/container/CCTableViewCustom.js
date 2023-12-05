/**
 * Custom cc.TableView with some useful functions
 * @class
 * @extends cc.TableView
 */
cc.TableViewCustom = cc.TableView.extend({
    /**
     * @type {cc.TableViewDataSource}
     */
    _dataSource: null,

    /**
     * @param {cc.TableViewDataSource} dataSource
     * @param {cc.Size} size
     * @param {cc.Node} [container=null]
     */
    ctor: function (dataSource, size, container = null) {
        cc.TableView.prototype.ctor.call(this, dataSource, size, container);
        this._dataSource = dataSource;
    },

    /**
     * @return {boolean}
     */
    isVertical: function () {
        return this.getDirection() === cc.SCROLLVIEW_DIRECTION_VERTICAL;
    },

    /**
     * Scroll to cell at an index
     * @param {number} index
     * @param {number} [duration=0]
     * @param {boolean} [isCenter=false] If isCenter, cell be will be in the center of the view after scrolling, else cell will be on the top
     * @param {function(): void} [callback = null]
     */
    scrollToIndex: function (index, duration = 0, isCenter = false, callback = null) {
        if (index < 0) index = 0;
        let maxIndex = this._dataSource.numberOfCellsInTableView() - 1;
        if (index > maxIndex) index = maxIndex;
        let offset = this.getContentOffset();
        let minOffset = this.minContainerOffset();
        let maxOffset = this.maxContainerOffset();
        let cellSize = this._dataSource.cellSizeForTable(this);
        let viewSize = this.getViewSize();
        if (this.isVertical()) {
            let dy = isCenter ? (viewSize.height - cellSize.height) * 0.5 : 0;
            offset.y = minOffset.y + index * cellSize.height - dy;
            if (offset.y < minOffset.y) offset.y = minOffset.y;
            if (offset.y > maxOffset.y) offset.y = maxOffset.y;
        } else {
            let dx = isCenter ? (viewSize.width - cellSize.width) * 0.5 : 0;
            offset.x = minOffset.x + index * cellSize.width - dx;
            if (offset.x < minOffset.x) offset.x = minOffset.x;
            if (offset.x > maxOffset.x) offset.x = maxOffset.x;
        }
        this.setContentOffsetInDuration(offset, duration);

        if (callback) {
            duration > 0 ? this.scheduleOnce(callback, duration) : callback();
        }
    },

    /**
     * Jump to cell at an index, the cell will be in center of tableview
     * @param {number} index
     * @param {boolean} [isCenter=false]
     * @param {function(): void} [callback = null]
     */
    jumpToIndex: function (index, isCenter = false, callback) {
        this.scrollToIndex(index, 0, isCenter, callback);
    },

    getCurrentIndex: function (isCenter = false) {
        let offset = this.getContentOffset();
        let minOffset = this.minContainerOffset();
        let maxOffset = this.maxContainerOffset();
        let viewSize = this.getViewSize();
        let cellSize = this._dataSource.cellSizeForTable(this);

        let percent = 0;
        if (this.isVertical()) {
            let dy = isCenter ? (viewSize.height - cellSize.height) * 0.5 : 0;
            percent = Math.abs((offset.y - minOffset.y + dy)/(maxOffset.y - minOffset.y));
        } else {
            let dx = isCenter ? (viewSize.width - cellSize.width) * 0.5 : 0;
            percent = Math.abs((offset.x - minOffset.x + dx)/(maxOffset.x - minOffset.x));
        }
        if (percent < 0) percent = 0;
        if (percent > 1) percent = 1;
        let maxIndex = this._dataSource.numberOfCellsInTableView() - 1;
        let index = Math.floor(percent * maxIndex);
        if (index < 0) index = 0;
        if (index > maxIndex) index = maxIndex;
        return index;
    },
});