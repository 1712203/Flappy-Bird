/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.DailyRewardItemWidgetSpecial
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.DailyRewardItemWidgetSpecial = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ccui.ImageView} */
    _imgBgrHighlight: null,
    /** @type {Glow} */
    _glow: null,
    /** @type {ck.GridViewHorizontal} */
    _gridRewards: null,
    /** @type {ck.Text} */
    _txtDay: null,
    /** @type {ccui.ImageView} */
    _imgCheck: null,


    /**
     * _ccs.DailyRewardItemWidgetSpecial constructor
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
        this._root.setPosition(0.0001, 0);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(false);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(460, 205));

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._root.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr, 0.5, 0.5);
        this._imgBgr.setColor(cc.color(220, 220, 220, 255));
        let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
        _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentY(0.5);
        _imgBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrLayoutComponent.setPercentWidth(1);
        _imgBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrLayoutComponent.setPercentHeight(1);
        this._imgBgr.loadTexture("free/BoxPurple.png", 1);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setScale9Enabled(true);
        this._imgBgr.setCapInsets(cc.rect(42, 67, 349, 71));
        ck.UIUtils.setSizePercent(this._imgBgr, 1, 1);
        this._imgBgr.setTouchEnabled(false);

        ///// # _imgBgrHighlight
        this._imgBgrHighlight = new ccui.ImageView();
        this._imgBgrHighlight.setName("_imgBgrHighlight");
        this._root.addChild(this._imgBgrHighlight);
        this._imgBgrHighlight.setCascadeOpacityEnabled(true);
        this._imgBgrHighlight.setCascadeColorEnabled(true);
        this._imgBgrHighlight.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgrHighlight, 0.5, 0.5);
        this._imgBgrHighlight.setColor(cc.color(224, 248, 255, 255));
        let _imgBgrHighlightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrHighlight);
        _imgBgrHighlightLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrHighlightLayoutComponent.setPositionPercentX(0.5);
        _imgBgrHighlightLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrHighlightLayoutComponent.setPositionPercentY(0.5);
        _imgBgrHighlightLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrHighlightLayoutComponent.setPercentWidth(1);
        _imgBgrHighlightLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrHighlightLayoutComponent.setPercentHeight(1);
        this._imgBgrHighlight.loadTexture("free/BoxGreenLarge.png", 1);
        this._imgBgrHighlight.setUnifySizeEnabled(false);
        this._imgBgrHighlight.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBgrHighlight, 1, 1);
        this._imgBgrHighlight.setTouchEnabled(false);

        ///// # _glow
        this._glow = new Glow();
        this._glow.setName("_glow");
        this._root.addChild(this._glow);
        this._glow.setCascadeOpacityEnabled(true);
        this._glow.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._glow, 0.8083, 0.5593);
        this._glow.setScale(0.21, 0.21);
        let _glowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._glow);
        _glowLayoutComponent.setPositionPercentXEnabled(true);
        _glowLayoutComponent.setPositionPercentX(0.8083);
        _glowLayoutComponent.setPositionPercentYEnabled(true);
        _glowLayoutComponent.setPositionPercentY(0.5593);

        ///// # _gridRewards
        this._gridRewards = new ck.GridViewHorizontal();
        this._gridRewards.setName("_gridRewards");
        this._root.addChild(this._gridRewards);
        this._gridRewards.setCascadeOpacityEnabled(true);
        this._gridRewards.setCascadeColorEnabled(true);
        this._gridRewards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridRewards, 0.8083, 0.5593);
        let _gridRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridRewards);
        _gridRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentX(0.8083);
        _gridRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentY(0.5593);

        ///// # _txtDay
        this._txtDay = new ck.Text();
        this._txtDay.setName("_txtDay");
        this._root.addChild(this._txtDay);
        this._txtDay.setCascadeOpacityEnabled(true);
        this._txtDay.setCascadeColorEnabled(true);
        this._txtDay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDay, 0.5, 0.1225);
        let _txtDayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDay);
        _txtDayLayoutComponent.setPositionPercentXEnabled(true);
        _txtDayLayoutComponent.setPositionPercentX(0.5);
        _txtDayLayoutComponent.setPositionPercentYEnabled(true);
        _txtDayLayoutComponent.setPositionPercentY(0.1225);
        this._txtDay.setTouchEnabled(false);
        this._txtDay.ignoreContentAdaptWithSize(true);
        this._txtDay.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDay.setDefaultFontSize(35);
        this._txtDay.setTextHorizontalAlignment(1);
        this._txtDay.setTextVerticalAlignment(1);
        this._txtDay.enableShadow(cc.color(93, 29, 166, 255), cc.size(0, -2), 0);

        ///// # _imgCheck
        this._imgCheck = new ccui.ImageView();
        this._imgCheck.setName("_imgCheck");
        this._root.addChild(this._imgCheck);
        this._imgCheck.setCascadeOpacityEnabled(true);
        this._imgCheck.setCascadeColorEnabled(true);
        this._imgCheck.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCheck, 0.5, 0.5988);
        let _imgCheckLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCheck);
        _imgCheckLayoutComponent.setPositionPercentXEnabled(true);
        _imgCheckLayoutComponent.setPositionPercentX(0.5);
        _imgCheckLayoutComponent.setPositionPercentYEnabled(true);
        _imgCheckLayoutComponent.setPositionPercentY(0.5988);
        this._imgCheck.loadTexture("icons/flat/Check.png", 1);
        this._imgCheck.setUnifySizeEnabled(false);
        this._imgCheck.ignoreContentAdaptWithSize(false);
        this._imgCheck.setContentSize(cc.size(128, 128));
        this._imgCheck.setTouchEnabled(false);

    },



});

/**
 * Create DailyRewardItemWidgetSpecial
 * @returns {_ccs.DailyRewardItemWidgetSpecial}
 */
_ccs.DailyRewardItemWidgetSpecial.create = function () {
    return new _ccs.DailyRewardItemWidgetSpecial();
};
