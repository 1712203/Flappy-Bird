/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.FriendDetailPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.FriendDetailPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.Layout} */
    _layoutBackground: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundBack: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundFront: null,
    /** @type {ccui.Layout} */
    _layoutInfoDetail: null,
    /** @type {ccui.Layout} */
    _layoutInfoSimple: null,
    /** @type {ccui.ImageView} */
    _imgInfoDetailBackground: null,
    /** @type {ccui.Layout} */
    _layoutInfo: null,
    /** @type {ck.Text} */
    _txtName: null,
    /** @type {ck.Text} */
    _txtLevelTitle: null,
    /** @type {ck.Text} */
    _txtLevel: null,
    /** @type {ck.Text} */
    _txtGoldTitle: null,
    /** @type {ck.Text} */
    _txtGold: null,
    /** @type {ccui.Layout} */
    _layoutAvatar: null,
    /** @type {Avatar} */
    _avatar: null,
    /** @type {ccui.Layout} */
    _layoutInfoPisti: null,
    /** @type {ccui.Layout} */
    _layoutInfoWinLose: null,
    /** @type {ccui.ImageView} */
    _imgIconBulleting01: null,
    /** @type {ck.Text} */
    _txtWinLoseTitle: null,
    /** @type {ck.Text} */
    _txtWinLose: null,
    /** @type {ccui.Layout} */
    _layoutInfoBiggestGoldWin: null,
    /** @type {ccui.ImageView} */
    _imgIconBulleting02: null,
    /** @type {ck.Text} */
    _txtBiggestGoldWinTitle: null,
    /** @type {ck.Text} */
    _txtBiggestGoldWin: null,
    /** @type {ccui.Layout} */
    _layoutInfoRanking: null,
    /** @type {ccui.Layout} */
    _layoutRankingTitle: null,
    /** @type {ck.Text} */
    _txtRankingMedal: null,
    /** @type {ccui.ImageView} */
    _imgRankingMedalDecor01: null,
    /** @type {ccui.ImageView} */
    _imgRankingMedalDecor02: null,
    /** @type {ccui.Layout} */
    _layoutRankingMedal: null,
    /** @type {ccui.Layout} */
    _layoutRankingMedalHolder01: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundRankingMedalHolder01: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundRankingMedalHolder02: null,
    /** @type {ccui.Layout} */
    _layoutRankingMedalHolder02: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundRankingMedalHolder01: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundRankingMedalHolder02: null,
    /** @type {ccui.Layout} */
    _layoutRankingMedalHolder03: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundRankingMedalHolder01: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundRankingMedalHolder02: null,
    /** @type {ccui.Layout} */
    _layoutRankingMedalHolder04: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundRankingMedalHolder01: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundRankingMedalHolder02: null,
    /** @type {ccui.Layout} */
    _layoutRankingMedalHolder05: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundRankingMedalHolder01: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundRankingMedalHolder02: null,
    /** @type {AsyncButton} */
    _btnSendMessage: null,
    /** @type {ccui.ImageView} */
    _imgButtonSendMessage: null,
    /** @type {ck.Text} */
    _txtButtonSendMessage: null,
    /** @type {ccui.ImageView} */
    _imgLoadingButtonSendMessage: null,
    /** @type {AsyncButton} */
    _btnDelete: null,
    /** @type {ccui.ImageView} */
    _imgButtonDelete: null,
    /** @type {ck.Text} */
    _txtButtonDelete: null,
    /** @type {ccui.ImageView} */
    _imgLoadingButtonDelete: null,
    /** @type {ccui.Layout} */
    _layoutClose: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,


    /**
     * _ccs.FriendDetailPopup constructor
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
        let _layoutPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        this._layoutPopup.setTouchEnabled(true);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(520, 580));

        ///// # _layoutBackground
        this._layoutBackground = new ccui.Layout();
        this._layoutBackground.setName("_layoutBackground");
        this._layoutPopup.addChild(this._layoutBackground);
        this._layoutBackground.setCascadeOpacityEnabled(true);
        this._layoutBackground.setCascadeColorEnabled(true);
        this._layoutBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBackground, 0.5, 0.5);
        let _layoutBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBackground);
        _layoutBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBackgroundLayoutComponent.setPositionPercentX(0.5);
        _layoutBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBackgroundLayoutComponent.setPositionPercentY(0.5);
        _layoutBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentWidth(1);
        _layoutBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentHeight(1);
        this._layoutBackground.setTouchEnabled(true);
        this._layoutBackground.setUnifySizeEnabled(false);
        this._layoutBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBackground, 1, 1);

        ///// # _imgBackgroundBack
        this._imgBackgroundBack = new ccui.ImageView();
        this._imgBackgroundBack.setName("_imgBackgroundBack");
        this._layoutBackground.addChild(this._imgBackgroundBack);
        this._imgBackgroundBack.setCascadeOpacityEnabled(true);
        this._imgBackgroundBack.setCascadeColorEnabled(true);
        this._imgBackgroundBack.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundBack, 0.5, 0.5);
        let _imgBackgroundBackLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundBack);
        _imgBackgroundBackLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundBackLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundBackLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundBackLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundBackLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundBackLayoutComponent.setPercentWidth(1);
        _imgBackgroundBackLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundBackLayoutComponent.setPercentHeight(1);
        this._imgBackgroundBack.loadTexture("basics/popup/Back.png", 1);
        this._imgBackgroundBack.setUnifySizeEnabled(false);
        this._imgBackgroundBack.ignoreContentAdaptWithSize(false);
        this._imgBackgroundBack.setScale9Enabled(true);
        this._imgBackgroundBack.setCapInsets(cc.rect(69, 57, 72, 61));
        ck.UIUtils.setSizePercent(this._imgBackgroundBack, 1, 1);
        this._imgBackgroundBack.setTouchEnabled(false);

        ///// # _imgBackgroundFront
        this._imgBackgroundFront = new ccui.ImageView();
        this._imgBackgroundFront.setName("_imgBackgroundFront");
        this._layoutBackground.addChild(this._imgBackgroundFront);
        this._imgBackgroundFront.setCascadeOpacityEnabled(true);
        this._imgBackgroundFront.setCascadeColorEnabled(true);
        this._imgBackgroundFront.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundFront, 0.5, 0.5);
        let _imgBackgroundFrontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundFront);
        _imgBackgroundFrontLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundFrontLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundFrontLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPercentWidth(0.95);
        _imgBackgroundFrontLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPercentHeight(0.96);
        this._imgBackgroundFront.loadTexture("basics/popup/Font.png", 1);
        this._imgBackgroundFront.setUnifySizeEnabled(false);
        this._imgBackgroundFront.ignoreContentAdaptWithSize(false);
        this._imgBackgroundFront.setScale9Enabled(true);
        this._imgBackgroundFront.setCapInsets(cc.rect(69, 57, 15, 31));
        ck.UIUtils.setSizePercent(this._imgBackgroundFront, 0.95, 0.96);
        this._imgBackgroundFront.setTouchEnabled(false);

        ///// # _layoutInfoDetail
        this._layoutInfoDetail = new ccui.Layout();
        this._layoutInfoDetail.setName("_layoutInfoDetail");
        this._layoutPopup.addChild(this._layoutInfoDetail);
        this._layoutInfoDetail.setCascadeOpacityEnabled(true);
        this._layoutInfoDetail.setCascadeColorEnabled(true);
        this._layoutInfoDetail.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutInfoDetail, 0.5, 0.9435);
        let _layoutInfoDetailLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInfoDetail);
        _layoutInfoDetailLayoutComponent.setPositionPercentXEnabled(true);
        _layoutInfoDetailLayoutComponent.setPositionPercentX(0.5);
        _layoutInfoDetailLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _layoutInfoDetailLayoutComponent.setTopMargin(32.7533);
        this._layoutInfoDetail.setTouchEnabled(true);
        this._layoutInfoDetail.setUnifySizeEnabled(false);
        this._layoutInfoDetail.ignoreContentAdaptWithSize(false);
        this._layoutInfoDetail.setContentSize(cc.size(460, 261.4758));

        ///// # _layoutInfoSimple
        this._layoutInfoSimple = new ccui.Layout();
        this._layoutInfoSimple.setName("_layoutInfoSimple");
        this._layoutInfoDetail.addChild(this._layoutInfoSimple);
        this._layoutInfoSimple.setCascadeOpacityEnabled(true);
        this._layoutInfoSimple.setCascadeColorEnabled(true);
        this._layoutInfoSimple.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutInfoSimple, 0.5, 1);
        let _layoutInfoSimpleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInfoSimple);
        _layoutInfoSimpleLayoutComponent.setPositionPercentXEnabled(true);
        _layoutInfoSimpleLayoutComponent.setPositionPercentX(0.5);
        _layoutInfoSimpleLayoutComponent.setPositionPercentYEnabled(true);
        _layoutInfoSimpleLayoutComponent.setPositionPercentY(1);
        _layoutInfoSimpleLayoutComponent.setPercentWidthEnabled(true);
        _layoutInfoSimpleLayoutComponent.setPercentWidth(1);
        this._layoutInfoSimple.setTouchEnabled(true);
        this._layoutInfoSimple.setUnifySizeEnabled(false);
        this._layoutInfoSimple.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutInfoSimple, 1);
        this._layoutInfoSimple.setContentSize(cc.size(this._layoutInfoSimple.width, 130));

        ///// # _imgInfoDetailBackground
        this._imgInfoDetailBackground = new ccui.ImageView();
        this._imgInfoDetailBackground.setName("_imgInfoDetailBackground");
        this._layoutInfoSimple.addChild(this._imgInfoDetailBackground);
        this._imgInfoDetailBackground.setCascadeOpacityEnabled(true);
        this._imgInfoDetailBackground.setCascadeColorEnabled(true);
        this._imgInfoDetailBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgInfoDetailBackground, 0.5, 0.5);
        this._imgInfoDetailBackground.setColor(cc.color(223, 205, 183, 255));
        let _imgInfoDetailBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgInfoDetailBackground);
        _imgInfoDetailBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgInfoDetailBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgInfoDetailBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgInfoDetailBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgInfoDetailBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgInfoDetailBackgroundLayoutComponent.setPercentWidth(1);
        _imgInfoDetailBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgInfoDetailBackgroundLayoutComponent.setPercentHeight(1);
        this._imgInfoDetailBackground.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgInfoDetailBackground.setUnifySizeEnabled(false);
        this._imgInfoDetailBackground.ignoreContentAdaptWithSize(false);
        this._imgInfoDetailBackground.setScale9Enabled(true);
        this._imgInfoDetailBackground.setCapInsets(cc.rect(10, 10, 44, 44));
        ck.UIUtils.setSizePercent(this._imgInfoDetailBackground, 1, 1);
        this._imgInfoDetailBackground.setTouchEnabled(false);

        ///// # _layoutInfo
        this._layoutInfo = new ccui.Layout();
        this._layoutInfo.setName("_layoutInfo");
        this._layoutInfoSimple.addChild(this._layoutInfo);
        this._layoutInfo.setCascadeOpacityEnabled(true);
        this._layoutInfo.setCascadeColorEnabled(true);
        this._layoutInfo.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutInfo, 0.2935, 0.5);
        let _layoutInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInfo);
        _layoutInfoLayoutComponent.setPositionPercentYEnabled(true);
        _layoutInfoLayoutComponent.setPositionPercentY(0.5);
        _layoutInfoLayoutComponent.setPercentHeightEnabled(true);
        _layoutInfoLayoutComponent.setPercentHeight(1);
        this._layoutInfo.setTouchEnabled(false);
        this._layoutInfo.setUnifySizeEnabled(false);
        this._layoutInfo.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this._layoutInfo, 1);
        this._layoutInfo.setContentSize(cc.size(316.5378, this._layoutInfo.height));

        ///// # _txtName
        this._txtName = new ck.Text();
        this._txtName.setName("_txtName");
        this._layoutInfo.addChild(this._txtName);
        this._txtName.setCascadeOpacityEnabled(true);
        this._txtName.setCascadeColorEnabled(true);
        this._txtName.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName, 0, 0.8);
        this._txtName.setTextColor(cc.color(160, 134, 114, 255));
        let _txtNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName);
        _txtNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameLayoutComponent.setPositionPercentX(0);
        _txtNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameLayoutComponent.setPositionPercentY(0.8);
        _txtNameLayoutComponent.setPercentWidthEnabled(true);
        _txtNameLayoutComponent.setPercentWidth(1);
        this._txtName.setTouchEnabled(false);
        this._txtName.setUnifySizeEnabled(false);
        this._txtName.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtName, 1);
        this._txtName.setContentSize(cc.size(this._txtName.width, 30));
        this._txtName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName.setDefaultFontSize(30);
        this._txtName.setTextHorizontalAlignment(0);
        this._txtName.setTextVerticalAlignment(1);

        ///// # _txtLevelTitle
        this._txtLevelTitle = new ck.Text();
        this._txtLevelTitle.setName("_txtLevelTitle");
        this._layoutInfo.addChild(this._txtLevelTitle);
        this._txtLevelTitle.setCascadeOpacityEnabled(true);
        this._txtLevelTitle.setCascadeColorEnabled(true);
        this._txtLevelTitle.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLevelTitle, 0, 0.5);
        this._txtLevelTitle.setTextColor(cc.color(98, 80, 66, 255));
        let _txtLevelTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLevelTitle);
        _txtLevelTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtLevelTitleLayoutComponent.setPositionPercentX(0);
        _txtLevelTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtLevelTitleLayoutComponent.setPositionPercentY(0.5);
        _txtLevelTitleLayoutComponent.setPercentWidthEnabled(true);
        _txtLevelTitleLayoutComponent.setPercentWidth(0.1674);
        this._txtLevelTitle.setTouchEnabled(false);
        this._txtLevelTitle.ignoreContentAdaptWithSize(true);
        this._txtLevelTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLevelTitle.setDefaultFontSize(28);
        this._txtLevelTitle.setTextHorizontalAlignment(0);
        this._txtLevelTitle.setTextVerticalAlignment(1);

        ///// # _txtLevel
        this._txtLevel = new ck.Text();
        this._txtLevel.setName("_txtLevel");
        this._txtLevelTitle.addChild(this._txtLevel);
        this._txtLevel.setCascadeOpacityEnabled(true);
        this._txtLevel.setCascadeColorEnabled(true);
        this._txtLevel.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLevel, 1.0755, 0.5);
        this._txtLevel.setTextColor(cc.color(143, 54, 78, 255));
        let _txtLevelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLevel);
        _txtLevelLayoutComponent.setPositionPercentXEnabled(true);
        _txtLevelLayoutComponent.setPositionPercentX(1.0755);
        _txtLevelLayoutComponent.setPositionPercentYEnabled(true);
        _txtLevelLayoutComponent.setPositionPercentY(0.5);
        _txtLevelLayoutComponent.setPercentWidthEnabled(true);
        _txtLevelLayoutComponent.setPercentWidth(1.3962);
        this._txtLevel.setTouchEnabled(false);
        this._txtLevel.ignoreContentAdaptWithSize(true);
        this._txtLevel.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtLevel.setDefaultFontSize(28);
        this._txtLevel.setTextHorizontalAlignment(0);
        this._txtLevel.setTextVerticalAlignment(1);

        ///// # _txtGoldTitle
        this._txtGoldTitle = new ck.Text();
        this._txtGoldTitle.setName("_txtGoldTitle");
        this._layoutInfo.addChild(this._txtGoldTitle);
        this._txtGoldTitle.setCascadeOpacityEnabled(true);
        this._txtGoldTitle.setCascadeColorEnabled(true);
        this._txtGoldTitle.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGoldTitle, 0, 0.2069);
        this._txtGoldTitle.setTextColor(cc.color(98, 80, 66, 255));
        let _txtGoldTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGoldTitle);
        _txtGoldTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtGoldTitleLayoutComponent.setPositionPercentX(0);
        _txtGoldTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtGoldTitleLayoutComponent.setPositionPercentY(0.2069);
        _txtGoldTitleLayoutComponent.setPercentWidthEnabled(true);
        _txtGoldTitleLayoutComponent.setPercentWidth(0.1422);
        this._txtGoldTitle.setTouchEnabled(false);
        this._txtGoldTitle.ignoreContentAdaptWithSize(true);
        this._txtGoldTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtGoldTitle.setDefaultFontSize(28);
        this._txtGoldTitle.setTextHorizontalAlignment(0);
        this._txtGoldTitle.setTextVerticalAlignment(1);

        ///// # _txtGold
        this._txtGold = new ck.Text();
        this._txtGold.setName("_txtGold");
        this._txtGoldTitle.addChild(this._txtGold);
        this._txtGold.setCascadeOpacityEnabled(true);
        this._txtGold.setCascadeColorEnabled(true);
        this._txtGold.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGold, 1.1111, 0.5);
        this._txtGold.setTextColor(cc.color(162, 99, 50, 255));
        let _txtGoldLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGold);
        _txtGoldLayoutComponent.setPositionPercentXEnabled(true);
        _txtGoldLayoutComponent.setPositionPercentX(1.1111);
        _txtGoldLayoutComponent.setPositionPercentYEnabled(true);
        _txtGoldLayoutComponent.setPositionPercentY(0.5);
        _txtGoldLayoutComponent.setPercentWidthEnabled(true);
        _txtGoldLayoutComponent.setPercentWidth(4.0444);
        this._txtGold.setTouchEnabled(false);
        this._txtGold.ignoreContentAdaptWithSize(true);
        this._txtGold.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGold.setDefaultFontSize(28);
        this._txtGold.setTextHorizontalAlignment(0);
        this._txtGold.setTextVerticalAlignment(1);

        ///// # _layoutAvatar
        this._layoutAvatar = new ccui.Layout();
        this._layoutAvatar.setName("_layoutAvatar");
        this._layoutInfoSimple.addChild(this._layoutAvatar);
        this._layoutAvatar.setCascadeOpacityEnabled(true);
        this._layoutAvatar.setCascadeColorEnabled(true);
        this._layoutAvatar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutAvatar, 0.1459, 0.5);
        let _layoutAvatarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAvatar);
        _layoutAvatarLayoutComponent.setPositionPercentYEnabled(true);
        _layoutAvatarLayoutComponent.setPositionPercentY(0.5);
        this._layoutAvatar.setTouchEnabled(false);
        this._layoutAvatar.setUnifySizeEnabled(false);
        this._layoutAvatar.ignoreContentAdaptWithSize(false);
        this._layoutAvatar.setContentSize(cc.size(100, 100));

        ///// # _avatar
        this._avatar = new Avatar(ck.AvatarType.CIRCLE);
        this._avatar.setName("_avatar");
        this._layoutAvatar.addChild(this._avatar);
        this._avatar.setCascadeOpacityEnabled(true);
        this._avatar.setCascadeColorEnabled(true);
        this._avatar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._avatar, 0.5, 0.5);
        let _avatarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._avatar);
        _avatarLayoutComponent.setPositionPercentXEnabled(true);
        _avatarLayoutComponent.setPositionPercentX(0.5);
        _avatarLayoutComponent.setPositionPercentYEnabled(true);
        _avatarLayoutComponent.setPositionPercentY(0.5);
        _avatarLayoutComponent.setPercentWidthEnabled(true);
        _avatarLayoutComponent.setPercentWidth(1);
        _avatarLayoutComponent.setPercentHeightEnabled(true);
        _avatarLayoutComponent.setPercentHeight(1);
        this._avatar.setWidth(100);

        ///// # _layoutInfoPisti
        this._layoutInfoPisti = new ccui.Layout();
        this._layoutInfoPisti.setName("_layoutInfoPisti");
        this._layoutInfoDetail.addChild(this._layoutInfoPisti);
        this._layoutInfoPisti.setCascadeOpacityEnabled(true);
        this._layoutInfoPisti.setCascadeColorEnabled(true);
        this._layoutInfoPisti.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutInfoPisti, 0.5, 0);
        let _layoutInfoPistiLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInfoPisti);
        _layoutInfoPistiLayoutComponent.setPositionPercentXEnabled(true);
        _layoutInfoPistiLayoutComponent.setPositionPercentX(0.5);
        _layoutInfoPistiLayoutComponent.setPositionPercentYEnabled(true);
        _layoutInfoPistiLayoutComponent.setPositionPercentY(0);
        _layoutInfoPistiLayoutComponent.setPercentWidthEnabled(true);
        _layoutInfoPistiLayoutComponent.setPercentWidth(1);
        this._layoutInfoPisti.setTouchEnabled(true);
        this._layoutInfoPisti.setUnifySizeEnabled(false);
        this._layoutInfoPisti.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutInfoPisti, 1);
        this._layoutInfoPisti.setContentSize(cc.size(this._layoutInfoPisti.width, 130));

        ///// # _layoutInfoWinLose
        this._layoutInfoWinLose = new ccui.Layout();
        this._layoutInfoWinLose.setName("_layoutInfoWinLose");
        this._layoutInfoPisti.addChild(this._layoutInfoWinLose);
        this._layoutInfoWinLose.setCascadeOpacityEnabled(true);
        this._layoutInfoWinLose.setCascadeColorEnabled(true);
        this._layoutInfoWinLose.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutInfoWinLose, 0, 0.7692);
        let _layoutInfoWinLoseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInfoWinLose);
        _layoutInfoWinLoseLayoutComponent.setPercentWidthEnabled(true);
        _layoutInfoWinLoseLayoutComponent.setPercentWidth(1);
        this._layoutInfoWinLose.setTouchEnabled(true);
        this._layoutInfoWinLose.setUnifySizeEnabled(false);
        this._layoutInfoWinLose.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutInfoWinLose, 1);
        this._layoutInfoWinLose.setContentSize(cc.size(this._layoutInfoWinLose.width, 37.372));

        ///// # _imgIconBulleting01
        this._imgIconBulleting01 = new ccui.ImageView();
        this._imgIconBulleting01.setName("_imgIconBulleting01");
        this._layoutInfoWinLose.addChild(this._imgIconBulleting01);
        this._imgIconBulleting01.setCascadeOpacityEnabled(true);
        this._imgIconBulleting01.setCascadeColorEnabled(true);
        this._imgIconBulleting01.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconBulleting01, 0.0217, 0.5);
        this._imgIconBulleting01.setColor(cc.color(98, 80, 66, 255));
        let _imgIconBulleting01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconBulleting01);
        _imgIconBulleting01LayoutComponent.setPositionPercentYEnabled(true);
        _imgIconBulleting01LayoutComponent.setPositionPercentY(0.5);
        this._imgIconBulleting01.loadTexture("icons/flat/Badge.png", 1);
        this._imgIconBulleting01.setUnifySizeEnabled(false);
        this._imgIconBulleting01.ignoreContentAdaptWithSize(false);
        this._imgIconBulleting01.setContentSize(cc.size(32, 32));
        this._imgIconBulleting01.setTouchEnabled(false);

        ///// # _txtWinLoseTitle
        this._txtWinLoseTitle = new ck.Text();
        this._txtWinLoseTitle.setName("_txtWinLoseTitle");
        this._layoutInfoWinLose.addChild(this._txtWinLoseTitle);
        this._txtWinLoseTitle.setCascadeOpacityEnabled(true);
        this._txtWinLoseTitle.setCascadeColorEnabled(true);
        this._txtWinLoseTitle.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtWinLoseTitle, 0.0978, 0.5);
        this._txtWinLoseTitle.setTextColor(cc.color(98, 80, 66, 255));
        let _txtWinLoseTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtWinLoseTitle);
        _txtWinLoseTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtWinLoseTitleLayoutComponent.setPositionPercentY(0.5);
        _txtWinLoseTitleLayoutComponent.setPercentWidthEnabled(true);
        _txtWinLoseTitleLayoutComponent.setPercentWidth(0.2283);
        this._txtWinLoseTitle.setTouchEnabled(false);
        this._txtWinLoseTitle.ignoreContentAdaptWithSize(true);
        this._txtWinLoseTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtWinLoseTitle.setDefaultFontSize(30);
        this._txtWinLoseTitle.setTextHorizontalAlignment(0);
        this._txtWinLoseTitle.setTextVerticalAlignment(1);

        ///// # _txtWinLose
        this._txtWinLose = new ck.Text();
        this._txtWinLose.setName("_txtWinLose");
        this._txtWinLoseTitle.addChild(this._txtWinLose);
        this._txtWinLose.setCascadeOpacityEnabled(true);
        this._txtWinLose.setCascadeColorEnabled(true);
        this._txtWinLose.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtWinLose, 1, 0.5);
        this._txtWinLose.setTextColor(cc.color(143, 54, 78, 255));
        let _txtWinLoseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtWinLose);
        _txtWinLoseLayoutComponent.setPositionPercentXEnabled(true);
        _txtWinLoseLayoutComponent.setPositionPercentX(1);
        _txtWinLoseLayoutComponent.setPositionPercentYEnabled(true);
        _txtWinLoseLayoutComponent.setPositionPercentY(0.5);
        _txtWinLoseLayoutComponent.setPercentWidthEnabled(true);
        _txtWinLoseLayoutComponent.setPercentWidth(1.8095);
        this._txtWinLose.setTouchEnabled(false);
        this._txtWinLose.ignoreContentAdaptWithSize(true);
        this._txtWinLose.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtWinLose.setDefaultFontSize(30);
        this._txtWinLose.setTextHorizontalAlignment(0);
        this._txtWinLose.setTextVerticalAlignment(1);

        ///// # _layoutInfoBiggestGoldWin
        this._layoutInfoBiggestGoldWin = new ccui.Layout();
        this._layoutInfoBiggestGoldWin.setName("_layoutInfoBiggestGoldWin");
        this._layoutInfoPisti.addChild(this._layoutInfoBiggestGoldWin);
        this._layoutInfoBiggestGoldWin.setCascadeOpacityEnabled(true);
        this._layoutInfoBiggestGoldWin.setCascadeColorEnabled(true);
        this._layoutInfoBiggestGoldWin.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutInfoBiggestGoldWin, 0, 0.4077);
        let _layoutInfoBiggestGoldWinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInfoBiggestGoldWin);
        _layoutInfoBiggestGoldWinLayoutComponent.setPercentWidthEnabled(true);
        _layoutInfoBiggestGoldWinLayoutComponent.setPercentWidth(1);
        this._layoutInfoBiggestGoldWin.setTouchEnabled(true);
        this._layoutInfoBiggestGoldWin.setUnifySizeEnabled(false);
        this._layoutInfoBiggestGoldWin.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutInfoBiggestGoldWin, 1);
        this._layoutInfoBiggestGoldWin.setContentSize(cc.size(this._layoutInfoBiggestGoldWin.width, 37.372));

        ///// # _imgIconBulleting02
        this._imgIconBulleting02 = new ccui.ImageView();
        this._imgIconBulleting02.setName("_imgIconBulleting02");
        this._layoutInfoBiggestGoldWin.addChild(this._imgIconBulleting02);
        this._imgIconBulleting02.setCascadeOpacityEnabled(true);
        this._imgIconBulleting02.setCascadeColorEnabled(true);
        this._imgIconBulleting02.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconBulleting02, 0.0217, 0.5);
        this._imgIconBulleting02.setColor(cc.color(98, 80, 66, 255));
        let _imgIconBulleting02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconBulleting02);
        _imgIconBulleting02LayoutComponent.setPositionPercentYEnabled(true);
        _imgIconBulleting02LayoutComponent.setPositionPercentY(0.5);
        this._imgIconBulleting02.loadTexture("icons/flat/Badge.png", 1);
        this._imgIconBulleting02.setUnifySizeEnabled(false);
        this._imgIconBulleting02.ignoreContentAdaptWithSize(false);
        this._imgIconBulleting02.setContentSize(cc.size(32, 32));
        this._imgIconBulleting02.setTouchEnabled(false);

        ///// # _txtBiggestGoldWinTitle
        this._txtBiggestGoldWinTitle = new ck.Text();
        this._txtBiggestGoldWinTitle.setName("_txtBiggestGoldWinTitle");
        this._layoutInfoBiggestGoldWin.addChild(this._txtBiggestGoldWinTitle);
        this._txtBiggestGoldWinTitle.setCascadeOpacityEnabled(true);
        this._txtBiggestGoldWinTitle.setCascadeColorEnabled(true);
        this._txtBiggestGoldWinTitle.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBiggestGoldWinTitle, 0.0978, 0.5);
        this._txtBiggestGoldWinTitle.setTextColor(cc.color(98, 80, 66, 255));
        let _txtBiggestGoldWinTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBiggestGoldWinTitle);
        _txtBiggestGoldWinTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtBiggestGoldWinTitleLayoutComponent.setPositionPercentY(0.5);
        _txtBiggestGoldWinTitleLayoutComponent.setPercentWidthEnabled(true);
        _txtBiggestGoldWinTitleLayoutComponent.setPercentWidth(0.3761);
        this._txtBiggestGoldWinTitle.setTouchEnabled(false);
        this._txtBiggestGoldWinTitle.ignoreContentAdaptWithSize(true);
        this._txtBiggestGoldWinTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBiggestGoldWinTitle.setDefaultFontSize(30);
        this._txtBiggestGoldWinTitle.setTextHorizontalAlignment(0);
        this._txtBiggestGoldWinTitle.setTextVerticalAlignment(1);

        ///// # _txtBiggestGoldWin
        this._txtBiggestGoldWin = new ck.Text();
        this._txtBiggestGoldWin.setName("_txtBiggestGoldWin");
        this._txtBiggestGoldWinTitle.addChild(this._txtBiggestGoldWin);
        this._txtBiggestGoldWin.setCascadeOpacityEnabled(true);
        this._txtBiggestGoldWin.setCascadeColorEnabled(true);
        this._txtBiggestGoldWin.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBiggestGoldWin, 1, 0.5);
        this._txtBiggestGoldWin.setTextColor(cc.color(143, 54, 78, 255));
        let _txtBiggestGoldWinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBiggestGoldWin);
        _txtBiggestGoldWinLayoutComponent.setPositionPercentXEnabled(true);
        _txtBiggestGoldWinLayoutComponent.setPositionPercentX(1);
        _txtBiggestGoldWinLayoutComponent.setPositionPercentYEnabled(true);
        _txtBiggestGoldWinLayoutComponent.setPositionPercentY(0.5);
        _txtBiggestGoldWinLayoutComponent.setPercentWidthEnabled(true);
        _txtBiggestGoldWinLayoutComponent.setPercentWidth(1.1098);
        this._txtBiggestGoldWin.setTouchEnabled(false);
        this._txtBiggestGoldWin.ignoreContentAdaptWithSize(true);
        this._txtBiggestGoldWin.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtBiggestGoldWin.setDefaultFontSize(30);
        this._txtBiggestGoldWin.setTextHorizontalAlignment(0);
        this._txtBiggestGoldWin.setTextVerticalAlignment(1);

        ///// # _layoutInfoRanking
        this._layoutInfoRanking = new ccui.Layout();
        this._layoutInfoRanking.setName("_layoutInfoRanking");
        this._layoutPopup.addChild(this._layoutInfoRanking);
        this._layoutInfoRanking.setCascadeOpacityEnabled(true);
        this._layoutInfoRanking.setCascadeColorEnabled(true);
        this._layoutInfoRanking.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutInfoRanking, 0.5, 0.1996);
        let _layoutInfoRankingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInfoRanking);
        _layoutInfoRankingLayoutComponent.setPositionPercentXEnabled(true);
        _layoutInfoRankingLayoutComponent.setPositionPercentX(0.5);
        _layoutInfoRankingLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _layoutInfoRankingLayoutComponent.setTopMargin(279.5922);
        this._layoutInfoRanking.setTouchEnabled(true);
        this._layoutInfoRanking.setUnifySizeEnabled(false);
        this._layoutInfoRanking.ignoreContentAdaptWithSize(false);
        this._layoutInfoRanking.setContentSize(cc.size(460, 184.6409));

        ///// # _layoutRankingTitle
        this._layoutRankingTitle = new ccui.Layout();
        this._layoutRankingTitle.setName("_layoutRankingTitle");
        this._layoutInfoRanking.addChild(this._layoutRankingTitle);
        this._layoutRankingTitle.setCascadeOpacityEnabled(true);
        this._layoutRankingTitle.setCascadeColorEnabled(true);
        this._layoutRankingTitle.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutRankingTitle, 0.5, 1);
        let _layoutRankingTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRankingTitle);
        _layoutRankingTitleLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRankingTitleLayoutComponent.setPositionPercentX(0.5);
        _layoutRankingTitleLayoutComponent.setPositionPercentYEnabled(true);
        _layoutRankingTitleLayoutComponent.setPositionPercentY(1);
        _layoutRankingTitleLayoutComponent.setPercentWidthEnabled(true);
        _layoutRankingTitleLayoutComponent.setPercentWidth(1);
        this._layoutRankingTitle.setTouchEnabled(true);
        this._layoutRankingTitle.setUnifySizeEnabled(false);
        this._layoutRankingTitle.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutRankingTitle, 1);
        this._layoutRankingTitle.setContentSize(cc.size(this._layoutRankingTitle.width, 50));

        ///// # _txtRankingMedal
        this._txtRankingMedal = new ck.Text();
        this._txtRankingMedal.setName("_txtRankingMedal");
        this._layoutRankingTitle.addChild(this._txtRankingMedal);
        this._txtRankingMedal.setCascadeOpacityEnabled(true);
        this._txtRankingMedal.setCascadeColorEnabled(true);
        this._txtRankingMedal.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRankingMedal, 0.5, 0.5);
        this._txtRankingMedal.setTextColor(cc.color(98, 80, 66, 255));
        let _txtRankingMedalLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRankingMedal);
        _txtRankingMedalLayoutComponent.setPositionPercentXEnabled(true);
        _txtRankingMedalLayoutComponent.setPositionPercentX(0.5);
        _txtRankingMedalLayoutComponent.setPositionPercentYEnabled(true);
        _txtRankingMedalLayoutComponent.setPositionPercentY(0.5);
        this._txtRankingMedal.setTouchEnabled(false);
        this._txtRankingMedal.ignoreContentAdaptWithSize(true);
        this._txtRankingMedal.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtRankingMedal.setDefaultFontSize(30);
        this._txtRankingMedal.setString(gm.localize.getText("TXT_RANKING_MEDAL"));
        this._txtRankingMedal.setTextHorizontalAlignment(0);
        this._txtRankingMedal.setTextVerticalAlignment(0);

        ///// # _imgRankingMedalDecor01
        this._imgRankingMedalDecor01 = new ccui.ImageView();
        this._imgRankingMedalDecor01.setName("_imgRankingMedalDecor01");
        this._txtRankingMedal.addChild(this._imgRankingMedalDecor01);
        this._imgRankingMedalDecor01.setCascadeOpacityEnabled(true);
        this._imgRankingMedalDecor01.setCascadeColorEnabled(true);
        this._imgRankingMedalDecor01.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRankingMedalDecor01, -0.1, 0.5);
        this._imgRankingMedalDecor01.setColor(cc.color(160, 134, 114, 255));
        let _imgRankingMedalDecor01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRankingMedalDecor01);
        _imgRankingMedalDecor01LayoutComponent.setPositionPercentXEnabled(true);
        _imgRankingMedalDecor01LayoutComponent.setPositionPercentX(-0.1);
        _imgRankingMedalDecor01LayoutComponent.setPositionPercentYEnabled(true);
        _imgRankingMedalDecor01LayoutComponent.setPositionPercentY(0.5);
        this._imgRankingMedalDecor01.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgRankingMedalDecor01.setUnifySizeEnabled(false);
        this._imgRankingMedalDecor01.ignoreContentAdaptWithSize(false);
        this._imgRankingMedalDecor01.setContentSize(cc.size(120, 2));
        this._imgRankingMedalDecor01.setTouchEnabled(false);

        ///// # _imgRankingMedalDecor02
        this._imgRankingMedalDecor02 = new ccui.ImageView();
        this._imgRankingMedalDecor02.setName("_imgRankingMedalDecor02");
        this._txtRankingMedal.addChild(this._imgRankingMedalDecor02);
        this._imgRankingMedalDecor02.setCascadeOpacityEnabled(true);
        this._imgRankingMedalDecor02.setCascadeColorEnabled(true);
        this._imgRankingMedalDecor02.setAnchorPoint(cc.p(0.0008, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRankingMedalDecor02, 1.1, 0.5);
        this._imgRankingMedalDecor02.setColor(cc.color(160, 134, 114, 255));
        let _imgRankingMedalDecor02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRankingMedalDecor02);
        _imgRankingMedalDecor02LayoutComponent.setPositionPercentXEnabled(true);
        _imgRankingMedalDecor02LayoutComponent.setPositionPercentX(1.1);
        _imgRankingMedalDecor02LayoutComponent.setPositionPercentYEnabled(true);
        _imgRankingMedalDecor02LayoutComponent.setPositionPercentY(0.5);
        this._imgRankingMedalDecor02.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgRankingMedalDecor02.setUnifySizeEnabled(false);
        this._imgRankingMedalDecor02.ignoreContentAdaptWithSize(false);
        this._imgRankingMedalDecor02.setContentSize(cc.size(120, 2));
        this._imgRankingMedalDecor02.setTouchEnabled(false);

        ///// # _layoutRankingMedal
        this._layoutRankingMedal = new ccui.Layout();
        this._layoutRankingMedal.setName("_layoutRankingMedal");
        this._layoutInfoRanking.addChild(this._layoutRankingMedal);
        this._layoutRankingMedal.setCascadeOpacityEnabled(true);
        this._layoutRankingMedal.setCascadeColorEnabled(true);
        this._layoutRankingMedal.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutRankingMedal, 0.5, 0.7258);
        let _layoutRankingMedalLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRankingMedal);
        _layoutRankingMedalLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRankingMedalLayoutComponent.setPositionPercentX(0.5);
        _layoutRankingMedalLayoutComponent.setPositionPercentYEnabled(true);
        _layoutRankingMedalLayoutComponent.setPositionPercentY(0.7258);
        _layoutRankingMedalLayoutComponent.setPercentWidthEnabled(true);
        _layoutRankingMedalLayoutComponent.setPercentWidth(1);
        this._layoutRankingMedal.setTouchEnabled(true);
        this._layoutRankingMedal.setUnifySizeEnabled(false);
        this._layoutRankingMedal.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutRankingMedal, 1);
        this._layoutRankingMedal.setContentSize(cc.size(this._layoutRankingMedal.width, 120));

        ///// # _layoutRankingMedalHolder01
        this._layoutRankingMedalHolder01 = new ccui.Layout();
        this._layoutRankingMedalHolder01.setName("_layoutRankingMedalHolder01");
        this._layoutRankingMedal.addChild(this._layoutRankingMedalHolder01);
        this._layoutRankingMedalHolder01.setCascadeOpacityEnabled(true);
        this._layoutRankingMedalHolder01.setCascadeColorEnabled(true);
        this._layoutRankingMedalHolder01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutRankingMedalHolder01, 0.1087, 0.5);
        let _layoutRankingMedalHolder01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRankingMedalHolder01);
        _layoutRankingMedalHolder01LayoutComponent.setPositionPercentYEnabled(true);
        _layoutRankingMedalHolder01LayoutComponent.setPositionPercentY(0.5);
        this._layoutRankingMedalHolder01.setTouchEnabled(true);
        this._layoutRankingMedalHolder01.setUnifySizeEnabled(false);
        this._layoutRankingMedalHolder01.ignoreContentAdaptWithSize(false);
        this._layoutRankingMedalHolder01.setContentSize(cc.size(80, 80));

        ///// # _imgBackgroundRankingMedalHolder01
        this._imgBackgroundRankingMedalHolder01 = new ccui.ImageView();
        this._imgBackgroundRankingMedalHolder01.setName("_imgBackgroundRankingMedalHolder01");
        this._layoutRankingMedalHolder01.addChild(this._imgBackgroundRankingMedalHolder01);
        this._imgBackgroundRankingMedalHolder01.setCascadeOpacityEnabled(true);
        this._imgBackgroundRankingMedalHolder01.setCascadeColorEnabled(true);
        this._imgBackgroundRankingMedalHolder01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundRankingMedalHolder01, 0.5, 0.5);
        this._imgBackgroundRankingMedalHolder01.setColor(cc.color(160, 134, 114, 255));
        let _imgBackgroundRankingMedalHolder01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundRankingMedalHolder01);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPercentWidth(1);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPercentHeight(1);
        this._imgBackgroundRankingMedalHolder01.loadTexture("basics/shapes/Circle_256px.png", 1);
        this._imgBackgroundRankingMedalHolder01.setUnifySizeEnabled(false);
        this._imgBackgroundRankingMedalHolder01.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBackgroundRankingMedalHolder01, 1, 1);
        this._imgBackgroundRankingMedalHolder01.setTouchEnabled(false);

        ///// # _imgBackgroundRankingMedalHolder02
        this._imgBackgroundRankingMedalHolder02 = new ccui.ImageView();
        this._imgBackgroundRankingMedalHolder02.setName("_imgBackgroundRankingMedalHolder02");
        this._layoutRankingMedalHolder01.addChild(this._imgBackgroundRankingMedalHolder02);
        this._imgBackgroundRankingMedalHolder02.setCascadeOpacityEnabled(true);
        this._imgBackgroundRankingMedalHolder02.setCascadeColorEnabled(true);
        this._imgBackgroundRankingMedalHolder02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundRankingMedalHolder02, 0.5, 0.53);
        this._imgBackgroundRankingMedalHolder02.setColor(cc.color(223, 205, 183, 255));
        let _imgBackgroundRankingMedalHolder02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundRankingMedalHolder02);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPositionPercentY(0.53);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPercentWidth(1);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPercentHeight(1);
        this._imgBackgroundRankingMedalHolder02.loadTexture("basics/shapes/Circle_256px.png", 1);
        this._imgBackgroundRankingMedalHolder02.setUnifySizeEnabled(false);
        this._imgBackgroundRankingMedalHolder02.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBackgroundRankingMedalHolder02, 1, 1);
        this._imgBackgroundRankingMedalHolder02.setTouchEnabled(false);

        ///// # _layoutRankingMedalHolder02
        this._layoutRankingMedalHolder02 = new ccui.Layout();
        this._layoutRankingMedalHolder02.setName("_layoutRankingMedalHolder02");
        this._layoutRankingMedal.addChild(this._layoutRankingMedalHolder02);
        this._layoutRankingMedalHolder02.setCascadeOpacityEnabled(true);
        this._layoutRankingMedalHolder02.setCascadeColorEnabled(true);
        this._layoutRankingMedalHolder02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutRankingMedalHolder02, 0.3043, 0.5);
        let _layoutRankingMedalHolder02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRankingMedalHolder02);
        _layoutRankingMedalHolder02LayoutComponent.setPositionPercentYEnabled(true);
        _layoutRankingMedalHolder02LayoutComponent.setPositionPercentY(0.5);
        this._layoutRankingMedalHolder02.setTouchEnabled(true);
        this._layoutRankingMedalHolder02.setUnifySizeEnabled(false);
        this._layoutRankingMedalHolder02.ignoreContentAdaptWithSize(false);
        this._layoutRankingMedalHolder02.setContentSize(cc.size(80, 80));

        ///// # _imgBackgroundRankingMedalHolder01
        this._imgBackgroundRankingMedalHolder01 = new ccui.ImageView();
        this._imgBackgroundRankingMedalHolder01.setName("_imgBackgroundRankingMedalHolder01");
        this._layoutRankingMedalHolder02.addChild(this._imgBackgroundRankingMedalHolder01);
        this._imgBackgroundRankingMedalHolder01.setCascadeOpacityEnabled(true);
        this._imgBackgroundRankingMedalHolder01.setCascadeColorEnabled(true);
        this._imgBackgroundRankingMedalHolder01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundRankingMedalHolder01, 0.5, 0.5);
        this._imgBackgroundRankingMedalHolder01.setColor(cc.color(160, 134, 114, 255));
        let _imgBackgroundRankingMedalHolder01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundRankingMedalHolder01);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPercentWidth(1);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPercentHeight(1);
        this._imgBackgroundRankingMedalHolder01.loadTexture("basics/shapes/Circle_256px.png", 1);
        this._imgBackgroundRankingMedalHolder01.setUnifySizeEnabled(false);
        this._imgBackgroundRankingMedalHolder01.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBackgroundRankingMedalHolder01, 1, 1);
        this._imgBackgroundRankingMedalHolder01.setTouchEnabled(false);

        ///// # _imgBackgroundRankingMedalHolder02
        this._imgBackgroundRankingMedalHolder02 = new ccui.ImageView();
        this._imgBackgroundRankingMedalHolder02.setName("_imgBackgroundRankingMedalHolder02");
        this._layoutRankingMedalHolder02.addChild(this._imgBackgroundRankingMedalHolder02);
        this._imgBackgroundRankingMedalHolder02.setCascadeOpacityEnabled(true);
        this._imgBackgroundRankingMedalHolder02.setCascadeColorEnabled(true);
        this._imgBackgroundRankingMedalHolder02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundRankingMedalHolder02, 0.5, 0.53);
        this._imgBackgroundRankingMedalHolder02.setColor(cc.color(223, 205, 183, 255));
        let _imgBackgroundRankingMedalHolder02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundRankingMedalHolder02);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPositionPercentY(0.53);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPercentWidth(1);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPercentHeight(1);
        this._imgBackgroundRankingMedalHolder02.loadTexture("basics/shapes/Circle_256px.png", 1);
        this._imgBackgroundRankingMedalHolder02.setUnifySizeEnabled(false);
        this._imgBackgroundRankingMedalHolder02.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBackgroundRankingMedalHolder02, 1, 1);
        this._imgBackgroundRankingMedalHolder02.setTouchEnabled(false);

        ///// # _layoutRankingMedalHolder03
        this._layoutRankingMedalHolder03 = new ccui.Layout();
        this._layoutRankingMedalHolder03.setName("_layoutRankingMedalHolder03");
        this._layoutRankingMedal.addChild(this._layoutRankingMedalHolder03);
        this._layoutRankingMedalHolder03.setCascadeOpacityEnabled(true);
        this._layoutRankingMedalHolder03.setCascadeColorEnabled(true);
        this._layoutRankingMedalHolder03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutRankingMedalHolder03, 0.5, 0.5);
        let _layoutRankingMedalHolder03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRankingMedalHolder03);
        _layoutRankingMedalHolder03LayoutComponent.setPositionPercentYEnabled(true);
        _layoutRankingMedalHolder03LayoutComponent.setPositionPercentY(0.5);
        this._layoutRankingMedalHolder03.setTouchEnabled(true);
        this._layoutRankingMedalHolder03.setUnifySizeEnabled(false);
        this._layoutRankingMedalHolder03.ignoreContentAdaptWithSize(false);
        this._layoutRankingMedalHolder03.setContentSize(cc.size(80, 80));

        ///// # _imgBackgroundRankingMedalHolder01
        this._imgBackgroundRankingMedalHolder01 = new ccui.ImageView();
        this._imgBackgroundRankingMedalHolder01.setName("_imgBackgroundRankingMedalHolder01");
        this._layoutRankingMedalHolder03.addChild(this._imgBackgroundRankingMedalHolder01);
        this._imgBackgroundRankingMedalHolder01.setCascadeOpacityEnabled(true);
        this._imgBackgroundRankingMedalHolder01.setCascadeColorEnabled(true);
        this._imgBackgroundRankingMedalHolder01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundRankingMedalHolder01, 0.5, 0.5);
        this._imgBackgroundRankingMedalHolder01.setColor(cc.color(160, 134, 114, 255));
        let _imgBackgroundRankingMedalHolder01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundRankingMedalHolder01);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPercentWidth(1);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPercentHeight(1);
        this._imgBackgroundRankingMedalHolder01.loadTexture("basics/shapes/Circle_256px.png", 1);
        this._imgBackgroundRankingMedalHolder01.setUnifySizeEnabled(false);
        this._imgBackgroundRankingMedalHolder01.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBackgroundRankingMedalHolder01, 1, 1);
        this._imgBackgroundRankingMedalHolder01.setTouchEnabled(false);

        ///// # _imgBackgroundRankingMedalHolder02
        this._imgBackgroundRankingMedalHolder02 = new ccui.ImageView();
        this._imgBackgroundRankingMedalHolder02.setName("_imgBackgroundRankingMedalHolder02");
        this._layoutRankingMedalHolder03.addChild(this._imgBackgroundRankingMedalHolder02);
        this._imgBackgroundRankingMedalHolder02.setCascadeOpacityEnabled(true);
        this._imgBackgroundRankingMedalHolder02.setCascadeColorEnabled(true);
        this._imgBackgroundRankingMedalHolder02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundRankingMedalHolder02, 0.5, 0.53);
        this._imgBackgroundRankingMedalHolder02.setColor(cc.color(223, 205, 183, 255));
        let _imgBackgroundRankingMedalHolder02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundRankingMedalHolder02);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPositionPercentY(0.53);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPercentWidth(1);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPercentHeight(1);
        this._imgBackgroundRankingMedalHolder02.loadTexture("basics/shapes/Circle_256px.png", 1);
        this._imgBackgroundRankingMedalHolder02.setUnifySizeEnabled(false);
        this._imgBackgroundRankingMedalHolder02.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBackgroundRankingMedalHolder02, 1, 1);
        this._imgBackgroundRankingMedalHolder02.setTouchEnabled(false);

        ///// # _layoutRankingMedalHolder04
        this._layoutRankingMedalHolder04 = new ccui.Layout();
        this._layoutRankingMedalHolder04.setName("_layoutRankingMedalHolder04");
        this._layoutRankingMedal.addChild(this._layoutRankingMedalHolder04);
        this._layoutRankingMedalHolder04.setCascadeOpacityEnabled(true);
        this._layoutRankingMedalHolder04.setCascadeColorEnabled(true);
        this._layoutRankingMedalHolder04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutRankingMedalHolder04, 0.6957, 0.5);
        let _layoutRankingMedalHolder04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRankingMedalHolder04);
        _layoutRankingMedalHolder04LayoutComponent.setPositionPercentYEnabled(true);
        _layoutRankingMedalHolder04LayoutComponent.setPositionPercentY(0.5);
        this._layoutRankingMedalHolder04.setTouchEnabled(true);
        this._layoutRankingMedalHolder04.setUnifySizeEnabled(false);
        this._layoutRankingMedalHolder04.ignoreContentAdaptWithSize(false);
        this._layoutRankingMedalHolder04.setContentSize(cc.size(80, 80));

        ///// # _imgBackgroundRankingMedalHolder01
        this._imgBackgroundRankingMedalHolder01 = new ccui.ImageView();
        this._imgBackgroundRankingMedalHolder01.setName("_imgBackgroundRankingMedalHolder01");
        this._layoutRankingMedalHolder04.addChild(this._imgBackgroundRankingMedalHolder01);
        this._imgBackgroundRankingMedalHolder01.setCascadeOpacityEnabled(true);
        this._imgBackgroundRankingMedalHolder01.setCascadeColorEnabled(true);
        this._imgBackgroundRankingMedalHolder01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundRankingMedalHolder01, 0.5, 0.5);
        this._imgBackgroundRankingMedalHolder01.setColor(cc.color(160, 134, 114, 255));
        let _imgBackgroundRankingMedalHolder01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundRankingMedalHolder01);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPercentWidth(1);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPercentHeight(1);
        this._imgBackgroundRankingMedalHolder01.loadTexture("basics/shapes/Circle_256px.png", 1);
        this._imgBackgroundRankingMedalHolder01.setUnifySizeEnabled(false);
        this._imgBackgroundRankingMedalHolder01.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBackgroundRankingMedalHolder01, 1, 1);
        this._imgBackgroundRankingMedalHolder01.setTouchEnabled(false);

        ///// # _imgBackgroundRankingMedalHolder02
        this._imgBackgroundRankingMedalHolder02 = new ccui.ImageView();
        this._imgBackgroundRankingMedalHolder02.setName("_imgBackgroundRankingMedalHolder02");
        this._layoutRankingMedalHolder04.addChild(this._imgBackgroundRankingMedalHolder02);
        this._imgBackgroundRankingMedalHolder02.setCascadeOpacityEnabled(true);
        this._imgBackgroundRankingMedalHolder02.setCascadeColorEnabled(true);
        this._imgBackgroundRankingMedalHolder02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundRankingMedalHolder02, 0.5, 0.53);
        this._imgBackgroundRankingMedalHolder02.setColor(cc.color(223, 205, 183, 255));
        let _imgBackgroundRankingMedalHolder02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundRankingMedalHolder02);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPositionPercentY(0.53);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPercentWidth(1);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPercentHeight(1);
        this._imgBackgroundRankingMedalHolder02.loadTexture("basics/shapes/Circle_256px.png", 1);
        this._imgBackgroundRankingMedalHolder02.setUnifySizeEnabled(false);
        this._imgBackgroundRankingMedalHolder02.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBackgroundRankingMedalHolder02, 1, 1);
        this._imgBackgroundRankingMedalHolder02.setTouchEnabled(false);

        ///// # _layoutRankingMedalHolder05
        this._layoutRankingMedalHolder05 = new ccui.Layout();
        this._layoutRankingMedalHolder05.setName("_layoutRankingMedalHolder05");
        this._layoutRankingMedal.addChild(this._layoutRankingMedalHolder05);
        this._layoutRankingMedalHolder05.setCascadeOpacityEnabled(true);
        this._layoutRankingMedalHolder05.setCascadeColorEnabled(true);
        this._layoutRankingMedalHolder05.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutRankingMedalHolder05, 0.8913, 0.5);
        let _layoutRankingMedalHolder05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRankingMedalHolder05);
        _layoutRankingMedalHolder05LayoutComponent.setPositionPercentYEnabled(true);
        _layoutRankingMedalHolder05LayoutComponent.setPositionPercentY(0.5);
        this._layoutRankingMedalHolder05.setTouchEnabled(true);
        this._layoutRankingMedalHolder05.setUnifySizeEnabled(false);
        this._layoutRankingMedalHolder05.ignoreContentAdaptWithSize(false);
        this._layoutRankingMedalHolder05.setContentSize(cc.size(80, 80));

        ///// # _imgBackgroundRankingMedalHolder01
        this._imgBackgroundRankingMedalHolder01 = new ccui.ImageView();
        this._imgBackgroundRankingMedalHolder01.setName("_imgBackgroundRankingMedalHolder01");
        this._layoutRankingMedalHolder05.addChild(this._imgBackgroundRankingMedalHolder01);
        this._imgBackgroundRankingMedalHolder01.setCascadeOpacityEnabled(true);
        this._imgBackgroundRankingMedalHolder01.setCascadeColorEnabled(true);
        this._imgBackgroundRankingMedalHolder01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundRankingMedalHolder01, 0.5, 0.5);
        this._imgBackgroundRankingMedalHolder01.setColor(cc.color(160, 134, 114, 255));
        let _imgBackgroundRankingMedalHolder01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundRankingMedalHolder01);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPercentWidth(1);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundRankingMedalHolder01LayoutComponent.setPercentHeight(1);
        this._imgBackgroundRankingMedalHolder01.loadTexture("basics/shapes/Circle_256px.png", 1);
        this._imgBackgroundRankingMedalHolder01.setUnifySizeEnabled(false);
        this._imgBackgroundRankingMedalHolder01.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBackgroundRankingMedalHolder01, 1, 1);
        this._imgBackgroundRankingMedalHolder01.setTouchEnabled(false);

        ///// # _imgBackgroundRankingMedalHolder02
        this._imgBackgroundRankingMedalHolder02 = new ccui.ImageView();
        this._imgBackgroundRankingMedalHolder02.setName("_imgBackgroundRankingMedalHolder02");
        this._layoutRankingMedalHolder05.addChild(this._imgBackgroundRankingMedalHolder02);
        this._imgBackgroundRankingMedalHolder02.setCascadeOpacityEnabled(true);
        this._imgBackgroundRankingMedalHolder02.setCascadeColorEnabled(true);
        this._imgBackgroundRankingMedalHolder02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundRankingMedalHolder02, 0.5, 0.53);
        this._imgBackgroundRankingMedalHolder02.setColor(cc.color(223, 205, 183, 255));
        let _imgBackgroundRankingMedalHolder02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundRankingMedalHolder02);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPositionPercentY(0.53);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPercentWidth(1);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundRankingMedalHolder02LayoutComponent.setPercentHeight(1);
        this._imgBackgroundRankingMedalHolder02.loadTexture("basics/shapes/Circle_256px.png", 1);
        this._imgBackgroundRankingMedalHolder02.setUnifySizeEnabled(false);
        this._imgBackgroundRankingMedalHolder02.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBackgroundRankingMedalHolder02, 1, 1);
        this._imgBackgroundRankingMedalHolder02.setTouchEnabled(false);

        ///// # _btnSendMessage
        this._btnSendMessage = new AsyncButton();
        this._btnSendMessage.setName("_btnSendMessage");
        this._layoutPopup.addChild(this._btnSendMessage);
        this._btnSendMessage.setCascadeOpacityEnabled(true);
        this._btnSendMessage.setCascadeColorEnabled(true);
        this._btnSendMessage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnSendMessage, 0.7, 0.1517);
        let _btnSendMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnSendMessage);
        _btnSendMessageLayoutComponent.setPositionPercentXEnabled(true);
        _btnSendMessageLayoutComponent.setPositionPercentX(0.7);
        _btnSendMessageLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.BOTTOM);
        _btnSendMessageLayoutComponent.setBottomMargin(53);
        this._btnSendMessage.setUnifySizeEnabled(false);
        this._btnSendMessage.ignoreContentAdaptWithSize(false);
        this._btnSendMessage.setContentSize(cc.size(190, 70));
        this._btnSendMessage.setTouchEnabled(true);

        ///// # _imgButtonSendMessage
        this._imgButtonSendMessage = new ccui.ImageView();
        this._imgButtonSendMessage.setName("_imgButtonSendMessage");
        this._btnSendMessage.addChild(this._imgButtonSendMessage);
        this._imgButtonSendMessage.setCascadeOpacityEnabled(true);
        this._imgButtonSendMessage.setCascadeColorEnabled(true);
        this._imgButtonSendMessage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonSendMessage, 0.5, 0.5);
        let _imgButtonSendMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonSendMessage);
        _imgButtonSendMessageLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonSendMessageLayoutComponent.setPositionPercentX(0.5);
        _imgButtonSendMessageLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonSendMessageLayoutComponent.setPositionPercentY(0.5);
        _imgButtonSendMessageLayoutComponent.setPercentWidthEnabled(true);
        _imgButtonSendMessageLayoutComponent.setPercentWidth(1);
        _imgButtonSendMessageLayoutComponent.setPercentHeightEnabled(true);
        _imgButtonSendMessageLayoutComponent.setPercentHeight(1);
        this._imgButtonSendMessage.loadTexture("buttons/rectangles/Blue.png", 1);
        this._imgButtonSendMessage.setUnifySizeEnabled(false);
        this._imgButtonSendMessage.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonSendMessage, 1, 1);
        this._imgButtonSendMessage.setTouchEnabled(false);

        ///// # _txtButtonSendMessage
        this._txtButtonSendMessage = new ck.Text();
        this._txtButtonSendMessage.setName("_txtButtonSendMessage");
        this._btnSendMessage.addChild(this._txtButtonSendMessage);
        this._txtButtonSendMessage.setCascadeOpacityEnabled(true);
        this._txtButtonSendMessage.setCascadeColorEnabled(true);
        this._txtButtonSendMessage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonSendMessage, 0.5, 0.53);
        let _txtButtonSendMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonSendMessage);
        _txtButtonSendMessageLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonSendMessageLayoutComponent.setPositionPercentX(0.5);
        _txtButtonSendMessageLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonSendMessageLayoutComponent.setPositionPercentY(0.53);
        _txtButtonSendMessageLayoutComponent.setPercentWidthEnabled(true);
        _txtButtonSendMessageLayoutComponent.setPercentWidth(0.9);
        this._txtButtonSendMessage.setTouchEnabled(false);
        this._txtButtonSendMessage.setUnifySizeEnabled(false);
        this._txtButtonSendMessage.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtButtonSendMessage, 0.9);
        this._txtButtonSendMessage.setContentSize(cc.size(this._txtButtonSendMessage.width, 43));
        this._txtButtonSendMessage.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonSendMessage.setDefaultFontSize(32);
        this._txtButtonSendMessage.setString(gm.localize.getText("TXT_SEND_MESSAGE"));
        this._txtButtonSendMessage.setTextHorizontalAlignment(1);
        this._txtButtonSendMessage.setTextVerticalAlignment(1);
        this._txtButtonSendMessage.enableOutline(cc.color(36, 65, 134, 255), 2);
        this._txtButtonSendMessage.autoFitSingleLine();

        ///// # _imgLoadingButtonSendMessage
        this._imgLoadingButtonSendMessage = new ccui.ImageView();
        this._imgLoadingButtonSendMessage.setName("_imgLoadingButtonSendMessage");
        this._btnSendMessage.addChild(this._imgLoadingButtonSendMessage);
        this._imgLoadingButtonSendMessage.setCascadeOpacityEnabled(true);
        this._imgLoadingButtonSendMessage.setCascadeColorEnabled(true);
        this._imgLoadingButtonSendMessage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLoadingButtonSendMessage, 0.5, 0.51);
        this._imgLoadingButtonSendMessage.setVisible(false);
        let _imgLoadingButtonSendMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoadingButtonSendMessage);
        _imgLoadingButtonSendMessageLayoutComponent.setPositionPercentXEnabled(true);
        _imgLoadingButtonSendMessageLayoutComponent.setPositionPercentX(0.5);
        _imgLoadingButtonSendMessageLayoutComponent.setPositionPercentYEnabled(true);
        _imgLoadingButtonSendMessageLayoutComponent.setPositionPercentY(0.51);
        this._imgLoadingButtonSendMessage.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgLoadingButtonSendMessage.setUnifySizeEnabled(false);
        this._imgLoadingButtonSendMessage.ignoreContentAdaptWithSize(false);
        this._imgLoadingButtonSendMessage.setContentSize(cc.size(64, 64));
        this._imgLoadingButtonSendMessage.setTouchEnabled(false);

        ///// # _btnDelete
        this._btnDelete = new AsyncButton();
        this._btnDelete.setName("_btnDelete");
        this._layoutPopup.addChild(this._btnDelete);
        this._btnDelete.setCascadeOpacityEnabled(true);
        this._btnDelete.setCascadeColorEnabled(true);
        this._btnDelete.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnDelete, 0.3, 0.1517);
        let _btnDeleteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnDelete);
        _btnDeleteLayoutComponent.setPositionPercentXEnabled(true);
        _btnDeleteLayoutComponent.setPositionPercentX(0.3);
        _btnDeleteLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.BOTTOM);
        _btnDeleteLayoutComponent.setBottomMargin(53);
        this._btnDelete.setUnifySizeEnabled(false);
        this._btnDelete.ignoreContentAdaptWithSize(false);
        this._btnDelete.setContentSize(cc.size(190, 70));
        this._btnDelete.setTouchEnabled(true);

        ///// # _imgButtonDelete
        this._imgButtonDelete = new ccui.ImageView();
        this._imgButtonDelete.setName("_imgButtonDelete");
        this._btnDelete.addChild(this._imgButtonDelete);
        this._imgButtonDelete.setCascadeOpacityEnabled(true);
        this._imgButtonDelete.setCascadeColorEnabled(true);
        this._imgButtonDelete.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonDelete, 0.5, 0.5);
        let _imgButtonDeleteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonDelete);
        _imgButtonDeleteLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonDeleteLayoutComponent.setPositionPercentX(0.5);
        _imgButtonDeleteLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonDeleteLayoutComponent.setPositionPercentY(0.5);
        _imgButtonDeleteLayoutComponent.setPercentWidthEnabled(true);
        _imgButtonDeleteLayoutComponent.setPercentWidth(1);
        _imgButtonDeleteLayoutComponent.setPercentHeightEnabled(true);
        _imgButtonDeleteLayoutComponent.setPercentHeight(1);
        this._imgButtonDelete.loadTexture("buttons/rectangles/Red.png", 1);
        this._imgButtonDelete.setUnifySizeEnabled(false);
        this._imgButtonDelete.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonDelete, 1, 1);
        this._imgButtonDelete.setTouchEnabled(false);

        ///// # _txtButtonDelete
        this._txtButtonDelete = new ck.Text();
        this._txtButtonDelete.setName("_txtButtonDelete");
        this._btnDelete.addChild(this._txtButtonDelete);
        this._txtButtonDelete.setCascadeOpacityEnabled(true);
        this._txtButtonDelete.setCascadeColorEnabled(true);
        this._txtButtonDelete.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonDelete, 0.5, 0.53);
        let _txtButtonDeleteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonDelete);
        _txtButtonDeleteLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonDeleteLayoutComponent.setPositionPercentX(0.5);
        _txtButtonDeleteLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonDeleteLayoutComponent.setPositionPercentY(0.53);
        _txtButtonDeleteLayoutComponent.setPercentWidthEnabled(true);
        _txtButtonDeleteLayoutComponent.setPercentWidth(0.9);
        this._txtButtonDelete.setTouchEnabled(false);
        this._txtButtonDelete.setUnifySizeEnabled(false);
        this._txtButtonDelete.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtButtonDelete, 0.9);
        this._txtButtonDelete.setContentSize(cc.size(this._txtButtonDelete.width, 43));
        this._txtButtonDelete.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonDelete.setDefaultFontSize(35);
        this._txtButtonDelete.setString(gm.localize.getText("TXT_DELETE"));
        this._txtButtonDelete.setTextHorizontalAlignment(1);
        this._txtButtonDelete.setTextVerticalAlignment(1);
        this._txtButtonDelete.enableOutline(cc.color(164, 49, 41, 255), 2);
        this._txtButtonDelete.autoFitSingleLine();

        ///// # _imgLoadingButtonDelete
        this._imgLoadingButtonDelete = new ccui.ImageView();
        this._imgLoadingButtonDelete.setName("_imgLoadingButtonDelete");
        this._btnDelete.addChild(this._imgLoadingButtonDelete);
        this._imgLoadingButtonDelete.setCascadeOpacityEnabled(true);
        this._imgLoadingButtonDelete.setCascadeColorEnabled(true);
        this._imgLoadingButtonDelete.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLoadingButtonDelete, 0.5, 0.51);
        this._imgLoadingButtonDelete.setVisible(false);
        let _imgLoadingButtonDeleteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoadingButtonDelete);
        _imgLoadingButtonDeleteLayoutComponent.setPositionPercentXEnabled(true);
        _imgLoadingButtonDeleteLayoutComponent.setPositionPercentX(0.5);
        _imgLoadingButtonDeleteLayoutComponent.setPositionPercentYEnabled(true);
        _imgLoadingButtonDeleteLayoutComponent.setPositionPercentY(0.51);
        this._imgLoadingButtonDelete.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgLoadingButtonDelete.setUnifySizeEnabled(false);
        this._imgLoadingButtonDelete.ignoreContentAdaptWithSize(false);
        this._imgLoadingButtonDelete.setContentSize(cc.size(64, 64));
        this._imgLoadingButtonDelete.setTouchEnabled(false);

        ///// # _layoutClose
        this._layoutClose = new ccui.Layout();
        this._layoutClose.setName("_layoutClose");
        this._layoutPopup.addChild(this._layoutClose);
        this._layoutClose.setCascadeOpacityEnabled(true);
        this._layoutClose.setCascadeColorEnabled(true);
        this._layoutClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutClose, 0.99, 0.99);
        let _layoutCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutClose);
        _layoutCloseLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentX(0.99);
        _layoutCloseLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentY(0.99);
        this._layoutClose.setTouchEnabled(true);
        this._layoutClose.setUnifySizeEnabled(false);
        this._layoutClose.ignoreContentAdaptWithSize(false);
        this._layoutClose.setContentSize(cc.size(62.7514, 62.7514));

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._layoutClose.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.5, 0.3984);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.5);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(75, 78));
        this._imgClose.setTouchEnabled(false);

    },



});

/**
 * Create FriendDetailPopup
 * @returns {_ccs.FriendDetailPopup}
 */
_ccs.FriendDetailPopup.create = function () {
    return new _ccs.FriendDetailPopup();
};
