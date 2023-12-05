/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.GetGoldSuggestItem
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.GetGoldSuggestItem = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutIcon: null,
    /** @type {ccui.ImageView} */
    _imgIconBg: null,
    /** @type {ccui.ImageView} */
    _imgFeatureIcon: null,
    /** @type {ck.Text} */
    _txtFeature: null,
    /** @type {ccui.Layout} */
    _layoutGoTo: null,
    /** @type {ccui.ImageView} */
    _imgButton: null,


    /**
     * _ccs.GetGoldSuggestItem constructor
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
        this._layoutRoot.setContentSize(cc.size(480, 135));

        ///// # _layoutIcon
        this._layoutIcon = new ccui.Layout();
        this._layoutIcon.setName("_layoutIcon");
        this._layoutRoot.addChild(this._layoutIcon);
        this._layoutIcon.setCascadeOpacityEnabled(true);
        this._layoutIcon.setCascadeColorEnabled(true);
        this._layoutIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutIcon, 0.55, 0.5);
        let _layoutIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutIcon);
        _layoutIconLayoutComponent.setPositionPercentXEnabled(true);
        _layoutIconLayoutComponent.setPositionPercentX(0.55);
        _layoutIconLayoutComponent.setPositionPercentYEnabled(true);
        _layoutIconLayoutComponent.setPositionPercentY(0.5);
        this._layoutIcon.setTouchEnabled(true);
        this._layoutIcon.setUnifySizeEnabled(false);
        this._layoutIcon.ignoreContentAdaptWithSize(false);
        this._layoutIcon.setContentSize(cc.size(80, 80));

        ///// # _imgIconBg
        this._imgIconBg = new ccui.ImageView();
        this._imgIconBg.setName("_imgIconBg");
        this._layoutIcon.addChild(this._imgIconBg);
        this._imgIconBg.setCascadeOpacityEnabled(true);
        this._imgIconBg.setCascadeColorEnabled(true);
        this._imgIconBg.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconBg, 0.5, 0.5);
        let _imgIconBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconBg);
        _imgIconBgLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconBgLayoutComponent.setPositionPercentX(0.5);
        _imgIconBgLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconBgLayoutComponent.setPositionPercentY(0.5);
        _imgIconBgLayoutComponent.setPercentWidthEnabled(true);
        _imgIconBgLayoutComponent.setPercentWidth(1.2);
        _imgIconBgLayoutComponent.setPercentHeightEnabled(true);
        _imgIconBgLayoutComponent.setPercentHeight(1.2);
        this._imgIconBg.loadTexture("icons/color/events/IconEventBackground.png", 1);
        this._imgIconBg.setUnifySizeEnabled(false);
        this._imgIconBg.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgIconBg, 1.2, 1.2);
        this._imgIconBg.setTouchEnabled(false);

        ///// # _imgFeatureIcon
        this._imgFeatureIcon = new ccui.ImageView();
        this._imgFeatureIcon.setName("_imgFeatureIcon");
        this._layoutIcon.addChild(this._imgFeatureIcon);
        this._imgFeatureIcon.setCascadeOpacityEnabled(true);
        this._imgFeatureIcon.setCascadeColorEnabled(true);
        this._imgFeatureIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgFeatureIcon, 0.52, 0.5);
        this._imgFeatureIcon.setScale(0.6, 0.6);
        let _imgFeatureIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFeatureIcon);
        _imgFeatureIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgFeatureIconLayoutComponent.setPositionPercentX(0.52);
        _imgFeatureIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgFeatureIconLayoutComponent.setPositionPercentY(0.5);
        this._imgFeatureIcon.loadTexture("home/IconPinball.png", 1);
        this._imgFeatureIcon.setUnifySizeEnabled(false);
        this._imgFeatureIcon.ignoreContentAdaptWithSize(false);
        this._imgFeatureIcon.setContentSize(cc.size(120, 84));
        this._imgFeatureIcon.setTouchEnabled(false);

        ///// # _txtFeature
        this._txtFeature = new ck.Text();
        this._txtFeature.setName("_txtFeature");
        this._layoutRoot.addChild(this._txtFeature);
        this._txtFeature.setCascadeOpacityEnabled(true);
        this._txtFeature.setCascadeColorEnabled(true);
        this._txtFeature.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtFeature, 0.02, 0.5);
        let _txtFeatureLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtFeature);
        _txtFeatureLayoutComponent.setPositionPercentXEnabled(true);
        _txtFeatureLayoutComponent.setPositionPercentX(0.02);
        _txtFeatureLayoutComponent.setPositionPercentYEnabled(true);
        _txtFeatureLayoutComponent.setPositionPercentY(0.5);
        this._txtFeature.setTouchEnabled(false);
        this._txtFeature.setUnifySizeEnabled(false);
        this._txtFeature.ignoreContentAdaptWithSize(false);
        this._txtFeature.setContentSize(cc.size(205.5322, 45));
        this._txtFeature.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtFeature.setDefaultFontSize(40);
        this._txtFeature.setString(gm.localize.getText("TXT_FEATURE_NAME"));
        this._txtFeature.setTextHorizontalAlignment(0);
        this._txtFeature.setTextVerticalAlignment(1);
        this._txtFeature.enableShadow(cc.color(45, 93, 84, 255), cc.size(0, -2), 0);
        this._txtFeature.autoFitSingleLine();

        ///// # _layoutGoTo
        this._layoutGoTo = new ccui.Layout();
        this._layoutGoTo.setName("_layoutGoTo");
        this._layoutRoot.addChild(this._layoutGoTo);
        this._layoutGoTo.setCascadeOpacityEnabled(true);
        this._layoutGoTo.setCascadeColorEnabled(true);
        this._layoutGoTo.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutGoTo, 0.83, 0.5);
        let _layoutGoToLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGoTo);
        _layoutGoToLayoutComponent.setPositionPercentXEnabled(true);
        _layoutGoToLayoutComponent.setPositionPercentX(0.83);
        _layoutGoToLayoutComponent.setPositionPercentYEnabled(true);
        _layoutGoToLayoutComponent.setPositionPercentY(0.5);
        this._layoutGoTo.setTouchEnabled(false);
        this._layoutGoTo.setUnifySizeEnabled(false);
        this._layoutGoTo.ignoreContentAdaptWithSize(false);
        this._layoutGoTo.setContentSize(cc.size(113, 64));

        ///// # _imgButton
        this._imgButton = new ccui.ImageView();
        this._imgButton.setName("_imgButton");
        this._layoutGoTo.addChild(this._imgButton);
        this._imgButton.setCascadeOpacityEnabled(true);
        this._imgButton.setCascadeColorEnabled(true);
        this._imgButton.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButton, 0.5, 0.5);
        let _imgButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButton);
        _imgButtonLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonLayoutComponent.setPositionPercentX(0.5);
        _imgButtonLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonLayoutComponent.setPositionPercentY(0.5);
        this._imgButton.loadTexture("buttons/rectangles/GoTo.png", 1);
        this._imgButton.setUnifySizeEnabled(false);
        this._imgButton.ignoreContentAdaptWithSize(false);
        this._imgButton.setContentSize(cc.size(113, 64));
        this._imgButton.setTouchEnabled(false);

    },



});

/**
 * Create GetGoldSuggestItem
 * @returns {_ccs.GetGoldSuggestItem}
 */
_ccs.GetGoldSuggestItem.create = function () {
    return new _ccs.GetGoldSuggestItem();
};
