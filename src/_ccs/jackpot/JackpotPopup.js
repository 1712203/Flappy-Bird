/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.JackpotPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.JackpotPopup = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.Layout} */
    _layoutWheel: null,
    /** @type {ccui.Layout} */
    _layoutContainer: null,
    /** @type {ccui.ImageView} */
    _imgBackground01: null,
    /** @type {ccui.ImageView} */
    _light_00: null,
    /** @type {ccui.ImageView} */
    _light_01: null,
    /** @type {ccui.ImageView} */
    _light_02: null,
    /** @type {ccui.ImageView} */
    _light_03: null,
    /** @type {ccui.ImageView} */
    _light_04: null,
    /** @type {ccui.ImageView} */
    _light_05: null,
    /** @type {ccui.ImageView} */
    _light_06: null,
    /** @type {ccui.ImageView} */
    _light_07: null,
    /** @type {ccui.ImageView} */
    _light_08: null,
    /** @type {ccui.ImageView} */
    _light_09: null,
    /** @type {ccui.ImageView} */
    _light_10: null,
    /** @type {ccui.ImageView} */
    _light_11: null,
    /** @type {ccui.ImageView} */
    _light_12: null,
    /** @type {ccui.ImageView} */
    _light_13: null,
    /** @type {ccui.ImageView} */
    _light_14: null,
    /** @type {ccui.ImageView} */
    _light_15: null,
    /** @type {ccui.ImageView} */
    _light_16: null,
    /** @type {ccui.ImageView} */
    _light_17: null,
    /** @type {ccui.ImageView} */
    _light_18: null,
    /** @type {ccui.ImageView} */
    _light_19: null,
    /** @type {ccui.ImageView} */
    _light_20: null,
    /** @type {ccui.ImageView} */
    _light_21: null,
    /** @type {ccui.ImageView} */
    _light_22: null,
    /** @type {ccui.ImageView} */
    _light_23: null,
    /** @type {ccui.ImageView} */
    _light_24: null,
    /** @type {ccui.ImageView} */
    _light_25: null,
    /** @type {ccui.ImageView} */
    _light_26: null,
    /** @type {ccui.ImageView} */
    _light_27: null,
    /** @type {ccui.ImageView} */
    _light_28: null,
    /** @type {ccui.ImageView} */
    _light_29: null,
    /** @type {ccui.ImageView} */
    _light_30: null,
    /** @type {ccui.ImageView} */
    _light_31: null,
    /** @type {cc.Node} */
    _nodeItemsControl: null,
    /** @type {ccui.ImageView} */
    _imgBackground02: null,
    /** @type {ccui.Layout} */
    _item00: null,
    /** @type {ccui.ImageView} */
    _imgJackpotCellBgr: null,
    /** @type {ccui.ImageView} */
    _imgJackpotCellText: null,
    /** @type {ccui.ImageView} */
    _jackpotLight_00: null,
    /** @type {ccui.ImageView} */
    _jackpotLight_01: null,
    /** @type {ccui.ImageView} */
    _jackpotLight_02: null,
    /** @type {ccui.ImageView} */
    _jackpotLight_03: null,
    /** @type {ccui.ImageView} */
    _jackpotLight_04: null,
    /** @type {ccui.ImageView} */
    _jackpotLight_05: null,
    /** @type {ccui.ImageView} */
    _jackpotLight_06: null,
    /** @type {ccui.ImageView} */
    _jackpotLight_07: null,
    /** @type {ccui.ImageView} */
    _jackpotLight_08: null,
    /** @type {ccui.ImageView} */
    _jackpotLight_09: null,
    /** @type {ccui.ImageView} */
    _jackpotLight_10: null,
    /** @type {ccui.ImageView} */
    _jackpotLight_11: null,
    /** @type {ccui.ImageView} */
    _jackpotLight_12: null,
    /** @type {ccui.Layout} */
    _item01: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtAmount: null,
    /** @type {ccui.Layout} */
    _item02: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtAmount: null,
    /** @type {ccui.Layout} */
    _item03: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtAmount: null,
    /** @type {ccui.Layout} */
    _item04: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtAmount: null,
    /** @type {ccui.Layout} */
    _item05: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtAmount: null,
    /** @type {ccui.Layout} */
    _item06: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtAmount: null,
    /** @type {ccui.Layout} */
    _item07: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtAmount: null,
    /** @type {ccui.ImageView} */
    _imgArrow: null,
    /** @type {ccui.Layout} */
    _layoutNeedle: null,
    /** @type {ccui.ImageView} */
    _imgNeedle: null,
    /** @type {ccui.Layout} */
    _layoutJackpotBoard: null,
    /** @type {ccui.ImageView} */
    _imgJackpotBoard: null,
    /** @type {ccui.ImageView} */
    _imgJackpotBoardCoin: null,
    /** @type {ck.Text} */
    _txtJackpotValue: null,
    /** @type {ccui.Layout} */
    _layoutBase: null,
    /** @type {ccui.ImageView} */
    _imgBase: null,
    /** @type {ccui.ImageView} */
    _imgWheelName: null,
    /** @type {ck.Text} */
    _txtTicket: null,
    /** @type {ccui.ImageView} */
    _imgTicket: null,
    /** @type {JackpotSpinButton} */
    _btnSpin: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.Layout} */
    _layoutBot: null,


    /**
     * _ccs.JackpotPopup constructor
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

        ///// # _root
        this._root = new ccui.Layout();
        this._root.setName("_root");
        this.addChild(this._root);
        this._root.setCascadeOpacityEnabled(true);
        this._root.setCascadeColorEnabled(true);
        this._root.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._root, 0.5, 0.5);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        _rootLayoutComponent.setPositionPercentXEnabled(true);
        _rootLayoutComponent.setPositionPercentX(0.5);
        _rootLayoutComponent.setPositionPercentYEnabled(true);
        _rootLayoutComponent.setPositionPercentY(0.5);
        _rootLayoutComponent.setPercentWidthEnabled(true);
        _rootLayoutComponent.setPercentWidth(1);
        _rootLayoutComponent.setPercentHeightEnabled(true);
        _rootLayoutComponent.setPercentHeight(1);
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._root, 1, 1);

        ///// # _layoutWheel
        this._layoutWheel = new ccui.Layout();
        this._layoutWheel.setName("_layoutWheel");
        this._root.addChild(this._layoutWheel);
        this._layoutWheel.setCascadeOpacityEnabled(true);
        this._layoutWheel.setCascadeColorEnabled(true);
        this._layoutWheel.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutWheel, 0.5, 0.5);
        this._layoutWheel.setScale(0.9, 0.9);
        let _layoutWheelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutWheel);
        _layoutWheelLayoutComponent.setPositionPercentXEnabled(true);
        _layoutWheelLayoutComponent.setPositionPercentX(0.5);
        _layoutWheelLayoutComponent.setPositionPercentYEnabled(true);
        _layoutWheelLayoutComponent.setPositionPercentY(0.5);
        this._layoutWheel.setTouchEnabled(true);
        this._layoutWheel.setUnifySizeEnabled(false);
        this._layoutWheel.ignoreContentAdaptWithSize(false);
        this._layoutWheel.setContentSize(cc.size(640, 971.28));

        ///// # _layoutContainer
        this._layoutContainer = new ccui.Layout();
        this._layoutContainer.setName("_layoutContainer");
        this._layoutWheel.addChild(this._layoutContainer);
        this._layoutContainer.setCascadeOpacityEnabled(true);
        this._layoutContainer.setCascadeColorEnabled(true);
        this._layoutContainer.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutContainer, 0.5, 0.3017);
        this._layoutContainer.setRotationY(0.0087);
        let _layoutContainerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutContainer);
        _layoutContainerLayoutComponent.setPositionPercentXEnabled(true);
        _layoutContainerLayoutComponent.setPositionPercentX(0.5);
        _layoutContainerLayoutComponent.setPositionPercentYEnabled(true);
        _layoutContainerLayoutComponent.setPositionPercentY(0.3017);
        this._layoutContainer.setTouchEnabled(false);
        this._layoutContainer.setUnifySizeEnabled(false);
        this._layoutContainer.ignoreContentAdaptWithSize(false);
        this._layoutContainer.setContentSize(cc.size(640, 640));

        ///// # _imgBackground01
        this._imgBackground01 = new ccui.ImageView();
        this._imgBackground01.setName("_imgBackground01");
        this._layoutContainer.addChild(this._imgBackground01);
        this._imgBackground01.setCascadeOpacityEnabled(true);
        this._imgBackground01.setCascadeColorEnabled(true);
        this._imgBackground01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground01, 0.5, 0.5);
        let _imgBackground01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground01);
        _imgBackground01LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackground01LayoutComponent.setPositionPercentX(0.5);
        _imgBackground01LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackground01LayoutComponent.setPositionPercentY(0.5);
        this._imgBackground01.loadTexture("jackpot/mega/WheelBack.png", 1);
        this._imgBackground01.setUnifySizeEnabled(false);
        this._imgBackground01.ignoreContentAdaptWithSize(false);
        this._imgBackground01.setContentSize(cc.size(544, 549));
        this._imgBackground01.setTouchEnabled(false);

        ///// # _light_00
        this._light_00 = new ccui.ImageView();
        this._light_00.setName("_light_00");
        this._imgBackground01.addChild(this._light_00);
        this._light_00.setCascadeOpacityEnabled(true);
        this._light_00.setCascadeColorEnabled(true);
        this._light_00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_00, 0.5, 0.99);
        let _light_00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_00);
        _light_00LayoutComponent.setPositionPercentXEnabled(true);
        _light_00LayoutComponent.setPositionPercentX(0.5);
        _light_00LayoutComponent.setPositionPercentYEnabled(true);
        _light_00LayoutComponent.setPositionPercentY(0.99);
        this._light_00.loadTexture("basics/effects/LightDot_00.png", 1);
        this._light_00.setUnifySizeEnabled(false);
        this._light_00.ignoreContentAdaptWithSize(false);
        this._light_00.setContentSize(cc.size(25, 25));
        this._light_00.setTouchEnabled(false);

        ///// # _light_01
        this._light_01 = new ccui.ImageView();
        this._light_01.setName("_light_01");
        this._imgBackground01.addChild(this._light_01);
        this._light_01.setCascadeOpacityEnabled(true);
        this._light_01.setCascadeColorEnabled(true);
        this._light_01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_01, 0.5943, 0.9797);
        let _light_01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_01);
        _light_01LayoutComponent.setPositionPercentXEnabled(true);
        _light_01LayoutComponent.setPositionPercentX(0.5943);
        _light_01LayoutComponent.setPositionPercentYEnabled(true);
        _light_01LayoutComponent.setPositionPercentY(0.9797);
        this._light_01.loadTexture("basics/effects/LightDot_01.png", 1);
        this._light_01.setUnifySizeEnabled(false);
        this._light_01.ignoreContentAdaptWithSize(false);
        this._light_01.setContentSize(cc.size(11, 10));
        this._light_01.setTouchEnabled(false);

        ///// # _light_02
        this._light_02 = new ccui.ImageView();
        this._light_02.setName("_light_02");
        this._imgBackground01.addChild(this._light_02);
        this._light_02.setCascadeOpacityEnabled(true);
        this._light_02.setCascadeColorEnabled(true);
        this._light_02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_02, 0.6888, 0.9519);
        let _light_02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_02);
        _light_02LayoutComponent.setPositionPercentXEnabled(true);
        _light_02LayoutComponent.setPositionPercentX(0.6888);
        _light_02LayoutComponent.setPositionPercentYEnabled(true);
        _light_02LayoutComponent.setPositionPercentY(0.9519);
        this._light_02.loadTexture("basics/effects/LightDot_00.png", 1);
        this._light_02.setUnifySizeEnabled(false);
        this._light_02.ignoreContentAdaptWithSize(false);
        this._light_02.setContentSize(cc.size(25, 25));
        this._light_02.setTouchEnabled(false);

        ///// # _light_03
        this._light_03 = new ccui.ImageView();
        this._light_03.setName("_light_03");
        this._imgBackground01.addChild(this._light_03);
        this._light_03.setCascadeOpacityEnabled(true);
        this._light_03.setCascadeColorEnabled(true);
        this._light_03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_03, 0.7652, 0.9089);
        let _light_03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_03);
        _light_03LayoutComponent.setPositionPercentXEnabled(true);
        _light_03LayoutComponent.setPositionPercentX(0.7652);
        _light_03LayoutComponent.setPositionPercentYEnabled(true);
        _light_03LayoutComponent.setPositionPercentY(0.9089);
        this._light_03.loadTexture("basics/effects/LightDot_01.png", 1);
        this._light_03.setUnifySizeEnabled(false);
        this._light_03.ignoreContentAdaptWithSize(false);
        this._light_03.setContentSize(cc.size(11, 10));
        this._light_03.setTouchEnabled(false);

        ///// # _light_04
        this._light_04 = new ccui.ImageView();
        this._light_04.setName("_light_04");
        this._imgBackground01.addChild(this._light_04);
        this._light_04.setCascadeOpacityEnabled(true);
        this._light_04.setCascadeColorEnabled(true);
        this._light_04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_04, 0.841, 0.849);
        let _light_04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_04);
        _light_04LayoutComponent.setPositionPercentXEnabled(true);
        _light_04LayoutComponent.setPositionPercentX(0.841);
        _light_04LayoutComponent.setPositionPercentYEnabled(true);
        _light_04LayoutComponent.setPositionPercentY(0.849);
        this._light_04.loadTexture("basics/effects/LightDot_00.png", 1);
        this._light_04.setUnifySizeEnabled(false);
        this._light_04.ignoreContentAdaptWithSize(false);
        this._light_04.setContentSize(cc.size(25, 25));
        this._light_04.setTouchEnabled(false);

        ///// # _light_05
        this._light_05 = new ccui.ImageView();
        this._light_05.setName("_light_05");
        this._imgBackground01.addChild(this._light_05);
        this._light_05.setCascadeOpacityEnabled(true);
        this._light_05.setCascadeColorEnabled(true);
        this._light_05.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_05, 0.9054, 0.7742);
        let _light_05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_05);
        _light_05LayoutComponent.setPositionPercentXEnabled(true);
        _light_05LayoutComponent.setPositionPercentX(0.9054);
        _light_05LayoutComponent.setPositionPercentYEnabled(true);
        _light_05LayoutComponent.setPositionPercentY(0.7742);
        this._light_05.loadTexture("basics/effects/LightDot_01.png", 1);
        this._light_05.setUnifySizeEnabled(false);
        this._light_05.ignoreContentAdaptWithSize(false);
        this._light_05.setContentSize(cc.size(11, 10));
        this._light_05.setTouchEnabled(false);

        ///// # _light_06
        this._light_06 = new ccui.ImageView();
        this._light_06.setName("_light_06");
        this._imgBackground01.addChild(this._light_06);
        this._light_06.setCascadeOpacityEnabled(true);
        this._light_06.setCascadeColorEnabled(true);
        this._light_06.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_06, 0.9502, 0.6881);
        let _light_06LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_06);
        _light_06LayoutComponent.setPositionPercentXEnabled(true);
        _light_06LayoutComponent.setPositionPercentX(0.9502);
        _light_06LayoutComponent.setPositionPercentYEnabled(true);
        _light_06LayoutComponent.setPositionPercentY(0.6881);
        this._light_06.loadTexture("basics/effects/LightDot_00.png", 1);
        this._light_06.setUnifySizeEnabled(false);
        this._light_06.ignoreContentAdaptWithSize(false);
        this._light_06.setContentSize(cc.size(25, 25));
        this._light_06.setTouchEnabled(false);

        ///// # _light_07
        this._light_07 = new ccui.ImageView();
        this._light_07.setName("_light_07");
        this._imgBackground01.addChild(this._light_07);
        this._light_07.setCascadeOpacityEnabled(true);
        this._light_07.setCascadeColorEnabled(true);
        this._light_07.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_07, 0.981, 0.5915);
        let _light_07LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_07);
        _light_07LayoutComponent.setPositionPercentXEnabled(true);
        _light_07LayoutComponent.setPositionPercentX(0.981);
        _light_07LayoutComponent.setPositionPercentYEnabled(true);
        _light_07LayoutComponent.setPositionPercentY(0.5915);
        this._light_07.loadTexture("basics/effects/LightDot_01.png", 1);
        this._light_07.setUnifySizeEnabled(false);
        this._light_07.ignoreContentAdaptWithSize(false);
        this._light_07.setContentSize(cc.size(11, 10));
        this._light_07.setTouchEnabled(false);

        ///// # _light_08
        this._light_08 = new ccui.ImageView();
        this._light_08.setName("_light_08");
        this._imgBackground01.addChild(this._light_08);
        this._light_08.setCascadeOpacityEnabled(true);
        this._light_08.setCascadeColorEnabled(true);
        this._light_08.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_08, 0.9879, 0.4951);
        let _light_08LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_08);
        _light_08LayoutComponent.setPositionPercentXEnabled(true);
        _light_08LayoutComponent.setPositionPercentX(0.9879);
        _light_08LayoutComponent.setPositionPercentYEnabled(true);
        _light_08LayoutComponent.setPositionPercentY(0.4951);
        this._light_08.loadTexture("basics/effects/LightDot_00.png", 1);
        this._light_08.setUnifySizeEnabled(false);
        this._light_08.ignoreContentAdaptWithSize(false);
        this._light_08.setContentSize(cc.size(25, 25));
        this._light_08.setTouchEnabled(false);

        ///// # _light_09
        this._light_09 = new ccui.ImageView();
        this._light_09.setName("_light_09");
        this._imgBackground01.addChild(this._light_09);
        this._light_09.setCascadeOpacityEnabled(true);
        this._light_09.setCascadeColorEnabled(true);
        this._light_09.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_09, 0.9777, 0.4114);
        let _light_09LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_09);
        _light_09LayoutComponent.setPositionPercentXEnabled(true);
        _light_09LayoutComponent.setPositionPercentX(0.9777);
        _light_09LayoutComponent.setPositionPercentYEnabled(true);
        _light_09LayoutComponent.setPositionPercentY(0.4114);
        this._light_09.loadTexture("basics/effects/LightDot_01.png", 1);
        this._light_09.setUnifySizeEnabled(false);
        this._light_09.ignoreContentAdaptWithSize(false);
        this._light_09.setContentSize(cc.size(11, 10));
        this._light_09.setTouchEnabled(false);

        ///// # _light_10
        this._light_10 = new ccui.ImageView();
        this._light_10.setName("_light_10");
        this._imgBackground01.addChild(this._light_10);
        this._light_10.setCascadeOpacityEnabled(true);
        this._light_10.setCascadeColorEnabled(true);
        this._light_10.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_10, 0.9508, 0.3189);
        let _light_10LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_10);
        _light_10LayoutComponent.setPositionPercentXEnabled(true);
        _light_10LayoutComponent.setPositionPercentX(0.9508);
        _light_10LayoutComponent.setPositionPercentYEnabled(true);
        _light_10LayoutComponent.setPositionPercentY(0.3189);
        this._light_10.loadTexture("basics/effects/LightDot_00.png", 1);
        this._light_10.setUnifySizeEnabled(false);
        this._light_10.ignoreContentAdaptWithSize(false);
        this._light_10.setContentSize(cc.size(25, 25));
        this._light_10.setTouchEnabled(false);

        ///// # _light_11
        this._light_11 = new ccui.ImageView();
        this._light_11.setName("_light_11");
        this._imgBackground01.addChild(this._light_11);
        this._light_11.setCascadeOpacityEnabled(true);
        this._light_11.setCascadeColorEnabled(true);
        this._light_11.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_11, 0.9044, 0.2272);
        let _light_11LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_11);
        _light_11LayoutComponent.setPositionPercentXEnabled(true);
        _light_11LayoutComponent.setPositionPercentX(0.9044);
        _light_11LayoutComponent.setPositionPercentYEnabled(true);
        _light_11LayoutComponent.setPositionPercentY(0.2272);
        this._light_11.loadTexture("basics/effects/LightDot_01.png", 1);
        this._light_11.setUnifySizeEnabled(false);
        this._light_11.ignoreContentAdaptWithSize(false);
        this._light_11.setContentSize(cc.size(11, 10));
        this._light_11.setTouchEnabled(false);

        ///// # _light_12
        this._light_12 = new ccui.ImageView();
        this._light_12.setName("_light_12");
        this._imgBackground01.addChild(this._light_12);
        this._light_12.setCascadeOpacityEnabled(true);
        this._light_12.setCascadeColorEnabled(true);
        this._light_12.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_12, 0.8478, 0.1614);
        let _light_12LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_12);
        _light_12LayoutComponent.setPositionPercentXEnabled(true);
        _light_12LayoutComponent.setPositionPercentX(0.8478);
        _light_12LayoutComponent.setPositionPercentYEnabled(true);
        _light_12LayoutComponent.setPositionPercentY(0.1614);
        this._light_12.loadTexture("basics/effects/LightDot_00.png", 1);
        this._light_12.setUnifySizeEnabled(false);
        this._light_12.ignoreContentAdaptWithSize(false);
        this._light_12.setContentSize(cc.size(25, 25));
        this._light_12.setTouchEnabled(false);

        ///// # _light_13
        this._light_13 = new ccui.ImageView();
        this._light_13.setName("_light_13");
        this._imgBackground01.addChild(this._light_13);
        this._light_13.setCascadeOpacityEnabled(true);
        this._light_13.setCascadeColorEnabled(true);
        this._light_13.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_13, 0.7715, 0.1011);
        let _light_13LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_13);
        _light_13LayoutComponent.setPositionPercentXEnabled(true);
        _light_13LayoutComponent.setPositionPercentX(0.7715);
        _light_13LayoutComponent.setPositionPercentYEnabled(true);
        _light_13LayoutComponent.setPositionPercentY(0.1011);
        this._light_13.loadTexture("basics/effects/LightDot_01.png", 1);
        this._light_13.setUnifySizeEnabled(false);
        this._light_13.ignoreContentAdaptWithSize(false);
        this._light_13.setContentSize(cc.size(11, 10));
        this._light_13.setTouchEnabled(false);

        ///// # _light_14
        this._light_14 = new ccui.ImageView();
        this._light_14.setName("_light_14");
        this._imgBackground01.addChild(this._light_14);
        this._light_14.setCascadeOpacityEnabled(true);
        this._light_14.setCascadeColorEnabled(true);
        this._light_14.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_14, 0.6838, 0.0507);
        let _light_14LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_14);
        _light_14LayoutComponent.setPositionPercentXEnabled(true);
        _light_14LayoutComponent.setPositionPercentX(0.6838);
        _light_14LayoutComponent.setPositionPercentYEnabled(true);
        _light_14LayoutComponent.setPositionPercentY(0.0507);
        this._light_14.loadTexture("basics/effects/LightDot_00.png", 1);
        this._light_14.setUnifySizeEnabled(false);
        this._light_14.ignoreContentAdaptWithSize(false);
        this._light_14.setContentSize(cc.size(25, 25));
        this._light_14.setTouchEnabled(false);

        ///// # _light_15
        this._light_15 = new ccui.ImageView();
        this._light_15.setName("_light_15");
        this._imgBackground01.addChild(this._light_15);
        this._light_15.setCascadeOpacityEnabled(true);
        this._light_15.setCascadeColorEnabled(true);
        this._light_15.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_15, 0.5921, 0.0235);
        let _light_15LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_15);
        _light_15LayoutComponent.setPositionPercentXEnabled(true);
        _light_15LayoutComponent.setPositionPercentX(0.5921);
        _light_15LayoutComponent.setPositionPercentYEnabled(true);
        _light_15LayoutComponent.setPositionPercentY(0.0235);
        this._light_15.loadTexture("basics/effects/LightDot_01.png", 1);
        this._light_15.setUnifySizeEnabled(false);
        this._light_15.ignoreContentAdaptWithSize(false);
        this._light_15.setContentSize(cc.size(11, 10));
        this._light_15.setTouchEnabled(false);

        ///// # _light_16
        this._light_16 = new ccui.ImageView();
        this._light_16.setName("_light_16");
        this._imgBackground01.addChild(this._light_16);
        this._light_16.setCascadeOpacityEnabled(true);
        this._light_16.setCascadeColorEnabled(true);
        this._light_16.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_16, 0.5, 0.0121);
        let _light_16LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_16);
        _light_16LayoutComponent.setPositionPercentXEnabled(true);
        _light_16LayoutComponent.setPositionPercentX(0.5);
        _light_16LayoutComponent.setPositionPercentYEnabled(true);
        _light_16LayoutComponent.setPositionPercentY(0.0121);
        this._light_16.loadTexture("basics/effects/LightDot_00.png", 1);
        this._light_16.setUnifySizeEnabled(false);
        this._light_16.ignoreContentAdaptWithSize(false);
        this._light_16.setContentSize(cc.size(25, 25));
        this._light_16.setTouchEnabled(false);

        ///// # _light_17
        this._light_17 = new ccui.ImageView();
        this._light_17.setName("_light_17");
        this._imgBackground01.addChild(this._light_17);
        this._light_17.setCascadeOpacityEnabled(true);
        this._light_17.setCascadeColorEnabled(true);
        this._light_17.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_17, 0.4035, 0.0224);
        let _light_17LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_17);
        _light_17LayoutComponent.setPositionPercentXEnabled(true);
        _light_17LayoutComponent.setPositionPercentX(0.4035);
        _light_17LayoutComponent.setPositionPercentYEnabled(true);
        _light_17LayoutComponent.setPositionPercentY(0.0224);
        this._light_17.loadTexture("basics/effects/LightDot_01.png", 1);
        this._light_17.setUnifySizeEnabled(false);
        this._light_17.ignoreContentAdaptWithSize(false);
        this._light_17.setContentSize(cc.size(11, 10));
        this._light_17.setTouchEnabled(false);

        ///// # _light_18
        this._light_18 = new ccui.ImageView();
        this._light_18.setName("_light_18");
        this._imgBackground01.addChild(this._light_18);
        this._light_18.setCascadeOpacityEnabled(true);
        this._light_18.setCascadeColorEnabled(true);
        this._light_18.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_18, 0.3196, 0.0508);
        let _light_18LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_18);
        _light_18LayoutComponent.setPositionPercentXEnabled(true);
        _light_18LayoutComponent.setPositionPercentX(0.3196);
        _light_18LayoutComponent.setPositionPercentYEnabled(true);
        _light_18LayoutComponent.setPositionPercentY(0.0508);
        this._light_18.loadTexture("basics/effects/LightDot_00.png", 1);
        this._light_18.setUnifySizeEnabled(false);
        this._light_18.ignoreContentAdaptWithSize(false);
        this._light_18.setContentSize(cc.size(25, 25));
        this._light_18.setTouchEnabled(false);

        ///// # _light_19
        this._light_19 = new ccui.ImageView();
        this._light_19.setName("_light_19");
        this._imgBackground01.addChild(this._light_19);
        this._light_19.setCascadeOpacityEnabled(true);
        this._light_19.setCascadeColorEnabled(true);
        this._light_19.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_19, 0.225, 0.0908);
        let _light_19LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_19);
        _light_19LayoutComponent.setPositionPercentXEnabled(true);
        _light_19LayoutComponent.setPositionPercentX(0.225);
        _light_19LayoutComponent.setPositionPercentYEnabled(true);
        _light_19LayoutComponent.setPositionPercentY(0.0908);
        this._light_19.loadTexture("basics/effects/LightDot_01.png", 1);
        this._light_19.setUnifySizeEnabled(false);
        this._light_19.ignoreContentAdaptWithSize(false);
        this._light_19.setContentSize(cc.size(11, 10));
        this._light_19.setTouchEnabled(false);

        ///// # _light_20
        this._light_20 = new ccui.ImageView();
        this._light_20.setName("_light_20");
        this._imgBackground01.addChild(this._light_20);
        this._light_20.setCascadeOpacityEnabled(true);
        this._light_20.setCascadeColorEnabled(true);
        this._light_20.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_20, 0.1574, 0.1465);
        let _light_20LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_20);
        _light_20LayoutComponent.setPositionPercentXEnabled(true);
        _light_20LayoutComponent.setPositionPercentX(0.1574);
        _light_20LayoutComponent.setPositionPercentYEnabled(true);
        _light_20LayoutComponent.setPositionPercentY(0.1465);
        this._light_20.loadTexture("basics/effects/LightDot_00.png", 1);
        this._light_20.setUnifySizeEnabled(false);
        this._light_20.ignoreContentAdaptWithSize(false);
        this._light_20.setContentSize(cc.size(25, 25));
        this._light_20.setTouchEnabled(false);

        ///// # _light_21
        this._light_21 = new ccui.ImageView();
        this._light_21.setName("_light_21");
        this._imgBackground01.addChild(this._light_21);
        this._light_21.setCascadeOpacityEnabled(true);
        this._light_21.setCascadeColorEnabled(true);
        this._light_21.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_21, 0.0878, 0.2187);
        let _light_21LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_21);
        _light_21LayoutComponent.setPositionPercentXEnabled(true);
        _light_21LayoutComponent.setPositionPercentX(0.0878);
        _light_21LayoutComponent.setPositionPercentYEnabled(true);
        _light_21LayoutComponent.setPositionPercentY(0.2187);
        this._light_21.loadTexture("basics/effects/LightDot_01.png", 1);
        this._light_21.setUnifySizeEnabled(false);
        this._light_21.ignoreContentAdaptWithSize(false);
        this._light_21.setContentSize(cc.size(11, 10));
        this._light_21.setTouchEnabled(false);

        ///// # _light_22
        this._light_22 = new ccui.ImageView();
        this._light_22.setName("_light_22");
        this._imgBackground01.addChild(this._light_22);
        this._light_22.setCascadeOpacityEnabled(true);
        this._light_22.setCascadeColorEnabled(true);
        this._light_22.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_22, 0.0464, 0.3036);
        let _light_22LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_22);
        _light_22LayoutComponent.setPositionPercentXEnabled(true);
        _light_22LayoutComponent.setPositionPercentX(0.0464);
        _light_22LayoutComponent.setPositionPercentYEnabled(true);
        _light_22LayoutComponent.setPositionPercentY(0.3036);
        this._light_22.loadTexture("basics/effects/LightDot_00.png", 1);
        this._light_22.setUnifySizeEnabled(false);
        this._light_22.ignoreContentAdaptWithSize(false);
        this._light_22.setContentSize(cc.size(25, 25));
        this._light_22.setTouchEnabled(false);

        ///// # _light_23
        this._light_23 = new ccui.ImageView();
        this._light_23.setName("_light_23");
        this._imgBackground01.addChild(this._light_23);
        this._light_23.setCascadeOpacityEnabled(true);
        this._light_23.setCascadeColorEnabled(true);
        this._light_23.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_23, 0.0153, 0.4087);
        let _light_23LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_23);
        _light_23LayoutComponent.setPositionPercentXEnabled(true);
        _light_23LayoutComponent.setPositionPercentX(0.0153);
        _light_23LayoutComponent.setPositionPercentYEnabled(true);
        _light_23LayoutComponent.setPositionPercentY(0.4087);
        this._light_23.loadTexture("basics/effects/LightDot_01.png", 1);
        this._light_23.setUnifySizeEnabled(false);
        this._light_23.ignoreContentAdaptWithSize(false);
        this._light_23.setContentSize(cc.size(11, 10));
        this._light_23.setTouchEnabled(false);

        ///// # _light_24
        this._light_24 = new ccui.ImageView();
        this._light_24.setName("_light_24");
        this._imgBackground01.addChild(this._light_24);
        this._light_24.setCascadeOpacityEnabled(true);
        this._light_24.setCascadeColorEnabled(true);
        this._light_24.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_24, 0.0096, 0.4984);
        let _light_24LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_24);
        _light_24LayoutComponent.setPositionPercentXEnabled(true);
        _light_24LayoutComponent.setPositionPercentX(0.0096);
        _light_24LayoutComponent.setPositionPercentYEnabled(true);
        _light_24LayoutComponent.setPositionPercentY(0.4984);
        this._light_24.loadTexture("basics/effects/LightDot_00.png", 1);
        this._light_24.setUnifySizeEnabled(false);
        this._light_24.ignoreContentAdaptWithSize(false);
        this._light_24.setContentSize(cc.size(25, 25));
        this._light_24.setTouchEnabled(false);

        ///// # _light_25
        this._light_25 = new ccui.ImageView();
        this._light_25.setName("_light_25");
        this._imgBackground01.addChild(this._light_25);
        this._light_25.setCascadeOpacityEnabled(true);
        this._light_25.setCascadeColorEnabled(true);
        this._light_25.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_25, 0.0193, 0.5928);
        let _light_25LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_25);
        _light_25LayoutComponent.setPositionPercentXEnabled(true);
        _light_25LayoutComponent.setPositionPercentX(0.0193);
        _light_25LayoutComponent.setPositionPercentYEnabled(true);
        _light_25LayoutComponent.setPositionPercentY(0.5928);
        this._light_25.loadTexture("basics/effects/LightDot_01.png", 1);
        this._light_25.setUnifySizeEnabled(false);
        this._light_25.ignoreContentAdaptWithSize(false);
        this._light_25.setContentSize(cc.size(11, 10));
        this._light_25.setTouchEnabled(false);

        ///// # _light_26
        this._light_26 = new ccui.ImageView();
        this._light_26.setName("_light_26");
        this._imgBackground01.addChild(this._light_26);
        this._light_26.setCascadeOpacityEnabled(true);
        this._light_26.setCascadeColorEnabled(true);
        this._light_26.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_26, 0.0474, 0.691);
        let _light_26LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_26);
        _light_26LayoutComponent.setPositionPercentXEnabled(true);
        _light_26LayoutComponent.setPositionPercentX(0.0474);
        _light_26LayoutComponent.setPositionPercentYEnabled(true);
        _light_26LayoutComponent.setPositionPercentY(0.691);
        this._light_26.loadTexture("basics/effects/LightDot_00.png", 1);
        this._light_26.setUnifySizeEnabled(false);
        this._light_26.ignoreContentAdaptWithSize(false);
        this._light_26.setContentSize(cc.size(25, 25));
        this._light_26.setTouchEnabled(false);

        ///// # _light_27
        this._light_27 = new ccui.ImageView();
        this._light_27.setName("_light_27");
        this._imgBackground01.addChild(this._light_27);
        this._light_27.setCascadeOpacityEnabled(true);
        this._light_27.setCascadeColorEnabled(true);
        this._light_27.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_27, 0.0977, 0.7788);
        let _light_27LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_27);
        _light_27LayoutComponent.setPositionPercentXEnabled(true);
        _light_27LayoutComponent.setPositionPercentX(0.0977);
        _light_27LayoutComponent.setPositionPercentYEnabled(true);
        _light_27LayoutComponent.setPositionPercentY(0.7788);
        this._light_27.loadTexture("basics/effects/LightDot_01.png", 1);
        this._light_27.setUnifySizeEnabled(false);
        this._light_27.ignoreContentAdaptWithSize(false);
        this._light_27.setContentSize(cc.size(11, 10));
        this._light_27.setTouchEnabled(false);

        ///// # _light_28
        this._light_28 = new ccui.ImageView();
        this._light_28.setName("_light_28");
        this._imgBackground01.addChild(this._light_28);
        this._light_28.setCascadeOpacityEnabled(true);
        this._light_28.setCascadeColorEnabled(true);
        this._light_28.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_28, 0.1574, 0.8499);
        let _light_28LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_28);
        _light_28LayoutComponent.setPositionPercentXEnabled(true);
        _light_28LayoutComponent.setPositionPercentX(0.1574);
        _light_28LayoutComponent.setPositionPercentYEnabled(true);
        _light_28LayoutComponent.setPositionPercentY(0.8499);
        this._light_28.loadTexture("basics/effects/LightDot_00.png", 1);
        this._light_28.setUnifySizeEnabled(false);
        this._light_28.ignoreContentAdaptWithSize(false);
        this._light_28.setContentSize(cc.size(25, 25));
        this._light_28.setTouchEnabled(false);

        ///// # _light_29
        this._light_29 = new ccui.ImageView();
        this._light_29.setName("_light_29");
        this._imgBackground01.addChild(this._light_29);
        this._light_29.setCascadeOpacityEnabled(true);
        this._light_29.setCascadeColorEnabled(true);
        this._light_29.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_29, 0.2271, 0.9086);
        let _light_29LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_29);
        _light_29LayoutComponent.setPositionPercentXEnabled(true);
        _light_29LayoutComponent.setPositionPercentX(0.2271);
        _light_29LayoutComponent.setPositionPercentYEnabled(true);
        _light_29LayoutComponent.setPositionPercentY(0.9086);
        this._light_29.loadTexture("basics/effects/LightDot_01.png", 1);
        this._light_29.setUnifySizeEnabled(false);
        this._light_29.ignoreContentAdaptWithSize(false);
        this._light_29.setContentSize(cc.size(11, 10));
        this._light_29.setTouchEnabled(false);

        ///// # _light_30
        this._light_30 = new ccui.ImageView();
        this._light_30.setName("_light_30");
        this._imgBackground01.addChild(this._light_30);
        this._light_30.setCascadeOpacityEnabled(true);
        this._light_30.setCascadeColorEnabled(true);
        this._light_30.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_30, 0.3107, 0.9555);
        let _light_30LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_30);
        _light_30LayoutComponent.setPositionPercentXEnabled(true);
        _light_30LayoutComponent.setPositionPercentX(0.3107);
        _light_30LayoutComponent.setPositionPercentYEnabled(true);
        _light_30LayoutComponent.setPositionPercentY(0.9555);
        this._light_30.loadTexture("basics/effects/LightDot_00.png", 1);
        this._light_30.setUnifySizeEnabled(false);
        this._light_30.ignoreContentAdaptWithSize(false);
        this._light_30.setContentSize(cc.size(25, 25));
        this._light_30.setTouchEnabled(false);

        ///// # _light_31
        this._light_31 = new ccui.ImageView();
        this._light_31.setName("_light_31");
        this._imgBackground01.addChild(this._light_31);
        this._light_31.setCascadeOpacityEnabled(true);
        this._light_31.setCascadeColorEnabled(true);
        this._light_31.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._light_31, 0.3934, 0.9794);
        let _light_31LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._light_31);
        _light_31LayoutComponent.setPositionPercentXEnabled(true);
        _light_31LayoutComponent.setPositionPercentX(0.3934);
        _light_31LayoutComponent.setPositionPercentYEnabled(true);
        _light_31LayoutComponent.setPositionPercentY(0.9794);
        this._light_31.loadTexture("basics/effects/LightDot_01.png", 1);
        this._light_31.setUnifySizeEnabled(false);
        this._light_31.ignoreContentAdaptWithSize(false);
        this._light_31.setContentSize(cc.size(11, 10));
        this._light_31.setTouchEnabled(false);

        ///// # _nodeItemsControl
        this._nodeItemsControl = new cc.Node();
        this._nodeItemsControl.setName("_nodeItemsControl");
        this._layoutContainer.addChild(this._nodeItemsControl);
        this._nodeItemsControl.setCascadeOpacityEnabled(true);
        this._nodeItemsControl.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeItemsControl, 0.5, 0.5);
        let _nodeItemsControlLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeItemsControl);
        _nodeItemsControlLayoutComponent.setPositionPercentXEnabled(true);
        _nodeItemsControlLayoutComponent.setPositionPercentX(0.5);
        _nodeItemsControlLayoutComponent.setPositionPercentYEnabled(true);
        _nodeItemsControlLayoutComponent.setPositionPercentY(0.5);

        ///// # _imgBackground02
        this._imgBackground02 = new ccui.ImageView();
        this._imgBackground02.setName("_imgBackground02");
        this._nodeItemsControl.addChild(this._imgBackground02);
        this._imgBackground02.setCascadeOpacityEnabled(true);
        this._imgBackground02.setCascadeColorEnabled(true);
        this._imgBackground02.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgBackground02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground02);
        this._imgBackground02.loadTexture("jackpot/mega/WheelFont.png", 1);
        this._imgBackground02.setUnifySizeEnabled(false);
        this._imgBackground02.ignoreContentAdaptWithSize(false);
        this._imgBackground02.setContentSize(cc.size(483, 483));
        this._imgBackground02.setTouchEnabled(false);

        ///// # _item00
        this._item00 = new ccui.Layout();
        this._item00.setName("_item00");
        this._nodeItemsControl.addChild(this._item00);
        this._item00.setCascadeOpacityEnabled(true);
        this._item00.setCascadeColorEnabled(true);
        this._item00.setAnchorPoint(cc.p(0.5, 0.5));
        this._item00.setPosition(-0.0002, 119.94);
        let _item00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._item00);
        this._item00.setTouchEnabled(false);
        this._item00.setUnifySizeEnabled(false);
        this._item00.ignoreContentAdaptWithSize(false);
        this._item00.setContentSize(cc.size(177.822, 239.8827));

        ///// # _imgJackpotCellBgr
        this._imgJackpotCellBgr = new ccui.ImageView();
        this._imgJackpotCellBgr.setName("_imgJackpotCellBgr");
        this._item00.addChild(this._imgJackpotCellBgr);
        this._imgJackpotCellBgr.setCascadeOpacityEnabled(true);
        this._imgJackpotCellBgr.setCascadeColorEnabled(true);
        this._imgJackpotCellBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgJackpotCellBgr, 0.5, 0.5);
        let _imgJackpotCellBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgJackpotCellBgr);
        _imgJackpotCellBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgJackpotCellBgrLayoutComponent.setPositionPercentX(0.5);
        _imgJackpotCellBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgJackpotCellBgrLayoutComponent.setPositionPercentY(0.5);
        this._imgJackpotCellBgr.loadTexture("jackpot/mega/JackpotCell.png", 1);
        this._imgJackpotCellBgr.setUnifySizeEnabled(false);
        this._imgJackpotCellBgr.ignoreContentAdaptWithSize(false);
        this._imgJackpotCellBgr.setContentSize(cc.size(223, 281));
        this._imgJackpotCellBgr.setTouchEnabled(false);

        ///// # _imgJackpotCellText
        this._imgJackpotCellText = new ccui.ImageView();
        this._imgJackpotCellText.setName("_imgJackpotCellText");
        this._item00.addChild(this._imgJackpotCellText);
        this._imgJackpotCellText.setCascadeOpacityEnabled(true);
        this._imgJackpotCellText.setCascadeColorEnabled(true);
        this._imgJackpotCellText.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgJackpotCellText, 0.5, 0.971);
        this._imgJackpotCellText.setRotation(90);
        let _imgJackpotCellTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgJackpotCellText);
        _imgJackpotCellTextLayoutComponent.setPositionPercentXEnabled(true);
        _imgJackpotCellTextLayoutComponent.setPositionPercentX(0.5);
        _imgJackpotCellTextLayoutComponent.setPositionPercentYEnabled(true);
        _imgJackpotCellTextLayoutComponent.setPositionPercentY(0.971);
        this._imgJackpotCellText.loadTexture("jackpot/other/Logo.png", 1);
        this._imgJackpotCellText.setUnifySizeEnabled(false);
        this._imgJackpotCellText.ignoreContentAdaptWithSize(false);
        this._imgJackpotCellText.setContentSize(cc.size(136.5921, 44.2372));
        this._imgJackpotCellText.setTouchEnabled(false);

        ///// # _jackpotLight_00
        this._jackpotLight_00 = new ccui.ImageView();
        this._jackpotLight_00.setName("_jackpotLight_00");
        this._item00.addChild(this._jackpotLight_00);
        this._jackpotLight_00.setCascadeOpacityEnabled(true);
        this._jackpotLight_00.setCascadeColorEnabled(true);
        this._jackpotLight_00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._jackpotLight_00, 0.3253, 0.3137);
        let _jackpotLight_00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._jackpotLight_00);
        _jackpotLight_00LayoutComponent.setPositionPercentXEnabled(true);
        _jackpotLight_00LayoutComponent.setPositionPercentX(0.3253);
        _jackpotLight_00LayoutComponent.setPositionPercentYEnabled(true);
        _jackpotLight_00LayoutComponent.setPositionPercentY(0.3137);
        this._jackpotLight_00.loadTexture("basics/effects/LightDot_02.png", 1);
        this._jackpotLight_00.setUnifySizeEnabled(false);
        this._jackpotLight_00.ignoreContentAdaptWithSize(false);
        this._jackpotLight_00.setContentSize(cc.size(32, 32));
        this._jackpotLight_00.setTouchEnabled(false);

        ///// # _jackpotLight_01
        this._jackpotLight_01 = new ccui.ImageView();
        this._jackpotLight_01.setName("_jackpotLight_01");
        this._item00.addChild(this._jackpotLight_01);
        this._jackpotLight_01.setCascadeOpacityEnabled(true);
        this._jackpotLight_01.setCascadeColorEnabled(true);
        this._jackpotLight_01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._jackpotLight_01, 0.2253, 0.481);
        let _jackpotLight_01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._jackpotLight_01);
        _jackpotLight_01LayoutComponent.setPositionPercentXEnabled(true);
        _jackpotLight_01LayoutComponent.setPositionPercentX(0.2253);
        _jackpotLight_01LayoutComponent.setPositionPercentYEnabled(true);
        _jackpotLight_01LayoutComponent.setPositionPercentY(0.481);
        this._jackpotLight_01.loadTexture("basics/effects/LightDot_03.png", 1);
        this._jackpotLight_01.setUnifySizeEnabled(false);
        this._jackpotLight_01.ignoreContentAdaptWithSize(false);
        this._jackpotLight_01.setContentSize(cc.size(32, 32));
        this._jackpotLight_01.setTouchEnabled(false);

        ///// # _jackpotLight_02
        this._jackpotLight_02 = new ccui.ImageView();
        this._jackpotLight_02.setName("_jackpotLight_02");
        this._item00.addChild(this._jackpotLight_02);
        this._jackpotLight_02.setCascadeOpacityEnabled(true);
        this._jackpotLight_02.setCascadeColorEnabled(true);
        this._jackpotLight_02.setAnchorPoint(cc.p(0.519, 0.5616));
        ck.UIUtils.setPositionPercent(this._jackpotLight_02, 0.1482, 0.6383);
        let _jackpotLight_02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._jackpotLight_02);
        _jackpotLight_02LayoutComponent.setPositionPercentXEnabled(true);
        _jackpotLight_02LayoutComponent.setPositionPercentX(0.1482);
        _jackpotLight_02LayoutComponent.setPositionPercentYEnabled(true);
        _jackpotLight_02LayoutComponent.setPositionPercentY(0.6383);
        this._jackpotLight_02.loadTexture("basics/effects/LightDot_02.png", 1);
        this._jackpotLight_02.setUnifySizeEnabled(false);
        this._jackpotLight_02.ignoreContentAdaptWithSize(false);
        this._jackpotLight_02.setContentSize(cc.size(32, 32));
        this._jackpotLight_02.setTouchEnabled(false);

        ///// # _jackpotLight_03
        this._jackpotLight_03 = new ccui.ImageView();
        this._jackpotLight_03.setName("_jackpotLight_03");
        this._item00.addChild(this._jackpotLight_03);
        this._jackpotLight_03.setCascadeOpacityEnabled(true);
        this._jackpotLight_03.setCascadeColorEnabled(true);
        this._jackpotLight_03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._jackpotLight_03, 0.0724, 0.761);
        let _jackpotLight_03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._jackpotLight_03);
        _jackpotLight_03LayoutComponent.setPositionPercentXEnabled(true);
        _jackpotLight_03LayoutComponent.setPositionPercentX(0.0724);
        _jackpotLight_03LayoutComponent.setPositionPercentYEnabled(true);
        _jackpotLight_03LayoutComponent.setPositionPercentY(0.761);
        this._jackpotLight_03.loadTexture("basics/effects/LightDot_03.png", 1);
        this._jackpotLight_03.setUnifySizeEnabled(false);
        this._jackpotLight_03.ignoreContentAdaptWithSize(false);
        this._jackpotLight_03.setContentSize(cc.size(32, 32));
        this._jackpotLight_03.setTouchEnabled(false);

        ///// # _jackpotLight_04
        this._jackpotLight_04 = new ccui.ImageView();
        this._jackpotLight_04.setName("_jackpotLight_04");
        this._item00.addChild(this._jackpotLight_04);
        this._jackpotLight_04.setCascadeOpacityEnabled(true);
        this._jackpotLight_04.setCascadeColorEnabled(true);
        this._jackpotLight_04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._jackpotLight_04, -0.0123, 0.9237);
        let _jackpotLight_04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._jackpotLight_04);
        _jackpotLight_04LayoutComponent.setPositionPercentXEnabled(true);
        _jackpotLight_04LayoutComponent.setPositionPercentX(-0.0123);
        _jackpotLight_04LayoutComponent.setPositionPercentYEnabled(true);
        _jackpotLight_04LayoutComponent.setPositionPercentY(0.9237);
        this._jackpotLight_04.loadTexture("basics/effects/LightDot_02.png", 1);
        this._jackpotLight_04.setUnifySizeEnabled(false);
        this._jackpotLight_04.ignoreContentAdaptWithSize(false);
        this._jackpotLight_04.setContentSize(cc.size(32, 32));
        this._jackpotLight_04.setTouchEnabled(false);

        ///// # _jackpotLight_05
        this._jackpotLight_05 = new ccui.ImageView();
        this._jackpotLight_05.setName("_jackpotLight_05");
        this._item00.addChild(this._jackpotLight_05);
        this._jackpotLight_05.setCascadeOpacityEnabled(true);
        this._jackpotLight_05.setCascadeColorEnabled(true);
        this._jackpotLight_05.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._jackpotLight_05, 0.2525, 0.982);
        let _jackpotLight_05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._jackpotLight_05);
        _jackpotLight_05LayoutComponent.setPositionPercentXEnabled(true);
        _jackpotLight_05LayoutComponent.setPositionPercentX(0.2525);
        _jackpotLight_05LayoutComponent.setPositionPercentYEnabled(true);
        _jackpotLight_05LayoutComponent.setPositionPercentY(0.982);
        this._jackpotLight_05.loadTexture("basics/effects/LightDot_03.png", 1);
        this._jackpotLight_05.setUnifySizeEnabled(false);
        this._jackpotLight_05.ignoreContentAdaptWithSize(false);
        this._jackpotLight_05.setContentSize(cc.size(32, 32));
        this._jackpotLight_05.setTouchEnabled(false);

        ///// # _jackpotLight_06
        this._jackpotLight_06 = new ccui.ImageView();
        this._jackpotLight_06.setName("_jackpotLight_06");
        this._item00.addChild(this._jackpotLight_06);
        this._jackpotLight_06.setCascadeOpacityEnabled(true);
        this._jackpotLight_06.setCascadeColorEnabled(true);
        this._jackpotLight_06.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._jackpotLight_06, 0.5, 1);
        let _jackpotLight_06LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._jackpotLight_06);
        _jackpotLight_06LayoutComponent.setPositionPercentXEnabled(true);
        _jackpotLight_06LayoutComponent.setPositionPercentX(0.5);
        _jackpotLight_06LayoutComponent.setPositionPercentYEnabled(true);
        _jackpotLight_06LayoutComponent.setPositionPercentY(1);
        this._jackpotLight_06.loadTexture("basics/effects/LightDot_02.png", 1);
        this._jackpotLight_06.setUnifySizeEnabled(false);
        this._jackpotLight_06.ignoreContentAdaptWithSize(false);
        this._jackpotLight_06.setContentSize(cc.size(32, 32));
        this._jackpotLight_06.setTouchEnabled(false);

        ///// # _jackpotLight_07
        this._jackpotLight_07 = new ccui.ImageView();
        this._jackpotLight_07.setName("_jackpotLight_07");
        this._item00.addChild(this._jackpotLight_07);
        this._jackpotLight_07.setCascadeOpacityEnabled(true);
        this._jackpotLight_07.setCascadeColorEnabled(true);
        this._jackpotLight_07.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._jackpotLight_07, 0.7648, 0.9833);
        let _jackpotLight_07LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._jackpotLight_07);
        _jackpotLight_07LayoutComponent.setPositionPercentXEnabled(true);
        _jackpotLight_07LayoutComponent.setPositionPercentX(0.7648);
        _jackpotLight_07LayoutComponent.setPositionPercentYEnabled(true);
        _jackpotLight_07LayoutComponent.setPositionPercentY(0.9833);
        this._jackpotLight_07.loadTexture("basics/effects/LightDot_03.png", 1);
        this._jackpotLight_07.setUnifySizeEnabled(false);
        this._jackpotLight_07.ignoreContentAdaptWithSize(false);
        this._jackpotLight_07.setContentSize(cc.size(32, 32));
        this._jackpotLight_07.setTouchEnabled(false);

        ///// # _jackpotLight_08
        this._jackpotLight_08 = new ccui.ImageView();
        this._jackpotLight_08.setName("_jackpotLight_08");
        this._item00.addChild(this._jackpotLight_08);
        this._jackpotLight_08.setCascadeOpacityEnabled(true);
        this._jackpotLight_08.setCascadeColorEnabled(true);
        this._jackpotLight_08.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._jackpotLight_08, 1.0174, 0.9211);
        let _jackpotLight_08LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._jackpotLight_08);
        _jackpotLight_08LayoutComponent.setPositionPercentXEnabled(true);
        _jackpotLight_08LayoutComponent.setPositionPercentX(1.0174);
        _jackpotLight_08LayoutComponent.setPositionPercentYEnabled(true);
        _jackpotLight_08LayoutComponent.setPositionPercentY(0.9211);
        this._jackpotLight_08.loadTexture("basics/effects/LightDot_02.png", 1);
        this._jackpotLight_08.setUnifySizeEnabled(false);
        this._jackpotLight_08.ignoreContentAdaptWithSize(false);
        this._jackpotLight_08.setContentSize(cc.size(32, 32));
        this._jackpotLight_08.setTouchEnabled(false);

        ///// # _jackpotLight_09
        this._jackpotLight_09 = new ccui.ImageView();
        this._jackpotLight_09.setName("_jackpotLight_09");
        this._item00.addChild(this._jackpotLight_09);
        this._jackpotLight_09.setCascadeOpacityEnabled(true);
        this._jackpotLight_09.setCascadeColorEnabled(true);
        this._jackpotLight_09.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._jackpotLight_09, 0.9419, 0.7611);
        let _jackpotLight_09LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._jackpotLight_09);
        _jackpotLight_09LayoutComponent.setPositionPercentXEnabled(true);
        _jackpotLight_09LayoutComponent.setPositionPercentX(0.9419);
        _jackpotLight_09LayoutComponent.setPositionPercentYEnabled(true);
        _jackpotLight_09LayoutComponent.setPositionPercentY(0.7611);
        this._jackpotLight_09.loadTexture("basics/effects/LightDot_03.png", 1);
        this._jackpotLight_09.setUnifySizeEnabled(false);
        this._jackpotLight_09.ignoreContentAdaptWithSize(false);
        this._jackpotLight_09.setContentSize(cc.size(32, 32));
        this._jackpotLight_09.setTouchEnabled(false);

        ///// # _jackpotLight_10
        this._jackpotLight_10 = new ccui.ImageView();
        this._jackpotLight_10.setName("_jackpotLight_10");
        this._item00.addChild(this._jackpotLight_10);
        this._jackpotLight_10.setCascadeOpacityEnabled(true);
        this._jackpotLight_10.setCascadeColorEnabled(true);
        this._jackpotLight_10.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._jackpotLight_10, 0.8542, 0.6216);
        let _jackpotLight_10LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._jackpotLight_10);
        _jackpotLight_10LayoutComponent.setPositionPercentXEnabled(true);
        _jackpotLight_10LayoutComponent.setPositionPercentX(0.8542);
        _jackpotLight_10LayoutComponent.setPositionPercentYEnabled(true);
        _jackpotLight_10LayoutComponent.setPositionPercentY(0.6216);
        this._jackpotLight_10.loadTexture("basics/effects/LightDot_02.png", 1);
        this._jackpotLight_10.setUnifySizeEnabled(false);
        this._jackpotLight_10.ignoreContentAdaptWithSize(false);
        this._jackpotLight_10.setContentSize(cc.size(32, 32));
        this._jackpotLight_10.setTouchEnabled(false);

        ///// # _jackpotLight_11
        this._jackpotLight_11 = new ccui.ImageView();
        this._jackpotLight_11.setName("_jackpotLight_11");
        this._item00.addChild(this._jackpotLight_11);
        this._jackpotLight_11.setCascadeOpacityEnabled(true);
        this._jackpotLight_11.setCascadeColorEnabled(true);
        this._jackpotLight_11.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._jackpotLight_11, 0.7726, 0.473);
        let _jackpotLight_11LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._jackpotLight_11);
        _jackpotLight_11LayoutComponent.setPositionPercentXEnabled(true);
        _jackpotLight_11LayoutComponent.setPositionPercentX(0.7726);
        _jackpotLight_11LayoutComponent.setPositionPercentYEnabled(true);
        _jackpotLight_11LayoutComponent.setPositionPercentY(0.473);
        this._jackpotLight_11.loadTexture("basics/effects/LightDot_03.png", 1);
        this._jackpotLight_11.setUnifySizeEnabled(false);
        this._jackpotLight_11.ignoreContentAdaptWithSize(false);
        this._jackpotLight_11.setContentSize(cc.size(32, 32));
        this._jackpotLight_11.setTouchEnabled(false);

        ///// # _jackpotLight_12
        this._jackpotLight_12 = new ccui.ImageView();
        this._jackpotLight_12.setName("_jackpotLight_12");
        this._item00.addChild(this._jackpotLight_12);
        this._jackpotLight_12.setCascadeOpacityEnabled(true);
        this._jackpotLight_12.setCascadeColorEnabled(true);
        this._jackpotLight_12.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._jackpotLight_12, 0.7002, 0.3131);
        let _jackpotLight_12LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._jackpotLight_12);
        _jackpotLight_12LayoutComponent.setPositionPercentXEnabled(true);
        _jackpotLight_12LayoutComponent.setPositionPercentX(0.7002);
        _jackpotLight_12LayoutComponent.setPositionPercentYEnabled(true);
        _jackpotLight_12LayoutComponent.setPositionPercentY(0.3131);
        this._jackpotLight_12.loadTexture("basics/effects/LightDot_02.png", 1);
        this._jackpotLight_12.setUnifySizeEnabled(false);
        this._jackpotLight_12.ignoreContentAdaptWithSize(false);
        this._jackpotLight_12.setContentSize(cc.size(32, 32));
        this._jackpotLight_12.setTouchEnabled(false);

        ///// # _item01
        this._item01 = new ccui.Layout();
        this._item01.setName("_item01");
        this._nodeItemsControl.addChild(this._item01);
        this._item01.setCascadeOpacityEnabled(true);
        this._item01.setCascadeColorEnabled(true);
        this._item01.setAnchorPoint(cc.p(0.5, 0.5));
        this._item01.setPosition(84.8113, 84.8113);
        this._item01.setRotation(45);
        let _item01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._item01);
        this._item01.setTouchEnabled(false);
        this._item01.setUnifySizeEnabled(false);
        this._item01.ignoreContentAdaptWithSize(false);
        this._item01.setContentSize(cc.size(177.82, 239.8827));

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._item01.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.9083);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.9083);
        this._imgIcon.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(45, 45));
        this._imgIcon.setTouchEnabled(false);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._item01.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.5016, 0.7931);
        this._txtAmount.setRotationX(89.3128);
        this._txtAmount.setRotationY(89.3159);
        this._txtAmount.setTextColor(cc.color(255, 255, 0, 255));
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.5016);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.7931);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(true);
        this._txtAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmount.setDefaultFontSize(40);
        this._txtAmount.setTextHorizontalAlignment(1);
        this._txtAmount.setTextVerticalAlignment(1);
        this._txtAmount.enableOutline(cc.color(99, 49, 13, 255), 2);

        ///// # _item02
        this._item02 = new ccui.Layout();
        this._item02.setName("_item02");
        this._nodeItemsControl.addChild(this._item02);
        this._item02.setCascadeOpacityEnabled(true);
        this._item02.setCascadeColorEnabled(true);
        this._item02.setAnchorPoint(cc.p(0.5, 0.5));
        this._item02.setPosition(119.9413, 0);
        this._item02.setRotation(90);
        let _item02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._item02);
        this._item02.setTouchEnabled(false);
        this._item02.setUnifySizeEnabled(false);
        this._item02.ignoreContentAdaptWithSize(false);
        this._item02.setContentSize(cc.size(177.82, 239.8827));

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._item02.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.9083);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.9083);
        this._imgIcon.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(45, 45));
        this._imgIcon.setTouchEnabled(false);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._item02.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.5137, 0.7677);
        this._txtAmount.setRotation(94.5948);
        this._txtAmount.setTextColor(cc.color(255, 255, 0, 255));
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.5137);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.7677);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(true);
        this._txtAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmount.setDefaultFontSize(40);
        this._txtAmount.setTextHorizontalAlignment(1);
        this._txtAmount.setTextVerticalAlignment(1);
        this._txtAmount.enableOutline(cc.color(99, 49, 13, 255), 2);

        ///// # _item03
        this._item03 = new ccui.Layout();
        this._item03.setName("_item03");
        this._nodeItemsControl.addChild(this._item03);
        this._item03.setCascadeOpacityEnabled(true);
        this._item03.setCascadeColorEnabled(true);
        this._item03.setAnchorPoint(cc.p(0.5, 0.5));
        this._item03.setPosition(84.8113, -84.8113);
        this._item03.setRotation(135);
        let _item03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._item03);
        this._item03.setTouchEnabled(false);
        this._item03.setUnifySizeEnabled(false);
        this._item03.ignoreContentAdaptWithSize(false);
        this._item03.setContentSize(cc.size(177.82, 239.8827));

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._item03.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.9083);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.9083);
        this._imgIcon.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(45, 45));
        this._imgIcon.setTouchEnabled(false);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._item03.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.5167, 0.7789);
        this._txtAmount.setRotationX(93.466);
        this._txtAmount.setRotationY(93.4651);
        this._txtAmount.setTextColor(cc.color(255, 255, 0, 255));
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.5167);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.7789);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(true);
        this._txtAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmount.setDefaultFontSize(40);
        this._txtAmount.setTextHorizontalAlignment(1);
        this._txtAmount.setTextVerticalAlignment(1);
        this._txtAmount.enableOutline(cc.color(99, 49, 13, 255), 2);

        ///// # _item04
        this._item04 = new ccui.Layout();
        this._item04.setName("_item04");
        this._nodeItemsControl.addChild(this._item04);
        this._item04.setCascadeOpacityEnabled(true);
        this._item04.setCascadeColorEnabled(true);
        this._item04.setAnchorPoint(cc.p(0.5, 0.5));
        this._item04.setPosition(0, -119.9414);
        this._item04.setRotation(180);
        let _item04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._item04);
        this._item04.setTouchEnabled(false);
        this._item04.setUnifySizeEnabled(false);
        this._item04.ignoreContentAdaptWithSize(false);
        this._item04.setContentSize(cc.size(177.82, 239.8827));

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._item04.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.9083);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.9083);
        this._imgIcon.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(45, 45));
        this._imgIcon.setTouchEnabled(false);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._item04.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.5008, 0.7772);
        this._txtAmount.setRotationX(90.1582);
        this._txtAmount.setRotationY(90.1622);
        this._txtAmount.setTextColor(cc.color(255, 255, 0, 255));
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.5008);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.7772);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(true);
        this._txtAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmount.setDefaultFontSize(40);
        this._txtAmount.setTextHorizontalAlignment(1);
        this._txtAmount.setTextVerticalAlignment(1);
        this._txtAmount.enableOutline(cc.color(99, 49, 13, 255), 2);

        ///// # _item05
        this._item05 = new ccui.Layout();
        this._item05.setName("_item05");
        this._nodeItemsControl.addChild(this._item05);
        this._item05.setCascadeOpacityEnabled(true);
        this._item05.setCascadeColorEnabled(true);
        this._item05.setAnchorPoint(cc.p(0.5, 0.5));
        this._item05.setPosition(-84.8113, -84.8114);
        this._item05.setRotation(225);
        let _item05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._item05);
        this._item05.setTouchEnabled(false);
        this._item05.setUnifySizeEnabled(false);
        this._item05.ignoreContentAdaptWithSize(false);
        this._item05.setContentSize(cc.size(177.82, 239.8827));

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._item05.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.9083);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.9083);
        this._imgIcon.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(45, 45));
        this._imgIcon.setTouchEnabled(false);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._item05.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.4861, 0.7748);
        this._txtAmount.setRotationX(447.0489);
        this._txtAmount.setRotationY(447.0551);
        this._txtAmount.setTextColor(cc.color(255, 255, 0, 255));
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.4861);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.7748);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(true);
        this._txtAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmount.setDefaultFontSize(40);
        this._txtAmount.setTextHorizontalAlignment(1);
        this._txtAmount.setTextVerticalAlignment(1);
        this._txtAmount.enableOutline(cc.color(99, 49, 13, 255), 2);

        ///// # _item06
        this._item06 = new ccui.Layout();
        this._item06.setName("_item06");
        this._nodeItemsControl.addChild(this._item06);
        this._item06.setCascadeOpacityEnabled(true);
        this._item06.setCascadeColorEnabled(true);
        this._item06.setAnchorPoint(cc.p(0.5, 0.5));
        this._item06.setPosition(-119.9413, 0);
        this._item06.setRotation(-90);
        let _item06LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._item06);
        this._item06.setTouchEnabled(false);
        this._item06.setUnifySizeEnabled(false);
        this._item06.ignoreContentAdaptWithSize(false);
        this._item06.setContentSize(cc.size(177.82, 239.8827));

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._item06.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.9083);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.9083);
        this._imgIcon.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(45, 45));
        this._imgIcon.setTouchEnabled(false);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._item06.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.5, 0.773);
        this._txtAmount.setRotation(90);
        this._txtAmount.setTextColor(cc.color(255, 255, 0, 255));
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.5);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.773);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(true);
        this._txtAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmount.setDefaultFontSize(40);
        this._txtAmount.setTextHorizontalAlignment(1);
        this._txtAmount.setTextVerticalAlignment(1);
        this._txtAmount.enableOutline(cc.color(99, 49, 13, 255), 2);

        ///// # _item07
        this._item07 = new ccui.Layout();
        this._item07.setName("_item07");
        this._nodeItemsControl.addChild(this._item07);
        this._item07.setCascadeOpacityEnabled(true);
        this._item07.setCascadeColorEnabled(true);
        this._item07.setAnchorPoint(cc.p(0.5, 0.5));
        this._item07.setPosition(-84.8113, 84.8113);
        this._item07.setRotation(-45);
        let _item07LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._item07);
        this._item07.setTouchEnabled(false);
        this._item07.setUnifySizeEnabled(false);
        this._item07.ignoreContentAdaptWithSize(false);
        this._item07.setContentSize(cc.size(177.82, 239.8827));

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._item07.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.9083);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.9083);
        this._imgIcon.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(45, 45));
        this._imgIcon.setTouchEnabled(false);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._item07.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.5, 0.7793);
        this._txtAmount.setRotation(90);
        this._txtAmount.setTextColor(cc.color(255, 255, 0, 255));
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.5);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.7793);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(true);
        this._txtAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmount.setDefaultFontSize(40);
        this._txtAmount.setTextHorizontalAlignment(1);
        this._txtAmount.setTextVerticalAlignment(1);
        this._txtAmount.enableOutline(cc.color(99, 49, 13, 255), 2);

        ///// # _imgArrow
        this._imgArrow = new ccui.ImageView();
        this._imgArrow.setName("_imgArrow");
        this._layoutContainer.addChild(this._imgArrow);
        this._imgArrow.setCascadeOpacityEnabled(true);
        this._imgArrow.setCascadeColorEnabled(true);
        this._imgArrow.setAnchorPoint(cc.p(0.505, 0.4));
        ck.UIUtils.setPositionPercent(this._imgArrow, 0.5, 0.5);
        let _imgArrowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgArrow);
        _imgArrowLayoutComponent.setPositionPercentXEnabled(true);
        _imgArrowLayoutComponent.setPositionPercentX(0.5);
        _imgArrowLayoutComponent.setPositionPercentYEnabled(true);
        _imgArrowLayoutComponent.setPositionPercentY(0.5);
        this._imgArrow.loadTexture("jackpot/mega/Needle.png", 1);
        this._imgArrow.setUnifySizeEnabled(false);
        this._imgArrow.ignoreContentAdaptWithSize(false);
        this._imgArrow.setContentSize(cc.size(130, 156));
        this._imgArrow.setTouchEnabled(false);

        ///// # _layoutNeedle
        this._layoutNeedle = new ccui.Layout();
        this._layoutNeedle.setName("_layoutNeedle");
        this._layoutWheel.addChild(this._layoutNeedle);
        this._layoutNeedle.setCascadeOpacityEnabled(true);
        this._layoutNeedle.setCascadeColorEnabled(true);
        this._layoutNeedle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutNeedle, 0.5, 0.9);
        this._layoutNeedle.setRotation(180);
        let _layoutNeedleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutNeedle);
        _layoutNeedleLayoutComponent.setPositionPercentXEnabled(true);
        _layoutNeedleLayoutComponent.setPositionPercentX(0.5);
        _layoutNeedleLayoutComponent.setPositionPercentYEnabled(true);
        _layoutNeedleLayoutComponent.setPositionPercentY(0.9);
        this._layoutNeedle.setTouchEnabled(true);
        this._layoutNeedle.setUnifySizeEnabled(false);
        this._layoutNeedle.ignoreContentAdaptWithSize(false);
        this._layoutNeedle.setContentSize(cc.size(78.77, 82.868));

        ///// # _imgNeedle
        this._imgNeedle = new ccui.ImageView();
        this._imgNeedle.setName("_imgNeedle");
        this._layoutNeedle.addChild(this._imgNeedle);
        this._imgNeedle.setCascadeOpacityEnabled(true);
        this._imgNeedle.setCascadeColorEnabled(true);
        this._imgNeedle.setAnchorPoint(cc.p(0.505, 0.4));
        ck.UIUtils.setPositionPercent(this._imgNeedle, 0.5156, 0.4844);
        this._imgNeedle.setVisible(false);
        let _imgNeedleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNeedle);
        _imgNeedleLayoutComponent.setPositionPercentXEnabled(true);
        _imgNeedleLayoutComponent.setPositionPercentX(0.5156);
        _imgNeedleLayoutComponent.setPositionPercentYEnabled(true);
        _imgNeedleLayoutComponent.setPositionPercentY(0.4844);
        this._imgNeedle.loadTexture("jackpot/mega/Needle.png", 1);
        this._imgNeedle.setUnifySizeEnabled(false);
        this._imgNeedle.ignoreContentAdaptWithSize(false);
        this._imgNeedle.setContentSize(cc.size(130, 156));
        this._imgNeedle.setTouchEnabled(false);

        ///// # _layoutJackpotBoard
        this._layoutJackpotBoard = new ccui.Layout();
        this._layoutJackpotBoard.setName("_layoutJackpotBoard");
        this._layoutWheel.addChild(this._layoutJackpotBoard);
        this._layoutJackpotBoard.setCascadeOpacityEnabled(true);
        this._layoutJackpotBoard.setCascadeColorEnabled(true);
        this._layoutJackpotBoard.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutJackpotBoard, 0.5, 0.9385);
        let _layoutJackpotBoardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutJackpotBoard);
        _layoutJackpotBoardLayoutComponent.setPositionPercentXEnabled(true);
        _layoutJackpotBoardLayoutComponent.setPositionPercentX(0.5);
        _layoutJackpotBoardLayoutComponent.setPositionPercentYEnabled(true);
        _layoutJackpotBoardLayoutComponent.setPositionPercentY(0.9385);
        this._layoutJackpotBoard.setTouchEnabled(true);
        this._layoutJackpotBoard.setUnifySizeEnabled(false);
        this._layoutJackpotBoard.ignoreContentAdaptWithSize(false);
        this._layoutJackpotBoard.setContentSize(cc.size(482.8138, 96.5313));

        ///// # _imgJackpotBoard
        this._imgJackpotBoard = new ccui.ImageView();
        this._imgJackpotBoard.setName("_imgJackpotBoard");
        this._layoutJackpotBoard.addChild(this._imgJackpotBoard);
        this._imgJackpotBoard.setCascadeOpacityEnabled(true);
        this._imgJackpotBoard.setCascadeColorEnabled(true);
        this._imgJackpotBoard.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgJackpotBoard, 0.4956, -0.106);
        let _imgJackpotBoardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgJackpotBoard);
        _imgJackpotBoardLayoutComponent.setPositionPercentXEnabled(true);
        _imgJackpotBoardLayoutComponent.setPositionPercentX(0.4956);
        _imgJackpotBoardLayoutComponent.setPositionPercentYEnabled(true);
        _imgJackpotBoardLayoutComponent.setPositionPercentY(-0.106);
        this._imgJackpotBoard.loadTexture("jackpot/mega/JackpotBoard.png", 1);
        this._imgJackpotBoard.setUnifySizeEnabled(false);
        this._imgJackpotBoard.ignoreContentAdaptWithSize(false);
        this._imgJackpotBoard.setContentSize(cc.size(421, 117));
        this._imgJackpotBoard.setTouchEnabled(false);

        ///// # _imgJackpotBoardCoin
        this._imgJackpotBoardCoin = new ccui.ImageView();
        this._imgJackpotBoardCoin.setName("_imgJackpotBoardCoin");
        this._layoutJackpotBoard.addChild(this._imgJackpotBoardCoin);
        this._imgJackpotBoardCoin.setCascadeOpacityEnabled(true);
        this._imgJackpotBoardCoin.setCascadeColorEnabled(true);
        this._imgJackpotBoardCoin.setAnchorPoint(cc.p(0.505, 0.4));
        ck.UIUtils.setPositionPercent(this._imgJackpotBoardCoin, 0.243, 0.4282);
        let _imgJackpotBoardCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgJackpotBoardCoin);
        _imgJackpotBoardCoinLayoutComponent.setPositionPercentXEnabled(true);
        _imgJackpotBoardCoinLayoutComponent.setPositionPercentX(0.243);
        _imgJackpotBoardCoinLayoutComponent.setPositionPercentYEnabled(true);
        _imgJackpotBoardCoinLayoutComponent.setPositionPercentY(0.4282);
        this._imgJackpotBoardCoin.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgJackpotBoardCoin.setUnifySizeEnabled(false);
        this._imgJackpotBoardCoin.ignoreContentAdaptWithSize(false);
        this._imgJackpotBoardCoin.setContentSize(cc.size(64, 64));
        this._imgJackpotBoardCoin.setTouchEnabled(false);

        ///// # _txtJackpotValue
        this._txtJackpotValue = new ck.Text();
        this._txtJackpotValue.setName("_txtJackpotValue");
        this._layoutJackpotBoard.addChild(this._txtJackpotValue);
        this._txtJackpotValue.setCascadeOpacityEnabled(true);
        this._txtJackpotValue.setCascadeColorEnabled(true);
        this._txtJackpotValue.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtJackpotValue, 0.5559, 0.4946);
        this._txtJackpotValue.setTextColor(cc.color(249, 247, 11, 255));
        let _txtJackpotValueLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtJackpotValue);
        _txtJackpotValueLayoutComponent.setPositionPercentXEnabled(true);
        _txtJackpotValueLayoutComponent.setPositionPercentX(0.5559);
        _txtJackpotValueLayoutComponent.setPositionPercentYEnabled(true);
        _txtJackpotValueLayoutComponent.setPositionPercentY(0.4946);
        this._txtJackpotValue.setTouchEnabled(false);
        this._txtJackpotValue.ignoreContentAdaptWithSize(true);
        this._txtJackpotValue.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtJackpotValue.setDefaultFontSize(40);
        this._txtJackpotValue.setTextHorizontalAlignment(1);
        this._txtJackpotValue.setTextVerticalAlignment(1);
        this._txtJackpotValue.enableShadow(cc.color(187, 144, 19, 255), cc.size(0, -2), 0);

        ///// # _layoutBase
        this._layoutBase = new ccui.Layout();
        this._layoutBase.setName("_layoutBase");
        this._layoutWheel.addChild(this._layoutBase);
        this._layoutBase.setCascadeOpacityEnabled(true);
        this._layoutBase.setCascadeColorEnabled(true);
        this._layoutBase.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutBase, 0.5, 0.0868);
        let _layoutBaseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBase);
        _layoutBaseLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBaseLayoutComponent.setPositionPercentX(0.5);
        _layoutBaseLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBaseLayoutComponent.setPositionPercentY(0.0868);
        _layoutBaseLayoutComponent.setPercentWidthEnabled(true);
        _layoutBaseLayoutComponent.setPercentWidth(1);
        this._layoutBase.setTouchEnabled(false);
        this._layoutBase.setUnifySizeEnabled(false);
        this._layoutBase.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutBase, 1);
        this._layoutBase.setContentSize(cc.size(this._layoutBase.width, 365));

        ///// # _imgBase
        this._imgBase = new ccui.ImageView();
        this._imgBase.setName("_imgBase");
        this._layoutBase.addChild(this._imgBase);
        this._imgBase.setCascadeOpacityEnabled(true);
        this._imgBase.setCascadeColorEnabled(true);
        this._imgBase.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBase, 0.495, 0.9945);
        let _imgBaseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBase);
        _imgBaseLayoutComponent.setPositionPercentXEnabled(true);
        _imgBaseLayoutComponent.setPositionPercentX(0.495);
        _imgBaseLayoutComponent.setPositionPercentYEnabled(true);
        _imgBaseLayoutComponent.setPositionPercentY(0.9945);
        this._imgBase.loadTexture("jackpot/mega/Base.png", 1);
        this._imgBase.setUnifySizeEnabled(false);
        this._imgBase.ignoreContentAdaptWithSize(false);
        this._imgBase.setContentSize(cc.size(640, 361));
        this._imgBase.setTouchEnabled(false);

        ///// # _imgWheelName
        this._imgWheelName = new ccui.ImageView();
        this._imgWheelName.setName("_imgWheelName");
        this._layoutBase.addChild(this._imgWheelName);
        this._imgWheelName.setCascadeOpacityEnabled(true);
        this._imgWheelName.setCascadeColorEnabled(true);
        this._imgWheelName.setAnchorPoint(cc.p(0.505, 0.5));
        ck.UIUtils.setPositionPercent(this._imgWheelName, 0.5, 0.6315);
        this._imgWheelName.setVisible(false);
        let _imgWheelNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgWheelName);
        _imgWheelNameLayoutComponent.setPositionPercentXEnabled(true);
        _imgWheelNameLayoutComponent.setPositionPercentX(0.5);
        _imgWheelNameLayoutComponent.setPositionPercentYEnabled(true);
        _imgWheelNameLayoutComponent.setPositionPercentY(0.6315);
        this._imgWheelName.loadTexture("texts/jackpot/MegaWheel.png", 1);
        this._imgWheelName.setTouchEnabled(false);

        ///// # _txtTicket
        this._txtTicket = new ck.Text();
        this._txtTicket.setName("_txtTicket");
        this._layoutBase.addChild(this._txtTicket);
        this._txtTicket.setCascadeOpacityEnabled(true);
        this._txtTicket.setCascadeColorEnabled(true);
        this._txtTicket.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTicket, 0.4452, 0.6437);
        let _txtTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTicket);
        _txtTicketLayoutComponent.setPositionPercentXEnabled(true);
        _txtTicketLayoutComponent.setPositionPercentX(0.4452);
        _txtTicketLayoutComponent.setPositionPercentYEnabled(true);
        _txtTicketLayoutComponent.setPositionPercentY(0.6437);
        this._txtTicket.setTouchEnabled(false);
        this._txtTicket.ignoreContentAdaptWithSize(true);
        this._txtTicket.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtTicket.setDefaultFontSize(55);
        this._txtTicket.setTextHorizontalAlignment(1);
        this._txtTicket.setTextVerticalAlignment(1);
        this._txtTicket.enableOutline(cc.color(109, 19, 87, 255), 3);

        ///// # _imgTicket
        this._imgTicket = new ccui.ImageView();
        this._imgTicket.setName("_imgTicket");
        this._layoutBase.addChild(this._imgTicket);
        this._imgTicket.setCascadeOpacityEnabled(true);
        this._imgTicket.setCascadeColorEnabled(true);
        this._imgTicket.setAnchorPoint(cc.p(0.505, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTicket, 0.5664, 0.6382);
        let _imgTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTicket);
        _imgTicketLayoutComponent.setPositionPercentXEnabled(true);
        _imgTicketLayoutComponent.setPositionPercentX(0.5664);
        _imgTicketLayoutComponent.setPositionPercentYEnabled(true);
        _imgTicketLayoutComponent.setPositionPercentY(0.6382);
        this._imgTicket.loadTexture("icons/color/wheel/Yellow.png", 1);
        this._imgTicket.setUnifySizeEnabled(false);
        this._imgTicket.ignoreContentAdaptWithSize(false);
        this._imgTicket.setContentSize(cc.size(55, 55));
        this._imgTicket.setTouchEnabled(false);

        ///// # _btnSpin
        this._btnSpin = new JackpotSpinButton();
        this._btnSpin.setName("_btnSpin");
        this._layoutWheel.addChild(this._btnSpin);
        this._btnSpin.setCascadeOpacityEnabled(true);
        this._btnSpin.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._btnSpin, 0.5, 0.1631);
        this._btnSpin.setScale(0.9, 0.9);
        let _btnSpinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnSpin);
        _btnSpinLayoutComponent.setPositionPercentXEnabled(true);
        _btnSpinLayoutComponent.setPositionPercentX(0.5);
        _btnSpinLayoutComponent.setPositionPercentYEnabled(true);
        _btnSpinLayoutComponent.setPositionPercentY(0.1631);

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._root.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.8406, 0.789);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.8406);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.789);
        this._imgClose.loadTexture("buttons/squares/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(73, 73));
        this._imgClose.setTouchEnabled(false);

        ///// # _layoutBot
        this._layoutBot = new ccui.Layout();
        this._layoutBot.setName("_layoutBot");
        this._root.addChild(this._layoutBot);
        this._layoutBot.setCascadeOpacityEnabled(true);
        this._layoutBot.setCascadeColorEnabled(true);
        this._layoutBot.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutBot, 0.5, 0.1074);
        let _layoutBotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBot);
        _layoutBotLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBotLayoutComponent.setPositionPercentX(0.5);
        _layoutBotLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBotLayoutComponent.setPositionPercentY(0.1074);
        _layoutBotLayoutComponent.setPercentWidthEnabled(true);
        _layoutBotLayoutComponent.setPercentWidth(1);
        _layoutBotLayoutComponent.setPercentHeightEnabled(true);
        _layoutBotLayoutComponent.setPercentHeight(0.075);
        this._layoutBot.setTouchEnabled(false);
        this._layoutBot.setUnifySizeEnabled(false);
        this._layoutBot.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBot, 1, 0.075);

    },



});

/**
 * Create JackpotPopup
 * @returns {_ccs.JackpotPopup}
 */
_ccs.JackpotPopup.create = function () {
    return new _ccs.JackpotPopup();
};
