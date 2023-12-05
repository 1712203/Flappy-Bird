/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.SendTrophyTabLayout
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.SendTrophyTabLayout = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ck.TableView} */
    _tableViewWidgets: null,
    /** @type {ck.Text} */
    _txtEmpty: null,


    /**
     * _ccs.SendTrophyTabLayout constructor
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
        this._layoutRoot.setContentSize(cc.size(450, 468));

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

        ///// # _txtEmpty
        this._txtEmpty = new ck.Text();
        this._txtEmpty.setName("_txtEmpty");
        this._layoutRoot.addChild(this._txtEmpty);
        this._txtEmpty.setCascadeOpacityEnabled(true);
        this._txtEmpty.setCascadeColorEnabled(true);
        this._txtEmpty.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtEmpty, 0.5, 0.5);
        let _txtEmptyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtEmpty);
        _txtEmptyLayoutComponent.setPositionPercentXEnabled(true);
        _txtEmptyLayoutComponent.setPositionPercentX(0.5);
        _txtEmptyLayoutComponent.setPositionPercentYEnabled(true);
        _txtEmptyLayoutComponent.setPositionPercentY(0.5);
        _txtEmptyLayoutComponent.setPercentHeightEnabled(true);
        _txtEmptyLayoutComponent.setPercentHeight(0.0855);
        this._txtEmpty.setTouchEnabled(false);
        this._txtEmpty.setUnifySizeEnabled(false);
        this._txtEmpty.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this._txtEmpty, 0.0855);
        this._txtEmpty.setContentSize(cc.size(430, this._txtEmpty.height));
        this._txtEmpty.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtEmpty.setDefaultFontSize(36);
        this._txtEmpty.setString(gm.localize.getText("TXT_TROPHY_HAVE_NOT_GOT_ANY"));
        this._txtEmpty.setTextHorizontalAlignment(1);
        this._txtEmpty.setTextVerticalAlignment(1);
        this._txtEmpty.autoFitSingleLine();

    },



});

/**
 * Create SendTrophyTabLayout
 * @returns {_ccs.SendTrophyTabLayout}
 */
_ccs.SendTrophyTabLayout.create = function () {
    return new _ccs.SendTrophyTabLayout();
};
