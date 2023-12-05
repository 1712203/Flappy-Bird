/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.CardCollectionTabLayoutTabSelectorItem
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.CardCollectionTabLayoutTabSelectorItem = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBgrNormal: null,
    /** @type {ccui.ImageView} */
    _imgBgrSelected: null,
    /** @type {ck.Text} */
    _txtName: null,
    /** @type {ccui.ImageView} */
    _imgRedDot: null,


    /**
     * _ccs.CardCollectionTabLayoutTabSelectorItem constructor
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
        this._layoutRoot.setContentSize(cc.size(164, 37));

        ///// # _imgBgrNormal
        this._imgBgrNormal = new ccui.ImageView();
        this._imgBgrNormal.setName("_imgBgrNormal");
        this._layoutRoot.addChild(this._imgBgrNormal);
        this._imgBgrNormal.setCascadeOpacityEnabled(true);
        this._imgBgrNormal.setCascadeColorEnabled(true);
        this._imgBgrNormal.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgBgrNormal, 0.5, 0);
        let _imgBgrNormalLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrNormal);
        _imgBgrNormalLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrNormalLayoutComponent.setPositionPercentX(0.5);
        _imgBgrNormalLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrNormalLayoutComponent.setPositionPercentY(0);
        this._imgBgrNormal.loadTexture("basics2/tabs/TabBackground01.png", 1);
        this._imgBgrNormal.setUnifySizeEnabled(false);
        this._imgBgrNormal.ignoreContentAdaptWithSize(false);
        this._imgBgrNormal.setScale9Enabled(true);
        this._imgBgrNormal.setCapInsets(cc.rect(15, 11, 304, 20));
        this._imgBgrNormal.setContentSize(cc.size(164, 37));
        this._imgBgrNormal.setTouchEnabled(false);

        ///// # _imgBgrSelected
        this._imgBgrSelected = new ccui.ImageView();
        this._imgBgrSelected.setName("_imgBgrSelected");
        this._layoutRoot.addChild(this._imgBgrSelected);
        this._imgBgrSelected.setCascadeOpacityEnabled(true);
        this._imgBgrSelected.setCascadeColorEnabled(true);
        this._imgBgrSelected.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgBgrSelected, 0.5, 0);
        let _imgBgrSelectedLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrSelected);
        _imgBgrSelectedLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrSelectedLayoutComponent.setPositionPercentX(0.5);
        _imgBgrSelectedLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrSelectedLayoutComponent.setPositionPercentY(0);
        this._imgBgrSelected.loadTexture("basics2/tabs/Tab01.png", 1);
        this._imgBgrSelected.setUnifySizeEnabled(false);
        this._imgBgrSelected.ignoreContentAdaptWithSize(false);
        this._imgBgrSelected.setScale9Enabled(true);
        this._imgBgrSelected.setCapInsets(cc.rect(15, 11, 134, 15));
        this._imgBgrSelected.setContentSize(cc.size(164, 37));
        this._imgBgrSelected.setTouchEnabled(false);

        ///// # _txtName
        this._txtName = new ck.Text();
        this._txtName.setName("_txtName");
        this._layoutRoot.addChild(this._txtName);
        this._txtName.setCascadeOpacityEnabled(true);
        this._txtName.setCascadeColorEnabled(true);
        this._txtName.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName, 0.5, 0.5);
        this._txtName.setTextColor(cc.color(148, 66, 44, 255));
        let _txtNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName);
        _txtNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameLayoutComponent.setPositionPercentX(0.5);
        _txtNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameLayoutComponent.setPositionPercentY(0.5);
        this._txtName.setTouchEnabled(false);
        this._txtName.ignoreContentAdaptWithSize(true);
        this._txtName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName.setDefaultFontSize(30);
        this._txtName.setTextHorizontalAlignment(1);
        this._txtName.setTextVerticalAlignment(1);

        ///// # _imgRedDot
        this._imgRedDot = new ccui.ImageView();
        this._imgRedDot.setName("_imgRedDot");
        this._layoutRoot.addChild(this._imgRedDot);
        this._imgRedDot.setCascadeOpacityEnabled(true);
        this._imgRedDot.setCascadeColorEnabled(true);
        this._imgRedDot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRedDot, 0.985, 0.975);
        this._imgRedDot.setScale(0.7, 0.7);
        let _imgRedDotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRedDot);
        _imgRedDotLayoutComponent.setPositionPercentXEnabled(true);
        _imgRedDotLayoutComponent.setPositionPercentX(0.985);
        _imgRedDotLayoutComponent.setPositionPercentYEnabled(true);
        _imgRedDotLayoutComponent.setPositionPercentY(0.975);
        this._imgRedDot.loadTexture("basics/other/RedDot.png", 1);
        this._imgRedDot.setUnifySizeEnabled(false);
        this._imgRedDot.ignoreContentAdaptWithSize(false);
        this._imgRedDot.setContentSize(cc.size(31, 31));
        this._imgRedDot.setTouchEnabled(false);

    },



});

/**
 * Create CardCollectionTabLayoutTabSelectorItem
 * @returns {_ccs.CardCollectionTabLayoutTabSelectorItem}
 */
_ccs.CardCollectionTabLayoutTabSelectorItem.create = function () {
    return new _ccs.CardCollectionTabLayoutTabSelectorItem();
};
