/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ContinuousPurchaseMilestone
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ContinuousPurchaseMilestone = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    imgBg: null,
    /** @type {ccui.ImageView} */
    imgDayBg: null,
    /** @type {ck.Text} */
    label_day: null,
    /** @type {ccui.ImageView} */
    _imgClaimedLabel: null,
    /** @type {ck.Text} */
    _txtClaimedLabel: null,
    /** @type {ccui.Layout} */
    _btnPurchase: null,
    /** @type {ccui.ImageView} */
    _imgButtonPurchase: null,
    /** @type {ck.Text} */
    _txtButtonPurchase: null,
    /** @type {ccui.Layout} */
    _btnClaim: null,
    /** @type {ccui.ImageView} */
    _imgButtonClaim: null,
    /** @type {ck.Text} */
    _txtButtonClaim: null,
    /** @type {ccui.Layout} */
    panelGifts: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtStatus: null,


    /**
     * _ccs.ContinuousPurchaseMilestone constructor
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

        ///// # _layoutRoot
        this._layoutRoot = new ccui.Layout();
        this._layoutRoot.setName("_layoutRoot");
        this.addChild(this._layoutRoot);
        this._layoutRoot.setCascadeOpacityEnabled(true);
        this._layoutRoot.setCascadeColorEnabled(true);
        this._layoutRoot.setAnchorPoint(cc.p(0.5, 0.4988));
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        this._layoutRoot.setTouchEnabled(true);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(472, 209.7722));

        ///// # imgBg
        this.imgBg = new ccui.ImageView();
        this.imgBg.setName("imgBg");
        this._layoutRoot.addChild(this.imgBg);
        this.imgBg.setCascadeOpacityEnabled(true);
        this.imgBg.setCascadeColorEnabled(true);
        this.imgBg.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this.imgBg, 0.5, 0.7422);
        this.imgBg.setColor(cc.color(205, 201, 201, 255));
        let imgBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgBg);
        imgBgLayoutComponent.setPositionPercentXEnabled(true);
        imgBgLayoutComponent.setPositionPercentX(0.5);
        imgBgLayoutComponent.setPositionPercentYEnabled(true);
        imgBgLayoutComponent.setPositionPercentY(0.7422);
        this.imgBg.loadTexture("continuous-purchase_Board_01.png", 1);
        this.imgBg.setUnifySizeEnabled(false);
        this.imgBg.ignoreContentAdaptWithSize(false);
        this.imgBg.setContentSize(cc.size(472, 158));
        this.imgBg.setTouchEnabled(false);

        ///// # imgDayBg
        this.imgDayBg = new ccui.ImageView();
        this.imgDayBg.setName("imgDayBg");
        this._layoutRoot.addChild(this.imgDayBg);
        this.imgDayBg.setCascadeOpacityEnabled(true);
        this.imgDayBg.setCascadeColorEnabled(true);
        this.imgDayBg.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this.imgDayBg, 0.0387, 1);
        let imgDayBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgDayBg);
        imgDayBgLayoutComponent.setPositionPercentXEnabled(true);
        imgDayBgLayoutComponent.setPositionPercentX(0.0387);
        imgDayBgLayoutComponent.setPositionPercentYEnabled(true);
        imgDayBgLayoutComponent.setPositionPercentY(1);
        this.imgDayBg.loadTexture("continuous-purchase_board_day_0.png", 1);
        this.imgDayBg.setUnifySizeEnabled(false);
        this.imgDayBg.ignoreContentAdaptWithSize(false);
        this.imgDayBg.setContentSize(cc.size(189, 53));
        this.imgDayBg.setTouchEnabled(false);

        ///// # label_day
        this.label_day = new ck.Text();
        this.label_day.setName("label_day");
        this.imgDayBg.addChild(this.label_day);
        this.label_day.setCascadeOpacityEnabled(true);
        this.label_day.setCascadeColorEnabled(true);
        this.label_day.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this.label_day, 0.06, 0.4717);
        let label_dayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.label_day);
        label_dayLayoutComponent.setPositionPercentXEnabled(true);
        label_dayLayoutComponent.setPositionPercentX(0.06);
        this.label_day.setTouchEnabled(false);
        this.label_day.setUnifySizeEnabled(false);
        this.label_day.ignoreContentAdaptWithSize(false);
        this.label_day.setContentSize(cc.size(141.9713, 42));
        this.label_day.setFontName("fonts/BebasNeueProBold.ttf");
        this.label_day.setDefaultFontSize(35);
        this.label_day.setString(gm.localize.getText("TXT_DAY_2"));
        this.label_day.setTextHorizontalAlignment(0);
        this.label_day.setTextVerticalAlignment(0);

        ///// # _imgClaimedLabel
        this._imgClaimedLabel = new ccui.ImageView();
        this._imgClaimedLabel.setName("_imgClaimedLabel");
        this._layoutRoot.addChild(this._imgClaimedLabel);
        this._imgClaimedLabel.setCascadeOpacityEnabled(true);
        this._imgClaimedLabel.setCascadeColorEnabled(true);
        this._imgClaimedLabel.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClaimedLabel, 0.835, 0.42);
        let _imgClaimedLabelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClaimedLabel);
        _imgClaimedLabelLayoutComponent.setPositionPercentXEnabled(true);
        _imgClaimedLabelLayoutComponent.setPositionPercentX(0.835);
        _imgClaimedLabelLayoutComponent.setPositionPercentYEnabled(true);
        _imgClaimedLabelLayoutComponent.setPositionPercentY(0.42);
        this._imgClaimedLabel.loadTexture("continuous-purchase_box.png", 1);
        this._imgClaimedLabel.setUnifySizeEnabled(false);
        this._imgClaimedLabel.ignoreContentAdaptWithSize(false);
        this._imgClaimedLabel.setScale9Enabled(true);
        this._imgClaimedLabel.setCapInsets(cc.rect(27, 16, 70, 11));
        this._imgClaimedLabel.setContentSize(cc.size(124, 43));
        this._imgClaimedLabel.setTouchEnabled(false);

        ///// # _txtClaimedLabel
        this._txtClaimedLabel = new ck.Text();
        this._txtClaimedLabel.setName("_txtClaimedLabel");
        this._imgClaimedLabel.addChild(this._txtClaimedLabel);
        this._txtClaimedLabel.setCascadeOpacityEnabled(true);
        this._txtClaimedLabel.setCascadeColorEnabled(true);
        this._txtClaimedLabel.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtClaimedLabel, 0.5, 0.4767);
        this._txtClaimedLabel.setRotationY(-0.0005);
        this._txtClaimedLabel.setTextColor(cc.color(30, 176, 111, 255));
        let _txtClaimedLabelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtClaimedLabel);
        _txtClaimedLabelLayoutComponent.setPositionPercentXEnabled(true);
        _txtClaimedLabelLayoutComponent.setPositionPercentX(0.5);
        _txtClaimedLabelLayoutComponent.setPositionPercentYEnabled(true);
        _txtClaimedLabelLayoutComponent.setPositionPercentY(0.4767);
        this._txtClaimedLabel.setTouchEnabled(false);
        this._txtClaimedLabel.setUnifySizeEnabled(false);
        this._txtClaimedLabel.ignoreContentAdaptWithSize(false);
        this._txtClaimedLabel.setContentSize(cc.size(115, 39));
        this._txtClaimedLabel.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtClaimedLabel.setDefaultFontSize(35);
        this._txtClaimedLabel.setString(gm.localize.getText("TXT_CHECKED"));
        this._txtClaimedLabel.setTextHorizontalAlignment(1);
        this._txtClaimedLabel.setTextVerticalAlignment(1);
        this._txtClaimedLabel.autoFitSingleLine();

        ///// # _btnPurchase
        this._btnPurchase = new ccui.Layout();
        this._btnPurchase.setName("_btnPurchase");
        this._layoutRoot.addChild(this._btnPurchase);
        this._btnPurchase.setCascadeOpacityEnabled(true);
        this._btnPurchase.setCascadeColorEnabled(true);
        this._btnPurchase.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnPurchase, 0.5022, 0.38);
        let _btnPurchaseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnPurchase);
        _btnPurchaseLayoutComponent.setPositionPercentXEnabled(true);
        _btnPurchaseLayoutComponent.setPositionPercentX(0.5022);
        _btnPurchaseLayoutComponent.setPositionPercentYEnabled(true);
        _btnPurchaseLayoutComponent.setPositionPercentY(0.38);
        this._btnPurchase.setTouchEnabled(true);
        this._btnPurchase.setUnifySizeEnabled(false);
        this._btnPurchase.ignoreContentAdaptWithSize(false);
        this._btnPurchase.setContentSize(cc.size(446.6656, 130.77));

        ///// # _imgButtonPurchase
        this._imgButtonPurchase = new ccui.ImageView();
        this._imgButtonPurchase.setName("_imgButtonPurchase");
        this._btnPurchase.addChild(this._imgButtonPurchase);
        this._imgButtonPurchase.setCascadeOpacityEnabled(true);
        this._imgButtonPurchase.setCascadeColorEnabled(true);
        this._imgButtonPurchase.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonPurchase, 0.8597, 0.5362);
        let _imgButtonPurchaseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonPurchase);
        _imgButtonPurchaseLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonPurchaseLayoutComponent.setPositionPercentX(0.8597);
        _imgButtonPurchaseLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonPurchaseLayoutComponent.setPositionPercentY(0.5362);
        this._imgButtonPurchase.loadTexture("continuous-purchase_small.png", 1);
        this._imgButtonPurchase.setUnifySizeEnabled(false);
        this._imgButtonPurchase.ignoreContentAdaptWithSize(false);
        this._imgButtonPurchase.setContentSize(cc.size(163, 173));
        this._imgButtonPurchase.setTouchEnabled(false);

        ///// # _txtButtonPurchase
        this._txtButtonPurchase = new ck.Text();
        this._txtButtonPurchase.setName("_txtButtonPurchase");
        this._imgButtonPurchase.addChild(this._txtButtonPurchase);
        this._txtButtonPurchase.setCascadeOpacityEnabled(true);
        this._txtButtonPurchase.setCascadeColorEnabled(true);
        this._txtButtonPurchase.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonPurchase, 0.5, 0.53);
        this._txtButtonPurchase.setTextColor(cc.color(150, 94, 19, 255));
        let _txtButtonPurchaseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonPurchase);
        _txtButtonPurchaseLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonPurchaseLayoutComponent.setPositionPercentX(0.5);
        _txtButtonPurchaseLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonPurchaseLayoutComponent.setPositionPercentY(0.53);
        this._txtButtonPurchase.setTouchEnabled(false);
        this._txtButtonPurchase.setUnifySizeEnabled(false);
        this._txtButtonPurchase.ignoreContentAdaptWithSize(false);
        this._txtButtonPurchase.setContentSize(cc.size(136.5719, 43));
        this._txtButtonPurchase.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonPurchase.setDefaultFontSize(38);
        this._txtButtonPurchase.setString(gm.localize.getText("TXT_PURCHASE"));
        this._txtButtonPurchase.setTextHorizontalAlignment(1);
        this._txtButtonPurchase.setTextVerticalAlignment(1);
        this._txtButtonPurchase.enableShadow(cc.color(238, 181, 181, 255), cc.size(0, -1), 0);
        this._txtButtonPurchase.autoFitSingleLine();

        ///// # _btnClaim
        this._btnClaim = new ccui.Layout();
        this._btnClaim.setName("_btnClaim");
        this._layoutRoot.addChild(this._btnClaim);
        this._btnClaim.setCascadeOpacityEnabled(true);
        this._btnClaim.setCascadeColorEnabled(true);
        this._btnClaim.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnClaim, 0.4989, 0.4031);
        let _btnClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnClaim);
        _btnClaimLayoutComponent.setPositionPercentXEnabled(true);
        _btnClaimLayoutComponent.setPositionPercentX(0.4989);
        _btnClaimLayoutComponent.setPositionPercentYEnabled(true);
        _btnClaimLayoutComponent.setPositionPercentY(0.4031);
        this._btnClaim.setTouchEnabled(true);
        this._btnClaim.setUnifySizeEnabled(false);
        this._btnClaim.ignoreContentAdaptWithSize(false);
        this._btnClaim.setContentSize(cc.size(468.0942, 130.77));

        ///// # _imgButtonClaim
        this._imgButtonClaim = new ccui.ImageView();
        this._imgButtonClaim.setName("_imgButtonClaim");
        this._btnClaim.addChild(this._imgButtonClaim);
        this._imgButtonClaim.setCascadeOpacityEnabled(true);
        this._imgButtonClaim.setCascadeColorEnabled(true);
        this._imgButtonClaim.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonClaim, 0.8554, 0.5027);
        let _imgButtonClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonClaim);
        _imgButtonClaimLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonClaimLayoutComponent.setPositionPercentX(0.8554);
        _imgButtonClaimLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonClaimLayoutComponent.setPositionPercentY(0.5027);
        this._imgButtonClaim.loadTexture("continuous-purchase_small.png", 1);
        this._imgButtonClaim.setUnifySizeEnabled(false);
        this._imgButtonClaim.ignoreContentAdaptWithSize(false);
        this._imgButtonClaim.setContentSize(cc.size(163, 173));
        this._imgButtonClaim.setTouchEnabled(false);

        ///// # _txtButtonClaim
        this._txtButtonClaim = new ck.Text();
        this._txtButtonClaim.setName("_txtButtonClaim");
        this._imgButtonClaim.addChild(this._txtButtonClaim);
        this._txtButtonClaim.setCascadeOpacityEnabled(true);
        this._txtButtonClaim.setCascadeColorEnabled(true);
        this._txtButtonClaim.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonClaim, 0.5, 0.5184);
        this._txtButtonClaim.setTextColor(cc.color(150, 94, 19, 255));
        let _txtButtonClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonClaim);
        _txtButtonClaimLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonClaimLayoutComponent.setPositionPercentX(0.5);
        _txtButtonClaimLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonClaimLayoutComponent.setPositionPercentY(0.5184);
        this._txtButtonClaim.setTouchEnabled(false);
        this._txtButtonClaim.setUnifySizeEnabled(false);
        this._txtButtonClaim.ignoreContentAdaptWithSize(false);
        this._txtButtonClaim.setContentSize(cc.size(150.4955, 43));
        this._txtButtonClaim.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonClaim.setDefaultFontSize(38);
        this._txtButtonClaim.setString(gm.localize.getText("TXT_GET"));
        this._txtButtonClaim.setTextHorizontalAlignment(1);
        this._txtButtonClaim.setTextVerticalAlignment(1);
        this._txtButtonClaim.enableShadow(cc.color(238, 181, 181, 255), cc.size(0, -1), 0);
        this._txtButtonClaim.autoFitSingleLine();

        ///// # panelGifts
        this.panelGifts = new ccui.Layout();
        this.panelGifts.setName("panelGifts");
        this._layoutRoot.addChild(this.panelGifts);
        this.panelGifts.setCascadeOpacityEnabled(true);
        this.panelGifts.setCascadeColorEnabled(true);
        this.panelGifts.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.panelGifts, 0.3586, 0.5);
        let panelGiftsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.panelGifts);
        panelGiftsLayoutComponent.setPositionPercentXEnabled(true);
        panelGiftsLayoutComponent.setPositionPercentX(0.3586);
        panelGiftsLayoutComponent.setPositionPercentYEnabled(true);
        panelGiftsLayoutComponent.setPositionPercentY(0.5);
        this.panelGifts.setTouchEnabled(true);
        this.panelGifts.setUnifySizeEnabled(false);
        this.panelGifts.ignoreContentAdaptWithSize(false);
        this.panelGifts.setContentSize(cc.size(239.5607, 74.7241));

        ///// # _txtStatus
        this._txtStatus = new ck.CustomRichTextExtend(cc.size(422.7232, 42.6245));
        this._txtStatus.setName("_txtStatus");
        this._layoutRoot.addChild(this._txtStatus);
        this._txtStatus.setCascadeOpacityEnabled(true);
        this._txtStatus.setCascadeColorEnabled(true);
        this._txtStatus.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtStatus, 0.5, 0.1907);
        let _txtStatusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStatus);
        _txtStatusLayoutComponent.setPositionPercentXEnabled(true);
        _txtStatusLayoutComponent.setPositionPercentX(0.5);
        _txtStatusLayoutComponent.setPercentWidthEnabled(true);
        _txtStatusLayoutComponent.setPercentWidth(0.8956);
        this._txtStatus.setTouchEnabled(false);
        this._txtStatus.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtStatus.setDefaultSize(22);
        this._txtStatus.setDefaultAlignHorizontal(2);
        this._txtStatus.setDefaultAlignVertical(5);

    },



});

/**
 * Create ContinuousPurchaseMilestone
 * @returns {_ccs.ContinuousPurchaseMilestone}
 */
_ccs.ContinuousPurchaseMilestone.create = function () {
    return new _ccs.ContinuousPurchaseMilestone();
};