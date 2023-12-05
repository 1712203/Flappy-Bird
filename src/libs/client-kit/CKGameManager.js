/**
 * Manager game modules
 *
 * @class
 * @extends cc.Class
 *
 * @property {ck.NetworkManager} network
 * @property {ck.LocalizeManager} localize
 * @property {ck.NoticeManager} notice
 * @property {ck.LoadingManager} loading
 * @property {ck.SystemManager} system
 * @property {ck.LoginManager} login
 * @property {ck.AvatarManager} avatar
 * @property {ck.ItemManager} item
 * @property {ck.ProfileManager} profile
 * @property {ck.PaymentManager} payment
 * @property {ck.FreeCoinManager} free
 * @property {ck.QuestManager} quest
 * @property {ck.MailboxManager} mailbox
 * @property {ck.HomeManager} home
 * @property {ck.FriendManager} friend
 * @property {ck.TutorialManager} tutorial
 * @property {ck.RankingManager} ranking
 * @property {ck.ShopManager} shop
 * @property {ck.CheatManager} cheat
 * @property {ck.GameplayManager} gameplay
 * @property {ck.AroundTheWorldManager} atw
 * @property {ck.DragonKnightManager} dragon
 * @property {ck.CardCollectionManager} cardCollection
 * @property {ck.ShareImageManager} shareImage
 * @property {ck.TrophyManager} trophy
 * @property {ck.ChatFilterManager} chatFilter
 * @property {ck.BaseFeatureManager[]} features
 * @property {ck.BaseMinigameManager[]} minigames
 * @property {ck.BaseEventManager[]} events
 *
 */
ck.GameManager = cc.Class.extend({

    /** @type {cc.Size} */
    _designSize: cc.size(640, 1136),

    /** @type {string} */
    _defaultFont: "",

    /** @type {string} */
    _numberFont: "",

    _isPoolInit: false,


    /**
     * @type {Map<number, ck.BaseEventManager>}
     */
    _mapEvents: null,

    _isMinigamesSorted: false,

    ctor: function () {
        this._managers = [];
        this._features = [];
        this._minigames = [];
        this._events = [];
        this._mapEvents = new Map();
    },

    _initManagers: function () {
        this._managers = [];
        this._features = [];
        this._minigames = [];
        this._events = [];
        this._mapEvents.clear();

        // basic stuffs
        this._login = LoginManager.create();
        this.pushManager(this._login);

    },

    _initDesignSize: function () {
        ck.setDesignSize(this._designSize);
    },

    _initSearchPaths: function () {
        jsb.fileUtils.addSearchPath(fr.NativeService.getFolderUpdateAssets() + "/res", true);
        jsb.fileUtils.addSearchPath("res");
    },

    _initPlugins: function () {
        fr.wrapper.init();
        fr.tracker.init();
        fr.facebook.init();
        fr.google.init();
        fr.firebaseAnalytic.init();
        fr.fcm.init();
        if(ck.isIOS())
            fr.apple.init();
    },

    loadCache: function () {
        this._managers.forEach(manager => manager.loadCache());
    },

    /**
     * @param {ck.BaseManager} manager
     * @param {boolean} ignoreMinigame
     */
    pushManager: function (manager, ignoreMinigame=false) {
        if (!manager) return;
        this._managers.push(manager);
        if (manager instanceof ck.BaseFeatureManager) {
            this._features.push(manager);
        }
        if (manager instanceof ck.BaseEventManager) {
            if(!(manager instanceof VanCatManager))
                this._events.push(manager);
            this._mapEvents.set(manager.data.getTokenID(), manager);
        }
        if (!ignoreMinigame && (manager instanceof ck.BaseMinigameManager)) {
            this._minigames.push(manager);
        }
    },

    getDesignSize: function () {
        return this._designSize;
    },

    getDefaultFont: function () {
        return this._defaultFont;
    },

    getNumberFont: function () {
        return this._numberFont;
    },

    /** Start the game */
    start: function () {
        this._designSize = GameManager.DESIGN_SIZE;
        this._defaultFont = GameManager.DEFAULT_FONT;
        this._numberFont = GameManager.NUMBER_FONT;
        this._initDesignSize();
        this._initManagers();
        this._initSearchPaths();
        this._initPlugins();
        this.loadConfigs();
        this.loadCache();
        //this._login.start(); todo: start scene
    },


    /** Reset modules data on login */
    resetDataOnLogin: function () {
        this._managers.forEach(manager => {
            if (manager && manager.isResetDataOnLogin()) {
                manager.resetData();
            }
        });
    },

    requestDataAfterLogin: function () {
        this._managers.forEach(manager => manager && manager.requestData());
    },

    loadConfigs: function () {
        this._managers.forEach(manager => manager && manager.loadConfig());
    },

    initPools: function () {
        if (this._isPoolInit) return;
        ck.NetworkPair.initPool(5);
        this._isPoolInit = true;
    },

});

/**
 * @class
 * @extends ck.GameManager
 */
let GameManager = ck.GameManager;

/**
 * @return {GameManager}
 * @private
 */
GameManager.create = function () {
    return new GameManager();
};

/**
 * @type {GameManager}
 * @static
 * @private
 */
GameManager._instance = null;

/**
 * @return {GameManager}
 */
GameManager.getInstance = function () {
    if (!GameManager._instance) {
        GameManager._instance = GameManager.create();
    }
    return GameManager._instance;
};

/**
 * Game design size
 * @constant
 * @type {cc.Size}
 */
GameManager.DESIGN_SIZE = cc.size(640, 1136);

/**
 * Game default font path
 * @constant
 * @type {String}
 */
GameManager.DEFAULT_FONT = "fonts/BebasNeueProBold.ttf";

/**
 * Game default font path
 * @constant
 * @type {String}
 */
GameManager.NUMBER_FONT = "fonts/LilitaOneRegular.ttf";

let _p = GameManager.prototype;
cc.defineGetterSetter(_p, "network", _p.getNetwork);
cc.defineGetterSetter(_p, "localize", _p.getLocalize);
cc.defineGetterSetter(_p, "notice", _p.getNotice);
cc.defineGetterSetter(_p, "loading", _p.getLoading);
cc.defineGetterSetter(_p, "system", _p.getSystem);
cc.defineGetterSetter(_p, "login", _p.getLogin);
cc.defineGetterSetter(_p, "avatar", _p.getAvatar);
cc.defineGetterSetter(_p, "item", _p.getItem);
cc.defineGetterSetter(_p, "profile", _p.getProfile);
cc.defineGetterSetter(_p, "payment", _p.getPayment);
cc.defineGetterSetter(_p, "free", _p.getFree);
cc.defineGetterSetter(_p, "quest", _p.getQuest);
cc.defineGetterSetter(_p, "mailbox", _p.getMailbox);
cc.defineGetterSetter(_p, "home", _p.getHome);
cc.defineGetterSetter(_p, "friend", _p.getFriend);
cc.defineGetterSetter(_p, "tutorial", _p.getTutorial);
cc.defineGetterSetter(_p, "ranking", _p.getRanking);
cc.defineGetterSetter(_p, "league", _p.getLeague);
cc.defineGetterSetter(_p, "shop", _p.getShop);
cc.defineGetterSetter(_p, "cheat", _p.getCheat);
cc.defineGetterSetter(_p, "gameplay", _p.getGameplay);
cc.defineGetterSetter(_p, "cardCollection", _p.getCardCollection);
cc.defineGetterSetter(_p, "shareImage", _p.getShareImage);
cc.defineGetterSetter(_p, "trophy", _p.getTrophy);
cc.defineGetterSetter(_p, "chatFilter", _p.getChatFilter);
cc.defineGetterSetter(_p, "atw", _p.getAroundTheWorld);
cc.defineGetterSetter(_p, "dragon", _p.getDragon);
cc.defineGetterSetter(_p, "features", _p.getFeatures);
cc.defineGetterSetter(_p, "minigames", _p.getMinigames);
cc.defineGetterSetter(_p, "events", _p.getEvents);
cc.defineGetterSetter(_p, "availableEvents", _p.getAvailableEvents);
_p = null;
