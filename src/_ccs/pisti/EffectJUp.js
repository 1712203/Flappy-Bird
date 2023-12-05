/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.EffectJUp
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.EffectJUp = ccui.Widget.extend({

    /** @type {cc.Sprite} */
    _arrow: null,
    /** @type {cc.Sprite} */
    _jack: null,


    /**
     * _ccs.EffectJUp constructor
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

        ///// # _arrow
        this._arrow = new cc.Sprite();
        this._arrow.setName("_arrow");
        this.addChild(this._arrow);
        this._arrow.setCascadeOpacityEnabled(true);
        this._arrow.setCascadeColorEnabled(true);
        this._arrow.setAnchorPoint(cc.p(0.5, 0));
        this._arrow.setPosition(48.7185, -36.2273);
        let _arrowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._arrow);
        let sf = cc.spriteFrameCache.getSpriteFrame("game/effects/Up.png"); if (sf) this._arrow.setSpriteFrame(sf);
        let _arrowBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _arrowBlendFunc.src = 1;
        _arrowBlendFunc.dst = 771;
        this._arrow.setBlendFunc(_arrowBlendFunc);

        ///// # _jack
        this._jack = new cc.Sprite();
        this._jack.setName("_jack");
        this.addChild(this._jack);
        this._jack.setCascadeOpacityEnabled(true);
        this._jack.setCascadeColorEnabled(true);
        this._jack.setAnchorPoint(cc.p(0.5, 0.5));
        this._jack.setPosition(-2.9937, 2.9936);
        let _jackLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._jack);
        let sf = cc.spriteFrameCache.getSpriteFrame("game/effects/JUp.png"); if (sf) this._jack.setSpriteFrame(sf);
        let _jackBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _jackBlendFunc.src = 1;
        _jackBlendFunc.dst = 771;
        this._jack.setBlendFunc(_jackBlendFunc);

    },


    playCCSAnimIdle: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimIdle();
    
        let _arrowAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(10 / (30 * speed), 48.7185, -36.2273),
                    cc.moveTo(5 / (30 * speed), 48.7187, -11.2273),
                    cc.moveTo(3 / (30 * speed), 48.7185, -36.2273),
                    cc.moveTo(3 / (30 * speed), 48.7186, -31.2273),
                    cc.moveTo(3 / (30 * speed), 48.7185, -36.2273),
                    cc.moveTo(6 / (30 * speed), 48.7185, -36.2273)
                ),
                cc.sequence(
                    cc.scaleTo(10 / (30 * speed), 1.3, 0.8),
                    cc.scaleTo(5 / (30 * speed), 0.95, 1.05),
                    cc.scaleTo(3 / (30 * speed), 1.3, 0.8),
                    cc.scaleTo(3 / (30 * speed), 0.9, 1.05),
                    cc.scaleTo(9 / (30 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._arrow.setPosition(48.7185, -36.2273);
                this._arrow.setScale(1, 1);
            }.bind(this))
        );
        if (repeat <= 0) {
            _arrowAction = _arrowAction.repeatForever();
        } else _arrowAction = cc.sequence(
            cc.delayTime(delay),
            _arrowAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._arrow.runAction(_arrowAction);
    
        let _jackAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(15 / (30 * speed), -2.9936, 12.9936),
                    cc.moveTo(15 / (30 * speed), -2.9937, 2.9936)
                ),
                cc.sequence(
                    cc.scaleTo(15 / (30 * speed), 1.1, 1.1),
                    cc.scaleTo(15 / (30 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._jack.setPosition(-2.9937, 2.9936);
                this._jack.setScale(1, 1);
            }.bind(this))
        );
        if (repeat <= 0) {
            _jackAction = _jackAction.repeatForever();
        } else _jackAction = cc.sequence(
            cc.delayTime(delay),
            _jackAction.repeat(repeat)
        )
        
        this._jack.runAction(_jackAction);
    },

    resetCCSAnimIdle: function () {
        this._arrow.stopAllActions();
        this._arrow.setPosition(48.7185, -36.2273);
        this._arrow.setScale(1, 1);
    
        this._jack.stopAllActions();
        this._jack.setPosition(-2.9937, 2.9936);
        this._jack.setScale(1, 1);
    }
});

/**
 * Create EffectJUp
 * @returns {_ccs.EffectJUp}
 */
_ccs.EffectJUp.create = function () {
    return new _ccs.EffectJUp();
};
