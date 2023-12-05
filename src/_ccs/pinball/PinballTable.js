/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PinballTable
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.PinballTable = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutContainer: null,
    /** @type {ccui.ImageView} */
    _imgTableBg: null,
    /** @type {ccui.Layout} */
    _layoutPhysic: null,
    /** @type {ccui.ImageView} */
    _imgBall: null,
    /** @type {ccui.Layout} */
    _layoutBoudaries: null,
    /** @type {ccui.Layout} */
    _boundary_long: null,
    /** @type {ccui.ImageView} */
    _b_long_0: null,
    /** @type {ccui.ImageView} */
    _b_long: null,
    /** @type {ccui.Layout} */
    _boundary1: null,
    /** @type {ccui.ImageView} */
    _b_1_0: null,
    /** @type {ccui.ImageView} */
    _b_1: null,
    /** @type {ccui.Layout} */
    _boundary2: null,
    /** @type {ccui.ImageView} */
    _b_2_0: null,
    /** @type {ccui.ImageView} */
    _b_2: null,
    /** @type {ccui.Layout} */
    _boundary3: null,
    /** @type {ccui.ImageView} */
    _b_3_0: null,
    /** @type {ccui.ImageView} */
    _b_3: null,
    /** @type {ccui.Layout} */
    _boundary4: null,
    /** @type {ccui.ImageView} */
    _b_4_0: null,
    /** @type {ccui.ImageView} */
    _b_4: null,
    /** @type {ccui.Layout} */
    _boundary5: null,
    /** @type {ccui.ImageView} */
    _b_5_0: null,
    /** @type {ccui.ImageView} */
    _b_5: null,
    /** @type {ccui.Layout} */
    _layoutPegsShadow: null,
    /** @type {ccui.ImageView} */
    _peg_0_0: null,
    /** @type {ccui.ImageView} */
    _peg_0_1: null,
    /** @type {ccui.ImageView} */
    _peg_0_2: null,
    /** @type {ccui.ImageView} */
    _peg_0_3: null,
    /** @type {ccui.ImageView} */
    _peg_0_4: null,
    /** @type {ccui.ImageView} */
    _peg_1_0: null,
    /** @type {ccui.ImageView} */
    _peg_1_1: null,
    /** @type {ccui.ImageView} */
    _peg_1_2: null,
    /** @type {ccui.ImageView} */
    _peg_1_3: null,
    /** @type {ccui.ImageView} */
    _peg_1_4: null,
    /** @type {ccui.ImageView} */
    _peg_2_0: null,
    /** @type {ccui.ImageView} */
    _peg_2_1: null,
    /** @type {ccui.ImageView} */
    _peg_2_2: null,
    /** @type {ccui.ImageView} */
    _peg_2_3: null,
    /** @type {ccui.ImageView} */
    _peg_2_4: null,
    /** @type {ccui.ImageView} */
    _peg_3_0: null,
    /** @type {ccui.ImageView} */
    _peg_3_1: null,
    /** @type {ccui.ImageView} */
    _peg_3_2: null,
    /** @type {ccui.ImageView} */
    _peg_3_3: null,
    /** @type {ccui.ImageView} */
    _peg_3_4: null,
    /** @type {ccui.ImageView} */
    _peg_4_0: null,
    /** @type {ccui.ImageView} */
    _peg_4_1: null,
    /** @type {ccui.ImageView} */
    _peg_4_2: null,
    /** @type {ccui.ImageView} */
    _peg_4_3: null,
    /** @type {ccui.ImageView} */
    _peg_4_4: null,
    /** @type {ccui.ImageView} */
    _peg_5_0: null,
    /** @type {ccui.ImageView} */
    _peg_5_1: null,
    /** @type {ccui.ImageView} */
    _peg_5_2: null,
    /** @type {ccui.ImageView} */
    _peg_5_3: null,
    /** @type {ccui.ImageView} */
    _peg_5_4: null,
    /** @type {ccui.ImageView} */
    _peg_6_0: null,
    /** @type {ccui.ImageView} */
    _peg_6_1: null,
    /** @type {ccui.ImageView} */
    _peg_6_2: null,
    /** @type {ccui.ImageView} */
    _peg_7_0: null,
    /** @type {ccui.ImageView} */
    _peg_7_1: null,
    /** @type {ccui.ImageView} */
    _peg_7_2: null,
    /** @type {ccui.ImageView} */
    _peg_7_3: null,
    /** @type {ccui.ImageView} */
    _peg_8_0: null,
    /** @type {ccui.ImageView} */
    _peg_8_1: null,
    /** @type {ccui.ImageView} */
    _peg_8_2: null,
    /** @type {ccui.ImageView} */
    _peg_9_0: null,
    /** @type {ccui.ImageView} */
    _peg_9_1: null,
    /** @type {ccui.ImageView} */
    _peg_9_2: null,
    /** @type {ccui.ImageView} */
    _peg_10_0: null,
    /** @type {ccui.ImageView} */
    _peg_10_1: null,
    /** @type {ccui.ImageView} */
    _peg_10_2: null,
    /** @type {ccui.ImageView} */
    _peg_10_3: null,
    /** @type {ccui.ImageView} */
    _peg_11_0: null,
    /** @type {ccui.ImageView} */
    _peg_11_1: null,
    /** @type {ccui.ImageView} */
    _peg_11_2: null,
    /** @type {ccui.ImageView} */
    _peg_11_3: null,
    /** @type {ccui.ImageView} */
    _peg_11_4: null,
    /** @type {ccui.ImageView} */
    _peg_12_0: null,
    /** @type {ccui.ImageView} */
    _peg_12_1: null,
    /** @type {ccui.ImageView} */
    _peg_12_2: null,
    /** @type {ccui.ImageView} */
    _peg_12_3: null,
    /** @type {ccui.ImageView} */
    _peg_13_0: null,
    /** @type {ccui.ImageView} */
    _peg_13_1: null,
    /** @type {ccui.ImageView} */
    _peg_13_2: null,
    /** @type {ccui.ImageView} */
    _peg_13_3: null,
    /** @type {ccui.ImageView} */
    _peg_13_4: null,
    /** @type {ccui.ImageView} */
    _peg_13_5: null,
    /** @type {ccui.ImageView} */
    _peg_13_6: null,
    /** @type {ccui.ImageView} */
    _peg_13_7: null,
    /** @type {ccui.ImageView} */
    _peg_13_8: null,
    /** @type {ccui.ImageView} */
    _peg_13_9: null,
    /** @type {ccui.ImageView} */
    _peg_13_10: null,
    /** @type {ccui.Layout} */
    _layoutPegs: null,
    /** @type {ccui.ImageView} */
    _peg_0_0: null,
    /** @type {ccui.ImageView} */
    _peg_0_1: null,
    /** @type {ccui.ImageView} */
    _peg_0_2: null,
    /** @type {ccui.ImageView} */
    _peg_0_3: null,
    /** @type {ccui.ImageView} */
    _peg_0_4: null,
    /** @type {ccui.ImageView} */
    _peg_1_0: null,
    /** @type {ccui.ImageView} */
    _peg_1_1: null,
    /** @type {ccui.ImageView} */
    _peg_1_2: null,
    /** @type {ccui.ImageView} */
    _peg_1_3: null,
    /** @type {ccui.ImageView} */
    _peg_1_4: null,
    /** @type {ccui.ImageView} */
    _peg_2_0: null,
    /** @type {ccui.ImageView} */
    _peg_2_1: null,
    /** @type {ccui.ImageView} */
    _peg_2_2: null,
    /** @type {ccui.ImageView} */
    _peg_2_3: null,
    /** @type {ccui.ImageView} */
    _peg_2_4: null,
    /** @type {ccui.ImageView} */
    _peg_3_0: null,
    /** @type {ccui.ImageView} */
    _peg_3_1: null,
    /** @type {ccui.ImageView} */
    _peg_3_2: null,
    /** @type {ccui.ImageView} */
    _peg_3_3: null,
    /** @type {ccui.ImageView} */
    _peg_3_4: null,
    /** @type {ccui.ImageView} */
    _peg_4_0: null,
    /** @type {ccui.ImageView} */
    _peg_4_1: null,
    /** @type {ccui.ImageView} */
    _peg_4_2: null,
    /** @type {ccui.ImageView} */
    _peg_4_3: null,
    /** @type {ccui.ImageView} */
    _peg_4_4: null,
    /** @type {ccui.ImageView} */
    _peg_5_0: null,
    /** @type {ccui.ImageView} */
    _peg_5_1: null,
    /** @type {ccui.ImageView} */
    _peg_5_2: null,
    /** @type {ccui.ImageView} */
    _peg_5_3: null,
    /** @type {ccui.ImageView} */
    _peg_5_4: null,
    /** @type {ccui.ImageView} */
    _peg_6_0: null,
    /** @type {ccui.ImageView} */
    _peg_6_1: null,
    /** @type {ccui.ImageView} */
    _peg_6_2: null,
    /** @type {ccui.ImageView} */
    _peg_7_0: null,
    /** @type {ccui.ImageView} */
    _peg_7_1: null,
    /** @type {ccui.ImageView} */
    _peg_7_2: null,
    /** @type {ccui.ImageView} */
    _peg_7_3: null,
    /** @type {ccui.ImageView} */
    _peg_8_0: null,
    /** @type {ccui.ImageView} */
    _peg_8_1: null,
    /** @type {ccui.ImageView} */
    _peg_8_2: null,
    /** @type {ccui.ImageView} */
    _peg_9_0: null,
    /** @type {ccui.ImageView} */
    _peg_9_1: null,
    /** @type {ccui.ImageView} */
    _peg_9_2: null,
    /** @type {ccui.ImageView} */
    _peg_10_0: null,
    /** @type {ccui.ImageView} */
    _peg_10_1: null,
    /** @type {ccui.ImageView} */
    _peg_10_2: null,
    /** @type {ccui.ImageView} */
    _peg_10_3: null,
    /** @type {ccui.ImageView} */
    _peg_11_0: null,
    /** @type {ccui.ImageView} */
    _peg_11_1: null,
    /** @type {ccui.ImageView} */
    _peg_11_2: null,
    /** @type {ccui.ImageView} */
    _peg_11_3: null,
    /** @type {ccui.ImageView} */
    _peg_11_4: null,
    /** @type {ccui.ImageView} */
    _peg_12_0: null,
    /** @type {ccui.ImageView} */
    _peg_12_1: null,
    /** @type {ccui.ImageView} */
    _peg_12_2: null,
    /** @type {ccui.ImageView} */
    _peg_12_3: null,
    /** @type {ccui.ImageView} */
    _peg_13_0: null,
    /** @type {ccui.ImageView} */
    _peg_13_1: null,
    /** @type {ccui.ImageView} */
    _peg_13_2: null,
    /** @type {ccui.ImageView} */
    _peg_13_3: null,
    /** @type {ccui.ImageView} */
    _peg_13_4: null,
    /** @type {ccui.ImageView} */
    _peg_13_5: null,
    /** @type {ccui.ImageView} */
    _peg_13_6: null,
    /** @type {ccui.ImageView} */
    _peg_13_7: null,
    /** @type {ccui.ImageView} */
    _peg_13_8: null,
    /** @type {ccui.ImageView} */
    _peg_13_9: null,
    /** @type {ccui.ImageView} */
    _peg_13_10: null,
    /** @type {ccui.Layout} */
    _layoutRewards: null,
    /** @type {ccui.ImageView} */
    _reward1: null,
    /** @type {ccui.ImageView} */
    _reward2: null,
    /** @type {ccui.ImageView} */
    _reward3: null,
    /** @type {ccui.ImageView} */
    _reward4: null,
    /** @type {ccui.ImageView} */
    _reward5: null,
    /** @type {ccui.ImageView} */
    _reward6: null,
    /** @type {ccui.ImageView} */
    _reward7: null,
    /** @type {ccui.ImageView} */
    _reward8: null,
    /** @type {ccui.ImageView} */
    _reward9: null,
    /** @type {ccui.ImageView} */
    _reward10: null,
    /** @type {ccui.ImageView} */
    _reward11: null,
    /** @type {ccui.ImageView} */
    _reward12: null,
    /** @type {ccui.Layout} */
    _layoutUI: null,
    /** @type {ccui.Layout} */
    _layoutCheat: null,
    /** @type {ck.Text} */
    _txtCheat: null,
    /** @type {ccui.Layout} */
    _layoutGun: null,
    /** @type {ccui.ImageView} */
    _imgSpring: null,
    /** @type {ccui.ImageView} */
    _imgDisc: null,
    /** @type {ccui.ImageView} */
    _imgGun: null,


    /**
     * _ccs.PinballTable constructor
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

        ///// # _layoutContainer
        this._layoutContainer = new ccui.Layout();
        this._layoutContainer.setName("_layoutContainer");
        this.addChild(this._layoutContainer);
        this._layoutContainer.setCascadeOpacityEnabled(true);
        this._layoutContainer.setCascadeColorEnabled(true);
        this._layoutContainer.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutContainerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutContainer);
        this._layoutContainer.setTouchEnabled(false);
        this._layoutContainer.setUnifySizeEnabled(false);
        this._layoutContainer.ignoreContentAdaptWithSize(false);
        this._layoutContainer.setContentSize(cc.size(550, 900));

        ///// # _imgTableBg
        this._imgTableBg = new ccui.ImageView();
        this._imgTableBg.setName("_imgTableBg");
        this._layoutContainer.addChild(this._imgTableBg);
        this._imgTableBg.setCascadeOpacityEnabled(true);
        this._imgTableBg.setCascadeColorEnabled(true);
        this._imgTableBg.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgTableBg, 0.5109, -0.03);
        let _imgTableBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTableBg);
        _imgTableBgLayoutComponent.setPositionPercentYEnabled(true);
        _imgTableBgLayoutComponent.setPositionPercentY(-0.03);
        this._imgTableBg.loadTexture("pinball/PinballTableBg.png", 1);
        this._imgTableBg.setUnifySizeEnabled(false);
        this._imgTableBg.ignoreContentAdaptWithSize(false);
        this._imgTableBg.setScale9Enabled(true);
        this._imgTableBg.setCapInsets(cc.rect(198, 186, 201, 731));
        this._imgTableBg.setContentSize(cc.size(597.08, 944));
        this._imgTableBg.setTouchEnabled(false);

        ///// # _layoutPhysic
        this._layoutPhysic = new ccui.Layout();
        this._layoutPhysic.setName("_layoutPhysic");
        this._layoutContainer.addChild(this._layoutPhysic);
        this._layoutPhysic.setCascadeOpacityEnabled(true);
        this._layoutPhysic.setCascadeColorEnabled(true);
        let _layoutPhysicLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPhysic);
        _layoutPhysicLayoutComponent.setPercentWidthEnabled(true);
        _layoutPhysicLayoutComponent.setPercentWidth(1);
        _layoutPhysicLayoutComponent.setPercentHeightEnabled(true);
        _layoutPhysicLayoutComponent.setPercentHeight(1);
        this._layoutPhysic.setTouchEnabled(false);
        this._layoutPhysic.setUnifySizeEnabled(false);
        this._layoutPhysic.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutPhysic, 1, 1);
        this._layoutPhysic.setClippingEnabled(true);

        ///// # _imgBall
        this._imgBall = new ccui.ImageView();
        this._imgBall.setName("_imgBall");
        this._layoutPhysic.addChild(this._imgBall);
        this._imgBall.setCascadeOpacityEnabled(true);
        this._imgBall.setCascadeColorEnabled(true);
        this._imgBall.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBall, 0.9499, 0.0867);
        let _imgBallLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBall);
        this._imgBall.loadTexture("pinball/PinballBall.png", 1);
        this._imgBall.setUnifySizeEnabled(false);
        this._imgBall.ignoreContentAdaptWithSize(false);
        this._imgBall.setContentSize(cc.size(40, 40));
        this._imgBall.setTouchEnabled(false);

        ///// # _layoutBoudaries
        this._layoutBoudaries = new ccui.Layout();
        this._layoutBoudaries.setName("_layoutBoudaries");
        this._layoutPhysic.addChild(this._layoutBoudaries);
        this._layoutBoudaries.setCascadeOpacityEnabled(true);
        this._layoutBoudaries.setCascadeColorEnabled(true);
        let _layoutBoudariesLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBoudaries);
        _layoutBoudariesLayoutComponent.setPercentWidthEnabled(true);
        _layoutBoudariesLayoutComponent.setPercentWidth(1);
        _layoutBoudariesLayoutComponent.setPercentHeightEnabled(true);
        _layoutBoudariesLayoutComponent.setPercentHeight(1);
        this._layoutBoudaries.setTouchEnabled(false);
        this._layoutBoudaries.setUnifySizeEnabled(false);
        this._layoutBoudaries.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBoudaries, 1, 1);

        ///// # _boundary_long
        this._boundary_long = new ccui.Layout();
        this._boundary_long.setName("_boundary_long");
        this._layoutBoudaries.addChild(this._boundary_long);
        this._boundary_long.setCascadeOpacityEnabled(true);
        this._boundary_long.setCascadeColorEnabled(true);
        this._boundary_long.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._boundary_long, 0.89, 0);
        let _boundary_longLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._boundary_long);
        _boundary_longLayoutComponent.setPositionPercentXEnabled(true);
        _boundary_longLayoutComponent.setPositionPercentX(0.89);
        _boundary_longLayoutComponent.setPositionPercentYEnabled(true);
        _boundary_longLayoutComponent.setPositionPercentY(0);
        this._boundary_long.setTouchEnabled(false);
        this._boundary_long.setUnifySizeEnabled(false);
        this._boundary_long.ignoreContentAdaptWithSize(false);
        this._boundary_long.setContentSize(cc.size(7, 720));

        ///// # _b_long_0
        this._b_long_0 = new ccui.ImageView();
        this._b_long_0.setName("_b_long_0");
        this._boundary_long.addChild(this._b_long_0);
        this._b_long_0.setCascadeOpacityEnabled(true);
        this._b_long_0.setCascadeColorEnabled(true);
        this._b_long_0.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._b_long_0, 1.4286, -0.0056);
        this._b_long_0.setOpacity(101);
        this._b_long_0.setColor(cc.color(0, 0, 0, 255));
        let _b_long_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._b_long_0);
        _b_long_0LayoutComponent.setPercentHeightEnabled(true);
        _b_long_0LayoutComponent.setPercentHeight(1);
        this._b_long_0.loadTexture("pinball/PinballBoundary.png", 1);
        this._b_long_0.setUnifySizeEnabled(false);
        this._b_long_0.ignoreContentAdaptWithSize(false);
        this._b_long_0.setScale9Enabled(true);
        this._b_long_0.setCapInsets(cc.rect(2, 5, 3, 92));
        ck.UIUtils.setHeightPercent(this._b_long_0, 1);
        this._b_long_0.setContentSize(cc.size(7, this._b_long_0.height));
        this._b_long_0.setTouchEnabled(false);

        ///// # _b_long
        this._b_long = new ccui.ImageView();
        this._b_long.setName("_b_long");
        this._boundary_long.addChild(this._b_long);
        this._b_long.setCascadeOpacityEnabled(true);
        this._b_long.setCascadeColorEnabled(true);
        this._b_long.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._b_long, 0.5, 0);
        let _b_longLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._b_long);
        _b_longLayoutComponent.setPositionPercentXEnabled(true);
        _b_longLayoutComponent.setPositionPercentX(0.5);
        _b_longLayoutComponent.setPositionPercentYEnabled(true);
        _b_longLayoutComponent.setPositionPercentY(0);
        _b_longLayoutComponent.setPercentHeightEnabled(true);
        _b_longLayoutComponent.setPercentHeight(1);
        this._b_long.loadTexture("pinball/PinballBoundary.png", 1);
        this._b_long.setUnifySizeEnabled(false);
        this._b_long.ignoreContentAdaptWithSize(false);
        this._b_long.setScale9Enabled(true);
        this._b_long.setCapInsets(cc.rect(2, 5, 3, 92));
        ck.UIUtils.setHeightPercent(this._b_long, 1);
        this._b_long.setContentSize(cc.size(7, this._b_long.height));
        this._b_long.setTouchEnabled(false);

        ///// # _boundary1
        this._boundary1 = new ccui.Layout();
        this._boundary1.setName("_boundary1");
        this._layoutBoudaries.addChild(this._boundary1);
        this._boundary1.setCascadeOpacityEnabled(true);
        this._boundary1.setCascadeColorEnabled(true);
        this._boundary1.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._boundary1, 0.155, 0);
        let _boundary1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._boundary1);
        _boundary1LayoutComponent.setPositionPercentXEnabled(true);
        _boundary1LayoutComponent.setPositionPercentX(0.155);
        _boundary1LayoutComponent.setPositionPercentYEnabled(true);
        _boundary1LayoutComponent.setPositionPercentY(0);
        this._boundary1.setTouchEnabled(false);
        this._boundary1.setUnifySizeEnabled(false);
        this._boundary1.ignoreContentAdaptWithSize(false);
        this._boundary1.setContentSize(cc.size(10, 75));

        ///// # _b_1_0
        this._b_1_0 = new ccui.ImageView();
        this._b_1_0.setName("_b_1_0");
        this._boundary1.addChild(this._b_1_0);
        this._b_1_0.setCascadeOpacityEnabled(true);
        this._b_1_0.setCascadeColorEnabled(true);
        this._b_1_0.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._b_1_0, 1, -0.0533);
        this._b_1_0.setOpacity(102);
        this._b_1_0.setColor(cc.color(0, 0, 0, 255));
        let _b_1_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._b_1_0);
        _b_1_0LayoutComponent.setPercentHeightEnabled(true);
        _b_1_0LayoutComponent.setPercentHeight(1);
        this._b_1_0.loadTexture("pinball/PinballBoundary.png", 1);
        this._b_1_0.setUnifySizeEnabled(false);
        this._b_1_0.ignoreContentAdaptWithSize(false);
        this._b_1_0.setScale9Enabled(true);
        this._b_1_0.setCapInsets(cc.rect(2, 5, 3, 92));
        ck.UIUtils.setHeightPercent(this._b_1_0, 1);
        this._b_1_0.setContentSize(cc.size(7, this._b_1_0.height));
        this._b_1_0.setTouchEnabled(false);

        ///// # _b_1
        this._b_1 = new ccui.ImageView();
        this._b_1.setName("_b_1");
        this._boundary1.addChild(this._b_1);
        this._b_1.setCascadeOpacityEnabled(true);
        this._b_1.setCascadeColorEnabled(true);
        this._b_1.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._b_1, 0.5, 0);
        let _b_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._b_1);
        _b_1LayoutComponent.setPositionPercentXEnabled(true);
        _b_1LayoutComponent.setPositionPercentX(0.5);
        _b_1LayoutComponent.setPercentHeightEnabled(true);
        _b_1LayoutComponent.setPercentHeight(1);
        this._b_1.loadTexture("pinball/PinballBoundary.png", 1);
        this._b_1.setUnifySizeEnabled(false);
        this._b_1.ignoreContentAdaptWithSize(false);
        this._b_1.setScale9Enabled(true);
        this._b_1.setCapInsets(cc.rect(2, 5, 3, 92));
        ck.UIUtils.setHeightPercent(this._b_1, 1);
        this._b_1.setContentSize(cc.size(7, this._b_1.height));
        this._b_1.setTouchEnabled(false);

        ///// # _boundary2
        this._boundary2 = new ccui.Layout();
        this._boundary2.setName("_boundary2");
        this._layoutBoudaries.addChild(this._boundary2);
        this._boundary2.setCascadeOpacityEnabled(true);
        this._boundary2.setCascadeColorEnabled(true);
        this._boundary2.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._boundary2, 0.31, 0);
        let _boundary2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._boundary2);
        _boundary2LayoutComponent.setPositionPercentXEnabled(true);
        _boundary2LayoutComponent.setPositionPercentX(0.31);
        _boundary2LayoutComponent.setPositionPercentYEnabled(true);
        _boundary2LayoutComponent.setPositionPercentY(0);
        this._boundary2.setTouchEnabled(false);
        this._boundary2.setUnifySizeEnabled(false);
        this._boundary2.ignoreContentAdaptWithSize(false);
        this._boundary2.setContentSize(cc.size(10, 75));

        ///// # _b_2_0
        this._b_2_0 = new ccui.ImageView();
        this._b_2_0.setName("_b_2_0");
        this._boundary2.addChild(this._b_2_0);
        this._b_2_0.setCascadeOpacityEnabled(true);
        this._b_2_0.setCascadeColorEnabled(true);
        this._b_2_0.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._b_2_0, 1, -0.0533);
        this._b_2_0.setOpacity(102);
        this._b_2_0.setColor(cc.color(0, 0, 0, 255));
        let _b_2_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._b_2_0);
        _b_2_0LayoutComponent.setPercentHeightEnabled(true);
        _b_2_0LayoutComponent.setPercentHeight(1);
        this._b_2_0.loadTexture("pinball/PinballBoundary.png", 1);
        this._b_2_0.setUnifySizeEnabled(false);
        this._b_2_0.ignoreContentAdaptWithSize(false);
        this._b_2_0.setScale9Enabled(true);
        this._b_2_0.setCapInsets(cc.rect(2, 5, 3, 92));
        ck.UIUtils.setHeightPercent(this._b_2_0, 1);
        this._b_2_0.setContentSize(cc.size(7, this._b_2_0.height));
        this._b_2_0.setTouchEnabled(false);

        ///// # _b_2
        this._b_2 = new ccui.ImageView();
        this._b_2.setName("_b_2");
        this._boundary2.addChild(this._b_2);
        this._b_2.setCascadeOpacityEnabled(true);
        this._b_2.setCascadeColorEnabled(true);
        this._b_2.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._b_2, 0.5, 0);
        let _b_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._b_2);
        _b_2LayoutComponent.setPercentHeightEnabled(true);
        _b_2LayoutComponent.setPercentHeight(1);
        this._b_2.loadTexture("pinball/PinballBoundary.png", 1);
        this._b_2.setUnifySizeEnabled(false);
        this._b_2.ignoreContentAdaptWithSize(false);
        this._b_2.setScale9Enabled(true);
        this._b_2.setCapInsets(cc.rect(2, 5, 3, 92));
        ck.UIUtils.setHeightPercent(this._b_2, 1);
        this._b_2.setContentSize(cc.size(7, this._b_2.height));
        this._b_2.setTouchEnabled(false);

        ///// # _boundary3
        this._boundary3 = new ccui.Layout();
        this._boundary3.setName("_boundary3");
        this._layoutBoudaries.addChild(this._boundary3);
        this._boundary3.setCascadeOpacityEnabled(true);
        this._boundary3.setCascadeColorEnabled(true);
        this._boundary3.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._boundary3, 0.455, 0);
        let _boundary3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._boundary3);
        _boundary3LayoutComponent.setPositionPercentXEnabled(true);
        _boundary3LayoutComponent.setPositionPercentX(0.455);
        _boundary3LayoutComponent.setPositionPercentYEnabled(true);
        _boundary3LayoutComponent.setPositionPercentY(0);
        this._boundary3.setTouchEnabled(false);
        this._boundary3.setUnifySizeEnabled(false);
        this._boundary3.ignoreContentAdaptWithSize(false);
        this._boundary3.setContentSize(cc.size(10, 75));

        ///// # _b_3_0
        this._b_3_0 = new ccui.ImageView();
        this._b_3_0.setName("_b_3_0");
        this._boundary3.addChild(this._b_3_0);
        this._b_3_0.setCascadeOpacityEnabled(true);
        this._b_3_0.setCascadeColorEnabled(true);
        this._b_3_0.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._b_3_0, 1, -0.0533);
        this._b_3_0.setOpacity(102);
        this._b_3_0.setColor(cc.color(0, 0, 0, 255));
        let _b_3_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._b_3_0);
        _b_3_0LayoutComponent.setPercentHeightEnabled(true);
        _b_3_0LayoutComponent.setPercentHeight(1);
        this._b_3_0.loadTexture("pinball/PinballBoundary.png", 1);
        this._b_3_0.setUnifySizeEnabled(false);
        this._b_3_0.ignoreContentAdaptWithSize(false);
        this._b_3_0.setScale9Enabled(true);
        this._b_3_0.setCapInsets(cc.rect(2, 5, 3, 92));
        ck.UIUtils.setHeightPercent(this._b_3_0, 1);
        this._b_3_0.setContentSize(cc.size(7, this._b_3_0.height));
        this._b_3_0.setTouchEnabled(false);

        ///// # _b_3
        this._b_3 = new ccui.ImageView();
        this._b_3.setName("_b_3");
        this._boundary3.addChild(this._b_3);
        this._b_3.setCascadeOpacityEnabled(true);
        this._b_3.setCascadeColorEnabled(true);
        this._b_3.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._b_3, 0.5, 0);
        let _b_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._b_3);
        _b_3LayoutComponent.setPercentHeightEnabled(true);
        _b_3LayoutComponent.setPercentHeight(1);
        this._b_3.loadTexture("pinball/PinballBoundary.png", 1);
        this._b_3.setUnifySizeEnabled(false);
        this._b_3.ignoreContentAdaptWithSize(false);
        this._b_3.setScale9Enabled(true);
        this._b_3.setCapInsets(cc.rect(2, 5, 3, 92));
        ck.UIUtils.setHeightPercent(this._b_3, 1);
        this._b_3.setContentSize(cc.size(7, this._b_3.height));
        this._b_3.setTouchEnabled(false);

        ///// # _boundary4
        this._boundary4 = new ccui.Layout();
        this._boundary4.setName("_boundary4");
        this._layoutBoudaries.addChild(this._boundary4);
        this._boundary4.setCascadeOpacityEnabled(true);
        this._boundary4.setCascadeColorEnabled(true);
        this._boundary4.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._boundary4, 0.61, 0);
        let _boundary4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._boundary4);
        _boundary4LayoutComponent.setPositionPercentXEnabled(true);
        _boundary4LayoutComponent.setPositionPercentX(0.61);
        _boundary4LayoutComponent.setPositionPercentYEnabled(true);
        _boundary4LayoutComponent.setPositionPercentY(0);
        this._boundary4.setTouchEnabled(false);
        this._boundary4.setUnifySizeEnabled(false);
        this._boundary4.ignoreContentAdaptWithSize(false);
        this._boundary4.setContentSize(cc.size(10, 75));

        ///// # _b_4_0
        this._b_4_0 = new ccui.ImageView();
        this._b_4_0.setName("_b_4_0");
        this._boundary4.addChild(this._b_4_0);
        this._b_4_0.setCascadeOpacityEnabled(true);
        this._b_4_0.setCascadeColorEnabled(true);
        this._b_4_0.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._b_4_0, 1, -0.0533);
        this._b_4_0.setOpacity(102);
        this._b_4_0.setColor(cc.color(0, 0, 0, 255));
        let _b_4_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._b_4_0);
        _b_4_0LayoutComponent.setPercentHeightEnabled(true);
        _b_4_0LayoutComponent.setPercentHeight(1);
        this._b_4_0.loadTexture("pinball/PinballBoundary.png", 1);
        this._b_4_0.setUnifySizeEnabled(false);
        this._b_4_0.ignoreContentAdaptWithSize(false);
        this._b_4_0.setScale9Enabled(true);
        this._b_4_0.setCapInsets(cc.rect(2, 5, 3, 92));
        ck.UIUtils.setHeightPercent(this._b_4_0, 1);
        this._b_4_0.setContentSize(cc.size(7, this._b_4_0.height));
        this._b_4_0.setTouchEnabled(false);

        ///// # _b_4
        this._b_4 = new ccui.ImageView();
        this._b_4.setName("_b_4");
        this._boundary4.addChild(this._b_4);
        this._b_4.setCascadeOpacityEnabled(true);
        this._b_4.setCascadeColorEnabled(true);
        this._b_4.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._b_4, 0.5, 0);
        let _b_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._b_4);
        _b_4LayoutComponent.setPercentHeightEnabled(true);
        _b_4LayoutComponent.setPercentHeight(1);
        this._b_4.loadTexture("pinball/PinballBoundary.png", 1);
        this._b_4.setUnifySizeEnabled(false);
        this._b_4.ignoreContentAdaptWithSize(false);
        this._b_4.setScale9Enabled(true);
        this._b_4.setCapInsets(cc.rect(2, 5, 3, 92));
        ck.UIUtils.setHeightPercent(this._b_4, 1);
        this._b_4.setContentSize(cc.size(7, this._b_4.height));
        this._b_4.setTouchEnabled(false);

        ///// # _boundary5
        this._boundary5 = new ccui.Layout();
        this._boundary5.setName("_boundary5");
        this._layoutBoudaries.addChild(this._boundary5);
        this._boundary5.setCascadeOpacityEnabled(true);
        this._boundary5.setCascadeColorEnabled(true);
        this._boundary5.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._boundary5, 0.765, 0);
        let _boundary5LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._boundary5);
        _boundary5LayoutComponent.setPositionPercentXEnabled(true);
        _boundary5LayoutComponent.setPositionPercentX(0.765);
        _boundary5LayoutComponent.setPositionPercentYEnabled(true);
        _boundary5LayoutComponent.setPositionPercentY(0);
        this._boundary5.setTouchEnabled(false);
        this._boundary5.setUnifySizeEnabled(false);
        this._boundary5.ignoreContentAdaptWithSize(false);
        this._boundary5.setContentSize(cc.size(10, 75));

        ///// # _b_5_0
        this._b_5_0 = new ccui.ImageView();
        this._b_5_0.setName("_b_5_0");
        this._boundary5.addChild(this._b_5_0);
        this._b_5_0.setCascadeOpacityEnabled(true);
        this._b_5_0.setCascadeColorEnabled(true);
        this._b_5_0.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._b_5_0, 1, -0.0533);
        this._b_5_0.setOpacity(102);
        this._b_5_0.setColor(cc.color(0, 0, 0, 255));
        let _b_5_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._b_5_0);
        _b_5_0LayoutComponent.setPercentHeightEnabled(true);
        _b_5_0LayoutComponent.setPercentHeight(1);
        this._b_5_0.loadTexture("pinball/PinballBoundary.png", 1);
        this._b_5_0.setUnifySizeEnabled(false);
        this._b_5_0.ignoreContentAdaptWithSize(false);
        this._b_5_0.setScale9Enabled(true);
        this._b_5_0.setCapInsets(cc.rect(2, 5, 3, 92));
        ck.UIUtils.setHeightPercent(this._b_5_0, 1);
        this._b_5_0.setContentSize(cc.size(7, this._b_5_0.height));
        this._b_5_0.setTouchEnabled(false);

        ///// # _b_5
        this._b_5 = new ccui.ImageView();
        this._b_5.setName("_b_5");
        this._boundary5.addChild(this._b_5);
        this._b_5.setCascadeOpacityEnabled(true);
        this._b_5.setCascadeColorEnabled(true);
        this._b_5.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._b_5, 0.5, 0);
        let _b_5LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._b_5);
        _b_5LayoutComponent.setPercentHeightEnabled(true);
        _b_5LayoutComponent.setPercentHeight(1);
        this._b_5.loadTexture("pinball/PinballBoundary.png", 1);
        this._b_5.setUnifySizeEnabled(false);
        this._b_5.ignoreContentAdaptWithSize(false);
        this._b_5.setScale9Enabled(true);
        this._b_5.setCapInsets(cc.rect(2, 5, 3, 92));
        ck.UIUtils.setHeightPercent(this._b_5, 1);
        this._b_5.setContentSize(cc.size(7, this._b_5.height));
        this._b_5.setTouchEnabled(false);

        ///// # _layoutPegsShadow
        this._layoutPegsShadow = new ccui.Layout();
        this._layoutPegsShadow.setName("_layoutPegsShadow");
        this._layoutPhysic.addChild(this._layoutPegsShadow);
        this._layoutPegsShadow.setCascadeOpacityEnabled(true);
        this._layoutPegsShadow.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutPegsShadow, 0.0091, -0.0044);
        this._layoutPegsShadow.setOpacity(102);
        this._layoutPegsShadow.setColor(cc.color(0, 0, 0, 255));
        let _layoutPegsShadowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPegsShadow);
        _layoutPegsShadowLayoutComponent.setPercentWidthEnabled(true);
        _layoutPegsShadowLayoutComponent.setPercentWidth(1);
        _layoutPegsShadowLayoutComponent.setPercentHeightEnabled(true);
        _layoutPegsShadowLayoutComponent.setPercentHeight(1);
        this._layoutPegsShadow.setTouchEnabled(false);
        this._layoutPegsShadow.setUnifySizeEnabled(false);
        this._layoutPegsShadow.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutPegsShadow, 1, 1);

        ///// # _peg_0_0
        this._peg_0_0 = new ccui.ImageView();
        this._peg_0_0.setName("_peg_0_0");
        this._layoutPegsShadow.addChild(this._peg_0_0);
        this._peg_0_0.setCascadeOpacityEnabled(true);
        this._peg_0_0.setCascadeColorEnabled(true);
        this._peg_0_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_0_0, 0.0438, 0.8267);
        let _peg_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_0_0);
        _peg_0_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_0_0LayoutComponent.setPositionPercentX(0.0438);
        _peg_0_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_0_0LayoutComponent.setPositionPercentY(0.8267);
        this._peg_0_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_0_0.setUnifySizeEnabled(false);
        this._peg_0_0.ignoreContentAdaptWithSize(false);
        this._peg_0_0.setContentSize(cc.size(12, 12));
        this._peg_0_0.setTouchEnabled(false);

        ///// # _peg_0_1
        this._peg_0_1 = new ccui.ImageView();
        this._peg_0_1.setName("_peg_0_1");
        this._layoutPegsShadow.addChild(this._peg_0_1);
        this._peg_0_1.setCascadeOpacityEnabled(true);
        this._peg_0_1.setCascadeColorEnabled(true);
        this._peg_0_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_0_1, 0.2237, 0.8267);
        let _peg_0_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_0_1);
        _peg_0_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_0_1LayoutComponent.setPositionPercentX(0.2237);
        _peg_0_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_0_1LayoutComponent.setPositionPercentY(0.8267);
        this._peg_0_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_0_1.setUnifySizeEnabled(false);
        this._peg_0_1.ignoreContentAdaptWithSize(false);
        this._peg_0_1.setContentSize(cc.size(12, 12));
        this._peg_0_1.setTouchEnabled(false);

        ///// # _peg_0_2
        this._peg_0_2 = new ccui.ImageView();
        this._peg_0_2.setName("_peg_0_2");
        this._layoutPegsShadow.addChild(this._peg_0_2);
        this._peg_0_2.setCascadeOpacityEnabled(true);
        this._peg_0_2.setCascadeColorEnabled(true);
        this._peg_0_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_0_2, 0.4036, 0.8267);
        let _peg_0_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_0_2);
        _peg_0_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_0_2LayoutComponent.setPositionPercentX(0.4036);
        _peg_0_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_0_2LayoutComponent.setPositionPercentY(0.8267);
        this._peg_0_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_0_2.setUnifySizeEnabled(false);
        this._peg_0_2.ignoreContentAdaptWithSize(false);
        this._peg_0_2.setContentSize(cc.size(12, 12));
        this._peg_0_2.setTouchEnabled(false);

        ///// # _peg_0_3
        this._peg_0_3 = new ccui.ImageView();
        this._peg_0_3.setName("_peg_0_3");
        this._layoutPegsShadow.addChild(this._peg_0_3);
        this._peg_0_3.setCascadeOpacityEnabled(true);
        this._peg_0_3.setCascadeColorEnabled(true);
        this._peg_0_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_0_3, 0.5858, 0.8267);
        let _peg_0_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_0_3);
        _peg_0_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_0_3LayoutComponent.setPositionPercentX(0.5858);
        _peg_0_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_0_3LayoutComponent.setPositionPercentY(0.8267);
        this._peg_0_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_0_3.setUnifySizeEnabled(false);
        this._peg_0_3.ignoreContentAdaptWithSize(false);
        this._peg_0_3.setContentSize(cc.size(12, 12));
        this._peg_0_3.setTouchEnabled(false);

        ///// # _peg_0_4
        this._peg_0_4 = new ccui.ImageView();
        this._peg_0_4.setName("_peg_0_4");
        this._layoutPegsShadow.addChild(this._peg_0_4);
        this._peg_0_4.setCascadeOpacityEnabled(true);
        this._peg_0_4.setCascadeColorEnabled(true);
        this._peg_0_4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_0_4, 0.768, 0.8267);
        let _peg_0_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_0_4);
        _peg_0_4LayoutComponent.setPositionPercentXEnabled(true);
        _peg_0_4LayoutComponent.setPositionPercentX(0.768);
        _peg_0_4LayoutComponent.setPositionPercentYEnabled(true);
        _peg_0_4LayoutComponent.setPositionPercentY(0.8267);
        this._peg_0_4.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_0_4.setUnifySizeEnabled(false);
        this._peg_0_4.ignoreContentAdaptWithSize(false);
        this._peg_0_4.setContentSize(cc.size(12, 12));
        this._peg_0_4.setTouchEnabled(false);

        ///// # _peg_1_0
        this._peg_1_0 = new ccui.ImageView();
        this._peg_1_0.setName("_peg_1_0");
        this._layoutPegsShadow.addChild(this._peg_1_0);
        this._peg_1_0.setCascadeOpacityEnabled(true);
        this._peg_1_0.setCascadeColorEnabled(true);
        this._peg_1_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_1_0, 0.1348, 0.7739);
        let _peg_1_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_1_0);
        _peg_1_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_1_0LayoutComponent.setPositionPercentX(0.1348);
        _peg_1_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_1_0LayoutComponent.setPositionPercentY(0.7739);
        this._peg_1_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_1_0.setUnifySizeEnabled(false);
        this._peg_1_0.ignoreContentAdaptWithSize(false);
        this._peg_1_0.setContentSize(cc.size(12, 12));
        this._peg_1_0.setTouchEnabled(false);

        ///// # _peg_1_1
        this._peg_1_1 = new ccui.ImageView();
        this._peg_1_1.setName("_peg_1_1");
        this._layoutPegsShadow.addChild(this._peg_1_1);
        this._peg_1_1.setCascadeOpacityEnabled(true);
        this._peg_1_1.setCascadeColorEnabled(true);
        this._peg_1_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_1_1, 0.3195, 0.7739);
        let _peg_1_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_1_1);
        _peg_1_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_1_1LayoutComponent.setPositionPercentX(0.3195);
        _peg_1_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_1_1LayoutComponent.setPositionPercentY(0.7739);
        this._peg_1_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_1_1.setUnifySizeEnabled(false);
        this._peg_1_1.ignoreContentAdaptWithSize(false);
        this._peg_1_1.setContentSize(cc.size(12, 12));
        this._peg_1_1.setTouchEnabled(false);

        ///// # _peg_1_2
        this._peg_1_2 = new ccui.ImageView();
        this._peg_1_2.setName("_peg_1_2");
        this._layoutPegsShadow.addChild(this._peg_1_2);
        this._peg_1_2.setCascadeOpacityEnabled(true);
        this._peg_1_2.setCascadeColorEnabled(true);
        this._peg_1_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_1_2, 0.4993, 0.7735);
        let _peg_1_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_1_2);
        _peg_1_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_1_2LayoutComponent.setPositionPercentX(0.4993);
        _peg_1_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_1_2LayoutComponent.setPositionPercentY(0.7735);
        this._peg_1_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_1_2.setUnifySizeEnabled(false);
        this._peg_1_2.ignoreContentAdaptWithSize(false);
        this._peg_1_2.setContentSize(cc.size(12, 12));
        this._peg_1_2.setTouchEnabled(false);

        ///// # _peg_1_3
        this._peg_1_3 = new ccui.ImageView();
        this._peg_1_3.setName("_peg_1_3");
        this._layoutPegsShadow.addChild(this._peg_1_3);
        this._peg_1_3.setCascadeOpacityEnabled(true);
        this._peg_1_3.setCascadeColorEnabled(true);
        this._peg_1_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_1_3, 0.6793, 0.7739);
        let _peg_1_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_1_3);
        _peg_1_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_1_3LayoutComponent.setPositionPercentX(0.6793);
        _peg_1_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_1_3LayoutComponent.setPositionPercentY(0.7739);
        this._peg_1_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_1_3.setUnifySizeEnabled(false);
        this._peg_1_3.ignoreContentAdaptWithSize(false);
        this._peg_1_3.setContentSize(cc.size(12, 12));
        this._peg_1_3.setTouchEnabled(false);

        ///// # _peg_1_4
        this._peg_1_4 = new ccui.ImageView();
        this._peg_1_4.setName("_peg_1_4");
        this._layoutPegsShadow.addChild(this._peg_1_4);
        this._peg_1_4.setCascadeOpacityEnabled(true);
        this._peg_1_4.setCascadeColorEnabled(true);
        this._peg_1_4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_1_4, 0.8592, 0.7739);
        let _peg_1_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_1_4);
        _peg_1_4LayoutComponent.setPositionPercentXEnabled(true);
        _peg_1_4LayoutComponent.setPositionPercentX(0.8592);
        _peg_1_4LayoutComponent.setPositionPercentYEnabled(true);
        _peg_1_4LayoutComponent.setPositionPercentY(0.7739);
        this._peg_1_4.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_1_4.setUnifySizeEnabled(false);
        this._peg_1_4.ignoreContentAdaptWithSize(false);
        this._peg_1_4.setContentSize(cc.size(12, 12));
        this._peg_1_4.setTouchEnabled(false);

        ///// # _peg_2_0
        this._peg_2_0 = new ccui.ImageView();
        this._peg_2_0.setName("_peg_2_0");
        this._layoutPegsShadow.addChild(this._peg_2_0);
        this._peg_2_0.setCascadeOpacityEnabled(true);
        this._peg_2_0.setCascadeColorEnabled(true);
        this._peg_2_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_2_0, 0.0438, 0.7198);
        let _peg_2_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_2_0);
        _peg_2_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_2_0LayoutComponent.setPositionPercentX(0.0438);
        _peg_2_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_2_0LayoutComponent.setPositionPercentY(0.7198);
        this._peg_2_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_2_0.setUnifySizeEnabled(false);
        this._peg_2_0.ignoreContentAdaptWithSize(false);
        this._peg_2_0.setContentSize(cc.size(12, 12));
        this._peg_2_0.setTouchEnabled(false);

        ///// # _peg_2_1
        this._peg_2_1 = new ccui.ImageView();
        this._peg_2_1.setName("_peg_2_1");
        this._layoutPegsShadow.addChild(this._peg_2_1);
        this._peg_2_1.setCascadeOpacityEnabled(true);
        this._peg_2_1.setCascadeColorEnabled(true);
        this._peg_2_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_2_1, 0.2237, 0.7198);
        let _peg_2_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_2_1);
        _peg_2_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_2_1LayoutComponent.setPositionPercentX(0.2237);
        _peg_2_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_2_1LayoutComponent.setPositionPercentY(0.7198);
        this._peg_2_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_2_1.setUnifySizeEnabled(false);
        this._peg_2_1.ignoreContentAdaptWithSize(false);
        this._peg_2_1.setContentSize(cc.size(12, 12));
        this._peg_2_1.setTouchEnabled(false);

        ///// # _peg_2_2
        this._peg_2_2 = new ccui.ImageView();
        this._peg_2_2.setName("_peg_2_2");
        this._layoutPegsShadow.addChild(this._peg_2_2);
        this._peg_2_2.setCascadeOpacityEnabled(true);
        this._peg_2_2.setCascadeColorEnabled(true);
        this._peg_2_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_2_2, 0.4036, 0.7198);
        let _peg_2_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_2_2);
        _peg_2_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_2_2LayoutComponent.setPositionPercentX(0.4036);
        _peg_2_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_2_2LayoutComponent.setPositionPercentY(0.7198);
        this._peg_2_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_2_2.setUnifySizeEnabled(false);
        this._peg_2_2.ignoreContentAdaptWithSize(false);
        this._peg_2_2.setContentSize(cc.size(12, 12));
        this._peg_2_2.setTouchEnabled(false);

        ///// # _peg_2_3
        this._peg_2_3 = new ccui.ImageView();
        this._peg_2_3.setName("_peg_2_3");
        this._layoutPegsShadow.addChild(this._peg_2_3);
        this._peg_2_3.setCascadeOpacityEnabled(true);
        this._peg_2_3.setCascadeColorEnabled(true);
        this._peg_2_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_2_3, 0.5858, 0.7198);
        let _peg_2_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_2_3);
        _peg_2_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_2_3LayoutComponent.setPositionPercentX(0.5858);
        _peg_2_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_2_3LayoutComponent.setPositionPercentY(0.7198);
        this._peg_2_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_2_3.setUnifySizeEnabled(false);
        this._peg_2_3.ignoreContentAdaptWithSize(false);
        this._peg_2_3.setContentSize(cc.size(12, 12));
        this._peg_2_3.setTouchEnabled(false);

        ///// # _peg_2_4
        this._peg_2_4 = new ccui.ImageView();
        this._peg_2_4.setName("_peg_2_4");
        this._layoutPegsShadow.addChild(this._peg_2_4);
        this._peg_2_4.setCascadeOpacityEnabled(true);
        this._peg_2_4.setCascadeColorEnabled(true);
        this._peg_2_4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_2_4, 0.768, 0.7198);
        let _peg_2_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_2_4);
        _peg_2_4LayoutComponent.setPositionPercentXEnabled(true);
        _peg_2_4LayoutComponent.setPositionPercentX(0.768);
        _peg_2_4LayoutComponent.setPositionPercentYEnabled(true);
        _peg_2_4LayoutComponent.setPositionPercentY(0.7198);
        this._peg_2_4.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_2_4.setUnifySizeEnabled(false);
        this._peg_2_4.ignoreContentAdaptWithSize(false);
        this._peg_2_4.setContentSize(cc.size(12, 12));
        this._peg_2_4.setTouchEnabled(false);

        ///// # _peg_3_0
        this._peg_3_0 = new ccui.ImageView();
        this._peg_3_0.setName("_peg_3_0");
        this._layoutPegsShadow.addChild(this._peg_3_0);
        this._peg_3_0.setCascadeOpacityEnabled(true);
        this._peg_3_0.setCascadeColorEnabled(true);
        this._peg_3_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_3_0, 0.1349, 0.665);
        let _peg_3_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_3_0);
        _peg_3_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_3_0LayoutComponent.setPositionPercentX(0.1349);
        _peg_3_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_3_0LayoutComponent.setPositionPercentY(0.665);
        this._peg_3_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_3_0.setUnifySizeEnabled(false);
        this._peg_3_0.ignoreContentAdaptWithSize(false);
        this._peg_3_0.setContentSize(cc.size(12, 12));
        this._peg_3_0.setTouchEnabled(false);

        ///// # _peg_3_1
        this._peg_3_1 = new ccui.ImageView();
        this._peg_3_1.setName("_peg_3_1");
        this._layoutPegsShadow.addChild(this._peg_3_1);
        this._peg_3_1.setCascadeOpacityEnabled(true);
        this._peg_3_1.setCascadeColorEnabled(true);
        this._peg_3_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_3_1, 0.3195, 0.6659);
        let _peg_3_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_3_1);
        _peg_3_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_3_1LayoutComponent.setPositionPercentX(0.3195);
        _peg_3_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_3_1LayoutComponent.setPositionPercentY(0.6659);
        this._peg_3_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_3_1.setUnifySizeEnabled(false);
        this._peg_3_1.ignoreContentAdaptWithSize(false);
        this._peg_3_1.setContentSize(cc.size(12, 12));
        this._peg_3_1.setTouchEnabled(false);

        ///// # _peg_3_2
        this._peg_3_2 = new ccui.ImageView();
        this._peg_3_2.setName("_peg_3_2");
        this._layoutPegsShadow.addChild(this._peg_3_2);
        this._peg_3_2.setCascadeOpacityEnabled(true);
        this._peg_3_2.setCascadeColorEnabled(true);
        this._peg_3_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_3_2, 0.4994, 0.6659);
        let _peg_3_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_3_2);
        _peg_3_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_3_2LayoutComponent.setPositionPercentX(0.4994);
        _peg_3_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_3_2LayoutComponent.setPositionPercentY(0.6659);
        this._peg_3_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_3_2.setUnifySizeEnabled(false);
        this._peg_3_2.ignoreContentAdaptWithSize(false);
        this._peg_3_2.setContentSize(cc.size(12, 12));
        this._peg_3_2.setTouchEnabled(false);

        ///// # _peg_3_3
        this._peg_3_3 = new ccui.ImageView();
        this._peg_3_3.setName("_peg_3_3");
        this._layoutPegsShadow.addChild(this._peg_3_3);
        this._peg_3_3.setCascadeOpacityEnabled(true);
        this._peg_3_3.setCascadeColorEnabled(true);
        this._peg_3_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_3_3, 0.6793, 0.6659);
        let _peg_3_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_3_3);
        _peg_3_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_3_3LayoutComponent.setPositionPercentX(0.6793);
        _peg_3_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_3_3LayoutComponent.setPositionPercentY(0.6659);
        this._peg_3_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_3_3.setUnifySizeEnabled(false);
        this._peg_3_3.ignoreContentAdaptWithSize(false);
        this._peg_3_3.setContentSize(cc.size(12, 12));
        this._peg_3_3.setTouchEnabled(false);

        ///// # _peg_3_4
        this._peg_3_4 = new ccui.ImageView();
        this._peg_3_4.setName("_peg_3_4");
        this._layoutPegsShadow.addChild(this._peg_3_4);
        this._peg_3_4.setCascadeOpacityEnabled(true);
        this._peg_3_4.setCascadeColorEnabled(true);
        this._peg_3_4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_3_4, 0.859, 0.665);
        let _peg_3_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_3_4);
        _peg_3_4LayoutComponent.setPositionPercentXEnabled(true);
        _peg_3_4LayoutComponent.setPositionPercentX(0.859);
        _peg_3_4LayoutComponent.setPositionPercentYEnabled(true);
        _peg_3_4LayoutComponent.setPositionPercentY(0.665);
        this._peg_3_4.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_3_4.setUnifySizeEnabled(false);
        this._peg_3_4.ignoreContentAdaptWithSize(false);
        this._peg_3_4.setContentSize(cc.size(12, 12));
        this._peg_3_4.setTouchEnabled(false);

        ///// # _peg_4_0
        this._peg_4_0 = new ccui.ImageView();
        this._peg_4_0.setName("_peg_4_0");
        this._layoutPegsShadow.addChild(this._peg_4_0);
        this._peg_4_0.setCascadeOpacityEnabled(true);
        this._peg_4_0.setCascadeColorEnabled(true);
        this._peg_4_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_4_0, 0.0438, 0.6119);
        let _peg_4_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_4_0);
        _peg_4_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_4_0LayoutComponent.setPositionPercentX(0.0438);
        _peg_4_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_4_0LayoutComponent.setPositionPercentY(0.6119);
        this._peg_4_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_4_0.setUnifySizeEnabled(false);
        this._peg_4_0.ignoreContentAdaptWithSize(false);
        this._peg_4_0.setContentSize(cc.size(12, 12));
        this._peg_4_0.setTouchEnabled(false);

        ///// # _peg_4_1
        this._peg_4_1 = new ccui.ImageView();
        this._peg_4_1.setName("_peg_4_1");
        this._layoutPegsShadow.addChild(this._peg_4_1);
        this._peg_4_1.setCascadeOpacityEnabled(true);
        this._peg_4_1.setCascadeColorEnabled(true);
        this._peg_4_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_4_1, 0.2237, 0.6119);
        let _peg_4_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_4_1);
        _peg_4_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_4_1LayoutComponent.setPositionPercentX(0.2237);
        _peg_4_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_4_1LayoutComponent.setPositionPercentY(0.6119);
        this._peg_4_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_4_1.setUnifySizeEnabled(false);
        this._peg_4_1.ignoreContentAdaptWithSize(false);
        this._peg_4_1.setContentSize(cc.size(12, 12));
        this._peg_4_1.setTouchEnabled(false);

        ///// # _peg_4_2
        this._peg_4_2 = new ccui.ImageView();
        this._peg_4_2.setName("_peg_4_2");
        this._layoutPegsShadow.addChild(this._peg_4_2);
        this._peg_4_2.setCascadeOpacityEnabled(true);
        this._peg_4_2.setCascadeColorEnabled(true);
        this._peg_4_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_4_2, 0.4036, 0.6119);
        let _peg_4_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_4_2);
        _peg_4_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_4_2LayoutComponent.setPositionPercentX(0.4036);
        _peg_4_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_4_2LayoutComponent.setPositionPercentY(0.6119);
        this._peg_4_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_4_2.setUnifySizeEnabled(false);
        this._peg_4_2.ignoreContentAdaptWithSize(false);
        this._peg_4_2.setContentSize(cc.size(12, 12));
        this._peg_4_2.setTouchEnabled(false);

        ///// # _peg_4_3
        this._peg_4_3 = new ccui.ImageView();
        this._peg_4_3.setName("_peg_4_3");
        this._layoutPegsShadow.addChild(this._peg_4_3);
        this._peg_4_3.setCascadeOpacityEnabled(true);
        this._peg_4_3.setCascadeColorEnabled(true);
        this._peg_4_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_4_3, 0.5858, 0.6119);
        let _peg_4_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_4_3);
        _peg_4_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_4_3LayoutComponent.setPositionPercentX(0.5858);
        _peg_4_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_4_3LayoutComponent.setPositionPercentY(0.6119);
        this._peg_4_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_4_3.setUnifySizeEnabled(false);
        this._peg_4_3.ignoreContentAdaptWithSize(false);
        this._peg_4_3.setContentSize(cc.size(12, 12));
        this._peg_4_3.setTouchEnabled(false);

        ///// # _peg_4_4
        this._peg_4_4 = new ccui.ImageView();
        this._peg_4_4.setName("_peg_4_4");
        this._layoutPegsShadow.addChild(this._peg_4_4);
        this._peg_4_4.setCascadeOpacityEnabled(true);
        this._peg_4_4.setCascadeColorEnabled(true);
        this._peg_4_4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_4_4, 0.768, 0.6119);
        let _peg_4_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_4_4);
        _peg_4_4LayoutComponent.setPositionPercentXEnabled(true);
        _peg_4_4LayoutComponent.setPositionPercentX(0.768);
        _peg_4_4LayoutComponent.setPositionPercentYEnabled(true);
        _peg_4_4LayoutComponent.setPositionPercentY(0.6119);
        this._peg_4_4.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_4_4.setUnifySizeEnabled(false);
        this._peg_4_4.ignoreContentAdaptWithSize(false);
        this._peg_4_4.setContentSize(cc.size(12, 12));
        this._peg_4_4.setTouchEnabled(false);

        ///// # _peg_5_0
        this._peg_5_0 = new ccui.ImageView();
        this._peg_5_0.setName("_peg_5_0");
        this._layoutPegsShadow.addChild(this._peg_5_0);
        this._peg_5_0.setCascadeOpacityEnabled(true);
        this._peg_5_0.setCascadeColorEnabled(true);
        this._peg_5_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_5_0, 0.1348, 0.5613);
        let _peg_5_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_5_0);
        _peg_5_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_5_0LayoutComponent.setPositionPercentX(0.1348);
        _peg_5_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_5_0LayoutComponent.setPositionPercentY(0.5613);
        this._peg_5_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_5_0.setUnifySizeEnabled(false);
        this._peg_5_0.ignoreContentAdaptWithSize(false);
        this._peg_5_0.setContentSize(cc.size(12, 12));
        this._peg_5_0.setTouchEnabled(false);

        ///// # _peg_5_1
        this._peg_5_1 = new ccui.ImageView();
        this._peg_5_1.setName("_peg_5_1");
        this._layoutPegsShadow.addChild(this._peg_5_1);
        this._peg_5_1.setCascadeOpacityEnabled(true);
        this._peg_5_1.setCascadeColorEnabled(true);
        this._peg_5_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_5_1, 0.3195, 0.5613);
        let _peg_5_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_5_1);
        _peg_5_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_5_1LayoutComponent.setPositionPercentX(0.3195);
        _peg_5_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_5_1LayoutComponent.setPositionPercentY(0.5613);
        this._peg_5_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_5_1.setUnifySizeEnabled(false);
        this._peg_5_1.ignoreContentAdaptWithSize(false);
        this._peg_5_1.setContentSize(cc.size(12, 12));
        this._peg_5_1.setTouchEnabled(false);

        ///// # _peg_5_2
        this._peg_5_2 = new ccui.ImageView();
        this._peg_5_2.setName("_peg_5_2");
        this._layoutPegsShadow.addChild(this._peg_5_2);
        this._peg_5_2.setCascadeOpacityEnabled(true);
        this._peg_5_2.setCascadeColorEnabled(true);
        this._peg_5_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_5_2, 0.4994, 0.5613);
        let _peg_5_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_5_2);
        _peg_5_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_5_2LayoutComponent.setPositionPercentX(0.4994);
        _peg_5_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_5_2LayoutComponent.setPositionPercentY(0.5613);
        this._peg_5_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_5_2.setUnifySizeEnabled(false);
        this._peg_5_2.ignoreContentAdaptWithSize(false);
        this._peg_5_2.setContentSize(cc.size(12, 12));
        this._peg_5_2.setTouchEnabled(false);

        ///// # _peg_5_3
        this._peg_5_3 = new ccui.ImageView();
        this._peg_5_3.setName("_peg_5_3");
        this._layoutPegsShadow.addChild(this._peg_5_3);
        this._peg_5_3.setCascadeOpacityEnabled(true);
        this._peg_5_3.setCascadeColorEnabled(true);
        this._peg_5_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_5_3, 0.6793, 0.5613);
        let _peg_5_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_5_3);
        _peg_5_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_5_3LayoutComponent.setPositionPercentX(0.6793);
        _peg_5_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_5_3LayoutComponent.setPositionPercentY(0.5613);
        this._peg_5_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_5_3.setUnifySizeEnabled(false);
        this._peg_5_3.ignoreContentAdaptWithSize(false);
        this._peg_5_3.setContentSize(cc.size(12, 12));
        this._peg_5_3.setTouchEnabled(false);

        ///// # _peg_5_4
        this._peg_5_4 = new ccui.ImageView();
        this._peg_5_4.setName("_peg_5_4");
        this._layoutPegsShadow.addChild(this._peg_5_4);
        this._peg_5_4.setCascadeOpacityEnabled(true);
        this._peg_5_4.setCascadeColorEnabled(true);
        this._peg_5_4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_5_4, 0.8592, 0.5613);
        let _peg_5_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_5_4);
        _peg_5_4LayoutComponent.setPositionPercentXEnabled(true);
        _peg_5_4LayoutComponent.setPositionPercentX(0.8592);
        _peg_5_4LayoutComponent.setPositionPercentYEnabled(true);
        _peg_5_4LayoutComponent.setPositionPercentY(0.5613);
        this._peg_5_4.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_5_4.setUnifySizeEnabled(false);
        this._peg_5_4.ignoreContentAdaptWithSize(false);
        this._peg_5_4.setContentSize(cc.size(12, 12));
        this._peg_5_4.setTouchEnabled(false);

        ///// # _peg_6_0
        this._peg_6_0 = new ccui.ImageView();
        this._peg_6_0.setName("_peg_6_0");
        this._layoutPegsShadow.addChild(this._peg_6_0);
        this._peg_6_0.setCascadeOpacityEnabled(true);
        this._peg_6_0.setCascadeColorEnabled(true);
        this._peg_6_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_6_0, 0.0438, 0.5062);
        let _peg_6_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_6_0);
        _peg_6_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_6_0LayoutComponent.setPositionPercentX(0.0438);
        _peg_6_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_6_0LayoutComponent.setPositionPercentY(0.5062);
        this._peg_6_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_6_0.setUnifySizeEnabled(false);
        this._peg_6_0.ignoreContentAdaptWithSize(false);
        this._peg_6_0.setContentSize(cc.size(12, 12));
        this._peg_6_0.setTouchEnabled(false);

        ///// # _peg_6_1
        this._peg_6_1 = new ccui.ImageView();
        this._peg_6_1.setName("_peg_6_1");
        this._layoutPegsShadow.addChild(this._peg_6_1);
        this._peg_6_1.setCascadeOpacityEnabled(true);
        this._peg_6_1.setCascadeColorEnabled(true);
        this._peg_6_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_6_1, 0.4036, 0.5062);
        let _peg_6_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_6_1);
        _peg_6_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_6_1LayoutComponent.setPositionPercentX(0.4036);
        _peg_6_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_6_1LayoutComponent.setPositionPercentY(0.5062);
        this._peg_6_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_6_1.setUnifySizeEnabled(false);
        this._peg_6_1.ignoreContentAdaptWithSize(false);
        this._peg_6_1.setContentSize(cc.size(12, 12));
        this._peg_6_1.setTouchEnabled(false);

        ///// # _peg_6_2
        this._peg_6_2 = new ccui.ImageView();
        this._peg_6_2.setName("_peg_6_2");
        this._layoutPegsShadow.addChild(this._peg_6_2);
        this._peg_6_2.setCascadeOpacityEnabled(true);
        this._peg_6_2.setCascadeColorEnabled(true);
        this._peg_6_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_6_2, 0.5858, 0.5062);
        let _peg_6_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_6_2);
        _peg_6_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_6_2LayoutComponent.setPositionPercentX(0.5858);
        _peg_6_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_6_2LayoutComponent.setPositionPercentY(0.5062);
        this._peg_6_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_6_2.setUnifySizeEnabled(false);
        this._peg_6_2.ignoreContentAdaptWithSize(false);
        this._peg_6_2.setContentSize(cc.size(12, 12));
        this._peg_6_2.setTouchEnabled(false);

        ///// # _peg_7_0
        this._peg_7_0 = new ccui.ImageView();
        this._peg_7_0.setName("_peg_7_0");
        this._layoutPegsShadow.addChild(this._peg_7_0);
        this._peg_7_0.setCascadeOpacityEnabled(true);
        this._peg_7_0.setCascadeColorEnabled(true);
        this._peg_7_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_7_0, 0.1348, 0.4544);
        let _peg_7_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_7_0);
        _peg_7_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_7_0LayoutComponent.setPositionPercentX(0.1348);
        _peg_7_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_7_0LayoutComponent.setPositionPercentY(0.4544);
        this._peg_7_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_7_0.setUnifySizeEnabled(false);
        this._peg_7_0.ignoreContentAdaptWithSize(false);
        this._peg_7_0.setContentSize(cc.size(12, 12));
        this._peg_7_0.setTouchEnabled(false);

        ///// # _peg_7_1
        this._peg_7_1 = new ccui.ImageView();
        this._peg_7_1.setName("_peg_7_1");
        this._layoutPegsShadow.addChild(this._peg_7_1);
        this._peg_7_1.setCascadeOpacityEnabled(true);
        this._peg_7_1.setCascadeColorEnabled(true);
        this._peg_7_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_7_1, 0.3195, 0.4544);
        let _peg_7_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_7_1);
        _peg_7_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_7_1LayoutComponent.setPositionPercentX(0.3195);
        _peg_7_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_7_1LayoutComponent.setPositionPercentY(0.4544);
        this._peg_7_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_7_1.setUnifySizeEnabled(false);
        this._peg_7_1.ignoreContentAdaptWithSize(false);
        this._peg_7_1.setContentSize(cc.size(12, 12));
        this._peg_7_1.setTouchEnabled(false);

        ///// # _peg_7_2
        this._peg_7_2 = new ccui.ImageView();
        this._peg_7_2.setName("_peg_7_2");
        this._layoutPegsShadow.addChild(this._peg_7_2);
        this._peg_7_2.setCascadeOpacityEnabled(true);
        this._peg_7_2.setCascadeColorEnabled(true);
        this._peg_7_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_7_2, 0.6793, 0.4544);
        let _peg_7_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_7_2);
        _peg_7_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_7_2LayoutComponent.setPositionPercentX(0.6793);
        _peg_7_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_7_2LayoutComponent.setPositionPercentY(0.4544);
        this._peg_7_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_7_2.setUnifySizeEnabled(false);
        this._peg_7_2.ignoreContentAdaptWithSize(false);
        this._peg_7_2.setContentSize(cc.size(12, 12));
        this._peg_7_2.setTouchEnabled(false);

        ///// # _peg_7_3
        this._peg_7_3 = new ccui.ImageView();
        this._peg_7_3.setName("_peg_7_3");
        this._layoutPegsShadow.addChild(this._peg_7_3);
        this._peg_7_3.setCascadeOpacityEnabled(true);
        this._peg_7_3.setCascadeColorEnabled(true);
        this._peg_7_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_7_3, 0.8592, 0.4544);
        let _peg_7_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_7_3);
        _peg_7_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_7_3LayoutComponent.setPositionPercentX(0.8592);
        _peg_7_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_7_3LayoutComponent.setPositionPercentY(0.4544);
        this._peg_7_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_7_3.setUnifySizeEnabled(false);
        this._peg_7_3.ignoreContentAdaptWithSize(false);
        this._peg_7_3.setContentSize(cc.size(12, 12));
        this._peg_7_3.setTouchEnabled(false);

        ///// # _peg_8_0
        this._peg_8_0 = new ccui.ImageView();
        this._peg_8_0.setName("_peg_8_0");
        this._layoutPegsShadow.addChild(this._peg_8_0);
        this._peg_8_0.setCascadeOpacityEnabled(true);
        this._peg_8_0.setCascadeColorEnabled(true);
        this._peg_8_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_8_0, 0.0438, 0.4015);
        let _peg_8_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_8_0);
        _peg_8_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_8_0LayoutComponent.setPositionPercentX(0.0438);
        _peg_8_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_8_0LayoutComponent.setPositionPercentY(0.4015);
        this._peg_8_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_8_0.setUnifySizeEnabled(false);
        this._peg_8_0.ignoreContentAdaptWithSize(false);
        this._peg_8_0.setContentSize(cc.size(12, 12));
        this._peg_8_0.setTouchEnabled(false);

        ///// # _peg_8_1
        this._peg_8_1 = new ccui.ImageView();
        this._peg_8_1.setName("_peg_8_1");
        this._layoutPegsShadow.addChild(this._peg_8_1);
        this._peg_8_1.setCascadeOpacityEnabled(true);
        this._peg_8_1.setCascadeColorEnabled(true);
        this._peg_8_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_8_1, 0.2237, 0.4015);
        let _peg_8_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_8_1);
        _peg_8_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_8_1LayoutComponent.setPositionPercentX(0.2237);
        _peg_8_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_8_1LayoutComponent.setPositionPercentY(0.4015);
        this._peg_8_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_8_1.setUnifySizeEnabled(false);
        this._peg_8_1.ignoreContentAdaptWithSize(false);
        this._peg_8_1.setContentSize(cc.size(12, 12));
        this._peg_8_1.setTouchEnabled(false);

        ///// # _peg_8_2
        this._peg_8_2 = new ccui.ImageView();
        this._peg_8_2.setName("_peg_8_2");
        this._layoutPegsShadow.addChild(this._peg_8_2);
        this._peg_8_2.setCascadeOpacityEnabled(true);
        this._peg_8_2.setCascadeColorEnabled(true);
        this._peg_8_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_8_2, 0.768, 0.4015);
        let _peg_8_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_8_2);
        _peg_8_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_8_2LayoutComponent.setPositionPercentX(0.768);
        _peg_8_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_8_2LayoutComponent.setPositionPercentY(0.4015);
        this._peg_8_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_8_2.setUnifySizeEnabled(false);
        this._peg_8_2.ignoreContentAdaptWithSize(false);
        this._peg_8_2.setContentSize(cc.size(12, 12));
        this._peg_8_2.setTouchEnabled(false);

        ///// # _peg_9_0
        this._peg_9_0 = new ccui.ImageView();
        this._peg_9_0.setName("_peg_9_0");
        this._layoutPegsShadow.addChild(this._peg_9_0);
        this._peg_9_0.setCascadeOpacityEnabled(true);
        this._peg_9_0.setCascadeColorEnabled(true);
        this._peg_9_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_9_0, 0.0438, 0.2947);
        let _peg_9_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_9_0);
        _peg_9_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_9_0LayoutComponent.setPositionPercentX(0.0438);
        _peg_9_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_9_0LayoutComponent.setPositionPercentY(0.2947);
        this._peg_9_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_9_0.setUnifySizeEnabled(false);
        this._peg_9_0.ignoreContentAdaptWithSize(false);
        this._peg_9_0.setContentSize(cc.size(12, 12));
        this._peg_9_0.setTouchEnabled(false);

        ///// # _peg_9_1
        this._peg_9_1 = new ccui.ImageView();
        this._peg_9_1.setName("_peg_9_1");
        this._layoutPegsShadow.addChild(this._peg_9_1);
        this._peg_9_1.setCascadeOpacityEnabled(true);
        this._peg_9_1.setCascadeColorEnabled(true);
        this._peg_9_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_9_1, 0.2237, 0.2947);
        let _peg_9_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_9_1);
        _peg_9_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_9_1LayoutComponent.setPositionPercentX(0.2237);
        _peg_9_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_9_1LayoutComponent.setPositionPercentY(0.2947);
        this._peg_9_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_9_1.setUnifySizeEnabled(false);
        this._peg_9_1.ignoreContentAdaptWithSize(false);
        this._peg_9_1.setContentSize(cc.size(12, 12));
        this._peg_9_1.setTouchEnabled(false);

        ///// # _peg_9_2
        this._peg_9_2 = new ccui.ImageView();
        this._peg_9_2.setName("_peg_9_2");
        this._layoutPegsShadow.addChild(this._peg_9_2);
        this._peg_9_2.setCascadeOpacityEnabled(true);
        this._peg_9_2.setCascadeColorEnabled(true);
        this._peg_9_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_9_2, 0.768, 0.2947);
        let _peg_9_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_9_2);
        _peg_9_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_9_2LayoutComponent.setPositionPercentX(0.768);
        _peg_9_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_9_2LayoutComponent.setPositionPercentY(0.2947);
        this._peg_9_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_9_2.setUnifySizeEnabled(false);
        this._peg_9_2.ignoreContentAdaptWithSize(false);
        this._peg_9_2.setContentSize(cc.size(12, 12));
        this._peg_9_2.setTouchEnabled(false);

        ///// # _peg_10_0
        this._peg_10_0 = new ccui.ImageView();
        this._peg_10_0.setName("_peg_10_0");
        this._layoutPegsShadow.addChild(this._peg_10_0);
        this._peg_10_0.setCascadeOpacityEnabled(true);
        this._peg_10_0.setCascadeColorEnabled(true);
        this._peg_10_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_10_0, 0.1348, 0.2407);
        let _peg_10_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_10_0);
        _peg_10_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_10_0LayoutComponent.setPositionPercentX(0.1348);
        _peg_10_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_10_0LayoutComponent.setPositionPercentY(0.2407);
        this._peg_10_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_10_0.setUnifySizeEnabled(false);
        this._peg_10_0.ignoreContentAdaptWithSize(false);
        this._peg_10_0.setContentSize(cc.size(12, 12));
        this._peg_10_0.setTouchEnabled(false);

        ///// # _peg_10_1
        this._peg_10_1 = new ccui.ImageView();
        this._peg_10_1.setName("_peg_10_1");
        this._layoutPegsShadow.addChild(this._peg_10_1);
        this._peg_10_1.setCascadeOpacityEnabled(true);
        this._peg_10_1.setCascadeColorEnabled(true);
        this._peg_10_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_10_1, 0.3195, 0.2407);
        let _peg_10_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_10_1);
        _peg_10_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_10_1LayoutComponent.setPositionPercentX(0.3195);
        _peg_10_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_10_1LayoutComponent.setPositionPercentY(0.2407);
        this._peg_10_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_10_1.setUnifySizeEnabled(false);
        this._peg_10_1.ignoreContentAdaptWithSize(false);
        this._peg_10_1.setContentSize(cc.size(12, 12));
        this._peg_10_1.setTouchEnabled(false);

        ///// # _peg_10_2
        this._peg_10_2 = new ccui.ImageView();
        this._peg_10_2.setName("_peg_10_2");
        this._layoutPegsShadow.addChild(this._peg_10_2);
        this._peg_10_2.setCascadeOpacityEnabled(true);
        this._peg_10_2.setCascadeColorEnabled(true);
        this._peg_10_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_10_2, 0.6793, 0.2407);
        let _peg_10_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_10_2);
        _peg_10_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_10_2LayoutComponent.setPositionPercentX(0.6793);
        _peg_10_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_10_2LayoutComponent.setPositionPercentY(0.2407);
        this._peg_10_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_10_2.setUnifySizeEnabled(false);
        this._peg_10_2.ignoreContentAdaptWithSize(false);
        this._peg_10_2.setContentSize(cc.size(12, 12));
        this._peg_10_2.setTouchEnabled(false);

        ///// # _peg_10_3
        this._peg_10_3 = new ccui.ImageView();
        this._peg_10_3.setName("_peg_10_3");
        this._layoutPegsShadow.addChild(this._peg_10_3);
        this._peg_10_3.setCascadeOpacityEnabled(true);
        this._peg_10_3.setCascadeColorEnabled(true);
        this._peg_10_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_10_3, 0.8592, 0.2407);
        let _peg_10_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_10_3);
        _peg_10_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_10_3LayoutComponent.setPositionPercentX(0.8592);
        _peg_10_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_10_3LayoutComponent.setPositionPercentY(0.2407);
        this._peg_10_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_10_3.setUnifySizeEnabled(false);
        this._peg_10_3.ignoreContentAdaptWithSize(false);
        this._peg_10_3.setContentSize(cc.size(12, 12));
        this._peg_10_3.setTouchEnabled(false);

        ///// # _peg_11_0
        this._peg_11_0 = new ccui.ImageView();
        this._peg_11_0.setName("_peg_11_0");
        this._layoutPegsShadow.addChild(this._peg_11_0);
        this._peg_11_0.setCascadeOpacityEnabled(true);
        this._peg_11_0.setCascadeColorEnabled(true);
        this._peg_11_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_11_0, 0.0438, 0.189);
        let _peg_11_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_11_0);
        _peg_11_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_11_0LayoutComponent.setPositionPercentX(0.0438);
        _peg_11_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_11_0LayoutComponent.setPositionPercentY(0.189);
        this._peg_11_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_11_0.setUnifySizeEnabled(false);
        this._peg_11_0.ignoreContentAdaptWithSize(false);
        this._peg_11_0.setContentSize(cc.size(12, 12));
        this._peg_11_0.setTouchEnabled(false);

        ///// # _peg_11_1
        this._peg_11_1 = new ccui.ImageView();
        this._peg_11_1.setName("_peg_11_1");
        this._layoutPegsShadow.addChild(this._peg_11_1);
        this._peg_11_1.setCascadeOpacityEnabled(true);
        this._peg_11_1.setCascadeColorEnabled(true);
        this._peg_11_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_11_1, 0.2237, 0.189);
        let _peg_11_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_11_1);
        _peg_11_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_11_1LayoutComponent.setPositionPercentX(0.2237);
        _peg_11_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_11_1LayoutComponent.setPositionPercentY(0.189);
        this._peg_11_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_11_1.setUnifySizeEnabled(false);
        this._peg_11_1.ignoreContentAdaptWithSize(false);
        this._peg_11_1.setContentSize(cc.size(12, 12));
        this._peg_11_1.setTouchEnabled(false);

        ///// # _peg_11_2
        this._peg_11_2 = new ccui.ImageView();
        this._peg_11_2.setName("_peg_11_2");
        this._layoutPegsShadow.addChild(this._peg_11_2);
        this._peg_11_2.setCascadeOpacityEnabled(true);
        this._peg_11_2.setCascadeColorEnabled(true);
        this._peg_11_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_11_2, 0.4036, 0.189);
        let _peg_11_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_11_2);
        _peg_11_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_11_2LayoutComponent.setPositionPercentX(0.4036);
        _peg_11_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_11_2LayoutComponent.setPositionPercentY(0.189);
        this._peg_11_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_11_2.setUnifySizeEnabled(false);
        this._peg_11_2.ignoreContentAdaptWithSize(false);
        this._peg_11_2.setContentSize(cc.size(12, 12));
        this._peg_11_2.setTouchEnabled(false);

        ///// # _peg_11_3
        this._peg_11_3 = new ccui.ImageView();
        this._peg_11_3.setName("_peg_11_3");
        this._layoutPegsShadow.addChild(this._peg_11_3);
        this._peg_11_3.setCascadeOpacityEnabled(true);
        this._peg_11_3.setCascadeColorEnabled(true);
        this._peg_11_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_11_3, 0.5858, 0.189);
        let _peg_11_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_11_3);
        _peg_11_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_11_3LayoutComponent.setPositionPercentX(0.5858);
        _peg_11_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_11_3LayoutComponent.setPositionPercentY(0.189);
        this._peg_11_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_11_3.setUnifySizeEnabled(false);
        this._peg_11_3.ignoreContentAdaptWithSize(false);
        this._peg_11_3.setContentSize(cc.size(12, 12));
        this._peg_11_3.setTouchEnabled(false);

        ///// # _peg_11_4
        this._peg_11_4 = new ccui.ImageView();
        this._peg_11_4.setName("_peg_11_4");
        this._layoutPegsShadow.addChild(this._peg_11_4);
        this._peg_11_4.setCascadeOpacityEnabled(true);
        this._peg_11_4.setCascadeColorEnabled(true);
        this._peg_11_4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_11_4, 0.768, 0.189);
        let _peg_11_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_11_4);
        _peg_11_4LayoutComponent.setPositionPercentXEnabled(true);
        _peg_11_4LayoutComponent.setPositionPercentX(0.768);
        _peg_11_4LayoutComponent.setPositionPercentYEnabled(true);
        _peg_11_4LayoutComponent.setPositionPercentY(0.189);
        this._peg_11_4.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_11_4.setUnifySizeEnabled(false);
        this._peg_11_4.ignoreContentAdaptWithSize(false);
        this._peg_11_4.setContentSize(cc.size(12, 12));
        this._peg_11_4.setTouchEnabled(false);

        ///// # _peg_12_0
        this._peg_12_0 = new ccui.ImageView();
        this._peg_12_0.setName("_peg_12_0");
        this._layoutPegsShadow.addChild(this._peg_12_0);
        this._peg_12_0.setCascadeOpacityEnabled(true);
        this._peg_12_0.setCascadeColorEnabled(true);
        this._peg_12_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_12_0, 0.1348, 0.1338);
        let _peg_12_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_12_0);
        _peg_12_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_12_0LayoutComponent.setPositionPercentX(0.1348);
        _peg_12_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_12_0LayoutComponent.setPositionPercentY(0.1338);
        this._peg_12_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_12_0.setUnifySizeEnabled(false);
        this._peg_12_0.ignoreContentAdaptWithSize(false);
        this._peg_12_0.setContentSize(cc.size(12, 12));
        this._peg_12_0.setTouchEnabled(false);

        ///// # _peg_12_1
        this._peg_12_1 = new ccui.ImageView();
        this._peg_12_1.setName("_peg_12_1");
        this._layoutPegsShadow.addChild(this._peg_12_1);
        this._peg_12_1.setCascadeOpacityEnabled(true);
        this._peg_12_1.setCascadeColorEnabled(true);
        this._peg_12_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_12_1, 0.3195, 0.1338);
        let _peg_12_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_12_1);
        _peg_12_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_12_1LayoutComponent.setPositionPercentX(0.3195);
        _peg_12_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_12_1LayoutComponent.setPositionPercentY(0.1338);
        this._peg_12_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_12_1.setUnifySizeEnabled(false);
        this._peg_12_1.ignoreContentAdaptWithSize(false);
        this._peg_12_1.setContentSize(cc.size(12, 12));
        this._peg_12_1.setTouchEnabled(false);

        ///// # _peg_12_2
        this._peg_12_2 = new ccui.ImageView();
        this._peg_12_2.setName("_peg_12_2");
        this._layoutPegsShadow.addChild(this._peg_12_2);
        this._peg_12_2.setCascadeOpacityEnabled(true);
        this._peg_12_2.setCascadeColorEnabled(true);
        this._peg_12_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_12_2, 0.4994, 0.1338);
        let _peg_12_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_12_2);
        _peg_12_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_12_2LayoutComponent.setPositionPercentX(0.4994);
        _peg_12_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_12_2LayoutComponent.setPositionPercentY(0.1338);
        this._peg_12_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_12_2.setUnifySizeEnabled(false);
        this._peg_12_2.ignoreContentAdaptWithSize(false);
        this._peg_12_2.setContentSize(cc.size(12, 12));
        this._peg_12_2.setTouchEnabled(false);

        ///// # _peg_12_3
        this._peg_12_3 = new ccui.ImageView();
        this._peg_12_3.setName("_peg_12_3");
        this._layoutPegsShadow.addChild(this._peg_12_3);
        this._peg_12_3.setCascadeOpacityEnabled(true);
        this._peg_12_3.setCascadeColorEnabled(true);
        this._peg_12_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_12_3, 0.6793, 0.1338);
        let _peg_12_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_12_3);
        _peg_12_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_12_3LayoutComponent.setPositionPercentX(0.6793);
        _peg_12_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_12_3LayoutComponent.setPositionPercentY(0.1338);
        this._peg_12_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_12_3.setUnifySizeEnabled(false);
        this._peg_12_3.ignoreContentAdaptWithSize(false);
        this._peg_12_3.setContentSize(cc.size(12, 12));
        this._peg_12_3.setTouchEnabled(false);

        ///// # _peg_13_0
        this._peg_13_0 = new ccui.ImageView();
        this._peg_13_0.setName("_peg_13_0");
        this._layoutPegsShadow.addChild(this._peg_13_0);
        this._peg_13_0.setCascadeOpacityEnabled(true);
        this._peg_13_0.setCascadeColorEnabled(true);
        this._peg_13_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_0, 0.4458, 0.2947);
        let _peg_13_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_0);
        _peg_13_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_13_0LayoutComponent.setPositionPercentX(0.4458);
        _peg_13_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_0LayoutComponent.setPositionPercentY(0.2947);
        this._peg_13_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_0.setUnifySizeEnabled(false);
        this._peg_13_0.ignoreContentAdaptWithSize(false);
        this._peg_13_0.setContentSize(cc.size(12, 12));
        this._peg_13_0.setTouchEnabled(false);

        ///// # _peg_13_1
        this._peg_13_1 = new ccui.ImageView();
        this._peg_13_1.setName("_peg_13_1");
        this._layoutPegsShadow.addChild(this._peg_13_1);
        this._peg_13_1.setCascadeOpacityEnabled(true);
        this._peg_13_1.setCascadeColorEnabled(true);
        this._peg_13_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_1, 0.5474, 0.2947);
        let _peg_13_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_1);
        _peg_13_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_13_1LayoutComponent.setPositionPercentX(0.5474);
        _peg_13_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_1LayoutComponent.setPositionPercentY(0.2947);
        this._peg_13_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_1.setUnifySizeEnabled(false);
        this._peg_13_1.ignoreContentAdaptWithSize(false);
        this._peg_13_1.setContentSize(cc.size(12, 12));
        this._peg_13_1.setTouchEnabled(false);

        ///// # _peg_13_2
        this._peg_13_2 = new ccui.ImageView();
        this._peg_13_2.setName("_peg_13_2");
        this._layoutPegsShadow.addChild(this._peg_13_2);
        this._peg_13_2.setCascadeOpacityEnabled(true);
        this._peg_13_2.setCascadeColorEnabled(true);
        this._peg_13_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_2, 0.5858, 0.3107);
        let _peg_13_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_2);
        _peg_13_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_13_2LayoutComponent.setPositionPercentX(0.5858);
        _peg_13_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_2LayoutComponent.setPositionPercentY(0.3107);
        this._peg_13_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_2.setUnifySizeEnabled(false);
        this._peg_13_2.ignoreContentAdaptWithSize(false);
        this._peg_13_2.setContentSize(cc.size(12, 12));
        this._peg_13_2.setTouchEnabled(false);

        ///// # _peg_13_3
        this._peg_13_3 = new ccui.ImageView();
        this._peg_13_3.setName("_peg_13_3");
        this._layoutPegsShadow.addChild(this._peg_13_3);
        this._peg_13_3.setCascadeOpacityEnabled(true);
        this._peg_13_3.setCascadeColorEnabled(true);
        this._peg_13_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_3, 0.4994, 0.2947);
        let _peg_13_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_3);
        _peg_13_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_13_3LayoutComponent.setPositionPercentX(0.4994);
        _peg_13_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_3LayoutComponent.setPositionPercentY(0.2947);
        this._peg_13_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_3.setUnifySizeEnabled(false);
        this._peg_13_3.ignoreContentAdaptWithSize(false);
        this._peg_13_3.setContentSize(cc.size(12, 12));
        this._peg_13_3.setTouchEnabled(false);

        ///// # _peg_13_4
        this._peg_13_4 = new ccui.ImageView();
        this._peg_13_4.setName("_peg_13_4");
        this._layoutPegsShadow.addChild(this._peg_13_4);
        this._peg_13_4.setCascadeOpacityEnabled(true);
        this._peg_13_4.setCascadeColorEnabled(true);
        this._peg_13_4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_4, 0.5858, 0.3464);
        let _peg_13_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_4);
        _peg_13_4LayoutComponent.setPositionPercentXEnabled(true);
        _peg_13_4LayoutComponent.setPositionPercentX(0.5858);
        _peg_13_4LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_4LayoutComponent.setPositionPercentY(0.3464);
        this._peg_13_4.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_4.setUnifySizeEnabled(false);
        this._peg_13_4.ignoreContentAdaptWithSize(false);
        this._peg_13_4.setContentSize(cc.size(12, 12));
        this._peg_13_4.setTouchEnabled(false);

        ///// # _peg_13_5
        this._peg_13_5 = new ccui.ImageView();
        this._peg_13_5.setName("_peg_13_5");
        this._layoutPegsShadow.addChild(this._peg_13_5);
        this._peg_13_5.setCascadeOpacityEnabled(true);
        this._peg_13_5.setCascadeColorEnabled(true);
        this._peg_13_5.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_5, 0.4036, 0.3464);
        let _peg_13_5LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_5);
        _peg_13_5LayoutComponent.setPositionPercentXEnabled(true);
        _peg_13_5LayoutComponent.setPositionPercentX(0.4036);
        _peg_13_5LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_5LayoutComponent.setPositionPercentY(0.3464);
        this._peg_13_5.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_5.setUnifySizeEnabled(false);
        this._peg_13_5.ignoreContentAdaptWithSize(false);
        this._peg_13_5.setContentSize(cc.size(12, 12));
        this._peg_13_5.setTouchEnabled(false);

        ///// # _peg_13_6
        this._peg_13_6 = new ccui.ImageView();
        this._peg_13_6.setName("_peg_13_6");
        this._layoutPegsShadow.addChild(this._peg_13_6);
        this._peg_13_6.setCascadeOpacityEnabled(true);
        this._peg_13_6.setCascadeColorEnabled(true);
        this._peg_13_6.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_6, 0.4036, 0.3107);
        let _peg_13_6LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_6);
        _peg_13_6LayoutComponent.setPositionPercentXEnabled(true);
        _peg_13_6LayoutComponent.setPositionPercentX(0.4036);
        _peg_13_6LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_6LayoutComponent.setPositionPercentY(0.3107);
        this._peg_13_6.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_6.setUnifySizeEnabled(false);
        this._peg_13_6.ignoreContentAdaptWithSize(false);
        this._peg_13_6.setContentSize(cc.size(12, 12));
        this._peg_13_6.setTouchEnabled(false);

        ///// # _peg_13_7
        this._peg_13_7 = new ccui.ImageView();
        this._peg_13_7.setName("_peg_13_7");
        this._layoutPegsShadow.addChild(this._peg_13_7);
        this._peg_13_7.setCascadeOpacityEnabled(true);
        this._peg_13_7.setCascadeColorEnabled(true);
        this._peg_13_7.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_7, 0.4036, 0.3822);
        let _peg_13_7LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_7);
        _peg_13_7LayoutComponent.setPositionPercentXEnabled(true);
        _peg_13_7LayoutComponent.setPositionPercentX(0.4036);
        _peg_13_7LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_7LayoutComponent.setPositionPercentY(0.3822);
        this._peg_13_7.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_7.setUnifySizeEnabled(false);
        this._peg_13_7.ignoreContentAdaptWithSize(false);
        this._peg_13_7.setContentSize(cc.size(12, 12));
        this._peg_13_7.setTouchEnabled(false);

        ///// # _peg_13_8
        this._peg_13_8 = new ccui.ImageView();
        this._peg_13_8.setName("_peg_13_8");
        this._layoutPegsShadow.addChild(this._peg_13_8);
        this._peg_13_8.setCascadeOpacityEnabled(true);
        this._peg_13_8.setCascadeColorEnabled(true);
        this._peg_13_8.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_8, 0.5858, 0.3822);
        let _peg_13_8LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_8);
        _peg_13_8LayoutComponent.setPositionPercentXEnabled(true);
        _peg_13_8LayoutComponent.setPositionPercentX(0.5858);
        _peg_13_8LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_8LayoutComponent.setPositionPercentY(0.3822);
        this._peg_13_8.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_8.setUnifySizeEnabled(false);
        this._peg_13_8.ignoreContentAdaptWithSize(false);
        this._peg_13_8.setContentSize(cc.size(12, 12));
        this._peg_13_8.setTouchEnabled(false);

        ///// # _peg_13_9
        this._peg_13_9 = new ccui.ImageView();
        this._peg_13_9.setName("_peg_13_9");
        this._layoutPegsShadow.addChild(this._peg_13_9);
        this._peg_13_9.setCascadeOpacityEnabled(true);
        this._peg_13_9.setCascadeColorEnabled(true);
        this._peg_13_9.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_9, 0.4459, 0.4015);
        let _peg_13_9LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_9);
        _peg_13_9LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_9LayoutComponent.setPositionPercentY(0.4015);
        this._peg_13_9.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_9.setUnifySizeEnabled(false);
        this._peg_13_9.ignoreContentAdaptWithSize(false);
        this._peg_13_9.setContentSize(cc.size(12, 12));
        this._peg_13_9.setTouchEnabled(false);

        ///// # _peg_13_10
        this._peg_13_10 = new ccui.ImageView();
        this._peg_13_10.setName("_peg_13_10");
        this._layoutPegsShadow.addChild(this._peg_13_10);
        this._peg_13_10.setCascadeOpacityEnabled(true);
        this._peg_13_10.setCascadeColorEnabled(true);
        this._peg_13_10.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_10, 0.5474, 0.4015);
        let _peg_13_10LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_10);
        _peg_13_10LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_10LayoutComponent.setPositionPercentY(0.4015);
        this._peg_13_10.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_10.setUnifySizeEnabled(false);
        this._peg_13_10.ignoreContentAdaptWithSize(false);
        this._peg_13_10.setContentSize(cc.size(12, 12));
        this._peg_13_10.setTouchEnabled(false);

        ///// # _layoutPegs
        this._layoutPegs = new ccui.Layout();
        this._layoutPegs.setName("_layoutPegs");
        this._layoutPhysic.addChild(this._layoutPegs);
        this._layoutPegs.setCascadeOpacityEnabled(true);
        this._layoutPegs.setCascadeColorEnabled(true);
        let _layoutPegsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPegs);
        _layoutPegsLayoutComponent.setPercentWidthEnabled(true);
        _layoutPegsLayoutComponent.setPercentWidth(1);
        _layoutPegsLayoutComponent.setPercentHeightEnabled(true);
        _layoutPegsLayoutComponent.setPercentHeight(1);
        this._layoutPegs.setTouchEnabled(false);
        this._layoutPegs.setUnifySizeEnabled(false);
        this._layoutPegs.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutPegs, 1, 1);

        ///// # _peg_0_0
        this._peg_0_0 = new ccui.ImageView();
        this._peg_0_0.setName("_peg_0_0");
        this._layoutPegs.addChild(this._peg_0_0);
        this._peg_0_0.setCascadeOpacityEnabled(true);
        this._peg_0_0.setCascadeColorEnabled(true);
        this._peg_0_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_0_0, 0.0438, 0.8267);
        let _peg_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_0_0);
        _peg_0_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_0_0LayoutComponent.setPositionPercentX(0.0438);
        _peg_0_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_0_0LayoutComponent.setPositionPercentY(0.8267);
        this._peg_0_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_0_0.setUnifySizeEnabled(false);
        this._peg_0_0.ignoreContentAdaptWithSize(false);
        this._peg_0_0.setContentSize(cc.size(12, 12));
        this._peg_0_0.setTouchEnabled(false);

        ///// # _peg_0_1
        this._peg_0_1 = new ccui.ImageView();
        this._peg_0_1.setName("_peg_0_1");
        this._layoutPegs.addChild(this._peg_0_1);
        this._peg_0_1.setCascadeOpacityEnabled(true);
        this._peg_0_1.setCascadeColorEnabled(true);
        this._peg_0_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_0_1, 0.2237, 0.8267);
        let _peg_0_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_0_1);
        _peg_0_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_0_1LayoutComponent.setPositionPercentX(0.2237);
        _peg_0_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_0_1LayoutComponent.setPositionPercentY(0.8267);
        this._peg_0_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_0_1.setUnifySizeEnabled(false);
        this._peg_0_1.ignoreContentAdaptWithSize(false);
        this._peg_0_1.setContentSize(cc.size(12, 12));
        this._peg_0_1.setTouchEnabled(false);

        ///// # _peg_0_2
        this._peg_0_2 = new ccui.ImageView();
        this._peg_0_2.setName("_peg_0_2");
        this._layoutPegs.addChild(this._peg_0_2);
        this._peg_0_2.setCascadeOpacityEnabled(true);
        this._peg_0_2.setCascadeColorEnabled(true);
        this._peg_0_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_0_2, 0.4036, 0.8267);
        let _peg_0_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_0_2);
        _peg_0_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_0_2LayoutComponent.setPositionPercentX(0.4036);
        _peg_0_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_0_2LayoutComponent.setPositionPercentY(0.8267);
        this._peg_0_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_0_2.setUnifySizeEnabled(false);
        this._peg_0_2.ignoreContentAdaptWithSize(false);
        this._peg_0_2.setContentSize(cc.size(12, 12));
        this._peg_0_2.setTouchEnabled(false);

        ///// # _peg_0_3
        this._peg_0_3 = new ccui.ImageView();
        this._peg_0_3.setName("_peg_0_3");
        this._layoutPegs.addChild(this._peg_0_3);
        this._peg_0_3.setCascadeOpacityEnabled(true);
        this._peg_0_3.setCascadeColorEnabled(true);
        this._peg_0_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_0_3, 0.5858, 0.8267);
        let _peg_0_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_0_3);
        _peg_0_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_0_3LayoutComponent.setPositionPercentX(0.5858);
        _peg_0_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_0_3LayoutComponent.setPositionPercentY(0.8267);
        this._peg_0_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_0_3.setUnifySizeEnabled(false);
        this._peg_0_3.ignoreContentAdaptWithSize(false);
        this._peg_0_3.setContentSize(cc.size(12, 12));
        this._peg_0_3.setTouchEnabled(false);

        ///// # _peg_0_4
        this._peg_0_4 = new ccui.ImageView();
        this._peg_0_4.setName("_peg_0_4");
        this._layoutPegs.addChild(this._peg_0_4);
        this._peg_0_4.setCascadeOpacityEnabled(true);
        this._peg_0_4.setCascadeColorEnabled(true);
        this._peg_0_4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_0_4, 0.768, 0.8267);
        let _peg_0_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_0_4);
        _peg_0_4LayoutComponent.setPositionPercentXEnabled(true);
        _peg_0_4LayoutComponent.setPositionPercentX(0.768);
        _peg_0_4LayoutComponent.setPositionPercentYEnabled(true);
        _peg_0_4LayoutComponent.setPositionPercentY(0.8267);
        this._peg_0_4.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_0_4.setUnifySizeEnabled(false);
        this._peg_0_4.ignoreContentAdaptWithSize(false);
        this._peg_0_4.setContentSize(cc.size(12, 12));
        this._peg_0_4.setTouchEnabled(false);

        ///// # _peg_1_0
        this._peg_1_0 = new ccui.ImageView();
        this._peg_1_0.setName("_peg_1_0");
        this._layoutPegs.addChild(this._peg_1_0);
        this._peg_1_0.setCascadeOpacityEnabled(true);
        this._peg_1_0.setCascadeColorEnabled(true);
        this._peg_1_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_1_0, 0.1348, 0.7739);
        let _peg_1_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_1_0);
        _peg_1_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_1_0LayoutComponent.setPositionPercentX(0.1348);
        _peg_1_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_1_0LayoutComponent.setPositionPercentY(0.7739);
        this._peg_1_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_1_0.setUnifySizeEnabled(false);
        this._peg_1_0.ignoreContentAdaptWithSize(false);
        this._peg_1_0.setContentSize(cc.size(12, 12));
        this._peg_1_0.setTouchEnabled(false);

        ///// # _peg_1_1
        this._peg_1_1 = new ccui.ImageView();
        this._peg_1_1.setName("_peg_1_1");
        this._layoutPegs.addChild(this._peg_1_1);
        this._peg_1_1.setCascadeOpacityEnabled(true);
        this._peg_1_1.setCascadeColorEnabled(true);
        this._peg_1_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_1_1, 0.3195, 0.7739);
        let _peg_1_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_1_1);
        _peg_1_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_1_1LayoutComponent.setPositionPercentX(0.3195);
        _peg_1_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_1_1LayoutComponent.setPositionPercentY(0.7739);
        this._peg_1_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_1_1.setUnifySizeEnabled(false);
        this._peg_1_1.ignoreContentAdaptWithSize(false);
        this._peg_1_1.setContentSize(cc.size(12, 12));
        this._peg_1_1.setTouchEnabled(false);

        ///// # _peg_1_2
        this._peg_1_2 = new ccui.ImageView();
        this._peg_1_2.setName("_peg_1_2");
        this._layoutPegs.addChild(this._peg_1_2);
        this._peg_1_2.setCascadeOpacityEnabled(true);
        this._peg_1_2.setCascadeColorEnabled(true);
        this._peg_1_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_1_2, 0.4993, 0.7735);
        let _peg_1_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_1_2);
        _peg_1_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_1_2LayoutComponent.setPositionPercentX(0.4993);
        _peg_1_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_1_2LayoutComponent.setPositionPercentY(0.7735);
        this._peg_1_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_1_2.setUnifySizeEnabled(false);
        this._peg_1_2.ignoreContentAdaptWithSize(false);
        this._peg_1_2.setContentSize(cc.size(12, 12));
        this._peg_1_2.setTouchEnabled(false);

        ///// # _peg_1_3
        this._peg_1_3 = new ccui.ImageView();
        this._peg_1_3.setName("_peg_1_3");
        this._layoutPegs.addChild(this._peg_1_3);
        this._peg_1_3.setCascadeOpacityEnabled(true);
        this._peg_1_3.setCascadeColorEnabled(true);
        this._peg_1_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_1_3, 0.6793, 0.7739);
        let _peg_1_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_1_3);
        _peg_1_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_1_3LayoutComponent.setPositionPercentX(0.6793);
        _peg_1_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_1_3LayoutComponent.setPositionPercentY(0.7739);
        this._peg_1_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_1_3.setUnifySizeEnabled(false);
        this._peg_1_3.ignoreContentAdaptWithSize(false);
        this._peg_1_3.setContentSize(cc.size(12, 12));
        this._peg_1_3.setTouchEnabled(false);

        ///// # _peg_1_4
        this._peg_1_4 = new ccui.ImageView();
        this._peg_1_4.setName("_peg_1_4");
        this._layoutPegs.addChild(this._peg_1_4);
        this._peg_1_4.setCascadeOpacityEnabled(true);
        this._peg_1_4.setCascadeColorEnabled(true);
        this._peg_1_4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_1_4, 0.8592, 0.7739);
        let _peg_1_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_1_4);
        _peg_1_4LayoutComponent.setPositionPercentXEnabled(true);
        _peg_1_4LayoutComponent.setPositionPercentX(0.8592);
        _peg_1_4LayoutComponent.setPositionPercentYEnabled(true);
        _peg_1_4LayoutComponent.setPositionPercentY(0.7739);
        this._peg_1_4.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_1_4.setUnifySizeEnabled(false);
        this._peg_1_4.ignoreContentAdaptWithSize(false);
        this._peg_1_4.setContentSize(cc.size(12, 12));
        this._peg_1_4.setTouchEnabled(false);

        ///// # _peg_2_0
        this._peg_2_0 = new ccui.ImageView();
        this._peg_2_0.setName("_peg_2_0");
        this._layoutPegs.addChild(this._peg_2_0);
        this._peg_2_0.setCascadeOpacityEnabled(true);
        this._peg_2_0.setCascadeColorEnabled(true);
        this._peg_2_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_2_0, 0.0438, 0.7198);
        let _peg_2_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_2_0);
        _peg_2_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_2_0LayoutComponent.setPositionPercentX(0.0438);
        _peg_2_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_2_0LayoutComponent.setPositionPercentY(0.7198);
        this._peg_2_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_2_0.setUnifySizeEnabled(false);
        this._peg_2_0.ignoreContentAdaptWithSize(false);
        this._peg_2_0.setContentSize(cc.size(12, 12));
        this._peg_2_0.setTouchEnabled(false);

        ///// # _peg_2_1
        this._peg_2_1 = new ccui.ImageView();
        this._peg_2_1.setName("_peg_2_1");
        this._layoutPegs.addChild(this._peg_2_1);
        this._peg_2_1.setCascadeOpacityEnabled(true);
        this._peg_2_1.setCascadeColorEnabled(true);
        this._peg_2_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_2_1, 0.2237, 0.7198);
        let _peg_2_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_2_1);
        _peg_2_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_2_1LayoutComponent.setPositionPercentX(0.2237);
        _peg_2_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_2_1LayoutComponent.setPositionPercentY(0.7198);
        this._peg_2_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_2_1.setUnifySizeEnabled(false);
        this._peg_2_1.ignoreContentAdaptWithSize(false);
        this._peg_2_1.setContentSize(cc.size(12, 12));
        this._peg_2_1.setTouchEnabled(false);

        ///// # _peg_2_2
        this._peg_2_2 = new ccui.ImageView();
        this._peg_2_2.setName("_peg_2_2");
        this._layoutPegs.addChild(this._peg_2_2);
        this._peg_2_2.setCascadeOpacityEnabled(true);
        this._peg_2_2.setCascadeColorEnabled(true);
        this._peg_2_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_2_2, 0.4036, 0.7198);
        let _peg_2_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_2_2);
        _peg_2_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_2_2LayoutComponent.setPositionPercentX(0.4036);
        _peg_2_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_2_2LayoutComponent.setPositionPercentY(0.7198);
        this._peg_2_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_2_2.setUnifySizeEnabled(false);
        this._peg_2_2.ignoreContentAdaptWithSize(false);
        this._peg_2_2.setContentSize(cc.size(12, 12));
        this._peg_2_2.setTouchEnabled(false);

        ///// # _peg_2_3
        this._peg_2_3 = new ccui.ImageView();
        this._peg_2_3.setName("_peg_2_3");
        this._layoutPegs.addChild(this._peg_2_3);
        this._peg_2_3.setCascadeOpacityEnabled(true);
        this._peg_2_3.setCascadeColorEnabled(true);
        this._peg_2_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_2_3, 0.5858, 0.7198);
        let _peg_2_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_2_3);
        _peg_2_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_2_3LayoutComponent.setPositionPercentX(0.5858);
        _peg_2_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_2_3LayoutComponent.setPositionPercentY(0.7198);
        this._peg_2_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_2_3.setUnifySizeEnabled(false);
        this._peg_2_3.ignoreContentAdaptWithSize(false);
        this._peg_2_3.setContentSize(cc.size(12, 12));
        this._peg_2_3.setTouchEnabled(false);

        ///// # _peg_2_4
        this._peg_2_4 = new ccui.ImageView();
        this._peg_2_4.setName("_peg_2_4");
        this._layoutPegs.addChild(this._peg_2_4);
        this._peg_2_4.setCascadeOpacityEnabled(true);
        this._peg_2_4.setCascadeColorEnabled(true);
        this._peg_2_4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_2_4, 0.768, 0.7198);
        let _peg_2_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_2_4);
        _peg_2_4LayoutComponent.setPositionPercentXEnabled(true);
        _peg_2_4LayoutComponent.setPositionPercentX(0.768);
        _peg_2_4LayoutComponent.setPositionPercentYEnabled(true);
        _peg_2_4LayoutComponent.setPositionPercentY(0.7198);
        this._peg_2_4.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_2_4.setUnifySizeEnabled(false);
        this._peg_2_4.ignoreContentAdaptWithSize(false);
        this._peg_2_4.setContentSize(cc.size(12, 12));
        this._peg_2_4.setTouchEnabled(false);

        ///// # _peg_3_0
        this._peg_3_0 = new ccui.ImageView();
        this._peg_3_0.setName("_peg_3_0");
        this._layoutPegs.addChild(this._peg_3_0);
        this._peg_3_0.setCascadeOpacityEnabled(true);
        this._peg_3_0.setCascadeColorEnabled(true);
        this._peg_3_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_3_0, 0.1349, 0.665);
        let _peg_3_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_3_0);
        _peg_3_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_3_0LayoutComponent.setPositionPercentX(0.1349);
        _peg_3_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_3_0LayoutComponent.setPositionPercentY(0.665);
        this._peg_3_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_3_0.setUnifySizeEnabled(false);
        this._peg_3_0.ignoreContentAdaptWithSize(false);
        this._peg_3_0.setContentSize(cc.size(12, 12));
        this._peg_3_0.setTouchEnabled(false);

        ///// # _peg_3_1
        this._peg_3_1 = new ccui.ImageView();
        this._peg_3_1.setName("_peg_3_1");
        this._layoutPegs.addChild(this._peg_3_1);
        this._peg_3_1.setCascadeOpacityEnabled(true);
        this._peg_3_1.setCascadeColorEnabled(true);
        this._peg_3_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_3_1, 0.3195, 0.6659);
        let _peg_3_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_3_1);
        _peg_3_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_3_1LayoutComponent.setPositionPercentX(0.3195);
        _peg_3_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_3_1LayoutComponent.setPositionPercentY(0.6659);
        this._peg_3_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_3_1.setUnifySizeEnabled(false);
        this._peg_3_1.ignoreContentAdaptWithSize(false);
        this._peg_3_1.setContentSize(cc.size(12, 12));
        this._peg_3_1.setTouchEnabled(false);

        ///// # _peg_3_2
        this._peg_3_2 = new ccui.ImageView();
        this._peg_3_2.setName("_peg_3_2");
        this._layoutPegs.addChild(this._peg_3_2);
        this._peg_3_2.setCascadeOpacityEnabled(true);
        this._peg_3_2.setCascadeColorEnabled(true);
        this._peg_3_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_3_2, 0.4994, 0.6659);
        let _peg_3_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_3_2);
        _peg_3_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_3_2LayoutComponent.setPositionPercentX(0.4994);
        _peg_3_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_3_2LayoutComponent.setPositionPercentY(0.6659);
        this._peg_3_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_3_2.setUnifySizeEnabled(false);
        this._peg_3_2.ignoreContentAdaptWithSize(false);
        this._peg_3_2.setContentSize(cc.size(12, 12));
        this._peg_3_2.setTouchEnabled(false);

        ///// # _peg_3_3
        this._peg_3_3 = new ccui.ImageView();
        this._peg_3_3.setName("_peg_3_3");
        this._layoutPegs.addChild(this._peg_3_3);
        this._peg_3_3.setCascadeOpacityEnabled(true);
        this._peg_3_3.setCascadeColorEnabled(true);
        this._peg_3_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_3_3, 0.6793, 0.6659);
        let _peg_3_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_3_3);
        _peg_3_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_3_3LayoutComponent.setPositionPercentX(0.6793);
        _peg_3_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_3_3LayoutComponent.setPositionPercentY(0.6659);
        this._peg_3_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_3_3.setUnifySizeEnabled(false);
        this._peg_3_3.ignoreContentAdaptWithSize(false);
        this._peg_3_3.setContentSize(cc.size(12, 12));
        this._peg_3_3.setTouchEnabled(false);

        ///// # _peg_3_4
        this._peg_3_4 = new ccui.ImageView();
        this._peg_3_4.setName("_peg_3_4");
        this._layoutPegs.addChild(this._peg_3_4);
        this._peg_3_4.setCascadeOpacityEnabled(true);
        this._peg_3_4.setCascadeColorEnabled(true);
        this._peg_3_4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_3_4, 0.859, 0.665);
        let _peg_3_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_3_4);
        _peg_3_4LayoutComponent.setPositionPercentXEnabled(true);
        _peg_3_4LayoutComponent.setPositionPercentX(0.859);
        _peg_3_4LayoutComponent.setPositionPercentYEnabled(true);
        _peg_3_4LayoutComponent.setPositionPercentY(0.665);
        this._peg_3_4.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_3_4.setUnifySizeEnabled(false);
        this._peg_3_4.ignoreContentAdaptWithSize(false);
        this._peg_3_4.setContentSize(cc.size(12, 12));
        this._peg_3_4.setTouchEnabled(false);

        ///// # _peg_4_0
        this._peg_4_0 = new ccui.ImageView();
        this._peg_4_0.setName("_peg_4_0");
        this._layoutPegs.addChild(this._peg_4_0);
        this._peg_4_0.setCascadeOpacityEnabled(true);
        this._peg_4_0.setCascadeColorEnabled(true);
        this._peg_4_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_4_0, 0.0438, 0.6119);
        let _peg_4_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_4_0);
        _peg_4_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_4_0LayoutComponent.setPositionPercentX(0.0438);
        _peg_4_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_4_0LayoutComponent.setPositionPercentY(0.6119);
        this._peg_4_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_4_0.setUnifySizeEnabled(false);
        this._peg_4_0.ignoreContentAdaptWithSize(false);
        this._peg_4_0.setContentSize(cc.size(12, 12));
        this._peg_4_0.setTouchEnabled(false);

        ///// # _peg_4_1
        this._peg_4_1 = new ccui.ImageView();
        this._peg_4_1.setName("_peg_4_1");
        this._layoutPegs.addChild(this._peg_4_1);
        this._peg_4_1.setCascadeOpacityEnabled(true);
        this._peg_4_1.setCascadeColorEnabled(true);
        this._peg_4_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_4_1, 0.2237, 0.6119);
        let _peg_4_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_4_1);
        _peg_4_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_4_1LayoutComponent.setPositionPercentX(0.2237);
        _peg_4_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_4_1LayoutComponent.setPositionPercentY(0.6119);
        this._peg_4_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_4_1.setUnifySizeEnabled(false);
        this._peg_4_1.ignoreContentAdaptWithSize(false);
        this._peg_4_1.setContentSize(cc.size(12, 12));
        this._peg_4_1.setTouchEnabled(false);

        ///// # _peg_4_2
        this._peg_4_2 = new ccui.ImageView();
        this._peg_4_2.setName("_peg_4_2");
        this._layoutPegs.addChild(this._peg_4_2);
        this._peg_4_2.setCascadeOpacityEnabled(true);
        this._peg_4_2.setCascadeColorEnabled(true);
        this._peg_4_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_4_2, 0.4036, 0.6119);
        let _peg_4_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_4_2);
        _peg_4_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_4_2LayoutComponent.setPositionPercentX(0.4036);
        _peg_4_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_4_2LayoutComponent.setPositionPercentY(0.6119);
        this._peg_4_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_4_2.setUnifySizeEnabled(false);
        this._peg_4_2.ignoreContentAdaptWithSize(false);
        this._peg_4_2.setContentSize(cc.size(12, 12));
        this._peg_4_2.setTouchEnabled(false);

        ///// # _peg_4_3
        this._peg_4_3 = new ccui.ImageView();
        this._peg_4_3.setName("_peg_4_3");
        this._layoutPegs.addChild(this._peg_4_3);
        this._peg_4_3.setCascadeOpacityEnabled(true);
        this._peg_4_3.setCascadeColorEnabled(true);
        this._peg_4_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_4_3, 0.5858, 0.6119);
        let _peg_4_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_4_3);
        _peg_4_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_4_3LayoutComponent.setPositionPercentX(0.5858);
        _peg_4_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_4_3LayoutComponent.setPositionPercentY(0.6119);
        this._peg_4_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_4_3.setUnifySizeEnabled(false);
        this._peg_4_3.ignoreContentAdaptWithSize(false);
        this._peg_4_3.setContentSize(cc.size(12, 12));
        this._peg_4_3.setTouchEnabled(false);

        ///// # _peg_4_4
        this._peg_4_4 = new ccui.ImageView();
        this._peg_4_4.setName("_peg_4_4");
        this._layoutPegs.addChild(this._peg_4_4);
        this._peg_4_4.setCascadeOpacityEnabled(true);
        this._peg_4_4.setCascadeColorEnabled(true);
        this._peg_4_4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_4_4, 0.768, 0.6119);
        let _peg_4_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_4_4);
        _peg_4_4LayoutComponent.setPositionPercentXEnabled(true);
        _peg_4_4LayoutComponent.setPositionPercentX(0.768);
        _peg_4_4LayoutComponent.setPositionPercentYEnabled(true);
        _peg_4_4LayoutComponent.setPositionPercentY(0.6119);
        this._peg_4_4.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_4_4.setUnifySizeEnabled(false);
        this._peg_4_4.ignoreContentAdaptWithSize(false);
        this._peg_4_4.setContentSize(cc.size(12, 12));
        this._peg_4_4.setTouchEnabled(false);

        ///// # _peg_5_0
        this._peg_5_0 = new ccui.ImageView();
        this._peg_5_0.setName("_peg_5_0");
        this._layoutPegs.addChild(this._peg_5_0);
        this._peg_5_0.setCascadeOpacityEnabled(true);
        this._peg_5_0.setCascadeColorEnabled(true);
        this._peg_5_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_5_0, 0.1348, 0.5613);
        let _peg_5_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_5_0);
        _peg_5_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_5_0LayoutComponent.setPositionPercentX(0.1348);
        _peg_5_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_5_0LayoutComponent.setPositionPercentY(0.5613);
        this._peg_5_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_5_0.setUnifySizeEnabled(false);
        this._peg_5_0.ignoreContentAdaptWithSize(false);
        this._peg_5_0.setContentSize(cc.size(12, 12));
        this._peg_5_0.setTouchEnabled(false);

        ///// # _peg_5_1
        this._peg_5_1 = new ccui.ImageView();
        this._peg_5_1.setName("_peg_5_1");
        this._layoutPegs.addChild(this._peg_5_1);
        this._peg_5_1.setCascadeOpacityEnabled(true);
        this._peg_5_1.setCascadeColorEnabled(true);
        this._peg_5_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_5_1, 0.3195, 0.5613);
        let _peg_5_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_5_1);
        _peg_5_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_5_1LayoutComponent.setPositionPercentX(0.3195);
        _peg_5_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_5_1LayoutComponent.setPositionPercentY(0.5613);
        this._peg_5_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_5_1.setUnifySizeEnabled(false);
        this._peg_5_1.ignoreContentAdaptWithSize(false);
        this._peg_5_1.setContentSize(cc.size(12, 12));
        this._peg_5_1.setTouchEnabled(false);

        ///// # _peg_5_2
        this._peg_5_2 = new ccui.ImageView();
        this._peg_5_2.setName("_peg_5_2");
        this._layoutPegs.addChild(this._peg_5_2);
        this._peg_5_2.setCascadeOpacityEnabled(true);
        this._peg_5_2.setCascadeColorEnabled(true);
        this._peg_5_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_5_2, 0.4994, 0.5613);
        let _peg_5_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_5_2);
        _peg_5_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_5_2LayoutComponent.setPositionPercentX(0.4994);
        _peg_5_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_5_2LayoutComponent.setPositionPercentY(0.5613);
        this._peg_5_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_5_2.setUnifySizeEnabled(false);
        this._peg_5_2.ignoreContentAdaptWithSize(false);
        this._peg_5_2.setContentSize(cc.size(12, 12));
        this._peg_5_2.setTouchEnabled(false);

        ///// # _peg_5_3
        this._peg_5_3 = new ccui.ImageView();
        this._peg_5_3.setName("_peg_5_3");
        this._layoutPegs.addChild(this._peg_5_3);
        this._peg_5_3.setCascadeOpacityEnabled(true);
        this._peg_5_3.setCascadeColorEnabled(true);
        this._peg_5_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_5_3, 0.6793, 0.5613);
        let _peg_5_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_5_3);
        _peg_5_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_5_3LayoutComponent.setPositionPercentX(0.6793);
        _peg_5_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_5_3LayoutComponent.setPositionPercentY(0.5613);
        this._peg_5_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_5_3.setUnifySizeEnabled(false);
        this._peg_5_3.ignoreContentAdaptWithSize(false);
        this._peg_5_3.setContentSize(cc.size(12, 12));
        this._peg_5_3.setTouchEnabled(false);

        ///// # _peg_5_4
        this._peg_5_4 = new ccui.ImageView();
        this._peg_5_4.setName("_peg_5_4");
        this._layoutPegs.addChild(this._peg_5_4);
        this._peg_5_4.setCascadeOpacityEnabled(true);
        this._peg_5_4.setCascadeColorEnabled(true);
        this._peg_5_4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_5_4, 0.8592, 0.5613);
        let _peg_5_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_5_4);
        _peg_5_4LayoutComponent.setPositionPercentXEnabled(true);
        _peg_5_4LayoutComponent.setPositionPercentX(0.8592);
        _peg_5_4LayoutComponent.setPositionPercentYEnabled(true);
        _peg_5_4LayoutComponent.setPositionPercentY(0.5613);
        this._peg_5_4.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_5_4.setUnifySizeEnabled(false);
        this._peg_5_4.ignoreContentAdaptWithSize(false);
        this._peg_5_4.setContentSize(cc.size(12, 12));
        this._peg_5_4.setTouchEnabled(false);

        ///// # _peg_6_0
        this._peg_6_0 = new ccui.ImageView();
        this._peg_6_0.setName("_peg_6_0");
        this._layoutPegs.addChild(this._peg_6_0);
        this._peg_6_0.setCascadeOpacityEnabled(true);
        this._peg_6_0.setCascadeColorEnabled(true);
        this._peg_6_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_6_0, 0.0438, 0.5062);
        let _peg_6_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_6_0);
        _peg_6_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_6_0LayoutComponent.setPositionPercentX(0.0438);
        _peg_6_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_6_0LayoutComponent.setPositionPercentY(0.5062);
        this._peg_6_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_6_0.setUnifySizeEnabled(false);
        this._peg_6_0.ignoreContentAdaptWithSize(false);
        this._peg_6_0.setContentSize(cc.size(12, 12));
        this._peg_6_0.setTouchEnabled(false);

        ///// # _peg_6_1
        this._peg_6_1 = new ccui.ImageView();
        this._peg_6_1.setName("_peg_6_1");
        this._layoutPegs.addChild(this._peg_6_1);
        this._peg_6_1.setCascadeOpacityEnabled(true);
        this._peg_6_1.setCascadeColorEnabled(true);
        this._peg_6_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_6_1, 0.4036, 0.5062);
        let _peg_6_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_6_1);
        _peg_6_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_6_1LayoutComponent.setPositionPercentX(0.4036);
        _peg_6_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_6_1LayoutComponent.setPositionPercentY(0.5062);
        this._peg_6_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_6_1.setUnifySizeEnabled(false);
        this._peg_6_1.ignoreContentAdaptWithSize(false);
        this._peg_6_1.setContentSize(cc.size(12, 12));
        this._peg_6_1.setTouchEnabled(false);

        ///// # _peg_6_2
        this._peg_6_2 = new ccui.ImageView();
        this._peg_6_2.setName("_peg_6_2");
        this._layoutPegs.addChild(this._peg_6_2);
        this._peg_6_2.setCascadeOpacityEnabled(true);
        this._peg_6_2.setCascadeColorEnabled(true);
        this._peg_6_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_6_2, 0.5858, 0.5062);
        let _peg_6_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_6_2);
        _peg_6_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_6_2LayoutComponent.setPositionPercentX(0.5858);
        _peg_6_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_6_2LayoutComponent.setPositionPercentY(0.5062);
        this._peg_6_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_6_2.setUnifySizeEnabled(false);
        this._peg_6_2.ignoreContentAdaptWithSize(false);
        this._peg_6_2.setContentSize(cc.size(12, 12));
        this._peg_6_2.setTouchEnabled(false);

        ///// # _peg_7_0
        this._peg_7_0 = new ccui.ImageView();
        this._peg_7_0.setName("_peg_7_0");
        this._layoutPegs.addChild(this._peg_7_0);
        this._peg_7_0.setCascadeOpacityEnabled(true);
        this._peg_7_0.setCascadeColorEnabled(true);
        this._peg_7_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_7_0, 0.1348, 0.4544);
        let _peg_7_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_7_0);
        _peg_7_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_7_0LayoutComponent.setPositionPercentX(0.1348);
        _peg_7_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_7_0LayoutComponent.setPositionPercentY(0.4544);
        this._peg_7_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_7_0.setUnifySizeEnabled(false);
        this._peg_7_0.ignoreContentAdaptWithSize(false);
        this._peg_7_0.setContentSize(cc.size(12, 12));
        this._peg_7_0.setTouchEnabled(false);

        ///// # _peg_7_1
        this._peg_7_1 = new ccui.ImageView();
        this._peg_7_1.setName("_peg_7_1");
        this._layoutPegs.addChild(this._peg_7_1);
        this._peg_7_1.setCascadeOpacityEnabled(true);
        this._peg_7_1.setCascadeColorEnabled(true);
        this._peg_7_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_7_1, 0.3195, 0.4544);
        let _peg_7_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_7_1);
        _peg_7_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_7_1LayoutComponent.setPositionPercentX(0.3195);
        _peg_7_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_7_1LayoutComponent.setPositionPercentY(0.4544);
        this._peg_7_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_7_1.setUnifySizeEnabled(false);
        this._peg_7_1.ignoreContentAdaptWithSize(false);
        this._peg_7_1.setContentSize(cc.size(12, 12));
        this._peg_7_1.setTouchEnabled(false);

        ///// # _peg_7_2
        this._peg_7_2 = new ccui.ImageView();
        this._peg_7_2.setName("_peg_7_2");
        this._layoutPegs.addChild(this._peg_7_2);
        this._peg_7_2.setCascadeOpacityEnabled(true);
        this._peg_7_2.setCascadeColorEnabled(true);
        this._peg_7_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_7_2, 0.6793, 0.4544);
        let _peg_7_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_7_2);
        _peg_7_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_7_2LayoutComponent.setPositionPercentX(0.6793);
        _peg_7_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_7_2LayoutComponent.setPositionPercentY(0.4544);
        this._peg_7_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_7_2.setUnifySizeEnabled(false);
        this._peg_7_2.ignoreContentAdaptWithSize(false);
        this._peg_7_2.setContentSize(cc.size(12, 12));
        this._peg_7_2.setTouchEnabled(false);

        ///// # _peg_7_3
        this._peg_7_3 = new ccui.ImageView();
        this._peg_7_3.setName("_peg_7_3");
        this._layoutPegs.addChild(this._peg_7_3);
        this._peg_7_3.setCascadeOpacityEnabled(true);
        this._peg_7_3.setCascadeColorEnabled(true);
        this._peg_7_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_7_3, 0.8592, 0.4544);
        let _peg_7_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_7_3);
        _peg_7_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_7_3LayoutComponent.setPositionPercentX(0.8592);
        _peg_7_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_7_3LayoutComponent.setPositionPercentY(0.4544);
        this._peg_7_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_7_3.setUnifySizeEnabled(false);
        this._peg_7_3.ignoreContentAdaptWithSize(false);
        this._peg_7_3.setContentSize(cc.size(12, 12));
        this._peg_7_3.setTouchEnabled(false);

        ///// # _peg_8_0
        this._peg_8_0 = new ccui.ImageView();
        this._peg_8_0.setName("_peg_8_0");
        this._layoutPegs.addChild(this._peg_8_0);
        this._peg_8_0.setCascadeOpacityEnabled(true);
        this._peg_8_0.setCascadeColorEnabled(true);
        this._peg_8_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_8_0, 0.0438, 0.4015);
        let _peg_8_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_8_0);
        _peg_8_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_8_0LayoutComponent.setPositionPercentX(0.0438);
        _peg_8_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_8_0LayoutComponent.setPositionPercentY(0.4015);
        this._peg_8_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_8_0.setUnifySizeEnabled(false);
        this._peg_8_0.ignoreContentAdaptWithSize(false);
        this._peg_8_0.setContentSize(cc.size(12, 12));
        this._peg_8_0.setTouchEnabled(false);

        ///// # _peg_8_1
        this._peg_8_1 = new ccui.ImageView();
        this._peg_8_1.setName("_peg_8_1");
        this._layoutPegs.addChild(this._peg_8_1);
        this._peg_8_1.setCascadeOpacityEnabled(true);
        this._peg_8_1.setCascadeColorEnabled(true);
        this._peg_8_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_8_1, 0.2237, 0.4015);
        let _peg_8_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_8_1);
        _peg_8_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_8_1LayoutComponent.setPositionPercentX(0.2237);
        _peg_8_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_8_1LayoutComponent.setPositionPercentY(0.4015);
        this._peg_8_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_8_1.setUnifySizeEnabled(false);
        this._peg_8_1.ignoreContentAdaptWithSize(false);
        this._peg_8_1.setContentSize(cc.size(12, 12));
        this._peg_8_1.setTouchEnabled(false);

        ///// # _peg_8_2
        this._peg_8_2 = new ccui.ImageView();
        this._peg_8_2.setName("_peg_8_2");
        this._layoutPegs.addChild(this._peg_8_2);
        this._peg_8_2.setCascadeOpacityEnabled(true);
        this._peg_8_2.setCascadeColorEnabled(true);
        this._peg_8_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_8_2, 0.768, 0.4015);
        let _peg_8_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_8_2);
        _peg_8_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_8_2LayoutComponent.setPositionPercentX(0.768);
        _peg_8_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_8_2LayoutComponent.setPositionPercentY(0.4015);
        this._peg_8_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_8_2.setUnifySizeEnabled(false);
        this._peg_8_2.ignoreContentAdaptWithSize(false);
        this._peg_8_2.setContentSize(cc.size(12, 12));
        this._peg_8_2.setTouchEnabled(false);

        ///// # _peg_9_0
        this._peg_9_0 = new ccui.ImageView();
        this._peg_9_0.setName("_peg_9_0");
        this._layoutPegs.addChild(this._peg_9_0);
        this._peg_9_0.setCascadeOpacityEnabled(true);
        this._peg_9_0.setCascadeColorEnabled(true);
        this._peg_9_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_9_0, 0.0438, 0.2947);
        let _peg_9_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_9_0);
        _peg_9_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_9_0LayoutComponent.setPositionPercentX(0.0438);
        _peg_9_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_9_0LayoutComponent.setPositionPercentY(0.2947);
        this._peg_9_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_9_0.setUnifySizeEnabled(false);
        this._peg_9_0.ignoreContentAdaptWithSize(false);
        this._peg_9_0.setContentSize(cc.size(12, 12));
        this._peg_9_0.setTouchEnabled(false);

        ///// # _peg_9_1
        this._peg_9_1 = new ccui.ImageView();
        this._peg_9_1.setName("_peg_9_1");
        this._layoutPegs.addChild(this._peg_9_1);
        this._peg_9_1.setCascadeOpacityEnabled(true);
        this._peg_9_1.setCascadeColorEnabled(true);
        this._peg_9_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_9_1, 0.2237, 0.2947);
        let _peg_9_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_9_1);
        _peg_9_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_9_1LayoutComponent.setPositionPercentX(0.2237);
        _peg_9_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_9_1LayoutComponent.setPositionPercentY(0.2947);
        this._peg_9_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_9_1.setUnifySizeEnabled(false);
        this._peg_9_1.ignoreContentAdaptWithSize(false);
        this._peg_9_1.setContentSize(cc.size(12, 12));
        this._peg_9_1.setTouchEnabled(false);

        ///// # _peg_9_2
        this._peg_9_2 = new ccui.ImageView();
        this._peg_9_2.setName("_peg_9_2");
        this._layoutPegs.addChild(this._peg_9_2);
        this._peg_9_2.setCascadeOpacityEnabled(true);
        this._peg_9_2.setCascadeColorEnabled(true);
        this._peg_9_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_9_2, 0.768, 0.2947);
        let _peg_9_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_9_2);
        _peg_9_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_9_2LayoutComponent.setPositionPercentX(0.768);
        _peg_9_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_9_2LayoutComponent.setPositionPercentY(0.2947);
        this._peg_9_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_9_2.setUnifySizeEnabled(false);
        this._peg_9_2.ignoreContentAdaptWithSize(false);
        this._peg_9_2.setContentSize(cc.size(12, 12));
        this._peg_9_2.setTouchEnabled(false);

        ///// # _peg_10_0
        this._peg_10_0 = new ccui.ImageView();
        this._peg_10_0.setName("_peg_10_0");
        this._layoutPegs.addChild(this._peg_10_0);
        this._peg_10_0.setCascadeOpacityEnabled(true);
        this._peg_10_0.setCascadeColorEnabled(true);
        this._peg_10_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_10_0, 0.1348, 0.2407);
        let _peg_10_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_10_0);
        _peg_10_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_10_0LayoutComponent.setPositionPercentX(0.1348);
        _peg_10_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_10_0LayoutComponent.setPositionPercentY(0.2407);
        this._peg_10_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_10_0.setUnifySizeEnabled(false);
        this._peg_10_0.ignoreContentAdaptWithSize(false);
        this._peg_10_0.setContentSize(cc.size(12, 12));
        this._peg_10_0.setTouchEnabled(false);

        ///// # _peg_10_1
        this._peg_10_1 = new ccui.ImageView();
        this._peg_10_1.setName("_peg_10_1");
        this._layoutPegs.addChild(this._peg_10_1);
        this._peg_10_1.setCascadeOpacityEnabled(true);
        this._peg_10_1.setCascadeColorEnabled(true);
        this._peg_10_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_10_1, 0.3195, 0.2407);
        let _peg_10_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_10_1);
        _peg_10_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_10_1LayoutComponent.setPositionPercentX(0.3195);
        _peg_10_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_10_1LayoutComponent.setPositionPercentY(0.2407);
        this._peg_10_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_10_1.setUnifySizeEnabled(false);
        this._peg_10_1.ignoreContentAdaptWithSize(false);
        this._peg_10_1.setContentSize(cc.size(12, 12));
        this._peg_10_1.setTouchEnabled(false);

        ///// # _peg_10_2
        this._peg_10_2 = new ccui.ImageView();
        this._peg_10_2.setName("_peg_10_2");
        this._layoutPegs.addChild(this._peg_10_2);
        this._peg_10_2.setCascadeOpacityEnabled(true);
        this._peg_10_2.setCascadeColorEnabled(true);
        this._peg_10_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_10_2, 0.6793, 0.2407);
        let _peg_10_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_10_2);
        _peg_10_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_10_2LayoutComponent.setPositionPercentX(0.6793);
        _peg_10_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_10_2LayoutComponent.setPositionPercentY(0.2407);
        this._peg_10_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_10_2.setUnifySizeEnabled(false);
        this._peg_10_2.ignoreContentAdaptWithSize(false);
        this._peg_10_2.setContentSize(cc.size(12, 12));
        this._peg_10_2.setTouchEnabled(false);

        ///// # _peg_10_3
        this._peg_10_3 = new ccui.ImageView();
        this._peg_10_3.setName("_peg_10_3");
        this._layoutPegs.addChild(this._peg_10_3);
        this._peg_10_3.setCascadeOpacityEnabled(true);
        this._peg_10_3.setCascadeColorEnabled(true);
        this._peg_10_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_10_3, 0.8592, 0.2407);
        let _peg_10_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_10_3);
        _peg_10_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_10_3LayoutComponent.setPositionPercentX(0.8592);
        _peg_10_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_10_3LayoutComponent.setPositionPercentY(0.2407);
        this._peg_10_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_10_3.setUnifySizeEnabled(false);
        this._peg_10_3.ignoreContentAdaptWithSize(false);
        this._peg_10_3.setContentSize(cc.size(12, 12));
        this._peg_10_3.setTouchEnabled(false);

        ///// # _peg_11_0
        this._peg_11_0 = new ccui.ImageView();
        this._peg_11_0.setName("_peg_11_0");
        this._layoutPegs.addChild(this._peg_11_0);
        this._peg_11_0.setCascadeOpacityEnabled(true);
        this._peg_11_0.setCascadeColorEnabled(true);
        this._peg_11_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_11_0, 0.0438, 0.189);
        let _peg_11_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_11_0);
        _peg_11_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_11_0LayoutComponent.setPositionPercentX(0.0438);
        _peg_11_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_11_0LayoutComponent.setPositionPercentY(0.189);
        this._peg_11_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_11_0.setUnifySizeEnabled(false);
        this._peg_11_0.ignoreContentAdaptWithSize(false);
        this._peg_11_0.setContentSize(cc.size(12, 12));
        this._peg_11_0.setTouchEnabled(false);

        ///// # _peg_11_1
        this._peg_11_1 = new ccui.ImageView();
        this._peg_11_1.setName("_peg_11_1");
        this._layoutPegs.addChild(this._peg_11_1);
        this._peg_11_1.setCascadeOpacityEnabled(true);
        this._peg_11_1.setCascadeColorEnabled(true);
        this._peg_11_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_11_1, 0.2237, 0.189);
        let _peg_11_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_11_1);
        _peg_11_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_11_1LayoutComponent.setPositionPercentX(0.2237);
        _peg_11_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_11_1LayoutComponent.setPositionPercentY(0.189);
        this._peg_11_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_11_1.setUnifySizeEnabled(false);
        this._peg_11_1.ignoreContentAdaptWithSize(false);
        this._peg_11_1.setContentSize(cc.size(12, 12));
        this._peg_11_1.setTouchEnabled(false);

        ///// # _peg_11_2
        this._peg_11_2 = new ccui.ImageView();
        this._peg_11_2.setName("_peg_11_2");
        this._layoutPegs.addChild(this._peg_11_2);
        this._peg_11_2.setCascadeOpacityEnabled(true);
        this._peg_11_2.setCascadeColorEnabled(true);
        this._peg_11_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_11_2, 0.4036, 0.189);
        let _peg_11_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_11_2);
        _peg_11_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_11_2LayoutComponent.setPositionPercentX(0.4036);
        _peg_11_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_11_2LayoutComponent.setPositionPercentY(0.189);
        this._peg_11_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_11_2.setUnifySizeEnabled(false);
        this._peg_11_2.ignoreContentAdaptWithSize(false);
        this._peg_11_2.setContentSize(cc.size(12, 12));
        this._peg_11_2.setTouchEnabled(false);

        ///// # _peg_11_3
        this._peg_11_3 = new ccui.ImageView();
        this._peg_11_3.setName("_peg_11_3");
        this._layoutPegs.addChild(this._peg_11_3);
        this._peg_11_3.setCascadeOpacityEnabled(true);
        this._peg_11_3.setCascadeColorEnabled(true);
        this._peg_11_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_11_3, 0.5858, 0.189);
        let _peg_11_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_11_3);
        _peg_11_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_11_3LayoutComponent.setPositionPercentX(0.5858);
        _peg_11_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_11_3LayoutComponent.setPositionPercentY(0.189);
        this._peg_11_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_11_3.setUnifySizeEnabled(false);
        this._peg_11_3.ignoreContentAdaptWithSize(false);
        this._peg_11_3.setContentSize(cc.size(12, 12));
        this._peg_11_3.setTouchEnabled(false);

        ///// # _peg_11_4
        this._peg_11_4 = new ccui.ImageView();
        this._peg_11_4.setName("_peg_11_4");
        this._layoutPegs.addChild(this._peg_11_4);
        this._peg_11_4.setCascadeOpacityEnabled(true);
        this._peg_11_4.setCascadeColorEnabled(true);
        this._peg_11_4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_11_4, 0.768, 0.189);
        let _peg_11_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_11_4);
        _peg_11_4LayoutComponent.setPositionPercentXEnabled(true);
        _peg_11_4LayoutComponent.setPositionPercentX(0.768);
        _peg_11_4LayoutComponent.setPositionPercentYEnabled(true);
        _peg_11_4LayoutComponent.setPositionPercentY(0.189);
        this._peg_11_4.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_11_4.setUnifySizeEnabled(false);
        this._peg_11_4.ignoreContentAdaptWithSize(false);
        this._peg_11_4.setContentSize(cc.size(12, 12));
        this._peg_11_4.setTouchEnabled(false);

        ///// # _peg_12_0
        this._peg_12_0 = new ccui.ImageView();
        this._peg_12_0.setName("_peg_12_0");
        this._layoutPegs.addChild(this._peg_12_0);
        this._peg_12_0.setCascadeOpacityEnabled(true);
        this._peg_12_0.setCascadeColorEnabled(true);
        this._peg_12_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_12_0, 0.1348, 0.1338);
        let _peg_12_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_12_0);
        _peg_12_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_12_0LayoutComponent.setPositionPercentX(0.1348);
        _peg_12_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_12_0LayoutComponent.setPositionPercentY(0.1338);
        this._peg_12_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_12_0.setUnifySizeEnabled(false);
        this._peg_12_0.ignoreContentAdaptWithSize(false);
        this._peg_12_0.setContentSize(cc.size(12, 12));
        this._peg_12_0.setTouchEnabled(false);

        ///// # _peg_12_1
        this._peg_12_1 = new ccui.ImageView();
        this._peg_12_1.setName("_peg_12_1");
        this._layoutPegs.addChild(this._peg_12_1);
        this._peg_12_1.setCascadeOpacityEnabled(true);
        this._peg_12_1.setCascadeColorEnabled(true);
        this._peg_12_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_12_1, 0.3195, 0.1338);
        let _peg_12_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_12_1);
        _peg_12_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_12_1LayoutComponent.setPositionPercentX(0.3195);
        _peg_12_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_12_1LayoutComponent.setPositionPercentY(0.1338);
        this._peg_12_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_12_1.setUnifySizeEnabled(false);
        this._peg_12_1.ignoreContentAdaptWithSize(false);
        this._peg_12_1.setContentSize(cc.size(12, 12));
        this._peg_12_1.setTouchEnabled(false);

        ///// # _peg_12_2
        this._peg_12_2 = new ccui.ImageView();
        this._peg_12_2.setName("_peg_12_2");
        this._layoutPegs.addChild(this._peg_12_2);
        this._peg_12_2.setCascadeOpacityEnabled(true);
        this._peg_12_2.setCascadeColorEnabled(true);
        this._peg_12_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_12_2, 0.4994, 0.1338);
        let _peg_12_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_12_2);
        _peg_12_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_12_2LayoutComponent.setPositionPercentX(0.4994);
        _peg_12_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_12_2LayoutComponent.setPositionPercentY(0.1338);
        this._peg_12_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_12_2.setUnifySizeEnabled(false);
        this._peg_12_2.ignoreContentAdaptWithSize(false);
        this._peg_12_2.setContentSize(cc.size(12, 12));
        this._peg_12_2.setTouchEnabled(false);

        ///// # _peg_12_3
        this._peg_12_3 = new ccui.ImageView();
        this._peg_12_3.setName("_peg_12_3");
        this._layoutPegs.addChild(this._peg_12_3);
        this._peg_12_3.setCascadeOpacityEnabled(true);
        this._peg_12_3.setCascadeColorEnabled(true);
        this._peg_12_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_12_3, 0.6793, 0.1338);
        let _peg_12_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_12_3);
        _peg_12_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_12_3LayoutComponent.setPositionPercentX(0.6793);
        _peg_12_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_12_3LayoutComponent.setPositionPercentY(0.1338);
        this._peg_12_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_12_3.setUnifySizeEnabled(false);
        this._peg_12_3.ignoreContentAdaptWithSize(false);
        this._peg_12_3.setContentSize(cc.size(12, 12));
        this._peg_12_3.setTouchEnabled(false);

        ///// # _peg_13_0
        this._peg_13_0 = new ccui.ImageView();
        this._peg_13_0.setName("_peg_13_0");
        this._layoutPegs.addChild(this._peg_13_0);
        this._peg_13_0.setCascadeOpacityEnabled(true);
        this._peg_13_0.setCascadeColorEnabled(true);
        this._peg_13_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_0, 0.4458, 0.2947);
        let _peg_13_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_0);
        _peg_13_0LayoutComponent.setPositionPercentXEnabled(true);
        _peg_13_0LayoutComponent.setPositionPercentX(0.4458);
        _peg_13_0LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_0LayoutComponent.setPositionPercentY(0.2947);
        this._peg_13_0.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_0.setUnifySizeEnabled(false);
        this._peg_13_0.ignoreContentAdaptWithSize(false);
        this._peg_13_0.setContentSize(cc.size(12, 12));
        this._peg_13_0.setTouchEnabled(false);

        ///// # _peg_13_1
        this._peg_13_1 = new ccui.ImageView();
        this._peg_13_1.setName("_peg_13_1");
        this._layoutPegs.addChild(this._peg_13_1);
        this._peg_13_1.setCascadeOpacityEnabled(true);
        this._peg_13_1.setCascadeColorEnabled(true);
        this._peg_13_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_1, 0.5474, 0.2947);
        let _peg_13_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_1);
        _peg_13_1LayoutComponent.setPositionPercentXEnabled(true);
        _peg_13_1LayoutComponent.setPositionPercentX(0.5474);
        _peg_13_1LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_1LayoutComponent.setPositionPercentY(0.2947);
        this._peg_13_1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_1.setUnifySizeEnabled(false);
        this._peg_13_1.ignoreContentAdaptWithSize(false);
        this._peg_13_1.setContentSize(cc.size(12, 12));
        this._peg_13_1.setTouchEnabled(false);

        ///// # _peg_13_2
        this._peg_13_2 = new ccui.ImageView();
        this._peg_13_2.setName("_peg_13_2");
        this._layoutPegs.addChild(this._peg_13_2);
        this._peg_13_2.setCascadeOpacityEnabled(true);
        this._peg_13_2.setCascadeColorEnabled(true);
        this._peg_13_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_2, 0.5858, 0.3107);
        let _peg_13_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_2);
        _peg_13_2LayoutComponent.setPositionPercentXEnabled(true);
        _peg_13_2LayoutComponent.setPositionPercentX(0.5858);
        _peg_13_2LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_2LayoutComponent.setPositionPercentY(0.3107);
        this._peg_13_2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_2.setUnifySizeEnabled(false);
        this._peg_13_2.ignoreContentAdaptWithSize(false);
        this._peg_13_2.setContentSize(cc.size(12, 12));
        this._peg_13_2.setTouchEnabled(false);

        ///// # _peg_13_3
        this._peg_13_3 = new ccui.ImageView();
        this._peg_13_3.setName("_peg_13_3");
        this._layoutPegs.addChild(this._peg_13_3);
        this._peg_13_3.setCascadeOpacityEnabled(true);
        this._peg_13_3.setCascadeColorEnabled(true);
        this._peg_13_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_3, 0.4994, 0.2947);
        let _peg_13_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_3);
        _peg_13_3LayoutComponent.setPositionPercentXEnabled(true);
        _peg_13_3LayoutComponent.setPositionPercentX(0.4994);
        _peg_13_3LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_3LayoutComponent.setPositionPercentY(0.2947);
        this._peg_13_3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_3.setUnifySizeEnabled(false);
        this._peg_13_3.ignoreContentAdaptWithSize(false);
        this._peg_13_3.setContentSize(cc.size(12, 12));
        this._peg_13_3.setTouchEnabled(false);

        ///// # _peg_13_4
        this._peg_13_4 = new ccui.ImageView();
        this._peg_13_4.setName("_peg_13_4");
        this._layoutPegs.addChild(this._peg_13_4);
        this._peg_13_4.setCascadeOpacityEnabled(true);
        this._peg_13_4.setCascadeColorEnabled(true);
        this._peg_13_4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_4, 0.5858, 0.3464);
        let _peg_13_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_4);
        _peg_13_4LayoutComponent.setPositionPercentXEnabled(true);
        _peg_13_4LayoutComponent.setPositionPercentX(0.5858);
        _peg_13_4LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_4LayoutComponent.setPositionPercentY(0.3464);
        this._peg_13_4.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_4.setUnifySizeEnabled(false);
        this._peg_13_4.ignoreContentAdaptWithSize(false);
        this._peg_13_4.setContentSize(cc.size(12, 12));
        this._peg_13_4.setTouchEnabled(false);

        ///// # _peg_13_5
        this._peg_13_5 = new ccui.ImageView();
        this._peg_13_5.setName("_peg_13_5");
        this._layoutPegs.addChild(this._peg_13_5);
        this._peg_13_5.setCascadeOpacityEnabled(true);
        this._peg_13_5.setCascadeColorEnabled(true);
        this._peg_13_5.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_5, 0.4036, 0.3464);
        let _peg_13_5LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_5);
        _peg_13_5LayoutComponent.setPositionPercentXEnabled(true);
        _peg_13_5LayoutComponent.setPositionPercentX(0.4036);
        _peg_13_5LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_5LayoutComponent.setPositionPercentY(0.3464);
        this._peg_13_5.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_5.setUnifySizeEnabled(false);
        this._peg_13_5.ignoreContentAdaptWithSize(false);
        this._peg_13_5.setContentSize(cc.size(12, 12));
        this._peg_13_5.setTouchEnabled(false);

        ///// # _peg_13_6
        this._peg_13_6 = new ccui.ImageView();
        this._peg_13_6.setName("_peg_13_6");
        this._layoutPegs.addChild(this._peg_13_6);
        this._peg_13_6.setCascadeOpacityEnabled(true);
        this._peg_13_6.setCascadeColorEnabled(true);
        this._peg_13_6.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_6, 0.4036, 0.3107);
        let _peg_13_6LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_6);
        _peg_13_6LayoutComponent.setPositionPercentXEnabled(true);
        _peg_13_6LayoutComponent.setPositionPercentX(0.4036);
        _peg_13_6LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_6LayoutComponent.setPositionPercentY(0.3107);
        this._peg_13_6.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_6.setUnifySizeEnabled(false);
        this._peg_13_6.ignoreContentAdaptWithSize(false);
        this._peg_13_6.setContentSize(cc.size(12, 12));
        this._peg_13_6.setTouchEnabled(false);

        ///// # _peg_13_7
        this._peg_13_7 = new ccui.ImageView();
        this._peg_13_7.setName("_peg_13_7");
        this._layoutPegs.addChild(this._peg_13_7);
        this._peg_13_7.setCascadeOpacityEnabled(true);
        this._peg_13_7.setCascadeColorEnabled(true);
        this._peg_13_7.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_7, 0.4036, 0.3822);
        let _peg_13_7LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_7);
        _peg_13_7LayoutComponent.setPositionPercentXEnabled(true);
        _peg_13_7LayoutComponent.setPositionPercentX(0.4036);
        _peg_13_7LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_7LayoutComponent.setPositionPercentY(0.3822);
        this._peg_13_7.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_7.setUnifySizeEnabled(false);
        this._peg_13_7.ignoreContentAdaptWithSize(false);
        this._peg_13_7.setContentSize(cc.size(12, 12));
        this._peg_13_7.setTouchEnabled(false);

        ///// # _peg_13_8
        this._peg_13_8 = new ccui.ImageView();
        this._peg_13_8.setName("_peg_13_8");
        this._layoutPegs.addChild(this._peg_13_8);
        this._peg_13_8.setCascadeOpacityEnabled(true);
        this._peg_13_8.setCascadeColorEnabled(true);
        this._peg_13_8.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_8, 0.5858, 0.3822);
        let _peg_13_8LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_8);
        _peg_13_8LayoutComponent.setPositionPercentXEnabled(true);
        _peg_13_8LayoutComponent.setPositionPercentX(0.5858);
        _peg_13_8LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_8LayoutComponent.setPositionPercentY(0.3822);
        this._peg_13_8.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_8.setUnifySizeEnabled(false);
        this._peg_13_8.ignoreContentAdaptWithSize(false);
        this._peg_13_8.setContentSize(cc.size(12, 12));
        this._peg_13_8.setTouchEnabled(false);

        ///// # _peg_13_9
        this._peg_13_9 = new ccui.ImageView();
        this._peg_13_9.setName("_peg_13_9");
        this._layoutPegs.addChild(this._peg_13_9);
        this._peg_13_9.setCascadeOpacityEnabled(true);
        this._peg_13_9.setCascadeColorEnabled(true);
        this._peg_13_9.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_9, 0.4459, 0.4015);
        let _peg_13_9LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_9);
        _peg_13_9LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_9LayoutComponent.setPositionPercentY(0.4015);
        this._peg_13_9.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_9.setUnifySizeEnabled(false);
        this._peg_13_9.ignoreContentAdaptWithSize(false);
        this._peg_13_9.setContentSize(cc.size(12, 12));
        this._peg_13_9.setTouchEnabled(false);

        ///// # _peg_13_10
        this._peg_13_10 = new ccui.ImageView();
        this._peg_13_10.setName("_peg_13_10");
        this._layoutPegs.addChild(this._peg_13_10);
        this._peg_13_10.setCascadeOpacityEnabled(true);
        this._peg_13_10.setCascadeColorEnabled(true);
        this._peg_13_10.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._peg_13_10, 0.5474, 0.4015);
        let _peg_13_10LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._peg_13_10);
        _peg_13_10LayoutComponent.setPositionPercentYEnabled(true);
        _peg_13_10LayoutComponent.setPositionPercentY(0.4015);
        this._peg_13_10.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._peg_13_10.setUnifySizeEnabled(false);
        this._peg_13_10.ignoreContentAdaptWithSize(false);
        this._peg_13_10.setContentSize(cc.size(12, 12));
        this._peg_13_10.setTouchEnabled(false);

        ///// # _layoutRewards
        this._layoutRewards = new ccui.Layout();
        this._layoutRewards.setName("_layoutRewards");
        this._layoutPhysic.addChild(this._layoutRewards);
        this._layoutRewards.setCascadeOpacityEnabled(true);
        this._layoutRewards.setCascadeColorEnabled(true);
        let _layoutRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRewards);
        _layoutRewardsLayoutComponent.setPercentWidthEnabled(true);
        _layoutRewardsLayoutComponent.setPercentWidth(1);
        _layoutRewardsLayoutComponent.setPercentHeightEnabled(true);
        _layoutRewardsLayoutComponent.setPercentHeight(1);
        this._layoutRewards.setTouchEnabled(false);
        this._layoutRewards.setUnifySizeEnabled(false);
        this._layoutRewards.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutRewards, 1, 1);

        ///// # _reward1
        this._reward1 = new ccui.ImageView();
        this._reward1.setName("_reward1");
        this._layoutRewards.addChild(this._reward1);
        this._reward1.setCascadeOpacityEnabled(true);
        this._reward1.setCascadeColorEnabled(true);
        this._reward1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._reward1, 0.4965, 0.6138);
        let _reward1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._reward1);
        _reward1LayoutComponent.setPositionPercentXEnabled(true);
        _reward1LayoutComponent.setPositionPercentX(0.4965);
        _reward1LayoutComponent.setPositionPercentYEnabled(true);
        _reward1LayoutComponent.setPositionPercentY(0.6138);
        this._reward1.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._reward1.setUnifySizeEnabled(false);
        this._reward1.ignoreContentAdaptWithSize(false);
        this._reward1.setContentSize(cc.size(50, 50));
        this._reward1.setTouchEnabled(false);

        ///// # _reward2
        this._reward2 = new ccui.ImageView();
        this._reward2.setName("_reward2");
        this._layoutRewards.addChild(this._reward2);
        this._reward2.setCascadeOpacityEnabled(true);
        this._reward2.setCascadeColorEnabled(true);
        this._reward2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._reward2, 0.2239, 0.5197);
        let _reward2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._reward2);
        _reward2LayoutComponent.setPositionPercentXEnabled(true);
        _reward2LayoutComponent.setPositionPercentX(0.2239);
        _reward2LayoutComponent.setPositionPercentYEnabled(true);
        _reward2LayoutComponent.setPositionPercentY(0.5197);
        this._reward2.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._reward2.setUnifySizeEnabled(false);
        this._reward2.ignoreContentAdaptWithSize(false);
        this._reward2.setContentSize(cc.size(50, 50));
        this._reward2.setTouchEnabled(false);

        ///// # _reward3
        this._reward3 = new ccui.ImageView();
        this._reward3.setName("_reward3");
        this._layoutRewards.addChild(this._reward3);
        this._reward3.setCascadeOpacityEnabled(true);
        this._reward3.setCascadeColorEnabled(true);
        this._reward3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._reward3, 0.7671, 0.5195);
        let _reward3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._reward3);
        _reward3LayoutComponent.setPositionPercentXEnabled(true);
        _reward3LayoutComponent.setPositionPercentX(0.7671);
        _reward3LayoutComponent.setPositionPercentYEnabled(true);
        _reward3LayoutComponent.setPositionPercentY(0.5195);
        this._reward3.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._reward3.setUnifySizeEnabled(false);
        this._reward3.ignoreContentAdaptWithSize(false);
        this._reward3.setContentSize(cc.size(50, 50));
        this._reward3.setTouchEnabled(false);

        ///// # _reward4
        this._reward4 = new ccui.ImageView();
        this._reward4.setName("_reward4");
        this._layoutRewards.addChild(this._reward4);
        this._reward4.setCascadeOpacityEnabled(true);
        this._reward4.setCascadeColorEnabled(true);
        this._reward4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._reward4, 0.1357, 0.3613);
        let _reward4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._reward4);
        _reward4LayoutComponent.setPositionPercentXEnabled(true);
        _reward4LayoutComponent.setPositionPercentX(0.1357);
        _reward4LayoutComponent.setPositionPercentYEnabled(true);
        _reward4LayoutComponent.setPositionPercentY(0.3613);
        this._reward4.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._reward4.setUnifySizeEnabled(false);
        this._reward4.ignoreContentAdaptWithSize(false);
        this._reward4.setContentSize(cc.size(50, 50));
        this._reward4.setTouchEnabled(false);

        ///// # _reward5
        this._reward5 = new ccui.ImageView();
        this._reward5.setName("_reward5");
        this._layoutRewards.addChild(this._reward5);
        this._reward5.setCascadeOpacityEnabled(true);
        this._reward5.setCascadeColorEnabled(true);
        this._reward5.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._reward5, 0.5, 0.3463);
        let _reward5LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._reward5);
        _reward5LayoutComponent.setPositionPercentXEnabled(true);
        _reward5LayoutComponent.setPositionPercentX(0.5);
        _reward5LayoutComponent.setPositionPercentYEnabled(true);
        _reward5LayoutComponent.setPositionPercentY(0.3463);
        this._reward5.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._reward5.setUnifySizeEnabled(false);
        this._reward5.ignoreContentAdaptWithSize(false);
        this._reward5.setContentSize(cc.size(50, 50));
        this._reward5.setTouchEnabled(false);

        ///// # _reward6
        this._reward6 = new ccui.ImageView();
        this._reward6.setName("_reward6");
        this._layoutRewards.addChild(this._reward6);
        this._reward6.setCascadeOpacityEnabled(true);
        this._reward6.setCascadeColorEnabled(true);
        this._reward6.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._reward6, 0.8285, 0.3612);
        let _reward6LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._reward6);
        _reward6LayoutComponent.setPositionPercentXEnabled(true);
        _reward6LayoutComponent.setPositionPercentX(0.8285);
        _reward6LayoutComponent.setPositionPercentYEnabled(true);
        _reward6LayoutComponent.setPositionPercentY(0.3612);
        this._reward6.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._reward6.setUnifySizeEnabled(false);
        this._reward6.ignoreContentAdaptWithSize(false);
        this._reward6.setContentSize(cc.size(50, 50));
        this._reward6.setTouchEnabled(false);

        ///// # _reward7
        this._reward7 = new ccui.ImageView();
        this._reward7.setName("_reward7");
        this._layoutRewards.addChild(this._reward7);
        this._reward7.setCascadeOpacityEnabled(true);
        this._reward7.setCascadeColorEnabled(true);
        this._reward7.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._reward7, 0.0775, 0.05);
        let _reward7LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._reward7);
        _reward7LayoutComponent.setPositionPercentXEnabled(true);
        _reward7LayoutComponent.setPositionPercentX(0.0775);
        _reward7LayoutComponent.setPositionPercentYEnabled(true);
        _reward7LayoutComponent.setPositionPercentY(0.05);
        this._reward7.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._reward7.setUnifySizeEnabled(false);
        this._reward7.ignoreContentAdaptWithSize(false);
        this._reward7.setContentSize(cc.size(50, 50));
        this._reward7.setTouchEnabled(false);

        ///// # _reward8
        this._reward8 = new ccui.ImageView();
        this._reward8.setName("_reward8");
        this._layoutRewards.addChild(this._reward8);
        this._reward8.setCascadeOpacityEnabled(true);
        this._reward8.setCascadeColorEnabled(true);
        this._reward8.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._reward8, 0.2325, 0.05);
        let _reward8LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._reward8);
        _reward8LayoutComponent.setPositionPercentXEnabled(true);
        _reward8LayoutComponent.setPositionPercentX(0.2325);
        _reward8LayoutComponent.setPositionPercentYEnabled(true);
        _reward8LayoutComponent.setPositionPercentY(0.05);
        this._reward8.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._reward8.setUnifySizeEnabled(false);
        this._reward8.ignoreContentAdaptWithSize(false);
        this._reward8.setContentSize(cc.size(50, 50));
        this._reward8.setTouchEnabled(false);

        ///// # _reward9
        this._reward9 = new ccui.ImageView();
        this._reward9.setName("_reward9");
        this._layoutRewards.addChild(this._reward9);
        this._reward9.setCascadeOpacityEnabled(true);
        this._reward9.setCascadeColorEnabled(true);
        this._reward9.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._reward9, 0.3875, 0.05);
        let _reward9LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._reward9);
        _reward9LayoutComponent.setPositionPercentXEnabled(true);
        _reward9LayoutComponent.setPositionPercentX(0.3875);
        _reward9LayoutComponent.setPositionPercentYEnabled(true);
        _reward9LayoutComponent.setPositionPercentY(0.05);
        this._reward9.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._reward9.setUnifySizeEnabled(false);
        this._reward9.ignoreContentAdaptWithSize(false);
        this._reward9.setContentSize(cc.size(50, 50));
        this._reward9.setTouchEnabled(false);

        ///// # _reward10
        this._reward10 = new ccui.ImageView();
        this._reward10.setName("_reward10");
        this._layoutRewards.addChild(this._reward10);
        this._reward10.setCascadeOpacityEnabled(true);
        this._reward10.setCascadeColorEnabled(true);
        this._reward10.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._reward10, 0.5425, 0.05);
        let _reward10LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._reward10);
        _reward10LayoutComponent.setPositionPercentXEnabled(true);
        _reward10LayoutComponent.setPositionPercentX(0.5425);
        _reward10LayoutComponent.setPositionPercentYEnabled(true);
        _reward10LayoutComponent.setPositionPercentY(0.05);
        this._reward10.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._reward10.setUnifySizeEnabled(false);
        this._reward10.ignoreContentAdaptWithSize(false);
        this._reward10.setContentSize(cc.size(50, 50));
        this._reward10.setTouchEnabled(false);

        ///// # _reward11
        this._reward11 = new ccui.ImageView();
        this._reward11.setName("_reward11");
        this._layoutRewards.addChild(this._reward11);
        this._reward11.setCascadeOpacityEnabled(true);
        this._reward11.setCascadeColorEnabled(true);
        this._reward11.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._reward11, 0.6975, 0.05);
        let _reward11LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._reward11);
        _reward11LayoutComponent.setPositionPercentXEnabled(true);
        _reward11LayoutComponent.setPositionPercentX(0.6975);
        _reward11LayoutComponent.setPositionPercentYEnabled(true);
        _reward11LayoutComponent.setPositionPercentY(0.05);
        this._reward11.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._reward11.setUnifySizeEnabled(false);
        this._reward11.ignoreContentAdaptWithSize(false);
        this._reward11.setContentSize(cc.size(50, 50));
        this._reward11.setTouchEnabled(false);

        ///// # _reward12
        this._reward12 = new ccui.ImageView();
        this._reward12.setName("_reward12");
        this._layoutRewards.addChild(this._reward12);
        this._reward12.setCascadeOpacityEnabled(true);
        this._reward12.setCascadeColorEnabled(true);
        this._reward12.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._reward12, 0.83, 0.05);
        let _reward12LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._reward12);
        _reward12LayoutComponent.setPositionPercentXEnabled(true);
        _reward12LayoutComponent.setPositionPercentX(0.83);
        _reward12LayoutComponent.setPositionPercentYEnabled(true);
        _reward12LayoutComponent.setPositionPercentY(0.05);
        this._reward12.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._reward12.setUnifySizeEnabled(false);
        this._reward12.ignoreContentAdaptWithSize(false);
        this._reward12.setContentSize(cc.size(50, 50));
        this._reward12.setTouchEnabled(false);

        ///// # _layoutUI
        this._layoutUI = new ccui.Layout();
        this._layoutUI.setName("_layoutUI");
        this._layoutContainer.addChild(this._layoutUI);
        this._layoutUI.setCascadeOpacityEnabled(true);
        this._layoutUI.setCascadeColorEnabled(true);
        let _layoutUILayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutUI);
        _layoutUILayoutComponent.setPercentWidthEnabled(true);
        _layoutUILayoutComponent.setPercentWidth(1);
        _layoutUILayoutComponent.setPercentHeightEnabled(true);
        _layoutUILayoutComponent.setPercentHeight(1);
        this._layoutUI.setTouchEnabled(false);
        this._layoutUI.setUnifySizeEnabled(false);
        this._layoutUI.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutUI, 1, 1);

        ///// # _layoutCheat
        this._layoutCheat = new ccui.Layout();
        this._layoutCheat.setName("_layoutCheat");
        this._layoutUI.addChild(this._layoutCheat);
        this._layoutCheat.setCascadeOpacityEnabled(true);
        this._layoutCheat.setCascadeColorEnabled(true);
        this._layoutCheat.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCheat, 0.9653, 0.9802);
        let _layoutCheatLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCheat);
        this._layoutCheat.setTouchEnabled(false);
        this._layoutCheat.setUnifySizeEnabled(false);
        this._layoutCheat.ignoreContentAdaptWithSize(false);
        this._layoutCheat.setContentSize(cc.size(100, 90));
        this._layoutCheat.setBackGroundColorType(1);
        this._layoutCheat.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutCheat.setBackGroundColorOpacity(153);

        ///// # _txtCheat
        this._txtCheat = new ck.Text();
        this._txtCheat.setName("_txtCheat");
        this._layoutCheat.addChild(this._txtCheat);
        this._txtCheat.setCascadeOpacityEnabled(true);
        this._txtCheat.setCascadeColorEnabled(true);
        this._txtCheat.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCheat, 0.5, 0.5);
        let _txtCheatLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCheat);
        _txtCheatLayoutComponent.setPositionPercentXEnabled(true);
        _txtCheatLayoutComponent.setPositionPercentX(0.5);
        _txtCheatLayoutComponent.setPositionPercentYEnabled(true);
        _txtCheatLayoutComponent.setPositionPercentY(0.5);
        _txtCheatLayoutComponent.setPercentWidthEnabled(true);
        _txtCheatLayoutComponent.setPercentWidth(1);
        _txtCheatLayoutComponent.setPercentHeightEnabled(true);
        _txtCheatLayoutComponent.setPercentHeight(1);
        this._txtCheat.setTouchEnabled(false);
        this._txtCheat.setUnifySizeEnabled(false);
        this._txtCheat.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtCheat, 1, 1);
        this._txtCheat.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCheat.setDefaultFontSize(25);
        this._txtCheat.setString("CHEAT");
        this._txtCheat.setTextHorizontalAlignment(1);
        this._txtCheat.setTextVerticalAlignment(1);

        ///// # _layoutGun
        this._layoutGun = new ccui.Layout();
        this._layoutGun.setName("_layoutGun");
        this._layoutUI.addChild(this._layoutGun);
        this._layoutGun.setCascadeOpacityEnabled(true);
        this._layoutGun.setCascadeColorEnabled(true);
        this._layoutGun.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutGun, 0.9495, 0.0008);
        let _layoutGunLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGun);
        this._layoutGun.setTouchEnabled(false);
        this._layoutGun.setUnifySizeEnabled(false);
        this._layoutGun.ignoreContentAdaptWithSize(false);
        this._layoutGun.setContentSize(cc.size(56, 130));

        ///// # _imgSpring
        this._imgSpring = new ccui.ImageView();
        this._imgSpring.setName("_imgSpring");
        this._layoutGun.addChild(this._imgSpring);
        this._imgSpring.setCascadeOpacityEnabled(true);
        this._imgSpring.setCascadeColorEnabled(true);
        this._imgSpring.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgSpring, 0.55, 0.0231);
        let _imgSpringLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgSpring);
        _imgSpringLayoutComponent.setPositionPercentXEnabled(true);
        _imgSpringLayoutComponent.setPositionPercentX(0.55);
        this._imgSpring.loadTexture("pinball/PinballSpring.png", 1);
        this._imgSpring.setUnifySizeEnabled(false);
        this._imgSpring.ignoreContentAdaptWithSize(false);
        this._imgSpring.setContentSize(cc.size(43, 44.2148));
        this._imgSpring.setTouchEnabled(false);

        ///// # _imgDisc
        this._imgDisc = new ccui.ImageView();
        this._imgDisc.setName("_imgDisc");
        this._layoutGun.addChild(this._imgDisc);
        this._imgDisc.setCascadeOpacityEnabled(true);
        this._imgDisc.setCascadeColorEnabled(true);
        this._imgDisc.setAnchorPoint(cc.p(0.5, 0.3087));
        ck.UIUtils.setPositionPercent(this._imgDisc, 0.5567, 0.3538);
        let _imgDiscLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDisc);
        this._imgDisc.loadTexture("pinball/PinballSpringDisc.png", 1);
        this._imgDisc.setUnifySizeEnabled(false);
        this._imgDisc.ignoreContentAdaptWithSize(false);
        this._imgDisc.setContentSize(cc.size(45, 16));
        this._imgDisc.setTouchEnabled(false);

        ///// # _imgGun
        this._imgGun = new ccui.ImageView();
        this._imgGun.setName("_imgGun");
        this._layoutGun.addChild(this._imgGun);
        this._imgGun.setCascadeOpacityEnabled(true);
        this._imgGun.setCascadeColorEnabled(true);
        this._imgGun.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgGun, 0.5, 0);
        let _imgGunLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGun);
        _imgGunLayoutComponent.setPositionPercentXEnabled(true);
        _imgGunLayoutComponent.setPositionPercentX(0.5);
        _imgGunLayoutComponent.setPositionPercentYEnabled(true);
        _imgGunLayoutComponent.setPositionPercentY(0);
        this._imgGun.loadTexture("pinball/PinballGun.png", 1);
        this._imgGun.setUnifySizeEnabled(false);
        this._imgGun.ignoreContentAdaptWithSize(false);
        this._imgGun.setContentSize(cc.size(56, 130));
        this._imgGun.setTouchEnabled(false);

    },



});

/**
 * Create PinballTable
 * @returns {_ccs.PinballTable}
 */
_ccs.PinballTable.create = function () {
    return new _ccs.PinballTable();
};
