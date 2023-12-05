/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.FriendInteractModalWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.FriendInteractModalWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.Layout} */
    _layoutBackground: null,
    /** @type {ccui.ImageView} */
    _imgBackground01: null,
    /** @type {ccui.ImageView} */
    _imgBackground02: null,
    /** @type {ccui.Layout} */
    _layoutInteractItem: null,


    /**
     * _ccs.FriendInteractModalWidget constructor
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

        ///// # _layoutPopup
        this._layoutPopup = new ccui.Layout();
        this._layoutPopup.setName("_layoutPopup");
        this.addChild(this._layoutPopup);
        this._layoutPopup.setCascadeOpacityEnabled(true);
        this._layoutPopup.setCascadeColorEnabled(true);
        this._layoutPopup.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        this._layoutPopup.setTouchEnabled(true);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(320, 160));

        ///// # _layoutBackground
        this._layoutBackground = new ccui.Layout();
        this._layoutBackground.setName("_layoutBackground");
        this._layoutPopup.addChild(this._layoutBackground);
        this._layoutBackground.setCascadeOpacityEnabled(true);
        this._layoutBackground.setCascadeColorEnabled(true);
        this._layoutBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBackground, 0.5, 0.5);
        let _layoutBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBackground);
        _layoutBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _layoutBackgroundLayoutComponent.setPositionPercentX(0.5);
        _layoutBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _layoutBackgroundLayoutComponent.setPositionPercentY(0.5);
        _layoutBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentWidth(1);
        _layoutBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentHeight(1);
        this._layoutBackground.setTouchEnabled(true);
        this._layoutBackground.setUnifySizeEnabled(false);
        this._layoutBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBackground, 1, 1);

        ///// # _imgBackground01
        this._imgBackground01 = new ccui.ImageView();
        this._imgBackground01.setName("_imgBackground01");
        this._layoutBackground.addChild(this._imgBackground01);
        this._imgBackground01.setCascadeOpacityEnabled(true);
        this._imgBackground01.setCascadeColorEnabled(true);
        this._imgBackground01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground01, 0.5, 0.5);
        this._imgBackground01.setOpacity(102);
        this._imgBackground01.setColor(cc.color(0, 0, 0, 255));
        let _imgBackground01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground01);
        _imgBackground01LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackground01LayoutComponent.setPositionPercentX(0.5);
        _imgBackground01LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackground01LayoutComponent.setPositionPercentY(0.5);
        _imgBackground01LayoutComponent.setPercentWidthEnabled(true);
        _imgBackground01LayoutComponent.setPercentWidth(1);
        _imgBackground01LayoutComponent.setPercentHeightEnabled(true);
        _imgBackground01LayoutComponent.setPercentHeight(1);
        this._imgBackground01.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgBackground01.setUnifySizeEnabled(false);
        this._imgBackground01.ignoreContentAdaptWithSize(false);
        this._imgBackground01.setScale9Enabled(true);
        this._imgBackground01.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgBackground01, 1, 1);
        this._imgBackground01.setTouchEnabled(false);

        ///// # _imgBackground02
        this._imgBackground02 = new ccui.ImageView();
        this._imgBackground02.setName("_imgBackground02");
        this._layoutBackground.addChild(this._imgBackground02);
        this._imgBackground02.setCascadeOpacityEnabled(true);
        this._imgBackground02.setCascadeColorEnabled(true);
        this._imgBackground02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground02, 0.5, 0.5);
        this._imgBackground02.setColor(cc.color(111, 58, 48, 255));
        let _imgBackground02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground02);
        _imgBackground02LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackground02LayoutComponent.setPositionPercentX(0.5);
        _imgBackground02LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackground02LayoutComponent.setPositionPercentY(0.5);
        this._imgBackground02.loadTexture("basics/shapes/StrokeRoundedRectangle_64px_5px.png", 1);
        this._imgBackground02.setUnifySizeEnabled(false);
        this._imgBackground02.ignoreContentAdaptWithSize(false);
        this._imgBackground02.setScale9Enabled(true);
        this._imgBackground02.setCapInsets(cc.rect(21, 21, 24, 24));
        this._imgBackground02.setContentSize(cc.size(322, 162));
        this._imgBackground02.setTouchEnabled(false);

        ///// # _layoutInteractItem
        this._layoutInteractItem = new ccui.Layout();
        this._layoutInteractItem.setName("_layoutInteractItem");
        this._layoutPopup.addChild(this._layoutInteractItem);
        this._layoutInteractItem.setCascadeOpacityEnabled(true);
        this._layoutInteractItem.setCascadeColorEnabled(true);
        this._layoutInteractItem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutInteractItem, 0.5, 0.5);
        let _layoutInteractItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInteractItem);
        _layoutInteractItemLayoutComponent.setPositionPercentXEnabled(true);
        _layoutInteractItemLayoutComponent.setPositionPercentX(0.5);
        _layoutInteractItemLayoutComponent.setPositionPercentYEnabled(true);
        _layoutInteractItemLayoutComponent.setPositionPercentY(0.5);
        _layoutInteractItemLayoutComponent.setPercentWidthEnabled(true);
        _layoutInteractItemLayoutComponent.setPercentWidth(0.95);
        _layoutInteractItemLayoutComponent.setPercentHeightEnabled(true);
        _layoutInteractItemLayoutComponent.setPercentHeight(0.9);
        this._layoutInteractItem.setTouchEnabled(true);
        this._layoutInteractItem.setUnifySizeEnabled(false);
        this._layoutInteractItem.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutInteractItem, 0.95, 0.9);

    },



});

/**
 * Create FriendInteractModalWidget
 * @returns {_ccs.FriendInteractModalWidget}
 */
_ccs.FriendInteractModalWidget.create = function () {
    return new _ccs.FriendInteractModalWidget();
};
