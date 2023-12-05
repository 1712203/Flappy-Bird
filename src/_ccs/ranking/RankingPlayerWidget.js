/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.RankingPlayerWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.RankingPlayerWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBgrNormal: null,
    /** @type {ccui.ImageView} */
    _imgBgrHighlight: null,
    /** @type {ccui.ImageView} */
    _imgBgrMe: null,
    /** @type {Avatar} */
    _avatar: null,
    /** @type {ccui.ImageView} */
    _imgRank: null,
    /** @type {ck.Text} */
    _txtRank: null,
    /** @type {cc.Sprite} */
    _spriteRank: null,
    /** @type {ck.Text} */
    _txtName: null,
    /** @type {ccui.ImageView} */
    _imgScore: null,
    /** @type {ck.Text} */
    _txtScore: null,
    /** @type {ck.GridViewVertical} */
    _gridRewards: null,


    /**
     * _ccs.RankingPlayerWidget constructor
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
        this._layoutRoot.setContentSize(cc.size(500, 100));

        ///// # _imgBgrNormal
        this._imgBgrNormal = new ccui.ImageView();
        this._imgBgrNormal.setName("_imgBgrNormal");
        this._layoutRoot.addChild(this._imgBgrNormal);
        this._imgBgrNormal.setCascadeOpacityEnabled(true);
        this._imgBgrNormal.setCascadeColorEnabled(true);
        this._imgBgrNormal.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgrNormal, 0.5, 0.5);
        this._imgBgrNormal.setScale(1.0879, 1);
        let _imgBgrNormalLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrNormal);
        _imgBgrNormalLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrNormalLayoutComponent.setPositionPercentX(0.5);
        _imgBgrNormalLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrNormalLayoutComponent.setPositionPercentY(0.5);
        _imgBgrNormalLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrNormalLayoutComponent.setPercentWidth(0.9);
        this._imgBgrNormal.loadTexture("ranking/Board_01.png", 1);
        this._imgBgrNormal.setUnifySizeEnabled(false);
        this._imgBgrNormal.ignoreContentAdaptWithSize(false);
        this._imgBgrNormal.setScale9Enabled(true);
        this._imgBgrNormal.setCapInsets(cc.rect(45, 30, 10, 12));
        ck.UIUtils.setWidthPercent(this._imgBgrNormal, 0.9);
        this._imgBgrNormal.setContentSize(cc.size(this._imgBgrNormal.width, 84));
        this._imgBgrNormal.setTouchEnabled(false);

        ///// # _imgBgrHighlight
        this._imgBgrHighlight = new ccui.ImageView();
        this._imgBgrHighlight.setName("_imgBgrHighlight");
        this._layoutRoot.addChild(this._imgBgrHighlight);
        this._imgBgrHighlight.setCascadeOpacityEnabled(true);
        this._imgBgrHighlight.setCascadeColorEnabled(true);
        this._imgBgrHighlight.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgrHighlight, 0.5, 0.5);
        this._imgBgrHighlight.setVisible(false);
        this._imgBgrHighlight.setScale(1.0879, 1);
        let _imgBgrHighlightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrHighlight);
        _imgBgrHighlightLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrHighlightLayoutComponent.setPositionPercentX(0.5);
        _imgBgrHighlightLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrHighlightLayoutComponent.setPositionPercentY(0.5);
        _imgBgrHighlightLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrHighlightLayoutComponent.setPercentWidth(0.9);
        this._imgBgrHighlight.loadTexture("ranking/Board_02.png", 1);
        this._imgBgrHighlight.setUnifySizeEnabled(false);
        this._imgBgrHighlight.ignoreContentAdaptWithSize(false);
        this._imgBgrHighlight.setScale9Enabled(true);
        this._imgBgrHighlight.setCapInsets(cc.rect(45, 30, 10, 12));
        ck.UIUtils.setWidthPercent(this._imgBgrHighlight, 0.9);
        this._imgBgrHighlight.setContentSize(cc.size(this._imgBgrHighlight.width, 84));
        this._imgBgrHighlight.setTouchEnabled(false);

        ///// # _imgBgrMe
        this._imgBgrMe = new ccui.ImageView();
        this._imgBgrMe.setName("_imgBgrMe");
        this._layoutRoot.addChild(this._imgBgrMe);
        this._imgBgrMe.setCascadeOpacityEnabled(true);
        this._imgBgrMe.setCascadeColorEnabled(true);
        this._imgBgrMe.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgrMe, 0.502, 0.47);
        this._imgBgrMe.setScale(1.0879, 1);
        let _imgBgrMeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrMe);
        _imgBgrMeLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrMeLayoutComponent.setPositionPercentX(0.502);
        _imgBgrMeLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrMeLayoutComponent.setPositionPercentY(0.47);
        _imgBgrMeLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrMeLayoutComponent.setPercentWidth(0.92);
        this._imgBgrMe.loadTexture("ranking/Board_03.png", 1);
        this._imgBgrMe.setUnifySizeEnabled(false);
        this._imgBgrMe.ignoreContentAdaptWithSize(false);
        this._imgBgrMe.setScale9Enabled(true);
        this._imgBgrMe.setCapInsets(cc.rect(45, 30, 14, 22));
        ck.UIUtils.setWidthPercent(this._imgBgrMe, 0.92);
        this._imgBgrMe.setContentSize(cc.size(this._imgBgrMe.width, 92));
        this._imgBgrMe.setTouchEnabled(false);

        ///// # _avatar
        this._avatar = new Avatar(ck.AvatarType.CIRCLE);
        this._avatar.setName("_avatar");
        this._layoutRoot.addChild(this._avatar);
        this._avatar.setCascadeOpacityEnabled(true);
        this._avatar.setCascadeColorEnabled(true);
        this._avatar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._avatar, 0.1822, 0.5);
        let _avatarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._avatar);
        _avatarLayoutComponent.setPositionPercentXEnabled(true);
        _avatarLayoutComponent.setPositionPercentX(0.1822);
        _avatarLayoutComponent.setPositionPercentYEnabled(true);
        _avatarLayoutComponent.setPositionPercentY(0.5);
        this._avatar.setWidth(64);

        ///// # _imgRank
        this._imgRank = new ccui.ImageView();
        this._imgRank.setName("_imgRank");
        this._layoutRoot.addChild(this._imgRank);
        this._imgRank.setCascadeOpacityEnabled(true);
        this._imgRank.setCascadeColorEnabled(true);
        this._imgRank.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRank, 0.06, 0.5);
        this._imgRank.setColor(cc.color(116, 197, 112, 255));
        let _imgRankLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRank);
        _imgRankLayoutComponent.setPositionPercentXEnabled(true);
        _imgRankLayoutComponent.setPositionPercentX(0.06);
        _imgRankLayoutComponent.setPositionPercentYEnabled(true);
        _imgRankLayoutComponent.setPositionPercentY(0.5);
        this._imgRank.loadTexture("basics/shapes/Circle_32px.png", 1);
        this._imgRank.setUnifySizeEnabled(false);
        this._imgRank.ignoreContentAdaptWithSize(false);
        this._imgRank.setContentSize(cc.size(40, 40));
        this._imgRank.setTouchEnabled(false);

        ///// # _txtRank
        this._txtRank = new ck.Text();
        this._txtRank.setName("_txtRank");
        this._layoutRoot.addChild(this._txtRank);
        this._txtRank.setCascadeOpacityEnabled(true);
        this._txtRank.setCascadeColorEnabled(true);
        this._txtRank.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRank, 0.06, 0.5);
        this._txtRank.setTextColor(cc.color(24, 99, 21, 255));
        let _txtRankLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRank);
        _txtRankLayoutComponent.setPositionPercentXEnabled(true);
        _txtRankLayoutComponent.setPositionPercentX(0.06);
        _txtRankLayoutComponent.setPositionPercentYEnabled(true);
        _txtRankLayoutComponent.setPositionPercentY(0.5);
        this._txtRank.setTouchEnabled(false);
        this._txtRank.ignoreContentAdaptWithSize(true);
        this._txtRank.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtRank.setDefaultFontSize(35);
        this._txtRank.setTextHorizontalAlignment(1);
        this._txtRank.setTextVerticalAlignment(1);

        ///// # _spriteRank
        this._spriteRank = new cc.Sprite();
        this._spriteRank.setName("_spriteRank");
        this._layoutRoot.addChild(this._spriteRank);
        this._spriteRank.setCascadeOpacityEnabled(true);
        this._spriteRank.setCascadeColorEnabled(true);
        this._spriteRank.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteRank, 0.067, 0.4925);
        let _spriteRankLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteRank);
        _spriteRankLayoutComponent.setPositionPercentXEnabled(true);
        _spriteRankLayoutComponent.setPositionPercentX(0.067);
        _spriteRankLayoutComponent.setPositionPercentYEnabled(true);
        _spriteRankLayoutComponent.setPositionPercentY(0.4925);
        let sf = cc.spriteFrameCache.getSpriteFrame("ranking/Rank_01.png"); if (sf) this._spriteRank.setSpriteFrame(sf);
        let _spriteRankBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteRankBlendFunc.src = 1;
        _spriteRankBlendFunc.dst = 771;
        this._spriteRank.setBlendFunc(_spriteRankBlendFunc);

        ///// # _txtName
        this._txtName = new ck.Text();
        this._txtName.setName("_txtName");
        this._layoutRoot.addChild(this._txtName);
        this._txtName.setCascadeOpacityEnabled(true);
        this._txtName.setCascadeColorEnabled(true);
        this._txtName.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName, 0.2549, 0.64);
        this._txtName.setTextColor(cc.color(35, 111, 116, 255));
        let _txtNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName);
        _txtNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameLayoutComponent.setPositionPercentX(0.2549);
        _txtNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameLayoutComponent.setPositionPercentY(0.64);
        this._txtName.setTouchEnabled(false);
        this._txtName.ignoreContentAdaptWithSize(true);
        this._txtName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName.setDefaultFontSize(25);
        this._txtName.setTextHorizontalAlignment(0);
        this._txtName.setTextVerticalAlignment(1);

        ///// # _imgScore
        this._imgScore = new ccui.ImageView();
        this._imgScore.setName("_imgScore");
        this._layoutRoot.addChild(this._imgScore);
        this._imgScore.setCascadeOpacityEnabled(true);
        this._imgScore.setCascadeColorEnabled(true);
        this._imgScore.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgScore, 0.2869, 0.3658);
        let _imgScoreLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgScore);
        _imgScoreLayoutComponent.setPositionPercentXEnabled(true);
        _imgScoreLayoutComponent.setPositionPercentX(0.2869);
        _imgScoreLayoutComponent.setPositionPercentYEnabled(true);
        _imgScoreLayoutComponent.setPositionPercentY(0.3658);
        this._imgScore.loadTexture("icons/color/stars/Blue.png", 1);
        this._imgScore.setUnifySizeEnabled(false);
        this._imgScore.ignoreContentAdaptWithSize(false);
        this._imgScore.setContentSize(cc.size(40, 40));
        this._imgScore.setTouchEnabled(false);

        ///// # _txtScore
        this._txtScore = new ck.Text();
        this._txtScore.setName("_txtScore");
        this._layoutRoot.addChild(this._txtScore);
        this._txtScore.setCascadeOpacityEnabled(true);
        this._txtScore.setCascadeColorEnabled(true);
        this._txtScore.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtScore, 0.3184, 0.3405);
        this._txtScore.setTextColor(cc.color(39, 164, 158, 255));
        let _txtScoreLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtScore);
        _txtScoreLayoutComponent.setPositionPercentXEnabled(true);
        _txtScoreLayoutComponent.setPositionPercentX(0.3184);
        _txtScoreLayoutComponent.setPositionPercentYEnabled(true);
        _txtScoreLayoutComponent.setPositionPercentY(0.3405);
        this._txtScore.setTouchEnabled(false);
        this._txtScore.ignoreContentAdaptWithSize(true);
        this._txtScore.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtScore.setDefaultFontSize(23);
        this._txtScore.setTextHorizontalAlignment(0);
        this._txtScore.setTextVerticalAlignment(1);

        ///// # _gridRewards
        this._gridRewards = new ck.GridViewVertical();
        this._gridRewards.setName("_gridRewards");
        this._layoutRoot.addChild(this._gridRewards);
        this._gridRewards.setCascadeOpacityEnabled(true);
        this._gridRewards.setCascadeColorEnabled(true);
        this._gridRewards.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._gridRewards, 0.982, 0.5101);
        let _gridRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridRewards);
        _gridRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentX(0.982);
        _gridRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentY(0.5101);

    },



});

/**
 * Create RankingPlayerWidget
 * @returns {_ccs.RankingPlayerWidget}
 */
_ccs.RankingPlayerWidget.create = function () {
    return new _ccs.RankingPlayerWidget();
};
