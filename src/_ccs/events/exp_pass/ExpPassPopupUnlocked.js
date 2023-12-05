/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ExpPassPopupUnlocked
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.ExpPassPopupUnlocked = cc.Layer.extend({

    /** @type {ccui.ImageView} */
    imageBgr: null,
    /** @type {ccui.ImageView} */
    imgTitle: null,
    /** @type {ck.Text} */
    lbTips: null,
    /** @type {ccui.Button} */
    btnClose: null,
    /** @type {ck.Text} */
    txtOk: null,


    /**
     * _ccs.ExpPassPopupUnlocked constructor
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

        ///// # imageBgr
        this.imageBgr = new ccui.ImageView();
        this.imageBgr.setName("imageBgr");
        this.addChild(this.imageBgr);
        this.imageBgr.setCascadeOpacityEnabled(true);
        this.imageBgr.setCascadeColorEnabled(true);
        this.imageBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imageBgr, 0.5, 0.54);
        let imageBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imageBgr);
        imageBgrLayoutComponent.setPositionPercentXEnabled(true);
        imageBgrLayoutComponent.setPositionPercentX(0.5);
        imageBgrLayoutComponent.setPositionPercentYEnabled(true);
        imageBgrLayoutComponent.setPositionPercentY(0.54);
        this.imageBgr.loadTexture("e12_popup_unlock_success.png", 1);
        this.imageBgr.setUnifySizeEnabled(false);
        this.imageBgr.ignoreContentAdaptWithSize(false);
        this.imageBgr.setContentSize(cc.size(523, 747));
        this.imageBgr.setTouchEnabled(false);

        ///// # imgTitle
        this.imgTitle = new ccui.ImageView();
        this.imgTitle.setName("imgTitle");
        this.imageBgr.addChild(this.imgTitle);
        this.imgTitle.setCascadeOpacityEnabled(true);
        this.imgTitle.setCascadeColorEnabled(true);
        this.imgTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgTitle, 0.5, 0.5441);
        this.imgTitle.setScale(0.8, 0.8);
        let imgTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgTitle);
        imgTitleLayoutComponent.setPositionPercentXEnabled(true);
        imgTitleLayoutComponent.setPositionPercentX(0.5);
        imgTitleLayoutComponent.setPositionPercentYEnabled(true);
        imgTitleLayoutComponent.setPositionPercentY(0.5441);
        this.imgTitle.loadTexture("texts/events/expPass/text_congraz.png", 1);
        this.imgTitle.setTouchEnabled(false);

        ///// # lbTips
        this.lbTips = new ck.Text();
        this.lbTips.setName("lbTips");
        this.imageBgr.addChild(this.lbTips);
        this.lbTips.setCascadeOpacityEnabled(true);
        this.lbTips.setCascadeColorEnabled(true);
        this.lbTips.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.lbTips, 0.5, 0.2049);
        let lbTipsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.lbTips);
        lbTipsLayoutComponent.setPositionPercentXEnabled(true);
        lbTipsLayoutComponent.setPositionPercentX(0.5);
        lbTipsLayoutComponent.setPositionPercentYEnabled(true);
        lbTipsLayoutComponent.setPositionPercentY(0.2049);
        this.lbTips.setTouchEnabled(false);
        this.lbTips.setUnifySizeEnabled(false);
        this.lbTips.ignoreContentAdaptWithSize(false);
        this.lbTips.setContentSize(cc.size(377, 64));
        this.lbTips.setFontName("fonts/LilitaOneRegular.ttf");
        this.lbTips.setDefaultFontSize(21);
        this.lbTips.setString(gm.localize.getText("TXT_YOU'VE_JUST_RECEVIE_SUPER_PASS,_ALL_PAS_PRIZES_ARE_UNLOCKED_NOW."));
        this.lbTips.setTextHorizontalAlignment(1);
        this.lbTips.setTextVerticalAlignment(1);
        this.lbTips.enableOutline(cc.color(100, 24, 96, 255), 2);

        ///// # btnClose
        this.btnClose = new ccui.Button();
        this.btnClose.setName("btnClose");
        this.imageBgr.addChild(this.btnClose);
        this.btnClose.setCascadeOpacityEnabled(true);
        this.btnClose.setCascadeColorEnabled(true);
        this.btnClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.btnClose, 0.5, -0.0728);
        let btnCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.btnClose);
        btnCloseLayoutComponent.setPositionPercentXEnabled(true);
        btnCloseLayoutComponent.setPositionPercentX(0.5);
        btnCloseLayoutComponent.setPositionPercentYEnabled(true);
        btnCloseLayoutComponent.setPositionPercentY(-0.0728);
        this.btnClose.loadTextureDisabled("buttons/rectangles/Green.png", 1);
        this.btnClose.loadTexturePressed("buttons/rectangles/Green.png", 1);
        this.btnClose.loadTextureNormal("buttons/rectangles/Green.png", 1);
        this.btnClose.setUnifySizeEnabled(false);
        this.btnClose.ignoreContentAdaptWithSize(false);
        this.btnClose.setScale9Enabled(true);
        this.btnClose.setCapInsets(cc.rect(15, 11, 176, 59));
        this.btnClose.setContentSize(cc.size(106, 61));
        this.btnClose.setTouchEnabled(true);

        ///// # txtOk
        this.txtOk = new ck.Text();
        this.txtOk.setName("txtOk");
        this.btnClose.addChild(this.txtOk);
        this.txtOk.setCascadeOpacityEnabled(true);
        this.txtOk.setCascadeColorEnabled(true);
        this.txtOk.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.txtOk, 0.5, 0.5307);
        let txtOkLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.txtOk);
        txtOkLayoutComponent.setPositionPercentXEnabled(true);
        txtOkLayoutComponent.setPositionPercentX(0.5);
        txtOkLayoutComponent.setPositionPercentYEnabled(true);
        txtOkLayoutComponent.setPositionPercentY(0.5307);
        this.txtOk.setTouchEnabled(false);
        this.txtOk.setUnifySizeEnabled(false);
        this.txtOk.ignoreContentAdaptWithSize(false);
        this.txtOk.setContentSize(cc.size(173.6174, 40));
        this.txtOk.setFontName("fonts/LilitaOneRegular.ttf");
        this.txtOk.setDefaultFontSize(30);
        this.txtOk.setString(gm.localize.getText("TXT_OK"));
        this.txtOk.setTextHorizontalAlignment(1);
        this.txtOk.setTextVerticalAlignment(1);
        this.txtOk.enableShadow(cc.color(0, 128, 0, 255), cc.size(0, -2), 0);

    },



});

/**
 * Create ExpPassPopupUnlocked
 * @returns {_ccs.ExpPassPopupUnlocked}
 */
_ccs.ExpPassPopupUnlocked.create = function () {
    return new _ccs.ExpPassPopupUnlocked();
};
