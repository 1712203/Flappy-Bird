/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PaymentEventSuccessPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.PaymentEventSuccessPopup = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.Layout} */
    _popupPayment: null,
    /** @type {ccui.Layout} */
    _layoutFireworks: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {ccui.ImageView} */
    _imgDecor00: null,
    /** @type {ccui.ImageView} */
    _imgDecor01: null,
    /** @type {ccui.Layout} */
    _layoutContent: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ck.Text} */
    _txtMessage: null,
    /** @type {ck.Text} */
    _txtHint: null,
    /** @type {ccui.Layout} */
    _layoutBonusGifts: null,
    /** @type {ck.GridViewVertical} */
    _gridItems: null,
    /** @type {ccui.ImageView} */
    _imgOk: null,
    /** @type {ck.Text} */
    _txtOk: null,


    /**
     * _ccs.PaymentEventSuccessPopup constructor
     * @constructor
     */
    ctor: function () {
        cc.Layer.prototype.ctor.call(this);
        this.setCascadeOpacityEnabled(true);
        if (PlatformUtils.hasNotch())
            this._initNotch();
        this._initCCSChildren();
    },

    /**
     * Init notch for main layer
     * @private
     */
    _initNotch: function () {
        let notchHeight = PlatformUtils.NOTCH_HEIGHT;
        let marginBottom = PlatformUtils.MARGIN_BOTTOM;
        this.height = this.height - (notchHeight + marginBottom);
        this.setPosition(0, marginBottom);
    },

    /**
     * Init full screen background
     * @private
     */
    _initFullScreenBackground: function (background) {
        if (!PlatformUtils.hasNotch()) return;
        let backgroundScaleHeight = background.height / background.getParent().height;
        let notchHeight = PlatformUtils.NOTCH_HEIGHT;
        let marginBottom = PlatformUtils.MARGIN_BOTTOM;
        background.height = cc.winSize.height * backgroundScaleHeight;
        background.setAnchorPoint(0.5, 0.5);
        background.setPosition(cc.winSize.width * 0.5, background.height * 0.5 - marginBottom);
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
        ck.UIUtils.setPositionPercent(this._root, 0.5, 0.5);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        _rootLayoutComponent.setPositionPercentXEnabled(true);
        _rootLayoutComponent.setPositionPercentX(0.5);
        _rootLayoutComponent.setPositionPercentYEnabled(true);
        _rootLayoutComponent.setPositionPercentY(0.5);
        _rootLayoutComponent.setPercentWidthEnabled(true);
        _rootLayoutComponent.setPercentWidth(1);
        _rootLayoutComponent.setPercentHeightEnabled(true);
        _rootLayoutComponent.setPercentHeight(1);
        this._root.setTouchEnabled(false);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._root, 1, 1);

        ///// # _popupPayment
        this._popupPayment = new ccui.Layout();
        this._popupPayment.setName("_popupPayment");
        this._root.addChild(this._popupPayment);
        this._popupPayment.setCascadeOpacityEnabled(true);
        this._popupPayment.setCascadeColorEnabled(true);
        this._popupPayment.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._popupPayment, 0.5, 0.5);
        let _popupPaymentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._popupPayment);
        _popupPaymentLayoutComponent.setPositionPercentXEnabled(true);
        _popupPaymentLayoutComponent.setPositionPercentX(0.5);
        _popupPaymentLayoutComponent.setPositionPercentYEnabled(true);
        _popupPaymentLayoutComponent.setPositionPercentY(0.5);
        this._popupPayment.setTouchEnabled(true);
        this._popupPayment.setUnifySizeEnabled(false);
        this._popupPayment.ignoreContentAdaptWithSize(false);
        this._popupPayment.setContentSize(cc.size(640, 700));

        ///// # _layoutFireworks
        this._layoutFireworks = new ccui.Layout();
        this._layoutFireworks.setName("_layoutFireworks");
        this._popupPayment.addChild(this._layoutFireworks);
        this._layoutFireworks.setCascadeOpacityEnabled(true);
        this._layoutFireworks.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutFireworks, 0, 0.6543);
        let _layoutFireworksLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutFireworks);
        this._layoutFireworks.setTouchEnabled(false);
        this._layoutFireworks.setUnifySizeEnabled(false);
        this._layoutFireworks.ignoreContentAdaptWithSize(false);
        this._layoutFireworks.setContentSize(cc.size(300, 300));

        ///// # _imgBack
        this._imgBack = new ccui.ImageView();
        this._imgBack.setName("_imgBack");
        this._popupPayment.addChild(this._imgBack);
        this._imgBack.setCascadeOpacityEnabled(true);
        this._imgBack.setCascadeColorEnabled(true);
        this._imgBack.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBack, 0.5, 0.5);
        let _imgBackLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBack);
        _imgBackLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackLayoutComponent.setPositionPercentX(0.5);
        _imgBackLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackLayoutComponent.setPositionPercentY(0.5);
        this._imgBack.loadTexture("basics/popup/PopupReward_02.png", 1);
        this._imgBack.setUnifySizeEnabled(false);
        this._imgBack.ignoreContentAdaptWithSize(false);
        this._imgBack.setScale9Enabled(true);
        this._imgBack.setCapInsets(cc.rect(69, 57, 501, 590));
        this._imgBack.setContentSize(cc.size(639, 704));
        this._imgBack.setTouchEnabled(false);

        ///// # _imgDecor00
        this._imgDecor00 = new ccui.ImageView();
        this._imgDecor00.setName("_imgDecor00");
        this._imgBack.addChild(this._imgDecor00);
        this._imgDecor00.setCascadeOpacityEnabled(true);
        this._imgDecor00.setCascadeColorEnabled(true);
        this._imgDecor00.setAnchorPoint(cc.p(0.4, 1));
        ck.UIUtils.setPositionPercent(this._imgDecor00, 0.3412, 0.7386);
        this._imgDecor00.setRotationX(6);
        this._imgDecor00.setRotationY(6.0028);
        let _imgDecor00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDecor00);
        this._imgDecor00.loadTexture("basics/other/MoonStarDecorate.png", 1);
        this._imgDecor00.setUnifySizeEnabled(false);
        this._imgDecor00.ignoreContentAdaptWithSize(false);
        this._imgDecor00.setContentSize(cc.size(65, 146));
        this._imgDecor00.setTouchEnabled(false);

        ///// # _imgDecor01
        this._imgDecor01 = new ccui.ImageView();
        this._imgDecor01.setName("_imgDecor01");
        this._imgBack.addChild(this._imgDecor01);
        this._imgDecor01.setCascadeOpacityEnabled(true);
        this._imgDecor01.setCascadeColorEnabled(true);
        this._imgDecor01.setAnchorPoint(cc.p(0.4, 1));
        ck.UIUtils.setPositionPercent(this._imgDecor01, 0.2551, 0.5369);
        this._imgDecor01.setScale(-0.5, 0.5);
        this._imgDecor01.setRotation(-4);
        let _imgDecor01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDecor01);
        this._imgDecor01.loadTexture("basics/other/MoonStarDecorate.png", 1);
        this._imgDecor01.setUnifySizeEnabled(false);
        this._imgDecor01.ignoreContentAdaptWithSize(false);
        this._imgDecor01.setContentSize(cc.size(65, 146));
        this._imgDecor01.setTouchEnabled(false);

        ///// # _layoutContent
        this._layoutContent = new ccui.Layout();
        this._layoutContent.setName("_layoutContent");
        this._popupPayment.addChild(this._layoutContent);
        this._layoutContent.setCascadeOpacityEnabled(true);
        this._layoutContent.setCascadeColorEnabled(true);
        this._layoutContent.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutContent, 0.6781, 0.9171);
        let _layoutContentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutContent);
        this._layoutContent.setTouchEnabled(false);
        this._layoutContent.setUnifySizeEnabled(false);
        this._layoutContent.ignoreContentAdaptWithSize(false);
        this._layoutContent.setContentSize(cc.size(356, 515));

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._layoutContent.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 1);
        this._imgHeader.setScale(0.8, 0.8);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(1);
        this._imgHeader.loadTexture("texts/other/Congraz.png", 1);
        this._imgHeader.setTouchEnabled(false);

        ///// # _txtMessage
        this._txtMessage = new ck.Text();
        this._txtMessage.setName("_txtMessage");
        this._layoutContent.addChild(this._txtMessage);
        this._txtMessage.setCascadeOpacityEnabled(true);
        this._txtMessage.setCascadeColorEnabled(true);
        this._txtMessage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMessage, 0.5, 0.79);
        this._txtMessage.setTextColor(cc.color(173, 95, 146, 255));
        let _txtMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMessage);
        _txtMessageLayoutComponent.setPositionPercentXEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentX(0.5);
        _txtMessageLayoutComponent.setPositionPercentYEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentY(0.79);
        _txtMessageLayoutComponent.setPercentWidthEnabled(true);
        _txtMessageLayoutComponent.setPercentWidth(0.94);
        _txtMessageLayoutComponent.setPercentHeightEnabled(true);
        _txtMessageLayoutComponent.setPercentHeight(0.26);
        this._txtMessage.setTouchEnabled(false);
        this._txtMessage.setUnifySizeEnabled(false);
        this._txtMessage.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtMessage, 0.94, 0.26);
        this._txtMessage.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMessage.setDefaultFontSize(40);
        this._txtMessage.setString(gm.localize.getText("TXT_PAYMENT_SUCCESS").toUpperCase());
        this._txtMessage.setTextHorizontalAlignment(1);
        this._txtMessage.setTextVerticalAlignment(1);
        this._txtMessage.autoFitSingleLine();

        ///// # _txtHint
        this._txtHint = new ck.Text();
        this._txtHint.setName("_txtHint");
        this._layoutContent.addChild(this._txtHint);
        this._txtHint.setCascadeOpacityEnabled(true);
        this._txtHint.setCascadeColorEnabled(true);
        this._txtHint.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._txtHint, 0.5, 0.63);
        this._txtHint.setTextColor(cc.color(173, 95, 146, 255));
        let _txtHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHint);
        _txtHintLayoutComponent.setPositionPercentXEnabled(true);
        _txtHintLayoutComponent.setPositionPercentX(0.5);
        _txtHintLayoutComponent.setPositionPercentYEnabled(true);
        _txtHintLayoutComponent.setPositionPercentY(0.63);
        _txtHintLayoutComponent.setPercentWidthEnabled(true);
        _txtHintLayoutComponent.setPercentWidth(0.3624);
        _txtHintLayoutComponent.setPercentHeightEnabled(true);
        _txtHintLayoutComponent.setPercentHeight(0.0641);
        this._txtHint.setTouchEnabled(false);
        this._txtHint.ignoreContentAdaptWithSize(true);
        this._txtHint.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHint.setDefaultFontSize(30);
        this._txtHint.setString(gm.localize.getText("TXT_YOU_RECEIVED").toUpperCase());
        this._txtHint.setTextHorizontalAlignment(1);
        this._txtHint.setTextVerticalAlignment(1);

        ///// # _layoutBonusGifts
        this._layoutBonusGifts = new ccui.Layout();
        this._layoutBonusGifts.setName("_layoutBonusGifts");
        this._layoutContent.addChild(this._layoutBonusGifts);
        this._layoutBonusGifts.setCascadeOpacityEnabled(true);
        this._layoutBonusGifts.setCascadeColorEnabled(true);
        this._layoutBonusGifts.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutBonusGifts, 0.5, 0.1029);
        let _layoutBonusGiftsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBonusGifts);
        _layoutBonusGiftsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBonusGiftsLayoutComponent.setPositionPercentX(0.5);
        _layoutBonusGiftsLayoutComponent.setPercentWidthEnabled(true);
        _layoutBonusGiftsLayoutComponent.setPercentWidth(1);
        _layoutBonusGiftsLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.BOTTOM);
        _layoutBonusGiftsLayoutComponent.setBottomMargin(53);
        this._layoutBonusGifts.setTouchEnabled(true);
        this._layoutBonusGifts.setUnifySizeEnabled(false);
        this._layoutBonusGifts.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutBonusGifts, 1);
        this._layoutBonusGifts.setContentSize(cc.size(this._layoutBonusGifts.width, 115));

        ///// # _gridItems
        this._gridItems = new ck.GridViewVertical();
        this._gridItems.setName("_gridItems");
        this._layoutBonusGifts.addChild(this._gridItems);
        this._gridItems.setCascadeOpacityEnabled(true);
        this._gridItems.setCascadeColorEnabled(true);
        this._gridItems.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridItems, 0.5, 0.8652);
        let _gridItemsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridItems);
        _gridItemsLayoutComponent.setPositionPercentXEnabled(true);
        _gridItemsLayoutComponent.setPositionPercentX(0.5);
        _gridItemsLayoutComponent.setPositionPercentYEnabled(true);
        _gridItemsLayoutComponent.setPositionPercentY(0.8652);

        ///// # _imgOk
        this._imgOk = new ccui.ImageView();
        this._imgOk.setName("_imgOk");
        this._layoutContent.addChild(this._imgOk);
        this._imgOk.setCascadeOpacityEnabled(true);
        this._imgOk.setCascadeColorEnabled(true);
        this._imgOk.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgOk, 0.5, 0.0058);
        let _imgOkLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgOk);
        _imgOkLayoutComponent.setPositionPercentXEnabled(true);
        _imgOkLayoutComponent.setPositionPercentX(0.5);
        this._imgOk.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgOk.setUnifySizeEnabled(false);
        this._imgOk.ignoreContentAdaptWithSize(false);
        this._imgOk.setContentSize(cc.size(206, 81));
        this._imgOk.setTouchEnabled(true);

        ///// # _txtOk
        this._txtOk = new ck.Text();
        this._txtOk.setName("_txtOk");
        this._imgOk.addChild(this._txtOk);
        this._txtOk.setCascadeOpacityEnabled(true);
        this._txtOk.setCascadeColorEnabled(true);
        this._txtOk.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtOk, 0.5, 0.55);
        let _txtOkLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtOk);
        _txtOkLayoutComponent.setPositionPercentXEnabled(true);
        _txtOkLayoutComponent.setPositionPercentX(0.5);
        _txtOkLayoutComponent.setPositionPercentYEnabled(true);
        _txtOkLayoutComponent.setPositionPercentY(0.55);
        this._txtOk.setTouchEnabled(false);
        this._txtOk.ignoreContentAdaptWithSize(true);
        this._txtOk.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtOk.setDefaultFontSize(40);
        this._txtOk.setString(gm.localize.getText("TXT_OK"));
        this._txtOk.setTextHorizontalAlignment(1);
        this._txtOk.setTextVerticalAlignment(1);
        this._txtOk.enableOutline(cc.color(9, 63, 31, 255), 2);

    },


    playCCSAnimHaveBonus: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimHaveBonus();
    
    
    },

    resetCCSAnimHaveBonus: function () {
        this._gridItems.stopAllActions();
        this._gridItems.setVisible(true);
    },

    playCCSAnimNoBonus: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimNoBonus();
    
    
    },

    resetCCSAnimNoBonus: function () {
        this._gridItems.stopAllActions();
        this._gridItems.setVisible(false);
    },

    playCCSAnimIdle: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimIdle();
    
        let _imgDecor00Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.rotateBy(40 / (60 * speed), -12, -12).easing(cc.easeSineInOut()),
                    cc.rotateBy(40 / (60 * speed), 12, 12).easing(cc.easeSineInOut())
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgDecor00.setRotation(6);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgDecor00Action = _imgDecor00Action.repeatForever();
        } else _imgDecor00Action = cc.sequence(
            cc.delayTime(delay),
            _imgDecor00Action.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgDecor00.runAction(_imgDecor00Action);
    
        let _imgDecor01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.rotateBy(40 / (60 * speed), 8, 8).easing(cc.easeSineInOut()),
                    cc.rotateBy(40 / (60 * speed), -8, -8).easing(cc.easeSineInOut())
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgDecor01.setRotation(-4);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgDecor01Action = _imgDecor01Action.repeatForever();
        } else _imgDecor01Action = cc.sequence(
            cc.delayTime(delay),
            _imgDecor01Action.repeat(repeat)
        )
        
        this._imgDecor01.runAction(_imgDecor01Action);
    },

    resetCCSAnimIdle: function () {
        this._imgDecor00.stopAllActions();
        this._imgDecor00.setRotation(6);
    
        this._imgDecor01.stopAllActions();
        this._imgDecor01.setRotation(-4);
    }
});

/**
 * Create PaymentEventSuccessPopup
 * @returns {_ccs.PaymentEventSuccessPopup}
 */
_ccs.PaymentEventSuccessPopup.create = function () {
    return new _ccs.PaymentEventSuccessPopup();
};
