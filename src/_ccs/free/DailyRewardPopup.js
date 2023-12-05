/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.DailyRewardPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.DailyRewardPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {DailyRewardItemWidgetNormal} */
    _item0: null,
    /** @type {DailyRewardItemWidgetNormal} */
    _item1: null,
    /** @type {DailyRewardItemWidgetNormal} */
    _item2: null,
    /** @type {DailyRewardItemWidgetNormal} */
    _item3: null,
    /** @type {DailyRewardItemWidgetNormal} */
    _item4: null,
    /** @type {DailyRewardItemWidgetNormal} */
    _item5: null,
    /** @type {DailyRewardItemWidgetSpecial} */
    _item6: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ck.Text} */
    _txtHeader: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ck.Text} */
    _txtHint: null,


    /**
     * _ccs.DailyRewardPopup constructor
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
        this._layoutPopup.setContentSize(cc.size(518.6558, 835));

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
        this._item0 = new DailyRewardItemWidgetNormal();
        this._item0.setName("_item0");
        this._layoutPopup.addChild(this._item0);
        this._item0.setCascadeOpacityEnabled(true);
        this._item0.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._item0, 0.19, 0.7254);
        let _item0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._item0);
        _item0LayoutComponent.setPositionPercentXEnabled(true);
        _item0LayoutComponent.setPositionPercentX(0.19);
        _item0LayoutComponent.setPositionPercentYEnabled(true);
        _item0LayoutComponent.setPositionPercentY(0.7254);

        ///// # _item1
        this._item1 = new DailyRewardItemWidgetNormal();
        this._item1.setName("_item1");
        this._layoutPopup.addChild(this._item1);
        this._item1.setCascadeOpacityEnabled(true);
        this._item1.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._item1, 0.5, 0.7254);
        let _item1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._item1);
        _item1LayoutComponent.setPositionPercentXEnabled(true);
        _item1LayoutComponent.setPositionPercentX(0.5);
        _item1LayoutComponent.setPositionPercentYEnabled(true);
        _item1LayoutComponent.setPositionPercentY(0.7254);

        ///// # _item2
        this._item2 = new DailyRewardItemWidgetNormal();
        this._item2.setName("_item2");
        this._layoutPopup.addChild(this._item2);
        this._item2.setCascadeOpacityEnabled(true);
        this._item2.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._item2, 0.81, 0.7254);
        let _item2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._item2);
        _item2LayoutComponent.setPositionPercentXEnabled(true);
        _item2LayoutComponent.setPositionPercentX(0.81);
        _item2LayoutComponent.setPositionPercentYEnabled(true);
        _item2LayoutComponent.setPositionPercentY(0.7254);

        ///// # _item3
        this._item3 = new DailyRewardItemWidgetNormal();
        this._item3.setName("_item3");
        this._layoutPopup.addChild(this._item3);
        this._item3.setCascadeOpacityEnabled(true);
        this._item3.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._item3, 0.19, 0.4425);
        let _item3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._item3);
        _item3LayoutComponent.setPositionPercentXEnabled(true);
        _item3LayoutComponent.setPositionPercentX(0.19);
        _item3LayoutComponent.setPositionPercentYEnabled(true);
        _item3LayoutComponent.setPositionPercentY(0.4425);

        ///// # _item4
        this._item4 = new DailyRewardItemWidgetNormal();
        this._item4.setName("_item4");
        this._layoutPopup.addChild(this._item4);
        this._item4.setCascadeOpacityEnabled(true);
        this._item4.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._item4, 0.5, 0.4425);
        let _item4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._item4);
        _item4LayoutComponent.setPositionPercentXEnabled(true);
        _item4LayoutComponent.setPositionPercentX(0.5);
        _item4LayoutComponent.setPositionPercentYEnabled(true);
        _item4LayoutComponent.setPositionPercentY(0.4425);

        ///// # _item5
        this._item5 = new DailyRewardItemWidgetNormal();
        this._item5.setName("_item5");
        this._layoutPopup.addChild(this._item5);
        this._item5.setCascadeOpacityEnabled(true);
        this._item5.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._item5, 0.81, 0.4425);
        let _item5LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._item5);
        _item5LayoutComponent.setPositionPercentXEnabled(true);
        _item5LayoutComponent.setPositionPercentX(0.81);
        _item5LayoutComponent.setPositionPercentYEnabled(true);
        _item5LayoutComponent.setPositionPercentY(0.4425);

        ///// # _item6
        this._item6 = new DailyRewardItemWidgetSpecial();
        this._item6.setName("_item6");
        this._layoutPopup.addChild(this._item6);
        this._item6.setCascadeOpacityEnabled(true);
        this._item6.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._item6, 0.5, 0.1633);
        let _item6LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._item6);
        _item6LayoutComponent.setPositionPercentXEnabled(true);
        _item6LayoutComponent.setPositionPercentX(0.5);
        _item6LayoutComponent.setPositionPercentYEnabled(true);
        _item6LayoutComponent.setPositionPercentY(0.1633);

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._layoutPopup.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 0.995);
        this._imgHeader.setRotation(-0.1547);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(0.995);
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
        ck.UIUtils.setPositionPercent(this._imgClose, 0.98, 0.99);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.98);
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
        ck.UIUtils.setPositionPercent(this._txtHint, 0.5, 0.8949);
        this._txtHint.setTextColor(cc.color(110, 227, 152, 255));
        let _txtHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHint);
        _txtHintLayoutComponent.setPositionPercentXEnabled(true);
        _txtHintLayoutComponent.setPositionPercentX(0.5);
        _txtHintLayoutComponent.setPositionPercentYEnabled(true);
        _txtHintLayoutComponent.setPositionPercentY(0.8949);
        this._txtHint.setTouchEnabled(false);
        this._txtHint.ignoreContentAdaptWithSize(true);
        this._txtHint.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHint.setDefaultFontSize(35);
        this._txtHint.setString(gm.localize.getText("TXT_LOGIN_DAILY_TO_CLAIM"));
        this._txtHint.setTextHorizontalAlignment(2);
        this._txtHint.setTextVerticalAlignment(1);

    },



});

/**
 * Create DailyRewardPopup
 * @returns {_ccs.DailyRewardPopup}
 */
_ccs.DailyRewardPopup.create = function () {
    return new _ccs.DailyRewardPopup();
};
