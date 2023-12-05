/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.WheelX2Layer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.WheelX2Layer = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutBackground: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ShopEventIcon} */
    _shopEvent: null,
    /** @type {AsyncButton} */
    _btnSpin: null,
    /** @type {ccui.ImageView} */
    _imgButtonSpin: null,
    /** @type {ck.Text} */
    _txtButtonSpin: null,
    /** @type {ccui.ImageView} */
    _imgLoadingButtonSpin: null,
    /** @type {cc.Node} */
    _nodeEffectSpin: null,
    /** @type {cc.Sprite} */
    _glowIn00: null,
    /** @type {cc.Sprite} */
    _glowIn01: null,
    /** @type {cc.Sprite} */
    _glowOut00: null,
    /** @type {cc.Sprite} */
    _highlight00: null,
    /** @type {cc.Sprite} */
    _highlight01: null,
    /** @type {ccui.Layout} */
    _layoutUI: null,
    /** @type {ccui.Layout} */
    _layoutHelp: null,
    /** @type {ccui.ImageView} */
    _imgHelpBgr: null,
    /** @type {ccui.ImageView} */
    _imgHelpIcon: null,
    /** @type {ccui.Layout} */
    _layoutExit: null,
    /** @type {ccui.ImageView} */
    _imgExitBgr: null,
    /** @type {ccui.ImageView} */
    _imgExitIcon: null,
    /** @type {ccui.ImageView} */
    _imgExitIconDark: null,
    /** @type {ccui.Layout} */
    _layoutUser: null,
    /** @type {ccui.Layout} */
    _layoutToken: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundToken: null,
    /** @type {ccui.ImageView} */
    _imgToken: null,
    /** @type {ck.Text} */
    _txtToken: null,
    /** @type {ccui.Button} */
    _btnAddToken: null,
    /** @type {ccui.Layout} */
    _layoutItem: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundItem: null,
    /** @type {ccui.ImageView} */
    _imgItemIcon: null,
    /** @type {ck.Text} */
    _txtItem: null,
    /** @type {ccui.Button} */
    _btnAddItem: null,
    /** @type {ccui.Layout} */
    _layoutGem: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundGem: null,
    /** @type {ccui.ImageView} */
    _imgGemIcon: null,
    /** @type {ck.Text} */
    _txtGem: null,
    /** @type {ccui.Button} */
    _btnAddGem: null,
    /** @type {ccui.Layout} */
    _layoutCoin: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundCoin: null,
    /** @type {ccui.ImageView} */
    _imgCoinIcon: null,
    /** @type {ck.Text} */
    _txtCoin: null,
    /** @type {ccui.Button} */
    _btnAddCoin: null,
    /** @type {ccui.Layout} */
    _layoutHistory: null,
    /** @type {cc.Node} */
    _nodeTitleHistory: null,
    /** @type {ck.Text} */
    _txtTitleHistory: null,
    /** @type {ccui.ImageView} */
    _imgDecorTitleHistory00: null,
    /** @type {ccui.ImageView} */
    _imgDecorTitleHistory01: null,
    /** @type {ccui.ScrollView} */
    _scrollViewHistory: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtHistory: null,
    /** @type {ccui.Layout} */
    _layoutItemSpawn: null,
    /** @type {ccui.Layout} */
    _layoutReward: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundReward: null,
    /** @type {ck.Text} */
    _txtAmountReward: null,
    /** @type {ccui.ImageView} */
    _imgIconReward: null,
    /** @type {WheelItem} */
    _spin: null,
    /** @type {WheelX} */
    _spinX: null,
    /** @type {ck.GridViewHorizontal} */
    _gridviewButtonTickets: null,
    /** @type {ccui.Layout} */
    _btnTicket00: null,
    /** @type {ccui.ImageView} */
    _imgButtonTicket00: null,
    /** @type {ccui.ImageView} */
    _imgIconTicket00: null,
    /** @type {ck.Text} */
    _txtButtonTicket00: null,
    /** @type {ccui.Layout} */
    _btnTicket01: null,
    /** @type {ccui.ImageView} */
    _imgButtonTicket01: null,
    /** @type {ccui.ImageView} */
    _imgIconTicket01: null,
    /** @type {ck.Text} */
    _txtButtonTicket01: null,
    /** @type {ccui.Layout} */
    _btnTicket02: null,
    /** @type {ccui.ImageView} */
    _imgButtonTicket02: null,
    /** @type {ccui.ImageView} */
    _imgIconTicket02: null,
    /** @type {ck.Text} */
    _txtButtonTicket02: null,
    /** @type {DualWheelTutorialPopup} */
    _layoutTutorial: null,
    /** @type {ItemInfoBubbleWidget} */
    _itemInfoBubbleWidget: null,
    /** @type {ccui.Layout} */
    _blackBG: null,
    /** @type {WheelXChoicesPopup} */
    _choicesGifts: null,
    /** @type {DualWheelAlertDialog} */
    _popupNotEnoughToken: null,


    /**
     * _ccs.WheelX2Layer constructor
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

        ///// # _layoutRoot
        this._layoutRoot = new ccui.Layout();
        this._layoutRoot.setName("_layoutRoot");
        this.addChild(this._layoutRoot);
        this._layoutRoot.setCascadeOpacityEnabled(true);
        this._layoutRoot.setCascadeColorEnabled(true);
        this._layoutRoot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutRoot, 0.5, 0.5);
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        _layoutRootLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRootLayoutComponent.setPositionPercentX(0.5);
        _layoutRootLayoutComponent.setPositionPercentYEnabled(true);
        _layoutRootLayoutComponent.setPositionPercentY(0.5);
        _layoutRootLayoutComponent.setPercentWidthEnabled(true);
        _layoutRootLayoutComponent.setPercentWidth(1);
        _layoutRootLayoutComponent.setPercentHeightEnabled(true);
        _layoutRootLayoutComponent.setPercentHeight(1);
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutRoot, 1, 1);

        ///// # _layoutBackground
        this._layoutBackground = new ccui.Layout();
        this._layoutBackground.setName("_layoutBackground");
        this._layoutRoot.addChild(this._layoutBackground);
        this._layoutBackground.setCascadeOpacityEnabled(true);
        this._layoutBackground.setCascadeColorEnabled(true);
        let _layoutBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBackground);
        _layoutBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentWidth(1);
        _layoutBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentHeight(1);
        this._layoutBackground.setTouchEnabled(true);
        this._layoutBackground.setUnifySizeEnabled(false);
        this._layoutBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBackground, 1, 1);

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._layoutBackground.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.498, 0.5);
        this._imgBackground.setOpacity(175);
        this._imgBackground.setColor(cc.color(77, 77, 77, 255));
        if (!PlatformUtils.hasNotch()) {
            let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
            _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
            _imgBackgroundLayoutComponent.setPositionPercentX(0.498);
            _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
            _imgBackgroundLayoutComponent.setPositionPercentY(0.5);
            _imgBackgroundLayoutComponent.setPercentWidthEnabled(true);
            _imgBackgroundLayoutComponent.setPercentWidth(1);
            _imgBackgroundLayoutComponent.setPercentHeightEnabled(true);
            _imgBackgroundLayoutComponent.setPercentHeight(1);
        }
        this._imgBackground.loadTexture("sprites/backgrounds/DualWheel.png", 0);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBackground, 1, 1);
        this._imgBackground.setTouchEnabled(false);
        UIUtils.initFullScreenBackground(this._imgBackground);

        ///// # _shopEvent
        this._shopEvent = new ShopEventIcon();
        this._shopEvent.setName("_shopEvent");
        this._layoutRoot.addChild(this._shopEvent);
        this._shopEvent.setCascadeOpacityEnabled(true);
        this._shopEvent.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._shopEvent, 0.9185, 0.1769);
        this._shopEvent.setScale(1.2, 1.2);
        let _shopEventLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._shopEvent);
        _shopEventLayoutComponent.setPositionPercentXEnabled(true);
        _shopEventLayoutComponent.setPositionPercentX(0.9185);
        _shopEventLayoutComponent.setPositionPercentYEnabled(true);
        _shopEventLayoutComponent.setPositionPercentY(0.1769);

        ///// # _btnSpin
        this._btnSpin = new AsyncButton();
        this._btnSpin.setName("_btnSpin");
        this._layoutRoot.addChild(this._btnSpin);
        this._btnSpin.setCascadeOpacityEnabled(true);
        this._btnSpin.setCascadeColorEnabled(true);
        this._btnSpin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnSpin, 0.5, 0.18);
        let _btnSpinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnSpin);
        _btnSpinLayoutComponent.setPositionPercentXEnabled(true);
        _btnSpinLayoutComponent.setPositionPercentX(0.5);
        _btnSpinLayoutComponent.setPositionPercentYEnabled(true);
        _btnSpinLayoutComponent.setPositionPercentY(0.18);
        this._btnSpin.setUnifySizeEnabled(false);
        this._btnSpin.ignoreContentAdaptWithSize(false);
        this._btnSpin.setContentSize(cc.size(200, 95));
        this._btnSpin.setTouchEnabled(true);

        ///// # _imgButtonSpin
        this._imgButtonSpin = new ccui.ImageView();
        this._imgButtonSpin.setName("_imgButtonSpin");
        this._btnSpin.addChild(this._imgButtonSpin);
        this._imgButtonSpin.setCascadeOpacityEnabled(true);
        this._imgButtonSpin.setCascadeColorEnabled(true);
        this._imgButtonSpin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonSpin, 0.51, 0.42);
        let _imgButtonSpinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonSpin);
        _imgButtonSpinLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonSpinLayoutComponent.setPositionPercentX(0.51);
        _imgButtonSpinLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonSpinLayoutComponent.setPositionPercentY(0.42);
        this._imgButtonSpin.loadTexture("buttons/rectangles/Yellow_02.png", 1);
        this._imgButtonSpin.setUnifySizeEnabled(false);
        this._imgButtonSpin.ignoreContentAdaptWithSize(false);
        this._imgButtonSpin.setContentSize(cc.size(184, 77));
        this._imgButtonSpin.setTouchEnabled(false);

        ///// # _txtButtonSpin
        this._txtButtonSpin = new ck.Text();
        this._txtButtonSpin.setName("_txtButtonSpin");
        this._btnSpin.addChild(this._txtButtonSpin);
        this._txtButtonSpin.setCascadeOpacityEnabled(true);
        this._txtButtonSpin.setCascadeColorEnabled(true);
        this._txtButtonSpin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonSpin, 0.5, 0.5);
        let _txtButtonSpinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonSpin);
        _txtButtonSpinLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonSpinLayoutComponent.setPositionPercentX(0.5);
        _txtButtonSpinLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonSpinLayoutComponent.setPositionPercentY(0.5);
        this._txtButtonSpin.setTouchEnabled(false);
        this._txtButtonSpin.ignoreContentAdaptWithSize(true);
        this._txtButtonSpin.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButtonSpin.setDefaultFontSize(45);
        this._txtButtonSpin.setString(gm.localize.getText("TXT_SPIN").toUpperCase());
        this._txtButtonSpin.setTextHorizontalAlignment(0);
        this._txtButtonSpin.setTextVerticalAlignment(0);
        this._txtButtonSpin.enableOutline(cc.color(223, 138, 41, 255), 1);
        this._txtButtonSpin.enableShadow(cc.color(128, 92, 6, 255), cc.size(0, -2), 0);
        this._txtButtonSpin.autoFitSingleLine();

        ///// # _imgLoadingButtonSpin
        this._imgLoadingButtonSpin = new ccui.ImageView();
        this._imgLoadingButtonSpin.setName("_imgLoadingButtonSpin");
        this._btnSpin.addChild(this._imgLoadingButtonSpin);
        this._imgLoadingButtonSpin.setCascadeOpacityEnabled(true);
        this._imgLoadingButtonSpin.setCascadeColorEnabled(true);
        this._imgLoadingButtonSpin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLoadingButtonSpin, 0.5, 0.49);
        this._imgLoadingButtonSpin.setVisible(false);
        let _imgLoadingButtonSpinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLoadingButtonSpin);
        _imgLoadingButtonSpinLayoutComponent.setPositionPercentXEnabled(true);
        _imgLoadingButtonSpinLayoutComponent.setPositionPercentX(0.5);
        _imgLoadingButtonSpinLayoutComponent.setPositionPercentYEnabled(true);
        _imgLoadingButtonSpinLayoutComponent.setPositionPercentY(0.49);
        this._imgLoadingButtonSpin.loadTexture("sprites/icons/color/loading/LoadingSpinner.png", 0);
        this._imgLoadingButtonSpin.setUnifySizeEnabled(false);
        this._imgLoadingButtonSpin.ignoreContentAdaptWithSize(false);
        this._imgLoadingButtonSpin.setContentSize(cc.size(60, 60));
        this._imgLoadingButtonSpin.setTouchEnabled(false);

        ///// # _nodeEffectSpin
        this._nodeEffectSpin = new cc.Node();
        this._nodeEffectSpin.setName("_nodeEffectSpin");
        this._btnSpin.addChild(this._nodeEffectSpin);
        this._nodeEffectSpin.setCascadeOpacityEnabled(true);
        this._nodeEffectSpin.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeEffectSpin, 0.5, 0.4632);
        this._nodeEffectSpin.setScale(1.135, 1.135);
        let _nodeEffectSpinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeEffectSpin);
        _nodeEffectSpinLayoutComponent.setPositionPercentXEnabled(true);
        _nodeEffectSpinLayoutComponent.setPositionPercentX(0.5);

        ///// # _glowIn00
        this._glowIn00 = new cc.Sprite();
        this._glowIn00.setName("_glowIn00");
        this._nodeEffectSpin.addChild(this._glowIn00);
        this._glowIn00.setCascadeOpacityEnabled(true);
        this._glowIn00.setCascadeColorEnabled(true);
        this._glowIn00.setAnchorPoint(cc.p(0.5, 0.5));
        this._glowIn00.setOpacity(0);
        let _glowIn00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._glowIn00);
        let sf = cc.spriteFrameCache.getSpriteFrame("vfx/glows/Glow_04_In.png"); if (sf) this._glowIn00.setSpriteFrame(sf);
        let _glowIn00BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _glowIn00BlendFunc.src = 770;
        _glowIn00BlendFunc.dst = 1;
        this._glowIn00.setBlendFunc(_glowIn00BlendFunc);

        ///// # _glowIn01
        this._glowIn01 = new cc.Sprite();
        this._glowIn01.setName("_glowIn01");
        this._nodeEffectSpin.addChild(this._glowIn01);
        this._glowIn01.setCascadeOpacityEnabled(true);
        this._glowIn01.setCascadeColorEnabled(true);
        this._glowIn01.setAnchorPoint(cc.p(0.5, 0.5));
        this._glowIn01.setOpacity(0);
        let _glowIn01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._glowIn01);
        let sf = cc.spriteFrameCache.getSpriteFrame("vfx/glows/Glow_04_In.png"); if (sf) this._glowIn01.setSpriteFrame(sf);
        let _glowIn01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _glowIn01BlendFunc.src = 770;
        _glowIn01BlendFunc.dst = 1;
        this._glowIn01.setBlendFunc(_glowIn01BlendFunc);

        ///// # _glowOut00
        this._glowOut00 = new cc.Sprite();
        this._glowOut00.setName("_glowOut00");
        this._nodeEffectSpin.addChild(this._glowOut00);
        this._glowOut00.setCascadeOpacityEnabled(true);
        this._glowOut00.setCascadeColorEnabled(true);
        this._glowOut00.setAnchorPoint(cc.p(0.5, 0.5));
        let _glowOut00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._glowOut00);
        let sf = cc.spriteFrameCache.getSpriteFrame("vfx/glows/Glow_04_Out.png"); if (sf) this._glowOut00.setSpriteFrame(sf);
        let _glowOut00BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _glowOut00BlendFunc.src = 770;
        _glowOut00BlendFunc.dst = 1;
        this._glowOut00.setBlendFunc(_glowOut00BlendFunc);

        ///// # _highlight00
        this._highlight00 = new cc.Sprite();
        this._highlight00.setName("_highlight00");
        this._nodeEffectSpin.addChild(this._highlight00);
        this._highlight00.setCascadeOpacityEnabled(true);
        this._highlight00.setCascadeColorEnabled(true);
        this._highlight00.setAnchorPoint(cc.p(0.5, 0.5));
        this._highlight00.setPosition(60, 31);
        this._highlight00.setScale(0.4, 0.7);
        this._highlight00.setOpacity(0);
        let _highlight00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._highlight00);
        let sf = cc.spriteFrameCache.getSpriteFrame("vfx/glows/HighlightLine.png"); if (sf) this._highlight00.setSpriteFrame(sf);
        let _highlight00BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _highlight00BlendFunc.src = 770;
        _highlight00BlendFunc.dst = 1;
        this._highlight00.setBlendFunc(_highlight00BlendFunc);

        ///// # _highlight01
        this._highlight01 = new cc.Sprite();
        this._highlight01.setName("_highlight01");
        this._nodeEffectSpin.addChild(this._highlight01);
        this._highlight01.setCascadeOpacityEnabled(true);
        this._highlight01.setCascadeColorEnabled(true);
        this._highlight01.setAnchorPoint(cc.p(0.5, 0.5));
        this._highlight01.setPosition(-60, -31);
        this._highlight01.setScale(0.4, -0.7);
        this._highlight01.setOpacity(0);
        let _highlight01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._highlight01);
        let sf = cc.spriteFrameCache.getSpriteFrame("vfx/glows/HighlightLine.png"); if (sf) this._highlight01.setSpriteFrame(sf);
        let _highlight01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _highlight01BlendFunc.src = 770;
        _highlight01BlendFunc.dst = 1;
        this._highlight01.setBlendFunc(_highlight01BlendFunc);

        ///// # _layoutUI
        this._layoutUI = new ccui.Layout();
        this._layoutUI.setName("_layoutUI");
        this._layoutRoot.addChild(this._layoutUI);
        this._layoutUI.setCascadeOpacityEnabled(true);
        this._layoutUI.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutUI, 0, 0.0012);
        let _layoutUILayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutUI);
        _layoutUILayoutComponent.setPercentWidthEnabled(true);
        _layoutUILayoutComponent.setPercentWidth(1);
        _layoutUILayoutComponent.setPercentHeightEnabled(true);
        _layoutUILayoutComponent.setPercentHeight(1);
        this._layoutUI.setTouchEnabled(false);
        this._layoutUI.setUnifySizeEnabled(false);
        this._layoutUI.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutUI, 1, 1);

        ///// # _layoutHelp
        this._layoutHelp = new ccui.Layout();
        this._layoutHelp.setName("_layoutHelp");
        this._layoutUI.addChild(this._layoutHelp);
        this._layoutHelp.setCascadeOpacityEnabled(true);
        this._layoutHelp.setCascadeColorEnabled(true);
        this._layoutHelp.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutHelp, 0.09, 0.94);
        let _layoutHelpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHelp);
        _layoutHelpLayoutComponent.setPositionPercentXEnabled(true);
        _layoutHelpLayoutComponent.setPositionPercentX(0.09);
        _layoutHelpLayoutComponent.setPositionPercentYEnabled(true);
        _layoutHelpLayoutComponent.setPositionPercentY(0.94);
        this._layoutHelp.setTouchEnabled(true);
        this._layoutHelp.setUnifySizeEnabled(false);
        this._layoutHelp.ignoreContentAdaptWithSize(false);
        this._layoutHelp.setContentSize(cc.size(60, 60));

        ///// # _imgHelpBgr
        this._imgHelpBgr = new ccui.ImageView();
        this._imgHelpBgr.setName("_imgHelpBgr");
        this._layoutHelp.addChild(this._imgHelpBgr);
        this._imgHelpBgr.setCascadeOpacityEnabled(true);
        this._imgHelpBgr.setCascadeColorEnabled(true);
        this._imgHelpBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHelpBgr, 0.5, 0.5);
        let _imgHelpBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHelpBgr);
        _imgHelpBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgHelpBgrLayoutComponent.setPositionPercentX(0.5);
        _imgHelpBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgHelpBgrLayoutComponent.setPositionPercentY(0.5);
        _imgHelpBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgHelpBgrLayoutComponent.setPercentWidth(1);
        _imgHelpBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgHelpBgrLayoutComponent.setPercentHeight(1);
        this._imgHelpBgr.loadTexture("buttons/circles/Gray.png", 1);
        this._imgHelpBgr.setUnifySizeEnabled(false);
        this._imgHelpBgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgHelpBgr, 1, 1);
        this._imgHelpBgr.setTouchEnabled(false);

        ///// # _imgHelpIcon
        this._imgHelpIcon = new ccui.ImageView();
        this._imgHelpIcon.setName("_imgHelpIcon");
        this._layoutHelp.addChild(this._imgHelpIcon);
        this._imgHelpIcon.setCascadeOpacityEnabled(true);
        this._imgHelpIcon.setCascadeColorEnabled(true);
        this._imgHelpIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHelpIcon, 0.5, 0.5);
        let _imgHelpIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHelpIcon);
        _imgHelpIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgHelpIconLayoutComponent.setPositionPercentX(0.5);
        _imgHelpIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgHelpIconLayoutComponent.setPositionPercentY(0.5);
        this._imgHelpIcon.loadTexture("icons/flat/Question.png", 1);
        this._imgHelpIcon.setUnifySizeEnabled(false);
        this._imgHelpIcon.ignoreContentAdaptWithSize(false);
        this._imgHelpIcon.setContentSize(cc.size(22, 34));
        this._imgHelpIcon.setTouchEnabled(false);

        ///// # _layoutExit
        this._layoutExit = new ccui.Layout();
        this._layoutExit.setName("_layoutExit");
        this._layoutUI.addChild(this._layoutExit);
        this._layoutExit.setCascadeOpacityEnabled(true);
        this._layoutExit.setCascadeColorEnabled(true);
        this._layoutExit.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutExit, 0.08, 0.17);
        let _layoutExitLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutExit);
        _layoutExitLayoutComponent.setPositionPercentXEnabled(true);
        _layoutExitLayoutComponent.setPositionPercentX(0.08);
        _layoutExitLayoutComponent.setPositionPercentYEnabled(true);
        _layoutExitLayoutComponent.setPositionPercentY(0.17);
        this._layoutExit.setTouchEnabled(true);
        this._layoutExit.setUnifySizeEnabled(false);
        this._layoutExit.ignoreContentAdaptWithSize(false);
        this._layoutExit.setContentSize(cc.size(75, 75));

        ///// # _imgExitBgr
        this._imgExitBgr = new ccui.ImageView();
        this._imgExitBgr.setName("_imgExitBgr");
        this._layoutExit.addChild(this._imgExitBgr);
        this._imgExitBgr.setCascadeOpacityEnabled(true);
        this._imgExitBgr.setCascadeColorEnabled(true);
        this._imgExitBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgExitBgr, 0.5, 0.5);
        let _imgExitBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExitBgr);
        _imgExitBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgExitBgrLayoutComponent.setPositionPercentX(0.5);
        _imgExitBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgExitBgrLayoutComponent.setPositionPercentY(0.5);
        _imgExitBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgExitBgrLayoutComponent.setPercentWidth(1);
        _imgExitBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgExitBgrLayoutComponent.setPercentHeight(1);
        this._imgExitBgr.loadTexture("buttons/circles/Gray.png", 1);
        this._imgExitBgr.setUnifySizeEnabled(false);
        this._imgExitBgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgExitBgr, 1, 1);
        this._imgExitBgr.setTouchEnabled(false);

        ///// # _imgExitIcon
        this._imgExitIcon = new ccui.ImageView();
        this._imgExitIcon.setName("_imgExitIcon");
        this._layoutExit.addChild(this._imgExitIcon);
        this._imgExitIcon.setCascadeOpacityEnabled(true);
        this._imgExitIcon.setCascadeColorEnabled(true);
        this._imgExitIcon.setAnchorPoint(cc.p(0.58, 0.55));
        ck.UIUtils.setPositionPercent(this._imgExitIcon, 0.5, 0.5);
        let _imgExitIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExitIcon);
        _imgExitIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgExitIconLayoutComponent.setPositionPercentX(0.5);
        _imgExitIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgExitIconLayoutComponent.setPositionPercentY(0.5);
        this._imgExitIcon.loadTexture("icons/flat/Exit.png", 1);
        this._imgExitIcon.setUnifySizeEnabled(false);
        this._imgExitIcon.ignoreContentAdaptWithSize(false);
        this._imgExitIcon.setContentSize(cc.size(43, 37));
        this._imgExitIcon.setTouchEnabled(false);

        ///// # _imgExitIconDark
        this._imgExitIconDark = new ccui.ImageView();
        this._imgExitIconDark.setName("_imgExitIconDark");
        this._layoutExit.addChild(this._imgExitIconDark);
        this._imgExitIconDark.setCascadeOpacityEnabled(true);
        this._imgExitIconDark.setCascadeColorEnabled(true);
        this._imgExitIconDark.setAnchorPoint(cc.p(0.58, 0.55));
        ck.UIUtils.setPositionPercent(this._imgExitIconDark, 0.5, 0.5);
        this._imgExitIconDark.setVisible(false);
        let _imgExitIconDarkLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExitIconDark);
        _imgExitIconDarkLayoutComponent.setPositionPercentXEnabled(true);
        _imgExitIconDarkLayoutComponent.setPositionPercentX(0.5);
        _imgExitIconDarkLayoutComponent.setPositionPercentYEnabled(true);
        _imgExitIconDarkLayoutComponent.setPositionPercentY(0.5);
        this._imgExitIconDark.loadTexture("icons/flat/ExitGreen.png", 1);
        this._imgExitIconDark.setUnifySizeEnabled(false);
        this._imgExitIconDark.ignoreContentAdaptWithSize(false);
        this._imgExitIconDark.setContentSize(cc.size(43, 37));
        this._imgExitIconDark.setTouchEnabled(false);

        ///// # _layoutUser
        this._layoutUser = new ccui.Layout();
        this._layoutUser.setName("_layoutUser");
        this._layoutRoot.addChild(this._layoutUser);
        this._layoutUser.setCascadeOpacityEnabled(true);
        this._layoutUser.setCascadeColorEnabled(true);
        this._layoutUser.setAnchorPoint(cc.p(1, 1));
        ck.UIUtils.setPositionPercent(this._layoutUser, 0.9808, 0.9824);
        let _layoutUserLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutUser);
        _layoutUserLayoutComponent.setPositionPercentXEnabled(true);
        _layoutUserLayoutComponent.setPositionPercentX(0.9808);
        _layoutUserLayoutComponent.setPositionPercentYEnabled(true);
        _layoutUserLayoutComponent.setPositionPercentY(0.9824);
        this._layoutUser.setTouchEnabled(true);
        this._layoutUser.setUnifySizeEnabled(false);
        this._layoutUser.ignoreContentAdaptWithSize(false);
        this._layoutUser.setContentSize(cc.size(518.9094, 110));

        ///// # _layoutToken
        this._layoutToken = new ccui.Layout();
        this._layoutToken.setName("_layoutToken");
        this._layoutUser.addChild(this._layoutToken);
        this._layoutToken.setCascadeOpacityEnabled(true);
        this._layoutToken.setCascadeColorEnabled(true);
        this._layoutToken.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutToken, 0.2313, 0.7727);
        let _layoutTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutToken);
        _layoutTokenLayoutComponent.setHorizontalEdge(ccui.LayoutComponent.horizontalEdge.LEFT);
        _layoutTokenLayoutComponent.setLeftMargin(0);
        _layoutTokenLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _layoutTokenLayoutComponent.setTopMargin(0);
        this._layoutToken.setTouchEnabled(true);
        this._layoutToken.setUnifySizeEnabled(false);
        this._layoutToken.ignoreContentAdaptWithSize(false);
        this._layoutToken.setContentSize(cc.size(240, 50));

        ///// # _imgBackgroundToken
        this._imgBackgroundToken = new ccui.ImageView();
        this._imgBackgroundToken.setName("_imgBackgroundToken");
        this._layoutToken.addChild(this._imgBackgroundToken);
        this._imgBackgroundToken.setCascadeOpacityEnabled(true);
        this._imgBackgroundToken.setCascadeColorEnabled(true);
        this._imgBackgroundToken.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundToken, 0.5, 0.5);
        let _imgBackgroundTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundToken);
        _imgBackgroundTokenLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundTokenLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundTokenLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundTokenLayoutComponent.setPositionPercentY(0.5);
        this._imgBackgroundToken.loadTexture("home/CurrencyBox.png", 1);
        this._imgBackgroundToken.setUnifySizeEnabled(false);
        this._imgBackgroundToken.ignoreContentAdaptWithSize(false);
        this._imgBackgroundToken.setScale9Enabled(true);
        this._imgBackgroundToken.setCapInsets(cc.rect(53, 8, 55, 9));
        this._imgBackgroundToken.setContentSize(cc.size(200, 50));
        this._imgBackgroundToken.setTouchEnabled(false);

        ///// # _imgToken
        this._imgToken = new ccui.ImageView();
        this._imgToken.setName("_imgToken");
        this._layoutToken.addChild(this._imgToken);
        this._imgToken.setCascadeOpacityEnabled(true);
        this._imgToken.setCascadeColorEnabled(true);
        this._imgToken.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgToken, 0.09, 0.5);
        let _imgTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken);
        _imgTokenLayoutComponent.setPositionPercentXEnabled(true);
        _imgTokenLayoutComponent.setPositionPercentX(0.09);
        _imgTokenLayoutComponent.setPositionPercentYEnabled(true);
        _imgTokenLayoutComponent.setPositionPercentY(0.5);
        this._imgToken.loadTexture("icons/color/tokens/DualWheelToken.png", 1);
        this._imgToken.setUnifySizeEnabled(false);
        this._imgToken.ignoreContentAdaptWithSize(false);
        this._imgToken.setContentSize(cc.size(50, 50));
        this._imgToken.setTouchEnabled(false);

        ///// # _txtToken
        this._txtToken = new ck.Text();
        this._txtToken.setName("_txtToken");
        this._layoutToken.addChild(this._txtToken);
        this._txtToken.setCascadeOpacityEnabled(true);
        this._txtToken.setCascadeColorEnabled(true);
        this._txtToken.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtToken, 0.83, 0.5);
        this._txtToken.setOpacity(229);
        this._txtToken.setTextColor(cc.color(253, 255, 0, 255));
        let _txtTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtToken);
        _txtTokenLayoutComponent.setPositionPercentXEnabled(true);
        _txtTokenLayoutComponent.setPositionPercentX(0.83);
        _txtTokenLayoutComponent.setPositionPercentYEnabled(true);
        _txtTokenLayoutComponent.setPositionPercentY(0.5);
        this._txtToken.setTouchEnabled(false);
        this._txtToken.setUnifySizeEnabled(false);
        this._txtToken.ignoreContentAdaptWithSize(false);
        this._txtToken.setContentSize(cc.size(148, 37));
        this._txtToken.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtToken.setDefaultFontSize(32);
        this._txtToken.setTextHorizontalAlignment(2);
        this._txtToken.setTextVerticalAlignment(1);
        this._txtToken.autoFitSingleLine();

        ///// # _btnAddToken
        this._btnAddToken = new ccui.Button();
        this._btnAddToken.setName("_btnAddToken");
        this._layoutToken.addChild(this._btnAddToken);
        this._btnAddToken.setCascadeOpacityEnabled(true);
        this._btnAddToken.setCascadeColorEnabled(true);
        this._btnAddToken.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAddToken, 0.915, 0.46);
        let _btnAddTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddToken);
        _btnAddTokenLayoutComponent.setPositionPercentXEnabled(true);
        _btnAddTokenLayoutComponent.setPositionPercentX(0.915);
        _btnAddTokenLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddTokenLayoutComponent.setPositionPercentY(0.46);
        this._btnAddToken.loadTextureDisabled("buttons/rectangles/Add.png", 1);
        this._btnAddToken.loadTexturePressed("buttons/rectangles/Add.png", 1);
        this._btnAddToken.loadTextureNormal("buttons/rectangles/Add.png", 1);
        this._btnAddToken.setUnifySizeEnabled(false);
        this._btnAddToken.ignoreContentAdaptWithSize(false);
        this._btnAddToken.setContentSize(cc.size(40, 40));
        this._btnAddToken.setTouchEnabled(true);

        ///// # _layoutItem
        this._layoutItem = new ccui.Layout();
        this._layoutItem.setName("_layoutItem");
        this._layoutUser.addChild(this._layoutItem);
        this._layoutItem.setCascadeOpacityEnabled(true);
        this._layoutItem.setCascadeColorEnabled(true);
        this._layoutItem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutItem, 0.2313, 0.2273);
        let _layoutItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutItem);
        _layoutItemLayoutComponent.setHorizontalEdge(ccui.LayoutComponent.horizontalEdge.LEFT);
        _layoutItemLayoutComponent.setLeftMargin(0);
        _layoutItemLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.BOTTOM);
        _layoutItemLayoutComponent.setBottomMargin(0);
        this._layoutItem.setTouchEnabled(true);
        this._layoutItem.setUnifySizeEnabled(false);
        this._layoutItem.ignoreContentAdaptWithSize(false);
        this._layoutItem.setContentSize(cc.size(240, 50));

        ///// # _imgBackgroundItem
        this._imgBackgroundItem = new ccui.ImageView();
        this._imgBackgroundItem.setName("_imgBackgroundItem");
        this._layoutItem.addChild(this._imgBackgroundItem);
        this._imgBackgroundItem.setCascadeOpacityEnabled(true);
        this._imgBackgroundItem.setCascadeColorEnabled(true);
        this._imgBackgroundItem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundItem, 0.5, 0.5);
        let _imgBackgroundItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundItem);
        _imgBackgroundItemLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundItemLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundItemLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundItemLayoutComponent.setPositionPercentY(0.5);
        this._imgBackgroundItem.loadTexture("home/CurrencyBox.png", 1);
        this._imgBackgroundItem.setUnifySizeEnabled(false);
        this._imgBackgroundItem.ignoreContentAdaptWithSize(false);
        this._imgBackgroundItem.setScale9Enabled(true);
        this._imgBackgroundItem.setCapInsets(cc.rect(53, 8, 55, 9));
        this._imgBackgroundItem.setContentSize(cc.size(200, 50));
        this._imgBackgroundItem.setTouchEnabled(false);

        ///// # _imgItemIcon
        this._imgItemIcon = new ccui.ImageView();
        this._imgItemIcon.setName("_imgItemIcon");
        this._layoutItem.addChild(this._imgItemIcon);
        this._imgItemIcon.setCascadeOpacityEnabled(true);
        this._imgItemIcon.setCascadeColorEnabled(true);
        this._imgItemIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgItemIcon, 0.09, 0.5);
        let _imgItemIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgItemIcon);
        _imgItemIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgItemIconLayoutComponent.setPositionPercentX(0.09);
        _imgItemIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgItemIconLayoutComponent.setPositionPercentY(0.5);
        this._imgItemIcon.loadTexture("icons/color/items/Item.png", 1);
        this._imgItemIcon.setUnifySizeEnabled(false);
        this._imgItemIcon.ignoreContentAdaptWithSize(false);
        this._imgItemIcon.setContentSize(cc.size(48, 48));
        this._imgItemIcon.setTouchEnabled(false);

        ///// # _txtItem
        this._txtItem = new ck.Text();
        this._txtItem.setName("_txtItem");
        this._layoutItem.addChild(this._txtItem);
        this._txtItem.setCascadeOpacityEnabled(true);
        this._txtItem.setCascadeColorEnabled(true);
        this._txtItem.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtItem, 0.82, 0.5);
        this._txtItem.setOpacity(229);
        this._txtItem.setTextColor(cc.color(0, 213, 245, 255));
        let _txtItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtItem);
        _txtItemLayoutComponent.setPositionPercentXEnabled(true);
        _txtItemLayoutComponent.setPositionPercentX(0.82);
        _txtItemLayoutComponent.setPositionPercentYEnabled(true);
        _txtItemLayoutComponent.setPositionPercentY(0.5);
        this._txtItem.setTouchEnabled(false);
        this._txtItem.setUnifySizeEnabled(false);
        this._txtItem.ignoreContentAdaptWithSize(false);
        this._txtItem.setContentSize(cc.size(148, 37));
        this._txtItem.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtItem.setDefaultFontSize(32);
        this._txtItem.setTextHorizontalAlignment(2);
        this._txtItem.setTextVerticalAlignment(1);
        this._txtItem.autoFitSingleLine();

        ///// # _btnAddItem
        this._btnAddItem = new ccui.Button();
        this._btnAddItem.setName("_btnAddItem");
        this._layoutItem.addChild(this._btnAddItem);
        this._btnAddItem.setCascadeOpacityEnabled(true);
        this._btnAddItem.setCascadeColorEnabled(true);
        this._btnAddItem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAddItem, 0.915, 0.46);
        let _btnAddItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddItem);
        _btnAddItemLayoutComponent.setPositionPercentXEnabled(true);
        _btnAddItemLayoutComponent.setPositionPercentX(0.915);
        _btnAddItemLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddItemLayoutComponent.setPositionPercentY(0.46);
        this._btnAddItem.loadTextureDisabled("buttons/rectangles/Add.png", 1);
        this._btnAddItem.loadTexturePressed("buttons/rectangles/Add.png", 1);
        this._btnAddItem.loadTextureNormal("buttons/rectangles/Add.png", 1);
        this._btnAddItem.setUnifySizeEnabled(false);
        this._btnAddItem.ignoreContentAdaptWithSize(false);
        this._btnAddItem.setContentSize(cc.size(40, 40));
        this._btnAddItem.setTouchEnabled(true);

        ///// # _layoutGem
        this._layoutGem = new ccui.Layout();
        this._layoutGem.setName("_layoutGem");
        this._layoutUser.addChild(this._layoutGem);
        this._layoutGem.setCascadeOpacityEnabled(true);
        this._layoutGem.setCascadeColorEnabled(true);
        this._layoutGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutGem, 0.7495, 0.2273);
        let _layoutGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGem);
        _layoutGemLayoutComponent.setHorizontalEdge(ccui.LayoutComponent.horizontalEdge.RIGHT);
        _layoutGemLayoutComponent.setRightMargin(0);
        _layoutGemLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.BOTTOM);
        _layoutGemLayoutComponent.setBottomMargin(0);
        this._layoutGem.setTouchEnabled(true);
        this._layoutGem.setUnifySizeEnabled(false);
        this._layoutGem.ignoreContentAdaptWithSize(false);
        this._layoutGem.setContentSize(cc.size(260, 50));

        ///// # _imgBackgroundGem
        this._imgBackgroundGem = new ccui.ImageView();
        this._imgBackgroundGem.setName("_imgBackgroundGem");
        this._layoutGem.addChild(this._imgBackgroundGem);
        this._imgBackgroundGem.setCascadeOpacityEnabled(true);
        this._imgBackgroundGem.setCascadeColorEnabled(true);
        this._imgBackgroundGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundGem, 0.5, 0.5);
        let _imgBackgroundGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundGem);
        _imgBackgroundGemLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundGemLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundGemLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundGemLayoutComponent.setPositionPercentY(0.5);
        this._imgBackgroundGem.loadTexture("home/CurrencyBox.png", 1);
        this._imgBackgroundGem.setUnifySizeEnabled(false);
        this._imgBackgroundGem.ignoreContentAdaptWithSize(false);
        this._imgBackgroundGem.setScale9Enabled(true);
        this._imgBackgroundGem.setCapInsets(cc.rect(53, 8, 55, 9));
        this._imgBackgroundGem.setContentSize(cc.size(230, 50));
        this._imgBackgroundGem.setTouchEnabled(false);

        ///// # _imgGemIcon
        this._imgGemIcon = new ccui.ImageView();
        this._imgGemIcon.setName("_imgGemIcon");
        this._layoutGem.addChild(this._imgGemIcon);
        this._imgGemIcon.setCascadeOpacityEnabled(true);
        this._imgGemIcon.setCascadeColorEnabled(true);
        this._imgGemIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGemIcon, 0.09, 0.53);
        let _imgGemIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGemIcon);
        _imgGemIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgGemIconLayoutComponent.setPositionPercentX(0.09);
        _imgGemIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgGemIconLayoutComponent.setPositionPercentY(0.53);
        this._imgGemIcon.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgGemIcon.setUnifySizeEnabled(false);
        this._imgGemIcon.ignoreContentAdaptWithSize(false);
        this._imgGemIcon.setContentSize(cc.size(60, 60));
        this._imgGemIcon.setTouchEnabled(false);

        ///// # _txtGem
        this._txtGem = new ck.Text();
        this._txtGem.setName("_txtGem");
        this._layoutGem.addChild(this._txtGem);
        this._txtGem.setCascadeOpacityEnabled(true);
        this._txtGem.setCascadeColorEnabled(true);
        this._txtGem.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGem, 0.844, 0.5);
        this._txtGem.setTextColor(cc.color(224, 129, 255, 255));
        let _txtGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGem);
        _txtGemLayoutComponent.setPositionPercentXEnabled(true);
        _txtGemLayoutComponent.setPositionPercentX(0.844);
        _txtGemLayoutComponent.setPositionPercentYEnabled(true);
        _txtGemLayoutComponent.setPositionPercentY(0.5);
        this._txtGem.setTouchEnabled(false);
        this._txtGem.setUnifySizeEnabled(false);
        this._txtGem.ignoreContentAdaptWithSize(false);
        this._txtGem.setContentSize(cc.size(170, 37));
        this._txtGem.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGem.setDefaultFontSize(32);
        this._txtGem.setTextHorizontalAlignment(2);
        this._txtGem.setTextVerticalAlignment(1);
        this._txtGem.autoFitSingleLine();

        ///// # _btnAddGem
        this._btnAddGem = new ccui.Button();
        this._btnAddGem.setName("_btnAddGem");
        this._layoutGem.addChild(this._btnAddGem);
        this._btnAddGem.setCascadeOpacityEnabled(true);
        this._btnAddGem.setCascadeColorEnabled(true);
        this._btnAddGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAddGem, 0.925, 0.46);
        let _btnAddGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddGem);
        _btnAddGemLayoutComponent.setPositionPercentXEnabled(true);
        _btnAddGemLayoutComponent.setPositionPercentX(0.925);
        _btnAddGemLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddGemLayoutComponent.setPositionPercentY(0.46);
        this._btnAddGem.loadTextureDisabled("buttons/rectangles/Add.png", 1);
        this._btnAddGem.loadTexturePressed("buttons/rectangles/Add.png", 1);
        this._btnAddGem.loadTextureNormal("buttons/rectangles/Add.png", 1);
        this._btnAddGem.setUnifySizeEnabled(false);
        this._btnAddGem.ignoreContentAdaptWithSize(false);
        this._btnAddGem.setContentSize(cc.size(40, 40));
        this._btnAddGem.setTouchEnabled(true);

        ///// # _layoutCoin
        this._layoutCoin = new ccui.Layout();
        this._layoutCoin.setName("_layoutCoin");
        this._layoutUser.addChild(this._layoutCoin);
        this._layoutCoin.setCascadeOpacityEnabled(true);
        this._layoutCoin.setCascadeColorEnabled(true);
        this._layoutCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCoin, 0.7495, 0.7727);
        let _layoutCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCoin);
        _layoutCoinLayoutComponent.setHorizontalEdge(ccui.LayoutComponent.horizontalEdge.RIGHT);
        _layoutCoinLayoutComponent.setRightMargin(0);
        _layoutCoinLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
        _layoutCoinLayoutComponent.setTopMargin(0);
        this._layoutCoin.setTouchEnabled(true);
        this._layoutCoin.setUnifySizeEnabled(false);
        this._layoutCoin.ignoreContentAdaptWithSize(false);
        this._layoutCoin.setContentSize(cc.size(260, 50));

        ///// # _imgBackgroundCoin
        this._imgBackgroundCoin = new ccui.ImageView();
        this._imgBackgroundCoin.setName("_imgBackgroundCoin");
        this._layoutCoin.addChild(this._imgBackgroundCoin);
        this._imgBackgroundCoin.setCascadeOpacityEnabled(true);
        this._imgBackgroundCoin.setCascadeColorEnabled(true);
        this._imgBackgroundCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundCoin, 0.5, 0.5);
        let _imgBackgroundCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundCoin);
        _imgBackgroundCoinLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundCoinLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundCoinLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundCoinLayoutComponent.setPositionPercentY(0.5);
        this._imgBackgroundCoin.loadTexture("home/CurrencyBox.png", 1);
        this._imgBackgroundCoin.setUnifySizeEnabled(false);
        this._imgBackgroundCoin.ignoreContentAdaptWithSize(false);
        this._imgBackgroundCoin.setScale9Enabled(true);
        this._imgBackgroundCoin.setCapInsets(cc.rect(53, 8, 55, 9));
        this._imgBackgroundCoin.setContentSize(cc.size(230, 50));
        this._imgBackgroundCoin.setTouchEnabled(false);

        ///// # _imgCoinIcon
        this._imgCoinIcon = new ccui.ImageView();
        this._imgCoinIcon.setName("_imgCoinIcon");
        this._layoutCoin.addChild(this._imgCoinIcon);
        this._imgCoinIcon.setCascadeOpacityEnabled(true);
        this._imgCoinIcon.setCascadeColorEnabled(true);
        this._imgCoinIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCoinIcon, 0.09, 0.55);
        let _imgCoinIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCoinIcon);
        _imgCoinIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgCoinIconLayoutComponent.setPositionPercentX(0.09);
        _imgCoinIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgCoinIconLayoutComponent.setPositionPercentY(0.55);
        this._imgCoinIcon.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgCoinIcon.setUnifySizeEnabled(false);
        this._imgCoinIcon.ignoreContentAdaptWithSize(false);
        this._imgCoinIcon.setContentSize(cc.size(60, 60));
        this._imgCoinIcon.setTouchEnabled(false);

        ///// # _txtCoin
        this._txtCoin = new ck.Text();
        this._txtCoin.setName("_txtCoin");
        this._layoutCoin.addChild(this._txtCoin);
        this._txtCoin.setCascadeOpacityEnabled(true);
        this._txtCoin.setCascadeColorEnabled(true);
        this._txtCoin.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCoin, 0.844, 0.5);
        this._txtCoin.setTextColor(cc.color(247, 204, 89, 255));
        let _txtCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCoin);
        _txtCoinLayoutComponent.setPositionPercentXEnabled(true);
        _txtCoinLayoutComponent.setPositionPercentX(0.844);
        _txtCoinLayoutComponent.setPositionPercentYEnabled(true);
        _txtCoinLayoutComponent.setPositionPercentY(0.5);
        this._txtCoin.setTouchEnabled(false);
        this._txtCoin.setUnifySizeEnabled(false);
        this._txtCoin.ignoreContentAdaptWithSize(false);
        this._txtCoin.setContentSize(cc.size(170, 37));
        this._txtCoin.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCoin.setDefaultFontSize(32);
        this._txtCoin.setTextHorizontalAlignment(2);
        this._txtCoin.setTextVerticalAlignment(1);
        this._txtCoin.autoFitSingleLine();

        ///// # _btnAddCoin
        this._btnAddCoin = new ccui.Button();
        this._btnAddCoin.setName("_btnAddCoin");
        this._layoutCoin.addChild(this._btnAddCoin);
        this._btnAddCoin.setCascadeOpacityEnabled(true);
        this._btnAddCoin.setCascadeColorEnabled(true);
        this._btnAddCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAddCoin, 0.925, 0.46);
        let _btnAddCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddCoin);
        _btnAddCoinLayoutComponent.setPositionPercentXEnabled(true);
        _btnAddCoinLayoutComponent.setPositionPercentX(0.925);
        _btnAddCoinLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddCoinLayoutComponent.setPositionPercentY(0.46);
        this._btnAddCoin.loadTextureDisabled("buttons/rectangles/Add.png", 1);
        this._btnAddCoin.loadTexturePressed("buttons/rectangles/Add.png", 1);
        this._btnAddCoin.loadTextureNormal("buttons/rectangles/Add.png", 1);
        this._btnAddCoin.setUnifySizeEnabled(false);
        this._btnAddCoin.ignoreContentAdaptWithSize(false);
        this._btnAddCoin.setContentSize(cc.size(40, 40));
        this._btnAddCoin.setTouchEnabled(true);

        ///// # _layoutHistory
        this._layoutHistory = new ccui.Layout();
        this._layoutHistory.setName("_layoutHistory");
        this._layoutRoot.addChild(this._layoutHistory);
        this._layoutHistory.setCascadeOpacityEnabled(true);
        this._layoutHistory.setCascadeColorEnabled(true);
        let _layoutHistoryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHistory);
        _layoutHistoryLayoutComponent.setPercentWidthEnabled(true);
        _layoutHistoryLayoutComponent.setPercentWidth(1);
        _layoutHistoryLayoutComponent.setPercentHeightEnabled(true);
        _layoutHistoryLayoutComponent.setPercentHeight(0.13);
        this._layoutHistory.setTouchEnabled(false);
        this._layoutHistory.setUnifySizeEnabled(false);
        this._layoutHistory.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutHistory, 1, 0.13);

        ///// # _nodeTitleHistory
        this._nodeTitleHistory = new cc.Node();
        this._nodeTitleHistory.setName("_nodeTitleHistory");
        this._layoutHistory.addChild(this._nodeTitleHistory);
        this._nodeTitleHistory.setCascadeOpacityEnabled(true);
        this._nodeTitleHistory.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeTitleHistory, 0.5, 0.87);
        let _nodeTitleHistoryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeTitleHistory);
        _nodeTitleHistoryLayoutComponent.setPositionPercentXEnabled(true);
        _nodeTitleHistoryLayoutComponent.setPositionPercentX(0.5);
        _nodeTitleHistoryLayoutComponent.setPositionPercentYEnabled(true);
        _nodeTitleHistoryLayoutComponent.setPositionPercentY(0.87);

        ///// # _txtTitleHistory
        this._txtTitleHistory = new ck.Text();
        this._txtTitleHistory.setName("_txtTitleHistory");
        this._nodeTitleHistory.addChild(this._txtTitleHistory);
        this._txtTitleHistory.setCascadeOpacityEnabled(true);
        this._txtTitleHistory.setCascadeColorEnabled(true);
        this._txtTitleHistory.setAnchorPoint(cc.p(0.5, 0.5));
        let _txtTitleHistoryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitleHistory);
        this._txtTitleHistory.setTouchEnabled(false);
        this._txtTitleHistory.setUnifySizeEnabled(false);
        this._txtTitleHistory.ignoreContentAdaptWithSize(false);
        this._txtTitleHistory.setContentSize(cc.size(220, 47));
        this._txtTitleHistory.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTitleHistory.setDefaultFontSize(40);
        this._txtTitleHistory.setString(gm.localize.getText("TXT_HISTORY").toUpperCase());
        this._txtTitleHistory.setTextHorizontalAlignment(1);
        this._txtTitleHistory.setTextVerticalAlignment(1);
        this._txtTitleHistory.enableOutline(cc.color(0, 0, 0, 255), 1);
        this._txtTitleHistory.enableShadow(cc.color(0, 0, 0, 255), cc.size(0, -2), 0);
        this._txtTitleHistory.autoFitSingleLine();

        ///// # _imgDecorTitleHistory00
        this._imgDecorTitleHistory00 = new ccui.ImageView();
        this._imgDecorTitleHistory00.setName("_imgDecorTitleHistory00");
        this._nodeTitleHistory.addChild(this._imgDecorTitleHistory00);
        this._imgDecorTitleHistory00.setCascadeOpacityEnabled(true);
        this._imgDecorTitleHistory00.setCascadeColorEnabled(true);
        this._imgDecorTitleHistory00.setAnchorPoint(cc.p(1, 0.5));
        this._imgDecorTitleHistory00.setPosition(-115, 0);
        let _imgDecorTitleHistory00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDecorTitleHistory00);
        this._imgDecorTitleHistory00.loadTexture("dual-wheel/Line.png", 1);
        this._imgDecorTitleHistory00.setUnifySizeEnabled(false);
        this._imgDecorTitleHistory00.ignoreContentAdaptWithSize(false);
        this._imgDecorTitleHistory00.setContentSize(cc.size(205, 13));
        this._imgDecorTitleHistory00.setTouchEnabled(false);

        ///// # _imgDecorTitleHistory01
        this._imgDecorTitleHistory01 = new ccui.ImageView();
        this._imgDecorTitleHistory01.setName("_imgDecorTitleHistory01");
        this._nodeTitleHistory.addChild(this._imgDecorTitleHistory01);
        this._imgDecorTitleHistory01.setCascadeOpacityEnabled(true);
        this._imgDecorTitleHistory01.setCascadeColorEnabled(true);
        this._imgDecorTitleHistory01.setAnchorPoint(cc.p(1, 0.5));
        this._imgDecorTitleHistory01.setPosition(115, 0);
        this._imgDecorTitleHistory01.setFlippedX(true);
        let _imgDecorTitleHistory01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDecorTitleHistory01);
        this._imgDecorTitleHistory01.loadTexture("dual-wheel/Line.png", 1);
        this._imgDecorTitleHistory01.setUnifySizeEnabled(false);
        this._imgDecorTitleHistory01.ignoreContentAdaptWithSize(false);
        this._imgDecorTitleHistory01.setContentSize(cc.size(205, 13));
        this._imgDecorTitleHistory01.setTouchEnabled(false);
        this._imgDecorTitleHistory01.setFlippedX(true);

        ///// # _scrollViewHistory
        this._scrollViewHistory = new ccui.ScrollView();
        this._scrollViewHistory.setName("_scrollViewHistory");
        this._layoutHistory.addChild(this._scrollViewHistory);
        this._scrollViewHistory.setCascadeOpacityEnabled(true);
        this._scrollViewHistory.setCascadeColorEnabled(true);
        this._scrollViewHistory.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._scrollViewHistory, 0.5, 0.73);
        let _scrollViewHistoryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._scrollViewHistory);
        _scrollViewHistoryLayoutComponent.setPositionPercentYEnabled(true);
        _scrollViewHistoryLayoutComponent.setPositionPercentY(0.73);
        _scrollViewHistoryLayoutComponent.setPercentWidthEnabled(true);
        _scrollViewHistoryLayoutComponent.setPercentWidth(1);
        _scrollViewHistoryLayoutComponent.setPercentHeightEnabled(true);
        _scrollViewHistoryLayoutComponent.setPercentHeight(0.73);
        this._scrollViewHistory.setTouchEnabled(true);
        this._scrollViewHistory.setUnifySizeEnabled(false);
        this._scrollViewHistory.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._scrollViewHistory, 1, 0.73);
        this._scrollViewHistory.setInnerContainerSize(cc.size(640, 107));
        this._scrollViewHistory.setDirection(1);

        ///// # _txtHistory
        this._txtHistory = new ck.CustomRichTextExtend(cc.size(576, 93.522));
        this._txtHistory.setName("_txtHistory");
        this._scrollViewHistory.addChild(this._txtHistory);
        this._txtHistory.setCascadeOpacityEnabled(true);
        this._txtHistory.setCascadeColorEnabled(true);
        this._txtHistory.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._txtHistory, 0.5, 0.9156);
        let _txtHistoryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHistory);
        _txtHistoryLayoutComponent.setPositionPercentXEnabled(true);
        _txtHistoryLayoutComponent.setPositionPercentX(0.5);
        _txtHistoryLayoutComponent.setPositionPercentYEnabled(true);
        _txtHistoryLayoutComponent.setPositionPercentY(0.9156);
        _txtHistoryLayoutComponent.setPercentWidthEnabled(true);
        _txtHistoryLayoutComponent.setPercentWidth(0.9);
        _txtHistoryLayoutComponent.setPercentHeightEnabled(true);
        _txtHistoryLayoutComponent.setPercentHeight(0.8675);
        this._txtHistory.setTouchEnabled(false);
        this._txtHistory.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtHistory.setDefaultSize(30);
        this._txtHistory.setDefaultAlignHorizontal(2);
        this._txtHistory.setDefaultAlignVertical(4);

        ///// # _layoutItemSpawn
        this._layoutItemSpawn = new ccui.Layout();
        this._layoutItemSpawn.setName("_layoutItemSpawn");
        this._layoutRoot.addChild(this._layoutItemSpawn);
        this._layoutItemSpawn.setCascadeOpacityEnabled(true);
        this._layoutItemSpawn.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutItemSpawn, 0.0016, 0);
        let _layoutItemSpawnLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutItemSpawn);
        _layoutItemSpawnLayoutComponent.setPercentWidthEnabled(true);
        _layoutItemSpawnLayoutComponent.setPercentWidth(1);
        _layoutItemSpawnLayoutComponent.setPercentHeightEnabled(true);
        _layoutItemSpawnLayoutComponent.setPercentHeight(1);
        this._layoutItemSpawn.setTouchEnabled(false);
        this._layoutItemSpawn.setUnifySizeEnabled(false);
        this._layoutItemSpawn.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutItemSpawn, 1, 1);

        ///// # _layoutReward
        this._layoutReward = new ccui.Layout();
        this._layoutReward.setName("_layoutReward");
        this._layoutRoot.addChild(this._layoutReward);
        this._layoutReward.setCascadeOpacityEnabled(true);
        this._layoutReward.setCascadeColorEnabled(true);
        this._layoutReward.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutReward, 0.5, 0.7565);
        let _layoutRewardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutReward);
        _layoutRewardLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRewardLayoutComponent.setPositionPercentX(0.5);
        this._layoutReward.setTouchEnabled(false);
        this._layoutReward.setUnifySizeEnabled(false);
        this._layoutReward.ignoreContentAdaptWithSize(false);
        this._layoutReward.setContentSize(cc.size(430.6357, 147.6143));

        ///// # _imgBackgroundReward
        this._imgBackgroundReward = new ccui.ImageView();
        this._imgBackgroundReward.setName("_imgBackgroundReward");
        this._layoutReward.addChild(this._imgBackgroundReward);
        this._imgBackgroundReward.setCascadeOpacityEnabled(true);
        this._imgBackgroundReward.setCascadeColorEnabled(true);
        this._imgBackgroundReward.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgBackgroundReward, 0.5, 0);
        let _imgBackgroundRewardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundReward);
        _imgBackgroundRewardLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundRewardLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundRewardLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundRewardLayoutComponent.setPositionPercentY(0);
        this._imgBackgroundReward.loadTexture("dual-wheel/Number_Board.png", 1);
        this._imgBackgroundReward.setUnifySizeEnabled(false);
        this._imgBackgroundReward.ignoreContentAdaptWithSize(false);
        this._imgBackgroundReward.setContentSize(cc.size(379, 145));
        this._imgBackgroundReward.setTouchEnabled(false);

        ///// # _txtAmountReward
        this._txtAmountReward = new ck.Text();
        this._txtAmountReward.setName("_txtAmountReward");
        this._layoutReward.addChild(this._txtAmountReward);
        this._txtAmountReward.setCascadeOpacityEnabled(true);
        this._txtAmountReward.setCascadeColorEnabled(true);
        this._txtAmountReward.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmountReward, 0.57, 0.69);
        this._txtAmountReward.setTextColor(cc.color(255, 255, 0, 255));
        let _txtAmountRewardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmountReward);
        _txtAmountRewardLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountRewardLayoutComponent.setPositionPercentX(0.57);
        _txtAmountRewardLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountRewardLayoutComponent.setPositionPercentY(0.69);
        this._txtAmountReward.setTouchEnabled(false);
        this._txtAmountReward.ignoreContentAdaptWithSize(true);
        this._txtAmountReward.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAmountReward.setDefaultFontSize(52);
        this._txtAmountReward.setString("99.999.999");
        this._txtAmountReward.setTextHorizontalAlignment(0);
        this._txtAmountReward.setTextVerticalAlignment(0);

        ///// # _imgIconReward
        this._imgIconReward = new ccui.ImageView();
        this._imgIconReward.setName("_imgIconReward");
        this._txtAmountReward.addChild(this._imgIconReward);
        this._imgIconReward.setCascadeOpacityEnabled(true);
        this._imgIconReward.setCascadeColorEnabled(true);
        this._imgIconReward.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconReward, -0.0549, 0.5484);
        let _imgIconRewardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconReward);
        _imgIconRewardLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconRewardLayoutComponent.setPositionPercentY(0.5484);
        this._imgIconReward.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIconReward.setUnifySizeEnabled(false);
        this._imgIconReward.ignoreContentAdaptWithSize(false);
        this._imgIconReward.setContentSize(cc.size(70, 70));
        this._imgIconReward.setTouchEnabled(false);

        ///// # _spin
        this._spin = new WheelItem();
        this._spin.setName("_spin");
        this._layoutRoot.addChild(this._spin);
        this._spin.setCascadeOpacityEnabled(true);
        this._spin.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._spin, 0.5, 0.55);
        this._spin.setScale(0.9, 0.9);
        let _spinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spin);
        _spinLayoutComponent.setPositionPercentXEnabled(true);
        _spinLayoutComponent.setPositionPercentX(0.5);
        _spinLayoutComponent.setPositionPercentYEnabled(true);
        _spinLayoutComponent.setPositionPercentY(0.55);

        ///// # _spinX
        this._spinX = new WheelX();
        this._spinX.setName("_spinX");
        this._layoutRoot.addChild(this._spinX);
        this._spinX.setCascadeOpacityEnabled(true);
        this._spinX.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._spinX, 0.5, 0.55);
        this._spinX.setScale(0.9, 0.9);
        let _spinXLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spinX);
        _spinXLayoutComponent.setPositionPercentXEnabled(true);
        _spinXLayoutComponent.setPositionPercentX(0.5);
        _spinXLayoutComponent.setPositionPercentYEnabled(true);
        _spinXLayoutComponent.setPositionPercentY(0.55);

        ///// # _gridviewButtonTickets
        this._gridviewButtonTickets = new ck.GridViewHorizontal();
        this._gridviewButtonTickets.setName("_gridviewButtonTickets");
        this._layoutRoot.addChild(this._gridviewButtonTickets);
        this._gridviewButtonTickets.setCascadeOpacityEnabled(true);
        this._gridviewButtonTickets.setCascadeColorEnabled(true);
        this._gridviewButtonTickets.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridviewButtonTickets, 0.5, 0.2725);
        let _gridviewButtonTicketsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridviewButtonTickets);
        _gridviewButtonTicketsLayoutComponent.setPositionPercentXEnabled(true);
        _gridviewButtonTicketsLayoutComponent.setPositionPercentX(0.5);
        _gridviewButtonTicketsLayoutComponent.setPositionPercentYEnabled(true);
        _gridviewButtonTicketsLayoutComponent.setPositionPercentY(0.2725);

        ///// # _btnTicket00
        this._btnTicket00 = new ccui.Layout();
        this._btnTicket00.setName("_btnTicket00");
        this._gridviewButtonTickets.addChild(this._btnTicket00);
        this._btnTicket00.setCascadeOpacityEnabled(true);
        this._btnTicket00.setCascadeColorEnabled(true);
        this._btnTicket00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnTicket00, 0.15, 0.5);
        let _btnTicket00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnTicket00);
        _btnTicket00LayoutComponent.setPositionPercentXEnabled(true);
        _btnTicket00LayoutComponent.setPositionPercentX(0.15);
        _btnTicket00LayoutComponent.setPositionPercentYEnabled(true);
        _btnTicket00LayoutComponent.setPositionPercentY(0.5);
        this._btnTicket00.setTouchEnabled(true);
        this._btnTicket00.setUnifySizeEnabled(false);
        this._btnTicket00.ignoreContentAdaptWithSize(false);
        this._btnTicket00.setContentSize(cc.size(120, 60));

        ///// # _imgButtonTicket00
        this._imgButtonTicket00 = new ccui.ImageView();
        this._imgButtonTicket00.setName("_imgButtonTicket00");
        this._btnTicket00.addChild(this._imgButtonTicket00);
        this._imgButtonTicket00.setCascadeOpacityEnabled(true);
        this._imgButtonTicket00.setCascadeColorEnabled(true);
        this._imgButtonTicket00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonTicket00, 0.5, 0.5);
        let _imgButtonTicket00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonTicket00);
        _imgButtonTicket00LayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonTicket00LayoutComponent.setPositionPercentX(0.5);
        _imgButtonTicket00LayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonTicket00LayoutComponent.setPositionPercentY(0.5);
        _imgButtonTicket00LayoutComponent.setPercentWidthEnabled(true);
        _imgButtonTicket00LayoutComponent.setPercentWidth(1);
        _imgButtonTicket00LayoutComponent.setPercentHeightEnabled(true);
        _imgButtonTicket00LayoutComponent.setPercentHeight(1);
        this._imgButtonTicket00.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgButtonTicket00.setUnifySizeEnabled(false);
        this._imgButtonTicket00.ignoreContentAdaptWithSize(false);
        this._imgButtonTicket00.setScale9Enabled(true);
        this._imgButtonTicket00.setCapInsets(cc.rect(30, 18, 146, 45));
        ck.UIUtils.setSizePercent(this._imgButtonTicket00, 1, 1);
        this._imgButtonTicket00.setTouchEnabled(false);

        ///// # _imgIconTicket00
        this._imgIconTicket00 = new ccui.ImageView();
        this._imgIconTicket00.setName("_imgIconTicket00");
        this._btnTicket00.addChild(this._imgIconTicket00);
        this._imgIconTicket00.setCascadeOpacityEnabled(true);
        this._imgIconTicket00.setCascadeColorEnabled(true);
        this._imgIconTicket00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconTicket00, 0.83, 0.54);
        let _imgIconTicket00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconTicket00);
        _imgIconTicket00LayoutComponent.setPositionPercentXEnabled(true);
        _imgIconTicket00LayoutComponent.setPositionPercentX(0.83);
        _imgIconTicket00LayoutComponent.setPositionPercentYEnabled(true);
        _imgIconTicket00LayoutComponent.setPositionPercentY(0.54);
        this._imgIconTicket00.loadTexture("icons/color/tokens/DualWheelToken.png", 1);
        this._imgIconTicket00.setUnifySizeEnabled(false);
        this._imgIconTicket00.ignoreContentAdaptWithSize(false);
        this._imgIconTicket00.setContentSize(cc.size(40, 40));
        this._imgIconTicket00.setTouchEnabled(false);

        ///// # _txtButtonTicket00
        this._txtButtonTicket00 = new ck.Text();
        this._txtButtonTicket00.setName("_txtButtonTicket00");
        this._btnTicket00.addChild(this._txtButtonTicket00);
        this._txtButtonTicket00.setCascadeOpacityEnabled(true);
        this._txtButtonTicket00.setCascadeColorEnabled(true);
        this._txtButtonTicket00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonTicket00, 0.39, 0.54);
        this._txtButtonTicket00.setTextColor(cc.color(86, 47, 31, 255));
        let _txtButtonTicket00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonTicket00);
        _txtButtonTicket00LayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonTicket00LayoutComponent.setPositionPercentX(0.39);
        _txtButtonTicket00LayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonTicket00LayoutComponent.setPositionPercentY(0.54);
        this._txtButtonTicket00.setTouchEnabled(false);
        this._txtButtonTicket00.setUnifySizeEnabled(false);
        this._txtButtonTicket00.ignoreContentAdaptWithSize(false);
        this._txtButtonTicket00.setContentSize(cc.size(80, 34));
        this._txtButtonTicket00.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtButtonTicket00.setDefaultFontSize(30);
        this._txtButtonTicket00.setTextHorizontalAlignment(1);
        this._txtButtonTicket00.setTextVerticalAlignment(1);
        this._txtButtonTicket00.enableShadow(cc.color(110, 110, 110, 255), cc.size(0, -1), 0);
        this._txtButtonTicket00.autoFitSingleLine();

        ///// # _btnTicket01
        this._btnTicket01 = new ccui.Layout();
        this._btnTicket01.setName("_btnTicket01");
        this._gridviewButtonTickets.addChild(this._btnTicket01);
        this._btnTicket01.setCascadeOpacityEnabled(true);
        this._btnTicket01.setCascadeColorEnabled(true);
        this._btnTicket01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnTicket01, 0.5, 0.5);
        let _btnTicket01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnTicket01);
        _btnTicket01LayoutComponent.setPositionPercentXEnabled(true);
        _btnTicket01LayoutComponent.setPositionPercentX(0.5);
        _btnTicket01LayoutComponent.setPositionPercentYEnabled(true);
        _btnTicket01LayoutComponent.setPositionPercentY(0.5);
        this._btnTicket01.setTouchEnabled(true);
        this._btnTicket01.setUnifySizeEnabled(false);
        this._btnTicket01.ignoreContentAdaptWithSize(false);
        this._btnTicket01.setContentSize(cc.size(120, 60));

        ///// # _imgButtonTicket01
        this._imgButtonTicket01 = new ccui.ImageView();
        this._imgButtonTicket01.setName("_imgButtonTicket01");
        this._btnTicket01.addChild(this._imgButtonTicket01);
        this._imgButtonTicket01.setCascadeOpacityEnabled(true);
        this._imgButtonTicket01.setCascadeColorEnabled(true);
        this._imgButtonTicket01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonTicket01, 0.5, 0.5);
        let _imgButtonTicket01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonTicket01);
        _imgButtonTicket01LayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonTicket01LayoutComponent.setPositionPercentX(0.5);
        _imgButtonTicket01LayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonTicket01LayoutComponent.setPositionPercentY(0.5);
        _imgButtonTicket01LayoutComponent.setPercentWidthEnabled(true);
        _imgButtonTicket01LayoutComponent.setPercentWidth(1);
        _imgButtonTicket01LayoutComponent.setPercentHeightEnabled(true);
        _imgButtonTicket01LayoutComponent.setPercentHeight(1);
        this._imgButtonTicket01.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgButtonTicket01.setUnifySizeEnabled(false);
        this._imgButtonTicket01.ignoreContentAdaptWithSize(false);
        this._imgButtonTicket01.setScale9Enabled(true);
        this._imgButtonTicket01.setCapInsets(cc.rect(30, 18, 146, 45));
        ck.UIUtils.setSizePercent(this._imgButtonTicket01, 1, 1);
        this._imgButtonTicket01.setTouchEnabled(false);

        ///// # _imgIconTicket01
        this._imgIconTicket01 = new ccui.ImageView();
        this._imgIconTicket01.setName("_imgIconTicket01");
        this._btnTicket01.addChild(this._imgIconTicket01);
        this._imgIconTicket01.setCascadeOpacityEnabled(true);
        this._imgIconTicket01.setCascadeColorEnabled(true);
        this._imgIconTicket01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconTicket01, 0.83, 0.54);
        let _imgIconTicket01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconTicket01);
        _imgIconTicket01LayoutComponent.setPositionPercentXEnabled(true);
        _imgIconTicket01LayoutComponent.setPositionPercentX(0.83);
        _imgIconTicket01LayoutComponent.setPositionPercentYEnabled(true);
        _imgIconTicket01LayoutComponent.setPositionPercentY(0.54);
        this._imgIconTicket01.loadTexture("icons/color/tokens/DualWheelToken.png", 1);
        this._imgIconTicket01.setUnifySizeEnabled(false);
        this._imgIconTicket01.ignoreContentAdaptWithSize(false);
        this._imgIconTicket01.setContentSize(cc.size(40, 40));
        this._imgIconTicket01.setTouchEnabled(false);

        ///// # _txtButtonTicket01
        this._txtButtonTicket01 = new ck.Text();
        this._txtButtonTicket01.setName("_txtButtonTicket01");
        this._btnTicket01.addChild(this._txtButtonTicket01);
        this._txtButtonTicket01.setCascadeOpacityEnabled(true);
        this._txtButtonTicket01.setCascadeColorEnabled(true);
        this._txtButtonTicket01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonTicket01, 0.39, 0.54);
        this._txtButtonTicket01.setTextColor(cc.color(86, 47, 31, 255));
        let _txtButtonTicket01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonTicket01);
        _txtButtonTicket01LayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonTicket01LayoutComponent.setPositionPercentX(0.39);
        _txtButtonTicket01LayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonTicket01LayoutComponent.setPositionPercentY(0.54);
        this._txtButtonTicket01.setTouchEnabled(false);
        this._txtButtonTicket01.setUnifySizeEnabled(false);
        this._txtButtonTicket01.ignoreContentAdaptWithSize(false);
        this._txtButtonTicket01.setContentSize(cc.size(80, 34));
        this._txtButtonTicket01.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtButtonTicket01.setDefaultFontSize(30);
        this._txtButtonTicket01.setTextHorizontalAlignment(1);
        this._txtButtonTicket01.setTextVerticalAlignment(1);
        this._txtButtonTicket01.enableShadow(cc.color(110, 110, 110, 255), cc.size(0, -1), 0);
        this._txtButtonTicket01.autoFitSingleLine();

        ///// # _btnTicket02
        this._btnTicket02 = new ccui.Layout();
        this._btnTicket02.setName("_btnTicket02");
        this._gridviewButtonTickets.addChild(this._btnTicket02);
        this._btnTicket02.setCascadeOpacityEnabled(true);
        this._btnTicket02.setCascadeColorEnabled(true);
        this._btnTicket02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnTicket02, 0.85, 0.5);
        let _btnTicket02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnTicket02);
        _btnTicket02LayoutComponent.setPositionPercentXEnabled(true);
        _btnTicket02LayoutComponent.setPositionPercentX(0.85);
        _btnTicket02LayoutComponent.setPositionPercentYEnabled(true);
        _btnTicket02LayoutComponent.setPositionPercentY(0.5);
        this._btnTicket02.setTouchEnabled(true);
        this._btnTicket02.setUnifySizeEnabled(false);
        this._btnTicket02.ignoreContentAdaptWithSize(false);
        this._btnTicket02.setContentSize(cc.size(120, 60));

        ///// # _imgButtonTicket02
        this._imgButtonTicket02 = new ccui.ImageView();
        this._imgButtonTicket02.setName("_imgButtonTicket02");
        this._btnTicket02.addChild(this._imgButtonTicket02);
        this._imgButtonTicket02.setCascadeOpacityEnabled(true);
        this._imgButtonTicket02.setCascadeColorEnabled(true);
        this._imgButtonTicket02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButtonTicket02, 0.5, 0.5);
        let _imgButtonTicket02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButtonTicket02);
        _imgButtonTicket02LayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonTicket02LayoutComponent.setPositionPercentX(0.5);
        _imgButtonTicket02LayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonTicket02LayoutComponent.setPositionPercentY(0.5);
        _imgButtonTicket02LayoutComponent.setPercentWidthEnabled(true);
        _imgButtonTicket02LayoutComponent.setPercentWidth(1);
        _imgButtonTicket02LayoutComponent.setPercentHeightEnabled(true);
        _imgButtonTicket02LayoutComponent.setPercentHeight(1);
        this._imgButtonTicket02.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgButtonTicket02.setUnifySizeEnabled(false);
        this._imgButtonTicket02.ignoreContentAdaptWithSize(false);
        this._imgButtonTicket02.setScale9Enabled(true);
        this._imgButtonTicket02.setCapInsets(cc.rect(30, 18, 146, 45));
        ck.UIUtils.setSizePercent(this._imgButtonTicket02, 1, 1);
        this._imgButtonTicket02.setTouchEnabled(false);

        ///// # _imgIconTicket02
        this._imgIconTicket02 = new ccui.ImageView();
        this._imgIconTicket02.setName("_imgIconTicket02");
        this._btnTicket02.addChild(this._imgIconTicket02);
        this._imgIconTicket02.setCascadeOpacityEnabled(true);
        this._imgIconTicket02.setCascadeColorEnabled(true);
        this._imgIconTicket02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconTicket02, 0.83, 0.54);
        let _imgIconTicket02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconTicket02);
        _imgIconTicket02LayoutComponent.setPositionPercentXEnabled(true);
        _imgIconTicket02LayoutComponent.setPositionPercentX(0.83);
        _imgIconTicket02LayoutComponent.setPositionPercentYEnabled(true);
        _imgIconTicket02LayoutComponent.setPositionPercentY(0.54);
        this._imgIconTicket02.loadTexture("icons/color/tokens/DualWheelToken.png", 1);
        this._imgIconTicket02.setUnifySizeEnabled(false);
        this._imgIconTicket02.ignoreContentAdaptWithSize(false);
        this._imgIconTicket02.setContentSize(cc.size(40, 40));
        this._imgIconTicket02.setTouchEnabled(false);

        ///// # _txtButtonTicket02
        this._txtButtonTicket02 = new ck.Text();
        this._txtButtonTicket02.setName("_txtButtonTicket02");
        this._btnTicket02.addChild(this._txtButtonTicket02);
        this._txtButtonTicket02.setCascadeOpacityEnabled(true);
        this._txtButtonTicket02.setCascadeColorEnabled(true);
        this._txtButtonTicket02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButtonTicket02, 0.39, 0.54);
        this._txtButtonTicket02.setTextColor(cc.color(86, 47, 31, 255));
        let _txtButtonTicket02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButtonTicket02);
        _txtButtonTicket02LayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonTicket02LayoutComponent.setPositionPercentX(0.39);
        _txtButtonTicket02LayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonTicket02LayoutComponent.setPositionPercentY(0.54);
        this._txtButtonTicket02.setTouchEnabled(false);
        this._txtButtonTicket02.setUnifySizeEnabled(false);
        this._txtButtonTicket02.ignoreContentAdaptWithSize(false);
        this._txtButtonTicket02.setContentSize(cc.size(80, 34));
        this._txtButtonTicket02.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtButtonTicket02.setDefaultFontSize(30);
        this._txtButtonTicket02.setTextHorizontalAlignment(1);
        this._txtButtonTicket02.setTextVerticalAlignment(1);
        this._txtButtonTicket02.enableShadow(cc.color(110, 110, 110, 255), cc.size(0, -1), 0);
        this._txtButtonTicket02.autoFitSingleLine();

        ///// # _layoutTutorial
        this._layoutTutorial = new DualWheelTutorialPopup();
        this._layoutTutorial.setName("_layoutTutorial");
        this._layoutRoot.addChild(this._layoutTutorial);
        this._layoutTutorial.setCascadeOpacityEnabled(true);
        this._layoutTutorial.setCascadeColorEnabled(true);
        let _layoutTutorialLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTutorial);
        _layoutTutorialLayoutComponent.setPercentWidthEnabled(true);
        _layoutTutorialLayoutComponent.setPercentWidth(1);
        _layoutTutorialLayoutComponent.setPercentHeightEnabled(true);
        _layoutTutorialLayoutComponent.setPercentHeight(1);

        ///// # _itemInfoBubbleWidget
        this._itemInfoBubbleWidget = new ItemInfoBubbleWidget();
        this._itemInfoBubbleWidget.setName("_itemInfoBubbleWidget");
        this._layoutRoot.addChild(this._itemInfoBubbleWidget);
        this._itemInfoBubbleWidget.setCascadeOpacityEnabled(true);
        this._itemInfoBubbleWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._itemInfoBubbleWidget, 0.46, 0.3579);
        this._itemInfoBubbleWidget.setVisible(false);
        let _itemInfoBubbleWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._itemInfoBubbleWidget);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentX(0.46);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentY(0.3579);

        ///// # _blackBG
        this._blackBG = new ccui.Layout();
        this._blackBG.setName("_blackBG");
        this._layoutRoot.addChild(this._blackBG);
        this._blackBG.setCascadeOpacityEnabled(true);
        this._blackBG.setCascadeColorEnabled(true);
        this._blackBG.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._blackBG, 0.5, 0.5);
        let _blackBGLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._blackBG);
        _blackBGLayoutComponent.setPositionPercentXEnabled(true);
        _blackBGLayoutComponent.setPositionPercentX(0.5);
        _blackBGLayoutComponent.setPositionPercentYEnabled(true);
        _blackBGLayoutComponent.setPositionPercentY(0.5);
        _blackBGLayoutComponent.setPercentWidthEnabled(true);
        _blackBGLayoutComponent.setPercentWidth(1);
        _blackBGLayoutComponent.setPercentHeightEnabled(true);
        _blackBGLayoutComponent.setPercentHeight(1);
        this._blackBG.setTouchEnabled(true);
        this._blackBG.setUnifySizeEnabled(false);
        this._blackBG.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._blackBG, 1, 1);
        this._blackBG.setBackGroundColorType(1);
        this._blackBG.setBackGroundColor(cc.color(26, 26, 26, 255));
        this._blackBG.setBackGroundColorOpacity(153);

        ///// # _choicesGifts
        this._choicesGifts = new WheelXChoicesPopup();
        this._choicesGifts.setName("_choicesGifts");
        this._layoutRoot.addChild(this._choicesGifts);
        this._choicesGifts.setCascadeOpacityEnabled(true);
        this._choicesGifts.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._choicesGifts, 0.795, 0.5547);
        let _choicesGiftsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._choicesGifts);

        ///// # _popupNotEnoughToken
        this._popupNotEnoughToken = new DualWheelAlertDialog();
        this._popupNotEnoughToken.setName("_popupNotEnoughToken");
        this.addChild(this._popupNotEnoughToken);
        this._popupNotEnoughToken.setCascadeOpacityEnabled(true);
        this._popupNotEnoughToken.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._popupNotEnoughToken, 0.5, 0.5);
        this._popupNotEnoughToken.setVisible(false);
        let _popupNotEnoughTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._popupNotEnoughToken);
        _popupNotEnoughTokenLayoutComponent.setPositionPercentXEnabled(true);
        _popupNotEnoughTokenLayoutComponent.setPositionPercentX(0.5);
        _popupNotEnoughTokenLayoutComponent.setPositionPercentYEnabled(true);
        _popupNotEnoughTokenLayoutComponent.setPositionPercentY(0.5);

    },


    playCCSAnimBtnSpin: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimBtnSpin();
    
        let _glowIn00Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(40 / (60 * speed), 1.4, 1.7),
                    cc.scaleTo(140 / (60 * speed), 1.4, 1.7)
                ),
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(20 / (60 * speed), 0),
                    cc.fadeTo(150 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._glowIn00.setScale(1, 1);
                this._glowIn00.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _glowIn00Action = _glowIn00Action.repeatForever();
        } else _glowIn00Action = cc.sequence(
            cc.delayTime(delay),
            _glowIn00Action.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._glowIn00.runAction(_glowIn00Action);
    
        let _glowIn01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(16 / (60 * speed), 1, 1),
                    cc.scaleTo(40 / (60 * speed), 1.5, 2),
                    cc.scaleTo(124 / (60 * speed), 1.5, 2)
                ),
                cc.sequence(
                    cc.delayTime(56 / (60 * speed)),
                    cc.rotateBy(0 / (60 * speed), 0, 0),
                    cc.delayTime(124 / (60 * speed))
                ),
                cc.sequence(
                    cc.fadeTo(16 / (60 * speed), 0),
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(18 / (60 * speed), 0),
                    cc.fadeTo(136 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._glowIn01.setScale(1, 1);
                this._glowIn01.setRotation(0);
                this._glowIn01.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _glowIn01Action = _glowIn01Action.repeatForever();
        } else _glowIn01Action = cc.sequence(
            cc.delayTime(delay),
            _glowIn01Action.repeat(repeat)
        )
        
        this._glowIn01.runAction(_glowIn01Action);
    
        let _highlight00Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(120 / (60 * speed), -70, 31),
                    cc.moveTo(60 / (60 * speed), -70, 31)
                ),
                cc.sequence(
                    cc.scaleTo(40 / (60 * speed), 1.1, 0.7),
                    cc.scaleTo(80 / (60 * speed), 0.6, 0.3),
                    cc.scaleTo(60 / (60 * speed), 0.6, 0.3)
                ),
                cc.sequence(
                    cc.fadeTo(20 / (60 * speed), 255),
                    cc.fadeTo(50 / (60 * speed), 255),
                    cc.fadeTo(30 / (60 * speed), 0),
                    cc.fadeTo(80 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._highlight00.setPosition(60, 31);
                this._highlight00.setScale(0.4, 0.7);
                this._highlight00.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _highlight00Action = _highlight00Action.repeatForever();
        } else _highlight00Action = cc.sequence(
            cc.delayTime(delay),
            _highlight00Action.repeat(repeat)
        )
        
        this._highlight00.runAction(_highlight00Action);
    
        let _highlight01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(120 / (60 * speed), 70, -31),
                    cc.moveTo(60 / (60 * speed), 70, -31)
                ),
                cc.sequence(
                    cc.scaleTo(40 / (60 * speed), 1.1, -0.7),
                    cc.scaleTo(80 / (60 * speed), 0.6, -0.3),
                    cc.scaleTo(60 / (60 * speed), 0.6, -0.3)
                ),
                cc.sequence(
                    cc.fadeTo(20 / (60 * speed), 255),
                    cc.fadeTo(50 / (60 * speed), 255),
                    cc.fadeTo(30 / (60 * speed), 0),
                    cc.fadeTo(80 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._highlight01.setPosition(-60, -31);
                this._highlight01.setScale(0.4, -0.7);
                this._highlight01.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _highlight01Action = _highlight01Action.repeatForever();
        } else _highlight01Action = cc.sequence(
            cc.delayTime(delay),
            _highlight01Action.repeat(repeat)
        )
        
        this._highlight01.runAction(_highlight01Action);
    },

    resetCCSAnimBtnSpin: function () {
        this._glowIn00.stopAllActions();
        this._glowIn00.setScale(1, 1);
        this._glowIn00.setOpacity(0);
    
        this._glowIn01.stopAllActions();
        this._glowIn01.setScale(1, 1);
        this._glowIn01.setRotation(0);
        this._glowIn01.setOpacity(0);
    
        this._highlight00.stopAllActions();
        this._highlight00.setPosition(60, 31);
        this._highlight00.setScale(0.4, 0.7);
        this._highlight00.setOpacity(0);
    
        this._highlight01.stopAllActions();
        this._highlight01.setPosition(-60, -31);
        this._highlight01.setScale(0.4, -0.7);
        this._highlight01.setOpacity(0);
    }
});

/**
 * Create WheelX2Layer
 * @returns {_ccs.WheelX2Layer}
 */
_ccs.WheelX2Layer.create = function () {
    return new _ccs.WheelX2Layer();
};
