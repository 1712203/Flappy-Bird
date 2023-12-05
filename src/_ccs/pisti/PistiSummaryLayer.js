/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PistiSummaryLayer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.PistiSummaryLayer = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _layoutBackground: null,
    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutMain: null,
    /** @type {ccui.ImageView} */
    _imgTitle: null,
    /** @type {cc.Node} */
    _nodeNPC: null,
    /** @type {ccui.ImageView} */
    _imgBoard: null,
    /** @type {ccui.ImageView} */
    _imgTable: null,
    /** @type {ck.Text} */
    _txtYouWin: null,
    /** @type {ccui.Layout} */
    _layoutStat: null,
    /** @type {ck.GridViewVertical} */
    _gridViewStat: null,
    /** @type {ccui.Layout} */
    _layoutReward: null,
    /** @type {ck.GridViewHorizontal} */
    _gridViewCurrency: null,
    /** @type {ck.GridViewHorizontal} */
    _gridViewItem: null,
    /** @type {ck.Text} */
    _txtTapToClose: null,
    /** @type {ShareImageRewardWidget} */
    _shareImageReward: null,


    /**
     * _ccs.PistiSummaryLayer constructor
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

        ///// # _layoutBackground
        this._layoutBackground = new ccui.Layout();
        this._layoutBackground.setName("_layoutBackground");
        this.addChild(this._layoutBackground);
        this._layoutBackground.setCascadeOpacityEnabled(true);
        this._layoutBackground.setCascadeColorEnabled(true);
        this._layoutBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutBackground, 0.5, 0.5);
        if (!PlatformUtils.hasNotch()) {
            let _layoutBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBackground);
            _layoutBackgroundLayoutComponent.setPositionPercentXEnabled(true);
            _layoutBackgroundLayoutComponent.setPositionPercentX(0.5);
            _layoutBackgroundLayoutComponent.setPositionPercentYEnabled(true);
            _layoutBackgroundLayoutComponent.setPositionPercentY(0.5);
            _layoutBackgroundLayoutComponent.setPercentWidthEnabled(true);
            _layoutBackgroundLayoutComponent.setPercentWidth(1);
            _layoutBackgroundLayoutComponent.setPercentHeightEnabled(true);
            _layoutBackgroundLayoutComponent.setPercentHeight(1);
        }
        this._layoutBackground.setTouchEnabled(true);
        this._layoutBackground.setUnifySizeEnabled(false);
        this._layoutBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBackground, 1, 1);
        this._layoutBackground.setBackGroundColorType(1);
        this._layoutBackground.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutBackground.setBackGroundColorOpacity(191);
        UIUtils.initFullScreenBackground(this._layoutBackground);

        ///// # _layoutRoot
        this._layoutRoot = new ccui.Layout();
        this._layoutRoot.setName("_layoutRoot");
        this.addChild(this._layoutRoot);
        this._layoutRoot.setCascadeOpacityEnabled(true);
        this._layoutRoot.setCascadeColorEnabled(true);
        this._layoutRoot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutRoot, 0.5, 0.5);
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        _layoutRootLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRootLayoutComponent.setPositionPercentX(0.5);
        _layoutRootLayoutComponent.setPositionPercentYEnabled(true);
        _layoutRootLayoutComponent.setPositionPercentY(0.5);
        _layoutRootLayoutComponent.setPercentHeightEnabled(true);
        _layoutRootLayoutComponent.setPercentHeight(1);
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this._layoutRoot, 1);
        this._layoutRoot.setContentSize(cc.size(640, this._layoutRoot.height));

        ///// # _layoutMain
        this._layoutMain = new ccui.Layout();
        this._layoutMain.setName("_layoutMain");
        this._layoutRoot.addChild(this._layoutMain);
        this._layoutMain.setCascadeOpacityEnabled(true);
        this._layoutMain.setCascadeColorEnabled(true);
        this._layoutMain.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutMain, 0.5, 0.5);
        let _layoutMainLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutMain);
        _layoutMainLayoutComponent.setPositionPercentXEnabled(true);
        _layoutMainLayoutComponent.setPositionPercentX(0.5);
        _layoutMainLayoutComponent.setPositionPercentYEnabled(true);
        _layoutMainLayoutComponent.setPositionPercentY(0.5);
        _layoutMainLayoutComponent.setPercentWidthEnabled(true);
        _layoutMainLayoutComponent.setPercentWidth(1);
        this._layoutMain.setTouchEnabled(false);
        this._layoutMain.setUnifySizeEnabled(false);
        this._layoutMain.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutMain, 1);
        this._layoutMain.setContentSize(cc.size(this._layoutMain.width, 1136));

        ///// # _imgTitle
        this._imgTitle = new ccui.ImageView();
        this._imgTitle.setName("_imgTitle");
        this._layoutMain.addChild(this._imgTitle);
        this._imgTitle.setCascadeOpacityEnabled(true);
        this._imgTitle.setCascadeColorEnabled(true);
        this._imgTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTitle, 0.2445, 0.805);
        let _imgTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTitle);
        this._imgTitle.loadTexture("texts/game/SummaryWhite.png", 1);
        this._imgTitle.setTouchEnabled(false);

        ///// # _nodeNPC
        this._nodeNPC = new cc.Node();
        this._nodeNPC.setName("_nodeNPC");
        this._layoutMain.addChild(this._nodeNPC);
        this._nodeNPC.setCascadeOpacityEnabled(true);
        this._nodeNPC.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeNPC, 0.7134, 0.505);
        let _nodeNPCLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeNPC);

        ///// # _imgBoard
        this._imgBoard = new ccui.ImageView();
        this._imgBoard.setName("_imgBoard");
        this._layoutMain.addChild(this._imgBoard);
        this._imgBoard.setCascadeOpacityEnabled(true);
        this._imgBoard.setCascadeColorEnabled(true);
        this._imgBoard.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBoard, 0.5007, 0.2974);
        let _imgBoardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBoard);
        _imgBoardLayoutComponent.setPositionPercentXEnabled(true);
        _imgBoardLayoutComponent.setPositionPercentX(0.5007);
        this._imgBoard.loadTexture("game/popups/summary/SummaryBoard.png", 1);
        this._imgBoard.setUnifySizeEnabled(false);
        this._imgBoard.ignoreContentAdaptWithSize(false);
        this._imgBoard.setScale9Enabled(true);
        this._imgBoard.setCapInsets(cc.rect(39, 39, 41, 42));
        this._imgBoard.setContentSize(cc.size(528, 357));
        this._imgBoard.setTouchEnabled(false);

        ///// # _imgTable
        this._imgTable = new ccui.ImageView();
        this._imgTable.setName("_imgTable");
        this._layoutMain.addChild(this._imgTable);
        this._imgTable.setCascadeOpacityEnabled(true);
        this._imgTable.setCascadeColorEnabled(true);
        this._imgTable.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgTable, 0.5, 0.3598);
        let _imgTableLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTable);
        this._imgTable.loadTexture("game/popups/summary/SummaryNPC.png", 1);
        this._imgTable.setUnifySizeEnabled(false);
        this._imgTable.ignoreContentAdaptWithSize(false);
        this._imgTable.setContentSize(cc.size(568, 114));
        this._imgTable.setTouchEnabled(false);

        ///// # _txtYouWin
        this._txtYouWin = new ck.Text();
        this._txtYouWin.setName("_txtYouWin");
        this._layoutMain.addChild(this._txtYouWin);
        this._txtYouWin.setCascadeOpacityEnabled(true);
        this._txtYouWin.setCascadeColorEnabled(true);
        this._txtYouWin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtYouWin, 0.5007, 0.4315);
        this._txtYouWin.setTextColor(cc.color(145, 84, 42, 255));
        let _txtYouWinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtYouWin);
        _txtYouWinLayoutComponent.setPositionPercentXEnabled(true);
        _txtYouWinLayoutComponent.setPositionPercentX(0.5007);
        this._txtYouWin.setTouchEnabled(false);
        this._txtYouWin.ignoreContentAdaptWithSize(true);
        this._txtYouWin.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtYouWin.setDefaultFontSize(35);
        this._txtYouWin.setString(gm.localize.getText("TXT_YOU_RECEIVED").toUpperCase());
        this._txtYouWin.setTextHorizontalAlignment(0);
        this._txtYouWin.setTextVerticalAlignment(0);

        ///// # _layoutStat
        this._layoutStat = new ccui.Layout();
        this._layoutStat.setName("_layoutStat");
        this._layoutMain.addChild(this._layoutStat);
        this._layoutStat.setCascadeOpacityEnabled(true);
        this._layoutStat.setCascadeColorEnabled(true);
        this._layoutStat.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._layoutStat, 0.0007, 0.7659);
        let _layoutStatLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutStat);
        _layoutStatLayoutComponent.setPositionPercentXEnabled(true);
        _layoutStatLayoutComponent.setPositionPercentX(0.0007);
        this._layoutStat.setTouchEnabled(false);
        this._layoutStat.setUnifySizeEnabled(false);
        this._layoutStat.ignoreContentAdaptWithSize(false);
        this._layoutStat.setContentSize(cc.size(346, 346.7044));

        ///// # _gridViewStat
        this._gridViewStat = new ck.GridViewVertical();
        this._gridViewStat.setName("_gridViewStat");
        this._layoutStat.addChild(this._gridViewStat);
        this._gridViewStat.setCascadeOpacityEnabled(true);
        this._gridViewStat.setCascadeColorEnabled(true);
        this._gridViewStat.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._gridViewStat, 0.5, 1);
        let _gridViewStatLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewStat);
        _gridViewStatLayoutComponent.setPositionPercentXEnabled(true);
        _gridViewStatLayoutComponent.setPositionPercentX(0.5);
        _gridViewStatLayoutComponent.setPositionPercentYEnabled(true);
        _gridViewStatLayoutComponent.setPositionPercentY(1);
        _gridViewStatLayoutComponent.setPercentWidthEnabled(true);
        _gridViewStatLayoutComponent.setPercentWidth(1);
        _gridViewStatLayoutComponent.setPercentHeightEnabled(true);
        _gridViewStatLayoutComponent.setPercentHeight(1);

        ///// # _layoutReward
        this._layoutReward = new ccui.Layout();
        this._layoutReward.setName("_layoutReward");
        this._layoutMain.addChild(this._layoutReward);
        this._layoutReward.setCascadeOpacityEnabled(true);
        this._layoutReward.setCascadeColorEnabled(true);
        this._layoutReward.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutReward, 0.5007, 0.4036);
        let _layoutRewardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutReward);
        _layoutRewardLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRewardLayoutComponent.setPositionPercentX(0.5007);
        _layoutRewardLayoutComponent.setPercentWidthEnabled(true);
        _layoutRewardLayoutComponent.setPercentWidth(0.8178);
        this._layoutReward.setTouchEnabled(false);
        this._layoutReward.setUnifySizeEnabled(false);
        this._layoutReward.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutReward, 0.8178);
        this._layoutReward.setContentSize(cc.size(this._layoutReward.width, 292.93));

        ///// # _gridViewCurrency
        this._gridViewCurrency = new ck.GridViewHorizontal();
        this._gridViewCurrency.setName("_gridViewCurrency");
        this._layoutReward.addChild(this._gridViewCurrency);
        this._gridViewCurrency.setCascadeOpacityEnabled(true);
        this._gridViewCurrency.setCascadeColorEnabled(true);
        this._gridViewCurrency.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridViewCurrency, 0.5, 0.74);
        let _gridViewCurrencyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewCurrency);
        _gridViewCurrencyLayoutComponent.setPositionPercentXEnabled(true);
        _gridViewCurrencyLayoutComponent.setPositionPercentX(0.5);
        _gridViewCurrencyLayoutComponent.setPositionPercentYEnabled(true);
        _gridViewCurrencyLayoutComponent.setPositionPercentY(0.74);
        _gridViewCurrencyLayoutComponent.setPercentWidthEnabled(true);
        _gridViewCurrencyLayoutComponent.setPercentWidth(1);

        ///// # _gridViewItem
        this._gridViewItem = new ck.GridViewHorizontal();
        this._gridViewItem.setName("_gridViewItem");
        this._layoutReward.addChild(this._gridViewItem);
        this._gridViewItem.setCascadeOpacityEnabled(true);
        this._gridViewItem.setCascadeColorEnabled(true);
        this._gridViewItem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridViewItem, 0.5, 0.26);
        let _gridViewItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewItem);
        _gridViewItemLayoutComponent.setPositionPercentXEnabled(true);
        _gridViewItemLayoutComponent.setPositionPercentX(0.5);
        _gridViewItemLayoutComponent.setPositionPercentYEnabled(true);
        _gridViewItemLayoutComponent.setPositionPercentY(0.26);
        _gridViewItemLayoutComponent.setPercentWidthEnabled(true);
        _gridViewItemLayoutComponent.setPercentWidth(1);

        ///// # _txtTapToClose
        this._txtTapToClose = new ck.Text();
        this._txtTapToClose.setName("_txtTapToClose");
        this._layoutRoot.addChild(this._txtTapToClose);
        this._txtTapToClose.setCascadeOpacityEnabled(true);
        this._txtTapToClose.setCascadeColorEnabled(true);
        this._txtTapToClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTapToClose, 0.5, 0.025);
        let _txtTapToCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTapToClose);
        _txtTapToCloseLayoutComponent.setPositionPercentXEnabled(true);
        _txtTapToCloseLayoutComponent.setPositionPercentX(0.5);
        this._txtTapToClose.setTouchEnabled(false);
        this._txtTapToClose.ignoreContentAdaptWithSize(true);
        this._txtTapToClose.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTapToClose.setDefaultFontSize(30);
        this._txtTapToClose.setString(gm.localize.getText("TXT_TAP_TO_CLOSE"));
        this._txtTapToClose.setTextHorizontalAlignment(1);
        this._txtTapToClose.setTextVerticalAlignment(1);

        ///// # _shareImageReward
        this._shareImageReward = new ShareImageRewardWidget();
        this._shareImageReward.setName("_shareImageReward");
        this._layoutRoot.addChild(this._shareImageReward);
        this._shareImageReward.setCascadeOpacityEnabled(true);
        this._shareImageReward.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._shareImageReward, 0.5, 0.1761);
        let _shareImageRewardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._shareImageReward);
        _shareImageRewardLayoutComponent.setPositionPercentXEnabled(true);
        _shareImageRewardLayoutComponent.setPositionPercentX(0.5);

    },



});

/**
 * Create PistiSummaryLayer
 * @returns {_ccs.PistiSummaryLayer}
 */
_ccs.PistiSummaryLayer.create = function () {
    return new _ccs.PistiSummaryLayer();
};
