/**
 * Contains different types of animations for nodes 
 * @class
 * @static
 */
ck.AnimationUtils = {};

/**
 * @class
 * @static
 */
let AnimationUtils = ck.AnimationUtils;

/**
 * animation tags
 * @constant
 */
AnimationUtils.Tag = {
    UPDATE_TEXT_AMOUNT: 256,
    COUNTDOWN: 257,
    BUTTON_PRESS: 258,
    BUTTON_RELEASE: 259,
};

/**
 * Scale a node up and down (like highlight then back to normal)
 * @param {cc.Node} node - Node plays animation
 * @param {number} duration - Animation duration
 * @param {Function|null} callback - Callback function (called after finish playing animation)
 * @param {number} delay - Delay before playing animation
 * @returns {cc.Action|null}
 */
AnimationUtils.scaleUpDown = function (node, duration = 0.25, callback = null, delay = 0) {
    if (!ck.isValid(node)) {
        callback && callback();
        return null;
    }
    let action = cc.sequence(
        cc.delayTime(delay),
        cc.scaleTo(duration * 0.5, 1.25),
        cc.scaleTo(duration * 0.5, 1.0).easing(cc.easeBackOut())
    );
    action = callback ? cc.sequence(action, cc.callFunc(callback)) : action;
    node.runAction(action);
    return action;
};

/**
 * Rotate a node forever
 * @param {cc.Node} node - Node plays animation
 * @param {number} [duration=5] - Animation duration
 * @returns {cc.Action|null}
 */
AnimationUtils.rotateForever = function (node, duration = 5) {
    if (!ck.isValid(node)) return null;
    const action = cc.rotateBy(duration, 360).repeatForever();
    node.runAction(action);
    return action;
};

/**
 * Animation used for a button when it was pressed
 * @param {cc.Node} node - Node plays animation
 * @param {number} duration - Animation duration
 * @param {Function|null} callback - Callback function (called after finish playing animation)
 * @param {number} scaleSmall
 * @param {number} scaleBig
 * @returns {cc.Action|null}
 */
AnimationUtils.pressed = function (node, duration = 0.2, callback = null, scaleSmall = 0.9, scaleBig = 1) {
    if (!ck.isValid(node)) {
        callback && callback();
        return null;
    }
    if (!node.__originalScale){
        node.__originalScale = cc.p(node.getScaleX(), node.getScaleY());
    }
    var scaleX = node.__originalScale.x;
    var scaleY = node.__originalScale.y;
    const sequence = cc.sequence(
        cc.scaleTo(duration * 0.5, scaleX * scaleSmall, scaleY * scaleSmall),
        cc.scaleTo(duration * 0.5, scaleX * scaleBig, scaleY * scaleBig)
    );
    const action = callback ? cc.sequence(sequence, cc.callFunc(callback)) : sequence;
    node.stopActionByTag(AnimationUtils.Tag.BUTTON_PRESS);
    action.setTag(AnimationUtils.Tag.BUTTON_PRESS);
    node.runAction(action);
    return action;
};

/**
 * Add press listener to a widget to play pressed anim when it was pressed
 * @param {ccui.Widget} node Node that has `addTouchEventListener` method
 * @param {number} duration - Animation duration
 * @param {Function|null} callback - Callback function (called after finish playing animation)
 * @param {number} scaleSmall
 * @param {number} scaleBig
 */
AnimationUtils.addPressAnimation = function (node, duration = 0.2, callback = null, scaleSmall = 0.9, scaleBig = 1) {
    if (!ck.isValid(node)) return;
    if (!node.addTouchEventListener) {
        cc.error("<AnimationUtils.addPressAnimation> node.addTouchEventListener is not found");
        return;
    }
    node.addTouchEventListener(function (/** @type {cc.Node} */ sender, /** @type {number} */ type) {
        if (type === ccui.Widget.TOUCH_BEGAN) {
            AnimationUtils.pressed(sender, duration, callback, scaleSmall, scaleBig);
            gm.system.playSFXButtonPressed();
        }
    }, node);
};

/**
 * Fly from left to middle of screen (usually used for text - Ex. "Let's go", "Start Round", "Game over", etc)
 * @param {cc.Node} node - Node plays animation
 * @param {number} duration - Animation duration
 * @param {Function|null} callback - Callback function (called after finish playing animation)
 * @param {number} delay Delay before playing animation
 * @returns {cc.Action|null}
 */
AnimationUtils.flyIn = function (node, duration = 0.35, callback = null, delay = 0) {
    if (!ck.isValid(node)) {
        callback && callback();
        return null;
    }
    const width = node.width;
    // @ts-ignore
    const toX = cc.winSize.width * 0.5 + width * 0.5;
    const deltaX = width * 0.3;
    const y = node.y;
    node.setAnchorPoint(cc.p(1.0, 0.5));
    node.setPositionX(0);
    node.setScale(1.6, 0.4);
    const move = cc.sequence(
        cc.moveTo(0.8 * duration, toX + deltaX, y),
        cc.moveTo(0.4 * duration, toX, y)
    );
    const scale = cc.sequence(
        cc.scaleTo(0.8 * duration, 0.9, 1.1),
        cc.scaleTo(0.4 * duration, 1, 1)
    );
    const spawn = cc.spawn(move, scale);
    const sequence = cc.sequence(cc.delayTime(delay), spawn);
    const action = callback ? cc.sequence(sequence, cc.callFunc(callback)) : sequence;
    node.runAction(action);
    return action;
};

/**
 * Fly from middle to the right of screen (usually used for text - Ex. "Let's go", "Start Round", "Game over", etc)
 * Reverse of `AnimationUtils.flyIn`
 * @param {cc.Node} node - Node plays animation
 * @param {number} duration - Animation duration
 * @param {Function|null} callback - Callback function (called after finish playing animation)
 * @param {number} delay Delay before playing animation
 * @returns {cc.Action|null}
 */
AnimationUtils.flyOut = function (node, duration = 0.25, callback = null, delay = 0) {
    if (!ck.isValid(node)) {
        callback && callback();
        return null;
    }
    const width = node.width;
    // @ts-ignore
    const fromX = cc.winSize.width * 0.5 - width * 0.5;
    // @ts-ignore
    const toX = cc.winSize.width;
    const deltaX = width * 0.3;
    const y = node.y;
    node.setAnchorPoint(cc.p(0.0, 0.5));
    node.setPositionX(fromX);
    const move = cc.sequence(
        cc.moveTo(0.2 * duration, fromX - deltaX, y),
        cc.moveTo(0.8 * duration, toX, y)
    );
    const scale = cc.sequence(
        cc.scaleTo(0.2 * duration, 0.9, 1.1),
        cc.scaleTo(0.8 * duration, 1.6, 0.4)
    );
    const spawn = cc.spawn(move, scale);
    const sequence = cc.sequence(cc.delayTime(delay), spawn);
    const action = callback ? cc.sequence(sequence, cc.callFunc(callback)) : sequence;
    node.runAction(action);
    return action;
};

/**
 * Fade in
 * @param {cc.Node} node - Node plays animation
 * @param {number} duration - Animation duration
 * @param {Function|null} callback - Callback function (called after finish playing animation)
 * @param {number} delay Delay before playing animation
 * @returns {cc.Action|null}
 */
AnimationUtils.fadeIn = function (node, duration = 0.25, callback = null, delay = 0) {
    if (!ck.isValid(node)) {
        callback && callback();
        return null;
    }
    node.setOpacity(0);
    const sequence = cc.sequence(cc.delayTime(delay), cc.fadeIn(duration));
    const action = callback ? cc.sequence(sequence, cc.callFunc(callback)) : sequence;
    node.runAction(action);
    return action;
};

AnimationUtils.visibleAndFadeIn = function (node, duration = 0.25, callback = null, delay = 0) {
    if (!ck.isValid(node)) {
        callback && callback();
        return null;
    }
    node.setVisible(true);
    node.setOpacity(0);
    const sequence = cc.sequence(cc.delayTime(delay), cc.fadeIn(duration));
    const action = callback ? cc.sequence(sequence, cc.callFunc(callback)) : sequence;
    node.runAction(action);
    return action;
};

/**
 * Fade out
 * @param {cc.Node} node - Node plays animation
 * @param {number} duration - Animation duration
 * @param {Function|null} callback - Callback function (called after finish playing animation)
 * @param {number} delay Delay before playing animation
 * @returns {cc.Action|null}
 */
AnimationUtils.fadeOut = function (node, duration = 0.25, callback = null, delay = 0) {
    if (!ck.isValid(node)) {
        callback && callback();
        return null;
    }
    const sequence = cc.sequence(cc.delayTime(delay), cc.fadeOut(duration));
    const action = callback ? cc.sequence(sequence, cc.callFunc(callback)) : sequence;
    node.runAction(action);
    return action;
};

/**
 * Fade out then hide the node (set its visible = false AFTER calling callback)
 * @param {cc.Node} node - Node plays animation
 * @param {number} duration - Animation duration
 * @param {Function|null} callback - Callback function (called after finish playing animation)
 * @param {number} delay Delay before playing animation
 * @returns {cc.Action|null}
 */
AnimationUtils.fadeOutThenHide = function (node, duration = 0.25, callback = null, delay = 0) {
    const cb = function () {
        callback && callback();
        if (ck.isValid(node)) node.setVisible(false);
    };
    return AnimationUtils.fadeOut(node, duration, cb, delay);
};

/**
 * Fade out then hide the node (set its visible = false BEFORE calling callback)
 * @param {cc.Node} node - Node plays animation
 * @param {number} duration - Animation duration
 * @param {Function|null} callback - Callback function (called after finish playing animation)
 * @param {number} delay Delay before playing animation
 * @returns {cc.Action|null}
 */
AnimationUtils.fadeOutThenHide2 = function (node, duration = 0.25, callback = null, delay = 0) {
    const cb = function () {
        if (ck.isValid(node)) node.setVisible(false);
        callback && callback();
    };
    return AnimationUtils.fadeOut(node, duration, cb, delay);
};

/**
 * Fade out then then remove the node from parent
 * @param {cc.Node} node - Node plays animation
 * @param {number} duration - Animation duration
 * @param {Function|null} callback - Callback function (called after finish playing animation)
 * @param {number} delay Delay before playing animation
 * @returns {cc.Action|null}
 */
AnimationUtils.fadeOutThenRemove = function (node, duration = 0.25, callback = null, delay = 0) {
    const cb = function () {
        callback && callback();
        if (ck.isValid(node)) node.removeFromParent(true);
    };
    return AnimationUtils.fadeOut(node, duration, cb, delay);
};

/**
 * Scale and fade in from 0 (like pop from a point to a popup)
 * @param {cc.Node} node - Node plays animation
 * @param {number} duration - Animation duration
 * @param {Function|null} callback - Callback function (called after finish playing animation)
 * @param {number} delay Delay before playing animation
 * @returns {cc.Action|null}
 */
AnimationUtils.popIn = function (node, duration = 0.25, callback = null, delay = 0) {
    if (!ck.isValid(node)) {
        callback && callback();
        return null;
    }
    node.setVisible(true);
    node.setScale(0);
    node.setOpacity(0);
    const wait = cc.delayTime(delay);
    const scale = cc.scaleTo(duration, 1, 1).easing(cc.easeBackOut());
    const fade = cc.fadeIn(duration);
    const spawn = cc.spawn(scale, fade);
    const sequence = cc.sequence(wait, spawn);
    const action = callback ? cc.sequence(sequence, cc.callFunc(callback)) : sequence;
    node.runAction(action);
    return action;
};

/**
 * Scale and fade out (scale from 1.0 to larger)
 * @param {cc.Node} node - Node plays animation
 * @param {number} duration - Animation duration
 * @param {Function|null} callback - Callback function (called after finish playing animation)
 * @param {number} delay Delay before playing animation
 * @returns {cc.Action|null}
 */
AnimationUtils.popOut = function (node, duration = 0.25, callback = null, delay = 0) {
    if (!ck.isValid(node)) {
        callback && callback();
        return null;
    }
    const wait = cc.delayTime(delay);
    const scale = cc.scaleTo(duration, 1.15, 1.15).easing(cc.easeBackIn());
    const fade = cc.fadeOut(duration);
    const spawn = cc.spawn(scale, fade);
    const sequence = cc.sequence(wait, spawn);
    const action = callback ? cc.sequence(sequence, cc.callFunc(callback)) : sequence;
    node.runAction(action);
    return action;
};

/**
 * Popup out then remove the node from parent
 * @param {cc.Node} node - Node plays animation
 * @param {number} duration - Animation duration
 * @param {Function|null} callback - Callback function (called after finish playing animation)
 * @param {number} delay Delay before playing animation
 * @returns {cc.Action|null}
 */
AnimationUtils.popOutThenRemove = function (node,  duration = 0.25, callback = null, delay = 0) {
    const cb = function () {
        callback && callback();
        if (ck.isValid(node)) node.removeFromParent(true);
    };
    return AnimationUtils.popOut(node, duration, cb, delay);
};

/**
 * Popup out then hide the node (set its visible = false)
 * @param {cc.Node} node - Node plays animation
 * @param {number} duration - Animation duration
 * @param {Function|null} callback - Callback function (called after finish playing animation)
 * @param {number} delay Delay before playing animation
 * @returns {cc.Action|null}
 */
AnimationUtils.popOutThenHide = function (node,  duration = 0.25, callback = null, delay = 0) {
    const cb = function () {
        callback && callback();
        if (ck.isValid(node)) node.setVisible(false);
    };
    return AnimationUtils.popOut(node, duration, cb, delay);
};

/**
 * Node will start anim with large scale (Ex. 6.0x) and 0 opacity
 * Then scale down to 1.0 and fadein
 * @param {cc.Node} node - Node plays animation
 * @param {number} duration - Animation duration
 * @param {Function|null} callback - Callback function (called after finish playing animation)
 * @param {number} delay Delay before playing animation
 * @param {number} firstScale scale before zoom
 * @param {boolean} useEasing
 * @returns {cc.Action|null}
 */
AnimationUtils.zoomAndFadeIn = function (node, duration = 0.25, callback = null, delay = 0, firstScale = 6, useEasing = true) {
    if (!ck.isValid(node)) {
        callback && callback();
        return null;
    }
    node.setScale(firstScale);
    node.setOpacity(0);
    const delayTime = cc.delayTime(delay);
    const fade = cc.fadeIn(duration);
    let scale = cc.scaleTo(duration, 1, 1);
    if (useEasing) {
        scale = scale.easing(cc.easeQuinticActionOut());
    }
    const spawn = cc.spawn(fade, scale);
    let seq = cc.sequence(delayTime, spawn);
    seq = callback ? cc.sequence(seq, cc.callFunc(callback)) : seq;
    node.runAction(seq);
    return seq;
};

/**
 * Node will scale to large scale (Ex. 6.0x) and fade out
 * @param {cc.Node} node - Node plays animation
 * @param {number} duration - Animation duration
 * @param {Function|null} callback - Callback function (called after finish playing animation)
 * @param {number} delay Delay before playing animation
 * @returns {cc.Action|null}
 */
AnimationUtils.zoomAndFadeOut = function (node, duration = 0.25, callback = null, delay = 0) {
    if (!ck.isValid(node)) {
        callback && callback();
        return null;
    }
    const delayTime = cc.delayTime(delay);
    const fade = cc.fadeOut(duration);
    const scale = cc.scaleTo(duration, 6, 6).easing(cc.easeQuinticActionIn());
    const spawn = cc.spawn(fade, scale);
    let seq = cc.sequence(delayTime, spawn);
    seq = callback ? cc.sequence(seq, cc.callFunc(callback)) : seq;
    node.runAction(seq);
    return seq;
};

/**
 * Node will fly down and fade out
 * Usually used for a text with icon when spent coins, gems or items.
 * Ex. When player buy something in shop and spent 100 gems, this anim will be used for the text with icon "-100Gem"
 * @param {cc.Node} node - Node plays animation
 * @param {number} duration - Animation duration
 * @param {Function|null} callback - Callback function (called after finish playing animation)
 * @param {number} delay Delay before playing animation
 * @returns {cc.Action|null}
 */
AnimationUtils.spentItem = function (node, duration = 0.5, callback = null, delay = 0) {
    if (!ck.isValid(node)) {
        callback && callback();
        return null;
    }
    node.setOpacity(0);
    const wait = cc.delayTime(delay);
    const move = cc.moveBy(duration, 0, -50).easing(cc.easeIn(1));
    const fade = cc.sequence(cc.fadeIn(duration * 0.1), cc.delayTime(duration * 0.6), cc.fadeOut(duration * 0.3));
    const spawn = cc.spawn(move, fade);
    const seq = cc.sequence(wait, spawn, cc.removeSelf());
    const action = callback ? cc.sequence(seq, cc.callFunc(callback)) : seq;
    node.runAction(action);
    return action;
};

/**
 * Node will fly up and fade in, then fly down and fade down
 * Usually used for a text with icon when collect coins, gems or items.
 * Ex. when player kill a minion and get 100 coin, this anim will be used for the text with icon "+100Coin" appear at minion position
 * @param {cc.Node} node - Node plays animation
 * @param {number} duration - Animation duration
 * @param {Function|null} callback - Callback function (called after finish playing animation)
 * @param {number} delay Delay before playing animation
 * @returns {cc.Action|null}
 */
AnimationUtils.earnItem = function (node, duration = 1.0, callback = null, delay = 0) {
    if (!ck.isValid(node)) {
        callback && callback();
        return null;
    }
    node.setOpacity(0);
    const wait = cc.delayTime(delay);
    const moveUp = cc.moveBy(duration * 0.5, 0, 50).easing(cc.easeOut(3));
    const moveDown = cc.moveBy(duration * 0.5, 0, -50).easing(cc.easeIn(3));
    const move = cc.sequence(moveUp, moveDown);
    const fade = cc.sequence(cc.fadeIn(duration * 0.05), cc.delayTime(duration * 0.9), cc.fadeOut(duration * 0.05));
    const spawn = cc.spawn(move, fade);
    const seq = cc.sequence(wait, spawn, cc.removeSelf());
    const action = callback ? cc.sequence(seq, cc.callFunc(callback)) : seq;
    node.runAction(action);
    return action;
};

/**
 * Create frame by frame action (used for cc.Sprite)
 * @param {string} name Name of the animation (used for caching)
 * @param {string[]} frames
 * @param {number} delay Delay time between 2 frames
 * @param {number} repeat Repeat times, -1 means repeat forever
 * @return {cc.Action|cc.Animate|cc.RepeatForever}
 */
AnimationUtils.createFrameByFrame = function (name = "", frames = [], delay = 1/30, repeat = 1) {
    let animation;
    if (name) {
        animation = cc.animationCache.getAnimation(name);
    }
    if (!animation) {
        const spriteFrames = [];
        frames.forEach(function (frame) {
            const spriteFrame = cc.spriteFrameCache.getSpriteFrame(frame);
            if (spriteFrame){
                spriteFrames.push(spriteFrame);
            } else {
                // @ts-ignore
                cc.error("<AnimationUtils.frameByFrameAction> Sprite frame not found %s", frame);
            }
        });
        if (repeat >= 0) {
            animation = new cc.Animation(spriteFrames, delay, repeat);
        } else {
            animation = new cc.Animation(spriteFrames, delay, 1);
        }
        cc.animationCache.addAnimation(animation, name);
    }
    const animate = new cc.Animate(animation);
    return repeat >= 0 ? animate : animate.repeatForever();
};

/**
 * Animation used to update text from a value to another value
 * Usually for coin/gem text when add/subtract an amount
 * @param {ccui.Text} text 
 * @param {number} from from value
 * @param {number} to to value
 * @param {number} duration - Animation duration
 * @param {Function|null} [callback=null]
 * @param {function(number): string|null} [formatFunc=StringUtils.formatNumber] - Used to convert number to string, if its empty StringUtils.formatNumber will be used
 * @return {cc.Action}
 */
AnimationUtils.updateTextAmount = function (text, from = 0, to = 0, duration = 0.5, callback = null, formatFunc = null) {
    if (!ck.isValid(text) || !(typeof text.setString == "function")) {
        callback && callback();
        return null;
    }
    const interval = 1 / 60;
    let delta = Math.round((to - from) / (duration / interval));
    if (delta === 0) delta = from <= to ? 1 : -1;
    let currentAmount = from;
    const update = cc.callFunc(function () {
        currentAmount += delta;
        const value = from <= to ? Math.min(currentAmount, to) : Math.max(currentAmount, to);
        let str = formatFunc ? formatFunc(value) : "";
        if (!str) str = StringUtils.formatNumber(value);
        if (ck.isValid(text)) text.setString(str);
        const done = (from <= to && currentAmount >= to) || (from > to && currentAmount <= to);
        if (done) {
            if (ck.isValid(text)) text.stopActionByTag(AnimationUtils.Tag.UPDATE_TEXT_AMOUNT);
            callback && callback();
        }
    });
    const delay = cc.delayTime(interval);
    const action = cc.sequence(update, delay).repeatForever();
    action.setTag(AnimationUtils.Tag.UPDATE_TEXT_AMOUNT);
    text.runAction(action);
    return action;
};

/**
 * Text will countdown from a value to another value
 * Usually used for text in an timer
 * @param {ccui.Text} text 
 * @param {number} from 
 * @param {number} to 
 * @param {Function|null} [callback=null]
 * @param {function(node: cc.Node, duration: number, callback?: Function, delay?: number): cc.Action | null} [animFunc=null] Anim function used to animate the text when it change the value
 * @returns {cc.Action|null}
 */
AnimationUtils.countdown = function (text, from = 0, to = 0, callback = null, animFunc = null) {
    if (!ck.isValid(text) || !(text instanceof ccui.Text)) {
        callback && callback();
        return null;
    }

    const interval = 1;
    text.setString(from.toString());
    animFunc && animFunc(text, interval * 0.5);
    if (from === to) {
        callback && callback();
        return null;
    }
    let currentValue = from;
    const delta = from > to ? -1 : 1;
    const update = cc.callFunc(function () {
        if (!ck.isValid(text)) return;
        currentValue += delta;
        text.setString(currentValue.toString());
        animFunc && animFunc(text, interval * 0.5);
    });
    const delay = cc.delayTime(interval);
    const seq = cc.sequence(delay, update).repeat(Math.abs(from - to));
    const action = callback ? cc.sequence(seq, cc.delayTime(0.5), cc.callFunc(callback)) : seq;
    text.runAction(action);
    return action;
};

/**
 * Text will countdown from a value to another value
 * Usually used for text in an timer
 * Countdown using zoomAndFadeIn as animFunc
 * @param {ccui.Text} text 
 * @param {number} from 
 * @param {number} to 
 * @param {Function|null} callback 
 * @returns {cc.Action|null}
 */
AnimationUtils.zoomInCountdown = function (text, from = 0, to = 0, callback = null) {
    return AnimationUtils.countdown(text, from, to, callback, AnimationUtils.zoomAndFadeIn);
};

/**
 * Text wil be has `...` animation at the end (Ex, `Loading...`) forever
 * @param {ccui.Text} text 
 * @param {string} str
 * @return {cc.Action} 
 */
AnimationUtils.animateLoadingText = function (text, str = "") {
    if (!ck.isValid(text) || !(text instanceof ccui.Text)) {
        return null;
    }
    str = str || text.getString();
    let count = 0;
    const interval = 0.25;
    const update = cc.callFunc(function () {
        if (!ck.isValid(text)) return;
        text.setString(str + ".".repeat(count + 1));
        count = (count + 1) % 3;
    });
    const delay = cc.delayTime(interval);
    const action = cc.sequence(update, delay).repeatForever();
    text.runAction(action);
    return action;
};

/**
 * Apply `func` as an animation function for nodes one by one
 * Ex. Used to show nodes by an animation with order
 * @param {cc.Node[]} nodes
 * @param {function(node: cc.Node, duration: number=, callback: Function=, delay: number=): cc.Action} animFunc - Animation function
 * @param {number} delayBetweenNode Delay between node
 * @param {number} duration Duration for each node
 * @param {Function|null} callback Called when all node is done playing animation
 * @param {number} delay Delay before animation
 */
AnimationUtils.oneByOne = function (nodes, animFunc, delayBetweenNode = 0.25, duration = 0.25, callback = null, delay = 0) {
    if (!nodes || nodes.length < 1) {
        callback && callback();
        return;
    }
    const length = nodes.length;
    for (let i = 0; i < length; i++) {
        const node = nodes[i];
        const nodeDelay = delay + i * delayBetweenNode;
        const cb = i === length - 1 ? callback : null;
        animFunc(node, duration, cb, nodeDelay);
    }
};

/**
 * Bounce anim for a node
 * @param {cc.Node} node 
 * @param {number} [duration=0.25]
 * @param {number} [dy=10]
 * @param {Function|null} [callback=null]
 * @param {number} [delay=0]
 * @returns 
 */
AnimationUtils.bounce = function (node, duration = 0.25, dy = 10, callback = null, delay = 0) {
  if (!ck.isValid(node)) {
      callback && callback();
      return null;
  }
    const wait = cc.delayTime(delay);
    const up = cc.spawn(cc.moveBy(duration * 0.35, 0, dy), cc.scaleTo(duration * 0.5, 0.8, 1.2));
    const down = cc.spawn(cc.moveBy(duration * 0.35, 0, -dy), cc.scaleTo(duration * 0.5, 1.15, 0.85));
    const normal = cc.scaleTo(duration * 0.3, 1, 1);
    let action = cc.sequence(
        wait,
        up,
        down,
        normal
    );
    action = callback ? cc.sequence(action, cc.callFunc(callback)) : action;
  node.runAction(action);
  return action;
};

AnimationUtils.scaleIdle = function (originScale, repeat = -1, duration = 1, ds = 0.3) {
    const scaleUp = cc.scaleTo(duration * 0.5, originScale + ds);
    const scaleDown = cc.scaleTo(duration * 0.5, originScale);
    if (repeat > 0)
        return cc.sequence(scaleUp, scaleDown).repeat(repeat);
    else return cc.sequence(scaleUp, scaleDown).repeatForever();
};

/**
 *
 * @param {cc.Node} node
 * @param {number} [duration=0.6]
 * @param {number} [delayBetween=0]
 * @return {cc.ActionInterval|null}
 */
AnimationUtils.fadeIdle = function (node, duration = 0.6, delayBetween = 0) {
    if (!ck.isValid(node)) return null;
    let action = cc.sequence(
        cc.fadeIn(duration),
        cc.delayTime(delayBetween),
        cc.fadeOut(duration)
    ).repeatForever();
    node.setOpacity(0);
    node.runAction(action);
    return action;
};

/**
 * Add animation for jumping (button) to touch
 * @param {cc.Node} node
 * @param {number} [scale=1.0]
 */
AnimationUtils.touchMe = function(node, scale=1.0) {
    if (!node || !cc.sys.isObjectValid(node)) return;
    node.runAction(cc.sequence(
        cc.scaleTo(0.1, scale + 0.1),
        cc.scaleTo(0.1, scale + 0.05),
        cc.scaleTo(0.1, scale + 0.15),
        cc.scaleTo(0.3, scale),
        cc.delayTime(1)
    ).repeatForever());
};

/**
 *
 * @param {cc.Node} node
 * @param {cc.Size} parentContainerSize
 * @param {number} duration
 * @param {Function} callback
 * @return {cc.Sequence}
 */
AnimationUtils.getActionGoToMiddleAndOut = function (node, parentContainerSize = cc.size(0, 0), duration = 1, callback = null) {
    if (!node || !cc.sys.isObjectValid(node)) return;

    let nodeScaleX = node.getScaleX();
    let nodeScaleY = node.getScaleY();

    let startScale = cc.p(1.2 * nodeScaleX, 0.8 * nodeScaleY);
    let middleScale = cc.p(nodeScaleX, nodeScaleY);
    let endScale = cc.p(1.2 * nodeScaleX, 0.8 * nodeScaleY);

    let middlePosition = cc.p(parentContainerSize.width * 0.5, parentContainerSize.height * 0.5);
    let startPosition = cc.p(- node.width * 0.5, parentContainerSize.height * 0.5);
    let endPosition = cc.p(parentContainerSize.width + node.width * 0.5, parentContainerSize.height * 0.5);

    node.setVisible(true);
    node.setPosition(startPosition.x, startPosition.y);
    node.setScale(startScale.x, startScale.y);

    let action = cc.sequence(
        cc.spawn(
            cc.moveTo(duration * 0.25, middlePosition.x, middlePosition.y).easing(cc.easeBackOut()),
            cc.scaleTo(duration * 0.25, middleScale.x, middleScale.y).easing(cc.easeBackOut())
        ),
        cc.delayTime(duration * 0.5),
        cc.spawn(
            cc.moveTo(duration * 0.25, endPosition.x, endPosition.y).easing(cc.easeBackIn()),
            cc.scaleTo(duration * 0.25, endScale.x, endScale.y).easing(cc.easeBackIn())
        ),
        cc.callFunc(function () {
            node.setVisible(false);
            node.setScale(middleScale.x, middleScale.y);
            if (cc.isFunction(callback)) callback();
        }.bind(this))
    );

    node.runAction(action);
};

/**
 * Throw nodes (Will be placed side by side on a row) <br/>
 * Can be used when need "surprising" effect for appearing nodes <br/>
 * Nodes should be of the same size
 * @param {cc.Node[]} nodes
 * @param {cc.Node} parent
 * @param {cc.Point} posFrom
 * @param {number} scaleFrom
 * @param {number} scaleTo
 * @param {boolean} useRandomY
 * @param {Function} callback
 */
AnimationUtils.throw = function (nodes, posFrom, parent = null, scaleFrom = 0.5, scaleTo = 1, useRandomY = false, callback = null) {
    if (!nodes || !ck.isValid(nodes[0])) return;

    const amount = nodes.length;
    const w = nodes[0].width * scaleTo;
    const bx = posFrom.x - amount * 0.5 * w + 0.5 * w;
    let delay = 0;

    for (let i = 0; i < amount; i++){
        const node = nodes[i];
        if (!ck.isValid(node)) continue;
        if (ck.isValid(parent) && !ck.isValid(node.getParent())) {
            parent.addChild(node);
        }

        node.setScale(scaleFrom);
        node.setPosition(posFrom);

        // y can be random if want to
        let y = 0;
        if (useRandomY) {
            y = ck.Math.randomInt(10, 20);
        }

        // jumpTo position and scaleTo at the same time
        const spawn = cc.spawn(cc.jumpTo(0.35, bx + i * w, posFrom.y - y, 55, 1),
                                cc.scaleTo(0.35, scaleTo));

        // Callback for last node
        if (i == amount - 1){
            var f = cc.callFunc(function (callback) {
                if(cc.isFunction(callback)) callback();
            }.bind(this, callback));
            node.runAction(cc.sequence(spawn, cc.delayTime(1.0 + delay), cc.fadeOut(0.25), f));
        }
        else{
            node.runAction(cc.sequence(spawn, cc.delayTime(1.0 + delay), cc.fadeOut(0.25)));
        }

        // Delay for next node
        delay += 0.1;
    }
};

/**
 * Throw then remove the nodes from parent
 * @param {cc.Node[]} nodes
 * @param {cc.Node} parent
 * @param {cc.Point} posFrom
 * @param {number} scaleFrom
 * @param {number} scaleTo
 * @param {boolean} useRandomY
 * @param {Function} callback
 */
AnimationUtils.throwThenThenRemove = function (nodes, posFrom, parent = null, scaleFrom = 0.5, scaleTo = 1, useRandomY = false, callback = null) {
    const cb = function () {
        if (cc.isFunction(callback)) callback();
        nodes.forEach(function (node) {
            if (ck.isValid(node)) node.removeFromParent(true);
        })
    };
    return AnimationUtils.throw(nodes, posFrom, parent, scaleFrom, scaleTo, useRandomY, cb);
};

/**
 * Move up down a node forever
 * @param {cc.Node} node
 * @param {number} duration
 * @param {number} deltaY
 */
AnimationUtils.moveUpDownForever = function (node, duration, deltaY) {
    if (!ck.isValid(node)) return;
    const moveUp = cc.moveBy(duration * 0.5, 0, deltaY).easing(cc.easeOut(1));
    const moveDown = cc.moveBy(duration * 0.5, 0, -deltaY).easing(cc.easeIn(1));
    const move = cc.sequence(moveUp, moveDown);
    node.runAction(move.repeatForever());
};

/**
 *
 * @param node
 * @param minScale
 * @param normalScale
 * @param timeDelay
 * @param callback
 */
AnimationUtils.zoomPopup = function (node, minScale, normalScale, timeDelay, callback) {
    if (minScale == undefined || minScale == null)
        minScale = 0.25;
    if (normalScale == undefined || normalScale == null)
        normalScale = 1.0;
    if (timeDelay == undefined || timeDelay == null)
        timeDelay = 0;
    node.setOpacity(255*0.0);
    node.stopAllActions();
    node.setScale(minScale);
    var delay = cc.delayTime(timeDelay);
    var fade = cc.fadeIn(0.25);
    var scale1 = cc.scaleTo(0.25, normalScale + 0.15);
    var scale2 = cc.scaleTo(0.15, normalScale - 0.1);
    var scale3 = cc.scaleTo(0.10, normalScale);
    var seq = null;
    if (callback == null)
        seq = cc.sequence(delay, cc.spawn(fade, scale1), scale2, scale3);
    else
        seq = cc.sequence(delay, cc.spawn(fade, scale1), scale2, scale3, callback);
    node.runAction(seq);
};

/**
 *
 * @param node
 * @param fromScale
 * @param normalScale
 * @param timeDelay
 * @param callback
 */
AnimationUtils.scalePopup = function (node, fromScale, normalScale, timeDelay, callback) {
    if (fromScale == undefined || fromScale == null)
        fromScale = 2.0;
    if (timeDelay == undefined || timeDelay == null)
        timeDelay = 0;
    node.stopAllActions();
    node.setScale(fromScale);
    node.setOpacity(255);
    var delay = cc.delayTime(timeDelay);
    var scale1 = cc.scaleTo(0.25, normalScale - 0.3);
    var scale2 = cc.scaleTo(0.2, normalScale + 0.1);
    var scale3 = cc.scaleTo(0.15, normalScale);
    var seq;
    if (callback == null)
        seq = cc.sequence(delay, scale1, scale2, scale3);
    else{
        seq = cc.sequence(delay, scale1, scale2, scale3, callback);
    }
    node.runAction(seq);
};

AnimationUtils.highlightIdle = function (fps, currentScale) {
    currentScale = currentScale || 1;
    fps = fps || 30;
    var action = cc.sequence(
        cc.scaleTo(3/fps, 0.95 * currentScale, 0.95 * currentScale),
        cc.scaleTo(7/fps, 1.05 * currentScale, 1.05 * currentScale),
        cc.scaleTo(4/fps, 0.95 * currentScale, 0.95 * currentScale),
        cc.scaleTo(5/fps, 1 * currentScale, 1 * currentScale),
        cc.delayTime(11/fps)
    ).repeatForever();
    return action;
};