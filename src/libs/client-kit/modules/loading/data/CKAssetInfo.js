/**
 * Asset type
 * @enum
 */
ck.AssetType = {
    NONE: 0,
    SPRITE: 1,
    SPRITE_SHEET: 2,
    SFX: 3,
    VOICE: 4,
};

ck.AssetType.fromString = function (str) {
    let type = ck.AssetType[str];
    if (type === undefined) {
        cc.error("[ck.AssetType.fromString] - Asset type not found %s", str);
        return ck.AssetType.NONE;
    }
    return type;
};

ck.AssetFormat = {
    // cc.Texture2D.PIXEL_FORMAT_AUTO
    AUTO: 0,

    // cc.Texture2D.PIXEL_FORMAT_RGBA8888
    RGBA8888: 2,

    // cc.Texture2D.PIXEL_FORMAT_RGBA4444
    RGBA4444: 8
};

ck.AssetFormat.fromString = function (str) {
    let format = ck.AssetFormat[str];
    if (format === undefined) return ck.AssetFormat.AUTO;
    return format;
};

/**
 * ck.AssetInfo store information about asset that need to load
 * 
 * @class 
 * @extends cc.Class
 * 
 */
ck.AssetInfo = cc.Class.extend({

    /**
     * Asset type
     * @type {ck.AssetType}
     */
    _type: ck.AssetType.NONE,

    /**
     * @type {string}
     */
    _fileName: "",

    /**
     * Format to load asset (Currently used for pixel format of texture - sprite/sprite sheet)
     * @type {number}
     */
    _format: cc.Texture2D.PIXEL_FORMAT_AUTO,

    ctor: function (fileName, type, format) {
        type = type || ck.AssetInfo.getTypeByFileName(fileName);
        this.setFileName(fileName);
        this.setType(type);
        this.setFormat(format);
    },

    setType: function (type) {
        this._type = type || ck.AssetType.NONE;
    },

    getType: function () {
        return this._type;
    },

    setFileName: function (fileName) {
        this._fileName = fileName;
    },

    getFileName: function () {
        return this._fileName;
    },

    setFormat: function (format) {
        this._format = format || cc.Texture2D.PIXEL_FORMAT_AUTO;
    },

    getFormat: function () {
        return this._format;
    }
});

/**
 * Create asset info with basic info
 * @param {string} fileName
 * @param {ck.AssetType} [type] If type is undefine, it will be detected by fileName
 * @param {number} [format]
 * @returns
 */
ck.AssetInfo.create = function (fileName, type, format) {
    return new ck.AssetInfo(fileName, type, format);
};

let AssetInfo = ck.AssetInfo;

/**
 * @constant
 * Asset to detect AssetType from file name extension
 */
ck.AssetInfo.TypeConfig = {
    "mp3": ck.AssetType.SFX,
    "wav": ck.AssetType.SFX,
    "ogg": ck.AssetType.SFX,
    "png": ck.AssetType.SPRITE,
    "plist": ck.AssetType.SPRITE_SHEET
};

/**
 * Get asset type from file name
 * @param {string} fileName
 * @returns Asset type of that file
 */
ck.AssetInfo.getTypeByFileName = function (fileName) {
    for (let key in ck.AssetInfo.TypeConfig) {
        if (ck.AssetInfo.TypeConfig.hasOwnProperty(key) && fileName.endsWith(key)) {
            return ck.AssetInfo.TypeConfig[key];
        }
    }
    return ck.AssetType.NONE;
};
