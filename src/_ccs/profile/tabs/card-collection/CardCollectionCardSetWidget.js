/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.CardCollectionCardSetWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.CardCollectionCardSetWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgFrame: null,
    /** @type {ccui.ImageView} */
    _imgSetIcon: null,
    /** @type {ccui.ImageView} */
    _imgRedDot: null,
    /** @type {ccui.Layout} */
    _layoutUnlockAt: null,
    /** @type {ccui.ImageView} */
    _imgUnlockAtGlowTop: null,
    /** @type {ccui.ImageView} */
    _imgUnlockAtGlowBottom: null,
    /** @type {ck.Text} */
    _txtUnlockAt: null,
    /** @type {ccui.ImageView} */
    _imgSetNameBgr: null,
    /** @type {ck.Text} */
    _txtSetName: null,
    /** @type {ccui.ImageView} */
    _imgProgressBgr: null,
    /** @type {ck.LoadingBar} */
    _loadingBarProgress: null,
    /** @type {ck.Text} */
    _txtProgress: null,
    /** @type {ccui.ImageView} */
    _imgCheck: null,


    /**
     * _ccs.CardCollectionCardSetWidget constructor
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

        ///// # _layoutRoot
        this._layoutRoot = new ccui.Layout();
        this._layoutRoot.setName("_layoutRoot");
        this.addChild(this._layoutRoot);
        this._layoutRoot.setCascadeOpacityEnabled(true);
        this._layoutRoot.setCascadeColorEnabled(true);
        this._layoutRoot.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(166, 242));

        ///// # _imgFrame
        this._imgFrame = new ccui.ImageView();
        this._imgFrame.setName("_imgFrame");
        this._layoutRoot.addChild(this._imgFrame);
        this._imgFrame.setCascadeOpacityEnabled(true);
        this._imgFrame.setCascadeColorEnabled(true);
        this._imgFrame.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgFrame, 0.5, 1);
        let _imgFrameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFrame);
        _imgFrameLayoutComponent.setPositionPercentXEnabled(true);
        _imgFrameLayoutComponent.setPositionPercentX(0.5);
        _imgFrameLayoutComponent.setPositionPercentYEnabled(true);
        _imgFrameLayoutComponent.setPositionPercentY(1);
        this._imgFrame.loadTexture("card-collection/card-elements/SetFrame.png", 1);
        this._imgFrame.setUnifySizeEnabled(false);
        this._imgFrame.ignoreContentAdaptWithSize(false);
        this._imgFrame.setContentSize(cc.size(168, 168));
        this._imgFrame.setTouchEnabled(false);

        ///// # _imgSetIcon
        this._imgSetIcon = new ccui.ImageView();
        this._imgSetIcon.setName("_imgSetIcon");
        this._imgFrame.addChild(this._imgSetIcon);
        this._imgSetIcon.setCascadeOpacityEnabled(true);
        this._imgSetIcon.setCascadeColorEnabled(true);
        this._imgSetIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgSetIcon, 0.5, 0.5);
        let _imgSetIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgSetIcon);
        _imgSetIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgSetIconLayoutComponent.setPositionPercentX(0.5);
        _imgSetIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgSetIconLayoutComponent.setPositionPercentY(0.5);
        this._imgSetIcon.loadTexture("card-collection/sets/Statue.png", 1);
        this._imgSetIcon.setUnifySizeEnabled(false);
        this._imgSetIcon.ignoreContentAdaptWithSize(false);
        this._imgSetIcon.setContentSize(cc.size(154, 154));
        this._imgSetIcon.setTouchEnabled(false);

        ///// # _imgRedDot
        this._imgRedDot = new ccui.ImageView();
        this._imgRedDot.setName("_imgRedDot");
        this._imgFrame.addChild(this._imgRedDot);
        this._imgRedDot.setCascadeOpacityEnabled(true);
        this._imgRedDot.setCascadeColorEnabled(true);
        this._imgRedDot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRedDot, 0.8, 0.86);
        let _imgRedDotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRedDot);
        _imgRedDotLayoutComponent.setPositionPercentXEnabled(true);
        _imgRedDotLayoutComponent.setPositionPercentX(0.8);
        _imgRedDotLayoutComponent.setPositionPercentYEnabled(true);
        _imgRedDotLayoutComponent.setPositionPercentY(0.86);
        this._imgRedDot.loadTexture("basics/other/RedDot.png", 1);
        this._imgRedDot.setUnifySizeEnabled(false);
        this._imgRedDot.ignoreContentAdaptWithSize(false);
        this._imgRedDot.setContentSize(cc.size(31, 31));
        this._imgRedDot.setTouchEnabled(false);

        ///// # _layoutUnlockAt
        this._layoutUnlockAt = new ccui.Layout();
        this._layoutUnlockAt.setName("_layoutUnlockAt");
        this._layoutRoot.addChild(this._layoutUnlockAt);
        this._layoutUnlockAt.setCascadeOpacityEnabled(true);
        this._layoutUnlockAt.setCascadeColorEnabled(true);
        this._layoutUnlockAt.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutUnlockAt, 0.5, 0.61);
        let _layoutUnlockAtLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutUnlockAt);
        _layoutUnlockAtLayoutComponent.setPositionPercentXEnabled(true);
        _layoutUnlockAtLayoutComponent.setPositionPercentX(0.5);
        _layoutUnlockAtLayoutComponent.setPositionPercentYEnabled(true);
        _layoutUnlockAtLayoutComponent.setPositionPercentY(0.61);
        this._layoutUnlockAt.setTouchEnabled(false);
        this._layoutUnlockAt.setUnifySizeEnabled(false);
        this._layoutUnlockAt.ignoreContentAdaptWithSize(false);
        this._layoutUnlockAt.setContentSize(cc.size(100.44, 110));

        ///// # _imgUnlockAtGlowTop
        this._imgUnlockAtGlowTop = new ccui.ImageView();
        this._imgUnlockAtGlowTop.setName("_imgUnlockAtGlowTop");
        this._layoutUnlockAt.addChild(this._imgUnlockAtGlowTop);
        this._imgUnlockAtGlowTop.setCascadeOpacityEnabled(true);
        this._imgUnlockAtGlowTop.setCascadeColorEnabled(true);
        this._imgUnlockAtGlowTop.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgUnlockAtGlowTop, 0.5, 0.69);
        let _imgUnlockAtGlowTopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgUnlockAtGlowTop);
        _imgUnlockAtGlowTopLayoutComponent.setPositionPercentXEnabled(true);
        _imgUnlockAtGlowTopLayoutComponent.setPositionPercentX(0.5);
        _imgUnlockAtGlowTopLayoutComponent.setPositionPercentYEnabled(true);
        _imgUnlockAtGlowTopLayoutComponent.setPositionPercentY(0.69);
        this._imgUnlockAtGlowTop.loadTexture("card-collection/card-elements/Glow.png", 1);
        this._imgUnlockAtGlowTop.setUnifySizeEnabled(false);
        this._imgUnlockAtGlowTop.ignoreContentAdaptWithSize(false);
        this._imgUnlockAtGlowTop.setContentSize(cc.size(127, 49));
        this._imgUnlockAtGlowTop.setTouchEnabled(false);

        ///// # _imgUnlockAtGlowBottom
        this._imgUnlockAtGlowBottom = new ccui.ImageView();
        this._imgUnlockAtGlowBottom.setName("_imgUnlockAtGlowBottom");
        this._layoutUnlockAt.addChild(this._imgUnlockAtGlowBottom);
        this._imgUnlockAtGlowBottom.setCascadeOpacityEnabled(true);
        this._imgUnlockAtGlowBottom.setCascadeColorEnabled(true);
        this._imgUnlockAtGlowBottom.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgUnlockAtGlowBottom, 0.5, 0.36);
        let _imgUnlockAtGlowBottomLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgUnlockAtGlowBottom);
        _imgUnlockAtGlowBottomLayoutComponent.setPositionPercentXEnabled(true);
        _imgUnlockAtGlowBottomLayoutComponent.setPositionPercentX(0.5);
        _imgUnlockAtGlowBottomLayoutComponent.setPositionPercentYEnabled(true);
        _imgUnlockAtGlowBottomLayoutComponent.setPositionPercentY(0.36);
        this._imgUnlockAtGlowBottom.loadTexture("card-collection/card-elements/Glow.png", 1);
        this._imgUnlockAtGlowBottom.setUnifySizeEnabled(false);
        this._imgUnlockAtGlowBottom.ignoreContentAdaptWithSize(false);
        this._imgUnlockAtGlowBottom.setContentSize(cc.size(127, 49));
        this._imgUnlockAtGlowBottom.setTouchEnabled(false);

        ///// # _txtUnlockAt
        this._txtUnlockAt = new ck.Text();
        this._txtUnlockAt.setName("_txtUnlockAt");
        this._layoutUnlockAt.addChild(this._txtUnlockAt);
        this._txtUnlockAt.setCascadeOpacityEnabled(true);
        this._txtUnlockAt.setCascadeColorEnabled(true);
        this._txtUnlockAt.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtUnlockAt, 0.5, 0.55);
        let _txtUnlockAtLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtUnlockAt);
        _txtUnlockAtLayoutComponent.setPositionPercentXEnabled(true);
        _txtUnlockAtLayoutComponent.setPositionPercentX(0.5);
        _txtUnlockAtLayoutComponent.setPositionPercentYEnabled(true);
        _txtUnlockAtLayoutComponent.setPositionPercentY(0.55);
        this._txtUnlockAt.setTouchEnabled(false);
        this._txtUnlockAt.setUnifySizeEnabled(false);
        this._txtUnlockAt.ignoreContentAdaptWithSize(false);
        this._txtUnlockAt.setContentSize(cc.size(120, 85));
        this._txtUnlockAt.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtUnlockAt.setDefaultFontSize(28);
        this._txtUnlockAt.setTextHorizontalAlignment(1);
        this._txtUnlockAt.setTextVerticalAlignment(1);
        this._txtUnlockAt.enableOutline(cc.color(59, 12, 155, 255), 2);
        this._txtUnlockAt.autoFitMultipleLine();

        ///// # _imgSetNameBgr
        this._imgSetNameBgr = new ccui.ImageView();
        this._imgSetNameBgr.setName("_imgSetNameBgr");
        this._layoutRoot.addChild(this._imgSetNameBgr);
        this._imgSetNameBgr.setCascadeOpacityEnabled(true);
        this._imgSetNameBgr.setCascadeColorEnabled(true);
        this._imgSetNameBgr.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgSetNameBgr, 0.5, 0.12);
        let _imgSetNameBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgSetNameBgr);
        _imgSetNameBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgSetNameBgrLayoutComponent.setPositionPercentX(0.5);
        _imgSetNameBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgSetNameBgrLayoutComponent.setPositionPercentY(0.12);
        this._imgSetNameBgr.loadTexture("basics2/other/Box_01.png", 1);
        this._imgSetNameBgr.setUnifySizeEnabled(false);
        this._imgSetNameBgr.ignoreContentAdaptWithSize(false);
        this._imgSetNameBgr.setContentSize(cc.size(166, 45));
        this._imgSetNameBgr.setTouchEnabled(false);

        ///// # _txtSetName
        this._txtSetName = new ck.Text();
        this._txtSetName.setName("_txtSetName");
        this._imgSetNameBgr.addChild(this._txtSetName);
        this._txtSetName.setCascadeOpacityEnabled(true);
        this._txtSetName.setCascadeColorEnabled(true);
        this._txtSetName.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtSetName, 0.5, 0.5);
        this._txtSetName.setTextColor(cc.color(255, 206, 142, 255));
        let _txtSetNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtSetName);
        _txtSetNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtSetNameLayoutComponent.setPositionPercentX(0.5);
        _txtSetNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtSetNameLayoutComponent.setPositionPercentY(0.5);
        this._txtSetName.setTouchEnabled(false);
        this._txtSetName.setUnifySizeEnabled(false);
        this._txtSetName.ignoreContentAdaptWithSize(false);
        this._txtSetName.setContentSize(cc.size(84, 29));
        this._txtSetName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtSetName.setDefaultFontSize(26);
        this._txtSetName.setTextHorizontalAlignment(1);
        this._txtSetName.setTextVerticalAlignment(1);
        this._txtSetName.autoFitSingleLine();

        ///// # _imgProgressBgr
        this._imgProgressBgr = new ccui.ImageView();
        this._imgProgressBgr.setName("_imgProgressBgr");
        this._layoutRoot.addChild(this._imgProgressBgr);
        this._imgProgressBgr.setCascadeOpacityEnabled(true);
        this._imgProgressBgr.setCascadeColorEnabled(true);
        this._imgProgressBgr.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgProgressBgr, 0.5, 0);
        let _imgProgressBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgProgressBgr);
        _imgProgressBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgProgressBgrLayoutComponent.setPositionPercentX(0.5);
        _imgProgressBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgProgressBgrLayoutComponent.setPositionPercentY(0);
        this._imgProgressBgr.loadTexture("basics2/bars/Bar_01.png", 1);
        this._imgProgressBgr.setUnifySizeEnabled(false);
        this._imgProgressBgr.ignoreContentAdaptWithSize(false);
        this._imgProgressBgr.setContentSize(cc.size(162, 24));
        this._imgProgressBgr.setTouchEnabled(false);

        ///// # _loadingBarProgress
        this._loadingBarProgress = new ck.LoadingBar();
        this._loadingBarProgress.setName("_loadingBarProgress");
        this._imgProgressBgr.addChild(this._loadingBarProgress);
        this._loadingBarProgress.setCascadeOpacityEnabled(true);
        this._loadingBarProgress.setCascadeColorEnabled(true);
        this._loadingBarProgress.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._loadingBarProgress, 0.5, 0.5);
        let _loadingBarProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._loadingBarProgress);
        _loadingBarProgressLayoutComponent.setPositionPercentXEnabled(true);
        _loadingBarProgressLayoutComponent.setPositionPercentX(0.5);
        _loadingBarProgressLayoutComponent.setPositionPercentYEnabled(true);
        _loadingBarProgressLayoutComponent.setPositionPercentY(0.5);
        this._loadingBarProgress.setTouchEnabled(false);
        this._loadingBarProgress.setUnifySizeEnabled(false);
        this._loadingBarProgress.ignoreContentAdaptWithSize(false);
        this._loadingBarProgress.setContentSize(cc.size(159, 21));
        this._loadingBarProgress.loadTexture("basics2/bars/Bar_02.png", 1);

        ///// # _txtProgress
        this._txtProgress = new ck.Text();
        this._txtProgress.setName("_txtProgress");
        this._imgProgressBgr.addChild(this._txtProgress);
        this._txtProgress.setCascadeOpacityEnabled(true);
        this._txtProgress.setCascadeColorEnabled(true);
        this._txtProgress.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtProgress, 0.5, 0.5);
        let _txtProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtProgress);
        _txtProgressLayoutComponent.setPositionPercentXEnabled(true);
        _txtProgressLayoutComponent.setPositionPercentX(0.5);
        _txtProgressLayoutComponent.setPositionPercentYEnabled(true);
        _txtProgressLayoutComponent.setPositionPercentY(0.5);
        this._txtProgress.setTouchEnabled(false);
        this._txtProgress.ignoreContentAdaptWithSize(true);
        this._txtProgress.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtProgress.setDefaultFontSize(22);
        this._txtProgress.setTextHorizontalAlignment(1);
        this._txtProgress.setTextVerticalAlignment(1);
        this._txtProgress.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _imgCheck
        this._imgCheck = new ccui.ImageView();
        this._imgCheck.setName("_imgCheck");
        this._imgProgressBgr.addChild(this._imgCheck);
        this._imgCheck.setCascadeOpacityEnabled(true);
        this._imgCheck.setCascadeColorEnabled(true);
        this._imgCheck.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCheck, 0.85, 0.5);
        let _imgCheckLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCheck);
        _imgCheckLayoutComponent.setPositionPercentXEnabled(true);
        _imgCheckLayoutComponent.setPositionPercentX(0.85);
        _imgCheckLayoutComponent.setPositionPercentYEnabled(true);
        _imgCheckLayoutComponent.setPositionPercentY(0.5);
        this._imgCheck.loadTexture("icons/color/other/Check_02.png", 1);
        this._imgCheck.setUnifySizeEnabled(false);
        this._imgCheck.ignoreContentAdaptWithSize(false);
        this._imgCheck.setContentSize(cc.size(50, 38));
        this._imgCheck.setTouchEnabled(false);

    },



});

/**
 * Create CardCollectionCardSetWidget
 * @returns {_ccs.CardCollectionCardSetWidget}
 */
_ccs.CardCollectionCardSetWidget.create = function () {
    return new _ccs.CardCollectionCardSetWidget();
};
