/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.TextAFK
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.TextAFK = ccui.Widget.extend({

    /** @type {cc.Sprite} */
    _spriteDot01: null,
    /** @type {cc.Sprite} */
    _spriteDot02: null,
    /** @type {cc.Sprite} */
    _spriteDot03: null,


    /**
     * _ccs.TextAFK constructor
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

        ///// # _spriteDot01
        this._spriteDot01 = new cc.Sprite();
        this._spriteDot01.setName("_spriteDot01");
        this.addChild(this._spriteDot01);
        this._spriteDot01.setCascadeOpacityEnabled(true);
        this._spriteDot01.setCascadeColorEnabled(true);
        this._spriteDot01.setAnchorPoint(cc.p(0.5, 0.5));
        this._spriteDot01.setPosition(-28.9989, 0);
        let _spriteDot01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteDot01);
        let sf = cc.spriteFrameCache.getSpriteFrame("texts/game/Dot.png"); if (sf) this._spriteDot01.setSpriteFrame(sf);
        let _spriteDot01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteDot01BlendFunc.src = 1;
        _spriteDot01BlendFunc.dst = 771;
        this._spriteDot01.setBlendFunc(_spriteDot01BlendFunc);

        ///// # _spriteDot02
        this._spriteDot02 = new cc.Sprite();
        this._spriteDot02.setName("_spriteDot02");
        this.addChild(this._spriteDot02);
        this._spriteDot02.setCascadeOpacityEnabled(true);
        this._spriteDot02.setCascadeColorEnabled(true);
        this._spriteDot02.setAnchorPoint(cc.p(0.5, 0.5));
        this._spriteDot02.setPosition(1.0008, 0);
        let _spriteDot02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteDot02);
        let sf = cc.spriteFrameCache.getSpriteFrame("texts/game/Dot.png"); if (sf) this._spriteDot02.setSpriteFrame(sf);
        let _spriteDot02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteDot02BlendFunc.src = 1;
        _spriteDot02BlendFunc.dst = 771;
        this._spriteDot02.setBlendFunc(_spriteDot02BlendFunc);

        ///// # _spriteDot03
        this._spriteDot03 = new cc.Sprite();
        this._spriteDot03.setName("_spriteDot03");
        this.addChild(this._spriteDot03);
        this._spriteDot03.setCascadeOpacityEnabled(true);
        this._spriteDot03.setCascadeColorEnabled(true);
        this._spriteDot03.setAnchorPoint(cc.p(0.5, 0.5));
        this._spriteDot03.setPosition(31.0009, 0);
        let _spriteDot03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteDot03);
        let sf = cc.spriteFrameCache.getSpriteFrame("texts/game/Dot.png"); if (sf) this._spriteDot03.setSpriteFrame(sf);
        let _spriteDot03BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteDot03BlendFunc.src = 1;
        _spriteDot03BlendFunc.dst = 771;
        this._spriteDot03.setBlendFunc(_spriteDot03BlendFunc);

    },


    playCCSAnimIdle: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimIdle();
    
        let _spriteDot01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.delayTime(25 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteDot01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(75 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteDot01.setVisible(false);
                    }.bind(this))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteDot01.setVisible(false);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteDot01Action = _spriteDot01Action.repeatForever();
        } else _spriteDot01Action = cc.sequence(
            cc.delayTime(delay),
            _spriteDot01Action.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._spriteDot01.runAction(_spriteDot01Action);
    
        let _spriteDot02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.delayTime(50 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteDot02.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(50 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteDot02.setVisible(false);
                    }.bind(this))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteDot02.setVisible(false);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteDot02Action = _spriteDot02Action.repeatForever();
        } else _spriteDot02Action = cc.sequence(
            cc.delayTime(delay),
            _spriteDot02Action.repeat(repeat)
        )
        
        this._spriteDot02.runAction(_spriteDot02Action);
    
        let _spriteDot03Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.delayTime(75 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteDot03.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(25 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteDot03.setVisible(false);
                    }.bind(this))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteDot03.setVisible(false);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteDot03Action = _spriteDot03Action.repeatForever();
        } else _spriteDot03Action = cc.sequence(
            cc.delayTime(delay),
            _spriteDot03Action.repeat(repeat)
        )
        
        this._spriteDot03.runAction(_spriteDot03Action);
    },

    resetCCSAnimIdle: function () {
        this._spriteDot01.stopAllActions();
        this._spriteDot01.setVisible(false);
    
        this._spriteDot02.stopAllActions();
        this._spriteDot02.setVisible(false);
    
        this._spriteDot03.stopAllActions();
        this._spriteDot03.setVisible(false);
    }
});

/**
 * Create TextAFK
 * @returns {_ccs.TextAFK}
 */
_ccs.TextAFK.create = function () {
    return new _ccs.TextAFK();
};
