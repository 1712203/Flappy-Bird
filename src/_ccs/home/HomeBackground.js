/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.HomeBackground
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.HomeBackground = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.Layout} */
    _layoutBgr: null,
    /** @type {ccui.Layout} */
    _layoutNPC: null,
    /** @type {ccui.ImageView} */
    _imgTable: null,


    /**
     * _ccs.HomeBackground constructor
     * @constructor
     */
    ctor: function () {
        cc.Layer.prototype.ctor.call(this);
        this.setCascadeOpacityEnabled(true);
        if (PlatformUtils.hasNotch())
            this._initNotch();
        this._initCCSChildren();
    },

    /**
     * Init notch for main layer
     * @private
     */
    _initNotch: function () {
        let notchHeight = PlatformUtils.NOTCH_HEIGHT;
        let marginBottom = PlatformUtils.MARGIN_BOTTOM;
        this.height = this.height - (notchHeight + marginBottom);
        this.setPosition(0, marginBottom);
    },

    /**
     * Init full screen background
     * @private
     */
    _initFullScreenBackground: function (background) {
        if (!PlatformUtils.hasNotch()) return;
        let backgroundScaleHeight = background.height / background.getParent().height;
        let notchHeight = PlatformUtils.NOTCH_HEIGHT;
        let marginBottom = PlatformUtils.MARGIN_BOTTOM;
        background.height = cc.winSize.height * backgroundScaleHeight;
        background.setAnchorPoint(0.5, 0.5);
        background.setPosition(cc.winSize.width * 0.5, background.height * 0.5 - marginBottom);
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
        ck.UIUtils.setPositionPercent(this._root, 0.5, 0.5);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        _rootLayoutComponent.setPositionPercentXEnabled(true);
        _rootLayoutComponent.setPositionPercentX(0.5);
        _rootLayoutComponent.setPositionPercentYEnabled(true);
        _rootLayoutComponent.setPositionPercentY(0.5);
        _rootLayoutComponent.setPercentWidthEnabled(true);
        _rootLayoutComponent.setPercentWidth(1);
        _rootLayoutComponent.setPercentHeightEnabled(true);
        _rootLayoutComponent.setPercentHeight(1);
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._root, 1, 1);

        ///// # _layoutBgr
        this._layoutBgr = new ccui.Layout();
        this._layoutBgr.setName("_layoutBgr");
        this._root.addChild(this._layoutBgr);
        this._layoutBgr.setCascadeOpacityEnabled(true);
        this._layoutBgr.setCascadeColorEnabled(true);
        let _layoutBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBgr);
        _layoutBgrLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBgrLayoutComponent.setPositionPercentX(0);
        _layoutBgrLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBgrLayoutComponent.setPositionPercentY(0);
        _layoutBgrLayoutComponent.setPercentWidthEnabled(true);
        _layoutBgrLayoutComponent.setPercentWidth(1);
        _layoutBgrLayoutComponent.setPercentHeightEnabled(true);
        _layoutBgrLayoutComponent.setPercentHeight(1);
        this._layoutBgr.setTouchEnabled(true);
        this._layoutBgr.setUnifySizeEnabled(false);
        this._layoutBgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBgr, 1, 1);

        ///// # _layoutNPC
        this._layoutNPC = new ccui.Layout();
        this._layoutNPC.setName("_layoutNPC");
        this._root.addChild(this._layoutNPC);
        this._layoutNPC.setCascadeOpacityEnabled(true);
        this._layoutNPC.setCascadeColorEnabled(true);
        this._layoutNPC.setAnchorPoint(cc.p(0.5, 0.3));
        ck.UIUtils.setPositionPercent(this._layoutNPC, 0.5, 0.3);
        let _layoutNPCLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutNPC);
        _layoutNPCLayoutComponent.setPositionPercentXEnabled(true);
        _layoutNPCLayoutComponent.setPositionPercentX(0.5);
        _layoutNPCLayoutComponent.setPositionPercentYEnabled(true);
        _layoutNPCLayoutComponent.setPositionPercentY(0.3);
        _layoutNPCLayoutComponent.setPercentWidthEnabled(true);
        _layoutNPCLayoutComponent.setPercentWidth(1);
        this._layoutNPC.setTouchEnabled(true);
        this._layoutNPC.setUnifySizeEnabled(false);
        this._layoutNPC.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutNPC, 1);
        this._layoutNPC.setContentSize(cc.size(this._layoutNPC.width, 1136));

        ///// # _imgTable
        this._imgTable = new ccui.ImageView();
        this._imgTable.setName("_imgTable");
        this._layoutNPC.addChild(this._imgTable);
        this._imgTable.setCascadeOpacityEnabled(true);
        this._imgTable.setCascadeColorEnabled(true);
        this._imgTable.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTable, 0, 0.5);
        let _imgTableLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTable);
        _imgTableLayoutComponent.setPositionPercentXEnabled(true);
        _imgTableLayoutComponent.setPositionPercentX(0);
        _imgTableLayoutComponent.setPositionPercentYEnabled(true);
        _imgTableLayoutComponent.setPositionPercentY(0.5);
        this._imgTable.loadTexture("sprites/backgrounds/BG_Table.png", 0);
        this._imgTable.setUnifySizeEnabled(false);
        this._imgTable.ignoreContentAdaptWithSize(false);
        this._imgTable.setContentSize(cc.size(621, 851));
        this._imgTable.setTouchEnabled(false);

    },



});

/**
 * Create HomeBackground
 * @returns {_ccs.HomeBackground}
 */
_ccs.HomeBackground.create = function () {
    return new _ccs.HomeBackground();
};
