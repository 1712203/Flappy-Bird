/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ClaimArrow
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ClaimArrow = ccui.Widget.extend({

    /** @type {ccui.ImageView} */
    _imgCLaim: null,
    /** @type {ck.Text} */
    _txtPlay: null,


    /**
     * _ccs.ClaimArrow constructor
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

        ///// # _imgCLaim
        this._imgCLaim = new ccui.ImageView();
        this._imgCLaim.setName("_imgCLaim");
        this.addChild(this._imgCLaim);
        this._imgCLaim.setCascadeOpacityEnabled(true);
        this._imgCLaim.setCascadeColorEnabled(true);
        this._imgCLaim.setAnchorPoint(cc.p(0, 0.5));
        let _imgCLaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCLaim);
        this._imgCLaim.loadTexture("basics/other/ArrowBoardGreen.png", 1);
        this._imgCLaim.setUnifySizeEnabled(false);
        this._imgCLaim.ignoreContentAdaptWithSize(false);
        this._imgCLaim.setContentSize(cc.size(82, 69));
        this._imgCLaim.setTouchEnabled(false);

        ///// # _txtPlay
        this._txtPlay = new ck.Text();
        this._txtPlay.setName("_txtPlay");
        this._imgCLaim.addChild(this._txtPlay);
        this._txtPlay.setCascadeOpacityEnabled(true);
        this._txtPlay.setCascadeColorEnabled(true);
        this._txtPlay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPlay, 0.526, 0.483);
        this._txtPlay.setTextColor(cc.color(28, 119, 7, 255));
        let _txtPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPlay);
        _txtPlayLayoutComponent.setPositionPercentXEnabled(true);
        _txtPlayLayoutComponent.setPositionPercentX(0.526);
        _txtPlayLayoutComponent.setPositionPercentYEnabled(true);
        _txtPlayLayoutComponent.setPositionPercentY(0.483);
        this._txtPlay.setTouchEnabled(false);
        this._txtPlay.ignoreContentAdaptWithSize(true);
        this._txtPlay.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtPlay.setDefaultFontSize(25);
        this._txtPlay.setString(gm.localize.getText("TXT_CLAIM"));
        this._txtPlay.setTextHorizontalAlignment(1);
        this._txtPlay.setTextVerticalAlignment(1);
        this._txtPlay.enableShadow(cc.color(192, 241, 92, 255), cc.size(0, -2), 0);

    },


    playCCSAnimIdle: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimIdle();
    
        let _imgCLaimAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(15 / (60 * speed), 20, 0).easing(cc.easeCubicActionIn()),
                    cc.moveTo(15 / (60 * speed), 0, 0).easing(cc.easeCubicActionOut())
                ),
                cc.sequence(
                    cc.scaleTo(15 / (60 * speed), 1.15, 0.85).easing(cc.easeCubicActionIn()),
                    cc.scaleTo(15 / (60 * speed), 1, 1).easing(cc.easeCubicActionOut())
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgCLaim.setPosition(0, 0);
                this._imgCLaim.setScale(1, 1);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgCLaimAction = _imgCLaimAction.repeatForever();
        } else _imgCLaimAction = cc.sequence(
            cc.delayTime(delay),
            _imgCLaimAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgCLaim.runAction(_imgCLaimAction);
    },

    resetCCSAnimIdle: function () {
        this._imgCLaim.stopAllActions();
        this._imgCLaim.setPosition(0, 0);
        this._imgCLaim.setScale(1, 1);
    }
});

/**
 * Create ClaimArrow
 * @returns {_ccs.ClaimArrow}
 */
_ccs.ClaimArrow.create = function () {
    return new _ccs.ClaimArrow();
};
