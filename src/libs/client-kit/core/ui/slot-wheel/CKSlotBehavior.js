/**
 * @enum
 */
ck.SlotDirection = {
    UP: 1,
    DOWN: -1,
};

/**
 * @enum
 */
ck.SlotItemsDirection = {
    ABOVE: 1,
    BELOW: -1,
};

/**
 * @enum
 */
ck.SlotActionTag = {
    AUTO_STOP: 1111,
    STOP: 2222,
};

/**
 * Create a slot, using for slot machine
 *
 * @class
 * @extends SpinnerBehavior
 */
ck.SlotBehavior = ck.SpinnerBehavior.extend({
    _logTag: "[ck.SlotBehavior]",

    _innerHeight: 0,
    _direction: ck.SlotDirection.UP,
    _itemsDirection: ck.SlotItemsDirection.ABOVE,
    _maxSpeed: 2000, // dy / second
    _scrollFlag: false,

    _centerItemIndex: -1,

    ctor: function () {
        ck.SpinnerBehavior.prototype.ctor.call(this);
    },

    // ------------------------------------ ITEM POSITION ------------------------------------

    _setItemsPositionByCenterIndex: function (centerIndex) {
        const centerItem = this._listItems[centerIndex];
        const centerPosition = centerItem.getPosition();
        const nextPosition = cc.p(centerPosition.x, centerPosition.y);
        let i;
        let index = 0;
        /** @type {cc.Node} */
        let item = null;
        nextPosition.y = centerPosition.y + this._itemsDirection * centerItem.height * 0.5// below/top position of center item

        const firstHalfNumberItems = Math.floor(this._listItems.length * 0.5); // from middle -> below/top (centerIndex -> firstHalfNumberItems)
        for (i = 1; i <= firstHalfNumberItems; i++) {
            index = (centerIndex + i) % this._listItems.length;
            item = this._listItems[index];
            nextPosition.y += this._itemsDirection * item.height * 0.5; // go to middle
            item.setPosition(nextPosition);
            nextPosition.y += this._itemsDirection * item.height * 0.5; // above/below position of next item
        }

        if (this._listItems.length <= 2) return; // don't have last half part
        nextPosition.y = centerPosition.y - this._itemsDirection * centerItem.height * 0.5; // reset next position to above position of center item
        for (i = 1; i <= this._listItems.length - firstHalfNumberItems - 1; i++) {
            index = (centerIndex - i);
            if (index < 0) index = this._listItems.length + index;
            item = this._listItems[index];
            nextPosition.y -= this._itemsDirection * item.height * 0.5; // go to middle
            item.setPosition(nextPosition);
            nextPosition.y -= this._itemsDirection * item.height * 0.5; // below/above position of next item
        }
    },

    _initStartItemPosition: function () {
        if (!this._validateListItems(this._listItems, "_initStartItemPosition")) return;
        this.doLayout();
    },

    _initInnerHeight: function () {
        this._innerHeight = 0;
        for (let i = 0; i < this._listItems.length; i++) {
            this._innerHeight += this._listItems[i].height;
        }
    },

    // ------------------------------------ TOUCH LISTENER ------------------------------------

    /**
     * @type {cc.Point}
     */
    _lastTouchPos: null,

    _onTouchBegan: function (touch, event) {
        if (!this._canTouch || this.isSpinning()) return false;
        this._lastTouchPos = touch.getLocation();
        this._scrollFlag = false;
        this._speed = 0;
        this.unschedule(this._updateSpeedInterval);
        const rect = this._layoutContainer.getBoundingBox();
        const local = this._layoutContainer.getParent().convertToNodeSpace(this._lastTouchPos);
        if (cc.rectContainsPoint(rect, local)){
            this._touchBeganTime = TimeUtils.now();
            this._touchDyTotal = 0;
            return true;
        }
        return false;
    },

    _onTouchMoved: function (touch, event) {
        if (!this._lastTouchPos) return;
        const touchLocation = touch.getLocation();
        const dy = touchLocation.y - this._lastTouchPos.y;
        this._updateNodeControlPosition(dy);
        this._touchDyTotal += this._lastTouchPos.y - touchLocation.y;
        this._lastTouchPos = touchLocation;
    },

    _onTouchEnded: function (touch, event) {
        this._lastTouchPos = null;
        const now = TimeUtils.now();
        const elapsedTime = (now - this._touchBeganTime) / 1000;
        if (elapsedTime > 0){
            this._initialAngularSpeed = this._touchDyTotal / elapsedTime * - this._direction;
            this._scrollFlag = true;
            if (Math.abs(this._initialAngularSpeed) > 1000)
                this._speedFromTo(this._initialAngularSpeed, 0, Math.abs(this._initialAngularSpeed/4000), function () {
                    this._scrollFlag = false;
                }.bind(this));
        }
    },

    _onTouchCancelled: function (touch, event) {
        this._lastTouchPos = null;
    },

    // ------------------------------------ MAIN UPDATE ------------------------------------

    _updateNodeControlState: function (dt) {
        if (!this._scrollFlag && (this._state !== SpinnerState.SPIN || this._spinState === SpinnerSpinState.STOP)) return;

        const dy = dt * this._speed * this._direction;
        this._updateNodeControlPosition(dy);
    },

    _updateNodeControlPosition: function (dy) {
        this._nodeItemsControl.y += dy;

        if (Math.abs(this._nodeItemsControl.y - this._centerPoint.y) > 5 * this._innerHeight) {
            this._resetControlPointPosition();
        }
    },

    _updateItemsState: function (dt) {
        for (let i = 0; i < this._listItems.length; i++) {
            // check is out of boundary
            const topYBoundary = this._centerPoint.y + this._innerHeight * 0.5;
            const botYBoundary = this._centerPoint.y - this._innerHeight * 0.5;
            /** @type {cc.Point} */
            let itemPosition = this._layoutContainer.convertToNodeSpace(UIUtils.getWorldPosition(this._listItems[i]));
            if (itemPosition.y > topYBoundary) {
                itemPosition.y -= this._innerHeight;
                itemPosition = this._nodeItemsControl.convertToNodeSpace(this._layoutContainer.convertToWorldSpace(itemPosition));
                this._listItems[i].y = itemPosition.y;
            } else if (itemPosition.y < botYBoundary) {
                itemPosition.y += this._innerHeight;
                itemPosition = this._nodeItemsControl.convertToNodeSpace(this._layoutContainer.convertToWorldSpace(itemPosition));
                this._listItems[i].y = itemPosition.y;
            }
        }

        if (this._centerItemIndex != this._getCenterItemIndex()) {
            this._centerItemIndex = this._getCenterItemIndex();
            this._playSoundSpin();
        }
    },

    _getCenterItemIndex: function () {
        let minY = Number.MAX_SAFE_INTEGER;
        let centerIndex = 0;
        for (let i = 0; i < this._listItems.length; i++) {
            const itemPosition = this._layoutContainer.convertToNodeSpace(UIUtils.getWorldPosition(this._listItems[i]));
            const dy = Math.abs(this._centerPoint.y - itemPosition.y);
            if (dy < minY) {
                centerIndex = i;
                minY = dy;
            }
        }
        return centerIndex;
    },

    _resetControlPointPosition: function () {
        const centerIndex = this._getCenterItemIndex();
        const centerItem = this._listItems[centerIndex];
        const controlPosition = this._layoutContainer.convertToNodeSpace(UIUtils.getWorldPosition(centerItem));
        const centerPosition = cc.p(0, 0);
        centerItem.setPosition(centerPosition);
        this._setItemsPositionByCenterIndex(centerIndex);
        this._nodeItemsControl.setPosition(this._centerPoint.x, controlPosition.y);
    },

    _resetActionAndSchedule: function () {
        if (!ck.isValid(this)) return;
        this.stopActionByTag(ck.SlotActionTag.AUTO_STOP);
        this._nodeItemsControl.stopActionByTag(ck.SlotActionTag.STOP);
        this.unschedule(this._updateSpeedInterval);
        this._resetControlPointPosition();
    },

    _stop: function (stopIndex) {
        ck.SpinnerBehavior.prototype._stop.call(this, stopIndex)
        this._spinState = SpinnerSpinState.STOP;
        this._speed = 0;
        const dy = this._getDyMoveByWhenStopAt(stopIndex);
        const bounceDuration = this._bounce > 0 ? 0.07 : 0;
        const stopActionArr = [];
        stopActionArr.push(cc.moveBy(this._stopDuration - bounceDuration, 0, dy * this._direction).easing(cc.easeQuarticActionOut()));
        stopActionArr.push(cc.callFunc(this._playSoundStop.bind(this)));
        if (this._bounce > 0)
            stopActionArr.push(cc.moveBy(bounceDuration, 0, - this._bounce * this._direction).easing(cc.easeSineInOut()));
        stopActionArr.push(cc.callFunc(this._onSpinningDone.bind(this)));
        const stopAction = cc.sequence(stopActionArr);
        stopAction.setTag(ck.SlotActionTag.STOP);
        this._nodeItemsControl.runAction(stopAction);
    },

    _getDyFromIndexToNeedle: function (index) {
        const item = this._listItems[index];
        const itemPosition = this._layoutContainer.convertToNodeSpace(UIUtils.getWorldPosition(item));
        let dy = (this._layoutNeedle.y - itemPosition.y) * this._direction;
        if (dy < 0) dy = dy + this._innerHeight;
        return dy;
    },

    _getDyMoveByWhenStopAt: function (index) {
        const dy = this._getDyFromIndexToNeedle(index);
        return dy + this._spinRoundBeforeStop * this._innerHeight + this._bounce;
    },

    // ------------------------------------ USER CONTROL ------------------------------------

    /**
     * @override
     * @param listItems
     * @returns {void}
     */
    setListItems: function (listItems) {
        this._super(listItems);
        this._initInnerHeight();
    },

    spinAutoStop: function (stopIndex) {
        if (!this._validateIndex(stopIndex, "spinAutoStop")) return;
        if (!ck.isValid(this)) return;

        this._resetActionAndSchedule();
        this._enableSpinState();
        const autoSpinAction = cc.sequence(
            cc.callFunc(function () {
                this._speedUp(0);
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
        this._speedUp(0, this._speedMax.bind(this));
    },

    stopAt: function (stopIndex) {
        if (!this._validateIndex(stopIndex, "stopAt")) return;
        if (!ck.isValid(this)) return;
        this._resetActionAndSchedule();
        this._stop(stopIndex);
    },

    // CHANGE LAYOUT PROPERTY -> CALL doLayout AFTER THIS FUNCTION TO APPLY
    highlightIndex: function (index) {
        if (!this._validateIndex(index, "highlightIndex")) return;
        this._highlightIndex = index;
        this.doLayout();
    },

    doLayout: function () {
        const highlightItem = this._listItems[this._highlightIndex];
        const centerPositionY = this._nodeItemsControl.convertToNodeSpace(UIUtils.getWorldPosition(this._layoutNeedle)).y;
        highlightItem.setPosition(cc.p(0, centerPositionY));
        this._setItemsPositionByCenterIndex(this._highlightIndex);
    },

    /**
     * CHANGE LAYOUT PROPERTY -> CALL doLayout AFTER THIS FUNCTION TO APPLY
     * set items direction when create slot (ABOVE -> bigger index above)
     * @param direction {ck.SlotItemsDirection} direction of items
     */
    setItemsDirection: function (direction) {
        if (direction === this._itemsDirection) return;
        this._itemsDirection = direction;
        this.doLayout();
    },

    /**
     * set Max Speed of spinner
     * @param value {Number} max speed (pixels / second)
     */
    setMaxSpeed: function (value) {
        this._super(value);
    },

    /**
     * set direction when spin
     * @param value {ck.SlotDirection} direction when spin
     */
    setDirection: function (value) {
        this._super(value);
    },

    /**
     * set bounce pixels when spinner stop
     * @param value {Number} bounce pixels when stop
     */
    setBounce: function (value) {
        this._super(value);
    },
});

/**
 * @returns {ck.SlotBehavior}
 */
ck.SlotBehavior.create = function () {
    return new ck.SlotBehavior();
};