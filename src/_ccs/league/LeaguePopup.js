/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.LeaguePopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.LeaguePopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {ccui.ImageView} */
    _imgFont: null,
    /** @type {ccui.ImageView} */
    _imgBase: null,
    /** @type {ccui.ImageView} */
    _iconLeague: null,
    /** @type {ccui.ImageView} */
    imgTimeBg: null,
    /** @type {ccui.ImageView} */
    imgClock: null,
    /** @type {ck.Text} */
    _txtTimeLeft: null,
    /** @type {ck.Text} */
    _txtWaitForSorting: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtGroupName: null,
    /** @type {ccui.Layout} */
    _panelLeagueUp: null,
    /** @type {ccui.ImageView} */
    Image_1: null,
    /** @type {ck.Text} */
    _txtLeagueUp: null,
    /** @type {ccui.Layout} */
    _panelLeagueSafe: null,
    /** @type {ccui.ImageView} */
    Image_1_0: null,
    /** @type {ck.Text} */
    _txtLeagueSafe: null,
    /** @type {ccui.Layout} */
    _panelLeagueDown: null,
    /** @type {ccui.ImageView} */
    Image_1_0_0: null,
    /** @type {ck.Text} */
    _txtLeagueDown: null,
    /** @type {ccui.ScrollView} */
    _scrollView: null,
    /** @type {ccui.Layout} */
    _panelNotEnoughPlayers: null,
    /** @type {ck.Text} */
    _txtNotEnoughPlayer: null,
    /** @type {LeaguePlayerWidget} */
    _me: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.ImageView} */
    _imgInfo: null,
    /** @type {ccui.ImageView} */
    _imgInfoIcon: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtHint: null,
    /** @type {LeaguePlayerDetailPopup} */
    _playerDetail: null,


    /**
     * _ccs.LeaguePopup constructor
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
        this._layoutPopup.setPosition(-0.0002, 0.0004);
        let _layoutPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        this._layoutPopup.setTouchEnabled(true);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(540, 930));

        ///// # _imgBack
        this._imgBack = new ccui.ImageView();
        this._imgBack.setName("_imgBack");
        this._layoutPopup.addChild(this._imgBack);
        this._imgBack.setCascadeOpacityEnabled(true);
        this._imgBack.setCascadeColorEnabled(true);
        this._imgBack.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBack, 0.5, 0.5);
        let _imgBackLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBack);
        _imgBackLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackLayoutComponent.setPositionPercentX(0.5);
        _imgBackLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackLayoutComponent.setPositionPercentY(0.5);
        _imgBackLayoutComponent.setPercentWidthEnabled(true);
        _imgBackLayoutComponent.setPercentWidth(1);
        _imgBackLayoutComponent.setPercentHeightEnabled(true);
        _imgBackLayoutComponent.setPercentHeight(1);
        this._imgBack.loadTexture("basics/popup/Back.png", 1);
        this._imgBack.setUnifySizeEnabled(false);
        this._imgBack.ignoreContentAdaptWithSize(false);
        this._imgBack.setScale9Enabled(true);
        this._imgBack.setCapInsets(cc.rect(69, 57, 72, 61));
        ck.UIUtils.setSizePercent(this._imgBack, 1, 1);
        this._imgBack.setTouchEnabled(true);

        ///// # _imgFont
        this._imgFont = new ccui.ImageView();
        this._imgFont.setName("_imgFont");
        this._layoutPopup.addChild(this._imgFont);
        this._imgFont.setCascadeOpacityEnabled(true);
        this._imgFont.setCascadeColorEnabled(true);
        this._imgFont.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgFont, 0.5, 0.8069);
        let _imgFontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFont);
        _imgFontLayoutComponent.setPositionPercentXEnabled(true);
        _imgFontLayoutComponent.setPositionPercentX(0.5);
        _imgFontLayoutComponent.setPositionPercentYEnabled(true);
        _imgFontLayoutComponent.setPositionPercentY(0.8069);
        _imgFontLayoutComponent.setPercentWidthEnabled(true);
        _imgFontLayoutComponent.setPercentWidth(0.95);
        _imgFontLayoutComponent.setPercentHeightEnabled(true);
        _imgFontLayoutComponent.setPercentHeight(0.7452);
        this._imgFont.loadTexture("basics/popup/Font.png", 1);
        this._imgFont.setUnifySizeEnabled(false);
        this._imgFont.ignoreContentAdaptWithSize(false);
        this._imgFont.setScale9Enabled(true);
        this._imgFont.setCapInsets(cc.rect(69, 57, 15, 31));
        ck.UIUtils.setSizePercent(this._imgFont, 0.95, 0.7452);
        this._imgFont.setTouchEnabled(false);

        ///// # _imgBase
        this._imgBase = new ccui.ImageView();
        this._imgBase.setName("_imgBase");
        this._layoutPopup.addChild(this._imgBase);
        this._imgBase.setCascadeOpacityEnabled(true);
        this._imgBase.setCascadeColorEnabled(true);
        this._imgBase.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBase, 0.1871, 0.8573);
        let _imgBaseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBase);
        _imgBaseLayoutComponent.setPositionPercentXEnabled(true);
        _imgBaseLayoutComponent.setPositionPercentX(0.1871);
        _imgBaseLayoutComponent.setPositionPercentYEnabled(true);
        _imgBaseLayoutComponent.setPositionPercentY(0.8573);
        this._imgBase.loadTexture("league/Base_Icon.png", 1);
        this._imgBase.setUnifySizeEnabled(false);
        this._imgBase.ignoreContentAdaptWithSize(false);
        this._imgBase.setContentSize(cc.size(181, 88));
        this._imgBase.setTouchEnabled(false);

        ///// # _iconLeague
        this._iconLeague = new ccui.ImageView();
        this._iconLeague.setName("_iconLeague");
        this._imgBase.addChild(this._iconLeague);
        this._iconLeague.setCascadeOpacityEnabled(true);
        this._iconLeague.setCascadeColorEnabled(true);
        this._iconLeague.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._iconLeague, 0.511, 0.4398);
        this._iconLeague.setScale(0.7, 0.7);
        let _iconLeagueLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._iconLeague);
        _iconLeagueLayoutComponent.setPositionPercentXEnabled(true);
        _iconLeagueLayoutComponent.setPositionPercentX(0.511);
        _iconLeagueLayoutComponent.setPositionPercentYEnabled(true);
        _iconLeagueLayoutComponent.setPositionPercentY(0.4398);
        this._iconLeague.loadTexture("league/league_5.png", 1);
        this._iconLeague.setUnifySizeEnabled(false);
        this._iconLeague.ignoreContentAdaptWithSize(false);
        this._iconLeague.setContentSize(cc.size(219, 207));
        this._iconLeague.setTouchEnabled(false);

        ///// # imgTimeBg
        this.imgTimeBg = new ccui.ImageView();
        this.imgTimeBg.setName("imgTimeBg");
        this._layoutPopup.addChild(this.imgTimeBg);
        this.imgTimeBg.setCascadeOpacityEnabled(true);
        this.imgTimeBg.setCascadeColorEnabled(true);
        this.imgTimeBg.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgTimeBg, 0.8461, 0.8377);
        let imgTimeBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgTimeBg);
        imgTimeBgLayoutComponent.setPositionPercentXEnabled(true);
        imgTimeBgLayoutComponent.setPositionPercentX(0.8461);
        imgTimeBgLayoutComponent.setPositionPercentYEnabled(true);
        imgTimeBgLayoutComponent.setPositionPercentY(0.8377);
        this.imgTimeBg.loadTexture("basics/other/Box_11.png", 1);
        this.imgTimeBg.setUnifySizeEnabled(false);
        this.imgTimeBg.ignoreContentAdaptWithSize(false);
        this.imgTimeBg.setScale9Enabled(true);
        this.imgTimeBg.setCapInsets(cc.rect(24, 9, 25, 11));
        this.imgTimeBg.setContentSize(cc.size(130.4196, 33.0061));
        this.imgTimeBg.setTouchEnabled(false);

        ///// # imgClock
        this.imgClock = new ccui.ImageView();
        this.imgClock.setName("imgClock");
        this.imgTimeBg.addChild(this.imgClock);
        this.imgClock.setCascadeOpacityEnabled(true);
        this.imgClock.setCascadeColorEnabled(true);
        this.imgClock.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgClock, 0.1149, 0.558);
        this.imgClock.setScale(0.8, 0.8);
        let imgClockLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgClock);
        imgClockLayoutComponent.setPositionPercentXEnabled(true);
        imgClockLayoutComponent.setPositionPercentX(0.1149);
        imgClockLayoutComponent.setPositionPercentYEnabled(true);
        imgClockLayoutComponent.setPositionPercentY(0.558);
        this.imgClock.loadTexture("continuous-purchase_clock.png", 1);
        this.imgClock.setUnifySizeEnabled(false);
        this.imgClock.ignoreContentAdaptWithSize(false);
        this.imgClock.setContentSize(cc.size(45, 53));
        this.imgClock.setTouchEnabled(false);

        ///// # _txtTimeLeft
        this._txtTimeLeft = new ck.Text();
        this._txtTimeLeft.setName("_txtTimeLeft");
        this.imgTimeBg.addChild(this._txtTimeLeft);
        this._txtTimeLeft.setCascadeOpacityEnabled(true);
        this._txtTimeLeft.setCascadeColorEnabled(true);
        this._txtTimeLeft.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTimeLeft, 0.5964, 0.4739);
        let _txtTimeLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTimeLeft);
        _txtTimeLeftLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentX(0.5964);
        _txtTimeLeftLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentY(0.4739);
        this._txtTimeLeft.setTouchEnabled(false);
        this._txtTimeLeft.setUnifySizeEnabled(false);
        this._txtTimeLeft.ignoreContentAdaptWithSize(false);
        this._txtTimeLeft.setContentSize(cc.size(87.9427, 34));
        this._txtTimeLeft.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTimeLeft.setDefaultFontSize(28);
        this._txtTimeLeft.setString(gm.localize.getText("TXT_5D_3H"));
        this._txtTimeLeft.setTextHorizontalAlignment(1);
        this._txtTimeLeft.setTextVerticalAlignment(1);

        ///// # _txtWaitForSorting
        this._txtWaitForSorting = new ck.Text();
        this._txtWaitForSorting.setName("_txtWaitForSorting");
        this._layoutPopup.addChild(this._txtWaitForSorting);
        this._txtWaitForSorting.setCascadeOpacityEnabled(true);
        this._txtWaitForSorting.setCascadeColorEnabled(true);
        this._txtWaitForSorting.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtWaitForSorting, 0.6631, 0.8384);
        let _txtWaitForSortingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtWaitForSorting);
        _txtWaitForSortingLayoutComponent.setPositionPercentXEnabled(true);
        _txtWaitForSortingLayoutComponent.setPositionPercentX(0.6631);
        _txtWaitForSortingLayoutComponent.setPositionPercentYEnabled(true);
        _txtWaitForSortingLayoutComponent.setPositionPercentY(0.8384);
        this._txtWaitForSorting.setTouchEnabled(false);
        this._txtWaitForSorting.setUnifySizeEnabled(false);
        this._txtWaitForSorting.ignoreContentAdaptWithSize(false);
        this._txtWaitForSorting.setContentSize(cc.size(322.4557, 45.2299));
        this._txtWaitForSorting.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtWaitForSorting.setDefaultFontSize(20);
        this._txtWaitForSorting.setTextHorizontalAlignment(1);
        this._txtWaitForSorting.setTextVerticalAlignment(1);

        ///// # _txtGroupName
        this._txtGroupName = new ck.CustomRichTextExtend(cc.size(331.5588, 56));
        this._txtGroupName.setName("_txtGroupName");
        this._layoutPopup.addChild(this._txtGroupName);
        this._txtGroupName.setCascadeOpacityEnabled(true);
        this._txtGroupName.setCascadeColorEnabled(true);
        this._txtGroupName.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGroupName, 0.3599, 0.915);
        this._txtGroupName.setDefaultColor(cc.color(58, 193, 180, 255));
        let _txtGroupNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGroupName);
        _txtGroupNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtGroupNameLayoutComponent.setPositionPercentX(0.3599);
        _txtGroupNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtGroupNameLayoutComponent.setPositionPercentY(0.915);
        this._txtGroupName.setTouchEnabled(false);
        this._txtGroupName.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtGroupName.setDefaultSize(50);
        this._txtGroupName.setDefaultAlignHorizontal(0);
        this._txtGroupName.setDefaultAlignVertical(5);

        ///// # _panelLeagueUp
        this._panelLeagueUp = new ccui.Layout();
        this._panelLeagueUp.setName("_panelLeagueUp");
        this._layoutPopup.addChild(this._panelLeagueUp);
        this._panelLeagueUp.setCascadeOpacityEnabled(true);
        this._panelLeagueUp.setCascadeColorEnabled(true);
        this._panelLeagueUp.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._panelLeagueUp, 0.1824, 0.7659);
        let _panelLeagueUpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._panelLeagueUp);
        _panelLeagueUpLayoutComponent.setPositionPercentXEnabled(true);
        _panelLeagueUpLayoutComponent.setPositionPercentX(0.1824);
        _panelLeagueUpLayoutComponent.setPositionPercentYEnabled(true);
        _panelLeagueUpLayoutComponent.setPositionPercentY(0.7659);
        _panelLeagueUpLayoutComponent.setPercentWidthEnabled(true);
        _panelLeagueUpLayoutComponent.setPercentWidth(0.2544);
        this._panelLeagueUp.setTouchEnabled(true);
        this._panelLeagueUp.setUnifySizeEnabled(false);
        this._panelLeagueUp.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._panelLeagueUp, 0.2544);
        this._panelLeagueUp.setContentSize(cc.size(this._panelLeagueUp.width, 50));

        ///// # Image_1
        this.Image_1 = new ccui.ImageView();
        this.Image_1.setName("Image_1");
        this._panelLeagueUp.addChild(this.Image_1);
        this.Image_1.setCascadeOpacityEnabled(true);
        this.Image_1.setCascadeColorEnabled(true);
        this.Image_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.Image_1, 0.2257, 0.5122);
        this.Image_1.setScale(0.83, 0.83);
        let Image_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.Image_1);
        Image_1LayoutComponent.setPositionPercentXEnabled(true);
        Image_1LayoutComponent.setPositionPercentX(0.2257);
        Image_1LayoutComponent.setPositionPercentYEnabled(true);
        Image_1LayoutComponent.setPositionPercentY(0.5122);
        this.Image_1.loadTexture("league/Box_League_UP.png", 1);
        this.Image_1.setUnifySizeEnabled(false);
        this.Image_1.ignoreContentAdaptWithSize(false);
        this.Image_1.setContentSize(cc.size(26, 26));
        this.Image_1.setTouchEnabled(false);

        ///// # _txtLeagueUp
        this._txtLeagueUp = new ck.Text();
        this._txtLeagueUp.setName("_txtLeagueUp");
        this._panelLeagueUp.addChild(this._txtLeagueUp);
        this._txtLeagueUp.setCascadeOpacityEnabled(true);
        this._txtLeagueUp.setCascadeColorEnabled(true);
        this._txtLeagueUp.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLeagueUp, 0.3386, 0.4765);
        this._txtLeagueUp.setTextColor(cc.color(111, 94, 76, 255));
        let _txtLeagueUpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLeagueUp);
        _txtLeagueUpLayoutComponent.setPositionPercentXEnabled(true);
        _txtLeagueUpLayoutComponent.setPositionPercentX(0.3386);
        _txtLeagueUpLayoutComponent.setPositionPercentYEnabled(true);
        _txtLeagueUpLayoutComponent.setPositionPercentY(0.4765);
        this._txtLeagueUp.setTouchEnabled(false);
        this._txtLeagueUp.setUnifySizeEnabled(false);
        this._txtLeagueUp.ignoreContentAdaptWithSize(false);
        this._txtLeagueUp.setContentSize(cc.size(106.9249, 30));
        this._txtLeagueUp.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLeagueUp.setDefaultFontSize(25);
        this._txtLeagueUp.setString(gm.localize.getText("TXT_LEAGUE_UP"));
        this._txtLeagueUp.setTextHorizontalAlignment(0);
        this._txtLeagueUp.setTextVerticalAlignment(1);

        ///// # _panelLeagueSafe
        this._panelLeagueSafe = new ccui.Layout();
        this._panelLeagueSafe.setName("_panelLeagueSafe");
        this._layoutPopup.addChild(this._panelLeagueSafe);
        this._panelLeagueSafe.setCascadeOpacityEnabled(true);
        this._panelLeagueSafe.setCascadeColorEnabled(true);
        this._panelLeagueSafe.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._panelLeagueSafe, 0.4893, 0.7659);
        let _panelLeagueSafeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._panelLeagueSafe);
        _panelLeagueSafeLayoutComponent.setPositionPercentXEnabled(true);
        _panelLeagueSafeLayoutComponent.setPositionPercentX(0.4893);
        _panelLeagueSafeLayoutComponent.setPositionPercentYEnabled(true);
        _panelLeagueSafeLayoutComponent.setPositionPercentY(0.7659);
        _panelLeagueSafeLayoutComponent.setPercentWidthEnabled(true);
        _panelLeagueSafeLayoutComponent.setPercentWidth(0.2951);
        this._panelLeagueSafe.setTouchEnabled(true);
        this._panelLeagueSafe.setUnifySizeEnabled(false);
        this._panelLeagueSafe.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._panelLeagueSafe, 0.2951);
        this._panelLeagueSafe.setContentSize(cc.size(this._panelLeagueSafe.width, 50));

        ///// # Image_1_0
        this.Image_1_0 = new ccui.ImageView();
        this.Image_1_0.setName("Image_1_0");
        this._panelLeagueSafe.addChild(this.Image_1_0);
        this.Image_1_0.setCascadeOpacityEnabled(true);
        this.Image_1_0.setCascadeColorEnabled(true);
        this.Image_1_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.Image_1_0, 0.1078, 0.52);
        this.Image_1_0.setScale(0.83, 0.83);
        let Image_1_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.Image_1_0);
        this.Image_1_0.loadTexture("league/Box_League_SAFE.png", 1);
        this.Image_1_0.setUnifySizeEnabled(false);
        this.Image_1_0.ignoreContentAdaptWithSize(false);
        this.Image_1_0.setContentSize(cc.size(26, 26));
        this.Image_1_0.setTouchEnabled(false);

        ///// # _txtLeagueSafe
        this._txtLeagueSafe = new ck.Text();
        this._txtLeagueSafe.setName("_txtLeagueSafe");
        this._panelLeagueSafe.addChild(this._txtLeagueSafe);
        this._txtLeagueSafe.setCascadeOpacityEnabled(true);
        this._txtLeagueSafe.setCascadeColorEnabled(true);
        this._txtLeagueSafe.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLeagueSafe, 0.2002, 0.48);
        this._txtLeagueSafe.setTextColor(cc.color(111, 94, 76, 255));
        let _txtLeagueSafeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLeagueSafe);
        _txtLeagueSafeLayoutComponent.setPositionPercentXEnabled(true);
        _txtLeagueSafeLayoutComponent.setPositionPercentX(0.2002);
        _txtLeagueSafeLayoutComponent.setPositionPercentYEnabled(true);
        _txtLeagueSafeLayoutComponent.setPositionPercentY(0.48);
        this._txtLeagueSafe.setTouchEnabled(false);
        this._txtLeagueSafe.setUnifySizeEnabled(false);
        this._txtLeagueSafe.ignoreContentAdaptWithSize(false);
        this._txtLeagueSafe.setContentSize(cc.size(119.4504, 30));
        this._txtLeagueSafe.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLeagueSafe.setDefaultFontSize(25);
        this._txtLeagueSafe.setString(gm.localize.getText("TXT_LEAGUE_SAFE"));
        this._txtLeagueSafe.setTextHorizontalAlignment(0);
        this._txtLeagueSafe.setTextVerticalAlignment(1);

        ///// # _panelLeagueDown
        this._panelLeagueDown = new ccui.Layout();
        this._panelLeagueDown.setName("_panelLeagueDown");
        this._layoutPopup.addChild(this._panelLeagueDown);
        this._panelLeagueDown.setCascadeOpacityEnabled(true);
        this._panelLeagueDown.setCascadeColorEnabled(true);
        this._panelLeagueDown.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._panelLeagueDown, 0.7855, 0.7659);
        let _panelLeagueDownLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._panelLeagueDown);
        _panelLeagueDownLayoutComponent.setPositionPercentXEnabled(true);
        _panelLeagueDownLayoutComponent.setPositionPercentX(0.7855);
        _panelLeagueDownLayoutComponent.setPositionPercentYEnabled(true);
        _panelLeagueDownLayoutComponent.setPositionPercentY(0.7659);
        _panelLeagueDownLayoutComponent.setPercentWidthEnabled(true);
        _panelLeagueDownLayoutComponent.setPercentWidth(0.3132);
        this._panelLeagueDown.setTouchEnabled(true);
        this._panelLeagueDown.setUnifySizeEnabled(false);
        this._panelLeagueDown.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._panelLeagueDown, 0.3132);
        this._panelLeagueDown.setContentSize(cc.size(this._panelLeagueDown.width, 50));

        ///// # Image_1_0_0
        this.Image_1_0_0 = new ccui.ImageView();
        this.Image_1_0_0.setName("Image_1_0_0");
        this._panelLeagueDown.addChild(this.Image_1_0_0);
        this.Image_1_0_0.setCascadeOpacityEnabled(true);
        this.Image_1_0_0.setCascadeColorEnabled(true);
        this.Image_1_0_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.Image_1_0_0, 0.1128, 0.5152);
        this.Image_1_0_0.setScale(0.83, 0.83);
        let Image_1_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.Image_1_0_0);
        this.Image_1_0_0.loadTexture("league/Box_League_DOWN.png", 1);
        this.Image_1_0_0.setUnifySizeEnabled(false);
        this.Image_1_0_0.ignoreContentAdaptWithSize(false);
        this.Image_1_0_0.setContentSize(cc.size(26, 26));
        this.Image_1_0_0.setTouchEnabled(false);

        ///// # _txtLeagueDown
        this._txtLeagueDown = new ck.Text();
        this._txtLeagueDown.setName("_txtLeagueDown");
        this._panelLeagueDown.addChild(this._txtLeagueDown);
        this._txtLeagueDown.setCascadeOpacityEnabled(true);
        this._txtLeagueDown.setCascadeColorEnabled(true);
        this._txtLeagueDown.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLeagueDown, 0.1983, 0.48);
        this._txtLeagueDown.setTextColor(cc.color(111, 94, 76, 255));
        let _txtLeagueDownLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLeagueDown);
        _txtLeagueDownLayoutComponent.setPositionPercentXEnabled(true);
        _txtLeagueDownLayoutComponent.setPositionPercentX(0.1983);
        _txtLeagueDownLayoutComponent.setPositionPercentYEnabled(true);
        _txtLeagueDownLayoutComponent.setPositionPercentY(0.48);
        this._txtLeagueDown.setTouchEnabled(false);
        this._txtLeagueDown.setUnifySizeEnabled(false);
        this._txtLeagueDown.ignoreContentAdaptWithSize(false);
        this._txtLeagueDown.setContentSize(cc.size(147.3395, 30));
        this._txtLeagueDown.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLeagueDown.setDefaultFontSize(25);
        this._txtLeagueDown.setString(gm.localize.getText("TXT_LEAGUE_DOWN"));
        this._txtLeagueDown.setTextHorizontalAlignment(0);
        this._txtLeagueDown.setTextVerticalAlignment(1);

        ///// # _scrollView
        this._scrollView = new ccui.ScrollView();
        this._scrollView.setName("_scrollView");
        this._layoutPopup.addChild(this._scrollView);
        this._scrollView.setCascadeOpacityEnabled(true);
        this._scrollView.setCascadeColorEnabled(true);
        this._scrollView.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._scrollView, 0.5, 0.6982);
        let _scrollViewLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._scrollView);
        _scrollViewLayoutComponent.setPositionPercentXEnabled(true);
        _scrollViewLayoutComponent.setPositionPercentX(0.5);
        _scrollViewLayoutComponent.setPositionPercentYEnabled(true);
        _scrollViewLayoutComponent.setPositionPercentY(0.6982);
        _scrollViewLayoutComponent.setPercentHeightEnabled(true);
        _scrollViewLayoutComponent.setPercentHeight(0.6247);
        this._scrollView.setTouchEnabled(true);
        this._scrollView.setUnifySizeEnabled(false);
        this._scrollView.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this._scrollView, 0.6247);
        this._scrollView.setContentSize(cc.size(500, this._scrollView.height));
        this._scrollView.setClippingEnabled(true);
        this._scrollView.setInnerContainerSize(cc.size(500, 830));
        this._scrollView.setDirection(1);
        this._scrollView.setBounceEnabled(true);

        ///// # _panelNotEnoughPlayers
        this._panelNotEnoughPlayers = new ccui.Layout();
        this._panelNotEnoughPlayers.setName("_panelNotEnoughPlayers");
        this._layoutPopup.addChild(this._panelNotEnoughPlayers);
        this._panelNotEnoughPlayers.setCascadeOpacityEnabled(true);
        this._panelNotEnoughPlayers.setCascadeColorEnabled(true);
        this._panelNotEnoughPlayers.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._panelNotEnoughPlayers, 0.5, 0.745);
        let _panelNotEnoughPlayersLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._panelNotEnoughPlayers);
        _panelNotEnoughPlayersLayoutComponent.setPositionPercentXEnabled(true);
        _panelNotEnoughPlayersLayoutComponent.setPositionPercentX(0.5);
        _panelNotEnoughPlayersLayoutComponent.setPositionPercentYEnabled(true);
        _panelNotEnoughPlayersLayoutComponent.setPositionPercentY(0.745);
        _panelNotEnoughPlayersLayoutComponent.setPercentWidthEnabled(true);
        _panelNotEnoughPlayersLayoutComponent.setPercentWidth(0.96);
        this._panelNotEnoughPlayers.setTouchEnabled(true);
        this._panelNotEnoughPlayers.setUnifySizeEnabled(false);
        this._panelNotEnoughPlayers.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._panelNotEnoughPlayers, 0.96);
        this._panelNotEnoughPlayers.setContentSize(cc.size(this._panelNotEnoughPlayers.width, 38));
        this._panelNotEnoughPlayers.setBackGroundColorType(1);
        this._panelNotEnoughPlayers.setBackGroundColor(cc.color(77, 77, 77, 255));

        ///// # _txtNotEnoughPlayer
        this._txtNotEnoughPlayer = new ck.Text();
        this._txtNotEnoughPlayer.setName("_txtNotEnoughPlayer");
        this._panelNotEnoughPlayers.addChild(this._txtNotEnoughPlayer);
        this._txtNotEnoughPlayer.setCascadeOpacityEnabled(true);
        this._txtNotEnoughPlayer.setCascadeColorEnabled(true);
        this._txtNotEnoughPlayer.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNotEnoughPlayer, 0.5, 0.5);
        let _txtNotEnoughPlayerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNotEnoughPlayer);
        _txtNotEnoughPlayerLayoutComponent.setPositionPercentXEnabled(true);
        _txtNotEnoughPlayerLayoutComponent.setPositionPercentX(0.5);
        _txtNotEnoughPlayerLayoutComponent.setPositionPercentYEnabled(true);
        _txtNotEnoughPlayerLayoutComponent.setPositionPercentY(0.5);
        _txtNotEnoughPlayerLayoutComponent.setPercentHeightEnabled(true);
        _txtNotEnoughPlayerLayoutComponent.setPercentHeight(0.5789);
        this._txtNotEnoughPlayer.setTouchEnabled(false);
        this._txtNotEnoughPlayer.ignoreContentAdaptWithSize(true);
        this._txtNotEnoughPlayer.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtNotEnoughPlayer.setDefaultFontSize(20);
        this._txtNotEnoughPlayer.setString(gm.localize.getText("TXT_IF_THE_LEADERBOARD_IS_NOT_ENOUGH_%S_PLAYERS,_YOU_WILL_NOT_RECEIVE_THE_REWARDS"));
        this._txtNotEnoughPlayer.setTextHorizontalAlignment(1);
        this._txtNotEnoughPlayer.setTextVerticalAlignment(1);

        ///// # _me
        this._me = new LeaguePlayerWidget();
        this._me.setName("_me");
        this._layoutPopup.addChild(this._me);
        this._me.setCascadeOpacityEnabled(true);
        this._me.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._me, 0.47, 0.1217);
        this._me.setScale(1.1, 1.1);
        let _meLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._me);
        _meLayoutComponent.setPositionPercentXEnabled(true);
        _meLayoutComponent.setPositionPercentX(0.47);
        _meLayoutComponent.setPositionPercentYEnabled(true);
        _meLayoutComponent.setPositionPercentY(0.1217);

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._layoutPopup.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.98, 0.9843);
        this._imgClose.setScale(0.8, 0.8);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.98);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.9843);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(81, 83));
        this._imgClose.setTouchEnabled(false);

        ///// # _imgInfo
        this._imgInfo = new ccui.ImageView();
        this._imgInfo.setName("_imgInfo");
        this._layoutPopup.addChild(this._imgInfo);
        this._imgInfo.setCascadeOpacityEnabled(true);
        this._imgInfo.setCascadeColorEnabled(true);
        this._imgInfo.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgInfo, 0.0134, 0.9844);
        let _imgInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgInfo);
        _imgInfoLayoutComponent.setPositionPercentXEnabled(true);
        _imgInfoLayoutComponent.setPositionPercentX(0.0134);
        _imgInfoLayoutComponent.setPositionPercentYEnabled(true);
        _imgInfoLayoutComponent.setPositionPercentY(0.9844);
        this._imgInfo.loadTexture("buttons/squares/Info.png", 1);
        this._imgInfo.setUnifySizeEnabled(false);
        this._imgInfo.ignoreContentAdaptWithSize(false);
        this._imgInfo.setContentSize(cc.size(55, 53));
        this._imgInfo.setTouchEnabled(true);

        ///// # _imgInfoIcon
        this._imgInfoIcon = new ccui.ImageView();
        this._imgInfoIcon.setName("_imgInfoIcon");
        this._imgInfo.addChild(this._imgInfoIcon);
        this._imgInfoIcon.setCascadeOpacityEnabled(true);
        this._imgInfoIcon.setCascadeColorEnabled(true);
        this._imgInfoIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgInfoIcon, 0.5, 0.5689);
        let _imgInfoIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgInfoIcon);
        _imgInfoIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgInfoIconLayoutComponent.setPositionPercentX(0.5);
        _imgInfoIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgInfoIconLayoutComponent.setPositionPercentY(0.5689);
        this._imgInfoIcon.loadTexture("icons/flat/Info.png", 1);
        this._imgInfoIcon.setUnifySizeEnabled(false);
        this._imgInfoIcon.ignoreContentAdaptWithSize(false);
        this._imgInfoIcon.setContentSize(cc.size(14, 32));
        this._imgInfoIcon.setTouchEnabled(false);

        ///// # _txtHint
        this._txtHint = new ck.CustomRichTextExtend(cc.size(495.9991, 30));
        this._txtHint.setName("_txtHint");
        this._layoutPopup.addChild(this._txtHint);
        this._txtHint.setCascadeOpacityEnabled(true);
        this._txtHint.setCascadeColorEnabled(true);
        this._txtHint.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHint, 0.5, 0.0338);
        this._txtHint.setDefaultColor(cc.color(92, 219, 167, 255));
        let _txtHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHint);
        _txtHintLayoutComponent.setPositionPercentXEnabled(true);
        _txtHintLayoutComponent.setPositionPercentX(0.5);
        _txtHintLayoutComponent.setPositionPercentYEnabled(true);
        _txtHintLayoutComponent.setPositionPercentY(0.0338);
        this._txtHint.setTouchEnabled(false);
        this._txtHint.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtHint.setDefaultSize(27);
        this._txtHint.setDefaultAlignHorizontal(2);
        this._txtHint.setDefaultAlignVertical(5);

        ///// # _playerDetail
        this._playerDetail = new LeaguePlayerDetailPopup();
        this._playerDetail.setName("_playerDetail");
        this._layoutPopup.addChild(this._playerDetail);
        this._playerDetail.setCascadeOpacityEnabled(true);
        this._playerDetail.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._playerDetail, 0.4964, 0.3785);
        this._playerDetail.setVisible(false);
        let _playerDetailLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._playerDetail);

    },



});

/**
 * Create LeaguePopup
 * @returns {_ccs.LeaguePopup}
 */
_ccs.LeaguePopup.create = function () {
    return new _ccs.LeaguePopup();
};
