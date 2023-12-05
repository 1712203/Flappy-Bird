/**
 * Returns frame size
 * @returns {cc.Size}
 */
cc.view.getFrameSize = function () {
    return cc.size(0, 0);
};

/**
 * Is using portal or not
 * @returns {boolean}
 */
cc.director.isUsePortal = function () {
    return false;
};

/**
 * Set default alpha pixel format for loading images with different formats
 * @param {number} format
 */
cc.Texture2D.setDefaultAlphaPixelFormat = function (format) {
};

/**
 * Get item from cache
 * @param {string} key
 * @returns {string|null|undefined}
 */
cc.sys.localStorage.getItem = function (key) { return null; };

/**
 * Get event user data
 * @returns {any}
 */
cc.Event.prototype.getUserData = function () {
    return {};
};

/**
 * Set callback called onExit
 * @param {Function} callback
 */
cc.Node.prototype.setOnExitCallback = function (callback) {
};

/**
 * Set callback called onEnter
 * @param {Function} callback
 */
cc.Node.prototype.setOnEnterCallback = function (callback) {
};

/**
 * Draw a solid circle
 * @param {cc.Point} center
 * @param {number} radius
 * @param {number} angle
 * @param {number} segments
 * @param {number} color
 */
cc.DrawNode.prototype.drawSolidCircle = function (center, radius, angle, segments, color) {
};

/**
 * @class
 */
cc.Properties = cc.Class.extend({});

/**
 * @param {string} path
 * @returns {cc.Properties}
 */
cc.Properties.createNonRefCounted = function (path) {
    return null;
};

/**
 * @class
 */
cc.GLProgramState = cc.Class.extend({
    /**
     * @param {string} name
     * @param {cc.Point} vec2
     */
    setUniformVec2: function (name, vec2) {

    },

    /**
     * @param {string} name
     * @param {number} value
     */
    setUniformFloat: function (name, value) {

    },

    /**
     * @param {string} name
     * @param {cc.Texture2D} texture
     */
    setUniformTexture: function (name, texture) {

    },
});

/**
 * @class
 */
cc.MaterialPass = cc.Class.extend({
    /**
     * @returns {cc.GLProgramState}
     */
    getGLProgramState: function () {

    },
});

/**
 * @class
 */
cc.MaterialTechnique = cc.Class.extend({
    /**
     * @param index
     * @return {cc.MaterialPass}
     */
    getPassByIndex: function (index) {
        return null;
    },
});

/**
 * @class
 */
cc.Material = cc.Class.extend({
    getTechniqueByName: function () {

    },
});

/**
 * @param {cc.Properties} properties
 * @returns {cc.Material}
 */
cc.Material.createWithProperties = function (properties) {
    return null;
};

/**
 * @param {cc.GLProgramState} state
 */
cc.Node.prototype.setGLProgramState = function (state) {

};

/**
 * @constant
 * @type {number}
 */
cc.IMAGE_FORMAT_JPG = 0;

/**
 * @param {boolean} enabled
 */
ccui.ListView.prototype.setScrollBarEnabled = function (enabled) {

};

/**
 * @param {boolean} enabled
 */
ccui.ScrollView.prototype.setScrollBarEnabled = function (enabled) {

};

/**
 * @class
 * @property {number} x
 * @property {number} y
 */
cc.Point = cc.Class.extend({
    x: 0,
    y: 0,
});

let _p = GameManager.prototype;
cc.defineGetterSetter(_p, "x", _p.getX, _p.setX);
cc.defineGetterSetter(_p, "y", _p.getY, _p.setY);
_p = null;

let IAPPlugin = {};

IAPPlugin.prototype.setListener = function (obj) {

};

IAPPlugin.prototype.payForProduct = function (obj) {

};

plugin.FacebookAgent.prototype._api = function () {};

cc.Plugin = {};

cc.Plugin.prototype.callIntFuncWithParam = function () {};

ccui.Text.__defaultFontSize = 0;
ccui.Text.__customSize = {};

let AppleIAPProduct = {
    productId: "",
    productName: "",
    productDesc: "",
    productPrice: "",
};