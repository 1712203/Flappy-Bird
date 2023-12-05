/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.InventoryPanel
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.InventoryPanel = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {cc.Node} */
    _nodeContent: null,
    /** @type {ccui.ImageView} */
    _imgCollapseExpand: null,
    /** @type {ccui.ImageView} */
    _imgArrow: null,


    /**
     * _ccs.InventoryPanel constructor
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
        this._root.setAnchorPoint(cc.p(0.5, 1));
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(false);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(100, 300));
        this._root.setClippingEnabled(true);

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._root.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBgr, 0.5, 1);
        let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
        _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentY(1);
        _imgBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrLayoutComponent.setPercentWidth(1);
        _imgBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrLayoutComponent.setPercentHeight(1);
        this._imgBgr.loadTexture("basics2/other/Box_02.png", 1);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setScale9Enabled(true);
        this._imgBgr.setCapInsets(cc.rect(40, 40, 18, 18));
        ck.UIUtils.setSizePercent(this._imgBgr, 1, 1);
        this._imgBgr.setTouchEnabled(false);

        ///// # _nodeContent
        this._nodeContent = new cc.Node();
        this._nodeContent.setName("_nodeContent");
        this._root.addChild(this._nodeContent);
        this._nodeContent.setCascadeOpacityEnabled(true);
        this._nodeContent.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeContent, 0.5, 1);
        let _nodeContentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeContent);
        _nodeContentLayoutComponent.setPositionPercentXEnabled(true);
        _nodeContentLayoutComponent.setPositionPercentX(0.5);
        _nodeContentLayoutComponent.setPositionPercentYEnabled(true);
        _nodeContentLayoutComponent.setPositionPercentY(1);

        ///// # _imgCollapseExpand
        this._imgCollapseExpand = new ccui.ImageView();
        this._imgCollapseExpand.setName("_imgCollapseExpand");
        this.addChild(this._imgCollapseExpand);
        this._imgCollapseExpand.setCascadeOpacityEnabled(true);
        this._imgCollapseExpand.setCascadeColorEnabled(true);
        this._imgCollapseExpand.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCollapseExpand.setPosition(-0.8649, -300);
        this._imgCollapseExpand.setVisible(false);
        this._imgCollapseExpand.setFlippedY(true);
        let _imgCollapseExpandLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCollapseExpand);
        this._imgCollapseExpand.loadTexture("buttons/circles/Gray.png", 1);
        this._imgCollapseExpand.setUnifySizeEnabled(false);
        this._imgCollapseExpand.ignoreContentAdaptWithSize(false);
        this._imgCollapseExpand.setContentSize(cc.size(40, 40));
        this._imgCollapseExpand.setTouchEnabled(true);
        this._imgCollapseExpand.setFlippedY(true);

        ///// # _imgArrow
        this._imgArrow = new ccui.ImageView();
        this._imgArrow.setName("_imgArrow");
        this._imgCollapseExpand.addChild(this._imgArrow);
        this._imgArrow.setCascadeOpacityEnabled(true);
        this._imgArrow.setCascadeColorEnabled(true);
        this._imgArrow.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgArrow, 0.5, 0.5);
        let _imgArrowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgArrow);
        _imgArrowLayoutComponent.setPositionPercentXEnabled(true);
        _imgArrowLayoutComponent.setPositionPercentX(0.5);
        _imgArrowLayoutComponent.setPositionPercentYEnabled(true);
        _imgArrowLayoutComponent.setPositionPercentY(0.5);
        this._imgArrow.loadTexture("icons/flat/ArrowDown.png", 1);
        this._imgArrow.setUnifySizeEnabled(false);
        this._imgArrow.ignoreContentAdaptWithSize(false);
        this._imgArrow.setContentSize(cc.size(25.1328, 14.6601));
        this._imgArrow.setTouchEnabled(false);

    },



});

/**
 * Create InventoryPanel
 * @returns {_ccs.InventoryPanel}
 */
_ccs.InventoryPanel.create = function () {
    return new _ccs.InventoryPanel();
};
