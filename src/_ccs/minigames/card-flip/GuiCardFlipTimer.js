/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.GuiCardFlipTimer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.GuiCardFlipTimer = cc.Layer.extend({

    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ck.Text} */
    _txtTime: null,


    /**
     * _ccs.GuiCardFlipTimer constructor
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

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setHorizontalEdge(ccui.LayoutComponent.horizontalEdge.CENTER);
        _imgBackgroundLayoutComponent.setLeftMargin(-53);
        _imgBackgroundLayoutComponent.setRightMargin(-52);
        _imgBackgroundLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.CENTER);
        _imgBackgroundLayoutComponent.setTopMargin(-53);
        _imgBackgroundLayoutComponent.setBottomMargin(-54);
        this._imgBackground.loadTexture("icons/color/timer/Timer_00_00.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setContentSize(cc.size(106, 108));
        this._imgBackground.setTouchEnabled(false);

        ///// # _txtTime
        this._txtTime = new ck.Text();
        this._txtTime.setName("_txtTime");
        this._imgBackground.addChild(this._txtTime);
        this._txtTime.setCascadeOpacityEnabled(true);
        this._txtTime.setCascadeColorEnabled(true);
        this._txtTime.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTime, 0.48, 0.5);
        this._txtTime.setTextColor(cc.color(255, 255, 0, 255));
        let _txtTimeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTime);
        _txtTimeLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLayoutComponent.setPositionPercentX(0.48);
        _txtTimeLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.CENTER);
        _txtTimeLayoutComponent.setTopMargin(25.502);
        _txtTimeLayoutComponent.setBottomMargin(25.498);
        this._txtTime.setTouchEnabled(false);
        this._txtTime.ignoreContentAdaptWithSize(true);
        this._txtTime.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtTime.setDefaultFontSize(50);
        this._txtTime.setTextHorizontalAlignment(1);
        this._txtTime.setTextVerticalAlignment(1);
        this._txtTime.enableShadow(cc.color(0, 0, 0, 255), cc.size(2, -2), 0);

    },



});

/**
 * Create GuiCardFlipTimer
 * @returns {_ccs.GuiCardFlipTimer}
 */
_ccs.GuiCardFlipTimer.create = function () {
    return new _ccs.GuiCardFlipTimer();
};
