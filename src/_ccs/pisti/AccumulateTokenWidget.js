/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.AccumulateTokenWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.AccumulateTokenWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgProgress: null,
    /** @type {ccui.ImageView} */
    _imgBag: null,


    /**
     * _ccs.AccumulateTokenWidget constructor
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

        ///// # _layoutRoot
        this._layoutRoot = new ccui.Layout();
        this._layoutRoot.setName("_layoutRoot");
        this.addChild(this._layoutRoot);
        this._layoutRoot.setCascadeOpacityEnabled(true);
        this._layoutRoot.setCascadeColorEnabled(true);
        this._layoutRoot.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        this._layoutRoot.setTouchEnabled(true);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(400, 40));

        ///// # _imgProgress
        this._imgProgress = new ccui.ImageView();
        this._imgProgress.setName("_imgProgress");
        this._layoutRoot.addChild(this._imgProgress);
        this._imgProgress.setCascadeOpacityEnabled(true);
        this._imgProgress.setCascadeColorEnabled(true);
        this._imgProgress.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgProgress, 0.8938, 0.5);
        let _imgProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgProgress);
        _imgProgressLayoutComponent.setPositionPercentXEnabled(true);
        _imgProgressLayoutComponent.setPositionPercentX(0.8938);
        _imgProgressLayoutComponent.setPositionPercentYEnabled(true);
        _imgProgressLayoutComponent.setPositionPercentY(0.5);
        this._imgProgress.loadTexture("basics/bars/Bar_10.png", 1);
        this._imgProgress.setUnifySizeEnabled(false);
        this._imgProgress.ignoreContentAdaptWithSize(false);
        this._imgProgress.setScale9Enabled(true);
        this._imgProgress.setCapInsets(cc.rect(83, 2, 87, 4));
        this._imgProgress.setContentSize(cc.size(315, 8));
        this._imgProgress.setTouchEnabled(false);

        ///// # _imgBag
        this._imgBag = new ccui.ImageView();
        this._imgBag.setName("_imgBag");
        this._imgProgress.addChild(this._imgBag);
        this._imgBag.setCascadeOpacityEnabled(true);
        this._imgBag.setCascadeColorEnabled(true);
        this._imgBag.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBag, -0.0508, 0.5);
        let _imgBagLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBag);
        _imgBagLayoutComponent.setPositionPercentYEnabled(true);
        _imgBagLayoutComponent.setPositionPercentY(0.5);
        this._imgBag.loadTexture("basics/bags/Bag_00_00.png", 1);
        this._imgBag.setUnifySizeEnabled(false);
        this._imgBag.ignoreContentAdaptWithSize(false);
        this._imgBag.setContentSize(cc.size(41, 38));
        this._imgBag.setTouchEnabled(false);

    },



});

/**
 * Create AccumulateTokenWidget
 * @returns {_ccs.AccumulateTokenWidget}
 */
_ccs.AccumulateTokenWidget.create = function () {
    return new _ccs.AccumulateTokenWidget();
};
