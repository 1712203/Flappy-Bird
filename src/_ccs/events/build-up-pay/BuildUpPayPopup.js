/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.BuildUpPayPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.BuildUpPayPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.Layout} */
    _layoutBackground: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {cc.Node} */
    _blinkEffectPosition: null,
    /** @type {ccui.Layout} */
    _layoutClose: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.Layout} */
    _layoutTitle: null,
    /** @type {ccui.ImageView} */
    _imgTitle: null,
    /** @type {ck.Text} */
    _txtTimeLeft: null,
    /** @type {ck.Text} */
    _txtTimeLeftTitle: null,
    /** @type {ck.Text} */
    _txtHint: null,
    /** @type {ccui.ListView} */
    _listviewMilestones: null,
    /** @type {ItemInfoBubbleWidget} */
    _itemInfoBubbleWidget: null,


    /**
     * _ccs.BuildUpPayPopup constructor
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
        this._layoutPopup.setPosition(-0.0003, 0);
        let _layoutPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        this._layoutPopup.setTouchEnabled(false);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(596, 940));

        ///// # _layoutBackground
        this._layoutBackground = new ccui.Layout();
        this._layoutBackground.setName("_layoutBackground");
        this._layoutPopup.addChild(this._layoutBackground);
        this._layoutBackground.setCascadeOpacityEnabled(true);
        this._layoutBackground.setCascadeColorEnabled(true);
        let _layoutBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBackground);
        _layoutBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentWidth(1);
        _layoutBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentHeight(1);
        this._layoutBackground.setTouchEnabled(false);
        this._layoutBackground.setUnifySizeEnabled(false);
        this._layoutBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBackground, 1, 1);

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._layoutBackground.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.5);
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundLayoutComponent.setPercentWidth(1);
        _imgBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundLayoutComponent.setPercentHeight(1);
        this._imgBackground.loadTexture("build-up-pay/Background.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setScale9Enabled(true);
        this._imgBackground.setCapInsets(cc.rect(69, 289, 458, 1));
        ck.UIUtils.setSizePercent(this._imgBackground, 1, 1);
        this._imgBackground.setTouchEnabled(false);

        ///// # _blinkEffectPosition
        this._blinkEffectPosition = new cc.Node();
        this._blinkEffectPosition.setName("_blinkEffectPosition");
        this._imgBackground.addChild(this._blinkEffectPosition);
        this._blinkEffectPosition.setCascadeOpacityEnabled(true);
        this._blinkEffectPosition.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._blinkEffectPosition, 0.48, 0.84);
        let _blinkEffectPositionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._blinkEffectPosition);
        _blinkEffectPositionLayoutComponent.setPositionPercentXEnabled(true);
        _blinkEffectPositionLayoutComponent.setPositionPercentX(0.48);
        _blinkEffectPositionLayoutComponent.setPositionPercentYEnabled(true);
        _blinkEffectPositionLayoutComponent.setPositionPercentY(0.84);

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
        ck.UIUtils.setPositionPercent(this._imgClose, 0.5, 0.4763);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.5);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.4763);
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
        ck.UIUtils.setPositionPercent(this._imgTitle, 0.3049, 0.6729);
        let _imgTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTitle);
        _imgTitleLayoutComponent.setPositionPercentXEnabled(true);
        _imgTitleLayoutComponent.setPositionPercentX(0.3049);
        _imgTitleLayoutComponent.setPositionPercentYEnabled(true);
        _imgTitleLayoutComponent.setPositionPercentY(0.6729);
        this._imgTitle.loadTexture("texts/build-up-pay/BuildUpPay.png", 1);
        this._imgTitle.setTouchEnabled(false);

        ///// # _txtTimeLeft
        this._txtTimeLeft = new ck.Text();
        this._txtTimeLeft.setName("_txtTimeLeft");
        this._layoutPopup.addChild(this._txtTimeLeft);
        this._txtTimeLeft.setCascadeOpacityEnabled(true);
        this._txtTimeLeft.setCascadeColorEnabled(true);
        this._txtTimeLeft.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTimeLeft, 0.97, 0.72);
        this._txtTimeLeft.setTextColor(cc.color(162, 46, 46, 255));
        let _txtTimeLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTimeLeft);
        _txtTimeLeftLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentX(0.97);
        _txtTimeLeftLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentY(0.72);
        this._txtTimeLeft.setTouchEnabled(false);
        this._txtTimeLeft.ignoreContentAdaptWithSize(true);
        this._txtTimeLeft.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtTimeLeft.setDefaultFontSize(30);
        this._txtTimeLeft.setString(gm.localize.getText("TXT_TIME_LEFT"));
        this._txtTimeLeft.setTextHorizontalAlignment(1);
        this._txtTimeLeft.setTextVerticalAlignment(1);

        ///// # _txtTimeLeftTitle
        this._txtTimeLeftTitle = new ck.Text();
        this._txtTimeLeftTitle.setName("_txtTimeLeftTitle");
        this._txtTimeLeft.addChild(this._txtTimeLeftTitle);
        this._txtTimeLeftTitle.setCascadeOpacityEnabled(true);
        this._txtTimeLeftTitle.setCascadeColorEnabled(true);
        this._txtTimeLeftTitle.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTimeLeftTitle, -0.0087, 0.4853);
        let _txtTimeLeftTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTimeLeftTitle);
        this._txtTimeLeftTitle.setTouchEnabled(false);
        this._txtTimeLeftTitle.ignoreContentAdaptWithSize(true);
        this._txtTimeLeftTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTimeLeftTitle.setDefaultFontSize(30);
        this._txtTimeLeftTitle.setString(gm.localize.getText("TXT_TIME_LEFT"));
        this._txtTimeLeftTitle.setTextHorizontalAlignment(0);
        this._txtTimeLeftTitle.setTextVerticalAlignment(0);
        this._txtTimeLeftTitle.enableOutline(cc.color(162, 46, 46, 255), 1);
        this._txtTimeLeftTitle.enableShadow(cc.color(110, 110, 110, 255), cc.size(0, -1), 0);

        ///// # _txtHint
        this._txtHint = new ck.Text();
        this._txtHint.setName("_txtHint");
        this._layoutPopup.addChild(this._txtHint);
        this._txtHint.setCascadeOpacityEnabled(true);
        this._txtHint.setCascadeColorEnabled(true);
        this._txtHint.setAnchorPoint(cc.p(1, 1));
        ck.UIUtils.setPositionPercent(this._txtHint, 0.97, 0.9667);
        this._txtHint.setTextColor(cc.color(162, 46, 46, 255));
        let _txtHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHint);
        _txtHintLayoutComponent.setPositionPercentXEnabled(true);
        _txtHintLayoutComponent.setPositionPercentX(0.97);
        _txtHintLayoutComponent.setPositionPercentYEnabled(true);
        _txtHintLayoutComponent.setPositionPercentY(0.9667);
        this._txtHint.setTouchEnabled(false);
        this._txtHint.setUnifySizeEnabled(false);
        this._txtHint.ignoreContentAdaptWithSize(false);
        this._txtHint.setContentSize(cc.size(162.8899, 102.747));
        this._txtHint.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHint.setDefaultFontSize(30);
        this._txtHint.setString(gm.localize.getText("TXT_BUILD_UP_PAY_HINT"));
        this._txtHint.setTextHorizontalAlignment(1);
        this._txtHint.setTextVerticalAlignment(0);

        ///// # _listviewMilestones
        this._listviewMilestones = new ccui.ListView();
        this._listviewMilestones.setName("_listviewMilestones");
        this._layoutPopup.addChild(this._listviewMilestones);
        this._listviewMilestones.setCascadeOpacityEnabled(true);
        this._listviewMilestones.setCascadeColorEnabled(true);
        this._listviewMilestones.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._listviewMilestones, 0.5, 0.019);
        let _listviewMilestonesLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._listviewMilestones);
        _listviewMilestonesLayoutComponent.setPositionPercentXEnabled(true);
        _listviewMilestonesLayoutComponent.setPositionPercentX(0.5);
        this._listviewMilestones.setTouchEnabled(true);
        this._listviewMilestones.setUnifySizeEnabled(false);
        this._listviewMilestones.ignoreContentAdaptWithSize(false);
        this._listviewMilestones.setContentSize(cc.size(583, 639));
        this._listviewMilestones.setDirection(ccui.ScrollView.DIR_VERTICAL);
        this._listviewMilestones.setGravity(ccui.ListView.GRAVITY_CENTER_HORIZONTAL);
        this._listviewMilestones.setBounceEnabled(true);

        ///// # _itemInfoBubbleWidget
        this._itemInfoBubbleWidget = new ItemInfoBubbleWidget();
        this._itemInfoBubbleWidget.setName("_itemInfoBubbleWidget");
        this._layoutPopup.addChild(this._itemInfoBubbleWidget);
        this._itemInfoBubbleWidget.setCascadeOpacityEnabled(true);
        this._itemInfoBubbleWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._itemInfoBubbleWidget, 0.494, 0.434);
        this._itemInfoBubbleWidget.setVisible(false);
        let _itemInfoBubbleWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._itemInfoBubbleWidget);

    },



});

/**
 * Create BuildUpPayPopup
 * @returns {_ccs.BuildUpPayPopup}
 */
_ccs.BuildUpPayPopup.create = function () {
    return new _ccs.BuildUpPayPopup();
};
