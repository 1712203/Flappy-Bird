/**
 * ModuleName handler
 * @class
 * @extends ck.NetworkHandler
 */
let ModuleNameHandler = ck.NetworkHandler.extend({
    LOG_TAG: "[ModuleNameHandler]",

    ctor: function () {
        this._super();
    },

    /** @type {ModuleNameManager} */
    _manager: null,

    handle: function (id, data) {
        switch (id) {
        }

        return false;
    },

    //region Request
    //endregion

    //region Response
    //endregion
});

/**
 * @return {ModuleNameHandler}
 */
ModuleNameHandler.create = function () {
    return new ModuleNameHandler();
};