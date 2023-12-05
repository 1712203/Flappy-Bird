/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.TutorialPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.TutorialPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {ccui.ImageView} */
    _imgFont: null,
    /** @type {ccui.PageView} */
    _pageView: null,
    /** @type {ccui.Layout} */
    _page00: null,
    /** @type {cc.Sprite} */
    _spriteDeck: null,
    /** @type {cc.Sprite} */
    _spriteCard00: null,
    /** @type {cc.Sprite} */
    _spriteCard02: null,
    /** @type {cc.Sprite} */
    _spriteCard05: null,
    /** @type {cc.Sprite} */
    _spriteCard05_01: null,
    /** @type {cc.Sprite} */
    _spriteCard04: null,
    /** @type {cc.Sprite} */
    _spriteCard03: null,
    /** @type {ccui.Layout} */
    _page01: null,
    /** @type {cc.Sprite} */
    _spriteDeck_01: null,
    /** @type {cc.Sprite} */
    _spriteCard01_01: null,
    /** @type {cc.Sprite} */
    _spriteCard03_01: null,
    /** @type {cc.Sprite} */
    _spriteCard03_01_01: null,
    /** @type {cc.Sprite} */
    _spriteCard02_01: null,
    /** @type {cc.Sprite} */
    _spriteCard00_01: null,
    /** @type {cc.Sprite} */
    _spritePisti_01: null,
    /** @type {cc.Sprite} */
    _spriteDoublePisti_01: null,
    /** @type {ccui.Layout} */
    _page02: null,
    /** @type {cc.Sprite} */
    _spriteDeck_02: null,
    /** @type {cc.Sprite} */
    _spriteCard04_02: null,
    /** @type {cc.Sprite} */
    _spriteCard01_02: null,
    /** @type {cc.Sprite} */
    _spriteCard00_02: null,
    /** @type {cc.Sprite} */
    _spriteCard00_02_01: null,
    /** @type {cc.Sprite} */
    _spriteCard03_02: null,
    /** @type {ccui.Layout} */
    _page03: null,
    /** @type {ccui.Layout} */
    _layout02: null,
    /** @type {ccui.Layout} */
    _layoutHeader02: null,
    /** @type {ccui.ImageView} */
    _imgHeader02: null,
    /** @type {ck.Text} */
    _txtHeader02: null,
    /** @type {ccui.Layout} */
    _layoutNumber02: null,
    /** @type {ccui.Layout} */
    _layoutContent02: null,
    /** @type {ccui.Layout} */
    _layoutLine01: null,
    /** @type {ccui.ImageView} */
    _imgBgr01: null,
    /** @type {ccui.ImageView} */
    _imgDot01: null,
    /** @type {ccui.ImageView} */
    _imgCard05: null,
    /** @type {ccui.ImageView} */
    _imgCard06: null,
    /** @type {ccui.ImageView} */
    _imgCard07: null,
    /** @type {ccui.ImageView} */
    _imgCard08: null,
    /** @type {ck.Text} */
    _txtLine01: null,
    /** @type {ccui.Layout} */
    _layoutLine02: null,
    /** @type {ccui.ImageView} */
    _imgBgr02: null,
    /** @type {ccui.ImageView} */
    _imgDot02: null,
    /** @type {ccui.ImageView} */
    _imgCard09: null,
    /** @type {ccui.ImageView} */
    _imgCard10: null,
    /** @type {ccui.ImageView} */
    _imgCard11: null,
    /** @type {ccui.ImageView} */
    _imgCard12: null,
    /** @type {ck.Text} */
    _txtLine02: null,
    /** @type {ccui.Layout} */
    _layoutLine03: null,
    /** @type {ccui.ImageView} */
    _imgBgr03: null,
    /** @type {ccui.ImageView} */
    _imgDot03: null,
    /** @type {ccui.ImageView} */
    _imgCard13: null,
    /** @type {ck.Text} */
    _txtLine030: null,
    /** @type {ccui.ImageView} */
    _imgCard14: null,
    /** @type {ck.Text} */
    _txtLine031: null,
    /** @type {ccui.Layout} */
    _layoutLine04: null,
    /** @type {ccui.ImageView} */
    _imgBgr04: null,
    /** @type {ccui.ImageView} */
    _imgDot04: null,
    /** @type {ck.Text} */
    _txtMoreCards_0: null,
    /** @type {ck.Text} */
    _txtLine04: null,
    /** @type {ccui.Layout} */
    _layoutLine05: null,
    /** @type {ccui.ImageView} */
    _imgBgr05: null,
    /** @type {ccui.ImageView} */
    _imgDot05: null,
    /** @type {ck.Text} */
    _txtLine05: null,
    /** @type {ck.Text} */
    _txtMoreCards: null,
    /** @type {ccui.Layout} */
    _layoutLine06: null,
    /** @type {ccui.ImageView} */
    _imgBgr06: null,
    /** @type {ck.Text} */
    _txtLine06Header: null,
    /** @type {ccui.ImageView} */
    _imgDot06: null,
    /** @type {ck.Text} */
    _txtLine06: null,
    /** @type {ccui.Layout} */
    _layout03: null,
    /** @type {ccui.ImageView} */
    _imgBgr03: null,
    /** @type {ccui.Layout} */
    _layoutHeader03: null,
    /** @type {ccui.ImageView} */
    _imgHeader03: null,
    /** @type {ck.Text} */
    _txtHeader03: null,
    /** @type {ccui.Layout} */
    _layoutNumber03: null,
    /** @type {ccui.Layout} */
    _layoutContent03: null,
    /** @type {ck.Text} */
    _txtResultAmount: null,
    /** @type {ccui.ImageView} */
    _imgResultCoin: null,
    /** @type {ck.Text} */
    _txtEqual: null,
    /** @type {ck.Text} */
    _txtBetAmount: null,
    /** @type {ccui.ImageView} */
    _imgBetCoin: null,
    /** @type {ck.Text} */
    _txtX: null,
    /** @type {cc.Node} */
    _nodeScoreGapSummary: null,
    /** @type {ccui.ImageView} */
    _imgScoreGapSummary: null,
    /** @type {ck.Text} */
    _txtScoreGapSummary: null,
    /** @type {ck.Text} */
    _txtBetAmount_0: null,
    /** @type {ccui.Layout} */
    _page04: null,
    /** @type {ccui.Layout} */
    _layout04: null,
    /** @type {ccui.Layout} */
    _layoutHeader04: null,
    /** @type {ccui.ImageView} */
    _imgHeader04: null,
    /** @type {ck.Text} */
    _txtHeader04: null,
    /** @type {ccui.Layout} */
    _layoutNumber04: null,
    /** @type {ccui.Layout} */
    _layoutContent04: null,
    /** @type {ccui.Layout} */
    _layoutStep0401: null,
    /** @type {ccui.ImageView} */
    _imgBgr0401: null,
    /** @type {ccui.ImageView} */
    _imgStep0401: null,
    /** @type {ck.Text} */
    _txtTitle0401: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtStep0401: null,
    /** @type {ccui.Layout} */
    _layoutStep0402: null,
    /** @type {ccui.ImageView} */
    _imgBgr0402: null,
    /** @type {ccui.ImageView} */
    _imgStep0402: null,
    /** @type {ck.Text} */
    _txtTitle0402: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtStep0402: null,
    /** @type {ccui.Button} */
    _btnArrowRight: null,
    /** @type {ccui.Button} */
    _btnArrowLeft: null,
    /** @type {ccui.Layout} */
    _layoutTitle: null,
    /** @type {ccui.ImageView} */
    _imgTitleBgr: null,
    /** @type {ck.Text} */
    _txtGuide00: null,
    /** @type {ck.Text} */
    _txtGuide01: null,
    /** @type {ck.Text} */
    _txtGuide02: null,
    /** @type {ccui.Layout} */
    _layoutHeader: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ck.Text} */
    _txtHeader: null,
    /** @type {ccui.Layout} */
    _layoutClose: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {cc.Sprite} */
    _dot00: null,
    /** @type {cc.Sprite} */
    _dot01: null,
    /** @type {cc.Sprite} */
    _dot02: null,
    /** @type {cc.Sprite} */
    _dot03: null,
    /** @type {cc.Sprite} */
    _dot04: null,
    /** @type {cc.Sprite} */
    _dotCurrent: null,


    /**
     * _ccs.TutorialPopup constructor
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

        ///// # _layoutPopup
        this._layoutPopup = new ccui.Layout();
        this._layoutPopup.setName("_layoutPopup");
        this.addChild(this._layoutPopup);
        this._layoutPopup.setCascadeOpacityEnabled(true);
        this._layoutPopup.setCascadeColorEnabled(true);
        this._layoutPopup.setAnchorPoint(cc.p(0.5, 0.5));
        this._layoutPopup.setPosition(-0.0002, 0.0004);
        let _layoutPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        this._layoutPopup.setTouchEnabled(false);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(540, 830));

        ///// # _imgBack
        this._imgBack = new ccui.ImageView();
        this._imgBack.setName("_imgBack");
        this._layoutPopup.addChild(this._imgBack);
        this._imgBack.setCascadeOpacityEnabled(true);
        this._imgBack.setCascadeColorEnabled(true);
        this._imgBack.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBack, 0.5, 0.5);
        let _imgBackLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBack);
        this._imgBack.loadTexture("basics/popup/Back.png", 1);
        this._imgBack.setUnifySizeEnabled(false);
        this._imgBack.ignoreContentAdaptWithSize(false);
        this._imgBack.setScale9Enabled(true);
        this._imgBack.setCapInsets(cc.rect(69, 57, 72, 61));
        this._imgBack.setContentSize(cc.size(540, 830));
        this._imgBack.setTouchEnabled(false);

        ///// # _imgFont
        this._imgFont = new ccui.ImageView();
        this._imgFont.setName("_imgFont");
        this._layoutPopup.addChild(this._imgFont);
        this._imgFont.setCascadeOpacityEnabled(true);
        this._imgFont.setCascadeColorEnabled(true);
        this._imgFont.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgFont, 0.5, 0.5);
        let _imgFontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFont);
        this._imgFont.loadTexture("basics/popup/Font.png", 1);
        this._imgFont.setUnifySizeEnabled(false);
        this._imgFont.ignoreContentAdaptWithSize(false);
        this._imgFont.setScale9Enabled(true);
        this._imgFont.setCapInsets(cc.rect(69, 57, 15, 31));
        this._imgFont.setContentSize(cc.size(513, 800.452));
        this._imgFont.setTouchEnabled(false);

        ///// # _pageView
        this._pageView = new ccui.PageView();
        this._pageView.setName("_pageView");
        this._layoutPopup.addChild(this._pageView);
        this._pageView.setCascadeOpacityEnabled(true);
        this._pageView.setCascadeColorEnabled(true);
        this._pageView.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._pageView, 0.5, 0.5);
        let _pageViewLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._pageView);
        _pageViewLayoutComponent.setPositionPercentXEnabled(true);
        _pageViewLayoutComponent.setPositionPercentX(0.5);
        _pageViewLayoutComponent.setPositionPercentYEnabled(true);
        _pageViewLayoutComponent.setPositionPercentY(0.5);
        _pageViewLayoutComponent.setPercentWidthEnabled(true);
        _pageViewLayoutComponent.setPercentWidth(0.9);
        _pageViewLayoutComponent.setPercentHeightEnabled(true);
        _pageViewLayoutComponent.setPercentHeight(0.9);
        this._pageView.setTouchEnabled(true);
        this._pageView.setUnifySizeEnabled(false);
        this._pageView.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._pageView, 0.9, 0.9);

        ///// # _page00
        this._page00 = new ccui.Layout();
        this._page00.setName("_page00");
        this._pageView.addPage(this._page00);
        this._page00.setCascadeOpacityEnabled(true);
        this._page00.setCascadeColorEnabled(true);
        let _page00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._page00);
        this._page00.setTouchEnabled(true);
        this._page00.setUnifySizeEnabled(false);
        this._page00.ignoreContentAdaptWithSize(false);
        this._page00.setContentSize(cc.size(486, 747));

        ///// # _spriteDeck
        this._spriteDeck = new cc.Sprite();
        this._spriteDeck.setName("_spriteDeck");
        this._page00.addChild(this._spriteDeck);
        this._spriteDeck.setCascadeOpacityEnabled(true);
        this._spriteDeck.setCascadeColorEnabled(true);
        this._spriteDeck.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteDeck, 0.8515, 0.3505);
        let _spriteDeckLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteDeck);
        let sf = cc.spriteFrameCache.getSpriteFrame("game/ui/Deck.png"); if (sf) this._spriteDeck.setSpriteFrame(sf);
        let _spriteDeckBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteDeckBlendFunc.src = 1;
        _spriteDeckBlendFunc.dst = 771;
        this._spriteDeck.setBlendFunc(_spriteDeckBlendFunc);

        ///// # _spriteCard00
        this._spriteCard00 = new cc.Sprite();
        this._spriteCard00.setName("_spriteCard00");
        this._page00.addChild(this._spriteCard00);
        this._spriteCard00.setCascadeOpacityEnabled(true);
        this._spriteCard00.setCascadeColorEnabled(true);
        this._spriteCard00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteCard00, 0.4864, 0.6253);
        this._spriteCard00.setScale(0.5, 0.5);
        this._spriteCard00.setRotationX(0.1783);
        this._spriteCard00.setRotationY(0.1679);
        let _spriteCard00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteCard00);
        let sf = cc.spriteFrameCache.getSpriteFrame("cards/43.png"); if (sf) this._spriteCard00.setSpriteFrame(sf);
        let _spriteCard00BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteCard00BlendFunc.src = 1;
        _spriteCard00BlendFunc.dst = 771;
        this._spriteCard00.setBlendFunc(_spriteCard00BlendFunc);

        ///// # _spriteCard02
        this._spriteCard02 = new cc.Sprite();
        this._spriteCard02.setName("_spriteCard02");
        this._page00.addChild(this._spriteCard02);
        this._spriteCard02.setCascadeOpacityEnabled(true);
        this._spriteCard02.setCascadeColorEnabled(true);
        this._spriteCard02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteCard02, 0.4726, 0.6326);
        this._spriteCard02.setScale(0.5, 0.5);
        this._spriteCard02.setRotationX(-19.6498);
        this._spriteCard02.setRotationY(-19.6521);
        let _spriteCard02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteCard02);
        let sf = cc.spriteFrameCache.getSpriteFrame("cards/09.png"); if (sf) this._spriteCard02.setSpriteFrame(sf);
        let _spriteCard02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteCard02BlendFunc.src = 1;
        _spriteCard02BlendFunc.dst = 771;
        this._spriteCard02.setBlendFunc(_spriteCard02BlendFunc);

        ///// # _spriteCard05
        this._spriteCard05 = new cc.Sprite();
        this._spriteCard05.setName("_spriteCard05");
        this._page00.addChild(this._spriteCard05);
        this._spriteCard05.setCascadeOpacityEnabled(true);
        this._spriteCard05.setCascadeColorEnabled(true);
        this._spriteCard05.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteCard05, 0.5, 0.873);
        this._spriteCard05.setScale(0.5, 0.5);
        let _spriteCard05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteCard05);
        let sf = cc.spriteFrameCache.getSpriteFrame("cards/02.png"); if (sf) this._spriteCard05.setSpriteFrame(sf);
        let _spriteCard05BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteCard05BlendFunc.src = 1;
        _spriteCard05BlendFunc.dst = 771;
        this._spriteCard05.setBlendFunc(_spriteCard05BlendFunc);

        ///// # _spriteCard05_01
        this._spriteCard05_01 = new cc.Sprite();
        this._spriteCard05_01.setName("_spriteCard05_01");
        this._page00.addChild(this._spriteCard05_01);
        this._spriteCard05_01.setCascadeOpacityEnabled(true);
        this._spriteCard05_01.setCascadeColorEnabled(true);
        this._spriteCard05_01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteCard05_01, 0.5, 0.873);
        this._spriteCard05_01.setScale(0.5, 0.5);
        let _spriteCard05_01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteCard05_01);
        let sf = cc.spriteFrameCache.getSpriteFrame("cards/backs/Green.png"); if (sf) this._spriteCard05_01.setSpriteFrame(sf);
        let _spriteCard05_01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteCard05_01BlendFunc.src = 1;
        _spriteCard05_01BlendFunc.dst = 771;
        this._spriteCard05_01.setBlendFunc(_spriteCard05_01BlendFunc);

        ///// # _spriteCard04
        this._spriteCard04 = new cc.Sprite();
        this._spriteCard04.setName("_spriteCard04");
        this._page00.addChild(this._spriteCard04);
        this._spriteCard04.setCascadeOpacityEnabled(true);
        this._spriteCard04.setCascadeColorEnabled(true);
        this._spriteCard04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteCard04, 0.4547, 0.3811);
        this._spriteCard04.setScale(0.6, 0.6);
        let _spriteCard04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteCard04);
        let sf = cc.spriteFrameCache.getSpriteFrame("cards/11.png"); if (sf) this._spriteCard04.setSpriteFrame(sf);
        let _spriteCard04BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteCard04BlendFunc.src = 1;
        _spriteCard04BlendFunc.dst = 771;
        this._spriteCard04.setBlendFunc(_spriteCard04BlendFunc);

        ///// # _spriteCard03
        this._spriteCard03 = new cc.Sprite();
        this._spriteCard03.setName("_spriteCard03");
        this._page00.addChild(this._spriteCard03);
        this._spriteCard03.setCascadeOpacityEnabled(true);
        this._spriteCard03.setCascadeColorEnabled(true);
        this._spriteCard03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteCard03, 0.5569, 0.3803);
        this._spriteCard03.setScale(0.6, 0.6);
        let _spriteCard03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteCard03);
        let sf = cc.spriteFrameCache.getSpriteFrame("cards/48.png"); if (sf) this._spriteCard03.setSpriteFrame(sf);
        let _spriteCard03BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteCard03BlendFunc.src = 1;
        _spriteCard03BlendFunc.dst = 771;
        this._spriteCard03.setBlendFunc(_spriteCard03BlendFunc);

        ///// # _page01
        this._page01 = new ccui.Layout();
        this._page01.setName("_page01");
        this._pageView.addPage(this._page01);
        this._page01.setCascadeOpacityEnabled(true);
        this._page01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._page01, 0.2, 0);
        let _page01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._page01);
        this._page01.setTouchEnabled(true);
        this._page01.setUnifySizeEnabled(false);
        this._page01.ignoreContentAdaptWithSize(false);
        this._page01.setContentSize(cc.size(486, 747));

        ///// # _spriteDeck_01
        this._spriteDeck_01 = new cc.Sprite();
        this._spriteDeck_01.setName("_spriteDeck_01");
        this._page01.addChild(this._spriteDeck_01);
        this._spriteDeck_01.setCascadeOpacityEnabled(true);
        this._spriteDeck_01.setCascadeColorEnabled(true);
        this._spriteDeck_01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteDeck_01, 0.8739, 0.3213);
        this._spriteDeck_01.setOpacity(215);
        let _spriteDeck_01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteDeck_01);
        let sf = cc.spriteFrameCache.getSpriteFrame("game/ui/Deck.png"); if (sf) this._spriteDeck_01.setSpriteFrame(sf);
        let _spriteDeck_01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteDeck_01BlendFunc.src = 1;
        _spriteDeck_01BlendFunc.dst = 771;
        this._spriteDeck_01.setBlendFunc(_spriteDeck_01BlendFunc);

        ///// # _spriteCard01_01
        this._spriteCard01_01 = new cc.Sprite();
        this._spriteCard01_01.setName("_spriteCard01_01");
        this._page01.addChild(this._spriteCard01_01);
        this._spriteCard01_01.setCascadeOpacityEnabled(true);
        this._spriteCard01_01.setCascadeColorEnabled(true);
        this._spriteCard01_01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteCard01_01, 0.4959, 0.6147);
        this._spriteCard01_01.setScale(0.5, 0.5);
        this._spriteCard01_01.setRotationX(12.7435);
        this._spriteCard01_01.setRotationY(12.7003);
        let _spriteCard01_01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteCard01_01);
        let sf = cc.spriteFrameCache.getSpriteFrame("cards/48.png"); if (sf) this._spriteCard01_01.setSpriteFrame(sf);
        let _spriteCard01_01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteCard01_01BlendFunc.src = 1;
        _spriteCard01_01BlendFunc.dst = 771;
        this._spriteCard01_01.setBlendFunc(_spriteCard01_01BlendFunc);

        ///// # _spriteCard03_01
        this._spriteCard03_01 = new cc.Sprite();
        this._spriteCard03_01.setName("_spriteCard03_01");
        this._page01.addChild(this._spriteCard03_01);
        this._spriteCard03_01.setCascadeOpacityEnabled(true);
        this._spriteCard03_01.setCascadeColorEnabled(true);
        this._spriteCard03_01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteCard03_01, 0.4959, 0.8592);
        this._spriteCard03_01.setScale(0.5, 0.5);
        this._spriteCard03_01.setRotationY(-0.0389);
        let _spriteCard03_01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteCard03_01);
        let sf = cc.spriteFrameCache.getSpriteFrame("cards/37.png"); if (sf) this._spriteCard03_01.setSpriteFrame(sf);
        let _spriteCard03_01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteCard03_01BlendFunc.src = 1;
        _spriteCard03_01BlendFunc.dst = 771;
        this._spriteCard03_01.setBlendFunc(_spriteCard03_01BlendFunc);

        ///// # _spriteCard03_01_01
        this._spriteCard03_01_01 = new cc.Sprite();
        this._spriteCard03_01_01.setName("_spriteCard03_01_01");
        this._page01.addChild(this._spriteCard03_01_01);
        this._spriteCard03_01_01.setCascadeOpacityEnabled(true);
        this._spriteCard03_01_01.setCascadeColorEnabled(true);
        this._spriteCard03_01_01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteCard03_01_01, 0.4959, 0.8592);
        this._spriteCard03_01_01.setScale(0.5, 0.5);
        this._spriteCard03_01_01.setRotationY(-0.0389);
        let _spriteCard03_01_01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteCard03_01_01);
        let sf = cc.spriteFrameCache.getSpriteFrame("cards/backs/Green.png"); if (sf) this._spriteCard03_01_01.setSpriteFrame(sf);
        let _spriteCard03_01_01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteCard03_01_01BlendFunc.src = 1;
        _spriteCard03_01_01BlendFunc.dst = 771;
        this._spriteCard03_01_01.setBlendFunc(_spriteCard03_01_01BlendFunc);

        ///// # _spriteCard02_01
        this._spriteCard02_01 = new cc.Sprite();
        this._spriteCard02_01.setName("_spriteCard02_01");
        this._page01.addChild(this._spriteCard02_01);
        this._spriteCard02_01.setCascadeOpacityEnabled(true);
        this._spriteCard02_01.setCascadeColorEnabled(true);
        this._spriteCard02_01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteCard02_01, 0.4459, 0.3583);
        this._spriteCard02_01.setScale(0.6, 0.6);
        this._spriteCard02_01.setRotationY(-0.0029);
        let _spriteCard02_01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteCard02_01);
        let sf = cc.spriteFrameCache.getSpriteFrame("cards/11.png"); if (sf) this._spriteCard02_01.setSpriteFrame(sf);
        let _spriteCard02_01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteCard02_01BlendFunc.src = 1;
        _spriteCard02_01BlendFunc.dst = 771;
        this._spriteCard02_01.setBlendFunc(_spriteCard02_01BlendFunc);

        ///// # _spriteCard00_01
        this._spriteCard00_01 = new cc.Sprite();
        this._spriteCard00_01.setName("_spriteCard00_01");
        this._page01.addChild(this._spriteCard00_01);
        this._spriteCard00_01.setCascadeOpacityEnabled(true);
        this._spriteCard00_01.setCascadeColorEnabled(true);
        this._spriteCard00_01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteCard00_01, 0.5495, 0.3592);
        this._spriteCard00_01.setScale(0.6, 0.6);
        this._spriteCard00_01.setRotationY(-0.0029);
        let _spriteCard00_01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteCard00_01);
        let sf = cc.spriteFrameCache.getSpriteFrame("cards/09.png"); if (sf) this._spriteCard00_01.setSpriteFrame(sf);
        let _spriteCard00_01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteCard00_01BlendFunc.src = 1;
        _spriteCard00_01BlendFunc.dst = 771;
        this._spriteCard00_01.setBlendFunc(_spriteCard00_01BlendFunc);

        ///// # _spritePisti_01
        this._spritePisti_01 = new cc.Sprite();
        this._spritePisti_01.setName("_spritePisti_01");
        this._page01.addChild(this._spritePisti_01);
        this._spritePisti_01.setCascadeOpacityEnabled(true);
        this._spritePisti_01.setCascadeColorEnabled(true);
        this._spritePisti_01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spritePisti_01, 0.5, 0.6057);
        this._spritePisti_01.setVisible(false);
        this._spritePisti_01.setScale(3, 3);
        this._spritePisti_01.setOpacity(215);
        let _spritePisti_01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spritePisti_01);
        _spritePisti_01LayoutComponent.setPositionPercentXEnabled(true);
        _spritePisti_01LayoutComponent.setPositionPercentX(0.5);
        _spritePisti_01LayoutComponent.setPositionPercentYEnabled(true);
        _spritePisti_01LayoutComponent.setPositionPercentY(0.6057);
        let sf = cc.spriteFrameCache.getSpriteFrame("texts/game/Pisti.png"); if (sf) this._spritePisti_01.setSpriteFrame(sf);
        let _spritePisti_01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spritePisti_01BlendFunc.src = 1;
        _spritePisti_01BlendFunc.dst = 771;
        this._spritePisti_01.setBlendFunc(_spritePisti_01BlendFunc);

        ///// # _spriteDoublePisti_01
        this._spriteDoublePisti_01 = new cc.Sprite();
        this._spriteDoublePisti_01.setName("_spriteDoublePisti_01");
        this._page01.addChild(this._spriteDoublePisti_01);
        this._spriteDoublePisti_01.setCascadeOpacityEnabled(true);
        this._spriteDoublePisti_01.setCascadeColorEnabled(true);
        this._spriteDoublePisti_01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteDoublePisti_01, 0.4767, 0.5845);
        this._spriteDoublePisti_01.setVisible(false);
        this._spriteDoublePisti_01.setOpacity(215);
        let _spriteDoublePisti_01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteDoublePisti_01);
        _spriteDoublePisti_01LayoutComponent.setPositionPercentXEnabled(true);
        _spriteDoublePisti_01LayoutComponent.setPositionPercentX(0.4767);
        _spriteDoublePisti_01LayoutComponent.setPositionPercentYEnabled(true);
        _spriteDoublePisti_01LayoutComponent.setPositionPercentY(0.5845);
        let sf = cc.spriteFrameCache.getSpriteFrame("texts/game/Pistix2.png"); if (sf) this._spriteDoublePisti_01.setSpriteFrame(sf);
        let _spriteDoublePisti_01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteDoublePisti_01BlendFunc.src = 1;
        _spriteDoublePisti_01BlendFunc.dst = 771;
        this._spriteDoublePisti_01.setBlendFunc(_spriteDoublePisti_01BlendFunc);

        ///// # _page02
        this._page02 = new ccui.Layout();
        this._page02.setName("_page02");
        this._pageView.addPage(this._page02);
        this._page02.setCascadeOpacityEnabled(true);
        this._page02.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._page02, 0.4, 0);
        let _page02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._page02);
        this._page02.setTouchEnabled(true);
        this._page02.setUnifySizeEnabled(false);
        this._page02.ignoreContentAdaptWithSize(false);
        this._page02.setContentSize(cc.size(486, 747));

        ///// # _spriteDeck_02
        this._spriteDeck_02 = new cc.Sprite();
        this._spriteDeck_02.setName("_spriteDeck_02");
        this._page02.addChild(this._spriteDeck_02);
        this._spriteDeck_02.setCascadeOpacityEnabled(true);
        this._spriteDeck_02.setCascadeColorEnabled(true);
        this._spriteDeck_02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteDeck_02, 0.8698, 0.3126);
        let _spriteDeck_02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteDeck_02);
        let sf = cc.spriteFrameCache.getSpriteFrame("game/ui/Deck.png"); if (sf) this._spriteDeck_02.setSpriteFrame(sf);
        let _spriteDeck_02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteDeck_02BlendFunc.src = 1;
        _spriteDeck_02BlendFunc.dst = 771;
        this._spriteDeck_02.setBlendFunc(_spriteDeck_02BlendFunc);

        ///// # _spriteCard04_02
        this._spriteCard04_02 = new cc.Sprite();
        this._spriteCard04_02.setName("_spriteCard04_02");
        this._page02.addChild(this._spriteCard04_02);
        this._spriteCard04_02.setCascadeOpacityEnabled(true);
        this._spriteCard04_02.setCascadeColorEnabled(true);
        this._spriteCard04_02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteCard04_02, 0.4849, 0.6088);
        this._spriteCard04_02.setScale(0.5, 0.5);
        this._spriteCard04_02.setRotationX(-3.2138);
        this._spriteCard04_02.setRotationY(-3.2155);
        let _spriteCard04_02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteCard04_02);
        let sf = cc.spriteFrameCache.getSpriteFrame("cards/45.png"); if (sf) this._spriteCard04_02.setSpriteFrame(sf);
        let _spriteCard04_02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteCard04_02BlendFunc.src = 1;
        _spriteCard04_02BlendFunc.dst = 771;
        this._spriteCard04_02.setBlendFunc(_spriteCard04_02BlendFunc);

        ///// # _spriteCard01_02
        this._spriteCard01_02 = new cc.Sprite();
        this._spriteCard01_02.setName("_spriteCard01_02");
        this._page02.addChild(this._spriteCard01_02);
        this._spriteCard01_02.setCascadeOpacityEnabled(true);
        this._spriteCard01_02.setCascadeColorEnabled(true);
        this._spriteCard01_02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteCard01_02, 0.5068, 0.6075);
        this._spriteCard01_02.setScale(0.5, 0.5);
        this._spriteCard01_02.setRotationX(11.181);
        this._spriteCard01_02.setRotationY(11.1738);
        let _spriteCard01_02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteCard01_02);
        let sf = cc.spriteFrameCache.getSpriteFrame("cards/16.png"); if (sf) this._spriteCard01_02.setSpriteFrame(sf);
        let _spriteCard01_02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteCard01_02BlendFunc.src = 1;
        _spriteCard01_02BlendFunc.dst = 771;
        this._spriteCard01_02.setBlendFunc(_spriteCard01_02BlendFunc);

        ///// # _spriteCard00_02
        this._spriteCard00_02 = new cc.Sprite();
        this._spriteCard00_02.setName("_spriteCard00_02");
        this._page02.addChild(this._spriteCard00_02);
        this._spriteCard00_02.setCascadeOpacityEnabled(true);
        this._spriteCard00_02.setCascadeColorEnabled(true);
        this._spriteCard00_02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteCard00_02, 0.4986, 0.8551);
        this._spriteCard00_02.setScale(0.5, 0.5);
        let _spriteCard00_02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteCard00_02);
        let sf = cc.spriteFrameCache.getSpriteFrame("cards/49.png"); if (sf) this._spriteCard00_02.setSpriteFrame(sf);
        let _spriteCard00_02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteCard00_02BlendFunc.src = 1;
        _spriteCard00_02BlendFunc.dst = 771;
        this._spriteCard00_02.setBlendFunc(_spriteCard00_02BlendFunc);

        ///// # _spriteCard00_02_01
        this._spriteCard00_02_01 = new cc.Sprite();
        this._spriteCard00_02_01.setName("_spriteCard00_02_01");
        this._page02.addChild(this._spriteCard00_02_01);
        this._spriteCard00_02_01.setCascadeOpacityEnabled(true);
        this._spriteCard00_02_01.setCascadeColorEnabled(true);
        this._spriteCard00_02_01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteCard00_02_01, 0.4989, 0.8553);
        this._spriteCard00_02_01.setScale(0.5, 0.5);
        let _spriteCard00_02_01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteCard00_02_01);
        let sf = cc.spriteFrameCache.getSpriteFrame("cards/backs/Green.png"); if (sf) this._spriteCard00_02_01.setSpriteFrame(sf);
        let _spriteCard00_02_01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteCard00_02_01BlendFunc.src = 1;
        _spriteCard00_02_01BlendFunc.dst = 771;
        this._spriteCard00_02_01.setBlendFunc(_spriteCard00_02_01BlendFunc);

        ///// # _spriteCard03_02
        this._spriteCard03_02 = new cc.Sprite();
        this._spriteCard03_02.setName("_spriteCard03_02");
        this._page02.addChild(this._spriteCard03_02);
        this._spriteCard03_02.setCascadeOpacityEnabled(true);
        this._spriteCard03_02.setCascadeColorEnabled(true);
        this._spriteCard03_02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteCard03_02, 0.502, 0.3472);
        this._spriteCard03_02.setScale(0.6, 0.6);
        let _spriteCard03_02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteCard03_02);
        let sf = cc.spriteFrameCache.getSpriteFrame("cards/03.png"); if (sf) this._spriteCard03_02.setSpriteFrame(sf);
        let _spriteCard03_02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteCard03_02BlendFunc.src = 1;
        _spriteCard03_02BlendFunc.dst = 771;
        this._spriteCard03_02.setBlendFunc(_spriteCard03_02BlendFunc);

        ///// # _page03
        this._page03 = new ccui.Layout();
        this._page03.setName("_page03");
        this._pageView.addPage(this._page03);
        this._page03.setCascadeOpacityEnabled(true);
        this._page03.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._page03, 0.6, 0);
        let _page03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._page03);
        this._page03.setTouchEnabled(true);
        this._page03.setUnifySizeEnabled(false);
        this._page03.ignoreContentAdaptWithSize(false);
        this._page03.setContentSize(cc.size(486, 747));

        ///// # _layout02
        this._layout02 = new ccui.Layout();
        this._layout02.setName("_layout02");
        this._page03.addChild(this._layout02);
        this._layout02.setCascadeOpacityEnabled(true);
        this._layout02.setCascadeColorEnabled(true);
        this._layout02.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layout02, 0.5, 0.9361);
        let _layout02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layout02);
        _layout02LayoutComponent.setPositionPercentXEnabled(true);
        _layout02LayoutComponent.setPositionPercentX(0.5);
        _layout02LayoutComponent.setPositionPercentYEnabled(true);
        _layout02LayoutComponent.setPositionPercentY(0.9361);
        this._layout02.setTouchEnabled(false);
        this._layout02.setUnifySizeEnabled(false);
        this._layout02.ignoreContentAdaptWithSize(false);
        this._layout02.setContentSize(cc.size(438, 487.2849));

        ///// # _layoutHeader02
        this._layoutHeader02 = new ccui.Layout();
        this._layoutHeader02.setName("_layoutHeader02");
        this._layout02.addChild(this._layoutHeader02);
        this._layoutHeader02.setCascadeOpacityEnabled(true);
        this._layoutHeader02.setCascadeColorEnabled(true);
        this._layoutHeader02.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutHeader02, 0, 1);
        let _layoutHeader02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHeader02);
        _layoutHeader02LayoutComponent.setPositionPercentYEnabled(true);
        _layoutHeader02LayoutComponent.setPositionPercentY(1);
        _layoutHeader02LayoutComponent.setPercentWidthEnabled(true);
        _layoutHeader02LayoutComponent.setPercentWidth(1);
        this._layoutHeader02.setTouchEnabled(false);
        this._layoutHeader02.setUnifySizeEnabled(false);
        this._layoutHeader02.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutHeader02, 1);
        this._layoutHeader02.setContentSize(cc.size(this._layoutHeader02.width, 45));

        ///// # _imgHeader02
        this._imgHeader02 = new ccui.ImageView();
        this._imgHeader02.setName("_imgHeader02");
        this._layoutHeader02.addChild(this._imgHeader02);
        this._imgHeader02.setCascadeOpacityEnabled(true);
        this._imgHeader02.setCascadeColorEnabled(true);
        this._imgHeader02.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader02, 0, 0.5);
        this._imgHeader02.setColor(cc.color(197, 218, 237, 255));
        let _imgHeader02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader02);
        _imgHeader02LayoutComponent.setPositionPercentXEnabled(true);
        _imgHeader02LayoutComponent.setPositionPercentX(0);
        _imgHeader02LayoutComponent.setPositionPercentYEnabled(true);
        _imgHeader02LayoutComponent.setPositionPercentY(0.5);
        _imgHeader02LayoutComponent.setPercentWidthEnabled(true);
        _imgHeader02LayoutComponent.setPercentWidth(0.95);
        this._imgHeader02.loadTexture("basics/other/ArrowBoard.png", 1);
        this._imgHeader02.setUnifySizeEnabled(false);
        this._imgHeader02.ignoreContentAdaptWithSize(false);
        this._imgHeader02.setScale9Enabled(true);
        this._imgHeader02.setCapInsets(cc.rect(3, 19, 1, 2));
        ck.UIUtils.setWidthPercent(this._imgHeader02, 0.95);
        this._imgHeader02.setContentSize(cc.size(this._imgHeader02.width, 43));
        this._imgHeader02.setTouchEnabled(false);

        ///// # _txtHeader02
        this._txtHeader02 = new ck.Text();
        this._txtHeader02.setName("_txtHeader02");
        this._layoutHeader02.addChild(this._txtHeader02);
        this._txtHeader02.setCascadeOpacityEnabled(true);
        this._txtHeader02.setCascadeColorEnabled(true);
        this._txtHeader02.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHeader02, 0.0293, 0.5);
        this._txtHeader02.setTextColor(cc.color(233, 217, 194, 255));
        let _txtHeader02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHeader02);
        _txtHeader02LayoutComponent.setPositionPercentXEnabled(true);
        _txtHeader02LayoutComponent.setPositionPercentX(0.0293);
        _txtHeader02LayoutComponent.setPositionPercentYEnabled(true);
        _txtHeader02LayoutComponent.setPositionPercentY(0.5);
        this._txtHeader02.setTouchEnabled(false);
        this._txtHeader02.ignoreContentAdaptWithSize(true);
        this._txtHeader02.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHeader02.setDefaultFontSize(30);
        this._txtHeader02.setString(gm.localize.getText("TXT_TUTORIAL_GUIDE_03_01"));
        this._txtHeader02.setTextHorizontalAlignment(0);
        this._txtHeader02.setTextVerticalAlignment(1);

        ///// # _layoutNumber02
        this._layoutNumber02 = new ccui.Layout();
        this._layoutNumber02.setName("_layoutNumber02");
        this._layoutHeader02.addChild(this._layoutNumber02);
        this._layoutNumber02.setCascadeOpacityEnabled(true);
        this._layoutNumber02.setCascadeColorEnabled(true);
        this._layoutNumber02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutNumber02, 0, 0.5);
        let _layoutNumber02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutNumber02);
        _layoutNumber02LayoutComponent.setPositionPercentYEnabled(true);
        _layoutNumber02LayoutComponent.setPositionPercentY(0.5);
        this._layoutNumber02.setTouchEnabled(false);
        this._layoutNumber02.setUnifySizeEnabled(false);
        this._layoutNumber02.ignoreContentAdaptWithSize(false);
        this._layoutNumber02.setContentSize(cc.size(64, 64));

        ///// # _layoutContent02
        this._layoutContent02 = new ccui.Layout();
        this._layoutContent02.setName("_layoutContent02");
        this._layout02.addChild(this._layoutContent02);
        this._layoutContent02.setCascadeOpacityEnabled(true);
        this._layoutContent02.setCascadeColorEnabled(true);
        this._layoutContent02.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutContent02, 0.5, 1);
        let _layoutContent02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutContent02);
        _layoutContent02LayoutComponent.setPositionPercentXEnabled(true);
        _layoutContent02LayoutComponent.setPositionPercentX(0.5);
        _layoutContent02LayoutComponent.setPositionPercentYEnabled(true);
        _layoutContent02LayoutComponent.setPositionPercentY(1);
        _layoutContent02LayoutComponent.setPercentWidthEnabled(true);
        _layoutContent02LayoutComponent.setPercentWidth(1);
        _layoutContent02LayoutComponent.setPercentHeightEnabled(true);
        _layoutContent02LayoutComponent.setPercentHeight(1);
        this._layoutContent02.setTouchEnabled(false);
        this._layoutContent02.setUnifySizeEnabled(false);
        this._layoutContent02.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutContent02, 1, 1);

        ///// # _layoutLine01
        this._layoutLine01 = new ccui.Layout();
        this._layoutLine01.setName("_layoutLine01");
        this._layoutContent02.addChild(this._layoutLine01);
        this._layoutLine01.setCascadeOpacityEnabled(true);
        this._layoutLine01.setCascadeColorEnabled(true);
        this._layoutLine01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutLine01, 0.5, 0.883);
        let _layoutLine01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLine01);
        _layoutLine01LayoutComponent.setPositionPercentXEnabled(true);
        _layoutLine01LayoutComponent.setPositionPercentX(0.5);
        _layoutLine01LayoutComponent.setPercentWidthEnabled(true);
        _layoutLine01LayoutComponent.setPercentWidth(1);
        this._layoutLine01.setTouchEnabled(false);
        this._layoutLine01.setUnifySizeEnabled(false);
        this._layoutLine01.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutLine01, 1);
        this._layoutLine01.setContentSize(cc.size(this._layoutLine01.width, 60));

        ///// # _imgBgr01
        this._imgBgr01 = new ccui.ImageView();
        this._imgBgr01.setName("_imgBgr01");
        this._layoutLine01.addChild(this._imgBgr01);
        this._imgBgr01.setCascadeOpacityEnabled(true);
        this._imgBgr01.setCascadeColorEnabled(true);
        this._imgBgr01.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr01, 1, 0.3583);
        this._imgBgr01.setOpacity(38);
        this._imgBgr01.setColor(cc.color(0, 0, 0, 255));
        let _imgBgr01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr01);
        _imgBgr01LayoutComponent.setPercentWidthEnabled(true);
        _imgBgr01LayoutComponent.setPercentWidth(1);
        _imgBgr01LayoutComponent.setPercentHeightEnabled(true);
        _imgBgr01LayoutComponent.setPercentHeight(1);
        this._imgBgr01.loadTexture("sprites/basics/White1x1.png", 0);
        this._imgBgr01.setUnifySizeEnabled(false);
        this._imgBgr01.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBgr01, 1, 1);
        this._imgBgr01.setTouchEnabled(false);

        ///// # _imgDot01
        this._imgDot01 = new ccui.ImageView();
        this._imgDot01.setName("_imgDot01");
        this._layoutLine01.addChild(this._imgDot01);
        this._imgDot01.setCascadeOpacityEnabled(true);
        this._imgDot01.setCascadeColorEnabled(true);
        this._imgDot01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgDot01, 0.037, 0.3367);
        let _imgDot01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDot01);
        this._imgDot01.loadTexture("icons/flat/Point.png", 1);
        this._imgDot01.setUnifySizeEnabled(false);
        this._imgDot01.ignoreContentAdaptWithSize(false);
        this._imgDot01.setContentSize(cc.size(15, 15));
        this._imgDot01.setTouchEnabled(false);

        ///// # _imgCard05
        this._imgCard05 = new ccui.ImageView();
        this._imgCard05.setName("_imgCard05");
        this._layoutLine01.addChild(this._imgCard05);
        this._imgCard05.setCascadeOpacityEnabled(true);
        this._imgCard05.setCascadeColorEnabled(true);
        this._imgCard05.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCard05, 0.1123, 0.3583);
        this._imgCard05.setScale(0.28, 0.28);
        let _imgCard05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard05);
        _imgCard05LayoutComponent.setPositionPercentXEnabled(true);
        _imgCard05LayoutComponent.setPositionPercentX(0.1123);
        _imgCard05LayoutComponent.setPositionPercentYEnabled(true);
        _imgCard05LayoutComponent.setPositionPercentY(0.3583);
        this._imgCard05.loadTexture("cards/11.png", 1);
        this._imgCard05.setUnifySizeEnabled(false);
        this._imgCard05.ignoreContentAdaptWithSize(false);
        this._imgCard05.setContentSize(cc.size(186, 256));
        this._imgCard05.setTouchEnabled(false);

        ///// # _imgCard06
        this._imgCard06 = new ccui.ImageView();
        this._imgCard06.setName("_imgCard06");
        this._layoutLine01.addChild(this._imgCard06);
        this._imgCard06.setCascadeOpacityEnabled(true);
        this._imgCard06.setCascadeColorEnabled(true);
        this._imgCard06.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCard06, 0.231, 0.3583);
        this._imgCard06.setScale(0.28, 0.28);
        let _imgCard06LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard06);
        _imgCard06LayoutComponent.setPositionPercentXEnabled(true);
        _imgCard06LayoutComponent.setPositionPercentX(0.231);
        _imgCard06LayoutComponent.setPositionPercentYEnabled(true);
        _imgCard06LayoutComponent.setPositionPercentY(0.3583);
        this._imgCard06.loadTexture("cards/24.png", 1);
        this._imgCard06.setUnifySizeEnabled(false);
        this._imgCard06.ignoreContentAdaptWithSize(false);
        this._imgCard06.setContentSize(cc.size(186, 256));
        this._imgCard06.setTouchEnabled(false);

        ///// # _imgCard07
        this._imgCard07 = new ccui.ImageView();
        this._imgCard07.setName("_imgCard07");
        this._layoutLine01.addChild(this._imgCard07);
        this._imgCard07.setCascadeOpacityEnabled(true);
        this._imgCard07.setCascadeColorEnabled(true);
        this._imgCard07.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCard07, 0.3475, 0.3583);
        this._imgCard07.setScale(0.28, 0.28);
        let _imgCard07LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard07);
        _imgCard07LayoutComponent.setPositionPercentXEnabled(true);
        _imgCard07LayoutComponent.setPositionPercentX(0.3475);
        _imgCard07LayoutComponent.setPositionPercentYEnabled(true);
        _imgCard07LayoutComponent.setPositionPercentY(0.3583);
        this._imgCard07.loadTexture("cards/37.png", 1);
        this._imgCard07.setUnifySizeEnabled(false);
        this._imgCard07.ignoreContentAdaptWithSize(false);
        this._imgCard07.setContentSize(cc.size(186, 256));
        this._imgCard07.setTouchEnabled(false);

        ///// # _imgCard08
        this._imgCard08 = new ccui.ImageView();
        this._imgCard08.setName("_imgCard08");
        this._layoutLine01.addChild(this._imgCard08);
        this._imgCard08.setCascadeOpacityEnabled(true);
        this._imgCard08.setCascadeColorEnabled(true);
        this._imgCard08.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCard08, 0.4662, 0.3583);
        this._imgCard08.setScale(0.28, 0.28);
        let _imgCard08LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard08);
        _imgCard08LayoutComponent.setPositionPercentXEnabled(true);
        _imgCard08LayoutComponent.setPositionPercentX(0.4662);
        _imgCard08LayoutComponent.setPositionPercentYEnabled(true);
        _imgCard08LayoutComponent.setPositionPercentY(0.3583);
        this._imgCard08.loadTexture("cards/50.png", 1);
        this._imgCard08.setUnifySizeEnabled(false);
        this._imgCard08.ignoreContentAdaptWithSize(false);
        this._imgCard08.setContentSize(cc.size(186, 256));
        this._imgCard08.setTouchEnabled(false);

        ///// # _txtLine01
        this._txtLine01 = new ck.Text();
        this._txtLine01.setName("_txtLine01");
        this._layoutLine01.addChild(this._txtLine01);
        this._txtLine01.setCascadeOpacityEnabled(true);
        this._txtLine01.setCascadeColorEnabled(true);
        this._txtLine01.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLine01, 0.9838, 0.3583);
        this._txtLine01.setTextColor(cc.color(148, 23, 0, 255));
        let _txtLine01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLine01);
        this._txtLine01.setTouchEnabled(false);
        this._txtLine01.ignoreContentAdaptWithSize(true);
        this._txtLine01.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLine01.setDefaultFontSize(30);
        this._txtLine01.setString(gm.localize.getText("TXT_GUIDE_SCORE_JACK"));
        this._txtLine01.setTextHorizontalAlignment(2);
        this._txtLine01.setTextVerticalAlignment(1);

        ///// # _layoutLine02
        this._layoutLine02 = new ccui.Layout();
        this._layoutLine02.setName("_layoutLine02");
        this._layoutContent02.addChild(this._layoutLine02);
        this._layoutLine02.setCascadeOpacityEnabled(true);
        this._layoutLine02.setCascadeColorEnabled(true);
        this._layoutLine02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutLine02, 0.5, 0.7208);
        let _layoutLine02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLine02);
        _layoutLine02LayoutComponent.setPositionPercentXEnabled(true);
        _layoutLine02LayoutComponent.setPositionPercentX(0.5);
        _layoutLine02LayoutComponent.setPercentWidthEnabled(true);
        _layoutLine02LayoutComponent.setPercentWidth(1);
        this._layoutLine02.setTouchEnabled(false);
        this._layoutLine02.setUnifySizeEnabled(false);
        this._layoutLine02.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutLine02, 1);
        this._layoutLine02.setContentSize(cc.size(this._layoutLine02.width, 60));

        ///// # _imgBgr02
        this._imgBgr02 = new ccui.ImageView();
        this._imgBgr02.setName("_imgBgr02");
        this._layoutLine02.addChild(this._imgBgr02);
        this._imgBgr02.setCascadeOpacityEnabled(true);
        this._imgBgr02.setCascadeColorEnabled(true);
        this._imgBgr02.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr02, 1, 0.3583);
        this._imgBgr02.setOpacity(38);
        this._imgBgr02.setColor(cc.color(0, 0, 0, 255));
        let _imgBgr02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr02);
        _imgBgr02LayoutComponent.setPercentWidthEnabled(true);
        _imgBgr02LayoutComponent.setPercentWidth(1);
        _imgBgr02LayoutComponent.setPercentHeightEnabled(true);
        _imgBgr02LayoutComponent.setPercentHeight(1);
        this._imgBgr02.loadTexture("sprites/basics/White1x1.png", 0);
        this._imgBgr02.setUnifySizeEnabled(false);
        this._imgBgr02.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBgr02, 1, 1);
        this._imgBgr02.setTouchEnabled(false);

        ///// # _imgDot02
        this._imgDot02 = new ccui.ImageView();
        this._imgDot02.setName("_imgDot02");
        this._layoutLine02.addChild(this._imgDot02);
        this._imgDot02.setCascadeOpacityEnabled(true);
        this._imgDot02.setCascadeColorEnabled(true);
        this._imgDot02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgDot02, 0.037, 0.3367);
        let _imgDot02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDot02);
        this._imgDot02.loadTexture("icons/flat/Point.png", 1);
        this._imgDot02.setUnifySizeEnabled(false);
        this._imgDot02.ignoreContentAdaptWithSize(false);
        this._imgDot02.setContentSize(cc.size(15, 15));
        this._imgDot02.setTouchEnabled(false);

        ///// # _imgCard09
        this._imgCard09 = new ccui.ImageView();
        this._imgCard09.setName("_imgCard09");
        this._layoutLine02.addChild(this._imgCard09);
        this._imgCard09.setCascadeOpacityEnabled(true);
        this._imgCard09.setCascadeColorEnabled(true);
        this._imgCard09.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCard09, 0.1123, 0.3583);
        this._imgCard09.setScale(0.28, 0.28);
        let _imgCard09LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard09);
        _imgCard09LayoutComponent.setPositionPercentXEnabled(true);
        _imgCard09LayoutComponent.setPositionPercentX(0.1123);
        _imgCard09LayoutComponent.setPositionPercentYEnabled(true);
        _imgCard09LayoutComponent.setPositionPercentY(0.3583);
        this._imgCard09.loadTexture("cards/01.png", 1);
        this._imgCard09.setUnifySizeEnabled(false);
        this._imgCard09.ignoreContentAdaptWithSize(false);
        this._imgCard09.setContentSize(cc.size(186, 256));
        this._imgCard09.setTouchEnabled(false);

        ///// # _imgCard10
        this._imgCard10 = new ccui.ImageView();
        this._imgCard10.setName("_imgCard10");
        this._layoutLine02.addChild(this._imgCard10);
        this._imgCard10.setCascadeOpacityEnabled(true);
        this._imgCard10.setCascadeColorEnabled(true);
        this._imgCard10.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCard10, 0.231, 0.3583);
        this._imgCard10.setScale(0.28, 0.28);
        let _imgCard10LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard10);
        _imgCard10LayoutComponent.setPositionPercentXEnabled(true);
        _imgCard10LayoutComponent.setPositionPercentX(0.231);
        _imgCard10LayoutComponent.setPositionPercentYEnabled(true);
        _imgCard10LayoutComponent.setPositionPercentY(0.3583);
        this._imgCard10.loadTexture("cards/14.png", 1);
        this._imgCard10.setUnifySizeEnabled(false);
        this._imgCard10.ignoreContentAdaptWithSize(false);
        this._imgCard10.setContentSize(cc.size(186, 256));
        this._imgCard10.setTouchEnabled(false);

        ///// # _imgCard11
        this._imgCard11 = new ccui.ImageView();
        this._imgCard11.setName("_imgCard11");
        this._layoutLine02.addChild(this._imgCard11);
        this._imgCard11.setCascadeOpacityEnabled(true);
        this._imgCard11.setCascadeColorEnabled(true);
        this._imgCard11.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCard11, 0.3475, 0.3583);
        this._imgCard11.setScale(0.28, 0.28);
        let _imgCard11LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard11);
        this._imgCard11.loadTexture("cards/27.png", 1);
        this._imgCard11.setUnifySizeEnabled(false);
        this._imgCard11.ignoreContentAdaptWithSize(false);
        this._imgCard11.setContentSize(cc.size(186, 256));
        this._imgCard11.setTouchEnabled(false);

        ///// # _imgCard12
        this._imgCard12 = new ccui.ImageView();
        this._imgCard12.setName("_imgCard12");
        this._layoutLine02.addChild(this._imgCard12);
        this._imgCard12.setCascadeOpacityEnabled(true);
        this._imgCard12.setCascadeColorEnabled(true);
        this._imgCard12.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCard12, 0.4662, 0.3583);
        this._imgCard12.setScale(0.28, 0.28);
        let _imgCard12LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard12);
        _imgCard12LayoutComponent.setPositionPercentXEnabled(true);
        _imgCard12LayoutComponent.setPositionPercentX(0.4662);
        _imgCard12LayoutComponent.setPositionPercentYEnabled(true);
        _imgCard12LayoutComponent.setPositionPercentY(0.3583);
        this._imgCard12.loadTexture("cards/40.png", 1);
        this._imgCard12.setUnifySizeEnabled(false);
        this._imgCard12.ignoreContentAdaptWithSize(false);
        this._imgCard12.setContentSize(cc.size(186, 256));
        this._imgCard12.setTouchEnabled(false);

        ///// # _txtLine02
        this._txtLine02 = new ck.Text();
        this._txtLine02.setName("_txtLine02");
        this._layoutLine02.addChild(this._txtLine02);
        this._txtLine02.setCascadeOpacityEnabled(true);
        this._txtLine02.setCascadeColorEnabled(true);
        this._txtLine02.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLine02, 0.9838, 0.3583);
        this._txtLine02.setTextColor(cc.color(148, 23, 0, 255));
        let _txtLine02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLine02);
        this._txtLine02.setTouchEnabled(false);
        this._txtLine02.ignoreContentAdaptWithSize(true);
        this._txtLine02.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLine02.setDefaultFontSize(30);
        this._txtLine02.setString(gm.localize.getText("TXT_GUIDE_SCORE_ACE"));
        this._txtLine02.setTextHorizontalAlignment(2);
        this._txtLine02.setTextVerticalAlignment(1);

        ///// # _layoutLine03
        this._layoutLine03 = new ccui.Layout();
        this._layoutLine03.setName("_layoutLine03");
        this._layoutContent02.addChild(this._layoutLine03);
        this._layoutLine03.setCascadeOpacityEnabled(true);
        this._layoutLine03.setCascadeColorEnabled(true);
        this._layoutLine03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutLine03, 0.5, 0.5583);
        let _layoutLine03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLine03);
        _layoutLine03LayoutComponent.setPositionPercentXEnabled(true);
        _layoutLine03LayoutComponent.setPositionPercentX(0.5);
        _layoutLine03LayoutComponent.setPercentWidthEnabled(true);
        _layoutLine03LayoutComponent.setPercentWidth(1);
        this._layoutLine03.setTouchEnabled(false);
        this._layoutLine03.setUnifySizeEnabled(false);
        this._layoutLine03.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutLine03, 1);
        this._layoutLine03.setContentSize(cc.size(this._layoutLine03.width, 60));

        ///// # _imgBgr03
        this._imgBgr03 = new ccui.ImageView();
        this._imgBgr03.setName("_imgBgr03");
        this._layoutLine03.addChild(this._imgBgr03);
        this._imgBgr03.setCascadeOpacityEnabled(true);
        this._imgBgr03.setCascadeColorEnabled(true);
        this._imgBgr03.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr03, 1, 0.3583);
        this._imgBgr03.setOpacity(38);
        this._imgBgr03.setColor(cc.color(0, 0, 0, 255));
        let _imgBgr03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr03);
        _imgBgr03LayoutComponent.setPercentWidthEnabled(true);
        _imgBgr03LayoutComponent.setPercentWidth(1);
        _imgBgr03LayoutComponent.setPercentHeightEnabled(true);
        _imgBgr03LayoutComponent.setPercentHeight(1);
        this._imgBgr03.loadTexture("sprites/basics/White1x1.png", 0);
        this._imgBgr03.setUnifySizeEnabled(false);
        this._imgBgr03.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBgr03, 1, 1);
        this._imgBgr03.setTouchEnabled(false);

        ///// # _imgDot03
        this._imgDot03 = new ccui.ImageView();
        this._imgDot03.setName("_imgDot03");
        this._layoutLine03.addChild(this._imgDot03);
        this._imgDot03.setCascadeOpacityEnabled(true);
        this._imgDot03.setCascadeColorEnabled(true);
        this._imgDot03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgDot03, 0.037, 0.3367);
        let _imgDot03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDot03);
        this._imgDot03.loadTexture("icons/flat/Point.png", 1);
        this._imgDot03.setUnifySizeEnabled(false);
        this._imgDot03.ignoreContentAdaptWithSize(false);
        this._imgDot03.setContentSize(cc.size(15, 15));
        this._imgDot03.setTouchEnabled(false);

        ///// # _imgCard13
        this._imgCard13 = new ccui.ImageView();
        this._imgCard13.setName("_imgCard13");
        this._layoutLine03.addChild(this._imgCard13);
        this._imgCard13.setCascadeOpacityEnabled(true);
        this._imgCard13.setCascadeColorEnabled(true);
        this._imgCard13.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCard13, 0.1123, 0.3583);
        this._imgCard13.setScale(0.28, 0.28);
        let _imgCard13LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard13);
        _imgCard13LayoutComponent.setPositionPercentXEnabled(true);
        _imgCard13LayoutComponent.setPositionPercentX(0.1123);
        _imgCard13LayoutComponent.setPositionPercentYEnabled(true);
        _imgCard13LayoutComponent.setPositionPercentY(0.3583);
        this._imgCard13.loadTexture("cards/15.png", 1);
        this._imgCard13.setUnifySizeEnabled(false);
        this._imgCard13.ignoreContentAdaptWithSize(false);
        this._imgCard13.setContentSize(cc.size(186, 256));
        this._imgCard13.setTouchEnabled(false);

        ///// # _txtLine030
        this._txtLine030 = new ck.Text();
        this._txtLine030.setName("_txtLine030");
        this._layoutLine03.addChild(this._txtLine030);
        this._txtLine030.setCascadeOpacityEnabled(true);
        this._txtLine030.setCascadeColorEnabled(true);
        this._txtLine030.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLine030, 0.1817, 0.36);
        this._txtLine030.setTextColor(cc.color(148, 23, 0, 255));
        let _txtLine030LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLine030);
        _txtLine030LayoutComponent.setPositionPercentYEnabled(true);
        _txtLine030LayoutComponent.setPositionPercentY(0.36);
        this._txtLine030.setTouchEnabled(false);
        this._txtLine030.ignoreContentAdaptWithSize(true);
        this._txtLine030.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLine030.setDefaultFontSize(30);
        this._txtLine030.setString(gm.localize.getText("TXT_GUIDE_SCORE_2C"));
        this._txtLine030.setTextHorizontalAlignment(0);
        this._txtLine030.setTextVerticalAlignment(1);

        ///// # _imgCard14
        this._imgCard14 = new ccui.ImageView();
        this._imgCard14.setName("_imgCard14");
        this._layoutLine03.addChild(this._imgCard14);
        this._imgCard14.setCascadeOpacityEnabled(true);
        this._imgCard14.setCascadeColorEnabled(true);
        this._imgCard14.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCard14, 0.5818, 0.3583);
        this._imgCard14.setScale(0.28, 0.28);
        let _imgCard14LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard14);
        _imgCard14LayoutComponent.setPositionPercentXEnabled(true);
        _imgCard14LayoutComponent.setPositionPercentX(0.5818);
        _imgCard14LayoutComponent.setPositionPercentYEnabled(true);
        _imgCard14LayoutComponent.setPositionPercentY(0.3583);
        this._imgCard14.loadTexture("cards/36.png", 1);
        this._imgCard14.setUnifySizeEnabled(false);
        this._imgCard14.ignoreContentAdaptWithSize(false);
        this._imgCard14.setContentSize(cc.size(186, 256));
        this._imgCard14.setTouchEnabled(false);

        ///// # _txtLine031
        this._txtLine031 = new ck.Text();
        this._txtLine031.setName("_txtLine031");
        this._layoutLine03.addChild(this._txtLine031);
        this._txtLine031.setCascadeOpacityEnabled(true);
        this._txtLine031.setCascadeColorEnabled(true);
        this._txtLine031.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLine031, 0.6482, 0.3583);
        this._txtLine031.setTextColor(cc.color(148, 23, 0, 255));
        let _txtLine031LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLine031);
        this._txtLine031.setTouchEnabled(false);
        this._txtLine031.ignoreContentAdaptWithSize(true);
        this._txtLine031.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLine031.setDefaultFontSize(30);
        this._txtLine031.setString(gm.localize.getText("TXT_GUIDE_SCORE_10D"));
        this._txtLine031.setTextHorizontalAlignment(0);
        this._txtLine031.setTextVerticalAlignment(1);

        ///// # _layoutLine04
        this._layoutLine04 = new ccui.Layout();
        this._layoutLine04.setName("_layoutLine04");
        this._layoutContent02.addChild(this._layoutLine04);
        this._layoutLine04.setCascadeOpacityEnabled(true);
        this._layoutLine04.setCascadeColorEnabled(true);
        this._layoutLine04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutLine04, 0.5, 0.3961);
        let _layoutLine04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLine04);
        _layoutLine04LayoutComponent.setPositionPercentXEnabled(true);
        _layoutLine04LayoutComponent.setPositionPercentX(0.5);
        _layoutLine04LayoutComponent.setPercentWidthEnabled(true);
        _layoutLine04LayoutComponent.setPercentWidth(1);
        this._layoutLine04.setTouchEnabled(false);
        this._layoutLine04.setUnifySizeEnabled(false);
        this._layoutLine04.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutLine04, 1);
        this._layoutLine04.setContentSize(cc.size(this._layoutLine04.width, 60));

        ///// # _imgBgr04
        this._imgBgr04 = new ccui.ImageView();
        this._imgBgr04.setName("_imgBgr04");
        this._layoutLine04.addChild(this._imgBgr04);
        this._imgBgr04.setCascadeOpacityEnabled(true);
        this._imgBgr04.setCascadeColorEnabled(true);
        this._imgBgr04.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr04, 1, 0.3583);
        this._imgBgr04.setOpacity(38);
        this._imgBgr04.setColor(cc.color(0, 0, 0, 255));
        let _imgBgr04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr04);
        _imgBgr04LayoutComponent.setPercentWidthEnabled(true);
        _imgBgr04LayoutComponent.setPercentWidth(1);
        _imgBgr04LayoutComponent.setPercentHeightEnabled(true);
        _imgBgr04LayoutComponent.setPercentHeight(1);
        this._imgBgr04.loadTexture("sprites/basics/White1x1.png", 0);
        this._imgBgr04.setUnifySizeEnabled(false);
        this._imgBgr04.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBgr04, 1, 1);
        this._imgBgr04.setTouchEnabled(false);

        ///// # _imgDot04
        this._imgDot04 = new ccui.ImageView();
        this._imgDot04.setName("_imgDot04");
        this._layoutLine04.addChild(this._imgDot04);
        this._imgDot04.setCascadeOpacityEnabled(true);
        this._imgDot04.setCascadeColorEnabled(true);
        this._imgDot04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgDot04, 0.037, 0.3367);
        let _imgDot04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDot04);
        this._imgDot04.loadTexture("icons/flat/Point.png", 1);
        this._imgDot04.setUnifySizeEnabled(false);
        this._imgDot04.ignoreContentAdaptWithSize(false);
        this._imgDot04.setContentSize(cc.size(15, 15));
        this._imgDot04.setTouchEnabled(false);

        ///// # _txtMoreCards_0
        this._txtMoreCards_0 = new ck.Text();
        this._txtMoreCards_0.setName("_txtMoreCards_0");
        this._layoutLine04.addChild(this._txtMoreCards_0);
        this._txtMoreCards_0.setCascadeOpacityEnabled(true);
        this._txtMoreCards_0.setCascadeColorEnabled(true);
        this._txtMoreCards_0.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMoreCards_0, 0.0683, 0.3583);
        this._txtMoreCards_0.setTextColor(cc.color(111, 58, 48, 255));
        let _txtMoreCards_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMoreCards_0);
        this._txtMoreCards_0.setTouchEnabled(false);
        this._txtMoreCards_0.ignoreContentAdaptWithSize(true);
        this._txtMoreCards_0.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMoreCards_0.setDefaultFontSize(28);
        this._txtMoreCards_0.setString(gm.localize.getText("TXT_GUIDE_NORMAL_CARD"));
        this._txtMoreCards_0.setTextHorizontalAlignment(0);
        this._txtMoreCards_0.setTextVerticalAlignment(1);

        ///// # _txtLine04
        this._txtLine04 = new ck.Text();
        this._txtLine04.setName("_txtLine04");
        this._layoutLine04.addChild(this._txtLine04);
        this._txtLine04.setCascadeOpacityEnabled(true);
        this._txtLine04.setCascadeColorEnabled(true);
        this._txtLine04.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLine04, 0.9838, 0.3583);
        this._txtLine04.setTextColor(cc.color(148, 23, 0, 255));
        let _txtLine04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLine04);
        this._txtLine04.setTouchEnabled(false);
        this._txtLine04.ignoreContentAdaptWithSize(true);
        this._txtLine04.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLine04.setDefaultFontSize(30);
        this._txtLine04.setString(gm.localize.getText("TXT_GUIDE_SCORE_NORMAL_CARD"));
        this._txtLine04.setTextHorizontalAlignment(2);
        this._txtLine04.setTextVerticalAlignment(1);

        ///// # _layoutLine05
        this._layoutLine05 = new ccui.Layout();
        this._layoutLine05.setName("_layoutLine05");
        this._layoutContent02.addChild(this._layoutLine05);
        this._layoutLine05.setCascadeOpacityEnabled(true);
        this._layoutLine05.setCascadeColorEnabled(true);
        this._layoutLine05.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutLine05, 0.5, 0.2422);
        let _layoutLine05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLine05);
        _layoutLine05LayoutComponent.setPositionPercentXEnabled(true);
        _layoutLine05LayoutComponent.setPositionPercentX(0.5);
        _layoutLine05LayoutComponent.setPercentWidthEnabled(true);
        _layoutLine05LayoutComponent.setPercentWidth(1);
        this._layoutLine05.setTouchEnabled(false);
        this._layoutLine05.setUnifySizeEnabled(false);
        this._layoutLine05.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutLine05, 1);
        this._layoutLine05.setContentSize(cc.size(this._layoutLine05.width, 60));

        ///// # _imgBgr05
        this._imgBgr05 = new ccui.ImageView();
        this._imgBgr05.setName("_imgBgr05");
        this._layoutLine05.addChild(this._imgBgr05);
        this._imgBgr05.setCascadeOpacityEnabled(true);
        this._imgBgr05.setCascadeColorEnabled(true);
        this._imgBgr05.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr05, 1, 0.3583);
        this._imgBgr05.setOpacity(38);
        this._imgBgr05.setColor(cc.color(0, 0, 0, 255));
        let _imgBgr05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr05);
        _imgBgr05LayoutComponent.setPercentWidthEnabled(true);
        _imgBgr05LayoutComponent.setPercentWidth(1);
        _imgBgr05LayoutComponent.setPercentHeightEnabled(true);
        _imgBgr05LayoutComponent.setPercentHeight(1);
        this._imgBgr05.loadTexture("sprites/basics/White1x1.png", 0);
        this._imgBgr05.setUnifySizeEnabled(false);
        this._imgBgr05.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBgr05, 1, 1);
        this._imgBgr05.setTouchEnabled(false);

        ///// # _imgDot05
        this._imgDot05 = new ccui.ImageView();
        this._imgDot05.setName("_imgDot05");
        this._layoutLine05.addChild(this._imgDot05);
        this._imgDot05.setCascadeOpacityEnabled(true);
        this._imgDot05.setCascadeColorEnabled(true);
        this._imgDot05.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgDot05, 0.037, 0.3367);
        let _imgDot05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDot05);
        this._imgDot05.loadTexture("icons/flat/Point.png", 1);
        this._imgDot05.setUnifySizeEnabled(false);
        this._imgDot05.ignoreContentAdaptWithSize(false);
        this._imgDot05.setContentSize(cc.size(15, 15));
        this._imgDot05.setTouchEnabled(false);

        ///// # _txtLine05
        this._txtLine05 = new ck.Text();
        this._txtLine05.setName("_txtLine05");
        this._layoutLine05.addChild(this._txtLine05);
        this._txtLine05.setCascadeOpacityEnabled(true);
        this._txtLine05.setCascadeColorEnabled(true);
        this._txtLine05.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLine05, 0.9838, 0.3583);
        this._txtLine05.setTextColor(cc.color(148, 23, 0, 255));
        let _txtLine05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLine05);
        this._txtLine05.setTouchEnabled(false);
        this._txtLine05.ignoreContentAdaptWithSize(true);
        this._txtLine05.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLine05.setDefaultFontSize(30);
        this._txtLine05.setString(gm.localize.getText("TXT_GUIDE_SCORE_MORE_CARD"));
        this._txtLine05.setTextHorizontalAlignment(2);
        this._txtLine05.setTextVerticalAlignment(1);

        ///// # _txtMoreCards
        this._txtMoreCards = new ck.Text();
        this._txtMoreCards.setName("_txtMoreCards");
        this._layoutLine05.addChild(this._txtMoreCards);
        this._txtMoreCards.setCascadeOpacityEnabled(true);
        this._txtMoreCards.setCascadeColorEnabled(true);
        this._txtMoreCards.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMoreCards, 0.0637, 0.3583);
        this._txtMoreCards.setTextColor(cc.color(111, 58, 48, 255));
        let _txtMoreCardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMoreCards);
        this._txtMoreCards.setTouchEnabled(false);
        this._txtMoreCards.ignoreContentAdaptWithSize(true);
        this._txtMoreCards.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMoreCards.setDefaultFontSize(28);
        this._txtMoreCards.setString(gm.localize.getText("TXT_GUIDE_MORE_CARD"));
        this._txtMoreCards.setTextHorizontalAlignment(0);
        this._txtMoreCards.setTextVerticalAlignment(1);

        ///// # _layoutLine06
        this._layoutLine06 = new ccui.Layout();
        this._layoutLine06.setName("_layoutLine06");
        this._layoutContent02.addChild(this._layoutLine06);
        this._layoutLine06.setCascadeOpacityEnabled(true);
        this._layoutLine06.setCascadeColorEnabled(true);
        this._layoutLine06.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutLine06, 0.5, 0.078);
        let _layoutLine06LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLine06);
        _layoutLine06LayoutComponent.setPositionPercentXEnabled(true);
        _layoutLine06LayoutComponent.setPositionPercentX(0.5);
        _layoutLine06LayoutComponent.setPercentWidthEnabled(true);
        _layoutLine06LayoutComponent.setPercentWidth(1);
        this._layoutLine06.setTouchEnabled(false);
        this._layoutLine06.setUnifySizeEnabled(false);
        this._layoutLine06.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutLine06, 1);
        this._layoutLine06.setContentSize(cc.size(this._layoutLine06.width, 60));

        ///// # _imgBgr06
        this._imgBgr06 = new ccui.ImageView();
        this._imgBgr06.setName("_imgBgr06");
        this._layoutLine06.addChild(this._imgBgr06);
        this._imgBgr06.setCascadeOpacityEnabled(true);
        this._imgBgr06.setCascadeColorEnabled(true);
        this._imgBgr06.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr06, 1, 0.3583);
        this._imgBgr06.setOpacity(38);
        this._imgBgr06.setColor(cc.color(0, 0, 0, 255));
        let _imgBgr06LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr06);
        _imgBgr06LayoutComponent.setPercentWidthEnabled(true);
        _imgBgr06LayoutComponent.setPercentWidth(1);
        _imgBgr06LayoutComponent.setPercentHeightEnabled(true);
        _imgBgr06LayoutComponent.setPercentHeight(1);
        this._imgBgr06.loadTexture("sprites/basics/White1x1.png", 0);
        this._imgBgr06.setUnifySizeEnabled(false);
        this._imgBgr06.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBgr06, 1, 1);
        this._imgBgr06.setTouchEnabled(false);

        ///// # _txtLine06Header
        this._txtLine06Header = new ck.Text();
        this._txtLine06Header.setName("_txtLine06Header");
        this._layoutLine06.addChild(this._txtLine06Header);
        this._txtLine06Header.setCascadeOpacityEnabled(true);
        this._txtLine06Header.setCascadeColorEnabled(true);
        this._txtLine06Header.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLine06Header, 0.0613, 0.3273);
        this._txtLine06Header.setTextColor(cc.color(111, 58, 48, 255));
        let _txtLine06HeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLine06Header);
        this._txtLine06Header.setTouchEnabled(false);
        this._txtLine06Header.ignoreContentAdaptWithSize(true);
        this._txtLine06Header.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLine06Header.setDefaultFontSize(28);
        this._txtLine06Header.setString(gm.localize.getText("TXT_GUIDE_PISTI"));
        this._txtLine06Header.setTextHorizontalAlignment(0);
        this._txtLine06Header.setTextVerticalAlignment(1);

        ///// # _imgDot06
        this._imgDot06 = new ccui.ImageView();
        this._imgDot06.setName("_imgDot06");
        this._layoutLine06.addChild(this._imgDot06);
        this._imgDot06.setCascadeOpacityEnabled(true);
        this._imgDot06.setCascadeColorEnabled(true);
        this._imgDot06.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgDot06, 0.037, 0.3367);
        let _imgDot06LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDot06);
        this._imgDot06.loadTexture("icons/flat/Point.png", 1);
        this._imgDot06.setUnifySizeEnabled(false);
        this._imgDot06.ignoreContentAdaptWithSize(false);
        this._imgDot06.setContentSize(cc.size(15, 15));
        this._imgDot06.setTouchEnabled(false);

        ///// # _txtLine06
        this._txtLine06 = new ck.Text();
        this._txtLine06.setName("_txtLine06");
        this._layoutLine06.addChild(this._txtLine06);
        this._txtLine06.setCascadeOpacityEnabled(true);
        this._txtLine06.setCascadeColorEnabled(true);
        this._txtLine06.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLine06, 0.9838, 0.3583);
        this._txtLine06.setTextColor(cc.color(148, 23, 0, 255));
        let _txtLine06LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLine06);
        this._txtLine06.setTouchEnabled(false);
        this._txtLine06.ignoreContentAdaptWithSize(true);
        this._txtLine06.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLine06.setDefaultFontSize(30);
        this._txtLine06.setString(gm.localize.getText("TXT_GUIDE_SCORE_PISTI"));
        this._txtLine06.setTextHorizontalAlignment(2);
        this._txtLine06.setTextVerticalAlignment(1);

        ///// # _layout03
        this._layout03 = new ccui.Layout();
        this._layout03.setName("_layout03");
        this._page03.addChild(this._layout03);
        this._layout03.setCascadeOpacityEnabled(true);
        this._layout03.setCascadeColorEnabled(true);
        this._layout03.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layout03, 0.5, 0.0303);
        let _layout03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layout03);
        _layout03LayoutComponent.setPositionPercentXEnabled(true);
        _layout03LayoutComponent.setPositionPercentX(0.5);
        _layout03LayoutComponent.setPositionPercentYEnabled(true);
        _layout03LayoutComponent.setPositionPercentY(0.0303);
        this._layout03.setTouchEnabled(false);
        this._layout03.setUnifySizeEnabled(false);
        this._layout03.ignoreContentAdaptWithSize(false);
        this._layout03.setContentSize(cc.size(438, 150.5423));

        ///// # _imgBgr03
        this._imgBgr03 = new ccui.ImageView();
        this._imgBgr03.setName("_imgBgr03");
        this._layout03.addChild(this._imgBgr03);
        this._imgBgr03.setCascadeOpacityEnabled(true);
        this._imgBgr03.setCascadeColorEnabled(true);
        this._imgBgr03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr03, 0.5, 0.5);
        this._imgBgr03.setColor(cc.color(223, 205, 183, 255));
        let _imgBgr03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr03);
        _imgBgr03LayoutComponent.setPositionPercentXEnabled(true);
        _imgBgr03LayoutComponent.setPositionPercentX(0.5);
        _imgBgr03LayoutComponent.setPositionPercentYEnabled(true);
        _imgBgr03LayoutComponent.setPositionPercentY(0.5);
        _imgBgr03LayoutComponent.setPercentWidthEnabled(true);
        _imgBgr03LayoutComponent.setPercentWidth(1);
        _imgBgr03LayoutComponent.setPercentHeightEnabled(true);
        _imgBgr03LayoutComponent.setPercentHeight(1);
        this._imgBgr03.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgBgr03.setUnifySizeEnabled(false);
        this._imgBgr03.ignoreContentAdaptWithSize(false);
        this._imgBgr03.setScale9Enabled(true);
        this._imgBgr03.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgBgr03, 1, 1);
        this._imgBgr03.setTouchEnabled(false);

        ///// # _layoutHeader03
        this._layoutHeader03 = new ccui.Layout();
        this._layoutHeader03.setName("_layoutHeader03");
        this._layout03.addChild(this._layoutHeader03);
        this._layoutHeader03.setCascadeOpacityEnabled(true);
        this._layoutHeader03.setCascadeColorEnabled(true);
        this._layoutHeader03.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutHeader03, 0, 1);
        let _layoutHeader03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHeader03);
        _layoutHeader03LayoutComponent.setPositionPercentYEnabled(true);
        _layoutHeader03LayoutComponent.setPositionPercentY(1);
        _layoutHeader03LayoutComponent.setPercentWidthEnabled(true);
        _layoutHeader03LayoutComponent.setPercentWidth(1);
        this._layoutHeader03.setTouchEnabled(false);
        this._layoutHeader03.setUnifySizeEnabled(false);
        this._layoutHeader03.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutHeader03, 1);
        this._layoutHeader03.setContentSize(cc.size(this._layoutHeader03.width, 45));

        ///// # _imgHeader03
        this._imgHeader03 = new ccui.ImageView();
        this._imgHeader03.setName("_imgHeader03");
        this._layoutHeader03.addChild(this._imgHeader03);
        this._imgHeader03.setCascadeOpacityEnabled(true);
        this._imgHeader03.setCascadeColorEnabled(true);
        this._imgHeader03.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader03, 0, 0.5);
        this._imgHeader03.setColor(cc.color(197, 218, 237, 255));
        let _imgHeader03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader03);
        _imgHeader03LayoutComponent.setPositionPercentXEnabled(true);
        _imgHeader03LayoutComponent.setPositionPercentX(0);
        _imgHeader03LayoutComponent.setPositionPercentYEnabled(true);
        _imgHeader03LayoutComponent.setPositionPercentY(0.5);
        _imgHeader03LayoutComponent.setPercentWidthEnabled(true);
        _imgHeader03LayoutComponent.setPercentWidth(0.95);
        this._imgHeader03.loadTexture("basics/other/ArrowBoard.png", 1);
        this._imgHeader03.setUnifySizeEnabled(false);
        this._imgHeader03.ignoreContentAdaptWithSize(false);
        this._imgHeader03.setScale9Enabled(true);
        this._imgHeader03.setCapInsets(cc.rect(3, 19, 1, 2));
        ck.UIUtils.setWidthPercent(this._imgHeader03, 0.95);
        this._imgHeader03.setContentSize(cc.size(this._imgHeader03.width, 43));
        this._imgHeader03.setTouchEnabled(false);

        ///// # _txtHeader03
        this._txtHeader03 = new ck.Text();
        this._txtHeader03.setName("_txtHeader03");
        this._layoutHeader03.addChild(this._txtHeader03);
        this._txtHeader03.setCascadeOpacityEnabled(true);
        this._txtHeader03.setCascadeColorEnabled(true);
        this._txtHeader03.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHeader03, 0.025, 0.5);
        this._txtHeader03.setTextColor(cc.color(233, 217, 194, 255));
        let _txtHeader03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHeader03);
        _txtHeader03LayoutComponent.setPositionPercentXEnabled(true);
        _txtHeader03LayoutComponent.setPositionPercentX(0.025);
        _txtHeader03LayoutComponent.setPositionPercentYEnabled(true);
        _txtHeader03LayoutComponent.setPositionPercentY(0.5);
        this._txtHeader03.setTouchEnabled(false);
        this._txtHeader03.ignoreContentAdaptWithSize(true);
        this._txtHeader03.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHeader03.setDefaultFontSize(30);
        this._txtHeader03.setString(gm.localize.getText("TXT_TUTORIAL_GUIDE_03_02"));
        this._txtHeader03.setTextHorizontalAlignment(0);
        this._txtHeader03.setTextVerticalAlignment(1);

        ///// # _layoutNumber03
        this._layoutNumber03 = new ccui.Layout();
        this._layoutNumber03.setName("_layoutNumber03");
        this._layoutHeader03.addChild(this._layoutNumber03);
        this._layoutNumber03.setCascadeOpacityEnabled(true);
        this._layoutNumber03.setCascadeColorEnabled(true);
        this._layoutNumber03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutNumber03, 0, 0.5);
        let _layoutNumber03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutNumber03);
        _layoutNumber03LayoutComponent.setPositionPercentYEnabled(true);
        _layoutNumber03LayoutComponent.setPositionPercentY(0.5);
        this._layoutNumber03.setTouchEnabled(false);
        this._layoutNumber03.setUnifySizeEnabled(false);
        this._layoutNumber03.ignoreContentAdaptWithSize(false);
        this._layoutNumber03.setContentSize(cc.size(64, 64));

        ///// # _layoutContent03
        this._layoutContent03 = new ccui.Layout();
        this._layoutContent03.setName("_layoutContent03");
        this._layout03.addChild(this._layoutContent03);
        this._layoutContent03.setCascadeOpacityEnabled(true);
        this._layoutContent03.setCascadeColorEnabled(true);
        this._layoutContent03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutContent03, 0.5, 0.413);
        let _layoutContent03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutContent03);
        this._layoutContent03.setTouchEnabled(false);
        this._layoutContent03.setUnifySizeEnabled(false);
        this._layoutContent03.ignoreContentAdaptWithSize(false);
        this._layoutContent03.setContentSize(cc.size(438, 124.36));

        ///// # _txtResultAmount
        this._txtResultAmount = new ck.Text();
        this._txtResultAmount.setName("_txtResultAmount");
        this._layoutContent03.addChild(this._txtResultAmount);
        this._txtResultAmount.setCascadeOpacityEnabled(true);
        this._txtResultAmount.setCascadeColorEnabled(true);
        this._txtResultAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtResultAmount, 0.8662, 0.6332);
        this._txtResultAmount.setTextColor(cc.color(254, 225, 12, 255));
        let _txtResultAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtResultAmount);
        _txtResultAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtResultAmountLayoutComponent.setPositionPercentX(0.8662);
        _txtResultAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtResultAmountLayoutComponent.setPositionPercentY(0.6332);
        this._txtResultAmount.setTouchEnabled(false);
        this._txtResultAmount.ignoreContentAdaptWithSize(true);
        this._txtResultAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtResultAmount.setDefaultFontSize(30);
        this._txtResultAmount.setString("50,000");
        this._txtResultAmount.setTextHorizontalAlignment(1);
        this._txtResultAmount.setTextVerticalAlignment(1);
        this._txtResultAmount.enableOutline(cc.color(57, 29, 29, 255), 2);

        ///// # _imgResultCoin
        this._imgResultCoin = new ccui.ImageView();
        this._imgResultCoin.setName("_imgResultCoin");
        this._layoutContent03.addChild(this._imgResultCoin);
        this._imgResultCoin.setCascadeOpacityEnabled(true);
        this._imgResultCoin.setCascadeColorEnabled(true);
        this._imgResultCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgResultCoin, 0.692, 0.6332);
        this._imgResultCoin.setScale(0.75, 0.75);
        let _imgResultCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgResultCoin);
        _imgResultCoinLayoutComponent.setPositionPercentXEnabled(true);
        _imgResultCoinLayoutComponent.setPositionPercentX(0.692);
        _imgResultCoinLayoutComponent.setPositionPercentYEnabled(true);
        _imgResultCoinLayoutComponent.setPositionPercentY(0.6332);
        this._imgResultCoin.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgResultCoin.setUnifySizeEnabled(false);
        this._imgResultCoin.ignoreContentAdaptWithSize(false);
        this._imgResultCoin.setContentSize(cc.size(64, 64));
        this._imgResultCoin.setTouchEnabled(false);

        ///// # _txtEqual
        this._txtEqual = new ck.Text();
        this._txtEqual.setName("_txtEqual");
        this._layoutContent03.addChild(this._txtEqual);
        this._txtEqual.setCascadeOpacityEnabled(true);
        this._txtEqual.setCascadeColorEnabled(true);
        this._txtEqual.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtEqual, 0.6178, 0.6332);
        this._txtEqual.setTextColor(cc.color(254, 225, 12, 255));
        let _txtEqualLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtEqual);
        _txtEqualLayoutComponent.setPositionPercentXEnabled(true);
        _txtEqualLayoutComponent.setPositionPercentX(0.6178);
        _txtEqualLayoutComponent.setPositionPercentYEnabled(true);
        _txtEqualLayoutComponent.setPositionPercentY(0.6332);
        this._txtEqual.setTouchEnabled(false);
        this._txtEqual.ignoreContentAdaptWithSize(true);
        this._txtEqual.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtEqual.setDefaultFontSize(35);
        this._txtEqual.setString("=");
        this._txtEqual.setTextHorizontalAlignment(1);
        this._txtEqual.setTextVerticalAlignment(1);
        this._txtEqual.enableOutline(cc.color(57, 29, 29, 255), 2);

        ///// # _txtBetAmount
        this._txtBetAmount = new ck.Text();
        this._txtBetAmount.setName("_txtBetAmount");
        this._layoutContent03.addChild(this._txtBetAmount);
        this._txtBetAmount.setCascadeOpacityEnabled(true);
        this._txtBetAmount.setCascadeColorEnabled(true);
        this._txtBetAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBetAmount, 0.497, 0.6332);
        this._txtBetAmount.setTextColor(cc.color(254, 225, 12, 255));
        let _txtBetAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBetAmount);
        _txtBetAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtBetAmountLayoutComponent.setPositionPercentX(0.497);
        _txtBetAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtBetAmountLayoutComponent.setPositionPercentY(0.6332);
        this._txtBetAmount.setTouchEnabled(false);
        this._txtBetAmount.ignoreContentAdaptWithSize(true);
        this._txtBetAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtBetAmount.setDefaultFontSize(30);
        this._txtBetAmount.setString("1,000");
        this._txtBetAmount.setTextHorizontalAlignment(1);
        this._txtBetAmount.setTextVerticalAlignment(1);
        this._txtBetAmount.enableOutline(cc.color(57, 29, 29, 255), 2);

        ///// # _imgBetCoin
        this._imgBetCoin = new ccui.ImageView();
        this._imgBetCoin.setName("_imgBetCoin");
        this._layoutContent03.addChild(this._imgBetCoin);
        this._imgBetCoin.setCascadeOpacityEnabled(true);
        this._imgBetCoin.setCascadeColorEnabled(true);
        this._imgBetCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBetCoin, 0.3643, 0.6332);
        this._imgBetCoin.setScale(0.75, 0.75);
        let _imgBetCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBetCoin);
        _imgBetCoinLayoutComponent.setPositionPercentXEnabled(true);
        _imgBetCoinLayoutComponent.setPositionPercentX(0.3643);
        _imgBetCoinLayoutComponent.setPositionPercentYEnabled(true);
        _imgBetCoinLayoutComponent.setPositionPercentY(0.6332);
        this._imgBetCoin.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgBetCoin.setUnifySizeEnabled(false);
        this._imgBetCoin.ignoreContentAdaptWithSize(false);
        this._imgBetCoin.setContentSize(cc.size(64, 64));
        this._imgBetCoin.setTouchEnabled(false);

        ///// # _txtX
        this._txtX = new ck.Text();
        this._txtX.setName("_txtX");
        this._layoutContent03.addChild(this._txtX);
        this._txtX.setCascadeOpacityEnabled(true);
        this._txtX.setCascadeColorEnabled(true);
        this._txtX.setAnchorPoint(cc.p(0.454, 0.4666));
        ck.UIUtils.setPositionPercent(this._txtX, 0.293, 0.6332);
        this._txtX.setTextColor(cc.color(254, 225, 12, 255));
        let _txtXLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtX);
        _txtXLayoutComponent.setPositionPercentXEnabled(true);
        _txtXLayoutComponent.setPositionPercentX(0.293);
        _txtXLayoutComponent.setPositionPercentYEnabled(true);
        _txtXLayoutComponent.setPositionPercentY(0.6332);
        this._txtX.setTouchEnabled(false);
        this._txtX.ignoreContentAdaptWithSize(true);
        this._txtX.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtX.setDefaultFontSize(35);
        this._txtX.setString("x");
        this._txtX.setTextHorizontalAlignment(1);
        this._txtX.setTextVerticalAlignment(1);
        this._txtX.enableOutline(cc.color(57, 29, 29, 255), 2);

        ///// # _nodeScoreGapSummary
        this._nodeScoreGapSummary = new cc.Node();
        this._nodeScoreGapSummary.setName("_nodeScoreGapSummary");
        this._layoutContent03.addChild(this._nodeScoreGapSummary);
        this._nodeScoreGapSummary.setCascadeOpacityEnabled(true);
        this._nodeScoreGapSummary.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeScoreGapSummary, 0.1479, 0.6332);
        let _nodeScoreGapSummaryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeScoreGapSummary);
        _nodeScoreGapSummaryLayoutComponent.setPositionPercentXEnabled(true);
        _nodeScoreGapSummaryLayoutComponent.setPositionPercentX(0.1479);
        _nodeScoreGapSummaryLayoutComponent.setPositionPercentYEnabled(true);
        _nodeScoreGapSummaryLayoutComponent.setPositionPercentY(0.6332);

        ///// # _imgScoreGapSummary
        this._imgScoreGapSummary = new ccui.ImageView();
        this._imgScoreGapSummary.setName("_imgScoreGapSummary");
        this._nodeScoreGapSummary.addChild(this._imgScoreGapSummary);
        this._imgScoreGapSummary.setCascadeOpacityEnabled(true);
        this._imgScoreGapSummary.setCascadeColorEnabled(true);
        this._imgScoreGapSummary.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgScoreGapSummary.setScale(0.8, 0.8);
        let _imgScoreGapSummaryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgScoreGapSummary);
        this._imgScoreGapSummary.loadTexture("game/popups/result/OrangeBox.png", 1);
        this._imgScoreGapSummary.setUnifySizeEnabled(false);
        this._imgScoreGapSummary.ignoreContentAdaptWithSize(false);
        this._imgScoreGapSummary.setContentSize(cc.size(121, 102));
        this._imgScoreGapSummary.setTouchEnabled(false);

        ///// # _txtScoreGapSummary
        this._txtScoreGapSummary = new ck.Text();
        this._txtScoreGapSummary.setName("_txtScoreGapSummary");
        this._nodeScoreGapSummary.addChild(this._txtScoreGapSummary);
        this._txtScoreGapSummary.setCascadeOpacityEnabled(true);
        this._txtScoreGapSummary.setCascadeColorEnabled(true);
        this._txtScoreGapSummary.setAnchorPoint(cc.p(0.5, 0.5));
        let _txtScoreGapSummaryLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtScoreGapSummary);
        _txtScoreGapSummaryLayoutComponent.setPositionPercentXEnabled(true);
        _txtScoreGapSummaryLayoutComponent.setPositionPercentX(0);
        _txtScoreGapSummaryLayoutComponent.setPositionPercentYEnabled(true);
        _txtScoreGapSummaryLayoutComponent.setPositionPercentY(0);
        this._txtScoreGapSummary.setTouchEnabled(false);
        this._txtScoreGapSummary.ignoreContentAdaptWithSize(true);
        this._txtScoreGapSummary.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtScoreGapSummary.setDefaultFontSize(60);
        this._txtScoreGapSummary.setString("50");
        this._txtScoreGapSummary.setTextHorizontalAlignment(1);
        this._txtScoreGapSummary.setTextVerticalAlignment(1);
        this._txtScoreGapSummary.enableOutline(cc.color(192, 93, 5, 255), 3);

        ///// # _txtBetAmount_0
        this._txtBetAmount_0 = new ck.Text();
        this._txtBetAmount_0.setName("_txtBetAmount_0");
        this._layoutContent03.addChild(this._txtBetAmount_0);
        this._txtBetAmount_0.setCascadeOpacityEnabled(true);
        this._txtBetAmount_0.setCascadeColorEnabled(true);
        this._txtBetAmount_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBetAmount_0, 0.5, 0.1513);
        this._txtBetAmount_0.setTextColor(cc.color(148, 23, 0, 255));
        let _txtBetAmount_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBetAmount_0);
        _txtBetAmount_0LayoutComponent.setPositionPercentXEnabled(true);
        _txtBetAmount_0LayoutComponent.setPositionPercentX(0.5);
        _txtBetAmount_0LayoutComponent.setPositionPercentYEnabled(true);
        _txtBetAmount_0LayoutComponent.setPositionPercentY(0.1513);
        this._txtBetAmount_0.setTouchEnabled(false);
        this._txtBetAmount_0.ignoreContentAdaptWithSize(true);
        this._txtBetAmount_0.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBetAmount_0.setDefaultFontSize(30);
        this._txtBetAmount_0.setString(gm.localize.getText("TXT_TUTORIAL_GUIDE_GAP_POINT"));
        this._txtBetAmount_0.setTextHorizontalAlignment(1);
        this._txtBetAmount_0.setTextVerticalAlignment(1);

        ///// # _page04
        this._page04 = new ccui.Layout();
        this._page04.setName("_page04");
        this._pageView.addPage(this._page04);
        this._page04.setCascadeOpacityEnabled(true);
        this._page04.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._page04, 0.8, 0);
        let _page04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._page04);
        this._page04.setTouchEnabled(true);
        this._page04.setUnifySizeEnabled(false);
        this._page04.ignoreContentAdaptWithSize(false);
        this._page04.setContentSize(cc.size(486, 747));

        ///// # _layout04
        this._layout04 = new ccui.Layout();
        this._layout04.setName("_layout04");
        this._page04.addChild(this._layout04);
        this._layout04.setCascadeOpacityEnabled(true);
        this._layout04.setCascadeColorEnabled(true);
        this._layout04.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layout04, 0.5, 0.9361);
        let _layout04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layout04);
        _layout04LayoutComponent.setPositionPercentXEnabled(true);
        _layout04LayoutComponent.setPositionPercentX(0.5);
        _layout04LayoutComponent.setPositionPercentYEnabled(true);
        _layout04LayoutComponent.setPositionPercentY(0.9361);
        _layout04LayoutComponent.setPercentHeightEnabled(true);
        _layout04LayoutComponent.setPercentHeight(0.9);
        this._layout04.setTouchEnabled(false);
        this._layout04.setUnifySizeEnabled(false);
        this._layout04.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this._layout04, 0.9);
        this._layout04.setContentSize(cc.size(438, this._layout04.height));

        ///// # _layoutHeader04
        this._layoutHeader04 = new ccui.Layout();
        this._layoutHeader04.setName("_layoutHeader04");
        this._layout04.addChild(this._layoutHeader04);
        this._layoutHeader04.setCascadeOpacityEnabled(true);
        this._layoutHeader04.setCascadeColorEnabled(true);
        this._layoutHeader04.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutHeader04, 0, 1);
        let _layoutHeader04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHeader04);
        _layoutHeader04LayoutComponent.setPositionPercentYEnabled(true);
        _layoutHeader04LayoutComponent.setPositionPercentY(1);
        _layoutHeader04LayoutComponent.setPercentWidthEnabled(true);
        _layoutHeader04LayoutComponent.setPercentWidth(1);
        this._layoutHeader04.setTouchEnabled(false);
        this._layoutHeader04.setUnifySizeEnabled(false);
        this._layoutHeader04.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutHeader04, 1);
        this._layoutHeader04.setContentSize(cc.size(this._layoutHeader04.width, 45));

        ///// # _imgHeader04
        this._imgHeader04 = new ccui.ImageView();
        this._imgHeader04.setName("_imgHeader04");
        this._layoutHeader04.addChild(this._imgHeader04);
        this._imgHeader04.setCascadeOpacityEnabled(true);
        this._imgHeader04.setCascadeColorEnabled(true);
        this._imgHeader04.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader04, 0, 0.5);
        this._imgHeader04.setColor(cc.color(197, 218, 237, 255));
        let _imgHeader04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader04);
        _imgHeader04LayoutComponent.setPositionPercentXEnabled(true);
        _imgHeader04LayoutComponent.setPositionPercentX(0);
        _imgHeader04LayoutComponent.setPositionPercentYEnabled(true);
        _imgHeader04LayoutComponent.setPositionPercentY(0.5);
        _imgHeader04LayoutComponent.setPercentWidthEnabled(true);
        _imgHeader04LayoutComponent.setPercentWidth(0.95);
        this._imgHeader04.loadTexture("basics/other/ArrowBoard.png", 1);
        this._imgHeader04.setUnifySizeEnabled(false);
        this._imgHeader04.ignoreContentAdaptWithSize(false);
        this._imgHeader04.setScale9Enabled(true);
        this._imgHeader04.setCapInsets(cc.rect(3, 19, 1, 2));
        ck.UIUtils.setWidthPercent(this._imgHeader04, 0.95);
        this._imgHeader04.setContentSize(cc.size(this._imgHeader04.width, 43));
        this._imgHeader04.setTouchEnabled(false);

        ///// # _txtHeader04
        this._txtHeader04 = new ck.Text();
        this._txtHeader04.setName("_txtHeader04");
        this._layoutHeader04.addChild(this._txtHeader04);
        this._txtHeader04.setCascadeOpacityEnabled(true);
        this._txtHeader04.setCascadeColorEnabled(true);
        this._txtHeader04.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHeader04, 0.0293, 0.5);
        this._txtHeader04.setTextColor(cc.color(233, 217, 194, 255));
        let _txtHeader04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHeader04);
        _txtHeader04LayoutComponent.setPositionPercentXEnabled(true);
        _txtHeader04LayoutComponent.setPositionPercentX(0.0293);
        _txtHeader04LayoutComponent.setPositionPercentYEnabled(true);
        _txtHeader04LayoutComponent.setPositionPercentY(0.5);
        this._txtHeader04.setTouchEnabled(false);
        this._txtHeader04.ignoreContentAdaptWithSize(true);
        this._txtHeader04.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHeader04.setDefaultFontSize(30);
        this._txtHeader04.setString(gm.localize.getText("TXT_TUTORIAL_GUIDE_04"));
        this._txtHeader04.setTextHorizontalAlignment(0);
        this._txtHeader04.setTextVerticalAlignment(1);

        ///// # _layoutNumber04
        this._layoutNumber04 = new ccui.Layout();
        this._layoutNumber04.setName("_layoutNumber04");
        this._layoutHeader04.addChild(this._layoutNumber04);
        this._layoutNumber04.setCascadeOpacityEnabled(true);
        this._layoutNumber04.setCascadeColorEnabled(true);
        this._layoutNumber04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutNumber04, 0, 0.5);
        let _layoutNumber04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutNumber04);
        _layoutNumber04LayoutComponent.setPositionPercentYEnabled(true);
        _layoutNumber04LayoutComponent.setPositionPercentY(0.5);
        this._layoutNumber04.setTouchEnabled(false);
        this._layoutNumber04.setUnifySizeEnabled(false);
        this._layoutNumber04.ignoreContentAdaptWithSize(false);
        this._layoutNumber04.setContentSize(cc.size(64, 64));

        ///// # _layoutContent04
        this._layoutContent04 = new ccui.Layout();
        this._layoutContent04.setName("_layoutContent04");
        this._layout04.addChild(this._layoutContent04);
        this._layoutContent04.setCascadeOpacityEnabled(true);
        this._layoutContent04.setCascadeColorEnabled(true);
        this._layoutContent04.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutContent04, 0.5, 1);
        let _layoutContent04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutContent04);
        _layoutContent04LayoutComponent.setPositionPercentXEnabled(true);
        _layoutContent04LayoutComponent.setPositionPercentX(0.5);
        _layoutContent04LayoutComponent.setPositionPercentYEnabled(true);
        _layoutContent04LayoutComponent.setPositionPercentY(1);
        _layoutContent04LayoutComponent.setPercentWidthEnabled(true);
        _layoutContent04LayoutComponent.setPercentWidth(1);
        _layoutContent04LayoutComponent.setPercentHeightEnabled(true);
        _layoutContent04LayoutComponent.setPercentHeight(1);
        this._layoutContent04.setTouchEnabled(false);
        this._layoutContent04.setUnifySizeEnabled(false);
        this._layoutContent04.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutContent04, 1, 1);

        ///// # _layoutStep0401
        this._layoutStep0401 = new ccui.Layout();
        this._layoutStep0401.setName("_layoutStep0401");
        this._layoutContent04.addChild(this._layoutStep0401);
        this._layoutStep0401.setCascadeOpacityEnabled(true);
        this._layoutStep0401.setCascadeColorEnabled(true);
        this._layoutStep0401.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutStep0401, 0.5, 0.78);
        let _layoutStep0401LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutStep0401);
        _layoutStep0401LayoutComponent.setPositionPercentXEnabled(true);
        _layoutStep0401LayoutComponent.setPositionPercentX(0.5);
        _layoutStep0401LayoutComponent.setPositionPercentYEnabled(true);
        _layoutStep0401LayoutComponent.setPositionPercentY(0.78);
        this._layoutStep0401.setTouchEnabled(true);
        this._layoutStep0401.setUnifySizeEnabled(false);
        this._layoutStep0401.ignoreContentAdaptWithSize(false);
        this._layoutStep0401.setContentSize(cc.size(350, 150));

        ///// # _imgBgr0401
        this._imgBgr0401 = new ccui.ImageView();
        this._imgBgr0401.setName("_imgBgr0401");
        this._layoutStep0401.addChild(this._imgBgr0401);
        this._imgBgr0401.setCascadeOpacityEnabled(true);
        this._imgBgr0401.setCascadeColorEnabled(true);
        this._imgBgr0401.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr0401, 0.5, 0.5);
        this._imgBgr0401.setColor(cc.color(217, 195, 168, 255));
        let _imgBgr0401LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr0401);
        _imgBgr0401LayoutComponent.setPositionPercentXEnabled(true);
        _imgBgr0401LayoutComponent.setPositionPercentX(0.5);
        _imgBgr0401LayoutComponent.setPositionPercentYEnabled(true);
        _imgBgr0401LayoutComponent.setPositionPercentY(0.5);
        _imgBgr0401LayoutComponent.setPercentWidthEnabled(true);
        _imgBgr0401LayoutComponent.setPercentWidth(1);
        _imgBgr0401LayoutComponent.setPercentHeightEnabled(true);
        _imgBgr0401LayoutComponent.setPercentHeight(1);
        this._imgBgr0401.loadTexture("sprites/basics/Rounded32x32.png", 0);
        this._imgBgr0401.setUnifySizeEnabled(false);
        this._imgBgr0401.ignoreContentAdaptWithSize(false);
        this._imgBgr0401.setScale9Enabled(true);
        this._imgBgr0401.setCapInsets(cc.rect(10, 10, 12, 12));
        ck.UIUtils.setSizePercent(this._imgBgr0401, 1, 1);
        this._imgBgr0401.setTouchEnabled(false);

        ///// # _imgStep0401
        this._imgStep0401 = new ccui.ImageView();
        this._imgStep0401.setName("_imgStep0401");
        this._layoutStep0401.addChild(this._imgStep0401);
        this._imgStep0401.setCascadeOpacityEnabled(true);
        this._imgStep0401.setCascadeColorEnabled(true);
        this._imgStep0401.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStep0401, 0.0113, 0.975);
        let _imgStep0401LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep0401);
        _imgStep0401LayoutComponent.setPositionPercentXEnabled(true);
        _imgStep0401LayoutComponent.setPositionPercentX(0.0113);
        _imgStep0401LayoutComponent.setPositionPercentYEnabled(true);
        _imgStep0401LayoutComponent.setPositionPercentY(0.975);
        this._imgStep0401.loadTexture("event-collector/tutorial/Title.png", 1);
        this._imgStep0401.setUnifySizeEnabled(false);
        this._imgStep0401.ignoreContentAdaptWithSize(false);
        this._imgStep0401.setScale9Enabled(true);
        this._imgStep0401.setCapInsets(cc.rect(10, 10, 40, 39));
        this._imgStep0401.setContentSize(cc.size(59.99, 60.7887));
        this._imgStep0401.setTouchEnabled(false);

        ///// # _txtTitle0401
        this._txtTitle0401 = new ck.Text();
        this._txtTitle0401.setName("_txtTitle0401");
        this._imgStep0401.addChild(this._txtTitle0401);
        this._txtTitle0401.setCascadeOpacityEnabled(true);
        this._txtTitle0401.setCascadeColorEnabled(true);
        this._txtTitle0401.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle0401, 0.4668, 0.483);
        let _txtTitle0401LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle0401);
        _txtTitle0401LayoutComponent.setPositionPercentXEnabled(true);
        _txtTitle0401LayoutComponent.setPositionPercentX(0.4668);
        _txtTitle0401LayoutComponent.setPositionPercentYEnabled(true);
        _txtTitle0401LayoutComponent.setPositionPercentY(0.483);
        this._txtTitle0401.setTouchEnabled(false);
        this._txtTitle0401.ignoreContentAdaptWithSize(true);
        this._txtTitle0401.setFontName("fonts/GroBold.ttf");
        this._txtTitle0401.setDefaultFontSize(35);
        this._txtTitle0401.setString("1");
        this._txtTitle0401.setTextHorizontalAlignment(0);
        this._txtTitle0401.setTextVerticalAlignment(0);
        this._txtTitle0401.enableOutline(cc.color(0, 74, 0, 255), 2);

        ///// # _txtStep0401
        this._txtStep0401 = new ck.CustomRichTextExtend(cc.size(315, 129));
        this._txtStep0401.setName("_txtStep0401");
        this._layoutStep0401.addChild(this._txtStep0401);
        this._txtStep0401.setCascadeOpacityEnabled(true);
        this._txtStep0401.setCascadeColorEnabled(true);
        this._txtStep0401.setAnchorPoint(cc.p(0.4927, 0.4768));
        ck.UIUtils.setPositionPercent(this._txtStep0401, 0.4934, 0.48);
        this._txtStep0401.setDefaultColor(cc.color(135, 110, 80, 255));
        let _txtStep0401LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep0401);
        _txtStep0401LayoutComponent.setPositionPercentXEnabled(true);
        _txtStep0401LayoutComponent.setPositionPercentX(0.4934);
        _txtStep0401LayoutComponent.setPositionPercentYEnabled(true);
        _txtStep0401LayoutComponent.setPositionPercentY(0.48);
        _txtStep0401LayoutComponent.setPercentWidthEnabled(true);
        _txtStep0401LayoutComponent.setPercentWidth(0.9);
        _txtStep0401LayoutComponent.setPercentHeightEnabled(true);
        _txtStep0401LayoutComponent.setPercentHeight(0.86);
        this._txtStep0401.setTouchEnabled(false);
        this._txtStep0401.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtStep0401.setDefaultSize(30);
        this._txtStep0401.setDefaultAlignHorizontal(2);
        this._txtStep0401.setDefaultAlignVertical(5);
        this._txtStep0401.setString(gm.localize.getText("TXT_TUTORIAL_GUIDE_04_01"));

        ///// # _layoutStep0402
        this._layoutStep0402 = new ccui.Layout();
        this._layoutStep0402.setName("_layoutStep0402");
        this._layoutContent04.addChild(this._layoutStep0402);
        this._layoutStep0402.setCascadeOpacityEnabled(true);
        this._layoutStep0402.setCascadeColorEnabled(true);
        this._layoutStep0402.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutStep0402, 0.5, 0.49);
        let _layoutStep0402LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutStep0402);
        _layoutStep0402LayoutComponent.setPositionPercentXEnabled(true);
        _layoutStep0402LayoutComponent.setPositionPercentX(0.5);
        _layoutStep0402LayoutComponent.setPositionPercentYEnabled(true);
        _layoutStep0402LayoutComponent.setPositionPercentY(0.49);
        this._layoutStep0402.setTouchEnabled(true);
        this._layoutStep0402.setUnifySizeEnabled(false);
        this._layoutStep0402.ignoreContentAdaptWithSize(false);
        this._layoutStep0402.setContentSize(cc.size(350, 150));

        ///// # _imgBgr0402
        this._imgBgr0402 = new ccui.ImageView();
        this._imgBgr0402.setName("_imgBgr0402");
        this._layoutStep0402.addChild(this._imgBgr0402);
        this._imgBgr0402.setCascadeOpacityEnabled(true);
        this._imgBgr0402.setCascadeColorEnabled(true);
        this._imgBgr0402.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr0402, 0.5, 0.5);
        this._imgBgr0402.setColor(cc.color(217, 195, 168, 255));
        let _imgBgr0402LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr0402);
        _imgBgr0402LayoutComponent.setPositionPercentXEnabled(true);
        _imgBgr0402LayoutComponent.setPositionPercentX(0.5);
        _imgBgr0402LayoutComponent.setPositionPercentYEnabled(true);
        _imgBgr0402LayoutComponent.setPositionPercentY(0.5);
        _imgBgr0402LayoutComponent.setPercentWidthEnabled(true);
        _imgBgr0402LayoutComponent.setPercentWidth(1);
        _imgBgr0402LayoutComponent.setPercentHeightEnabled(true);
        _imgBgr0402LayoutComponent.setPercentHeight(1);
        this._imgBgr0402.loadTexture("sprites/basics/Rounded32x32.png", 0);
        this._imgBgr0402.setUnifySizeEnabled(false);
        this._imgBgr0402.ignoreContentAdaptWithSize(false);
        this._imgBgr0402.setScale9Enabled(true);
        this._imgBgr0402.setCapInsets(cc.rect(10, 10, 12, 12));
        ck.UIUtils.setSizePercent(this._imgBgr0402, 1, 1);
        this._imgBgr0402.setTouchEnabled(false);

        ///// # _imgStep0402
        this._imgStep0402 = new ccui.ImageView();
        this._imgStep0402.setName("_imgStep0402");
        this._layoutStep0402.addChild(this._imgStep0402);
        this._imgStep0402.setCascadeOpacityEnabled(true);
        this._imgStep0402.setCascadeColorEnabled(true);
        this._imgStep0402.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStep0402, 0.0113, 0.975);
        let _imgStep0402LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep0402);
        _imgStep0402LayoutComponent.setPositionPercentXEnabled(true);
        _imgStep0402LayoutComponent.setPositionPercentX(0.0113);
        _imgStep0402LayoutComponent.setPositionPercentYEnabled(true);
        _imgStep0402LayoutComponent.setPositionPercentY(0.975);
        this._imgStep0402.loadTexture("event-collector/tutorial/Title.png", 1);
        this._imgStep0402.setUnifySizeEnabled(false);
        this._imgStep0402.ignoreContentAdaptWithSize(false);
        this._imgStep0402.setScale9Enabled(true);
        this._imgStep0402.setCapInsets(cc.rect(10, 10, 40, 39));
        this._imgStep0402.setContentSize(cc.size(59.99, 60.7887));
        this._imgStep0402.setTouchEnabled(false);

        ///// # _txtTitle0402
        this._txtTitle0402 = new ck.Text();
        this._txtTitle0402.setName("_txtTitle0402");
        this._imgStep0402.addChild(this._txtTitle0402);
        this._txtTitle0402.setCascadeOpacityEnabled(true);
        this._txtTitle0402.setCascadeColorEnabled(true);
        this._txtTitle0402.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle0402, 0.5, 0.483);
        let _txtTitle0402LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle0402);
        _txtTitle0402LayoutComponent.setPositionPercentXEnabled(true);
        _txtTitle0402LayoutComponent.setPositionPercentX(0.5);
        _txtTitle0402LayoutComponent.setPositionPercentYEnabled(true);
        _txtTitle0402LayoutComponent.setPositionPercentY(0.483);
        this._txtTitle0402.setTouchEnabled(false);
        this._txtTitle0402.ignoreContentAdaptWithSize(true);
        this._txtTitle0402.setFontName("fonts/GroBold.ttf");
        this._txtTitle0402.setDefaultFontSize(35);
        this._txtTitle0402.setString("2");
        this._txtTitle0402.setTextHorizontalAlignment(0);
        this._txtTitle0402.setTextVerticalAlignment(0);
        this._txtTitle0402.enableOutline(cc.color(0, 74, 0, 255), 2);

        ///// # _txtStep0402
        this._txtStep0402 = new ck.CustomRichTextExtend(cc.size(315, 129));
        this._txtStep0402.setName("_txtStep0402");
        this._layoutStep0402.addChild(this._txtStep0402);
        this._txtStep0402.setCascadeOpacityEnabled(true);
        this._txtStep0402.setCascadeColorEnabled(true);
        this._txtStep0402.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtStep0402, 0.5, 0.5);
        this._txtStep0402.setDefaultColor(cc.color(135, 110, 80, 255));
        let _txtStep0402LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep0402);
        _txtStep0402LayoutComponent.setPositionPercentXEnabled(true);
        _txtStep0402LayoutComponent.setPositionPercentX(0.5);
        _txtStep0402LayoutComponent.setPositionPercentYEnabled(true);
        _txtStep0402LayoutComponent.setPositionPercentY(0.5);
        _txtStep0402LayoutComponent.setPercentWidthEnabled(true);
        _txtStep0402LayoutComponent.setPercentWidth(0.9);
        _txtStep0402LayoutComponent.setPercentHeightEnabled(true);
        _txtStep0402LayoutComponent.setPercentHeight(0.86);
        this._txtStep0402.setTouchEnabled(false);
        this._txtStep0402.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtStep0402.setDefaultSize(30);
        this._txtStep0402.setDefaultAlignHorizontal(2);
        this._txtStep0402.setDefaultAlignVertical(5);
        this._txtStep0402.setString(gm.localize.getText("TXT_TUTORIAL_GUIDE_04_02"));

        ///// # _btnArrowRight
        this._btnArrowRight = new ccui.Button();
        this._btnArrowRight.setName("_btnArrowRight");
        this._layoutPopup.addChild(this._btnArrowRight);
        this._btnArrowRight.setCascadeOpacityEnabled(true);
        this._btnArrowRight.setCascadeColorEnabled(true);
        this._btnArrowRight.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._btnArrowRight, 0.93, 0.6);
        this._btnArrowRight.setFlippedX(true);
        let _btnArrowRightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnArrowRight);
        _btnArrowRightLayoutComponent.setPositionPercentXEnabled(true);
        _btnArrowRightLayoutComponent.setPositionPercentX(0.93);
        _btnArrowRightLayoutComponent.setPositionPercentYEnabled(true);
        _btnArrowRightLayoutComponent.setPositionPercentY(0.6);
        this._btnArrowRight.loadTextureDisabled("icons/color/other/ArrowGray.png", 1);
        this._btnArrowRight.loadTexturePressed("icons/color/other/Arrow.png", 1);
        this._btnArrowRight.loadTextureNormal("icons/color/other/Arrow.png", 1);
        this._btnArrowRight.setUnifySizeEnabled(false);
        this._btnArrowRight.ignoreContentAdaptWithSize(false);
        this._btnArrowRight.setContentSize(cc.size(51, 99));
        this._btnArrowRight.setTouchEnabled(true);

        ///// # _btnArrowLeft
        this._btnArrowLeft = new ccui.Button();
        this._btnArrowLeft.setName("_btnArrowLeft");
        this._layoutPopup.addChild(this._btnArrowLeft);
        this._btnArrowLeft.setCascadeOpacityEnabled(true);
        this._btnArrowLeft.setCascadeColorEnabled(true);
        this._btnArrowLeft.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._btnArrowLeft, 0.07, 0.6);
        let _btnArrowLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnArrowLeft);
        _btnArrowLeftLayoutComponent.setPositionPercentXEnabled(true);
        _btnArrowLeftLayoutComponent.setPositionPercentX(0.07);
        _btnArrowLeftLayoutComponent.setPositionPercentYEnabled(true);
        _btnArrowLeftLayoutComponent.setPositionPercentY(0.6);
        this._btnArrowLeft.loadTextureDisabled("icons/color/other/ArrowGray.png", 1);
        this._btnArrowLeft.loadTexturePressed("icons/color/other/Arrow.png", 1);
        this._btnArrowLeft.loadTextureNormal("icons/color/other/Arrow.png", 1);
        this._btnArrowLeft.setUnifySizeEnabled(false);
        this._btnArrowLeft.ignoreContentAdaptWithSize(false);
        this._btnArrowLeft.setContentSize(cc.size(51, 99));
        this._btnArrowLeft.setTouchEnabled(true);

        ///// # _layoutTitle
        this._layoutTitle = new ccui.Layout();
        this._layoutTitle.setName("_layoutTitle");
        this._layoutPopup.addChild(this._layoutTitle);
        this._layoutTitle.setCascadeOpacityEnabled(true);
        this._layoutTitle.setCascadeColorEnabled(true);
        this._layoutTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutTitle, 0.4896, 0.1647);
        let _layoutTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutTitle);
        this._layoutTitle.setTouchEnabled(false);
        this._layoutTitle.setUnifySizeEnabled(false);
        this._layoutTitle.ignoreContentAdaptWithSize(false);
        this._layoutTitle.setContentSize(cc.size(437.5386, 150));

        ///// # _imgTitleBgr
        this._imgTitleBgr = new ccui.ImageView();
        this._imgTitleBgr.setName("_imgTitleBgr");
        this._layoutTitle.addChild(this._imgTitleBgr);
        this._imgTitleBgr.setCascadeOpacityEnabled(true);
        this._imgTitleBgr.setCascadeColorEnabled(true);
        this._imgTitleBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTitleBgr, 0.5, 0.5);
        this._imgTitleBgr.setColor(cc.color(223, 205, 183, 255));
        let _imgTitleBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTitleBgr);
        _imgTitleBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgTitleBgrLayoutComponent.setPositionPercentX(0.5);
        _imgTitleBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgTitleBgrLayoutComponent.setPositionPercentY(0.5);
        _imgTitleBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgTitleBgrLayoutComponent.setPercentWidth(1);
        _imgTitleBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgTitleBgrLayoutComponent.setPercentHeight(1);
        this._imgTitleBgr.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgTitleBgr.setUnifySizeEnabled(false);
        this._imgTitleBgr.ignoreContentAdaptWithSize(false);
        this._imgTitleBgr.setScale9Enabled(true);
        this._imgTitleBgr.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgTitleBgr, 1, 1);
        this._imgTitleBgr.setTouchEnabled(false);

        ///// # _txtGuide00
        this._txtGuide00 = new ck.Text();
        this._txtGuide00.setName("_txtGuide00");
        this._layoutTitle.addChild(this._txtGuide00);
        this._txtGuide00.setCascadeOpacityEnabled(true);
        this._txtGuide00.setCascadeColorEnabled(true);
        this._txtGuide00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGuide00, 0.5, 0.5);
        this._txtGuide00.setTextColor(cc.color(87, 60, 38, 255));
        let _txtGuide00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGuide00);
        _txtGuide00LayoutComponent.setPositionPercentXEnabled(true);
        _txtGuide00LayoutComponent.setPositionPercentX(0.5);
        _txtGuide00LayoutComponent.setPositionPercentYEnabled(true);
        _txtGuide00LayoutComponent.setPositionPercentY(0.5);
        _txtGuide00LayoutComponent.setPercentWidthEnabled(true);
        _txtGuide00LayoutComponent.setPercentWidth(1);
        _txtGuide00LayoutComponent.setPercentHeightEnabled(true);
        _txtGuide00LayoutComponent.setPercentHeight(1);
        this._txtGuide00.setTouchEnabled(false);
        this._txtGuide00.setUnifySizeEnabled(false);
        this._txtGuide00.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtGuide00, 1, 1);
        this._txtGuide00.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtGuide00.setDefaultFontSize(35);
        this._txtGuide00.setString(gm.localize.getText("TXT_TUTORIAL_GUIDE_00"));
        this._txtGuide00.setTextHorizontalAlignment(1);
        this._txtGuide00.setTextVerticalAlignment(1);

        ///// # _txtGuide01
        this._txtGuide01 = new ck.Text();
        this._txtGuide01.setName("_txtGuide01");
        this._layoutTitle.addChild(this._txtGuide01);
        this._txtGuide01.setCascadeOpacityEnabled(true);
        this._txtGuide01.setCascadeColorEnabled(true);
        this._txtGuide01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGuide01, 0.5, 0.5);
        this._txtGuide01.setTextColor(cc.color(87, 60, 38, 255));
        let _txtGuide01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGuide01);
        _txtGuide01LayoutComponent.setPositionPercentXEnabled(true);
        _txtGuide01LayoutComponent.setPositionPercentX(0.5);
        _txtGuide01LayoutComponent.setPositionPercentYEnabled(true);
        _txtGuide01LayoutComponent.setPositionPercentY(0.5);
        _txtGuide01LayoutComponent.setPercentWidthEnabled(true);
        _txtGuide01LayoutComponent.setPercentWidth(1);
        _txtGuide01LayoutComponent.setPercentHeightEnabled(true);
        _txtGuide01LayoutComponent.setPercentHeight(1);
        this._txtGuide01.setTouchEnabled(false);
        this._txtGuide01.setUnifySizeEnabled(false);
        this._txtGuide01.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtGuide01, 1, 1);
        this._txtGuide01.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtGuide01.setDefaultFontSize(35);
        this._txtGuide01.setString(gm.localize.getText("TXT_TUTORIAL_GUIDE_01"));
        this._txtGuide01.setTextHorizontalAlignment(1);
        this._txtGuide01.setTextVerticalAlignment(1);

        ///// # _txtGuide02
        this._txtGuide02 = new ck.Text();
        this._txtGuide02.setName("_txtGuide02");
        this._layoutTitle.addChild(this._txtGuide02);
        this._txtGuide02.setCascadeOpacityEnabled(true);
        this._txtGuide02.setCascadeColorEnabled(true);
        this._txtGuide02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGuide02, 0.5, 0.5);
        this._txtGuide02.setTextColor(cc.color(87, 60, 38, 255));
        let _txtGuide02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGuide02);
        _txtGuide02LayoutComponent.setPositionPercentXEnabled(true);
        _txtGuide02LayoutComponent.setPositionPercentX(0.5);
        _txtGuide02LayoutComponent.setPositionPercentYEnabled(true);
        _txtGuide02LayoutComponent.setPositionPercentY(0.5);
        _txtGuide02LayoutComponent.setPercentWidthEnabled(true);
        _txtGuide02LayoutComponent.setPercentWidth(1);
        _txtGuide02LayoutComponent.setPercentHeightEnabled(true);
        _txtGuide02LayoutComponent.setPercentHeight(1);
        this._txtGuide02.setTouchEnabled(false);
        this._txtGuide02.setUnifySizeEnabled(false);
        this._txtGuide02.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtGuide02, 1, 1);
        this._txtGuide02.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtGuide02.setDefaultFontSize(35);
        this._txtGuide02.setString(gm.localize.getText("TXT_TUTORIAL_GUIDE_02"));
        this._txtGuide02.setTextHorizontalAlignment(1);
        this._txtGuide02.setTextVerticalAlignment(1);

        ///// # _layoutHeader
        this._layoutHeader = new ccui.Layout();
        this._layoutHeader.setName("_layoutHeader");
        this._layoutPopup.addChild(this._layoutHeader);
        this._layoutHeader.setCascadeOpacityEnabled(true);
        this._layoutHeader.setCascadeColorEnabled(true);
        this._layoutHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutHeader, 0.5, 1);
        let _layoutHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHeader);
        this._layoutHeader.setTouchEnabled(false);
        this._layoutHeader.setUnifySizeEnabled(false);
        this._layoutHeader.ignoreContentAdaptWithSize(false);
        this._layoutHeader.setContentSize(cc.size(385.5069, 139.951));

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._layoutHeader.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 0.5);
        this._imgHeader.setRotation(-0.1547);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        this._imgHeader.loadTexture("basics/popup/HeaderBlue.png", 1);
        this._imgHeader.setUnifySizeEnabled(false);
        this._imgHeader.ignoreContentAdaptWithSize(false);
        this._imgHeader.setContentSize(cc.size(345.9924, 83.9986));
        this._imgHeader.setTouchEnabled(false);

        ///// # _txtHeader
        this._txtHeader = new ck.Text();
        this._txtHeader.setName("_txtHeader");
        this._layoutHeader.addChild(this._txtHeader);
        this._txtHeader.setCascadeOpacityEnabled(true);
        this._txtHeader.setCascadeColorEnabled(true);
        this._txtHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHeader, 0.5, 0.5286);
        this._txtHeader.setTextColor(cc.color(255, 252, 225, 255));
        let _txtHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHeader);
        this._txtHeader.setTouchEnabled(false);
        this._txtHeader.ignoreContentAdaptWithSize(true);
        this._txtHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHeader.setDefaultFontSize(55);
        this._txtHeader.setString(gm.localize.getText("TXT_HOW_TO_PLAY"));
        this._txtHeader.setTextHorizontalAlignment(1);
        this._txtHeader.setTextVerticalAlignment(1);
        this._txtHeader.enableOutline(cc.color(155, 68, 38, 255), 2);
        this._txtHeader.enableShadow(cc.color(155, 68, 38, 255), cc.size(0, -2), 0);

        ///// # _layoutClose
        this._layoutClose = new ccui.Layout();
        this._layoutClose.setName("_layoutClose");
        this._layoutPopup.addChild(this._layoutClose);
        this._layoutClose.setCascadeOpacityEnabled(true);
        this._layoutClose.setCascadeColorEnabled(true);
        this._layoutClose.setAnchorPoint(cc.p(0.5026, 0.5236));
        ck.UIUtils.setPositionPercent(this._layoutClose, 0.98, 0.98);
        let _layoutCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutClose);
        this._layoutClose.setTouchEnabled(true);
        this._layoutClose.setUnifySizeEnabled(false);
        this._layoutClose.ignoreContentAdaptWithSize(false);
        this._layoutClose.setContentSize(cc.size(75, 75));

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._layoutClose.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.5, 0.4763);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(81, 83.0025));
        this._imgClose.setTouchEnabled(false);

        ///// # _dot00
        this._dot00 = new cc.Sprite();
        this._dot00.setName("_dot00");
        this._layoutPopup.addChild(this._dot00);
        this._dot00.setCascadeOpacityEnabled(true);
        this._dot00.setCascadeColorEnabled(true);
        this._dot00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._dot00, 0.44, 0.045);
        this._dot00.setScale(1.25, 1.25);
        let _dot00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._dot00);
        _dot00LayoutComponent.setPositionPercentXEnabled(true);
        _dot00LayoutComponent.setPositionPercentX(0.44);
        _dot00LayoutComponent.setPositionPercentYEnabled(true);
        _dot00LayoutComponent.setPositionPercentY(0.045);
        let sf = cc.spriteFrameCache.getSpriteFrame("basics/other/Dot_01.png"); if (sf) this._dot00.setSpriteFrame(sf);
        let _dot00BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _dot00BlendFunc.src = 1;
        _dot00BlendFunc.dst = 771;
        this._dot00.setBlendFunc(_dot00BlendFunc);

        ///// # _dot01
        this._dot01 = new cc.Sprite();
        this._dot01.setName("_dot01");
        this._layoutPopup.addChild(this._dot01);
        this._dot01.setCascadeOpacityEnabled(true);
        this._dot01.setCascadeColorEnabled(true);
        this._dot01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._dot01, 0.47, 0.045);
        this._dot01.setScale(1.25, 1.25);
        let _dot01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._dot01);
        _dot01LayoutComponent.setPositionPercentXEnabled(true);
        _dot01LayoutComponent.setPositionPercentX(0.47);
        _dot01LayoutComponent.setPositionPercentYEnabled(true);
        _dot01LayoutComponent.setPositionPercentY(0.045);
        let sf = cc.spriteFrameCache.getSpriteFrame("basics/other/Dot_01.png"); if (sf) this._dot01.setSpriteFrame(sf);
        let _dot01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _dot01BlendFunc.src = 1;
        _dot01BlendFunc.dst = 771;
        this._dot01.setBlendFunc(_dot01BlendFunc);

        ///// # _dot02
        this._dot02 = new cc.Sprite();
        this._dot02.setName("_dot02");
        this._layoutPopup.addChild(this._dot02);
        this._dot02.setCascadeOpacityEnabled(true);
        this._dot02.setCascadeColorEnabled(true);
        this._dot02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._dot02, 0.5, 0.045);
        this._dot02.setScale(1.25, 1.25);
        let _dot02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._dot02);
        _dot02LayoutComponent.setPositionPercentXEnabled(true);
        _dot02LayoutComponent.setPositionPercentX(0.5);
        _dot02LayoutComponent.setPositionPercentYEnabled(true);
        _dot02LayoutComponent.setPositionPercentY(0.045);
        let sf = cc.spriteFrameCache.getSpriteFrame("basics/other/Dot_01.png"); if (sf) this._dot02.setSpriteFrame(sf);
        let _dot02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _dot02BlendFunc.src = 1;
        _dot02BlendFunc.dst = 771;
        this._dot02.setBlendFunc(_dot02BlendFunc);

        ///// # _dot03
        this._dot03 = new cc.Sprite();
        this._dot03.setName("_dot03");
        this._layoutPopup.addChild(this._dot03);
        this._dot03.setCascadeOpacityEnabled(true);
        this._dot03.setCascadeColorEnabled(true);
        this._dot03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._dot03, 0.53, 0.045);
        this._dot03.setScale(1.25, 1.25);
        let _dot03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._dot03);
        _dot03LayoutComponent.setPositionPercentXEnabled(true);
        _dot03LayoutComponent.setPositionPercentX(0.53);
        _dot03LayoutComponent.setPositionPercentYEnabled(true);
        _dot03LayoutComponent.setPositionPercentY(0.045);
        let sf = cc.spriteFrameCache.getSpriteFrame("basics/other/Dot_01.png"); if (sf) this._dot03.setSpriteFrame(sf);
        let _dot03BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _dot03BlendFunc.src = 1;
        _dot03BlendFunc.dst = 771;
        this._dot03.setBlendFunc(_dot03BlendFunc);

        ///// # _dot04
        this._dot04 = new cc.Sprite();
        this._dot04.setName("_dot04");
        this._layoutPopup.addChild(this._dot04);
        this._dot04.setCascadeOpacityEnabled(true);
        this._dot04.setCascadeColorEnabled(true);
        this._dot04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._dot04, 0.56, 0.045);
        this._dot04.setScale(1.25, 1.25);
        let _dot04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._dot04);
        _dot04LayoutComponent.setPositionPercentXEnabled(true);
        _dot04LayoutComponent.setPositionPercentX(0.56);
        _dot04LayoutComponent.setPositionPercentYEnabled(true);
        _dot04LayoutComponent.setPositionPercentY(0.045);
        let sf = cc.spriteFrameCache.getSpriteFrame("basics/other/Dot_01.png"); if (sf) this._dot04.setSpriteFrame(sf);
        let _dot04BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _dot04BlendFunc.src = 1;
        _dot04BlendFunc.dst = 771;
        this._dot04.setBlendFunc(_dot04BlendFunc);

        ///// # _dotCurrent
        this._dotCurrent = new cc.Sprite();
        this._dotCurrent.setName("_dotCurrent");
        this._layoutPopup.addChild(this._dotCurrent);
        this._dotCurrent.setCascadeOpacityEnabled(true);
        this._dotCurrent.setCascadeColorEnabled(true);
        this._dotCurrent.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._dotCurrent, 0.44, 0.045);
        this._dotCurrent.setScale(1.25, 1.25);
        let _dotCurrentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._dotCurrent);
        _dotCurrentLayoutComponent.setPositionPercentXEnabled(true);
        _dotCurrentLayoutComponent.setPositionPercentX(0.44);
        _dotCurrentLayoutComponent.setPositionPercentYEnabled(true);
        _dotCurrentLayoutComponent.setPositionPercentY(0.045);
        let sf = cc.spriteFrameCache.getSpriteFrame("basics/other/Dot_02.png"); if (sf) this._dotCurrent.setSpriteFrame(sf);
        let _dotCurrentBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _dotCurrentBlendFunc.src = 1;
        _dotCurrentBlendFunc.dst = 771;
        this._dotCurrent.setBlendFunc(_dotCurrentBlendFunc);

    },


    playCCSAnimPage00Idle: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimPage00Idle();
    
        let _spriteDeckAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 1, 1),
                    cc.scaleTo(50 / (60 * speed), 1, 1),
                    cc.scaleTo(5 / (60 * speed), 1.1, 1.1),
                    cc.scaleTo(5 / (60 * speed), 1, 1),
                    cc.scaleTo(5 / (60 * speed), 1.1, 1.1),
                    cc.scaleTo(5 / (60 * speed), 1, 1),
                    cc.scaleTo(110 / (60 * speed), 1, 1)
                ),
                cc.sequence(
                    cc.delayTime(190 / (60 * speed)),
                    cc.moveTo(0 / (60 * speed), 413.8466, 261.8273)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteDeck.setScale(1, 1);
                this._spriteDeck.setPosition(413.8466, 261.8273);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteDeckAction = _spriteDeckAction.repeatForever();
        } else _spriteDeckAction = cc.sequence(
            cc.delayTime(delay),
            _spriteDeckAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._spriteDeck.runAction(_spriteDeckAction);
    
        let _spriteCard00Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(10 / (60 * speed), 236.4052, 467.1024),
                    cc.moveTo(50 / (60 * speed), 236.4052, 467.1024),
                    cc.moveTo(20 / (60 * speed), 415.1215, 262.7568),
                    cc.moveTo(110 / (60 * speed), 415.1215, 262.7568)
                ),
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(50 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(20 / (60 * speed), 0.36, 0.36),
                    cc.scaleTo(110 / (60 * speed), 0.36, 0.36)
                ),
                cc.sequence(
                    cc.rotateBy(10 / (60 * speed), 0, 0),
                    cc.rotateBy(50 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), -0.1783, -0.1679),
                    cc.rotateBy(110 / (60 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(50 / (60 * speed), 255),
                    cc.fadeTo(15 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 0),
                    cc.fadeTo(110 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteCard00.setPosition(236.4052, 467.1024);
                this._spriteCard00.setScale(0.5, 0.5);
                this._spriteCard00.setRotation(0.1783);
                this._spriteCard00.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteCard00Action = _spriteCard00Action.repeatForever();
        } else _spriteCard00Action = cc.sequence(
            cc.delayTime(delay),
            _spriteCard00Action.repeat(repeat)
        )
        
        this._spriteCard00.runAction(_spriteCard00Action);
    
        let _spriteCard02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(10 / (60 * speed), 229.7039, 472.5763),
                    cc.moveTo(40 / (60 * speed), 229.7039, 472.5763),
                    cc.moveTo(20 / (60 * speed), 415.1089, 265.8337),
                    cc.moveTo(120 / (60 * speed), 415.1089, 265.8337)
                ),
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(40 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(20 / (60 * speed), 0.36, 0.36),
                    cc.scaleTo(120 / (60 * speed), 0.36, 0.36)
                ),
                cc.sequence(
                    cc.rotateBy(10 / (60 * speed), 0, 0),
                    cc.rotateBy(40 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), 19.6498, 19.6521),
                    cc.rotateBy(120 / (60 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(40 / (60 * speed), 255),
                    cc.fadeTo(15 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 0),
                    cc.fadeTo(120 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteCard02.setPosition(229.7039, 472.5763);
                this._spriteCard02.setScale(0.5, 0.5);
                this._spriteCard02.setRotation(-19.6498);
                this._spriteCard02.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteCard02Action = _spriteCard02Action.repeatForever();
        } else _spriteCard02Action = cc.sequence(
            cc.delayTime(delay),
            _spriteCard02Action.repeat(repeat)
        )
        
        this._spriteCard02.runAction(_spriteCard02Action);
    
        let _spriteCard05Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(10 / (60 * speed), 243, 652.149),
                    cc.moveTo(80 / (60 * speed), 243, 652.149),
                    cc.moveTo(20 / (60 * speed), 241.9212, 494.6452),
                    cc.moveTo(50 / (60 * speed), 241.9212, 494.6452),
                    cc.moveTo(20 / (60 * speed), 415.6662, 264.3591),
                    cc.moveTo(10 / (60 * speed), 415.6662, 264.3591)
                ),
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(80 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(20 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(50 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(20 / (60 * speed), 0.36, 0.36),
                    cc.scaleTo(10 / (60 * speed), 0.36, 0.36)
                ),
                cc.sequence(
                    cc.rotateBy(10 / (60 * speed), 0, 0),
                    cc.rotateBy(80 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), 24.436, 24.4408),
                    cc.rotateBy(50 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), -24.436, -24.4408),
                    cc.rotateBy(10 / (60 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(80 / (60 * speed), 255),
                    cc.fadeTo(20 / (60 * speed), 255),
                    cc.fadeTo(50 / (60 * speed), 255),
                    cc.fadeTo(15 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 0),
                    cc.fadeTo(10 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteCard05.setPosition(243, 652.149);
                this._spriteCard05.setScale(0.5, 0.5);
                this._spriteCard05.setRotation(0);
                this._spriteCard05.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteCard05Action = _spriteCard05Action.repeatForever();
        } else _spriteCard05Action = cc.sequence(
            cc.delayTime(delay),
            _spriteCard05Action.repeat(repeat)
        )
        
        this._spriteCard05.runAction(_spriteCard05Action);
    
        let _spriteCard05_01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(10 / (60 * speed), 243, 652.149),
                    cc.moveTo(80 / (60 * speed), 243, 652.149),
                    cc.moveTo(100 / (60 * speed), 243, 652.149)
                ),
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(80 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(100 / (60 * speed), 0.5, 0.5)
                ),
                cc.sequence(
                    cc.rotateBy(10 / (60 * speed), 0, 0),
                    cc.rotateBy(80 / (60 * speed), 0, 0),
                    cc.rotateBy(100 / (60 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(80 / (60 * speed), 255),
                    cc.fadeTo(100 / (60 * speed), 255)
                ),
                cc.sequence(
                    cc.delayTime(10 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard05_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(80 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard05_01.setVisible(false);
                    }.bind(this)),
                    cc.delayTime(100 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard05_01.setVisible(false);
                    }.bind(this))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteCard05_01.setPosition(243, 652.149);
                this._spriteCard05_01.setScale(0.5, 0.5);
                this._spriteCard05_01.setRotation(0);
                this._spriteCard05_01.setOpacity(255);
                this._spriteCard05_01.setVisible(true);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteCard05_01Action = _spriteCard05_01Action.repeatForever();
        } else _spriteCard05_01Action = cc.sequence(
            cc.delayTime(delay),
            _spriteCard05_01Action.repeat(repeat)
        )
        
        this._spriteCard05_01.runAction(_spriteCard05_01Action);
    
        let _spriteCard04Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(10 / (60 * speed), 220.9911, 284.6479),
                    cc.moveTo(20 / (60 * speed), 240, 284.65),
                    cc.moveTo(10 / (60 * speed), 240, 284.65),
                    cc.moveTo(80 / (60 * speed), 240, 284.65),
                    cc.moveTo(20 / (60 * speed), 238.92, 492.8486),
                    cc.moveTo(5 / (60 * speed), 238.92, 492.8486),
                    cc.moveTo(5 / (60 * speed), 238.92, 492.8486),
                    cc.moveTo(20 / (60 * speed), 414.7623, 264.9279),
                    cc.moveTo(20 / (60 * speed), 414.7623, 264.9279)
                ),
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 0.6, 0.6),
                    cc.scaleTo(110 / (60 * speed), 0.6, 0.6),
                    cc.scaleTo(20 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(5 / (60 * speed), 0.6, 0.6),
                    cc.scaleTo(5 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(20 / (60 * speed), 0.36, 0.36),
                    cc.scaleTo(20 / (60 * speed), 0.36, 0.36)
                ),
                cc.sequence(
                    cc.rotateBy(10 / (60 * speed), 0, 0),
                    cc.rotateBy(110 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), -9.0307, -9.0307),
                    cc.rotateBy(5 / (60 * speed), 0, 0),
                    cc.rotateBy(5 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), 9.0307, 9.0307),
                    cc.rotateBy(20 / (60 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(110 / (60 * speed), 255),
                    cc.fadeTo(20 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 255),
                    cc.fadeTo(15 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 0),
                    cc.fadeTo(20 / (60 * speed), 0)
                ),
                cc.sequence(
                    cc.delayTime(10 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard04.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(110 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard04.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(20 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard04.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(5 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard04.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(5 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard04.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(40 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard04.setVisible(true);
                    }.bind(this))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteCard04.setPosition(220.9911, 284.6479);
                this._spriteCard04.setScale(0.6, 0.6);
                this._spriteCard04.setRotation(0);
                this._spriteCard04.setOpacity(255);
                this._spriteCard04.setVisible(true);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteCard04Action = _spriteCard04Action.repeatForever();
        } else _spriteCard04Action = cc.sequence(
            cc.delayTime(delay),
            _spriteCard04Action.repeat(repeat)
        )
        
        this._spriteCard04.runAction(_spriteCard04Action);
    
        let _spriteCard03Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(10 / (60 * speed), 270.6708, 284.0545),
                    cc.moveTo(20 / (60 * speed), 258.1976, 460.2707),
                    cc.moveTo(10 / (60 * speed), 258.1976, 460.2707),
                    cc.moveTo(20 / (60 * speed), 416.1599, 265.267),
                    cc.moveTo(130 / (60 * speed), 416.1599, 265.267)
                ),
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 0.6, 0.6),
                    cc.scaleTo(20 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(5 / (60 * speed), 0.6, 0.6),
                    cc.scaleTo(5 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(20 / (60 * speed), 0.36, 0.36),
                    cc.scaleTo(130 / (60 * speed), 0.36, 0.36)
                ),
                cc.sequence(
                    cc.rotateBy(10 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), 19.0366, 19.0554),
                    cc.rotateBy(10 / (60 * speed), -7.614699999999999, -7.622199999999999),
                    cc.rotateBy(20 / (60 * speed), -11.4219, -11.4332),
                    cc.rotateBy(130 / (60 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(20 / (60 * speed), 255),
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(15 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 0),
                    cc.fadeTo(130 / (60 * speed), 0)
                ),
                cc.sequence(
                    cc.delayTime(10 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard03.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(20 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard03.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(30 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard03.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(130 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard03.setVisible(true);
                    }.bind(this))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteCard03.setPosition(270.6708, 284.0545);
                this._spriteCard03.setScale(0.6, 0.6);
                this._spriteCard03.setRotation(0);
                this._spriteCard03.setOpacity(255);
                this._spriteCard03.setVisible(true);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteCard03Action = _spriteCard03Action.repeatForever();
        } else _spriteCard03Action = cc.sequence(
            cc.delayTime(delay),
            _spriteCard03Action.repeat(repeat)
        )
        
        this._spriteCard03.runAction(_spriteCard03Action);
    },

    resetCCSAnimPage00Idle: function () {
        this._spriteDeck.stopAllActions();
        this._spriteDeck.setScale(1, 1);
        this._spriteDeck.setPosition(413.8466, 261.8273);
    
        this._spriteCard00.stopAllActions();
        this._spriteCard00.setPosition(236.4052, 467.1024);
        this._spriteCard00.setScale(0.5, 0.5);
        this._spriteCard00.setRotation(0.1783);
        this._spriteCard00.setOpacity(255);
    
        this._spriteCard02.stopAllActions();
        this._spriteCard02.setPosition(229.7039, 472.5763);
        this._spriteCard02.setScale(0.5, 0.5);
        this._spriteCard02.setRotation(-19.6498);
        this._spriteCard02.setOpacity(255);
    
        this._spriteCard05.stopAllActions();
        this._spriteCard05.setPosition(243, 652.149);
        this._spriteCard05.setScale(0.5, 0.5);
        this._spriteCard05.setRotation(0);
        this._spriteCard05.setOpacity(255);
    
        this._spriteCard05_01.stopAllActions();
        this._spriteCard05_01.setPosition(243, 652.149);
        this._spriteCard05_01.setScale(0.5, 0.5);
        this._spriteCard05_01.setRotation(0);
        this._spriteCard05_01.setOpacity(255);
        this._spriteCard05_01.setVisible(true);
    
        this._spriteCard04.stopAllActions();
        this._spriteCard04.setPosition(220.9911, 284.6479);
        this._spriteCard04.setScale(0.6, 0.6);
        this._spriteCard04.setRotation(0);
        this._spriteCard04.setOpacity(255);
        this._spriteCard04.setVisible(true);
    
        this._spriteCard03.stopAllActions();
        this._spriteCard03.setPosition(270.6708, 284.0545);
        this._spriteCard03.setScale(0.6, 0.6);
        this._spriteCard03.setRotation(0);
        this._spriteCard03.setOpacity(255);
        this._spriteCard03.setVisible(true);
    },

    playCCSAnimPage01Idle: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimPage01Idle();
    
        let _spriteDeck_01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 1, 1),
                    cc.scaleTo(50 / (60 * speed), 1, 1),
                    cc.scaleTo(5 / (60 * speed), 1.1, 1.1),
                    cc.scaleTo(5 / (60 * speed), 1, 1),
                    cc.scaleTo(5 / (60 * speed), 1.1, 1.1),
                    cc.scaleTo(5 / (60 * speed), 1, 1),
                    cc.scaleTo(95 / (60 * speed), 1, 1),
                    cc.scaleTo(5 / (60 * speed), 1.1, 1.1),
                    cc.scaleTo(5 / (60 * speed), 1, 1),
                    cc.scaleTo(5 / (60 * speed), 1.1, 1.1),
                    cc.scaleTo(5 / (60 * speed), 1, 1),
                    cc.scaleTo(20 / (60 * speed), 1, 1)
                ),
                cc.sequence(
                    cc.moveTo(10 / (60 * speed), 424.7164, 239.9878),
                    cc.moveTo(170 / (60 * speed), 424.7164, 239.9878),
                    cc.moveTo(5 / (60 * speed), 424.7164, 239.9878),
                    cc.moveTo(5 / (60 * speed), 424.7164, 239.9878),
                    cc.moveTo(5 / (60 * speed), 424.7164, 239.9878),
                    cc.moveTo(20 / (60 * speed), 424.7164, 239.9878)
                ),
                cc.sequence(
                    cc.rotateBy(10 / (60 * speed), 0, 0),
                    cc.rotateBy(170 / (60 * speed), 0, 0),
                    cc.rotateBy(5 / (60 * speed), 0, 0),
                    cc.rotateBy(5 / (60 * speed), 0, 0),
                    cc.rotateBy(5 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 215),
                    cc.fadeTo(170 / (60 * speed), 215),
                    cc.fadeTo(5 / (60 * speed), 215),
                    cc.fadeTo(5 / (60 * speed), 215),
                    cc.fadeTo(5 / (60 * speed), 215),
                    cc.fadeTo(20 / (60 * speed), 215)
                ),
                cc.sequence(
                    cc.delayTime(10 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteDeck_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(170 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteDeck_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(5 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteDeck_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(5 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteDeck_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(5 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteDeck_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(20 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteDeck_01.setVisible(true);
                    }.bind(this))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteDeck_01.setScale(1, 1);
                this._spriteDeck_01.setPosition(424.7164, 239.9878);
                this._spriteDeck_01.setRotation(0);
                this._spriteDeck_01.setOpacity(215);
                this._spriteDeck_01.setVisible(true);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteDeck_01Action = _spriteDeck_01Action.repeatForever();
        } else _spriteDeck_01Action = cc.sequence(
            cc.delayTime(delay),
            _spriteDeck_01Action.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._spriteDeck_01.runAction(_spriteDeck_01Action);
    
        let _spriteCard01_01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(10 / (60 * speed), 240.9991, 459.1726),
                    cc.moveTo(40 / (60 * speed), 240.9991, 459.1726),
                    cc.moveTo(20 / (60 * speed), 425.1099, 242.7799),
                    cc.moveTo(145 / (60 * speed), 425.1099, 242.7799)
                ),
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(40 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(20 / (60 * speed), 0.36, 0.36),
                    cc.scaleTo(145 / (60 * speed), 0.36, 0.36)
                ),
                cc.sequence(
                    cc.rotateBy(10 / (60 * speed), 0, 0),
                    cc.rotateBy(40 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), -12.7435, -12.744),
                    cc.rotateBy(145 / (60 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(40 / (60 * speed), 255),
                    cc.fadeTo(15 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 0),
                    cc.fadeTo(145 / (60 * speed), 0)
                ),
                cc.sequence(
                    cc.delayTime(10 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard01_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(40 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard01_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(20 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard01_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(145 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard01_01.setVisible(true);
                    }.bind(this))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteCard01_01.setPosition(240.9991, 459.1726);
                this._spriteCard01_01.setScale(0.5, 0.5);
                this._spriteCard01_01.setRotation(12.7435);
                this._spriteCard01_01.setOpacity(255);
                this._spriteCard01_01.setVisible(true);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteCard01_01Action = _spriteCard01_01Action.repeatForever();
        } else _spriteCard01_01Action = cc.sequence(
            cc.delayTime(delay),
            _spriteCard01_01Action.repeat(repeat)
        )
        
        this._spriteCard01_01.runAction(_spriteCard01_01Action);
    
        let _spriteCard03_01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(10 / (60 * speed), 241, 641.8474),
                    cc.moveTo(85 / (60 * speed), 241, 641.8474),
                    cc.moveTo(20 / (60 * speed), 242.2791, 471.5333),
                    cc.moveTo(50 / (60 * speed), 242.2791, 471.5333),
                    cc.moveTo(20 / (60 * speed), 425.8727, 243.9033),
                    cc.moveTo(30 / (60 * speed), 425.8727, 243.9033)
                ),
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(85 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(20 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(50 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(20 / (60 * speed), 0.36, 0.36),
                    cc.scaleTo(30 / (60 * speed), 0.36, 0.36)
                ),
                cc.sequence(
                    cc.rotateBy(10 / (60 * speed), 0, 0),
                    cc.rotateBy(85 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), -16.1469, -16.142799999999998),
                    cc.rotateBy(50 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), 16.1469, 16.1452),
                    cc.rotateBy(30 / (60 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(85 / (60 * speed), 255),
                    cc.fadeTo(20 / (60 * speed), 255),
                    cc.fadeTo(50 / (60 * speed), 255),
                    cc.fadeTo(15 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 0),
                    cc.fadeTo(30 / (60 * speed), 0)
                ),
                cc.sequence(
                    cc.delayTime(10 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard03_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(85 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard03_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(20 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard03_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(50 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard03_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(20 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard03_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(30 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard03_01.setVisible(true);
                    }.bind(this))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteCard03_01.setPosition(241, 641.8474);
                this._spriteCard03_01.setScale(0.5, 0.5);
                this._spriteCard03_01.setRotation(0);
                this._spriteCard03_01.setOpacity(255);
                this._spriteCard03_01.setVisible(true);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteCard03_01Action = _spriteCard03_01Action.repeatForever();
        } else _spriteCard03_01Action = cc.sequence(
            cc.delayTime(delay),
            _spriteCard03_01Action.repeat(repeat)
        )
        
        this._spriteCard03_01.runAction(_spriteCard03_01Action);
    
        let _spriteCard03_01_01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(10 / (60 * speed), 241, 641.85),
                    cc.moveTo(85 / (60 * speed), 241, 641.85),
                    cc.moveTo(120 / (60 * speed), 241, 641.85)
                ),
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(85 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(120 / (60 * speed), 0.5, 0.5)
                ),
                cc.sequence(
                    cc.rotateBy(10 / (60 * speed), 0, 0),
                    cc.rotateBy(85 / (60 * speed), 0, 0),
                    cc.rotateBy(120 / (60 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(85 / (60 * speed), 255),
                    cc.fadeTo(120 / (60 * speed), 255)
                ),
                cc.sequence(
                    cc.delayTime(10 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard03_01_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(85 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard03_01_01.setVisible(false);
                    }.bind(this)),
                    cc.delayTime(120 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard03_01_01.setVisible(false);
                    }.bind(this))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteCard03_01_01.setPosition(241, 641.85);
                this._spriteCard03_01_01.setScale(0.5, 0.5);
                this._spriteCard03_01_01.setRotation(0);
                this._spriteCard03_01_01.setOpacity(255);
                this._spriteCard03_01_01.setVisible(true);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteCard03_01_01Action = _spriteCard03_01_01Action.repeatForever();
        } else _spriteCard03_01_01Action = cc.sequence(
            cc.delayTime(delay),
            _spriteCard03_01_01Action.repeat(repeat)
        )
        
        this._spriteCard03_01_01.runAction(_spriteCard03_01_01Action);
    
        let _spriteCard02_01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(10 / (60 * speed), 216.7304, 267.6644),
                    cc.moveTo(20 / (60 * speed), 241, 267.6644),
                    cc.moveTo(50 / (60 * speed), 241, 267.6644),
                    cc.moveTo(45 / (60 * speed), 241, 267.6644),
                    cc.moveTo(20 / (60 * speed), 242.2795, 468.7081),
                    cc.moveTo(5 / (60 * speed), 242.2795, 468.7081),
                    cc.moveTo(5 / (60 * speed), 242.2795, 468.7081),
                    cc.moveTo(20 / (60 * speed), 426.5166, 243.3312),
                    cc.moveTo(40 / (60 * speed), 426.5166, 243.3312)
                ),
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 0.6, 0.6),
                    cc.scaleTo(20 / (60 * speed), 0.6, 0.6),
                    cc.scaleTo(95 / (60 * speed), 0.6, 0.6),
                    cc.scaleTo(20 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(5 / (60 * speed), 0.6, 0.6),
                    cc.scaleTo(5 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(20 / (60 * speed), 0.36, 0.36),
                    cc.scaleTo(40 / (60 * speed), 0.36, 0.36)
                ),
                cc.sequence(
                    cc.rotateBy(10 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), 0, 0),
                    cc.rotateBy(95 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), 14.5681, 14.5671),
                    cc.rotateBy(5 / (60 * speed), 0, 0),
                    cc.rotateBy(5 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), -14.5681, -14.5685),
                    cc.rotateBy(40 / (60 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(20 / (60 * speed), 255),
                    cc.fadeTo(50 / (60 * speed), 255),
                    cc.fadeTo(45 / (60 * speed), 255),
                    cc.fadeTo(20 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 255),
                    cc.fadeTo(15 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 0),
                    cc.fadeTo(40 / (60 * speed), 0)
                ),
                cc.sequence(
                    cc.delayTime(10 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard02_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(20 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard02_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(95 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard02_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(20 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard02_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(5 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard02_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(5 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard02_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(60 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard02_01.setVisible(true);
                    }.bind(this))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteCard02_01.setPosition(216.7304, 267.6644);
                this._spriteCard02_01.setScale(0.6, 0.6);
                this._spriteCard02_01.setRotation(0);
                this._spriteCard02_01.setOpacity(255);
                this._spriteCard02_01.setVisible(true);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteCard02_01Action = _spriteCard02_01Action.repeatForever();
        } else _spriteCard02_01Action = cc.sequence(
            cc.delayTime(delay),
            _spriteCard02_01Action.repeat(repeat)
        )
        
        this._spriteCard02_01.runAction(_spriteCard02_01Action);
    
        let _spriteCard00_01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(10 / (60 * speed), 267.0618, 268.2855),
                    cc.moveTo(20 / (60 * speed), 252.8223, 469.4127),
                    cc.moveTo(5 / (60 * speed), 252.8223, 469.4127),
                    cc.moveTo(5 / (60 * speed), 252.8223, 469.4127),
                    cc.moveTo(20 / (60 * speed), 426.3737, 244.3443),
                    cc.moveTo(155 / (60 * speed), 426.3737, 244.3443)
                ),
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 0.6, 0.6),
                    cc.scaleTo(20 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(5 / (60 * speed), 0.6, 0.6),
                    cc.scaleTo(5 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(20 / (60 * speed), 0.36, 0.36),
                    cc.scaleTo(155 / (60 * speed), 0.36, 0.36)
                ),
                cc.sequence(
                    cc.rotateBy(10 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), -13.32, -13.3199),
                    cc.rotateBy(5 / (60 * speed), 0, 0),
                    cc.rotateBy(5 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), 13.32, 13.3228),
                    cc.rotateBy(155 / (60 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(20 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 255),
                    cc.fadeTo(15 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 0),
                    cc.fadeTo(155 / (60 * speed), 0)
                ),
                cc.sequence(
                    cc.delayTime(10 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard00_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(20 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard00_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(5 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard00_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(5 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard00_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(20 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard00_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(155 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard00_01.setVisible(true);
                    }.bind(this))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteCard00_01.setPosition(267.0618, 268.2855);
                this._spriteCard00_01.setScale(0.6, 0.6);
                this._spriteCard00_01.setRotation(0);
                this._spriteCard00_01.setOpacity(255);
                this._spriteCard00_01.setVisible(true);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteCard00_01Action = _spriteCard00_01Action.repeatForever();
        } else _spriteCard00_01Action = cc.sequence(
            cc.delayTime(delay),
            _spriteCard00_01Action.repeat(repeat)
        )
        
        this._spriteCard00_01.runAction(_spriteCard00_01Action);
    
        let _spritePisti_01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 3, 3),
                    cc.scaleTo(20 / (60 * speed), 3, 3),
                    cc.scaleTo(20 / (60 * speed), 1, 1).easing(cc.easeBackOut()),
                    cc.scaleTo(20 / (60 * speed), 1, 1),
                    cc.scaleTo(15 / (60 * speed), 3, 3).easing(cc.easeBackIn()),
                    cc.scaleTo(130 / (60 * speed), 3, 3)
                ),
                cc.sequence(
                    cc.delayTime(10 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spritePisti_01.setVisible(false);
                    }.bind(this)),
                    cc.delayTime(20 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spritePisti_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(55 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spritePisti_01.setVisible(false);
                    }.bind(this)),
                    cc.delayTime(130 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spritePisti_01.setVisible(false);
                    }.bind(this))
                ),
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 215),
                    cc.fadeTo(20 / (60 * speed), 0),
                    cc.fadeTo(20 / (60 * speed), 255),
                    cc.fadeTo(20 / (60 * speed), 255),
                    cc.fadeTo(15 / (60 * speed), 0),
                    cc.fadeTo(130 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spritePisti_01.setScale(3, 3);
                this._spritePisti_01.setVisible(false);
                this._spritePisti_01.setOpacity(215);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spritePisti_01Action = _spritePisti_01Action.repeatForever();
        } else _spritePisti_01Action = cc.sequence(
            cc.delayTime(delay),
            _spritePisti_01Action.repeat(repeat)
        )
        
        this._spritePisti_01.runAction(_spritePisti_01Action);
    
        let _spriteDoublePisti_01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 1, 1),
                    cc.scaleTo(135 / (60 * speed), 3, 3),
                    cc.scaleTo(20 / (60 * speed), 1, 1).easing(cc.easeBackOut()),
                    cc.scaleTo(20 / (60 * speed), 1, 1),
                    cc.scaleTo(20 / (60 * speed), 3, 3),
                    cc.scaleTo(10 / (60 * speed), 3, 3)
                ),
                cc.sequence(
                    cc.delayTime(10 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteDoublePisti_01.setVisible(false);
                    }.bind(this)),
                    cc.delayTime(135 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteDoublePisti_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(60 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteDoublePisti_01.setVisible(false);
                    }.bind(this)),
                    cc.delayTime(10 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteDoublePisti_01.setVisible(false);
                    }.bind(this))
                ),
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 215),
                    cc.fadeTo(135 / (60 * speed), 0),
                    cc.fadeTo(20 / (60 * speed), 255),
                    cc.fadeTo(20 / (60 * speed), 255),
                    cc.fadeTo(20 / (60 * speed), 0),
                    cc.fadeTo(10 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteDoublePisti_01.setScale(1, 1);
                this._spriteDoublePisti_01.setVisible(false);
                this._spriteDoublePisti_01.setOpacity(215);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteDoublePisti_01Action = _spriteDoublePisti_01Action.repeatForever();
        } else _spriteDoublePisti_01Action = cc.sequence(
            cc.delayTime(delay),
            _spriteDoublePisti_01Action.repeat(repeat)
        )
        
        this._spriteDoublePisti_01.runAction(_spriteDoublePisti_01Action);
    },

    resetCCSAnimPage01Idle: function () {
        this._spriteDeck_01.stopAllActions();
        this._spriteDeck_01.setScale(1, 1);
        this._spriteDeck_01.setPosition(424.7164, 239.9878);
        this._spriteDeck_01.setRotation(0);
        this._spriteDeck_01.setOpacity(215);
        this._spriteDeck_01.setVisible(true);
    
        this._spriteCard01_01.stopAllActions();
        this._spriteCard01_01.setPosition(240.9991, 459.1726);
        this._spriteCard01_01.setScale(0.5, 0.5);
        this._spriteCard01_01.setRotation(12.7435);
        this._spriteCard01_01.setOpacity(255);
        this._spriteCard01_01.setVisible(true);
    
        this._spriteCard03_01.stopAllActions();
        this._spriteCard03_01.setPosition(241, 641.8474);
        this._spriteCard03_01.setScale(0.5, 0.5);
        this._spriteCard03_01.setRotation(0);
        this._spriteCard03_01.setOpacity(255);
        this._spriteCard03_01.setVisible(true);
    
        this._spriteCard03_01_01.stopAllActions();
        this._spriteCard03_01_01.setPosition(241, 641.85);
        this._spriteCard03_01_01.setScale(0.5, 0.5);
        this._spriteCard03_01_01.setRotation(0);
        this._spriteCard03_01_01.setOpacity(255);
        this._spriteCard03_01_01.setVisible(true);
    
        this._spriteCard02_01.stopAllActions();
        this._spriteCard02_01.setPosition(216.7304, 267.6644);
        this._spriteCard02_01.setScale(0.6, 0.6);
        this._spriteCard02_01.setRotation(0);
        this._spriteCard02_01.setOpacity(255);
        this._spriteCard02_01.setVisible(true);
    
        this._spriteCard00_01.stopAllActions();
        this._spriteCard00_01.setPosition(267.0618, 268.2855);
        this._spriteCard00_01.setScale(0.6, 0.6);
        this._spriteCard00_01.setRotation(0);
        this._spriteCard00_01.setOpacity(255);
        this._spriteCard00_01.setVisible(true);
    
        this._spritePisti_01.stopAllActions();
        this._spritePisti_01.setScale(3, 3);
        this._spritePisti_01.setVisible(false);
        this._spritePisti_01.setOpacity(215);
    
        this._spriteDoublePisti_01.stopAllActions();
        this._spriteDoublePisti_01.setScale(1, 1);
        this._spriteDoublePisti_01.setVisible(false);
        this._spriteDoublePisti_01.setOpacity(215);
    },

    playCCSAnimPage02Idle: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimPage02Idle();
    
        let _spriteDeckAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.delayTime(100 / (60 * speed)),
                    cc.scaleTo(0 / (60 * speed), 1, 1),
                    cc.scaleTo(3 / (60 * speed), 1.1, 1.1),
                    cc.scaleTo(3 / (60 * speed), 1, 1),
                    cc.delayTime(54 / (60 * speed))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteDeck.setScale(1, 1);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteDeckAction = _spriteDeckAction.repeatForever();
        } else _spriteDeckAction = cc.sequence(
            cc.delayTime(delay),
            _spriteDeckAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._spriteDeck.runAction(_spriteDeckAction);
    
        let _spriteDeck_02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 1, 1),
                    cc.scaleTo(50 / (60 * speed), 1, 1),
                    cc.scaleTo(5 / (60 * speed), 1.1, 1.1),
                    cc.scaleTo(5 / (60 * speed), 1, 1),
                    cc.scaleTo(5 / (60 * speed), 1.1, 1.1),
                    cc.scaleTo(5 / (60 * speed), 1, 1),
                    cc.scaleTo(60 / (60 * speed), 1, 1),
                    cc.scaleTo(5 / (60 * speed), 1.1, 1.1),
                    cc.scaleTo(5 / (60 * speed), 1, 1),
                    cc.scaleTo(10 / (60 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteDeck_02.setScale(1, 1);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteDeck_02Action = _spriteDeck_02Action.repeatForever();
        } else _spriteDeck_02Action = cc.sequence(
            cc.delayTime(delay),
            _spriteDeck_02Action.repeat(repeat)
        )
        
        this._spriteDeck_02.runAction(_spriteDeck_02Action);
    
        let _spriteCard04_02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(10 / (60 * speed), 235.6442, 454.7959),
                    cc.moveTo(50 / (60 * speed), 235.6442, 454.7959),
                    cc.moveTo(20 / (60 * speed), 424.2658, 236.7646),
                    cc.moveTo(80 / (60 * speed), 424.2658, 236.7646)
                ),
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(50 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(20 / (60 * speed), 0.36, 0.36),
                    cc.scaleTo(80 / (60 * speed), 0.36, 0.36)
                ),
                cc.sequence(
                    cc.rotateBy(10 / (60 * speed), 0, 0),
                    cc.rotateBy(50 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), 3.2138, 3.2155),
                    cc.rotateBy(80 / (60 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(50 / (60 * speed), 255),
                    cc.fadeTo(15 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 0),
                    cc.fadeTo(80 / (60 * speed), 0)
                ),
                cc.sequence(
                    cc.delayTime(10 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard04_02.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(50 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard04_02.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(20 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard04_02.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(80 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard04_02.setVisible(true);
                    }.bind(this))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteCard04_02.setPosition(235.6442, 454.7959);
                this._spriteCard04_02.setScale(0.5, 0.5);
                this._spriteCard04_02.setRotation(-3.2138);
                this._spriteCard04_02.setOpacity(255);
                this._spriteCard04_02.setVisible(true);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteCard04_02Action = _spriteCard04_02Action.repeatForever();
        } else _spriteCard04_02Action = cc.sequence(
            cc.delayTime(delay),
            _spriteCard04_02Action.repeat(repeat)
        )
        
        this._spriteCard04_02.runAction(_spriteCard04_02Action);
    
        let _spriteCard01_02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(10 / (60 * speed), 246.3091, 453.8215),
                    cc.moveTo(40 / (60 * speed), 246.3091, 453.8215),
                    cc.moveTo(20 / (60 * speed), 423.3112, 236.6247),
                    cc.moveTo(90 / (60 * speed), 423.3112, 236.6247)
                ),
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(40 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(20 / (60 * speed), 0.36, 0.36),
                    cc.scaleTo(90 / (60 * speed), 0.36, 0.36)
                ),
                cc.sequence(
                    cc.rotateBy(10 / (60 * speed), 0, 0),
                    cc.rotateBy(40 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), -11.181, -11.1738),
                    cc.rotateBy(90 / (60 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(40 / (60 * speed), 255),
                    cc.fadeTo(15 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 0),
                    cc.fadeTo(90 / (60 * speed), 0)
                ),
                cc.sequence(
                    cc.delayTime(10 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard01_02.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(40 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard01_02.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(20 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard01_02.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(90 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard01_02.setVisible(true);
                    }.bind(this))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteCard01_02.setPosition(246.3091, 453.8215);
                this._spriteCard01_02.setScale(0.5, 0.5);
                this._spriteCard01_02.setRotation(11.181);
                this._spriteCard01_02.setOpacity(255);
                this._spriteCard01_02.setVisible(true);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteCard01_02Action = _spriteCard01_02Action.repeatForever();
        } else _spriteCard01_02Action = cc.sequence(
            cc.delayTime(delay),
            _spriteCard01_02Action.repeat(repeat)
        )
        
        this._spriteCard01_02.runAction(_spriteCard01_02Action);
    
        let _spriteCard00_02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(10 / (60 * speed), 242.3097, 638.7228),
                    cc.moveTo(80 / (60 * speed), 242.3097, 638.7228),
                    cc.moveTo(20 / (60 * speed), 243.4818, 452.5329),
                    cc.moveTo(5 / (60 * speed), 243.4818, 452.5329),
                    cc.moveTo(5 / (60 * speed), 243.4818, 452.5329),
                    cc.moveTo(20 / (60 * speed), 424.8208, 237.064),
                    cc.moveTo(20 / (60 * speed), 424.8208, 237.064)
                ),
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(80 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(20 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(5 / (60 * speed), 0.6, 0.6),
                    cc.scaleTo(5 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(20 / (60 * speed), 0.36, 0.36),
                    cc.scaleTo(20 / (60 * speed), 0.36, 0.36)
                ),
                cc.sequence(
                    cc.rotateBy(10 / (60 * speed), 0, 0),
                    cc.rotateBy(80 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), 14.9472, 14.951),
                    cc.rotateBy(5 / (60 * speed), 0, 0),
                    cc.rotateBy(5 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), -14.9472, -14.9472),
                    cc.rotateBy(20 / (60 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(80 / (60 * speed), 255),
                    cc.fadeTo(20 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 255),
                    cc.fadeTo(15 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 0),
                    cc.fadeTo(20 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteCard00_02.setPosition(242.3097, 638.7228);
                this._spriteCard00_02.setScale(0.5, 0.5);
                this._spriteCard00_02.setRotation(0);
                this._spriteCard00_02.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteCard00_02Action = _spriteCard00_02Action.repeatForever();
        } else _spriteCard00_02Action = cc.sequence(
            cc.delayTime(delay),
            _spriteCard00_02Action.repeat(repeat)
        )
        
        this._spriteCard00_02.runAction(_spriteCard00_02Action);
    
        let _spriteCard00_02_01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(10 / (60 * speed), 242.4722, 638.9288),
                    cc.moveTo(80 / (60 * speed), 242.4722, 638.9288),
                    cc.moveTo(70 / (60 * speed), 242.4722, 638.9288)
                ),
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(80 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(70 / (60 * speed), 0.5, 0.5)
                ),
                cc.sequence(
                    cc.rotateBy(10 / (60 * speed), 0, 0),
                    cc.rotateBy(80 / (60 * speed), 0, 0),
                    cc.rotateBy(70 / (60 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(80 / (60 * speed), 255),
                    cc.fadeTo(70 / (60 * speed), 255)
                ),
                cc.sequence(
                    cc.delayTime(10 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard00_02_01.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(80 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard00_02_01.setVisible(false);
                    }.bind(this)),
                    cc.delayTime(70 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard00_02_01.setVisible(false);
                    }.bind(this))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteCard00_02_01.setPosition(242.4722, 638.9288);
                this._spriteCard00_02_01.setScale(0.5, 0.5);
                this._spriteCard00_02_01.setRotation(0);
                this._spriteCard00_02_01.setOpacity(255);
                this._spriteCard00_02_01.setVisible(true);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteCard00_02_01Action = _spriteCard00_02_01Action.repeatForever();
        } else _spriteCard00_02_01Action = cc.sequence(
            cc.delayTime(delay),
            _spriteCard00_02_01Action.repeat(repeat)
        )
        
        this._spriteCard00_02_01.runAction(_spriteCard00_02_01Action);
    
        let _spriteCard03_02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(10 / (60 * speed), 243.9645, 259.3382),
                    cc.moveTo(20 / (60 * speed), 243.9635, 449.9301),
                    cc.moveTo(5 / (60 * speed), 243.9635, 449.9301),
                    cc.moveTo(5 / (60 * speed), 243.9635, 449.9301),
                    cc.moveTo(20 / (60 * speed), 424.5298, 237.1356),
                    cc.moveTo(100 / (60 * speed), 424.5298, 237.1356)
                ),
                cc.sequence(
                    cc.scaleTo(10 / (60 * speed), 0.6, 0.6),
                    cc.scaleTo(20 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(5 / (60 * speed), 0.6, 0.6),
                    cc.scaleTo(5 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(20 / (60 * speed), 0.36, 0.36),
                    cc.scaleTo(100 / (60 * speed), 0.36, 0.36)
                ),
                cc.sequence(
                    cc.rotateBy(10 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), -8.5062, -8.5045),
                    cc.rotateBy(5 / (60 * speed), 0, 0),
                    cc.rotateBy(5 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), 8.5062, 8.5045),
                    cc.rotateBy(100 / (60 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(25 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 255),
                    cc.fadeTo(15 / (60 * speed), 255),
                    cc.fadeTo(5 / (60 * speed), 0),
                    cc.fadeTo(100 / (60 * speed), 0)
                ),
                cc.sequence(
                    cc.delayTime(10 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard03_02.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(25 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard03_02.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(5 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard03_02.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(20 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard03_02.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(100 / (60 * speed)),
                    cc.callFunc(function () {
                        this._spriteCard03_02.setVisible(true);
                    }.bind(this))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._spriteCard03_02.setPosition(243.9645, 259.3382);
                this._spriteCard03_02.setScale(0.6, 0.6);
                this._spriteCard03_02.setRotation(0);
                this._spriteCard03_02.setOpacity(255);
                this._spriteCard03_02.setVisible(true);
            }.bind(this))
        );
        if (repeat <= 0) {
            _spriteCard03_02Action = _spriteCard03_02Action.repeatForever();
        } else _spriteCard03_02Action = cc.sequence(
            cc.delayTime(delay),
            _spriteCard03_02Action.repeat(repeat)
        )
        
        this._spriteCard03_02.runAction(_spriteCard03_02Action);
    },

    resetCCSAnimPage02Idle: function () {
        this._spriteDeck.stopAllActions();
        this._spriteDeck.setScale(1, 1);
    
        this._spriteDeck_02.stopAllActions();
        this._spriteDeck_02.setScale(1, 1);
    
        this._spriteCard04_02.stopAllActions();
        this._spriteCard04_02.setPosition(235.6442, 454.7959);
        this._spriteCard04_02.setScale(0.5, 0.5);
        this._spriteCard04_02.setRotation(-3.2138);
        this._spriteCard04_02.setOpacity(255);
        this._spriteCard04_02.setVisible(true);
    
        this._spriteCard01_02.stopAllActions();
        this._spriteCard01_02.setPosition(246.3091, 453.8215);
        this._spriteCard01_02.setScale(0.5, 0.5);
        this._spriteCard01_02.setRotation(11.181);
        this._spriteCard01_02.setOpacity(255);
        this._spriteCard01_02.setVisible(true);
    
        this._spriteCard00_02.stopAllActions();
        this._spriteCard00_02.setPosition(242.3097, 638.7228);
        this._spriteCard00_02.setScale(0.5, 0.5);
        this._spriteCard00_02.setRotation(0);
        this._spriteCard00_02.setOpacity(255);
    
        this._spriteCard00_02_01.stopAllActions();
        this._spriteCard00_02_01.setPosition(242.4722, 638.9288);
        this._spriteCard00_02_01.setScale(0.5, 0.5);
        this._spriteCard00_02_01.setRotation(0);
        this._spriteCard00_02_01.setOpacity(255);
        this._spriteCard00_02_01.setVisible(true);
    
        this._spriteCard03_02.stopAllActions();
        this._spriteCard03_02.setPosition(243.9645, 259.3382);
        this._spriteCard03_02.setScale(0.6, 0.6);
        this._spriteCard03_02.setRotation(0);
        this._spriteCard03_02.setOpacity(255);
        this._spriteCard03_02.setVisible(true);
    }
});

/**
 * Create TutorialPopup
 * @returns {_ccs.TutorialPopup}
 */
_ccs.TutorialPopup.create = function () {
    return new _ccs.TutorialPopup();
};
