/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.InviteFriendPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.InviteFriendPopup = cc.Layer.extend({

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
    _layoutBottomButton: null,
    /** @type {ccui.Layout} */
    _layoutButtonFacebookShare: null,
    /** @type {ccui.ImageView} */
    _imgButtonFacebookShare: null,
    /** @type {ck.Text} */
    _txtButtonFacebookShare: null,
    /** @type {ccui.Layout} */
    _layoutButtonLinkShare: null,
    /** @type {ccui.ImageView} */
    _imgButtonLinkShare: null,
    /** @type {ck.Text} */
    _txtButtonLinkShare: null,
    /** @type {ccui.Layout} */
    _layoutContentPopup: null,
    /** @type {ccui.Layout} */
    _layoutTutorialStep01: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundStep: null,
    /** @type {cc.Node} */
    _nodeNumerical: null,
    /** @type {ccui.ImageView} */
    _imgNumericalBackground: null,
    /** @type {ccui.ImageView} */
    _imgNumericalBackground: null,
    /** @type {ck.Text} */
    _txtNumerical01: null,
    /** @type {ck.Text} */
    _txtTutorialStep01: null,
    /** @type {cc.Node} */
    _nodeDecor01: null,
    /** @type {ccui.ImageView} */
    _imgSocial01: null,
    /** @type {ccui.ImageView} */
    _imgSocial02: null,
    /** @type {ccui.ImageView} */
    _imgSocial03: null,
    /** @type {ccui.Layout} */
    _layoutCode: null,
    /** @type {ck.Text} */
    _txtCodeTitle: null,
    /** @type {ccui.Layout} */
    _layoutCodeRoot: null,
    /** @type {ccui.Layout} */
    _layoutCodeBackground: null,
    /** @type {ccui.ImageView} */
    _imgCodeBackground: null,
    /** @type {ccui.Layout} */
    _layoutCodeText: null,
    /** @type {ck.Text} */
    _txtCode: null,
    /** @type {ccui.Layout} */
    _layoutButtonCopy: null,
    /** @type {ccui.ImageView} */
    _imgButtonCopy: null,
    /** @type {ck.Text} */
    _txtButtonCopy: null,
    /** @type {ccui.Layout} */
    _layoutTutorialStep02: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundStep: null,
    /** @type {cc.Node} */
    _nodeNumerical: null,
    /** @type {ccui.ImageView} */
    _imgNumericalBackground: null,
    /** @type {ccui.ImageView} */
    _imgNumericalBackground: null,
    /** @type {ck.Text} */
    _txtNumerical02: null,
    /** @type {ck.Text} */
    _txtTutorialStep02: null,
    /** @type {cc.Node} */
    _nodeDecor02: null,
    /** @type {ccui.ImageView} */
    _imgNetworkBackground: null,
    /** @type {ccui.ImageView} */
    _imgNetwork: null,
    /** @type {ccui.Layout} */
    _layoutProgressBar: null,
    /** @type {ck.Text} */
    _txtFriendJoined: null,
    /** @type {ccui.ImageView} */
    _imgProgressRedeemedCodesBackground: null,
    /** @type {ck.LoadingBar} */
    _loadingBarRedeemedCodes: null,
    /** @type {ck.Text} */
    _txtProgressRedeemedStatus: null,
    /** @type {ck.Text} */
    _txtMaxRedeemedCodesToday: null,
    /** @type {ccui.Layout} */
    _layoutMilestoneRewards: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundMilestoneRewards: null,
    /** @type {ck.GridViewVertical} */
    _gridViewMilestoneRewards: null,
    /** @type {ccui.ImageView} */
    _imgLineDivide: null,
    /** @type {ccui.Layout} */
    _layoutEnterCode: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtEnterCode: null,
    /** @type {ck.EditBox} */
    _editBoxCode: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxBackground: null,
    /** @type {ccui.ImageView} */
    _imgEditBoxBackground: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxText: null,
    /** @type {ck.Text} */
    _txtEditBoxTextDisplay: null,
    /** @type {AsyncButton} */
    _btnSubmit: null,
    /** @type {ccui.ImageView} */
    _imgButtonSubmit: null,
    /** @type {ck.Text} */
    _txtButtonSubmit: null,
    /** @type {ccui.ImageView} */
    _imgLoadingButtonSubmit: null,
    /** @type {ccui.Layout} */
    _layoutEnterCodeSuccessful: null,
    /** @type {ccui.ImageView} */
    _imgBannerEnterCodeSuccessful: null,
    /** @type {ck.Text} */
    _txtEnterCodeSuccessful: null,
    /** @type {ck.GridViewVertical} */
    _gridViewClaimRewards: null,


    /**
     * _ccs.InviteFriendPopup constructor
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

        ///// # _layoutPopup
        this._layoutPopup = new ccui.Layout();
        this._layoutPopup.setName("_layoutPopup");
        this.addChild(this._layoutPopup);
        this._layoutPopup.setCascadeOpacityEnabled(true);
        this._layoutPopup.setCascadeColorEnabled(true);
        this._layoutPopup.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutPopup, 0.5, 0.5);
        let _layoutPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        _layoutPopupLayoutComponent.setPositionPercentXEnabled(true);
        _layoutPopupLayoutComponent.setPositionPercentX(0.5);
        _layoutPopupLayoutComponent.setPositionPercentYEnabled(true);
        _layoutPopupLayoutComponent.setPositionPercentY(0.5);
        this._layoutPopup.setTouchEnabled(true);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(540, 803.8251));

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
        this._layoutBackground.setTouchEnabled(false);
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
        this._imgBackgroundFront.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBackgroundFront, 0.5, 0.98);
        let _imgBackgroundFrontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundFront);
        _imgBackgroundFrontLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundFrontLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPositionPercentY(0.98);
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
        this._imgBackgroundTitle.setContentSize(cc.size(346, 84));
        this._imgBackgroundTitle.setTouchEnabled(false);

        ///// # _txtTitle
        this._txtTitle = new ck.Text();
        this._txtTitle.setName("_txtTitle");
        this._layoutTitle.addChild(this._txtTitle);
        this._txtTitle.setCascadeOpacityEnabled(true);
        this._txtTitle.setCascadeColorEnabled(true);
        this._txtTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle, 0.5, 0.5);
        this._txtTitle.setTextColor(cc.color(255, 252, 225, 255));
        let _txtTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle);
        _txtTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentX(0.5);
        _txtTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentY(0.5);
        this._txtTitle.setTouchEnabled(false);
        this._txtTitle.setUnifySizeEnabled(false);
        this._txtTitle.ignoreContentAdaptWithSize(false);
        this._txtTitle.setContentSize(cc.size(261.058, 65));
        this._txtTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTitle.setDefaultFontSize(55);
        this._txtTitle.setString(gm.localize.getText("TXT_INVITE_FRIEND"));
        this._txtTitle.setTextHorizontalAlignment(1);
        this._txtTitle.setTextVerticalAlignment(1);
        this._txtTitle.enableOutline(cc.color(155, 68, 38, 255), 2);
        this._txtTitle.enableShadow(cc.color(155, 68, 38, 255), cc.size(0, -2), 0);
        this._txtTitle.autoFitSingleLine();

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
        this._layoutClose.setContentSize(cc.size(68.5109, 71.6));

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
        this._imgClose.setContentSize(cc.size(81, 83));
        this._imgClose.setTouchEnabled(false);

        ///// # _layoutBottomButton
        this._layoutBottomButton = new ccui.Layout();
        this._layoutBottomButton.setName("_layoutBottomButton");
        this._layoutPopup.addChild(this._layoutBottomButton);
        this._layoutBottomButton.setCascadeOpacityEnabled(true);
        this._layoutBottomButton.setCascadeColorEnabled(true);
        this._layoutBottomButton.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutBottomButton, 0.5, 0.0411);
        let _layoutBottomButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBottomButton);
        _layoutBottomButtonLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBottomButtonLayoutComponent.setPositionPercentX(0.5);
        this._layoutBottomButton.setTouchEnabled(false);
        this._layoutBottomButton.setUnifySizeEnabled(false);
        this._layoutBottomButton.ignoreContentAdaptWithSize(false);
        this._layoutBottomButton.setContentSize(cc.size(490, 138.3888));

        ///// # _layoutButtonFacebookShare
        this._layoutButtonFacebookShare = new ccui.Layout();
        this._layoutButtonFacebookShare.setName("_layoutButtonFacebookShare");
        this._layoutBottomButton.addChild(this._layoutButtonFacebookShare);
        this._layoutButtonFacebookShare.setCascadeOpacityEnabled(true);
        this._layoutButtonFacebookShare.setCascadeColorEnabled(true);
        this._layoutButtonFacebookShare.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutButtonFacebookShare, 0.7, 0.5);
        let _layoutButtonFacebookShareLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutButtonFacebookShare);
        _layoutButtonFacebookShareLayoutComponent.setPositionPercentYEnabled(true);
        _layoutButtonFacebookShareLayoutComponent.setPositionPercentY(0.5);
        this._layoutButtonFacebookShare.setTouchEnabled(true);
        this._layoutButtonFacebookShare.setUnifySizeEnabled(false);
        this._layoutButtonFacebookShare.ignoreContentAdaptWithSize(false);
        this._layoutButtonFacebookShare.setContentSize(cc.size(180, 70));

        ///// # _imgButtonFacebookShare
        this._imgButtonFacebookShare = new ccui.ImageView();
        this._imgButtonFacebookShare.setName("_imgButtonFacebookShare");
        this._layoutButtonFacebookShare.addChild(this._imgButtonFacebookShare);
        this._imgButtonFacebookShare.setCascadeOpacityEnabled(true);
        this._imgButtonFacebookShare.setCascadeColorEnabled(true);
        this._imgButtonFacebookShare.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonFacebookShare, 0.5, 0.5);
        let _imgButtonFacebookShareLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonFacebookShare);
        _imgButtonFacebookShareLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonFacebookShareLayoutComponent.setPositionPercentX(0.5);
        _imgButtonFacebookShareLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonFacebookShareLayoutComponent.setPositionPercentY(0.5);
        _imgButtonFacebookShareLayoutComponent.setPercentWidthEnabled(true);
        _imgButtonFacebookShareLayoutComponent.setPercentWidth(1);
        _imgButtonFacebookShareLayoutComponent.setPercentHeightEnabled(true);
        _imgButtonFacebookShareLayoutComponent.setPercentHeight(1);
        this._imgButtonFacebookShare.loadTexture("buttons/rectangles/Blue.png", 1);
        this._imgButtonFacebookShare.setUnifySizeEnabled(false);
        this._imgButtonFacebookShare.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonFacebookShare, 1, 1);
        this._imgButtonFacebookShare.setTouchEnabled(false);

        ///// # _txtButtonFacebookShare
        this._txtButtonFacebookShare = new ck.Text();
        this._txtButtonFacebookShare.setName("_txtButtonFacebookShare");
        this._layoutButtonFacebookShare.addChild(this._txtButtonFacebookShare);
        this._txtButtonFacebookShare.setCascadeOpacityEnabled(true);
        this._txtButtonFacebookShare.setCascadeColorEnabled(true);
        this._txtButtonFacebookShare.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonFacebookShare, 0.5, 0.53);
        let _txtButtonFacebookShareLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonFacebookShare);
        _txtButtonFacebookShareLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonFacebookShareLayoutComponent.setPositionPercentX(0.5);
        _txtButtonFacebookShareLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonFacebookShareLayoutComponent.setPositionPercentY(0.53);
        _txtButtonFacebookShareLayoutComponent.setPercentWidthEnabled(true);
        _txtButtonFacebookShareLayoutComponent.setPercentWidth(0.9);
        _txtButtonFacebookShareLayoutComponent.setPercentHeightEnabled(true);
        _txtButtonFacebookShareLayoutComponent.setPercentHeight(0.8);
        this._txtButtonFacebookShare.setTouchEnabled(false);
        this._txtButtonFacebookShare.setUnifySizeEnabled(false);
        this._txtButtonFacebookShare.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtButtonFacebookShare, 0.9, 0.8);
        this._txtButtonFacebookShare.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonFacebookShare.setDefaultFontSize(35);
        this._txtButtonFacebookShare.setString(gm.localize.getText("TXT_FACEBOOK").toUpperCase());
        this._txtButtonFacebookShare.setTextHorizontalAlignment(1);
        this._txtButtonFacebookShare.setTextVerticalAlignment(1);
        this._txtButtonFacebookShare.enableOutline(cc.color(22, 86, 147, 255), 1);
        this._txtButtonFacebookShare.autoFitSingleLine();

        ///// # _layoutButtonLinkShare
        this._layoutButtonLinkShare = new ccui.Layout();
        this._layoutButtonLinkShare.setName("_layoutButtonLinkShare");
        this._layoutBottomButton.addChild(this._layoutButtonLinkShare);
        this._layoutButtonLinkShare.setCascadeOpacityEnabled(true);
        this._layoutButtonLinkShare.setCascadeColorEnabled(true);
        this._layoutButtonLinkShare.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutButtonLinkShare, 0.3, 0.5);
        let _layoutButtonLinkShareLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutButtonLinkShare);
        _layoutButtonLinkShareLayoutComponent.setPositionPercentYEnabled(true);
        _layoutButtonLinkShareLayoutComponent.setPositionPercentY(0.5);
        this._layoutButtonLinkShare.setTouchEnabled(true);
        this._layoutButtonLinkShare.setUnifySizeEnabled(false);
        this._layoutButtonLinkShare.ignoreContentAdaptWithSize(false);
        this._layoutButtonLinkShare.setContentSize(cc.size(180, 70));

        ///// # _imgButtonLinkShare
        this._imgButtonLinkShare = new ccui.ImageView();
        this._imgButtonLinkShare.setName("_imgButtonLinkShare");
        this._layoutButtonLinkShare.addChild(this._imgButtonLinkShare);
        this._imgButtonLinkShare.setCascadeOpacityEnabled(true);
        this._imgButtonLinkShare.setCascadeColorEnabled(true);
        this._imgButtonLinkShare.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonLinkShare, 0.5, 0.5);
        let _imgButtonLinkShareLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonLinkShare);
        _imgButtonLinkShareLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonLinkShareLayoutComponent.setPositionPercentX(0.5);
        _imgButtonLinkShareLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonLinkShareLayoutComponent.setPositionPercentY(0.5);
        _imgButtonLinkShareLayoutComponent.setPercentWidthEnabled(true);
        _imgButtonLinkShareLayoutComponent.setPercentWidth(1);
        _imgButtonLinkShareLayoutComponent.setPercentHeightEnabled(true);
        _imgButtonLinkShareLayoutComponent.setPercentHeight(1);
        this._imgButtonLinkShare.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgButtonLinkShare.setUnifySizeEnabled(false);
        this._imgButtonLinkShare.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonLinkShare, 1, 1);
        this._imgButtonLinkShare.setTouchEnabled(false);

        ///// # _txtButtonLinkShare
        this._txtButtonLinkShare = new ck.Text();
        this._txtButtonLinkShare.setName("_txtButtonLinkShare");
        this._layoutButtonLinkShare.addChild(this._txtButtonLinkShare);
        this._txtButtonLinkShare.setCascadeOpacityEnabled(true);
        this._txtButtonLinkShare.setCascadeColorEnabled(true);
        this._txtButtonLinkShare.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonLinkShare, 0.5, 0.53);
        let _txtButtonLinkShareLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonLinkShare);
        _txtButtonLinkShareLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonLinkShareLayoutComponent.setPositionPercentX(0.5);
        _txtButtonLinkShareLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonLinkShareLayoutComponent.setPositionPercentY(0.53);
        _txtButtonLinkShareLayoutComponent.setPercentWidthEnabled(true);
        _txtButtonLinkShareLayoutComponent.setPercentWidth(0.9);
        _txtButtonLinkShareLayoutComponent.setPercentHeightEnabled(true);
        _txtButtonLinkShareLayoutComponent.setPercentHeight(0.8);
        this._txtButtonLinkShare.setTouchEnabled(false);
        this._txtButtonLinkShare.setUnifySizeEnabled(false);
        this._txtButtonLinkShare.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtButtonLinkShare, 0.9, 0.8);
        this._txtButtonLinkShare.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonLinkShare.setDefaultFontSize(35);
        this._txtButtonLinkShare.setString(gm.localize.getText("TXT_LINK_SHARE").toUpperCase());
        this._txtButtonLinkShare.setTextHorizontalAlignment(1);
        this._txtButtonLinkShare.setTextVerticalAlignment(1);
        this._txtButtonLinkShare.enableOutline(cc.color(49, 122, 59, 255), 1);
        this._txtButtonLinkShare.autoFitSingleLine();

        ///// # _layoutContentPopup
        this._layoutContentPopup = new ccui.Layout();
        this._layoutContentPopup.setName("_layoutContentPopup");
        this._layoutPopup.addChild(this._layoutContentPopup);
        this._layoutContentPopup.setCascadeOpacityEnabled(true);
        this._layoutContentPopup.setCascadeColorEnabled(true);
        this._layoutContentPopup.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutContentPopup, 0.5, 0.9328);
        let _layoutContentPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutContentPopup);
        _layoutContentPopupLayoutComponent.setPositionPercentXEnabled(true);
        _layoutContentPopupLayoutComponent.setPositionPercentX(0.5);
        _layoutContentPopupLayoutComponent.setPercentWidthEnabled(true);
        _layoutContentPopupLayoutComponent.setPercentWidth(0.9);
        _layoutContentPopupLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _layoutContentPopupLayoutComponent.setTopMargin(54.0002);
        this._layoutContentPopup.setTouchEnabled(false);
        this._layoutContentPopup.setUnifySizeEnabled(false);
        this._layoutContentPopup.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutContentPopup, 0.9);
        this._layoutContentPopup.setContentSize(cc.size(this._layoutContentPopup.width, 666.0569));

        ///// # _layoutTutorialStep01
        this._layoutTutorialStep01 = new ccui.Layout();
        this._layoutTutorialStep01.setName("_layoutTutorialStep01");
        this._layoutContentPopup.addChild(this._layoutTutorialStep01);
        this._layoutTutorialStep01.setCascadeOpacityEnabled(true);
        this._layoutTutorialStep01.setCascadeColorEnabled(true);
        this._layoutTutorialStep01.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutTutorialStep01, 0.5, 1);
        let _layoutTutorialStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTutorialStep01);
        _layoutTutorialStep01LayoutComponent.setPositionPercentXEnabled(true);
        _layoutTutorialStep01LayoutComponent.setPositionPercentX(0.5);
        _layoutTutorialStep01LayoutComponent.setPercentWidthEnabled(true);
        _layoutTutorialStep01LayoutComponent.setPercentWidth(1);
        _layoutTutorialStep01LayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _layoutTutorialStep01LayoutComponent.setTopMargin(-0.0002);
        this._layoutTutorialStep01.setTouchEnabled(true);
        this._layoutTutorialStep01.setUnifySizeEnabled(false);
        this._layoutTutorialStep01.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutTutorialStep01, 1);
        this._layoutTutorialStep01.setContentSize(cc.size(this._layoutTutorialStep01.width, 160));

        ///// # _imgBackgroundStep
        this._imgBackgroundStep = new ccui.ImageView();
        this._imgBackgroundStep.setName("_imgBackgroundStep");
        this._layoutTutorialStep01.addChild(this._imgBackgroundStep);
        this._imgBackgroundStep.setCascadeOpacityEnabled(true);
        this._imgBackgroundStep.setCascadeColorEnabled(true);
        this._imgBackgroundStep.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundStep, 0.5, 0.5);
        this._imgBackgroundStep.setColor(cc.color(223, 205, 183, 255));
        let _imgBackgroundStepLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundStep);
        _imgBackgroundStepLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundStepLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundStepLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundStepLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundStepLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundStepLayoutComponent.setPercentWidth(1);
        _imgBackgroundStepLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundStepLayoutComponent.setPercentHeight(0.96);
        this._imgBackgroundStep.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgBackgroundStep.setUnifySizeEnabled(false);
        this._imgBackgroundStep.ignoreContentAdaptWithSize(false);
        this._imgBackgroundStep.setScale9Enabled(true);
        this._imgBackgroundStep.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgBackgroundStep, 1, 0.96);
        this._imgBackgroundStep.setTouchEnabled(false);

        ///// # _nodeNumerical
        this._nodeNumerical = new cc.Node();
        this._nodeNumerical.setName("_nodeNumerical");
        this._layoutTutorialStep01.addChild(this._nodeNumerical);
        this._nodeNumerical.setCascadeOpacityEnabled(true);
        this._nodeNumerical.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeNumerical, -0.0062, 1.0187);
        let _nodeNumericalLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeNumerical);
        _nodeNumericalLayoutComponent.setHorizontalEdge(ccui.LayoutComponent.horizontalEdge.LEFT);
        _nodeNumericalLayoutComponent.setLeftMargin(-3);
        _nodeNumericalLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _nodeNumericalLayoutComponent.setTopMargin(-3);

        ///// # _imgNumericalBackground
        this._imgNumericalBackground = new ccui.ImageView();
        this._imgNumericalBackground.setName("_imgNumericalBackground");
        this._nodeNumerical.addChild(this._imgNumericalBackground);
        this._imgNumericalBackground.setCascadeOpacityEnabled(true);
        this._imgNumericalBackground.setCascadeColorEnabled(true);
        this._imgNumericalBackground.setAnchorPoint(cc.p(0, 1));
        this._imgNumericalBackground.setPosition(0, -2);
        this._imgNumericalBackground.setColor(cc.color(43, 161, 127, 255));
        let _imgNumericalBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNumericalBackground);
        this._imgNumericalBackground.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgNumericalBackground.setUnifySizeEnabled(false);
        this._imgNumericalBackground.ignoreContentAdaptWithSize(false);
        this._imgNumericalBackground.setScale9Enabled(true);
        this._imgNumericalBackground.setCapInsets(cc.rect(21, 21, 22, 22));
        this._imgNumericalBackground.setContentSize(cc.size(40, 40));
        this._imgNumericalBackground.setTouchEnabled(false);

        ///// # _imgNumericalBackground
        this._imgNumericalBackground = new ccui.ImageView();
        this._imgNumericalBackground.setName("_imgNumericalBackground");
        this._nodeNumerical.addChild(this._imgNumericalBackground);
        this._imgNumericalBackground.setCascadeOpacityEnabled(true);
        this._imgNumericalBackground.setCascadeColorEnabled(true);
        this._imgNumericalBackground.setAnchorPoint(cc.p(0, 1));
        this._imgNumericalBackground.setColor(cc.color(77, 177, 113, 255));
        let _imgNumericalBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNumericalBackground);
        this._imgNumericalBackground.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgNumericalBackground.setUnifySizeEnabled(false);
        this._imgNumericalBackground.ignoreContentAdaptWithSize(false);
        this._imgNumericalBackground.setScale9Enabled(true);
        this._imgNumericalBackground.setCapInsets(cc.rect(21, 21, 22, 22));
        this._imgNumericalBackground.setContentSize(cc.size(40, 40));
        this._imgNumericalBackground.setTouchEnabled(false);

        ///// # _txtNumerical01
        this._txtNumerical01 = new ck.Text();
        this._txtNumerical01.setName("_txtNumerical01");
        this._nodeNumerical.addChild(this._txtNumerical01);
        this._txtNumerical01.setCascadeOpacityEnabled(true);
        this._txtNumerical01.setCascadeColorEnabled(true);
        this._txtNumerical01.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtNumerical01.setPosition(19, -20);
        this._txtNumerical01.setTextColor(cc.color(111, 229, 154, 255));
        let _txtNumerical01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNumerical01);
        this._txtNumerical01.setTouchEnabled(false);
        this._txtNumerical01.ignoreContentAdaptWithSize(true);
        this._txtNumerical01.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtNumerical01.setDefaultFontSize(35);
        this._txtNumerical01.setString("1");
        this._txtNumerical01.setTextHorizontalAlignment(0);
        this._txtNumerical01.setTextVerticalAlignment(0);

        ///// # _txtTutorialStep01
        this._txtTutorialStep01 = new ck.Text();
        this._txtTutorialStep01.setName("_txtTutorialStep01");
        this._layoutTutorialStep01.addChild(this._txtTutorialStep01);
        this._txtTutorialStep01.setCascadeOpacityEnabled(true);
        this._txtTutorialStep01.setCascadeColorEnabled(true);
        this._txtTutorialStep01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTutorialStep01, 0.3377, 0.675);
        this._txtTutorialStep01.setTextColor(cc.color(92, 75, 60, 255));
        let _txtTutorialStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTutorialStep01);
        _txtTutorialStep01LayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _txtTutorialStep01LayoutComponent.setTopMargin(4);
        this._txtTutorialStep01.setTouchEnabled(false);
        this._txtTutorialStep01.setUnifySizeEnabled(false);
        this._txtTutorialStep01.ignoreContentAdaptWithSize(false);
        this._txtTutorialStep01.setContentSize(cc.size(228.2187, 96));
        this._txtTutorialStep01.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTutorialStep01.setDefaultFontSize(35);
        this._txtTutorialStep01.setString(gm.localize.getText("TXT_INVITE_FRIEND_TUTORIAL_01"));
        this._txtTutorialStep01.setTextHorizontalAlignment(1);
        this._txtTutorialStep01.setTextVerticalAlignment(1);
        this._txtTutorialStep01.autoFitMultipleLine();

        ///// # _nodeDecor01
        this._nodeDecor01 = new cc.Node();
        this._nodeDecor01.setName("_nodeDecor01");
        this._layoutTutorialStep01.addChild(this._nodeDecor01);
        this._nodeDecor01.setCascadeOpacityEnabled(true);
        this._nodeDecor01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeDecor01, 0.751, 0.6875);
        let _nodeDecor01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeDecor01);
        _nodeDecor01LayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _nodeDecor01LayoutComponent.setTopMargin(50);

        ///// # _imgSocial01
        this._imgSocial01 = new ccui.ImageView();
        this._imgSocial01.setName("_imgSocial01");
        this._nodeDecor01.addChild(this._imgSocial01);
        this._imgSocial01.setCascadeOpacityEnabled(true);
        this._imgSocial01.setCascadeColorEnabled(true);
        this._imgSocial01.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgSocial01.setPosition(-45, 11);
        this._imgSocial01.setRotationX(-19.9999);
        this._imgSocial01.setRotationY(-20.0034);
        let _imgSocial01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgSocial01);
        this._imgSocial01.loadTexture("icons/color/socials/Facebook.png", 1);
        this._imgSocial01.setUnifySizeEnabled(false);
        this._imgSocial01.ignoreContentAdaptWithSize(false);
        this._imgSocial01.setContentSize(cc.size(70, 70));
        this._imgSocial01.setTouchEnabled(false);

        ///// # _imgSocial02
        this._imgSocial02 = new ccui.ImageView();
        this._imgSocial02.setName("_imgSocial02");
        this._nodeDecor01.addChild(this._imgSocial02);
        this._imgSocial02.setCascadeOpacityEnabled(true);
        this._imgSocial02.setCascadeColorEnabled(true);
        this._imgSocial02.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgSocial02.setPosition(40, 25);
        this._imgSocial02.setRotationX(15);
        this._imgSocial02.setRotationY(14.9968);
        let _imgSocial02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgSocial02);
        this._imgSocial02.loadTexture("icons/color/socials/Twitter.png", 1);
        this._imgSocial02.setUnifySizeEnabled(false);
        this._imgSocial02.ignoreContentAdaptWithSize(false);
        this._imgSocial02.setContentSize(cc.size(50, 50));
        this._imgSocial02.setTouchEnabled(false);

        ///// # _imgSocial03
        this._imgSocial03 = new ccui.ImageView();
        this._imgSocial03.setName("_imgSocial03");
        this._nodeDecor01.addChild(this._imgSocial03);
        this._imgSocial03.setCascadeOpacityEnabled(true);
        this._imgSocial03.setCascadeColorEnabled(true);
        this._imgSocial03.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgSocial03.setPosition(86, -19);
        this._imgSocial03.setRotationX(30);
        this._imgSocial03.setRotationY(29.997);
        let _imgSocial03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgSocial03);
        this._imgSocial03.loadTexture("icons/color/socials/Line.png", 1);
        this._imgSocial03.setUnifySizeEnabled(false);
        this._imgSocial03.ignoreContentAdaptWithSize(false);
        this._imgSocial03.setContentSize(cc.size(35, 35));
        this._imgSocial03.setTouchEnabled(false);

        ///// # _layoutCode
        this._layoutCode = new ccui.Layout();
        this._layoutCode.setName("_layoutCode");
        this._layoutTutorialStep01.addChild(this._layoutCode);
        this._layoutCode.setCascadeOpacityEnabled(true);
        this._layoutCode.setCascadeColorEnabled(true);
        this._layoutCode.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutCode, 0.5, 0.05);
        let _layoutCodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCode);
        _layoutCodeLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCodeLayoutComponent.setPositionPercentX(0.5);
        _layoutCodeLayoutComponent.setPercentWidthEnabled(true);
        _layoutCodeLayoutComponent.setPercentWidth(1);
        _layoutCodeLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.BOTTOM);
        _layoutCodeLayoutComponent.setBottomMargin(8);
        this._layoutCode.setTouchEnabled(true);
        this._layoutCode.setUnifySizeEnabled(false);
        this._layoutCode.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutCode, 1);
        this._layoutCode.setContentSize(cc.size(this._layoutCode.width, 50));

        ///// # _txtCodeTitle
        this._txtCodeTitle = new ck.Text();
        this._txtCodeTitle.setName("_txtCodeTitle");
        this._layoutCode.addChild(this._txtCodeTitle);
        this._txtCodeTitle.setCascadeOpacityEnabled(true);
        this._txtCodeTitle.setCascadeColorEnabled(true);
        this._txtCodeTitle.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCodeTitle, 0.4115, 0.5);
        this._txtCodeTitle.setTextColor(cc.color(155, 130, 110, 255));
        let _txtCodeTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCodeTitle);
        _txtCodeTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtCodeTitleLayoutComponent.setPositionPercentY(0.5);
        _txtCodeTitleLayoutComponent.setPercentHeightEnabled(true);
        _txtCodeTitleLayoutComponent.setPercentHeight(1);
        this._txtCodeTitle.setTouchEnabled(false);
        this._txtCodeTitle.setUnifySizeEnabled(false);
        this._txtCodeTitle.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this._txtCodeTitle, 1);
        this._txtCodeTitle.setContentSize(cc.size(190, this._txtCodeTitle.height));
        this._txtCodeTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCodeTitle.setDefaultFontSize(28);
        this._txtCodeTitle.setString(gm.localize.getText("TXT_YOUR_REFERRAL_CODE").toUpperCase());
        this._txtCodeTitle.setTextHorizontalAlignment(2);
        this._txtCodeTitle.setTextVerticalAlignment(1);
        this._txtCodeTitle.autoFitSingleLine();

        ///// # _layoutCodeRoot
        this._layoutCodeRoot = new ccui.Layout();
        this._layoutCodeRoot.setName("_layoutCodeRoot");
        this._layoutCode.addChild(this._layoutCodeRoot);
        this._layoutCodeRoot.setCascadeOpacityEnabled(true);
        this._layoutCodeRoot.setCascadeColorEnabled(true);
        this._layoutCodeRoot.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCodeRoot, 0.4321, 0.4882);
        let _layoutCodeRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCodeRoot);
        _layoutCodeRootLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCodeRootLayoutComponent.setPositionPercentY(0.4882);
        this._layoutCodeRoot.setTouchEnabled(false);
        this._layoutCodeRoot.setUnifySizeEnabled(false);
        this._layoutCodeRoot.ignoreContentAdaptWithSize(false);
        this._layoutCodeRoot.setContentSize(cc.size(200, 35));

        ///// # _layoutCodeBackground
        this._layoutCodeBackground = new ccui.Layout();
        this._layoutCodeBackground.setName("_layoutCodeBackground");
        this._layoutCodeRoot.addChild(this._layoutCodeBackground);
        this._layoutCodeBackground.setCascadeOpacityEnabled(true);
        this._layoutCodeBackground.setCascadeColorEnabled(true);
        let _layoutCodeBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCodeBackground);
        _layoutCodeBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _layoutCodeBackgroundLayoutComponent.setPercentWidth(1);
        _layoutCodeBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _layoutCodeBackgroundLayoutComponent.setPercentHeight(1);
        this._layoutCodeBackground.setTouchEnabled(true);
        this._layoutCodeBackground.setUnifySizeEnabled(false);
        this._layoutCodeBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutCodeBackground, 1, 1);

        ///// # _imgCodeBackground
        this._imgCodeBackground = new ccui.ImageView();
        this._imgCodeBackground.setName("_imgCodeBackground");
        this._layoutCodeBackground.addChild(this._imgCodeBackground);
        this._imgCodeBackground.setCascadeOpacityEnabled(true);
        this._imgCodeBackground.setCascadeColorEnabled(true);
        this._imgCodeBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCodeBackground, 0.5, 0.5);
        this._imgCodeBackground.setColor(cc.color(156, 129, 110, 255));
        let _imgCodeBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCodeBackground);
        _imgCodeBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgCodeBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgCodeBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgCodeBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgCodeBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgCodeBackgroundLayoutComponent.setPercentWidth(1);
        _imgCodeBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgCodeBackgroundLayoutComponent.setPercentHeight(1);
        this._imgCodeBackground.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgCodeBackground.setUnifySizeEnabled(false);
        this._imgCodeBackground.ignoreContentAdaptWithSize(false);
        this._imgCodeBackground.setScale9Enabled(true);
        this._imgCodeBackground.setCapInsets(cc.rect(10, 10, 44, 44));
        ck.UIUtils.setSizePercent(this._imgCodeBackground, 1, 1);
        this._imgCodeBackground.setTouchEnabled(false);

        ///// # _layoutCodeText
        this._layoutCodeText = new ccui.Layout();
        this._layoutCodeText.setName("_layoutCodeText");
        this._layoutCodeRoot.addChild(this._layoutCodeText);
        this._layoutCodeText.setCascadeOpacityEnabled(true);
        this._layoutCodeText.setCascadeColorEnabled(true);
        this._layoutCodeText.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCodeText, 0.45, 0.5);
        let _layoutCodeTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCodeText);
        _layoutCodeTextLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCodeTextLayoutComponent.setPositionPercentX(0.45);
        _layoutCodeTextLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCodeTextLayoutComponent.setPositionPercentY(0.5);
        _layoutCodeTextLayoutComponent.setPercentWidthEnabled(true);
        _layoutCodeTextLayoutComponent.setPercentWidth(0.8);
        _layoutCodeTextLayoutComponent.setPercentHeightEnabled(true);
        _layoutCodeTextLayoutComponent.setPercentHeight(1);
        this._layoutCodeText.setTouchEnabled(false);
        this._layoutCodeText.setUnifySizeEnabled(false);
        this._layoutCodeText.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutCodeText, 0.8, 1);
        this._layoutCodeText.setClippingEnabled(true);

        ///// # _txtCode
        this._txtCode = new ck.Text();
        this._txtCode.setName("_txtCode");
        this._layoutCodeText.addChild(this._txtCode);
        this._txtCode.setCascadeOpacityEnabled(true);
        this._txtCode.setCascadeColorEnabled(true);
        this._txtCode.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCode, 0.5, 0.5);
        let _txtCodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCode);
        _txtCodeLayoutComponent.setPositionPercentXEnabled(true);
        _txtCodeLayoutComponent.setPositionPercentX(0.5);
        _txtCodeLayoutComponent.setPositionPercentYEnabled(true);
        _txtCodeLayoutComponent.setPositionPercentY(0.5);
        this._txtCode.setTouchEnabled(false);
        this._txtCode.setUnifySizeEnabled(false);
        this._txtCode.ignoreContentAdaptWithSize(false);
        this._txtCode.setContentSize(cc.size(164, 33));
        this._txtCode.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCode.setDefaultFontSize(30);
        this._txtCode.setTextHorizontalAlignment(1);
        this._txtCode.setTextVerticalAlignment(1);
        this._txtCode.autoFitSingleLine();

        ///// # _layoutButtonCopy
        this._layoutButtonCopy = new ccui.Layout();
        this._layoutButtonCopy.setName("_layoutButtonCopy");
        this._layoutCode.addChild(this._layoutButtonCopy);
        this._layoutButtonCopy.setCascadeOpacityEnabled(true);
        this._layoutButtonCopy.setCascadeColorEnabled(true);
        this._layoutButtonCopy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutButtonCopy, 0.9031, 0.49);
        let _layoutButtonCopyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutButtonCopy);
        _layoutButtonCopyLayoutComponent.setPositionPercentXEnabled(true);
        _layoutButtonCopyLayoutComponent.setPositionPercentX(0.9031);
        _layoutButtonCopyLayoutComponent.setPositionPercentYEnabled(true);
        _layoutButtonCopyLayoutComponent.setPositionPercentY(0.49);
        this._layoutButtonCopy.setTouchEnabled(true);
        this._layoutButtonCopy.setUnifySizeEnabled(false);
        this._layoutButtonCopy.ignoreContentAdaptWithSize(false);
        this._layoutButtonCopy.setContentSize(cc.size(90, 40.4111));

        ///// # _imgButtonCopy
        this._imgButtonCopy = new ccui.ImageView();
        this._imgButtonCopy.setName("_imgButtonCopy");
        this._layoutButtonCopy.addChild(this._imgButtonCopy);
        this._imgButtonCopy.setCascadeOpacityEnabled(true);
        this._imgButtonCopy.setCascadeColorEnabled(true);
        this._imgButtonCopy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonCopy, 0.5, 0.5);
        let _imgButtonCopyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonCopy);
        _imgButtonCopyLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonCopyLayoutComponent.setPositionPercentX(0.5);
        _imgButtonCopyLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonCopyLayoutComponent.setPositionPercentY(0.5);
        _imgButtonCopyLayoutComponent.setPercentWidthEnabled(true);
        _imgButtonCopyLayoutComponent.setPercentWidth(1);
        _imgButtonCopyLayoutComponent.setPercentHeightEnabled(true);
        _imgButtonCopyLayoutComponent.setPercentHeight(1);
        this._imgButtonCopy.loadTexture("buttons/rectangles/Blue.png", 1);
        this._imgButtonCopy.setUnifySizeEnabled(false);
        this._imgButtonCopy.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonCopy, 1, 1);
        this._imgButtonCopy.setTouchEnabled(false);

        ///// # _txtButtonCopy
        this._txtButtonCopy = new ck.Text();
        this._txtButtonCopy.setName("_txtButtonCopy");
        this._layoutButtonCopy.addChild(this._txtButtonCopy);
        this._txtButtonCopy.setCascadeOpacityEnabled(true);
        this._txtButtonCopy.setCascadeColorEnabled(true);
        this._txtButtonCopy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonCopy, 0.5, 0.53);
        let _txtButtonCopyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonCopy);
        _txtButtonCopyLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonCopyLayoutComponent.setPositionPercentX(0.5);
        _txtButtonCopyLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonCopyLayoutComponent.setPositionPercentY(0.53);
        _txtButtonCopyLayoutComponent.setPercentWidthEnabled(true);
        _txtButtonCopyLayoutComponent.setPercentWidth(0.9);
        _txtButtonCopyLayoutComponent.setPercentHeightEnabled(true);
        _txtButtonCopyLayoutComponent.setPercentHeight(0.8);
        this._txtButtonCopy.setTouchEnabled(false);
        this._txtButtonCopy.setUnifySizeEnabled(false);
        this._txtButtonCopy.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtButtonCopy, 0.9, 0.8);
        this._txtButtonCopy.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonCopy.setDefaultFontSize(20);
        this._txtButtonCopy.setString(gm.localize.getText("TXT_COPY"));
        this._txtButtonCopy.setTextHorizontalAlignment(1);
        this._txtButtonCopy.setTextVerticalAlignment(1);
        this._txtButtonCopy.enableOutline(cc.color(21, 60, 93, 255), 1);
        this._txtButtonCopy.autoFitSingleLine();

        ///// # _layoutTutorialStep02
        this._layoutTutorialStep02 = new ccui.Layout();
        this._layoutTutorialStep02.setName("_layoutTutorialStep02");
        this._layoutContentPopup.addChild(this._layoutTutorialStep02);
        this._layoutTutorialStep02.setCascadeOpacityEnabled(true);
        this._layoutTutorialStep02.setCascadeColorEnabled(true);
        this._layoutTutorialStep02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTutorialStep02, 0.5, 0.5841);
        let _layoutTutorialStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTutorialStep02);
        _layoutTutorialStep02LayoutComponent.setPositionPercentXEnabled(true);
        _layoutTutorialStep02LayoutComponent.setPositionPercentX(0.5);
        _layoutTutorialStep02LayoutComponent.setPercentWidthEnabled(true);
        _layoutTutorialStep02LayoutComponent.setPercentWidth(1);
        _layoutTutorialStep02LayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _layoutTutorialStep02LayoutComponent.setTopMargin(177);
        this._layoutTutorialStep02.setTouchEnabled(true);
        this._layoutTutorialStep02.setUnifySizeEnabled(false);
        this._layoutTutorialStep02.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutTutorialStep02, 1);
        this._layoutTutorialStep02.setContentSize(cc.size(this._layoutTutorialStep02.width, 200));

        ///// # _imgBackgroundStep
        this._imgBackgroundStep = new ccui.ImageView();
        this._imgBackgroundStep.setName("_imgBackgroundStep");
        this._layoutTutorialStep02.addChild(this._imgBackgroundStep);
        this._imgBackgroundStep.setCascadeOpacityEnabled(true);
        this._imgBackgroundStep.setCascadeColorEnabled(true);
        this._imgBackgroundStep.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundStep, 0.5, 0.5);
        this._imgBackgroundStep.setColor(cc.color(223, 205, 183, 255));
        let _imgBackgroundStepLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundStep);
        _imgBackgroundStepLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundStepLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundStepLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundStepLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundStepLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundStepLayoutComponent.setPercentWidth(1);
        _imgBackgroundStepLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundStepLayoutComponent.setPercentHeight(1);
        this._imgBackgroundStep.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgBackgroundStep.setUnifySizeEnabled(false);
        this._imgBackgroundStep.ignoreContentAdaptWithSize(false);
        this._imgBackgroundStep.setScale9Enabled(true);
        this._imgBackgroundStep.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgBackgroundStep, 1, 1);
        this._imgBackgroundStep.setTouchEnabled(false);

        ///// # _nodeNumerical
        this._nodeNumerical = new cc.Node();
        this._nodeNumerical.setName("_nodeNumerical");
        this._layoutTutorialStep02.addChild(this._nodeNumerical);
        this._nodeNumerical.setCascadeOpacityEnabled(true);
        this._nodeNumerical.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeNumerical, -0.0062, 1.015);
        let _nodeNumericalLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeNumerical);
        _nodeNumericalLayoutComponent.setHorizontalEdge(ccui.LayoutComponent.horizontalEdge.LEFT);
        _nodeNumericalLayoutComponent.setLeftMargin(-3);
        _nodeNumericalLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _nodeNumericalLayoutComponent.setTopMargin(-3);

        ///// # _imgNumericalBackground
        this._imgNumericalBackground = new ccui.ImageView();
        this._imgNumericalBackground.setName("_imgNumericalBackground");
        this._nodeNumerical.addChild(this._imgNumericalBackground);
        this._imgNumericalBackground.setCascadeOpacityEnabled(true);
        this._imgNumericalBackground.setCascadeColorEnabled(true);
        this._imgNumericalBackground.setAnchorPoint(cc.p(0, 1));
        this._imgNumericalBackground.setPosition(0, -2);
        this._imgNumericalBackground.setColor(cc.color(43, 161, 127, 255));
        let _imgNumericalBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNumericalBackground);
        this._imgNumericalBackground.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgNumericalBackground.setUnifySizeEnabled(false);
        this._imgNumericalBackground.ignoreContentAdaptWithSize(false);
        this._imgNumericalBackground.setScale9Enabled(true);
        this._imgNumericalBackground.setCapInsets(cc.rect(21, 21, 22, 22));
        this._imgNumericalBackground.setContentSize(cc.size(40, 40));
        this._imgNumericalBackground.setTouchEnabled(false);

        ///// # _imgNumericalBackground
        this._imgNumericalBackground = new ccui.ImageView();
        this._imgNumericalBackground.setName("_imgNumericalBackground");
        this._nodeNumerical.addChild(this._imgNumericalBackground);
        this._imgNumericalBackground.setCascadeOpacityEnabled(true);
        this._imgNumericalBackground.setCascadeColorEnabled(true);
        this._imgNumericalBackground.setAnchorPoint(cc.p(0, 1));
        this._imgNumericalBackground.setColor(cc.color(77, 177, 113, 255));
        let _imgNumericalBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNumericalBackground);
        this._imgNumericalBackground.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgNumericalBackground.setUnifySizeEnabled(false);
        this._imgNumericalBackground.ignoreContentAdaptWithSize(false);
        this._imgNumericalBackground.setScale9Enabled(true);
        this._imgNumericalBackground.setCapInsets(cc.rect(21, 21, 22, 22));
        this._imgNumericalBackground.setContentSize(cc.size(40, 40));
        this._imgNumericalBackground.setTouchEnabled(false);

        ///// # _txtNumerical02
        this._txtNumerical02 = new ck.Text();
        this._txtNumerical02.setName("_txtNumerical02");
        this._nodeNumerical.addChild(this._txtNumerical02);
        this._txtNumerical02.setCascadeOpacityEnabled(true);
        this._txtNumerical02.setCascadeColorEnabled(true);
        this._txtNumerical02.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtNumerical02.setPosition(19, -20);
        this._txtNumerical02.setTextColor(cc.color(111, 229, 154, 255));
        let _txtNumerical02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNumerical02);
        this._txtNumerical02.setTouchEnabled(false);
        this._txtNumerical02.ignoreContentAdaptWithSize(true);
        this._txtNumerical02.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtNumerical02.setDefaultFontSize(35);
        this._txtNumerical02.setString("2");
        this._txtNumerical02.setTextHorizontalAlignment(0);
        this._txtNumerical02.setTextVerticalAlignment(0);

        ///// # _txtTutorialStep02
        this._txtTutorialStep02 = new ck.Text();
        this._txtTutorialStep02.setName("_txtTutorialStep02");
        this._layoutTutorialStep02.addChild(this._txtTutorialStep02);
        this._txtTutorialStep02.setCascadeOpacityEnabled(true);
        this._txtTutorialStep02.setCascadeColorEnabled(true);
        this._txtTutorialStep02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTutorialStep02, 0.3377, 0.74);
        this._txtTutorialStep02.setTextColor(cc.color(92, 75, 60, 255));
        let _txtTutorialStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTutorialStep02);
        _txtTutorialStep02LayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _txtTutorialStep02LayoutComponent.setTopMargin(4);
        this._txtTutorialStep02.setTouchEnabled(false);
        this._txtTutorialStep02.setUnifySizeEnabled(false);
        this._txtTutorialStep02.ignoreContentAdaptWithSize(false);
        this._txtTutorialStep02.setContentSize(cc.size(228.2187, 96));
        this._txtTutorialStep02.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTutorialStep02.setDefaultFontSize(35);
        this._txtTutorialStep02.setString(gm.localize.getText("TXT_INVITE_FRIEND_TUTORIAL_02"));
        this._txtTutorialStep02.setTextHorizontalAlignment(1);
        this._txtTutorialStep02.setTextVerticalAlignment(1);
        this._txtTutorialStep02.autoFitMultipleLine();

        ///// # _nodeDecor02
        this._nodeDecor02 = new cc.Node();
        this._nodeDecor02.setName("_nodeDecor02");
        this._layoutTutorialStep02.addChild(this._nodeDecor02);
        this._nodeDecor02.setCascadeOpacityEnabled(true);
        this._nodeDecor02.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeDecor02, 0.751, 0.75);
        let _nodeDecor02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeDecor02);
        _nodeDecor02LayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _nodeDecor02LayoutComponent.setTopMargin(50);

        ///// # _imgNetworkBackground
        this._imgNetworkBackground = new ccui.ImageView();
        this._imgNetworkBackground.setName("_imgNetworkBackground");
        this._nodeDecor02.addChild(this._imgNetworkBackground);
        this._imgNetworkBackground.setCascadeOpacityEnabled(true);
        this._imgNetworkBackground.setCascadeColorEnabled(true);
        this._imgNetworkBackground.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgNetworkBackground.setPosition(11, 6);
        let _imgNetworkBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNetworkBackground);
        this._imgNetworkBackground.loadTexture("icons/color/socials/NetworkBackground.png", 1);
        this._imgNetworkBackground.setUnifySizeEnabled(false);
        this._imgNetworkBackground.ignoreContentAdaptWithSize(false);
        this._imgNetworkBackground.setContentSize(cc.size(87, 87));
        this._imgNetworkBackground.setTouchEnabled(false);

        ///// # _imgNetwork
        this._imgNetwork = new ccui.ImageView();
        this._imgNetwork.setName("_imgNetwork");
        this._nodeDecor02.addChild(this._imgNetwork);
        this._imgNetwork.setCascadeOpacityEnabled(true);
        this._imgNetwork.setCascadeColorEnabled(true);
        this._imgNetwork.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgNetwork.setPosition(9, 7);
        let _imgNetworkLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNetwork);
        this._imgNetwork.loadTexture("icons/color/socials/Network.png", 1);
        this._imgNetwork.setUnifySizeEnabled(false);
        this._imgNetwork.ignoreContentAdaptWithSize(false);
        this._imgNetwork.setContentSize(cc.size(110, 112));
        this._imgNetwork.setTouchEnabled(false);

        ///// # _layoutProgressBar
        this._layoutProgressBar = new ccui.Layout();
        this._layoutProgressBar.setName("_layoutProgressBar");
        this._layoutTutorialStep02.addChild(this._layoutProgressBar);
        this._layoutProgressBar.setCascadeOpacityEnabled(true);
        this._layoutProgressBar.setCascadeColorEnabled(true);
        this._layoutProgressBar.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutProgressBar, 0.5, 0.1);
        let _layoutProgressBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProgressBar);
        _layoutProgressBarLayoutComponent.setPositionPercentXEnabled(true);
        _layoutProgressBarLayoutComponent.setPositionPercentX(0.5);
        _layoutProgressBarLayoutComponent.setPercentWidthEnabled(true);
        _layoutProgressBarLayoutComponent.setPercentWidth(1);
        _layoutProgressBarLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.BOTTOM);
        _layoutProgressBarLayoutComponent.setBottomMargin(20);
        this._layoutProgressBar.setTouchEnabled(false);
        this._layoutProgressBar.setUnifySizeEnabled(false);
        this._layoutProgressBar.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutProgressBar, 1);
        this._layoutProgressBar.setContentSize(cc.size(this._layoutProgressBar.width, 50));

        ///// # _txtFriendJoined
        this._txtFriendJoined = new ck.Text();
        this._txtFriendJoined.setName("_txtFriendJoined");
        this._layoutProgressBar.addChild(this._txtFriendJoined);
        this._txtFriendJoined.setCascadeOpacityEnabled(true);
        this._txtFriendJoined.setCascadeColorEnabled(true);
        this._txtFriendJoined.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtFriendJoined, 0.3082, 1.12);
        this._txtFriendJoined.setTextColor(cc.color(155, 130, 110, 255));
        let _txtFriendJoinedLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtFriendJoined);
        _txtFriendJoinedLayoutComponent.setPositionPercentXEnabled(true);
        _txtFriendJoinedLayoutComponent.setPositionPercentX(0.3082);
        this._txtFriendJoined.setTouchEnabled(false);
        this._txtFriendJoined.setUnifySizeEnabled(false);
        this._txtFriendJoined.ignoreContentAdaptWithSize(false);
        this._txtFriendJoined.setContentSize(cc.size(249.1119, 30));
        this._txtFriendJoined.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtFriendJoined.setDefaultFontSize(27);
        this._txtFriendJoined.setString(gm.localize.getText("TXT_FRIEND_JOINED").toUpperCase());
        this._txtFriendJoined.setTextHorizontalAlignment(1);
        this._txtFriendJoined.setTextVerticalAlignment(1);
        this._txtFriendJoined.autoFitSingleLine();

        ///// # _imgProgressRedeemedCodesBackground
        this._imgProgressRedeemedCodesBackground = new ccui.ImageView();
        this._imgProgressRedeemedCodesBackground.setName("_imgProgressRedeemedCodesBackground");
        this._layoutProgressBar.addChild(this._imgProgressRedeemedCodesBackground);
        this._imgProgressRedeemedCodesBackground.setCascadeOpacityEnabled(true);
        this._imgProgressRedeemedCodesBackground.setCascadeColorEnabled(true);
        this._imgProgressRedeemedCodesBackground.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgProgressRedeemedCodesBackground, 0.0144, 0.5);
        this._imgProgressRedeemedCodesBackground.setFlippedX(true);
        let _imgProgressRedeemedCodesBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgProgressRedeemedCodesBackground);
        _imgProgressRedeemedCodesBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgProgressRedeemedCodesBackgroundLayoutComponent.setPositionPercentY(0.5);
        this._imgProgressRedeemedCodesBackground.loadTexture("basics/bars/Bar_01.png", 1);
        this._imgProgressRedeemedCodesBackground.setUnifySizeEnabled(false);
        this._imgProgressRedeemedCodesBackground.ignoreContentAdaptWithSize(false);
        this._imgProgressRedeemedCodesBackground.setScale9Enabled(true);
        this._imgProgressRedeemedCodesBackground.setCapInsets(cc.rect(164, 5, 170, 7));
        this._imgProgressRedeemedCodesBackground.setContentSize(cc.size(276, 30));
        this._imgProgressRedeemedCodesBackground.setTouchEnabled(false);
        this._imgProgressRedeemedCodesBackground.setFlippedX(true);

        ///// # _loadingBarRedeemedCodes
        this._loadingBarRedeemedCodes = new ck.LoadingBar();
        this._loadingBarRedeemedCodes.setName("_loadingBarRedeemedCodes");
        this._layoutProgressBar.addChild(this._loadingBarRedeemedCodes);
        this._loadingBarRedeemedCodes.setCascadeOpacityEnabled(true);
        this._loadingBarRedeemedCodes.setCascadeColorEnabled(true);
        this._loadingBarRedeemedCodes.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._loadingBarRedeemedCodes, 0.0195, 0.51);
        let _loadingBarRedeemedCodesLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._loadingBarRedeemedCodes);
        this._loadingBarRedeemedCodes.setTouchEnabled(false);
        this._loadingBarRedeemedCodes.setUnifySizeEnabled(false);
        this._loadingBarRedeemedCodes.ignoreContentAdaptWithSize(false);
        this._loadingBarRedeemedCodes.setContentSize(cc.size(271, 24));
        this._loadingBarRedeemedCodes.loadTexture("basics/bars/Bar_02.png", 1);

        ///// # _txtProgressRedeemedStatus
        this._txtProgressRedeemedStatus = new ck.Text();
        this._txtProgressRedeemedStatus.setName("_txtProgressRedeemedStatus");
        this._layoutProgressBar.addChild(this._txtProgressRedeemedStatus);
        this._txtProgressRedeemedStatus.setCascadeOpacityEnabled(true);
        this._txtProgressRedeemedStatus.setCascadeColorEnabled(true);
        this._txtProgressRedeemedStatus.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtProgressRedeemedStatus, 0.2984, 0.5);
        let _txtProgressRedeemedStatusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtProgressRedeemedStatus);
        _txtProgressRedeemedStatusLayoutComponent.setPositionPercentYEnabled(true);
        _txtProgressRedeemedStatusLayoutComponent.setPositionPercentY(0.5);
        this._txtProgressRedeemedStatus.setTouchEnabled(false);
        this._txtProgressRedeemedStatus.ignoreContentAdaptWithSize(true);
        this._txtProgressRedeemedStatus.setFontName("fonts/GroBold.ttf");
        this._txtProgressRedeemedStatus.setDefaultFontSize(24);
        this._txtProgressRedeemedStatus.setString("1/2");
        this._txtProgressRedeemedStatus.setTextHorizontalAlignment(1);
        this._txtProgressRedeemedStatus.setTextVerticalAlignment(1);
        this._txtProgressRedeemedStatus.enableOutline(cc.color(0, 94, 105, 255), 1);

        ///// # _txtMaxRedeemedCodesToday
        this._txtMaxRedeemedCodesToday = new ck.Text();
        this._txtMaxRedeemedCodesToday.setName("_txtMaxRedeemedCodesToday");
        this._layoutProgressBar.addChild(this._txtMaxRedeemedCodesToday);
        this._txtMaxRedeemedCodesToday.setCascadeOpacityEnabled(true);
        this._txtMaxRedeemedCodesToday.setCascadeColorEnabled(true);
        this._txtMaxRedeemedCodesToday.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMaxRedeemedCodesToday, 0.2984, -0.12);
        this._txtMaxRedeemedCodesToday.setTextColor(cc.color(195, 0, 0, 255));
        let _txtMaxRedeemedCodesTodayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMaxRedeemedCodesToday);
        this._txtMaxRedeemedCodesToday.setTouchEnabled(false);
        this._txtMaxRedeemedCodesToday.setUnifySizeEnabled(false);
        this._txtMaxRedeemedCodesToday.ignoreContentAdaptWithSize(false);
        this._txtMaxRedeemedCodesToday.setContentSize(cc.size(275, 27));
        this._txtMaxRedeemedCodesToday.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMaxRedeemedCodesToday.setDefaultFontSize(22);
        this._txtMaxRedeemedCodesToday.setTextHorizontalAlignment(1);
        this._txtMaxRedeemedCodesToday.setTextVerticalAlignment(0);
        this._txtMaxRedeemedCodesToday.autoFitSingleLine();

        ///// # _layoutMilestoneRewards
        this._layoutMilestoneRewards = new ccui.Layout();
        this._layoutMilestoneRewards.setName("_layoutMilestoneRewards");
        this._layoutProgressBar.addChild(this._layoutMilestoneRewards);
        this._layoutMilestoneRewards.setCascadeOpacityEnabled(true);
        this._layoutMilestoneRewards.setCascadeColorEnabled(true);
        this._layoutMilestoneRewards.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutMilestoneRewards, 0.5993, 0.5);
        let _layoutMilestoneRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutMilestoneRewards);
        _layoutMilestoneRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _layoutMilestoneRewardsLayoutComponent.setPositionPercentY(0.5);
        this._layoutMilestoneRewards.setTouchEnabled(false);
        this._layoutMilestoneRewards.setUnifySizeEnabled(false);
        this._layoutMilestoneRewards.ignoreContentAdaptWithSize(false);
        this._layoutMilestoneRewards.setContentSize(cc.size(168, 70));

        ///// # _imgBackgroundMilestoneRewards
        this._imgBackgroundMilestoneRewards = new ccui.ImageView();
        this._imgBackgroundMilestoneRewards.setName("_imgBackgroundMilestoneRewards");
        this._layoutMilestoneRewards.addChild(this._imgBackgroundMilestoneRewards);
        this._imgBackgroundMilestoneRewards.setCascadeOpacityEnabled(true);
        this._imgBackgroundMilestoneRewards.setCascadeColorEnabled(true);
        this._imgBackgroundMilestoneRewards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundMilestoneRewards, 0.5, 0.5);
        this._imgBackgroundMilestoneRewards.setColor(cc.color(112, 102, 93, 255));
        let _imgBackgroundMilestoneRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundMilestoneRewards);
        _imgBackgroundMilestoneRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundMilestoneRewardsLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundMilestoneRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundMilestoneRewardsLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundMilestoneRewardsLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundMilestoneRewardsLayoutComponent.setPercentWidth(1);
        _imgBackgroundMilestoneRewardsLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundMilestoneRewardsLayoutComponent.setPercentHeight(1);
        this._imgBackgroundMilestoneRewards.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgBackgroundMilestoneRewards.setUnifySizeEnabled(false);
        this._imgBackgroundMilestoneRewards.ignoreContentAdaptWithSize(false);
        this._imgBackgroundMilestoneRewards.setScale9Enabled(true);
        this._imgBackgroundMilestoneRewards.setCapInsets(cc.rect(24, 9, 16, 46));
        ck.UIUtils.setSizePercent(this._imgBackgroundMilestoneRewards, 1, 1);
        this._imgBackgroundMilestoneRewards.setTouchEnabled(false);

        ///// # _gridViewMilestoneRewards
        this._gridViewMilestoneRewards = new ck.GridViewVertical();
        this._gridViewMilestoneRewards.setName("_gridViewMilestoneRewards");
        this._layoutMilestoneRewards.addChild(this._gridViewMilestoneRewards);
        this._gridViewMilestoneRewards.setCascadeOpacityEnabled(true);
        this._gridViewMilestoneRewards.setCascadeColorEnabled(true);
        this._gridViewMilestoneRewards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridViewMilestoneRewards, 0.5, 0.5);
        let _gridViewMilestoneRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewMilestoneRewards);
        _gridViewMilestoneRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _gridViewMilestoneRewardsLayoutComponent.setPositionPercentX(0.5);
        _gridViewMilestoneRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _gridViewMilestoneRewardsLayoutComponent.setPositionPercentY(0.5);
        _gridViewMilestoneRewardsLayoutComponent.setPercentWidthEnabled(true);
        _gridViewMilestoneRewardsLayoutComponent.setPercentWidth(0.9);
        _gridViewMilestoneRewardsLayoutComponent.setPercentHeightEnabled(true);
        _gridViewMilestoneRewardsLayoutComponent.setPercentHeight(0.8);

        ///// # _imgLineDivide
        this._imgLineDivide = new ccui.ImageView();
        this._imgLineDivide.setName("_imgLineDivide");
        this._layoutContentPopup.addChild(this._imgLineDivide);
        this._imgLineDivide.setCascadeOpacityEnabled(true);
        this._imgLineDivide.setCascadeColorEnabled(true);
        this._imgLineDivide.setAnchorPoint(cc.p(0.5043, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLineDivide, 0.5, 0.3874);
        this._imgLineDivide.setColor(cc.color(153, 131, 110, 255));
        let _imgLineDivideLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLineDivide);
        _imgLineDivideLayoutComponent.setPositionPercentXEnabled(true);
        _imgLineDivideLayoutComponent.setPositionPercentX(0.5);
        _imgLineDivideLayoutComponent.setPercentWidthEnabled(true);
        _imgLineDivideLayoutComponent.setPercentWidth(0.97);
        _imgLineDivideLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _imgLineDivideLayoutComponent.setTopMargin(407.0569);
        this._imgLineDivide.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgLineDivide.setUnifySizeEnabled(false);
        this._imgLineDivide.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._imgLineDivide, 0.97);
        this._imgLineDivide.setContentSize(cc.size(this._imgLineDivide.width, 2));
        this._imgLineDivide.setTouchEnabled(false);

        ///// # _layoutEnterCode
        this._layoutEnterCode = new ccui.Layout();
        this._layoutEnterCode.setName("_layoutEnterCode");
        this._layoutContentPopup.addChild(this._layoutEnterCode);
        this._layoutEnterCode.setCascadeOpacityEnabled(true);
        this._layoutEnterCode.setCascadeColorEnabled(true);
        this._layoutEnterCode.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutEnterCode, 0.5, 0.3498);
        let _layoutEnterCodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEnterCode);
        _layoutEnterCodeLayoutComponent.setPositionPercentXEnabled(true);
        _layoutEnterCodeLayoutComponent.setPositionPercentX(0.5);
        _layoutEnterCodeLayoutComponent.setPercentWidthEnabled(true);
        _layoutEnterCodeLayoutComponent.setPercentWidth(1);
        _layoutEnterCodeLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _layoutEnterCodeLayoutComponent.setTopMargin(433.0569);
        this._layoutEnterCode.setTouchEnabled(false);
        this._layoutEnterCode.setUnifySizeEnabled(false);
        this._layoutEnterCode.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutEnterCode, 1);
        this._layoutEnterCode.setContentSize(cc.size(this._layoutEnterCode.width, 153));

        ///// # _txtEnterCode
        this._txtEnterCode = new ck.CustomRichTextExtend(cc.size(476.28, 41));
        this._txtEnterCode.setName("_txtEnterCode");
        this._layoutEnterCode.addChild(this._txtEnterCode);
        this._txtEnterCode.setCascadeOpacityEnabled(true);
        this._txtEnterCode.setCascadeColorEnabled(true);
        this._txtEnterCode.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtEnterCode, 0.5, 0.866);
        this._txtEnterCode.setDefaultColor(cc.color(155, 130, 110, 255));
        let _txtEnterCodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtEnterCode);
        _txtEnterCodeLayoutComponent.setPositionPercentXEnabled(true);
        _txtEnterCodeLayoutComponent.setPositionPercentX(0.5);
        _txtEnterCodeLayoutComponent.setPercentWidthEnabled(true);
        _txtEnterCodeLayoutComponent.setPercentWidth(0.98);
        _txtEnterCodeLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _txtEnterCodeLayoutComponent.setTopMargin(0);
        this._txtEnterCode.setTouchEnabled(false);
        this._txtEnterCode.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtEnterCode.setDefaultSize(33);
        this._txtEnterCode.setDefaultAlignHorizontal(2);
        this._txtEnterCode.setDefaultAlignVertical(5);
        this._txtEnterCode.setString(gm.localize.getText("TXT_ENTER_INVITE_CODE_TO_GET"));

        ///// # _editBoxCode
        this._editBoxCode = new ck.EditBox();
        this._editBoxCode.setName("_editBoxCode");
        this._layoutEnterCode.addChild(this._editBoxCode);
        this._editBoxCode.setCascadeOpacityEnabled(true);
        this._editBoxCode.setCascadeColorEnabled(true);
        this._editBoxCode.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxCode, 0.3374, 0.3298);
        let _editBoxCodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxCode);
        _editBoxCodeLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _editBoxCodeLayoutComponent.setTopMargin(57.5406);
        this._editBoxCode.setUnifySizeEnabled(false);
        this._editBoxCode.ignoreContentAdaptWithSize(false);
        this._editBoxCode.setContentSize(cc.size(304.5498, 90));
        this._editBoxCode.setTouchEnabled(false);

        ///// # _layoutEditBoxBackground
        this._layoutEditBoxBackground = new ccui.Layout();
        this._layoutEditBoxBackground.setName("_layoutEditBoxBackground");
        this._editBoxCode.addChild(this._layoutEditBoxBackground);
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
        this._imgEditBoxBackground.setColor(cc.color(156, 129, 110, 255));
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
        this._imgEditBoxBackground.setCapInsets(cc.rect(10, 10, 44, 44));
        ck.UIUtils.setSizePercent(this._imgEditBoxBackground, 1, 1);
        this._imgEditBoxBackground.setTouchEnabled(false);

        ///// # _layoutEditBoxText
        this._layoutEditBoxText = new ccui.Layout();
        this._layoutEditBoxText.setName("_layoutEditBoxText");
        this._editBoxCode.addChild(this._layoutEditBoxText);
        this._layoutEditBoxText.setCascadeOpacityEnabled(true);
        this._layoutEditBoxText.setCascadeColorEnabled(true);
        this._layoutEditBoxText.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutEditBoxText, 0.5, 0.5);
        let _layoutEditBoxTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEditBoxText);
        _layoutEditBoxTextLayoutComponent.setPositionPercentXEnabled(true);
        _layoutEditBoxTextLayoutComponent.setPositionPercentX(0.5);
        _layoutEditBoxTextLayoutComponent.setPositionPercentYEnabled(true);
        _layoutEditBoxTextLayoutComponent.setPositionPercentY(0.5);
        _layoutEditBoxTextLayoutComponent.setPercentWidthEnabled(true);
        _layoutEditBoxTextLayoutComponent.setPercentWidth(0.95);
        _layoutEditBoxTextLayoutComponent.setPercentHeightEnabled(true);
        _layoutEditBoxTextLayoutComponent.setPercentHeight(1);
        this._layoutEditBoxText.setTouchEnabled(false);
        this._layoutEditBoxText.setUnifySizeEnabled(false);
        this._layoutEditBoxText.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutEditBoxText, 0.95, 1);
        this._layoutEditBoxText.setClippingEnabled(true);

        ///// # _txtEditBoxTextDisplay
        this._txtEditBoxTextDisplay = new ck.Text();
        this._txtEditBoxTextDisplay.setName("_txtEditBoxTextDisplay");
        this._layoutEditBoxText.addChild(this._txtEditBoxTextDisplay);
        this._txtEditBoxTextDisplay.setCascadeOpacityEnabled(true);
        this._txtEditBoxTextDisplay.setCascadeColorEnabled(true);
        this._txtEditBoxTextDisplay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtEditBoxTextDisplay, 0.5, 0.5);
        let _txtEditBoxTextDisplayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtEditBoxTextDisplay);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentXEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentX(0.5);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentYEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentY(0.5);
        this._txtEditBoxTextDisplay.setTouchEnabled(false);
        this._txtEditBoxTextDisplay.ignoreContentAdaptWithSize(true);
        this._txtEditBoxTextDisplay.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtEditBoxTextDisplay.setDefaultFontSize(45);
        this._txtEditBoxTextDisplay.setTextHorizontalAlignment(1);
        this._txtEditBoxTextDisplay.setTextVerticalAlignment(1);

        ///// # _initEditBox for this._editBoxCode;
        this._editBoxCode._initEditBox();

        ///// # _btnSubmit
        this._btnSubmit = new AsyncButton();
        this._btnSubmit.setName("_btnSubmit");
        this._layoutEnterCode.addChild(this._btnSubmit);
        this._btnSubmit.setCascadeOpacityEnabled(true);
        this._btnSubmit.setCascadeColorEnabled(true);
        this._btnSubmit.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnSubmit, 0.8259, 0.3298);
        let _btnSubmitLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnSubmit);
        _btnSubmitLayoutComponent.setPositionPercentXEnabled(true);
        _btnSubmitLayoutComponent.setPositionPercentX(0.8259);
        _btnSubmitLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _btnSubmitLayoutComponent.setTopMargin(72.5406);
        this._btnSubmit.setUnifySizeEnabled(false);
        this._btnSubmit.ignoreContentAdaptWithSize(false);
        this._btnSubmit.setContentSize(cc.size(158.8902, 60));
        this._btnSubmit.setTouchEnabled(true);

        ///// # _imgButtonSubmit
        this._imgButtonSubmit = new ccui.ImageView();
        this._imgButtonSubmit.setName("_imgButtonSubmit");
        this._btnSubmit.addChild(this._imgButtonSubmit);
        this._imgButtonSubmit.setCascadeOpacityEnabled(true);
        this._imgButtonSubmit.setCascadeColorEnabled(true);
        this._imgButtonSubmit.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonSubmit, 0.5, 0.5);
        let _imgButtonSubmitLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonSubmit);
        _imgButtonSubmitLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonSubmitLayoutComponent.setPositionPercentX(0.5);
        _imgButtonSubmitLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonSubmitLayoutComponent.setPositionPercentY(0.5);
        _imgButtonSubmitLayoutComponent.setPercentWidthEnabled(true);
        _imgButtonSubmitLayoutComponent.setPercentWidth(1);
        _imgButtonSubmitLayoutComponent.setPercentHeightEnabled(true);
        _imgButtonSubmitLayoutComponent.setPercentHeight(1);
        this._imgButtonSubmit.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgButtonSubmit.setUnifySizeEnabled(false);
        this._imgButtonSubmit.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgButtonSubmit, 1, 1);
        this._imgButtonSubmit.setTouchEnabled(false);

        ///// # _txtButtonSubmit
        this._txtButtonSubmit = new ck.Text();
        this._txtButtonSubmit.setName("_txtButtonSubmit");
        this._btnSubmit.addChild(this._txtButtonSubmit);
        this._txtButtonSubmit.setCascadeOpacityEnabled(true);
        this._txtButtonSubmit.setCascadeColorEnabled(true);
        this._txtButtonSubmit.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonSubmit, 0.5, 0.53);
        let _txtButtonSubmitLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonSubmit);
        _txtButtonSubmitLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonSubmitLayoutComponent.setPositionPercentX(0.5);
        _txtButtonSubmitLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonSubmitLayoutComponent.setPositionPercentY(0.53);
        _txtButtonSubmitLayoutComponent.setPercentWidthEnabled(true);
        _txtButtonSubmitLayoutComponent.setPercentWidth(0.9);
        _txtButtonSubmitLayoutComponent.setPercentHeightEnabled(true);
        _txtButtonSubmitLayoutComponent.setPercentHeight(0.8);
        this._txtButtonSubmit.setTouchEnabled(false);
        this._txtButtonSubmit.setUnifySizeEnabled(false);
        this._txtButtonSubmit.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtButtonSubmit, 0.9, 0.8);
        this._txtButtonSubmit.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonSubmit.setDefaultFontSize(32);
        this._txtButtonSubmit.setString(gm.localize.getText("TXT_SUBMIT").toUpperCase());
        this._txtButtonSubmit.setTextHorizontalAlignment(1);
        this._txtButtonSubmit.setTextVerticalAlignment(1);
        this._txtButtonSubmit.enableOutline(cc.color(0, 139, 86, 255), 1);
        this._txtButtonSubmit.autoFitSingleLine();

        ///// # _imgLoadingButtonSubmit
        this._imgLoadingButtonSubmit = new ccui.ImageView();
        this._imgLoadingButtonSubmit.setName("_imgLoadingButtonSubmit");
        this._btnSubmit.addChild(this._imgLoadingButtonSubmit);
        this._imgLoadingButtonSubmit.setCascadeOpacityEnabled(true);
        this._imgLoadingButtonSubmit.setCascadeColorEnabled(true);
        this._imgLoadingButtonSubmit.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLoadingButtonSubmit, 0.5, 0.54);
        this._imgLoadingButtonSubmit.setVisible(false);
        this._imgLoadingButtonSubmit.setScale(0.6319, 0.6319);
        let _imgLoadingButtonSubmitLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoadingButtonSubmit);
        _imgLoadingButtonSubmitLayoutComponent.setPositionPercentXEnabled(true);
        _imgLoadingButtonSubmitLayoutComponent.setPositionPercentX(0.5);
        _imgLoadingButtonSubmitLayoutComponent.setPositionPercentYEnabled(true);
        _imgLoadingButtonSubmitLayoutComponent.setPositionPercentY(0.54);
        this._imgLoadingButtonSubmit.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgLoadingButtonSubmit.setUnifySizeEnabled(false);
        this._imgLoadingButtonSubmit.ignoreContentAdaptWithSize(false);
        this._imgLoadingButtonSubmit.setContentSize(cc.size(50, 50));
        this._imgLoadingButtonSubmit.setTouchEnabled(false);

        ///// # _layoutEnterCodeSuccessful
        this._layoutEnterCodeSuccessful = new ccui.Layout();
        this._layoutEnterCodeSuccessful.setName("_layoutEnterCodeSuccessful");
        this._layoutContentPopup.addChild(this._layoutEnterCodeSuccessful);
        this._layoutEnterCodeSuccessful.setCascadeOpacityEnabled(true);
        this._layoutEnterCodeSuccessful.setCascadeColorEnabled(true);
        this._layoutEnterCodeSuccessful.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutEnterCodeSuccessful, 0.5, 0.3498);
        this._layoutEnterCodeSuccessful.setVisible(false);
        let _layoutEnterCodeSuccessfulLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEnterCodeSuccessful);
        _layoutEnterCodeSuccessfulLayoutComponent.setPositionPercentXEnabled(true);
        _layoutEnterCodeSuccessfulLayoutComponent.setPositionPercentX(0.5);
        _layoutEnterCodeSuccessfulLayoutComponent.setPercentWidthEnabled(true);
        _layoutEnterCodeSuccessfulLayoutComponent.setPercentWidth(1);
        _layoutEnterCodeSuccessfulLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _layoutEnterCodeSuccessfulLayoutComponent.setTopMargin(433.0569);
        this._layoutEnterCodeSuccessful.setTouchEnabled(false);
        this._layoutEnterCodeSuccessful.setUnifySizeEnabled(false);
        this._layoutEnterCodeSuccessful.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutEnterCodeSuccessful, 1);
        this._layoutEnterCodeSuccessful.setContentSize(cc.size(this._layoutEnterCodeSuccessful.width, 153));

        ///// # _imgBannerEnterCodeSuccessful
        this._imgBannerEnterCodeSuccessful = new ccui.ImageView();
        this._imgBannerEnterCodeSuccessful.setName("_imgBannerEnterCodeSuccessful");
        this._layoutEnterCodeSuccessful.addChild(this._imgBannerEnterCodeSuccessful);
        this._imgBannerEnterCodeSuccessful.setCascadeOpacityEnabled(true);
        this._imgBannerEnterCodeSuccessful.setCascadeColorEnabled(true);
        this._imgBannerEnterCodeSuccessful.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBannerEnterCodeSuccessful, 0.5, 0.5);
        let _imgBannerEnterCodeSuccessfulLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBannerEnterCodeSuccessful);
        _imgBannerEnterCodeSuccessfulLayoutComponent.setPositionPercentXEnabled(true);
        _imgBannerEnterCodeSuccessfulLayoutComponent.setPositionPercentX(0.5);
        _imgBannerEnterCodeSuccessfulLayoutComponent.setPositionPercentYEnabled(true);
        _imgBannerEnterCodeSuccessfulLayoutComponent.setPositionPercentY(0.5);
        this._imgBannerEnterCodeSuccessful.loadTexture("sprites/banner/InviteFriend.png", 0);
        this._imgBannerEnterCodeSuccessful.setUnifySizeEnabled(false);
        this._imgBannerEnterCodeSuccessful.ignoreContentAdaptWithSize(false);
        this._imgBannerEnterCodeSuccessful.setContentSize(cc.size(467, 149));
        this._imgBannerEnterCodeSuccessful.setTouchEnabled(false);

        ///// # _txtEnterCodeSuccessful
        this._txtEnterCodeSuccessful = new ck.Text();
        this._txtEnterCodeSuccessful.setName("_txtEnterCodeSuccessful");
        this._layoutEnterCodeSuccessful.addChild(this._txtEnterCodeSuccessful);
        this._txtEnterCodeSuccessful.setCascadeOpacityEnabled(true);
        this._txtEnterCodeSuccessful.setCascadeColorEnabled(true);
        this._txtEnterCodeSuccessful.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._txtEnterCodeSuccessful, 0.9712, 0.0327);
        let _txtEnterCodeSuccessfulLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtEnterCodeSuccessful);
        _txtEnterCodeSuccessfulLayoutComponent.setPercentWidthEnabled(true);
        _txtEnterCodeSuccessfulLayoutComponent.setPercentWidth(0.64);
        _txtEnterCodeSuccessfulLayoutComponent.setHorizontalEdge(ccui.LayoutComponent.horizontalEdge.RIGHT);
        _txtEnterCodeSuccessfulLayoutComponent.setRightMargin(14);
        _txtEnterCodeSuccessfulLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.BOTTOM);
        _txtEnterCodeSuccessfulLayoutComponent.setBottomMargin(5);
        this._txtEnterCodeSuccessful.setTouchEnabled(false);
        this._txtEnterCodeSuccessful.setUnifySizeEnabled(false);
        this._txtEnterCodeSuccessful.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtEnterCodeSuccessful, 0.64);
        this._txtEnterCodeSuccessful.setContentSize(cc.size(this._txtEnterCodeSuccessful.width, 78));
        this._txtEnterCodeSuccessful.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtEnterCodeSuccessful.setDefaultFontSize(33);
        this._txtEnterCodeSuccessful.setString(gm.localize.getText("TXT_ENTER_INVITE_CODE_SUCCESSFUL"));
        this._txtEnterCodeSuccessful.setTextHorizontalAlignment(2);
        this._txtEnterCodeSuccessful.setTextVerticalAlignment(2);
        this._txtEnterCodeSuccessful.enableOutline(cc.color(0, 0, 0, 255), 1);
        this._txtEnterCodeSuccessful.enableShadow(cc.color(110, 110, 110, 255), cc.size(0, -2), 0);
        this._txtEnterCodeSuccessful.autoFitSingleLine();

        ///// # _gridViewClaimRewards
        this._gridViewClaimRewards = new ck.GridViewVertical();
        this._gridViewClaimRewards.setName("_gridViewClaimRewards");
        this._layoutPopup.addChild(this._gridViewClaimRewards);
        this._gridViewClaimRewards.setCascadeOpacityEnabled(true);
        this._gridViewClaimRewards.setCascadeColorEnabled(true);
        this._gridViewClaimRewards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridViewClaimRewards, 0.5312, 0.3601);
        let _gridViewClaimRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewClaimRewards);

    },


    playCCSAnimTutorial: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimTutorial();
    
        let _imgSocial01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(25 / (60 * speed), 82.3611, -18.1667).easing(cc.easeQuadraticActionOut()),
                    cc.moveTo(35 / (60 * speed), 86, -19),
                    cc.moveTo(25 / (60 * speed), 41.2778, 23.7778).easing(cc.easeQuadraticActionOut()),
                    cc.moveTo(35 / (60 * speed), 40, 25),
                    cc.moveTo(25 / (60 * speed), -42.6389, 11.3889).easing(cc.easeQuadraticActionOut()),
                    cc.moveTo(35 / (60 * speed), -45, 11)
                ),
                cc.sequence(
                    cc.scaleTo(25 / (60 * speed), 0.5139, 0.5139).easing(cc.easeQuadraticActionOut()),
                    cc.scaleTo(35 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(25 / (60 * speed), 0.6621, 0.6621).easing(cc.easeQuadraticActionOut()),
                    cc.scaleTo(35 / (60 * speed), 0.6667, 0.6667),
                    cc.scaleTo(25 / (60 * speed), 0.9907, 0.9907).easing(cc.easeQuadraticActionOut()),
                    cc.scaleTo(35 / (60 * speed), 1, 1)
                ),
                cc.sequence(
                    cc.rotateBy(25 / (60 * speed), 48.611000000000004, 48.611000000000004).easing(cc.easeQuadraticActionOut()),
                    cc.rotateBy(35 / (60 * speed), 1.3888999999999996, 1.3887999999999998),
                    cc.rotateBy(25 / (60 * speed), -14.5833, -14.583300000000001).easing(cc.easeQuadraticActionOut()),
                    cc.rotateBy(35 / (60 * speed), -0.4167000000000005, -0.4167000000000005),
                    cc.rotateBy(25 / (60 * speed), -34.027699999999996, -34.0276).easing(cc.easeQuadraticActionOut()),
                    cc.rotateBy(35 / (60 * speed), -0.9722000000000008, -0.9722000000000008)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgSocial01.setPosition(-45, 11);
                this._imgSocial01.setScale(1, 1);
                this._imgSocial01.setRotation(-19.9999);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgSocial01Action = _imgSocial01Action.repeatForever();
        } else _imgSocial01Action = cc.sequence(
            cc.delayTime(delay),
            _imgSocial01Action.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgSocial01.runAction(_imgSocial01Action);
    
        let _imgSocial02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(25 / (60 * speed), -42.6389, 11.3889).easing(cc.easeQuadraticActionOut()),
                    cc.moveTo(35 / (60 * speed), -45, 11),
                    cc.moveTo(25 / (60 * speed), 82.3611, -18.1667).easing(cc.easeQuadraticActionOut()),
                    cc.moveTo(35 / (60 * speed), 86, -19),
                    cc.moveTo(25 / (60 * speed), 41.2778, 23.7778).easing(cc.easeQuadraticActionOut()),
                    cc.moveTo(35 / (60 * speed), 40, 25)
                ),
                cc.sequence(
                    cc.scaleTo(25 / (60 * speed), 1.3889, 1.3889).easing(cc.easeQuadraticActionOut()),
                    cc.scaleTo(35 / (60 * speed), 1.4, 1.4),
                    cc.scaleTo(25 / (60 * speed), 0.7194, 0.7194).easing(cc.easeQuadraticActionOut()),
                    cc.scaleTo(35 / (60 * speed), 0.7, 0.7),
                    cc.scaleTo(25 / (60 * speed), 0.9917, 0.9917).easing(cc.easeQuadraticActionOut()),
                    cc.scaleTo(35 / (60 * speed), 1, 1)
                ),
                cc.sequence(
                    cc.rotateBy(25 / (60 * speed), -34.0278, -34.0278).easing(cc.easeQuadraticActionOut()),
                    cc.rotateBy(35 / (60 * speed), -0.9722000000000008, -0.9722000000000008),
                    cc.rotateBy(25 / (60 * speed), 48.6111, 48.6111).easing(cc.easeQuadraticActionOut()),
                    cc.rotateBy(35 / (60 * speed), 1.3888999999999996, 1.3888999999999996),
                    cc.rotateBy(25 / (60 * speed), -14.5833, -14.5833).easing(cc.easeQuadraticActionOut()),
                    cc.rotateBy(35 / (60 * speed), -0.4167000000000005, -0.4167000000000005)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgSocial02.setPosition(40, 25);
                this._imgSocial02.setScale(1, 1);
                this._imgSocial02.setRotation(15);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgSocial02Action = _imgSocial02Action.repeatForever();
        } else _imgSocial02Action = cc.sequence(
            cc.delayTime(delay),
            _imgSocial02Action.repeat(repeat)
        )
        
        this._imgSocial02.runAction(_imgSocial02Action);
    
        let _imgSocial03Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(25 / (60 * speed), 41.2778, 23.7778).easing(cc.easeQuadraticActionOut()),
                    cc.moveTo(35 / (60 * speed), 40, 25),
                    cc.moveTo(25 / (60 * speed), -42.6389, 11.3889).easing(cc.easeQuadraticActionOut()),
                    cc.moveTo(35 / (60 * speed), -45, 11),
                    cc.moveTo(25 / (60 * speed), 82.3611, -18.1667).easing(cc.easeQuadraticActionOut()),
                    cc.moveTo(35 / (60 * speed), 86, -19)
                ),
                cc.sequence(
                    cc.scaleTo(25 / (60 * speed), 1.4181, 1.4181).easing(cc.easeQuadraticActionOut()),
                    cc.scaleTo(35 / (60 * speed), 1.43, 1.43),
                    cc.scaleTo(25 / (60 * speed), 1.9842, 1.9842).easing(cc.easeQuadraticActionOut()),
                    cc.scaleTo(35 / (60 * speed), 2, 2),
                    cc.scaleTo(25 / (60 * speed), 1.0278, 1.0278).easing(cc.easeQuadraticActionOut()),
                    cc.scaleTo(35 / (60 * speed), 1, 1)
                ),
                cc.sequence(
                    cc.rotateBy(25 / (60 * speed), -14.5833, -14.5834).easing(cc.easeQuadraticActionOut()),
                    cc.rotateBy(35 / (60 * speed), -0.4167000000000005, -0.41660000000000075),
                    cc.rotateBy(25 / (60 * speed), -34.0278, -34.0278).easing(cc.easeQuadraticActionOut()),
                    cc.rotateBy(35 / (60 * speed), -0.9722000000000008, -0.9722000000000008),
                    cc.rotateBy(25 / (60 * speed), 48.6111, 48.6111).easing(cc.easeQuadraticActionOut()),
                    cc.rotateBy(35 / (60 * speed), 1.3888999999999996, 1.3888999999999996)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgSocial03.setPosition(86, -19);
                this._imgSocial03.setScale(1, 1);
                this._imgSocial03.setRotation(30);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgSocial03Action = _imgSocial03Action.repeatForever();
        } else _imgSocial03Action = cc.sequence(
            cc.delayTime(delay),
            _imgSocial03Action.repeat(repeat)
        )
        
        this._imgSocial03.runAction(_imgSocial03Action);
    
        let _imgNetworkBackgroundAction = cc.sequence(
            cc.spawn(
                cc.rotateBy(180 / (60 * speed), 270, 270)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgNetworkBackground.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgNetworkBackgroundAction = _imgNetworkBackgroundAction.repeatForever();
        } else _imgNetworkBackgroundAction = cc.sequence(
            cc.delayTime(delay),
            _imgNetworkBackgroundAction.repeat(repeat)
        )
        
        this._imgNetworkBackground.runAction(_imgNetworkBackgroundAction);
    
        let _imgNetworkAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.rotateBy(30 / (60 * speed), 15, 15),
                    cc.rotateBy(60 / (60 * speed), -30, -30),
                    cc.rotateBy(90 / (60 * speed), 15, 15)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgNetwork.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgNetworkAction = _imgNetworkAction.repeatForever();
        } else _imgNetworkAction = cc.sequence(
            cc.delayTime(delay),
            _imgNetworkAction.repeat(repeat)
        )
        
        this._imgNetwork.runAction(_imgNetworkAction);
    },

    resetCCSAnimTutorial: function () {
        this._imgSocial01.stopAllActions();
        this._imgSocial01.setPosition(-45, 11);
        this._imgSocial01.setScale(1, 1);
        this._imgSocial01.setRotation(-19.9999);
    
        this._imgSocial02.stopAllActions();
        this._imgSocial02.setPosition(40, 25);
        this._imgSocial02.setScale(1, 1);
        this._imgSocial02.setRotation(15);
    
        this._imgSocial03.stopAllActions();
        this._imgSocial03.setPosition(86, -19);
        this._imgSocial03.setScale(1, 1);
        this._imgSocial03.setRotation(30);
    
        this._imgNetworkBackground.stopAllActions();
        this._imgNetworkBackground.setRotation(0);
    
        this._imgNetwork.stopAllActions();
        this._imgNetwork.setRotation(0);
    },

    playCCSAnimNotEnterCode: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimNotEnterCode();
    
    
    
    
    },

    resetCCSAnimNotEnterCode: function () {
        this._layoutEnterCode.stopAllActions();
        this._layoutEnterCode.setVisible(true);
    
        this._layoutEnterCodeSuccessful.stopAllActions();
        this._layoutEnterCodeSuccessful.setVisible(false);
    },

    playCCSAnimEnterCodeSuccessful: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimEnterCodeSuccessful();
    
    
    
    
    },

    resetCCSAnimEnterCodeSuccessful: function () {
        this._layoutEnterCode.stopAllActions();
        this._layoutEnterCode.setVisible(false);
    
        this._layoutEnterCodeSuccessful.stopAllActions();
        this._layoutEnterCodeSuccessful.setVisible(true);
    }
});

/**
 * Create InviteFriendPopup
 * @returns {_ccs.InviteFriendPopup}
 */
_ccs.InviteFriendPopup.create = function () {
    return new _ccs.InviteFriendPopup();
};
