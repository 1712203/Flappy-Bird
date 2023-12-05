/**
 * @class
 * @extends cc.Layer
 * @extends ck.BaseMainLayer
 */
ck.LoginLayer = _ccs.LoginLayer.extend({

    /** @type {Map<LoginType, ccui.Widget>} */
    _loginMethods: null,

    ctor: function () {
        this._loadAssets();
        _ccs.LoginLayer.prototype.ctor.call(this);
        ck.BaseMainLayer.prototype.ctor.call(this);
        this._initTouchEvents();
        this._initLoginMethods();
        this._initEditBox();
        this._initListeners();
    },

    onEnterTransitionDidFinish: function (){
        this._super();
    },

    _cheatLogin2Account: function (id1 = 1, id2 = 2){
        if (LoginLayer.cheated)
            return;
        LoginLayer.cheated = true;
        var id1LoginTime = ck.cache.getNumber("id1LoginTime", 0);
        var now = Date.now();
        var dt = now - id1LoginTime;
        if (dt > 3000){
            this._manager.loginWithID(id1);
            ck.cache.setNumber("id1LoginTime", now);
        } else this._manager.loginWithID(id2);
    },

    _loadAssets: function () {
        gm.loading.loadSceneAssets(ck.SceneID.LOGIN);
    },

    /**
     * @override
     * @return {null}
     */
    getItemPositions: function () {
        return null;
    },

    /**
     * @override
     * @param {LoginData} data
     */
    setData: function (data) {
        this.setLoginMethods(this._manager.getConfig().getLoginMethods());
        this._txtVersion.setString(this._manager.getVersionCode());
    },

    _initTouchEvents: function () {
        UIUtils.initPressableWidget(this._imgID, this._onIDPressed.bind(this));
        UIUtils.initPressableWidget(this._imgGuest, this._onGuestPressed.bind(this));
        UIUtils.initPressableWidget(this._imgFacebook, this._onFacebookPressed.bind(this));
        UIUtils.initPressableWidget(this._imgGoogle, this._onGooglePressed.bind(this));
        UIUtils.initPressableWidget(this._imgApple, this._onApplePressed.bind(this));
    },

    _initLoginMethods: function () {
        this._loginMethods = new Map();
        this._loginMethods.set(LoginType.ID, this._layoutID);
        this._loginMethods.set(LoginType.GUEST, this._imgGuest);
        this._loginMethods.set(LoginType.FACEBOOK, this._imgFacebook);
        this._loginMethods.set(LoginType.GOOGLE, this._imgGoogle);
        this._loginMethods.set(LoginType.APPLE, this._imgApple);
    },

    _initEditBox: function () {
        this._editBoxID.setText(ck.cache.getString(LoginLayer.CACHE_ID_KEY, "1"));
    },

    _initListeners: function () {
        this.addListener(ck.ProfileEvents.REFUND_BAN_INFO, this.onRefundBanInfo.bind(this));
    },

    /**
     *
     * @param loginMethods {Map<LoginType, Boolean>}
     */
    setLoginMethods: function (loginMethods) {
        this.hideAllLoginMethods();
        let enableLoginButtons = [];
        loginMethods.forEach((enable, loginType) => {
            if (!enable) return;
            let button = this._loginMethods.get(loginType);
            if (!button) return;
            button.setVisible(false);
            if (loginType === LoginType.ID && this._manager.isLive()) return;
            if (loginType === LoginType.APPLE && !ck.isIOS()) return;
            button.setVisible(true);
            enableLoginButtons.push(button);
        });
        this._relayoutLoginMethods(enableLoginButtons);
    },

    hideAllLoginMethods: function () {
        this._loginMethods.forEach((widget) => widget.setVisible(false));
    },

    _relayoutLoginMethods: function (enableLoginButtons) {
        const centerPoint = cc.p(this._layoutMethods.width * 0.2, this._layoutMethods.height * 0.5);
        UIUtils.layoutGrid(enableLoginButtons, centerPoint, 0, 125, 1);
    },

    _onIDPressed: function () {
        const str = this._editBoxID.getText();
        const id = Number(str) || 1;
        this._manager.loginWithID(id);
        ck.cache.setString(LoginLayer.CACHE_ID_KEY, id.toString());
    },

    _onGuestPressed: function () {
        // this._manager.loginWithGuest();
    },

    _onFacebookPressed: function () {
        this._manager.loginWithFacebook();
    },

    _onGooglePressed: function () {
        this._manager.loginWithGoogle();
    },

    _onApplePressed: function () {
        this._manager.loginWithApple();
    },

    setLoginMethodsVisible: function (visible) {
        this._txtTitle.setVisible(visible);
        this._layoutMethods.setVisible(visible);
    },

    onRefundBanInfo: function (event) {
        if (gm.profile.isUserBanned()) {
            gm.profile.checkShowRefundBanPopup();
        }
    },
});

ck.extend(ck.LoginLayer, ck.BaseMainLayer);

/**
 * @class
 * @extends ck.LoginLayer
 */
let LoginLayer = ck.LoginLayer;

/**
 * @returns {LoginLayer}
 */
LoginLayer.create = function () {
    return new LoginLayer();
};

LoginLayer.CACHE_ID_KEY = "LOGIN_CACHE_ID";