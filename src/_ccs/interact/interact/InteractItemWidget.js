/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.InteractItemWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.InteractItemWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutBackground: null,
    /** @type {ccui.ImageView} */
    _imgBackground01: null,
    /** @type {ccui.ImageView} */
    _imgBackground02: null,
    /** @type {ccui.ImageView} */
    _imgBackground03: null,
    /** @type {ccui.Layout} */
    _layoutItem: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ccui.Layout} */
    _layoutAmount: null,
    /** @type {ck.Text} */
    _txtAmount: null,
    /** @type {ccui.Layout} */
    _layoutBtnBuy: null,
    /** @type {ccui.ImageView} */
    _imgBtnBuy: null,
    /** @type {ck.Text} */
    _txtBuy: null,
    /** @type {ccui.ImageView} */
    _imgBuyIcon: null,
    /** @type {ccui.Layout} */
    _layoutProgressAmount: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ck.LoadingBar} */
    _progressAmount: null,
    /** @type {ck.Text} */
    _txtProgressAmount: null,
    /** @type {ccui.Layout} */
    _layoutCountDown: null,
    /** @type {cc.ProgressTimer} */
    _progressCountDown: null,
    /** @type {ck.Text} */
    _txtCountDownProgress: null,
    /** @type {ccui.Layout} */
    _layoutEffect: null,


    /**
     * _ccs.InteractItemWidget constructor
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
        this._layoutRoot.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        this._layoutRoot.setTouchEnabled(true);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(128, 128));

        ///// # _layoutBackground
        this._layoutBackground = new ccui.Layout();
        this._layoutBackground.setName("_layoutBackground");
        this._layoutRoot.addChild(this._layoutBackground);
        this._layoutBackground.setCascadeOpacityEnabled(true);
        this._layoutBackground.setCascadeColorEnabled(true);
        let _layoutBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBackground);
        _layoutBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentWidth(1);
        _layoutBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentHeight(1);
        this._layoutBackground.setTouchEnabled(false);
        this._layoutBackground.setUnifySizeEnabled(false);
        this._layoutBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBackground, 1, 1);

        ///// # _imgBackground01
        this._imgBackground01 = new ccui.ImageView();
        this._imgBackground01.setName("_imgBackground01");
        this._layoutBackground.addChild(this._imgBackground01);
        this._imgBackground01.setCascadeOpacityEnabled(true);
        this._imgBackground01.setCascadeColorEnabled(true);
        this._imgBackground01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground01, 0.5, 0.5);
        this._imgBackground01.setOpacity(76);
        this._imgBackground01.setColor(cc.color(0, 0, 0, 255));
        let _imgBackground01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground01);
        _imgBackground01LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackground01LayoutComponent.setPositionPercentX(0.5);
        _imgBackground01LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackground01LayoutComponent.setPositionPercentY(0.5);
        _imgBackground01LayoutComponent.setPercentWidthEnabled(true);
        _imgBackground01LayoutComponent.setPercentWidth(1);
        _imgBackground01LayoutComponent.setPercentHeightEnabled(true);
        _imgBackground01LayoutComponent.setPercentHeight(1);
        this._imgBackground01.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgBackground01.setUnifySizeEnabled(false);
        this._imgBackground01.ignoreContentAdaptWithSize(false);
        this._imgBackground01.setScale9Enabled(true);
        this._imgBackground01.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgBackground01, 1, 1);
        this._imgBackground01.setTouchEnabled(false);

        ///// # _imgBackground02
        this._imgBackground02 = new ccui.ImageView();
        this._imgBackground02.setName("_imgBackground02");
        this._layoutBackground.addChild(this._imgBackground02);
        this._imgBackground02.setCascadeOpacityEnabled(true);
        this._imgBackground02.setCascadeColorEnabled(true);
        this._imgBackground02.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgBackground02, 0.5, 0);
        this._imgBackground02.setOpacity(153);
        this._imgBackground02.setColor(cc.color(0, 0, 0, 255));
        let _imgBackground02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground02);
        _imgBackground02LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackground02LayoutComponent.setPositionPercentX(0.5);
        _imgBackground02LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackground02LayoutComponent.setPositionPercentY(0);
        _imgBackground02LayoutComponent.setPercentWidthEnabled(true);
        _imgBackground02LayoutComponent.setPercentWidth(1);
        _imgBackground02LayoutComponent.setPercentHeightEnabled(true);
        _imgBackground02LayoutComponent.setPercentHeight(0.3);
        this._imgBackground02.loadTexture("basics/shapes/RoundedRectangle_64px_0055px.png", 1);
        this._imgBackground02.setUnifySizeEnabled(false);
        this._imgBackground02.ignoreContentAdaptWithSize(false);
        this._imgBackground02.setScale9Enabled(true);
        this._imgBackground02.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgBackground02, 1, 0.3);
        this._imgBackground02.setTouchEnabled(false);

        ///// # _imgBackground03
        this._imgBackground03 = new ccui.ImageView();
        this._imgBackground03.setName("_imgBackground03");
        this._layoutBackground.addChild(this._imgBackground03);
        this._imgBackground03.setCascadeOpacityEnabled(true);
        this._imgBackground03.setCascadeColorEnabled(true);
        this._imgBackground03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground03, 0.5, 0.5);
        this._imgBackground03.setColor(cc.color(112, 100, 86, 255));
        let _imgBackground03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground03);
        _imgBackground03LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackground03LayoutComponent.setPositionPercentX(0.5);
        _imgBackground03LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackground03LayoutComponent.setPositionPercentY(0.5);
        this._imgBackground03.loadTexture("basics/shapes/StrokeRoundedRectangle_64px_5px.png", 1);
        this._imgBackground03.setUnifySizeEnabled(false);
        this._imgBackground03.ignoreContentAdaptWithSize(false);
        this._imgBackground03.setScale9Enabled(true);
        this._imgBackground03.setCapInsets(cc.rect(21, 21, 24, 24));
        this._imgBackground03.setContentSize(cc.size(130, 130));
        this._imgBackground03.setTouchEnabled(false);

        ///// # _layoutItem
        this._layoutItem = new ccui.Layout();
        this._layoutItem.setName("_layoutItem");
        this._layoutRoot.addChild(this._layoutItem);
        this._layoutItem.setCascadeOpacityEnabled(true);
        this._layoutItem.setCascadeColorEnabled(true);
        let _layoutItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutItem);
        _layoutItemLayoutComponent.setPercentWidthEnabled(true);
        _layoutItemLayoutComponent.setPercentWidth(1);
        _layoutItemLayoutComponent.setPercentHeightEnabled(true);
        _layoutItemLayoutComponent.setPercentHeight(1);
        this._layoutItem.setTouchEnabled(false);
        this._layoutItem.setUnifySizeEnabled(false);
        this._layoutItem.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutItem, 1, 1);

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._layoutItem.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.3);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.3);
        _imgIconLayoutComponent.setPercentWidthEnabled(true);
        _imgIconLayoutComponent.setPercentWidth(0.7);
        _imgIconLayoutComponent.setPercentHeightEnabled(true);
        _imgIconLayoutComponent.setPercentHeight(0.7);
        this._imgIcon.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgIcon, 0.7, 0.7);
        this._imgIcon.setTouchEnabled(false);

        ///// # _layoutAmount
        this._layoutAmount = new ccui.Layout();
        this._layoutAmount.setName("_layoutAmount");
        this._layoutItem.addChild(this._layoutAmount);
        this._layoutAmount.setCascadeOpacityEnabled(true);
        this._layoutAmount.setCascadeColorEnabled(true);
        this._layoutAmount.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutAmount, 0.5, 0.3);
        let _layoutAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAmount);
        _layoutAmountLayoutComponent.setPositionPercentXEnabled(true);
        _layoutAmountLayoutComponent.setPositionPercentX(0.5);
        _layoutAmountLayoutComponent.setPositionPercentYEnabled(true);
        _layoutAmountLayoutComponent.setPositionPercentY(0.3);
        _layoutAmountLayoutComponent.setPercentWidthEnabled(true);
        _layoutAmountLayoutComponent.setPercentWidth(1);
        _layoutAmountLayoutComponent.setPercentHeightEnabled(true);
        _layoutAmountLayoutComponent.setPercentHeight(0.3);
        this._layoutAmount.setTouchEnabled(false);
        this._layoutAmount.setUnifySizeEnabled(false);
        this._layoutAmount.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutAmount, 1, 0.3);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._layoutAmount.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.5, 0.5);
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.5);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.5);
        _txtAmountLayoutComponent.setPercentWidthEnabled(true);
        _txtAmountLayoutComponent.setPercentWidth(1);
        _txtAmountLayoutComponent.setPercentHeightEnabled(true);
        _txtAmountLayoutComponent.setPercentHeight(1);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.setUnifySizeEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtAmount, 1, 1);
        this._txtAmount.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAmount.setDefaultFontSize(35);
        this._txtAmount.setTextHorizontalAlignment(1);
        this._txtAmount.setTextVerticalAlignment(1);

        ///// # _layoutBtnBuy
        this._layoutBtnBuy = new ccui.Layout();
        this._layoutBtnBuy.setName("_layoutBtnBuy");
        this._layoutAmount.addChild(this._layoutBtnBuy);
        this._layoutBtnBuy.setCascadeOpacityEnabled(true);
        this._layoutBtnBuy.setCascadeColorEnabled(true);
        this._layoutBtnBuy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBtnBuy, 0.5, 0.5);
        let _layoutBtnBuyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBtnBuy);
        _layoutBtnBuyLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBtnBuyLayoutComponent.setPositionPercentX(0.5);
        _layoutBtnBuyLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBtnBuyLayoutComponent.setPositionPercentY(0.5);
        _layoutBtnBuyLayoutComponent.setPercentWidthEnabled(true);
        _layoutBtnBuyLayoutComponent.setPercentWidth(1);
        _layoutBtnBuyLayoutComponent.setPercentHeightEnabled(true);
        _layoutBtnBuyLayoutComponent.setPercentHeight(1);
        this._layoutBtnBuy.setTouchEnabled(false);
        this._layoutBtnBuy.setUnifySizeEnabled(false);
        this._layoutBtnBuy.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBtnBuy, 1, 1);

        ///// # _imgBtnBuy
        this._imgBtnBuy = new ccui.ImageView();
        this._imgBtnBuy.setName("_imgBtnBuy");
        this._layoutBtnBuy.addChild(this._imgBtnBuy);
        this._imgBtnBuy.setCascadeOpacityEnabled(true);
        this._imgBtnBuy.setCascadeColorEnabled(true);
        this._imgBtnBuy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBtnBuy, 0.5, 0.5);
        this._imgBtnBuy.setVisible(false);
        let _imgBtnBuyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBtnBuy);
        _imgBtnBuyLayoutComponent.setPositionPercentXEnabled(true);
        _imgBtnBuyLayoutComponent.setPositionPercentX(0.5);
        _imgBtnBuyLayoutComponent.setPositionPercentYEnabled(true);
        _imgBtnBuyLayoutComponent.setPositionPercentY(0.5);
        _imgBtnBuyLayoutComponent.setPercentWidthEnabled(true);
        _imgBtnBuyLayoutComponent.setPercentWidth(1);
        _imgBtnBuyLayoutComponent.setPercentHeightEnabled(true);
        _imgBtnBuyLayoutComponent.setPercentHeight(1);
        this._imgBtnBuy.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgBtnBuy.setUnifySizeEnabled(false);
        this._imgBtnBuy.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBtnBuy, 1, 1);
        this._imgBtnBuy.setTouchEnabled(false);

        ///// # _txtBuy
        this._txtBuy = new ck.Text();
        this._txtBuy.setName("_txtBuy");
        this._layoutBtnBuy.addChild(this._txtBuy);
        this._txtBuy.setCascadeOpacityEnabled(true);
        this._txtBuy.setCascadeColorEnabled(true);
        this._txtBuy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBuy, 0.6, 0.53);
        let _txtBuyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBuy);
        _txtBuyLayoutComponent.setPositionPercentXEnabled(true);
        _txtBuyLayoutComponent.setPositionPercentX(0.6);
        _txtBuyLayoutComponent.setPositionPercentYEnabled(true);
        _txtBuyLayoutComponent.setPositionPercentY(0.53);
        this._txtBuy.setTouchEnabled(false);
        this._txtBuy.ignoreContentAdaptWithSize(true);
        this._txtBuy.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBuy.setDefaultFontSize(25);
        this._txtBuy.setString("1.000");
        this._txtBuy.setTextHorizontalAlignment(1);
        this._txtBuy.setTextVerticalAlignment(1);

        ///// # _imgBuyIcon
        this._imgBuyIcon = new ccui.ImageView();
        this._imgBuyIcon.setName("_imgBuyIcon");
        this._txtBuy.addChild(this._imgBuyIcon);
        this._imgBuyIcon.setCascadeOpacityEnabled(true);
        this._imgBuyIcon.setCascadeColorEnabled(true);
        this._imgBuyIcon.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBuyIcon, 0, 0.5);
        let _imgBuyIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBuyIcon);
        _imgBuyIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgBuyIconLayoutComponent.setPositionPercentX(0);
        _imgBuyIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgBuyIconLayoutComponent.setPositionPercentY(0.5);
        this._imgBuyIcon.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgBuyIcon.setUnifySizeEnabled(false);
        this._imgBuyIcon.ignoreContentAdaptWithSize(false);
        this._imgBuyIcon.setContentSize(cc.size(32, 32));
        this._imgBuyIcon.setTouchEnabled(false);

        ///// # _layoutProgressAmount
        this._layoutProgressAmount = new ccui.Layout();
        this._layoutProgressAmount.setName("_layoutProgressAmount");
        this._layoutAmount.addChild(this._layoutProgressAmount);
        this._layoutProgressAmount.setCascadeOpacityEnabled(true);
        this._layoutProgressAmount.setCascadeColorEnabled(true);
        this._layoutProgressAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutProgressAmount, 0.5, 0.5);
        let _layoutProgressAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProgressAmount);
        _layoutProgressAmountLayoutComponent.setPositionPercentXEnabled(true);
        _layoutProgressAmountLayoutComponent.setPositionPercentX(0.5);
        _layoutProgressAmountLayoutComponent.setPositionPercentYEnabled(true);
        _layoutProgressAmountLayoutComponent.setPositionPercentY(0.5);
        _layoutProgressAmountLayoutComponent.setPercentWidthEnabled(true);
        _layoutProgressAmountLayoutComponent.setPercentWidth(1);
        _layoutProgressAmountLayoutComponent.setPercentHeightEnabled(true);
        _layoutProgressAmountLayoutComponent.setPercentHeight(1);
        this._layoutProgressAmount.setTouchEnabled(false);
        this._layoutProgressAmount.setUnifySizeEnabled(false);
        this._layoutProgressAmount.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutProgressAmount, 1, 1);

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._layoutProgressAmount.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.5);
        this._imgBackground.setVisible(false);
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundLayoutComponent.setPercentWidth(1);
        _imgBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundLayoutComponent.setPercentHeight(1);
        this._imgBackground.loadTexture("basics/bars/Bar_01.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setScale9Enabled(true);
        this._imgBackground.setCapInsets(cc.rect(164, 5, 170, 7));
        ck.UIUtils.setSizePercent(this._imgBackground, 1, 1);
        this._imgBackground.setTouchEnabled(false);

        ///// # _progressAmount
        this._progressAmount = new ck.LoadingBar();
        this._progressAmount.setName("_progressAmount");
        this._layoutProgressAmount.addChild(this._progressAmount);
        this._progressAmount.setCascadeOpacityEnabled(true);
        this._progressAmount.setCascadeColorEnabled(true);
        this._progressAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._progressAmount, 0.5, 0.5);
        let _progressAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._progressAmount);
        _progressAmountLayoutComponent.setPositionPercentXEnabled(true);
        _progressAmountLayoutComponent.setPositionPercentX(0.5);
        _progressAmountLayoutComponent.setPositionPercentYEnabled(true);
        _progressAmountLayoutComponent.setPositionPercentY(0.5);
        this._progressAmount.setTouchEnabled(false);
        this._progressAmount.setUnifySizeEnabled(false);
        this._progressAmount.ignoreContentAdaptWithSize(false);
        this._progressAmount.setContentSize(cc.size(126, 36.4));
        this._progressAmount.loadTexture("basics/bars/Bar_05.png", 1);

        ///// # _txtProgressAmount
        this._txtProgressAmount = new ck.Text();
        this._txtProgressAmount.setName("_txtProgressAmount");
        this._layoutProgressAmount.addChild(this._txtProgressAmount);
        this._txtProgressAmount.setCascadeOpacityEnabled(true);
        this._txtProgressAmount.setCascadeColorEnabled(true);
        this._txtProgressAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtProgressAmount, 0.5, 0.5);
        let _txtProgressAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtProgressAmount);
        _txtProgressAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtProgressAmountLayoutComponent.setPositionPercentX(0.5);
        _txtProgressAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtProgressAmountLayoutComponent.setPositionPercentY(0.5);
        this._txtProgressAmount.setTouchEnabled(false);
        this._txtProgressAmount.ignoreContentAdaptWithSize(true);
        this._txtProgressAmount.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtProgressAmount.setDefaultFontSize(20);
        this._txtProgressAmount.setTextHorizontalAlignment(0);
        this._txtProgressAmount.setTextVerticalAlignment(0);
        this._txtProgressAmount.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutCountDown
        this._layoutCountDown = new ccui.Layout();
        this._layoutCountDown.setName("_layoutCountDown");
        this._layoutRoot.addChild(this._layoutCountDown);
        this._layoutCountDown.setCascadeOpacityEnabled(true);
        this._layoutCountDown.setCascadeColorEnabled(true);
        let _layoutCountDownLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCountDown);
        _layoutCountDownLayoutComponent.setPercentWidthEnabled(true);
        _layoutCountDownLayoutComponent.setPercentWidth(1);
        _layoutCountDownLayoutComponent.setPercentHeightEnabled(true);
        _layoutCountDownLayoutComponent.setPercentHeight(1);
        this._layoutCountDown.setTouchEnabled(true);
        this._layoutCountDown.setUnifySizeEnabled(false);
        this._layoutCountDown.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutCountDown, 1, 1);

        ///// # _progressCountDown
        let __sprite = new cc.Sprite();
        __sprite.setSpriteFrame(cc.spriteFrameCache.getSpriteFrame("basics/shapes/RoundedRectangle_64px_5px.png"));
        this._progressCountDown = new cc.ProgressTimer(__sprite);
        this._progressCountDown.setName("_progressCountDown");
        this._layoutCountDown.addChild(this._progressCountDown);
        this._progressCountDown.setCascadeOpacityEnabled(true);
        this._progressCountDown.setCascadeColorEnabled(true);
        this._progressCountDown.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._progressCountDown, 0.5, 0.5);
        this._progressCountDown.setScale(2, 2);
        this._progressCountDown.setOpacity(178);
        this._progressCountDown.setColor(cc.color(0, 0, 0, 255));
        let _progressCountDownLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._progressCountDown);
        _progressCountDownLayoutComponent.setPositionPercentXEnabled(true);
        _progressCountDownLayoutComponent.setPositionPercentX(0.5);
        _progressCountDownLayoutComponent.setPositionPercentYEnabled(true);
        _progressCountDownLayoutComponent.setPositionPercentY(0.5);
        this._progressCountDown.setType(cc.ProgressTimer.TYPE_RADIAL);

        ///// # _txtCountDownProgress
        this._txtCountDownProgress = new ck.Text();
        this._txtCountDownProgress.setName("_txtCountDownProgress");
        this._layoutCountDown.addChild(this._txtCountDownProgress);
        this._txtCountDownProgress.setCascadeOpacityEnabled(true);
        this._txtCountDownProgress.setCascadeColorEnabled(true);
        this._txtCountDownProgress.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCountDownProgress, 0.5, 0.5);
        let _txtCountDownProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCountDownProgress);
        _txtCountDownProgressLayoutComponent.setPositionPercentXEnabled(true);
        _txtCountDownProgressLayoutComponent.setPositionPercentX(0.5);
        _txtCountDownProgressLayoutComponent.setPositionPercentYEnabled(true);
        _txtCountDownProgressLayoutComponent.setPositionPercentY(0.5);
        _txtCountDownProgressLayoutComponent.setPercentWidthEnabled(true);
        _txtCountDownProgressLayoutComponent.setPercentWidth(1);
        _txtCountDownProgressLayoutComponent.setPercentHeightEnabled(true);
        _txtCountDownProgressLayoutComponent.setPercentHeight(1);
        this._txtCountDownProgress.setTouchEnabled(false);
        this._txtCountDownProgress.setUnifySizeEnabled(false);
        this._txtCountDownProgress.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtCountDownProgress, 1, 1);
        this._txtCountDownProgress.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCountDownProgress.setDefaultFontSize(70);
        this._txtCountDownProgress.setTextHorizontalAlignment(1);
        this._txtCountDownProgress.setTextVerticalAlignment(1);

        ///// # _layoutEffect
        this._layoutEffect = new ccui.Layout();
        this._layoutEffect.setName("_layoutEffect");
        this._layoutRoot.addChild(this._layoutEffect);
        this._layoutEffect.setCascadeOpacityEnabled(true);
        this._layoutEffect.setCascadeColorEnabled(true);
        let _layoutEffectLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEffect);
        _layoutEffectLayoutComponent.setPercentWidthEnabled(true);
        _layoutEffectLayoutComponent.setPercentWidth(1);
        _layoutEffectLayoutComponent.setPercentHeightEnabled(true);
        _layoutEffectLayoutComponent.setPercentHeight(1);
        this._layoutEffect.setTouchEnabled(false);
        this._layoutEffect.setUnifySizeEnabled(false);
        this._layoutEffect.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutEffect, 1, 1);

    },



});

/**
 * Create InteractItemWidget
 * @returns {_ccs.InteractItemWidget}
 */
_ccs.InteractItemWidget.create = function () {
    return new _ccs.InteractItemWidget();
};
