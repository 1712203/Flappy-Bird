/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.BingoEffectLoseWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.BingoEffectLoseWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgGlow: null,
    /** @type {ccui.ImageView} */
    _imgEmo: null,
    /** @type {ccui.ImageView} */
    _imgRibbon: null,
    /** @type {ccui.ImageView} */
    _imgText: null,


    /**
     * _ccs.BingoEffectLoseWidget constructor
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

        ///// # _layoutRoot
        this._layoutRoot = new ccui.Layout();
        this._layoutRoot.setName("_layoutRoot");
        this.addChild(this._layoutRoot);
        this._layoutRoot.setCascadeOpacityEnabled(true);
        this._layoutRoot.setCascadeColorEnabled(true);
        this._layoutRoot.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(640, 640));

        ///// # _imgGlow
        this._imgGlow = new ccui.ImageView();
        this._imgGlow.setName("_imgGlow");
        this._layoutRoot.addChild(this._imgGlow);
        this._imgGlow.setCascadeOpacityEnabled(true);
        this._imgGlow.setCascadeColorEnabled(true);
        this._imgGlow.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGlow, 0.5, 0.5);
        this._imgGlow.setScale(0.001, 0.001);
        this._imgGlow.setOpacity(0);
        let _imgGlowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGlow);
        _imgGlowLayoutComponent.setPositionPercentXEnabled(true);
        _imgGlowLayoutComponent.setPositionPercentX(0.5);
        _imgGlowLayoutComponent.setPositionPercentYEnabled(true);
        _imgGlowLayoutComponent.setPositionPercentY(0.5);
        this._imgGlow.loadTexture("bingo/ui/GlowLose.png", 1);
        this._imgGlow.setUnifySizeEnabled(false);
        this._imgGlow.ignoreContentAdaptWithSize(false);
        this._imgGlow.setContentSize(cc.size(817, 784));
        this._imgGlow.setTouchEnabled(false);

        ///// # _imgEmo
        this._imgEmo = new ccui.ImageView();
        this._imgEmo.setName("_imgEmo");
        this._layoutRoot.addChild(this._imgEmo);
        this._imgEmo.setCascadeOpacityEnabled(true);
        this._imgEmo.setCascadeColorEnabled(true);
        this._imgEmo.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgEmo, 0.5, 0.5625);
        this._imgEmo.setScale(0.001, 0.001);
        this._imgEmo.setOpacity(0);
        let _imgEmoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgEmo);
        _imgEmoLayoutComponent.setPositionPercentXEnabled(true);
        _imgEmoLayoutComponent.setPositionPercentX(0.5);
        _imgEmoLayoutComponent.setPositionPercentYEnabled(true);
        _imgEmoLayoutComponent.setPositionPercentY(0.5625);
        this._imgEmo.loadTexture("bingo/ui/EmojiLose.png", 1);
        this._imgEmo.setUnifySizeEnabled(false);
        this._imgEmo.ignoreContentAdaptWithSize(false);
        this._imgEmo.setContentSize(cc.size(202, 299));
        this._imgEmo.setTouchEnabled(false);

        ///// # _imgRibbon
        this._imgRibbon = new ccui.ImageView();
        this._imgRibbon.setName("_imgRibbon");
        this._imgEmo.addChild(this._imgRibbon);
        this._imgRibbon.setCascadeOpacityEnabled(true);
        this._imgRibbon.setCascadeColorEnabled(true);
        this._imgRibbon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRibbon, 0.5, 0.0769);
        this._imgRibbon.setFlippedY(true);
        let _imgRibbonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRibbon);
        _imgRibbonLayoutComponent.setPositionPercentXEnabled(true);
        _imgRibbonLayoutComponent.setPositionPercentX(0.5);
        this._imgRibbon.loadTexture("basics/popup/HeaderGray.png", 1);
        this._imgRibbon.setUnifySizeEnabled(false);
        this._imgRibbon.ignoreContentAdaptWithSize(false);
        this._imgRibbon.setContentSize(cc.size(503, 197));
        this._imgRibbon.setTouchEnabled(false);
        this._imgRibbon.setFlippedY(true);

        ///// # _imgText
        this._imgText = new ccui.ImageView();
        this._imgText.setName("_imgText");
        this._imgEmo.addChild(this._imgText);
        this._imgText.setCascadeOpacityEnabled(true);
        this._imgText.setCascadeColorEnabled(true);
        this._imgText.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgText, 0.5, -0.0535);
        let _imgTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgText);
        _imgTextLayoutComponent.setPositionPercentXEnabled(true);
        _imgTextLayoutComponent.setPositionPercentX(0.5);
        this._imgText.loadTexture("texts/minigames/YouLose.png", 1);
        this._imgText.setTouchEnabled(false);

    },


    playCCSAnimShow: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimShow();
    
        let _imgGlowAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(20 / (60 * speed), 1, 1).easing(cc.easeBackOut()),
                    cc.scaleTo(50 / (60 * speed), 1, 1),
                    cc.scaleTo(10 / (60 * speed), 1, 1)
                ),
                cc.sequence(
                    cc.fadeTo(20 / (60 * speed), 255),
                    cc.fadeTo(50 / (60 * speed), 255),
                    cc.fadeTo(10 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgGlow.setScale(0.001, 0.001);
                this._imgGlow.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgGlowAction = _imgGlowAction.repeatForever();
        } else _imgGlowAction = cc.sequence(
            cc.delayTime(delay),
            _imgGlowAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgGlow.runAction(_imgGlowAction);
    
        let _imgEmoAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(10 / (60 * speed), 320, 384),
                    cc.moveTo(30 / (60 * speed), 320, 360),
                    cc.moveTo(30 / (60 * speed), 320, 384),
                    cc.moveTo(10 / (60 * speed), 320, 384)
                ),
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 1, 1),
                    cc.scaleTo(60 / (60 * speed), 1, 1),
                    cc.scaleTo(10 / (60 * speed), 0.001, 0.001)
                ),
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(60 / (60 * speed), 255),
                    cc.fadeTo(10 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgEmo.setPosition(320, 360);
                this._imgEmo.setScale(0.001, 0.001);
                this._imgEmo.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgEmoAction = _imgEmoAction.repeatForever();
        } else _imgEmoAction = cc.sequence(
            cc.delayTime(delay),
            _imgEmoAction.repeat(repeat)
        )
        
        this._imgEmo.runAction(_imgEmoAction);
    },

    resetCCSAnimShow: function () {
        this._imgGlow.stopAllActions();
        this._imgGlow.setScale(0.001, 0.001);
        this._imgGlow.setOpacity(0);
    
        this._imgEmo.stopAllActions();
        this._imgEmo.setPosition(320, 360);
        this._imgEmo.setScale(0.001, 0.001);
        this._imgEmo.setOpacity(0);
    }
});

/**
 * Create BingoEffectLoseWidget
 * @returns {_ccs.BingoEffectLoseWidget}
 */
_ccs.BingoEffectLoseWidget.create = function () {
    return new _ccs.BingoEffectLoseWidget();
};
