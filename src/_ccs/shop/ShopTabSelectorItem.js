/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ShopTabSelectorItem
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ShopTabSelectorItem = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBgrNormal: null,
    /** @type {ccui.ImageView} */
    _imgBgrSelected: null,
    /** @type {ccui.ImageView} */
    _imgHighlight: null,
    /** @type {ck.Text} */
    _txtName: null,


    /**
     * _ccs.ShopTabSelectorItem constructor
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
        this._layoutRoot.setPosition(0.0001, 0);
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        this._layoutRoot.setTouchEnabled(true);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(132.45, 75));

        ///// # _imgBgrNormal
        this._imgBgrNormal = new ccui.ImageView();
        this._imgBgrNormal.setName("_imgBgrNormal");
        this._layoutRoot.addChild(this._imgBgrNormal);
        this._imgBgrNormal.setCascadeOpacityEnabled(true);
        this._imgBgrNormal.setCascadeColorEnabled(true);
        this._imgBgrNormal.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgrNormal, 0.5, 0.5);
        let _imgBgrNormalLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrNormal);
        _imgBgrNormalLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrNormalLayoutComponent.setPositionPercentX(0.5);
        _imgBgrNormalLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrNormalLayoutComponent.setPositionPercentY(0.5);
        _imgBgrNormalLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrNormalLayoutComponent.setPercentWidth(1);
        _imgBgrNormalLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrNormalLayoutComponent.setPercentHeight(1);
        this._imgBgrNormal.loadTexture("basics/other/BlueBox.png", 1);
        this._imgBgrNormal.setUnifySizeEnabled(false);
        this._imgBgrNormal.ignoreContentAdaptWithSize(false);
        this._imgBgrNormal.setScale9Enabled(true);
        this._imgBgrNormal.setCapInsets(cc.rect(15, 11, 1, 2));
        ck.UIUtils.setSizePercent(this._imgBgrNormal, 1, 1);
        this._imgBgrNormal.setTouchEnabled(false);

        ///// # _imgBgrSelected
        this._imgBgrSelected = new ccui.ImageView();
        this._imgBgrSelected.setName("_imgBgrSelected");
        this._layoutRoot.addChild(this._imgBgrSelected);
        this._imgBgrSelected.setCascadeOpacityEnabled(true);
        this._imgBgrSelected.setCascadeColorEnabled(true);
        this._imgBgrSelected.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgrSelected, 0.5, 0.5);
        let _imgBgrSelectedLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrSelected);
        _imgBgrSelectedLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrSelectedLayoutComponent.setPositionPercentX(0.5);
        _imgBgrSelectedLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrSelectedLayoutComponent.setPositionPercentY(0.5);
        _imgBgrSelectedLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrSelectedLayoutComponent.setPercentWidth(1);
        _imgBgrSelectedLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrSelectedLayoutComponent.setPercentHeight(1);
        this._imgBgrSelected.loadTexture("basics/other/BlueBox.png", 1);
        this._imgBgrSelected.setUnifySizeEnabled(false);
        this._imgBgrSelected.ignoreContentAdaptWithSize(false);
        this._imgBgrSelected.setScale9Enabled(true);
        this._imgBgrSelected.setCapInsets(cc.rect(15, 11, 1, 2));
        ck.UIUtils.setSizePercent(this._imgBgrSelected, 1, 1);
        this._imgBgrSelected.setTouchEnabled(false);

        ///// # _imgHighlight
        this._imgHighlight = new ccui.ImageView();
        this._imgHighlight.setName("_imgHighlight");
        this._imgBgrSelected.addChild(this._imgHighlight);
        this._imgHighlight.setCascadeOpacityEnabled(true);
        this._imgHighlight.setCascadeColorEnabled(true);
        this._imgHighlight.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHighlight, 0.5, 0.5324);
        let _imgHighlightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHighlight);
        _imgHighlightLayoutComponent.setPositionPercentXEnabled(true);
        _imgHighlightLayoutComponent.setPositionPercentX(0.5);
        _imgHighlightLayoutComponent.setPositionPercentYEnabled(true);
        _imgHighlightLayoutComponent.setPositionPercentY(0.5324);
        _imgHighlightLayoutComponent.setPercentWidthEnabled(true);
        _imgHighlightLayoutComponent.setPercentWidth(0.9341);
        _imgHighlightLayoutComponent.setPercentHeightEnabled(true);
        _imgHighlightLayoutComponent.setPercentHeight(0.8648);
        this._imgHighlight.loadTexture("basics/other/Green.png", 1);
        this._imgHighlight.setUnifySizeEnabled(false);
        this._imgHighlight.ignoreContentAdaptWithSize(false);
        this._imgHighlight.setScale9Enabled(true);
        this._imgHighlight.setCapInsets(cc.rect(30, 16, 70, 18));
        ck.UIUtils.setSizePercent(this._imgHighlight, 0.9341, 0.8648);
        this._imgHighlight.setTouchEnabled(false);

        ///// # _txtName
        this._txtName = new ck.Text();
        this._txtName.setName("_txtName");
        this._layoutRoot.addChild(this._txtName);
        this._txtName.setCascadeOpacityEnabled(true);
        this._txtName.setCascadeColorEnabled(true);
        this._txtName.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName, 0.5, 0.5367);
        let _txtNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName);
        _txtNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameLayoutComponent.setPositionPercentX(0.5);
        _txtNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameLayoutComponent.setPositionPercentY(0.5367);
        this._txtName.setTouchEnabled(false);
        this._txtName.setUnifySizeEnabled(false);
        this._txtName.ignoreContentAdaptWithSize(false);
        this._txtName.setContentSize(cc.size(111.5834, 57.6314));
        this._txtName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName.setDefaultFontSize(35);
        this._txtName.setTextHorizontalAlignment(1);
        this._txtName.setTextVerticalAlignment(1);
        this._txtName.enableOutline(cc.color(31, 100, 124, 255), 2);
        this._txtName.autoFitSingleLine();

    },



});

/**
 * Create ShopTabSelectorItem
 * @returns {_ccs.ShopTabSelectorItem}
 */
_ccs.ShopTabSelectorItem.create = function () {
    return new _ccs.ShopTabSelectorItem();
};
