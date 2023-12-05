/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.EventCollectorUserInfoPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.EventCollectorUserInfoPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {ccui.ImageView} */
    _imgDecor01: null,
    /** @type {ccui.ImageView} */
    _imgDecor02: null,
    /** @type {ccui.ImageView} */
    _imgFont: null,
    /** @type {ccui.ImageView} */
    _imgTitle: null,
    /** @type {ccui.ImageView} */
    _imgInfoHeader: null,
    /** @type {ck.Text} */
    _txtInfoHeader: null,
    /** @type {ck.Text} */
    _txtInfoHint01: null,
    /** @type {ck.Text} */
    _txtNameTitle: null,
    /** @type {ck.EditBox} */
    _editBoxName: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxBackground: null,
    /** @type {ccui.ImageView} */
    _imgEditBoxBackground: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxText: null,
    /** @type {ck.Text} */
    _txtEditBoxTextDisplay: null,
    /** @type {ck.Text} */
    _txtPhoneNumber: null,
    /** @type {ck.EditBox} */
    _editBoxPhoneNumber: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxBackground: null,
    /** @type {ccui.ImageView} */
    _imgEditBoxBackground: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxText: null,
    /** @type {ck.Text} */
    _txtEditBoxTextDisplay: null,
    /** @type {ck.Text} */
    _txtAddress: null,
    /** @type {ck.EditBox} */
    _editBoxAddress: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxBackground: null,
    /** @type {ccui.ImageView} */
    _imgEditBoxBackground: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxText: null,
    /** @type {ck.Text} */
    _txtEditBoxTextDisplay: null,
    /** @type {ck.Text} */
    _txtEmail: null,
    /** @type {ck.EditBox} */
    _editBoxEmail: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxBackground: null,
    /** @type {ccui.ImageView} */
    _imgEditBoxBackground: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxText: null,
    /** @type {ck.Text} */
    _txtEditBoxTextDisplay: null,
    /** @type {ck.Text} */
    _txtInfoHint02: null,
    /** @type {ccui.ImageView} */
    _imgFinish: null,
    /** @type {ck.Text} */
    _txtFinish: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,


    /**
     * _ccs.EventCollectorUserInfoPopup constructor
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
        this._root.setPosition(0.0029, 0.0001);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(560.8076, 648.6693));
        this._root.setBackGroundColorType(1);
        this._root.setBackGroundColor(cc.color(150, 200, 255, 255));
        this._root.setBackGroundColorOpacity(102);

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

        ///// # _imgDecor01
        this._imgDecor01 = new ccui.ImageView();
        this._imgDecor01.setName("_imgDecor01");
        this._root.addChild(this._imgDecor01);
        this._imgDecor01.setCascadeOpacityEnabled(true);
        this._imgDecor01.setCascadeColorEnabled(true);
        this._imgDecor01.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgDecor01, 0.5217, 0.901);
        let _imgDecor01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDecor01);
        _imgDecor01LayoutComponent.setPositionPercentXEnabled(true);
        _imgDecor01LayoutComponent.setPositionPercentX(0.5217);
        _imgDecor01LayoutComponent.setPositionPercentYEnabled(true);
        _imgDecor01LayoutComponent.setPositionPercentY(0.901);
        this._imgDecor01.loadTexture("event-collector/congraz/Decor_01.png", 1);
        this._imgDecor01.setUnifySizeEnabled(false);
        this._imgDecor01.ignoreContentAdaptWithSize(false);
        this._imgDecor01.setScale9Enabled(true);
        this._imgDecor01.setCapInsets(cc.rect(69, 17, 348, 56));
        this._imgDecor01.setContentSize(cc.size(486, 90));
        this._imgDecor01.setTouchEnabled(false);

        ///// # _imgDecor02
        this._imgDecor02 = new ccui.ImageView();
        this._imgDecor02.setName("_imgDecor02");
        this._root.addChild(this._imgDecor02);
        this._imgDecor02.setCascadeOpacityEnabled(true);
        this._imgDecor02.setCascadeColorEnabled(true);
        this._imgDecor02.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgDecor02, 0.4204, -0.0322);
        let _imgDecor02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDecor02);
        _imgDecor02LayoutComponent.setPositionPercentXEnabled(true);
        _imgDecor02LayoutComponent.setPositionPercentX(0.4204);
        _imgDecor02LayoutComponent.setPositionPercentYEnabled(true);
        _imgDecor02LayoutComponent.setPositionPercentY(-0.0322);
        this._imgDecor02.loadTexture("event-collector/congraz/Decor_02.png", 1);
        this._imgDecor02.setUnifySizeEnabled(false);
        this._imgDecor02.ignoreContentAdaptWithSize(false);
        this._imgDecor02.setScale9Enabled(true);
        this._imgDecor02.setCapInsets(cc.rect(69, 17, 383, 369));
        this._imgDecor02.setContentSize(cc.size(521, 403));
        this._imgDecor02.setTouchEnabled(false);

        ///// # _imgFont
        this._imgFont = new ccui.ImageView();
        this._imgFont.setName("_imgFont");
        this._root.addChild(this._imgFont);
        this._imgFont.setCascadeOpacityEnabled(true);
        this._imgFont.setCascadeColorEnabled(true);
        this._imgFont.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgFont, 0.5, 0.0222);
        let _imgFontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFont);
        _imgFontLayoutComponent.setPositionPercentXEnabled(true);
        _imgFontLayoutComponent.setPositionPercentX(0.5);
        _imgFontLayoutComponent.setPositionPercentYEnabled(true);
        _imgFontLayoutComponent.setPositionPercentY(0.0222);
        _imgFontLayoutComponent.setPercentWidthEnabled(true);
        _imgFontLayoutComponent.setPercentWidth(0.9476);
        _imgFontLayoutComponent.setPercentHeightEnabled(true);
        _imgFontLayoutComponent.setPercentHeight(0.9071);
        this._imgFont.loadTexture("event-collector/congraz/Info_Box.png", 1);
        this._imgFont.setUnifySizeEnabled(false);
        this._imgFont.ignoreContentAdaptWithSize(false);
        this._imgFont.setScale9Enabled(true);
        this._imgFont.setCapInsets(cc.rect(69, 17, 184, 18));
        ck.UIUtils.setSizePercent(this._imgFont, 0.9476, 0.9071);
        this._imgFont.setTouchEnabled(false);

        ///// # _imgTitle
        this._imgTitle = new ccui.ImageView();
        this._imgTitle.setName("_imgTitle");
        this._root.addChild(this._imgTitle);
        this._imgTitle.setCascadeOpacityEnabled(true);
        this._imgTitle.setCascadeColorEnabled(true);
        this._imgTitle.setAnchorPoint(cc.p(0, 0.4665));
        ck.UIUtils.setPositionPercent(this._imgTitle, 0.0296, 0.9503);
        let _imgTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTitle);
        _imgTitleLayoutComponent.setPositionPercentXEnabled(true);
        _imgTitleLayoutComponent.setPositionPercentX(0.0296);
        _imgTitleLayoutComponent.setPositionPercentYEnabled(true);
        _imgTitleLayoutComponent.setPositionPercentY(0.9503);
        this._imgTitle.loadTexture("texts/events/event-collector/Congraz.png", 1);
        this._imgTitle.setTouchEnabled(false);

        ///// # _imgInfoHeader
        this._imgInfoHeader = new ccui.ImageView();
        this._imgInfoHeader.setName("_imgInfoHeader");
        this._root.addChild(this._imgInfoHeader);
        this._imgInfoHeader.setCascadeOpacityEnabled(true);
        this._imgInfoHeader.setCascadeColorEnabled(true);
        this._imgInfoHeader.setAnchorPoint(cc.p(0, 0.4665));
        ck.UIUtils.setPositionPercent(this._imgInfoHeader, 0.0557, 0.8408);
        let _imgInfoHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgInfoHeader);
        _imgInfoHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgInfoHeaderLayoutComponent.setPositionPercentX(0.0557);
        _imgInfoHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgInfoHeaderLayoutComponent.setPositionPercentY(0.8408);
        this._imgInfoHeader.loadTexture("event-collector/congraz/Title_Band.png", 1);
        this._imgInfoHeader.setUnifySizeEnabled(false);
        this._imgInfoHeader.ignoreContentAdaptWithSize(false);
        this._imgInfoHeader.setContentSize(cc.size(491, 50));
        this._imgInfoHeader.setTouchEnabled(false);

        ///// # _txtInfoHeader
        this._txtInfoHeader = new ck.Text();
        this._txtInfoHeader.setName("_txtInfoHeader");
        this._imgInfoHeader.addChild(this._txtInfoHeader);
        this._txtInfoHeader.setCascadeOpacityEnabled(true);
        this._txtInfoHeader.setCascadeColorEnabled(true);
        this._txtInfoHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtInfoHeader, 0.5178, 0.4609);
        this._txtInfoHeader.setTextColor(cc.color(233, 217, 194, 255));
        let _txtInfoHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtInfoHeader);
        _txtInfoHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtInfoHeaderLayoutComponent.setPositionPercentX(0.5178);
        _txtInfoHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtInfoHeaderLayoutComponent.setPositionPercentY(0.4609);
        this._txtInfoHeader.setTouchEnabled(false);
        this._txtInfoHeader.ignoreContentAdaptWithSize(true);
        this._txtInfoHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtInfoHeader.setDefaultFontSize(35);
        this._txtInfoHeader.setString(gm.localize.getText("TXT_WINNER_INFORMATION"));
        this._txtInfoHeader.setTextHorizontalAlignment(1);
        this._txtInfoHeader.setTextVerticalAlignment(1);

        ///// # _txtInfoHint01
        this._txtInfoHint01 = new ck.Text();
        this._txtInfoHint01.setName("_txtInfoHint01");
        this._root.addChild(this._txtInfoHint01);
        this._txtInfoHint01.setCascadeOpacityEnabled(true);
        this._txtInfoHint01.setCascadeColorEnabled(true);
        this._txtInfoHint01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtInfoHint01, 0.5, 0.7541);
        this._txtInfoHint01.setTextColor(cc.color(41, 89, 134, 255));
        let _txtInfoHint01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtInfoHint01);
        _txtInfoHint01LayoutComponent.setPositionPercentXEnabled(true);
        _txtInfoHint01LayoutComponent.setPositionPercentX(0.5);
        _txtInfoHint01LayoutComponent.setPositionPercentYEnabled(true);
        _txtInfoHint01LayoutComponent.setPositionPercentY(0.7541);
        this._txtInfoHint01.setTouchEnabled(false);
        this._txtInfoHint01.ignoreContentAdaptWithSize(true);
        this._txtInfoHint01.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtInfoHint01.setDefaultFontSize(25);
        this._txtInfoHint01.setString(gm.localize.getText("TXT_EVENT_COLLECTOR_INFORMATION_HINT_01"));
        this._txtInfoHint01.setTextHorizontalAlignment(1);
        this._txtInfoHint01.setTextVerticalAlignment(1);

        ///// # _txtNameTitle
        this._txtNameTitle = new ck.Text();
        this._txtNameTitle.setName("_txtNameTitle");
        this._root.addChild(this._txtNameTitle);
        this._txtNameTitle.setCascadeOpacityEnabled(true);
        this._txtNameTitle.setCascadeColorEnabled(true);
        this._txtNameTitle.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNameTitle, 0.076, 0.6619);
        this._txtNameTitle.setTextColor(cc.color(151, 78, 46, 255));
        let _txtNameTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNameTitle);
        _txtNameTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameTitleLayoutComponent.setPositionPercentX(0.076);
        _txtNameTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameTitleLayoutComponent.setPositionPercentY(0.6619);
        this._txtNameTitle.setTouchEnabled(false);
        this._txtNameTitle.ignoreContentAdaptWithSize(true);
        this._txtNameTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtNameTitle.setDefaultFontSize(27);
        this._txtNameTitle.setString(gm.localize.getText("TXT_YOUR_NAME"));
        this._txtNameTitle.setTextHorizontalAlignment(1);
        this._txtNameTitle.setTextVerticalAlignment(1);

        ///// # _editBoxName
        this._editBoxName = new ck.EditBox();
        this._editBoxName.setName("_editBoxName");
        this._root.addChild(this._editBoxName);
        this._editBoxName.setCascadeOpacityEnabled(true);
        this._editBoxName.setCascadeColorEnabled(true);
        this._editBoxName.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxName, 0.6338, 0.6538);
        let _editBoxNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxName);
        _editBoxNameLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxNameLayoutComponent.setPositionPercentX(0.6338);
        _editBoxNameLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxNameLayoutComponent.setPositionPercentY(0.6538);
        this._editBoxName.setUnifySizeEnabled(false);
        this._editBoxName.ignoreContentAdaptWithSize(false);
        this._editBoxName.setContentSize(cc.size(296.5802, 46.6354));
        this._editBoxName.setTouchEnabled(false);

        ///// # _layoutEditBoxBackground
        this._layoutEditBoxBackground = new ccui.Layout();
        this._layoutEditBoxBackground.setName("_layoutEditBoxBackground");
        this._editBoxName.addChild(this._layoutEditBoxBackground);
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
        this._imgEditBoxBackground.setColor(cc.color(193, 167, 136, 255));
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
        this._editBoxName.addChild(this._layoutEditBoxText);
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
        this._txtEditBoxTextDisplay.setTextColor(cc.color(89, 43, 1, 255));
        let _txtEditBoxTextDisplayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtEditBoxTextDisplay);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentXEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentX(0.5);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentYEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentY(0.5);
        this._txtEditBoxTextDisplay.setTouchEnabled(false);
        this._txtEditBoxTextDisplay.ignoreContentAdaptWithSize(true);
        this._txtEditBoxTextDisplay.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtEditBoxTextDisplay.setDefaultFontSize(30);
        this._txtEditBoxTextDisplay.setString(gm.localize.getText("TXT_TAP_TO_ENTER"));
        this._txtEditBoxTextDisplay.setTextHorizontalAlignment(1);
        this._txtEditBoxTextDisplay.setTextVerticalAlignment(1);

        ///// # _initEditBox for this._editBoxName;
        this._editBoxName._initEditBox();

        ///// # _txtPhoneNumber
        this._txtPhoneNumber = new ck.Text();
        this._txtPhoneNumber.setName("_txtPhoneNumber");
        this._root.addChild(this._txtPhoneNumber);
        this._txtPhoneNumber.setCascadeOpacityEnabled(true);
        this._txtPhoneNumber.setCascadeColorEnabled(true);
        this._txtPhoneNumber.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPhoneNumber, 0.076, 0.5459);
        this._txtPhoneNumber.setTextColor(cc.color(151, 78, 46, 255));
        let _txtPhoneNumberLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPhoneNumber);
        _txtPhoneNumberLayoutComponent.setPositionPercentXEnabled(true);
        _txtPhoneNumberLayoutComponent.setPositionPercentX(0.076);
        _txtPhoneNumberLayoutComponent.setPositionPercentYEnabled(true);
        _txtPhoneNumberLayoutComponent.setPositionPercentY(0.5459);
        this._txtPhoneNumber.setTouchEnabled(false);
        this._txtPhoneNumber.ignoreContentAdaptWithSize(true);
        this._txtPhoneNumber.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtPhoneNumber.setDefaultFontSize(27);
        this._txtPhoneNumber.setString(gm.localize.getText("TXT_PHONE_NUMBER"));
        this._txtPhoneNumber.setTextHorizontalAlignment(1);
        this._txtPhoneNumber.setTextVerticalAlignment(1);

        ///// # _editBoxPhoneNumber
        this._editBoxPhoneNumber = new ck.EditBox();
        this._editBoxPhoneNumber.setName("_editBoxPhoneNumber");
        this._root.addChild(this._editBoxPhoneNumber);
        this._editBoxPhoneNumber.setCascadeOpacityEnabled(true);
        this._editBoxPhoneNumber.setCascadeColorEnabled(true);
        this._editBoxPhoneNumber.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxPhoneNumber, 0.6338, 0.5403);
        let _editBoxPhoneNumberLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxPhoneNumber);
        _editBoxPhoneNumberLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxPhoneNumberLayoutComponent.setPositionPercentX(0.6338);
        _editBoxPhoneNumberLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxPhoneNumberLayoutComponent.setPositionPercentY(0.5403);
        this._editBoxPhoneNumber.setUnifySizeEnabled(false);
        this._editBoxPhoneNumber.ignoreContentAdaptWithSize(false);
        this._editBoxPhoneNumber.setContentSize(cc.size(296.5802, 46.6354));
        this._editBoxPhoneNumber.setTouchEnabled(false);

        ///// # _layoutEditBoxBackground
        this._layoutEditBoxBackground = new ccui.Layout();
        this._layoutEditBoxBackground.setName("_layoutEditBoxBackground");
        this._editBoxPhoneNumber.addChild(this._layoutEditBoxBackground);
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
        this._imgEditBoxBackground.setColor(cc.color(193, 167, 136, 255));
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
        this._editBoxPhoneNumber.addChild(this._layoutEditBoxText);
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
        this._txtEditBoxTextDisplay.setTextColor(cc.color(89, 43, 1, 255));
        let _txtEditBoxTextDisplayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtEditBoxTextDisplay);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentXEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentX(0.5);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentYEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentY(0.5);
        this._txtEditBoxTextDisplay.setTouchEnabled(false);
        this._txtEditBoxTextDisplay.ignoreContentAdaptWithSize(true);
        this._txtEditBoxTextDisplay.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtEditBoxTextDisplay.setDefaultFontSize(30);
        this._txtEditBoxTextDisplay.setString(gm.localize.getText("TXT_TAP_TO_ENTER"));
        this._txtEditBoxTextDisplay.setTextHorizontalAlignment(1);
        this._txtEditBoxTextDisplay.setTextVerticalAlignment(1);

        ///// # _initEditBox for this._editBoxPhoneNumber;
        this._editBoxPhoneNumber._initEditBox();

        ///// # _txtAddress
        this._txtAddress = new ck.Text();
        this._txtAddress.setName("_txtAddress");
        this._root.addChild(this._txtAddress);
        this._txtAddress.setCascadeOpacityEnabled(true);
        this._txtAddress.setCascadeColorEnabled(true);
        this._txtAddress.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAddress, 0.0778, 0.4294);
        this._txtAddress.setTextColor(cc.color(151, 78, 46, 255));
        let _txtAddressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAddress);
        _txtAddressLayoutComponent.setPositionPercentXEnabled(true);
        _txtAddressLayoutComponent.setPositionPercentX(0.0778);
        _txtAddressLayoutComponent.setPositionPercentYEnabled(true);
        _txtAddressLayoutComponent.setPositionPercentY(0.4294);
        this._txtAddress.setTouchEnabled(false);
        this._txtAddress.ignoreContentAdaptWithSize(true);
        this._txtAddress.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAddress.setDefaultFontSize(27);
        this._txtAddress.setString(gm.localize.getText("TXT_ADDRESS"));
        this._txtAddress.setTextHorizontalAlignment(1);
        this._txtAddress.setTextVerticalAlignment(1);

        ///// # _editBoxAddress
        this._editBoxAddress = new ck.EditBox();
        this._editBoxAddress.setName("_editBoxAddress");
        this._root.addChild(this._editBoxAddress);
        this._editBoxAddress.setCascadeOpacityEnabled(true);
        this._editBoxAddress.setCascadeColorEnabled(true);
        this._editBoxAddress.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxAddress, 0.6338, 0.4264);
        let _editBoxAddressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxAddress);
        _editBoxAddressLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxAddressLayoutComponent.setPositionPercentX(0.6338);
        _editBoxAddressLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxAddressLayoutComponent.setPositionPercentY(0.4264);
        this._editBoxAddress.setUnifySizeEnabled(false);
        this._editBoxAddress.ignoreContentAdaptWithSize(false);
        this._editBoxAddress.setContentSize(cc.size(296.5802, 46.6354));
        this._editBoxAddress.setTouchEnabled(false);

        ///// # _layoutEditBoxBackground
        this._layoutEditBoxBackground = new ccui.Layout();
        this._layoutEditBoxBackground.setName("_layoutEditBoxBackground");
        this._editBoxAddress.addChild(this._layoutEditBoxBackground);
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
        this._imgEditBoxBackground.setColor(cc.color(193, 167, 136, 255));
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
        this._editBoxAddress.addChild(this._layoutEditBoxText);
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
        this._txtEditBoxTextDisplay.setTextColor(cc.color(89, 43, 1, 255));
        let _txtEditBoxTextDisplayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtEditBoxTextDisplay);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentXEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentX(0.5);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentYEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentY(0.5);
        this._txtEditBoxTextDisplay.setTouchEnabled(false);
        this._txtEditBoxTextDisplay.ignoreContentAdaptWithSize(true);
        this._txtEditBoxTextDisplay.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtEditBoxTextDisplay.setDefaultFontSize(30);
        this._txtEditBoxTextDisplay.setString(gm.localize.getText("TXT_TAP_TO_ENTER"));
        this._txtEditBoxTextDisplay.setTextHorizontalAlignment(1);
        this._txtEditBoxTextDisplay.setTextVerticalAlignment(1);

        ///// # _initEditBox for this._editBoxAddress;
        this._editBoxAddress._initEditBox();

        ///// # _txtEmail
        this._txtEmail = new ck.Text();
        this._txtEmail.setName("_txtEmail");
        this._root.addChild(this._txtEmail);
        this._txtEmail.setCascadeOpacityEnabled(true);
        this._txtEmail.setCascadeColorEnabled(true);
        this._txtEmail.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtEmail, 0.0778, 0.3058);
        this._txtEmail.setTextColor(cc.color(151, 78, 46, 255));
        let _txtEmailLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtEmail);
        _txtEmailLayoutComponent.setPositionPercentXEnabled(true);
        _txtEmailLayoutComponent.setPositionPercentX(0.0778);
        _txtEmailLayoutComponent.setPositionPercentYEnabled(true);
        _txtEmailLayoutComponent.setPositionPercentY(0.3058);
        this._txtEmail.setTouchEnabled(false);
        this._txtEmail.ignoreContentAdaptWithSize(true);
        this._txtEmail.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtEmail.setDefaultFontSize(27);
        this._txtEmail.setString(gm.localize.getText("TXT_EMAIL"));
        this._txtEmail.setTextHorizontalAlignment(1);
        this._txtEmail.setTextVerticalAlignment(1);

        ///// # _editBoxEmail
        this._editBoxEmail = new ck.EditBox();
        this._editBoxEmail.setName("_editBoxEmail");
        this._root.addChild(this._editBoxEmail);
        this._editBoxEmail.setCascadeOpacityEnabled(true);
        this._editBoxEmail.setCascadeColorEnabled(true);
        this._editBoxEmail.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBoxEmail, 0.6338, 0.3108);
        let _editBoxEmailLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBoxEmail);
        _editBoxEmailLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxEmailLayoutComponent.setPositionPercentX(0.6338);
        _editBoxEmailLayoutComponent.setPositionPercentYEnabled(true);
        _editBoxEmailLayoutComponent.setPositionPercentY(0.3108);
        this._editBoxEmail.setUnifySizeEnabled(false);
        this._editBoxEmail.ignoreContentAdaptWithSize(false);
        this._editBoxEmail.setContentSize(cc.size(296.5802, 46.6354));
        this._editBoxEmail.setTouchEnabled(false);

        ///// # _layoutEditBoxBackground
        this._layoutEditBoxBackground = new ccui.Layout();
        this._layoutEditBoxBackground.setName("_layoutEditBoxBackground");
        this._editBoxEmail.addChild(this._layoutEditBoxBackground);
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
        this._imgEditBoxBackground.setColor(cc.color(193, 167, 136, 255));
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
        this._editBoxEmail.addChild(this._layoutEditBoxText);
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
        this._txtEditBoxTextDisplay.setTextColor(cc.color(89, 43, 1, 255));
        let _txtEditBoxTextDisplayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtEditBoxTextDisplay);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentXEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentX(0.5);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentYEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentY(0.5);
        this._txtEditBoxTextDisplay.setTouchEnabled(false);
        this._txtEditBoxTextDisplay.ignoreContentAdaptWithSize(true);
        this._txtEditBoxTextDisplay.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtEditBoxTextDisplay.setDefaultFontSize(30);
        this._txtEditBoxTextDisplay.setString(gm.localize.getText("TXT_TAP_TO_ENTER"));
        this._txtEditBoxTextDisplay.setTextHorizontalAlignment(1);
        this._txtEditBoxTextDisplay.setTextVerticalAlignment(1);

        ///// # _initEditBox for this._editBoxEmail;
        this._editBoxEmail._initEditBox();

        ///// # _txtInfoHint02
        this._txtInfoHint02 = new ck.Text();
        this._txtInfoHint02.setName("_txtInfoHint02");
        this._root.addChild(this._txtInfoHint02);
        this._txtInfoHint02.setCascadeOpacityEnabled(true);
        this._txtInfoHint02.setCascadeColorEnabled(true);
        this._txtInfoHint02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtInfoHint02, 0.5, 0.2124);
        this._txtInfoHint02.setTextColor(cc.color(41, 89, 134, 255));
        let _txtInfoHint02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtInfoHint02);
        _txtInfoHint02LayoutComponent.setPositionPercentXEnabled(true);
        _txtInfoHint02LayoutComponent.setPositionPercentX(0.5);
        _txtInfoHint02LayoutComponent.setPositionPercentYEnabled(true);
        _txtInfoHint02LayoutComponent.setPositionPercentY(0.2124);
        this._txtInfoHint02.setTouchEnabled(false);
        this._txtInfoHint02.setUnifySizeEnabled(false);
        this._txtInfoHint02.ignoreContentAdaptWithSize(false);
        this._txtInfoHint02.setContentSize(cc.size(499.3911, 65.6782));
        this._txtInfoHint02.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtInfoHint02.setDefaultFontSize(25);
        this._txtInfoHint02.setString(gm.localize.getText("TXT_EVENT_COLLECTOR_INFORMATION_HINT_02"));
        this._txtInfoHint02.setTextHorizontalAlignment(1);
        this._txtInfoHint02.setTextVerticalAlignment(1);

        ///// # _imgFinish
        this._imgFinish = new ccui.ImageView();
        this._imgFinish.setName("_imgFinish");
        this._root.addChild(this._imgFinish);
        this._imgFinish.setCascadeOpacityEnabled(true);
        this._imgFinish.setCascadeColorEnabled(true);
        this._imgFinish.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgFinish, 0.5, 0.0966);
        let _imgFinishLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFinish);
        _imgFinishLayoutComponent.setPositionPercentXEnabled(true);
        _imgFinishLayoutComponent.setPositionPercentX(0.5);
        _imgFinishLayoutComponent.setPositionPercentYEnabled(true);
        _imgFinishLayoutComponent.setPositionPercentY(0.0966);
        this._imgFinish.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgFinish.setUnifySizeEnabled(false);
        this._imgFinish.ignoreContentAdaptWithSize(false);
        this._imgFinish.setContentSize(cc.size(205.99, 81.0026));
        this._imgFinish.setTouchEnabled(true);

        ///// # _txtFinish
        this._txtFinish = new ck.Text();
        this._txtFinish.setName("_txtFinish");
        this._imgFinish.addChild(this._txtFinish);
        this._txtFinish.setCascadeOpacityEnabled(true);
        this._txtFinish.setCascadeColorEnabled(true);
        this._txtFinish.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtFinish, 0.5, 0.55);
        let _txtFinishLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtFinish);
        _txtFinishLayoutComponent.setPositionPercentXEnabled(true);
        _txtFinishLayoutComponent.setPositionPercentX(0.5);
        _txtFinishLayoutComponent.setPositionPercentYEnabled(true);
        _txtFinishLayoutComponent.setPositionPercentY(0.55);
        this._txtFinish.setTouchEnabled(false);
        this._txtFinish.ignoreContentAdaptWithSize(true);
        this._txtFinish.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtFinish.setDefaultFontSize(40);
        this._txtFinish.setString(gm.localize.getText("TXT_FINISH"));
        this._txtFinish.setTextHorizontalAlignment(1);
        this._txtFinish.setTextVerticalAlignment(1);
        this._txtFinish.enableOutline(cc.color(158, 82, 9, 255), 2);

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._root.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 1, 1);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(1);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(1);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(75, 78));
        this._imgClose.setTouchEnabled(false);

    },



});

/**
 * Create EventCollectorUserInfoPopup
 * @returns {_ccs.EventCollectorUserInfoPopup}
 */
_ccs.EventCollectorUserInfoPopup.create = function () {
    return new _ccs.EventCollectorUserInfoPopup();
};
