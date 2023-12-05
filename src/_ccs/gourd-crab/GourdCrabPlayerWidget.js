/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.GourdCrabPlayerWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.GourdCrabPlayerWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _widgetProfile: null,
    /** @type {ccui.Layout} */
    _layoutClipping: null,
    /** @type {cc.Node} */
    _nodeAvatar: null,
    /** @type {Avatar} */
    _avatarNode: null,
    /** @type {ck.Text} */
    _txtPlayerName: null,
    /** @type {ccui.Layout} */
    _layoutInteract: null,
    /** @type {cc.Node} */
    _nodeInteract: null,
    /** @type {ccui.ImageView} */
    _imgCrown: null,
    /** @type {ck.Text} */
    _txtCoinWin: null,
    /** @type {ccui.ImageView} */
    _imgIconCoinWin: null,
    /** @type {ck.Text} */
    _txtGemWin: null,
    /** @type {ccui.ImageView} */
    _imgIconGemWin: null,


    /**
     * _ccs.GourdCrabPlayerWidget constructor
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

        ///// # _widgetProfile
        this._widgetProfile = new ccui.Layout();
        this._widgetProfile.setName("_widgetProfile");
        this.addChild(this._widgetProfile);
        this._widgetProfile.setCascadeOpacityEnabled(true);
        this._widgetProfile.setCascadeColorEnabled(true);
        this._widgetProfile.setAnchorPoint(cc.p(0.5, 0.5));
        let _widgetProfileLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._widgetProfile);
        this._widgetProfile.setTouchEnabled(true);
        this._widgetProfile.setUnifySizeEnabled(false);
        this._widgetProfile.ignoreContentAdaptWithSize(false);
        this._widgetProfile.setContentSize(cc.size(85, 85));

        ///// # _layoutClipping
        this._layoutClipping = new ccui.Layout();
        this._layoutClipping.setName("_layoutClipping");
        this._widgetProfile.addChild(this._layoutClipping);
        this._layoutClipping.setCascadeOpacityEnabled(true);
        this._layoutClipping.setCascadeColorEnabled(true);
        this._layoutClipping.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._layoutClipping, 0.5, 1);
        let _layoutClippingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutClipping);
        _layoutClippingLayoutComponent.setPercentWidthEnabled(true);
        _layoutClippingLayoutComponent.setPercentWidth(1);
        _layoutClippingLayoutComponent.setPercentHeightEnabled(true);
        _layoutClippingLayoutComponent.setPercentHeight(1.3671);
        this._layoutClipping.setTouchEnabled(false);
        this._layoutClipping.setUnifySizeEnabled(false);
        this._layoutClipping.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutClipping, 1, 1.3671);

        ///// # _nodeAvatar
        this._nodeAvatar = new cc.Node();
        this._nodeAvatar.setName("_nodeAvatar");
        this._layoutClipping.addChild(this._nodeAvatar);
        this._nodeAvatar.setCascadeOpacityEnabled(true);
        this._nodeAvatar.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeAvatar, 0.5, 0.6325);
        let _nodeAvatarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeAvatar);
        _nodeAvatarLayoutComponent.setPositionPercentXEnabled(true);
        _nodeAvatarLayoutComponent.setPositionPercentX(0.5);

        ///// # _avatarNode
        this._avatarNode = new Avatar(ck.AvatarType.CIRCLE);
        this._avatarNode.setName("_avatarNode");
        this._nodeAvatar.addChild(this._avatarNode);
        this._avatarNode.setCascadeOpacityEnabled(true);
        this._avatarNode.setCascadeColorEnabled(true);
        this._avatarNode.setAnchorPoint(cc.p(0.5, 0.5));
        let _avatarNodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._avatarNode);
        this._avatarNode.setWidth(85);

        ///// # _txtPlayerName
        this._txtPlayerName = new ck.Text();
        this._txtPlayerName.setName("_txtPlayerName");
        this._layoutClipping.addChild(this._txtPlayerName);
        this._txtPlayerName.setCascadeOpacityEnabled(true);
        this._txtPlayerName.setCascadeColorEnabled(true);
        this._txtPlayerName.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPlayerName, 0.5, 0.1512);
        this._txtPlayerName.setTextColor(cc.color(255, 203, 0, 255));
        let _txtPlayerNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPlayerName);
        _txtPlayerNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtPlayerNameLayoutComponent.setPositionPercentX(0.5);
        _txtPlayerNameLayoutComponent.setPercentWidthEnabled(true);
        _txtPlayerNameLayoutComponent.setPercentWidth(1);
        this._txtPlayerName.setTouchEnabled(false);
        this._txtPlayerName.setUnifySizeEnabled(false);
        this._txtPlayerName.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtPlayerName, 1);
        this._txtPlayerName.setContentSize(cc.size(this._txtPlayerName.width, 30));
        this._txtPlayerName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtPlayerName.setDefaultFontSize(25);
        this._txtPlayerName.setTextHorizontalAlignment(1);
        this._txtPlayerName.setTextVerticalAlignment(0);
        this._txtPlayerName.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutInteract
        this._layoutInteract = new ccui.Layout();
        this._layoutInteract.setName("_layoutInteract");
        this._widgetProfile.addChild(this._layoutInteract);
        this._layoutInteract.setCascadeOpacityEnabled(true);
        this._layoutInteract.setCascadeColorEnabled(true);
        let _layoutInteractLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInteract);
        _layoutInteractLayoutComponent.setPercentWidthEnabled(true);
        _layoutInteractLayoutComponent.setPercentWidth(1);
        _layoutInteractLayoutComponent.setPercentHeightEnabled(true);
        _layoutInteractLayoutComponent.setPercentHeight(1);
        this._layoutInteract.setTouchEnabled(false);
        this._layoutInteract.setUnifySizeEnabled(false);
        this._layoutInteract.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutInteract, 1, 1);

        ///// # _nodeInteract
        this._nodeInteract = new cc.Node();
        this._nodeInteract.setName("_nodeInteract");
        this._layoutInteract.addChild(this._nodeInteract);
        this._nodeInteract.setCascadeOpacityEnabled(true);
        this._nodeInteract.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeInteract, 0.5, 0.5);
        let _nodeInteractLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeInteract);
        _nodeInteractLayoutComponent.setPositionPercentXEnabled(true);
        _nodeInteractLayoutComponent.setPositionPercentX(0.5);
        _nodeInteractLayoutComponent.setPositionPercentYEnabled(true);
        _nodeInteractLayoutComponent.setPositionPercentY(0.5);

        ///// # _imgCrown
        this._imgCrown = new ccui.ImageView();
        this._imgCrown.setName("_imgCrown");
        this._widgetProfile.addChild(this._imgCrown);
        this._imgCrown.setCascadeOpacityEnabled(true);
        this._imgCrown.setCascadeColorEnabled(true);
        this._imgCrown.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCrown, 0.5, 1.1059);
        this._imgCrown.setVisible(false);
        let _imgCrownLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCrown);
        _imgCrownLayoutComponent.setPositionPercentXEnabled(true);
        _imgCrownLayoutComponent.setPositionPercentX(0.5);
        this._imgCrown.loadTexture("bingo/ui/Crown.png", 1);
        this._imgCrown.setUnifySizeEnabled(false);
        this._imgCrown.ignoreContentAdaptWithSize(false);
        this._imgCrown.setContentSize(cc.size(50, 38));
        this._imgCrown.setTouchEnabled(false);

        ///// # _txtCoinWin
        this._txtCoinWin = new ck.Text();
        this._txtCoinWin.setName("_txtCoinWin");
        this._widgetProfile.addChild(this._txtCoinWin);
        this._txtCoinWin.setCascadeOpacityEnabled(true);
        this._txtCoinWin.setCascadeColorEnabled(true);
        this._txtCoinWin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCoinWin, 0.4, 0.3529);
        this._txtCoinWin.setTextColor(cc.color(252, 206, 0, 255));
        let _txtCoinWinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCoinWin);
        _txtCoinWinLayoutComponent.setPositionPercentXEnabled(true);
        _txtCoinWinLayoutComponent.setPositionPercentX(0.4);
        this._txtCoinWin.setTouchEnabled(false);
        this._txtCoinWin.ignoreContentAdaptWithSize(true);
        this._txtCoinWin.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCoinWin.setDefaultFontSize(23);
        this._txtCoinWin.setTextHorizontalAlignment(0);
        this._txtCoinWin.setTextVerticalAlignment(0);
        this._txtCoinWin.enableOutline(cc.color(0, 0, 0, 255), 1);
        this._txtCoinWin.enableShadow(cc.color(0, 0, 0, 255), cc.size(2, -1), 0);

        ///// # _imgIconCoinWin
        this._imgIconCoinWin = new ccui.ImageView();
        this._imgIconCoinWin.setName("_imgIconCoinWin");
        this._txtCoinWin.addChild(this._imgIconCoinWin);
        this._imgIconCoinWin.setCascadeOpacityEnabled(true);
        this._imgIconCoinWin.setCascadeColorEnabled(true);
        this._imgIconCoinWin.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconCoinWin, 1, 0.5);
        let _imgIconCoinWinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconCoinWin);
        _imgIconCoinWinLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconCoinWinLayoutComponent.setPositionPercentX(1);
        _imgIconCoinWinLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconCoinWinLayoutComponent.setPositionPercentY(0.5);
        this._imgIconCoinWin.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIconCoinWin.setUnifySizeEnabled(false);
        this._imgIconCoinWin.ignoreContentAdaptWithSize(false);
        this._imgIconCoinWin.setContentSize(cc.size(24, 24));
        this._imgIconCoinWin.setTouchEnabled(false);

        ///// # _txtGemWin
        this._txtGemWin = new ck.Text();
        this._txtGemWin.setName("_txtGemWin");
        this._widgetProfile.addChild(this._txtGemWin);
        this._txtGemWin.setCascadeOpacityEnabled(true);
        this._txtGemWin.setCascadeColorEnabled(true);
        this._txtGemWin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGemWin, 0.4, 0.6353);
        this._txtGemWin.setTextColor(cc.color(243, 192, 255, 255));
        let _txtGemWinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGemWin);
        _txtGemWinLayoutComponent.setPositionPercentXEnabled(true);
        _txtGemWinLayoutComponent.setPositionPercentX(0.4);
        this._txtGemWin.setTouchEnabled(false);
        this._txtGemWin.ignoreContentAdaptWithSize(true);
        this._txtGemWin.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGemWin.setDefaultFontSize(23);
        this._txtGemWin.setTextHorizontalAlignment(0);
        this._txtGemWin.setTextVerticalAlignment(0);
        this._txtGemWin.enableOutline(cc.color(0, 0, 0, 255), 1);
        this._txtGemWin.enableShadow(cc.color(0, 0, 0, 255), cc.size(2, -1), 0);

        ///// # _imgIconGemWin
        this._imgIconGemWin = new ccui.ImageView();
        this._imgIconGemWin.setName("_imgIconGemWin");
        this._txtGemWin.addChild(this._imgIconGemWin);
        this._imgIconGemWin.setCascadeOpacityEnabled(true);
        this._imgIconGemWin.setCascadeColorEnabled(true);
        this._imgIconGemWin.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconGemWin, 1, 0.5);
        let _imgIconGemWinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconGemWin);
        _imgIconGemWinLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconGemWinLayoutComponent.setPositionPercentX(1);
        _imgIconGemWinLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconGemWinLayoutComponent.setPositionPercentY(0.5);
        this._imgIconGemWin.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgIconGemWin.setUnifySizeEnabled(false);
        this._imgIconGemWin.ignoreContentAdaptWithSize(false);
        this._imgIconGemWin.setContentSize(cc.size(24, 24));
        this._imgIconGemWin.setTouchEnabled(false);

    },


    playCCSAnimPlayerJoin: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimPlayerJoin();
    
        let _nodeAvatarAction = cc.sequence(
            cc.spawn(
                cc.moveTo(30 / (60 * speed), 42.5, 73.5).easing(cc.easeQuadraticActionOut()),
                cc.fadeTo(30 / (60 * speed), 255).easing(cc.easeQuadraticActionOut())
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._nodeAvatar.setPosition(-42.5, 73.5);
                this._nodeAvatar.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _nodeAvatarAction = _nodeAvatarAction.repeatForever();
        } else _nodeAvatarAction = cc.sequence(
            cc.delayTime(delay),
            _nodeAvatarAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._nodeAvatar.runAction(_nodeAvatarAction);
    
        let _txtPlayerNameAction = cc.sequence(
            cc.spawn(
                cc.moveTo(30 / (60 * speed), 42.5, 17.57).easing(cc.easeQuarticActionOut()),
                cc.fadeTo(30 / (60 * speed), 255).easing(cc.easeQuadraticActionOut())
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._txtPlayerName.setPosition(-42.5, 17.57);
                this._txtPlayerName.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _txtPlayerNameAction = _txtPlayerNameAction.repeatForever();
        } else _txtPlayerNameAction = cc.sequence(
            cc.delayTime(delay),
            _txtPlayerNameAction.repeat(repeat)
        )
        
        this._txtPlayerName.runAction(_txtPlayerNameAction);
    },

    resetCCSAnimPlayerJoin: function () {
        this._nodeAvatar.stopAllActions();
        this._nodeAvatar.setPosition(-42.5, 73.5);
        this._nodeAvatar.setOpacity(0);
    
        this._txtPlayerName.stopAllActions();
        this._txtPlayerName.setPosition(-42.5, 17.57);
        this._txtPlayerName.setOpacity(0);
    },

    playCCSAnimPlayerLeave: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimPlayerLeave();
    
        let _nodeAvatarAction = cc.sequence(
            cc.spawn(
                cc.moveTo(30 / (60 * speed), -42.5, 73.5).easing(cc.easeQuadraticActionIn()),
                cc.fadeTo(30 / (60 * speed), 0).easing(cc.easeQuadraticActionIn())
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._nodeAvatar.setPosition(42.5, 73.5);
                this._nodeAvatar.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _nodeAvatarAction = _nodeAvatarAction.repeatForever();
        } else _nodeAvatarAction = cc.sequence(
            cc.delayTime(delay),
            _nodeAvatarAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._nodeAvatar.runAction(_nodeAvatarAction);
    
        let _txtPlayerNameAction = cc.sequence(
            cc.spawn(
                cc.moveTo(30 / (60 * speed), -42.5, 17.57).easing(cc.easeQuarticActionIn()),
                cc.fadeTo(30 / (60 * speed), 0).easing(cc.easeQuadraticActionIn())
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._txtPlayerName.setPosition(42.5, 17.57);
                this._txtPlayerName.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _txtPlayerNameAction = _txtPlayerNameAction.repeatForever();
        } else _txtPlayerNameAction = cc.sequence(
            cc.delayTime(delay),
            _txtPlayerNameAction.repeat(repeat)
        )
        
        this._txtPlayerName.runAction(_txtPlayerNameAction);
    },

    resetCCSAnimPlayerLeave: function () {
        this._nodeAvatar.stopAllActions();
        this._nodeAvatar.setPosition(42.5, 73.5);
        this._nodeAvatar.setOpacity(255);
    
        this._txtPlayerName.stopAllActions();
        this._txtPlayerName.setPosition(42.5, 17.57);
        this._txtPlayerName.setOpacity(255);
    },

    playCCSAnimReset: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimReset();
    
    
    
    
    },

    resetCCSAnimReset: function () {
        this._nodeAvatar.stopAllActions();
        this._nodeAvatar.setPosition(42.5, 73.5);
        this._nodeAvatar.setOpacity(255);
    
        this._txtPlayerName.stopAllActions();
        this._txtPlayerName.setPosition(42.5, 17.57);
        this._txtPlayerName.setOpacity(255);
    }
});

/**
 * Create GourdCrabPlayerWidget
 * @returns {_ccs.GourdCrabPlayerWidget}
 */
_ccs.GourdCrabPlayerWidget.create = function () {
    return new _ccs.GourdCrabPlayerWidget();
};
