/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.Glow
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.Glow = ccui.Widget.extend({

    /** @type {cc.Node} */
    _root: null,
    /** @type {cc.Sprite} */
    _glow00: null,
    /** @type {cc.Sprite} */
    _glow01: null,
    /** @type {cc.Sprite} */
    _glow02: null,
    /** @type {cc.Sprite} */
    _glow03: null,


    /**
     * _ccs.Glow constructor
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

        ///// # _root
        this._root = new cc.Node();
        this._root.setName("_root");
        this.addChild(this._root);
        this._root.setCascadeOpacityEnabled(true);
        this._root.setCascadeColorEnabled(true);
        this._root.setOpacity(0);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);

        ///// # _glow00
        this._glow00 = new cc.Sprite();
        this._glow00.setName("_glow00");
        this._root.addChild(this._glow00);
        this._glow00.setCascadeOpacityEnabled(true);
        this._glow00.setCascadeColorEnabled(true);
        this._glow00.setAnchorPoint(cc.p(0.5, 0.5));
        this._glow00.setScale(2, -3);
        this._glow00.setOpacity(89);
        let _glow00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._glow00);
        _glow00LayoutComponent.setPositionPercentXEnabled(true);
        _glow00LayoutComponent.setPositionPercentX(0);
        _glow00LayoutComponent.setPositionPercentYEnabled(true);
        _glow00LayoutComponent.setPositionPercentY(0);
        let sf = cc.spriteFrameCache.getSpriteFrame("vfx/glows/Glow_03.png"); if (sf) this._glow00.setSpriteFrame(sf);
        let _glow00BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _glow00BlendFunc.src = 1;
        _glow00BlendFunc.dst = 771;
        this._glow00.setBlendFunc(_glow00BlendFunc);

        ///// # _glow01
        this._glow01 = new cc.Sprite();
        this._glow01.setName("_glow01");
        this._root.addChild(this._glow01);
        this._glow01.setCascadeOpacityEnabled(true);
        this._glow01.setCascadeColorEnabled(true);
        this._glow01.setAnchorPoint(cc.p(0.5, 0.5));
        this._glow01.setScale(2, 2);
        this._glow01.setOpacity(0);
        let _glow01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._glow01);
        let sf = cc.spriteFrameCache.getSpriteFrame("vfx/glows/Glow_03.png"); if (sf) this._glow01.setSpriteFrame(sf);
        let _glow01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _glow01BlendFunc.src = 770;
        _glow01BlendFunc.dst = 1;
        this._glow01.setBlendFunc(_glow01BlendFunc);

        ///// # _glow02
        this._glow02 = new cc.Sprite();
        this._glow02.setName("_glow02");
        this._root.addChild(this._glow02);
        this._glow02.setCascadeOpacityEnabled(true);
        this._glow02.setCascadeColorEnabled(true);
        this._glow02.setAnchorPoint(cc.p(0.5, 0.5));
        this._glow02.setPosition(0.0002, 0);
        this._glow02.setScale(3.5, 3.5);
        this._glow02.setOpacity(178);
        let _glow02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._glow02);
        let sf = cc.spriteFrameCache.getSpriteFrame("vfx/glows/Glow_01.png"); if (sf) this._glow02.setSpriteFrame(sf);
        let _glow02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _glow02BlendFunc.src = 770;
        _glow02BlendFunc.dst = 1;
        this._glow02.setBlendFunc(_glow02BlendFunc);

        ///// # _glow03
        this._glow03 = new cc.Sprite();
        this._glow03.setName("_glow03");
        this._root.addChild(this._glow03);
        this._glow03.setCascadeOpacityEnabled(true);
        this._glow03.setCascadeColorEnabled(true);
        this._glow03.setAnchorPoint(cc.p(0.5, 0.5));
        this._glow03.setPosition(10.0002, -10);
        this._glow03.setScale(3, 3);
        this._glow03.setOpacity(178);
        let _glow03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._glow03);
        let sf = cc.spriteFrameCache.getSpriteFrame("vfx/glows/Glow_01.png"); if (sf) this._glow03.setSpriteFrame(sf);
        let _glow03BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _glow03BlendFunc.src = 770;
        _glow03BlendFunc.dst = 1;
        this._glow03.setBlendFunc(_glow03BlendFunc);

    },


    playCCSAnimShow: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimShow();
    
        let _rootAction = cc.sequence(
            cc.spawn(
                cc.fadeTo(10 / (30 * speed), 255)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._root.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _rootAction = _rootAction.repeatForever();
        } else _rootAction = cc.sequence(
            cc.delayTime(delay),
            _rootAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._root.runAction(_rootAction);
    },

    resetCCSAnimShow: function () {
        this._root.stopAllActions();
        this._root.setOpacity(0);
    },

    playCCSAnimIdle: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimIdle();
    
        let _glow01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(60 / (30 * speed), 255),
                    cc.fadeTo(60 / (30 * speed), 0),
                    cc.fadeTo(60 / (30 * speed), 255),
                    cc.fadeTo(60 / (30 * speed), 0),
                    cc.fadeTo(60 / (30 * speed), 255),
                    cc.fadeTo(60 / (30 * speed), 0),
                    cc.fadeTo(60 / (30 * speed), 255),
                    cc.fadeTo(60 / (30 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._glow01.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _glow01Action = _glow01Action.repeatForever();
        } else _glow01Action = cc.sequence(
            cc.delayTime(delay),
            _glow01Action.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._glow01.runAction(_glow01Action);
    
        let _glow02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.rotateBy(240 / (30 * speed), 180, 180),
                    cc.rotateBy(240 / (30 * speed), 180, 180)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._glow02.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _glow02Action = _glow02Action.repeatForever();
        } else _glow02Action = cc.sequence(
            cc.delayTime(delay),
            _glow02Action.repeat(repeat)
        )
        
        this._glow02.runAction(_glow02Action);
    
        let _glow03Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.rotateBy(240 / (30 * speed), -180, -180),
                    cc.rotateBy(240 / (30 * speed), -180, -180)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._glow03.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _glow03Action = _glow03Action.repeatForever();
        } else _glow03Action = cc.sequence(
            cc.delayTime(delay),
            _glow03Action.repeat(repeat)
        )
        
        this._glow03.runAction(_glow03Action);
    },

    resetCCSAnimIdle: function () {
        this._glow01.stopAllActions();
        this._glow01.setOpacity(0);
    
        this._glow02.stopAllActions();
        this._glow02.setRotation(0);
    
        this._glow03.stopAllActions();
        this._glow03.setRotation(0);
    },

    playCCSAnimHide: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimHide();
    
        let _rootAction = cc.sequence(
            cc.spawn(
                cc.fadeTo(10 / (30 * speed), 0)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._root.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _rootAction = _rootAction.repeatForever();
        } else _rootAction = cc.sequence(
            cc.delayTime(delay),
            _rootAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._root.runAction(_rootAction);
    },

    resetCCSAnimHide: function () {
        this._root.stopAllActions();
        this._root.setOpacity(255);
    }
});

/**
 * Create Glow
 * @returns {_ccs.Glow}
 */
_ccs.Glow.create = function () {
    return new _ccs.Glow();
};
