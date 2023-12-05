/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.HappySharkAlertDialog
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.HappySharkAlertDialog = ccui.Widget.extend({

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
    _imgButtonPlayNow: null,
    /** @type {ck.Text} */
    _txtButtonPlayNow: null,
    /** @type {ccui.ImageView} */
    _imgButtonBuyMore: null,
    /** @type {ck.Text} */
    _txtButtonBuyMore: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,


    /**
     * _ccs.HappySharkAlertDialog constructor
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
        this._txtMessage.setString(gm.localize.getText("TXT_PLAY_OR_BUY_RESOURCE"));
        this._txtMessage.setTextHorizontalAlignment(1);
        this._txtMessage.setTextVerticalAlignment(1);

        ///// # _imgButtonPlayNow
        this._imgButtonPlayNow = new ccui.ImageView();
        this._imgButtonPlayNow.setName("_imgButtonPlayNow");
        this._root.addChild(this._imgButtonPlayNow);
        this._imgButtonPlayNow.setCascadeOpacityEnabled(true);
        this._imgButtonPlayNow.setCascadeColorEnabled(true);
        this._imgButtonPlayNow.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonPlayNow, 0.27, 0.1571);
        let _imgButtonPlayNowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonPlayNow);
        _imgButtonPlayNowLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonPlayNowLayoutComponent.setPositionPercentX(0.27);
        _imgButtonPlayNowLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonPlayNowLayoutComponent.setPositionPercentY(0.1571);
        this._imgButtonPlayNow.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgButtonPlayNow.setUnifySizeEnabled(false);
        this._imgButtonPlayNow.ignoreContentAdaptWithSize(false);
        this._imgButtonPlayNow.setContentSize(cc.size(206, 81));
        this._imgButtonPlayNow.setTouchEnabled(true);

        ///// # _txtButtonPlayNow
        this._txtButtonPlayNow = new ck.Text();
        this._txtButtonPlayNow.setName("_txtButtonPlayNow");
        this._imgButtonPlayNow.addChild(this._txtButtonPlayNow);
        this._txtButtonPlayNow.setCascadeOpacityEnabled(true);
        this._txtButtonPlayNow.setCascadeColorEnabled(true);
        this._txtButtonPlayNow.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonPlayNow, 0.5, 0.55);
        let _txtButtonPlayNowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonPlayNow);
        _txtButtonPlayNowLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonPlayNowLayoutComponent.setPositionPercentX(0.5);
        _txtButtonPlayNowLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonPlayNowLayoutComponent.setPositionPercentY(0.55);
        this._txtButtonPlayNow.setTouchEnabled(false);
        this._txtButtonPlayNow.setUnifySizeEnabled(false);
        this._txtButtonPlayNow.ignoreContentAdaptWithSize(false);
        this._txtButtonPlayNow.setContentSize(cc.size(175, 60));
        this._txtButtonPlayNow.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonPlayNow.setDefaultFontSize(40);
        this._txtButtonPlayNow.setString(gm.localize.getText("TXT_PLAY_NOW"));
        this._txtButtonPlayNow.setTextHorizontalAlignment(1);
        this._txtButtonPlayNow.setTextVerticalAlignment(1);
        this._txtButtonPlayNow.enableOutline(cc.color(0, 139, 87, 255), 2);
        this._txtButtonPlayNow.autoFitSingleLine();

        ///// # _imgButtonBuyMore
        this._imgButtonBuyMore = new ccui.ImageView();
        this._imgButtonBuyMore.setName("_imgButtonBuyMore");
        this._root.addChild(this._imgButtonBuyMore);
        this._imgButtonBuyMore.setCascadeOpacityEnabled(true);
        this._imgButtonBuyMore.setCascadeColorEnabled(true);
        this._imgButtonBuyMore.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonBuyMore, 0.73, 0.1571);
        let _imgButtonBuyMoreLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonBuyMore);
        _imgButtonBuyMoreLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonBuyMoreLayoutComponent.setPositionPercentX(0.73);
        _imgButtonBuyMoreLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonBuyMoreLayoutComponent.setPositionPercentY(0.1571);
        this._imgButtonBuyMore.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgButtonBuyMore.setUnifySizeEnabled(false);
        this._imgButtonBuyMore.ignoreContentAdaptWithSize(false);
        this._imgButtonBuyMore.setContentSize(cc.size(205.99, 81.0026));
        this._imgButtonBuyMore.setTouchEnabled(true);

        ///// # _txtButtonBuyMore
        this._txtButtonBuyMore = new ck.Text();
        this._txtButtonBuyMore.setName("_txtButtonBuyMore");
        this._imgButtonBuyMore.addChild(this._txtButtonBuyMore);
        this._txtButtonBuyMore.setCascadeOpacityEnabled(true);
        this._txtButtonBuyMore.setCascadeColorEnabled(true);
        this._txtButtonBuyMore.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonBuyMore, 0.5, 0.55);
        let _txtButtonBuyMoreLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonBuyMore);
        _txtButtonBuyMoreLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonBuyMoreLayoutComponent.setPositionPercentX(0.5);
        _txtButtonBuyMoreLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonBuyMoreLayoutComponent.setPositionPercentY(0.55);
        this._txtButtonBuyMore.setTouchEnabled(false);
        this._txtButtonBuyMore.setUnifySizeEnabled(false);
        this._txtButtonBuyMore.ignoreContentAdaptWithSize(false);
        this._txtButtonBuyMore.setContentSize(cc.size(175, 60));
        this._txtButtonBuyMore.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonBuyMore.setDefaultFontSize(40);
        this._txtButtonBuyMore.setString(gm.localize.getText("TXT_BUY_MORE"));
        this._txtButtonBuyMore.setTextHorizontalAlignment(1);
        this._txtButtonBuyMore.setTextVerticalAlignment(1);
        this._txtButtonBuyMore.enableOutline(cc.color(158, 82, 9, 255), 2);
        this._txtButtonBuyMore.autoFitSingleLine();

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

    },



});

/**
 * Create HappySharkAlertDialog
 * @returns {_ccs.HappySharkAlertDialog}
 */
_ccs.HappySharkAlertDialog.create = function () {
    return new _ccs.HappySharkAlertDialog();
};
