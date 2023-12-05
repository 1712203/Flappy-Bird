/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PokerButtonWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.PokerButtonWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ccui.ImageView} */
    _imageShadow: null,
    /** @type {ccui.Layout} */
    _layoutIcon: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ccui.ImageView} */
    _imgIconCard03: null,
    /** @type {ccui.ImageView} */
    _imgIconCard02: null,
    /** @type {ccui.ImageView} */
    _imgIconCard01: null,
    /** @type {ccui.ImageView} */
    _imgIconCard00: null,
    /** @type {ccui.ImageView} */
    _imgIconCard04: null,
    /** @type {ccui.ImageView} */
    _imgBgrText: null,
    /** @type {ccui.ImageView} */
    _imgText: null,
    /** @type {ck.Text} */
    _txtText: null,
    /** @type {ck.Text} */
    _txtQuestionMark: null,
    /** @type {ck.Text} */
    _txtUnlock: null,


    /**
     * _ccs.PokerButtonWidget constructor
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
        this._imgBackground.setScale(1.17, 1.17);
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(0.5);
        this._imgBackground.loadTexture("buttons/hexagonal/Violet_02.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setContentSize(cc.size(143, 134));
        this._imgBackground.setTouchEnabled(false);

        ///// # _imageShadow
        this._imageShadow = new ccui.ImageView();
        this._imageShadow.setName("_imageShadow");
        this._root.addChild(this._imageShadow);
        this._imageShadow.setCascadeOpacityEnabled(true);
        this._imageShadow.setCascadeColorEnabled(true);
        this._imageShadow.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imageShadow, 0.52, 0.5);
        this._imageShadow.setVisible(false);
        this._imageShadow.setScale(1.2, 1.2);
        this._imageShadow.setColor(cc.color(188, 255, 176, 255));
        let _imageShadowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imageShadow);
        _imageShadowLayoutComponent.setPositionPercentXEnabled(true);
        _imageShadowLayoutComponent.setPositionPercentX(0.52);
        _imageShadowLayoutComponent.setPositionPercentYEnabled(true);
        _imageShadowLayoutComponent.setPositionPercentY(0.5);
        this._imageShadow.loadTexture("home/MiniGameShadow.png", 1);
        this._imageShadow.setUnifySizeEnabled(false);
        this._imageShadow.ignoreContentAdaptWithSize(false);
        this._imageShadow.setContentSize(cc.size(124, 135));
        this._imageShadow.setTouchEnabled(false);

        ///// # _layoutIcon
        this._layoutIcon = new ccui.Layout();
        this._layoutIcon.setName("_layoutIcon");
        this._root.addChild(this._layoutIcon);
        this._layoutIcon.setCascadeOpacityEnabled(true);
        this._layoutIcon.setCascadeColorEnabled(true);
        this._layoutIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutIcon, 0.5, 0.5879);
        this._layoutIcon.setScale(0.8, 0.8);
        let _layoutIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutIcon);
        _layoutIconLayoutComponent.setPositionPercentXEnabled(true);
        _layoutIconLayoutComponent.setPositionPercentX(0.5);
        this._layoutIcon.setTouchEnabled(false);
        this._layoutIcon.setUnifySizeEnabled(false);
        this._layoutIcon.ignoreContentAdaptWithSize(false);
        this._layoutIcon.setContentSize(cc.size(125, 125));

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._layoutIcon.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.5);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.5);
        this._imgIcon.loadTexture("home/IconPoker.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(121, 90));
        this._imgIcon.setTouchEnabled(false);

        ///// # _imgIconCard03
        this._imgIconCard03 = new ccui.ImageView();
        this._imgIconCard03.setName("_imgIconCard03");
        this._imgIcon.addChild(this._imgIconCard03);
        this._imgIconCard03.setCascadeOpacityEnabled(true);
        this._imgIconCard03.setCascadeColorEnabled(true);
        this._imgIconCard03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconCard03, 0.8142, 1.1168);
        let _imgIconCard03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconCard03);
        this._imgIconCard03.loadTexture("home/Card_K.png", 1);
        this._imgIconCard03.setUnifySizeEnabled(false);
        this._imgIconCard03.ignoreContentAdaptWithSize(false);
        this._imgIconCard03.setContentSize(cc.size(49, 65));
        this._imgIconCard03.setTouchEnabled(false);

        ///// # _imgIconCard02
        this._imgIconCard02 = new ccui.ImageView();
        this._imgIconCard02.setName("_imgIconCard02");
        this._imgIcon.addChild(this._imgIconCard02);
        this._imgIconCard02.setCascadeOpacityEnabled(true);
        this._imgIconCard02.setCascadeColorEnabled(true);
        this._imgIconCard02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconCard02, 0.526, 1.0183);
        let _imgIconCard02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconCard02);
        this._imgIconCard02.loadTexture("home/Card_Q.png", 1);
        this._imgIconCard02.setUnifySizeEnabled(false);
        this._imgIconCard02.ignoreContentAdaptWithSize(false);
        this._imgIconCard02.setContentSize(cc.size(62, 74));
        this._imgIconCard02.setTouchEnabled(false);

        ///// # _imgIconCard01
        this._imgIconCard01 = new ccui.ImageView();
        this._imgIconCard01.setName("_imgIconCard01");
        this._imgIcon.addChild(this._imgIconCard01);
        this._imgIconCard01.setCascadeOpacityEnabled(true);
        this._imgIconCard01.setCascadeColorEnabled(true);
        this._imgIconCard01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconCard01, 0.2457, 0.8303);
        let _imgIconCard01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconCard01);
        this._imgIconCard01.loadTexture("home/Card_J.png", 1);
        this._imgIconCard01.setUnifySizeEnabled(false);
        this._imgIconCard01.ignoreContentAdaptWithSize(false);
        this._imgIconCard01.setContentSize(cc.size(69, 75));
        this._imgIconCard01.setTouchEnabled(false);

        ///// # _imgIconCard00
        this._imgIconCard00 = new ccui.ImageView();
        this._imgIconCard00.setName("_imgIconCard00");
        this._imgIcon.addChild(this._imgIconCard00);
        this._imgIconCard00.setCascadeOpacityEnabled(true);
        this._imgIconCard00.setCascadeColorEnabled(true);
        this._imgIconCard00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconCard00, 0.0029, 0.5705);
        let _imgIconCard00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconCard00);
        this._imgIconCard00.loadTexture("home/Card_10.png", 1);
        this._imgIconCard00.setUnifySizeEnabled(false);
        this._imgIconCard00.ignoreContentAdaptWithSize(false);
        this._imgIconCard00.setContentSize(cc.size(74, 75));
        this._imgIconCard00.setTouchEnabled(false);

        ///// # _imgIconCard04
        this._imgIconCard04 = new ccui.ImageView();
        this._imgIconCard04.setName("_imgIconCard04");
        this._imgIcon.addChild(this._imgIconCard04);
        this._imgIconCard04.setCascadeOpacityEnabled(true);
        this._imgIconCard04.setCascadeColorEnabled(true);
        this._imgIconCard04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconCard04, 0.6495, 0.5732);
        this._imgIconCard04.setRotation(-1.5);
        let _imgIconCard04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconCard04);
        this._imgIconCard04.loadTexture("home/Card_A.png", 1);
        this._imgIconCard04.setUnifySizeEnabled(false);
        this._imgIconCard04.ignoreContentAdaptWithSize(false);
        this._imgIconCard04.setContentSize(cc.size(81, 91));
        this._imgIconCard04.setTouchEnabled(false);

        ///// # _imgBgrText
        this._imgBgrText = new ccui.ImageView();
        this._imgBgrText.setName("_imgBgrText");
        this._root.addChild(this._imgBgrText);
        this._imgBgrText.setCascadeOpacityEnabled(true);
        this._imgBgrText.setCascadeColorEnabled(true);
        this._imgBgrText.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgrText, 0.5, 0.2621);
        this._imgBgrText.setScale(1.22, 1.22);
        let _imgBgrTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrText);
        _imgBgrTextLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrTextLayoutComponent.setPositionPercentX(0.5);
        _imgBgrTextLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrTextLayoutComponent.setPositionPercentY(0.2621);
        this._imgBgrText.loadTexture("buttons/hexagonal/Violet_01.png", 1);
        this._imgBgrText.setUnifySizeEnabled(false);
        this._imgBgrText.ignoreContentAdaptWithSize(false);
        this._imgBgrText.setContentSize(cc.size(119, 42));
        this._imgBgrText.setTouchEnabled(false);

        ///// # _imgText
        this._imgText = new ccui.ImageView();
        this._imgText.setName("_imgText");
        this._root.addChild(this._imgText);
        this._imgText.setCascadeOpacityEnabled(true);
        this._imgText.setCascadeColorEnabled(true);
        this._imgText.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgText, 0.5, 0.297);
        let _imgTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgText);
        _imgTextLayoutComponent.setPositionPercentXEnabled(true);
        _imgTextLayoutComponent.setPositionPercentX(0.5);
        this._imgText.loadTexture("texts/home/MiniGamePoker.png", 1);
        this._imgText.setTouchEnabled(false);

        ///// # _txtText
        this._txtText = new ck.Text();
        this._txtText.setName("_txtText");
        this._root.addChild(this._txtText);
        this._txtText.setCascadeOpacityEnabled(true);
        this._txtText.setCascadeColorEnabled(true);
        this._txtText.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtText, 0.5, 0.2);
        this._txtText.setVisible(false);
        this._txtText.setTextColor(cc.color(188, 255, 176, 255));
        let _txtTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtText);
        _txtTextLayoutComponent.setPositionPercentXEnabled(true);
        _txtTextLayoutComponent.setPositionPercentX(0.5);
        this._txtText.setTouchEnabled(false);
        this._txtText.ignoreContentAdaptWithSize(true);
        this._txtText.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtText.setDefaultFontSize(30);
        this._txtText.setString("POKER GAME");
        this._txtText.setTextHorizontalAlignment(0);
        this._txtText.setTextVerticalAlignment(0);
        this._txtText.enableOutline(cc.color(48, 48, 48, 255), 1);

        ///// # _txtQuestionMark
        this._txtQuestionMark = new ck.Text();
        this._txtQuestionMark.setName("_txtQuestionMark");
        this._root.addChild(this._txtQuestionMark);
        this._txtQuestionMark.setCascadeOpacityEnabled(true);
        this._txtQuestionMark.setCascadeColorEnabled(true);
        this._txtQuestionMark.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtQuestionMark, 0.5037, 0.68);
        let _txtQuestionMarkLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtQuestionMark);
        _txtQuestionMarkLayoutComponent.setPositionPercentXEnabled(true);
        _txtQuestionMarkLayoutComponent.setPositionPercentX(0.5037);
        _txtQuestionMarkLayoutComponent.setPositionPercentYEnabled(true);
        _txtQuestionMarkLayoutComponent.setPositionPercentY(0.68);
        this._txtQuestionMark.setTouchEnabled(false);
        this._txtQuestionMark.ignoreContentAdaptWithSize(true);
        this._txtQuestionMark.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtQuestionMark.setDefaultFontSize(100);
        this._txtQuestionMark.setString("?");
        this._txtQuestionMark.setTextHorizontalAlignment(0);
        this._txtQuestionMark.setTextVerticalAlignment(0);
        this._txtQuestionMark.enableOutline(cc.color(117, 83, 0, 255), 3);
        this._txtQuestionMark.enableShadow(cc.color(59, 42, 0, 255), cc.size(0, -5), 0);

        ///// # _txtUnlock
        this._txtUnlock = new ck.Text();
        this._txtUnlock.setName("_txtUnlock");
        this._root.addChild(this._txtUnlock);
        this._txtUnlock.setCascadeOpacityEnabled(true);
        this._txtUnlock.setCascadeColorEnabled(true);
        this._txtUnlock.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtUnlock, 0.5, 0.28);
        let _txtUnlockLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtUnlock);
        _txtUnlockLayoutComponent.setPositionPercentXEnabled(true);
        _txtUnlockLayoutComponent.setPositionPercentX(0.5);
        _txtUnlockLayoutComponent.setPositionPercentYEnabled(true);
        _txtUnlockLayoutComponent.setPositionPercentY(0.28);
        this._txtUnlock.setTouchEnabled(false);
        this._txtUnlock.ignoreContentAdaptWithSize(true);
        this._txtUnlock.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtUnlock.setDefaultFontSize(30);
        this._txtUnlock.setString("Unlock at");
        this._txtUnlock.setTextHorizontalAlignment(1);
        this._txtUnlock.setTextVerticalAlignment(1);
        this._txtUnlock.enableOutline(cc.color(72, 53, 5, 255), 2);
        this._txtUnlock.enableShadow(cc.color(59, 42, 0, 255), cc.size(0, -2), 0);

    },


    playCCSAnimIdle: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimIdle();
    
        let _imgIconCard03Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(65 / (60 * speed), 97, 99).easing(cc.easeSineInOut()),
                    cc.moveTo(55 / (60 * speed), 99, 101).easing(cc.easeSineInOut())
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgIconCard03.setPosition(99, 101);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgIconCard03Action = _imgIconCard03Action.repeatForever();
        } else _imgIconCard03Action = cc.sequence(
            cc.delayTime(delay),
            _imgIconCard03Action.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgIconCard03.runAction(_imgIconCard03Action);
    
        let _imgIconCard02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(55 / (60 * speed), 62, 90).easing(cc.easeSineInOut()),
                    cc.moveTo(65 / (60 * speed), 64, 92).easing(cc.easeSineInOut())
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgIconCard02.setPosition(64, 92);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgIconCard02Action = _imgIconCard02Action.repeatForever();
        } else _imgIconCard02Action = cc.sequence(
            cc.delayTime(delay),
            _imgIconCard02Action.repeat(repeat)
        )
        
        this._imgIconCard02.runAction(_imgIconCard02Action);
    
        let _imgIconCard01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(45 / (60 * speed), 28, 73).easing(cc.easeSineInOut()),
                    cc.moveTo(75 / (60 * speed), 30, 75).easing(cc.easeSineInOut())
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgIconCard01.setPosition(30, 75);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgIconCard01Action = _imgIconCard01Action.repeatForever();
        } else _imgIconCard01Action = cc.sequence(
            cc.delayTime(delay),
            _imgIconCard01Action.repeat(repeat)
        )
        
        this._imgIconCard01.runAction(_imgIconCard01Action);
    
        let _imgIconCard00Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(35 / (60 * speed), -1, 50).easing(cc.easeSineInOut()),
                    cc.moveTo(85 / (60 * speed), 1, 52).easing(cc.easeSineIn())
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgIconCard00.setPosition(1, 52);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgIconCard00Action = _imgIconCard00Action.repeatForever();
        } else _imgIconCard00Action = cc.sequence(
            cc.delayTime(delay),
            _imgIconCard00Action.repeat(repeat)
        )
        
        this._imgIconCard00.runAction(_imgIconCard00Action);
    
        let _imgIconCard04Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(60 / (60 * speed), 77, 50).easing(cc.easeSineInOut()),
                    cc.moveTo(60 / (60 * speed), 79, 52).easing(cc.easeSineInOut())
                ),
                cc.sequence(
                    cc.rotateBy(60 / (60 * speed), -5, -5),
                    cc.rotateBy(60 / (60 * speed), 5, 5)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgIconCard04.setPosition(79, 52);
                this._imgIconCard04.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgIconCard04Action = _imgIconCard04Action.repeatForever();
        } else _imgIconCard04Action = cc.sequence(
            cc.delayTime(delay),
            _imgIconCard04Action.repeat(repeat)
        )
        
        this._imgIconCard04.runAction(_imgIconCard04Action);
    },

    resetCCSAnimIdle: function () {
        this._imgIconCard03.stopAllActions();
        this._imgIconCard03.setPosition(99, 101);
    
        this._imgIconCard02.stopAllActions();
        this._imgIconCard02.setPosition(64, 92);
    
        this._imgIconCard01.stopAllActions();
        this._imgIconCard01.setPosition(30, 75);
    
        this._imgIconCard00.stopAllActions();
        this._imgIconCard00.setPosition(1, 52);
    
        this._imgIconCard04.stopAllActions();
        this._imgIconCard04.setPosition(79, 52);
        this._imgIconCard04.setRotation(0);
    },

    playCCSAnimNoBackground: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimNoBackground();
    
    
    
    
    
    
    
    
    
    
    
    
    },

    resetCCSAnimNoBackground: function () {
        this._imgBackground.stopAllActions();
        this._imgBackground.setVisible(true);
    
        this._imageShadow.stopAllActions();
        this._imageShadow.setVisible(true);
    
        this._layoutIcon.stopAllActions();
        this._layoutIcon.setPosition(82.5, 76);
    
        this._imgBgrText.stopAllActions();
        this._imgBgrText.setVisible(true);
    
        this._imgText.stopAllActions();
        this._imgText.setVisible(false);
    
        this._txtText.stopAllActions();
        this._txtText.setVisible(true);
    },

    playCCSAnimWithBackground: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimWithBackground();
    
    
    
    
    
    
    
    
    
    
    
    
    },

    resetCCSAnimWithBackground: function () {
        this._imgBackground.stopAllActions();
        this._imgBackground.setVisible(true);
    
        this._imageShadow.stopAllActions();
        this._imageShadow.setVisible(false);
    
        this._layoutIcon.stopAllActions();
        this._layoutIcon.setPosition(82.5, 97);
    
        this._imgBgrText.stopAllActions();
        this._imgBgrText.setVisible(true);
    
        this._imgText.stopAllActions();
        this._imgText.setVisible(true);
    
        this._txtText.stopAllActions();
        this._txtText.setVisible(false);
    }
});

/**
 * Create PokerButtonWidget
 * @returns {_ccs.PokerButtonWidget}
 */
_ccs.PokerButtonWidget.create = function () {
    return new _ccs.PokerButtonWidget();
};
