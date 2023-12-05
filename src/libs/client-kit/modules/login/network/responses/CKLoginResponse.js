ck.LoginResponse = ck.NetworkResponse.extend({
    ctor: function (data) {
        ck.NetworkResponse.prototype.ctor.call(this, data);
    },

    /**
     * @override
     */
    _readData: function () {

    },
});

/**
 * @class
 * @extends ck.LoginResponse
 */
let LoginResponse = ck.LoginResponse;

/**
 * @returns {LoginResponse}
 */
LoginResponse.create = function (data) {
    return new LoginResponse(data);
};
