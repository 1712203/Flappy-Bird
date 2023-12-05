
/**
 * Base class for spinner behavior like wheel, slots in slot machine
 * @class
 * @abstract
 * @extends cc.Class
 */
ck.SpinnerBehavior = cc.Class.extend({
    _logTag: "[ck.SpinnerBehavior]",

    /**
     * Container for item nodes, wheel background
     * @type {ccui.Layout}
     */
    _layoutContainer: null,

    /**
     * The needle layout <br/>
     * Used to define where the spinner stop <br/>
     *
     * @type {ccui.Layout}
     */
    _layoutNeedle: null,

    /**
     * List item nodes in the spinners
     * @type {cc.Node[]}
     */
    _listItems: null,

    /**
     * Container for items
     * @type {cc.Node}
     */
    _nodeItemsControl: null,

    /**
     * Center of the spinner
     * @type {cc.Point}
     */
    _centerPoint: cc.p(0, 0),

    /**
     * @type {ck.SpinnerState|number}
     */
    _state: SpinnerState.IDLE,

    /**
     * @type {ck.SpinnerSpinState|number}
     */
    _spinState: SpinnerSpinState.STOP,

    /**
     * If auto stop enabled, calling spin with stopIndex will cause the spinner auto stop after some spins <br/>
     * If auto stop is disabled, you must call stop() to stop the spinner <br/>
     * @type {boolean}
     */
    _autoStop: true,

    /**
     * This index of item you want to highlight <br/>
     * Usually this is index of item with highest reward <br/>
     * @type {number}
     */
    _highlightIndex: 0,

    /**
     * @type {boolean}
     */
    _canTouch: true,

    // Speed configuration

    _speed: 0,
    _fromSpeed: 0,
    _toSpeed: 0,
    _firstTickSpeed: 0,
    _elapsedUpdateSpeed: 0,
    _durationUpdateSpeed: 0,
    _callbackUpdateSpeed: null,
    _maxSpeed: 2000,

    // Directions

    _direction: 0,
    _itemsDirection: 0,

    // Durations

    _speedUpDuration: 1,
    _speedMaxDuration: 1,
    _stopDuration: 1,

    // Event listeners

    /**
     * @type {Function}
     */
    _speedUpEventListener: null,

    /**
     * @type {Function}
     */
    _speedMaxEventListener: null,

    /**
     * @type {Function}
     */
    _stopEventListener: null,

    /**
     * @type {Function}
     */
    _spinEventListener: null,

    // Stop stage configurations

    _bounce: 0,
    _spinRoundBeforeStop: 1,

    // Sound
    _soundStop: null,
    _soundSpin: null,

    /**
     * @constructor
     */
    ctor: function () {
        this._listItems = [];
        this._initTouchEvent();
        this._initCenterPoint();
    },

    /**
     * Is spinner spinning
     * @return {Boolean} is spinner spinning
     */
    isSpinning: function () {
        return this._state !== SpinnerState.IDLE;
    },

    /**
     * set list items want to create spinner
     * @param {cc.Node[]} listItems list items want to create spinner
     * @return {void}
     */
    setListItems: function (listItems) {
        if (!this._validateListItems(listItems, "setListItems")) return;
        this._clearAllOldItems();
        this._listItems = listItems;
        this._createSpinner();
    },

    /**
     * Set items without calling addChild
     * @param {cc.Node[]} listItems - These nodes must be children of _nodeItemsControl
     */
    setListItemsWithoutAddChild: function (listItems) {
        this._listItems = listItems;
    },

    /**
     * spin and auto stop at stopIndex
     * @param stopIndex {Number} stop at index
     * @virtual
     */
    spinAutoStop: function (stopIndex) {
        // cc.log(this._logTag, "<autoSpin>", "override me !!!!!");
    },

    /**
     * spin never stop
     * @virtual
     */
    spinNonStop: function () {
    },

    /**
     * Spin forever
     */
    spinForever: function () {
        this.spinNonStop();
    },

    /**
     * Spin and stop at an index
     * @param {number} [stopIndex] - Index you want to stop at
     */
    spin: function (stopIndex) {
        if (this._autoStop) this.spinAutoStop(stopIndex);
        else this.spinNonStop();

        if (cc.isFunction(this._spinEventListener))
            this._spinEventListener();
    },

    /**
     * Stop at stopIndex
     * @param stopIndex {Number} stop at index
     * @virtual
     */
    stopAt: function (stopIndex) {
        // cc.log(this._logTag, "<stopAt>", "override me !!!!!");
    },

    /**
     * Highlight item of index (using for big gift or special gift)
     * @param index {Number} highlight index
     * @virtual
     */
    highlightIndex: function (index) {
        // cc.log(this._logTag, "<highlightIndex>", "override me !!!!!");
    },

    /**
     * set items direction when create spinner
     */
    setItemsDirection: function (direction) {
        this._itemsDirection = direction;
    },

    /**
     * reset items position
     * @virtual
     */
    doLayout: function () {

    },

    // ------------------------------------ SET/ADD ------------------------------------

    setMaxSpeed: function (value) {
        this._maxSpeed = value;
    },

    setDirection: function (value) {
        this._direction = value;
    },

    /**
     * set duration of Speed Up state
     * @param value {Number} duration (seconds)
     */
    setSpeedUpDuration: function (value) {
        this._speedUpDuration = value;
    },

    /**
     * set duration of Speed Max state
     * @param value {Number} duration (seconds)
     */
    setSpeedMaxDuration: function (value) {
        this._speedMaxDuration = value;
    },

    /**
     * set duration of stop state
     * @param value {Number} duration (seconds)
     */
    setStopDuration: function (value) {
        this._stopDuration = value;
    },

    setBounce: function (value) {
        this._bounce = value;
    },

    /**
     * add event listener when start spin
     * @param listener {Function} function
     */
    addSpinEventListener: function (listener) {
        this._spinEventListener = listener;
    },

    /**
     * add event listener when start speed up
     * @param listener {Function} function
     */
    addSpeedUpEventListener: function (listener) {
        this._speedUpEventListener = listener;
    },

    /**
     * add event listener when start speed max
     * @param listener {Function} function
     */
    addSpeedMaxEventListener: function (listener) {
        this._speedMaxEventListener = listener;
    },

    /**
     * add event listener when spinner stop
     * @param listener {Function} function
     */
    addStopEventListener: function (listener) {
        this._stopEventListener = listener;
    },

    /**
     * Turn on/off auto stop when spin <br/>
     * If auto stop enabled, calling spin with stopIndex will cause the spinner auto stop after some spins <br/>
     * If auto stop is disabled, you must call stop() to stop the spinner <br/>
     * @param {boolean} enable - On/off auto stop
     */
    enableAutoStop: function (enable) {
        this._autoStop = enable;
    },

    /**
     * spinner will spin round(s) more before stop
     * @param {number} round - Number of round
     */
    setSpinRoundBeforeStop: function (round) {
        this._spinRoundBeforeStop = round;
    },

    /**
     * turn on/off touch
     * @param enable {Boolean} on/off touch
     */
    enableTouch: function (enable) {
        this._canTouch = enable;
    },

    /**
     * set sound when stop
     * @param soundFile {String} sound file
     */
    setSoundStop: function (soundFile) {
        this._soundStop = soundFile;
    },

    /**
     * set sound when spin
     * @param soundFile {String} sound file
     */
    setSoundSpin: function (soundFile) {
        this._soundSpin = soundFile;
    },
    // ------------------------------------ GET ------------------------------------

    /**
     * Get item by index of list items
     * @param {number} index 
     * @returns {cc.Node|null}
     */
    getItemByIndex: function (index) {
        if (index < 0 || index >= this._listItems.length) {
            cc.error(this.LOG_TAG, "<getItemByIndex>", "index must be between 0 and " + (this._listItems.length - 1) + " !!!");
            return null;
        }

        return this._listItems[index];
    },

    /**
     * @virtual
     */
    onEnter: function () {
        this.scheduleUpdate();
    },

    /**
     * @virtual
     */
    update: function (dt) {
        this._updateNodeControlState(dt);
        this._updateItemsState(dt);
    },

    // Init

    _initCenterPoint: function () {
        this._centerPoint = cc.p(this._layoutContainer.width * 0.5, this._layoutContainer.height * 0.5);
    },

    _initTouchEvent: function () {
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: false,
            onTouchBegan: this._onTouchBegan.bind(this),
            onTouchMoved: this._onTouchMoved.bind(this),
            onTouchEnded: this._onTouchEnded.bind(this),
            onTouchCancelled: this._onTouchCancelled.bind(this)
        }, this._layoutContainer);
    },

    // Items

    _addItemToContainer: function () {
        for (let i = 0; i < this._listItems.length; i++) {
            this._nodeItemsControl.addChild(this._listItems[i]);
        }
    },

    /**
     * Init start position of all item <br/>
     * Override me to init start item position
     * @virtual
     */
    _initStartItemPosition: function () {
        // Override me
    },

    _createSpinner: function () {
        this._addItemToContainer();
        this._initStartItemPosition();
    },

    _clearAllOldItems: function () {
        if (this._listItems && cc.isArray(this._listItems)) {
            for (let i = 0; i < this._listItems.length; i++) {
                this._listItems[i].removeFromParent(true);
            }
        }
    },

    // Touch listeners

    /**
     * @virtual
     */
    _onTouchBegan: function (touch, event) {
        return false;
    },

    /**
     * @virtual
     */
    _onTouchMoved: function (touch, event) {
    },

    /**
     * @virtual
     */
    _onTouchEnded: function (touch, event) {
    },

    /**
     * @virtual
     */
    _onTouchCancelled: function (touch, event) {
    },

    // Update

    /**
     * update node control state
     * @virtual
     */
    _updateNodeControlState: function (dt) {
        // cc.log(this._logTag, "<_updateNodeControlState>", "override me !!!!!");
    },

    /**
     * update items state
     * @virtual
     */
    _updateItemsState: function (dt) {
        // cc.log(this._logTag, "<_updateItemsState>", "override me !!!!!");
    },

    _updateSpeedInterval: function (dt) {
        if (this._firstTickSpeed) {
            this._firstTickSpeed = false;
            this._elapsedUpdateSpeed = 0;
        } else
            this._elapsedUpdateSpeed += dt;

        let t = this._elapsedUpdateSpeed / (this._durationUpdateSpeed > 0.0000001192092896 ? this._durationUpdateSpeed : 0.0000001192092896);
        t = (1 > t ? t : 1);
        t = (t > 0 ? t : 0);
        t = Math.pow(t, 2);
        this._updateSpeed(t);

        if (this._elapsedUpdateSpeed >= this._durationUpdateSpeed) {
            this.unschedule(this._updateSpeedInterval);
            if (cc.isFunction(this._callbackUpdateSpeed)) this._callbackUpdateSpeed();
        }
    },

    _updateSpeed: function (time) {
        this._speed = this._fromSpeed + (this._toSpeed - this._fromSpeed) * time;
        this._blurItems(this._speed / this._maxSpeed);
    },

    _speedTo: function (speed, duration, callback) {
        this._fromSpeed = this._speed;
        this._toSpeed = speed;
        this._elapsedUpdateSpeed = 0;
        this._firstTickSpeed = true;
        this._durationUpdateSpeed = duration;
        this._callbackUpdateSpeed = callback;
        this.unschedule(this._updateSpeedInterval);
        this.schedule(this._updateSpeedInterval);
    },

    _speedFromTo: function (fromSpeed, toSpeed, duration, callback) {
        this._speed = fromSpeed;
        this._fromSpeed = fromSpeed;
        this._toSpeed = toSpeed;
        this._elapsedUpdateSpeed = 0;
        this._firstTickSpeed = true;
        this._durationUpdateSpeed = duration;
        this._callbackUpdateSpeed = callback;
        this.unschedule(this._updateSpeedInterval);
        this.schedule(this._updateSpeedInterval);
    },

    _speedUp: function (startSpeed = 0, callback) {
        this._spinState = SpinnerSpinState.SPEED_UP;
        this._speedFromTo(startSpeed, this._maxSpeed, this._speedUpDuration, callback);

        if (cc.isFunction(this._speedUpEventListener))
            this._speedUpEventListener();
    },

    _speedMax: function () {
        this._spinState = SpinnerSpinState.SPEED_MAX;

        if (cc.isFunction(this._speedMaxEventListener))
            this._speedMaxEventListener();
    },

    /**
     * stop action
     * @virtual
     */
    _stop: function (stopIndex) {
        this._blurItems(0);
        // cc.log(this._logTag, "<_stop>", "override me !!!!!");
    },

    _onSpinningDone: function () {
        this._enableIdleState();
        if (cc.isFunction(this._stopEventListener))
            this._stopEventListener();
    },

    _enableSpinState: function () {
        this._state = SpinnerState.SPIN;
    },

    _enableIdleState: function () {
        this._state = SpinnerState.IDLE;
    },

    /**
     * play sound when stop
     * @virtual
     */
    _playSoundStop: function () {
        if (this._soundStop) {
            gm.system.playSFX(this._soundStop);
        }
    },

    /**
     * play sound when spin
     * @virtual
     */
    _playSoundSpin: function () {
        if (this._soundSpin) {
            gm.system.playSFX(this._soundSpin);
        }
    },

    /**
     * play sound when spin
     * @virtual
     */
    _blurItems: function (blurPercent) {
        for (let i = 0; i < this._listItems.length; i++) {
            if (ck.isValid(this._listItems[i]) && cc.isFunction(this._listItems[i].blur)) {
                this._listItems[i].blur(blurPercent);
            }
        }
    },

    // ------------------------------------ VALIDATE FUNCTION ------------------------------------

    _validateIndex: function (index, functionName = "") {
        if (!cc.isNumber(index) || index < 0) {
            cc.warn(this._logTag, "<" + functionName + ">", "index must be a number >= 0 !!, current index: " + index);
            return false;
        }
        if (index >= this._listItems.length) {
            cc.warn(this._logTag, "<" + functionName + ">", "index " + index + " is out of list items !!");
            return false;
        }
        return true;
    },

    _validateListItems: function (listItems, functionName = "") {
        if (!cc.isArray(listItems)) {
            cc.warn(this._logTag, "<" + functionName + ">", "listItems is not an array !!");
            return false;
        }
        if (listItems.length <= 0) {
            cc.warn(this._logTag, "<" + functionName + ">", "listItems is empty !!");
            return false;
        }
        return true;
    },
});
