/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.RankingUpWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.RankingUpWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ccui.ImageView} */
    _imgBgrHighlight: null,
    /** @type {ck.Text} */
    _txtName: null,
    /** @type {Avatar} */
    _avatar: null,
    /** @type {ck.Text} */
    _txtRankHeader: null,
    /** @type {ccui.TextBMFont} */
    _txtRank: null,
    /** @type {ccui.ImageView} */
    _imgAvatarBlur: null,
    /** @type {ccui.ImageView} */
    _imgRankBlur: null,


    /**
     * _ccs.RankingUpWidget constructor
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
        this._layoutRoot.setContentSize(cc.size(433.4391, 86.1199));

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._layoutRoot.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr, 0.5, 0.5);
        this._imgBgr.setOpacity(216);
        this._imgBgr.setFlippedX(true);
        let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
        _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentY(0.5);
        _imgBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrLayoutComponent.setPercentWidth(1);
        _imgBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrLayoutComponent.setPercentHeight(1);
        this._imgBgr.loadTexture("basics/other/BoardBlue.png", 1);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setScale9Enabled(true);
        this._imgBgr.setCapInsets(cc.rect(20, 0, 16, 122));
        ck.UIUtils.setSizePercent(this._imgBgr, 1, 1);
        this._imgBgr.setTouchEnabled(false);
        this._imgBgr.setFlippedX(true);

        ///// # _imgBgrHighlight
        this._imgBgrHighlight = new ccui.ImageView();
        this._imgBgrHighlight.setName("_imgBgrHighlight");
        this._layoutRoot.addChild(this._imgBgrHighlight);
        this._imgBgrHighlight.setCascadeOpacityEnabled(true);
        this._imgBgrHighlight.setCascadeColorEnabled(true);
        this._imgBgrHighlight.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgrHighlight, 0.5, 0.5);
        this._imgBgrHighlight.setOpacity(216);
        this._imgBgrHighlight.setFlippedX(true);
        let _imgBgrHighlightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrHighlight);
        _imgBgrHighlightLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrHighlightLayoutComponent.setPositionPercentX(0.5);
        _imgBgrHighlightLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrHighlightLayoutComponent.setPositionPercentY(0.5);
        _imgBgrHighlightLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrHighlightLayoutComponent.setPercentWidth(1);
        _imgBgrHighlightLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrHighlightLayoutComponent.setPercentHeight(1);
        this._imgBgrHighlight.loadTexture("basics/other/BoardGreen.png", 1);
        this._imgBgrHighlight.setUnifySizeEnabled(false);
        this._imgBgrHighlight.ignoreContentAdaptWithSize(false);
        this._imgBgrHighlight.setScale9Enabled(true);
        this._imgBgrHighlight.setCapInsets(cc.rect(20, 0, 16, 126));
        ck.UIUtils.setSizePercent(this._imgBgrHighlight, 1, 1);
        this._imgBgrHighlight.setTouchEnabled(false);
        this._imgBgrHighlight.setFlippedX(true);

        ///// # _txtName
        this._txtName = new ck.Text();
        this._txtName.setName("_txtName");
        this._layoutRoot.addChild(this._txtName);
        this._txtName.setCascadeOpacityEnabled(true);
        this._txtName.setCascadeColorEnabled(true);
        this._txtName.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName, 0.5428, 0.5);
        this._txtName.setTextColor(cc.color(28, 72, 92, 255));
        let _txtNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName);
        _txtNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameLayoutComponent.setPositionPercentX(0.5428);
        _txtNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameLayoutComponent.setPositionPercentY(0.5);
        this._txtName.setTouchEnabled(false);
        this._txtName.setUnifySizeEnabled(false);
        this._txtName.ignoreContentAdaptWithSize(false);
        this._txtName.setContentSize(cc.size(159, 47));
        this._txtName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName.setDefaultFontSize(27);
        this._txtName.setString("Player name");
        this._txtName.setTextHorizontalAlignment(0);
        this._txtName.setTextVerticalAlignment(1);

        ///// # _avatar
        this._avatar = new Avatar(ck.AvatarType.SQUARE);
        this._avatar.setName("_avatar");
        this._layoutRoot.addChild(this._avatar);
        this._avatar.setCascadeOpacityEnabled(true);
        this._avatar.setCascadeColorEnabled(true);
        this._avatar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._avatar, 0.4123, 0.5);
        let _avatarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._avatar);
        _avatarLayoutComponent.setPositionPercentXEnabled(true);
        _avatarLayoutComponent.setPositionPercentX(0.4123);
        _avatarLayoutComponent.setPositionPercentYEnabled(true);
        _avatarLayoutComponent.setPositionPercentY(0.5);
        this._avatar.setWidth(64);

        ///// # _txtRankHeader
        this._txtRankHeader = new ck.Text();
        this._txtRankHeader.setName("_txtRankHeader");
        this._layoutRoot.addChild(this._txtRankHeader);
        this._txtRankHeader.setCascadeOpacityEnabled(true);
        this._txtRankHeader.setCascadeColorEnabled(true);
        this._txtRankHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRankHeader, 0.1287, 0.7295);
        this._txtRankHeader.setTextColor(cc.color(28, 72, 92, 255));
        let _txtRankHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRankHeader);
        _txtRankHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtRankHeaderLayoutComponent.setPositionPercentX(0.1287);
        _txtRankHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtRankHeaderLayoutComponent.setPositionPercentY(0.7295);
        this._txtRankHeader.setTouchEnabled(false);
        this._txtRankHeader.ignoreContentAdaptWithSize(true);
        this._txtRankHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtRankHeader.setDefaultFontSize(25);
        this._txtRankHeader.setString("Rank");
        this._txtRankHeader.setTextHorizontalAlignment(1);
        this._txtRankHeader.setTextVerticalAlignment(1);

        ///// # _txtRank
        this._txtRank = new ccui.TextBMFont();
        this._txtRank.setName("_txtRank");
        this._layoutRoot.addChild(this._txtRank);
        this._txtRank.setCascadeOpacityEnabled(true);
        this._txtRank.setCascadeColorEnabled(true);
        this._txtRank.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRank, 0.1287, 0.3068);
        this._txtRank.setScale(0.8, 0.8);
        let _txtRankLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRank);
        _txtRankLayoutComponent.setPositionPercentXEnabled(true);
        _txtRankLayoutComponent.setPositionPercentX(0.1287);
        _txtRankLayoutComponent.setPositionPercentYEnabled(true);
        _txtRankLayoutComponent.setPositionPercentY(0.3068);
        this._txtRank.setTouchEnabled(false);
        this._txtRank.setFntFile("fonts/NumberBlur.fnt");
        this._txtRank.setString("00");

        ///// # _imgAvatarBlur
        this._imgAvatarBlur = new ccui.ImageView();
        this._imgAvatarBlur.setName("_imgAvatarBlur");
        this._layoutRoot.addChild(this._imgAvatarBlur);
        this._imgAvatarBlur.setCascadeOpacityEnabled(true);
        this._imgAvatarBlur.setCascadeColorEnabled(true);
        this._imgAvatarBlur.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgAvatarBlur, 0.4123, 0.5);
        this._imgAvatarBlur.setScale(1.2, 1.2);
        this._imgAvatarBlur.setOpacity(216);
        this._imgAvatarBlur.setFlippedX(true);
        let _imgAvatarBlurLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgAvatarBlur);
        _imgAvatarBlurLayoutComponent.setPositionPercentXEnabled(true);
        _imgAvatarBlurLayoutComponent.setPositionPercentX(0.4123);
        _imgAvatarBlurLayoutComponent.setPositionPercentYEnabled(true);
        _imgAvatarBlurLayoutComponent.setPositionPercentY(0.5);
        this._imgAvatarBlur.loadTexture("avatars/Blur00.png", 1);
        this._imgAvatarBlur.setUnifySizeEnabled(false);
        this._imgAvatarBlur.ignoreContentAdaptWithSize(false);
        this._imgAvatarBlur.setContentSize(cc.size(64, 64));
        this._imgAvatarBlur.setTouchEnabled(false);
        this._imgAvatarBlur.setFlippedX(true);

        ///// # _imgRankBlur
        this._imgRankBlur = new ccui.ImageView();
        this._imgRankBlur.setName("_imgRankBlur");
        this._layoutRoot.addChild(this._imgRankBlur);
        this._imgRankBlur.setCascadeOpacityEnabled(true);
        this._imgRankBlur.setCascadeColorEnabled(true);
        this._imgRankBlur.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRankBlur, 0.1287, 0.7295);
        this._imgRankBlur.setRotationX(-0.1172);
        this._imgRankBlur.setRotationY(-0.1176);
        this._imgRankBlur.setOpacity(216);
        let _imgRankBlurLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRankBlur);
        _imgRankBlurLayoutComponent.setPositionPercentXEnabled(true);
        _imgRankBlurLayoutComponent.setPositionPercentX(0.1287);
        _imgRankBlurLayoutComponent.setPositionPercentYEnabled(true);
        _imgRankBlurLayoutComponent.setPositionPercentY(0.7295);
        this._imgRankBlur.loadTexture("basics/other/RankBlur.png", 1);
        this._imgRankBlur.setUnifySizeEnabled(false);
        this._imgRankBlur.ignoreContentAdaptWithSize(false);
        this._imgRankBlur.setContentSize(cc.size(76, 30));
        this._imgRankBlur.setTouchEnabled(false);

    },



});

/**
 * Create RankingUpWidget
 * @returns {_ccs.RankingUpWidget}
 */
_ccs.RankingUpWidget.create = function () {
    return new _ccs.RankingUpWidget();
};
