/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.BuildUpPayEventIcon
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.BuildUpPayEventIcon = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {Glow} */
    _glow: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ccui.ImageView} */
    _imgRedDot: null,
    /** @type {ck.Text} */
    _txtNumRedDot: null,
    /** @type {ccui.ImageView} */
    _imgTimeLeft: null,
    /** @type {ck.Text} */
    _txtTimeLeft: null,
    /** @type {ccui.ImageView} */
    _imgBgrTips: null,
    /** @type {ccui.ImageView} */
    _imgBgrDup: null,
    /** @type {ck.Text} */
    _txtTips: null,


    /**
     * _ccs.BuildUpPayEventIcon constructor
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
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(false);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(100, 100));

        ///// # _glow
        this._glow = new Glow();
        this._glow.setName("_glow");
        this._root.addChild(this._glow);
        this._glow.setCascadeOpacityEnabled(true);
        this._glow.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._glow, 0.5, 0.41);
        this._glow.setScale(0.15, 0.15);
        let _glowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._glow);
        _glowLayoutComponent.setPositionPercentXEnabled(true);
        _glowLayoutComponent.setPositionPercentX(0.5);
        _glowLayoutComponent.setPositionPercentYEnabled(true);
        _glowLayoutComponent.setPositionPercentY(0.41);

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._root.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.5);
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(0.5);
        this._imgBackground.loadTexture("icons/color/events/IconEventBackground.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setContentSize(cc.size(100, 100));
        this._imgBackground.setTouchEnabled(false);

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._root.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.58);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.58);
        this._imgIcon.loadTexture("icons/color/events/BuildUpPay.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(100, 100));
        this._imgIcon.setTouchEnabled(false);

        ///// # _imgRedDot
        this._imgRedDot = new ccui.ImageView();
        this._imgRedDot.setName("_imgRedDot");
        this._root.addChild(this._imgRedDot);
        this._imgRedDot.setCascadeOpacityEnabled(true);
        this._imgRedDot.setCascadeColorEnabled(true);
        this._imgRedDot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRedDot, 0.85, 0.75);
        let _imgRedDotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRedDot);
        _imgRedDotLayoutComponent.setPositionPercentXEnabled(true);
        _imgRedDotLayoutComponent.setPositionPercentX(0.85);
        _imgRedDotLayoutComponent.setPositionPercentYEnabled(true);
        _imgRedDotLayoutComponent.setPositionPercentY(0.75);
        this._imgRedDot.loadTexture("basics/other/RedDot.png", 1);
        this._imgRedDot.setUnifySizeEnabled(false);
        this._imgRedDot.ignoreContentAdaptWithSize(false);
        this._imgRedDot.setContentSize(cc.size(31, 31));
        this._imgRedDot.setTouchEnabled(false);

        ///// # _txtNumRedDot
        this._txtNumRedDot = new ck.Text();
        this._txtNumRedDot.setName("_txtNumRedDot");
        this._imgRedDot.addChild(this._txtNumRedDot);
        this._txtNumRedDot.setCascadeOpacityEnabled(true);
        this._txtNumRedDot.setCascadeColorEnabled(true);
        this._txtNumRedDot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNumRedDot, 0.5123, 0.5397);
        let _txtNumRedDotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNumRedDot);
        _txtNumRedDotLayoutComponent.setPositionPercentXEnabled(true);
        _txtNumRedDotLayoutComponent.setPositionPercentX(0.5123);
        _txtNumRedDotLayoutComponent.setPositionPercentYEnabled(true);
        _txtNumRedDotLayoutComponent.setPositionPercentY(0.5397);
        this._txtNumRedDot.setTouchEnabled(false);
        this._txtNumRedDot.setUnifySizeEnabled(false);
        this._txtNumRedDot.ignoreContentAdaptWithSize(false);
        this._txtNumRedDot.setContentSize(cc.size(26, 18));
        this._txtNumRedDot.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtNumRedDot.setDefaultFontSize(15);
        this._txtNumRedDot.setString("10");
        this._txtNumRedDot.setTextHorizontalAlignment(1);
        this._txtNumRedDot.setTextVerticalAlignment(1);
        this._txtNumRedDot.enableOutline(cc.color(128, 0, 0, 255), 1);

        ///// # _imgTimeLeft
        this._imgTimeLeft = new ccui.ImageView();
        this._imgTimeLeft.setName("_imgTimeLeft");
        this._root.addChild(this._imgTimeLeft);
        this._imgTimeLeft.setCascadeOpacityEnabled(true);
        this._imgTimeLeft.setCascadeColorEnabled(true);
        this._imgTimeLeft.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTimeLeft, 0.5, 0.5);
        let _imgTimeLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTimeLeft);
        _imgTimeLeftLayoutComponent.setPositionPercentXEnabled(true);
        _imgTimeLeftLayoutComponent.setPositionPercentX(0.5);
        _imgTimeLeftLayoutComponent.setPositionPercentYEnabled(true);
        _imgTimeLeftLayoutComponent.setPositionPercentY(0.5);
        _imgTimeLeftLayoutComponent.setPercentWidthEnabled(true);
        _imgTimeLeftLayoutComponent.setPercentWidth(1);
        _imgTimeLeftLayoutComponent.setPercentHeightEnabled(true);
        _imgTimeLeftLayoutComponent.setPercentHeight(1);
        this._imgTimeLeft.loadTexture("icons/color/events/IconEventTimerBackground.png", 1);
        this._imgTimeLeft.setUnifySizeEnabled(false);
        this._imgTimeLeft.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgTimeLeft, 1, 1);
        this._imgTimeLeft.setTouchEnabled(false);

        ///// # _txtTimeLeft
        this._txtTimeLeft = new ck.Text();
        this._txtTimeLeft.setName("_txtTimeLeft");
        this._root.addChild(this._txtTimeLeft);
        this._txtTimeLeft.setCascadeOpacityEnabled(true);
        this._txtTimeLeft.setCascadeColorEnabled(true);
        this._txtTimeLeft.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTimeLeft, 0.5, 0.155);
        let _txtTimeLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTimeLeft);
        _txtTimeLeftLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentX(0.5);
        _txtTimeLeftLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentY(0.155);
        this._txtTimeLeft.setTouchEnabled(false);
        this._txtTimeLeft.ignoreContentAdaptWithSize(true);
        this._txtTimeLeft.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtTimeLeft.setDefaultFontSize(17);
        this._txtTimeLeft.setTextHorizontalAlignment(1);
        this._txtTimeLeft.setTextVerticalAlignment(1);
        this._txtTimeLeft.enableOutline(cc.color(26, 26, 26, 255), 2);

        ///// # _imgBgrTips
        this._imgBgrTips = new ccui.ImageView();
        this._imgBgrTips.setName("_imgBgrTips");
        this._root.addChild(this._imgBgrTips);
        this._imgBgrTips.setCascadeOpacityEnabled(true);
        this._imgBgrTips.setCascadeColorEnabled(true);
        this._imgBgrTips.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgBgrTips, 0.5, 0.85);
        this._imgBgrTips.setRotationY(-0.0022);
        let _imgBgrTipsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrTips);
        _imgBgrTipsLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrTipsLayoutComponent.setPositionPercentX(0.5);
        _imgBgrTipsLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrTipsLayoutComponent.setPositionPercentY(0.85);
        this._imgBgrTips.loadTexture("basics/bars/Bar_03.png", 1);
        this._imgBgrTips.setUnifySizeEnabled(false);
        this._imgBgrTips.ignoreContentAdaptWithSize(false);
        this._imgBgrTips.setScale9Enabled(true);
        this._imgBgrTips.setCapInsets(cc.rect(39, 7, 43, 9));
        this._imgBgrTips.setContentSize(cc.size(125, 65));
        this._imgBgrTips.setTouchEnabled(false);

        ///// # _imgBgrDup
        this._imgBgrDup = new ccui.ImageView();
        this._imgBgrDup.setName("_imgBgrDup");
        this._imgBgrTips.addChild(this._imgBgrDup);
        this._imgBgrDup.setCascadeOpacityEnabled(true);
        this._imgBgrDup.setCascadeColorEnabled(true);
        this._imgBgrDup.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgrDup, 0.5, 0.5);
        this._imgBgrDup.setRotationY(-0.0022);
        let _imgBgrDupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrDup);
        _imgBgrDupLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrDupLayoutComponent.setPositionPercentX(0.5);
        _imgBgrDupLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrDupLayoutComponent.setPositionPercentY(0.5);
        _imgBgrDupLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrDupLayoutComponent.setPercentWidth(1);
        _imgBgrDupLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrDupLayoutComponent.setPercentHeight(1);
        this._imgBgrDup.loadTexture("basics/bars/Bar_03.png", 1);
        this._imgBgrDup.setUnifySizeEnabled(false);
        this._imgBgrDup.ignoreContentAdaptWithSize(false);
        this._imgBgrDup.setScale9Enabled(true);
        this._imgBgrDup.setCapInsets(cc.rect(39, 7, 43, 9));
        ck.UIUtils.setSizePercent(this._imgBgrDup, 1, 1);
        this._imgBgrDup.setTouchEnabled(false);

        ///// # _txtTips
        this._txtTips = new ck.Text();
        this._txtTips.setName("_txtTips");
        this._imgBgrTips.addChild(this._txtTips);
        this._txtTips.setCascadeOpacityEnabled(true);
        this._txtTips.setCascadeColorEnabled(true);
        this._txtTips.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTips, 0.5, 0.5);
        this._txtTips.setRotationY(-0.0009);
        this._txtTips.setTextColor(cc.color(255, 165, 0, 255));
        let _txtTipsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTips);
        _txtTipsLayoutComponent.setPositionPercentXEnabled(true);
        _txtTipsLayoutComponent.setPositionPercentX(0.5);
        _txtTipsLayoutComponent.setPositionPercentYEnabled(true);
        _txtTipsLayoutComponent.setPositionPercentY(0.5);
        _txtTipsLayoutComponent.setPercentWidthEnabled(true);
        _txtTipsLayoutComponent.setPercentWidth(1);
        _txtTipsLayoutComponent.setPercentHeightEnabled(true);
        _txtTipsLayoutComponent.setPercentHeight(1);
        this._txtTips.setTouchEnabled(false);
        this._txtTips.setUnifySizeEnabled(false);
        this._txtTips.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtTips, 1, 1);
        this._txtTips.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTips.setDefaultFontSize(20);
        this._txtTips.setString(gm.localize.getText("TXT_PISTI_MASTER"));
        this._txtTips.setTextHorizontalAlignment(1);
        this._txtTips.setTextVerticalAlignment(1);

    },



});

/**
 * Create BuildUpPayEventIcon
 * @returns {_ccs.BuildUpPayEventIcon}
 */
_ccs.BuildUpPayEventIcon.create = function () {
    return new _ccs.BuildUpPayEventIcon();
};
