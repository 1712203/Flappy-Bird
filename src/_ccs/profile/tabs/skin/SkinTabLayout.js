/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.SkinTabLayout
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.SkinTabLayout = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ccui.ImageView} */
    _imgBase: null,
    /** @type {ccui.Layout} */
    _layoutSkinBig: null,
    /** @type {ccui.ImageView} */
    _imgTitleSkinBgr: null,
    /** @type {ck.Text} */
    _txtTitleSkin: null,
    /** @type {ck.Text} */
    _txtDescriptionSkin: null,
    /** @type {ck.Text} */
    _txtDescriptionSkinSpecial: null,
    /** @type {ccui.ImageView} */
    _imgButtonUseSkin: null,
    /** @type {ck.Text} */
    _txtButtonUseSkin: null,
    /** @type {ccui.ImageView} */
    _imgTabLine: null,
    /** @type {ck.TabSelector} */
    _tabSelector: null,
    /** @type {ccui.Layout} */
    _layoutMid: null,


    /**
     * _ccs.SkinTabLayout constructor
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
        this._layoutRoot.setTouchEnabled(true);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(640, 1136));

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._layoutRoot.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBgr, 0.5, 1);
        let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
        _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentY(1);
        this._imgBgr.loadTexture("sprites/backgrounds/Blue.png", 0);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setContentSize(cc.size(640, 451));
        this._imgBgr.setTouchEnabled(false);

        ///// # _imgBase
        this._imgBase = new ccui.ImageView();
        this._imgBase.setName("_imgBase");
        this._layoutRoot.addChild(this._imgBase);
        this._imgBase.setCascadeOpacityEnabled(true);
        this._imgBase.setCascadeColorEnabled(true);
        this._imgBase.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBase, 0, 0.7);
        let _imgBaseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBase);
        _imgBaseLayoutComponent.setPositionPercentXEnabled(true);
        _imgBaseLayoutComponent.setPositionPercentX(0);
        _imgBaseLayoutComponent.setPositionPercentYEnabled(true);
        _imgBaseLayoutComponent.setPositionPercentY(0.7);
        this._imgBase.loadTexture("basics/other/Base.png", 1);
        this._imgBase.setUnifySizeEnabled(false);
        this._imgBase.ignoreContentAdaptWithSize(false);
        this._imgBase.setContentSize(cc.size(320, 102));
        this._imgBase.setTouchEnabled(false);

        ///// # _layoutSkinBig
        this._layoutSkinBig = new ccui.Layout();
        this._layoutSkinBig.setName("_layoutSkinBig");
        this._imgBase.addChild(this._layoutSkinBig);
        this._layoutSkinBig.setCascadeOpacityEnabled(true);
        this._layoutSkinBig.setCascadeColorEnabled(true);
        this._layoutSkinBig.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutSkinBig, 0.5, 0.5);
        let _layoutSkinBigLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSkinBig);
        _layoutSkinBigLayoutComponent.setPositionPercentXEnabled(true);
        _layoutSkinBigLayoutComponent.setPositionPercentX(0.5);
        _layoutSkinBigLayoutComponent.setPositionPercentYEnabled(true);
        _layoutSkinBigLayoutComponent.setPositionPercentY(0.5);
        this._layoutSkinBig.setTouchEnabled(true);
        this._layoutSkinBig.setUnifySizeEnabled(false);
        this._layoutSkinBig.ignoreContentAdaptWithSize(false);
        this._layoutSkinBig.setContentSize(cc.size(260, 260));

        ///// # _imgTitleSkinBgr
        this._imgTitleSkinBgr = new ccui.ImageView();
        this._imgTitleSkinBgr.setName("_imgTitleSkinBgr");
        this._layoutRoot.addChild(this._imgTitleSkinBgr);
        this._imgTitleSkinBgr.setCascadeOpacityEnabled(true);
        this._imgTitleSkinBgr.setCascadeColorEnabled(true);
        this._imgTitleSkinBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTitleSkinBgr, 0.75, 0.9);
        let _imgTitleSkinBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTitleSkinBgr);
        _imgTitleSkinBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgTitleSkinBgrLayoutComponent.setPositionPercentX(0.75);
        _imgTitleSkinBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgTitleSkinBgrLayoutComponent.setPositionPercentY(0.9);
        this._imgTitleSkinBgr.loadTexture("basics/other/BoardBlue_03.png", 1);
        this._imgTitleSkinBgr.setUnifySizeEnabled(false);
        this._imgTitleSkinBgr.ignoreContentAdaptWithSize(false);
        this._imgTitleSkinBgr.setContentSize(cc.size(157, 49));
        this._imgTitleSkinBgr.setTouchEnabled(false);

        ///// # _txtTitleSkin
        this._txtTitleSkin = new ck.Text();
        this._txtTitleSkin.setName("_txtTitleSkin");
        this._imgTitleSkinBgr.addChild(this._txtTitleSkin);
        this._txtTitleSkin.setCascadeOpacityEnabled(true);
        this._txtTitleSkin.setCascadeColorEnabled(true);
        this._txtTitleSkin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitleSkin, 0.5, 0.5);
        let _txtTitleSkinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitleSkin);
        _txtTitleSkinLayoutComponent.setPositionPercentXEnabled(true);
        _txtTitleSkinLayoutComponent.setPositionPercentX(0.5);
        _txtTitleSkinLayoutComponent.setPositionPercentYEnabled(true);
        _txtTitleSkinLayoutComponent.setPositionPercentY(0.5);
        this._txtTitleSkin.setTouchEnabled(false);
        this._txtTitleSkin.setUnifySizeEnabled(false);
        this._txtTitleSkin.ignoreContentAdaptWithSize(false);
        this._txtTitleSkin.setContentSize(cc.size(148, 40));
        this._txtTitleSkin.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTitleSkin.setDefaultFontSize(36);
        this._txtTitleSkin.setString(gm.localize.getText("TXT_DRAGON"));
        this._txtTitleSkin.setTextHorizontalAlignment(1);
        this._txtTitleSkin.setTextVerticalAlignment(1);
        this._txtTitleSkin.enableShadow(cc.color(82, 101, 154, 255), cc.size(0, -3), 0);
        this._txtTitleSkin.autoFitSingleLine();

        ///// # _txtDescriptionSkin
        this._txtDescriptionSkin = new ck.Text();
        this._txtDescriptionSkin.setName("_txtDescriptionSkin");
        this._layoutRoot.addChild(this._txtDescriptionSkin);
        this._txtDescriptionSkin.setCascadeOpacityEnabled(true);
        this._txtDescriptionSkin.setCascadeColorEnabled(true);
        this._txtDescriptionSkin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDescriptionSkin, 0.75, 0.835);
        this._txtDescriptionSkin.setTextColor(cc.color(82, 101, 154, 255));
        let _txtDescriptionSkinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDescriptionSkin);
        _txtDescriptionSkinLayoutComponent.setPositionPercentXEnabled(true);
        _txtDescriptionSkinLayoutComponent.setPositionPercentX(0.75);
        _txtDescriptionSkinLayoutComponent.setPositionPercentYEnabled(true);
        _txtDescriptionSkinLayoutComponent.setPositionPercentY(0.835);
        this._txtDescriptionSkin.setTouchEnabled(false);
        this._txtDescriptionSkin.setUnifySizeEnabled(false);
        this._txtDescriptionSkin.ignoreContentAdaptWithSize(false);
        this._txtDescriptionSkin.setContentSize(cc.size(283, 80));
        this._txtDescriptionSkin.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDescriptionSkin.setDefaultFontSize(36);
        this._txtDescriptionSkin.setTextHorizontalAlignment(1);
        this._txtDescriptionSkin.setTextVerticalAlignment(1);
        this._txtDescriptionSkin.autoFitMultipleLine();

        ///// # _txtDescriptionSkinSpecial
        this._txtDescriptionSkinSpecial = new ck.Text();
        this._txtDescriptionSkinSpecial.setName("_txtDescriptionSkinSpecial");
        this._txtDescriptionSkin.addChild(this._txtDescriptionSkinSpecial);
        this._txtDescriptionSkinSpecial.setCascadeOpacityEnabled(true);
        this._txtDescriptionSkinSpecial.setCascadeColorEnabled(true);
        this._txtDescriptionSkinSpecial.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._txtDescriptionSkinSpecial, 0.5, 0);
        this._txtDescriptionSkinSpecial.setTextColor(cc.color(69, 239, 36, 255));
        let _txtDescriptionSkinSpecialLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDescriptionSkinSpecial);
        _txtDescriptionSkinSpecialLayoutComponent.setPositionPercentXEnabled(true);
        _txtDescriptionSkinSpecialLayoutComponent.setPositionPercentX(0.5);
        _txtDescriptionSkinSpecialLayoutComponent.setPositionPercentYEnabled(true);
        _txtDescriptionSkinSpecialLayoutComponent.setPositionPercentY(0);
        this._txtDescriptionSkinSpecial.setTouchEnabled(false);
        this._txtDescriptionSkinSpecial.setUnifySizeEnabled(false);
        this._txtDescriptionSkinSpecial.ignoreContentAdaptWithSize(false);
        this._txtDescriptionSkinSpecial.setContentSize(cc.size(283, 40));
        this._txtDescriptionSkinSpecial.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDescriptionSkinSpecial.setDefaultFontSize(36);
        this._txtDescriptionSkinSpecial.setTextHorizontalAlignment(1);
        this._txtDescriptionSkinSpecial.setTextVerticalAlignment(1);
        this._txtDescriptionSkinSpecial.autoFitSingleLine();

        ///// # _imgButtonUseSkin
        this._imgButtonUseSkin = new ccui.ImageView();
        this._imgButtonUseSkin.setName("_imgButtonUseSkin");
        this._layoutRoot.addChild(this._imgButtonUseSkin);
        this._imgButtonUseSkin.setCascadeOpacityEnabled(true);
        this._imgButtonUseSkin.setCascadeColorEnabled(true);
        this._imgButtonUseSkin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonUseSkin, 0.75, 0.72);
        let _imgButtonUseSkinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonUseSkin);
        _imgButtonUseSkinLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonUseSkinLayoutComponent.setPositionPercentX(0.75);
        _imgButtonUseSkinLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonUseSkinLayoutComponent.setPositionPercentY(0.72);
        this._imgButtonUseSkin.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgButtonUseSkin.setUnifySizeEnabled(false);
        this._imgButtonUseSkin.ignoreContentAdaptWithSize(false);
        this._imgButtonUseSkin.setContentSize(cc.size(206, 81));
        this._imgButtonUseSkin.setTouchEnabled(false);

        ///// # _txtButtonUseSkin
        this._txtButtonUseSkin = new ck.Text();
        this._txtButtonUseSkin.setName("_txtButtonUseSkin");
        this._imgButtonUseSkin.addChild(this._txtButtonUseSkin);
        this._txtButtonUseSkin.setCascadeOpacityEnabled(true);
        this._txtButtonUseSkin.setCascadeColorEnabled(true);
        this._txtButtonUseSkin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonUseSkin, 0.5, 0.5);
        let _txtButtonUseSkinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonUseSkin);
        _txtButtonUseSkinLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonUseSkinLayoutComponent.setPositionPercentX(0.5);
        _txtButtonUseSkinLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonUseSkinLayoutComponent.setPositionPercentY(0.5);
        this._txtButtonUseSkin.setTouchEnabled(false);
        this._txtButtonUseSkin.setUnifySizeEnabled(false);
        this._txtButtonUseSkin.ignoreContentAdaptWithSize(false);
        this._txtButtonUseSkin.setContentSize(cc.size(176, 45));
        this._txtButtonUseSkin.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonUseSkin.setDefaultFontSize(40);
        this._txtButtonUseSkin.setString(gm.localize.getText("TXT_USE"));
        this._txtButtonUseSkin.setTextHorizontalAlignment(1);
        this._txtButtonUseSkin.setTextVerticalAlignment(1);
        this._txtButtonUseSkin.autoFitSingleLine();

        ///// # _imgTabLine
        this._imgTabLine = new ccui.ImageView();
        this._imgTabLine.setName("_imgTabLine");
        this._layoutRoot.addChild(this._imgTabLine);
        this._imgTabLine.setCascadeOpacityEnabled(true);
        this._imgTabLine.setCascadeColorEnabled(true);
        this._imgTabLine.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgTabLine, 0.5, 0.599);
        let _imgTabLineLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTabLine);
        _imgTabLineLayoutComponent.setPositionPercentXEnabled(true);
        _imgTabLineLayoutComponent.setPositionPercentX(0.5);
        _imgTabLineLayoutComponent.setPositionPercentYEnabled(true);
        _imgTabLineLayoutComponent.setPositionPercentY(0.599);
        this._imgTabLine.loadTexture("basics/tabs/Tab05.png", 1);
        this._imgTabLine.setUnifySizeEnabled(false);
        this._imgTabLine.ignoreContentAdaptWithSize(false);
        this._imgTabLine.setContentSize(cc.size(640, 14));
        this._imgTabLine.setTouchEnabled(false);

        ///// # _tabSelector
        this._tabSelector = new ck.TabSelector();
        this._tabSelector.setName("_tabSelector");
        this._layoutRoot.addChild(this._tabSelector);
        this._tabSelector.setCascadeOpacityEnabled(true);
        this._tabSelector.setCascadeColorEnabled(true);
        this._tabSelector.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._tabSelector, 0.5, 0.61);
        let _tabSelectorLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._tabSelector);
        _tabSelectorLayoutComponent.setPositionPercentXEnabled(true);
        _tabSelectorLayoutComponent.setPositionPercentX(0.5);
        _tabSelectorLayoutComponent.setPositionPercentYEnabled(true);
        _tabSelectorLayoutComponent.setPositionPercentY(0.61);
        _tabSelectorLayoutComponent.setPercentWidthEnabled(true);
        _tabSelectorLayoutComponent.setPercentWidth(1);

        ///// # _layoutMid
        this._layoutMid = new ccui.Layout();
        this._layoutMid.setName("_layoutMid");
        this._layoutRoot.addChild(this._layoutMid);
        this._layoutMid.setCascadeOpacityEnabled(true);
        this._layoutMid.setCascadeColorEnabled(true);
        this._layoutMid.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutMid, 0.5, 0.599);
        let _layoutMidLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutMid);
        _layoutMidLayoutComponent.setPositionPercentXEnabled(true);
        _layoutMidLayoutComponent.setPositionPercentX(0.5);
        _layoutMidLayoutComponent.setPercentWidthEnabled(true);
        _layoutMidLayoutComponent.setPercentWidth(1);
        this._layoutMid.setTouchEnabled(true);
        this._layoutMid.setUnifySizeEnabled(false);
        this._layoutMid.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutMid, 1);
        this._layoutMid.setContentSize(cc.size(this._layoutMid.width, 580.46));

    },



});

/**
 * Create SkinTabLayout
 * @returns {_ccs.SkinTabLayout}
 */
_ccs.SkinTabLayout.create = function () {
    return new _ccs.SkinTabLayout();
};
