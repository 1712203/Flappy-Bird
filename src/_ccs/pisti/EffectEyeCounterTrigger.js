/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.EffectEyeCounterTrigger
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.EffectEyeCounterTrigger = ccui.Widget.extend({

    /** @type {cc.Sprite} */
    _glow03: null,
    /** @type {cc.Sprite} */
    _eye02: null,
    /** @type {cc.Sprite} */
    _eye01: null,
    /** @type {cc.Sprite} */
    _forbidden: null,
    /** @type {cc.Sprite} */
    _glow01: null,
    /** @type {cc.Sprite} */
    _glow02: null,


    /**
     * _ccs.EffectEyeCounterTrigger constructor
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

        ///// # _glow03
        this._glow03 = new cc.Sprite();
        this._glow03.setName("_glow03");
        this.addChild(this._glow03);
        this._glow03.setCascadeOpacityEnabled(true);
        this._glow03.setCascadeColorEnabled(true);
        this._glow03.setAnchorPoint(cc.p(0.5, 0.5));
        this._glow03.setPosition(1.0431, 6.8134);
        this._glow03.setScale(0.1, 0.1);
        this._glow03.setOpacity(0);
        let _glow03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._glow03);
        let sf = cc.spriteFrameCache.getSpriteFrame("game/effects/Glow_03.png"); if (sf) this._glow03.setSpriteFrame(sf);
        let _glow03BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _glow03BlendFunc.src = 1;
        _glow03BlendFunc.dst = 771;
        this._glow03.setBlendFunc(_glow03BlendFunc);

        ///// # _eye02
        this._eye02 = new cc.Sprite();
        this._eye02.setName("_eye02");
        this.addChild(this._eye02);
        this._eye02.setCascadeOpacityEnabled(true);
        this._eye02.setCascadeColorEnabled(true);
        this._eye02.setAnchorPoint(cc.p(0.5, 0.5));
        this._eye02.setScale(0.1, 0.1);
        this._eye02.setOpacity(0);
        let _eye02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._eye02);
        let sf = cc.spriteFrameCache.getSpriteFrame("game/effects/Eye.png"); if (sf) this._eye02.setSpriteFrame(sf);
        let _eye02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _eye02BlendFunc.src = 770;
        _eye02BlendFunc.dst = 1;
        this._eye02.setBlendFunc(_eye02BlendFunc);

        ///// # _eye01
        this._eye01 = new cc.Sprite();
        this._eye01.setName("_eye01");
        this.addChild(this._eye01);
        this._eye01.setCascadeOpacityEnabled(true);
        this._eye01.setCascadeColorEnabled(true);
        this._eye01.setAnchorPoint(cc.p(0.5, 0.5));
        this._eye01.setScale(0.1, 0.1);
        this._eye01.setOpacity(0);
        let _eye01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._eye01);
        let sf = cc.spriteFrameCache.getSpriteFrame("game/effects/Eye.png"); if (sf) this._eye01.setSpriteFrame(sf);
        let _eye01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _eye01BlendFunc.src = 1;
        _eye01BlendFunc.dst = 771;
        this._eye01.setBlendFunc(_eye01BlendFunc);

        ///// # _forbidden
        this._forbidden = new cc.Sprite();
        this._forbidden.setName("_forbidden");
        this.addChild(this._forbidden);
        this._forbidden.setCascadeOpacityEnabled(true);
        this._forbidden.setCascadeColorEnabled(true);
        this._forbidden.setAnchorPoint(cc.p(0.5, 0.5));
        this._forbidden.setPosition(0.2487, 4.6653);
        this._forbidden.setScale(0.1, 0.1);
        this._forbidden.setOpacity(0);
        let _forbiddenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._forbidden);
        let sf = cc.spriteFrameCache.getSpriteFrame("game/effects/Forbidden.png"); if (sf) this._forbidden.setSpriteFrame(sf);
        let _forbiddenBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _forbiddenBlendFunc.src = 1;
        _forbiddenBlendFunc.dst = 771;
        this._forbidden.setBlendFunc(_forbiddenBlendFunc);

        ///// # _glow01
        this._glow01 = new cc.Sprite();
        this._glow01.setName("_glow01");
        this.addChild(this._glow01);
        this._glow01.setCascadeOpacityEnabled(true);
        this._glow01.setCascadeColorEnabled(true);
        this._glow01.setAnchorPoint(cc.p(0.5, 0.5));
        this._glow01.setPosition(0.4922, 1.4426);
        this._glow01.setScale(0.1, 0.1);
        this._glow01.setOpacity(0);
        let _glow01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._glow01);
        let sf = cc.spriteFrameCache.getSpriteFrame("game/effects/Glow_01.png"); if (sf) this._glow01.setSpriteFrame(sf);
        let _glow01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _glow01BlendFunc.src = 1;
        _glow01BlendFunc.dst = 771;
        this._glow01.setBlendFunc(_glow01BlendFunc);

        ///// # _glow02
        this._glow02 = new cc.Sprite();
        this._glow02.setName("_glow02");
        this.addChild(this._glow02);
        this._glow02.setCascadeOpacityEnabled(true);
        this._glow02.setCascadeColorEnabled(true);
        this._glow02.setAnchorPoint(cc.p(0.5, 0.5));
        this._glow02.setPosition(3.5461, -0.0126);
        this._glow02.setScale(1.2, 1.2);
        this._glow02.setOpacity(0);
        let _glow02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._glow02);
        let sf = cc.spriteFrameCache.getSpriteFrame("game/effects/Glow_02.png"); if (sf) this._glow02.setSpriteFrame(sf);
        let _glow02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _glow02BlendFunc.src = 1;
        _glow02BlendFunc.dst = 771;
        this._glow02.setBlendFunc(_glow02BlendFunc);

    },


    playCCSAnimShow: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimShow();
    
        let _glow03Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(6 / (30 * speed), 0.1, 0.1),
                    cc.scaleTo(7 / (30 * speed), 1, 1),
                    cc.scaleTo(32 / (30 * speed), 1, 1)
                ),
                cc.sequence(
                    cc.fadeTo(6 / (30 * speed), 0),
                    cc.fadeTo(7 / (30 * speed), 255),
                    cc.fadeTo(16 / (30 * speed), 255),
                    cc.fadeTo(9 / (30 * speed), 0),
                    cc.fadeTo(7 / (30 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._glow03.setScale(0.1, 0.1);
                this._glow03.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _glow03Action = _glow03Action.repeatForever();
        } else _glow03Action = cc.sequence(
            cc.delayTime(delay),
            _glow03Action.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._glow03.runAction(_glow03Action);
    
        let _eye02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(13 / (30 * speed), 1.2, 1.2),
                    cc.scaleTo(7 / (30 * speed), 1.5, 1.5),
                    cc.scaleTo(25 / (30 * speed), 3, 3)
                ),
                cc.sequence(
                    cc.fadeTo(13 / (30 * speed), 127),
                    cc.fadeTo(16 / (30 * speed), 0),
                    cc.fadeTo(16 / (30 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._eye02.setScale(0.1, 0.1);
                this._eye02.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _eye02Action = _eye02Action.repeatForever();
        } else _eye02Action = cc.sequence(
            cc.delayTime(delay),
            _eye02Action.repeat(repeat)
        )
        
        this._eye02.runAction(_eye02Action);
    
        let _eye01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(13 / (30 * speed), 1.2, 1.2),
                    cc.scaleTo(3 / (30 * speed), 0.9, 0.9),
                    cc.scaleTo(4 / (30 * speed), 1, 1),
                    cc.scaleTo(25 / (30 * speed), 1.2, 1.2)
                ),
                cc.sequence(
                    cc.fadeTo(13 / (30 * speed), 255),
                    cc.fadeTo(16 / (30 * speed), 255),
                    cc.fadeTo(12 / (30 * speed), 0),
                    cc.fadeTo(4 / (30 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._eye01.setScale(0.1, 0.1);
                this._eye01.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _eye01Action = _eye01Action.repeatForever();
        } else _eye01Action = cc.sequence(
            cc.delayTime(delay),
            _eye01Action.repeat(repeat)
        )
        
        this._eye01.runAction(_eye01Action);
    
        let _forbiddenAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(13 / (30 * speed), 0.1, 0.1),
                    cc.scaleTo(7 / (30 * speed), 1, 1),
                    cc.scaleTo(3 / (30 * speed), 0.9, 0.9),
                    cc.scaleTo(1 / (30 * speed), 1, 1),
                    cc.scaleTo(9 / (30 * speed), 1, 1),
                    cc.scaleTo(12 / (30 * speed), 1, 1)
                ),
                cc.sequence(
                    cc.fadeTo(16 / (30 * speed), 0),
                    cc.fadeTo(7 / (30 * speed), 255),
                    cc.fadeTo(15 / (30 * speed), 255),
                    cc.fadeTo(7 / (30 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._forbidden.setScale(0.1, 0.1);
                this._forbidden.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _forbiddenAction = _forbiddenAction.repeatForever();
        } else _forbiddenAction = cc.sequence(
            cc.delayTime(delay),
            _forbiddenAction.repeat(repeat)
        )
        
        this._forbidden.runAction(_forbiddenAction);
    
        let _glow01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(6 / (30 * speed), 0.1, 0.1),
                    cc.scaleTo(11 / (30 * speed), 1.5, 1.5),
                    cc.scaleTo(4 / (30 * speed), 1, 1),
                    cc.scaleTo(2 / (30 * speed), 1.2, 1.2),
                    cc.scaleTo(22 / (30 * speed), 1.2, 1.2)
                ),
                cc.sequence(
                    cc.fadeTo(8 / (30 * speed), 0),
                    cc.fadeTo(7 / (30 * speed), 255),
                    cc.fadeTo(18 / (30 * speed), 255),
                    cc.fadeTo(12 / (30 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._glow01.setScale(0.1, 0.1);
                this._glow01.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _glow01Action = _glow01Action.repeatForever();
        } else _glow01Action = cc.sequence(
            cc.delayTime(delay),
            _glow01Action.repeat(repeat)
        )
        
        this._glow01.runAction(_glow01Action);
    
        let _glow02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(23 / (30 * speed), 1.2, 1.2),
                    cc.scaleTo(22 / (30 * speed), 2.5, 2.5)
                ),
                cc.sequence(
                    cc.fadeTo(17 / (30 * speed), 0),
                    cc.fadeTo(6 / (30 * speed), 255),
                    cc.fadeTo(15 / (30 * speed), 0),
                    cc.fadeTo(7 / (30 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._glow02.setScale(1.2, 1.2);
                this._glow02.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _glow02Action = _glow02Action.repeatForever();
        } else _glow02Action = cc.sequence(
            cc.delayTime(delay),
            _glow02Action.repeat(repeat)
        )
        
        this._glow02.runAction(_glow02Action);
    },

    resetCCSAnimShow: function () {
        this._glow03.stopAllActions();
        this._glow03.setScale(0.1, 0.1);
        this._glow03.setOpacity(0);
    
        this._eye02.stopAllActions();
        this._eye02.setScale(0.1, 0.1);
        this._eye02.setOpacity(0);
    
        this._eye01.stopAllActions();
        this._eye01.setScale(0.1, 0.1);
        this._eye01.setOpacity(0);
    
        this._forbidden.stopAllActions();
        this._forbidden.setScale(0.1, 0.1);
        this._forbidden.setOpacity(0);
    
        this._glow01.stopAllActions();
        this._glow01.setScale(0.1, 0.1);
        this._glow01.setOpacity(0);
    
        this._glow02.stopAllActions();
        this._glow02.setScale(1.2, 1.2);
        this._glow02.setOpacity(0);
    }
});

/**
 * Create EffectEyeCounterTrigger
 * @returns {_ccs.EffectEyeCounterTrigger}
 */
_ccs.EffectEyeCounterTrigger.create = function () {
    return new _ccs.EffectEyeCounterTrigger();
};
