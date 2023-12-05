/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.TrophyDetailWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.TrophyDetailWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ck.Text} */
    _txtNamePrefix: null,
    /** @type {ck.Text} */
    _txtBuffPrefix: null,
    /** @type {ck.Text} */
    _txtDescriptionPrefix: null,
    /** @type {ck.Text} */
    _txtName: null,
    /** @type {ck.Text} */
    _txtBuff: null,
    /** @type {ck.Text} */
    _txtDescription: null,
    /** @type {ccui.ImageView} */
    _imgProgressBgr: null,
    /** @type {ck.LoadingBar} */
    _loadingBarProgress: null,
    /** @type {ck.Text} */
    _txtProgress: null,
    /** @type {TrophyItemWidget} */
    _trophyItemWidget: null,
    /** @type {ccui.ImageView} */
    _imgCheckBox: null,
    /** @type {ccui.ImageView} */
    _imgCheck: null,


    /**
     * _ccs.TrophyDetailWidget constructor
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
        _layoutRootLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRootLayoutComponent.setPositionPercentX(0);
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(511, 145));

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._layoutRoot.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.5);
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(0.5);
        this._imgBackground.loadTexture("basics2/other/Box_09.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setContentSize(cc.size(511, 145));
        this._imgBackground.setTouchEnabled(false);

        ///// # _txtNamePrefix
        this._txtNamePrefix = new ck.Text();
        this._txtNamePrefix.setName("_txtNamePrefix");
        this._layoutRoot.addChild(this._txtNamePrefix);
        this._txtNamePrefix.setCascadeOpacityEnabled(true);
        this._txtNamePrefix.setCascadeColorEnabled(true);
        this._txtNamePrefix.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNamePrefix, 0.25, 0.85);
        this._txtNamePrefix.setTextColor(cc.color(75, 38, 11, 255));
        let _txtNamePrefixLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNamePrefix);
        _txtNamePrefixLayoutComponent.setPositionPercentXEnabled(true);
        _txtNamePrefixLayoutComponent.setPositionPercentX(0.25);
        _txtNamePrefixLayoutComponent.setPositionPercentYEnabled(true);
        _txtNamePrefixLayoutComponent.setPositionPercentY(0.85);
        this._txtNamePrefix.setTouchEnabled(false);
        this._txtNamePrefix.setUnifySizeEnabled(false);
        this._txtNamePrefix.ignoreContentAdaptWithSize(false);
        this._txtNamePrefix.setContentSize(cc.size(75, 29));
        this._txtNamePrefix.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtNamePrefix.setDefaultFontSize(26);
        this._txtNamePrefix.setTextHorizontalAlignment(0);
        this._txtNamePrefix.setTextVerticalAlignment(1);
        this._txtNamePrefix.autoFitSingleLine();

        ///// # _txtBuffPrefix
        this._txtBuffPrefix = new ck.Text();
        this._txtBuffPrefix.setName("_txtBuffPrefix");
        this._layoutRoot.addChild(this._txtBuffPrefix);
        this._txtBuffPrefix.setCascadeOpacityEnabled(true);
        this._txtBuffPrefix.setCascadeColorEnabled(true);
        this._txtBuffPrefix.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBuffPrefix, 0.25, 0.67);
        this._txtBuffPrefix.setTextColor(cc.color(75, 38, 11, 255));
        let _txtBuffPrefixLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBuffPrefix);
        _txtBuffPrefixLayoutComponent.setPositionPercentXEnabled(true);
        _txtBuffPrefixLayoutComponent.setPositionPercentX(0.25);
        _txtBuffPrefixLayoutComponent.setPositionPercentYEnabled(true);
        _txtBuffPrefixLayoutComponent.setPositionPercentY(0.67);
        this._txtBuffPrefix.setTouchEnabled(false);
        this._txtBuffPrefix.setUnifySizeEnabled(false);
        this._txtBuffPrefix.ignoreContentAdaptWithSize(false);
        this._txtBuffPrefix.setContentSize(cc.size(75, 29));
        this._txtBuffPrefix.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBuffPrefix.setDefaultFontSize(26);
        this._txtBuffPrefix.setTextHorizontalAlignment(0);
        this._txtBuffPrefix.setTextVerticalAlignment(1);
        this._txtBuffPrefix.autoFitSingleLine();

        ///// # _txtDescriptionPrefix
        this._txtDescriptionPrefix = new ck.Text();
        this._txtDescriptionPrefix.setName("_txtDescriptionPrefix");
        this._layoutRoot.addChild(this._txtDescriptionPrefix);
        this._txtDescriptionPrefix.setCascadeOpacityEnabled(true);
        this._txtDescriptionPrefix.setCascadeColorEnabled(true);
        this._txtDescriptionPrefix.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDescriptionPrefix, 0.25, 0.24);
        this._txtDescriptionPrefix.setTextColor(cc.color(75, 38, 11, 255));
        let _txtDescriptionPrefixLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDescriptionPrefix);
        _txtDescriptionPrefixLayoutComponent.setPositionPercentXEnabled(true);
        _txtDescriptionPrefixLayoutComponent.setPositionPercentX(0.25);
        _txtDescriptionPrefixLayoutComponent.setPositionPercentYEnabled(true);
        _txtDescriptionPrefixLayoutComponent.setPositionPercentY(0.24);
        this._txtDescriptionPrefix.setTouchEnabled(false);
        this._txtDescriptionPrefix.setUnifySizeEnabled(false);
        this._txtDescriptionPrefix.ignoreContentAdaptWithSize(false);
        this._txtDescriptionPrefix.setContentSize(cc.size(75, 26));
        this._txtDescriptionPrefix.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDescriptionPrefix.setDefaultFontSize(23);
        this._txtDescriptionPrefix.setTextHorizontalAlignment(0);
        this._txtDescriptionPrefix.setTextVerticalAlignment(1);
        this._txtDescriptionPrefix.autoFitSingleLine();

        ///// # _txtName
        this._txtName = new ck.Text();
        this._txtName.setName("_txtName");
        this._layoutRoot.addChild(this._txtName);
        this._txtName.setCascadeOpacityEnabled(true);
        this._txtName.setCascadeColorEnabled(true);
        this._txtName.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName, 0.4, 0.85);
        this._txtName.setTextColor(cc.color(37, 95, 194, 255));
        let _txtNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName);
        _txtNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameLayoutComponent.setPositionPercentX(0.4);
        _txtNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameLayoutComponent.setPositionPercentY(0.85);
        this._txtName.setTouchEnabled(false);
        this._txtName.setUnifySizeEnabled(false);
        this._txtName.ignoreContentAdaptWithSize(false);
        this._txtName.setContentSize(cc.size(230, 29));
        this._txtName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName.setDefaultFontSize(26);
        this._txtName.setTextHorizontalAlignment(0);
        this._txtName.setTextVerticalAlignment(1);
        this._txtName.autoFitSingleLine();

        ///// # _txtBuff
        this._txtBuff = new ck.Text();
        this._txtBuff.setName("_txtBuff");
        this._layoutRoot.addChild(this._txtBuff);
        this._txtBuff.setCascadeOpacityEnabled(true);
        this._txtBuff.setCascadeColorEnabled(true);
        this._txtBuff.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBuff, 0.4, 0.67);
        this._txtBuff.setTextColor(cc.color(37, 95, 194, 255));
        let _txtBuffLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBuff);
        _txtBuffLayoutComponent.setPositionPercentXEnabled(true);
        _txtBuffLayoutComponent.setPositionPercentX(0.4);
        _txtBuffLayoutComponent.setPositionPercentYEnabled(true);
        _txtBuffLayoutComponent.setPositionPercentY(0.67);
        this._txtBuff.setTouchEnabled(false);
        this._txtBuff.setUnifySizeEnabled(false);
        this._txtBuff.ignoreContentAdaptWithSize(false);
        this._txtBuff.setContentSize(cc.size(230, 29));
        this._txtBuff.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBuff.setDefaultFontSize(26);
        this._txtBuff.setTextHorizontalAlignment(0);
        this._txtBuff.setTextVerticalAlignment(1);
        this._txtBuff.autoFitSingleLine();

        ///// # _txtDescription
        this._txtDescription = new ck.Text();
        this._txtDescription.setName("_txtDescription");
        this._layoutRoot.addChild(this._txtDescription);
        this._txtDescription.setCascadeOpacityEnabled(true);
        this._txtDescription.setCascadeColorEnabled(true);
        this._txtDescription.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDescription, 0.4, 0.24);
        this._txtDescription.setTextColor(cc.color(37, 95, 194, 255));
        let _txtDescriptionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDescription);
        _txtDescriptionLayoutComponent.setPositionPercentXEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentX(0.4);
        _txtDescriptionLayoutComponent.setPositionPercentYEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentY(0.24);
        this._txtDescription.setTouchEnabled(false);
        this._txtDescription.setUnifySizeEnabled(false);
        this._txtDescription.ignoreContentAdaptWithSize(false);
        this._txtDescription.setContentSize(cc.size(250, 44));
        this._txtDescription.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDescription.setDefaultFontSize(24);
        this._txtDescription.setTextHorizontalAlignment(0);
        this._txtDescription.setTextVerticalAlignment(1);
        this._txtDescription.autoFitMultipleLine();

        ///// # _imgProgressBgr
        this._imgProgressBgr = new ccui.ImageView();
        this._imgProgressBgr.setName("_imgProgressBgr");
        this._layoutRoot.addChild(this._imgProgressBgr);
        this._imgProgressBgr.setCascadeOpacityEnabled(true);
        this._imgProgressBgr.setCascadeColorEnabled(true);
        this._imgProgressBgr.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgProgressBgr, 0.25, 0.47);
        let _imgProgressBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgProgressBgr);
        _imgProgressBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgProgressBgrLayoutComponent.setPositionPercentX(0.25);
        _imgProgressBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgProgressBgrLayoutComponent.setPositionPercentY(0.47);
        this._imgProgressBgr.loadTexture("basics2/bars/Bar_03.png", 1);
        this._imgProgressBgr.setUnifySizeEnabled(false);
        this._imgProgressBgr.ignoreContentAdaptWithSize(false);
        this._imgProgressBgr.setContentSize(cc.size(332, 24));
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
        this._loadingBarProgress.setContentSize(cc.size(332, 24));
        this._loadingBarProgress.loadTexture("basics2/bars/Bar_04.png", 1);

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
        this._txtProgress.setUnifySizeEnabled(false);
        this._txtProgress.ignoreContentAdaptWithSize(false);
        this._txtProgress.setContentSize(cc.size(320, 27));
        this._txtProgress.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtProgress.setDefaultFontSize(22);
        this._txtProgress.setTextHorizontalAlignment(1);
        this._txtProgress.setTextVerticalAlignment(1);
        this._txtProgress.enableOutline(cc.color(0, 0, 0, 255), 1);
        this._txtProgress.autoFitSingleLine();

        ///// # _trophyItemWidget
        this._trophyItemWidget = new TrophyItemWidget();
        this._trophyItemWidget.setName("_trophyItemWidget");
        this._layoutRoot.addChild(this._trophyItemWidget);
        this._trophyItemWidget.setCascadeOpacityEnabled(true);
        this._trophyItemWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._trophyItemWidget, 0.13, 0.48);
        this._trophyItemWidget.setScale(0.8, 0.8);
        let _trophyItemWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._trophyItemWidget);
        _trophyItemWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _trophyItemWidgetLayoutComponent.setPositionPercentX(0.13);
        _trophyItemWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _trophyItemWidgetLayoutComponent.setPositionPercentY(0.48);

        ///// # _imgCheckBox
        this._imgCheckBox = new ccui.ImageView();
        this._imgCheckBox.setName("_imgCheckBox");
        this._layoutRoot.addChild(this._imgCheckBox);
        this._imgCheckBox.setCascadeOpacityEnabled(true);
        this._imgCheckBox.setCascadeColorEnabled(true);
        this._imgCheckBox.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCheckBox, 0.9, 0.78);
        this._imgCheckBox.setVisible(false);
        let _imgCheckBoxLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCheckBox);
        _imgCheckBoxLayoutComponent.setPositionPercentXEnabled(true);
        _imgCheckBoxLayoutComponent.setPositionPercentX(0.9);
        _imgCheckBoxLayoutComponent.setPositionPercentYEnabled(true);
        _imgCheckBoxLayoutComponent.setPositionPercentY(0.78);
        this._imgCheckBox.loadTexture("basics2/other/Check_01_Box.png", 1);
        this._imgCheckBox.setUnifySizeEnabled(false);
        this._imgCheckBox.ignoreContentAdaptWithSize(false);
        this._imgCheckBox.setContentSize(cc.size(40, 40));
        this._imgCheckBox.setTouchEnabled(false);

        ///// # _imgCheck
        this._imgCheck = new ccui.ImageView();
        this._imgCheck.setName("_imgCheck");
        this._imgCheckBox.addChild(this._imgCheck);
        this._imgCheck.setCascadeOpacityEnabled(true);
        this._imgCheck.setCascadeColorEnabled(true);
        this._imgCheck.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCheck, 0.5, 0.5);
        let _imgCheckLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCheck);
        _imgCheckLayoutComponent.setPositionPercentXEnabled(true);
        _imgCheckLayoutComponent.setPositionPercentX(0.5);
        _imgCheckLayoutComponent.setPositionPercentYEnabled(true);
        _imgCheckLayoutComponent.setPositionPercentY(0.5);
        this._imgCheck.loadTexture("basics2/other/Check_01.png", 1);
        this._imgCheck.setUnifySizeEnabled(false);
        this._imgCheck.ignoreContentAdaptWithSize(false);
        this._imgCheck.setContentSize(cc.size(41, 42));
        this._imgCheck.setTouchEnabled(false);

    },



});

/**
 * Create TrophyDetailWidget
 * @returns {_ccs.TrophyDetailWidget}
 */
_ccs.TrophyDetailWidget.create = function () {
    return new _ccs.TrophyDetailWidget();
};
