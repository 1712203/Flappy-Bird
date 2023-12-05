/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PaymentPopupChannels
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.PaymentPopupChannels = cc.Layer.extend({

    /** @type {ccui.ImageView} */
    _imgPopup: null,
    /** @type {ccui.ImageView} */
    _imgTitle: null,
    /** @type {ccui.Button} */
    _btnClose: null,
    /** @type {ck.GridViewVertical} */
    _gridViewChannels: null,


    /**
     * _ccs.PaymentPopupChannels constructor
     * @constructor
     */
    ctor: function () {
        cc.Layer.prototype.ctor.call(this);
        this.setCascadeOpacityEnabled(true);
        this._initCCSChildren();
    },

    /**
     * Init nodes from ccs
     * @private
     */
    _initCCSChildren: function () {

        ///// # _imgPopup
        this._imgPopup = new ccui.ImageView();
        this._imgPopup.setName("_imgPopup");
        this.addChild(this._imgPopup);
        this._imgPopup.setCascadeOpacityEnabled(true);
        this._imgPopup.setCascadeColorEnabled(true);
        this._imgPopup.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPopup, 0.5, 0.31);
        let _imgPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPopup);
        _imgPopupLayoutComponent.setPositionPercentXEnabled(true);
        _imgPopupLayoutComponent.setPositionPercentX(0.5);
        _imgPopupLayoutComponent.setPositionPercentYEnabled(true);
        _imgPopupLayoutComponent.setPositionPercentY(0.31);
        this._imgPopup.loadTexture("channels_popup.png", 1);
        this._imgPopup.setUnifySizeEnabled(false);
        this._imgPopup.ignoreContentAdaptWithSize(false);
        this._imgPopup.setScale9Enabled(true);
        this._imgPopup.setCapInsets(cc.rect(254, 101, 6, 107));
        this._imgPopup.setContentSize(cc.size(526, 309));
        this._imgPopup.setTouchEnabled(true);

        ///// # _imgTitle
        this._imgTitle = new ccui.ImageView();
        this._imgTitle.setName("_imgTitle");
        this._imgPopup.addChild(this._imgTitle);
        this._imgTitle.setCascadeOpacityEnabled(true);
        this._imgTitle.setCascadeColorEnabled(true);
        this._imgTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTitle, 0.5199, 0.8811);
        let _imgTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTitle);
        this._imgTitle.loadTexture("texts/events/van-cat/e15_text_channel.png", 1);
        this._imgTitle.setTouchEnabled(false);

        ///// # _btnClose
        this._btnClose = new ccui.Button();
        this._btnClose.setName("_btnClose");
        this._imgPopup.addChild(this._btnClose);
        this._btnClose.setCascadeOpacityEnabled(true);
        this._btnClose.setCascadeColorEnabled(true);
        this._btnClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnClose, 0.9966, 1);
        this._btnClose.setScale(0.8, 0.8);
        let _btnCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnClose);
        _btnCloseLayoutComponent.setPositionPercentXEnabled(true);
        _btnCloseLayoutComponent.setPositionPercentX(0.9966);
        _btnCloseLayoutComponent.setPositionPercentYEnabled(true);
        _btnCloseLayoutComponent.setPositionPercentY(1);
        this._btnClose.loadTextureDisabled("buttons/squares/Close.png", 1);
        this._btnClose.loadTexturePressed("buttons/squares/Close.png", 1);
        this._btnClose.loadTextureNormal("buttons/squares/Close.png", 1);
        this._btnClose.setUnifySizeEnabled(false);
        this._btnClose.ignoreContentAdaptWithSize(false);
        this._btnClose.setContentSize(cc.size(73, 73));
        this._btnClose.setTouchEnabled(true);

        ///// # _gridViewChannels
        this._gridViewChannels = new ck.GridViewVertical();
        this._gridViewChannels.setName("_gridViewChannels");
        this._imgPopup.addChild(this._gridViewChannels);
        this._gridViewChannels.setCascadeOpacityEnabled(true);
        this._gridViewChannels.setCascadeColorEnabled(true);
        this._gridViewChannels.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridViewChannels, 0.5, 0.4);
        let _gridViewChannelsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewChannels);
        _gridViewChannelsLayoutComponent.setPositionPercentXEnabled(true);
        _gridViewChannelsLayoutComponent.setPositionPercentX(0.5);
        _gridViewChannelsLayoutComponent.setPositionPercentYEnabled(true);
        _gridViewChannelsLayoutComponent.setPositionPercentY(0.4);

    },



});

/**
 * Create PaymentPopupChannels
 * @returns {_ccs.PaymentPopupChannels}
 */
_ccs.PaymentPopupChannels.create = function () {
    return new _ccs.PaymentPopupChannels();
};
