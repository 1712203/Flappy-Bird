/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ItemIcon
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ItemIcon = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ccui.ImageView} */
    _imgAmountDuration: null,
    /** @type {ck.Text} */
    _txtAmount: null,
    /** @type {ck.Text} */
    _txtDuration: null,


    /**
     * _ccs.ItemIcon constructor
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
        this._root.setTouchEnabled(false);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(64, 64));

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._root.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.5);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.5);
        this._imgIcon.loadTexture("icons/color/items/Swapper.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(64, 64));
        this._imgIcon.setTouchEnabled(false);

        ///// # _imgAmountDuration
        this._imgAmountDuration = new ccui.ImageView();
        this._imgAmountDuration.setName("_imgAmountDuration");
        this._root.addChild(this._imgAmountDuration);
        this._imgAmountDuration.setCascadeOpacityEnabled(true);
        this._imgAmountDuration.setCascadeColorEnabled(true);
        this._imgAmountDuration.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgAmountDuration, 0.7738, 0.1639);
        let _imgAmountDurationLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgAmountDuration);
        _imgAmountDurationLayoutComponent.setPositionPercentXEnabled(true);
        _imgAmountDurationLayoutComponent.setPositionPercentX(0.7738);
        _imgAmountDurationLayoutComponent.setPositionPercentYEnabled(true);
        _imgAmountDurationLayoutComponent.setPositionPercentY(0.1639);
        this._imgAmountDuration.loadTexture("basics/other/NumberBox.png", 1);
        this._imgAmountDuration.setUnifySizeEnabled(false);
        this._imgAmountDuration.ignoreContentAdaptWithSize(false);
        this._imgAmountDuration.setContentSize(cc.size(30, 30));
        this._imgAmountDuration.setTouchEnabled(false);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._imgAmountDuration.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.5, 0.5);
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.5);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.5);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(true);
        this._txtAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmount.setDefaultFontSize(16);
        this._txtAmount.setTextHorizontalAlignment(1);
        this._txtAmount.setTextVerticalAlignment(1);
        this._txtAmount.enableOutline(cc.color(0, 74, 0, 255), 2);

        ///// # _txtDuration
        this._txtDuration = new ck.Text();
        this._txtDuration.setName("_txtDuration");
        this._imgAmountDuration.addChild(this._txtDuration);
        this._txtDuration.setCascadeOpacityEnabled(true);
        this._txtDuration.setCascadeColorEnabled(true);
        this._txtDuration.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDuration, 0.5, 0.5);
        let _txtDurationLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDuration);
        _txtDurationLayoutComponent.setPositionPercentXEnabled(true);
        _txtDurationLayoutComponent.setPositionPercentX(0.5);
        _txtDurationLayoutComponent.setPositionPercentYEnabled(true);
        _txtDurationLayoutComponent.setPositionPercentY(0.5);
        this._txtDuration.setTouchEnabled(false);
        this._txtDuration.ignoreContentAdaptWithSize(true);
        this._txtDuration.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtDuration.setDefaultFontSize(17);
        this._txtDuration.setTextHorizontalAlignment(1);
        this._txtDuration.setTextVerticalAlignment(1);
        this._txtDuration.enableOutline(cc.color(0, 74, 0, 255), 2);

    },



});

/**
 * Create ItemIcon
 * @returns {_ccs.ItemIcon}
 */
_ccs.ItemIcon.create = function () {
    return new _ccs.ItemIcon();
};
