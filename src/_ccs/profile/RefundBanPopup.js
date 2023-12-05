/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.RefundBanPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.RefundBanPopup = ccui.Widget.extend({

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
    /** @type {ck.CustomRichTextExtend} */
    _txtMessage: null,
    /** @type {cc.Node} */
    _nodeGifts: null,
    /** @type {ccui.ImageView} */
    _imgGiftsBgr: null,
    /** @type {ck.GridViewVertical} */
    _gridViewGifts: null,
    /** @type {ccui.Layout} */
    _layoutContact: null,
    /** @type {ccui.ImageView} */
    _imgContact: null,
    /** @type {ck.Text} */
    _txtContact: null,
    /** @type {ccui.ImageView} */
    _imgIconContact: null,
    /** @type {ck.Text} */
    _txtID: null,
    /** @type {ccui.ImageView} */
    _imgCopy: null,
    /** @type {ck.Text} */
    _txtCopy: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,


    /**
     * _ccs.RefundBanPopup constructor
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
        this._root.setTouchEnabled(false);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(500, 600));

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
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 0.99);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(0.99);
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
        this._txtHeader.setString(gm.localize.getText("TXT_BANNED"));
        this._txtHeader.setTextHorizontalAlignment(1);
        this._txtHeader.setTextVerticalAlignment(1);
        this._txtHeader.enableOutline(cc.color(155, 68, 38, 255), 2);
        this._txtHeader.enableShadow(cc.color(155, 68, 38, 255), cc.size(0, -2), 0);

        ///// # _txtMessage
        this._txtMessage = new ck.CustomRichTextExtend(cc.size(425, 300));
        this._txtMessage.setName("_txtMessage");
        this._root.addChild(this._txtMessage);
        this._txtMessage.setCascadeOpacityEnabled(true);
        this._txtMessage.setCascadeColorEnabled(true);
        this._txtMessage.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._txtMessage, 0.5, 0.9);
        this._txtMessage.setDefaultColor(cc.color(87, 60, 38, 255));
        let _txtMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMessage);
        _txtMessageLayoutComponent.setPositionPercentXEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentX(0.5);
        _txtMessageLayoutComponent.setPositionPercentYEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentY(0.9);
        this._txtMessage.setTouchEnabled(false);
        this._txtMessage.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtMessage.setDefaultSize(40);
        this._txtMessage.setDefaultAlignHorizontal(0);
        this._txtMessage.setDefaultAlignVertical(4);
        this._txtMessage.setString(gm.localize.getText("TXT_YOU'RE_BANNED_BECAUSE_YOU_REFUND/CHEAT_MANY_TIMES_BANNED_TO_DD/MM/YY"));

        ///// # _nodeGifts
        this._nodeGifts = new cc.Node();
        this._nodeGifts.setName("_nodeGifts");
        this._root.addChild(this._nodeGifts);
        this._nodeGifts.setCascadeOpacityEnabled(true);
        this._nodeGifts.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeGifts, 0.5, 0.25);
        let _nodeGiftsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeGifts);
        _nodeGiftsLayoutComponent.setPositionPercentXEnabled(true);
        _nodeGiftsLayoutComponent.setPositionPercentX(0.5);

        ///// # _imgGiftsBgr
        this._imgGiftsBgr = new ccui.ImageView();
        this._imgGiftsBgr.setName("_imgGiftsBgr");
        this._nodeGifts.addChild(this._imgGiftsBgr);
        this._imgGiftsBgr.setCascadeOpacityEnabled(true);
        this._imgGiftsBgr.setCascadeColorEnabled(true);
        this._imgGiftsBgr.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgGiftsBgr.setOpacity(84);
        this._imgGiftsBgr.setColor(cc.color(2, 0, 0, 255));
        let _imgGiftsBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGiftsBgr);
        this._imgGiftsBgr.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgGiftsBgr.setUnifySizeEnabled(false);
        this._imgGiftsBgr.ignoreContentAdaptWithSize(false);
        this._imgGiftsBgr.setScale9Enabled(true);
        this._imgGiftsBgr.setCapInsets(cc.rect(21, 21, 22, 22));
        this._imgGiftsBgr.setContentSize(cc.size(421.4366, 180.7141));
        this._imgGiftsBgr.setTouchEnabled(false);

        ///// # _gridViewGifts
        this._gridViewGifts = new ck.GridViewVertical();
        this._gridViewGifts.setName("_gridViewGifts");
        this._nodeGifts.addChild(this._gridViewGifts);
        this._gridViewGifts.setCascadeOpacityEnabled(true);
        this._gridViewGifts.setCascadeColorEnabled(true);
        this._gridViewGifts.setAnchorPoint(cc.p(0.5, 0.5));
        let _gridViewGiftsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewGifts);

        ///// # _layoutContact
        this._layoutContact = new ccui.Layout();
        this._layoutContact.setName("_layoutContact");
        this._root.addChild(this._layoutContact);
        this._layoutContact.setCascadeOpacityEnabled(true);
        this._layoutContact.setCascadeColorEnabled(true);
        this._layoutContact.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutContact, 0.5, 0.25);
        let _layoutContactLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutContact);
        _layoutContactLayoutComponent.setPositionPercentXEnabled(true);
        _layoutContactLayoutComponent.setPositionPercentX(0.5);
        this._layoutContact.setTouchEnabled(false);
        this._layoutContact.setUnifySizeEnabled(false);
        this._layoutContact.ignoreContentAdaptWithSize(false);
        this._layoutContact.setContentSize(cc.size(421.44, 180.71));

        ///// # _imgContact
        this._imgContact = new ccui.ImageView();
        this._imgContact.setName("_imgContact");
        this._layoutContact.addChild(this._imgContact);
        this._imgContact.setCascadeOpacityEnabled(true);
        this._imgContact.setCascadeColorEnabled(true);
        this._imgContact.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgContact, 0.5, 0.6917);
        let _imgContactLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgContact);
        _imgContactLayoutComponent.setPositionPercentXEnabled(true);
        _imgContactLayoutComponent.setPositionPercentX(0.5);
        this._imgContact.loadTexture("buttons/rectangles/Blue.png", 1);
        this._imgContact.setUnifySizeEnabled(false);
        this._imgContact.ignoreContentAdaptWithSize(false);
        this._imgContact.setContentSize(cc.size(180, 70));
        this._imgContact.setTouchEnabled(true);

        ///// # _txtContact
        this._txtContact = new ck.Text();
        this._txtContact.setName("_txtContact");
        this._imgContact.addChild(this._txtContact);
        this._txtContact.setCascadeOpacityEnabled(true);
        this._txtContact.setCascadeColorEnabled(true);
        this._txtContact.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtContact, 0.6222, 0.55);
        let _txtContactLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtContact);
        _txtContactLayoutComponent.setPositionPercentXEnabled(true);
        _txtContactLayoutComponent.setPositionPercentX(0.6222);
        _txtContactLayoutComponent.setPositionPercentYEnabled(true);
        _txtContactLayoutComponent.setPositionPercentY(0.55);
        this._txtContact.setTouchEnabled(false);
        this._txtContact.setUnifySizeEnabled(false);
        this._txtContact.ignoreContentAdaptWithSize(false);
        this._txtContact.setContentSize(cc.size(113, 49));
        this._txtContact.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtContact.setDefaultFontSize(35);
        this._txtContact.setString("FACEBOOK");
        this._txtContact.setTextHorizontalAlignment(1);
        this._txtContact.setTextVerticalAlignment(1);
        this._txtContact.enableOutline(cc.color(41, 59, 96, 255), 2);

        ///// # _imgIconContact
        this._imgIconContact = new ccui.ImageView();
        this._imgIconContact.setName("_imgIconContact");
        this._imgContact.addChild(this._imgIconContact);
        this._imgIconContact.setCascadeOpacityEnabled(true);
        this._imgIconContact.setCascadeColorEnabled(true);
        this._imgIconContact.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconContact, 0.175, 0.55);
        let _imgIconContactLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconContact);
        _imgIconContactLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconContactLayoutComponent.setPositionPercentX(0.175);
        _imgIconContactLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconContactLayoutComponent.setPositionPercentY(0.55);
        this._imgIconContact.loadTexture("icons/color/socials/Facebook.png", 1);
        this._imgIconContact.setUnifySizeEnabled(false);
        this._imgIconContact.ignoreContentAdaptWithSize(false);
        this._imgIconContact.setContentSize(cc.size(32, 32));
        this._imgIconContact.setTouchEnabled(false);

        ///// # _txtID
        this._txtID = new ck.Text();
        this._txtID.setName("_txtID");
        this._layoutContact.addChild(this._txtID);
        this._txtID.setCascadeOpacityEnabled(true);
        this._txtID.setCascadeColorEnabled(true);
        this._txtID.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtID, 0.3654, 0.2767);
        this._txtID.setTextColor(cc.color(135, 110, 80, 255));
        let _txtIDLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtID);
        _txtIDLayoutComponent.setPercentWidthEnabled(true);
        _txtIDLayoutComponent.setPercentWidth(0.363);
        _txtIDLayoutComponent.setPercentHeightEnabled(true);
        _txtIDLayoutComponent.setPercentHeight(0.2158);
        this._txtID.setTouchEnabled(false);
        this._txtID.ignoreContentAdaptWithSize(true);
        this._txtID.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtID.setDefaultFontSize(35);
        this._txtID.setTextHorizontalAlignment(1);
        this._txtID.setTextVerticalAlignment(1);

        ///// # _imgCopy
        this._imgCopy = new ccui.ImageView();
        this._imgCopy.setName("_imgCopy");
        this._layoutContact.addChild(this._imgCopy);
        this._imgCopy.setCascadeOpacityEnabled(true);
        this._imgCopy.setCascadeColorEnabled(true);
        this._imgCopy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCopy, 0.6999, 0.2767);
        let _imgCopyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCopy);
        this._imgCopy.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgCopy.setUnifySizeEnabled(false);
        this._imgCopy.ignoreContentAdaptWithSize(false);
        this._imgCopy.setContentSize(cc.size(97.613, 42.9506));
        this._imgCopy.setTouchEnabled(true);

        ///// # _txtCopy
        this._txtCopy = new ck.Text();
        this._txtCopy.setName("_txtCopy");
        this._imgCopy.addChild(this._txtCopy);
        this._txtCopy.setCascadeOpacityEnabled(true);
        this._txtCopy.setCascadeColorEnabled(true);
        this._txtCopy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCopy, 0.5, 0.5267);
        this._txtCopy.setTextColor(cc.color(120, 58, 0, 255));
        let _txtCopyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCopy);
        _txtCopyLayoutComponent.setPositionPercentXEnabled(true);
        _txtCopyLayoutComponent.setPositionPercentX(0.5);
        _txtCopyLayoutComponent.setPositionPercentYEnabled(true);
        _txtCopyLayoutComponent.setPositionPercentY(0.5267);
        this._txtCopy.setTouchEnabled(false);
        this._txtCopy.ignoreContentAdaptWithSize(true);
        this._txtCopy.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCopy.setDefaultFontSize(25);
        this._txtCopy.setString(gm.localize.getText("TXT_COPY"));
        this._txtCopy.setTextHorizontalAlignment(1);
        this._txtCopy.setTextVerticalAlignment(1);
        this._txtCopy.enableShadow(cc.color(255, 208, 164, 255), cc.size(0, -2), 0);

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
        this._imgClose.setTouchEnabled(false);

    },



});

/**
 * Create RefundBanPopup
 * @returns {_ccs.RefundBanPopup}
 */
_ccs.RefundBanPopup.create = function () {
    return new _ccs.RefundBanPopup();
};
