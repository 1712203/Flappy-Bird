/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.CardCollectionCardSetLayout
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.CardCollectionCardSetLayout = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ck.TableView} */
    _tableViewWidgets: null,


    /**
     * _ccs.CardCollectionCardSetLayout constructor
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
        this._layoutRoot.setContentSize(cc.size(640, 885));

        ///// # _tableViewWidgets
        this._tableViewWidgets = new ck.TableView();
        this._tableViewWidgets.setName("_tableViewWidgets");
        this._layoutRoot.addChild(this._tableViewWidgets);
        this._tableViewWidgets.setCascadeOpacityEnabled(true);
        this._tableViewWidgets.setCascadeColorEnabled(true);
        this._tableViewWidgets.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._tableViewWidgets, 0.5, 0.5);
        let _tableViewWidgetsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._tableViewWidgets);
        _tableViewWidgetsLayoutComponent.setPositionPercentXEnabled(true);
        _tableViewWidgetsLayoutComponent.setPositionPercentX(0.5);
        _tableViewWidgetsLayoutComponent.setPositionPercentYEnabled(true);
        _tableViewWidgetsLayoutComponent.setPositionPercentY(0.5);
        _tableViewWidgetsLayoutComponent.setPercentWidthEnabled(true);
        _tableViewWidgetsLayoutComponent.setPercentWidth(1);
        _tableViewWidgetsLayoutComponent.setPercentHeightEnabled(true);
        _tableViewWidgetsLayoutComponent.setPercentHeight(1);

    },



});

/**
 * Create CardCollectionCardSetLayout
 * @returns {_ccs.CardCollectionCardSetLayout}
 */
_ccs.CardCollectionCardSetLayout.create = function () {
    return new _ccs.CardCollectionCardSetLayout();
};
