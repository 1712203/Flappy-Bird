/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.Event15NodeGift
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.Event15NodeGift = ccui.Widget.extend({

    /** @type {ccui.ImageView} */
    _imgFrame: null,
    /** @type {ccui.Button} */
    _btnPrev: null,
    /** @type {ccui.Button} */
    _btnNext: null,
    /** @type {ccui.PageView} */
    _pageView: null,
    /** @type {ccui.ImageView} */
    _imgGiftNext: null,
    /** @type {ccui.ImageView} */
    _imgGiftPrev: null,
    /** @type {ItemInfoBubbleWidget} */
    _itemInfoBubbleWidget: null,
    /** @type {ccui.Layout} */
    _layoutTipsChooseGifts: null,
    /** @type {ccui.ImageView} */
    _imgTipsChooseGifts: null,
    /** @type {ck.Text} */
    _txtTipsChooseGifts: null,


    /**
     * _ccs.Event15NodeGift constructor
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

        ///// # _imgFrame
        this._imgFrame = new ccui.ImageView();
        this._imgFrame.setName("_imgFrame");
        this.addChild(this._imgFrame);
        this._imgFrame.setCascadeOpacityEnabled(true);
        this._imgFrame.setCascadeColorEnabled(true);
        this._imgFrame.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgFrameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFrame);
        this._imgFrame.loadTexture("event15_frame_item.png", 1);
        this._imgFrame.setUnifySizeEnabled(false);
        this._imgFrame.ignoreContentAdaptWithSize(false);
        this._imgFrame.setScale9Enabled(true);
        this._imgFrame.setCapInsets(cc.rect(15, 21, 164, 38));
        this._imgFrame.setContentSize(cc.size(194, 80));
        this._imgFrame.setTouchEnabled(false);

        ///// # _btnPrev
        this._btnPrev = new ccui.Button();
        this._btnPrev.setName("_btnPrev");
        this._imgFrame.addChild(this._btnPrev);
        this._btnPrev.setCascadeOpacityEnabled(true);
        this._btnPrev.setCascadeColorEnabled(true);
        this._btnPrev.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnPrev, -0.3268, 0.5175);
        this._btnPrev.setFlippedX(true);
        let _btnPrevLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnPrev);
        _btnPrevLayoutComponent.setPositionPercentXEnabled(true);
        _btnPrevLayoutComponent.setPositionPercentX(-0.3268);
        _btnPrevLayoutComponent.setPositionPercentYEnabled(true);
        _btnPrevLayoutComponent.setPositionPercentY(0.5175);
        this._btnPrev.loadTextureDisabled("btn_next_green.png", 1);
        this._btnPrev.loadTexturePressed("btn_next_green.png", 1);
        this._btnPrev.loadTextureNormal("btn_next_green.png", 1);
        this._btnPrev.setUnifySizeEnabled(false);
        this._btnPrev.ignoreContentAdaptWithSize(false);
        this._btnPrev.setContentSize(cc.size(80, 113));
        this._btnPrev.setTouchEnabled(true);

        ///// # _btnNext
        this._btnNext = new ccui.Button();
        this._btnNext.setName("_btnNext");
        this._imgFrame.addChild(this._btnNext);
        this._btnNext.setCascadeOpacityEnabled(true);
        this._btnNext.setCascadeColorEnabled(true);
        this._btnNext.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnNext, 1.3321, 0.5);
        let _btnNextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnNext);
        _btnNextLayoutComponent.setPositionPercentXEnabled(true);
        _btnNextLayoutComponent.setPositionPercentX(1.3321);
        _btnNextLayoutComponent.setPositionPercentYEnabled(true);
        _btnNextLayoutComponent.setPositionPercentY(0.5);
        this._btnNext.loadTextureDisabled("btn_next_green.png", 1);
        this._btnNext.loadTexturePressed("btn_next_green.png", 1);
        this._btnNext.loadTextureNormal("btn_next_green.png", 1);
        this._btnNext.setUnifySizeEnabled(false);
        this._btnNext.ignoreContentAdaptWithSize(false);
        this._btnNext.setContentSize(cc.size(80, 113));
        this._btnNext.setTouchEnabled(true);

        ///// # _pageView
        this._pageView = new ccui.PageView();
        this._pageView.setName("_pageView");
        this._imgFrame.addChild(this._pageView);
        this._pageView.setCascadeOpacityEnabled(true);
        this._pageView.setCascadeColorEnabled(true);
        this._pageView.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._pageView, 0.5, 0.5);
        let _pageViewLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._pageView);
        _pageViewLayoutComponent.setPositionPercentXEnabled(true);
        _pageViewLayoutComponent.setPositionPercentX(0.5);
        _pageViewLayoutComponent.setPositionPercentYEnabled(true);
        _pageViewLayoutComponent.setPositionPercentY(0.5);
        this._pageView.setTouchEnabled(true);
        this._pageView.setUnifySizeEnabled(false);
        this._pageView.ignoreContentAdaptWithSize(false);
        this._pageView.setContentSize(cc.size(180.878, 80.5959));

        ///// # _imgGiftNext
        this._imgGiftNext = new ccui.ImageView();
        this._imgGiftNext.setName("_imgGiftNext");
        this._imgFrame.addChild(this._imgGiftNext);
        this._imgGiftNext.setCascadeOpacityEnabled(true);
        this._imgGiftNext.setCascadeColorEnabled(true);
        this._imgGiftNext.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGiftNext, 1.3869, 1.35);
        this._imgGiftNext.setScale(0.5, 0.5);
        let _imgGiftNextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGiftNext);
        _imgGiftNextLayoutComponent.setPositionPercentXEnabled(true);
        _imgGiftNextLayoutComponent.setPositionPercentX(1.3869);
        _imgGiftNextLayoutComponent.setPositionPercentYEnabled(true);
        _imgGiftNextLayoutComponent.setPositionPercentY(1.35);
        this._imgGiftNext.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgGiftNext.setUnifySizeEnabled(false);
        this._imgGiftNext.ignoreContentAdaptWithSize(false);
        this._imgGiftNext.setContentSize(cc.size(128, 128));
        this._imgGiftNext.setTouchEnabled(false);

        ///// # _imgGiftPrev
        this._imgGiftPrev = new ccui.ImageView();
        this._imgGiftPrev.setName("_imgGiftPrev");
        this._imgFrame.addChild(this._imgGiftPrev);
        this._imgGiftPrev.setCascadeOpacityEnabled(true);
        this._imgGiftPrev.setCascadeColorEnabled(true);
        this._imgGiftPrev.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGiftPrev, -0.4246, 1.35);
        this._imgGiftPrev.setScale(0.5, 0.5);
        let _imgGiftPrevLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGiftPrev);
        _imgGiftPrevLayoutComponent.setPositionPercentXEnabled(true);
        _imgGiftPrevLayoutComponent.setPositionPercentX(-0.4246);
        _imgGiftPrevLayoutComponent.setPositionPercentYEnabled(true);
        _imgGiftPrevLayoutComponent.setPositionPercentY(1.35);
        this._imgGiftPrev.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgGiftPrev.setUnifySizeEnabled(false);
        this._imgGiftPrev.ignoreContentAdaptWithSize(false);
        this._imgGiftPrev.setContentSize(cc.size(128, 128));
        this._imgGiftPrev.setTouchEnabled(false);

        ///// # _itemInfoBubbleWidget
        this._itemInfoBubbleWidget = new ItemInfoBubbleWidget();
        this._itemInfoBubbleWidget.setName("_itemInfoBubbleWidget");
        this._imgFrame.addChild(this._itemInfoBubbleWidget);
        this._itemInfoBubbleWidget.setCascadeOpacityEnabled(true);
        this._itemInfoBubbleWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._itemInfoBubbleWidget, 0.495, 0.4843);
        this._itemInfoBubbleWidget.setVisible(false);
        let _itemInfoBubbleWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._itemInfoBubbleWidget);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentX(0.495);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentY(0.4843);

        ///// # _layoutTipsChooseGifts
        this._layoutTipsChooseGifts = new ccui.Layout();
        this._layoutTipsChooseGifts.setName("_layoutTipsChooseGifts");
        this._imgFrame.addChild(this._layoutTipsChooseGifts);
        this._layoutTipsChooseGifts.setCascadeOpacityEnabled(true);
        this._layoutTipsChooseGifts.setCascadeColorEnabled(true);
        this._layoutTipsChooseGifts.setAnchorPoint(cc.p(0.1147, 0));
        ck.UIUtils.setPositionPercent(this._layoutTipsChooseGifts, 1.2567, 0.5252);
        let _layoutTipsChooseGiftsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTipsChooseGifts);
        _layoutTipsChooseGiftsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTipsChooseGiftsLayoutComponent.setPositionPercentX(1.2567);
        _layoutTipsChooseGiftsLayoutComponent.setPositionPercentYEnabled(true);
        _layoutTipsChooseGiftsLayoutComponent.setPositionPercentY(0.5252);
        this._layoutTipsChooseGifts.setTouchEnabled(false);
        this._layoutTipsChooseGifts.setUnifySizeEnabled(false);
        this._layoutTipsChooseGifts.ignoreContentAdaptWithSize(false);
        this._layoutTipsChooseGifts.setContentSize(cc.size(174, 126));

        ///// # _imgTipsChooseGifts
        this._imgTipsChooseGifts = new ccui.ImageView();
        this._imgTipsChooseGifts.setName("_imgTipsChooseGifts");
        this._layoutTipsChooseGifts.addChild(this._imgTipsChooseGifts);
        this._imgTipsChooseGifts.setCascadeOpacityEnabled(true);
        this._imgTipsChooseGifts.setCascadeColorEnabled(true);
        this._imgTipsChooseGifts.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgTipsChooseGifts, 0.4624, 1);
        let _imgTipsChooseGiftsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTipsChooseGifts);
        _imgTipsChooseGiftsLayoutComponent.setPositionPercentXEnabled(true);
        _imgTipsChooseGiftsLayoutComponent.setPositionPercentX(0.4624);
        _imgTipsChooseGiftsLayoutComponent.setPositionPercentYEnabled(true);
        _imgTipsChooseGiftsLayoutComponent.setPositionPercentY(1);
        _imgTipsChooseGiftsLayoutComponent.setPercentHeightEnabled(true);
        _imgTipsChooseGiftsLayoutComponent.setPercentHeight(1);
        this._imgTipsChooseGifts.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgTipsChooseGifts.setUnifySizeEnabled(false);
        this._imgTipsChooseGifts.ignoreContentAdaptWithSize(false);
        this._imgTipsChooseGifts.setScale9Enabled(true);
        this._imgTipsChooseGifts.setCapInsets(cc.rect(57, 33, 60, 30));
        ck.UIUtils.setHeightPercent(this._imgTipsChooseGifts, 1);
        this._imgTipsChooseGifts.setContentSize(cc.size(174, this._imgTipsChooseGifts.height));
        this._imgTipsChooseGifts.setTouchEnabled(false);

        ///// # _txtTipsChooseGifts
        this._txtTipsChooseGifts = new ck.Text();
        this._txtTipsChooseGifts.setName("_txtTipsChooseGifts");
        this._layoutTipsChooseGifts.addChild(this._txtTipsChooseGifts);
        this._txtTipsChooseGifts.setCascadeOpacityEnabled(true);
        this._txtTipsChooseGifts.setCascadeColorEnabled(true);
        this._txtTipsChooseGifts.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTipsChooseGifts, 0.5, 0.6029);
        let _txtTipsChooseGiftsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTipsChooseGifts);
        _txtTipsChooseGiftsLayoutComponent.setPositionPercentXEnabled(true);
        _txtTipsChooseGiftsLayoutComponent.setPositionPercentX(0.5);
        _txtTipsChooseGiftsLayoutComponent.setPositionPercentYEnabled(true);
        _txtTipsChooseGiftsLayoutComponent.setPositionPercentY(0.6029);
        _txtTipsChooseGiftsLayoutComponent.setPercentWidthEnabled(true);
        _txtTipsChooseGiftsLayoutComponent.setPercentWidth(0.9);
        _txtTipsChooseGiftsLayoutComponent.setPercentHeightEnabled(true);
        _txtTipsChooseGiftsLayoutComponent.setPercentHeight(0.7305);
        this._txtTipsChooseGifts.setTouchEnabled(false);
        this._txtTipsChooseGifts.setUnifySizeEnabled(false);
        this._txtTipsChooseGifts.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtTipsChooseGifts, 0.9, 0.7305);
        this._txtTipsChooseGifts.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTipsChooseGifts.setDefaultFontSize(30);
        this._txtTipsChooseGifts.setString(gm.localize.getText("TXT_TIPS_CHOOSE_GIFTS"));
        this._txtTipsChooseGifts.setTextHorizontalAlignment(1);
        this._txtTipsChooseGifts.setTextVerticalAlignment(1);
        this._txtTipsChooseGifts.autoFitMultipleLine();

    },



});

/**
 * Create Event15NodeGift
 * @returns {_ccs.Event15NodeGift}
 */
_ccs.Event15NodeGift.create = function () {
    return new _ccs.Event15NodeGift();
};
