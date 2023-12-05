/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.WheelXChoicesPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.WheelXChoicesPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBg: null,
    /** @type {ck.Text} */
    _txtTitle: null,
    /** @type {ck.GridViewVertical} */
    _gridRewards: null,
    /** @type {ccui.Layout} */
    _layoutClose: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.ImageView} */
    _imgChange: null,
    /** @type {ck.Text} */
    _txtChange: null,


    /**
     * _ccs.WheelXChoicesPopup constructor
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
        this._layoutRoot.setAnchorPoint(cc.p(0.5, 1));
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        _layoutRootLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRootLayoutComponent.setPositionPercentX(0);
        _layoutRootLayoutComponent.setPositionPercentYEnabled(true);
        _layoutRootLayoutComponent.setPositionPercentY(0);
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(240, 220));

        ///// # _imgBg
        this._imgBg = new ccui.ImageView();
        this._imgBg.setName("_imgBg");
        this._layoutRoot.addChild(this._imgBg);
        this._imgBg.setCascadeOpacityEnabled(true);
        this._imgBg.setCascadeColorEnabled(true);
        this._imgBg.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBg, 0.5, 1);
        let _imgBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBg);
        _imgBgLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgLayoutComponent.setPositionPercentX(0.5);
        _imgBgLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgLayoutComponent.setPositionPercentY(1);
        _imgBgLayoutComponent.setPercentWidthEnabled(true);
        _imgBgLayoutComponent.setPercentWidth(1);
        _imgBgLayoutComponent.setPercentHeightEnabled(true);
        _imgBgLayoutComponent.setPercentHeight(1);
        this._imgBg.loadTexture("dual-wheel/Box_Item.png", 1);
        this._imgBg.setUnifySizeEnabled(false);
        this._imgBg.ignoreContentAdaptWithSize(false);
        this._imgBg.setScale9Enabled(true);
        this._imgBg.setCapInsets(cc.rect(62, 70, 258, 88));
        ck.UIUtils.setSizePercent(this._imgBg, 1, 1);
        this._imgBg.setTouchEnabled(false);

        ///// # _txtTitle
        this._txtTitle = new ck.Text();
        this._txtTitle.setName("_txtTitle");
        this._layoutRoot.addChild(this._txtTitle);
        this._txtTitle.setCascadeOpacityEnabled(true);
        this._txtTitle.setCascadeColorEnabled(true);
        this._txtTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle, 0.5, 0.7829);
        let _txtTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle);
        _txtTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentX(0.5);
        _txtTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentY(0.7829);
        this._txtTitle.setTouchEnabled(false);
        this._txtTitle.ignoreContentAdaptWithSize(true);
        this._txtTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTitle.setDefaultFontSize(23);
        this._txtTitle.setTextHorizontalAlignment(1);
        this._txtTitle.setTextVerticalAlignment(1);

        ///// # _gridRewards
        this._gridRewards = new ck.GridViewVertical();
        this._gridRewards.setName("_gridRewards");
        this._layoutRoot.addChild(this._gridRewards);
        this._gridRewards.setCascadeOpacityEnabled(true);
        this._gridRewards.setCascadeColorEnabled(true);
        this._gridRewards.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._gridRewards, 0.5, 0.6045);
        let _gridRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridRewards);
        _gridRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentX(0.5);
        _gridRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentY(0.6045);

        ///// # _layoutClose
        this._layoutClose = new ccui.Layout();
        this._layoutClose.setName("_layoutClose");
        this._layoutRoot.addChild(this._layoutClose);
        this._layoutClose.setCascadeOpacityEnabled(true);
        this._layoutClose.setCascadeColorEnabled(true);
        this._layoutClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutClose, 0.9738, 0.8238);
        this._layoutClose.setScale(0.58, 0.58);
        let _layoutCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutClose);
        _layoutCloseLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentX(0.9738);
        _layoutCloseLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentY(0.8238);
        this._layoutClose.setTouchEnabled(true);
        this._layoutClose.setUnifySizeEnabled(false);
        this._layoutClose.ignoreContentAdaptWithSize(false);
        this._layoutClose.setContentSize(cc.size(85.1814, 76.7702));

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._layoutClose.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.3401, 0.8573);
        this._imgClose.setScale(0.8, 0.8);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.3401);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.8573);
        this._imgClose.loadTexture("buttons/circles/CloseCircle.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(96, 108));
        this._imgClose.setTouchEnabled(false);

        ///// # _imgChange
        this._imgChange = new ccui.ImageView();
        this._imgChange.setName("_imgChange");
        this._layoutRoot.addChild(this._imgChange);
        this._imgChange.setCascadeOpacityEnabled(true);
        this._imgChange.setCascadeColorEnabled(true);
        this._imgChange.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgChange, 0.5, -0.0167);
        let _imgChangeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgChange);
        _imgChangeLayoutComponent.setPositionPercentXEnabled(true);
        _imgChangeLayoutComponent.setPositionPercentX(0.5);
        _imgChangeLayoutComponent.setPositionPercentYEnabled(true);
        _imgChangeLayoutComponent.setPositionPercentY(-0.0167);
        this._imgChange.loadTexture("buttons/rectangles/Yellow_02.png", 1);
        this._imgChange.setUnifySizeEnabled(false);
        this._imgChange.ignoreContentAdaptWithSize(false);
        this._imgChange.setContentSize(cc.size(100, 45));
        this._imgChange.setTouchEnabled(true);

        ///// # _txtChange
        this._txtChange = new ck.Text();
        this._txtChange.setName("_txtChange");
        this._imgChange.addChild(this._txtChange);
        this._txtChange.setCascadeOpacityEnabled(true);
        this._txtChange.setCascadeColorEnabled(true);
        this._txtChange.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtChange, 0.5, 0.5944);
        this._txtChange.setTextColor(cc.color(77, 77, 77, 255));
        let _txtChangeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtChange);
        _txtChangeLayoutComponent.setPositionPercentXEnabled(true);
        _txtChangeLayoutComponent.setPositionPercentX(0.5);
        _txtChangeLayoutComponent.setPositionPercentYEnabled(true);
        _txtChangeLayoutComponent.setPositionPercentY(0.5944);
        this._txtChange.setTouchEnabled(false);
        this._txtChange.ignoreContentAdaptWithSize(true);
        this._txtChange.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtChange.setDefaultFontSize(30);
        this._txtChange.setString(gm.localize.getText("TXT_OK"));
        this._txtChange.setTextHorizontalAlignment(1);
        this._txtChange.setTextVerticalAlignment(1);

    },



});

/**
 * Create WheelXChoicesPopup
 * @returns {_ccs.WheelXChoicesPopup}
 */
_ccs.WheelXChoicesPopup.create = function () {
    return new _ccs.WheelXChoicesPopup();
};
