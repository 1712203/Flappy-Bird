/**
 * Create a slot, using for slot machine
 *
 * @class
 * @extends ccui.Widget
 * @extends ck.SlotBehavior
 */
ck.Slot = ccui.Widget.extend({
    _logTag: "[ck.Slot]",

    ctor: function () {
        this._init();
        ccui.Widget.prototype.ctor.call(this);
        this._initState();
    },

    _init: function () {
        this._layoutNeedle = null;
        this._layoutContainer = null;
        this._nodeItemsControl = null;
    },

    _initState: function () {

    },

    onEnter: function () {
        ccui.Widget.prototype.onEnter.call(this);
        ck.SlotBehavior.prototype.onEnter.call(this);
    },

    update: function (dt) {
        ck.SlotBehavior.prototype.update.call(this, dt);
    },

    addChild: function (child) {
        ccui.Widget.prototype.addChild.call(this, child);

        let childName = child.getName();
        if (childName.startsWith("_layoutNeedle")) this._layoutNeedle = child;
        if (childName.startsWith("_layoutContainer")) this._layoutContainer = child;
    },

    initChildren: function () {
        if (this._layoutContainer) {
            this._layoutContainer.getChildren().forEach(child => {
                let childName = child.getName();
                if (childName && childName.startsWith("_nodeItemsControl")) this._nodeItemsControl = child;
            }, this);
        }
        ck.SlotBehavior.prototype.ctor.call(this);
    }
});

ck.extend(ck.Slot, ck.SlotBehavior);

/**
 * @returns {ck.Slot}
 */
ck.Slot.create = function () {
    return new ck.Slot();
};