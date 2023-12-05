/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.FriendInvitationWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.FriendInvitationWidget = ccui.Widget.extend({

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
    /** @type {ck.Text} */
    _txtRequest: null,
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


    /**
     * _ccs.FriendInvitationWidget constructor
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
        this._layoutRoot.setContentSize(cc.size(490, 120));

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
        this._layoutInfo.setTouchEnabled(false);
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
        ck.UIUtils.setPositionPercent(this._txtName, 0, 0.75);
        this._txtName.setTextColor(cc.color(98, 80, 66, 255));
        let _txtNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName);
        _txtNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameLayoutComponent.setPositionPercentX(0);
        _txtNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameLayoutComponent.setPositionPercentY(0.75);
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
        ck.UIUtils.setPositionPercent(this._txtLevelTitle, 0, 0.45);
        this._txtLevelTitle.setTextColor(cc.color(111, 58, 48, 255));
        let _txtLevelTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLevelTitle);
        _txtLevelTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtLevelTitleLayoutComponent.setPositionPercentX(0);
        _txtLevelTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtLevelTitleLayoutComponent.setPositionPercentY(0.45);
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

        ///// # _txtRequest
        this._txtRequest = new ck.Text();
        this._txtRequest.setName("_txtRequest");
        this._layoutInfo.addChild(this._txtRequest);
        this._txtRequest.setCascadeOpacityEnabled(true);
        this._txtRequest.setCascadeColorEnabled(true);
        this._txtRequest.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRequest, 0, 0.1869);
        this._txtRequest.setTextColor(cc.color(111, 58, 48, 255));
        let _txtRequestLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRequest);
        _txtRequestLayoutComponent.setPositionPercentXEnabled(true);
        _txtRequestLayoutComponent.setPositionPercentX(0);
        _txtRequestLayoutComponent.setPositionPercentYEnabled(true);
        _txtRequestLayoutComponent.setPositionPercentY(0.1869);
        _txtRequestLayoutComponent.setPercentWidthEnabled(true);
        _txtRequestLayoutComponent.setPercentWidth(1);
        this._txtRequest.setTouchEnabled(false);
        this._txtRequest.setUnifySizeEnabled(false);
        this._txtRequest.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtRequest, 1);
        this._txtRequest.setContentSize(cc.size(this._txtRequest.width, 30));
        this._txtRequest.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtRequest.setDefaultFontSize(25);
        this._txtRequest.setString(gm.localize.getText("TXT_WANT_TO_BE_YOUR_FRIEND"));
        this._txtRequest.setTextHorizontalAlignment(0);
        this._txtRequest.setTextVerticalAlignment(1);

        ///// # _btnAccept
        this._btnAccept = new AsyncButton();
        this._btnAccept.setName("_btnAccept");
        this._layoutRoot.addChild(this._btnAccept);
        this._btnAccept.setCascadeOpacityEnabled(true);
        this._btnAccept.setCascadeColorEnabled(true);
        this._btnAccept.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAccept, 0.8724, 0.3);
        let _btnAcceptLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAccept);
        _btnAcceptLayoutComponent.setPositionPercentYEnabled(true);
        _btnAcceptLayoutComponent.setPositionPercentY(0.3);
        this._btnAccept.setUnifySizeEnabled(false);
        this._btnAccept.ignoreContentAdaptWithSize(false);
        this._btnAccept.setContentSize(cc.size(102.9376, 42.7813));
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
        this._imgIconButtonAccept.setContentSize(cc.size(34, 26));
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
        this._imgLoadingButtonAccept.setContentSize(cc.size(32, 32));
        this._imgLoadingButtonAccept.setTouchEnabled(false);

        ///// # _btnDelete
        this._btnDelete = new AsyncButton();
        this._btnDelete.setName("_btnDelete");
        this._layoutRoot.addChild(this._btnDelete);
        this._btnDelete.setCascadeOpacityEnabled(true);
        this._btnDelete.setCascadeColorEnabled(true);
        this._btnDelete.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnDelete, 0.8724, 0.7);
        let _btnDeleteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnDelete);
        _btnDeleteLayoutComponent.setPositionPercentYEnabled(true);
        _btnDeleteLayoutComponent.setPositionPercentY(0.7);
        this._btnDelete.setUnifySizeEnabled(false);
        this._btnDelete.ignoreContentAdaptWithSize(false);
        this._btnDelete.setContentSize(cc.size(102.9376, 42.7813));
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
        this._imgIconButtonDelete.setContentSize(cc.size(23, 25));
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
        this._imgLoadingButtonDelete.setContentSize(cc.size(32, 32));
        this._imgLoadingButtonDelete.setTouchEnabled(false);

    },



});

/**
 * Create FriendInvitationWidget
 * @returns {_ccs.FriendInvitationWidget}
 */
_ccs.FriendInvitationWidget.create = function () {
    return new _ccs.FriendInvitationWidget();
};
