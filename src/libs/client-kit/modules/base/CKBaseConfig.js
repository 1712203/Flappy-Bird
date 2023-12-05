/**
 * Base class for config data
 * Store data config loaded from local or server
 * @class
 * @abstract
 * @extends cc.Class
 */
ck.BaseConfig = cc.Class.extend({
    ctor: function (file) {
    },

    /**
     * Load config data
     * @param {string} file
     * @virtual
     */
    load: function (file) {

    },

    /**
     * Load an asset info
     * @param {{file: string, type: string, format: string}} asset
     * @return {null|ck.AssetInfo}
     */
    loadAsset: function (asset) {
        if (!asset) return null;
        const file = asset["file"];
        const type = ck.AssetType.fromString(asset["type"]);
        const format = ck.AssetFormat.fromString(asset["format"]);
        return ck.AssetInfo.create(file, type, format);
    },

    /**
     * Load array of asset info
     * @param {{file: string, type: string, format: string}[]} assets
     * @return {ck.AssetInfo[]}
     */
    loadAssets: function (assets) {
        return assets.map(asset => this.loadAsset(asset));
    },
});

