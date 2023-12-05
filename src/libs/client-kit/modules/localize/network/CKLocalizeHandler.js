/**
 * @class
 * @extends ck.NetworkHandler
 */
ck.LocalizeHandler = ck.NetworkHandler.extend({

    /**
     * @constructor
     */
    ctor: function () {
        ck.NetworkHandler.prototype.ctor.call(this);
    },

    /**
     * @override
     */
    handle: function (id, data) {
        return false;
    },

    /**
     * @param {number} languageCodeServer
     */
    requestChangeLanguage: function (languageCodeServer) {
        this._network.send(ck.ChangeLanguageRequest.create(languageCodeServer));
    },
});

/**
 * Create ck.LocalizeHandler
 * @returns {ck.LocalizeHandler}
 */
ck.LocalizeHandler.create = function () {
    return new ck.LocalizeHandler();
};
