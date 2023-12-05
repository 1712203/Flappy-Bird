/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.LeagueResultPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.LeagueResultPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ccui.ImageView} */
    _imgTextHeader: null,
    /** @type {ccui.Layout} */
    _layoutPopupUp: null,
    /** @type {ccui.ImageView} */
    _imgArrowUp: null,
    /** @type {ccui.ImageView} */
    _imgLeagueCurUp: null,
    /** @type {ck.Text} */
    _txtNameCurUp: null,
    /** @type {ccui.ImageView} */
    _imgLeagueUp: null,
    /** @type {ccui.ImageView} */
    _imgGlow: null,
    /** @type {ck.Text} */
    _txtNameUp: null,
    /** @type {ccui.Layout} */
    _layoutPopupDown: null,
    /** @type {ccui.ImageView} */
    _imgArrowDown: null,
    /** @type {ccui.ImageView} */
    _imgLeagueCurDown: null,
    /** @type {ck.Text} */
    _txtLeagueCurDown: null,
    /** @type {ccui.ImageView} */
    _imgLeagueDown: null,
    /** @type {ck.Text} */
    _txtLeagueDownName: null,
    /** @type {ck.Text} */
    _txtTapToClose: null,


    /**
     * _ccs.LeagueResultPopup constructor
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
        this._layoutPopup.setPosition(0, -0.0001);
        let _layoutPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        this._layoutPopup.setTouchEnabled(false);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(540, 830));

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._layoutPopup.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 1.0007);
        this._imgHeader.setRotation(-0.1547);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(1.0007);
        this._imgHeader.loadTexture("basics/popup/HeaderRanking.png", 1);
        this._imgHeader.setUnifySizeEnabled(false);
        this._imgHeader.ignoreContentAdaptWithSize(false);
        this._imgHeader.setContentSize(cc.size(409, 99));
        this._imgHeader.setTouchEnabled(false);

        ///// # _imgTextHeader
        this._imgTextHeader = new ccui.ImageView();
        this._imgTextHeader.setName("_imgTextHeader");
        this._imgHeader.addChild(this._imgTextHeader);
        this._imgTextHeader.setCascadeOpacityEnabled(true);
        this._imgTextHeader.setCascadeColorEnabled(true);
        this._imgTextHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTextHeader, 0.5, 0.5);
        this._imgTextHeader.setRotation(-0.1547);
        let _imgTextHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTextHeader);
        _imgTextHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgTextHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgTextHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgTextHeaderLayoutComponent.setPositionPercentY(0.5);
        this._imgTextHeader.loadTexture("texts/league/League_Down.png", 1);
        this._imgTextHeader.setTouchEnabled(false);

        ///// # _layoutPopupUp
        this._layoutPopupUp = new ccui.Layout();
        this._layoutPopupUp.setName("_layoutPopupUp");
        this._layoutPopup.addChild(this._layoutPopupUp);
        this._layoutPopupUp.setCascadeOpacityEnabled(true);
        this._layoutPopupUp.setCascadeColorEnabled(true);
        this._layoutPopupUp.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutPopupUp, 0.5, 0.5);
        let _layoutPopupUpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopupUp);
        _layoutPopupUpLayoutComponent.setPositionPercentXEnabled(true);
        _layoutPopupUpLayoutComponent.setPositionPercentX(0.5);
        _layoutPopupUpLayoutComponent.setPositionPercentYEnabled(true);
        _layoutPopupUpLayoutComponent.setPositionPercentY(0.5);
        this._layoutPopupUp.setTouchEnabled(false);
        this._layoutPopupUp.setUnifySizeEnabled(false);
        this._layoutPopupUp.ignoreContentAdaptWithSize(false);
        this._layoutPopupUp.setContentSize(cc.size(540, 830));

        ///// # _imgArrowUp
        this._imgArrowUp = new ccui.ImageView();
        this._imgArrowUp.setName("_imgArrowUp");
        this._layoutPopupUp.addChild(this._imgArrowUp);
        this._imgArrowUp.setCascadeOpacityEnabled(true);
        this._imgArrowUp.setCascadeColorEnabled(true);
        this._imgArrowUp.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgArrowUp, 0.3472, 0.6676);
        let _imgArrowUpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgArrowUp);
        _imgArrowUpLayoutComponent.setPositionPercentXEnabled(true);
        _imgArrowUpLayoutComponent.setPositionPercentX(0.3472);
        _imgArrowUpLayoutComponent.setPositionPercentYEnabled(true);
        _imgArrowUpLayoutComponent.setPositionPercentY(0.6676);
        this._imgArrowUp.loadTexture("league/Arrow_Blue.png", 1);
        this._imgArrowUp.setUnifySizeEnabled(false);
        this._imgArrowUp.ignoreContentAdaptWithSize(false);
        this._imgArrowUp.setContentSize(cc.size(100, 138));
        this._imgArrowUp.setTouchEnabled(false);

        ///// # _imgLeagueCurUp
        this._imgLeagueCurUp = new ccui.ImageView();
        this._imgLeagueCurUp.setName("_imgLeagueCurUp");
        this._layoutPopupUp.addChild(this._imgLeagueCurUp);
        this._imgLeagueCurUp.setCascadeOpacityEnabled(true);
        this._imgLeagueCurUp.setCascadeColorEnabled(true);
        this._imgLeagueCurUp.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLeagueCurUp, 0.2225, 0.4233);
        this._imgLeagueCurUp.setScale(1.26, 1.26);
        this._imgLeagueCurUp.setRotation(-0.1539);
        let _imgLeagueCurUpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLeagueCurUp);
        _imgLeagueCurUpLayoutComponent.setPositionPercentXEnabled(true);
        _imgLeagueCurUpLayoutComponent.setPositionPercentX(0.2225);
        _imgLeagueCurUpLayoutComponent.setPositionPercentYEnabled(true);
        _imgLeagueCurUpLayoutComponent.setPositionPercentY(0.4233);
        this._imgLeagueCurUp.loadTexture("league/league_4.png", 1);
        this._imgLeagueCurUp.setUnifySizeEnabled(false);
        this._imgLeagueCurUp.ignoreContentAdaptWithSize(false);
        this._imgLeagueCurUp.setContentSize(cc.size(212, 188));
        this._imgLeagueCurUp.setTouchEnabled(false);

        ///// # _txtNameCurUp
        this._txtNameCurUp = new ck.Text();
        this._txtNameCurUp.setName("_txtNameCurUp");
        this._imgLeagueCurUp.addChild(this._txtNameCurUp);
        this._txtNameCurUp.setCascadeOpacityEnabled(true);
        this._txtNameCurUp.setCascadeColorEnabled(true);
        this._txtNameCurUp.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNameCurUp, 0.5, -0.14);
        let _txtNameCurUpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNameCurUp);
        _txtNameCurUpLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameCurUpLayoutComponent.setPositionPercentX(0.5);
        _txtNameCurUpLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameCurUpLayoutComponent.setPositionPercentY(-0.14);
        this._txtNameCurUp.setTouchEnabled(false);
        this._txtNameCurUp.ignoreContentAdaptWithSize(true);
        this._txtNameCurUp.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtNameCurUp.setDefaultFontSize(60);
        this._txtNameCurUp.setTextHorizontalAlignment(1);
        this._txtNameCurUp.setTextVerticalAlignment(1);

        ///// # _imgLeagueUp
        this._imgLeagueUp = new ccui.ImageView();
        this._imgLeagueUp.setName("_imgLeagueUp");
        this._layoutPopupUp.addChild(this._imgLeagueUp);
        this._imgLeagueUp.setCascadeOpacityEnabled(true);
        this._imgLeagueUp.setCascadeColorEnabled(true);
        this._imgLeagueUp.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLeagueUp, 0.7743, 0.722);
        this._imgLeagueUp.setScale(1.31, 1.31);
        this._imgLeagueUp.setRotationX(-0.1535);
        this._imgLeagueUp.setRotationY(-0.1548);
        let _imgLeagueUpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLeagueUp);
        _imgLeagueUpLayoutComponent.setPositionPercentXEnabled(true);
        _imgLeagueUpLayoutComponent.setPositionPercentX(0.7743);
        _imgLeagueUpLayoutComponent.setPositionPercentYEnabled(true);
        _imgLeagueUpLayoutComponent.setPositionPercentY(0.722);
        this._imgLeagueUp.loadTexture("league/league_5.png", 1);
        this._imgLeagueUp.setUnifySizeEnabled(false);
        this._imgLeagueUp.ignoreContentAdaptWithSize(false);
        this._imgLeagueUp.setContentSize(cc.size(219, 207));
        this._imgLeagueUp.setTouchEnabled(false);

        ///// # _imgGlow
        this._imgGlow = new ccui.ImageView();
        this._imgGlow.setName("_imgGlow");
        this._imgLeagueUp.addChild(this._imgGlow);
        this._imgGlow.setCascadeOpacityEnabled(true);
        this._imgGlow.setCascadeColorEnabled(true);
        this._imgGlow.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGlow, 0.5, 0.5);
        this._imgGlow.setScale(1.05, 1.05);
        let _imgGlowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGlow);
        _imgGlowLayoutComponent.setPositionPercentXEnabled(true);
        _imgGlowLayoutComponent.setPositionPercentX(0.5);
        _imgGlowLayoutComponent.setPositionPercentYEnabled(true);
        _imgGlowLayoutComponent.setPositionPercentY(0.5);
        this._imgGlow.loadTexture("vfx/glows/Glow_01.png", 1);
        this._imgGlow.setUnifySizeEnabled(false);
        this._imgGlow.ignoreContentAdaptWithSize(false);
        this._imgGlow.setContentSize(cc.size(317, 314));
        this._imgGlow.setTouchEnabled(false);

        ///// # _txtNameUp
        this._txtNameUp = new ck.Text();
        this._txtNameUp.setName("_txtNameUp");
        this._imgLeagueUp.addChild(this._txtNameUp);
        this._txtNameUp.setCascadeOpacityEnabled(true);
        this._txtNameUp.setCascadeColorEnabled(true);
        this._txtNameUp.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNameUp, 0.5373, -0.163);
        this._txtNameUp.setTextColor(cc.color(255, 255, 0, 255));
        let _txtNameUpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNameUp);
        _txtNameUpLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameUpLayoutComponent.setPositionPercentX(0.5373);
        _txtNameUpLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameUpLayoutComponent.setPositionPercentY(-0.163);
        this._txtNameUp.setTouchEnabled(false);
        this._txtNameUp.ignoreContentAdaptWithSize(true);
        this._txtNameUp.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtNameUp.setDefaultFontSize(60);
        this._txtNameUp.setTextHorizontalAlignment(1);
        this._txtNameUp.setTextVerticalAlignment(1);

        ///// # _layoutPopupDown
        this._layoutPopupDown = new ccui.Layout();
        this._layoutPopupDown.setName("_layoutPopupDown");
        this._layoutPopup.addChild(this._layoutPopupDown);
        this._layoutPopupDown.setCascadeOpacityEnabled(true);
        this._layoutPopupDown.setCascadeColorEnabled(true);
        this._layoutPopupDown.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutPopupDown, 0.5, 0.5);
        let _layoutPopupDownLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopupDown);
        _layoutPopupDownLayoutComponent.setPositionPercentXEnabled(true);
        _layoutPopupDownLayoutComponent.setPositionPercentX(0.5);
        _layoutPopupDownLayoutComponent.setPositionPercentYEnabled(true);
        _layoutPopupDownLayoutComponent.setPositionPercentY(0.5);
        this._layoutPopupDown.setTouchEnabled(false);
        this._layoutPopupDown.setUnifySizeEnabled(false);
        this._layoutPopupDown.ignoreContentAdaptWithSize(false);
        this._layoutPopupDown.setContentSize(cc.size(540, 830));

        ///// # _imgArrowDown
        this._imgArrowDown = new ccui.ImageView();
        this._imgArrowDown.setName("_imgArrowDown");
        this._layoutPopupDown.addChild(this._imgArrowDown);
        this._imgArrowDown.setCascadeOpacityEnabled(true);
        this._imgArrowDown.setCascadeColorEnabled(true);
        this._imgArrowDown.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgArrowDown, 0.6573, 0.6319);
        let _imgArrowDownLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgArrowDown);
        _imgArrowDownLayoutComponent.setPositionPercentXEnabled(true);
        _imgArrowDownLayoutComponent.setPositionPercentX(0.6573);
        _imgArrowDownLayoutComponent.setPositionPercentYEnabled(true);
        _imgArrowDownLayoutComponent.setPositionPercentY(0.6319);
        this._imgArrowDown.loadTexture("league/Arrow_Red.png", 1);
        this._imgArrowDown.setUnifySizeEnabled(false);
        this._imgArrowDown.ignoreContentAdaptWithSize(false);
        this._imgArrowDown.setContentSize(cc.size(126, 113));
        this._imgArrowDown.setTouchEnabled(false);

        ///// # _imgLeagueCurDown
        this._imgLeagueCurDown = new ccui.ImageView();
        this._imgLeagueCurDown.setName("_imgLeagueCurDown");
        this._layoutPopupDown.addChild(this._imgLeagueCurDown);
        this._imgLeagueCurDown.setCascadeOpacityEnabled(true);
        this._imgLeagueCurDown.setCascadeColorEnabled(true);
        this._imgLeagueCurDown.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLeagueCurDown, 0.2086, 0.7181);
        this._imgLeagueCurDown.setScale(1.31, 1.31);
        this._imgLeagueCurDown.setRotationX(-0.1535);
        this._imgLeagueCurDown.setRotationY(-0.1548);
        let _imgLeagueCurDownLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLeagueCurDown);
        _imgLeagueCurDownLayoutComponent.setPositionPercentXEnabled(true);
        _imgLeagueCurDownLayoutComponent.setPositionPercentX(0.2086);
        _imgLeagueCurDownLayoutComponent.setPositionPercentYEnabled(true);
        _imgLeagueCurDownLayoutComponent.setPositionPercentY(0.7181);
        this._imgLeagueCurDown.loadTexture("league/league_5.png", 1);
        this._imgLeagueCurDown.setUnifySizeEnabled(false);
        this._imgLeagueCurDown.ignoreContentAdaptWithSize(false);
        this._imgLeagueCurDown.setContentSize(cc.size(219, 207));
        this._imgLeagueCurDown.setTouchEnabled(false);

        ///// # _txtLeagueCurDown
        this._txtLeagueCurDown = new ck.Text();
        this._txtLeagueCurDown.setName("_txtLeagueCurDown");
        this._imgLeagueCurDown.addChild(this._txtLeagueCurDown);
        this._txtLeagueCurDown.setCascadeOpacityEnabled(true);
        this._txtLeagueCurDown.setCascadeColorEnabled(true);
        this._txtLeagueCurDown.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLeagueCurDown, 0.5, -0.1355);
        this._txtLeagueCurDown.setTextColor(cc.color(255, 255, 0, 255));
        let _txtLeagueCurDownLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLeagueCurDown);
        _txtLeagueCurDownLayoutComponent.setPositionPercentXEnabled(true);
        _txtLeagueCurDownLayoutComponent.setPositionPercentX(0.5);
        _txtLeagueCurDownLayoutComponent.setPositionPercentYEnabled(true);
        _txtLeagueCurDownLayoutComponent.setPositionPercentY(-0.1355);
        this._txtLeagueCurDown.setTouchEnabled(false);
        this._txtLeagueCurDown.ignoreContentAdaptWithSize(true);
        this._txtLeagueCurDown.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLeagueCurDown.setDefaultFontSize(60);
        this._txtLeagueCurDown.setTextHorizontalAlignment(1);
        this._txtLeagueCurDown.setTextVerticalAlignment(1);

        ///// # _imgLeagueDown
        this._imgLeagueDown = new ccui.ImageView();
        this._imgLeagueDown.setName("_imgLeagueDown");
        this._layoutPopupDown.addChild(this._imgLeagueDown);
        this._imgLeagueDown.setCascadeOpacityEnabled(true);
        this._imgLeagueDown.setCascadeColorEnabled(true);
        this._imgLeagueDown.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLeagueDown, 0.7636, 0.3655);
        this._imgLeagueDown.setScale(1.26, 1.26);
        this._imgLeagueDown.setRotationX(-0.154);
        this._imgLeagueDown.setRotationY(-0.1554);
        let _imgLeagueDownLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLeagueDown);
        _imgLeagueDownLayoutComponent.setPositionPercentXEnabled(true);
        _imgLeagueDownLayoutComponent.setPositionPercentX(0.7636);
        _imgLeagueDownLayoutComponent.setPositionPercentYEnabled(true);
        _imgLeagueDownLayoutComponent.setPositionPercentY(0.3655);
        this._imgLeagueDown.loadTexture("league/league_4.png", 1);
        this._imgLeagueDown.setUnifySizeEnabled(false);
        this._imgLeagueDown.ignoreContentAdaptWithSize(false);
        this._imgLeagueDown.setContentSize(cc.size(212, 188));
        this._imgLeagueDown.setTouchEnabled(false);

        ///// # _txtLeagueDownName
        this._txtLeagueDownName = new ck.Text();
        this._txtLeagueDownName.setName("_txtLeagueDownName");
        this._imgLeagueDown.addChild(this._txtLeagueDownName);
        this._txtLeagueDownName.setCascadeOpacityEnabled(true);
        this._txtLeagueDownName.setCascadeColorEnabled(true);
        this._txtLeagueDownName.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLeagueDownName, 0.5, -0.124);
        let _txtLeagueDownNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLeagueDownName);
        _txtLeagueDownNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtLeagueDownNameLayoutComponent.setPositionPercentX(0.5);
        _txtLeagueDownNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtLeagueDownNameLayoutComponent.setPositionPercentY(-0.124);
        this._txtLeagueDownName.setTouchEnabled(false);
        this._txtLeagueDownName.ignoreContentAdaptWithSize(true);
        this._txtLeagueDownName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLeagueDownName.setDefaultFontSize(60);
        this._txtLeagueDownName.setTextHorizontalAlignment(1);
        this._txtLeagueDownName.setTextVerticalAlignment(1);

        ///// # _txtTapToClose
        this._txtTapToClose = new ck.Text();
        this._txtTapToClose.setName("_txtTapToClose");
        this._layoutPopup.addChild(this._txtTapToClose);
        this._txtTapToClose.setCascadeOpacityEnabled(true);
        this._txtTapToClose.setCascadeColorEnabled(true);
        this._txtTapToClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTapToClose, 0.5, 0.0535);
        this._txtTapToClose.setTextColor(cc.color(230, 230, 250, 255));
        let _txtTapToCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTapToClose);
        _txtTapToCloseLayoutComponent.setPositionPercentXEnabled(true);
        _txtTapToCloseLayoutComponent.setPositionPercentX(0.5);
        _txtTapToCloseLayoutComponent.setPositionPercentYEnabled(true);
        _txtTapToCloseLayoutComponent.setPositionPercentY(0.0535);
        this._txtTapToClose.setTouchEnabled(false);
        this._txtTapToClose.ignoreContentAdaptWithSize(true);
        this._txtTapToClose.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTapToClose.setDefaultFontSize(30);
        this._txtTapToClose.setString(gm.localize.getText("TXT_TAP_TO_CONTINUE"));
        this._txtTapToClose.setTextHorizontalAlignment(1);
        this._txtTapToClose.setTextVerticalAlignment(1);

    },



});

/**
 * Create LeagueResultPopup
 * @returns {_ccs.LeagueResultPopup}
 */
_ccs.LeagueResultPopup.create = function () {
    return new _ccs.LeagueResultPopup();
};
