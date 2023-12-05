/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.GourdCrabResultWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.GourdCrabResultWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutResult00: null,
    /** @type {cc.Node} */
    _nodeBackground00: null,
    /** @type {ccui.ImageView} */
    _imgBackground00: null,
    /** @type {ccui.ImageView} */
    _imgIcon00: null,
    /** @type {ccui.Layout} */
    _layoutResult01: null,
    /** @type {cc.Node} */
    _nodeBackground01: null,
    /** @type {ccui.ImageView} */
    _imgBackground01: null,
    /** @type {ccui.ImageView} */
    _imgIcon01: null,
    /** @type {ccui.Layout} */
    _layoutResult02: null,
    /** @type {cc.Node} */
    _nodeBackground02: null,
    /** @type {ccui.ImageView} */
    _imgBackground02: null,
    /** @type {ccui.ImageView} */
    _imgIcon02: null,
    /** @type {ccui.Layout} */
    _layoutResultX2: null,
    /** @type {cc.Node} */
    _nodeBackgroundX2: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundX2: null,
    /** @type {ccui.ImageView} */
    _imgLightX2: null,
    /** @type {ccui.ImageView} */
    _imgIconX2: null,
    /** @type {ccui.Layout} */
    _layoutResultX3: null,
    /** @type {cc.Node} */
    _nodeBackgroundX3: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundX3: null,
    /** @type {ccui.ImageView} */
    _imgLightX3: null,
    /** @type {ccui.ImageView} */
    _imgIconX3: null,
    /** @type {ccui.ImageView} */
    _lightEffect00: null,


    /**
     * _ccs.GourdCrabResultWidget constructor
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

        ///// # _layoutResult00
        this._layoutResult00 = new ccui.Layout();
        this._layoutResult00.setName("_layoutResult00");
        this.addChild(this._layoutResult00);
        this._layoutResult00.setCascadeOpacityEnabled(true);
        this._layoutResult00.setCascadeColorEnabled(true);
        this._layoutResult00.setAnchorPoint(cc.p(0.5, 0.5));
        this._layoutResult00.setPosition(-200, 0);
        let _layoutResult00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutResult00);
        this._layoutResult00.setTouchEnabled(false);
        this._layoutResult00.setUnifySizeEnabled(false);
        this._layoutResult00.ignoreContentAdaptWithSize(false);
        this._layoutResult00.setContentSize(cc.size(200, 200));

        ///// # _nodeBackground00
        this._nodeBackground00 = new cc.Node();
        this._nodeBackground00.setName("_nodeBackground00");
        this._layoutResult00.addChild(this._nodeBackground00);
        this._nodeBackground00.setCascadeOpacityEnabled(true);
        this._nodeBackground00.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeBackground00, 0.5, 0.5);
        let _nodeBackground00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeBackground00);
        _nodeBackground00LayoutComponent.setPositionPercentXEnabled(true);
        _nodeBackground00LayoutComponent.setPositionPercentX(0.5);
        _nodeBackground00LayoutComponent.setPositionPercentYEnabled(true);
        _nodeBackground00LayoutComponent.setPositionPercentY(0.5);

        ///// # _imgBackground00
        this._imgBackground00 = new ccui.ImageView();
        this._imgBackground00.setName("_imgBackground00");
        this._nodeBackground00.addChild(this._imgBackground00);
        this._imgBackground00.setCascadeOpacityEnabled(true);
        this._imgBackground00.setCascadeColorEnabled(true);
        this._imgBackground00.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgBackground00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground00);
        _imgBackground00LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackground00LayoutComponent.setPositionPercentX(0);
        _imgBackground00LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackground00LayoutComponent.setPositionPercentY(0);
        this._imgBackground00.loadTexture("basics/effects/RadialYellow.png", 1);
        this._imgBackground00.setUnifySizeEnabled(false);
        this._imgBackground00.ignoreContentAdaptWithSize(false);
        this._imgBackground00.setContentSize(cc.size(375, 375));
        this._imgBackground00.setTouchEnabled(false);

        ///// # _imgIcon00
        this._imgIcon00 = new ccui.ImageView();
        this._imgIcon00.setName("_imgIcon00");
        this._layoutResult00.addChild(this._imgIcon00);
        this._imgIcon00.setCascadeOpacityEnabled(true);
        this._imgIcon00.setCascadeColorEnabled(true);
        this._imgIcon00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon00, 0.5, 0.5);
        let _imgIcon00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon00);
        _imgIcon00LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon00LayoutComponent.setPositionPercentX(0.5);
        _imgIcon00LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon00LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon00.loadTexture("gourd-crab/IconDoor00.png", 1);
        this._imgIcon00.setUnifySizeEnabled(false);
        this._imgIcon00.ignoreContentAdaptWithSize(false);
        this._imgIcon00.setContentSize(cc.size(164, 182));
        this._imgIcon00.setTouchEnabled(false);

        ///// # _layoutResult01
        this._layoutResult01 = new ccui.Layout();
        this._layoutResult01.setName("_layoutResult01");
        this.addChild(this._layoutResult01);
        this._layoutResult01.setCascadeOpacityEnabled(true);
        this._layoutResult01.setCascadeColorEnabled(true);
        this._layoutResult01.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutResult01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutResult01);
        this._layoutResult01.setTouchEnabled(false);
        this._layoutResult01.setUnifySizeEnabled(false);
        this._layoutResult01.ignoreContentAdaptWithSize(false);
        this._layoutResult01.setContentSize(cc.size(200, 200));

        ///// # _nodeBackground01
        this._nodeBackground01 = new cc.Node();
        this._nodeBackground01.setName("_nodeBackground01");
        this._layoutResult01.addChild(this._nodeBackground01);
        this._nodeBackground01.setCascadeOpacityEnabled(true);
        this._nodeBackground01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeBackground01, 0.5, 0.5);
        let _nodeBackground01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeBackground01);
        _nodeBackground01LayoutComponent.setPositionPercentXEnabled(true);
        _nodeBackground01LayoutComponent.setPositionPercentX(0.5);
        _nodeBackground01LayoutComponent.setPositionPercentYEnabled(true);
        _nodeBackground01LayoutComponent.setPositionPercentY(0.5);

        ///// # _imgBackground01
        this._imgBackground01 = new ccui.ImageView();
        this._imgBackground01.setName("_imgBackground01");
        this._nodeBackground01.addChild(this._imgBackground01);
        this._imgBackground01.setCascadeOpacityEnabled(true);
        this._imgBackground01.setCascadeColorEnabled(true);
        this._imgBackground01.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgBackground01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground01);
        _imgBackground01LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackground01LayoutComponent.setPositionPercentX(0);
        _imgBackground01LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackground01LayoutComponent.setPositionPercentY(0);
        this._imgBackground01.loadTexture("basics/effects/RadialYellow.png", 1);
        this._imgBackground01.setUnifySizeEnabled(false);
        this._imgBackground01.ignoreContentAdaptWithSize(false);
        this._imgBackground01.setContentSize(cc.size(375, 375));
        this._imgBackground01.setTouchEnabled(false);

        ///// # _imgIcon01
        this._imgIcon01 = new ccui.ImageView();
        this._imgIcon01.setName("_imgIcon01");
        this._layoutResult01.addChild(this._imgIcon01);
        this._imgIcon01.setCascadeOpacityEnabled(true);
        this._imgIcon01.setCascadeColorEnabled(true);
        this._imgIcon01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon01, 0.5, 0.5);
        let _imgIcon01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon01);
        _imgIcon01LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon01LayoutComponent.setPositionPercentX(0.5);
        _imgIcon01LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon01LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon01.loadTexture("gourd-crab/IconDoor00.png", 1);
        this._imgIcon01.setUnifySizeEnabled(false);
        this._imgIcon01.ignoreContentAdaptWithSize(false);
        this._imgIcon01.setContentSize(cc.size(164, 182));
        this._imgIcon01.setTouchEnabled(false);

        ///// # _layoutResult02
        this._layoutResult02 = new ccui.Layout();
        this._layoutResult02.setName("_layoutResult02");
        this.addChild(this._layoutResult02);
        this._layoutResult02.setCascadeOpacityEnabled(true);
        this._layoutResult02.setCascadeColorEnabled(true);
        this._layoutResult02.setAnchorPoint(cc.p(0.5, 0.5));
        this._layoutResult02.setPosition(200, 0);
        let _layoutResult02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutResult02);
        this._layoutResult02.setTouchEnabled(false);
        this._layoutResult02.setUnifySizeEnabled(false);
        this._layoutResult02.ignoreContentAdaptWithSize(false);
        this._layoutResult02.setContentSize(cc.size(200, 200));

        ///// # _nodeBackground02
        this._nodeBackground02 = new cc.Node();
        this._nodeBackground02.setName("_nodeBackground02");
        this._layoutResult02.addChild(this._nodeBackground02);
        this._nodeBackground02.setCascadeOpacityEnabled(true);
        this._nodeBackground02.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeBackground02, 0.5, 0.5);
        let _nodeBackground02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeBackground02);
        _nodeBackground02LayoutComponent.setPositionPercentXEnabled(true);
        _nodeBackground02LayoutComponent.setPositionPercentX(0.5);
        _nodeBackground02LayoutComponent.setPositionPercentYEnabled(true);
        _nodeBackground02LayoutComponent.setPositionPercentY(0.5);

        ///// # _imgBackground02
        this._imgBackground02 = new ccui.ImageView();
        this._imgBackground02.setName("_imgBackground02");
        this._nodeBackground02.addChild(this._imgBackground02);
        this._imgBackground02.setCascadeOpacityEnabled(true);
        this._imgBackground02.setCascadeColorEnabled(true);
        this._imgBackground02.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgBackground02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground02);
        _imgBackground02LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackground02LayoutComponent.setPositionPercentX(0);
        _imgBackground02LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackground02LayoutComponent.setPositionPercentY(0);
        this._imgBackground02.loadTexture("basics/effects/RadialYellow.png", 1);
        this._imgBackground02.setUnifySizeEnabled(false);
        this._imgBackground02.ignoreContentAdaptWithSize(false);
        this._imgBackground02.setContentSize(cc.size(375, 375));
        this._imgBackground02.setTouchEnabled(false);

        ///// # _imgIcon02
        this._imgIcon02 = new ccui.ImageView();
        this._imgIcon02.setName("_imgIcon02");
        this._layoutResult02.addChild(this._imgIcon02);
        this._imgIcon02.setCascadeOpacityEnabled(true);
        this._imgIcon02.setCascadeColorEnabled(true);
        this._imgIcon02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon02, 0.5, 0.5);
        let _imgIcon02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon02);
        _imgIcon02LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon02LayoutComponent.setPositionPercentX(0.5);
        _imgIcon02LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon02LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon02.loadTexture("gourd-crab/IconDoor00.png", 1);
        this._imgIcon02.setUnifySizeEnabled(false);
        this._imgIcon02.ignoreContentAdaptWithSize(false);
        this._imgIcon02.setContentSize(cc.size(164, 182));
        this._imgIcon02.setTouchEnabled(false);

        ///// # _layoutResultX2
        this._layoutResultX2 = new ccui.Layout();
        this._layoutResultX2.setName("_layoutResultX2");
        this.addChild(this._layoutResultX2);
        this._layoutResultX2.setCascadeOpacityEnabled(true);
        this._layoutResultX2.setCascadeColorEnabled(true);
        this._layoutResultX2.setAnchorPoint(cc.p(0.5, 0.5));
        this._layoutResultX2.setPosition(-100, 0);
        this._layoutResultX2.setScale(1.3, 1.3);
        this._layoutResultX2.setOpacity(0);
        let _layoutResultX2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutResultX2);
        this._layoutResultX2.setTouchEnabled(false);
        this._layoutResultX2.setUnifySizeEnabled(false);
        this._layoutResultX2.ignoreContentAdaptWithSize(false);
        this._layoutResultX2.setContentSize(cc.size(200, 200));

        ///// # _nodeBackgroundX2
        this._nodeBackgroundX2 = new cc.Node();
        this._nodeBackgroundX2.setName("_nodeBackgroundX2");
        this._layoutResultX2.addChild(this._nodeBackgroundX2);
        this._nodeBackgroundX2.setCascadeOpacityEnabled(true);
        this._nodeBackgroundX2.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeBackgroundX2, 0.5, 0.5);
        let _nodeBackgroundX2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeBackgroundX2);
        _nodeBackgroundX2LayoutComponent.setPositionPercentXEnabled(true);
        _nodeBackgroundX2LayoutComponent.setPositionPercentX(0.5);
        _nodeBackgroundX2LayoutComponent.setPositionPercentYEnabled(true);
        _nodeBackgroundX2LayoutComponent.setPositionPercentY(0.5);

        ///// # _imgBackgroundX2
        this._imgBackgroundX2 = new ccui.ImageView();
        this._imgBackgroundX2.setName("_imgBackgroundX2");
        this._nodeBackgroundX2.addChild(this._imgBackgroundX2);
        this._imgBackgroundX2.setCascadeOpacityEnabled(true);
        this._imgBackgroundX2.setCascadeColorEnabled(true);
        this._imgBackgroundX2.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgBackgroundX2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundX2);
        _imgBackgroundX2LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundX2LayoutComponent.setPositionPercentX(0);
        _imgBackgroundX2LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundX2LayoutComponent.setPositionPercentY(0);
        this._imgBackgroundX2.loadTexture("basics/effects/RadialYellow.png", 1);
        this._imgBackgroundX2.setUnifySizeEnabled(false);
        this._imgBackgroundX2.ignoreContentAdaptWithSize(false);
        this._imgBackgroundX2.setContentSize(cc.size(375, 375));
        this._imgBackgroundX2.setTouchEnabled(false);

        ///// # _imgLightX2
        this._imgLightX2 = new ccui.ImageView();
        this._imgLightX2.setName("_imgLightX2");
        this._imgBackgroundX2.addChild(this._imgLightX2);
        this._imgLightX2.setCascadeOpacityEnabled(true);
        this._imgLightX2.setCascadeColorEnabled(true);
        this._imgLightX2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLightX2, 0.5, 0.5);
        this._imgLightX2.setOpacity(76);
        let _imgLightX2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLightX2);
        _imgLightX2LayoutComponent.setPositionPercentXEnabled(true);
        _imgLightX2LayoutComponent.setPositionPercentX(0.5);
        _imgLightX2LayoutComponent.setPositionPercentYEnabled(true);
        _imgLightX2LayoutComponent.setPositionPercentY(0.5);
        this._imgLightX2.loadTexture("gourd-crab/LightDot.png", 1);
        this._imgLightX2.setUnifySizeEnabled(false);
        this._imgLightX2.ignoreContentAdaptWithSize(false);
        this._imgLightX2.setContentSize(cc.size(358, 358));
        this._imgLightX2.setTouchEnabled(false);

        ///// # _imgIconX2
        this._imgIconX2 = new ccui.ImageView();
        this._imgIconX2.setName("_imgIconX2");
        this._layoutResultX2.addChild(this._imgIconX2);
        this._imgIconX2.setCascadeOpacityEnabled(true);
        this._imgIconX2.setCascadeColorEnabled(true);
        this._imgIconX2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconX2, 0.5, 0.5);
        this._imgIconX2.setScale(0.0001, 0.0001);
        let _imgIconX2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconX2);
        _imgIconX2LayoutComponent.setPositionPercentXEnabled(true);
        _imgIconX2LayoutComponent.setPositionPercentX(0.5);
        _imgIconX2LayoutComponent.setPositionPercentYEnabled(true);
        _imgIconX2LayoutComponent.setPositionPercentY(0.5);
        this._imgIconX2.loadTexture("gourd-crab/IconDoor00.png", 1);
        this._imgIconX2.setUnifySizeEnabled(false);
        this._imgIconX2.ignoreContentAdaptWithSize(false);
        this._imgIconX2.setContentSize(cc.size(164, 182));
        this._imgIconX2.setTouchEnabled(false);

        ///// # _layoutResultX3
        this._layoutResultX3 = new ccui.Layout();
        this._layoutResultX3.setName("_layoutResultX3");
        this.addChild(this._layoutResultX3);
        this._layoutResultX3.setCascadeOpacityEnabled(true);
        this._layoutResultX3.setCascadeColorEnabled(true);
        this._layoutResultX3.setAnchorPoint(cc.p(0.5, 0.5));
        this._layoutResultX3.setScale(1.3, 1.3);
        this._layoutResultX3.setOpacity(0);
        let _layoutResultX3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutResultX3);
        this._layoutResultX3.setTouchEnabled(false);
        this._layoutResultX3.setUnifySizeEnabled(false);
        this._layoutResultX3.ignoreContentAdaptWithSize(false);
        this._layoutResultX3.setContentSize(cc.size(200, 200));

        ///// # _nodeBackgroundX3
        this._nodeBackgroundX3 = new cc.Node();
        this._nodeBackgroundX3.setName("_nodeBackgroundX3");
        this._layoutResultX3.addChild(this._nodeBackgroundX3);
        this._nodeBackgroundX3.setCascadeOpacityEnabled(true);
        this._nodeBackgroundX3.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeBackgroundX3, 0.5, 0.5);
        let _nodeBackgroundX3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeBackgroundX3);
        _nodeBackgroundX3LayoutComponent.setPositionPercentXEnabled(true);
        _nodeBackgroundX3LayoutComponent.setPositionPercentX(0.5);
        _nodeBackgroundX3LayoutComponent.setPositionPercentYEnabled(true);
        _nodeBackgroundX3LayoutComponent.setPositionPercentY(0.5);

        ///// # _imgBackgroundX3
        this._imgBackgroundX3 = new ccui.ImageView();
        this._imgBackgroundX3.setName("_imgBackgroundX3");
        this._nodeBackgroundX3.addChild(this._imgBackgroundX3);
        this._imgBackgroundX3.setCascadeOpacityEnabled(true);
        this._imgBackgroundX3.setCascadeColorEnabled(true);
        this._imgBackgroundX3.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgBackgroundX3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundX3);
        _imgBackgroundX3LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundX3LayoutComponent.setPositionPercentX(0);
        _imgBackgroundX3LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundX3LayoutComponent.setPositionPercentY(0);
        this._imgBackgroundX3.loadTexture("basics/effects/RadialYellow.png", 1);
        this._imgBackgroundX3.setUnifySizeEnabled(false);
        this._imgBackgroundX3.ignoreContentAdaptWithSize(false);
        this._imgBackgroundX3.setContentSize(cc.size(375, 375));
        this._imgBackgroundX3.setTouchEnabled(false);

        ///// # _imgLightX3
        this._imgLightX3 = new ccui.ImageView();
        this._imgLightX3.setName("_imgLightX3");
        this._imgBackgroundX3.addChild(this._imgLightX3);
        this._imgLightX3.setCascadeOpacityEnabled(true);
        this._imgLightX3.setCascadeColorEnabled(true);
        this._imgLightX3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLightX3, 0.5, 0.5);
        this._imgLightX3.setOpacity(76);
        let _imgLightX3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLightX3);
        _imgLightX3LayoutComponent.setPositionPercentXEnabled(true);
        _imgLightX3LayoutComponent.setPositionPercentX(0.5);
        _imgLightX3LayoutComponent.setPositionPercentYEnabled(true);
        _imgLightX3LayoutComponent.setPositionPercentY(0.5);
        this._imgLightX3.loadTexture("gourd-crab/LightDot.png", 1);
        this._imgLightX3.setUnifySizeEnabled(false);
        this._imgLightX3.ignoreContentAdaptWithSize(false);
        this._imgLightX3.setContentSize(cc.size(358, 358));
        this._imgLightX3.setTouchEnabled(false);

        ///// # _imgIconX3
        this._imgIconX3 = new ccui.ImageView();
        this._imgIconX3.setName("_imgIconX3");
        this._layoutResultX3.addChild(this._imgIconX3);
        this._imgIconX3.setCascadeOpacityEnabled(true);
        this._imgIconX3.setCascadeColorEnabled(true);
        this._imgIconX3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconX3, 0.5, 0.5);
        let _imgIconX3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconX3);
        _imgIconX3LayoutComponent.setPositionPercentXEnabled(true);
        _imgIconX3LayoutComponent.setPositionPercentX(0.5);
        _imgIconX3LayoutComponent.setPositionPercentYEnabled(true);
        _imgIconX3LayoutComponent.setPositionPercentY(0.5);
        this._imgIconX3.loadTexture("gourd-crab/IconDoor00.png", 1);
        this._imgIconX3.setUnifySizeEnabled(false);
        this._imgIconX3.ignoreContentAdaptWithSize(false);
        this._imgIconX3.setContentSize(cc.size(164, 182));
        this._imgIconX3.setTouchEnabled(false);

        ///// # _lightEffect00
        this._lightEffect00 = new ccui.ImageView();
        this._lightEffect00.setName("_lightEffect00");
        this.addChild(this._lightEffect00);
        this._lightEffect00.setCascadeOpacityEnabled(true);
        this._lightEffect00.setCascadeColorEnabled(true);
        this._lightEffect00.setAnchorPoint(cc.p(0.5, 0.5));
        this._lightEffect00.setPosition(-99.5327, 0);
        this._lightEffect00.setOpacity(0);
        let _lightEffect00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lightEffect00);
        this._lightEffect00.loadTexture("gourd-crab/YellowRingShine.png", 1);
        this._lightEffect00.setUnifySizeEnabled(false);
        this._lightEffect00.ignoreContentAdaptWithSize(false);
        this._lightEffect00.setContentSize(cc.size(300, 300));
        this._lightEffect00.setTouchEnabled(false);

    },


    playCCSAnimX2: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimX2();
    
        let _imgBackground00Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(22 / (60 * speed), 0),
                    cc.fadeTo(8 / (60 * speed), 0),
                    cc.fadeTo(15 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgBackground00.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgBackground00Action = _imgBackground00Action.repeatForever();
        } else _imgBackground00Action = cc.sequence(
            cc.delayTime(delay),
            _imgBackground00Action.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgBackground00.runAction(_imgBackground00Action);
    
        let _imgIcon00Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.rotateBy(30 / (60 * speed), 360, 360),
                    cc.rotateBy(15 / (60 * speed), 0, 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgIcon00.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgIcon00Action = _imgIcon00Action.repeatForever();
        } else _imgIcon00Action = cc.sequence(
            cc.delayTime(delay),
            _imgIcon00Action.repeat(repeat)
        )
        
        this._imgIcon00.runAction(_imgIcon00Action);
    
        let _layoutResult00Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(15 / (60 * speed), -150, 50),
                    cc.moveTo(15 / (60 * speed), -100, 0),
                    cc.moveTo(15 / (60 * speed), -100, 0)
                ),
                cc.scaleTo(45 / (60 * speed), 1, 1),
                cc.sequence(
                    cc.fadeTo(30 / (60 * speed), 255),
                    cc.fadeTo(1 / (60 * speed), 0),
                    cc.fadeTo(14 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._layoutResult00.setPosition(-200, 0);
                this._layoutResult00.setScale(1, 1);
                this._layoutResult00.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _layoutResult00Action = _layoutResult00Action.repeatForever();
        } else _layoutResult00Action = cc.sequence(
            cc.delayTime(delay),
            _layoutResult00Action.repeat(repeat)
        )
        
        this._layoutResult00.runAction(_layoutResult00Action);
    
        let _imgBackground01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(22 / (60 * speed), 0),
                    cc.fadeTo(8 / (60 * speed), 0),
                    cc.fadeTo(15 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgBackground01.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgBackground01Action = _imgBackground01Action.repeatForever();
        } else _imgBackground01Action = cc.sequence(
            cc.delayTime(delay),
            _imgBackground01Action.repeat(repeat)
        )
        
        this._imgBackground01.runAction(_imgBackground01Action);
    
        let _imgIcon01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.rotateBy(30 / (60 * speed), -360, -360),
                    cc.rotateBy(15 / (60 * speed), 0, 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgIcon01.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgIcon01Action = _imgIcon01Action.repeatForever();
        } else _imgIcon01Action = cc.sequence(
            cc.delayTime(delay),
            _imgIcon01Action.repeat(repeat)
        )
        
        this._imgIcon01.runAction(_imgIcon01Action);
    
        let _layoutResult01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(15 / (60 * speed), -50, 50),
                    cc.moveTo(15 / (60 * speed), -100, 0),
                    cc.moveTo(15 / (60 * speed), -100, 0)
                ),
                cc.scaleTo(45 / (60 * speed), 1, 1),
                cc.sequence(
                    cc.fadeTo(30 / (60 * speed), 255),
                    cc.fadeTo(1 / (60 * speed), 0),
                    cc.fadeTo(14 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._layoutResult01.setPosition(0, 0);
                this._layoutResult01.setScale(1, 1);
                this._layoutResult01.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _layoutResult01Action = _layoutResult01Action.repeatForever();
        } else _layoutResult01Action = cc.sequence(
            cc.delayTime(delay),
            _layoutResult01Action.repeat(repeat)
        )
        
        this._layoutResult01.runAction(_layoutResult01Action);
    
        let _imgBackground02Action = cc.sequence(
            cc.spawn(
                cc.fadeTo(45 / (60 * speed), 255)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgBackground02.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgBackground02Action = _imgBackground02Action.repeatForever();
        } else _imgBackground02Action = cc.sequence(
            cc.delayTime(delay),
            _imgBackground02Action.repeat(repeat)
        )
        
        this._imgBackground02.runAction(_imgBackground02Action);
    
        let _imgIcon02Action = cc.sequence(
            cc.spawn(
                cc.moveTo(45 / (60 * speed), 100, 100),
                cc.scaleTo(45 / (60 * speed), 1, 1),
                cc.rotateBy(45 / (60 * speed), 0, 0)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgIcon02.setPosition(100, 100);
                this._imgIcon02.setScale(1, 1);
                this._imgIcon02.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgIcon02Action = _imgIcon02Action.repeatForever();
        } else _imgIcon02Action = cc.sequence(
            cc.delayTime(delay),
            _imgIcon02Action.repeat(repeat)
        )
        
        this._imgIcon02.runAction(_imgIcon02Action);
    
        let _layoutResult02Action = cc.sequence(
            cc.spawn(
                cc.moveTo(45 / (60 * speed), 200, 0),
                cc.scaleTo(45 / (60 * speed), 1, 1),
                cc.rotateBy(45 / (60 * speed), 0, 0),
                cc.fadeTo(45 / (60 * speed), 255)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._layoutResult02.setPosition(200, 0);
                this._layoutResult02.setScale(1, 1);
                this._layoutResult02.setRotation(0);
                this._layoutResult02.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _layoutResult02Action = _layoutResult02Action.repeatForever();
        } else _layoutResult02Action = cc.sequence(
            cc.delayTime(delay),
            _layoutResult02Action.repeat(repeat)
        )
        
        this._layoutResult02.runAction(_layoutResult02Action);
    
        let _imgIconX2Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(22 / (60 * speed), 0.0001, 0.0001),
                    cc.scaleTo(18 / (60 * speed), 1, 1).easing(cc.easeBackOut()),
                    cc.scaleTo(5 / (60 * speed), 1, 1)
                ),
                cc.sequence(
                    cc.rotateBy(22 / (60 * speed), -360, -360),
                    cc.rotateBy(18 / (60 * speed), 410, 410).easing(cc.easeQuadraticActionOut()),
                    cc.rotateBy(5 / (60 * speed), -50, -50).easing(cc.easeQuadraticActionOut())
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgIconX2.setScale(0.0001, 0.0001);
                this._imgIconX2.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgIconX2Action = _imgIconX2Action.repeatForever();
        } else _imgIconX2Action = cc.sequence(
            cc.delayTime(delay),
            _imgIconX2Action.repeat(repeat)
        )
        
        this._imgIconX2.runAction(_imgIconX2Action);
    
        let _layoutResultX2Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(22 / (60 * speed), 0),
                    cc.fadeTo(8 / (60 * speed), 255),
                    cc.fadeTo(15 / (60 * speed), 255)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._layoutResultX2.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _layoutResultX2Action = _layoutResultX2Action.repeatForever();
        } else _layoutResultX2Action = cc.sequence(
            cc.delayTime(delay),
            _layoutResultX2Action.repeat(repeat)
        )
        
        this._layoutResultX2.runAction(_layoutResultX2Action);
    
        let _layoutResultX3Action = cc.sequence(
            cc.spawn(
                cc.fadeTo(45 / (60 * speed), 0)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._layoutResultX3.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _layoutResultX3Action = _layoutResultX3Action.repeatForever();
        } else _layoutResultX3Action = cc.sequence(
            cc.delayTime(delay),
            _layoutResultX3Action.repeat(repeat)
        )
        
        this._layoutResultX3.runAction(_layoutResultX3Action);
    
        let _lightEffect00Action = cc.sequence(
            cc.spawn(
                cc.moveTo(45 / (60 * speed), -99.5327, 0),
                cc.sequence(
                    cc.scaleTo(30 / (60 * speed), 0.0001, 0.0001),
                    cc.scaleTo(15 / (60 * speed), 0.0001, 0.0001)
                ),
                cc.sequence(
                    cc.fadeTo(30 / (60 * speed), 255),
                    cc.delayTime(15 / (60 * speed))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._lightEffect00.setPosition(-99.5327, 0);
                this._lightEffect00.setScale(1, 1);
                this._lightEffect00.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _lightEffect00Action = _lightEffect00Action.repeatForever();
        } else _lightEffect00Action = cc.sequence(
            cc.delayTime(delay),
            _lightEffect00Action.repeat(repeat)
        )
        
        this._lightEffect00.runAction(_lightEffect00Action);
    },

    resetCCSAnimX2: function () {
        this._imgBackground00.stopAllActions();
        this._imgBackground00.setOpacity(255);
    
        this._imgIcon00.stopAllActions();
        this._imgIcon00.setRotation(0);
    
        this._layoutResult00.stopAllActions();
        this._layoutResult00.setPosition(-200, 0);
        this._layoutResult00.setScale(1, 1);
        this._layoutResult00.setOpacity(255);
    
        this._imgBackground01.stopAllActions();
        this._imgBackground01.setOpacity(255);
    
        this._imgIcon01.stopAllActions();
        this._imgIcon01.setRotation(0);
    
        this._layoutResult01.stopAllActions();
        this._layoutResult01.setPosition(0, 0);
        this._layoutResult01.setScale(1, 1);
        this._layoutResult01.setOpacity(255);
    
        this._imgBackground02.stopAllActions();
        this._imgBackground02.setOpacity(255);
    
        this._imgIcon02.stopAllActions();
        this._imgIcon02.setPosition(100, 100);
        this._imgIcon02.setScale(1, 1);
        this._imgIcon02.setRotation(0);
    
        this._layoutResult02.stopAllActions();
        this._layoutResult02.setPosition(200, 0);
        this._layoutResult02.setScale(1, 1);
        this._layoutResult02.setRotation(0);
        this._layoutResult02.setOpacity(255);
    
        this._imgIconX2.stopAllActions();
        this._imgIconX2.setScale(0.0001, 0.0001);
        this._imgIconX2.setRotation(0);
    
        this._layoutResultX2.stopAllActions();
        this._layoutResultX2.setOpacity(0);
    
        this._layoutResultX3.stopAllActions();
        this._layoutResultX3.setOpacity(0);
    
        this._lightEffect00.stopAllActions();
        this._lightEffect00.setPosition(-99.5327, 0);
        this._lightEffect00.setScale(1, 1);
        this._lightEffect00.setOpacity(0);
    },

    playCCSAnimX3: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimX3();
    
        let _imgBackground00Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(22 / (60 * speed), 0),
                    cc.fadeTo(23 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgBackground00.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgBackground00Action = _imgBackground00Action.repeatForever();
        } else _imgBackground00Action = cc.sequence(
            cc.delayTime(delay),
            _imgBackground00Action.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgBackground00.runAction(_imgBackground00Action);
    
        let _imgIcon00Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.rotateBy(30 / (60 * speed), 360, 360),
                    cc.rotateBy(15 / (60 * speed), 0, 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgIcon00.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgIcon00Action = _imgIcon00Action.repeatForever();
        } else _imgIcon00Action = cc.sequence(
            cc.delayTime(delay),
            _imgIcon00Action.repeat(repeat)
        )
        
        this._imgIcon00.runAction(_imgIcon00Action);
    
        let _layoutResult00Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(15 / (60 * speed), -100, 50),
                    cc.moveTo(15 / (60 * speed), 0, 0),
                    cc.moveTo(15 / (60 * speed), 0, 0)
                ),
                cc.scaleTo(45 / (60 * speed), 1, 1),
                cc.sequence(
                    cc.fadeTo(30 / (60 * speed), 255),
                    cc.fadeTo(1 / (60 * speed), 0),
                    cc.fadeTo(14 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._layoutResult00.setPosition(-200, 0);
                this._layoutResult00.setScale(1, 1);
                this._layoutResult00.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _layoutResult00Action = _layoutResult00Action.repeatForever();
        } else _layoutResult00Action = cc.sequence(
            cc.delayTime(delay),
            _layoutResult00Action.repeat(repeat)
        )
        
        this._layoutResult00.runAction(_layoutResult00Action);
    
        let _imgBackground01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(22 / (60 * speed), 0),
                    cc.fadeTo(23 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgBackground01.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgBackground01Action = _imgBackground01Action.repeatForever();
        } else _imgBackground01Action = cc.sequence(
            cc.delayTime(delay),
            _imgBackground01Action.repeat(repeat)
        )
        
        this._imgBackground01.runAction(_imgBackground01Action);
    
        let _imgIcon01Action = cc.sequence(
            cc.spawn(
                cc.rotateBy(45 / (60 * speed), 0, 0)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgIcon01.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgIcon01Action = _imgIcon01Action.repeatForever();
        } else _imgIcon01Action = cc.sequence(
            cc.delayTime(delay),
            _imgIcon01Action.repeat(repeat)
        )
        
        this._imgIcon01.runAction(_imgIcon01Action);
    
        let _layoutResult01Action = cc.sequence(
            cc.spawn(
                cc.moveTo(45 / (60 * speed), 0, 0),
                cc.scaleTo(45 / (60 * speed), 1, 1),
                cc.sequence(
                    cc.fadeTo(30 / (60 * speed), 255),
                    cc.fadeTo(1 / (60 * speed), 0),
                    cc.fadeTo(14 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._layoutResult01.setPosition(0, 0);
                this._layoutResult01.setScale(1, 1);
                this._layoutResult01.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _layoutResult01Action = _layoutResult01Action.repeatForever();
        } else _layoutResult01Action = cc.sequence(
            cc.delayTime(delay),
            _layoutResult01Action.repeat(repeat)
        )
        
        this._layoutResult01.runAction(_layoutResult01Action);
    
        let _imgBackground02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(22 / (60 * speed), 0),
                    cc.fadeTo(23 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgBackground02.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgBackground02Action = _imgBackground02Action.repeatForever();
        } else _imgBackground02Action = cc.sequence(
            cc.delayTime(delay),
            _imgBackground02Action.repeat(repeat)
        )
        
        this._imgBackground02.runAction(_imgBackground02Action);
    
        let _imgIcon02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.rotateBy(30 / (60 * speed), -360, -360),
                    cc.rotateBy(15 / (60 * speed), 0, 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgIcon02.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgIcon02Action = _imgIcon02Action.repeatForever();
        } else _imgIcon02Action = cc.sequence(
            cc.delayTime(delay),
            _imgIcon02Action.repeat(repeat)
        )
        
        this._imgIcon02.runAction(_imgIcon02Action);
    
        let _layoutResult02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(15 / (60 * speed), 100, 50),
                    cc.moveTo(15 / (60 * speed), 0, 0),
                    cc.moveTo(15 / (60 * speed), 0, 0)
                ),
                cc.scaleTo(45 / (60 * speed), 1, 1),
                cc.sequence(
                    cc.fadeTo(30 / (60 * speed), 255),
                    cc.fadeTo(1 / (60 * speed), 0),
                    cc.fadeTo(14 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._layoutResult02.setPosition(200, 0);
                this._layoutResult02.setScale(1, 1);
                this._layoutResult02.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _layoutResult02Action = _layoutResult02Action.repeatForever();
        } else _layoutResult02Action = cc.sequence(
            cc.delayTime(delay),
            _layoutResult02Action.repeat(repeat)
        )
        
        this._layoutResult02.runAction(_layoutResult02Action);
    
        let _layoutResultX2Action = cc.sequence(
            cc.spawn(
                cc.moveTo(45 / (60 * speed), -100, 0),
                cc.fadeTo(45 / (60 * speed), 0)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._layoutResultX2.setPosition(-100, 0);
                this._layoutResultX2.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _layoutResultX2Action = _layoutResultX2Action.repeatForever();
        } else _layoutResultX2Action = cc.sequence(
            cc.delayTime(delay),
            _layoutResultX2Action.repeat(repeat)
        )
        
        this._layoutResultX2.runAction(_layoutResultX2Action);
    
        let _imgIconX3Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(22 / (60 * speed), 0.0001, 0.0001),
                    cc.scaleTo(18 / (60 * speed), 1, 1).easing(cc.easeBackOut()),
                    cc.scaleTo(5 / (60 * speed), 1, 1)
                ),
                cc.sequence(
                    cc.rotateBy(22 / (60 * speed), -360, -360),
                    cc.rotateBy(18 / (60 * speed), 410, 410).easing(cc.easeQuadraticActionOut()),
                    cc.rotateBy(5 / (60 * speed), -50, -50).easing(cc.easeQuadraticActionOut())
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgIconX3.setScale(1, 1);
                this._imgIconX3.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgIconX3Action = _imgIconX3Action.repeatForever();
        } else _imgIconX3Action = cc.sequence(
            cc.delayTime(delay),
            _imgIconX3Action.repeat(repeat)
        )
        
        this._imgIconX3.runAction(_imgIconX3Action);
    
        let _layoutResultX3Action = cc.sequence(
            cc.spawn(
                cc.moveTo(45 / (60 * speed), 0, 0),
                cc.sequence(
                    cc.fadeTo(22 / (60 * speed), 0),
                    cc.fadeTo(8 / (60 * speed), 255),
                    cc.fadeTo(15 / (60 * speed), 255)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._layoutResultX3.setPosition(0, 0);
                this._layoutResultX3.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _layoutResultX3Action = _layoutResultX3Action.repeatForever();
        } else _layoutResultX3Action = cc.sequence(
            cc.delayTime(delay),
            _layoutResultX3Action.repeat(repeat)
        )
        
        this._layoutResultX3.runAction(_layoutResultX3Action);
    
        let _lightEffect00Action = cc.sequence(
            cc.spawn(
                cc.moveTo(45 / (60 * speed), 0, 0),
                cc.sequence(
                    cc.scaleTo(30 / (60 * speed), 0.0001, 0.0001),
                    cc.scaleTo(15 / (60 * speed), 0.0001, 0.0001)
                ),
                cc.sequence(
                    cc.fadeTo(30 / (60 * speed), 255),
                    cc.fadeTo(15 / (60 * speed), 255)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._lightEffect00.setPosition(0, 0);
                this._lightEffect00.setScale(1.5, 1.5);
                this._lightEffect00.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _lightEffect00Action = _lightEffect00Action.repeatForever();
        } else _lightEffect00Action = cc.sequence(
            cc.delayTime(delay),
            _lightEffect00Action.repeat(repeat)
        )
        
        this._lightEffect00.runAction(_lightEffect00Action);
    },

    resetCCSAnimX3: function () {
        this._imgBackground00.stopAllActions();
        this._imgBackground00.setOpacity(255);
    
        this._imgIcon00.stopAllActions();
        this._imgIcon00.setRotation(0);
    
        this._layoutResult00.stopAllActions();
        this._layoutResult00.setPosition(-200, 0);
        this._layoutResult00.setScale(1, 1);
        this._layoutResult00.setOpacity(255);
    
        this._imgBackground01.stopAllActions();
        this._imgBackground01.setOpacity(255);
    
        this._imgIcon01.stopAllActions();
        this._imgIcon01.setRotation(0);
    
        this._layoutResult01.stopAllActions();
        this._layoutResult01.setPosition(0, 0);
        this._layoutResult01.setScale(1, 1);
        this._layoutResult01.setOpacity(255);
    
        this._imgBackground02.stopAllActions();
        this._imgBackground02.setOpacity(255);
    
        this._imgIcon02.stopAllActions();
        this._imgIcon02.setRotation(0);
    
        this._layoutResult02.stopAllActions();
        this._layoutResult02.setPosition(200, 0);
        this._layoutResult02.setScale(1, 1);
        this._layoutResult02.setOpacity(255);
    
        this._layoutResultX2.stopAllActions();
        this._layoutResultX2.setPosition(-100, 0);
        this._layoutResultX2.setOpacity(0);
    
        this._imgIconX3.stopAllActions();
        this._imgIconX3.setScale(1, 1);
        this._imgIconX3.setRotation(0);
    
        this._layoutResultX3.stopAllActions();
        this._layoutResultX3.setPosition(0, 0);
        this._layoutResultX3.setOpacity(0);
    
        this._lightEffect00.stopAllActions();
        this._lightEffect00.setPosition(0, 0);
        this._lightEffect00.setScale(1.5, 1.5);
        this._lightEffect00.setOpacity(0);
    },

    playCCSAnimReset: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimReset();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    },

    resetCCSAnimReset: function () {
        this._imgBackground00.stopAllActions();
        this._imgBackground00.setOpacity(255);
    
        this._imgIcon00.stopAllActions();
        this._imgIcon00.setRotation(0);
    
        this._layoutResult00.stopAllActions();
        this._layoutResult00.setPosition(-200, 0);
        this._layoutResult00.setScale(1, 1);
        this._layoutResult00.setOpacity(255);
    
        this._imgBackground01.stopAllActions();
        this._imgBackground01.setOpacity(255);
    
        this._imgIcon01.stopAllActions();
        this._imgIcon01.setRotation(0);
    
        this._layoutResult01.stopAllActions();
        this._layoutResult01.setPosition(0, 0);
        this._layoutResult01.setScale(1, 1);
        this._layoutResult01.setOpacity(255);
    
        this._imgBackground02.stopAllActions();
        this._imgBackground02.setOpacity(255);
    
        this._imgIcon02.stopAllActions();
        this._imgIcon02.setPosition(100, 100);
        this._imgIcon02.setScale(1, 1);
        this._imgIcon02.setRotation(0);
    
        this._layoutResult02.stopAllActions();
        this._layoutResult02.setPosition(200, 0);
        this._layoutResult02.setScale(1, 1);
        this._layoutResult02.setRotation(0);
        this._layoutResult02.setOpacity(255);
    
        this._imgBackgroundX2.stopAllActions();
        this._imgBackgroundX2.setOpacity(255);
    
        this._imgIconX2.stopAllActions();
        this._imgIconX2.setScale(0.0001, 0.0001);
        this._imgIconX2.setRotation(0);
    
        this._layoutResultX2.stopAllActions();
        this._layoutResultX2.setPosition(-100, 0);
        this._layoutResultX2.setOpacity(0);
    
        this._imgBackgroundX3.stopAllActions();
        this._imgBackgroundX3.setOpacity(255);
    
        this._layoutResultX3.stopAllActions();
        this._layoutResultX3.setPosition(0, 0);
        this._layoutResultX3.setOpacity(0);
    
        this._lightEffect00.stopAllActions();
        this._lightEffect00.setPosition(-99.5327, 0);
        this._lightEffect00.setScale(1, 1);
        this._lightEffect00.setOpacity(0);
    }
});

/**
 * Create GourdCrabResultWidget
 * @returns {_ccs.GourdCrabResultWidget}
 */
_ccs.GourdCrabResultWidget.create = function () {
    return new _ccs.GourdCrabResultWidget();
};
