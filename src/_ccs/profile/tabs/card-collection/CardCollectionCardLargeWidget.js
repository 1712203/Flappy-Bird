/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.CardCollectionCardLargeWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.CardCollectionCardLargeWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutCardAvatar: null,
    /** @type {ccui.ImageView} */
    _imgCardAvatarBgr: null,
    /** @type {ccui.ImageView} */
    _imgCardAvatar: null,
    /** @type {ccui.ImageView} */
    _imgFrame: null,
    /** @type {ck.Text} */
    _txtCardName: null,
    /** @type {ccui.ImageView} */
    _imgCardAmountIcon: null,
    /** @type {ck.Text} */
    _txtCardAmount: null,
    /** @type {ccui.ImageView} */
    _imgCardNewIcon: null,
    /** @type {ck.Text} */
    _txtCardNew: null,
    /** @type {ccui.Layout} */
    _layoutCardStarsOdd: null,
    /** @type {ccui.ImageView} */
    _imgCardStarsOdd1: null,
    /** @type {ccui.ImageView} */
    _imgCardStarsOdd2: null,
    /** @type {ccui.ImageView} */
    _imgCardStarsOdd3: null,
    /** @type {ccui.ImageView} */
    _imgCardStarsOdd4: null,
    /** @type {ccui.ImageView} */
    _imgCardStarsOdd5: null,
    /** @type {ccui.Layout} */
    _layoutCardStarsEven: null,
    /** @type {ccui.ImageView} */
    _imgCardStarsEven1: null,
    /** @type {ccui.ImageView} */
    _imgCardStarsEven2: null,
    /** @type {ccui.ImageView} */
    _imgCardStarsEven3: null,
    /** @type {ccui.ImageView} */
    _imgCardStarsEven4: null,
    /** @type {ccui.Layout} */
    _layoutCardStarsDynamic: null,


    /**
     * _ccs.CardCollectionCardLargeWidget constructor
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
        this._layoutRoot.setContentSize(cc.size(410, 567));

        ///// # _layoutCardAvatar
        this._layoutCardAvatar = new ccui.Layout();
        this._layoutCardAvatar.setName("_layoutCardAvatar");
        this._layoutRoot.addChild(this._layoutCardAvatar);
        this._layoutCardAvatar.setCascadeOpacityEnabled(true);
        this._layoutCardAvatar.setCascadeColorEnabled(true);
        this._layoutCardAvatar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCardAvatar, 0.5, 0.5);
        let _layoutCardAvatarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCardAvatar);
        _layoutCardAvatarLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCardAvatarLayoutComponent.setPositionPercentX(0.5);
        _layoutCardAvatarLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCardAvatarLayoutComponent.setPositionPercentY(0.5);
        this._layoutCardAvatar.setTouchEnabled(false);
        this._layoutCardAvatar.setUnifySizeEnabled(false);
        this._layoutCardAvatar.ignoreContentAdaptWithSize(false);
        this._layoutCardAvatar.setContentSize(cc.size(375, 510));
        this._layoutCardAvatar.setClippingEnabled(true);

        ///// # _imgCardAvatarBgr
        this._imgCardAvatarBgr = new ccui.ImageView();
        this._imgCardAvatarBgr.setName("_imgCardAvatarBgr");
        this._layoutCardAvatar.addChild(this._imgCardAvatarBgr);
        this._imgCardAvatarBgr.setCascadeOpacityEnabled(true);
        this._imgCardAvatarBgr.setCascadeColorEnabled(true);
        this._imgCardAvatarBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCardAvatarBgr, 0.5, 0.55);
        let _imgCardAvatarBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCardAvatarBgr);
        _imgCardAvatarBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgCardAvatarBgrLayoutComponent.setPositionPercentX(0.5);
        _imgCardAvatarBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgCardAvatarBgrLayoutComponent.setPositionPercentY(0.55);
        this._imgCardAvatarBgr.loadTexture("card-collection/card-elements/CardRareBlank.png", 1);
        this._imgCardAvatarBgr.setUnifySizeEnabled(false);
        this._imgCardAvatarBgr.ignoreContentAdaptWithSize(false);
        this._imgCardAvatarBgr.setContentSize(cc.size(345.6, 442.8));
        this._imgCardAvatarBgr.setTouchEnabled(false);

        ///// # _imgCardAvatar
        this._imgCardAvatar = new ccui.ImageView();
        this._imgCardAvatar.setName("_imgCardAvatar");
        this._layoutCardAvatar.addChild(this._imgCardAvatar);
        this._imgCardAvatar.setCascadeOpacityEnabled(true);
        this._imgCardAvatar.setCascadeColorEnabled(true);
        this._imgCardAvatar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCardAvatar, 0.5, 0.5486);
        let _imgCardAvatarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCardAvatar);
        _imgCardAvatarLayoutComponent.setPositionPercentXEnabled(true);
        _imgCardAvatarLayoutComponent.setPositionPercentX(0.5);
        _imgCardAvatarLayoutComponent.setPositionPercentYEnabled(true);
        _imgCardAvatarLayoutComponent.setPositionPercentY(0.5486);
        this._imgCardAvatar.loadTexture("_temp/sprites/profile/card-collection/Card_Banana.png", 0);
        this._imgCardAvatar.setUnifySizeEnabled(false);
        this._imgCardAvatar.ignoreContentAdaptWithSize(false);
        this._imgCardAvatar.setContentSize(cc.size(340.71, 461.57));
        this._imgCardAvatar.setTouchEnabled(false);

        ///// # _imgFrame
        this._imgFrame = new ccui.ImageView();
        this._imgFrame.setName("_imgFrame");
        this._layoutRoot.addChild(this._imgFrame);
        this._imgFrame.setCascadeOpacityEnabled(true);
        this._imgFrame.setCascadeColorEnabled(true);
        this._imgFrame.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgFrame, 0.5, 0.5);
        let _imgFrameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFrame);
        _imgFrameLayoutComponent.setPositionPercentXEnabled(true);
        _imgFrameLayoutComponent.setPositionPercentX(0.5);
        _imgFrameLayoutComponent.setPositionPercentYEnabled(true);
        _imgFrameLayoutComponent.setPositionPercentY(0.5);
        this._imgFrame.loadTexture("card-collection/card-elements/CardRareFrameLarge.png", 1);
        this._imgFrame.setUnifySizeEnabled(false);
        this._imgFrame.ignoreContentAdaptWithSize(false);
        this._imgFrame.setContentSize(cc.size(410, 567));
        this._imgFrame.setTouchEnabled(false);

        ///// # _txtCardName
        this._txtCardName = new ck.Text();
        this._txtCardName.setName("_txtCardName");
        this._imgFrame.addChild(this._txtCardName);
        this._txtCardName.setCascadeOpacityEnabled(true);
        this._txtCardName.setCascadeColorEnabled(true);
        this._txtCardName.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCardName, 0.5, 0.1);
        let _txtCardNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCardName);
        _txtCardNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtCardNameLayoutComponent.setPositionPercentX(0.5);
        _txtCardNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtCardNameLayoutComponent.setPositionPercentY(0.1);
        this._txtCardName.setTouchEnabled(false);
        this._txtCardName.setUnifySizeEnabled(false);
        this._txtCardName.ignoreContentAdaptWithSize(false);
        this._txtCardName.setContentSize(cc.size(359, 75));
        this._txtCardName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCardName.setDefaultFontSize(64);
        this._txtCardName.setTextHorizontalAlignment(1);
        this._txtCardName.setTextVerticalAlignment(1);
        this._txtCardName.enableOutline(cc.color(0, 0, 0, 255), 2);

        ///// # _imgCardAmountIcon
        this._imgCardAmountIcon = new ccui.ImageView();
        this._imgCardAmountIcon.setName("_imgCardAmountIcon");
        this._imgFrame.addChild(this._imgCardAmountIcon);
        this._imgCardAmountIcon.setCascadeOpacityEnabled(true);
        this._imgCardAmountIcon.setCascadeColorEnabled(true);
        this._imgCardAmountIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCardAmountIcon, 0.085, 0.28);
        let _imgCardAmountIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCardAmountIcon);
        _imgCardAmountIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgCardAmountIconLayoutComponent.setPositionPercentX(0.085);
        _imgCardAmountIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgCardAmountIconLayoutComponent.setPositionPercentY(0.28);
        this._imgCardAmountIcon.loadTexture("card-collection/card-elements/CardAmountIconLarge.png", 1);
        this._imgCardAmountIcon.setUnifySizeEnabled(false);
        this._imgCardAmountIcon.ignoreContentAdaptWithSize(false);
        this._imgCardAmountIcon.setContentSize(cc.size(96, 92));
        this._imgCardAmountIcon.setTouchEnabled(false);

        ///// # _txtCardAmount
        this._txtCardAmount = new ck.Text();
        this._txtCardAmount.setName("_txtCardAmount");
        this._imgCardAmountIcon.addChild(this._txtCardAmount);
        this._txtCardAmount.setCascadeOpacityEnabled(true);
        this._txtCardAmount.setCascadeColorEnabled(true);
        this._txtCardAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCardAmount, 0.5, 0.5);
        this._txtCardAmount.setRotation(12);
        let _txtCardAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCardAmount);
        _txtCardAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtCardAmountLayoutComponent.setPositionPercentX(0.5);
        _txtCardAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtCardAmountLayoutComponent.setPositionPercentY(0.5);
        this._txtCardAmount.setTouchEnabled(false);
        this._txtCardAmount.setUnifySizeEnabled(false);
        this._txtCardAmount.ignoreContentAdaptWithSize(false);
        this._txtCardAmount.setContentSize(cc.size(76, 59));
        this._txtCardAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCardAmount.setDefaultFontSize(48);
        this._txtCardAmount.setTextHorizontalAlignment(1);
        this._txtCardAmount.setTextVerticalAlignment(1);
        this._txtCardAmount.enableOutline(cc.color(0, 0, 0, 255), 2);

        ///// # _imgCardNewIcon
        this._imgCardNewIcon = new ccui.ImageView();
        this._imgCardNewIcon.setName("_imgCardNewIcon");
        this._imgFrame.addChild(this._imgCardNewIcon);
        this._imgCardNewIcon.setCascadeOpacityEnabled(true);
        this._imgCardNewIcon.setCascadeColorEnabled(true);
        this._imgCardNewIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCardNewIcon, 0.915, 0.85);
        let _imgCardNewIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCardNewIcon);
        _imgCardNewIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgCardNewIconLayoutComponent.setPositionPercentX(0.915);
        _imgCardNewIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgCardNewIconLayoutComponent.setPositionPercentY(0.85);
        this._imgCardNewIcon.loadTexture("card-collection/card-elements/CardNewIconLarge.png", 1);
        this._imgCardNewIcon.setUnifySizeEnabled(false);
        this._imgCardNewIcon.ignoreContentAdaptWithSize(false);
        this._imgCardNewIcon.setContentSize(cc.size(96, 92));
        this._imgCardNewIcon.setTouchEnabled(false);

        ///// # _txtCardNew
        this._txtCardNew = new ck.Text();
        this._txtCardNew.setName("_txtCardNew");
        this._imgCardNewIcon.addChild(this._txtCardNew);
        this._txtCardNew.setCascadeOpacityEnabled(true);
        this._txtCardNew.setCascadeColorEnabled(true);
        this._txtCardNew.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCardNew, 0.5, 0.5);
        this._txtCardNew.setRotation(12);
        let _txtCardNewLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCardNew);
        _txtCardNewLayoutComponent.setPositionPercentXEnabled(true);
        _txtCardNewLayoutComponent.setPositionPercentX(0.5);
        _txtCardNewLayoutComponent.setPositionPercentYEnabled(true);
        _txtCardNewLayoutComponent.setPositionPercentY(0.5);
        this._txtCardNew.setTouchEnabled(false);
        this._txtCardNew.setUnifySizeEnabled(false);
        this._txtCardNew.ignoreContentAdaptWithSize(false);
        this._txtCardNew.setContentSize(cc.size(74, 62));
        this._txtCardNew.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCardNew.setDefaultFontSize(52);
        this._txtCardNew.setTextHorizontalAlignment(1);
        this._txtCardNew.setTextVerticalAlignment(1);
        this._txtCardNew.enableOutline(cc.color(0, 0, 0, 255), 2);

        ///// # _layoutCardStarsOdd
        this._layoutCardStarsOdd = new ccui.Layout();
        this._layoutCardStarsOdd.setName("_layoutCardStarsOdd");
        this._layoutRoot.addChild(this._layoutCardStarsOdd);
        this._layoutCardStarsOdd.setCascadeOpacityEnabled(true);
        this._layoutCardStarsOdd.setCascadeColorEnabled(true);
        this._layoutCardStarsOdd.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCardStarsOdd, 0.5, 0.97);
        let _layoutCardStarsOddLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCardStarsOdd);
        _layoutCardStarsOddLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCardStarsOddLayoutComponent.setPositionPercentX(0.5);
        _layoutCardStarsOddLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCardStarsOddLayoutComponent.setPositionPercentY(0.97);
        this._layoutCardStarsOdd.setTouchEnabled(true);
        this._layoutCardStarsOdd.setUnifySizeEnabled(false);
        this._layoutCardStarsOdd.ignoreContentAdaptWithSize(false);
        this._layoutCardStarsOdd.setContentSize(cc.size(410, 28));

        ///// # _imgCardStarsOdd1
        this._imgCardStarsOdd1 = new ccui.ImageView();
        this._imgCardStarsOdd1.setName("_imgCardStarsOdd1");
        this._layoutCardStarsOdd.addChild(this._imgCardStarsOdd1);
        this._imgCardStarsOdd1.setCascadeOpacityEnabled(true);
        this._imgCardStarsOdd1.setCascadeColorEnabled(true);
        this._imgCardStarsOdd1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCardStarsOdd1, 0.16, 0.5);
        this._imgCardStarsOdd1.setScale(0.8, 0.8);
        let _imgCardStarsOdd1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCardStarsOdd1);
        _imgCardStarsOdd1LayoutComponent.setPositionPercentXEnabled(true);
        _imgCardStarsOdd1LayoutComponent.setPositionPercentX(0.16);
        _imgCardStarsOdd1LayoutComponent.setPositionPercentYEnabled(true);
        _imgCardStarsOdd1LayoutComponent.setPositionPercentY(0.5);
        this._imgCardStarsOdd1.loadTexture("card-collection/card-elements/StarLarge.png", 1);
        this._imgCardStarsOdd1.setUnifySizeEnabled(false);
        this._imgCardStarsOdd1.ignoreContentAdaptWithSize(false);
        this._imgCardStarsOdd1.setContentSize(cc.size(72, 73));
        this._imgCardStarsOdd1.setTouchEnabled(false);

        ///// # _imgCardStarsOdd2
        this._imgCardStarsOdd2 = new ccui.ImageView();
        this._imgCardStarsOdd2.setName("_imgCardStarsOdd2");
        this._layoutCardStarsOdd.addChild(this._imgCardStarsOdd2);
        this._imgCardStarsOdd2.setCascadeOpacityEnabled(true);
        this._imgCardStarsOdd2.setCascadeColorEnabled(true);
        this._imgCardStarsOdd2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCardStarsOdd2, 0.32, 0.5);
        this._imgCardStarsOdd2.setScale(0.9, 0.9);
        let _imgCardStarsOdd2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCardStarsOdd2);
        _imgCardStarsOdd2LayoutComponent.setPositionPercentXEnabled(true);
        _imgCardStarsOdd2LayoutComponent.setPositionPercentX(0.32);
        _imgCardStarsOdd2LayoutComponent.setPositionPercentYEnabled(true);
        _imgCardStarsOdd2LayoutComponent.setPositionPercentY(0.5);
        this._imgCardStarsOdd2.loadTexture("card-collection/card-elements/StarLarge.png", 1);
        this._imgCardStarsOdd2.setUnifySizeEnabled(false);
        this._imgCardStarsOdd2.ignoreContentAdaptWithSize(false);
        this._imgCardStarsOdd2.setContentSize(cc.size(72, 73));
        this._imgCardStarsOdd2.setTouchEnabled(false);

        ///// # _imgCardStarsOdd3
        this._imgCardStarsOdd3 = new ccui.ImageView();
        this._imgCardStarsOdd3.setName("_imgCardStarsOdd3");
        this._layoutCardStarsOdd.addChild(this._imgCardStarsOdd3);
        this._imgCardStarsOdd3.setCascadeOpacityEnabled(true);
        this._imgCardStarsOdd3.setCascadeColorEnabled(true);
        this._imgCardStarsOdd3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCardStarsOdd3, 0.5, 0.5);
        let _imgCardStarsOdd3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCardStarsOdd3);
        _imgCardStarsOdd3LayoutComponent.setPositionPercentXEnabled(true);
        _imgCardStarsOdd3LayoutComponent.setPositionPercentX(0.5);
        _imgCardStarsOdd3LayoutComponent.setPositionPercentYEnabled(true);
        _imgCardStarsOdd3LayoutComponent.setPositionPercentY(0.5);
        this._imgCardStarsOdd3.loadTexture("card-collection/card-elements/StarLarge.png", 1);
        this._imgCardStarsOdd3.setUnifySizeEnabled(false);
        this._imgCardStarsOdd3.ignoreContentAdaptWithSize(false);
        this._imgCardStarsOdd3.setContentSize(cc.size(72, 73));
        this._imgCardStarsOdd3.setTouchEnabled(false);

        ///// # _imgCardStarsOdd4
        this._imgCardStarsOdd4 = new ccui.ImageView();
        this._imgCardStarsOdd4.setName("_imgCardStarsOdd4");
        this._layoutCardStarsOdd.addChild(this._imgCardStarsOdd4);
        this._imgCardStarsOdd4.setCascadeOpacityEnabled(true);
        this._imgCardStarsOdd4.setCascadeColorEnabled(true);
        this._imgCardStarsOdd4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCardStarsOdd4, 0.68, 0.5);
        this._imgCardStarsOdd4.setScale(0.9, 0.9);
        let _imgCardStarsOdd4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCardStarsOdd4);
        _imgCardStarsOdd4LayoutComponent.setPositionPercentXEnabled(true);
        _imgCardStarsOdd4LayoutComponent.setPositionPercentX(0.68);
        _imgCardStarsOdd4LayoutComponent.setPositionPercentYEnabled(true);
        _imgCardStarsOdd4LayoutComponent.setPositionPercentY(0.5);
        this._imgCardStarsOdd4.loadTexture("card-collection/card-elements/StarLarge.png", 1);
        this._imgCardStarsOdd4.setUnifySizeEnabled(false);
        this._imgCardStarsOdd4.ignoreContentAdaptWithSize(false);
        this._imgCardStarsOdd4.setContentSize(cc.size(72, 73));
        this._imgCardStarsOdd4.setTouchEnabled(false);

        ///// # _imgCardStarsOdd5
        this._imgCardStarsOdd5 = new ccui.ImageView();
        this._imgCardStarsOdd5.setName("_imgCardStarsOdd5");
        this._layoutCardStarsOdd.addChild(this._imgCardStarsOdd5);
        this._imgCardStarsOdd5.setCascadeOpacityEnabled(true);
        this._imgCardStarsOdd5.setCascadeColorEnabled(true);
        this._imgCardStarsOdd5.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCardStarsOdd5, 0.84, 0.5);
        this._imgCardStarsOdd5.setScale(0.8, 0.8);
        let _imgCardStarsOdd5LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCardStarsOdd5);
        _imgCardStarsOdd5LayoutComponent.setPositionPercentXEnabled(true);
        _imgCardStarsOdd5LayoutComponent.setPositionPercentX(0.84);
        _imgCardStarsOdd5LayoutComponent.setPositionPercentYEnabled(true);
        _imgCardStarsOdd5LayoutComponent.setPositionPercentY(0.5);
        this._imgCardStarsOdd5.loadTexture("card-collection/card-elements/StarLarge.png", 1);
        this._imgCardStarsOdd5.setUnifySizeEnabled(false);
        this._imgCardStarsOdd5.ignoreContentAdaptWithSize(false);
        this._imgCardStarsOdd5.setContentSize(cc.size(72, 73));
        this._imgCardStarsOdd5.setTouchEnabled(false);

        ///// # _layoutCardStarsEven
        this._layoutCardStarsEven = new ccui.Layout();
        this._layoutCardStarsEven.setName("_layoutCardStarsEven");
        this._layoutRoot.addChild(this._layoutCardStarsEven);
        this._layoutCardStarsEven.setCascadeOpacityEnabled(true);
        this._layoutCardStarsEven.setCascadeColorEnabled(true);
        this._layoutCardStarsEven.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCardStarsEven, 0.5, 0.97);
        let _layoutCardStarsEvenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCardStarsEven);
        _layoutCardStarsEvenLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCardStarsEvenLayoutComponent.setPositionPercentX(0.5);
        _layoutCardStarsEvenLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCardStarsEvenLayoutComponent.setPositionPercentY(0.97);
        this._layoutCardStarsEven.setTouchEnabled(true);
        this._layoutCardStarsEven.setUnifySizeEnabled(false);
        this._layoutCardStarsEven.ignoreContentAdaptWithSize(false);
        this._layoutCardStarsEven.setContentSize(cc.size(410, 28));

        ///// # _imgCardStarsEven1
        this._imgCardStarsEven1 = new ccui.ImageView();
        this._imgCardStarsEven1.setName("_imgCardStarsEven1");
        this._layoutCardStarsEven.addChild(this._imgCardStarsEven1);
        this._imgCardStarsEven1.setCascadeOpacityEnabled(true);
        this._imgCardStarsEven1.setCascadeColorEnabled(true);
        this._imgCardStarsEven1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCardStarsEven1, 0.23, 0.5);
        let _imgCardStarsEven1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCardStarsEven1);
        _imgCardStarsEven1LayoutComponent.setPositionPercentXEnabled(true);
        _imgCardStarsEven1LayoutComponent.setPositionPercentX(0.23);
        _imgCardStarsEven1LayoutComponent.setPositionPercentYEnabled(true);
        _imgCardStarsEven1LayoutComponent.setPositionPercentY(0.5);
        this._imgCardStarsEven1.loadTexture("card-collection/card-elements/StarLarge.png", 1);
        this._imgCardStarsEven1.setUnifySizeEnabled(false);
        this._imgCardStarsEven1.ignoreContentAdaptWithSize(false);
        this._imgCardStarsEven1.setContentSize(cc.size(72, 73));
        this._imgCardStarsEven1.setTouchEnabled(false);

        ///// # _imgCardStarsEven2
        this._imgCardStarsEven2 = new ccui.ImageView();
        this._imgCardStarsEven2.setName("_imgCardStarsEven2");
        this._layoutCardStarsEven.addChild(this._imgCardStarsEven2);
        this._imgCardStarsEven2.setCascadeOpacityEnabled(true);
        this._imgCardStarsEven2.setCascadeColorEnabled(true);
        this._imgCardStarsEven2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCardStarsEven2, 0.41, 0.5);
        let _imgCardStarsEven2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCardStarsEven2);
        _imgCardStarsEven2LayoutComponent.setPositionPercentXEnabled(true);
        _imgCardStarsEven2LayoutComponent.setPositionPercentX(0.41);
        _imgCardStarsEven2LayoutComponent.setPositionPercentYEnabled(true);
        _imgCardStarsEven2LayoutComponent.setPositionPercentY(0.5);
        this._imgCardStarsEven2.loadTexture("card-collection/card-elements/StarLarge.png", 1);
        this._imgCardStarsEven2.setUnifySizeEnabled(false);
        this._imgCardStarsEven2.ignoreContentAdaptWithSize(false);
        this._imgCardStarsEven2.setContentSize(cc.size(72, 73));
        this._imgCardStarsEven2.setTouchEnabled(false);

        ///// # _imgCardStarsEven3
        this._imgCardStarsEven3 = new ccui.ImageView();
        this._imgCardStarsEven3.setName("_imgCardStarsEven3");
        this._layoutCardStarsEven.addChild(this._imgCardStarsEven3);
        this._imgCardStarsEven3.setCascadeOpacityEnabled(true);
        this._imgCardStarsEven3.setCascadeColorEnabled(true);
        this._imgCardStarsEven3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCardStarsEven3, 0.59, 0.5);
        let _imgCardStarsEven3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCardStarsEven3);
        _imgCardStarsEven3LayoutComponent.setPositionPercentXEnabled(true);
        _imgCardStarsEven3LayoutComponent.setPositionPercentX(0.59);
        _imgCardStarsEven3LayoutComponent.setPositionPercentYEnabled(true);
        _imgCardStarsEven3LayoutComponent.setPositionPercentY(0.5);
        this._imgCardStarsEven3.loadTexture("card-collection/card-elements/StarLarge.png", 1);
        this._imgCardStarsEven3.setUnifySizeEnabled(false);
        this._imgCardStarsEven3.ignoreContentAdaptWithSize(false);
        this._imgCardStarsEven3.setContentSize(cc.size(72, 73));
        this._imgCardStarsEven3.setTouchEnabled(false);

        ///// # _imgCardStarsEven4
        this._imgCardStarsEven4 = new ccui.ImageView();
        this._imgCardStarsEven4.setName("_imgCardStarsEven4");
        this._layoutCardStarsEven.addChild(this._imgCardStarsEven4);
        this._imgCardStarsEven4.setCascadeOpacityEnabled(true);
        this._imgCardStarsEven4.setCascadeColorEnabled(true);
        this._imgCardStarsEven4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCardStarsEven4, 0.77, 0.5);
        let _imgCardStarsEven4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCardStarsEven4);
        _imgCardStarsEven4LayoutComponent.setPositionPercentXEnabled(true);
        _imgCardStarsEven4LayoutComponent.setPositionPercentX(0.77);
        _imgCardStarsEven4LayoutComponent.setPositionPercentYEnabled(true);
        _imgCardStarsEven4LayoutComponent.setPositionPercentY(0.5);
        this._imgCardStarsEven4.loadTexture("card-collection/card-elements/StarLarge.png", 1);
        this._imgCardStarsEven4.setUnifySizeEnabled(false);
        this._imgCardStarsEven4.ignoreContentAdaptWithSize(false);
        this._imgCardStarsEven4.setContentSize(cc.size(72, 73));
        this._imgCardStarsEven4.setTouchEnabled(false);

        ///// # _layoutCardStarsDynamic
        this._layoutCardStarsDynamic = new ccui.Layout();
        this._layoutCardStarsDynamic.setName("_layoutCardStarsDynamic");
        this._layoutRoot.addChild(this._layoutCardStarsDynamic);
        this._layoutCardStarsDynamic.setCascadeOpacityEnabled(true);
        this._layoutCardStarsDynamic.setCascadeColorEnabled(true);
        this._layoutCardStarsDynamic.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCardStarsDynamic, 0.5, 0.97);
        let _layoutCardStarsDynamicLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCardStarsDynamic);
        _layoutCardStarsDynamicLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCardStarsDynamicLayoutComponent.setPositionPercentX(0.5);
        _layoutCardStarsDynamicLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCardStarsDynamicLayoutComponent.setPositionPercentY(0.97);
        this._layoutCardStarsDynamic.setTouchEnabled(true);
        this._layoutCardStarsDynamic.setUnifySizeEnabled(false);
        this._layoutCardStarsDynamic.ignoreContentAdaptWithSize(false);
        this._layoutCardStarsDynamic.setContentSize(cc.size(410, 28));

    },



});

/**
 * Create CardCollectionCardLargeWidget
 * @returns {_ccs.CardCollectionCardLargeWidget}
 */
_ccs.CardCollectionCardLargeWidget.create = function () {
    return new _ccs.CardCollectionCardLargeWidget();
};
