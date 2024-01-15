const GameUtils = {};

/**
 * Animation spent some items
 * @param {number} id Item ID
 * @param {number} amount Item Amount
 * @param {cc.Point} position Position
 * @param {cc.Node} parent Parent
 * @param {null} callback Callback
 * @param {number} [delay=0] Delay time
 * @returns {ck.TextWithIcon}
 */
GameUtils.spentItem = function (id, amount, position, parent, callback = null, delay = 0) {
    parent = parent || gm.loading.getCurrentScene();
    if (!cc.sys.isObjectValid(parent)) return null;
    if (!position) return null;
    const icon = gm.item.config.getItemIcon(id);
    if (!icon) return null;
    const font = gm.getDefaultFont();
    const text = UIUtils.createTextSpentItem(font, amount, icon, ccui.Widget.PLIST_TEXTURE);
    text.setPosition(position);
    text.setFontSize(30);
    text.fitIconHeight();
    parent.addChild(text);
    const duration = 0.5;
    AnimationUtils.spentItem(text, duration, callback, delay);
    return text;
};

/**
 * Animation spent some coins
 * @param {number} amount Item Amount
 * @param {cc.Point} position Position
 * @param {cc.Node} parent Parent
 * @param {Function} callback Callback
 * @param {number} delay Delay time
 * @returns {ck.TextWithIcon}
 */
GameUtils.spentCoin = function (amount, position, parent, callback, delay) {
    return GameUtils.spentItem(ItemID.COIN, amount, position, parent, callback, delay);
};

/**
 * Animation earn some items
 * @param {number} id Item ID
 * @param {number} amount Item Amount
 * @param {cc.Point} position Position
 * @param {cc.Node} parent Parent
 * @param {Function} callback Callback
 * @param {number} delay Delay time
 * @param {number} maxFormatAmount Maximum number to format
 * @returns {ck.TextWithIcon}
 */
GameUtils.earnItem = function (id, amount, position, parent, callback, delay, maxFormatAmount) {
    delay = delay || 0;
    callback = callback || null;
    parent = parent || gm.loading.getCurrentScene();
    if (!cc.sys.isObjectValid(parent)) return null;
    if (!position) return null;
    const icon = gm.item.config.getItemIcon(id);
    if (!icon) return null;
    const font = gm.getDefaultFont();
    const text = UIUtils.createTextEarnItem(font, amount, icon, ccui.Widget.PLIST_TEXTURE, maxFormatAmount);
    text.setPosition(position);
    text.setFontSize(30);
    text.fitIconHeight();
    parent.addChild(text);
    const duration = 1.0;
    AnimationUtils.earnItem(text, duration, callback, delay);
    return text;
};

/**
 * Animation earn some coin
 * @param {number} amount Item Amount
 * @param {cc.Point} position Position
 * @param {cc.Node} parent Parent
 * @param {Function} callback Callback
 * @param {number} delay Delay time
 * @returns {ck.TextWithIcon}
 */
GameUtils.earnCoin = function (amount, position, parent, callback, delay) {
    return GameUtils.earnItem(ItemID.COIN, amount, position, parent, callback, delay);
};


/**
 * @param {Array} chimneyBodies
 * @param {Object} birdBody
 * @return {boolean}
 */
GameUtils.checkCollisionBirdAndChimney = function (chimneyBodies, birdBody) {
   // cc.log("chimneyyyy: ", JSON.stringify(chimneyBodies), "\n\n");
    var isCollision = false;
    var dr, dx, dy;
    for (var i = 0; i < chimneyBodies.length; i++) {
        dr = birdBody.radius + chimneyBodies[i].radius;
        dx = birdBody.pos.x - chimneyBodies[i].pos.x;
        dy = birdBody.pos.y - chimneyBodies[i].pos.y;
        if ((dr * dr) > (dx * dx + dy * dy)) {
            isCollision = true;
            break;
        }
    }

    return isCollision;
};
