/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.LoginLayer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.LoginLayer = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ccui.ImageView} */
    _imgLogo: null,
    /** @type {ck.Text} */
    _txtTitle: null,
    /** @type {ck.GridViewVertical} */
    _layoutMethods: null,
    /** @type {ccui.Layout} */
    _layoutID: null,
    /** @type {ck.Text} */
    _txtID: null,
    /** @type {ck.EditBox} */
    _editBoxID: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxBackground: null,
    /** @type {ccui.ImageView} */
    _imgEditBoxBackground: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxText: null,
    /** @type {ck.Text} */
    _txtEditBoxTextDisplay: null,
    /** @type {ccui.ImageView} */
    _imgID: null,
    /** @type {ck.Text} */
    _txtLogin: null,
    /** @type {ccui.ImageView} */
    _imgGuest: null,
    /** @type {ccui.ImageView} */
    _imgIconGuest: null,
    /** @type {ck.Text} */
    _txtGuest: null,
    /** @type {ccui.ImageView} */
    _imgFacebook: null,
    /** @type {ccui.ImageView} */
    _imgIconFacebook: null,
    /** @type {ck.Text} */
    _txtFacebook: null,
    /** @type {ccui.ImageView} */
    _imgGoogle: null,
    /** @type {ccui.ImageView} */
    _imgIconGoogle: null,
    /** @type {ck.Text} */
    _txtGoogle: null,
    /** @type {ccui.ImageView} */
    _imgApple: null,
    /** @type {ccui.ImageView} */
    _imgIconApple: null,
    /** @type {ck.Text} */
    _txtApple: null,
    /** @type {ck.Text} */
    _txtVersion: null,


    /**
     * _ccs.LoginLayer constructor
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

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._root.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr, 0.5, 0.5);
        if (!PlatformUtils.hasNotch()) {
            let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
            _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
            _imgBgrLayoutComponent.setPositionPercentX(0.5);
            _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
            _imgBgrLayoutComponent.setPositionPercentY(0.5);
            _imgBgrLayoutComponent.setPercentWidthEnabled(true);
            _imgBgrLayoutComponent.setPercentWidth(1);
            _imgBgrLayoutComponent.setPercentHeightEnabled(true);
            _imgBgrLayoutComponent.setPercentHeight(1.0035);
        }
        this._imgBgr.loadTexture("sprites/backgrounds/Login.png", 0);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setScale9Enabled(true);
        this._imgBgr.setCapInsets(cc.rect(69, 57, 502, 1026));
        ck.UIUtils.setSizePercent(this._imgBgr, 1, 1.0035);
        this._imgBgr.setTouchEnabled(false);
        UIUtils.initFullScreenBackground(this._imgBgr);

        ///// # _imgLogo
        this._imgLogo = new ccui.ImageView();
        this._imgLogo.setName("_imgLogo");
        this._root.addChild(this._imgLogo);
        this._imgLogo.setCascadeOpacityEnabled(true);
        this._imgLogo.setCascadeColorEnabled(true);
        this._imgLogo.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLogo, 0.5, 0.75);
        let _imgLogoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLogo);
        _imgLogoLayoutComponent.setPositionPercentXEnabled(true);
        _imgLogoLayoutComponent.setPositionPercentX(0.5);
        _imgLogoLayoutComponent.setPositionPercentYEnabled(true);
        _imgLogoLayoutComponent.setPositionPercentY(0.75);
        this._imgLogo.loadTexture("icons/color/other/Logo.png", 1);
        this._imgLogo.setUnifySizeEnabled(false);
        this._imgLogo.ignoreContentAdaptWithSize(false);
        this._imgLogo.setContentSize(cc.size(537, 518));
        this._imgLogo.setTouchEnabled(false);

        ///// # _txtTitle
        this._txtTitle = new ck.Text();
        this._txtTitle.setName("_txtTitle");
        this._root.addChild(this._txtTitle);
        this._txtTitle.setCascadeOpacityEnabled(true);
        this._txtTitle.setCascadeColorEnabled(true);
        this._txtTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle, 0.5, 0.5);
        let _txtTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle);
        _txtTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentX(0.5);
        _txtTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentY(0.5);
        this._txtTitle.setTouchEnabled(false);
        this._txtTitle.setUnifySizeEnabled(false);
        this._txtTitle.ignoreContentAdaptWithSize(false);
        this._txtTitle.setContentSize(cc.size(530, 49));
        this._txtTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTitle.setDefaultFontSize(40);
        this._txtTitle.setString(gm.localize.getText("TXT_CHOOSE_YOUR_LOGIN_METHOD").toUpperCase());
        this._txtTitle.setTextHorizontalAlignment(1);
        this._txtTitle.setTextVerticalAlignment(0);
        this._txtTitle.enableOutline(cc.color(0, 26, 73, 255), 2);
        this._txtTitle.enableShadow(cc.color(110, 110, 110, 255), cc.size(0, -1), 0);
        this._txtTitle.autoFitSingleLine();

        ///// # _layoutMethods
        this._layoutMethods = new ck.GridViewVertical();
        this._layoutMethods.setName("_layoutMethods");
        this._root.addChild(this._layoutMethods);
        this._layoutMethods.setCascadeOpacityEnabled(true);
        this._layoutMethods.setCascadeColorEnabled(true);
        this._layoutMethods.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutMethods, 0.5, 0.245);
        let _layoutMethodsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutMethods);
        _layoutMethodsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutMethodsLayoutComponent.setPositionPercentX(0.5);
        _layoutMethodsLayoutComponent.setPositionPercentYEnabled(true);
        _layoutMethodsLayoutComponent.setPositionPercentY(0.245);

        ///// # _layoutID
        this._layoutID = new ccui.Layout();
        this._layoutID.setName("_layoutID");
        this._layoutMethods.addChild(this._layoutID);
        this._layoutID.setCascadeOpacityEnabled(true);
        this._layoutID.setCascadeColorEnabled(true);
        this._layoutID.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutID, 0.5, 0.874);
        let _layoutIDLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutID);
        _layoutIDLayoutComponent.setPositionPercentXEnabled(true);
        _layoutIDLayoutComponent.setPositionPercentX(0.5);
        this._layoutID.setTouchEnabled(true);
        this._layoutID.setUnifySizeEnabled(false);
        this._layoutID.ignoreContentAdaptWithSize(false);
        this._layoutID.setContentSize(cc.size(464, 105));

        ///// # _txtID
        this._txtID = new ck.Text();
        this._txtID.setName("_txtID");
        this._layoutID.addChild(this._txtID);
        this._txtID.setCascadeOpacityEnabled(true);
        this._txtID.setCascadeColorEnabled(true);
        this._txtID.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtID, 0, 1);
        let _txtIDLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtID);
        _txtIDLayoutComponent.setPositionPercentXEnabled(true);
        _txtIDLayoutComponent.setPositionPercentX(0);
        _txtIDLayoutComponent.setPositionPercentYEnabled(true);
        _txtIDLayoutComponent.setPositionPercentY(1);
        this._txtID.setTouchEnabled(false);
        this._txtID.ignoreContentAdaptWithSize(true);
        this._txtID.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtID.setDefaultFontSize(40);
        this._txtID.setString(gm.localize.getText("TXT_LOGIN_WITH_ID"));
        this._txtID.setTextHorizontalAlignment(1);
        this._txtID.setTextVerticalAlignment(1);
        this._txtID.enableOutline(cc.color(0, 101, 98, 255), 2);

        ///// # _editBoxID
        this._editBoxID = new ck.EditBox();
        this._editBoxID.setName("_editBoxID");
        this._layoutID.addChild(this._editBoxID);
        this._editBoxID.setCascadeOpacityEnabled(true);
        this._editBoxID.setCascadeColorEnabled(true);
        this._editBoxID.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxID, 0.3196, 0.2667);
        let _editBoxIDLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxID);
        this._editBoxID.setUnifySizeEnabled(false);
        this._editBoxID.ignoreContentAdaptWithSize(false);
        this._editBoxID.setContentSize(cc.size(296.5802, 56));
        this._editBoxID.setTouchEnabled(false);

        ///// # _layoutEditBoxBackground
        this._layoutEditBoxBackground = new ccui.Layout();
        this._layoutEditBoxBackground.setName("_layoutEditBoxBackground");
        this._editBoxID.addChild(this._layoutEditBoxBackground);
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
        this._imgEditBoxBackground.setColor(cc.color(146, 187, 225, 255));
        let _imgEditBoxBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgEditBoxBackground);
        _imgEditBoxBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgEditBoxBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgEditBoxBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgEditBoxBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgEditBoxBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgEditBoxBackgroundLayoutComponent.setPercentWidth(1);
        _imgEditBoxBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgEditBoxBackgroundLayoutComponent.setPercentHeight(1);
        this._imgEditBoxBackground.loadTexture("basics/bars/Bar_11.png", 1);
        this._imgEditBoxBackground.setUnifySizeEnabled(false);
        this._imgEditBoxBackground.ignoreContentAdaptWithSize(false);
        this._imgEditBoxBackground.setScale9Enabled(true);
        this._imgEditBoxBackground.setCapInsets(cc.rect(21, 4, 36, 6));
        ck.UIUtils.setSizePercent(this._imgEditBoxBackground, 1, 1);
        this._imgEditBoxBackground.setTouchEnabled(false);

        ///// # _layoutEditBoxText
        this._layoutEditBoxText = new ccui.Layout();
        this._layoutEditBoxText.setName("_layoutEditBoxText");
        this._editBoxID.addChild(this._layoutEditBoxText);
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
        let _txtEditBoxTextDisplayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtEditBoxTextDisplay);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentXEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentX(0.5);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentYEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentY(0.5);
        this._txtEditBoxTextDisplay.setTouchEnabled(false);
        this._txtEditBoxTextDisplay.ignoreContentAdaptWithSize(true);
        this._txtEditBoxTextDisplay.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtEditBoxTextDisplay.setDefaultFontSize(40);
        this._txtEditBoxTextDisplay.setString(gm.localize.getText("TXT_ENTER_HERE"));
        this._txtEditBoxTextDisplay.setTextHorizontalAlignment(1);
        this._txtEditBoxTextDisplay.setTextVerticalAlignment(1);
        this._txtEditBoxTextDisplay.enableOutline(cc.color(138, 80, 12, 255), 2);

        ///// # _initEditBox for this._editBoxID;
        this._editBoxID._initEditBox();

        ///// # _imgID
        this._imgID = new ccui.ImageView();
        this._imgID.setName("_imgID");
        this._layoutID.addChild(this._imgID);
        this._imgID.setCascadeOpacityEnabled(true);
        this._imgID.setCascadeColorEnabled(true);
        this._imgID.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgID, 0.8254, 0.475);
        let _imgIDLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgID);
        _imgIDLayoutComponent.setPositionPercentXEnabled(true);
        _imgIDLayoutComponent.setPositionPercentX(0.8254);
        _imgIDLayoutComponent.setPositionPercentYEnabled(true);
        _imgIDLayoutComponent.setPositionPercentY(0.475);
        _imgIDLayoutComponent.setPercentHeightEnabled(true);
        _imgIDLayoutComponent.setPercentHeight(1.05);
        this._imgID.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgID.setUnifySizeEnabled(false);
        this._imgID.ignoreContentAdaptWithSize(false);
        this._imgID.setScale9Enabled(true);
        this._imgID.setCapInsets(cc.rect(67, 0, 72, 81));
        ck.UIUtils.setHeightPercent(this._imgID, 1.05);
        this._imgID.setContentSize(cc.size(162, this._imgID.height));
        this._imgID.setTouchEnabled(false);

        ///// # _txtLogin
        this._txtLogin = new ck.Text();
        this._txtLogin.setName("_txtLogin");
        this._imgID.addChild(this._txtLogin);
        this._txtLogin.setCascadeOpacityEnabled(true);
        this._txtLogin.setCascadeColorEnabled(true);
        this._txtLogin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLogin, 0.5, 0.54);
        let _txtLoginLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLogin);
        _txtLoginLayoutComponent.setPositionPercentXEnabled(true);
        _txtLoginLayoutComponent.setPositionPercentX(0.5);
        _txtLoginLayoutComponent.setPositionPercentYEnabled(true);
        _txtLoginLayoutComponent.setPositionPercentY(0.54);
        this._txtLogin.setTouchEnabled(false);
        this._txtLogin.ignoreContentAdaptWithSize(true);
        this._txtLogin.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLogin.setDefaultFontSize(40);
        this._txtLogin.setString(gm.localize.getText("TXT_LOGIN").toUpperCase());
        this._txtLogin.setTextHorizontalAlignment(0);
        this._txtLogin.setTextVerticalAlignment(0);
        this._txtLogin.enableOutline(cc.color(144, 84, 0, 255), 2);

        ///// # _imgGuest
        this._imgGuest = new ccui.ImageView();
        this._imgGuest.setName("_imgGuest");
        this._layoutMethods.addChild(this._imgGuest);
        this._imgGuest.setCascadeOpacityEnabled(true);
        this._imgGuest.setCascadeColorEnabled(true);
        this._imgGuest.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGuest, 0.5, 0.624);
        let _imgGuestLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGuest);
        _imgGuestLayoutComponent.setPositionPercentXEnabled(true);
        _imgGuestLayoutComponent.setPositionPercentX(0.5);
        this._imgGuest.loadTexture("basics/other/BoardYellow.png", 1);
        this._imgGuest.setUnifySizeEnabled(false);
        this._imgGuest.ignoreContentAdaptWithSize(false);
        this._imgGuest.setScale9Enabled(true);
        this._imgGuest.setCapInsets(cc.rect(15, 33, 1, 39));
        this._imgGuest.setContentSize(cc.size(464, 105));
        this._imgGuest.setTouchEnabled(false);

        ///// # _imgIconGuest
        this._imgIconGuest = new ccui.ImageView();
        this._imgIconGuest.setName("_imgIconGuest");
        this._imgGuest.addChild(this._imgIconGuest);
        this._imgIconGuest.setCascadeOpacityEnabled(true);
        this._imgIconGuest.setCascadeColorEnabled(true);
        this._imgIconGuest.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconGuest, 0.1142, 0.54);
        let _imgIconGuestLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconGuest);
        _imgIconGuestLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconGuestLayoutComponent.setPositionPercentY(0.54);
        this._imgIconGuest.loadTexture("icons/color/socials/PlayGuest.png", 1);
        this._imgIconGuest.setUnifySizeEnabled(false);
        this._imgIconGuest.ignoreContentAdaptWithSize(false);
        this._imgIconGuest.setContentSize(cc.size(68, 68));
        this._imgIconGuest.setTouchEnabled(false);

        ///// # _txtGuest
        this._txtGuest = new ck.Text();
        this._txtGuest.setName("_txtGuest");
        this._imgGuest.addChild(this._txtGuest);
        this._txtGuest.setCascadeOpacityEnabled(true);
        this._txtGuest.setCascadeColorEnabled(true);
        this._txtGuest.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGuest, 0.23, 0.55);
        let _txtGuestLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGuest);
        _txtGuestLayoutComponent.setPositionPercentXEnabled(true);
        _txtGuestLayoutComponent.setPositionPercentX(0.23);
        _txtGuestLayoutComponent.setPositionPercentYEnabled(true);
        _txtGuestLayoutComponent.setPositionPercentY(0.55);
        this._txtGuest.setTouchEnabled(false);
        this._txtGuest.ignoreContentAdaptWithSize(true);
        this._txtGuest.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtGuest.setDefaultFontSize(35);
        this._txtGuest.setString(gm.localize.getText("TXT_PLAY_AS_GUEST"));
        this._txtGuest.setTextHorizontalAlignment(1);
        this._txtGuest.setTextVerticalAlignment(1);
        this._txtGuest.enableOutline(cc.color(138, 80, 12, 255), 2);

        ///// # _imgFacebook
        this._imgFacebook = new ccui.ImageView();
        this._imgFacebook.setName("_imgFacebook");
        this._layoutMethods.addChild(this._imgFacebook);
        this._imgFacebook.setCascadeOpacityEnabled(true);
        this._imgFacebook.setCascadeColorEnabled(true);
        this._imgFacebook.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgFacebook, 0.5, 0.374);
        let _imgFacebookLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFacebook);
        _imgFacebookLayoutComponent.setPositionPercentXEnabled(true);
        _imgFacebookLayoutComponent.setPositionPercentX(0.5);
        this._imgFacebook.loadTexture("basics/other/BoardBlue_02.png", 1);
        this._imgFacebook.setUnifySizeEnabled(false);
        this._imgFacebook.ignoreContentAdaptWithSize(false);
        this._imgFacebook.setScale9Enabled(true);
        this._imgFacebook.setCapInsets(cc.rect(15, 17, 1, 71));
        this._imgFacebook.setContentSize(cc.size(464, 105));
        this._imgFacebook.setTouchEnabled(false);

        ///// # _imgIconFacebook
        this._imgIconFacebook = new ccui.ImageView();
        this._imgIconFacebook.setName("_imgIconFacebook");
        this._imgFacebook.addChild(this._imgIconFacebook);
        this._imgIconFacebook.setCascadeOpacityEnabled(true);
        this._imgIconFacebook.setCascadeColorEnabled(true);
        this._imgIconFacebook.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconFacebook, 0.1142, 0.54);
        let _imgIconFacebookLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconFacebook);
        _imgIconFacebookLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconFacebookLayoutComponent.setPositionPercentY(0.54);
        this._imgIconFacebook.loadTexture("icons/color/socials/FacebookSquare.png", 1);
        this._imgIconFacebook.setUnifySizeEnabled(false);
        this._imgIconFacebook.ignoreContentAdaptWithSize(false);
        this._imgIconFacebook.setContentSize(cc.size(68, 68));
        this._imgIconFacebook.setTouchEnabled(false);

        ///// # _txtFacebook
        this._txtFacebook = new ck.Text();
        this._txtFacebook.setName("_txtFacebook");
        this._imgFacebook.addChild(this._txtFacebook);
        this._txtFacebook.setCascadeOpacityEnabled(true);
        this._txtFacebook.setCascadeColorEnabled(true);
        this._txtFacebook.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtFacebook, 0.23, 0.55);
        let _txtFacebookLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtFacebook);
        _txtFacebookLayoutComponent.setPositionPercentXEnabled(true);
        _txtFacebookLayoutComponent.setPositionPercentX(0.23);
        _txtFacebookLayoutComponent.setPositionPercentYEnabled(true);
        _txtFacebookLayoutComponent.setPositionPercentY(0.55);
        this._txtFacebook.setTouchEnabled(false);
        this._txtFacebook.ignoreContentAdaptWithSize(true);
        this._txtFacebook.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtFacebook.setDefaultFontSize(35);
        this._txtFacebook.setString(gm.localize.getText("TXT_SIGN_IN_WITH_FACEBOOK"));
        this._txtFacebook.setTextHorizontalAlignment(1);
        this._txtFacebook.setTextVerticalAlignment(1);
        this._txtFacebook.enableOutline(cc.color(31, 104, 154, 255), 2);

        ///// # _imgGoogle
        this._imgGoogle = new ccui.ImageView();
        this._imgGoogle.setName("_imgGoogle");
        this._layoutMethods.addChild(this._imgGoogle);
        this._imgGoogle.setCascadeOpacityEnabled(true);
        this._imgGoogle.setCascadeColorEnabled(true);
        this._imgGoogle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGoogle, 0.5, 0.124);
        let _imgGoogleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGoogle);
        _imgGoogleLayoutComponent.setPositionPercentXEnabled(true);
        _imgGoogleLayoutComponent.setPositionPercentX(0.5);
        this._imgGoogle.loadTexture("basics/other/BoardGreen_02.png", 1);
        this._imgGoogle.setUnifySizeEnabled(false);
        this._imgGoogle.ignoreContentAdaptWithSize(false);
        this._imgGoogle.setScale9Enabled(true);
        this._imgGoogle.setCapInsets(cc.rect(15, 33, 1, 39));
        this._imgGoogle.setContentSize(cc.size(464, 105));
        this._imgGoogle.setTouchEnabled(false);

        ///// # _imgIconGoogle
        this._imgIconGoogle = new ccui.ImageView();
        this._imgIconGoogle.setName("_imgIconGoogle");
        this._imgGoogle.addChild(this._imgIconGoogle);
        this._imgIconGoogle.setCascadeOpacityEnabled(true);
        this._imgIconGoogle.setCascadeColorEnabled(true);
        this._imgIconGoogle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconGoogle, 0.1142, 0.54);
        let _imgIconGoogleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconGoogle);
        _imgIconGoogleLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconGoogleLayoutComponent.setPositionPercentY(0.54);
        this._imgIconGoogle.loadTexture("icons/color/socials/GoogleSquare.png", 1);
        this._imgIconGoogle.setUnifySizeEnabled(false);
        this._imgIconGoogle.ignoreContentAdaptWithSize(false);
        this._imgIconGoogle.setContentSize(cc.size(68, 68));
        this._imgIconGoogle.setTouchEnabled(false);

        ///// # _txtGoogle
        this._txtGoogle = new ck.Text();
        this._txtGoogle.setName("_txtGoogle");
        this._imgGoogle.addChild(this._txtGoogle);
        this._txtGoogle.setCascadeOpacityEnabled(true);
        this._txtGoogle.setCascadeColorEnabled(true);
        this._txtGoogle.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGoogle, 0.23, 0.55);
        let _txtGoogleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGoogle);
        _txtGoogleLayoutComponent.setPositionPercentXEnabled(true);
        _txtGoogleLayoutComponent.setPositionPercentX(0.23);
        _txtGoogleLayoutComponent.setPositionPercentYEnabled(true);
        _txtGoogleLayoutComponent.setPositionPercentY(0.55);
        this._txtGoogle.setTouchEnabled(false);
        this._txtGoogle.ignoreContentAdaptWithSize(true);
        this._txtGoogle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtGoogle.setDefaultFontSize(35);
        this._txtGoogle.setString(gm.localize.getText("TXT_SIGN_IN_WITH_GOOGLE"));
        this._txtGoogle.setTextHorizontalAlignment(1);
        this._txtGoogle.setTextVerticalAlignment(1);
        this._txtGoogle.enableOutline(cc.color(25, 106, 21, 255), 1);

        ///// # _imgApple
        this._imgApple = new ccui.ImageView();
        this._imgApple.setName("_imgApple");
        this._layoutMethods.addChild(this._imgApple);
        this._imgApple.setCascadeOpacityEnabled(true);
        this._imgApple.setCascadeColorEnabled(true);
        this._imgApple.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgApple, 0.5, -0.126);
        let _imgAppleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgApple);
        _imgAppleLayoutComponent.setPositionPercentXEnabled(true);
        _imgAppleLayoutComponent.setPositionPercentX(0.5);
        this._imgApple.loadTexture("basics/other/BoardBlack.png", 1);
        this._imgApple.setUnifySizeEnabled(false);
        this._imgApple.ignoreContentAdaptWithSize(false);
        this._imgApple.setScale9Enabled(true);
        this._imgApple.setCapInsets(cc.rect(15, 33, 1, 39));
        this._imgApple.setContentSize(cc.size(464, 105));
        this._imgApple.setTouchEnabled(false);

        ///// # _imgIconApple
        this._imgIconApple = new ccui.ImageView();
        this._imgIconApple.setName("_imgIconApple");
        this._imgApple.addChild(this._imgIconApple);
        this._imgIconApple.setCascadeOpacityEnabled(true);
        this._imgIconApple.setCascadeColorEnabled(true);
        this._imgIconApple.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconApple, 0.1142, 0.54);
        let _imgIconAppleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconApple);
        _imgIconAppleLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconAppleLayoutComponent.setPositionPercentY(0.54);
        this._imgIconApple.loadTexture("icons/color/socials/AppleSquare.png", 1);
        this._imgIconApple.setUnifySizeEnabled(false);
        this._imgIconApple.ignoreContentAdaptWithSize(false);
        this._imgIconApple.setContentSize(cc.size(68, 68));
        this._imgIconApple.setTouchEnabled(false);

        ///// # _txtApple
        this._txtApple = new ck.Text();
        this._txtApple.setName("_txtApple");
        this._imgApple.addChild(this._txtApple);
        this._txtApple.setCascadeOpacityEnabled(true);
        this._txtApple.setCascadeColorEnabled(true);
        this._txtApple.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtApple, 0.23, 0.55);
        let _txtAppleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtApple);
        _txtAppleLayoutComponent.setPositionPercentXEnabled(true);
        _txtAppleLayoutComponent.setPositionPercentX(0.23);
        _txtAppleLayoutComponent.setPositionPercentYEnabled(true);
        _txtAppleLayoutComponent.setPositionPercentY(0.55);
        this._txtApple.setTouchEnabled(false);
        this._txtApple.ignoreContentAdaptWithSize(true);
        this._txtApple.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtApple.setDefaultFontSize(35);
        this._txtApple.setString(gm.localize.getText("TXT_SIGN_IN_WITH_APPLE"));
        this._txtApple.setTextHorizontalAlignment(1);
        this._txtApple.setTextVerticalAlignment(1);
        this._txtApple.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _txtVersion
        this._txtVersion = new ck.Text();
        this._txtVersion.setName("_txtVersion");
        this._root.addChild(this._txtVersion);
        this._txtVersion.setCascadeOpacityEnabled(true);
        this._txtVersion.setCascadeColorEnabled(true);
        this._txtVersion.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._txtVersion, 0.97, 0.01);
        let _txtVersionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtVersion);
        _txtVersionLayoutComponent.setPositionPercentXEnabled(true);
        _txtVersionLayoutComponent.setPositionPercentX(0.97);
        _txtVersionLayoutComponent.setPositionPercentYEnabled(true);
        _txtVersionLayoutComponent.setPositionPercentY(0.01);
        this._txtVersion.setTouchEnabled(false);
        this._txtVersion.ignoreContentAdaptWithSize(true);
        this._txtVersion.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtVersion.setDefaultFontSize(30);
        this._txtVersion.setTextHorizontalAlignment(0);
        this._txtVersion.setTextVerticalAlignment(0);

    },



});

/**
 * Create LoginLayer
 * @returns {_ccs.LoginLayer}
 */
_ccs.LoginLayer.create = function () {
    return new _ccs.LoginLayer();
};
