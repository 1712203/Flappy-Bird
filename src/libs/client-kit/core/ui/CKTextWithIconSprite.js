/**
 * @class
 * @extends ck.TextWithIcon
 */
ck.TextWithIconSprite = ck.TextWithIcon.extend({
    /**
     * @type {cc.Sprite}
     */
    _icon: null,

    /**
     * @param {string} text
     * @param {string} font
     * @param {string} icon
     * @param {number} texType
     */
    ctor: function (text, font, icon, texType) {
        ck.TextWithIcon.prototype.ctor.call(this, text, font, icon, texType);
    },

    _addIcon: function (icon) {
        this._icon = new cc.Sprite();
        const spriteFrame = cc.spriteFrameCache.getSpriteFrame(icon);
        if (spriteFrame) {
            this._icon.setSpriteFrame(spriteFrame);
        }  else {
            cc.warn("[ck.TextWithIconSprite] <_addIcon> Sprite frame not found %s", icon);
        }

        this.addChild(this._icon, 1);
    },

    /**
     * @override
     * @param {string} file
     * @param {number} texType
     */
    setIcon: function (file, texType) {
        if (texType === ccui.Widget.PLIST_TEXTURE) {
            const spriteFrame = cc.spriteFrameCache.getSpriteFrame(file);
            if(spriteFrame) this._icon.setSpriteFrame(spriteFrame);
        } else {
            this._icon.setTexture(file);
        }
        this._alignCenterText();
    },
});

/**
 * @returns {ck.TextWithIconSprite}
 */
ck.TextWithIconSprite.create = function (text, font, icon, texType) {
    return new ck.TextWithIconSprite(text, font, icon, texType);
};
