/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.HappySharkListChest
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.HappySharkListChest = ccui.Widget.extend({

    /** @type {ccui.ImageView} */
    _imgChestBg: null,
    /** @type {ccui.ImageView} */
    _imgRewardsTitle: null,
    /** @type {ck.Text} */
    _txtRewardsTitle: null,
    /** @type {ccui.ListView} */
    _listViewChest: null,


    /**
     * _ccs.HappySharkListChest constructor
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

        ///// # _imgChestBg
        this._imgChestBg = new ccui.ImageView();
        this._imgChestBg.setName("_imgChestBg");
        this.addChild(this._imgChestBg);
        this._imgChestBg.setCascadeOpacityEnabled(true);
        this._imgChestBg.setCascadeColorEnabled(true);
        this._imgChestBg.setAnchorPoint(cc.p(0.5, 1));
        let _imgChestBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgChestBg);
        _imgChestBgLayoutComponent.setPositionPercentXEnabled(true);
        _imgChestBgLayoutComponent.setPositionPercentX(0);
        _imgChestBgLayoutComponent.setPositionPercentYEnabled(true);
        _imgChestBgLayoutComponent.setPositionPercentY(0);
        this._imgChestBg.loadTexture("happy-shark/ui/bp_container.png", 1);
        this._imgChestBg.setUnifySizeEnabled(false);
        this._imgChestBg.ignoreContentAdaptWithSize(false);
        this._imgChestBg.setScale9Enabled(true);
        this._imgChestBg.setCapInsets(cc.rect(54, 210, 57, 217));
        this._imgChestBg.setContentSize(cc.size(220, 816.5577));
        this._imgChestBg.setTouchEnabled(false);

        ///// # _imgRewardsTitle
        this._imgRewardsTitle = new ccui.ImageView();
        this._imgRewardsTitle.setName("_imgRewardsTitle");
        this._imgChestBg.addChild(this._imgRewardsTitle);
        this._imgRewardsTitle.setCascadeOpacityEnabled(true);
        this._imgRewardsTitle.setCascadeColorEnabled(true);
        this._imgRewardsTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRewardsTitle, 0.5, 0.96);
        let _imgRewardsTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRewardsTitle);
        _imgRewardsTitleLayoutComponent.setPositionPercentXEnabled(true);
        _imgRewardsTitleLayoutComponent.setPositionPercentX(0.5);
        _imgRewardsTitleLayoutComponent.setPositionPercentYEnabled(true);
        _imgRewardsTitleLayoutComponent.setPositionPercentY(0.96);
        this._imgRewardsTitle.loadTexture("happy-shark/ui/bp_title_bgr.png", 1);
        this._imgRewardsTitle.setUnifySizeEnabled(false);
        this._imgRewardsTitle.ignoreContentAdaptWithSize(false);
        this._imgRewardsTitle.setContentSize(cc.size(267, 64));
        this._imgRewardsTitle.setTouchEnabled(false);

        ///// # _txtRewardsTitle
        this._txtRewardsTitle = new ck.Text();
        this._txtRewardsTitle.setName("_txtRewardsTitle");
        this._imgRewardsTitle.addChild(this._txtRewardsTitle);
        this._txtRewardsTitle.setCascadeOpacityEnabled(true);
        this._txtRewardsTitle.setCascadeColorEnabled(true);
        this._txtRewardsTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRewardsTitle, 0.5, 0.6433);
        let _txtRewardsTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRewardsTitle);
        _txtRewardsTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtRewardsTitleLayoutComponent.setPositionPercentX(0.5);
        _txtRewardsTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtRewardsTitleLayoutComponent.setPositionPercentY(0.6433);
        _txtRewardsTitleLayoutComponent.setPercentWidthEnabled(true);
        _txtRewardsTitleLayoutComponent.setPercentWidth(0.9);
        this._txtRewardsTitle.setTouchEnabled(false);
        this._txtRewardsTitle.setUnifySizeEnabled(false);
        this._txtRewardsTitle.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtRewardsTitle, 0.9);
        this._txtRewardsTitle.setContentSize(cc.size(this._txtRewardsTitle.width, 47));
        this._txtRewardsTitle.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtRewardsTitle.setDefaultFontSize(30);
        this._txtRewardsTitle.setString(gm.localize.getText("TXT_REWARDS"));
        this._txtRewardsTitle.setTextHorizontalAlignment(1);
        this._txtRewardsTitle.setTextVerticalAlignment(1);
        this._txtRewardsTitle.enableOutline(cc.color(63, 63, 193, 255), 2);

        ///// # _listViewChest
        this._listViewChest = new ccui.ListView();
        this._listViewChest.setName("_listViewChest");
        this._imgChestBg.addChild(this._listViewChest);
        this._listViewChest.setCascadeOpacityEnabled(true);
        this._listViewChest.setCascadeColorEnabled(true);
        this._listViewChest.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._listViewChest, 0.5, 0.9246);
        let _listViewChestLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._listViewChest);
        _listViewChestLayoutComponent.setPositionPercentXEnabled(true);
        _listViewChestLayoutComponent.setPositionPercentX(0.5);
        _listViewChestLayoutComponent.setPositionPercentYEnabled(true);
        _listViewChestLayoutComponent.setPositionPercentY(0.9246);
        _listViewChestLayoutComponent.setPercentWidthEnabled(true);
        _listViewChestLayoutComponent.setPercentWidth(0.91);
        this._listViewChest.setTouchEnabled(true);
        this._listViewChest.setUnifySizeEnabled(false);
        this._listViewChest.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._listViewChest, 0.91);
        this._listViewChest.setContentSize(cc.size(this._listViewChest.width, 735));
        this._listViewChest.setDirection(ccui.ScrollView.DIR_VERTICAL);

    },



});

/**
 * Create HappySharkListChest
 * @returns {_ccs.HappySharkListChest}
 */
_ccs.HappySharkListChest.create = function () {
    return new _ccs.HappySharkListChest();
};
