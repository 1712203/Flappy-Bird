/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.EnterSomethingPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.EnterSomethingPopup = ccui.Widget.extend({

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
    _txtMessage: null,
    /** @type {ck.Text} */
    _txtError: null,
    /** @type {ccui.Layout} */
    _layoutEditBox: null,
    /** @type {ccui.ImageView} */
    _imgEditBoxBgr: null,
    /** @type {cc.EditBox} */
    _editBox: null,
    /** @type {ccui.ImageView} */
    _imgButton: null,
    /** @type {ck.Text} */
    _txtButton: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,


    /**
     * _ccs.EnterSomethingPopup constructor
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
        this._txtHeader.setString(gm.localize.getText("TXT_ALERT"));
        this._txtHeader.setTextHorizontalAlignment(1);
        this._txtHeader.setTextVerticalAlignment(1);
        this._txtHeader.enableOutline(cc.color(155, 68, 38, 255), 2);
        this._txtHeader.enableShadow(cc.color(155, 68, 38, 255), cc.size(0, -2), 0);

        ///// # _txtMessage
        this._txtMessage = new ck.Text();
        this._txtMessage.setName("_txtMessage");
        this._root.addChild(this._txtMessage);
        this._txtMessage.setCascadeOpacityEnabled(true);
        this._txtMessage.setCascadeColorEnabled(true);
        this._txtMessage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMessage, 0.5, 0.782);
        this._txtMessage.setTextColor(cc.color(87, 60, 38, 255));
        let _txtMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMessage);
        _txtMessageLayoutComponent.setPositionPercentXEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentX(0.5);
        _txtMessageLayoutComponent.setPositionPercentYEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentY(0.782);
        _txtMessageLayoutComponent.setPercentWidthEnabled(true);
        _txtMessageLayoutComponent.setPercentWidth(0.368);
        _txtMessageLayoutComponent.setPercentHeightEnabled(true);
        _txtMessageLayoutComponent.setPercentHeight(0.078);
        this._txtMessage.setTouchEnabled(false);
        this._txtMessage.ignoreContentAdaptWithSize(true);
        this._txtMessage.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMessage.setDefaultFontSize(35);
        this._txtMessage.setTextHorizontalAlignment(1);
        this._txtMessage.setTextVerticalAlignment(1);

        ///// # _txtError
        this._txtError = new ck.Text();
        this._txtError.setName("_txtError");
        this._root.addChild(this._txtError);
        this._txtError.setCascadeOpacityEnabled(true);
        this._txtError.setCascadeColorEnabled(true);
        this._txtError.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtError, 0.5, 0.4);
        this._txtError.setTextColor(cc.color(255, 0, 0, 255));
        let _txtErrorLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtError);
        _txtErrorLayoutComponent.setPositionPercentXEnabled(true);
        _txtErrorLayoutComponent.setPositionPercentX(0.5);
        _txtErrorLayoutComponent.setPositionPercentYEnabled(true);
        _txtErrorLayoutComponent.setPositionPercentY(0.4);
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

        ///// # _layoutEditBox
        this._layoutEditBox = new ccui.Layout();
        this._layoutEditBox.setName("_layoutEditBox");
        this._root.addChild(this._layoutEditBox);
        this._layoutEditBox.setCascadeOpacityEnabled(true);
        this._layoutEditBox.setCascadeColorEnabled(true);
        this._layoutEditBox.setAnchorPoint(cc.p(0.5026, 0.5236));
        ck.UIUtils.setPositionPercent(this._layoutEditBox, 0.5, 0.55);
        let _layoutEditBoxLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEditBox);
        _layoutEditBoxLayoutComponent.setPositionPercentXEnabled(true);
        _layoutEditBoxLayoutComponent.setPositionPercentX(0.5);
        _layoutEditBoxLayoutComponent.setPositionPercentYEnabled(true);
        _layoutEditBoxLayoutComponent.setPositionPercentY(0.55);
        this._layoutEditBox.setTouchEnabled(false);
        this._layoutEditBox.setUnifySizeEnabled(false);
        this._layoutEditBox.ignoreContentAdaptWithSize(false);
        this._layoutEditBox.setContentSize(cc.size(398.32, 75));

        ///// # _imgEditBoxBgr
        this._imgEditBoxBgr = new ccui.ImageView();
        this._imgEditBoxBgr.setName("_imgEditBoxBgr");
        this._layoutEditBox.addChild(this._imgEditBoxBgr);
        this._imgEditBoxBgr.setCascadeOpacityEnabled(true);
        this._imgEditBoxBgr.setCascadeColorEnabled(true);
        this._imgEditBoxBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgEditBoxBgr, 0.5, 0.5);
        let _imgEditBoxBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgEditBoxBgr);
        _imgEditBoxBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgEditBoxBgrLayoutComponent.setPositionPercentX(0.5);
        _imgEditBoxBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgEditBoxBgrLayoutComponent.setPositionPercentY(0.5);
        _imgEditBoxBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgEditBoxBgrLayoutComponent.setPercentWidth(1);
        _imgEditBoxBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgEditBoxBgrLayoutComponent.setPercentHeight(1);
        this._imgEditBoxBgr.loadTexture("basics/other/BoxBrown.png", 1);
        this._imgEditBoxBgr.setUnifySizeEnabled(false);
        this._imgEditBoxBgr.ignoreContentAdaptWithSize(false);
        this._imgEditBoxBgr.setScale9Enabled(true);
        this._imgEditBoxBgr.setCapInsets(cc.rect(4, 4, 9, 4));
        ck.UIUtils.setSizePercent(this._imgEditBoxBgr, 1, 1);
        this._imgEditBoxBgr.setTouchEnabled(false);

        ///// # _editBox
        this._editBox = new cc.EditBox(cc.size(318.656, 75), new cc.Scale9Sprite());
        this._editBox.setName("_editBox");
        this._layoutEditBox.addChild(this._editBox);
        this._editBox.setCascadeOpacityEnabled(true);
        this._editBox.setCascadeColorEnabled(true);
        this._editBox.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBox, 0.5, 0.5);
        let _editBoxLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBox);
        _editBoxLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxLayoutComponent.setPositionPercentX(0.5);
        _editBoxLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxLayoutComponent.setPositionPercentY(0.5);
        _editBoxLayoutComponent.setPercentWidthEnabled(true);
        _editBoxLayoutComponent.setPercentWidth(0.8);
        _editBoxLayoutComponent.setPercentHeightEnabled(true);
        _editBoxLayoutComponent.setPercentHeight(1);
        this._editBox.setUnifySizeEnabled(false);
        this._editBox.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._editBox, 0.8, 1);
        this._editBox.setFontName("fonts/BebasNeueProBold.ttf");
        this._editBox.setFontSize(40);
        this._editBox.setPlaceholderFontName("fonts/BebasNeueProBold.ttf");
        this._editBox.setPlaceholderFontSize(40);
        this._editBox.setPlaceholderFontColor(cc.color.WHITE);
        this._editBox.setPlaceHolder(gm.localize.getText("TXT_TAP_TO_ENTER"));
        this._editBox.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this._editBox.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

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

    },



});

/**
 * Create EnterSomethingPopup
 * @returns {_ccs.EnterSomethingPopup}
 */
_ccs.EnterSomethingPopup.create = function () {
    return new _ccs.EnterSomethingPopup();
};
