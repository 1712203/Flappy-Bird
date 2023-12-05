/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.LanguageWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.LanguageWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgSelect: null,
    /** @type {ccui.ImageView} */
    _imgUnselect: null,
    /** @type {cc.Sprite} */
    _check: null,
    /** @type {ck.Text} */
    _txtName: null,
    /** @type {ccui.ImageView} */
    _imgFlag: null,


    /**
     * _ccs.LanguageWidget constructor
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
        this._root.setContentSize(cc.size(250, 80));

        ///// # _imgSelect
        this._imgSelect = new ccui.ImageView();
        this._imgSelect.setName("_imgSelect");
        this._root.addChild(this._imgSelect);
        this._imgSelect.setCascadeOpacityEnabled(true);
        this._imgSelect.setCascadeColorEnabled(true);
        this._imgSelect.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgSelect, 0.5, 0.5);
        let _imgSelectLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgSelect);
        _imgSelectLayoutComponent.setPositionPercentXEnabled(true);
        _imgSelectLayoutComponent.setPositionPercentX(0.5);
        _imgSelectLayoutComponent.setPositionPercentYEnabled(true);
        _imgSelectLayoutComponent.setPositionPercentY(0.5);
        _imgSelectLayoutComponent.setPercentWidthEnabled(true);
        _imgSelectLayoutComponent.setPercentWidth(1);
        _imgSelectLayoutComponent.setPercentHeightEnabled(true);
        _imgSelectLayoutComponent.setPercentHeight(1);
        this._imgSelect.loadTexture("basics/other/BoxLightBrown.png", 1);
        this._imgSelect.setUnifySizeEnabled(false);
        this._imgSelect.ignoreContentAdaptWithSize(false);
        this._imgSelect.setScale9Enabled(true);
        this._imgSelect.setCapInsets(cc.rect(4, 4, 5, 5));
        ck.UIUtils.setSizePercent(this._imgSelect, 1, 1);
        this._imgSelect.setTouchEnabled(false);

        ///// # _imgUnselect
        this._imgUnselect = new ccui.ImageView();
        this._imgUnselect.setName("_imgUnselect");
        this._root.addChild(this._imgUnselect);
        this._imgUnselect.setCascadeOpacityEnabled(true);
        this._imgUnselect.setCascadeColorEnabled(true);
        this._imgUnselect.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgUnselect, 0.5, 0.5);
        let _imgUnselectLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgUnselect);
        _imgUnselectLayoutComponent.setPositionPercentXEnabled(true);
        _imgUnselectLayoutComponent.setPositionPercentX(0.5);
        _imgUnselectLayoutComponent.setPositionPercentYEnabled(true);
        _imgUnselectLayoutComponent.setPositionPercentY(0.5);
        _imgUnselectLayoutComponent.setPercentWidthEnabled(true);
        _imgUnselectLayoutComponent.setPercentWidth(1);
        _imgUnselectLayoutComponent.setPercentHeightEnabled(true);
        _imgUnselectLayoutComponent.setPercentHeight(1);
        this._imgUnselect.loadTexture("basics/other/BoxBrown.png", 1);
        this._imgUnselect.setUnifySizeEnabled(false);
        this._imgUnselect.ignoreContentAdaptWithSize(false);
        this._imgUnselect.setScale9Enabled(true);
        this._imgUnselect.setCapInsets(cc.rect(5, 3, 7, 6));
        ck.UIUtils.setSizePercent(this._imgUnselect, 1, 1);
        this._imgUnselect.setTouchEnabled(false);

        ///// # _check
        this._check = new cc.Sprite();
        this._check.setName("_check");
        this._root.addChild(this._check);
        this._check.setCascadeOpacityEnabled(true);
        this._check.setCascadeColorEnabled(true);
        this._check.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._check, 0.9661, 0.2326);
        this._check.setScale(0.7, 0.7);
        let _checkLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._check);
        _checkLayoutComponent.setPositionPercentXEnabled(true);
        _checkLayoutComponent.setPositionPercentX(0.9661);
        _checkLayoutComponent.setPositionPercentYEnabled(true);
        _checkLayoutComponent.setPositionPercentY(0.2326);
        let sf = cc.spriteFrameCache.getSpriteFrame("icons/color/other/CheckYellow.png"); if (sf) this._check.setSpriteFrame(sf);
        let _checkBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _checkBlendFunc.src = 1;
        _checkBlendFunc.dst = 771;
        this._check.setBlendFunc(_checkBlendFunc);

        ///// # _txtName
        this._txtName = new ck.Text();
        this._txtName.setName("_txtName");
        this._root.addChild(this._txtName);
        this._txtName.setCascadeOpacityEnabled(true);
        this._txtName.setCascadeColorEnabled(true);
        this._txtName.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName, 0.6611, 0.5);
        this._txtName.setTextColor(cc.color(255, 211, 180, 255));
        let _txtNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName);
        _txtNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameLayoutComponent.setPositionPercentX(0.6611);
        _txtNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameLayoutComponent.setPositionPercentY(0.5);
        this._txtName.setTouchEnabled(false);
        this._txtName.ignoreContentAdaptWithSize(true);
        this._txtName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName.setDefaultFontSize(40);
        this._txtName.setTextHorizontalAlignment(1);
        this._txtName.setTextVerticalAlignment(1);

        ///// # _imgFlag
        this._imgFlag = new ccui.ImageView();
        this._imgFlag.setName("_imgFlag");
        this._root.addChild(this._imgFlag);
        this._imgFlag.setCascadeOpacityEnabled(true);
        this._imgFlag.setCascadeColorEnabled(true);
        this._imgFlag.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgFlag, 0.2422, 0.4966);
        let _imgFlagLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFlag);
        _imgFlagLayoutComponent.setPositionPercentXEnabled(true);
        _imgFlagLayoutComponent.setPositionPercentX(0.2422);
        _imgFlagLayoutComponent.setPositionPercentYEnabled(true);
        _imgFlagLayoutComponent.setPositionPercentY(0.4966);
        this._imgFlag.loadTexture("icons/color/flags/Turkey.png", 1);
        this._imgFlag.setUnifySizeEnabled(false);
        this._imgFlag.ignoreContentAdaptWithSize(false);
        this._imgFlag.setScale9Enabled(true);
        this._imgFlag.setCapInsets(cc.rect(18, 14, 40, 16));
        this._imgFlag.setContentSize(cc.size(76, 44));
        this._imgFlag.setTouchEnabled(false);

    },



});

/**
 * Create LanguageWidget
 * @returns {_ccs.LanguageWidget}
 */
_ccs.LanguageWidget.create = function () {
    return new _ccs.LanguageWidget();
};
