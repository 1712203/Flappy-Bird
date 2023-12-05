/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.RankingMedalWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.RankingMedalWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ccui.ImageView} */
    _imgAmount: null,
    /** @type {ck.Text} */
    _txtAmount: null,
    /** @type {ccui.ImageView} */
    _imgLight: null,


    /**
     * _ccs.RankingMedalWidget constructor
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
        this._layoutRoot.setAnchorPoint(cc.p(0.5, 0));
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(150, 250));

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._layoutRoot.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.4);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.4);
        this._imgIcon.loadTexture("icons/color/ranking/medals/02/1st.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(150, 150));
        this._imgIcon.setTouchEnabled(false);

        ///// # _imgAmount
        this._imgAmount = new ccui.ImageView();
        this._imgAmount.setName("_imgAmount");
        this._layoutRoot.addChild(this._imgAmount);
        this._imgAmount.setCascadeOpacityEnabled(true);
        this._imgAmount.setCascadeColorEnabled(true);
        this._imgAmount.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._imgAmount, 0.9333, 0.06);
        let _imgAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgAmount);
        this._imgAmount.loadTexture("basics/other/NumberBox.png", 1);
        this._imgAmount.setUnifySizeEnabled(false);
        this._imgAmount.ignoreContentAdaptWithSize(false);
        this._imgAmount.setContentSize(cc.size(40, 40));
        this._imgAmount.setTouchEnabled(false);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._imgAmount.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.5, 0.5);
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.5);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.5);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(true);
        this._txtAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmount.setDefaultFontSize(24);
        this._txtAmount.setTextHorizontalAlignment(1);
        this._txtAmount.setTextVerticalAlignment(1);
        this._txtAmount.enableOutline(cc.color(0, 74, 0, 255), 2);

        ///// # _imgLight
        this._imgLight = new ccui.ImageView();
        this._imgLight.setName("_imgLight");
        this._layoutRoot.addChild(this._imgLight);
        this._imgLight.setCascadeOpacityEnabled(true);
        this._imgLight.setCascadeColorEnabled(true);
        this._imgLight.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgLight, 0.5, 0.3267);
        let _imgLightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLight);
        _imgLightLayoutComponent.setPositionPercentXEnabled(true);
        _imgLightLayoutComponent.setPositionPercentX(0.5);
        this._imgLight.loadTexture("basics/effects/Light.png", 1);
        this._imgLight.setUnifySizeEnabled(false);
        this._imgLight.ignoreContentAdaptWithSize(false);
        this._imgLight.setContentSize(cc.size(113, 178));
        this._imgLight.setTouchEnabled(false);

    },



});

/**
 * Create RankingMedalWidget
 * @returns {_ccs.RankingMedalWidget}
 */
_ccs.RankingMedalWidget.create = function () {
    return new _ccs.RankingMedalWidget();
};
