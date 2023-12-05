/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PinballRewardWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.PinballRewardWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgLight: null,
    /** @type {ccui.ImageView} */
    _imgGrandRewardBg: null,
    /** @type {ccui.ImageView} */
    _imgBg: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtAmount: null,


    /**
     * _ccs.PinballRewardWidget constructor
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
        this._layoutRoot.setContentSize(cc.size(50, 50));

        ///// # _imgLight
        this._imgLight = new ccui.ImageView();
        this._imgLight.setName("_imgLight");
        this._layoutRoot.addChild(this._imgLight);
        this._imgLight.setCascadeOpacityEnabled(true);
        this._imgLight.setCascadeColorEnabled(true);
        this._imgLight.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLight, 0.5, 0.5);
        this._imgLight.setScale(0.28, 0.28);
        let _imgLightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLight);
        _imgLightLayoutComponent.setPositionPercentXEnabled(true);
        _imgLightLayoutComponent.setPositionPercentX(0.5);
        _imgLightLayoutComponent.setPositionPercentYEnabled(true);
        _imgLightLayoutComponent.setPositionPercentY(0.5);
        this._imgLight.loadTexture("basics/effects/LightDot_04.png", 1);
        this._imgLight.setUnifySizeEnabled(false);
        this._imgLight.ignoreContentAdaptWithSize(false);
        this._imgLight.setContentSize(cc.size(358, 358));
        this._imgLight.setTouchEnabled(false);

        ///// # _imgGrandRewardBg
        this._imgGrandRewardBg = new ccui.ImageView();
        this._imgGrandRewardBg.setName("_imgGrandRewardBg");
        this._layoutRoot.addChild(this._imgGrandRewardBg);
        this._imgGrandRewardBg.setCascadeOpacityEnabled(true);
        this._imgGrandRewardBg.setCascadeColorEnabled(true);
        this._imgGrandRewardBg.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGrandRewardBg, 0.5502, 0.4343);
        let _imgGrandRewardBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGrandRewardBg);
        _imgGrandRewardBgLayoutComponent.setPositionPercentXEnabled(true);
        _imgGrandRewardBgLayoutComponent.setPositionPercentX(0.5502);
        _imgGrandRewardBgLayoutComponent.setPositionPercentYEnabled(true);
        _imgGrandRewardBgLayoutComponent.setPositionPercentY(0.4343);
        this._imgGrandRewardBg.loadTexture("pinball/PinballGrandReward.png", 1);
        this._imgGrandRewardBg.setUnifySizeEnabled(false);
        this._imgGrandRewardBg.ignoreContentAdaptWithSize(false);
        this._imgGrandRewardBg.setContentSize(cc.size(70, 70));
        this._imgGrandRewardBg.setTouchEnabled(false);

        ///// # _imgBg
        this._imgBg = new ccui.ImageView();
        this._imgBg.setName("_imgBg");
        this._layoutRoot.addChild(this._imgBg);
        this._imgBg.setCascadeOpacityEnabled(true);
        this._imgBg.setCascadeColorEnabled(true);
        this._imgBg.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBg, 0.5, 0.5);
        this._imgBg.setColor(cc.color(144, 238, 144, 255));
        let _imgBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBg);
        _imgBgLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgLayoutComponent.setPositionPercentX(0.5);
        _imgBgLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgLayoutComponent.setPositionPercentY(0.5);
        _imgBgLayoutComponent.setPercentWidthEnabled(true);
        _imgBgLayoutComponent.setPercentWidth(1);
        _imgBgLayoutComponent.setPercentHeightEnabled(true);
        _imgBgLayoutComponent.setPercentHeight(1);
        this._imgBg.loadTexture("buttons/circles/Gray.png", 1);
        this._imgBg.setUnifySizeEnabled(false);
        this._imgBg.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBg, 1, 1);
        this._imgBg.setTouchEnabled(false);

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._layoutRoot.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.51, 0.54);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.51);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.54);
        _imgIconLayoutComponent.setPercentWidthEnabled(true);
        _imgIconLayoutComponent.setPercentWidth(1.2);
        _imgIconLayoutComponent.setPercentHeightEnabled(true);
        _imgIconLayoutComponent.setPercentHeight(1.2);
        this._imgIcon.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgIcon, 1.2, 1.2);
        this._imgIcon.setTouchEnabled(false);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._layoutRoot.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.5, -0.1);
        this._txtAmount.setTextColor(cc.color(255, 255, 0, 255));
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.5);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(true);
        this._txtAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmount.setDefaultFontSize(26);
        this._txtAmount.setString(gm.localize.getText("TXT_10K"));
        this._txtAmount.setTextHorizontalAlignment(1);
        this._txtAmount.setTextVerticalAlignment(1);
        this._txtAmount.enableOutline(cc.color(24, 24, 24, 255), 2);

    },



});

/**
 * Create PinballRewardWidget
 * @returns {_ccs.PinballRewardWidget}
 */
_ccs.PinballRewardWidget.create = function () {
    return new _ccs.PinballRewardWidget();
};
