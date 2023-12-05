/**
 * Event (keyboard, mouse, touch, etc) releated functions
 */
ck.EventUtils = {};

ck.EventUtils.onBackKeyPressed = function (node, callback) {
    return this.onKeyboardPressed(node, function(keyCode, event){
        if (keyCode === cc.KEY.back || keyCode === cc.KEY.escape) {
            callback();
            event.stopPropagation();
        }
    });
};

ck.EventUtils.onKeyboardPressed = function (node, callback) {
    var keyboardListener = cc.EventListener.create({
        event: cc.EventListener.KEYBOARD,
        onKeyPressed: callback
    });
    return cc.eventManager.addListener(keyboardListener, node);
};

ck.EventUtils.onTouched = function (node, swallowTouches, onTouchEnded) {
    onTouchEnded = onTouchEnded || function (touch, event) { };
    swallowTouches = swallowTouches || false;
    var listener = {
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true,
        onTouchBegan: function (touch, event) { return true; },
        onTouchEnded: onTouchEnded,
    }
    return cc.eventManager.addListener(listener, node);
};