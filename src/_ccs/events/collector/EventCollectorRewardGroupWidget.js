/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.EventCollectorRewardGroupWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.EventCollectorRewardGroupWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBackground01: null,
    /** @type {ccui.ImageView} */
    _imgBackground02: null,
    /** @type {ck.Text} */
    _txtReward: null,
    /** @type {ck.GridViewHorizontal} */
    _gridRewards: null,
    /** @type {ccui.ImageView} */
    _imgItemsBgr: null,
    /** @type {ck.GridViewHorizontal} */
    _gridItems: null,
    /** @type {ccui.ImageView} */
    _imgExchange: null,
    /** @type {ck.Text} */
    _txtExchange: null,
    /** @type {ccui.ImageView} */
    _imgPlus: null,
    /** @type {ccui.ImageView} */
    _imgMinus: null,


    /**
     * _ccs.EventCollectorRewardGroupWidget constructor
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
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(560, 160));

        ///// # _imgBackground01
        this._imgBackground01 = new ccui.ImageView();
        this._imgBackground01.setName("_imgBackground01");
        this._root.addChild(this._imgBackground01);
        this._imgBackground01.setCascadeOpacityEnabled(true);
        this._imgBackground01.setCascadeColorEnabled(true);
        this._imgBackground01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground01, 0.5, 0.5);
        let _imgBackground01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground01);
        _imgBackground01LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackground01LayoutComponent.setPositionPercentX(0.5);
        _imgBackground01LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackground01LayoutComponent.setPositionPercentY(0.5);
        this._imgBackground01.loadTexture("event-collector/BoardReward_02.png", 1);
        this._imgBackground01.setUnifySizeEnabled(false);
        this._imgBackground01.ignoreContentAdaptWithSize(false);
        this._imgBackground01.setContentSize(cc.size(559, 160));
        this._imgBackground01.setTouchEnabled(false);

        ///// # _imgBackground02
        this._imgBackground02 = new ccui.ImageView();
        this._imgBackground02.setName("_imgBackground02");
        this._root.addChild(this._imgBackground02);
        this._imgBackground02.setCascadeOpacityEnabled(true);
        this._imgBackground02.setCascadeColorEnabled(true);
        this._imgBackground02.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground02, 0, 0.5);
        let _imgBackground02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground02);
        _imgBackground02LayoutComponent.setPositionPercentXEnabled(true);
        _imgBackground02LayoutComponent.setPositionPercentX(0);
        _imgBackground02LayoutComponent.setPositionPercentYEnabled(true);
        _imgBackground02LayoutComponent.setPositionPercentY(0.5);
        this._imgBackground02.loadTexture("event-collector/BoardReward.png", 1);
        this._imgBackground02.setUnifySizeEnabled(false);
        this._imgBackground02.ignoreContentAdaptWithSize(false);
        this._imgBackground02.setContentSize(cc.size(255, 160));
        this._imgBackground02.setTouchEnabled(false);

        ///// # _txtReward
        this._txtReward = new ck.Text();
        this._txtReward.setName("_txtReward");
        this._root.addChild(this._txtReward);
        this._txtReward.setCascadeOpacityEnabled(true);
        this._txtReward.setCascadeColorEnabled(true);
        this._txtReward.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtReward, 0.2258, 0.7806);
        this._txtReward.setTextColor(cc.color(255, 253, 201, 255));
        let _txtRewardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtReward);
        _txtRewardLayoutComponent.setPositionPercentXEnabled(true);
        _txtRewardLayoutComponent.setPositionPercentX(0.2258);
        _txtRewardLayoutComponent.setPositionPercentYEnabled(true);
        _txtRewardLayoutComponent.setPositionPercentY(0.7806);
        this._txtReward.setTouchEnabled(false);
        this._txtReward.ignoreContentAdaptWithSize(true);
        this._txtReward.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtReward.setDefaultFontSize(35);
        this._txtReward.setString(gm.localize.getText("TXT_REWARD"));
        this._txtReward.setTextHorizontalAlignment(1);
        this._txtReward.setTextVerticalAlignment(1);

        ///// # _gridRewards
        this._gridRewards = new ck.GridViewHorizontal();
        this._gridRewards.setName("_gridRewards");
        this._root.addChild(this._gridRewards);
        this._gridRewards.setCascadeOpacityEnabled(true);
        this._gridRewards.setCascadeColorEnabled(true);
        this._gridRewards.setAnchorPoint(cc.p(0.5, 0.5026));
        ck.UIUtils.setPositionPercent(this._gridRewards, 0.2253, 0.4125);
        let _gridRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridRewards);
        _gridRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentX(0.2253);
        _gridRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentY(0.4125);

        ///// # _imgItemsBgr
        this._imgItemsBgr = new ccui.ImageView();
        this._imgItemsBgr.setName("_imgItemsBgr");
        this._root.addChild(this._imgItemsBgr);
        this._imgItemsBgr.setCascadeOpacityEnabled(true);
        this._imgItemsBgr.setCascadeColorEnabled(true);
        this._imgItemsBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgItemsBgr, 0.7229, 0.71);
        this._imgItemsBgr.setOpacity(41);
        this._imgItemsBgr.setColor(cc.color(123, 87, 0, 255));
        let _imgItemsBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgItemsBgr);
        _imgItemsBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgItemsBgrLayoutComponent.setPositionPercentX(0.7229);
        _imgItemsBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgItemsBgrLayoutComponent.setPositionPercentY(0.71);
        this._imgItemsBgr.loadTexture("sprites/basics/Rounded32x32.png", 0);
        this._imgItemsBgr.setUnifySizeEnabled(false);
        this._imgItemsBgr.ignoreContentAdaptWithSize(false);
        this._imgItemsBgr.setScale9Enabled(true);
        this._imgItemsBgr.setCapInsets(cc.rect(10, 10, 12, 12));
        this._imgItemsBgr.setContentSize(cc.size(285, 60));
        this._imgItemsBgr.setTouchEnabled(false);

        ///// # _gridItems
        this._gridItems = new ck.GridViewHorizontal();
        this._gridItems.setName("_gridItems");
        this._root.addChild(this._gridItems);
        this._gridItems.setCascadeOpacityEnabled(true);
        this._gridItems.setCascadeColorEnabled(true);
        this._gridItems.setAnchorPoint(cc.p(0.5, 0.5026));
        ck.UIUtils.setPositionPercent(this._gridItems, 0.7229, 0.71);
        let _gridItemsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridItems);
        _gridItemsLayoutComponent.setPositionPercentXEnabled(true);
        _gridItemsLayoutComponent.setPositionPercentX(0.7229);
        _gridItemsLayoutComponent.setPositionPercentYEnabled(true);
        _gridItemsLayoutComponent.setPositionPercentY(0.71);

        ///// # _imgExchange
        this._imgExchange = new ccui.ImageView();
        this._imgExchange.setName("_imgExchange");
        this._root.addChild(this._imgExchange);
        this._imgExchange.setCascadeOpacityEnabled(true);
        this._imgExchange.setCascadeColorEnabled(true);
        this._imgExchange.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgExchange, 0.734, 0.3053);
        let _imgExchangeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExchange);
        _imgExchangeLayoutComponent.setPositionPercentXEnabled(true);
        _imgExchangeLayoutComponent.setPositionPercentX(0.734);
        _imgExchangeLayoutComponent.setPositionPercentYEnabled(true);
        _imgExchangeLayoutComponent.setPositionPercentY(0.3053);
        this._imgExchange.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgExchange.setUnifySizeEnabled(false);
        this._imgExchange.ignoreContentAdaptWithSize(false);
        this._imgExchange.setContentSize(cc.size(128.2653, 50.4344));
        this._imgExchange.setTouchEnabled(false);

        ///// # _txtExchange
        this._txtExchange = new ck.Text();
        this._txtExchange.setName("_txtExchange");
        this._imgExchange.addChild(this._txtExchange);
        this._txtExchange.setCascadeOpacityEnabled(true);
        this._txtExchange.setCascadeColorEnabled(true);
        this._txtExchange.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtExchange, 0.5, 0.55);
        this._txtExchange.setTextColor(cc.color(0, 90, 0, 255));
        let _txtExchangeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtExchange);
        _txtExchangeLayoutComponent.setPositionPercentXEnabled(true);
        _txtExchangeLayoutComponent.setPositionPercentX(0.5);
        _txtExchangeLayoutComponent.setPositionPercentYEnabled(true);
        _txtExchangeLayoutComponent.setPositionPercentY(0.55);
        this._txtExchange.setTouchEnabled(false);
        this._txtExchange.ignoreContentAdaptWithSize(true);
        this._txtExchange.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtExchange.setDefaultFontSize(27);
        this._txtExchange.setString(gm.localize.getText("TXT_EXCHANGE").toUpperCase());
        this._txtExchange.setTextHorizontalAlignment(1);
        this._txtExchange.setTextVerticalAlignment(1);

        ///// # _imgPlus
        this._imgPlus = new ccui.ImageView();
        this._imgPlus.setName("_imgPlus");
        this._root.addChild(this._imgPlus);
        this._imgPlus.setCascadeOpacityEnabled(true);
        this._imgPlus.setCascadeColorEnabled(true);
        this._imgPlus.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPlus, 0.8902, 0.31);
        let _imgPlusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPlus);
        _imgPlusLayoutComponent.setPositionPercentXEnabled(true);
        _imgPlusLayoutComponent.setPositionPercentX(0.8902);
        _imgPlusLayoutComponent.setPositionPercentYEnabled(true);
        _imgPlusLayoutComponent.setPositionPercentY(0.31);
        this._imgPlus.loadTexture("event-collector/Plus.png", 1);
        this._imgPlus.setUnifySizeEnabled(false);
        this._imgPlus.ignoreContentAdaptWithSize(false);
        this._imgPlus.setContentSize(cc.size(41, 41));
        this._imgPlus.setTouchEnabled(false);

        ///// # _imgMinus
        this._imgMinus = new ccui.ImageView();
        this._imgMinus.setName("_imgMinus");
        this._root.addChild(this._imgMinus);
        this._imgMinus.setCascadeOpacityEnabled(true);
        this._imgMinus.setCascadeColorEnabled(true);
        this._imgMinus.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgMinus, 0.5766, 0.301);
        let _imgMinusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgMinus);
        _imgMinusLayoutComponent.setPositionPercentXEnabled(true);
        _imgMinusLayoutComponent.setPositionPercentX(0.5766);
        _imgMinusLayoutComponent.setPositionPercentYEnabled(true);
        _imgMinusLayoutComponent.setPositionPercentY(0.301);
        this._imgMinus.loadTexture("event-collector/Minus.png", 1);
        this._imgMinus.setUnifySizeEnabled(false);
        this._imgMinus.ignoreContentAdaptWithSize(false);
        this._imgMinus.setContentSize(cc.size(41, 41));
        this._imgMinus.setTouchEnabled(false);

    },



});

/**
 * Create EventCollectorRewardGroupWidget
 * @returns {_ccs.EventCollectorRewardGroupWidget}
 */
_ccs.EventCollectorRewardGroupWidget.create = function () {
    return new _ccs.EventCollectorRewardGroupWidget();
};
