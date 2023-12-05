/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ItemTip
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ItemTip = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _bgr: null,
    /** @type {ck.Text} */
    _txtTimeLeftTitle: null,
    /** @type {ck.Text} */
    _txtTimeLeft: null,
    /** @type {ck.Text} */
    _txtInUse: null,
    /** @type {ck.Text} */
    _txtTip: null,


    /**
     * _ccs.ItemTip constructor
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
        this._root.setAnchorPoint(cc.p(0, 0.5));
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(278.4432, 99.438));

        ///// # _bgr
        this._bgr = new ccui.ImageView();
        this._bgr.setName("_bgr");
        this._root.addChild(this._bgr);
        this._bgr.setCascadeOpacityEnabled(true);
        this._bgr.setCascadeColorEnabled(true);
        this._bgr.setAnchorPoint(cc.p(1, 0.53));
        ck.UIUtils.setPositionPercent(this._bgr, 0, 0.5);
        this._bgr.setFlippedX(true);
        let _bgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._bgr);
        _bgrLayoutComponent.setPositionPercentYEnabled(true);
        _bgrLayoutComponent.setPositionPercentY(0.5);
        this._bgr.loadTexture("basics/other/ChatBubble_04.png", 1);
        this._bgr.setUnifySizeEnabled(false);
        this._bgr.ignoreContentAdaptWithSize(false);
        this._bgr.setScale9Enabled(true);
        this._bgr.setCapInsets(cc.rect(91, 31, 31, 34));
        this._bgr.setContentSize(cc.size(251.5988, 96));
        this._bgr.setTouchEnabled(false);
        this._bgr.setFlippedX(true);

        ///// # _txtTimeLeftTitle
        this._txtTimeLeftTitle = new ck.Text();
        this._txtTimeLeftTitle.setName("_txtTimeLeftTitle");
        this._root.addChild(this._txtTimeLeftTitle);
        this._txtTimeLeftTitle.setCascadeOpacityEnabled(true);
        this._txtTimeLeftTitle.setCascadeColorEnabled(true);
        this._txtTimeLeftTitle.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTimeLeftTitle, 0.14, 0.1532);
        let _txtTimeLeftTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTimeLeftTitle);
        _txtTimeLeftTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLeftTitleLayoutComponent.setPositionPercentX(0.14);
        _txtTimeLeftTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLeftTitleLayoutComponent.setPositionPercentY(0.1532);
        this._txtTimeLeftTitle.setTouchEnabled(false);
        this._txtTimeLeftTitle.ignoreContentAdaptWithSize(true);
        this._txtTimeLeftTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTimeLeftTitle.setDefaultFontSize(22);
        this._txtTimeLeftTitle.setString(gm.localize.getText("TXT_REMAIN_TIME"));
        this._txtTimeLeftTitle.setTextHorizontalAlignment(0);
        this._txtTimeLeftTitle.setTextVerticalAlignment(1);
        this._txtTimeLeftTitle.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _txtTimeLeft
        this._txtTimeLeft = new ck.Text();
        this._txtTimeLeft.setName("_txtTimeLeft");
        this._root.addChild(this._txtTimeLeft);
        this._txtTimeLeft.setCascadeOpacityEnabled(true);
        this._txtTimeLeft.setCascadeColorEnabled(true);
        this._txtTimeLeft.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTimeLeft, 0.826, 0.1495);
        this._txtTimeLeft.setTextColor(cc.color(255, 255, 0, 255));
        let _txtTimeLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTimeLeft);
        _txtTimeLeftLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentX(0.826);
        _txtTimeLeftLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentY(0.1495);
        this._txtTimeLeft.setTouchEnabled(false);
        this._txtTimeLeft.ignoreContentAdaptWithSize(true);
        this._txtTimeLeft.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTimeLeft.setDefaultFontSize(25);
        this._txtTimeLeft.setTextHorizontalAlignment(0);
        this._txtTimeLeft.setTextVerticalAlignment(1);
        this._txtTimeLeft.enableOutline(cc.color(41, 29, 0, 255), 1);

        ///// # _txtInUse
        this._txtInUse = new ck.Text();
        this._txtInUse.setName("_txtInUse");
        this._root.addChild(this._txtInUse);
        this._txtInUse.setCascadeOpacityEnabled(true);
        this._txtInUse.setCascadeColorEnabled(true);
        this._txtInUse.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtInUse, 0.14, 0.7474);
        this._txtInUse.setTextColor(cc.color(255, 255, 0, 255));
        let _txtInUseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtInUse);
        _txtInUseLayoutComponent.setPositionPercentXEnabled(true);
        _txtInUseLayoutComponent.setPositionPercentX(0.14);
        _txtInUseLayoutComponent.setPositionPercentYEnabled(true);
        _txtInUseLayoutComponent.setPositionPercentY(0.7474);
        this._txtInUse.setTouchEnabled(false);
        this._txtInUse.ignoreContentAdaptWithSize(true);
        this._txtInUse.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtInUse.setDefaultFontSize(25);
        this._txtInUse.setString(gm.localize.getText("TXT_IN_USE"));
        this._txtInUse.setTextHorizontalAlignment(0);
        this._txtInUse.setTextVerticalAlignment(1);
        this._txtInUse.enableOutline(cc.color(41, 29, 0, 255), 1);

        ///// # _txtTip
        this._txtTip = new ck.Text();
        this._txtTip.setName("_txtTip");
        this._root.addChild(this._txtTip);
        this._txtTip.setCascadeOpacityEnabled(true);
        this._txtTip.setCascadeColorEnabled(true);
        this._txtTip.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTip, 0.14, 0.4464);
        let _txtTipLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTip);
        _txtTipLayoutComponent.setPositionPercentXEnabled(true);
        _txtTipLayoutComponent.setPositionPercentX(0.14);
        _txtTipLayoutComponent.setPositionPercentYEnabled(true);
        _txtTipLayoutComponent.setPositionPercentY(0.4464);
        this._txtTip.setTouchEnabled(false);
        this._txtTip.ignoreContentAdaptWithSize(true);
        this._txtTip.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTip.setDefaultFontSize(20);
        this._txtTip.setTextHorizontalAlignment(1);
        this._txtTip.setTextVerticalAlignment(1);
        this._txtTip.enableOutline(cc.color(0, 0, 0, 255), 1);

    },



});

/**
 * Create ItemTip
 * @returns {_ccs.ItemTip}
 */
_ccs.ItemTip.create = function () {
    return new _ccs.ItemTip();
};
