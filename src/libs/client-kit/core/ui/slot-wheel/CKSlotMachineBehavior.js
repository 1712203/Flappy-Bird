ck.SlotMachineBehavior = cc.Class.extend({
    /**
     * @type {ck.SlotBehavior[]}
     */
    _slots: null,

    _delaySpinEachSlot: 0,

    _delayStopEachSlot: 0,

    ctor: function (slots) {
        this._slots = slots || [];
    },

    _doFunctionForAllSlot: function (funcName, listArguments) {
        if (listArguments.length > 0 && listArguments.length !== this._slots.length) {
            cc.error("[ck.SlotMachineBehavior]", "<" + funcName + ">", "list arguments don't match with list slots");
        }
        for (let i = 0; i < this._slots.length; i++) {
            const slot = this._slots[i];
            if (cc.isFunction(slot[funcName]))
                slot[funcName].apply(slot, [listArguments[i]]);
        }
    },

    setListItems: function () {
        this._doFunctionForAllSlot("setListItems", Array.from(arguments));
    },

    highlightIndex: function () {
        this._doFunctionForAllSlot("highlightIndex", Array.from(arguments));
    },

    setItemsDirection: function () {
        this._doFunctionForAllSlot("setItemsDirection", Array.from(arguments));
    },

    doLayout: function () {
        this._doFunctionForAllSlot("doLayout", Array.from(arguments));
    },

    setMaxSpeed: function () {
        this._doFunctionForAllSlot("setMaxSpeed", Array.from(arguments));
    },

    setDirection: function () {
        this._doFunctionForAllSlot("setDirection", Array.from(arguments));
    },

    setSpeedUpDuration: function () {
        this._doFunctionForAllSlot("setSpeedUpDuration", Array.from(arguments));
    },

    setSpeedMaxDuration: function () {
        this._doFunctionForAllSlot("setSpeedMaxDuration", Array.from(arguments));
    },

    setStopDuration: function () {
        this._doFunctionForAllSlot("setStopDuration", Array.from(arguments));
    },

    setBounce: function () {
        this._doFunctionForAllSlot("setBounce", Array.from(arguments));
    },

    addSpinEventListenerEachSlot: function () {
        this._doFunctionForAllSlot("addSpinEventListener", Array.from(arguments));
    },

    addSpeedUpEventListenerEachSlot: function () {
        this._doFunctionForAllSlot("addSpeedUpEventListener", Array.from(arguments));
    },

    addSpeedMaxEventListenerEachSlot: function () {
        this._doFunctionForAllSlot("addSpeedMaxEventListener", Array.from(arguments));
    },

    addStopEventListenerEachSlot: function () {
        this._doFunctionForAllSlot("addStopEventListener", Array.from(arguments));
    },

    enableAutoStop: function () {
        this._doFunctionForAllSlot("enableAutoStop", Array.from(arguments));
    },

    setSpinRoundBeforeStop: function () {
        this._doFunctionForAllSlot("setSpinRoundBeforeStop", Array.from(arguments));
    },

    enableTouch: function () {
        this._doFunctionForAllSlot("enableTouch", Array.from(arguments));
    },

    setSoundStop: function () {
        this._doFunctionForAllSlot("setSoundStop", Array.from(arguments));
    },

    setSoundSpin: function () {
        this._doFunctionForAllSlot("setSoundSpin", Array.from(arguments));
    },

    setDelaySpinEachSlot: function (value) {
        this._delaySpinEachSlot = value;
    },

    setDelayStopEachSlot: function (value) {
        this._delayStopEachSlot = value;
    },

    isSpinning: function () {
        for (let i = 0; i < this._slots.length; i++) {
            const slot = this._slots[i];
            if (slot.isSpinning()) return true;
        }
        return false;
    },

    spin: function () {
        const parent = gm.loading.getCurrentScene();
        if (!ck.isValid(parent)) {
            cc.error("[ck.SlotMachineBehavior]", "<spin>", "can't get current scene !!!");
            return;
        }
        parent.stopActionByTag(ck.SlotMachineActionTag.SPIN);

        const argumentArr = Array.from(arguments);
        for (let i = 0; i < this._slots.length; i++) {
            const slot = this._slots[i];
            const delayAction = cc.delayTime(this._delaySpinEachSlot * i);
            const spinAction = cc.callFunc(function (slot, i) {
                slot.spin(argumentArr[i]);
            }.bind(this, slot, i));
            const sequenceAction = cc.sequence(delayAction, spinAction);
            sequenceAction.setTag(ck.SlotMachineActionTag.SPIN);
            parent.runAction(sequenceAction);
        }
    },

    stopAt: function () {
        const parent = gm.loading.getCurrentScene();
        if (!ck.isValid(parent)) {
            cc.error("[ck.SlotMachineBehavior]", "<spin>", "can't get current scene !!!");
            return;
        }
        parent.stopActionByTag(ck.SlotMachineActionTag.STOP);

        const argumentArr = Array.from(arguments);
        for (let i = 0; i < this._slots.length; i++) {
            const slot = this._slots[i];
            const delayAction = cc.delayTime(this._delayStopEachSlot * i);
            const stopAction = cc.callFunc(function (slot, i) {
                slot.stopAt(argumentArr[i]);
            }.bind(this, slot, i));
            const sequenceAction = cc.sequence(delayAction, stopAction);
            sequenceAction.setTag(ck.SlotMachineActionTag.STOP);
            parent.runAction(sequenceAction);
        }
    },

    getSlot: function (index) {
        if (index < 0 || index >= this._slots.length) {
            cc.error("[ck.SlotMachineBehavior]", "<getSlot>", "index must be between 0 and " + (this._slots.length - 1) + " !!!");
            return null;
        }
        return this._slots[index];
    },


    /**
     * @param {ck.SlotBehavior} slot
     */
    addSlot: function (slot) {
        if (!this._slots) this._slots = [slot];
        else this._slots.push(slot);
    },
});

/**
 * @param {ck.SlotBehavior[]} slots
 * @returns {ck.SlotMachineBehavior}
 */
ck.SlotMachineBehavior.create = function (slots) {
    return new ck.SlotMachineBehavior(slots);
};

ck.SlotMachineActionTag = {
    SPIN: 12121212,
    STOP: 13131313
}