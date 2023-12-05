/**
 * Using for button or layout has waiting for another task (server response, ...)
 * This widget class use for ccs-parser
 *
 * @class
 * @extends ccui.Widget
 * @extends ck.AsyncButtonBehavior
 */
ck.AsyncButton = ccui.Widget.extend({
    ctor: function () {
        this._init();
        ccui.Widget.prototype.ctor.call(this);
        ck.AsyncButtonBehavior.prototype.ctor.call(this);
    },

    _init: function () {
        this._imgButton = null;
        this._txtButton = null;
        this._imgIconButton = null;
        this._imgLoadingButton = null;
    },

    addChild: function (child) {
        ccui.Widget.prototype.addChild.call(this, child);

        let childName = child.getName();
        if (childName.startsWith("_imgButton")) this._imgButton = child;
        if (childName.startsWith("_txtButton")) this._txtButton = child;
        if (childName.startsWith("_imgIconButton")) this._imgIconButton = child;
        if (childName.startsWith("_imgLoadingButton")) this._imgLoadingButton = child;
    },

    lightSweep: function () {
        if (this._imgButton) ShaderUtils.lightSweep(this._imgButton);
    },

    clearAllShader: function () {
        if (this._imgButton) ShaderUtils.clearGLProgramState(this._imgButton);
    }
});

ck.extend(ck.AsyncButton, ck.AsyncButtonBehavior);

/**
 * Using for button or layout has waiting for another task (server response, ...)
 * This widget class use for ccs-parser
 *
 * @class
 * @extends ccui.Widget
 * @extends ck.AsyncButtonBehavior
 */
let AsyncButton = ck.AsyncButton;