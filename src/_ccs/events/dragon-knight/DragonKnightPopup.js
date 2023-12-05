/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.DragonKnightPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.DragonKnightPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgPopup: null,
    /** @type {ccui.Layout} */
    _layoutMilestones: null,
    /** @type {ccui.ImageView} */
    _imgMilestoneBarBgr: null,
    /** @type {ccui.ImageView} */
    _imgMilestoneBar: null,
    /** @type {cc.Node} */
    _nodeHeader: null,
    /** @type {ccui.ImageView} */
    _imgLight: null,
    /** @type {ccui.ImageView} */
    _imgGrand: null,
    /** @type {ck.Text} */
    _txtGrand: null,
    /** @type {ShopEventIcon} */
    _shopToken: null,
    /** @type {ck.Text} */
    _txtTimeLeft: null,
    /** @type {ccui.ImageView} */
    _imgClaim: null,
    /** @type {ck.Text} */
    _txtClaim: null,
    /** @type {cc.Node} */
    _nodeCurrentMilestone: null,
    /** @type {ccui.ImageView} */
    _imgCurrentMilestoneBgr: null,
    /** @type {cc.Sprite} */
    _spriteCurrentMilestoneIcon: null,
    /** @type {ck.Text} */
    _txtCurrentMilestone: null,
    /** @type {ccui.ImageView} */
    _imgCurrentMilestoneMarkBgr2: null,
    /** @type {cc.Sprite} */
    _spriteCurrentMilestoneIcon2: null,
    /** @type {cc.Node} */
    _nodeCurrentMilestoneMark: null,
    /** @type {ccui.ImageView} */
    _imgCurrentMilestoneMarkBgr: null,
    /** @type {cc.Sprite} */
    _spriteCurrentMilestoneIcon: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.ImageView} */
    _imgGuide: null,


    /**
     * _ccs.DragonKnightPopup constructor
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
        this._root.setPosition(0, -50);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(504, 952));

        ///// # _imgPopup
        this._imgPopup = new ccui.ImageView();
        this._imgPopup.setName("_imgPopup");
        this._root.addChild(this._imgPopup);
        this._imgPopup.setCascadeOpacityEnabled(true);
        this._imgPopup.setCascadeColorEnabled(true);
        this._imgPopup.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPopup, 0.5, 0.5);
        let _imgPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPopup);
        _imgPopupLayoutComponent.setPositionPercentXEnabled(true);
        _imgPopupLayoutComponent.setPositionPercentX(0.5);
        _imgPopupLayoutComponent.setPositionPercentYEnabled(true);
        _imgPopupLayoutComponent.setPositionPercentY(0.5);
        this._imgPopup.loadTexture("dragon-knight/Popup.png", 1);
        this._imgPopup.setUnifySizeEnabled(false);
        this._imgPopup.ignoreContentAdaptWithSize(false);
        this._imgPopup.setContentSize(cc.size(504, 952));
        this._imgPopup.setTouchEnabled(false);

        ///// # _layoutMilestones
        this._layoutMilestones = new ccui.Layout();
        this._layoutMilestones.setName("_layoutMilestones");
        this._root.addChild(this._layoutMilestones);
        this._layoutMilestones.setCascadeOpacityEnabled(true);
        this._layoutMilestones.setCascadeColorEnabled(true);
        this._layoutMilestones.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutMilestones, -0.147, 0.4089);
        let _layoutMilestonesLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutMilestones);
        _layoutMilestonesLayoutComponent.setPositionPercentXEnabled(true);
        _layoutMilestonesLayoutComponent.setPositionPercentX(-0.147);
        _layoutMilestonesLayoutComponent.setPositionPercentYEnabled(true);
        _layoutMilestonesLayoutComponent.setPositionPercentY(0.4089);
        _layoutMilestonesLayoutComponent.setPercentWidthEnabled(true);
        _layoutMilestonesLayoutComponent.setPercentWidth(1.25);
        this._layoutMilestones.setTouchEnabled(false);
        this._layoutMilestones.setUnifySizeEnabled(false);
        this._layoutMilestones.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._layoutMilestones, 1.25);
        this._layoutMilestones.setContentSize(cc.size(this._layoutMilestones.width, 628));

        ///// # _imgMilestoneBarBgr
        this._imgMilestoneBarBgr = new ccui.ImageView();
        this._imgMilestoneBarBgr.setName("_imgMilestoneBarBgr");
        this._layoutMilestones.addChild(this._imgMilestoneBarBgr);
        this._imgMilestoneBarBgr.setCascadeOpacityEnabled(true);
        this._imgMilestoneBarBgr.setCascadeColorEnabled(true);
        this._imgMilestoneBarBgr.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgMilestoneBarBgr, 0.2437, 1);
        this._imgMilestoneBarBgr.setRotationX(90);
        this._imgMilestoneBarBgr.setRotationY(89.9999);
        let _imgMilestoneBarBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgMilestoneBarBgr);
        _imgMilestoneBarBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgMilestoneBarBgrLayoutComponent.setPositionPercentY(1);
        this._imgMilestoneBarBgr.loadTexture("basics/bars/Bar_15.png", 1);
        this._imgMilestoneBarBgr.setUnifySizeEnabled(false);
        this._imgMilestoneBarBgr.ignoreContentAdaptWithSize(false);
        this._imgMilestoneBarBgr.setScale9Enabled(true);
        this._imgMilestoneBarBgr.setCapInsets(cc.rect(19, 4, 5, 16));
        this._imgMilestoneBarBgr.setContentSize(cc.size(620, 24));
        this._imgMilestoneBarBgr.setTouchEnabled(false);

        ///// # _imgMilestoneBar
        this._imgMilestoneBar = new ccui.ImageView();
        this._imgMilestoneBar.setName("_imgMilestoneBar");
        this._imgMilestoneBarBgr.addChild(this._imgMilestoneBar);
        this._imgMilestoneBar.setCascadeOpacityEnabled(true);
        this._imgMilestoneBar.setCascadeColorEnabled(true);
        this._imgMilestoneBar.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._imgMilestoneBar, 0, 0.5);
        this._imgMilestoneBar.setColor(cc.color(255, 249, 0, 255));
        let _imgMilestoneBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgMilestoneBar);
        _imgMilestoneBarLayoutComponent.setPositionPercentXEnabled(true);
        _imgMilestoneBarLayoutComponent.setPositionPercentX(0);
        _imgMilestoneBarLayoutComponent.setPositionPercentYEnabled(true);
        _imgMilestoneBarLayoutComponent.setPositionPercentY(0.5);
        _imgMilestoneBarLayoutComponent.setPercentWidthEnabled(true);
        _imgMilestoneBarLayoutComponent.setPercentWidth(1);
        _imgMilestoneBarLayoutComponent.setPercentHeightEnabled(true);
        _imgMilestoneBarLayoutComponent.setPercentHeight(1);
        this._imgMilestoneBar.loadTexture("basics/bars/Bar_16.png", 1);
        this._imgMilestoneBar.setUnifySizeEnabled(false);
        this._imgMilestoneBar.ignoreContentAdaptWithSize(false);
        this._imgMilestoneBar.setScale9Enabled(true);
        this._imgMilestoneBar.setCapInsets(cc.rect(19, 6, 2, 9));
        ck.UIUtils.setSizePercent(this._imgMilestoneBar, 1, 1);
        this._imgMilestoneBar.setTouchEnabled(false);

        ///// # _nodeHeader
        this._nodeHeader = new cc.Node();
        this._nodeHeader.setName("_nodeHeader");
        this._root.addChild(this._nodeHeader);
        this._nodeHeader.setCascadeOpacityEnabled(true);
        this._nodeHeader.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeHeader, 0.4964, 1);
        let _nodeHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeHeader);
        _nodeHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _nodeHeaderLayoutComponent.setPositionPercentX(0.4964);
        _nodeHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _nodeHeaderLayoutComponent.setPositionPercentY(1);

        ///// # _imgLight
        this._imgLight = new ccui.ImageView();
        this._imgLight.setName("_imgLight");
        this._root.addChild(this._imgLight);
        this._imgLight.setCascadeOpacityEnabled(true);
        this._imgLight.setCascadeColorEnabled(true);
        this._imgLight.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLight, 0.5, 0.76);
        let _imgLightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLight);
        _imgLightLayoutComponent.setPositionPercentXEnabled(true);
        _imgLightLayoutComponent.setPositionPercentX(0.5);
        _imgLightLayoutComponent.setPositionPercentYEnabled(true);
        _imgLightLayoutComponent.setPositionPercentY(0.76);
        this._imgLight.loadTexture("dragon-knight/Light.png", 1);
        this._imgLight.setUnifySizeEnabled(false);
        this._imgLight.ignoreContentAdaptWithSize(false);
        this._imgLight.setContentSize(cc.size(497, 50));
        this._imgLight.setTouchEnabled(false);

        ///// # _imgGrand
        this._imgGrand = new ccui.ImageView();
        this._imgGrand.setName("_imgGrand");
        this._root.addChild(this._imgGrand);
        this._imgGrand.setCascadeOpacityEnabled(true);
        this._imgGrand.setCascadeColorEnabled(true);
        this._imgGrand.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGrand, 0.5, 0.84);
        let _imgGrandLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGrand);
        _imgGrandLayoutComponent.setPositionPercentXEnabled(true);
        _imgGrandLayoutComponent.setPositionPercentX(0.5);
        _imgGrandLayoutComponent.setPositionPercentYEnabled(true);
        _imgGrandLayoutComponent.setPositionPercentY(0.84);
        this._imgGrand.loadTexture("dragon-knight/BoardGrand.png", 1);
        this._imgGrand.setUnifySizeEnabled(false);
        this._imgGrand.ignoreContentAdaptWithSize(false);
        this._imgGrand.setContentSize(cc.size(429, 157));
        this._imgGrand.setTouchEnabled(false);

        ///// # _txtGrand
        this._txtGrand = new ck.Text();
        this._txtGrand.setName("_txtGrand");
        this._imgGrand.addChild(this._txtGrand);
        this._txtGrand.setCascadeOpacityEnabled(true);
        this._txtGrand.setCascadeColorEnabled(true);
        this._txtGrand.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGrand, 0.5, 0.68);
        let _txtGrandLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGrand);
        _txtGrandLayoutComponent.setPositionPercentXEnabled(true);
        _txtGrandLayoutComponent.setPositionPercentX(0.5);
        _txtGrandLayoutComponent.setPositionPercentYEnabled(true);
        _txtGrandLayoutComponent.setPositionPercentY(0.68);
        this._txtGrand.setTouchEnabled(false);
        this._txtGrand.ignoreContentAdaptWithSize(true);
        this._txtGrand.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtGrand.setDefaultFontSize(48);
        this._txtGrand.setString(gm.localize.getText("TXT_GRAND_PRIZE").toUpperCase());
        this._txtGrand.setTextHorizontalAlignment(1);
        this._txtGrand.setTextVerticalAlignment(1);
        this._txtGrand.enableShadow(cc.color(192, 22, 163, 255), cc.size(0, -3), 0);

        ///// # _shopToken
        this._shopToken = new ShopEventIcon();
        this._shopToken.setName("_shopToken");
        this._root.addChild(this._shopToken);
        this._shopToken.setCascadeOpacityEnabled(true);
        this._shopToken.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._shopToken, 0.9827, -0.0179);
        let _shopTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._shopToken);
        _shopTokenLayoutComponent.setPositionPercentXEnabled(true);
        _shopTokenLayoutComponent.setPositionPercentX(0.9827);
        _shopTokenLayoutComponent.setPositionPercentYEnabled(true);
        _shopTokenLayoutComponent.setPositionPercentY(-0.0179);

        ///// # _txtTimeLeft
        this._txtTimeLeft = new ck.Text();
        this._txtTimeLeft.setName("_txtTimeLeft");
        this._root.addChild(this._txtTimeLeft);
        this._txtTimeLeft.setCascadeOpacityEnabled(true);
        this._txtTimeLeft.setCascadeColorEnabled(true);
        this._txtTimeLeft.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTimeLeft, 0.5019, -0.0446);
        this._txtTimeLeft.setTextColor(cc.color(189, 252, 251, 255));
        let _txtTimeLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTimeLeft);
        _txtTimeLeftLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentX(0.5019);
        _txtTimeLeftLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentY(-0.0446);
        this._txtTimeLeft.setTouchEnabled(false);
        this._txtTimeLeft.ignoreContentAdaptWithSize(true);
        this._txtTimeLeft.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtTimeLeft.setDefaultFontSize(35);
        this._txtTimeLeft.setTextHorizontalAlignment(1);
        this._txtTimeLeft.setTextVerticalAlignment(1);
        this._txtTimeLeft.enableShadow(cc.color(0, 0, 0, 255), cc.size(0, -2), 0);

        ///// # _imgClaim
        this._imgClaim = new ccui.ImageView();
        this._imgClaim.setName("_imgClaim");
        this._root.addChild(this._imgClaim);
        this._imgClaim.setCascadeOpacityEnabled(true);
        this._imgClaim.setCascadeColorEnabled(true);
        this._imgClaim.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClaim, 0.5, 0.0237);
        let _imgClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClaim);
        _imgClaimLayoutComponent.setPositionPercentXEnabled(true);
        _imgClaimLayoutComponent.setPositionPercentX(0.5);
        _imgClaimLayoutComponent.setPositionPercentYEnabled(true);
        _imgClaimLayoutComponent.setPositionPercentY(0.0237);
        this._imgClaim.loadTexture("buttons/rectangles/02_Green.png", 1);
        this._imgClaim.setUnifySizeEnabled(false);
        this._imgClaim.ignoreContentAdaptWithSize(false);
        this._imgClaim.setScale9Enabled(true);
        this._imgClaim.setCapInsets(cc.rect(96, 42, 24, 9));
        this._imgClaim.setContentSize(cc.size(206.7692, 88));
        this._imgClaim.setTouchEnabled(false);

        ///// # _txtClaim
        this._txtClaim = new ck.Text();
        this._txtClaim.setName("_txtClaim");
        this._imgClaim.addChild(this._txtClaim);
        this._txtClaim.setCascadeOpacityEnabled(true);
        this._txtClaim.setCascadeColorEnabled(true);
        this._txtClaim.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtClaim, 0.5, 0.5);
        this._txtClaim.setTextColor(cc.color(28, 119, 7, 255));
        let _txtClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtClaim);
        _txtClaimLayoutComponent.setPositionPercentXEnabled(true);
        _txtClaimLayoutComponent.setPositionPercentX(0.5);
        _txtClaimLayoutComponent.setPositionPercentYEnabled(true);
        _txtClaimLayoutComponent.setPositionPercentY(0.5);
        this._txtClaim.setTouchEnabled(false);
        this._txtClaim.ignoreContentAdaptWithSize(true);
        this._txtClaim.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtClaim.setDefaultFontSize(40);
        this._txtClaim.setString(gm.localize.getText("TXT_CLAIM_ALL"));
        this._txtClaim.setTextHorizontalAlignment(1);
        this._txtClaim.setTextVerticalAlignment(1);
        this._txtClaim.enableShadow(cc.color(192, 241, 92, 255), cc.size(0, -2), 0);

        ///// # _nodeCurrentMilestone
        this._nodeCurrentMilestone = new cc.Node();
        this._nodeCurrentMilestone.setName("_nodeCurrentMilestone");
        this._root.addChild(this._nodeCurrentMilestone);
        this._nodeCurrentMilestone.setCascadeOpacityEnabled(true);
        this._nodeCurrentMilestone.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeCurrentMilestone, 0.004, 0.7058);
        let _nodeCurrentMilestoneLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCurrentMilestone);
        _nodeCurrentMilestoneLayoutComponent.setPositionPercentYEnabled(true);
        _nodeCurrentMilestoneLayoutComponent.setPositionPercentY(0.7058);

        ///// # _imgCurrentMilestoneBgr
        this._imgCurrentMilestoneBgr = new ccui.ImageView();
        this._imgCurrentMilestoneBgr.setName("_imgCurrentMilestoneBgr");
        this._nodeCurrentMilestone.addChild(this._imgCurrentMilestoneBgr);
        this._imgCurrentMilestoneBgr.setCascadeOpacityEnabled(true);
        this._imgCurrentMilestoneBgr.setCascadeColorEnabled(true);
        this._imgCurrentMilestoneBgr.setAnchorPoint(cc.p(0.5, 0));
        let _imgCurrentMilestoneBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCurrentMilestoneBgr);
        this._imgCurrentMilestoneBgr.loadTexture("dragon-knight/EggBox_02.png", 1);
        this._imgCurrentMilestoneBgr.setUnifySizeEnabled(false);
        this._imgCurrentMilestoneBgr.ignoreContentAdaptWithSize(false);
        this._imgCurrentMilestoneBgr.setContentSize(cc.size(104, 40));
        this._imgCurrentMilestoneBgr.setTouchEnabled(false);

        ///// # _spriteCurrentMilestoneIcon
        this._spriteCurrentMilestoneIcon = new cc.Sprite();
        this._spriteCurrentMilestoneIcon.setName("_spriteCurrentMilestoneIcon");
        this._imgCurrentMilestoneBgr.addChild(this._spriteCurrentMilestoneIcon);
        this._spriteCurrentMilestoneIcon.setCascadeOpacityEnabled(true);
        this._spriteCurrentMilestoneIcon.setCascadeColorEnabled(true);
        this._spriteCurrentMilestoneIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteCurrentMilestoneIcon, 0.15, 0.5);
        this._spriteCurrentMilestoneIcon.setScale(0.5, 0.5);
        let _spriteCurrentMilestoneIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteCurrentMilestoneIcon);
        _spriteCurrentMilestoneIconLayoutComponent.setPositionPercentXEnabled(true);
        _spriteCurrentMilestoneIconLayoutComponent.setPositionPercentX(0.15);
        _spriteCurrentMilestoneIconLayoutComponent.setPositionPercentYEnabled(true);
        _spriteCurrentMilestoneIconLayoutComponent.setPositionPercentY(0.5);
        let sf = cc.spriteFrameCache.getSpriteFrame("dragon-knight/DragonEggSmall.png"); if (sf) this._spriteCurrentMilestoneIcon.setSpriteFrame(sf);
        let _spriteCurrentMilestoneIconBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteCurrentMilestoneIconBlendFunc.src = 1;
        _spriteCurrentMilestoneIconBlendFunc.dst = 771;
        this._spriteCurrentMilestoneIcon.setBlendFunc(_spriteCurrentMilestoneIconBlendFunc);

        ///// # _txtCurrentMilestone
        this._txtCurrentMilestone = new ck.Text();
        this._txtCurrentMilestone.setName("_txtCurrentMilestone");
        this._imgCurrentMilestoneBgr.addChild(this._txtCurrentMilestone);
        this._txtCurrentMilestone.setCascadeOpacityEnabled(true);
        this._txtCurrentMilestone.setCascadeColorEnabled(true);
        this._txtCurrentMilestone.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCurrentMilestone, 0.53, 0.5);
        let _txtCurrentMilestoneLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCurrentMilestone);
        _txtCurrentMilestoneLayoutComponent.setPositionPercentXEnabled(true);
        _txtCurrentMilestoneLayoutComponent.setPositionPercentX(0.53);
        _txtCurrentMilestoneLayoutComponent.setPositionPercentYEnabled(true);
        _txtCurrentMilestoneLayoutComponent.setPositionPercentY(0.5);
        this._txtCurrentMilestone.setTouchEnabled(false);
        this._txtCurrentMilestone.setUnifySizeEnabled(false);
        this._txtCurrentMilestone.ignoreContentAdaptWithSize(false);
        this._txtCurrentMilestone.setContentSize(cc.size(57, 27));
        this._txtCurrentMilestone.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCurrentMilestone.setDefaultFontSize(24);
        this._txtCurrentMilestone.setTextHorizontalAlignment(1);
        this._txtCurrentMilestone.setTextVerticalAlignment(1);
        this._txtCurrentMilestone.autoFitSingleLine();

        ///// # _imgCurrentMilestoneMarkBgr2
        this._imgCurrentMilestoneMarkBgr2 = new ccui.ImageView();
        this._imgCurrentMilestoneMarkBgr2.setName("_imgCurrentMilestoneMarkBgr2");
        this._imgCurrentMilestoneBgr.addChild(this._imgCurrentMilestoneMarkBgr2);
        this._imgCurrentMilestoneMarkBgr2.setCascadeOpacityEnabled(true);
        this._imgCurrentMilestoneMarkBgr2.setCascadeColorEnabled(true);
        this._imgCurrentMilestoneMarkBgr2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCurrentMilestoneMarkBgr2, 1.25, 0.5);
        let _imgCurrentMilestoneMarkBgr2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCurrentMilestoneMarkBgr2);
        _imgCurrentMilestoneMarkBgr2LayoutComponent.setPositionPercentXEnabled(true);
        _imgCurrentMilestoneMarkBgr2LayoutComponent.setPositionPercentX(1.25);
        _imgCurrentMilestoneMarkBgr2LayoutComponent.setPositionPercentYEnabled(true);
        _imgCurrentMilestoneMarkBgr2LayoutComponent.setPositionPercentY(0.5);
        this._imgCurrentMilestoneMarkBgr2.loadTexture("dragon-knight/EggBox_01.png", 1);
        this._imgCurrentMilestoneMarkBgr2.setUnifySizeEnabled(false);
        this._imgCurrentMilestoneMarkBgr2.ignoreContentAdaptWithSize(false);
        this._imgCurrentMilestoneMarkBgr2.setContentSize(cc.size(50, 50));
        this._imgCurrentMilestoneMarkBgr2.setTouchEnabled(false);

        ///// # _spriteCurrentMilestoneIcon2
        this._spriteCurrentMilestoneIcon2 = new cc.Sprite();
        this._spriteCurrentMilestoneIcon2.setName("_spriteCurrentMilestoneIcon2");
        this._imgCurrentMilestoneMarkBgr2.addChild(this._spriteCurrentMilestoneIcon2);
        this._spriteCurrentMilestoneIcon2.setCascadeOpacityEnabled(true);
        this._spriteCurrentMilestoneIcon2.setCascadeColorEnabled(true);
        this._spriteCurrentMilestoneIcon2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteCurrentMilestoneIcon2, 0.5, 0.5);
        this._spriteCurrentMilestoneIcon2.setScale(0.75, 0.75);
        let _spriteCurrentMilestoneIcon2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteCurrentMilestoneIcon2);
        _spriteCurrentMilestoneIcon2LayoutComponent.setPositionPercentXEnabled(true);
        _spriteCurrentMilestoneIcon2LayoutComponent.setPositionPercentX(0.5);
        _spriteCurrentMilestoneIcon2LayoutComponent.setPositionPercentYEnabled(true);
        _spriteCurrentMilestoneIcon2LayoutComponent.setPositionPercentY(0.5);
        let sf = cc.spriteFrameCache.getSpriteFrame("dragon-knight/DragonEggSmall.png"); if (sf) this._spriteCurrentMilestoneIcon2.setSpriteFrame(sf);
        let _spriteCurrentMilestoneIcon2BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteCurrentMilestoneIcon2BlendFunc.src = 1;
        _spriteCurrentMilestoneIcon2BlendFunc.dst = 771;
        this._spriteCurrentMilestoneIcon2.setBlendFunc(_spriteCurrentMilestoneIcon2BlendFunc);

        ///// # _nodeCurrentMilestoneMark
        this._nodeCurrentMilestoneMark = new cc.Node();
        this._nodeCurrentMilestoneMark.setName("_nodeCurrentMilestoneMark");
        this._root.addChild(this._nodeCurrentMilestoneMark);
        this._nodeCurrentMilestoneMark.setCascadeOpacityEnabled(true);
        this._nodeCurrentMilestoneMark.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeCurrentMilestoneMark, 0.0143, 0.6);
        let _nodeCurrentMilestoneMarkLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCurrentMilestoneMark);
        _nodeCurrentMilestoneMarkLayoutComponent.setPositionPercentYEnabled(true);
        _nodeCurrentMilestoneMarkLayoutComponent.setPositionPercentY(0.6);

        ///// # _imgCurrentMilestoneMarkBgr
        this._imgCurrentMilestoneMarkBgr = new ccui.ImageView();
        this._imgCurrentMilestoneMarkBgr.setName("_imgCurrentMilestoneMarkBgr");
        this._nodeCurrentMilestoneMark.addChild(this._imgCurrentMilestoneMarkBgr);
        this._imgCurrentMilestoneMarkBgr.setCascadeOpacityEnabled(true);
        this._imgCurrentMilestoneMarkBgr.setCascadeColorEnabled(true);
        this._imgCurrentMilestoneMarkBgr.setAnchorPoint(cc.p(0.5, 0));
        let _imgCurrentMilestoneMarkBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCurrentMilestoneMarkBgr);
        this._imgCurrentMilestoneMarkBgr.loadTexture("basics/other/Bubble_02.png", 1);
        this._imgCurrentMilestoneMarkBgr.setUnifySizeEnabled(false);
        this._imgCurrentMilestoneMarkBgr.ignoreContentAdaptWithSize(false);
        this._imgCurrentMilestoneMarkBgr.setContentSize(cc.size(78, 77));
        this._imgCurrentMilestoneMarkBgr.setTouchEnabled(false);

        ///// # _spriteCurrentMilestoneIcon
        this._spriteCurrentMilestoneIcon = new cc.Sprite();
        this._spriteCurrentMilestoneIcon.setName("_spriteCurrentMilestoneIcon");
        this._imgCurrentMilestoneMarkBgr.addChild(this._spriteCurrentMilestoneIcon);
        this._spriteCurrentMilestoneIcon.setCascadeOpacityEnabled(true);
        this._spriteCurrentMilestoneIcon.setCascadeColorEnabled(true);
        this._spriteCurrentMilestoneIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteCurrentMilestoneIcon, 0.5, 0.6);
        this._spriteCurrentMilestoneIcon.setScale(0.75, 0.75);
        let _spriteCurrentMilestoneIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteCurrentMilestoneIcon);
        _spriteCurrentMilestoneIconLayoutComponent.setPositionPercentXEnabled(true);
        _spriteCurrentMilestoneIconLayoutComponent.setPositionPercentX(0.5);
        _spriteCurrentMilestoneIconLayoutComponent.setPositionPercentYEnabled(true);
        _spriteCurrentMilestoneIconLayoutComponent.setPositionPercentY(0.6);
        let sf = cc.spriteFrameCache.getSpriteFrame("dragon-knight/DragonEggSmall.png"); if (sf) this._spriteCurrentMilestoneIcon.setSpriteFrame(sf);
        let _spriteCurrentMilestoneIconBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteCurrentMilestoneIconBlendFunc.src = 1;
        _spriteCurrentMilestoneIconBlendFunc.dst = 771;
        this._spriteCurrentMilestoneIcon.setBlendFunc(_spriteCurrentMilestoneIconBlendFunc);

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._root.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 1, 0.9255);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(1);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.9255);
        this._imgClose.loadTexture("buttons/circles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(68, 76));
        this._imgClose.setTouchEnabled(false);

        ///// # _imgGuide
        this._imgGuide = new ccui.ImageView();
        this._imgGuide.setName("_imgGuide");
        this._root.addChild(this._imgGuide);
        this._imgGuide.setCascadeOpacityEnabled(true);
        this._imgGuide.setCascadeColorEnabled(true);
        this._imgGuide.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGuide, 0, 0.9255);
        let _imgGuideLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGuide);
        _imgGuideLayoutComponent.setPositionPercentXEnabled(true);
        _imgGuideLayoutComponent.setPositionPercentX(0);
        _imgGuideLayoutComponent.setPositionPercentYEnabled(true);
        _imgGuideLayoutComponent.setPositionPercentY(0.9255);
        this._imgGuide.loadTexture("buttons/circles/Help.png", 1);
        this._imgGuide.setUnifySizeEnabled(false);
        this._imgGuide.ignoreContentAdaptWithSize(false);
        this._imgGuide.setContentSize(cc.size(68, 76));
        this._imgGuide.setTouchEnabled(false);

    },



});

/**
 * Create DragonKnightPopup
 * @returns {_ccs.DragonKnightPopup}
 */
_ccs.DragonKnightPopup.create = function () {
    return new _ccs.DragonKnightPopup();
};
