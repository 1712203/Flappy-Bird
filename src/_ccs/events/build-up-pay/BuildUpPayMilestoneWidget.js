/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.BuildUpPayMilestoneWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.BuildUpPayMilestoneWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutBackground: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundDark: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundHighlight: null,
    /** @type {ccui.Layout} */
    _layoutChest: null,
    /** @type {ccui.Layout} */
    _layoutProgressBar: null,
    /** @type {ccui.ImageView} */
    _imgProgressBarBackground: null,
    /** @type {ck.LoadingBar} */
    _progressBar: null,
    /** @type {ccui.ImageView} */
    _imgProgressBarNode: null,
    /** @type {ccui.ImageView} */
    _imgProgressBarArrow: null,
    /** @type {ChestSpineWidget} */
    _chestWidget: null,
    /** @type {ccui.ListView} */
    _listviewItems: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtStatus: null,
    /** @type {ccui.Layout} */
    _layoutAction: null,
    /** @type {AsyncButton} */
    _btnClaim: null,
    /** @type {ccui.ImageView} */
    _imgButtonClaim: null,
    /** @type {ck.Text} */
    _txtButtonClaim: null,
    /** @type {ccui.ImageView} */
    _imgLoadingButtonClaim: null,
    /** @type {ccui.ImageView} */
    _imgClaimedLabel: null,
    /** @type {ck.Text} */
    _txtClaimedLabel: null,
    /** @type {AsyncButton} */
    _btnPurchase: null,
    /** @type {ccui.ImageView} */
    _imgButtonPurchase: null,
    /** @type {ck.Text} */
    _txtButtonPurchase: null,
    /** @type {ccui.ImageView} */
    _imgLoadingButtonPurchase: null,


    /**
     * _ccs.BuildUpPayMilestoneWidget constructor
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
        this._layoutRoot.setContentSize(cc.size(583, 150));

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

        ///// # _imgBackgroundDark
        this._imgBackgroundDark = new ccui.ImageView();
        this._imgBackgroundDark.setName("_imgBackgroundDark");
        this._layoutBackground.addChild(this._imgBackgroundDark);
        this._imgBackgroundDark.setCascadeOpacityEnabled(true);
        this._imgBackgroundDark.setCascadeColorEnabled(true);
        this._imgBackgroundDark.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundDark, 0.5, 0.5);
        this._imgBackgroundDark.setOpacity(153);
        this._imgBackgroundDark.setColor(cc.color(90, 78, 140, 255));
        let _imgBackgroundDarkLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundDark);
        _imgBackgroundDarkLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundDarkLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundDarkLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundDarkLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundDarkLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundDarkLayoutComponent.setPercentWidth(1);
        _imgBackgroundDarkLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundDarkLayoutComponent.setPercentHeight(1);
        this._imgBackgroundDark.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgBackgroundDark.setUnifySizeEnabled(false);
        this._imgBackgroundDark.ignoreContentAdaptWithSize(false);
        this._imgBackgroundDark.setScale9Enabled(true);
        this._imgBackgroundDark.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgBackgroundDark, 1, 1);
        this._imgBackgroundDark.setTouchEnabled(false);

        ///// # _imgBackgroundHighlight
        this._imgBackgroundHighlight = new ccui.ImageView();
        this._imgBackgroundHighlight.setName("_imgBackgroundHighlight");
        this._layoutBackground.addChild(this._imgBackgroundHighlight);
        this._imgBackgroundHighlight.setCascadeOpacityEnabled(true);
        this._imgBackgroundHighlight.setCascadeColorEnabled(true);
        this._imgBackgroundHighlight.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundHighlight, 0.5, 0.5);
        let _imgBackgroundHighlightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundHighlight);
        _imgBackgroundHighlightLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundHighlightLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundHighlightLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundHighlightLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundHighlightLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundHighlightLayoutComponent.setPercentWidth(1);
        _imgBackgroundHighlightLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundHighlightLayoutComponent.setPercentHeight(1);
        this._imgBackgroundHighlight.loadTexture("build-up-pay/MilestoneHighlightBackground.png", 1);
        this._imgBackgroundHighlight.setUnifySizeEnabled(false);
        this._imgBackgroundHighlight.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBackgroundHighlight, 1, 1);
        this._imgBackgroundHighlight.setTouchEnabled(false);

        ///// # _layoutChest
        this._layoutChest = new ccui.Layout();
        this._layoutChest.setName("_layoutChest");
        this._layoutRoot.addChild(this._layoutChest);
        this._layoutChest.setCascadeOpacityEnabled(true);
        this._layoutChest.setCascadeColorEnabled(true);
        let _layoutChestLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutChest);
        this._layoutChest.setTouchEnabled(false);
        this._layoutChest.setUnifySizeEnabled(false);
        this._layoutChest.ignoreContentAdaptWithSize(false);
        this._layoutChest.setContentSize(cc.size(136.6394, 149));

        ///// # _layoutProgressBar
        this._layoutProgressBar = new ccui.Layout();
        this._layoutProgressBar.setName("_layoutProgressBar");
        this._layoutChest.addChild(this._layoutProgressBar);
        this._layoutProgressBar.setCascadeOpacityEnabled(true);
        this._layoutProgressBar.setCascadeColorEnabled(true);
        this._layoutProgressBar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutProgressBar, 0.5, 0.1074);
        let _layoutProgressBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProgressBar);
        _layoutProgressBarLayoutComponent.setPositionPercentXEnabled(true);
        _layoutProgressBarLayoutComponent.setPositionPercentX(0.5);
        _layoutProgressBarLayoutComponent.setPercentWidthEnabled(true);
        _layoutProgressBarLayoutComponent.setPercentWidth(0.9);
        this._layoutProgressBar.setTouchEnabled(false);
        this._layoutProgressBar.setUnifySizeEnabled(false);
        this._layoutProgressBar.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutProgressBar, 0.9);
        this._layoutProgressBar.setContentSize(cc.size(this._layoutProgressBar.width, 12));

        ///// # _imgProgressBarBackground
        this._imgProgressBarBackground = new ccui.ImageView();
        this._imgProgressBarBackground.setName("_imgProgressBarBackground");
        this._layoutProgressBar.addChild(this._imgProgressBarBackground);
        this._imgProgressBarBackground.setCascadeOpacityEnabled(true);
        this._imgProgressBarBackground.setCascadeColorEnabled(true);
        this._imgProgressBarBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgProgressBarBackground, 0.5, 0.5);
        this._imgProgressBarBackground.setOpacity(127);
        this._imgProgressBarBackground.setColor(cc.color(0, 0, 0, 255));
        let _imgProgressBarBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgProgressBarBackground);
        _imgProgressBarBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgProgressBarBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgProgressBarBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgProgressBarBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgProgressBarBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgProgressBarBackgroundLayoutComponent.setPercentWidth(1);
        _imgProgressBarBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgProgressBarBackgroundLayoutComponent.setPercentHeight(1);
        this._imgProgressBarBackground.loadTexture("basics/shapes/Square.png", 1);
        this._imgProgressBarBackground.setUnifySizeEnabled(false);
        this._imgProgressBarBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgProgressBarBackground, 1, 1);
        this._imgProgressBarBackground.setTouchEnabled(false);

        ///// # _progressBar
        this._progressBar = new ck.LoadingBar();
        this._progressBar.setName("_progressBar");
        this._layoutProgressBar.addChild(this._progressBar);
        this._progressBar.setCascadeOpacityEnabled(true);
        this._progressBar.setCascadeColorEnabled(true);
        this._progressBar.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._progressBar, 0.0015, 0.5);
        let _progressBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._progressBar);
        _progressBarLayoutComponent.setPositionPercentXEnabled(true);
        _progressBarLayoutComponent.setPositionPercentX(0.0015);
        _progressBarLayoutComponent.setPositionPercentYEnabled(true);
        _progressBarLayoutComponent.setPositionPercentY(0.5);
        _progressBarLayoutComponent.setPercentWidthEnabled(true);
        _progressBarLayoutComponent.setPercentWidth(1);
        _progressBarLayoutComponent.setPercentHeightEnabled(true);
        _progressBarLayoutComponent.setPercentHeight(1);
        this._progressBar.setTouchEnabled(false);
        this._progressBar.setUnifySizeEnabled(false);
        this._progressBar.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._progressBar, 1, 1);
        this._progressBar.loadTexture("build-up-pay/MilestoneProgressBar.png", 1);

        ///// # _imgProgressBarNode
        this._imgProgressBarNode = new ccui.ImageView();
        this._imgProgressBarNode.setName("_imgProgressBarNode");
        this._layoutProgressBar.addChild(this._imgProgressBarNode);
        this._imgProgressBarNode.setCascadeOpacityEnabled(true);
        this._imgProgressBarNode.setCascadeColorEnabled(true);
        this._imgProgressBarNode.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgProgressBarNode, 0.79, 0.5);
        let _imgProgressBarNodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgProgressBarNode);
        _imgProgressBarNodeLayoutComponent.setPositionPercentXEnabled(true);
        _imgProgressBarNodeLayoutComponent.setPositionPercentX(0.79);
        _imgProgressBarNodeLayoutComponent.setPositionPercentYEnabled(true);
        _imgProgressBarNodeLayoutComponent.setPositionPercentY(0.5);
        this._imgProgressBarNode.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgProgressBarNode.setUnifySizeEnabled(false);
        this._imgProgressBarNode.ignoreContentAdaptWithSize(false);
        this._imgProgressBarNode.setContentSize(cc.size(24, 24));
        this._imgProgressBarNode.setTouchEnabled(false);

        ///// # _imgProgressBarArrow
        this._imgProgressBarArrow = new ccui.ImageView();
        this._imgProgressBarArrow.setName("_imgProgressBarArrow");
        this._imgProgressBarNode.addChild(this._imgProgressBarArrow);
        this._imgProgressBarArrow.setCascadeOpacityEnabled(true);
        this._imgProgressBarArrow.setCascadeColorEnabled(true);
        this._imgProgressBarArrow.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgProgressBarArrow, 0.5, 1.1387);
        let _imgProgressBarArrowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgProgressBarArrow);
        _imgProgressBarArrowLayoutComponent.setPositionPercentXEnabled(true);
        _imgProgressBarArrowLayoutComponent.setPositionPercentX(0.5);
        _imgProgressBarArrowLayoutComponent.setPositionPercentYEnabled(true);
        _imgProgressBarArrowLayoutComponent.setPositionPercentY(1.1387);
        this._imgProgressBarArrow.loadTexture("build-up-pay/ProgressArrow.png", 1);
        this._imgProgressBarArrow.setUnifySizeEnabled(false);
        this._imgProgressBarArrow.ignoreContentAdaptWithSize(false);
        this._imgProgressBarArrow.setContentSize(cc.size(22, 12));
        this._imgProgressBarArrow.setTouchEnabled(false);

        ///// # _chestWidget
        this._chestWidget = new ChestSpineWidget();
        this._chestWidget.setName("_chestWidget");
        this._layoutChest.addChild(this._chestWidget);
        this._chestWidget.setCascadeOpacityEnabled(true);
        this._chestWidget.setCascadeColorEnabled(true);
        this._chestWidget.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._chestWidget, 0.5, 0.604);
        this._chestWidget.setScale(0.35, 0.35);
        let _chestWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._chestWidget);
        _chestWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _chestWidgetLayoutComponent.setPositionPercentX(0.5);

        ///// # _listviewItems
        this._listviewItems = new ccui.ListView();
        this._listviewItems.setName("_listviewItems");
        this._layoutRoot.addChild(this._listviewItems);
        this._listviewItems.setCascadeOpacityEnabled(true);
        this._listviewItems.setCascadeColorEnabled(true);
        this._listviewItems.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._listviewItems, 0.2316, 0.6);
        let _listviewItemsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._listviewItems);
        this._listviewItems.setTouchEnabled(false);
        this._listviewItems.setUnifySizeEnabled(false);
        this._listviewItems.ignoreContentAdaptWithSize(false);
        this._listviewItems.setContentSize(cc.size(277, 75));
        this._listviewItems.setClippingEnabled(false);
        this._listviewItems.setDirection(ccui.ScrollView.DIR_HORIZONTAL);
        this._listviewItems.setGravity(ccui.ListView.GRAVITY_CENTER_VERTICAL);
        this._listviewItems.setItemsMargin(10);

        ///// # _txtStatus
        this._txtStatus = new ck.CustomRichTextExtend(cc.size(400, 40));
        this._txtStatus.setName("_txtStatus");
        this._layoutRoot.addChild(this._txtStatus);
        this._txtStatus.setCascadeOpacityEnabled(true);
        this._txtStatus.setCascadeColorEnabled(true);
        this._txtStatus.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtStatus, 0.2316, 0.1667);
        let _txtStatusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStatus);
        this._txtStatus.setTouchEnabled(false);
        this._txtStatus.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtStatus.setDefaultSize(30);
        this._txtStatus.setDefaultAlignHorizontal(0);
        this._txtStatus.setDefaultAlignVertical(5);

        ///// # _layoutAction
        this._layoutAction = new ccui.Layout();
        this._layoutAction.setName("_layoutAction");
        this._layoutRoot.addChild(this._layoutAction);
        this._layoutAction.setCascadeOpacityEnabled(true);
        this._layoutAction.setCascadeColorEnabled(true);
        this._layoutAction.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutAction, 0.9931, 0.6033);
        let _layoutActionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAction);
        this._layoutAction.setTouchEnabled(false);
        this._layoutAction.setUnifySizeEnabled(false);
        this._layoutAction.ignoreContentAdaptWithSize(false);
        this._layoutAction.setContentSize(cc.size(164, 75));

        ///// # _btnClaim
        this._btnClaim = new AsyncButton();
        this._btnClaim.setName("_btnClaim");
        this._layoutAction.addChild(this._btnClaim);
        this._btnClaim.setCascadeOpacityEnabled(true);
        this._btnClaim.setCascadeColorEnabled(true);
        this._btnClaim.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnClaim, 0.5, 0.5);
        let _btnClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnClaim);
        _btnClaimLayoutComponent.setPositionPercentXEnabled(true);
        _btnClaimLayoutComponent.setPositionPercentX(0.5);
        _btnClaimLayoutComponent.setPositionPercentYEnabled(true);
        _btnClaimLayoutComponent.setPositionPercentY(0.5);
        this._btnClaim.setUnifySizeEnabled(false);
        this._btnClaim.ignoreContentAdaptWithSize(false);
        this._btnClaim.setContentSize(cc.size(150, 60));
        this._btnClaim.setTouchEnabled(true);

        ///// # _imgButtonClaim
        this._imgButtonClaim = new ccui.ImageView();
        this._imgButtonClaim.setName("_imgButtonClaim");
        this._btnClaim.addChild(this._imgButtonClaim);
        this._imgButtonClaim.setCascadeOpacityEnabled(true);
        this._imgButtonClaim.setCascadeColorEnabled(true);
        this._imgButtonClaim.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonClaim, 0.5, 0.5);
        let _imgButtonClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonClaim);
        _imgButtonClaimLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonClaimLayoutComponent.setPositionPercentX(0.5);
        _imgButtonClaimLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonClaimLayoutComponent.setPositionPercentY(0.5);
        _imgButtonClaimLayoutComponent.setPercentWidthEnabled(true);
        _imgButtonClaimLayoutComponent.setPercentWidth(1);
        _imgButtonClaimLayoutComponent.setPercentHeightEnabled(true);
        _imgButtonClaimLayoutComponent.setPercentHeight(1);
        this._imgButtonClaim.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgButtonClaim.setUnifySizeEnabled(false);
        this._imgButtonClaim.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonClaim, 1, 1);
        this._imgButtonClaim.setTouchEnabled(false);

        ///// # _txtButtonClaim
        this._txtButtonClaim = new ck.Text();
        this._txtButtonClaim.setName("_txtButtonClaim");
        this._btnClaim.addChild(this._txtButtonClaim);
        this._txtButtonClaim.setCascadeOpacityEnabled(true);
        this._txtButtonClaim.setCascadeColorEnabled(true);
        this._txtButtonClaim.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonClaim, 0.5, 0.53);
        let _txtButtonClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonClaim);
        _txtButtonClaimLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonClaimLayoutComponent.setPositionPercentX(0.5);
        _txtButtonClaimLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonClaimLayoutComponent.setPositionPercentY(0.53);
        _txtButtonClaimLayoutComponent.setPercentWidthEnabled(true);
        _txtButtonClaimLayoutComponent.setPercentWidth(0.9);
        this._txtButtonClaim.setTouchEnabled(false);
        this._txtButtonClaim.setUnifySizeEnabled(false);
        this._txtButtonClaim.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtButtonClaim, 0.9);
        this._txtButtonClaim.setContentSize(cc.size(this._txtButtonClaim.width, 43));
        this._txtButtonClaim.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonClaim.setDefaultFontSize(35);
        this._txtButtonClaim.setString(gm.localize.getText("TXT_CLAIM"));
        this._txtButtonClaim.setTextHorizontalAlignment(1);
        this._txtButtonClaim.setTextVerticalAlignment(1);
        this._txtButtonClaim.enableOutline(cc.color(0, 105, 66, 255), 2);
        this._txtButtonClaim.autoFitSingleLine();

        ///// # _imgLoadingButtonClaim
        this._imgLoadingButtonClaim = new ccui.ImageView();
        this._imgLoadingButtonClaim.setName("_imgLoadingButtonClaim");
        this._btnClaim.addChild(this._imgLoadingButtonClaim);
        this._imgLoadingButtonClaim.setCascadeOpacityEnabled(true);
        this._imgLoadingButtonClaim.setCascadeColorEnabled(true);
        this._imgLoadingButtonClaim.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLoadingButtonClaim, 0.5, 0.54);
        this._imgLoadingButtonClaim.setVisible(false);
        let _imgLoadingButtonClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoadingButtonClaim);
        _imgLoadingButtonClaimLayoutComponent.setPositionPercentXEnabled(true);
        _imgLoadingButtonClaimLayoutComponent.setPositionPercentX(0.5);
        _imgLoadingButtonClaimLayoutComponent.setPositionPercentYEnabled(true);
        _imgLoadingButtonClaimLayoutComponent.setPositionPercentY(0.54);
        this._imgLoadingButtonClaim.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgLoadingButtonClaim.setUnifySizeEnabled(false);
        this._imgLoadingButtonClaim.ignoreContentAdaptWithSize(false);
        this._imgLoadingButtonClaim.setContentSize(cc.size(48, 48));
        this._imgLoadingButtonClaim.setTouchEnabled(false);

        ///// # _imgClaimedLabel
        this._imgClaimedLabel = new ccui.ImageView();
        this._imgClaimedLabel.setName("_imgClaimedLabel");
        this._layoutAction.addChild(this._imgClaimedLabel);
        this._imgClaimedLabel.setCascadeOpacityEnabled(true);
        this._imgClaimedLabel.setCascadeColorEnabled(true);
        this._imgClaimedLabel.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClaimedLabel, 0.5, 0.5);
        let _imgClaimedLabelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClaimedLabel);
        _imgClaimedLabelLayoutComponent.setPositionPercentXEnabled(true);
        _imgClaimedLabelLayoutComponent.setPositionPercentX(0.5);
        _imgClaimedLabelLayoutComponent.setPositionPercentYEnabled(true);
        _imgClaimedLabelLayoutComponent.setPositionPercentY(0.5);
        this._imgClaimedLabel.loadTexture("build-up-pay/ReceivedLabel.png", 1);
        this._imgClaimedLabel.setUnifySizeEnabled(false);
        this._imgClaimedLabel.ignoreContentAdaptWithSize(false);
        this._imgClaimedLabel.setScale9Enabled(true);
        this._imgClaimedLabel.setCapInsets(cc.rect(27, 16, 100, 14));
        this._imgClaimedLabel.setContentSize(cc.size(154, 46));
        this._imgClaimedLabel.setTouchEnabled(false);

        ///// # _txtClaimedLabel
        this._txtClaimedLabel = new ck.Text();
        this._txtClaimedLabel.setName("_txtClaimedLabel");
        this._imgClaimedLabel.addChild(this._txtClaimedLabel);
        this._txtClaimedLabel.setCascadeOpacityEnabled(true);
        this._txtClaimedLabel.setCascadeColorEnabled(true);
        this._txtClaimedLabel.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtClaimedLabel, 0.5, 0.5);
        this._txtClaimedLabel.setRotationY(-0.0005);
        this._txtClaimedLabel.setTextColor(cc.color(157, 110, 255, 255));
        let _txtClaimedLabelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtClaimedLabel);
        _txtClaimedLabelLayoutComponent.setPositionPercentXEnabled(true);
        _txtClaimedLabelLayoutComponent.setPositionPercentX(0.5);
        _txtClaimedLabelLayoutComponent.setPositionPercentYEnabled(true);
        _txtClaimedLabelLayoutComponent.setPositionPercentY(0.5);
        this._txtClaimedLabel.setTouchEnabled(false);
        this._txtClaimedLabel.setUnifySizeEnabled(false);
        this._txtClaimedLabel.ignoreContentAdaptWithSize(false);
        this._txtClaimedLabel.setContentSize(cc.size(135, 39));
        this._txtClaimedLabel.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtClaimedLabel.setDefaultFontSize(35);
        this._txtClaimedLabel.setString(gm.localize.getText("TXT_CLAIMED"));
        this._txtClaimedLabel.setTextHorizontalAlignment(1);
        this._txtClaimedLabel.setTextVerticalAlignment(1);
        this._txtClaimedLabel.autoFitSingleLine();

        ///// # _btnPurchase
        this._btnPurchase = new AsyncButton();
        this._btnPurchase.setName("_btnPurchase");
        this._layoutAction.addChild(this._btnPurchase);
        this._btnPurchase.setCascadeOpacityEnabled(true);
        this._btnPurchase.setCascadeColorEnabled(true);
        this._btnPurchase.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnPurchase, 0.5, 0.5);
        let _btnPurchaseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnPurchase);
        _btnPurchaseLayoutComponent.setPositionPercentXEnabled(true);
        _btnPurchaseLayoutComponent.setPositionPercentX(0.5);
        _btnPurchaseLayoutComponent.setPositionPercentYEnabled(true);
        _btnPurchaseLayoutComponent.setPositionPercentY(0.5);
        this._btnPurchase.setUnifySizeEnabled(false);
        this._btnPurchase.ignoreContentAdaptWithSize(false);
        this._btnPurchase.setContentSize(cc.size(150, 60));
        this._btnPurchase.setTouchEnabled(true);

        ///// # _imgButtonPurchase
        this._imgButtonPurchase = new ccui.ImageView();
        this._imgButtonPurchase.setName("_imgButtonPurchase");
        this._btnPurchase.addChild(this._imgButtonPurchase);
        this._imgButtonPurchase.setCascadeOpacityEnabled(true);
        this._imgButtonPurchase.setCascadeColorEnabled(true);
        this._imgButtonPurchase.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonPurchase, 0.5, 0.5);
        let _imgButtonPurchaseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonPurchase);
        _imgButtonPurchaseLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonPurchaseLayoutComponent.setPositionPercentX(0.5);
        _imgButtonPurchaseLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonPurchaseLayoutComponent.setPositionPercentY(0.5);
        _imgButtonPurchaseLayoutComponent.setPercentWidthEnabled(true);
        _imgButtonPurchaseLayoutComponent.setPercentWidth(1);
        _imgButtonPurchaseLayoutComponent.setPercentHeightEnabled(true);
        _imgButtonPurchaseLayoutComponent.setPercentHeight(1);
        this._imgButtonPurchase.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgButtonPurchase.setUnifySizeEnabled(false);
        this._imgButtonPurchase.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonPurchase, 1, 1);
        this._imgButtonPurchase.setTouchEnabled(false);

        ///// # _txtButtonPurchase
        this._txtButtonPurchase = new ck.Text();
        this._txtButtonPurchase.setName("_txtButtonPurchase");
        this._btnPurchase.addChild(this._txtButtonPurchase);
        this._txtButtonPurchase.setCascadeOpacityEnabled(true);
        this._txtButtonPurchase.setCascadeColorEnabled(true);
        this._txtButtonPurchase.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonPurchase, 0.5, 0.53);
        let _txtButtonPurchaseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonPurchase);
        _txtButtonPurchaseLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonPurchaseLayoutComponent.setPositionPercentX(0.5);
        _txtButtonPurchaseLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonPurchaseLayoutComponent.setPositionPercentY(0.53);
        _txtButtonPurchaseLayoutComponent.setPercentWidthEnabled(true);
        _txtButtonPurchaseLayoutComponent.setPercentWidth(0.9);
        this._txtButtonPurchase.setTouchEnabled(false);
        this._txtButtonPurchase.setUnifySizeEnabled(false);
        this._txtButtonPurchase.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtButtonPurchase, 0.9);
        this._txtButtonPurchase.setContentSize(cc.size(this._txtButtonPurchase.width, 43));
        this._txtButtonPurchase.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonPurchase.setDefaultFontSize(35);
        this._txtButtonPurchase.setString(gm.localize.getText("TXT_PURCHASE"));
        this._txtButtonPurchase.setTextHorizontalAlignment(1);
        this._txtButtonPurchase.setTextVerticalAlignment(1);
        this._txtButtonPurchase.enableOutline(cc.color(126, 72, 0, 255), 2);
        this._txtButtonPurchase.autoFitSingleLine();

        ///// # _imgLoadingButtonPurchase
        this._imgLoadingButtonPurchase = new ccui.ImageView();
        this._imgLoadingButtonPurchase.setName("_imgLoadingButtonPurchase");
        this._btnPurchase.addChild(this._imgLoadingButtonPurchase);
        this._imgLoadingButtonPurchase.setCascadeOpacityEnabled(true);
        this._imgLoadingButtonPurchase.setCascadeColorEnabled(true);
        this._imgLoadingButtonPurchase.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLoadingButtonPurchase, 0.5, 0.54);
        this._imgLoadingButtonPurchase.setVisible(false);
        let _imgLoadingButtonPurchaseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoadingButtonPurchase);
        _imgLoadingButtonPurchaseLayoutComponent.setPositionPercentXEnabled(true);
        _imgLoadingButtonPurchaseLayoutComponent.setPositionPercentX(0.5);
        _imgLoadingButtonPurchaseLayoutComponent.setPositionPercentYEnabled(true);
        _imgLoadingButtonPurchaseLayoutComponent.setPositionPercentY(0.54);
        this._imgLoadingButtonPurchase.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgLoadingButtonPurchase.setUnifySizeEnabled(false);
        this._imgLoadingButtonPurchase.ignoreContentAdaptWithSize(false);
        this._imgLoadingButtonPurchase.setContentSize(cc.size(48, 48));
        this._imgLoadingButtonPurchase.setTouchEnabled(false);

    },



});

/**
 * Create BuildUpPayMilestoneWidget
 * @returns {_ccs.BuildUpPayMilestoneWidget}
 */
_ccs.BuildUpPayMilestoneWidget.create = function () {
    return new _ccs.BuildUpPayMilestoneWidget();
};
