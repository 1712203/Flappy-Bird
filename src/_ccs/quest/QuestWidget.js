/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.QuestWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.QuestWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBgrDoing: null,
    /** @type {cc.Node} */
    _nodeImgBgrFinished: null,
    /** @type {ccui.Layout} */
    _layoutIcon: null,
    /** @type {ccui.ImageView} */
    _imgIconBgr: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtProgress: null,
    /** @type {ck.Text} */
    _txtDescription: null,
    /** @type {ck.GridViewHorizontal} */
    _gridViewRewards: null,
    /** @type {ccui.Layout} */
    _layoutClaiming: null,
    /** @type {ccui.ImageView} */
    _imgGiftBox: null,


    /**
     * _ccs.QuestWidget constructor
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
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(480, 122));

        ///// # _imgBgrDoing
        this._imgBgrDoing = new ccui.ImageView();
        this._imgBgrDoing.setName("_imgBgrDoing");
        this._layoutRoot.addChild(this._imgBgrDoing);
        this._imgBgrDoing.setCascadeOpacityEnabled(true);
        this._imgBgrDoing.setCascadeColorEnabled(true);
        this._imgBgrDoing.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgrDoing, 0.5, 0.5);
        this._imgBgrDoing.setColor(cc.color(243, 243, 70, 255));
        let _imgBgrDoingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrDoing);
        _imgBgrDoingLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrDoingLayoutComponent.setPositionPercentX(0.5);
        _imgBgrDoingLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrDoingLayoutComponent.setPositionPercentY(0.5);
        _imgBgrDoingLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrDoingLayoutComponent.setPercentWidth(1);
        _imgBgrDoingLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrDoingLayoutComponent.setPercentHeight(1);
        this._imgBgrDoing.loadTexture("basics/other/BoardBlue.png", 1);
        this._imgBgrDoing.setUnifySizeEnabled(false);
        this._imgBgrDoing.ignoreContentAdaptWithSize(false);
        this._imgBgrDoing.setScale9Enabled(true);
        this._imgBgrDoing.setCapInsets(cc.rect(18, 44, 1, 57));
        ck.UIUtils.setSizePercent(this._imgBgrDoing, 1, 1);
        this._imgBgrDoing.setTouchEnabled(false);

        ///// # _nodeImgBgrFinished
        this._nodeImgBgrFinished = new cc.Node();
        this._nodeImgBgrFinished.setName("_nodeImgBgrFinished");
        this._layoutRoot.addChild(this._nodeImgBgrFinished);
        this._nodeImgBgrFinished.setCascadeOpacityEnabled(true);
        this._nodeImgBgrFinished.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeImgBgrFinished, 0.5, 0.5);
        let _nodeImgBgrFinishedLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeImgBgrFinished);
        _nodeImgBgrFinishedLayoutComponent.setPositionPercentXEnabled(true);
        _nodeImgBgrFinishedLayoutComponent.setPositionPercentX(0.5);
        _nodeImgBgrFinishedLayoutComponent.setPositionPercentYEnabled(true);
        _nodeImgBgrFinishedLayoutComponent.setPositionPercentY(0.5);

        ///// # _layoutIcon
        this._layoutIcon = new ccui.Layout();
        this._layoutIcon.setName("_layoutIcon");
        this._layoutRoot.addChild(this._layoutIcon);
        this._layoutIcon.setCascadeOpacityEnabled(true);
        this._layoutIcon.setCascadeColorEnabled(true);
        this._layoutIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutIcon, 0.1115, 0.5932);
        let _layoutIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutIcon);
        _layoutIconLayoutComponent.setPositionPercentXEnabled(true);
        _layoutIconLayoutComponent.setPositionPercentX(0.1115);
        _layoutIconLayoutComponent.setPositionPercentYEnabled(true);
        _layoutIconLayoutComponent.setPositionPercentY(0.5932);
        this._layoutIcon.setTouchEnabled(true);
        this._layoutIcon.setUnifySizeEnabled(false);
        this._layoutIcon.ignoreContentAdaptWithSize(false);
        this._layoutIcon.setContentSize(cc.size(84.812, 84.81));

        ///// # _imgIconBgr
        this._imgIconBgr = new ccui.ImageView();
        this._imgIconBgr.setName("_imgIconBgr");
        this._layoutIcon.addChild(this._imgIconBgr);
        this._imgIconBgr.setCascadeOpacityEnabled(true);
        this._imgIconBgr.setCascadeColorEnabled(true);
        this._imgIconBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconBgr, 0.5, 0.5);
        this._imgIconBgr.setColor(cc.color(149, 123, 105, 255));
        let _imgIconBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconBgr);
        _imgIconBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconBgrLayoutComponent.setPositionPercentX(0.5);
        _imgIconBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconBgrLayoutComponent.setPositionPercentY(0.5);
        _imgIconBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgIconBgrLayoutComponent.setPercentWidth(1);
        _imgIconBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgIconBgrLayoutComponent.setPercentHeight(1);
        this._imgIconBgr.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgIconBgr.setUnifySizeEnabled(false);
        this._imgIconBgr.ignoreContentAdaptWithSize(false);
        this._imgIconBgr.setScale9Enabled(true);
        this._imgIconBgr.setCapInsets(cc.rect(26, 29, 9, 6));
        ck.UIUtils.setSizePercent(this._imgIconBgr, 1, 1);
        this._imgIconBgr.setTouchEnabled(false);

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
        _imgIconLayoutComponent.setPercentWidthEnabled(true);
        _imgIconLayoutComponent.setPercentWidth(0.9);
        _imgIconLayoutComponent.setPercentHeightEnabled(true);
        _imgIconLayoutComponent.setPercentHeight(0.9);
        this._imgIcon.loadTexture("icons/color/quests/Card10D.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgIcon, 0.9, 0.9);
        this._imgIcon.setTouchEnabled(false);

        ///// # _txtProgress
        this._txtProgress = new ck.Text();
        this._txtProgress.setName("_txtProgress");
        this._layoutIcon.addChild(this._txtProgress);
        this._txtProgress.setCascadeOpacityEnabled(true);
        this._txtProgress.setCascadeColorEnabled(true);
        this._txtProgress.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtProgress, 0.5, -0.1533);
        this._txtProgress.setTextColor(cc.color(143, 54, 78, 255));
        let _txtProgressLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtProgress);
        _txtProgressLayoutComponent.setPositionPercentXEnabled(true);
        _txtProgressLayoutComponent.setPositionPercentX(0.5);
        _txtProgressLayoutComponent.setPositionPercentYEnabled(true);
        _txtProgressLayoutComponent.setPositionPercentY(-0.1533);
        this._txtProgress.setTouchEnabled(false);
        this._txtProgress.ignoreContentAdaptWithSize(true);
        this._txtProgress.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtProgress.setDefaultFontSize(23);
        this._txtProgress.setTextHorizontalAlignment(1);
        this._txtProgress.setTextVerticalAlignment(1);

        ///// # _txtDescription
        this._txtDescription = new ck.Text();
        this._txtDescription.setName("_txtDescription");
        this._layoutRoot.addChild(this._txtDescription);
        this._txtDescription.setCascadeOpacityEnabled(true);
        this._txtDescription.setCascadeColorEnabled(true);
        this._txtDescription.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDescription, 0.2206, 0.5);
        this._txtDescription.setTextColor(cc.color(87, 60, 38, 255));
        let _txtDescriptionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDescription);
        _txtDescriptionLayoutComponent.setPositionPercentXEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentX(0.2206);
        _txtDescriptionLayoutComponent.setPositionPercentYEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentY(0.5);
        this._txtDescription.setTouchEnabled(false);
        this._txtDescription.setUnifySizeEnabled(false);
        this._txtDescription.ignoreContentAdaptWithSize(false);
        this._txtDescription.setContentSize(cc.size(243.6114, 113.2436));
        this._txtDescription.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDescription.setDefaultFontSize(25);
        this._txtDescription.setTextHorizontalAlignment(0);
        this._txtDescription.setTextVerticalAlignment(1);

        ///// # _gridViewRewards
        this._gridViewRewards = new ck.GridViewHorizontal();
        this._gridViewRewards.setName("_gridViewRewards");
        this._layoutRoot.addChild(this._gridViewRewards);
        this._gridViewRewards.setCascadeOpacityEnabled(true);
        this._gridViewRewards.setCascadeColorEnabled(true);
        this._gridViewRewards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridViewRewards, 0.8937, 0.5);
        let _gridViewRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewRewards);
        _gridViewRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _gridViewRewardsLayoutComponent.setPositionPercentX(0.8937);
        _gridViewRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _gridViewRewardsLayoutComponent.setPositionPercentY(0.5);
        _gridViewRewardsLayoutComponent.setPercentHeightEnabled(true);
        _gridViewRewardsLayoutComponent.setPercentHeight(1);

        ///// # _layoutClaiming
        this._layoutClaiming = new ccui.Layout();
        this._layoutClaiming.setName("_layoutClaiming");
        this._layoutRoot.addChild(this._layoutClaiming);
        this._layoutClaiming.setCascadeOpacityEnabled(true);
        this._layoutClaiming.setCascadeColorEnabled(true);
        this._layoutClaiming.setVisible(false);
        let _layoutClaimingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutClaiming);
        _layoutClaimingLayoutComponent.setPercentWidthEnabled(true);
        _layoutClaimingLayoutComponent.setPercentWidth(1);
        _layoutClaimingLayoutComponent.setPercentHeightEnabled(true);
        _layoutClaimingLayoutComponent.setPercentHeight(1);
        this._layoutClaiming.setTouchEnabled(true);
        this._layoutClaiming.setUnifySizeEnabled(false);
        this._layoutClaiming.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutClaiming, 1, 1);
        this._layoutClaiming.setBackGroundColorType(1);
        this._layoutClaiming.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutClaiming.setBackGroundColorOpacity(127);

        ///// # _imgGiftBox
        this._imgGiftBox = new ccui.ImageView();
        this._imgGiftBox.setName("_imgGiftBox");
        this._layoutRoot.addChild(this._imgGiftBox);
        this._imgGiftBox.setCascadeOpacityEnabled(true);
        this._imgGiftBox.setCascadeColorEnabled(true);
        this._imgGiftBox.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGiftBox, 1, 0.5);
        let _imgGiftBoxLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGiftBox);
        _imgGiftBoxLayoutComponent.setPositionPercentXEnabled(true);
        _imgGiftBoxLayoutComponent.setPositionPercentX(1);
        _imgGiftBoxLayoutComponent.setPercentWidthEnabled(true);
        _imgGiftBoxLayoutComponent.setPercentWidth(0.0688);
        _imgGiftBoxLayoutComponent.setPercentHeightEnabled(true);
        _imgGiftBoxLayoutComponent.setPercentHeight(0.3033);
        this._imgGiftBox.loadTexture("icons/flat/Reward.png", 1);
        this._imgGiftBox.setUnifySizeEnabled(false);
        this._imgGiftBox.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgGiftBox, 0.0688, 0.3033);
        this._imgGiftBox.setTouchEnabled(false);

    },


    playCCSAnimNormal: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimNormal();
    
    
    },

    resetCCSAnimNormal: function () {
        this._imgIconBgr.stopAllActions();
        this._imgIconBgr.setColor(cc.color(149, 123, 105, 255));
    },

    playCCSAnimFinished: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimFinished();
    
    
    },

    resetCCSAnimFinished: function () {
        this._imgIconBgr.stopAllActions();
        this._imgIconBgr.setColor(cc.color(0, 161, 150, 255));
    },

    playCCSAnimGiftBoxFinish: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimGiftBoxFinish();
    
        let _imgGiftBoxAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(20 / (60 * speed), 479.9999, 61),
                    cc.moveTo(25 / (60 * speed), 479.9999, 75).easing(cc.easeQuarticActionOut()),
                    cc.moveTo(15 / (60 * speed), 479.9999, 61).easing(cc.easeQuadraticActionOut())
                ),
                cc.sequence(
                    cc.scaleTo(20 / (60 * speed), 1, 1),
                    cc.scaleTo(25 / (60 * speed), 0.9, 1.1),
                    cc.scaleTo(15 / (60 * speed), 1, 1)
                ),
                cc.sequence(
                    cc.rotateBy(10 / (60 * speed), -50, -49.9992),
                    cc.rotateBy(10 / (60 * speed), 60, 59.9992),
                    cc.rotateBy(20 / (60 * speed), -60, -60),
                    cc.rotateBy(15 / (60 * speed), 60, 60),
                    cc.rotateBy(5 / (60 * speed), -10, -10)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgGiftBox.setPosition(479.9999, 61);
                this._imgGiftBox.setScale(1, 1);
                this._imgGiftBox.setRotation(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgGiftBoxAction = _imgGiftBoxAction.repeatForever();
        } else _imgGiftBoxAction = cc.sequence(
            cc.delayTime(delay),
            _imgGiftBoxAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgGiftBox.runAction(_imgGiftBoxAction);
    },

    resetCCSAnimGiftBoxFinish: function () {
        this._imgGiftBox.stopAllActions();
        this._imgGiftBox.setPosition(479.9999, 61);
        this._imgGiftBox.setScale(1, 1);
        this._imgGiftBox.setRotation(0);
    }
});

/**
 * Create QuestWidget
 * @returns {_ccs.QuestWidget}
 */
_ccs.QuestWidget.create = function () {
    return new _ccs.QuestWidget();
};
