/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PaymentCPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.PaymentCPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {ccui.ImageView} */
    _imgFont: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ck.Text} */
    _txtHeader: null,
    /** @type {ck.Text} */
    _txtCardNumber: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxCardNumber: null,
    /** @type {ccui.ImageView} */
    _imgEditBoxCardNumber: null,
    /** @type {cc.EditBox} */
    _editBoxCardNumber: null,
    /** @type {ccui.ImageView} */
    _imgButton: null,
    /** @type {ck.Text} */
    _txtButton: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxPin: null,
    /** @type {ccui.ImageView} */
    _imgEditBoxPin: null,
    /** @type {cc.EditBox} */
    _editBoxPin: null,
    /** @type {ck.Text} */
    _txtPin: null,
    /** @type {ck.Text} */
    _txtError: null,


    /**
     * _ccs.PaymentCPopup constructor
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
        this._root.setContentSize(cc.size(500, 500));

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
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 0.996);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(0.996);
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
        this._txtHeader.setString(gm.localize.getText("TXT_CARD_INFO"));
        this._txtHeader.setTextHorizontalAlignment(1);
        this._txtHeader.setTextVerticalAlignment(1);
        this._txtHeader.enableOutline(cc.color(155, 68, 38, 255), 2);
        this._txtHeader.enableShadow(cc.color(155, 68, 38, 255), cc.size(0, -2), 0);

        ///// # _txtCardNumber
        this._txtCardNumber = new ck.Text();
        this._txtCardNumber.setName("_txtCardNumber");
        this._root.addChild(this._txtCardNumber);
        this._txtCardNumber.setCascadeOpacityEnabled(true);
        this._txtCardNumber.setCascadeColorEnabled(true);
        this._txtCardNumber.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCardNumber, 0.1, 0.8142);
        this._txtCardNumber.setTextColor(cc.color(87, 60, 38, 255));
        let _txtCardNumberLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCardNumber);
        _txtCardNumberLayoutComponent.setPositionPercentXEnabled(true);
        _txtCardNumberLayoutComponent.setPositionPercentX(0.1);
        _txtCardNumberLayoutComponent.setPositionPercentYEnabled(true);
        _txtCardNumberLayoutComponent.setPositionPercentY(0.8142);
        _txtCardNumberLayoutComponent.setPercentWidthEnabled(true);
        _txtCardNumberLayoutComponent.setPercentWidth(0.292);
        _txtCardNumberLayoutComponent.setPercentHeightEnabled(true);
        _txtCardNumberLayoutComponent.setPercentHeight(0.078);
        this._txtCardNumber.setTouchEnabled(false);
        this._txtCardNumber.ignoreContentAdaptWithSize(true);
        this._txtCardNumber.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCardNumber.setDefaultFontSize(35);
        this._txtCardNumber.setString(gm.localize.getText("TXT_CARD_NUMBER"));
        this._txtCardNumber.setTextHorizontalAlignment(0);
        this._txtCardNumber.setTextVerticalAlignment(1);

        ///// # _layoutEditBoxCardNumber
        this._layoutEditBoxCardNumber = new ccui.Layout();
        this._layoutEditBoxCardNumber.setName("_layoutEditBoxCardNumber");
        this._root.addChild(this._layoutEditBoxCardNumber);
        this._layoutEditBoxCardNumber.setCascadeOpacityEnabled(true);
        this._layoutEditBoxCardNumber.setCascadeColorEnabled(true);
        this._layoutEditBoxCardNumber.setAnchorPoint(cc.p(0.5026, 0.5236));
        ck.UIUtils.setPositionPercent(this._layoutEditBoxCardNumber, 0.5, 0.672);
        let _layoutEditBoxCardNumberLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEditBoxCardNumber);
        _layoutEditBoxCardNumberLayoutComponent.setPositionPercentXEnabled(true);
        _layoutEditBoxCardNumberLayoutComponent.setPositionPercentX(0.5);
        _layoutEditBoxCardNumberLayoutComponent.setPositionPercentYEnabled(true);
        _layoutEditBoxCardNumberLayoutComponent.setPositionPercentY(0.672);
        this._layoutEditBoxCardNumber.setTouchEnabled(false);
        this._layoutEditBoxCardNumber.setUnifySizeEnabled(false);
        this._layoutEditBoxCardNumber.ignoreContentAdaptWithSize(false);
        this._layoutEditBoxCardNumber.setContentSize(cc.size(398.32, 75));

        ///// # _imgEditBoxCardNumber
        this._imgEditBoxCardNumber = new ccui.ImageView();
        this._imgEditBoxCardNumber.setName("_imgEditBoxCardNumber");
        this._layoutEditBoxCardNumber.addChild(this._imgEditBoxCardNumber);
        this._imgEditBoxCardNumber.setCascadeOpacityEnabled(true);
        this._imgEditBoxCardNumber.setCascadeColorEnabled(true);
        this._imgEditBoxCardNumber.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgEditBoxCardNumber, 0.5, 0.5);
        let _imgEditBoxCardNumberLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgEditBoxCardNumber);
        _imgEditBoxCardNumberLayoutComponent.setPositionPercentXEnabled(true);
        _imgEditBoxCardNumberLayoutComponent.setPositionPercentX(0.5);
        _imgEditBoxCardNumberLayoutComponent.setPositionPercentYEnabled(true);
        _imgEditBoxCardNumberLayoutComponent.setPositionPercentY(0.5);
        _imgEditBoxCardNumberLayoutComponent.setPercentWidthEnabled(true);
        _imgEditBoxCardNumberLayoutComponent.setPercentWidth(1);
        _imgEditBoxCardNumberLayoutComponent.setPercentHeightEnabled(true);
        _imgEditBoxCardNumberLayoutComponent.setPercentHeight(1);
        this._imgEditBoxCardNumber.loadTexture("basics/other/BoxBrown.png", 1);
        this._imgEditBoxCardNumber.setUnifySizeEnabled(false);
        this._imgEditBoxCardNumber.ignoreContentAdaptWithSize(false);
        this._imgEditBoxCardNumber.setScale9Enabled(true);
        this._imgEditBoxCardNumber.setCapInsets(cc.rect(5, 3, 7, 6));
        ck.UIUtils.setSizePercent(this._imgEditBoxCardNumber, 1, 1);
        this._imgEditBoxCardNumber.setTouchEnabled(false);

        ///// # _editBoxCardNumber
        this._editBoxCardNumber = new cc.EditBox(cc.size(318.656, 75), new cc.Scale9Sprite());
        this._editBoxCardNumber.setName("_editBoxCardNumber");
        this._layoutEditBoxCardNumber.addChild(this._editBoxCardNumber);
        this._editBoxCardNumber.setCascadeOpacityEnabled(true);
        this._editBoxCardNumber.setCascadeColorEnabled(true);
        this._editBoxCardNumber.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxCardNumber, 0.5, 0.5);
        let _editBoxCardNumberLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxCardNumber);
        _editBoxCardNumberLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxCardNumberLayoutComponent.setPositionPercentX(0.5);
        _editBoxCardNumberLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxCardNumberLayoutComponent.setPositionPercentY(0.5);
        _editBoxCardNumberLayoutComponent.setPercentWidthEnabled(true);
        _editBoxCardNumberLayoutComponent.setPercentWidth(0.8);
        _editBoxCardNumberLayoutComponent.setPercentHeightEnabled(true);
        _editBoxCardNumberLayoutComponent.setPercentHeight(1);
        this._editBoxCardNumber.setUnifySizeEnabled(false);
        this._editBoxCardNumber.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxCardNumber, 0.8, 1);
        this._editBoxCardNumber.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxCardNumber.setFontSize(40);
        this._editBoxCardNumber.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxCardNumber.setPlaceholderFontSize(40);
        this._editBoxCardNumber.setPlaceholderFontColor(cc.color.WHITE);
        this._editBoxCardNumber.setPlaceHolder(gm.localize.getText("TXT_TAP_TO_ENTER"));
        this._editBoxCardNumber.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBoxCardNumber.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _imgButton
        this._imgButton = new ccui.ImageView();
        this._imgButton.setName("_imgButton");
        this._root.addChild(this._imgButton);
        this._imgButton.setCascadeOpacityEnabled(true);
        this._imgButton.setCascadeColorEnabled(true);
        this._imgButton.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButton, 0.5, 0.1571);
        let _imgButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButton);
        _imgButtonLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonLayoutComponent.setPositionPercentX(0.5);
        _imgButtonLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonLayoutComponent.setPositionPercentY(0.1571);
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
        this._txtButton.setString(gm.localize.getText("TXT_OK"));
        this._txtButton.setTextHorizontalAlignment(1);
        this._txtButton.setTextVerticalAlignment(1);
        this._txtButton.enableOutline(cc.color(158, 82, 9, 255), 2);

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

        ///// # _layoutEditBoxPin
        this._layoutEditBoxPin = new ccui.Layout();
        this._layoutEditBoxPin.setName("_layoutEditBoxPin");
        this._root.addChild(this._layoutEditBoxPin);
        this._layoutEditBoxPin.setCascadeOpacityEnabled(true);
        this._layoutEditBoxPin.setCascadeColorEnabled(true);
        this._layoutEditBoxPin.setAnchorPoint(cc.p(0.5026, 0.5236));
        ck.UIUtils.setPositionPercent(this._layoutEditBoxPin, 0.5, 0.4092);
        let _layoutEditBoxPinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEditBoxPin);
        _layoutEditBoxPinLayoutComponent.setPositionPercentXEnabled(true);
        _layoutEditBoxPinLayoutComponent.setPositionPercentX(0.5);
        _layoutEditBoxPinLayoutComponent.setPositionPercentYEnabled(true);
        _layoutEditBoxPinLayoutComponent.setPositionPercentY(0.4092);
        this._layoutEditBoxPin.setTouchEnabled(false);
        this._layoutEditBoxPin.setUnifySizeEnabled(false);
        this._layoutEditBoxPin.ignoreContentAdaptWithSize(false);
        this._layoutEditBoxPin.setContentSize(cc.size(398.32, 75));

        ///// # _imgEditBoxPin
        this._imgEditBoxPin = new ccui.ImageView();
        this._imgEditBoxPin.setName("_imgEditBoxPin");
        this._layoutEditBoxPin.addChild(this._imgEditBoxPin);
        this._imgEditBoxPin.setCascadeOpacityEnabled(true);
        this._imgEditBoxPin.setCascadeColorEnabled(true);
        this._imgEditBoxPin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgEditBoxPin, 0.5, 0.5);
        let _imgEditBoxPinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgEditBoxPin);
        _imgEditBoxPinLayoutComponent.setPositionPercentXEnabled(true);
        _imgEditBoxPinLayoutComponent.setPositionPercentX(0.5);
        _imgEditBoxPinLayoutComponent.setPositionPercentYEnabled(true);
        _imgEditBoxPinLayoutComponent.setPositionPercentY(0.5);
        _imgEditBoxPinLayoutComponent.setPercentWidthEnabled(true);
        _imgEditBoxPinLayoutComponent.setPercentWidth(1);
        _imgEditBoxPinLayoutComponent.setPercentHeightEnabled(true);
        _imgEditBoxPinLayoutComponent.setPercentHeight(1);
        this._imgEditBoxPin.loadTexture("basics/other/BoxBrown.png", 1);
        this._imgEditBoxPin.setUnifySizeEnabled(false);
        this._imgEditBoxPin.ignoreContentAdaptWithSize(false);
        this._imgEditBoxPin.setScale9Enabled(true);
        this._imgEditBoxPin.setCapInsets(cc.rect(4, 4, 9, 4));
        ck.UIUtils.setSizePercent(this._imgEditBoxPin, 1, 1);
        this._imgEditBoxPin.setTouchEnabled(false);

        ///// # _editBoxPin
        this._editBoxPin = new cc.EditBox(cc.size(318.656, 75), new cc.Scale9Sprite());
        this._editBoxPin.setName("_editBoxPin");
        this._layoutEditBoxPin.addChild(this._editBoxPin);
        this._editBoxPin.setCascadeOpacityEnabled(true);
        this._editBoxPin.setCascadeColorEnabled(true);
        this._editBoxPin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxPin, 0.5, 0.5);
        let _editBoxPinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxPin);
        _editBoxPinLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxPinLayoutComponent.setPositionPercentX(0.5);
        _editBoxPinLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxPinLayoutComponent.setPositionPercentY(0.5);
        _editBoxPinLayoutComponent.setPercentWidthEnabled(true);
        _editBoxPinLayoutComponent.setPercentWidth(0.8);
        _editBoxPinLayoutComponent.setPercentHeightEnabled(true);
        _editBoxPinLayoutComponent.setPercentHeight(1);
        this._editBoxPin.setUnifySizeEnabled(false);
        this._editBoxPin.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBoxPin, 0.8, 1);
        this._editBoxPin.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxPin.setFontSize(40);
        this._editBoxPin.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBoxPin.setPlaceholderFontSize(40);
        this._editBoxPin.setPlaceholderFontColor(cc.color.WHITE);
        this._editBoxPin.setPlaceHolder(gm.localize.getText("TXT_TAP_TO_ENTER"));
        this._editBoxPin.setInputMode(cc.EDITBOX_INPUT_MODE_PHONENUMBER);
        this._editBoxPin.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        ///// # _txtPin
        this._txtPin = new ck.Text();
        this._txtPin.setName("_txtPin");
        this._root.addChild(this._txtPin);
        this._txtPin.setCascadeOpacityEnabled(true);
        this._txtPin.setCascadeColorEnabled(true);
        this._txtPin.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPin, 0.1, 0.5266);
        this._txtPin.setTextColor(cc.color(87, 60, 38, 255));
        let _txtPinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPin);
        _txtPinLayoutComponent.setPositionPercentXEnabled(true);
        _txtPinLayoutComponent.setPositionPercentX(0.1);
        _txtPinLayoutComponent.setPositionPercentYEnabled(true);
        _txtPinLayoutComponent.setPositionPercentY(0.5266);
        _txtPinLayoutComponent.setPercentWidthEnabled(true);
        _txtPinLayoutComponent.setPercentWidth(0.072);
        _txtPinLayoutComponent.setPercentHeightEnabled(true);
        _txtPinLayoutComponent.setPercentHeight(0.078);
        this._txtPin.setTouchEnabled(false);
        this._txtPin.ignoreContentAdaptWithSize(true);
        this._txtPin.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtPin.setDefaultFontSize(35);
        this._txtPin.setString(gm.localize.getText("TXT_PIN"));
        this._txtPin.setTextHorizontalAlignment(0);
        this._txtPin.setTextVerticalAlignment(1);

        ///// # _txtError
        this._txtError = new ck.Text();
        this._txtError.setName("_txtError");
        this._root.addChild(this._txtError);
        this._txtError.setCascadeOpacityEnabled(true);
        this._txtError.setCascadeColorEnabled(true);
        this._txtError.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtError, 0.5, 0.286);
        this._txtError.setTextColor(cc.color(255, 0, 0, 255));
        let _txtErrorLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtError);
        _txtErrorLayoutComponent.setPositionPercentXEnabled(true);
        _txtErrorLayoutComponent.setPositionPercentX(0.5);
        _txtErrorLayoutComponent.setPositionPercentYEnabled(true);
        _txtErrorLayoutComponent.setPositionPercentY(0.286);
        _txtErrorLayoutComponent.setPercentWidthEnabled(true);
        _txtErrorLayoutComponent.setPercentWidth(0.274);
        _txtErrorLayoutComponent.setPercentHeightEnabled(true);
        _txtErrorLayoutComponent.setPercentHeight(0.066);
        this._txtError.setTouchEnabled(false);
        this._txtError.ignoreContentAdaptWithSize(true);
        this._txtError.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtError.setDefaultFontSize(30);
        this._txtError.setTextHorizontalAlignment(1);
        this._txtError.setTextVerticalAlignment(1);

    },



});

/**
 * Create PaymentCPopup
 * @returns {_ccs.PaymentCPopup}
 */
_ccs.PaymentCPopup.create = function () {
    return new _ccs.PaymentCPopup();
};
