/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.RankingGuide
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.RankingGuide = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {cc.Node} */
    _step01: null,
    /** @type {ccui.ImageView} */
    _imgStep01: null,
    /** @type {ccui.ImageView} */
    _imgCallout01: null,
    /** @type {ck.Text} */
    _txtStep01: null,
    /** @type {cc.Node} */
    _step02: null,
    /** @type {ccui.ImageView} */
    _imgCallout02: null,
    /** @type {ck.Text} */
    _txtStep02: null,
    /** @type {ccui.ImageView} */
    _imgStep02: null,
    /** @type {cc.Node} */
    _step03: null,
    /** @type {ccui.ImageView} */
    _imgStep03: null,
    /** @type {ccui.ImageView} */
    _imgCallout03: null,
    /** @type {ck.Text} */
    _txtStep03: null,
    /** @type {ck.Text} */
    _txtHint: null,
    /** @type {ck.Text} */
    _txtTapToClose: null,


    /**
     * _ccs.RankingGuide constructor
     * @constructor
     */
    ctor: function () {
        cc.Layer.prototype.ctor.call(this);
        this.setCascadeOpacityEnabled(true);
        if (PlatformUtils.hasNotch())
            this._initNotch();
        this._initCCSChildren();
    },

    /**
     * Init notch for main layer
     * @private
     */
    _initNotch: function () {
        let notchHeight = PlatformUtils.NOTCH_HEIGHT;
        let marginBottom = PlatformUtils.MARGIN_BOTTOM;
        this.height = this.height - (notchHeight + marginBottom);
        this.setPosition(0, marginBottom);
    },

    /**
     * Init full screen background
     * @private
     */
    _initFullScreenBackground: function (background) {
        if (!PlatformUtils.hasNotch()) return;
        let backgroundScaleHeight = background.height / background.getParent().height;
        let notchHeight = PlatformUtils.NOTCH_HEIGHT;
        let marginBottom = PlatformUtils.MARGIN_BOTTOM;
        background.height = cc.winSize.height * backgroundScaleHeight;
        background.setAnchorPoint(0.5, 0.5);
        background.setPosition(cc.winSize.width * 0.5, background.height * 0.5 - marginBottom);
    },

    /**
     * Init nodes from ccs
     * @private
     */
    _initCCSChildren: function () {

        ///// # _layoutPopup
        this._layoutPopup = new ccui.Layout();
        this._layoutPopup.setName("_layoutPopup");
        this.addChild(this._layoutPopup);
        this._layoutPopup.setCascadeOpacityEnabled(true);
        this._layoutPopup.setCascadeColorEnabled(true);
        this._layoutPopup.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutPopup, 0.5, 0.5);
        let _layoutPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        _layoutPopupLayoutComponent.setPositionPercentXEnabled(true);
        _layoutPopupLayoutComponent.setPositionPercentX(0.5);
        _layoutPopupLayoutComponent.setPositionPercentYEnabled(true);
        _layoutPopupLayoutComponent.setPositionPercentY(0.5);
        _layoutPopupLayoutComponent.setPercentWidthEnabled(true);
        _layoutPopupLayoutComponent.setPercentWidth(1);
        _layoutPopupLayoutComponent.setPercentHeightEnabled(true);
        _layoutPopupLayoutComponent.setPercentHeight(1);
        this._layoutPopup.setTouchEnabled(false);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutPopup, 1, 1);

        ///// # _step01
        this._step01 = new cc.Node();
        this._step01.setName("_step01");
        this._layoutPopup.addChild(this._step01);
        this._step01.setCascadeOpacityEnabled(true);
        this._step01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._step01, 0.1508, 0.4672);
        let _step01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._step01);
        _step01LayoutComponent.setPositionPercentXEnabled(true);
        _step01LayoutComponent.setPositionPercentX(0.1508);

        ///// # _imgStep01
        this._imgStep01 = new ccui.ImageView();
        this._imgStep01.setName("_imgStep01");
        this._step01.addChild(this._imgStep01);
        this._imgStep01.setCascadeOpacityEnabled(true);
        this._imgStep01.setCascadeColorEnabled(true);
        this._imgStep01.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgStep01.setPosition(30.9975, 0.0001);
        let _imgStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep01);
        this._imgStep01.loadTexture("ranking/Tutorial_01.png", 1);
        this._imgStep01.setUnifySizeEnabled(false);
        this._imgStep01.ignoreContentAdaptWithSize(false);
        this._imgStep01.setContentSize(cc.size(227, 203));
        this._imgStep01.setTouchEnabled(false);

        ///// # _imgCallout01
        this._imgCallout01 = new ccui.ImageView();
        this._imgCallout01.setName("_imgCallout01");
        this._step01.addChild(this._imgCallout01);
        this._imgCallout01.setCascadeOpacityEnabled(true);
        this._imgCallout01.setCascadeColorEnabled(true);
        this._imgCallout01.setAnchorPoint(cc.p(0.1239, 0));
        this._imgCallout01.setPosition(-13.4647, -106.1356);
        this._imgCallout01.setRotationX(180);
        this._imgCallout01.setRotationY(179.993);
        this._imgCallout01.setFlippedX(true);
        let _imgCallout01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCallout01);
        this._imgCallout01.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgCallout01.setUnifySizeEnabled(false);
        this._imgCallout01.ignoreContentAdaptWithSize(false);
        this._imgCallout01.setScale9Enabled(true);
        this._imgCallout01.setCapInsets(cc.rect(106, 30, 11, 68));
        this._imgCallout01.setContentSize(cc.size(222.45, 128));
        this._imgCallout01.setTouchEnabled(false);
        this._imgCallout01.setFlippedX(true);

        ///// # _txtStep01
        this._txtStep01 = new ck.Text();
        this._txtStep01.setName("_txtStep01");
        this._step01.addChild(this._txtStep01);
        this._txtStep01.setCascadeOpacityEnabled(true);
        this._txtStep01.setCascadeColorEnabled(true);
        this._txtStep01.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtStep01.setPosition(69.6972, -184.8286);
        let _txtStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep01);
        this._txtStep01.setTouchEnabled(false);
        this._txtStep01.setUnifySizeEnabled(false);
        this._txtStep01.ignoreContentAdaptWithSize(false);
        this._txtStep01.setContentSize(cc.size(196.0488, 91.5611));
        this._txtStep01.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtStep01.setDefaultFontSize(25);
        this._txtStep01.setTextHorizontalAlignment(1);
        this._txtStep01.setTextVerticalAlignment(1);

        ///// # _step02
        this._step02 = new cc.Node();
        this._step02.setName("_step02");
        this._layoutPopup.addChild(this._step02);
        this._step02.setCascadeOpacityEnabled(true);
        this._step02.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._step02, 0.494, 0.7278);
        let _step02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._step02);
        _step02LayoutComponent.setPositionPercentXEnabled(true);
        _step02LayoutComponent.setPositionPercentX(0.494);

        ///// # _imgCallout02
        this._imgCallout02 = new ccui.ImageView();
        this._imgCallout02.setName("_imgCallout02");
        this._step02.addChild(this._imgCallout02);
        this._imgCallout02.setCascadeOpacityEnabled(true);
        this._imgCallout02.setCascadeColorEnabled(true);
        this._imgCallout02.setAnchorPoint(cc.p(0.1282, 0));
        this._imgCallout02.setPosition(-77.3312, 112.0003);
        this._imgCallout02.setRotationY(-0.007);
        let _imgCallout02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCallout02);
        this._imgCallout02.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgCallout02.setUnifySizeEnabled(false);
        this._imgCallout02.ignoreContentAdaptWithSize(false);
        this._imgCallout02.setScale9Enabled(true);
        this._imgCallout02.setCapInsets(cc.rect(131, 3, 5, 122));
        this._imgCallout02.setContentSize(cc.size(218.7467, 128));
        this._imgCallout02.setTouchEnabled(false);

        ///// # _txtStep02
        this._txtStep02 = new ck.Text();
        this._txtStep02.setName("_txtStep02");
        this._step02.addChild(this._txtStep02);
        this._txtStep02.setCascadeOpacityEnabled(true);
        this._txtStep02.setCascadeColorEnabled(true);
        this._txtStep02.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtStep02.setPosition(3.9984, 189.0089);
        let _txtStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep02);
        this._txtStep02.setTouchEnabled(false);
        this._txtStep02.setUnifySizeEnabled(false);
        this._txtStep02.ignoreContentAdaptWithSize(false);
        this._txtStep02.setContentSize(cc.size(188.7257, 87.7609));
        this._txtStep02.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtStep02.setDefaultFontSize(25);
        this._txtStep02.setTextHorizontalAlignment(1);
        this._txtStep02.setTextVerticalAlignment(1);

        ///// # _imgStep02
        this._imgStep02 = new ccui.ImageView();
        this._imgStep02.setName("_imgStep02");
        this._step02.addChild(this._imgStep02);
        this._imgStep02.setCascadeOpacityEnabled(true);
        this._imgStep02.setCascadeColorEnabled(true);
        this._imgStep02.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep02);
        this._imgStep02.loadTexture("ranking/Tutorial_02.png", 1);
        this._imgStep02.setUnifySizeEnabled(false);
        this._imgStep02.ignoreContentAdaptWithSize(false);
        this._imgStep02.setContentSize(cc.size(276, 222));
        this._imgStep02.setTouchEnabled(false);

        ///// # _step03
        this._step03 = new cc.Node();
        this._step03.setName("_step03");
        this._layoutPopup.addChild(this._step03);
        this._step03.setCascadeOpacityEnabled(true);
        this._step03.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._step03, 0.7737, 0.4664);
        let _step03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._step03);
        _step03LayoutComponent.setPositionPercentXEnabled(true);
        _step03LayoutComponent.setPositionPercentX(0.7737);

        ///// # _imgStep03
        this._imgStep03 = new ccui.ImageView();
        this._imgStep03.setName("_imgStep03");
        this._step03.addChild(this._imgStep03);
        this._imgStep03.setCascadeOpacityEnabled(true);
        this._imgStep03.setCascadeColorEnabled(true);
        this._imgStep03.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgStep03.setPosition(0.0001, -1.7498);
        let _imgStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep03);
        this._imgStep03.loadTexture("ranking/Tutorial_03.png", 1);
        this._imgStep03.setUnifySizeEnabled(false);
        this._imgStep03.ignoreContentAdaptWithSize(false);
        this._imgStep03.setContentSize(cc.size(265, 275));
        this._imgStep03.setTouchEnabled(false);

        ///// # _imgCallout03
        this._imgCallout03 = new ccui.ImageView();
        this._imgCallout03.setName("_imgCallout03");
        this._step03.addChild(this._imgCallout03);
        this._imgCallout03.setCascadeOpacityEnabled(true);
        this._imgCallout03.setCascadeColorEnabled(true);
        this._imgCallout03.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCallout03.setPosition(-29.2534, -204.4604);
        this._imgCallout03.setRotationX(180);
        this._imgCallout03.setRotationY(179.9948);
        let _imgCallout03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCallout03);
        this._imgCallout03.loadTexture("basics/other/ChatBubble_02.png", 1);
        this._imgCallout03.setUnifySizeEnabled(false);
        this._imgCallout03.ignoreContentAdaptWithSize(false);
        this._imgCallout03.setScale9Enabled(true);
        this._imgCallout03.setCapInsets(cc.rect(47, 31, 14, 67));
        this._imgCallout03.setContentSize(cc.size(222.45, 128));
        this._imgCallout03.setTouchEnabled(false);

        ///// # _txtStep03
        this._txtStep03 = new ck.Text();
        this._txtStep03.setName("_txtStep03");
        this._step03.addChild(this._txtStep03);
        this._txtStep03.setCascadeOpacityEnabled(true);
        this._txtStep03.setCascadeColorEnabled(true);
        this._txtStep03.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtStep03.setPosition(-31.1467, -218.5149);
        let _txtStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep03);
        this._txtStep03.setTouchEnabled(false);
        this._txtStep03.setUnifySizeEnabled(false);
        this._txtStep03.ignoreContentAdaptWithSize(false);
        this._txtStep03.setContentSize(cc.size(206.3961, 89.0786));
        this._txtStep03.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtStep03.setDefaultFontSize(25);
        this._txtStep03.setTextHorizontalAlignment(1);
        this._txtStep03.setTextVerticalAlignment(1);

        ///// # _txtHint
        this._txtHint = new ck.Text();
        this._txtHint.setName("_txtHint");
        this._layoutPopup.addChild(this._txtHint);
        this._txtHint.setCascadeOpacityEnabled(true);
        this._txtHint.setCascadeColorEnabled(true);
        this._txtHint.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHint, 0.5, 0.1794);
        this._txtHint.setTextColor(cc.color(255, 255, 0, 255));
        let _txtHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHint);
        _txtHintLayoutComponent.setPositionPercentXEnabled(true);
        _txtHintLayoutComponent.setPositionPercentX(0.5);
        _txtHintLayoutComponent.setPositionPercentYEnabled(true);
        _txtHintLayoutComponent.setPositionPercentY(0.1794);
        this._txtHint.setTouchEnabled(false);
        this._txtHint.ignoreContentAdaptWithSize(true);
        this._txtHint.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHint.setDefaultFontSize(25);
        this._txtHint.setTextHorizontalAlignment(1);
        this._txtHint.setTextVerticalAlignment(1);

        ///// # _txtTapToClose
        this._txtTapToClose = new ck.Text();
        this._txtTapToClose.setName("_txtTapToClose");
        this._layoutPopup.addChild(this._txtTapToClose);
        this._txtTapToClose.setCascadeOpacityEnabled(true);
        this._txtTapToClose.setCascadeColorEnabled(true);
        this._txtTapToClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTapToClose, 0.5, 0.0315);
        let _txtTapToCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTapToClose);
        _txtTapToCloseLayoutComponent.setPositionPercentXEnabled(true);
        _txtTapToCloseLayoutComponent.setPositionPercentX(0.5);
        _txtTapToCloseLayoutComponent.setPositionPercentYEnabled(true);
        _txtTapToCloseLayoutComponent.setPositionPercentY(0.0315);
        this._txtTapToClose.setTouchEnabled(false);
        this._txtTapToClose.ignoreContentAdaptWithSize(true);
        this._txtTapToClose.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTapToClose.setDefaultFontSize(25);
        this._txtTapToClose.setString(gm.localize.getText("TXT_TAP_TO_CLOSE"));
        this._txtTapToClose.setTextHorizontalAlignment(1);
        this._txtTapToClose.setTextVerticalAlignment(1);

    },



});

/**
 * Create RankingGuide
 * @returns {_ccs.RankingGuide}
 */
_ccs.RankingGuide.create = function () {
    return new _ccs.RankingGuide();
};
