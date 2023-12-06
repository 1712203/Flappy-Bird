/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.FlappyBirdLayer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.FlappyBirdLayer = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _layoutBgr: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {cc.Node} */
    _nodeLand: null,
    /** @type {cc.Sprite} */
    _spriteLand1: null,
    /** @type {cc.Sprite} */
    _spriteLand2: null,


    /**
     * _ccs.FlappyBirdLayer constructor
     * @constructor
     */
    ctor: function () {
        cc.Layer.prototype.ctor.call(this);
        this.setCascadeOpacityEnabled(true);
        if (PlatformUtils.hasNotch())
            this._initNotch();
        this._initCCSChildren();
    },

    /**
     * Init notch for main layer
     * @private
     */
    _initNotch: function () {
        let notchHeight = PlatformUtils.NOTCH_HEIGHT;
        let marginBottom = PlatformUtils.MARGIN_BOTTOM;
        this.height = this.height - (notchHeight + marginBottom);
        this.setPosition(0, marginBottom);
    },

    /**
     * Init full screen background
     * @private
     */
    _initFullScreenBackground: function (background) {
        if (!PlatformUtils.hasNotch()) return;
        let backgroundScaleHeight = background.height / background.getParent().height;
        let notchHeight = PlatformUtils.NOTCH_HEIGHT;
        let marginBottom = PlatformUtils.MARGIN_BOTTOM;
        background.height = cc.winSize.height * backgroundScaleHeight;
        background.setAnchorPoint(0.5, 0.5);
        background.setPosition(cc.winSize.width * 0.5, background.height * 0.5 - marginBottom);
    },

    /**
     * Init nodes from ccs
     * @private
     */
    _initCCSChildren: function () {

        ///// # _layoutBgr
        this._layoutBgr = new ccui.Layout();
        this._layoutBgr.setName("_layoutBgr");
        this.addChild(this._layoutBgr);
        this._layoutBgr.setCascadeOpacityEnabled(true);
        this._layoutBgr.setCascadeColorEnabled(true);
        this._layoutBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBgr, 0.5, 0.5);
        if (!PlatformUtils.hasNotch()) {
            let _layoutBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBgr);
            _layoutBgrLayoutComponent.setPositionPercentXEnabled(true);
            _layoutBgrLayoutComponent.setPositionPercentX(0.5);
            _layoutBgrLayoutComponent.setPositionPercentYEnabled(true);
            _layoutBgrLayoutComponent.setPositionPercentY(0.5);
            _layoutBgrLayoutComponent.setPercentWidthEnabled(true);
            _layoutBgrLayoutComponent.setPercentWidth(1);
            _layoutBgrLayoutComponent.setPercentHeightEnabled(true);
            _layoutBgrLayoutComponent.setPercentHeight(1);
        }
        this._layoutBgr.setTouchEnabled(true);
        this._layoutBgr.setUnifySizeEnabled(false);
        this._layoutBgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBgr, 1, 1);
        UIUtils.initFullScreenBackground(this._layoutBgr);

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._layoutBgr.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr, 0.5, 0.5);
        let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
        _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentY(0.5);
        _imgBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrLayoutComponent.setPercentWidth(1);
        _imgBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrLayoutComponent.setPercentHeight(1);
        this._imgBgr.loadTexture("sprites/flappy-bird/background-day.png", 0);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBgr, 1, 1);
        this._imgBgr.setTouchEnabled(false);

        ///// # _nodeLand
        this._nodeLand = new cc.Node();
        this._nodeLand.setName("_nodeLand");
        this._imgBgr.addChild(this._nodeLand);
        this._nodeLand.setCascadeOpacityEnabled(true);
        this._nodeLand.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeLand, 1, 0);
        let _nodeLandLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeLand);

        ///// # _spriteLand1
        this._spriteLand1 = new cc.Sprite();
        this._spriteLand1.setName("_spriteLand1");
        this._nodeLand.addChild(this._spriteLand1);
        this._spriteLand1.setCascadeOpacityEnabled(true);
        this._spriteLand1.setCascadeColorEnabled(true);
        this._spriteLand1.setAnchorPoint(cc.p(0.5, 0));
        this._spriteLand1.setPosition(-320, 0);
        this._spriteLand1.setScale(1.91, 1.91);
        let _spriteLand1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteLand1);
        this._spriteLand1.setTexture("sprites/flappy-bird/base.png");
        let _spriteLand1BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteLand1BlendFunc.src = 770;
        _spriteLand1BlendFunc.dst = 771;
        this._spriteLand1.setBlendFunc(_spriteLand1BlendFunc);

        ///// # _spriteLand2
        this._spriteLand2 = new cc.Sprite();
        this._spriteLand2.setName("_spriteLand2");
        this._nodeLand.addChild(this._spriteLand2);
        this._spriteLand2.setCascadeOpacityEnabled(true);
        this._spriteLand2.setCascadeColorEnabled(true);
        this._spriteLand2.setAnchorPoint(cc.p(0.5, 0));
        this._spriteLand2.setPosition(320, 0);
        this._spriteLand2.setScale(1.91, 1.91);
        let _spriteLand2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteLand2);
        this._spriteLand2.setTexture("sprites/flappy-bird/base.png");
        let _spriteLand2BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteLand2BlendFunc.src = 770;
        _spriteLand2BlendFunc.dst = 771;
        this._spriteLand2.setBlendFunc(_spriteLand2BlendFunc);

    },


    playCCSAnimIdle: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimIdle();
    
        let _nodeLandAction = cc.sequence(
            cc.spawn(
                cc.moveTo(120 / (60 * speed), 0, 0),
                cc.scaleTo(120 / (60 * speed), 1, 1),
                cc.rotateBy(120 / (60 * speed), 0, 0)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._nodeLand.setPosition(640, 0);
                this._nodeLand.setScale(1, 1);
                this._nodeLand.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _nodeLandAction = _nodeLandAction.repeatForever();
        } else _nodeLandAction = cc.sequence(
            cc.delayTime(delay),
            _nodeLandAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._nodeLand.runAction(_nodeLandAction);
    },

    resetCCSAnimIdle: function () {
        this._nodeLand.stopAllActions();
        this._nodeLand.setPosition(640, 0);
        this._nodeLand.setScale(1, 1);
        this._nodeLand.setRotation(0);
    }
});

/**
 * Create FlappyBirdLayer
 * @returns {_ccs.FlappyBirdLayer}
 */
_ccs.FlappyBirdLayer.create = function () {
    return new _ccs.FlappyBirdLayer();
};
