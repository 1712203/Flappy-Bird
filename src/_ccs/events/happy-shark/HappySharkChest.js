/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.HappySharkChest
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.HappySharkChest = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _panelContainer: null,
    /** @type {ccui.ImageView} */
    _imgBg: null,
    /** @type {ccui.ImageView} */
    _imgBgProgress: null,
    /** @type {ck.LoadingBar} */
    _progress: null,
    /** @type {ck.Text} */
    _labelProgress: null,
    /** @type {ccui.ImageView} */
    _imgChest: null,
    /** @type {cc.Node} */
    _posReward: null,
    /** @type {ck.GridViewVertical} */
    _gridRewards: null,


    /**
     * _ccs.HappySharkChest constructor
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

        ///// # _panelContainer
        this._panelContainer = new ccui.Layout();
        this._panelContainer.setName("_panelContainer");
        this.addChild(this._panelContainer);
        this._panelContainer.setCascadeOpacityEnabled(true);
        this._panelContainer.setCascadeColorEnabled(true);
        this._panelContainer.setAnchorPoint(cc.p(0.5, 0.5));
        let _panelContainerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._panelContainer);
        _panelContainerLayoutComponent.setPositionPercentXEnabled(true);
        _panelContainerLayoutComponent.setPositionPercentX(0);
        _panelContainerLayoutComponent.setPositionPercentYEnabled(true);
        _panelContainerLayoutComponent.setPositionPercentY(0);
        this._panelContainer.setTouchEnabled(true);
        this._panelContainer.setUnifySizeEnabled(false);
        this._panelContainer.ignoreContentAdaptWithSize(false);
        this._panelContainer.setContentSize(cc.size(200, 105));

        ///// # _imgBg
        this._imgBg = new ccui.ImageView();
        this._imgBg.setName("_imgBg");
        this._panelContainer.addChild(this._imgBg);
        this._imgBg.setCascadeOpacityEnabled(true);
        this._imgBg.setCascadeColorEnabled(true);
        this._imgBg.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBg, 0.5, 0.5);
        this._imgBg.setColor(cc.color(255, 255, 0, 255));
        let _imgBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBg);
        _imgBgLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgLayoutComponent.setPositionPercentX(0.5);
        _imgBgLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgLayoutComponent.setPositionPercentY(0.5);
        _imgBgLayoutComponent.setPercentWidthEnabled(true);
        _imgBgLayoutComponent.setPercentWidth(0.96);
        this._imgBg.loadTexture("basics/other/Box_07.png", 1);
        this._imgBg.setUnifySizeEnabled(false);
        this._imgBg.ignoreContentAdaptWithSize(false);
        this._imgBg.setScale9Enabled(true);
        this._imgBg.setCapInsets(cc.rect(49, 49, 53, 53));
        ck.UIUtils.setWidthPercent(this._imgBg, 0.96);
        this._imgBg.setContentSize(cc.size(this._imgBg.width, 95));
        this._imgBg.setTouchEnabled(false);

        ///// # _imgBgProgress
        this._imgBgProgress = new ccui.ImageView();
        this._imgBgProgress.setName("_imgBgProgress");
        this._panelContainer.addChild(this._imgBgProgress);
        this._imgBgProgress.setCascadeOpacityEnabled(true);
        this._imgBgProgress.setCascadeColorEnabled(true);
        this._imgBgProgress.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgProgress, 0.5282, 0.5593);
        this._imgBgProgress.setScale(0.8, 1);
        let _imgBgProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgProgress);
        _imgBgProgressLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgProgressLayoutComponent.setPositionPercentX(0.5282);
        _imgBgProgressLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgProgressLayoutComponent.setPositionPercentY(0.5593);
        this._imgBgProgress.loadTexture("happy-shark/ui/Progress_01_BG.png", 1);
        this._imgBgProgress.setUnifySizeEnabled(false);
        this._imgBgProgress.ignoreContentAdaptWithSize(false);
        this._imgBgProgress.setContentSize(cc.size(132, 27));
        this._imgBgProgress.setTouchEnabled(false);

        ///// # _progress
        this._progress = new ck.LoadingBar();
        this._progress.setName("_progress");
        this._panelContainer.addChild(this._progress);
        this._progress.setCascadeOpacityEnabled(true);
        this._progress.setCascadeColorEnabled(true);
        this._progress.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._progress, 0.5281, 0.5648);
        this._progress.setScale(0.8, 1);
        let _progressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._progress);
        _progressLayoutComponent.setPositionPercentXEnabled(true);
        _progressLayoutComponent.setPositionPercentX(0.5281);
        _progressLayoutComponent.setPositionPercentYEnabled(true);
        _progressLayoutComponent.setPositionPercentY(0.5648);
        this._progress.setTouchEnabled(false);
        this._progress.setUnifySizeEnabled(false);
        this._progress.ignoreContentAdaptWithSize(false);
        this._progress.setContentSize(cc.size(132, 25));
        this._progress.loadTexture("happy-shark/ui/Progress_01_Percent.png", 1);

        ///// # _labelProgress
        this._labelProgress = new ck.Text();
        this._labelProgress.setName("_labelProgress");
        this._panelContainer.addChild(this._labelProgress);
        this._labelProgress.setCascadeOpacityEnabled(true);
        this._labelProgress.setCascadeColorEnabled(true);
        this._labelProgress.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._labelProgress, 0.5184, 0.5581);
        let _labelProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._labelProgress);
        _labelProgressLayoutComponent.setPositionPercentXEnabled(true);
        _labelProgressLayoutComponent.setPositionPercentX(0.5184);
        _labelProgressLayoutComponent.setPositionPercentYEnabled(true);
        _labelProgressLayoutComponent.setPositionPercentY(0.5581);
        this._labelProgress.setTouchEnabled(false);
        this._labelProgress.setUnifySizeEnabled(false);
        this._labelProgress.ignoreContentAdaptWithSize(false);
        this._labelProgress.setContentSize(cc.size(101.8801, 26));
        this._labelProgress.setFontName("fonts/LilitaOneRegular.ttf");
        this._labelProgress.setDefaultFontSize(18);
        this._labelProgress.setString(gm.localize.getText("TXT_299/300"));
        this._labelProgress.setTextHorizontalAlignment(1);
        this._labelProgress.setTextVerticalAlignment(1);
        this._labelProgress.enableOutline(cc.color(93, 8, 8, 255), 1);

        ///// # _imgChest
        this._imgChest = new ccui.ImageView();
        this._imgChest.setName("_imgChest");
        this._panelContainer.addChild(this._imgChest);
        this._imgChest.setCascadeOpacityEnabled(true);
        this._imgChest.setCascadeColorEnabled(true);
        this._imgChest.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgChest, 0.1653, 0.5692);
        this._imgChest.setScale(0.5, 0.5);
        let _imgChestLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgChest);
        _imgChestLayoutComponent.setPositionPercentXEnabled(true);
        _imgChestLayoutComponent.setPositionPercentX(0.1653);
        _imgChestLayoutComponent.setPositionPercentYEnabled(true);
        _imgChestLayoutComponent.setPositionPercentY(0.5692);
        this._imgChest.loadTexture("basics/chests/Chest_00_01.png", 1);
        this._imgChest.setUnifySizeEnabled(false);
        this._imgChest.ignoreContentAdaptWithSize(false);
        this._imgChest.setContentSize(cc.size(102, 91));
        this._imgChest.setTouchEnabled(false);

        ///// # _posReward
        this._posReward = new cc.Node();
        this._posReward.setName("_posReward");
        this._panelContainer.addChild(this._posReward);
        this._posReward.setCascadeOpacityEnabled(true);
        this._posReward.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._posReward, 0.1013, 0.2706);
        let _posRewardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._posReward);

        ///// # _gridRewards
        this._gridRewards = new ck.GridViewVertical();
        this._gridRewards.setName("_gridRewards");
        this._panelContainer.addChild(this._gridRewards);
        this._gridRewards.setCascadeOpacityEnabled(true);
        this._gridRewards.setCascadeColorEnabled(true);
        this._gridRewards.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._gridRewards, 0.9802, 0.5661);
        let _gridRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridRewards);
        _gridRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentX(0.9802);
        _gridRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentY(0.5661);

    },



});

/**
 * Create HappySharkChest
 * @returns {_ccs.HappySharkChest}
 */
_ccs.HappySharkChest.create = function () {
    return new _ccs.HappySharkChest();
};
