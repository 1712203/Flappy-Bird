/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.TrophySelectAlbumPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.TrophySelectAlbumPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {TrophyAlbumCloseWidget} */
    _albumCloseWidget: null,
    /** @type {TrophyAlbumOpenWidget} */
    _albumOpenWidget: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,


    /**
     * _ccs.TrophySelectAlbumPopup constructor
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
        this._root.setPosition(0, -0.0001);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(false);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(580, 789));

        ///// # _albumCloseWidget
        this._albumCloseWidget = new TrophyAlbumCloseWidget();
        this._albumCloseWidget.setName("_albumCloseWidget");
        this._root.addChild(this._albumCloseWidget);
        this._albumCloseWidget.setCascadeOpacityEnabled(true);
        this._albumCloseWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._albumCloseWidget, 0.5, 0.5);
        let _albumCloseWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._albumCloseWidget);
        _albumCloseWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _albumCloseWidgetLayoutComponent.setPositionPercentX(0.5);
        _albumCloseWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _albumCloseWidgetLayoutComponent.setPositionPercentY(0.5);

        ///// # _albumOpenWidget
        this._albumOpenWidget = new TrophyAlbumOpenWidget();
        this._albumOpenWidget.setName("_albumOpenWidget");
        this._root.addChild(this._albumOpenWidget);
        this._albumOpenWidget.setCascadeOpacityEnabled(true);
        this._albumOpenWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._albumOpenWidget, 0.45, 0.54);
        this._albumOpenWidget.setVisible(false);
        let _albumOpenWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._albumOpenWidget);
        _albumOpenWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _albumOpenWidgetLayoutComponent.setPositionPercentX(0.45);
        _albumOpenWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _albumOpenWidgetLayoutComponent.setPositionPercentY(0.54);

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._root.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.97, 0.9);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.97);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.9);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(81, 83));
        this._imgClose.setTouchEnabled(false);

    },



});

/**
 * Create TrophySelectAlbumPopup
 * @returns {_ccs.TrophySelectAlbumPopup}
 */
_ccs.TrophySelectAlbumPopup.create = function () {
    return new _ccs.TrophySelectAlbumPopup();
};
