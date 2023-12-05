/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.DualWheelTutorialPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.DualWheelTutorialPopup = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ck.Text} */
    _txtTutorial: null,
    /** @type {cc.Node} */
    _widgetTutorialStep01: null,
    /** @type {ccui.Layout} */
    _layoutPlayTutorialStep01: null,
    /** @type {ccui.ImageView} */
    _imgProgressTutorialStep01: null,
    /** @type {ccui.ImageView} */
    _imgToken00TutorialStep01: null,
    /** @type {ccui.ImageView} */
    _imgToken01TutorialStep01: null,
    /** @type {ccui.ImageView} */
    _imgBagTutorialStep01: null,
    /** @type {ccui.Layout} */
    _layoutBubbleTutorialStep01: null,
    /** @type {ccui.ImageView} */
    _imgBubbleBackgroundTutorialStep01: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtBubbleTutorialStep01: null,
    /** @type {ccui.ImageView} */
    _imgArrow00: null,
    /** @type {cc.Node} */
    _widgetTutorialStep02: null,
    /** @type {cc.Node} */
    _widgetTokenTutorialStep02: null,
    /** @type {ccui.ImageView} */
    _imgToken01TutorialStep02: null,
    /** @type {ccui.ImageView} */
    _imgToken02TutorialStep02: null,
    /** @type {ccui.ImageView} */
    _imgToken03TutorialStep02: null,
    /** @type {ccui.Layout} */
    _layoutBubbleTutorialStep02: null,
    /** @type {ccui.ImageView} */
    _imgBubbleBackgroundTutorialStep02: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtBubbleTutorialStep02: null,
    /** @type {ccui.ImageView} */
    _imgArrow01: null,
    /** @type {cc.Node} */
    _widgetTutorialStep03: null,
    /** @type {ccui.Layout} */
    _layoutRewardTutorialStep03: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundReward: null,
    /** @type {ck.Text} */
    _txtAmount: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ccui.Layout} */
    _layoutBubbleTutorialStep03: null,
    /** @type {ccui.ImageView} */
    _imgBubbleBackgroundTutorialStep03: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtBubbleTutorialStep03: null,
    /** @type {cc.Node} */
    _widgetTutorialStep04: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundTutorialStep04: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtTutorialStep04: null,
    /** @type {ccui.ImageView} */
    _imgCoinPieTutorialStep04: null,
    /** @type {ccui.ImageView} */
    _imgArrowTutorialStep04: null,
    /** @type {cc.Node} */
    _widgetTokenTutorialStep04: null,
    /** @type {ccui.ImageView} */
    _imgToken01TutorialStep04: null,
    /** @type {ccui.ImageView} */
    _imgToken02TutorialStep04: null,
    /** @type {ccui.ImageView} */
    _imgToken03TutorialStep04: null,
    /** @type {ck.Text} */
    _txtTapToClose: null,


    /**
     * _ccs.DualWheelTutorialPopup constructor
     * @constructor
     */
    ctor: function () {
        cc.Layer.prototype.ctor.call(this);
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
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        _layoutRootLayoutComponent.setPercentWidthEnabled(true);
        _layoutRootLayoutComponent.setPercentWidth(1);
        _layoutRootLayoutComponent.setPercentHeightEnabled(true);
        _layoutRootLayoutComponent.setPercentHeight(1);
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutRoot, 1, 1);

        ///// # _txtTutorial
        this._txtTutorial = new ck.Text();
        this._txtTutorial.setName("_txtTutorial");
        this._layoutRoot.addChild(this._txtTutorial);
        this._txtTutorial.setCascadeOpacityEnabled(true);
        this._txtTutorial.setCascadeColorEnabled(true);
        this._txtTutorial.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTutorial, 0.5, 0.94);
        this._txtTutorial.setTextColor(cc.color(222, 247, 255, 255));
        let _txtTutorialLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTutorial);
        _txtTutorialLayoutComponent.setPositionPercentXEnabled(true);
        _txtTutorialLayoutComponent.setPositionPercentX(0.5);
        _txtTutorialLayoutComponent.setPositionPercentYEnabled(true);
        _txtTutorialLayoutComponent.setPositionPercentY(0.94);
        this._txtTutorial.setTouchEnabled(false);
        this._txtTutorial.ignoreContentAdaptWithSize(true);
        this._txtTutorial.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTutorial.setDefaultFontSize(55);
        this._txtTutorial.setString(gm.localize.getText("TXT_TUTORIAL"));
        this._txtTutorial.setTextHorizontalAlignment(1);
        this._txtTutorial.setTextVerticalAlignment(1);
        this._txtTutorial.enableOutline(cc.color(41, 107, 130, 255), 2);
        this._txtTutorial.enableShadow(cc.color(63, 147, 186, 255), cc.size(0, -2), 0);

        ///// # _widgetTutorialStep01
        this._widgetTutorialStep01 = new cc.Node();
        this._widgetTutorialStep01.setName("_widgetTutorialStep01");
        this._layoutRoot.addChild(this._widgetTutorialStep01);
        this._widgetTutorialStep01.setCascadeOpacityEnabled(true);
        this._widgetTutorialStep01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._widgetTutorialStep01, 0.26, 0.42);
        let _widgetTutorialStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._widgetTutorialStep01);
        _widgetTutorialStep01LayoutComponent.setPositionPercentXEnabled(true);
        _widgetTutorialStep01LayoutComponent.setPositionPercentX(0.26);
        _widgetTutorialStep01LayoutComponent.setPositionPercentYEnabled(true);
        _widgetTutorialStep01LayoutComponent.setPositionPercentY(0.42);

        ///// # _layoutPlayTutorialStep01
        this._layoutPlayTutorialStep01 = new ccui.Layout();
        this._layoutPlayTutorialStep01.setName("_layoutPlayTutorialStep01");
        this._widgetTutorialStep01.addChild(this._layoutPlayTutorialStep01);
        this._layoutPlayTutorialStep01.setCascadeOpacityEnabled(true);
        this._layoutPlayTutorialStep01.setCascadeColorEnabled(true);
        this._layoutPlayTutorialStep01.setAnchorPoint(cc.p(0.5, 0.5));
        this._layoutPlayTutorialStep01.setPosition(0, 110);
        this._layoutPlayTutorialStep01.setScale(0.5, 0.5);
        let _layoutPlayTutorialStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPlayTutorialStep01);
        this._layoutPlayTutorialStep01.setTouchEnabled(true);
        this._layoutPlayTutorialStep01.setUnifySizeEnabled(false);
        this._layoutPlayTutorialStep01.ignoreContentAdaptWithSize(false);
        this._layoutPlayTutorialStep01.setContentSize(cc.size(340, 355));
        this._layoutPlayTutorialStep01.setBackGroundColorType(1);
        this._layoutPlayTutorialStep01.setBackGroundColor(cc.color.WHITE);

        ///// # _imgProgressTutorialStep01
        this._imgProgressTutorialStep01 = new ccui.ImageView();
        this._imgProgressTutorialStep01.setName("_imgProgressTutorialStep01");
        this._widgetTutorialStep01.addChild(this._imgProgressTutorialStep01);
        this._imgProgressTutorialStep01.setCascadeOpacityEnabled(true);
        this._imgProgressTutorialStep01.setCascadeColorEnabled(true);
        this._imgProgressTutorialStep01.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgProgressTutorialStep01.setScale(0.6, 0.6);
        let _imgProgressTutorialStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgProgressTutorialStep01);
        _imgProgressTutorialStep01LayoutComponent.setPositionPercentXEnabled(true);
        _imgProgressTutorialStep01LayoutComponent.setPositionPercentX(0);
        this._imgProgressTutorialStep01.loadTexture("basics/bars/Bar_10.png", 1);
        this._imgProgressTutorialStep01.setUnifySizeEnabled(false);
        this._imgProgressTutorialStep01.ignoreContentAdaptWithSize(false);
        this._imgProgressTutorialStep01.setScale9Enabled(true);
        this._imgProgressTutorialStep01.setCapInsets(cc.rect(83, 2, 87, 4));
        this._imgProgressTutorialStep01.setContentSize(cc.size(315, 8));
        this._imgProgressTutorialStep01.setTouchEnabled(false);

        ///// # _imgToken00TutorialStep01
        this._imgToken00TutorialStep01 = new ccui.ImageView();
        this._imgToken00TutorialStep01.setName("_imgToken00TutorialStep01");
        this._imgProgressTutorialStep01.addChild(this._imgToken00TutorialStep01);
        this._imgToken00TutorialStep01.setCascadeOpacityEnabled(true);
        this._imgToken00TutorialStep01.setCascadeColorEnabled(true);
        this._imgToken00TutorialStep01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgToken00TutorialStep01, 0.4, 0);
        let _imgToken00TutorialStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken00TutorialStep01);
        _imgToken00TutorialStep01LayoutComponent.setPositionPercentXEnabled(true);
        _imgToken00TutorialStep01LayoutComponent.setPositionPercentX(0.4);
        this._imgToken00TutorialStep01.loadTexture("icons/color/tokens/DualWheelToken.png", 1);
        this._imgToken00TutorialStep01.setUnifySizeEnabled(false);
        this._imgToken00TutorialStep01.ignoreContentAdaptWithSize(false);
        this._imgToken00TutorialStep01.setContentSize(cc.size(54, 54));
        this._imgToken00TutorialStep01.setTouchEnabled(false);

        ///// # _imgToken01TutorialStep01
        this._imgToken01TutorialStep01 = new ccui.ImageView();
        this._imgToken01TutorialStep01.setName("_imgToken01TutorialStep01");
        this._imgProgressTutorialStep01.addChild(this._imgToken01TutorialStep01);
        this._imgToken01TutorialStep01.setCascadeOpacityEnabled(true);
        this._imgToken01TutorialStep01.setCascadeColorEnabled(true);
        this._imgToken01TutorialStep01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgToken01TutorialStep01, 1, 0);
        let _imgToken01TutorialStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken01TutorialStep01);
        _imgToken01TutorialStep01LayoutComponent.setPositionPercentXEnabled(true);
        _imgToken01TutorialStep01LayoutComponent.setPositionPercentX(1);
        this._imgToken01TutorialStep01.loadTexture("icons/color/tokens/DualWheelToken.png", 1);
        this._imgToken01TutorialStep01.setUnifySizeEnabled(false);
        this._imgToken01TutorialStep01.ignoreContentAdaptWithSize(false);
        this._imgToken01TutorialStep01.setContentSize(cc.size(54, 54));
        this._imgToken01TutorialStep01.setTouchEnabled(false);

        ///// # _imgBagTutorialStep01
        this._imgBagTutorialStep01 = new ccui.ImageView();
        this._imgBagTutorialStep01.setName("_imgBagTutorialStep01");
        this._imgProgressTutorialStep01.addChild(this._imgBagTutorialStep01);
        this._imgBagTutorialStep01.setCascadeOpacityEnabled(true);
        this._imgBagTutorialStep01.setCascadeColorEnabled(true);
        this._imgBagTutorialStep01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBagTutorialStep01, -0.0508, 0.5);
        let _imgBagTutorialStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBagTutorialStep01);
        _imgBagTutorialStep01LayoutComponent.setPositionPercentYEnabled(true);
        _imgBagTutorialStep01LayoutComponent.setPositionPercentY(0.5);
        this._imgBagTutorialStep01.loadTexture("basics/bags/Bag_00_00.png", 1);
        this._imgBagTutorialStep01.setUnifySizeEnabled(false);
        this._imgBagTutorialStep01.ignoreContentAdaptWithSize(false);
        this._imgBagTutorialStep01.setContentSize(cc.size(41, 38));
        this._imgBagTutorialStep01.setTouchEnabled(false);

        ///// # _layoutBubbleTutorialStep01
        this._layoutBubbleTutorialStep01 = new ccui.Layout();
        this._layoutBubbleTutorialStep01.setName("_layoutBubbleTutorialStep01");
        this._widgetTutorialStep01.addChild(this._layoutBubbleTutorialStep01);
        this._layoutBubbleTutorialStep01.setCascadeOpacityEnabled(true);
        this._layoutBubbleTutorialStep01.setCascadeColorEnabled(true);
        this._layoutBubbleTutorialStep01.setAnchorPoint(cc.p(0.5, 1));
        this._layoutBubbleTutorialStep01.setPosition(-2.2083, -43.538);
        let _layoutBubbleTutorialStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBubbleTutorialStep01);
        this._layoutBubbleTutorialStep01.setTouchEnabled(false);
        this._layoutBubbleTutorialStep01.setUnifySizeEnabled(false);
        this._layoutBubbleTutorialStep01.ignoreContentAdaptWithSize(false);
        this._layoutBubbleTutorialStep01.setContentSize(cc.size(250, 100));

        ///// # _imgBubbleBackgroundTutorialStep01
        this._imgBubbleBackgroundTutorialStep01 = new ccui.ImageView();
        this._imgBubbleBackgroundTutorialStep01.setName("_imgBubbleBackgroundTutorialStep01");
        this._layoutBubbleTutorialStep01.addChild(this._imgBubbleBackgroundTutorialStep01);
        this._imgBubbleBackgroundTutorialStep01.setCascadeOpacityEnabled(true);
        this._imgBubbleBackgroundTutorialStep01.setCascadeColorEnabled(true);
        this._imgBubbleBackgroundTutorialStep01.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBubbleBackgroundTutorialStep01, 0.5, 0);
        this._imgBubbleBackgroundTutorialStep01.setFlippedY(true);
        let _imgBubbleBackgroundTutorialStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBubbleBackgroundTutorialStep01);
        _imgBubbleBackgroundTutorialStep01LayoutComponent.setPositionPercentXEnabled(true);
        _imgBubbleBackgroundTutorialStep01LayoutComponent.setPositionPercentX(0.5);
        _imgBubbleBackgroundTutorialStep01LayoutComponent.setPositionPercentYEnabled(true);
        _imgBubbleBackgroundTutorialStep01LayoutComponent.setPositionPercentY(0);
        _imgBubbleBackgroundTutorialStep01LayoutComponent.setPercentWidthEnabled(true);
        _imgBubbleBackgroundTutorialStep01LayoutComponent.setPercentWidth(1);
        this._imgBubbleBackgroundTutorialStep01.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgBubbleBackgroundTutorialStep01.setUnifySizeEnabled(false);
        this._imgBubbleBackgroundTutorialStep01.ignoreContentAdaptWithSize(false);
        this._imgBubbleBackgroundTutorialStep01.setScale9Enabled(true);
        this._imgBubbleBackgroundTutorialStep01.setCapInsets(cc.rect(57, 33, 60, 30));
        ck.UIUtils.setWidthPercent(this._imgBubbleBackgroundTutorialStep01, 1);
        this._imgBubbleBackgroundTutorialStep01.setContentSize(cc.size(this._imgBubbleBackgroundTutorialStep01.width, 126));
        this._imgBubbleBackgroundTutorialStep01.setTouchEnabled(false);
        this._imgBubbleBackgroundTutorialStep01.setFlippedY(true);

        ///// # _txtBubbleTutorialStep01
        this._txtBubbleTutorialStep01 = new ck.CustomRichTextExtend(cc.size(225, 90));
        this._txtBubbleTutorialStep01.setName("_txtBubbleTutorialStep01");
        this._layoutBubbleTutorialStep01.addChild(this._txtBubbleTutorialStep01);
        this._txtBubbleTutorialStep01.setCascadeOpacityEnabled(true);
        this._txtBubbleTutorialStep01.setCascadeColorEnabled(true);
        this._txtBubbleTutorialStep01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBubbleTutorialStep01, 0.5, 0.5);
        let _txtBubbleTutorialStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBubbleTutorialStep01);
        _txtBubbleTutorialStep01LayoutComponent.setPositionPercentXEnabled(true);
        _txtBubbleTutorialStep01LayoutComponent.setPositionPercentX(0.5);
        _txtBubbleTutorialStep01LayoutComponent.setPositionPercentYEnabled(true);
        _txtBubbleTutorialStep01LayoutComponent.setPositionPercentY(0.5);
        _txtBubbleTutorialStep01LayoutComponent.setPercentWidthEnabled(true);
        _txtBubbleTutorialStep01LayoutComponent.setPercentWidth(0.9);
        _txtBubbleTutorialStep01LayoutComponent.setPercentHeightEnabled(true);
        _txtBubbleTutorialStep01LayoutComponent.setPercentHeight(0.9);
        this._txtBubbleTutorialStep01.setTouchEnabled(false);
        this._txtBubbleTutorialStep01.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtBubbleTutorialStep01.setDefaultSize(30);
        this._txtBubbleTutorialStep01.setDefaultAlignHorizontal(2);
        this._txtBubbleTutorialStep01.setDefaultAlignVertical(5);
        this._txtBubbleTutorialStep01.setString(gm.localize.getText("TXT_DUAL_WHEEL_TUTORIAL_01"));

        ///// # _imgArrow00
        this._imgArrow00 = new ccui.ImageView();
        this._imgArrow00.setName("_imgArrow00");
        this._layoutRoot.addChild(this._imgArrow00);
        this._imgArrow00.setCascadeOpacityEnabled(true);
        this._imgArrow00.setCascadeColorEnabled(true);
        this._imgArrow00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgArrow00, 0.35, 0.62);
        this._imgArrow00.setRotationX(110);
        this._imgArrow00.setRotationY(109.9999);
        let _imgArrow00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgArrow00);
        _imgArrow00LayoutComponent.setPositionPercentXEnabled(true);
        _imgArrow00LayoutComponent.setPositionPercentX(0.35);
        _imgArrow00LayoutComponent.setPositionPercentYEnabled(true);
        _imgArrow00LayoutComponent.setPositionPercentY(0.62);
        this._imgArrow00.loadTexture("basics/arrows/Arrow_00.png", 1);
        this._imgArrow00.setUnifySizeEnabled(false);
        this._imgArrow00.ignoreContentAdaptWithSize(false);
        this._imgArrow00.setContentSize(cc.size(40, 77));
        this._imgArrow00.setTouchEnabled(false);

        ///// # _widgetTutorialStep02
        this._widgetTutorialStep02 = new cc.Node();
        this._widgetTutorialStep02.setName("_widgetTutorialStep02");
        this._layoutRoot.addChild(this._widgetTutorialStep02);
        this._widgetTutorialStep02.setCascadeOpacityEnabled(true);
        this._widgetTutorialStep02.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._widgetTutorialStep02, 0.5, 0.72);
        let _widgetTutorialStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._widgetTutorialStep02);
        _widgetTutorialStep02LayoutComponent.setPositionPercentXEnabled(true);
        _widgetTutorialStep02LayoutComponent.setPositionPercentX(0.5);
        _widgetTutorialStep02LayoutComponent.setPositionPercentYEnabled(true);
        _widgetTutorialStep02LayoutComponent.setPositionPercentY(0.72);

        ///// # _widgetTokenTutorialStep02
        this._widgetTokenTutorialStep02 = new cc.Node();
        this._widgetTokenTutorialStep02.setName("_widgetTokenTutorialStep02");
        this._widgetTutorialStep02.addChild(this._widgetTokenTutorialStep02);
        this._widgetTokenTutorialStep02.setCascadeOpacityEnabled(true);
        this._widgetTokenTutorialStep02.setCascadeColorEnabled(true);
        let _widgetTokenTutorialStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._widgetTokenTutorialStep02);

        ///// # _imgToken01TutorialStep02
        this._imgToken01TutorialStep02 = new ccui.ImageView();
        this._imgToken01TutorialStep02.setName("_imgToken01TutorialStep02");
        this._widgetTokenTutorialStep02.addChild(this._imgToken01TutorialStep02);
        this._imgToken01TutorialStep02.setCascadeOpacityEnabled(true);
        this._imgToken01TutorialStep02.setCascadeColorEnabled(true);
        this._imgToken01TutorialStep02.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgToken01TutorialStep02.setPosition(-46.8986, -2.5064);
        this._imgToken01TutorialStep02.setRotationX(-38.6909);
        this._imgToken01TutorialStep02.setRotationY(-38.691);
        let _imgToken01TutorialStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken01TutorialStep02);
        this._imgToken01TutorialStep02.loadTexture("icons/color/tokens/DualWheelToken.png", 1);
        this._imgToken01TutorialStep02.setUnifySizeEnabled(false);
        this._imgToken01TutorialStep02.ignoreContentAdaptWithSize(false);
        this._imgToken01TutorialStep02.setContentSize(cc.size(100, 100));
        this._imgToken01TutorialStep02.setTouchEnabled(false);

        ///// # _imgToken02TutorialStep02
        this._imgToken02TutorialStep02 = new ccui.ImageView();
        this._imgToken02TutorialStep02.setName("_imgToken02TutorialStep02");
        this._widgetTokenTutorialStep02.addChild(this._imgToken02TutorialStep02);
        this._imgToken02TutorialStep02.setCascadeOpacityEnabled(true);
        this._imgToken02TutorialStep02.setCascadeColorEnabled(true);
        this._imgToken02TutorialStep02.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgToken02TutorialStep02.setPosition(39.9703, -25.8711);
        this._imgToken02TutorialStep02.setRotation(39.1637);
        let _imgToken02TutorialStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken02TutorialStep02);
        this._imgToken02TutorialStep02.loadTexture("icons/color/tokens/DualWheelToken.png", 1);
        this._imgToken02TutorialStep02.setUnifySizeEnabled(false);
        this._imgToken02TutorialStep02.ignoreContentAdaptWithSize(false);
        this._imgToken02TutorialStep02.setContentSize(cc.size(90, 90));
        this._imgToken02TutorialStep02.setTouchEnabled(false);

        ///// # _imgToken03TutorialStep02
        this._imgToken03TutorialStep02 = new ccui.ImageView();
        this._imgToken03TutorialStep02.setName("_imgToken03TutorialStep02");
        this._widgetTokenTutorialStep02.addChild(this._imgToken03TutorialStep02);
        this._imgToken03TutorialStep02.setCascadeOpacityEnabled(true);
        this._imgToken03TutorialStep02.setCascadeColorEnabled(true);
        this._imgToken03TutorialStep02.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgToken03TutorialStep02.setPosition(0.6823, -11.0001);
        this._imgToken03TutorialStep02.setRotation(6);
        let _imgToken03TutorialStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken03TutorialStep02);
        this._imgToken03TutorialStep02.loadTexture("icons/color/tokens/DualWheelToken.png", 1);
        this._imgToken03TutorialStep02.setUnifySizeEnabled(false);
        this._imgToken03TutorialStep02.ignoreContentAdaptWithSize(false);
        this._imgToken03TutorialStep02.setContentSize(cc.size(128, 128));
        this._imgToken03TutorialStep02.setTouchEnabled(false);

        ///// # _layoutBubbleTutorialStep02
        this._layoutBubbleTutorialStep02 = new ccui.Layout();
        this._layoutBubbleTutorialStep02.setName("_layoutBubbleTutorialStep02");
        this._widgetTutorialStep02.addChild(this._layoutBubbleTutorialStep02);
        this._layoutBubbleTutorialStep02.setCascadeOpacityEnabled(true);
        this._layoutBubbleTutorialStep02.setCascadeColorEnabled(true);
        this._layoutBubbleTutorialStep02.setAnchorPoint(cc.p(0.5, 1));
        this._layoutBubbleTutorialStep02.setPosition(45.767, 184.1817);
        let _layoutBubbleTutorialStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBubbleTutorialStep02);
        this._layoutBubbleTutorialStep02.setTouchEnabled(false);
        this._layoutBubbleTutorialStep02.setUnifySizeEnabled(false);
        this._layoutBubbleTutorialStep02.ignoreContentAdaptWithSize(false);
        this._layoutBubbleTutorialStep02.setContentSize(cc.size(250, 100));

        ///// # _imgBubbleBackgroundTutorialStep02
        this._imgBubbleBackgroundTutorialStep02 = new ccui.ImageView();
        this._imgBubbleBackgroundTutorialStep02.setName("_imgBubbleBackgroundTutorialStep02");
        this._layoutBubbleTutorialStep02.addChild(this._imgBubbleBackgroundTutorialStep02);
        this._imgBubbleBackgroundTutorialStep02.setCascadeOpacityEnabled(true);
        this._imgBubbleBackgroundTutorialStep02.setCascadeColorEnabled(true);
        this._imgBubbleBackgroundTutorialStep02.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBubbleBackgroundTutorialStep02, 0.5, 1);
        let _imgBubbleBackgroundTutorialStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBubbleBackgroundTutorialStep02);
        _imgBubbleBackgroundTutorialStep02LayoutComponent.setPositionPercentXEnabled(true);
        _imgBubbleBackgroundTutorialStep02LayoutComponent.setPositionPercentX(0.5);
        _imgBubbleBackgroundTutorialStep02LayoutComponent.setPositionPercentYEnabled(true);
        _imgBubbleBackgroundTutorialStep02LayoutComponent.setPositionPercentY(1);
        _imgBubbleBackgroundTutorialStep02LayoutComponent.setPercentWidthEnabled(true);
        _imgBubbleBackgroundTutorialStep02LayoutComponent.setPercentWidth(1);
        this._imgBubbleBackgroundTutorialStep02.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgBubbleBackgroundTutorialStep02.setUnifySizeEnabled(false);
        this._imgBubbleBackgroundTutorialStep02.ignoreContentAdaptWithSize(false);
        this._imgBubbleBackgroundTutorialStep02.setScale9Enabled(true);
        this._imgBubbleBackgroundTutorialStep02.setCapInsets(cc.rect(57, 33, 60, 30));
        ck.UIUtils.setWidthPercent(this._imgBubbleBackgroundTutorialStep02, 1);
        this._imgBubbleBackgroundTutorialStep02.setContentSize(cc.size(this._imgBubbleBackgroundTutorialStep02.width, 126));
        this._imgBubbleBackgroundTutorialStep02.setTouchEnabled(false);

        ///// # _txtBubbleTutorialStep02
        this._txtBubbleTutorialStep02 = new ck.CustomRichTextExtend(cc.size(225, 90));
        this._txtBubbleTutorialStep02.setName("_txtBubbleTutorialStep02");
        this._layoutBubbleTutorialStep02.addChild(this._txtBubbleTutorialStep02);
        this._txtBubbleTutorialStep02.setCascadeOpacityEnabled(true);
        this._txtBubbleTutorialStep02.setCascadeColorEnabled(true);
        this._txtBubbleTutorialStep02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBubbleTutorialStep02, 0.5, 0.5);
        let _txtBubbleTutorialStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBubbleTutorialStep02);
        _txtBubbleTutorialStep02LayoutComponent.setPositionPercentXEnabled(true);
        _txtBubbleTutorialStep02LayoutComponent.setPositionPercentX(0.5);
        _txtBubbleTutorialStep02LayoutComponent.setPositionPercentYEnabled(true);
        _txtBubbleTutorialStep02LayoutComponent.setPositionPercentY(0.5);
        _txtBubbleTutorialStep02LayoutComponent.setPercentWidthEnabled(true);
        _txtBubbleTutorialStep02LayoutComponent.setPercentWidth(0.9);
        _txtBubbleTutorialStep02LayoutComponent.setPercentHeightEnabled(true);
        _txtBubbleTutorialStep02LayoutComponent.setPercentHeight(0.9);
        this._txtBubbleTutorialStep02.setTouchEnabled(false);
        this._txtBubbleTutorialStep02.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtBubbleTutorialStep02.setDefaultSize(30);
        this._txtBubbleTutorialStep02.setDefaultAlignHorizontal(2);
        this._txtBubbleTutorialStep02.setDefaultAlignVertical(5);
        this._txtBubbleTutorialStep02.setString(gm.localize.getText("TXT_DUAL_WHEEL_TUTORIAL_02"));

        ///// # _imgArrow01
        this._imgArrow01 = new ccui.ImageView();
        this._imgArrow01.setName("_imgArrow01");
        this._layoutRoot.addChild(this._imgArrow01);
        this._imgArrow01.setCascadeOpacityEnabled(true);
        this._imgArrow01.setCascadeColorEnabled(true);
        this._imgArrow01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgArrow01, 0.65, 0.61);
        this._imgArrow01.setRotationX(-110);
        this._imgArrow01.setRotationY(-110.0017);
        let _imgArrow01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgArrow01);
        _imgArrow01LayoutComponent.setPositionPercentXEnabled(true);
        _imgArrow01LayoutComponent.setPositionPercentX(0.65);
        _imgArrow01LayoutComponent.setPositionPercentYEnabled(true);
        _imgArrow01LayoutComponent.setPositionPercentY(0.61);
        this._imgArrow01.loadTexture("basics/arrows/Arrow_00.png", 1);
        this._imgArrow01.setUnifySizeEnabled(false);
        this._imgArrow01.ignoreContentAdaptWithSize(false);
        this._imgArrow01.setContentSize(cc.size(40, 77));
        this._imgArrow01.setTouchEnabled(false);

        ///// # _widgetTutorialStep03
        this._widgetTutorialStep03 = new cc.Node();
        this._widgetTutorialStep03.setName("_widgetTutorialStep03");
        this._layoutRoot.addChild(this._widgetTutorialStep03);
        this._widgetTutorialStep03.setCascadeOpacityEnabled(true);
        this._widgetTutorialStep03.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._widgetTutorialStep03, 0.78, 0.5);
        let _widgetTutorialStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._widgetTutorialStep03);
        _widgetTutorialStep03LayoutComponent.setPositionPercentXEnabled(true);
        _widgetTutorialStep03LayoutComponent.setPositionPercentX(0.78);
        _widgetTutorialStep03LayoutComponent.setPositionPercentYEnabled(true);
        _widgetTutorialStep03LayoutComponent.setPositionPercentY(0.5);

        ///// # _layoutRewardTutorialStep03
        this._layoutRewardTutorialStep03 = new ccui.Layout();
        this._layoutRewardTutorialStep03.setName("_layoutRewardTutorialStep03");
        this._widgetTutorialStep03.addChild(this._layoutRewardTutorialStep03);
        this._layoutRewardTutorialStep03.setCascadeOpacityEnabled(true);
        this._layoutRewardTutorialStep03.setCascadeColorEnabled(true);
        this._layoutRewardTutorialStep03.setAnchorPoint(cc.p(0.5, 0.5));
        this._layoutRewardTutorialStep03.setPosition(-31.7437, 9.5221);
        this._layoutRewardTutorialStep03.setScale(0.7, 0.7);
        let _layoutRewardTutorialStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRewardTutorialStep03);
        this._layoutRewardTutorialStep03.setTouchEnabled(false);
        this._layoutRewardTutorialStep03.setUnifySizeEnabled(false);
        this._layoutRewardTutorialStep03.ignoreContentAdaptWithSize(false);
        this._layoutRewardTutorialStep03.setContentSize(cc.size(430.6357, 100));

        ///// # _imgBackgroundReward
        this._imgBackgroundReward = new ccui.ImageView();
        this._imgBackgroundReward.setName("_imgBackgroundReward");
        this._layoutRewardTutorialStep03.addChild(this._imgBackgroundReward);
        this._imgBackgroundReward.setCascadeOpacityEnabled(true);
        this._imgBackgroundReward.setCascadeColorEnabled(true);
        this._imgBackgroundReward.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundReward, 0.5, 0.33);
        let _imgBackgroundRewardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundReward);
        _imgBackgroundRewardLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundRewardLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundRewardLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundRewardLayoutComponent.setPositionPercentY(0.33);
        this._imgBackgroundReward.loadTexture("dual-wheel/Number_Board.png", 1);
        this._imgBackgroundReward.setUnifySizeEnabled(false);
        this._imgBackgroundReward.ignoreContentAdaptWithSize(false);
        this._imgBackgroundReward.setContentSize(cc.size(379, 145));
        this._imgBackgroundReward.setTouchEnabled(false);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._layoutRewardTutorialStep03.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.57, 0.61);
        this._txtAmount.setTextColor(cc.color(255, 255, 0, 255));
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.57);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.61);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(true);
        this._txtAmount.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAmount.setDefaultFontSize(52);
        this._txtAmount.setString("10.000.000");
        this._txtAmount.setTextHorizontalAlignment(0);
        this._txtAmount.setTextVerticalAlignment(0);

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._txtAmount.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, -0.0543, 0.5);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.5);
        this._imgIcon.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(70, 70));
        this._imgIcon.setTouchEnabled(false);

        ///// # _layoutBubbleTutorialStep03
        this._layoutBubbleTutorialStep03 = new ccui.Layout();
        this._layoutBubbleTutorialStep03.setName("_layoutBubbleTutorialStep03");
        this._widgetTutorialStep03.addChild(this._layoutBubbleTutorialStep03);
        this._layoutBubbleTutorialStep03.setCascadeOpacityEnabled(true);
        this._layoutBubbleTutorialStep03.setCascadeColorEnabled(true);
        this._layoutBubbleTutorialStep03.setAnchorPoint(cc.p(0.5, 1));
        this._layoutBubbleTutorialStep03.setPosition(-43.8246, -97.5744);
        let _layoutBubbleTutorialStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBubbleTutorialStep03);
        this._layoutBubbleTutorialStep03.setTouchEnabled(false);
        this._layoutBubbleTutorialStep03.setUnifySizeEnabled(false);
        this._layoutBubbleTutorialStep03.ignoreContentAdaptWithSize(false);
        this._layoutBubbleTutorialStep03.setContentSize(cc.size(250, 100));

        ///// # _imgBubbleBackgroundTutorialStep03
        this._imgBubbleBackgroundTutorialStep03 = new ccui.ImageView();
        this._imgBubbleBackgroundTutorialStep03.setName("_imgBubbleBackgroundTutorialStep03");
        this._layoutBubbleTutorialStep03.addChild(this._imgBubbleBackgroundTutorialStep03);
        this._imgBubbleBackgroundTutorialStep03.setCascadeOpacityEnabled(true);
        this._imgBubbleBackgroundTutorialStep03.setCascadeColorEnabled(true);
        this._imgBubbleBackgroundTutorialStep03.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBubbleBackgroundTutorialStep03, 0.5, 0);
        this._imgBubbleBackgroundTutorialStep03.setFlippedX(true);
        this._imgBubbleBackgroundTutorialStep03.setFlippedY(true);
        let _imgBubbleBackgroundTutorialStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBubbleBackgroundTutorialStep03);
        _imgBubbleBackgroundTutorialStep03LayoutComponent.setPositionPercentXEnabled(true);
        _imgBubbleBackgroundTutorialStep03LayoutComponent.setPositionPercentX(0.5);
        _imgBubbleBackgroundTutorialStep03LayoutComponent.setPositionPercentYEnabled(true);
        _imgBubbleBackgroundTutorialStep03LayoutComponent.setPositionPercentY(0);
        _imgBubbleBackgroundTutorialStep03LayoutComponent.setPercentWidthEnabled(true);
        _imgBubbleBackgroundTutorialStep03LayoutComponent.setPercentWidth(1);
        this._imgBubbleBackgroundTutorialStep03.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgBubbleBackgroundTutorialStep03.setUnifySizeEnabled(false);
        this._imgBubbleBackgroundTutorialStep03.ignoreContentAdaptWithSize(false);
        this._imgBubbleBackgroundTutorialStep03.setScale9Enabled(true);
        this._imgBubbleBackgroundTutorialStep03.setCapInsets(cc.rect(57, 33, 60, 30));
        ck.UIUtils.setWidthPercent(this._imgBubbleBackgroundTutorialStep03, 1);
        this._imgBubbleBackgroundTutorialStep03.setContentSize(cc.size(this._imgBubbleBackgroundTutorialStep03.width, 126));
        this._imgBubbleBackgroundTutorialStep03.setTouchEnabled(false);
        this._imgBubbleBackgroundTutorialStep03.setFlippedX(true);
        this._imgBubbleBackgroundTutorialStep03.setFlippedY(true);

        ///// # _txtBubbleTutorialStep03
        this._txtBubbleTutorialStep03 = new ck.CustomRichTextExtend(cc.size(225, 90));
        this._txtBubbleTutorialStep03.setName("_txtBubbleTutorialStep03");
        this._layoutBubbleTutorialStep03.addChild(this._txtBubbleTutorialStep03);
        this._txtBubbleTutorialStep03.setCascadeOpacityEnabled(true);
        this._txtBubbleTutorialStep03.setCascadeColorEnabled(true);
        this._txtBubbleTutorialStep03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBubbleTutorialStep03, 0.5, 0.5);
        let _txtBubbleTutorialStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBubbleTutorialStep03);
        _txtBubbleTutorialStep03LayoutComponent.setPositionPercentXEnabled(true);
        _txtBubbleTutorialStep03LayoutComponent.setPositionPercentX(0.5);
        _txtBubbleTutorialStep03LayoutComponent.setPositionPercentYEnabled(true);
        _txtBubbleTutorialStep03LayoutComponent.setPositionPercentY(0.5);
        _txtBubbleTutorialStep03LayoutComponent.setPercentWidthEnabled(true);
        _txtBubbleTutorialStep03LayoutComponent.setPercentWidth(0.9);
        _txtBubbleTutorialStep03LayoutComponent.setPercentHeightEnabled(true);
        _txtBubbleTutorialStep03LayoutComponent.setPercentHeight(0.9);
        this._txtBubbleTutorialStep03.setTouchEnabled(false);
        this._txtBubbleTutorialStep03.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtBubbleTutorialStep03.setDefaultSize(30);
        this._txtBubbleTutorialStep03.setDefaultAlignHorizontal(2);
        this._txtBubbleTutorialStep03.setDefaultAlignVertical(5);
        this._txtBubbleTutorialStep03.setString(gm.localize.getText("TXT_DUAL_WHEEL_TUTORIAL_03"));

        ///// # _widgetTutorialStep04
        this._widgetTutorialStep04 = new cc.Node();
        this._widgetTutorialStep04.setName("_widgetTutorialStep04");
        this._layoutRoot.addChild(this._widgetTutorialStep04);
        this._widgetTutorialStep04.setCascadeOpacityEnabled(true);
        this._widgetTutorialStep04.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._widgetTutorialStep04, 0.5, 0.18);
        let _widgetTutorialStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._widgetTutorialStep04);
        _widgetTutorialStep04LayoutComponent.setPositionPercentXEnabled(true);
        _widgetTutorialStep04LayoutComponent.setPositionPercentX(0.5);
        _widgetTutorialStep04LayoutComponent.setPositionPercentYEnabled(true);
        _widgetTutorialStep04LayoutComponent.setPositionPercentY(0.18);

        ///// # _imgBackgroundTutorialStep04
        this._imgBackgroundTutorialStep04 = new ccui.ImageView();
        this._imgBackgroundTutorialStep04.setName("_imgBackgroundTutorialStep04");
        this._widgetTutorialStep04.addChild(this._imgBackgroundTutorialStep04);
        this._imgBackgroundTutorialStep04.setCascadeOpacityEnabled(true);
        this._imgBackgroundTutorialStep04.setCascadeColorEnabled(true);
        this._imgBackgroundTutorialStep04.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgBackgroundTutorialStep04.setOpacity(204);
        this._imgBackgroundTutorialStep04.setColor(cc.color(0, 0, 0, 255));
        let _imgBackgroundTutorialStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundTutorialStep04);
        this._imgBackgroundTutorialStep04.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgBackgroundTutorialStep04.setUnifySizeEnabled(false);
        this._imgBackgroundTutorialStep04.ignoreContentAdaptWithSize(false);
        this._imgBackgroundTutorialStep04.setScale9Enabled(true);
        this._imgBackgroundTutorialStep04.setCapInsets(cc.rect(21, 21, 22, 22));
        this._imgBackgroundTutorialStep04.setContentSize(cc.size(450, 150));
        this._imgBackgroundTutorialStep04.setTouchEnabled(false);

        ///// # _txtTutorialStep04
        this._txtTutorialStep04 = new ck.CustomRichTextExtend(cc.size(420, 60));
        this._txtTutorialStep04.setName("_txtTutorialStep04");
        this._widgetTutorialStep04.addChild(this._txtTutorialStep04);
        this._txtTutorialStep04.setCascadeOpacityEnabled(true);
        this._txtTutorialStep04.setCascadeColorEnabled(true);
        this._txtTutorialStep04.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtTutorialStep04.setPosition(0, 42);
        let _txtTutorialStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTutorialStep04);
        this._txtTutorialStep04.setTouchEnabled(false);
        this._txtTutorialStep04.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtTutorialStep04.setDefaultSize(30);
        this._txtTutorialStep04.setDefaultAlignHorizontal(2);
        this._txtTutorialStep04.setDefaultAlignVertical(5);
        this._txtTutorialStep04.setString(gm.localize.getText("TXT_DUAL_WHEEL_TUTORIAL_04"));

        ///// # _imgCoinPieTutorialStep04
        this._imgCoinPieTutorialStep04 = new ccui.ImageView();
        this._imgCoinPieTutorialStep04.setName("_imgCoinPieTutorialStep04");
        this._widgetTutorialStep04.addChild(this._imgCoinPieTutorialStep04);
        this._imgCoinPieTutorialStep04.setCascadeOpacityEnabled(true);
        this._imgCoinPieTutorialStep04.setCascadeColorEnabled(true);
        this._imgCoinPieTutorialStep04.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCoinPieTutorialStep04.setPosition(-104.4176, -29.4968);
        let _imgCoinPieTutorialStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCoinPieTutorialStep04);
        this._imgCoinPieTutorialStep04.loadTexture("icons/color/coins/CoinPile.png", 1);
        this._imgCoinPieTutorialStep04.setUnifySizeEnabled(false);
        this._imgCoinPieTutorialStep04.ignoreContentAdaptWithSize(false);
        this._imgCoinPieTutorialStep04.setContentSize(cc.size(150, 92));
        this._imgCoinPieTutorialStep04.setTouchEnabled(false);

        ///// # _imgArrowTutorialStep04
        this._imgArrowTutorialStep04 = new ccui.ImageView();
        this._imgArrowTutorialStep04.setName("_imgArrowTutorialStep04");
        this._widgetTutorialStep04.addChild(this._imgArrowTutorialStep04);
        this._imgArrowTutorialStep04.setCascadeOpacityEnabled(true);
        this._imgArrowTutorialStep04.setCascadeColorEnabled(true);
        this._imgArrowTutorialStep04.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgArrowTutorialStep04.setPosition(0, -23.3266);
        this._imgArrowTutorialStep04.setRotationX(180);
        this._imgArrowTutorialStep04.setRotationY(179.9999);
        this._imgArrowTutorialStep04.setFlippedY(true);
        let _imgArrowTutorialStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgArrowTutorialStep04);
        _imgArrowTutorialStep04LayoutComponent.setPositionPercentXEnabled(true);
        _imgArrowTutorialStep04LayoutComponent.setPositionPercentX(0);
        this._imgArrowTutorialStep04.loadTexture("basics/arrows/Arrow_00.png", 1);
        this._imgArrowTutorialStep04.setUnifySizeEnabled(false);
        this._imgArrowTutorialStep04.ignoreContentAdaptWithSize(false);
        this._imgArrowTutorialStep04.setContentSize(cc.size(18.2279, 35.0888));
        this._imgArrowTutorialStep04.setTouchEnabled(false);
        this._imgArrowTutorialStep04.setFlippedY(true);

        ///// # _widgetTokenTutorialStep04
        this._widgetTokenTutorialStep04 = new cc.Node();
        this._widgetTokenTutorialStep04.setName("_widgetTokenTutorialStep04");
        this._widgetTutorialStep04.addChild(this._widgetTokenTutorialStep04);
        this._widgetTokenTutorialStep04.setCascadeOpacityEnabled(true);
        this._widgetTokenTutorialStep04.setCascadeColorEnabled(true);
        this._widgetTokenTutorialStep04.setPosition(90.803, -20.1641);
        let _widgetTokenTutorialStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._widgetTokenTutorialStep04);

        ///// # _imgToken01TutorialStep04
        this._imgToken01TutorialStep04 = new ccui.ImageView();
        this._imgToken01TutorialStep04.setName("_imgToken01TutorialStep04");
        this._widgetTokenTutorialStep04.addChild(this._imgToken01TutorialStep04);
        this._imgToken01TutorialStep04.setCascadeOpacityEnabled(true);
        this._imgToken01TutorialStep04.setCascadeColorEnabled(true);
        this._imgToken01TutorialStep04.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgToken01TutorialStep04.setPosition(-21.1751, -2.5082);
        this._imgToken01TutorialStep04.setRotationX(-38.6909);
        this._imgToken01TutorialStep04.setRotationY(-38.691);
        let _imgToken01TutorialStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken01TutorialStep04);
        this._imgToken01TutorialStep04.loadTexture("icons/color/tokens/DualWheelToken.png", 1);
        this._imgToken01TutorialStep04.setUnifySizeEnabled(false);
        this._imgToken01TutorialStep04.ignoreContentAdaptWithSize(false);
        this._imgToken01TutorialStep04.setContentSize(cc.size(54, 54));
        this._imgToken01TutorialStep04.setTouchEnabled(false);

        ///// # _imgToken02TutorialStep04
        this._imgToken02TutorialStep04 = new ccui.ImageView();
        this._imgToken02TutorialStep04.setName("_imgToken02TutorialStep04");
        this._widgetTokenTutorialStep04.addChild(this._imgToken02TutorialStep04);
        this._imgToken02TutorialStep04.setCascadeOpacityEnabled(true);
        this._imgToken02TutorialStep04.setCascadeColorEnabled(true);
        this._imgToken02TutorialStep04.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgToken02TutorialStep04.setPosition(23.9517, -13.1909);
        this._imgToken02TutorialStep04.setRotation(39.1637);
        let _imgToken02TutorialStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken02TutorialStep04);
        this._imgToken02TutorialStep04.loadTexture("icons/color/tokens/DualWheelToken.png", 1);
        this._imgToken02TutorialStep04.setUnifySizeEnabled(false);
        this._imgToken02TutorialStep04.ignoreContentAdaptWithSize(false);
        this._imgToken02TutorialStep04.setContentSize(cc.size(45, 45));
        this._imgToken02TutorialStep04.setTouchEnabled(false);

        ///// # _imgToken03TutorialStep04
        this._imgToken03TutorialStep04 = new ccui.ImageView();
        this._imgToken03TutorialStep04.setName("_imgToken03TutorialStep04");
        this._widgetTokenTutorialStep04.addChild(this._imgToken03TutorialStep04);
        this._imgToken03TutorialStep04.setCascadeOpacityEnabled(true);
        this._imgToken03TutorialStep04.setCascadeColorEnabled(true);
        this._imgToken03TutorialStep04.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgToken03TutorialStep04.setPosition(0.6823, -11.0001);
        this._imgToken03TutorialStep04.setRotation(6);
        let _imgToken03TutorialStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken03TutorialStep04);
        this._imgToken03TutorialStep04.loadTexture("icons/color/tokens/DualWheelToken.png", 1);
        this._imgToken03TutorialStep04.setUnifySizeEnabled(false);
        this._imgToken03TutorialStep04.ignoreContentAdaptWithSize(false);
        this._imgToken03TutorialStep04.setContentSize(cc.size(70, 70));
        this._imgToken03TutorialStep04.setTouchEnabled(false);

        ///// # _txtTapToClose
        this._txtTapToClose = new ck.Text();
        this._txtTapToClose.setName("_txtTapToClose");
        this._layoutRoot.addChild(this._txtTapToClose);
        this._txtTapToClose.setCascadeOpacityEnabled(true);
        this._txtTapToClose.setCascadeColorEnabled(true);
        this._txtTapToClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTapToClose, 0.5, 0.05);
        this._txtTapToClose.setScale(1.0698, 1.0698);
        let _txtTapToCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTapToClose);
        _txtTapToCloseLayoutComponent.setPositionPercentXEnabled(true);
        _txtTapToCloseLayoutComponent.setPositionPercentX(0.5);
        _txtTapToCloseLayoutComponent.setPositionPercentYEnabled(true);
        _txtTapToCloseLayoutComponent.setPositionPercentY(0.05);
        this._txtTapToClose.setTouchEnabled(false);
        this._txtTapToClose.ignoreContentAdaptWithSize(true);
        this._txtTapToClose.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTapToClose.setDefaultFontSize(40);
        this._txtTapToClose.setString(gm.localize.getText("TXT_TAP_TO_CLOSE"));
        this._txtTapToClose.setTextHorizontalAlignment(0);
        this._txtTapToClose.setTextVerticalAlignment(0);

    },


    playCCSAnimShow: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimShow();
    
        let _widgetTutorialStep01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(15 / (60 * speed), 0.0001, 0.0001),
                    cc.scaleTo(15 / (60 * speed), 1, 1).easing(cc.easeBackOut()),
                    cc.scaleTo(60 / (60 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._widgetTutorialStep01.setScale(0.0001, 0.0001);
            }.bind(this))
        );
        if (repeat <= 0) {
            _widgetTutorialStep01Action = _widgetTutorialStep01Action.repeatForever();
        } else _widgetTutorialStep01Action = cc.sequence(
            cc.delayTime(delay),
            _widgetTutorialStep01Action.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._widgetTutorialStep01.runAction(_widgetTutorialStep01Action);
    
        let _imgArrow00Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(25 / (60 * speed), 0.0001, 0.0001),
                    cc.scaleTo(15 / (60 * speed), 1, 1).easing(cc.easeBackOut()),
                    cc.scaleTo(50 / (60 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgArrow00.setScale(0.0001, 0.0001);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgArrow00Action = _imgArrow00Action.repeatForever();
        } else _imgArrow00Action = cc.sequence(
            cc.delayTime(delay),
            _imgArrow00Action.repeat(repeat)
        )
        
        this._imgArrow00.runAction(_imgArrow00Action);
    
        let _widgetTutorialStep02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(30 / (60 * speed), 0.0001, 0.0001),
                    cc.scaleTo(15 / (60 * speed), 1, 1).easing(cc.easeQuadraticActionOut()),
                    cc.scaleTo(45 / (60 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._widgetTutorialStep02.setScale(0.0001, 0.0001);
            }.bind(this))
        );
        if (repeat <= 0) {
            _widgetTutorialStep02Action = _widgetTutorialStep02Action.repeatForever();
        } else _widgetTutorialStep02Action = cc.sequence(
            cc.delayTime(delay),
            _widgetTutorialStep02Action.repeat(repeat)
        )
        
        this._widgetTutorialStep02.runAction(_widgetTutorialStep02Action);
    
        let _imgArrow01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(40 / (60 * speed), 0.0001, 0.0001),
                    cc.scaleTo(15 / (60 * speed), 1, 1).easing(cc.easeQuadraticActionOut()),
                    cc.scaleTo(35 / (60 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgArrow01.setScale(0.0001, 0.0001);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgArrow01Action = _imgArrow01Action.repeatForever();
        } else _imgArrow01Action = cc.sequence(
            cc.delayTime(delay),
            _imgArrow01Action.repeat(repeat)
        )
        
        this._imgArrow01.runAction(_imgArrow01Action);
    
        let _widgetTutorialStep03Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(45 / (60 * speed), 0.0001, 0.0001),
                    cc.scaleTo(15 / (60 * speed), 1, 1).easing(cc.easeBackOut()),
                    cc.scaleTo(30 / (60 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._widgetTutorialStep03.setScale(0.0001, 0.0001);
            }.bind(this))
        );
        if (repeat <= 0) {
            _widgetTutorialStep03Action = _widgetTutorialStep03Action.repeatForever();
        } else _widgetTutorialStep03Action = cc.sequence(
            cc.delayTime(delay),
            _widgetTutorialStep03Action.repeat(repeat)
        )
        
        this._widgetTutorialStep03.runAction(_widgetTutorialStep03Action);
    
        let _imgArrowTutorialStep04Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(25 / (60 * speed), 0.0001, 0.0001),
                    cc.scaleTo(15 / (60 * speed), 1, 1).easing(cc.easeBackOut()),
                    cc.scaleTo(50 / (60 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgArrowTutorialStep04.setScale(0.0001, 0.0001);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgArrowTutorialStep04Action = _imgArrowTutorialStep04Action.repeatForever();
        } else _imgArrowTutorialStep04Action = cc.sequence(
            cc.delayTime(delay),
            _imgArrowTutorialStep04Action.repeat(repeat)
        )
        
        this._imgArrowTutorialStep04.runAction(_imgArrowTutorialStep04Action);
    
        let _widgetTutorialStep04Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(60 / (60 * speed), 0.0001, 0.0001),
                    cc.scaleTo(15 / (60 * speed), 1, 1).easing(cc.easeBackOut()),
                    cc.scaleTo(15 / (60 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._widgetTutorialStep04.setScale(0.0001, 0.0001);
            }.bind(this))
        );
        if (repeat <= 0) {
            _widgetTutorialStep04Action = _widgetTutorialStep04Action.repeatForever();
        } else _widgetTutorialStep04Action = cc.sequence(
            cc.delayTime(delay),
            _widgetTutorialStep04Action.repeat(repeat)
        )
        
        this._widgetTutorialStep04.runAction(_widgetTutorialStep04Action);
    
        let _txtTapToCloseAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(75 / (60 * speed), 0.0001, 0.0001),
                    cc.scaleTo(15 / (60 * speed), 1, 1).easing(cc.easeBackOut())
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._txtTapToClose.setScale(0.0001, 0.0001);
            }.bind(this))
        );
        if (repeat <= 0) {
            _txtTapToCloseAction = _txtTapToCloseAction.repeatForever();
        } else _txtTapToCloseAction = cc.sequence(
            cc.delayTime(delay),
            _txtTapToCloseAction.repeat(repeat)
        )
        
        this._txtTapToClose.runAction(_txtTapToCloseAction);
    
        let _layoutRootAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(15 / (60 * speed), 255),
                    cc.fadeTo(75 / (60 * speed), 255)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._layoutRoot.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _layoutRootAction = _layoutRootAction.repeatForever();
        } else _layoutRootAction = cc.sequence(
            cc.delayTime(delay),
            _layoutRootAction.repeat(repeat)
        )
        
        this._layoutRoot.runAction(_layoutRootAction);
    },

    resetCCSAnimShow: function () {
        this._widgetTutorialStep01.stopAllActions();
        this._widgetTutorialStep01.setScale(0.0001, 0.0001);
    
        this._imgArrow00.stopAllActions();
        this._imgArrow00.setScale(0.0001, 0.0001);
    
        this._widgetTutorialStep02.stopAllActions();
        this._widgetTutorialStep02.setScale(0.0001, 0.0001);
    
        this._imgArrow01.stopAllActions();
        this._imgArrow01.setScale(0.0001, 0.0001);
    
        this._widgetTutorialStep03.stopAllActions();
        this._widgetTutorialStep03.setScale(0.0001, 0.0001);
    
        this._imgArrowTutorialStep04.stopAllActions();
        this._imgArrowTutorialStep04.setScale(0.0001, 0.0001);
    
        this._widgetTutorialStep04.stopAllActions();
        this._widgetTutorialStep04.setScale(0.0001, 0.0001);
    
        this._txtTapToClose.stopAllActions();
        this._txtTapToClose.setScale(0.0001, 0.0001);
    
        this._layoutRoot.stopAllActions();
        this._layoutRoot.setOpacity(0);
    }
});

/**
 * Create DualWheelTutorialPopup
 * @returns {_ccs.DualWheelTutorialPopup}
 */
_ccs.DualWheelTutorialPopup.create = function () {
    return new _ccs.DualWheelTutorialPopup();
};
