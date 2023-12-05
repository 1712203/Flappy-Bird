/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.Event15Tutorial
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.Event15Tutorial = cc.Layer.extend({

    /** @type {ck.Text} */
    _txtNote: null,
    /** @type {ccui.Button} */
    _btnOk: null,
    /** @type {ck.Text} */
    _txtOk: null,
    /** @type {cc.Node} */
    _nodeStep_1: null,
    /** @type {ccui.ImageView} */
    _imgPisti: null,
    /** @type {ccui.ImageView} */
    _imgStep01Cards: null,
    /** @type {cc.Sprite} */
    event15_token_1: null,
    /** @type {ccui.ImageView} */
    _imgDotStep_1: null,
    /** @type {ck.Text} */
    _txtDot_1: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtStep01: null,
    /** @type {cc.Sprite} */
    event15_token_1_0: null,
    /** @type {cc.Sprite} */
    event15_token_1_0_0: null,
    /** @type {cc.Sprite} */
    event15_token_1_0_0_0: null,
    /** @type {cc.Node} */
    _nodeStep_2: null,
    /** @type {ccui.ImageView} */
    _imgDotStep_2: null,
    /** @type {ck.Text} */
    _txtDot_2: null,
    /** @type {ccui.ImageView} */
    _imgStep2: null,
    /** @type {ccui.ImageView} */
    _imgNext: null,
    /** @type {ccui.ImageView} */
    _imgPrev: null,
    /** @type {ccui.ImageView} */
    Image_17: null,
    /** @type {ck.Text} */
    _txtTextGift: null,
    /** @type {ccui.ImageView} */
    Image_17_0: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtStep02: null,
    /** @type {cc.Node} */
    _nodeStep_3: null,
    /** @type {ccui.ImageView} */
    _imgDotStep_3: null,
    /** @type {ck.Text} */
    _txtDot_3: null,
    /** @type {ccui.ImageView} */
    _imgStep_3: null,
    /** @type {ccui.ImageView} */
    _imgHammer: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtStep03: null,
    /** @type {ck.Text} */
    _txtTitle: null,


    /**
     * _ccs.Event15Tutorial constructor
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

        ///// # _txtNote
        this._txtNote = new ck.Text();
        this._txtNote.setName("_txtNote");
        this.addChild(this._txtNote);
        this._txtNote.setCascadeOpacityEnabled(true);
        this._txtNote.setCascadeColorEnabled(true);
        this._txtNote.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNote, 0.5, 0.1341);
        let _txtNoteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNote);
        _txtNoteLayoutComponent.setPositionPercentXEnabled(true);
        _txtNoteLayoutComponent.setPositionPercentX(0.5);
        _txtNoteLayoutComponent.setPositionPercentYEnabled(true);
        _txtNoteLayoutComponent.setPositionPercentY(0.1341);
        this._txtNote.setTouchEnabled(false);
        this._txtNote.setUnifySizeEnabled(false);
        this._txtNote.ignoreContentAdaptWithSize(false);
        this._txtNote.setContentSize(cc.size(615.5746, 80.5422));
        this._txtNote.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtNote.setDefaultFontSize(25);
        this._txtNote.setString(gm.localize.getText("TXT_EVENT15_NOTE"));
        this._txtNote.setTextHorizontalAlignment(1);
        this._txtNote.setTextVerticalAlignment(1);

        ///// # _btnOk
        this._btnOk = new ccui.Button();
        this._btnOk.setName("_btnOk");
        this.addChild(this._btnOk);
        this._btnOk.setCascadeOpacityEnabled(true);
        this._btnOk.setCascadeColorEnabled(true);
        this._btnOk.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnOk, 0.5, 0.06);
        this._btnOk.setScale(1.1, 1.1);
        let _btnOkLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnOk);
        _btnOkLayoutComponent.setPositionPercentXEnabled(true);
        _btnOkLayoutComponent.setPositionPercentX(0.5);
        _btnOkLayoutComponent.setPositionPercentYEnabled(true);
        _btnOkLayoutComponent.setPositionPercentY(0.06);
        this._btnOk.loadTextureDisabled("buttons/rectangles/Yellow_02.png", 1);
        this._btnOk.loadTexturePressed("buttons/rectangles/Yellow_02.png", 1);
        this._btnOk.loadTextureNormal("buttons/rectangles/Yellow_02.png", 1);
        this._btnOk.setUnifySizeEnabled(false);
        this._btnOk.ignoreContentAdaptWithSize(false);
        this._btnOk.setScale9Enabled(true);
        this._btnOk.setCapInsets(cc.rect(15, 11, 154, 55));
        this._btnOk.setContentSize(cc.size(164, 77));
        this._btnOk.setTouchEnabled(true);

        ///// # _txtOk
        this._txtOk = new ck.Text();
        this._txtOk.setName("_txtOk");
        this._btnOk.addChild(this._txtOk);
        this._txtOk.setCascadeOpacityEnabled(true);
        this._txtOk.setCascadeColorEnabled(true);
        this._txtOk.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtOk, 0.5, 0.6);
        let _txtOkLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtOk);
        _txtOkLayoutComponent.setPositionPercentXEnabled(true);
        _txtOkLayoutComponent.setPositionPercentX(0.5);
        _txtOkLayoutComponent.setPositionPercentYEnabled(true);
        _txtOkLayoutComponent.setPositionPercentY(0.6);
        this._txtOk.setTouchEnabled(false);
        this._txtOk.ignoreContentAdaptWithSize(true);
        this._txtOk.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtOk.setDefaultFontSize(30);
        this._txtOk.setString(gm.localize.getText("TXT_OK"));
        this._txtOk.setTextHorizontalAlignment(1);
        this._txtOk.setTextVerticalAlignment(1);
        this._txtOk.enableOutline(cc.color(86, 47, 31, 255), 2);
        this._txtOk.enableShadow(cc.color(86, 47, 31, 255), cc.size(0, -1), 0);

        ///// # _nodeStep_1
        this._nodeStep_1 = new cc.Node();
        this._nodeStep_1.setName("_nodeStep_1");
        this.addChild(this._nodeStep_1);
        this._nodeStep_1.setCascadeOpacityEnabled(true);
        this._nodeStep_1.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeStep_1, 0.5, 0.72);
        let _nodeStep_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeStep_1);
        _nodeStep_1LayoutComponent.setPositionPercentXEnabled(true);
        _nodeStep_1LayoutComponent.setPositionPercentX(0.5);
        _nodeStep_1LayoutComponent.setPositionPercentYEnabled(true);
        _nodeStep_1LayoutComponent.setPositionPercentY(0.72);

        ///// # _imgPisti
        this._imgPisti = new ccui.ImageView();
        this._imgPisti.setName("_imgPisti");
        this._nodeStep_1.addChild(this._imgPisti);
        this._imgPisti.setCascadeOpacityEnabled(true);
        this._imgPisti.setCascadeColorEnabled(true);
        this._imgPisti.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgPisti.setPosition(65.8346, 43.6031);
        this._imgPisti.setScale(0.5, 0.5);
        this._imgPisti.setRotationX(11.7581);
        this._imgPisti.setRotationY(11.7577);
        let _imgPistiLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPisti);
        this._imgPisti.loadTexture("texts/game/Pisti.png", 1);
        this._imgPisti.setTouchEnabled(false);

        ///// # _imgStep01Cards
        this._imgStep01Cards = new ccui.ImageView();
        this._imgStep01Cards.setName("_imgStep01Cards");
        this._nodeStep_1.addChild(this._imgStep01Cards);
        this._imgStep01Cards.setCascadeOpacityEnabled(true);
        this._imgStep01Cards.setCascadeColorEnabled(true);
        this._imgStep01Cards.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgStep01Cards.setPosition(-104.3558, 29.8647);
        this._imgStep01Cards.setScale(0.6, 0.6);
        let _imgStep01CardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep01Cards);
        this._imgStep01Cards.loadTexture("ranking/Tutorial_01.png", 1);
        this._imgStep01Cards.setUnifySizeEnabled(false);
        this._imgStep01Cards.ignoreContentAdaptWithSize(false);
        this._imgStep01Cards.setContentSize(cc.size(227, 203));
        this._imgStep01Cards.setTouchEnabled(false);

        ///// # event15_token_1
        this.event15_token_1 = new cc.Sprite();
        this.event15_token_1.setName("event15_token_1");
        this._nodeStep_1.addChild(this.event15_token_1);
        this.event15_token_1.setCascadeOpacityEnabled(true);
        this.event15_token_1.setCascadeColorEnabled(true);
        this.event15_token_1.setAnchorPoint(cc.p(0.5, 0.5));
        this.event15_token_1.setPosition(-47.4048, -19.3617);
        let event15_token_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.event15_token_1);
        let sf = cc.spriteFrameCache.getSpriteFrame("event15_token.png"); if (sf) this.event15_token_1.setSpriteFrame(sf);
        let event15_token_1BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        event15_token_1BlendFunc.src = 1;
        event15_token_1BlendFunc.dst = 771;
        this.event15_token_1.setBlendFunc(event15_token_1BlendFunc);

        ///// # _imgDotStep_1
        this._imgDotStep_1 = new ccui.ImageView();
        this._imgDotStep_1.setName("_imgDotStep_1");
        this._nodeStep_1.addChild(this._imgDotStep_1);
        this._imgDotStep_1.setCascadeOpacityEnabled(true);
        this._imgDotStep_1.setCascadeColorEnabled(true);
        this._imgDotStep_1.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgDotStep_1.setPosition(-237.5885, -47.6138);
        let _imgDotStep_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDotStep_1);
        this._imgDotStep_1.loadTexture("circle_blue.png", 1);
        this._imgDotStep_1.setUnifySizeEnabled(false);
        this._imgDotStep_1.ignoreContentAdaptWithSize(false);
        this._imgDotStep_1.setContentSize(cc.size(70, 68));
        this._imgDotStep_1.setTouchEnabled(false);

        ///// # _txtDot_1
        this._txtDot_1 = new ck.Text();
        this._txtDot_1.setName("_txtDot_1");
        this._imgDotStep_1.addChild(this._txtDot_1);
        this._txtDot_1.setCascadeOpacityEnabled(true);
        this._txtDot_1.setCascadeColorEnabled(true);
        this._txtDot_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDot_1, 0.5, 0.5);
        let _txtDot_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDot_1);
        _txtDot_1LayoutComponent.setPositionPercentXEnabled(true);
        _txtDot_1LayoutComponent.setPositionPercentX(0.5);
        _txtDot_1LayoutComponent.setPositionPercentYEnabled(true);
        _txtDot_1LayoutComponent.setPositionPercentY(0.5);
        this._txtDot_1.setTouchEnabled(false);
        this._txtDot_1.ignoreContentAdaptWithSize(true);
        this._txtDot_1.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtDot_1.setDefaultFontSize(35);
        this._txtDot_1.setString("1");
        this._txtDot_1.setTextHorizontalAlignment(0);
        this._txtDot_1.setTextVerticalAlignment(0);
        this._txtDot_1.enableOutline(cc.color(5, 110, 202, 255), 3);

        ///// # _txtStep01
        this._txtStep01 = new ck.CustomRichTextExtend(cc.size(289.6085, 101.56));
        this._txtStep01.setName("_txtStep01");
        this._nodeStep_1.addChild(this._txtStep01);
        this._txtStep01.setCascadeOpacityEnabled(true);
        this._txtStep01.setCascadeColorEnabled(true);
        this._txtStep01.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtStep01.setPosition(1.8708, -80.5563);
        let _txtStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep01);
        this._txtStep01.setTouchEnabled(false);
        this._txtStep01.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtStep01.setDefaultSize(25);
        this._txtStep01.setDefaultAlignHorizontal(2);
        this._txtStep01.setDefaultAlignVertical(5);
        this._txtStep01.setString(gm.localize.getText("TXT_EVENT15_TUT_1"));

        ///// # event15_token_1_0
        this.event15_token_1_0 = new cc.Sprite();
        this.event15_token_1_0.setName("event15_token_1_0");
        this._nodeStep_1.addChild(this.event15_token_1_0);
        this.event15_token_1_0.setCascadeOpacityEnabled(true);
        this.event15_token_1_0.setCascadeColorEnabled(true);
        this.event15_token_1_0.setAnchorPoint(cc.p(0.5, 0.5));
        this.event15_token_1_0.setPosition(-11.3661, -33.3671);
        let event15_token_1_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.event15_token_1_0);
        let sf = cc.spriteFrameCache.getSpriteFrame("event15_token.png"); if (sf) this.event15_token_1_0.setSpriteFrame(sf);
        let event15_token_1_0BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        event15_token_1_0BlendFunc.src = 1;
        event15_token_1_0BlendFunc.dst = 771;
        this.event15_token_1_0.setBlendFunc(event15_token_1_0BlendFunc);

        ///// # event15_token_1_0_0
        this.event15_token_1_0_0 = new cc.Sprite();
        this.event15_token_1_0_0.setName("event15_token_1_0_0");
        this._nodeStep_1.addChild(this.event15_token_1_0_0);
        this.event15_token_1_0_0.setCascadeOpacityEnabled(true);
        this.event15_token_1_0_0.setCascadeColorEnabled(true);
        this.event15_token_1_0_0.setAnchorPoint(cc.p(0.5, 0.5));
        this.event15_token_1_0_0.setPosition(26.0082, -24.004);
        let event15_token_1_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.event15_token_1_0_0);
        let sf = cc.spriteFrameCache.getSpriteFrame("event15_token.png"); if (sf) this.event15_token_1_0_0.setSpriteFrame(sf);
        let event15_token_1_0_0BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        event15_token_1_0_0BlendFunc.src = 1;
        event15_token_1_0_0BlendFunc.dst = 771;
        this.event15_token_1_0_0.setBlendFunc(event15_token_1_0_0BlendFunc);

        ///// # event15_token_1_0_0_0
        this.event15_token_1_0_0_0 = new cc.Sprite();
        this.event15_token_1_0_0_0.setName("event15_token_1_0_0_0");
        this._nodeStep_1.addChild(this.event15_token_1_0_0_0);
        this.event15_token_1_0_0_0.setCascadeOpacityEnabled(true);
        this.event15_token_1_0_0_0.setCascadeColorEnabled(true);
        this.event15_token_1_0_0_0.setAnchorPoint(cc.p(0.5, 0.5));
        this.event15_token_1_0_0_0.setPosition(62.1674, -30.6646);
        let event15_token_1_0_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.event15_token_1_0_0_0);
        let sf = cc.spriteFrameCache.getSpriteFrame("event15_token.png"); if (sf) this.event15_token_1_0_0_0.setSpriteFrame(sf);
        let event15_token_1_0_0_0BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        event15_token_1_0_0_0BlendFunc.src = 1;
        event15_token_1_0_0_0BlendFunc.dst = 771;
        this.event15_token_1_0_0_0.setBlendFunc(event15_token_1_0_0_0BlendFunc);

        ///// # _nodeStep_2
        this._nodeStep_2 = new cc.Node();
        this._nodeStep_2.setName("_nodeStep_2");
        this.addChild(this._nodeStep_2);
        this._nodeStep_2.setCascadeOpacityEnabled(true);
        this._nodeStep_2.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeStep_2, 0.5, 0.4831);
        let _nodeStep_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeStep_2);
        _nodeStep_2LayoutComponent.setPositionPercentXEnabled(true);
        _nodeStep_2LayoutComponent.setPositionPercentX(0.5);
        _nodeStep_2LayoutComponent.setPositionPercentYEnabled(true);
        _nodeStep_2LayoutComponent.setPositionPercentY(0.4831);

        ///// # _imgDotStep_2
        this._imgDotStep_2 = new ccui.ImageView();
        this._imgDotStep_2.setName("_imgDotStep_2");
        this._nodeStep_2.addChild(this._imgDotStep_2);
        this._imgDotStep_2.setCascadeOpacityEnabled(true);
        this._imgDotStep_2.setCascadeColorEnabled(true);
        this._imgDotStep_2.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgDotStep_2.setPosition(-236.4298, 0);
        let _imgDotStep_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDotStep_2);
        this._imgDotStep_2.loadTexture("circle_blue.png", 1);
        this._imgDotStep_2.setUnifySizeEnabled(false);
        this._imgDotStep_2.ignoreContentAdaptWithSize(false);
        this._imgDotStep_2.setContentSize(cc.size(70, 68));
        this._imgDotStep_2.setTouchEnabled(false);

        ///// # _txtDot_2
        this._txtDot_2 = new ck.Text();
        this._txtDot_2.setName("_txtDot_2");
        this._imgDotStep_2.addChild(this._txtDot_2);
        this._txtDot_2.setCascadeOpacityEnabled(true);
        this._txtDot_2.setCascadeColorEnabled(true);
        this._txtDot_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDot_2, 0.5, 0.5);
        let _txtDot_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDot_2);
        _txtDot_2LayoutComponent.setPositionPercentXEnabled(true);
        _txtDot_2LayoutComponent.setPositionPercentX(0.5);
        _txtDot_2LayoutComponent.setPositionPercentYEnabled(true);
        _txtDot_2LayoutComponent.setPositionPercentY(0.5);
        this._txtDot_2.setTouchEnabled(false);
        this._txtDot_2.ignoreContentAdaptWithSize(true);
        this._txtDot_2.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtDot_2.setDefaultFontSize(35);
        this._txtDot_2.setString("2");
        this._txtDot_2.setTextHorizontalAlignment(0);
        this._txtDot_2.setTextVerticalAlignment(0);
        this._txtDot_2.enableOutline(cc.color(5, 110, 202, 255), 3);

        ///// # _imgStep2
        this._imgStep2 = new ccui.ImageView();
        this._imgStep2.setName("_imgStep2");
        this._nodeStep_2.addChild(this._imgStep2);
        this._imgStep2.setCascadeOpacityEnabled(true);
        this._imgStep2.setCascadeColorEnabled(true);
        this._imgStep2.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgStep2.setPosition(-0.7479, 17.01);
        this._imgStep2.setScale(0.8, 0.8);
        this._imgStep2.setRotationY(0.0016);
        let _imgStep2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep2);
        this._imgStep2.loadTexture("event15_frame_item.png", 1);
        this._imgStep2.setUnifySizeEnabled(false);
        this._imgStep2.ignoreContentAdaptWithSize(false);
        this._imgStep2.setContentSize(cc.size(208, 94));
        this._imgStep2.setTouchEnabled(false);

        ///// # _imgNext
        this._imgNext = new ccui.ImageView();
        this._imgNext.setName("_imgNext");
        this._imgStep2.addChild(this._imgNext);
        this._imgNext.setCascadeOpacityEnabled(true);
        this._imgNext.setCascadeColorEnabled(true);
        this._imgNext.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgNext, 1.2488, 0.4882);
        let _imgNextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNext);
        _imgNextLayoutComponent.setPositionPercentXEnabled(true);
        _imgNextLayoutComponent.setPositionPercentX(1.2488);
        _imgNextLayoutComponent.setPositionPercentYEnabled(true);
        _imgNextLayoutComponent.setPositionPercentY(0.4882);
        this._imgNext.loadTexture("btn_next_green.png", 1);
        this._imgNext.setUnifySizeEnabled(false);
        this._imgNext.ignoreContentAdaptWithSize(false);
        this._imgNext.setContentSize(cc.size(80, 113));
        this._imgNext.setTouchEnabled(false);

        ///// # _imgPrev
        this._imgPrev = new ccui.ImageView();
        this._imgPrev.setName("_imgPrev");
        this._imgStep2.addChild(this._imgPrev);
        this._imgPrev.setCascadeOpacityEnabled(true);
        this._imgPrev.setCascadeColorEnabled(true);
        this._imgPrev.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPrev, -0.2363, 0.5118);
        this._imgPrev.setFlippedX(true);
        let _imgPrevLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPrev);
        _imgPrevLayoutComponent.setPositionPercentXEnabled(true);
        _imgPrevLayoutComponent.setPositionPercentX(-0.2363);
        _imgPrevLayoutComponent.setPositionPercentYEnabled(true);
        _imgPrevLayoutComponent.setPositionPercentY(0.5118);
        this._imgPrev.loadTexture("btn_next_green.png", 1);
        this._imgPrev.setUnifySizeEnabled(false);
        this._imgPrev.ignoreContentAdaptWithSize(false);
        this._imgPrev.setContentSize(cc.size(80, 113));
        this._imgPrev.setTouchEnabled(false);
        this._imgPrev.setFlippedX(true);

        ///// # Image_17
        this.Image_17 = new ccui.ImageView();
        this.Image_17.setName("Image_17");
        this._imgStep2.addChild(this.Image_17);
        this.Image_17.setCascadeOpacityEnabled(true);
        this.Image_17.setCascadeColorEnabled(true);
        this.Image_17.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.Image_17, 0.5112, 0.6724);
        this.Image_17.setScale(0.6, 0.6);
        let Image_17LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.Image_17);
        this.Image_17.loadTexture("sprites/icons/color/coins/Coin.png", 0);
        this.Image_17.setUnifySizeEnabled(false);
        this.Image_17.ignoreContentAdaptWithSize(false);
        this.Image_17.setContentSize(cc.size(128, 128));
        this.Image_17.setTouchEnabled(false);

        ///// # _txtTextGift
        this._txtTextGift = new ck.Text();
        this._txtTextGift.setName("_txtTextGift");
        this._imgStep2.addChild(this._txtTextGift);
        this._txtTextGift.setCascadeOpacityEnabled(true);
        this._txtTextGift.setCascadeColorEnabled(true);
        this._txtTextGift.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTextGift, 0.5133, 0.2529);
        let _txtTextGiftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTextGift);
        _txtTextGiftLayoutComponent.setPositionPercentXEnabled(true);
        _txtTextGiftLayoutComponent.setPositionPercentX(0.5133);
        _txtTextGiftLayoutComponent.setPositionPercentYEnabled(true);
        _txtTextGiftLayoutComponent.setPositionPercentY(0.2529);
        this._txtTextGift.setTouchEnabled(false);
        this._txtTextGift.ignoreContentAdaptWithSize(true);
        this._txtTextGift.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtTextGift.setDefaultFontSize(40);
        this._txtTextGift.setTextHorizontalAlignment(1);
        this._txtTextGift.setTextVerticalAlignment(1);
        this._txtTextGift.enableOutline(cc.color(0, 0, 0, 255), 2);
        this._txtTextGift.enableShadow(cc.color(0, 0, 0, 255), cc.size(1, -2), 0);

        ///// # Image_17_0
        this.Image_17_0 = new ccui.ImageView();
        this.Image_17_0.setName("Image_17_0");
        this._imgStep2.addChild(this.Image_17_0);
        this.Image_17_0.setCascadeOpacityEnabled(true);
        this.Image_17_0.setCascadeColorEnabled(true);
        this.Image_17_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.Image_17_0, 1.3674, 1.2744);
        this.Image_17_0.setScale(0.7, 0.7);
        this.Image_17_0.setRotationX(-102.2263);
        this.Image_17_0.setRotationY(-102.2147);
        let Image_17_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.Image_17_0);
        this.Image_17_0.loadTexture("icons/color/other/Hand_02.png", 1);
        this.Image_17_0.setUnifySizeEnabled(false);
        this.Image_17_0.ignoreContentAdaptWithSize(false);
        this.Image_17_0.setContentSize(cc.size(206, 176));
        this.Image_17_0.setTouchEnabled(false);

        ///// # _txtStep02
        this._txtStep02 = new ck.CustomRichTextExtend(cc.size(420.7693, 57.2599));
        this._txtStep02.setName("_txtStep02");
        this._nodeStep_2.addChild(this._txtStep02);
        this._txtStep02.setCascadeOpacityEnabled(true);
        this._txtStep02.setCascadeColorEnabled(true);
        this._txtStep02.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtStep02.setPosition(0.6323, -60.7);
        let _txtStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep02);
        this._txtStep02.setTouchEnabled(false);
        this._txtStep02.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtStep02.setDefaultSize(25);
        this._txtStep02.setDefaultAlignHorizontal(2);
        this._txtStep02.setDefaultAlignVertical(5);
        this._txtStep02.setString(gm.localize.getText("TXT_EVENT15_TUT_2"));

        ///// # _nodeStep_3
        this._nodeStep_3 = new cc.Node();
        this._nodeStep_3.setName("_nodeStep_3");
        this.addChild(this._nodeStep_3);
        this._nodeStep_3.setCascadeOpacityEnabled(true);
        this._nodeStep_3.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeStep_3, 0.5018, 0.2705);
        let _nodeStep_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeStep_3);
        _nodeStep_3LayoutComponent.setPositionPercentXEnabled(true);
        _nodeStep_3LayoutComponent.setPositionPercentX(0.5018);
        _nodeStep_3LayoutComponent.setPositionPercentYEnabled(true);
        _nodeStep_3LayoutComponent.setPositionPercentY(0.2705);

        ///// # _imgDotStep_3
        this._imgDotStep_3 = new ccui.ImageView();
        this._imgDotStep_3.setName("_imgDotStep_3");
        this._nodeStep_3.addChild(this._imgDotStep_3);
        this._imgDotStep_3.setCascadeOpacityEnabled(true);
        this._imgDotStep_3.setCascadeColorEnabled(true);
        this._imgDotStep_3.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgDotStep_3.setPosition(-239.3151, 4.9765);
        let _imgDotStep_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDotStep_3);
        this._imgDotStep_3.loadTexture("circle_blue.png", 1);
        this._imgDotStep_3.setUnifySizeEnabled(false);
        this._imgDotStep_3.ignoreContentAdaptWithSize(false);
        this._imgDotStep_3.setContentSize(cc.size(70, 68));
        this._imgDotStep_3.setTouchEnabled(false);

        ///// # _txtDot_3
        this._txtDot_3 = new ck.Text();
        this._txtDot_3.setName("_txtDot_3");
        this._imgDotStep_3.addChild(this._txtDot_3);
        this._txtDot_3.setCascadeOpacityEnabled(true);
        this._txtDot_3.setCascadeColorEnabled(true);
        this._txtDot_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDot_3, 0.5, 0.5);
        let _txtDot_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDot_3);
        _txtDot_3LayoutComponent.setPositionPercentXEnabled(true);
        _txtDot_3LayoutComponent.setPositionPercentX(0.5);
        _txtDot_3LayoutComponent.setPositionPercentYEnabled(true);
        _txtDot_3LayoutComponent.setPositionPercentY(0.5);
        this._txtDot_3.setTouchEnabled(false);
        this._txtDot_3.ignoreContentAdaptWithSize(true);
        this._txtDot_3.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtDot_3.setDefaultFontSize(35);
        this._txtDot_3.setString("3");
        this._txtDot_3.setTextHorizontalAlignment(0);
        this._txtDot_3.setTextVerticalAlignment(0);
        this._txtDot_3.enableOutline(cc.color(5, 110, 202, 255), 3);

        ///// # _imgStep_3
        this._imgStep_3 = new ccui.ImageView();
        this._imgStep_3.setName("_imgStep_3");
        this._nodeStep_3.addChild(this._imgStep_3);
        this._imgStep_3.setCascadeOpacityEnabled(true);
        this._imgStep_3.setCascadeColorEnabled(true);
        this._imgStep_3.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgStep_3.setPosition(-0.4455, 26.39);
        this._imgStep_3.setScale(0.5, 0.5);
        this._imgStep_3.setRotationY(0.0017);
        let _imgStep_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep_3);
        this._imgStep_3.loadTexture("event15_icon_big.png", 1);
        this._imgStep_3.setUnifySizeEnabled(false);
        this._imgStep_3.ignoreContentAdaptWithSize(false);
        this._imgStep_3.setContentSize(cc.size(319, 254));
        this._imgStep_3.setTouchEnabled(false);

        ///// # _imgHammer
        this._imgHammer = new ccui.ImageView();
        this._imgHammer.setName("_imgHammer");
        this._imgStep_3.addChild(this._imgHammer);
        this._imgHammer.setCascadeOpacityEnabled(true);
        this._imgHammer.setCascadeColorEnabled(true);
        this._imgHammer.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHammer, 0.7897, 0.5622);
        this._imgHammer.setScale(2, 2);
        this._imgHammer.setFlippedX(true);
        let _imgHammerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHammer);
        this._imgHammer.loadTexture("icon_hammer_2.png", 1);
        this._imgHammer.setUnifySizeEnabled(false);
        this._imgHammer.ignoreContentAdaptWithSize(false);
        this._imgHammer.setContentSize(cc.size(84, 81));
        this._imgHammer.setTouchEnabled(false);
        this._imgHammer.setFlippedX(true);

        ///// # _txtStep03
        this._txtStep03 = new ck.CustomRichTextExtend(cc.size(381.1323, 77.1424));
        this._txtStep03.setName("_txtStep03");
        this._nodeStep_3.addChild(this._txtStep03);
        this._txtStep03.setCascadeOpacityEnabled(true);
        this._txtStep03.setCascadeColorEnabled(true);
        this._txtStep03.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtStep03.setPosition(-5.4, -51.4911);
        let _txtStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep03);
        this._txtStep03.setTouchEnabled(false);
        this._txtStep03.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtStep03.setDefaultSize(25);
        this._txtStep03.setDefaultAlignHorizontal(2);
        this._txtStep03.setDefaultAlignVertical(5);
        this._txtStep03.setString(gm.localize.getText("TXT_EVENT15_TUT_3"));

        ///// # _txtTitle
        this._txtTitle = new ck.Text();
        this._txtTitle.setName("_txtTitle");
        this.addChild(this._txtTitle);
        this._txtTitle.setCascadeOpacityEnabled(true);
        this._txtTitle.setCascadeColorEnabled(true);
        this._txtTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle, 0.5, 0.9099);
        this._txtTitle.setTextColor(cc.color(252, 206, 0, 255));
        let _txtTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle);
        _txtTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentX(0.5);
        _txtTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentY(0.9099);
        this._txtTitle.setTouchEnabled(false);
        this._txtTitle.setUnifySizeEnabled(false);
        this._txtTitle.ignoreContentAdaptWithSize(false);
        this._txtTitle.setContentSize(cc.size(304, 74));
        this._txtTitle.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtTitle.setDefaultFontSize(65);
        this._txtTitle.setString(gm.localize.getText("TXT_GUIDE"));
        this._txtTitle.setTextHorizontalAlignment(1);
        this._txtTitle.setTextVerticalAlignment(1);
        this._txtTitle.enableOutline(cc.color(86, 47, 31, 255), 4);
        this._txtTitle.enableShadow(cc.color(86, 47, 31, 255), cc.size(0, -2), 0);

    },



});

/**
 * Create Event15Tutorial
 * @returns {_ccs.Event15Tutorial}
 */
_ccs.Event15Tutorial.create = function () {
    return new _ccs.Event15Tutorial();
};
