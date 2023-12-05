/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.progressExp
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.progressExp = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutProgress: null,
    /** @type {ccui.ImageView} */
    _imgProgressBackground: null,
    /** @type {ccui.ImageView} */
    _imgProgress: null,
    /** @type {ccui.ImageView} */
    _imgExpNext: null,
    /** @type {ck.Text} */
    _textLevelNext: null,
    /** @type {ccui.ImageView} */
    _imgExp: null,
    /** @type {ck.Text} */
    _textLevel: null,


    /**
     * _ccs.progressExp constructor
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
        this._layoutRoot.setTouchEnabled(true);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(420, 50));

        ///// # _layoutProgress
        this._layoutProgress = new ccui.Layout();
        this._layoutProgress.setName("_layoutProgress");
        this._layoutRoot.addChild(this._layoutProgress);
        this._layoutProgress.setCascadeOpacityEnabled(true);
        this._layoutProgress.setCascadeColorEnabled(true);
        this._layoutProgress.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutProgress, 1, 0.5);
        let _layoutProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutProgress);
        _layoutProgressLayoutComponent.setPositionPercentXEnabled(true);
        _layoutProgressLayoutComponent.setPositionPercentX(1);
        _layoutProgressLayoutComponent.setPositionPercentYEnabled(true);
        _layoutProgressLayoutComponent.setPositionPercentY(0.5);
        _layoutProgressLayoutComponent.setPercentWidthEnabled(true);
        _layoutProgressLayoutComponent.setPercentWidth(0.96);
        this._layoutProgress.setTouchEnabled(true);
        this._layoutProgress.setUnifySizeEnabled(false);
        this._layoutProgress.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutProgress, 0.96);
        this._layoutProgress.setContentSize(cc.size(this._layoutProgress.width, 33));

        ///// # _imgProgressBackground
        this._imgProgressBackground = new ccui.ImageView();
        this._imgProgressBackground.setName("_imgProgressBackground");
        this._layoutProgress.addChild(this._imgProgressBackground);
        this._imgProgressBackground.setCascadeOpacityEnabled(true);
        this._imgProgressBackground.setCascadeColorEnabled(true);
        this._imgProgressBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgProgressBackground, 0.5, 0.5);
        let _imgProgressBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgProgressBackground);
        _imgProgressBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgProgressBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgProgressBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgProgressBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgProgressBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgProgressBackgroundLayoutComponent.setPercentWidth(1);
        this._imgProgressBackground.loadTexture("basics/bars/Bar_01.png", 1);
        this._imgProgressBackground.setUnifySizeEnabled(false);
        this._imgProgressBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._imgProgressBackground, 1);
        this._imgProgressBackground.setContentSize(cc.size(this._imgProgressBackground.width, 10));
        this._imgProgressBackground.setTouchEnabled(false);

        ///// # _imgProgress
        this._imgProgress = new ccui.ImageView();
        this._imgProgress.setName("_imgProgress");
        this._imgProgressBackground.addChild(this._imgProgress);
        this._imgProgress.setCascadeOpacityEnabled(true);
        this._imgProgress.setCascadeColorEnabled(true);
        this._imgProgress.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgProgress, 0.0056, 0.5);
        let _imgProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgProgress);
        _imgProgressLayoutComponent.setPositionPercentYEnabled(true);
        _imgProgressLayoutComponent.setPositionPercentY(0.5);
        _imgProgressLayoutComponent.setPercentWidthEnabled(true);
        _imgProgressLayoutComponent.setPercentWidth(0.99);
        this._imgProgress.loadTexture("basics/bars/Bar_02.png", 1);
        this._imgProgress.setUnifySizeEnabled(false);
        this._imgProgress.ignoreContentAdaptWithSize(false);
        this._imgProgress.setScale9Enabled(true);
        this._imgProgress.setCapInsets(cc.rect(12, 0, 470, 10));
        ck.UIUtils.setWidthPercent(this._imgProgress, 0.99);
        this._imgProgress.setContentSize(cc.size(this._imgProgress.width, 6));
        this._imgProgress.setTouchEnabled(false);

        ///// # _imgExpNext
        this._imgExpNext = new ccui.ImageView();
        this._imgExpNext.setName("_imgExpNext");
        this._imgProgressBackground.addChild(this._imgExpNext);
        this._imgExpNext.setCascadeOpacityEnabled(true);
        this._imgExpNext.setCascadeColorEnabled(true);
        this._imgExpNext.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgExpNext, 0.5614, 0.5533);
        let _imgExpNextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExpNext);
        _imgExpNextLayoutComponent.setPositionPercentXEnabled(true);
        _imgExpNextLayoutComponent.setPositionPercentX(0.5614);
        _imgExpNextLayoutComponent.setPositionPercentYEnabled(true);
        _imgExpNextLayoutComponent.setPositionPercentY(0.5533);
        this._imgExpNext.loadTexture("icons/color/stars/Blue.png", 1);
        this._imgExpNext.setUnifySizeEnabled(false);
        this._imgExpNext.ignoreContentAdaptWithSize(false);
        this._imgExpNext.setContentSize(cc.size(58, 58));
        this._imgExpNext.setTouchEnabled(true);

        ///// # _textLevelNext
        this._textLevelNext = new ck.Text();
        this._textLevelNext.setName("_textLevelNext");
        this._imgExpNext.addChild(this._textLevelNext);
        this._textLevelNext.setCascadeOpacityEnabled(true);
        this._textLevelNext.setCascadeColorEnabled(true);
        this._textLevelNext.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._textLevelNext, 0.5146, 0.4598);
        let _textLevelNextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._textLevelNext);
        _textLevelNextLayoutComponent.setPositionPercentXEnabled(true);
        _textLevelNextLayoutComponent.setPositionPercentX(0.5146);
        _textLevelNextLayoutComponent.setPositionPercentYEnabled(true);
        _textLevelNextLayoutComponent.setPositionPercentY(0.4598);
        this._textLevelNext.setTouchEnabled(false);
        this._textLevelNext.ignoreContentAdaptWithSize(true);
        this._textLevelNext.setFontName("fonts/GroBold.ttf");
        this._textLevelNext.setDefaultFontSize(23);
        this._textLevelNext.setString("1000");
        this._textLevelNext.setTextHorizontalAlignment(1);
        this._textLevelNext.setTextVerticalAlignment(1);
        this._textLevelNext.enableOutline(cc.color(26, 26, 26, 255), 1);

        ///// # _imgExp
        this._imgExp = new ccui.ImageView();
        this._imgExp.setName("_imgExp");
        this._layoutRoot.addChild(this._imgExp);
        this._imgExp.setCascadeOpacityEnabled(true);
        this._imgExp.setCascadeColorEnabled(true);
        this._imgExp.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgExp, 0.0564, 0.5568);
        let _imgExpLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgExp);
        _imgExpLayoutComponent.setPositionPercentXEnabled(true);
        _imgExpLayoutComponent.setPositionPercentX(0.0564);
        _imgExpLayoutComponent.setPositionPercentYEnabled(true);
        _imgExpLayoutComponent.setPositionPercentY(0.5568);
        this._imgExp.loadTexture("icons/color/stars/Blue.png", 1);
        this._imgExp.setUnifySizeEnabled(false);
        this._imgExp.ignoreContentAdaptWithSize(false);
        this._imgExp.setContentSize(cc.size(58, 58));
        this._imgExp.setTouchEnabled(true);

        ///// # _textLevel
        this._textLevel = new ck.Text();
        this._textLevel.setName("_textLevel");
        this._imgExp.addChild(this._textLevel);
        this._textLevel.setCascadeOpacityEnabled(true);
        this._textLevel.setCascadeColorEnabled(true);
        this._textLevel.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._textLevel, 0.5, 0.4433);
        let _textLevelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._textLevel);
        _textLevelLayoutComponent.setPositionPercentXEnabled(true);
        _textLevelLayoutComponent.setPositionPercentX(0.5);
        _textLevelLayoutComponent.setPositionPercentYEnabled(true);
        _textLevelLayoutComponent.setPositionPercentY(0.4433);
        this._textLevel.setTouchEnabled(false);
        this._textLevel.ignoreContentAdaptWithSize(true);
        this._textLevel.setFontName("fonts/GroBold.ttf");
        this._textLevel.setDefaultFontSize(23);
        this._textLevel.setString("1000");
        this._textLevel.setTextHorizontalAlignment(1);
        this._textLevel.setTextVerticalAlignment(1);
        this._textLevel.enableOutline(cc.color(26, 26, 26, 255), 1);

    },



});

/**
 * Create progressExp
 * @returns {_ccs.progressExp}
 */
_ccs.progressExp.create = function () {
    return new _ccs.progressExp();
};
