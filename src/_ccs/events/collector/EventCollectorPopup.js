/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.EventCollectorPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.EventCollectorPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgHistoryBgr: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ccui.ImageView} */
    _imgPopup: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.ImageView} */
    _imgGuide: null,
    /** @type {ccui.ImageView} */
    _imgHistory: null,
    /** @type {ccui.Layout} */
    _layoutTab01: null,
    /** @type {ccui.ImageView} */
    _imgBgr01: null,
    /** @type {ccui.ImageView} */
    _imgTitle01: null,
    /** @type {ck.Text} */
    _txtHint01: null,
    /** @type {ccui.ImageView} */
    _imgBoxToken01: null,
    /** @type {ccui.ImageView} */
    _imgToken01: null,
    /** @type {ck.Text} */
    _txtToken01: null,
    /** @type {ccui.ImageView} */
    _imgBoxToken02: null,
    /** @type {ccui.ImageView} */
    _imgToken02: null,
    /** @type {ck.Text} */
    _txtToken02: null,
    /** @type {ccui.ImageView} */
    _imgBoxToken03: null,
    /** @type {ccui.ImageView} */
    _imgToken03: null,
    /** @type {ck.Text} */
    _txtToken03: null,
    /** @type {ccui.ImageView} */
    _imgBoxToken04: null,
    /** @type {ccui.ImageView} */
    _imgToken04: null,
    /** @type {ck.Text} */
    _txtToken04: null,
    /** @type {ccui.ImageView} */
    _imgBoxToken05: null,
    /** @type {ccui.ImageView} */
    _imgToken05: null,
    /** @type {ck.Text} */
    _txtToken05: null,
    /** @type {ccui.ListView} */
    _listViewRewards: null,
    /** @type {ccui.Layout} */
    _layoutTab02: null,
    /** @type {cc.Sprite} */
    _spriteLamp01: null,
    /** @type {cc.Sprite} */
    _spriteLamp02: null,
    /** @type {ccui.ImageView} */
    _imgTitle02: null,
    /** @type {ccui.ImageView} */
    _imgBackground02: null,
    /** @type {ccui.ImageView} */
    _imgRewardHeader: null,
    /** @type {ck.Text} */
    _txtRewardList: null,
    /** @type {ccui.ImageView} */
    _imgReward01: null,
    /** @type {ccui.ImageView} */
    _imgReward02: null,
    /** @type {ccui.ImageView} */
    _imgReward03: null,
    /** @type {ccui.ImageView} */
    _imgReward04: null,
    /** @type {ccui.ImageView} */
    _imgReward05: null,
    /** @type {ccui.ImageView} */
    _imgReward06: null,
    /** @type {ck.Text} */
    _txtReward01: null,
    /** @type {ck.Text} */
    _txtReward02: null,
    /** @type {ck.Text} */
    _txtReward03: null,
    /** @type {ck.Text} */
    _txtReward04: null,
    /** @type {ck.Text} */
    _txtReward05: null,
    /** @type {ck.Text} */
    _txtReward06: null,
    /** @type {ck.Text} */
    _txtHint01: null,
    /** @type {ck.Text} */
    _txtHint02: null,
    /** @type {ccui.ImageView} */
    _imgOpenAll: null,
    /** @type {ck.Text} */
    _txtHint01_0: null,
    /** @type {EventCollectorGiftBag} */
    _bag01: null,
    /** @type {EventCollectorGiftBag} */
    _bag02: null,
    /** @type {EventCollectorGiftBag} */
    _bag03: null,
    /** @type {EventCollectorGiftBag} */
    _bag04: null,
    /** @type {EventCollectorGiftBag} */
    _bag05: null,
    /** @type {EventCollectorGiftBag} */
    _bag06: null,
    /** @type {EventCollectorGiftBag} */
    _bag07: null,
    /** @type {EventCollectorGiftBag} */
    _bag08: null,
    /** @type {ccui.ImageView} */
    _imgTabs: null,
    /** @type {ccui.ImageView} */
    _imgTab01: null,
    /** @type {ccui.ImageView} */
    _imgTab02: null,
    /** @type {ck.Text} */
    _txtTab01: null,
    /** @type {ck.Text} */
    _txtTab02: null,
    /** @type {ccui.ImageView} */
    _imgTab01Area: null,
    /** @type {ccui.ImageView} */
    _imgTab02Area: null,
    /** @type {cc.Sprite} */
    _redDotTab01: null,
    /** @type {cc.Sprite} */
    _redDotTab02: null,
    /** @type {ccui.ImageView} */
    _imgTicket: null,
    /** @type {ccui.ImageView} */
    _imgTicketIcon: null,
    /** @type {ck.Text} */
    _txtTicket: null,
    /** @type {ccui.Button} */
    _btnAddTicket: null,
    /** @type {ccui.ImageView} */
    _imgTime: null,
    /** @type {ccui.ImageView} */
    _imgClock: null,
    /** @type {ck.Text} */
    _txtTimeLeft: null,


    /**
     * _ccs.EventCollectorPopup constructor
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
        this._root.setPosition(0.0005, -49.9998);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(660.0859, 1106.4561));

        ///// # _imgHistoryBgr
        this._imgHistoryBgr = new ccui.ImageView();
        this._imgHistoryBgr.setName("_imgHistoryBgr");
        this._root.addChild(this._imgHistoryBgr);
        this._imgHistoryBgr.setCascadeOpacityEnabled(true);
        this._imgHistoryBgr.setCascadeColorEnabled(true);
        this._imgHistoryBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHistoryBgr, 0.2519, 0.9072);
        let _imgHistoryBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHistoryBgr);
        _imgHistoryBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgHistoryBgrLayoutComponent.setPositionPercentX(0.2519);
        _imgHistoryBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgHistoryBgrLayoutComponent.setPositionPercentY(0.9072);
        this._imgHistoryBgr.loadTexture("event-collector/HistoryButton.png", 1);
        this._imgHistoryBgr.setUnifySizeEnabled(false);
        this._imgHistoryBgr.ignoreContentAdaptWithSize(false);
        this._imgHistoryBgr.setContentSize(cc.size(87, 175));
        this._imgHistoryBgr.setTouchEnabled(false);

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._root.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr, 0.5, 0.5364);
        let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
        _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentY(0.5364);
        this._imgBgr.loadTexture("event-collector/Board_05.png", 1);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setContentSize(cc.size(580, 956));
        this._imgBgr.setTouchEnabled(false);

        ///// # _imgPopup
        this._imgPopup = new ccui.ImageView();
        this._imgPopup.setName("_imgPopup");
        this._root.addChild(this._imgPopup);
        this._imgPopup.setCascadeOpacityEnabled(true);
        this._imgPopup.setCascadeColorEnabled(true);
        this._imgPopup.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPopup, 0.5, 0.5);
        let _imgPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPopup);
        _imgPopupLayoutComponent.setPositionPercentXEnabled(true);
        _imgPopupLayoutComponent.setPositionPercentX(0.5);
        _imgPopupLayoutComponent.setPositionPercentYEnabled(true);
        _imgPopupLayoutComponent.setPositionPercentY(0.5);
        this._imgPopup.loadTexture("event-collector/Board_03.png", 1);
        this._imgPopup.setUnifySizeEnabled(false);
        this._imgPopup.ignoreContentAdaptWithSize(false);
        this._imgPopup.setContentSize(cc.size(638, 1083));
        this._imgPopup.setTouchEnabled(false);

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._root.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.8434, 0.8816);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.8434);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.8816);
        this._imgClose.loadTexture("event-collector/X.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(72, 81));
        this._imgClose.setTouchEnabled(false);

        ///// # _imgGuide
        this._imgGuide = new ccui.ImageView();
        this._imgGuide.setName("_imgGuide");
        this._root.addChild(this._imgGuide);
        this._imgGuide.setCascadeOpacityEnabled(true);
        this._imgGuide.setCascadeColorEnabled(true);
        this._imgGuide.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGuide, 0.1559, 0.8759);
        let _imgGuideLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGuide);
        _imgGuideLayoutComponent.setPositionPercentXEnabled(true);
        _imgGuideLayoutComponent.setPositionPercentX(0.1559);
        _imgGuideLayoutComponent.setPositionPercentYEnabled(true);
        _imgGuideLayoutComponent.setPositionPercentY(0.8759);
        this._imgGuide.loadTexture("event-collector/IconInfo.png", 1);
        this._imgGuide.setUnifySizeEnabled(false);
        this._imgGuide.ignoreContentAdaptWithSize(false);
        this._imgGuide.setContentSize(cc.size(59, 81));
        this._imgGuide.setTouchEnabled(false);

        ///// # _imgHistory
        this._imgHistory = new ccui.ImageView();
        this._imgHistory.setName("_imgHistory");
        this._root.addChild(this._imgHistory);
        this._imgHistory.setCascadeOpacityEnabled(true);
        this._imgHistory.setCascadeColorEnabled(true);
        this._imgHistory.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHistory, 0.2423, 0.9237);
        let _imgHistoryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHistory);
        _imgHistoryLayoutComponent.setPositionPercentXEnabled(true);
        _imgHistoryLayoutComponent.setPositionPercentX(0.2423);
        _imgHistoryLayoutComponent.setPositionPercentYEnabled(true);
        _imgHistoryLayoutComponent.setPositionPercentY(0.9237);
        this._imgHistory.loadTexture("event-collector/HistonryIcon.png", 1);
        this._imgHistory.setUnifySizeEnabled(false);
        this._imgHistory.ignoreContentAdaptWithSize(false);
        this._imgHistory.setContentSize(cc.size(78, 84));
        this._imgHistory.setTouchEnabled(false);

        ///// # _layoutTab01
        this._layoutTab01 = new ccui.Layout();
        this._layoutTab01.setName("_layoutTab01");
        this._root.addChild(this._layoutTab01);
        this._layoutTab01.setCascadeOpacityEnabled(true);
        this._layoutTab01.setCascadeColorEnabled(true);
        this._layoutTab01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTab01, 0.5, 0.5);
        let _layoutTab01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTab01);
        _layoutTab01LayoutComponent.setPositionPercentXEnabled(true);
        _layoutTab01LayoutComponent.setPositionPercentX(0.5);
        _layoutTab01LayoutComponent.setPositionPercentYEnabled(true);
        _layoutTab01LayoutComponent.setPositionPercentY(0.5);
        _layoutTab01LayoutComponent.setPercentWidthEnabled(true);
        _layoutTab01LayoutComponent.setPercentWidth(1);
        _layoutTab01LayoutComponent.setPercentHeightEnabled(true);
        _layoutTab01LayoutComponent.setPercentHeight(1);
        this._layoutTab01.setTouchEnabled(false);
        this._layoutTab01.setUnifySizeEnabled(false);
        this._layoutTab01.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutTab01, 1, 1);

        ///// # _imgBgr01
        this._imgBgr01 = new ccui.ImageView();
        this._imgBgr01.setName("_imgBgr01");
        this._layoutTab01.addChild(this._imgBgr01);
        this._imgBgr01.setCascadeOpacityEnabled(true);
        this._imgBgr01.setCascadeColorEnabled(true);
        this._imgBgr01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr01, 0.5, 0.7408);
        let _imgBgr01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr01);
        _imgBgr01LayoutComponent.setPositionPercentXEnabled(true);
        _imgBgr01LayoutComponent.setPositionPercentX(0.5);
        _imgBgr01LayoutComponent.setPositionPercentYEnabled(true);
        _imgBgr01LayoutComponent.setPositionPercentY(0.7408);
        this._imgBgr01.loadTexture("event-collector/BoardTitle.png", 1);
        this._imgBgr01.setUnifySizeEnabled(false);
        this._imgBgr01.ignoreContentAdaptWithSize(false);
        this._imgBgr01.setContentSize(cc.size(580, 285));
        this._imgBgr01.setTouchEnabled(false);

        ///// # _imgTitle01
        this._imgTitle01 = new ccui.ImageView();
        this._imgTitle01.setName("_imgTitle01");
        this._layoutTab01.addChild(this._imgTitle01);
        this._imgTitle01.setCascadeOpacityEnabled(true);
        this._imgTitle01.setCascadeColorEnabled(true);
        this._imgTitle01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTitle01, 0.5, 0.7692);
        let _imgTitle01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTitle01);
        _imgTitle01LayoutComponent.setPositionPercentXEnabled(true);
        _imgTitle01LayoutComponent.setPositionPercentX(0.5);
        _imgTitle01LayoutComponent.setPositionPercentYEnabled(true);
        _imgTitle01LayoutComponent.setPositionPercentY(0.7692);
        this._imgTitle01.loadTexture("texts/events/event-collector/Title_01.png", 1);
        this._imgTitle01.setTouchEnabled(false);

        ///// # _txtHint01
        this._txtHint01 = new ck.Text();
        this._txtHint01.setName("_txtHint01");
        this._layoutTab01.addChild(this._txtHint01);
        this._txtHint01.setCascadeOpacityEnabled(true);
        this._txtHint01.setCascadeColorEnabled(true);
        this._txtHint01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHint01, 0.5, 0.7222);
        this._txtHint01.setTextColor(cc.color(164, 105, 35, 255));
        let _txtHint01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHint01);
        _txtHint01LayoutComponent.setPositionPercentXEnabled(true);
        _txtHint01LayoutComponent.setPositionPercentX(0.5);
        _txtHint01LayoutComponent.setPositionPercentYEnabled(true);
        _txtHint01LayoutComponent.setPositionPercentY(0.7222);
        this._txtHint01.setTouchEnabled(false);
        this._txtHint01.ignoreContentAdaptWithSize(true);
        this._txtHint01.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHint01.setDefaultFontSize(25);
        this._txtHint01.setString(gm.localize.getText("TXT_EVENT_COLLECTOR_HINT"));
        this._txtHint01.setTextHorizontalAlignment(2);
        this._txtHint01.setTextVerticalAlignment(1);

        ///// # _imgBoxToken01
        this._imgBoxToken01 = new ccui.ImageView();
        this._imgBoxToken01.setName("_imgBoxToken01");
        this._layoutTab01.addChild(this._imgBoxToken01);
        this._imgBoxToken01.setCascadeOpacityEnabled(true);
        this._imgBoxToken01.setCascadeColorEnabled(true);
        this._imgBoxToken01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBoxToken01, 0.1789, 0.65);
        let _imgBoxToken01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBoxToken01);
        _imgBoxToken01LayoutComponent.setPositionPercentXEnabled(true);
        _imgBoxToken01LayoutComponent.setPositionPercentX(0.1789);
        _imgBoxToken01LayoutComponent.setPositionPercentYEnabled(true);
        _imgBoxToken01LayoutComponent.setPositionPercentY(0.65);
        this._imgBoxToken01.loadTexture("event-collector/BoxToken.png", 1);
        this._imgBoxToken01.setUnifySizeEnabled(false);
        this._imgBoxToken01.ignoreContentAdaptWithSize(false);
        this._imgBoxToken01.setContentSize(cc.size(80, 40));
        this._imgBoxToken01.setTouchEnabled(false);

        ///// # _imgToken01
        this._imgToken01 = new ccui.ImageView();
        this._imgToken01.setName("_imgToken01");
        this._imgBoxToken01.addChild(this._imgToken01);
        this._imgToken01.setCascadeOpacityEnabled(true);
        this._imgToken01.setCascadeColorEnabled(true);
        this._imgToken01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgToken01, 0, 0.6);
        let _imgToken01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken01);
        _imgToken01LayoutComponent.setPositionPercentXEnabled(true);
        _imgToken01LayoutComponent.setPositionPercentX(0);
        _imgToken01LayoutComponent.setPositionPercentYEnabled(true);
        _imgToken01LayoutComponent.setPositionPercentY(0.6);
        this._imgToken01.loadTexture("event-collector/IconToken_01.png", 1);
        this._imgToken01.setUnifySizeEnabled(false);
        this._imgToken01.ignoreContentAdaptWithSize(false);
        this._imgToken01.setContentSize(cc.size(55, 55));
        this._imgToken01.setTouchEnabled(false);

        ///// # _txtToken01
        this._txtToken01 = new ck.Text();
        this._txtToken01.setName("_txtToken01");
        this._imgBoxToken01.addChild(this._txtToken01);
        this._txtToken01.setCascadeOpacityEnabled(true);
        this._txtToken01.setCascadeColorEnabled(true);
        this._txtToken01.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtToken01, 0.8551, 0.4603);
        let _txtToken01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtToken01);
        _txtToken01LayoutComponent.setPositionPercentXEnabled(true);
        _txtToken01LayoutComponent.setPositionPercentX(0.8551);
        _txtToken01LayoutComponent.setPositionPercentYEnabled(true);
        _txtToken01LayoutComponent.setPositionPercentY(0.4603);
        this._txtToken01.setTouchEnabled(false);
        this._txtToken01.ignoreContentAdaptWithSize(true);
        this._txtToken01.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtToken01.setDefaultFontSize(27);
        this._txtToken01.setString("123");
        this._txtToken01.setTextHorizontalAlignment(0);
        this._txtToken01.setTextVerticalAlignment(0);

        ///// # _imgBoxToken02
        this._imgBoxToken02 = new ccui.ImageView();
        this._imgBoxToken02.setName("_imgBoxToken02");
        this._layoutTab01.addChild(this._imgBoxToken02);
        this._imgBoxToken02.setCascadeOpacityEnabled(true);
        this._imgBoxToken02.setCascadeColorEnabled(true);
        this._imgBoxToken02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBoxToken02, 0.3508, 0.65);
        let _imgBoxToken02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBoxToken02);
        _imgBoxToken02LayoutComponent.setPositionPercentXEnabled(true);
        _imgBoxToken02LayoutComponent.setPositionPercentX(0.3508);
        _imgBoxToken02LayoutComponent.setPositionPercentYEnabled(true);
        _imgBoxToken02LayoutComponent.setPositionPercentY(0.65);
        this._imgBoxToken02.loadTexture("event-collector/BoxToken.png", 1);
        this._imgBoxToken02.setUnifySizeEnabled(false);
        this._imgBoxToken02.ignoreContentAdaptWithSize(false);
        this._imgBoxToken02.setContentSize(cc.size(80, 40));
        this._imgBoxToken02.setTouchEnabled(false);

        ///// # _imgToken02
        this._imgToken02 = new ccui.ImageView();
        this._imgToken02.setName("_imgToken02");
        this._imgBoxToken02.addChild(this._imgToken02);
        this._imgToken02.setCascadeOpacityEnabled(true);
        this._imgToken02.setCascadeColorEnabled(true);
        this._imgToken02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgToken02, 0, 0.6);
        let _imgToken02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken02);
        _imgToken02LayoutComponent.setPositionPercentXEnabled(true);
        _imgToken02LayoutComponent.setPositionPercentX(0);
        _imgToken02LayoutComponent.setPositionPercentYEnabled(true);
        _imgToken02LayoutComponent.setPositionPercentY(0.6);
        this._imgToken02.loadTexture("event-collector/IconToken_02.png", 1);
        this._imgToken02.setUnifySizeEnabled(false);
        this._imgToken02.ignoreContentAdaptWithSize(false);
        this._imgToken02.setContentSize(cc.size(55, 55));
        this._imgToken02.setTouchEnabled(false);

        ///// # _txtToken02
        this._txtToken02 = new ck.Text();
        this._txtToken02.setName("_txtToken02");
        this._imgBoxToken02.addChild(this._txtToken02);
        this._txtToken02.setCascadeOpacityEnabled(true);
        this._txtToken02.setCascadeColorEnabled(true);
        this._txtToken02.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtToken02, 0.8551, 0.4603);
        let _txtToken02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtToken02);
        _txtToken02LayoutComponent.setPositionPercentXEnabled(true);
        _txtToken02LayoutComponent.setPositionPercentX(0.8551);
        _txtToken02LayoutComponent.setPositionPercentYEnabled(true);
        _txtToken02LayoutComponent.setPositionPercentY(0.4603);
        this._txtToken02.setTouchEnabled(false);
        this._txtToken02.ignoreContentAdaptWithSize(true);
        this._txtToken02.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtToken02.setDefaultFontSize(27);
        this._txtToken02.setString("123");
        this._txtToken02.setTextHorizontalAlignment(0);
        this._txtToken02.setTextVerticalAlignment(0);

        ///// # _imgBoxToken03
        this._imgBoxToken03 = new ccui.ImageView();
        this._imgBoxToken03.setName("_imgBoxToken03");
        this._layoutTab01.addChild(this._imgBoxToken03);
        this._imgBoxToken03.setCascadeOpacityEnabled(true);
        this._imgBoxToken03.setCascadeColorEnabled(true);
        this._imgBoxToken03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBoxToken03, 0.5258, 0.65);
        let _imgBoxToken03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBoxToken03);
        _imgBoxToken03LayoutComponent.setPositionPercentXEnabled(true);
        _imgBoxToken03LayoutComponent.setPositionPercentX(0.5258);
        _imgBoxToken03LayoutComponent.setPositionPercentYEnabled(true);
        _imgBoxToken03LayoutComponent.setPositionPercentY(0.65);
        this._imgBoxToken03.loadTexture("event-collector/BoxToken.png", 1);
        this._imgBoxToken03.setUnifySizeEnabled(false);
        this._imgBoxToken03.ignoreContentAdaptWithSize(false);
        this._imgBoxToken03.setContentSize(cc.size(80, 40));
        this._imgBoxToken03.setTouchEnabled(false);

        ///// # _imgToken03
        this._imgToken03 = new ccui.ImageView();
        this._imgToken03.setName("_imgToken03");
        this._imgBoxToken03.addChild(this._imgToken03);
        this._imgToken03.setCascadeOpacityEnabled(true);
        this._imgToken03.setCascadeColorEnabled(true);
        this._imgToken03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgToken03, 0, 0.6);
        let _imgToken03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken03);
        _imgToken03LayoutComponent.setPositionPercentXEnabled(true);
        _imgToken03LayoutComponent.setPositionPercentX(0);
        _imgToken03LayoutComponent.setPositionPercentYEnabled(true);
        _imgToken03LayoutComponent.setPositionPercentY(0.6);
        this._imgToken03.loadTexture("event-collector/IconToken_03.png", 1);
        this._imgToken03.setUnifySizeEnabled(false);
        this._imgToken03.ignoreContentAdaptWithSize(false);
        this._imgToken03.setContentSize(cc.size(55, 55));
        this._imgToken03.setTouchEnabled(false);

        ///// # _txtToken03
        this._txtToken03 = new ck.Text();
        this._txtToken03.setName("_txtToken03");
        this._imgBoxToken03.addChild(this._txtToken03);
        this._txtToken03.setCascadeOpacityEnabled(true);
        this._txtToken03.setCascadeColorEnabled(true);
        this._txtToken03.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtToken03, 0.8551, 0.4603);
        let _txtToken03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtToken03);
        _txtToken03LayoutComponent.setPositionPercentXEnabled(true);
        _txtToken03LayoutComponent.setPositionPercentX(0.8551);
        _txtToken03LayoutComponent.setPositionPercentYEnabled(true);
        _txtToken03LayoutComponent.setPositionPercentY(0.4603);
        this._txtToken03.setTouchEnabled(false);
        this._txtToken03.ignoreContentAdaptWithSize(true);
        this._txtToken03.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtToken03.setDefaultFontSize(27);
        this._txtToken03.setString("123");
        this._txtToken03.setTextHorizontalAlignment(0);
        this._txtToken03.setTextVerticalAlignment(0);

        ///// # _imgBoxToken04
        this._imgBoxToken04 = new ccui.ImageView();
        this._imgBoxToken04.setName("_imgBoxToken04");
        this._layoutTab01.addChild(this._imgBoxToken04);
        this._imgBoxToken04.setCascadeOpacityEnabled(true);
        this._imgBoxToken04.setCascadeColorEnabled(true);
        this._imgBoxToken04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBoxToken04, 0.7053, 0.65);
        let _imgBoxToken04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBoxToken04);
        _imgBoxToken04LayoutComponent.setPositionPercentXEnabled(true);
        _imgBoxToken04LayoutComponent.setPositionPercentX(0.7053);
        _imgBoxToken04LayoutComponent.setPositionPercentYEnabled(true);
        _imgBoxToken04LayoutComponent.setPositionPercentY(0.65);
        this._imgBoxToken04.loadTexture("event-collector/BoxToken.png", 1);
        this._imgBoxToken04.setUnifySizeEnabled(false);
        this._imgBoxToken04.ignoreContentAdaptWithSize(false);
        this._imgBoxToken04.setContentSize(cc.size(80, 40));
        this._imgBoxToken04.setTouchEnabled(false);

        ///// # _imgToken04
        this._imgToken04 = new ccui.ImageView();
        this._imgToken04.setName("_imgToken04");
        this._imgBoxToken04.addChild(this._imgToken04);
        this._imgToken04.setCascadeOpacityEnabled(true);
        this._imgToken04.setCascadeColorEnabled(true);
        this._imgToken04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgToken04, 0.025, 0.6);
        let _imgToken04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken04);
        _imgToken04LayoutComponent.setPositionPercentXEnabled(true);
        _imgToken04LayoutComponent.setPositionPercentX(0.025);
        _imgToken04LayoutComponent.setPositionPercentYEnabled(true);
        _imgToken04LayoutComponent.setPositionPercentY(0.6);
        this._imgToken04.loadTexture("event-collector/IconToken_04.png", 1);
        this._imgToken04.setUnifySizeEnabled(false);
        this._imgToken04.ignoreContentAdaptWithSize(false);
        this._imgToken04.setContentSize(cc.size(55, 55));
        this._imgToken04.setTouchEnabled(false);

        ///// # _txtToken04
        this._txtToken04 = new ck.Text();
        this._txtToken04.setName("_txtToken04");
        this._imgBoxToken04.addChild(this._txtToken04);
        this._txtToken04.setCascadeOpacityEnabled(true);
        this._txtToken04.setCascadeColorEnabled(true);
        this._txtToken04.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtToken04, 0.8551, 0.4603);
        let _txtToken04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtToken04);
        _txtToken04LayoutComponent.setPositionPercentXEnabled(true);
        _txtToken04LayoutComponent.setPositionPercentX(0.8551);
        _txtToken04LayoutComponent.setPositionPercentYEnabled(true);
        _txtToken04LayoutComponent.setPositionPercentY(0.4603);
        this._txtToken04.setTouchEnabled(false);
        this._txtToken04.ignoreContentAdaptWithSize(true);
        this._txtToken04.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtToken04.setDefaultFontSize(27);
        this._txtToken04.setString("123");
        this._txtToken04.setTextHorizontalAlignment(0);
        this._txtToken04.setTextVerticalAlignment(0);

        ///// # _imgBoxToken05
        this._imgBoxToken05 = new ccui.ImageView();
        this._imgBoxToken05.setName("_imgBoxToken05");
        this._layoutTab01.addChild(this._imgBoxToken05);
        this._imgBoxToken05.setCascadeOpacityEnabled(true);
        this._imgBoxToken05.setCascadeColorEnabled(true);
        this._imgBoxToken05.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBoxToken05, 0.8607, 0.65);
        let _imgBoxToken05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBoxToken05);
        _imgBoxToken05LayoutComponent.setPositionPercentXEnabled(true);
        _imgBoxToken05LayoutComponent.setPositionPercentX(0.8607);
        _imgBoxToken05LayoutComponent.setPositionPercentYEnabled(true);
        _imgBoxToken05LayoutComponent.setPositionPercentY(0.65);
        this._imgBoxToken05.loadTexture("event-collector/BoxToken.png", 1);
        this._imgBoxToken05.setUnifySizeEnabled(false);
        this._imgBoxToken05.ignoreContentAdaptWithSize(false);
        this._imgBoxToken05.setContentSize(cc.size(80, 40));
        this._imgBoxToken05.setTouchEnabled(false);

        ///// # _imgToken05
        this._imgToken05 = new ccui.ImageView();
        this._imgToken05.setName("_imgToken05");
        this._imgBoxToken05.addChild(this._imgToken05);
        this._imgToken05.setCascadeOpacityEnabled(true);
        this._imgToken05.setCascadeColorEnabled(true);
        this._imgToken05.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgToken05, 0.15, 0.6);
        let _imgToken05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken05);
        _imgToken05LayoutComponent.setPositionPercentXEnabled(true);
        _imgToken05LayoutComponent.setPositionPercentX(0.15);
        _imgToken05LayoutComponent.setPositionPercentYEnabled(true);
        _imgToken05LayoutComponent.setPositionPercentY(0.6);
        this._imgToken05.loadTexture("event-collector/IconToken_05.png", 1);
        this._imgToken05.setUnifySizeEnabled(false);
        this._imgToken05.ignoreContentAdaptWithSize(false);
        this._imgToken05.setContentSize(cc.size(55, 55));
        this._imgToken05.setTouchEnabled(false);

        ///// # _txtToken05
        this._txtToken05 = new ck.Text();
        this._txtToken05.setName("_txtToken05");
        this._imgBoxToken05.addChild(this._txtToken05);
        this._txtToken05.setCascadeOpacityEnabled(true);
        this._txtToken05.setCascadeColorEnabled(true);
        this._txtToken05.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtToken05, 0.8551, 0.4603);
        let _txtToken05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtToken05);
        _txtToken05LayoutComponent.setPositionPercentXEnabled(true);
        _txtToken05LayoutComponent.setPositionPercentX(0.8551);
        _txtToken05LayoutComponent.setPositionPercentYEnabled(true);
        _txtToken05LayoutComponent.setPositionPercentY(0.4603);
        this._txtToken05.setTouchEnabled(false);
        this._txtToken05.ignoreContentAdaptWithSize(true);
        this._txtToken05.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtToken05.setDefaultFontSize(27);
        this._txtToken05.setString("123");
        this._txtToken05.setTextHorizontalAlignment(0);
        this._txtToken05.setTextVerticalAlignment(0);

        ///// # _listViewRewards
        this._listViewRewards = new ccui.ListView();
        this._listViewRewards.setName("_listViewRewards");
        this._layoutTab01.addChild(this._listViewRewards);
        this._listViewRewards.setCascadeOpacityEnabled(true);
        this._listViewRewards.setCascadeColorEnabled(true);
        this._listViewRewards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._listViewRewards, 0.5, 0.3618);
        let _listViewRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._listViewRewards);
        _listViewRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _listViewRewardsLayoutComponent.setPositionPercentX(0.5);
        _listViewRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _listViewRewardsLayoutComponent.setPositionPercentY(0.3618);
        this._listViewRewards.setTouchEnabled(true);
        this._listViewRewards.setUnifySizeEnabled(false);
        this._listViewRewards.ignoreContentAdaptWithSize(false);
        this._listViewRewards.setContentSize(cc.size(569.78, 548.2817));
        this._listViewRewards.setDirection(ccui.ScrollView.DIR_VERTICAL);
        this._listViewRewards.setGravity(ccui.ListView.GRAVITY_CENTER_HORIZONTAL);
        this._listViewRewards.setBounceEnabled(true);

        ///// # _layoutTab02
        this._layoutTab02 = new ccui.Layout();
        this._layoutTab02.setName("_layoutTab02");
        this._root.addChild(this._layoutTab02);
        this._layoutTab02.setCascadeOpacityEnabled(true);
        this._layoutTab02.setCascadeColorEnabled(true);
        this._layoutTab02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTab02, 0.5, 0.501);
        let _layoutTab02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTab02);
        _layoutTab02LayoutComponent.setPositionPercentXEnabled(true);
        _layoutTab02LayoutComponent.setPositionPercentX(0.5);
        _layoutTab02LayoutComponent.setPositionPercentYEnabled(true);
        _layoutTab02LayoutComponent.setPositionPercentY(0.501);
        _layoutTab02LayoutComponent.setPercentWidthEnabled(true);
        _layoutTab02LayoutComponent.setPercentWidth(1);
        _layoutTab02LayoutComponent.setPercentHeightEnabled(true);
        _layoutTab02LayoutComponent.setPercentHeight(1);
        this._layoutTab02.setTouchEnabled(false);
        this._layoutTab02.setUnifySizeEnabled(false);
        this._layoutTab02.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutTab02, 1, 1);

        ///// # _spriteLamp01
        this._spriteLamp01 = new cc.Sprite();
        this._spriteLamp01.setName("_spriteLamp01");
        this._layoutTab02.addChild(this._spriteLamp01);
        this._spriteLamp01.setCascadeOpacityEnabled(true);
        this._spriteLamp01.setCascadeColorEnabled(true);
        this._spriteLamp01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteLamp01, 0.15, 0.74);
        let _spriteLamp01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteLamp01);
        _spriteLamp01LayoutComponent.setPositionPercentXEnabled(true);
        _spriteLamp01LayoutComponent.setPositionPercentX(0.15);
        _spriteLamp01LayoutComponent.setPositionPercentYEnabled(true);
        _spriteLamp01LayoutComponent.setPositionPercentY(0.74);
        let sf = cc.spriteFrameCache.getSpriteFrame("event-collector/Lamps.png"); if (sf) this._spriteLamp01.setSpriteFrame(sf);
        let _spriteLamp01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteLamp01BlendFunc.src = 1;
        _spriteLamp01BlendFunc.dst = 771;
        this._spriteLamp01.setBlendFunc(_spriteLamp01BlendFunc);

        ///// # _spriteLamp02
        this._spriteLamp02 = new cc.Sprite();
        this._spriteLamp02.setName("_spriteLamp02");
        this._layoutTab02.addChild(this._spriteLamp02);
        this._spriteLamp02.setCascadeOpacityEnabled(true);
        this._spriteLamp02.setCascadeColorEnabled(true);
        this._spriteLamp02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteLamp02, 0.85, 0.74);
        let _spriteLamp02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteLamp02);
        _spriteLamp02LayoutComponent.setPositionPercentXEnabled(true);
        _spriteLamp02LayoutComponent.setPositionPercentX(0.85);
        _spriteLamp02LayoutComponent.setPositionPercentYEnabled(true);
        _spriteLamp02LayoutComponent.setPositionPercentY(0.74);
        let sf = cc.spriteFrameCache.getSpriteFrame("event-collector/Lamps.png"); if (sf) this._spriteLamp02.setSpriteFrame(sf);
        let _spriteLamp02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteLamp02BlendFunc.src = 1;
        _spriteLamp02BlendFunc.dst = 771;
        this._spriteLamp02.setBlendFunc(_spriteLamp02BlendFunc);

        ///// # _imgTitle02
        this._imgTitle02 = new ccui.ImageView();
        this._imgTitle02.setName("_imgTitle02");
        this._layoutTab02.addChild(this._imgTitle02);
        this._imgTitle02.setCascadeOpacityEnabled(true);
        this._imgTitle02.setCascadeColorEnabled(true);
        this._imgTitle02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTitle02, 0.5, 0.7566);
        let _imgTitle02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTitle02);
        _imgTitle02LayoutComponent.setPositionPercentXEnabled(true);
        _imgTitle02LayoutComponent.setPositionPercentX(0.5);
        _imgTitle02LayoutComponent.setPositionPercentYEnabled(true);
        _imgTitle02LayoutComponent.setPositionPercentY(0.7566);
        this._imgTitle02.loadTexture("texts/events/event-collector/Title_02.png", 1);
        this._imgTitle02.setTouchEnabled(false);

        ///// # _imgBackground02
        this._imgBackground02 = new ccui.ImageView();
        this._imgBackground02.setName("_imgBackground02");
        this._layoutTab02.addChild(this._imgBackground02);
        this._imgBackground02.setCascadeOpacityEnabled(true);
        this._imgBackground02.setCascadeColorEnabled(true);
        this._imgBackground02.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgBackground02, 0.4983, 0.1116);
        let _imgBackground02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground02);
        this._imgBackground02.loadTexture("event-collector/Board_04.png", 1);
        this._imgBackground02.setUnifySizeEnabled(false);
        this._imgBackground02.ignoreContentAdaptWithSize(false);
        this._imgBackground02.setContentSize(cc.size(584.2819, 526.8439));
        this._imgBackground02.setTouchEnabled(false);

        ///// # _imgRewardHeader
        this._imgRewardHeader = new ccui.ImageView();
        this._imgRewardHeader.setName("_imgRewardHeader");
        this._layoutTab02.addChild(this._imgRewardHeader);
        this._imgRewardHeader.setCascadeOpacityEnabled(true);
        this._imgRewardHeader.setCascadeColorEnabled(true);
        this._imgRewardHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRewardHeader, 0.5, 0.3157);
        let _imgRewardHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRewardHeader);
        _imgRewardHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgRewardHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgRewardHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgRewardHeaderLayoutComponent.setPositionPercentY(0.3157);
        this._imgRewardHeader.loadTexture("event-collector/Badge.png", 1);
        this._imgRewardHeader.setUnifySizeEnabled(false);
        this._imgRewardHeader.ignoreContentAdaptWithSize(false);
        this._imgRewardHeader.setContentSize(cc.size(165, 44));
        this._imgRewardHeader.setTouchEnabled(false);

        ///// # _txtRewardList
        this._txtRewardList = new ck.Text();
        this._txtRewardList.setName("_txtRewardList");
        this._imgRewardHeader.addChild(this._txtRewardList);
        this._txtRewardList.setCascadeOpacityEnabled(true);
        this._txtRewardList.setCascadeColorEnabled(true);
        this._txtRewardList.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRewardList, 0.5, 0.5);
        this._txtRewardList.setTextColor(cc.color(255, 206, 142, 255));
        let _txtRewardListLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRewardList);
        _txtRewardListLayoutComponent.setPositionPercentXEnabled(true);
        _txtRewardListLayoutComponent.setPositionPercentX(0.5);
        _txtRewardListLayoutComponent.setPositionPercentYEnabled(true);
        _txtRewardListLayoutComponent.setPositionPercentY(0.5);
        this._txtRewardList.setTouchEnabled(false);
        this._txtRewardList.ignoreContentAdaptWithSize(true);
        this._txtRewardList.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtRewardList.setDefaultFontSize(25);
        this._txtRewardList.setString(gm.localize.getText("TXT_REWARD_LIST"));
        this._txtRewardList.setTextHorizontalAlignment(1);
        this._txtRewardList.setTextVerticalAlignment(1);

        ///// # _imgReward01
        this._imgReward01 = new ccui.ImageView();
        this._imgReward01.setName("_imgReward01");
        this._layoutTab02.addChild(this._imgReward01);
        this._imgReward01.setCascadeOpacityEnabled(true);
        this._imgReward01.setCascadeColorEnabled(true);
        this._imgReward01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgReward01, 0.133, 0.2571);
        let _imgReward01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgReward01);
        _imgReward01LayoutComponent.setPositionPercentXEnabled(true);
        _imgReward01LayoutComponent.setPositionPercentX(0.133);
        _imgReward01LayoutComponent.setPositionPercentYEnabled(true);
        _imgReward01LayoutComponent.setPositionPercentY(0.2571);
        this._imgReward01.loadTexture("event-collector/IconItem.png", 1);
        this._imgReward01.setUnifySizeEnabled(false);
        this._imgReward01.ignoreContentAdaptWithSize(false);
        this._imgReward01.setContentSize(cc.size(91, 93));
        this._imgReward01.setTouchEnabled(false);

        ///// # _imgReward02
        this._imgReward02 = new ccui.ImageView();
        this._imgReward02.setName("_imgReward02");
        this._layoutTab02.addChild(this._imgReward02);
        this._imgReward02.setCascadeOpacityEnabled(true);
        this._imgReward02.setCascadeColorEnabled(true);
        this._imgReward02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgReward02, 0.2756, 0.2558);
        let _imgReward02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgReward02);
        _imgReward02LayoutComponent.setPositionPercentXEnabled(true);
        _imgReward02LayoutComponent.setPositionPercentX(0.2756);
        _imgReward02LayoutComponent.setPositionPercentYEnabled(true);
        _imgReward02LayoutComponent.setPositionPercentY(0.2558);
        this._imgReward02.loadTexture("event-collector/IconCards.png", 1);
        this._imgReward02.setUnifySizeEnabled(false);
        this._imgReward02.ignoreContentAdaptWithSize(false);
        this._imgReward02.setContentSize(cc.size(101, 90));
        this._imgReward02.setTouchEnabled(false);

        ///// # _imgReward03
        this._imgReward03 = new ccui.ImageView();
        this._imgReward03.setName("_imgReward03");
        this._layoutTab02.addChild(this._imgReward03);
        this._imgReward03.setCascadeOpacityEnabled(true);
        this._imgReward03.setCascadeColorEnabled(true);
        this._imgReward03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgReward03, 0.4249, 0.2531);
        let _imgReward03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgReward03);
        _imgReward03LayoutComponent.setPositionPercentXEnabled(true);
        _imgReward03LayoutComponent.setPositionPercentX(0.4249);
        _imgReward03LayoutComponent.setPositionPercentYEnabled(true);
        _imgReward03LayoutComponent.setPositionPercentY(0.2531);
        this._imgReward03.loadTexture("event-collector/IconAirPod.png", 1);
        this._imgReward03.setUnifySizeEnabled(false);
        this._imgReward03.ignoreContentAdaptWithSize(false);
        this._imgReward03.setContentSize(cc.size(82, 84));
        this._imgReward03.setTouchEnabled(false);

        ///// # _imgReward04
        this._imgReward04 = new ccui.ImageView();
        this._imgReward04.setName("_imgReward04");
        this._layoutTab02.addChild(this._imgReward04);
        this._imgReward04.setCascadeOpacityEnabled(true);
        this._imgReward04.setCascadeColorEnabled(true);
        this._imgReward04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgReward04, 0.5608, 0.2531);
        let _imgReward04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgReward04);
        _imgReward04LayoutComponent.setPositionPercentXEnabled(true);
        _imgReward04LayoutComponent.setPositionPercentX(0.5608);
        _imgReward04LayoutComponent.setPositionPercentYEnabled(true);
        _imgReward04LayoutComponent.setPositionPercentY(0.2531);
        this._imgReward04.loadTexture("event-collector/IconWatch.png", 1);
        this._imgReward04.setUnifySizeEnabled(false);
        this._imgReward04.ignoreContentAdaptWithSize(false);
        this._imgReward04.setContentSize(cc.size(82, 84));
        this._imgReward04.setTouchEnabled(false);

        ///// # _imgReward05
        this._imgReward05 = new ccui.ImageView();
        this._imgReward05.setName("_imgReward05");
        this._layoutTab02.addChild(this._imgReward05);
        this._imgReward05.setCascadeOpacityEnabled(true);
        this._imgReward05.setCascadeColorEnabled(true);
        this._imgReward05.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgReward05, 0.7127, 0.2635);
        let _imgReward05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgReward05);
        _imgReward05LayoutComponent.setPositionPercentXEnabled(true);
        _imgReward05LayoutComponent.setPositionPercentX(0.7127);
        _imgReward05LayoutComponent.setPositionPercentYEnabled(true);
        _imgReward05LayoutComponent.setPositionPercentY(0.2635);
        this._imgReward05.loadTexture("event-collector/IconGalaxy.png", 1);
        this._imgReward05.setUnifySizeEnabled(false);
        this._imgReward05.ignoreContentAdaptWithSize(false);
        this._imgReward05.setContentSize(cc.size(82, 108));
        this._imgReward05.setTouchEnabled(false);

        ///// # _imgReward06
        this._imgReward06 = new ccui.ImageView();
        this._imgReward06.setName("_imgReward06");
        this._layoutTab02.addChild(this._imgReward06);
        this._imgReward06.setCascadeOpacityEnabled(true);
        this._imgReward06.setCascadeColorEnabled(true);
        this._imgReward06.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgReward06, 0.8637, 0.2603);
        let _imgReward06LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgReward06);
        _imgReward06LayoutComponent.setPositionPercentXEnabled(true);
        _imgReward06LayoutComponent.setPositionPercentX(0.8637);
        _imgReward06LayoutComponent.setPositionPercentYEnabled(true);
        _imgReward06LayoutComponent.setPositionPercentY(0.2603);
        this._imgReward06.loadTexture("event-collector/IconPhone.png", 1);
        this._imgReward06.setUnifySizeEnabled(false);
        this._imgReward06.ignoreContentAdaptWithSize(false);
        this._imgReward06.setContentSize(cc.size(82, 100));
        this._imgReward06.setTouchEnabled(false);

        ///// # _txtReward01
        this._txtReward01 = new ck.Text();
        this._txtReward01.setName("_txtReward01");
        this._layoutTab02.addChild(this._txtReward01);
        this._txtReward01.setCascadeOpacityEnabled(true);
        this._txtReward01.setCascadeColorEnabled(true);
        this._txtReward01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtReward01, 0.1362, 0.1957);
        let _txtReward01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtReward01);
        _txtReward01LayoutComponent.setPositionPercentXEnabled(true);
        _txtReward01LayoutComponent.setPositionPercentX(0.1362);
        _txtReward01LayoutComponent.setPositionPercentYEnabled(true);
        _txtReward01LayoutComponent.setPositionPercentY(0.1957);
        this._txtReward01.setTouchEnabled(false);
        this._txtReward01.setUnifySizeEnabled(false);
        this._txtReward01.ignoreContentAdaptWithSize(false);
        this._txtReward01.setContentSize(cc.size(65, 45));
        this._txtReward01.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtReward01.setDefaultFontSize(18);
        this._txtReward01.setString(gm.localize.getText("TXT_EVENT_COLLECTOR_POSM_ITEM_01"));
        this._txtReward01.setTextHorizontalAlignment(1);
        this._txtReward01.setTextVerticalAlignment(1);
        this._txtReward01.enableOutline(cc.color(87, 42, 31, 255), 2);

        ///// # _txtReward02
        this._txtReward02 = new ck.Text();
        this._txtReward02.setName("_txtReward02");
        this._layoutTab02.addChild(this._txtReward02);
        this._txtReward02.setCascadeOpacityEnabled(true);
        this._txtReward02.setCascadeColorEnabled(true);
        this._txtReward02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtReward02, 0.2784, 0.1957);
        let _txtReward02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtReward02);
        _txtReward02LayoutComponent.setPositionPercentXEnabled(true);
        _txtReward02LayoutComponent.setPositionPercentX(0.2784);
        _txtReward02LayoutComponent.setPositionPercentYEnabled(true);
        _txtReward02LayoutComponent.setPositionPercentY(0.1957);
        this._txtReward02.setTouchEnabled(false);
        this._txtReward02.setUnifySizeEnabled(false);
        this._txtReward02.ignoreContentAdaptWithSize(false);
        this._txtReward02.setContentSize(cc.size(65, 45));
        this._txtReward02.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtReward02.setDefaultFontSize(18);
        this._txtReward02.setString(gm.localize.getText("TXT_EVENT_COLLECTOR_POSM_ITEM_02"));
        this._txtReward02.setTextHorizontalAlignment(1);
        this._txtReward02.setTextVerticalAlignment(1);
        this._txtReward02.enableOutline(cc.color(87, 42, 31, 255), 2);

        ///// # _txtReward03
        this._txtReward03 = new ck.Text();
        this._txtReward03.setName("_txtReward03");
        this._layoutTab02.addChild(this._txtReward03);
        this._txtReward03.setCascadeOpacityEnabled(true);
        this._txtReward03.setCascadeColorEnabled(true);
        this._txtReward03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtReward03, 0.4234, 0.1957);
        let _txtReward03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtReward03);
        _txtReward03LayoutComponent.setPositionPercentXEnabled(true);
        _txtReward03LayoutComponent.setPositionPercentX(0.4234);
        _txtReward03LayoutComponent.setPositionPercentYEnabled(true);
        _txtReward03LayoutComponent.setPositionPercentY(0.1957);
        this._txtReward03.setTouchEnabled(false);
        this._txtReward03.setUnifySizeEnabled(false);
        this._txtReward03.ignoreContentAdaptWithSize(false);
        this._txtReward03.setContentSize(cc.size(65, 45));
        this._txtReward03.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtReward03.setDefaultFontSize(18);
        this._txtReward03.setString(gm.localize.getText("TXT_EVENT_COLLECTOR_POSM_ITEM_03"));
        this._txtReward03.setTextHorizontalAlignment(1);
        this._txtReward03.setTextVerticalAlignment(1);
        this._txtReward03.enableOutline(cc.color(87, 42, 31, 255), 2);

        ///// # _txtReward04
        this._txtReward04 = new ck.Text();
        this._txtReward04.setName("_txtReward04");
        this._layoutTab02.addChild(this._txtReward04);
        this._txtReward04.setCascadeOpacityEnabled(true);
        this._txtReward04.setCascadeColorEnabled(true);
        this._txtReward04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtReward04, 0.5628, 0.1957);
        let _txtReward04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtReward04);
        _txtReward04LayoutComponent.setPositionPercentXEnabled(true);
        _txtReward04LayoutComponent.setPositionPercentX(0.5628);
        _txtReward04LayoutComponent.setPositionPercentYEnabled(true);
        _txtReward04LayoutComponent.setPositionPercentY(0.1957);
        this._txtReward04.setTouchEnabled(false);
        this._txtReward04.setUnifySizeEnabled(false);
        this._txtReward04.ignoreContentAdaptWithSize(false);
        this._txtReward04.setContentSize(cc.size(65, 45));
        this._txtReward04.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtReward04.setDefaultFontSize(18);
        this._txtReward04.setString(gm.localize.getText("TXT_EVENT_COLLECTOR_POSM_ITEM_04"));
        this._txtReward04.setTextHorizontalAlignment(1);
        this._txtReward04.setTextVerticalAlignment(1);
        this._txtReward04.enableOutline(cc.color(87, 42, 31, 255), 2);

        ///// # _txtReward05
        this._txtReward05 = new ck.Text();
        this._txtReward05.setName("_txtReward05");
        this._layoutTab02.addChild(this._txtReward05);
        this._txtReward05.setCascadeOpacityEnabled(true);
        this._txtReward05.setCascadeColorEnabled(true);
        this._txtReward05.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtReward05, 0.7139, 0.1957);
        let _txtReward05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtReward05);
        _txtReward05LayoutComponent.setPositionPercentXEnabled(true);
        _txtReward05LayoutComponent.setPositionPercentX(0.7139);
        _txtReward05LayoutComponent.setPositionPercentYEnabled(true);
        _txtReward05LayoutComponent.setPositionPercentY(0.1957);
        this._txtReward05.setTouchEnabled(false);
        this._txtReward05.setUnifySizeEnabled(false);
        this._txtReward05.ignoreContentAdaptWithSize(false);
        this._txtReward05.setContentSize(cc.size(75, 45));
        this._txtReward05.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtReward05.setDefaultFontSize(18);
        this._txtReward05.setString(gm.localize.getText("TXT_EVENT_COLLECTOR_POSM_ITEM_05"));
        this._txtReward05.setTextHorizontalAlignment(1);
        this._txtReward05.setTextVerticalAlignment(1);
        this._txtReward05.enableOutline(cc.color(87, 42, 31, 255), 2);

        ///// # _txtReward06
        this._txtReward06 = new ck.Text();
        this._txtReward06.setName("_txtReward06");
        this._layoutTab02.addChild(this._txtReward06);
        this._txtReward06.setCascadeOpacityEnabled(true);
        this._txtReward06.setCascadeColorEnabled(true);
        this._txtReward06.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtReward06, 0.8676, 0.1957);
        this._txtReward06.setTextColor(cc.color(255, 229, 54, 255));
        let _txtReward06LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtReward06);
        _txtReward06LayoutComponent.setPositionPercentXEnabled(true);
        _txtReward06LayoutComponent.setPositionPercentX(0.8676);
        _txtReward06LayoutComponent.setPositionPercentYEnabled(true);
        _txtReward06LayoutComponent.setPositionPercentY(0.1957);
        this._txtReward06.setTouchEnabled(false);
        this._txtReward06.setUnifySizeEnabled(false);
        this._txtReward06.ignoreContentAdaptWithSize(false);
        this._txtReward06.setContentSize(cc.size(65, 45));
        this._txtReward06.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtReward06.setDefaultFontSize(18);
        this._txtReward06.setString(gm.localize.getText("TXT_EVENT_COLLECTOR_POSM_ITEM_06"));
        this._txtReward06.setTextHorizontalAlignment(1);
        this._txtReward06.setTextVerticalAlignment(1);
        this._txtReward06.enableOutline(cc.color(83, 16, 0, 255), 2);

        ///// # _txtHint01
        this._txtHint01 = new ck.Text();
        this._txtHint01.setName("_txtHint01");
        this._layoutTab02.addChild(this._txtHint01);
        this._txtHint01.setCascadeOpacityEnabled(true);
        this._txtHint01.setCascadeColorEnabled(true);
        this._txtHint01.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHint01, 0.4955, 0.1541);
        let _txtHint01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHint01);
        _txtHint01LayoutComponent.setPositionPercentXEnabled(true);
        _txtHint01LayoutComponent.setPositionPercentX(0.4955);
        _txtHint01LayoutComponent.setPositionPercentYEnabled(true);
        _txtHint01LayoutComponent.setPositionPercentY(0.1541);
        this._txtHint01.setTouchEnabled(false);
        this._txtHint01.ignoreContentAdaptWithSize(true);
        this._txtHint01.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHint01.setDefaultFontSize(25);
        this._txtHint01.setString(gm.localize.getText("TXT_OPEN_GIFT_HINT_01"));
        this._txtHint01.setTextHorizontalAlignment(2);
        this._txtHint01.setTextVerticalAlignment(1);
        this._txtHint01.enableOutline(cc.color(87, 42, 31, 255), 2);

        ///// # _txtHint02
        this._txtHint02 = new ck.Text();
        this._txtHint02.setName("_txtHint02");
        this._layoutTab02.addChild(this._txtHint02);
        this._txtHint02.setCascadeOpacityEnabled(true);
        this._txtHint02.setCascadeColorEnabled(true);
        this._txtHint02.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHint02, 0.4955, 0.1297);
        this._txtHint02.setTextColor(cc.color(255, 255, 0, 255));
        let _txtHint02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHint02);
        _txtHint02LayoutComponent.setPositionPercentXEnabled(true);
        _txtHint02LayoutComponent.setPositionPercentX(0.4955);
        _txtHint02LayoutComponent.setPositionPercentYEnabled(true);
        _txtHint02LayoutComponent.setPositionPercentY(0.1297);
        this._txtHint02.setTouchEnabled(false);
        this._txtHint02.ignoreContentAdaptWithSize(true);
        this._txtHint02.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHint02.setDefaultFontSize(25);
        this._txtHint02.setString(gm.localize.getText("TXT_OPEN_GIFT_HINT_02"));
        this._txtHint02.setTextHorizontalAlignment(2);
        this._txtHint02.setTextVerticalAlignment(1);
        this._txtHint02.enableOutline(cc.color(87, 42, 31, 255), 2);

        ///// # _imgOpenAll
        this._imgOpenAll = new ccui.ImageView();
        this._imgOpenAll.setName("_imgOpenAll");
        this._layoutTab02.addChild(this._imgOpenAll);
        this._imgOpenAll.setCascadeOpacityEnabled(true);
        this._imgOpenAll.setCascadeColorEnabled(true);
        this._imgOpenAll.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgOpenAll, 0.6281, 0.1423);
        let _imgOpenAllLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgOpenAll);
        _imgOpenAllLayoutComponent.setPositionPercentXEnabled(true);
        _imgOpenAllLayoutComponent.setPositionPercentX(0.6281);
        _imgOpenAllLayoutComponent.setPositionPercentYEnabled(true);
        _imgOpenAllLayoutComponent.setPositionPercentY(0.1423);
        this._imgOpenAll.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgOpenAll.setUnifySizeEnabled(false);
        this._imgOpenAll.ignoreContentAdaptWithSize(false);
        this._imgOpenAll.setContentSize(cc.size(150.7556, 59.2777));
        this._imgOpenAll.setTouchEnabled(false);

        ///// # _txtHint01_0
        this._txtHint01_0 = new ck.Text();
        this._txtHint01_0.setName("_txtHint01_0");
        this._imgOpenAll.addChild(this._txtHint01_0);
        this._txtHint01_0.setCascadeOpacityEnabled(true);
        this._txtHint01_0.setCascadeColorEnabled(true);
        this._txtHint01_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHint01_0, 0.5106, 0.5303);
        let _txtHint01_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHint01_0);
        _txtHint01_0LayoutComponent.setPositionPercentXEnabled(true);
        _txtHint01_0LayoutComponent.setPositionPercentX(0.5106);
        _txtHint01_0LayoutComponent.setPositionPercentYEnabled(true);
        _txtHint01_0LayoutComponent.setPositionPercentY(0.5303);
        this._txtHint01_0.setTouchEnabled(false);
        this._txtHint01_0.ignoreContentAdaptWithSize(true);
        this._txtHint01_0.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHint01_0.setDefaultFontSize(30);
        this._txtHint01_0.setString(gm.localize.getText("TXT_OPEN_ALL"));
        this._txtHint01_0.setTextHorizontalAlignment(1);
        this._txtHint01_0.setTextVerticalAlignment(1);
        this._txtHint01_0.enableOutline(cc.color(87, 42, 31, 255), 2);

        ///// # _bag01
        this._bag01 = new EventCollectorGiftBag();
        this._bag01.setName("_bag01");
        this._layoutTab02.addChild(this._bag01);
        this._bag01.setCascadeOpacityEnabled(true);
        this._bag01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._bag01, 0.2391, 0.5668);
        let _bag01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._bag01);
        _bag01LayoutComponent.setPositionPercentXEnabled(true);
        _bag01LayoutComponent.setPositionPercentX(0.2391);
        _bag01LayoutComponent.setPositionPercentYEnabled(true);
        _bag01LayoutComponent.setPositionPercentY(0.5668);

        ///// # _bag02
        this._bag02 = new EventCollectorGiftBag();
        this._bag02.setName("_bag02");
        this._layoutTab02.addChild(this._bag02);
        this._bag02.setCascadeOpacityEnabled(true);
        this._bag02.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._bag02, 0.7392, 0.5586);
        let _bag02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._bag02);
        _bag02LayoutComponent.setPositionPercentXEnabled(true);
        _bag02LayoutComponent.setPositionPercentX(0.7392);
        _bag02LayoutComponent.setPositionPercentYEnabled(true);
        _bag02LayoutComponent.setPositionPercentY(0.5586);

        ///// # _bag03
        this._bag03 = new EventCollectorGiftBag();
        this._bag03.setName("_bag03");
        this._layoutTab02.addChild(this._bag03);
        this._bag03.setCascadeOpacityEnabled(true);
        this._bag03.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._bag03, 0.4884, 0.5256);
        let _bag03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._bag03);
        _bag03LayoutComponent.setPositionPercentXEnabled(true);
        _bag03LayoutComponent.setPositionPercentX(0.4884);
        _bag03LayoutComponent.setPositionPercentYEnabled(true);
        _bag03LayoutComponent.setPositionPercentY(0.5256);

        ///// # _bag04
        this._bag04 = new EventCollectorGiftBag();
        this._bag04.setName("_bag04");
        this._layoutTab02.addChild(this._bag04);
        this._bag04.setCascadeOpacityEnabled(true);
        this._bag04.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._bag04, 0.2155, 0.4596);
        let _bag04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._bag04);
        _bag04LayoutComponent.setPositionPercentXEnabled(true);
        _bag04LayoutComponent.setPositionPercentX(0.2155);
        _bag04LayoutComponent.setPositionPercentYEnabled(true);
        _bag04LayoutComponent.setPositionPercentY(0.4596);

        ///// # _bag05
        this._bag05 = new EventCollectorGiftBag();
        this._bag05.setName("_bag05");
        this._layoutTab02.addChild(this._bag05);
        this._bag05.setCascadeOpacityEnabled(true);
        this._bag05.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._bag05, 0.8231, 0.4673);
        let _bag05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._bag05);
        _bag05LayoutComponent.setPositionPercentXEnabled(true);
        _bag05LayoutComponent.setPositionPercentX(0.8231);
        _bag05LayoutComponent.setPositionPercentYEnabled(true);
        _bag05LayoutComponent.setPositionPercentY(0.4673);

        ///// # _bag06
        this._bag06 = new EventCollectorGiftBag();
        this._bag06.setName("_bag06");
        this._layoutTab02.addChild(this._bag06);
        this._bag06.setCascadeOpacityEnabled(true);
        this._bag06.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._bag06, 0.549, 0.435);
        let _bag06LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._bag06);
        _bag06LayoutComponent.setPositionPercentXEnabled(true);
        _bag06LayoutComponent.setPositionPercentX(0.549);
        _bag06LayoutComponent.setPositionPercentYEnabled(true);
        _bag06LayoutComponent.setPositionPercentY(0.435);

        ///// # _bag07
        this._bag07 = new EventCollectorGiftBag();
        this._bag07.setName("_bag07");
        this._layoutTab02.addChild(this._bag07);
        this._bag07.setCascadeOpacityEnabled(true);
        this._bag07.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._bag07, 0.3194, 0.3901);
        let _bag07LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._bag07);
        _bag07LayoutComponent.setPositionPercentXEnabled(true);
        _bag07LayoutComponent.setPositionPercentX(0.3194);
        _bag07LayoutComponent.setPositionPercentYEnabled(true);
        _bag07LayoutComponent.setPositionPercentY(0.3901);

        ///// # _bag08
        this._bag08 = new EventCollectorGiftBag();
        this._bag08.setName("_bag08");
        this._layoutTab02.addChild(this._bag08);
        this._bag08.setCascadeOpacityEnabled(true);
        this._bag08.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._bag08, 0.7485, 0.3887);
        let _bag08LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._bag08);
        _bag08LayoutComponent.setPositionPercentXEnabled(true);
        _bag08LayoutComponent.setPositionPercentX(0.7485);
        _bag08LayoutComponent.setPositionPercentYEnabled(true);
        _bag08LayoutComponent.setPositionPercentY(0.3887);

        ///// # _imgTabs
        this._imgTabs = new ccui.ImageView();
        this._imgTabs.setName("_imgTabs");
        this._root.addChild(this._imgTabs);
        this._imgTabs.setCascadeOpacityEnabled(true);
        this._imgTabs.setCascadeColorEnabled(true);
        this._imgTabs.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTabs, 0.5, 0.0491);
        let _imgTabsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTabs);
        _imgTabsLayoutComponent.setPositionPercentXEnabled(true);
        _imgTabsLayoutComponent.setPositionPercentX(0.5);
        _imgTabsLayoutComponent.setPositionPercentYEnabled(true);
        _imgTabsLayoutComponent.setPositionPercentY(0.0491);
        this._imgTabs.loadTexture("event-collector/Tab_01.png", 1);
        this._imgTabs.setUnifySizeEnabled(false);
        this._imgTabs.ignoreContentAdaptWithSize(false);
        this._imgTabs.setContentSize(cc.size(228, 51));
        this._imgTabs.setTouchEnabled(false);

        ///// # _imgTab01
        this._imgTab01 = new ccui.ImageView();
        this._imgTab01.setName("_imgTab01");
        this._imgTabs.addChild(this._imgTab01);
        this._imgTab01.setCascadeOpacityEnabled(true);
        this._imgTab01.setCascadeColorEnabled(true);
        this._imgTab01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTab01, 0.252, 0.51);
        let _imgTab01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTab01);
        _imgTab01LayoutComponent.setPositionPercentXEnabled(true);
        _imgTab01LayoutComponent.setPositionPercentX(0.252);
        _imgTab01LayoutComponent.setPositionPercentYEnabled(true);
        _imgTab01LayoutComponent.setPositionPercentY(0.51);
        this._imgTab01.loadTexture("event-collector/Tab_02.png", 1);
        this._imgTab01.setUnifySizeEnabled(false);
        this._imgTab01.ignoreContentAdaptWithSize(false);
        this._imgTab01.setContentSize(cc.size(112, 48));
        this._imgTab01.setTouchEnabled(false);

        ///// # _imgTab02
        this._imgTab02 = new ccui.ImageView();
        this._imgTab02.setName("_imgTab02");
        this._imgTabs.addChild(this._imgTab02);
        this._imgTab02.setCascadeOpacityEnabled(true);
        this._imgTab02.setCascadeColorEnabled(true);
        this._imgTab02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTab02, 0.75, 0.51);
        let _imgTab02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTab02);
        _imgTab02LayoutComponent.setPositionPercentXEnabled(true);
        _imgTab02LayoutComponent.setPositionPercentX(0.75);
        _imgTab02LayoutComponent.setPositionPercentYEnabled(true);
        _imgTab02LayoutComponent.setPositionPercentY(0.51);
        this._imgTab02.loadTexture("event-collector/Tab_02.png", 1);
        this._imgTab02.setUnifySizeEnabled(false);
        this._imgTab02.ignoreContentAdaptWithSize(false);
        this._imgTab02.setContentSize(cc.size(112, 48));
        this._imgTab02.setTouchEnabled(false);

        ///// # _txtTab01
        this._txtTab01 = new ck.Text();
        this._txtTab01.setName("_txtTab01");
        this._imgTabs.addChild(this._txtTab01);
        this._txtTab01.setCascadeOpacityEnabled(true);
        this._txtTab01.setCascadeColorEnabled(true);
        this._txtTab01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTab01, 0.25, 0.51);
        this._txtTab01.setTextColor(cc.color(115, 61, 23, 255));
        let _txtTab01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTab01);
        _txtTab01LayoutComponent.setPositionPercentXEnabled(true);
        _txtTab01LayoutComponent.setPositionPercentX(0.25);
        _txtTab01LayoutComponent.setPositionPercentYEnabled(true);
        _txtTab01LayoutComponent.setPositionPercentY(0.51);
        this._txtTab01.setTouchEnabled(false);
        this._txtTab01.ignoreContentAdaptWithSize(true);
        this._txtTab01.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTab01.setDefaultFontSize(30);
        this._txtTab01.setString(gm.localize.getText("TXT_EXCHANGE").toUpperCase());
        this._txtTab01.setTextHorizontalAlignment(1);
        this._txtTab01.setTextVerticalAlignment(1);

        ///// # _txtTab02
        this._txtTab02 = new ck.Text();
        this._txtTab02.setName("_txtTab02");
        this._imgTabs.addChild(this._txtTab02);
        this._txtTab02.setCascadeOpacityEnabled(true);
        this._txtTab02.setCascadeColorEnabled(true);
        this._txtTab02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTab02, 0.75, 0.51);
        this._txtTab02.setTextColor(cc.color(175, 124, 78, 255));
        let _txtTab02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTab02);
        _txtTab02LayoutComponent.setPositionPercentXEnabled(true);
        _txtTab02LayoutComponent.setPositionPercentX(0.75);
        _txtTab02LayoutComponent.setPositionPercentYEnabled(true);
        _txtTab02LayoutComponent.setPositionPercentY(0.51);
        this._txtTab02.setTouchEnabled(false);
        this._txtTab02.ignoreContentAdaptWithSize(true);
        this._txtTab02.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTab02.setDefaultFontSize(30);
        this._txtTab02.setString(gm.localize.getText("TXT_GET_GIFT"));
        this._txtTab02.setTextHorizontalAlignment(1);
        this._txtTab02.setTextVerticalAlignment(1);

        ///// # _imgTab01Area
        this._imgTab01Area = new ccui.ImageView();
        this._imgTab01Area.setName("_imgTab01Area");
        this._imgTabs.addChild(this._imgTab01Area);
        this._imgTab01Area.setCascadeOpacityEnabled(true);
        this._imgTab01Area.setCascadeColorEnabled(true);
        this._imgTab01Area.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTab01Area, 0.252, 0.51);
        this._imgTab01Area.setOpacity(0);
        let _imgTab01AreaLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTab01Area);
        _imgTab01AreaLayoutComponent.setPositionPercentXEnabled(true);
        _imgTab01AreaLayoutComponent.setPositionPercentX(0.252);
        _imgTab01AreaLayoutComponent.setPositionPercentYEnabled(true);
        _imgTab01AreaLayoutComponent.setPositionPercentY(0.51);
        this._imgTab01Area.loadTexture("event-collector/Tab_02.png", 1);
        this._imgTab01Area.setUnifySizeEnabled(false);
        this._imgTab01Area.ignoreContentAdaptWithSize(false);
        this._imgTab01Area.setContentSize(cc.size(112, 48));
        this._imgTab01Area.setTouchEnabled(false);

        ///// # _imgTab02Area
        this._imgTab02Area = new ccui.ImageView();
        this._imgTab02Area.setName("_imgTab02Area");
        this._imgTabs.addChild(this._imgTab02Area);
        this._imgTab02Area.setCascadeOpacityEnabled(true);
        this._imgTab02Area.setCascadeColorEnabled(true);
        this._imgTab02Area.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTab02Area, 0.75, 0.51);
        this._imgTab02Area.setOpacity(0);
        let _imgTab02AreaLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTab02Area);
        _imgTab02AreaLayoutComponent.setPositionPercentXEnabled(true);
        _imgTab02AreaLayoutComponent.setPositionPercentX(0.75);
        _imgTab02AreaLayoutComponent.setPositionPercentYEnabled(true);
        _imgTab02AreaLayoutComponent.setPositionPercentY(0.51);
        this._imgTab02Area.loadTexture("event-collector/Tab_02.png", 1);
        this._imgTab02Area.setUnifySizeEnabled(false);
        this._imgTab02Area.ignoreContentAdaptWithSize(false);
        this._imgTab02Area.setContentSize(cc.size(112, 48));
        this._imgTab02Area.setTouchEnabled(false);

        ///// # _redDotTab01
        this._redDotTab01 = new cc.Sprite();
        this._redDotTab01.setName("_redDotTab01");
        this._imgTabs.addChild(this._redDotTab01);
        this._redDotTab01.setCascadeOpacityEnabled(true);
        this._redDotTab01.setCascadeColorEnabled(true);
        this._redDotTab01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._redDotTab01, 0.4954, 0.873);
        let _redDotTab01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._redDotTab01);
        let sf = cc.spriteFrameCache.getSpriteFrame("basics/other/RedDot.png"); if (sf) this._redDotTab01.setSpriteFrame(sf);
        let _redDotTab01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _redDotTab01BlendFunc.src = 1;
        _redDotTab01BlendFunc.dst = 771;
        this._redDotTab01.setBlendFunc(_redDotTab01BlendFunc);

        ///// # _redDotTab02
        this._redDotTab02 = new cc.Sprite();
        this._redDotTab02.setName("_redDotTab02");
        this._imgTabs.addChild(this._redDotTab02);
        this._redDotTab02.setCascadeOpacityEnabled(true);
        this._redDotTab02.setCascadeColorEnabled(true);
        this._redDotTab02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._redDotTab02, 0.9822, 0.8729);
        let _redDotTab02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._redDotTab02);
        let sf = cc.spriteFrameCache.getSpriteFrame("basics/other/RedDot.png"); if (sf) this._redDotTab02.setSpriteFrame(sf);
        let _redDotTab02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _redDotTab02BlendFunc.src = 1;
        _redDotTab02BlendFunc.dst = 771;
        this._redDotTab02.setBlendFunc(_redDotTab02BlendFunc);

        ///// # _imgTicket
        this._imgTicket = new ccui.ImageView();
        this._imgTicket.setName("_imgTicket");
        this._root.addChild(this._imgTicket);
        this._imgTicket.setCascadeOpacityEnabled(true);
        this._imgTicket.setCascadeColorEnabled(true);
        this._imgTicket.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTicket, 0.8362, 0.0482);
        let _imgTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTicket);
        _imgTicketLayoutComponent.setPositionPercentXEnabled(true);
        _imgTicketLayoutComponent.setPositionPercentX(0.8362);
        _imgTicketLayoutComponent.setPositionPercentYEnabled(true);
        _imgTicketLayoutComponent.setPositionPercentY(0.0482);
        this._imgTicket.loadTexture("event-collector/BoxTicket.png", 1);
        this._imgTicket.setUnifySizeEnabled(false);
        this._imgTicket.ignoreContentAdaptWithSize(false);
        this._imgTicket.setContentSize(cc.size(127, 39));
        this._imgTicket.setTouchEnabled(false);

        ///// # _imgTicketIcon
        this._imgTicketIcon = new ccui.ImageView();
        this._imgTicketIcon.setName("_imgTicketIcon");
        this._imgTicket.addChild(this._imgTicketIcon);
        this._imgTicketIcon.setCascadeOpacityEnabled(true);
        this._imgTicketIcon.setCascadeColorEnabled(true);
        this._imgTicketIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTicketIcon, 0.0236, 0.5231);
        let _imgTicketIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTicketIcon);
        _imgTicketIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgTicketIconLayoutComponent.setPositionPercentX(0.0236);
        _imgTicketIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgTicketIconLayoutComponent.setPositionPercentY(0.5231);
        this._imgTicketIcon.loadTexture("event-collector/Ticket.png", 1);
        this._imgTicketIcon.setUnifySizeEnabled(false);
        this._imgTicketIcon.ignoreContentAdaptWithSize(false);
        this._imgTicketIcon.setContentSize(cc.size(55, 55));
        this._imgTicketIcon.setTouchEnabled(false);

        ///// # _txtTicket
        this._txtTicket = new ck.Text();
        this._txtTicket.setName("_txtTicket");
        this._imgTicket.addChild(this._txtTicket);
        this._txtTicket.setCascadeOpacityEnabled(true);
        this._txtTicket.setCascadeColorEnabled(true);
        this._txtTicket.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTicket, 0.5, 0.5);
        let _txtTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTicket);
        _txtTicketLayoutComponent.setPositionPercentXEnabled(true);
        _txtTicketLayoutComponent.setPositionPercentX(0.5);
        _txtTicketLayoutComponent.setPositionPercentYEnabled(true);
        _txtTicketLayoutComponent.setPositionPercentY(0.5);
        this._txtTicket.setTouchEnabled(false);
        this._txtTicket.ignoreContentAdaptWithSize(true);
        this._txtTicket.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTicket.setDefaultFontSize(27);
        this._txtTicket.setTextHorizontalAlignment(1);
        this._txtTicket.setTextVerticalAlignment(1);
        this._txtTicket.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _btnAddTicket
        this._btnAddTicket = new ccui.Button();
        this._btnAddTicket.setName("_btnAddTicket");
        this._imgTicket.addChild(this._btnAddTicket);
        this._btnAddTicket.setCascadeOpacityEnabled(true);
        this._btnAddTicket.setCascadeColorEnabled(true);
        this._btnAddTicket.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAddTicket, 1.0235, 0.4761);
        let _btnAddTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddTicket);
        _btnAddTicketLayoutComponent.setPositionPercentXEnabled(true);
        _btnAddTicketLayoutComponent.setPositionPercentX(1.0235);
        _btnAddTicketLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddTicketLayoutComponent.setPositionPercentY(0.4761);
        this._btnAddTicket.loadTextureDisabled("buttons/rectangles/Plus.png", 1);
        this._btnAddTicket.loadTexturePressed("buttons/rectangles/Plus.png", 1);
        this._btnAddTicket.loadTextureNormal("buttons/rectangles/Plus.png", 1);
        this._btnAddTicket.setUnifySizeEnabled(false);
        this._btnAddTicket.ignoreContentAdaptWithSize(false);
        this._btnAddTicket.setContentSize(cc.size(42, 42));
        this._btnAddTicket.setTouchEnabled(true);

        ///// # _imgTime
        this._imgTime = new ccui.ImageView();
        this._imgTime.setName("_imgTime");
        this._root.addChild(this._imgTime);
        this._imgTime.setCascadeOpacityEnabled(true);
        this._imgTime.setCascadeColorEnabled(true);
        this._imgTime.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTime, 0.1558, 0.046);
        let _imgTimeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTime);
        _imgTimeLayoutComponent.setPositionPercentXEnabled(true);
        _imgTimeLayoutComponent.setPositionPercentX(0.1558);
        _imgTimeLayoutComponent.setPositionPercentYEnabled(true);
        _imgTimeLayoutComponent.setPositionPercentY(0.046);
        this._imgTime.loadTexture("event-collector/BoxTicket.png", 1);
        this._imgTime.setUnifySizeEnabled(false);
        this._imgTime.ignoreContentAdaptWithSize(false);
        this._imgTime.setScale9Enabled(true);
        this._imgTime.setCapInsets(cc.rect(53, 17, 18, 6));
        this._imgTime.setContentSize(cc.size(127, 39));
        this._imgTime.setTouchEnabled(false);

        ///// # _imgClock
        this._imgClock = new ccui.ImageView();
        this._imgClock.setName("_imgClock");
        this._imgTime.addChild(this._imgClock);
        this._imgClock.setCascadeOpacityEnabled(true);
        this._imgClock.setCascadeColorEnabled(true);
        this._imgClock.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClock, 0.1149, 0.558);
        let _imgClockLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClock);
        _imgClockLayoutComponent.setPositionPercentXEnabled(true);
        _imgClockLayoutComponent.setPositionPercentX(0.1149);
        _imgClockLayoutComponent.setPositionPercentYEnabled(true);
        _imgClockLayoutComponent.setPositionPercentY(0.558);
        this._imgClock.loadTexture("icons/color/basic/Clock.png", 1);
        this._imgClock.setUnifySizeEnabled(false);
        this._imgClock.ignoreContentAdaptWithSize(false);
        this._imgClock.setContentSize(cc.size(47, 56));
        this._imgClock.setTouchEnabled(false);

        ///// # _txtTimeLeft
        this._txtTimeLeft = new ck.Text();
        this._txtTimeLeft.setName("_txtTimeLeft");
        this._imgTime.addChild(this._txtTimeLeft);
        this._txtTimeLeft.setCascadeOpacityEnabled(true);
        this._txtTimeLeft.setCascadeColorEnabled(true);
        this._txtTimeLeft.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTimeLeft, 0.6279, 0.4739);
        let _txtTimeLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTimeLeft);
        _txtTimeLeftLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentX(0.6279);
        _txtTimeLeftLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentY(0.4739);
        this._txtTimeLeft.setTouchEnabled(false);
        this._txtTimeLeft.ignoreContentAdaptWithSize(true);
        this._txtTimeLeft.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTimeLeft.setDefaultFontSize(28);
        this._txtTimeLeft.setString(gm.localize.getText("TXT_5D_3H"));
        this._txtTimeLeft.setTextHorizontalAlignment(1);
        this._txtTimeLeft.setTextVerticalAlignment(1);
        this._txtTimeLeft.enableOutline(cc.color(81, 57, 0, 255), 1);

    },



});

/**
 * Create EventCollectorPopup
 * @returns {_ccs.EventCollectorPopup}
 */
_ccs.EventCollectorPopup.create = function () {
    return new _ccs.EventCollectorPopup();
};
