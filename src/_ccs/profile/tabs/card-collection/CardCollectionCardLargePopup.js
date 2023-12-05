/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.CardCollectionCardLargePopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.CardCollectionCardLargePopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {CardCollectionCardLargeWidget} */
    _cardLargeWidget: null,
    /** @type {CardCollectionJokerCardWidget} */
    _jokerCardWidget: null,
    /** @type {ccui.Button} */
    _btnUseJokerCard: null,
    /** @type {ck.Text} */
    _txtUseJokerCard: null,
    /** @type {ck.Text} */
    _txtTipsJokerCard: null,
    /** @type {Glow} */
    _glow: null,


    /**
     * _ccs.CardCollectionCardLargePopup constructor
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
        this._layoutPopup.setTouchEnabled(false);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(410, 567));

        ///// # _cardLargeWidget
        this._cardLargeWidget = new CardCollectionCardLargeWidget();
        this._cardLargeWidget.setName("_cardLargeWidget");
        this._layoutPopup.addChild(this._cardLargeWidget);
        this._cardLargeWidget.setCascadeOpacityEnabled(true);
        this._cardLargeWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._cardLargeWidget, 0.5, 0.6);
        let _cardLargeWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._cardLargeWidget);
        _cardLargeWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _cardLargeWidgetLayoutComponent.setPositionPercentX(0.5);
        _cardLargeWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _cardLargeWidgetLayoutComponent.setPositionPercentY(0.6);

        ///// # _jokerCardWidget
        this._jokerCardWidget = new CardCollectionJokerCardWidget();
        this._jokerCardWidget.setName("_jokerCardWidget");
        this._layoutPopup.addChild(this._jokerCardWidget);
        this._jokerCardWidget.setCascadeOpacityEnabled(true);
        this._jokerCardWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._jokerCardWidget, 0.5, -0.125);
        let _jokerCardWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._jokerCardWidget);
        _jokerCardWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _jokerCardWidgetLayoutComponent.setPositionPercentX(0.5);
        _jokerCardWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _jokerCardWidgetLayoutComponent.setPositionPercentY(-0.125);

        ///// # _btnUseJokerCard
        this._btnUseJokerCard = new ccui.Button();
        this._btnUseJokerCard.setName("_btnUseJokerCard");
        this._layoutPopup.addChild(this._btnUseJokerCard);
        this._btnUseJokerCard.setCascadeOpacityEnabled(true);
        this._btnUseJokerCard.setCascadeColorEnabled(true);
        this._btnUseJokerCard.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnUseJokerCard, 0.5, -0.375);
        let _btnUseJokerCardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnUseJokerCard);
        _btnUseJokerCardLayoutComponent.setPositionPercentXEnabled(true);
        _btnUseJokerCardLayoutComponent.setPositionPercentX(0.5);
        _btnUseJokerCardLayoutComponent.setPositionPercentYEnabled(true);
        _btnUseJokerCardLayoutComponent.setPositionPercentY(-0.375);
        this._btnUseJokerCard.loadTextureDisabled("buttons/rectangles/Green.png", 1);
        this._btnUseJokerCard.loadTexturePressed("buttons/rectangles/Green.png", 1);
        this._btnUseJokerCard.loadTextureNormal("buttons/rectangles/Green.png", 1);
        this._btnUseJokerCard.setUnifySizeEnabled(false);
        this._btnUseJokerCard.ignoreContentAdaptWithSize(false);
        this._btnUseJokerCard.setScale9Enabled(true);
        this._btnUseJokerCard.setCapInsets(cc.rect(15, 11, 176, 59));
        this._btnUseJokerCard.setContentSize(cc.size(206, 81));
        this._btnUseJokerCard.setTouchEnabled(true);

        ///// # _txtUseJokerCard
        this._txtUseJokerCard = new ck.Text();
        this._txtUseJokerCard.setName("_txtUseJokerCard");
        this._btnUseJokerCard.addChild(this._txtUseJokerCard);
        this._txtUseJokerCard.setCascadeOpacityEnabled(true);
        this._txtUseJokerCard.setCascadeColorEnabled(true);
        this._txtUseJokerCard.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtUseJokerCard, 0.5, 0.55);
        let _txtUseJokerCardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtUseJokerCard);
        _txtUseJokerCardLayoutComponent.setPositionPercentXEnabled(true);
        _txtUseJokerCardLayoutComponent.setPositionPercentX(0.5);
        _txtUseJokerCardLayoutComponent.setPositionPercentYEnabled(true);
        _txtUseJokerCardLayoutComponent.setPositionPercentY(0.55);
        this._txtUseJokerCard.setTouchEnabled(false);
        this._txtUseJokerCard.ignoreContentAdaptWithSize(true);
        this._txtUseJokerCard.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtUseJokerCard.setDefaultFontSize(45);
        this._txtUseJokerCard.setString(gm.localize.getText("TXT_USE_JOKER"));
        this._txtUseJokerCard.setTextHorizontalAlignment(0);
        this._txtUseJokerCard.setTextVerticalAlignment(0);
        this._txtUseJokerCard.enableOutline(cc.color(0, 128, 0, 255), 2);
        this._txtUseJokerCard.enableShadow(cc.color(0, 128, 0, 255), cc.size(1, -1), 0);

        ///// # _txtTipsJokerCard
        this._txtTipsJokerCard = new ck.Text();
        this._txtTipsJokerCard.setName("_txtTipsJokerCard");
        this._layoutPopup.addChild(this._txtTipsJokerCard);
        this._txtTipsJokerCard.setCascadeOpacityEnabled(true);
        this._txtTipsJokerCard.setCascadeColorEnabled(true);
        this._txtTipsJokerCard.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTipsJokerCard, 0.5, -0.375);
        let _txtTipsJokerCardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTipsJokerCard);
        _txtTipsJokerCardLayoutComponent.setPositionPercentXEnabled(true);
        _txtTipsJokerCardLayoutComponent.setPositionPercentX(0.5);
        _txtTipsJokerCardLayoutComponent.setPositionPercentYEnabled(true);
        _txtTipsJokerCardLayoutComponent.setPositionPercentY(-0.375);
        this._txtTipsJokerCard.setTouchEnabled(false);
        this._txtTipsJokerCard.setUnifySizeEnabled(false);
        this._txtTipsJokerCard.ignoreContentAdaptWithSize(false);
        this._txtTipsJokerCard.setContentSize(cc.size(410, 80));
        this._txtTipsJokerCard.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTipsJokerCard.setDefaultFontSize(36);
        this._txtTipsJokerCard.setTextHorizontalAlignment(1);
        this._txtTipsJokerCard.setTextVerticalAlignment(1);

        ///// # _glow
        this._glow = new Glow();
        this._glow.setName("_glow");
        this._layoutPopup.addChild(this._glow);
        this._glow.setCascadeOpacityEnabled(true);
        this._glow.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._glow, 0.5, 0.6);
        let _glowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._glow);
        _glowLayoutComponent.setPositionPercentXEnabled(true);
        _glowLayoutComponent.setPositionPercentX(0.5);
        _glowLayoutComponent.setPositionPercentYEnabled(true);
        _glowLayoutComponent.setPositionPercentY(0.6);

    },



});

/**
 * Create CardCollectionCardLargePopup
 * @returns {_ccs.CardCollectionCardLargePopup}
 */
_ccs.CardCollectionCardLargePopup.create = function () {
    return new _ccs.CardCollectionCardLargePopup();
};
