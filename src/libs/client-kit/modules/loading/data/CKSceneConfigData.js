ck.SceneConfigData = cc.Class.extend({

    /**
     * @type {ck.SceneID|number}
     */
    _id: 0,

    /**
     * @type {string}
     */
    _name: "",

    /**
     * @type {ck.AssetInfo[]}
     */
    _assets: null,

    /**
     * @type {string}
     */
    _backgroundMusic: "",

    ctor: function () {
        this._assets = [];
    },
    
    getID: function () {
        return this._id;
    },

    setID: function (id) {
        this._id = id;
    },

    getName: function () {
        return this._name;
    },

    setName: function (name) {
        this._name = name;
    },

    getAssets: function () {
        return this._assets;
    },

    setAssets: function (assets) {
        this._assets = assets || [];
    },

    /**
     * @returns {string}
     */
    getBackgroundMusic: function () {
        return this._backgroundMusic;
    },

    /**
     * @param {string} backgroundMusic
     */
    setBackgroundMusic: function (backgroundMusic) {
        this._backgroundMusic = backgroundMusic;
    },


});

/**
 * @class
 * @extends ck.SceneConfigData
 */
let SceneConfigData = ck.SceneConfigData;

/**
 * @returns {SceneConfigData}
 */
SceneConfigData.create = function () {
    return new SceneConfigData();
};