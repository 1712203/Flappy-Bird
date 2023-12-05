/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.SlotThreeSlot
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.SlotThreeSlot = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _layoutNeedle: null,
    /** @type {ccui.Layout} */
    _layoutContainer: null,
    /** @type {cc.Node} */
    _nodeItemsControl: null,


    /**
     * _ccs.SlotThreeSlot constructor
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

        ///// # _root
        this._root = new ccui.Layout();
        this._root.setName("_root");
        this.addChild(this._root);
        this._root.setCascadeOpacityEnabled(true);
        this._root.setCascadeColorEnabled(true);
        this._root.setAnchorPoint(cc.p(0.5, 0.5));
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(120.02, 175.61));
        this._root.setClippingEnabled(true);

        ///// # _layoutNeedle
        this._layoutNeedle = new ccui.ImageView();
        this._layoutNeedle.setName("_layoutNeedle");
        this._root.addChild(this._layoutNeedle);
        this._layoutNeedle.setCascadeOpacityEnabled(true);
        this._layoutNeedle.setCascadeColorEnabled(true);
        this._layoutNeedle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutNeedle, 0.5, 0.5);
        this._layoutNeedle.setVisible(false);
        let _layoutNeedleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutNeedle);
        _layoutNeedleLayoutComponent.setPositionPercentXEnabled(true);
        _layoutNeedleLayoutComponent.setPositionPercentX(0.5);
        _layoutNeedleLayoutComponent.setPositionPercentYEnabled(true);
        _layoutNeedleLayoutComponent.setPositionPercentY(0.5);
        _layoutNeedleLayoutComponent.setPercentWidthEnabled(true);
        _layoutNeedleLayoutComponent.setPercentWidth(1);
        _layoutNeedleLayoutComponent.setPercentHeightEnabled(true);
        _layoutNeedleLayoutComponent.setPercentHeight(0.2619);
        this._layoutNeedle.loadTexture("Default/ImageFile.png", 0);
        this._layoutNeedle.setUnifySizeEnabled(false);
        this._layoutNeedle.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutNeedle, 1, 0.2619);
        this._layoutNeedle.setTouchEnabled(false);

        ///// # _layoutContainer
        this._layoutContainer = new ccui.Layout();
        this._layoutContainer.setName("_layoutContainer");
        this._root.addChild(this._layoutContainer);
        this._layoutContainer.setCascadeOpacityEnabled(true);
        this._layoutContainer.setCascadeColorEnabled(true);
        this._layoutContainer.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutContainer, 0.5, 0.5);
        let _layoutContainerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutContainer);
        _layoutContainerLayoutComponent.setPositionPercentXEnabled(true);
        _layoutContainerLayoutComponent.setPositionPercentX(0.5);
        _layoutContainerLayoutComponent.setPositionPercentYEnabled(true);
        _layoutContainerLayoutComponent.setPositionPercentY(0.5);
        _layoutContainerLayoutComponent.setPercentWidthEnabled(true);
        _layoutContainerLayoutComponent.setPercentWidth(1);
        _layoutContainerLayoutComponent.setPercentHeightEnabled(true);
        _layoutContainerLayoutComponent.setPercentHeight(1);
        this._layoutContainer.setTouchEnabled(false);
        this._layoutContainer.setUnifySizeEnabled(false);
        this._layoutContainer.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutContainer, 1, 1);
        this._layoutContainer.setClippingEnabled(true);

        ///// # _nodeItemsControl
        this._nodeItemsControl = new cc.Node();
        this._nodeItemsControl.setName("_nodeItemsControl");
        this._layoutContainer.addChild(this._nodeItemsControl);
        this._nodeItemsControl.setCascadeOpacityEnabled(true);
        this._nodeItemsControl.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeItemsControl, 0.5, 0.5);
        let _nodeItemsControlLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeItemsControl);
        _nodeItemsControlLayoutComponent.setPositionPercentXEnabled(true);
        _nodeItemsControlLayoutComponent.setPositionPercentX(0.5);
        _nodeItemsControlLayoutComponent.setPositionPercentYEnabled(true);
        _nodeItemsControlLayoutComponent.setPositionPercentY(0.5);

    },



});

/**
 * Create SlotThreeSlot
 * @returns {_ccs.SlotThreeSlot}
 */
_ccs.SlotThreeSlot.create = function () {
    return new _ccs.SlotThreeSlot();
};
