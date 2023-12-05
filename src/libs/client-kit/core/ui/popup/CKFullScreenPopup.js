/**
 * Popup but it is full screen <br/>
 * Sometimes, we need some full screen popup (Ex. level up, payment, etc.)
 *
 * @class
 * @extends ck.Popup
 * @deprecated Will be removed, please use ck.PopupBehavior
 */
ck.FullScreenPopup = ck.Popup.extend({
    ctor: function (ccsNode) {
        ck.Popup.prototype.ctor.call(this, ccsNode);
    },

    /**
     * @override
     */
    onExit: function () {
        ck.Popup.prototype.onExit.call(this);
    },

    /**
     *
     * @virtual
     * @returns {string}
     * @protected
     */
    _getCCSFile: function () {
        return "";
    },
});
