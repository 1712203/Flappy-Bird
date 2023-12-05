/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.UnlockedFeatureIcon
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.UnlockedFeatureIcon = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {Glow} */
    _glow: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtName: null,


    /**
     * _ccs.UnlockedFeatureIcon constructor
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
        this._root.setContentSize(cc.size(100, 100));

        ///// # _glow
        this._glow = new Glow();
        this._glow.setName("_glow");
        this._root.addChild(this._glow);
        this._glow.setCascadeOpacityEnabled(true);
        this._glow.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._glow, 0.5, 0.41);
        this._glow.setScale(0.15, 0.15);
        let _glowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._glow);
        _glowLayoutComponent.setPositionPercentXEnabled(true);
        _glowLayoutComponent.setPositionPercentX(0.5);
        _glowLayoutComponent.setPositionPercentYEnabled(true);
        _glowLayoutComponent.setPositionPercentY(0.41);

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
        this._imgIcon.loadTexture("icons/color/tokens/Clover.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(100, 100));
        this._imgIcon.setTouchEnabled(false);

        ///// # _txtName
        this._txtName = new ck.Text();
        this._txtName.setName("_txtName");
        this._root.addChild(this._txtName);
        this._txtName.setCascadeOpacityEnabled(true);
        this._txtName.setCascadeColorEnabled(true);
        this._txtName.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName, 0.5, -0.05);
        let _txtNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName);
        _txtNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameLayoutComponent.setPositionPercentX(0.5);
        _txtNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameLayoutComponent.setPositionPercentY(-0.05);
        this._txtName.setTouchEnabled(false);
        this._txtName.ignoreContentAdaptWithSize(true);
        this._txtName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName.setDefaultFontSize(25);
        this._txtName.setTextHorizontalAlignment(1);
        this._txtName.setTextVerticalAlignment(1);
        this._txtName.enableOutline(cc.color(0, 0, 0, 255), 1);

    },



});

/**
 * Create UnlockedFeatureIcon
 * @returns {_ccs.UnlockedFeatureIcon}
 */
_ccs.UnlockedFeatureIcon.create = function () {
    return new _ccs.UnlockedFeatureIcon();
};
