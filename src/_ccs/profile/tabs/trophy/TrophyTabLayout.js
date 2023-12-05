/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.TrophyTabLayout
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.TrophyTabLayout = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgDescriptionBgr: null,
    /** @type {ccui.ImageView} */
    _imgTotalBuffBox: null,
    /** @type {ck.Text} */
    _txtTotalBuff: null,
    /** @type {ck.Text} */
    _txtDescription: null,
    /** @type {ck.Text} */
    _txtNextResetTime: null,
    /** @type {ccui.ImageView} */
    _imgSelectAlbum: null,
    /** @type {ccui.Layout} */
    _layoutMilestone: null,
    /** @type {ck.Text} */
    _txtMilestoneExp: null,
    /** @type {ccui.ImageView} */
    _imgMilestoneBgr: null,
    /** @type {ck.LoadingBar} */
    _loadingBarMilestone: null,
    /** @type {ck.Text} */
    _txtMilestone: null,
    /** @type {ck.GridViewHorizontal} */
    _gridViewMilestoneRewards: null,
    /** @type {ccui.Layout} */
    _layoutMid: null,
    /** @type {ccui.ImageView} */
    _imgBgrList: null,
    /** @type {ck.TrophyTabLayoutTableView} */
    _tableViewWidgets: null,


    /**
     * _ccs.TrophyTabLayout constructor
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
        this._layoutRoot.setTouchEnabled(true);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(640, 1136));

        ///// # _imgDescriptionBgr
        this._imgDescriptionBgr = new ccui.ImageView();
        this._imgDescriptionBgr.setName("_imgDescriptionBgr");
        this._layoutRoot.addChild(this._imgDescriptionBgr);
        this._imgDescriptionBgr.setCascadeOpacityEnabled(true);
        this._imgDescriptionBgr.setCascadeColorEnabled(true);
        this._imgDescriptionBgr.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgDescriptionBgr, 0.4, 0.93);
        let _imgDescriptionBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDescriptionBgr);
        _imgDescriptionBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgDescriptionBgrLayoutComponent.setPositionPercentX(0.4);
        _imgDescriptionBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgDescriptionBgrLayoutComponent.setPositionPercentY(0.93);
        this._imgDescriptionBgr.loadTexture("basics2/other/Box_08.png", 1);
        this._imgDescriptionBgr.setUnifySizeEnabled(false);
        this._imgDescriptionBgr.ignoreContentAdaptWithSize(false);
        this._imgDescriptionBgr.setScale9Enabled(true);
        this._imgDescriptionBgr.setCapInsets(cc.rect(69, 34, 339, 38));
        this._imgDescriptionBgr.setContentSize(cc.size(477, 175));
        this._imgDescriptionBgr.setTouchEnabled(false);

        ///// # _imgTotalBuffBox
        this._imgTotalBuffBox = new ccui.ImageView();
        this._imgTotalBuffBox.setName("_imgTotalBuffBox");
        this._imgDescriptionBgr.addChild(this._imgTotalBuffBox);
        this._imgTotalBuffBox.setCascadeOpacityEnabled(true);
        this._imgTotalBuffBox.setCascadeColorEnabled(true);
        this._imgTotalBuffBox.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTotalBuffBox, 0.5, 0.39);
        let _imgTotalBuffBoxLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTotalBuffBox);
        _imgTotalBuffBoxLayoutComponent.setPositionPercentXEnabled(true);
        _imgTotalBuffBoxLayoutComponent.setPositionPercentX(0.5);
        _imgTotalBuffBoxLayoutComponent.setPositionPercentYEnabled(true);
        _imgTotalBuffBoxLayoutComponent.setPositionPercentY(0.39);
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
        ck.UIUtils.setPositionPercent(this._txtDescription, 0.5, 0.75);
        this._txtDescription.setTextColor(cc.color(254, 232, 127, 255));
        let _txtDescriptionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDescription);
        _txtDescriptionLayoutComponent.setPositionPercentXEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentX(0.5);
        _txtDescriptionLayoutComponent.setPositionPercentYEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentY(0.75);
        this._txtDescription.setTouchEnabled(false);
        this._txtDescription.setUnifySizeEnabled(false);
        this._txtDescription.ignoreContentAdaptWithSize(false);
        this._txtDescription.setContentSize(cc.size(425, 80));
        this._txtDescription.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDescription.setDefaultFontSize(30);
        this._txtDescription.setTextHorizontalAlignment(1);
        this._txtDescription.setTextVerticalAlignment(1);
        this._txtDescription.autoFitMultipleLine();

        ///// # _txtNextResetTime
        this._txtNextResetTime = new ck.Text();
        this._txtNextResetTime.setName("_txtNextResetTime");
        this._imgDescriptionBgr.addChild(this._txtNextResetTime);
        this._txtNextResetTime.setCascadeOpacityEnabled(true);
        this._txtNextResetTime.setCascadeColorEnabled(true);
        this._txtNextResetTime.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNextResetTime, 0.5, 0.15);
        this._txtNextResetTime.setTextColor(cc.color(242, 240, 218, 255));
        let _txtNextResetTimeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNextResetTime);
        _txtNextResetTimeLayoutComponent.setPositionPercentXEnabled(true);
        _txtNextResetTimeLayoutComponent.setPositionPercentX(0.5);
        _txtNextResetTimeLayoutComponent.setPositionPercentYEnabled(true);
        _txtNextResetTimeLayoutComponent.setPositionPercentY(0.15);
        this._txtNextResetTime.setTouchEnabled(false);
        this._txtNextResetTime.setUnifySizeEnabled(false);
        this._txtNextResetTime.ignoreContentAdaptWithSize(false);
        this._txtNextResetTime.setContentSize(cc.size(600, 40));
        this._txtNextResetTime.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtNextResetTime.setDefaultFontSize(30);
        this._txtNextResetTime.setTextHorizontalAlignment(1);
        this._txtNextResetTime.setTextVerticalAlignment(1);
        this._txtNextResetTime.autoFitSingleLine();

        ///// # _imgSelectAlbum
        this._imgSelectAlbum = new ccui.ImageView();
        this._imgSelectAlbum.setName("_imgSelectAlbum");
        this._layoutRoot.addChild(this._imgSelectAlbum);
        this._imgSelectAlbum.setCascadeOpacityEnabled(true);
        this._imgSelectAlbum.setCascadeColorEnabled(true);
        this._imgSelectAlbum.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgSelectAlbum, 0.88, 0.9288);
        let _imgSelectAlbumLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgSelectAlbum);
        _imgSelectAlbumLayoutComponent.setPositionPercentXEnabled(true);
        _imgSelectAlbumLayoutComponent.setPositionPercentX(0.88);
        _imgSelectAlbumLayoutComponent.setPositionPercentYEnabled(true);
        _imgSelectAlbumLayoutComponent.setPositionPercentY(0.9288);
        this._imgSelectAlbum.loadTexture("trophy/other/Icon.png", 1);
        this._imgSelectAlbum.setUnifySizeEnabled(false);
        this._imgSelectAlbum.ignoreContentAdaptWithSize(false);
        this._imgSelectAlbum.setContentSize(cc.size(127, 130));
        this._imgSelectAlbum.setTouchEnabled(true);

        ///// # _layoutMilestone
        this._layoutMilestone = new ccui.Layout();
        this._layoutMilestone.setName("_layoutMilestone");
        this._layoutRoot.addChild(this._layoutMilestone);
        this._layoutMilestone.setCascadeOpacityEnabled(true);
        this._layoutMilestone.setCascadeColorEnabled(true);
        this._layoutMilestone.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutMilestone, 0.54, 0.75);
        let _layoutMilestoneLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutMilestone);
        _layoutMilestoneLayoutComponent.setPositionPercentXEnabled(true);
        _layoutMilestoneLayoutComponent.setPositionPercentX(0.54);
        _layoutMilestoneLayoutComponent.setPositionPercentYEnabled(true);
        _layoutMilestoneLayoutComponent.setPositionPercentY(0.75);
        this._layoutMilestone.setTouchEnabled(true);
        this._layoutMilestone.setUnifySizeEnabled(false);
        this._layoutMilestone.ignoreContentAdaptWithSize(false);
        this._layoutMilestone.setContentSize(cc.size(484, 33));

        ///// # _txtMilestoneExp
        this._txtMilestoneExp = new ck.Text();
        this._txtMilestoneExp.setName("_txtMilestoneExp");
        this._layoutMilestone.addChild(this._txtMilestoneExp);
        this._txtMilestoneExp.setCascadeOpacityEnabled(true);
        this._txtMilestoneExp.setCascadeColorEnabled(true);
        this._txtMilestoneExp.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMilestoneExp, -0.08, 0.5);
        this._txtMilestoneExp.setTextColor(cc.color(250, 226, 112, 255));
        let _txtMilestoneExpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMilestoneExp);
        _txtMilestoneExpLayoutComponent.setPositionPercentXEnabled(true);
        _txtMilestoneExpLayoutComponent.setPositionPercentX(-0.08);
        _txtMilestoneExpLayoutComponent.setPositionPercentYEnabled(true);
        _txtMilestoneExpLayoutComponent.setPositionPercentY(0.5);
        this._txtMilestoneExp.setTouchEnabled(false);
        this._txtMilestoneExp.setUnifySizeEnabled(false);
        this._txtMilestoneExp.ignoreContentAdaptWithSize(false);
        this._txtMilestoneExp.setContentSize(cc.size(60, 56));
        this._txtMilestoneExp.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMilestoneExp.setDefaultFontSize(50);
        this._txtMilestoneExp.setString(gm.localize.getText("TXT_EXP").toUpperCase());
        this._txtMilestoneExp.setTextHorizontalAlignment(1);
        this._txtMilestoneExp.setTextVerticalAlignment(1);
        this._txtMilestoneExp.autoFitSingleLine();

        ///// # _imgMilestoneBgr
        this._imgMilestoneBgr = new ccui.ImageView();
        this._imgMilestoneBgr.setName("_imgMilestoneBgr");
        this._layoutMilestone.addChild(this._imgMilestoneBgr);
        this._imgMilestoneBgr.setCascadeOpacityEnabled(true);
        this._imgMilestoneBgr.setCascadeColorEnabled(true);
        this._imgMilestoneBgr.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgMilestoneBgr, 0, 0.5);
        this._imgMilestoneBgr.setColor(cc.color(59, 161, 192, 255));
        let _imgMilestoneBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgMilestoneBgr);
        _imgMilestoneBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgMilestoneBgrLayoutComponent.setPositionPercentX(0);
        _imgMilestoneBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgMilestoneBgrLayoutComponent.setPositionPercentY(0.5);
        this._imgMilestoneBgr.loadTexture("basics2/bars/Bar_05.png", 1);
        this._imgMilestoneBgr.setUnifySizeEnabled(false);
        this._imgMilestoneBgr.ignoreContentAdaptWithSize(false);
        this._imgMilestoneBgr.setContentSize(cc.size(480, 33));
        this._imgMilestoneBgr.setTouchEnabled(false);

        ///// # _loadingBarMilestone
        this._loadingBarMilestone = new ck.LoadingBar();
        this._loadingBarMilestone.setName("_loadingBarMilestone");
        this._layoutMilestone.addChild(this._loadingBarMilestone);
        this._loadingBarMilestone.setCascadeOpacityEnabled(true);
        this._loadingBarMilestone.setCascadeColorEnabled(true);
        this._loadingBarMilestone.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._loadingBarMilestone, 0, 0.5);
        this._loadingBarMilestone.setColor(cc.color(255, 247, 145, 255));
        let _loadingBarMilestoneLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._loadingBarMilestone);
        _loadingBarMilestoneLayoutComponent.setPositionPercentXEnabled(true);
        _loadingBarMilestoneLayoutComponent.setPositionPercentX(0);
        _loadingBarMilestoneLayoutComponent.setPositionPercentYEnabled(true);
        _loadingBarMilestoneLayoutComponent.setPositionPercentY(0.5);
        this._loadingBarMilestone.setTouchEnabled(false);
        this._loadingBarMilestone.setUnifySizeEnabled(false);
        this._loadingBarMilestone.ignoreContentAdaptWithSize(false);
        this._loadingBarMilestone.setContentSize(cc.size(484, 33));
        this._loadingBarMilestone.loadTexture("basics2/bars/Bar_06.png", 1);

        ///// # _txtMilestone
        this._txtMilestone = new ck.Text();
        this._txtMilestone.setName("_txtMilestone");
        this._layoutMilestone.addChild(this._txtMilestone);
        this._txtMilestone.setCascadeOpacityEnabled(true);
        this._txtMilestone.setCascadeColorEnabled(true);
        this._txtMilestone.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMilestone, 0.5, 0.5);
        let _txtMilestoneLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMilestone);
        _txtMilestoneLayoutComponent.setPositionPercentXEnabled(true);
        _txtMilestoneLayoutComponent.setPositionPercentX(0.5);
        _txtMilestoneLayoutComponent.setPositionPercentYEnabled(true);
        _txtMilestoneLayoutComponent.setPositionPercentY(0.5);
        this._txtMilestone.setTouchEnabled(false);
        this._txtMilestone.ignoreContentAdaptWithSize(true);
        this._txtMilestone.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtMilestone.setDefaultFontSize(36);
        this._txtMilestone.setTextHorizontalAlignment(1);
        this._txtMilestone.setTextVerticalAlignment(1);
        this._txtMilestone.enableOutline(cc.color(74, 48, 0, 255), 2);

        ///// # _gridViewMilestoneRewards
        this._gridViewMilestoneRewards = new ck.GridViewHorizontal();
        this._gridViewMilestoneRewards.setName("_gridViewMilestoneRewards");
        this._layoutMilestone.addChild(this._gridViewMilestoneRewards);
        this._gridViewMilestoneRewards.setCascadeOpacityEnabled(true);
        this._gridViewMilestoneRewards.setCascadeColorEnabled(true);
        this._gridViewMilestoneRewards.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._gridViewMilestoneRewards, 1.0661, 0.75);
        let _gridViewMilestoneRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewMilestoneRewards);
        _gridViewMilestoneRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _gridViewMilestoneRewardsLayoutComponent.setPositionPercentX(1.0661);
        _gridViewMilestoneRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _gridViewMilestoneRewardsLayoutComponent.setPositionPercentY(0.75);

        ///// # _layoutMid
        this._layoutMid = new ccui.Layout();
        this._layoutMid.setName("_layoutMid");
        this._layoutRoot.addChild(this._layoutMid);
        this._layoutMid.setCascadeOpacityEnabled(true);
        this._layoutMid.setCascadeColorEnabled(true);
        this._layoutMid.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutMid, 0.5, 0.7262);
        let _layoutMidLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutMid);
        _layoutMidLayoutComponent.setPositionPercentXEnabled(true);
        _layoutMidLayoutComponent.setPositionPercentX(0.5);
        _layoutMidLayoutComponent.setPercentWidthEnabled(true);
        _layoutMidLayoutComponent.setPercentWidth(1);
        this._layoutMid.setTouchEnabled(true);
        this._layoutMid.setUnifySizeEnabled(false);
        this._layoutMid.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutMid, 1);
        this._layoutMid.setContentSize(cc.size(this._layoutMid.width, 737));

        ///// # _imgBgrList
        this._imgBgrList = new ccui.ImageView();
        this._imgBgrList.setName("_imgBgrList");
        this._layoutMid.addChild(this._imgBgrList);
        this._imgBgrList.setCascadeOpacityEnabled(true);
        this._imgBgrList.setCascadeColorEnabled(true);
        this._imgBgrList.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBgrList, 0.5, 1);
        let _imgBgrListLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrList);
        _imgBgrListLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrListLayoutComponent.setPositionPercentX(0.5);
        _imgBgrListLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrListLayoutComponent.setPositionPercentY(1);
        this._imgBgrList.loadTexture("sprites/backgrounds/Trophy.png", 0);
        this._imgBgrList.setUnifySizeEnabled(false);
        this._imgBgrList.ignoreContentAdaptWithSize(false);
        this._imgBgrList.setContentSize(cc.size(640, 737));
        this._imgBgrList.setTouchEnabled(false);

        ///// # _tableViewWidgets
        this._tableViewWidgets = new ck.TrophyTabLayoutTableView();
        this._tableViewWidgets.setName("_tableViewWidgets");
        this._layoutMid.addChild(this._tableViewWidgets);
        this._tableViewWidgets.setCascadeOpacityEnabled(true);
        this._tableViewWidgets.setCascadeColorEnabled(true);
        this._tableViewWidgets.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._tableViewWidgets, 0.5, 0.987);
        let _tableViewWidgetsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._tableViewWidgets);
        _tableViewWidgetsLayoutComponent.setPositionPercentXEnabled(true);
        _tableViewWidgetsLayoutComponent.setPositionPercentX(0.5);
        _tableViewWidgetsLayoutComponent.setPositionPercentYEnabled(true);
        _tableViewWidgetsLayoutComponent.setPositionPercentY(0.987);
        _tableViewWidgetsLayoutComponent.setPercentWidthEnabled(true);
        _tableViewWidgetsLayoutComponent.setPercentWidth(1);
        _tableViewWidgetsLayoutComponent.setPercentHeightEnabled(true);
        _tableViewWidgetsLayoutComponent.setPercentHeight(0.978);

    },



});

/**
 * Create TrophyTabLayout
 * @returns {_ccs.TrophyTabLayout}
 */
_ccs.TrophyTabLayout.create = function () {
    return new _ccs.TrophyTabLayout();
};
