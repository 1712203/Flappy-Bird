/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ProfilePopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.ProfilePopup = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ccui.Layout} */
    _layoutMid: null,
    /** @type {ccui.ImageView} */
    _imgTop: null,
    /** @type {ccui.Layout} */
    _layoutCoin: null,
    /** @type {ccui.ImageView} */
    _imgCoinIcon: null,
    /** @type {ck.Text} */
    _txtCoin: null,
    /** @type {ccui.Button} */
    _btnAddCoin: null,
    /** @type {ccui.Layout} */
    _layoutGem: null,
    /** @type {ccui.ImageView} */
    _imgGemIcon: null,
    /** @type {ck.Text} */
    _txtGem: null,
    /** @type {ccui.Button} */
    _btnAddGem: null,
    /** @type {ccui.Layout} */
    _layoutItem: null,
    /** @type {ccui.ImageView} */
    _imgItemIcon: null,
    /** @type {ck.Text} */
    _txtItem: null,
    /** @type {ccui.Button} */
    _btnAddItem: null,
    /** @type {ck.TabSelector} */
    _tabSelector: null,
    /** @type {ccui.Layout} */
    _layoutClose: null,
    /** @type {ccui.ImageView} */
    _imgCloseBg: null,
    /** @type {ccui.ImageView} */
    imgCloseIcon: null,


    /**
     * _ccs.ProfilePopup constructor
     * @constructor
     */
    ctor: function () {
        cc.Layer.prototype.ctor.call(this);
        this.setCascadeOpacityEnabled(true);
        if (PlatformUtils.hasNotch())
            this._initNotch();
        this._initCCSChildren();
    },

    /**
     * Init notch for main layer
     * @private
     */
    _initNotch: function () {
        let notchHeight = PlatformUtils.NOTCH_HEIGHT;
        let marginBottom = PlatformUtils.MARGIN_BOTTOM;
        this.height = this.height - (notchHeight + marginBottom);
        this.setPosition(0, marginBottom);
    },

    /**
     * Init full screen background
     * @private
     */
    _initFullScreenBackground: function (background) {
        if (!PlatformUtils.hasNotch()) return;
        let backgroundScaleHeight = background.height / background.getParent().height;
        let notchHeight = PlatformUtils.NOTCH_HEIGHT;
        let marginBottom = PlatformUtils.MARGIN_BOTTOM;
        background.height = cc.winSize.height * backgroundScaleHeight;
        background.setAnchorPoint(0.5, 0.5);
        background.setPosition(cc.winSize.width * 0.5, background.height * 0.5 - marginBottom);
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
        ck.UIUtils.setPositionPercent(this._root, 0.5, 0.5);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        _rootLayoutComponent.setPositionPercentXEnabled(true);
        _rootLayoutComponent.setPositionPercentX(0.5);
        _rootLayoutComponent.setPositionPercentYEnabled(true);
        _rootLayoutComponent.setPositionPercentY(0.5);
        _rootLayoutComponent.setPercentWidthEnabled(true);
        _rootLayoutComponent.setPercentWidth(1);
        _rootLayoutComponent.setPercentHeightEnabled(true);
        _rootLayoutComponent.setPercentHeight(1);
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._root, 1, 1);

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._root.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr, 0.5, 0.5);
        if (!PlatformUtils.hasNotch()) {
            let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
            _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
            _imgBgrLayoutComponent.setPositionPercentX(0.5);
            _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
            _imgBgrLayoutComponent.setPositionPercentY(0.5);
            _imgBgrLayoutComponent.setPercentWidthEnabled(true);
            _imgBgrLayoutComponent.setPercentWidth(1);
            _imgBgrLayoutComponent.setPercentHeightEnabled(true);
            _imgBgrLayoutComponent.setPercentHeight(1);
        }
        this._imgBgr.loadTexture("sprites/backgrounds/Login.png", 0);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBgr, 1, 1);
        this._imgBgr.setTouchEnabled(false);
        UIUtils.initFullScreenBackground(this._imgBgr);

        ///// # _layoutMid
        this._layoutMid = new ccui.Layout();
        this._layoutMid.setName("_layoutMid");
        this._root.addChild(this._layoutMid);
        this._layoutMid.setCascadeOpacityEnabled(true);
        this._layoutMid.setCascadeColorEnabled(true);
        this._layoutMid.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutMid, 0.5, 0.5012);
        let _layoutMidLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutMid);
        _layoutMidLayoutComponent.setPositionPercentXEnabled(true);
        _layoutMidLayoutComponent.setPositionPercentX(0.5);
        _layoutMidLayoutComponent.setPositionPercentYEnabled(true);
        _layoutMidLayoutComponent.setPositionPercentY(0.5012);
        _layoutMidLayoutComponent.setPercentWidthEnabled(true);
        _layoutMidLayoutComponent.setPercentWidth(1);
        _layoutMidLayoutComponent.setPercentHeightEnabled(true);
        _layoutMidLayoutComponent.setPercentHeight(1);
        this._layoutMid.setTouchEnabled(false);
        this._layoutMid.setUnifySizeEnabled(false);
        this._layoutMid.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutMid, 1, 1);

        ///// # _imgTop
        this._imgTop = new ccui.ImageView();
        this._imgTop.setName("_imgTop");
        this._root.addChild(this._imgTop);
        this._imgTop.setCascadeOpacityEnabled(true);
        this._imgTop.setCascadeColorEnabled(true);
        this._imgTop.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgTop, 0.5, 1);
        let _imgTopLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTop);
        _imgTopLayoutComponent.setPositionPercentXEnabled(true);
        _imgTopLayoutComponent.setPositionPercentX(0.5);
        _imgTopLayoutComponent.setPositionPercentYEnabled(true);
        _imgTopLayoutComponent.setPositionPercentY(1);
        _imgTopLayoutComponent.setPercentWidthEnabled(true);
        _imgTopLayoutComponent.setPercentWidth(1);
        _imgTopLayoutComponent.setPercentHeightEnabled(true);
        _imgTopLayoutComponent.setPercentHeight(0.0645);
        this._imgTop.loadTexture("basics/other/Top.png", 1);
        this._imgTop.setUnifySizeEnabled(false);
        this._imgTop.ignoreContentAdaptWithSize(false);
        this._imgTop.setScale9Enabled(true);
        this._imgTop.setCapInsets(cc.rect(78, 1, 19, 1));
        ck.UIUtils.setSizePercent(this._imgTop, 1, 0.0645);
        this._imgTop.setTouchEnabled(false);

        ///// # _layoutCoin
        this._layoutCoin = new ccui.Layout();
        this._layoutCoin.setName("_layoutCoin");
        this._imgTop.addChild(this._layoutCoin);
        this._layoutCoin.setCascadeOpacityEnabled(true);
        this._layoutCoin.setCascadeColorEnabled(true);
        this._layoutCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCoin, 0.18, 0.5);
        let _layoutCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCoin);
        _layoutCoinLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentX(0.18);
        _layoutCoinLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentY(0.5);
        this._layoutCoin.setTouchEnabled(true);
        this._layoutCoin.setUnifySizeEnabled(false);
        this._layoutCoin.ignoreContentAdaptWithSize(false);
        this._layoutCoin.setContentSize(cc.size(150, 35));
        this._layoutCoin.setBackGroundColorType(1);
        this._layoutCoin.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutCoin.setBackGroundColorOpacity(127);

        ///// # _imgCoinIcon
        this._imgCoinIcon = new ccui.ImageView();
        this._imgCoinIcon.setName("_imgCoinIcon");
        this._layoutCoin.addChild(this._imgCoinIcon);
        this._imgCoinIcon.setCascadeOpacityEnabled(true);
        this._imgCoinIcon.setCascadeColorEnabled(true);
        this._imgCoinIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCoinIcon, 0, 0.5);
        let _imgCoinIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCoinIcon);
        _imgCoinIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgCoinIconLayoutComponent.setPositionPercentX(0);
        _imgCoinIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgCoinIconLayoutComponent.setPositionPercentY(0.5);
        this._imgCoinIcon.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgCoinIcon.setUnifySizeEnabled(false);
        this._imgCoinIcon.ignoreContentAdaptWithSize(false);
        this._imgCoinIcon.setContentSize(cc.size(50, 50));
        this._imgCoinIcon.setTouchEnabled(false);

        ///// # _txtCoin
        this._txtCoin = new ck.Text();
        this._txtCoin.setName("_txtCoin");
        this._layoutCoin.addChild(this._txtCoin);
        this._txtCoin.setCascadeOpacityEnabled(true);
        this._txtCoin.setCascadeColorEnabled(true);
        this._txtCoin.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCoin, 0.8802, 0.5);
        this._txtCoin.setTextColor(cc.color(255, 255, 141, 255));
        let _txtCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCoin);
        _txtCoinLayoutComponent.setPositionPercentXEnabled(true);
        _txtCoinLayoutComponent.setPositionPercentX(0.8802);
        _txtCoinLayoutComponent.setPositionPercentYEnabled(true);
        _txtCoinLayoutComponent.setPositionPercentY(0.5);
        this._txtCoin.setTouchEnabled(false);
        this._txtCoin.setUnifySizeEnabled(false);
        this._txtCoin.ignoreContentAdaptWithSize(false);
        this._txtCoin.setContentSize(cc.size(110, 23));
        this._txtCoin.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCoin.setDefaultFontSize(20);
        this._txtCoin.setTextHorizontalAlignment(2);
        this._txtCoin.setTextVerticalAlignment(1);
        this._txtCoin.autoFitSingleLine();

        ///// # _btnAddCoin
        this._btnAddCoin = new ccui.Button();
        this._btnAddCoin.setName("_btnAddCoin");
        this._layoutCoin.addChild(this._btnAddCoin);
        this._btnAddCoin.setCascadeOpacityEnabled(true);
        this._btnAddCoin.setCascadeColorEnabled(true);
        this._btnAddCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAddCoin, 1, 0.5);
        let _btnAddCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddCoin);
        _btnAddCoinLayoutComponent.setPositionPercentXEnabled(true);
        _btnAddCoinLayoutComponent.setPositionPercentX(1);
        _btnAddCoinLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddCoinLayoutComponent.setPositionPercentY(0.5);
        this._btnAddCoin.loadTextureDisabled("buttons/rectangles/Add.png", 1);
        this._btnAddCoin.loadTexturePressed("buttons/rectangles/Add.png", 1);
        this._btnAddCoin.loadTextureNormal("buttons/rectangles/Add.png", 1);
        this._btnAddCoin.setUnifySizeEnabled(false);
        this._btnAddCoin.ignoreContentAdaptWithSize(false);
        this._btnAddCoin.setContentSize(cc.size(40, 40));
        this._btnAddCoin.setTouchEnabled(true);

        ///// # _layoutGem
        this._layoutGem = new ccui.Layout();
        this._layoutGem.setName("_layoutGem");
        this._imgTop.addChild(this._layoutGem);
        this._layoutGem.setCascadeOpacityEnabled(true);
        this._layoutGem.setCascadeColorEnabled(true);
        this._layoutGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutGem, 0.5, 0.5);
        let _layoutGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGem);
        _layoutGemLayoutComponent.setPositionPercentXEnabled(true);
        _layoutGemLayoutComponent.setPositionPercentX(0.5);
        _layoutGemLayoutComponent.setPositionPercentYEnabled(true);
        _layoutGemLayoutComponent.setPositionPercentY(0.5);
        this._layoutGem.setTouchEnabled(true);
        this._layoutGem.setUnifySizeEnabled(false);
        this._layoutGem.ignoreContentAdaptWithSize(false);
        this._layoutGem.setContentSize(cc.size(150, 35));
        this._layoutGem.setBackGroundColorType(1);
        this._layoutGem.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutGem.setBackGroundColorOpacity(127);

        ///// # _imgGemIcon
        this._imgGemIcon = new ccui.ImageView();
        this._imgGemIcon.setName("_imgGemIcon");
        this._layoutGem.addChild(this._imgGemIcon);
        this._imgGemIcon.setCascadeOpacityEnabled(true);
        this._imgGemIcon.setCascadeColorEnabled(true);
        this._imgGemIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGemIcon, 0, 0.5);
        let _imgGemIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGemIcon);
        _imgGemIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgGemIconLayoutComponent.setPositionPercentX(0);
        _imgGemIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgGemIconLayoutComponent.setPositionPercentY(0.5);
        this._imgGemIcon.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgGemIcon.setUnifySizeEnabled(false);
        this._imgGemIcon.ignoreContentAdaptWithSize(false);
        this._imgGemIcon.setContentSize(cc.size(50, 50));
        this._imgGemIcon.setTouchEnabled(false);

        ///// # _txtGem
        this._txtGem = new ck.Text();
        this._txtGem.setName("_txtGem");
        this._layoutGem.addChild(this._txtGem);
        this._txtGem.setCascadeOpacityEnabled(true);
        this._txtGem.setCascadeColorEnabled(true);
        this._txtGem.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGem, 0.8802, 0.5);
        this._txtGem.setTextColor(cc.color(243, 192, 255, 255));
        let _txtGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGem);
        _txtGemLayoutComponent.setPositionPercentXEnabled(true);
        _txtGemLayoutComponent.setPositionPercentX(0.8802);
        _txtGemLayoutComponent.setPositionPercentYEnabled(true);
        _txtGemLayoutComponent.setPositionPercentY(0.5);
        this._txtGem.setTouchEnabled(false);
        this._txtGem.setUnifySizeEnabled(false);
        this._txtGem.ignoreContentAdaptWithSize(false);
        this._txtGem.setContentSize(cc.size(110, 23));
        this._txtGem.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGem.setDefaultFontSize(20);
        this._txtGem.setTextHorizontalAlignment(2);
        this._txtGem.setTextVerticalAlignment(1);
        this._txtGem.autoFitSingleLine();

        ///// # _btnAddGem
        this._btnAddGem = new ccui.Button();
        this._btnAddGem.setName("_btnAddGem");
        this._layoutGem.addChild(this._btnAddGem);
        this._btnAddGem.setCascadeOpacityEnabled(true);
        this._btnAddGem.setCascadeColorEnabled(true);
        this._btnAddGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAddGem, 1, 0.4757);
        let _btnAddGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddGem);
        _btnAddGemLayoutComponent.setPositionPercentXEnabled(true);
        _btnAddGemLayoutComponent.setPositionPercentX(1);
        _btnAddGemLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddGemLayoutComponent.setPositionPercentY(0.4757);
        this._btnAddGem.loadTextureDisabled("buttons/rectangles/Add.png", 1);
        this._btnAddGem.loadTexturePressed("buttons/rectangles/Add.png", 1);
        this._btnAddGem.loadTextureNormal("buttons/rectangles/Add.png", 1);
        this._btnAddGem.setUnifySizeEnabled(false);
        this._btnAddGem.ignoreContentAdaptWithSize(false);
        this._btnAddGem.setContentSize(cc.size(40, 40));
        this._btnAddGem.setTouchEnabled(true);

        ///// # _layoutItem
        this._layoutItem = new ccui.Layout();
        this._layoutItem.setName("_layoutItem");
        this._imgTop.addChild(this._layoutItem);
        this._layoutItem.setCascadeOpacityEnabled(true);
        this._layoutItem.setCascadeColorEnabled(true);
        this._layoutItem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutItem, 0.82, 0.5);
        let _layoutItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutItem);
        _layoutItemLayoutComponent.setPositionPercentXEnabled(true);
        _layoutItemLayoutComponent.setPositionPercentX(0.82);
        _layoutItemLayoutComponent.setPositionPercentYEnabled(true);
        _layoutItemLayoutComponent.setPositionPercentY(0.5);
        this._layoutItem.setTouchEnabled(true);
        this._layoutItem.setUnifySizeEnabled(false);
        this._layoutItem.ignoreContentAdaptWithSize(false);
        this._layoutItem.setContentSize(cc.size(150, 35));
        this._layoutItem.setBackGroundColorType(1);
        this._layoutItem.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutItem.setBackGroundColorOpacity(127);

        ///// # _imgItemIcon
        this._imgItemIcon = new ccui.ImageView();
        this._imgItemIcon.setName("_imgItemIcon");
        this._layoutItem.addChild(this._imgItemIcon);
        this._imgItemIcon.setCascadeOpacityEnabled(true);
        this._imgItemIcon.setCascadeColorEnabled(true);
        this._imgItemIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgItemIcon, 0, 0.5);
        let _imgItemIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgItemIcon);
        _imgItemIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgItemIconLayoutComponent.setPositionPercentX(0);
        _imgItemIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgItemIconLayoutComponent.setPositionPercentY(0.5);
        this._imgItemIcon.loadTexture("icons/color/items/Item.png", 1);
        this._imgItemIcon.setUnifySizeEnabled(false);
        this._imgItemIcon.ignoreContentAdaptWithSize(false);
        this._imgItemIcon.setContentSize(cc.size(37, 37));
        this._imgItemIcon.setTouchEnabled(false);

        ///// # _txtItem
        this._txtItem = new ck.Text();
        this._txtItem.setName("_txtItem");
        this._layoutItem.addChild(this._txtItem);
        this._txtItem.setCascadeOpacityEnabled(true);
        this._txtItem.setCascadeColorEnabled(true);
        this._txtItem.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtItem, 0.8802, 0.5);
        this._txtItem.setTextColor(cc.color(0, 213, 245, 255));
        let _txtItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtItem);
        _txtItemLayoutComponent.setPositionPercentXEnabled(true);
        _txtItemLayoutComponent.setPositionPercentX(0.8802);
        _txtItemLayoutComponent.setPositionPercentYEnabled(true);
        _txtItemLayoutComponent.setPositionPercentY(0.5);
        this._txtItem.setTouchEnabled(false);
        this._txtItem.setUnifySizeEnabled(false);
        this._txtItem.ignoreContentAdaptWithSize(false);
        this._txtItem.setContentSize(cc.size(110, 23));
        this._txtItem.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtItem.setDefaultFontSize(20);
        this._txtItem.setTextHorizontalAlignment(2);
        this._txtItem.setTextVerticalAlignment(1);
        this._txtItem.autoFitSingleLine();

        ///// # _btnAddItem
        this._btnAddItem = new ccui.Button();
        this._btnAddItem.setName("_btnAddItem");
        this._layoutItem.addChild(this._btnAddItem);
        this._btnAddItem.setCascadeOpacityEnabled(true);
        this._btnAddItem.setCascadeColorEnabled(true);
        this._btnAddItem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._btnAddItem, 1, 0.4757);
        let _btnAddItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnAddItem);
        _btnAddItemLayoutComponent.setPositionPercentXEnabled(true);
        _btnAddItemLayoutComponent.setPositionPercentX(1);
        _btnAddItemLayoutComponent.setPositionPercentYEnabled(true);
        _btnAddItemLayoutComponent.setPositionPercentY(0.4757);
        this._btnAddItem.loadTextureDisabled("buttons/rectangles/Add.png", 1);
        this._btnAddItem.loadTexturePressed("buttons/rectangles/Add.png", 1);
        this._btnAddItem.loadTextureNormal("buttons/rectangles/Add.png", 1);
        this._btnAddItem.setUnifySizeEnabled(false);
        this._btnAddItem.ignoreContentAdaptWithSize(false);
        this._btnAddItem.setContentSize(cc.size(40, 40));
        this._btnAddItem.setTouchEnabled(true);

        ///// # _tabSelector
        this._tabSelector = new ck.TabSelector();
        this._tabSelector.setName("_tabSelector");
        this._root.addChild(this._tabSelector);
        this._tabSelector.setCascadeOpacityEnabled(true);
        this._tabSelector.setCascadeColorEnabled(true);
        this._tabSelector.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._tabSelector, 0.562, 0.01);
        let _tabSelectorLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._tabSelector);
        _tabSelectorLayoutComponent.setPositionPercentXEnabled(true);
        _tabSelectorLayoutComponent.setPositionPercentX(0.562);
        _tabSelectorLayoutComponent.setPositionPercentYEnabled(true);
        _tabSelectorLayoutComponent.setPositionPercentY(0.01);
        _tabSelectorLayoutComponent.setPercentWidthEnabled(true);
        _tabSelectorLayoutComponent.setPercentWidth(0.864);
        _tabSelectorLayoutComponent.setPercentHeightEnabled(true);
        _tabSelectorLayoutComponent.setPercentHeight(0.068);

        ///// # _layoutClose
        this._layoutClose = new ccui.Layout();
        this._layoutClose.setName("_layoutClose");
        this._root.addChild(this._layoutClose);
        this._layoutClose.setCascadeOpacityEnabled(true);
        this._layoutClose.setCascadeColorEnabled(true);
        this._layoutClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutClose, 0.0645, 0.0436);
        let _layoutCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutClose);
        this._layoutClose.setTouchEnabled(true);
        this._layoutClose.setUnifySizeEnabled(false);
        this._layoutClose.ignoreContentAdaptWithSize(false);
        this._layoutClose.setContentSize(cc.size(70, 70));

        ///// # _imgCloseBg
        this._imgCloseBg = new ccui.ImageView();
        this._imgCloseBg.setName("_imgCloseBg");
        this._layoutClose.addChild(this._imgCloseBg);
        this._imgCloseBg.setCascadeOpacityEnabled(true);
        this._imgCloseBg.setCascadeColorEnabled(true);
        this._imgCloseBg.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgCloseBg, 0.5, 0.01);
        let _imgCloseBgLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCloseBg);
        _imgCloseBgLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseBgLayoutComponent.setPositionPercentX(0.5);
        _imgCloseBgLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseBgLayoutComponent.setPositionPercentY(0.01);
        _imgCloseBgLayoutComponent.setPercentWidthEnabled(true);
        _imgCloseBgLayoutComponent.setPercentWidth(1);
        _imgCloseBgLayoutComponent.setPercentHeightEnabled(true);
        _imgCloseBgLayoutComponent.setPercentHeight(1);
        this._imgCloseBg.loadTexture("buttons/circles/Gray.png", 1);
        this._imgCloseBg.setUnifySizeEnabled(false);
        this._imgCloseBg.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgCloseBg, 1, 1);
        this._imgCloseBg.setTouchEnabled(false);

        ///// # imgCloseIcon
        this.imgCloseIcon = new ccui.ImageView();
        this.imgCloseIcon.setName("imgCloseIcon");
        this._layoutClose.addChild(this.imgCloseIcon);
        this.imgCloseIcon.setCascadeOpacityEnabled(true);
        this.imgCloseIcon.setCascadeColorEnabled(true);
        this.imgCloseIcon.setAnchorPoint(cc.p(0.58, 0.55));
        ck.UIUtils.setPositionPercent(this.imgCloseIcon, 0.5, 0.5);
        let imgCloseIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgCloseIcon);
        imgCloseIconLayoutComponent.setPositionPercentXEnabled(true);
        imgCloseIconLayoutComponent.setPositionPercentX(0.5);
        imgCloseIconLayoutComponent.setPositionPercentYEnabled(true);
        imgCloseIconLayoutComponent.setPositionPercentY(0.5);
        this.imgCloseIcon.loadTexture("buttons/squares/ExitBlue.png", 1);
        this.imgCloseIcon.setUnifySizeEnabled(false);
        this.imgCloseIcon.ignoreContentAdaptWithSize(false);
        this.imgCloseIcon.setContentSize(cc.size(44, 38));
        this.imgCloseIcon.setTouchEnabled(false);

    },



});

/**
 * Create ProfilePopup
 * @returns {_ccs.ProfilePopup}
 */
_ccs.ProfilePopup.create = function () {
    return new _ccs.ProfilePopup();
};
