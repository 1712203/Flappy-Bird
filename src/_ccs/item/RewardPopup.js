/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.RewardPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.RewardPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.ImageView} */
    _imgRadial: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ck.Text} */
    _txtHeader: null,
    /** @type {ccui.ImageView} */
    _imgClaim: null,
    /** @type {ck.Text} */
    _txtClaim: null,
    /** @type {ck.GridViewVertical} */
    _grid: null,
    /** @type {ShareImageRewardWidget} */
    _nodeShareReward: null,


    /**
     * _ccs.RewardPopup constructor
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

        ///// # _layoutPopup
        this._layoutPopup = new ccui.Layout();
        this._layoutPopup.setName("_layoutPopup");
        this.addChild(this._layoutPopup);
        this._layoutPopup.setCascadeOpacityEnabled(true);
        this._layoutPopup.setCascadeColorEnabled(true);
        this._layoutPopup.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        this._layoutPopup.setTouchEnabled(false);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(640, 640));

        ///// # _imgRadial
        this._imgRadial = new ccui.ImageView();
        this._imgRadial.setName("_imgRadial");
        this._layoutPopup.addChild(this._imgRadial);
        this._imgRadial.setCascadeOpacityEnabled(true);
        this._imgRadial.setCascadeColorEnabled(true);
        this._imgRadial.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRadial, 0.5, 0.5);
        let _imgRadialLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRadial);
        _imgRadialLayoutComponent.setPositionPercentXEnabled(true);
        _imgRadialLayoutComponent.setPositionPercentX(0.5);
        _imgRadialLayoutComponent.setPositionPercentYEnabled(true);
        _imgRadialLayoutComponent.setPositionPercentY(0.5);
        this._imgRadial.loadTexture("basics/effects/RadialYellow.png", 1);
        this._imgRadial.setUnifySizeEnabled(false);
        this._imgRadial.ignoreContentAdaptWithSize(false);
        this._imgRadial.setScale9Enabled(true);
        this._imgRadial.setCapInsets(cc.rect(69, 57, 292, 312));
        this._imgRadial.setContentSize(cc.size(430, 426));
        this._imgRadial.setTouchEnabled(false);

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._layoutPopup.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5047, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 1);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(1);
        this._imgHeader.loadTexture("basics/popup/HeaderRed.png", 1);
        this._imgHeader.setUnifySizeEnabled(false);
        this._imgHeader.ignoreContentAdaptWithSize(false);
        this._imgHeader.setContentSize(cc.size(521, 203));
        this._imgHeader.setTouchEnabled(false);

        ///// # _txtHeader
        this._txtHeader = new ck.Text();
        this._txtHeader.setName("_txtHeader");
        this._imgHeader.addChild(this._txtHeader);
        this._txtHeader.setCascadeOpacityEnabled(true);
        this._txtHeader.setCascadeColorEnabled(true);
        this._txtHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHeader, 0.5, 0.7224);
        let _txtHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHeader);
        _txtHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentX(0.5);
        _txtHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentY(0.7224);
        this._txtHeader.setTouchEnabled(false);
        this._txtHeader.ignoreContentAdaptWithSize(true);
        this._txtHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHeader.setDefaultFontSize(55);
        this._txtHeader.setString(gm.localize.getText("TXT_REWARDS"));
        this._txtHeader.setTextHorizontalAlignment(1);
        this._txtHeader.setTextVerticalAlignment(0);
        this._txtHeader.enableOutline(cc.color(51, 30, 0, 255), 2);

        ///// # _imgClaim
        this._imgClaim = new ccui.ImageView();
        this._imgClaim.setName("_imgClaim");
        this._layoutPopup.addChild(this._imgClaim);
        this._imgClaim.setCascadeOpacityEnabled(true);
        this._imgClaim.setCascadeColorEnabled(true);
        this._imgClaim.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClaim, 0.5, 0.05);
        let _imgClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClaim);
        _imgClaimLayoutComponent.setPositionPercentXEnabled(true);
        _imgClaimLayoutComponent.setPositionPercentX(0.5);
        _imgClaimLayoutComponent.setPositionPercentYEnabled(true);
        _imgClaimLayoutComponent.setPositionPercentY(0.05);
        this._imgClaim.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgClaim.setUnifySizeEnabled(false);
        this._imgClaim.ignoreContentAdaptWithSize(false);
        this._imgClaim.setContentSize(cc.size(206, 81));
        this._imgClaim.setTouchEnabled(true);

        ///// # _txtClaim
        this._txtClaim = new ck.Text();
        this._txtClaim.setName("_txtClaim");
        this._imgClaim.addChild(this._txtClaim);
        this._txtClaim.setCascadeOpacityEnabled(true);
        this._txtClaim.setCascadeColorEnabled(true);
        this._txtClaim.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtClaim, 0.5, 0.55);
        let _txtClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtClaim);
        _txtClaimLayoutComponent.setPositionPercentXEnabled(true);
        _txtClaimLayoutComponent.setPositionPercentX(0.5);
        _txtClaimLayoutComponent.setPositionPercentYEnabled(true);
        _txtClaimLayoutComponent.setPositionPercentY(0.55);
        this._txtClaim.setTouchEnabled(false);
        this._txtClaim.ignoreContentAdaptWithSize(true);
        this._txtClaim.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtClaim.setDefaultFontSize(40);
        this._txtClaim.setString(gm.localize.getText("TXT_CLAIM"));
        this._txtClaim.setTextHorizontalAlignment(1);
        this._txtClaim.setTextVerticalAlignment(0);
        this._txtClaim.enableOutline(cc.color(51, 30, 0, 255), 2);

        ///// # _grid
        this._grid = new ck.GridViewVertical();
        this._grid.setName("_grid");
        this._layoutPopup.addChild(this._grid);
        this._grid.setCascadeOpacityEnabled(true);
        this._grid.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._grid, 0.5, 0.5);
        let _gridLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._grid);
        _gridLayoutComponent.setPositionPercentXEnabled(true);
        _gridLayoutComponent.setPositionPercentX(0.5);
        _gridLayoutComponent.setPositionPercentYEnabled(true);
        _gridLayoutComponent.setPositionPercentY(0.5);

        ///// # _nodeShareReward
        this._nodeShareReward = new ShareImageRewardWidget();
        this._nodeShareReward.setName("_nodeShareReward");
        this._layoutPopup.addChild(this._nodeShareReward);
        this._nodeShareReward.setCascadeOpacityEnabled(true);
        this._nodeShareReward.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeShareReward, 0.5, -0.17);
        let _nodeShareRewardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeShareReward);
        _nodeShareRewardLayoutComponent.setPositionPercentXEnabled(true);
        _nodeShareRewardLayoutComponent.setPositionPercentX(0.5);
        _nodeShareRewardLayoutComponent.setPositionPercentYEnabled(true);
        _nodeShareRewardLayoutComponent.setPositionPercentY(-0.17);

    },



});

/**
 * Create RewardPopup
 * @returns {_ccs.RewardPopup}
 */
_ccs.RewardPopup.create = function () {
    return new _ccs.RewardPopup();
};
