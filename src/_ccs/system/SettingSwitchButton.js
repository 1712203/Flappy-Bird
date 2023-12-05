/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.SettingSwitchButton
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.SettingSwitchButton = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {ccui.ImageView} */
    _imgSwitch: null,
    /** @type {ck.Text} */
    _txtState: null,


    /**
     * _ccs.SettingSwitchButton constructor
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
        this._root.setContentSize(cc.size(190, 55));

        ///// # _imgBack
        this._imgBack = new ccui.ImageView();
        this._imgBack.setName("_imgBack");
        this._root.addChild(this._imgBack);
        this._imgBack.setCascadeOpacityEnabled(true);
        this._imgBack.setCascadeColorEnabled(true);
        this._imgBack.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBack, 0.5, 0.5);
        let _imgBackLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBack);
        _imgBackLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackLayoutComponent.setPositionPercentX(0.5);
        _imgBackLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackLayoutComponent.setPositionPercentY(0.5);
        _imgBackLayoutComponent.setPercentWidthEnabled(true);
        _imgBackLayoutComponent.setPercentWidth(0.9842);
        _imgBackLayoutComponent.setPercentHeightEnabled(true);
        _imgBackLayoutComponent.setPercentHeight(0.9636);
        this._imgBack.loadTexture("buttons/switch/OnBgr.png", 1);
        this._imgBack.setUnifySizeEnabled(false);
        this._imgBack.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBack, 0.9842, 0.9636);
        this._imgBack.setTouchEnabled(false);

        ///// # _imgSwitch
        this._imgSwitch = new ccui.ImageView();
        this._imgSwitch.setName("_imgSwitch");
        this._root.addChild(this._imgSwitch);
        this._imgSwitch.setCascadeOpacityEnabled(true);
        this._imgSwitch.setCascadeColorEnabled(true);
        this._imgSwitch.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgSwitch, 0.7658, 0.5);
        let _imgSwitchLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgSwitch);
        _imgSwitchLayoutComponent.setPositionPercentXEnabled(true);
        _imgSwitchLayoutComponent.setPositionPercentX(0.7658);
        _imgSwitchLayoutComponent.setPositionPercentYEnabled(true);
        _imgSwitchLayoutComponent.setPositionPercentY(0.5);
        this._imgSwitch.loadTexture("buttons/switch/On.png", 1);
        this._imgSwitch.setUnifySizeEnabled(false);
        this._imgSwitch.ignoreContentAdaptWithSize(false);
        this._imgSwitch.setContentSize(cc.size(89, 57));
        this._imgSwitch.setTouchEnabled(false);

        ///// # _txtState
        this._txtState = new ck.Text();
        this._txtState.setName("_txtState");
        this._root.addChild(this._txtState);
        this._txtState.setCascadeOpacityEnabled(true);
        this._txtState.setCascadeColorEnabled(true);
        this._txtState.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtState, 0.2543, 0.5);
        this._txtState.setTextColor(cc.color(233, 217, 194, 255));
        let _txtStateLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtState);
        _txtStateLayoutComponent.setPositionPercentXEnabled(true);
        _txtStateLayoutComponent.setPositionPercentX(0.2543);
        _txtStateLayoutComponent.setPositionPercentYEnabled(true);
        _txtStateLayoutComponent.setPositionPercentY(0.5);
        this._txtState.setTouchEnabled(false);
        this._txtState.ignoreContentAdaptWithSize(true);
        this._txtState.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtState.setDefaultFontSize(40);
        this._txtState.setString(gm.localize.getText("TXT_ON"));
        this._txtState.setTextHorizontalAlignment(1);
        this._txtState.setTextVerticalAlignment(0);

    },



});

/**
 * Create SettingSwitchButton
 * @returns {_ccs.SettingSwitchButton}
 */
_ccs.SettingSwitchButton.create = function () {
    return new _ccs.SettingSwitchButton();
};
