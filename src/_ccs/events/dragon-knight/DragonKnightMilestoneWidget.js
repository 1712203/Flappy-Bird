/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.DragonKnightMilestoneWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.DragonKnightMilestoneWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.Layout} */
    _panelTouch: null,
    /** @type {ccui.ImageView} */
    _imgBoardNormal: null,
    /** @type {ccui.ImageView} */
    _imgBoardSpecial: null,
    /** @type {ClaimArrow} */
    _claimArrow: null,
    /** @type {ccui.ImageView} */
    _imgReward: null,
    /** @type {ck.Text} */
    _txtAmount: null,
    /** @type {ccui.ImageView} */
    _imgCheck: null,
    /** @type {ccui.ImageView} */
    _imgLock: null,
    /** @type {ccui.ImageView} */
    _imgTokenBgr: null,
    /** @type {cc.Sprite} */
    _spriteToken: null,
    /** @type {ck.Text} */
    _txtToken: null,


    /**
     * _ccs.DragonKnightMilestoneWidget constructor
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
        this._root.setPosition(0.0001, 0);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(false);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(340, 160));

        ///// # _panelTouch
        this._panelTouch = new ccui.Layout();
        this._panelTouch.setName("_panelTouch");
        this._root.addChild(this._panelTouch);
        this._panelTouch.setCascadeOpacityEnabled(true);
        this._panelTouch.setCascadeColorEnabled(true);
        this._panelTouch.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._panelTouch, 0.5, 0.5);
        let _panelTouchLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._panelTouch);
        _panelTouchLayoutComponent.setPositionPercentXEnabled(true);
        _panelTouchLayoutComponent.setPositionPercentX(0.5);
        _panelTouchLayoutComponent.setPositionPercentYEnabled(true);
        _panelTouchLayoutComponent.setPositionPercentY(0.5);
        _panelTouchLayoutComponent.setPercentWidthEnabled(true);
        _panelTouchLayoutComponent.setPercentWidth(1);
        _panelTouchLayoutComponent.setPercentHeightEnabled(true);
        _panelTouchLayoutComponent.setPercentHeight(1);
        this._panelTouch.setTouchEnabled(true);
        this._panelTouch.setUnifySizeEnabled(false);
        this._panelTouch.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._panelTouch, 1, 1);

        ///// # _imgBoardNormal
        this._imgBoardNormal = new ccui.ImageView();
        this._imgBoardNormal.setName("_imgBoardNormal");
        this._root.addChild(this._imgBoardNormal);
        this._imgBoardNormal.setCascadeOpacityEnabled(true);
        this._imgBoardNormal.setCascadeColorEnabled(true);
        this._imgBoardNormal.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBoardNormal, 0.5, 0.5);
        this._imgBoardNormal.setColor(cc.color(197, 197, 197, 255));
        let _imgBoardNormalLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBoardNormal);
        _imgBoardNormalLayoutComponent.setPositionPercentXEnabled(true);
        _imgBoardNormalLayoutComponent.setPositionPercentX(0.5);
        _imgBoardNormalLayoutComponent.setPositionPercentYEnabled(true);
        _imgBoardNormalLayoutComponent.setPositionPercentY(0.5);
        this._imgBoardNormal.loadTexture("dragon-knight/BoardNormal.png", 1);
        this._imgBoardNormal.setUnifySizeEnabled(false);
        this._imgBoardNormal.ignoreContentAdaptWithSize(false);
        this._imgBoardNormal.setContentSize(cc.size(339, 160));
        this._imgBoardNormal.setTouchEnabled(false);

        ///// # _imgBoardSpecial
        this._imgBoardSpecial = new ccui.ImageView();
        this._imgBoardSpecial.setName("_imgBoardSpecial");
        this._root.addChild(this._imgBoardSpecial);
        this._imgBoardSpecial.setCascadeOpacityEnabled(true);
        this._imgBoardSpecial.setCascadeColorEnabled(true);
        this._imgBoardSpecial.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBoardSpecial, 0.5, 0.5);
        let _imgBoardSpecialLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBoardSpecial);
        _imgBoardSpecialLayoutComponent.setPositionPercentXEnabled(true);
        _imgBoardSpecialLayoutComponent.setPositionPercentX(0.5);
        _imgBoardSpecialLayoutComponent.setPositionPercentYEnabled(true);
        _imgBoardSpecialLayoutComponent.setPositionPercentY(0.5);
        this._imgBoardSpecial.loadTexture("dragon-knight/BoardSpecial.png", 1);
        this._imgBoardSpecial.setUnifySizeEnabled(false);
        this._imgBoardSpecial.ignoreContentAdaptWithSize(false);
        this._imgBoardSpecial.setContentSize(cc.size(340, 157));
        this._imgBoardSpecial.setTouchEnabled(false);

        ///// # _claimArrow
        this._claimArrow = new ClaimArrow();
        this._claimArrow.setName("_claimArrow");
        this._root.addChild(this._claimArrow);
        this._claimArrow.setCascadeOpacityEnabled(true);
        this._claimArrow.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._claimArrow, 0.95, 0.5191);
        let _claimArrowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._claimArrow);
        _claimArrowLayoutComponent.setPositionPercentXEnabled(true);
        _claimArrowLayoutComponent.setPositionPercentX(0.95);
        _claimArrowLayoutComponent.setPositionPercentYEnabled(true);
        _claimArrowLayoutComponent.setPositionPercentY(0.5191);

        ///// # _imgReward
        this._imgReward = new ccui.ImageView();
        this._imgReward.setName("_imgReward");
        this._root.addChild(this._imgReward);
        this._imgReward.setCascadeOpacityEnabled(true);
        this._imgReward.setCascadeColorEnabled(true);
        this._imgReward.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgReward, 0.813, 0.5);
        let _imgRewardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgReward);
        _imgRewardLayoutComponent.setPositionPercentXEnabled(true);
        _imgRewardLayoutComponent.setPositionPercentX(0.813);
        _imgRewardLayoutComponent.setPositionPercentYEnabled(true);
        _imgRewardLayoutComponent.setPositionPercentY(0.5);
        this._imgReward.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgReward.setUnifySizeEnabled(false);
        this._imgReward.ignoreContentAdaptWithSize(false);
        this._imgReward.setContentSize(cc.size(100, 100));
        this._imgReward.setTouchEnabled(false);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._root.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.36, 0.5);
        this._txtAmount.setTextColor(cc.color(250, 229, 5, 255));
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.36);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.5);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.setUnifySizeEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(false);
        this._txtAmount.setContentSize(cc.size(210, 88));
        this._txtAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmount.setDefaultFontSize(72);
        this._txtAmount.setTextHorizontalAlignment(1);
        this._txtAmount.setTextVerticalAlignment(1);
        this._txtAmount.enableOutline(cc.color(110, 49, 17, 255), 3);
        this._txtAmount.autoFitSingleLine();

        ///// # _imgCheck
        this._imgCheck = new ccui.ImageView();
        this._imgCheck.setName("_imgCheck");
        this._root.addChild(this._imgCheck);
        this._imgCheck.setCascadeOpacityEnabled(true);
        this._imgCheck.setCascadeColorEnabled(true);
        this._imgCheck.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCheck, 0.9702, 0.117);
        let _imgCheckLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCheck);
        _imgCheckLayoutComponent.setPositionPercentXEnabled(true);
        _imgCheckLayoutComponent.setPositionPercentX(0.9702);
        _imgCheckLayoutComponent.setPositionPercentYEnabled(true);
        _imgCheckLayoutComponent.setPositionPercentY(0.117);
        this._imgCheck.loadTexture("basics/other/Check.png", 1);
        this._imgCheck.setUnifySizeEnabled(false);
        this._imgCheck.ignoreContentAdaptWithSize(false);
        this._imgCheck.setContentSize(cc.size(55, 56));
        this._imgCheck.setTouchEnabled(false);

        ///// # _imgLock
        this._imgLock = new ccui.ImageView();
        this._imgLock.setName("_imgLock");
        this._root.addChild(this._imgLock);
        this._imgLock.setCascadeOpacityEnabled(true);
        this._imgLock.setCascadeColorEnabled(true);
        this._imgLock.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLock, -0.1, 0.15);
        this._imgLock.setScale(0.8, 0.8);
        this._imgLock.setFlippedX(true);
        let _imgLockLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLock);
        _imgLockLayoutComponent.setPositionPercentXEnabled(true);
        _imgLockLayoutComponent.setPositionPercentX(-0.1);
        _imgLockLayoutComponent.setPositionPercentYEnabled(true);
        _imgLockLayoutComponent.setPositionPercentY(0.15);
        this._imgLock.loadTexture("icons/color/other/Lock.png", 1);
        this._imgLock.setUnifySizeEnabled(false);
        this._imgLock.ignoreContentAdaptWithSize(false);
        this._imgLock.setContentSize(cc.size(65, 74));
        this._imgLock.setTouchEnabled(false);
        this._imgLock.setFlippedX(true);

        ///// # _imgTokenBgr
        this._imgTokenBgr = new ccui.ImageView();
        this._imgTokenBgr.setName("_imgTokenBgr");
        this._root.addChild(this._imgTokenBgr);
        this._imgTokenBgr.setCascadeOpacityEnabled(true);
        this._imgTokenBgr.setCascadeColorEnabled(true);
        this._imgTokenBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTokenBgr, -0.32, 0.13);
        let _imgTokenBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTokenBgr);
        _imgTokenBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgTokenBgrLayoutComponent.setPositionPercentX(-0.32);
        _imgTokenBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgTokenBgrLayoutComponent.setPositionPercentY(0.13);
        this._imgTokenBgr.loadTexture("dragon-knight/EggBox_03.png", 1);
        this._imgTokenBgr.setUnifySizeEnabled(false);
        this._imgTokenBgr.ignoreContentAdaptWithSize(false);
        this._imgTokenBgr.setContentSize(cc.size(117, 59));
        this._imgTokenBgr.setTouchEnabled(false);

        ///// # _spriteToken
        this._spriteToken = new cc.Sprite();
        this._spriteToken.setName("_spriteToken");
        this._imgTokenBgr.addChild(this._spriteToken);
        this._spriteToken.setCascadeOpacityEnabled(true);
        this._spriteToken.setCascadeColorEnabled(true);
        this._spriteToken.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteToken, 0.15, 0.5);
        this._spriteToken.setScale(0.6, 0.6);
        let _spriteTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteToken);
        _spriteTokenLayoutComponent.setPositionPercentXEnabled(true);
        _spriteTokenLayoutComponent.setPositionPercentX(0.15);
        _spriteTokenLayoutComponent.setPositionPercentYEnabled(true);
        _spriteTokenLayoutComponent.setPositionPercentY(0.5);
        let sf = cc.spriteFrameCache.getSpriteFrame("dragon-knight/DragonEggSmall.png"); if (sf) this._spriteToken.setSpriteFrame(sf);
        let _spriteTokenBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteTokenBlendFunc.src = 1;
        _spriteTokenBlendFunc.dst = 771;
        this._spriteToken.setBlendFunc(_spriteTokenBlendFunc);

        ///// # _txtToken
        this._txtToken = new ck.Text();
        this._txtToken.setName("_txtToken");
        this._imgTokenBgr.addChild(this._txtToken);
        this._txtToken.setCascadeOpacityEnabled(true);
        this._txtToken.setCascadeColorEnabled(true);
        this._txtToken.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtToken, 0.55, 0.5);
        let _txtTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtToken);
        _txtTokenLayoutComponent.setPositionPercentXEnabled(true);
        _txtTokenLayoutComponent.setPositionPercentX(0.55);
        _txtTokenLayoutComponent.setPositionPercentYEnabled(true);
        _txtTokenLayoutComponent.setPositionPercentY(0.5);
        this._txtToken.setTouchEnabled(false);
        this._txtToken.setUnifySizeEnabled(false);
        this._txtToken.ignoreContentAdaptWithSize(false);
        this._txtToken.setContentSize(cc.size(65, 32));
        this._txtToken.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtToken.setDefaultFontSize(30);
        this._txtToken.setTextHorizontalAlignment(1);
        this._txtToken.setTextVerticalAlignment(1);
        this._txtToken.autoFitSingleLine();

    },



});

/**
 * Create DragonKnightMilestoneWidget
 * @returns {_ccs.DragonKnightMilestoneWidget}
 */
_ccs.DragonKnightMilestoneWidget.create = function () {
    return new _ccs.DragonKnightMilestoneWidget();
};
