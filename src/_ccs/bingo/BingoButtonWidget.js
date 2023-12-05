/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.BingoButtonWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.BingoButtonWidget = ccui.Widget.extend({

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
     * _ccs.BingoButtonWidget constructor
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

        ///// # _imageShadow
        this._imageShadow = new ccui.ImageView();
        this._imageShadow.setName("_imageShadow");
        this._root.addChild(this._imageShadow);
        this._imageShadow.setCascadeOpacityEnabled(true);
        this._imageShadow.setCascadeColorEnabled(true);
        this._imageShadow.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imageShadow, 0.52, 0.5);
        this._imageShadow.setScale(1.2, 1.2);
        this._imageShadow.setOpacity(247);
        this._imageShadow.setColor(cc.color(189, 75, 153, 255));
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
        ck.UIUtils.setPositionPercent(this._layoutIcon, 0.5, 0.4909);
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
        this._imgIcon.setScale(0.78, 0.78);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        this._imgIcon.loadTexture("home/IconBingo.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(151, 163));
        this._imgIcon.setTouchEnabled(false);

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
        ck.UIUtils.setPositionPercent(this._imgText, 0.5, 0.2485);
        this._imgText.setVisible(false);
        this._imgText.setScale(0.9, 0.9);
        let _imgTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgText);
        _imgTextLayoutComponent.setPositionPercentXEnabled(true);
        _imgTextLayoutComponent.setPositionPercentX(0.5);
        this._imgText.loadTexture("texts/home/MiniGameBingo.png", 1);
        this._imgText.setTouchEnabled(false);

        ///// # _txtText
        this._txtText = new ck.Text();
        this._txtText.setName("_txtText");
        this._root.addChild(this._txtText);
        this._txtText.setCascadeOpacityEnabled(true);
        this._txtText.setCascadeColorEnabled(true);
        this._txtText.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtText, 0.5, 0.2);
        this._txtText.setTextColor(cc.color(252, 151, 234, 255));
        let _txtTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtText);
        _txtTextLayoutComponent.setPositionPercentXEnabled(true);
        _txtTextLayoutComponent.setPositionPercentX(0.5);
        this._txtText.setTouchEnabled(false);
        this._txtText.ignoreContentAdaptWithSize(true);
        this._txtText.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtText.setDefaultFontSize(30);
        this._txtText.setString("RAPID BINGO");
        this._txtText.setTextHorizontalAlignment(0);
        this._txtText.setTextVerticalAlignment(0);
        this._txtText.enableOutline(cc.color(73, 29, 3, 255), 2);

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
        ck.UIUtils.setPositionPercent(this._txtUnlock, 0.5, 0.5);
        let _txtUnlockLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtUnlock);
        _txtUnlockLayoutComponent.setPositionPercentXEnabled(true);
        _txtUnlockLayoutComponent.setPositionPercentX(0.5);
        _txtUnlockLayoutComponent.setPositionPercentYEnabled(true);
        _txtUnlockLayoutComponent.setPositionPercentY(0.5);
        this._txtUnlock.setTouchEnabled(false);
        this._txtUnlock.ignoreContentAdaptWithSize(true);
        this._txtUnlock.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtUnlock.setDefaultFontSize(30);
        this._txtUnlock.setString("Unlock at");
        this._txtUnlock.setTextHorizontalAlignment(1);
        this._txtUnlock.setTextVerticalAlignment(1);
        this._txtUnlock.enableOutline(cc.color(117, 83, 0, 255), 2);
        this._txtUnlock.enableShadow(cc.color(59, 42, 0, 255), cc.size(0, -2), 0);

    },


    playCCSAnimIdle: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimIdle();
    
        let _imgIconAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(60 / (60 * speed), 62.5, 67.5),
                    cc.moveTo(60 / (60 * speed), 62.5, 62.5)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgIcon.setPosition(62.5, 62.5);
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
        this._imgIcon.setPosition(62.5, 62.5);
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
        this._layoutIcon.setPosition(82.5, 81);
    
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
        this._layoutIcon.setPosition(82.5, 108);
    
        this._imgBgrText.stopAllActions();
        this._imgBgrText.setVisible(true);
    
        this._imgText.stopAllActions();
        this._imgText.setVisible(true);
    
        this._txtText.stopAllActions();
        this._txtText.setVisible(false);
    }
});

/**
 * Create BingoButtonWidget
 * @returns {_ccs.BingoButtonWidget}
 */
_ccs.BingoButtonWidget.create = function () {
    return new _ccs.BingoButtonWidget();
};
