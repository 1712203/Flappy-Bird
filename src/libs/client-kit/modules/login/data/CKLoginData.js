/**
 * @class
 * @extends ck.BaseData
 */
ck.LoginData = ck.BaseData.extend({
    _loginType: 0,
    _userID: 0,
    _facebookToken: "",
    _googleToken: "",
    _appleToken: "",
    _sessionKey: "",
    _balancerRequestCount: 0,
    _facebookID: "",
    _googleID: "",
    _appleID: "",

    ctor: function () {
        ck.BaseData.prototype.ctor.call(this);
    },

    reset: function () {
        ck.BaseData.prototype.reset.call(this);
        this._loginType = 0;
        this._userID = 0;
        this._facebookToken = "";
        this._googleToken = "";
        this._appleToken = "";
        this._sessionKey = "";
        this._facebookID = "";
        this._googleID = "";
        this._appleID = "";
        this._balancerRequestCount = 0;
    },

    isFacebook: function () {
        return this._loginType === ck.LoginType.FACEBOOK;
    },

    isGoogle: function () {
        return this._loginType === ck.LoginType.GOOGLE;
    },

    isApple: function () {
        return this._loginType === ck.LoginType.APPLE;
    },

    getLoginType: function () {
        return this._loginType;
    },

    setLoginType: function (type) {
        this._loginType = type;
    },

    getFacebookToken: function () {
        return this._facebookToken;
    },

    setFacebookToken: function (token) {
        this._facebookToken = token;
    },

    getGoogleToken: function () {
        return this._googleToken;
    },

    getAppleToken: function () {
        return this._appleToken;
    },

    getUserID: function () {
        return this._userID;
    },

    setUserID: function (id) {
        this._userID = id;
    },

    getSessionKey: function () {
        return this._sessionKey;
    },

    getSocialName: function () {
        switch (this._loginType) {
            case ck.LoginType.FACEBOOK:
                return ck.SocialName.FACEBOOK;
            case ck.LoginType.GOOGLE:
                return ck.SocialName.GOOGLE;
            case ck.LoginType.APPLE:
                return ck.SocialName.APPLE;
            case ck.LoginType.GUEST:
                return ck.SocialName.GUEST;
        }
        return ck.SocialName.NONE;
    },

    getAccessToken: function () {
        switch (this._loginType) {
            case ck.LoginType.FACEBOOK:
                return this._facebookToken;
            case ck.LoginType.GOOGLE:
                return this._googleToken;
            case ck.LoginType.APPLE:
                return this._appleToken;
        }
        return "";
    },

    getBalancerRequestCount: function () {
        return this._balancerRequestCount;
    },

    countBalancerRequest: function () {
        this._balancerRequestCount++;
    },

    resetBalancerRequestCount: function () {
        this._balancerRequestCount = 0;
    },

    // MARK: CACHE

    /**
     * Cache data after login success
     */
    cache: function () {
        ck.cache.setString(ck.LoginData.CacheKey.SESSION_KEY, this._sessionKey);
        ck.cache.setNumber(ck.LoginData.CacheKey.LOGIN_TYPE, this._loginType);
        if (!fr.portal.isIOSPortal() && this._loginType !== ck.LoginType.ID) {
            fr.portal.migrateSessionKey(this._sessionKey);
            fr.portal.migrateSocialId(this._loginType);
            fr.portal.migrateAccessToken(this.getAccessToken());
        }
    },

    /**
     * Load cache data
     * @returns {boolean} true if has cache, otherwise false.
     */
    loadCache: function () {
        this._sessionKey = ck.cache.getString(ck.LoginData.CacheKey.SESSION_KEY, "");
        this._loginType = ck.cache.getNumber(ck.LoginData.CacheKey.LOGIN_TYPE, 0);
        return this._sessionKey !== "";
    },

    /**
     * Clear cache data
     */
    clearCache: function () {
        ck.cache.remove(ck.LoginData.CacheKey.SESSION_KEY);
        ck.cache.remove(ck.LoginData.CacheKey.LOGIN_TYPE);
    },

    /**
     * Set session key
     * @param {string} sessionKey
     */
    setSessionKey: function (sessionKey) {
        this._sessionKey = sessionKey;
    },

    /**
     * Set google token
     * @param {string} token
     */
    setGoogleToken: function (token) {
        this._googleToken = token;
    },

    /**
     * Set apple token
     * @param {string} token
     */
    setAppleToken: function (token) {
        this._appleToken = token;
    },

    /**
     * @returns {string}
     */
    getFacebookID: function () { return this._facebookID; },

    /**
     * @param {string} facebookID
     */
    setFacebookID: function (facebookID) { this._facebookID = facebookID; },

    /**
     * @returns {string}
     */
    getGoogleID: function () { return this._googleID; },

    /**
     * @param {string} googleID
     */
    setGoogleID: function (googleID) { this._googleID = googleID; },

    /**
     * @returns {string}
     */
    getAppleID: function () { return this._appleID; },

    /**
     * @param {string} appleID
     */
    setAppleID: function (appleID) { this._appleID = appleID; },

    /**
     * @return {string}
     */
    getPlatformID: function () {
        switch (this._loginType) {
            case ck.LoginType.FACEBOOK:
                return this._facebookID;
            case ck.LoginType.GOOGLE:
                return this._googleID;
            case ck.LoginType.APPLE:
                return this._appleID;
        }
        return "";
    },
});

/**
 * @class
 * @extends ck.LoginData
 */
let LoginData = ck.LoginData;

/**
 * @returns {LoginData}
 */
LoginData.create = function () {
    return new LoginData();
};

/**
 * Cache key
 * @constant
 */
ck.LoginData.CacheKey = {
    SESSION_KEY: "SESSION_KEY",
    LOGIN_TYPE: "LOGIN_TYPE"
};

/**
 * @return {ck.LoginData}
 */
ck.LoginData.create = function () {
    return new ck.LoginData();
};

let LoginData = ck.LoginData;
