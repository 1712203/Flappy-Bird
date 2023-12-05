// noinspection JSUnusedLocalSymbols

/**
 * A pre-built edit box with custom text, icon, background, ... and behaviours
 * This widget class use for ccs-parser
 *
 * @class
 * @extends ccui.Widget
 * @extends ck.TextFieldBehavior
 */
ck.TextField = ccui.Widget.extend({

    ctor: function () {
        this._init();
        ccui.Widget.prototype.ctor.call(this);
        ck.TextFieldBehavior.prototype.ctor.call(this);
        this._initState();
    },

    _init: function () {
        this._layoutEditBoxBackground = null;
        this._imgEditBoxBackground = null;
        this._imgEditBoxIcon = null;
        this._layoutEditBoxText = null;
        this._txtEditBoxTextDisplay = null;
    },

    _initState: function () {

    },

    addChild: function (child) {
        ccui.Widget.prototype.addChild.call(this, child);

        let childName = child.getName();
        if (childName.startsWith("_layoutEditBoxBackground")) this._layoutEditBoxBackground = child;
        if (childName.startsWith("_layoutEditBoxText")) this._layoutEditBoxText = child;
    },
});

ck.extend(ck.TextField, ck.TextFieldBehavior);

/**
 * @return {ck.TextField}
 */
ck.TextField.create = function () {
    return new ck.TextField();
};