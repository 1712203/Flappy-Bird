/**
 * @class
 * @extends ck.LoginManager
 */
let LoginManager = ck.LoginManager.extend({

    /**
     * LoginManager constructor
     * @constructor
     */
    ctor: function () {
        ck.LoginManager.prototype.ctor.call(this);
    },

    /**
     * @override
     * @param {LoginInfoResponse} response
     */
    onLoginInfoResponse: function (response) {
        ck.LoginManager.prototype.onLoginInfoResponse.call(this, response);
        gm.pisti.data.setModes(response.getModes());
        gm.pisti.data.setInReview(response.isInReview());
        if (!response.isInReview()) {
            fr.portal.transform();
        }
    },
});

/**
 * Create LoginManager
 * @returns {LoginManager}
 */
LoginManager.create = function () {
    return new LoginManager();
};

ck.LoginManager.create = LoginManager.create;