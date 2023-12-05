/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.SuggestedMessageWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.SuggestedMessageWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBottomLine: null,
    /** @type {ck.Text} */
    _txtMessage: null,


    /**
     * _ccs.SuggestedMessageWidget constructor
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

        ///// # _layoutRoot
        this._layoutRoot = new ccui.Layout();
        this._layoutRoot.setName("_layoutRoot");
        this.addChild(this._layoutRoot);
        this._layoutRoot.setCascadeOpacityEnabled(true);
        this._layoutRoot.setCascadeColorEnabled(true);
        this._layoutRoot.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        this._layoutRoot.setTouchEnabled(true);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(450, 50));

        ///// # _imgBottomLine
        this._imgBottomLine = new ccui.ImageView();
        this._imgBottomLine.setName("_imgBottomLine");
        this._layoutRoot.addChild(this._imgBottomLine);
        this._imgBottomLine.setCascadeOpacityEnabled(true);
        this._imgBottomLine.setCascadeColorEnabled(true);
        this._imgBottomLine.setAnchorPoint(cc.p(0.5008, 0));
        ck.UIUtils.setPositionPercent(this._imgBottomLine, 0.5, 0);
        this._imgBottomLine.setOpacity(127);
        let _imgBottomLineLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBottomLine);
        _imgBottomLineLayoutComponent.setPositionPercentXEnabled(true);
        _imgBottomLineLayoutComponent.setPositionPercentX(0.5);
        this._imgBottomLine.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgBottomLine.setUnifySizeEnabled(false);
        this._imgBottomLine.ignoreContentAdaptWithSize(false);
        this._imgBottomLine.setScale9Enabled(true);
        this._imgBottomLine.setCapInsets(cc.rect(10, 10, 44, 44));
        this._imgBottomLine.setContentSize(cc.size(420, 1));
        this._imgBottomLine.setTouchEnabled(false);

        ///// # _txtMessage
        this._txtMessage = new ck.Text();
        this._txtMessage.setName("_txtMessage");
        this._layoutRoot.addChild(this._txtMessage);
        this._txtMessage.setCascadeOpacityEnabled(true);
        this._txtMessage.setCascadeColorEnabled(true);
        this._txtMessage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMessage, 0.5, 0.5);
        let _txtMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMessage);
        _txtMessageLayoutComponent.setPositionPercentXEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentX(0.5);
        _txtMessageLayoutComponent.setPositionPercentYEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentY(0.5);
        _txtMessageLayoutComponent.setPercentHeightEnabled(true);
        _txtMessageLayoutComponent.setPercentHeight(1);
        this._txtMessage.setTouchEnabled(false);
        this._txtMessage.setUnifySizeEnabled(false);
        this._txtMessage.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this._txtMessage, 1);
        this._txtMessage.setContentSize(cc.size(435, this._txtMessage.height));
        this._txtMessage.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMessage.setDefaultFontSize(25);
        this._txtMessage.setTextHorizontalAlignment(1);
        this._txtMessage.setTextVerticalAlignment(1);
        this._txtMessage.autoFitSingleLine();

    },



});

/**
 * Create SuggestedMessageWidget
 * @returns {_ccs.SuggestedMessageWidget}
 */
_ccs.SuggestedMessageWidget.create = function () {
    return new _ccs.SuggestedMessageWidget();
};
