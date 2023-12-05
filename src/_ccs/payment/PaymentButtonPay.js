/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PaymentButtonPay
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.PaymentButtonPay = ccui.Widget.extend({

    /** @type {ccui.Button} */
    _btnPay: null,
    /** @type {ck.Text} */
    txtPriceTicket: null,


    /**
     * _ccs.PaymentButtonPay constructor
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

        ///// # _btnPay
        this._btnPay = new ccui.Button();
        this._btnPay.setName("_btnPay");
        this.addChild(this._btnPay);
        this._btnPay.setCascadeOpacityEnabled(true);
        this._btnPay.setCascadeColorEnabled(true);
        this._btnPay.setAnchorPoint(cc.p(0.5, 0.5));
        let _btnPayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnPay);
        _btnPayLayoutComponent.setPositionPercentXEnabled(true);
        _btnPayLayoutComponent.setPositionPercentX(0);
        _btnPayLayoutComponent.setPositionPercentYEnabled(true);
        _btnPayLayoutComponent.setPositionPercentY(0);
        this._btnPay.loadTextureDisabled("e15_btn_price.png", 1);
        this._btnPay.loadTexturePressed("e15_btn_price.png", 1);
        this._btnPay.loadTextureNormal("e15_btn_price.png", 1);
        this._btnPay.setUnifySizeEnabled(false);
        this._btnPay.ignoreContentAdaptWithSize(false);
        this._btnPay.setScale9Enabled(true);
        this._btnPay.setCapInsets(cc.rect(56, 0, 99, 80));
        this._btnPay.setContentSize(cc.size(211, 80));
        this._btnPay.setTouchEnabled(true);

        ///// # txtPriceTicket
        this.txtPriceTicket = new ck.Text();
        this.txtPriceTicket.setName("txtPriceTicket");
        this._btnPay.addChild(this.txtPriceTicket);
        this.txtPriceTicket.setCascadeOpacityEnabled(true);
        this.txtPriceTicket.setCascadeColorEnabled(true);
        this.txtPriceTicket.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.txtPriceTicket, 0.5, 0.4849);
        let txtPriceTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.txtPriceTicket);
        txtPriceTicketLayoutComponent.setPositionPercentXEnabled(true);
        txtPriceTicketLayoutComponent.setPositionPercentX(0.5);
        txtPriceTicketLayoutComponent.setPositionPercentYEnabled(true);
        txtPriceTicketLayoutComponent.setPositionPercentY(0.4849);
        this.txtPriceTicket.setTouchEnabled(false);
        this.txtPriceTicket.setUnifySizeEnabled(false);
        this.txtPriceTicket.ignoreContentAdaptWithSize(false);
        this.txtPriceTicket.setContentSize(cc.size(194.0144, 40));
        this.txtPriceTicket.setFontName("fonts/BebasNeueProBold.ttf");
        this.txtPriceTicket.setDefaultFontSize(45);
        this.txtPriceTicket.setString(gm.localize.getText("TXT_300$"));
        this.txtPriceTicket.setTextHorizontalAlignment(1);
        this.txtPriceTicket.setTextVerticalAlignment(1);
        this.txtPriceTicket.enableOutline(cc.color(74, 29, 13, 255), 2);

    },



});

/**
 * Create PaymentButtonPay
 * @returns {_ccs.PaymentButtonPay}
 */
_ccs.PaymentButtonPay.create = function () {
    return new _ccs.PaymentButtonPay();
};
