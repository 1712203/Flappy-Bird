/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.FriendSearchWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.FriendSearchWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutBackground: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ccui.Layout} */
    _layoutAvatar: null,
    /** @type {Avatar} */
    _avatar: null,
    /** @type {ccui.Layout} */
    _layoutInfo: null,
    /** @type {ck.Text} */
    _txtName: null,
    /** @type {ck.Text} */
    _txtLevelTitle: null,
    /** @type {ck.Text} */
    _txtLevel: null,
    /** @type {AsyncButton} */
    _btnAddFriend: null,
    /** @type {ccui.ImageView} */
    _imgButtonAddFriend: null,
    /** @type {ck.Text} */
    _txtButtonAddFriend: null,
    /** @type {ccui.ImageView} */
    _imgLoadingButtonAddFriend: null,


    /**
     * _ccs.FriendSearchWidget constructor
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
        this._layoutRoot.setContentSize(cc.size(490, 130));

        ///// # _layoutBackground
        this._layoutBackground = new ccui.Layout();
        this._layoutBackground.setName("_layoutBackground");
        this._layoutRoot.addChild(this._layoutBackground);
        this._layoutBackground.setCascadeOpacityEnabled(true);
        this._layoutBackground.setCascadeColorEnabled(true);
        let _layoutBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBackground);
        _layoutBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentWidth(1);
        _layoutBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentHeight(1);
        this._layoutBackground.setTouchEnabled(true);
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
        this._imgBackground.setColor(cc.color(223, 205, 183, 255));
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundLayoutComponent.setPercentWidth(1);
        _imgBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundLayoutComponent.setPercentHeight(1);
        this._imgBackground.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setScale9Enabled(true);
        this._imgBackground.setCapInsets(cc.rect(10, 10, 44, 44));
        ck.UIUtils.setSizePercent(this._imgBackground, 1, 1);
        this._imgBackground.setTouchEnabled(false);

        ///// # _layoutAvatar
        this._layoutAvatar = new ccui.Layout();
        this._layoutAvatar.setName("_layoutAvatar");
        this._layoutRoot.addChild(this._layoutAvatar);
        this._layoutAvatar.setCascadeOpacityEnabled(true);
        this._layoutAvatar.setCascadeColorEnabled(true);
        this._layoutAvatar.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutAvatar, 0.02, 0.5);
        let _layoutAvatarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAvatar);
        _layoutAvatarLayoutComponent.setPositionPercentXEnabled(true);
        _layoutAvatarLayoutComponent.setPositionPercentX(0.02);
        _layoutAvatarLayoutComponent.setPositionPercentYEnabled(true);
        _layoutAvatarLayoutComponent.setPositionPercentY(0.5);
        this._layoutAvatar.setTouchEnabled(true);
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

        ///// # _layoutInfo
        this._layoutInfo = new ccui.Layout();
        this._layoutInfo.setName("_layoutInfo");
        this._layoutRoot.addChild(this._layoutInfo);
        this._layoutInfo.setCascadeOpacityEnabled(true);
        this._layoutInfo.setCascadeColorEnabled(true);
        this._layoutInfo.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutInfo, 0.2347, 0.5);
        let _layoutInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInfo);
        _layoutInfoLayoutComponent.setPositionPercentYEnabled(true);
        _layoutInfoLayoutComponent.setPositionPercentY(0.5);
        _layoutInfoLayoutComponent.setPercentHeightEnabled(true);
        _layoutInfoLayoutComponent.setPercentHeight(1);
        this._layoutInfo.setTouchEnabled(true);
        this._layoutInfo.setUnifySizeEnabled(false);
        this._layoutInfo.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this._layoutInfo, 1);
        this._layoutInfo.setContentSize(cc.size(260, this._layoutInfo.height));

        ///// # _txtName
        this._txtName = new ck.Text();
        this._txtName.setName("_txtName");
        this._layoutInfo.addChild(this._txtName);
        this._txtName.setCascadeOpacityEnabled(true);
        this._txtName.setCascadeColorEnabled(true);
        this._txtName.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName, 0, 0.65);
        this._txtName.setTextColor(cc.color(98, 80, 66, 255));
        let _txtNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName);
        _txtNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameLayoutComponent.setPositionPercentX(0);
        _txtNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameLayoutComponent.setPositionPercentY(0.65);
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
        ck.UIUtils.setPositionPercent(this._txtLevelTitle, 0, 0.35);
        this._txtLevelTitle.setTextColor(cc.color(111, 58, 48, 255));
        let _txtLevelTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLevelTitle);
        _txtLevelTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtLevelTitleLayoutComponent.setPositionPercentX(0);
        _txtLevelTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtLevelTitleLayoutComponent.setPositionPercentY(0.35);
        _txtLevelTitleLayoutComponent.setPercentWidthEnabled(true);
        _txtLevelTitleLayoutComponent.setPercentWidth(0.1846);
        this._txtLevelTitle.setTouchEnabled(false);
        this._txtLevelTitle.ignoreContentAdaptWithSize(true);
        this._txtLevelTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLevelTitle.setDefaultFontSize(25);
        this._txtLevelTitle.setTextHorizontalAlignment(0);
        this._txtLevelTitle.setTextVerticalAlignment(1);

        ///// # _txtLevel
        this._txtLevel = new ck.Text();
        this._txtLevel.setName("_txtLevel");
        this._txtLevelTitle.addChild(this._txtLevel);
        this._txtLevel.setCascadeOpacityEnabled(true);
        this._txtLevel.setCascadeColorEnabled(true);
        this._txtLevel.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLevel, 1.0625, 0.5);
        this._txtLevel.setTextColor(cc.color(111, 58, 48, 255));
        let _txtLevelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLevel);
        _txtLevelLayoutComponent.setPositionPercentXEnabled(true);
        _txtLevelLayoutComponent.setPositionPercentX(1.0625);
        _txtLevelLayoutComponent.setPositionPercentYEnabled(true);
        _txtLevelLayoutComponent.setPositionPercentY(0.5);
        _txtLevelLayoutComponent.setPercentWidthEnabled(true);
        _txtLevelLayoutComponent.setPercentWidth(1.5625);
        this._txtLevel.setTouchEnabled(false);
        this._txtLevel.ignoreContentAdaptWithSize(true);
        this._txtLevel.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtLevel.setDefaultFontSize(25);
        this._txtLevel.setTextHorizontalAlignment(0);
        this._txtLevel.setTextVerticalAlignment(1);

        ///// # _btnAddFriend
        this._btnAddFriend = new AsyncButton();
        this._btnAddFriend.setName("_btnAddFriend");
        this._layoutRoot.addChild(this._btnAddFriend);
        this._btnAddFriend.setCascadeOpacityEnabled(true);
        this._btnAddFriend.setCascadeColorEnabled(true);
        this._btnAddFriend.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAddFriend, 0.8724, 0.5);
        let _btnAddFriendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddFriend);
        _btnAddFriendLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddFriendLayoutComponent.setPositionPercentY(0.5);
        this._btnAddFriend.setUnifySizeEnabled(false);
        this._btnAddFriend.ignoreContentAdaptWithSize(false);
        this._btnAddFriend.setContentSize(cc.size(102.9376, 42.7813));
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
        this._imgButtonAddFriend.loadTexture("buttons/rectangles/Green.png", 1);
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
        this._txtButtonAddFriend.setTouchEnabled(false);
        this._txtButtonAddFriend.ignoreContentAdaptWithSize(true);
        this._txtButtonAddFriend.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonAddFriend.setDefaultFontSize(30);
        this._txtButtonAddFriend.setString(gm.localize.getText("TXT_ADD"));
        this._txtButtonAddFriend.setTextHorizontalAlignment(0);
        this._txtButtonAddFriend.setTextVerticalAlignment(0);
        this._txtButtonAddFriend.enableOutline(cc.color(16, 124, 104, 255), 1);

        ///// # _imgLoadingButtonAddFriend
        this._imgLoadingButtonAddFriend = new ccui.ImageView();
        this._imgLoadingButtonAddFriend.setName("_imgLoadingButtonAddFriend");
        this._btnAddFriend.addChild(this._imgLoadingButtonAddFriend);
        this._imgLoadingButtonAddFriend.setCascadeOpacityEnabled(true);
        this._imgLoadingButtonAddFriend.setCascadeColorEnabled(true);
        this._imgLoadingButtonAddFriend.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLoadingButtonAddFriend, 0.5, 0.52);
        this._imgLoadingButtonAddFriend.setVisible(false);
        let _imgLoadingButtonAddFriendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoadingButtonAddFriend);
        _imgLoadingButtonAddFriendLayoutComponent.setPositionPercentXEnabled(true);
        _imgLoadingButtonAddFriendLayoutComponent.setPositionPercentX(0.5);
        _imgLoadingButtonAddFriendLayoutComponent.setPositionPercentYEnabled(true);
        _imgLoadingButtonAddFriendLayoutComponent.setPositionPercentY(0.52);
        this._imgLoadingButtonAddFriend.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgLoadingButtonAddFriend.setUnifySizeEnabled(false);
        this._imgLoadingButtonAddFriend.ignoreContentAdaptWithSize(false);
        this._imgLoadingButtonAddFriend.setContentSize(cc.size(32, 32));
        this._imgLoadingButtonAddFriend.setTouchEnabled(false);

    },



});

/**
 * Create FriendSearchWidget
 * @returns {_ccs.FriendSearchWidget}
 */
_ccs.FriendSearchWidget.create = function () {
    return new _ccs.FriendSearchWidget();
};
