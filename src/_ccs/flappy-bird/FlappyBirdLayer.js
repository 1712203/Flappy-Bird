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
    /** @type {FlappyBirdCharacter} */
    _bird: null,
    /** @type {ccui.Layout} */
    _layoutLand: null,
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

        ///// # _bird
        this._bird = new FlappyBirdCharacter();
        this._bird.setName("_bird");
        this._imgBgr.addChild(this._bird);
        this._bird.setCascadeOpacityEnabled(true);
        this._bird.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._bird, 0.5, 0.7);
        this._bird.setScale(1.5, 1.5);
        let _birdLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._bird);
        _birdLayoutComponent.setPositionPercentXEnabled(true);
        _birdLayoutComponent.setPositionPercentX(0.5);
        _birdLayoutComponent.setPositionPercentYEnabled(true);
        _birdLayoutComponent.setPositionPercentY(0.7);

        ///// # _layoutLand
        this._layoutLand = new ccui.Layout();
        this._layoutLand.setName("_layoutLand");
        this._imgBgr.addChild(this._layoutLand);
        this._layoutLand.setCascadeOpacityEnabled(true);
        this._layoutLand.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutLand, -0.475, 0);
        let _layoutLandLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLand);
        this._layoutLand.setTouchEnabled(true);
        this._layoutLand.setUnifySizeEnabled(false);
        this._layoutLand.ignoreContentAdaptWithSize(false);
        this._layoutLand.setContentSize(cc.size(1280, 217.0563));
        this._layoutLand.setBackGroundColorType(1);
        this._layoutLand.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutLand.setBackGroundColorOpacity(102);

        ///// # _spriteLand1
        this._spriteLand1 = new cc.Sprite();
        this._spriteLand1.setName("_spriteLand1");
        this._layoutLand.addChild(this._spriteLand1);
        this._spriteLand1.setCascadeOpacityEnabled(true);
        this._spriteLand1.setCascadeColorEnabled(true);
        this._spriteLand1.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._spriteLand1, 0.25, 0);
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
        this._layoutLand.addChild(this._spriteLand2);
        this._spriteLand2.setCascadeOpacityEnabled(true);
        this._spriteLand2.setCascadeColorEnabled(true);
        this._spriteLand2.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._spriteLand2, 0.75, 0);
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
    
        let _layoutLandAction = cc.sequence(
            cc.spawn(
                cc.moveTo(120 / (30 * speed), -640, 0),
                cc.scaleTo(120 / (30 * speed), 1, 1),
                cc.rotateBy(120 / (30 * speed), 0, 0)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._layoutLand.setPosition(0, 0);
                this._layoutLand.setScale(1, 1);
                this._layoutLand.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _layoutLandAction = _layoutLandAction.repeatForever();
        } else _layoutLandAction = cc.sequence(
            cc.delayTime(delay),
            _layoutLandAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._layoutLand.runAction(_layoutLandAction);
    },

    resetCCSAnimIdle: function () {
        this._layoutLand.stopAllActions();
        this._layoutLand.setPosition(0, 0);
        this._layoutLand.setScale(1, 1);
        this._layoutLand.setRotation(0);
    }
});

/**
 * Create FlappyBirdLayer
 * @returns {_ccs.FlappyBirdLayer}
 */
_ccs.FlappyBirdLayer.create = function () {
    return new _ccs.FlappyBirdLayer();
};
