/**
 * Native portal things
 *
 * @class
 * @extends cc.Class
 *
 */
fr.NativePortal = cc.Class.extend({

    /**
     * Get session from portal
     * @returns {string}
     */
    getSessionKey: function () {
        return "";
    },

    /**
     * Return login social from portal login: "facebook", "google"
     * @return {string}
     */
    getSocialType: function () {
        return ""
    },

});

/**
 * Get NativePortal singleton
 * @returns {fr.NativePortal}
 */
fr.NativePortal.getInstance = function () {
    return new fr.NativePortal();
};
