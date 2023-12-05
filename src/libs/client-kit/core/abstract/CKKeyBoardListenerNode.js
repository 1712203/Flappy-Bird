/**
 * @class
 * @abstract
 * @extends cc.Class
 */
ck.KeyBoardListenerNode = cc.Class.extend({

    /**
     * @type {Boolean} flag for use key pressed only for testing
     */
    onlyForTesting: true,

    /**
     * Map<keyCode, callback>
     * @type {Map<number|cc.KEY, Function>}
     */
    _keyMap: null,

    /**
     * @constructor
     */
    ctor: function () {
        this._initKeyBoardListener();
    },

    _initKeyBoardListener: function () {
        this._keyPressedFunctionMap = new Map();
        if (this.onlyForTesting && cc.sys.platform !== cc.sys.WIN32) return;
        cc.eventManager.addListener(cc.EventListener.create({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: this.onKeyPressed.bind(this)
        }), this);
    },

    /**
     * @param {cc.KEY|number} keyCode
     * @param event
     */
    onKeyPressed: function (keyCode, event) {
        const func = this._keyPressedFunctionMap.get(keyCode);
        cc.isFunction(func) && func();
        event.stopPropagation();
    },

    /**
     * Add listener callback when player press a key on keyboard
     * @param {cc.KEY|number} keyCode
     * @param {Function} func - Callback function
     */
    addKeyListener: function (keyCode, func) {
        this._keyPressedFunctionMap.set(keyCode, func);
    },

});
