/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.EventCollectorSpecialRewardPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.EventCollectorSpecialRewardPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {ccui.ImageView} */
    _imgDecor01: null,
    /** @type {ccui.ImageView} */
    _imgDecor02: null,
    /** @type {ccui.ImageView} */
    _imgFont: null,
    /** @type {ccui.ImageView} */
    _imgTitle: null,
    /** @type {ck.Text} */
    _txtMessage: null,
    /** @type {ccui.ImageView} */
    _imgRewardBgr: null,
    /** @type {ccui.ImageView} */
    _imgReward: null,
    /** @type {ccui.ImageView} */
    _buttonOk: null,
    /** @type {ck.Text} */
    _txtOK: null,


    /**
     * _ccs.EventCollectorSpecialRewardPopup constructor
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
        this._root.setPosition(0.0028, 0);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(560.8076, 596.3083));
        this._root.setBackGroundColorType(1);
        this._root.setBackGroundColor(cc.color(150, 200, 255, 255));
        this._root.setBackGroundColorOpacity(102);

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

        ///// # _imgDecor01
        this._imgDecor01 = new ccui.ImageView();
        this._imgDecor01.setName("_imgDecor01");
        this._root.addChild(this._imgDecor01);
        this._imgDecor01.setCascadeOpacityEnabled(true);
        this._imgDecor01.setCascadeColorEnabled(true);
        this._imgDecor01.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgDecor01, 0.5217, 0.8893);
        let _imgDecor01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDecor01);
        _imgDecor01LayoutComponent.setPositionPercentXEnabled(true);
        _imgDecor01LayoutComponent.setPositionPercentX(0.5217);
        _imgDecor01LayoutComponent.setPositionPercentYEnabled(true);
        _imgDecor01LayoutComponent.setPositionPercentY(0.8893);
        this._imgDecor01.loadTexture("event-collector/congraz/Decor_01.png", 1);
        this._imgDecor01.setUnifySizeEnabled(false);
        this._imgDecor01.ignoreContentAdaptWithSize(false);
        this._imgDecor01.setScale9Enabled(true);
        this._imgDecor01.setCapInsets(cc.rect(69, 17, 348, 56));
        this._imgDecor01.setContentSize(cc.size(486, 89.99));
        this._imgDecor01.setTouchEnabled(false);

        ///// # _imgDecor02
        this._imgDecor02 = new ccui.ImageView();
        this._imgDecor02.setName("_imgDecor02");
        this._root.addChild(this._imgDecor02);
        this._imgDecor02.setCascadeOpacityEnabled(true);
        this._imgDecor02.setCascadeColorEnabled(true);
        this._imgDecor02.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgDecor02, 0.4204, -0.0322);
        let _imgDecor02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDecor02);
        _imgDecor02LayoutComponent.setPositionPercentXEnabled(true);
        _imgDecor02LayoutComponent.setPositionPercentX(0.4204);
        _imgDecor02LayoutComponent.setPositionPercentYEnabled(true);
        _imgDecor02LayoutComponent.setPositionPercentY(-0.0322);
        this._imgDecor02.loadTexture("event-collector/congraz/Decor_02.png", 1);
        this._imgDecor02.setUnifySizeEnabled(false);
        this._imgDecor02.ignoreContentAdaptWithSize(false);
        this._imgDecor02.setScale9Enabled(true);
        this._imgDecor02.setCapInsets(cc.rect(69, 17, 383, 369));
        this._imgDecor02.setContentSize(cc.size(520.99, 402.97));
        this._imgDecor02.setTouchEnabled(false);

        ///// # _imgFont
        this._imgFont = new ccui.ImageView();
        this._imgFont.setName("_imgFont");
        this._root.addChild(this._imgFont);
        this._imgFont.setCascadeOpacityEnabled(true);
        this._imgFont.setCascadeColorEnabled(true);
        this._imgFont.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgFont, 0.5, 0.0339);
        let _imgFontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFont);
        _imgFontLayoutComponent.setPositionPercentXEnabled(true);
        _imgFontLayoutComponent.setPositionPercentX(0.5);
        _imgFontLayoutComponent.setPositionPercentYEnabled(true);
        _imgFontLayoutComponent.setPositionPercentY(0.0339);
        _imgFontLayoutComponent.setPercentWidthEnabled(true);
        _imgFontLayoutComponent.setPercentWidth(0.9476);
        _imgFontLayoutComponent.setPercentHeightEnabled(true);
        _imgFontLayoutComponent.setPercentHeight(0.8821);
        this._imgFont.loadTexture("event-collector/congraz/Info_Box.png", 1);
        this._imgFont.setUnifySizeEnabled(false);
        this._imgFont.ignoreContentAdaptWithSize(false);
        this._imgFont.setScale9Enabled(true);
        this._imgFont.setCapInsets(cc.rect(69, 17, 184, 18));
        ck.UIUtils.setSizePercent(this._imgFont, 0.9476, 0.8821);
        this._imgFont.setTouchEnabled(false);

        ///// # _imgTitle
        this._imgTitle = new ccui.ImageView();
        this._imgTitle.setName("_imgTitle");
        this._root.addChild(this._imgTitle);
        this._imgTitle.setCascadeOpacityEnabled(true);
        this._imgTitle.setCascadeColorEnabled(true);
        this._imgTitle.setAnchorPoint(cc.p(0, 0.4665));
        ck.UIUtils.setPositionPercent(this._imgTitle, 0.0296, 0.9454);
        let _imgTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTitle);
        _imgTitleLayoutComponent.setPositionPercentXEnabled(true);
        _imgTitleLayoutComponent.setPositionPercentX(0.0296);
        _imgTitleLayoutComponent.setPositionPercentYEnabled(true);
        _imgTitleLayoutComponent.setPositionPercentY(0.9454);
        this._imgTitle.loadTexture("texts/events/event-collector/Congraz.png", 1);
        this._imgTitle.setTouchEnabled(false);

        ///// # _txtMessage
        this._txtMessage = new ck.Text();
        this._txtMessage.setName("_txtMessage");
        this._root.addChild(this._txtMessage);
        this._txtMessage.setCascadeOpacityEnabled(true);
        this._txtMessage.setCascadeColorEnabled(true);
        this._txtMessage.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtMessage, 0.0654, 0.8586);
        this._txtMessage.setTextColor(cc.color(41, 89, 134, 255));
        let _txtMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMessage);
        _txtMessageLayoutComponent.setPositionPercentXEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentX(0.0654);
        _txtMessageLayoutComponent.setPositionPercentYEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentY(0.8586);
        this._txtMessage.setTouchEnabled(false);
        this._txtMessage.setUnifySizeEnabled(false);
        this._txtMessage.ignoreContentAdaptWithSize(false);
        this._txtMessage.setContentSize(cc.size(229.4687, 307.7242));
        this._txtMessage.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMessage.setDefaultFontSize(27);
        this._txtMessage.setString(gm.localize.getText("TXT_EVENT_COLLECTOR_CONGRAZ_MESSAGE"));
        this._txtMessage.setTextHorizontalAlignment(0);
        this._txtMessage.setTextVerticalAlignment(0);

        ///// # _imgRewardBgr
        this._imgRewardBgr = new ccui.ImageView();
        this._imgRewardBgr.setName("_imgRewardBgr");
        this._root.addChild(this._imgRewardBgr);
        this._imgRewardBgr.setCascadeOpacityEnabled(true);
        this._imgRewardBgr.setCascadeColorEnabled(true);
        this._imgRewardBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRewardBgr, 0.7263, 0.623);
        let _imgRewardBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRewardBgr);
        _imgRewardBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgRewardBgrLayoutComponent.setPositionPercentX(0.7263);
        _imgRewardBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgRewardBgrLayoutComponent.setPositionPercentY(0.623);
        this._imgRewardBgr.loadTexture("event-collector/congraz/Prize_Board_01.png", 1);
        this._imgRewardBgr.setUnifySizeEnabled(false);
        this._imgRewardBgr.ignoreContentAdaptWithSize(false);
        this._imgRewardBgr.setContentSize(cc.size(265.99, 384.99));
        this._imgRewardBgr.setTouchEnabled(false);

        ///// # _imgReward
        this._imgReward = new ccui.ImageView();
        this._imgReward.setName("_imgReward");
        this._imgRewardBgr.addChild(this._imgReward);
        this._imgReward.setCascadeOpacityEnabled(true);
        this._imgReward.setCascadeColorEnabled(true);
        this._imgReward.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgReward, 0.5064, 0.5247);
        let _imgRewardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgReward);
        _imgRewardLayoutComponent.setPositionPercentXEnabled(true);
        _imgRewardLayoutComponent.setPositionPercentX(0.5064);
        _imgRewardLayoutComponent.setPositionPercentYEnabled(true);
        _imgRewardLayoutComponent.setPositionPercentY(0.5247);
        _imgRewardLayoutComponent.setPercentWidthEnabled(true);
        _imgRewardLayoutComponent.setPercentWidth(0.6992);
        _imgRewardLayoutComponent.setPercentHeightEnabled(true);
        _imgRewardLayoutComponent.setPercentHeight(0.6701);
        this._imgReward.loadTexture("event-collector/congraz/Phone.png", 1);
        this._imgReward.setUnifySizeEnabled(false);
        this._imgReward.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgReward, 0.6992, 0.6701);
        this._imgReward.setTouchEnabled(false);

        ///// # _buttonOk
        this._buttonOk = new ccui.ImageView();
        this._buttonOk.setName("_buttonOk");
        this._root.addChild(this._buttonOk);
        this._buttonOk.setCascadeOpacityEnabled(true);
        this._buttonOk.setCascadeColorEnabled(true);
        this._buttonOk.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._buttonOk, 0.5, 0.1523);
        let _buttonOkLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._buttonOk);
        _buttonOkLayoutComponent.setPositionPercentXEnabled(true);
        _buttonOkLayoutComponent.setPositionPercentX(0.5);
        _buttonOkLayoutComponent.setPositionPercentYEnabled(true);
        _buttonOkLayoutComponent.setPositionPercentY(0.1523);
        this._buttonOk.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._buttonOk.setUnifySizeEnabled(false);
        this._buttonOk.ignoreContentAdaptWithSize(false);
        this._buttonOk.setContentSize(cc.size(205.99, 81.0026));
        this._buttonOk.setTouchEnabled(true);

        ///// # _txtOK
        this._txtOK = new ck.Text();
        this._txtOK.setName("_txtOK");
        this._buttonOk.addChild(this._txtOK);
        this._txtOK.setCascadeOpacityEnabled(true);
        this._txtOK.setCascadeColorEnabled(true);
        this._txtOK.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtOK, 0.5, 0.55);
        let _txtOKLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtOK);
        _txtOKLayoutComponent.setPositionPercentXEnabled(true);
        _txtOKLayoutComponent.setPositionPercentX(0.5);
        _txtOKLayoutComponent.setPositionPercentYEnabled(true);
        _txtOKLayoutComponent.setPositionPercentY(0.55);
        this._txtOK.setTouchEnabled(false);
        this._txtOK.ignoreContentAdaptWithSize(true);
        this._txtOK.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtOK.setDefaultFontSize(40);
        this._txtOK.setString(gm.localize.getText("TXT_OK"));
        this._txtOK.setTextHorizontalAlignment(1);
        this._txtOK.setTextVerticalAlignment(1);
        this._txtOK.enableOutline(cc.color(158, 82, 9, 255), 2);

    },



});

/**
 * Create EventCollectorSpecialRewardPopup
 * @returns {_ccs.EventCollectorSpecialRewardPopup}
 */
_ccs.EventCollectorSpecialRewardPopup.create = function () {
    return new _ccs.EventCollectorSpecialRewardPopup();
};
