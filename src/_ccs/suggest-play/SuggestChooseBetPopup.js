/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.SuggestChooseBetPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.SuggestChooseBetPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ccui.ImageView} */
    _imgBgrDup: null,
    /** @type {AsyncButton} */
    _btnAccept: null,
    /** @type {ccui.ImageView} */
    _imgButtonAccept: null,
    /** @type {ck.Text} */
    _txtButtonAccept: null,
    /** @type {ccui.ImageView} */
    _imgLoadingButtonAccept: null,
    /** @type {AsyncButton} */
    _btnDecline: null,
    /** @type {ccui.ImageView} */
    _imgButtonDecline: null,
    /** @type {ck.Text} */
    _txtButtonDecline: null,
    /** @type {ccui.ImageView} */
    _imgLoadingButtonDecline: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtWaiting: null,


    /**
     * _ccs.SuggestChooseBetPopup constructor
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
        this._layoutPopup.setContentSize(cc.size(400, 250));

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._layoutPopup.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr, 0.5, 0.5031);
        this._imgBgr.setColor(cc.color(26, 26, 26, 255));
        let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
        _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentY(0.5031);
        _imgBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrLayoutComponent.setPercentWidth(1);
        _imgBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrLayoutComponent.setPercentHeight(1);
        this._imgBgr.loadTexture("basics/other/Box_17.png", 1);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setScale9Enabled(true);
        this._imgBgr.setCapInsets(cc.rect(16, 14, 1, 1));
        ck.UIUtils.setSizePercent(this._imgBgr, 1, 1);
        this._imgBgr.setTouchEnabled(false);

        ///// # _imgBgrDup
        this._imgBgrDup = new ccui.ImageView();
        this._imgBgrDup.setName("_imgBgrDup");
        this._layoutPopup.addChild(this._imgBgrDup);
        this._imgBgrDup.setCascadeOpacityEnabled(true);
        this._imgBgrDup.setCascadeColorEnabled(true);
        this._imgBgrDup.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgrDup, 0.5, 0.5);
        this._imgBgrDup.setColor(cc.color(26, 26, 26, 255));
        let _imgBgrDupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrDup);
        _imgBgrDupLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrDupLayoutComponent.setPositionPercentX(0.5);
        _imgBgrDupLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrDupLayoutComponent.setPositionPercentY(0.5);
        _imgBgrDupLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrDupLayoutComponent.setPercentWidth(1);
        _imgBgrDupLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrDupLayoutComponent.setPercentHeight(1);
        this._imgBgrDup.loadTexture("basics/other/Box_17.png", 1);
        this._imgBgrDup.setUnifySizeEnabled(false);
        this._imgBgrDup.ignoreContentAdaptWithSize(false);
        this._imgBgrDup.setScale9Enabled(true);
        this._imgBgrDup.setCapInsets(cc.rect(16, 14, 1, 1));
        ck.UIUtils.setSizePercent(this._imgBgrDup, 1, 1);
        this._imgBgrDup.setTouchEnabled(false);

        ///// # _btnAccept
        this._btnAccept = new AsyncButton();
        this._btnAccept.setName("_btnAccept");
        this._layoutPopup.addChild(this._btnAccept);
        this._btnAccept.setCascadeOpacityEnabled(true);
        this._btnAccept.setCascadeColorEnabled(true);
        this._btnAccept.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAccept, 0.73, 0.2084);
        let _btnAcceptLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAccept);
        _btnAcceptLayoutComponent.setPositionPercentXEnabled(true);
        _btnAcceptLayoutComponent.setPositionPercentX(0.73);
        _btnAcceptLayoutComponent.setPositionPercentYEnabled(true);
        _btnAcceptLayoutComponent.setPositionPercentY(0.2084);
        this._btnAccept.setUnifySizeEnabled(false);
        this._btnAccept.ignoreContentAdaptWithSize(false);
        this._btnAccept.setContentSize(cc.size(160, 55));
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

        ///// # _txtButtonAccept
        this._txtButtonAccept = new ck.Text();
        this._txtButtonAccept.setName("_txtButtonAccept");
        this._btnAccept.addChild(this._txtButtonAccept);
        this._txtButtonAccept.setCascadeOpacityEnabled(true);
        this._txtButtonAccept.setCascadeColorEnabled(true);
        this._txtButtonAccept.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonAccept, 0.5, 0.53);
        let _txtButtonAcceptLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonAccept);
        _txtButtonAcceptLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonAcceptLayoutComponent.setPositionPercentX(0.5);
        _txtButtonAcceptLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonAcceptLayoutComponent.setPositionPercentY(0.53);
        _txtButtonAcceptLayoutComponent.setPercentWidthEnabled(true);
        _txtButtonAcceptLayoutComponent.setPercentWidth(0.9);
        this._txtButtonAccept.setTouchEnabled(false);
        this._txtButtonAccept.setUnifySizeEnabled(false);
        this._txtButtonAccept.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtButtonAccept, 0.9);
        this._txtButtonAccept.setContentSize(cc.size(this._txtButtonAccept.width, 43));
        this._txtButtonAccept.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonAccept.setDefaultFontSize(30);
        this._txtButtonAccept.setString(gm.localize.getText("TXT_ACCEPT").toUpperCase());
        this._txtButtonAccept.setTextHorizontalAlignment(1);
        this._txtButtonAccept.setTextVerticalAlignment(1);
        this._txtButtonAccept.enableOutline(cc.color(11, 102, 57, 255), 1);
        this._txtButtonAccept.autoFitSingleLine();

        ///// # _imgLoadingButtonAccept
        this._imgLoadingButtonAccept = new ccui.ImageView();
        this._imgLoadingButtonAccept.setName("_imgLoadingButtonAccept");
        this._btnAccept.addChild(this._imgLoadingButtonAccept);
        this._imgLoadingButtonAccept.setCascadeOpacityEnabled(true);
        this._imgLoadingButtonAccept.setCascadeColorEnabled(true);
        this._imgLoadingButtonAccept.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLoadingButtonAccept, 0.5, 0.54);
        this._imgLoadingButtonAccept.setVisible(false);
        let _imgLoadingButtonAcceptLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoadingButtonAccept);
        _imgLoadingButtonAcceptLayoutComponent.setPositionPercentXEnabled(true);
        _imgLoadingButtonAcceptLayoutComponent.setPositionPercentX(0.5);
        _imgLoadingButtonAcceptLayoutComponent.setPositionPercentYEnabled(true);
        _imgLoadingButtonAcceptLayoutComponent.setPositionPercentY(0.54);
        this._imgLoadingButtonAccept.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgLoadingButtonAccept.setUnifySizeEnabled(false);
        this._imgLoadingButtonAccept.ignoreContentAdaptWithSize(false);
        this._imgLoadingButtonAccept.setContentSize(cc.size(50, 50));
        this._imgLoadingButtonAccept.setTouchEnabled(false);

        ///// # _btnDecline
        this._btnDecline = new AsyncButton();
        this._btnDecline.setName("_btnDecline");
        this._layoutPopup.addChild(this._btnDecline);
        this._btnDecline.setCascadeOpacityEnabled(true);
        this._btnDecline.setCascadeColorEnabled(true);
        this._btnDecline.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnDecline, 0.27, 0.2084);
        let _btnDeclineLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnDecline);
        _btnDeclineLayoutComponent.setPositionPercentXEnabled(true);
        _btnDeclineLayoutComponent.setPositionPercentX(0.27);
        _btnDeclineLayoutComponent.setPositionPercentYEnabled(true);
        _btnDeclineLayoutComponent.setPositionPercentY(0.2084);
        this._btnDecline.setUnifySizeEnabled(false);
        this._btnDecline.ignoreContentAdaptWithSize(false);
        this._btnDecline.setContentSize(cc.size(160, 55));
        this._btnDecline.setTouchEnabled(true);

        ///// # _imgButtonDecline
        this._imgButtonDecline = new ccui.ImageView();
        this._imgButtonDecline.setName("_imgButtonDecline");
        this._btnDecline.addChild(this._imgButtonDecline);
        this._imgButtonDecline.setCascadeOpacityEnabled(true);
        this._imgButtonDecline.setCascadeColorEnabled(true);
        this._imgButtonDecline.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonDecline, 0.5, 0.5);
        let _imgButtonDeclineLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonDecline);
        _imgButtonDeclineLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonDeclineLayoutComponent.setPositionPercentX(0.5);
        _imgButtonDeclineLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonDeclineLayoutComponent.setPositionPercentY(0.5);
        _imgButtonDeclineLayoutComponent.setPercentWidthEnabled(true);
        _imgButtonDeclineLayoutComponent.setPercentWidth(1);
        _imgButtonDeclineLayoutComponent.setPercentHeightEnabled(true);
        _imgButtonDeclineLayoutComponent.setPercentHeight(1);
        this._imgButtonDecline.loadTexture("buttons/rectangles/Red.png", 1);
        this._imgButtonDecline.setUnifySizeEnabled(false);
        this._imgButtonDecline.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonDecline, 1, 1);
        this._imgButtonDecline.setTouchEnabled(false);

        ///// # _txtButtonDecline
        this._txtButtonDecline = new ck.Text();
        this._txtButtonDecline.setName("_txtButtonDecline");
        this._btnDecline.addChild(this._txtButtonDecline);
        this._txtButtonDecline.setCascadeOpacityEnabled(true);
        this._txtButtonDecline.setCascadeColorEnabled(true);
        this._txtButtonDecline.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonDecline, 0.5, 0.53);
        let _txtButtonDeclineLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonDecline);
        _txtButtonDeclineLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonDeclineLayoutComponent.setPositionPercentX(0.5);
        _txtButtonDeclineLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonDeclineLayoutComponent.setPositionPercentY(0.53);
        _txtButtonDeclineLayoutComponent.setPercentWidthEnabled(true);
        _txtButtonDeclineLayoutComponent.setPercentWidth(0.9);
        this._txtButtonDecline.setTouchEnabled(false);
        this._txtButtonDecline.setUnifySizeEnabled(false);
        this._txtButtonDecline.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtButtonDecline, 0.9);
        this._txtButtonDecline.setContentSize(cc.size(this._txtButtonDecline.width, 43));
        this._txtButtonDecline.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonDecline.setDefaultFontSize(30);
        this._txtButtonDecline.setString(gm.localize.getText("TXT_DECLINE").toUpperCase());
        this._txtButtonDecline.setTextHorizontalAlignment(1);
        this._txtButtonDecline.setTextVerticalAlignment(1);
        this._txtButtonDecline.enableOutline(cc.color(164, 49, 41, 255), 1);
        this._txtButtonDecline.autoFitSingleLine();

        ///// # _imgLoadingButtonDecline
        this._imgLoadingButtonDecline = new ccui.ImageView();
        this._imgLoadingButtonDecline.setName("_imgLoadingButtonDecline");
        this._btnDecline.addChild(this._imgLoadingButtonDecline);
        this._imgLoadingButtonDecline.setCascadeOpacityEnabled(true);
        this._imgLoadingButtonDecline.setCascadeColorEnabled(true);
        this._imgLoadingButtonDecline.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLoadingButtonDecline, 0.5, 0.54);
        this._imgLoadingButtonDecline.setVisible(false);
        let _imgLoadingButtonDeclineLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoadingButtonDecline);
        _imgLoadingButtonDeclineLayoutComponent.setPositionPercentXEnabled(true);
        _imgLoadingButtonDeclineLayoutComponent.setPositionPercentX(0.5);
        _imgLoadingButtonDeclineLayoutComponent.setPositionPercentYEnabled(true);
        _imgLoadingButtonDeclineLayoutComponent.setPositionPercentY(0.54);
        this._imgLoadingButtonDecline.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgLoadingButtonDecline.setUnifySizeEnabled(false);
        this._imgLoadingButtonDecline.ignoreContentAdaptWithSize(false);
        this._imgLoadingButtonDecline.setContentSize(cc.size(50, 50));
        this._imgLoadingButtonDecline.setTouchEnabled(false);

        ///// # _txtWaiting
        this._txtWaiting = new ck.CustomRichTextExtend(cc.size(365.0901, 158.226));
        this._txtWaiting.setName("_txtWaiting");
        this._layoutPopup.addChild(this._txtWaiting);
        this._txtWaiting.setCascadeOpacityEnabled(true);
        this._txtWaiting.setCascadeColorEnabled(true);
        this._txtWaiting.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtWaiting, 0.5, 0.6712);
        this._txtWaiting.setDefaultColor(cc.color(169, 255, 219, 255));
        let _txtWaitingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtWaiting);
        _txtWaitingLayoutComponent.setPositionPercentXEnabled(true);
        _txtWaitingLayoutComponent.setPositionPercentX(0.5);
        _txtWaitingLayoutComponent.setPositionPercentYEnabled(true);
        _txtWaitingLayoutComponent.setPositionPercentY(0.6712);
        this._txtWaiting.setTouchEnabled(false);
        this._txtWaiting.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtWaiting.setDefaultSize(33);
        this._txtWaiting.setDefaultAlignHorizontal(2);
        this._txtWaiting.setDefaultAlignVertical(5);
        this._txtWaiting.setString(gm.localize.getText("TXT_WAITING_JOIN_SUGGESTION_ROOM").toUpperCase());

    },


    playCCSAnimSuggestion: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimSuggestion();
    },

    resetCCSAnimSuggestion: function () {
    
    },

    playCCSAnimWaitingJoin: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimWaitingJoin();
    },

    resetCCSAnimWaitingJoin: function () {
    
    },

    playCCSAnimJoinFailed: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimJoinFailed();
    },

    resetCCSAnimJoinFailed: function () {
    
    }
});

/**
 * Create SuggestChooseBetPopup
 * @returns {_ccs.SuggestChooseBetPopup}
 */
_ccs.SuggestChooseBetPopup.create = function () {
    return new _ccs.SuggestChooseBetPopup();
};
