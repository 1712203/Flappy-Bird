/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ChatTabLayout
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ChatTabLayout = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutSendChat: null,
    /** @type {ck.EditBox} */
    _editBoxSendChat: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxBackground: null,
    /** @type {ccui.ImageView} */
    _imgEditBoxBackground: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxText: null,
    /** @type {ck.Text} */
    _txtEditBoxTextDisplay: null,
    /** @type {AsyncButton} */
    _btnSend: null,
    /** @type {ccui.ImageView} */
    _imgButtonSend: null,
    /** @type {ck.Text} */
    _txtButtonSend: null,
    /** @type {ccui.ImageView} */
    _imgLoadingButtonSend: null,
    /** @type {ccui.Layout} */
    _layoutSuggestedMessage: null,
    /** @type {ccui.ListView} */
    _listviewSuggestedMessage: null,


    /**
     * _ccs.ChatTabLayout constructor
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
        this._layoutRoot.setContentSize(cc.size(450, 468));

        ///// # _layoutSendChat
        this._layoutSendChat = new ccui.Layout();
        this._layoutSendChat.setName("_layoutSendChat");
        this._layoutRoot.addChild(this._layoutSendChat);
        this._layoutSendChat.setCascadeOpacityEnabled(true);
        this._layoutSendChat.setCascadeColorEnabled(true);
        let _layoutSendChatLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSendChat);
        _layoutSendChatLayoutComponent.setPercentWidthEnabled(true);
        _layoutSendChatLayoutComponent.setPercentWidth(1);
        this._layoutSendChat.setTouchEnabled(true);
        this._layoutSendChat.setUnifySizeEnabled(false);
        this._layoutSendChat.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutSendChat, 1);
        this._layoutSendChat.setContentSize(cc.size(this._layoutSendChat.width, 60));

        ///// # _editBoxSendChat
        this._editBoxSendChat = new ck.EditBox();
        this._editBoxSendChat.setName("_editBoxSendChat");
        this._layoutSendChat.addChild(this._editBoxSendChat);
        this._editBoxSendChat.setCascadeOpacityEnabled(true);
        this._editBoxSendChat.setCascadeColorEnabled(true);
        this._editBoxSendChat.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxSendChat, 0.0103, 0.5);
        let _editBoxSendChatLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxSendChat);
        _editBoxSendChatLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxSendChatLayoutComponent.setPositionPercentY(0.5);
        this._editBoxSendChat.setUnifySizeEnabled(false);
        this._editBoxSendChat.ignoreContentAdaptWithSize(false);
        this._editBoxSendChat.setContentSize(cc.size(360.17, 46));
        this._editBoxSendChat.setTouchEnabled(false);

        ///// # _layoutEditBoxBackground
        this._layoutEditBoxBackground = new ccui.Layout();
        this._layoutEditBoxBackground.setName("_layoutEditBoxBackground");
        this._editBoxSendChat.addChild(this._layoutEditBoxBackground);
        this._layoutEditBoxBackground.setCascadeOpacityEnabled(true);
        this._layoutEditBoxBackground.setCascadeColorEnabled(true);
        let _layoutEditBoxBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEditBoxBackground);
        _layoutEditBoxBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _layoutEditBoxBackgroundLayoutComponent.setPercentWidth(1);
        _layoutEditBoxBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _layoutEditBoxBackgroundLayoutComponent.setPercentHeight(1);
        this._layoutEditBoxBackground.setTouchEnabled(true);
        this._layoutEditBoxBackground.setUnifySizeEnabled(false);
        this._layoutEditBoxBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutEditBoxBackground, 1, 1);

        ///// # _imgEditBoxBackground
        this._imgEditBoxBackground = new ccui.ImageView();
        this._imgEditBoxBackground.setName("_imgEditBoxBackground");
        this._layoutEditBoxBackground.addChild(this._imgEditBoxBackground);
        this._imgEditBoxBackground.setCascadeOpacityEnabled(true);
        this._imgEditBoxBackground.setCascadeColorEnabled(true);
        this._imgEditBoxBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgEditBoxBackground, 0.5, 0.5218);
        this._imgEditBoxBackground.setColor(cc.color(18, 18, 18, 255));
        let _imgEditBoxBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgEditBoxBackground);
        _imgEditBoxBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgEditBoxBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgEditBoxBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgEditBoxBackgroundLayoutComponent.setPositionPercentY(0.5218);
        _imgEditBoxBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgEditBoxBackgroundLayoutComponent.setPercentWidth(1);
        _imgEditBoxBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgEditBoxBackgroundLayoutComponent.setPercentHeight(1);
        this._imgEditBoxBackground.loadTexture("basics/shapes/Square.png", 1);
        this._imgEditBoxBackground.setUnifySizeEnabled(false);
        this._imgEditBoxBackground.ignoreContentAdaptWithSize(false);
        this._imgEditBoxBackground.setScale9Enabled(true);
        this._imgEditBoxBackground.setCapInsets(cc.rect(10, 10, 12, 12));
        ck.UIUtils.setSizePercent(this._imgEditBoxBackground, 1, 1);
        this._imgEditBoxBackground.setTouchEnabled(false);

        ///// # _layoutEditBoxText
        this._layoutEditBoxText = new ccui.Layout();
        this._layoutEditBoxText.setName("_layoutEditBoxText");
        this._editBoxSendChat.addChild(this._layoutEditBoxText);
        this._layoutEditBoxText.setCascadeOpacityEnabled(true);
        this._layoutEditBoxText.setCascadeColorEnabled(true);
        this._layoutEditBoxText.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutEditBoxText, 0.03, 0.5);
        let _layoutEditBoxTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEditBoxText);
        _layoutEditBoxTextLayoutComponent.setPositionPercentXEnabled(true);
        _layoutEditBoxTextLayoutComponent.setPositionPercentX(0.03);
        _layoutEditBoxTextLayoutComponent.setPositionPercentYEnabled(true);
        _layoutEditBoxTextLayoutComponent.setPositionPercentY(0.5);
        _layoutEditBoxTextLayoutComponent.setPercentWidthEnabled(true);
        _layoutEditBoxTextLayoutComponent.setPercentWidth(0.89);
        _layoutEditBoxTextLayoutComponent.setPercentHeightEnabled(true);
        _layoutEditBoxTextLayoutComponent.setPercentHeight(1);
        this._layoutEditBoxText.setTouchEnabled(false);
        this._layoutEditBoxText.setUnifySizeEnabled(false);
        this._layoutEditBoxText.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutEditBoxText, 0.89, 1);
        this._layoutEditBoxText.setClippingEnabled(true);

        ///// # _txtEditBoxTextDisplay
        this._txtEditBoxTextDisplay = new ck.Text();
        this._txtEditBoxTextDisplay.setName("_txtEditBoxTextDisplay");
        this._layoutEditBoxText.addChild(this._txtEditBoxTextDisplay);
        this._txtEditBoxTextDisplay.setCascadeOpacityEnabled(true);
        this._txtEditBoxTextDisplay.setCascadeColorEnabled(true);
        this._txtEditBoxTextDisplay.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtEditBoxTextDisplay, 0, 0.5);
        this._txtEditBoxTextDisplay.setTextColor(cc.color(141, 141, 141, 255));
        let _txtEditBoxTextDisplayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtEditBoxTextDisplay);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentXEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentX(0);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentYEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentY(0.5);
        _txtEditBoxTextDisplayLayoutComponent.setPercentWidthEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPercentWidth(0.3619);
        _txtEditBoxTextDisplayLayoutComponent.setPercentHeightEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPercentHeight(0.7174);
        this._txtEditBoxTextDisplay.setTouchEnabled(false);
        this._txtEditBoxTextDisplay.ignoreContentAdaptWithSize(true);
        this._txtEditBoxTextDisplay.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtEditBoxTextDisplay.setDefaultFontSize(30);
        this._txtEditBoxTextDisplay.setString(gm.localize.getText("TXT_TAP_TO_ENTER"));
        this._txtEditBoxTextDisplay.setTextHorizontalAlignment(0);
        this._txtEditBoxTextDisplay.setTextVerticalAlignment(1);

        ///// # _initEditBox for this._editBoxSendChat;
        this._editBoxSendChat._initEditBox();

        ///// # _btnSend
        this._btnSend = new AsyncButton();
        this._btnSend.setName("_btnSend");
        this._layoutSendChat.addChild(this._btnSend);
        this._btnSend.setCascadeOpacityEnabled(true);
        this._btnSend.setCascadeColorEnabled(true);
        this._btnSend.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._btnSend, 0.9928, 0.4947);
        let _btnSendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnSend);
        this._btnSend.setUnifySizeEnabled(false);
        this._btnSend.ignoreContentAdaptWithSize(false);
        this._btnSend.setContentSize(cc.size(92.35, 50));
        this._btnSend.setTouchEnabled(true);

        ///// # _imgButtonSend
        this._imgButtonSend = new ccui.ImageView();
        this._imgButtonSend.setName("_imgButtonSend");
        this._btnSend.addChild(this._imgButtonSend);
        this._imgButtonSend.setCascadeOpacityEnabled(true);
        this._imgButtonSend.setCascadeColorEnabled(true);
        this._imgButtonSend.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonSend, 0.5, 0.5);
        let _imgButtonSendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonSend);
        _imgButtonSendLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonSendLayoutComponent.setPositionPercentX(0.5);
        _imgButtonSendLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonSendLayoutComponent.setPositionPercentY(0.5);
        _imgButtonSendLayoutComponent.setPercentWidthEnabled(true);
        _imgButtonSendLayoutComponent.setPercentWidth(1);
        _imgButtonSendLayoutComponent.setPercentHeightEnabled(true);
        _imgButtonSendLayoutComponent.setPercentHeight(1);
        this._imgButtonSend.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgButtonSend.setUnifySizeEnabled(false);
        this._imgButtonSend.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonSend, 1, 1);
        this._imgButtonSend.setTouchEnabled(false);

        ///// # _txtButtonSend
        this._txtButtonSend = new ck.Text();
        this._txtButtonSend.setName("_txtButtonSend");
        this._btnSend.addChild(this._txtButtonSend);
        this._txtButtonSend.setCascadeOpacityEnabled(true);
        this._txtButtonSend.setCascadeColorEnabled(true);
        this._txtButtonSend.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonSend, 0.5, 0.52);
        let _txtButtonSendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonSend);
        _txtButtonSendLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonSendLayoutComponent.setPositionPercentX(0.5);
        _txtButtonSendLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonSendLayoutComponent.setPositionPercentY(0.52);
        this._txtButtonSend.setTouchEnabled(false);
        this._txtButtonSend.ignoreContentAdaptWithSize(true);
        this._txtButtonSend.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonSend.setDefaultFontSize(20);
        this._txtButtonSend.setString(gm.localize.getText("TXT_SEND"));
        this._txtButtonSend.setTextHorizontalAlignment(0);
        this._txtButtonSend.setTextVerticalAlignment(0);
        this._txtButtonSend.enableOutline(cc.color(117, 67, 46, 255), 1);

        ///// # _imgLoadingButtonSend
        this._imgLoadingButtonSend = new ccui.ImageView();
        this._imgLoadingButtonSend.setName("_imgLoadingButtonSend");
        this._btnSend.addChild(this._imgLoadingButtonSend);
        this._imgLoadingButtonSend.setCascadeOpacityEnabled(true);
        this._imgLoadingButtonSend.setCascadeColorEnabled(true);
        this._imgLoadingButtonSend.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLoadingButtonSend, 0.5, 0.53);
        this._imgLoadingButtonSend.setVisible(false);
        let _imgLoadingButtonSendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoadingButtonSend);
        _imgLoadingButtonSendLayoutComponent.setPositionPercentXEnabled(true);
        _imgLoadingButtonSendLayoutComponent.setPositionPercentX(0.5);
        _imgLoadingButtonSendLayoutComponent.setPositionPercentYEnabled(true);
        _imgLoadingButtonSendLayoutComponent.setPositionPercentY(0.53);
        this._imgLoadingButtonSend.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgLoadingButtonSend.setUnifySizeEnabled(false);
        this._imgLoadingButtonSend.ignoreContentAdaptWithSize(false);
        this._imgLoadingButtonSend.setContentSize(cc.size(32, 32));
        this._imgLoadingButtonSend.setTouchEnabled(false);

        ///// # _layoutSuggestedMessage
        this._layoutSuggestedMessage = new ccui.Layout();
        this._layoutSuggestedMessage.setName("_layoutSuggestedMessage");
        this._layoutRoot.addChild(this._layoutSuggestedMessage);
        this._layoutSuggestedMessage.setCascadeOpacityEnabled(true);
        this._layoutSuggestedMessage.setCascadeColorEnabled(true);
        this._layoutSuggestedMessage.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutSuggestedMessage, 0.5, 1);
        let _layoutSuggestedMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSuggestedMessage);
        _layoutSuggestedMessageLayoutComponent.setPositionPercentXEnabled(true);
        _layoutSuggestedMessageLayoutComponent.setPositionPercentX(0.5);
        _layoutSuggestedMessageLayoutComponent.setPositionPercentYEnabled(true);
        _layoutSuggestedMessageLayoutComponent.setPositionPercentY(1);
        _layoutSuggestedMessageLayoutComponent.setPercentWidthEnabled(true);
        _layoutSuggestedMessageLayoutComponent.setPercentWidth(1);
        this._layoutSuggestedMessage.setTouchEnabled(true);
        this._layoutSuggestedMessage.setUnifySizeEnabled(false);
        this._layoutSuggestedMessage.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutSuggestedMessage, 1);
        this._layoutSuggestedMessage.setContentSize(cc.size(this._layoutSuggestedMessage.width, 408));

        ///// # _listviewSuggestedMessage
        this._listviewSuggestedMessage = new ccui.ListView();
        this._listviewSuggestedMessage.setName("_listviewSuggestedMessage");
        this._layoutSuggestedMessage.addChild(this._listviewSuggestedMessage);
        this._listviewSuggestedMessage.setCascadeOpacityEnabled(true);
        this._listviewSuggestedMessage.setCascadeColorEnabled(true);
        let _listviewSuggestedMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._listviewSuggestedMessage);
        _listviewSuggestedMessageLayoutComponent.setPercentWidthEnabled(true);
        _listviewSuggestedMessageLayoutComponent.setPercentWidth(1);
        _listviewSuggestedMessageLayoutComponent.setPercentHeightEnabled(true);
        _listviewSuggestedMessageLayoutComponent.setPercentHeight(1);
        this._listviewSuggestedMessage.setTouchEnabled(true);
        this._listviewSuggestedMessage.setUnifySizeEnabled(false);
        this._listviewSuggestedMessage.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._listviewSuggestedMessage, 1, 1);
        this._listviewSuggestedMessage.setDirection(ccui.ScrollView.DIR_VERTICAL);

    },



});

/**
 * Create ChatTabLayout
 * @returns {_ccs.ChatTabLayout}
 */
_ccs.ChatTabLayout.create = function () {
    return new _ccs.ChatTabLayout();
};
