/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.EmoWin
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.EmoWin = ccui.Widget.extend({

    /** @type {cc.Sprite} */
    Char_1: null,


    /**
     * _ccs.EmoWin constructor
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

        ///// # Char_1
        this.Char_1 = new cc.Sprite();
        this.Char_1.setName("Char_1");
        this.addChild(this.Char_1);
        this.Char_1.setCascadeOpacityEnabled(true);
        this.Char_1.setCascadeColorEnabled(true);
        this.Char_1.setAnchorPoint(cc.p(0.5083, 0));
        this.Char_1.setPosition(-1.8333, 0.3);
        let Char_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.Char_1);
        let sf = cc.spriteFrameCache.getSpriteFrame("emoticons/Emo_Girl_02.png"); if (sf) this.Char_1.setSpriteFrame(sf);
        let Char_1BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        Char_1BlendFunc.src = 1;
        Char_1BlendFunc.dst = 771;
        this.Char_1.setBlendFunc(Char_1BlendFunc);

    },


    playCCSAnimIdle: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimIdle();
    
        let Char_1Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(10 / (30 * speed), 1, 1.1),
                    cc.scaleTo(10 / (30 * speed), 1, 1),
                    cc.scaleTo(10 / (30 * speed), 1, 1),
                    cc.scaleTo(10 / (30 * speed), 1, 1.1),
                    cc.scaleTo(10 / (30 * speed), 1, 1),
                    cc.scaleTo(10 / (30 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this.Char_1.setScale(1, 1);
            }.bind(this))
        );
        if (repeat <= 0) {
            Char_1Action = Char_1Action.repeatForever();
        } else Char_1Action = cc.sequence(
            cc.delayTime(delay),
            Char_1Action.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this.Char_1.runAction(Char_1Action);
    },

    resetCCSAnimIdle: function () {
        this.Char_1.stopAllActions();
        this.Char_1.setScale(1, 1);
    }
});

/**
 * Create EmoWin
 * @returns {_ccs.EmoWin}
 */
_ccs.EmoWin.create = function () {
    return new _ccs.EmoWin();
};