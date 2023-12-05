/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.BroadcastWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.BroadcastWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ccui.Layout} */
    _layoutClipper: null,


    /**
     * _ccs.BroadcastWidget constructor
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
        this._root.setTouchEnabled(false);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(640, 100));

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._root.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.5);
        this._imgBackground.setOpacity(127);
        this._imgBackground.setColor(cc.color(0, 0, 0, 255));
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundLayoutComponent.setPercentWidth(1);
        _imgBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundLayoutComponent.setPercentHeight(1);
        this._imgBackground.loadTexture("sprites/basics/Rounded32x32.png", 0);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setScale9Enabled(true);
        this._imgBackground.setCapInsets(cc.rect(10, 10, 12, 12));
        ck.UIUtils.setSizePercent(this._imgBackground, 1, 1);
        this._imgBackground.setTouchEnabled(false);

        ///// # _layoutClipper
        this._layoutClipper = new ccui.Layout();
        this._layoutClipper.setName("_layoutClipper");
        this._root.addChild(this._layoutClipper);
        this._layoutClipper.setCascadeOpacityEnabled(true);
        this._layoutClipper.setCascadeColorEnabled(true);
        this._layoutClipper.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutClipper, 0.5, 0.5);
        let _layoutClipperLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutClipper);
        _layoutClipperLayoutComponent.setPositionPercentXEnabled(true);
        _layoutClipperLayoutComponent.setPositionPercentX(0.5);
        _layoutClipperLayoutComponent.setPositionPercentYEnabled(true);
        _layoutClipperLayoutComponent.setPositionPercentY(0.5);
        _layoutClipperLayoutComponent.setPercentWidthEnabled(true);
        _layoutClipperLayoutComponent.setPercentWidth(0.95);
        _layoutClipperLayoutComponent.setPercentHeightEnabled(true);
        _layoutClipperLayoutComponent.setPercentHeight(0.95);
        this._layoutClipper.setTouchEnabled(false);
        this._layoutClipper.setUnifySizeEnabled(false);
        this._layoutClipper.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutClipper, 0.95, 0.95);
        this._layoutClipper.setClippingEnabled(true);

    },



});

/**
 * Create BroadcastWidget
 * @returns {_ccs.BroadcastWidget}
 */
_ccs.BroadcastWidget.create = function () {
    return new _ccs.BroadcastWidget();
};
