/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.SpotLight
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.SpotLight = ccui.Widget.extend({

    /** @type {cc.Node} */
    _root: null,
    /** @type {cc.Sprite} */
    _light01: null,
    /** @type {cc.Sprite} */
    _light02: null,
    /** @type {cc.Sprite} */
    _light03: null,
    /** @type {cc.Sprite} */
    _light04: null,


    /**
     * _ccs.SpotLight constructor
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

        ///// # _light01
        this._light01 = new cc.Sprite();
        this._light01.setName("_light01");
        this._root.addChild(this._light01);
        this._light01.setCascadeOpacityEnabled(true);
        this._light01.setCascadeColorEnabled(true);
        this._light01.setAnchorPoint(cc.p(0.5, 0));
        this._light01.setPosition(-42.2123, 41.9867);
        this._light01.setScale(1.2, 1.2);
        this._light01.setRotation(6);
        this._light01.setOpacity(216);
        this._light01.setColor(cc.color(255, 218, 79, 255));
        let _light01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light01);
        let sf = cc.spriteFrameCache.getSpriteFrame("vfx/light/Spot.png"); if (sf) this._light01.setSpriteFrame(sf);
        let _light01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _light01BlendFunc.src = 770;
        _light01BlendFunc.dst = 1;
        this._light01.setBlendFunc(_light01BlendFunc);

        ///// # _light02
        this._light02 = new cc.Sprite();
        this._light02.setName("_light02");
        this._root.addChild(this._light02);
        this._light02.setCascadeOpacityEnabled(true);
        this._light02.setCascadeColorEnabled(true);
        this._light02.setAnchorPoint(cc.p(0.5, 0));
        this._light02.setPosition(49.1897, 31.9929);
        this._light02.setScale(1.2, 1.2);
        this._light02.setRotation(-6);
        this._light02.setOpacity(216);
        this._light02.setColor(cc.color(255, 218, 79, 255));
        let _light02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light02);
        let sf = cc.spriteFrameCache.getSpriteFrame("vfx/light/Spot.png"); if (sf) this._light02.setSpriteFrame(sf);
        let _light02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _light02BlendFunc.src = 770;
        _light02BlendFunc.dst = 1;
        this._light02.setBlendFunc(_light02BlendFunc);

        ///// # _light03
        this._light03 = new cc.Sprite();
        this._light03.setName("_light03");
        this._root.addChild(this._light03);
        this._light03.setCascadeOpacityEnabled(true);
        this._light03.setCascadeColorEnabled(true);
        this._light03.setAnchorPoint(cc.p(0.5, 0));
        this._light03.setPosition(-113.2236, 21.9882);
        this._light03.setScale(1.3, 1.3);
        this._light03.setRotation(0.8913);
        this._light03.setOpacity(204);
        this._light03.setColor(cc.color(116, 221, 255, 255));
        let _light03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light03);
        let sf = cc.spriteFrameCache.getSpriteFrame("vfx/light/Spot.png"); if (sf) this._light03.setSpriteFrame(sf);
        let _light03BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _light03BlendFunc.src = 770;
        _light03BlendFunc.dst = 1;
        this._light03.setBlendFunc(_light03BlendFunc);

        ///// # _light04
        this._light04 = new cc.Sprite();
        this._light04.setName("_light04");
        this._root.addChild(this._light04);
        this._light04.setCascadeOpacityEnabled(true);
        this._light04.setCascadeColorEnabled(true);
        this._light04.setAnchorPoint(cc.p(0.5, 0));
        this._light04.setPosition(110.1899, 11.9896);
        this._light04.setScale(1.3, 1.3);
        this._light04.setRotation(-0.8913);
        this._light04.setOpacity(204);
        this._light04.setColor(cc.color(255, 116, 217, 255));
        let _light04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light04);
        let sf = cc.spriteFrameCache.getSpriteFrame("vfx/light/Spot.png"); if (sf) this._light04.setSpriteFrame(sf);
        let _light04BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _light04BlendFunc.src = 770;
        _light04BlendFunc.dst = 1;
        this._light04.setBlendFunc(_light04BlendFunc);

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
    
        let _light01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.rotateBy(59 / (30 * speed), -17, -17),
                    cc.rotateBy(36 / (30 * speed), -10.440000000000001, -10.440000000000001),
                    cc.rotateBy(28 / (30 * speed), 27.44, 27.44),
                    cc.rotateBy(49 / (30 * speed), -17, -17),
                    cc.rotateBy(68 / (30 * speed), -7, -7),
                    cc.rotateBy(40 / (30 * speed), 24, 24)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._light01.setRotation(6);
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
                    cc.rotateBy(59 / (30 * speed), 26, 26),
                    cc.rotateBy(36 / (30 * speed), 14, 14),
                    cc.rotateBy(28 / (30 * speed), -40, -40),
                    cc.rotateBy(49 / (30 * speed), 26, 26),
                    cc.rotateBy(36 / (30 * speed), 14, 14),
                    cc.rotateBy(32 / (30 * speed), -22, -22),
                    cc.rotateBy(40 / (30 * speed), -18, -18)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._light02.setRotation(-6);
            }.bind(this))
        );
        if (repeat <= 0) {
            _light02Action = _light02Action.repeatForever();
        } else _light02Action = cc.sequence(
            cc.delayTime(delay),
            _light02Action.repeat(repeat)
        )
        
        this._light02.runAction(_light02Action);
    
        let _light03Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.rotateBy(51 / (30 * speed), -41.8913, -41.8913),
                    cc.rotateBy(69 / (30 * speed), 41.8913, 41.8913),
                    cc.rotateBy(41 / (30 * speed), -41.8913, -41.8913),
                    cc.rotateBy(79 / (30 * speed), 14, 14),
                    cc.rotateBy(40 / (30 * speed), 27.8913, 27.8913)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._light03.setRotation(0.8913);
            }.bind(this))
        );
        if (repeat <= 0) {
            _light03Action = _light03Action.repeatForever();
        } else _light03Action = cc.sequence(
            cc.delayTime(delay),
            _light03Action.repeat(repeat)
        )
        
        this._light03.runAction(_light03Action);
    
        let _light04Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.rotateBy(51 / (30 * speed), 41.8913, 41.8913),
                    cc.rotateBy(69 / (30 * speed), -41.8913, -41.8913),
                    cc.rotateBy(41 / (30 * speed), 41.8913, 41.8913),
                    cc.rotateBy(79 / (30 * speed), -14, -14),
                    cc.rotateBy(40 / (30 * speed), -27.8913, -27.8913)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._light04.setRotation(-0.8913);
            }.bind(this))
        );
        if (repeat <= 0) {
            _light04Action = _light04Action.repeatForever();
        } else _light04Action = cc.sequence(
            cc.delayTime(delay),
            _light04Action.repeat(repeat)
        )
        
        this._light04.runAction(_light04Action);
    },

    resetCCSAnimIdle: function () {
        this._light01.stopAllActions();
        this._light01.setRotation(6);
    
        this._light02.stopAllActions();
        this._light02.setRotation(-6);
    
        this._light03.stopAllActions();
        this._light03.setRotation(0.8913);
    
        this._light04.stopAllActions();
        this._light04.setRotation(-0.8913);
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
 * Create SpotLight
 * @returns {_ccs.SpotLight}
 */
_ccs.SpotLight.create = function () {
    return new _ccs.SpotLight();
};
