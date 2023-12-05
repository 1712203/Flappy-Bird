/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.BuildUpPayItemWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.BuildUpPayItemWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtAmount: null,


    /**
     * _ccs.BuildUpPayItemWidget constructor
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
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(75, 75));

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._layoutRoot.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr, 0.5, 0.5);
        this._imgBgr.setOpacity(76);
        this._imgBgr.setColor(cc.color(0, 0, 0, 255));
        let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
        _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentY(0.5);
        _imgBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrLayoutComponent.setPercentWidth(1);
        _imgBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrLayoutComponent.setPercentHeight(1);
        this._imgBgr.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setScale9Enabled(true);
        this._imgBgr.setCapInsets(cc.rect(23, 14, 18, 36));
        ck.UIUtils.setSizePercent(this._imgBgr, 1, 1);
        this._imgBgr.setTouchEnabled(false);

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._layoutRoot.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.5);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.5);
        _imgIconLayoutComponent.setPercentWidthEnabled(true);
        _imgIconLayoutComponent.setPercentWidth(0.8);
        _imgIconLayoutComponent.setPercentHeightEnabled(true);
        _imgIconLayoutComponent.setPercentHeight(0.8);
        this._imgIcon.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgIcon, 0.8, 0.8);
        this._imgIcon.setTouchEnabled(false);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._layoutRoot.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.5, 0.2);
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.5);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.2);
        _txtAmountLayoutComponent.setPercentWidthEnabled(true);
        _txtAmountLayoutComponent.setPercentWidth(0.98);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.setUnifySizeEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtAmount, 0.98);
        this._txtAmount.setContentSize(cc.size(this._txtAmount.width, 29));
        this._txtAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmount.setDefaultFontSize(30);
        this._txtAmount.setTextHorizontalAlignment(2);
        this._txtAmount.setTextVerticalAlignment(1);
        this._txtAmount.enableOutline(cc.color(105, 45, 5, 255), 2);
        this._txtAmount.autoFitSingleLine();

    },



});

/**
 * Create BuildUpPayItemWidget
 * @returns {_ccs.BuildUpPayItemWidget}
 */
_ccs.BuildUpPayItemWidget.create = function () {
    return new _ccs.BuildUpPayItemWidget();
};
