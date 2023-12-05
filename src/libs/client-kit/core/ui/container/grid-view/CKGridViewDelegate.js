/**
 * Delegate for ck.GridView
 * @class
 * @abstract
 */
ck.GridViewDelegate = cc.Class.extend({
    /**
     * Create a cell <br/>
     * Override this method if you use `ck.GridView.loadCellsData` <br/>
     * @virtual
     * @param {ck.GridView} gridView
     * @param {number} index - Cell index
     * @return {ccui.Widget}
     */
    createGridViewCell: function (gridView, index) {
        return new ccui.Widget();
    },
});