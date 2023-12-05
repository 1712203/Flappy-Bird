/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.BingoTimerWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.BingoTimerWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ccui.ImageView} */
    _imgBarBackground: null,
    /** @type {ck.Text} */
    _txtTime: null,
    /** @type {cc.ProgressTimer} */
    _progressTimer: null,


    /**
     * _ccs.BingoTimerWidget constructor
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
        this._layoutRoot.setContentSize(cc.size(116, 116));

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
        this._imgBackground.loadTexture("bingo/ui/TimerBackground.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setContentSize(cc.size(99, 98));
        this._imgBackground.setTouchEnabled(false);

        ///// # _imgBarBackground
        this._imgBarBackground = new ccui.ImageView();
        this._imgBarBackground.setName("_imgBarBackground");
        this._layoutRoot.addChild(this._imgBarBackground);
        this._imgBarBackground.setCascadeOpacityEnabled(true);
        this._imgBarBackground.setCascadeColorEnabled(true);
        this._imgBarBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBarBackground, 0.5, 0.46);
        let _imgBarBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBarBackground);
        _imgBarBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBarBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBarBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBarBackgroundLayoutComponent.setPositionPercentY(0.46);
        this._imgBarBackground.loadTexture("bingo/ui/BarTimerBackground.png", 1);
        this._imgBarBackground.setUnifySizeEnabled(false);
        this._imgBarBackground.ignoreContentAdaptWithSize(false);
        this._imgBarBackground.setContentSize(cc.size(116, 117));
        this._imgBarBackground.setTouchEnabled(false);

        ///// # _txtTime
        this._txtTime = new ck.Text();
        this._txtTime.setName("_txtTime");
        this._layoutRoot.addChild(this._txtTime);
        this._txtTime.setCascadeOpacityEnabled(true);
        this._txtTime.setCascadeColorEnabled(true);
        this._txtTime.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTime, 0.5, 0.5);
        this._txtTime.setTextColor(cc.color(233, 207, 63, 255));
        let _txtTimeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTime);
        _txtTimeLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLayoutComponent.setPositionPercentX(0.5);
        _txtTimeLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLayoutComponent.setPositionPercentY(0.5);
        this._txtTime.setTouchEnabled(false);
        this._txtTime.ignoreContentAdaptWithSize(true);
        this._txtTime.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtTime.setDefaultFontSize(50);
        this._txtTime.setTextHorizontalAlignment(0);
        this._txtTime.setTextVerticalAlignment(0);
        this._txtTime.enableShadow(cc.color(0, 0, 0, 255), cc.size(1, -2), 0);

        ///// # _progressTimer
        let __sprite = new cc.Sprite();
        __sprite.setSpriteFrame(cc.spriteFrameCache.getSpriteFrame("bingo/ui/BarTimer.png"));
        this._progressTimer = new cc.ProgressTimer(__sprite);
        this._progressTimer.setName("_progressTimer");
        this._layoutRoot.addChild(this._progressTimer);
        this._progressTimer.setCascadeOpacityEnabled(true);
        this._progressTimer.setCascadeColorEnabled(true);
        this._progressTimer.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._progressTimer, 0.5, 0.49);
        let _progressTimerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._progressTimer);
        _progressTimerLayoutComponent.setPositionPercentXEnabled(true);
        _progressTimerLayoutComponent.setPositionPercentX(0.5);
        _progressTimerLayoutComponent.setPositionPercentYEnabled(true);
        _progressTimerLayoutComponent.setPositionPercentY(0.49);
        this._progressTimer.setType(cc.ProgressTimer.TYPE_RADIAL);

    },



});

/**
 * Create BingoTimerWidget
 * @returns {_ccs.BingoTimerWidget}
 */
_ccs.BingoTimerWidget.create = function () {
    return new _ccs.BingoTimerWidget();
};
