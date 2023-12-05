/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PokerRuleTab
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.PokerRuleTab = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutHelp: null,
    /** @type {ccui.Layout} */
    _layoutStep1: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtStep1: null,
    /** @type {ccui.Button} */
    _btnDeal: null,
    /** @type {ck.Text} */
    _txtDeal: null,
    /** @type {cc.Node} */
    _nodeHint: null,
    /** @type {ck.Text} */
    _txtLetBet: null,
    /** @type {ccui.ImageView} */
    _imgFlower: null,
    /** @type {cc.Node} */
    _nodeCoin: null,
    /** @type {ccui.ImageView} */
    _imgCoin: null,
    /** @type {ccui.ImageView} */
    _imgCoin_0: null,
    /** @type {ccui.ImageView} */
    _imgCoin_1: null,
    /** @type {ccui.ImageView} */
    _imgCoin_2: null,
    /** @type {ccui.ImageView} */
    _imgCoin_3: null,
    /** @type {ccui.ImageView} */
    _imgCoin_4: null,
    /** @type {ccui.ImageView} */
    _imgHand1: null,
    /** @type {ccui.Layout} */
    _layoutStep2: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtStep2: null,
    /** @type {ccui.Layout} */
    _layoutCards2: null,
    /** @type {cc.Node} */
    _nodeCard21: null,
    /** @type {ccui.ImageView} */
    _imgCard21: null,
    /** @type {cc.Node} */
    _nodeCard22: null,
    /** @type {ccui.ImageView} */
    _imgCard22: null,
    /** @type {cc.Node} */
    _nodeHold22: null,
    /** @type {ccui.ImageView} */
    _imgHold22: null,
    /** @type {ck.Text} */
    _txtHold22: null,
    /** @type {cc.Node} */
    _nodeCard23: null,
    /** @type {ccui.ImageView} */
    _imgCard23: null,
    /** @type {cc.Node} */
    _nodeCard24: null,
    /** @type {ccui.ImageView} */
    _imgCard24: null,
    /** @type {cc.Node} */
    _nodeCard25: null,
    /** @type {ccui.ImageView} */
    _imgCard25: null,
    /** @type {ccui.ImageView} */
    _imgHand2: null,
    /** @type {ccui.Layout} */
    _layoutStep3: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtStep3: null,
    /** @type {ccui.Button} */
    _btnDraw: null,
    /** @type {ck.Text} */
    _txtDraw: null,
    /** @type {ccui.ImageView} */
    _imgHand3: null,
    /** @type {ccui.Layout} */
    _layoutCards3: null,
    /** @type {cc.Node} */
    _nodeCard31: null,
    /** @type {ccui.ImageView} */
    _imgCard31: null,
    /** @type {ccui.ImageView} */
    _imgCard311: null,
    /** @type {cc.Node} */
    _nodeCard32: null,
    /** @type {ccui.ImageView} */
    _imgCard32: null,
    /** @type {cc.Node} */
    _nodeHold32: null,
    /** @type {ccui.ImageView} */
    _imgHold32: null,
    /** @type {ck.Text} */
    _txtHold32: null,
    /** @type {cc.Node} */
    _nodeCard33: null,
    /** @type {ccui.ImageView} */
    _imgCard33: null,
    /** @type {ccui.ImageView} */
    _imgCard331: null,
    /** @type {cc.Node} */
    _nodeCard34: null,
    /** @type {ccui.ImageView} */
    _imgCard34: null,
    /** @type {ccui.ImageView} */
    _imgCard341: null,
    /** @type {cc.Node} */
    _nodeCard35: null,
    /** @type {ccui.ImageView} */
    _imgCard35: null,
    /** @type {ccui.ImageView} */
    _imgCard351: null,
    /** @type {ck.Text} */
    _txtReward: null,


    /**
     * _ccs.PokerRuleTab constructor
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

        ///// # _layoutHelp
        this._layoutHelp = new ccui.Layout();
        this._layoutHelp.setName("_layoutHelp");
        this.addChild(this._layoutHelp);
        this._layoutHelp.setCascadeOpacityEnabled(true);
        this._layoutHelp.setCascadeColorEnabled(true);
        this._layoutHelp.setPosition(-0.0004, 1.8844);
        let _layoutHelpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutHelp);
        this._layoutHelp.setTouchEnabled(false);
        this._layoutHelp.setUnifySizeEnabled(false);
        this._layoutHelp.ignoreContentAdaptWithSize(false);
        this._layoutHelp.setContentSize(cc.size(510, 672.8599));

        ///// # _layoutStep1
        this._layoutStep1 = new ccui.Layout();
        this._layoutStep1.setName("_layoutStep1");
        this._layoutHelp.addChild(this._layoutStep1);
        this._layoutStep1.setCascadeOpacityEnabled(true);
        this._layoutStep1.setCascadeColorEnabled(true);
        this._layoutStep1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutStep1, 0.5, 0.82);
        let _layoutStep1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutStep1);
        _layoutStep1LayoutComponent.setPositionPercentXEnabled(true);
        _layoutStep1LayoutComponent.setPositionPercentX(0.5);
        _layoutStep1LayoutComponent.setPositionPercentYEnabled(true);
        _layoutStep1LayoutComponent.setPositionPercentY(0.82);
        _layoutStep1LayoutComponent.setPercentWidthEnabled(true);
        _layoutStep1LayoutComponent.setPercentWidth(0.9);
        this._layoutStep1.setTouchEnabled(false);
        this._layoutStep1.setUnifySizeEnabled(false);
        this._layoutStep1.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutStep1, 0.9);
        this._layoutStep1.setContentSize(cc.size(this._layoutStep1.width, 150));

        ///// # _txtStep1
        this._txtStep1 = new ck.CustomRichTextExtend(cc.size(400, 55));
        this._txtStep1.setName("_txtStep1");
        this._layoutStep1.addChild(this._txtStep1);
        this._txtStep1.setCascadeOpacityEnabled(true);
        this._txtStep1.setCascadeColorEnabled(true);
        this._txtStep1.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._txtStep1, 0.5, 0.1533);
        let _txtStep1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep1);
        _txtStep1LayoutComponent.setPositionPercentXEnabled(true);
        _txtStep1LayoutComponent.setPositionPercentX(0.5);
        _txtStep1LayoutComponent.setPositionPercentYEnabled(true);
        _txtStep1LayoutComponent.setPositionPercentY(0.1533);
        this._txtStep1.setTouchEnabled(false);
        this._txtStep1.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtStep1.setDefaultSize(22);
        this._txtStep1.setDefaultAlignHorizontal(2);
        this._txtStep1.setDefaultAlignVertical(4);
        this._txtStep1.setString(gm.localize.getText("TXT_POKER_TUTORIAL_1"));

        ///// # _btnDeal
        this._btnDeal = new ccui.Button();
        this._btnDeal.setName("_btnDeal");
        this._layoutStep1.addChild(this._btnDeal);
        this._btnDeal.setCascadeOpacityEnabled(true);
        this._btnDeal.setCascadeColorEnabled(true);
        this._btnDeal.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnDeal, 0.7467, 0.5);
        let _btnDealLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnDeal);
        _btnDealLayoutComponent.setPositionPercentXEnabled(true);
        _btnDealLayoutComponent.setPositionPercentX(0.7467);
        this._btnDeal.loadTextureDisabled("buttons/rectangles/Yellow.png", 1);
        this._btnDeal.loadTexturePressed("buttons/rectangles/Yellow.png", 1);
        this._btnDeal.loadTextureNormal("buttons/rectangles/Yellow.png", 1);
        this._btnDeal.setUnifySizeEnabled(false);
        this._btnDeal.ignoreContentAdaptWithSize(false);
        this._btnDeal.setScale9Enabled(true);
        this._btnDeal.setCapInsets(cc.rect(15, 11, 176, 59));
        this._btnDeal.setContentSize(cc.size(100, 55));
        this._btnDeal.setTouchEnabled(true);

        ///// # _txtDeal
        this._txtDeal = new ck.Text();
        this._txtDeal.setName("_txtDeal");
        this._btnDeal.addChild(this._txtDeal);
        this._txtDeal.setCascadeOpacityEnabled(true);
        this._txtDeal.setCascadeColorEnabled(true);
        this._txtDeal.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDeal, 0.5, 0.6);
        let _txtDealLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDeal);
        _txtDealLayoutComponent.setPositionPercentXEnabled(true);
        _txtDealLayoutComponent.setPositionPercentX(0.5);
        _txtDealLayoutComponent.setPositionPercentYEnabled(true);
        _txtDealLayoutComponent.setPositionPercentY(0.6);
        this._txtDeal.setTouchEnabled(false);
        this._txtDeal.ignoreContentAdaptWithSize(true);
        this._txtDeal.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDeal.setDefaultFontSize(30);
        this._txtDeal.setString(gm.localize.getText("TXT_DEAL"));
        this._txtDeal.setTextHorizontalAlignment(0);
        this._txtDeal.setTextVerticalAlignment(0);
        this._txtDeal.enableOutline(cc.color(194, 80, 62, 255), 1);
        this._txtDeal.enableShadow(cc.color(194, 80, 62, 255), cc.size(0, -2), 0);

        ///// # _nodeHint
        this._nodeHint = new cc.Node();
        this._nodeHint.setName("_nodeHint");
        this._layoutStep1.addChild(this._nodeHint);
        this._nodeHint.setCascadeOpacityEnabled(true);
        this._nodeHint.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeHint, 0.2538, 0.5);
        let _nodeHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeHint);
        _nodeHintLayoutComponent.setPositionPercentXEnabled(true);
        _nodeHintLayoutComponent.setPositionPercentX(0.2538);
        _nodeHintLayoutComponent.setPositionPercentYEnabled(true);
        _nodeHintLayoutComponent.setPositionPercentY(0.5);

        ///// # _txtLetBet
        this._txtLetBet = new ck.Text();
        this._txtLetBet.setName("_txtLetBet");
        this._nodeHint.addChild(this._txtLetBet);
        this._txtLetBet.setCascadeOpacityEnabled(true);
        this._txtLetBet.setCascadeColorEnabled(true);
        this._txtLetBet.setAnchorPoint(cc.p(0.5, 0.5));
        let _txtLetBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLetBet);
        _txtLetBetLayoutComponent.setPositionPercentXEnabled(true);
        _txtLetBetLayoutComponent.setPositionPercentX(0);
        _txtLetBetLayoutComponent.setPositionPercentYEnabled(true);
        _txtLetBetLayoutComponent.setPositionPercentY(0);
        this._txtLetBet.setTouchEnabled(false);
        this._txtLetBet.ignoreContentAdaptWithSize(true);
        this._txtLetBet.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLetBet.setDefaultFontSize(20);
        this._txtLetBet.setString(gm.localize.getText("TXT_LETS_BET"));
        this._txtLetBet.setTextHorizontalAlignment(1);
        this._txtLetBet.setTextVerticalAlignment(0);

        ///// # _imgFlower
        this._imgFlower = new ccui.ImageView();
        this._imgFlower.setName("_imgFlower");
        this._nodeHint.addChild(this._imgFlower);
        this._imgFlower.setCascadeOpacityEnabled(true);
        this._imgFlower.setCascadeColorEnabled(true);
        this._imgFlower.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgFlower.setScale(0.5, 0.4673);
        let _imgFlowerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFlower);
        _imgFlowerLayoutComponent.setPositionPercentXEnabled(true);
        _imgFlowerLayoutComponent.setPositionPercentX(0);
        _imgFlowerLayoutComponent.setPositionPercentYEnabled(true);
        _imgFlowerLayoutComponent.setPositionPercentY(0);
        this._imgFlower.loadTexture("ui/LetBetHint.png", 1);
        this._imgFlower.setUnifySizeEnabled(false);
        this._imgFlower.ignoreContentAdaptWithSize(false);
        this._imgFlower.setContentSize(cc.size(225, 225));
        this._imgFlower.setTouchEnabled(false);

        ///// # _nodeCoin
        this._nodeCoin = new cc.Node();
        this._nodeCoin.setName("_nodeCoin");
        this._layoutStep1.addChild(this._nodeCoin);
        this._nodeCoin.setCascadeOpacityEnabled(true);
        this._nodeCoin.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeCoin, 0.2593, 0.4);
        this._nodeCoin.setOpacity(0);
        let _nodeCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCoin);

        ///// # _imgCoin
        this._imgCoin = new ccui.ImageView();
        this._imgCoin.setName("_imgCoin");
        this._nodeCoin.addChild(this._imgCoin);
        this._imgCoin.setCascadeOpacityEnabled(true);
        this._imgCoin.setCascadeColorEnabled(true);
        this._imgCoin.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCoin.setScale(0.3, 0.3);
        let _imgCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCoin);
        this._imgCoin.loadTexture("sprites/icons/color/coins/Coin.png", 0);
        this._imgCoin.setUnifySizeEnabled(false);
        this._imgCoin.ignoreContentAdaptWithSize(false);
        this._imgCoin.setContentSize(cc.size(128, 128));
        this._imgCoin.setTouchEnabled(false);

        ///// # _imgCoin_0
        this._imgCoin_0 = new ccui.ImageView();
        this._imgCoin_0.setName("_imgCoin_0");
        this._nodeCoin.addChild(this._imgCoin_0);
        this._imgCoin_0.setCascadeOpacityEnabled(true);
        this._imgCoin_0.setCascadeColorEnabled(true);
        this._imgCoin_0.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCoin_0.setPosition(10, -10);
        this._imgCoin_0.setScale(0.3, 0.3);
        let _imgCoin_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCoin_0);
        this._imgCoin_0.loadTexture("sprites/icons/color/coins/Coin.png", 0);
        this._imgCoin_0.setUnifySizeEnabled(false);
        this._imgCoin_0.ignoreContentAdaptWithSize(false);
        this._imgCoin_0.setContentSize(cc.size(128, 128));
        this._imgCoin_0.setTouchEnabled(false);

        ///// # _imgCoin_1
        this._imgCoin_1 = new ccui.ImageView();
        this._imgCoin_1.setName("_imgCoin_1");
        this._nodeCoin.addChild(this._imgCoin_1);
        this._imgCoin_1.setCascadeOpacityEnabled(true);
        this._imgCoin_1.setCascadeColorEnabled(true);
        this._imgCoin_1.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCoin_1.setPosition(-13.0581, -14.4054);
        this._imgCoin_1.setScale(0.3, 0.3);
        this._imgCoin_1.setRotation(99);
        let _imgCoin_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCoin_1);
        this._imgCoin_1.loadTexture("sprites/icons/color/coins/Coin.png", 0);
        this._imgCoin_1.setUnifySizeEnabled(false);
        this._imgCoin_1.ignoreContentAdaptWithSize(false);
        this._imgCoin_1.setContentSize(cc.size(128, 128));
        this._imgCoin_1.setTouchEnabled(false);

        ///// # _imgCoin_2
        this._imgCoin_2 = new ccui.ImageView();
        this._imgCoin_2.setName("_imgCoin_2");
        this._nodeCoin.addChild(this._imgCoin_2);
        this._imgCoin_2.setCascadeOpacityEnabled(true);
        this._imgCoin_2.setCascadeColorEnabled(true);
        this._imgCoin_2.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCoin_2.setPosition(-3.9036, -19.4911);
        this._imgCoin_2.setScale(0.3, 0.3);
        this._imgCoin_2.setRotation(20);
        let _imgCoin_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCoin_2);
        this._imgCoin_2.loadTexture("sprites/icons/color/coins/Coin.png", 0);
        this._imgCoin_2.setUnifySizeEnabled(false);
        this._imgCoin_2.ignoreContentAdaptWithSize(false);
        this._imgCoin_2.setContentSize(cc.size(128, 128));
        this._imgCoin_2.setTouchEnabled(false);

        ///// # _imgCoin_3
        this._imgCoin_3 = new ccui.ImageView();
        this._imgCoin_3.setName("_imgCoin_3");
        this._nodeCoin.addChild(this._imgCoin_3);
        this._imgCoin_3.setCascadeOpacityEnabled(true);
        this._imgCoin_3.setCascadeColorEnabled(true);
        this._imgCoin_3.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCoin_3.setPosition(-18.6526, 7.9738);
        this._imgCoin_3.setScale(0.3, 0.3);
        let _imgCoin_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCoin_3);
        this._imgCoin_3.loadTexture("sprites/icons/color/coins/Coin.png", 0);
        this._imgCoin_3.setUnifySizeEnabled(false);
        this._imgCoin_3.ignoreContentAdaptWithSize(false);
        this._imgCoin_3.setContentSize(cc.size(128, 128));
        this._imgCoin_3.setTouchEnabled(false);

        ///// # _imgCoin_4
        this._imgCoin_4 = new ccui.ImageView();
        this._imgCoin_4.setName("_imgCoin_4");
        this._nodeCoin.addChild(this._imgCoin_4);
        this._imgCoin_4.setCascadeOpacityEnabled(true);
        this._imgCoin_4.setCascadeColorEnabled(true);
        this._imgCoin_4.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCoin_4.setPosition(10.8453, 11.026);
        this._imgCoin_4.setScale(0.3, 0.3);
        this._imgCoin_4.setRotation(15);
        let _imgCoin_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCoin_4);
        this._imgCoin_4.loadTexture("sprites/icons/color/coins/Coin.png", 0);
        this._imgCoin_4.setUnifySizeEnabled(false);
        this._imgCoin_4.ignoreContentAdaptWithSize(false);
        this._imgCoin_4.setContentSize(cc.size(128, 128));
        this._imgCoin_4.setTouchEnabled(false);

        ///// # _imgHand1
        this._imgHand1 = new ccui.ImageView();
        this._imgHand1.setName("_imgHand1");
        this._layoutStep1.addChild(this._imgHand1);
        this._imgHand1.setCascadeOpacityEnabled(true);
        this._imgHand1.setCascadeColorEnabled(true);
        this._imgHand1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHand1, 0.3653, 1.0143);
        this._imgHand1.setScale(0.4, 0.4);
        this._imgHand1.setRotation(219.4787);
        let _imgHand1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHand1);
        this._imgHand1.loadTexture("icons/color/other/Hand_03.png", 1);
        this._imgHand1.setUnifySizeEnabled(false);
        this._imgHand1.ignoreContentAdaptWithSize(false);
        this._imgHand1.setContentSize(cc.size(169, 216));
        this._imgHand1.setTouchEnabled(false);

        ///// # _layoutStep2
        this._layoutStep2 = new ccui.Layout();
        this._layoutStep2.setName("_layoutStep2");
        this._layoutHelp.addChild(this._layoutStep2);
        this._layoutStep2.setCascadeOpacityEnabled(true);
        this._layoutStep2.setCascadeColorEnabled(true);
        this._layoutStep2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutStep2, 0.5, 0.52);
        let _layoutStep2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutStep2);
        _layoutStep2LayoutComponent.setPositionPercentXEnabled(true);
        _layoutStep2LayoutComponent.setPositionPercentX(0.5);
        _layoutStep2LayoutComponent.setPositionPercentYEnabled(true);
        _layoutStep2LayoutComponent.setPositionPercentY(0.52);
        _layoutStep2LayoutComponent.setPercentWidthEnabled(true);
        _layoutStep2LayoutComponent.setPercentWidth(0.9);
        this._layoutStep2.setTouchEnabled(false);
        this._layoutStep2.setUnifySizeEnabled(false);
        this._layoutStep2.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutStep2, 0.9);
        this._layoutStep2.setContentSize(cc.size(this._layoutStep2.width, 150));

        ///// # _txtStep2
        this._txtStep2 = new ck.CustomRichTextExtend(cc.size(400, 55));
        this._txtStep2.setName("_txtStep2");
        this._layoutStep2.addChild(this._txtStep2);
        this._txtStep2.setCascadeOpacityEnabled(true);
        this._txtStep2.setCascadeColorEnabled(true);
        this._txtStep2.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._txtStep2, 0.5, 0.1733);
        let _txtStep2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep2);
        _txtStep2LayoutComponent.setPositionPercentXEnabled(true);
        _txtStep2LayoutComponent.setPositionPercentX(0.5);
        _txtStep2LayoutComponent.setPositionPercentYEnabled(true);
        _txtStep2LayoutComponent.setPositionPercentY(0.1733);
        this._txtStep2.setTouchEnabled(false);
        this._txtStep2.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtStep2.setDefaultSize(22);
        this._txtStep2.setDefaultAlignHorizontal(2);
        this._txtStep2.setDefaultAlignVertical(4);
        this._txtStep2.setString(gm.localize.getText("TXT_POKER_TUTORIAL_2"));

        ///// # _layoutCards2
        this._layoutCards2 = new ccui.Layout();
        this._layoutCards2.setName("_layoutCards2");
        this._layoutStep2.addChild(this._layoutCards2);
        this._layoutCards2.setCascadeOpacityEnabled(true);
        this._layoutCards2.setCascadeColorEnabled(true);
        this._layoutCards2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCards2, 0.5, 0.55);
        let _layoutCards2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCards2);
        _layoutCards2LayoutComponent.setPositionPercentXEnabled(true);
        _layoutCards2LayoutComponent.setPositionPercentX(0.5);
        _layoutCards2LayoutComponent.setPositionPercentYEnabled(true);
        _layoutCards2LayoutComponent.setPositionPercentY(0.55);
        _layoutCards2LayoutComponent.setPercentWidthEnabled(true);
        _layoutCards2LayoutComponent.setPercentWidth(0.9354);
        _layoutCards2LayoutComponent.setPercentHeightEnabled(true);
        _layoutCards2LayoutComponent.setPercentHeight(0.6);
        this._layoutCards2.setTouchEnabled(false);
        this._layoutCards2.setUnifySizeEnabled(false);
        this._layoutCards2.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutCards2, 0.9354, 0.6);

        ///// # _nodeCard21
        this._nodeCard21 = new cc.Node();
        this._nodeCard21.setName("_nodeCard21");
        this._layoutCards2.addChild(this._nodeCard21);
        this._nodeCard21.setCascadeOpacityEnabled(true);
        this._nodeCard21.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeCard21, 0.2051, 0.5);
        let _nodeCard21LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCard21);
        _nodeCard21LayoutComponent.setPositionPercentXEnabled(true);
        _nodeCard21LayoutComponent.setPositionPercentX(0.2051);
        _nodeCard21LayoutComponent.setPositionPercentYEnabled(true);
        _nodeCard21LayoutComponent.setPositionPercentY(0.5);

        ///// # _imgCard21
        this._imgCard21 = new ccui.ImageView();
        this._imgCard21.setName("_imgCard21");
        this._nodeCard21.addChild(this._imgCard21);
        this._imgCard21.setCascadeOpacityEnabled(true);
        this._imgCard21.setCascadeColorEnabled(true);
        this._imgCard21.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCard21.setScale(0.3, 0.3);
        let _imgCard21LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard21);
        this._imgCard21.loadTexture("cards/02.png", 1);
        this._imgCard21.setUnifySizeEnabled(false);
        this._imgCard21.ignoreContentAdaptWithSize(false);
        this._imgCard21.setContentSize(cc.size(186, 256));
        this._imgCard21.setTouchEnabled(false);

        ///// # _nodeCard22
        this._nodeCard22 = new cc.Node();
        this._nodeCard22.setName("_nodeCard22");
        this._layoutCards2.addChild(this._nodeCard22);
        this._nodeCard22.setCascadeOpacityEnabled(true);
        this._nodeCard22.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeCard22, 0.3549, 0.5);
        let _nodeCard22LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCard22);

        ///// # _imgCard22
        this._imgCard22 = new ccui.ImageView();
        this._imgCard22.setName("_imgCard22");
        this._nodeCard22.addChild(this._imgCard22);
        this._imgCard22.setCascadeOpacityEnabled(true);
        this._imgCard22.setCascadeColorEnabled(true);
        this._imgCard22.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCard22.setScale(0.3, 0.3);
        let _imgCard22LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard22);
        this._imgCard22.loadTexture("cards/12.png", 1);
        this._imgCard22.setUnifySizeEnabled(false);
        this._imgCard22.ignoreContentAdaptWithSize(false);
        this._imgCard22.setContentSize(cc.size(186, 256));
        this._imgCard22.setTouchEnabled(false);

        ///// # _nodeHold22
        this._nodeHold22 = new cc.Node();
        this._nodeHold22.setName("_nodeHold22");
        this._nodeCard22.addChild(this._nodeHold22);
        this._nodeHold22.setCascadeOpacityEnabled(true);
        this._nodeHold22.setCascadeColorEnabled(true);
        this._nodeHold22.setOpacity(0);
        let _nodeHold22LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeHold22);

        ///// # _imgHold22
        this._imgHold22 = new ccui.ImageView();
        this._imgHold22.setName("_imgHold22");
        this._nodeHold22.addChild(this._imgHold22);
        this._imgHold22.setCascadeOpacityEnabled(true);
        this._imgHold22.setCascadeColorEnabled(true);
        this._imgHold22.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgHold22.setPosition(0, -23.2299);
        this._imgHold22.setScale(0.3, 0.3);
        let _imgHold22LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHold22);
        this._imgHold22.loadTexture("ui/HoldRibbon.png", 1);
        this._imgHold22.setUnifySizeEnabled(false);
        this._imgHold22.ignoreContentAdaptWithSize(false);
        this._imgHold22.setScale9Enabled(true);
        this._imgHold22.setCapInsets(cc.rect(54, 18, 8, 4));
        this._imgHold22.setContentSize(cc.size(178.79, 56.555));
        this._imgHold22.setTouchEnabled(false);

        ///// # _txtHold22
        this._txtHold22 = new ck.Text();
        this._txtHold22.setName("_txtHold22");
        this._nodeHold22.addChild(this._txtHold22);
        this._txtHold22.setCascadeOpacityEnabled(true);
        this._txtHold22.setCascadeColorEnabled(true);
        this._txtHold22.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtHold22.setPosition(0, -16);
        let _txtHold22LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHold22);
        this._txtHold22.setTouchEnabled(false);
        this._txtHold22.ignoreContentAdaptWithSize(true);
        this._txtHold22.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHold22.setDefaultFontSize(25);
        this._txtHold22.setString(gm.localize.getText("TXT_HOLD"));
        this._txtHold22.setTextHorizontalAlignment(0);
        this._txtHold22.setTextVerticalAlignment(0);
        this._txtHold22.enableOutline(cc.color(0, 0, 0, 255), 1);
        this._txtHold22.enableShadow(cc.color(0, 0, 0, 255), cc.size(0, -1), 0);

        ///// # _nodeCard23
        this._nodeCard23 = new cc.Node();
        this._nodeCard23.setName("_nodeCard23");
        this._layoutCards2.addChild(this._nodeCard23);
        this._nodeCard23.setCascadeOpacityEnabled(true);
        this._nodeCard23.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeCard23, 0.5047, 0.5);
        let _nodeCard23LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCard23);
        _nodeCard23LayoutComponent.setPositionPercentXEnabled(true);
        _nodeCard23LayoutComponent.setPositionPercentX(0.5047);

        ///// # _imgCard23
        this._imgCard23 = new ccui.ImageView();
        this._imgCard23.setName("_imgCard23");
        this._nodeCard23.addChild(this._imgCard23);
        this._imgCard23.setCascadeOpacityEnabled(true);
        this._imgCard23.setCascadeColorEnabled(true);
        this._imgCard23.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCard23.setScale(0.3, 0.3);
        let _imgCard23LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard23);
        this._imgCard23.loadTexture("cards/33.png", 1);
        this._imgCard23.setUnifySizeEnabled(false);
        this._imgCard23.ignoreContentAdaptWithSize(false);
        this._imgCard23.setContentSize(cc.size(186, 256));
        this._imgCard23.setTouchEnabled(false);

        ///// # _nodeCard24
        this._nodeCard24 = new cc.Node();
        this._nodeCard24.setName("_nodeCard24");
        this._layoutCards2.addChild(this._nodeCard24);
        this._nodeCard24.setCascadeOpacityEnabled(true);
        this._nodeCard24.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeCard24, 0.6545, 0.5);
        let _nodeCard24LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCard24);
        _nodeCard24LayoutComponent.setPositionPercentXEnabled(true);
        _nodeCard24LayoutComponent.setPositionPercentX(0.6545);
        _nodeCard24LayoutComponent.setPositionPercentYEnabled(true);
        _nodeCard24LayoutComponent.setPositionPercentY(0.5);

        ///// # _imgCard24
        this._imgCard24 = new ccui.ImageView();
        this._imgCard24.setName("_imgCard24");
        this._nodeCard24.addChild(this._imgCard24);
        this._imgCard24.setCascadeOpacityEnabled(true);
        this._imgCard24.setCascadeColorEnabled(true);
        this._imgCard24.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCard24.setScale(0.3, 0.3);
        let _imgCard24LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard24);
        this._imgCard24.loadTexture("cards/43.png", 1);
        this._imgCard24.setUnifySizeEnabled(false);
        this._imgCard24.ignoreContentAdaptWithSize(false);
        this._imgCard24.setContentSize(cc.size(186, 256));
        this._imgCard24.setTouchEnabled(false);

        ///// # _nodeCard25
        this._nodeCard25 = new cc.Node();
        this._nodeCard25.setName("_nodeCard25");
        this._layoutCards2.addChild(this._nodeCard25);
        this._nodeCard25.setCascadeOpacityEnabled(true);
        this._nodeCard25.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeCard25, 0.8044, 0.5);
        let _nodeCard25LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCard25);
        _nodeCard25LayoutComponent.setPositionPercentXEnabled(true);
        _nodeCard25LayoutComponent.setPositionPercentX(0.8044);
        _nodeCard25LayoutComponent.setPositionPercentYEnabled(true);
        _nodeCard25LayoutComponent.setPositionPercentY(0.5);

        ///// # _imgCard25
        this._imgCard25 = new ccui.ImageView();
        this._imgCard25.setName("_imgCard25");
        this._nodeCard25.addChild(this._imgCard25);
        this._imgCard25.setCascadeOpacityEnabled(true);
        this._imgCard25.setCascadeColorEnabled(true);
        this._imgCard25.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCard25.setScale(0.3, 0.3);
        let _imgCard25LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard25);
        this._imgCard25.loadTexture("cards/49.png", 1);
        this._imgCard25.setUnifySizeEnabled(false);
        this._imgCard25.ignoreContentAdaptWithSize(false);
        this._imgCard25.setContentSize(cc.size(186, 256));
        this._imgCard25.setTouchEnabled(false);

        ///// # _imgHand2
        this._imgHand2 = new ccui.ImageView();
        this._imgHand2.setName("_imgHand2");
        this._layoutStep2.addChild(this._imgHand2);
        this._imgHand2.setCascadeOpacityEnabled(true);
        this._imgHand2.setCascadeColorEnabled(true);
        this._imgHand2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHand2, 0.3259, 0.9397);
        this._imgHand2.setScale(0.4, 0.4);
        this._imgHand2.setRotationX(169.3313);
        this._imgHand2.setRotationY(169.3371);
        this._imgHand2.setOpacity(0);
        let _imgHand2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHand2);
        this._imgHand2.loadTexture("icons/color/other/Hand_03.png", 1);
        this._imgHand2.setUnifySizeEnabled(false);
        this._imgHand2.ignoreContentAdaptWithSize(false);
        this._imgHand2.setContentSize(cc.size(169, 216));
        this._imgHand2.setTouchEnabled(false);

        ///// # _layoutStep3
        this._layoutStep3 = new ccui.Layout();
        this._layoutStep3.setName("_layoutStep3");
        this._layoutHelp.addChild(this._layoutStep3);
        this._layoutStep3.setCascadeOpacityEnabled(true);
        this._layoutStep3.setCascadeColorEnabled(true);
        this._layoutStep3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutStep3, 0.5, 0.1782);
        let _layoutStep3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutStep3);
        _layoutStep3LayoutComponent.setPositionPercentXEnabled(true);
        _layoutStep3LayoutComponent.setPositionPercentX(0.5);
        _layoutStep3LayoutComponent.setPositionPercentYEnabled(true);
        _layoutStep3LayoutComponent.setPositionPercentY(0.1782);
        _layoutStep3LayoutComponent.setPercentWidthEnabled(true);
        _layoutStep3LayoutComponent.setPercentWidth(0.9);
        this._layoutStep3.setTouchEnabled(false);
        this._layoutStep3.setUnifySizeEnabled(false);
        this._layoutStep3.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutStep3, 0.9);
        this._layoutStep3.setContentSize(cc.size(this._layoutStep3.width, 186));

        ///// # _txtStep3
        this._txtStep3 = new ck.CustomRichTextExtend(cc.size(400, 55));
        this._txtStep3.setName("_txtStep3");
        this._layoutStep3.addChild(this._txtStep3);
        this._txtStep3.setCascadeOpacityEnabled(true);
        this._txtStep3.setCascadeColorEnabled(true);
        this._txtStep3.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._txtStep3, 0.5, 0.1591);
        let _txtStep3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep3);
        _txtStep3LayoutComponent.setPositionPercentXEnabled(true);
        _txtStep3LayoutComponent.setPositionPercentX(0.5);
        _txtStep3LayoutComponent.setPositionPercentYEnabled(true);
        _txtStep3LayoutComponent.setPositionPercentY(0.1591);
        this._txtStep3.setTouchEnabled(false);
        this._txtStep3.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtStep3.setDefaultSize(22);
        this._txtStep3.setDefaultAlignHorizontal(2);
        this._txtStep3.setDefaultAlignVertical(4);
        this._txtStep3.setString(gm.localize.getText("TXT_POKER_TUTORIAL_3"));

        ///// # _btnDraw
        this._btnDraw = new ccui.Button();
        this._btnDraw.setName("_btnDraw");
        this._layoutStep3.addChild(this._btnDraw);
        this._btnDraw.setCascadeOpacityEnabled(true);
        this._btnDraw.setCascadeColorEnabled(true);
        this._btnDraw.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnDraw, 0.1396, 0.4563);
        let _btnDrawLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnDraw);
        _btnDrawLayoutComponent.setPositionPercentXEnabled(true);
        _btnDrawLayoutComponent.setPositionPercentX(0.1396);
        _btnDrawLayoutComponent.setPositionPercentYEnabled(true);
        _btnDrawLayoutComponent.setPositionPercentY(0.4563);
        this._btnDraw.loadTextureDisabled("buttons/rectangles/Yellow.png", 1);
        this._btnDraw.loadTexturePressed("buttons/rectangles/Yellow.png", 1);
        this._btnDraw.loadTextureNormal("buttons/rectangles/Yellow.png", 1);
        this._btnDraw.setUnifySizeEnabled(false);
        this._btnDraw.ignoreContentAdaptWithSize(false);
        this._btnDraw.setScale9Enabled(true);
        this._btnDraw.setCapInsets(cc.rect(15, 11, 176, 59));
        this._btnDraw.setContentSize(cc.size(100, 50));
        this._btnDraw.setTouchEnabled(true);

        ///// # _txtDraw
        this._txtDraw = new ck.Text();
        this._txtDraw.setName("_txtDraw");
        this._btnDraw.addChild(this._txtDraw);
        this._txtDraw.setCascadeOpacityEnabled(true);
        this._txtDraw.setCascadeColorEnabled(true);
        this._txtDraw.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDraw, 0.5, 0.6);
        let _txtDrawLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDraw);
        _txtDrawLayoutComponent.setPositionPercentXEnabled(true);
        _txtDrawLayoutComponent.setPositionPercentX(0.5);
        _txtDrawLayoutComponent.setPositionPercentYEnabled(true);
        _txtDrawLayoutComponent.setPositionPercentY(0.6);
        this._txtDraw.setTouchEnabled(false);
        this._txtDraw.ignoreContentAdaptWithSize(true);
        this._txtDraw.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDraw.setDefaultFontSize(25);
        this._txtDraw.setString(gm.localize.getText("TXT_DRAW"));
        this._txtDraw.setTextHorizontalAlignment(0);
        this._txtDraw.setTextVerticalAlignment(0);
        this._txtDraw.enableOutline(cc.color(194, 80, 62, 255), 1);
        this._txtDraw.enableShadow(cc.color(194, 80, 62, 255), cc.size(0, -2), 0);

        ///// # _imgHand3
        this._imgHand3 = new ccui.ImageView();
        this._imgHand3.setName("_imgHand3");
        this._layoutStep3.addChild(this._imgHand3);
        this._imgHand3.setCascadeOpacityEnabled(true);
        this._imgHand3.setCascadeColorEnabled(true);
        this._imgHand3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHand3, 0.2239, 0.7872);
        this._imgHand3.setScale(0.4, 0.4);
        this._imgHand3.setRotationX(225.2689);
        this._imgHand3.setRotationY(225.272);
        this._imgHand3.setOpacity(0);
        let _imgHand3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHand3);
        this._imgHand3.loadTexture("icons/color/other/Hand_03.png", 1);
        this._imgHand3.setUnifySizeEnabled(false);
        this._imgHand3.ignoreContentAdaptWithSize(false);
        this._imgHand3.setContentSize(cc.size(151.173, 193.2152));
        this._imgHand3.setTouchEnabled(false);

        ///// # _layoutCards3
        this._layoutCards3 = new ccui.Layout();
        this._layoutCards3.setName("_layoutCards3");
        this._layoutStep3.addChild(this._layoutCards3);
        this._layoutCards3.setCascadeOpacityEnabled(true);
        this._layoutCards3.setCascadeColorEnabled(true);
        this._layoutCards3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCards3, 0.6372, 0.5751);
        let _layoutCards3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCards3);
        _layoutCards3LayoutComponent.setPositionPercentXEnabled(true);
        _layoutCards3LayoutComponent.setPositionPercentX(0.6372);
        _layoutCards3LayoutComponent.setPositionPercentYEnabled(true);
        _layoutCards3LayoutComponent.setPositionPercentY(0.5751);
        this._layoutCards3.setTouchEnabled(false);
        this._layoutCards3.setUnifySizeEnabled(false);
        this._layoutCards3.ignoreContentAdaptWithSize(false);
        this._layoutCards3.setContentSize(cc.size(304.33, 90));

        ///// # _nodeCard31
        this._nodeCard31 = new cc.Node();
        this._nodeCard31.setName("_nodeCard31");
        this._layoutCards3.addChild(this._nodeCard31);
        this._nodeCard31.setCascadeOpacityEnabled(true);
        this._nodeCard31.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeCard31, 0.1232, 0.5);
        let _nodeCard31LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCard31);

        ///// # _imgCard31
        this._imgCard31 = new ccui.ImageView();
        this._imgCard31.setName("_imgCard31");
        this._nodeCard31.addChild(this._imgCard31);
        this._imgCard31.setCascadeOpacityEnabled(true);
        this._imgCard31.setCascadeColorEnabled(true);
        this._imgCard31.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCard31.setScale(0.3, 0.3);
        let _imgCard31LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard31);
        this._imgCard31.loadTexture("cards/02.png", 1);
        this._imgCard31.setUnifySizeEnabled(false);
        this._imgCard31.ignoreContentAdaptWithSize(false);
        this._imgCard31.setContentSize(cc.size(186, 256));
        this._imgCard31.setTouchEnabled(false);

        ///// # _imgCard311
        this._imgCard311 = new ccui.ImageView();
        this._imgCard311.setName("_imgCard311");
        this._nodeCard31.addChild(this._imgCard311);
        this._imgCard311.setCascadeOpacityEnabled(true);
        this._imgCard311.setCascadeColorEnabled(true);
        this._imgCard311.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCard311.setScale(0.3, 0.3);
        this._imgCard311.setOpacity(0);
        let _imgCard311LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard311);
        this._imgCard311.loadTexture("cards/45.png", 1);
        this._imgCard311.setUnifySizeEnabled(false);
        this._imgCard311.ignoreContentAdaptWithSize(false);
        this._imgCard311.setContentSize(cc.size(186, 256));
        this._imgCard311.setTouchEnabled(false);

        ///// # _nodeCard32
        this._nodeCard32 = new cc.Node();
        this._nodeCard32.setName("_nodeCard32");
        this._layoutCards3.addChild(this._nodeCard32);
        this._nodeCard32.setCascadeOpacityEnabled(true);
        this._nodeCard32.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeCard32, 0.3123, 0.3333);
        let _nodeCard32LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCard32);

        ///// # _imgCard32
        this._imgCard32 = new ccui.ImageView();
        this._imgCard32.setName("_imgCard32");
        this._nodeCard32.addChild(this._imgCard32);
        this._imgCard32.setCascadeOpacityEnabled(true);
        this._imgCard32.setCascadeColorEnabled(true);
        this._imgCard32.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCard32.setScale(0.3, 0.3);
        let _imgCard32LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard32);
        this._imgCard32.loadTexture("cards/12.png", 1);
        this._imgCard32.setUnifySizeEnabled(false);
        this._imgCard32.ignoreContentAdaptWithSize(false);
        this._imgCard32.setContentSize(cc.size(186, 256));
        this._imgCard32.setTouchEnabled(false);

        ///// # _nodeHold32
        this._nodeHold32 = new cc.Node();
        this._nodeHold32.setName("_nodeHold32");
        this._nodeCard32.addChild(this._nodeHold32);
        this._nodeHold32.setCascadeOpacityEnabled(true);
        this._nodeHold32.setCascadeColorEnabled(true);
        let _nodeHold32LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeHold32);

        ///// # _imgHold32
        this._imgHold32 = new ccui.ImageView();
        this._imgHold32.setName("_imgHold32");
        this._nodeHold32.addChild(this._imgHold32);
        this._imgHold32.setCascadeOpacityEnabled(true);
        this._imgHold32.setCascadeColorEnabled(true);
        this._imgHold32.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgHold32.setPosition(0, -23.2299);
        this._imgHold32.setScale(0.3, 0.3);
        let _imgHold32LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHold32);
        this._imgHold32.loadTexture("ui/HoldRibbon.png", 1);
        this._imgHold32.setUnifySizeEnabled(false);
        this._imgHold32.ignoreContentAdaptWithSize(false);
        this._imgHold32.setScale9Enabled(true);
        this._imgHold32.setCapInsets(cc.rect(54, 18, 8, 4));
        this._imgHold32.setContentSize(cc.size(178.79, 56.555));
        this._imgHold32.setTouchEnabled(false);

        ///// # _txtHold32
        this._txtHold32 = new ck.Text();
        this._txtHold32.setName("_txtHold32");
        this._nodeHold32.addChild(this._txtHold32);
        this._txtHold32.setCascadeOpacityEnabled(true);
        this._txtHold32.setCascadeColorEnabled(true);
        this._txtHold32.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtHold32.setPosition(0, -16);
        let _txtHold32LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHold32);
        this._txtHold32.setTouchEnabled(false);
        this._txtHold32.ignoreContentAdaptWithSize(true);
        this._txtHold32.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHold32.setDefaultFontSize(25);
        this._txtHold32.setString(gm.localize.getText("TXT_HOLD"));
        this._txtHold32.setTextHorizontalAlignment(0);
        this._txtHold32.setTextVerticalAlignment(0);
        this._txtHold32.enableOutline(cc.color(0, 0, 0, 255), 1);
        this._txtHold32.enableShadow(cc.color(0, 0, 0, 255), cc.size(0, -1), 0);

        ///// # _nodeCard33
        this._nodeCard33 = new cc.Node();
        this._nodeCard33.setName("_nodeCard33");
        this._layoutCards3.addChild(this._nodeCard33);
        this._nodeCard33.setCascadeOpacityEnabled(true);
        this._nodeCard33.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeCard33, 0.5014, 0.5);
        let _nodeCard33LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCard33);

        ///// # _imgCard33
        this._imgCard33 = new ccui.ImageView();
        this._imgCard33.setName("_imgCard33");
        this._nodeCard33.addChild(this._imgCard33);
        this._imgCard33.setCascadeOpacityEnabled(true);
        this._imgCard33.setCascadeColorEnabled(true);
        this._imgCard33.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCard33.setScale(0.3, 0.3);
        let _imgCard33LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard33);
        this._imgCard33.loadTexture("cards/33.png", 1);
        this._imgCard33.setUnifySizeEnabled(false);
        this._imgCard33.ignoreContentAdaptWithSize(false);
        this._imgCard33.setContentSize(cc.size(186, 256));
        this._imgCard33.setTouchEnabled(false);

        ///// # _imgCard331
        this._imgCard331 = new ccui.ImageView();
        this._imgCard331.setName("_imgCard331");
        this._nodeCard33.addChild(this._imgCard331);
        this._imgCard331.setCascadeOpacityEnabled(true);
        this._imgCard331.setCascadeColorEnabled(true);
        this._imgCard331.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCard331.setScale(0.3, 0.3);
        this._imgCard331.setOpacity(0);
        let _imgCard331LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard331);
        this._imgCard331.loadTexture("cards/51.png", 1);
        this._imgCard331.setUnifySizeEnabled(false);
        this._imgCard331.ignoreContentAdaptWithSize(false);
        this._imgCard331.setContentSize(cc.size(186, 256));
        this._imgCard331.setTouchEnabled(false);

        ///// # _nodeCard34
        this._nodeCard34 = new cc.Node();
        this._nodeCard34.setName("_nodeCard34");
        this._layoutCards3.addChild(this._nodeCard34);
        this._nodeCard34.setCascadeOpacityEnabled(true);
        this._nodeCard34.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeCard34, 0.6906, 0.5);
        let _nodeCard34LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCard34);

        ///// # _imgCard34
        this._imgCard34 = new ccui.ImageView();
        this._imgCard34.setName("_imgCard34");
        this._nodeCard34.addChild(this._imgCard34);
        this._imgCard34.setCascadeOpacityEnabled(true);
        this._imgCard34.setCascadeColorEnabled(true);
        this._imgCard34.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCard34.setScale(0.3, 0.3);
        let _imgCard34LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard34);
        this._imgCard34.loadTexture("cards/43.png", 1);
        this._imgCard34.setUnifySizeEnabled(false);
        this._imgCard34.ignoreContentAdaptWithSize(false);
        this._imgCard34.setContentSize(cc.size(186, 256));
        this._imgCard34.setTouchEnabled(false);

        ///// # _imgCard341
        this._imgCard341 = new ccui.ImageView();
        this._imgCard341.setName("_imgCard341");
        this._nodeCard34.addChild(this._imgCard341);
        this._imgCard341.setCascadeOpacityEnabled(true);
        this._imgCard341.setCascadeColorEnabled(true);
        this._imgCard341.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCard341.setScale(0.3, 0.3);
        this._imgCard341.setOpacity(0);
        let _imgCard341LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard341);
        this._imgCard341.loadTexture("cards/28.png", 1);
        this._imgCard341.setUnifySizeEnabled(false);
        this._imgCard341.ignoreContentAdaptWithSize(false);
        this._imgCard341.setContentSize(cc.size(186, 256));
        this._imgCard341.setTouchEnabled(false);

        ///// # _nodeCard35
        this._nodeCard35 = new cc.Node();
        this._nodeCard35.setName("_nodeCard35");
        this._layoutCards3.addChild(this._nodeCard35);
        this._nodeCard35.setCascadeOpacityEnabled(true);
        this._nodeCard35.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeCard35, 0.8797, 0.5);
        let _nodeCard35LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCard35);

        ///// # _imgCard35
        this._imgCard35 = new ccui.ImageView();
        this._imgCard35.setName("_imgCard35");
        this._nodeCard35.addChild(this._imgCard35);
        this._imgCard35.setCascadeOpacityEnabled(true);
        this._imgCard35.setCascadeColorEnabled(true);
        this._imgCard35.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCard35.setScale(0.3, 0.3);
        let _imgCard35LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard35);
        this._imgCard35.loadTexture("cards/49.png", 1);
        this._imgCard35.setUnifySizeEnabled(false);
        this._imgCard35.ignoreContentAdaptWithSize(false);
        this._imgCard35.setContentSize(cc.size(186, 256));
        this._imgCard35.setTouchEnabled(false);

        ///// # _imgCard351
        this._imgCard351 = new ccui.ImageView();
        this._imgCard351.setName("_imgCard351");
        this._nodeCard35.addChild(this._imgCard351);
        this._imgCard351.setCascadeOpacityEnabled(true);
        this._imgCard351.setCascadeColorEnabled(true);
        this._imgCard351.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCard351.setScale(0.3, 0.3);
        this._imgCard351.setOpacity(0);
        let _imgCard351LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCard351);
        this._imgCard351.loadTexture("cards/03.png", 1);
        this._imgCard351.setUnifySizeEnabled(false);
        this._imgCard351.ignoreContentAdaptWithSize(false);
        this._imgCard351.setContentSize(cc.size(186, 256));
        this._imgCard351.setTouchEnabled(false);

        ///// # _txtReward
        this._txtReward = new ck.Text();
        this._txtReward.setName("_txtReward");
        this._layoutStep3.addChild(this._txtReward);
        this._txtReward.setCascadeOpacityEnabled(true);
        this._txtReward.setCascadeColorEnabled(true);
        this._txtReward.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtReward, 0.6296, 0.269);
        this._txtReward.setOpacity(0);
        this._txtReward.setTextColor(cc.color(255, 255, 0, 255));
        let _txtRewardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtReward);
        _txtRewardLayoutComponent.setPositionPercentXEnabled(true);
        _txtRewardLayoutComponent.setPositionPercentX(0.6296);
        _txtRewardLayoutComponent.setPositionPercentYEnabled(true);
        _txtRewardLayoutComponent.setPositionPercentY(0.269);
        this._txtReward.setTouchEnabled(false);
        this._txtReward.ignoreContentAdaptWithSize(true);
        this._txtReward.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtReward.setDefaultFontSize(20);
        this._txtReward.setString(gm.localize.getText("TXT_JACKS_OR_BETTER"));
        this._txtReward.setTextHorizontalAlignment(0);
        this._txtReward.setTextVerticalAlignment(0);

    },


    playCCSAnimGuide: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimGuide();
    
        let _btnDealAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(44 / (23 * speed), 342.7353, 75),
                    cc.moveTo(1 / (23 * speed), 342.7353, 70),
                    cc.moveTo(1 / (23 * speed), 342.7353, 75),
                    cc.moveTo(14 / (23 * speed), 342.7353, 75)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._btnDeal.setPosition(342.7353, 75);
            }.bind(this))
        );
        if (repeat <= 0) {
            _btnDealAction = _btnDealAction.repeatForever();
        } else _btnDealAction = cc.sequence(
            cc.delayTime(delay),
            _btnDealAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._btnDeal.runAction(_btnDealAction);
    
        let _txtLetBetAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(11 / (23 * speed), 255),
                    cc.fadeTo(4 / (23 * speed), 0),
                    cc.fadeTo(43 / (23 * speed), 0),
                    cc.fadeTo(2 / (23 * speed), 255)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._txtLetBet.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _txtLetBetAction = _txtLetBetAction.repeatForever();
        } else _txtLetBetAction = cc.sequence(
            cc.delayTime(delay),
            _txtLetBetAction.repeat(repeat)
        )
        
        this._txtLetBet.runAction(_txtLetBetAction);
    
        let _nodeCoinAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(11 / (23 * speed), 0),
                    cc.fadeTo(4 / (23 * speed), 255),
                    cc.fadeTo(43 / (23 * speed), 255),
                    cc.fadeTo(2 / (23 * speed), 0)
                ),
                cc.sequence(
                    cc.moveTo(11 / (23 * speed), 119.02, 60),
                    cc.moveTo(4 / (23 * speed), 119.0187, 76.53),
                    cc.moveTo(45 / (23 * speed), 119.0187, 76.53)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._nodeCoin.setOpacity(0);
                this._nodeCoin.setPosition(119.02, 60);
            }.bind(this))
        );
        if (repeat <= 0) {
            _nodeCoinAction = _nodeCoinAction.repeatForever();
        } else _nodeCoinAction = cc.sequence(
            cc.delayTime(delay),
            _nodeCoinAction.repeat(repeat)
        )
        
        this._nodeCoin.runAction(_nodeCoinAction);
    
        let _imgHand1Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(15 / (23 * speed), 158.5661, 140.0195),
                    cc.moveTo(15 / (23 * speed), 167.6558, 152.1387),
                    cc.moveTo(5 / (23 * speed), 266.3218, 131.2881),
                    cc.moveTo(11 / (23 * speed), 275.4768, 118.574),
                    cc.moveTo(14 / (23 * speed), 266.3218, 131.2881)
                ),
                cc.sequence(
                    cc.rotateBy(30 / (23 * speed), 0, 0),
                    cc.rotateBy(5 / (23 * speed), -75.87819999999999, -75.8844),
                    cc.rotateBy(25 / (23 * speed), 0, 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgHand1.setPosition(167.6558, 152.1387);
                this._imgHand1.setRotation(219.4787);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgHand1Action = _imgHand1Action.repeatForever();
        } else _imgHand1Action = cc.sequence(
            cc.delayTime(delay),
            _imgHand1Action.repeat(repeat)
        )
        
        this._imgHand1.runAction(_imgHand1Action);
    
        let _nodeHold22Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(13 / (23 * speed), 0),
                    cc.fadeTo(4 / (23 * speed), 255),
                    cc.fadeTo(28 / (23 * speed), 255),
                    cc.fadeTo(4 / (23 * speed), 0),
                    cc.fadeTo(11 / (23 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._nodeHold22.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _nodeHold22Action = _nodeHold22Action.repeatForever();
        } else _nodeHold22Action = cc.sequence(
            cc.delayTime(delay),
            _nodeHold22Action.repeat(repeat)
        )
        
        this._nodeHold22.runAction(_nodeHold22Action);
    
        let _nodeCard22Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(13 / (23 * speed), 152.37, 45),
                    cc.moveTo(4 / (23 * speed), 152.37, 30),
                    cc.moveTo(28 / (23 * speed), 152.37, 30),
                    cc.moveTo(4 / (23 * speed), 152.37, 45),
                    cc.moveTo(11 / (23 * speed), 152.3722, 45)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._nodeCard22.setPosition(152.3724, 45);
            }.bind(this))
        );
        if (repeat <= 0) {
            _nodeCard22Action = _nodeCard22Action.repeatForever();
        } else _nodeCard22Action = cc.sequence(
            cc.delayTime(delay),
            _nodeCard22Action.repeat(repeat)
        )
        
        this._nodeCard22.runAction(_nodeCard22Action);
    
        let _imgHand2Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(15 / (23 * speed), 150.7578, 116.4303),
                    cc.moveTo(5 / (23 * speed), 150.7578, 116.4303),
                    cc.moveTo(10 / (23 * speed), 149.5892, 140.9503),
                    cc.moveTo(15 / (23 * speed), 150.7578, 116.4303),
                    cc.moveTo(5 / (23 * speed), 150.7578, 116.4303),
                    cc.moveTo(10 / (23 * speed), 149.5892, 140.9503)
                ),
                cc.sequence(
                    cc.fadeTo(5 / (23 * speed), 255),
                    cc.fadeTo(15 / (23 * speed), 255),
                    cc.fadeTo(1 / (23 * speed), 0),
                    cc.fadeTo(9 / (23 * speed), 0),
                    cc.fadeTo(5 / (23 * speed), 255),
                    cc.fadeTo(15 / (23 * speed), 255),
                    cc.fadeTo(1 / (23 * speed), 0),
                    cc.fadeTo(9 / (23 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgHand2.setPosition(149.5892, 140.9503);
                this._imgHand2.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgHand2Action = _imgHand2Action.repeatForever();
        } else _imgHand2Action = cc.sequence(
            cc.delayTime(delay),
            _imgHand2Action.repeat(repeat)
        )
        
        this._imgHand2.runAction(_imgHand2Action);
    
        let _btnDrawAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(10 / (23 * speed), 64.0772, 84.8642),
                    cc.moveTo(2 / (23 * speed), 64.0772, 81.2776),
                    cc.moveTo(2 / (23 * speed), 64.0772, 84.8642),
                    cc.moveTo(46 / (23 * speed), 64.0772, 84.8642)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._btnDraw.setPosition(64.0772, 84.8642);
            }.bind(this))
        );
        if (repeat <= 0) {
            _btnDrawAction = _btnDrawAction.repeatForever();
        } else _btnDrawAction = cc.sequence(
            cc.delayTime(delay),
            _btnDrawAction.repeat(repeat)
        )
        
        this._btnDraw.runAction(_btnDrawAction);
    
        let _imgHand3Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(10 / (23 * speed), 94.7509, 127.4265),
                    cc.moveTo(50 / (23 * speed), 102.7517, 146.427)
                ),
                cc.sequence(
                    cc.fadeTo(5 / (23 * speed), 255),
                    cc.fadeTo(5 / (23 * speed), 255),
                    cc.fadeTo(3 / (23 * speed), 255),
                    cc.fadeTo(7 / (23 * speed), 0),
                    cc.fadeTo(40 / (23 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgHand3.setPosition(102.7517, 146.427);
                this._imgHand3.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgHand3Action = _imgHand3Action.repeatForever();
        } else _imgHand3Action = cc.sequence(
            cc.delayTime(delay),
            _imgHand3Action.repeat(repeat)
        )
        
        this._imgHand3.runAction(_imgHand3Action);
    
        let _imgCard31Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(20 / (23 * speed), 255),
                    cc.fadeTo(1 / (23 * speed), 0),
                    cc.fadeTo(39 / (23 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgCard31.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgCard31Action = _imgCard31Action.repeatForever();
        } else _imgCard31Action = cc.sequence(
            cc.delayTime(delay),
            _imgCard31Action.repeat(repeat)
        )
        
        this._imgCard31.runAction(_imgCard31Action);
    
        let _imgCard311Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(20 / (23 * speed), 0),
                    cc.fadeTo(1 / (23 * speed), 255),
                    cc.fadeTo(39 / (23 * speed), 255)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgCard311.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgCard311Action = _imgCard311Action.repeatForever();
        } else _imgCard311Action = cc.sequence(
            cc.delayTime(delay),
            _imgCard311Action.repeat(repeat)
        )
        
        this._imgCard311.runAction(_imgCard311Action);
    
        let _nodeCard31Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(15 / (23 * speed), 37.486, 45),
                    cc.moveTo(5 / (23 * speed), 37.486, 30),
                    cc.moveTo(5 / (23 * speed), 37.486, 30),
                    cc.moveTo(5 / (23 * speed), 37.486, 45),
                    cc.moveTo(30 / (23 * speed), 37.486, 45)
                ),
                cc.sequence(
                    cc.fadeTo(15 / (23 * speed), 255),
                    cc.fadeTo(5 / (23 * speed), 0),
                    cc.fadeTo(5 / (23 * speed), 0),
                    cc.fadeTo(5 / (23 * speed), 255),
                    cc.fadeTo(30 / (23 * speed), 255)
                ),
                cc.sequence(
                    cc.tintTo(40 / (23 * speed), cc.color.WHITE),
                    cc.tintTo(5 / (23 * speed), cc.color(119, 119, 119, 255)),
                    cc.tintTo(15 / (23 * speed), cc.color(119, 119, 119, 255))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._nodeCard31.setPosition(37.486, 45);
                this._nodeCard31.setOpacity(255);
                this._nodeCard31.setColor(cc.color.WHITE);
            }.bind(this))
        );
        if (repeat <= 0) {
            _nodeCard31Action = _nodeCard31Action.repeatForever();
        } else _nodeCard31Action = cc.sequence(
            cc.delayTime(delay),
            _nodeCard31Action.repeat(repeat)
        )
        
        this._nodeCard31.runAction(_nodeCard31Action);
    
        let _nodeHold32Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(40 / (23 * speed), 255),
                    cc.fadeTo(1 / (23 * speed), 0),
                    cc.fadeTo(19 / (23 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._nodeHold32.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _nodeHold32Action = _nodeHold32Action.repeatForever();
        } else _nodeHold32Action = cc.sequence(
            cc.delayTime(delay),
            _nodeHold32Action.repeat(repeat)
        )
        
        this._nodeHold32.runAction(_nodeHold32Action);
    
        let _nodeCard32Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(40 / (23 * speed), 95.0438, 30),
                    cc.moveTo(10 / (23 * speed), 95.0438, 65),
                    cc.moveTo(10 / (23 * speed), 95.0438, 65)
                ),
                cc.delayTime(60 / (23 * speed)),
                cc.delayTime(60 / (23 * speed))
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._nodeCard32.setPosition(95.0438, 30);
                this._nodeCard32.setScale(1, 1);
                this._nodeCard32.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _nodeCard32Action = _nodeCard32Action.repeatForever();
        } else _nodeCard32Action = cc.sequence(
            cc.delayTime(delay),
            _nodeCard32Action.repeat(repeat)
        )
        
        this._nodeCard32.runAction(_nodeCard32Action);
    
        let _imgCard33Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(20 / (23 * speed), 255),
                    cc.fadeTo(1 / (23 * speed), 0),
                    cc.fadeTo(39 / (23 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgCard33.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgCard33Action = _imgCard33Action.repeatForever();
        } else _imgCard33Action = cc.sequence(
            cc.delayTime(delay),
            _imgCard33Action.repeat(repeat)
        )
        
        this._imgCard33.runAction(_imgCard33Action);
    
        let _imgCard331Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(20 / (23 * speed), 0),
                    cc.fadeTo(1 / (23 * speed), 255),
                    cc.fadeTo(39 / (23 * speed), 255)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgCard331.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgCard331Action = _imgCard331Action.repeatForever();
        } else _imgCard331Action = cc.sequence(
            cc.delayTime(delay),
            _imgCard331Action.repeat(repeat)
        )
        
        this._imgCard331.runAction(_imgCard331Action);
    
        let _nodeCard33Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(15 / (23 * speed), 152.6016, 45),
                    cc.moveTo(5 / (23 * speed), 152.6016, 30),
                    cc.moveTo(5 / (23 * speed), 152.6016, 30),
                    cc.moveTo(5 / (23 * speed), 152.6016, 45),
                    cc.moveTo(10 / (23 * speed), 152.6016, 45),
                    cc.moveTo(10 / (23 * speed), 152.6016, 65),
                    cc.moveTo(10 / (23 * speed), 152.6016, 65)
                ),
                cc.delayTime(60 / (23 * speed)),
                cc.delayTime(60 / (23 * speed)),
                cc.sequence(
                    cc.fadeTo(15 / (23 * speed), 255),
                    cc.fadeTo(5 / (23 * speed), 0),
                    cc.fadeTo(5 / (23 * speed), 0),
                    cc.fadeTo(5 / (23 * speed), 255),
                    cc.fadeTo(30 / (23 * speed), 255)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._nodeCard33.setPosition(152.6016, 45);
                this._nodeCard33.setScale(1, 1);
                this._nodeCard33.setRotation(0);
                this._nodeCard33.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _nodeCard33Action = _nodeCard33Action.repeatForever();
        } else _nodeCard33Action = cc.sequence(
            cc.delayTime(delay),
            _nodeCard33Action.repeat(repeat)
        )
        
        this._nodeCard33.runAction(_nodeCard33Action);
    
        let _imgCard34Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(20 / (23 * speed), 255),
                    cc.fadeTo(1 / (23 * speed), 0),
                    cc.fadeTo(39 / (23 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgCard34.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgCard34Action = _imgCard34Action.repeatForever();
        } else _imgCard34Action = cc.sequence(
            cc.delayTime(delay),
            _imgCard34Action.repeat(repeat)
        )
        
        this._imgCard34.runAction(_imgCard34Action);
    
        let _imgCard341Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(20 / (23 * speed), 0),
                    cc.fadeTo(1 / (23 * speed), 255),
                    cc.fadeTo(39 / (23 * speed), 255)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgCard341.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgCard341Action = _imgCard341Action.repeatForever();
        } else _imgCard341Action = cc.sequence(
            cc.delayTime(delay),
            _imgCard341Action.repeat(repeat)
        )
        
        this._imgCard341.runAction(_imgCard341Action);
    
        let _nodeCard34Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(15 / (23 * speed), 210.1594, 45),
                    cc.moveTo(5 / (23 * speed), 210.1594, 30),
                    cc.moveTo(5 / (23 * speed), 210.1594, 30),
                    cc.moveTo(5 / (23 * speed), 210.1594, 45),
                    cc.moveTo(30 / (23 * speed), 210.1594, 45)
                ),
                cc.sequence(
                    cc.fadeTo(15 / (23 * speed), 255),
                    cc.fadeTo(5 / (23 * speed), 0),
                    cc.fadeTo(5 / (23 * speed), 0),
                    cc.fadeTo(5 / (23 * speed), 255),
                    cc.fadeTo(30 / (23 * speed), 255)
                ),
                cc.sequence(
                    cc.tintTo(40 / (23 * speed), cc.color.WHITE),
                    cc.tintTo(5 / (23 * speed), cc.color(119, 119, 119, 255)),
                    cc.tintTo(15 / (23 * speed), cc.color(119, 119, 119, 255))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._nodeCard34.setPosition(210.1594, 45);
                this._nodeCard34.setOpacity(255);
                this._nodeCard34.setColor(cc.color.WHITE);
            }.bind(this))
        );
        if (repeat <= 0) {
            _nodeCard34Action = _nodeCard34Action.repeatForever();
        } else _nodeCard34Action = cc.sequence(
            cc.delayTime(delay),
            _nodeCard34Action.repeat(repeat)
        )
        
        this._nodeCard34.runAction(_nodeCard34Action);
    
        let _imgCard35Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(20 / (23 * speed), 255),
                    cc.fadeTo(1 / (23 * speed), 0),
                    cc.fadeTo(39 / (23 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgCard35.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgCard35Action = _imgCard35Action.repeatForever();
        } else _imgCard35Action = cc.sequence(
            cc.delayTime(delay),
            _imgCard35Action.repeat(repeat)
        )
        
        this._imgCard35.runAction(_imgCard35Action);
    
        let _imgCard351Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(20 / (23 * speed), 0),
                    cc.fadeTo(1 / (23 * speed), 255),
                    cc.fadeTo(39 / (23 * speed), 255)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgCard351.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgCard351Action = _imgCard351Action.repeatForever();
        } else _imgCard351Action = cc.sequence(
            cc.delayTime(delay),
            _imgCard351Action.repeat(repeat)
        )
        
        this._imgCard351.runAction(_imgCard351Action);
    
        let _nodeCard35Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(15 / (23 * speed), 267.7173, 45),
                    cc.moveTo(5 / (23 * speed), 267.7173, 30),
                    cc.moveTo(5 / (23 * speed), 267.7173, 30),
                    cc.moveTo(5 / (23 * speed), 267.7173, 45),
                    cc.moveTo(30 / (23 * speed), 267.7173, 45)
                ),
                cc.sequence(
                    cc.fadeTo(15 / (23 * speed), 255),
                    cc.fadeTo(5 / (23 * speed), 0),
                    cc.fadeTo(5 / (23 * speed), 0),
                    cc.fadeTo(5 / (23 * speed), 255),
                    cc.fadeTo(30 / (23 * speed), 255)
                ),
                cc.sequence(
                    cc.tintTo(40 / (23 * speed), cc.color.WHITE),
                    cc.tintTo(5 / (23 * speed), cc.color(119, 119, 119, 255)),
                    cc.tintTo(15 / (23 * speed), cc.color(119, 119, 119, 255))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._nodeCard35.setPosition(267.7173, 45);
                this._nodeCard35.setOpacity(255);
                this._nodeCard35.setColor(cc.color.WHITE);
            }.bind(this))
        );
        if (repeat <= 0) {
            _nodeCard35Action = _nodeCard35Action.repeatForever();
        } else _nodeCard35Action = cc.sequence(
            cc.delayTime(delay),
            _nodeCard35Action.repeat(repeat)
        )
        
        this._nodeCard35.runAction(_nodeCard35Action);
    
        let _txtRewardAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(40 / (23 * speed), 0),
                    cc.fadeTo(2 / (23 * speed), 255),
                    cc.fadeTo(18 / (23 * speed), 255)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._txtReward.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _txtRewardAction = _txtRewardAction.repeatForever();
        } else _txtRewardAction = cc.sequence(
            cc.delayTime(delay),
            _txtRewardAction.repeat(repeat)
        )
        
        this._txtReward.runAction(_txtRewardAction);
    },

    resetCCSAnimGuide: function () {
        this._btnDeal.stopAllActions();
        this._btnDeal.setPosition(342.7353, 75);
    
        this._txtLetBet.stopAllActions();
        this._txtLetBet.setOpacity(255);
    
        this._nodeCoin.stopAllActions();
        this._nodeCoin.setOpacity(0);
        this._nodeCoin.setPosition(119.02, 60);
    
        this._imgHand1.stopAllActions();
        this._imgHand1.setPosition(167.6558, 152.1387);
        this._imgHand1.setRotation(219.4787);
    
        this._nodeHold22.stopAllActions();
        this._nodeHold22.setOpacity(0);
    
        this._nodeCard22.stopAllActions();
        this._nodeCard22.setPosition(152.3724, 45);
    
        this._imgHand2.stopAllActions();
        this._imgHand2.setPosition(149.5892, 140.9503);
        this._imgHand2.setOpacity(0);
    
        this._btnDraw.stopAllActions();
        this._btnDraw.setPosition(64.0772, 84.8642);
    
        this._imgHand3.stopAllActions();
        this._imgHand3.setPosition(102.7517, 146.427);
        this._imgHand3.setOpacity(0);
    
        this._imgCard31.stopAllActions();
        this._imgCard31.setOpacity(255);
    
        this._imgCard311.stopAllActions();
        this._imgCard311.setOpacity(0);
    
        this._nodeCard31.stopAllActions();
        this._nodeCard31.setPosition(37.486, 45);
        this._nodeCard31.setOpacity(255);
        this._nodeCard31.setColor(cc.color.WHITE);
    
        this._nodeHold32.stopAllActions();
        this._nodeHold32.setOpacity(255);
    
        this._nodeCard32.stopAllActions();
        this._nodeCard32.setPosition(95.0438, 30);
        this._nodeCard32.setScale(1, 1);
        this._nodeCard32.setRotation(0);
    
        this._imgCard33.stopAllActions();
        this._imgCard33.setOpacity(255);
    
        this._imgCard331.stopAllActions();
        this._imgCard331.setOpacity(0);
    
        this._nodeCard33.stopAllActions();
        this._nodeCard33.setPosition(152.6016, 45);
        this._nodeCard33.setScale(1, 1);
        this._nodeCard33.setRotation(0);
        this._nodeCard33.setOpacity(255);
    
        this._imgCard34.stopAllActions();
        this._imgCard34.setOpacity(255);
    
        this._imgCard341.stopAllActions();
        this._imgCard341.setOpacity(0);
    
        this._nodeCard34.stopAllActions();
        this._nodeCard34.setPosition(210.1594, 45);
        this._nodeCard34.setOpacity(255);
        this._nodeCard34.setColor(cc.color.WHITE);
    
        this._imgCard35.stopAllActions();
        this._imgCard35.setOpacity(255);
    
        this._imgCard351.stopAllActions();
        this._imgCard351.setOpacity(0);
    
        this._nodeCard35.stopAllActions();
        this._nodeCard35.setPosition(267.7173, 45);
        this._nodeCard35.setOpacity(255);
        this._nodeCard35.setColor(cc.color.WHITE);
    
        this._txtReward.stopAllActions();
        this._txtReward.setOpacity(0);
    }
});

/**
 * Create PokerRuleTab
 * @returns {_ccs.PokerRuleTab}
 */
_ccs.PokerRuleTab.create = function () {
    return new _ccs.PokerRuleTab();
};
