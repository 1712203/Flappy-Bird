/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.TrophyAlbumCloseWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.TrophyAlbumCloseWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgAlbum: null,
    /** @type {ccui.PageView} */
    _pageViewYears: null,
    /** @type {ccui.Layout} */
    _btnArrowLeft: null,
    /** @type {ccui.ImageView} */
    _imgArrowLeft: null,
    /** @type {ccui.Layout} */
    _btnArrowRight: null,
    /** @type {ccui.ImageView} */
    _imgArrowRight: null,
    /** @type {ccui.ImageView} */
    _imgTextTapToOpen: null,


    /**
     * _ccs.TrophyAlbumCloseWidget constructor
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
        this._imgAlbum.loadTexture("trophy/book/BookClose.png", 1);
        this._imgAlbum.setUnifySizeEnabled(false);
        this._imgAlbum.ignoreContentAdaptWithSize(false);
        this._imgAlbum.setScale9Enabled(true);
        this._imgAlbum.setCapInsets(cc.rect(69, 57, 409, 675));
        this._imgAlbum.setContentSize(cc.size(547, 789));
        this._imgAlbum.setTouchEnabled(false);

        ///// # _pageViewYears
        this._pageViewYears = new ccui.PageView();
        this._pageViewYears.setName("_pageViewYears");
        this._imgAlbum.addChild(this._pageViewYears);
        this._pageViewYears.setCascadeOpacityEnabled(true);
        this._pageViewYears.setCascadeColorEnabled(true);
        this._pageViewYears.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._pageViewYears, 0.57, 0.74);
        let _pageViewYearsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._pageViewYears);
        _pageViewYearsLayoutComponent.setPositionPercentXEnabled(true);
        _pageViewYearsLayoutComponent.setPositionPercentX(0.57);
        _pageViewYearsLayoutComponent.setPositionPercentYEnabled(true);
        _pageViewYearsLayoutComponent.setPositionPercentY(0.74);
        this._pageViewYears.setTouchEnabled(true);
        this._pageViewYears.setUnifySizeEnabled(false);
        this._pageViewYears.ignoreContentAdaptWithSize(false);
        this._pageViewYears.setContentSize(cc.size(330, 50));

        ///// # _btnArrowLeft
        this._btnArrowLeft = new ccui.Layout();
        this._btnArrowLeft.setName("_btnArrowLeft");
        this._imgAlbum.addChild(this._btnArrowLeft);
        this._btnArrowLeft.setCascadeOpacityEnabled(true);
        this._btnArrowLeft.setCascadeColorEnabled(true);
        this._btnArrowLeft.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._btnArrowLeft, 0.2549, 0.74);
        let _btnArrowLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnArrowLeft);
        _btnArrowLeftLayoutComponent.setPositionPercentXEnabled(true);
        _btnArrowLeftLayoutComponent.setPositionPercentX(0.2549);
        _btnArrowLeftLayoutComponent.setPositionPercentYEnabled(true);
        _btnArrowLeftLayoutComponent.setPositionPercentY(0.74);
        this._btnArrowLeft.setTouchEnabled(true);
        this._btnArrowLeft.setUnifySizeEnabled(false);
        this._btnArrowLeft.ignoreContentAdaptWithSize(false);
        this._btnArrowLeft.setContentSize(cc.size(120, 100));

        ///// # _imgArrowLeft
        this._imgArrowLeft = new ccui.ImageView();
        this._imgArrowLeft.setName("_imgArrowLeft");
        this._btnArrowLeft.addChild(this._imgArrowLeft);
        this._imgArrowLeft.setCascadeOpacityEnabled(true);
        this._imgArrowLeft.setCascadeColorEnabled(true);
        this._imgArrowLeft.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgArrowLeft, 0.6588, 0.5);
        let _imgArrowLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgArrowLeft);
        _imgArrowLeftLayoutComponent.setPositionPercentYEnabled(true);
        _imgArrowLeftLayoutComponent.setPositionPercentY(0.5);
        this._imgArrowLeft.loadTexture("buttons/triangles/Yellow.png", 1);
        this._imgArrowLeft.setUnifySizeEnabled(false);
        this._imgArrowLeft.ignoreContentAdaptWithSize(false);
        this._imgArrowLeft.setContentSize(cc.size(37, 64));
        this._imgArrowLeft.setTouchEnabled(false);

        ///// # _btnArrowRight
        this._btnArrowRight = new ccui.Layout();
        this._btnArrowRight.setName("_btnArrowRight");
        this._imgAlbum.addChild(this._btnArrowRight);
        this._btnArrowRight.setCascadeOpacityEnabled(true);
        this._btnArrowRight.setCascadeColorEnabled(true);
        this._btnArrowRight.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._btnArrowRight, 0.8851, 0.74);
        let _btnArrowRightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnArrowRight);
        _btnArrowRightLayoutComponent.setPositionPercentXEnabled(true);
        _btnArrowRightLayoutComponent.setPositionPercentX(0.8851);
        _btnArrowRightLayoutComponent.setPositionPercentYEnabled(true);
        _btnArrowRightLayoutComponent.setPositionPercentY(0.74);
        this._btnArrowRight.setTouchEnabled(true);
        this._btnArrowRight.setUnifySizeEnabled(false);
        this._btnArrowRight.ignoreContentAdaptWithSize(false);
        this._btnArrowRight.setContentSize(cc.size(120, 100));

        ///// # _imgArrowRight
        this._imgArrowRight = new ccui.ImageView();
        this._imgArrowRight.setName("_imgArrowRight");
        this._btnArrowRight.addChild(this._imgArrowRight);
        this._imgArrowRight.setCascadeOpacityEnabled(true);
        this._imgArrowRight.setCascadeColorEnabled(true);
        this._imgArrowRight.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgArrowRight, 0.3412, 0.5);
        this._imgArrowRight.setFlippedX(true);
        let _imgArrowRightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgArrowRight);
        _imgArrowRightLayoutComponent.setPositionPercentYEnabled(true);
        _imgArrowRightLayoutComponent.setPositionPercentY(0.5);
        this._imgArrowRight.loadTexture("buttons/triangles/Yellow.png", 1);
        this._imgArrowRight.setUnifySizeEnabled(false);
        this._imgArrowRight.ignoreContentAdaptWithSize(false);
        this._imgArrowRight.setContentSize(cc.size(37, 64));
        this._imgArrowRight.setTouchEnabled(false);
        this._imgArrowRight.setFlippedX(true);

        ///// # _imgTextTapToOpen
        this._imgTextTapToOpen = new ccui.ImageView();
        this._imgTextTapToOpen.setName("_imgTextTapToOpen");
        this._imgAlbum.addChild(this._imgTextTapToOpen);
        this._imgTextTapToOpen.setCascadeOpacityEnabled(true);
        this._imgTextTapToOpen.setCascadeColorEnabled(true);
        this._imgTextTapToOpen.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTextTapToOpen, 0.57, 0.45);
        let _imgTextTapToOpenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTextTapToOpen);
        _imgTextTapToOpenLayoutComponent.setPositionPercentXEnabled(true);
        _imgTextTapToOpenLayoutComponent.setPositionPercentX(0.57);
        _imgTextTapToOpenLayoutComponent.setPositionPercentYEnabled(true);
        _imgTextTapToOpenLayoutComponent.setPositionPercentY(0.45);
        this._imgTextTapToOpen.loadTexture("texts/trophy/TapToOpen.png", 1);
        this._imgTextTapToOpen.setTouchEnabled(false);

    },



});

/**
 * Create TrophyAlbumCloseWidget
 * @returns {_ccs.TrophyAlbumCloseWidget}
 */
_ccs.TrophyAlbumCloseWidget.create = function () {
    return new _ccs.TrophyAlbumCloseWidget();
};
