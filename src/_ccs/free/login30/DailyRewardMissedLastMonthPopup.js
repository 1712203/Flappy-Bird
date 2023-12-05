/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.DailyRewardMissedLastMonthPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.DailyRewardMissedLastMonthPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {ccui.ImageView} */
    _imgFont: null,
    /** @type {ck.Text} */
    _txtMessage: null,
    /** @type {_ccs.EmoCry} */
    _emoCry: null,
    /** @type {ck.Text} */
    _txtMessage2: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,


    /**
     * _ccs.DailyRewardMissedLastMonthPopup constructor
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

        ///// # _txtMessage
        this._txtMessage = new ck.Text();
        this._txtMessage.setName("_txtMessage");
        this._root.addChild(this._txtMessage);
        this._txtMessage.setCascadeOpacityEnabled(true);
        this._txtMessage.setCascadeColorEnabled(true);
        this._txtMessage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMessage, 0.5, 0.8);
        this._txtMessage.setTextColor(cc.color(87, 60, 38, 255));
        let _txtMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMessage);
        _txtMessageLayoutComponent.setPositionPercentXEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentX(0.5);
        _txtMessageLayoutComponent.setPositionPercentYEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentY(0.8);
        _txtMessageLayoutComponent.setPercentWidthEnabled(true);
        _txtMessageLayoutComponent.setPercentWidth(0.8);
        _txtMessageLayoutComponent.setPercentHeightEnabled(true);
        _txtMessageLayoutComponent.setPercentHeight(0.18);
        this._txtMessage.setTouchEnabled(false);
        this._txtMessage.setUnifySizeEnabled(false);
        this._txtMessage.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtMessage, 0.8, 0.18);
        this._txtMessage.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMessage.setDefaultFontSize(40);
        this._txtMessage.setString(gm.localize.getText("TXT_LOGIN30_MISSED_LAST_MONTH_1"));
        this._txtMessage.setTextHorizontalAlignment(1);
        this._txtMessage.setTextVerticalAlignment(1);
        this._txtMessage.autoFitMultipleLine();

        ///// # _emoCry
        this._emoCry = new _ccs.EmoCry();
        this._emoCry.setName("_emoCry");
        this._root.addChild(this._emoCry);
        this._emoCry.setCascadeOpacityEnabled(true);
        this._emoCry.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._emoCry, 0.5, 0.325);
        this._emoCry.setScale(1.25, 1.25);
        let _emoCryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._emoCry);
        _emoCryLayoutComponent.setPositionPercentXEnabled(true);
        _emoCryLayoutComponent.setPositionPercentX(0.5);
        _emoCryLayoutComponent.setPositionPercentYEnabled(true);
        _emoCryLayoutComponent.setPositionPercentY(0.325);

        ///// # _txtMessage2
        this._txtMessage2 = new ck.Text();
        this._txtMessage2.setName("_txtMessage2");
        this._root.addChild(this._txtMessage2);
        this._txtMessage2.setCascadeOpacityEnabled(true);
        this._txtMessage2.setCascadeColorEnabled(true);
        this._txtMessage2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMessage2, 0.5, 0.2);
        this._txtMessage2.setTextColor(cc.color(87, 60, 38, 255));
        let _txtMessage2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMessage2);
        _txtMessage2LayoutComponent.setPositionPercentXEnabled(true);
        _txtMessage2LayoutComponent.setPositionPercentX(0.5);
        _txtMessage2LayoutComponent.setPositionPercentYEnabled(true);
        _txtMessage2LayoutComponent.setPositionPercentY(0.2);
        _txtMessage2LayoutComponent.setPercentWidthEnabled(true);
        _txtMessage2LayoutComponent.setPercentWidth(0.81);
        _txtMessage2LayoutComponent.setPercentHeightEnabled(true);
        _txtMessage2LayoutComponent.setPercentHeight(0.18);
        this._txtMessage2.setTouchEnabled(false);
        this._txtMessage2.setUnifySizeEnabled(false);
        this._txtMessage2.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtMessage2, 0.81, 0.18);
        this._txtMessage2.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMessage2.setDefaultFontSize(40);
        this._txtMessage2.setString(gm.localize.getText("TXT_LOGIN30_MISSED_LAST_MONTH_2"));
        this._txtMessage2.setTextHorizontalAlignment(1);
        this._txtMessage2.setTextVerticalAlignment(1);
        this._txtMessage2.autoFitMultipleLine();

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
 * Create DailyRewardMissedLastMonthPopup
 * @returns {_ccs.DailyRewardMissedLastMonthPopup}
 */
_ccs.DailyRewardMissedLastMonthPopup.create = function () {
    return new _ccs.DailyRewardMissedLastMonthPopup();
};
