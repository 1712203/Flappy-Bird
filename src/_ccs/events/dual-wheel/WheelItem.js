/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.WheelItem
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.WheelItem = ccui.Widget.extend({

    /** @type {cc.Node} */
    _nodeWheel: null,
    /** @type {ccui.ImageView} */
    _imgDock: null,
    /** @type {ccui.ImageView} */
    _imgWheel: null,
    /** @type {cc.Sprite} */
    _dot1: null,
    /** @type {cc.Sprite} */
    _dot2: null,
    /** @type {cc.Sprite} */
    _dot3: null,
    /** @type {cc.Sprite} */
    _dot4: null,
    /** @type {cc.Sprite} */
    _dot5: null,
    /** @type {cc.Sprite} */
    _dot6: null,
    /** @type {cc.Sprite} */
    _dot7: null,
    /** @type {cc.Sprite} */
    _dot8: null,
    /** @type {ccui.ImageView} */
    _imgLightBG: null,
    /** @type {ccui.ImageView} */
    _imgLight: null,
    /** @type {ccui.ImageView} */
    _imgNeedle: null,
    /** @type {ccui.ImageView} */
    _imgCenter: null,


    /**
     * _ccs.WheelItem constructor
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

        ///// # _nodeWheel
        this._nodeWheel = new cc.Node();
        this._nodeWheel.setName("_nodeWheel");
        this.addChild(this._nodeWheel);
        this._nodeWheel.setCascadeOpacityEnabled(true);
        this._nodeWheel.setCascadeColorEnabled(true);
        let _nodeWheelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeWheel);
        _nodeWheelLayoutComponent.setPositionPercentXEnabled(true);
        _nodeWheelLayoutComponent.setPositionPercentX(0);
        _nodeWheelLayoutComponent.setPositionPercentYEnabled(true);
        _nodeWheelLayoutComponent.setPositionPercentY(0);

        ///// # _imgDock
        this._imgDock = new ccui.ImageView();
        this._imgDock.setName("_imgDock");
        this._nodeWheel.addChild(this._imgDock);
        this._imgDock.setCascadeOpacityEnabled(true);
        this._imgDock.setCascadeColorEnabled(true);
        this._imgDock.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgDock.setPosition(1.7441, -296.04);
        let _imgDockLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDock);
        this._imgDock.loadTexture("dual-wheel/Dock.png", 1);
        this._imgDock.setUnifySizeEnabled(false);
        this._imgDock.ignoreContentAdaptWithSize(false);
        this._imgDock.setContentSize(cc.size(444, 185));
        this._imgDock.setTouchEnabled(false);

        ///// # _imgWheel
        this._imgWheel = new ccui.ImageView();
        this._imgWheel.setName("_imgWheel");
        this._nodeWheel.addChild(this._imgWheel);
        this._imgWheel.setCascadeOpacityEnabled(true);
        this._imgWheel.setCascadeColorEnabled(true);
        this._imgWheel.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgWheel.setRotation(1);
        let _imgWheelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgWheel);
        _imgWheelLayoutComponent.setPositionPercentXEnabled(true);
        _imgWheelLayoutComponent.setPositionPercentX(0);
        _imgWheelLayoutComponent.setPositionPercentYEnabled(true);
        _imgWheelLayoutComponent.setPositionPercentY(0);
        this._imgWheel.loadTexture("dual-wheel/Round_01.png", 1);
        this._imgWheel.setUnifySizeEnabled(false);
        this._imgWheel.ignoreContentAdaptWithSize(false);
        this._imgWheel.setContentSize(cc.size(572, 570));
        this._imgWheel.setTouchEnabled(false);

        ///// # _dot1
        this._dot1 = new cc.Sprite();
        this._dot1.setName("_dot1");
        this._imgWheel.addChild(this._dot1);
        this._dot1.setCascadeOpacityEnabled(true);
        this._dot1.setCascadeColorEnabled(true);
        this._dot1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._dot1, 0.3271, 0.895);
        this._dot1.setScale(0.8, 0.8);
        this._dot1.setRotationX(-15.0297);
        this._dot1.setRotationY(-15.03);
        let _dot1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._dot1);
        let sf = cc.spriteFrameCache.getSpriteFrame("dual-wheel/wheel_nail.png"); if (sf) this._dot1.setSpriteFrame(sf);
        let _dot1BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _dot1BlendFunc.src = 1;
        _dot1BlendFunc.dst = 771;
        this._dot1.setBlendFunc(_dot1BlendFunc);

        ///// # _dot2
        this._dot2 = new cc.Sprite();
        this._dot2.setName("_dot2");
        this._imgWheel.addChild(this._dot2);
        this._dot2.setCascadeOpacityEnabled(true);
        this._dot2.setCascadeColorEnabled(true);
        this._dot2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._dot2, 0.6599, 0.9033);
        this._dot2.setScale(0.8, 0.8);
        this._dot2.setRotationX(16.8479);
        this._dot2.setRotationY(16.8485);
        let _dot2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._dot2);
        let sf = cc.spriteFrameCache.getSpriteFrame("dual-wheel/wheel_nail.png"); if (sf) this._dot2.setSpriteFrame(sf);
        let _dot2BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _dot2BlendFunc.src = 1;
        _dot2BlendFunc.dst = 771;
        this._dot2.setBlendFunc(_dot2BlendFunc);

        ///// # _dot3
        this._dot3 = new cc.Sprite();
        this._dot3.setName("_dot3");
        this._imgWheel.addChild(this._dot3);
        this._dot3.setCascadeOpacityEnabled(true);
        this._dot3.setCascadeColorEnabled(true);
        this._dot3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._dot3, 0.8949, 0.6767);
        this._dot3.setScale(0.8, 0.8);
        this._dot3.setRotationX(64.3616);
        this._dot3.setRotationY(64.3538);
        let _dot3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._dot3);
        let sf = cc.spriteFrameCache.getSpriteFrame("dual-wheel/wheel_nail.png"); if (sf) this._dot3.setSpriteFrame(sf);
        let _dot3BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _dot3BlendFunc.src = 1;
        _dot3BlendFunc.dst = 771;
        this._dot3.setBlendFunc(_dot3BlendFunc);

        ///// # _dot4
        this._dot4 = new cc.Sprite();
        this._dot4.setName("_dot4");
        this._imgWheel.addChild(this._dot4);
        this._dot4.setCascadeOpacityEnabled(true);
        this._dot4.setCascadeColorEnabled(true);
        this._dot4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._dot4, 0.9118, 0.3469);
        this._dot4.setScale(0.8, 0.8);
        this._dot4.setRotationX(101.3785);
        this._dot4.setRotationY(101.3699);
        let _dot4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._dot4);
        let sf = cc.spriteFrameCache.getSpriteFrame("dual-wheel/wheel_nail.png"); if (sf) this._dot4.setSpriteFrame(sf);
        let _dot4BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _dot4BlendFunc.src = 1;
        _dot4BlendFunc.dst = 771;
        this._dot4.setBlendFunc(_dot4BlendFunc);

        ///// # _dot5
        this._dot5 = new cc.Sprite();
        this._dot5.setName("_dot5");
        this._imgWheel.addChild(this._dot5);
        this._dot5.setCascadeOpacityEnabled(true);
        this._dot5.setCascadeColorEnabled(true);
        this._dot5.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._dot5, 0.685, 0.1065);
        this._dot5.setScale(0.8, 0.8);
        this._dot5.setRotationX(159.4217);
        this._dot5.setRotationY(159.4171);
        let _dot5LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._dot5);
        let sf = cc.spriteFrameCache.getSpriteFrame("dual-wheel/wheel_nail.png"); if (sf) this._dot5.setSpriteFrame(sf);
        let _dot5BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _dot5BlendFunc.src = 1;
        _dot5BlendFunc.dst = 771;
        this._dot5.setBlendFunc(_dot5BlendFunc);

        ///// # _dot6
        this._dot6 = new cc.Sprite();
        this._dot6.setName("_dot6");
        this._imgWheel.addChild(this._dot6);
        this._dot6.setCascadeOpacityEnabled(true);
        this._dot6.setCascadeColorEnabled(true);
        this._dot6.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._dot6, 0.3526, 0.095);
        this._dot6.setScale(0.8, 0.8);
        this._dot6.setRotationX(193.8799);
        this._dot6.setRotationY(193.8687);
        let _dot6LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._dot6);
        let sf = cc.spriteFrameCache.getSpriteFrame("dual-wheel/wheel_nail.png"); if (sf) this._dot6.setSpriteFrame(sf);
        let _dot6BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _dot6BlendFunc.src = 1;
        _dot6BlendFunc.dst = 771;
        this._dot6.setBlendFunc(_dot6BlendFunc);

        ///// # _dot7
        this._dot7 = new cc.Sprite();
        this._dot7.setName("_dot7");
        this._imgWheel.addChild(this._dot7);
        this._dot7.setCascadeOpacityEnabled(true);
        this._dot7.setCascadeColorEnabled(true);
        this._dot7.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._dot7, 0.1058, 0.3209);
        this._dot7.setScale(0.8, 0.8);
        this._dot7.setRotationX(238.4089);
        this._dot7.setRotationY(238.396);
        let _dot7LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._dot7);
        let sf = cc.spriteFrameCache.getSpriteFrame("dual-wheel/wheel_nail.png"); if (sf) this._dot7.setSpriteFrame(sf);
        let _dot7BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _dot7BlendFunc.src = 1;
        _dot7BlendFunc.dst = 771;
        this._dot7.setBlendFunc(_dot7BlendFunc);

        ///// # _dot8
        this._dot8 = new cc.Sprite();
        this._dot8.setName("_dot8");
        this._imgWheel.addChild(this._dot8);
        this._dot8.setCascadeOpacityEnabled(true);
        this._dot8.setCascadeColorEnabled(true);
        this._dot8.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._dot8, 0.0919, 0.6557);
        this._dot8.setScale(0.8, 0.8);
        this._dot8.setRotationX(290.7604);
        this._dot8.setRotationY(290.7495);
        let _dot8LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._dot8);
        let sf = cc.spriteFrameCache.getSpriteFrame("dual-wheel/wheel_nail.png"); if (sf) this._dot8.setSpriteFrame(sf);
        let _dot8BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _dot8BlendFunc.src = 1;
        _dot8BlendFunc.dst = 771;
        this._dot8.setBlendFunc(_dot8BlendFunc);

        ///// # _imgLightBG
        this._imgLightBG = new ccui.ImageView();
        this._imgLightBG.setName("_imgLightBG");
        this._nodeWheel.addChild(this._imgLightBG);
        this._imgLightBG.setCascadeOpacityEnabled(true);
        this._imgLightBG.setCascadeColorEnabled(true);
        this._imgLightBG.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgLightBGLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLightBG);
        _imgLightBGLayoutComponent.setPositionPercentXEnabled(true);
        _imgLightBGLayoutComponent.setPositionPercentX(0);
        _imgLightBGLayoutComponent.setPositionPercentYEnabled(true);
        _imgLightBGLayoutComponent.setPositionPercentY(0);
        this._imgLightBG.loadTexture("dual-wheel/Round_03.png", 1);
        this._imgLightBG.setUnifySizeEnabled(false);
        this._imgLightBG.ignoreContentAdaptWithSize(false);
        this._imgLightBG.setContentSize(cc.size(572, 570));
        this._imgLightBG.setTouchEnabled(false);

        ///// # _imgLight
        this._imgLight = new ccui.ImageView();
        this._imgLight.setName("_imgLight");
        this._imgLightBG.addChild(this._imgLight);
        this._imgLight.setCascadeOpacityEnabled(true);
        this._imgLight.setCascadeColorEnabled(true);
        this._imgLight.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLight, 0.5, 0.5);
        let _imgLightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLight);
        _imgLightLayoutComponent.setPositionPercentXEnabled(true);
        _imgLightLayoutComponent.setPositionPercentX(0.5);
        _imgLightLayoutComponent.setPositionPercentYEnabled(true);
        _imgLightLayoutComponent.setPositionPercentY(0.5);
        this._imgLight.loadTexture("dual-wheel/Light_01.png", 1);
        this._imgLight.setUnifySizeEnabled(false);
        this._imgLight.ignoreContentAdaptWithSize(false);
        this._imgLight.setContentSize(cc.size(568, 569));
        this._imgLight.setTouchEnabled(false);

        ///// # _imgNeedle
        this._imgNeedle = new ccui.ImageView();
        this._imgNeedle.setName("_imgNeedle");
        this._nodeWheel.addChild(this._imgNeedle);
        this._imgNeedle.setCascadeOpacityEnabled(true);
        this._imgNeedle.setCascadeColorEnabled(true);
        this._imgNeedle.setAnchorPoint(cc.p(0.5, 0.75));
        this._imgNeedle.setPosition(0, 293.8676);
        let _imgNeedleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNeedle);
        _imgNeedleLayoutComponent.setPositionPercentXEnabled(true);
        _imgNeedleLayoutComponent.setPositionPercentX(0);
        this._imgNeedle.loadTexture("dual-wheel/Kim.png", 1);
        this._imgNeedle.setUnifySizeEnabled(false);
        this._imgNeedle.ignoreContentAdaptWithSize(false);
        this._imgNeedle.setContentSize(cc.size(55, 93));
        this._imgNeedle.setTouchEnabled(false);

        ///// # _imgCenter
        this._imgCenter = new ccui.ImageView();
        this._imgCenter.setName("_imgCenter");
        this._nodeWheel.addChild(this._imgCenter);
        this._imgCenter.setCascadeOpacityEnabled(true);
        this._imgCenter.setCascadeColorEnabled(true);
        this._imgCenter.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgCenterLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCenter);
        _imgCenterLayoutComponent.setPositionPercentXEnabled(true);
        _imgCenterLayoutComponent.setPositionPercentX(0);
        _imgCenterLayoutComponent.setPositionPercentYEnabled(true);
        _imgCenterLayoutComponent.setPositionPercentY(0);
        this._imgCenter.loadTexture("dual-wheel/Center.png", 1);
        this._imgCenter.setUnifySizeEnabled(false);
        this._imgCenter.ignoreContentAdaptWithSize(false);
        this._imgCenter.setContentSize(cc.size(145, 145));
        this._imgCenter.setTouchEnabled(false);

    },



});

/**
 * Create WheelItem
 * @returns {_ccs.WheelItem}
 */
_ccs.WheelItem.create = function () {
    return new _ccs.WheelItem();
};
