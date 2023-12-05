ck.DEFAULT_POOL_LISTVIEW_SIZE = 10;

ck.ListViewCell = ccui.Widget.extend({
    _idx: -1,
    _item: null,
    _status: -1,
    /**
     * @type {ck.ListView}
     */
    _parentListView: null,

    /**
     *
     * @param size {cc.Size} cell content size
     */
    ctor: function (size) {
        this._super();
        this.setCascadeOpacityEnabled(true);
        this.setCascadeColorEnabled(true);

        this._initData();
        if (size)
            this.setContentSize(size);
    },

    _initData: function () {
        this._idx = cc.INVALID_INDEX;
        this._item = null;
        this._status = ck.ListViewCell.STATUS.NOT_USE;
        this._parentListView = null;
    },

    getParentListView: function () {
        return this._parentListView;
    },

    setParentListView: function (value) {
        this._parentListView = value;
    },


    /**
     * Cleans up any resources linked to this cell and resets <code>idx</code> property.
     */
    reset: function () {
        this._idx = cc.INVALID_INDEX;
    },

    addItem: function (item, localZOrder, tag) {
        this.setItem(item);
        this.addChild(item, localZOrder, tag);
    },

    getItem: function () {
        return this._item;
    },

    setItem: function (item) {
        this._item = item;
    },

    removeItem: function () {
        this._item.retain();
        this.removeAllChildren(false);
        var item = this._item;
        this._item = null;
        return item;
    },

    unuse: function () {
        this._idx = cc.INVALID_INDEX;
        this._item = null;
    },

    hasItem: function () {
        return this.getItem() != null;
    },

    getStatus: function () {
        return this._status;
    },

    setStatus: function (value) {
        this._status = value;
    },

    isViewing: function () {
        return this._status === ck.ListViewCell.STATUS.VIEW;
    },

    isHidden: function () {
        return this._status === ck.ListViewCell.STATUS.HIDDEN;
    },

    viewing: function () {
        this._status = ck.ListViewCell.STATUS.VIEW;
    },

    hidden: function () {
        this._status = ck.ListViewCell.STATUS.HIDDEN;
    },

    getIndex: function () {
        var cells = this._parentListView.getItems();
        return cells.indexOf(this);
    }
});

ck.ListViewCell.STATUS = {
    NOT_USE: -1,
    VIEW: 0,
    HIDDEN: 1,
}

ck.ListViewDelegate = cc.Class.extend({
    /**
     * cell size for a given index
     * @param {ccui.ListView} listView list to hold the instances of Class
     * @param {number} idx the index of a cell to get a size
     * @return {cc.Size} size of a cell at given index
     */
    listCellSizeForIndex: function (listView, idx) {
        return this.cellSizeForList(listView);
    },
    /**
     * cell height for a given list.
     *
     * @param {ccui.ListView} listView list to hold the instances of Class
     * @return {cc.Size} cell size
     */
    cellSizeForList: function (listView) {
        return cc.size(0, 0);
    },

    /**
     * a cell instance at a given index
     * @param {ck.ListView} listView table to hold the instances of Class
     * @param idx index to search for a cell
     * @return {ck.ListViewCell} cell found at idx
     */
    listItemAtIndex: function (listView, idx) {
        return null;
    },

    /**
     * Returns number of cells in a given list view.
     * @param {ck.ListView} listView list view to hold the instances of Class
     * @return {Number} number of cells
     */
    numberOfCellsInListView: function (listView) {
        return 0;
    },

    /**
     * Returns number of items can create in listview to fit list size
     * @param {ck.ListView} listView list view to hold the instances of Class
     * @return {Number} number of items
     */
    numberOfInitItems: function (listView) {
        return ck.DEFAULT_POOL_LISTVIEW_SIZE;
    },

    /**
     * update data of an item
     * @param {ck.ListView} listView
     * @param {*} item
     * @param {number} idx
     */
    updateItemWhenViewable: function (listView, item, idx) {

    }
});


/**
 * ck.ListView is a ccui.ListView with a pool of item
 * It create a pool item with a number of init item and manager it
 * When scroll, cell can view will update data or add new item from pool items, cell hidden will pooling items.
 * Advantage: Fast init, use for a list with many item.
 *
 * How to use:
 * - delegate will be a new class or parent
 *      + with new class: var MyListViewDelegate = ck.ListViewDelegate.extend({});
 *      + with parent: add this below the class for multiple extend: _.defaults(ParentClass.prototype, ck.ListViewDelegate.prototype);
 */
ck.ListView = ccui.ListView.extend({
    /**
     * @type {ck.ListViewDelegate}
     */
    _listViewDelegate: null,
    _poolingCells: null,
    _items: null,
    _poolingItems: null,

    ctor: function (delegate, size) {
        this._super();
        this._initData();
        this.setDelegate(delegate);
        this.setContentSize(size);
        this.setCascadeOpacityEnabled(true);
        this.setCascadeColorEnabled(true);
    },

    onEnterTransitionDidFinish: function () {
        this._super();
        this.addCCSEventListener(this._scrollListener.bind(this));
    },

    _initData: function () {
        this._listViewDelegate = null;
        this._poolingCells = [];
        this._poolingItems = [];
        this._items = [];
    },

    _reloadCells: function () {
        var listSize = this._listViewDelegate.numberOfCellsInListView(this);

        if (listSize === this.getItems().length) return;

        if (listSize > this.getItems().length) {
            for (let i = this.getItems().length; i < listSize; i++) {
                var size = this._listViewDelegate.listCellSizeForIndex(this, i);
                var cell = this.getNewCell(size);
                this.pushBackCustomItem(cell);
                cell.setParentListView(this);
            }
        } else {
            for (let i = listSize; i < this.getItems().length; i++) {
                this.removeCell(i);
            }
        }
    },

    _reloadItems: function () {
        var listSize = this._listViewDelegate.numberOfCellsInListView(this);
        var maxItems = this._listViewDelegate.numberOfInitItems(this);

        var nItems = listSize <= maxItems ? listSize : maxItems;
        for (var i = this._items.length; i < nItems; i++) {
            var item = this._listViewDelegate.listItemAtIndex(this, i);
            var cell = this.getItem(i);
            if (cell && item) {
                cell.addItem(item, 0, "item");
                this._items.push(item);
            }
        }
    },

    getNewCell: function (size) {
        if (this._poolingCells.length === 0) return new ck.ListViewCell(size);

        var cell = this._poolingCells.pop();
        if (cell) {
            cell.setContentSize(size);
            return cell;
        }

        return new ck.ListViewCell(size);
    },

    removeCell: function (index) {
        var item = this.getItem(index);
        if (item == null)
            return;
        item.retain();
        this.removeChild(item, false);
        this.refreshView();
        this._poolCell(item);
    },

    _poolCell: function (cell) {
        cell.retain();
        if (cell.hasItem()) {
            this._poolingItems.push(cell.removeItem());
        }
        cell.unuse();
        this._poolingCells.push(cell);
    },

    _poolItemOfCell: function (cell) {
        if (cell.hasItem()) {
            this._poolingItems.push(cell.removeItem());
        }
    },

    /**
     * @return {ck.ListViewDelegate}
     */
    getDelegate: function () {
        return this._listViewDelegate;
    },

    setDelegate: function (delegate) {
        this._listViewDelegate = delegate;
    },

    updateCellAtIndex: function (idx) {
        var cells = this.getItems();
        var cell = cells[idx];
        this.updateCell(cell, idx);
    },

    updateCell: function (cell, idx) {
        if (!cell) {
            return;
        }
        if (cell.hasItem()) {
            this._listViewDelegate.updateItemWhenViewable(this, cell.getItem(), idx);
        } else {
            var item = this._listViewDelegate.listItemAtIndex(this, idx);
            if (item) {
                cell.addItem(item, 0, "item");
            }
        }
    },

    _scrollListener: function (sender, type) {
        switch (type) {
            case 9:
                this._updateCellsStatus();
                break;
        }
    },

    _updateCellsStatus: function () {
        if (!cc.sys.isObjectValid(this)) {
            return;
        }
        var cells = this.getItems();
        for (var i = 0; i < cells.length; i++) {
            if (!cells[i]) {
                continue;
            }
            var in_rect = this._isCellViewable(cells[i]);

            if (cells[i].isHidden()) {
                if (in_rect) {
                    cells[i].viewing();
                    this.updateCell(cells[i], i);
                }
            }
            else if (cells[i].isViewing()) {
                if (!in_rect) {
                    cells[i].hidden();
                    this._poolItemOfCell(cells[i]);
                }
            }
        }
    },

    _isCellViewable: function (cell) {
        var cellPos = UIUtils.getWorldPosition(cell);
        cellPos = this.getParent().convertToNodeSpace(cellPos);
        var rect = this.getViewableBoundingBox();
        return cc.rectContainsPoint(rect, cellPos);
    },

    getPoolingCell: function () {
        if (this._poolingItems.length === 0) return null;

        return this._poolingItems.pop();
    },

    reloadData: function () {
        this._reloadCells();
        this._reloadItems();
        this.forceDoLayout();

        var cells = this.getItems();
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            if (!cell) return;

            var viewable = this._isCellViewable(cell);
            if (viewable) {
                cell.viewing();
            } else {
                cell.hidden();
            }

            if (cell.isHidden()) {
                this._poolItemOfCell(cell);
            } else this.updateCell(cell, i);
        }
    },

    getViewableBoundingBox: function () {
        var rect = this.getBoundingBox();
        rect.y -= 150;
        rect.height += 300;
        return rect;
    },

    getCellAtIndex: function (idx) {
        var cells = this.getItems();
        return cells[idx];
    },

    getItemAtIndex: function (idx) {
        var cell = this.getCellAtIndex(idx);
        if (!cell) return null;

        return cell.getItem();
    },

    getItemOfAllCells: function () {
        var cells = this.getItems();
        return cells.map(cell => cell.getItem());
    }
});

/**
 * Create a fast init list view
 * @param delegate {*} class with delegate function for interact with listview
 * @param size {cc.Size} size of listview
 * @return {ck.ListView}
 */
ck.ListView.create = function (delegate, size) {
    return new ck.ListView(delegate, size);
}

/**
 * Create a fast init list view from a listview node
 * @param listview {*} size of listview
 * @param delegate {*} class with delegate function for interact with listview
 * @return {ck.ListView}
 */
ck.ListView.createWithListView = function (listview, delegate) {
    var size = listview.getContentSize();
    var position = listview.getPosition();
    var anchorPoint = listview.getAnchorPoint();
    var parent = listview.getParent();
    var ckListView = new ck.ListView(delegate, size);
    ckListView.setPosition(position);
    ckListView.setAnchorPoint(anchorPoint);
    parent.addChild(ckListView);
    ckListView.removeFromParent(true);
    return ckListView;
}