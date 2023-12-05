/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.RankingRewardPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.RankingRewardPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {ccui.ImageView} */
    _imgBanner: null,
    /** @type {ccui.ImageView} */
    _imgBanner_0: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ccui.ImageView} */
    _imgTextHeader: null,
    /** @type {ck.Text} */
    _txtRankHeader: null,
    /** @type {ck.Text} */
    _txtRank: null,
    /** @type {ck.Text} */
    _txtRewards: null,
    /** @type {ck.Text} */
    _txtPlayerName: null,
    /** @type {ccui.Layout} */
    _layoutPlayerAvatar: null,
    /** @type {Avatar} */
    _avatar: null,
    /** @type {cc.Sprite} */
    _spriteAvatarFrame: null,
    /** @type {ccui.ImageView} */
    _boxName: null,
    /** @type {ck.Text} */
    _txtPlayerName: null,
    /** @type {ccui.ImageView} */
    _imgClaim: null,
    /** @type {ck.Text} */
    _txtClaim: null,
    /** @type {ck.GridViewVertical} */
    _grid: null,
    /** @type {ShareImageRewardWidget} */
    _nodeShareReward: null,


    /**
     * _ccs.RankingRewardPopup constructor
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

        ///// # _layoutPopup
        this._layoutPopup = new ccui.Layout();
        this._layoutPopup.setName("_layoutPopup");
        this.addChild(this._layoutPopup);
        this._layoutPopup.setCascadeOpacityEnabled(true);
        this._layoutPopup.setCascadeColorEnabled(true);
        this._layoutPopup.setAnchorPoint(cc.p(0.5, 0.5));
        this._layoutPopup.setPosition(0, -0.0001);
        let _layoutPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        this._layoutPopup.setTouchEnabled(false);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(540, 830));

        ///// # _imgBack
        this._imgBack = new ccui.ImageView();
        this._imgBack.setName("_imgBack");
        this._layoutPopup.addChild(this._imgBack);
        this._imgBack.setCascadeOpacityEnabled(true);
        this._imgBack.setCascadeColorEnabled(true);
        this._imgBack.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBack, 0.5, 0.5);
        let _imgBackLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBack);
        _imgBackLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackLayoutComponent.setPositionPercentX(0.5);
        _imgBackLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackLayoutComponent.setPositionPercentY(0.5);
        _imgBackLayoutComponent.setPercentWidthEnabled(true);
        _imgBackLayoutComponent.setPercentWidth(1);
        _imgBackLayoutComponent.setPercentHeightEnabled(true);
        _imgBackLayoutComponent.setPercentHeight(1);
        this._imgBack.loadTexture("basics/popup/BoardPurple.png", 1);
        this._imgBack.setUnifySizeEnabled(false);
        this._imgBack.ignoreContentAdaptWithSize(false);
        this._imgBack.setScale9Enabled(true);
        this._imgBack.setCapInsets(cc.rect(14, 16, 6, 4));
        ck.UIUtils.setSizePercent(this._imgBack, 1, 1);
        this._imgBack.setTouchEnabled(false);

        ///// # _imgBanner
        this._imgBanner = new ccui.ImageView();
        this._imgBanner.setName("_imgBanner");
        this._layoutPopup.addChild(this._imgBanner);
        this._imgBanner.setCascadeOpacityEnabled(true);
        this._imgBanner.setCascadeColorEnabled(true);
        this._imgBanner.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBanner, 0.5, 0.7067);
        let _imgBannerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBanner);
        _imgBannerLayoutComponent.setPositionPercentXEnabled(true);
        _imgBannerLayoutComponent.setPositionPercentX(0.5);
        _imgBannerLayoutComponent.setPositionPercentYEnabled(true);
        _imgBannerLayoutComponent.setPositionPercentY(0.7067);
        _imgBannerLayoutComponent.setPercentWidthEnabled(true);
        _imgBannerLayoutComponent.setPercentWidth(0.9333);
        _imgBannerLayoutComponent.setPercentHeightEnabled(true);
        _imgBannerLayoutComponent.setPercentHeight(0.5253);
        this._imgBanner.loadTexture("ranking/Banner_02.png", 1);
        this._imgBanner.setUnifySizeEnabled(false);
        this._imgBanner.ignoreContentAdaptWithSize(false);
        this._imgBanner.setScale9Enabled(true);
        this._imgBanner.setCapInsets(cc.rect(8, 12, 488, 412));
        ck.UIUtils.setSizePercent(this._imgBanner, 0.9333, 0.5253);
        this._imgBanner.setTouchEnabled(false);

        ///// # _imgBanner_0
        this._imgBanner_0 = new ccui.ImageView();
        this._imgBanner_0.setName("_imgBanner_0");
        this._layoutPopup.addChild(this._imgBanner_0);
        this._imgBanner_0.setCascadeOpacityEnabled(true);
        this._imgBanner_0.setCascadeColorEnabled(true);
        this._imgBanner_0.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgBanner_0, 0.5, 0.4589);
        let _imgBanner_0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBanner_0);
        _imgBanner_0LayoutComponent.setPositionPercentXEnabled(true);
        _imgBanner_0LayoutComponent.setPositionPercentX(0.5);
        _imgBanner_0LayoutComponent.setPositionPercentYEnabled(true);
        _imgBanner_0LayoutComponent.setPositionPercentY(0.4589);
        _imgBanner_0LayoutComponent.setPercentWidthEnabled(true);
        _imgBanner_0LayoutComponent.setPercentWidth(0.9333);
        _imgBanner_0LayoutComponent.setPercentHeightEnabled(true);
        _imgBanner_0LayoutComponent.setPercentHeight(0.4301);
        this._imgBanner_0.loadTexture("ranking/BackgroundReward.png", 1);
        this._imgBanner_0.setUnifySizeEnabled(false);
        this._imgBanner_0.ignoreContentAdaptWithSize(false);
        this._imgBanner_0.setScale9Enabled(true);
        this._imgBanner_0.setCapInsets(cc.rect(8, 12, 488, 305));
        ck.UIUtils.setSizePercent(this._imgBanner_0, 0.9333, 0.4301);
        this._imgBanner_0.setTouchEnabled(false);

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._layoutPopup.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 0.996);
        this._imgHeader.setRotation(-0.1547);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(0.996);
        this._imgHeader.loadTexture("basics/popup/HeaderRanking.png", 1);
        this._imgHeader.setUnifySizeEnabled(false);
        this._imgHeader.ignoreContentAdaptWithSize(false);
        this._imgHeader.setContentSize(cc.size(409, 99));
        this._imgHeader.setTouchEnabled(false);

        ///// # _imgTextHeader
        this._imgTextHeader = new ccui.ImageView();
        this._imgTextHeader.setName("_imgTextHeader");
        this._imgHeader.addChild(this._imgTextHeader);
        this._imgTextHeader.setCascadeOpacityEnabled(true);
        this._imgTextHeader.setCascadeColorEnabled(true);
        this._imgTextHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTextHeader, 0.5, 0.5);
        this._imgTextHeader.setRotation(-0.1547);
        let _imgTextHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTextHeader);
        _imgTextHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgTextHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgTextHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgTextHeaderLayoutComponent.setPositionPercentY(0.5);
        this._imgTextHeader.loadTexture("texts/other/Congraz.png", 1);
        this._imgTextHeader.setTouchEnabled(false);

        ///// # _txtRankHeader
        this._txtRankHeader = new ck.Text();
        this._txtRankHeader.setName("_txtRankHeader");
        this._layoutPopup.addChild(this._txtRankHeader);
        this._txtRankHeader.setCascadeOpacityEnabled(true);
        this._txtRankHeader.setCascadeColorEnabled(true);
        this._txtRankHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRankHeader, 0.4505, 0.3725);
        let _txtRankHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRankHeader);
        _txtRankHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtRankHeaderLayoutComponent.setPositionPercentX(0.4505);
        _txtRankHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtRankHeaderLayoutComponent.setPositionPercentY(0.3725);
        this._txtRankHeader.setTouchEnabled(false);
        this._txtRankHeader.ignoreContentAdaptWithSize(true);
        this._txtRankHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtRankHeader.setDefaultFontSize(80);
        this._txtRankHeader.setString(gm.localize.getText("TXT_RANK"));
        this._txtRankHeader.setTextHorizontalAlignment(1);
        this._txtRankHeader.setTextVerticalAlignment(1);
        this._txtRankHeader.enableShadow(cc.color(80, 22, 63, 255), cc.size(0, -2), 0);

        ///// # _txtRank
        this._txtRank = new ck.Text();
        this._txtRank.setName("_txtRank");
        this._layoutPopup.addChild(this._txtRank);
        this._txtRank.setCascadeOpacityEnabled(true);
        this._txtRank.setCascadeColorEnabled(true);
        this._txtRank.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRank, 0.6223, 0.3725);
        this._txtRank.setTextColor(cc.color(255, 242, 14, 255));
        let _txtRankLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRank);
        _txtRankLayoutComponent.setPositionPercentXEnabled(true);
        _txtRankLayoutComponent.setPositionPercentX(0.6223);
        _txtRankLayoutComponent.setPositionPercentYEnabled(true);
        _txtRankLayoutComponent.setPositionPercentY(0.3725);
        this._txtRank.setTouchEnabled(false);
        this._txtRank.ignoreContentAdaptWithSize(true);
        this._txtRank.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtRank.setDefaultFontSize(80);
        this._txtRank.setTextHorizontalAlignment(1);
        this._txtRank.setTextVerticalAlignment(1);
        this._txtRank.enableShadow(cc.color(80, 22, 63, 255), cc.size(0, -2), 0);

        ///// # _txtRewards
        this._txtRewards = new ck.Text();
        this._txtRewards.setName("_txtRewards");
        this._layoutPopup.addChild(this._txtRewards);
        this._txtRewards.setCascadeOpacityEnabled(true);
        this._txtRewards.setCascadeColorEnabled(true);
        this._txtRewards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRewards, 0.4974, 0.2886);
        this._txtRewards.setTextColor(cc.color(172, 99, 224, 255));
        let _txtRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRewards);
        _txtRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _txtRewardsLayoutComponent.setPositionPercentX(0.4974);
        _txtRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _txtRewardsLayoutComponent.setPositionPercentY(0.2886);
        this._txtRewards.setTouchEnabled(false);
        this._txtRewards.ignoreContentAdaptWithSize(true);
        this._txtRewards.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtRewards.setDefaultFontSize(40);
        this._txtRewards.setString(gm.localize.getText("TXT_YOUR_REWARDS"));
        this._txtRewards.setTextHorizontalAlignment(1);
        this._txtRewards.setTextVerticalAlignment(1);

        ///// # _txtPlayerName
        this._txtPlayerName = new ck.Text();
        this._txtPlayerName.setName("_txtPlayerName");
        this._layoutPopup.addChild(this._txtPlayerName);
        this._txtPlayerName.setCascadeOpacityEnabled(true);
        this._txtPlayerName.setCascadeColorEnabled(true);
        this._txtPlayerName.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPlayerName, 0.5147, 0.5951);
        let _txtPlayerNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPlayerName);
        _txtPlayerNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtPlayerNameLayoutComponent.setPositionPercentX(0.5147);
        _txtPlayerNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtPlayerNameLayoutComponent.setPositionPercentY(0.5951);
        this._txtPlayerName.setTouchEnabled(false);
        this._txtPlayerName.ignoreContentAdaptWithSize(true);
        this._txtPlayerName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtPlayerName.setDefaultFontSize(35);
        this._txtPlayerName.setTextHorizontalAlignment(1);
        this._txtPlayerName.setTextVerticalAlignment(1);
        this._txtPlayerName.enableOutline(cc.color(89, 37, 0, 255), 2);

        ///// # _layoutPlayerAvatar
        this._layoutPlayerAvatar = new ccui.Layout();
        this._layoutPlayerAvatar.setName("_layoutPlayerAvatar");
        this._layoutPopup.addChild(this._layoutPlayerAvatar);
        this._layoutPlayerAvatar.setCascadeOpacityEnabled(true);
        this._layoutPlayerAvatar.setCascadeColorEnabled(true);
        this._layoutPlayerAvatar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutPlayerAvatar, 0.5, 0.6866);
        let _layoutPlayerAvatarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPlayerAvatar);
        _layoutPlayerAvatarLayoutComponent.setPositionPercentXEnabled(true);
        _layoutPlayerAvatarLayoutComponent.setPositionPercentX(0.5);
        _layoutPlayerAvatarLayoutComponent.setPositionPercentYEnabled(true);
        _layoutPlayerAvatarLayoutComponent.setPositionPercentY(0.6866);
        this._layoutPlayerAvatar.setTouchEnabled(true);
        this._layoutPlayerAvatar.setUnifySizeEnabled(false);
        this._layoutPlayerAvatar.ignoreContentAdaptWithSize(false);
        this._layoutPlayerAvatar.setContentSize(cc.size(200, 200));
        this._layoutPlayerAvatar.setBackGroundColorType(1);
        this._layoutPlayerAvatar.setBackGroundColor(cc.color(150, 200, 255, 255));
        this._layoutPlayerAvatar.setBackGroundColorOpacity(102);

        ///// # _avatar
        this._avatar = new Avatar(ck.AvatarType.SQUARE);
        this._avatar.setName("_avatar");
        this._layoutPlayerAvatar.addChild(this._avatar);
        this._avatar.setCascadeOpacityEnabled(true);
        this._avatar.setCascadeColorEnabled(true);
        this._avatar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._avatar, 0.5, 0.63);
        let _avatarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._avatar);
        _avatarLayoutComponent.setPositionPercentXEnabled(true);
        _avatarLayoutComponent.setPositionPercentX(0.5);
        _avatarLayoutComponent.setPositionPercentYEnabled(true);
        _avatarLayoutComponent.setPositionPercentY(0.63);
        this._avatar.setWidth(147.9313);

        ///// # _spriteAvatarFrame
        this._spriteAvatarFrame = new cc.Sprite();
        this._spriteAvatarFrame.setName("_spriteAvatarFrame");
        this._layoutPlayerAvatar.addChild(this._spriteAvatarFrame);
        this._spriteAvatarFrame.setCascadeOpacityEnabled(true);
        this._spriteAvatarFrame.setCascadeColorEnabled(true);
        this._spriteAvatarFrame.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteAvatarFrame, 0.5, 0.5);
        let _spriteAvatarFrameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteAvatarFrame);
        _spriteAvatarFrameLayoutComponent.setPositionPercentXEnabled(true);
        _spriteAvatarFrameLayoutComponent.setPositionPercentX(0.5);
        _spriteAvatarFrameLayoutComponent.setPositionPercentYEnabled(true);
        _spriteAvatarFrameLayoutComponent.setPositionPercentY(0.5);
        let sf = cc.spriteFrameCache.getSpriteFrame("ranking/RankingAvatarFrame.png"); if (sf) this._spriteAvatarFrame.setSpriteFrame(sf);
        let _spriteAvatarFrameBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteAvatarFrameBlendFunc.src = 1;
        _spriteAvatarFrameBlendFunc.dst = 771;
        this._spriteAvatarFrame.setBlendFunc(_spriteAvatarFrameBlendFunc);

        ///// # _boxName
        this._boxName = new ccui.ImageView();
        this._boxName.setName("_boxName");
        this._layoutPlayerAvatar.addChild(this._boxName);
        this._boxName.setCascadeOpacityEnabled(true);
        this._boxName.setCascadeColorEnabled(true);
        this._boxName.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._boxName, 0.5, 0.1546);
        let _boxNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._boxName);
        _boxNameLayoutComponent.setPositionPercentXEnabled(true);
        _boxNameLayoutComponent.setPositionPercentX(0.5);
        _boxNameLayoutComponent.setPositionPercentYEnabled(true);
        _boxNameLayoutComponent.setPositionPercentY(0.1546);
        this._boxName.loadTexture("basics/other/BoxName.png", 1);
        this._boxName.setUnifySizeEnabled(false);
        this._boxName.ignoreContentAdaptWithSize(false);
        this._boxName.setScale9Enabled(true);
        this._boxName.setCapInsets(cc.rect(24, 15, 2, 16));
        this._boxName.setContentSize(cc.size(302.2056, 46));
        this._boxName.setTouchEnabled(false);

        ///// # _txtPlayerName
        this._txtPlayerName = new ck.Text();
        this._txtPlayerName.setName("_txtPlayerName");
        this._boxName.addChild(this._txtPlayerName);
        this._txtPlayerName.setCascadeOpacityEnabled(true);
        this._txtPlayerName.setCascadeColorEnabled(true);
        this._txtPlayerName.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPlayerName, 0.5, 0.5);
        this._txtPlayerName.setTextColor(cc.color(255, 247, 64, 255));
        let _txtPlayerNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPlayerName);
        _txtPlayerNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtPlayerNameLayoutComponent.setPositionPercentX(0.5);
        _txtPlayerNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtPlayerNameLayoutComponent.setPositionPercentY(0.5);
        this._txtPlayerName.setTouchEnabled(false);
        this._txtPlayerName.ignoreContentAdaptWithSize(true);
        this._txtPlayerName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtPlayerName.setDefaultFontSize(35);
        this._txtPlayerName.setTextHorizontalAlignment(1);
        this._txtPlayerName.setTextVerticalAlignment(1);

        ///// # _imgClaim
        this._imgClaim = new ccui.ImageView();
        this._imgClaim.setName("_imgClaim");
        this._layoutPopup.addChild(this._imgClaim);
        this._imgClaim.setCascadeOpacityEnabled(true);
        this._imgClaim.setCascadeColorEnabled(true);
        this._imgClaim.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClaim, 0.5, 0.0168);
        let _imgClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClaim);
        _imgClaimLayoutComponent.setPositionPercentXEnabled(true);
        _imgClaimLayoutComponent.setPositionPercentX(0.5);
        _imgClaimLayoutComponent.setPositionPercentYEnabled(true);
        _imgClaimLayoutComponent.setPositionPercentY(0.0168);
        this._imgClaim.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgClaim.setUnifySizeEnabled(false);
        this._imgClaim.ignoreContentAdaptWithSize(false);
        this._imgClaim.setContentSize(cc.size(206, 81));
        this._imgClaim.setTouchEnabled(true);

        ///// # _txtClaim
        this._txtClaim = new ck.Text();
        this._txtClaim.setName("_txtClaim");
        this._imgClaim.addChild(this._txtClaim);
        this._txtClaim.setCascadeOpacityEnabled(true);
        this._txtClaim.setCascadeColorEnabled(true);
        this._txtClaim.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtClaim, 0.5, 0.513);
        let _txtClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtClaim);
        _txtClaimLayoutComponent.setPositionPercentXEnabled(true);
        _txtClaimLayoutComponent.setPositionPercentX(0.5);
        _txtClaimLayoutComponent.setPositionPercentYEnabled(true);
        _txtClaimLayoutComponent.setPositionPercentY(0.513);
        this._txtClaim.setTouchEnabled(false);
        this._txtClaim.ignoreContentAdaptWithSize(true);
        this._txtClaim.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtClaim.setDefaultFontSize(45);
        this._txtClaim.setString(gm.localize.getText("TXT_CLAIM"));
        this._txtClaim.setTextHorizontalAlignment(1);
        this._txtClaim.setTextVerticalAlignment(1);
        this._txtClaim.enableOutline(cc.color(15, 123, 118, 255), 3);

        ///// # _grid
        this._grid = new ck.GridViewVertical();
        this._grid.setName("_grid");
        this._layoutPopup.addChild(this._grid);
        this._grid.setCascadeOpacityEnabled(true);
        this._grid.setCascadeColorEnabled(true);
        this._grid.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._grid, 0.5, 0.164);
        let _gridLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._grid);
        _gridLayoutComponent.setPositionPercentXEnabled(true);
        _gridLayoutComponent.setPositionPercentX(0.5);
        _gridLayoutComponent.setPositionPercentYEnabled(true);
        _gridLayoutComponent.setPositionPercentY(0.164);

        ///// # _nodeShareReward
        this._nodeShareReward = new ShareImageRewardWidget();
        this._nodeShareReward.setName("_nodeShareReward");
        this._layoutPopup.addChild(this._nodeShareReward);
        this._nodeShareReward.setCascadeOpacityEnabled(true);
        this._nodeShareReward.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeShareReward, 0.5, -0.15);
        let _nodeShareRewardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeShareReward);
        _nodeShareRewardLayoutComponent.setPositionPercentXEnabled(true);
        _nodeShareRewardLayoutComponent.setPositionPercentX(0.5);
        _nodeShareRewardLayoutComponent.setPositionPercentYEnabled(true);
        _nodeShareRewardLayoutComponent.setPositionPercentY(-0.15);

    },



});

/**
 * Create RankingRewardPopup
 * @returns {_ccs.RankingRewardPopup}
 */
_ccs.RankingRewardPopup.create = function () {
    return new _ccs.RankingRewardPopup();
};
