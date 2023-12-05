/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.FriendWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.FriendWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutBackground: null,
    /** @type {ccui.ImageView} */
    _imgLine: null,
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
    _txtGoldTitle: null,
    /** @type {ck.Text} */
    _txtGold: null,
    /** @type {AsyncButton} */
    _btnGifts: null,
    /** @type {ccui.ImageView} */
    _imgButtonGifts: null,
    /** @type {ccui.ImageView} */
    _imgIconButtonGifts: null,
    /** @type {ccui.ImageView} */
    _imgLoadingButtonGifts: null,
    /** @type {ccui.ImageView} */
    _imgReddotGifts: null,
    /** @type {ck.Text} */
    _txtReddotGifts: null,
    /** @type {ccui.Layout} */
    _layoutEffect: null,


    /**
     * _ccs.FriendWidget constructor
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

        ///// # _imgLine
        this._imgLine = new ccui.ImageView();
        this._imgLine.setName("_imgLine");
        this._layoutBackground.addChild(this._imgLine);
        this._imgLine.setCascadeOpacityEnabled(true);
        this._imgLine.setCascadeColorEnabled(true);
        this._imgLine.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLine, 0.5, 0);
        this._imgLine.setColor(cc.color(139, 111, 106, 255));
        let _imgLineLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLine);
        _imgLineLayoutComponent.setPositionPercentXEnabled(true);
        _imgLineLayoutComponent.setPositionPercentX(0.5);
        _imgLineLayoutComponent.setPositionPercentYEnabled(true);
        _imgLineLayoutComponent.setPositionPercentY(0);
        _imgLineLayoutComponent.setPercentWidthEnabled(true);
        _imgLineLayoutComponent.setPercentWidth(1);
        this._imgLine.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgLine.setUnifySizeEnabled(false);
        this._imgLine.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._imgLine, 1);
        this._imgLine.setContentSize(cc.size(this._imgLine.width, 1));
        this._imgLine.setTouchEnabled(false);

        ///// # _layoutAvatar
        this._layoutAvatar = new ccui.Layout();
        this._layoutAvatar.setName("_layoutAvatar");
        this._layoutRoot.addChild(this._layoutAvatar);
        this._layoutAvatar.setCascadeOpacityEnabled(true);
        this._layoutAvatar.setCascadeColorEnabled(true);
        this._layoutAvatar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutAvatar, 0.122, 0.5);
        let _layoutAvatarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAvatar);
        _layoutAvatarLayoutComponent.setPositionPercentXEnabled(true);
        _layoutAvatarLayoutComponent.setPositionPercentX(0.122);
        _layoutAvatarLayoutComponent.setPositionPercentYEnabled(true);
        _layoutAvatarLayoutComponent.setPositionPercentY(0.5);
        this._layoutAvatar.setTouchEnabled(false);
        this._layoutAvatar.setUnifySizeEnabled(false);
        this._layoutAvatar.ignoreContentAdaptWithSize(false);
        this._layoutAvatar.setContentSize(cc.size(80, 80));

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
        this._avatar.setWidth(80);

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
        ck.UIUtils.setPositionPercent(this._txtName, 0, 0.8);
        this._txtName.setTextColor(cc.color(98, 80, 66, 255));
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
        ck.UIUtils.setPositionPercent(this._txtLevelTitle, 0, 0.52);
        this._txtLevelTitle.setTextColor(cc.color(111, 58, 48, 255));
        let _txtLevelTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLevelTitle);
        _txtLevelTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtLevelTitleLayoutComponent.setPositionPercentX(0);
        _txtLevelTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtLevelTitleLayoutComponent.setPositionPercentY(0.52);
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
        ck.UIUtils.setPositionPercent(this._txtLevel, 1, 0.5);
        this._txtLevel.setTextColor(cc.color(143, 54, 78, 255));
        let _txtLevelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLevel);
        _txtLevelLayoutComponent.setPositionPercentXEnabled(true);
        _txtLevelLayoutComponent.setPositionPercentX(1);
        _txtLevelLayoutComponent.setPositionPercentYEnabled(true);
        _txtLevelLayoutComponent.setPositionPercentY(0.5);
        _txtLevelLayoutComponent.setPercentWidthEnabled(true);
        _txtLevelLayoutComponent.setPercentWidth(1.3958);
        this._txtLevel.setTouchEnabled(false);
        this._txtLevel.ignoreContentAdaptWithSize(true);
        this._txtLevel.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtLevel.setDefaultFontSize(25);
        this._txtLevel.setTextHorizontalAlignment(0);
        this._txtLevel.setTextVerticalAlignment(1);

        ///// # _txtGoldTitle
        this._txtGoldTitle = new ck.Text();
        this._txtGoldTitle.setName("_txtGoldTitle");
        this._layoutInfo.addChild(this._txtGoldTitle);
        this._txtGoldTitle.setCascadeOpacityEnabled(true);
        this._txtGoldTitle.setCascadeColorEnabled(true);
        this._txtGoldTitle.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGoldTitle, 0, 0.2769);
        this._txtGoldTitle.setTextColor(cc.color(111, 58, 48, 255));
        let _txtGoldTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGoldTitle);
        _txtGoldTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtGoldTitleLayoutComponent.setPositionPercentX(0);
        _txtGoldTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtGoldTitleLayoutComponent.setPositionPercentY(0.2769);
        _txtGoldTitleLayoutComponent.setPercentWidthEnabled(true);
        _txtGoldTitleLayoutComponent.setPercentWidth(0.1577);
        this._txtGoldTitle.setTouchEnabled(false);
        this._txtGoldTitle.ignoreContentAdaptWithSize(true);
        this._txtGoldTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtGoldTitle.setDefaultFontSize(25);
        this._txtGoldTitle.setTextHorizontalAlignment(0);
        this._txtGoldTitle.setTextVerticalAlignment(1);

        ///// # _txtGold
        this._txtGold = new ck.Text();
        this._txtGold.setName("_txtGold");
        this._txtGoldTitle.addChild(this._txtGold);
        this._txtGold.setCascadeOpacityEnabled(true);
        this._txtGold.setCascadeColorEnabled(true);
        this._txtGold.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGold, 1, 0.5);
        this._txtGold.setTextColor(cc.color(162, 99, 50, 255));
        let _txtGoldLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGold);
        _txtGoldLayoutComponent.setPositionPercentXEnabled(true);
        _txtGoldLayoutComponent.setPositionPercentX(1);
        _txtGoldLayoutComponent.setPositionPercentYEnabled(true);
        _txtGoldLayoutComponent.setPositionPercentY(0.5);
        _txtGoldLayoutComponent.setPercentWidthEnabled(true);
        _txtGoldLayoutComponent.setPercentWidth(1.6341);
        this._txtGold.setTouchEnabled(false);
        this._txtGold.ignoreContentAdaptWithSize(true);
        this._txtGold.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGold.setDefaultFontSize(25);
        this._txtGold.setTextHorizontalAlignment(0);
        this._txtGold.setTextVerticalAlignment(1);

        ///// # _btnGifts
        this._btnGifts = new AsyncButton();
        this._btnGifts.setName("_btnGifts");
        this._layoutRoot.addChild(this._btnGifts);
        this._btnGifts.setCascadeOpacityEnabled(true);
        this._btnGifts.setCascadeColorEnabled(true);
        this._btnGifts.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnGifts, 0.8724, 0.5);
        let _btnGiftsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnGifts);
        _btnGiftsLayoutComponent.setPositionPercentYEnabled(true);
        _btnGiftsLayoutComponent.setPositionPercentY(0.5);
        this._btnGifts.setUnifySizeEnabled(false);
        this._btnGifts.ignoreContentAdaptWithSize(false);
        this._btnGifts.setContentSize(cc.size(102.9376, 42.7813));
        this._btnGifts.setTouchEnabled(true);

        ///// # _imgButtonGifts
        this._imgButtonGifts = new ccui.ImageView();
        this._imgButtonGifts.setName("_imgButtonGifts");
        this._btnGifts.addChild(this._imgButtonGifts);
        this._imgButtonGifts.setCascadeOpacityEnabled(true);
        this._imgButtonGifts.setCascadeColorEnabled(true);
        this._imgButtonGifts.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonGifts, 0.5, 0.5);
        let _imgButtonGiftsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonGifts);
        _imgButtonGiftsLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonGiftsLayoutComponent.setPositionPercentX(0.5);
        _imgButtonGiftsLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonGiftsLayoutComponent.setPositionPercentY(0.5);
        _imgButtonGiftsLayoutComponent.setPercentWidthEnabled(true);
        _imgButtonGiftsLayoutComponent.setPercentWidth(1);
        _imgButtonGiftsLayoutComponent.setPercentHeightEnabled(true);
        _imgButtonGiftsLayoutComponent.setPercentHeight(1);
        this._imgButtonGifts.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgButtonGifts.setUnifySizeEnabled(false);
        this._imgButtonGifts.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonGifts, 1, 1);
        this._imgButtonGifts.setTouchEnabled(false);

        ///// # _imgIconButtonGifts
        this._imgIconButtonGifts = new ccui.ImageView();
        this._imgIconButtonGifts.setName("_imgIconButtonGifts");
        this._btnGifts.addChild(this._imgIconButtonGifts);
        this._imgIconButtonGifts.setCascadeOpacityEnabled(true);
        this._imgIconButtonGifts.setCascadeColorEnabled(true);
        this._imgIconButtonGifts.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconButtonGifts, 0.5, 0.53);
        let _imgIconButtonGiftsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconButtonGifts);
        _imgIconButtonGiftsLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconButtonGiftsLayoutComponent.setPositionPercentX(0.5);
        _imgIconButtonGiftsLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconButtonGiftsLayoutComponent.setPositionPercentY(0.53);
        this._imgIconButtonGifts.loadTexture("icons/flat/SendGold.png", 1);
        this._imgIconButtonGifts.setUnifySizeEnabled(false);
        this._imgIconButtonGifts.ignoreContentAdaptWithSize(false);
        this._imgIconButtonGifts.setContentSize(cc.size(55, 33));
        this._imgIconButtonGifts.setTouchEnabled(false);

        ///// # _imgLoadingButtonGifts
        this._imgLoadingButtonGifts = new ccui.ImageView();
        this._imgLoadingButtonGifts.setName("_imgLoadingButtonGifts");
        this._btnGifts.addChild(this._imgLoadingButtonGifts);
        this._imgLoadingButtonGifts.setCascadeOpacityEnabled(true);
        this._imgLoadingButtonGifts.setCascadeColorEnabled(true);
        this._imgLoadingButtonGifts.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLoadingButtonGifts, 0.5, 0.53);
        this._imgLoadingButtonGifts.setVisible(false);
        this._imgLoadingButtonGifts.setScale(0.6319, 0.6319);
        let _imgLoadingButtonGiftsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoadingButtonGifts);
        _imgLoadingButtonGiftsLayoutComponent.setPositionPercentXEnabled(true);
        _imgLoadingButtonGiftsLayoutComponent.setPositionPercentX(0.5);
        _imgLoadingButtonGiftsLayoutComponent.setPositionPercentYEnabled(true);
        _imgLoadingButtonGiftsLayoutComponent.setPositionPercentY(0.53);
        this._imgLoadingButtonGifts.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgLoadingButtonGifts.setUnifySizeEnabled(false);
        this._imgLoadingButtonGifts.ignoreContentAdaptWithSize(false);
        this._imgLoadingButtonGifts.setContentSize(cc.size(50, 50));
        this._imgLoadingButtonGifts.setTouchEnabled(false);

        ///// # _imgReddotGifts
        this._imgReddotGifts = new ccui.ImageView();
        this._imgReddotGifts.setName("_imgReddotGifts");
        this._btnGifts.addChild(this._imgReddotGifts);
        this._imgReddotGifts.setCascadeOpacityEnabled(true);
        this._imgReddotGifts.setCascadeColorEnabled(true);
        this._imgReddotGifts.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgReddotGifts, 0.99, 0.99);
        let _imgReddotGiftsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgReddotGifts);
        _imgReddotGiftsLayoutComponent.setPositionPercentXEnabled(true);
        _imgReddotGiftsLayoutComponent.setPositionPercentX(0.99);
        _imgReddotGiftsLayoutComponent.setPositionPercentYEnabled(true);
        _imgReddotGiftsLayoutComponent.setPositionPercentY(0.99);
        this._imgReddotGifts.loadTexture("basics/other/RedDot.png", 1);
        this._imgReddotGifts.setUnifySizeEnabled(false);
        this._imgReddotGifts.ignoreContentAdaptWithSize(false);
        this._imgReddotGifts.setContentSize(cc.size(31, 31));
        this._imgReddotGifts.setTouchEnabled(false);

        ///// # _txtReddotGifts
        this._txtReddotGifts = new ck.Text();
        this._txtReddotGifts.setName("_txtReddotGifts");
        this._imgReddotGifts.addChild(this._txtReddotGifts);
        this._txtReddotGifts.setCascadeOpacityEnabled(true);
        this._txtReddotGifts.setCascadeColorEnabled(true);
        this._txtReddotGifts.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtReddotGifts, 0.5, 0.54);
        let _txtReddotGiftsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtReddotGifts);
        _txtReddotGiftsLayoutComponent.setPositionPercentXEnabled(true);
        _txtReddotGiftsLayoutComponent.setPositionPercentX(0.5);
        _txtReddotGiftsLayoutComponent.setPositionPercentYEnabled(true);
        _txtReddotGiftsLayoutComponent.setPositionPercentY(0.54);
        this._txtReddotGifts.setTouchEnabled(false);
        this._txtReddotGifts.ignoreContentAdaptWithSize(true);
        this._txtReddotGifts.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtReddotGifts.setDefaultFontSize(15);
        this._txtReddotGifts.setString("99");
        this._txtReddotGifts.setTextHorizontalAlignment(0);
        this._txtReddotGifts.setTextVerticalAlignment(0);
        this._txtReddotGifts.enableOutline(cc.color(157, 51, 57, 255), 1);

        ///// # _layoutEffect
        this._layoutEffect = new ccui.Layout();
        this._layoutEffect.setName("_layoutEffect");
        this._layoutRoot.addChild(this._layoutEffect);
        this._layoutEffect.setCascadeOpacityEnabled(true);
        this._layoutEffect.setCascadeColorEnabled(true);
        let _layoutEffectLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEffect);
        _layoutEffectLayoutComponent.setPercentWidthEnabled(true);
        _layoutEffectLayoutComponent.setPercentWidth(1);
        _layoutEffectLayoutComponent.setPercentHeightEnabled(true);
        _layoutEffectLayoutComponent.setPercentHeight(1);
        this._layoutEffect.setTouchEnabled(false);
        this._layoutEffect.setUnifySizeEnabled(false);
        this._layoutEffect.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutEffect, 1, 1);

    },



});

/**
 * Create FriendWidget
 * @returns {_ccs.FriendWidget}
 */
_ccs.FriendWidget.create = function () {
    return new _ccs.FriendWidget();
};
