/**
 * Base class for module data (Ex. QuestData, GameData, etc.)
 * @class
 * @extends cc.Class
 */
ck.BaseData = cc.Class.extend({

    ctor: function () {

    },

    /**
     * Reset data
     * @virtual
     */
    reset: function () {
        // Override me
    },
});
