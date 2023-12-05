/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.SlotThreeLayer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.SlotThreeLayer = cc.Layer.extend({

    /** @type {ccui.ImageView} */
    _imgRanking: null,
    /** @type {ccui.Button} */
    _btnExit: null,
    /** @type {ccui.ImageView} */
    _imgExit: null,
    /** @type {cc.Node} */
    _nodeX2Icon: null,
    /** @type {ccui.Button} */
    _btnSpin: null,
    /** @type {ccui.ImageView} */
    _imgBanner: null,
    /** @type {ck.Text} */
    _txtSpin: null,
    /** @type {ck.Text} */
    _txtHintSpint: null,
    /** @type {cc.Node} */
    _nodeTrophyProgress: null,


    /**
     * _ccs.SlotThreeLayer constructor
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

        ///// # _imgRanking
        this._imgRanking = new ccui.ImageView();
        this._imgRanking.setName("_imgRanking");
        this.addChild(this._imgRanking);
        this._imgRanking.setCascadeOpacityEnabled(true);
        this._imgRanking.setCascadeColorEnabled(true);
        this._imgRanking.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRanking, 0.1069, 0.9303);
        this._imgRanking.setVisible(false);
        let _imgRankingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRanking);
        _imgRankingLayoutComponent.setPositionPercentXEnabled(true);
        _imgRankingLayoutComponent.setPositionPercentX(0.1069);
        this._imgRanking.loadTexture("Default/ImageFile.png", 0);
        this._imgRanking.setUnifySizeEnabled(false);
        this._imgRanking.ignoreContentAdaptWithSize(false);
        this._imgRanking.setContentSize(cc.size(94, 94));
        this._imgRanking.setTouchEnabled(false);

        ///// # _btnExit
        this._btnExit = new ccui.Button();
        this._btnExit.setName("_btnExit");
        this.addChild(this._btnExit);
        this._btnExit.setCascadeOpacityEnabled(true);
        this._btnExit.setCascadeColorEnabled(true);
        this._btnExit.setAnchorPoint(cc.p(0.38, 0.66));
        ck.UIUtils.setPositionPercent(this._btnExit, 0.0882, 0.0592);
        let _btnExitLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnExit);
        this._btnExit.loadTextureDisabled("buttons/circles/Gray.png", 1);
        this._btnExit.loadTexturePressed("buttons/circles/Gray.png", 1);
        this._btnExit.loadTextureNormal("buttons/circles/Gray.png", 1);
        this._btnExit.setUnifySizeEnabled(false);
        this._btnExit.ignoreContentAdaptWithSize(false);
        this._btnExit.setScale9Enabled(true);
        this._btnExit.setCapInsets(cc.rect(15, 11, 50, 60));
        this._btnExit.setContentSize(cc.size(80, 82));
        this._btnExit.setTouchEnabled(true);

        ///// # _imgExit
        this._imgExit = new ccui.ImageView();
        this._imgExit.setName("_imgExit");
        this._btnExit.addChild(this._imgExit);
        this._imgExit.setCascadeOpacityEnabled(true);
        this._imgExit.setCascadeColorEnabled(true);
        this._imgExit.setAnchorPoint(cc.p(0.58, 0.55));
        ck.UIUtils.setPositionPercent(this._imgExit, 0.5, 0.5);
        let _imgExitLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExit);
        _imgExitLayoutComponent.setPositionPercentXEnabled(true);
        _imgExitLayoutComponent.setPositionPercentX(0.5);
        _imgExitLayoutComponent.setPositionPercentYEnabled(true);
        _imgExitLayoutComponent.setPositionPercentY(0.5);
        this._imgExit.loadTexture("icons/flat/Exit.png", 1);
        this._imgExit.setUnifySizeEnabled(false);
        this._imgExit.ignoreContentAdaptWithSize(false);
        this._imgExit.setContentSize(cc.size(43, 37));
        this._imgExit.setTouchEnabled(false);

        ///// # _nodeX2Icon
        this._nodeX2Icon = new cc.Node();
        this._nodeX2Icon.setName("_nodeX2Icon");
        this.addChild(this._nodeX2Icon);
        this._nodeX2Icon.setCascadeOpacityEnabled(true);
        this._nodeX2Icon.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeX2Icon, 0.1005, 0.1439);
        let _nodeX2IconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeX2Icon);
        _nodeX2IconLayoutComponent.setPositionPercentXEnabled(true);
        _nodeX2IconLayoutComponent.setPositionPercentX(0.1005);
        _nodeX2IconLayoutComponent.setPositionPercentYEnabled(true);
        _nodeX2IconLayoutComponent.setPositionPercentY(0.1439);

        ///// # _btnSpin
        this._btnSpin = new ccui.Button();
        this._btnSpin.setName("_btnSpin");
        this.addChild(this._btnSpin);
        this._btnSpin.setCascadeOpacityEnabled(true);
        this._btnSpin.setCascadeColorEnabled(true);
        this._btnSpin.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._btnSpin, 0.5, 0.0994);
        let _btnSpinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnSpin);
        _btnSpinLayoutComponent.setPositionPercentXEnabled(true);
        _btnSpinLayoutComponent.setPositionPercentX(0.5);
        _btnSpinLayoutComponent.setPositionPercentYEnabled(true);
        _btnSpinLayoutComponent.setPositionPercentY(0.0994);
        this._btnSpin.loadTextureDisabled("sprites/minigames/slot-three/slot3_spin_1.png", 0);
        this._btnSpin.loadTexturePressed("sprites/minigames/slot-three/slot3_spin_2.png", 0);
        this._btnSpin.loadTextureNormal("sprites/minigames/slot-three/slot3_spin_1.png", 0);
        this._btnSpin.setUnifySizeEnabled(false);
        this._btnSpin.ignoreContentAdaptWithSize(false);
        this._btnSpin.setScale9Enabled(true);
        this._btnSpin.setCapInsets(cc.rect(15, 11, 148, 93));
        this._btnSpin.setContentSize(cc.size(178, 115));
        this._btnSpin.setTouchEnabled(true);

        ///// # _imgBanner
        this._imgBanner = new ccui.ImageView();
        this._imgBanner.setName("_imgBanner");
        this._btnSpin.addChild(this._imgBanner);
        this._imgBanner.setCascadeOpacityEnabled(true);
        this._imgBanner.setCascadeColorEnabled(true);
        this._imgBanner.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBanner, 0.5, 0.2);
        let _imgBannerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBanner);
        _imgBannerLayoutComponent.setPositionPercentXEnabled(true);
        _imgBannerLayoutComponent.setPositionPercentX(0.5);
        _imgBannerLayoutComponent.setPositionPercentYEnabled(true);
        _imgBannerLayoutComponent.setPositionPercentY(0.2);
        this._imgBanner.loadTexture("sprites/minigames/slot-three/slot3_wood_spin.png", 0);
        this._imgBanner.setUnifySizeEnabled(false);
        this._imgBanner.ignoreContentAdaptWithSize(false);
        this._imgBanner.setContentSize(cc.size(220, 109));
        this._imgBanner.setTouchEnabled(false);

        ///// # _txtSpin
        this._txtSpin = new ck.Text();
        this._txtSpin.setName("_txtSpin");
        this._btnSpin.addChild(this._txtSpin);
        this._txtSpin.setCascadeOpacityEnabled(true);
        this._txtSpin.setCascadeColorEnabled(true);
        this._txtSpin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtSpin, 0.5, 0.7845);
        this._txtSpin.setTextColor(cc.color(0, 113, 64, 255));
        let _txtSpinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSpin);
        _txtSpinLayoutComponent.setPositionPercentXEnabled(true);
        _txtSpinLayoutComponent.setPositionPercentX(0.5);
        _txtSpinLayoutComponent.setPositionPercentYEnabled(true);
        _txtSpinLayoutComponent.setPositionPercentY(0.7845);
        this._txtSpin.setTouchEnabled(false);
        this._txtSpin.ignoreContentAdaptWithSize(true);
        this._txtSpin.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSpin.setDefaultFontSize(35);
        this._txtSpin.setTextHorizontalAlignment(1);
        this._txtSpin.setTextVerticalAlignment(1);

        ///// # _txtHintSpint
        this._txtHintSpint = new ck.Text();
        this._txtHintSpint.setName("_txtHintSpint");
        this._btnSpin.addChild(this._txtHintSpint);
        this._txtHintSpint.setCascadeOpacityEnabled(true);
        this._txtHintSpint.setCascadeColorEnabled(true);
        this._txtHintSpint.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._txtHintSpint, 0.5, 0.6154);
        this._txtHintSpint.setTextColor(cc.color(165, 253, 165, 255));
        let _txtHintSpintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHintSpint);
        _txtHintSpintLayoutComponent.setPositionPercentXEnabled(true);
        _txtHintSpintLayoutComponent.setPositionPercentX(0.5);
        _txtHintSpintLayoutComponent.setPositionPercentYEnabled(true);
        _txtHintSpintLayoutComponent.setPositionPercentY(0.6154);
        this._txtHintSpint.setTouchEnabled(false);
        this._txtHintSpint.setUnifySizeEnabled(false);
        this._txtHintSpint.ignoreContentAdaptWithSize(false);
        this._txtHintSpint.setContentSize(cc.size(185.66, 68.63));
        this._txtHintSpint.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHintSpint.setDefaultFontSize(16);
        this._txtHintSpint.setTextHorizontalAlignment(1);
        this._txtHintSpint.setTextVerticalAlignment(0);
        this._txtHintSpint.enableOutline(cc.color(15, 82, 45, 255), 1);

        ///// # _nodeTrophyProgress
        this._nodeTrophyProgress = new cc.Node();
        this._nodeTrophyProgress.setName("_nodeTrophyProgress");
        this.addChild(this._nodeTrophyProgress);
        this._nodeTrophyProgress.setCascadeOpacityEnabled(true);
        this._nodeTrophyProgress.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeTrophyProgress, 0.5, 0.07);
        let _nodeTrophyProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeTrophyProgress);
        _nodeTrophyProgressLayoutComponent.setPositionPercentXEnabled(true);
        _nodeTrophyProgressLayoutComponent.setPositionPercentX(0.5);
        _nodeTrophyProgressLayoutComponent.setPositionPercentYEnabled(true);
        _nodeTrophyProgressLayoutComponent.setPositionPercentY(0.07);

    },



});

/**
 * Create SlotThreeLayer
 * @returns {_ccs.SlotThreeLayer}
 */
_ccs.SlotThreeLayer.create = function () {
    return new _ccs.SlotThreeLayer();
};
