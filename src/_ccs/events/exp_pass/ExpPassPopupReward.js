/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ExpPassPopupReward
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.ExpPassPopupReward = cc.Layer.extend({

    /** @type {ccui.ImageView} */
    imageBgr: null,
    /** @type {ccui.Layout} */
    panelTouch: null,
    /** @type {ccui.ImageView} */
    imgRibbon: null,
    /** @type {ccui.ImageView} */
    imgStar: null,
    /** @type {ccui.ImageView} */
    imgStar1: null,
    /** @type {ccui.ImageView} */
    imgStar2: null,
    /** @type {ck.Text} */
    lbLevel: null,
    /** @type {ccui.ImageView} */
    imgTitle: null,
    /** @type {ccui.Button} */
    _btnClose: null,
    /** @type {ccui.Button} */
    _btnBuyTicket: null,
    /** @type {ck.Text} */
    txtPriceTicket: null,
    /** @type {ck.Text} */
    lbTips: null,
    /** @type {ck.Text} */
    txtTips1: null,
    /** @type {ccui.ImageView} */
    pos3: null,
    /** @type {ccui.ImageView} */
    pos2: null,
    /** @type {ccui.ImageView} */
    pos1: null,
    /** @type {ccui.ImageView} */
    pos0: null,
    /** @type {ccui.ImageView} */
    imgRotationVIP: null,
    /** @type {ccui.ImageView} */
    imgRotationNormal: null,
    /** @type {ItemInfoBubbleWidget} */
    _itemInfoBubbleWidget: null,
    /** @type {ccui.ImageView} */
    _imgBonusItemsBgr: null,
    /** @type {ccui.ImageView} */
    _imgBonusItemsBgr_0: null,
    /** @type {ck.Text} */
    _txtBonusHint0: null,
    /** @type {ck.GridViewVertical} */
    _gridViewBonusItems: null,
    /** @type {ccui.Layout} */
    _layoutBestValue: null,
    /** @type {ccui.ImageView} */
    _imgBestValueBgr: null,
    /** @type {ck.Text} */
    _txtBestValue: null,
    /** @type {ccui.Button} */
    _btnChannels: null,
    /** @type {ccui.ImageView} */
    _imgNext: null,
    /** @type {ck.Text} */
    _txtName: null,
    /** @type {ccui.ImageView} */
    _imgChannels: null,


    /**
     * _ccs.ExpPassPopupReward constructor
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
        ck.UIUtils.setPositionPercent(this.imageBgr, 0.5, 0.45);
        let imageBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imageBgr);
        imageBgrLayoutComponent.setPositionPercentXEnabled(true);
        imageBgrLayoutComponent.setPositionPercentX(0.5);
        imageBgrLayoutComponent.setPositionPercentYEnabled(true);
        imageBgrLayoutComponent.setPositionPercentY(0.45);
        this.imageBgr.loadTexture("e12_popup_rewards.png", 1);
        this.imageBgr.setUnifySizeEnabled(false);
        this.imageBgr.ignoreContentAdaptWithSize(false);
        this.imageBgr.setContentSize(cc.size(640, 648));
        this.imageBgr.setTouchEnabled(true);

        ///// # panelTouch
        this.panelTouch = new ccui.Layout();
        this.panelTouch.setName("panelTouch");
        this.imageBgr.addChild(this.panelTouch);
        this.panelTouch.setCascadeOpacityEnabled(true);
        this.panelTouch.setCascadeColorEnabled(true);
        this.panelTouch.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.panelTouch, 0.5, 0.62);
        let panelTouchLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.panelTouch);
        panelTouchLayoutComponent.setPositionPercentXEnabled(true);
        panelTouchLayoutComponent.setPositionPercentX(0.5);
        panelTouchLayoutComponent.setPositionPercentYEnabled(true);
        panelTouchLayoutComponent.setPositionPercentY(0.62);
        this.panelTouch.setTouchEnabled(true);
        this.panelTouch.setUnifySizeEnabled(false);
        this.panelTouch.ignoreContentAdaptWithSize(false);
        this.panelTouch.setContentSize(cc.size(606.174, 932.7051));

        ///// # imgRibbon
        this.imgRibbon = new ccui.ImageView();
        this.imgRibbon.setName("imgRibbon");
        this.imageBgr.addChild(this.imgRibbon);
        this.imgRibbon.setCascadeOpacityEnabled(true);
        this.imgRibbon.setCascadeColorEnabled(true);
        this.imgRibbon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgRibbon, 0.5, 0.88);
        let imgRibbonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgRibbon);
        imgRibbonLayoutComponent.setPositionPercentXEnabled(true);
        imgRibbonLayoutComponent.setPositionPercentX(0.5);
        imgRibbonLayoutComponent.setPositionPercentYEnabled(true);
        imgRibbonLayoutComponent.setPositionPercentY(0.88);
        this.imgRibbon.loadTexture("e12_ribbon.png", 1);
        this.imgRibbon.setUnifySizeEnabled(false);
        this.imgRibbon.ignoreContentAdaptWithSize(false);
        this.imgRibbon.setContentSize(cc.size(504, 166));
        this.imgRibbon.setTouchEnabled(false);

        ///// # imgStar
        this.imgStar = new ccui.ImageView();
        this.imgStar.setName("imgStar");
        this.imgRibbon.addChild(this.imgStar);
        this.imgStar.setCascadeOpacityEnabled(true);
        this.imgStar.setCascadeColorEnabled(true);
        this.imgStar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgStar, 0.5, 0.9578);
        let imgStarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgStar);
        imgStarLayoutComponent.setPositionPercentXEnabled(true);
        imgStarLayoutComponent.setPositionPercentX(0.5);
        imgStarLayoutComponent.setPositionPercentYEnabled(true);
        imgStarLayoutComponent.setPositionPercentY(0.9578);
        this.imgStar.loadTexture("e12_star_02.png", 1);
        this.imgStar.setUnifySizeEnabled(false);
        this.imgStar.ignoreContentAdaptWithSize(false);
        this.imgStar.setContentSize(cc.size(272, 253));
        this.imgStar.setTouchEnabled(false);

        ///// # imgStar1
        this.imgStar1 = new ccui.ImageView();
        this.imgStar1.setName("imgStar1");
        this.imgRibbon.addChild(this.imgStar1);
        this.imgStar1.setCascadeOpacityEnabled(true);
        this.imgStar1.setCascadeColorEnabled(true);
        this.imgStar1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgStar1, 0.1064, 0.4893);
        this.imgStar1.setFlippedX(true);
        let imgStar1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgStar1);
        imgStar1LayoutComponent.setPositionPercentXEnabled(true);
        imgStar1LayoutComponent.setPositionPercentX(0.1064);
        imgStar1LayoutComponent.setPositionPercentYEnabled(true);
        imgStar1LayoutComponent.setPositionPercentY(0.4893);
        this.imgStar1.loadTexture("e12_star_03.png", 1);
        this.imgStar1.setUnifySizeEnabled(false);
        this.imgStar1.ignoreContentAdaptWithSize(false);
        this.imgStar1.setContentSize(cc.size(138, 145));
        this.imgStar1.setTouchEnabled(false);
        this.imgStar1.setFlippedX(true);

        ///// # imgStar2
        this.imgStar2 = new ccui.ImageView();
        this.imgStar2.setName("imgStar2");
        this.imgRibbon.addChild(this.imgStar2);
        this.imgStar2.setCascadeOpacityEnabled(true);
        this.imgStar2.setCascadeColorEnabled(true);
        this.imgStar2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgStar2, 0.8834, 0.4819);
        let imgStar2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgStar2);
        imgStar2LayoutComponent.setPositionPercentXEnabled(true);
        imgStar2LayoutComponent.setPositionPercentX(0.8834);
        imgStar2LayoutComponent.setPositionPercentYEnabled(true);
        imgStar2LayoutComponent.setPositionPercentY(0.4819);
        this.imgStar2.loadTexture("e12_star_03.png", 1);
        this.imgStar2.setUnifySizeEnabled(false);
        this.imgStar2.ignoreContentAdaptWithSize(false);
        this.imgStar2.setContentSize(cc.size(138, 145));
        this.imgStar2.setTouchEnabled(false);

        ///// # lbLevel
        this.lbLevel = new ck.Text();
        this.lbLevel.setName("lbLevel");
        this.imgRibbon.addChild(this.lbLevel);
        this.lbLevel.setCascadeOpacityEnabled(true);
        this.lbLevel.setCascadeColorEnabled(true);
        this.lbLevel.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.lbLevel, 0.5, 0.9396);
        this.lbLevel.setScale(1.3, 1.3);
        this.lbLevel.setTextColor(cc.color(143, 84, 15, 255));
        let lbLevelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.lbLevel);
        lbLevelLayoutComponent.setPositionPercentXEnabled(true);
        lbLevelLayoutComponent.setPositionPercentX(0.5);
        lbLevelLayoutComponent.setPositionPercentYEnabled(true);
        lbLevelLayoutComponent.setPositionPercentY(0.9396);
        this.lbLevel.setTouchEnabled(false);
        this.lbLevel.ignoreContentAdaptWithSize(true);
        this.lbLevel.setFontName("fonts/LilitaOneRegular.ttf");
        this.lbLevel.setDefaultFontSize(50);
        this.lbLevel.setString("30");
        this.lbLevel.setTextHorizontalAlignment(1);
        this.lbLevel.setTextVerticalAlignment(1);
        this.lbLevel.enableOutline(cc.color.WHITE, 2);
        this.lbLevel.enableShadow(cc.color.WHITE, cc.size(0, -1), 0);

        ///// # imgTitle
        this.imgTitle = new ccui.ImageView();
        this.imgTitle.setName("imgTitle");
        this.imageBgr.addChild(this.imgTitle);
        this.imgTitle.setCascadeOpacityEnabled(true);
        this.imgTitle.setCascadeColorEnabled(true);
        this.imgTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgTitle, 0.5, 0.7822);
        let imgTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgTitle);
        imgTitleLayoutComponent.setPositionPercentXEnabled(true);
        imgTitleLayoutComponent.setPositionPercentX(0.5);
        imgTitleLayoutComponent.setPositionPercentYEnabled(true);
        imgTitleLayoutComponent.setPositionPercentY(0.7822);
        this.imgTitle.loadTexture("texts/events/expPass/text_congraz.png", 1);
        this.imgTitle.setTouchEnabled(false);

        ///// # _btnClose
        this._btnClose = new ccui.Button();
        this._btnClose.setName("_btnClose");
        this.imageBgr.addChild(this._btnClose);
        this._btnClose.setCascadeOpacityEnabled(true);
        this._btnClose.setCascadeColorEnabled(true);
        this._btnClose.setAnchorPoint(cc.p(0.4702, 0.6126));
        ck.UIUtils.setPositionPercent(this._btnClose, 0.9242, 1.0383);
        let _btnCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnClose);
        _btnCloseLayoutComponent.setPositionPercentXEnabled(true);
        _btnCloseLayoutComponent.setPositionPercentX(0.9242);
        _btnCloseLayoutComponent.setPositionPercentYEnabled(true);
        _btnCloseLayoutComponent.setPositionPercentY(1.0383);
        this._btnClose.loadTextureDisabled("buttons/circles/Close.png", 1);
        this._btnClose.loadTexturePressed("buttons/circles/Close.png", 1);
        this._btnClose.loadTextureNormal("buttons/circles/Close.png", 1);
        this._btnClose.setUnifySizeEnabled(false);
        this._btnClose.ignoreContentAdaptWithSize(false);
        this._btnClose.setScale9Enabled(true);
        this._btnClose.setCapInsets(cc.rect(15, 11, 38, 54));
        this._btnClose.setContentSize(cc.size(68, 76));
        this._btnClose.setTouchEnabled(true);

        ///// # _btnBuyTicket
        this._btnBuyTicket = new ccui.Button();
        this._btnBuyTicket.setName("_btnBuyTicket");
        this.imageBgr.addChild(this._btnBuyTicket);
        this._btnBuyTicket.setCascadeOpacityEnabled(true);
        this._btnBuyTicket.setCascadeColorEnabled(true);
        this._btnBuyTicket.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnBuyTicket, 0.5, -0.0844);
        let _btnBuyTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnBuyTicket);
        _btnBuyTicketLayoutComponent.setPositionPercentXEnabled(true);
        _btnBuyTicketLayoutComponent.setPositionPercentX(0.5);
        _btnBuyTicketLayoutComponent.setPositionPercentYEnabled(true);
        _btnBuyTicketLayoutComponent.setPositionPercentY(-0.0844);
        this._btnBuyTicket.loadTextureDisabled("buttons/rectangles/Green_03.png", 1);
        this._btnBuyTicket.loadTexturePressed("buttons/rectangles/Green_03.png", 1);
        this._btnBuyTicket.loadTextureNormal("buttons/rectangles/Green_03.png", 1);
        this._btnBuyTicket.setUnifySizeEnabled(false);
        this._btnBuyTicket.ignoreContentAdaptWithSize(false);
        this._btnBuyTicket.setScale9Enabled(true);
        this._btnBuyTicket.setCapInsets(cc.rect(15, 11, 205, 101));
        this._btnBuyTicket.setContentSize(cc.size(235, 90));
        this._btnBuyTicket.setTouchEnabled(true);

        ///// # txtPriceTicket
        this.txtPriceTicket = new ck.Text();
        this.txtPriceTicket.setName("txtPriceTicket");
        this._btnBuyTicket.addChild(this.txtPriceTicket);
        this.txtPriceTicket.setCascadeOpacityEnabled(true);
        this.txtPriceTicket.setCascadeColorEnabled(true);
        this.txtPriceTicket.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.txtPriceTicket, 0.5, 0.5307);
        let txtPriceTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.txtPriceTicket);
        txtPriceTicketLayoutComponent.setPositionPercentXEnabled(true);
        txtPriceTicketLayoutComponent.setPositionPercentX(0.5);
        txtPriceTicketLayoutComponent.setPositionPercentYEnabled(true);
        txtPriceTicketLayoutComponent.setPositionPercentY(0.5307);
        txtPriceTicketLayoutComponent.setPercentWidthEnabled(true);
        txtPriceTicketLayoutComponent.setPercentWidth(0.97);
        this.txtPriceTicket.setTouchEnabled(false);
        this.txtPriceTicket.setUnifySizeEnabled(false);
        this.txtPriceTicket.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this.txtPriceTicket, 0.97);
        this.txtPriceTicket.setContentSize(cc.size(this.txtPriceTicket.width, 40));
        this.txtPriceTicket.setFontName("fonts/LilitaOneRegular.ttf");
        this.txtPriceTicket.setDefaultFontSize(40);
        this.txtPriceTicket.setString(gm.localize.getText("TXT_300$"));
        this.txtPriceTicket.setTextHorizontalAlignment(1);
        this.txtPriceTicket.setTextVerticalAlignment(1);
        this.txtPriceTicket.enableShadow(cc.color(0, 128, 0, 255), cc.size(0, -2), 0);

        ///// # lbTips
        this.lbTips = new ck.Text();
        this.lbTips.setName("lbTips");
        this.imageBgr.addChild(this.lbTips);
        this.lbTips.setCascadeOpacityEnabled(true);
        this.lbTips.setCascadeColorEnabled(true);
        this.lbTips.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.lbTips, 0.5, 0.2354);
        this.lbTips.setTextColor(cc.color(136, 70, 6, 255));
        let lbTipsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.lbTips);
        lbTipsLayoutComponent.setPositionPercentXEnabled(true);
        lbTipsLayoutComponent.setPositionPercentX(0.5);
        lbTipsLayoutComponent.setPositionPercentYEnabled(true);
        lbTipsLayoutComponent.setPositionPercentY(0.2354);
        this.lbTips.setTouchEnabled(false);
        this.lbTips.ignoreContentAdaptWithSize(true);
        this.lbTips.setFontName("fonts/BebasNeueProBold.ttf");
        this.lbTips.setDefaultFontSize(25);
        this.lbTips.setString(gm.localize.getText("TXT_BUY_PASS_TO_UNLOCK_ALL_VIP_PRIZES"));
        this.lbTips.setTextHorizontalAlignment(1);
        this.lbTips.setTextVerticalAlignment(1);
        this.lbTips.enableShadow(cc.color(252, 232, 131, 255), cc.size(0, -1), 0);

        ///// # txtTips1
        this.txtTips1 = new ck.Text();
        this.txtTips1.setName("txtTips1");
        this.imageBgr.addChild(this.txtTips1);
        this.txtTips1.setCascadeOpacityEnabled(true);
        this.txtTips1.setCascadeColorEnabled(true);
        this.txtTips1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.txtTips1, 0.5, 0.0207);
        let txtTips1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.txtTips1);
        txtTips1LayoutComponent.setPositionPercentXEnabled(true);
        txtTips1LayoutComponent.setPositionPercentX(0.5);
        txtTips1LayoutComponent.setPositionPercentYEnabled(true);
        txtTips1LayoutComponent.setPositionPercentY(0.0207);
        this.txtTips1.setTouchEnabled(false);
        this.txtTips1.ignoreContentAdaptWithSize(true);
        this.txtTips1.setFontName("fonts/BebasNeueProBold.ttf");
        this.txtTips1.setDefaultFontSize(23);
        this.txtTips1.setString(gm.localize.getText("TXT_PRIZE_YOU_RECEIVE_IS_BASED_ON_YOUR_EXP_MILESTONE."));
        this.txtTips1.setTextHorizontalAlignment(1);
        this.txtTips1.setTextVerticalAlignment(1);
        this.txtTips1.enableShadow(cc.color(64, 64, 231, 255), cc.size(0, -2), 0);

        ///// # pos3
        this.pos3 = new ccui.ImageView();
        this.pos3.setName("pos3");
        this.imageBgr.addChild(this.pos3);
        this.pos3.setCascadeOpacityEnabled(true);
        this.pos3.setCascadeColorEnabled(true);
        this.pos3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.pos3, 0.8252, 0.2793);
        this.pos3.setOpacity(0);
        let pos3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.pos3);
        pos3LayoutComponent.setPositionPercentXEnabled(true);
        pos3LayoutComponent.setPositionPercentX(0.8252);
        pos3LayoutComponent.setPositionPercentYEnabled(true);
        pos3LayoutComponent.setPositionPercentY(0.2793);
        this.pos3.loadTexture("Default/ImageFile.png", 0);
        this.pos3.setUnifySizeEnabled(false);
        this.pos3.ignoreContentAdaptWithSize(false);
        this.pos3.setContentSize(cc.size(46, 46));
        this.pos3.setTouchEnabled(false);

        ///// # pos2
        this.pos2 = new ccui.ImageView();
        this.pos2.setName("pos2");
        this.imageBgr.addChild(this.pos2);
        this.pos2.setCascadeOpacityEnabled(true);
        this.pos2.setCascadeColorEnabled(true);
        this.pos2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.pos2, 0.6205, 0.2209);
        this.pos2.setOpacity(0);
        let pos2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.pos2);
        pos2LayoutComponent.setPositionPercentXEnabled(true);
        pos2LayoutComponent.setPositionPercentX(0.6205);
        pos2LayoutComponent.setPositionPercentYEnabled(true);
        pos2LayoutComponent.setPositionPercentY(0.2209);
        this.pos2.loadTexture("Default/ImageFile.png", 0);
        this.pos2.setUnifySizeEnabled(false);
        this.pos2.ignoreContentAdaptWithSize(false);
        this.pos2.setContentSize(cc.size(46, 46));
        this.pos2.setTouchEnabled(false);

        ///// # pos1
        this.pos1 = new ccui.ImageView();
        this.pos1.setName("pos1");
        this.imageBgr.addChild(this.pos1);
        this.pos1.setCascadeOpacityEnabled(true);
        this.pos1.setCascadeColorEnabled(true);
        this.pos1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.pos1, 0.4158, 0.2209);
        this.pos1.setOpacity(0);
        let pos1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.pos1);
        pos1LayoutComponent.setPositionPercentXEnabled(true);
        pos1LayoutComponent.setPositionPercentX(0.4158);
        pos1LayoutComponent.setPositionPercentYEnabled(true);
        pos1LayoutComponent.setPositionPercentY(0.2209);
        this.pos1.loadTexture("Default/ImageFile.png", 0);
        this.pos1.setUnifySizeEnabled(false);
        this.pos1.ignoreContentAdaptWithSize(false);
        this.pos1.setContentSize(cc.size(46, 46));
        this.pos1.setTouchEnabled(false);

        ///// # pos0
        this.pos0 = new ccui.ImageView();
        this.pos0.setName("pos0");
        this.imageBgr.addChild(this.pos0);
        this.pos0.setCascadeOpacityEnabled(true);
        this.pos0.setCascadeColorEnabled(true);
        this.pos0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.pos0, 0.2111, 0.2793);
        this.pos0.setOpacity(0);
        let pos0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.pos0);
        pos0LayoutComponent.setPositionPercentXEnabled(true);
        pos0LayoutComponent.setPositionPercentX(0.2111);
        pos0LayoutComponent.setPositionPercentYEnabled(true);
        pos0LayoutComponent.setPositionPercentY(0.2793);
        this.pos0.loadTexture("Default/ImageFile.png", 0);
        this.pos0.setUnifySizeEnabled(false);
        this.pos0.ignoreContentAdaptWithSize(false);
        this.pos0.setContentSize(cc.size(46, 46));
        this.pos0.setTouchEnabled(false);

        ///// # imgRotationVIP
        this.imgRotationVIP = new ccui.ImageView();
        this.imgRotationVIP.setName("imgRotationVIP");
        this.imageBgr.addChild(this.imgRotationVIP);
        this.imgRotationVIP.setCascadeOpacityEnabled(true);
        this.imgRotationVIP.setCascadeColorEnabled(true);
        this.imgRotationVIP.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this.imgRotationVIP, 0.5, 1);
        this.imgRotationVIP.setRotationX(90);
        this.imgRotationVIP.setRotationY(89.9948);
        this.imgRotationVIP.setOpacity(0);
        let imgRotationVIPLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgRotationVIP);
        imgRotationVIPLayoutComponent.setPositionPercentXEnabled(true);
        imgRotationVIPLayoutComponent.setPositionPercentX(0.5);
        imgRotationVIPLayoutComponent.setPositionPercentYEnabled(true);
        imgRotationVIPLayoutComponent.setPositionPercentY(1);
        this.imgRotationVIP.loadTexture("Default/ImageFile.png", 0);
        this.imgRotationVIP.setUnifySizeEnabled(false);
        this.imgRotationVIP.ignoreContentAdaptWithSize(false);
        this.imgRotationVIP.setContentSize(cc.size(415.74, 40));
        this.imgRotationVIP.setTouchEnabled(false);

        ///// # imgRotationNormal
        this.imgRotationNormal = new ccui.ImageView();
        this.imgRotationNormal.setName("imgRotationNormal");
        this.imageBgr.addChild(this.imgRotationNormal);
        this.imgRotationNormal.setCascadeOpacityEnabled(true);
        this.imgRotationNormal.setCascadeColorEnabled(true);
        this.imgRotationNormal.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this.imgRotationNormal, 0.5, 0.7802);
        this.imgRotationNormal.setRotationX(90);
        this.imgRotationNormal.setRotationY(89.9965);
        this.imgRotationNormal.setOpacity(0);
        let imgRotationNormalLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgRotationNormal);
        imgRotationNormalLayoutComponent.setPositionPercentXEnabled(true);
        imgRotationNormalLayoutComponent.setPositionPercentX(0.5);
        imgRotationNormalLayoutComponent.setPositionPercentYEnabled(true);
        imgRotationNormalLayoutComponent.setPositionPercentY(0.7802);
        this.imgRotationNormal.loadTexture("Default/ImageFile.png", 0);
        this.imgRotationNormal.setUnifySizeEnabled(false);
        this.imgRotationNormal.ignoreContentAdaptWithSize(false);
        this.imgRotationNormal.setContentSize(cc.size(446.7205, 40));
        this.imgRotationNormal.setTouchEnabled(false);

        ///// # _itemInfoBubbleWidget
        this._itemInfoBubbleWidget = new ItemInfoBubbleWidget();
        this._itemInfoBubbleWidget.setName("_itemInfoBubbleWidget");
        this.imageBgr.addChild(this._itemInfoBubbleWidget);
        this._itemInfoBubbleWidget.setCascadeOpacityEnabled(true);
        this._itemInfoBubbleWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._itemInfoBubbleWidget, 0.2892, 0.4053);
        this._itemInfoBubbleWidget.setVisible(false);
        let _itemInfoBubbleWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._itemInfoBubbleWidget);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentX(0.2892);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentY(0.4053);

        ///// # _imgBonusItemsBgr
        this._imgBonusItemsBgr = new ccui.ImageView();
        this._imgBonusItemsBgr.setName("_imgBonusItemsBgr");
        this.imageBgr.addChild(this._imgBonusItemsBgr);
        this._imgBonusItemsBgr.setCascadeOpacityEnabled(true);
        this._imgBonusItemsBgr.setCascadeColorEnabled(true);
        this._imgBonusItemsBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBonusItemsBgr, 0.5, 1.2304);
        this._imgBonusItemsBgr.setScale(0.7, 0.7);
        let _imgBonusItemsBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBonusItemsBgr);
        _imgBonusItemsBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBonusItemsBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBonusItemsBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBonusItemsBgrLayoutComponent.setPositionPercentY(1.2304);
        this._imgBonusItemsBgr.loadTexture("payment/BonusBoard.png", 1);
        this._imgBonusItemsBgr.setUnifySizeEnabled(false);
        this._imgBonusItemsBgr.ignoreContentAdaptWithSize(false);
        this._imgBonusItemsBgr.setScale9Enabled(true);
        this._imgBonusItemsBgr.setCapInsets(cc.rect(18, 21, 591, 241));
        this._imgBonusItemsBgr.setContentSize(cc.size(627, 283));
        this._imgBonusItemsBgr.setTouchEnabled(false);

        ///// # _imgBonusItemsBgr_0
        this._imgBonusItemsBgr_0 = new ccui.ImageView();
        this._imgBonusItemsBgr_0.setName("_imgBonusItemsBgr_0");
        this._imgBonusItemsBgr.addChild(this._imgBonusItemsBgr_0);
        this._imgBonusItemsBgr_0.setCascadeOpacityEnabled(true);
        this._imgBonusItemsBgr_0.setCascadeColorEnabled(true);
        this._imgBonusItemsBgr_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBonusItemsBgr_0, 0.2837, 0.5396);
        let _imgBonusItemsBgr_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBonusItemsBgr_0);
        _imgBonusItemsBgr_0LayoutComponent.setPositionPercentXEnabled(true);
        _imgBonusItemsBgr_0LayoutComponent.setPositionPercentX(0.2837);
        _imgBonusItemsBgr_0LayoutComponent.setPositionPercentYEnabled(true);
        _imgBonusItemsBgr_0LayoutComponent.setPositionPercentY(0.5396);
        this._imgBonusItemsBgr_0.loadTexture("texts/payment/FirstPayReward.png", 1);
        this._imgBonusItemsBgr_0.setTouchEnabled(false);

        ///// # _txtBonusHint0
        this._txtBonusHint0 = new ck.Text();
        this._txtBonusHint0.setName("_txtBonusHint0");
        this._imgBonusItemsBgr.addChild(this._txtBonusHint0);
        this._txtBonusHint0.setCascadeOpacityEnabled(true);
        this._txtBonusHint0.setCascadeColorEnabled(true);
        this._txtBonusHint0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBonusHint0, 0.7192, 0.2416);
        let _txtBonusHint0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBonusHint0);
        _txtBonusHint0LayoutComponent.setPositionPercentXEnabled(true);
        _txtBonusHint0LayoutComponent.setPositionPercentX(0.7192);
        _txtBonusHint0LayoutComponent.setPositionPercentYEnabled(true);
        _txtBonusHint0LayoutComponent.setPositionPercentY(0.2416);
        this._txtBonusHint0.setTouchEnabled(false);
        this._txtBonusHint0.ignoreContentAdaptWithSize(true);
        this._txtBonusHint0.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBonusHint0.setDefaultFontSize(30);
        this._txtBonusHint0.setString(gm.localize.getText("TXT_FOR_ANY_PURCHASE"));
        this._txtBonusHint0.setTextHorizontalAlignment(1);
        this._txtBonusHint0.setTextVerticalAlignment(1);
        this._txtBonusHint0.enableOutline(cc.color(132, 25, 132, 255), 2);

        ///// # _gridViewBonusItems
        this._gridViewBonusItems = new ck.GridViewVertical();
        this._gridViewBonusItems.setName("_gridViewBonusItems");
        this._imgBonusItemsBgr.addChild(this._gridViewBonusItems);
        this._gridViewBonusItems.setCascadeOpacityEnabled(true);
        this._gridViewBonusItems.setCascadeColorEnabled(true);
        this._gridViewBonusItems.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridViewBonusItems, 0.7136, 0.5858);
        let _gridViewBonusItemsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewBonusItems);
        _gridViewBonusItemsLayoutComponent.setPositionPercentXEnabled(true);
        _gridViewBonusItemsLayoutComponent.setPositionPercentX(0.7136);
        _gridViewBonusItemsLayoutComponent.setPositionPercentYEnabled(true);
        _gridViewBonusItemsLayoutComponent.setPositionPercentY(0.5858);

        ///// # _layoutBestValue
        this._layoutBestValue = new ccui.Layout();
        this._layoutBestValue.setName("_layoutBestValue");
        this._imgBonusItemsBgr.addChild(this._layoutBestValue);
        this._layoutBestValue.setCascadeOpacityEnabled(true);
        this._layoutBestValue.setCascadeColorEnabled(true);
        this._layoutBestValue.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBestValue, 0.0728, 0.8259);
        let _layoutBestValueLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBestValue);
        this._layoutBestValue.setTouchEnabled(false);
        this._layoutBestValue.setUnifySizeEnabled(false);
        this._layoutBestValue.ignoreContentAdaptWithSize(false);
        this._layoutBestValue.setContentSize(cc.size(95.39, 95.3912));

        ///// # _imgBestValueBgr
        this._imgBestValueBgr = new ccui.ImageView();
        this._imgBestValueBgr.setName("_imgBestValueBgr");
        this._layoutBestValue.addChild(this._imgBestValueBgr);
        this._imgBestValueBgr.setCascadeOpacityEnabled(true);
        this._imgBestValueBgr.setCascadeColorEnabled(true);
        this._imgBestValueBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBestValueBgr, 0.5, 0.5);
        let _imgBestValueBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBestValueBgr);
        _imgBestValueBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBestValueBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBestValueBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBestValueBgrLayoutComponent.setPositionPercentY(0.5);
        this._imgBestValueBgr.loadTexture("payment/Tag.png", 1);
        this._imgBestValueBgr.setUnifySizeEnabled(false);
        this._imgBestValueBgr.ignoreContentAdaptWithSize(false);
        this._imgBestValueBgr.setContentSize(cc.size(89, 90));
        this._imgBestValueBgr.setTouchEnabled(false);

        ///// # _txtBestValue
        this._txtBestValue = new ck.Text();
        this._txtBestValue.setName("_txtBestValue");
        this._layoutBestValue.addChild(this._txtBestValue);
        this._txtBestValue.setCascadeOpacityEnabled(true);
        this._txtBestValue.setCascadeColorEnabled(true);
        this._txtBestValue.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBestValue, 0.479, 0.5315);
        let _txtBestValueLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBestValue);
        _txtBestValueLayoutComponent.setPositionPercentXEnabled(true);
        _txtBestValueLayoutComponent.setPositionPercentX(0.479);
        _txtBestValueLayoutComponent.setPositionPercentYEnabled(true);
        _txtBestValueLayoutComponent.setPositionPercentY(0.5315);
        this._txtBestValue.setTouchEnabled(false);
        this._txtBestValue.ignoreContentAdaptWithSize(true);
        this._txtBestValue.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBestValue.setDefaultFontSize(25);
        this._txtBestValue.setString(gm.localize.getText("TXT_BEST_VALUE"));
        this._txtBestValue.setTextHorizontalAlignment(1);
        this._txtBestValue.setTextVerticalAlignment(1);
        this._txtBestValue.enableOutline(cc.color(132, 25, 132, 255), 1);
        this._txtBestValue.enableShadow(cc.color(90, 0, 90, 255), cc.size(0, -2), 0);

        ///// # _btnChannels
        this._btnChannels = new ccui.Button();
        this._btnChannels.setName("_btnChannels");
        this.imageBgr.addChild(this._btnChannels);
        this._btnChannels.setCascadeOpacityEnabled(true);
        this._btnChannels.setCascadeColorEnabled(true);
        this._btnChannels.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnChannels, 0.5, -0.2015);
        let _btnChannelsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnChannels);
        _btnChannelsLayoutComponent.setPositionPercentXEnabled(true);
        _btnChannelsLayoutComponent.setPositionPercentX(0.5);
        _btnChannelsLayoutComponent.setPositionPercentYEnabled(true);
        _btnChannelsLayoutComponent.setPositionPercentY(-0.2015);
        this._btnChannels.loadTextureDisabled("buttons/rectangles/Green_02.png", 1);
        this._btnChannels.loadTexturePressed("buttons/rectangles/Green_02.png", 1);
        this._btnChannels.loadTextureNormal("buttons/rectangles/Green_02.png", 1);
        this._btnChannels.setUnifySizeEnabled(false);
        this._btnChannels.ignoreContentAdaptWithSize(false);
        this._btnChannels.setScale9Enabled(true);
        this._btnChannels.setCapInsets(cc.rect(56, 0, 12, 67));
        this._btnChannels.setContentSize(cc.size(140, 67));
        this._btnChannels.setTouchEnabled(true);

        ///// # _imgNext
        this._imgNext = new ccui.ImageView();
        this._imgNext.setName("_imgNext");
        this._btnChannels.addChild(this._imgNext);
        this._imgNext.setCascadeOpacityEnabled(true);
        this._imgNext.setCascadeColorEnabled(true);
        this._imgNext.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgNext, 0.9051, 0.5549);
        let _imgNextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNext);
        _imgNextLayoutComponent.setPositionPercentXEnabled(true);
        _imgNextLayoutComponent.setPositionPercentX(0.9051);
        _imgNextLayoutComponent.setPositionPercentYEnabled(true);
        _imgNextLayoutComponent.setPositionPercentY(0.5549);
        this._imgNext.loadTexture("channel_next.png", 1);
        this._imgNext.setUnifySizeEnabled(false);
        this._imgNext.ignoreContentAdaptWithSize(false);
        this._imgNext.setContentSize(cc.size(13, 17));
        this._imgNext.setTouchEnabled(false);

        ///// # _txtName
        this._txtName = new ck.Text();
        this._txtName.setName("_txtName");
        this._btnChannels.addChild(this._txtName);
        this._txtName.setCascadeOpacityEnabled(true);
        this._txtName.setCascadeColorEnabled(true);
        this._txtName.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName, 0.3359, 0.573);
        let _txtNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName);
        _txtNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameLayoutComponent.setPositionPercentX(0.3359);
        _txtNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameLayoutComponent.setPositionPercentY(0.573);
        this._txtName.setTouchEnabled(false);
        this._txtName.setUnifySizeEnabled(false);
        this._txtName.ignoreContentAdaptWithSize(false);
        this._txtName.setContentSize(cc.size(72, 32));
        this._txtName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName.setDefaultFontSize(22);
        this._txtName.setString(gm.localize.getText("TXT_VODAFONE"));
        this._txtName.setTextHorizontalAlignment(0);
        this._txtName.setTextVerticalAlignment(1);
        this._txtName.enableOutline(cc.color(62, 112, 128, 255), 1);

        ///// # _imgChannels
        this._imgChannels = new ccui.ImageView();
        this._imgChannels.setName("_imgChannels");
        this._btnChannels.addChild(this._imgChannels);
        this._imgChannels.setCascadeOpacityEnabled(true);
        this._imgChannels.setCascadeColorEnabled(true);
        this._imgChannels.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgChannels, 0.18, 0.575);
        this._imgChannels.setScale(0.6, 0.6);
        let _imgChannelsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgChannels);
        _imgChannelsLayoutComponent.setPositionPercentXEnabled(true);
        _imgChannelsLayoutComponent.setPositionPercentX(0.18);
        _imgChannelsLayoutComponent.setPositionPercentYEnabled(true);
        _imgChannelsLayoutComponent.setPositionPercentY(0.575);
        this._imgChannels.loadTexture("event15_voda.png", 1);
        this._imgChannels.setUnifySizeEnabled(false);
        this._imgChannels.ignoreContentAdaptWithSize(false);
        this._imgChannels.setContentSize(cc.size(65, 64));
        this._imgChannels.setTouchEnabled(false);

    },



});

/**
 * Create ExpPassPopupReward
 * @returns {_ccs.ExpPassPopupReward}
 */
_ccs.ExpPassPopupReward.create = function () {
    return new _ccs.ExpPassPopupReward();
};
