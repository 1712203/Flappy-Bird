/**
 * Abstract class used for node which has some basic animation like show, hide <br/>
 * Note: Class extend from this class must be a cc.Node <br/>
 *
 * @class
 * @abstract
 * @extends cc.Class
 *
 */
ck.SimpleAnimatedNode = cc.Class.extend({

    /**
     * Call when show animation is done
     * @type {Function}
     */
    _showCallback: null,

    /**
     * Call when hide animation is done
     * @type {Function}
     */
    _hideCallback: null,

    /**
     * Call is remove() is called
     * @type {Function}
     */
    _removeCallback: null,

    /**
     * Show animation duration
     * @type {number}
     */
    _showDuration: 0.2,

    /**
     * Hide animation duration
     * @type {number}
     */
    _hideDuration: 0.2,

    /**
     * @type {boolean}
     */
    _isShowing: false,

    /**
     * @type {boolean}
     */
    _isHiding: false,

    /**
     * true: setVisible(false) after hide animation <br/>
     * false: remove() after hide animation <br/>
     * @type {boolean}
     */
    _keepOnHide: false,

    /**
     * @constructor
     */
    ctor: function () {

    },

    /**
     * Update widget size to fill a container
     * @param {cc.Node} container
     * @protected
     * @example
     *  this.fillContainer(this._layoutRoot); // will update widget size to layout root size
     */
    _fillContainer: function (container) {
        UIUtils.fillContainer(this, container);
    },

    /**
     * @param callback
     */
    playShowAnimation: function (callback) {
        AnimationUtils.fadeIn(this, this._showDuration, callback);
    },

    /**
     * @param callback
     */
    playHideAnimation: function (callback) {
        AnimationUtils.fadeOut(this, this._hideDuration, callback);
    },

    /**
     * Show animation
     * If you override this function, remember to call this._showCallback when the animation is finished;
     */
    show: function (autoHideTime = 0) {
        if (!ck.isValid(this)) return;
        if (this._isShowing) return;
        this._isShowing = true;
        this._isHiding = false;
        this.setVisible(true);
        this.playShowAnimation(this.onShowDone.bind(this));
        this.unschedule(this.autoHide);
        if (autoHideTime && autoHideTime > 0)
            this.scheduleOnce(this.autoHide, autoHideTime);
    },

    autoHide: function (){
        this.hide();
    },

    /**
     * Hide animation
     * If you override this function, remember to call this._hideCallback when the animation is finished;
     */
    hide: function () {
        if (!ck.isValid(this)) return;
        if (this._isHiding) return;
        this._isHiding = true;
        this._isShowing = false;
        this.unschedule(this.autoHide);
        this.playHideAnimation(this.onHideDone.bind(this));
    },

    /**
     * Set show callback function
     * @param {Function} callback
     */
    setShowCallback: function (callback) {
        this._showCallback = callback;
    },

    /**
     * Set hide callback function
     * @param {Function} callback
     */
    setHideCallback: function (callback) {
        this._hideCallback = callback;
    },

    /**
     * Hide after a delay
     * @param {number} delay
     */
    showAfter: function (delay) {
        if (!ck.isValid(this)) return;
        setTimeout(this.show.bind(this), delay * 1000);
    },

    /**
     * Hide after a delay
     * @param {number} delay
     */
    hideAfter: function (delay) {
        if (!ck.isValid(this)) return;
        setTimeout(this.hide.bind(this), delay * 1000);
    },

    /**
     * @param {function(): void} callback
     */
    setRemoveCallback: function (callback) { this._removeCallback = callback; },

    /**
     * Remove this UI from parent
     */
    remove: function () {
        if (!ck.isValid(this)) return;
        this.removeFromParent(true);
        if (this._removeCallback) {
            this._removeCallback();
        }
    },

    /**
     * Set show animation duration
     * @param {number} duration
     */
    setShowDuration: function (duration) {
        this._showDuration = duration;
    },

    /**
     * Set hide animation duration
     * @param {number} duration
     */
    setHideDuration: function (duration) {
        this._hideDuration = duration;
    },

    /**
     * Get show animation duration
     * @returns {number}
     */
    getShowDuration: function () {
        return this._showDuration;
    },

    /**
     * Get hide animation duration
     * @returns {number}
     */
    getHideDuration: function () {
        return this._hideDuration;
    },

    /**
     * Call hide callback then remove this node (no animation)
     */
    callbackAndRemove: function () {
        if (!ck.isValid(this)) return;
        this._hideCallback && this._hideCallback();
        this.remove();
    },

    /**
     * Call hide callback and then setVisible(false)
     */
    callbackAndInvisible: function () {
        if (!ck.isValid(this)) return;
        this._hideCallback && this._hideCallback();
        this.setVisible(false);
    },

    /**
     * Is this node hidden or not
     * @returns {boolean}
     */
    isHidden: function () {
        return this._isHiding || !this.isVisible();
    },

    /**
     * Is this not shown or not
     * @returns {boolean}
     */
    isShown: function () {
        return this._isShowing || this.isVisible();
    },

    /**
     * Set keep on hide or not
     * @param {boolean} keepOnHide
     */
    setKeepOnHide: function (keepOnHide) {
        this._keepOnHide = keepOnHide;
    },

    onShowDone: function () {
        if (this._showCallback) {
            this._showCallback();
        }
        this._isShowing = false;
    },

    onHideDone: function () {
        this._isHiding = false;
        if (this._keepOnHide) {
            this.callbackAndInvisible();
        } else {
            this.callbackAndRemove();
        }
    },
});
