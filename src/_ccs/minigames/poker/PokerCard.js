/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PokerCard
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.PokerCard = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutMain: null,
    /** @type {ccui.Layout} */
    _layoutCard: null,
    /** @type {ccui.ImageView} */
    _imgCardFaceDown: null,
    /** @type {ccui.ImageView} */
    _imgBlack: null,
    /** @type {ccui.ImageView} */
    _imgHoldState: null,
    /** @type {ck.Text} */
    _txtHold: null,


    /**
     * _ccs.PokerCard constructor
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

        ///// # _layoutMain
        this._layoutMain = new ccui.Layout();
        this._layoutMain.setName("_layoutMain");
        this.addChild(this._layoutMain);
        this._layoutMain.setCascadeOpacityEnabled(true);
        this._layoutMain.setCascadeColorEnabled(true);
        this._layoutMain.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutMainLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutMain);
        this._layoutMain.setTouchEnabled(false);
        this._layoutMain.setUnifySizeEnabled(false);
        this._layoutMain.ignoreContentAdaptWithSize(false);
        this._layoutMain.setContentSize(cc.size(186, 256));

        ///// # _layoutCard
        this._layoutCard = new ccui.Layout();
        this._layoutCard.setName("_layoutCard");
        this._layoutMain.addChild(this._layoutCard);
        this._layoutCard.setCascadeOpacityEnabled(true);
        this._layoutCard.setCascadeColorEnabled(true);
        this._layoutCard.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCard, 0.5, 0.5);
        let _layoutCardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCard);
        _layoutCardLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCardLayoutComponent.setPositionPercentX(0.5);
        _layoutCardLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCardLayoutComponent.setPositionPercentY(0.5);
        this._layoutCard.setTouchEnabled(true);
        this._layoutCard.setUnifySizeEnabled(false);
        this._layoutCard.ignoreContentAdaptWithSize(false);
        this._layoutCard.setContentSize(cc.size(186, 256));

        ///// # _imgCardFaceDown
        this._imgCardFaceDown = new ccui.ImageView();
        this._imgCardFaceDown.setName("_imgCardFaceDown");
        this._layoutCard.addChild(this._imgCardFaceDown);
        this._imgCardFaceDown.setCascadeOpacityEnabled(true);
        this._imgCardFaceDown.setCascadeColorEnabled(true);
        this._imgCardFaceDown.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCardFaceDown, 0.5, 0.5);
        let _imgCardFaceDownLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCardFaceDown);
        _imgCardFaceDownLayoutComponent.setPositionPercentXEnabled(true);
        _imgCardFaceDownLayoutComponent.setPositionPercentX(0.5);
        _imgCardFaceDownLayoutComponent.setPositionPercentYEnabled(true);
        _imgCardFaceDownLayoutComponent.setPositionPercentY(0.5);
        this._imgCardFaceDown.loadTexture("cards/backs/Green.png", 1);
        this._imgCardFaceDown.setUnifySizeEnabled(false);
        this._imgCardFaceDown.ignoreContentAdaptWithSize(false);
        this._imgCardFaceDown.setContentSize(cc.size(186, 256));
        this._imgCardFaceDown.setTouchEnabled(false);

        ///// # _imgBlack
        this._imgBlack = new ccui.ImageView();
        this._imgBlack.setName("_imgBlack");
        this._layoutCard.addChild(this._imgBlack);
        this._imgBlack.setCascadeOpacityEnabled(true);
        this._imgBlack.setCascadeColorEnabled(true);
        this._imgBlack.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBlack, 0.5, 0.5);
        this._imgBlack.setOpacity(102);
        this._imgBlack.setColor(cc.color(0, 0, 0, 255));
        let _imgBlackLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBlack);
        _imgBlackLayoutComponent.setPositionPercentXEnabled(true);
        _imgBlackLayoutComponent.setPositionPercentX(0.5);
        _imgBlackLayoutComponent.setPositionPercentYEnabled(true);
        _imgBlackLayoutComponent.setPositionPercentY(0.5);
        this._imgBlack.loadTexture("cards/backs/Blue.png", 1);
        this._imgBlack.setUnifySizeEnabled(false);
        this._imgBlack.ignoreContentAdaptWithSize(false);
        this._imgBlack.setContentSize(cc.size(186, 256));
        this._imgBlack.setTouchEnabled(false);

        ///// # _imgHoldState
        this._imgHoldState = new ccui.ImageView();
        this._imgHoldState.setName("_imgHoldState");
        this._layoutMain.addChild(this._imgHoldState);
        this._imgHoldState.setCascadeOpacityEnabled(true);
        this._imgHoldState.setCascadeColorEnabled(true);
        this._imgHoldState.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHoldState, 0.5, 0.1157);
        let _imgHoldStateLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHoldState);
        _imgHoldStateLayoutComponent.setPositionPercentXEnabled(true);
        _imgHoldStateLayoutComponent.setPositionPercentX(0.5);
        this._imgHoldState.loadTexture("ui/HoldRibbon.png", 1);
        this._imgHoldState.setUnifySizeEnabled(false);
        this._imgHoldState.ignoreContentAdaptWithSize(false);
        this._imgHoldState.setScale9Enabled(true);
        this._imgHoldState.setCapInsets(cc.rect(54, 18, 8, 4));
        this._imgHoldState.setContentSize(cc.size(178.7861, 45.8101));
        this._imgHoldState.setTouchEnabled(false);

        ///// # _txtHold
        this._txtHold = new ck.Text();
        this._txtHold.setName("_txtHold");
        this._imgHoldState.addChild(this._txtHold);
        this._txtHold.setCascadeOpacityEnabled(true);
        this._txtHold.setCascadeColorEnabled(true);
        this._txtHold.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHold, 0.5045, 0.7225);
        let _txtHoldLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHold);
        _txtHoldLayoutComponent.setPositionPercentXEnabled(true);
        _txtHoldLayoutComponent.setPositionPercentX(0.5045);
        _txtHoldLayoutComponent.setPositionPercentYEnabled(true);
        _txtHoldLayoutComponent.setPositionPercentY(0.7225);
        this._txtHold.setTouchEnabled(false);
        this._txtHold.ignoreContentAdaptWithSize(true);
        this._txtHold.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHold.setDefaultFontSize(45);
        this._txtHold.setString(gm.localize.getText("TXT_HOLD"));
        this._txtHold.setTextHorizontalAlignment(0);
        this._txtHold.setTextVerticalAlignment(0);
        this._txtHold.enableOutline(cc.color(0, 0, 0, 255), 2);
        this._txtHold.enableShadow(cc.color(0, 0, 0, 255), cc.size(0, -3), 0);

    },



});

/**
 * Create PokerCard
 * @returns {_ccs.PokerCard}
 */
_ccs.PokerCard.create = function () {
    return new _ccs.PokerCard();
};
