/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.MinigameItemLayer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.MinigameItemLayer = cc.Layer.extend({

    /** @type {ItemTip} */
    _itemTip: null,
    /** @type {cc.Node} */
    _nodeIcon: null,
    /** @type {SkillIcon} */
    _itemIcon: null,


    /**
     * _ccs.MinigameItemLayer constructor
     * @constructor
     */
    ctor: function () {
        cc.Layer.prototype.ctor.call(this);
        this.setCascadeOpacityEnabled(true);
        this._initCCSChildren();
    },

    /**
     * Init nodes from ccs
     * @private
     */
    _initCCSChildren: function () {

        ///// # _itemTip
        this._itemTip = new ItemTip();
        this._itemTip.setName("_itemTip");
        this.addChild(this._itemTip);
        this._itemTip.setCascadeOpacityEnabled(true);
        this._itemTip.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._itemTip, 0.1816, 0.1499);
        let _itemTipLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._itemTip);

        ///// # _nodeIcon
        this._nodeIcon = new cc.Node();
        this._nodeIcon.setName("_nodeIcon");
        this.addChild(this._nodeIcon);
        this._nodeIcon.setCascadeOpacityEnabled(true);
        this._nodeIcon.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeIcon, 0.1005, 0.1492);
        let _nodeIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeIcon);

        ///// # _itemIcon
        this._itemIcon = new SkillIcon();
        this._itemIcon.setName("_itemIcon");
        this._nodeIcon.addChild(this._itemIcon);
        this._itemIcon.setCascadeOpacityEnabled(true);
        this._itemIcon.setCascadeColorEnabled(true);
        let _itemIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._itemIcon);

    },



});

/**
 * Create MinigameItemLayer
 * @returns {_ccs.MinigameItemLayer}
 */
_ccs.MinigameItemLayer.create = function () {
    return new _ccs.MinigameItemLayer();
};
