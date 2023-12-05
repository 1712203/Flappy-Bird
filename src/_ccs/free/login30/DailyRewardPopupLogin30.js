/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.DailyRewardPopupLogin30
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.DailyRewardPopupLogin30 = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {DailyRewardItemWidgetLogin30Normal} */
    _item0: null,
    /** @type {DailyRewardItemWidgetLogin30Normal} */
    _item1: null,
    /** @type {DailyRewardItemWidgetLogin30Normal} */
    _item2: null,
    /** @type {DailyRewardItemWidgetLogin30Normal} */
    _item3: null,
    /** @type {DailyRewardItemWidgetLogin30Normal} */
    _item4: null,
    /** @type {DailyRewardItemWidgetLogin30Normal} */
    _item5: null,
    /** @type {DailyRewardItemWidgetLogin30Special} */
    _itemSpecial0: null,
    /** @type {DailyRewardItemWidgetLogin30Special} */
    _itemSpecial1: null,
    /** @type {DailyRewardItemWidgetLogin30Special} */
    _itemSpecial2: null,
    /** @type {DailyRewardItemWidgetLogin30Final} */
    _itemSpecial3: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ck.Text} */
    _txtHeader: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ck.Text} */
    _txtHint: null,
    /** @type {ck.Text} */
    _txtNextResetTime: null,


    /**
     * _ccs.DailyRewardPopupLogin30 constructor
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
        this._layoutPopup.setPosition(-0.0009, 0.0004);
        let _layoutPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        this._layoutPopup.setTouchEnabled(false);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(640, 975));

        ///// # _imgBack
        this._imgBack = new ccui.ImageView();
        this._imgBack.setName("_imgBack");
        this._layoutPopup.addChild(this._imgBack);
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

        ///// # _item0
        this._item0 = new DailyRewardItemWidgetLogin30Normal();
        this._item0.setName("_item0");
        this._layoutPopup.addChild(this._item0);
        this._item0.setCascadeOpacityEnabled(true);
        this._item0.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._item0, 0.125, 0.79);
        let _item0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._item0);
        _item0LayoutComponent.setPositionPercentXEnabled(true);
        _item0LayoutComponent.setPositionPercentX(0.125);
        _item0LayoutComponent.setPositionPercentYEnabled(true);
        _item0LayoutComponent.setPositionPercentY(0.79);

        ///// # _item1
        this._item1 = new DailyRewardItemWidgetLogin30Normal();
        this._item1.setName("_item1");
        this._layoutPopup.addChild(this._item1);
        this._item1.setCascadeOpacityEnabled(true);
        this._item1.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._item1, 0.345, 0.79);
        let _item1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._item1);
        _item1LayoutComponent.setPositionPercentXEnabled(true);
        _item1LayoutComponent.setPositionPercentX(0.345);
        _item1LayoutComponent.setPositionPercentYEnabled(true);
        _item1LayoutComponent.setPositionPercentY(0.79);

        ///// # _item2
        this._item2 = new DailyRewardItemWidgetLogin30Normal();
        this._item2.setName("_item2");
        this._layoutPopup.addChild(this._item2);
        this._item2.setCascadeOpacityEnabled(true);
        this._item2.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._item2, 0.565, 0.79);
        let _item2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._item2);
        _item2LayoutComponent.setPositionPercentXEnabled(true);
        _item2LayoutComponent.setPositionPercentX(0.565);
        _item2LayoutComponent.setPositionPercentYEnabled(true);
        _item2LayoutComponent.setPositionPercentY(0.79);

        ///// # _item3
        this._item3 = new DailyRewardItemWidgetLogin30Normal();
        this._item3.setName("_item3");
        this._layoutPopup.addChild(this._item3);
        this._item3.setCascadeOpacityEnabled(true);
        this._item3.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._item3, 0.125, 0.565);
        let _item3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._item3);
        _item3LayoutComponent.setPositionPercentXEnabled(true);
        _item3LayoutComponent.setPositionPercentX(0.125);
        _item3LayoutComponent.setPositionPercentYEnabled(true);
        _item3LayoutComponent.setPositionPercentY(0.565);

        ///// # _item4
        this._item4 = new DailyRewardItemWidgetLogin30Normal();
        this._item4.setName("_item4");
        this._layoutPopup.addChild(this._item4);
        this._item4.setCascadeOpacityEnabled(true);
        this._item4.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._item4, 0.345, 0.565);
        let _item4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._item4);
        _item4LayoutComponent.setPositionPercentXEnabled(true);
        _item4LayoutComponent.setPositionPercentX(0.345);
        _item4LayoutComponent.setPositionPercentYEnabled(true);
        _item4LayoutComponent.setPositionPercentY(0.565);

        ///// # _item5
        this._item5 = new DailyRewardItemWidgetLogin30Normal();
        this._item5.setName("_item5");
        this._layoutPopup.addChild(this._item5);
        this._item5.setCascadeOpacityEnabled(true);
        this._item5.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._item5, 0.565, 0.565);
        let _item5LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._item5);
        _item5LayoutComponent.setPositionPercentXEnabled(true);
        _item5LayoutComponent.setPositionPercentX(0.565);
        _item5LayoutComponent.setPositionPercentYEnabled(true);
        _item5LayoutComponent.setPositionPercentY(0.565);

        ///// # _itemSpecial0
        this._itemSpecial0 = new DailyRewardItemWidgetLogin30Special();
        this._itemSpecial0.setName("_itemSpecial0");
        this._layoutPopup.addChild(this._itemSpecial0);
        this._itemSpecial0.setCascadeOpacityEnabled(true);
        this._itemSpecial0.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._itemSpecial0, 0.83, 0.678);
        let _itemSpecial0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._itemSpecial0);
        _itemSpecial0LayoutComponent.setPositionPercentXEnabled(true);
        _itemSpecial0LayoutComponent.setPositionPercentX(0.83);
        _itemSpecial0LayoutComponent.setPositionPercentYEnabled(true);
        _itemSpecial0LayoutComponent.setPositionPercentY(0.678);

        ///// # _itemSpecial1
        this._itemSpecial1 = new DailyRewardItemWidgetLogin30Special();
        this._itemSpecial1.setName("_itemSpecial1");
        this._layoutPopup.addChild(this._itemSpecial1);
        this._itemSpecial1.setCascadeOpacityEnabled(true);
        this._itemSpecial1.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._itemSpecial1, 0.17, 0.235);
        let _itemSpecial1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._itemSpecial1);
        _itemSpecial1LayoutComponent.setPositionPercentXEnabled(true);
        _itemSpecial1LayoutComponent.setPositionPercentX(0.17);
        _itemSpecial1LayoutComponent.setPositionPercentYEnabled(true);
        _itemSpecial1LayoutComponent.setPositionPercentY(0.235);

        ///// # _itemSpecial2
        this._itemSpecial2 = new DailyRewardItemWidgetLogin30Special();
        this._itemSpecial2.setName("_itemSpecial2");
        this._layoutPopup.addChild(this._itemSpecial2);
        this._itemSpecial2.setCascadeOpacityEnabled(true);
        this._itemSpecial2.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._itemSpecial2, 0.5, 0.235);
        let _itemSpecial2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._itemSpecial2);
        _itemSpecial2LayoutComponent.setPositionPercentXEnabled(true);
        _itemSpecial2LayoutComponent.setPositionPercentX(0.5);
        _itemSpecial2LayoutComponent.setPositionPercentYEnabled(true);
        _itemSpecial2LayoutComponent.setPositionPercentY(0.235);

        ///// # _itemSpecial3
        this._itemSpecial3 = new DailyRewardItemWidgetLogin30Final();
        this._itemSpecial3.setName("_itemSpecial3");
        this._layoutPopup.addChild(this._itemSpecial3);
        this._itemSpecial3.setCascadeOpacityEnabled(true);
        this._itemSpecial3.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._itemSpecial3, 0.83, 0.235);
        let _itemSpecial3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._itemSpecial3);
        _itemSpecial3LayoutComponent.setPositionPercentXEnabled(true);
        _itemSpecial3LayoutComponent.setPositionPercentX(0.83);
        _itemSpecial3LayoutComponent.setPositionPercentYEnabled(true);
        _itemSpecial3LayoutComponent.setPositionPercentY(0.235);

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._layoutPopup.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 1);
        this._imgHeader.setRotation(-0.1547);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(1);
        this._imgHeader.loadTexture("basics/popup/HeaderYellow.png", 1);
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
        ck.UIUtils.setPositionPercent(this._txtHeader, 0.5, 0.5214);
        this._txtHeader.setTextColor(cc.color(255, 252, 225, 255));
        let _txtHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHeader);
        _txtHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentX(0.5);
        _txtHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentY(0.5214);
        this._txtHeader.setTouchEnabled(false);
        this._txtHeader.ignoreContentAdaptWithSize(true);
        this._txtHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHeader.setDefaultFontSize(55);
        this._txtHeader.setString(gm.localize.getText("TXT_DAILY_GIFT"));
        this._txtHeader.setTextHorizontalAlignment(1);
        this._txtHeader.setTextVerticalAlignment(1);
        this._txtHeader.enableOutline(cc.color(155, 68, 38, 255), 2);
        this._txtHeader.enableShadow(cc.color(155, 68, 38, 255), cc.size(0, -2), 0);

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._layoutPopup.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.9367, 0.99);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.9367);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.99);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(81, 83));
        this._imgClose.setTouchEnabled(false);

        ///// # _txtHint
        this._txtHint = new ck.Text();
        this._txtHint.setName("_txtHint");
        this._layoutPopup.addChild(this._txtHint);
        this._txtHint.setCascadeOpacityEnabled(true);
        this._txtHint.setCascadeColorEnabled(true);
        this._txtHint.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHint, 0.5, 0.9425);
        this._txtHint.setTextColor(cc.color(110, 227, 152, 255));
        let _txtHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHint);
        _txtHintLayoutComponent.setPositionPercentXEnabled(true);
        _txtHintLayoutComponent.setPositionPercentX(0.5);
        _txtHintLayoutComponent.setPositionPercentYEnabled(true);
        _txtHintLayoutComponent.setPositionPercentY(0.9425);
        this._txtHint.setTouchEnabled(false);
        this._txtHint.ignoreContentAdaptWithSize(true);
        this._txtHint.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHint.setDefaultFontSize(28);
        this._txtHint.setString(gm.localize.getText("TXT_LOGIN_FREQUENTLY_TO_GET_GREAT_REWARDS"));
        this._txtHint.setTextHorizontalAlignment(2);
        this._txtHint.setTextVerticalAlignment(1);

        ///// # _txtNextResetTime
        this._txtNextResetTime = new ck.Text();
        this._txtNextResetTime.setName("_txtNextResetTime");
        this._layoutPopup.addChild(this._txtNextResetTime);
        this._txtNextResetTime.setCascadeOpacityEnabled(true);
        this._txtNextResetTime.setCascadeColorEnabled(true);
        this._txtNextResetTime.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNextResetTime, 0.5, 0.9125);
        let _txtNextResetTimeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNextResetTime);
        _txtNextResetTimeLayoutComponent.setPositionPercentXEnabled(true);
        _txtNextResetTimeLayoutComponent.setPositionPercentX(0.5);
        _txtNextResetTimeLayoutComponent.setPositionPercentYEnabled(true);
        _txtNextResetTimeLayoutComponent.setPositionPercentY(0.9125);
        this._txtNextResetTime.setTouchEnabled(false);
        this._txtNextResetTime.ignoreContentAdaptWithSize(true);
        this._txtNextResetTime.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtNextResetTime.setDefaultFontSize(28);
        this._txtNextResetTime.setTextHorizontalAlignment(2);
        this._txtNextResetTime.setTextVerticalAlignment(1);

    },



});

/**
 * Create DailyRewardPopupLogin30
 * @returns {_ccs.DailyRewardPopupLogin30}
 */
_ccs.DailyRewardPopupLogin30.create = function () {
    return new _ccs.DailyRewardPopupLogin30();
};
