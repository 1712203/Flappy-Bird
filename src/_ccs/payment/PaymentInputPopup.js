/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PaymentInputPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.PaymentInputPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {ccui.ImageView} */
    _imgFont: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ccui.ImageView} */
    _imgTitle: null,
    /** @type {ck.Text} */
    _txtMessage: null,
    /** @type {ccui.ImageView} */
    _imgLogo: null,
    /** @type {ccui.Layout} */
    _layoutEditBox: null,
    /** @type {ck.Text} */
    _txtInputTitle: null,
    /** @type {ccui.ImageView} */
    _imgEditBoxBgr: null,
    /** @type {cc.EditBox} */
    _editBox: null,
    /** @type {ck.Text} */
    _txtError: null,
    /** @type {ccui.ImageView} */
    _imgButton: null,
    /** @type {ck.Text} */
    _txtButton: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.ImageView} */
    _imgStep1: null,
    /** @type {ccui.ImageView} */
    _imgStep1Icon: null,
    /** @type {ck.Text} */
    _txtStep1: null,
    /** @type {ccui.ImageView} */
    _imgStep2: null,
    /** @type {ccui.ImageView} */
    _imgStep2Icon: null,
    /** @type {ck.Text} */
    _txtStep2: null,
    /** @type {ccui.ImageView} */
    _imgStep3: null,
    /** @type {ccui.ImageView} */
    _imgStep3Icon: null,
    /** @type {ck.Text} */
    _txtStep3: null,
    /** @type {ccui.ImageView} */
    _imgResendBg: null,
    /** @type {ck.Text} */
    _txtTime: null,
    /** @type {ccui.ImageView} */
    _imgResend: null,
    /** @type {ck.Text} */
    _txtResend: null,


    /**
     * _ccs.PaymentInputPopup constructor
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
        this._root.setPosition(0, -0.0001);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(500, 800));

        ///// # _imgBack
        this._imgBack = new ccui.ImageView();
        this._imgBack.setName("_imgBack");
        this._root.addChild(this._imgBack);
        this._imgBack.setCascadeOpacityEnabled(true);
        this._imgBack.setCascadeColorEnabled(true);
        this._imgBack.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBack, 0.5, 0.5);
        let _imgBackLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBack);
        _imgBackLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackLayoutComponent.setPositionPercentX(0.5);
        _imgBackLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackLayoutComponent.setPositionPercentY(0.5);
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

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._root.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 1.0185);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(1.0185);
        this._imgHeader.loadTexture("basics/popup/HeaderBlue.png", 1);
        this._imgHeader.setUnifySizeEnabled(false);
        this._imgHeader.ignoreContentAdaptWithSize(false);
        this._imgHeader.setContentSize(cc.size(366, 84));
        this._imgHeader.setTouchEnabled(false);

        ///// # _imgTitle
        this._imgTitle = new ccui.ImageView();
        this._imgTitle.setName("_imgTitle");
        this._imgHeader.addChild(this._imgTitle);
        this._imgTitle.setCascadeOpacityEnabled(true);
        this._imgTitle.setCascadeColorEnabled(true);
        this._imgTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTitle, 0.5, 0.5);
        let _imgTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTitle);
        _imgTitleLayoutComponent.setPositionPercentXEnabled(true);
        _imgTitleLayoutComponent.setPositionPercentX(0.5);
        _imgTitleLayoutComponent.setPositionPercentYEnabled(true);
        _imgTitleLayoutComponent.setPositionPercentY(0.5);
        this._imgTitle.loadTexture("texts/payment/PayProcess.png", 1);
        this._imgTitle.setTouchEnabled(false);

        ///// # _txtMessage
        this._txtMessage = new ck.Text();
        this._txtMessage.setName("_txtMessage");
        this._root.addChild(this._txtMessage);
        this._txtMessage.setCascadeOpacityEnabled(true);
        this._txtMessage.setCascadeColorEnabled(true);
        this._txtMessage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMessage, 0.5004, 0.9139);
        this._txtMessage.setTextColor(cc.color(87, 60, 38, 255));
        let _txtMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMessage);
        _txtMessageLayoutComponent.setPositionPercentXEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentX(0.5004);
        _txtMessageLayoutComponent.setPositionPercentYEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentY(0.9139);
        _txtMessageLayoutComponent.setPercentWidthEnabled(true);
        _txtMessageLayoutComponent.setPercentWidth(0.368);
        _txtMessageLayoutComponent.setPercentHeightEnabled(true);
        _txtMessageLayoutComponent.setPercentHeight(0.0487);
        this._txtMessage.setTouchEnabled(false);
        this._txtMessage.ignoreContentAdaptWithSize(true);
        this._txtMessage.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMessage.setDefaultFontSize(35);
        this._txtMessage.setTextHorizontalAlignment(1);
        this._txtMessage.setTextVerticalAlignment(1);

        ///// # _imgLogo
        this._imgLogo = new ccui.ImageView();
        this._imgLogo.setName("_imgLogo");
        this._root.addChild(this._imgLogo);
        this._imgLogo.setCascadeOpacityEnabled(true);
        this._imgLogo.setCascadeColorEnabled(true);
        this._imgLogo.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLogo, 0.5, 0.9097);
        let _imgLogoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLogo);
        _imgLogoLayoutComponent.setPositionPercentXEnabled(true);
        _imgLogoLayoutComponent.setPositionPercentX(0.5);
        _imgLogoLayoutComponent.setPositionPercentYEnabled(true);
        _imgLogoLayoutComponent.setPositionPercentY(0.9097);
        this._imgLogo.loadTexture("payment/VodaFone.png", 1);
        this._imgLogo.setUnifySizeEnabled(false);
        this._imgLogo.ignoreContentAdaptWithSize(false);
        this._imgLogo.setContentSize(cc.size(231, 68));
        this._imgLogo.setTouchEnabled(false);

        ///// # _layoutEditBox
        this._layoutEditBox = new ccui.Layout();
        this._layoutEditBox.setName("_layoutEditBox");
        this._root.addChild(this._layoutEditBox);
        this._layoutEditBox.setCascadeOpacityEnabled(true);
        this._layoutEditBox.setCascadeColorEnabled(true);
        this._layoutEditBox.setAnchorPoint(cc.p(0.5026, 0.5236));
        ck.UIUtils.setPositionPercent(this._layoutEditBox, 0.5, 0.2707);
        let _layoutEditBoxLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEditBox);
        _layoutEditBoxLayoutComponent.setPositionPercentXEnabled(true);
        _layoutEditBoxLayoutComponent.setPositionPercentX(0.5);
        _layoutEditBoxLayoutComponent.setPositionPercentYEnabled(true);
        _layoutEditBoxLayoutComponent.setPositionPercentY(0.2707);
        this._layoutEditBox.setTouchEnabled(false);
        this._layoutEditBox.setUnifySizeEnabled(false);
        this._layoutEditBox.ignoreContentAdaptWithSize(false);
        this._layoutEditBox.setContentSize(cc.size(398.32, 125));

        ///// # _txtInputTitle
        this._txtInputTitle = new ck.Text();
        this._txtInputTitle.setName("_txtInputTitle");
        this._layoutEditBox.addChild(this._txtInputTitle);
        this._txtInputTitle.setCascadeOpacityEnabled(true);
        this._txtInputTitle.setCascadeColorEnabled(true);
        this._txtInputTitle.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtInputTitle, 0.005, 0.7812);
        this._txtInputTitle.setTextColor(cc.color(106, 37, 37, 255));
        let _txtInputTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtInputTitle);
        _txtInputTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtInputTitleLayoutComponent.setPositionPercentX(0.005);
        _txtInputTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtInputTitleLayoutComponent.setPositionPercentY(0.7812);
        _txtInputTitleLayoutComponent.setPercentWidthEnabled(true);
        _txtInputTitleLayoutComponent.setPercentWidth(0.6578);
        _txtInputTitleLayoutComponent.setPercentHeightEnabled(true);
        _txtInputTitleLayoutComponent.setPercentHeight(0.264);
        this._txtInputTitle.setTouchEnabled(false);
        this._txtInputTitle.ignoreContentAdaptWithSize(true);
        this._txtInputTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtInputTitle.setDefaultFontSize(30);
        this._txtInputTitle.setTextHorizontalAlignment(1);
        this._txtInputTitle.setTextVerticalAlignment(1);

        ///// # _imgEditBoxBgr
        this._imgEditBoxBgr = new ccui.ImageView();
        this._imgEditBoxBgr.setName("_imgEditBoxBgr");
        this._layoutEditBox.addChild(this._imgEditBoxBgr);
        this._imgEditBoxBgr.setCascadeOpacityEnabled(true);
        this._imgEditBoxBgr.setCascadeColorEnabled(true);
        this._imgEditBoxBgr.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgEditBoxBgr, 0.5, 0);
        let _imgEditBoxBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgEditBoxBgr);
        _imgEditBoxBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgEditBoxBgrLayoutComponent.setPositionPercentX(0.5);
        _imgEditBoxBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgEditBoxBgrLayoutComponent.setPositionPercentY(0);
        _imgEditBoxBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgEditBoxBgrLayoutComponent.setPercentWidth(0.9716);
        _imgEditBoxBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgEditBoxBgrLayoutComponent.setPercentHeight(0.5581);
        this._imgEditBoxBgr.loadTexture("payment/Board_input.png", 1);
        this._imgEditBoxBgr.setUnifySizeEnabled(false);
        this._imgEditBoxBgr.ignoreContentAdaptWithSize(false);
        this._imgEditBoxBgr.setScale9Enabled(true);
        this._imgEditBoxBgr.setCapInsets(cc.rect(4, 4, 330, 32));
        ck.UIUtils.setSizePercent(this._imgEditBoxBgr, 0.9716, 0.5581);
        this._imgEditBoxBgr.setTouchEnabled(false);

        ///// # _editBox
        this._editBox = new cc.EditBox(cc.size(318.656, 75), new cc.Scale9Sprite());
        this._editBox.setName("_editBox");
        this._layoutEditBox.addChild(this._editBox);
        this._editBox.setCascadeOpacityEnabled(true);
        this._editBox.setCascadeColorEnabled(true);
        this._editBox.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._editBox, 0.5, 0);
        let _editBoxLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBox);
        _editBoxLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxLayoutComponent.setPositionPercentX(0.5);
        _editBoxLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxLayoutComponent.setPositionPercentY(0);
        _editBoxLayoutComponent.setPercentWidthEnabled(true);
        _editBoxLayoutComponent.setPercentWidth(0.8);
        _editBoxLayoutComponent.setPercentHeightEnabled(true);
        _editBoxLayoutComponent.setPercentHeight(0.6);
        this._editBox.setUnifySizeEnabled(false);
        this._editBox.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBox, 0.8, 0.6);
        this._editBox.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBox.setFontSize(40);
        this._editBox.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBox.setPlaceholderFontSize(40);
        this._editBox.setPlaceholderFontColor(cc.color.WHITE);
        this._editBox.setPlaceHolder(gm.localize.getText("TXT_TAP_TO_ENTER"));
        this._editBox.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBox.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _txtError
        this._txtError = new ck.Text();
        this._txtError.setName("_txtError");
        this._layoutEditBox.addChild(this._txtError);
        this._txtError.setCascadeOpacityEnabled(true);
        this._txtError.setCascadeColorEnabled(true);
        this._txtError.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtError, 0.5, -0.178);
        this._txtError.setTextColor(cc.color(255, 0, 0, 255));
        let _txtErrorLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtError);
        _txtErrorLayoutComponent.setPositionPercentXEnabled(true);
        _txtErrorLayoutComponent.setPositionPercentX(0.5);
        _txtErrorLayoutComponent.setPositionPercentYEnabled(true);
        _txtErrorLayoutComponent.setPositionPercentY(-0.178);
        _txtErrorLayoutComponent.setPercentWidthEnabled(true);
        _txtErrorLayoutComponent.setPercentWidth(0.3063);
        _txtErrorLayoutComponent.setPercentHeightEnabled(true);
        _txtErrorLayoutComponent.setPercentHeight(0.24);
        this._txtError.setTouchEnabled(false);
        this._txtError.ignoreContentAdaptWithSize(true);
        this._txtError.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtError.setDefaultFontSize(27);
        this._txtError.setTextHorizontalAlignment(1);
        this._txtError.setTextVerticalAlignment(1);

        ///// # _imgButton
        this._imgButton = new ccui.ImageView();
        this._imgButton.setName("_imgButton");
        this._root.addChild(this._imgButton);
        this._imgButton.setCascadeOpacityEnabled(true);
        this._imgButton.setCascadeColorEnabled(true);
        this._imgButton.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButton, 0.5, -0.0616);
        let _imgButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButton);
        _imgButtonLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonLayoutComponent.setPositionPercentX(0.5);
        _imgButtonLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonLayoutComponent.setPositionPercentY(-0.0616);
        this._imgButton.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgButton.setUnifySizeEnabled(false);
        this._imgButton.ignoreContentAdaptWithSize(false);
        this._imgButton.setContentSize(cc.size(205.99, 81.0026));
        this._imgButton.setTouchEnabled(true);

        ///// # _txtButton
        this._txtButton = new ck.Text();
        this._txtButton.setName("_txtButton");
        this._imgButton.addChild(this._txtButton);
        this._txtButton.setCascadeOpacityEnabled(true);
        this._txtButton.setCascadeColorEnabled(true);
        this._txtButton.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButton, 0.5, 0.55);
        let _txtButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButton);
        _txtButtonLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonLayoutComponent.setPositionPercentX(0.5);
        _txtButtonLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonLayoutComponent.setPositionPercentY(0.55);
        this._txtButton.setTouchEnabled(false);
        this._txtButton.ignoreContentAdaptWithSize(true);
        this._txtButton.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButton.setDefaultFontSize(40);
        this._txtButton.setString(gm.localize.getText("TXT_SUBMIT"));
        this._txtButton.setTextHorizontalAlignment(1);
        this._txtButton.setTextVerticalAlignment(1);
        this._txtButton.enableOutline(cc.color(57, 36, 36, 255), 2);

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._root.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.9808, 1.0164);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.9808);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(1.0164);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(81, 83));
        this._imgClose.setTouchEnabled(true);

        ///// # _imgStep1
        this._imgStep1 = new ccui.ImageView();
        this._imgStep1.setName("_imgStep1");
        this._root.addChild(this._imgStep1);
        this._imgStep1.setCascadeOpacityEnabled(true);
        this._imgStep1.setCascadeColorEnabled(true);
        this._imgStep1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStep1, 0.5, 0.7947);
        let _imgStep1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep1);
        _imgStep1LayoutComponent.setPositionPercentXEnabled(true);
        _imgStep1LayoutComponent.setPositionPercentX(0.5);
        _imgStep1LayoutComponent.setPositionPercentYEnabled(true);
        _imgStep1LayoutComponent.setPositionPercentY(0.7947);
        this._imgStep1.loadTexture("payment/Board_text.png", 1);
        this._imgStep1.setUnifySizeEnabled(false);
        this._imgStep1.ignoreContentAdaptWithSize(false);
        this._imgStep1.setScale9Enabled(true);
        this._imgStep1.setCapInsets(cc.rect(153, 34, 160, 38));
        this._imgStep1.setContentSize(cc.size(440, 100));
        this._imgStep1.setTouchEnabled(false);

        ///// # _imgStep1Icon
        this._imgStep1Icon = new ccui.ImageView();
        this._imgStep1Icon.setName("_imgStep1Icon");
        this._imgStep1.addChild(this._imgStep1Icon);
        this._imgStep1Icon.setCascadeOpacityEnabled(true);
        this._imgStep1Icon.setCascadeColorEnabled(true);
        this._imgStep1Icon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStep1Icon, 0.8697, 0.4881);
        this._imgStep1Icon.setScale(0.8, 0.8);
        let _imgStep1IconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep1Icon);
        _imgStep1IconLayoutComponent.setPositionPercentXEnabled(true);
        _imgStep1IconLayoutComponent.setPositionPercentX(0.8697);
        _imgStep1IconLayoutComponent.setPositionPercentYEnabled(true);
        _imgStep1IconLayoutComponent.setPositionPercentY(0.4881);
        this._imgStep1Icon.loadTexture("payment/Step_01.png", 1);
        this._imgStep1Icon.setUnifySizeEnabled(false);
        this._imgStep1Icon.ignoreContentAdaptWithSize(false);
        this._imgStep1Icon.setContentSize(cc.size(115, 93));
        this._imgStep1Icon.setTouchEnabled(false);

        ///// # _txtStep1
        this._txtStep1 = new ck.Text();
        this._txtStep1.setName("_txtStep1");
        this._imgStep1.addChild(this._txtStep1);
        this._txtStep1.setCascadeOpacityEnabled(true);
        this._txtStep1.setCascadeColorEnabled(true);
        this._txtStep1.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtStep1, 0.02, 0.91);
        this._txtStep1.setTextColor(cc.color(106, 37, 37, 255));
        let _txtStep1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep1);
        _txtStep1LayoutComponent.setPositionPercentXEnabled(true);
        _txtStep1LayoutComponent.setPositionPercentX(0.02);
        _txtStep1LayoutComponent.setPositionPercentYEnabled(true);
        _txtStep1LayoutComponent.setPositionPercentY(0.91);
        _txtStep1LayoutComponent.setPercentWidthEnabled(true);
        _txtStep1LayoutComponent.setPercentWidth(0.7446);
        _txtStep1LayoutComponent.setPercentHeightEnabled(true);
        _txtStep1LayoutComponent.setPercentHeight(0.8337);
        this._txtStep1.setTouchEnabled(false);
        this._txtStep1.setUnifySizeEnabled(false);
        this._txtStep1.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtStep1, 0.7446, 0.8337);
        this._txtStep1.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtStep1.setDefaultFontSize(30);
        this._txtStep1.setTextHorizontalAlignment(0);
        this._txtStep1.setTextVerticalAlignment(0);

        ///// # _imgStep2
        this._imgStep2 = new ccui.ImageView();
        this._imgStep2.setName("_imgStep2");
        this._root.addChild(this._imgStep2);
        this._imgStep2.setCascadeOpacityEnabled(true);
        this._imgStep2.setCascadeColorEnabled(true);
        this._imgStep2.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgStep2, 0.5, 0.7204);
        let _imgStep2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep2);
        _imgStep2LayoutComponent.setPositionPercentXEnabled(true);
        _imgStep2LayoutComponent.setPositionPercentX(0.5);
        _imgStep2LayoutComponent.setPositionPercentYEnabled(true);
        _imgStep2LayoutComponent.setPositionPercentY(0.7204);
        this._imgStep2.loadTexture("payment/Board_text.png", 1);
        this._imgStep2.setUnifySizeEnabled(false);
        this._imgStep2.ignoreContentAdaptWithSize(false);
        this._imgStep2.setScale9Enabled(true);
        this._imgStep2.setCapInsets(cc.rect(153, 34, 160, 38));
        this._imgStep2.setContentSize(cc.size(440, 147.4607));
        this._imgStep2.setTouchEnabled(false);

        ///// # _imgStep2Icon
        this._imgStep2Icon = new ccui.ImageView();
        this._imgStep2Icon.setName("_imgStep2Icon");
        this._imgStep2.addChild(this._imgStep2Icon);
        this._imgStep2Icon.setCascadeOpacityEnabled(true);
        this._imgStep2Icon.setCascadeColorEnabled(true);
        this._imgStep2Icon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStep2Icon, 0.8341, 0.4909);
        this._imgStep2Icon.setScale(0.8, 0.8);
        let _imgStep2IconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep2Icon);
        _imgStep2IconLayoutComponent.setPositionPercentXEnabled(true);
        _imgStep2IconLayoutComponent.setPositionPercentX(0.8341);
        _imgStep2IconLayoutComponent.setPositionPercentYEnabled(true);
        _imgStep2IconLayoutComponent.setPositionPercentY(0.4909);
        this._imgStep2Icon.loadTexture("payment/Step_02.png", 1);
        this._imgStep2Icon.setUnifySizeEnabled(false);
        this._imgStep2Icon.ignoreContentAdaptWithSize(false);
        this._imgStep2Icon.setContentSize(cc.size(166, 152));
        this._imgStep2Icon.setTouchEnabled(false);

        ///// # _txtStep2
        this._txtStep2 = new ck.Text();
        this._txtStep2.setName("_txtStep2");
        this._imgStep2.addChild(this._txtStep2);
        this._txtStep2.setCascadeOpacityEnabled(true);
        this._txtStep2.setCascadeColorEnabled(true);
        this._txtStep2.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtStep2, 0.02, 0.91);
        this._txtStep2.setTextColor(cc.color(106, 37, 37, 255));
        let _txtStep2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep2);
        _txtStep2LayoutComponent.setPositionPercentXEnabled(true);
        _txtStep2LayoutComponent.setPositionPercentX(0.02);
        _txtStep2LayoutComponent.setPositionPercentYEnabled(true);
        _txtStep2LayoutComponent.setPositionPercentY(0.91);
        _txtStep2LayoutComponent.setPercentWidthEnabled(true);
        _txtStep2LayoutComponent.setPercentWidth(0.6974);
        _txtStep2LayoutComponent.setPercentHeightEnabled(true);
        _txtStep2LayoutComponent.setPercentHeight(0.8337);
        this._txtStep2.setTouchEnabled(false);
        this._txtStep2.setUnifySizeEnabled(false);
        this._txtStep2.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtStep2, 0.6974, 0.8337);
        this._txtStep2.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtStep2.setDefaultFontSize(30);
        this._txtStep2.setTextHorizontalAlignment(0);
        this._txtStep2.setTextVerticalAlignment(0);

        ///// # _imgStep3
        this._imgStep3 = new ccui.ImageView();
        this._imgStep3.setName("_imgStep3");
        this._root.addChild(this._imgStep3);
        this._imgStep3.setCascadeOpacityEnabled(true);
        this._imgStep3.setCascadeColorEnabled(true);
        this._imgStep3.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgStep3, 0.5, 0.5254);
        let _imgStep3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep3);
        _imgStep3LayoutComponent.setPositionPercentXEnabled(true);
        _imgStep3LayoutComponent.setPositionPercentX(0.5);
        _imgStep3LayoutComponent.setPositionPercentYEnabled(true);
        _imgStep3LayoutComponent.setPositionPercentY(0.5254);
        this._imgStep3.loadTexture("payment/Board_text.png", 1);
        this._imgStep3.setUnifySizeEnabled(false);
        this._imgStep3.ignoreContentAdaptWithSize(false);
        this._imgStep3.setScale9Enabled(true);
        this._imgStep3.setCapInsets(cc.rect(153, 34, 160, 38));
        this._imgStep3.setContentSize(cc.size(440, 146.6745));
        this._imgStep3.setTouchEnabled(false);

        ///// # _imgStep3Icon
        this._imgStep3Icon = new ccui.ImageView();
        this._imgStep3Icon.setName("_imgStep3Icon");
        this._imgStep3.addChild(this._imgStep3Icon);
        this._imgStep3Icon.setCascadeOpacityEnabled(true);
        this._imgStep3Icon.setCascadeColorEnabled(true);
        this._imgStep3Icon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStep3Icon, 0.8373, 0.5028);
        this._imgStep3Icon.setScale(0.8, 0.8);
        let _imgStep3IconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep3Icon);
        _imgStep3IconLayoutComponent.setPositionPercentXEnabled(true);
        _imgStep3IconLayoutComponent.setPositionPercentX(0.8373);
        _imgStep3IconLayoutComponent.setPositionPercentYEnabled(true);
        _imgStep3IconLayoutComponent.setPositionPercentY(0.5028);
        this._imgStep3Icon.loadTexture("payment/Step_03.png", 1);
        this._imgStep3Icon.setUnifySizeEnabled(false);
        this._imgStep3Icon.ignoreContentAdaptWithSize(false);
        this._imgStep3Icon.setContentSize(cc.size(144, 162));
        this._imgStep3Icon.setTouchEnabled(false);

        ///// # _txtStep3
        this._txtStep3 = new ck.Text();
        this._txtStep3.setName("_txtStep3");
        this._imgStep3.addChild(this._txtStep3);
        this._txtStep3.setCascadeOpacityEnabled(true);
        this._txtStep3.setCascadeColorEnabled(true);
        this._txtStep3.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtStep3, 0.02, 0.91);
        this._txtStep3.setTextColor(cc.color(106, 37, 37, 255));
        let _txtStep3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep3);
        _txtStep3LayoutComponent.setPositionPercentXEnabled(true);
        _txtStep3LayoutComponent.setPositionPercentX(0.02);
        _txtStep3LayoutComponent.setPositionPercentYEnabled(true);
        _txtStep3LayoutComponent.setPositionPercentY(0.91);
        _txtStep3LayoutComponent.setPercentWidthEnabled(true);
        _txtStep3LayoutComponent.setPercentWidth(0.6367);
        _txtStep3LayoutComponent.setPercentHeightEnabled(true);
        _txtStep3LayoutComponent.setPercentHeight(0.8337);
        this._txtStep3.setTouchEnabled(false);
        this._txtStep3.setUnifySizeEnabled(false);
        this._txtStep3.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtStep3, 0.6367, 0.8337);
        this._txtStep3.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtStep3.setDefaultFontSize(30);
        this._txtStep3.setTextHorizontalAlignment(0);
        this._txtStep3.setTextVerticalAlignment(0);

        ///// # _imgResendBg
        this._imgResendBg = new ccui.ImageView();
        this._imgResendBg.setName("_imgResendBg");
        this._root.addChild(this._imgResendBg);
        this._imgResendBg.setCascadeOpacityEnabled(true);
        this._imgResendBg.setCascadeColorEnabled(true);
        this._imgResendBg.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgResendBg, 0.5, 0.1);
        let _imgResendBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgResendBg);
        _imgResendBgLayoutComponent.setPositionPercentXEnabled(true);
        _imgResendBgLayoutComponent.setPositionPercentX(0.5);
        _imgResendBgLayoutComponent.setPositionPercentYEnabled(true);
        _imgResendBgLayoutComponent.setPositionPercentY(0.1);
        this._imgResendBg.loadTexture("payment/Board_text.png", 1);
        this._imgResendBg.setUnifySizeEnabled(false);
        this._imgResendBg.ignoreContentAdaptWithSize(false);
        this._imgResendBg.setContentSize(cc.size(441.5242, 52.6109));
        this._imgResendBg.setTouchEnabled(false);

        ///// # _txtTime
        this._txtTime = new ck.Text();
        this._txtTime.setName("_txtTime");
        this._imgResendBg.addChild(this._txtTime);
        this._txtTime.setCascadeOpacityEnabled(true);
        this._txtTime.setCascadeColorEnabled(true);
        this._txtTime.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTime, 0.02, 0.4932);
        this._txtTime.setTextColor(cc.color(123, 102, 102, 255));
        let _txtTimeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTime);
        _txtTimeLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLayoutComponent.setPositionPercentX(0.02);
        _txtTimeLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLayoutComponent.setPositionPercentY(0.4932);
        _txtTimeLayoutComponent.setPercentWidthEnabled(true);
        _txtTimeLayoutComponent.setPercentWidth(0.5905);
        _txtTimeLayoutComponent.setPercentHeightEnabled(true);
        _txtTimeLayoutComponent.setPercentHeight(0.8337);
        this._txtTime.setTouchEnabled(false);
        this._txtTime.setUnifySizeEnabled(false);
        this._txtTime.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtTime, 0.5905, 0.8337);
        this._txtTime.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTime.setDefaultFontSize(30);
        this._txtTime.setTextHorizontalAlignment(0);
        this._txtTime.setTextVerticalAlignment(1);

        ///// # _imgResend
        this._imgResend = new ccui.ImageView();
        this._imgResend.setName("_imgResend");
        this._imgResendBg.addChild(this._imgResend);
        this._imgResend.setCascadeOpacityEnabled(true);
        this._imgResend.setCascadeColorEnabled(true);
        this._imgResend.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgResend, 0.8486, 0.5);
        let _imgResendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgResend);
        _imgResendLayoutComponent.setPositionPercentXEnabled(true);
        _imgResendLayoutComponent.setPositionPercentX(0.8486);
        _imgResendLayoutComponent.setPositionPercentYEnabled(true);
        _imgResendLayoutComponent.setPositionPercentY(0.5);
        this._imgResend.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgResend.setUnifySizeEnabled(false);
        this._imgResend.ignoreContentAdaptWithSize(false);
        this._imgResend.setContentSize(cc.size(125, 45));
        this._imgResend.setTouchEnabled(true);

        ///// # _txtResend
        this._txtResend = new ck.Text();
        this._txtResend.setName("_txtResend");
        this._imgResend.addChild(this._txtResend);
        this._txtResend.setCascadeOpacityEnabled(true);
        this._txtResend.setCascadeColorEnabled(true);
        this._txtResend.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtResend, 0.5, 0.55);
        this._txtResend.setTextColor(cc.color(68, 68, 224, 255));
        let _txtResendLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtResend);
        _txtResendLayoutComponent.setPositionPercentXEnabled(true);
        _txtResendLayoutComponent.setPositionPercentX(0.5);
        _txtResendLayoutComponent.setPositionPercentYEnabled(true);
        _txtResendLayoutComponent.setPositionPercentY(0.55);
        this._txtResend.setTouchEnabled(false);
        this._txtResend.ignoreContentAdaptWithSize(true);
        this._txtResend.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtResend.setDefaultFontSize(28);
        this._txtResend.setString(gm.localize.getText("TXT_RESEND_OTP"));
        this._txtResend.setTextHorizontalAlignment(1);
        this._txtResend.setTextVerticalAlignment(1);

    },



});

/**
 * Create PaymentInputPopup
 * @returns {_ccs.PaymentInputPopup}
 */
_ccs.PaymentInputPopup.create = function () {
    return new _ccs.PaymentInputPopup();
};
