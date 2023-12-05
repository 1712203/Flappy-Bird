ck.LoginHandler = ck.NetworkHandler.extend({

    ctor: function() {
        ck.NetworkHandler.prototype.ctor.call(this);
    },

    _onHandshakeTimeout: function () {
        cc.log("[LoginHandler] <_onHandshakeTimeout>");
        this._manager.connectAndLogin();
    },

    _onHandshakeResponse: function (response) {
        cc.log("[LoginHandler] <_onHandshakeResponse>");
        this.sendLoginRequest();
    },

    _onLoginTimeout: function () {
        cc.log("[LoginHandler] <_onLoginTimeout>");
        this._manager.connectAndLogin();
    },

    _onLoginResponse: function (response) {
        cc.log("[LoginHandler] <_onLoginResponse>");
        gm.notice.hideSpinner();
    },

    /**
     * @param {ck.LoginInfoResponse} response
     */
    _onLoginInfoResponse: function (response) {
        // cc.log("[LoginHandler] <_onLoginInfoResponse>", response);
        if (!response) return;
        if (!this._manager) return;
        this._manager.onLoginInfoResponse(response);
    },

    _onReloginResponse: function (response) {
        if (!response) return;
        cc.log("[LoginHandler] <_onReloginResponse>", JSON.stringify(response, null, 4));
        this._network.disconnect(function(){
            // this._showPopupRelogin(response.getAddress());
            this._manager.connectAndLogin(response.getAddress());

        }.bind(this));
    },

    _showPopupRelogin: function (address) {
        const message = gm.localize.getText("TXT_RELOGIN_MESSAGE");
        const popup = gm.notice.alert(message);
        if (!popup) return null;
        popup.disableClose();
        const callback = function () {
            this._manager.connectAndLogin(address);
        }.bind(this);
        popup.setCallback(callback);
        return popup;
    },

    /**
     * Handle a packet from server
     * @override
     * @param {number} id packet ID
     * @param {string} data packet data
     * @returns {boolean} Did this handler handle this type of packet
     */
    handle: function (id, data) {
        switch (id) {
            case ck.PacketID.HANDSHAKE:
                this._onHandshakeResponse(HandshakeResponse.create(data));
                return true;
            case ck.PacketID.LOGIN:
                this._onLoginResponse(LoginResponse.create(data));
                return true;
            case ck.PacketID.LOGIN_INFO:
                this._onLoginInfoResponse(LoginInfoResponse.create(data));
                return true;
            case ck.PacketID.RELOGIN:
                this._onReloginResponse(ReloginResponse.create(data));
                return true;
        }
        return false;
    },

    sendHandshakeRequest: function () {
        cc.log("[LoginHandler] <sendHandshakeRequest>");
        const text = gm.localize.getText("TXT_HANDSHAKING");
        gm.notice.showSpinner(text);
        this._network.send(HandshakeRequest.create(), this._onHandshakeTimeout.bind(this));
    },

    sendLoginRequest: function () {
        cc.log("[LoginHandler] <sendLoginRequest>");
        gm.notice.showSpinner(gm.localize.getText("TXT_LOGGING_IN"));
        let request = LoginRequest.create();
        this._network.send(request, this._onLoginTimeout.bind(this));
    },

    sendLogout: function () {
        this._network.sendWithID(ck.PacketID.LOGOUT);
    }

});

/**
 * @class
 * @extends ck.LoginHandler
 */
let LoginHandler = ck.LoginHandler;

/**
 * @returns {LoginHandler}
 */
LoginHandler.create = function () {
    return new LoginHandler();
};
