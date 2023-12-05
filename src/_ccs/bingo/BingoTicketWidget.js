/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.BingoTicketWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.BingoTicketWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgNumbersBackground: null,
    /** @type {ccui.Layout} */
    _layoutNumber00: null,
    /** @type {ccui.ImageView} */
    _imgNumberBackground00: null,
    /** @type {ccui.ImageView} */
    _imgNumberForeground00: null,
    /** @type {ccui.ImageView} */
    _imgStar00: null,
    /** @type {ck.Text} */
    _txtNumber00: null,
    /** @type {ccui.Layout} */
    _layoutNumber01: null,
    /** @type {ccui.ImageView} */
    _imgNumberBackground01: null,
    /** @type {ccui.ImageView} */
    _imgNumberForeground01: null,
    /** @type {ccui.ImageView} */
    _imgStar01: null,
    /** @type {ck.Text} */
    _txtNumber01: null,
    /** @type {ccui.Layout} */
    _layoutNumber02: null,
    /** @type {ccui.ImageView} */
    _imgNumberBackground02: null,
    /** @type {ccui.ImageView} */
    _imgNumberForeground02: null,
    /** @type {ccui.ImageView} */
    _imgStar02: null,
    /** @type {ck.Text} */
    _txtNumber02: null,
    /** @type {ccui.Layout} */
    _layoutNumber03: null,
    /** @type {ccui.ImageView} */
    _imgNumberBackground03: null,
    /** @type {ccui.ImageView} */
    _imgNumberForeground03: null,
    /** @type {ccui.ImageView} */
    _imgStar03: null,
    /** @type {ck.Text} */
    _txtNumber03: null,
    /** @type {ccui.Layout} */
    _layoutNumber04: null,
    /** @type {ccui.ImageView} */
    _imgNumberBackground04: null,
    /** @type {ccui.ImageView} */
    _imgNumberForeground04: null,
    /** @type {ccui.ImageView} */
    _imgStar04: null,
    /** @type {ck.Text} */
    _txtNumber04: null,


    /**
     * _ccs.BingoTicketWidget constructor
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
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(297, 80));

        ///// # _imgNumbersBackground
        this._imgNumbersBackground = new ccui.ImageView();
        this._imgNumbersBackground.setName("_imgNumbersBackground");
        this._layoutRoot.addChild(this._imgNumbersBackground);
        this._imgNumbersBackground.setCascadeOpacityEnabled(true);
        this._imgNumbersBackground.setCascadeColorEnabled(true);
        this._imgNumbersBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgNumbersBackground, 0.5, 0.5);
        let _imgNumbersBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNumbersBackground);
        _imgNumbersBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgNumbersBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgNumbersBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgNumbersBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgNumbersBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgNumbersBackgroundLayoutComponent.setPercentWidth(1);
        _imgNumbersBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgNumbersBackgroundLayoutComponent.setPercentHeight(1);
        this._imgNumbersBackground.loadTexture("bingo/ui/TicketBoxBlue.png", 1);
        this._imgNumbersBackground.setUnifySizeEnabled(false);
        this._imgNumbersBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgNumbersBackground, 1, 1);
        this._imgNumbersBackground.setTouchEnabled(false);

        ///// # _layoutNumber00
        this._layoutNumber00 = new ccui.Layout();
        this._layoutNumber00.setName("_layoutNumber00");
        this._layoutRoot.addChild(this._layoutNumber00);
        this._layoutNumber00.setCascadeOpacityEnabled(true);
        this._layoutNumber00.setCascadeColorEnabled(true);
        this._layoutNumber00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutNumber00, 0.1364, 0.5);
        let _layoutNumber00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutNumber00);
        _layoutNumber00LayoutComponent.setPositionPercentYEnabled(true);
        _layoutNumber00LayoutComponent.setPositionPercentY(0.5);
        this._layoutNumber00.setTouchEnabled(false);
        this._layoutNumber00.setUnifySizeEnabled(false);
        this._layoutNumber00.ignoreContentAdaptWithSize(false);
        this._layoutNumber00.setContentSize(cc.size(57, 57));

        ///// # _imgNumberBackground00
        this._imgNumberBackground00 = new ccui.ImageView();
        this._imgNumberBackground00.setName("_imgNumberBackground00");
        this._layoutNumber00.addChild(this._imgNumberBackground00);
        this._imgNumberBackground00.setCascadeOpacityEnabled(true);
        this._imgNumberBackground00.setCascadeColorEnabled(true);
        this._imgNumberBackground00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgNumberBackground00, 0.5, 0.5);
        this._imgNumberBackground00.setColor(cc.color(6, 47, 129, 255));
        let _imgNumberBackground00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNumberBackground00);
        _imgNumberBackground00LayoutComponent.setPositionPercentXEnabled(true);
        _imgNumberBackground00LayoutComponent.setPositionPercentX(0.5);
        _imgNumberBackground00LayoutComponent.setPositionPercentYEnabled(true);
        _imgNumberBackground00LayoutComponent.setPositionPercentY(0.5);
        _imgNumberBackground00LayoutComponent.setPercentWidthEnabled(true);
        _imgNumberBackground00LayoutComponent.setPercentWidth(1);
        _imgNumberBackground00LayoutComponent.setPercentHeightEnabled(true);
        _imgNumberBackground00LayoutComponent.setPercentHeight(1);
        this._imgNumberBackground00.loadTexture("basics/shapes/Square.png", 1);
        this._imgNumberBackground00.setUnifySizeEnabled(false);
        this._imgNumberBackground00.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgNumberBackground00, 1, 1);
        this._imgNumberBackground00.setTouchEnabled(false);

        ///// # _imgNumberForeground00
        this._imgNumberForeground00 = new ccui.ImageView();
        this._imgNumberForeground00.setName("_imgNumberForeground00");
        this._layoutNumber00.addChild(this._imgNumberForeground00);
        this._imgNumberForeground00.setCascadeOpacityEnabled(true);
        this._imgNumberForeground00.setCascadeColorEnabled(true);
        this._imgNumberForeground00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgNumberForeground00, 0.5, 0.5);
        this._imgNumberForeground00.setColor(cc.color(255, 255, 222, 255));
        let _imgNumberForeground00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNumberForeground00);
        _imgNumberForeground00LayoutComponent.setPositionPercentXEnabled(true);
        _imgNumberForeground00LayoutComponent.setPositionPercentX(0.5);
        _imgNumberForeground00LayoutComponent.setPositionPercentYEnabled(true);
        _imgNumberForeground00LayoutComponent.setPositionPercentY(0.5);
        this._imgNumberForeground00.loadTexture("basics/shapes/Square.png", 1);
        this._imgNumberForeground00.setUnifySizeEnabled(false);
        this._imgNumberForeground00.ignoreContentAdaptWithSize(false);
        this._imgNumberForeground00.setContentSize(cc.size(51, 51));
        this._imgNumberForeground00.setTouchEnabled(false);

        ///// # _imgStar00
        this._imgStar00 = new ccui.ImageView();
        this._imgStar00.setName("_imgStar00");
        this._layoutNumber00.addChild(this._imgStar00);
        this._imgStar00.setCascadeOpacityEnabled(true);
        this._imgStar00.setCascadeColorEnabled(true);
        this._imgStar00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStar00, 0.5, 0.5);
        let _imgStar00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStar00);
        _imgStar00LayoutComponent.setPositionPercentXEnabled(true);
        _imgStar00LayoutComponent.setPositionPercentX(0.5);
        _imgStar00LayoutComponent.setPositionPercentYEnabled(true);
        _imgStar00LayoutComponent.setPositionPercentY(0.5);
        _imgStar00LayoutComponent.setPercentWidthEnabled(true);
        _imgStar00LayoutComponent.setPercentWidth(0.78);
        _imgStar00LayoutComponent.setPercentHeightEnabled(true);
        _imgStar00LayoutComponent.setPercentHeight(0.75);
        this._imgStar00.loadTexture("icons/color/stars/Yellow.png", 1);
        this._imgStar00.setUnifySizeEnabled(false);
        this._imgStar00.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgStar00, 0.78, 0.75);
        this._imgStar00.setTouchEnabled(false);

        ///// # _txtNumber00
        this._txtNumber00 = new ck.Text();
        this._txtNumber00.setName("_txtNumber00");
        this._layoutNumber00.addChild(this._txtNumber00);
        this._txtNumber00.setCascadeOpacityEnabled(true);
        this._txtNumber00.setCascadeColorEnabled(true);
        this._txtNumber00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNumber00, 0.5, 0.5);
        this._txtNumber00.setTextColor(cc.color(37, 37, 37, 255));
        let _txtNumber00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNumber00);
        _txtNumber00LayoutComponent.setPositionPercentXEnabled(true);
        _txtNumber00LayoutComponent.setPositionPercentX(0.5);
        _txtNumber00LayoutComponent.setPositionPercentYEnabled(true);
        _txtNumber00LayoutComponent.setPositionPercentY(0.5);
        this._txtNumber00.setTouchEnabled(false);
        this._txtNumber00.ignoreContentAdaptWithSize(true);
        this._txtNumber00.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtNumber00.setDefaultFontSize(40);
        this._txtNumber00.setTextHorizontalAlignment(0);
        this._txtNumber00.setTextVerticalAlignment(0);

        ///// # _layoutNumber01
        this._layoutNumber01 = new ccui.Layout();
        this._layoutNumber01.setName("_layoutNumber01");
        this._layoutRoot.addChild(this._layoutNumber01);
        this._layoutNumber01.setCascadeOpacityEnabled(true);
        this._layoutNumber01.setCascadeColorEnabled(true);
        this._layoutNumber01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutNumber01, 0.3182, 0.5);
        let _layoutNumber01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutNumber01);
        _layoutNumber01LayoutComponent.setPositionPercentYEnabled(true);
        _layoutNumber01LayoutComponent.setPositionPercentY(0.5);
        this._layoutNumber01.setTouchEnabled(false);
        this._layoutNumber01.setUnifySizeEnabled(false);
        this._layoutNumber01.ignoreContentAdaptWithSize(false);
        this._layoutNumber01.setContentSize(cc.size(57, 57));

        ///// # _imgNumberBackground01
        this._imgNumberBackground01 = new ccui.ImageView();
        this._imgNumberBackground01.setName("_imgNumberBackground01");
        this._layoutNumber01.addChild(this._imgNumberBackground01);
        this._imgNumberBackground01.setCascadeOpacityEnabled(true);
        this._imgNumberBackground01.setCascadeColorEnabled(true);
        this._imgNumberBackground01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgNumberBackground01, 0.5, 0.5);
        this._imgNumberBackground01.setColor(cc.color(6, 47, 129, 255));
        let _imgNumberBackground01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNumberBackground01);
        _imgNumberBackground01LayoutComponent.setPositionPercentXEnabled(true);
        _imgNumberBackground01LayoutComponent.setPositionPercentX(0.5);
        _imgNumberBackground01LayoutComponent.setPositionPercentYEnabled(true);
        _imgNumberBackground01LayoutComponent.setPositionPercentY(0.5);
        _imgNumberBackground01LayoutComponent.setPercentWidthEnabled(true);
        _imgNumberBackground01LayoutComponent.setPercentWidth(1);
        _imgNumberBackground01LayoutComponent.setPercentHeightEnabled(true);
        _imgNumberBackground01LayoutComponent.setPercentHeight(1);
        this._imgNumberBackground01.loadTexture("basics/shapes/Square.png", 1);
        this._imgNumberBackground01.setUnifySizeEnabled(false);
        this._imgNumberBackground01.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgNumberBackground01, 1, 1);
        this._imgNumberBackground01.setTouchEnabled(false);

        ///// # _imgNumberForeground01
        this._imgNumberForeground01 = new ccui.ImageView();
        this._imgNumberForeground01.setName("_imgNumberForeground01");
        this._layoutNumber01.addChild(this._imgNumberForeground01);
        this._imgNumberForeground01.setCascadeOpacityEnabled(true);
        this._imgNumberForeground01.setCascadeColorEnabled(true);
        this._imgNumberForeground01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgNumberForeground01, 0.5, 0.5);
        this._imgNumberForeground01.setColor(cc.color(255, 255, 222, 255));
        let _imgNumberForeground01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNumberForeground01);
        _imgNumberForeground01LayoutComponent.setPositionPercentXEnabled(true);
        _imgNumberForeground01LayoutComponent.setPositionPercentX(0.5);
        _imgNumberForeground01LayoutComponent.setPositionPercentYEnabled(true);
        _imgNumberForeground01LayoutComponent.setPositionPercentY(0.5);
        this._imgNumberForeground01.loadTexture("basics/shapes/Square.png", 1);
        this._imgNumberForeground01.setUnifySizeEnabled(false);
        this._imgNumberForeground01.ignoreContentAdaptWithSize(false);
        this._imgNumberForeground01.setContentSize(cc.size(51, 51));
        this._imgNumberForeground01.setTouchEnabled(false);

        ///// # _imgStar01
        this._imgStar01 = new ccui.ImageView();
        this._imgStar01.setName("_imgStar01");
        this._layoutNumber01.addChild(this._imgStar01);
        this._imgStar01.setCascadeOpacityEnabled(true);
        this._imgStar01.setCascadeColorEnabled(true);
        this._imgStar01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStar01, 0.5, 0.5);
        let _imgStar01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStar01);
        _imgStar01LayoutComponent.setPositionPercentXEnabled(true);
        _imgStar01LayoutComponent.setPositionPercentX(0.5);
        _imgStar01LayoutComponent.setPositionPercentYEnabled(true);
        _imgStar01LayoutComponent.setPositionPercentY(0.5);
        _imgStar01LayoutComponent.setPercentWidthEnabled(true);
        _imgStar01LayoutComponent.setPercentWidth(0.78);
        _imgStar01LayoutComponent.setPercentHeightEnabled(true);
        _imgStar01LayoutComponent.setPercentHeight(0.75);
        this._imgStar01.loadTexture("icons/color/stars/Yellow.png", 1);
        this._imgStar01.setUnifySizeEnabled(false);
        this._imgStar01.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgStar01, 0.78, 0.75);
        this._imgStar01.setTouchEnabled(false);

        ///// # _txtNumber01
        this._txtNumber01 = new ck.Text();
        this._txtNumber01.setName("_txtNumber01");
        this._layoutNumber01.addChild(this._txtNumber01);
        this._txtNumber01.setCascadeOpacityEnabled(true);
        this._txtNumber01.setCascadeColorEnabled(true);
        this._txtNumber01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNumber01, 0.5, 0.5);
        this._txtNumber01.setTextColor(cc.color(37, 37, 37, 255));
        let _txtNumber01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNumber01);
        _txtNumber01LayoutComponent.setPositionPercentXEnabled(true);
        _txtNumber01LayoutComponent.setPositionPercentX(0.5);
        _txtNumber01LayoutComponent.setPositionPercentYEnabled(true);
        _txtNumber01LayoutComponent.setPositionPercentY(0.5);
        this._txtNumber01.setTouchEnabled(false);
        this._txtNumber01.ignoreContentAdaptWithSize(true);
        this._txtNumber01.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtNumber01.setDefaultFontSize(40);
        this._txtNumber01.setTextHorizontalAlignment(0);
        this._txtNumber01.setTextVerticalAlignment(0);

        ///// # _layoutNumber02
        this._layoutNumber02 = new ccui.Layout();
        this._layoutNumber02.setName("_layoutNumber02");
        this._layoutRoot.addChild(this._layoutNumber02);
        this._layoutNumber02.setCascadeOpacityEnabled(true);
        this._layoutNumber02.setCascadeColorEnabled(true);
        this._layoutNumber02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutNumber02, 0.5, 0.5);
        let _layoutNumber02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutNumber02);
        _layoutNumber02LayoutComponent.setPositionPercentYEnabled(true);
        _layoutNumber02LayoutComponent.setPositionPercentY(0.5);
        this._layoutNumber02.setTouchEnabled(false);
        this._layoutNumber02.setUnifySizeEnabled(false);
        this._layoutNumber02.ignoreContentAdaptWithSize(false);
        this._layoutNumber02.setContentSize(cc.size(57, 57));

        ///// # _imgNumberBackground02
        this._imgNumberBackground02 = new ccui.ImageView();
        this._imgNumberBackground02.setName("_imgNumberBackground02");
        this._layoutNumber02.addChild(this._imgNumberBackground02);
        this._imgNumberBackground02.setCascadeOpacityEnabled(true);
        this._imgNumberBackground02.setCascadeColorEnabled(true);
        this._imgNumberBackground02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgNumberBackground02, 0.5, 0.5);
        this._imgNumberBackground02.setColor(cc.color(6, 47, 129, 255));
        let _imgNumberBackground02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNumberBackground02);
        _imgNumberBackground02LayoutComponent.setPositionPercentXEnabled(true);
        _imgNumberBackground02LayoutComponent.setPositionPercentX(0.5);
        _imgNumberBackground02LayoutComponent.setPositionPercentYEnabled(true);
        _imgNumberBackground02LayoutComponent.setPositionPercentY(0.5);
        _imgNumberBackground02LayoutComponent.setPercentWidthEnabled(true);
        _imgNumberBackground02LayoutComponent.setPercentWidth(1);
        _imgNumberBackground02LayoutComponent.setPercentHeightEnabled(true);
        _imgNumberBackground02LayoutComponent.setPercentHeight(1);
        this._imgNumberBackground02.loadTexture("basics/shapes/Square.png", 1);
        this._imgNumberBackground02.setUnifySizeEnabled(false);
        this._imgNumberBackground02.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgNumberBackground02, 1, 1);
        this._imgNumberBackground02.setTouchEnabled(false);

        ///// # _imgNumberForeground02
        this._imgNumberForeground02 = new ccui.ImageView();
        this._imgNumberForeground02.setName("_imgNumberForeground02");
        this._layoutNumber02.addChild(this._imgNumberForeground02);
        this._imgNumberForeground02.setCascadeOpacityEnabled(true);
        this._imgNumberForeground02.setCascadeColorEnabled(true);
        this._imgNumberForeground02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgNumberForeground02, 0.5, 0.5);
        this._imgNumberForeground02.setColor(cc.color(255, 255, 222, 255));
        let _imgNumberForeground02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNumberForeground02);
        _imgNumberForeground02LayoutComponent.setPositionPercentXEnabled(true);
        _imgNumberForeground02LayoutComponent.setPositionPercentX(0.5);
        _imgNumberForeground02LayoutComponent.setPositionPercentYEnabled(true);
        _imgNumberForeground02LayoutComponent.setPositionPercentY(0.5);
        this._imgNumberForeground02.loadTexture("basics/shapes/Square.png", 1);
        this._imgNumberForeground02.setUnifySizeEnabled(false);
        this._imgNumberForeground02.ignoreContentAdaptWithSize(false);
        this._imgNumberForeground02.setContentSize(cc.size(51, 51));
        this._imgNumberForeground02.setTouchEnabled(false);

        ///// # _imgStar02
        this._imgStar02 = new ccui.ImageView();
        this._imgStar02.setName("_imgStar02");
        this._layoutNumber02.addChild(this._imgStar02);
        this._imgStar02.setCascadeOpacityEnabled(true);
        this._imgStar02.setCascadeColorEnabled(true);
        this._imgStar02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStar02, 0.5, 0.5);
        let _imgStar02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStar02);
        _imgStar02LayoutComponent.setPositionPercentXEnabled(true);
        _imgStar02LayoutComponent.setPositionPercentX(0.5);
        _imgStar02LayoutComponent.setPositionPercentYEnabled(true);
        _imgStar02LayoutComponent.setPositionPercentY(0.5);
        _imgStar02LayoutComponent.setPercentWidthEnabled(true);
        _imgStar02LayoutComponent.setPercentWidth(0.78);
        _imgStar02LayoutComponent.setPercentHeightEnabled(true);
        _imgStar02LayoutComponent.setPercentHeight(0.75);
        this._imgStar02.loadTexture("icons/color/stars/Yellow.png", 1);
        this._imgStar02.setUnifySizeEnabled(false);
        this._imgStar02.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgStar02, 0.78, 0.75);
        this._imgStar02.setTouchEnabled(false);

        ///// # _txtNumber02
        this._txtNumber02 = new ck.Text();
        this._txtNumber02.setName("_txtNumber02");
        this._layoutNumber02.addChild(this._txtNumber02);
        this._txtNumber02.setCascadeOpacityEnabled(true);
        this._txtNumber02.setCascadeColorEnabled(true);
        this._txtNumber02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNumber02, 0.5, 0.5);
        this._txtNumber02.setTextColor(cc.color(37, 37, 37, 255));
        let _txtNumber02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNumber02);
        _txtNumber02LayoutComponent.setPositionPercentXEnabled(true);
        _txtNumber02LayoutComponent.setPositionPercentX(0.5);
        _txtNumber02LayoutComponent.setPositionPercentYEnabled(true);
        _txtNumber02LayoutComponent.setPositionPercentY(0.5);
        this._txtNumber02.setTouchEnabled(false);
        this._txtNumber02.ignoreContentAdaptWithSize(true);
        this._txtNumber02.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtNumber02.setDefaultFontSize(40);
        this._txtNumber02.setTextHorizontalAlignment(0);
        this._txtNumber02.setTextVerticalAlignment(0);

        ///// # _layoutNumber03
        this._layoutNumber03 = new ccui.Layout();
        this._layoutNumber03.setName("_layoutNumber03");
        this._layoutRoot.addChild(this._layoutNumber03);
        this._layoutNumber03.setCascadeOpacityEnabled(true);
        this._layoutNumber03.setCascadeColorEnabled(true);
        this._layoutNumber03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutNumber03, 0.6818, 0.5);
        let _layoutNumber03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutNumber03);
        _layoutNumber03LayoutComponent.setPositionPercentYEnabled(true);
        _layoutNumber03LayoutComponent.setPositionPercentY(0.5);
        this._layoutNumber03.setTouchEnabled(false);
        this._layoutNumber03.setUnifySizeEnabled(false);
        this._layoutNumber03.ignoreContentAdaptWithSize(false);
        this._layoutNumber03.setContentSize(cc.size(57, 57));

        ///// # _imgNumberBackground03
        this._imgNumberBackground03 = new ccui.ImageView();
        this._imgNumberBackground03.setName("_imgNumberBackground03");
        this._layoutNumber03.addChild(this._imgNumberBackground03);
        this._imgNumberBackground03.setCascadeOpacityEnabled(true);
        this._imgNumberBackground03.setCascadeColorEnabled(true);
        this._imgNumberBackground03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgNumberBackground03, 0.5, 0.5);
        this._imgNumberBackground03.setColor(cc.color(6, 47, 129, 255));
        let _imgNumberBackground03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNumberBackground03);
        _imgNumberBackground03LayoutComponent.setPositionPercentXEnabled(true);
        _imgNumberBackground03LayoutComponent.setPositionPercentX(0.5);
        _imgNumberBackground03LayoutComponent.setPositionPercentYEnabled(true);
        _imgNumberBackground03LayoutComponent.setPositionPercentY(0.5);
        _imgNumberBackground03LayoutComponent.setPercentWidthEnabled(true);
        _imgNumberBackground03LayoutComponent.setPercentWidth(1);
        _imgNumberBackground03LayoutComponent.setPercentHeightEnabled(true);
        _imgNumberBackground03LayoutComponent.setPercentHeight(1);
        this._imgNumberBackground03.loadTexture("basics/shapes/Square.png", 1);
        this._imgNumberBackground03.setUnifySizeEnabled(false);
        this._imgNumberBackground03.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgNumberBackground03, 1, 1);
        this._imgNumberBackground03.setTouchEnabled(false);

        ///// # _imgNumberForeground03
        this._imgNumberForeground03 = new ccui.ImageView();
        this._imgNumberForeground03.setName("_imgNumberForeground03");
        this._layoutNumber03.addChild(this._imgNumberForeground03);
        this._imgNumberForeground03.setCascadeOpacityEnabled(true);
        this._imgNumberForeground03.setCascadeColorEnabled(true);
        this._imgNumberForeground03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgNumberForeground03, 0.5, 0.5);
        this._imgNumberForeground03.setColor(cc.color(255, 255, 222, 255));
        let _imgNumberForeground03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNumberForeground03);
        _imgNumberForeground03LayoutComponent.setPositionPercentXEnabled(true);
        _imgNumberForeground03LayoutComponent.setPositionPercentX(0.5);
        _imgNumberForeground03LayoutComponent.setPositionPercentYEnabled(true);
        _imgNumberForeground03LayoutComponent.setPositionPercentY(0.5);
        this._imgNumberForeground03.loadTexture("basics/shapes/Square.png", 1);
        this._imgNumberForeground03.setUnifySizeEnabled(false);
        this._imgNumberForeground03.ignoreContentAdaptWithSize(false);
        this._imgNumberForeground03.setContentSize(cc.size(51, 51));
        this._imgNumberForeground03.setTouchEnabled(false);

        ///// # _imgStar03
        this._imgStar03 = new ccui.ImageView();
        this._imgStar03.setName("_imgStar03");
        this._layoutNumber03.addChild(this._imgStar03);
        this._imgStar03.setCascadeOpacityEnabled(true);
        this._imgStar03.setCascadeColorEnabled(true);
        this._imgStar03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStar03, 0.5, 0.5);
        let _imgStar03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStar03);
        _imgStar03LayoutComponent.setPositionPercentXEnabled(true);
        _imgStar03LayoutComponent.setPositionPercentX(0.5);
        _imgStar03LayoutComponent.setPositionPercentYEnabled(true);
        _imgStar03LayoutComponent.setPositionPercentY(0.5);
        _imgStar03LayoutComponent.setPercentWidthEnabled(true);
        _imgStar03LayoutComponent.setPercentWidth(0.78);
        _imgStar03LayoutComponent.setPercentHeightEnabled(true);
        _imgStar03LayoutComponent.setPercentHeight(0.75);
        this._imgStar03.loadTexture("icons/color/stars/Yellow.png", 1);
        this._imgStar03.setUnifySizeEnabled(false);
        this._imgStar03.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgStar03, 0.78, 0.75);
        this._imgStar03.setTouchEnabled(false);

        ///// # _txtNumber03
        this._txtNumber03 = new ck.Text();
        this._txtNumber03.setName("_txtNumber03");
        this._layoutNumber03.addChild(this._txtNumber03);
        this._txtNumber03.setCascadeOpacityEnabled(true);
        this._txtNumber03.setCascadeColorEnabled(true);
        this._txtNumber03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNumber03, 0.5, 0.5);
        this._txtNumber03.setTextColor(cc.color(37, 37, 37, 255));
        let _txtNumber03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNumber03);
        _txtNumber03LayoutComponent.setPositionPercentXEnabled(true);
        _txtNumber03LayoutComponent.setPositionPercentX(0.5);
        _txtNumber03LayoutComponent.setPositionPercentYEnabled(true);
        _txtNumber03LayoutComponent.setPositionPercentY(0.5);
        this._txtNumber03.setTouchEnabled(false);
        this._txtNumber03.ignoreContentAdaptWithSize(true);
        this._txtNumber03.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtNumber03.setDefaultFontSize(40);
        this._txtNumber03.setTextHorizontalAlignment(0);
        this._txtNumber03.setTextVerticalAlignment(0);

        ///// # _layoutNumber04
        this._layoutNumber04 = new ccui.Layout();
        this._layoutNumber04.setName("_layoutNumber04");
        this._layoutRoot.addChild(this._layoutNumber04);
        this._layoutNumber04.setCascadeOpacityEnabled(true);
        this._layoutNumber04.setCascadeColorEnabled(true);
        this._layoutNumber04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutNumber04, 0.8636, 0.5);
        let _layoutNumber04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutNumber04);
        _layoutNumber04LayoutComponent.setPositionPercentYEnabled(true);
        _layoutNumber04LayoutComponent.setPositionPercentY(0.5);
        this._layoutNumber04.setTouchEnabled(false);
        this._layoutNumber04.setUnifySizeEnabled(false);
        this._layoutNumber04.ignoreContentAdaptWithSize(false);
        this._layoutNumber04.setContentSize(cc.size(57, 57));

        ///// # _imgNumberBackground04
        this._imgNumberBackground04 = new ccui.ImageView();
        this._imgNumberBackground04.setName("_imgNumberBackground04");
        this._layoutNumber04.addChild(this._imgNumberBackground04);
        this._imgNumberBackground04.setCascadeOpacityEnabled(true);
        this._imgNumberBackground04.setCascadeColorEnabled(true);
        this._imgNumberBackground04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgNumberBackground04, 0.5, 0.5);
        this._imgNumberBackground04.setColor(cc.color(6, 47, 129, 255));
        let _imgNumberBackground04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNumberBackground04);
        _imgNumberBackground04LayoutComponent.setPositionPercentXEnabled(true);
        _imgNumberBackground04LayoutComponent.setPositionPercentX(0.5);
        _imgNumberBackground04LayoutComponent.setPositionPercentYEnabled(true);
        _imgNumberBackground04LayoutComponent.setPositionPercentY(0.5);
        _imgNumberBackground04LayoutComponent.setPercentWidthEnabled(true);
        _imgNumberBackground04LayoutComponent.setPercentWidth(1);
        _imgNumberBackground04LayoutComponent.setPercentHeightEnabled(true);
        _imgNumberBackground04LayoutComponent.setPercentHeight(1);
        this._imgNumberBackground04.loadTexture("basics/shapes/Square.png", 1);
        this._imgNumberBackground04.setUnifySizeEnabled(false);
        this._imgNumberBackground04.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgNumberBackground04, 1, 1);
        this._imgNumberBackground04.setTouchEnabled(false);

        ///// # _imgNumberForeground04
        this._imgNumberForeground04 = new ccui.ImageView();
        this._imgNumberForeground04.setName("_imgNumberForeground04");
        this._layoutNumber04.addChild(this._imgNumberForeground04);
        this._imgNumberForeground04.setCascadeOpacityEnabled(true);
        this._imgNumberForeground04.setCascadeColorEnabled(true);
        this._imgNumberForeground04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgNumberForeground04, 0.5, 0.5);
        this._imgNumberForeground04.setColor(cc.color(255, 255, 222, 255));
        let _imgNumberForeground04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNumberForeground04);
        _imgNumberForeground04LayoutComponent.setPositionPercentXEnabled(true);
        _imgNumberForeground04LayoutComponent.setPositionPercentX(0.5);
        _imgNumberForeground04LayoutComponent.setPositionPercentYEnabled(true);
        _imgNumberForeground04LayoutComponent.setPositionPercentY(0.5);
        this._imgNumberForeground04.loadTexture("basics/shapes/Square.png", 1);
        this._imgNumberForeground04.setUnifySizeEnabled(false);
        this._imgNumberForeground04.ignoreContentAdaptWithSize(false);
        this._imgNumberForeground04.setContentSize(cc.size(51, 51));
        this._imgNumberForeground04.setTouchEnabled(false);

        ///// # _imgStar04
        this._imgStar04 = new ccui.ImageView();
        this._imgStar04.setName("_imgStar04");
        this._layoutNumber04.addChild(this._imgStar04);
        this._imgStar04.setCascadeOpacityEnabled(true);
        this._imgStar04.setCascadeColorEnabled(true);
        this._imgStar04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStar04, 0.5, 0.5);
        let _imgStar04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStar04);
        _imgStar04LayoutComponent.setPositionPercentXEnabled(true);
        _imgStar04LayoutComponent.setPositionPercentX(0.5);
        _imgStar04LayoutComponent.setPositionPercentYEnabled(true);
        _imgStar04LayoutComponent.setPositionPercentY(0.5);
        _imgStar04LayoutComponent.setPercentWidthEnabled(true);
        _imgStar04LayoutComponent.setPercentWidth(0.78);
        _imgStar04LayoutComponent.setPercentHeightEnabled(true);
        _imgStar04LayoutComponent.setPercentHeight(0.75);
        this._imgStar04.loadTexture("icons/color/stars/Yellow.png", 1);
        this._imgStar04.setUnifySizeEnabled(false);
        this._imgStar04.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgStar04, 0.78, 0.75);
        this._imgStar04.setTouchEnabled(false);

        ///// # _txtNumber04
        this._txtNumber04 = new ck.Text();
        this._txtNumber04.setName("_txtNumber04");
        this._layoutNumber04.addChild(this._txtNumber04);
        this._txtNumber04.setCascadeOpacityEnabled(true);
        this._txtNumber04.setCascadeColorEnabled(true);
        this._txtNumber04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNumber04, 0.5, 0.5);
        this._txtNumber04.setTextColor(cc.color(37, 37, 37, 255));
        let _txtNumber04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNumber04);
        _txtNumber04LayoutComponent.setPositionPercentXEnabled(true);
        _txtNumber04LayoutComponent.setPositionPercentX(0.5);
        _txtNumber04LayoutComponent.setPositionPercentYEnabled(true);
        _txtNumber04LayoutComponent.setPositionPercentY(0.5);
        this._txtNumber04.setTouchEnabled(false);
        this._txtNumber04.ignoreContentAdaptWithSize(true);
        this._txtNumber04.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtNumber04.setDefaultFontSize(40);
        this._txtNumber04.setTextHorizontalAlignment(0);
        this._txtNumber04.setTextVerticalAlignment(0);

    },


    playCCSAnimAllStarJump: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimAllStarJump();
    
        let _imgStar00Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(20 / (60 * speed), 28.5, 45.6513).easing(cc.easeQuadraticActionIn()),
                    cc.moveTo(20 / (60 * speed), 28.5, 28.5).easing(cc.easeQuadraticActionOut()),
                    cc.moveTo(40 / (60 * speed), 28.5, 28.5)
                ),
                cc.sequence(
                    cc.scaleTo(20 / (60 * speed), 0.9, 1.1).easing(cc.easeQuadraticActionIn()),
                    cc.scaleTo(20 / (60 * speed), 1, 1).easing(cc.easeQuadraticActionOut()),
                    cc.scaleTo(40 / (60 * speed), 1, 1)
                ),
                cc.rotateBy(80 / (60 * speed), 0, 0)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgStar00.setPosition(28.5, 28.5);
                this._imgStar00.setScale(1, 1);
                this._imgStar00.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgStar00Action = _imgStar00Action.repeatForever();
        } else _imgStar00Action = cc.sequence(
            cc.delayTime(delay),
            _imgStar00Action.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgStar00.runAction(_imgStar00Action);
    
        let _imgStar01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(10 / (60 * speed), 28.5, 28.5),
                    cc.moveTo(20 / (60 * speed), 28.5, 45.6513).easing(cc.easeQuadraticActionIn()),
                    cc.moveTo(20 / (60 * speed), 28.5, 28.5).easing(cc.easeQuadraticActionOut()),
                    cc.moveTo(30 / (60 * speed), 28.5, 28.5)
                ),
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 1, 1),
                    cc.scaleTo(20 / (60 * speed), 0.9, 1.1).easing(cc.easeQuadraticActionIn()),
                    cc.scaleTo(20 / (60 * speed), 1, 1).easing(cc.easeQuadraticActionOut()),
                    cc.scaleTo(30 / (60 * speed), 1, 1)
                ),
                cc.rotateBy(80 / (60 * speed), 0, 0)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgStar01.setPosition(28.5, 28.5);
                this._imgStar01.setScale(1, 1);
                this._imgStar01.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgStar01Action = _imgStar01Action.repeatForever();
        } else _imgStar01Action = cc.sequence(
            cc.delayTime(delay),
            _imgStar01Action.repeat(repeat)
        )
        
        this._imgStar01.runAction(_imgStar01Action);
    
        let _imgStar02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(20 / (60 * speed), 28.5, 28.5),
                    cc.moveTo(20 / (60 * speed), 28.5, 45.6513).easing(cc.easeQuadraticActionIn()),
                    cc.moveTo(20 / (60 * speed), 28.5, 28.5).easing(cc.easeQuadraticActionOut()),
                    cc.moveTo(20 / (60 * speed), 28.5, 28.5)
                ),
                cc.sequence(
                    cc.scaleTo(20 / (60 * speed), 1, 1),
                    cc.scaleTo(20 / (60 * speed), 0.9, 1.1).easing(cc.easeQuadraticActionIn()),
                    cc.scaleTo(20 / (60 * speed), 1, 1).easing(cc.easeQuadraticActionOut()),
                    cc.scaleTo(20 / (60 * speed), 1, 1)
                ),
                cc.rotateBy(80 / (60 * speed), 0, 0)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgStar02.setPosition(28.5, 28.5);
                this._imgStar02.setScale(1, 1);
                this._imgStar02.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgStar02Action = _imgStar02Action.repeatForever();
        } else _imgStar02Action = cc.sequence(
            cc.delayTime(delay),
            _imgStar02Action.repeat(repeat)
        )
        
        this._imgStar02.runAction(_imgStar02Action);
    
        let _imgStar03Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(30 / (60 * speed), 28.5, 28.5),
                    cc.moveTo(20 / (60 * speed), 28.5, 45.6513).easing(cc.easeQuadraticActionIn()),
                    cc.moveTo(20 / (60 * speed), 28.5, 28.5).easing(cc.easeQuadraticActionOut()),
                    cc.moveTo(10 / (60 * speed), 28.5, 28.5)
                ),
                cc.sequence(
                    cc.scaleTo(30 / (60 * speed), 1, 1),
                    cc.scaleTo(20 / (60 * speed), 0.9, 1.1).easing(cc.easeQuadraticActionIn()),
                    cc.scaleTo(20 / (60 * speed), 1, 1).easing(cc.easeQuadraticActionOut()),
                    cc.scaleTo(10 / (60 * speed), 1, 1)
                ),
                cc.rotateBy(80 / (60 * speed), 0, 0)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgStar03.setPosition(28.5, 28.5);
                this._imgStar03.setScale(1, 1);
                this._imgStar03.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgStar03Action = _imgStar03Action.repeatForever();
        } else _imgStar03Action = cc.sequence(
            cc.delayTime(delay),
            _imgStar03Action.repeat(repeat)
        )
        
        this._imgStar03.runAction(_imgStar03Action);
    
        let _imgStar04Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(40 / (60 * speed), 28.5, 28.5),
                    cc.moveTo(20 / (60 * speed), 28.5, 45.6513).easing(cc.easeQuadraticActionIn()),
                    cc.moveTo(20 / (60 * speed), 28.5, 28.5).easing(cc.easeQuadraticActionOut())
                ),
                cc.sequence(
                    cc.scaleTo(40 / (60 * speed), 1, 1),
                    cc.scaleTo(20 / (60 * speed), 0.9, 1.1).easing(cc.easeQuadraticActionIn()),
                    cc.scaleTo(20 / (60 * speed), 1, 1).easing(cc.easeQuadraticActionOut())
                ),
                cc.rotateBy(80 / (60 * speed), 0, 0)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgStar04.setPosition(28.5, 28.5);
                this._imgStar04.setScale(1, 1);
                this._imgStar04.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgStar04Action = _imgStar04Action.repeatForever();
        } else _imgStar04Action = cc.sequence(
            cc.delayTime(delay),
            _imgStar04Action.repeat(repeat)
        )
        
        this._imgStar04.runAction(_imgStar04Action);
    },

    resetCCSAnimAllStarJump: function () {
        this._imgStar00.stopAllActions();
        this._imgStar00.setPosition(28.5, 28.5);
        this._imgStar00.setScale(1, 1);
        this._imgStar00.setRotation(0);
    
        this._imgStar01.stopAllActions();
        this._imgStar01.setPosition(28.5, 28.5);
        this._imgStar01.setScale(1, 1);
        this._imgStar01.setRotation(0);
    
        this._imgStar02.stopAllActions();
        this._imgStar02.setPosition(28.5, 28.5);
        this._imgStar02.setScale(1, 1);
        this._imgStar02.setRotation(0);
    
        this._imgStar03.stopAllActions();
        this._imgStar03.setPosition(28.5, 28.5);
        this._imgStar03.setScale(1, 1);
        this._imgStar03.setRotation(0);
    
        this._imgStar04.stopAllActions();
        this._imgStar04.setPosition(28.5, 28.5);
        this._imgStar04.setScale(1, 1);
        this._imgStar04.setRotation(0);
    },

    playCCSAnimReset: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimReset();
    
    
    
    
    
    
    
    
    
    
    },

    resetCCSAnimReset: function () {
        this._imgStar00.stopAllActions();
        this._imgStar00.setPosition(28.5, 28.5);
        this._imgStar00.setScale(1, 1);
        this._imgStar00.setRotation(0);
    
        this._imgStar01.stopAllActions();
        this._imgStar01.setPosition(28.5, 28.5);
        this._imgStar01.setScale(1, 1);
        this._imgStar01.setRotation(0);
    
        this._imgStar02.stopAllActions();
        this._imgStar02.setPosition(28.5, 28.5);
        this._imgStar02.setScale(1, 1);
        this._imgStar02.setRotation(0);
    
        this._imgStar03.stopAllActions();
        this._imgStar03.setPosition(28.5, 28.5);
        this._imgStar03.setScale(1, 1);
        this._imgStar03.setRotation(0);
    
        this._imgStar04.stopAllActions();
        this._imgStar04.setPosition(28.5, 28.5);
        this._imgStar04.setScale(1, 1);
        this._imgStar04.setRotation(0);
    }
});

/**
 * Create BingoTicketWidget
 * @returns {_ccs.BingoTicketWidget}
 */
_ccs.BingoTicketWidget.create = function () {
    return new _ccs.BingoTicketWidget();
};
