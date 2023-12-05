/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ExpPassTut
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.ExpPassTut = cc.Layer.extend({

    /** @type {ccui.ImageView} */
    imageBgr: null,
    /** @type {ccui.Button} */
    btnClose: null,
    /** @type {ck.Text} */
    lbTitle: null,
    /** @type {ccui.ImageView} */
    imgStep1: null,
    /** @type {ccui.ImageView} */
    imgDot1: null,
    /** @type {ck.Text} */
    lbNum: null,
    /** @type {ccui.ImageView} */
    img: null,
    /** @type {ck.CustomRichTextExtend} */
    text_Tips1: null,
    /** @type {ccui.ImageView} */
    imgStep2: null,
    /** @type {ccui.ImageView} */
    img_0: null,
    /** @type {ck.CustomRichTextExtend} */
    text_Tips2: null,
    /** @type {ccui.ImageView} */
    imgDot2: null,
    /** @type {ck.Text} */
    lbNum_0: null,
    /** @type {ccui.ImageView} */
    imgStep3: null,
    /** @type {ccui.ImageView} */
    img_0_0: null,
    /** @type {ccui.ImageView} */
    imgDot2_0: null,
    /** @type {ck.Text} */
    lbNum_0_0: null,
    /** @type {ck.CustomRichTextExtend} */
    text_Tips3: null,
    /** @type {ccui.ImageView} */
    imgPass: null,
    /** @type {ccui.ImageView} */
    imgPassIcon: null,
    /** @type {ck.CustomRichTextExtend} */
    text_Pass: null,
    /** @type {ck.Text} */
    txtTips: null,


    /**
     * _ccs.ExpPassTut constructor
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

        ///// # imageBgr
        this.imageBgr = new ccui.ImageView();
        this.imageBgr.setName("imageBgr");
        this.addChild(this.imageBgr);
        this.imageBgr.setCascadeOpacityEnabled(true);
        this.imageBgr.setCascadeColorEnabled(true);
        this.imageBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imageBgr, 0.5, 0.5);
        let imageBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imageBgr);
        imageBgrLayoutComponent.setPositionPercentXEnabled(true);
        imageBgrLayoutComponent.setPositionPercentX(0.5);
        imageBgrLayoutComponent.setPositionPercentYEnabled(true);
        imageBgrLayoutComponent.setPositionPercentY(0.5);
        this.imageBgr.loadTexture("e12_BG_tut.png", 1);
        this.imageBgr.setUnifySizeEnabled(false);
        this.imageBgr.ignoreContentAdaptWithSize(false);
        this.imageBgr.setContentSize(cc.size(578, 853));
        this.imageBgr.setTouchEnabled(true);

        ///// # btnClose
        this.btnClose = new ccui.Button();
        this.btnClose.setName("btnClose");
        this.imageBgr.addChild(this.btnClose);
        this.btnClose.setCascadeOpacityEnabled(true);
        this.btnClose.setCascadeColorEnabled(true);
        this.btnClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.btnClose, 0.9325, 0.9721);
        let btnCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.btnClose);
        btnCloseLayoutComponent.setPositionPercentXEnabled(true);
        btnCloseLayoutComponent.setPositionPercentX(0.9325);
        btnCloseLayoutComponent.setPositionPercentYEnabled(true);
        btnCloseLayoutComponent.setPositionPercentY(0.9721);
        this.btnClose.loadTextureDisabled("buttons/circles/Close.png", 1);
        this.btnClose.loadTexturePressed("buttons/circles/Close.png", 1);
        this.btnClose.loadTextureNormal("buttons/circles/Close.png", 1);
        this.btnClose.setUnifySizeEnabled(false);
        this.btnClose.ignoreContentAdaptWithSize(false);
        this.btnClose.setScale9Enabled(true);
        this.btnClose.setCapInsets(cc.rect(15, 11, 38, 54));
        this.btnClose.setContentSize(cc.size(68, 76));
        this.btnClose.setTouchEnabled(true);

        ///// # lbTitle
        this.lbTitle = new ck.Text();
        this.lbTitle.setName("lbTitle");
        this.imageBgr.addChild(this.lbTitle);
        this.lbTitle.setCascadeOpacityEnabled(true);
        this.lbTitle.setCascadeColorEnabled(true);
        this.lbTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.lbTitle, 0.5, 0.8351);
        this.lbTitle.setScale(1.1, 1.1);
        this.lbTitle.setTextColor(cc.color(152, 89, 15, 255));
        let lbTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.lbTitle);
        lbTitleLayoutComponent.setPositionPercentXEnabled(true);
        lbTitleLayoutComponent.setPositionPercentX(0.5);
        lbTitleLayoutComponent.setPositionPercentYEnabled(true);
        lbTitleLayoutComponent.setPositionPercentY(0.8351);
        this.lbTitle.setTouchEnabled(false);
        this.lbTitle.setUnifySizeEnabled(false);
        this.lbTitle.ignoreContentAdaptWithSize(false);
        this.lbTitle.setContentSize(cc.size(285.1854, 80.0716));
        this.lbTitle.setFontName("fonts/LilitaOneRegular.ttf");
        this.lbTitle.setDefaultFontSize(50);
        this.lbTitle.setString(gm.localize.getText("TXT_GUIDE"));
        this.lbTitle.setTextHorizontalAlignment(1);
        this.lbTitle.setTextVerticalAlignment(1);
        this.lbTitle.enableOutline(cc.color(215, 194, 163, 255), 2);

        ///// # imgStep1
        this.imgStep1 = new ccui.ImageView();
        this.imgStep1.setName("imgStep1");
        this.imageBgr.addChild(this.imgStep1);
        this.imgStep1.setCascadeOpacityEnabled(true);
        this.imgStep1.setCascadeColorEnabled(true);
        this.imgStep1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgStep1, 0.5285, 0.7324);
        let imgStep1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgStep1);
        imgStep1LayoutComponent.setPositionPercentXEnabled(true);
        imgStep1LayoutComponent.setPositionPercentX(0.5285);
        imgStep1LayoutComponent.setPositionPercentYEnabled(true);
        imgStep1LayoutComponent.setPositionPercentY(0.7324);
        this.imgStep1.loadTexture("e12_tut_board.png", 1);
        this.imgStep1.setUnifySizeEnabled(false);
        this.imgStep1.ignoreContentAdaptWithSize(false);
        this.imgStep1.setContentSize(cc.size(360, 85));
        this.imgStep1.setTouchEnabled(false);

        ///// # imgDot1
        this.imgDot1 = new ccui.ImageView();
        this.imgDot1.setName("imgDot1");
        this.imgStep1.addChild(this.imgDot1);
        this.imgDot1.setCascadeOpacityEnabled(true);
        this.imgDot1.setCascadeColorEnabled(true);
        this.imgDot1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgDot1, -0.14, 0.5176);
        let imgDot1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgDot1);
        imgDot1LayoutComponent.setPositionPercentXEnabled(true);
        imgDot1LayoutComponent.setPositionPercentX(-0.14);
        imgDot1LayoutComponent.setPositionPercentYEnabled(true);
        imgDot1LayoutComponent.setPositionPercentY(0.5176);
        this.imgDot1.loadTexture("circle_blue.png", 1);
        this.imgDot1.setUnifySizeEnabled(false);
        this.imgDot1.ignoreContentAdaptWithSize(false);
        this.imgDot1.setContentSize(cc.size(70, 68));
        this.imgDot1.setTouchEnabled(false);

        ///// # lbNum
        this.lbNum = new ck.Text();
        this.lbNum.setName("lbNum");
        this.imgDot1.addChild(this.lbNum);
        this.lbNum.setCascadeOpacityEnabled(true);
        this.lbNum.setCascadeColorEnabled(true);
        this.lbNum.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.lbNum, 0.4459, 0.4851);
        this.lbNum.setScale(1.1, 1.1);
        let lbNumLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.lbNum);
        lbNumLayoutComponent.setPositionPercentXEnabled(true);
        lbNumLayoutComponent.setPositionPercentX(0.4459);
        lbNumLayoutComponent.setPositionPercentYEnabled(true);
        lbNumLayoutComponent.setPositionPercentY(0.4851);
        this.lbNum.setTouchEnabled(false);
        this.lbNum.ignoreContentAdaptWithSize(true);
        this.lbNum.setFontName("fonts/LilitaOneRegular.ttf");
        this.lbNum.setDefaultFontSize(50);
        this.lbNum.setString("1");
        this.lbNum.setTextHorizontalAlignment(1);
        this.lbNum.setTextVerticalAlignment(1);

        ///// # img
        this.img = new ccui.ImageView();
        this.img.setName("img");
        this.imgStep1.addChild(this.img);
        this.img.setCascadeOpacityEnabled(true);
        this.img.setCascadeColorEnabled(true);
        this.img.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.img, 1.0194, 0.5);
        this.img.setScale(0.8, 0.8);
        let imgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.img);
        imgLayoutComponent.setPositionPercentXEnabled(true);
        imgLayoutComponent.setPositionPercentX(1.0194);
        imgLayoutComponent.setPositionPercentYEnabled(true);
        imgLayoutComponent.setPositionPercentY(0.5);
        this.img.loadTexture("texts/quest/Pisti.png", 1);
        this.img.setTouchEnabled(false);

        ///// # text_Tips1
        this.text_Tips1 = new ck.CustomRichTextExtend(cc.size(303.9648, 68.2726));
        this.text_Tips1.setName("text_Tips1");
        this.imgStep1.addChild(this.text_Tips1);
        this.text_Tips1.setCascadeOpacityEnabled(true);
        this.text_Tips1.setCascadeColorEnabled(true);
        this.text_Tips1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.text_Tips1, 0.4528, 0.4839);
        this.text_Tips1.setDefaultColor(cc.color(141, 80, 36, 255));
        let text_Tips1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.text_Tips1);
        text_Tips1LayoutComponent.setPositionPercentXEnabled(true);
        text_Tips1LayoutComponent.setPositionPercentX(0.4528);
        text_Tips1LayoutComponent.setPositionPercentYEnabled(true);
        text_Tips1LayoutComponent.setPositionPercentY(0.4839);
        this.text_Tips1.setTouchEnabled(false);
        this.text_Tips1.setDefaultFont("fonts/LilitaOneRegular.ttf");
        this.text_Tips1.setDefaultSize(23);
        this.text_Tips1.setDefaultAlignHorizontal(2);
        this.text_Tips1.setDefaultAlignVertical(5);
        this.text_Tips1.setString(gm.localize.getText("TXT_PLAY_PISTI_OR_MINIGAMES_TO_GET_EXP"));

        ///// # imgStep2
        this.imgStep2 = new ccui.ImageView();
        this.imgStep2.setName("imgStep2");
        this.imageBgr.addChild(this.imgStep2);
        this.imgStep2.setCascadeOpacityEnabled(true);
        this.imgStep2.setCascadeColorEnabled(true);
        this.imgStep2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgStep2, 0.5285, 0.5903);
        let imgStep2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgStep2);
        imgStep2LayoutComponent.setPositionPercentXEnabled(true);
        imgStep2LayoutComponent.setPositionPercentX(0.5285);
        imgStep2LayoutComponent.setPositionPercentYEnabled(true);
        imgStep2LayoutComponent.setPositionPercentY(0.5903);
        this.imgStep2.loadTexture("e12_tut_board.png", 1);
        this.imgStep2.setUnifySizeEnabled(false);
        this.imgStep2.ignoreContentAdaptWithSize(false);
        this.imgStep2.setContentSize(cc.size(360, 85));
        this.imgStep2.setTouchEnabled(false);

        ///// # img_0
        this.img_0 = new ccui.ImageView();
        this.img_0.setName("img_0");
        this.imgStep2.addChild(this.img_0);
        this.img_0.setCascadeOpacityEnabled(true);
        this.img_0.setCascadeColorEnabled(true);
        this.img_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.img_0, 1.0361, 0.5);
        let img_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.img_0);
        img_0LayoutComponent.setPositionPercentXEnabled(true);
        img_0LayoutComponent.setPositionPercentX(1.0361);
        img_0LayoutComponent.setPositionPercentYEnabled(true);
        img_0LayoutComponent.setPositionPercentY(0.5);
        this.img_0.loadTexture("e12_star_icon.png", 1);
        this.img_0.setUnifySizeEnabled(false);
        this.img_0.ignoreContentAdaptWithSize(false);
        this.img_0.setContentSize(cc.size(73, 91));
        this.img_0.setTouchEnabled(false);

        ///// # text_Tips2
        this.text_Tips2 = new ck.CustomRichTextExtend(cc.size(317.9726, 68.2726));
        this.text_Tips2.setName("text_Tips2");
        this.imgStep2.addChild(this.text_Tips2);
        this.text_Tips2.setCascadeOpacityEnabled(true);
        this.text_Tips2.setCascadeColorEnabled(true);
        this.text_Tips2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.text_Tips2, 0.4809, 0.4882);
        this.text_Tips2.setDefaultColor(cc.color(141, 80, 36, 255));
        let text_Tips2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.text_Tips2);
        text_Tips2LayoutComponent.setPositionPercentXEnabled(true);
        text_Tips2LayoutComponent.setPositionPercentX(0.4809);
        text_Tips2LayoutComponent.setPositionPercentYEnabled(true);
        text_Tips2LayoutComponent.setPositionPercentY(0.4882);
        this.text_Tips2.setTouchEnabled(false);
        this.text_Tips2.setDefaultFont("fonts/LilitaOneRegular.ttf");
        this.text_Tips2.setDefaultSize(23);
        this.text_Tips2.setDefaultAlignHorizontal(2);
        this.text_Tips2.setDefaultAlignVertical(5);
        this.text_Tips2.setString(gm.localize.getText("TXT_PLAY_BINGO_OR_MINIGAMES_TO_GET_EXP"));

        ///// # imgDot2
        this.imgDot2 = new ccui.ImageView();
        this.imgDot2.setName("imgDot2");
        this.imgStep2.addChild(this.imgDot2);
        this.imgDot2.setCascadeOpacityEnabled(true);
        this.imgDot2.setCascadeColorEnabled(true);
        this.imgDot2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgDot2, -0.14, 0.5);
        let imgDot2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgDot2);
        imgDot2LayoutComponent.setPositionPercentXEnabled(true);
        imgDot2LayoutComponent.setPositionPercentX(-0.14);
        imgDot2LayoutComponent.setPositionPercentYEnabled(true);
        imgDot2LayoutComponent.setPositionPercentY(0.5);
        this.imgDot2.loadTexture("circle_green.png", 1);
        this.imgDot2.setUnifySizeEnabled(false);
        this.imgDot2.ignoreContentAdaptWithSize(false);
        this.imgDot2.setContentSize(cc.size(70, 69));
        this.imgDot2.setTouchEnabled(false);

        ///// # lbNum_0
        this.lbNum_0 = new ck.Text();
        this.lbNum_0.setName("lbNum_0");
        this.imgDot2.addChild(this.lbNum_0);
        this.lbNum_0.setCascadeOpacityEnabled(true);
        this.lbNum_0.setCascadeColorEnabled(true);
        this.lbNum_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.lbNum_0, 0.5173, 0.483);
        this.lbNum_0.setScale(1.1, 1.1);
        let lbNum_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.lbNum_0);
        lbNum_0LayoutComponent.setPositionPercentXEnabled(true);
        lbNum_0LayoutComponent.setPositionPercentX(0.5173);
        lbNum_0LayoutComponent.setPositionPercentYEnabled(true);
        lbNum_0LayoutComponent.setPositionPercentY(0.483);
        this.lbNum_0.setTouchEnabled(false);
        this.lbNum_0.ignoreContentAdaptWithSize(true);
        this.lbNum_0.setFontName("fonts/LilitaOneRegular.ttf");
        this.lbNum_0.setDefaultFontSize(50);
        this.lbNum_0.setString("2");
        this.lbNum_0.setTextHorizontalAlignment(1);
        this.lbNum_0.setTextVerticalAlignment(1);

        ///// # imgStep3
        this.imgStep3 = new ccui.ImageView();
        this.imgStep3.setName("imgStep3");
        this.imageBgr.addChild(this.imgStep3);
        this.imgStep3.setCascadeOpacityEnabled(true);
        this.imgStep3.setCascadeColorEnabled(true);
        this.imgStep3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgStep3, 0.5285, 0.4483);
        let imgStep3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgStep3);
        imgStep3LayoutComponent.setPositionPercentXEnabled(true);
        imgStep3LayoutComponent.setPositionPercentX(0.5285);
        imgStep3LayoutComponent.setPositionPercentYEnabled(true);
        imgStep3LayoutComponent.setPositionPercentY(0.4483);
        this.imgStep3.loadTexture("e12_tut_board.png", 1);
        this.imgStep3.setUnifySizeEnabled(false);
        this.imgStep3.ignoreContentAdaptWithSize(false);
        this.imgStep3.setContentSize(cc.size(360, 85));
        this.imgStep3.setTouchEnabled(false);

        ///// # img_0_0
        this.img_0_0 = new ccui.ImageView();
        this.img_0_0.setName("img_0_0");
        this.imgStep3.addChild(this.img_0_0);
        this.img_0_0.setCascadeOpacityEnabled(true);
        this.img_0_0.setCascadeColorEnabled(true);
        this.img_0_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.img_0_0, 1.0556, 0.5);
        let img_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.img_0_0);
        img_0_0LayoutComponent.setPositionPercentXEnabled(true);
        img_0_0LayoutComponent.setPositionPercentX(1.0556);
        img_0_0LayoutComponent.setPositionPercentYEnabled(true);
        img_0_0LayoutComponent.setPositionPercentY(0.5);
        this.img_0_0.loadTexture("e12_chest_icon.png", 1);
        this.img_0_0.setUnifySizeEnabled(false);
        this.img_0_0.ignoreContentAdaptWithSize(false);
        this.img_0_0.setContentSize(cc.size(87, 100));
        this.img_0_0.setTouchEnabled(false);

        ///// # imgDot2_0
        this.imgDot2_0 = new ccui.ImageView();
        this.imgDot2_0.setName("imgDot2_0");
        this.imgStep3.addChild(this.imgDot2_0);
        this.imgDot2_0.setCascadeOpacityEnabled(true);
        this.imgDot2_0.setCascadeColorEnabled(true);
        this.imgDot2_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgDot2_0, -0.14, 0.5);
        let imgDot2_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgDot2_0);
        imgDot2_0LayoutComponent.setPositionPercentXEnabled(true);
        imgDot2_0LayoutComponent.setPositionPercentX(-0.14);
        imgDot2_0LayoutComponent.setPositionPercentYEnabled(true);
        imgDot2_0LayoutComponent.setPositionPercentY(0.5);
        this.imgDot2_0.loadTexture("circle_orange.png", 1);
        this.imgDot2_0.setUnifySizeEnabled(false);
        this.imgDot2_0.ignoreContentAdaptWithSize(false);
        this.imgDot2_0.setContentSize(cc.size(70, 68));
        this.imgDot2_0.setTouchEnabled(false);

        ///// # lbNum_0_0
        this.lbNum_0_0 = new ck.Text();
        this.lbNum_0_0.setName("lbNum_0_0");
        this.imgDot2_0.addChild(this.lbNum_0_0);
        this.lbNum_0_0.setCascadeOpacityEnabled(true);
        this.lbNum_0_0.setCascadeColorEnabled(true);
        this.lbNum_0_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.lbNum_0_0, 0.4888, 0.4851);
        this.lbNum_0_0.setScale(1.1, 1.1);
        let lbNum_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.lbNum_0_0);
        lbNum_0_0LayoutComponent.setPositionPercentXEnabled(true);
        lbNum_0_0LayoutComponent.setPositionPercentX(0.4888);
        lbNum_0_0LayoutComponent.setPositionPercentYEnabled(true);
        lbNum_0_0LayoutComponent.setPositionPercentY(0.4851);
        this.lbNum_0_0.setTouchEnabled(false);
        this.lbNum_0_0.ignoreContentAdaptWithSize(true);
        this.lbNum_0_0.setFontName("fonts/LilitaOneRegular.ttf");
        this.lbNum_0_0.setDefaultFontSize(50);
        this.lbNum_0_0.setString("3");
        this.lbNum_0_0.setTextHorizontalAlignment(1);
        this.lbNum_0_0.setTextVerticalAlignment(1);

        ///// # text_Tips3
        this.text_Tips3 = new ck.CustomRichTextExtend(cc.size(317.9726, 68.2726));
        this.text_Tips3.setName("text_Tips3");
        this.imgStep3.addChild(this.text_Tips3);
        this.text_Tips3.setCascadeOpacityEnabled(true);
        this.text_Tips3.setCascadeColorEnabled(true);
        this.text_Tips3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.text_Tips3, 0.4899, 0.5);
        this.text_Tips3.setDefaultColor(cc.color(141, 80, 36, 255));
        let text_Tips3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.text_Tips3);
        text_Tips3LayoutComponent.setPositionPercentXEnabled(true);
        text_Tips3LayoutComponent.setPositionPercentX(0.4899);
        text_Tips3LayoutComponent.setPositionPercentYEnabled(true);
        text_Tips3LayoutComponent.setPositionPercentY(0.5);
        this.text_Tips3.setTouchEnabled(false);
        this.text_Tips3.setDefaultFont("fonts/LilitaOneRegular.ttf");
        this.text_Tips3.setDefaultSize(23);
        this.text_Tips3.setDefaultAlignHorizontal(2);
        this.text_Tips3.setDefaultAlignVertical(5);
        this.text_Tips3.setString(gm.localize.getText("TXT_PLAY_BINGO_OR_MINIGAMES_TO_GET_EXP"));

        ///// # imgPass
        this.imgPass = new ccui.ImageView();
        this.imgPass.setName("imgPass");
        this.imageBgr.addChild(this.imgPass);
        this.imgPass.setCascadeOpacityEnabled(true);
        this.imgPass.setCascadeColorEnabled(true);
        this.imgPass.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgPass, 0.5, 0.2731);
        this.imgPass.setScale(1.1, 1.1);
        let imgPassLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgPass);
        imgPassLayoutComponent.setPositionPercentXEnabled(true);
        imgPassLayoutComponent.setPositionPercentX(0.5);
        imgPassLayoutComponent.setPositionPercentYEnabled(true);
        imgPassLayoutComponent.setPositionPercentY(0.2731);
        this.imgPass.loadTexture("e12_BG_tut_pass.png", 1);
        this.imgPass.setUnifySizeEnabled(false);
        this.imgPass.ignoreContentAdaptWithSize(false);
        this.imgPass.setContentSize(cc.size(327, 208));
        this.imgPass.setTouchEnabled(false);

        ///// # imgPassIcon
        this.imgPassIcon = new ccui.ImageView();
        this.imgPassIcon.setName("imgPassIcon");
        this.imgPass.addChild(this.imgPassIcon);
        this.imgPassIcon.setCascadeOpacityEnabled(true);
        this.imgPassIcon.setCascadeColorEnabled(true);
        this.imgPassIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgPassIcon, 0.5, 0.5721);
        this.imgPassIcon.setRotation(-3);
        let imgPassIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgPassIcon);
        imgPassIconLayoutComponent.setPositionPercentXEnabled(true);
        imgPassIconLayoutComponent.setPositionPercentX(0.5);
        imgPassIconLayoutComponent.setPositionPercentYEnabled(true);
        imgPassIconLayoutComponent.setPositionPercentY(0.5721);
        this.imgPassIcon.loadTexture("e12_pass_2.png", 1);
        this.imgPassIcon.setUnifySizeEnabled(false);
        this.imgPassIcon.ignoreContentAdaptWithSize(false);
        this.imgPassIcon.setContentSize(cc.size(176, 104));
        this.imgPassIcon.setTouchEnabled(false);

        ///// # text_Pass
        this.text_Pass = new ck.CustomRichTextExtend(cc.size(228.9907, 68.2726));
        this.text_Pass.setName("text_Pass");
        this.imgPass.addChild(this.text_Pass);
        this.text_Pass.setCascadeOpacityEnabled(true);
        this.text_Pass.setCascadeColorEnabled(true);
        this.text_Pass.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.text_Pass, 0.5192, 0.287);
        this.text_Pass.setRotation(-3);
        this.text_Pass.setDefaultColor(cc.color(242, 252, 252, 255));
        let text_PassLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.text_Pass);
        text_PassLayoutComponent.setPositionPercentXEnabled(true);
        text_PassLayoutComponent.setPositionPercentX(0.5192);
        text_PassLayoutComponent.setPositionPercentYEnabled(true);
        text_PassLayoutComponent.setPositionPercentY(0.287);
        this.text_Pass.setTouchEnabled(false);
        this.text_Pass.setDefaultFont("fonts/LilitaOneRegular.ttf");
        this.text_Pass.setDefaultSize(18);
        this.text_Pass.setDefaultAlignHorizontal(2);
        this.text_Pass.setDefaultAlignVertical(5);
        this.text_Pass.setString(gm.localize.getText("TXT_BUY_SUPER_PASS_TO_UNLOCK_ALL_VIP_PRIZES"));

        ///// # txtTips
        this.txtTips = new ck.Text();
        this.txtTips.setName("txtTips");
        this.imageBgr.addChild(this.txtTips);
        this.txtTips.setCascadeOpacityEnabled(true);
        this.txtTips.setCascadeColorEnabled(true);
        this.txtTips.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.txtTips, 0.5151, 0.1397);
        this.txtTips.setRotationX(-2.0025);
        this.txtTips.setRotationY(-2.0007);
        this.txtTips.setTextColor(cc.color(141, 80, 36, 255));
        let txtTipsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.txtTips);
        txtTipsLayoutComponent.setPositionPercentXEnabled(true);
        txtTipsLayoutComponent.setPositionPercentX(0.5151);
        txtTipsLayoutComponent.setPositionPercentYEnabled(true);
        txtTipsLayoutComponent.setPositionPercentY(0.1397);
        this.txtTips.setTouchEnabled(false);
        this.txtTips.setUnifySizeEnabled(false);
        this.txtTips.ignoreContentAdaptWithSize(false);
        this.txtTips.setContentSize(cc.size(244.3901, 50.7104));
        this.txtTips.setFontName("fonts/BebasNeueProBold.ttf");
        this.txtTips.setDefaultFontSize(20);
        this.txtTips.setString(gm.localize.getText("TXT_PRIZE_YOU_RECEIVE_IS_BASED_ON_YOUR_EXP_MILESTONE."));
        this.txtTips.setTextHorizontalAlignment(1);
        this.txtTips.setTextVerticalAlignment(1);

    },



});

/**
 * Create ExpPassTut
 * @returns {_ccs.ExpPassTut}
 */
_ccs.ExpPassTut.create = function () {
    return new _ccs.ExpPassTut();
};
