/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.BigBetButtonWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.BigBetButtonWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtIcon: null,
    /** @type {ccui.ImageView} */
    _imgBgrText: null,
    /** @type {ccui.ImageView} */
    _imgText: null,


    /**
     * _ccs.BigBetButtonWidget constructor
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
        this._root.setTouchEnabled(false);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(165, 165));

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._root.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.5);
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(0.5);
        this._imgBackground.loadTexture("buttons/hexagonal/Blue_02.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setContentSize(cc.size(195, 188));
        this._imgBackground.setTouchEnabled(false);

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._root.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.6667);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        this._imgIcon.loadTexture("bigbet/Star.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(119, 125));
        this._imgIcon.setTouchEnabled(false);

        ///// # _txtIcon
        this._txtIcon = new ck.Text();
        this._txtIcon.setName("_txtIcon");
        this._imgIcon.addChild(this._txtIcon);
        this._txtIcon.setCascadeOpacityEnabled(true);
        this._txtIcon.setCascadeColorEnabled(true);
        this._txtIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtIcon, 0.4855, 0.5475);
        let _txtIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtIcon);
        this._txtIcon.setTouchEnabled(false);
        this._txtIcon.ignoreContentAdaptWithSize(true);
        this._txtIcon.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtIcon.setDefaultFontSize(30);
        this._txtIcon.setString("x1~1000");
        this._txtIcon.setTextHorizontalAlignment(0);
        this._txtIcon.setTextVerticalAlignment(0);
        this._txtIcon.enableOutline(cc.color(0, 0, 0, 255), 2);

        ///// # _imgBgrText
        this._imgBgrText = new ccui.ImageView();
        this._imgBgrText.setName("_imgBgrText");
        this._root.addChild(this._imgBgrText);
        this._imgBgrText.setCascadeOpacityEnabled(true);
        this._imgBgrText.setCascadeColorEnabled(true);
        this._imgBgrText.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgrText, 0.5, 0.25);
        let _imgBgrTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrText);
        _imgBgrTextLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrTextLayoutComponent.setPositionPercentX(0.5);
        _imgBgrTextLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrTextLayoutComponent.setPositionPercentY(0.25);
        this._imgBgrText.loadTexture("buttons/hexagonal/Blue_01.png", 1);
        this._imgBgrText.setUnifySizeEnabled(false);
        this._imgBgrText.ignoreContentAdaptWithSize(false);
        this._imgBgrText.setContentSize(cc.size(141, 51));
        this._imgBgrText.setTouchEnabled(false);

        ///// # _imgText
        this._imgText = new ccui.ImageView();
        this._imgText.setName("_imgText");
        this._root.addChild(this._imgText);
        this._imgText.setCascadeOpacityEnabled(true);
        this._imgText.setCascadeColorEnabled(true);
        this._imgText.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgText, 0.5, 0.25);
        let _imgTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgText);
        _imgTextLayoutComponent.setPositionPercentXEnabled(true);
        _imgTextLayoutComponent.setPositionPercentX(0.5);
        _imgTextLayoutComponent.setPositionPercentYEnabled(true);
        _imgTextLayoutComponent.setPositionPercentY(0.25);
        this._imgText.loadTexture("texts/home/BigBet.png", 1);
        this._imgText.setTouchEnabled(false);

    },


    playCCSAnimIdle: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimIdle();
    
        let _imgIconAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(60 / (60 * speed), 1.005, 1.01).easing(cc.easeSineInOut()),
                    cc.scaleTo(60 / (60 * speed), 1, 1).easing(cc.easeSineInOut())
                ),
                cc.sequence(
                    cc.moveTo(60 / (60 * speed), 82.5, 115),
                    cc.moveTo(60 / (60 * speed), 82.5, 110)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgIcon.setScale(1, 1);
                this._imgIcon.setPosition(82.5, 110);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgIconAction = _imgIconAction.repeatForever();
        } else _imgIconAction = cc.sequence(
            cc.delayTime(delay),
            _imgIconAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgIcon.runAction(_imgIconAction);
    },

    resetCCSAnimIdle: function () {
        this._imgIcon.stopAllActions();
        this._imgIcon.setScale(1, 1);
        this._imgIcon.setPosition(82.5, 110);
    }
});

/**
 * Create BigBetButtonWidget
 * @returns {_ccs.BigBetButtonWidget}
 */
_ccs.BigBetButtonWidget.create = function () {
    return new _ccs.BigBetButtonWidget();
};
