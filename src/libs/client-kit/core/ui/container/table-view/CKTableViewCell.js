/**
 * Behavior for a TableView cell <br/>
 * Extends this class if you use `TableView.loadCellsData` for your cells <br/>
 * @class
 * @abstract
 * @extends ck.GridViewCell
 */
ck.TableViewCell = ck.GridViewCell.extend({

    /**
     * @virtual
     * @param {any} data
     */
    setData: function (data) {
    },

});
