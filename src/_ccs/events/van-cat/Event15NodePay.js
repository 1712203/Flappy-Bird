/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.Event15NodePay
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.Event15NodePay = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layout: null,
    /** @type {ccui.PageView} */
    _pageView: null,
    /** @type {ccui.Button} */
    _btnPrev: null,
    /** @type {ccui.Button} */
    _btnNext: null,


    /**
     * _ccs.Event15NodePay constructor
     * @constructor
     */
    ctor: function () {
        ccui.Widget.prototype.ctor.call(this);
        this.setCascadeOpacityEnabled(true);
        this._initCCSChildren();
    },

    /**
     * Init nodes from ccs
     * @private
     */
    _initCCSChildren: function () {

        ///// # _layout
        this._layout = new ccui.Layout();
        this._layout.setName("_layout");
        this.addChild(this._layout);
        this._layout.setCascadeOpacityEnabled(true);
        this._layout.setCascadeColorEnabled(true);
        this._layout.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layout);
        this._layout.setTouchEnabled(true);
        this._layout.setUnifySizeEnabled(false);
        this._layout.ignoreContentAdaptWithSize(false);
        this._layout.setContentSize(cc.size(350, 160));

        ///// # _pageView
        this._pageView = new ccui.PageView();
        this._pageView.setName("_pageView");
        this._layout.addChild(this._pageView);
        this._pageView.setCascadeOpacityEnabled(true);
        this._pageView.setCascadeColorEnabled(true);
        this._pageView.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._pageView, 0.5, 0.5);
        let _pageViewLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._pageView);
        _pageViewLayoutComponent.setPositionPercentXEnabled(true);
        _pageViewLayoutComponent.setPositionPercentX(0.5);
        _pageViewLayoutComponent.setPositionPercentYEnabled(true);
        _pageViewLayoutComponent.setPositionPercentY(0.5);
        this._pageView.setTouchEnabled(true);
        this._pageView.setUnifySizeEnabled(false);
        this._pageView.ignoreContentAdaptWithSize(false);
        this._pageView.setContentSize(cc.size(232, 159));

        ///// # _btnPrev
        this._btnPrev = new ccui.Button();
        this._btnPrev.setName("_btnPrev");
        this.addChild(this._btnPrev);
        this._btnPrev.setCascadeOpacityEnabled(true);
        this._btnPrev.setCascadeColorEnabled(true);
        this._btnPrev.setAnchorPoint(cc.p(0.5, 0.5));
        this._btnPrev.setPosition(-143.0003, 0);
        this._btnPrev.setScale(1.2, 1.2);
        let _btnPrevLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnPrev);
        this._btnPrev.loadTextureDisabled("buttons/triangles/Gold.png", 1);
        this._btnPrev.loadTexturePressed("buttons/triangles/Gold.png", 1);
        this._btnPrev.loadTextureNormal("buttons/triangles/Gold.png", 1);
        this._btnPrev.setUnifySizeEnabled(false);
        this._btnPrev.ignoreContentAdaptWithSize(false);
        this._btnPrev.setContentSize(cc.size(48, 50));
        this._btnPrev.setTouchEnabled(true);

        ///// # _btnNext
        this._btnNext = new ccui.Button();
        this._btnNext.setName("_btnNext");
        this.addChild(this._btnNext);
        this._btnNext.setCascadeOpacityEnabled(true);
        this._btnNext.setCascadeColorEnabled(true);
        this._btnNext.setAnchorPoint(cc.p(0.5, 0.5));
        this._btnNext.setPosition(142.9994, -0.0006);
        this._btnNext.setScale(1.2, 1.2);
        this._btnNext.setFlippedX(true);
        let _btnNextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnNext);
        this._btnNext.loadTextureDisabled("buttons/triangles/Gold.png", 1);
        this._btnNext.loadTexturePressed("buttons/triangles/Gold.png", 1);
        this._btnNext.loadTextureNormal("buttons/triangles/Gold.png", 1);
        this._btnNext.setUnifySizeEnabled(false);
        this._btnNext.ignoreContentAdaptWithSize(false);
        this._btnNext.setContentSize(cc.size(48, 50));
        this._btnNext.setTouchEnabled(true);

    },



});

/**
 * Create Event15NodePay
 * @returns {_ccs.Event15NodePay}
 */
_ccs.Event15NodePay.create = function () {
    return new _ccs.Event15NodePay();
};
