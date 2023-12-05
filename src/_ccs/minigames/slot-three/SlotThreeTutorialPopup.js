/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.SlotThreeTutorialPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.SlotThreeTutorialPopup = cc.Layer.extend({

    /** @type {ccui.ImageView} */
    _imgPopup: null,
    /** @type {ccui.ImageView} */
    _imgBanner: null,
    /** @type {ccui.ImageView} */
    _imgTitle: null,
    /** @type {ccui.Button} */
    _btnClose: null,
    /** @type {ccui.ListView} */
    _listView: null,
    /** @type {ccui.Layout} */
    _layoutLine_1: null,
    /** @type {ccui.ImageView} */
    _imgLine_1: null,
    /** @type {ccui.Layout} */
    _layoutLineIcon_12: null,
    /** @type {ccui.ImageView} */
    _imgLineIcon_12: null,
    /** @type {ccui.ImageView} */
    _imgBoard: null,
    /** @type {ccui.ImageView} */
    _imgIcon_12: null,
    /** @type {ccui.ImageView} */
    _imgIcon_12_0: null,
    /** @type {ccui.ImageView} */
    _imgIcon_12_0_0: null,
    /** @type {ccui.ImageView} */
    _imgGlow: null,
    /** @type {ccui.ImageView} */
    Image_12: null,
    /** @type {ck.Text} */
    _txtTutJackpot: null,
    /** @type {ck.Text} */
    Text_3: null,
    /** @type {ccui.Layout} */
    _layoutLineIcon_11: null,
    /** @type {ccui.ImageView} */
    _imgLineIcon_11: null,
    /** @type {ccui.ImageView} */
    _imgIcon_11_1: null,
    /** @type {ccui.ImageView} */
    _imgIcon_11_2: null,
    /** @type {ccui.ImageView} */
    _imgIcon_11_3: null,
    /** @type {ck.Text} */
    _txtPrizeIcon_11: null,
    /** @type {ccui.Layout} */
    _layoutLineIcon_10: null,
    /** @type {ccui.ImageView} */
    _imgLineIcon_10: null,
    /** @type {ccui.ImageView} */
    _imgIcon_10_1: null,
    /** @type {ccui.ImageView} */
    _imgIcon_10_2: null,
    /** @type {ccui.ImageView} */
    _imgIcon_10_3: null,
    /** @type {ck.Text} */
    _txtPrizeIcon_10: null,
    /** @type {ccui.Layout} */
    _layoutLineIcon_9: null,
    /** @type {ccui.ImageView} */
    _imgLineIcon_9: null,
    /** @type {ccui.ImageView} */
    _imgIcon_9_1: null,
    /** @type {ccui.ImageView} */
    _imgIcon_9_2: null,
    /** @type {ccui.ImageView} */
    _imgIcon_9_3: null,
    /** @type {ck.Text} */
    _txtPrizeIcon_9: null,
    /** @type {ccui.Layout} */
    _layoutLineIcon_8: null,
    /** @type {ccui.ImageView} */
    _imgLineIcon_8: null,
    /** @type {ccui.ImageView} */
    _imgIcon_8_1: null,
    /** @type {ccui.ImageView} */
    _imgIcon_8_2: null,
    /** @type {ccui.ImageView} */
    _imgIcon_8_3: null,
    /** @type {ck.Text} */
    _txtPrizeIcon_8: null,
    /** @type {ccui.Layout} */
    _layoutLineIcon_7: null,
    /** @type {ccui.ImageView} */
    _imgLineIcon_7: null,
    /** @type {ccui.ImageView} */
    _imgIcon_7_1: null,
    /** @type {ccui.ImageView} */
    _imgIcon_7_2: null,
    /** @type {ccui.ImageView} */
    _imgIcon_7_3: null,
    /** @type {ck.Text} */
    _txtPrizeIcon_7: null,
    /** @type {ccui.Layout} */
    _layoutLineIcon_6: null,
    /** @type {ccui.ImageView} */
    _imgLineIcon_6: null,
    /** @type {ccui.ImageView} */
    _imgIcon_6_1: null,
    /** @type {ccui.ImageView} */
    _imgIcon_6_2: null,
    /** @type {ccui.ImageView} */
    _imgIcon_6_3: null,
    /** @type {ck.Text} */
    _txtPrizeIcon_6: null,
    /** @type {ccui.Layout} */
    _layoutLineIcon_5: null,
    /** @type {ccui.ImageView} */
    _imgLineIcon_5: null,
    /** @type {ccui.ImageView} */
    _imgIcon_5_1: null,
    /** @type {ccui.ImageView} */
    _imgIcon_5_2: null,
    /** @type {ccui.ImageView} */
    _imgIcon_5_3: null,
    /** @type {ck.Text} */
    _txtPrizeIcon_5: null,
    /** @type {ccui.Layout} */
    _layoutLineIcon_4: null,
    /** @type {ccui.ImageView} */
    _imgLineIcon_4: null,
    /** @type {ccui.ImageView} */
    _imgIcon_4_1: null,
    /** @type {ccui.ImageView} */
    _imgIcon_4_2: null,
    /** @type {ccui.ImageView} */
    _imgIcon_4_3: null,
    /** @type {ck.Text} */
    _txtPrizeIcon_4: null,
    /** @type {ccui.Layout} */
    _layoutLineIcon_3: null,
    /** @type {ccui.ImageView} */
    _imgLineIcon_3: null,
    /** @type {ccui.ImageView} */
    _imgIcon_3_1: null,
    /** @type {ccui.ImageView} */
    _imgIcon_3_2: null,
    /** @type {ccui.ImageView} */
    _imgIcon_3_3: null,
    /** @type {ck.Text} */
    _txtPrizeIcon_3: null,
    /** @type {ccui.Layout} */
    _layoutLineIcon_2: null,
    /** @type {ccui.ImageView} */
    _imgLineIcon_2: null,
    /** @type {ccui.ImageView} */
    _imgIcon_2_1: null,
    /** @type {ccui.ImageView} */
    _imgIcon_2_2: null,
    /** @type {ccui.ImageView} */
    _imgIcon_2_3: null,
    /** @type {ck.Text} */
    _txtPrizeIcon_2: null,
    /** @type {ccui.Layout} */
    _layoutLineIcon_1: null,
    /** @type {ccui.ImageView} */
    _imgLineIcon_1: null,
    /** @type {ccui.ImageView} */
    _imgIcon_1_1: null,
    /** @type {ccui.ImageView} */
    _imgIcon_1_2: null,
    /** @type {ccui.ImageView} */
    _imgIcon_1_3: null,
    /** @type {ck.Text} */
    _txtPrizeIcon_1: null,
    /** @type {ck.Text} */
    _txtBet: null,
    /** @type {ccui.ImageView} */
    _imgIconBet: null,


    /**
     * _ccs.SlotThreeTutorialPopup constructor
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

        ///// # _imgPopup
        this._imgPopup = new ccui.ImageView();
        this._imgPopup.setName("_imgPopup");
        this.addChild(this._imgPopup);
        this._imgPopup.setCascadeOpacityEnabled(true);
        this._imgPopup.setCascadeColorEnabled(true);
        this._imgPopup.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPopup, 0.5, 0.5);
        let _imgPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPopup);
        _imgPopupLayoutComponent.setPositionPercentXEnabled(true);
        _imgPopupLayoutComponent.setPositionPercentX(0.5);
        _imgPopupLayoutComponent.setPositionPercentYEnabled(true);
        _imgPopupLayoutComponent.setPositionPercentY(0.5);
        this._imgPopup.loadTexture("sprites/minigames/slot-three/popup_light_blue.png", 0);
        this._imgPopup.setUnifySizeEnabled(false);
        this._imgPopup.ignoreContentAdaptWithSize(false);
        this._imgPopup.setContentSize(cc.size(520, 750));
        this._imgPopup.setTouchEnabled(false);

        ///// # _imgBanner
        this._imgBanner = new ccui.ImageView();
        this._imgBanner.setName("_imgBanner");
        this._imgPopup.addChild(this._imgBanner);
        this._imgBanner.setCascadeOpacityEnabled(true);
        this._imgBanner.setCascadeColorEnabled(true);
        this._imgBanner.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBanner, 0.5, 0.97);
        let _imgBannerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBanner);
        _imgBannerLayoutComponent.setPositionPercentXEnabled(true);
        _imgBannerLayoutComponent.setPositionPercentX(0.5);
        _imgBannerLayoutComponent.setPositionPercentYEnabled(true);
        _imgBannerLayoutComponent.setPositionPercentY(0.97);
        this._imgBanner.loadTexture("sprites/minigames/slot-three/bangron_xanh_2.png", 0);
        this._imgBanner.setUnifySizeEnabled(false);
        this._imgBanner.ignoreContentAdaptWithSize(false);
        this._imgBanner.setContentSize(cc.size(444, 114));
        this._imgBanner.setTouchEnabled(false);

        ///// # _imgTitle
        this._imgTitle = new ccui.ImageView();
        this._imgTitle.setName("_imgTitle");
        this._imgBanner.addChild(this._imgTitle);
        this._imgTitle.setCascadeOpacityEnabled(true);
        this._imgTitle.setCascadeColorEnabled(true);
        this._imgTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTitle, 0.5, 0.62);
        this._imgTitle.setScale(0.55, 0.55);
        let _imgTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTitle);
        _imgTitleLayoutComponent.setPositionPercentXEnabled(true);
        _imgTitleLayoutComponent.setPositionPercentX(0.5);
        _imgTitleLayoutComponent.setPositionPercentYEnabled(true);
        _imgTitleLayoutComponent.setPositionPercentY(0.62);
        this._imgTitle.loadTexture("sprites/minigames/slot-three/text_guide.png", 0);
        this._imgTitle.setUnifySizeEnabled(false);
        this._imgTitle.ignoreContentAdaptWithSize(false);
        this._imgTitle.setContentSize(cc.size(284, 142));
        this._imgTitle.setTouchEnabled(false);

        ///// # _btnClose
        this._btnClose = new ccui.Button();
        this._btnClose.setName("_btnClose");
        this._imgPopup.addChild(this._btnClose);
        this._btnClose.setCascadeOpacityEnabled(true);
        this._btnClose.setCascadeColorEnabled(true);
        this._btnClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnClose, 0.9822, 0.9408);
        let _btnCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnClose);
        this._btnClose.loadTextureDisabled("sprites/buttons/circles/CloseCircle.png", 0);
        this._btnClose.loadTexturePressed("sprites/buttons/circles/CloseCircle.png", 0);
        this._btnClose.loadTextureNormal("sprites/buttons/circles/CloseCircle.png", 0);
        this._btnClose.setUnifySizeEnabled(false);
        this._btnClose.ignoreContentAdaptWithSize(false);
        this._btnClose.setScale9Enabled(true);
        this._btnClose.setCapInsets(cc.rect(15, 11, 66, 86));
        this._btnClose.setContentSize(cc.size(96, 108));
        this._btnClose.setTouchEnabled(true);

        ///// # _listView
        this._listView = new ccui.ListView();
        this._listView.setName("_listView");
        this._imgPopup.addChild(this._listView);
        this._listView.setCascadeOpacityEnabled(true);
        this._listView.setCascadeColorEnabled(true);
        this._listView.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._listView, 0.5, 0.44);
        let _listViewLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._listView);
        _listViewLayoutComponent.setPositionPercentXEnabled(true);
        _listViewLayoutComponent.setPositionPercentX(0.5);
        _listViewLayoutComponent.setPositionPercentYEnabled(true);
        _listViewLayoutComponent.setPositionPercentY(0.44);
        this._listView.setTouchEnabled(true);
        this._listView.setUnifySizeEnabled(false);
        this._listView.ignoreContentAdaptWithSize(false);
        this._listView.setContentSize(cc.size(440, 580));
        this._listView.setDirection(ccui.ScrollView.DIR_VERTICAL);

        ///// # _layoutLine_1
        this._layoutLine_1 = new ccui.Layout();
        this._layoutLine_1.setName("_layoutLine_1");
        this._listView.pushBackCustomItem(this._layoutLine_1);
        this._layoutLine_1.setCascadeOpacityEnabled(true);
        this._layoutLine_1.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutLine_1, 0, 0.9915);
        let _layoutLine_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLine_1);
        this._layoutLine_1.setTouchEnabled(true);
        this._layoutLine_1.setUnifySizeEnabled(false);
        this._layoutLine_1.ignoreContentAdaptWithSize(false);
        this._layoutLine_1.setContentSize(cc.size(440, 10));

        ///// # _imgLine_1
        this._imgLine_1 = new ccui.ImageView();
        this._imgLine_1.setName("_imgLine_1");
        this._layoutLine_1.addChild(this._imgLine_1);
        this._imgLine_1.setCascadeOpacityEnabled(true);
        this._imgLine_1.setCascadeColorEnabled(true);
        this._imgLine_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLine_1, 0.5, 0.5);
        let _imgLine_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLine_1);
        _imgLine_1LayoutComponent.setPositionPercentXEnabled(true);
        _imgLine_1LayoutComponent.setPositionPercentX(0.5);
        _imgLine_1LayoutComponent.setPositionPercentYEnabled(true);
        _imgLine_1LayoutComponent.setPositionPercentY(0.5);
        this._imgLine_1.loadTexture("sprites/minigames/slot-three/line_light_blue.png", 0);
        this._imgLine_1.setUnifySizeEnabled(false);
        this._imgLine_1.ignoreContentAdaptWithSize(false);
        this._imgLine_1.setContentSize(cc.size(525, 3));
        this._imgLine_1.setTouchEnabled(false);

        ///// # _layoutLineIcon_12
        this._layoutLineIcon_12 = new ccui.Layout();
        this._layoutLineIcon_12.setName("_layoutLineIcon_12");
        this._listView.pushBackCustomItem(this._layoutLineIcon_12);
        this._layoutLineIcon_12.setCascadeOpacityEnabled(true);
        this._layoutLineIcon_12.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutLineIcon_12, 0, 0.839);
        let _layoutLineIcon_12LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLineIcon_12);
        this._layoutLineIcon_12.setTouchEnabled(true);
        this._layoutLineIcon_12.setUnifySizeEnabled(false);
        this._layoutLineIcon_12.ignoreContentAdaptWithSize(false);
        this._layoutLineIcon_12.setContentSize(cc.size(440, 180));

        ///// # _imgLineIcon_12
        this._imgLineIcon_12 = new ccui.ImageView();
        this._imgLineIcon_12.setName("_imgLineIcon_12");
        this._layoutLineIcon_12.addChild(this._imgLineIcon_12);
        this._imgLineIcon_12.setCascadeOpacityEnabled(true);
        this._imgLineIcon_12.setCascadeColorEnabled(true);
        this._imgLineIcon_12.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgLineIcon_12, 0.5, 0);
        let _imgLineIcon_12LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLineIcon_12);
        _imgLineIcon_12LayoutComponent.setPositionPercentXEnabled(true);
        _imgLineIcon_12LayoutComponent.setPositionPercentX(0.5);
        _imgLineIcon_12LayoutComponent.setPositionPercentYEnabled(true);
        _imgLineIcon_12LayoutComponent.setPositionPercentY(0);
        this._imgLineIcon_12.loadTexture("sprites/minigames/slot-three/bline_blue_dot.png", 0);
        this._imgLineIcon_12.setUnifySizeEnabled(false);
        this._imgLineIcon_12.ignoreContentAdaptWithSize(false);
        this._imgLineIcon_12.setContentSize(cc.size(525, 3));
        this._imgLineIcon_12.setTouchEnabled(false);

        ///// # _imgBoard
        this._imgBoard = new ccui.ImageView();
        this._imgBoard.setName("_imgBoard");
        this._layoutLineIcon_12.addChild(this._imgBoard);
        this._imgBoard.setCascadeOpacityEnabled(true);
        this._imgBoard.setCascadeColorEnabled(true);
        this._imgBoard.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBoard, 0.5, 0.51);
        let _imgBoardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBoard);
        _imgBoardLayoutComponent.setPositionPercentXEnabled(true);
        _imgBoardLayoutComponent.setPositionPercentX(0.5);
        _imgBoardLayoutComponent.setPositionPercentYEnabled(true);
        _imgBoardLayoutComponent.setPositionPercentY(0.51);
        this._imgBoard.loadTexture("sprites/minigames/slot-three/box_gold.png", 0);
        this._imgBoard.setUnifySizeEnabled(false);
        this._imgBoard.ignoreContentAdaptWithSize(false);
        this._imgBoard.setContentSize(cc.size(440, 160));
        this._imgBoard.setTouchEnabled(false);

        ///// # _imgIcon_12
        this._imgIcon_12 = new ccui.ImageView();
        this._imgIcon_12.setName("_imgIcon_12");
        this._imgBoard.addChild(this._imgIcon_12);
        this._imgIcon_12.setCascadeOpacityEnabled(true);
        this._imgIcon_12.setCascadeColorEnabled(true);
        this._imgIcon_12.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_12, 0.12, 0.72);
        let _imgIcon_12LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_12);
        _imgIcon_12LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_12LayoutComponent.setPositionPercentX(0.12);
        _imgIcon_12LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_12LayoutComponent.setPositionPercentY(0.72);
        this._imgIcon_12.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_12.png", 0);
        this._imgIcon_12.setUnifySizeEnabled(false);
        this._imgIcon_12.ignoreContentAdaptWithSize(false);
        this._imgIcon_12.setContentSize(cc.size(65, 55));
        this._imgIcon_12.setTouchEnabled(false);

        ///// # _imgIcon_12_0
        this._imgIcon_12_0 = new ccui.ImageView();
        this._imgIcon_12_0.setName("_imgIcon_12_0");
        this._imgBoard.addChild(this._imgIcon_12_0);
        this._imgIcon_12_0.setCascadeOpacityEnabled(true);
        this._imgIcon_12_0.setCascadeColorEnabled(true);
        this._imgIcon_12_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_12_0, 0.3, 0.72);
        let _imgIcon_12_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_12_0);
        _imgIcon_12_0LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_12_0LayoutComponent.setPositionPercentX(0.3);
        _imgIcon_12_0LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_12_0LayoutComponent.setPositionPercentY(0.72);
        this._imgIcon_12_0.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_12.png", 0);
        this._imgIcon_12_0.setUnifySizeEnabled(false);
        this._imgIcon_12_0.ignoreContentAdaptWithSize(false);
        this._imgIcon_12_0.setContentSize(cc.size(65, 55));
        this._imgIcon_12_0.setTouchEnabled(false);

        ///// # _imgIcon_12_0_0
        this._imgIcon_12_0_0 = new ccui.ImageView();
        this._imgIcon_12_0_0.setName("_imgIcon_12_0_0");
        this._imgBoard.addChild(this._imgIcon_12_0_0);
        this._imgIcon_12_0_0.setCascadeOpacityEnabled(true);
        this._imgIcon_12_0_0.setCascadeColorEnabled(true);
        this._imgIcon_12_0_0.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_12_0_0, 0.48, 0.72);
        let _imgIcon_12_0_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_12_0_0);
        _imgIcon_12_0_0LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_12_0_0LayoutComponent.setPositionPercentX(0.48);
        _imgIcon_12_0_0LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_12_0_0LayoutComponent.setPositionPercentY(0.72);
        this._imgIcon_12_0_0.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_12.png", 0);
        this._imgIcon_12_0_0.setUnifySizeEnabled(false);
        this._imgIcon_12_0_0.ignoreContentAdaptWithSize(false);
        this._imgIcon_12_0_0.setContentSize(cc.size(65, 55));
        this._imgIcon_12_0_0.setTouchEnabled(false);

        ///// # _imgGlow
        this._imgGlow = new ccui.ImageView();
        this._imgGlow.setName("_imgGlow");
        this._imgBoard.addChild(this._imgGlow);
        this._imgGlow.setCascadeOpacityEnabled(true);
        this._imgGlow.setCascadeColorEnabled(true);
        this._imgGlow.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGlow, 0.7762, 0.7125);
        let _imgGlowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGlow);
        _imgGlowLayoutComponent.setPositionPercentXEnabled(true);
        _imgGlowLayoutComponent.setPositionPercentX(0.7762);
        this._imgGlow.loadTexture("sprites/minigames/slot-three/glow_gold.png", 0);
        this._imgGlow.setUnifySizeEnabled(false);
        this._imgGlow.ignoreContentAdaptWithSize(false);
        this._imgGlow.setContentSize(cc.size(266, 113));
        this._imgGlow.setTouchEnabled(false);

        ///// # Image_12
        this.Image_12 = new ccui.ImageView();
        this.Image_12.setName("Image_12");
        this._imgGlow.addChild(this.Image_12);
        this.Image_12.setCascadeOpacityEnabled(true);
        this.Image_12.setCascadeColorEnabled(true);
        this.Image_12.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.Image_12, 0.5, 0.48);
        this.Image_12.setScale(0.8, 0.8);
        let Image_12LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.Image_12);
        Image_12LayoutComponent.setPositionPercentXEnabled(true);
        Image_12LayoutComponent.setPositionPercentX(0.5);
        Image_12LayoutComponent.setPositionPercentYEnabled(true);
        Image_12LayoutComponent.setPositionPercentY(0.48);
        this.Image_12.loadTexture("sprites/minigames/slot-three/title_jackpot_mini.png", 0);
        this.Image_12.setUnifySizeEnabled(false);
        this.Image_12.ignoreContentAdaptWithSize(false);
        this.Image_12.setContentSize(cc.size(214, 49));
        this.Image_12.setTouchEnabled(false);

        ///// # _txtTutJackpot
        this._txtTutJackpot = new ck.Text();
        this._txtTutJackpot.setName("_txtTutJackpot");
        this._imgBoard.addChild(this._txtTutJackpot);
        this._txtTutJackpot.setCascadeOpacityEnabled(true);
        this._txtTutJackpot.setCascadeColorEnabled(true);
        this._txtTutJackpot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTutJackpot, 0.53, 0.3111);
        this._txtTutJackpot.setTextColor(cc.color(133, 48, 17, 255));
        let _txtTutJackpotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTutJackpot);
        _txtTutJackpotLayoutComponent.setPositionPercentXEnabled(true);
        _txtTutJackpotLayoutComponent.setPositionPercentX(0.53);
        _txtTutJackpotLayoutComponent.setPositionPercentYEnabled(true);
        _txtTutJackpotLayoutComponent.setPositionPercentY(0.3111);
        this._txtTutJackpot.setTouchEnabled(false);
        this._txtTutJackpot.setUnifySizeEnabled(false);
        this._txtTutJackpot.ignoreContentAdaptWithSize(false);
        this._txtTutJackpot.setContentSize(cc.size(390, 61));
        this._txtTutJackpot.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTutJackpot.setDefaultFontSize(18);
        this._txtTutJackpot.setTextHorizontalAlignment(0);
        this._txtTutJackpot.setTextVerticalAlignment(0);

        ///// # Text_3
        this.Text_3 = new ck.Text();
        this.Text_3.setName("Text_3");
        this._imgBoard.addChild(this.Text_3);
        this.Text_3.setCascadeOpacityEnabled(true);
        this.Text_3.setCascadeColorEnabled(true);
        this.Text_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.Text_3, 0.0738, 0.3983);
        this.Text_3.setTextColor(cc.color(133, 48, 17, 255));
        let Text_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.Text_3);
        this.Text_3.setTouchEnabled(false);
        this.Text_3.ignoreContentAdaptWithSize(true);
        this.Text_3.setDefaultFontSize(25);
        this.Text_3.setString("*");
        this.Text_3.setTextHorizontalAlignment(0);
        this.Text_3.setTextVerticalAlignment(0);

        ///// # _layoutLineIcon_11
        this._layoutLineIcon_11 = new ccui.Layout();
        this._layoutLineIcon_11.setName("_layoutLineIcon_11");
        this._listView.pushBackCustomItem(this._layoutLineIcon_11);
        this._layoutLineIcon_11.setCascadeOpacityEnabled(true);
        this._layoutLineIcon_11.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutLineIcon_11, 0, 0.7627);
        let _layoutLineIcon_11LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLineIcon_11);
        this._layoutLineIcon_11.setTouchEnabled(true);
        this._layoutLineIcon_11.setUnifySizeEnabled(false);
        this._layoutLineIcon_11.ignoreContentAdaptWithSize(false);
        this._layoutLineIcon_11.setContentSize(cc.size(440, 90));

        ///// # _imgLineIcon_11
        this._imgLineIcon_11 = new ccui.ImageView();
        this._imgLineIcon_11.setName("_imgLineIcon_11");
        this._layoutLineIcon_11.addChild(this._imgLineIcon_11);
        this._imgLineIcon_11.setCascadeOpacityEnabled(true);
        this._imgLineIcon_11.setCascadeColorEnabled(true);
        this._imgLineIcon_11.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLineIcon_11, 0.5, 0);
        let _imgLineIcon_11LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLineIcon_11);
        _imgLineIcon_11LayoutComponent.setPositionPercentXEnabled(true);
        _imgLineIcon_11LayoutComponent.setPositionPercentX(0.5);
        _imgLineIcon_11LayoutComponent.setPositionPercentYEnabled(true);
        _imgLineIcon_11LayoutComponent.setPositionPercentY(0);
        this._imgLineIcon_11.loadTexture("sprites/minigames/slot-three/bline_blue_dot.png", 0);
        this._imgLineIcon_11.setUnifySizeEnabled(false);
        this._imgLineIcon_11.ignoreContentAdaptWithSize(false);
        this._imgLineIcon_11.setContentSize(cc.size(525, 3));
        this._imgLineIcon_11.setTouchEnabled(false);

        ///// # _imgIcon_11_1
        this._imgIcon_11_1 = new ccui.ImageView();
        this._imgIcon_11_1.setName("_imgIcon_11_1");
        this._layoutLineIcon_11.addChild(this._imgIcon_11_1);
        this._imgIcon_11_1.setCascadeOpacityEnabled(true);
        this._imgIcon_11_1.setCascadeColorEnabled(true);
        this._imgIcon_11_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_11_1, 0.1, 0.5);
        let _imgIcon_11_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_11_1);
        _imgIcon_11_1LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_11_1LayoutComponent.setPositionPercentX(0.1);
        _imgIcon_11_1LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_11_1LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_11_1.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_11.png", 0);
        this._imgIcon_11_1.setUnifySizeEnabled(false);
        this._imgIcon_11_1.ignoreContentAdaptWithSize(false);
        this._imgIcon_11_1.setContentSize(cc.size(65, 69));
        this._imgIcon_11_1.setTouchEnabled(false);

        ///// # _imgIcon_11_2
        this._imgIcon_11_2 = new ccui.ImageView();
        this._imgIcon_11_2.setName("_imgIcon_11_2");
        this._layoutLineIcon_11.addChild(this._imgIcon_11_2);
        this._imgIcon_11_2.setCascadeOpacityEnabled(true);
        this._imgIcon_11_2.setCascadeColorEnabled(true);
        this._imgIcon_11_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_11_2, 0.3, 0.5);
        let _imgIcon_11_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_11_2);
        _imgIcon_11_2LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_11_2LayoutComponent.setPositionPercentX(0.3);
        _imgIcon_11_2LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_11_2LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_11_2.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_11.png", 0);
        this._imgIcon_11_2.setUnifySizeEnabled(false);
        this._imgIcon_11_2.ignoreContentAdaptWithSize(false);
        this._imgIcon_11_2.setContentSize(cc.size(65, 69));
        this._imgIcon_11_2.setTouchEnabled(false);

        ///// # _imgIcon_11_3
        this._imgIcon_11_3 = new ccui.ImageView();
        this._imgIcon_11_3.setName("_imgIcon_11_3");
        this._layoutLineIcon_11.addChild(this._imgIcon_11_3);
        this._imgIcon_11_3.setCascadeOpacityEnabled(true);
        this._imgIcon_11_3.setCascadeColorEnabled(true);
        this._imgIcon_11_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_11_3, 0.5, 0.5);
        let _imgIcon_11_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_11_3);
        _imgIcon_11_3LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_11_3LayoutComponent.setPositionPercentX(0.5);
        _imgIcon_11_3LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_11_3LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_11_3.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_11.png", 0);
        this._imgIcon_11_3.setUnifySizeEnabled(false);
        this._imgIcon_11_3.ignoreContentAdaptWithSize(false);
        this._imgIcon_11_3.setContentSize(cc.size(65, 69));
        this._imgIcon_11_3.setTouchEnabled(false);

        ///// # _txtPrizeIcon_11
        this._txtPrizeIcon_11 = new ck.Text();
        this._txtPrizeIcon_11.setName("_txtPrizeIcon_11");
        this._layoutLineIcon_11.addChild(this._txtPrizeIcon_11);
        this._txtPrizeIcon_11.setCascadeOpacityEnabled(true);
        this._txtPrizeIcon_11.setCascadeColorEnabled(true);
        this._txtPrizeIcon_11.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPrizeIcon_11, 0.92, 0.55);
        this._txtPrizeIcon_11.setTextColor(cc.color(255, 202, 17, 255));
        let _txtPrizeIcon_11LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPrizeIcon_11);
        _txtPrizeIcon_11LayoutComponent.setPositionPercentXEnabled(true);
        _txtPrizeIcon_11LayoutComponent.setPositionPercentX(0.92);
        _txtPrizeIcon_11LayoutComponent.setPositionPercentYEnabled(true);
        _txtPrizeIcon_11LayoutComponent.setPositionPercentY(0.55);
        this._txtPrizeIcon_11.setTouchEnabled(false);
        this._txtPrizeIcon_11.ignoreContentAdaptWithSize(true);
        this._txtPrizeIcon_11.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtPrizeIcon_11.setDefaultFontSize(35);
        this._txtPrizeIcon_11.setTextHorizontalAlignment(0);
        this._txtPrizeIcon_11.setTextVerticalAlignment(0);
        this._txtPrizeIcon_11.enableOutline(cc.color(130, 51, 20, 255), 2);

        ///// # _layoutLineIcon_10
        this._layoutLineIcon_10 = new ccui.Layout();
        this._layoutLineIcon_10.setName("_layoutLineIcon_10");
        this._listView.pushBackCustomItem(this._layoutLineIcon_10);
        this._layoutLineIcon_10.setCascadeOpacityEnabled(true);
        this._layoutLineIcon_10.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutLineIcon_10, 0, 0.6864);
        let _layoutLineIcon_10LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLineIcon_10);
        this._layoutLineIcon_10.setTouchEnabled(true);
        this._layoutLineIcon_10.setUnifySizeEnabled(false);
        this._layoutLineIcon_10.ignoreContentAdaptWithSize(false);
        this._layoutLineIcon_10.setContentSize(cc.size(440, 90));

        ///// # _imgLineIcon_10
        this._imgLineIcon_10 = new ccui.ImageView();
        this._imgLineIcon_10.setName("_imgLineIcon_10");
        this._layoutLineIcon_10.addChild(this._imgLineIcon_10);
        this._imgLineIcon_10.setCascadeOpacityEnabled(true);
        this._imgLineIcon_10.setCascadeColorEnabled(true);
        this._imgLineIcon_10.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLineIcon_10, 0.5, 0);
        let _imgLineIcon_10LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLineIcon_10);
        _imgLineIcon_10LayoutComponent.setPositionPercentXEnabled(true);
        _imgLineIcon_10LayoutComponent.setPositionPercentX(0.5);
        _imgLineIcon_10LayoutComponent.setPositionPercentYEnabled(true);
        _imgLineIcon_10LayoutComponent.setPositionPercentY(0);
        this._imgLineIcon_10.loadTexture("sprites/minigames/slot-three/bline_blue_dot.png", 0);
        this._imgLineIcon_10.setUnifySizeEnabled(false);
        this._imgLineIcon_10.ignoreContentAdaptWithSize(false);
        this._imgLineIcon_10.setContentSize(cc.size(525, 3));
        this._imgLineIcon_10.setTouchEnabled(false);

        ///// # _imgIcon_10_1
        this._imgIcon_10_1 = new ccui.ImageView();
        this._imgIcon_10_1.setName("_imgIcon_10_1");
        this._layoutLineIcon_10.addChild(this._imgIcon_10_1);
        this._imgIcon_10_1.setCascadeOpacityEnabled(true);
        this._imgIcon_10_1.setCascadeColorEnabled(true);
        this._imgIcon_10_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_10_1, 0.1, 0.5);
        let _imgIcon_10_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_10_1);
        _imgIcon_10_1LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_10_1LayoutComponent.setPositionPercentX(0.1);
        _imgIcon_10_1LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_10_1LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_10_1.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_10.png", 0);
        this._imgIcon_10_1.setUnifySizeEnabled(false);
        this._imgIcon_10_1.ignoreContentAdaptWithSize(false);
        this._imgIcon_10_1.setContentSize(cc.size(65, 65));
        this._imgIcon_10_1.setTouchEnabled(false);

        ///// # _imgIcon_10_2
        this._imgIcon_10_2 = new ccui.ImageView();
        this._imgIcon_10_2.setName("_imgIcon_10_2");
        this._layoutLineIcon_10.addChild(this._imgIcon_10_2);
        this._imgIcon_10_2.setCascadeOpacityEnabled(true);
        this._imgIcon_10_2.setCascadeColorEnabled(true);
        this._imgIcon_10_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_10_2, 0.3, 0.5);
        let _imgIcon_10_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_10_2);
        _imgIcon_10_2LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_10_2LayoutComponent.setPositionPercentX(0.3);
        _imgIcon_10_2LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_10_2LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_10_2.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_10.png", 0);
        this._imgIcon_10_2.setUnifySizeEnabled(false);
        this._imgIcon_10_2.ignoreContentAdaptWithSize(false);
        this._imgIcon_10_2.setContentSize(cc.size(65, 65));
        this._imgIcon_10_2.setTouchEnabled(false);

        ///// # _imgIcon_10_3
        this._imgIcon_10_3 = new ccui.ImageView();
        this._imgIcon_10_3.setName("_imgIcon_10_3");
        this._layoutLineIcon_10.addChild(this._imgIcon_10_3);
        this._imgIcon_10_3.setCascadeOpacityEnabled(true);
        this._imgIcon_10_3.setCascadeColorEnabled(true);
        this._imgIcon_10_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_10_3, 0.5, 0.5);
        let _imgIcon_10_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_10_3);
        _imgIcon_10_3LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_10_3LayoutComponent.setPositionPercentX(0.5);
        _imgIcon_10_3LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_10_3LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_10_3.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_10.png", 0);
        this._imgIcon_10_3.setUnifySizeEnabled(false);
        this._imgIcon_10_3.ignoreContentAdaptWithSize(false);
        this._imgIcon_10_3.setContentSize(cc.size(65, 65));
        this._imgIcon_10_3.setTouchEnabled(false);

        ///// # _txtPrizeIcon_10
        this._txtPrizeIcon_10 = new ck.Text();
        this._txtPrizeIcon_10.setName("_txtPrizeIcon_10");
        this._layoutLineIcon_10.addChild(this._txtPrizeIcon_10);
        this._txtPrizeIcon_10.setCascadeOpacityEnabled(true);
        this._txtPrizeIcon_10.setCascadeColorEnabled(true);
        this._txtPrizeIcon_10.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPrizeIcon_10, 0.92, 0.55);
        this._txtPrizeIcon_10.setTextColor(cc.color(255, 202, 17, 255));
        let _txtPrizeIcon_10LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPrizeIcon_10);
        _txtPrizeIcon_10LayoutComponent.setPositionPercentXEnabled(true);
        _txtPrizeIcon_10LayoutComponent.setPositionPercentX(0.92);
        _txtPrizeIcon_10LayoutComponent.setPositionPercentYEnabled(true);
        _txtPrizeIcon_10LayoutComponent.setPositionPercentY(0.55);
        this._txtPrizeIcon_10.setTouchEnabled(false);
        this._txtPrizeIcon_10.ignoreContentAdaptWithSize(true);
        this._txtPrizeIcon_10.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtPrizeIcon_10.setDefaultFontSize(35);
        this._txtPrizeIcon_10.setTextHorizontalAlignment(0);
        this._txtPrizeIcon_10.setTextVerticalAlignment(0);
        this._txtPrizeIcon_10.enableOutline(cc.color(130, 51, 20, 255), 2);

        ///// # _layoutLineIcon_9
        this._layoutLineIcon_9 = new ccui.Layout();
        this._layoutLineIcon_9.setName("_layoutLineIcon_9");
        this._listView.pushBackCustomItem(this._layoutLineIcon_9);
        this._layoutLineIcon_9.setCascadeOpacityEnabled(true);
        this._layoutLineIcon_9.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutLineIcon_9, 0, 0.6102);
        let _layoutLineIcon_9LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLineIcon_9);
        this._layoutLineIcon_9.setTouchEnabled(true);
        this._layoutLineIcon_9.setUnifySizeEnabled(false);
        this._layoutLineIcon_9.ignoreContentAdaptWithSize(false);
        this._layoutLineIcon_9.setContentSize(cc.size(440, 90));

        ///// # _imgLineIcon_9
        this._imgLineIcon_9 = new ccui.ImageView();
        this._imgLineIcon_9.setName("_imgLineIcon_9");
        this._layoutLineIcon_9.addChild(this._imgLineIcon_9);
        this._imgLineIcon_9.setCascadeOpacityEnabled(true);
        this._imgLineIcon_9.setCascadeColorEnabled(true);
        this._imgLineIcon_9.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLineIcon_9, 0.5, 0);
        let _imgLineIcon_9LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLineIcon_9);
        _imgLineIcon_9LayoutComponent.setPositionPercentXEnabled(true);
        _imgLineIcon_9LayoutComponent.setPositionPercentX(0.5);
        _imgLineIcon_9LayoutComponent.setPositionPercentYEnabled(true);
        _imgLineIcon_9LayoutComponent.setPositionPercentY(0);
        this._imgLineIcon_9.loadTexture("sprites/minigames/slot-three/bline_blue_dot.png", 0);
        this._imgLineIcon_9.setUnifySizeEnabled(false);
        this._imgLineIcon_9.ignoreContentAdaptWithSize(false);
        this._imgLineIcon_9.setContentSize(cc.size(525, 3));
        this._imgLineIcon_9.setTouchEnabled(false);

        ///// # _imgIcon_9_1
        this._imgIcon_9_1 = new ccui.ImageView();
        this._imgIcon_9_1.setName("_imgIcon_9_1");
        this._layoutLineIcon_9.addChild(this._imgIcon_9_1);
        this._imgIcon_9_1.setCascadeOpacityEnabled(true);
        this._imgIcon_9_1.setCascadeColorEnabled(true);
        this._imgIcon_9_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_9_1, 0.1, 0.5);
        let _imgIcon_9_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_9_1);
        _imgIcon_9_1LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_9_1LayoutComponent.setPositionPercentX(0.1);
        _imgIcon_9_1LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_9_1LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_9_1.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_9.png", 0);
        this._imgIcon_9_1.setUnifySizeEnabled(false);
        this._imgIcon_9_1.ignoreContentAdaptWithSize(false);
        this._imgIcon_9_1.setContentSize(cc.size(65, 63));
        this._imgIcon_9_1.setTouchEnabled(false);

        ///// # _imgIcon_9_2
        this._imgIcon_9_2 = new ccui.ImageView();
        this._imgIcon_9_2.setName("_imgIcon_9_2");
        this._layoutLineIcon_9.addChild(this._imgIcon_9_2);
        this._imgIcon_9_2.setCascadeOpacityEnabled(true);
        this._imgIcon_9_2.setCascadeColorEnabled(true);
        this._imgIcon_9_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_9_2, 0.3, 0.5);
        let _imgIcon_9_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_9_2);
        _imgIcon_9_2LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_9_2LayoutComponent.setPositionPercentX(0.3);
        _imgIcon_9_2LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_9_2LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_9_2.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_9.png", 0);
        this._imgIcon_9_2.setUnifySizeEnabled(false);
        this._imgIcon_9_2.ignoreContentAdaptWithSize(false);
        this._imgIcon_9_2.setContentSize(cc.size(65, 63));
        this._imgIcon_9_2.setTouchEnabled(false);

        ///// # _imgIcon_9_3
        this._imgIcon_9_3 = new ccui.ImageView();
        this._imgIcon_9_3.setName("_imgIcon_9_3");
        this._layoutLineIcon_9.addChild(this._imgIcon_9_3);
        this._imgIcon_9_3.setCascadeOpacityEnabled(true);
        this._imgIcon_9_3.setCascadeColorEnabled(true);
        this._imgIcon_9_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_9_3, 0.5, 0.5);
        let _imgIcon_9_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_9_3);
        _imgIcon_9_3LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_9_3LayoutComponent.setPositionPercentX(0.5);
        _imgIcon_9_3LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_9_3LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_9_3.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_9.png", 0);
        this._imgIcon_9_3.setUnifySizeEnabled(false);
        this._imgIcon_9_3.ignoreContentAdaptWithSize(false);
        this._imgIcon_9_3.setContentSize(cc.size(65, 63));
        this._imgIcon_9_3.setTouchEnabled(false);

        ///// # _txtPrizeIcon_9
        this._txtPrizeIcon_9 = new ck.Text();
        this._txtPrizeIcon_9.setName("_txtPrizeIcon_9");
        this._layoutLineIcon_9.addChild(this._txtPrizeIcon_9);
        this._txtPrizeIcon_9.setCascadeOpacityEnabled(true);
        this._txtPrizeIcon_9.setCascadeColorEnabled(true);
        this._txtPrizeIcon_9.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPrizeIcon_9, 0.92, 0.55);
        this._txtPrizeIcon_9.setTextColor(cc.color(255, 202, 17, 255));
        let _txtPrizeIcon_9LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPrizeIcon_9);
        _txtPrizeIcon_9LayoutComponent.setPositionPercentXEnabled(true);
        _txtPrizeIcon_9LayoutComponent.setPositionPercentX(0.92);
        _txtPrizeIcon_9LayoutComponent.setPositionPercentYEnabled(true);
        _txtPrizeIcon_9LayoutComponent.setPositionPercentY(0.55);
        this._txtPrizeIcon_9.setTouchEnabled(false);
        this._txtPrizeIcon_9.ignoreContentAdaptWithSize(true);
        this._txtPrizeIcon_9.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtPrizeIcon_9.setDefaultFontSize(35);
        this._txtPrizeIcon_9.setTextHorizontalAlignment(0);
        this._txtPrizeIcon_9.setTextVerticalAlignment(0);
        this._txtPrizeIcon_9.enableOutline(cc.color(130, 51, 20, 255), 2);

        ///// # _layoutLineIcon_8
        this._layoutLineIcon_8 = new ccui.Layout();
        this._layoutLineIcon_8.setName("_layoutLineIcon_8");
        this._listView.pushBackCustomItem(this._layoutLineIcon_8);
        this._layoutLineIcon_8.setCascadeOpacityEnabled(true);
        this._layoutLineIcon_8.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutLineIcon_8, 0, 0.5339);
        let _layoutLineIcon_8LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLineIcon_8);
        this._layoutLineIcon_8.setTouchEnabled(true);
        this._layoutLineIcon_8.setUnifySizeEnabled(false);
        this._layoutLineIcon_8.ignoreContentAdaptWithSize(false);
        this._layoutLineIcon_8.setContentSize(cc.size(440, 90));

        ///// # _imgLineIcon_8
        this._imgLineIcon_8 = new ccui.ImageView();
        this._imgLineIcon_8.setName("_imgLineIcon_8");
        this._layoutLineIcon_8.addChild(this._imgLineIcon_8);
        this._imgLineIcon_8.setCascadeOpacityEnabled(true);
        this._imgLineIcon_8.setCascadeColorEnabled(true);
        this._imgLineIcon_8.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLineIcon_8, 0.5, 0);
        let _imgLineIcon_8LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLineIcon_8);
        _imgLineIcon_8LayoutComponent.setPositionPercentXEnabled(true);
        _imgLineIcon_8LayoutComponent.setPositionPercentX(0.5);
        _imgLineIcon_8LayoutComponent.setPositionPercentYEnabled(true);
        _imgLineIcon_8LayoutComponent.setPositionPercentY(0);
        this._imgLineIcon_8.loadTexture("sprites/minigames/slot-three/bline_blue_dot.png", 0);
        this._imgLineIcon_8.setUnifySizeEnabled(false);
        this._imgLineIcon_8.ignoreContentAdaptWithSize(false);
        this._imgLineIcon_8.setContentSize(cc.size(525, 3));
        this._imgLineIcon_8.setTouchEnabled(false);

        ///// # _imgIcon_8_1
        this._imgIcon_8_1 = new ccui.ImageView();
        this._imgIcon_8_1.setName("_imgIcon_8_1");
        this._layoutLineIcon_8.addChild(this._imgIcon_8_1);
        this._imgIcon_8_1.setCascadeOpacityEnabled(true);
        this._imgIcon_8_1.setCascadeColorEnabled(true);
        this._imgIcon_8_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_8_1, 0.1, 0.5);
        let _imgIcon_8_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_8_1);
        _imgIcon_8_1LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_8_1LayoutComponent.setPositionPercentX(0.1);
        _imgIcon_8_1LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_8_1LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_8_1.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_8.png", 0);
        this._imgIcon_8_1.setUnifySizeEnabled(false);
        this._imgIcon_8_1.ignoreContentAdaptWithSize(false);
        this._imgIcon_8_1.setContentSize(cc.size(65, 64));
        this._imgIcon_8_1.setTouchEnabled(false);

        ///// # _imgIcon_8_2
        this._imgIcon_8_2 = new ccui.ImageView();
        this._imgIcon_8_2.setName("_imgIcon_8_2");
        this._layoutLineIcon_8.addChild(this._imgIcon_8_2);
        this._imgIcon_8_2.setCascadeOpacityEnabled(true);
        this._imgIcon_8_2.setCascadeColorEnabled(true);
        this._imgIcon_8_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_8_2, 0.3, 0.5);
        let _imgIcon_8_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_8_2);
        _imgIcon_8_2LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_8_2LayoutComponent.setPositionPercentX(0.3);
        _imgIcon_8_2LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_8_2LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_8_2.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_8.png", 0);
        this._imgIcon_8_2.setUnifySizeEnabled(false);
        this._imgIcon_8_2.ignoreContentAdaptWithSize(false);
        this._imgIcon_8_2.setContentSize(cc.size(65, 64));
        this._imgIcon_8_2.setTouchEnabled(false);

        ///// # _imgIcon_8_3
        this._imgIcon_8_3 = new ccui.ImageView();
        this._imgIcon_8_3.setName("_imgIcon_8_3");
        this._layoutLineIcon_8.addChild(this._imgIcon_8_3);
        this._imgIcon_8_3.setCascadeOpacityEnabled(true);
        this._imgIcon_8_3.setCascadeColorEnabled(true);
        this._imgIcon_8_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_8_3, 0.5, 0.5);
        let _imgIcon_8_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_8_3);
        _imgIcon_8_3LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_8_3LayoutComponent.setPositionPercentX(0.5);
        _imgIcon_8_3LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_8_3LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_8_3.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_8.png", 0);
        this._imgIcon_8_3.setUnifySizeEnabled(false);
        this._imgIcon_8_3.ignoreContentAdaptWithSize(false);
        this._imgIcon_8_3.setContentSize(cc.size(65, 64));
        this._imgIcon_8_3.setTouchEnabled(false);

        ///// # _txtPrizeIcon_8
        this._txtPrizeIcon_8 = new ck.Text();
        this._txtPrizeIcon_8.setName("_txtPrizeIcon_8");
        this._layoutLineIcon_8.addChild(this._txtPrizeIcon_8);
        this._txtPrizeIcon_8.setCascadeOpacityEnabled(true);
        this._txtPrizeIcon_8.setCascadeColorEnabled(true);
        this._txtPrizeIcon_8.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPrizeIcon_8, 0.92, 0.55);
        let _txtPrizeIcon_8LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPrizeIcon_8);
        _txtPrizeIcon_8LayoutComponent.setPositionPercentXEnabled(true);
        _txtPrizeIcon_8LayoutComponent.setPositionPercentX(0.92);
        _txtPrizeIcon_8LayoutComponent.setPositionPercentYEnabled(true);
        _txtPrizeIcon_8LayoutComponent.setPositionPercentY(0.55);
        this._txtPrizeIcon_8.setTouchEnabled(false);
        this._txtPrizeIcon_8.ignoreContentAdaptWithSize(true);
        this._txtPrizeIcon_8.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtPrizeIcon_8.setDefaultFontSize(35);
        this._txtPrizeIcon_8.setTextHorizontalAlignment(0);
        this._txtPrizeIcon_8.setTextVerticalAlignment(0);
        this._txtPrizeIcon_8.enableOutline(cc.color(37, 94, 155, 255), 2);

        ///// # _layoutLineIcon_7
        this._layoutLineIcon_7 = new ccui.Layout();
        this._layoutLineIcon_7.setName("_layoutLineIcon_7");
        this._listView.pushBackCustomItem(this._layoutLineIcon_7);
        this._layoutLineIcon_7.setCascadeOpacityEnabled(true);
        this._layoutLineIcon_7.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutLineIcon_7, 0, 0.4576);
        let _layoutLineIcon_7LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLineIcon_7);
        this._layoutLineIcon_7.setTouchEnabled(true);
        this._layoutLineIcon_7.setUnifySizeEnabled(false);
        this._layoutLineIcon_7.ignoreContentAdaptWithSize(false);
        this._layoutLineIcon_7.setContentSize(cc.size(440, 90));

        ///// # _imgLineIcon_7
        this._imgLineIcon_7 = new ccui.ImageView();
        this._imgLineIcon_7.setName("_imgLineIcon_7");
        this._layoutLineIcon_7.addChild(this._imgLineIcon_7);
        this._imgLineIcon_7.setCascadeOpacityEnabled(true);
        this._imgLineIcon_7.setCascadeColorEnabled(true);
        this._imgLineIcon_7.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLineIcon_7, 0.5, 0);
        let _imgLineIcon_7LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLineIcon_7);
        _imgLineIcon_7LayoutComponent.setPositionPercentXEnabled(true);
        _imgLineIcon_7LayoutComponent.setPositionPercentX(0.5);
        _imgLineIcon_7LayoutComponent.setPositionPercentYEnabled(true);
        _imgLineIcon_7LayoutComponent.setPositionPercentY(0);
        this._imgLineIcon_7.loadTexture("sprites/minigames/slot-three/bline_blue_dot.png", 0);
        this._imgLineIcon_7.setUnifySizeEnabled(false);
        this._imgLineIcon_7.ignoreContentAdaptWithSize(false);
        this._imgLineIcon_7.setContentSize(cc.size(525, 3));
        this._imgLineIcon_7.setTouchEnabled(false);

        ///// # _imgIcon_7_1
        this._imgIcon_7_1 = new ccui.ImageView();
        this._imgIcon_7_1.setName("_imgIcon_7_1");
        this._layoutLineIcon_7.addChild(this._imgIcon_7_1);
        this._imgIcon_7_1.setCascadeOpacityEnabled(true);
        this._imgIcon_7_1.setCascadeColorEnabled(true);
        this._imgIcon_7_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_7_1, 0.1, 0.5);
        let _imgIcon_7_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_7_1);
        _imgIcon_7_1LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_7_1LayoutComponent.setPositionPercentX(0.1);
        _imgIcon_7_1LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_7_1LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_7_1.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_7.png", 0);
        this._imgIcon_7_1.setUnifySizeEnabled(false);
        this._imgIcon_7_1.ignoreContentAdaptWithSize(false);
        this._imgIcon_7_1.setContentSize(cc.size(65, 64));
        this._imgIcon_7_1.setTouchEnabled(false);

        ///// # _imgIcon_7_2
        this._imgIcon_7_2 = new ccui.ImageView();
        this._imgIcon_7_2.setName("_imgIcon_7_2");
        this._layoutLineIcon_7.addChild(this._imgIcon_7_2);
        this._imgIcon_7_2.setCascadeOpacityEnabled(true);
        this._imgIcon_7_2.setCascadeColorEnabled(true);
        this._imgIcon_7_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_7_2, 0.3, 0.5);
        this._imgIcon_7_2.setScale(1, 1.0667);
        let _imgIcon_7_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_7_2);
        _imgIcon_7_2LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_7_2LayoutComponent.setPositionPercentX(0.3);
        _imgIcon_7_2LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_7_2LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_7_2.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_7.png", 0);
        this._imgIcon_7_2.setUnifySizeEnabled(false);
        this._imgIcon_7_2.ignoreContentAdaptWithSize(false);
        this._imgIcon_7_2.setContentSize(cc.size(65, 64));
        this._imgIcon_7_2.setTouchEnabled(false);

        ///// # _imgIcon_7_3
        this._imgIcon_7_3 = new ccui.ImageView();
        this._imgIcon_7_3.setName("_imgIcon_7_3");
        this._layoutLineIcon_7.addChild(this._imgIcon_7_3);
        this._imgIcon_7_3.setCascadeOpacityEnabled(true);
        this._imgIcon_7_3.setCascadeColorEnabled(true);
        this._imgIcon_7_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_7_3, 0.5, 0.5);
        let _imgIcon_7_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_7_3);
        _imgIcon_7_3LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_7_3LayoutComponent.setPositionPercentX(0.5);
        _imgIcon_7_3LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_7_3LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_7_3.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_7.png", 0);
        this._imgIcon_7_3.setUnifySizeEnabled(false);
        this._imgIcon_7_3.ignoreContentAdaptWithSize(false);
        this._imgIcon_7_3.setContentSize(cc.size(65, 64));
        this._imgIcon_7_3.setTouchEnabled(false);

        ///// # _txtPrizeIcon_7
        this._txtPrizeIcon_7 = new ck.Text();
        this._txtPrizeIcon_7.setName("_txtPrizeIcon_7");
        this._layoutLineIcon_7.addChild(this._txtPrizeIcon_7);
        this._txtPrizeIcon_7.setCascadeOpacityEnabled(true);
        this._txtPrizeIcon_7.setCascadeColorEnabled(true);
        this._txtPrizeIcon_7.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPrizeIcon_7, 0.92, 0.55);
        let _txtPrizeIcon_7LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPrizeIcon_7);
        _txtPrizeIcon_7LayoutComponent.setPositionPercentXEnabled(true);
        _txtPrizeIcon_7LayoutComponent.setPositionPercentX(0.92);
        _txtPrizeIcon_7LayoutComponent.setPositionPercentYEnabled(true);
        _txtPrizeIcon_7LayoutComponent.setPositionPercentY(0.55);
        this._txtPrizeIcon_7.setTouchEnabled(false);
        this._txtPrizeIcon_7.ignoreContentAdaptWithSize(true);
        this._txtPrizeIcon_7.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtPrizeIcon_7.setDefaultFontSize(35);
        this._txtPrizeIcon_7.setTextHorizontalAlignment(0);
        this._txtPrizeIcon_7.setTextVerticalAlignment(0);
        this._txtPrizeIcon_7.enableOutline(cc.color(37, 94, 155, 255), 2);

        ///// # _layoutLineIcon_6
        this._layoutLineIcon_6 = new ccui.Layout();
        this._layoutLineIcon_6.setName("_layoutLineIcon_6");
        this._listView.pushBackCustomItem(this._layoutLineIcon_6);
        this._layoutLineIcon_6.setCascadeOpacityEnabled(true);
        this._layoutLineIcon_6.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutLineIcon_6, 0, 0.3814);
        let _layoutLineIcon_6LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLineIcon_6);
        this._layoutLineIcon_6.setTouchEnabled(true);
        this._layoutLineIcon_6.setUnifySizeEnabled(false);
        this._layoutLineIcon_6.ignoreContentAdaptWithSize(false);
        this._layoutLineIcon_6.setContentSize(cc.size(440, 90));

        ///// # _imgLineIcon_6
        this._imgLineIcon_6 = new ccui.ImageView();
        this._imgLineIcon_6.setName("_imgLineIcon_6");
        this._layoutLineIcon_6.addChild(this._imgLineIcon_6);
        this._imgLineIcon_6.setCascadeOpacityEnabled(true);
        this._imgLineIcon_6.setCascadeColorEnabled(true);
        this._imgLineIcon_6.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLineIcon_6, 0.5, 0);
        let _imgLineIcon_6LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLineIcon_6);
        _imgLineIcon_6LayoutComponent.setPositionPercentXEnabled(true);
        _imgLineIcon_6LayoutComponent.setPositionPercentX(0.5);
        _imgLineIcon_6LayoutComponent.setPositionPercentYEnabled(true);
        _imgLineIcon_6LayoutComponent.setPositionPercentY(0);
        this._imgLineIcon_6.loadTexture("sprites/minigames/slot-three/bline_blue_dot.png", 0);
        this._imgLineIcon_6.setUnifySizeEnabled(false);
        this._imgLineIcon_6.ignoreContentAdaptWithSize(false);
        this._imgLineIcon_6.setContentSize(cc.size(525, 3));
        this._imgLineIcon_6.setTouchEnabled(false);

        ///// # _imgIcon_6_1
        this._imgIcon_6_1 = new ccui.ImageView();
        this._imgIcon_6_1.setName("_imgIcon_6_1");
        this._layoutLineIcon_6.addChild(this._imgIcon_6_1);
        this._imgIcon_6_1.setCascadeOpacityEnabled(true);
        this._imgIcon_6_1.setCascadeColorEnabled(true);
        this._imgIcon_6_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_6_1, 0.1, 0.5);
        let _imgIcon_6_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_6_1);
        _imgIcon_6_1LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_6_1LayoutComponent.setPositionPercentX(0.1);
        _imgIcon_6_1LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_6_1LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_6_1.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_6.png", 0);
        this._imgIcon_6_1.setUnifySizeEnabled(false);
        this._imgIcon_6_1.ignoreContentAdaptWithSize(false);
        this._imgIcon_6_1.setContentSize(cc.size(65, 76));
        this._imgIcon_6_1.setTouchEnabled(false);

        ///// # _imgIcon_6_2
        this._imgIcon_6_2 = new ccui.ImageView();
        this._imgIcon_6_2.setName("_imgIcon_6_2");
        this._layoutLineIcon_6.addChild(this._imgIcon_6_2);
        this._imgIcon_6_2.setCascadeOpacityEnabled(true);
        this._imgIcon_6_2.setCascadeColorEnabled(true);
        this._imgIcon_6_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_6_2, 0.3, 0.5);
        let _imgIcon_6_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_6_2);
        _imgIcon_6_2LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_6_2LayoutComponent.setPositionPercentX(0.3);
        _imgIcon_6_2LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_6_2LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_6_2.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_6.png", 0);
        this._imgIcon_6_2.setUnifySizeEnabled(false);
        this._imgIcon_6_2.ignoreContentAdaptWithSize(false);
        this._imgIcon_6_2.setContentSize(cc.size(65, 76));
        this._imgIcon_6_2.setTouchEnabled(false);

        ///// # _imgIcon_6_3
        this._imgIcon_6_3 = new ccui.ImageView();
        this._imgIcon_6_3.setName("_imgIcon_6_3");
        this._layoutLineIcon_6.addChild(this._imgIcon_6_3);
        this._imgIcon_6_3.setCascadeOpacityEnabled(true);
        this._imgIcon_6_3.setCascadeColorEnabled(true);
        this._imgIcon_6_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_6_3, 0.5, 0.5);
        let _imgIcon_6_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_6_3);
        _imgIcon_6_3LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_6_3LayoutComponent.setPositionPercentX(0.5);
        _imgIcon_6_3LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_6_3LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_6_3.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_6.png", 0);
        this._imgIcon_6_3.setUnifySizeEnabled(false);
        this._imgIcon_6_3.ignoreContentAdaptWithSize(false);
        this._imgIcon_6_3.setContentSize(cc.size(65, 76));
        this._imgIcon_6_3.setTouchEnabled(false);

        ///// # _txtPrizeIcon_6
        this._txtPrizeIcon_6 = new ck.Text();
        this._txtPrizeIcon_6.setName("_txtPrizeIcon_6");
        this._layoutLineIcon_6.addChild(this._txtPrizeIcon_6);
        this._txtPrizeIcon_6.setCascadeOpacityEnabled(true);
        this._txtPrizeIcon_6.setCascadeColorEnabled(true);
        this._txtPrizeIcon_6.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPrizeIcon_6, 0.92, 0.55);
        let _txtPrizeIcon_6LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPrizeIcon_6);
        _txtPrizeIcon_6LayoutComponent.setPositionPercentXEnabled(true);
        _txtPrizeIcon_6LayoutComponent.setPositionPercentX(0.92);
        _txtPrizeIcon_6LayoutComponent.setPositionPercentYEnabled(true);
        _txtPrizeIcon_6LayoutComponent.setPositionPercentY(0.55);
        this._txtPrizeIcon_6.setTouchEnabled(false);
        this._txtPrizeIcon_6.ignoreContentAdaptWithSize(true);
        this._txtPrizeIcon_6.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtPrizeIcon_6.setDefaultFontSize(35);
        this._txtPrizeIcon_6.setTextHorizontalAlignment(0);
        this._txtPrizeIcon_6.setTextVerticalAlignment(0);
        this._txtPrizeIcon_6.enableOutline(cc.color(37, 94, 155, 255), 2);

        ///// # _layoutLineIcon_5
        this._layoutLineIcon_5 = new ccui.Layout();
        this._layoutLineIcon_5.setName("_layoutLineIcon_5");
        this._listView.pushBackCustomItem(this._layoutLineIcon_5);
        this._layoutLineIcon_5.setCascadeOpacityEnabled(true);
        this._layoutLineIcon_5.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutLineIcon_5, 0, 0.3051);
        let _layoutLineIcon_5LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLineIcon_5);
        this._layoutLineIcon_5.setTouchEnabled(true);
        this._layoutLineIcon_5.setUnifySizeEnabled(false);
        this._layoutLineIcon_5.ignoreContentAdaptWithSize(false);
        this._layoutLineIcon_5.setContentSize(cc.size(440, 90));

        ///// # _imgLineIcon_5
        this._imgLineIcon_5 = new ccui.ImageView();
        this._imgLineIcon_5.setName("_imgLineIcon_5");
        this._layoutLineIcon_5.addChild(this._imgLineIcon_5);
        this._imgLineIcon_5.setCascadeOpacityEnabled(true);
        this._imgLineIcon_5.setCascadeColorEnabled(true);
        this._imgLineIcon_5.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLineIcon_5, 0.5, 0);
        let _imgLineIcon_5LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLineIcon_5);
        _imgLineIcon_5LayoutComponent.setPositionPercentXEnabled(true);
        _imgLineIcon_5LayoutComponent.setPositionPercentX(0.5);
        _imgLineIcon_5LayoutComponent.setPositionPercentYEnabled(true);
        _imgLineIcon_5LayoutComponent.setPositionPercentY(0);
        this._imgLineIcon_5.loadTexture("sprites/minigames/slot-three/bline_blue_dot.png", 0);
        this._imgLineIcon_5.setUnifySizeEnabled(false);
        this._imgLineIcon_5.ignoreContentAdaptWithSize(false);
        this._imgLineIcon_5.setContentSize(cc.size(525, 3));
        this._imgLineIcon_5.setTouchEnabled(false);

        ///// # _imgIcon_5_1
        this._imgIcon_5_1 = new ccui.ImageView();
        this._imgIcon_5_1.setName("_imgIcon_5_1");
        this._layoutLineIcon_5.addChild(this._imgIcon_5_1);
        this._imgIcon_5_1.setCascadeOpacityEnabled(true);
        this._imgIcon_5_1.setCascadeColorEnabled(true);
        this._imgIcon_5_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_5_1, 0.1, 0.5);
        let _imgIcon_5_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_5_1);
        _imgIcon_5_1LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_5_1LayoutComponent.setPositionPercentX(0.1);
        _imgIcon_5_1LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_5_1LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_5_1.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_5.png", 0);
        this._imgIcon_5_1.setUnifySizeEnabled(false);
        this._imgIcon_5_1.ignoreContentAdaptWithSize(false);
        this._imgIcon_5_1.setContentSize(cc.size(65, 59));
        this._imgIcon_5_1.setTouchEnabled(false);

        ///// # _imgIcon_5_2
        this._imgIcon_5_2 = new ccui.ImageView();
        this._imgIcon_5_2.setName("_imgIcon_5_2");
        this._layoutLineIcon_5.addChild(this._imgIcon_5_2);
        this._imgIcon_5_2.setCascadeOpacityEnabled(true);
        this._imgIcon_5_2.setCascadeColorEnabled(true);
        this._imgIcon_5_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_5_2, 0.3, 0.5);
        let _imgIcon_5_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_5_2);
        _imgIcon_5_2LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_5_2LayoutComponent.setPositionPercentX(0.3);
        _imgIcon_5_2LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_5_2LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_5_2.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_5.png", 0);
        this._imgIcon_5_2.setUnifySizeEnabled(false);
        this._imgIcon_5_2.ignoreContentAdaptWithSize(false);
        this._imgIcon_5_2.setContentSize(cc.size(65, 59));
        this._imgIcon_5_2.setTouchEnabled(false);

        ///// # _imgIcon_5_3
        this._imgIcon_5_3 = new ccui.ImageView();
        this._imgIcon_5_3.setName("_imgIcon_5_3");
        this._layoutLineIcon_5.addChild(this._imgIcon_5_3);
        this._imgIcon_5_3.setCascadeOpacityEnabled(true);
        this._imgIcon_5_3.setCascadeColorEnabled(true);
        this._imgIcon_5_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_5_3, 0.5, 0.5);
        let _imgIcon_5_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_5_3);
        _imgIcon_5_3LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_5_3LayoutComponent.setPositionPercentX(0.5);
        _imgIcon_5_3LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_5_3LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_5_3.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_5.png", 0);
        this._imgIcon_5_3.setUnifySizeEnabled(false);
        this._imgIcon_5_3.ignoreContentAdaptWithSize(false);
        this._imgIcon_5_3.setContentSize(cc.size(65, 59));
        this._imgIcon_5_3.setTouchEnabled(false);

        ///// # _txtPrizeIcon_5
        this._txtPrizeIcon_5 = new ck.Text();
        this._txtPrizeIcon_5.setName("_txtPrizeIcon_5");
        this._layoutLineIcon_5.addChild(this._txtPrizeIcon_5);
        this._txtPrizeIcon_5.setCascadeOpacityEnabled(true);
        this._txtPrizeIcon_5.setCascadeColorEnabled(true);
        this._txtPrizeIcon_5.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPrizeIcon_5, 0.92, 0.55);
        let _txtPrizeIcon_5LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPrizeIcon_5);
        _txtPrizeIcon_5LayoutComponent.setPositionPercentXEnabled(true);
        _txtPrizeIcon_5LayoutComponent.setPositionPercentX(0.92);
        _txtPrizeIcon_5LayoutComponent.setPositionPercentYEnabled(true);
        _txtPrizeIcon_5LayoutComponent.setPositionPercentY(0.55);
        this._txtPrizeIcon_5.setTouchEnabled(false);
        this._txtPrizeIcon_5.ignoreContentAdaptWithSize(true);
        this._txtPrizeIcon_5.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtPrizeIcon_5.setDefaultFontSize(35);
        this._txtPrizeIcon_5.setTextHorizontalAlignment(0);
        this._txtPrizeIcon_5.setTextVerticalAlignment(0);
        this._txtPrizeIcon_5.enableOutline(cc.color(37, 94, 155, 255), 2);

        ///// # _layoutLineIcon_4
        this._layoutLineIcon_4 = new ccui.Layout();
        this._layoutLineIcon_4.setName("_layoutLineIcon_4");
        this._listView.pushBackCustomItem(this._layoutLineIcon_4);
        this._layoutLineIcon_4.setCascadeOpacityEnabled(true);
        this._layoutLineIcon_4.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutLineIcon_4, 0, 0.2288);
        let _layoutLineIcon_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLineIcon_4);
        this._layoutLineIcon_4.setTouchEnabled(true);
        this._layoutLineIcon_4.setUnifySizeEnabled(false);
        this._layoutLineIcon_4.ignoreContentAdaptWithSize(false);
        this._layoutLineIcon_4.setContentSize(cc.size(440, 90));

        ///// # _imgLineIcon_4
        this._imgLineIcon_4 = new ccui.ImageView();
        this._imgLineIcon_4.setName("_imgLineIcon_4");
        this._layoutLineIcon_4.addChild(this._imgLineIcon_4);
        this._imgLineIcon_4.setCascadeOpacityEnabled(true);
        this._imgLineIcon_4.setCascadeColorEnabled(true);
        this._imgLineIcon_4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLineIcon_4, 0.5, 0);
        let _imgLineIcon_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLineIcon_4);
        _imgLineIcon_4LayoutComponent.setPositionPercentXEnabled(true);
        _imgLineIcon_4LayoutComponent.setPositionPercentX(0.5);
        _imgLineIcon_4LayoutComponent.setPositionPercentYEnabled(true);
        _imgLineIcon_4LayoutComponent.setPositionPercentY(0);
        this._imgLineIcon_4.loadTexture("sprites/minigames/slot-three/bline_blue_dot.png", 0);
        this._imgLineIcon_4.setUnifySizeEnabled(false);
        this._imgLineIcon_4.ignoreContentAdaptWithSize(false);
        this._imgLineIcon_4.setContentSize(cc.size(525, 3));
        this._imgLineIcon_4.setTouchEnabled(false);

        ///// # _imgIcon_4_1
        this._imgIcon_4_1 = new ccui.ImageView();
        this._imgIcon_4_1.setName("_imgIcon_4_1");
        this._layoutLineIcon_4.addChild(this._imgIcon_4_1);
        this._imgIcon_4_1.setCascadeOpacityEnabled(true);
        this._imgIcon_4_1.setCascadeColorEnabled(true);
        this._imgIcon_4_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_4_1, 0.1, 0.5);
        let _imgIcon_4_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_4_1);
        _imgIcon_4_1LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_4_1LayoutComponent.setPositionPercentX(0.1);
        _imgIcon_4_1LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_4_1LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_4_1.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_4.png", 0);
        this._imgIcon_4_1.setUnifySizeEnabled(false);
        this._imgIcon_4_1.ignoreContentAdaptWithSize(false);
        this._imgIcon_4_1.setContentSize(cc.size(60, 72));
        this._imgIcon_4_1.setTouchEnabled(false);

        ///// # _imgIcon_4_2
        this._imgIcon_4_2 = new ccui.ImageView();
        this._imgIcon_4_2.setName("_imgIcon_4_2");
        this._layoutLineIcon_4.addChild(this._imgIcon_4_2);
        this._imgIcon_4_2.setCascadeOpacityEnabled(true);
        this._imgIcon_4_2.setCascadeColorEnabled(true);
        this._imgIcon_4_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_4_2, 0.3, 0.5);
        this._imgIcon_4_2.setScale(1, 1.0667);
        let _imgIcon_4_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_4_2);
        _imgIcon_4_2LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_4_2LayoutComponent.setPositionPercentX(0.3);
        _imgIcon_4_2LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_4_2LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_4_2.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_4.png", 0);
        this._imgIcon_4_2.setUnifySizeEnabled(false);
        this._imgIcon_4_2.ignoreContentAdaptWithSize(false);
        this._imgIcon_4_2.setContentSize(cc.size(60, 72));
        this._imgIcon_4_2.setTouchEnabled(false);

        ///// # _imgIcon_4_3
        this._imgIcon_4_3 = new ccui.ImageView();
        this._imgIcon_4_3.setName("_imgIcon_4_3");
        this._layoutLineIcon_4.addChild(this._imgIcon_4_3);
        this._imgIcon_4_3.setCascadeOpacityEnabled(true);
        this._imgIcon_4_3.setCascadeColorEnabled(true);
        this._imgIcon_4_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_4_3, 0.5, 0.5);
        let _imgIcon_4_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_4_3);
        _imgIcon_4_3LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_4_3LayoutComponent.setPositionPercentX(0.5);
        _imgIcon_4_3LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_4_3LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_4_3.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_4.png", 0);
        this._imgIcon_4_3.setUnifySizeEnabled(false);
        this._imgIcon_4_3.ignoreContentAdaptWithSize(false);
        this._imgIcon_4_3.setContentSize(cc.size(60, 72));
        this._imgIcon_4_3.setTouchEnabled(false);

        ///// # _txtPrizeIcon_4
        this._txtPrizeIcon_4 = new ck.Text();
        this._txtPrizeIcon_4.setName("_txtPrizeIcon_4");
        this._layoutLineIcon_4.addChild(this._txtPrizeIcon_4);
        this._txtPrizeIcon_4.setCascadeOpacityEnabled(true);
        this._txtPrizeIcon_4.setCascadeColorEnabled(true);
        this._txtPrizeIcon_4.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPrizeIcon_4, 0.92, 0.55);
        let _txtPrizeIcon_4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPrizeIcon_4);
        _txtPrizeIcon_4LayoutComponent.setPositionPercentXEnabled(true);
        _txtPrizeIcon_4LayoutComponent.setPositionPercentX(0.92);
        _txtPrizeIcon_4LayoutComponent.setPositionPercentYEnabled(true);
        _txtPrizeIcon_4LayoutComponent.setPositionPercentY(0.55);
        this._txtPrizeIcon_4.setTouchEnabled(false);
        this._txtPrizeIcon_4.ignoreContentAdaptWithSize(true);
        this._txtPrizeIcon_4.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtPrizeIcon_4.setDefaultFontSize(35);
        this._txtPrizeIcon_4.setTextHorizontalAlignment(0);
        this._txtPrizeIcon_4.setTextVerticalAlignment(0);
        this._txtPrizeIcon_4.enableOutline(cc.color(37, 94, 155, 255), 2);

        ///// # _layoutLineIcon_3
        this._layoutLineIcon_3 = new ccui.Layout();
        this._layoutLineIcon_3.setName("_layoutLineIcon_3");
        this._listView.pushBackCustomItem(this._layoutLineIcon_3);
        this._layoutLineIcon_3.setCascadeOpacityEnabled(true);
        this._layoutLineIcon_3.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutLineIcon_3, 0, 0.1525);
        let _layoutLineIcon_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLineIcon_3);
        this._layoutLineIcon_3.setTouchEnabled(true);
        this._layoutLineIcon_3.setUnifySizeEnabled(false);
        this._layoutLineIcon_3.ignoreContentAdaptWithSize(false);
        this._layoutLineIcon_3.setContentSize(cc.size(440, 90));

        ///// # _imgLineIcon_3
        this._imgLineIcon_3 = new ccui.ImageView();
        this._imgLineIcon_3.setName("_imgLineIcon_3");
        this._layoutLineIcon_3.addChild(this._imgLineIcon_3);
        this._imgLineIcon_3.setCascadeOpacityEnabled(true);
        this._imgLineIcon_3.setCascadeColorEnabled(true);
        this._imgLineIcon_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLineIcon_3, 0.5, 0);
        let _imgLineIcon_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLineIcon_3);
        _imgLineIcon_3LayoutComponent.setPositionPercentXEnabled(true);
        _imgLineIcon_3LayoutComponent.setPositionPercentX(0.5);
        _imgLineIcon_3LayoutComponent.setPositionPercentYEnabled(true);
        _imgLineIcon_3LayoutComponent.setPositionPercentY(0);
        this._imgLineIcon_3.loadTexture("sprites/minigames/slot-three/bline_blue_dot.png", 0);
        this._imgLineIcon_3.setUnifySizeEnabled(false);
        this._imgLineIcon_3.ignoreContentAdaptWithSize(false);
        this._imgLineIcon_3.setContentSize(cc.size(525, 3));
        this._imgLineIcon_3.setTouchEnabled(false);

        ///// # _imgIcon_3_1
        this._imgIcon_3_1 = new ccui.ImageView();
        this._imgIcon_3_1.setName("_imgIcon_3_1");
        this._layoutLineIcon_3.addChild(this._imgIcon_3_1);
        this._imgIcon_3_1.setCascadeOpacityEnabled(true);
        this._imgIcon_3_1.setCascadeColorEnabled(true);
        this._imgIcon_3_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_3_1, 0.1, 0.5);
        let _imgIcon_3_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_3_1);
        _imgIcon_3_1LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_3_1LayoutComponent.setPositionPercentX(0.1);
        _imgIcon_3_1LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_3_1LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_3_1.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_3.png", 0);
        this._imgIcon_3_1.setUnifySizeEnabled(false);
        this._imgIcon_3_1.ignoreContentAdaptWithSize(false);
        this._imgIcon_3_1.setContentSize(cc.size(65, 63));
        this._imgIcon_3_1.setTouchEnabled(false);

        ///// # _imgIcon_3_2
        this._imgIcon_3_2 = new ccui.ImageView();
        this._imgIcon_3_2.setName("_imgIcon_3_2");
        this._layoutLineIcon_3.addChild(this._imgIcon_3_2);
        this._imgIcon_3_2.setCascadeOpacityEnabled(true);
        this._imgIcon_3_2.setCascadeColorEnabled(true);
        this._imgIcon_3_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_3_2, 0.3, 0.5);
        this._imgIcon_3_2.setScale(1, 1.0667);
        let _imgIcon_3_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_3_2);
        _imgIcon_3_2LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_3_2LayoutComponent.setPositionPercentX(0.3);
        _imgIcon_3_2LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_3_2LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_3_2.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_3.png", 0);
        this._imgIcon_3_2.setUnifySizeEnabled(false);
        this._imgIcon_3_2.ignoreContentAdaptWithSize(false);
        this._imgIcon_3_2.setContentSize(cc.size(65, 63));
        this._imgIcon_3_2.setTouchEnabled(false);

        ///// # _imgIcon_3_3
        this._imgIcon_3_3 = new ccui.ImageView();
        this._imgIcon_3_3.setName("_imgIcon_3_3");
        this._layoutLineIcon_3.addChild(this._imgIcon_3_3);
        this._imgIcon_3_3.setCascadeOpacityEnabled(true);
        this._imgIcon_3_3.setCascadeColorEnabled(true);
        this._imgIcon_3_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_3_3, 0.5, 0.5);
        let _imgIcon_3_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_3_3);
        _imgIcon_3_3LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_3_3LayoutComponent.setPositionPercentX(0.5);
        _imgIcon_3_3LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_3_3LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_3_3.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_3.png", 0);
        this._imgIcon_3_3.setUnifySizeEnabled(false);
        this._imgIcon_3_3.ignoreContentAdaptWithSize(false);
        this._imgIcon_3_3.setContentSize(cc.size(65, 63));
        this._imgIcon_3_3.setTouchEnabled(false);

        ///// # _txtPrizeIcon_3
        this._txtPrizeIcon_3 = new ck.Text();
        this._txtPrizeIcon_3.setName("_txtPrizeIcon_3");
        this._layoutLineIcon_3.addChild(this._txtPrizeIcon_3);
        this._txtPrizeIcon_3.setCascadeOpacityEnabled(true);
        this._txtPrizeIcon_3.setCascadeColorEnabled(true);
        this._txtPrizeIcon_3.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPrizeIcon_3, 0.92, 0.55);
        let _txtPrizeIcon_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPrizeIcon_3);
        _txtPrizeIcon_3LayoutComponent.setPositionPercentXEnabled(true);
        _txtPrizeIcon_3LayoutComponent.setPositionPercentX(0.92);
        _txtPrizeIcon_3LayoutComponent.setPositionPercentYEnabled(true);
        _txtPrizeIcon_3LayoutComponent.setPositionPercentY(0.55);
        this._txtPrizeIcon_3.setTouchEnabled(false);
        this._txtPrizeIcon_3.ignoreContentAdaptWithSize(true);
        this._txtPrizeIcon_3.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtPrizeIcon_3.setDefaultFontSize(35);
        this._txtPrizeIcon_3.setTextHorizontalAlignment(0);
        this._txtPrizeIcon_3.setTextVerticalAlignment(0);
        this._txtPrizeIcon_3.enableOutline(cc.color(37, 94, 155, 255), 2);

        ///// # _layoutLineIcon_2
        this._layoutLineIcon_2 = new ccui.Layout();
        this._layoutLineIcon_2.setName("_layoutLineIcon_2");
        this._listView.pushBackCustomItem(this._layoutLineIcon_2);
        this._layoutLineIcon_2.setCascadeOpacityEnabled(true);
        this._layoutLineIcon_2.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._layoutLineIcon_2, 0, 0.0763);
        let _layoutLineIcon_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLineIcon_2);
        this._layoutLineIcon_2.setTouchEnabled(true);
        this._layoutLineIcon_2.setUnifySizeEnabled(false);
        this._layoutLineIcon_2.ignoreContentAdaptWithSize(false);
        this._layoutLineIcon_2.setContentSize(cc.size(440, 90));

        ///// # _imgLineIcon_2
        this._imgLineIcon_2 = new ccui.ImageView();
        this._imgLineIcon_2.setName("_imgLineIcon_2");
        this._layoutLineIcon_2.addChild(this._imgLineIcon_2);
        this._imgLineIcon_2.setCascadeOpacityEnabled(true);
        this._imgLineIcon_2.setCascadeColorEnabled(true);
        this._imgLineIcon_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLineIcon_2, 0.5, 0);
        let _imgLineIcon_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLineIcon_2);
        _imgLineIcon_2LayoutComponent.setPositionPercentXEnabled(true);
        _imgLineIcon_2LayoutComponent.setPositionPercentX(0.5);
        _imgLineIcon_2LayoutComponent.setPositionPercentYEnabled(true);
        _imgLineIcon_2LayoutComponent.setPositionPercentY(0);
        this._imgLineIcon_2.loadTexture("sprites/minigames/slot-three/bline_blue_dot.png", 0);
        this._imgLineIcon_2.setUnifySizeEnabled(false);
        this._imgLineIcon_2.ignoreContentAdaptWithSize(false);
        this._imgLineIcon_2.setContentSize(cc.size(525, 3));
        this._imgLineIcon_2.setTouchEnabled(false);

        ///// # _imgIcon_2_1
        this._imgIcon_2_1 = new ccui.ImageView();
        this._imgIcon_2_1.setName("_imgIcon_2_1");
        this._layoutLineIcon_2.addChild(this._imgIcon_2_1);
        this._imgIcon_2_1.setCascadeOpacityEnabled(true);
        this._imgIcon_2_1.setCascadeColorEnabled(true);
        this._imgIcon_2_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_2_1, 0.1, 0.5);
        let _imgIcon_2_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_2_1);
        _imgIcon_2_1LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_2_1LayoutComponent.setPositionPercentX(0.1);
        _imgIcon_2_1LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_2_1LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_2_1.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_2.png", 0);
        this._imgIcon_2_1.setUnifySizeEnabled(false);
        this._imgIcon_2_1.ignoreContentAdaptWithSize(false);
        this._imgIcon_2_1.setContentSize(cc.size(61, 53));
        this._imgIcon_2_1.setTouchEnabled(false);

        ///// # _imgIcon_2_2
        this._imgIcon_2_2 = new ccui.ImageView();
        this._imgIcon_2_2.setName("_imgIcon_2_2");
        this._layoutLineIcon_2.addChild(this._imgIcon_2_2);
        this._imgIcon_2_2.setCascadeOpacityEnabled(true);
        this._imgIcon_2_2.setCascadeColorEnabled(true);
        this._imgIcon_2_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_2_2, 0.3, 0.5);
        this._imgIcon_2_2.setScale(1, 1.0667);
        let _imgIcon_2_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_2_2);
        _imgIcon_2_2LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_2_2LayoutComponent.setPositionPercentX(0.3);
        _imgIcon_2_2LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_2_2LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_2_2.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_2.png", 0);
        this._imgIcon_2_2.setUnifySizeEnabled(false);
        this._imgIcon_2_2.ignoreContentAdaptWithSize(false);
        this._imgIcon_2_2.setContentSize(cc.size(61, 53));
        this._imgIcon_2_2.setTouchEnabled(false);

        ///// # _imgIcon_2_3
        this._imgIcon_2_3 = new ccui.ImageView();
        this._imgIcon_2_3.setName("_imgIcon_2_3");
        this._layoutLineIcon_2.addChild(this._imgIcon_2_3);
        this._imgIcon_2_3.setCascadeOpacityEnabled(true);
        this._imgIcon_2_3.setCascadeColorEnabled(true);
        this._imgIcon_2_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_2_3, 0.5, 0.5);
        let _imgIcon_2_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_2_3);
        _imgIcon_2_3LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_2_3LayoutComponent.setPositionPercentX(0.5);
        _imgIcon_2_3LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_2_3LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_2_3.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_2.png", 0);
        this._imgIcon_2_3.setUnifySizeEnabled(false);
        this._imgIcon_2_3.ignoreContentAdaptWithSize(false);
        this._imgIcon_2_3.setContentSize(cc.size(61, 53));
        this._imgIcon_2_3.setTouchEnabled(false);

        ///// # _txtPrizeIcon_2
        this._txtPrizeIcon_2 = new ck.Text();
        this._txtPrizeIcon_2.setName("_txtPrizeIcon_2");
        this._layoutLineIcon_2.addChild(this._txtPrizeIcon_2);
        this._txtPrizeIcon_2.setCascadeOpacityEnabled(true);
        this._txtPrizeIcon_2.setCascadeColorEnabled(true);
        this._txtPrizeIcon_2.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPrizeIcon_2, 0.92, 0.55);
        let _txtPrizeIcon_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPrizeIcon_2);
        _txtPrizeIcon_2LayoutComponent.setPositionPercentXEnabled(true);
        _txtPrizeIcon_2LayoutComponent.setPositionPercentX(0.92);
        _txtPrizeIcon_2LayoutComponent.setPositionPercentYEnabled(true);
        _txtPrizeIcon_2LayoutComponent.setPositionPercentY(0.55);
        this._txtPrizeIcon_2.setTouchEnabled(false);
        this._txtPrizeIcon_2.ignoreContentAdaptWithSize(true);
        this._txtPrizeIcon_2.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtPrizeIcon_2.setDefaultFontSize(35);
        this._txtPrizeIcon_2.setTextHorizontalAlignment(0);
        this._txtPrizeIcon_2.setTextVerticalAlignment(0);
        this._txtPrizeIcon_2.enableOutline(cc.color(37, 94, 155, 255), 2);

        ///// # _layoutLineIcon_1
        this._layoutLineIcon_1 = new ccui.Layout();
        this._layoutLineIcon_1.setName("_layoutLineIcon_1");
        this._listView.pushBackCustomItem(this._layoutLineIcon_1);
        this._layoutLineIcon_1.setCascadeOpacityEnabled(true);
        this._layoutLineIcon_1.setCascadeColorEnabled(true);
        let _layoutLineIcon_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutLineIcon_1);
        this._layoutLineIcon_1.setTouchEnabled(true);
        this._layoutLineIcon_1.setUnifySizeEnabled(false);
        this._layoutLineIcon_1.ignoreContentAdaptWithSize(false);
        this._layoutLineIcon_1.setContentSize(cc.size(440, 90));

        ///// # _imgLineIcon_1
        this._imgLineIcon_1 = new ccui.ImageView();
        this._imgLineIcon_1.setName("_imgLineIcon_1");
        this._layoutLineIcon_1.addChild(this._imgLineIcon_1);
        this._imgLineIcon_1.setCascadeOpacityEnabled(true);
        this._imgLineIcon_1.setCascadeColorEnabled(true);
        this._imgLineIcon_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLineIcon_1, 0.5, 0);
        let _imgLineIcon_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLineIcon_1);
        _imgLineIcon_1LayoutComponent.setPositionPercentXEnabled(true);
        _imgLineIcon_1LayoutComponent.setPositionPercentX(0.5);
        _imgLineIcon_1LayoutComponent.setPositionPercentYEnabled(true);
        _imgLineIcon_1LayoutComponent.setPositionPercentY(0);
        this._imgLineIcon_1.loadTexture("sprites/minigames/slot-three/bline_blue_dot.png", 0);
        this._imgLineIcon_1.setUnifySizeEnabled(false);
        this._imgLineIcon_1.ignoreContentAdaptWithSize(false);
        this._imgLineIcon_1.setContentSize(cc.size(525, 3));
        this._imgLineIcon_1.setTouchEnabled(false);

        ///// # _imgIcon_1_1
        this._imgIcon_1_1 = new ccui.ImageView();
        this._imgIcon_1_1.setName("_imgIcon_1_1");
        this._layoutLineIcon_1.addChild(this._imgIcon_1_1);
        this._imgIcon_1_1.setCascadeOpacityEnabled(true);
        this._imgIcon_1_1.setCascadeColorEnabled(true);
        this._imgIcon_1_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_1_1, 0.1, 0.5);
        let _imgIcon_1_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_1_1);
        _imgIcon_1_1LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_1_1LayoutComponent.setPositionPercentX(0.1);
        _imgIcon_1_1LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_1_1LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_1_1.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_1.png", 0);
        this._imgIcon_1_1.setUnifySizeEnabled(false);
        this._imgIcon_1_1.ignoreContentAdaptWithSize(false);
        this._imgIcon_1_1.setContentSize(cc.size(61, 59));
        this._imgIcon_1_1.setTouchEnabled(false);

        ///// # _imgIcon_1_2
        this._imgIcon_1_2 = new ccui.ImageView();
        this._imgIcon_1_2.setName("_imgIcon_1_2");
        this._layoutLineIcon_1.addChild(this._imgIcon_1_2);
        this._imgIcon_1_2.setCascadeOpacityEnabled(true);
        this._imgIcon_1_2.setCascadeColorEnabled(true);
        this._imgIcon_1_2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_1_2, 0.3, 0.5);
        this._imgIcon_1_2.setScale(1, 1.0667);
        let _imgIcon_1_2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_1_2);
        _imgIcon_1_2LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_1_2LayoutComponent.setPositionPercentX(0.3);
        _imgIcon_1_2LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_1_2LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_1_2.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_1.png", 0);
        this._imgIcon_1_2.setUnifySizeEnabled(false);
        this._imgIcon_1_2.ignoreContentAdaptWithSize(false);
        this._imgIcon_1_2.setContentSize(cc.size(61, 59));
        this._imgIcon_1_2.setTouchEnabled(false);

        ///// # _imgIcon_1_3
        this._imgIcon_1_3 = new ccui.ImageView();
        this._imgIcon_1_3.setName("_imgIcon_1_3");
        this._layoutLineIcon_1.addChild(this._imgIcon_1_3);
        this._imgIcon_1_3.setCascadeOpacityEnabled(true);
        this._imgIcon_1_3.setCascadeColorEnabled(true);
        this._imgIcon_1_3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon_1_3, 0.5, 0.5);
        let _imgIcon_1_3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon_1_3);
        _imgIcon_1_3LayoutComponent.setPositionPercentXEnabled(true);
        _imgIcon_1_3LayoutComponent.setPositionPercentX(0.5);
        _imgIcon_1_3LayoutComponent.setPositionPercentYEnabled(true);
        _imgIcon_1_3LayoutComponent.setPositionPercentY(0.5);
        this._imgIcon_1_3.loadTexture("sprites/minigames/slot-three/slot3_icon_mini_1.png", 0);
        this._imgIcon_1_3.setUnifySizeEnabled(false);
        this._imgIcon_1_3.ignoreContentAdaptWithSize(false);
        this._imgIcon_1_3.setContentSize(cc.size(61, 59));
        this._imgIcon_1_3.setTouchEnabled(false);

        ///// # _txtPrizeIcon_1
        this._txtPrizeIcon_1 = new ck.Text();
        this._txtPrizeIcon_1.setName("_txtPrizeIcon_1");
        this._layoutLineIcon_1.addChild(this._txtPrizeIcon_1);
        this._txtPrizeIcon_1.setCascadeOpacityEnabled(true);
        this._txtPrizeIcon_1.setCascadeColorEnabled(true);
        this._txtPrizeIcon_1.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPrizeIcon_1, 0.92, 0.55);
        let _txtPrizeIcon_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPrizeIcon_1);
        _txtPrizeIcon_1LayoutComponent.setPositionPercentXEnabled(true);
        _txtPrizeIcon_1LayoutComponent.setPositionPercentX(0.92);
        _txtPrizeIcon_1LayoutComponent.setPositionPercentYEnabled(true);
        _txtPrizeIcon_1LayoutComponent.setPositionPercentY(0.55);
        this._txtPrizeIcon_1.setTouchEnabled(false);
        this._txtPrizeIcon_1.ignoreContentAdaptWithSize(true);
        this._txtPrizeIcon_1.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtPrizeIcon_1.setDefaultFontSize(35);
        this._txtPrizeIcon_1.setTextHorizontalAlignment(0);
        this._txtPrizeIcon_1.setTextVerticalAlignment(0);
        this._txtPrizeIcon_1.enableOutline(cc.color(37, 94, 155, 255), 2);

        ///// # _txtBet
        this._txtBet = new ck.Text();
        this._txtBet.setName("_txtBet");
        this._imgPopup.addChild(this._txtBet);
        this._txtBet.setCascadeOpacityEnabled(true);
        this._txtBet.setCascadeColorEnabled(true);
        this._txtBet.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBet, 0.85, 0.85);
        this._txtBet.setTextColor(cc.color(37, 94, 155, 255));
        let _txtBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBet);
        _txtBetLayoutComponent.setPositionPercentXEnabled(true);
        _txtBetLayoutComponent.setPositionPercentX(0.85);
        _txtBetLayoutComponent.setPositionPercentYEnabled(true);
        _txtBetLayoutComponent.setPositionPercentY(0.85);
        this._txtBet.setTouchEnabled(false);
        this._txtBet.ignoreContentAdaptWithSize(true);
        this._txtBet.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBet.setDefaultFontSize(25);
        this._txtBet.setTextHorizontalAlignment(0);
        this._txtBet.setTextVerticalAlignment(0);

        ///// # _imgIconBet
        this._imgIconBet = new ccui.ImageView();
        this._imgIconBet.setName("_imgIconBet");
        this._imgPopup.addChild(this._imgIconBet);
        this._imgIconBet.setCascadeOpacityEnabled(true);
        this._imgIconBet.setCascadeColorEnabled(true);
        this._imgIconBet.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconBet, 0.85, 0.8571);
        this._imgIconBet.setScale(0.35, 0.35);
        let _imgIconBetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconBet);
        _imgIconBetLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconBetLayoutComponent.setPositionPercentX(0.85);
        _imgIconBetLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconBetLayoutComponent.setPositionPercentY(0.8571);
        this._imgIconBet.loadTexture("sprites/icons/color/coins/Coin.png", 0);
        this._imgIconBet.setUnifySizeEnabled(false);
        this._imgIconBet.ignoreContentAdaptWithSize(false);
        this._imgIconBet.setContentSize(cc.size(128, 128));
        this._imgIconBet.setTouchEnabled(false);

    },



});

/**
 * Create SlotThreeTutorialPopup
 * @returns {_ccs.SlotThreeTutorialPopup}
 */
_ccs.SlotThreeTutorialPopup.create = function () {
    return new _ccs.SlotThreeTutorialPopup();
};
