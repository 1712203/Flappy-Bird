/**
 * @class
 * @extends ck.NetworkRequest
 */
ck.ChangeLanguageRequest = ck.NetworkRequest.extend({

    languageCodeServer: 1,

    ctor: function (languageCodeServer) {
        ck.NetworkRequest.prototype.ctor.call(this, ck.PacketID.CHANGE_LANGUAGE);
        this.languageCodeServer = languageCodeServer;
    },

    /**
     * @override
     */
    _writeData: function () {
        this.putShort(this.languageCodeServer);
    },
});

/**
 * Create ck.ChangeLanguageRequest
 * @returns {ck.ChangeLanguageRequest}
 */
ck.ChangeLanguageRequest.create = function (languageCodeServer) {
    return new ck.ChangeLanguageRequest(languageCodeServer);
};
