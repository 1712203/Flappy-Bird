/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.UpdatePopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.UpdatePopup = ccui.Widget.extend({

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
    /** @type {ccui.ImageView} */
    _imgUpdate: null,
    /** @type {ck.Text} */
    _txtUpdate: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.ImageView} */
    _imgRewards: null,
    /** @type {Glow} */
    _glow: null,
    /** @type {ck.GridViewVertical} */
    _gridRewards: null,


    /**
     * _ccs.UpdatePopup constructor
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
        this._root.setTouchEnabled(true);
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
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 0.996);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(0.996);
        this._imgHeader.loadTexture("basics/popup/HeaderYellow.png", 1);
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
        this._txtHeader.setString(gm.localize.getText("TXT_UPDATE_HEADER"));
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
        ck.UIUtils.setPositionPercent(this._txtMessage, 0.5, 0.756);
        this._txtMessage.setTextColor(cc.color(87, 60, 38, 255));
        let _txtMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMessage);
        _txtMessageLayoutComponent.setPositionPercentXEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentX(0.5);
        _txtMessageLayoutComponent.setPositionPercentYEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentY(0.756);
        _txtMessageLayoutComponent.setPercentWidthEnabled(true);
        _txtMessageLayoutComponent.setPercentWidth(0.362);
        _txtMessageLayoutComponent.setPercentHeightEnabled(true);
        _txtMessageLayoutComponent.setPercentHeight(0.078);
        this._txtMessage.setTouchEnabled(false);
        this._txtMessage.ignoreContentAdaptWithSize(true);
        this._txtMessage.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMessage.setDefaultFontSize(35);
        this._txtMessage.setString(gm.localize.getText("TXT_UPDATE_MESSAGE"));
        this._txtMessage.setTextHorizontalAlignment(1);
        this._txtMessage.setTextVerticalAlignment(1);

        ///// # _imgUpdate
        this._imgUpdate = new ccui.ImageView();
        this._imgUpdate.setName("_imgUpdate");
        this._root.addChild(this._imgUpdate);
        this._imgUpdate.setCascadeOpacityEnabled(true);
        this._imgUpdate.setCascadeColorEnabled(true);
        this._imgUpdate.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgUpdate, 0.4949, 0.1469);
        let _imgUpdateLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgUpdate);
        _imgUpdateLayoutComponent.setPositionPercentXEnabled(true);
        _imgUpdateLayoutComponent.setPositionPercentX(0.4949);
        _imgUpdateLayoutComponent.setPositionPercentYEnabled(true);
        _imgUpdateLayoutComponent.setPositionPercentY(0.1469);
        this._imgUpdate.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgUpdate.setUnifySizeEnabled(false);
        this._imgUpdate.ignoreContentAdaptWithSize(false);
        this._imgUpdate.setContentSize(cc.size(205.99, 81.0026));
        this._imgUpdate.setTouchEnabled(true);

        ///// # _txtUpdate
        this._txtUpdate = new ck.Text();
        this._txtUpdate.setName("_txtUpdate");
        this._imgUpdate.addChild(this._txtUpdate);
        this._txtUpdate.setCascadeOpacityEnabled(true);
        this._txtUpdate.setCascadeColorEnabled(true);
        this._txtUpdate.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtUpdate, 0.5, 0.55);
        let _txtUpdateLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtUpdate);
        _txtUpdateLayoutComponent.setPositionPercentXEnabled(true);
        _txtUpdateLayoutComponent.setPositionPercentX(0.5);
        _txtUpdateLayoutComponent.setPositionPercentYEnabled(true);
        _txtUpdateLayoutComponent.setPositionPercentY(0.55);
        this._txtUpdate.setTouchEnabled(false);
        this._txtUpdate.ignoreContentAdaptWithSize(true);
        this._txtUpdate.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtUpdate.setDefaultFontSize(40);
        this._txtUpdate.setString(gm.localize.getText("TXT_UPDATE"));
        this._txtUpdate.setTextHorizontalAlignment(1);
        this._txtUpdate.setTextVerticalAlignment(1);
        this._txtUpdate.enableOutline(cc.color(158, 82, 9, 255), 2);

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
        this._imgClose.setTouchEnabled(true);

        ///// # _imgRewards
        this._imgRewards = new ccui.ImageView();
        this._imgRewards.setName("_imgRewards");
        this._root.addChild(this._imgRewards);
        this._imgRewards.setCascadeOpacityEnabled(true);
        this._imgRewards.setCascadeColorEnabled(true);
        this._imgRewards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRewards, 0.5, 0.45);
        this._imgRewards.setColor(cc.color(223, 205, 183, 255));
        let _imgRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRewards);
        _imgRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _imgRewardsLayoutComponent.setPositionPercentX(0.5);
        _imgRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _imgRewardsLayoutComponent.setPositionPercentY(0.45);
        this._imgRewards.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgRewards.setUnifySizeEnabled(false);
        this._imgRewards.ignoreContentAdaptWithSize(false);
        this._imgRewards.setScale9Enabled(true);
        this._imgRewards.setCapInsets(cc.rect(26, 21, 12, 22));
        this._imgRewards.setContentSize(cc.size(180, 180));
        this._imgRewards.setTouchEnabled(true);

        ///// # _glow
        this._glow = new Glow();
        this._glow.setName("_glow");
        this._root.addChild(this._glow);
        this._glow.setCascadeOpacityEnabled(true);
        this._glow.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._glow, 0.5, 0.45);
        let _glowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._glow);
        _glowLayoutComponent.setPositionPercentXEnabled(true);
        _glowLayoutComponent.setPositionPercentX(0.5);
        _glowLayoutComponent.setPositionPercentYEnabled(true);
        _glowLayoutComponent.setPositionPercentY(0.45);

        ///// # _gridRewards
        this._gridRewards = new ck.GridViewVertical();
        this._gridRewards.setName("_gridRewards");
        this._root.addChild(this._gridRewards);
        this._gridRewards.setCascadeOpacityEnabled(true);
        this._gridRewards.setCascadeColorEnabled(true);
        this._gridRewards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridRewards, 0.5, 0.45);
        let _gridRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridRewards);
        _gridRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentX(0.5);
        _gridRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentY(0.45);

    },



});

/**
 * Create UpdatePopup
 * @returns {_ccs.UpdatePopup}
 */
_ccs.UpdatePopup.create = function () {
    return new _ccs.UpdatePopup();
};
