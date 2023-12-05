/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.YesNoDialog
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.YesNoDialog = ccui.Widget.extend({

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
    _imgLeft: null,
    /** @type {ck.Text} */
    _txtLeft: null,
    /** @type {ccui.ImageView} */
    _imgRight: null,
    /** @type {ck.Text} */
    _txtRight: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,


    /**
     * _ccs.YesNoDialog constructor
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
        ck.UIUtils.setPositionPercent(this._txtMessage, 0.5, 0.56);
        this._txtMessage.setTextColor(cc.color(87, 60, 38, 255));
        let _txtMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMessage);
        _txtMessageLayoutComponent.setPositionPercentXEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentX(0.5);
        _txtMessageLayoutComponent.setPositionPercentYEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentY(0.56);
        _txtMessageLayoutComponent.setPercentWidthEnabled(true);
        _txtMessageLayoutComponent.setPercentWidth(0.8662);
        _txtMessageLayoutComponent.setPercentHeightEnabled(true);
        _txtMessageLayoutComponent.setPercentHeight(0.6003);
        this._txtMessage.setTouchEnabled(false);
        this._txtMessage.setUnifySizeEnabled(false);
        this._txtMessage.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtMessage, 0.8662, 0.6003);
        this._txtMessage.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMessage.setDefaultFontSize(35);
        this._txtMessage.setTextHorizontalAlignment(1);
        this._txtMessage.setTextVerticalAlignment(1);

        ///// # _imgLeft
        this._imgLeft = new ccui.ImageView();
        this._imgLeft.setName("_imgLeft");
        this._root.addChild(this._imgLeft);
        this._imgLeft.setCascadeOpacityEnabled(true);
        this._imgLeft.setCascadeColorEnabled(true);
        this._imgLeft.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLeft, 0.28, 0.17);
        let _imgLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLeft);
        _imgLeftLayoutComponent.setPositionPercentXEnabled(true);
        _imgLeftLayoutComponent.setPositionPercentX(0.28);
        _imgLeftLayoutComponent.setPositionPercentYEnabled(true);
        _imgLeftLayoutComponent.setPositionPercentY(0.17);
        this._imgLeft.loadTexture("buttons/rectangles/Red.png", 1);
        this._imgLeft.setUnifySizeEnabled(false);
        this._imgLeft.ignoreContentAdaptWithSize(false);
        this._imgLeft.setContentSize(cc.size(206, 81));
        this._imgLeft.setTouchEnabled(true);

        ///// # _txtLeft
        this._txtLeft = new ck.Text();
        this._txtLeft.setName("_txtLeft");
        this._imgLeft.addChild(this._txtLeft);
        this._txtLeft.setCascadeOpacityEnabled(true);
        this._txtLeft.setCascadeColorEnabled(true);
        this._txtLeft.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLeft, 0.5, 0.55);
        let _txtLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLeft);
        _txtLeftLayoutComponent.setPositionPercentXEnabled(true);
        _txtLeftLayoutComponent.setPositionPercentX(0.5);
        _txtLeftLayoutComponent.setPositionPercentYEnabled(true);
        _txtLeftLayoutComponent.setPositionPercentY(0.55);
        this._txtLeft.setTouchEnabled(false);
        this._txtLeft.ignoreContentAdaptWithSize(true);
        this._txtLeft.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLeft.setDefaultFontSize(40);
        this._txtLeft.setString(gm.localize.getText("TXT_NO"));
        this._txtLeft.setTextHorizontalAlignment(1);
        this._txtLeft.setTextVerticalAlignment(1);
        this._txtLeft.enableOutline(cc.color(173, 27, 20, 255), 2);

        ///// # _imgRight
        this._imgRight = new ccui.ImageView();
        this._imgRight.setName("_imgRight");
        this._root.addChild(this._imgRight);
        this._imgRight.setCascadeOpacityEnabled(true);
        this._imgRight.setCascadeColorEnabled(true);
        this._imgRight.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRight, 0.72, 0.17);
        let _imgRightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRight);
        _imgRightLayoutComponent.setPositionPercentXEnabled(true);
        _imgRightLayoutComponent.setPositionPercentX(0.72);
        _imgRightLayoutComponent.setPositionPercentYEnabled(true);
        _imgRightLayoutComponent.setPositionPercentY(0.17);
        this._imgRight.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgRight.setUnifySizeEnabled(false);
        this._imgRight.ignoreContentAdaptWithSize(false);
        this._imgRight.setContentSize(cc.size(206, 81));
        this._imgRight.setTouchEnabled(true);

        ///// # _txtRight
        this._txtRight = new ck.Text();
        this._txtRight.setName("_txtRight");
        this._imgRight.addChild(this._txtRight);
        this._txtRight.setCascadeOpacityEnabled(true);
        this._txtRight.setCascadeColorEnabled(true);
        this._txtRight.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRight, 0.5, 0.55);
        let _txtRightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRight);
        _txtRightLayoutComponent.setPositionPercentXEnabled(true);
        _txtRightLayoutComponent.setPositionPercentX(0.5);
        _txtRightLayoutComponent.setPositionPercentYEnabled(true);
        _txtRightLayoutComponent.setPositionPercentY(0.55);
        this._txtRight.setTouchEnabled(false);
        this._txtRight.ignoreContentAdaptWithSize(true);
        this._txtRight.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtRight.setDefaultFontSize(40);
        this._txtRight.setString(gm.localize.getText("TXT_YES"));
        this._txtRight.setTextHorizontalAlignment(1);
        this._txtRight.setTextVerticalAlignment(1);
        this._txtRight.enableOutline(cc.color(9, 90, 63, 255), 2);

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

    },



});

/**
 * Create YesNoDialog
 * @returns {_ccs.YesNoDialog}
 */
_ccs.YesNoDialog.create = function () {
    return new _ccs.YesNoDialog();
};
