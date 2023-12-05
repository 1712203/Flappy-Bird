/**
 * Base class for popups created from CocosStudio
 * Includes some basics things for a popup (show, hide, close when touch outside, close button, etc.)
 * 
 * @class
 * @abstract
 * @extends ck.SimpleAnimatedNode
 *
 */
ck.PopupBehavior = ck.SimpleAnimatedNode.extend({

    _closeOnBackgroundTouch: true,
    _backgroundOpacity: 190,

    /**
     * @type {function(): void}
     */
    _closeCallback: null,

    /**
     * @type {ccui.Widget}
     */
    _root: null,

    /**
     * Popup layout (in ccs)
     * @type {ccui.Layout}
     */
    _layoutPopup: null,

    /**
     * Close "button" (in ccs)
     * @type {ccui.Layout}
     */
    _layoutClose: null,

    /**
     * Close "button" (in ccs)
     * @type {ccui.ImageView}
     */
    _imgClose: null,

    /**
     * Close "button" (in ccs)
     * @type {ccui.Button}
     */
    _btnClose: null,

    /**
     * @type {ccui.Widget}
     */
    _widgetClose: null,

    /**
     * Black background
     * @type {ccui.Layout}
     */
    _background: null,

    /**
     * @constructor
     */
    ctor: function () {
        ck.SimpleAnimatedNode.prototype.ctor.call(this);
        this.setAnchorPoint(cc.p(0.5, 0.5));
        this.ignoreAnchorPointForPosition(false);
        let sizeHeight = cc.winSize.height;
        let positionY = cc.winSize.height * 0.5;
        if (PlatformUtils.hasNotch()) {
            sizeHeight = sizeHeight - (PlatformUtils.NOTCH_HEIGHT + PlatformUtils.MARGIN_BOTTOM);
            positionY = sizeHeight * 0.5 + PlatformUtils.MARGIN_BOTTOM;
        }
        this.setContentSize(cc.winSize.width, sizeHeight);
        this.setPosition(cc.winSize.width * 0.5, positionY);

        this._initBackground();
        this._initRoot();
        this._initLayoutClose();
    },

    onBackgroundPressed: function () {
        if (!this._closeOnBackgroundTouch) return;
        this.close();
    },
    
    onClosePressed: function () {
        this.close();
    },

    close: function () {
        this.hide();
        if (this._closeCallback) {
            this._closeCallback();
        }
    },

    _initBackground: function () {
        this._background = new ccui.Layout();
        this.addChild(this._background, -1);
        this._background.setContentSize(cc.winSize);
        this._background.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        this._background.setBackGroundColor(cc.color.BLACK);
        this._background.setBackGroundColorOpacity(this._backgroundOpacity);
        this._background.setCascadeOpacityEnabled(true);
        this._background.setTouchEnabled(true);
        this._background.addClickEventListener(this.onBackgroundPressed.bind(this));
        if (PlatformUtils.hasNotch())
            this._background.y = - PlatformUtils.MARGIN_BOTTOM;
    },

    _initRoot: function () {
        if (this._root) this._layoutPopup = this._root;
        else if (this._layoutPopup) this._root = this._layoutPopup;
        if (!this._layoutPopup) return;
        this._layoutPopup.setPosition(this.width * 0.5, this.height * 0.5);
        let _layoutPopupComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        _layoutPopupComponent.setPositionPercentXEnabled(false);
        _layoutPopupComponent.setPositionPercentYEnabled(false);
        this._layoutPopup.setTouchEnabled(true);
    },

    _initLayoutClose: function () {
        this._widgetClose = this._layoutClose || this._imgClose || this._btnClose;
        if (!this._widgetClose) return;
        AnimationUtils.addPressAnimation(this._widgetClose);
        this._widgetClose.setTouchEnabled(true);
        this._widgetClose.addClickEventListener(this.onClosePressed.bind(this));
    },

    /**
     * @override
     * @param {Function} callback
     */
    playShowAnimation: function (callback) {
        const duration = this.getShowDuration();
        AnimationUtils.popIn(this._layoutPopup, duration, callback);
        AnimationUtils.fadeIn(this._background, duration);
    },

    /**
     * @override
     * @param {Function} callback
     */
    playHideAnimation: function (callback) {
        let duration = this.getHideDuration();
        AnimationUtils.popOut(this._layoutPopup, duration, callback);
        AnimationUtils.fadeOut(this._background, duration);
    },

    setBackgroundTouchEnabled: function (enable) {
        if (!ck.isValid(this._background)) return;
        this._background.setTouchEnabled(enable);
    },

    setBackgroundSwallowTouches: function (swallow) {
        if (!ck.isValid(this._background)) return;
        this._background.setSwallowTouches(swallow);
    },

    setBackgroundOpacity: function (opacity) {
        if (!ck.isValid(this._background)) return;
        this._backgroundOpacity = opacity;
        this._background.setOpacity(opacity);
    },

    setCloseButtonVisible: function (visible) {
        if (!ck.isValid(this._widgetClose)) return;
        this._widgetClose.setVisible(visible);
    },

    disableClose: function () {
        if (!ck.isValid(this)) return;
        this.setCloseButtonVisible(false);
        this._closeOnBackgroundTouch = false;
    },

    setCloseEnabled: function (enabled) {
        if (!ck.isValid(this)) return;
        this.setCloseButtonVisible(enabled);
        this._closeOnBackgroundTouch = enabled;
    },

    setLayoutPopupTouchEnabled: function (enabled) {
        if (!ck.isValid(this)) return;
        this._layoutPopup.setTouchEnabled(enabled);
    },

    setCloseOnBackgroundTouch: function (isClose) {
        this._closeOnBackgroundTouch = isClose;
    },

    getBackgroundOpacity: function () {
        return this._backgroundOpacity;
    },

    setCloseCallback: function (callback) {
        this._closeCallback = callback;
    },


    show: function () {
        if (!ck.isValid(this)) return;
        if (this._isShowing) return;
        if (PlatformUtils.hasNotch() && this.getParent()) {
            let sizeHeight = cc.winSize.height - (PlatformUtils.NOTCH_HEIGHT + PlatformUtils.MARGIN_BOTTOM);
            let positionY = sizeHeight * 0.5 + PlatformUtils.MARGIN_BOTTOM;
            this.setPosition(this.getParent().convertToNodeSpace(cc.p(cc.winSize.width * 0.5, positionY)));
        }
        ck.SimpleAnimatedNode.prototype.show.call(this);
    }
});
