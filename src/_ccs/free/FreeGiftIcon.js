/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.FreeGiftIcon
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.FreeGiftIcon = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtName: null,
    /** @type {ccui.ImageView} */
    _imgRedDot: null,


    /**
     * _ccs.FreeGiftIcon constructor
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

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._root.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.33);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.33);
        this._imgIcon.loadTexture("icons/color/basic/Gift.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(50, 50));
        this._imgIcon.setTouchEnabled(true);

        ///// # _txtName
        this._txtName = new ck.Text();
        this._txtName.setName("_txtName");
        this._root.addChild(this._txtName);
        this._txtName.setCascadeOpacityEnabled(true);
        this._txtName.setCascadeColorEnabled(true);
        this._txtName.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._txtName, 0.5, 0);
        this._txtName.setTextColor(cc.color(108, 89, 97, 255));
        let _txtNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName);
        _txtNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameLayoutComponent.setPositionPercentX(0.5);
        _txtNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameLayoutComponent.setPositionPercentY(0);
        this._txtName.setTouchEnabled(false);
        this._txtName.ignoreContentAdaptWithSize(true);
        this._txtName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName.setDefaultFontSize(30);
        this._txtName.setString(gm.localize.getText("TXT_GIFTS"));
        this._txtName.setTextHorizontalAlignment(1);
        this._txtName.setTextVerticalAlignment(1);

        ///// # _imgRedDot
        this._imgRedDot = new ccui.ImageView();
        this._imgRedDot.setName("_imgRedDot");
        this._root.addChild(this._imgRedDot);
        this._imgRedDot.setCascadeOpacityEnabled(true);
        this._imgRedDot.setCascadeColorEnabled(true);
        this._imgRedDot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRedDot, 0.7303, 0.71);
        let _imgRedDotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRedDot);
        _imgRedDotLayoutComponent.setPositionPercentXEnabled(true);
        _imgRedDotLayoutComponent.setPositionPercentX(0.7303);
        _imgRedDotLayoutComponent.setPositionPercentYEnabled(true);
        _imgRedDotLayoutComponent.setPositionPercentY(0.71);
        this._imgRedDot.loadTexture("basics/other/RedDot.png", 1);
        this._imgRedDot.setUnifySizeEnabled(false);
        this._imgRedDot.ignoreContentAdaptWithSize(false);
        this._imgRedDot.setContentSize(cc.size(25, 25));
        this._imgRedDot.setTouchEnabled(false);

    },



});

/**
 * Create FreeGiftIcon
 * @returns {_ccs.FreeGiftIcon}
 */
_ccs.FreeGiftIcon.create = function () {
    return new _ccs.FreeGiftIcon();
};
