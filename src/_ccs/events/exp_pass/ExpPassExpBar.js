/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ExpPassExpBar
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ExpPassExpBar = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    imgBg: null,
    /** @type {ccui.ImageView} */
    _imgLevelBar: null,
    /** @type {ck.LoadingBar} */
    _progressBarLevel: null,
    /** @type {ck.Text} */
    _txtProgress: null,
    /** @type {ccui.ImageView} */
    _imgLevelBox: null,
    /** @type {ck.Text} */
    _textLevel: null,
    /** @type {ccui.ImageView} */
    _imgIconExp: null,


    /**
     * _ccs.ExpPassExpBar constructor
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

        ///// # imgBg
        this.imgBg = new ccui.Layout();
        this.imgBg.setName("imgBg");
        this.addChild(this.imgBg);
        this.imgBg.setCascadeOpacityEnabled(true);
        this.imgBg.setCascadeColorEnabled(true);
        this.imgBg.setAnchorPoint(cc.p(0.5, 0.5));
        let imgBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgBg);
        imgBgLayoutComponent.setPositionPercentXEnabled(true);
        imgBgLayoutComponent.setPositionPercentX(0);
        imgBgLayoutComponent.setPositionPercentYEnabled(true);
        imgBgLayoutComponent.setPositionPercentY(0);
        this.imgBg.setTouchEnabled(true);
        this.imgBg.setUnifySizeEnabled(false);
        this.imgBg.ignoreContentAdaptWithSize(false);
        this.imgBg.setContentSize(cc.size(480, 46));

        ///// # _imgLevelBar
        this._imgLevelBar = new ccui.ImageView();
        this._imgLevelBar.setName("_imgLevelBar");
        this.imgBg.addChild(this._imgLevelBar);
        this._imgLevelBar.setCascadeOpacityEnabled(true);
        this._imgLevelBar.setCascadeColorEnabled(true);
        this._imgLevelBar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLevelBar, 0.5, 0.5);
        let _imgLevelBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLevelBar);
        _imgLevelBarLayoutComponent.setPositionPercentXEnabled(true);
        _imgLevelBarLayoutComponent.setPositionPercentX(0.5);
        _imgLevelBarLayoutComponent.setPositionPercentYEnabled(true);
        _imgLevelBarLayoutComponent.setPositionPercentY(0.5);
        this._imgLevelBar.loadTexture("e12_progress_bar.png", 1);
        this._imgLevelBar.setUnifySizeEnabled(false);
        this._imgLevelBar.ignoreContentAdaptWithSize(false);
        this._imgLevelBar.setContentSize(cc.size(393, 37));
        this._imgLevelBar.setTouchEnabled(false);

        ///// # _progressBarLevel
        this._progressBarLevel = new ck.LoadingBar();
        this._progressBarLevel.setName("_progressBarLevel");
        this._imgLevelBar.addChild(this._progressBarLevel);
        this._progressBarLevel.setCascadeOpacityEnabled(true);
        this._progressBarLevel.setCascadeColorEnabled(true);
        this._progressBarLevel.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._progressBarLevel, 0.0051, 0.5465);
        this._progressBarLevel.setOpacity(216);
        let _progressBarLevelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._progressBarLevel);
        _progressBarLevelLayoutComponent.setPositionPercentXEnabled(true);
        _progressBarLevelLayoutComponent.setPositionPercentX(0.0051);
        _progressBarLevelLayoutComponent.setPositionPercentYEnabled(true);
        _progressBarLevelLayoutComponent.setPositionPercentY(0.5465);
        _progressBarLevelLayoutComponent.setPercentWidthEnabled(true);
        _progressBarLevelLayoutComponent.setPercentWidth(0.9906);
        this._progressBarLevel.setTouchEnabled(false);
        this._progressBarLevel.setUnifySizeEnabled(false);
        this._progressBarLevel.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._progressBarLevel, 0.9906);
        this._progressBarLevel.setContentSize(cc.size(this._progressBarLevel.width, 29));
        this._progressBarLevel.loadTexture("e12_green_process.png", 1);

        ///// # _txtProgress
        this._txtProgress = new ck.Text();
        this._txtProgress.setName("_txtProgress");
        this._imgLevelBar.addChild(this._txtProgress);
        this._txtProgress.setCascadeOpacityEnabled(true);
        this._txtProgress.setCascadeColorEnabled(true);
        this._txtProgress.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtProgress, 0.4988, 0.5233);
        let _txtProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtProgress);
        _txtProgressLayoutComponent.setPositionPercentXEnabled(true);
        _txtProgressLayoutComponent.setPositionPercentX(0.4988);
        _txtProgressLayoutComponent.setPositionPercentYEnabled(true);
        _txtProgressLayoutComponent.setPositionPercentY(0.5233);
        this._txtProgress.setTouchEnabled(false);
        this._txtProgress.setUnifySizeEnabled(false);
        this._txtProgress.ignoreContentAdaptWithSize(false);
        this._txtProgress.setContentSize(cc.size(336.5475, 32));
        this._txtProgress.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtProgress.setDefaultFontSize(23);
        this._txtProgress.setString(gm.localize.getText("TXT_9/10"));
        this._txtProgress.setTextHorizontalAlignment(1);
        this._txtProgress.setTextVerticalAlignment(1);
        this._txtProgress.enableOutline(cc.color(26, 59, 8, 255), 1);
        this._txtProgress.enableShadow(cc.color(26, 59, 8, 255), cc.size(0, -2), 0);

        ///// # _imgLevelBox
        this._imgLevelBox = new ccui.ImageView();
        this._imgLevelBox.setName("_imgLevelBox");
        this._imgLevelBar.addChild(this._imgLevelBox);
        this._imgLevelBox.setCascadeOpacityEnabled(true);
        this._imgLevelBox.setCascadeColorEnabled(true);
        this._imgLevelBox.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLevelBox, 1.0511, 0.6498);
        this._imgLevelBox.setScale(0.8, 0.8);
        let _imgLevelBoxLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLevelBox);
        _imgLevelBoxLayoutComponent.setPositionPercentXEnabled(true);
        _imgLevelBoxLayoutComponent.setPositionPercentX(1.0511);
        _imgLevelBoxLayoutComponent.setPositionPercentYEnabled(true);
        _imgLevelBoxLayoutComponent.setPositionPercentY(0.6498);
        this._imgLevelBox.loadTexture("e12_star.png", 1);
        this._imgLevelBox.setUnifySizeEnabled(false);
        this._imgLevelBox.ignoreContentAdaptWithSize(false);
        this._imgLevelBox.setContentSize(cc.size(83, 85));
        this._imgLevelBox.setTouchEnabled(false);

        ///// # _textLevel
        this._textLevel = new ck.Text();
        this._textLevel.setName("_textLevel");
        this._imgLevelBox.addChild(this._textLevel);
        this._textLevel.setCascadeOpacityEnabled(true);
        this._textLevel.setCascadeColorEnabled(true);
        this._textLevel.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._textLevel, 0.5, 0.5094);
        this._textLevel.setTextColor(cc.color(122, 65, 9, 255));
        let _textLevelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._textLevel);
        _textLevelLayoutComponent.setPositionPercentXEnabled(true);
        _textLevelLayoutComponent.setPositionPercentX(0.5);
        _textLevelLayoutComponent.setPositionPercentYEnabled(true);
        _textLevelLayoutComponent.setPositionPercentY(0.5094);
        this._textLevel.setTouchEnabled(false);
        this._textLevel.ignoreContentAdaptWithSize(true);
        this._textLevel.setFontName("fonts/LilitaOneRegular.ttf");
        this._textLevel.setDefaultFontSize(35);
        this._textLevel.setString("2");
        this._textLevel.setTextHorizontalAlignment(1);
        this._textLevel.setTextVerticalAlignment(1);

        ///// # _imgIconExp
        this._imgIconExp = new ccui.ImageView();
        this._imgIconExp.setName("_imgIconExp");
        this._imgLevelBar.addChild(this._imgIconExp);
        this._imgIconExp.setCascadeOpacityEnabled(true);
        this._imgIconExp.setCascadeColorEnabled(true);
        this._imgIconExp.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconExp, -0.0619, 0.7857);
        this._imgIconExp.setScale(0.65, 0.65);
        let _imgIconExpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconExp);
        _imgIconExpLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconExpLayoutComponent.setPositionPercentX(-0.0619);
        _imgIconExpLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconExpLayoutComponent.setPositionPercentY(0.7857);
        this._imgIconExp.loadTexture("icons/color/stars/Blue.png", 1);
        this._imgIconExp.setUnifySizeEnabled(false);
        this._imgIconExp.ignoreContentAdaptWithSize(false);
        this._imgIconExp.setContentSize(cc.size(128, 128));
        this._imgIconExp.setTouchEnabled(false);

    },



});

/**
 * Create ExpPassExpBar
 * @returns {_ccs.ExpPassExpBar}
 */
_ccs.ExpPassExpBar.create = function () {
    return new _ccs.ExpPassExpBar();
};
