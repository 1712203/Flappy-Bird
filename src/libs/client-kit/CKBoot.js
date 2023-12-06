/**
 * Client kit namespace
 * @namespace
 */
let ck = ck || {};

/**
 * This namespace stores class generated from ccs
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * ZPS Framework namespace
 * @namespace
 */
let fr = fr || {};

/**
 *
 * @type {GameManager}
 */
let gm = gm || {};

/**
 * Test namespace
 * @namespace
 * @todo Remove it
 */
ck.test = ck.test || {};

/**
 * Direction info used in different things (Ex. ck.GridView, TableView)
 * @enum
 */
ck.Direction = {
    VERTICAL: 1,
    HORIZONTAL: 2
};

/**
 * @enum
 * @type {{TOP_DOWN: number, BOTTOM_UP: number}}
 */
ck.VerticalFillOrder = {
    TOP_DOWN: 1,
    BOTTOM_UP: 2
};

/**
 * @enum
 * @type {{RIGHT_TO_LEFT: number, LEFT_TO_RIGHT: number}}
 */
ck.HorizontalFillOrder = {
    LEFT_TO_RIGHT: 1,
    RIGHT_TO_LEFT: 2
};

/**
 * @enum
 * @type {{PRESSED: number, RELEASED: number, HOLD: number}}
 */
ck.ButtonState = {
    RELEASED: 1,
    PRESSED: 2,
    HOLD: 3
};

/**
 * ISO Country Code (2 Character)
 * @enum
 */
ck.CountryCode = {
    UNKNOWN: "",
    VN: "VN",
    US: "US",
    TR: "TR"
};

/**
 * Game design size
 * @constant
 */
ck._designSize = { width: 640, height: 1136 };

/**
 * Set up design size, resolution, content scale factor for project
 * @param {cc.Size||{width: Number, height: Number}} designSize
 */
ck.setDesignSize = function (designSize) {
    designSize = designSize || cc.size(640, 1136);
    this._designSize = designSize;
    const frameSize = cc.view.getFrameSize();
    const isWidthSmaller = frameSize.width / designSize.width < frameSize.height / designSize.height;
    const resolutionPolicy = isWidthSmaller ? cc.ResolutionPolicy.FIXED_WIDTH : cc.ResolutionPolicy.FIXED_HEIGHT;
    cc.view.setDesignResolutionSize(designSize.width, designSize.height, resolutionPolicy);
    cc.director.setContentScaleFactor(1.0);
    cc.view.resizeWithBrowserSize(true);
};

/**
 * Get design size of the game
 * @returns {cc.Size|{width: number, height: number}}
 */
ck.getDesignSize = function () {
    return ck._designSize;
};

/**
 * Copy all of the properties from an object to target object and return the target object.
 * @param {object} targetObj
 * @param {object} fromObj
 * @returns {object}
 */
ck.extendProperties = function (targetObj, fromObj) {
    for (let key in fromObj) {
        if (!targetObj[key]) {
            targetObj[key] = fromObj[key];
        }
    }
};

/**
 * Copy all of the properties from a class prototype to target object prototype.
 * Used this to implement multiple-inheritance in Cocos2d-js
 * @param {object} targetClass
 * @param {object} fromClass
 * @returns {object}
 */
ck.extend = function (targetClass, fromClass) {
    ck.extendProperties(targetClass.prototype, fromClass.prototype);
};

/**
 * Is Win32
 * @returns {boolean}
 */
ck.isWindows = function () {
    return cc.sys.os === cc.sys.OS_WINDOWS;
};

/**
 * Is Android
 * @returns {boolean}
 */
ck.isAndroid = function () {
    return cc.sys.os === cc.sys.OS_ANDROID;
};

/**
 * Is IOS
 * @returns {boolean}
 */
ck.isIOS = function () {
    return cc.sys.os === cc.sys.OS_IOS;
};

/**
 * Check is object valid
 * @param {Object} obj
 */
ck.isValid = function (obj) {
    return cc.sys.isObjectValid(obj);
};

/**
 * Check object is an array and not empty
 * @param {Object} obj
 */
ck.isArrayAndNotEmpty = function (obj) {
    return cc.isArray(obj) && obj.length > 0;
};

ck.callFunction = function (func){
    if (cc.isFunction(func))
        func();
}

/**
 * Contain some useful information about the screen
 * @namespace
 */
ck.view = {};

/**
 * Get the center position of screen
 * @returns {cc.Point}
 */
ck.view.center = function () {
    return cc.p(cc.winSize.width * 0.5, cc.winSize.height * 0.5);
};

/**
 * Return cc.p(0, 0)
 * @returns {cc.Point}
 */
ck.view.botLeft = function () {
    return cc.p(0, 0);
};

/**
 * Copy properties that not constructor or ctor
 * @param targetObj
 * @param fromObj
 */
ck.copyProperties = function (targetObj, fromObj) {
    for (let key in fromObj) {
        if (key !== "constructor" && key !== "ctor") {
            targetObj[key] = fromObj[key];
        }
    }
};

/**
 * Fire/dispatch a custom event <br/>
 * Shortcut for cc.eventManager.dispatchCustomEvent() <br/>
 * @param {string} eventName
 * @param {any} [data]
 */
ck.fireEvent = function (eventName, data) {
    cc.eventManager.dispatchCustomEvent(eventName, data);
};

/**
 * Get data from event
 * @param {cc.Event} event
 * @return {*}
 */
ck.getDataFromEvent = function (event) {
    if (!ck.isValid(event)) return null;
    return event.getUserData();
};

/**
 * Start the game
 */
ck.startGame = function () {
    gm = GameManager.getInstance();
    gm.start();
    ck.setupBackToPortal();
    ck.setupShowAndHideEvent();
    ck.handlerFirebaseDynamicLink();
};

/**
 * Sorter name for cc.Application.getInstance().openURL
 * @param {string} url
 */
ck.openURL = function (url) {
    cc.Application.getInstance().openURL(url);
};

/**
 * Logout when back to portal
 */
ck.setupBackToPortal = function () {
    if (typeof(injection) != 'undefined' && injection.fox != null && injection.fox.setBackToPortalCallback != null && typeof(injection.fox.setBackToPortalCallback) == 'function') {
        injection.fox.setBackToPortalCallback(function () {
            gm.login.logout();
        }.bind(this));
    }
};

/**
 * Listen show and hide event
 */
ck.setupShowAndHideEvent = function () {
    cc.eventManager.addCustomListener(cc.game.EVENT_HIDE, function () {
        gm.system.pauseAllEffects();
    }.bind(this));

    cc.eventManager.addCustomListener(cc.game.EVENT_SHOW, function () {
        gm.system.resumeAllEffects();
    }.bind(this));
};

ck.handlerFirebaseDynamicLink = function () {
    let dynamicLink = fr.firebaseAnalytic.getDynamicLink();
    //cc.log("-- Firebase Dynamic Link:", dynamicLink);
    if (dynamicLink !== "") {
        let param = StringUtils.getVarsFromUrl(dynamicLink);
        if (param.data) {
            let decodeData = window.Base64.decode(param.data);
            if (gm.inviteFriend) gm.inviteFriend.getData().setDeepLinkData(JSON.parse(decodeData));
        }
    }
};

/**
 * @class
 * @abstract
 */
ck.PoolableObject = cc.Class.extend({
    /**
     * Will be call when the object is got from pool
     * @param args
     */
    reuse: function (args) {

    },

    /**
     * @abstract
     * Will be called before the object is put in pool
     */
    unuse: function () {

    },
});

