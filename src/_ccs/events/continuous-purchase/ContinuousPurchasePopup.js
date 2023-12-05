/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ContinuousPurchasePopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ContinuousPurchasePopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ccui.Layout} */
    _layoutClose: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.Layout} */
    _layoutTitle: null,
    /** @type {ccui.ImageView} */
    _imgTitle: null,
    /** @type {ccui.ImageView} */
    imgTimeBg: null,
    /** @type {ccui.ImageView} */
    imgClock: null,
    /** @type {ck.Text} */
    _txtTimeLeft: null,
    /** @type {ck.Text} */
    _txtHint: null,
    /** @type {ccui.ListView} */
    _listviewMilestones: null,
    /** @type {ItemInfoBubbleWidget} */
    _itemInfoBubbleWidget: null,


    /**
     * _ccs.ContinuousPurchasePopup constructor
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

        ///// # _layoutPopup
        this._layoutPopup = new ccui.Layout();
        this._layoutPopup.setName("_layoutPopup");
        this.addChild(this._layoutPopup);
        this._layoutPopup.setCascadeOpacityEnabled(true);
        this._layoutPopup.setCascadeColorEnabled(true);
        this._layoutPopup.setAnchorPoint(cc.p(0.5, 0.5));
        this._layoutPopup.setPosition(-0.0004, -2.0004);
        let _layoutPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        this._layoutPopup.setTouchEnabled(false);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(596, 1012.1554));

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._layoutPopup.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.53);
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(0.53);
        this._imgBackground.loadTexture("continuous-purchase_Table.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setContentSize(cc.size(575, 984));
        this._imgBackground.setTouchEnabled(false);

        ///// # _layoutClose
        this._layoutClose = new ccui.Layout();
        this._layoutClose.setName("_layoutClose");
        this._layoutPopup.addChild(this._layoutClose);
        this._layoutClose.setCascadeOpacityEnabled(true);
        this._layoutClose.setCascadeColorEnabled(true);
        this._layoutClose.setAnchorPoint(cc.p(0.5026, 0.5236));
        ck.UIUtils.setPositionPercent(this._layoutClose, 0.97, 1.02);
        let _layoutCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutClose);
        _layoutCloseLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentX(0.97);
        _layoutCloseLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentY(1.02);
        this._layoutClose.setTouchEnabled(true);
        this._layoutClose.setUnifySizeEnabled(false);
        this._layoutClose.ignoreContentAdaptWithSize(false);
        this._layoutClose.setContentSize(cc.size(75, 75));

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._layoutClose.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.0867, 0.4496);
        this._imgClose.setScale(0.8, 0.8);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.0867);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.4496);
        _imgCloseLayoutComponent.setPercentWidthEnabled(true);
        _imgCloseLayoutComponent.setPercentWidth(1.08);
        _imgCloseLayoutComponent.setPercentHeightEnabled(true);
        _imgCloseLayoutComponent.setPercentHeight(1.1067);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgClose, 1.08, 1.1067);
        this._imgClose.setTouchEnabled(false);

        ///// # _layoutTitle
        this._layoutTitle = new ccui.Layout();
        this._layoutTitle.setName("_layoutTitle");
        this._layoutPopup.addChild(this._layoutTitle);
        this._layoutTitle.setCascadeOpacityEnabled(true);
        this._layoutTitle.setCascadeColorEnabled(true);
        this._layoutTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTitle, 0.5, 0.96);
        let _layoutTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTitle);
        _layoutTitleLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTitleLayoutComponent.setPositionPercentX(0.5);
        _layoutTitleLayoutComponent.setPositionPercentYEnabled(true);
        _layoutTitleLayoutComponent.setPositionPercentY(0.96);
        _layoutTitleLayoutComponent.setPercentWidthEnabled(true);
        _layoutTitleLayoutComponent.setPercentWidth(1);
        this._layoutTitle.setTouchEnabled(false);
        this._layoutTitle.setUnifySizeEnabled(false);
        this._layoutTitle.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutTitle, 1);
        this._layoutTitle.setContentSize(cc.size(this._layoutTitle.width, 139.951));

        ///// # _imgTitle
        this._imgTitle = new ccui.ImageView();
        this._imgTitle.setName("_imgTitle");
        this._layoutTitle.addChild(this._imgTitle);
        this._imgTitle.setCascadeOpacityEnabled(true);
        this._imgTitle.setCascadeColorEnabled(true);
        this._imgTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTitle, 0.5997, 0.4303);
        let _imgTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTitle);
        _imgTitleLayoutComponent.setPositionPercentXEnabled(true);
        _imgTitleLayoutComponent.setPositionPercentX(0.5997);
        _imgTitleLayoutComponent.setPositionPercentYEnabled(true);
        _imgTitleLayoutComponent.setPositionPercentY(0.4303);
        this._imgTitle.loadTexture("texts/continuousPuchase/continuous-purchaseTitle.png", 1);
        this._imgTitle.setTouchEnabled(false);

        ///// # imgTimeBg
        this.imgTimeBg = new ccui.ImageView();
        this.imgTimeBg.setName("imgTimeBg");
        this._layoutPopup.addChild(this.imgTimeBg);
        this.imgTimeBg.setCascadeOpacityEnabled(true);
        this.imgTimeBg.setCascadeColorEnabled(true);
        this.imgTimeBg.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgTimeBg, 0.7132, 0.8656);
        let imgTimeBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgTimeBg);
        imgTimeBgLayoutComponent.setPositionPercentXEnabled(true);
        imgTimeBgLayoutComponent.setPositionPercentX(0.7132);
        imgTimeBgLayoutComponent.setPositionPercentYEnabled(true);
        imgTimeBgLayoutComponent.setPositionPercentY(0.8656);
        this.imgTimeBg.loadTexture("continuous-purchase_Box_Info_02.png", 1);
        this.imgTimeBg.setUnifySizeEnabled(false);
        this.imgTimeBg.ignoreContentAdaptWithSize(false);
        this.imgTimeBg.setContentSize(cc.size(143, 50));
        this.imgTimeBg.setTouchEnabled(false);

        ///// # imgClock
        this.imgClock = new ccui.ImageView();
        this.imgClock.setName("imgClock");
        this.imgTimeBg.addChild(this.imgClock);
        this.imgClock.setCascadeOpacityEnabled(true);
        this.imgClock.setCascadeColorEnabled(true);
        this.imgClock.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgClock, 0.1149, 0.558);
        let imgClockLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgClock);
        imgClockLayoutComponent.setPositionPercentXEnabled(true);
        imgClockLayoutComponent.setPositionPercentX(0.1149);
        imgClockLayoutComponent.setPositionPercentYEnabled(true);
        imgClockLayoutComponent.setPositionPercentY(0.558);
        this.imgClock.loadTexture("continuous-purchase_clock.png", 1);
        this.imgClock.setUnifySizeEnabled(false);
        this.imgClock.ignoreContentAdaptWithSize(false);
        this.imgClock.setContentSize(cc.size(45, 53));
        this.imgClock.setTouchEnabled(false);

        ///// # _txtTimeLeft
        this._txtTimeLeft = new ck.Text();
        this._txtTimeLeft.setName("_txtTimeLeft");
        this.imgTimeBg.addChild(this._txtTimeLeft);
        this._txtTimeLeft.setCascadeOpacityEnabled(true);
        this._txtTimeLeft.setCascadeColorEnabled(true);
        this._txtTimeLeft.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTimeLeft, 0.5964, 0.4739);
        let _txtTimeLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTimeLeft);
        _txtTimeLeftLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentX(0.5964);
        _txtTimeLeftLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentY(0.4739);
        this._txtTimeLeft.setTouchEnabled(false);
        this._txtTimeLeft.setUnifySizeEnabled(false);
        this._txtTimeLeft.ignoreContentAdaptWithSize(false);
        this._txtTimeLeft.setContentSize(cc.size(87.9427, 34));
        this._txtTimeLeft.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTimeLeft.setDefaultFontSize(28);
        this._txtTimeLeft.setString(gm.localize.getText("TXT_5D_3H"));
        this._txtTimeLeft.setTextHorizontalAlignment(1);
        this._txtTimeLeft.setTextVerticalAlignment(1);

        ///// # _txtHint
        this._txtHint = new ck.Text();
        this._txtHint.setName("_txtHint");
        this._layoutPopup.addChild(this._txtHint);
        this._txtHint.setCascadeOpacityEnabled(true);
        this._txtHint.setCascadeColorEnabled(true);
        this._txtHint.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHint, 0.6964, 0.8025);
        let _txtHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHint);
        _txtHintLayoutComponent.setPositionPercentXEnabled(true);
        _txtHintLayoutComponent.setPositionPercentX(0.6964);
        _txtHintLayoutComponent.setPositionPercentYEnabled(true);
        _txtHintLayoutComponent.setPositionPercentY(0.8025);
        this._txtHint.setTouchEnabled(false);
        this._txtHint.setUnifySizeEnabled(false);
        this._txtHint.ignoreContentAdaptWithSize(false);
        this._txtHint.setContentSize(cc.size(230.1257, 68.4596));
        this._txtHint.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHint.setDefaultFontSize(20);
        this._txtHint.setString(gm.localize.getText("TXT_COLLECT_FULL_DAYS_PAYING_GET_DESERVED_REWARDS"));
        this._txtHint.setTextHorizontalAlignment(1);
        this._txtHint.setTextVerticalAlignment(1);

        ///// # _listviewMilestones
        this._listviewMilestones = new ccui.ListView();
        this._listviewMilestones.setName("_listviewMilestones");
        this._layoutPopup.addChild(this._listviewMilestones);
        this._listviewMilestones.setCascadeOpacityEnabled(true);
        this._listviewMilestones.setCascadeColorEnabled(true);
        this._listviewMilestones.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._listviewMilestones, 0.5, 0.0575);
        let _listviewMilestonesLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._listviewMilestones);
        _listviewMilestonesLayoutComponent.setPositionPercentXEnabled(true);
        _listviewMilestonesLayoutComponent.setPositionPercentX(0.5);
        _listviewMilestonesLayoutComponent.setPositionPercentYEnabled(true);
        _listviewMilestonesLayoutComponent.setPositionPercentY(0.0575);
        this._listviewMilestones.setTouchEnabled(true);
        this._listviewMilestones.setUnifySizeEnabled(false);
        this._listviewMilestones.ignoreContentAdaptWithSize(false);
        this._listviewMilestones.setContentSize(cc.size(514.6429, 697.322));
        this._listviewMilestones.setDirection(ccui.ScrollView.DIR_VERTICAL);
        this._listviewMilestones.setGravity(ccui.ListView.GRAVITY_CENTER_HORIZONTAL);
        this._listviewMilestones.setBounceEnabled(true);

        ///// # _itemInfoBubbleWidget
        this._itemInfoBubbleWidget = new ItemInfoBubbleWidget();
        this._itemInfoBubbleWidget.setName("_itemInfoBubbleWidget");
        this._layoutPopup.addChild(this._itemInfoBubbleWidget);
        this._itemInfoBubbleWidget.setCascadeOpacityEnabled(true);
        this._itemInfoBubbleWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._itemInfoBubbleWidget, 0.494, 0.4031);
        this._itemInfoBubbleWidget.setVisible(false);
        let _itemInfoBubbleWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._itemInfoBubbleWidget);

    },



});

/**
 * Create ContinuousPurchasePopup
 * @returns {_ccs.ContinuousPurchasePopup}
 */
_ccs.ContinuousPurchasePopup.create = function () {
    return new _ccs.ContinuousPurchasePopup();
};
