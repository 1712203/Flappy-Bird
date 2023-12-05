/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.NewComerQuestWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.NewComerQuestWidget = ccui.Widget.extend({

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
    _txtMilestone: null,
    /** @type {ck.Text} */
    _txtDescription: null,
    /** @type {ccui.Layout} */
    _layoutRewards: null,
    /** @type {ccui.ImageView} */
    _imgGiftBox: null,


    /**
     * _ccs.NewComerQuestWidget constructor
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
        ck.UIUtils.setPositionPercent(this._layoutIcon, 0.1115, 0.5656);
        let _layoutIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutIcon);
        _layoutIconLayoutComponent.setPositionPercentXEnabled(true);
        _layoutIconLayoutComponent.setPositionPercentX(0.1115);
        _layoutIconLayoutComponent.setPositionPercentYEnabled(true);
        _layoutIconLayoutComponent.setPositionPercentY(0.5656);
        this._layoutIcon.setTouchEnabled(false);
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
        this._imgIcon.loadTexture("icons/color/quests/Heart.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgIcon, 0.9, 0.9);
        this._imgIcon.setTouchEnabled(false);

        ///// # _txtMilestone
        this._txtMilestone = new ck.Text();
        this._txtMilestone.setName("_txtMilestone");
        this._layoutIcon.addChild(this._txtMilestone);
        this._txtMilestone.setCascadeOpacityEnabled(true);
        this._txtMilestone.setCascadeColorEnabled(true);
        this._txtMilestone.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMilestone, 0.5, -0.1533);
        this._txtMilestone.setTextColor(cc.color(143, 54, 78, 255));
        let _txtMilestoneLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMilestone);
        _txtMilestoneLayoutComponent.setPositionPercentXEnabled(true);
        _txtMilestoneLayoutComponent.setPositionPercentX(0.5);
        _txtMilestoneLayoutComponent.setPositionPercentYEnabled(true);
        _txtMilestoneLayoutComponent.setPositionPercentY(-0.1533);
        this._txtMilestone.setTouchEnabled(false);
        this._txtMilestone.setUnifySizeEnabled(false);
        this._txtMilestone.ignoreContentAdaptWithSize(false);
        this._txtMilestone.setContentSize(cc.size(100, 26));
        this._txtMilestone.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtMilestone.setDefaultFontSize(23);
        this._txtMilestone.setTextHorizontalAlignment(1);
        this._txtMilestone.setTextVerticalAlignment(1);
        this._txtMilestone.autoFitSingleLine();

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
        _txtDescriptionLayoutComponent.setPercentHeightEnabled(true);
        _txtDescriptionLayoutComponent.setPercentHeight(0.7095);
        this._txtDescription.setTouchEnabled(false);
        this._txtDescription.setUnifySizeEnabled(false);
        this._txtDescription.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this._txtDescription, 0.7095);
        this._txtDescription.setContentSize(cc.size(243.6114, this._txtDescription.height));
        this._txtDescription.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDescription.setDefaultFontSize(25);
        this._txtDescription.setTextHorizontalAlignment(0);
        this._txtDescription.setTextVerticalAlignment(1);

        ///// # _layoutRewards
        this._layoutRewards = new ccui.Layout();
        this._layoutRewards.setName("_layoutRewards");
        this._layoutRoot.addChild(this._layoutRewards);
        this._layoutRewards.setCascadeOpacityEnabled(true);
        this._layoutRewards.setCascadeColorEnabled(true);
        this._layoutRewards.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutRewards, 1, 0.5);
        let _layoutRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRewards);
        _layoutRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRewardsLayoutComponent.setPositionPercentX(1);
        _layoutRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _layoutRewardsLayoutComponent.setPositionPercentY(0.5);
        _layoutRewardsLayoutComponent.setPercentHeightEnabled(true);
        _layoutRewardsLayoutComponent.setPercentHeight(1);
        this._layoutRewards.setTouchEnabled(false);
        this._layoutRewards.setUnifySizeEnabled(false);
        this._layoutRewards.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this._layoutRewards, 1);
        this._layoutRewards.setContentSize(cc.size(100, this._layoutRewards.height));

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


    playCCSAnimGiftBoxFinish: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimGiftBoxFinish();
    
        let _imgGiftBoxAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(20 / (60 * speed), 480, 61),
                    cc.moveTo(25 / (60 * speed), 480, 75).easing(cc.easeQuarticActionOut()),
                    cc.moveTo(15 / (60 * speed), 480, 61).easing(cc.easeQuadraticActionOut())
                ),
                cc.sequence(
                    cc.scaleTo(45 / (60 * speed), 0.9, 1.1),
                    cc.scaleTo(15 / (60 * speed), 1, 1)
                ),
                cc.sequence(
                    cc.rotateBy(10 / (60 * speed), -50, -50),
                    cc.rotateBy(10 / (60 * speed), 60, 60),
                    cc.rotateBy(20 / (60 * speed), -60, -60),
                    cc.rotateBy(15 / (60 * speed), 60, 60),
                    cc.rotateBy(5 / (60 * speed), -10, -10)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgGiftBox.setPosition(480, 61);
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
        this._imgGiftBox.setPosition(480, 61);
        this._imgGiftBox.setScale(1, 1);
        this._imgGiftBox.setRotation(0);
    }
});

/**
 * Create NewComerQuestWidget
 * @returns {_ccs.NewComerQuestWidget}
 */
_ccs.NewComerQuestWidget.create = function () {
    return new _ccs.NewComerQuestWidget();
};
