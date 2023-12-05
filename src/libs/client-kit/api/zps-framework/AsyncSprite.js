/**
 * Used to load image from remote
 *
 * @class
 * @extends cc.Sprite
 *
 */
fr.AsyncSprite = cc.Sprite.extend({

    /**
     * @constructor
     * @param {cc.Size} size - Sprite size
     * @param {function(isSuccess: boolean): void} callback - Callback when load image from an url isSuccess or not
     */
    ctor: function (size, callback) {

    },

    /**
     * Load image from remote
     * @param {string} url - Image url
     * @param {string} storePath - Path used to cache the image data
     */
    updatePath: function (url, storePath) {

    },


});