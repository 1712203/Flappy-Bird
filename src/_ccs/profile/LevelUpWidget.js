/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.LevelUpWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.LevelUpWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ccui.TextBMFont} */
    _txtLevel: null,


    /**
     * _ccs.LevelUpWidget constructor
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
        this._layoutRoot.setPosition(-0.0006, -0.0004);
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        this._layoutRoot.setTouchEnabled(true);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(256, 256));

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._layoutRoot.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr, 0.5, 0.5);
        let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
        _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentY(0.5);
        this._imgBgr.loadTexture("basics/popup/LevelUp.png", 1);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setContentSize(cc.size(325, 275));
        this._imgBgr.setTouchEnabled(false);

        ///// # _txtLevel
        this._txtLevel = new ccui.TextBMFont();
        this._txtLevel.setName("_txtLevel");
        this._layoutRoot.addChild(this._txtLevel);
        this._txtLevel.setCascadeOpacityEnabled(true);
        this._txtLevel.setCascadeColorEnabled(true);
        this._txtLevel.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLevel, 0.4969, 0.5082);
        this._txtLevel.setScale(0.8, 0.8);
        let _txtLevelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLevel);
        this._txtLevel.setTouchEnabled(false);
        this._txtLevel.setFntFile("fonts/Level.fnt");

    },



});

/**
 * Create LevelUpWidget
 * @returns {_ccs.LevelUpWidget}
 */
_ccs.LevelUpWidget.create = function () {
    return new _ccs.LevelUpWidget();
};
