/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.DragonKnightNotEnoughTokenDialog
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.DragonKnightNotEnoughTokenDialog = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {ccui.ImageView} */
    _imgFont: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ck.Text} */
    _txtHeader: null,
    /** @type {ck.Text} */
    _txtMessage: null,
    /** @type {ccui.Layout} */
    _layoutNeedMore: null,
    /** @type {ck.Text} */
    _txtTokenAmount: null,
    /** @type {ccui.ImageView} */
    _imgToken: null,
    /** @type {ccui.ImageView} */
    _imgBuy: null,
    /** @type {ck.Text} */
    _txtBuy: null,
    /** @type {ccui.ImageView} */
    _imgPlay: null,
    /** @type {ck.Text} */
    _txtPlay: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,


    /**
     * _ccs.DragonKnightNotEnoughTokenDialog constructor
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
        this._root.setPosition(0, -0.0001);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(500, 500));

        ///// # _imgBack
        this._imgBack = new ccui.ImageView();
        this._imgBack.setName("_imgBack");
        this._root.addChild(this._imgBack);
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
        this._imgBack.loadTexture("basics/popup/Back.png", 1);
        this._imgBack.setUnifySizeEnabled(false);
        this._imgBack.ignoreContentAdaptWithSize(false);
        this._imgBack.setScale9Enabled(true);
        this._imgBack.setCapInsets(cc.rect(69, 57, 72, 61));
        ck.UIUtils.setSizePercent(this._imgBack, 1, 1);
        this._imgBack.setTouchEnabled(false);

        ///// # _imgFont
        this._imgFont = new ccui.ImageView();
        this._imgFont.setName("_imgFont");
        this._root.addChild(this._imgFont);
        this._imgFont.setCascadeOpacityEnabled(true);
        this._imgFont.setCascadeColorEnabled(true);
        this._imgFont.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgFont, 0.5, 0.5);
        let _imgFontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFont);
        _imgFontLayoutComponent.setPositionPercentXEnabled(true);
        _imgFontLayoutComponent.setPositionPercentX(0.5);
        _imgFontLayoutComponent.setPositionPercentYEnabled(true);
        _imgFontLayoutComponent.setPositionPercentY(0.5);
        _imgFontLayoutComponent.setPercentWidthEnabled(true);
        _imgFontLayoutComponent.setPercentWidth(0.9353);
        _imgFontLayoutComponent.setPercentHeightEnabled(true);
        _imgFontLayoutComponent.setPercentHeight(0.9353);
        this._imgFont.loadTexture("basics/popup/Font.png", 1);
        this._imgFont.setUnifySizeEnabled(false);
        this._imgFont.ignoreContentAdaptWithSize(false);
        this._imgFont.setScale9Enabled(true);
        this._imgFont.setCapInsets(cc.rect(52, 48, 49, 49));
        ck.UIUtils.setSizePercent(this._imgFont, 0.9353, 0.9353);
        this._imgFont.setTouchEnabled(false);

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._root.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 0.996);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(0.996);
        this._imgHeader.loadTexture("basics/popup/HeaderBlue.png", 1);
        this._imgHeader.setUnifySizeEnabled(false);
        this._imgHeader.ignoreContentAdaptWithSize(false);
        this._imgHeader.setContentSize(cc.size(346, 84));
        this._imgHeader.setTouchEnabled(false);

        ///// # _txtHeader
        this._txtHeader = new ck.Text();
        this._txtHeader.setName("_txtHeader");
        this._imgHeader.addChild(this._txtHeader);
        this._txtHeader.setCascadeOpacityEnabled(true);
        this._txtHeader.setCascadeColorEnabled(true);
        this._txtHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHeader, 0.5, 0.55);
        this._txtHeader.setTextColor(cc.color(222, 247, 255, 255));
        let _txtHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHeader);
        _txtHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentX(0.5);
        _txtHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentY(0.55);
        this._txtHeader.setTouchEnabled(false);
        this._txtHeader.ignoreContentAdaptWithSize(true);
        this._txtHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHeader.setDefaultFontSize(55);
        this._txtHeader.setString(gm.localize.getText("TXT_ALERT"));
        this._txtHeader.setTextHorizontalAlignment(1);
        this._txtHeader.setTextVerticalAlignment(1);
        this._txtHeader.enableOutline(cc.color(41, 107, 130, 255), 3);
        this._txtHeader.enableShadow(cc.color(63, 147, 186, 255), cc.size(0, -2), 0);

        ///// # _txtMessage
        this._txtMessage = new ck.Text();
        this._txtMessage.setName("_txtMessage");
        this._root.addChild(this._txtMessage);
        this._txtMessage.setCascadeOpacityEnabled(true);
        this._txtMessage.setCascadeColorEnabled(true);
        this._txtMessage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMessage, 0.5, 0.7161);
        this._txtMessage.setTextColor(cc.color(47, 118, 172, 255));
        let _txtMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMessage);
        _txtMessageLayoutComponent.setPositionPercentXEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentX(0.5);
        _txtMessageLayoutComponent.setPositionPercentYEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentY(0.7161);
        _txtMessageLayoutComponent.setPercentWidthEnabled(true);
        _txtMessageLayoutComponent.setPercentWidth(0.89);
        _txtMessageLayoutComponent.setPercentHeightEnabled(true);
        _txtMessageLayoutComponent.setPercentHeight(0.078);
        this._txtMessage.setTouchEnabled(false);
        this._txtMessage.ignoreContentAdaptWithSize(true);
        this._txtMessage.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMessage.setDefaultFontSize(35);
        this._txtMessage.setString(gm.localize.getText("TXT_DRAGON_KNIGHT_MISSING_TOKEN_MESSAGE"));
        this._txtMessage.setTextHorizontalAlignment(1);
        this._txtMessage.setTextVerticalAlignment(1);

        ///// # _layoutNeedMore
        this._layoutNeedMore = new ccui.Layout();
        this._layoutNeedMore.setName("_layoutNeedMore");
        this._root.addChild(this._layoutNeedMore);
        this._layoutNeedMore.setCascadeOpacityEnabled(true);
        this._layoutNeedMore.setCascadeColorEnabled(true);
        this._layoutNeedMore.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutNeedMore, 0.5, 0.606);
        let _layoutNeedMoreLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutNeedMore);
        _layoutNeedMoreLayoutComponent.setPositionPercentXEnabled(true);
        _layoutNeedMoreLayoutComponent.setPositionPercentX(0.5);
        _layoutNeedMoreLayoutComponent.setPositionPercentYEnabled(true);
        _layoutNeedMoreLayoutComponent.setPositionPercentY(0.606);
        this._layoutNeedMore.setTouchEnabled(false);
        this._layoutNeedMore.setUnifySizeEnabled(false);
        this._layoutNeedMore.ignoreContentAdaptWithSize(false);
        this._layoutNeedMore.setContentSize(cc.size(421.6, 85.9391));

        ///// # _txtTokenAmount
        this._txtTokenAmount = new ck.Text();
        this._txtTokenAmount.setName("_txtTokenAmount");
        this._layoutNeedMore.addChild(this._txtTokenAmount);
        this._txtTokenAmount.setCascadeOpacityEnabled(true);
        this._txtTokenAmount.setCascadeColorEnabled(true);
        this._txtTokenAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTokenAmount, 0.4345, 0.0067);
        let _txtTokenAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTokenAmount);
        _txtTokenAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtTokenAmountLayoutComponent.setPositionPercentX(0.4345);
        _txtTokenAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtTokenAmountLayoutComponent.setPositionPercentY(0.0067);
        _txtTokenAmountLayoutComponent.setPercentWidthEnabled(true);
        _txtTokenAmountLayoutComponent.setPercentWidth(0.2111);
        _txtTokenAmountLayoutComponent.setPercentHeightEnabled(true);
        _txtTokenAmountLayoutComponent.setPercentHeight(0.7331);
        this._txtTokenAmount.setTouchEnabled(false);
        this._txtTokenAmount.ignoreContentAdaptWithSize(true);
        this._txtTokenAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtTokenAmount.setDefaultFontSize(50);
        this._txtTokenAmount.setString("100");
        this._txtTokenAmount.setTextHorizontalAlignment(1);
        this._txtTokenAmount.setTextVerticalAlignment(1);
        this._txtTokenAmount.enableOutline(cc.color(74, 53, 0, 255), 3);

        ///// # _imgToken
        this._imgToken = new ccui.ImageView();
        this._imgToken.setName("_imgToken");
        this._layoutNeedMore.addChild(this._imgToken);
        this._imgToken.setCascadeOpacityEnabled(true);
        this._imgToken.setCascadeColorEnabled(true);
        this._imgToken.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgToken, 0.6093, 0.0143);
        let _imgTokenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgToken);
        _imgTokenLayoutComponent.setPositionPercentXEnabled(true);
        _imgTokenLayoutComponent.setPositionPercentX(0.6093);
        _imgTokenLayoutComponent.setPositionPercentYEnabled(true);
        _imgTokenLayoutComponent.setPositionPercentY(0.0143);
        this._imgToken.loadTexture("dragon-knight/DragonEggSmall.png", 1);
        this._imgToken.setUnifySizeEnabled(false);
        this._imgToken.ignoreContentAdaptWithSize(false);
        this._imgToken.setContentSize(cc.size(45, 49));
        this._imgToken.setTouchEnabled(true);

        ///// # _imgBuy
        this._imgBuy = new ccui.ImageView();
        this._imgBuy.setName("_imgBuy");
        this._root.addChild(this._imgBuy);
        this._imgBuy.setCascadeOpacityEnabled(true);
        this._imgBuy.setCascadeColorEnabled(true);
        this._imgBuy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBuy, 0.72, 0.16);
        let _imgBuyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBuy);
        _imgBuyLayoutComponent.setPositionPercentXEnabled(true);
        _imgBuyLayoutComponent.setPositionPercentX(0.72);
        _imgBuyLayoutComponent.setPositionPercentYEnabled(true);
        _imgBuyLayoutComponent.setPositionPercentY(0.16);
        this._imgBuy.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgBuy.setUnifySizeEnabled(false);
        this._imgBuy.ignoreContentAdaptWithSize(false);
        this._imgBuy.setContentSize(cc.size(205.99, 81.0026));
        this._imgBuy.setTouchEnabled(true);

        ///// # _txtBuy
        this._txtBuy = new ck.Text();
        this._txtBuy.setName("_txtBuy");
        this._imgBuy.addChild(this._txtBuy);
        this._txtBuy.setCascadeOpacityEnabled(true);
        this._txtBuy.setCascadeColorEnabled(true);
        this._txtBuy.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtBuy, 0.5, 0.55);
        let _txtBuyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtBuy);
        _txtBuyLayoutComponent.setPositionPercentXEnabled(true);
        _txtBuyLayoutComponent.setPositionPercentX(0.5);
        _txtBuyLayoutComponent.setPositionPercentYEnabled(true);
        _txtBuyLayoutComponent.setPositionPercentY(0.55);
        this._txtBuy.setTouchEnabled(false);
        this._txtBuy.ignoreContentAdaptWithSize(true);
        this._txtBuy.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtBuy.setDefaultFontSize(40);
        this._txtBuy.setString(gm.localize.getText("TXT_BUY"));
        this._txtBuy.setTextHorizontalAlignment(1);
        this._txtBuy.setTextVerticalAlignment(1);
        this._txtBuy.enableOutline(cc.color(158, 82, 9, 255), 3);

        ///// # _imgPlay
        this._imgPlay = new ccui.ImageView();
        this._imgPlay.setName("_imgPlay");
        this._root.addChild(this._imgPlay);
        this._imgPlay.setCascadeOpacityEnabled(true);
        this._imgPlay.setCascadeColorEnabled(true);
        this._imgPlay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPlay, 0.28, 0.16);
        let _imgPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPlay);
        _imgPlayLayoutComponent.setPositionPercentXEnabled(true);
        _imgPlayLayoutComponent.setPositionPercentX(0.28);
        _imgPlayLayoutComponent.setPositionPercentYEnabled(true);
        _imgPlayLayoutComponent.setPositionPercentY(0.16);
        this._imgPlay.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgPlay.setUnifySizeEnabled(false);
        this._imgPlay.ignoreContentAdaptWithSize(false);
        this._imgPlay.setContentSize(cc.size(206, 81));
        this._imgPlay.setTouchEnabled(true);

        ///// # _txtPlay
        this._txtPlay = new ck.Text();
        this._txtPlay.setName("_txtPlay");
        this._imgPlay.addChild(this._txtPlay);
        this._txtPlay.setCascadeOpacityEnabled(true);
        this._txtPlay.setCascadeColorEnabled(true);
        this._txtPlay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPlay, 0.5, 0.55);
        let _txtPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPlay);
        _txtPlayLayoutComponent.setPositionPercentXEnabled(true);
        _txtPlayLayoutComponent.setPositionPercentX(0.5);
        _txtPlayLayoutComponent.setPositionPercentYEnabled(true);
        _txtPlayLayoutComponent.setPositionPercentY(0.55);
        this._txtPlay.setTouchEnabled(false);
        this._txtPlay.ignoreContentAdaptWithSize(true);
        this._txtPlay.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtPlay.setDefaultFontSize(40);
        this._txtPlay.setString(gm.localize.getText("TXT_PLAY"));
        this._txtPlay.setTextHorizontalAlignment(1);
        this._txtPlay.setTextVerticalAlignment(1);
        this._txtPlay.enableOutline(cc.color(0, 90, 0, 255), 3);

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._root.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.97, 0.97);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.97);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.97);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(81, 83));
        this._imgClose.setTouchEnabled(true);

    },



});

/**
 * Create DragonKnightNotEnoughTokenDialog
 * @returns {_ccs.DragonKnightNotEnoughTokenDialog}
 */
_ccs.DragonKnightNotEnoughTokenDialog.create = function () {
    return new _ccs.DragonKnightNotEnoughTokenDialog();
};
