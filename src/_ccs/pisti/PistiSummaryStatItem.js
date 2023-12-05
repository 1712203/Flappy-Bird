/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PistiSummaryStatItem
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.PistiSummaryStatItem = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBg: null,
    /** @type {ccui.ImageView} */
    _imgStar: null,
    /** @type {ck.Text} */
    _txtTitle: null,
    /** @type {ccui.ImageView} */
    _imgTitle: null,
    /** @type {ck.Text} */
    _txtAmount: null,


    /**
     * _ccs.PistiSummaryStatItem constructor
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
        _layoutRootLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRootLayoutComponent.setPositionPercentX(0);
        _layoutRootLayoutComponent.setPositionPercentYEnabled(true);
        _layoutRootLayoutComponent.setPositionPercentY(0);
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(346, 51));

        ///// # _imgBg
        this._imgBg = new ccui.ImageView();
        this._imgBg.setName("_imgBg");
        this._layoutRoot.addChild(this._imgBg);
        this._imgBg.setCascadeOpacityEnabled(true);
        this._imgBg.setCascadeColorEnabled(true);
        this._imgBg.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBg, 0.5, 0.5);
        let _imgBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBg);
        _imgBgLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgLayoutComponent.setPositionPercentX(0.5);
        _imgBgLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgLayoutComponent.setPositionPercentY(0.5);
        _imgBgLayoutComponent.setPercentWidthEnabled(true);
        _imgBgLayoutComponent.setPercentWidth(1);
        _imgBgLayoutComponent.setPercentHeightEnabled(true);
        _imgBgLayoutComponent.setPercentHeight(1);
        this._imgBg.loadTexture("game/popups/summary/SummaryBar.png", 1);
        this._imgBg.setUnifySizeEnabled(false);
        this._imgBg.ignoreContentAdaptWithSize(false);
        this._imgBg.setScale9Enabled(true);
        this._imgBg.setCapInsets(cc.rect(114, 16, 118, 19));
        ck.UIUtils.setSizePercent(this._imgBg, 1, 1);
        this._imgBg.setTouchEnabled(false);

        ///// # _imgStar
        this._imgStar = new ccui.ImageView();
        this._imgStar.setName("_imgStar");
        this._layoutRoot.addChild(this._imgStar);
        this._imgStar.setCascadeOpacityEnabled(true);
        this._imgStar.setCascadeColorEnabled(true);
        this._imgStar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStar, 0.06, 0.5);
        this._imgStar.setColor(cc.color(255, 255, 0, 255));
        let _imgStarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStar);
        _imgStarLayoutComponent.setPositionPercentXEnabled(true);
        _imgStarLayoutComponent.setPositionPercentX(0.06);
        _imgStarLayoutComponent.setPositionPercentYEnabled(true);
        _imgStarLayoutComponent.setPositionPercentY(0.5);
        this._imgStar.loadTexture("game/popups/summary/Star.png", 1);
        this._imgStar.setUnifySizeEnabled(false);
        this._imgStar.ignoreContentAdaptWithSize(false);
        this._imgStar.setContentSize(cc.size(26, 25));
        this._imgStar.setTouchEnabled(false);

        ///// # _txtTitle
        this._txtTitle = new ck.Text();
        this._txtTitle.setName("_txtTitle");
        this._layoutRoot.addChild(this._txtTitle);
        this._txtTitle.setCascadeOpacityEnabled(true);
        this._txtTitle.setCascadeColorEnabled(true);
        this._txtTitle.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle, 0.1147, 0.5);
        this._txtTitle.setTextColor(cc.color(254, 181, 87, 255));
        let _txtTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle);
        _txtTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentX(0.1147);
        _txtTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentY(0.5);
        this._txtTitle.setTouchEnabled(false);
        this._txtTitle.ignoreContentAdaptWithSize(true);
        this._txtTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTitle.setDefaultFontSize(32);
        this._txtTitle.setString("WIN");
        this._txtTitle.setTextHorizontalAlignment(0);
        this._txtTitle.setTextVerticalAlignment(1);

        ///// # _imgTitle
        this._imgTitle = new ccui.ImageView();
        this._imgTitle.setName("_imgTitle");
        this._layoutRoot.addChild(this._imgTitle);
        this._imgTitle.setCascadeOpacityEnabled(true);
        this._imgTitle.setCascadeColorEnabled(true);
        this._imgTitle.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTitle, 0.1181, 0.5);
        let _imgTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTitle);
        _imgTitleLayoutComponent.setPositionPercentXEnabled(true);
        _imgTitleLayoutComponent.setPositionPercentX(0.1181);
        _imgTitleLayoutComponent.setPositionPercentYEnabled(true);
        _imgTitleLayoutComponent.setPositionPercentY(0.5);
        this._imgTitle.loadTexture("texts/game/Pisti.png", 1);
        this._imgTitle.setTouchEnabled(false);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._layoutRoot.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.9633, 0.5);
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.9633);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.5);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(true);
        this._txtAmount.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAmount.setDefaultFontSize(32);
        this._txtAmount.setString("50 GAMES");
        this._txtAmount.setTextHorizontalAlignment(2);
        this._txtAmount.setTextVerticalAlignment(1);
        this._txtAmount.enableOutline(cc.color(0, 0, 0, 255), 1);

    },



});

/**
 * Create PistiSummaryStatItem
 * @returns {_ccs.PistiSummaryStatItem}
 */
_ccs.PistiSummaryStatItem.create = function () {
    return new _ccs.PistiSummaryStatItem();
};
