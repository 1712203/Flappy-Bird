/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ItemFactorTip
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ItemFactorTip = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _bgr: null,
    /** @type {ck.Text} */
    _txtTitle: null,
    /** @type {ck.Text} */
    _txtDescription: null,


    /**
     * _ccs.ItemFactorTip constructor
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
        this._root.setContentSize(cc.size(278.44, 99.44));

        ///// # _bgr
        this._bgr = new ccui.ImageView();
        this._bgr.setName("_bgr");
        this._root.addChild(this._bgr);
        this._bgr.setCascadeOpacityEnabled(true);
        this._bgr.setCascadeColorEnabled(true);
        this._bgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._bgr, 0.5, 0.5);
        this._bgr.setFlippedX(true);
        let _bgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._bgr);
        _bgrLayoutComponent.setPositionPercentXEnabled(true);
        _bgrLayoutComponent.setPositionPercentX(0.5);
        _bgrLayoutComponent.setPositionPercentYEnabled(true);
        _bgrLayoutComponent.setPositionPercentY(0.5);
        _bgrLayoutComponent.setPercentWidthEnabled(true);
        _bgrLayoutComponent.setPercentWidth(1);
        _bgrLayoutComponent.setPercentHeightEnabled(true);
        _bgrLayoutComponent.setPercentHeight(1);
        this._bgr.loadTexture("basics/other/Box_09.png", 1);
        this._bgr.setUnifySizeEnabled(false);
        this._bgr.ignoreContentAdaptWithSize(false);
        this._bgr.setScale9Enabled(true);
        this._bgr.setCapInsets(cc.rect(17, 17, 18, 19));
        ck.UIUtils.setSizePercent(this._bgr, 1, 1);
        this._bgr.setTouchEnabled(false);
        this._bgr.setFlippedX(true);

        ///// # _txtTitle
        this._txtTitle = new ck.Text();
        this._txtTitle.setName("_txtTitle");
        this._root.addChild(this._txtTitle);
        this._txtTitle.setCascadeOpacityEnabled(true);
        this._txtTitle.setCascadeColorEnabled(true);
        this._txtTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle, 0.5, 0.7159);
        this._txtTitle.setTextColor(cc.color(255, 255, 0, 255));
        let _txtTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle);
        _txtTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentX(0.5);
        _txtTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentY(0.7159);
        this._txtTitle.setTouchEnabled(false);
        this._txtTitle.ignoreContentAdaptWithSize(true);
        this._txtTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTitle.setDefaultFontSize(28);
        this._txtTitle.setString(gm.localize.getText("TXT_ITEM_FACTOR"));
        this._txtTitle.setTextHorizontalAlignment(0);
        this._txtTitle.setTextVerticalAlignment(1);
        this._txtTitle.enableOutline(cc.color(41, 29, 0, 255), 1);

        ///// # _txtDescription
        this._txtDescription = new ck.Text();
        this._txtDescription.setName("_txtDescription");
        this._root.addChild(this._txtDescription);
        this._txtDescription.setCascadeOpacityEnabled(true);
        this._txtDescription.setCascadeColorEnabled(true);
        this._txtDescription.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._txtDescription, 0.5, 0.5601);
        let _txtDescriptionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDescription);
        _txtDescriptionLayoutComponent.setPositionPercentXEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentX(0.5);
        _txtDescriptionLayoutComponent.setPositionPercentYEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentY(0.5601);
        _txtDescriptionLayoutComponent.setPercentWidthEnabled(true);
        _txtDescriptionLayoutComponent.setPercentWidth(0.9604);
        this._txtDescription.setTouchEnabled(false);
        this._txtDescription.setUnifySizeEnabled(false);
        this._txtDescription.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtDescription, 0.9604);
        this._txtDescription.setContentSize(cc.size(this._txtDescription.width, 52.6578));
        this._txtDescription.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDescription.setDefaultFontSize(25);
        this._txtDescription.setString(gm.localize.getText("TXT_ITEM_FACTOR_HINT"));
        this._txtDescription.setTextHorizontalAlignment(1);
        this._txtDescription.setTextVerticalAlignment(1);

    },



});

/**
 * Create ItemFactorTip
 * @returns {_ccs.ItemFactorTip}
 */
_ccs.ItemFactorTip.create = function () {
    return new _ccs.ItemFactorTip();
};
