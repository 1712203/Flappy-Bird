/**
 * @namespace
 */
ck.loader = {};

// region Load assets

/**
 * Preload an asset
 *
 * @param {string} fileName Asset file name (Ex. "Girl.png", "Shoot.mp3")
 * @param {number} format Pixel format (for sprite/sprite sheet)
 * @param {ck.AssetType} type Asset type (Sprite, Sprite sheet, Background music, Audio effect, etc.)
 * @returns
 */
ck.loader.load = function (fileName, type, format) {
    if (!type) type = ck.AssetInfo.getTypeByFileName(fileName);
    switch (type) {
        case ck.AssetType.SPRITE:
            ck.loader.loadSprite(fileName, format);
            return;
        case ck.AssetType.SPRITE_SHEET:
            ck.loader.loadSpriteSheet(fileName, format);
            return;
        case ck.AssetType.SFX:
            ck.loader.loadSFX(fileName);
            return;
        case ck.AssetType.VOICE:
            ck.loader.loadVoice(fileName);
            return;
        default:
            cc.warn("<ck.loader.load> Not support preload asset type %d", type);
            return;
    }
};

/**
 * Preload an asset
 *
 * @param {ck.AssetInfo} asset Asset that need to load
 */
ck.loader.loadAsset = function (asset) {
    if (!asset) return;
    ck.loader.load(asset.getFileName(), asset.getType(), asset.getFormat());
    //cc.log("[ck.loader.loadAsset] - " + asset.getFileName());
};

/**
 * @param {ck.AssetInfo[]} assets
 */
ck.loader.loadAssets = function (assets) {
    if (!assets) return;
    assets.forEach(asset => ck.loader.loadAsset(asset));
};

/**
 * Preload a texture from image file
 *
 * @param {string} fileName
 * @param {number} format
 */
ck.loader.loadSprite = function (fileName, format) {
    format = format === undefined ? cc.Texture2D.PIXEL_FORMAT_AUTO : format;
    cc.Texture2D.setDefaultAlphaPixelFormat(format);
    cc.textureCache.addImage(fileName);
    cc.Texture2D.setDefaultAlphaPixelFormat(cc.Texture2D.PIXEL_FORMAT_AUTO);
};

/**
 * Preload a texture from png file & add sprite frames to `cc.spriteFrameCache`
 *
 * @param {string} fileName
 * @param {number} format
 */
ck.loader.loadSpriteSheet = function (fileName, format) {
    const fileNameWithoutExtension = cc.path.mainFileName(fileName);
    const png = fileNameWithoutExtension.concat(".png");
    const plist = fileNameWithoutExtension.concat(".plist");
    ck.loader.loadSprite(png, format);
    cc.spriteFrameCache.addSpriteFrames(plist);
    //cc.log("[loadSpriteSheet] - ", png, " - ", format);
};

/**
 * Preload audio effect SFX
 *
 * @param {string} fileName
 */
ck.loader.loadSFX = function (fileName) {
    cc.audioEngine.preloadEffect(fileName);
};

/**
 * Preload audio effect Voice
 *
 * @param {string} fileName
 */
ck.loader.loadVoice = function (fileName) {
    let languageCode = gm.localize.getCurrentLanguageCode().toLowerCase();
    fileName = fileName.replace("/voice/", "/voice/" + languageCode + "/");
    cc.audioEngine.preloadEffect(fileName);
};

/**
 * Load json from a file
 *
 * @param {string} fileName
 * @returns {Object} Json object
 */
ck.loader.loadJson = function (fileName) {
    if (!jsb.fileUtils.isFileExist(fileName)) {
        cc.error("<ck.loader.loadJson> File not found !!!!!", fileName);
        return null;
    }
    const data = jsb.fileUtils.getStringFromFile(fileName);
    return JSON.parse(data);
};

// endregion

// region Unload assets

/**
 * Unload an asset
 *
 * @param {string} fileName Asset file name (Ex. "Girl.png", "Shoot.mp3")
 * @param {ck.AssetType} type Asset type (Sprite, Sprite sheet, Background music, Audio effect, etc.)
 * @returns
 */
ck.loader.unload = function (fileName, type) {
    if (!type) type = ck.AssetInfo.getTypeByFileName(fileName);
    switch (type) {
        case ck.AssetType.SPRITE:
            ck.loader.unloadSprite(fileName);
            return;
        case ck.AssetType.SPRITE_SHEET:
            ck.loader.unloadSpriteSheet(fileName);
            return;
        case ck.AssetType.SFX:
            ck.loader.unloadSFX(fileName);
            return;
        default:
            cc.warn("<ck.loader.load> Not support unload asset type %d", type);
            return;
    }
};

/**
 * Unload an asset
 *
 * @param {ck.AssetInfo} asset Asset that need to load
 */
ck.loader.unloadAsset = function (asset) {
    if (!asset) return;
    ck.loader.unload(asset.getFileName(), asset.getType());
    cc.log("[ck.loader.unloadAsset] - " + asset.getFileName());
};

/**
 * @param {ck.AssetInfo[]} assets
 */
ck.loader.unloadAssets = function (assets) {
    if (!assets) return;
    assets.forEach(asset => ck.loader.unloadAsset(asset));
};

/**
 * Remove a texture from `cc.textureCache`
 * @param {string} fileName
 */
ck.loader.unloadSprite = function (fileName) {
    cc.textureCache.removeTextureForKey(fileName);
};

/**
 * Remove texture from `cc.textureCache` & sprite frames from `cc.spriteFrameCache`
 *
 * @param {string} fileName
 */
ck.loader.unloadSpriteSheet = function (fileName) {
    const fileNameWithoutExtension = cc.path.mainFileName(fileName);
    const png = fileNameWithoutExtension.concat(".png");
    const plist = fileNameWithoutExtension.concat(".plist");
    ck.loader.unloadSprite(png);
    cc.spriteFrameCache.removeSpriteFramesFromFile(plist);
};

/**
 * Unload an audio file from cache
 *
 * @param {string} fileName
 */
ck.loader.unloadSFX = function (fileName) {
    cc.audioEngine.unloadEffect(fileName);
};

// endregion
