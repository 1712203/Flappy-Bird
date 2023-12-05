/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.LanguagePopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.LanguagePopup = ccui.Widget.extend({

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
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.ImageView} */
    _imgChange: null,
    /** @type {ck.Text} */
    _txtChange: null,
    /** @type {ck.GridViewVertical} */
    _gridView: null,


    /**
     * _ccs.LanguagePopup constructor
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
        ck.UIUtils.setPositionPercent(this._imgBack, 0.5, 0.498);
        let _imgBackLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBack);
        _imgBackLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackLayoutComponent.setPositionPercentX(0.5);
        _imgBackLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackLayoutComponent.setPositionPercentY(0.498);
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
        this._txtHeader.setString(gm.localize.getText("TXT_LANGUAGE"));
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

        ///// # _imgChange
        this._imgChange = new ccui.ImageView();
        this._imgChange.setName("_imgChange");
        this._root.addChild(this._imgChange);
        this._imgChange.setCascadeOpacityEnabled(true);
        this._imgChange.setCascadeColorEnabled(true);
        this._imgChange.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgChange, 0.5, 0.15);
        let _imgChangeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgChange);
        _imgChangeLayoutComponent.setPositionPercentXEnabled(true);
        _imgChangeLayoutComponent.setPositionPercentX(0.5);
        _imgChangeLayoutComponent.setPositionPercentYEnabled(true);
        _imgChangeLayoutComponent.setPositionPercentY(0.15);
        this._imgChange.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgChange.setUnifySizeEnabled(false);
        this._imgChange.ignoreContentAdaptWithSize(false);
        this._imgChange.setContentSize(cc.size(180, 70));
        this._imgChange.setTouchEnabled(true);

        ///// # _txtChange
        this._txtChange = new ck.Text();
        this._txtChange.setName("_txtChange");
        this._imgChange.addChild(this._txtChange);
        this._txtChange.setCascadeOpacityEnabled(true);
        this._txtChange.setCascadeColorEnabled(true);
        this._txtChange.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtChange, 0.5, 0.55);
        let _txtChangeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtChange);
        _txtChangeLayoutComponent.setPositionPercentXEnabled(true);
        _txtChangeLayoutComponent.setPositionPercentX(0.5);
        _txtChangeLayoutComponent.setPositionPercentYEnabled(true);
        _txtChangeLayoutComponent.setPositionPercentY(0.55);
        this._txtChange.setTouchEnabled(false);
        this._txtChange.ignoreContentAdaptWithSize(true);
        this._txtChange.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtChange.setDefaultFontSize(40);
        this._txtChange.setString(gm.localize.getText("TXT_CHANGE"));
        this._txtChange.setTextHorizontalAlignment(1);
        this._txtChange.setTextVerticalAlignment(1);
        this._txtChange.enableOutline(cc.color(158, 82, 9, 255), 2);

        ///// # _gridView
        this._gridView = new ck.GridViewVertical();
        this._gridView.setName("_gridView");
        this._root.addChild(this._gridView);
        this._gridView.setCascadeOpacityEnabled(true);
        this._gridView.setCascadeColorEnabled(true);
        this._gridView.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridView, 0.5, 0.564);
        let _gridViewLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridView);
        _gridViewLayoutComponent.setPositionPercentXEnabled(true);
        _gridViewLayoutComponent.setPositionPercentX(0.5);
        _gridViewLayoutComponent.setPositionPercentYEnabled(true);
        _gridViewLayoutComponent.setPositionPercentY(0.564);

    },



});

/**
 * Create LanguagePopup
 * @returns {_ccs.LanguagePopup}
 */
_ccs.LanguagePopup.create = function () {
    return new _ccs.LanguagePopup();
};
