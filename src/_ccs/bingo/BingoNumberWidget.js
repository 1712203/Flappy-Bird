/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.BingoNumberWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.BingoNumberWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ck.Text} */
    _txtNumber: null,


    /**
     * _ccs.BingoNumberWidget constructor
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

        ///// # _layoutRoot
        this._layoutRoot = new ccui.Layout();
        this._layoutRoot.setName("_layoutRoot");
        this.addChild(this._layoutRoot);
        this._layoutRoot.setCascadeOpacityEnabled(true);
        this._layoutRoot.setCascadeColorEnabled(true);
        this._layoutRoot.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        this._layoutRoot.setTouchEnabled(true);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(90, 90));

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._layoutRoot.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.5);
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(0.5);
        this._imgBackground.loadTexture("bingo/ui/NumberBackground_01.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setContentSize(cc.size(83, 89));
        this._imgBackground.setTouchEnabled(false);

        ///// # _txtNumber
        this._txtNumber = new ck.Text();
        this._txtNumber.setName("_txtNumber");
        this._layoutRoot.addChild(this._txtNumber);
        this._txtNumber.setCascadeOpacityEnabled(true);
        this._txtNumber.setCascadeColorEnabled(true);
        this._txtNumber.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNumber, 0.5, 0.53);
        let _txtNumberLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNumber);
        _txtNumberLayoutComponent.setPositionPercentXEnabled(true);
        _txtNumberLayoutComponent.setPositionPercentX(0.5);
        _txtNumberLayoutComponent.setPositionPercentYEnabled(true);
        _txtNumberLayoutComponent.setPositionPercentY(0.53);
        this._txtNumber.setTouchEnabled(false);
        this._txtNumber.ignoreContentAdaptWithSize(true);
        this._txtNumber.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtNumber.setDefaultFontSize(55);
        this._txtNumber.setTextHorizontalAlignment(0);
        this._txtNumber.setTextVerticalAlignment(0);

    },



});

/**
 * Create BingoNumberWidget
 * @returns {_ccs.BingoNumberWidget}
 */
_ccs.BingoNumberWidget.create = function () {
    return new _ccs.BingoNumberWidget();
};
