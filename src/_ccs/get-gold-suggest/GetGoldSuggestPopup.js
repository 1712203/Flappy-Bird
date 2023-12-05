/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.GetGoldSuggestPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.GetGoldSuggestPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {ccui.ImageView} */
    _imgFont: null,
    /** @type {ccui.Layout} */
    _layoutHeader: null,
    /** @type {ck.Text} */
    _txtHeader: null,
    /** @type {ck.GridViewVertical} */
    _gridViewSuggestion: null,
    /** @type {ccui.Layout} */
    _layoutClose: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,


    /**
     * _ccs.GetGoldSuggestPopup constructor
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
        this._layoutPopup.setTouchEnabled(false);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(540, 648.59));

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
        this._imgFont.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgFont, 0.5, 0.0278);
        this._imgFont.setOpacity(130);
        let _imgFontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFont);
        _imgFontLayoutComponent.setPositionPercentXEnabled(true);
        _imgFontLayoutComponent.setPositionPercentX(0.5);
        _imgFontLayoutComponent.setPercentWidthEnabled(true);
        _imgFontLayoutComponent.setPercentWidth(0.95);
        _imgFontLayoutComponent.setPercentHeightEnabled(true);
        _imgFontLayoutComponent.setPercentHeight(0.83);
        this._imgFont.loadTexture("basics/popup/Font.png", 1);
        this._imgFont.setUnifySizeEnabled(false);
        this._imgFont.ignoreContentAdaptWithSize(false);
        this._imgFont.setScale9Enabled(true);
        this._imgFont.setCapInsets(cc.rect(69, 57, 15, 31));
        ck.UIUtils.setSizePercent(this._imgFont, 0.95, 0.83);
        this._imgFont.setTouchEnabled(false);

        ///// # _layoutHeader
        this._layoutHeader = new ccui.Layout();
        this._layoutHeader.setName("_layoutHeader");
        this._layoutPopup.addChild(this._layoutHeader);
        this._layoutHeader.setCascadeOpacityEnabled(true);
        this._layoutHeader.setCascadeColorEnabled(true);
        this._layoutHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutHeader, 0.5, 1);
        let _layoutHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHeader);
        _layoutHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _layoutHeaderLayoutComponent.setPositionPercentX(0.5);
        _layoutHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _layoutHeaderLayoutComponent.setPositionPercentY(1);
        this._layoutHeader.setTouchEnabled(false);
        this._layoutHeader.setUnifySizeEnabled(false);
        this._layoutHeader.ignoreContentAdaptWithSize(false);
        this._layoutHeader.setContentSize(cc.size(385.5069, 139.951));

        ///// # _txtHeader
        this._txtHeader = new ck.Text();
        this._txtHeader.setName("_txtHeader");
        this._layoutHeader.addChild(this._txtHeader);
        this._txtHeader.setCascadeOpacityEnabled(true);
        this._txtHeader.setCascadeColorEnabled(true);
        this._txtHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHeader, 0.5, 0.1697);
        this._txtHeader.setTextColor(cc.color(235, 245, 189, 255));
        let _txtHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHeader);
        _txtHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentX(0.5);
        _txtHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentY(0.1697);
        this._txtHeader.setTouchEnabled(false);
        this._txtHeader.setUnifySizeEnabled(false);
        this._txtHeader.ignoreContentAdaptWithSize(false);
        this._txtHeader.setContentSize(cc.size(500.8767, 56));
        this._txtHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHeader.setDefaultFontSize(50);
        this._txtHeader.setString(gm.localize.getText("TXT_GOLD_OUT_SUGGEST"));
        this._txtHeader.setTextHorizontalAlignment(1);
        this._txtHeader.setTextVerticalAlignment(1);
        this._txtHeader.autoFitSingleLine();

        ///// # _gridViewSuggestion
        this._gridViewSuggestion = new ck.GridViewVertical();
        this._gridViewSuggestion.setName("_gridViewSuggestion");
        this._layoutPopup.addChild(this._gridViewSuggestion);
        this._gridViewSuggestion.setCascadeOpacityEnabled(true);
        this._gridViewSuggestion.setCascadeColorEnabled(true);
        this._gridViewSuggestion.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridViewSuggestion, 0.5, 0.4431);
        let _gridViewSuggestionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewSuggestion);
        _gridViewSuggestionLayoutComponent.setPositionPercentXEnabled(true);
        _gridViewSuggestionLayoutComponent.setPositionPercentX(0.5);
        _gridViewSuggestionLayoutComponent.setPositionPercentYEnabled(true);
        _gridViewSuggestionLayoutComponent.setPositionPercentY(0.4431);
        _gridViewSuggestionLayoutComponent.setPercentWidthEnabled(true);
        _gridViewSuggestionLayoutComponent.setPercentWidth(0.95);

        ///// # _layoutClose
        this._layoutClose = new ccui.Layout();
        this._layoutClose.setName("_layoutClose");
        this._layoutPopup.addChild(this._layoutClose);
        this._layoutClose.setCascadeOpacityEnabled(true);
        this._layoutClose.setCascadeColorEnabled(true);
        this._layoutClose.setAnchorPoint(cc.p(0.5026, 0.5236));
        ck.UIUtils.setPositionPercent(this._layoutClose, 0.98, 0.98);
        let _layoutCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutClose);
        _layoutCloseLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentX(0.98);
        _layoutCloseLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCloseLayoutComponent.setPositionPercentY(0.98);
        this._layoutClose.setTouchEnabled(true);
        this._layoutClose.setUnifySizeEnabled(false);
        this._layoutClose.ignoreContentAdaptWithSize(false);
        this._layoutClose.setContentSize(cc.size(75, 75));

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._layoutClose.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.5, 0.6896);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.5);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.6896);
        _imgCloseLayoutComponent.setPercentWidthEnabled(true);
        _imgCloseLayoutComponent.setPercentWidth(1.0267);
        _imgCloseLayoutComponent.setPercentHeightEnabled(true);
        _imgCloseLayoutComponent.setPercentHeight(1.0667);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgClose, 1.0267, 1.0667);
        this._imgClose.setTouchEnabled(false);

    },



});

/**
 * Create GetGoldSuggestPopup
 * @returns {_ccs.GetGoldSuggestPopup}
 */
_ccs.GetGoldSuggestPopup.create = function () {
    return new _ccs.GetGoldSuggestPopup();
};
