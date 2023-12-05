/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.NotEnoughCoinToPlayPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.NotEnoughCoinToPlayPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {ccui.ImageView} */
    _imgFont: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ck.Text} */
    _txtHeader: null,
    /** @type {ck.Text} */
    _txtMessage: null,
    /** @type {ccui.ImageView} */
    _imgBuy: null,
    /** @type {ck.Text} */
    _txtBuy: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.ImageView} */
    _imgInviteFriend: null,
    /** @type {ck.Text} */
    _txtInviteFriend: null,


    /**
     * _ccs.NotEnoughCoinToPlayPopup constructor
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

        ///// # _root
        this._root = new ccui.Layout();
        this._root.setName("_root");
        this.addChild(this._root);
        this._root.setCascadeOpacityEnabled(true);
        this._root.setCascadeColorEnabled(true);
        this._root.setAnchorPoint(cc.p(0.5, 0.5));
        this._root.setPosition(0, -0.0001);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(500, 500));

        ///// # _imgBack
        this._imgBack = new ccui.ImageView();
        this._imgBack.setName("_imgBack");
        this._root.addChild(this._imgBack);
        this._imgBack.setCascadeOpacityEnabled(true);
        this._imgBack.setCascadeColorEnabled(true);
        this._imgBack.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBack, 0.5, 0.5);
        let _imgBackLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBack);
        _imgBackLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackLayoutComponent.setPositionPercentX(0.5);
        _imgBackLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackLayoutComponent.setPositionPercentY(0.5);
        _imgBackLayoutComponent.setPercentWidthEnabled(true);
        _imgBackLayoutComponent.setPercentWidth(1);
        _imgBackLayoutComponent.setPercentHeightEnabled(true);
        _imgBackLayoutComponent.setPercentHeight(1);
        this._imgBack.loadTexture("basics/popup/Back.png", 1);
        this._imgBack.setUnifySizeEnabled(false);
        this._imgBack.ignoreContentAdaptWithSize(false);
        this._imgBack.setScale9Enabled(true);
        this._imgBack.setCapInsets(cc.rect(69, 57, 72, 61));
        ck.UIUtils.setSizePercent(this._imgBack, 1, 1);
        this._imgBack.setTouchEnabled(false);

        ///// # _imgFont
        this._imgFont = new ccui.ImageView();
        this._imgFont.setName("_imgFont");
        this._root.addChild(this._imgFont);
        this._imgFont.setCascadeOpacityEnabled(true);
        this._imgFont.setCascadeColorEnabled(true);
        this._imgFont.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgFont, 0.5, 0.5);
        let _imgFontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFont);
        _imgFontLayoutComponent.setPositionPercentXEnabled(true);
        _imgFontLayoutComponent.setPositionPercentX(0.5);
        _imgFontLayoutComponent.setPositionPercentYEnabled(true);
        _imgFontLayoutComponent.setPositionPercentY(0.5);
        _imgFontLayoutComponent.setPercentWidthEnabled(true);
        _imgFontLayoutComponent.setPercentWidth(0.9353);
        _imgFontLayoutComponent.setPercentHeightEnabled(true);
        _imgFontLayoutComponent.setPercentHeight(0.9353);
        this._imgFont.loadTexture("basics/popup/Font.png", 1);
        this._imgFont.setUnifySizeEnabled(false);
        this._imgFont.ignoreContentAdaptWithSize(false);
        this._imgFont.setScale9Enabled(true);
        this._imgFont.setCapInsets(cc.rect(52, 48, 49, 49));
        ck.UIUtils.setSizePercent(this._imgFont, 0.9353, 0.9353);
        this._imgFont.setTouchEnabled(false);

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._root.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 0.996);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(0.996);
        this._imgHeader.loadTexture("basics/popup/HeaderBlue.png", 1);
        this._imgHeader.setUnifySizeEnabled(false);
        this._imgHeader.ignoreContentAdaptWithSize(false);
        this._imgHeader.setContentSize(cc.size(346, 84));
        this._imgHeader.setTouchEnabled(false);

        ///// # _txtHeader
        this._txtHeader = new ck.Text();
        this._txtHeader.setName("_txtHeader");
        this._imgHeader.addChild(this._txtHeader);
        this._txtHeader.setCascadeOpacityEnabled(true);
        this._txtHeader.setCascadeColorEnabled(true);
        this._txtHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHeader, 0.5, 0.55);
        this._txtHeader.setTextColor(cc.color(255, 252, 225, 255));
        let _txtHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHeader);
        _txtHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentX(0.5);
        _txtHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentY(0.55);
        this._txtHeader.setTouchEnabled(false);
        this._txtHeader.ignoreContentAdaptWithSize(true);
        this._txtHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHeader.setDefaultFontSize(55);
        this._txtHeader.setString(gm.localize.getText("TXT_ALERT"));
        this._txtHeader.setTextHorizontalAlignment(1);
        this._txtHeader.setTextVerticalAlignment(1);
        this._txtHeader.enableOutline(cc.color(155, 68, 38, 255), 2);
        this._txtHeader.enableShadow(cc.color(155, 68, 38, 255), cc.size(0, -2), 0);

        ///// # _txtMessage
        this._txtMessage = new ck.Text();
        this._txtMessage.setName("_txtMessage");
        this._root.addChild(this._txtMessage);
        this._txtMessage.setCascadeOpacityEnabled(true);
        this._txtMessage.setCascadeColorEnabled(true);
        this._txtMessage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMessage, 0.5, 0.56);
        this._txtMessage.setTextColor(cc.color(87, 60, 38, 255));
        let _txtMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMessage);
        _txtMessageLayoutComponent.setPositionPercentXEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentX(0.5);
        _txtMessageLayoutComponent.setPositionPercentYEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentY(0.56);
        _txtMessageLayoutComponent.setPercentWidthEnabled(true);
        _txtMessageLayoutComponent.setPercentWidth(0.8662);
        _txtMessageLayoutComponent.setPercentHeightEnabled(true);
        _txtMessageLayoutComponent.setPercentHeight(0.6003);
        this._txtMessage.setTouchEnabled(false);
        this._txtMessage.setUnifySizeEnabled(false);
        this._txtMessage.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtMessage, 0.8662, 0.6003);
        this._txtMessage.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMessage.setDefaultFontSize(35);
        this._txtMessage.setString(gm.localize.getText("TXT_MIN_COIN_NEEDED_MESSAGE"));
        this._txtMessage.setTextHorizontalAlignment(1);
        this._txtMessage.setTextVerticalAlignment(1);

        ///// # _imgBuy
        this._imgBuy = new ccui.ImageView();
        this._imgBuy.setName("_imgBuy");
        this._root.addChild(this._imgBuy);
        this._imgBuy.setCascadeOpacityEnabled(true);
        this._imgBuy.setCascadeColorEnabled(true);
        this._imgBuy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBuy, 0.72, 0.16);
        let _imgBuyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBuy);
        _imgBuyLayoutComponent.setPositionPercentXEnabled(true);
        _imgBuyLayoutComponent.setPositionPercentX(0.72);
        _imgBuyLayoutComponent.setPositionPercentYEnabled(true);
        _imgBuyLayoutComponent.setPositionPercentY(0.16);
        this._imgBuy.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgBuy.setUnifySizeEnabled(false);
        this._imgBuy.ignoreContentAdaptWithSize(false);
        this._imgBuy.setContentSize(cc.size(206, 81));
        this._imgBuy.setTouchEnabled(true);

        ///// # _txtBuy
        this._txtBuy = new ck.Text();
        this._txtBuy.setName("_txtBuy");
        this._imgBuy.addChild(this._txtBuy);
        this._txtBuy.setCascadeOpacityEnabled(true);
        this._txtBuy.setCascadeColorEnabled(true);
        this._txtBuy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBuy, 0.5, 0.55);
        let _txtBuyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBuy);
        _txtBuyLayoutComponent.setPositionPercentXEnabled(true);
        _txtBuyLayoutComponent.setPositionPercentX(0.5);
        _txtBuyLayoutComponent.setPositionPercentYEnabled(true);
        _txtBuyLayoutComponent.setPositionPercentY(0.55);
        this._txtBuy.setTouchEnabled(false);
        this._txtBuy.ignoreContentAdaptWithSize(true);
        this._txtBuy.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBuy.setDefaultFontSize(40);
        this._txtBuy.setString(gm.localize.getText("TXT_BUY"));
        this._txtBuy.setTextHorizontalAlignment(1);
        this._txtBuy.setTextVerticalAlignment(1);
        this._txtBuy.enableOutline(cc.color(158, 82, 9, 255), 2);

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._root.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.97, 0.97);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.97);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.97);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(81, 83));
        this._imgClose.setTouchEnabled(true);

        ///// # _imgInviteFriend
        this._imgInviteFriend = new ccui.ImageView();
        this._imgInviteFriend.setName("_imgInviteFriend");
        this._root.addChild(this._imgInviteFriend);
        this._imgInviteFriend.setCascadeOpacityEnabled(true);
        this._imgInviteFriend.setCascadeColorEnabled(true);
        this._imgInviteFriend.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgInviteFriend, 0.28, 0.16);
        let _imgInviteFriendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgInviteFriend);
        _imgInviteFriendLayoutComponent.setPositionPercentXEnabled(true);
        _imgInviteFriendLayoutComponent.setPositionPercentX(0.28);
        _imgInviteFriendLayoutComponent.setPositionPercentYEnabled(true);
        _imgInviteFriendLayoutComponent.setPositionPercentY(0.16);
        this._imgInviteFriend.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgInviteFriend.setUnifySizeEnabled(false);
        this._imgInviteFriend.ignoreContentAdaptWithSize(false);
        this._imgInviteFriend.setContentSize(cc.size(206, 81));
        this._imgInviteFriend.setTouchEnabled(true);

        ///// # _txtInviteFriend
        this._txtInviteFriend = new ck.Text();
        this._txtInviteFriend.setName("_txtInviteFriend");
        this._imgInviteFriend.addChild(this._txtInviteFriend);
        this._txtInviteFriend.setCascadeOpacityEnabled(true);
        this._txtInviteFriend.setCascadeColorEnabled(true);
        this._txtInviteFriend.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtInviteFriend, 0.5, 0.55);
        let _txtInviteFriendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtInviteFriend);
        _txtInviteFriendLayoutComponent.setPositionPercentXEnabled(true);
        _txtInviteFriendLayoutComponent.setPositionPercentX(0.5);
        _txtInviteFriendLayoutComponent.setPositionPercentYEnabled(true);
        _txtInviteFriendLayoutComponent.setPositionPercentY(0.55);
        this._txtInviteFriend.setTouchEnabled(false);
        this._txtInviteFriend.ignoreContentAdaptWithSize(true);
        this._txtInviteFriend.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtInviteFriend.setDefaultFontSize(32);
        this._txtInviteFriend.setString(gm.localize.getText("TXT_INVITE_FRIEND"));
        this._txtInviteFriend.setTextHorizontalAlignment(1);
        this._txtInviteFriend.setTextVerticalAlignment(1);
        this._txtInviteFriend.enableOutline(cc.color(158, 82, 9, 255), 2);

    },



});

/**
 * Create NotEnoughCoinToPlayPopup
 * @returns {_ccs.NotEnoughCoinToPlayPopup}
 */
_ccs.NotEnoughCoinToPlayPopup.create = function () {
    return new _ccs.NotEnoughCoinToPlayPopup();
};
