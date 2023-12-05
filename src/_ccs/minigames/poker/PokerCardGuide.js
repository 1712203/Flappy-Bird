/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PokerCardGuide
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.PokerCardGuide = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutGuide: null,
    /** @type {ccui.Layout} */
    _layoutCards: null,
    /** @type {cc.Node} */
    _nodeCard0: null,
    /** @type {cc.Node} */
    _nodeCard1: null,
    /** @type {cc.Node} */
    _nodeCard2: null,
    /** @type {cc.Node} */
    _nodeCard3: null,
    /** @type {cc.Node} */
    _nodeCard4: null,
    /** @type {ck.Text} */
    _txtName: null,
    /** @type {ck.Text} */
    _txtDescription: null,


    /**
     * _ccs.PokerCardGuide constructor
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

        ///// # _layoutGuide
        this._layoutGuide = new ccui.Layout();
        this._layoutGuide.setName("_layoutGuide");
        this.addChild(this._layoutGuide);
        this._layoutGuide.setCascadeOpacityEnabled(true);
        this._layoutGuide.setCascadeColorEnabled(true);
        this._layoutGuide.setAnchorPoint(cc.p(0.5, 0.5));
        this._layoutGuide.setPosition(0.0043, 0);
        let _layoutGuideLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGuide);
        this._layoutGuide.setTouchEnabled(true);
        this._layoutGuide.setUnifySizeEnabled(false);
        this._layoutGuide.ignoreContentAdaptWithSize(false);
        this._layoutGuide.setContentSize(cc.size(514.63, 76.9333));

        ///// # _layoutCards
        this._layoutCards = new ccui.Layout();
        this._layoutCards.setName("_layoutCards");
        this._layoutGuide.addChild(this._layoutCards);
        this._layoutCards.setCascadeOpacityEnabled(true);
        this._layoutCards.setCascadeColorEnabled(true);
        this._layoutCards.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._layoutCards, 0.0075, 1);
        let _layoutCardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCards);
        _layoutCardsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCardsLayoutComponent.setPositionPercentX(0.0075);
        _layoutCardsLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCardsLayoutComponent.setPositionPercentY(1);
        this._layoutCards.setTouchEnabled(true);
        this._layoutCards.setUnifySizeEnabled(false);
        this._layoutCards.ignoreContentAdaptWithSize(false);
        this._layoutCards.setContentSize(cc.size(247.4727, 67.9817));

        ///// # _nodeCard0
        this._nodeCard0 = new cc.Node();
        this._nodeCard0.setName("_nodeCard0");
        this._layoutCards.addChild(this._nodeCard0);
        this._nodeCard0.setCascadeOpacityEnabled(true);
        this._nodeCard0.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeCard0, 0.1043, 0.5);
        this._nodeCard0.setScale(0.24, 0.24);
        let _nodeCard0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCard0);
        _nodeCard0LayoutComponent.setPositionPercentXEnabled(true);
        _nodeCard0LayoutComponent.setPositionPercentX(0.1043);
        _nodeCard0LayoutComponent.setPositionPercentYEnabled(true);
        _nodeCard0LayoutComponent.setPositionPercentY(0.5);

        ///// # _nodeCard1
        this._nodeCard1 = new cc.Node();
        this._nodeCard1.setName("_nodeCard1");
        this._layoutCards.addChild(this._nodeCard1);
        this._nodeCard1.setCascadeOpacityEnabled(true);
        this._nodeCard1.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeCard1, 0.296, 0.5);
        this._nodeCard1.setScale(0.24, 0.24);
        let _nodeCard1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCard1);
        _nodeCard1LayoutComponent.setPositionPercentXEnabled(true);
        _nodeCard1LayoutComponent.setPositionPercentX(0.296);
        _nodeCard1LayoutComponent.setPositionPercentYEnabled(true);
        _nodeCard1LayoutComponent.setPositionPercentY(0.5);

        ///// # _nodeCard2
        this._nodeCard2 = new cc.Node();
        this._nodeCard2.setName("_nodeCard2");
        this._layoutCards.addChild(this._nodeCard2);
        this._nodeCard2.setCascadeOpacityEnabled(true);
        this._nodeCard2.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeCard2, 0.4877, 0.5);
        this._nodeCard2.setScale(0.24, 0.24);
        let _nodeCard2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCard2);
        _nodeCard2LayoutComponent.setPositionPercentXEnabled(true);
        _nodeCard2LayoutComponent.setPositionPercentX(0.4877);
        _nodeCard2LayoutComponent.setPositionPercentYEnabled(true);
        _nodeCard2LayoutComponent.setPositionPercentY(0.5);

        ///// # _nodeCard3
        this._nodeCard3 = new cc.Node();
        this._nodeCard3.setName("_nodeCard3");
        this._layoutCards.addChild(this._nodeCard3);
        this._nodeCard3.setCascadeOpacityEnabled(true);
        this._nodeCard3.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeCard3, 0.6794, 0.5);
        this._nodeCard3.setScale(0.24, 0.24);
        let _nodeCard3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCard3);
        _nodeCard3LayoutComponent.setPositionPercentXEnabled(true);
        _nodeCard3LayoutComponent.setPositionPercentX(0.6794);
        _nodeCard3LayoutComponent.setPositionPercentYEnabled(true);
        _nodeCard3LayoutComponent.setPositionPercentY(0.5);

        ///// # _nodeCard4
        this._nodeCard4 = new cc.Node();
        this._nodeCard4.setName("_nodeCard4");
        this._layoutCards.addChild(this._nodeCard4);
        this._nodeCard4.setCascadeOpacityEnabled(true);
        this._nodeCard4.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeCard4, 0.8712, 0.5);
        this._nodeCard4.setScale(0.24, 0.24);
        let _nodeCard4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCard4);
        _nodeCard4LayoutComponent.setPositionPercentXEnabled(true);
        _nodeCard4LayoutComponent.setPositionPercentX(0.8712);
        _nodeCard4LayoutComponent.setPositionPercentYEnabled(true);
        _nodeCard4LayoutComponent.setPositionPercentY(0.5);

        ///// # _txtName
        this._txtName = new ck.Text();
        this._txtName.setName("_txtName");
        this._layoutGuide.addChild(this._txtName);
        this._txtName.setCascadeOpacityEnabled(true);
        this._txtName.setCascadeColorEnabled(true);
        this._txtName.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName, 0.5, 0.8501);
        this._txtName.setTextColor(cc.color(255, 255, 0, 255));
        let _txtNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName);
        _txtNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameLayoutComponent.setPositionPercentX(0.5);
        _txtNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameLayoutComponent.setPositionPercentY(0.8501);
        this._txtName.setTouchEnabled(false);
        this._txtName.ignoreContentAdaptWithSize(true);
        this._txtName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName.setDefaultFontSize(25);
        this._txtName.setString(gm.localize.getText("TXT_ROYAL_FLUSH"));
        this._txtName.setTextHorizontalAlignment(0);
        this._txtName.setTextVerticalAlignment(0);

        ///// # _txtDescription
        this._txtDescription = new ck.Text();
        this._txtDescription.setName("_txtDescription");
        this._layoutGuide.addChild(this._txtDescription);
        this._txtDescription.setCascadeOpacityEnabled(true);
        this._txtDescription.setCascadeColorEnabled(true);
        this._txtDescription.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtDescription, 0.5, 0.6951);
        let _txtDescriptionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDescription);
        _txtDescriptionLayoutComponent.setPositionPercentXEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentX(0.5);
        _txtDescriptionLayoutComponent.setPositionPercentYEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentY(0.6951);
        this._txtDescription.setTouchEnabled(false);
        this._txtDescription.setUnifySizeEnabled(false);
        this._txtDescription.ignoreContentAdaptWithSize(false);
        this._txtDescription.setContentSize(cc.size(248.9908, 48.7697));
        this._txtDescription.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDescription.setDefaultFontSize(20);
        this._txtDescription.setString("Ace-king-queen-jack-10 all of the same suit");
        this._txtDescription.setTextHorizontalAlignment(0);
        this._txtDescription.setTextVerticalAlignment(0);

    },



});

/**
 * Create PokerCardGuide
 * @returns {_ccs.PokerCardGuide}
 */
_ccs.PokerCardGuide.create = function () {
    return new _ccs.PokerCardGuide();
};
