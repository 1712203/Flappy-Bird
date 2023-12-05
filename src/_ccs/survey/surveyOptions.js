/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.surveyOptions
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.surveyOptions = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ccui.ImageView} */
    _imgBgrHightlight: null,
    /** @type {ck.Text} */
    _lbContent: null,
    /** @type {ccui.ImageView} */
    _imgStatus: null,
    /** @type {ck.EditBox} */
    _editBox: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxBackground: null,
    /** @type {ccui.ImageView} */
    _imgEditBoxBackground: null,
    /** @type {ccui.Layout} */
    _layoutEditBoxText: null,
    /** @type {ck.Text} */
    _txtEditBoxTextDisplay: null,


    /**
     * _ccs.surveyOptions constructor
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
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(220, 70));

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._root.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr, 0.5, 0.5);
        let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
        _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentY(0.5);
        _imgBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrLayoutComponent.setPercentWidth(1);
        _imgBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrLayoutComponent.setPercentHeight(1);
        this._imgBgr.loadTexture("basics2/other/Box_19.png", 1);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setScale9Enabled(true);
        this._imgBgr.setCapInsets(cc.rect(19, 18, 19, 21));
        ck.UIUtils.setSizePercent(this._imgBgr, 1, 1);
        this._imgBgr.setTouchEnabled(false);

        ///// # _imgBgrHightlight
        this._imgBgrHightlight = new ccui.ImageView();
        this._imgBgrHightlight.setName("_imgBgrHightlight");
        this._root.addChild(this._imgBgrHightlight);
        this._imgBgrHightlight.setCascadeOpacityEnabled(true);
        this._imgBgrHightlight.setCascadeColorEnabled(true);
        this._imgBgrHightlight.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgrHightlight, 0.5, 0.5);
        this._imgBgrHightlight.setVisible(false);
        let _imgBgrHightlightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrHightlight);
        _imgBgrHightlightLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrHightlightLayoutComponent.setPositionPercentX(0.5);
        _imgBgrHightlightLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrHightlightLayoutComponent.setPositionPercentY(0.5);
        _imgBgrHightlightLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrHightlightLayoutComponent.setPercentWidth(1);
        _imgBgrHightlightLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrHightlightLayoutComponent.setPercentHeight(1);
        this._imgBgrHightlight.loadTexture("basics2/other/Box_18.png", 1);
        this._imgBgrHightlight.setUnifySizeEnabled(false);
        this._imgBgrHightlight.ignoreContentAdaptWithSize(false);
        this._imgBgrHightlight.setScale9Enabled(true);
        this._imgBgrHightlight.setCapInsets(cc.rect(19, 18, 19, 21));
        ck.UIUtils.setSizePercent(this._imgBgrHightlight, 1, 1);
        this._imgBgrHightlight.setTouchEnabled(false);

        ///// # _lbContent
        this._lbContent = new ck.Text();
        this._lbContent.setName("_lbContent");
        this._root.addChild(this._lbContent);
        this._lbContent.setCascadeOpacityEnabled(true);
        this._lbContent.setCascadeColorEnabled(true);
        this._lbContent.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lbContent, 0.5, 0.5);
        this._lbContent.setTextColor(cc.color(43, 43, 43, 255));
        let _lbContentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lbContent);
        _lbContentLayoutComponent.setPositionPercentXEnabled(true);
        _lbContentLayoutComponent.setPositionPercentX(0.5);
        _lbContentLayoutComponent.setPositionPercentYEnabled(true);
        _lbContentLayoutComponent.setPositionPercentY(0.5);
        _lbContentLayoutComponent.setPercentWidthEnabled(true);
        _lbContentLayoutComponent.setPercentWidth(0.88);
        this._lbContent.setTouchEnabled(false);
        this._lbContent.setUnifySizeEnabled(false);
        this._lbContent.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._lbContent, 0.88);
        this._lbContent.setContentSize(cc.size(this._lbContent.width, 54.2265));
        this._lbContent.setFontName("fonts/BebasNeueProBold.ttf");
        this._lbContent.setDefaultFontSize(23);
        this._lbContent.setString(gm.localize.getText("TXT_DON'T_KNOW_HOW_TO_PURCHASE"));
        this._lbContent.setTextHorizontalAlignment(1);
        this._lbContent.setTextVerticalAlignment(1);

        ///// # _imgStatus
        this._imgStatus = new ccui.ImageView();
        this._imgStatus.setName("_imgStatus");
        this._root.addChild(this._imgStatus);
        this._imgStatus.setCascadeOpacityEnabled(true);
        this._imgStatus.setCascadeColorEnabled(true);
        this._imgStatus.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStatus, 0.9266, 0.3123);
        let _imgStatusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStatus);
        _imgStatusLayoutComponent.setPositionPercentXEnabled(true);
        _imgStatusLayoutComponent.setPositionPercentX(0.9266);
        _imgStatusLayoutComponent.setPositionPercentYEnabled(true);
        _imgStatusLayoutComponent.setPositionPercentY(0.3123);
        this._imgStatus.loadTexture("basics2/other/Check_01.png", 1);
        this._imgStatus.setUnifySizeEnabled(false);
        this._imgStatus.ignoreContentAdaptWithSize(false);
        this._imgStatus.setContentSize(cc.size(41, 42));
        this._imgStatus.setTouchEnabled(false);

        ///// # _editBox
        this._editBox = new ck.EditBox();
        this._editBox.setName("_editBox");
        this._root.addChild(this._editBox);
        this._editBox.setCascadeOpacityEnabled(true);
        this._editBox.setCascadeColorEnabled(true);
        this._editBox.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._editBox, 0.5, 0.4857);
        let _editBoxLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._editBox);
        _editBoxLayoutComponent.setPositionPercentXEnabled(true);
        _editBoxLayoutComponent.setPositionPercentX(0.5);
        _editBoxLayoutComponent.setPercentWidthEnabled(true);
        _editBoxLayoutComponent.setPercentWidth(0.96);
        this._editBox.setUnifySizeEnabled(false);
        this._editBox.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._editBox, 0.96);
        this._editBox.setContentSize(cc.size(this._editBox.width, 61));
        this._editBox.setTouchEnabled(false);

        ///// # _layoutEditBoxBackground
        this._layoutEditBoxBackground = new ccui.Layout();
        this._layoutEditBoxBackground.setName("_layoutEditBoxBackground");
        this._editBox.addChild(this._layoutEditBoxBackground);
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
        this._imgEditBoxBackground.setVisible(false);
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
        this._imgEditBoxBackground.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgEditBoxBackground, 1, 1);
        this._imgEditBoxBackground.setTouchEnabled(false);

        ///// # _layoutEditBoxText
        this._layoutEditBoxText = new ccui.Layout();
        this._layoutEditBoxText.setName("_layoutEditBoxText");
        this._editBox.addChild(this._layoutEditBoxText);
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
        this._txtEditBoxTextDisplay.setTextColor(cc.color(43, 43, 43, 255));
        let _txtEditBoxTextDisplayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtEditBoxTextDisplay);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentXEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentX(0.5);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentYEnabled(true);
        _txtEditBoxTextDisplayLayoutComponent.setPositionPercentY(0.5);
        this._txtEditBoxTextDisplay.setTouchEnabled(false);
        this._txtEditBoxTextDisplay.ignoreContentAdaptWithSize(true);
        this._txtEditBoxTextDisplay.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtEditBoxTextDisplay.setDefaultFontSize(30);
        this._txtEditBoxTextDisplay.setString(gm.localize.getText("TXT_OTHER..."));
        this._txtEditBoxTextDisplay.setTextHorizontalAlignment(1);
        this._txtEditBoxTextDisplay.setTextVerticalAlignment(1);

        ///// # _initEditBox for this._editBox;
        this._editBox._initEditBox();

    },



});

/**
 * Create surveyOptions
 * @returns {_ccs.surveyOptions}
 */
_ccs.surveyOptions.create = function () {
    return new _ccs.surveyOptions();
};
