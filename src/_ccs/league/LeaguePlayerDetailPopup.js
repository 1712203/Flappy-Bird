/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.LeaguePlayerDetailPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.LeaguePlayerDetailPopup = ccui.Widget.extend({

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
    /** @type {ccui.ImageView} */
    _imgScore: null,
    /** @type {ck.Text} */
    _txtScore: null,
    /** @type {ccui.Layout} */
    _layoutAvatar: null,
    /** @type {Avatar} */
    _avatar: null,
    /** @type {AsyncButton} */
    _btnSendMessage: null,
    /** @type {ccui.ImageView} */
    _imgButtonSendMessage: null,
    /** @type {ck.Text} */
    _txtButtonSendMessage: null,
    /** @type {ccui.ImageView} */
    _imgLoadingButtonSendMessage: null,
    /** @type {AsyncButton} */
    _btnAddFriend: null,
    /** @type {ccui.ImageView} */
    _imgButtonAddFriend: null,
    /** @type {ck.Text} */
    _txtButtonAddFriend: null,
    /** @type {ccui.ImageView} */
    _imgLoadingAddFriend: null,
    /** @type {ccui.Layout} */
    _layoutClose: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,


    /**
     * _ccs.LeaguePlayerDetailPopup constructor
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
        this._layoutPopup.setContentSize(cc.size(480, 300));

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
        _imgBackgroundBackLayoutComponent.setPercentHeight(1.01);
        this._imgBackgroundBack.loadTexture("basics/popup/Back.png", 1);
        this._imgBackgroundBack.setUnifySizeEnabled(false);
        this._imgBackgroundBack.ignoreContentAdaptWithSize(false);
        this._imgBackgroundBack.setScale9Enabled(true);
        this._imgBackgroundBack.setCapInsets(cc.rect(69, 57, 72, 61));
        ck.UIUtils.setSizePercent(this._imgBackgroundBack, 1, 1.01);
        this._imgBackgroundBack.setTouchEnabled(false);

        ///// # _imgBackgroundFront
        this._imgBackgroundFront = new ccui.ImageView();
        this._imgBackgroundFront.setName("_imgBackgroundFront");
        this._layoutBackground.addChild(this._imgBackgroundFront);
        this._imgBackgroundFront.setCascadeOpacityEnabled(true);
        this._imgBackgroundFront.setCascadeColorEnabled(true);
        this._imgBackgroundFront.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBackgroundFront, 0.5, 0.98);
        let _imgBackgroundFrontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundFront);
        _imgBackgroundFrontLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundFrontLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPositionPercentY(0.98);
        _imgBackgroundFrontLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPercentWidth(0.95);
        _imgBackgroundFrontLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPercentHeight(0.93);
        this._imgBackgroundFront.loadTexture("basics/popup/Font.png", 1);
        this._imgBackgroundFront.setUnifySizeEnabled(false);
        this._imgBackgroundFront.ignoreContentAdaptWithSize(false);
        this._imgBackgroundFront.setScale9Enabled(true);
        this._imgBackgroundFront.setCapInsets(cc.rect(69, 57, 15, 31));
        ck.UIUtils.setSizePercent(this._imgBackgroundFront, 0.95, 0.93);
        this._imgBackgroundFront.setTouchEnabled(false);

        ///// # _layoutInfoDetail
        this._layoutInfoDetail = new ccui.Layout();
        this._layoutInfoDetail.setName("_layoutInfoDetail");
        this._layoutPopup.addChild(this._layoutInfoDetail);
        this._layoutInfoDetail.setCascadeOpacityEnabled(true);
        this._layoutInfoDetail.setCascadeColorEnabled(true);
        this._layoutInfoDetail.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutInfoDetail, 0.5, 0.8608);
        let _layoutInfoDetailLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInfoDetail);
        _layoutInfoDetailLayoutComponent.setPositionPercentXEnabled(true);
        _layoutInfoDetailLayoutComponent.setPositionPercentX(0.5);
        _layoutInfoDetailLayoutComponent.setPositionPercentYEnabled(true);
        _layoutInfoDetailLayoutComponent.setPositionPercentY(0.8608);
        this._layoutInfoDetail.setTouchEnabled(true);
        this._layoutInfoDetail.setUnifySizeEnabled(false);
        this._layoutInfoDetail.ignoreContentAdaptWithSize(false);
        this._layoutInfoDetail.setContentSize(cc.size(440, 261.4758));

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
        ck.UIUtils.setPositionPercent(this._imgInfoDetailBackground, 0.5, 0.4846);
        this._imgInfoDetailBackground.setColor(cc.color(223, 205, 183, 255));
        let _imgInfoDetailBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgInfoDetailBackground);
        _imgInfoDetailBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgInfoDetailBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgInfoDetailBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgInfoDetailBackgroundLayoutComponent.setPositionPercentY(0.4846);
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
        ck.UIUtils.setPositionPercent(this._layoutInfo, 0.3068, 0.5);
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
        ck.UIUtils.setPositionPercent(this._txtName, 0, 0.6531);
        this._txtName.setTextColor(cc.color(160, 134, 114, 255));
        let _txtNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName);
        _txtNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameLayoutComponent.setPositionPercentX(0);
        _txtNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameLayoutComponent.setPositionPercentY(0.6531);
        _txtNameLayoutComponent.setPercentWidthEnabled(true);
        _txtNameLayoutComponent.setPercentWidth(0.9578);
        this._txtName.setTouchEnabled(false);
        this._txtName.setUnifySizeEnabled(false);
        this._txtName.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtName, 0.9578);
        this._txtName.setContentSize(cc.size(this._txtName.width, 30));
        this._txtName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName.setDefaultFontSize(33);
        this._txtName.setTextHorizontalAlignment(0);
        this._txtName.setTextVerticalAlignment(1);

        ///// # _imgScore
        this._imgScore = new ccui.ImageView();
        this._imgScore.setName("_imgScore");
        this._layoutInfo.addChild(this._imgScore);
        this._imgScore.setCascadeOpacityEnabled(true);
        this._imgScore.setCascadeColorEnabled(true);
        this._imgScore.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgScore, 0.0485, 0.3082);
        let _imgScoreLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgScore);
        _imgScoreLayoutComponent.setPositionPercentXEnabled(true);
        _imgScoreLayoutComponent.setPositionPercentX(0.0485);
        _imgScoreLayoutComponent.setPositionPercentYEnabled(true);
        _imgScoreLayoutComponent.setPositionPercentY(0.3082);
        this._imgScore.loadTexture("icons/color/stars/Blue.png", 1);
        this._imgScore.setUnifySizeEnabled(false);
        this._imgScore.ignoreContentAdaptWithSize(false);
        this._imgScore.setContentSize(cc.size(40, 40));
        this._imgScore.setTouchEnabled(false);

        ///// # _txtScore
        this._txtScore = new ck.Text();
        this._txtScore.setName("_txtScore");
        this._layoutInfo.addChild(this._txtScore);
        this._txtScore.setCascadeOpacityEnabled(true);
        this._txtScore.setCascadeColorEnabled(true);
        this._txtScore.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtScore, 0.1071, 0.3048);
        this._txtScore.setTextColor(cc.color(162, 99, 50, 255));
        let _txtScoreLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtScore);
        _txtScoreLayoutComponent.setPositionPercentXEnabled(true);
        _txtScoreLayoutComponent.setPositionPercentX(0.1071);
        _txtScoreLayoutComponent.setPositionPercentYEnabled(true);
        _txtScoreLayoutComponent.setPositionPercentY(0.3048);
        _txtScoreLayoutComponent.setPercentWidthEnabled(true);
        _txtScoreLayoutComponent.setPercentWidth(0.8028);
        this._txtScore.setTouchEnabled(false);
        this._txtScore.setUnifySizeEnabled(false);
        this._txtScore.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtScore, 0.8028);
        this._txtScore.setContentSize(cc.size(this._txtScore.width, 32));
        this._txtScore.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtScore.setDefaultFontSize(28);
        this._txtScore.setTextHorizontalAlignment(0);
        this._txtScore.setTextVerticalAlignment(1);

        ///// # _layoutAvatar
        this._layoutAvatar = new ccui.Layout();
        this._layoutAvatar.setName("_layoutAvatar");
        this._layoutInfoSimple.addChild(this._layoutAvatar);
        this._layoutAvatar.setCascadeOpacityEnabled(true);
        this._layoutAvatar.setCascadeColorEnabled(true);
        this._layoutAvatar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutAvatar, 0.1525, 0.5);
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

        ///// # _btnSendMessage
        this._btnSendMessage = new AsyncButton();
        this._btnSendMessage.setName("_btnSendMessage");
        this._layoutPopup.addChild(this._btnSendMessage);
        this._btnSendMessage.setCascadeOpacityEnabled(true);
        this._btnSendMessage.setCascadeColorEnabled(true);
        this._btnSendMessage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnSendMessage, 0.7, 0.2533);
        let _btnSendMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnSendMessage);
        _btnSendMessageLayoutComponent.setPositionPercentXEnabled(true);
        _btnSendMessageLayoutComponent.setPositionPercentX(0.7);
        _btnSendMessageLayoutComponent.setPositionPercentYEnabled(true);
        _btnSendMessageLayoutComponent.setPositionPercentY(0.2533);
        this._btnSendMessage.setUnifySizeEnabled(false);
        this._btnSendMessage.ignoreContentAdaptWithSize(false);
        this._btnSendMessage.setContentSize(cc.size(170, 70));
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

        ///// # _btnAddFriend
        this._btnAddFriend = new AsyncButton();
        this._btnAddFriend.setName("_btnAddFriend");
        this._layoutPopup.addChild(this._btnAddFriend);
        this._btnAddFriend.setCascadeOpacityEnabled(true);
        this._btnAddFriend.setCascadeColorEnabled(true);
        this._btnAddFriend.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAddFriend, 0.3, 0.2533);
        let _btnAddFriendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddFriend);
        _btnAddFriendLayoutComponent.setPositionPercentXEnabled(true);
        _btnAddFriendLayoutComponent.setPositionPercentX(0.3);
        _btnAddFriendLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddFriendLayoutComponent.setPositionPercentY(0.2533);
        this._btnAddFriend.setUnifySizeEnabled(false);
        this._btnAddFriend.ignoreContentAdaptWithSize(false);
        this._btnAddFriend.setContentSize(cc.size(170, 70));
        this._btnAddFriend.setTouchEnabled(true);

        ///// # _imgButtonAddFriend
        this._imgButtonAddFriend = new ccui.ImageView();
        this._imgButtonAddFriend.setName("_imgButtonAddFriend");
        this._btnAddFriend.addChild(this._imgButtonAddFriend);
        this._imgButtonAddFriend.setCascadeOpacityEnabled(true);
        this._imgButtonAddFriend.setCascadeColorEnabled(true);
        this._imgButtonAddFriend.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonAddFriend, 0.5, 0.5);
        let _imgButtonAddFriendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonAddFriend);
        _imgButtonAddFriendLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonAddFriendLayoutComponent.setPositionPercentX(0.5);
        _imgButtonAddFriendLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonAddFriendLayoutComponent.setPositionPercentY(0.5);
        _imgButtonAddFriendLayoutComponent.setPercentWidthEnabled(true);
        _imgButtonAddFriendLayoutComponent.setPercentWidth(1);
        _imgButtonAddFriendLayoutComponent.setPercentHeightEnabled(true);
        _imgButtonAddFriendLayoutComponent.setPercentHeight(1);
        this._imgButtonAddFriend.loadTexture("buttons/rectangles/Blue.png", 1);
        this._imgButtonAddFriend.setUnifySizeEnabled(false);
        this._imgButtonAddFriend.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonAddFriend, 1, 1);
        this._imgButtonAddFriend.setTouchEnabled(false);

        ///// # _txtButtonAddFriend
        this._txtButtonAddFriend = new ck.Text();
        this._txtButtonAddFriend.setName("_txtButtonAddFriend");
        this._btnAddFriend.addChild(this._txtButtonAddFriend);
        this._txtButtonAddFriend.setCascadeOpacityEnabled(true);
        this._txtButtonAddFriend.setCascadeColorEnabled(true);
        this._txtButtonAddFriend.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonAddFriend, 0.5, 0.53);
        let _txtButtonAddFriendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonAddFriend);
        _txtButtonAddFriendLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonAddFriendLayoutComponent.setPositionPercentX(0.5);
        _txtButtonAddFriendLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonAddFriendLayoutComponent.setPositionPercentY(0.53);
        _txtButtonAddFriendLayoutComponent.setPercentWidthEnabled(true);
        _txtButtonAddFriendLayoutComponent.setPercentWidth(0.9);
        this._txtButtonAddFriend.setTouchEnabled(false);
        this._txtButtonAddFriend.setUnifySizeEnabled(false);
        this._txtButtonAddFriend.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtButtonAddFriend, 0.9);
        this._txtButtonAddFriend.setContentSize(cc.size(this._txtButtonAddFriend.width, 43));
        this._txtButtonAddFriend.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonAddFriend.setDefaultFontSize(35);
        this._txtButtonAddFriend.setString(gm.localize.getText("TXT_ADD_FRIEND"));
        this._txtButtonAddFriend.setTextHorizontalAlignment(1);
        this._txtButtonAddFriend.setTextVerticalAlignment(1);
        this._txtButtonAddFriend.enableOutline(cc.color(36, 65, 134, 255), 2);
        this._txtButtonAddFriend.autoFitSingleLine();

        ///// # _imgLoadingAddFriend
        this._imgLoadingAddFriend = new ccui.ImageView();
        this._imgLoadingAddFriend.setName("_imgLoadingAddFriend");
        this._btnAddFriend.addChild(this._imgLoadingAddFriend);
        this._imgLoadingAddFriend.setCascadeOpacityEnabled(true);
        this._imgLoadingAddFriend.setCascadeColorEnabled(true);
        this._imgLoadingAddFriend.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLoadingAddFriend, 0.5, 0.51);
        this._imgLoadingAddFriend.setVisible(false);
        let _imgLoadingAddFriendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoadingAddFriend);
        _imgLoadingAddFriendLayoutComponent.setPositionPercentXEnabled(true);
        _imgLoadingAddFriendLayoutComponent.setPositionPercentX(0.5);
        _imgLoadingAddFriendLayoutComponent.setPositionPercentYEnabled(true);
        _imgLoadingAddFriendLayoutComponent.setPositionPercentY(0.51);
        this._imgLoadingAddFriend.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgLoadingAddFriend.setUnifySizeEnabled(false);
        this._imgLoadingAddFriend.ignoreContentAdaptWithSize(false);
        this._imgLoadingAddFriend.setContentSize(cc.size(64, 64));
        this._imgLoadingAddFriend.setTouchEnabled(false);

        ///// # _layoutClose
        this._layoutClose = new ccui.Layout();
        this._layoutClose.setName("_layoutClose");
        this._layoutPopup.addChild(this._layoutClose);
        this._layoutClose.setCascadeOpacityEnabled(true);
        this._layoutClose.setCascadeColorEnabled(true);
        this._layoutClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutClose, 0.9389, 0.9363);
        let _layoutCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutClose);
        _layoutCloseLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentX(0.9389);
        _layoutCloseLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentY(0.9363);
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
        ck.UIUtils.setPositionPercent(this._imgClose, 0.5, 0.5);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.5);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.5);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(75, 78));
        this._imgClose.setTouchEnabled(false);

    },



});

/**
 * Create LeaguePlayerDetailPopup
 * @returns {_ccs.LeaguePlayerDetailPopup}
 */
_ccs.LeaguePlayerDetailPopup.create = function () {
    return new _ccs.LeaguePlayerDetailPopup();
};
