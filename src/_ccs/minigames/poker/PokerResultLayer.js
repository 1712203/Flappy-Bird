/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PokerResultLayer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.PokerResultLayer = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _layoutContainer: null,
    /** @type {ccui.Layout} */
    _layoutTouch: null,
    /** @type {ccui.Layout} */
    _layoutWin: null,
    /** @type {ccui.ImageView} */
    _imgLight1: null,
    /** @type {ccui.ImageView} */
    _imgLight2: null,
    /** @type {ccui.ImageView} */
    _imgFrameWin: null,
    /** @type {ck.Text} */
    _txtPrize: null,
    /** @type {cc.Node} */
    _nodeWinEmo: null,
    /** @type {ccui.Layout} */
    _layoutWinEmo: null,
    /** @type {ccui.ImageView} */
    _imgWinEmo1: null,
    /** @type {ccui.ImageView} */
    _imgWinEmo2: null,
    /** @type {ccui.Button} */
    _btnCollect: null,
    /** @type {ck.Text} */
    _txtCollect: null,
    /** @type {ccui.Layout} */
    _layoutLose: null,
    /** @type {ccui.ImageView} */
    _imgFrameLose: null,
    /** @type {cc.Node} */
    _nodeLoseEmo: null,
    /** @type {ccui.Layout} */
    _layoutLoseEmo: null,
    /** @type {ccui.ImageView} */
    _imgLoseEmo1: null,
    /** @type {ccui.ImageView} */
    _imgLoseEmo2: null,
    /** @type {ck.Text} */
    _txtFailed: null,
    /** @type {ck.Text} */
    _txtTapToClose: null,


    /**
     * _ccs.PokerResultLayer constructor
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

        ///// # _layoutContainer
        this._layoutContainer = new ccui.Layout();
        this._layoutContainer.setName("_layoutContainer");
        this.addChild(this._layoutContainer);
        this._layoutContainer.setCascadeOpacityEnabled(true);
        this._layoutContainer.setCascadeColorEnabled(true);
        this._layoutContainer.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutContainer, 0.5, 0.5);
        let _layoutContainerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutContainer);
        _layoutContainerLayoutComponent.setPositionPercentXEnabled(true);
        _layoutContainerLayoutComponent.setPositionPercentX(0.5);
        _layoutContainerLayoutComponent.setPositionPercentYEnabled(true);
        _layoutContainerLayoutComponent.setPositionPercentY(0.5);
        _layoutContainerLayoutComponent.setPercentWidthEnabled(true);
        _layoutContainerLayoutComponent.setPercentWidth(1);
        _layoutContainerLayoutComponent.setPercentHeightEnabled(true);
        _layoutContainerLayoutComponent.setPercentHeight(1);
        this._layoutContainer.setTouchEnabled(true);
        this._layoutContainer.setUnifySizeEnabled(false);
        this._layoutContainer.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutContainer, 1, 1);

        ///// # _layoutTouch
        this._layoutTouch = new ccui.Layout();
        this._layoutTouch.setName("_layoutTouch");
        this._layoutContainer.addChild(this._layoutTouch);
        this._layoutTouch.setCascadeOpacityEnabled(true);
        this._layoutTouch.setCascadeColorEnabled(true);
        this._layoutTouch.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTouch, 0.5, 0.5);
        if (!PlatformUtils.hasNotch()) {
            let _layoutTouchLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTouch);
            _layoutTouchLayoutComponent.setPositionPercentXEnabled(true);
            _layoutTouchLayoutComponent.setPositionPercentX(0.5);
            _layoutTouchLayoutComponent.setPositionPercentYEnabled(true);
            _layoutTouchLayoutComponent.setPositionPercentY(0.5);
            _layoutTouchLayoutComponent.setPercentWidthEnabled(true);
            _layoutTouchLayoutComponent.setPercentWidth(1);
            _layoutTouchLayoutComponent.setPercentHeightEnabled(true);
            _layoutTouchLayoutComponent.setPercentHeight(1);
        }
        this._layoutTouch.setTouchEnabled(false);
        this._layoutTouch.setUnifySizeEnabled(false);
        this._layoutTouch.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutTouch, 1, 1);
        this._layoutTouch.setBackGroundColorType(1);
        this._layoutTouch.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutTouch.setBackGroundColorOpacity(153);
        UIUtils.initFullScreenBackground(this._layoutTouch);

        ///// # _layoutWin
        this._layoutWin = new ccui.Layout();
        this._layoutWin.setName("_layoutWin");
        this._layoutContainer.addChild(this._layoutWin);
        this._layoutWin.setCascadeOpacityEnabled(true);
        this._layoutWin.setCascadeColorEnabled(true);
        this._layoutWin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutWin, 0.5, 0.5);
        let _layoutWinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutWin);
        _layoutWinLayoutComponent.setPositionPercentXEnabled(true);
        _layoutWinLayoutComponent.setPositionPercentX(0.5);
        _layoutWinLayoutComponent.setPositionPercentYEnabled(true);
        _layoutWinLayoutComponent.setPositionPercentY(0.5);
        _layoutWinLayoutComponent.setPercentWidthEnabled(true);
        _layoutWinLayoutComponent.setPercentWidth(1);
        _layoutWinLayoutComponent.setPercentHeightEnabled(true);
        _layoutWinLayoutComponent.setPercentHeight(1);
        this._layoutWin.setTouchEnabled(false);
        this._layoutWin.setUnifySizeEnabled(false);
        this._layoutWin.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutWin, 1, 1);

        ///// # _imgLight1
        this._imgLight1 = new ccui.ImageView();
        this._imgLight1.setName("_imgLight1");
        this._layoutWin.addChild(this._imgLight1);
        this._imgLight1.setCascadeOpacityEnabled(true);
        this._imgLight1.setCascadeColorEnabled(true);
        this._imgLight1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLight1, 0.5, 0.55);
        let _imgLight1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLight1);
        _imgLight1LayoutComponent.setPositionPercentXEnabled(true);
        _imgLight1LayoutComponent.setPositionPercentX(0.5);
        _imgLight1LayoutComponent.setPositionPercentYEnabled(true);
        _imgLight1LayoutComponent.setPositionPercentY(0.55);
        this._imgLight1.loadTexture("basics/effects/RadialYellow.png", 1);
        this._imgLight1.setUnifySizeEnabled(false);
        this._imgLight1.ignoreContentAdaptWithSize(false);
        this._imgLight1.setContentSize(cc.size(430, 426));
        this._imgLight1.setTouchEnabled(false);

        ///// # _imgLight2
        this._imgLight2 = new ccui.ImageView();
        this._imgLight2.setName("_imgLight2");
        this._layoutWin.addChild(this._imgLight2);
        this._imgLight2.setCascadeOpacityEnabled(true);
        this._imgLight2.setCascadeColorEnabled(true);
        this._imgLight2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLight2, 0.5, 0.55);
        let _imgLight2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLight2);
        _imgLight2LayoutComponent.setPositionPercentXEnabled(true);
        _imgLight2LayoutComponent.setPositionPercentX(0.5);
        _imgLight2LayoutComponent.setPositionPercentYEnabled(true);
        _imgLight2LayoutComponent.setPositionPercentY(0.55);
        this._imgLight2.loadTexture("basics/effects/RadialYellow.png", 1);
        this._imgLight2.setUnifySizeEnabled(false);
        this._imgLight2.ignoreContentAdaptWithSize(false);
        this._imgLight2.setContentSize(cc.size(430, 426));
        this._imgLight2.setTouchEnabled(false);

        ///// # _imgFrameWin
        this._imgFrameWin = new ccui.ImageView();
        this._imgFrameWin.setName("_imgFrameWin");
        this._layoutWin.addChild(this._imgFrameWin);
        this._imgFrameWin.setCascadeOpacityEnabled(true);
        this._imgFrameWin.setCascadeColorEnabled(true);
        this._imgFrameWin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgFrameWin, 0.5, 0.55);
        let _imgFrameWinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFrameWin);
        _imgFrameWinLayoutComponent.setPositionPercentXEnabled(true);
        _imgFrameWinLayoutComponent.setPositionPercentX(0.5);
        _imgFrameWinLayoutComponent.setPositionPercentYEnabled(true);
        _imgFrameWinLayoutComponent.setPositionPercentY(0.55);
        _imgFrameWinLayoutComponent.setPercentWidthEnabled(true);
        _imgFrameWinLayoutComponent.setPercentWidth(1);
        this._imgFrameWin.loadTexture("game/popups/result/Background.png", 1);
        this._imgFrameWin.setUnifySizeEnabled(false);
        this._imgFrameWin.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._imgFrameWin, 1);
        this._imgFrameWin.setContentSize(cc.size(this._imgFrameWin.width, 662));
        this._imgFrameWin.setTouchEnabled(false);

        ///// # _txtPrize
        this._txtPrize = new ck.Text();
        this._txtPrize.setName("_txtPrize");
        this._imgFrameWin.addChild(this._txtPrize);
        this._txtPrize.setCascadeOpacityEnabled(true);
        this._txtPrize.setCascadeColorEnabled(true);
        this._txtPrize.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPrize, 0.5, 0.69);
        let _txtPrizeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPrize);
        _txtPrizeLayoutComponent.setPositionPercentXEnabled(true);
        _txtPrizeLayoutComponent.setPositionPercentX(0.5);
        _txtPrizeLayoutComponent.setPositionPercentYEnabled(true);
        _txtPrizeLayoutComponent.setPositionPercentY(0.69);
        this._txtPrize.setTouchEnabled(false);
        this._txtPrize.setUnifySizeEnabled(false);
        this._txtPrize.ignoreContentAdaptWithSize(false);
        this._txtPrize.setContentSize(cc.size(233, 52));
        this._txtPrize.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtPrize.setDefaultFontSize(45);
        this._txtPrize.setTextHorizontalAlignment(1);
        this._txtPrize.setTextVerticalAlignment(1);
        this._txtPrize.enableOutline(cc.color(0, 111, 91, 255), 1);
        this._txtPrize.enableShadow(cc.color(0, 111, 91, 255), cc.size(0, -3), 0);

        ///// # _nodeWinEmo
        this._nodeWinEmo = new cc.Node();
        this._nodeWinEmo.setName("_nodeWinEmo");
        this._layoutWin.addChild(this._nodeWinEmo);
        this._nodeWinEmo.setCascadeOpacityEnabled(true);
        this._nodeWinEmo.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeWinEmo, 0.5, 0.53);
        let _nodeWinEmoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeWinEmo);
        _nodeWinEmoLayoutComponent.setPositionPercentXEnabled(true);
        _nodeWinEmoLayoutComponent.setPositionPercentX(0.5);
        _nodeWinEmoLayoutComponent.setPositionPercentYEnabled(true);
        _nodeWinEmoLayoutComponent.setPositionPercentY(0.53);

        ///// # _layoutWinEmo
        this._layoutWinEmo = new ccui.Layout();
        this._layoutWinEmo.setName("_layoutWinEmo");
        this._nodeWinEmo.addChild(this._layoutWinEmo);
        this._layoutWinEmo.setCascadeOpacityEnabled(true);
        this._layoutWinEmo.setCascadeColorEnabled(true);
        this._layoutWinEmo.setAnchorPoint(cc.p(0.5, 0.5));
        this._layoutWinEmo.setPosition(0, 1.8);
        let _layoutWinEmoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutWinEmo);
        _layoutWinEmoLayoutComponent.setPositionPercentXEnabled(true);
        _layoutWinEmoLayoutComponent.setPositionPercentX(0);
        this._layoutWinEmo.setTouchEnabled(false);
        this._layoutWinEmo.setUnifySizeEnabled(false);
        this._layoutWinEmo.ignoreContentAdaptWithSize(false);
        this._layoutWinEmo.setContentSize(cc.size(640, 200));

        ///// # _imgWinEmo1
        this._imgWinEmo1 = new ccui.ImageView();
        this._imgWinEmo1.setName("_imgWinEmo1");
        this._layoutWinEmo.addChild(this._imgWinEmo1);
        this._imgWinEmo1.setCascadeOpacityEnabled(true);
        this._imgWinEmo1.setCascadeColorEnabled(true);
        this._imgWinEmo1.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgWinEmo1, 0.15, 0);
        this._imgWinEmo1.setScale(0.9, 0.9);
        let _imgWinEmo1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgWinEmo1);
        _imgWinEmo1LayoutComponent.setPositionPercentXEnabled(true);
        _imgWinEmo1LayoutComponent.setPositionPercentX(0.15);
        _imgWinEmo1LayoutComponent.setPositionPercentYEnabled(true);
        _imgWinEmo1LayoutComponent.setPositionPercentY(0);
        this._imgWinEmo1.loadTexture("ui/PokerWinEmo.png", 1);
        this._imgWinEmo1.setUnifySizeEnabled(false);
        this._imgWinEmo1.ignoreContentAdaptWithSize(false);
        this._imgWinEmo1.setContentSize(cc.size(178, 283));
        this._imgWinEmo1.setTouchEnabled(false);

        ///// # _imgWinEmo2
        this._imgWinEmo2 = new ccui.ImageView();
        this._imgWinEmo2.setName("_imgWinEmo2");
        this._layoutWinEmo.addChild(this._imgWinEmo2);
        this._imgWinEmo2.setCascadeOpacityEnabled(true);
        this._imgWinEmo2.setCascadeColorEnabled(true);
        this._imgWinEmo2.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgWinEmo2, 0.85, 0);
        this._imgWinEmo2.setScale(0.9, 0.9);
        this._imgWinEmo2.setFlippedX(true);
        let _imgWinEmo2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgWinEmo2);
        _imgWinEmo2LayoutComponent.setPositionPercentXEnabled(true);
        _imgWinEmo2LayoutComponent.setPositionPercentX(0.85);
        _imgWinEmo2LayoutComponent.setPositionPercentYEnabled(true);
        _imgWinEmo2LayoutComponent.setPositionPercentY(0);
        this._imgWinEmo2.loadTexture("ui/PokerWinEmo.png", 1);
        this._imgWinEmo2.setUnifySizeEnabled(false);
        this._imgWinEmo2.ignoreContentAdaptWithSize(false);
        this._imgWinEmo2.setContentSize(cc.size(178, 283));
        this._imgWinEmo2.setTouchEnabled(false);
        this._imgWinEmo2.setFlippedX(true);

        ///// # _btnCollect
        this._btnCollect = new ccui.Button();
        this._btnCollect.setName("_btnCollect");
        this._layoutWin.addChild(this._btnCollect);
        this._btnCollect.setCascadeOpacityEnabled(true);
        this._btnCollect.setCascadeColorEnabled(true);
        this._btnCollect.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnCollect, 0.4906, 0.3573);
        let _btnCollectLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnCollect);
        _btnCollectLayoutComponent.setPositionPercentXEnabled(true);
        _btnCollectLayoutComponent.setPositionPercentX(0.4906);
        _btnCollectLayoutComponent.setPositionPercentYEnabled(true);
        _btnCollectLayoutComponent.setPositionPercentY(0.3573);
        this._btnCollect.loadTextureDisabled("buttons/rectangles/Green.png", 1);
        this._btnCollect.loadTexturePressed("buttons/rectangles/Green.png", 1);
        this._btnCollect.loadTextureNormal("buttons/rectangles/Green.png", 1);
        this._btnCollect.setUnifySizeEnabled(false);
        this._btnCollect.ignoreContentAdaptWithSize(false);
        this._btnCollect.setScale9Enabled(true);
        this._btnCollect.setCapInsets(cc.rect(15, 11, 176, 59));
        this._btnCollect.setContentSize(cc.size(206, 81));
        this._btnCollect.setTouchEnabled(true);

        ///// # _txtCollect
        this._txtCollect = new ck.Text();
        this._txtCollect.setName("_txtCollect");
        this._btnCollect.addChild(this._txtCollect);
        this._txtCollect.setCascadeOpacityEnabled(true);
        this._txtCollect.setCascadeColorEnabled(true);
        this._txtCollect.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCollect, 0.5, 0.55);
        let _txtCollectLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCollect);
        _txtCollectLayoutComponent.setPositionPercentXEnabled(true);
        _txtCollectLayoutComponent.setPositionPercentX(0.5);
        _txtCollectLayoutComponent.setPositionPercentYEnabled(true);
        _txtCollectLayoutComponent.setPositionPercentY(0.55);
        this._txtCollect.setTouchEnabled(false);
        this._txtCollect.ignoreContentAdaptWithSize(true);
        this._txtCollect.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCollect.setDefaultFontSize(50);
        this._txtCollect.setString(gm.localize.getText("TXT_COLLECT"));
        this._txtCollect.setTextHorizontalAlignment(0);
        this._txtCollect.setTextVerticalAlignment(0);
        this._txtCollect.enableOutline(cc.color(0, 128, 0, 255), 2);
        this._txtCollect.enableShadow(cc.color(0, 128, 0, 255), cc.size(1, -1), 0);

        ///// # _layoutLose
        this._layoutLose = new ccui.Layout();
        this._layoutLose.setName("_layoutLose");
        this._layoutContainer.addChild(this._layoutLose);
        this._layoutLose.setCascadeOpacityEnabled(true);
        this._layoutLose.setCascadeColorEnabled(true);
        this._layoutLose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutLose, 0.5, 0.5);
        let _layoutLoseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLose);
        _layoutLoseLayoutComponent.setPositionPercentXEnabled(true);
        _layoutLoseLayoutComponent.setPositionPercentX(0.5);
        _layoutLoseLayoutComponent.setPositionPercentYEnabled(true);
        _layoutLoseLayoutComponent.setPositionPercentY(0.5);
        _layoutLoseLayoutComponent.setPercentWidthEnabled(true);
        _layoutLoseLayoutComponent.setPercentWidth(1);
        _layoutLoseLayoutComponent.setPercentHeightEnabled(true);
        _layoutLoseLayoutComponent.setPercentHeight(1);
        this._layoutLose.setTouchEnabled(false);
        this._layoutLose.setUnifySizeEnabled(false);
        this._layoutLose.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutLose, 1, 1);

        ///// # _imgFrameLose
        this._imgFrameLose = new ccui.ImageView();
        this._imgFrameLose.setName("_imgFrameLose");
        this._layoutLose.addChild(this._imgFrameLose);
        this._imgFrameLose.setCascadeOpacityEnabled(true);
        this._imgFrameLose.setCascadeColorEnabled(true);
        this._imgFrameLose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgFrameLose, 0.5, 0.53);
        let _imgFrameLoseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFrameLose);
        _imgFrameLoseLayoutComponent.setPositionPercentXEnabled(true);
        _imgFrameLoseLayoutComponent.setPositionPercentX(0.5);
        _imgFrameLoseLayoutComponent.setPositionPercentYEnabled(true);
        _imgFrameLoseLayoutComponent.setPositionPercentY(0.53);
        this._imgFrameLose.loadTexture("game/popups/result/Background2.png", 1);
        this._imgFrameLose.setUnifySizeEnabled(false);
        this._imgFrameLose.ignoreContentAdaptWithSize(false);
        this._imgFrameLose.setContentSize(cc.size(640, 248));
        this._imgFrameLose.setTouchEnabled(false);

        ///// # _nodeLoseEmo
        this._nodeLoseEmo = new cc.Node();
        this._nodeLoseEmo.setName("_nodeLoseEmo");
        this._layoutLose.addChild(this._nodeLoseEmo);
        this._nodeLoseEmo.setCascadeOpacityEnabled(true);
        this._nodeLoseEmo.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeLoseEmo, 0.5, 0.53);
        let _nodeLoseEmoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeLoseEmo);
        _nodeLoseEmoLayoutComponent.setPositionPercentXEnabled(true);
        _nodeLoseEmoLayoutComponent.setPositionPercentX(0.5);
        _nodeLoseEmoLayoutComponent.setPositionPercentYEnabled(true);
        _nodeLoseEmoLayoutComponent.setPositionPercentY(0.53);

        ///// # _layoutLoseEmo
        this._layoutLoseEmo = new ccui.Layout();
        this._layoutLoseEmo.setName("_layoutLoseEmo");
        this._nodeLoseEmo.addChild(this._layoutLoseEmo);
        this._layoutLoseEmo.setCascadeOpacityEnabled(true);
        this._layoutLoseEmo.setCascadeColorEnabled(true);
        this._layoutLoseEmo.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutLoseEmoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLoseEmo);
        this._layoutLoseEmo.setTouchEnabled(false);
        this._layoutLoseEmo.setUnifySizeEnabled(false);
        this._layoutLoseEmo.ignoreContentAdaptWithSize(false);
        this._layoutLoseEmo.setContentSize(cc.size(640, 200));

        ///// # _imgLoseEmo1
        this._imgLoseEmo1 = new ccui.ImageView();
        this._imgLoseEmo1.setName("_imgLoseEmo1");
        this._layoutLoseEmo.addChild(this._imgLoseEmo1);
        this._imgLoseEmo1.setCascadeOpacityEnabled(true);
        this._imgLoseEmo1.setCascadeColorEnabled(true);
        this._imgLoseEmo1.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgLoseEmo1, 0.15, 0);
        this._imgLoseEmo1.setScale(0.9, 0.9);
        this._imgLoseEmo1.setFlippedX(true);
        let _imgLoseEmo1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoseEmo1);
        _imgLoseEmo1LayoutComponent.setPositionPercentXEnabled(true);
        _imgLoseEmo1LayoutComponent.setPositionPercentX(0.15);
        _imgLoseEmo1LayoutComponent.setPositionPercentYEnabled(true);
        _imgLoseEmo1LayoutComponent.setPositionPercentY(0);
        this._imgLoseEmo1.loadTexture("ui/PokerLoseEmo.png", 1);
        this._imgLoseEmo1.setUnifySizeEnabled(false);
        this._imgLoseEmo1.ignoreContentAdaptWithSize(false);
        this._imgLoseEmo1.setContentSize(cc.size(202, 299));
        this._imgLoseEmo1.setTouchEnabled(false);
        this._imgLoseEmo1.setFlippedX(true);

        ///// # _imgLoseEmo2
        this._imgLoseEmo2 = new ccui.ImageView();
        this._imgLoseEmo2.setName("_imgLoseEmo2");
        this._layoutLoseEmo.addChild(this._imgLoseEmo2);
        this._imgLoseEmo2.setCascadeOpacityEnabled(true);
        this._imgLoseEmo2.setCascadeColorEnabled(true);
        this._imgLoseEmo2.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgLoseEmo2, 0.85, 0);
        this._imgLoseEmo2.setScale(0.9, 0.9);
        let _imgLoseEmo2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoseEmo2);
        _imgLoseEmo2LayoutComponent.setPositionPercentXEnabled(true);
        _imgLoseEmo2LayoutComponent.setPositionPercentX(0.85);
        _imgLoseEmo2LayoutComponent.setPositionPercentYEnabled(true);
        _imgLoseEmo2LayoutComponent.setPositionPercentY(0);
        this._imgLoseEmo2.loadTexture("ui/PokerLoseEmo.png", 1);
        this._imgLoseEmo2.setUnifySizeEnabled(false);
        this._imgLoseEmo2.ignoreContentAdaptWithSize(false);
        this._imgLoseEmo2.setContentSize(cc.size(202, 299));
        this._imgLoseEmo2.setTouchEnabled(false);

        ///// # _txtFailed
        this._txtFailed = new ck.Text();
        this._txtFailed.setName("_txtFailed");
        this._layoutLose.addChild(this._txtFailed);
        this._txtFailed.setCascadeOpacityEnabled(true);
        this._txtFailed.setCascadeColorEnabled(true);
        this._txtFailed.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtFailed, 0.5, 0.65);
        let _txtFailedLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtFailed);
        _txtFailedLayoutComponent.setPositionPercentXEnabled(true);
        _txtFailedLayoutComponent.setPositionPercentX(0.5);
        _txtFailedLayoutComponent.setPositionPercentYEnabled(true);
        _txtFailedLayoutComponent.setPositionPercentY(0.65);
        this._txtFailed.setTouchEnabled(false);
        this._txtFailed.ignoreContentAdaptWithSize(true);
        this._txtFailed.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtFailed.setDefaultFontSize(60);
        this._txtFailed.setString(gm.localize.getText("TXT_LOSE"));
        this._txtFailed.setTextHorizontalAlignment(0);
        this._txtFailed.setTextVerticalAlignment(0);
        this._txtFailed.enableOutline(cc.color(86, 86, 86, 255), 1);
        this._txtFailed.enableShadow(cc.color(47, 47, 47, 255), cc.size(0, -3), 0);

        ///// # _txtTapToClose
        this._txtTapToClose = new ck.Text();
        this._txtTapToClose.setName("_txtTapToClose");
        this._layoutLose.addChild(this._txtTapToClose);
        this._txtTapToClose.setCascadeOpacityEnabled(true);
        this._txtTapToClose.setCascadeColorEnabled(true);
        this._txtTapToClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTapToClose, 0.5, 0.05);
        let _txtTapToCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTapToClose);
        _txtTapToCloseLayoutComponent.setPositionPercentXEnabled(true);
        _txtTapToCloseLayoutComponent.setPositionPercentX(0.5);
        _txtTapToCloseLayoutComponent.setPositionPercentYEnabled(true);
        _txtTapToCloseLayoutComponent.setPositionPercentY(0.05);
        this._txtTapToClose.setTouchEnabled(false);
        this._txtTapToClose.ignoreContentAdaptWithSize(true);
        this._txtTapToClose.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTapToClose.setDefaultFontSize(30);
        this._txtTapToClose.setString(gm.localize.getText("TXT_TAP_TO_CLOSE"));
        this._txtTapToClose.setTextHorizontalAlignment(0);
        this._txtTapToClose.setTextVerticalAlignment(0);
        this._txtTapToClose.enableShadow(cc.color(47, 47, 47, 255), cc.size(0, -3), 0);

    },


    playCCSAnimAnimWin: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimAnimWin();
    
        let _layoutWinEmoAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(20 / (30 * speed), 0, 12),
                    cc.moveTo(20 / (30 * speed), 0, 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._layoutWinEmo.setPosition(0, 0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _layoutWinEmoAction = _layoutWinEmoAction.repeatForever();
        } else _layoutWinEmoAction = cc.sequence(
            cc.delayTime(delay),
            _layoutWinEmoAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._layoutWinEmo.runAction(_layoutWinEmoAction);
    
        let _layoutLoseEmoAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.delayTime(40 / (30 * speed)),
                    cc.moveTo(0 / (30 * speed), 0, 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._layoutLoseEmo.setPosition(0, 0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _layoutLoseEmoAction = _layoutLoseEmoAction.repeatForever();
        } else _layoutLoseEmoAction = cc.sequence(
            cc.delayTime(delay),
            _layoutLoseEmoAction.repeat(repeat)
        )
        
        this._layoutLoseEmo.runAction(_layoutLoseEmoAction);
    
        let _txtTapToCloseAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.delayTime(40 / (30 * speed)),
                    cc.fadeTo(0 / (30 * speed), 255)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._txtTapToClose.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _txtTapToCloseAction = _txtTapToCloseAction.repeatForever();
        } else _txtTapToCloseAction = cc.sequence(
            cc.delayTime(delay),
            _txtTapToCloseAction.repeat(repeat)
        )
        
        this._txtTapToClose.runAction(_txtTapToCloseAction);
    },

    resetCCSAnimAnimWin: function () {
        this._layoutWinEmo.stopAllActions();
        this._layoutWinEmo.setPosition(0, 0);
    
        this._layoutLoseEmo.stopAllActions();
        this._layoutLoseEmo.setPosition(0, 0);
    
        this._txtTapToClose.stopAllActions();
        this._txtTapToClose.setOpacity(255);
    },

    playCCSAnimAnimLose: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimAnimLose();
    
        let _layoutWinEmoAction = cc.sequence(
            cc.spawn(
                cc.delayTime(60 / (30 * speed))
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._layoutWinEmo.setPosition(0, 0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _layoutWinEmoAction = _layoutWinEmoAction.repeatForever();
        } else _layoutWinEmoAction = cc.sequence(
            cc.delayTime(delay),
            _layoutWinEmoAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._layoutWinEmo.runAction(_layoutWinEmoAction);
    
        let _layoutLoseEmoAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(30 / (30 * speed), 0, 8),
                    cc.moveTo(30 / (30 * speed), 0, 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._layoutLoseEmo.setPosition(0, 0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _layoutLoseEmoAction = _layoutLoseEmoAction.repeatForever();
        } else _layoutLoseEmoAction = cc.sequence(
            cc.delayTime(delay),
            _layoutLoseEmoAction.repeat(repeat)
        )
        
        this._layoutLoseEmo.runAction(_layoutLoseEmoAction);
    
        let _txtTapToCloseAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(15 / (30 * speed), 127),
                    cc.fadeTo(15 / (30 * speed), 255),
                    cc.fadeTo(15 / (30 * speed), 127),
                    cc.fadeTo(15 / (30 * speed), 255)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._txtTapToClose.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _txtTapToCloseAction = _txtTapToCloseAction.repeatForever();
        } else _txtTapToCloseAction = cc.sequence(
            cc.delayTime(delay),
            _txtTapToCloseAction.repeat(repeat)
        )
        
        this._txtTapToClose.runAction(_txtTapToCloseAction);
    },

    resetCCSAnimAnimLose: function () {
        this._layoutWinEmo.stopAllActions();
        this._layoutWinEmo.setPosition(0, 0);
    
        this._layoutLoseEmo.stopAllActions();
        this._layoutLoseEmo.setPosition(0, 0);
    
        this._txtTapToClose.stopAllActions();
        this._txtTapToClose.setOpacity(255);
    }
});

/**
 * Create PokerResultLayer
 * @returns {_ccs.PokerResultLayer}
 */
_ccs.PokerResultLayer.create = function () {
    return new _ccs.PokerResultLayer();
};
