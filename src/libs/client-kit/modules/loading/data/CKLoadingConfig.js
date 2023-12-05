ck.LoadingConfig = ck.BaseConfig.extend({
    /**
     * @type {Map<number, SceneConfigData>}
     */
    _scenes: null,
    /**
     * @type {Array<LoadingTipConfigData>}
     */
    _tips: null,

    ctor: function () {
        ck.BaseConfig.prototype.ctor.call(this);
        this._scenes = new Map();
        this._tips = [];
    },

    /**
     * @override
     */
    load: function (file) {
        ck.BaseConfig.prototype.load.call(this, file);
        this._scenes.clear();
        const obj = ck.loader.loadJson(file);
        if (!obj) {
            cc.warn("[LoadingConfig] <load> Load failed", file);
            return;
        }
        const scenes = obj["scenes"];
        scenes.forEach(function(scene){
            const data = ck.SceneConfigData.create();
            data.setID(scene["id"]);
            data.setName(scene["name"]);
            data.setBackgroundMusic(scene["backgroundMusic"]);
            data.setAssets(this.loadAssets(scene["assets"]));
            this._scenes.set(data.getID(), data);
        }.bind(this));

        const tips = obj["tips"];
        tips.forEach(function(tip){
            const data = ck.LoadingTipConfigData.create();
            data.setText(tip["text"]);
            data.setLevelRequired(tip["levelRequired"]);
            this._tips.push(data);
        }.bind(this));
    },

    /**
     * @param id
     * @return {SceneConfigData}
     */
    getSceneConfigData: function (id) {
        return this._scenes.get(id);
    },

    /**
     * @param id
     * @return {ck.AssetInfo[]}
     */
    getSceneAssets: function (id) {
        const data = this.getSceneConfigData(id);
        return data ? data.getAssets() : null;
    },

    /**
     * @param id
     * @return {string}
     */
    getBackgroundMusic: function (id) {
        const data = this.getSceneConfigData(id);
        return data ? data.getBackgroundMusic() : "";
    },

    /**
     * @return {Array<LoadingTipConfigData>}
     */
    getTips: function () {
        return this._tips;
    },

    /**
     * @return {string}
     */
    getRandomTip: function () {
        const userLevel = gm.profile.getLevel();
        const tips = this._tips.filter(tip => userLevel >= tip.getLevelRequired());
        if (tips.length <= 0) return "";
        return _.sample(tips).getText();
    },
});

/**
 * @class
 * @extends ck.LoadingConfig
 */
let LoadingConfig = ck.LoadingConfig;

/**
 * @returns {LoadingConfig}
 */
LoadingConfig.create = function () {
    return new LoadingConfig();
};