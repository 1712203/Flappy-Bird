/**
 * Create a slotMachine, using for slotMachine machine
 *
 * @class
 * @extends ccui.Widget
 * @extends ck.SlotMachineBehavior
 */
ck.SlotMachine = ccui.Widget.extend({
    _logTag: "[ck.SlotMachine]",

    ctor: function () {
        ccui.Widget.prototype.ctor.call(this);
    },

    addChild: function (child) {
        ccui.Widget.prototype.addChild.call(this, child);

        if (child instanceof ck.Slot) {
            this.addSlot(child);
        }
    },
});

ck.extend(ck.SlotMachine, ck.SlotMachineBehavior);

/**
 * @returns {ck.SlotMachine}
 */
ck.SlotMachine.create = function () {
    return new ck.SlotMachine();
};