/**
 * Delegate for a table view
 * @class
 * @abstract
 * @extends cc.Class
 */
ck.TableViewDelegate = cc.Class.extend({

    /**
     * Create a cell for table view <br/>
     * Override this method if you use `ck.TableView.loadCellsData` <br/>
     * @virtual
     * @param {ck.TableView} tableView
     * @param {number} index - Cell index
     * @return {ccui.Widget}
     */
    createTableViewCell: function (tableView, index) {
        return new ccui.Widget();
    },

    /**
     * This function will be called when event EVENT_BOUNCE_BOTTOM is emitted
     * @virtual
     * @param {ck.TableView} tableView
     */
    onTableViewBounceBottom: function (tableView) {},

    /**
     * This function will be called when event EVENT_SCROLLING is emitted and is scrolling up
     * @virtual
     * @param {ck.TableView} tableView
     */
    onTableViewScrollingUp: function (tableView) {},
});
