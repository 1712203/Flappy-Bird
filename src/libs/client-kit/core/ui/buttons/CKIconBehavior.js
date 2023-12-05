/**
 * ck.Icon - Base icon ui <br/>
 *
 * Simple icon with an image and
 *
 * @class
 * @abstract
 * @extends ck.CountdownTimer
 * @extends ck.SimpleAnimatedNode
 *
 */
ck.IconBehavior = ck.CountdownTimer.extend({

    /**
     * @type {ccui.Widget}
     */
    _root: null,

    /**
     * @type {ccui.ImageView}
     */
    _imgRedDot: null,

    /**
     * @type {ccui.Text}
     */
    _txtNumRedDot: null,

    /**
     * @type {ccui.ImageView}
     */
    _imgBgrTips: null,

    /**
     * @type {ck.Glow}
     */
    _glow: null,

    /**
     * @type {boolean}
     */
    _isShowingTips: false,

    /**
     * @type {function(ck.IconBehavior): void}
     */
    _pressCallback: null,

    ctor: function () {
        ck.CountdownTimer.prototype.ctor.call(this);
        ck.SimpleAnimatedNode.prototype.ctor.call(this);
        UIUtils.fillContainer(this, this._root);
        if (this._imgIcon) this._imgIcon.setTouchEnabled(false);
        UIUtils.initPressableWidget(this, this.onPressed.bind(this));
        this.setRedDotVisible(false);
        this.setTouchEnabled(true);
        this.setTimeLeftVisible(false);
        this.setTipsVisible(false);
        if (this._glow) {
            this._glow.setKeepOnHide(true);
        }
    },

    /**
     * @virtual
     */
    onPressed: function () {
        if (this._pressCallback) {
            this._pressCallback(this);
        }
    },

    /**
     * @param {boolean} visible
     */
    setRedDotVisible: function (visible) {
        if (!ck.isValid(this._imgRedDot)) return;
        this._imgRedDot.setVisible(visible);
    },

    /**
     * Set tips visible or not
     * @param {boolean} isVisible
     */
    setTipsVisible: function (isVisible) {
        if (!ck.isValid(this._imgBgrTips)) return;
        this._imgBgrTips.setVisible(isVisible);
    },

    showTips: function() {
        if(!ck.isValid(this._imgBgrTips)) return;

        if(!this._isShowingTips){
            this.setLocalZOrder(1);
            this._isShowingTips = true;
            this.setTipsVisible(true);
            const originalScale = this._imgBgrTips.getScaleX();
            this._imgBgrTips.setScale(0);
            this._imgBgrTips.runAction(cc.sequence(
                cc.scaleTo(0.2, originalScale * 1.2),
                cc.scaleTo(0.1, originalScale * 0.9),
                cc.scaleTo(0.1, originalScale * 1.0),
                cc.delayTime(2.0),
                cc.callFunc(function(){
                    this._hideTips();
                }.bind(this))
            ));
        }
    },

    /**
     * Hide tips after showing
     * @private
     */
    _hideTips: function() {
        if(!ck.isValid(this._imgBgrTips)) return;

        this.setTipsVisible(false);
        this._isShowingTips = false;
        this.setLocalZOrder(0);
    },

    /**
     * @param {number} scale
     */
    setIconScale: function (scale) {
        if(!ck.isValid(this._root)) return;
        this._root.setScale(scale);
    },

    /**
     * Set number on red dot
     * @param {number} [num=0]
     */
    setNumRedDot: function (num=0) {
        if(!ck.isValid(this._txtNumRedDot)) return;

        if (num > 0) {
            this._txtNumRedDot.setVisible(true);
            const str = num > 99 ? "99+" : num;
            this._txtNumRedDot.setString(str);
        }
        else {
            this._txtNumRedDot.setVisible(false);
        }
    },

    /**
     * @override
     * @param callback
     */
    playShowAnimation: function (callback) {
        ck.SimpleAnimatedNode.prototype.playShowAnimation.call(this, callback);
        if (this._glow) this._glow.show();
    },

    /**
     * @override
     * @param callback
     */
    playHideAnimation: function (callback) {
        ck.SimpleAnimatedNode.prototype.playHideAnimation.call(this, callback);
        if (this._glow) this._glow.hide();
    },

    /**
     * @override
     */
    onTimeExpired: function () {
        ck.CountdownTimer.prototype.onTimeExpired.call(this);
        if (this._glow) this._glow.hide();
    },
});

ck.extend(ck.IconBehavior, ck.SimpleAnimatedNode);
