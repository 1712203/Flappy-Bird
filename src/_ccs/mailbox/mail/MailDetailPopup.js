/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.MailDetailPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.MailDetailPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.Layout} */
    _layoutBackground: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundBack: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundFront: null,
    /** @type {ccui.Layout} */
    _layoutClose: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.Layout} */
    _layoutAvatar: null,
    /** @type {Avatar} */
    _avatar: null,
    /** @type {ck.Text} */
    _txtSender: null,
    /** @type {ck.Text} */
    _txtDescription: null,
    /** @type {ccui.Layout} */
    _layoutBtnReply: null,
    /** @type {ccui.ImageView} */
    _imgBtnReply: null,
    /** @type {ck.Text} */
    _txtReply: null,
    /** @type {ccui.Layout} */
    _layoutBtnDelete: null,
    /** @type {ccui.ImageView} */
    _imgBtnDelete: null,
    /** @type {ck.Text} */
    _txtDelete: null,


    /**
     * _ccs.MailDetailPopup constructor
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
        this._layoutPopup.setContentSize(cc.size(520, 535));

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
        this._layoutClose.setContentSize(cc.size(50, 50));

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
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(63, 58));
        this._imgClose.setTouchEnabled(false);

        ///// # _layoutAvatar
        this._layoutAvatar = new ccui.Layout();
        this._layoutAvatar.setName("_layoutAvatar");
        this._layoutPopup.addChild(this._layoutAvatar);
        this._layoutAvatar.setCascadeOpacityEnabled(true);
        this._layoutAvatar.setCascadeColorEnabled(true);
        this._layoutAvatar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutAvatar, 0.5, 0.8598);
        let _layoutAvatarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAvatar);
        _layoutAvatarLayoutComponent.setPositionPercentXEnabled(true);
        _layoutAvatarLayoutComponent.setPositionPercentX(0.5);
        _layoutAvatarLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _layoutAvatarLayoutComponent.setTopMargin(25);
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

        ///// # _txtSender
        this._txtSender = new ck.Text();
        this._txtSender.setName("_txtSender");
        this._layoutPopup.addChild(this._txtSender);
        this._txtSender.setCascadeOpacityEnabled(true);
        this._txtSender.setCascadeColorEnabled(true);
        this._txtSender.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._txtSender, 0.5, 0.7664);
        this._txtSender.setTextColor(cc.color(98, 80, 66, 255));
        let _txtSenderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSender);
        _txtSenderLayoutComponent.setPositionPercentXEnabled(true);
        _txtSenderLayoutComponent.setPositionPercentX(0.5);
        _txtSenderLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _txtSenderLayoutComponent.setTopMargin(125);
        this._txtSender.setTouchEnabled(false);
        this._txtSender.setUnifySizeEnabled(false);
        this._txtSender.ignoreContentAdaptWithSize(false);
        this._txtSender.setContentSize(cc.size(420, 55));
        this._txtSender.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSender.setDefaultFontSize(40);
        this._txtSender.setTextHorizontalAlignment(1);
        this._txtSender.setTextVerticalAlignment(1);

        ///// # _txtDescription
        this._txtDescription = new ck.Text();
        this._txtDescription.setName("_txtDescription");
        this._layoutPopup.addChild(this._txtDescription);
        this._txtDescription.setCascadeOpacityEnabled(true);
        this._txtDescription.setCascadeColorEnabled(true);
        this._txtDescription.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._txtDescription, 0.5, 0.6542);
        this._txtDescription.setTextColor(cc.color(143, 54, 78, 255));
        let _txtDescriptionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDescription);
        _txtDescriptionLayoutComponent.setPositionPercentXEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentX(0.5);
        _txtDescriptionLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _txtDescriptionLayoutComponent.setTopMargin(185);
        this._txtDescription.setTouchEnabled(false);
        this._txtDescription.setUnifySizeEnabled(false);
        this._txtDescription.ignoreContentAdaptWithSize(false);
        this._txtDescription.setContentSize(cc.size(465.5493, 240.3611));
        this._txtDescription.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDescription.setDefaultFontSize(40);
        this._txtDescription.setTextHorizontalAlignment(1);
        this._txtDescription.setTextVerticalAlignment(1);

        ///// # _layoutBtnReply
        this._layoutBtnReply = new ccui.Layout();
        this._layoutBtnReply.setName("_layoutBtnReply");
        this._layoutPopup.addChild(this._layoutBtnReply);
        this._layoutBtnReply.setCascadeOpacityEnabled(true);
        this._layoutBtnReply.setCascadeColorEnabled(true);
        this._layoutBtnReply.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBtnReply, 0.72, 0.1243);
        let _layoutBtnReplyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBtnReply);
        _layoutBtnReplyLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBtnReplyLayoutComponent.setPositionPercentX(0.72);
        _layoutBtnReplyLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.BOTTOM);
        _layoutBtnReplyLayoutComponent.setBottomMargin(30);
        this._layoutBtnReply.setTouchEnabled(true);
        this._layoutBtnReply.setUnifySizeEnabled(false);
        this._layoutBtnReply.ignoreContentAdaptWithSize(false);
        this._layoutBtnReply.setContentSize(cc.size(200, 73.0038));

        ///// # _imgBtnReply
        this._imgBtnReply = new ccui.ImageView();
        this._imgBtnReply.setName("_imgBtnReply");
        this._layoutBtnReply.addChild(this._imgBtnReply);
        this._imgBtnReply.setCascadeOpacityEnabled(true);
        this._imgBtnReply.setCascadeColorEnabled(true);
        this._imgBtnReply.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBtnReply, 0.5, 0.5);
        let _imgBtnReplyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBtnReply);
        _imgBtnReplyLayoutComponent.setPositionPercentXEnabled(true);
        _imgBtnReplyLayoutComponent.setPositionPercentX(0.5);
        _imgBtnReplyLayoutComponent.setPositionPercentYEnabled(true);
        _imgBtnReplyLayoutComponent.setPositionPercentY(0.5);
        _imgBtnReplyLayoutComponent.setPercentWidthEnabled(true);
        _imgBtnReplyLayoutComponent.setPercentWidth(1);
        _imgBtnReplyLayoutComponent.setPercentHeightEnabled(true);
        _imgBtnReplyLayoutComponent.setPercentHeight(0.9999);
        this._imgBtnReply.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgBtnReply.setUnifySizeEnabled(false);
        this._imgBtnReply.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBtnReply, 1, 0.9999);
        this._imgBtnReply.setTouchEnabled(false);

        ///// # _txtReply
        this._txtReply = new ck.Text();
        this._txtReply.setName("_txtReply");
        this._layoutBtnReply.addChild(this._txtReply);
        this._txtReply.setCascadeOpacityEnabled(true);
        this._txtReply.setCascadeColorEnabled(true);
        this._txtReply.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtReply, 0.5, 0.53);
        let _txtReplyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtReply);
        _txtReplyLayoutComponent.setPositionPercentXEnabled(true);
        _txtReplyLayoutComponent.setPositionPercentX(0.5);
        _txtReplyLayoutComponent.setPositionPercentYEnabled(true);
        _txtReplyLayoutComponent.setPositionPercentY(0.53);
        this._txtReply.setTouchEnabled(false);
        this._txtReply.ignoreContentAdaptWithSize(true);
        this._txtReply.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtReply.setDefaultFontSize(40);
        this._txtReply.setString(gm.localize.getText("TXT_REPLY"));
        this._txtReply.setTextHorizontalAlignment(0);
        this._txtReply.setTextVerticalAlignment(0);
        this._txtReply.enableOutline(cc.color(15, 108, 116, 255), 2);

        ///// # _layoutBtnDelete
        this._layoutBtnDelete = new ccui.Layout();
        this._layoutBtnDelete.setName("_layoutBtnDelete");
        this._layoutPopup.addChild(this._layoutBtnDelete);
        this._layoutBtnDelete.setCascadeOpacityEnabled(true);
        this._layoutBtnDelete.setCascadeColorEnabled(true);
        this._layoutBtnDelete.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBtnDelete, 0.28, 0.1243);
        let _layoutBtnDeleteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBtnDelete);
        _layoutBtnDeleteLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBtnDeleteLayoutComponent.setPositionPercentX(0.28);
        _layoutBtnDeleteLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.BOTTOM);
        _layoutBtnDeleteLayoutComponent.setBottomMargin(30);
        this._layoutBtnDelete.setTouchEnabled(true);
        this._layoutBtnDelete.setUnifySizeEnabled(false);
        this._layoutBtnDelete.ignoreContentAdaptWithSize(false);
        this._layoutBtnDelete.setContentSize(cc.size(200, 73));

        ///// # _imgBtnDelete
        this._imgBtnDelete = new ccui.ImageView();
        this._imgBtnDelete.setName("_imgBtnDelete");
        this._layoutBtnDelete.addChild(this._imgBtnDelete);
        this._imgBtnDelete.setCascadeOpacityEnabled(true);
        this._imgBtnDelete.setCascadeColorEnabled(true);
        this._imgBtnDelete.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBtnDelete, 0.5, 0.5);
        let _imgBtnDeleteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBtnDelete);
        _imgBtnDeleteLayoutComponent.setPositionPercentXEnabled(true);
        _imgBtnDeleteLayoutComponent.setPositionPercentX(0.5);
        _imgBtnDeleteLayoutComponent.setPositionPercentYEnabled(true);
        _imgBtnDeleteLayoutComponent.setPositionPercentY(0.5);
        _imgBtnDeleteLayoutComponent.setPercentWidthEnabled(true);
        _imgBtnDeleteLayoutComponent.setPercentWidth(1);
        _imgBtnDeleteLayoutComponent.setPercentHeightEnabled(true);
        _imgBtnDeleteLayoutComponent.setPercentHeight(1);
        this._imgBtnDelete.loadTexture("buttons/rectangles/Red.png", 1);
        this._imgBtnDelete.setUnifySizeEnabled(false);
        this._imgBtnDelete.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBtnDelete, 1, 1);
        this._imgBtnDelete.setTouchEnabled(false);

        ///// # _txtDelete
        this._txtDelete = new ck.Text();
        this._txtDelete.setName("_txtDelete");
        this._layoutBtnDelete.addChild(this._txtDelete);
        this._txtDelete.setCascadeOpacityEnabled(true);
        this._txtDelete.setCascadeColorEnabled(true);
        this._txtDelete.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDelete, 0.5, 0.53);
        let _txtDeleteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDelete);
        _txtDeleteLayoutComponent.setPositionPercentXEnabled(true);
        _txtDeleteLayoutComponent.setPositionPercentX(0.5);
        _txtDeleteLayoutComponent.setPositionPercentYEnabled(true);
        _txtDeleteLayoutComponent.setPositionPercentY(0.53);
        this._txtDelete.setTouchEnabled(false);
        this._txtDelete.ignoreContentAdaptWithSize(true);
        this._txtDelete.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDelete.setDefaultFontSize(35);
        this._txtDelete.setString(gm.localize.getText("TXT_DELETE"));
        this._txtDelete.setTextHorizontalAlignment(0);
        this._txtDelete.setTextVerticalAlignment(0);
        this._txtDelete.enableOutline(cc.color(164, 49, 41, 255), 2);

    },



});

/**
 * Create MailDetailPopup
 * @returns {_ccs.MailDetailPopup}
 */
_ccs.MailDetailPopup.create = function () {
    return new _ccs.MailDetailPopup();
};
