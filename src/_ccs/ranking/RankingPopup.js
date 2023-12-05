/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.RankingPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.RankingPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {cc.Sprite} */
    _iconLeft: null,
    /** @type {cc.Sprite} */
    _iconRight: null,
    /** @type {ccui.ImageView} */
    _imgFont: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ck.Text} */
    _txtHeader: null,
    /** @type {ck.Text} */
    _txtTimeLeft: null,
    /** @type {ck.Text} */
    _txtWaitForSorting: null,
    /** @type {ck.Text} */
    _txtGroupName: null,
    /** @type {RankingPlayerWidget} */
    _me: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.ImageView} */
    _imgInfo: null,
    /** @type {ccui.ImageView} */
    _imgInfoIcon: null,
    /** @type {ccui.Layout} */
    _layoutPlayers: null,
    /** @type {ck.Text} */
    _txtHint: null,


    /**
     * _ccs.RankingPopup constructor
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
        this._layoutPopup.setPosition(-0.0002, 0.0004);
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
        this._imgBack.loadTexture("basics/popup/Back.png", 1);
        this._imgBack.setUnifySizeEnabled(false);
        this._imgBack.ignoreContentAdaptWithSize(false);
        this._imgBack.setScale9Enabled(true);
        this._imgBack.setCapInsets(cc.rect(69, 57, 72, 61));
        ck.UIUtils.setSizePercent(this._imgBack, 1, 1);
        this._imgBack.setTouchEnabled(false);

        ///// # _iconLeft
        this._iconLeft = new cc.Sprite();
        this._iconLeft.setName("_iconLeft");
        this._layoutPopup.addChild(this._iconLeft);
        this._iconLeft.setCascadeOpacityEnabled(true);
        this._iconLeft.setCascadeColorEnabled(true);
        this._iconLeft.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._iconLeft, 0.1445, 1.0269);
        let _iconLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._iconLeft);
        let sf = cc.spriteFrameCache.getSpriteFrame("ranking/Icon_01.png"); if (sf) this._iconLeft.setSpriteFrame(sf);
        let _iconLeftBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _iconLeftBlendFunc.src = 1;
        _iconLeftBlendFunc.dst = 771;
        this._iconLeft.setBlendFunc(_iconLeftBlendFunc);

        ///// # _iconRight
        this._iconRight = new cc.Sprite();
        this._iconRight.setName("_iconRight");
        this._layoutPopup.addChild(this._iconRight);
        this._iconRight.setCascadeOpacityEnabled(true);
        this._iconRight.setCascadeColorEnabled(true);
        this._iconRight.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._iconRight, 0.8732, 1.0502);
        let _iconRightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._iconRight);
        let sf = cc.spriteFrameCache.getSpriteFrame("ranking/Icon_02.png"); if (sf) this._iconRight.setSpriteFrame(sf);
        let _iconRightBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _iconRightBlendFunc.src = 1;
        _iconRightBlendFunc.dst = 771;
        this._iconRight.setBlendFunc(_iconRightBlendFunc);

        ///// # _imgFont
        this._imgFont = new ccui.ImageView();
        this._imgFont.setName("_imgFont");
        this._layoutPopup.addChild(this._imgFont);
        this._imgFont.setCascadeOpacityEnabled(true);
        this._imgFont.setCascadeColorEnabled(true);
        this._imgFont.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgFont, 0.5, 0.98);
        let _imgFontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFont);
        _imgFontLayoutComponent.setPositionPercentXEnabled(true);
        _imgFontLayoutComponent.setPositionPercentX(0.5);
        _imgFontLayoutComponent.setPositionPercentYEnabled(true);
        _imgFontLayoutComponent.setPositionPercentY(0.98);
        _imgFontLayoutComponent.setPercentWidthEnabled(true);
        _imgFontLayoutComponent.setPercentWidth(0.95);
        _imgFontLayoutComponent.setPercentHeightEnabled(true);
        _imgFontLayoutComponent.setPercentHeight(0.892);
        this._imgFont.loadTexture("basics/popup/Font.png", 1);
        this._imgFont.setUnifySizeEnabled(false);
        this._imgFont.ignoreContentAdaptWithSize(false);
        this._imgFont.setScale9Enabled(true);
        this._imgFont.setCapInsets(cc.rect(69, 57, 15, 31));
        ck.UIUtils.setSizePercent(this._imgFont, 0.95, 0.892);
        this._imgFont.setTouchEnabled(false);

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._layoutPopup.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 0.9945);
        this._imgHeader.setRotation(-0.1547);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(0.9945);
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
        this._txtHeader.setTextColor(cc.color(255, 252, 225, 255));
        let _txtHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHeader);
        _txtHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentX(0.5);
        _txtHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentY(0.55);
        this._txtHeader.setTouchEnabled(false);
        this._txtHeader.ignoreContentAdaptWithSize(true);
        this._txtHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHeader.setDefaultFontSize(55);
        this._txtHeader.setString(gm.localize.getText("TXT_RANKING"));
        this._txtHeader.setTextHorizontalAlignment(1);
        this._txtHeader.setTextVerticalAlignment(1);
        this._txtHeader.enableOutline(cc.color(155, 68, 38, 255), 2);
        this._txtHeader.enableShadow(cc.color(155, 68, 38, 255), cc.size(0, -2), 0);

        ///// # _txtTimeLeft
        this._txtTimeLeft = new ck.Text();
        this._txtTimeLeft.setName("_txtTimeLeft");
        this._layoutPopup.addChild(this._txtTimeLeft);
        this._txtTimeLeft.setCascadeOpacityEnabled(true);
        this._txtTimeLeft.setCascadeColorEnabled(true);
        this._txtTimeLeft.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTimeLeft, 0.5, 0.8658);
        this._txtTimeLeft.setTextColor(cc.color(135, 110, 80, 255));
        let _txtTimeLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTimeLeft);
        _txtTimeLeftLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentX(0.5);
        _txtTimeLeftLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentY(0.8658);
        this._txtTimeLeft.setTouchEnabled(false);
        this._txtTimeLeft.ignoreContentAdaptWithSize(true);
        this._txtTimeLeft.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTimeLeft.setDefaultFontSize(27);
        this._txtTimeLeft.setTextHorizontalAlignment(1);
        this._txtTimeLeft.setTextVerticalAlignment(1);

        ///// # _txtWaitForSorting
        this._txtWaitForSorting = new ck.Text();
        this._txtWaitForSorting.setName("_txtWaitForSorting");
        this._layoutPopup.addChild(this._txtWaitForSorting);
        this._txtWaitForSorting.setCascadeOpacityEnabled(true);
        this._txtWaitForSorting.setCascadeColorEnabled(true);
        this._txtWaitForSorting.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtWaitForSorting, 0.5185, 0.8706);
        this._txtWaitForSorting.setVisible(false);
        this._txtWaitForSorting.setTextColor(cc.color(0, 96, 148, 255));
        let _txtWaitForSortingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtWaitForSorting);
        _txtWaitForSortingLayoutComponent.setPositionPercentXEnabled(true);
        _txtWaitForSortingLayoutComponent.setPositionPercentX(0.5185);
        _txtWaitForSortingLayoutComponent.setPositionPercentYEnabled(true);
        _txtWaitForSortingLayoutComponent.setPositionPercentY(0.8706);
        this._txtWaitForSorting.setTouchEnabled(false);
        this._txtWaitForSorting.ignoreContentAdaptWithSize(true);
        this._txtWaitForSorting.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtWaitForSorting.setDefaultFontSize(25);
        this._txtWaitForSorting.setString(gm.localize.getText("TXT_RANKING_WAIT_FOR_SORTING"));
        this._txtWaitForSorting.setTextHorizontalAlignment(1);
        this._txtWaitForSorting.setTextVerticalAlignment(1);

        ///// # _txtGroupName
        this._txtGroupName = new ck.Text();
        this._txtGroupName.setName("_txtGroupName");
        this._layoutPopup.addChild(this._txtGroupName);
        this._txtGroupName.setCascadeOpacityEnabled(true);
        this._txtGroupName.setCascadeColorEnabled(true);
        this._txtGroupName.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtGroupName, 0.5, 0.9104);
        this._txtGroupName.setTextColor(cc.color(167, 104, 53, 255));
        let _txtGroupNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtGroupName);
        _txtGroupNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtGroupNameLayoutComponent.setPositionPercentX(0.5);
        _txtGroupNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtGroupNameLayoutComponent.setPositionPercentY(0.9104);
        this._txtGroupName.setTouchEnabled(false);
        this._txtGroupName.ignoreContentAdaptWithSize(true);
        this._txtGroupName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtGroupName.setDefaultFontSize(35);
        this._txtGroupName.setTextHorizontalAlignment(1);
        this._txtGroupName.setTextVerticalAlignment(1);

        ///// # _me
        this._me = new RankingPlayerWidget();
        this._me.setName("_me");
        this._layoutPopup.addChild(this._me);
        this._me.setCascadeOpacityEnabled(true);
        this._me.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._me, 0.4778, 0.13);
        this._me.setScale(1.1, 1.1);
        let _meLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._me);
        _meLayoutComponent.setPositionPercentXEnabled(true);
        _meLayoutComponent.setPositionPercentX(0.4778);
        _meLayoutComponent.setPositionPercentYEnabled(true);
        _meLayoutComponent.setPositionPercentY(0.13);

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._layoutPopup.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.98, 0.98);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.98);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.98);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(81, 83));
        this._imgClose.setTouchEnabled(false);

        ///// # _imgInfo
        this._imgInfo = new ccui.ImageView();
        this._imgInfo.setName("_imgInfo");
        this._layoutPopup.addChild(this._imgInfo);
        this._imgInfo.setCascadeOpacityEnabled(true);
        this._imgInfo.setCascadeColorEnabled(true);
        this._imgInfo.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgInfo, 0.0869, 0.9387);
        let _imgInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgInfo);
        _imgInfoLayoutComponent.setPositionPercentXEnabled(true);
        _imgInfoLayoutComponent.setPositionPercentX(0.0869);
        _imgInfoLayoutComponent.setPositionPercentYEnabled(true);
        _imgInfoLayoutComponent.setPositionPercentY(0.9387);
        this._imgInfo.loadTexture("buttons/squares/Info.png", 1);
        this._imgInfo.setUnifySizeEnabled(false);
        this._imgInfo.ignoreContentAdaptWithSize(false);
        this._imgInfo.setContentSize(cc.size(55, 53));
        this._imgInfo.setTouchEnabled(true);

        ///// # _imgInfoIcon
        this._imgInfoIcon = new ccui.ImageView();
        this._imgInfoIcon.setName("_imgInfoIcon");
        this._imgInfo.addChild(this._imgInfoIcon);
        this._imgInfoIcon.setCascadeOpacityEnabled(true);
        this._imgInfoIcon.setCascadeColorEnabled(true);
        this._imgInfoIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgInfoIcon, 0.5, 0.5689);
        let _imgInfoIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgInfoIcon);
        _imgInfoIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgInfoIconLayoutComponent.setPositionPercentX(0.5);
        _imgInfoIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgInfoIconLayoutComponent.setPositionPercentY(0.5689);
        this._imgInfoIcon.loadTexture("icons/flat/Info.png", 1);
        this._imgInfoIcon.setUnifySizeEnabled(false);
        this._imgInfoIcon.ignoreContentAdaptWithSize(false);
        this._imgInfoIcon.setContentSize(cc.size(14, 32));
        this._imgInfoIcon.setTouchEnabled(false);

        ///// # _layoutPlayers
        this._layoutPlayers = new ccui.Layout();
        this._layoutPlayers.setName("_layoutPlayers");
        this._layoutPopup.addChild(this._layoutPlayers);
        this._layoutPlayers.setCascadeOpacityEnabled(true);
        this._layoutPlayers.setCascadeColorEnabled(true);
        this._layoutPlayers.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutPlayers, 0.5, 0.4949);
        this._layoutPlayers.setVisible(false);
        let _layoutPlayersLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPlayers);
        _layoutPlayersLayoutComponent.setPositionPercentXEnabled(true);
        _layoutPlayersLayoutComponent.setPositionPercentX(0.5);
        _layoutPlayersLayoutComponent.setPositionPercentYEnabled(true);
        _layoutPlayersLayoutComponent.setPositionPercentY(0.4949);
        _layoutPlayersLayoutComponent.setPercentWidthEnabled(true);
        _layoutPlayersLayoutComponent.setPercentWidth(0.91);
        _layoutPlayersLayoutComponent.setPercentHeightEnabled(true);
        _layoutPlayersLayoutComponent.setPercentHeight(0.6785);
        this._layoutPlayers.setTouchEnabled(false);
        this._layoutPlayers.setUnifySizeEnabled(false);
        this._layoutPlayers.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutPlayers, 0.91, 0.6785);
        this._layoutPlayers.setBackGroundColorType(1);
        this._layoutPlayers.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutPlayers.setBackGroundColorOpacity(102);

        ///// # _txtHint
        this._txtHint = new ck.Text();
        this._txtHint.setName("_txtHint");
        this._layoutPopup.addChild(this._txtHint);
        this._txtHint.setCascadeOpacityEnabled(true);
        this._txtHint.setCascadeColorEnabled(true);
        this._txtHint.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHint, 0.5, 0.0402);
        this._txtHint.setTextColor(cc.color(92, 219, 167, 255));
        let _txtHintLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHint);
        _txtHintLayoutComponent.setPositionPercentXEnabled(true);
        _txtHintLayoutComponent.setPositionPercentX(0.5);
        _txtHintLayoutComponent.setPositionPercentYEnabled(true);
        _txtHintLayoutComponent.setPositionPercentY(0.0402);
        this._txtHint.setTouchEnabled(false);
        this._txtHint.ignoreContentAdaptWithSize(true);
        this._txtHint.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHint.setDefaultFontSize(27);
        this._txtHint.setString(gm.localize.getText("TXT_RANKING_HINT"));
        this._txtHint.setTextHorizontalAlignment(1);
        this._txtHint.setTextVerticalAlignment(1);

    },



});

/**
 * Create RankingPopup
 * @returns {_ccs.RankingPopup}
 */
_ccs.RankingPopup.create = function () {
    return new _ccs.RankingPopup();
};
