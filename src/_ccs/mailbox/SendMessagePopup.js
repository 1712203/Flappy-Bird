/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.SendMessagePopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.SendMessagePopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.Layout} */
    _layoutBackground: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundBack: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundFront: null,
    /** @type {ccui.Layout} */
    _layoutTitle: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundTitle: null,
    /** @type {ck.Text} */
    _txtTitle: null,
    /** @type {ccui.Layout} */
    _layoutClose: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.Layout} */
    _layoutInputReceiver: null,
    /** @type {ck.Text} */
    _txtReceiver: null,
    /** @type {ck.EditBox} */
    _editBoxReceiver: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxBackground: null,
    /** @type {ccui.ImageView} */
    _imgEditBoxBackground: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxText: null,
    /** @type {ck.Text} */
    _txtEditBoxTextDisplay: null,
    /** @type {ccui.Layout} */
    _layoutInputContent: null,
    /** @type {ck.Text} */
    _txtContent: null,
    /** @type {ck.EditBox} */
    _editBoxContent: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxBackground: null,
    /** @type {ccui.ImageView} */
    _imgEditBoxBackground: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxText: null,
    /** @type {ck.Text} */
    _txtEditBoxTextDisplay: null,
    /** @type {ccui.Layout} */
    _layoutBtnSend: null,
    /** @type {ccui.ImageView} */
    _imgBtnSend: null,
    /** @type {ck.Text} */
    _txtSend: null,


    /**
     * _ccs.SendMessagePopup constructor
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

        ///// # _layoutPopup
        this._layoutPopup = new ccui.Layout();
        this._layoutPopup.setName("_layoutPopup");
        this.addChild(this._layoutPopup);
        this._layoutPopup.setCascadeOpacityEnabled(true);
        this._layoutPopup.setCascadeColorEnabled(true);
        this._layoutPopup.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        this._layoutPopup.setTouchEnabled(true);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(520, 453.3777));

        ///// # _layoutBackground
        this._layoutBackground = new ccui.Layout();
        this._layoutBackground.setName("_layoutBackground");
        this._layoutPopup.addChild(this._layoutBackground);
        this._layoutBackground.setCascadeOpacityEnabled(true);
        this._layoutBackground.setCascadeColorEnabled(true);
        this._layoutBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBackground, 0.5, 0.5);
        let _layoutBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBackground);
        _layoutBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBackgroundLayoutComponent.setPositionPercentX(0.5);
        _layoutBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBackgroundLayoutComponent.setPositionPercentY(0.5);
        _layoutBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentWidth(1);
        _layoutBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentHeight(1);
        this._layoutBackground.setTouchEnabled(true);
        this._layoutBackground.setUnifySizeEnabled(false);
        this._layoutBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBackground, 1, 1);

        ///// # _imgBackgroundBack
        this._imgBackgroundBack = new ccui.ImageView();
        this._imgBackgroundBack.setName("_imgBackgroundBack");
        this._layoutBackground.addChild(this._imgBackgroundBack);
        this._imgBackgroundBack.setCascadeOpacityEnabled(true);
        this._imgBackgroundBack.setCascadeColorEnabled(true);
        this._imgBackgroundBack.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundBack, 0.5, 0.5);
        let _imgBackgroundBackLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundBack);
        _imgBackgroundBackLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundBackLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundBackLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundBackLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundBackLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundBackLayoutComponent.setPercentWidth(1);
        _imgBackgroundBackLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundBackLayoutComponent.setPercentHeight(1);
        this._imgBackgroundBack.loadTexture("basics/popup/Back.png", 1);
        this._imgBackgroundBack.setUnifySizeEnabled(false);
        this._imgBackgroundBack.ignoreContentAdaptWithSize(false);
        this._imgBackgroundBack.setScale9Enabled(true);
        this._imgBackgroundBack.setCapInsets(cc.rect(69, 57, 72, 61));
        ck.UIUtils.setSizePercent(this._imgBackgroundBack, 1, 1);
        this._imgBackgroundBack.setTouchEnabled(false);

        ///// # _imgBackgroundFront
        this._imgBackgroundFront = new ccui.ImageView();
        this._imgBackgroundFront.setName("_imgBackgroundFront");
        this._layoutBackground.addChild(this._imgBackgroundFront);
        this._imgBackgroundFront.setCascadeOpacityEnabled(true);
        this._imgBackgroundFront.setCascadeColorEnabled(true);
        this._imgBackgroundFront.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundFront, 0.5, 0.5);
        let _imgBackgroundFrontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundFront);
        _imgBackgroundFrontLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundFrontLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundFrontLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPercentWidth(0.95);
        _imgBackgroundFrontLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPercentHeight(0.96);
        this._imgBackgroundFront.loadTexture("basics/popup/Font.png", 1);
        this._imgBackgroundFront.setUnifySizeEnabled(false);
        this._imgBackgroundFront.ignoreContentAdaptWithSize(false);
        this._imgBackgroundFront.setScale9Enabled(true);
        this._imgBackgroundFront.setCapInsets(cc.rect(69, 57, 15, 31));
        ck.UIUtils.setSizePercent(this._imgBackgroundFront, 0.95, 0.96);
        this._imgBackgroundFront.setTouchEnabled(false);

        ///// # _layoutTitle
        this._layoutTitle = new ccui.Layout();
        this._layoutTitle.setName("_layoutTitle");
        this._layoutPopup.addChild(this._layoutTitle);
        this._layoutTitle.setCascadeOpacityEnabled(true);
        this._layoutTitle.setCascadeColorEnabled(true);
        this._layoutTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTitle, 0.5, 1);
        let _layoutTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTitle);
        _layoutTitleLayoutComponent.setPositionPercentXEnabled(true);
        _layoutTitleLayoutComponent.setPositionPercentX(0.5);
        _layoutTitleLayoutComponent.setPositionPercentYEnabled(true);
        _layoutTitleLayoutComponent.setPositionPercentY(1);
        this._layoutTitle.setTouchEnabled(false);
        this._layoutTitle.setUnifySizeEnabled(false);
        this._layoutTitle.ignoreContentAdaptWithSize(false);
        this._layoutTitle.setContentSize(cc.size(369.2084, 88.5504));

        ///// # _imgBackgroundTitle
        this._imgBackgroundTitle = new ccui.ImageView();
        this._imgBackgroundTitle.setName("_imgBackgroundTitle");
        this._layoutTitle.addChild(this._imgBackgroundTitle);
        this._imgBackgroundTitle.setCascadeOpacityEnabled(true);
        this._imgBackgroundTitle.setCascadeColorEnabled(true);
        this._imgBackgroundTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundTitle, 0.5, 0.5);
        let _imgBackgroundTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundTitle);
        _imgBackgroundTitleLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundTitleLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundTitleLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundTitleLayoutComponent.setPositionPercentY(0.5);
        this._imgBackgroundTitle.loadTexture("basics/popup/HeaderBlue.png", 1);
        this._imgBackgroundTitle.setUnifySizeEnabled(false);
        this._imgBackgroundTitle.ignoreContentAdaptWithSize(false);
        this._imgBackgroundTitle.setContentSize(cc.size(360, 84));
        this._imgBackgroundTitle.setTouchEnabled(false);

        ///// # _txtTitle
        this._txtTitle = new ck.Text();
        this._txtTitle.setName("_txtTitle");
        this._layoutTitle.addChild(this._txtTitle);
        this._txtTitle.setCascadeOpacityEnabled(true);
        this._txtTitle.setCascadeColorEnabled(true);
        this._txtTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle, 0.5, 0.52);
        this._txtTitle.setTextColor(cc.color(255, 252, 225, 255));
        let _txtTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle);
        _txtTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentX(0.5);
        _txtTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentY(0.52);
        this._txtTitle.setTouchEnabled(false);
        this._txtTitle.ignoreContentAdaptWithSize(true);
        this._txtTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTitle.setDefaultFontSize(55);
        this._txtTitle.setString(gm.localize.getText("TXT_NEW_MESSAGE"));
        this._txtTitle.setTextHorizontalAlignment(0);
        this._txtTitle.setTextVerticalAlignment(0);
        this._txtTitle.enableOutline(cc.color(155, 68, 38, 255), 2);
        this._txtTitle.enableShadow(cc.color(155, 68, 38, 255), cc.size(0, -2), 0);

        ///// # _layoutClose
        this._layoutClose = new ccui.Layout();
        this._layoutClose.setName("_layoutClose");
        this._layoutPopup.addChild(this._layoutClose);
        this._layoutClose.setCascadeOpacityEnabled(true);
        this._layoutClose.setCascadeColorEnabled(true);
        this._layoutClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutClose, 0.99, 0.99);
        let _layoutCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutClose);
        _layoutCloseLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentX(0.99);
        _layoutCloseLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentY(0.99);
        this._layoutClose.setTouchEnabled(true);
        this._layoutClose.setUnifySizeEnabled(false);
        this._layoutClose.ignoreContentAdaptWithSize(false);
        this._layoutClose.setContentSize(cc.size(50, 50));

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._layoutClose.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.5, 0.5);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.5);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.5);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(63, 58));
        this._imgClose.setTouchEnabled(false);

        ///// # _layoutInputReceiver
        this._layoutInputReceiver = new ccui.Layout();
        this._layoutInputReceiver.setName("_layoutInputReceiver");
        this._layoutPopup.addChild(this._layoutInputReceiver);
        this._layoutInputReceiver.setCascadeOpacityEnabled(true);
        this._layoutInputReceiver.setCascadeColorEnabled(true);
        this._layoutInputReceiver.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutInputReceiver, 0.5, 0.9117);
        let _layoutInputReceiverLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInputReceiver);
        _layoutInputReceiverLayoutComponent.setPositionPercentXEnabled(true);
        _layoutInputReceiverLayoutComponent.setPositionPercentX(0.5);
        _layoutInputReceiverLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _layoutInputReceiverLayoutComponent.setTopMargin(40.0117);
        this._layoutInputReceiver.setTouchEnabled(true);
        this._layoutInputReceiver.setUnifySizeEnabled(false);
        this._layoutInputReceiver.ignoreContentAdaptWithSize(false);
        this._layoutInputReceiver.setContentSize(cc.size(462, 94));

        ///// # _txtReceiver
        this._txtReceiver = new ck.Text();
        this._txtReceiver.setName("_txtReceiver");
        this._layoutInputReceiver.addChild(this._txtReceiver);
        this._txtReceiver.setCascadeOpacityEnabled(true);
        this._txtReceiver.setCascadeColorEnabled(true);
        this._txtReceiver.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtReceiver, 0.2381, 0.5936);
        this._txtReceiver.setTextColor(cc.color(98, 80, 66, 255));
        let _txtReceiverLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtReceiver);
        this._txtReceiver.setTouchEnabled(false);
        this._txtReceiver.ignoreContentAdaptWithSize(true);
        this._txtReceiver.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtReceiver.setDefaultFontSize(32);
        this._txtReceiver.setTextHorizontalAlignment(0);
        this._txtReceiver.setTextVerticalAlignment(0);

        ///// # _editBoxReceiver
        this._editBoxReceiver = new ck.EditBox();
        this._editBoxReceiver.setName("_editBoxReceiver");
        this._layoutInputReceiver.addChild(this._editBoxReceiver);
        this._editBoxReceiver.setCascadeOpacityEnabled(true);
        this._editBoxReceiver.setCascadeColorEnabled(true);
        this._editBoxReceiver.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxReceiver, 0.2706, 0.5897);
        let _editBoxReceiverLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxReceiver);
        this._editBoxReceiver.setUnifySizeEnabled(false);
        this._editBoxReceiver.ignoreContentAdaptWithSize(false);
        this._editBoxReceiver.setContentSize(cc.size(336, 61));
        this._editBoxReceiver.setTouchEnabled(false);

        ///// # _layoutEditBoxBackground
        this._layoutEditBoxBackground = new ccui.Layout();
        this._layoutEditBoxBackground.setName("_layoutEditBoxBackground");
        this._editBoxReceiver.addChild(this._layoutEditBoxBackground);
        this._layoutEditBoxBackground.setCascadeOpacityEnabled(true);
        this._layoutEditBoxBackground.setCascadeColorEnabled(true);
        let _layoutEditBoxBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEditBoxBackground);
        _layoutEditBoxBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _layoutEditBoxBackgroundLayoutComponent.setPercentWidth(1);
        _layoutEditBoxBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _layoutEditBoxBackgroundLayoutComponent.setPercentHeight(1);
        this._layoutEditBoxBackground.setTouchEnabled(true);
        this._layoutEditBoxBackground.setUnifySizeEnabled(false);
        this._layoutEditBoxBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutEditBoxBackground, 1, 1);

        ///// # _imgEditBoxBackground
        this._imgEditBoxBackground = new ccui.ImageView();
        this._imgEditBoxBackground.setName("_imgEditBoxBackground");
        this._layoutEditBoxBackground.addChild(this._imgEditBoxBackground);
        this._imgEditBoxBackground.setCascadeOpacityEnabled(true);
        this._imgEditBoxBackground.setCascadeColorEnabled(true);
        this._imgEditBoxBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgEditBoxBackground, 0.5, 0.5);
        this._imgEditBoxBackground.setColor(cc.color(223, 205, 183, 255));
        let _imgEditBoxBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgEditBoxBackground);
        _imgEditBoxBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgEditBoxBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgEditBoxBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgEditBoxBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgEditBoxBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgEditBoxBackgroundLayoutComponent.setPercentWidth(1);
        _imgEditBoxBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgEditBoxBackgroundLayoutComponent.setPercentHeight(1);
        this._imgEditBoxBackground.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgEditBoxBackground.setUnifySizeEnabled(false);
        this._imgEditBoxBackground.ignoreContentAdaptWithSize(false);
        this._imgEditBoxBackground.setScale9Enabled(true);
        this._imgEditBoxBackground.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgEditBoxBackground, 1, 1);
        this._imgEditBoxBackground.setTouchEnabled(false);

        ///// # _layoutEditBoxText
        this._layoutEditBoxText = new ccui.Layout();
        this._layoutEditBoxText.setName("_layoutEditBoxText");
        this._editBoxReceiver.addChild(this._layoutEditBoxText);
        this._layoutEditBoxText.setCascadeOpacityEnabled(true);
        this._layoutEditBoxText.setCascadeColorEnabled(true);
        this._layoutEditBoxText.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutEditBoxText, 0.05, 0.5);
        let _layoutEditBoxTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEditBoxText);
        _layoutEditBoxTextLayoutComponent.setPositionPercentXEnabled(true);
        _layoutEditBoxTextLayoutComponent.setPositionPercentX(0.05);
        _layoutEditBoxTextLayoutComponent.setPositionPercentYEnabled(true);
        _layoutEditBoxTextLayoutComponent.setPositionPercentY(0.5);
        _layoutEditBoxTextLayoutComponent.setPercentWidthEnabled(true);
        _layoutEditBoxTextLayoutComponent.setPercentWidth(0.9);
        _layoutEditBoxTextLayoutComponent.setPercentHeightEnabled(true);
        _layoutEditBoxTextLayoutComponent.setPercentHeight(1);
        this._layoutEditBoxText.setTouchEnabled(false);
        this._layoutEditBoxText.setUnifySizeEnabled(false);
        this._layoutEditBoxText.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutEditBoxText, 0.9, 1);
        this._layoutEditBoxText.setClippingEnabled(true);

        ///// # _txtEditBoxTextDisplay
        this._txtEditBoxTextDisplay = new ck.Text();
        this._txtEditBoxTextDisplay.setName("_txtEditBoxTextDisplay");
        this._layoutEditBoxText.addChild(this._txtEditBoxTextDisplay);
        this._txtEditBoxTextDisplay.setCascadeOpacityEnabled(true);
        this._txtEditBoxTextDisplay.setCascadeColorEnabled(true);
        this._txtEditBoxTextDisplay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtEditBoxTextDisplay, 0.5, 0.5);
        this._txtEditBoxTextDisplay.setTextColor(cc.color(98, 80, 66, 255));
        let _txtEditBoxTextDisplayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtEditBoxTextDisplay);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentXEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentX(0.5);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentYEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentY(0.5);
        this._txtEditBoxTextDisplay.setTouchEnabled(false);
        this._txtEditBoxTextDisplay.ignoreContentAdaptWithSize(true);
        this._txtEditBoxTextDisplay.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtEditBoxTextDisplay.setDefaultFontSize(40);
        this._txtEditBoxTextDisplay.setString(gm.localize.getText("TXT_TAP_TO_ENTER"));
        this._txtEditBoxTextDisplay.setTextHorizontalAlignment(1);
        this._txtEditBoxTextDisplay.setTextVerticalAlignment(1);

        ///// # _initEditBox for this._editBoxReceiver;
        this._editBoxReceiver._initEditBox();

        ///// # _layoutInputContent
        this._layoutInputContent = new ccui.Layout();
        this._layoutInputContent.setName("_layoutInputContent");
        this._layoutPopup.addChild(this._layoutInputContent);
        this._layoutInputContent.setCascadeOpacityEnabled(true);
        this._layoutInputContent.setCascadeColorEnabled(true);
        this._layoutInputContent.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutInputContent, 0.5, 0.7558);
        let _layoutInputContentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInputContent);
        _layoutInputContentLayoutComponent.setPositionPercentXEnabled(true);
        _layoutInputContentLayoutComponent.setPositionPercentX(0.5);
        _layoutInputContentLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _layoutInputContentLayoutComponent.setTopMargin(110.7017);
        this._layoutInputContent.setTouchEnabled(true);
        this._layoutInputContent.setUnifySizeEnabled(false);
        this._layoutInputContent.ignoreContentAdaptWithSize(false);
        this._layoutInputContent.setContentSize(cc.size(462, 208.6939));

        ///// # _txtContent
        this._txtContent = new ck.Text();
        this._txtContent.setName("_txtContent");
        this._layoutInputContent.addChild(this._txtContent);
        this._txtContent.setCascadeOpacityEnabled(true);
        this._txtContent.setCascadeColorEnabled(true);
        this._txtContent.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtContent, 0.2381, 0.9046);
        this._txtContent.setTextColor(cc.color(98, 80, 66, 255));
        let _txtContentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtContent);
        _txtContentLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _txtContentLayoutComponent.setTopMargin(3.4);
        this._txtContent.setTouchEnabled(false);
        this._txtContent.ignoreContentAdaptWithSize(true);
        this._txtContent.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtContent.setDefaultFontSize(30);
        this._txtContent.setTextHorizontalAlignment(0);
        this._txtContent.setTextVerticalAlignment(0);

        ///// # _editBoxContent
        this._editBoxContent = new ck.EditBox();
        this._editBoxContent.setName("_editBoxContent");
        this._layoutInputContent.addChild(this._editBoxContent);
        this._editBoxContent.setCascadeOpacityEnabled(true);
        this._editBoxContent.setCascadeColorEnabled(true);
        this._editBoxContent.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._editBoxContent, 0.2706, 0.9765);
        let _editBoxContentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxContent);
        _editBoxContentLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _editBoxContentLayoutComponent.setTopMargin(4.9);
        this._editBoxContent.setUnifySizeEnabled(false);
        this._editBoxContent.ignoreContentAdaptWithSize(false);
        this._editBoxContent.setContentSize(cc.size(336, 200));
        this._editBoxContent.setTouchEnabled(false);

        ///// # _layoutEditBoxBackground
        this._layoutEditBoxBackground = new ccui.Layout();
        this._layoutEditBoxBackground.setName("_layoutEditBoxBackground");
        this._editBoxContent.addChild(this._layoutEditBoxBackground);
        this._layoutEditBoxBackground.setCascadeOpacityEnabled(true);
        this._layoutEditBoxBackground.setCascadeColorEnabled(true);
        let _layoutEditBoxBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEditBoxBackground);
        _layoutEditBoxBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _layoutEditBoxBackgroundLayoutComponent.setPercentWidth(1);
        _layoutEditBoxBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _layoutEditBoxBackgroundLayoutComponent.setPercentHeight(1);
        this._layoutEditBoxBackground.setTouchEnabled(true);
        this._layoutEditBoxBackground.setUnifySizeEnabled(false);
        this._layoutEditBoxBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutEditBoxBackground, 1, 1);

        ///// # _imgEditBoxBackground
        this._imgEditBoxBackground = new ccui.ImageView();
        this._imgEditBoxBackground.setName("_imgEditBoxBackground");
        this._layoutEditBoxBackground.addChild(this._imgEditBoxBackground);
        this._imgEditBoxBackground.setCascadeOpacityEnabled(true);
        this._imgEditBoxBackground.setCascadeColorEnabled(true);
        this._imgEditBoxBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgEditBoxBackground, 0.5, 0.5);
        this._imgEditBoxBackground.setColor(cc.color(223, 205, 183, 255));
        let _imgEditBoxBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgEditBoxBackground);
        _imgEditBoxBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgEditBoxBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgEditBoxBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgEditBoxBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgEditBoxBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgEditBoxBackgroundLayoutComponent.setPercentWidth(1);
        _imgEditBoxBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgEditBoxBackgroundLayoutComponent.setPercentHeight(1);
        this._imgEditBoxBackground.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgEditBoxBackground.setUnifySizeEnabled(false);
        this._imgEditBoxBackground.ignoreContentAdaptWithSize(false);
        this._imgEditBoxBackground.setScale9Enabled(true);
        this._imgEditBoxBackground.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgEditBoxBackground, 1, 1);
        this._imgEditBoxBackground.setTouchEnabled(false);

        ///// # _layoutEditBoxText
        this._layoutEditBoxText = new ccui.Layout();
        this._layoutEditBoxText.setName("_layoutEditBoxText");
        this._editBoxContent.addChild(this._layoutEditBoxText);
        this._layoutEditBoxText.setCascadeOpacityEnabled(true);
        this._layoutEditBoxText.setCascadeColorEnabled(true);
        this._layoutEditBoxText.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutEditBoxText, 0.05, 0.5);
        let _layoutEditBoxTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEditBoxText);
        _layoutEditBoxTextLayoutComponent.setPositionPercentXEnabled(true);
        _layoutEditBoxTextLayoutComponent.setPositionPercentX(0.05);
        _layoutEditBoxTextLayoutComponent.setPositionPercentYEnabled(true);
        _layoutEditBoxTextLayoutComponent.setPositionPercentY(0.5);
        _layoutEditBoxTextLayoutComponent.setPercentWidthEnabled(true);
        _layoutEditBoxTextLayoutComponent.setPercentWidth(0.9);
        _layoutEditBoxTextLayoutComponent.setPercentHeightEnabled(true);
        _layoutEditBoxTextLayoutComponent.setPercentHeight(0.8799);
        this._layoutEditBoxText.setTouchEnabled(false);
        this._layoutEditBoxText.setUnifySizeEnabled(false);
        this._layoutEditBoxText.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutEditBoxText, 0.9, 0.8799);
        this._layoutEditBoxText.setClippingEnabled(true);

        ///// # _txtEditBoxTextDisplay
        this._txtEditBoxTextDisplay = new ck.Text();
        this._txtEditBoxTextDisplay.setName("_txtEditBoxTextDisplay");
        this._layoutEditBoxText.addChild(this._txtEditBoxTextDisplay);
        this._txtEditBoxTextDisplay.setCascadeOpacityEnabled(true);
        this._txtEditBoxTextDisplay.setCascadeColorEnabled(true);
        this._txtEditBoxTextDisplay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtEditBoxTextDisplay, 0.5, 0.5);
        this._txtEditBoxTextDisplay.setTextColor(cc.color(98, 80, 66, 255));
        let _txtEditBoxTextDisplayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtEditBoxTextDisplay);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentXEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentX(0.5);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentYEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentY(0.5);
        _txtEditBoxTextDisplayLayoutComponent.setPercentWidthEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPercentWidth(1);
        _txtEditBoxTextDisplayLayoutComponent.setPercentHeightEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPercentHeight(1);
        this._txtEditBoxTextDisplay.setTouchEnabled(false);
        this._txtEditBoxTextDisplay.setUnifySizeEnabled(false);
        this._txtEditBoxTextDisplay.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtEditBoxTextDisplay, 1, 1);
        this._txtEditBoxTextDisplay.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtEditBoxTextDisplay.setDefaultFontSize(50);
        this._txtEditBoxTextDisplay.setString(gm.localize.getText("TXT_TAP_TO_ENTER"));
        this._txtEditBoxTextDisplay.setTextHorizontalAlignment(0);
        this._txtEditBoxTextDisplay.setTextVerticalAlignment(0);

        ///// # _initEditBox for this._editBoxContent;
        this._editBoxContent._initEditBox();

        ///// # _layoutBtnSend
        this._layoutBtnSend = new ccui.Layout();
        this._layoutBtnSend.setName("_layoutBtnSend");
        this._layoutPopup.addChild(this._layoutBtnSend);
        this._layoutBtnSend.setCascadeOpacityEnabled(true);
        this._layoutBtnSend.setCascadeColorEnabled(true);
        this._layoutBtnSend.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBtnSend, 0.5, 0.1809);
        let _layoutBtnSendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBtnSend);
        _layoutBtnSendLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBtnSendLayoutComponent.setPositionPercentX(0.5);
        this._layoutBtnSend.setTouchEnabled(true);
        this._layoutBtnSend.setUnifySizeEnabled(false);
        this._layoutBtnSend.ignoreContentAdaptWithSize(false);
        this._layoutBtnSend.setContentSize(cc.size(205.2838, 79.3905));

        ///// # _imgBtnSend
        this._imgBtnSend = new ccui.ImageView();
        this._imgBtnSend.setName("_imgBtnSend");
        this._layoutBtnSend.addChild(this._imgBtnSend);
        this._imgBtnSend.setCascadeOpacityEnabled(true);
        this._imgBtnSend.setCascadeColorEnabled(true);
        this._imgBtnSend.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBtnSend, 0.5, 0.5);
        let _imgBtnSendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBtnSend);
        _imgBtnSendLayoutComponent.setPositionPercentXEnabled(true);
        _imgBtnSendLayoutComponent.setPositionPercentX(0.5);
        _imgBtnSendLayoutComponent.setPositionPercentYEnabled(true);
        _imgBtnSendLayoutComponent.setPositionPercentY(0.5);
        this._imgBtnSend.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgBtnSend.setUnifySizeEnabled(false);
        this._imgBtnSend.ignoreContentAdaptWithSize(false);
        this._imgBtnSend.setContentSize(cc.size(206, 81));
        this._imgBtnSend.setTouchEnabled(false);

        ///// # _txtSend
        this._txtSend = new ck.Text();
        this._txtSend.setName("_txtSend");
        this._layoutBtnSend.addChild(this._txtSend);
        this._txtSend.setCascadeOpacityEnabled(true);
        this._txtSend.setCascadeColorEnabled(true);
        this._txtSend.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtSend, 0.5, 0.52);
        let _txtSendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSend);
        _txtSendLayoutComponent.setPositionPercentXEnabled(true);
        _txtSendLayoutComponent.setPositionPercentX(0.5);
        _txtSendLayoutComponent.setPositionPercentYEnabled(true);
        _txtSendLayoutComponent.setPositionPercentY(0.52);
        this._txtSend.setTouchEnabled(false);
        this._txtSend.ignoreContentAdaptWithSize(true);
        this._txtSend.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSend.setDefaultFontSize(40);
        this._txtSend.setString(gm.localize.getText("TXT_SEND"));
        this._txtSend.setTextHorizontalAlignment(0);
        this._txtSend.setTextVerticalAlignment(0);
        this._txtSend.enableOutline(cc.color(16, 124, 104, 255), 2);

    },



});

/**
 * Create SendMessagePopup
 * @returns {_ccs.SendMessagePopup}
 */
_ccs.SendMessagePopup.create = function () {
    return new _ccs.SendMessagePopup();
};
