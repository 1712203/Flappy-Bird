/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ExpPassPopupBuyPass
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.ExpPassPopupBuyPass = cc.Layer.extend({

    /** @type {ccui.ImageView} */
    imageBgr: null,
    /** @type {ccui.Layout} */
    panelTouch: null,
    /** @type {ccui.ImageView} */
    imgBoard: null,
    /** @type {ccui.ImageView} */
    imgDot0: null,
    /** @type {ccui.ImageView} */
    imgDot1: null,
    /** @type {ccui.ImageView} */
    imgDot2: null,
    /** @type {ccui.ImageView} */
    imgDot3: null,
    /** @type {ccui.ImageView} */
    imgDot4: null,
    /** @type {ccui.ImageView} */
    imgDot5: null,
    /** @type {ccui.ImageView} */
    imgDot6: null,
    /** @type {ccui.ImageView} */
    imgDot7: null,
    /** @type {ccui.ImageView} */
    imgDot8: null,
    /** @type {ccui.ImageView} */
    imgDot9: null,
    /** @type {ccui.ImageView} */
    imgDot10: null,
    /** @type {ccui.ImageView} */
    imgDot11: null,
    /** @type {ccui.Button} */
    _btnClose: null,
    /** @type {ccui.Button} */
    _btnBuyTicket: null,
    /** @type {ck.Text} */
    txtPriceTicket: null,
    /** @type {ck.Text} */
    txtTips: null,
    /** @type {ck.Text} */
    txtTips1: null,
    /** @type {ccui.ImageView} */
    pos0: null,
    /** @type {ccui.ImageView} */
    pos1: null,
    /** @type {ccui.ImageView} */
    pos2: null,
    /** @type {ccui.ImageView} */
    pos3: null,
    /** @type {ccui.ImageView} */
    imgPos0: null,
    /** @type {ccui.ImageView} */
    imgPos1: null,
    /** @type {ccui.ImageView} */
    imgPos2: null,
    /** @type {ccui.ImageView} */
    imgRotation: null,
    /** @type {ItemInfoBubbleWidget} */
    _itemInfoBubbleWidget: null,
    /** @type {ccui.Button} */
    _btnChannels: null,
    /** @type {ccui.ImageView} */
    _imgNext: null,
    /** @type {ck.Text} */
    _txtName: null,
    /** @type {ccui.ImageView} */
    _imgChannels: null,
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


    /**
     * _ccs.ExpPassPopupBuyPass constructor
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
        ck.UIUtils.setPositionPercent(this.imageBgr, 0.5, 0.51);
        let imageBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imageBgr);
        imageBgrLayoutComponent.setPositionPercentXEnabled(true);
        imageBgrLayoutComponent.setPositionPercentX(0.5);
        imageBgrLayoutComponent.setPositionPercentYEnabled(true);
        imageBgrLayoutComponent.setPositionPercentY(0.51);
        this.imageBgr.loadTexture("e12_popup_unlock.png", 1);
        this.imageBgr.setUnifySizeEnabled(false);
        this.imageBgr.ignoreContentAdaptWithSize(false);
        this.imageBgr.setContentSize(cc.size(640, 762));
        this.imageBgr.setTouchEnabled(true);

        ///// # panelTouch
        this.panelTouch = new ccui.Layout();
        this.panelTouch.setName("panelTouch");
        this.imageBgr.addChild(this.panelTouch);
        this.panelTouch.setCascadeOpacityEnabled(true);
        this.panelTouch.setCascadeColorEnabled(true);
        this.panelTouch.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.panelTouch, 0.5, 0.45);
        let panelTouchLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.panelTouch);
        panelTouchLayoutComponent.setPositionPercentXEnabled(true);
        panelTouchLayoutComponent.setPositionPercentX(0.5);
        panelTouchLayoutComponent.setPositionPercentYEnabled(true);
        panelTouchLayoutComponent.setPositionPercentY(0.45);
        this.panelTouch.setTouchEnabled(true);
        this.panelTouch.setUnifySizeEnabled(false);
        this.panelTouch.ignoreContentAdaptWithSize(false);
        this.panelTouch.setContentSize(cc.size(606.174, 900));

        ///// # imgBoard
        this.imgBoard = new ccui.ImageView();
        this.imgBoard.setName("imgBoard");
        this.imageBgr.addChild(this.imgBoard);
        this.imgBoard.setCascadeOpacityEnabled(true);
        this.imgBoard.setCascadeColorEnabled(true);
        this.imgBoard.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgBoard, 0.5, 0.6608);
        let imgBoardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgBoard);
        imgBoardLayoutComponent.setPositionPercentXEnabled(true);
        imgBoardLayoutComponent.setPositionPercentX(0.5);
        imgBoardLayoutComponent.setPositionPercentYEnabled(true);
        imgBoardLayoutComponent.setPositionPercentY(0.6608);
        this.imgBoard.loadTexture("e12_bar_showpass.png", 1);
        this.imgBoard.setUnifySizeEnabled(false);
        this.imgBoard.ignoreContentAdaptWithSize(false);
        this.imgBoard.setContentSize(cc.size(338, 233));
        this.imgBoard.setTouchEnabled(false);

        ///// # imgDot0
        this.imgDot0 = new ccui.ImageView();
        this.imgDot0.setName("imgDot0");
        this.imgBoard.addChild(this.imgDot0);
        this.imgDot0.setCascadeOpacityEnabled(true);
        this.imgDot0.setCascadeColorEnabled(true);
        this.imgDot0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgDot0, 0.0553, 0.932);
        let imgDot0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgDot0);
        imgDot0LayoutComponent.setPositionPercentXEnabled(true);
        imgDot0LayoutComponent.setPositionPercentX(0.0553);
        imgDot0LayoutComponent.setPositionPercentYEnabled(true);
        imgDot0LayoutComponent.setPositionPercentY(0.932);
        this.imgDot0.loadTexture("e12_light_on.png", 1);
        this.imgDot0.setUnifySizeEnabled(false);
        this.imgDot0.ignoreContentAdaptWithSize(false);
        this.imgDot0.setContentSize(cc.size(28, 28));
        this.imgDot0.setTouchEnabled(false);

        ///// # imgDot1
        this.imgDot1 = new ccui.ImageView();
        this.imgDot1.setName("imgDot1");
        this.imgBoard.addChild(this.imgDot1);
        this.imgDot1.setCascadeOpacityEnabled(true);
        this.imgDot1.setCascadeColorEnabled(true);
        this.imgDot1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgDot1, 0.2766, 0.9671);
        let imgDot1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgDot1);
        imgDot1LayoutComponent.setPositionPercentXEnabled(true);
        imgDot1LayoutComponent.setPositionPercentX(0.2766);
        imgDot1LayoutComponent.setPositionPercentYEnabled(true);
        imgDot1LayoutComponent.setPositionPercentY(0.9671);
        this.imgDot1.loadTexture("e12_light_on.png", 1);
        this.imgDot1.setUnifySizeEnabled(false);
        this.imgDot1.ignoreContentAdaptWithSize(false);
        this.imgDot1.setContentSize(cc.size(28, 28));
        this.imgDot1.setTouchEnabled(false);

        ///// # imgDot2
        this.imgDot2 = new ccui.ImageView();
        this.imgDot2.setName("imgDot2");
        this.imgBoard.addChild(this.imgDot2);
        this.imgDot2.setCascadeOpacityEnabled(true);
        this.imgDot2.setCascadeColorEnabled(true);
        this.imgDot2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgDot2, 0.4979, 0.9671);
        let imgDot2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgDot2);
        imgDot2LayoutComponent.setPositionPercentXEnabled(true);
        imgDot2LayoutComponent.setPositionPercentX(0.4979);
        imgDot2LayoutComponent.setPositionPercentYEnabled(true);
        imgDot2LayoutComponent.setPositionPercentY(0.9671);
        this.imgDot2.loadTexture("e12_light_on.png", 1);
        this.imgDot2.setUnifySizeEnabled(false);
        this.imgDot2.ignoreContentAdaptWithSize(false);
        this.imgDot2.setContentSize(cc.size(28, 28));
        this.imgDot2.setTouchEnabled(false);

        ///// # imgDot3
        this.imgDot3 = new ccui.ImageView();
        this.imgDot3.setName("imgDot3");
        this.imgBoard.addChild(this.imgDot3);
        this.imgDot3.setCascadeOpacityEnabled(true);
        this.imgDot3.setCascadeColorEnabled(true);
        this.imgDot3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgDot3, 0.7191, 0.9671);
        let imgDot3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgDot3);
        imgDot3LayoutComponent.setPositionPercentXEnabled(true);
        imgDot3LayoutComponent.setPositionPercentX(0.7191);
        imgDot3LayoutComponent.setPositionPercentYEnabled(true);
        imgDot3LayoutComponent.setPositionPercentY(0.9671);
        this.imgDot3.loadTexture("e12_light_on.png", 1);
        this.imgDot3.setUnifySizeEnabled(false);
        this.imgDot3.ignoreContentAdaptWithSize(false);
        this.imgDot3.setContentSize(cc.size(28, 28));
        this.imgDot3.setTouchEnabled(false);

        ///// # imgDot4
        this.imgDot4 = new ccui.ImageView();
        this.imgDot4.setName("imgDot4");
        this.imgBoard.addChild(this.imgDot4);
        this.imgDot4.setCascadeOpacityEnabled(true);
        this.imgDot4.setCascadeColorEnabled(true);
        this.imgDot4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgDot4, 0.9404, 0.9346);
        let imgDot4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgDot4);
        imgDot4LayoutComponent.setPositionPercentXEnabled(true);
        imgDot4LayoutComponent.setPositionPercentX(0.9404);
        imgDot4LayoutComponent.setPositionPercentYEnabled(true);
        imgDot4LayoutComponent.setPositionPercentY(0.9346);
        this.imgDot4.loadTexture("e12_light_on.png", 1);
        this.imgDot4.setUnifySizeEnabled(false);
        this.imgDot4.ignoreContentAdaptWithSize(false);
        this.imgDot4.setContentSize(cc.size(28, 28));
        this.imgDot4.setTouchEnabled(false);

        ///// # imgDot5
        this.imgDot5 = new ccui.ImageView();
        this.imgDot5.setName("imgDot5");
        this.imgBoard.addChild(this.imgDot5);
        this.imgDot5.setCascadeOpacityEnabled(true);
        this.imgDot5.setCascadeColorEnabled(true);
        this.imgDot5.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgDot5, 0.9653, 0.5494);
        let imgDot5LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgDot5);
        imgDot5LayoutComponent.setPositionPercentXEnabled(true);
        imgDot5LayoutComponent.setPositionPercentX(0.9653);
        imgDot5LayoutComponent.setPositionPercentYEnabled(true);
        imgDot5LayoutComponent.setPositionPercentY(0.5494);
        this.imgDot5.loadTexture("e12_light_on.png", 1);
        this.imgDot5.setUnifySizeEnabled(false);
        this.imgDot5.ignoreContentAdaptWithSize(false);
        this.imgDot5.setContentSize(cc.size(28, 28));
        this.imgDot5.setTouchEnabled(false);

        ///// # imgDot6
        this.imgDot6 = new ccui.ImageView();
        this.imgDot6.setName("imgDot6");
        this.imgBoard.addChild(this.imgDot6);
        this.imgDot6.setCascadeOpacityEnabled(true);
        this.imgDot6.setCascadeColorEnabled(true);
        this.imgDot6.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgDot6, 0.9428, 0.1285);
        let imgDot6LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgDot6);
        imgDot6LayoutComponent.setPositionPercentXEnabled(true);
        imgDot6LayoutComponent.setPositionPercentX(0.9428);
        imgDot6LayoutComponent.setPositionPercentYEnabled(true);
        imgDot6LayoutComponent.setPositionPercentY(0.1285);
        this.imgDot6.loadTexture("e12_light_on.png", 1);
        this.imgDot6.setUnifySizeEnabled(false);
        this.imgDot6.ignoreContentAdaptWithSize(false);
        this.imgDot6.setContentSize(cc.size(28, 28));
        this.imgDot6.setTouchEnabled(false);

        ///// # imgDot7
        this.imgDot7 = new ccui.ImageView();
        this.imgDot7.setName("imgDot7");
        this.imgBoard.addChild(this.imgDot7);
        this.imgDot7.setCascadeOpacityEnabled(true);
        this.imgDot7.setCascadeColorEnabled(true);
        this.imgDot7.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgDot7, 0.7224, 0.0924);
        let imgDot7LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgDot7);
        imgDot7LayoutComponent.setPositionPercentXEnabled(true);
        imgDot7LayoutComponent.setPositionPercentX(0.7224);
        imgDot7LayoutComponent.setPositionPercentYEnabled(true);
        imgDot7LayoutComponent.setPositionPercentY(0.0924);
        this.imgDot7.loadTexture("e12_light_on.png", 1);
        this.imgDot7.setUnifySizeEnabled(false);
        this.imgDot7.ignoreContentAdaptWithSize(false);
        this.imgDot7.setContentSize(cc.size(28, 28));
        this.imgDot7.setTouchEnabled(false);

        ///// # imgDot8
        this.imgDot8 = new ccui.ImageView();
        this.imgDot8.setName("imgDot8");
        this.imgBoard.addChild(this.imgDot8);
        this.imgDot8.setCascadeOpacityEnabled(true);
        this.imgDot8.setCascadeColorEnabled(true);
        this.imgDot8.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgDot8, 0.5021, 0.0892);
        let imgDot8LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgDot8);
        imgDot8LayoutComponent.setPositionPercentXEnabled(true);
        imgDot8LayoutComponent.setPositionPercentX(0.5021);
        imgDot8LayoutComponent.setPositionPercentYEnabled(true);
        imgDot8LayoutComponent.setPositionPercentY(0.0892);
        this.imgDot8.loadTexture("e12_light_on.png", 1);
        this.imgDot8.setUnifySizeEnabled(false);
        this.imgDot8.ignoreContentAdaptWithSize(false);
        this.imgDot8.setContentSize(cc.size(28, 28));
        this.imgDot8.setTouchEnabled(false);

        ///// # imgDot9
        this.imgDot9 = new ccui.ImageView();
        this.imgDot9.setName("imgDot9");
        this.imgBoard.addChild(this.imgDot9);
        this.imgDot9.setCascadeOpacityEnabled(true);
        this.imgDot9.setCascadeColorEnabled(true);
        this.imgDot9.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgDot9, 0.2817, 0.0904);
        let imgDot9LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgDot9);
        imgDot9LayoutComponent.setPositionPercentXEnabled(true);
        imgDot9LayoutComponent.setPositionPercentX(0.2817);
        imgDot9LayoutComponent.setPositionPercentYEnabled(true);
        imgDot9LayoutComponent.setPositionPercentY(0.0904);
        this.imgDot9.loadTexture("e12_light_on.png", 1);
        this.imgDot9.setUnifySizeEnabled(false);
        this.imgDot9.ignoreContentAdaptWithSize(false);
        this.imgDot9.setContentSize(cc.size(28, 28));
        this.imgDot9.setTouchEnabled(false);

        ///// # imgDot10
        this.imgDot10 = new ccui.ImageView();
        this.imgDot10.setName("imgDot10");
        this.imgBoard.addChild(this.imgDot10);
        this.imgDot10.setCascadeOpacityEnabled(true);
        this.imgDot10.setCascadeColorEnabled(true);
        this.imgDot10.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgDot10, 0.0613, 0.1254);
        let imgDot10LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgDot10);
        imgDot10LayoutComponent.setPositionPercentXEnabled(true);
        imgDot10LayoutComponent.setPositionPercentX(0.0613);
        imgDot10LayoutComponent.setPositionPercentYEnabled(true);
        imgDot10LayoutComponent.setPositionPercentY(0.1254);
        this.imgDot10.loadTexture("e12_light_on.png", 1);
        this.imgDot10.setUnifySizeEnabled(false);
        this.imgDot10.ignoreContentAdaptWithSize(false);
        this.imgDot10.setContentSize(cc.size(28, 28));
        this.imgDot10.setTouchEnabled(false);

        ///// # imgDot11
        this.imgDot11 = new ccui.ImageView();
        this.imgDot11.setName("imgDot11");
        this.imgBoard.addChild(this.imgDot11);
        this.imgDot11.setCascadeOpacityEnabled(true);
        this.imgDot11.setCascadeColorEnabled(true);
        this.imgDot11.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgDot11, 0.0366, 0.5501);
        let imgDot11LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgDot11);
        imgDot11LayoutComponent.setPositionPercentXEnabled(true);
        imgDot11LayoutComponent.setPositionPercentX(0.0366);
        imgDot11LayoutComponent.setPositionPercentYEnabled(true);
        imgDot11LayoutComponent.setPositionPercentY(0.5501);
        this.imgDot11.loadTexture("e12_light_on.png", 1);
        this.imgDot11.setUnifySizeEnabled(false);
        this.imgDot11.ignoreContentAdaptWithSize(false);
        this.imgDot11.setContentSize(cc.size(28, 28));
        this.imgDot11.setTouchEnabled(false);

        ///// # _btnClose
        this._btnClose = new ccui.Button();
        this._btnClose.setName("_btnClose");
        this.imageBgr.addChild(this._btnClose);
        this._btnClose.setCascadeOpacityEnabled(true);
        this._btnClose.setCascadeColorEnabled(true);
        this._btnClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnClose, 0.9302, 0.89);
        let _btnCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnClose);
        _btnCloseLayoutComponent.setPositionPercentXEnabled(true);
        _btnCloseLayoutComponent.setPositionPercentX(0.9302);
        _btnCloseLayoutComponent.setPositionPercentYEnabled(true);
        _btnCloseLayoutComponent.setPositionPercentY(0.89);
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
        ck.UIUtils.setPositionPercent(this._btnBuyTicket, 0.5, -0.0728);
        let _btnBuyTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnBuyTicket);
        _btnBuyTicketLayoutComponent.setPositionPercentXEnabled(true);
        _btnBuyTicketLayoutComponent.setPositionPercentX(0.5);
        _btnBuyTicketLayoutComponent.setPositionPercentYEnabled(true);
        _btnBuyTicketLayoutComponent.setPositionPercentY(-0.0728);
        this._btnBuyTicket.loadTextureDisabled("buttons/rectangles/Green_03.png", 1);
        this._btnBuyTicket.loadTexturePressed("buttons/rectangles/Green_03.png", 1);
        this._btnBuyTicket.loadTextureNormal("buttons/rectangles/Green_03.png", 1);
        this._btnBuyTicket.setUnifySizeEnabled(false);
        this._btnBuyTicket.ignoreContentAdaptWithSize(false);
        this._btnBuyTicket.setScale9Enabled(true);
        this._btnBuyTicket.setCapInsets(cc.rect(15, 11, 205, 101));
        this._btnBuyTicket.setContentSize(cc.size(220, 75));
        this._btnBuyTicket.setTouchEnabled(true);

        ///// # txtPriceTicket
        this.txtPriceTicket = new ck.Text();
        this.txtPriceTicket.setName("txtPriceTicket");
        this._btnBuyTicket.addChild(this.txtPriceTicket);
        this.txtPriceTicket.setCascadeOpacityEnabled(true);
        this.txtPriceTicket.setCascadeColorEnabled(true);
        this.txtPriceTicket.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.txtPriceTicket, 0.5, 0.5432);
        let txtPriceTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.txtPriceTicket);
        txtPriceTicketLayoutComponent.setPositionPercentXEnabled(true);
        txtPriceTicketLayoutComponent.setPositionPercentX(0.5);
        txtPriceTicketLayoutComponent.setPositionPercentYEnabled(true);
        txtPriceTicketLayoutComponent.setPositionPercentY(0.5432);
        txtPriceTicketLayoutComponent.setPercentWidthEnabled(true);
        txtPriceTicketLayoutComponent.setPercentWidth(0.96);
        this.txtPriceTicket.setTouchEnabled(false);
        this.txtPriceTicket.setUnifySizeEnabled(false);
        this.txtPriceTicket.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this.txtPriceTicket, 0.96);
        this.txtPriceTicket.setContentSize(cc.size(this.txtPriceTicket.width, 37.4577));
        this.txtPriceTicket.setFontName("fonts/LilitaOneRegular.ttf");
        this.txtPriceTicket.setDefaultFontSize(35);
        this.txtPriceTicket.setString(gm.localize.getText("TXT_300$"));
        this.txtPriceTicket.setTextHorizontalAlignment(1);
        this.txtPriceTicket.setTextVerticalAlignment(1);
        this.txtPriceTicket.enableShadow(cc.color(0, 128, 0, 255), cc.size(0, -2), 0);

        ///// # txtTips
        this.txtTips = new ck.Text();
        this.txtTips.setName("txtTips");
        this.imageBgr.addChild(this.txtTips);
        this.txtTips.setCascadeOpacityEnabled(true);
        this.txtTips.setCascadeColorEnabled(true);
        this.txtTips.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.txtTips, 0.5, 0.0458);
        this.txtTips.setTextColor(cc.color(255, 255, 0, 255));
        let txtTipsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.txtTips);
        txtTipsLayoutComponent.setPositionPercentXEnabled(true);
        txtTipsLayoutComponent.setPositionPercentX(0.5);
        txtTipsLayoutComponent.setPositionPercentYEnabled(true);
        txtTipsLayoutComponent.setPositionPercentY(0.0458);
        this.txtTips.setTouchEnabled(false);
        this.txtTips.ignoreContentAdaptWithSize(true);
        this.txtTips.setFontName("fonts/BebasNeueProBold.ttf");
        this.txtTips.setDefaultFontSize(23);
        this.txtTips.setString(gm.localize.getText("TXT_BUY_PASS_TO_UNLOCK_ALL_VIP_PRIZES"));
        this.txtTips.setTextHorizontalAlignment(1);
        this.txtTips.setTextVerticalAlignment(1);
        this.txtTips.enableShadow(cc.color(64, 64, 231, 255), cc.size(0, -2), 0);

        ///// # txtTips1
        this.txtTips1 = new ck.Text();
        this.txtTips1.setName("txtTips1");
        this.imageBgr.addChild(this.txtTips1);
        this.txtTips1.setCascadeOpacityEnabled(true);
        this.txtTips1.setCascadeColorEnabled(true);
        this.txtTips1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.txtTips1, 0.5, 0.0176);
        this.txtTips1.setTextColor(cc.color(255, 255, 0, 255));
        let txtTips1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.txtTips1);
        txtTips1LayoutComponent.setPositionPercentXEnabled(true);
        txtTips1LayoutComponent.setPositionPercentX(0.5);
        txtTips1LayoutComponent.setPositionPercentYEnabled(true);
        txtTips1LayoutComponent.setPositionPercentY(0.0176);
        this.txtTips1.setTouchEnabled(false);
        this.txtTips1.ignoreContentAdaptWithSize(true);
        this.txtTips1.setFontName("fonts/BebasNeueProBold.ttf");
        this.txtTips1.setDefaultFontSize(23);
        this.txtTips1.setString(gm.localize.getText("TXT_PRIZE_YOU_RECEIVE_IS_BASED_ON_YOUR_EXP_MILESTONE."));
        this.txtTips1.setTextHorizontalAlignment(1);
        this.txtTips1.setTextVerticalAlignment(1);
        this.txtTips1.enableShadow(cc.color(64, 64, 231, 255), cc.size(0, -2), 0);

        ///// # pos0
        this.pos0 = new ccui.ImageView();
        this.pos0.setName("pos0");
        this.imageBgr.addChild(this.pos0);
        this.pos0.setCascadeOpacityEnabled(true);
        this.pos0.setCascadeColorEnabled(true);
        this.pos0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.pos0, 0.1939, 0.0425);
        this.pos0.setOpacity(0);
        let pos0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.pos0);
        pos0LayoutComponent.setPositionPercentXEnabled(true);
        pos0LayoutComponent.setPositionPercentX(0.1939);
        pos0LayoutComponent.setPositionPercentYEnabled(true);
        pos0LayoutComponent.setPositionPercentY(0.0425);
        this.pos0.loadTexture("Default/ImageFile.png", 0);
        this.pos0.setUnifySizeEnabled(false);
        this.pos0.ignoreContentAdaptWithSize(false);
        this.pos0.setContentSize(cc.size(46, 46));
        this.pos0.setTouchEnabled(false);

        ///// # pos1
        this.pos1 = new ccui.ImageView();
        this.pos1.setName("pos1");
        this.imageBgr.addChild(this.pos1);
        this.pos1.setCascadeOpacityEnabled(true);
        this.pos1.setCascadeColorEnabled(true);
        this.pos1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.pos1, 0.3986, 0.0043);
        this.pos1.setOpacity(0);
        let pos1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.pos1);
        pos1LayoutComponent.setPositionPercentXEnabled(true);
        pos1LayoutComponent.setPositionPercentX(0.3986);
        pos1LayoutComponent.setPositionPercentYEnabled(true);
        pos1LayoutComponent.setPositionPercentY(0.0043);
        this.pos1.loadTexture("Default/ImageFile.png", 0);
        this.pos1.setUnifySizeEnabled(false);
        this.pos1.ignoreContentAdaptWithSize(false);
        this.pos1.setContentSize(cc.size(46, 46));
        this.pos1.setTouchEnabled(false);

        ///// # pos2
        this.pos2 = new ccui.ImageView();
        this.pos2.setName("pos2");
        this.imageBgr.addChild(this.pos2);
        this.pos2.setCascadeOpacityEnabled(true);
        this.pos2.setCascadeColorEnabled(true);
        this.pos2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.pos2, 0.6033, 0.0043);
        this.pos2.setOpacity(0);
        let pos2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.pos2);
        pos2LayoutComponent.setPositionPercentXEnabled(true);
        pos2LayoutComponent.setPositionPercentX(0.6033);
        pos2LayoutComponent.setPositionPercentYEnabled(true);
        pos2LayoutComponent.setPositionPercentY(0.0043);
        this.pos2.loadTexture("Default/ImageFile.png", 0);
        this.pos2.setUnifySizeEnabled(false);
        this.pos2.ignoreContentAdaptWithSize(false);
        this.pos2.setContentSize(cc.size(46, 46));
        this.pos2.setTouchEnabled(false);

        ///// # pos3
        this.pos3 = new ccui.ImageView();
        this.pos3.setName("pos3");
        this.imageBgr.addChild(this.pos3);
        this.pos3.setCascadeOpacityEnabled(true);
        this.pos3.setCascadeColorEnabled(true);
        this.pos3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.pos3, 0.808, 0.0425);
        this.pos3.setOpacity(0);
        let pos3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.pos3);
        pos3LayoutComponent.setPositionPercentXEnabled(true);
        pos3LayoutComponent.setPositionPercentX(0.808);
        pos3LayoutComponent.setPositionPercentYEnabled(true);
        pos3LayoutComponent.setPositionPercentY(0.0425);
        this.pos3.loadTexture("Default/ImageFile.png", 0);
        this.pos3.setUnifySizeEnabled(false);
        this.pos3.ignoreContentAdaptWithSize(false);
        this.pos3.setContentSize(cc.size(46, 46));
        this.pos3.setTouchEnabled(false);

        ///// # imgPos0
        this.imgPos0 = new ccui.ImageView();
        this.imgPos0.setName("imgPos0");
        this.imageBgr.addChild(this.imgPos0);
        this.imgPos0.setCascadeOpacityEnabled(true);
        this.imgPos0.setCascadeColorEnabled(true);
        this.imgPos0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgPos0, 0.2909, 0.4053);
        this.imgPos0.setOpacity(0);
        let imgPos0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgPos0);
        imgPos0LayoutComponent.setPositionPercentXEnabled(true);
        imgPos0LayoutComponent.setPositionPercentX(0.2909);
        imgPos0LayoutComponent.setPositionPercentYEnabled(true);
        imgPos0LayoutComponent.setPositionPercentY(0.4053);
        this.imgPos0.loadTexture("Default/ImageFile.png", 0);
        this.imgPos0.setUnifySizeEnabled(false);
        this.imgPos0.ignoreContentAdaptWithSize(false);
        this.imgPos0.setContentSize(cc.size(46, 46));
        this.imgPos0.setTouchEnabled(false);

        ///// # imgPos1
        this.imgPos1 = new ccui.ImageView();
        this.imgPos1.setName("imgPos1");
        this.imageBgr.addChild(this.imgPos1);
        this.imgPos1.setCascadeOpacityEnabled(true);
        this.imgPos1.setCascadeColorEnabled(true);
        this.imgPos1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgPos1, 0.506, 0.3798);
        this.imgPos1.setOpacity(0);
        let imgPos1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgPos1);
        imgPos1LayoutComponent.setPositionPercentXEnabled(true);
        imgPos1LayoutComponent.setPositionPercentX(0.506);
        imgPos1LayoutComponent.setPositionPercentYEnabled(true);
        imgPos1LayoutComponent.setPositionPercentY(0.3798);
        this.imgPos1.loadTexture("Default/ImageFile.png", 0);
        this.imgPos1.setUnifySizeEnabled(false);
        this.imgPos1.ignoreContentAdaptWithSize(false);
        this.imgPos1.setContentSize(cc.size(46, 46));
        this.imgPos1.setTouchEnabled(false);

        ///// # imgPos2
        this.imgPos2 = new ccui.ImageView();
        this.imgPos2.setName("imgPos2");
        this.imageBgr.addChild(this.imgPos2);
        this.imgPos2.setCascadeOpacityEnabled(true);
        this.imgPos2.setCascadeColorEnabled(true);
        this.imgPos2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgPos2, 0.7153, 0.4049);
        this.imgPos2.setOpacity(0);
        let imgPos2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgPos2);
        imgPos2LayoutComponent.setPositionPercentXEnabled(true);
        imgPos2LayoutComponent.setPositionPercentX(0.7153);
        imgPos2LayoutComponent.setPositionPercentYEnabled(true);
        imgPos2LayoutComponent.setPositionPercentY(0.4049);
        this.imgPos2.loadTexture("Default/ImageFile.png", 0);
        this.imgPos2.setUnifySizeEnabled(false);
        this.imgPos2.ignoreContentAdaptWithSize(false);
        this.imgPos2.setContentSize(cc.size(46, 46));
        this.imgPos2.setTouchEnabled(false);

        ///// # imgRotation
        this.imgRotation = new ccui.ImageView();
        this.imgRotation.setName("imgRotation");
        this.imageBgr.addChild(this.imgRotation);
        this.imgRotation.setCascadeOpacityEnabled(true);
        this.imgRotation.setCascadeColorEnabled(true);
        this.imgRotation.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this.imgRotation, 0.5, 0.7802);
        this.imgRotation.setRotationX(90);
        this.imgRotation.setRotationY(89.9961);
        this.imgRotation.setOpacity(0);
        let imgRotationLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgRotation);
        imgRotationLayoutComponent.setPositionPercentXEnabled(true);
        imgRotationLayoutComponent.setPositionPercentX(0.5);
        imgRotationLayoutComponent.setPositionPercentYEnabled(true);
        imgRotationLayoutComponent.setPositionPercentY(0.7802);
        this.imgRotation.loadTexture("Default/ImageFile.png", 0);
        this.imgRotation.setUnifySizeEnabled(false);
        this.imgRotation.ignoreContentAdaptWithSize(false);
        this.imgRotation.setContentSize(cc.size(490, 40));
        this.imgRotation.setTouchEnabled(false);

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

        ///// # _btnChannels
        this._btnChannels = new ccui.Button();
        this._btnChannels.setName("_btnChannels");
        this.imageBgr.addChild(this._btnChannels);
        this._btnChannels.setCascadeOpacityEnabled(true);
        this._btnChannels.setCascadeColorEnabled(true);
        this._btnChannels.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnChannels, 0.5, -0.17);
        let _btnChannelsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnChannels);
        _btnChannelsLayoutComponent.setPositionPercentXEnabled(true);
        _btnChannelsLayoutComponent.setPositionPercentX(0.5);
        _btnChannelsLayoutComponent.setPositionPercentYEnabled(true);
        _btnChannelsLayoutComponent.setPositionPercentY(-0.17);
        this._btnChannels.loadTextureDisabled("buttons/rectangles/Green_02.png", 1);
        this._btnChannels.loadTexturePressed("buttons/rectangles/Green_02.png", 1);
        this._btnChannels.loadTextureNormal("buttons/rectangles/Green_02.png", 1);
        this._btnChannels.setUnifySizeEnabled(false);
        this._btnChannels.ignoreContentAdaptWithSize(false);
        this._btnChannels.setScale9Enabled(true);
        this._btnChannels.setCapInsets(cc.rect(56, 0, 12, 67));
        this._btnChannels.setContentSize(cc.size(140, 60));
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

        ///// # _imgBonusItemsBgr
        this._imgBonusItemsBgr = new ccui.ImageView();
        this._imgBonusItemsBgr.setName("_imgBonusItemsBgr");
        this.imageBgr.addChild(this._imgBonusItemsBgr);
        this._imgBonusItemsBgr.setCascadeOpacityEnabled(true);
        this._imgBonusItemsBgr.setCascadeColorEnabled(true);
        this._imgBonusItemsBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBonusItemsBgr, 0.5, 1.0209);
        this._imgBonusItemsBgr.setScale(0.8, 0.8);
        let _imgBonusItemsBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBonusItemsBgr);
        _imgBonusItemsBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBonusItemsBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBonusItemsBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBonusItemsBgrLayoutComponent.setPositionPercentY(1.0209);
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

    },



});

/**
 * Create ExpPassPopupBuyPass
 * @returns {_ccs.ExpPassPopupBuyPass}
 */
_ccs.ExpPassPopupBuyPass.create = function () {
    return new _ccs.ExpPassPopupBuyPass();
};
