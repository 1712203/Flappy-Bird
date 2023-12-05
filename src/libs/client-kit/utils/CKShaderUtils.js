/**
 * @class
 * @static
 */
ck.ShaderUtils = {};

/**
 * @class
 * @static
 */
let ShaderUtils = ck.ShaderUtils;

/**
 * Get gl program state from a technique and sprite
 * @param {cc.Sprite} sprite
 * @param {string} techniqueName
 * @param {boolean} isAtlas
 * @returns {cc.GLProgramState}
 */
ShaderUtils.getProgramStateForSprite = function (sprite, techniqueName, isAtlas) {
    // get glProgramState by material
    const properties = cc.Properties.createNonRefCounted("materials/2d_effects.material#ck");
    if (!properties) {
        cc.warn("[ShaderUtils.getProgramStateForSprite] Missing material sample or material file name: 2d_effects.material");
        return null;
    }
    const material = cc.Material.createWithProperties(properties);
    const glProgramState = material.getTechniqueByName(techniqueName).getPassByIndex(0).getGLProgramState();

    let atlasSize = cc.p(1, 1);
    let spriteSize = cc.p(1, 1);
    let trimPoint = cc.p(0, 0);
    if (isAtlas) {
        atlasSize = cc.p(sprite.getSpriteFrame().getTexture().width, sprite.getTexture().height);
        spriteSize = cc.p(sprite.getSpriteFrame().getRect().width, sprite.getSpriteFrame().getRect().height);
        trimPoint = cc.p(sprite.getSpriteFrame().getRect().x, sprite.getSpriteFrame().getRect().y);
        const isRotated = sprite.getSpriteFrame().isRotated();
        if (isRotated) {
            trimPoint.x += spriteSize.x;
            spriteSize.x = -spriteSize.x;
        }
    }
    glProgramState.setUniformVec2("u_atlasSize", atlasSize);
    glProgramState.setUniformVec2("u_spriteSize", spriteSize);
    glProgramState.setUniformVec2("u_trimPoint", trimPoint);

    return glProgramState;
};

/**
 * @param {ccui.Widget|cc.Sprite} widgetOrSprite - Widget or sprite want to get sprite
 * @return {cc.Sprite}
 */
ShaderUtils.getSpriteFromWidget = function (widgetOrSprite) {
    let sprite = widgetOrSprite;
    if (!(widgetOrSprite instanceof cc.Sprite)) {
        if (!cc.isFunction(widgetOrSprite.getVirtualRenderer)) {
            cc.warn("[ShaderUtils.getSpriteFromWidget] This type of widget has NO getVirtualRenderer function, widget name: " + widgetOrSprite.name);
            return null;
        }
        let virtualRenderer = widgetOrSprite.getVirtualRenderer();
        if (!cc.isFunction(virtualRenderer.getSprite)) {
            cc.warn("[ShaderUtils.getSpriteFromWidget] VirtualRenderer of widget has NO getSprite function, widget name: " + widgetOrSprite.name);
            return null;
        }
        sprite = widgetOrSprite.getVirtualRenderer().getSprite();
        if (!sprite) {
            cc.warn("[ShaderUtils.getSpriteFromWidget] Texture renderer of this widget is null, widget name: " + widgetOrSprite.name);
            return null;
        }
    }
    return sprite;
};

ShaderUtils.clearGLProgramState = function (widgetOrSprite, texType = ccui.Widget.PLIST_TEXTURE) {
    ShaderUtils.applyProgramStateByName(widgetOrSprite, "normal", texType);
};

/**
 * @param {ccui.Widget|cc.Sprite} widgetOrSprite - Widget want to apply shader program state
 * @param {string} name - shader name
 * @param {number} [texType=ccui.Widget.PLIST_TEXTURE]
 */
ShaderUtils.applyProgramStateByName = function (widgetOrSprite, name, texType = ccui.Widget.PLIST_TEXTURE) {
    if (!widgetOrSprite || !cc.sys.isObjectValid(widgetOrSprite)) return;

    const sprite = ShaderUtils.getSpriteFromWidget(widgetOrSprite);
    if (!sprite) return;

    const glProgramState = ShaderUtils.getProgramStateForSprite(sprite, name, texType === ccui.Widget.PLIST_TEXTURE);
    if (!glProgramState) return;
    sprite.setGLProgramState(glProgramState);
    return glProgramState;
}

/**
 * @param {ccui.Widget|cc.Sprite} widgetOrSprite - Widget want to light sweep
 * @param {number} [texType=ccui.Widget.PLIST_TEXTURE]
 */
ShaderUtils.lightSweep = function (widgetOrSprite, texType = ccui.Widget.PLIST_TEXTURE) {
    ShaderUtils.applyProgramStateByName(widgetOrSprite, "light_sweep", texType);
};

/**
 * Clipping ellipse a render texture of widget or sprite
 * @param {ccui.Widget|cc.Sprite} widgetOrSprite - Widget want to blur
 * @param {number} [texType=ccui.Widget.PLIST_TEXTURE]
 */
ShaderUtils.clippingEllipse = function (widgetOrSprite, texType = ccui.Widget.PLIST_TEXTURE) {
    ShaderUtils.applyProgramStateByName(widgetOrSprite, "clipping_ellipse", texType);
};

/**
 * Blur a render texture of widget
 * @param {ccui.Widget|cc.Sprite} widgetOrSprite - Widget want to blur
 * @param {number} [blurRadius=8] - Blur radius (bigger -> blurrier), default value: 2
 * @param {number} [texType=ccui.Widget.PLIST_TEXTURE]
 */
ShaderUtils.blur = function (widgetOrSprite, blurRadius = 2, texType = ccui.Widget.PLIST_TEXTURE) {
    const glProgramState = ShaderUtils.applyProgramStateByName(widgetOrSprite, "blur", texType);
    glProgramState.setUniformFloat("blurRadius", blurRadius);
};

/**
 * Blur a render texture of widget and all its child
 * @param {ccui.Widget|cc.Sprite} widget - Widget want to blur
 * @param {number} [blurRadius=8] - Blur radius (bigger -> blurrier), default value: 8
 * @param {number} [texType=ccui.Widget.PLIST_TEXTURE]
 */
ShaderUtils.blurAllChild = function (widget, blurRadius = 8, texType = ccui.Widget.PLIST_TEXTURE) {
    if (cc.isFunction(widget.getVirtualRenderer)) {
        ShaderUtils.blur(widget, blurRadius, texType);
    }

    const allChild = widget.getChildren();
    for (let i = 0; i < allChild.length; i++) {
        ShaderUtils.blurAllChild(allChild[i], blurRadius, texType);
    }
};

/**
 * grayScale a render texture of widget
 * @param {ccui.Widget|cc.Sprite} widgetOrSprite - Widget want to grayScale
 * @param {number} [texType=ccui.Widget.LOCAL_TEXTURE]
 */
ShaderUtils.grayScale = function (widgetOrSprite, texType = ccui.Widget.LOCAL_TEXTURE) {
    ShaderUtils.applyProgramStateByName(widgetOrSprite, "gray_scale", texType);
};

/**
 * clipping a widget with a mask
 * @param {ccui.Widget|cc.Sprite} widgetOrSprite - Widget want to clipping
 * @param {string} mask - file name mask image
 * @param {number} [texType=ccui.Widget.LOCAL_TEXTURE]
 */
ShaderUtils.clipping = function (widgetOrSprite, mask = "sprites/masks/Round_00.png", texType = ccui.Widget.PLIST_TEXTURE) {
    const glProgramState = ShaderUtils.applyProgramStateByName(widgetOrSprite, "clipping", texType);
    let sprite = new cc.Sprite();
    sprite.setTexture(mask);
    glProgramState.setUniformTexture("u_mask", sprite.getTexture());
};