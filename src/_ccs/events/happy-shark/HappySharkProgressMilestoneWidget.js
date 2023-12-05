/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.HappySharkProgressMilestoneWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.HappySharkProgressMilestoneWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutProgress: null,
    /** @type {ccui.ImageView} */
    _imgProgressBackground: null,
    /** @type {ccui.ImageView} */
    _imgProgress: null,
    /** @type {ck.Text} */
    _txtProgress: null,
    /** @type {ccui.ImageView} */
    _imgBubbleIcon: null,
    /** @type {cc.Node} */
    _nodeGift00: null,
    /** @type {ccui.ImageView} */
    _imgGift00: null,
    /** @type {ccui.ImageView} */
    _imgBoardPrizeGift00: null,
    /** @type {ItemWidget} */
    _itemWidgetPrize00: null,
    /** @type {ck.Text} */
    _txtGift00: null,
    /** @type {cc.Node} */
    _nodeGift01: null,
    /** @type {ccui.ImageView} */
    _imgGift01: null,
    /** @type {ccui.ImageView} */
    _imgBoardPrizeGift01: null,
    /** @type {ItemWidget} */
    _itemWidgetPrize01: null,
    /** @type {ck.Text} */
    _txtGift01: null,
    /** @type {cc.Node} */
    _nodeFinalGift: null,
    /** @type {ccui.ImageView} */
    _imgFinalGift: null,
    /** @type {ccui.ImageView} */
    _imgBoardPrizeFinalGift: null,
    /** @type {ItemWidget} */
    _itemWidgetFinalPrize: null,
    /** @type {ck.Text} */
    _txtFinalGift: null,
    /** @type {ck.Text} */
    _txtMaxProgress: null,


    /**
     * _ccs.HappySharkProgressMilestoneWidget constructor
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
        this._layoutRoot.setContentSize(cc.size(540, 50));

        ///// # _layoutProgress
        this._layoutProgress = new ccui.Layout();
        this._layoutProgress.setName("_layoutProgress");
        this._layoutRoot.addChild(this._layoutProgress);
        this._layoutProgress.setCascadeOpacityEnabled(true);
        this._layoutProgress.setCascadeColorEnabled(true);
        this._layoutProgress.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutProgress, 0.5, 0.5);
        let _layoutProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProgress);
        _layoutProgressLayoutComponent.setPositionPercentXEnabled(true);
        _layoutProgressLayoutComponent.setPositionPercentX(0.5);
        _layoutProgressLayoutComponent.setPositionPercentYEnabled(true);
        _layoutProgressLayoutComponent.setPositionPercentY(0.5);
        _layoutProgressLayoutComponent.setPercentWidthEnabled(true);
        _layoutProgressLayoutComponent.setPercentWidth(1);
        this._layoutProgress.setTouchEnabled(true);
        this._layoutProgress.setUnifySizeEnabled(false);
        this._layoutProgress.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutProgress, 1);
        this._layoutProgress.setContentSize(cc.size(this._layoutProgress.width, 33));

        ///// # _imgProgressBackground
        this._imgProgressBackground = new ccui.ImageView();
        this._imgProgressBackground.setName("_imgProgressBackground");
        this._layoutProgress.addChild(this._imgProgressBackground);
        this._imgProgressBackground.setCascadeOpacityEnabled(true);
        this._imgProgressBackground.setCascadeColorEnabled(true);
        this._imgProgressBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgProgressBackground, 0.5, 0.5);
        let _imgProgressBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgProgressBackground);
        _imgProgressBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgProgressBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgProgressBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgProgressBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgProgressBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgProgressBackgroundLayoutComponent.setPercentWidth(1);
        this._imgProgressBackground.loadTexture("happy-shark/ui/ProgressMilestoneBackground.png", 1);
        this._imgProgressBackground.setUnifySizeEnabled(false);
        this._imgProgressBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._imgProgressBackground, 1);
        this._imgProgressBackground.setContentSize(cc.size(this._imgProgressBackground.width, 33));
        this._imgProgressBackground.setTouchEnabled(false);

        ///// # _imgProgress
        this._imgProgress = new ccui.ImageView();
        this._imgProgress.setName("_imgProgress");
        this._layoutProgress.addChild(this._imgProgress);
        this._imgProgress.setCascadeOpacityEnabled(true);
        this._imgProgress.setCascadeColorEnabled(true);
        this._imgProgress.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgProgress, 0.015, 0.55);
        let _imgProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgProgress);
        _imgProgressLayoutComponent.setPositionPercentXEnabled(true);
        _imgProgressLayoutComponent.setPositionPercentX(0.015);
        _imgProgressLayoutComponent.setPositionPercentYEnabled(true);
        _imgProgressLayoutComponent.setPositionPercentY(0.55);
        _imgProgressLayoutComponent.setPercentWidthEnabled(true);
        _imgProgressLayoutComponent.setPercentWidth(0.0195);
        this._imgProgress.loadTexture("happy-shark/ui/ProgressMilestone.png", 1);
        this._imgProgress.setUnifySizeEnabled(false);
        this._imgProgress.ignoreContentAdaptWithSize(false);
        this._imgProgress.setScale9Enabled(true);
        this._imgProgress.setCapInsets(cc.rect(62, 6, 66, 7));
        ck.UIUtils.setWidthPercent(this._imgProgress, 0.0195);
        this._imgProgress.setContentSize(cc.size(this._imgProgress.width, 19));
        this._imgProgress.setTouchEnabled(false);

        ///// # _txtProgress
        this._txtProgress = new ck.Text();
        this._txtProgress.setName("_txtProgress");
        this._layoutProgress.addChild(this._txtProgress);
        this._txtProgress.setCascadeOpacityEnabled(true);
        this._txtProgress.setCascadeColorEnabled(true);
        this._txtProgress.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtProgress, 0.26, 0.5197);
        let _txtProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtProgress);
        _txtProgressLayoutComponent.setPositionPercentXEnabled(true);
        _txtProgressLayoutComponent.setPositionPercentX(0.26);
        _txtProgressLayoutComponent.setPositionPercentYEnabled(true);
        _txtProgressLayoutComponent.setPositionPercentY(0.5197);
        this._txtProgress.setTouchEnabled(false);
        this._txtProgress.setUnifySizeEnabled(false);
        this._txtProgress.ignoreContentAdaptWithSize(false);
        this._txtProgress.setContentSize(cc.size(200, 36));
        this._txtProgress.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtProgress.setDefaultFontSize(30);
        this._txtProgress.setTextHorizontalAlignment(1);
        this._txtProgress.setTextVerticalAlignment(0);
        this._txtProgress.enableOutline(cc.color(0, 0, 0, 255), 1);
        this._txtProgress.autoFitSingleLine();

        ///// # _imgBubbleIcon
        this._imgBubbleIcon = new ccui.ImageView();
        this._imgBubbleIcon.setName("_imgBubbleIcon");
        this._layoutRoot.addChild(this._imgBubbleIcon);
        this._imgBubbleIcon.setCascadeOpacityEnabled(true);
        this._imgBubbleIcon.setCascadeColorEnabled(true);
        this._imgBubbleIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBubbleIcon, -0.02, 0.5);
        let _imgBubbleIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBubbleIcon);
        _imgBubbleIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgBubbleIconLayoutComponent.setPositionPercentX(-0.02);
        _imgBubbleIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgBubbleIconLayoutComponent.setPositionPercentY(0.5);
        this._imgBubbleIcon.loadTexture("happy-shark/ui/MilestoneToken.png", 1);
        this._imgBubbleIcon.setUnifySizeEnabled(false);
        this._imgBubbleIcon.ignoreContentAdaptWithSize(false);
        this._imgBubbleIcon.setContentSize(cc.size(64, 64));
        this._imgBubbleIcon.setTouchEnabled(false);

        ///// # _nodeGift00
        this._nodeGift00 = new cc.Node();
        this._nodeGift00.setName("_nodeGift00");
        this._layoutRoot.addChild(this._nodeGift00);
        this._nodeGift00.setCascadeOpacityEnabled(true);
        this._nodeGift00.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeGift00, 0.55, 0.5);
        let _nodeGift00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeGift00);
        _nodeGift00LayoutComponent.setPositionPercentXEnabled(true);
        _nodeGift00LayoutComponent.setPositionPercentX(0.55);
        _nodeGift00LayoutComponent.setPositionPercentYEnabled(true);
        _nodeGift00LayoutComponent.setPositionPercentY(0.5);

        ///// # _imgGift00
        this._imgGift00 = new ccui.ImageView();
        this._imgGift00.setName("_imgGift00");
        this._nodeGift00.addChild(this._imgGift00);
        this._imgGift00.setCascadeOpacityEnabled(true);
        this._imgGift00.setCascadeColorEnabled(true);
        this._imgGift00.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgGift00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGift00);
        this._imgGift00.loadTexture("icons/color/gifts/GiftGreen.png", 1);
        this._imgGift00.setUnifySizeEnabled(false);
        this._imgGift00.ignoreContentAdaptWithSize(false);
        this._imgGift00.setContentSize(cc.size(35, 35));
        this._imgGift00.setTouchEnabled(false);

        ///// # _imgBoardPrizeGift00
        this._imgBoardPrizeGift00 = new ccui.ImageView();
        this._imgBoardPrizeGift00.setName("_imgBoardPrizeGift00");
        this._nodeGift00.addChild(this._imgBoardPrizeGift00);
        this._imgBoardPrizeGift00.setCascadeOpacityEnabled(true);
        this._imgBoardPrizeGift00.setCascadeColorEnabled(true);
        this._imgBoardPrizeGift00.setAnchorPoint(cc.p(0.5, 1));
        this._imgBoardPrizeGift00.setPosition(0, -11);
        let _imgBoardPrizeGift00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBoardPrizeGift00);
        this._imgBoardPrizeGift00.loadTexture("happy-shark/ui/BoardPrize00.png", 1);
        this._imgBoardPrizeGift00.setUnifySizeEnabled(false);
        this._imgBoardPrizeGift00.ignoreContentAdaptWithSize(false);
        this._imgBoardPrizeGift00.setScale9Enabled(true);
        this._imgBoardPrizeGift00.setCapInsets(cc.rect(21, 23, 23, 26));
        this._imgBoardPrizeGift00.setContentSize(cc.size(70, 80));
        this._imgBoardPrizeGift00.setTouchEnabled(false);

        ///// # _itemWidgetPrize00
        this._itemWidgetPrize00 = new ItemWidget();
        this._itemWidgetPrize00.setName("_itemWidgetPrize00");
        this._imgBoardPrizeGift00.addChild(this._itemWidgetPrize00);
        this._itemWidgetPrize00.setCascadeOpacityEnabled(true);
        this._itemWidgetPrize00.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._itemWidgetPrize00, 0.5, 0.5);
        this._itemWidgetPrize00.setScale(0.9, 0.9);
        let _itemWidgetPrize00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._itemWidgetPrize00);
        _itemWidgetPrize00LayoutComponent.setPositionPercentXEnabled(true);
        _itemWidgetPrize00LayoutComponent.setPositionPercentX(0.5);
        _itemWidgetPrize00LayoutComponent.setPositionPercentYEnabled(true);
        _itemWidgetPrize00LayoutComponent.setPositionPercentY(0.5);

        ///// # _txtGift00
        this._txtGift00 = new ck.Text();
        this._txtGift00.setName("_txtGift00");
        this._nodeGift00.addChild(this._txtGift00);
        this._txtGift00.setCascadeOpacityEnabled(true);
        this._txtGift00.setCascadeColorEnabled(true);
        this._txtGift00.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtGift00.setPosition(0, -12);
        let _txtGift00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGift00);
        this._txtGift00.setTouchEnabled(false);
        this._txtGift00.ignoreContentAdaptWithSize(true);
        this._txtGift00.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGift00.setDefaultFontSize(25);
        this._txtGift00.setTextHorizontalAlignment(0);
        this._txtGift00.setTextVerticalAlignment(0);
        this._txtGift00.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _nodeGift01
        this._nodeGift01 = new cc.Node();
        this._nodeGift01.setName("_nodeGift01");
        this._layoutRoot.addChild(this._nodeGift01);
        this._nodeGift01.setCascadeOpacityEnabled(true);
        this._nodeGift01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeGift01, 0.73, 0.5);
        let _nodeGift01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeGift01);
        _nodeGift01LayoutComponent.setPositionPercentXEnabled(true);
        _nodeGift01LayoutComponent.setPositionPercentX(0.73);
        _nodeGift01LayoutComponent.setPositionPercentYEnabled(true);
        _nodeGift01LayoutComponent.setPositionPercentY(0.5);

        ///// # _imgGift01
        this._imgGift01 = new ccui.ImageView();
        this._imgGift01.setName("_imgGift01");
        this._nodeGift01.addChild(this._imgGift01);
        this._imgGift01.setCascadeOpacityEnabled(true);
        this._imgGift01.setCascadeColorEnabled(true);
        this._imgGift01.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgGift01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGift01);
        this._imgGift01.loadTexture("icons/color/gifts/GiftGreen.png", 1);
        this._imgGift01.setUnifySizeEnabled(false);
        this._imgGift01.ignoreContentAdaptWithSize(false);
        this._imgGift01.setContentSize(cc.size(35, 35));
        this._imgGift01.setTouchEnabled(false);

        ///// # _imgBoardPrizeGift01
        this._imgBoardPrizeGift01 = new ccui.ImageView();
        this._imgBoardPrizeGift01.setName("_imgBoardPrizeGift01");
        this._nodeGift01.addChild(this._imgBoardPrizeGift01);
        this._imgBoardPrizeGift01.setCascadeOpacityEnabled(true);
        this._imgBoardPrizeGift01.setCascadeColorEnabled(true);
        this._imgBoardPrizeGift01.setAnchorPoint(cc.p(0.5, 1));
        this._imgBoardPrizeGift01.setPosition(0, -14);
        let _imgBoardPrizeGift01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBoardPrizeGift01);
        this._imgBoardPrizeGift01.loadTexture("happy-shark/ui/BoardPrize00.png", 1);
        this._imgBoardPrizeGift01.setUnifySizeEnabled(false);
        this._imgBoardPrizeGift01.ignoreContentAdaptWithSize(false);
        this._imgBoardPrizeGift01.setScale9Enabled(true);
        this._imgBoardPrizeGift01.setCapInsets(cc.rect(21, 23, 23, 26));
        this._imgBoardPrizeGift01.setContentSize(cc.size(70, 80));
        this._imgBoardPrizeGift01.setTouchEnabled(false);

        ///// # _itemWidgetPrize01
        this._itemWidgetPrize01 = new ItemWidget();
        this._itemWidgetPrize01.setName("_itemWidgetPrize01");
        this._imgBoardPrizeGift01.addChild(this._itemWidgetPrize01);
        this._itemWidgetPrize01.setCascadeOpacityEnabled(true);
        this._itemWidgetPrize01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._itemWidgetPrize01, 0.5, 0.5);
        this._itemWidgetPrize01.setScale(0.9, 0.9);
        let _itemWidgetPrize01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._itemWidgetPrize01);
        _itemWidgetPrize01LayoutComponent.setPositionPercentXEnabled(true);
        _itemWidgetPrize01LayoutComponent.setPositionPercentX(0.5);
        _itemWidgetPrize01LayoutComponent.setPositionPercentYEnabled(true);
        _itemWidgetPrize01LayoutComponent.setPositionPercentY(0.5);

        ///// # _txtGift01
        this._txtGift01 = new ck.Text();
        this._txtGift01.setName("_txtGift01");
        this._nodeGift01.addChild(this._txtGift01);
        this._txtGift01.setCascadeOpacityEnabled(true);
        this._txtGift01.setCascadeColorEnabled(true);
        this._txtGift01.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtGift01.setPosition(0, -12);
        let _txtGift01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGift01);
        this._txtGift01.setTouchEnabled(false);
        this._txtGift01.ignoreContentAdaptWithSize(true);
        this._txtGift01.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGift01.setDefaultFontSize(25);
        this._txtGift01.setTextHorizontalAlignment(0);
        this._txtGift01.setTextVerticalAlignment(0);
        this._txtGift01.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _nodeFinalGift
        this._nodeFinalGift = new cc.Node();
        this._nodeFinalGift.setName("_nodeFinalGift");
        this._layoutRoot.addChild(this._nodeFinalGift);
        this._nodeFinalGift.setCascadeOpacityEnabled(true);
        this._nodeFinalGift.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeFinalGift, 1, 0.5);
        let _nodeFinalGiftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeFinalGift);
        _nodeFinalGiftLayoutComponent.setPositionPercentXEnabled(true);
        _nodeFinalGiftLayoutComponent.setPositionPercentX(1);
        _nodeFinalGiftLayoutComponent.setPositionPercentYEnabled(true);
        _nodeFinalGiftLayoutComponent.setPositionPercentY(0.5);

        ///// # _imgFinalGift
        this._imgFinalGift = new ccui.ImageView();
        this._imgFinalGift.setName("_imgFinalGift");
        this._nodeFinalGift.addChild(this._imgFinalGift);
        this._imgFinalGift.setCascadeOpacityEnabled(true);
        this._imgFinalGift.setCascadeColorEnabled(true);
        this._imgFinalGift.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgFinalGift.setPosition(0, 10);
        let _imgFinalGiftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFinalGift);
        this._imgFinalGift.loadTexture("icons/color/gifts/GiftRed.png", 1);
        this._imgFinalGift.setUnifySizeEnabled(false);
        this._imgFinalGift.ignoreContentAdaptWithSize(false);
        this._imgFinalGift.setContentSize(cc.size(54, 54));
        this._imgFinalGift.setTouchEnabled(false);

        ///// # _imgBoardPrizeFinalGift
        this._imgBoardPrizeFinalGift = new ccui.ImageView();
        this._imgBoardPrizeFinalGift.setName("_imgBoardPrizeFinalGift");
        this._nodeFinalGift.addChild(this._imgBoardPrizeFinalGift);
        this._imgBoardPrizeFinalGift.setCascadeOpacityEnabled(true);
        this._imgBoardPrizeFinalGift.setCascadeColorEnabled(true);
        this._imgBoardPrizeFinalGift.setAnchorPoint(cc.p(0.506, 1));
        this._imgBoardPrizeFinalGift.setPosition(0.3911, -12);
        let _imgBoardPrizeFinalGiftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBoardPrizeFinalGift);
        this._imgBoardPrizeFinalGift.loadTexture("happy-shark/ui/BoardPrize01.png", 1);
        this._imgBoardPrizeFinalGift.setUnifySizeEnabled(false);
        this._imgBoardPrizeFinalGift.ignoreContentAdaptWithSize(false);
        this._imgBoardPrizeFinalGift.setScale9Enabled(true);
        this._imgBoardPrizeFinalGift.setCapInsets(cc.rect(21, 23, 83, 36));
        this._imgBoardPrizeFinalGift.setContentSize(cc.size(100, 82));
        this._imgBoardPrizeFinalGift.setTouchEnabled(false);

        ///// # _itemWidgetFinalPrize
        this._itemWidgetFinalPrize = new ItemWidget();
        this._itemWidgetFinalPrize.setName("_itemWidgetFinalPrize");
        this._imgBoardPrizeFinalGift.addChild(this._itemWidgetFinalPrize);
        this._itemWidgetFinalPrize.setCascadeOpacityEnabled(true);
        this._itemWidgetFinalPrize.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._itemWidgetFinalPrize, 0.5, 0.5);
        let _itemWidgetFinalPrizeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._itemWidgetFinalPrize);
        _itemWidgetFinalPrizeLayoutComponent.setPositionPercentXEnabled(true);
        _itemWidgetFinalPrizeLayoutComponent.setPositionPercentX(0.5);
        _itemWidgetFinalPrizeLayoutComponent.setPositionPercentYEnabled(true);
        _itemWidgetFinalPrizeLayoutComponent.setPositionPercentY(0.5);

        ///// # _txtFinalGift
        this._txtFinalGift = new ck.Text();
        this._txtFinalGift.setName("_txtFinalGift");
        this._nodeFinalGift.addChild(this._txtFinalGift);
        this._txtFinalGift.setCascadeOpacityEnabled(true);
        this._txtFinalGift.setCascadeColorEnabled(true);
        this._txtFinalGift.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtFinalGift.setPosition(0, -12);
        this._txtFinalGift.setTextColor(cc.color(253, 224, 4, 255));
        let _txtFinalGiftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtFinalGift);
        this._txtFinalGift.setTouchEnabled(false);
        this._txtFinalGift.ignoreContentAdaptWithSize(true);
        this._txtFinalGift.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtFinalGift.setDefaultFontSize(30);
        this._txtFinalGift.setTextHorizontalAlignment(0);
        this._txtFinalGift.setTextVerticalAlignment(0);
        this._txtFinalGift.enableOutline(cc.color(139, 74, 0, 255), 1);
        this._txtFinalGift.enableShadow(cc.color(139, 74, 0, 255), cc.size(0, -1), 0);

        ///// # _txtMaxProgress
        this._txtMaxProgress = new ck.Text();
        this._txtMaxProgress.setName("_txtMaxProgress");
        this._layoutRoot.addChild(this._txtMaxProgress);
        this._txtMaxProgress.setCascadeOpacityEnabled(true);
        this._txtMaxProgress.setCascadeColorEnabled(true);
        this._txtMaxProgress.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMaxProgress, 1, 0.54);
        this._txtMaxProgress.setVisible(false);
        this._txtMaxProgress.setTextColor(cc.color(253, 224, 4, 255));
        let _txtMaxProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMaxProgress);
        _txtMaxProgressLayoutComponent.setPositionPercentXEnabled(true);
        _txtMaxProgressLayoutComponent.setPositionPercentX(1);
        _txtMaxProgressLayoutComponent.setPositionPercentYEnabled(true);
        _txtMaxProgressLayoutComponent.setPositionPercentY(0.54);
        this._txtMaxProgress.setTouchEnabled(false);
        this._txtMaxProgress.ignoreContentAdaptWithSize(true);
        this._txtMaxProgress.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMaxProgress.setDefaultFontSize(30);
        this._txtMaxProgress.setString(gm.localize.getText("TXT_MAX"));
        this._txtMaxProgress.setTextHorizontalAlignment(0);
        this._txtMaxProgress.setTextVerticalAlignment(0);
        this._txtMaxProgress.enableOutline(cc.color(139, 74, 0, 255), 1);
        this._txtMaxProgress.enableShadow(cc.color(139, 74, 0, 255), cc.size(0, -1), 0);

    },



});

/**
 * Create HappySharkProgressMilestoneWidget
 * @returns {_ccs.HappySharkProgressMilestoneWidget}
 */
_ccs.HappySharkProgressMilestoneWidget.create = function () {
    return new _ccs.HappySharkProgressMilestoneWidget();
};
