/**
 * @class
 * @extends ck.BaseConfig
 */
ck.LoginConfig = ck.BaseConfig.extend({
    /** URL used to get session key for game not using portal */
    _sessionKeyURL: "",

    /** Game id used to session key, for game not using portal */
    _gameID: "",

    /** Secret key used to session key, for game not using portal */
    _secretKey: "",

    /** Current connected server id */
    _serverConnect: 0,

    /** Current address index */
    _addressIndex: 0,

    /** Client version */
    _clientVersion: 0,

    /** Default package name - used in case can NOT get package name from android/ios */
    _defaultPackageName: "",

    /** Default use cdn flag - used in case don't get feature key USE_IOS_CDN from Server */
    _useCDN: false,

    /** Max balancer requests retry */
    _maxBalancerRequest: 3,

    /**
     * List server info read from config
     * @type {ck.ServerInfo[]}
     */
    _servers: null,

    /**
     * Current server info
     * @type {ck.ServerInfo}
     */
    _currentServer: null,

    /**
     * Map login method using
     * @type {Map<LoginType, Boolean>}
     */
    _loginMethods: null,

    _buildVersion: null,

    ctor: function () {
        ck.BaseConfig.prototype.ctor.call(this);
        this._servers = [];
    },

    /**
     * Load config from json
     * @param {string} file
     * @override
     */
    load: function (file) {
        ck.BaseConfig.prototype.load.call(this, file);
        const obj = ck.loader.loadJson(file);
        if (!obj) return;
        this._servers = [];
        const portal = obj["portal"];
        this._sessionKeyURL = portal["sessionKeyURL"];
        this._gameID = portal["gameID"];
        this._secretKey = portal["secretKey"];
        this._serverConnect = obj["serverConnect"];
        this._clientVersion = obj["clientVersion"] || 0;
        this._buildVersion = obj["buildVersion"] || "";
        this._defaultPackageName = obj["defaultPackageName"] || 0;
        this._useCDN = obj["useCDN"] || false;
        this._maxBalancerRequest = obj["maxBalancerRequest"] || 3;
        const servers = obj["servers"];
        servers.forEach(function(server){
            const serverInfo = ServerInfo.create();
            serverInfo.setID(server["id"]);
            serverInfo.setName(server["name"]);
            serverInfo.setBalancers(server["balancers"]);
            const addresses = server["addresses"];
            addresses.forEach(function(address){
                serverInfo.addAddress(address["ip"], address["port"]);
            }.bind(this));
            this._servers.push(serverInfo);
        }.bind(this));

        if (ck.isWindows()) {
            this._serverConnect = 0;
        }
        this._currentServer = this._servers[this._serverConnect];
        this._loginMethods = new Map();
        const loginMethods = obj["loginMethods"];
        Object.keys(loginMethods).forEach(method => {
            this._loginMethods.set(LoginType[method], loginMethods[method]);
        })
    },

    /**
     *
     * @param id
     * @return {ck.ServerInfo|null}
     */
    getServerInfo: function (id) {
        const index = this._servers.findIndex(function (server) {
            return server && server.getID() === id;
        });
        return index > -1 ? this._servers[index] : null;
    },

    /**
     *
     * @return {number}
     */
    getCurrentServerID: function () {
        return this._serverConnect;
    },

    /**
     * @return {ck.ServerInfo}
     */
    getCurrentServerInfo: function () {
        return this._currentServer;
    },

    /**
     *
     * @return {string}
     */
    getCurrentServerName: function () {
        return this._currentServer ? this._currentServer.getName() : "unknown";
    },

    /**
     *
     * @return {boolean}
     */
    isServerLive: function () {
        return this._currentServer ? this._currentServer.getID() === ServerID.LIVE : false;
    },

    /**
     *
     * @return {boolean}
     */
    isServerLocal: function () {
        return this._currentServer ? this._currentServer.getID() === ServerID.LOCAL : false;
    },

    /**
     *
     * @param id
     */
    setServerConnect: function (id) {
        this._serverConnect = id;
        this._currentServer = this.getServerInfo(id);
    },

    /**
     *
     * @return {number}
     */
    getClientVersion: function () {
        return this._clientVersion;
    },

    /**
     * @return {string}
     */
    getDefaultPackageName: function () {
        return this._defaultPackageName;
    },

    /**
     * @return {number}
     */
    getMaxBalancerRequest: function () {
        return this._maxBalancerRequest;
    },

    /**
     * @return {string}
     */
    getBuildVersion: function () {
        return this._buildVersion;
    },

    /**
     * @return {string}
     */
    getSessionKeyURL: function () {
        return this._sessionKeyURL;
    },

    /**
     * @return {string}
     */
    getGameID: function () {
        return this._gameID;
    },

    /**
     * @return {string}
     */
    getSecretKey: function () {
        return this._secretKey;
    },

    /**
     * @return {Map<LoginType, Boolean>}
     */
    getLoginMethods: function () {
        return this._loginMethods;
    },

    /**
     * @return {Boolean}
     */
    isUseCDN: function () {
        return this._useCDN;
    }
});

/**
 * @class
 * @extends ck.LoginConfig
 */
let LoginConfig = ck.LoginConfig;

/**
 * @returns {LoginConfig}
 */
LoginConfig.create = function () {
    return new LoginConfig();
};
