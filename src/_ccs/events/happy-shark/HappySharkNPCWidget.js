/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.HappySharkNPCWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.HappySharkNPCWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {cc.Sprite} */
    _spriteShark: null,


    /**
     * _ccs.HappySharkNPCWidget constructor
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
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(200, 200));

        ///// # _spriteShark
        this._spriteShark = new cc.Sprite();
        this._spriteShark.setName("_spriteShark");
        this._layoutRoot.addChild(this._spriteShark);
        this._spriteShark.setCascadeOpacityEnabled(true);
        this._spriteShark.setCascadeColorEnabled(true);
        this._spriteShark.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteShark, 0.3, 0.5);
        let _spriteSharkLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteShark);
        _spriteSharkLayoutComponent.setPositionPercentXEnabled(true);
        _spriteSharkLayoutComponent.setPositionPercentX(0.3);
        _spriteSharkLayoutComponent.setPositionPercentYEnabled(true);
        _spriteSharkLayoutComponent.setPositionPercentY(0.5);
        let sf = cc.spriteFrameCache.getSpriteFrame("happy-shark/npc/idle/Idle_00000.png"); if (sf) this._spriteShark.setSpriteFrame(sf);
        let _spriteSharkBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteSharkBlendFunc.src = 1;
        _spriteSharkBlendFunc.dst = 771;
        this._spriteShark.setBlendFunc(_spriteSharkBlendFunc);

    },



});

/**
 * Create HappySharkNPCWidget
 * @returns {_ccs.HappySharkNPCWidget}
 */
_ccs.HappySharkNPCWidget.create = function () {
    return new _ccs.HappySharkNPCWidget();
};
