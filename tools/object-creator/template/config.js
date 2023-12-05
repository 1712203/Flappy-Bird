/**
 * Store ModuleName config data read from json file
 * @class
 * @extends ck.BaseConfig
 */
ModuleNameConfig = ck.BaseConfig.extend({
    ctor: function () {
        ck.BaseConfig.prototype.ctor.call(this);
    },

    // <override>

    /**
     * Load config from a file
     * @param {string} file json file path (Ex. configs/ModuleNameConfig.json)
     */
    load: function (file) {
        ck.BaseConfig.prototype.load.call(this, file);
        let obj = ck.loader.loadJson(file);
        if (!obj) return;
    }
});

/**
 * @return {ModuleNameConfig}
 */
ModuleNameConfig.create = function () {
    return new ModuleNameConfig();
};