/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.MailItemNode
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.MailItemNode = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ccui.Layout} */
    _layoutAvatar: null,
    /** @type {Avatar} */
    _avatar: null,
    /** @type {ck.Text} */
    _txtSender: null,
    /** @type {ck.Text} */
    _txtDescription: null,
    /** @type {ck.Text} */
    _txtTime: null,
    /** @type {ccui.ImageView} */
    _imgReddot: null,
    /** @type {ccui.Layout} */
    _layoutBtnDelete: null,
    /** @type {ccui.ImageView} */
    _imgBtnDelete: null,
    /** @type {ccui.ImageView} */
    _imgDeleteIcon: null,
    /** @type {ck.Text} */
    _txtDelete: null,
    /** @type {ccui.Layout} */
    _layoutBtnReply: null,
    /** @type {ccui.ImageView} */
    _imgBtnReply: null,
    /** @type {ccui.ImageView} */
    _imgReplyIcon: null,
    /** @type {ck.Text} */
    _txtReply: null,
    /** @type {ccui.Layout} */
    _layoutBtnInput: null,
    /** @type {ccui.ImageView} */
    _imgBtnInput: null,
    /** @type {ccui.ImageView} */
    _imgInputIcon: null,
    /** @type {ck.Text} */
    _txtInput: null,
    /** @type {ccui.ImageView} */
    _imgLine: null,


    /**
     * _ccs.MailItemNode constructor
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
        this._layoutRoot.setContentSize(cc.size(466, 186));

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._layoutRoot.addChild(this._imgBackground);
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
        this._layoutAvatar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutAvatar, 0.07, 0.83);
        let _layoutAvatarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAvatar);
        _layoutAvatarLayoutComponent.setPositionPercentXEnabled(true);
        _layoutAvatarLayoutComponent.setPositionPercentX(0.07);
        _layoutAvatarLayoutComponent.setPositionPercentYEnabled(true);
        _layoutAvatarLayoutComponent.setPositionPercentY(0.83);
        this._layoutAvatar.setTouchEnabled(true);
        this._layoutAvatar.setUnifySizeEnabled(false);
        this._layoutAvatar.ignoreContentAdaptWithSize(false);
        this._layoutAvatar.setContentSize(cc.size(45, 45));

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
        this._avatar.setWidth(45);

        ///// # _txtSender
        this._txtSender = new ck.Text();
        this._txtSender.setName("_txtSender");
        this._layoutRoot.addChild(this._txtSender);
        this._txtSender.setCascadeOpacityEnabled(true);
        this._txtSender.setCascadeColorEnabled(true);
        this._txtSender.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtSender, 0.1333, 0.8556);
        this._txtSender.setTextColor(cc.color(109, 91, 76, 255));
        let _txtSenderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSender);
        _txtSenderLayoutComponent.setPositionPercentXEnabled(true);
        _txtSenderLayoutComponent.setPositionPercentX(0.1333);
        _txtSenderLayoutComponent.setPositionPercentYEnabled(true);
        _txtSenderLayoutComponent.setPositionPercentY(0.8556);
        this._txtSender.setTouchEnabled(false);
        this._txtSender.setUnifySizeEnabled(false);
        this._txtSender.ignoreContentAdaptWithSize(false);
        this._txtSender.setContentSize(cc.size(260.2718, 30));
        this._txtSender.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSender.setDefaultFontSize(23);
        this._txtSender.setTextHorizontalAlignment(0);
        this._txtSender.setTextVerticalAlignment(1);

        ///// # _txtDescription
        this._txtDescription = new ck.Text();
        this._txtDescription.setName("_txtDescription");
        this._layoutRoot.addChild(this._txtDescription);
        this._txtDescription.setCascadeOpacityEnabled(true);
        this._txtDescription.setCascadeColorEnabled(true);
        this._txtDescription.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._txtDescription, 0.4984, 0.7028);
        this._txtDescription.setTextColor(cc.color(111, 58, 48, 255));
        let _txtDescriptionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDescription);
        _txtDescriptionLayoutComponent.setPositionPercentXEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentX(0.4984);
        _txtDescriptionLayoutComponent.setPositionPercentYEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentY(0.7028);
        this._txtDescription.setTouchEnabled(false);
        this._txtDescription.setUnifySizeEnabled(false);
        this._txtDescription.ignoreContentAdaptWithSize(false);
        this._txtDescription.setContentSize(cc.size(446.5434, 84.1279));
        this._txtDescription.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDescription.setDefaultFontSize(25);
        this._txtDescription.setTextHorizontalAlignment(0);
        this._txtDescription.setTextVerticalAlignment(0);

        ///// # _txtTime
        this._txtTime = new ck.Text();
        this._txtTime.setName("_txtTime");
        this._layoutRoot.addChild(this._txtTime);
        this._txtTime.setCascadeOpacityEnabled(true);
        this._txtTime.setCascadeColorEnabled(true);
        this._txtTime.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTime, 0.9512, 0.8626);
        this._txtTime.setTextColor(cc.color(160, 134, 114, 255));
        let _txtTimeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTime);
        _txtTimeLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLayoutComponent.setPositionPercentX(0.9512);
        _txtTimeLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLayoutComponent.setPositionPercentY(0.8626);
        this._txtTime.setTouchEnabled(false);
        this._txtTime.setUnifySizeEnabled(false);
        this._txtTime.ignoreContentAdaptWithSize(false);
        this._txtTime.setContentSize(cc.size(142, 30));
        this._txtTime.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTime.setDefaultFontSize(24);
        this._txtTime.setTextHorizontalAlignment(2);
        this._txtTime.setTextVerticalAlignment(1);

        ///// # _imgReddot
        this._imgReddot = new ccui.ImageView();
        this._imgReddot.setName("_imgReddot");
        this._layoutRoot.addChild(this._imgReddot);
        this._imgReddot.setCascadeOpacityEnabled(true);
        this._imgReddot.setCascadeColorEnabled(true);
        this._imgReddot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgReddot, 0.9752, 0.9336);
        this._imgReddot.setScale(0.8, 0.8);
        let _imgReddotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgReddot);
        _imgReddotLayoutComponent.setPositionPercentXEnabled(true);
        _imgReddotLayoutComponent.setPositionPercentX(0.9752);
        _imgReddotLayoutComponent.setPositionPercentYEnabled(true);
        _imgReddotLayoutComponent.setPositionPercentY(0.9336);
        this._imgReddot.loadTexture("basics/other/RedDot.png", 1);
        this._imgReddot.setUnifySizeEnabled(false);
        this._imgReddot.ignoreContentAdaptWithSize(false);
        this._imgReddot.setContentSize(cc.size(31, 31));
        this._imgReddot.setTouchEnabled(false);

        ///// # _layoutBtnDelete
        this._layoutBtnDelete = new ccui.Layout();
        this._layoutBtnDelete.setName("_layoutBtnDelete");
        this._layoutRoot.addChild(this._layoutBtnDelete);
        this._layoutBtnDelete.setCascadeOpacityEnabled(true);
        this._layoutBtnDelete.setCascadeColorEnabled(true);
        this._layoutBtnDelete.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBtnDelete, 0.5021, 0.1935);
        let _layoutBtnDeleteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBtnDelete);
        this._layoutBtnDelete.setTouchEnabled(true);
        this._layoutBtnDelete.setUnifySizeEnabled(false);
        this._layoutBtnDelete.ignoreContentAdaptWithSize(false);
        this._layoutBtnDelete.setContentSize(cc.size(143, 52));

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
        this._imgBtnDelete.loadTexture("buttons/rectangles/Red.png", 1);
        this._imgBtnDelete.setUnifySizeEnabled(false);
        this._imgBtnDelete.ignoreContentAdaptWithSize(false);
        this._imgBtnDelete.setContentSize(cc.size(138, 50));
        this._imgBtnDelete.setTouchEnabled(false);

        ///// # _imgDeleteIcon
        this._imgDeleteIcon = new ccui.ImageView();
        this._imgDeleteIcon.setName("_imgDeleteIcon");
        this._layoutBtnDelete.addChild(this._imgDeleteIcon);
        this._imgDeleteIcon.setCascadeOpacityEnabled(true);
        this._imgDeleteIcon.setCascadeColorEnabled(true);
        this._imgDeleteIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgDeleteIcon, 0.5, 0.5);
        this._imgDeleteIcon.setVisible(false);
        let _imgDeleteIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDeleteIcon);
        _imgDeleteIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgDeleteIconLayoutComponent.setPositionPercentX(0.5);
        _imgDeleteIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgDeleteIconLayoutComponent.setPositionPercentY(0.5);
        this._imgDeleteIcon.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgDeleteIcon.setUnifySizeEnabled(false);
        this._imgDeleteIcon.ignoreContentAdaptWithSize(false);
        this._imgDeleteIcon.setContentSize(cc.size(32, 32));
        this._imgDeleteIcon.setTouchEnabled(false);

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

        ///// # _layoutBtnReply
        this._layoutBtnReply = new ccui.Layout();
        this._layoutBtnReply.setName("_layoutBtnReply");
        this._layoutRoot.addChild(this._layoutBtnReply);
        this._layoutBtnReply.setCascadeOpacityEnabled(true);
        this._layoutBtnReply.setCascadeColorEnabled(true);
        this._layoutBtnReply.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBtnReply, 0.8176, 0.1935);
        let _layoutBtnReplyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBtnReply);
        this._layoutBtnReply.setTouchEnabled(true);
        this._layoutBtnReply.setUnifySizeEnabled(false);
        this._layoutBtnReply.ignoreContentAdaptWithSize(false);
        this._layoutBtnReply.setContentSize(cc.size(143, 52));

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
        this._imgBtnReply.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgBtnReply.setUnifySizeEnabled(false);
        this._imgBtnReply.ignoreContentAdaptWithSize(false);
        this._imgBtnReply.setContentSize(cc.size(138, 50));
        this._imgBtnReply.setTouchEnabled(false);

        ///// # _imgReplyIcon
        this._imgReplyIcon = new ccui.ImageView();
        this._imgReplyIcon.setName("_imgReplyIcon");
        this._layoutBtnReply.addChild(this._imgReplyIcon);
        this._imgReplyIcon.setCascadeOpacityEnabled(true);
        this._imgReplyIcon.setCascadeColorEnabled(true);
        this._imgReplyIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgReplyIcon, 0.5, 0.53);
        this._imgReplyIcon.setVisible(false);
        let _imgReplyIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgReplyIcon);
        _imgReplyIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgReplyIconLayoutComponent.setPositionPercentX(0.5);
        _imgReplyIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgReplyIconLayoutComponent.setPositionPercentY(0.53);
        this._imgReplyIcon.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgReplyIcon.setUnifySizeEnabled(false);
        this._imgReplyIcon.ignoreContentAdaptWithSize(false);
        this._imgReplyIcon.setContentSize(cc.size(32, 32));
        this._imgReplyIcon.setTouchEnabled(false);

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
        this._txtReply.setDefaultFontSize(35);
        this._txtReply.setString(gm.localize.getText("TXT_REPLY"));
        this._txtReply.setTextHorizontalAlignment(0);
        this._txtReply.setTextVerticalAlignment(0);
        this._txtReply.enableOutline(cc.color(15, 108, 116, 255), 2);

        ///// # _layoutBtnInput
        this._layoutBtnInput = new ccui.Layout();
        this._layoutBtnInput.setName("_layoutBtnInput");
        this._layoutRoot.addChild(this._layoutBtnInput);
        this._layoutBtnInput.setCascadeOpacityEnabled(true);
        this._layoutBtnInput.setCascadeColorEnabled(true);
        this._layoutBtnInput.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBtnInput, 0.8176, 0.1935);
        this._layoutBtnInput.setVisible(false);
        let _layoutBtnInputLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBtnInput);
        this._layoutBtnInput.setTouchEnabled(true);
        this._layoutBtnInput.setUnifySizeEnabled(false);
        this._layoutBtnInput.ignoreContentAdaptWithSize(false);
        this._layoutBtnInput.setContentSize(cc.size(143, 52));

        ///// # _imgBtnInput
        this._imgBtnInput = new ccui.ImageView();
        this._imgBtnInput.setName("_imgBtnInput");
        this._layoutBtnInput.addChild(this._imgBtnInput);
        this._imgBtnInput.setCascadeOpacityEnabled(true);
        this._imgBtnInput.setCascadeColorEnabled(true);
        this._imgBtnInput.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBtnInput, 0.5, 0.5);
        let _imgBtnInputLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBtnInput);
        _imgBtnInputLayoutComponent.setPositionPercentXEnabled(true);
        _imgBtnInputLayoutComponent.setPositionPercentX(0.5);
        _imgBtnInputLayoutComponent.setPositionPercentYEnabled(true);
        _imgBtnInputLayoutComponent.setPositionPercentY(0.5);
        this._imgBtnInput.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgBtnInput.setUnifySizeEnabled(false);
        this._imgBtnInput.ignoreContentAdaptWithSize(false);
        this._imgBtnInput.setContentSize(cc.size(138, 50));
        this._imgBtnInput.setTouchEnabled(false);

        ///// # _imgInputIcon
        this._imgInputIcon = new ccui.ImageView();
        this._imgInputIcon.setName("_imgInputIcon");
        this._layoutBtnInput.addChild(this._imgInputIcon);
        this._imgInputIcon.setCascadeOpacityEnabled(true);
        this._imgInputIcon.setCascadeColorEnabled(true);
        this._imgInputIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgInputIcon, 0.5, 0.53);
        this._imgInputIcon.setVisible(false);
        let _imgInputIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgInputIcon);
        _imgInputIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgInputIconLayoutComponent.setPositionPercentX(0.5);
        _imgInputIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgInputIconLayoutComponent.setPositionPercentY(0.53);
        this._imgInputIcon.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgInputIcon.setUnifySizeEnabled(false);
        this._imgInputIcon.ignoreContentAdaptWithSize(false);
        this._imgInputIcon.setContentSize(cc.size(32, 32));
        this._imgInputIcon.setTouchEnabled(false);

        ///// # _txtInput
        this._txtInput = new ck.Text();
        this._txtInput.setName("_txtInput");
        this._layoutBtnInput.addChild(this._txtInput);
        this._txtInput.setCascadeOpacityEnabled(true);
        this._txtInput.setCascadeColorEnabled(true);
        this._txtInput.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtInput, 0.5, 0.53);
        let _txtInputLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtInput);
        _txtInputLayoutComponent.setPositionPercentXEnabled(true);
        _txtInputLayoutComponent.setPositionPercentX(0.5);
        _txtInputLayoutComponent.setPositionPercentYEnabled(true);
        _txtInputLayoutComponent.setPositionPercentY(0.53);
        this._txtInput.setTouchEnabled(false);
        this._txtInput.ignoreContentAdaptWithSize(true);
        this._txtInput.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtInput.setDefaultFontSize(35);
        this._txtInput.setString(gm.localize.getText("TXT_INPUT"));
        this._txtInput.setTextHorizontalAlignment(0);
        this._txtInput.setTextVerticalAlignment(0);
        this._txtInput.enableOutline(cc.color(15, 108, 116, 255), 2);

        ///// # _imgLine
        this._imgLine = new ccui.ImageView();
        this._imgLine.setName("_imgLine");
        this._layoutRoot.addChild(this._imgLine);
        this._imgLine.setCascadeOpacityEnabled(true);
        this._imgLine.setCascadeColorEnabled(true);
        this._imgLine.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLine, 0.5, -0.018);
        this._imgLine.setVisible(false);
        let _imgLineLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLine);
        _imgLineLayoutComponent.setPositionPercentXEnabled(true);
        _imgLineLayoutComponent.setPositionPercentX(0.5);
        _imgLineLayoutComponent.setPositionPercentYEnabled(true);
        _imgLineLayoutComponent.setPositionPercentY(-0.018);
        _imgLineLayoutComponent.setPercentWidthEnabled(true);
        _imgLineLayoutComponent.setPercentWidth(0.9828);
        this._imgLine.loadTexture("basics/other/LightBlueLine.png", 1);
        this._imgLine.setUnifySizeEnabled(false);
        this._imgLine.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._imgLine, 0.9828);
        this._imgLine.setContentSize(cc.size(this._imgLine.width, 12));
        this._imgLine.setTouchEnabled(false);

    },



});

/**
 * Create MailItemNode
 * @returns {_ccs.MailItemNode}
 */
_ccs.MailItemNode.create = function () {
    return new _ccs.MailItemNode();
};
