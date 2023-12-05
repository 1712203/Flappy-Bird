/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.LeagueEmptyPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.LeagueEmptyPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {ccui.ImageView} */
    _imgFont: null,
    /** @type {ck.Text} */
    _txtName1: null,
    /** @type {ck.Text} */
    _txtName2: null,
    /** @type {ck.Text} */
    _txtName3: null,
    /** @type {ck.Text} */
    _txtName4: null,
    /** @type {ck.Text} */
    _txtName5: null,
    /** @type {ck.Text} */
    _txtName6: null,
    /** @type {ck.Text} */
    _txtName7: null,
    /** @type {ccui.ImageView} */
    _imgYouAreHere: null,
    /** @type {ck.Text} */
    _txtYouAreHere: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ck.Text} */
    _txtHeader: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.ImageView} */
    _imgInfo: null,
    /** @type {ccui.ImageView} */
    _imgInfoIcon: null,
    /** @type {ccui.ImageView} */
    _imgMessage: null,
    /** @type {ck.Text} */
    _txtMessage: null,
    /** @type {ccui.ImageView} */
    _imgPlay: null,
    /** @type {ck.Text} */
    _txtPlay: null,


    /**
     * _ccs.LeagueEmptyPopup constructor
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

        ///// # _imgFont
        this._imgFont = new ccui.ImageView();
        this._imgFont.setName("_imgFont");
        this._layoutPopup.addChild(this._imgFont);
        this._imgFont.setCascadeOpacityEnabled(true);
        this._imgFont.setCascadeColorEnabled(true);
        this._imgFont.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgFont, 0.5, 0.5024);
        let _imgFontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFont);
        _imgFontLayoutComponent.setPositionPercentXEnabled(true);
        _imgFontLayoutComponent.setPositionPercentX(0.5);
        _imgFontLayoutComponent.setPositionPercentYEnabled(true);
        _imgFontLayoutComponent.setPositionPercentY(0.5024);
        this._imgFont.loadTexture("league/Banner_Popup.png", 1);
        this._imgFont.setUnifySizeEnabled(false);
        this._imgFont.ignoreContentAdaptWithSize(false);
        this._imgFont.setScale9Enabled(true);
        this._imgFont.setCapInsets(cc.rect(69, 57, 372, 691));
        this._imgFont.setContentSize(cc.size(510, 805));
        this._imgFont.setTouchEnabled(false);

        ///// # _txtName1
        this._txtName1 = new ck.Text();
        this._txtName1.setName("_txtName1");
        this._layoutPopup.addChild(this._txtName1);
        this._txtName1.setCascadeOpacityEnabled(true);
        this._txtName1.setCascadeColorEnabled(true);
        this._txtName1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName1, 0.1563, 0.105);
        this._txtName1.setTextColor(cc.color(150, 154, 165, 255));
        let _txtName1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName1);
        _txtName1LayoutComponent.setPositionPercentXEnabled(true);
        _txtName1LayoutComponent.setPositionPercentX(0.1563);
        _txtName1LayoutComponent.setPositionPercentYEnabled(true);
        _txtName1LayoutComponent.setPositionPercentY(0.105);
        this._txtName1.setTouchEnabled(false);
        this._txtName1.setUnifySizeEnabled(false);
        this._txtName1.ignoreContentAdaptWithSize(false);
        this._txtName1.setContentSize(cc.size(113.7822, 33));
        this._txtName1.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName1.setDefaultFontSize(30);
        this._txtName1.setString(gm.localize.getText("TXT_WOOD"));
        this._txtName1.setTextHorizontalAlignment(1);
        this._txtName1.setTextVerticalAlignment(1);
        this._txtName1.enableShadow(cc.color(48, 41, 41, 255), cc.size(0, -2), 0);

        ///// # _txtName2
        this._txtName2 = new ck.Text();
        this._txtName2.setName("_txtName2");
        this._layoutPopup.addChild(this._txtName2);
        this._txtName2.setCascadeOpacityEnabled(true);
        this._txtName2.setCascadeColorEnabled(true);
        this._txtName2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName2, 0.3721, 0.2188);
        this._txtName2.setTextColor(cc.color(150, 154, 165, 255));
        let _txtName2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName2);
        _txtName2LayoutComponent.setPositionPercentXEnabled(true);
        _txtName2LayoutComponent.setPositionPercentX(0.3721);
        _txtName2LayoutComponent.setPositionPercentYEnabled(true);
        _txtName2LayoutComponent.setPositionPercentY(0.2188);
        this._txtName2.setTouchEnabled(false);
        this._txtName2.setUnifySizeEnabled(false);
        this._txtName2.ignoreContentAdaptWithSize(false);
        this._txtName2.setContentSize(cc.size(145, 33));
        this._txtName2.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName2.setDefaultFontSize(30);
        this._txtName2.setString(gm.localize.getText("TXT_METAL"));
        this._txtName2.setTextHorizontalAlignment(1);
        this._txtName2.setTextVerticalAlignment(1);
        this._txtName2.enableShadow(cc.color(48, 41, 41, 255), cc.size(0, -2), 0);

        ///// # _txtName3
        this._txtName3 = new ck.Text();
        this._txtName3.setName("_txtName3");
        this._layoutPopup.addChild(this._txtName3);
        this._txtName3.setCascadeOpacityEnabled(true);
        this._txtName3.setCascadeColorEnabled(true);
        this._txtName3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName3, 0.5959, 0.3015);
        this._txtName3.setTextColor(cc.color(150, 154, 165, 255));
        let _txtName3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName3);
        _txtName3LayoutComponent.setPositionPercentXEnabled(true);
        _txtName3LayoutComponent.setPositionPercentX(0.5959);
        _txtName3LayoutComponent.setPositionPercentYEnabled(true);
        _txtName3LayoutComponent.setPositionPercentY(0.3015);
        this._txtName3.setTouchEnabled(false);
        this._txtName3.setUnifySizeEnabled(false);
        this._txtName3.ignoreContentAdaptWithSize(false);
        this._txtName3.setContentSize(cc.size(145, 33));
        this._txtName3.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName3.setDefaultFontSize(30);
        this._txtName3.setString(gm.localize.getText("TXT_BRONZE"));
        this._txtName3.setTextHorizontalAlignment(1);
        this._txtName3.setTextVerticalAlignment(1);
        this._txtName3.enableShadow(cc.color(48, 41, 41, 255), cc.size(0, -2), 0);

        ///// # _txtName4
        this._txtName4 = new ck.Text();
        this._txtName4.setName("_txtName4");
        this._layoutPopup.addChild(this._txtName4);
        this._txtName4.setCascadeOpacityEnabled(true);
        this._txtName4.setCascadeColorEnabled(true);
        this._txtName4.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName4, 0.8209, 0.4074);
        this._txtName4.setTextColor(cc.color(150, 154, 165, 255));
        let _txtName4LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName4);
        _txtName4LayoutComponent.setPositionPercentXEnabled(true);
        _txtName4LayoutComponent.setPositionPercentX(0.8209);
        _txtName4LayoutComponent.setPositionPercentYEnabled(true);
        _txtName4LayoutComponent.setPositionPercentY(0.4074);
        this._txtName4.setTouchEnabled(false);
        this._txtName4.setUnifySizeEnabled(false);
        this._txtName4.ignoreContentAdaptWithSize(false);
        this._txtName4.setContentSize(cc.size(145, 33));
        this._txtName4.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName4.setDefaultFontSize(30);
        this._txtName4.setString(gm.localize.getText("TXT_SILVER"));
        this._txtName4.setTextHorizontalAlignment(1);
        this._txtName4.setTextVerticalAlignment(1);
        this._txtName4.enableShadow(cc.color(48, 41, 41, 255), cc.size(0, -2), 0);

        ///// # _txtName5
        this._txtName5 = new ck.Text();
        this._txtName5.setName("_txtName5");
        this._layoutPopup.addChild(this._txtName5);
        this._txtName5.setCascadeOpacityEnabled(true);
        this._txtName5.setCascadeColorEnabled(true);
        this._txtName5.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName5, 0.1956, 0.4956);
        this._txtName5.setTextColor(cc.color(235, 198, 49, 255));
        let _txtName5LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName5);
        _txtName5LayoutComponent.setPositionPercentXEnabled(true);
        _txtName5LayoutComponent.setPositionPercentX(0.1956);
        _txtName5LayoutComponent.setPositionPercentYEnabled(true);
        _txtName5LayoutComponent.setPositionPercentY(0.4956);
        this._txtName5.setTouchEnabled(false);
        this._txtName5.setUnifySizeEnabled(false);
        this._txtName5.ignoreContentAdaptWithSize(false);
        this._txtName5.setContentSize(cc.size(145, 37));
        this._txtName5.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName5.setDefaultFontSize(33);
        this._txtName5.setString(gm.localize.getText("TXT_GOLD"));
        this._txtName5.setTextHorizontalAlignment(1);
        this._txtName5.setTextVerticalAlignment(1);
        this._txtName5.enableShadow(cc.color(48, 41, 41, 255), cc.size(0, -2), 0);

        ///// # _txtName6
        this._txtName6 = new ck.Text();
        this._txtName6.setName("_txtName6");
        this._layoutPopup.addChild(this._txtName6);
        this._txtName6.setCascadeOpacityEnabled(true);
        this._txtName6.setCascadeColorEnabled(true);
        this._txtName6.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName6, 0.4823, 0.5848);
        this._txtName6.setTextColor(cc.color(44, 243, 236, 255));
        let _txtName6LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName6);
        _txtName6LayoutComponent.setPositionPercentXEnabled(true);
        _txtName6LayoutComponent.setPositionPercentX(0.4823);
        _txtName6LayoutComponent.setPositionPercentYEnabled(true);
        _txtName6LayoutComponent.setPositionPercentY(0.5848);
        this._txtName6.setTouchEnabled(false);
        this._txtName6.setUnifySizeEnabled(false);
        this._txtName6.ignoreContentAdaptWithSize(false);
        this._txtName6.setContentSize(cc.size(155.272, 37));
        this._txtName6.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName6.setDefaultFontSize(33);
        this._txtName6.setString(gm.localize.getText("TXT_PLATINUM"));
        this._txtName6.setTextHorizontalAlignment(1);
        this._txtName6.setTextVerticalAlignment(1);
        this._txtName6.enableShadow(cc.color(48, 41, 41, 255), cc.size(0, -2), 0);

        ///// # _txtName7
        this._txtName7 = new ck.Text();
        this._txtName7.setName("_txtName7");
        this._layoutPopup.addChild(this._txtName7);
        this._txtName7.setCascadeOpacityEnabled(true);
        this._txtName7.setCascadeColorEnabled(true);
        this._txtName7.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName7, 0.791, 0.6848);
        this._txtName7.setTextColor(cc.color(44, 243, 236, 255));
        let _txtName7LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName7);
        _txtName7LayoutComponent.setPositionPercentXEnabled(true);
        _txtName7LayoutComponent.setPositionPercentX(0.791);
        _txtName7LayoutComponent.setPositionPercentYEnabled(true);
        _txtName7LayoutComponent.setPositionPercentY(0.6848);
        this._txtName7.setTouchEnabled(false);
        this._txtName7.setUnifySizeEnabled(false);
        this._txtName7.ignoreContentAdaptWithSize(false);
        this._txtName7.setContentSize(cc.size(179.9172, 37));
        this._txtName7.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName7.setDefaultFontSize(33);
        this._txtName7.setString(gm.localize.getText("TXT_DIAMOND"));
        this._txtName7.setTextHorizontalAlignment(1);
        this._txtName7.setTextVerticalAlignment(1);
        this._txtName7.enableShadow(cc.color(48, 41, 41, 255), cc.size(0, -2), 0);

        ///// # _imgYouAreHere
        this._imgYouAreHere = new ccui.ImageView();
        this._imgYouAreHere.setName("_imgYouAreHere");
        this._layoutPopup.addChild(this._imgYouAreHere);
        this._imgYouAreHere.setCascadeOpacityEnabled(true);
        this._imgYouAreHere.setCascadeColorEnabled(true);
        this._imgYouAreHere.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgYouAreHere, 0.1628, 0.272);
        let _imgYouAreHereLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgYouAreHere);
        _imgYouAreHereLayoutComponent.setPositionPercentXEnabled(true);
        _imgYouAreHereLayoutComponent.setPositionPercentX(0.1628);
        _imgYouAreHereLayoutComponent.setPositionPercentYEnabled(true);
        _imgYouAreHereLayoutComponent.setPositionPercentY(0.272);
        this._imgYouAreHere.loadTexture("league/YouareHere_Bubble.png", 1);
        this._imgYouAreHere.setUnifySizeEnabled(false);
        this._imgYouAreHere.ignoreContentAdaptWithSize(false);
        this._imgYouAreHere.setContentSize(cc.size(116, 86));
        this._imgYouAreHere.setTouchEnabled(false);

        ///// # _txtYouAreHere
        this._txtYouAreHere = new ck.Text();
        this._txtYouAreHere.setName("_txtYouAreHere");
        this._imgYouAreHere.addChild(this._txtYouAreHere);
        this._txtYouAreHere.setCascadeOpacityEnabled(true);
        this._txtYouAreHere.setCascadeColorEnabled(true);
        this._txtYouAreHere.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtYouAreHere, 0.5, 0.6119);
        this._txtYouAreHere.setTextColor(cc.color(73, 49, 49, 255));
        let _txtYouAreHereLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtYouAreHere);
        _txtYouAreHereLayoutComponent.setPositionPercentXEnabled(true);
        _txtYouAreHereLayoutComponent.setPositionPercentX(0.5);
        _txtYouAreHereLayoutComponent.setPositionPercentYEnabled(true);
        _txtYouAreHereLayoutComponent.setPositionPercentY(0.6119);
        this._txtYouAreHere.setTouchEnabled(false);
        this._txtYouAreHere.setUnifySizeEnabled(false);
        this._txtYouAreHere.ignoreContentAdaptWithSize(false);
        this._txtYouAreHere.setContentSize(cc.size(101, 46.9938));
        this._txtYouAreHere.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtYouAreHere.setDefaultFontSize(23);
        this._txtYouAreHere.setTextHorizontalAlignment(1);
        this._txtYouAreHere.setTextVerticalAlignment(1);

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
        this._txtHeader.setString(gm.localize.getText("TXT_LEAGUE"));
        this._txtHeader.setTextHorizontalAlignment(1);
        this._txtHeader.setTextVerticalAlignment(1);
        this._txtHeader.enableOutline(cc.color(155, 68, 38, 255), 2);
        this._txtHeader.enableShadow(cc.color(155, 68, 38, 255), cc.size(0, -2), 0);

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
        ck.UIUtils.setPositionPercent(this._imgInfo, 0.0657, 0.9591);
        let _imgInfoLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgInfo);
        _imgInfoLayoutComponent.setPositionPercentXEnabled(true);
        _imgInfoLayoutComponent.setPositionPercentX(0.0657);
        _imgInfoLayoutComponent.setPositionPercentYEnabled(true);
        _imgInfoLayoutComponent.setPositionPercentY(0.9591);
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

        ///// # _imgMessage
        this._imgMessage = new ccui.ImageView();
        this._imgMessage.setName("_imgMessage");
        this._layoutPopup.addChild(this._imgMessage);
        this._imgMessage.setCascadeOpacityEnabled(true);
        this._imgMessage.setCascadeColorEnabled(true);
        this._imgMessage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgMessage, 0.5, 0.1242);
        this._imgMessage.setOpacity(127);
        this._imgMessage.setColor(cc.color(0, 0, 0, 255));
        let _imgMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgMessage);
        _imgMessageLayoutComponent.setPositionPercentXEnabled(true);
        _imgMessageLayoutComponent.setPositionPercentX(0.5);
        _imgMessageLayoutComponent.setPositionPercentYEnabled(true);
        _imgMessageLayoutComponent.setPositionPercentY(0.1242);
        this._imgMessage.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgMessage.setUnifySizeEnabled(false);
        this._imgMessage.ignoreContentAdaptWithSize(false);
        this._imgMessage.setScale9Enabled(true);
        this._imgMessage.setCapInsets(cc.rect(21, 26, 22, 12));
        this._imgMessage.setContentSize(cc.size(253.6714, 97.3291));
        this._imgMessage.setTouchEnabled(false);

        ///// # _txtMessage
        this._txtMessage = new ck.Text();
        this._txtMessage.setName("_txtMessage");
        this._layoutPopup.addChild(this._txtMessage);
        this._txtMessage.setCascadeOpacityEnabled(true);
        this._txtMessage.setCascadeColorEnabled(true);
        this._txtMessage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMessage, 0.5, 0.124);
        let _txtMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMessage);
        _txtMessageLayoutComponent.setPositionPercentXEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentX(0.5);
        _txtMessageLayoutComponent.setPositionPercentYEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentY(0.124);
        this._txtMessage.setTouchEnabled(false);
        this._txtMessage.setUnifySizeEnabled(false);
        this._txtMessage.ignoreContentAdaptWithSize(false);
        this._txtMessage.setContentSize(cc.size(231, 82.9938));
        this._txtMessage.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMessage.setDefaultFontSize(27);
        this._txtMessage.setString(gm.localize.getText("TXT_RANKING_EMPTY_MESSAGE"));
        this._txtMessage.setTextHorizontalAlignment(1);
        this._txtMessage.setTextVerticalAlignment(1);

        ///// # _imgPlay
        this._imgPlay = new ccui.ImageView();
        this._imgPlay.setName("_imgPlay");
        this._layoutPopup.addChild(this._imgPlay);
        this._imgPlay.setCascadeOpacityEnabled(true);
        this._imgPlay.setCascadeColorEnabled(true);
        this._imgPlay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPlay, 0.5, 0.0085);
        let _imgPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPlay);
        _imgPlayLayoutComponent.setPositionPercentXEnabled(true);
        _imgPlayLayoutComponent.setPositionPercentX(0.5);
        _imgPlayLayoutComponent.setPositionPercentYEnabled(true);
        _imgPlayLayoutComponent.setPositionPercentY(0.0085);
        this._imgPlay.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgPlay.setUnifySizeEnabled(false);
        this._imgPlay.ignoreContentAdaptWithSize(false);
        this._imgPlay.setScale9Enabled(true);
        this._imgPlay.setCapInsets(cc.rect(69, 26, 68, 29));
        this._imgPlay.setContentSize(cc.size(206, 81));
        this._imgPlay.setTouchEnabled(false);

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
        this._txtPlay.setDefaultFontSize(45);
        this._txtPlay.setString(gm.localize.getText("TXT_PLAY_NOW"));
        this._txtPlay.setTextHorizontalAlignment(1);
        this._txtPlay.setTextVerticalAlignment(1);
        this._txtPlay.enableOutline(cc.color(15, 123, 118, 255), 2);

    },



});

/**
 * Create LeagueEmptyPopup
 * @returns {_ccs.LeagueEmptyPopup}
 */
_ccs.LeagueEmptyPopup.create = function () {
    return new _ccs.LeagueEmptyPopup();
};
