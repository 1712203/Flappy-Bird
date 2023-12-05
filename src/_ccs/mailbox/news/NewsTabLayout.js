/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.NewsTabLayout
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.NewsTabLayout = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ListView} */
    _listViewItems: null,
    /** @type {ck.Text} */
    _txtEmpty: null,


    /**
     * _ccs.NewsTabLayout constructor
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
        this._layoutRoot.setContentSize(cc.size(470, 610));

        ///// # _listViewItems
        this._listViewItems = new ccui.ListView();
        this._listViewItems.setName("_listViewItems");
        this._layoutRoot.addChild(this._listViewItems);
        this._listViewItems.setCascadeOpacityEnabled(true);
        this._listViewItems.setCascadeColorEnabled(true);
        this._listViewItems.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._listViewItems, 0.5, 1);
        let _listViewItemsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._listViewItems);
        _listViewItemsLayoutComponent.setPositionPercentXEnabled(true);
        _listViewItemsLayoutComponent.setPositionPercentX(0.5);
        _listViewItemsLayoutComponent.setPositionPercentYEnabled(true);
        _listViewItemsLayoutComponent.setPositionPercentY(1);
        _listViewItemsLayoutComponent.setPercentWidthEnabled(true);
        _listViewItemsLayoutComponent.setPercentWidth(1);
        _listViewItemsLayoutComponent.setPercentHeightEnabled(true);
        _listViewItemsLayoutComponent.setPercentHeight(1);
        this._listViewItems.setTouchEnabled(true);
        this._listViewItems.setUnifySizeEnabled(false);
        this._listViewItems.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._listViewItems, 1, 1);
        this._listViewItems.setDirection(ccui.ScrollView.DIR_VERTICAL);
        this._listViewItems.setItemsMargin(5);
        this._listViewItems.setBounceEnabled(true);

        ///// # _txtEmpty
        this._txtEmpty = new ck.Text();
        this._txtEmpty.setName("_txtEmpty");
        this._layoutRoot.addChild(this._txtEmpty);
        this._txtEmpty.setCascadeOpacityEnabled(true);
        this._txtEmpty.setCascadeColorEnabled(true);
        this._txtEmpty.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtEmpty, 0.5, 0.5);
        this._txtEmpty.setTextColor(cc.color(98, 80, 66, 255));
        let _txtEmptyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtEmpty);
        _txtEmptyLayoutComponent.setPositionPercentXEnabled(true);
        _txtEmptyLayoutComponent.setPositionPercentX(0.5);
        _txtEmptyLayoutComponent.setPositionPercentYEnabled(true);
        _txtEmptyLayoutComponent.setPositionPercentY(0.5);
        _txtEmptyLayoutComponent.setPercentWidthEnabled(true);
        _txtEmptyLayoutComponent.setPercentWidth(0.8766);
        _txtEmptyLayoutComponent.setPercentHeightEnabled(true);
        _txtEmptyLayoutComponent.setPercentHeight(0.6167);
        this._txtEmpty.setTouchEnabled(false);
        this._txtEmpty.setUnifySizeEnabled(false);
        this._txtEmpty.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtEmpty, 0.8766, 0.6167);
        this._txtEmpty.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtEmpty.setDefaultFontSize(45);
        this._txtEmpty.setTextHorizontalAlignment(1);
        this._txtEmpty.setTextVerticalAlignment(1);

    },



});

/**
 * Create NewsTabLayout
 * @returns {_ccs.NewsTabLayout}
 */
_ccs.NewsTabLayout.create = function () {
    return new _ccs.NewsTabLayout();
};
