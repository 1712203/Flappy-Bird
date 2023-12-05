/**
 * Control plus and minus buttons with holding behavior
 * @abstract
 * @class
 * @extends cc.Class
 */
ck.PlusMinusButtonsBehavior = cc.Class.extend({
    /**
     * @type {cc.Node}
     */
    _imgPlus: null,

    /**
     * @type {cc.Node}
     */
    _imgMinus: null,

    /**
     * @type {number}
     */
    _amount: 1,

    /**
     * @type {number}
     */
    _deltaAmount: 0,

    /**
     * @type {number}
     */
    _updateAmountInterval: 0.1,

    /**
     * @constructor
     */
    ctor: function () {
        // To stop listening, just setTouchEnabled to false for _imgPlus or _imgMinus
        this._imgPlus.addTouchEventListener(this._onAmountAdjustTouched.bind(this));
        this._imgMinus.addTouchEventListener(this._onAmountAdjustTouched.bind(this));
    },

    /**
     * @param {cc.Node} sender
     * @param {number} type
     * @private
     */
    _onAmountAdjustTouched: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                this._onAmountAdjustTouchBegan(sender);
                break;
            case ccui.Widget.TOUCH_ENDED:
            case ccui.Widget.TOUCH_CANCELED:
                this._onAmountAdjustTouchEnded(sender);
                break;
        }
    },

    /**
     * @param {cc.Node} sender
     * @private
     */
    _onAmountAdjustTouchBegan: function (sender) {
        this._deltaAmount = sender === this._imgMinus ? -1 : 1;
        this.setAmount(this._amount + this._deltaAmount);
        let action;
        if (this.canAddDeltaAmount()) {
            this.schedule(this._updateAmount, this._updateAmountInterval);
            // Scale down (Holding button)
            action = cc.scaleTo(0.15, 0.85);
        } else {
            // Scale down then up (Just press once then stop)
            action = cc.sequence(cc.scaleTo(0.15, 0.85),
                                cc.scaleTo(0.15, 1.0));
        }
        sender.stopAllActions();
        sender.runAction(action);
    },

    /**
     * @param {cc.Node} sender
     * @private
     */
    _onAmountAdjustTouchEnded: function (sender) {
        this._stopUpdateAmount();
    },

    /**
     * @protected
     */
    _stopUpdateAmount: function () {
        if (!ck.isValid(this)) return;
        this.unschedule(this._updateAmount);
        this._imgPlus.stopAllActions();
        this._imgPlus.runAction(cc.scaleTo(0.15, 1.0));
        this._imgMinus.stopAllActions();
        this._imgMinus.runAction(cc.scaleTo(0.15, 1.0));
    },

    /**
     * @private
     */
    _updateAmount: function () {
        if (!ck.isValid(this)) return;
        this.setAmount(this._amount + this._deltaAmount);
    },

    /**
     * Remember to check valid amount and call _stopUpdateAmount if you override this function
     * @virtual
     * @param {number} amount
     */
    setAmount: function (amount) {
        if (!ck.isValid(this)) return;
        this._amount = amount;
        if (!this.canAddDeltaAmount()) {
            this._stopUpdateAmount();
        }
    },

    /**
     * @returns {boolean}
     */
    canAddDeltaAmount: function () {
        if (!this.isEnoughForAmount(this._amount + 1) && this._deltaAmount > 0) {
            return false;
        } else if (this._amount < 2) {
            return false;
        }
        return true;
    },

    /**
     * To check if amount satisfy the upperbound (max) constraint
     * @virtual
     * @param {number} amount
     * @returns {boolean}
     */
    isEnoughForAmount: function (amount) {
        return true;
    },
});