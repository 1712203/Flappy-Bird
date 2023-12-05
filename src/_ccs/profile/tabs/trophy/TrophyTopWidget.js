/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.TrophyTopWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.TrophyTopWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ck.Text} */
    _txtDescription: null,


    /**
     * _ccs.TrophyTopWidget constructor
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
        _layoutRootLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRootLayoutComponent.setPositionPercentX(0);
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(543, 47));

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._layoutRoot.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.5);
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(0.5);
        this._imgBackground.loadTexture("basics2/bars/Bar_07.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setContentSize(cc.size(543, 47));
        this._imgBackground.setTouchEnabled(false);

        ///// # _txtDescription
        this._txtDescription = new ck.Text();
        this._txtDescription.setName("_txtDescription");
        this._layoutRoot.addChild(this._txtDescription);
        this._txtDescription.setCascadeOpacityEnabled(true);
        this._txtDescription.setCascadeColorEnabled(true);
        this._txtDescription.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDescription, 0.02, 0.5);
        this._txtDescription.setTextColor(cc.color(21, 105, 4, 255));
        let _txtDescriptionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDescription);
        _txtDescriptionLayoutComponent.setPositionPercentXEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentX(0.02);
        _txtDescriptionLayoutComponent.setPositionPercentYEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentY(0.5);
        this._txtDescription.setTouchEnabled(false);
        this._txtDescription.setUnifySizeEnabled(false);
        this._txtDescription.ignoreContentAdaptWithSize(false);
        this._txtDescription.setContentSize(cc.size(500, 44));
        this._txtDescription.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDescription.setDefaultFontSize(36);
        this._txtDescription.setTextHorizontalAlignment(0);
        this._txtDescription.setTextVerticalAlignment(1);
        this._txtDescription.enableOutline(cc.color.WHITE, 2);
        this._txtDescription.autoFitSingleLine();

    },



});

/**
 * Create TrophyTopWidget
 * @returns {_ccs.TrophyTopWidget}
 */
_ccs.TrophyTopWidget.create = function () {
    return new _ccs.TrophyTopWidget();
};
