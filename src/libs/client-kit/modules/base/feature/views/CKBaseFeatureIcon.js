/**
 * @class
 * @abstract
 * @extends ck.IconBehavior
 * @extends ck.BaseView
 */
ck.BaseFeatureIcon = ck.IconBehavior.extend({

    /**
     * @type {ck.BaseFeatureManager}
     */
    _manager: null,

    /**
     * @type {ck.BaseFeatureData}
     */
    _data: null,

    /**
     * @type {ccui.Text}
     */
    _txtName: null,

    /**
     * @constructor
     */
    ctor: function () {
        ck.IconBehavior.prototype.ctor.call(this);
        ck.BaseView.prototype.ctor.call(this);
    },

    onPressed: function () {
        if (this._manager) {
            this._manager.onIconPressed(this);
        }
    },

    /**
     * @override
     */
    refresh: function () {
        this.refreshRedDot();
    },

    refreshRedDot: function () {
        if (!ck.isValid(this)) return;
        if (!this._manager) return;
        this.setRedDotVisible(this._manager.hasIconRedDot());
        this.setNumRedDot(this._manager.getNumRedDot());
    },

    setFeatureName: function (featureName) {
        if (!ck.isValid(this)) return;
        this._txtName.setString(featureName);
    },

    /**
     * @override
     */
    show: function () {
        ck.IconBehavior.prototype.show.call(this);
        this.refreshRedDot();
    },
});

ck.extend(ck.BaseFeatureIcon, ck.BaseView);
