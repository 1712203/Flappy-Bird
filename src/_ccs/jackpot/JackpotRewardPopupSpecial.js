/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.JackpotRewardPopupSpecial
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.JackpotRewardPopupSpecial = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.Layout} */
    _layoutReward: null,
    /** @type {ccui.ImageView} */
    _imgLight: null,
    /** @type {ccui.ImageView} */
    _imgRewardBgr: null,
    /** @type {ccui.Layout} */
    _layoutRewardAmount: null,
    /** @type {ccui.ImageView} */
    _imgRewardIcon: null,
    /** @type {ck.Text} */
    _txtRewardAmount: null,
    /** @type {ccui.Layout} */
    _layoutHeader: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ccui.ImageView} */
    _imgHeaderText: null,
    /** @type {ck.Text} */
    _txtMessage: null,
    /** @type {ccui.ImageView} */
    _imgLogo: null,
    /** @type {ccui.Layout} */
    _layoutClaim: null,
    /** @type {ccui.ImageView} */
    _imgClaim: null,
    /** @type {ck.Text} */
    _txtClaim: null,


    /**
     * _ccs.JackpotRewardPopupSpecial constructor
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
        this._layoutPopup.setPosition(0, -0.0001);
        let _layoutPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        this._layoutPopup.setTouchEnabled(false);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(640, 1136));

        ///// # _layoutReward
        this._layoutReward = new ccui.Layout();
        this._layoutReward.setName("_layoutReward");
        this._layoutPopup.addChild(this._layoutReward);
        this._layoutReward.setCascadeOpacityEnabled(true);
        this._layoutReward.setCascadeColorEnabled(true);
        this._layoutReward.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutReward, 0.5, 0.5);
        let _layoutRewardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutReward);
        _layoutRewardLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRewardLayoutComponent.setPositionPercentX(0.5);
        _layoutRewardLayoutComponent.setPositionPercentYEnabled(true);
        _layoutRewardLayoutComponent.setPositionPercentY(0.5);
        _layoutRewardLayoutComponent.setPercentWidthEnabled(true);
        _layoutRewardLayoutComponent.setPercentWidth(1);
        this._layoutReward.setTouchEnabled(true);
        this._layoutReward.setUnifySizeEnabled(false);
        this._layoutReward.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutReward, 1);
        this._layoutReward.setContentSize(cc.size(this._layoutReward.width, 200));

        ///// # _imgLight
        this._imgLight = new ccui.ImageView();
        this._imgLight.setName("_imgLight");
        this._layoutReward.addChild(this._imgLight);
        this._imgLight.setCascadeOpacityEnabled(true);
        this._imgLight.setCascadeColorEnabled(true);
        this._imgLight.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLight, 0.5, 0.5);
        this._imgLight.setScale(1.25, 1.25);
        let _imgLightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLight);
        _imgLightLayoutComponent.setPositionPercentXEnabled(true);
        _imgLightLayoutComponent.setPositionPercentX(0.5);
        _imgLightLayoutComponent.setPositionPercentYEnabled(true);
        _imgLightLayoutComponent.setPositionPercentY(0.5);
        this._imgLight.loadTexture("jackpot/other/LightRed.png", 1);
        this._imgLight.setUnifySizeEnabled(false);
        this._imgLight.ignoreContentAdaptWithSize(false);
        this._imgLight.setContentSize(cc.size(640, 493));
        this._imgLight.setTouchEnabled(false);

        ///// # _imgRewardBgr
        this._imgRewardBgr = new ccui.ImageView();
        this._imgRewardBgr.setName("_imgRewardBgr");
        this._layoutReward.addChild(this._imgRewardBgr);
        this._imgRewardBgr.setCascadeOpacityEnabled(true);
        this._imgRewardBgr.setCascadeColorEnabled(true);
        this._imgRewardBgr.setAnchorPoint(cc.p(0.5, 0.43));
        ck.UIUtils.setPositionPercent(this._imgRewardBgr, 0.5, 0.5);
        let _imgRewardBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRewardBgr);
        _imgRewardBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgRewardBgrLayoutComponent.setPositionPercentX(0.5);
        _imgRewardBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgRewardBgrLayoutComponent.setPositionPercentY(0.5);
        this._imgRewardBgr.loadTexture("jackpot/other/RewardBoard.png", 1);
        this._imgRewardBgr.setUnifySizeEnabled(false);
        this._imgRewardBgr.ignoreContentAdaptWithSize(false);
        this._imgRewardBgr.setContentSize(cc.size(628, 263));
        this._imgRewardBgr.setTouchEnabled(false);

        ///// # _layoutRewardAmount
        this._layoutRewardAmount = new ccui.Layout();
        this._layoutRewardAmount.setName("_layoutRewardAmount");
        this._layoutReward.addChild(this._layoutRewardAmount);
        this._layoutRewardAmount.setCascadeOpacityEnabled(true);
        this._layoutRewardAmount.setCascadeColorEnabled(true);
        this._layoutRewardAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutRewardAmount, 0.4672, 0.5);
        let _layoutRewardAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRewardAmount);
        _layoutRewardAmountLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRewardAmountLayoutComponent.setPositionPercentX(0.4672);
        _layoutRewardAmountLayoutComponent.setPositionPercentYEnabled(true);
        _layoutRewardAmountLayoutComponent.setPositionPercentY(0.5);
        this._layoutRewardAmount.setTouchEnabled(false);
        this._layoutRewardAmount.setUnifySizeEnabled(false);
        this._layoutRewardAmount.ignoreContentAdaptWithSize(false);
        this._layoutRewardAmount.setContentSize(cc.size(414.5575, 103.2388));

        ///// # _imgRewardIcon
        this._imgRewardIcon = new ccui.ImageView();
        this._imgRewardIcon.setName("_imgRewardIcon");
        this._layoutRewardAmount.addChild(this._imgRewardIcon);
        this._imgRewardIcon.setCascadeOpacityEnabled(true);
        this._imgRewardIcon.setCascadeColorEnabled(true);
        this._imgRewardIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRewardIcon, 0.1047, 0.5005);
        let _imgRewardIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRewardIcon);
        _imgRewardIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgRewardIconLayoutComponent.setPositionPercentX(0.1047);
        _imgRewardIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgRewardIconLayoutComponent.setPositionPercentY(0.5005);
        this._imgRewardIcon.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgRewardIcon.setUnifySizeEnabled(false);
        this._imgRewardIcon.ignoreContentAdaptWithSize(false);
        this._imgRewardIcon.setContentSize(cc.size(90, 90));
        this._imgRewardIcon.setTouchEnabled(false);

        ///// # _txtRewardAmount
        this._txtRewardAmount = new ck.Text();
        this._txtRewardAmount.setName("_txtRewardAmount");
        this._layoutRewardAmount.addChild(this._txtRewardAmount);
        this._txtRewardAmount.setCascadeOpacityEnabled(true);
        this._txtRewardAmount.setCascadeColorEnabled(true);
        this._txtRewardAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRewardAmount, 0.585, 0.5);
        this._txtRewardAmount.setTextColor(cc.color(249, 247, 11, 255));
        let _txtRewardAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRewardAmount);
        _txtRewardAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtRewardAmountLayoutComponent.setPositionPercentX(0.585);
        _txtRewardAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtRewardAmountLayoutComponent.setPositionPercentY(0.5);
        this._txtRewardAmount.setTouchEnabled(false);
        this._txtRewardAmount.ignoreContentAdaptWithSize(true);
        this._txtRewardAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtRewardAmount.setDefaultFontSize(58);
        this._txtRewardAmount.setTextHorizontalAlignment(1);
        this._txtRewardAmount.setTextVerticalAlignment(1);
        this._txtRewardAmount.enableShadow(cc.color(82, 53, 0, 255), cc.size(0, -2), 0);

        ///// # _layoutHeader
        this._layoutHeader = new ccui.Layout();
        this._layoutHeader.setName("_layoutHeader");
        this._layoutPopup.addChild(this._layoutHeader);
        this._layoutHeader.setCascadeOpacityEnabled(true);
        this._layoutHeader.setCascadeColorEnabled(true);
        this._layoutHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutHeader, 0.5, 0.8385);
        this._layoutHeader.setScale(1.25, 1.25);
        let _layoutHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHeader);
        _layoutHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _layoutHeaderLayoutComponent.setPositionPercentX(0.5);
        _layoutHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _layoutHeaderLayoutComponent.setPositionPercentY(0.8385);
        this._layoutHeader.setTouchEnabled(false);
        this._layoutHeader.setUnifySizeEnabled(false);
        this._layoutHeader.ignoreContentAdaptWithSize(false);
        this._layoutHeader.setContentSize(cc.size(510.4258, 150.4799));

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._layoutHeader.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 0.5);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(0.5);
        this._imgHeader.loadTexture("basics/popup/HeaderOrange.png", 1);
        this._imgHeader.setUnifySizeEnabled(false);
        this._imgHeader.ignoreContentAdaptWithSize(false);
        this._imgHeader.setContentSize(cc.size(521, 203));
        this._imgHeader.setTouchEnabled(false);

        ///// # _imgHeaderText
        this._imgHeaderText = new ccui.ImageView();
        this._imgHeaderText.setName("_imgHeaderText");
        this._layoutHeader.addChild(this._imgHeaderText);
        this._imgHeaderText.setCascadeOpacityEnabled(true);
        this._imgHeaderText.setCascadeColorEnabled(true);
        this._imgHeaderText.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeaderText, 0.5, 0.7013);
        let _imgHeaderTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeaderText);
        _imgHeaderTextLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderTextLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderTextLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderTextLayoutComponent.setPositionPercentY(0.7013);
        this._imgHeaderText.loadTexture("texts/jackpot/MegaWin.png", 1);
        this._imgHeaderText.setTouchEnabled(false);

        ///// # _txtMessage
        this._txtMessage = new ck.Text();
        this._txtMessage.setName("_txtMessage");
        this._layoutPopup.addChild(this._txtMessage);
        this._txtMessage.setCascadeOpacityEnabled(true);
        this._txtMessage.setCascadeColorEnabled(true);
        this._txtMessage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMessage, 0.5, 0.7973);
        let _txtMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMessage);
        _txtMessageLayoutComponent.setPositionPercentXEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentX(0.5);
        _txtMessageLayoutComponent.setPositionPercentYEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentY(0.7973);
        _txtMessageLayoutComponent.setPercentWidthEnabled(true);
        _txtMessageLayoutComponent.setPercentWidth(0.2094);
        _txtMessageLayoutComponent.setPercentHeightEnabled(true);
        _txtMessageLayoutComponent.setPercentHeight(0.0511);
        this._txtMessage.setTouchEnabled(false);
        this._txtMessage.ignoreContentAdaptWithSize(true);
        this._txtMessage.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMessage.setDefaultFontSize(50);
        this._txtMessage.setString(gm.localize.getText("TXT_YOU_WON"));
        this._txtMessage.setTextHorizontalAlignment(1);
        this._txtMessage.setTextVerticalAlignment(1);
        this._txtMessage.enableOutline(cc.color(213, 76, 9, 255), 1);

        ///// # _imgLogo
        this._imgLogo = new ccui.ImageView();
        this._imgLogo.setName("_imgLogo");
        this._layoutPopup.addChild(this._imgLogo);
        this._imgLogo.setCascadeOpacityEnabled(true);
        this._imgLogo.setCascadeColorEnabled(true);
        this._imgLogo.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLogo, 0.5, 0.7219);
        this._imgLogo.setScale(1.35, 1.35);
        let _imgLogoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLogo);
        _imgLogoLayoutComponent.setPositionPercentXEnabled(true);
        _imgLogoLayoutComponent.setPositionPercentX(0.5);
        _imgLogoLayoutComponent.setPositionPercentYEnabled(true);
        _imgLogoLayoutComponent.setPositionPercentY(0.7219);
        this._imgLogo.loadTexture("jackpot/other/Logo.png", 1);
        this._imgLogo.setUnifySizeEnabled(false);
        this._imgLogo.ignoreContentAdaptWithSize(false);
        this._imgLogo.setContentSize(cc.size(176, 57));
        this._imgLogo.setTouchEnabled(false);

        ///// # _layoutClaim
        this._layoutClaim = new ccui.Layout();
        this._layoutClaim.setName("_layoutClaim");
        this._layoutPopup.addChild(this._layoutClaim);
        this._layoutClaim.setCascadeOpacityEnabled(true);
        this._layoutClaim.setCascadeColorEnabled(true);
        this._layoutClaim.setAnchorPoint(cc.p(0.5026, 0.5236));
        ck.UIUtils.setPositionPercent(this._layoutClaim, 0.5, 0.155);
        let _layoutClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutClaim);
        _layoutClaimLayoutComponent.setPositionPercentXEnabled(true);
        _layoutClaimLayoutComponent.setPositionPercentX(0.5);
        _layoutClaimLayoutComponent.setPositionPercentYEnabled(true);
        _layoutClaimLayoutComponent.setPositionPercentY(0.155);
        this._layoutClaim.setTouchEnabled(true);
        this._layoutClaim.setUnifySizeEnabled(false);
        this._layoutClaim.ignoreContentAdaptWithSize(false);
        this._layoutClaim.setContentSize(cc.size(215.9867, 83.482));

        ///// # _imgClaim
        this._imgClaim = new ccui.ImageView();
        this._imgClaim.setName("_imgClaim");
        this._layoutClaim.addChild(this._imgClaim);
        this._imgClaim.setCascadeOpacityEnabled(true);
        this._imgClaim.setCascadeColorEnabled(true);
        this._imgClaim.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClaim, 0.5, 0.4763);
        let _imgClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClaim);
        _imgClaimLayoutComponent.setPositionPercentXEnabled(true);
        _imgClaimLayoutComponent.setPositionPercentX(0.5);
        _imgClaimLayoutComponent.setPositionPercentYEnabled(true);
        _imgClaimLayoutComponent.setPositionPercentY(0.4763);
        this._imgClaim.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgClaim.setUnifySizeEnabled(false);
        this._imgClaim.ignoreContentAdaptWithSize(false);
        this._imgClaim.setContentSize(cc.size(206, 81));
        this._imgClaim.setTouchEnabled(false);

        ///// # _txtClaim
        this._txtClaim = new ck.Text();
        this._txtClaim.setName("_txtClaim");
        this._layoutClaim.addChild(this._txtClaim);
        this._txtClaim.setCascadeOpacityEnabled(true);
        this._txtClaim.setCascadeColorEnabled(true);
        this._txtClaim.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtClaim, 0.5, 0.5);
        let _txtClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtClaim);
        _txtClaimLayoutComponent.setPositionPercentXEnabled(true);
        _txtClaimLayoutComponent.setPositionPercentX(0.5);
        _txtClaimLayoutComponent.setPositionPercentYEnabled(true);
        _txtClaimLayoutComponent.setPositionPercentY(0.5);
        this._txtClaim.setTouchEnabled(false);
        this._txtClaim.ignoreContentAdaptWithSize(true);
        this._txtClaim.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtClaim.setDefaultFontSize(50);
        this._txtClaim.setString(gm.localize.getText("TXT_CLAIM"));
        this._txtClaim.setTextHorizontalAlignment(1);
        this._txtClaim.setTextVerticalAlignment(1);
        this._txtClaim.enableOutline(cc.color(158, 82, 9, 255), 3);

    },



});

/**
 * Create JackpotRewardPopupSpecial
 * @returns {_ccs.JackpotRewardPopupSpecial}
 */
_ccs.JackpotRewardPopupSpecial.create = function () {
    return new _ccs.JackpotRewardPopupSpecial();
};
