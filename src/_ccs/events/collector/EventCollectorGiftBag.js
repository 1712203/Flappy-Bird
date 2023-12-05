/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.EventCollectorGiftBag
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.EventCollectorGiftBag = ccui.Widget.extend({

    /** @type {cc.Sprite} */
    _spriteBot: null,
    /** @type {ccui.ImageView} */
    _imgBag: null,


    /**
     * _ccs.EventCollectorGiftBag constructor
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

        ///// # _spriteBot
        this._spriteBot = new cc.Sprite();
        this._spriteBot.setName("_spriteBot");
        this.addChild(this._spriteBot);
        this._spriteBot.setCascadeOpacityEnabled(true);
        this._spriteBot.setCascadeColorEnabled(true);
        this._spriteBot.setAnchorPoint(cc.p(0.5, 0.5));
        let _spriteBotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteBot);
        let sf = cc.spriteFrameCache.getSpriteFrame("event-collector/Pillow.png"); if (sf) this._spriteBot.setSpriteFrame(sf);
        let _spriteBotBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteBotBlendFunc.src = 1;
        _spriteBotBlendFunc.dst = 771;
        this._spriteBot.setBlendFunc(_spriteBotBlendFunc);

        ///// # _imgBag
        this._imgBag = new ccui.ImageView();
        this._imgBag.setName("_imgBag");
        this.addChild(this._imgBag);
        this._imgBag.setCascadeOpacityEnabled(true);
        this._imgBag.setCascadeColorEnabled(true);
        this._imgBag.setAnchorPoint(cc.p(0.5, 0));
        this._imgBag.setPosition(0, -10.9998);
        let _imgBagLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBag);
        this._imgBag.loadTexture("event-collector/Bag_01.png", 1);
        this._imgBag.setUnifySizeEnabled(false);
        this._imgBag.ignoreContentAdaptWithSize(false);
        this._imgBag.setContentSize(cc.size(184, 162));
        this._imgBag.setTouchEnabled(false);

    },



});

/**
 * Create EventCollectorGiftBag
 * @returns {_ccs.EventCollectorGiftBag}
 */
_ccs.EventCollectorGiftBag.create = function () {
    return new _ccs.EventCollectorGiftBag();
};
