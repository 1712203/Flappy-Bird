/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.RankingIcon
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.RankingIcon = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtRank: null,
    /** @type {ccui.ImageView} */
    _imgRedDot: null,
    /** @type {ccui.ImageView} */
    _imgTimeLeft: null,
    /** @type {ck.Text} */
    _txtTimeLeft: null,


    /**
     * _ccs.RankingIcon constructor
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
        this._root.setContentSize(cc.size(100, 100));

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._root.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.48);
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(0.48);
        this._imgBackground.loadTexture("icons/color/events/IconEventBackground.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setContentSize(cc.size(90, 90));
        this._imgBackground.setTouchEnabled(false);

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._root.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.59);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.59);
        this._imgIcon.loadTexture("icons/color/basic/Ranking.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(110, 110));
        this._imgIcon.setTouchEnabled(false);

        ///// # _txtRank
        this._txtRank = new ck.Text();
        this._txtRank.setName("_txtRank");
        this._root.addChild(this._txtRank);
        this._txtRank.setCascadeOpacityEnabled(true);
        this._txtRank.setCascadeColorEnabled(true);
        this._txtRank.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRank, 0.5, 0.6);
        let _txtRankLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRank);
        _txtRankLayoutComponent.setPositionPercentXEnabled(true);
        _txtRankLayoutComponent.setPositionPercentX(0.5);
        _txtRankLayoutComponent.setPositionPercentYEnabled(true);
        _txtRankLayoutComponent.setPositionPercentY(0.6);
        this._txtRank.setTouchEnabled(false);
        this._txtRank.ignoreContentAdaptWithSize(true);
        this._txtRank.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtRank.setDefaultFontSize(32);
        this._txtRank.setString("10");
        this._txtRank.setTextHorizontalAlignment(0);
        this._txtRank.setTextVerticalAlignment(0);
        this._txtRank.enableOutline(cc.color(67, 40, 0, 255), 2);

        ///// # _imgRedDot
        this._imgRedDot = new ccui.ImageView();
        this._imgRedDot.setName("_imgRedDot");
        this._root.addChild(this._imgRedDot);
        this._imgRedDot.setCascadeOpacityEnabled(true);
        this._imgRedDot.setCascadeColorEnabled(true);
        this._imgRedDot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRedDot, 0.85, 0.75);
        let _imgRedDotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRedDot);
        _imgRedDotLayoutComponent.setPositionPercentXEnabled(true);
        _imgRedDotLayoutComponent.setPositionPercentX(0.85);
        _imgRedDotLayoutComponent.setPositionPercentYEnabled(true);
        _imgRedDotLayoutComponent.setPositionPercentY(0.75);
        this._imgRedDot.loadTexture("basics/other/RedDot.png", 1);
        this._imgRedDot.setUnifySizeEnabled(false);
        this._imgRedDot.ignoreContentAdaptWithSize(false);
        this._imgRedDot.setContentSize(cc.size(31, 31));
        this._imgRedDot.setTouchEnabled(false);

        ///// # _imgTimeLeft
        this._imgTimeLeft = new ccui.ImageView();
        this._imgTimeLeft.setName("_imgTimeLeft");
        this._root.addChild(this._imgTimeLeft);
        this._imgTimeLeft.setCascadeOpacityEnabled(true);
        this._imgTimeLeft.setCascadeColorEnabled(true);
        this._imgTimeLeft.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTimeLeft, 0.5, 0.48);
        let _imgTimeLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTimeLeft);
        _imgTimeLeftLayoutComponent.setPositionPercentXEnabled(true);
        _imgTimeLeftLayoutComponent.setPositionPercentX(0.5);
        _imgTimeLeftLayoutComponent.setPositionPercentYEnabled(true);
        _imgTimeLeftLayoutComponent.setPositionPercentY(0.48);
        this._imgTimeLeft.loadTexture("icons/color/events/IconEventTimerBackground.png", 1);
        this._imgTimeLeft.setUnifySizeEnabled(false);
        this._imgTimeLeft.ignoreContentAdaptWithSize(false);
        this._imgTimeLeft.setContentSize(cc.size(90, 90));
        this._imgTimeLeft.setTouchEnabled(false);

        ///// # _txtTimeLeft
        this._txtTimeLeft = new ck.Text();
        this._txtTimeLeft.setName("_txtTimeLeft");
        this._root.addChild(this._txtTimeLeft);
        this._txtTimeLeft.setCascadeOpacityEnabled(true);
        this._txtTimeLeft.setCascadeColorEnabled(true);
        this._txtTimeLeft.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTimeLeft, 0.5, 0.16);
        let _txtTimeLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTimeLeft);
        _txtTimeLeftLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentX(0.5);
        _txtTimeLeftLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentY(0.16);
        this._txtTimeLeft.setTouchEnabled(false);
        this._txtTimeLeft.ignoreContentAdaptWithSize(true);
        this._txtTimeLeft.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtTimeLeft.setDefaultFontSize(18);
        this._txtTimeLeft.setTextHorizontalAlignment(1);
        this._txtTimeLeft.setTextVerticalAlignment(1);
        this._txtTimeLeft.enableOutline(cc.color(0, 0, 0, 255), 1);

    },



});

/**
 * Create RankingIcon
 * @returns {_ccs.RankingIcon}
 */
_ccs.RankingIcon.create = function () {
    return new _ccs.RankingIcon();
};
