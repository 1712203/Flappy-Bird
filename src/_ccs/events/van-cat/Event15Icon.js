/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.Event15Icon
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.Event15Icon = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ccui.ImageView} */
    _imgBase: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ccui.ImageView} */
    _imgRedDot: null,
    /** @type {ccui.ImageView} */
    _imgTimebg: null,
    /** @type {ck.Text} */
    _txtTimeLeft: null,
    /** @type {cc.Node} */
    nodeProgress: null,
    /** @type {ccui.Button} */
    btnTipProgress: null,
    /** @type {ccui.ImageView} */
    imageBGProgress: null,
    /** @type {ccui.Layout} */
    panelProgress: null,
    /** @type {ccui.ImageView} */
    imageProgress: null,
    /** @type {cc.Node} */
    nodeMilestone: null,
    /** @type {ccui.Button} */
    btnGiftMilestone: null,
    /** @type {ck.Text} */
    labelMilestone: null,
    /** @type {ccui.ImageView} */
    imageBgrGiftTips: null,
    /** @type {ccui.ImageView} */
    imageBgrDup: null,
    /** @type {ck.Text} */
    txtGiftTips: null,
    /** @type {ck.Text} */
    labelProgress: null,
    /** @type {ck.Text} */
    labelComeBackProgress: null,
    /** @type {cc.Node} */
    nodeImgFrame: null,
    /** @type {ccui.ImageView} */
    _imgFrame: null,
    /** @type {ck.Text} */
    _txtFull: null,
    /** @type {ccui.ImageView} */
    imageBgrTips: null,
    /** @type {ccui.ImageView} */
    imageBgrDup: null,
    /** @type {ck.Text} */
    text_Tips: null,


    /**
     * _ccs.Event15Icon constructor
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

        ///// # _root
        this._root = new ccui.Layout();
        this._root.setName("_root");
        this.addChild(this._root);
        this._root.setCascadeOpacityEnabled(true);
        this._root.setCascadeColorEnabled(true);
        this._root.setAnchorPoint(cc.p(0.5, 0.5));
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        _rootLayoutComponent.setPositionPercentXEnabled(true);
        _rootLayoutComponent.setPositionPercentX(0);
        _rootLayoutComponent.setPositionPercentYEnabled(true);
        _rootLayoutComponent.setPositionPercentY(0);
        this._root.setTouchEnabled(false);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(90, 143.3534));

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._root.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.5);
        this._imgBackground.setScale(0.9, 0.9);
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(0.5);
        this._imgBackground.loadTexture("icons/color/events/IconEventBackground.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setContentSize(cc.size(128, 128));
        this._imgBackground.setTouchEnabled(false);

        ///// # _imgBase
        this._imgBase = new ccui.ImageView();
        this._imgBase.setName("_imgBase");
        this._root.addChild(this._imgBase);
        this._imgBase.setCascadeOpacityEnabled(true);
        this._imgBase.setCascadeColorEnabled(true);
        this._imgBase.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBase, 0.5, 0.3128);
        this._imgBase.setScale(1.2, 1.2);
        let _imgBaseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBase);
        _imgBaseLayoutComponent.setPositionPercentXEnabled(true);
        _imgBaseLayoutComponent.setPositionPercentX(0.5);
        _imgBaseLayoutComponent.setPositionPercentYEnabled(true);
        _imgBaseLayoutComponent.setPositionPercentY(0.3128);
        this._imgBase.loadTexture("e15_cat_base.png", 1);
        this._imgBase.setUnifySizeEnabled(false);
        this._imgBase.ignoreContentAdaptWithSize(false);
        this._imgBase.setContentSize(cc.size(71, 20));
        this._imgBase.setTouchEnabled(false);

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._root.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.5392);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.5392);
        this._imgIcon.loadTexture("e15_cat_gray.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(95, 75));
        this._imgIcon.setTouchEnabled(false);

        ///// # _imgRedDot
        this._imgRedDot = new ccui.ImageView();
        this._imgRedDot.setName("_imgRedDot");
        this._root.addChild(this._imgRedDot);
        this._imgRedDot.setCascadeOpacityEnabled(true);
        this._imgRedDot.setCascadeColorEnabled(true);
        this._imgRedDot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRedDot, 0.9891, 0.5995);
        let _imgRedDotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRedDot);
        _imgRedDotLayoutComponent.setPositionPercentXEnabled(true);
        _imgRedDotLayoutComponent.setPositionPercentX(0.9891);
        _imgRedDotLayoutComponent.setPositionPercentYEnabled(true);
        _imgRedDotLayoutComponent.setPositionPercentY(0.5995);
        this._imgRedDot.loadTexture("basics/other/RedDot.png", 1);
        this._imgRedDot.setUnifySizeEnabled(false);
        this._imgRedDot.ignoreContentAdaptWithSize(false);
        this._imgRedDot.setContentSize(cc.size(31, 31));
        this._imgRedDot.setTouchEnabled(false);

        ///// # _imgTimebg
        this._imgTimebg = new ccui.ImageView();
        this._imgTimebg.setName("_imgTimebg");
        this._root.addChild(this._imgTimebg);
        this._imgTimebg.setCascadeOpacityEnabled(true);
        this._imgTimebg.setCascadeColorEnabled(true);
        this._imgTimebg.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTimebg, 0.5, 0.4397);
        this._imgTimebg.setScale(0.85, 0.85);
        let _imgTimebgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTimebg);
        _imgTimebgLayoutComponent.setPositionPercentXEnabled(true);
        _imgTimebgLayoutComponent.setPositionPercentX(0.5);
        _imgTimebgLayoutComponent.setPositionPercentYEnabled(true);
        _imgTimebgLayoutComponent.setPositionPercentY(0.4397);
        this._imgTimebg.loadTexture("icons/color/events/IconEventTimerBackground.png", 1);
        this._imgTimebg.setUnifySizeEnabled(false);
        this._imgTimebg.ignoreContentAdaptWithSize(false);
        this._imgTimebg.setContentSize(cc.size(128, 128));
        this._imgTimebg.setTouchEnabled(false);

        ///// # _txtTimeLeft
        this._txtTimeLeft = new ck.Text();
        this._txtTimeLeft.setName("_txtTimeLeft");
        this._root.addChild(this._txtTimeLeft);
        this._txtTimeLeft.setCascadeOpacityEnabled(true);
        this._txtTimeLeft.setCascadeColorEnabled(true);
        this._txtTimeLeft.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTimeLeft, 0.5, 0.181);
        let _txtTimeLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTimeLeft);
        _txtTimeLeftLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentX(0.5);
        _txtTimeLeftLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentY(0.181);
        this._txtTimeLeft.setTouchEnabled(false);
        this._txtTimeLeft.ignoreContentAdaptWithSize(true);
        this._txtTimeLeft.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtTimeLeft.setDefaultFontSize(17);
        this._txtTimeLeft.setString(gm.localize.getText("TXT_09D_09H"));
        this._txtTimeLeft.setTextHorizontalAlignment(1);
        this._txtTimeLeft.setTextVerticalAlignment(1);
        this._txtTimeLeft.enableOutline(cc.color(26, 26, 26, 255), 2);

        ///// # nodeProgress
        this.nodeProgress = new cc.Node();
        this.nodeProgress.setName("nodeProgress");
        this._root.addChild(this.nodeProgress);
        this.nodeProgress.setCascadeOpacityEnabled(true);
        this.nodeProgress.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this.nodeProgress, 0.5, 0.2);
        this.nodeProgress.setVisible(false);
        this.nodeProgress.setScale(0.2, 0.2);
        let nodeProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.nodeProgress);
        nodeProgressLayoutComponent.setPositionPercentXEnabled(true);
        nodeProgressLayoutComponent.setPositionPercentX(0.5);
        nodeProgressLayoutComponent.setPositionPercentYEnabled(true);
        nodeProgressLayoutComponent.setPositionPercentY(0.2);

        ///// # btnTipProgress
        this.btnTipProgress = new ccui.Button();
        this.btnTipProgress.setName("btnTipProgress");
        this.nodeProgress.addChild(this.btnTipProgress);
        this.btnTipProgress.setCascadeOpacityEnabled(true);
        this.btnTipProgress.setCascadeColorEnabled(true);
        this.btnTipProgress.setAnchorPoint(cc.p(0.5, 0.5));
        this.btnTipProgress.setScale(0.9, 1);
        this.btnTipProgress.setOpacity(0);
        let btnTipProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.btnTipProgress);
        btnTipProgressLayoutComponent.setPositionPercentXEnabled(true);
        btnTipProgressLayoutComponent.setPositionPercentX(0);
        btnTipProgressLayoutComponent.setPositionPercentYEnabled(true);
        btnTipProgressLayoutComponent.setPositionPercentY(0);
        this.btnTipProgress.setUnifySizeEnabled(false);
        this.btnTipProgress.ignoreContentAdaptWithSize(false);
        this.btnTipProgress.setScale9Enabled(true);
        this.btnTipProgress.setCapInsets(cc.rect(15, 5, 11, 6));
        this.btnTipProgress.setContentSize(cc.size(626, 41));
        this.btnTipProgress.setTouchEnabled(true);

        ///// # imageBGProgress
        this.imageBGProgress = new ccui.ImageView();
        this.imageBGProgress.setName("imageBGProgress");
        this.nodeProgress.addChild(this.imageBGProgress);
        this.imageBGProgress.setCascadeOpacityEnabled(true);
        this.imageBGProgress.setCascadeColorEnabled(true);
        this.imageBGProgress.setAnchorPoint(cc.p(0.5, 0.5));
        this.imageBGProgress.setScale(0.9, 1);
        let imageBGProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imageBGProgress);
        imageBGProgressLayoutComponent.setPositionPercentXEnabled(true);
        imageBGProgressLayoutComponent.setPositionPercentX(0);
        imageBGProgressLayoutComponent.setPositionPercentYEnabled(true);
        imageBGProgressLayoutComponent.setPositionPercentY(0);
        this.imageBGProgress.loadTexture("Default/ImageFile.png", 0);
        this.imageBGProgress.setUnifySizeEnabled(false);
        this.imageBGProgress.ignoreContentAdaptWithSize(false);
        this.imageBGProgress.setContentSize(cc.size(586, 48));
        this.imageBGProgress.setTouchEnabled(false);

        ///// # panelProgress
        this.panelProgress = new ccui.Layout();
        this.panelProgress.setName("panelProgress");
        this.imageBGProgress.addChild(this.panelProgress);
        this.panelProgress.setCascadeOpacityEnabled(true);
        this.panelProgress.setCascadeColorEnabled(true);
        this.panelProgress.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this.panelProgress, 0.0128, 0.5);
        let panelProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.panelProgress);
        panelProgressLayoutComponent.setPositionPercentXEnabled(true);
        panelProgressLayoutComponent.setPositionPercentX(0.0128);
        panelProgressLayoutComponent.setPositionPercentYEnabled(true);
        panelProgressLayoutComponent.setPositionPercentY(0.5);
        this.panelProgress.setTouchEnabled(false);
        this.panelProgress.setUnifySizeEnabled(false);
        this.panelProgress.ignoreContentAdaptWithSize(false);
        this.panelProgress.setContentSize(cc.size(571.4741, 51));
        this.panelProgress.setClippingEnabled(true);

        ///// # imageProgress
        this.imageProgress = new ccui.ImageView();
        this.imageProgress.setName("imageProgress");
        this.panelProgress.addChild(this.imageProgress);
        this.imageProgress.setCascadeOpacityEnabled(true);
        this.imageProgress.setCascadeColorEnabled(true);
        this.imageProgress.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this.imageProgress, 0, 0.5);
        let imageProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imageProgress);
        imageProgressLayoutComponent.setPositionPercentXEnabled(true);
        imageProgressLayoutComponent.setPositionPercentX(0);
        imageProgressLayoutComponent.setPositionPercentYEnabled(true);
        imageProgressLayoutComponent.setPositionPercentY(0.5);
        this.imageProgress.loadTexture("Default/ImageFile.png", 0);
        this.imageProgress.setUnifySizeEnabled(false);
        this.imageProgress.ignoreContentAdaptWithSize(false);
        this.imageProgress.setScale9Enabled(true);
        this.imageProgress.setCapInsets(cc.rect(4, 12, 38, 22));
        this.imageProgress.setContentSize(cc.size(570.3237, 35));
        this.imageProgress.setTouchEnabled(false);

        ///// # nodeMilestone
        this.nodeMilestone = new cc.Node();
        this.nodeMilestone.setName("nodeMilestone");
        this.imageBGProgress.addChild(this.nodeMilestone);
        this.nodeMilestone.setCascadeOpacityEnabled(true);
        this.nodeMilestone.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this.nodeMilestone, 1, 0.5);
        this.nodeMilestone.setVisible(false);
        let nodeMilestoneLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.nodeMilestone);
        nodeMilestoneLayoutComponent.setPositionPercentXEnabled(true);
        nodeMilestoneLayoutComponent.setPositionPercentX(1);
        nodeMilestoneLayoutComponent.setPositionPercentYEnabled(true);
        nodeMilestoneLayoutComponent.setPositionPercentY(0.5);

        ///// # btnGiftMilestone
        this.btnGiftMilestone = new ccui.Button();
        this.btnGiftMilestone.setName("btnGiftMilestone");
        this.nodeMilestone.addChild(this.btnGiftMilestone);
        this.btnGiftMilestone.setCascadeOpacityEnabled(true);
        this.btnGiftMilestone.setCascadeColorEnabled(true);
        this.btnGiftMilestone.setAnchorPoint(cc.p(0.5, 0.5));
        let btnGiftMilestoneLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.btnGiftMilestone);
        btnGiftMilestoneLayoutComponent.setPositionPercentXEnabled(true);
        btnGiftMilestoneLayoutComponent.setPositionPercentX(0);
        btnGiftMilestoneLayoutComponent.setPositionPercentYEnabled(true);
        btnGiftMilestoneLayoutComponent.setPositionPercentY(0);
        this.btnGiftMilestone.setUnifySizeEnabled(false);
        this.btnGiftMilestone.ignoreContentAdaptWithSize(false);
        this.btnGiftMilestone.setScale9Enabled(true);
        this.btnGiftMilestone.setCapInsets(cc.rect(-15, -11, 30, 22));
        this.btnGiftMilestone.setContentSize(cc.size(100, 100));
        this.btnGiftMilestone.setTouchEnabled(true);

        ///// # labelMilestone
        this.labelMilestone = new ck.Text();
        this.labelMilestone.setName("labelMilestone");
        this.nodeMilestone.addChild(this.labelMilestone);
        this.labelMilestone.setCascadeOpacityEnabled(true);
        this.labelMilestone.setCascadeColorEnabled(true);
        this.labelMilestone.setAnchorPoint(cc.p(0.5, 0.5));
        this.labelMilestone.setPosition(0, -45);
        let labelMilestoneLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.labelMilestone);
        labelMilestoneLayoutComponent.setPositionPercentXEnabled(true);
        labelMilestoneLayoutComponent.setPositionPercentX(0);
        this.labelMilestone.setTouchEnabled(false);
        this.labelMilestone.ignoreContentAdaptWithSize(true);
        this.labelMilestone.setDefaultFontSize(27);
        this.labelMilestone.setString(gm.localize.getText("TXT_@GOLD@"));
        this.labelMilestone.setTextHorizontalAlignment(1);
        this.labelMilestone.setTextVerticalAlignment(1);
        this.labelMilestone.enableOutline(cc.color(51, 77, 51, 255), 3);

        ///// # imageBgrGiftTips
        this.imageBgrGiftTips = new ccui.ImageView();
        this.imageBgrGiftTips.setName("imageBgrGiftTips");
        this.nodeMilestone.addChild(this.imageBgrGiftTips);
        this.imageBgrGiftTips.setCascadeOpacityEnabled(true);
        this.imageBgrGiftTips.setCascadeColorEnabled(true);
        this.imageBgrGiftTips.setAnchorPoint(cc.p(0.5, 0));
        this.imageBgrGiftTips.setVisible(false);
        let imageBgrGiftTipsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imageBgrGiftTips);
        imageBgrGiftTipsLayoutComponent.setPositionPercentXEnabled(true);
        imageBgrGiftTipsLayoutComponent.setPositionPercentX(0);
        imageBgrGiftTipsLayoutComponent.setPositionPercentYEnabled(true);
        imageBgrGiftTipsLayoutComponent.setPositionPercentY(0);
        this.imageBgrGiftTips.loadTexture("Default/ImageFile.png", 0);
        this.imageBgrGiftTips.setUnifySizeEnabled(false);
        this.imageBgrGiftTips.ignoreContentAdaptWithSize(false);
        this.imageBgrGiftTips.setScale9Enabled(true);
        this.imageBgrGiftTips.setCapInsets(cc.rect(-22, 7, 90, 32));
        this.imageBgrGiftTips.setContentSize(cc.size(189, 65));
        this.imageBgrGiftTips.setTouchEnabled(false);

        ///// # imageBgrDup
        this.imageBgrDup = new ccui.ImageView();
        this.imageBgrDup.setName("imageBgrDup");
        this.imageBgrGiftTips.addChild(this.imageBgrDup);
        this.imageBgrDup.setCascadeOpacityEnabled(true);
        this.imageBgrDup.setCascadeColorEnabled(true);
        this.imageBgrDup.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imageBgrDup, 0.5, 0.5);
        let imageBgrDupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imageBgrDup);
        imageBgrDupLayoutComponent.setPositionPercentXEnabled(true);
        imageBgrDupLayoutComponent.setPositionPercentX(0.5);
        imageBgrDupLayoutComponent.setPositionPercentYEnabled(true);
        imageBgrDupLayoutComponent.setPositionPercentY(0.5);
        imageBgrDupLayoutComponent.setPercentWidthEnabled(true);
        imageBgrDupLayoutComponent.setPercentWidth(1);
        imageBgrDupLayoutComponent.setPercentHeightEnabled(true);
        imageBgrDupLayoutComponent.setPercentHeight(1);
        this.imageBgrDup.loadTexture("Default/ImageFile.png", 0);
        this.imageBgrDup.setUnifySizeEnabled(false);
        this.imageBgrDup.ignoreContentAdaptWithSize(false);
        this.imageBgrDup.setScale9Enabled(true);
        this.imageBgrDup.setCapInsets(cc.rect(-22, 7, 90, 32));
        ck.UIUtils.setSizePercent(this.imageBgrDup, 1, 1);
        this.imageBgrDup.setTouchEnabled(false);

        ///// # txtGiftTips
        this.txtGiftTips = new ck.Text();
        this.txtGiftTips.setName("txtGiftTips");
        this.imageBgrGiftTips.addChild(this.txtGiftTips);
        this.txtGiftTips.setCascadeOpacityEnabled(true);
        this.txtGiftTips.setCascadeColorEnabled(true);
        this.txtGiftTips.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.txtGiftTips, 0.5, 0.5);
        let txtGiftTipsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.txtGiftTips);
        txtGiftTipsLayoutComponent.setPositionPercentXEnabled(true);
        txtGiftTipsLayoutComponent.setPositionPercentX(0.5);
        txtGiftTipsLayoutComponent.setPositionPercentYEnabled(true);
        txtGiftTipsLayoutComponent.setPositionPercentY(0.5);
        txtGiftTipsLayoutComponent.setPercentWidthEnabled(true);
        txtGiftTipsLayoutComponent.setPercentWidth(1);
        txtGiftTipsLayoutComponent.setPercentHeightEnabled(true);
        txtGiftTipsLayoutComponent.setPercentHeight(1);
        this.txtGiftTips.setTouchEnabled(false);
        this.txtGiftTips.setUnifySizeEnabled(false);
        this.txtGiftTips.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this.txtGiftTips, 1, 1);
        this.txtGiftTips.setDefaultFontSize(20);
        this.txtGiftTips.setString(gm.localize.getText("TXT_DÙNG_ĐỂ_CHƠI_HAPPY_SHARK"));
        this.txtGiftTips.setTextHorizontalAlignment(1);
        this.txtGiftTips.setTextVerticalAlignment(1);
        this.txtGiftTips.enableShadow(cc.color(77, 77, 77, 255), cc.size(0, -2), 0);

        ///// # labelProgress
        this.labelProgress = new ck.Text();
        this.labelProgress.setName("labelProgress");
        this.imageBGProgress.addChild(this.labelProgress);
        this.labelProgress.setCascadeOpacityEnabled(true);
        this.labelProgress.setCascadeColorEnabled(true);
        this.labelProgress.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this.labelProgress, 0.7, 1.4);
        this.labelProgress.setVisible(false);
        let labelProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.labelProgress);
        labelProgressLayoutComponent.setPositionPercentXEnabled(true);
        labelProgressLayoutComponent.setPositionPercentX(0.7);
        labelProgressLayoutComponent.setPositionPercentYEnabled(true);
        labelProgressLayoutComponent.setPositionPercentY(1.4);
        this.labelProgress.setTouchEnabled(false);
        this.labelProgress.ignoreContentAdaptWithSize(true);
        this.labelProgress.setDefaultFontSize(27);
        this.labelProgress.setTextHorizontalAlignment(1);
        this.labelProgress.setTextVerticalAlignment(1);
        this.labelProgress.enableOutline(cc.color(51, 77, 51, 255), 3);

        ///// # labelComeBackProgress
        this.labelComeBackProgress = new ck.Text();
        this.labelComeBackProgress.setName("labelComeBackProgress");
        this.imageBGProgress.addChild(this.labelComeBackProgress);
        this.labelComeBackProgress.setCascadeOpacityEnabled(true);
        this.labelComeBackProgress.setCascadeColorEnabled(true);
        this.labelComeBackProgress.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.labelComeBackProgress, 0.5, -0.4);
        this.labelComeBackProgress.setVisible(false);
        let labelComeBackProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.labelComeBackProgress);
        labelComeBackProgressLayoutComponent.setPositionPercentXEnabled(true);
        labelComeBackProgressLayoutComponent.setPositionPercentX(0.5);
        labelComeBackProgressLayoutComponent.setPositionPercentYEnabled(true);
        labelComeBackProgressLayoutComponent.setPositionPercentY(-0.4);
        this.labelComeBackProgress.setTouchEnabled(false);
        this.labelComeBackProgress.ignoreContentAdaptWithSize(true);
        this.labelComeBackProgress.setDefaultFontSize(27);
        this.labelComeBackProgress.setString(gm.localize.getText("TXT_COME_BACK_TOMORROW_FOR_MORE_REWARDS!"));
        this.labelComeBackProgress.setTextHorizontalAlignment(1);
        this.labelComeBackProgress.setTextVerticalAlignment(1);
        this.labelComeBackProgress.enableOutline(cc.color(51, 77, 51, 255), 3);

        ///// # nodeImgFrame
        this.nodeImgFrame = new cc.Node();
        this.nodeImgFrame.setName("nodeImgFrame");
        this._root.addChild(this.nodeImgFrame);
        this.nodeImgFrame.setCascadeOpacityEnabled(true);
        this.nodeImgFrame.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this.nodeImgFrame, 0.5, 0.5964);
        let nodeImgFrameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.nodeImgFrame);
        nodeImgFrameLayoutComponent.setPositionPercentXEnabled(true);
        nodeImgFrameLayoutComponent.setPositionPercentX(0.5);

        ///// # _imgFrame
        this._imgFrame = new ccui.ImageView();
        this._imgFrame.setName("_imgFrame");
        this.nodeImgFrame.addChild(this._imgFrame);
        this._imgFrame.setCascadeOpacityEnabled(true);
        this._imgFrame.setCascadeColorEnabled(true);
        this._imgFrame.setAnchorPoint(cc.p(0.5, 0));
        let _imgFrameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFrame);
        _imgFrameLayoutComponent.setPositionPercentXEnabled(true);
        _imgFrameLayoutComponent.setPositionPercentX(0);
        this._imgFrame.loadTexture("frame_token_1.png", 1);
        this._imgFrame.setUnifySizeEnabled(false);
        this._imgFrame.ignoreContentAdaptWithSize(false);
        this._imgFrame.setContentSize(cc.size(66, 47));
        this._imgFrame.setTouchEnabled(false);

        ///// # _txtFull
        this._txtFull = new ck.Text();
        this._txtFull.setName("_txtFull");
        this._imgFrame.addChild(this._txtFull);
        this._txtFull.setCascadeOpacityEnabled(true);
        this._txtFull.setCascadeColorEnabled(true);
        this._txtFull.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtFull, 0.5, 0.6074);
        this._txtFull.setTextColor(cc.color(106, 32, 15, 255));
        let _txtFullLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtFull);
        _txtFullLayoutComponent.setPositionPercentXEnabled(true);
        _txtFullLayoutComponent.setPositionPercentX(0.5);
        _txtFullLayoutComponent.setPositionPercentYEnabled(true);
        _txtFullLayoutComponent.setPositionPercentY(0.6074);
        this._txtFull.setTouchEnabled(false);
        this._txtFull.ignoreContentAdaptWithSize(true);
        this._txtFull.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtFull.setDefaultFontSize(25);
        this._txtFull.setString(gm.localize.getText("TXT_FULL"));
        this._txtFull.setTextHorizontalAlignment(1);
        this._txtFull.setTextVerticalAlignment(1);

        ///// # imageBgrTips
        this.imageBgrTips = new ccui.ImageView();
        this.imageBgrTips.setName("imageBgrTips");
        this._root.addChild(this.imageBgrTips);
        this.imageBgrTips.setCascadeOpacityEnabled(true);
        this.imageBgrTips.setCascadeColorEnabled(true);
        this.imageBgrTips.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this.imageBgrTips, 0.5, 0.9473);
        this.imageBgrTips.setRotationY(-0.0022);
        let imageBgrTipsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imageBgrTips);
        imageBgrTipsLayoutComponent.setPositionPercentXEnabled(true);
        imageBgrTipsLayoutComponent.setPositionPercentX(0.5);
        imageBgrTipsLayoutComponent.setPositionPercentYEnabled(true);
        imageBgrTipsLayoutComponent.setPositionPercentY(0.9473);
        imageBgrTipsLayoutComponent.setPercentWidthEnabled(true);
        imageBgrTipsLayoutComponent.setPercentWidth(2.1);
        imageBgrTipsLayoutComponent.setPercentHeightEnabled(true);
        imageBgrTipsLayoutComponent.setPercentHeight(0.7222);
        this.imageBgrTips.loadTexture("basics/other/Box_12.png", 1);
        this.imageBgrTips.setUnifySizeEnabled(false);
        this.imageBgrTips.ignoreContentAdaptWithSize(false);
        this.imageBgrTips.setScale9Enabled(true);
        this.imageBgrTips.setCapInsets(cc.rect(68, 39, 18, 48));
        ck.UIUtils.setSizePercent(this.imageBgrTips, 2.1, 0.7222);
        this.imageBgrTips.setTouchEnabled(false);

        ///// # imageBgrDup
        this.imageBgrDup = new ccui.ImageView();
        this.imageBgrDup.setName("imageBgrDup");
        this.imageBgrTips.addChild(this.imageBgrDup);
        this.imageBgrDup.setCascadeOpacityEnabled(true);
        this.imageBgrDup.setCascadeColorEnabled(true);
        this.imageBgrDup.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imageBgrDup, 0.5, 0.5);
        this.imageBgrDup.setRotationY(-0.0022);
        let imageBgrDupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imageBgrDup);
        imageBgrDupLayoutComponent.setPositionPercentXEnabled(true);
        imageBgrDupLayoutComponent.setPositionPercentX(0.5);
        imageBgrDupLayoutComponent.setPositionPercentYEnabled(true);
        imageBgrDupLayoutComponent.setPositionPercentY(0.5);
        imageBgrDupLayoutComponent.setPercentWidthEnabled(true);
        imageBgrDupLayoutComponent.setPercentWidth(1);
        imageBgrDupLayoutComponent.setPercentHeightEnabled(true);
        imageBgrDupLayoutComponent.setPercentHeight(1);
        this.imageBgrDup.loadTexture("basics/other/Box_12.png", 1);
        this.imageBgrDup.setUnifySizeEnabled(false);
        this.imageBgrDup.ignoreContentAdaptWithSize(false);
        this.imageBgrDup.setScale9Enabled(true);
        this.imageBgrDup.setCapInsets(cc.rect(68, 39, 18, 48));
        ck.UIUtils.setSizePercent(this.imageBgrDup, 1, 1);
        this.imageBgrDup.setTouchEnabled(false);

        ///// # text_Tips
        this.text_Tips = new ck.Text();
        this.text_Tips.setName("text_Tips");
        this.imageBgrTips.addChild(this.text_Tips);
        this.text_Tips.setCascadeOpacityEnabled(true);
        this.text_Tips.setCascadeColorEnabled(true);
        this.text_Tips.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.text_Tips, 0.5, 0.5);
        this.text_Tips.setRotationX(0.3397);
        this.text_Tips.setRotationY(0.3386);
        this.text_Tips.setTextColor(cc.color(255, 165, 0, 255));
        let text_TipsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.text_Tips);
        text_TipsLayoutComponent.setPositionPercentXEnabled(true);
        text_TipsLayoutComponent.setPositionPercentX(0.5);
        text_TipsLayoutComponent.setPositionPercentYEnabled(true);
        text_TipsLayoutComponent.setPositionPercentY(0.5);
        text_TipsLayoutComponent.setPercentWidthEnabled(true);
        text_TipsLayoutComponent.setPercentWidth(1);
        text_TipsLayoutComponent.setPercentHeightEnabled(true);
        text_TipsLayoutComponent.setPercentHeight(1);
        this.text_Tips.setTouchEnabled(false);
        this.text_Tips.setUnifySizeEnabled(false);
        this.text_Tips.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this.text_Tips, 1, 1);
        this.text_Tips.setFontName("fonts/LilitaOneRegular.ttf");
        this.text_Tips.setDefaultFontSize(20);
        this.text_Tips.setString(gm.localize.getText("TXT_KITTY_BANK"));
        this.text_Tips.setTextHorizontalAlignment(1);
        this.text_Tips.setTextVerticalAlignment(1);

    },


    playCCSAnimBubble: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimBubble();
    
        let _imgFrameAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(4 / (30 * speed), 0, 1.67),
                    cc.moveTo(8 / (30 * speed), 0, 5),
                    cc.moveTo(12 / (30 * speed), 0, 10),
                    cc.moveTo(24 / (30 * speed), 0, 0.77),
                    cc.moveTo(2 / (30 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.scaleTo(4 / (30 * speed), 1.04, 0.96),
                    cc.scaleTo(8 / (30 * speed), 1.08, 0.92),
                    cc.scaleTo(12 / (30 * speed), 0.96, 1.04),
                    cc.scaleTo(24 / (30 * speed), 1, 1),
                    cc.scaleTo(2 / (30 * speed), 1, 1)
                ),
                cc.sequence(
                    cc.rotateBy(4 / (30 * speed), 0, 0),
                    cc.rotateBy(8 / (30 * speed), 0, 0),
                    cc.rotateBy(12 / (30 * speed), 0, 0),
                    cc.rotateBy(24 / (30 * speed), 0, 0),
                    cc.rotateBy(2 / (30 * speed), 0, 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgFrame.setPosition(0, 0);
                this._imgFrame.setScale(1, 1);
                this._imgFrame.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgFrameAction = _imgFrameAction.repeatForever();
        } else _imgFrameAction = cc.sequence(
            cc.delayTime(delay),
            _imgFrameAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgFrame.runAction(_imgFrameAction);
    },

    resetCCSAnimBubble: function () {
        this._imgFrame.stopAllActions();
        this._imgFrame.setPosition(0, 0);
        this._imgFrame.setScale(1, 1);
        this._imgFrame.setRotation(0);
    }
});

/**
 * Create Event15Icon
 * @returns {_ccs.Event15Icon}
 */
_ccs.Event15Icon.create = function () {
    return new _ccs.Event15Icon();
};
