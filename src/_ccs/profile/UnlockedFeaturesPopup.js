/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.UnlockedFeaturesPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.UnlockedFeaturesPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {ccui.ImageView} */
    _imgFont: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ck.Text} */
    _txtHeader: null,
    /** @type {ck.Text} */
    _txtMessage: null,
    /** @type {cc.Node} */
    _nodeFeatures: null,
    /** @type {ccui.ImageView} */
    _imgFeatures: null,
    /** @type {ck.GridViewVertical} */
    _gridViewFeatures: null,
    /** @type {ccui.ImageView} */
    _imgButton: null,
    /** @type {ck.Text} */
    _txtButton: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,


    /**
     * _ccs.UnlockedFeaturesPopup constructor
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
        this._root.setPosition(0, -0.0001);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(false);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(500, 500));

        ///// # _imgBack
        this._imgBack = new ccui.ImageView();
        this._imgBack.setName("_imgBack");
        this._root.addChild(this._imgBack);
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
        this._imgBack.setTouchEnabled(false);

        ///// # _imgFont
        this._imgFont = new ccui.ImageView();
        this._imgFont.setName("_imgFont");
        this._root.addChild(this._imgFont);
        this._imgFont.setCascadeOpacityEnabled(true);
        this._imgFont.setCascadeColorEnabled(true);
        this._imgFont.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgFont, 0.5, 0.5);
        let _imgFontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFont);
        _imgFontLayoutComponent.setPositionPercentXEnabled(true);
        _imgFontLayoutComponent.setPositionPercentX(0.5);
        _imgFontLayoutComponent.setPositionPercentYEnabled(true);
        _imgFontLayoutComponent.setPositionPercentY(0.5);
        _imgFontLayoutComponent.setPercentWidthEnabled(true);
        _imgFontLayoutComponent.setPercentWidth(0.9353);
        _imgFontLayoutComponent.setPercentHeightEnabled(true);
        _imgFontLayoutComponent.setPercentHeight(0.9353);
        this._imgFont.loadTexture("basics/popup/Font.png", 1);
        this._imgFont.setUnifySizeEnabled(false);
        this._imgFont.ignoreContentAdaptWithSize(false);
        this._imgFont.setScale9Enabled(true);
        this._imgFont.setCapInsets(cc.rect(52, 48, 49, 49));
        ck.UIUtils.setSizePercent(this._imgFont, 0.9353, 0.9353);
        this._imgFont.setTouchEnabled(false);

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._root.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 0.99);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(0.99);
        this._imgHeader.loadTexture("basics/popup/HeaderBlue.png", 1);
        this._imgHeader.setUnifySizeEnabled(false);
        this._imgHeader.ignoreContentAdaptWithSize(false);
        this._imgHeader.setContentSize(cc.size(346, 84));
        this._imgHeader.setTouchEnabled(false);

        ///// # _txtHeader
        this._txtHeader = new ck.Text();
        this._txtHeader.setName("_txtHeader");
        this._imgHeader.addChild(this._txtHeader);
        this._txtHeader.setCascadeOpacityEnabled(true);
        this._txtHeader.setCascadeColorEnabled(true);
        this._txtHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHeader, 0.5, 0.55);
        this._txtHeader.setTextColor(cc.color(255, 252, 225, 255));
        let _txtHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHeader);
        _txtHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentX(0.5);
        _txtHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentY(0.55);
        this._txtHeader.setTouchEnabled(false);
        this._txtHeader.ignoreContentAdaptWithSize(true);
        this._txtHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHeader.setDefaultFontSize(55);
        this._txtHeader.setString(gm.localize.getText("TXT_ALERT"));
        this._txtHeader.setTextHorizontalAlignment(1);
        this._txtHeader.setTextVerticalAlignment(1);
        this._txtHeader.enableOutline(cc.color(155, 68, 38, 255), 2);
        this._txtHeader.enableShadow(cc.color(155, 68, 38, 255), cc.size(0, -2), 0);

        ///// # _txtMessage
        this._txtMessage = new ck.Text();
        this._txtMessage.setName("_txtMessage");
        this._root.addChild(this._txtMessage);
        this._txtMessage.setCascadeOpacityEnabled(true);
        this._txtMessage.setCascadeColorEnabled(true);
        this._txtMessage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMessage, 0.5, 0.79);
        this._txtMessage.setTextColor(cc.color(87, 60, 38, 255));
        let _txtMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMessage);
        _txtMessageLayoutComponent.setPositionPercentXEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentX(0.5);
        _txtMessageLayoutComponent.setPositionPercentYEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentY(0.79);
        _txtMessageLayoutComponent.setPercentWidthEnabled(true);
        _txtMessageLayoutComponent.setPercentWidth(0.474);
        _txtMessageLayoutComponent.setPercentHeightEnabled(true);
        _txtMessageLayoutComponent.setPercentHeight(0.09);
        this._txtMessage.setTouchEnabled(false);
        this._txtMessage.ignoreContentAdaptWithSize(true);
        this._txtMessage.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMessage.setDefaultFontSize(40);
        this._txtMessage.setString(gm.localize.getText("TXT_YOU_HAVE_UNLOCKED"));
        this._txtMessage.setTextHorizontalAlignment(1);
        this._txtMessage.setTextVerticalAlignment(1);

        ///// # _nodeFeatures
        this._nodeFeatures = new cc.Node();
        this._nodeFeatures.setName("_nodeFeatures");
        this._root.addChild(this._nodeFeatures);
        this._nodeFeatures.setCascadeOpacityEnabled(true);
        this._nodeFeatures.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeFeatures, 0.5, 0.5);
        let _nodeFeaturesLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeFeatures);
        _nodeFeaturesLayoutComponent.setPositionPercentXEnabled(true);
        _nodeFeaturesLayoutComponent.setPositionPercentX(0.5);
        _nodeFeaturesLayoutComponent.setPositionPercentYEnabled(true);
        _nodeFeaturesLayoutComponent.setPositionPercentY(0.5);

        ///// # _imgFeatures
        this._imgFeatures = new ccui.ImageView();
        this._imgFeatures.setName("_imgFeatures");
        this._nodeFeatures.addChild(this._imgFeatures);
        this._imgFeatures.setCascadeOpacityEnabled(true);
        this._imgFeatures.setCascadeColorEnabled(true);
        this._imgFeatures.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgFeatures.setOpacity(84);
        this._imgFeatures.setColor(cc.color(2, 0, 0, 255));
        let _imgFeaturesLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFeatures);
        this._imgFeatures.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgFeatures.setUnifySizeEnabled(false);
        this._imgFeatures.ignoreContentAdaptWithSize(false);
        this._imgFeatures.setScale9Enabled(true);
        this._imgFeatures.setCapInsets(cc.rect(21, 21, 22, 22));
        this._imgFeatures.setContentSize(cc.size(421.4366, 180.7141));
        this._imgFeatures.setTouchEnabled(false);

        ///// # _gridViewFeatures
        this._gridViewFeatures = new ck.GridViewVertical();
        this._gridViewFeatures.setName("_gridViewFeatures");
        this._nodeFeatures.addChild(this._gridViewFeatures);
        this._gridViewFeatures.setCascadeOpacityEnabled(true);
        this._gridViewFeatures.setCascadeColorEnabled(true);
        this._gridViewFeatures.setAnchorPoint(cc.p(0.5, 0.5));
        let _gridViewFeaturesLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewFeatures);

        ///// # _imgButton
        this._imgButton = new ccui.ImageView();
        this._imgButton.setName("_imgButton");
        this._root.addChild(this._imgButton);
        this._imgButton.setCascadeOpacityEnabled(true);
        this._imgButton.setCascadeColorEnabled(true);
        this._imgButton.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButton, 0.5, 0.174);
        let _imgButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButton);
        _imgButtonLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonLayoutComponent.setPositionPercentX(0.5);
        _imgButtonLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonLayoutComponent.setPositionPercentY(0.174);
        this._imgButton.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgButton.setUnifySizeEnabled(false);
        this._imgButton.ignoreContentAdaptWithSize(false);
        this._imgButton.setContentSize(cc.size(206, 81));
        this._imgButton.setTouchEnabled(false);

        ///// # _txtButton
        this._txtButton = new ck.Text();
        this._txtButton.setName("_txtButton");
        this._imgButton.addChild(this._txtButton);
        this._txtButton.setCascadeOpacityEnabled(true);
        this._txtButton.setCascadeColorEnabled(true);
        this._txtButton.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButton, 0.5, 0.5);
        let _txtButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButton);
        _txtButtonLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonLayoutComponent.setPositionPercentX(0.5);
        _txtButtonLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonLayoutComponent.setPositionPercentY(0.5);
        this._txtButton.setTouchEnabled(false);
        this._txtButton.ignoreContentAdaptWithSize(true);
        this._txtButton.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButton.setDefaultFontSize(40);
        this._txtButton.setString(gm.localize.getText("TXT_OK"));
        this._txtButton.setTextHorizontalAlignment(1);
        this._txtButton.setTextVerticalAlignment(1);
        this._txtButton.enableOutline(cc.color(158, 82, 9, 255), 2);

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._root.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.97, 0.97);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.97);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.97);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(81, 83));
        this._imgClose.setTouchEnabled(false);

    },



});

/**
 * Create UnlockedFeaturesPopup
 * @returns {_ccs.UnlockedFeaturesPopup}
 */
_ccs.UnlockedFeaturesPopup.create = function () {
    return new _ccs.UnlockedFeaturesPopup();
};
