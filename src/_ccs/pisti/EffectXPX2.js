/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.EffectXPX2
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.EffectXPX2 = ccui.Widget.extend({

    /** @type {ccui.ImageView} */
    _icon: null,
    /** @type {cc.Sprite} */
    _highlight: null,


    /**
     * _ccs.EffectXPX2 constructor
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

        ///// # _icon
        this._icon = new ccui.ImageView();
        this._icon.setName("_icon");
        this.addChild(this._icon);
        this._icon.setCascadeOpacityEnabled(true);
        this._icon.setCascadeColorEnabled(true);
        this._icon.setAnchorPoint(cc.p(0.5, 0.5));
        let _iconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._icon);
        this._icon.loadTexture("icons/color/items/XPx2.png", 1);
        this._icon.setUnifySizeEnabled(false);
        this._icon.ignoreContentAdaptWithSize(false);
        this._icon.setContentSize(cc.size(128, 128));
        this._icon.setTouchEnabled(false);

        ///// # _highlight
        this._highlight = new cc.Sprite();
        this._highlight.setName("_highlight");
        this._icon.addChild(this._highlight);
        this._highlight.setCascadeOpacityEnabled(true);
        this._highlight.setCascadeColorEnabled(true);
        this._highlight.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._highlight, 0.4922, 0.5156);
        this._highlight.setRotationY(-0.0098);
        let _highlightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._highlight);
        _highlightLayoutComponent.setPositionPercentXEnabled(true);
        _highlightLayoutComponent.setPositionPercentX(0.4922);
        _highlightLayoutComponent.setPositionPercentYEnabled(true);
        _highlightLayoutComponent.setPositionPercentY(0.5156);
        let sf = cc.spriteFrameCache.getSpriteFrame("avatars/Countdown.png"); if (sf) this._highlight.setSpriteFrame(sf);
        let _highlightBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _highlightBlendFunc.src = 1;
        _highlightBlendFunc.dst = 771;
        this._highlight.setBlendFunc(_highlightBlendFunc);

    },


    playCCSAnimShow: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimShow();
    
        let _highlightAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.delayTime(15 / (30 * speed)),
                    cc.rotateBy(0 / (30 * speed), 0, -0.0098)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._highlight.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _highlightAction = _highlightAction.repeatForever();
        } else _highlightAction = cc.sequence(
            cc.delayTime(delay),
            _highlightAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._highlight.runAction(_highlightAction);
    
        let _iconAction = cc.sequence(
            cc.spawn(
                cc.scaleTo(15 / (30 * speed), 1, 1).easing(cc.easeBackOut()),
                cc.fadeTo(15 / (30 * speed), 255)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._icon.setScale(2.5, 2.5);
                this._icon.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _iconAction = _iconAction.repeatForever();
        } else _iconAction = cc.sequence(
            cc.delayTime(delay),
            _iconAction.repeat(repeat)
        )
        
        this._icon.runAction(_iconAction);
    },

    resetCCSAnimShow: function () {
        this._highlight.stopAllActions();
        this._highlight.setRotation(0);
    
        this._icon.stopAllActions();
        this._icon.setScale(2.5, 2.5);
        this._icon.setOpacity(0);
    },

    playCCSAnimHide: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimHide();
    
        let _highlightAction = cc.sequence(
            cc.spawn(
                cc.delayTime(15 / (30 * speed))
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._highlight.setRotation(360);
            }.bind(this))
        );
        if (repeat <= 0) {
            _highlightAction = _highlightAction.repeatForever();
        } else _highlightAction = cc.sequence(
            cc.delayTime(delay),
            _highlightAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._highlight.runAction(_highlightAction);
    
        let _iconAction = cc.sequence(
            cc.spawn(
                cc.scaleTo(15 / (30 * speed), 2.5, 2.5).easing(cc.easeBackIn()),
                cc.fadeTo(15 / (30 * speed), 0)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._icon.setScale(1, 1);
                this._icon.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _iconAction = _iconAction.repeatForever();
        } else _iconAction = cc.sequence(
            cc.delayTime(delay),
            _iconAction.repeat(repeat)
        )
        
        this._icon.runAction(_iconAction);
    },

    resetCCSAnimHide: function () {
        this._highlight.stopAllActions();
        this._highlight.setRotation(360);
    
        this._icon.stopAllActions();
        this._icon.setScale(1, 1);
        this._icon.setOpacity(255);
    },

    playCCSAnimIdle: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimIdle();
    
        let _highlightAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.rotateBy(5 / (30 * speed), 120, 120),
                    cc.rotateBy(5 / (30 * speed), 120, 119.99999999999999),
                    cc.rotateBy(5 / (30 * speed), 120, 120.00000000000003)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._highlight.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _highlightAction = _highlightAction.repeatForever();
        } else _highlightAction = cc.sequence(
            cc.delayTime(delay),
            _highlightAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._highlight.runAction(_highlightAction);
    
        let _iconAction = cc.sequence(
            cc.spawn(
                cc.scaleTo(15 / (30 * speed), 1, 1),
                cc.fadeTo(15 / (30 * speed), 255)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._icon.setScale(1, 1);
                this._icon.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _iconAction = _iconAction.repeatForever();
        } else _iconAction = cc.sequence(
            cc.delayTime(delay),
            _iconAction.repeat(repeat)
        )
        
        this._icon.runAction(_iconAction);
    },

    resetCCSAnimIdle: function () {
        this._highlight.stopAllActions();
        this._highlight.setRotation(0);
    
        this._icon.stopAllActions();
        this._icon.setScale(1, 1);
        this._icon.setOpacity(255);
    }
});

/**
 * Create EffectXPX2
 * @returns {_ccs.EffectXPX2}
 */
_ccs.EffectXPX2.create = function () {
    return new _ccs.EffectXPX2();
};
