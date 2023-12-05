/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.SettingPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.SettingPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {ccui.ImageView} */
    _imgFont: null,
    /** @type {ck.Text} */
    _txtID: null,
    /** @type {ck.Text} */
    _txtVersion: null,
    /** @type {ccui.ImageView} */
    _imgCopy: null,
    /** @type {ck.Text} */
    _txtCopy: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ck.Text} */
    _txtHeader: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.Layout} */
    _layoutBGM: null,
    /** @type {ccui.ImageView} */
    _imgIconBGM: null,
    /** @type {ck.Text} */
    _txtBGM: null,
    /** @type {SettingSwitchButton} */
    _switchButtonBGM: null,
    /** @type {ccui.Layout} */
    _layoutSFX: null,
    /** @type {ccui.ImageView} */
    _imgIconSFX: null,
    /** @type {ck.Text} */
    _txtSFX: null,
    /** @type {SettingSwitchButton} */
    _switchButtonSFX: null,
    /** @type {ccui.ImageView} */
    _imgGiftCode: null,
    /** @type {ck.Text} */
    _txtGiftCode: null,
    /** @type {ccui.ImageView} */
    _imgGiftIcon: null,
    /** @type {ccui.ImageView} */
    _imgContact: null,
    /** @type {ck.Text} */
    _txtContact: null,
    /** @type {ccui.ImageView} */
    _imgIconContact: null,
    /** @type {ccui.ImageView} */
    _imgLogout: null,
    /** @type {ck.Text} */
    _txtLogout: null,
    /** @type {ccui.ImageView} */
    _imgLogoutIcon: null,
    /** @type {ccui.ImageView} */
    _imgLanguage: null,
    /** @type {ck.Text} */
    _txtLanguage: null,
    /** @type {ccui.ImageView} */
    _imgLanguageFlag: null,
    /** @type {ccui.ImageView} */
    _imgCheat: null,
    /** @type {ck.Text} */
    _txtCheat: null,
    /** @type {ccui.ImageView} */
    _imgGuide: null,
    /** @type {ck.Text} */
    _txtGuide: null,
    /** @type {ccui.ImageView} */
    _imgGuideBook: null,
    /** @type {ccui.ImageView} */
    _imgDeleteAccount: null,
    /** @type {ck.Text} */
    _txtDeleteAccount: null,
    /** @type {ccui.ImageView} */
    _imgPolicy: null,
    /** @type {ck.Text} */
    _txtPolicy: null,


    /**
     * _ccs.SettingPopup constructor
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

        ///// # _root
        this._root = new ccui.Layout();
        this._root.setName("_root");
        this.addChild(this._root);
        this._root.setCascadeOpacityEnabled(true);
        this._root.setCascadeColorEnabled(true);
        this._root.setAnchorPoint(cc.p(0.5, 0.5));
        this._root.setPosition(-0.0007, -0.0004);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(500, 567.6355));

        ///// # _imgBack
        this._imgBack = new ccui.ImageView();
        this._imgBack.setName("_imgBack");
        this._root.addChild(this._imgBack);
        this._imgBack.setCascadeOpacityEnabled(true);
        this._imgBack.setCascadeColorEnabled(true);
        this._imgBack.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBack, 0.5, 0.4959);
        let _imgBackLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBack);
        _imgBackLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackLayoutComponent.setPositionPercentX(0.5);
        _imgBackLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackLayoutComponent.setPositionPercentY(0.4959);
        _imgBackLayoutComponent.setPercentWidthEnabled(true);
        _imgBackLayoutComponent.setPercentWidth(1);
        _imgBackLayoutComponent.setPercentHeightEnabled(true);
        _imgBackLayoutComponent.setPercentHeight(1);
        this._imgBack.loadTexture("basics/popup/Back.png", 1);
        this._imgBack.setUnifySizeEnabled(false);
        this._imgBack.ignoreContentAdaptWithSize(false);
        this._imgBack.setScale9Enabled(true);
        this._imgBack.setCapInsets(cc.rect(69, 57, 72, 61));
        ck.UIUtils.setSizePercent(this._imgBack, 1, 1);
        this._imgBack.setTouchEnabled(false);

        ///// # _imgFont
        this._imgFont = new ccui.ImageView();
        this._imgFont.setName("_imgFont");
        this._root.addChild(this._imgFont);
        this._imgFont.setCascadeOpacityEnabled(true);
        this._imgFont.setCascadeColorEnabled(true);
        this._imgFont.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgFont, 0.5, 0.5);
        let _imgFontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFont);
        _imgFontLayoutComponent.setPositionPercentXEnabled(true);
        _imgFontLayoutComponent.setPositionPercentX(0.5);
        _imgFontLayoutComponent.setPositionPercentYEnabled(true);
        _imgFontLayoutComponent.setPositionPercentY(0.5);
        _imgFontLayoutComponent.setPercentWidthEnabled(true);
        _imgFontLayoutComponent.setPercentWidth(0.9353);
        _imgFontLayoutComponent.setPercentHeightEnabled(true);
        _imgFontLayoutComponent.setPercentHeight(0.9353);
        this._imgFont.loadTexture("basics/popup/Font.png", 1);
        this._imgFont.setUnifySizeEnabled(false);
        this._imgFont.ignoreContentAdaptWithSize(false);
        this._imgFont.setScale9Enabled(true);
        this._imgFont.setCapInsets(cc.rect(52, 48, 49, 49));
        ck.UIUtils.setSizePercent(this._imgFont, 0.9353, 0.9353);
        this._imgFont.setTouchEnabled(false);

        ///// # _txtID
        this._txtID = new ck.Text();
        this._txtID.setName("_txtID");
        this._root.addChild(this._txtID);
        this._txtID.setCascadeOpacityEnabled(true);
        this._txtID.setCascadeColorEnabled(true);
        this._txtID.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtID, 0.426, 0.8455);
        this._txtID.setTextColor(cc.color(135, 110, 80, 255));
        let _txtIDLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtID);
        _txtIDLayoutComponent.setPositionPercentXEnabled(true);
        _txtIDLayoutComponent.setPositionPercentX(0.426);
        _txtIDLayoutComponent.setPositionPercentYEnabled(true);
        _txtIDLayoutComponent.setPositionPercentY(0.8455);
        _txtIDLayoutComponent.setPercentWidthEnabled(true);
        _txtIDLayoutComponent.setPercentWidth(0.306);
        _txtIDLayoutComponent.setPercentHeightEnabled(true);
        _txtIDLayoutComponent.setPercentHeight(0.0687);
        this._txtID.setTouchEnabled(false);
        this._txtID.ignoreContentAdaptWithSize(true);
        this._txtID.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtID.setDefaultFontSize(35);
        this._txtID.setTextHorizontalAlignment(1);
        this._txtID.setTextVerticalAlignment(1);

        ///// # _txtVersion
        this._txtVersion = new ck.Text();
        this._txtVersion.setName("_txtVersion");
        this._root.addChild(this._txtVersion);
        this._txtVersion.setCascadeOpacityEnabled(true);
        this._txtVersion.setCascadeColorEnabled(true);
        this._txtVersion.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtVersion, 0.893, 0.0618);
        this._txtVersion.setTextColor(cc.color(77, 77, 77, 255));
        let _txtVersionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtVersion);
        _txtVersionLayoutComponent.setPositionPercentXEnabled(true);
        _txtVersionLayoutComponent.setPositionPercentX(0.893);
        _txtVersionLayoutComponent.setPositionPercentYEnabled(true);
        _txtVersionLayoutComponent.setPositionPercentY(0.0618);
        _txtVersionLayoutComponent.setPercentWidthEnabled(true);
        _txtVersionLayoutComponent.setPercentWidth(0.046);
        _txtVersionLayoutComponent.setPercentHeightEnabled(true);
        _txtVersionLayoutComponent.setPercentHeight(0.0388);
        this._txtVersion.setTouchEnabled(false);
        this._txtVersion.ignoreContentAdaptWithSize(true);
        this._txtVersion.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtVersion.setDefaultFontSize(20);
        this._txtVersion.setTextHorizontalAlignment(2);
        this._txtVersion.setTextVerticalAlignment(1);

        ///// # _imgCopy
        this._imgCopy = new ccui.ImageView();
        this._imgCopy.setName("_imgCopy");
        this._root.addChild(this._imgCopy);
        this._imgCopy.setCascadeOpacityEnabled(true);
        this._imgCopy.setCascadeColorEnabled(true);
        this._imgCopy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCopy, 0.7079, 0.8426);
        let _imgCopyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCopy);
        _imgCopyLayoutComponent.setPositionPercentXEnabled(true);
        _imgCopyLayoutComponent.setPositionPercentX(0.7079);
        _imgCopyLayoutComponent.setPositionPercentYEnabled(true);
        _imgCopyLayoutComponent.setPositionPercentY(0.8426);
        this._imgCopy.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgCopy.setUnifySizeEnabled(false);
        this._imgCopy.ignoreContentAdaptWithSize(false);
        this._imgCopy.setContentSize(cc.size(97.613, 42.9506));
        this._imgCopy.setTouchEnabled(true);

        ///// # _txtCopy
        this._txtCopy = new ck.Text();
        this._txtCopy.setName("_txtCopy");
        this._imgCopy.addChild(this._txtCopy);
        this._txtCopy.setCascadeOpacityEnabled(true);
        this._txtCopy.setCascadeColorEnabled(true);
        this._txtCopy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCopy, 0.5, 0.5267);
        this._txtCopy.setTextColor(cc.color(120, 58, 0, 255));
        let _txtCopyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCopy);
        _txtCopyLayoutComponent.setPositionPercentXEnabled(true);
        _txtCopyLayoutComponent.setPositionPercentX(0.5);
        _txtCopyLayoutComponent.setPositionPercentYEnabled(true);
        _txtCopyLayoutComponent.setPositionPercentY(0.5267);
        this._txtCopy.setTouchEnabled(false);
        this._txtCopy.ignoreContentAdaptWithSize(true);
        this._txtCopy.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCopy.setDefaultFontSize(25);
        this._txtCopy.setString(gm.localize.getText("TXT_COPY"));
        this._txtCopy.setTextHorizontalAlignment(1);
        this._txtCopy.setTextVerticalAlignment(1);
        this._txtCopy.enableShadow(cc.color(255, 208, 164, 255), cc.size(0, -2), 0);

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._root.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 0.99);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(0.99);
        this._imgHeader.loadTexture("basics/popup/HeaderBlue.png", 1);
        this._imgHeader.setUnifySizeEnabled(false);
        this._imgHeader.ignoreContentAdaptWithSize(false);
        this._imgHeader.setContentSize(cc.size(346, 84));
        this._imgHeader.setTouchEnabled(false);

        ///// # _txtHeader
        this._txtHeader = new ck.Text();
        this._txtHeader.setName("_txtHeader");
        this._imgHeader.addChild(this._txtHeader);
        this._txtHeader.setCascadeOpacityEnabled(true);
        this._txtHeader.setCascadeColorEnabled(true);
        this._txtHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHeader, 0.5, 0.55);
        this._txtHeader.setTextColor(cc.color(255, 252, 225, 255));
        let _txtHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHeader);
        _txtHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentX(0.5);
        _txtHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentY(0.55);
        this._txtHeader.setTouchEnabled(false);
        this._txtHeader.ignoreContentAdaptWithSize(true);
        this._txtHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHeader.setDefaultFontSize(55);
        this._txtHeader.setString(gm.localize.getText("TXT_SETTING"));
        this._txtHeader.setTextHorizontalAlignment(1);
        this._txtHeader.setTextVerticalAlignment(1);
        this._txtHeader.enableOutline(cc.color(155, 68, 38, 255), 2);
        this._txtHeader.enableShadow(cc.color(155, 68, 38, 255), cc.size(0, -2), 0);

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._root.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.97, 0.97);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.97);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.97);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(81, 83));
        this._imgClose.setTouchEnabled(true);

        ///// # _layoutBGM
        this._layoutBGM = new ccui.Layout();
        this._layoutBGM.setName("_layoutBGM");
        this._root.addChild(this._layoutBGM);
        this._layoutBGM.setCascadeOpacityEnabled(true);
        this._layoutBGM.setCascadeColorEnabled(true);
        this._layoutBGM.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBGM, 0.5, 0.7252);
        let _layoutBGMLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBGM);
        _layoutBGMLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBGMLayoutComponent.setPositionPercentX(0.5);
        _layoutBGMLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBGMLayoutComponent.setPositionPercentY(0.7252);
        this._layoutBGM.setTouchEnabled(false);
        this._layoutBGM.setUnifySizeEnabled(false);
        this._layoutBGM.ignoreContentAdaptWithSize(false);
        this._layoutBGM.setContentSize(cc.size(415.6165, 88.4268));

        ///// # _imgIconBGM
        this._imgIconBGM = new ccui.ImageView();
        this._imgIconBGM.setName("_imgIconBGM");
        this._layoutBGM.addChild(this._imgIconBGM);
        this._imgIconBGM.setCascadeOpacityEnabled(true);
        this._imgIconBGM.setCascadeColorEnabled(true);
        this._imgIconBGM.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconBGM, 0.1279, 0.5);
        let _imgIconBGMLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconBGM);
        _imgIconBGMLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconBGMLayoutComponent.setPositionPercentX(0.1279);
        _imgIconBGMLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconBGMLayoutComponent.setPositionPercentY(0.5);
        this._imgIconBGM.loadTexture("icons/flat/Music.png", 1);
        this._imgIconBGM.setUnifySizeEnabled(false);
        this._imgIconBGM.ignoreContentAdaptWithSize(false);
        this._imgIconBGM.setContentSize(cc.size(35, 42));
        this._imgIconBGM.setTouchEnabled(false);

        ///// # _txtBGM
        this._txtBGM = new ck.Text();
        this._txtBGM.setName("_txtBGM");
        this._layoutBGM.addChild(this._txtBGM);
        this._txtBGM.setCascadeOpacityEnabled(true);
        this._txtBGM.setCascadeColorEnabled(true);
        this._txtBGM.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBGM, 0.1906, 0.5);
        this._txtBGM.setTextColor(cc.color(135, 110, 80, 255));
        let _txtBGMLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBGM);
        _txtBGMLayoutComponent.setPositionPercentXEnabled(true);
        _txtBGMLayoutComponent.setPositionPercentX(0.1906);
        _txtBGMLayoutComponent.setPositionPercentYEnabled(true);
        _txtBGMLayoutComponent.setPositionPercentY(0.5);
        _txtBGMLayoutComponent.setPercentWidthEnabled(true);
        _txtBGMLayoutComponent.setPercentWidth(0.1492);
        _txtBGMLayoutComponent.setPercentHeightEnabled(true);
        _txtBGMLayoutComponent.setPercentHeight(0.5654);
        this._txtBGM.setTouchEnabled(false);
        this._txtBGM.ignoreContentAdaptWithSize(true);
        this._txtBGM.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBGM.setDefaultFontSize(45);
        this._txtBGM.setString(gm.localize.getText("TXT_BGM"));
        this._txtBGM.setTextHorizontalAlignment(0);
        this._txtBGM.setTextVerticalAlignment(1);

        ///// # _switchButtonBGM
        this._switchButtonBGM = new SettingSwitchButton();
        this._switchButtonBGM.setName("_switchButtonBGM");
        this._layoutBGM.addChild(this._switchButtonBGM);
        this._switchButtonBGM.setCascadeOpacityEnabled(true);
        this._switchButtonBGM.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._switchButtonBGM, 0.6929, 0.5);
        let _switchButtonBGMLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._switchButtonBGM);
        _switchButtonBGMLayoutComponent.setPositionPercentXEnabled(true);
        _switchButtonBGMLayoutComponent.setPositionPercentX(0.6929);
        _switchButtonBGMLayoutComponent.setPositionPercentYEnabled(true);
        _switchButtonBGMLayoutComponent.setPositionPercentY(0.5);

        ///// # _layoutSFX
        this._layoutSFX = new ccui.Layout();
        this._layoutSFX.setName("_layoutSFX");
        this._root.addChild(this._layoutSFX);
        this._layoutSFX.setCascadeOpacityEnabled(true);
        this._layoutSFX.setCascadeColorEnabled(true);
        this._layoutSFX.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutSFX, 0.5, 0.5782);
        let _layoutSFXLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSFX);
        _layoutSFXLayoutComponent.setPositionPercentXEnabled(true);
        _layoutSFXLayoutComponent.setPositionPercentX(0.5);
        _layoutSFXLayoutComponent.setPositionPercentYEnabled(true);
        _layoutSFXLayoutComponent.setPositionPercentY(0.5782);
        this._layoutSFX.setTouchEnabled(false);
        this._layoutSFX.setUnifySizeEnabled(false);
        this._layoutSFX.ignoreContentAdaptWithSize(false);
        this._layoutSFX.setContentSize(cc.size(415.6165, 88.4268));

        ///// # _imgIconSFX
        this._imgIconSFX = new ccui.ImageView();
        this._imgIconSFX.setName("_imgIconSFX");
        this._layoutSFX.addChild(this._imgIconSFX);
        this._imgIconSFX.setCascadeOpacityEnabled(true);
        this._imgIconSFX.setCascadeColorEnabled(true);
        this._imgIconSFX.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconSFX, 0.1279, 0.5);
        let _imgIconSFXLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconSFX);
        _imgIconSFXLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconSFXLayoutComponent.setPositionPercentX(0.1279);
        _imgIconSFXLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconSFXLayoutComponent.setPositionPercentY(0.5);
        this._imgIconSFX.loadTexture("icons/flat/Music.png", 1);
        this._imgIconSFX.setUnifySizeEnabled(false);
        this._imgIconSFX.ignoreContentAdaptWithSize(false);
        this._imgIconSFX.setContentSize(cc.size(35, 42));
        this._imgIconSFX.setTouchEnabled(false);

        ///// # _txtSFX
        this._txtSFX = new ck.Text();
        this._txtSFX.setName("_txtSFX");
        this._layoutSFX.addChild(this._txtSFX);
        this._txtSFX.setCascadeOpacityEnabled(true);
        this._txtSFX.setCascadeColorEnabled(true);
        this._txtSFX.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtSFX, 0.1906, 0.5);
        this._txtSFX.setTextColor(cc.color(135, 110, 80, 255));
        let _txtSFXLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSFX);
        _txtSFXLayoutComponent.setPositionPercentXEnabled(true);
        _txtSFXLayoutComponent.setPositionPercentX(0.1906);
        _txtSFXLayoutComponent.setPositionPercentYEnabled(true);
        _txtSFXLayoutComponent.setPositionPercentY(0.5);
        _txtSFXLayoutComponent.setPercentWidthEnabled(true);
        _txtSFXLayoutComponent.setPercentWidth(0.1275);
        _txtSFXLayoutComponent.setPercentHeightEnabled(true);
        _txtSFXLayoutComponent.setPercentHeight(0.5654);
        this._txtSFX.setTouchEnabled(false);
        this._txtSFX.ignoreContentAdaptWithSize(true);
        this._txtSFX.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSFX.setDefaultFontSize(45);
        this._txtSFX.setString(gm.localize.getText("TXT_SFX"));
        this._txtSFX.setTextHorizontalAlignment(0);
        this._txtSFX.setTextVerticalAlignment(1);

        ///// # _switchButtonSFX
        this._switchButtonSFX = new SettingSwitchButton();
        this._switchButtonSFX.setName("_switchButtonSFX");
        this._layoutSFX.addChild(this._switchButtonSFX);
        this._switchButtonSFX.setCascadeOpacityEnabled(true);
        this._switchButtonSFX.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._switchButtonSFX, 0.6929, 0.5);
        let _switchButtonSFXLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._switchButtonSFX);
        _switchButtonSFXLayoutComponent.setPositionPercentXEnabled(true);
        _switchButtonSFXLayoutComponent.setPositionPercentX(0.6929);
        _switchButtonSFXLayoutComponent.setPositionPercentYEnabled(true);
        _switchButtonSFXLayoutComponent.setPositionPercentY(0.5);

        ///// # _imgGiftCode
        this._imgGiftCode = new ccui.ImageView();
        this._imgGiftCode.setName("_imgGiftCode");
        this._root.addChild(this._imgGiftCode);
        this._imgGiftCode.setCascadeOpacityEnabled(true);
        this._imgGiftCode.setCascadeColorEnabled(true);
        this._imgGiftCode.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGiftCode, 0.3, 0.431);
        let _imgGiftCodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGiftCode);
        _imgGiftCodeLayoutComponent.setPositionPercentXEnabled(true);
        _imgGiftCodeLayoutComponent.setPositionPercentX(0.3);
        _imgGiftCodeLayoutComponent.setPositionPercentYEnabled(true);
        _imgGiftCodeLayoutComponent.setPositionPercentY(0.431);
        this._imgGiftCode.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgGiftCode.setUnifySizeEnabled(false);
        this._imgGiftCode.ignoreContentAdaptWithSize(false);
        this._imgGiftCode.setContentSize(cc.size(180, 70));
        this._imgGiftCode.setTouchEnabled(true);

        ///// # _txtGiftCode
        this._txtGiftCode = new ck.Text();
        this._txtGiftCode.setName("_txtGiftCode");
        this._imgGiftCode.addChild(this._txtGiftCode);
        this._txtGiftCode.setCascadeOpacityEnabled(true);
        this._txtGiftCode.setCascadeColorEnabled(true);
        this._txtGiftCode.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGiftCode, 0.6244, 0.55);
        let _txtGiftCodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGiftCode);
        _txtGiftCodeLayoutComponent.setPositionPercentXEnabled(true);
        _txtGiftCodeLayoutComponent.setPositionPercentX(0.6244);
        _txtGiftCodeLayoutComponent.setPositionPercentYEnabled(true);
        _txtGiftCodeLayoutComponent.setPositionPercentY(0.55);
        this._txtGiftCode.setTouchEnabled(false);
        this._txtGiftCode.setUnifySizeEnabled(false);
        this._txtGiftCode.ignoreContentAdaptWithSize(false);
        this._txtGiftCode.setContentSize(cc.size(114, 49));
        this._txtGiftCode.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtGiftCode.setDefaultFontSize(35);
        this._txtGiftCode.setString(gm.localize.getText("TXT_GIFT_CODE"));
        this._txtGiftCode.setTextHorizontalAlignment(1);
        this._txtGiftCode.setTextVerticalAlignment(1);
        this._txtGiftCode.enableOutline(cc.color(158, 82, 9, 255), 2);
        this._txtGiftCode.autoFitSingleLine();

        ///// # _imgGiftIcon
        this._imgGiftIcon = new ccui.ImageView();
        this._imgGiftIcon.setName("_imgGiftIcon");
        this._imgGiftCode.addChild(this._imgGiftIcon);
        this._imgGiftIcon.setCascadeOpacityEnabled(true);
        this._imgGiftIcon.setCascadeColorEnabled(true);
        this._imgGiftIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGiftIcon, 0.175, 0.5562);
        let _imgGiftIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGiftIcon);
        _imgGiftIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgGiftIconLayoutComponent.setPositionPercentX(0.175);
        _imgGiftIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgGiftIconLayoutComponent.setPositionPercentY(0.5562);
        this._imgGiftIcon.loadTexture("icons/color/gifts/GiftGreen.png", 1);
        this._imgGiftIcon.setUnifySizeEnabled(false);
        this._imgGiftIcon.ignoreContentAdaptWithSize(false);
        this._imgGiftIcon.setContentSize(cc.size(35, 35));
        this._imgGiftIcon.setTouchEnabled(false);

        ///// # _imgContact
        this._imgContact = new ccui.ImageView();
        this._imgContact.setName("_imgContact");
        this._root.addChild(this._imgContact);
        this._imgContact.setCascadeOpacityEnabled(true);
        this._imgContact.setCascadeColorEnabled(true);
        this._imgContact.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgContact, 0.7, 0.431);
        let _imgContactLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgContact);
        _imgContactLayoutComponent.setPositionPercentXEnabled(true);
        _imgContactLayoutComponent.setPositionPercentX(0.7);
        _imgContactLayoutComponent.setPositionPercentYEnabled(true);
        _imgContactLayoutComponent.setPositionPercentY(0.431);
        this._imgContact.loadTexture("buttons/rectangles/Blue.png", 1);
        this._imgContact.setUnifySizeEnabled(false);
        this._imgContact.ignoreContentAdaptWithSize(false);
        this._imgContact.setContentSize(cc.size(180, 70));
        this._imgContact.setTouchEnabled(true);

        ///// # _txtContact
        this._txtContact = new ck.Text();
        this._txtContact.setName("_txtContact");
        this._imgContact.addChild(this._txtContact);
        this._txtContact.setCascadeOpacityEnabled(true);
        this._txtContact.setCascadeColorEnabled(true);
        this._txtContact.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtContact, 0.6222, 0.55);
        let _txtContactLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtContact);
        _txtContactLayoutComponent.setPositionPercentXEnabled(true);
        _txtContactLayoutComponent.setPositionPercentX(0.6222);
        _txtContactLayoutComponent.setPositionPercentYEnabled(true);
        _txtContactLayoutComponent.setPositionPercentY(0.55);
        this._txtContact.setTouchEnabled(false);
        this._txtContact.setUnifySizeEnabled(false);
        this._txtContact.ignoreContentAdaptWithSize(false);
        this._txtContact.setContentSize(cc.size(114, 49));
        this._txtContact.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtContact.setDefaultFontSize(35);
        this._txtContact.setString(gm.localize.getText("TXT_FACEBOOK").toUpperCase());
        this._txtContact.setTextHorizontalAlignment(1);
        this._txtContact.setTextVerticalAlignment(1);
        this._txtContact.enableOutline(cc.color(41, 59, 96, 255), 2);
        this._txtContact.autoFitSingleLine();

        ///// # _imgIconContact
        this._imgIconContact = new ccui.ImageView();
        this._imgIconContact.setName("_imgIconContact");
        this._imgContact.addChild(this._imgIconContact);
        this._imgIconContact.setCascadeOpacityEnabled(true);
        this._imgIconContact.setCascadeColorEnabled(true);
        this._imgIconContact.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconContact, 0.175, 0.55);
        let _imgIconContactLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconContact);
        _imgIconContactLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconContactLayoutComponent.setPositionPercentX(0.175);
        _imgIconContactLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconContactLayoutComponent.setPositionPercentY(0.55);
        this._imgIconContact.loadTexture("icons/color/socials/Facebook.png", 1);
        this._imgIconContact.setUnifySizeEnabled(false);
        this._imgIconContact.ignoreContentAdaptWithSize(false);
        this._imgIconContact.setContentSize(cc.size(32, 32));
        this._imgIconContact.setTouchEnabled(false);

        ///// # _imgLogout
        this._imgLogout = new ccui.ImageView();
        this._imgLogout.setName("_imgLogout");
        this._root.addChild(this._imgLogout);
        this._imgLogout.setCascadeOpacityEnabled(true);
        this._imgLogout.setCascadeColorEnabled(true);
        this._imgLogout.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLogout, 0.5, 0.15);
        let _imgLogoutLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLogout);
        _imgLogoutLayoutComponent.setPositionPercentXEnabled(true);
        _imgLogoutLayoutComponent.setPositionPercentX(0.5);
        _imgLogoutLayoutComponent.setPositionPercentYEnabled(true);
        _imgLogoutLayoutComponent.setPositionPercentY(0.15);
        this._imgLogout.loadTexture("buttons/rectangles/Red.png", 1);
        this._imgLogout.setUnifySizeEnabled(false);
        this._imgLogout.ignoreContentAdaptWithSize(false);
        this._imgLogout.setContentSize(cc.size(180, 70));
        this._imgLogout.setTouchEnabled(true);

        ///// # _txtLogout
        this._txtLogout = new ck.Text();
        this._txtLogout.setName("_txtLogout");
        this._imgLogout.addChild(this._txtLogout);
        this._txtLogout.setCascadeOpacityEnabled(true);
        this._txtLogout.setCascadeColorEnabled(true);
        this._txtLogout.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLogout, 0.6222, 0.5357);
        let _txtLogoutLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLogout);
        _txtLogoutLayoutComponent.setPositionPercentXEnabled(true);
        _txtLogoutLayoutComponent.setPositionPercentX(0.6222);
        _txtLogoutLayoutComponent.setPositionPercentYEnabled(true);
        _txtLogoutLayoutComponent.setPositionPercentY(0.5357);
        this._txtLogout.setTouchEnabled(false);
        this._txtLogout.setUnifySizeEnabled(false);
        this._txtLogout.ignoreContentAdaptWithSize(false);
        this._txtLogout.setContentSize(cc.size(114, 51));
        this._txtLogout.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLogout.setDefaultFontSize(35);
        this._txtLogout.setString(gm.localize.getText("TXT_LOGOUT"));
        this._txtLogout.setTextHorizontalAlignment(1);
        this._txtLogout.setTextVerticalAlignment(1);
        this._txtLogout.enableOutline(cc.color(151, 30, 27, 255), 3);
        this._txtLogout.autoFitSingleLine();

        ///// # _imgLogoutIcon
        this._imgLogoutIcon = new ccui.ImageView();
        this._imgLogoutIcon.setName("_imgLogoutIcon");
        this._imgLogout.addChild(this._imgLogoutIcon);
        this._imgLogoutIcon.setCascadeOpacityEnabled(true);
        this._imgLogoutIcon.setCascadeColorEnabled(true);
        this._imgLogoutIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLogoutIcon, 0.1806, 0.5214);
        let _imgLogoutIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLogoutIcon);
        _imgLogoutIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgLogoutIconLayoutComponent.setPositionPercentX(0.1806);
        _imgLogoutIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgLogoutIconLayoutComponent.setPositionPercentY(0.5214);
        this._imgLogoutIcon.loadTexture("buttons/squares/ExitBlue.png", 1);
        this._imgLogoutIcon.setUnifySizeEnabled(false);
        this._imgLogoutIcon.ignoreContentAdaptWithSize(false);
        this._imgLogoutIcon.setContentSize(cc.size(35.9452, 31.0436));
        this._imgLogoutIcon.setTouchEnabled(false);

        ///// # _imgLanguage
        this._imgLanguage = new ccui.ImageView();
        this._imgLanguage.setName("_imgLanguage");
        this._root.addChild(this._imgLanguage);
        this._imgLanguage.setCascadeOpacityEnabled(true);
        this._imgLanguage.setCascadeColorEnabled(true);
        this._imgLanguage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLanguage, 0.3, 0.2932);
        let _imgLanguageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLanguage);
        _imgLanguageLayoutComponent.setPositionPercentXEnabled(true);
        _imgLanguageLayoutComponent.setPositionPercentX(0.3);
        _imgLanguageLayoutComponent.setPositionPercentYEnabled(true);
        _imgLanguageLayoutComponent.setPositionPercentY(0.2932);
        this._imgLanguage.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgLanguage.setUnifySizeEnabled(false);
        this._imgLanguage.ignoreContentAdaptWithSize(false);
        this._imgLanguage.setContentSize(cc.size(180, 70));
        this._imgLanguage.setTouchEnabled(true);

        ///// # _txtLanguage
        this._txtLanguage = new ck.Text();
        this._txtLanguage.setName("_txtLanguage");
        this._imgLanguage.addChild(this._txtLanguage);
        this._txtLanguage.setCascadeOpacityEnabled(true);
        this._txtLanguage.setCascadeColorEnabled(true);
        this._txtLanguage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLanguage, 0.6412, 0.55);
        let _txtLanguageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLanguage);
        _txtLanguageLayoutComponent.setPositionPercentXEnabled(true);
        _txtLanguageLayoutComponent.setPositionPercentX(0.6412);
        _txtLanguageLayoutComponent.setPositionPercentYEnabled(true);
        _txtLanguageLayoutComponent.setPositionPercentY(0.55);
        this._txtLanguage.setTouchEnabled(false);
        this._txtLanguage.setUnifySizeEnabled(false);
        this._txtLanguage.ignoreContentAdaptWithSize(false);
        this._txtLanguage.setContentSize(cc.size(114, 49));
        this._txtLanguage.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLanguage.setDefaultFontSize(35);
        this._txtLanguage.setString(gm.localize.getText("TXT_LANGUAGE"));
        this._txtLanguage.setTextHorizontalAlignment(1);
        this._txtLanguage.setTextVerticalAlignment(1);
        this._txtLanguage.enableOutline(cc.color(158, 82, 9, 255), 2);
        this._txtLanguage.autoFitSingleLine();

        ///// # _imgLanguageFlag
        this._imgLanguageFlag = new ccui.ImageView();
        this._imgLanguageFlag.setName("_imgLanguageFlag");
        this._imgLanguage.addChild(this._imgLanguageFlag);
        this._imgLanguageFlag.setCascadeOpacityEnabled(true);
        this._imgLanguageFlag.setCascadeColorEnabled(true);
        this._imgLanguageFlag.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLanguageFlag, 0.1861, 0.5357);
        this._imgLanguageFlag.setScale(0.6, 0.6);
        let _imgLanguageFlagLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLanguageFlag);
        _imgLanguageFlagLayoutComponent.setPositionPercentXEnabled(true);
        _imgLanguageFlagLayoutComponent.setPositionPercentX(0.1861);
        _imgLanguageFlagLayoutComponent.setPositionPercentYEnabled(true);
        _imgLanguageFlagLayoutComponent.setPositionPercentY(0.5357);
        this._imgLanguageFlag.loadTexture("icons/color/flags/Turkey.png", 1);
        this._imgLanguageFlag.setUnifySizeEnabled(false);
        this._imgLanguageFlag.ignoreContentAdaptWithSize(false);
        this._imgLanguageFlag.setContentSize(cc.size(76, 44));
        this._imgLanguageFlag.setTouchEnabled(false);

        ///// # _imgCheat
        this._imgCheat = new ccui.ImageView();
        this._imgCheat.setName("_imgCheat");
        this._root.addChild(this._imgCheat);
        this._imgCheat.setCascadeOpacityEnabled(true);
        this._imgCheat.setCascadeColorEnabled(true);
        this._imgCheat.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCheat, 0.5, -0.12);
        let _imgCheatLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCheat);
        _imgCheatLayoutComponent.setPositionPercentXEnabled(true);
        _imgCheatLayoutComponent.setPositionPercentX(0.5);
        _imgCheatLayoutComponent.setPositionPercentYEnabled(true);
        _imgCheatLayoutComponent.setPositionPercentY(-0.12);
        this._imgCheat.loadTexture("buttons/rectangles/Red.png", 1);
        this._imgCheat.setUnifySizeEnabled(false);
        this._imgCheat.ignoreContentAdaptWithSize(false);
        this._imgCheat.setContentSize(cc.size(180, 70));
        this._imgCheat.setTouchEnabled(true);

        ///// # _txtCheat
        this._txtCheat = new ck.Text();
        this._txtCheat.setName("_txtCheat");
        this._imgCheat.addChild(this._txtCheat);
        this._txtCheat.setCascadeOpacityEnabled(true);
        this._txtCheat.setCascadeColorEnabled(true);
        this._txtCheat.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCheat, 0.5, 0.5357);
        let _txtCheatLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCheat);
        _txtCheatLayoutComponent.setPositionPercentXEnabled(true);
        _txtCheatLayoutComponent.setPositionPercentX(0.5);
        _txtCheatLayoutComponent.setPositionPercentYEnabled(true);
        _txtCheatLayoutComponent.setPositionPercentY(0.5357);
        this._txtCheat.setTouchEnabled(false);
        this._txtCheat.ignoreContentAdaptWithSize(true);
        this._txtCheat.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCheat.setDefaultFontSize(35);
        this._txtCheat.setString("CHEAT");
        this._txtCheat.setTextHorizontalAlignment(1);
        this._txtCheat.setTextVerticalAlignment(1);
        this._txtCheat.enableOutline(cc.color(151, 30, 27, 255), 3);

        ///// # _imgGuide
        this._imgGuide = new ccui.ImageView();
        this._imgGuide.setName("_imgGuide");
        this._root.addChild(this._imgGuide);
        this._imgGuide.setCascadeOpacityEnabled(true);
        this._imgGuide.setCascadeColorEnabled(true);
        this._imgGuide.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGuide, 0.7, 0.2921);
        let _imgGuideLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGuide);
        _imgGuideLayoutComponent.setPositionPercentXEnabled(true);
        _imgGuideLayoutComponent.setPositionPercentX(0.7);
        _imgGuideLayoutComponent.setPositionPercentYEnabled(true);
        _imgGuideLayoutComponent.setPositionPercentY(0.2921);
        this._imgGuide.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgGuide.setUnifySizeEnabled(false);
        this._imgGuide.ignoreContentAdaptWithSize(false);
        this._imgGuide.setContentSize(cc.size(180, 70));
        this._imgGuide.setTouchEnabled(true);

        ///// # _txtGuide
        this._txtGuide = new ck.Text();
        this._txtGuide.setName("_txtGuide");
        this._imgGuide.addChild(this._txtGuide);
        this._txtGuide.setCascadeOpacityEnabled(true);
        this._txtGuide.setCascadeColorEnabled(true);
        this._txtGuide.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGuide, 0.6244, 0.55);
        let _txtGuideLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGuide);
        _txtGuideLayoutComponent.setPositionPercentXEnabled(true);
        _txtGuideLayoutComponent.setPositionPercentX(0.6244);
        _txtGuideLayoutComponent.setPositionPercentYEnabled(true);
        _txtGuideLayoutComponent.setPositionPercentY(0.55);
        this._txtGuide.setTouchEnabled(false);
        this._txtGuide.setUnifySizeEnabled(false);
        this._txtGuide.ignoreContentAdaptWithSize(false);
        this._txtGuide.setContentSize(cc.size(114, 49));
        this._txtGuide.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtGuide.setDefaultFontSize(35);
        this._txtGuide.setString(gm.localize.getText("TXT_GUIDE"));
        this._txtGuide.setTextHorizontalAlignment(1);
        this._txtGuide.setTextVerticalAlignment(1);
        this._txtGuide.enableOutline(cc.color(158, 82, 9, 255), 2);
        this._txtGuide.autoFitSingleLine();

        ///// # _imgGuideBook
        this._imgGuideBook = new ccui.ImageView();
        this._imgGuideBook.setName("_imgGuideBook");
        this._imgGuide.addChild(this._imgGuideBook);
        this._imgGuideBook.setCascadeOpacityEnabled(true);
        this._imgGuideBook.setCascadeColorEnabled(true);
        this._imgGuideBook.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGuideBook, 0.175, 0.5562);
        let _imgGuideBookLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGuideBook);
        _imgGuideBookLayoutComponent.setPositionPercentXEnabled(true);
        _imgGuideBookLayoutComponent.setPositionPercentX(0.175);
        _imgGuideBookLayoutComponent.setPositionPercentYEnabled(true);
        _imgGuideBookLayoutComponent.setPositionPercentY(0.5562);
        this._imgGuideBook.loadTexture("icons/color/other/GuideBook.png", 1);
        this._imgGuideBook.setUnifySizeEnabled(false);
        this._imgGuideBook.ignoreContentAdaptWithSize(false);
        this._imgGuideBook.setContentSize(cc.size(50, 50));
        this._imgGuideBook.setTouchEnabled(false);

        ///// # _imgDeleteAccount
        this._imgDeleteAccount = new ccui.ImageView();
        this._imgDeleteAccount.setName("_imgDeleteAccount");
        this._root.addChild(this._imgDeleteAccount);
        this._imgDeleteAccount.setCascadeOpacityEnabled(true);
        this._imgDeleteAccount.setCascadeColorEnabled(true);
        this._imgDeleteAccount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgDeleteAccount, 0.3, 0.4334);
        let _imgDeleteAccountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDeleteAccount);
        _imgDeleteAccountLayoutComponent.setPositionPercentXEnabled(true);
        _imgDeleteAccountLayoutComponent.setPositionPercentX(0.3);
        _imgDeleteAccountLayoutComponent.setPositionPercentYEnabled(true);
        _imgDeleteAccountLayoutComponent.setPositionPercentY(0.4334);
        this._imgDeleteAccount.loadTexture("buttons/rectangles/Red.png", 1);
        this._imgDeleteAccount.setUnifySizeEnabled(false);
        this._imgDeleteAccount.ignoreContentAdaptWithSize(false);
        this._imgDeleteAccount.setContentSize(cc.size(180, 70));
        this._imgDeleteAccount.setTouchEnabled(true);

        ///// # _txtDeleteAccount
        this._txtDeleteAccount = new ck.Text();
        this._txtDeleteAccount.setName("_txtDeleteAccount");
        this._imgDeleteAccount.addChild(this._txtDeleteAccount);
        this._txtDeleteAccount.setCascadeOpacityEnabled(true);
        this._txtDeleteAccount.setCascadeColorEnabled(true);
        this._txtDeleteAccount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDeleteAccount, 0.5, 0.55);
        let _txtDeleteAccountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDeleteAccount);
        _txtDeleteAccountLayoutComponent.setPositionPercentXEnabled(true);
        _txtDeleteAccountLayoutComponent.setPositionPercentX(0.5);
        _txtDeleteAccountLayoutComponent.setPositionPercentYEnabled(true);
        _txtDeleteAccountLayoutComponent.setPositionPercentY(0.55);
        this._txtDeleteAccount.setTouchEnabled(false);
        this._txtDeleteAccount.setUnifySizeEnabled(false);
        this._txtDeleteAccount.ignoreContentAdaptWithSize(false);
        this._txtDeleteAccount.setContentSize(cc.size(160, 49));
        this._txtDeleteAccount.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDeleteAccount.setDefaultFontSize(32);
        this._txtDeleteAccount.setString(gm.localize.getText("TXT_DELETE_ACCOUNT").toUpperCase());
        this._txtDeleteAccount.setTextHorizontalAlignment(1);
        this._txtDeleteAccount.setTextVerticalAlignment(1);
        this._txtDeleteAccount.enableOutline(cc.color(151, 30, 27, 255), 1);
        this._txtDeleteAccount.autoFitSingleLine();

        ///// # _imgPolicy
        this._imgPolicy = new ccui.ImageView();
        this._imgPolicy.setName("_imgPolicy");
        this._root.addChild(this._imgPolicy);
        this._imgPolicy.setCascadeOpacityEnabled(true);
        this._imgPolicy.setCascadeColorEnabled(true);
        this._imgPolicy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPolicy, 0.7006, 0.15);
        let _imgPolicyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPolicy);
        _imgPolicyLayoutComponent.setPositionPercentXEnabled(true);
        _imgPolicyLayoutComponent.setPositionPercentX(0.7006);
        _imgPolicyLayoutComponent.setPositionPercentYEnabled(true);
        _imgPolicyLayoutComponent.setPositionPercentY(0.15);
        this._imgPolicy.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgPolicy.setUnifySizeEnabled(false);
        this._imgPolicy.ignoreContentAdaptWithSize(false);
        this._imgPolicy.setContentSize(cc.size(180, 70));
        this._imgPolicy.setTouchEnabled(true);

        ///// # _txtPolicy
        this._txtPolicy = new ck.Text();
        this._txtPolicy.setName("_txtPolicy");
        this._imgPolicy.addChild(this._txtPolicy);
        this._txtPolicy.setCascadeOpacityEnabled(true);
        this._txtPolicy.setCascadeColorEnabled(true);
        this._txtPolicy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPolicy, 0.5, 0.55);
        let _txtPolicyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPolicy);
        _txtPolicyLayoutComponent.setPositionPercentXEnabled(true);
        _txtPolicyLayoutComponent.setPositionPercentX(0.5);
        _txtPolicyLayoutComponent.setPositionPercentYEnabled(true);
        _txtPolicyLayoutComponent.setPositionPercentY(0.55);
        this._txtPolicy.setTouchEnabled(false);
        this._txtPolicy.setUnifySizeEnabled(false);
        this._txtPolicy.ignoreContentAdaptWithSize(false);
        this._txtPolicy.setContentSize(cc.size(174.0275, 49));
        this._txtPolicy.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtPolicy.setDefaultFontSize(35);
        this._txtPolicy.setString(gm.localize.getText("TXT_PRIVACY_POLICY"));
        this._txtPolicy.setTextHorizontalAlignment(1);
        this._txtPolicy.setTextVerticalAlignment(1);
        this._txtPolicy.enableOutline(cc.color(158, 82, 9, 255), 2);
        this._txtPolicy.autoFitSingleLine();

    },



});

/**
 * Create SettingPopup
 * @returns {_ccs.SettingPopup}
 */
_ccs.SettingPopup.create = function () {
    return new _ccs.SettingPopup();
};
