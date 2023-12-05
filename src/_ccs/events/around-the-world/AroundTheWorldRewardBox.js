/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.AroundTheWorldRewardBox
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.AroundTheWorldRewardBox = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBoxNormal: null,
    /** @type {ccui.ImageView} */
    _imgBoxHighlight: null,
    /** @type {ck.GridViewVertical} */
    _gridRewards: null,
    /** @type {ccui.ImageView} */
    _imgTag: null,
    /** @type {ck.Text} */
    _txtTag: null,
    /** @type {ccui.ImageView} */
    _imgRibbon: null,


    /**
     * _ccs.AroundTheWorldRewardBox constructor
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
        this._root.setContentSize(cc.size(260, 166.9704));

        ///// # _imgBoxNormal
        this._imgBoxNormal = new ccui.ImageView();
        this._imgBoxNormal.setName("_imgBoxNormal");
        this._root.addChild(this._imgBoxNormal);
        this._imgBoxNormal.setCascadeOpacityEnabled(true);
        this._imgBoxNormal.setCascadeColorEnabled(true);
        this._imgBoxNormal.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBoxNormal, 0.5, 0.4162);
        let _imgBoxNormalLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBoxNormal);
        _imgBoxNormalLayoutComponent.setPositionPercentXEnabled(true);
        _imgBoxNormalLayoutComponent.setPositionPercentX(0.5);
        _imgBoxNormalLayoutComponent.setPositionPercentYEnabled(true);
        _imgBoxNormalLayoutComponent.setPositionPercentY(0.4162);
        this._imgBoxNormal.loadTexture("around-the-world/Box.png", 1);
        this._imgBoxNormal.setUnifySizeEnabled(false);
        this._imgBoxNormal.ignoreContentAdaptWithSize(false);
        this._imgBoxNormal.setContentSize(cc.size(259, 140));
        this._imgBoxNormal.setTouchEnabled(false);

        ///// # _imgBoxHighlight
        this._imgBoxHighlight = new ccui.ImageView();
        this._imgBoxHighlight.setName("_imgBoxHighlight");
        this._root.addChild(this._imgBoxHighlight);
        this._imgBoxHighlight.setCascadeOpacityEnabled(true);
        this._imgBoxHighlight.setCascadeColorEnabled(true);
        this._imgBoxHighlight.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBoxHighlight, 0.5, 0.4162);
        let _imgBoxHighlightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBoxHighlight);
        _imgBoxHighlightLayoutComponent.setPositionPercentXEnabled(true);
        _imgBoxHighlightLayoutComponent.setPositionPercentX(0.5);
        _imgBoxHighlightLayoutComponent.setPositionPercentYEnabled(true);
        _imgBoxHighlightLayoutComponent.setPositionPercentY(0.4162);
        this._imgBoxHighlight.loadTexture("around-the-world/BoxSelected.png", 1);
        this._imgBoxHighlight.setUnifySizeEnabled(false);
        this._imgBoxHighlight.ignoreContentAdaptWithSize(false);
        this._imgBoxHighlight.setContentSize(cc.size(263, 144));
        this._imgBoxHighlight.setTouchEnabled(false);

        ///// # _gridRewards
        this._gridRewards = new ck.GridViewVertical();
        this._gridRewards.setName("_gridRewards");
        this._root.addChild(this._gridRewards);
        this._gridRewards.setCascadeOpacityEnabled(true);
        this._gridRewards.setCascadeColorEnabled(true);
        this._gridRewards.setAnchorPoint(cc.p(0.5, 0.5026));
        ck.UIUtils.setPositionPercent(this._gridRewards, 0.5, 0.3401);
        let _gridRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridRewards);
        _gridRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentX(0.5);
        _gridRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentY(0.3401);

        ///// # _imgTag
        this._imgTag = new ccui.ImageView();
        this._imgTag.setName("_imgTag");
        this._root.addChild(this._imgTag);
        this._imgTag.setCascadeOpacityEnabled(true);
        this._imgTag.setCascadeColorEnabled(true);
        this._imgTag.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTag, 0.1847, 0.6839);
        let _imgTagLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTag);
        this._imgTag.loadTexture("around-the-world/Tag.png", 1);
        this._imgTag.setUnifySizeEnabled(false);
        this._imgTag.ignoreContentAdaptWithSize(false);
        this._imgTag.setContentSize(cc.size(41, 52));
        this._imgTag.setTouchEnabled(false);

        ///// # _txtTag
        this._txtTag = new ck.Text();
        this._txtTag.setName("_txtTag");
        this._imgTag.addChild(this._txtTag);
        this._txtTag.setCascadeOpacityEnabled(true);
        this._txtTag.setCascadeColorEnabled(true);
        this._txtTag.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTag, 0.5244, 0.4231);
        let _txtTagLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTag);
        _txtTagLayoutComponent.setPositionPercentXEnabled(true);
        _txtTagLayoutComponent.setPositionPercentX(0.5244);
        _txtTagLayoutComponent.setPositionPercentYEnabled(true);
        _txtTagLayoutComponent.setPositionPercentY(0.4231);
        this._txtTag.setTouchEnabled(false);
        this._txtTag.ignoreContentAdaptWithSize(true);
        this._txtTag.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtTag.setDefaultFontSize(24);
        this._txtTag.setTextHorizontalAlignment(1);
        this._txtTag.setTextVerticalAlignment(1);
        this._txtTag.enableOutline(cc.color(193, 20, 50, 255), 1);

        ///// # _imgRibbon
        this._imgRibbon = new ccui.ImageView();
        this._imgRibbon.setName("_imgRibbon");
        this._root.addChild(this._imgRibbon);
        this._imgRibbon.setCascadeOpacityEnabled(true);
        this._imgRibbon.setCascadeColorEnabled(true);
        this._imgRibbon.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgRibbon, 0.2281, 0.8299);
        let _imgRibbonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRibbon);
        this._imgRibbon.loadTexture("around-the-world/RibbonRed.png", 1);
        this._imgRibbon.setUnifySizeEnabled(false);
        this._imgRibbon.ignoreContentAdaptWithSize(false);
        this._imgRibbon.setContentSize(cc.size(105, 27));
        this._imgRibbon.setTouchEnabled(false);

    },



});

/**
 * Create AroundTheWorldRewardBox
 * @returns {_ccs.AroundTheWorldRewardBox}
 */
_ccs.AroundTheWorldRewardBox.create = function () {
    return new _ccs.AroundTheWorldRewardBox();
};
