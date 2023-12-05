/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.InteractPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.InteractPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.Layout} */
    _layoutBackground: null,
    /** @type {ccui.ImageView} */
    _imgBackground01: null,
    /** @type {ccui.ImageView} */
    _imgBackground02: null,
    /** @type {ccui.Layout} */
    _layoutUserInfo: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundUserInfo: null,
    /** @type {cc.Node} */
    _nodeAvatar: null,
    /** @type {Avatar} */
    _avatarNode: null,
    /** @type {ccui.Layout} */
    _layoutInfo: null,
    /** @type {ck.Text} */
    _txtUserName: null,
    /** @type {ccui.Layout} */
    _layoutGold: null,
    /** @type {ccui.ImageView} */
    _imgIconGold: null,
    /** @type {ck.Text} */
    _txtGold: null,
    /** @type {AsyncButton} */
    _btnAddFriend: null,
    /** @type {ccui.ImageView} */
    _imgButtonAddFriend: null,
    /** @type {ck.Text} */
    _txtButtonAddFriend: null,
    /** @type {ccui.ImageView} */
    _imgLoadingButtonAddFriend: null,
    /** @type {ccui.Layout} */
    _layoutFriendRequest: null,
    /** @type {ck.Text} */
    _txtFriendRequest: null,
    /** @type {AsyncButton} */
    _btnAccept: null,
    /** @type {ccui.ImageView} */
    _imgButtonAccept: null,
    /** @type {ccui.ImageView} */
    _imgIconButtonAccept: null,
    /** @type {ccui.ImageView} */
    _imgLoadingButtonAccept: null,
    /** @type {AsyncButton} */
    _btnDelete: null,
    /** @type {ccui.ImageView} */
    _imgButtonDelete: null,
    /** @type {ccui.ImageView} */
    _imgIconButtonDelete: null,
    /** @type {ccui.ImageView} */
    _imgLoadingButtonDelete: null,
    /** @type {ck.Text} */
    _txtFriendState: null,
    /** @type {ccui.Layout} */
    _layoutClose: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.Layout} */
    _layoutInteractItem: null,
    /** @type {ccui.Layout} */
    _layoutGridview: null,


    /**
     * _ccs.InteractPopup constructor
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
        this._layoutPopup.setContentSize(cc.size(300, 400));

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

        ///// # _imgBackground01
        this._imgBackground01 = new ccui.ImageView();
        this._imgBackground01.setName("_imgBackground01");
        this._layoutBackground.addChild(this._imgBackground01);
        this._imgBackground01.setCascadeOpacityEnabled(true);
        this._imgBackground01.setCascadeColorEnabled(true);
        this._imgBackground01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground01, 0.5, 0.5);
        this._imgBackground01.setOpacity(76);
        this._imgBackground01.setColor(cc.color(0, 0, 0, 255));
        let _imgBackground01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground01);
        _imgBackground01LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackground01LayoutComponent.setPositionPercentX(0.5);
        _imgBackground01LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackground01LayoutComponent.setPositionPercentY(0.5);
        _imgBackground01LayoutComponent.setPercentWidthEnabled(true);
        _imgBackground01LayoutComponent.setPercentWidth(1);
        _imgBackground01LayoutComponent.setPercentHeightEnabled(true);
        _imgBackground01LayoutComponent.setPercentHeight(1);
        this._imgBackground01.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgBackground01.setUnifySizeEnabled(false);
        this._imgBackground01.ignoreContentAdaptWithSize(false);
        this._imgBackground01.setScale9Enabled(true);
        this._imgBackground01.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgBackground01, 1, 1);
        this._imgBackground01.setTouchEnabled(false);

        ///// # _imgBackground02
        this._imgBackground02 = new ccui.ImageView();
        this._imgBackground02.setName("_imgBackground02");
        this._layoutBackground.addChild(this._imgBackground02);
        this._imgBackground02.setCascadeOpacityEnabled(true);
        this._imgBackground02.setCascadeColorEnabled(true);
        this._imgBackground02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground02, 0.5, 0.5);
        this._imgBackground02.setColor(cc.color(53, 170, 165, 255));
        let _imgBackground02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground02);
        _imgBackground02LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackground02LayoutComponent.setPositionPercentX(0.5);
        _imgBackground02LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackground02LayoutComponent.setPositionPercentY(0.5);
        this._imgBackground02.loadTexture("basics/shapes/StrokeRoundedRectangle_64px_5px.png", 1);
        this._imgBackground02.setUnifySizeEnabled(false);
        this._imgBackground02.ignoreContentAdaptWithSize(false);
        this._imgBackground02.setScale9Enabled(true);
        this._imgBackground02.setCapInsets(cc.rect(21, 21, 24, 24));
        this._imgBackground02.setContentSize(cc.size(302, 402));
        this._imgBackground02.setTouchEnabled(false);

        ///// # _layoutUserInfo
        this._layoutUserInfo = new ccui.Layout();
        this._layoutUserInfo.setName("_layoutUserInfo");
        this._layoutPopup.addChild(this._layoutUserInfo);
        this._layoutUserInfo.setCascadeOpacityEnabled(true);
        this._layoutUserInfo.setCascadeColorEnabled(true);
        this._layoutUserInfo.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutUserInfo, 0.5, 1);
        let _layoutUserInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutUserInfo);
        _layoutUserInfoLayoutComponent.setPositionPercentXEnabled(true);
        _layoutUserInfoLayoutComponent.setPositionPercentX(0.5);
        _layoutUserInfoLayoutComponent.setPercentWidthEnabled(true);
        _layoutUserInfoLayoutComponent.setPercentWidth(1);
        _layoutUserInfoLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _layoutUserInfoLayoutComponent.setTopMargin(0);
        this._layoutUserInfo.setTouchEnabled(true);
        this._layoutUserInfo.setUnifySizeEnabled(false);
        this._layoutUserInfo.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutUserInfo, 1);
        this._layoutUserInfo.setContentSize(cc.size(this._layoutUserInfo.width, 100));

        ///// # _imgBackgroundUserInfo
        this._imgBackgroundUserInfo = new ccui.ImageView();
        this._imgBackgroundUserInfo.setName("_imgBackgroundUserInfo");
        this._layoutUserInfo.addChild(this._imgBackgroundUserInfo);
        this._imgBackgroundUserInfo.setCascadeOpacityEnabled(true);
        this._imgBackgroundUserInfo.setCascadeColorEnabled(true);
        this._imgBackgroundUserInfo.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundUserInfo, 0.5, 0.5);
        this._imgBackgroundUserInfo.setColor(cc.color(35, 107, 131, 255));
        this._imgBackgroundUserInfo.setFlippedY(true);
        let _imgBackgroundUserInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundUserInfo);
        _imgBackgroundUserInfoLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundUserInfoLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundUserInfoLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundUserInfoLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundUserInfoLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundUserInfoLayoutComponent.setPercentWidth(1);
        _imgBackgroundUserInfoLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundUserInfoLayoutComponent.setPercentHeight(1);
        this._imgBackgroundUserInfo.loadTexture("basics/shapes/RoundedRectangle_64px_0055px.png", 1);
        this._imgBackgroundUserInfo.setUnifySizeEnabled(false);
        this._imgBackgroundUserInfo.ignoreContentAdaptWithSize(false);
        this._imgBackgroundUserInfo.setScale9Enabled(true);
        this._imgBackgroundUserInfo.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgBackgroundUserInfo, 1, 1);
        this._imgBackgroundUserInfo.setTouchEnabled(false);
        this._imgBackgroundUserInfo.setFlippedY(true);

        ///// # _nodeAvatar
        this._nodeAvatar = new cc.Node();
        this._nodeAvatar.setName("_nodeAvatar");
        this._layoutUserInfo.addChild(this._nodeAvatar);
        this._nodeAvatar.setCascadeOpacityEnabled(true);
        this._nodeAvatar.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeAvatar, 0.1583, 0.5);
        let _nodeAvatarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeAvatar);
        _nodeAvatarLayoutComponent.setPositionPercentYEnabled(true);
        _nodeAvatarLayoutComponent.setPositionPercentY(0.5);

        ///// # _avatarNode
        this._avatarNode = new Avatar(ck.AvatarType.CIRCLE);
        this._avatarNode.setName("_avatarNode");
        this._nodeAvatar.addChild(this._avatarNode);
        this._avatarNode.setCascadeOpacityEnabled(true);
        this._avatarNode.setCascadeColorEnabled(true);
        this._avatarNode.setAnchorPoint(cc.p(0.5, 0.5));
        let _avatarNodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._avatarNode);
        this._avatarNode.setWidth(75);

        ///// # _layoutInfo
        this._layoutInfo = new ccui.Layout();
        this._layoutInfo.setName("_layoutInfo");
        this._layoutUserInfo.addChild(this._layoutInfo);
        this._layoutInfo.setCascadeOpacityEnabled(true);
        this._layoutInfo.setCascadeColorEnabled(true);
        this._layoutInfo.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutInfo, 0.3, 0.5);
        let _layoutInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInfo);
        _layoutInfoLayoutComponent.setPercentHeightEnabled(true);
        _layoutInfoLayoutComponent.setPercentHeight(1);
        this._layoutInfo.setTouchEnabled(true);
        this._layoutInfo.setUnifySizeEnabled(false);
        this._layoutInfo.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this._layoutInfo, 1);
        this._layoutInfo.setContentSize(cc.size(165, this._layoutInfo.height));

        ///// # _txtUserName
        this._txtUserName = new ck.Text();
        this._txtUserName.setName("_txtUserName");
        this._layoutInfo.addChild(this._txtUserName);
        this._txtUserName.setCascadeOpacityEnabled(true);
        this._txtUserName.setCascadeColorEnabled(true);
        this._txtUserName.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtUserName, 0, 0.7974);
        let _txtUserNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtUserName);
        _txtUserNameLayoutComponent.setPercentWidthEnabled(true);
        _txtUserNameLayoutComponent.setPercentWidth(1);
        this._txtUserName.setTouchEnabled(false);
        this._txtUserName.setUnifySizeEnabled(false);
        this._txtUserName.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtUserName, 1);
        this._txtUserName.setContentSize(cc.size(this._txtUserName.width, 28));
        this._txtUserName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtUserName.setDefaultFontSize(25);
        this._txtUserName.setTextHorizontalAlignment(0);
        this._txtUserName.setTextVerticalAlignment(0);

        ///// # _layoutGold
        this._layoutGold = new ccui.Layout();
        this._layoutGold.setName("_layoutGold");
        this._layoutInfo.addChild(this._layoutGold);
        this._layoutGold.setCascadeOpacityEnabled(true);
        this._layoutGold.setCascadeColorEnabled(true);
        this._layoutGold.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._layoutGold, 0, 0.6746);
        let _layoutGoldLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGold);
        _layoutGoldLayoutComponent.setPercentWidthEnabled(true);
        _layoutGoldLayoutComponent.setPercentWidth(1);
        this._layoutGold.setTouchEnabled(true);
        this._layoutGold.setUnifySizeEnabled(false);
        this._layoutGold.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutGold, 1);
        this._layoutGold.setContentSize(cc.size(this._layoutGold.width, 24));

        ///// # _imgIconGold
        this._imgIconGold = new ccui.ImageView();
        this._imgIconGold.setName("_imgIconGold");
        this._layoutGold.addChild(this._imgIconGold);
        this._imgIconGold.setCascadeOpacityEnabled(true);
        this._imgIconGold.setCascadeColorEnabled(true);
        this._imgIconGold.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconGold, 0, 0.5);
        let _imgIconGoldLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconGold);
        this._imgIconGold.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIconGold.setUnifySizeEnabled(false);
        this._imgIconGold.ignoreContentAdaptWithSize(false);
        this._imgIconGold.setContentSize(cc.size(24, 24));
        this._imgIconGold.setTouchEnabled(false);

        ///// # _txtGold
        this._txtGold = new ck.Text();
        this._txtGold.setName("_txtGold");
        this._layoutGold.addChild(this._txtGold);
        this._txtGold.setCascadeOpacityEnabled(true);
        this._txtGold.setCascadeColorEnabled(true);
        this._txtGold.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGold, 0.1455, 0.5);
        this._txtGold.setTextColor(cc.color(231, 228, 122, 255));
        let _txtGoldLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGold);
        _txtGoldLayoutComponent.setPositionPercentYEnabled(true);
        _txtGoldLayoutComponent.setPositionPercentY(0.5);
        this._txtGold.setTouchEnabled(false);
        this._txtGold.setUnifySizeEnabled(false);
        this._txtGold.ignoreContentAdaptWithSize(false);
        this._txtGold.setContentSize(cc.size(140, 26));
        this._txtGold.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtGold.setDefaultFontSize(22);
        this._txtGold.setTextHorizontalAlignment(0);
        this._txtGold.setTextVerticalAlignment(0);

        ///// # _btnAddFriend
        this._btnAddFriend = new AsyncButton();
        this._btnAddFriend.setName("_btnAddFriend");
        this._layoutInfo.addChild(this._btnAddFriend);
        this._btnAddFriend.setCascadeOpacityEnabled(true);
        this._btnAddFriend.setCascadeColorEnabled(true);
        this._btnAddFriend.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAddFriend, 0, 0.2151);
        let _btnAddFriendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddFriend);
        this._btnAddFriend.setUnifySizeEnabled(false);
        this._btnAddFriend.ignoreContentAdaptWithSize(false);
        this._btnAddFriend.setContentSize(cc.size(92.35, 37.23));
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
        this._imgButtonAddFriend.loadTexture("buttons/rectangles/Yellow.png", 1);
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
        ck.UIUtils.setPositionPercent(this._txtButtonAddFriend, 0.5, 0.52);
        let _txtButtonAddFriendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonAddFriend);
        _txtButtonAddFriendLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonAddFriendLayoutComponent.setPositionPercentX(0.5);
        _txtButtonAddFriendLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonAddFriendLayoutComponent.setPositionPercentY(0.52);
        this._txtButtonAddFriend.setTouchEnabled(false);
        this._txtButtonAddFriend.ignoreContentAdaptWithSize(true);
        this._txtButtonAddFriend.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonAddFriend.setDefaultFontSize(20);
        this._txtButtonAddFriend.setString(gm.localize.getText("TXT_ADD_FRIEND"));
        this._txtButtonAddFriend.setTextHorizontalAlignment(0);
        this._txtButtonAddFriend.setTextVerticalAlignment(0);
        this._txtButtonAddFriend.enableOutline(cc.color(117, 67, 46, 255), 1);

        ///// # _imgLoadingButtonAddFriend
        this._imgLoadingButtonAddFriend = new ccui.ImageView();
        this._imgLoadingButtonAddFriend.setName("_imgLoadingButtonAddFriend");
        this._btnAddFriend.addChild(this._imgLoadingButtonAddFriend);
        this._imgLoadingButtonAddFriend.setCascadeOpacityEnabled(true);
        this._imgLoadingButtonAddFriend.setCascadeColorEnabled(true);
        this._imgLoadingButtonAddFriend.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLoadingButtonAddFriend, 0.5, 0.53);
        this._imgLoadingButtonAddFriend.setVisible(false);
        this._imgLoadingButtonAddFriend.setScale(0.6319, 0.6319);
        let _imgLoadingButtonAddFriendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoadingButtonAddFriend);
        _imgLoadingButtonAddFriendLayoutComponent.setPositionPercentXEnabled(true);
        _imgLoadingButtonAddFriendLayoutComponent.setPositionPercentX(0.5);
        _imgLoadingButtonAddFriendLayoutComponent.setPositionPercentYEnabled(true);
        _imgLoadingButtonAddFriendLayoutComponent.setPositionPercentY(0.53);
        this._imgLoadingButtonAddFriend.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgLoadingButtonAddFriend.setUnifySizeEnabled(false);
        this._imgLoadingButtonAddFriend.ignoreContentAdaptWithSize(false);
        this._imgLoadingButtonAddFriend.setContentSize(cc.size(50, 50));
        this._imgLoadingButtonAddFriend.setTouchEnabled(false);

        ///// # _layoutFriendRequest
        this._layoutFriendRequest = new ccui.Layout();
        this._layoutFriendRequest.setName("_layoutFriendRequest");
        this._layoutInfo.addChild(this._layoutFriendRequest);
        this._layoutFriendRequest.setCascadeOpacityEnabled(true);
        this._layoutFriendRequest.setCascadeColorEnabled(true);
        let _layoutFriendRequestLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutFriendRequest);
        _layoutFriendRequestLayoutComponent.setPercentWidthEnabled(true);
        _layoutFriendRequestLayoutComponent.setPercentWidth(1);
        this._layoutFriendRequest.setTouchEnabled(true);
        this._layoutFriendRequest.setUnifySizeEnabled(false);
        this._layoutFriendRequest.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutFriendRequest, 1);
        this._layoutFriendRequest.setContentSize(cc.size(this._layoutFriendRequest.width, 45));

        ///// # _txtFriendRequest
        this._txtFriendRequest = new ck.Text();
        this._txtFriendRequest.setName("_txtFriendRequest");
        this._layoutFriendRequest.addChild(this._txtFriendRequest);
        this._txtFriendRequest.setCascadeOpacityEnabled(true);
        this._txtFriendRequest.setCascadeColorEnabled(true);
        this._txtFriendRequest.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtFriendRequest, 0, 1);
        this._txtFriendRequest.setTextColor(cc.color(239, 181, 93, 255));
        let _txtFriendRequestLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtFriendRequest);
        _txtFriendRequestLayoutComponent.setPositionPercentYEnabled(true);
        _txtFriendRequestLayoutComponent.setPositionPercentY(1);
        this._txtFriendRequest.setTouchEnabled(false);
        this._txtFriendRequest.setUnifySizeEnabled(false);
        this._txtFriendRequest.ignoreContentAdaptWithSize(false);
        this._txtFriendRequest.setContentSize(cc.size(167, 22));
        this._txtFriendRequest.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtFriendRequest.setDefaultFontSize(18);
        this._txtFriendRequest.setString(gm.localize.getText("TXT_WANT_TO_BE_YOUR_FRIEND"));
        this._txtFriendRequest.setTextHorizontalAlignment(0);
        this._txtFriendRequest.setTextVerticalAlignment(0);

        ///// # _btnAccept
        this._btnAccept = new AsyncButton();
        this._btnAccept.setName("_btnAccept");
        this._layoutFriendRequest.addChild(this._btnAccept);
        this._btnAccept.setCascadeOpacityEnabled(true);
        this._btnAccept.setCascadeColorEnabled(true);
        this._btnAccept.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAccept, 0.2424, 0.27);
        let _btnAcceptLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAccept);
        _btnAcceptLayoutComponent.setPositionPercentYEnabled(true);
        _btnAcceptLayoutComponent.setPositionPercentY(0.27);
        this._btnAccept.setUnifySizeEnabled(false);
        this._btnAccept.ignoreContentAdaptWithSize(false);
        this._btnAccept.setContentSize(cc.size(55, 23));
        this._btnAccept.setTouchEnabled(true);

        ///// # _imgButtonAccept
        this._imgButtonAccept = new ccui.ImageView();
        this._imgButtonAccept.setName("_imgButtonAccept");
        this._btnAccept.addChild(this._imgButtonAccept);
        this._imgButtonAccept.setCascadeOpacityEnabled(true);
        this._imgButtonAccept.setCascadeColorEnabled(true);
        this._imgButtonAccept.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonAccept, 0.5, 0.5);
        let _imgButtonAcceptLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonAccept);
        _imgButtonAcceptLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonAcceptLayoutComponent.setPositionPercentX(0.5);
        _imgButtonAcceptLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonAcceptLayoutComponent.setPositionPercentY(0.5);
        _imgButtonAcceptLayoutComponent.setPercentWidthEnabled(true);
        _imgButtonAcceptLayoutComponent.setPercentWidth(1);
        _imgButtonAcceptLayoutComponent.setPercentHeightEnabled(true);
        _imgButtonAcceptLayoutComponent.setPercentHeight(1);
        this._imgButtonAccept.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgButtonAccept.setUnifySizeEnabled(false);
        this._imgButtonAccept.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonAccept, 1, 1);
        this._imgButtonAccept.setTouchEnabled(false);

        ///// # _imgIconButtonAccept
        this._imgIconButtonAccept = new ccui.ImageView();
        this._imgIconButtonAccept.setName("_imgIconButtonAccept");
        this._btnAccept.addChild(this._imgIconButtonAccept);
        this._imgIconButtonAccept.setCascadeOpacityEnabled(true);
        this._imgIconButtonAccept.setCascadeColorEnabled(true);
        this._imgIconButtonAccept.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconButtonAccept, 0.5, 0.53);
        let _imgIconButtonAcceptLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconButtonAccept);
        _imgIconButtonAcceptLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconButtonAcceptLayoutComponent.setPositionPercentX(0.5);
        _imgIconButtonAcceptLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconButtonAcceptLayoutComponent.setPositionPercentY(0.53);
        this._imgIconButtonAccept.loadTexture("icons/flat/Check02.png", 1);
        this._imgIconButtonAccept.setUnifySizeEnabled(false);
        this._imgIconButtonAccept.ignoreContentAdaptWithSize(false);
        this._imgIconButtonAccept.setContentSize(cc.size(16, 12));
        this._imgIconButtonAccept.setTouchEnabled(false);

        ///// # _imgLoadingButtonAccept
        this._imgLoadingButtonAccept = new ccui.ImageView();
        this._imgLoadingButtonAccept.setName("_imgLoadingButtonAccept");
        this._btnAccept.addChild(this._imgLoadingButtonAccept);
        this._imgLoadingButtonAccept.setCascadeOpacityEnabled(true);
        this._imgLoadingButtonAccept.setCascadeColorEnabled(true);
        this._imgLoadingButtonAccept.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLoadingButtonAccept, 0.5, 0.52);
        this._imgLoadingButtonAccept.setVisible(false);
        let _imgLoadingButtonAcceptLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoadingButtonAccept);
        _imgLoadingButtonAcceptLayoutComponent.setPositionPercentXEnabled(true);
        _imgLoadingButtonAcceptLayoutComponent.setPositionPercentX(0.5);
        _imgLoadingButtonAcceptLayoutComponent.setPositionPercentYEnabled(true);
        _imgLoadingButtonAcceptLayoutComponent.setPositionPercentY(0.52);
        this._imgLoadingButtonAccept.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgLoadingButtonAccept.setUnifySizeEnabled(false);
        this._imgLoadingButtonAccept.ignoreContentAdaptWithSize(false);
        this._imgLoadingButtonAccept.setContentSize(cc.size(25, 25));
        this._imgLoadingButtonAccept.setTouchEnabled(false);

        ///// # _btnDelete
        this._btnDelete = new AsyncButton();
        this._btnDelete.setName("_btnDelete");
        this._layoutFriendRequest.addChild(this._btnDelete);
        this._btnDelete.setCascadeOpacityEnabled(true);
        this._btnDelete.setCascadeColorEnabled(true);
        this._btnDelete.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnDelete, 0.6061, 0.27);
        let _btnDeleteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnDelete);
        _btnDeleteLayoutComponent.setPositionPercentYEnabled(true);
        _btnDeleteLayoutComponent.setPositionPercentY(0.27);
        this._btnDelete.setUnifySizeEnabled(false);
        this._btnDelete.ignoreContentAdaptWithSize(false);
        this._btnDelete.setContentSize(cc.size(55, 23));
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

        ///// # _imgIconButtonDelete
        this._imgIconButtonDelete = new ccui.ImageView();
        this._imgIconButtonDelete.setName("_imgIconButtonDelete");
        this._btnDelete.addChild(this._imgIconButtonDelete);
        this._imgIconButtonDelete.setCascadeOpacityEnabled(true);
        this._imgIconButtonDelete.setCascadeColorEnabled(true);
        this._imgIconButtonDelete.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconButtonDelete, 0.5, 0.53);
        let _imgIconButtonDeleteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconButtonDelete);
        _imgIconButtonDeleteLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconButtonDeleteLayoutComponent.setPositionPercentX(0.5);
        _imgIconButtonDeleteLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconButtonDeleteLayoutComponent.setPositionPercentY(0.53);
        this._imgIconButtonDelete.loadTexture("icons/flat/Close.png", 1);
        this._imgIconButtonDelete.setUnifySizeEnabled(false);
        this._imgIconButtonDelete.ignoreContentAdaptWithSize(false);
        this._imgIconButtonDelete.setContentSize(cc.size(11, 12));
        this._imgIconButtonDelete.setTouchEnabled(false);

        ///// # _imgLoadingButtonDelete
        this._imgLoadingButtonDelete = new ccui.ImageView();
        this._imgLoadingButtonDelete.setName("_imgLoadingButtonDelete");
        this._btnDelete.addChild(this._imgLoadingButtonDelete);
        this._imgLoadingButtonDelete.setCascadeOpacityEnabled(true);
        this._imgLoadingButtonDelete.setCascadeColorEnabled(true);
        this._imgLoadingButtonDelete.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLoadingButtonDelete, 0.5, 0.52);
        this._imgLoadingButtonDelete.setVisible(false);
        let _imgLoadingButtonDeleteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoadingButtonDelete);
        _imgLoadingButtonDeleteLayoutComponent.setPositionPercentXEnabled(true);
        _imgLoadingButtonDeleteLayoutComponent.setPositionPercentX(0.5);
        _imgLoadingButtonDeleteLayoutComponent.setPositionPercentYEnabled(true);
        _imgLoadingButtonDeleteLayoutComponent.setPositionPercentY(0.52);
        this._imgLoadingButtonDelete.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgLoadingButtonDelete.setUnifySizeEnabled(false);
        this._imgLoadingButtonDelete.ignoreContentAdaptWithSize(false);
        this._imgLoadingButtonDelete.setContentSize(cc.size(25, 128));
        this._imgLoadingButtonDelete.setTouchEnabled(false);

        ///// # _txtFriendState
        this._txtFriendState = new ck.Text();
        this._txtFriendState.setName("_txtFriendState");
        this._layoutInfo.addChild(this._txtFriendState);
        this._txtFriendState.setCascadeOpacityEnabled(true);
        this._txtFriendState.setCascadeColorEnabled(true);
        this._txtFriendState.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtFriendState, 0.5, 0.2221);
        this._txtFriendState.setTextColor(cc.color(239, 181, 93, 255));
        let _txtFriendStateLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtFriendState);
        _txtFriendStateLayoutComponent.setPositionPercentXEnabled(true);
        _txtFriendStateLayoutComponent.setPositionPercentX(0.5);
        _txtFriendStateLayoutComponent.setPercentWidthEnabled(true);
        _txtFriendStateLayoutComponent.setPercentWidth(0.9);
        this._txtFriendState.setTouchEnabled(false);
        this._txtFriendState.setUnifySizeEnabled(false);
        this._txtFriendState.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtFriendState, 0.9);
        this._txtFriendState.setContentSize(cc.size(this._txtFriendState.width, 40));
        this._txtFriendState.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtFriendState.setDefaultFontSize(25);
        this._txtFriendState.setString(gm.localize.getText("TXT_YOUR_FRIEND"));
        this._txtFriendState.setTextHorizontalAlignment(1);
        this._txtFriendState.setTextVerticalAlignment(1);
        this._txtFriendState.autoFitMultipleLine();

        ///// # _layoutClose
        this._layoutClose = new ccui.Layout();
        this._layoutClose.setName("_layoutClose");
        this._layoutPopup.addChild(this._layoutClose);
        this._layoutClose.setCascadeOpacityEnabled(true);
        this._layoutClose.setCascadeColorEnabled(true);
        this._layoutClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutClose, 0.93, 0.96);
        let _layoutCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutClose);
        _layoutCloseLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentX(0.93);
        _layoutCloseLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentY(0.96);
        this._layoutClose.setTouchEnabled(true);
        this._layoutClose.setUnifySizeEnabled(false);
        this._layoutClose.ignoreContentAdaptWithSize(false);
        this._layoutClose.setContentSize(cc.size(37, 37));

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
        _imgCloseLayoutComponent.setPercentWidthEnabled(true);
        _imgCloseLayoutComponent.setPercentWidth(1.16);
        _imgCloseLayoutComponent.setPercentHeightEnabled(true);
        _imgCloseLayoutComponent.setPercentHeight(1.16);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgClose, 1.16, 1.16);
        this._imgClose.setTouchEnabled(false);

        ///// # _layoutInteractItem
        this._layoutInteractItem = new ccui.Layout();
        this._layoutInteractItem.setName("_layoutInteractItem");
        this._layoutPopup.addChild(this._layoutInteractItem);
        this._layoutInteractItem.setCascadeOpacityEnabled(true);
        this._layoutInteractItem.setCascadeColorEnabled(true);
        let _layoutInteractItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInteractItem);
        this._layoutInteractItem.setTouchEnabled(true);
        this._layoutInteractItem.setUnifySizeEnabled(false);
        this._layoutInteractItem.ignoreContentAdaptWithSize(false);
        this._layoutInteractItem.setContentSize(cc.size(300, 300));

        ///// # _layoutGridview
        this._layoutGridview = new ccui.Layout();
        this._layoutGridview.setName("_layoutGridview");
        this._layoutInteractItem.addChild(this._layoutGridview);
        this._layoutGridview.setCascadeOpacityEnabled(true);
        this._layoutGridview.setCascadeColorEnabled(true);
        let _layoutGridviewLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGridview);
        _layoutGridviewLayoutComponent.setPercentWidthEnabled(true);
        _layoutGridviewLayoutComponent.setPercentWidth(1);
        _layoutGridviewLayoutComponent.setPercentHeightEnabled(true);
        _layoutGridviewLayoutComponent.setPercentHeight(1);
        this._layoutGridview.setTouchEnabled(true);
        this._layoutGridview.setUnifySizeEnabled(false);
        this._layoutGridview.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutGridview, 1, 1);

    },



});

/**
 * Create InteractPopup
 * @returns {_ccs.InteractPopup}
 */
_ccs.InteractPopup.create = function () {
    return new _ccs.InteractPopup();
};
