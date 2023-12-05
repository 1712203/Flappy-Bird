/**
 * @class
 * @abstract
 * @extends SpinnerBehavior
 */
ck.WheelBehavior = ck.SpinnerBehavior.extend({
    _logTag: "[ck.WheelBehavior]",

    /**
     * @type {cc.Point}
     */
    _lastTouchPos: null,

    /**
     * @type {number}
     */
    _touchBeganTime: 0,

    /**
     * @type {number}
     */
    _angleTotal: 0,

    /**
     * @type {number} degree/second
     */
    _initialAngularVel: 0,

    /**
     * @type {number}
     */
    _prevAngleDiff: 0,

    /**
     * @type {number}
     */
    _touchCnt: 0,

    /**
     * @type {Number}
     */
    _radius: 100,

    /**
     * @type {ck.WheelDirection|number}
     */
    _direction: WheelDirection.RIGHT,

    /**
     * @type {ck.WheelItemsDirection|number}
     */
    _itemsDirection: WheelItemsDirection.LEFT,

    /**
     * @type {boolean}
     */
    _canSlideToSpin: true,

    /**
     * @type {number}
     */
    _minVelocityToSpin: 300,

    /**
     * Degree / second
     * @type {number}
     */
    _maxSpeed: 360 * 3,

    /**
     * @constructor
     */
    ctor: function () {
        ck.SpinnerBehavior.prototype.ctor.call(this);
    },

    /**
     * @virtual
     */
    onEnter: function () {
        ck.SpinnerBehavior.prototype.onEnter.call(this);
    },

    spinAutoStop: function (stopIndex) {
        if (!this._validateIndex(stopIndex, "spinAutoStop")) return;
        if (!ck.isValid(this)) return;

        this._resetActionAndSchedule();
        this._enableSpinState();

        const autoSpinAction = cc.sequence(
            cc.callFunc(function () {
                this._speedUp(this._initialAngularVel);
            }.bind(this)),
            cc.delayTime(this._speedUpDuration), // waiting for speed up
            cc.callFunc(function () {
                this._speedMax();
            }.bind(this)),
            cc.delayTime(this._speedMaxDuration), // waiting for speed up
            cc.callFunc(function () {
                this.stopAt(stopIndex);
            }.bind(this))
        );
        autoSpinAction.setTag(ck.SlotActionTag.AUTO_STOP);

        this.runAction(autoSpinAction);
    },

    spinNonStop: function () {
        if (!ck.isValid(this)) return;
        this._resetActionAndSchedule();
        this._enableSpinState();
        this._speedUp(this._initialAngularVel, this._speedMax.bind(this));
    },

    stopAt: function (stopIndex) {
        if (!this._validateIndex(stopIndex, "stopAt")) return;
        if (!ck.isValid(this)) return;
        this._resetActionAndSchedule();
        this._stop(stopIndex);
    },

    /**
     * Set item index that you want to highlight <br/>
     * Remember to call doLayout() after this function to apply
     * @param {number} index
     * @example
     *  wheel.highlightIndex(3);
     *  wheel.doLayout();
     */
    highlightIndex: function (index) {
        if (!this._validateIndex(index, "highlightIndex")) return;
        this._highlightIndex = index;
    },

    doLayout: function () {
        const nItem = this._listItems.length;
        const dAngle = 360 / nItem;

        const centerTopPosition = this._layoutContainer.convertToNodeSpace(this._nodeItemsControl.convertToWorldSpace(cc.p(0, this._radius)));
        const needlePosition = this._layoutContainer.convertToNodeSpace(UIUtils.getWorldPosition(this._layoutNeedle));
        const angleDiff = this._getAngleDiff(needlePosition, centerTopPosition, this._centerPoint);
        const firstPos = cc.pRotateByAngle(cc.p(0, this._radius), cc.p(0, 0), cc.degreesToRadians(angleDiff));

        let itemIndex = this._highlightIndex;
        for (let i = 0; i < this._listItems.length; i++) {
            const item = this._listItems[itemIndex];
            const angleDegree = -this._itemsDirection * i * dAngle;
            const angleRad = cc.degreesToRadians(angleDegree);
            const pos = cc.pRotateByAngle(firstPos, cc.p(0, 0), angleRad);
            item.setPosition(pos);
            item.setRotation(-(angleDiff + angleDegree));

            itemIndex += 1;
            if (itemIndex >= this._listItems.length) itemIndex = itemIndex % this._listItems.length;
        }
    },

    /**
     * CHANGE LAYOUT PROPERTY -> CALL doLayout AFTER THIS FUNCTION TO APPLY
     * set radius for the wheel
     * @param value {Number} radius of the wheel (degree / second)
     */
    setRadius: function (value) {
        this._radius = value;
    },

    /**
     * set min velocity to spin when slide
     * @param minVelocity {Number} min velocity to spin (degree / second)
     */
    setMinVelocityToSpin: function (minVelocity) {
        this._minVelocityToSpin = minVelocity
    },

    /**
     * set Max Speed of spinner
     * @param {number} value - Max speed (degree / second)
     */
    setMaxSpeed: function (value) {
        this._super(value);
    },

    /**
     * set direction when spin
     * @param {ck.WheelDirection} value - Direction when spin
     */
    setDirection: function (value) {
        this._super(value);
    },

    /**
     * set bounce degree when spinner stop
     * @param {number} value - Bounce degree when stop
     */
    setBounce: function (value) {
        this._super(value);
    },

    /**
     * Turn on/off slide to spin
     * @param {boolean} enable - On/off slide to spin
     */
    enableSlideToSpin: function (enable) {
        this._canSlideToSpin = enable;
    },

    /**
     * @override
     * @private
     */
    _initStartItemPosition: function () {
        if (!this._validateListItems(this._listItems, "_initStartItemPosition")) return;
        const nItem = this._listItems.length;
        const dAngle = 360 / nItem;
        const firstPos = cc.p(0, this._radius);
        this._listItems.forEach(function (item, index) {
            const angleDegree = index * dAngle;
            const angleRad = cc.degreesToRadians(angleDegree);
            const pos = cc.pRotateByAngle(firstPos, cc.p(0, 0), angleRad);
            item.setPosition(pos);
            item.setRotation(-angleDegree);
        }.bind(this))
    },

    // Touch listeners

    _onTouchBegan: function (touch, event) {
        if (!this._canTouch || this._touchCnt > 0 || this.isSpinning())
            return false;
        const touchPos = touch.getLocation();
        const rect = this._layoutContainer.getBoundingBox();
        const local = this._layoutContainer.getParent().convertToNodeSpace(touchPos);
        if (cc.rectContainsPoint(rect, local)){
            this._angleTotal = 0;
            this._touchBeganTime = TimeUtils.now();
            this._lastTouchPos = local;
            this._touchCnt++;
            return true;
        }
        return false;
    },

    _onTouchMoved: function (touch, event) {
        const touchPos = touch.getLocation();
        const local = this._layoutContainer.getParent().convertToNodeSpace(touchPos);
        const diffAngle = this._getAngleDiff(this._lastTouchPos, local, this._centerPoint);
        if (diffAngle * this._prevAngleDiff < 0){
            this._angleTotal = 0;
            this._touchBeganTime = TimeUtils.now();
        }
        this._prevAngleDiff = diffAngle;
        this._nodeItemsControl.setRotation(this._nodeItemsControl.getRotationX() + this._direction * diffAngle);
        this._lastTouchPos = local;
        this._angleTotal += diffAngle;
    },

    _onTouchEnded: function (touch, event) {
        this._touchCnt--;
        if (this._touchCnt < 0)
            this._touchCnt = 0;
        if (!this._canSlideToSpin) return;
        const now = TimeUtils.now();
        const elapsedTime = (now - this._touchBeganTime) / 1000;
        if (elapsedTime > 0){
            this._initialAngularVel = this._angleTotal / elapsedTime;
            if (Math.abs(this._initialAngularVel) > this._minVelocityToSpin) {
                if (this._initialAngularVel < 0) this._direction *= -1;
                this._initialAngularVel = Math.abs(this._initialAngularVel);
                this.spin();
                this._initialAngularVel = 0;
            }
        }
    },

    _onTouchCancelled: function (touch, event) {
        this._touchCnt--;
        if (this._touchCnt < 0)
            this._touchCnt = 0;
    },

    // Updates

    _updateNodeControlState: function (dt) {
        if (this._state !== SpinnerState.SPIN || this._spinState === SpinnerSpinState.STOP) return;

        const dr = dt * this._speed * this._direction;
        this._updateNodeControlRotation(dr);
    },

    _updateNodeControlRotation: function (dr) {
        this._nodeItemsControl.setRotation(this._nodeItemsControl.rotationX + dr);

        if (this._nodeItemsControl.rotationX > 360) {
            this._resetControlPointRotation();
        }
    },

    _resetControlPointRotation: function () {
        let currentRotation = this._nodeItemsControl.rotationX;
        currentRotation = currentRotation % 360;
        if (currentRotation < 0)
            currentRotation += 360;
        this._nodeItemsControl.setRotation(currentRotation);
    },

    _updateItemsState: function (dt) {
    },

    _resetActionAndSchedule: function () {
        if (!ck.isValid(this)) return;
        this.stopActionByTag(ck.WheelActionTag.AUTO_SPIN);
        this._nodeItemsControl.stopActionByTag(ck.WheelActionTag.STOP);
        this.unschedule(this._updateSpeedInterval);
        this._resetControlPointRotation();
    },

    _stop: function (stopIndex) {
        this._spinState = SpinnerSpinState.STOP;
        const dr = this._getDrRotateByWhenStopAt(stopIndex);
        const bounceDuration = this._bounce > 0 ? 0.07 : 0;
        const stopActionArr = [];
        stopActionArr.push(cc.rotateBy(this._stopDuration - bounceDuration, dr * this._direction).easing(cc.easeQuarticActionOut()));
        stopActionArr.push(cc.callFunc(this._playSoundStop.bind(this)));
        if (this._bounce > 0)
            stopActionArr.push(cc.rotateBy(bounceDuration, - this._bounce * this._direction).easing(cc.easeQuarticActionIn()));
        stopActionArr.push(cc.callFunc(this._onSpinningDone.bind(this)));
        const stopAction = cc.sequence(stopActionArr);
        stopAction.setTag(ck.WheelActionTag.STOP);
        this._nodeItemsControl.runAction(stopAction);
    },

    _playSoundStop: function () {
        // TODO: Add sound later
    },

    _getDrFromIndexToNeedle: function (index) {
        const item = this._listItems[index];
        const itemPosition = this._layoutContainer.convertToNodeSpace(UIUtils.getWorldPosition(item));
        const needlePosition = this._layoutContainer.convertToNodeSpace(UIUtils.getWorldPosition(this._layoutNeedle));
        let angleDiff = this._getAngleDiff(itemPosition, needlePosition, this._centerPoint);
        if (angleDiff < 0) angleDiff += 360;
        return angleDiff;
    },

    _getDrRotateByWhenStopAt: function (index) {
        const dr = this._getDrFromIndexToNeedle(index);
        return dr + this._spinRoundBeforeStop * 360 + this._bounce;
    },

    _getAngleDiff: function(fromPos, toPos, pivot = cc.p(0, 0)){
        const beginVector = cc.pSub(fromPos, pivot);
        const endVector = cc.pSub(toPos, pivot);
        const angleRad = cc.pAngleSigned(beginVector, endVector);
        return - this._direction * cc.radiansToDegrees(angleRad);
    },
});

/**
 * @enum
 */
ck.WheelActionTag = {
    AUTO_SPIN: 1111,
    STOP: 2222,
}