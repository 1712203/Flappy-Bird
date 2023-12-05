/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.Hand
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.Hand = ccui.Widget.extend({

    /** @type {cc.Sprite} */
    _ringShine: null,
    /** @type {cc.Sprite} */
    _hand: null,


    /**
     * _ccs.Hand constructor
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

        ///// # _ringShine
        this._ringShine = new cc.Sprite();
        this._ringShine.setName("_ringShine");
        this.addChild(this._ringShine);
        this._ringShine.setCascadeOpacityEnabled(true);
        this._ringShine.setCascadeColorEnabled(true);
        this._ringShine.setAnchorPoint(cc.p(0.5, 0.5));
        this._ringShine.setPosition(0, 0.684);
        this._ringShine.setScale(1.5, 1.5);
        let _ringShineLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._ringShine);
        let sf = cc.spriteFrameCache.getSpriteFrame("basics/effects/RingShine.png"); if (sf) this._ringShine.setSpriteFrame(sf);
        let _ringShineBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _ringShineBlendFunc.src = 1;
        _ringShineBlendFunc.dst = 771;
        this._ringShine.setBlendFunc(_ringShineBlendFunc);

        ///// # _hand
        this._hand = new cc.Sprite();
        this._hand.setName("_hand");
        this.addChild(this._hand);
        this._hand.setCascadeOpacityEnabled(true);
        this._hand.setCascadeColorEnabled(true);
        this._hand.setAnchorPoint(cc.p(0, 1));
        let _handLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._hand);
        let sf = cc.spriteFrameCache.getSpriteFrame("icons/color/other/Hand.png"); if (sf) this._hand.setSpriteFrame(sf);
        let _handBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _handBlendFunc.src = 1;
        _handBlendFunc.dst = 771;
        this._hand.setBlendFunc(_handBlendFunc);

    },



});

/**
 * Create Hand
 * @returns {_ccs.Hand}
 */
_ccs.Hand.create = function () {
    return new _ccs.Hand();
};
