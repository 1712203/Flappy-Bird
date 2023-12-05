/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.WheelXChoice
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.WheelXChoice = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtAmount: null,
    /** @type {ccui.ImageView} */
    _imgCheck: null,


    /**
     * _ccs.WheelXChoice constructor
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
        this._layoutRoot.setContentSize(cc.size(100, 100));

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._layoutRoot.addChild(this._imgBgr);
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
        _imgBgrLayoutComponent.setPercentWidth(0.9);
        _imgBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrLayoutComponent.setPercentHeight(0.9);
        this._imgBgr.loadTexture("basics/other/Box_05.png", 1);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setScale9Enabled(true);
        this._imgBgr.setCapInsets(cc.rect(17, 17, 14, 16));
        ck.UIUtils.setSizePercent(this._imgBgr, 0.9, 0.9);
        this._imgBgr.setTouchEnabled(true);

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._layoutRoot.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.59);
        this._imgIcon.setScale(0.57, 0.57);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.59);
        this._imgIcon.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(128, 128));
        this._imgIcon.setTouchEnabled(false);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._layoutRoot.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.5, 0.2644);
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.5);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.2644);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.setUnifySizeEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(false);
        this._txtAmount.setContentSize(cc.size(74, 38));
        this._txtAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmount.setDefaultFontSize(30);
        this._txtAmount.setTextHorizontalAlignment(1);
        this._txtAmount.setTextVerticalAlignment(1);
        this._txtAmount.enableOutline(cc.color(73, 24, 10, 255), 2);
        this._txtAmount.autoFitSingleLine();

        ///// # _imgCheck
        this._imgCheck = new ccui.ImageView();
        this._imgCheck.setName("_imgCheck");
        this._layoutRoot.addChild(this._imgCheck);
        this._imgCheck.setCascadeOpacityEnabled(true);
        this._imgCheck.setCascadeColorEnabled(true);
        this._imgCheck.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCheck, 0.7565, 0.7822);
        let _imgCheckLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCheck);
        _imgCheckLayoutComponent.setPositionPercentXEnabled(true);
        _imgCheckLayoutComponent.setPositionPercentX(0.7565);
        _imgCheckLayoutComponent.setPositionPercentYEnabled(true);
        _imgCheckLayoutComponent.setPositionPercentY(0.7822);
        this._imgCheck.loadTexture("icons/color/other/Check_02.png", 1);
        this._imgCheck.setUnifySizeEnabled(false);
        this._imgCheck.ignoreContentAdaptWithSize(false);
        this._imgCheck.setScale9Enabled(true);
        this._imgCheck.setCapInsets(cc.rect(17, 17, 16, 4));
        this._imgCheck.setContentSize(cc.size(50, 38));
        this._imgCheck.setTouchEnabled(false);

    },



});

/**
 * Create WheelXChoice
 * @returns {_ccs.WheelXChoice}
 */
_ccs.WheelXChoice.create = function () {
    return new _ccs.WheelXChoice();
};
