/**
 * Behavior for a GridView cell <br/>
 * Extends this class if you use `GridView.loadCellsData` for your cells <br/>
 * @class
 * @abstract
 */
ck.GridViewCell = cc.Class.extend({

    ctor: function () {},

    /**
     * @virtual
     * @param {any} data
     */
    setData: function (data) {
    },

});
