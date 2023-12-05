/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.JackpotSpinButton
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.JackpotSpinButton = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgNormal: null,
    /** @type {ck.Text} */
    _txtSpin: null,
    /** @type {ck.Text} */
    _txtAutoSpin: null,
    /** @type {ccui.ImageView} */
    _imgPressed: null,
    /** @type {ck.Text} */
    _txtPressed: null,
    /** @type {ck.Text} */
    _txtStop: null,


    /**
     * _ccs.JackpotSpinButton constructor
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
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(295, 145));

        ///// # _imgNormal
        this._imgNormal = new ccui.ImageView();
        this._imgNormal.setName("_imgNormal");
        this._root.addChild(this._imgNormal);
        this._imgNormal.setCascadeOpacityEnabled(true);
        this._imgNormal.setCascadeColorEnabled(true);
        this._imgNormal.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgNormal, 0.5, 0);
        let _imgNormalLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNormal);
        _imgNormalLayoutComponent.setPositionPercentXEnabled(true);
        _imgNormalLayoutComponent.setPositionPercentX(0.5);
        _imgNormalLayoutComponent.setPositionPercentYEnabled(true);
        _imgNormalLayoutComponent.setPositionPercentY(0);
        this._imgNormal.loadTexture("buttons/rectangles/RedHold_00.png", 1);
        this._imgNormal.setUnifySizeEnabled(false);
        this._imgNormal.ignoreContentAdaptWithSize(false);
        this._imgNormal.setContentSize(cc.size(295, 145));
        this._imgNormal.setTouchEnabled(false);

        ///// # _txtSpin
        this._txtSpin = new ck.Text();
        this._txtSpin.setName("_txtSpin");
        this._imgNormal.addChild(this._txtSpin);
        this._txtSpin.setCascadeOpacityEnabled(true);
        this._txtSpin.setCascadeColorEnabled(true);
        this._txtSpin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtSpin, 0.5, 0.75);
        let _txtSpinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSpin);
        _txtSpinLayoutComponent.setPositionPercentXEnabled(true);
        _txtSpinLayoutComponent.setPositionPercentX(0.5);
        _txtSpinLayoutComponent.setPositionPercentYEnabled(true);
        _txtSpinLayoutComponent.setPositionPercentY(0.75);
        this._txtSpin.setTouchEnabled(false);
        this._txtSpin.ignoreContentAdaptWithSize(true);
        this._txtSpin.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSpin.setDefaultFontSize(60);
        this._txtSpin.setString(gm.localize.getText("TXT_SPIN"));
        this._txtSpin.setTextHorizontalAlignment(1);
        this._txtSpin.setTextVerticalAlignment(1);

        ///// # _txtAutoSpin
        this._txtAutoSpin = new ck.Text();
        this._txtAutoSpin.setName("_txtAutoSpin");
        this._imgNormal.addChild(this._txtAutoSpin);
        this._txtAutoSpin.setCascadeOpacityEnabled(true);
        this._txtAutoSpin.setCascadeColorEnabled(true);
        this._txtAutoSpin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAutoSpin, 0.5, 0.35);
        this._txtAutoSpin.setTextColor(cc.color(254, 141, 124, 255));
        let _txtAutoSpinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAutoSpin);
        _txtAutoSpinLayoutComponent.setPositionPercentXEnabled(true);
        _txtAutoSpinLayoutComponent.setPositionPercentX(0.5);
        _txtAutoSpinLayoutComponent.setPositionPercentYEnabled(true);
        _txtAutoSpinLayoutComponent.setPositionPercentY(0.35);
        this._txtAutoSpin.setTouchEnabled(false);
        this._txtAutoSpin.ignoreContentAdaptWithSize(true);
        this._txtAutoSpin.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAutoSpin.setDefaultFontSize(30);
        this._txtAutoSpin.setString(gm.localize.getText("TXT_HOLD_TO_AUTO_SPIN"));
        this._txtAutoSpin.setTextHorizontalAlignment(1);
        this._txtAutoSpin.setTextVerticalAlignment(1);

        ///// # _imgPressed
        this._imgPressed = new ccui.ImageView();
        this._imgPressed.setName("_imgPressed");
        this._root.addChild(this._imgPressed);
        this._imgPressed.setCascadeOpacityEnabled(true);
        this._imgPressed.setCascadeColorEnabled(true);
        this._imgPressed.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgPressed, 0.5, 0);
        let _imgPressedLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPressed);
        _imgPressedLayoutComponent.setPositionPercentXEnabled(true);
        _imgPressedLayoutComponent.setPositionPercentX(0.5);
        _imgPressedLayoutComponent.setPositionPercentYEnabled(true);
        _imgPressedLayoutComponent.setPositionPercentY(0);
        this._imgPressed.loadTexture("buttons/rectangles/RedHold_01.png", 1);
        this._imgPressed.setUnifySizeEnabled(false);
        this._imgPressed.ignoreContentAdaptWithSize(false);
        this._imgPressed.setContentSize(cc.size(287, 111));
        this._imgPressed.setTouchEnabled(false);

        ///// # _txtPressed
        this._txtPressed = new ck.Text();
        this._txtPressed.setName("_txtPressed");
        this._imgPressed.addChild(this._txtPressed);
        this._txtPressed.setCascadeOpacityEnabled(true);
        this._txtPressed.setCascadeColorEnabled(true);
        this._txtPressed.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPressed, 0.5, 0.694);
        let _txtPressedLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPressed);
        _txtPressedLayoutComponent.setPositionPercentXEnabled(true);
        _txtPressedLayoutComponent.setPositionPercentX(0.5);
        _txtPressedLayoutComponent.setPositionPercentYEnabled(true);
        _txtPressedLayoutComponent.setPositionPercentY(0.694);
        this._txtPressed.setTouchEnabled(false);
        this._txtPressed.ignoreContentAdaptWithSize(true);
        this._txtPressed.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtPressed.setDefaultFontSize(55);
        this._txtPressed.setString(gm.localize.getText("TXT_SPIN"));
        this._txtPressed.setTextHorizontalAlignment(1);
        this._txtPressed.setTextVerticalAlignment(1);

        ///// # _txtStop
        this._txtStop = new ck.Text();
        this._txtStop.setName("_txtStop");
        this._imgPressed.addChild(this._txtStop);
        this._txtStop.setCascadeOpacityEnabled(true);
        this._txtStop.setCascadeColorEnabled(true);
        this._txtStop.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtStop, 0.5, 0.694);
        let _txtStopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStop);
        _txtStopLayoutComponent.setPositionPercentXEnabled(true);
        _txtStopLayoutComponent.setPositionPercentX(0.5);
        _txtStopLayoutComponent.setPositionPercentYEnabled(true);
        _txtStopLayoutComponent.setPositionPercentY(0.694);
        this._txtStop.setTouchEnabled(false);
        this._txtStop.ignoreContentAdaptWithSize(true);
        this._txtStop.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtStop.setDefaultFontSize(50);
        this._txtStop.setString(gm.localize.getText("TXT_STOP"));
        this._txtStop.setTextHorizontalAlignment(1);
        this._txtStop.setTextVerticalAlignment(1);
        this._txtStop.enableOutline(cc.color(148, 10, 0, 255), 3);

    },



});

/**
 * Create JackpotSpinButton
 * @returns {_ccs.JackpotSpinButton}
 */
_ccs.JackpotSpinButton.create = function () {
    return new _ccs.JackpotSpinButton();
};
