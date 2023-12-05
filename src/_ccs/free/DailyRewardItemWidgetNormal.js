/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.DailyRewardItemWidgetNormal
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.DailyRewardItemWidgetNormal = ccui.Widget.extend({

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
     * _ccs.DailyRewardItemWidgetNormal constructor
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
        this._root.setContentSize(cc.size(132.5061, 200));

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._root.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr, 0.5, 0.5);
        this._imgBgr.setColor(cc.color(224, 248, 255, 255));
        let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
        _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentY(0.5);
        this._imgBgr.loadTexture("free/BoxBlue.png", 1);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setContentSize(cc.size(130, 205));
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
        this._imgBgrHighlight.loadTexture("free/BoxYellow.png", 1);
        this._imgBgrHighlight.setUnifySizeEnabled(false);
        this._imgBgrHighlight.ignoreContentAdaptWithSize(false);
        this._imgBgrHighlight.setContentSize(cc.size(144, 218));
        this._imgBgrHighlight.setTouchEnabled(false);

        ///// # _glow
        this._glow = new Glow();
        this._glow.setName("_glow");
        this._root.addChild(this._glow);
        this._glow.setCascadeOpacityEnabled(true);
        this._glow.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._glow, 0.5, 0.635);
        this._glow.setScale(0.15, 0.15);
        let _glowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._glow);
        _glowLayoutComponent.setPositionPercentXEnabled(true);
        _glowLayoutComponent.setPositionPercentX(0.5);
        _glowLayoutComponent.setPositionPercentYEnabled(true);
        _glowLayoutComponent.setPositionPercentY(0.635);

        ///// # _gridRewards
        this._gridRewards = new ck.GridViewHorizontal();
        this._gridRewards.setName("_gridRewards");
        this._root.addChild(this._gridRewards);
        this._gridRewards.setCascadeOpacityEnabled(true);
        this._gridRewards.setCascadeColorEnabled(true);
        this._gridRewards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridRewards, 0.5, 0.635);
        let _gridRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridRewards);
        _gridRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentX(0.5);
        _gridRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentY(0.635);

        ///// # _txtDay
        this._txtDay = new ck.Text();
        this._txtDay.setName("_txtDay");
        this._root.addChild(this._txtDay);
        this._txtDay.setCascadeOpacityEnabled(true);
        this._txtDay.setCascadeColorEnabled(true);
        this._txtDay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDay, 0.5, 0.1559);
        let _txtDayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDay);
        _txtDayLayoutComponent.setPositionPercentXEnabled(true);
        _txtDayLayoutComponent.setPositionPercentX(0.5);
        _txtDayLayoutComponent.setPositionPercentYEnabled(true);
        _txtDayLayoutComponent.setPositionPercentY(0.1559);
        this._txtDay.setTouchEnabled(false);
        this._txtDay.ignoreContentAdaptWithSize(true);
        this._txtDay.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDay.setDefaultFontSize(35);
        this._txtDay.setTextHorizontalAlignment(1);
        this._txtDay.setTextVerticalAlignment(1);
        this._txtDay.enableShadow(cc.color(28, 85, 131, 255), cc.size(0, -2), 0);

        ///// # _imgCheck
        this._imgCheck = new ccui.ImageView();
        this._imgCheck.setName("_imgCheck");
        this._root.addChild(this._imgCheck);
        this._imgCheck.setCascadeOpacityEnabled(true);
        this._imgCheck.setCascadeColorEnabled(true);
        this._imgCheck.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCheck, 0.5, 0.65);
        let _imgCheckLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCheck);
        _imgCheckLayoutComponent.setPositionPercentXEnabled(true);
        _imgCheckLayoutComponent.setPositionPercentX(0.5);
        _imgCheckLayoutComponent.setPositionPercentYEnabled(true);
        _imgCheckLayoutComponent.setPositionPercentY(0.65);
        _imgCheckLayoutComponent.setPercentWidthEnabled(true);
        _imgCheckLayoutComponent.setPercentWidth(0.966);
        _imgCheckLayoutComponent.setPercentHeightEnabled(true);
        _imgCheckLayoutComponent.setPercentHeight(0.64);
        this._imgCheck.loadTexture("icons/flat/Check.png", 1);
        this._imgCheck.setUnifySizeEnabled(false);
        this._imgCheck.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgCheck, 0.966, 0.64);
        this._imgCheck.setTouchEnabled(false);

    },



});

/**
 * Create DailyRewardItemWidgetNormal
 * @returns {_ccs.DailyRewardItemWidgetNormal}
 */
_ccs.DailyRewardItemWidgetNormal.create = function () {
    return new _ccs.DailyRewardItemWidgetNormal();
};
