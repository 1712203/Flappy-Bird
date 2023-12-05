/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.Blink
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.Blink = ccui.Widget.extend({

    /** @type {cc.Sprite} */
    _blink01: null,


    /**
     * _ccs.Blink constructor
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

        ///// # _blink01
        this._blink01 = new cc.Sprite();
        this._blink01.setName("_blink01");
        this.addChild(this._blink01);
        this._blink01.setCascadeOpacityEnabled(true);
        this._blink01.setCascadeColorEnabled(true);
        this._blink01.setAnchorPoint(cc.p(0.5, 0.5));
        this._blink01.setScale(0.8, 0.8);
        this._blink01.setOpacity(0);
        let _blink01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._blink01);
        let sf = cc.spriteFrameCache.getSpriteFrame("vfx/light/Blink.png"); if (sf) this._blink01.setSpriteFrame(sf);
        let _blink01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _blink01BlendFunc.src = 770;
        _blink01BlendFunc.dst = 1;
        this._blink01.setBlendFunc(_blink01BlendFunc);

    },


    playCCSAnimShow: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimShow();
    
        let _blink01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.rotateBy(27 / (60 * speed), 0, 0),
                    cc.rotateBy(83 / (60 * speed), 180, 180),
                    cc.rotateBy(50 / (60 * speed), -180, -180),
                    cc.rotateBy(83 / (60 * speed), 180, 180)
                ),
                cc.sequence(
                    cc.fadeTo(27 / (60 * speed), 0),
                    cc.fadeTo(12 / (60 * speed), 255),
                    cc.fadeTo(71 / (60 * speed), 0),
                    cc.fadeTo(50 / (60 * speed), 0),
                    cc.fadeTo(12 / (60 * speed), 255),
                    cc.fadeTo(71 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._blink01.setRotation(0);
                this._blink01.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _blink01Action = _blink01Action.repeatForever();
        } else _blink01Action = cc.sequence(
            cc.delayTime(delay),
            _blink01Action.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._blink01.runAction(_blink01Action);
    },

    resetCCSAnimShow: function () {
        this._blink01.stopAllActions();
        this._blink01.setRotation(0);
        this._blink01.setOpacity(0);
    }
});

/**
 * Create Blink
 * @returns {_ccs.Blink}
 */
_ccs.Blink.create = function () {
    return new _ccs.Blink();
};
