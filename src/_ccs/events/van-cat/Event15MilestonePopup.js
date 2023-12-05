/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.Event15MilestonePopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.Event15MilestonePopup = cc.Layer.extend({

    /** @type {ccui.ImageView} */
    _imgPopup: null,
    /** @type {ccui.ImageView} */
    _imgProgressBg: null,
    /** @type {ccui.ImageView} */
    _imgProgress: null,
    /** @type {ccui.ImageView} */
    _imgFrameBubble: null,
    /** @type {ck.Text} */
    _txtAccum: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ccui.Button} */
    _btnClaim: null,
    /** @type {ck.Text} */
    _txtClaim: null,
    /** @type {ccui.Button} */
    _btnClose: null,
    /** @type {ccui.ImageView} */
    _imgRibbon: null,
    /** @type {ccui.ImageView} */
    _imgGift: null,
    /** @type {ck.Text} */
    _txtNote: null,
    /** @type {ItemInfoBubbleWidget} */
    _itemInfoBubbleWidget: null,


    /**
     * _ccs.Event15MilestonePopup constructor
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

        ///// # _imgPopup
        this._imgPopup = new ccui.ImageView();
        this._imgPopup.setName("_imgPopup");
        this.addChild(this._imgPopup);
        this._imgPopup.setCascadeOpacityEnabled(true);
        this._imgPopup.setCascadeColorEnabled(true);
        this._imgPopup.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPopup, 0.5, 0.42);
        let _imgPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPopup);
        _imgPopupLayoutComponent.setPositionPercentXEnabled(true);
        _imgPopupLayoutComponent.setPositionPercentX(0.5);
        _imgPopupLayoutComponent.setPositionPercentYEnabled(true);
        _imgPopupLayoutComponent.setPositionPercentY(0.42);
        this._imgPopup.loadTexture("event15_board_milestone.png", 1);
        this._imgPopup.setUnifySizeEnabled(false);
        this._imgPopup.ignoreContentAdaptWithSize(false);
        this._imgPopup.setContentSize(cc.size(640, 589));
        this._imgPopup.setTouchEnabled(true);

        ///// # _imgProgressBg
        this._imgProgressBg = new ccui.ImageView();
        this._imgProgressBg.setName("_imgProgressBg");
        this._imgPopup.addChild(this._imgProgressBg);
        this._imgProgressBg.setCascadeOpacityEnabled(true);
        this._imgProgressBg.setCascadeColorEnabled(true);
        this._imgProgressBg.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgProgressBg, 0.47, 0.22);
        let _imgProgressBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgProgressBg);
        _imgProgressBgLayoutComponent.setPositionPercentXEnabled(true);
        _imgProgressBgLayoutComponent.setPositionPercentX(0.47);
        _imgProgressBgLayoutComponent.setPositionPercentYEnabled(true);
        _imgProgressBgLayoutComponent.setPositionPercentY(0.22);
        this._imgProgressBg.loadTexture("event15_progress_milestone.png", 1);
        this._imgProgressBg.setUnifySizeEnabled(false);
        this._imgProgressBg.ignoreContentAdaptWithSize(false);
        this._imgProgressBg.setScale9Enabled(true);
        this._imgProgressBg.setCapInsets(cc.rect(252, 0, 9, 35));
        this._imgProgressBg.setContentSize(cc.size(494, 25));
        this._imgProgressBg.setTouchEnabled(false);

        ///// # _imgProgress
        this._imgProgress = new ccui.ImageView();
        this._imgProgress.setName("_imgProgress");
        this._imgProgressBg.addChild(this._imgProgress);
        this._imgProgress.setCascadeOpacityEnabled(true);
        this._imgProgress.setCascadeColorEnabled(true);
        this._imgProgress.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgProgress, 0.011, 0.58);
        let _imgProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgProgress);
        _imgProgressLayoutComponent.setPositionPercentXEnabled(true);
        _imgProgressLayoutComponent.setPositionPercentX(0.011);
        _imgProgressLayoutComponent.setPositionPercentYEnabled(true);
        _imgProgressLayoutComponent.setPositionPercentY(0.58);
        this._imgProgress.loadTexture("event15_progress_milestone_green.png", 1);
        this._imgProgress.setUnifySizeEnabled(false);
        this._imgProgress.ignoreContentAdaptWithSize(false);
        this._imgProgress.setScale9Enabled(true);
        this._imgProgress.setCapInsets(cc.rect(15, 0, 100, 18));
        this._imgProgress.setContentSize(cc.size(29, 13));
        this._imgProgress.setTouchEnabled(false);

        ///// # _imgFrameBubble
        this._imgFrameBubble = new ccui.ImageView();
        this._imgFrameBubble.setName("_imgFrameBubble");
        this._imgProgress.addChild(this._imgFrameBubble);
        this._imgFrameBubble.setCascadeOpacityEnabled(true);
        this._imgFrameBubble.setCascadeColorEnabled(true);
        this._imgFrameBubble.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._imgFrameBubble, 0.92, -1.7692);
        let _imgFrameBubbleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFrameBubble);
        _imgFrameBubbleLayoutComponent.setPositionPercentXEnabled(true);
        _imgFrameBubbleLayoutComponent.setPositionPercentX(0.92);
        this._imgFrameBubble.loadTexture("event15_frame_kittybank.png", 1);
        this._imgFrameBubble.setUnifySizeEnabled(false);
        this._imgFrameBubble.ignoreContentAdaptWithSize(false);
        this._imgFrameBubble.setContentSize(cc.size(65, 50));
        this._imgFrameBubble.setTouchEnabled(false);

        ///// # _txtAccum
        this._txtAccum = new ck.Text();
        this._txtAccum.setName("_txtAccum");
        this._imgFrameBubble.addChild(this._txtAccum);
        this._txtAccum.setCascadeOpacityEnabled(true);
        this._txtAccum.setCascadeColorEnabled(true);
        this._txtAccum.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAccum, 0.2762, 0.3771);
        let _txtAccumLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAccum);
        this._txtAccum.setTouchEnabled(false);
        this._txtAccum.ignoreContentAdaptWithSize(true);
        this._txtAccum.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAccum.setDefaultFontSize(25);
        this._txtAccum.setString("0");
        this._txtAccum.setTextHorizontalAlignment(1);
        this._txtAccum.setTextVerticalAlignment(1);
        this._txtAccum.enableOutline(cc.color(26, 26, 26, 255), 1);

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._imgFrameBubble.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.678, 0.3787);
        this._imgIcon.setScale(0.6, 0.6);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.678);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.3787);
        this._imgIcon.loadTexture("event15_cat_head.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(49, 55));
        this._imgIcon.setTouchEnabled(false);

        ///// # _btnClaim
        this._btnClaim = new ccui.Button();
        this._btnClaim.setName("_btnClaim");
        this._imgPopup.addChild(this._btnClaim);
        this._btnClaim.setCascadeOpacityEnabled(true);
        this._btnClaim.setCascadeColorEnabled(true);
        this._btnClaim.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnClaim, 0.5, -0.0988);
        let _btnClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnClaim);
        _btnClaimLayoutComponent.setPositionPercentXEnabled(true);
        _btnClaimLayoutComponent.setPositionPercentX(0.5);
        _btnClaimLayoutComponent.setPositionPercentYEnabled(true);
        _btnClaimLayoutComponent.setPositionPercentY(-0.0988);
        this._btnClaim.loadTextureDisabled("buttons/rectangles/02_Green.png", 1);
        this._btnClaim.loadTexturePressed("buttons/rectangles/02_Green.png", 1);
        this._btnClaim.loadTextureNormal("buttons/rectangles/02_Green.png", 1);
        this._btnClaim.setUnifySizeEnabled(false);
        this._btnClaim.ignoreContentAdaptWithSize(false);
        this._btnClaim.setScale9Enabled(true);
        this._btnClaim.setCapInsets(cc.rect(15, 11, 210, 66));
        this._btnClaim.setContentSize(cc.size(240, 88));
        this._btnClaim.setTouchEnabled(true);

        ///// # _txtClaim
        this._txtClaim = new ck.Text();
        this._txtClaim.setName("_txtClaim");
        this._btnClaim.addChild(this._txtClaim);
        this._txtClaim.setCascadeOpacityEnabled(true);
        this._txtClaim.setCascadeColorEnabled(true);
        this._txtClaim.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtClaim, 0.5, 0.53);
        let _txtClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtClaim);
        _txtClaimLayoutComponent.setPositionPercentXEnabled(true);
        _txtClaimLayoutComponent.setPositionPercentX(0.5);
        _txtClaimLayoutComponent.setPositionPercentYEnabled(true);
        _txtClaimLayoutComponent.setPositionPercentY(0.53);
        this._txtClaim.setTouchEnabled(false);
        this._txtClaim.ignoreContentAdaptWithSize(true);
        this._txtClaim.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtClaim.setDefaultFontSize(40);
        this._txtClaim.setString(gm.localize.getText("TXT_CLAIM"));
        this._txtClaim.setTextHorizontalAlignment(1);
        this._txtClaim.setTextVerticalAlignment(1);
        this._txtClaim.enableOutline(cc.color(0, 128, 0, 255), 2);

        ///// # _btnClose
        this._btnClose = new ccui.Button();
        this._btnClose.setName("_btnClose");
        this._imgPopup.addChild(this._btnClose);
        this._btnClose.setCascadeOpacityEnabled(true);
        this._btnClose.setCascadeColorEnabled(true);
        this._btnClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnClose, 0.9074, 1.4299);
        this._btnClose.setScale(0.7, 0.7);
        let _btnCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnClose);
        _btnCloseLayoutComponent.setPositionPercentXEnabled(true);
        _btnCloseLayoutComponent.setPositionPercentX(0.9074);
        _btnCloseLayoutComponent.setPositionPercentYEnabled(true);
        _btnCloseLayoutComponent.setPositionPercentY(1.4299);
        this._btnClose.loadTextureDisabled("buttons/circles/Close.png", 1);
        this._btnClose.loadTexturePressed("buttons/circles/Close.png", 1);
        this._btnClose.loadTextureNormal("buttons/circles/Close.png", 1);
        this._btnClose.setUnifySizeEnabled(false);
        this._btnClose.ignoreContentAdaptWithSize(false);
        this._btnClose.setContentSize(cc.size(68, 76));
        this._btnClose.setTouchEnabled(true);

        ///// # _imgRibbon
        this._imgRibbon = new ccui.ImageView();
        this._imgRibbon.setName("_imgRibbon");
        this._imgPopup.addChild(this._imgRibbon);
        this._imgRibbon.setCascadeOpacityEnabled(true);
        this._imgRibbon.setCascadeColorEnabled(true);
        this._imgRibbon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRibbon, 0.5, 1.03);
        let _imgRibbonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRibbon);
        _imgRibbonLayoutComponent.setPositionPercentXEnabled(true);
        _imgRibbonLayoutComponent.setPositionPercentX(0.5);
        _imgRibbonLayoutComponent.setPositionPercentYEnabled(true);
        _imgRibbonLayoutComponent.setPositionPercentY(1.03);
        this._imgRibbon.loadTexture("event15_ribbon.png", 1);
        this._imgRibbon.setUnifySizeEnabled(false);
        this._imgRibbon.ignoreContentAdaptWithSize(false);
        this._imgRibbon.setContentSize(cc.size(640, 769));
        this._imgRibbon.setTouchEnabled(false);

        ///// # _imgGift
        this._imgGift = new ccui.ImageView();
        this._imgGift.setName("_imgGift");
        this._imgRibbon.addChild(this._imgGift);
        this._imgGift.setCascadeOpacityEnabled(true);
        this._imgGift.setCascadeColorEnabled(true);
        this._imgGift.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgGift, 0.5, 0.61);
        this._imgGift.setScale(1.4, 1.4);
        let _imgGiftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGift);
        _imgGiftLayoutComponent.setPositionPercentXEnabled(true);
        _imgGiftLayoutComponent.setPositionPercentX(0.5);
        _imgGiftLayoutComponent.setPositionPercentYEnabled(true);
        _imgGiftLayoutComponent.setPositionPercentY(0.61);
        this._imgGift.loadTexture("event15_icon_gift.png", 1);
        this._imgGift.setUnifySizeEnabled(false);
        this._imgGift.ignoreContentAdaptWithSize(false);
        this._imgGift.setContentSize(cc.size(103, 112));
        this._imgGift.setTouchEnabled(false);

        ///// # _txtNote
        this._txtNote = new ck.Text();
        this._txtNote.setName("_txtNote");
        this._imgPopup.addChild(this._txtNote);
        this._txtNote.setCascadeOpacityEnabled(true);
        this._txtNote.setCascadeColorEnabled(true);
        this._txtNote.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNote, 0.5, 0.8499);
        let _txtNoteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNote);
        _txtNoteLayoutComponent.setPositionPercentXEnabled(true);
        _txtNoteLayoutComponent.setPositionPercentX(0.5);
        _txtNoteLayoutComponent.setPositionPercentYEnabled(true);
        _txtNoteLayoutComponent.setPositionPercentY(0.8499);
        this._txtNote.setTouchEnabled(false);
        this._txtNote.setUnifySizeEnabled(false);
        this._txtNote.ignoreContentAdaptWithSize(false);
        this._txtNote.setContentSize(cc.size(492, 111.8909));
        this._txtNote.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtNote.setDefaultFontSize(25);
        this._txtNote.setString(gm.localize.getText("TXT_EVENT15_MILESTONE"));
        this._txtNote.setTextHorizontalAlignment(1);
        this._txtNote.setTextVerticalAlignment(1);

        ///// # _itemInfoBubbleWidget
        this._itemInfoBubbleWidget = new ItemInfoBubbleWidget();
        this._itemInfoBubbleWidget.setName("_itemInfoBubbleWidget");
        this._imgPopup.addChild(this._itemInfoBubbleWidget);
        this._itemInfoBubbleWidget.setCascadeOpacityEnabled(true);
        this._itemInfoBubbleWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._itemInfoBubbleWidget, 0.46, 0.3579);
        this._itemInfoBubbleWidget.setVisible(false);
        let _itemInfoBubbleWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._itemInfoBubbleWidget);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentX(0.46);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _itemInfoBubbleWidgetLayoutComponent.setPositionPercentY(0.3579);

    },


    playCCSAnimShow: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimShow();
    },

    resetCCSAnimShow: function () {
    
    }
});

/**
 * Create Event15MilestonePopup
 * @returns {_ccs.Event15MilestonePopup}
 */
_ccs.Event15MilestonePopup.create = function () {
    return new _ccs.Event15MilestonePopup();
};
