/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.TrophyAlbumOpenWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.TrophyAlbumOpenWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgAlbum: null,
    /** @type {ccui.Layout} */
    _layoutAlbumForSpine: null,
    /** @type {ccui.Layout} */
    _layoutWidgetsForSpine: null,
    /** @type {ccui.ScrollView} */
    _scrollViewForSpine: null,
    /** @type {ccui.Layout} */
    _layoutAlbumRibbon: null,
    /** @type {ccui.PageView} */
    _pageViewWidgets: null,
    /** @type {ccui.Button} */
    _btnArrowLeft: null,
    /** @type {ccui.Button} */
    _btnArrowRight: null,
    /** @type {ccui.ImageView} */
    _imgDescriptionBgr: null,
    /** @type {ccui.ImageView} */
    _imgTotalBuffBox: null,
    /** @type {ck.Text} */
    _txtTotalBuff: null,
    /** @type {ck.Text} */
    _txtDescription: null,


    /**
     * _ccs.TrophyAlbumOpenWidget constructor
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
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(580, 785));

        ///// # _imgAlbum
        this._imgAlbum = new ccui.ImageView();
        this._imgAlbum.setName("_imgAlbum");
        this._layoutRoot.addChild(this._imgAlbum);
        this._imgAlbum.setCascadeOpacityEnabled(true);
        this._imgAlbum.setCascadeColorEnabled(true);
        this._imgAlbum.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgAlbum, 0.5, 0.4);
        let _imgAlbumLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgAlbum);
        _imgAlbumLayoutComponent.setPositionPercentXEnabled(true);
        _imgAlbumLayoutComponent.setPositionPercentX(0.5);
        _imgAlbumLayoutComponent.setPositionPercentYEnabled(true);
        _imgAlbumLayoutComponent.setPositionPercentY(0.4);
        this._imgAlbum.loadTexture("trophy/book/BookOpen.png", 1);
        this._imgAlbum.setUnifySizeEnabled(false);
        this._imgAlbum.ignoreContentAdaptWithSize(false);
        this._imgAlbum.setScale9Enabled(true);
        this._imgAlbum.setCapInsets(cc.rect(69, 57, 442, 671));
        this._imgAlbum.setContentSize(cc.size(580, 785));
        this._imgAlbum.setTouchEnabled(false);

        ///// # _layoutAlbumForSpine
        this._layoutAlbumForSpine = new ccui.Layout();
        this._layoutAlbumForSpine.setName("_layoutAlbumForSpine");
        this._layoutRoot.addChild(this._layoutAlbumForSpine);
        this._layoutAlbumForSpine.setCascadeOpacityEnabled(true);
        this._layoutAlbumForSpine.setCascadeColorEnabled(true);
        this._layoutAlbumForSpine.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutAlbumForSpine, 0.48, 0.4);
        let _layoutAlbumForSpineLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAlbumForSpine);
        _layoutAlbumForSpineLayoutComponent.setPositionPercentYEnabled(true);
        _layoutAlbumForSpineLayoutComponent.setPositionPercentY(0.4);
        this._layoutAlbumForSpine.setTouchEnabled(false);
        this._layoutAlbumForSpine.setUnifySizeEnabled(false);
        this._layoutAlbumForSpine.ignoreContentAdaptWithSize(false);
        this._layoutAlbumForSpine.setContentSize(cc.size(580, 785));

        ///// # _layoutWidgetsForSpine
        this._layoutWidgetsForSpine = new ccui.Layout();
        this._layoutWidgetsForSpine.setName("_layoutWidgetsForSpine");
        this._layoutAlbumForSpine.addChild(this._layoutWidgetsForSpine);
        this._layoutWidgetsForSpine.setCascadeOpacityEnabled(true);
        this._layoutWidgetsForSpine.setCascadeColorEnabled(true);
        this._layoutWidgetsForSpine.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutWidgetsForSpine, 0.56, 0.5127);
        let _layoutWidgetsForSpineLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutWidgetsForSpine);
        _layoutWidgetsForSpineLayoutComponent.setPositionPercentXEnabled(true);
        _layoutWidgetsForSpineLayoutComponent.setPositionPercentX(0.56);
        _layoutWidgetsForSpineLayoutComponent.setPositionPercentYEnabled(true);
        _layoutWidgetsForSpineLayoutComponent.setPositionPercentY(0.5127);
        this._layoutWidgetsForSpine.setTouchEnabled(false);
        this._layoutWidgetsForSpine.setUnifySizeEnabled(false);
        this._layoutWidgetsForSpine.ignoreContentAdaptWithSize(false);
        this._layoutWidgetsForSpine.setContentSize(cc.size(395, 420));

        ///// # _scrollViewForSpine
        this._scrollViewForSpine = new ccui.ScrollView();
        this._scrollViewForSpine.setName("_scrollViewForSpine");
        this._layoutAlbumForSpine.addChild(this._scrollViewForSpine);
        this._scrollViewForSpine.setCascadeOpacityEnabled(true);
        this._scrollViewForSpine.setCascadeColorEnabled(true);
        this._scrollViewForSpine.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._scrollViewForSpine, 0.56, 0.522);
        let _scrollViewForSpineLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._scrollViewForSpine);
        _scrollViewForSpineLayoutComponent.setPositionPercentXEnabled(true);
        _scrollViewForSpineLayoutComponent.setPositionPercentX(0.56);
        _scrollViewForSpineLayoutComponent.setPositionPercentYEnabled(true);
        _scrollViewForSpineLayoutComponent.setPositionPercentY(0.522);
        this._scrollViewForSpine.setTouchEnabled(true);
        this._scrollViewForSpine.setUnifySizeEnabled(false);
        this._scrollViewForSpine.ignoreContentAdaptWithSize(false);
        this._scrollViewForSpine.setContentSize(cc.size(430, 620));
        this._scrollViewForSpine.setInnerContainerSize(cc.size(430, 620));
        this._scrollViewForSpine.setDirection(2);

        ///// # _layoutAlbumRibbon
        this._layoutAlbumRibbon = new ccui.Layout();
        this._layoutAlbumRibbon.setName("_layoutAlbumRibbon");
        this._layoutAlbumForSpine.addChild(this._layoutAlbumRibbon);
        this._layoutAlbumRibbon.setCascadeOpacityEnabled(true);
        this._layoutAlbumRibbon.setCascadeColorEnabled(true);
        this._layoutAlbumRibbon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutAlbumRibbon, 0.368, 0.1073);
        let _layoutAlbumRibbonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAlbumRibbon);
        _layoutAlbumRibbonLayoutComponent.setPositionPercentXEnabled(true);
        _layoutAlbumRibbonLayoutComponent.setPositionPercentX(0.368);
        _layoutAlbumRibbonLayoutComponent.setPositionPercentYEnabled(true);
        _layoutAlbumRibbonLayoutComponent.setPositionPercentY(0.1073);
        this._layoutAlbumRibbon.setTouchEnabled(false);
        this._layoutAlbumRibbon.setUnifySizeEnabled(false);
        this._layoutAlbumRibbon.ignoreContentAdaptWithSize(false);
        this._layoutAlbumRibbon.setContentSize(cc.size(66, 59));

        ///// # _pageViewWidgets
        this._pageViewWidgets = new ccui.PageView();
        this._pageViewWidgets.setName("_pageViewWidgets");
        this._layoutRoot.addChild(this._pageViewWidgets);
        this._pageViewWidgets.setCascadeOpacityEnabled(true);
        this._pageViewWidgets.setCascadeColorEnabled(true);
        this._pageViewWidgets.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._pageViewWidgets, 0.5535, 0.4127);
        let _pageViewWidgetsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._pageViewWidgets);
        _pageViewWidgetsLayoutComponent.setPositionPercentXEnabled(true);
        _pageViewWidgetsLayoutComponent.setPositionPercentX(0.5535);
        _pageViewWidgetsLayoutComponent.setPositionPercentYEnabled(true);
        _pageViewWidgetsLayoutComponent.setPositionPercentY(0.4127);
        this._pageViewWidgets.setTouchEnabled(true);
        this._pageViewWidgets.setUnifySizeEnabled(false);
        this._pageViewWidgets.ignoreContentAdaptWithSize(false);
        this._pageViewWidgets.setContentSize(cc.size(395, 420));

        ///// # _btnArrowLeft
        this._btnArrowLeft = new ccui.Button();
        this._btnArrowLeft.setName("_btnArrowLeft");
        this._layoutRoot.addChild(this._btnArrowLeft);
        this._btnArrowLeft.setCascadeOpacityEnabled(true);
        this._btnArrowLeft.setCascadeColorEnabled(true);
        this._btnArrowLeft.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._btnArrowLeft, 0.52, -0.04);
        let _btnArrowLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnArrowLeft);
        _btnArrowLeftLayoutComponent.setPositionPercentXEnabled(true);
        _btnArrowLeftLayoutComponent.setPositionPercentX(0.52);
        _btnArrowLeftLayoutComponent.setPositionPercentYEnabled(true);
        _btnArrowLeftLayoutComponent.setPositionPercentY(-0.04);
        this._btnArrowLeft.loadTextureDisabled("basics2/arrows/Arrow_01_Left.png", 1);
        this._btnArrowLeft.loadTexturePressed("basics2/arrows/Arrow_01_Left.png", 1);
        this._btnArrowLeft.loadTextureNormal("basics2/arrows/Arrow_01_Left.png", 1);
        this._btnArrowLeft.setUnifySizeEnabled(false);
        this._btnArrowLeft.ignoreContentAdaptWithSize(false);
        this._btnArrowLeft.setContentSize(cc.size(84, 91));
        this._btnArrowLeft.setTouchEnabled(true);

        ///// # _btnArrowRight
        this._btnArrowRight = new ccui.Button();
        this._btnArrowRight.setName("_btnArrowRight");
        this._layoutRoot.addChild(this._btnArrowRight);
        this._btnArrowRight.setCascadeOpacityEnabled(true);
        this._btnArrowRight.setCascadeColorEnabled(true);
        this._btnArrowRight.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._btnArrowRight, 0.58, -0.04);
        let _btnArrowRightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnArrowRight);
        _btnArrowRightLayoutComponent.setPositionPercentXEnabled(true);
        _btnArrowRightLayoutComponent.setPositionPercentX(0.58);
        _btnArrowRightLayoutComponent.setPositionPercentYEnabled(true);
        _btnArrowRightLayoutComponent.setPositionPercentY(-0.04);
        this._btnArrowRight.loadTextureDisabled("basics2/arrows/Arrow_01_Right.png", 1);
        this._btnArrowRight.loadTexturePressed("basics2/arrows/Arrow_01_Right.png", 1);
        this._btnArrowRight.loadTextureNormal("basics2/arrows/Arrow_01_Right.png", 1);
        this._btnArrowRight.setUnifySizeEnabled(false);
        this._btnArrowRight.ignoreContentAdaptWithSize(false);
        this._btnArrowRight.setContentSize(cc.size(84, 91));
        this._btnArrowRight.setTouchEnabled(true);

        ///// # _imgDescriptionBgr
        this._imgDescriptionBgr = new ccui.ImageView();
        this._imgDescriptionBgr.setName("_imgDescriptionBgr");
        this._layoutRoot.addChild(this._imgDescriptionBgr);
        this._imgDescriptionBgr.setCascadeOpacityEnabled(true);
        this._imgDescriptionBgr.setCascadeColorEnabled(true);
        this._imgDescriptionBgr.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgDescriptionBgr, 0.53, 1.07);
        let _imgDescriptionBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDescriptionBgr);
        _imgDescriptionBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgDescriptionBgrLayoutComponent.setPositionPercentX(0.53);
        _imgDescriptionBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgDescriptionBgrLayoutComponent.setPositionPercentY(1.07);
        this._imgDescriptionBgr.loadTexture("basics2/other/Box_08.png", 1);
        this._imgDescriptionBgr.setUnifySizeEnabled(false);
        this._imgDescriptionBgr.ignoreContentAdaptWithSize(false);
        this._imgDescriptionBgr.setScale9Enabled(true);
        this._imgDescriptionBgr.setCapInsets(cc.rect(69, 34, 339, 38));
        this._imgDescriptionBgr.setContentSize(cc.size(477, 150));
        this._imgDescriptionBgr.setTouchEnabled(false);

        ///// # _imgTotalBuffBox
        this._imgTotalBuffBox = new ccui.ImageView();
        this._imgTotalBuffBox.setName("_imgTotalBuffBox");
        this._imgDescriptionBgr.addChild(this._imgTotalBuffBox);
        this._imgTotalBuffBox.setCascadeOpacityEnabled(true);
        this._imgTotalBuffBox.setCascadeColorEnabled(true);
        this._imgTotalBuffBox.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTotalBuffBox, 0.5, 0.28);
        let _imgTotalBuffBoxLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTotalBuffBox);
        _imgTotalBuffBoxLayoutComponent.setPositionPercentXEnabled(true);
        _imgTotalBuffBoxLayoutComponent.setPositionPercentX(0.5);
        _imgTotalBuffBoxLayoutComponent.setPositionPercentYEnabled(true);
        _imgTotalBuffBoxLayoutComponent.setPositionPercentY(0.28);
        this._imgTotalBuffBox.loadTexture("basics2/other/Box_10.png", 1);
        this._imgTotalBuffBox.setUnifySizeEnabled(false);
        this._imgTotalBuffBox.ignoreContentAdaptWithSize(false);
        this._imgTotalBuffBox.setContentSize(cc.size(183, 55));
        this._imgTotalBuffBox.setTouchEnabled(false);

        ///// # _txtTotalBuff
        this._txtTotalBuff = new ck.Text();
        this._txtTotalBuff.setName("_txtTotalBuff");
        this._imgTotalBuffBox.addChild(this._txtTotalBuff);
        this._txtTotalBuff.setCascadeOpacityEnabled(true);
        this._txtTotalBuff.setCascadeColorEnabled(true);
        this._txtTotalBuff.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTotalBuff, 0.5, 0.5);
        this._txtTotalBuff.setTextColor(cc.color(254, 232, 127, 255));
        let _txtTotalBuffLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTotalBuff);
        _txtTotalBuffLayoutComponent.setPositionPercentXEnabled(true);
        _txtTotalBuffLayoutComponent.setPositionPercentX(0.5);
        _txtTotalBuffLayoutComponent.setPositionPercentYEnabled(true);
        _txtTotalBuffLayoutComponent.setPositionPercentY(0.5);
        this._txtTotalBuff.setTouchEnabled(false);
        this._txtTotalBuff.setUnifySizeEnabled(false);
        this._txtTotalBuff.ignoreContentAdaptWithSize(false);
        this._txtTotalBuff.setContentSize(cc.size(160, 56));
        this._txtTotalBuff.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTotalBuff.setDefaultFontSize(50);
        this._txtTotalBuff.setTextHorizontalAlignment(1);
        this._txtTotalBuff.setTextVerticalAlignment(1);
        this._txtTotalBuff.autoFitSingleLine();

        ///// # _txtDescription
        this._txtDescription = new ck.Text();
        this._txtDescription.setName("_txtDescription");
        this._imgDescriptionBgr.addChild(this._txtDescription);
        this._txtDescription.setCascadeOpacityEnabled(true);
        this._txtDescription.setCascadeColorEnabled(true);
        this._txtDescription.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDescription, 0.5, 0.7);
        this._txtDescription.setTextColor(cc.color(254, 232, 127, 255));
        let _txtDescriptionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDescription);
        _txtDescriptionLayoutComponent.setPositionPercentXEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentX(0.5);
        _txtDescriptionLayoutComponent.setPositionPercentYEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentY(0.7);
        this._txtDescription.setTouchEnabled(false);
        this._txtDescription.setUnifySizeEnabled(false);
        this._txtDescription.ignoreContentAdaptWithSize(false);
        this._txtDescription.setContentSize(cc.size(425, 80));
        this._txtDescription.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDescription.setDefaultFontSize(30);
        this._txtDescription.setTextHorizontalAlignment(1);
        this._txtDescription.setTextVerticalAlignment(1);
        this._txtDescription.autoFitMultipleLine();

    },



});

/**
 * Create TrophyAlbumOpenWidget
 * @returns {_ccs.TrophyAlbumOpenWidget}
 */
_ccs.TrophyAlbumOpenWidget.create = function () {
    return new _ccs.TrophyAlbumOpenWidget();
};
