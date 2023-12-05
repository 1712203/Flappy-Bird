/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ShopPackWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ShopPackWidget = ccui.Widget.extend({

    /** @type {ccui.ImageView} */
    _root: null,
    /** @type {ck.Text} */
    _txtHeader: null,
    /** @type {ccui.ImageView} */
    _imgShadow: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtDuration: null,
    /** @type {ccui.ImageView} */
    _imgPrice: null,
    /** @type {ck.Text} */
    _txtPrice: null,
    /** @type {ccui.ImageView} */
    _imgPriceIcon: null,
    /** @type {ck.Text} */
    _txtDescription: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtLimit: null,


    /**
     * _ccs.ShopPackWidget constructor
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
        this._root = new ccui.ImageView();
        this._root.setName("_root");
        this.addChild(this._root);
        this._root.setCascadeOpacityEnabled(true);
        this._root.setCascadeColorEnabled(true);
        this._root.setAnchorPoint(cc.p(0.5, 0.5));
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.loadTexture("basics/popup/BoxYellow.png", 1);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setScale9Enabled(true);
        this._root.setCapInsets(cc.rect(13, 14, 4, 314));
        this._root.setContentSize(cc.size(180, 342));
        this._root.setTouchEnabled(true);

        ///// # _txtHeader
        this._txtHeader = new ck.Text();
        this._txtHeader.setName("_txtHeader");
        this._root.addChild(this._txtHeader);
        this._txtHeader.setCascadeOpacityEnabled(true);
        this._txtHeader.setCascadeColorEnabled(true);
        this._txtHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHeader, 0.5, 0.9281);
        let _txtHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHeader);
        _txtHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentX(0.5);
        _txtHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentY(0.9281);
        this._txtHeader.setTouchEnabled(false);
        this._txtHeader.ignoreContentAdaptWithSize(true);
        this._txtHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHeader.setDefaultFontSize(30);
        this._txtHeader.setTextHorizontalAlignment(1);
        this._txtHeader.setTextVerticalAlignment(1);

        ///// # _imgShadow
        this._imgShadow = new ccui.ImageView();
        this._imgShadow.setName("_imgShadow");
        this._root.addChild(this._imgShadow);
        this._imgShadow.setCascadeOpacityEnabled(true);
        this._imgShadow.setCascadeColorEnabled(true);
        this._imgShadow.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgShadow, 0.5, 0.4684);
        this._imgShadow.setColor(cc.color(0, 0, 0, 255));
        let _imgShadowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgShadow);
        _imgShadowLayoutComponent.setPositionPercentXEnabled(true);
        _imgShadowLayoutComponent.setPositionPercentX(0.5);
        _imgShadowLayoutComponent.setPositionPercentYEnabled(true);
        _imgShadowLayoutComponent.setPositionPercentY(0.4684);
        this._imgShadow.loadTexture("basics/effects/Shadow.png", 1);
        this._imgShadow.setUnifySizeEnabled(false);
        this._imgShadow.ignoreContentAdaptWithSize(false);
        this._imgShadow.setContentSize(cc.size(98, 20));
        this._imgShadow.setTouchEnabled(false);

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._root.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.4607);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.4607);
        this._imgIcon.loadTexture("icons/color/items/Swapper.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(109, 109));
        this._imgIcon.setTouchEnabled(false);

        ///// # _txtDuration
        this._txtDuration = new ck.Text();
        this._txtDuration.setName("_txtDuration");
        this._root.addChild(this._txtDuration);
        this._txtDuration.setCascadeOpacityEnabled(true);
        this._txtDuration.setCascadeColorEnabled(true);
        this._txtDuration.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDuration, 0.5151, 0.511);
        let _txtDurationLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDuration);
        _txtDurationLayoutComponent.setPositionPercentXEnabled(true);
        _txtDurationLayoutComponent.setPositionPercentX(0.5151);
        _txtDurationLayoutComponent.setPositionPercentYEnabled(true);
        _txtDurationLayoutComponent.setPositionPercentY(0.511);
        this._txtDuration.setTouchEnabled(false);
        this._txtDuration.ignoreContentAdaptWithSize(true);
        this._txtDuration.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtDuration.setDefaultFontSize(30);
        this._txtDuration.setTextHorizontalAlignment(1);
        this._txtDuration.setTextVerticalAlignment(1);
        this._txtDuration.enableOutline(cc.color(9, 76, 135, 255), 3);

        ///// # _imgPrice
        this._imgPrice = new ccui.ImageView();
        this._imgPrice.setName("_imgPrice");
        this._root.addChild(this._imgPrice);
        this._imgPrice.setCascadeOpacityEnabled(true);
        this._imgPrice.setCascadeColorEnabled(true);
        this._imgPrice.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPrice, 0.5, 0.0972);
        let _imgPriceLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPrice);
        _imgPriceLayoutComponent.setPositionPercentXEnabled(true);
        _imgPriceLayoutComponent.setPositionPercentX(0.5);
        _imgPriceLayoutComponent.setPositionPercentYEnabled(true);
        _imgPriceLayoutComponent.setPositionPercentY(0.0972);
        this._imgPrice.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgPrice.setUnifySizeEnabled(false);
        this._imgPrice.ignoreContentAdaptWithSize(false);
        this._imgPrice.setContentSize(cc.size(127.9768, 50.32));
        this._imgPrice.setTouchEnabled(true);

        ///// # _txtPrice
        this._txtPrice = new ck.Text();
        this._txtPrice.setName("_txtPrice");
        this._imgPrice.addChild(this._txtPrice);
        this._txtPrice.setCascadeOpacityEnabled(true);
        this._txtPrice.setCascadeColorEnabled(true);
        this._txtPrice.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPrice, 0.3617, 0.55);
        let _txtPriceLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPrice);
        _txtPriceLayoutComponent.setPositionPercentXEnabled(true);
        _txtPriceLayoutComponent.setPositionPercentX(0.3617);
        _txtPriceLayoutComponent.setPositionPercentYEnabled(true);
        _txtPriceLayoutComponent.setPositionPercentY(0.55);
        this._txtPrice.setTouchEnabled(false);
        this._txtPrice.ignoreContentAdaptWithSize(true);
        this._txtPrice.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtPrice.setDefaultFontSize(30);
        this._txtPrice.setTextHorizontalAlignment(1);
        this._txtPrice.setTextVerticalAlignment(1);
        this._txtPrice.enableOutline(cc.color(164, 49, 41, 255), 2);

        ///// # _imgPriceIcon
        this._imgPriceIcon = new ccui.ImageView();
        this._imgPriceIcon.setName("_imgPriceIcon");
        this._imgPrice.addChild(this._imgPriceIcon);
        this._imgPriceIcon.setCascadeOpacityEnabled(true);
        this._imgPriceIcon.setCascadeColorEnabled(true);
        this._imgPriceIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPriceIcon, 0.727, 0.55);
        let _imgPriceIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPriceIcon);
        _imgPriceIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgPriceIconLayoutComponent.setPositionPercentX(0.727);
        _imgPriceIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgPriceIconLayoutComponent.setPositionPercentY(0.55);
        this._imgPriceIcon.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgPriceIcon.setUnifySizeEnabled(false);
        this._imgPriceIcon.ignoreContentAdaptWithSize(false);
        this._imgPriceIcon.setContentSize(cc.size(40, 40));
        this._imgPriceIcon.setTouchEnabled(false);

        ///// # _txtDescription
        this._txtDescription = new ck.Text();
        this._txtDescription.setName("_txtDescription");
        this._root.addChild(this._txtDescription);
        this._txtDescription.setCascadeOpacityEnabled(true);
        this._txtDescription.setCascadeColorEnabled(true);
        this._txtDescription.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDescription, 0.5, 0.3013);
        this._txtDescription.setTextColor(cc.color(99, 81, 67, 255));
        let _txtDescriptionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDescription);
        _txtDescriptionLayoutComponent.setPositionPercentXEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentX(0.5);
        _txtDescriptionLayoutComponent.setPositionPercentYEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentY(0.3013);
        this._txtDescription.setTouchEnabled(false);
        this._txtDescription.setUnifySizeEnabled(false);
        this._txtDescription.ignoreContentAdaptWithSize(false);
        this._txtDescription.setContentSize(cc.size(155, 77.6047));
        this._txtDescription.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDescription.setDefaultFontSize(22);
        this._txtDescription.setTextHorizontalAlignment(1);
        this._txtDescription.setTextVerticalAlignment(1);

        ///// # _txtLimit
        this._txtLimit = new ck.CustomRichTextExtend(cc.size(162.3224, 23));
        this._txtLimit.setName("_txtLimit");
        this._root.addChild(this._txtLimit);
        this._txtLimit.setCascadeOpacityEnabled(true);
        this._txtLimit.setCascadeColorEnabled(true);
        this._txtLimit.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLimit, 0.5, 0.83);
        this._txtLimit.setDefaultColor(cc.color(99, 81, 67, 255));
        let _txtLimitLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLimit);
        _txtLimitLayoutComponent.setPositionPercentXEnabled(true);
        _txtLimitLayoutComponent.setPositionPercentX(0.5);
        _txtLimitLayoutComponent.setPositionPercentYEnabled(true);
        _txtLimitLayoutComponent.setPositionPercentY(0.83);
        this._txtLimit.setTouchEnabled(false);
        this._txtLimit.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtLimit.setDefaultSize(21);
        this._txtLimit.setDefaultAlignHorizontal(2);
        this._txtLimit.setDefaultAlignVertical(5);

    },



});

/**
 * Create ShopPackWidget
 * @returns {_ccs.ShopPackWidget}
 */
_ccs.ShopPackWidget.create = function () {
    return new _ccs.ShopPackWidget();
};
