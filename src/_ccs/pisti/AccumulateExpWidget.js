/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.AccumulateExpWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.AccumulateExpWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgProgress: null,
    /** @type {ck.LoadingBar} */
    _loadingBar: null,
    /** @type {ccui.Layout} */
    _layoutUI: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtMilestone: null,
    /** @type {ck.GridViewHorizontal} */
    _gridViewRewards: null,


    /**
     * _ccs.AccumulateExpWidget constructor
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
        this._layoutRoot.setTouchEnabled(true);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(400, 40));

        ///// # _imgProgress
        this._imgProgress = new ccui.ImageView();
        this._imgProgress.setName("_imgProgress");
        this._layoutRoot.addChild(this._imgProgress);
        this._imgProgress.setCascadeOpacityEnabled(true);
        this._imgProgress.setCascadeColorEnabled(true);
        this._imgProgress.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgProgress, 0.1063, 0.5);
        let _imgProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgProgress);
        _imgProgressLayoutComponent.setPositionPercentXEnabled(true);
        _imgProgressLayoutComponent.setPositionPercentX(0.1063);
        _imgProgressLayoutComponent.setPositionPercentYEnabled(true);
        _imgProgressLayoutComponent.setPositionPercentY(0.5);
        this._imgProgress.loadTexture("basics2/bars/Bar_09.png", 1);
        this._imgProgress.setUnifySizeEnabled(false);
        this._imgProgress.ignoreContentAdaptWithSize(false);
        this._imgProgress.setScale9Enabled(true);
        this._imgProgress.setCapInsets(cc.rect(25, 2, 300, 44));
        this._imgProgress.setContentSize(cc.size(315, 20));
        this._imgProgress.setTouchEnabled(false);

        ///// # _loadingBar
        this._loadingBar = new ck.LoadingBar();
        this._loadingBar.setName("_loadingBar");
        this._layoutRoot.addChild(this._loadingBar);
        this._loadingBar.setCascadeOpacityEnabled(true);
        this._loadingBar.setCascadeColorEnabled(true);
        this._loadingBar.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._loadingBar, 0.1063, 0.5);
        let _loadingBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._loadingBar);
        _loadingBarLayoutComponent.setPositionPercentXEnabled(true);
        _loadingBarLayoutComponent.setPositionPercentX(0.1063);
        _loadingBarLayoutComponent.setPositionPercentYEnabled(true);
        _loadingBarLayoutComponent.setPositionPercentY(0.5);
        this._loadingBar.setTouchEnabled(false);
        this._loadingBar.setUnifySizeEnabled(false);
        this._loadingBar.ignoreContentAdaptWithSize(false);
        this._loadingBar.setContentSize(cc.size(315, 20));
        this._loadingBar.loadTexture("basics2/bars/Bar_10.png", 1);

        ///// # _layoutUI
        this._layoutUI = new ccui.Layout();
        this._layoutUI.setName("_layoutUI");
        this._layoutRoot.addChild(this._layoutUI);
        this._layoutUI.setCascadeOpacityEnabled(true);
        this._layoutUI.setCascadeColorEnabled(true);
        this._layoutUI.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutUI, 0.5, 0.5);
        let _layoutUILayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutUI);
        _layoutUILayoutComponent.setPositionPercentXEnabled(true);
        _layoutUILayoutComponent.setPositionPercentX(0.5);
        _layoutUILayoutComponent.setPositionPercentYEnabled(true);
        _layoutUILayoutComponent.setPositionPercentY(0.5);
        this._layoutUI.setTouchEnabled(true);
        this._layoutUI.setUnifySizeEnabled(false);
        this._layoutUI.ignoreContentAdaptWithSize(false);
        this._layoutUI.setContentSize(cc.size(315, 20));

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._layoutUI.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0, 0.7);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.7);
        this._imgIcon.loadTexture("icons/color/stars/Blue.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(40, 40));
        this._imgIcon.setTouchEnabled(false);

        ///// # _txtMilestone
        this._txtMilestone = new ck.Text();
        this._txtMilestone.setName("_txtMilestone");
        this._layoutUI.addChild(this._txtMilestone);
        this._txtMilestone.setCascadeOpacityEnabled(true);
        this._txtMilestone.setCascadeColorEnabled(true);
        this._txtMilestone.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMilestone, 0.5, 0.5);
        let _txtMilestoneLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMilestone);
        _txtMilestoneLayoutComponent.setPositionPercentXEnabled(true);
        _txtMilestoneLayoutComponent.setPositionPercentX(0.5);
        _txtMilestoneLayoutComponent.setPositionPercentYEnabled(true);
        _txtMilestoneLayoutComponent.setPositionPercentY(0.5);
        this._txtMilestone.setTouchEnabled(false);
        this._txtMilestone.ignoreContentAdaptWithSize(true);
        this._txtMilestone.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtMilestone.setDefaultFontSize(24);
        this._txtMilestone.setTextHorizontalAlignment(1);
        this._txtMilestone.setTextVerticalAlignment(1);
        this._txtMilestone.enableOutline(cc.color(74, 48, 0, 255), 2);

        ///// # _gridViewRewards
        this._gridViewRewards = new ck.GridViewHorizontal();
        this._gridViewRewards.setName("_gridViewRewards");
        this._layoutUI.addChild(this._gridViewRewards);
        this._gridViewRewards.setCascadeOpacityEnabled(true);
        this._gridViewRewards.setCascadeColorEnabled(true);
        this._gridViewRewards.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._gridViewRewards, 0.9365, 0.5);
        let _gridViewRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewRewards);
        _gridViewRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _gridViewRewardsLayoutComponent.setPositionPercentX(0.9365);
        _gridViewRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _gridViewRewardsLayoutComponent.setPositionPercentY(0.5);

    },



});

/**
 * Create AccumulateExpWidget
 * @returns {_ccs.AccumulateExpWidget}
 */
_ccs.AccumulateExpWidget.create = function () {
    return new _ccs.AccumulateExpWidget();
};
