/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.surveyPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.surveyPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {ccui.ImageView} */
    _imgFont: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ck.Text} */
    _txtTitle: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtHint: null,
    /** @type {ccui.ImageView} */
    _imgFinishButton: null,
    /** @type {ck.Text} */
    _txtButton: null,


    /**
     * _ccs.surveyPopup constructor
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
        this._layoutPopup.setPosition(-0.0002, 0.0004);
        let _layoutPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        this._layoutPopup.setTouchEnabled(true);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(570, 900));

        ///// # _imgBack
        this._imgBack = new ccui.ImageView();
        this._imgBack.setName("_imgBack");
        this._layoutPopup.addChild(this._imgBack);
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
        this._layoutPopup.addChild(this._imgFont);
        this._imgFont.setCascadeOpacityEnabled(true);
        this._imgFont.setCascadeColorEnabled(true);
        this._imgFont.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgFont, 0.5, 0.98);
        let _imgFontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFont);
        _imgFontLayoutComponent.setPositionPercentXEnabled(true);
        _imgFontLayoutComponent.setPositionPercentX(0.5);
        _imgFontLayoutComponent.setPositionPercentYEnabled(true);
        _imgFontLayoutComponent.setPositionPercentY(0.98);
        _imgFontLayoutComponent.setPercentWidthEnabled(true);
        _imgFontLayoutComponent.setPercentWidth(0.95);
        _imgFontLayoutComponent.setPercentHeightEnabled(true);
        _imgFontLayoutComponent.setPercentHeight(0.9527);
        this._imgFont.loadTexture("basics/popup/Font.png", 1);
        this._imgFont.setUnifySizeEnabled(false);
        this._imgFont.ignoreContentAdaptWithSize(false);
        this._imgFont.setScale9Enabled(true);
        this._imgFont.setCapInsets(cc.rect(69, 57, 15, 31));
        ck.UIUtils.setSizePercent(this._imgFont, 0.95, 0.9527);
        this._imgFont.setTouchEnabled(false);

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._layoutPopup.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 1);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(1);
        this._imgHeader.loadTexture("basics/popup/HeaderBlue.png", 1);
        this._imgHeader.setUnifySizeEnabled(false);
        this._imgHeader.ignoreContentAdaptWithSize(false);
        this._imgHeader.setContentSize(cc.size(366, 84));
        this._imgHeader.setTouchEnabled(false);

        ///// # _txtTitle
        this._txtTitle = new ck.Text();
        this._txtTitle.setName("_txtTitle");
        this._imgHeader.addChild(this._txtTitle);
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
        this._txtTitle.setString(gm.localize.getText("TXT_SURVEY"));
        this._txtTitle.setTextHorizontalAlignment(1);
        this._txtTitle.setTextVerticalAlignment(1);
        this._txtTitle.enableOutline(cc.color(155, 68, 38, 255), 2);
        this._txtTitle.enableShadow(cc.color(155, 68, 38, 255), cc.size(0, -2), 0);
        this._txtTitle.autoFitSingleLine();

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._layoutPopup.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.98, 0.9933);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.98);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.9933);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(81, 83));
        this._imgClose.setTouchEnabled(false);

        ///// # _txtHint
        this._txtHint = new ck.CustomRichTextExtend(cc.size(495.9991, 63.3835));
        this._txtHint.setName("_txtHint");
        this._layoutPopup.addChild(this._txtHint);
        this._txtHint.setCascadeOpacityEnabled(true);
        this._txtHint.setCascadeColorEnabled(true);
        this._txtHint.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHint, 0.5, 0.907);
        this._txtHint.setDefaultColor(cc.color(106, 37, 37, 255));
        let _txtHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHint);
        _txtHintLayoutComponent.setPositionPercentXEnabled(true);
        _txtHintLayoutComponent.setPositionPercentX(0.5);
        _txtHintLayoutComponent.setPositionPercentYEnabled(true);
        _txtHintLayoutComponent.setPositionPercentY(0.907);
        this._txtHint.setTouchEnabled(false);
        this._txtHint.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtHint.setDefaultSize(33);
        this._txtHint.setDefaultAlignHorizontal(2);
        this._txtHint.setDefaultAlignVertical(5);

        ///// # _imgFinishButton
        this._imgFinishButton = new ccui.ImageView();
        this._imgFinishButton.setName("_imgFinishButton");
        this._layoutPopup.addChild(this._imgFinishButton);
        this._imgFinishButton.setCascadeOpacityEnabled(true);
        this._imgFinishButton.setCascadeColorEnabled(true);
        this._imgFinishButton.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgFinishButton, 0.5012, 0.0194);
        let _imgFinishButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFinishButton);
        _imgFinishButtonLayoutComponent.setPositionPercentXEnabled(true);
        _imgFinishButtonLayoutComponent.setPositionPercentX(0.5012);
        _imgFinishButtonLayoutComponent.setPositionPercentYEnabled(true);
        _imgFinishButtonLayoutComponent.setPositionPercentY(0.0194);
        this._imgFinishButton.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgFinishButton.setUnifySizeEnabled(false);
        this._imgFinishButton.ignoreContentAdaptWithSize(false);
        this._imgFinishButton.setContentSize(cc.size(205.99, 81.0026));
        this._imgFinishButton.setTouchEnabled(true);

        ///// # _txtButton
        this._txtButton = new ck.Text();
        this._txtButton.setName("_txtButton");
        this._imgFinishButton.addChild(this._txtButton);
        this._txtButton.setCascadeOpacityEnabled(true);
        this._txtButton.setCascadeColorEnabled(true);
        this._txtButton.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButton, 0.5, 0.5253);
        let _txtButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButton);
        _txtButtonLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonLayoutComponent.setPositionPercentX(0.5);
        _txtButtonLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonLayoutComponent.setPositionPercentY(0.5253);
        this._txtButton.setTouchEnabled(false);
        this._txtButton.setUnifySizeEnabled(false);
        this._txtButton.ignoreContentAdaptWithSize(false);
        this._txtButton.setContentSize(cc.size(167.1135, 49));
        this._txtButton.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButton.setDefaultFontSize(40);
        this._txtButton.setString(gm.localize.getText("TXT_FINISH"));
        this._txtButton.setTextHorizontalAlignment(1);
        this._txtButton.setTextVerticalAlignment(1);
        this._txtButton.enableOutline(cc.color(57, 36, 36, 255), 2);

    },



});

/**
 * Create surveyPopup
 * @returns {_ccs.surveyPopup}
 */
_ccs.surveyPopup.create = function () {
    return new _ccs.surveyPopup();
};
