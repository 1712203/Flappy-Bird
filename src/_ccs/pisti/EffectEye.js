/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.EffectEye
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.EffectEye = ccui.Widget.extend({

    /** @type {cc.Sprite} */
    _light01: null,
    /** @type {cc.Sprite} */
    _light02: null,
    /** @type {cc.Sprite} */
    _eye01: null,
    /** @type {cc.Sprite} */
    _eye02: null,


    /**
     * _ccs.EffectEye constructor
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

        ///// # _light01
        this._light01 = new cc.Sprite();
        this._light01.setName("_light01");
        this.addChild(this._light01);
        this._light01.setCascadeOpacityEnabled(true);
        this._light01.setCascadeColorEnabled(true);
        this._light01.setAnchorPoint(cc.p(0.5, 0.5));
        this._light01.setPosition(0.9554, 2.8591);
        this._light01.setScale(0.1, 0.1);
        this._light01.setRotation(180);
        this._light01.setOpacity(0);
        this._light01.setColor(cc.color(255, 255, 0, 255));
        let _light01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light01);
        let sf = cc.spriteFrameCache.getSpriteFrame("game/effects/Light_02.png"); if (sf) this._light01.setSpriteFrame(sf);
        let _light01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _light01BlendFunc.src = 770;
        _light01BlendFunc.dst = 1;
        this._light01.setBlendFunc(_light01BlendFunc);

        ///// # _light02
        this._light02 = new cc.Sprite();
        this._light02.setName("_light02");
        this.addChild(this._light02);
        this._light02.setCascadeOpacityEnabled(true);
        this._light02.setCascadeColorEnabled(true);
        this._light02.setAnchorPoint(cc.p(0.5, 0.5));
        this._light02.setPosition(-9.0444, 12.8591);
        this._light02.setScale(0.1, 0.1);
        this._light02.setRotation(180);
        this._light02.setOpacity(0);
        let _light02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light02);
        let sf = cc.spriteFrameCache.getSpriteFrame("game/effects/Light_02.png"); if (sf) this._light02.setSpriteFrame(sf);
        let _light02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _light02BlendFunc.src = 770;
        _light02BlendFunc.dst = 1;
        this._light02.setBlendFunc(_light02BlendFunc);

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

    },


    playCCSAnimShow: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimShow();
    
        let _light01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(10 / (30 * speed), 5, 5),
                    cc.scaleTo(5 / (30 * speed), 6.5, 6.5),
                    cc.scaleTo(25 / (30 * speed), 10, 10)
                ),
                cc.sequence(
                    cc.fadeTo(5 / (30 * speed), 255),
                    cc.fadeTo(35 / (30 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._light01.setScale(0.1, 0.1);
                this._light01.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _light01Action = _light01Action.repeatForever();
        } else _light01Action = cc.sequence(
            cc.delayTime(delay),
            _light01Action.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._light01.runAction(_light01Action);
    
        let _light02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(10 / (30 * speed), 5, 5),
                    cc.scaleTo(5 / (30 * speed), 6.5, 6.5),
                    cc.scaleTo(25 / (30 * speed), 10, 10)
                ),
                cc.sequence(
                    cc.fadeTo(5 / (30 * speed), 255),
                    cc.fadeTo(35 / (30 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._light02.setScale(0.1, 0.1);
                this._light02.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _light02Action = _light02Action.repeatForever();
        } else _light02Action = cc.sequence(
            cc.delayTime(delay),
            _light02Action.repeat(repeat)
        )
        
        this._light02.runAction(_light02Action);
    
        let _eye01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(10 / (30 * speed), 1.2, 1.2),
                    cc.scaleTo(3 / (30 * speed), 0.9, 0.9),
                    cc.scaleTo(2 / (30 * speed), 1, 1),
                    cc.scaleTo(25 / (30 * speed), 1.2, 1.2)
                ),
                cc.sequence(
                    cc.fadeTo(10 / (30 * speed), 255),
                    cc.fadeTo(10 / (30 * speed), 255),
                    cc.fadeTo(18 / (30 * speed), 0),
                    cc.delayTime(2 / (30 * speed))
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
    
        let _eye02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(10 / (30 * speed), 1.2, 1.2),
                    cc.scaleTo(5 / (30 * speed), 1.5, 1.5),
                    cc.scaleTo(25 / (30 * speed), 3, 3)
                ),
                cc.sequence(
                    cc.fadeTo(10 / (30 * speed), 127),
                    cc.fadeTo(10 / (30 * speed), 0),
                    cc.delayTime(20 / (30 * speed))
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
    },

    resetCCSAnimShow: function () {
        this._light01.stopAllActions();
        this._light01.setScale(0.1, 0.1);
        this._light01.setOpacity(0);
    
        this._light02.stopAllActions();
        this._light02.setScale(0.1, 0.1);
        this._light02.setOpacity(0);
    
        this._eye01.stopAllActions();
        this._eye01.setScale(0.1, 0.1);
        this._eye01.setOpacity(0);
    
        this._eye02.stopAllActions();
        this._eye02.setScale(0.1, 0.1);
        this._eye02.setOpacity(0);
    }
});

/**
 * Create EffectEye
 * @returns {_ccs.EffectEye}
 */
_ccs.EffectEye.create = function () {
    return new _ccs.EffectEye();
};
