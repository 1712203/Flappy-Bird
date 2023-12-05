/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.LeaguePlayerWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.LeaguePlayerWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
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
    /** @type {ccui.ImageView} */
    _imgStatus: null,


    /**
     * _ccs.LeaguePlayerWidget constructor
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

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._layoutRoot.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr, 0.5, 0.5);
        let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
        _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentY(0.5);
        _imgBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrLayoutComponent.setPercentWidth(0.98);
        this._imgBgr.loadTexture("league/league_board_down_1.png", 1);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setScale9Enabled(true);
        this._imgBgr.setCapInsets(cc.rect(45, 30, 10, 12));
        ck.UIUtils.setWidthPercent(this._imgBgr, 0.98);
        this._imgBgr.setContentSize(cc.size(this._imgBgr.width, 84));
        this._imgBgr.setTouchEnabled(false);

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
        ck.UIUtils.setPositionPercent(this._gridRewards, 0.972, 0.5101);
        let _gridRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridRewards);
        _gridRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentX(0.972);
        _gridRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentY(0.5101);

        ///// # _imgStatus
        this._imgStatus = new ccui.ImageView();
        this._imgStatus.setName("_imgStatus");
        this._layoutRoot.addChild(this._imgStatus);
        this._imgStatus.setCascadeOpacityEnabled(true);
        this._imgStatus.setCascadeColorEnabled(true);
        this._imgStatus.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStatus, 0.1066, 0.26);
        this._imgStatus.setVisible(false);
        let _imgStatusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStatus);
        _imgStatusLayoutComponent.setPositionPercentXEnabled(true);
        _imgStatusLayoutComponent.setPositionPercentX(0.1066);
        _imgStatusLayoutComponent.setPositionPercentYEnabled(true);
        _imgStatusLayoutComponent.setPositionPercentY(0.26);
        this._imgStatus.loadTexture("league/Up_Arrow.png", 1);
        this._imgStatus.setUnifySizeEnabled(false);
        this._imgStatus.ignoreContentAdaptWithSize(false);
        this._imgStatus.setContentSize(cc.size(34, 39));
        this._imgStatus.setTouchEnabled(false);

    },



});

/**
 * Create LeaguePlayerWidget
 * @returns {_ccs.LeaguePlayerWidget}
 */
_ccs.LeaguePlayerWidget.create = function () {
    return new _ccs.LeaguePlayerWidget();
};
