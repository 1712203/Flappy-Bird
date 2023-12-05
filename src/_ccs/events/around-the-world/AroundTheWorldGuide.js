/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.AroundTheWorldGuide
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.AroundTheWorldGuide = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.Layout} */
    _layoutStep01: null,
    /** @type {ccui.ImageView} */
    _imgStep01: null,
    /** @type {ccui.ImageView} */
    _imgClover01: null,
    /** @type {ccui.ImageView} */
    _imgStep01Text: null,
    /** @type {ccui.ImageView} */
    _imgCard01: null,
    /** @type {cc.Sprite} */
    _arrow01: null,
    /** @type {ck.Text} */
    _txtStep01: null,
    /** @type {ccui.Layout} */
    _layoutStep02: null,
    /** @type {ccui.ImageView} */
    _imgStep02: null,
    /** @type {ccui.ImageView} */
    _imgClover02: null,
    /** @type {cc.Node} */
    _nodePlane02: null,
    /** @type {ccui.ImageView} */
    _imgStep02Text: null,
    /** @type {cc.Sprite} */
    _arrow02: null,
    /** @type {ck.Text} */
    _txtStep02: null,
    /** @type {ccui.Layout} */
    _layoutStep03: null,
    /** @type {ccui.ImageView} */
    _imgStep03: null,
    /** @type {ccui.ImageView} */
    _imgParis: null,
    /** @type {Glow} */
    _glow: null,
    /** @type {ccui.ImageView} */
    _imgParisText: null,
    /** @type {ccui.ImageView} */
    _imgStep03Text: null,
    /** @type {ccui.ImageView} */
    _imgReward: null,
    /** @type {cc.Sprite} */
    _arrow03: null,
    /** @type {ck.Text} */
    _txtStep03: null,
    /** @type {cc.Node} */
    _nodePlane03: null,
    /** @type {ck.Text} */
    _txtTapToClose: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ccui.ImageView} */
    _imgHeaderText: null,


    /**
     * _ccs.AroundTheWorldGuide constructor
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

        ///// # _root
        this._root = new ccui.Layout();
        this._root.setName("_root");
        this.addChild(this._root);
        this._root.setCascadeOpacityEnabled(true);
        this._root.setCascadeColorEnabled(true);
        this._root.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._root, 0.5, 0.5);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        _rootLayoutComponent.setPositionPercentXEnabled(true);
        _rootLayoutComponent.setPositionPercentX(0.5);
        _rootLayoutComponent.setPositionPercentYEnabled(true);
        _rootLayoutComponent.setPositionPercentY(0.5);
        _rootLayoutComponent.setPercentWidthEnabled(true);
        _rootLayoutComponent.setPercentWidth(1);
        _rootLayoutComponent.setPercentHeightEnabled(true);
        _rootLayoutComponent.setPercentHeight(1);
        this._root.setTouchEnabled(false);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._root, 1, 1);

        ///// # _layoutStep01
        this._layoutStep01 = new ccui.Layout();
        this._layoutStep01.setName("_layoutStep01");
        this._root.addChild(this._layoutStep01);
        this._layoutStep01.setCascadeOpacityEnabled(true);
        this._layoutStep01.setCascadeColorEnabled(true);
        this._layoutStep01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutStep01, 0.2656, 0.6054);
        let _layoutStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutStep01);
        _layoutStep01LayoutComponent.setPositionPercentXEnabled(true);
        _layoutStep01LayoutComponent.setPositionPercentX(0.2656);
        _layoutStep01LayoutComponent.setPositionPercentYEnabled(true);
        _layoutStep01LayoutComponent.setPositionPercentY(0.6054);
        this._layoutStep01.setTouchEnabled(true);
        this._layoutStep01.setUnifySizeEnabled(false);
        this._layoutStep01.ignoreContentAdaptWithSize(false);
        this._layoutStep01.setContentSize(cc.size(263, 263));

        ///// # _imgStep01
        this._imgStep01 = new ccui.ImageView();
        this._imgStep01.setName("_imgStep01");
        this._layoutStep01.addChild(this._imgStep01);
        this._imgStep01.setCascadeOpacityEnabled(true);
        this._imgStep01.setCascadeColorEnabled(true);
        this._imgStep01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStep01, 0.5, 0.5);
        this._imgStep01.setColor(cc.color(1, 81, 142, 255));
        let _imgStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep01);
        _imgStep01LayoutComponent.setPositionPercentXEnabled(true);
        _imgStep01LayoutComponent.setPositionPercentX(0.5);
        _imgStep01LayoutComponent.setPositionPercentYEnabled(true);
        _imgStep01LayoutComponent.setPositionPercentY(0.5);
        _imgStep01LayoutComponent.setPercentWidthEnabled(true);
        _imgStep01LayoutComponent.setPercentWidth(1);
        _imgStep01LayoutComponent.setPercentHeightEnabled(true);
        _imgStep01LayoutComponent.setPercentHeight(1);
        this._imgStep01.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgStep01.setUnifySizeEnabled(false);
        this._imgStep01.ignoreContentAdaptWithSize(false);
        this._imgStep01.setScale9Enabled(true);
        this._imgStep01.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgStep01, 1, 1);
        this._imgStep01.setTouchEnabled(false);

        ///// # _imgClover01
        this._imgClover01 = new ccui.ImageView();
        this._imgClover01.setName("_imgClover01");
        this._layoutStep01.addChild(this._imgClover01);
        this._imgClover01.setCascadeOpacityEnabled(true);
        this._imgClover01.setCascadeColorEnabled(true);
        this._imgClover01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClover01, 0.7653, 0.7156);
        let _imgClover01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClover01);
        _imgClover01LayoutComponent.setPositionPercentXEnabled(true);
        _imgClover01LayoutComponent.setPositionPercentX(0.7653);
        _imgClover01LayoutComponent.setPositionPercentYEnabled(true);
        _imgClover01LayoutComponent.setPositionPercentY(0.7156);
        this._imgClover01.loadTexture("icons/color/tokens/Clover.png", 1);
        this._imgClover01.setUnifySizeEnabled(false);
        this._imgClover01.ignoreContentAdaptWithSize(false);
        this._imgClover01.setContentSize(cc.size(100, 100));
        this._imgClover01.setTouchEnabled(false);

        ///// # _imgStep01Text
        this._imgStep01Text = new ccui.ImageView();
        this._imgStep01Text.setName("_imgStep01Text");
        this._layoutStep01.addChild(this._imgStep01Text);
        this._imgStep01Text.setCascadeOpacityEnabled(true);
        this._imgStep01Text.setCascadeColorEnabled(true);
        this._imgStep01Text.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgStep01Text, 0.5, 0.0296);
        this._imgStep01Text.setOpacity(127);
        this._imgStep01Text.setColor(cc.color(0, 0, 0, 255));
        let _imgStep01TextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep01Text);
        _imgStep01TextLayoutComponent.setPositionPercentXEnabled(true);
        _imgStep01TextLayoutComponent.setPositionPercentX(0.5);
        _imgStep01TextLayoutComponent.setPositionPercentYEnabled(true);
        _imgStep01TextLayoutComponent.setPositionPercentY(0.0296);
        _imgStep01TextLayoutComponent.setPercentWidthEnabled(true);
        _imgStep01TextLayoutComponent.setPercentWidth(0.944);
        this._imgStep01Text.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgStep01Text.setUnifySizeEnabled(false);
        this._imgStep01Text.ignoreContentAdaptWithSize(false);
        this._imgStep01Text.setScale9Enabled(true);
        this._imgStep01Text.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setWidthPercent(this._imgStep01Text, 0.944);
        this._imgStep01Text.setContentSize(cc.size(this._imgStep01Text.width, 100));
        this._imgStep01Text.setTouchEnabled(false);

        ///// # _imgCard01
        this._imgCard01 = new ccui.ImageView();
        this._imgCard01.setName("_imgCard01");
        this._layoutStep01.addChild(this._imgCard01);
        this._imgCard01.setCascadeOpacityEnabled(true);
        this._imgCard01.setCascadeColorEnabled(true);
        this._imgCard01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCard01, 0.2277, 0.6921);
        let _imgCard01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard01);
        _imgCard01LayoutComponent.setPositionPercentXEnabled(true);
        _imgCard01LayoutComponent.setPositionPercentX(0.2277);
        _imgCard01LayoutComponent.setPositionPercentYEnabled(true);
        _imgCard01LayoutComponent.setPositionPercentY(0.6921);
        this._imgCard01.loadTexture("icons/color/basic/Quest.png", 1);
        this._imgCard01.setUnifySizeEnabled(false);
        this._imgCard01.ignoreContentAdaptWithSize(false);
        this._imgCard01.setContentSize(cc.size(64, 64));
        this._imgCard01.setTouchEnabled(false);

        ///// # _arrow01
        this._arrow01 = new cc.Sprite();
        this._arrow01.setName("_arrow01");
        this._layoutStep01.addChild(this._arrow01);
        this._arrow01.setCascadeOpacityEnabled(true);
        this._arrow01.setCascadeColorEnabled(true);
        this._arrow01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._arrow01, 0.5, 0.6901);
        this._arrow01.setRotation(-90);
        let _arrow01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._arrow01);
        _arrow01LayoutComponent.setPositionPercentXEnabled(true);
        _arrow01LayoutComponent.setPositionPercentX(0.5);
        _arrow01LayoutComponent.setPositionPercentYEnabled(true);
        _arrow01LayoutComponent.setPositionPercentY(0.6901);
        let sf = cc.spriteFrameCache.getSpriteFrame("icons/flat/ArrowDown.png"); if (sf) this._arrow01.setSpriteFrame(sf);
        let _arrow01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _arrow01BlendFunc.src = 1;
        _arrow01BlendFunc.dst = 771;
        this._arrow01.setBlendFunc(_arrow01BlendFunc);

        ///// # _txtStep01
        this._txtStep01 = new ck.Text();
        this._txtStep01.setName("_txtStep01");
        this._layoutStep01.addChild(this._txtStep01);
        this._txtStep01.setCascadeOpacityEnabled(true);
        this._txtStep01.setCascadeColorEnabled(true);
        this._txtStep01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtStep01, 0.5, 0.2072);
        let _txtStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep01);
        _txtStep01LayoutComponent.setPositionPercentXEnabled(true);
        _txtStep01LayoutComponent.setPositionPercentX(0.5);
        _txtStep01LayoutComponent.setPositionPercentYEnabled(true);
        _txtStep01LayoutComponent.setPositionPercentY(0.2072);
        this._txtStep01.setTouchEnabled(false);
        this._txtStep01.ignoreContentAdaptWithSize(true);
        this._txtStep01.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtStep01.setDefaultFontSize(20);
        this._txtStep01.setString(gm.localize.getText("TXT_AROUND_THE_WORLD_STEP_01"));
        this._txtStep01.setTextHorizontalAlignment(1);
        this._txtStep01.setTextVerticalAlignment(1);

        ///// # _layoutStep02
        this._layoutStep02 = new ccui.Layout();
        this._layoutStep02.setName("_layoutStep02");
        this._root.addChild(this._layoutStep02);
        this._layoutStep02.setCascadeOpacityEnabled(true);
        this._layoutStep02.setCascadeColorEnabled(true);
        this._layoutStep02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutStep02, 0.74, 0.6054);
        let _layoutStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutStep02);
        _layoutStep02LayoutComponent.setPositionPercentXEnabled(true);
        _layoutStep02LayoutComponent.setPositionPercentX(0.74);
        _layoutStep02LayoutComponent.setPositionPercentYEnabled(true);
        _layoutStep02LayoutComponent.setPositionPercentY(0.6054);
        this._layoutStep02.setTouchEnabled(true);
        this._layoutStep02.setUnifySizeEnabled(false);
        this._layoutStep02.ignoreContentAdaptWithSize(false);
        this._layoutStep02.setContentSize(cc.size(263, 263));

        ///// # _imgStep02
        this._imgStep02 = new ccui.ImageView();
        this._imgStep02.setName("_imgStep02");
        this._layoutStep02.addChild(this._imgStep02);
        this._imgStep02.setCascadeOpacityEnabled(true);
        this._imgStep02.setCascadeColorEnabled(true);
        this._imgStep02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStep02, 0.5, 0.5);
        this._imgStep02.setColor(cc.color(1, 81, 142, 255));
        let _imgStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep02);
        _imgStep02LayoutComponent.setPositionPercentXEnabled(true);
        _imgStep02LayoutComponent.setPositionPercentX(0.5);
        _imgStep02LayoutComponent.setPositionPercentYEnabled(true);
        _imgStep02LayoutComponent.setPositionPercentY(0.5);
        _imgStep02LayoutComponent.setPercentWidthEnabled(true);
        _imgStep02LayoutComponent.setPercentWidth(1);
        _imgStep02LayoutComponent.setPercentHeightEnabled(true);
        _imgStep02LayoutComponent.setPercentHeight(1);
        this._imgStep02.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgStep02.setUnifySizeEnabled(false);
        this._imgStep02.ignoreContentAdaptWithSize(false);
        this._imgStep02.setScale9Enabled(true);
        this._imgStep02.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgStep02, 1, 1);
        this._imgStep02.setTouchEnabled(false);

        ///// # _imgClover02
        this._imgClover02 = new ccui.ImageView();
        this._imgClover02.setName("_imgClover02");
        this._layoutStep02.addChild(this._imgClover02);
        this._imgClover02.setCascadeOpacityEnabled(true);
        this._imgClover02.setCascadeColorEnabled(true);
        this._imgClover02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClover02, 0.2325, 0.6988);
        let _imgClover02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClover02);
        _imgClover02LayoutComponent.setPositionPercentXEnabled(true);
        _imgClover02LayoutComponent.setPositionPercentX(0.2325);
        _imgClover02LayoutComponent.setPositionPercentYEnabled(true);
        _imgClover02LayoutComponent.setPositionPercentY(0.6988);
        this._imgClover02.loadTexture("icons/color/tokens/Clover.png", 1);
        this._imgClover02.setUnifySizeEnabled(false);
        this._imgClover02.ignoreContentAdaptWithSize(false);
        this._imgClover02.setContentSize(cc.size(100, 100));
        this._imgClover02.setTouchEnabled(false);

        ///// # _nodePlane02
        this._nodePlane02 = new cc.Node();
        this._nodePlane02.setName("_nodePlane02");
        this._layoutStep02.addChild(this._nodePlane02);
        this._nodePlane02.setCascadeOpacityEnabled(true);
        this._nodePlane02.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodePlane02, 0.7574, 0.5173);
        let _nodePlane02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodePlane02);

        ///// # _imgStep02Text
        this._imgStep02Text = new ccui.ImageView();
        this._imgStep02Text.setName("_imgStep02Text");
        this._layoutStep02.addChild(this._imgStep02Text);
        this._imgStep02Text.setCascadeOpacityEnabled(true);
        this._imgStep02Text.setCascadeColorEnabled(true);
        this._imgStep02Text.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgStep02Text, 0.5, 0.0296);
        this._imgStep02Text.setOpacity(127);
        this._imgStep02Text.setColor(cc.color(0, 0, 0, 255));
        let _imgStep02TextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep02Text);
        _imgStep02TextLayoutComponent.setPositionPercentXEnabled(true);
        _imgStep02TextLayoutComponent.setPositionPercentX(0.5);
        _imgStep02TextLayoutComponent.setPositionPercentYEnabled(true);
        _imgStep02TextLayoutComponent.setPositionPercentY(0.0296);
        _imgStep02TextLayoutComponent.setPercentWidthEnabled(true);
        _imgStep02TextLayoutComponent.setPercentWidth(0.944);
        this._imgStep02Text.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgStep02Text.setUnifySizeEnabled(false);
        this._imgStep02Text.ignoreContentAdaptWithSize(false);
        this._imgStep02Text.setScale9Enabled(true);
        this._imgStep02Text.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setWidthPercent(this._imgStep02Text, 0.944);
        this._imgStep02Text.setContentSize(cc.size(this._imgStep02Text.width, 100));
        this._imgStep02Text.setTouchEnabled(false);

        ///// # _arrow02
        this._arrow02 = new cc.Sprite();
        this._arrow02.setName("_arrow02");
        this._layoutStep02.addChild(this._arrow02);
        this._arrow02.setCascadeOpacityEnabled(true);
        this._arrow02.setCascadeColorEnabled(true);
        this._arrow02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._arrow02, 0.5, 0.6901);
        this._arrow02.setRotation(-90);
        let _arrow02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._arrow02);
        _arrow02LayoutComponent.setPositionPercentXEnabled(true);
        _arrow02LayoutComponent.setPositionPercentX(0.5);
        _arrow02LayoutComponent.setPositionPercentYEnabled(true);
        _arrow02LayoutComponent.setPositionPercentY(0.6901);
        let sf = cc.spriteFrameCache.getSpriteFrame("icons/flat/ArrowDown.png"); if (sf) this._arrow02.setSpriteFrame(sf);
        let _arrow02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _arrow02BlendFunc.src = 1;
        _arrow02BlendFunc.dst = 771;
        this._arrow02.setBlendFunc(_arrow02BlendFunc);

        ///// # _txtStep02
        this._txtStep02 = new ck.Text();
        this._txtStep02.setName("_txtStep02");
        this._layoutStep02.addChild(this._txtStep02);
        this._txtStep02.setCascadeOpacityEnabled(true);
        this._txtStep02.setCascadeColorEnabled(true);
        this._txtStep02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtStep02, 0.5, 0.2072);
        let _txtStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep02);
        _txtStep02LayoutComponent.setPositionPercentXEnabled(true);
        _txtStep02LayoutComponent.setPositionPercentX(0.5);
        _txtStep02LayoutComponent.setPositionPercentYEnabled(true);
        _txtStep02LayoutComponent.setPositionPercentY(0.2072);
        this._txtStep02.setTouchEnabled(false);
        this._txtStep02.ignoreContentAdaptWithSize(true);
        this._txtStep02.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtStep02.setDefaultFontSize(20);
        this._txtStep02.setString(gm.localize.getText("TXT_AROUND_THE_WORLD_STEP_02"));
        this._txtStep02.setTextHorizontalAlignment(1);
        this._txtStep02.setTextVerticalAlignment(1);

        ///// # _layoutStep03
        this._layoutStep03 = new ccui.Layout();
        this._layoutStep03.setName("_layoutStep03");
        this._root.addChild(this._layoutStep03);
        this._layoutStep03.setCascadeOpacityEnabled(true);
        this._layoutStep03.setCascadeColorEnabled(true);
        this._layoutStep03.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutStep03, 0.5111, 0.4666);
        let _layoutStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutStep03);
        _layoutStep03LayoutComponent.setPositionPercentXEnabled(true);
        _layoutStep03LayoutComponent.setPositionPercentX(0.5111);
        _layoutStep03LayoutComponent.setPositionPercentYEnabled(true);
        _layoutStep03LayoutComponent.setPositionPercentY(0.4666);
        this._layoutStep03.setTouchEnabled(true);
        this._layoutStep03.setUnifySizeEnabled(false);
        this._layoutStep03.ignoreContentAdaptWithSize(false);
        this._layoutStep03.setContentSize(cc.size(555.6145, 380.2295));

        ///// # _imgStep03
        this._imgStep03 = new ccui.ImageView();
        this._imgStep03.setName("_imgStep03");
        this._layoutStep03.addChild(this._imgStep03);
        this._imgStep03.setCascadeOpacityEnabled(true);
        this._imgStep03.setCascadeColorEnabled(true);
        this._imgStep03.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgStep03, 0.5, 1);
        this._imgStep03.setColor(cc.color(1, 81, 142, 255));
        let _imgStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep03);
        _imgStep03LayoutComponent.setPositionPercentXEnabled(true);
        _imgStep03LayoutComponent.setPositionPercentX(0.5);
        _imgStep03LayoutComponent.setPositionPercentYEnabled(true);
        _imgStep03LayoutComponent.setPositionPercentY(1);
        _imgStep03LayoutComponent.setPercentWidthEnabled(true);
        _imgStep03LayoutComponent.setPercentWidth(1);
        _imgStep03LayoutComponent.setPercentHeightEnabled(true);
        _imgStep03LayoutComponent.setPercentHeight(1);
        this._imgStep03.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgStep03.setUnifySizeEnabled(false);
        this._imgStep03.ignoreContentAdaptWithSize(false);
        this._imgStep03.setScale9Enabled(true);
        this._imgStep03.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgStep03, 1, 1);
        this._imgStep03.setTouchEnabled(false);

        ///// # _imgParis
        this._imgParis = new ccui.ImageView();
        this._imgParis.setName("_imgParis");
        this._layoutStep03.addChild(this._imgParis);
        this._imgParis.setCascadeOpacityEnabled(true);
        this._imgParis.setCascadeColorEnabled(true);
        this._imgParis.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgParis, 0.2325, 0.6541);
        let _imgParisLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgParis);
        _imgParisLayoutComponent.setPositionPercentXEnabled(true);
        _imgParisLayoutComponent.setPositionPercentX(0.2325);
        _imgParisLayoutComponent.setPositionPercentYEnabled(true);
        _imgParisLayoutComponent.setPositionPercentY(0.6541);
        this._imgParis.loadTexture("around-the-world/BuildingParis.png", 1);
        this._imgParis.setUnifySizeEnabled(false);
        this._imgParis.ignoreContentAdaptWithSize(false);
        this._imgParis.setContentSize(cc.size(167, 242));
        this._imgParis.setTouchEnabled(false);

        ///// # _glow
        this._glow = new Glow();
        this._glow.setName("_glow");
        this._layoutStep03.addChild(this._glow);
        this._glow.setCascadeOpacityEnabled(true);
        this._glow.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._glow, 0.7508, 0.6486);
        this._glow.setScale(0.3, 0.3);
        let _glowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._glow);
        _glowLayoutComponent.setPositionPercentXEnabled(true);
        _glowLayoutComponent.setPositionPercentX(0.7508);
        _glowLayoutComponent.setPositionPercentYEnabled(true);
        _glowLayoutComponent.setPositionPercentY(0.6486);

        ///// # _imgParisText
        this._imgParisText = new ccui.ImageView();
        this._imgParisText.setName("_imgParisText");
        this._layoutStep03.addChild(this._imgParisText);
        this._imgParisText.setCascadeOpacityEnabled(true);
        this._imgParisText.setCascadeColorEnabled(true);
        this._imgParisText.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgParisText, 0.2301, 0.4403);
        let _imgParisTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgParisText);
        _imgParisTextLayoutComponent.setPositionPercentXEnabled(true);
        _imgParisTextLayoutComponent.setPositionPercentX(0.2301);
        _imgParisTextLayoutComponent.setPositionPercentYEnabled(true);
        _imgParisTextLayoutComponent.setPositionPercentY(0.4403);
        this._imgParisText.loadTexture("around-the-world/TextParis.png", 1);
        this._imgParisText.setUnifySizeEnabled(false);
        this._imgParisText.ignoreContentAdaptWithSize(false);
        this._imgParisText.setContentSize(cc.size(115, 38));
        this._imgParisText.setTouchEnabled(false);

        ///// # _imgStep03Text
        this._imgStep03Text = new ccui.ImageView();
        this._imgStep03Text.setName("_imgStep03Text");
        this._layoutStep03.addChild(this._imgStep03Text);
        this._imgStep03Text.setCascadeOpacityEnabled(true);
        this._imgStep03Text.setCascadeColorEnabled(true);
        this._imgStep03Text.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgStep03Text, 0.5, 0.0296);
        this._imgStep03Text.setOpacity(127);
        this._imgStep03Text.setColor(cc.color(0, 0, 0, 255));
        let _imgStep03TextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep03Text);
        _imgStep03TextLayoutComponent.setPositionPercentXEnabled(true);
        _imgStep03TextLayoutComponent.setPositionPercentX(0.5);
        _imgStep03TextLayoutComponent.setPositionPercentYEnabled(true);
        _imgStep03TextLayoutComponent.setPositionPercentY(0.0296);
        _imgStep03TextLayoutComponent.setPercentWidthEnabled(true);
        _imgStep03TextLayoutComponent.setPercentWidth(0.9663);
        this._imgStep03Text.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgStep03Text.setUnifySizeEnabled(false);
        this._imgStep03Text.ignoreContentAdaptWithSize(false);
        this._imgStep03Text.setScale9Enabled(true);
        this._imgStep03Text.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setWidthPercent(this._imgStep03Text, 0.9663);
        this._imgStep03Text.setContentSize(cc.size(this._imgStep03Text.width, 100));
        this._imgStep03Text.setTouchEnabled(false);

        ///// # _imgReward
        this._imgReward = new ccui.ImageView();
        this._imgReward.setName("_imgReward");
        this._layoutStep03.addChild(this._imgReward);
        this._imgReward.setCascadeOpacityEnabled(true);
        this._imgReward.setCascadeColorEnabled(true);
        this._imgReward.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgReward, 0.7492, 0.6443);
        let _imgRewardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgReward);
        _imgRewardLayoutComponent.setPositionPercentXEnabled(true);
        _imgRewardLayoutComponent.setPositionPercentX(0.7492);
        _imgRewardLayoutComponent.setPositionPercentYEnabled(true);
        _imgRewardLayoutComponent.setPositionPercentY(0.6443);
        this._imgReward.loadTexture("icons/color/coins/CoinChest.png", 1);
        this._imgReward.setUnifySizeEnabled(false);
        this._imgReward.ignoreContentAdaptWithSize(false);
        this._imgReward.setScale9Enabled(true);
        this._imgReward.setCapInsets(cc.rect(21, 21, 86, 86));
        this._imgReward.setContentSize(cc.size(128, 128));
        this._imgReward.setTouchEnabled(false);

        ///// # _arrow03
        this._arrow03 = new cc.Sprite();
        this._arrow03.setName("_arrow03");
        this._layoutStep03.addChild(this._arrow03);
        this._arrow03.setCascadeOpacityEnabled(true);
        this._arrow03.setCascadeColorEnabled(true);
        this._arrow03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._arrow03, 0.5, 0.6901);
        this._arrow03.setRotation(-90);
        let _arrow03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._arrow03);
        _arrow03LayoutComponent.setPositionPercentXEnabled(true);
        _arrow03LayoutComponent.setPositionPercentX(0.5);
        _arrow03LayoutComponent.setPositionPercentYEnabled(true);
        _arrow03LayoutComponent.setPositionPercentY(0.6901);
        let sf = cc.spriteFrameCache.getSpriteFrame("icons/flat/ArrowDown.png"); if (sf) this._arrow03.setSpriteFrame(sf);
        let _arrow03BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _arrow03BlendFunc.src = 1;
        _arrow03BlendFunc.dst = 771;
        this._arrow03.setBlendFunc(_arrow03BlendFunc);

        ///// # _txtStep03
        this._txtStep03 = new ck.Text();
        this._txtStep03.setName("_txtStep03");
        this._layoutStep03.addChild(this._txtStep03);
        this._txtStep03.setCascadeOpacityEnabled(true);
        this._txtStep03.setCascadeColorEnabled(true);
        this._txtStep03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtStep03, 0.5, 0.1546);
        let _txtStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep03);
        _txtStep03LayoutComponent.setPositionPercentXEnabled(true);
        _txtStep03LayoutComponent.setPositionPercentX(0.5);
        _txtStep03LayoutComponent.setPositionPercentYEnabled(true);
        _txtStep03LayoutComponent.setPositionPercentY(0.1546);
        this._txtStep03.setTouchEnabled(false);
        this._txtStep03.ignoreContentAdaptWithSize(true);
        this._txtStep03.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtStep03.setDefaultFontSize(20);
        this._txtStep03.setString(gm.localize.getText("TXT_AROUND_THE_WORLD_STEP_03"));
        this._txtStep03.setTextHorizontalAlignment(1);
        this._txtStep03.setTextVerticalAlignment(1);

        ///// # _nodePlane03
        this._nodePlane03 = new cc.Node();
        this._nodePlane03.setName("_nodePlane03");
        this._layoutStep03.addChild(this._nodePlane03);
        this._nodePlane03.setCascadeOpacityEnabled(true);
        this._nodePlane03.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodePlane03, 0.2382, 0.5191);
        let _nodePlane03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodePlane03);

        ///// # _txtTapToClose
        this._txtTapToClose = new ck.Text();
        this._txtTapToClose.setName("_txtTapToClose");
        this._root.addChild(this._txtTapToClose);
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

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._root.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 0.8782);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(0.8782);
        this._imgHeader.loadTexture("basics/popup/HeaderRed_03.png", 1);
        this._imgHeader.setUnifySizeEnabled(false);
        this._imgHeader.ignoreContentAdaptWithSize(false);
        this._imgHeader.setContentSize(cc.size(516.4579, 246.4729));
        this._imgHeader.setTouchEnabled(false);

        ///// # _imgHeaderText
        this._imgHeaderText = new ccui.ImageView();
        this._imgHeaderText.setName("_imgHeaderText");
        this._imgHeader.addChild(this._imgHeaderText);
        this._imgHeaderText.setCascadeOpacityEnabled(true);
        this._imgHeaderText.setCascadeColorEnabled(true);
        this._imgHeaderText.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeaderText, 0.5, 0.4507);
        let _imgHeaderTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeaderText);
        _imgHeaderTextLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderTextLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderTextLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderTextLayoutComponent.setPositionPercentY(0.4507);
        this._imgHeaderText.loadTexture("texts/around-the-world/Header_01.png", 1);
        this._imgHeaderText.setTouchEnabled(false);

    },



});

/**
 * Create AroundTheWorldGuide
 * @returns {_ccs.AroundTheWorldGuide}
 */
_ccs.AroundTheWorldGuide.create = function () {
    return new _ccs.AroundTheWorldGuide();
};
