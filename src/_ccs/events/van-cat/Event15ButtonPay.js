/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.Event15ButtonPay
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.Event15ButtonPay = ccui.Widget.extend({

    /** @type {ccui.Button} */
    _btnPay: null,
    /** @type {ck.Text} */
    _txtBreak: null,
    /** @type {ck.Text} */
    txtPriceTicket: null,


    /**
     * _ccs.Event15ButtonPay constructor
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

        ///// # _txtBreak
        this._txtBreak = new ck.Text();
        this._txtBreak.setName("_txtBreak");
        this._btnPay.addChild(this._txtBreak);
        this._txtBreak.setCascadeOpacityEnabled(true);
        this._txtBreak.setCascadeColorEnabled(true);
        this._txtBreak.setAnchorPoint(cc.p(0.4993, 0.6319));
        ck.UIUtils.setPositionPercent(this._txtBreak, 0.5, 0.8167);
        this._txtBreak.setTextColor(cc.color(153, 47, 26, 255));
        let _txtBreakLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBreak);
        _txtBreakLayoutComponent.setPositionPercentXEnabled(true);
        _txtBreakLayoutComponent.setPositionPercentX(0.5);
        _txtBreakLayoutComponent.setPositionPercentYEnabled(true);
        _txtBreakLayoutComponent.setPositionPercentY(0.8167);
        this._txtBreak.setTouchEnabled(false);
        this._txtBreak.ignoreContentAdaptWithSize(true);
        this._txtBreak.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBreak.setDefaultFontSize(20);
        this._txtBreak.setString(gm.localize.getText("TXT_DAP_NGAY_VOI_GIA"));
        this._txtBreak.setTextHorizontalAlignment(1);
        this._txtBreak.setTextVerticalAlignment(1);

        ///// # txtPriceTicket
        this.txtPriceTicket = new ck.Text();
        this.txtPriceTicket.setName("txtPriceTicket");
        this._btnPay.addChild(this.txtPriceTicket);
        this.txtPriceTicket.setCascadeOpacityEnabled(true);
        this.txtPriceTicket.setCascadeColorEnabled(true);
        this.txtPriceTicket.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.txtPriceTicket, 0.5, 0.3974);
        let txtPriceTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.txtPriceTicket);
        txtPriceTicketLayoutComponent.setPositionPercentXEnabled(true);
        txtPriceTicketLayoutComponent.setPositionPercentX(0.5);
        txtPriceTicketLayoutComponent.setPositionPercentYEnabled(true);
        txtPriceTicketLayoutComponent.setPositionPercentY(0.3974);
        this.txtPriceTicket.setTouchEnabled(false);
        this.txtPriceTicket.setUnifySizeEnabled(false);
        this.txtPriceTicket.ignoreContentAdaptWithSize(false);
        this.txtPriceTicket.setContentSize(cc.size(173.6174, 40));
        this.txtPriceTicket.setFontName("fonts/BebasNeueProBold.ttf");
        this.txtPriceTicket.setDefaultFontSize(37);
        this.txtPriceTicket.setString(gm.localize.getText("TXT_300$"));
        this.txtPriceTicket.setTextHorizontalAlignment(1);
        this.txtPriceTicket.setTextVerticalAlignment(1);
        this.txtPriceTicket.enableOutline(cc.color(0, 128, 0, 255), 2);

    },



});

/**
 * Create Event15ButtonPay
 * @returns {_ccs.Event15ButtonPay}
 */
_ccs.Event15ButtonPay.create = function () {
    return new _ccs.Event15ButtonPay();
};
