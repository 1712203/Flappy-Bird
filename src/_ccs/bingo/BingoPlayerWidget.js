/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.BingoPlayerWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.BingoPlayerWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _widgetProfile: null,
    /** @type {ccui.Layout} */
    _layoutBackground: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {cc.Node} */
    _nodeAvatar: null,
    /** @type {ccui.ImageView} */
    _imgAvatarBackground: null,
    /** @type {ccui.ImageView} */
    _imgAvatarFrame: null,
    /** @type {Avatar} */
    _avatarNode: null,
    /** @type {ccui.Layout} */
    _layoutInfo: null,
    /** @type {ck.Text} */
    _txtLevel: null,
    /** @type {ck.Text} */
    _txtWaiting: null,
    /** @type {BingoTicketWidget} */
    _ticketWidget: null,
    /** @type {ccui.Layout} */
    _layoutEffect: null,
    /** @type {BingoEffectWinWidget} */
    _effectWinWidget: null,
    /** @type {BingoEffectLoseWidget} */
    _effectLoseWidget: null,
    /** @type {ccui.Layout} */
    _layoutInteract: null,
    /** @type {cc.Node} */
    _nodeInteract: null,
    /** @type {ccui.ImageView} */
    _imgCrown: null,


    /**
     * _ccs.BingoPlayerWidget constructor
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
        this._widgetProfile.setContentSize(cc.size(153, 115));

        ///// # _layoutBackground
        this._layoutBackground = new ccui.Layout();
        this._layoutBackground.setName("_layoutBackground");
        this._widgetProfile.addChild(this._layoutBackground);
        this._layoutBackground.setCascadeOpacityEnabled(true);
        this._layoutBackground.setCascadeColorEnabled(true);
        let _layoutBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBackground);
        _layoutBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentWidth(1);
        _layoutBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _layoutBackgroundLayoutComponent.setPercentHeight(1);
        this._layoutBackground.setTouchEnabled(false);
        this._layoutBackground.setUnifySizeEnabled(false);
        this._layoutBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutBackground, 1, 1);

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._layoutBackground.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.5);
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(0.5);
        this._imgBackground.loadTexture("bingo/ui/PlayerContainerBackground_02.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setScale9Enabled(true);
        this._imgBackground.setCapInsets(cc.rect(21, 21, 111, 73));
        this._imgBackground.setContentSize(cc.size(153, 115));
        this._imgBackground.setTouchEnabled(false);

        ///// # _nodeAvatar
        this._nodeAvatar = new cc.Node();
        this._nodeAvatar.setName("_nodeAvatar");
        this._widgetProfile.addChild(this._nodeAvatar);
        this._nodeAvatar.setCascadeOpacityEnabled(true);
        this._nodeAvatar.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeAvatar, 0.1908, 0.3);
        let _nodeAvatarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeAvatar);
        _nodeAvatarLayoutComponent.setPositionPercentXEnabled(true);
        _nodeAvatarLayoutComponent.setPositionPercentX(0.1908);
        _nodeAvatarLayoutComponent.setPositionPercentYEnabled(true);
        _nodeAvatarLayoutComponent.setPositionPercentY(0.3);

        ///// # _imgAvatarBackground
        this._imgAvatarBackground = new ccui.ImageView();
        this._imgAvatarBackground.setName("_imgAvatarBackground");
        this._nodeAvatar.addChild(this._imgAvatarBackground);
        this._imgAvatarBackground.setCascadeOpacityEnabled(true);
        this._imgAvatarBackground.setCascadeColorEnabled(true);
        this._imgAvatarBackground.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgAvatarBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgAvatarBackground);
        _imgAvatarBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgAvatarBackgroundLayoutComponent.setPositionPercentX(0);
        _imgAvatarBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgAvatarBackgroundLayoutComponent.setPositionPercentY(0);
        _imgAvatarBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgAvatarBackgroundLayoutComponent.setPercentWidth(0);
        _imgAvatarBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgAvatarBackgroundLayoutComponent.setPercentHeight(0);
        this._imgAvatarBackground.loadTexture("bingo/ui/AvatarBackground.png", 1);
        this._imgAvatarBackground.setUnifySizeEnabled(false);
        this._imgAvatarBackground.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgAvatarBackground, 0, 0);
        this._imgAvatarBackground.setTouchEnabled(false);

        ///// # _imgAvatarFrame
        this._imgAvatarFrame = new ccui.ImageView();
        this._imgAvatarFrame.setName("_imgAvatarFrame");
        this._nodeAvatar.addChild(this._imgAvatarFrame);
        this._imgAvatarFrame.setCascadeOpacityEnabled(true);
        this._imgAvatarFrame.setCascadeColorEnabled(true);
        this._imgAvatarFrame.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgAvatarFrameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgAvatarFrame);
        _imgAvatarFrameLayoutComponent.setPositionPercentXEnabled(true);
        _imgAvatarFrameLayoutComponent.setPositionPercentX(0);
        _imgAvatarFrameLayoutComponent.setPositionPercentYEnabled(true);
        _imgAvatarFrameLayoutComponent.setPositionPercentY(0);
        _imgAvatarFrameLayoutComponent.setPercentWidthEnabled(true);
        _imgAvatarFrameLayoutComponent.setPercentWidth(0);
        _imgAvatarFrameLayoutComponent.setPercentHeightEnabled(true);
        _imgAvatarFrameLayoutComponent.setPercentHeight(0);
        this._imgAvatarFrame.loadTexture("bingo/ui/AvatarFrame.png", 1);
        this._imgAvatarFrame.setUnifySizeEnabled(false);
        this._imgAvatarFrame.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgAvatarFrame, 0, 0);
        this._imgAvatarFrame.setTouchEnabled(false);

        ///// # _avatarNode
        this._avatarNode = new Avatar(ck.AvatarType.CIRCLE);
        this._avatarNode.setName("_avatarNode");
        this._nodeAvatar.addChild(this._avatarNode);
        this._avatarNode.setCascadeOpacityEnabled(true);
        this._avatarNode.setCascadeColorEnabled(true);
        this._avatarNode.setAnchorPoint(cc.p(0.5, 0.5));
        let _avatarNodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._avatarNode);
        this._avatarNode.setWidth(46);

        ///// # _layoutInfo
        this._layoutInfo = new ccui.Layout();
        this._layoutInfo.setName("_layoutInfo");
        this._widgetProfile.addChild(this._layoutInfo);
        this._layoutInfo.setCascadeOpacityEnabled(true);
        this._layoutInfo.setCascadeColorEnabled(true);
        this._layoutInfo.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutInfo, 0.6489, 0.3);
        let _layoutInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutInfo);
        _layoutInfoLayoutComponent.setPositionPercentXEnabled(true);
        _layoutInfoLayoutComponent.setPositionPercentX(0.6489);
        _layoutInfoLayoutComponent.setPositionPercentYEnabled(true);
        _layoutInfoLayoutComponent.setPositionPercentY(0.3);
        this._layoutInfo.setTouchEnabled(false);
        this._layoutInfo.setUnifySizeEnabled(false);
        this._layoutInfo.ignoreContentAdaptWithSize(false);
        this._layoutInfo.setContentSize(cc.size(82.06, 53.2425));

        ///// # _txtLevel
        this._txtLevel = new ck.Text();
        this._txtLevel.setName("_txtLevel");
        this._layoutInfo.addChild(this._txtLevel);
        this._txtLevel.setCascadeOpacityEnabled(true);
        this._txtLevel.setCascadeColorEnabled(true);
        this._txtLevel.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._txtLevel, 0, 1);
        let _txtLevelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLevel);
        _txtLevelLayoutComponent.setPositionPercentXEnabled(true);
        _txtLevelLayoutComponent.setPositionPercentX(0);
        _txtLevelLayoutComponent.setPositionPercentYEnabled(true);
        _txtLevelLayoutComponent.setPositionPercentY(1);
        _txtLevelLayoutComponent.setPercentWidthEnabled(true);
        _txtLevelLayoutComponent.setPercentWidth(1);
        this._txtLevel.setTouchEnabled(false);
        this._txtLevel.setUnifySizeEnabled(false);
        this._txtLevel.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtLevel, 1);
        this._txtLevel.setContentSize(cc.size(this._txtLevel.width, 20));
        this._txtLevel.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLevel.setDefaultFontSize(18);
        this._txtLevel.setTextHorizontalAlignment(1);
        this._txtLevel.setTextVerticalAlignment(0);
        this._txtLevel.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _txtWaiting
        this._txtWaiting = new ck.Text();
        this._txtWaiting.setName("_txtWaiting");
        this._layoutInfo.addChild(this._txtWaiting);
        this._txtWaiting.setCascadeOpacityEnabled(true);
        this._txtWaiting.setCascadeColorEnabled(true);
        this._txtWaiting.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtWaiting, 0, 0.3);
        this._txtWaiting.setTextColor(cc.color(125, 169, 236, 255));
        let _txtWaitingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtWaiting);
        _txtWaitingLayoutComponent.setPositionPercentXEnabled(true);
        _txtWaitingLayoutComponent.setPositionPercentX(0);
        _txtWaitingLayoutComponent.setPositionPercentYEnabled(true);
        _txtWaitingLayoutComponent.setPositionPercentY(0.3);
        _txtWaitingLayoutComponent.setPercentWidthEnabled(true);
        _txtWaitingLayoutComponent.setPercentWidth(1);
        this._txtWaiting.setTouchEnabled(false);
        this._txtWaiting.setUnifySizeEnabled(false);
        this._txtWaiting.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtWaiting, 1);
        this._txtWaiting.setContentSize(cc.size(this._txtWaiting.width, 19));
        this._txtWaiting.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtWaiting.setDefaultFontSize(17);
        this._txtWaiting.setString(gm.localize.getText("TXT_WATING"));
        this._txtWaiting.setTextHorizontalAlignment(1);
        this._txtWaiting.setTextVerticalAlignment(0);

        ///// # _ticketWidget
        this._ticketWidget = new BingoTicketWidget();
        this._ticketWidget.setName("_ticketWidget");
        this._widgetProfile.addChild(this._ticketWidget);
        this._ticketWidget.setCascadeOpacityEnabled(true);
        this._ticketWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._ticketWidget, 0.5, 0.75);
        this._ticketWidget.setScale(0.47, 0.47);
        let _ticketWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._ticketWidget);
        _ticketWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _ticketWidgetLayoutComponent.setPositionPercentX(0.5);
        _ticketWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _ticketWidgetLayoutComponent.setPositionPercentY(0.75);

        ///// # _layoutEffect
        this._layoutEffect = new ccui.Layout();
        this._layoutEffect.setName("_layoutEffect");
        this._widgetProfile.addChild(this._layoutEffect);
        this._layoutEffect.setCascadeOpacityEnabled(true);
        this._layoutEffect.setCascadeColorEnabled(true);
        let _layoutEffectLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutEffect);
        _layoutEffectLayoutComponent.setPercentWidthEnabled(true);
        _layoutEffectLayoutComponent.setPercentWidth(1);
        _layoutEffectLayoutComponent.setPercentHeightEnabled(true);
        _layoutEffectLayoutComponent.setPercentHeight(1);
        this._layoutEffect.setTouchEnabled(false);
        this._layoutEffect.setUnifySizeEnabled(false);
        this._layoutEffect.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutEffect, 1, 1);

        ///// # _effectWinWidget
        this._effectWinWidget = new BingoEffectWinWidget();
        this._effectWinWidget.setName("_effectWinWidget");
        this._layoutEffect.addChild(this._effectWinWidget);
        this._effectWinWidget.setCascadeOpacityEnabled(true);
        this._effectWinWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._effectWinWidget, 0.5, 0.5);
        this._effectWinWidget.setVisible(false);
        this._effectWinWidget.setScale(0.3, 0.3);
        let _effectWinWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._effectWinWidget);
        _effectWinWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _effectWinWidgetLayoutComponent.setPositionPercentX(0.5);
        _effectWinWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _effectWinWidgetLayoutComponent.setPositionPercentY(0.5);

        ///// # _effectLoseWidget
        this._effectLoseWidget = new BingoEffectLoseWidget();
        this._effectLoseWidget.setName("_effectLoseWidget");
        this._layoutEffect.addChild(this._effectLoseWidget);
        this._effectLoseWidget.setCascadeOpacityEnabled(true);
        this._effectLoseWidget.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._effectLoseWidget, 0.5, 0.5);
        this._effectLoseWidget.setVisible(false);
        this._effectLoseWidget.setScale(0.3, 0.3);
        let _effectLoseWidgetLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._effectLoseWidget);
        _effectLoseWidgetLayoutComponent.setPositionPercentXEnabled(true);
        _effectLoseWidgetLayoutComponent.setPositionPercentX(0.5);
        _effectLoseWidgetLayoutComponent.setPositionPercentYEnabled(true);
        _effectLoseWidgetLayoutComponent.setPositionPercentY(0.5);

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
        ck.UIUtils.setPositionPercent(this._nodeInteract, 0.1908, 0.3);
        let _nodeInteractLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeInteract);
        _nodeInteractLayoutComponent.setPositionPercentXEnabled(true);
        _nodeInteractLayoutComponent.setPositionPercentX(0.1908);
        _nodeInteractLayoutComponent.setPositionPercentYEnabled(true);
        _nodeInteractLayoutComponent.setPositionPercentY(0.3);

        ///// # _imgCrown
        this._imgCrown = new ccui.ImageView();
        this._imgCrown.setName("_imgCrown");
        this._widgetProfile.addChild(this._imgCrown);
        this._imgCrown.setCascadeOpacityEnabled(true);
        this._imgCrown.setCascadeColorEnabled(true);
        this._imgCrown.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCrown, 0.1908, 0.5391);
        this._imgCrown.setVisible(false);
        let _imgCrownLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCrown);
        _imgCrownLayoutComponent.setPositionPercentXEnabled(true);
        _imgCrownLayoutComponent.setPositionPercentX(0.1908);
        this._imgCrown.loadTexture("bingo/ui/Crown.png", 1);
        this._imgCrown.setUnifySizeEnabled(false);
        this._imgCrown.ignoreContentAdaptWithSize(false);
        this._imgCrown.setContentSize(cc.size(28, 21));
        this._imgCrown.setTouchEnabled(false);

    },


    playCCSAnimPlayerLeft: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimPlayerLeft();
    
    
    
    
    
    
    
    
    },

    resetCCSAnimPlayerLeft: function () {
        this._nodeAvatar.stopAllActions();
        this._nodeAvatar.setPosition(29.1924, 34.5);
    
        this._layoutInfo.stopAllActions();
        this._layoutInfo.setPosition(99.28, 34.5);
    
        this._nodeInteract.stopAllActions();
        this._nodeInteract.setPosition(29.1924, 34.5);
        this._nodeInteract.setScale(1, 1);
        this._nodeInteract.setRotation(0);
    
        this._imgCrown.stopAllActions();
        this._imgCrown.setPosition(29.1924, 62);
        this._imgCrown.setScale(1, 1);
        this._imgCrown.setRotation(0);
    },

    playCCSAnimPlayerRight: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimPlayerRight();
    
    
    
    
    
    
    
    
    },

    resetCCSAnimPlayerRight: function () {
        this._nodeAvatar.stopAllActions();
        this._nodeAvatar.setPosition(116.8002, 34.5);
    
        this._layoutInfo.stopAllActions();
        this._layoutInfo.setPosition(46.72, 34.5);
    
        this._nodeInteract.stopAllActions();
        this._nodeInteract.setPosition(116.8002, 34.5);
        this._nodeInteract.setScale(1, 1);
        this._nodeInteract.setRotation(0);
    
        this._imgCrown.stopAllActions();
        this._imgCrown.setPosition(116.8002, 62);
        this._imgCrown.setScale(1, 1);
        this._imgCrown.setRotation(0);
    }
});

/**
 * Create BingoPlayerWidget
 * @returns {_ccs.BingoPlayerWidget}
 */
_ccs.BingoPlayerWidget.create = function () {
    return new _ccs.BingoPlayerWidget();
};
