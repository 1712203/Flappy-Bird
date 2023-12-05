/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PokerHandRankingsTab
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.PokerHandRankingsTab = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutHands: null,


    /**
     * _ccs.PokerHandRankingsTab constructor
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

        ///// # _layoutHands
        this._layoutHands = new ccui.Layout();
        this._layoutHands.setName("_layoutHands");
        this.addChild(this._layoutHands);
        this._layoutHands.setCascadeOpacityEnabled(true);
        this._layoutHands.setCascadeColorEnabled(true);
        this._layoutHands.setPosition(0, 0.0002);
        let _layoutHandsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHands);
        this._layoutHands.setTouchEnabled(false);
        this._layoutHands.setUnifySizeEnabled(false);
        this._layoutHands.ignoreContentAdaptWithSize(false);
        this._layoutHands.setContentSize(cc.size(510, 730.3785));

    },



});

/**
 * Create PokerHandRankingsTab
 * @returns {_ccs.PokerHandRankingsTab}
 */
_ccs.PokerHandRankingsTab.create = function () {
    return new _ccs.PokerHandRankingsTab();
};
