/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ShopPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.ShopPopup = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ccui.ImageView} */
    _imgTop: null,
    /** @type {ccui.Layout} */
    _layoutGem: null,
    /** @type {ccui.ImageView} */
    _imgGemIcon: null,
    /** @type {ck.Text} */
    _txtGem: null,
    /** @type {ccui.Button} */
    _btnAddGem: null,
    /** @type {ccui.Layout} */
    _layoutCoin: null,
    /** @type {ccui.ImageView} */
    _imgCoinIcon: null,
    /** @type {ck.Text} */
    _txtCoin: null,
    /** @type {ccui.Button} */
    _btnAddCoin: null,
    /** @type {ccui.ImageView} */
    _inventoryBoard: null,
    /** @type {ccui.ImageView} */
    _inventoryIcon: null,
    /** @type {ck.GridViewVertical} */
    _gridItems: null,
    /** @type {ck.TableView} */
    _tableViewPacks: null,
    /** @type {ck.TabSelector} */
    _tabSelector: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.ImageView} */
    imgCloseIcon: null,
    /** @type {ShopPackInfoPopup} */
    _popupInfo: null,


    /**
     * _ccs.ShopPopup constructor
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
            _imgBgrLayoutComponent.setPercentHeight(1.0035);
        }
        this._imgBgr.loadTexture("sprites/backgrounds/Login.png", 0);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._imgBgr, 1, 1.0035);
        this._imgBgr.setTouchEnabled(false);
        UIUtils.initFullScreenBackground(this._imgBgr);

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

        ///// # _layoutGem
        this._layoutGem = new ccui.Layout();
        this._layoutGem.setName("_layoutGem");
        this._imgTop.addChild(this._layoutGem);
        this._layoutGem.setCascadeOpacityEnabled(true);
        this._layoutGem.setCascadeColorEnabled(true);
        this._layoutGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutGem, 0.3, 0.5);
        let _layoutGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGem);
        _layoutGemLayoutComponent.setPositionPercentXEnabled(true);
        _layoutGemLayoutComponent.setPositionPercentX(0.3);
        _layoutGemLayoutComponent.setPositionPercentYEnabled(true);
        _layoutGemLayoutComponent.setPositionPercentY(0.5);
        this._layoutGem.setTouchEnabled(true);
        this._layoutGem.setUnifySizeEnabled(false);
        this._layoutGem.ignoreContentAdaptWithSize(false);
        this._layoutGem.setContentSize(cc.size(180, 35));
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
        this._txtGem.ignoreContentAdaptWithSize(true);
        this._txtGem.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtGem.setDefaultFontSize(20);
        this._txtGem.setTextHorizontalAlignment(1);
        this._txtGem.setTextVerticalAlignment(1);

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

        ///// # _layoutCoin
        this._layoutCoin = new ccui.Layout();
        this._layoutCoin.setName("_layoutCoin");
        this._imgTop.addChild(this._layoutCoin);
        this._layoutCoin.setCascadeOpacityEnabled(true);
        this._layoutCoin.setCascadeColorEnabled(true);
        this._layoutCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCoin, 0.7, 0.5);
        let _layoutCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCoin);
        _layoutCoinLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentX(0.7);
        _layoutCoinLayoutComponent.setPositionPercentYEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentY(0.5);
        this._layoutCoin.setTouchEnabled(true);
        this._layoutCoin.setUnifySizeEnabled(false);
        this._layoutCoin.ignoreContentAdaptWithSize(false);
        this._layoutCoin.setContentSize(cc.size(180, 35));
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
        this._txtCoin.ignoreContentAdaptWithSize(true);
        this._txtCoin.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtCoin.setDefaultFontSize(20);
        this._txtCoin.setTextHorizontalAlignment(1);
        this._txtCoin.setTextVerticalAlignment(1);

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

        ///// # _inventoryBoard
        this._inventoryBoard = new ccui.ImageView();
        this._inventoryBoard.setName("_inventoryBoard");
        this._root.addChild(this._inventoryBoard);
        this._inventoryBoard.setCascadeOpacityEnabled(true);
        this._inventoryBoard.setCascadeColorEnabled(true);
        this._inventoryBoard.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._inventoryBoard, 0.5, 0.8541);
        let _inventoryBoardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._inventoryBoard);
        _inventoryBoardLayoutComponent.setPositionPercentXEnabled(true);
        _inventoryBoardLayoutComponent.setPositionPercentX(0.5);
        _inventoryBoardLayoutComponent.setPositionPercentYEnabled(true);
        _inventoryBoardLayoutComponent.setPositionPercentY(0.8541);
        _inventoryBoardLayoutComponent.setPercentWidthEnabled(true);
        _inventoryBoardLayoutComponent.setPercentWidth(0.95);
        this._inventoryBoard.loadTexture("basics/other/HalfCircleBoard.png", 1);
        this._inventoryBoard.setUnifySizeEnabled(false);
        this._inventoryBoard.ignoreContentAdaptWithSize(false);
        this._inventoryBoard.setScale9Enabled(true);
        this._inventoryBoard.setCapInsets(cc.rect(67, 53, 6, 55));
        ck.UIUtils.setWidthPercent(this._inventoryBoard, 0.95);
        this._inventoryBoard.setContentSize(cc.size(this._inventoryBoard.width, 161));
        this._inventoryBoard.setTouchEnabled(false);

        ///// # _inventoryIcon
        this._inventoryIcon = new ccui.ImageView();
        this._inventoryIcon.setName("_inventoryIcon");
        this._inventoryBoard.addChild(this._inventoryIcon);
        this._inventoryIcon.setCascadeOpacityEnabled(true);
        this._inventoryIcon.setCascadeColorEnabled(true);
        this._inventoryIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._inventoryIcon, 0.05, 0.55);
        let _inventoryIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._inventoryIcon);
        _inventoryIconLayoutComponent.setPositionPercentXEnabled(true);
        _inventoryIconLayoutComponent.setPositionPercentX(0.05);
        _inventoryIconLayoutComponent.setPositionPercentYEnabled(true);
        _inventoryIconLayoutComponent.setPositionPercentY(0.55);
        this._inventoryIcon.loadTexture("icons/color/basic/Inventory.png", 1);
        this._inventoryIcon.setUnifySizeEnabled(false);
        this._inventoryIcon.ignoreContentAdaptWithSize(false);
        this._inventoryIcon.setScale9Enabled(true);
        this._inventoryIcon.setCapInsets(cc.rect(24, 22, 25, 25));
        this._inventoryIcon.setContentSize(cc.size(73, 69));
        this._inventoryIcon.setTouchEnabled(false);

        ///// # _gridItems
        this._gridItems = new ck.GridViewVertical();
        this._gridItems.setName("_gridItems");
        this._inventoryBoard.addChild(this._gridItems);
        this._gridItems.setCascadeOpacityEnabled(true);
        this._gridItems.setCascadeColorEnabled(true);
        this._gridItems.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridItems, 0.5523, 0.5376);
        let _gridItemsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridItems);
        _gridItemsLayoutComponent.setPositionPercentXEnabled(true);
        _gridItemsLayoutComponent.setPositionPercentX(0.5523);
        _gridItemsLayoutComponent.setPositionPercentYEnabled(true);
        _gridItemsLayoutComponent.setPositionPercentY(0.5376);

        ///// # _tableViewPacks
        this._tableViewPacks = new ck.TableView();
        this._tableViewPacks.setName("_tableViewPacks");
        this._root.addChild(this._tableViewPacks);
        this._tableViewPacks.setCascadeOpacityEnabled(true);
        this._tableViewPacks.setCascadeColorEnabled(true);
        this._tableViewPacks.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._tableViewPacks, 0.5, 0.08);
        let _tableViewPacksLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._tableViewPacks);
        _tableViewPacksLayoutComponent.setPositionPercentXEnabled(true);
        _tableViewPacksLayoutComponent.setPositionPercentX(0.5);
        _tableViewPacksLayoutComponent.setPositionPercentYEnabled(true);
        _tableViewPacksLayoutComponent.setPositionPercentY(0.08);
        _tableViewPacksLayoutComponent.setPercentWidthEnabled(true);
        _tableViewPacksLayoutComponent.setPercentWidth(0.95);
        _tableViewPacksLayoutComponent.setPercentHeightEnabled(true);
        _tableViewPacksLayoutComponent.setPercentHeight(0.6985);

        ///// # _tabSelector
        this._tabSelector = new ck.TabSelector();
        this._tabSelector.setName("_tabSelector");
        this._root.addChild(this._tabSelector);
        this._tabSelector.setCascadeOpacityEnabled(true);
        this._tabSelector.setCascadeColorEnabled(true);
        this._tabSelector.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._tabSelector, 0.5, 0.04);
        let _tabSelectorLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._tabSelector);
        _tabSelectorLayoutComponent.setPositionPercentXEnabled(true);
        _tabSelectorLayoutComponent.setPositionPercentX(0.5);
        _tabSelectorLayoutComponent.setPositionPercentYEnabled(true);
        _tabSelectorLayoutComponent.setPositionPercentY(0.04);
        _tabSelectorLayoutComponent.setPercentWidthEnabled(true);
        _tabSelectorLayoutComponent.setPercentWidth(0.7031);
        _tabSelectorLayoutComponent.setPercentHeightEnabled(true);
        _tabSelectorLayoutComponent.setPercentHeight(0.068);

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._root.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.0788, 0.0355);
        this._imgClose.setScale(0.85, 0.85);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.0788);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.0355);
        this._imgClose.loadTexture("buttons/circles/Gray.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(80, 82));
        this._imgClose.setTouchEnabled(true);

        ///// # imgCloseIcon
        this.imgCloseIcon = new ccui.ImageView();
        this.imgCloseIcon.setName("imgCloseIcon");
        this._imgClose.addChild(this.imgCloseIcon);
        this.imgCloseIcon.setCascadeOpacityEnabled(true);
        this.imgCloseIcon.setCascadeColorEnabled(true);
        this.imgCloseIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgCloseIcon, 0.475, 0.4878);
        let imgCloseIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgCloseIcon);
        imgCloseIconLayoutComponent.setPositionPercentXEnabled(true);
        imgCloseIconLayoutComponent.setPositionPercentX(0.475);
        imgCloseIconLayoutComponent.setPositionPercentYEnabled(true);
        imgCloseIconLayoutComponent.setPositionPercentY(0.4878);
        this.imgCloseIcon.loadTexture("buttons/squares/ExitBlue.png", 1);
        this.imgCloseIcon.setUnifySizeEnabled(false);
        this.imgCloseIcon.ignoreContentAdaptWithSize(false);
        this.imgCloseIcon.setContentSize(cc.size(44, 38));
        this.imgCloseIcon.setTouchEnabled(false);

        ///// # _popupInfo
        this._popupInfo = new ShopPackInfoPopup();
        this._popupInfo.setName("_popupInfo");
        this._root.addChild(this._popupInfo);
        this._popupInfo.setCascadeOpacityEnabled(true);
        this._popupInfo.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._popupInfo, 0.5, 0.5);
        let _popupInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._popupInfo);
        _popupInfoLayoutComponent.setPositionPercentXEnabled(true);
        _popupInfoLayoutComponent.setPositionPercentX(0.5);
        _popupInfoLayoutComponent.setPositionPercentYEnabled(true);
        _popupInfoLayoutComponent.setPositionPercentY(0.5);

    },



});

/**
 * Create ShopPopup
 * @returns {_ccs.ShopPopup}
 */
_ccs.ShopPopup.create = function () {
    return new _ccs.ShopPopup();
};
