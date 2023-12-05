/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.CardCollectionGuide
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.CardCollectionGuide = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {cc.Node} */
    _step01: null,
    /** @type {ccui.Layout} */
    _layoutImgStep01: null,
    /** @type {ccui.ImageView} */
    _imgStep01Cards: null,
    /** @type {ccui.ImageView} */
    _imgStep01Pisti: null,
    /** @type {ccui.ImageView} */
    _imgStep01Winner: null,
    /** @type {ccui.ImageView} */
    _imgCallout01: null,
    /** @type {ck.Text} */
    _txtStep01: null,
    /** @type {cc.Node} */
    _step02: null,
    /** @type {ccui.Layout} */
    _layoutImgStep02: null,
    /** @type {ccui.Layout} */
    _layoutStep02Card01: null,
    /** @type {ccui.Layout} */
    _layoutCardAvatar01: null,
    /** @type {ccui.ImageView} */
    _imgCardAvatarBgr01: null,
    /** @type {ccui.ImageView} */
    _imgCardAvatar01: null,
    /** @type {ccui.ImageView} */
    _imgFrame01: null,
    /** @type {ccui.Layout} */
    _layoutStep02Card02: null,
    /** @type {ccui.Layout} */
    _layoutCardAvatar02: null,
    /** @type {ccui.ImageView} */
    _imgCardAvatarBgr02: null,
    /** @type {ccui.ImageView} */
    _imgCardAvatar02: null,
    /** @type {ccui.ImageView} */
    _imgFrame02: null,
    /** @type {ccui.ImageView} */
    _imgCallout02: null,
    /** @type {ck.Text} */
    _txtStep02: null,
    /** @type {cc.Node} */
    _step03: null,
    /** @type {ccui.Layout} */
    _layoutImgStep03: null,
    /** @type {ccui.ImageView} */
    _imgStep03Coin01: null,
    /** @type {ccui.ImageView} */
    _imgStep03Coin02: null,
    /** @type {ccui.ImageView} */
    _imgStep03Coin03: null,
    /** @type {ccui.ImageView} */
    _imgCallout03: null,
    /** @type {ck.Text} */
    _txtStep03: null,
    /** @type {ck.Text} */
    _txtTapToClose: null,


    /**
     * _ccs.CardCollectionGuide constructor
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
        ck.UIUtils.setPositionPercent(this._step01, 0.1508, 0.3792);
        let _step01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._step01);
        _step01LayoutComponent.setPositionPercentXEnabled(true);
        _step01LayoutComponent.setPositionPercentX(0.1508);

        ///// # _layoutImgStep01
        this._layoutImgStep01 = new ccui.Layout();
        this._layoutImgStep01.setName("_layoutImgStep01");
        this._step01.addChild(this._layoutImgStep01);
        this._layoutImgStep01.setCascadeOpacityEnabled(true);
        this._layoutImgStep01.setCascadeColorEnabled(true);
        this._layoutImgStep01.setAnchorPoint(cc.p(0.5, 0.5));
        this._layoutImgStep01.setPosition(31, 0);
        let _layoutImgStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutImgStep01);
        this._layoutImgStep01.setTouchEnabled(false);
        this._layoutImgStep01.setUnifySizeEnabled(false);
        this._layoutImgStep01.ignoreContentAdaptWithSize(false);
        this._layoutImgStep01.setContentSize(cc.size(227, 203));

        ///// # _imgStep01Cards
        this._imgStep01Cards = new ccui.ImageView();
        this._imgStep01Cards.setName("_imgStep01Cards");
        this._layoutImgStep01.addChild(this._imgStep01Cards);
        this._imgStep01Cards.setCascadeOpacityEnabled(true);
        this._imgStep01Cards.setCascadeColorEnabled(true);
        this._imgStep01Cards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStep01Cards, 0.25, 0.32);
        this._imgStep01Cards.setScale(0.5, 0.5);
        let _imgStep01CardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep01Cards);
        _imgStep01CardsLayoutComponent.setPositionPercentXEnabled(true);
        _imgStep01CardsLayoutComponent.setPositionPercentX(0.25);
        _imgStep01CardsLayoutComponent.setPositionPercentYEnabled(true);
        _imgStep01CardsLayoutComponent.setPositionPercentY(0.32);
        this._imgStep01Cards.loadTexture("ranking/Tutorial_01.png", 1);
        this._imgStep01Cards.setUnifySizeEnabled(false);
        this._imgStep01Cards.ignoreContentAdaptWithSize(false);
        this._imgStep01Cards.setContentSize(cc.size(227, 203));
        this._imgStep01Cards.setTouchEnabled(false);

        ///// # _imgStep01Pisti
        this._imgStep01Pisti = new ccui.ImageView();
        this._imgStep01Pisti.setName("_imgStep01Pisti");
        this._layoutImgStep01.addChild(this._imgStep01Pisti);
        this._imgStep01Pisti.setCascadeOpacityEnabled(true);
        this._imgStep01Pisti.setCascadeColorEnabled(true);
        this._imgStep01Pisti.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStep01Pisti, 0.92, 0.42);
        this._imgStep01Pisti.setScale(0.45, 0.45);
        let _imgStep01PistiLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep01Pisti);
        _imgStep01PistiLayoutComponent.setPositionPercentXEnabled(true);
        _imgStep01PistiLayoutComponent.setPositionPercentX(0.92);
        _imgStep01PistiLayoutComponent.setPositionPercentYEnabled(true);
        _imgStep01PistiLayoutComponent.setPositionPercentY(0.42);
        this._imgStep01Pisti.loadTexture("texts/game/Pisti.png", 1);
        this._imgStep01Pisti.setTouchEnabled(false);

        ///// # _imgStep01Winner
        this._imgStep01Winner = new ccui.ImageView();
        this._imgStep01Winner.setName("_imgStep01Winner");
        this._layoutImgStep01.addChild(this._imgStep01Winner);
        this._imgStep01Winner.setCascadeOpacityEnabled(true);
        this._imgStep01Winner.setCascadeColorEnabled(true);
        this._imgStep01Winner.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStep01Winner, 0.65, 0.02);
        this._imgStep01Winner.setScale(0.5, 0.5);
        let _imgStep01WinnerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep01Winner);
        _imgStep01WinnerLayoutComponent.setPositionPercentXEnabled(true);
        _imgStep01WinnerLayoutComponent.setPositionPercentX(0.65);
        _imgStep01WinnerLayoutComponent.setPositionPercentYEnabled(true);
        _imgStep01WinnerLayoutComponent.setPositionPercentY(0.02);
        this._imgStep01Winner.loadTexture("game/popups/result/WinHeader.png", 1);
        this._imgStep01Winner.setUnifySizeEnabled(false);
        this._imgStep01Winner.ignoreContentAdaptWithSize(false);
        this._imgStep01Winner.setContentSize(cc.size(323, 165));
        this._imgStep01Winner.setTouchEnabled(false);

        ///// # _imgCallout01
        this._imgCallout01 = new ccui.ImageView();
        this._imgCallout01.setName("_imgCallout01");
        this._step01.addChild(this._imgCallout01);
        this._imgCallout01.setCascadeOpacityEnabled(true);
        this._imgCallout01.setCascadeColorEnabled(true);
        this._imgCallout01.setAnchorPoint(cc.p(0.1239, 0));
        this._imgCallout01.setPosition(-13.4647, -106.1356);
        this._imgCallout01.setScale(1.2, 1.2);
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
        this._txtStep01.setPosition(87.5, -198);
        let _txtStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep01);
        this._txtStep01.setTouchEnabled(false);
        this._txtStep01.setUnifySizeEnabled(false);
        this._txtStep01.ignoreContentAdaptWithSize(false);
        this._txtStep01.setContentSize(cc.size(226.05, 101.56));
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
        ck.UIUtils.setPositionPercent(this._step02, 0.494, 0.6398);
        let _step02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._step02);
        _step02LayoutComponent.setPositionPercentXEnabled(true);
        _step02LayoutComponent.setPositionPercentX(0.494);

        ///// # _layoutImgStep02
        this._layoutImgStep02 = new ccui.Layout();
        this._layoutImgStep02.setName("_layoutImgStep02");
        this._step02.addChild(this._layoutImgStep02);
        this._layoutImgStep02.setCascadeOpacityEnabled(true);
        this._layoutImgStep02.setCascadeColorEnabled(true);
        this._layoutImgStep02.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutImgStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutImgStep02);
        this._layoutImgStep02.setTouchEnabled(false);
        this._layoutImgStep02.setUnifySizeEnabled(false);
        this._layoutImgStep02.ignoreContentAdaptWithSize(false);
        this._layoutImgStep02.setContentSize(cc.size(276, 222));

        ///// # _layoutStep02Card01
        this._layoutStep02Card01 = new ccui.Layout();
        this._layoutStep02Card01.setName("_layoutStep02Card01");
        this._layoutImgStep02.addChild(this._layoutStep02Card01);
        this._layoutStep02Card01.setCascadeOpacityEnabled(true);
        this._layoutStep02Card01.setCascadeColorEnabled(true);
        this._layoutStep02Card01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutStep02Card01, 0.2, 0.6547);
        this._layoutStep02Card01.setRotation(-7);
        let _layoutStep02Card01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutStep02Card01);
        _layoutStep02Card01LayoutComponent.setPositionPercentXEnabled(true);
        _layoutStep02Card01LayoutComponent.setPositionPercentX(0.2);
        _layoutStep02Card01LayoutComponent.setPositionPercentYEnabled(true);
        _layoutStep02Card01LayoutComponent.setPositionPercentY(0.6547);
        this._layoutStep02Card01.setTouchEnabled(false);
        this._layoutStep02Card01.setUnifySizeEnabled(false);
        this._layoutStep02Card01.ignoreContentAdaptWithSize(false);
        this._layoutStep02Card01.setContentSize(cc.size(165, 232));

        ///// # _layoutCardAvatar01
        this._layoutCardAvatar01 = new ccui.Layout();
        this._layoutCardAvatar01.setName("_layoutCardAvatar01");
        this._layoutStep02Card01.addChild(this._layoutCardAvatar01);
        this._layoutCardAvatar01.setCascadeOpacityEnabled(true);
        this._layoutCardAvatar01.setCascadeColorEnabled(true);
        this._layoutCardAvatar01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCardAvatar01, 0.5, 0.466);
        let _layoutCardAvatar01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCardAvatar01);
        _layoutCardAvatar01LayoutComponent.setPositionPercentXEnabled(true);
        _layoutCardAvatar01LayoutComponent.setPositionPercentX(0.5);
        _layoutCardAvatar01LayoutComponent.setPositionPercentYEnabled(true);
        _layoutCardAvatar01LayoutComponent.setPositionPercentY(0.466);
        this._layoutCardAvatar01.setTouchEnabled(false);
        this._layoutCardAvatar01.setUnifySizeEnabled(false);
        this._layoutCardAvatar01.ignoreContentAdaptWithSize(false);
        this._layoutCardAvatar01.setContentSize(cc.size(140, 195));
        this._layoutCardAvatar01.setClippingEnabled(true);

        ///// # _imgCardAvatarBgr01
        this._imgCardAvatarBgr01 = new ccui.ImageView();
        this._imgCardAvatarBgr01.setName("_imgCardAvatarBgr01");
        this._layoutCardAvatar01.addChild(this._imgCardAvatarBgr01);
        this._imgCardAvatarBgr01.setCascadeOpacityEnabled(true);
        this._imgCardAvatarBgr01.setCascadeColorEnabled(true);
        this._imgCardAvatarBgr01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCardAvatarBgr01, 0.5, 0.56);
        this._imgCardAvatarBgr01.setScale(1.02, 1.02);
        let _imgCardAvatarBgr01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCardAvatarBgr01);
        _imgCardAvatarBgr01LayoutComponent.setPositionPercentXEnabled(true);
        _imgCardAvatarBgr01LayoutComponent.setPositionPercentX(0.5);
        _imgCardAvatarBgr01LayoutComponent.setPositionPercentYEnabled(true);
        _imgCardAvatarBgr01LayoutComponent.setPositionPercentY(0.56);
        this._imgCardAvatarBgr01.loadTexture("card-collection/card-elements/CardRareBlank.png", 1);
        this._imgCardAvatarBgr01.setUnifySizeEnabled(false);
        this._imgCardAvatarBgr01.ignoreContentAdaptWithSize(false);
        this._imgCardAvatarBgr01.setContentSize(cc.size(128, 164));
        this._imgCardAvatarBgr01.setTouchEnabled(false);

        ///// # _imgCardAvatar01
        this._imgCardAvatar01 = new ccui.ImageView();
        this._imgCardAvatar01.setName("_imgCardAvatar01");
        this._layoutCardAvatar01.addChild(this._imgCardAvatar01);
        this._imgCardAvatar01.setCascadeOpacityEnabled(true);
        this._imgCardAvatar01.setCascadeColorEnabled(true);
        this._imgCardAvatar01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCardAvatar01, 0.5, 0.5486);
        let _imgCardAvatar01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCardAvatar01);
        _imgCardAvatar01LayoutComponent.setPositionPercentXEnabled(true);
        _imgCardAvatar01LayoutComponent.setPositionPercentX(0.5);
        _imgCardAvatar01LayoutComponent.setPositionPercentYEnabled(true);
        _imgCardAvatar01LayoutComponent.setPositionPercentY(0.5486);
        this._imgCardAvatar01.loadTexture("card-collection/cards/Statue_06.png", 1);
        this._imgCardAvatar01.setUnifySizeEnabled(false);
        this._imgCardAvatar01.ignoreContentAdaptWithSize(false);
        this._imgCardAvatar01.setContentSize(cc.size(127.2, 172.32));
        this._imgCardAvatar01.setTouchEnabled(false);

        ///// # _imgFrame01
        this._imgFrame01 = new ccui.ImageView();
        this._imgFrame01.setName("_imgFrame01");
        this._layoutStep02Card01.addChild(this._imgFrame01);
        this._imgFrame01.setCascadeOpacityEnabled(true);
        this._imgFrame01.setCascadeColorEnabled(true);
        this._imgFrame01.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgFrame01, 0.5, 0);
        let _imgFrame01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFrame01);
        _imgFrame01LayoutComponent.setPositionPercentXEnabled(true);
        _imgFrame01LayoutComponent.setPositionPercentX(0.5);
        _imgFrame01LayoutComponent.setPositionPercentYEnabled(true);
        _imgFrame01LayoutComponent.setPositionPercentY(0);
        this._imgFrame01.loadTexture("card-collection/card-elements/CardRareFrame.png", 1);
        this._imgFrame01.setUnifySizeEnabled(false);
        this._imgFrame01.ignoreContentAdaptWithSize(false);
        this._imgFrame01.setContentSize(cc.size(151, 211));
        this._imgFrame01.setTouchEnabled(false);

        ///// # _layoutStep02Card02
        this._layoutStep02Card02 = new ccui.Layout();
        this._layoutStep02Card02.setName("_layoutStep02Card02");
        this._layoutImgStep02.addChild(this._layoutStep02Card02);
        this._layoutStep02Card02.setCascadeOpacityEnabled(true);
        this._layoutStep02Card02.setCascadeColorEnabled(true);
        this._layoutStep02Card02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutStep02Card02, 0.7, 0.6116);
        this._layoutStep02Card02.setRotation(15);
        let _layoutStep02Card02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutStep02Card02);
        _layoutStep02Card02LayoutComponent.setPositionPercentXEnabled(true);
        _layoutStep02Card02LayoutComponent.setPositionPercentX(0.7);
        _layoutStep02Card02LayoutComponent.setPositionPercentYEnabled(true);
        _layoutStep02Card02LayoutComponent.setPositionPercentY(0.6116);
        this._layoutStep02Card02.setTouchEnabled(false);
        this._layoutStep02Card02.setUnifySizeEnabled(false);
        this._layoutStep02Card02.ignoreContentAdaptWithSize(false);
        this._layoutStep02Card02.setContentSize(cc.size(165, 232));

        ///// # _layoutCardAvatar02
        this._layoutCardAvatar02 = new ccui.Layout();
        this._layoutCardAvatar02.setName("_layoutCardAvatar02");
        this._layoutStep02Card02.addChild(this._layoutCardAvatar02);
        this._layoutCardAvatar02.setCascadeOpacityEnabled(true);
        this._layoutCardAvatar02.setCascadeColorEnabled(true);
        this._layoutCardAvatar02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCardAvatar02, 0.5, 0.466);
        let _layoutCardAvatar02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCardAvatar02);
        _layoutCardAvatar02LayoutComponent.setPositionPercentXEnabled(true);
        _layoutCardAvatar02LayoutComponent.setPositionPercentX(0.5);
        _layoutCardAvatar02LayoutComponent.setPositionPercentYEnabled(true);
        _layoutCardAvatar02LayoutComponent.setPositionPercentY(0.466);
        this._layoutCardAvatar02.setTouchEnabled(false);
        this._layoutCardAvatar02.setUnifySizeEnabled(false);
        this._layoutCardAvatar02.ignoreContentAdaptWithSize(false);
        this._layoutCardAvatar02.setContentSize(cc.size(140, 195));
        this._layoutCardAvatar02.setClippingEnabled(true);

        ///// # _imgCardAvatarBgr02
        this._imgCardAvatarBgr02 = new ccui.ImageView();
        this._imgCardAvatarBgr02.setName("_imgCardAvatarBgr02");
        this._layoutCardAvatar02.addChild(this._imgCardAvatarBgr02);
        this._imgCardAvatarBgr02.setCascadeOpacityEnabled(true);
        this._imgCardAvatarBgr02.setCascadeColorEnabled(true);
        this._imgCardAvatarBgr02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCardAvatarBgr02, 0.5, 0.56);
        this._imgCardAvatarBgr02.setScale(1.02, 1.02);
        let _imgCardAvatarBgr02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCardAvatarBgr02);
        _imgCardAvatarBgr02LayoutComponent.setPositionPercentXEnabled(true);
        _imgCardAvatarBgr02LayoutComponent.setPositionPercentX(0.5);
        _imgCardAvatarBgr02LayoutComponent.setPositionPercentYEnabled(true);
        _imgCardAvatarBgr02LayoutComponent.setPositionPercentY(0.56);
        this._imgCardAvatarBgr02.loadTexture("card-collection/card-elements/CardCommonBlank.png", 1);
        this._imgCardAvatarBgr02.setUnifySizeEnabled(false);
        this._imgCardAvatarBgr02.ignoreContentAdaptWithSize(false);
        this._imgCardAvatarBgr02.setContentSize(cc.size(128, 164));
        this._imgCardAvatarBgr02.setTouchEnabled(false);

        ///// # _imgCardAvatar02
        this._imgCardAvatar02 = new ccui.ImageView();
        this._imgCardAvatar02.setName("_imgCardAvatar02");
        this._layoutCardAvatar02.addChild(this._imgCardAvatar02);
        this._imgCardAvatar02.setCascadeOpacityEnabled(true);
        this._imgCardAvatar02.setCascadeColorEnabled(true);
        this._imgCardAvatar02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCardAvatar02, 0.5, 0.5486);
        this._imgCardAvatar02.setScale(0.375, 0.375);
        let _imgCardAvatar02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCardAvatar02);
        _imgCardAvatar02LayoutComponent.setPositionPercentXEnabled(true);
        _imgCardAvatar02LayoutComponent.setPositionPercentX(0.5);
        _imgCardAvatar02LayoutComponent.setPositionPercentYEnabled(true);
        _imgCardAvatar02LayoutComponent.setPositionPercentY(0.5486);
        this._imgCardAvatar02.loadTexture("card-collection/cards/Statue_03.png", 1);
        this._imgCardAvatar02.setUnifySizeEnabled(false);
        this._imgCardAvatar02.ignoreContentAdaptWithSize(false);
        this._imgCardAvatar02.setContentSize(cc.size(358, 629));
        this._imgCardAvatar02.setTouchEnabled(false);

        ///// # _imgFrame02
        this._imgFrame02 = new ccui.ImageView();
        this._imgFrame02.setName("_imgFrame02");
        this._layoutStep02Card02.addChild(this._imgFrame02);
        this._imgFrame02.setCascadeOpacityEnabled(true);
        this._imgFrame02.setCascadeColorEnabled(true);
        this._imgFrame02.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgFrame02, 0.5, 0);
        let _imgFrame02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFrame02);
        _imgFrame02LayoutComponent.setPositionPercentXEnabled(true);
        _imgFrame02LayoutComponent.setPositionPercentX(0.5);
        _imgFrame02LayoutComponent.setPositionPercentYEnabled(true);
        _imgFrame02LayoutComponent.setPositionPercentY(0);
        this._imgFrame02.loadTexture("card-collection/card-elements/CardCommonFrame.png", 1);
        this._imgFrame02.setUnifySizeEnabled(false);
        this._imgFrame02.ignoreContentAdaptWithSize(false);
        this._imgFrame02.setContentSize(cc.size(151, 211));
        this._imgFrame02.setTouchEnabled(false);

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

        ///// # _step03
        this._step03 = new cc.Node();
        this._step03.setName("_step03");
        this._layoutPopup.addChild(this._step03);
        this._step03.setCascadeOpacityEnabled(true);
        this._step03.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._step03, 0.7737, 0.3784);
        let _step03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._step03);
        _step03LayoutComponent.setPositionPercentXEnabled(true);
        _step03LayoutComponent.setPositionPercentX(0.7737);

        ///// # _layoutImgStep03
        this._layoutImgStep03 = new ccui.Layout();
        this._layoutImgStep03.setName("_layoutImgStep03");
        this._step03.addChild(this._layoutImgStep03);
        this._layoutImgStep03.setCascadeOpacityEnabled(true);
        this._layoutImgStep03.setCascadeColorEnabled(true);
        this._layoutImgStep03.setAnchorPoint(cc.p(0.5, 0.5));
        this._layoutImgStep03.setPosition(0, -1.75);
        let _layoutImgStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutImgStep03);
        this._layoutImgStep03.setTouchEnabled(false);
        this._layoutImgStep03.setUnifySizeEnabled(false);
        this._layoutImgStep03.ignoreContentAdaptWithSize(false);
        this._layoutImgStep03.setContentSize(cc.size(265, 275));

        ///// # _imgStep03Coin01
        this._imgStep03Coin01 = new ccui.ImageView();
        this._imgStep03Coin01.setName("_imgStep03Coin01");
        this._layoutImgStep03.addChild(this._imgStep03Coin01);
        this._imgStep03Coin01.setCascadeOpacityEnabled(true);
        this._imgStep03Coin01.setCascadeColorEnabled(true);
        this._imgStep03Coin01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStep03Coin01, 0.5, 0.42);
        this._imgStep03Coin01.setFlippedX(true);
        let _imgStep03Coin01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep03Coin01);
        _imgStep03Coin01LayoutComponent.setPositionPercentXEnabled(true);
        _imgStep03Coin01LayoutComponent.setPositionPercentX(0.5);
        _imgStep03Coin01LayoutComponent.setPositionPercentYEnabled(true);
        _imgStep03Coin01LayoutComponent.setPositionPercentY(0.42);
        this._imgStep03Coin01.loadTexture("icons/color/coins/Coin_00.png", 1);
        this._imgStep03Coin01.setUnifySizeEnabled(false);
        this._imgStep03Coin01.ignoreContentAdaptWithSize(false);
        this._imgStep03Coin01.setContentSize(cc.size(128, 128));
        this._imgStep03Coin01.setTouchEnabled(false);
        this._imgStep03Coin01.setFlippedX(true);

        ///// # _imgStep03Coin02
        this._imgStep03Coin02 = new ccui.ImageView();
        this._imgStep03Coin02.setName("_imgStep03Coin02");
        this._layoutImgStep03.addChild(this._imgStep03Coin02);
        this._imgStep03Coin02.setCascadeOpacityEnabled(true);
        this._imgStep03Coin02.setCascadeColorEnabled(true);
        this._imgStep03Coin02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStep03Coin02, 0.3, 0.22);
        let _imgStep03Coin02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep03Coin02);
        _imgStep03Coin02LayoutComponent.setPositionPercentXEnabled(true);
        _imgStep03Coin02LayoutComponent.setPositionPercentX(0.3);
        _imgStep03Coin02LayoutComponent.setPositionPercentYEnabled(true);
        _imgStep03Coin02LayoutComponent.setPositionPercentY(0.22);
        this._imgStep03Coin02.loadTexture("icons/color/coins/Coin_00.png", 1);
        this._imgStep03Coin02.setUnifySizeEnabled(false);
        this._imgStep03Coin02.ignoreContentAdaptWithSize(false);
        this._imgStep03Coin02.setContentSize(cc.size(128, 128));
        this._imgStep03Coin02.setTouchEnabled(false);

        ///// # _imgStep03Coin03
        this._imgStep03Coin03 = new ccui.ImageView();
        this._imgStep03Coin03.setName("_imgStep03Coin03");
        this._layoutImgStep03.addChild(this._imgStep03Coin03);
        this._imgStep03Coin03.setCascadeOpacityEnabled(true);
        this._imgStep03Coin03.setCascadeColorEnabled(true);
        this._imgStep03Coin03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStep03Coin03, 0.7, 0.22);
        this._imgStep03Coin03.setFlippedX(true);
        let _imgStep03Coin03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep03Coin03);
        _imgStep03Coin03LayoutComponent.setPositionPercentXEnabled(true);
        _imgStep03Coin03LayoutComponent.setPositionPercentX(0.7);
        _imgStep03Coin03LayoutComponent.setPositionPercentYEnabled(true);
        _imgStep03Coin03LayoutComponent.setPositionPercentY(0.22);
        this._imgStep03Coin03.loadTexture("icons/color/coins/Coin_00.png", 1);
        this._imgStep03Coin03.setUnifySizeEnabled(false);
        this._imgStep03Coin03.ignoreContentAdaptWithSize(false);
        this._imgStep03Coin03.setContentSize(cc.size(128, 128));
        this._imgStep03Coin03.setTouchEnabled(false);
        this._imgStep03Coin03.setFlippedX(true);

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
 * Create CardCollectionGuide
 * @returns {_ccs.CardCollectionGuide}
 */
_ccs.CardCollectionGuide.create = function () {
    return new _ccs.CardCollectionGuide();
};
