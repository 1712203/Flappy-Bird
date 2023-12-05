/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.DragonKnightGuide
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.DragonKnightGuide = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ck.Text} */
    _txtTapToClose: null,
    /** @type {cc.Sprite} */
    _card01: null,
    /** @type {cc.Sprite} */
    _card02: null,
    /** @type {cc.Sprite} */
    _pisti: null,
    /** @type {ccui.Layout} */
    _minigames: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundMg: null,
    /** @type {ccui.ImageView} */
    _imgIconMg: null,
    /** @type {ccui.ImageView} */
    _imgBgrTextMg: null,
    /** @type {ccui.ImageView} */
    _imgTextMg: null,
    /** @type {cc.Sprite} */
    _egg01: null,
    /** @type {cc.Sprite} */
    _egg02: null,
    /** @type {cc.Sprite} */
    _egg03: null,
    /** @type {cc.Sprite} */
    _arrow01: null,
    /** @type {cc.Sprite} */
    _arrow02: null,
    /** @type {cc.Sprite} */
    _chest02: null,
    /** @type {cc.Sprite} */
    _chest01: null,
    /** @type {cc.Sprite} */
    _egg04: null,
    /** @type {cc.Sprite} */
    _egg05: null,
    /** @type {cc.Sprite} */
    _egg06: null,
    /** @type {ck.Text} */
    _txtStep01: null,
    /** @type {ck.Text} */
    _txtStep02: null,
    /** @type {ck.Text} */
    _txtHeader: null,


    /**
     * _ccs.DragonKnightGuide constructor
     * @constructor
     */
    ctor: function () {
        cc.Layer.prototype.ctor.call(this);
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

        ///// # _card01
        this._card01 = new cc.Sprite();
        this._card01.setName("_card01");
        this._root.addChild(this._card01);
        this._card01.setCascadeOpacityEnabled(true);
        this._card01.setCascadeColorEnabled(true);
        this._card01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._card01, 0.1962, 0.6915);
        this._card01.setScale(0.65, 0.65);
        this._card01.setRotationX(-9.7587);
        this._card01.setRotationY(-9.7602);
        let _card01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._card01);
        _card01LayoutComponent.setPositionPercentXEnabled(true);
        _card01LayoutComponent.setPositionPercentX(0.1962);
        _card01LayoutComponent.setPositionPercentYEnabled(true);
        _card01LayoutComponent.setPositionPercentY(0.6915);
        let sf = cc.spriteFrameCache.getSpriteFrame("cards/11.png"); if (sf) this._card01.setSpriteFrame(sf);
        let _card01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _card01BlendFunc.src = 1;
        _card01BlendFunc.dst = 771;
        this._card01.setBlendFunc(_card01BlendFunc);

        ///// # _card02
        this._card02 = new cc.Sprite();
        this._card02.setName("_card02");
        this._root.addChild(this._card02);
        this._card02.setCascadeOpacityEnabled(true);
        this._card02.setCascadeColorEnabled(true);
        this._card02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._card02, 0.3597, 0.692);
        this._card02.setScale(0.65, 0.65);
        this._card02.setRotationX(10.715);
        this._card02.setRotationY(10.7197);
        let _card02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._card02);
        _card02LayoutComponent.setPositionPercentXEnabled(true);
        _card02LayoutComponent.setPositionPercentX(0.3597);
        _card02LayoutComponent.setPositionPercentYEnabled(true);
        _card02LayoutComponent.setPositionPercentY(0.692);
        let sf = cc.spriteFrameCache.getSpriteFrame("cards/50.png"); if (sf) this._card02.setSpriteFrame(sf);
        let _card02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _card02BlendFunc.src = 1;
        _card02BlendFunc.dst = 771;
        this._card02.setBlendFunc(_card02BlendFunc);

        ///// # _pisti
        this._pisti = new cc.Sprite();
        this._pisti.setName("_pisti");
        this._root.addChild(this._pisti);
        this._pisti.setCascadeOpacityEnabled(true);
        this._pisti.setCascadeColorEnabled(true);
        this._pisti.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._pisti, 0.2717, 0.64);
        this._pisti.setScale(0.65, 0.65);
        let _pistiLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._pisti);
        _pistiLayoutComponent.setPositionPercentXEnabled(true);
        _pistiLayoutComponent.setPositionPercentX(0.2717);
        _pistiLayoutComponent.setPositionPercentYEnabled(true);
        _pistiLayoutComponent.setPositionPercentY(0.64);
        let sf = cc.spriteFrameCache.getSpriteFrame("texts/game/Pisti.png"); if (sf) this._pisti.setSpriteFrame(sf);
        let _pistiBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _pistiBlendFunc.src = 1;
        _pistiBlendFunc.dst = 771;
        this._pisti.setBlendFunc(_pistiBlendFunc);

        ///// # _minigames
        this._minigames = new ccui.Layout();
        this._minigames.setName("_minigames");
        this._root.addChild(this._minigames);
        this._minigames.setCascadeOpacityEnabled(true);
        this._minigames.setCascadeColorEnabled(true);
        this._minigames.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._minigames, 0.2717, 0.54);
        this._minigames.setScale(0.75, 0.75);
        let _minigamesLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._minigames);
        _minigamesLayoutComponent.setPositionPercentXEnabled(true);
        _minigamesLayoutComponent.setPositionPercentX(0.2717);
        _minigamesLayoutComponent.setPositionPercentYEnabled(true);
        _minigamesLayoutComponent.setPositionPercentY(0.54);
        this._minigames.setTouchEnabled(false);
        this._minigames.setUnifySizeEnabled(false);
        this._minigames.ignoreContentAdaptWithSize(false);
        this._minigames.setContentSize(cc.size(150, 133));

        ///// # _imgBackgroundMg
        this._imgBackgroundMg = new ccui.ImageView();
        this._imgBackgroundMg.setName("_imgBackgroundMg");
        this._minigames.addChild(this._imgBackgroundMg);
        this._imgBackgroundMg.setCascadeOpacityEnabled(true);
        this._imgBackgroundMg.setCascadeColorEnabled(true);
        this._imgBackgroundMg.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundMg, 0.5, 0.5);
        let _imgBackgroundMgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundMg);
        _imgBackgroundMgLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundMgLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundMgLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundMgLayoutComponent.setPositionPercentY(0.5);
        this._imgBackgroundMg.loadTexture("buttons/hexagonal/Violet_02.png", 1);
        this._imgBackgroundMg.setUnifySizeEnabled(false);
        this._imgBackgroundMg.ignoreContentAdaptWithSize(false);
        this._imgBackgroundMg.setContentSize(cc.size(143, 134));
        this._imgBackgroundMg.setTouchEnabled(false);

        ///// # _imgIconMg
        this._imgIconMg = new ccui.ImageView();
        this._imgIconMg.setName("_imgIconMg");
        this._minigames.addChild(this._imgIconMg);
        this._imgIconMg.setCascadeOpacityEnabled(true);
        this._imgIconMg.setCascadeColorEnabled(true);
        this._imgIconMg.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconMg, 0.5, 0.7519);
        let _imgIconMgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconMg);
        _imgIconMgLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconMgLayoutComponent.setPositionPercentX(0.5);
        this._imgIconMg.loadTexture("home/IconOtherMinigames.png", 1);
        this._imgIconMg.setUnifySizeEnabled(false);
        this._imgIconMg.ignoreContentAdaptWithSize(false);
        this._imgIconMg.setContentSize(cc.size(92, 111));
        this._imgIconMg.setTouchEnabled(false);

        ///// # _imgBgrTextMg
        this._imgBgrTextMg = new ccui.ImageView();
        this._imgBgrTextMg.setName("_imgBgrTextMg");
        this._minigames.addChild(this._imgBgrTextMg);
        this._imgBgrTextMg.setCascadeOpacityEnabled(true);
        this._imgBgrTextMg.setCascadeColorEnabled(true);
        this._imgBgrTextMg.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgBgrTextMg, 0.5, 0.09);
        let _imgBgrTextMgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrTextMg);
        _imgBgrTextMgLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrTextMgLayoutComponent.setPositionPercentX(0.5);
        _imgBgrTextMgLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrTextMgLayoutComponent.setPositionPercentY(0.09);
        this._imgBgrTextMg.loadTexture("buttons/hexagonal/Violet_01.png", 1);
        this._imgBgrTextMg.setUnifySizeEnabled(false);
        this._imgBgrTextMg.ignoreContentAdaptWithSize(false);
        this._imgBgrTextMg.setContentSize(cc.size(119, 42));
        this._imgBgrTextMg.setTouchEnabled(false);

        ///// # _imgTextMg
        this._imgTextMg = new ccui.ImageView();
        this._imgTextMg.setName("_imgTextMg");
        this._minigames.addChild(this._imgTextMg);
        this._imgTextMg.setCascadeOpacityEnabled(true);
        this._imgTextMg.setCascadeColorEnabled(true);
        this._imgTextMg.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgTextMg, 0.5, 0.39);
        let _imgTextMgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTextMg);
        _imgTextMgLayoutComponent.setPositionPercentXEnabled(true);
        _imgTextMgLayoutComponent.setPositionPercentX(0.5);
        _imgTextMgLayoutComponent.setPositionPercentYEnabled(true);
        _imgTextMgLayoutComponent.setPositionPercentY(0.39);
        this._imgTextMg.loadTexture("texts/home/OtherMinigames.png", 1);
        this._imgTextMg.setTouchEnabled(false);

        ///// # _egg01
        this._egg01 = new cc.Sprite();
        this._egg01.setName("_egg01");
        this._root.addChild(this._egg01);
        this._egg01.setCascadeOpacityEnabled(true);
        this._egg01.setCascadeColorEnabled(true);
        this._egg01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._egg01, 0.7473, 0.6813);
        this._egg01.setScale(0.7102, 0.7102);
        let _egg01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._egg01);
        _egg01LayoutComponent.setPositionPercentXEnabled(true);
        _egg01LayoutComponent.setPositionPercentX(0.7473);
        _egg01LayoutComponent.setPositionPercentYEnabled(true);
        _egg01LayoutComponent.setPositionPercentY(0.6813);
        let sf = cc.spriteFrameCache.getSpriteFrame("icons/color/tokens/DragonEgg.png"); if (sf) this._egg01.setSpriteFrame(sf);
        let _egg01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _egg01BlendFunc.src = 1;
        _egg01BlendFunc.dst = 771;
        this._egg01.setBlendFunc(_egg01BlendFunc);

        ///// # _egg02
        this._egg02 = new cc.Sprite();
        this._egg02.setName("_egg02");
        this._root.addChild(this._egg02);
        this._egg02.setCascadeOpacityEnabled(true);
        this._egg02.setCascadeColorEnabled(true);
        this._egg02.setAnchorPoint(cc.p(0.6056, 0.5031));
        ck.UIUtils.setPositionPercent(this._egg02, 0.8228, 0.6488);
        this._egg02.setScale(0.643, 0.643);
        this._egg02.setRotationX(78.1909);
        this._egg02.setRotationY(78.1856);
        let _egg02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._egg02);
        _egg02LayoutComponent.setPositionPercentXEnabled(true);
        _egg02LayoutComponent.setPositionPercentX(0.8228);
        _egg02LayoutComponent.setPositionPercentYEnabled(true);
        _egg02LayoutComponent.setPositionPercentY(0.6488);
        let sf = cc.spriteFrameCache.getSpriteFrame("icons/color/tokens/DragonEgg.png"); if (sf) this._egg02.setSpriteFrame(sf);
        let _egg02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _egg02BlendFunc.src = 1;
        _egg02BlendFunc.dst = 771;
        this._egg02.setBlendFunc(_egg02BlendFunc);

        ///// # _egg03
        this._egg03 = new cc.Sprite();
        this._egg03.setName("_egg03");
        this._root.addChild(this._egg03);
        this._egg03.setCascadeOpacityEnabled(true);
        this._egg03.setCascadeColorEnabled(true);
        this._egg03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._egg03, 0.7092, 0.6528);
        this._egg03.setScale(0.6508, 0.6508);
        this._egg03.setRotation(-24.6423);
        let _egg03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._egg03);
        _egg03LayoutComponent.setPositionPercentXEnabled(true);
        _egg03LayoutComponent.setPositionPercentX(0.7092);
        _egg03LayoutComponent.setPositionPercentYEnabled(true);
        _egg03LayoutComponent.setPositionPercentY(0.6528);
        let sf = cc.spriteFrameCache.getSpriteFrame("icons/color/tokens/DragonEgg.png"); if (sf) this._egg03.setSpriteFrame(sf);
        let _egg03BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _egg03BlendFunc.src = 1;
        _egg03BlendFunc.dst = 771;
        this._egg03.setBlendFunc(_egg03BlendFunc);

        ///// # _arrow01
        this._arrow01 = new cc.Sprite();
        this._arrow01.setName("_arrow01");
        this._root.addChild(this._arrow01);
        this._arrow01.setCascadeOpacityEnabled(true);
        this._arrow01.setCascadeColorEnabled(true);
        this._arrow01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._arrow01, 0.5565, 0.661);
        this._arrow01.setRotationX(90);
        this._arrow01.setRotationY(90.0105);
        let _arrow01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._arrow01);
        _arrow01LayoutComponent.setPositionPercentXEnabled(true);
        _arrow01LayoutComponent.setPositionPercentX(0.5565);
        _arrow01LayoutComponent.setPositionPercentYEnabled(true);
        _arrow01LayoutComponent.setPositionPercentY(0.661);
        let sf = cc.spriteFrameCache.getSpriteFrame("basics/arrows/Arrow_02.png"); if (sf) this._arrow01.setSpriteFrame(sf);
        let _arrow01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _arrow01BlendFunc.src = 1;
        _arrow01BlendFunc.dst = 771;
        this._arrow01.setBlendFunc(_arrow01BlendFunc);

        ///// # _arrow02
        this._arrow02 = new cc.Sprite();
        this._arrow02.setName("_arrow02");
        this._root.addChild(this._arrow02);
        this._arrow02.setCascadeOpacityEnabled(true);
        this._arrow02.setCascadeColorEnabled(true);
        this._arrow02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._arrow02, 0.4836, 0.3171);
        this._arrow02.setRotationX(90);
        this._arrow02.setRotationY(90.0105);
        let _arrow02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._arrow02);
        _arrow02LayoutComponent.setPositionPercentXEnabled(true);
        _arrow02LayoutComponent.setPositionPercentX(0.4836);
        _arrow02LayoutComponent.setPositionPercentYEnabled(true);
        _arrow02LayoutComponent.setPositionPercentY(0.3171);
        let sf = cc.spriteFrameCache.getSpriteFrame("basics/arrows/Arrow_02.png"); if (sf) this._arrow02.setSpriteFrame(sf);
        let _arrow02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _arrow02BlendFunc.src = 1;
        _arrow02BlendFunc.dst = 771;
        this._arrow02.setBlendFunc(_arrow02BlendFunc);

        ///// # _chest02
        this._chest02 = new cc.Sprite();
        this._chest02.setName("_chest02");
        this._root.addChild(this._chest02);
        this._chest02.setCascadeOpacityEnabled(true);
        this._chest02.setCascadeColorEnabled(true);
        this._chest02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._chest02, 0.8305, 0.3153);
        let _chest02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._chest02);
        _chest02LayoutComponent.setPositionPercentXEnabled(true);
        _chest02LayoutComponent.setPositionPercentX(0.8305);
        _chest02LayoutComponent.setPositionPercentYEnabled(true);
        _chest02LayoutComponent.setPositionPercentY(0.3153);
        let sf = cc.spriteFrameCache.getSpriteFrame("icons/color/gems/Gem_x6.png"); if (sf) this._chest02.setSpriteFrame(sf);
        let _chest02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _chest02BlendFunc.src = 1;
        _chest02BlendFunc.dst = 771;
        this._chest02.setBlendFunc(_chest02BlendFunc);

        ///// # _chest01
        this._chest01 = new cc.Sprite();
        this._chest01.setName("_chest01");
        this._root.addChild(this._chest01);
        this._chest01.setCascadeOpacityEnabled(true);
        this._chest01.setCascadeColorEnabled(true);
        this._chest01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._chest01, 0.6897, 0.3182);
        let _chest01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._chest01);
        _chest01LayoutComponent.setPositionPercentXEnabled(true);
        _chest01LayoutComponent.setPositionPercentX(0.6897);
        _chest01LayoutComponent.setPositionPercentYEnabled(true);
        _chest01LayoutComponent.setPositionPercentY(0.3182);
        let sf = cc.spriteFrameCache.getSpriteFrame("icons/color/coins/CoinChest.png"); if (sf) this._chest01.setSpriteFrame(sf);
        let _chest01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _chest01BlendFunc.src = 1;
        _chest01BlendFunc.dst = 771;
        this._chest01.setBlendFunc(_chest01BlendFunc);

        ///// # _egg04
        this._egg04 = new cc.Sprite();
        this._egg04.setName("_egg04");
        this._root.addChild(this._egg04);
        this._egg04.setCascadeOpacityEnabled(true);
        this._egg04.setCascadeColorEnabled(true);
        this._egg04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._egg04, 0.222, 0.3324);
        this._egg04.setScale(0.7102, 0.7102);
        let _egg04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._egg04);
        _egg04LayoutComponent.setPositionPercentXEnabled(true);
        _egg04LayoutComponent.setPositionPercentX(0.222);
        _egg04LayoutComponent.setPositionPercentYEnabled(true);
        _egg04LayoutComponent.setPositionPercentY(0.3324);
        let sf = cc.spriteFrameCache.getSpriteFrame("icons/color/tokens/DragonEgg.png"); if (sf) this._egg04.setSpriteFrame(sf);
        let _egg04BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _egg04BlendFunc.src = 1;
        _egg04BlendFunc.dst = 771;
        this._egg04.setBlendFunc(_egg04BlendFunc);

        ///// # _egg05
        this._egg05 = new cc.Sprite();
        this._egg05.setName("_egg05");
        this._root.addChild(this._egg05);
        this._egg05.setCascadeOpacityEnabled(true);
        this._egg05.setCascadeColorEnabled(true);
        this._egg05.setAnchorPoint(cc.p(0.6056, 0.5031));
        ck.UIUtils.setPositionPercent(this._egg05, 0.2975, 0.2999);
        this._egg05.setScale(0.643, 0.643);
        this._egg05.setRotationX(78.1906);
        this._egg05.setRotationY(78.185);
        let _egg05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._egg05);
        _egg05LayoutComponent.setPositionPercentXEnabled(true);
        _egg05LayoutComponent.setPositionPercentX(0.2975);
        _egg05LayoutComponent.setPositionPercentYEnabled(true);
        _egg05LayoutComponent.setPositionPercentY(0.2999);
        let sf = cc.spriteFrameCache.getSpriteFrame("icons/color/tokens/DragonEgg.png"); if (sf) this._egg05.setSpriteFrame(sf);
        let _egg05BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _egg05BlendFunc.src = 1;
        _egg05BlendFunc.dst = 771;
        this._egg05.setBlendFunc(_egg05BlendFunc);

        ///// # _egg06
        this._egg06 = new cc.Sprite();
        this._egg06.setName("_egg06");
        this._root.addChild(this._egg06);
        this._egg06.setCascadeOpacityEnabled(true);
        this._egg06.setCascadeColorEnabled(true);
        this._egg06.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._egg06, 0.1839, 0.3039);
        this._egg06.setScale(0.6508, 0.6508);
        this._egg06.setRotationX(-24.6417);
        this._egg06.setRotationY(-24.6428);
        let _egg06LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._egg06);
        _egg06LayoutComponent.setPositionPercentXEnabled(true);
        _egg06LayoutComponent.setPositionPercentX(0.1839);
        _egg06LayoutComponent.setPositionPercentYEnabled(true);
        _egg06LayoutComponent.setPositionPercentY(0.3039);
        let sf = cc.spriteFrameCache.getSpriteFrame("icons/color/tokens/DragonEgg.png"); if (sf) this._egg06.setSpriteFrame(sf);
        let _egg06BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _egg06BlendFunc.src = 1;
        _egg06BlendFunc.dst = 771;
        this._egg06.setBlendFunc(_egg06BlendFunc);

        ///// # _txtStep01
        this._txtStep01 = new ck.Text();
        this._txtStep01.setName("_txtStep01");
        this._root.addChild(this._txtStep01);
        this._txtStep01.setCascadeOpacityEnabled(true);
        this._txtStep01.setCascadeColorEnabled(true);
        this._txtStep01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtStep01, 0.5088, 0.47);
        let _txtStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep01);
        _txtStep01LayoutComponent.setPositionPercentXEnabled(true);
        _txtStep01LayoutComponent.setPositionPercentX(0.5088);
        _txtStep01LayoutComponent.setPositionPercentYEnabled(true);
        _txtStep01LayoutComponent.setPositionPercentY(0.47);
        this._txtStep01.setTouchEnabled(false);
        this._txtStep01.ignoreContentAdaptWithSize(true);
        this._txtStep01.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtStep01.setDefaultFontSize(35);
        this._txtStep01.setString(gm.localize.getText("TXT_DRAGON_KNIGHT_GUIDE_01"));
        this._txtStep01.setTextHorizontalAlignment(1);
        this._txtStep01.setTextVerticalAlignment(1);
        this._txtStep01.enableOutline(cc.color(0, 0, 0, 255), 2);

        ///// # _txtStep02
        this._txtStep02 = new ck.Text();
        this._txtStep02.setName("_txtStep02");
        this._root.addChild(this._txtStep02);
        this._txtStep02.setCascadeOpacityEnabled(true);
        this._txtStep02.setCascadeColorEnabled(true);
        this._txtStep02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtStep02, 0.5191, 0.1832);
        let _txtStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep02);
        _txtStep02LayoutComponent.setPositionPercentXEnabled(true);
        _txtStep02LayoutComponent.setPositionPercentX(0.5191);
        _txtStep02LayoutComponent.setPositionPercentYEnabled(true);
        _txtStep02LayoutComponent.setPositionPercentY(0.1832);
        this._txtStep02.setTouchEnabled(false);
        this._txtStep02.ignoreContentAdaptWithSize(true);
        this._txtStep02.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtStep02.setDefaultFontSize(35);
        this._txtStep02.setString(gm.localize.getText("TXT_DRAGON_KNIGHT_GUIDE_02"));
        this._txtStep02.setTextHorizontalAlignment(1);
        this._txtStep02.setTextVerticalAlignment(1);
        this._txtStep02.enableOutline(cc.color(0, 0, 0, 255), 2);

        ///// # _txtHeader
        this._txtHeader = new ck.Text();
        this._txtHeader.setName("_txtHeader");
        this._root.addChild(this._txtHeader);
        this._txtHeader.setCascadeOpacityEnabled(true);
        this._txtHeader.setCascadeColorEnabled(true);
        this._txtHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHeader, 0.5, 0.878);
        this._txtHeader.setTextColor(cc.color(241, 255, 143, 255));
        let _txtHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHeader);
        _txtHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentX(0.5);
        _txtHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentY(0.878);
        this._txtHeader.setTouchEnabled(false);
        this._txtHeader.ignoreContentAdaptWithSize(true);
        this._txtHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHeader.setDefaultFontSize(75);
        this._txtHeader.setString(gm.localize.getText("TXT_HOW_TO_PLAY"));
        this._txtHeader.setTextHorizontalAlignment(1);
        this._txtHeader.setTextVerticalAlignment(1);
        this._txtHeader.enableOutline(cc.color(87, 56, 0, 255), 3);

    },



});

/**
 * Create DragonKnightGuide
 * @returns {_ccs.DragonKnightGuide}
 */
_ccs.DragonKnightGuide.create = function () {
    return new _ccs.DragonKnightGuide();
};
