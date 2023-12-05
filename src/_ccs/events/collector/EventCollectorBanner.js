/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.EventCollectorBanner
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.EventCollectorBanner = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {cc.Sprite} */
    _moon: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundBack: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundTitle: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.ImageView} */
    _imgPlay: null,
    /** @type {ck.Text} */
    _txtPlay: null,
    /** @type {ccui.ImageView} */
    _imgShare: null,
    /** @type {ck.Text} */
    _txtPlay: null,
    /** @type {ck.Text} */
    _txtTimeLeftTitle: null,
    /** @type {ck.Text} */
    _txtTimeLeft: null,


    /**
     * _ccs.EventCollectorBanner constructor
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
        this._layoutPopup.setPosition(0, 0.0002);
        let _layoutPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        this._layoutPopup.setTouchEnabled(true);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(540, 967.7509));

        ///// # _moon
        this._moon = new cc.Sprite();
        this._moon.setName("_moon");
        this._layoutPopup.addChild(this._moon);
        this._moon.setCascadeOpacityEnabled(true);
        this._moon.setCascadeColorEnabled(true);
        this._moon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._moon, 0.0562, 0.9743);
        let _moonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._moon);
        let sf = cc.spriteFrameCache.getSpriteFrame("event-collector/Moon.png"); if (sf) this._moon.setSpriteFrame(sf);
        let _moonBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _moonBlendFunc.src = 1;
        _moonBlendFunc.dst = 771;
        this._moon.setBlendFunc(_moonBlendFunc);

        ///// # _imgBackgroundBack
        this._imgBackgroundBack = new ccui.ImageView();
        this._imgBackgroundBack.setName("_imgBackgroundBack");
        this._layoutPopup.addChild(this._imgBackgroundBack);
        this._imgBackgroundBack.setCascadeOpacityEnabled(true);
        this._imgBackgroundBack.setCascadeColorEnabled(true);
        this._imgBackgroundBack.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundBack, 0.5, 0.5688);
        let _imgBackgroundBackLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundBack);
        _imgBackgroundBackLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundBackLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundBackLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundBackLayoutComponent.setPositionPercentY(0.5688);
        this._imgBackgroundBack.loadTexture("event-collector/Banner.png", 1);
        this._imgBackgroundBack.setUnifySizeEnabled(false);
        this._imgBackgroundBack.ignoreContentAdaptWithSize(false);
        this._imgBackgroundBack.setScale9Enabled(true);
        this._imgBackgroundBack.setCapInsets(cc.rect(69, 57, 502, 804));
        this._imgBackgroundBack.setContentSize(cc.size(639, 811));
        this._imgBackgroundBack.setTouchEnabled(false);

        ///// # _imgBackgroundTitle
        this._imgBackgroundTitle = new ccui.ImageView();
        this._imgBackgroundTitle.setName("_imgBackgroundTitle");
        this._layoutPopup.addChild(this._imgBackgroundTitle);
        this._imgBackgroundTitle.setCascadeOpacityEnabled(true);
        this._imgBackgroundTitle.setCascadeColorEnabled(true);
        this._imgBackgroundTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundTitle, 0.5, 0.999);
        let _imgBackgroundTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundTitle);
        _imgBackgroundTitleLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundTitleLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundTitleLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundTitleLayoutComponent.setPositionPercentY(0.999);
        this._imgBackgroundTitle.loadTexture("texts/events/event-collector/Title_03.png", 1);
        this._imgBackgroundTitle.setTouchEnabled(false);

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._layoutPopup.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.989, 0.9849);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.989);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.9849);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(57.9141, 59.344));
        this._imgClose.setTouchEnabled(false);

        ///// # _imgPlay
        this._imgPlay = new ccui.ImageView();
        this._imgPlay.setName("_imgPlay");
        this._layoutPopup.addChild(this._imgPlay);
        this._imgPlay.setCascadeOpacityEnabled(true);
        this._imgPlay.setCascadeColorEnabled(true);
        this._imgPlay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgPlay, 0.29, 0.1133);
        let _imgPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPlay);
        _imgPlayLayoutComponent.setPositionPercentXEnabled(true);
        _imgPlayLayoutComponent.setPositionPercentX(0.29);
        _imgPlayLayoutComponent.setPositionPercentYEnabled(true);
        _imgPlayLayoutComponent.setPositionPercentY(0.1133);
        this._imgPlay.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgPlay.setUnifySizeEnabled(false);
        this._imgPlay.ignoreContentAdaptWithSize(false);
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
        this._txtPlay.setTextColor(cc.color(0, 90, 0, 255));
        let _txtPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPlay);
        _txtPlayLayoutComponent.setPositionPercentXEnabled(true);
        _txtPlayLayoutComponent.setPositionPercentX(0.5);
        _txtPlayLayoutComponent.setPositionPercentYEnabled(true);
        _txtPlayLayoutComponent.setPositionPercentY(0.55);
        this._txtPlay.setTouchEnabled(false);
        this._txtPlay.ignoreContentAdaptWithSize(true);
        this._txtPlay.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtPlay.setDefaultFontSize(35);
        this._txtPlay.setString(gm.localize.getText("TXT_PLAY_NOW"));
        this._txtPlay.setTextHorizontalAlignment(1);
        this._txtPlay.setTextVerticalAlignment(1);

        ///// # _imgShare
        this._imgShare = new ccui.ImageView();
        this._imgShare.setName("_imgShare");
        this._layoutPopup.addChild(this._imgShare);
        this._imgShare.setCascadeOpacityEnabled(true);
        this._imgShare.setCascadeColorEnabled(true);
        this._imgShare.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgShare, 0.71, 0.1133);
        let _imgShareLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgShare);
        _imgShareLayoutComponent.setPositionPercentXEnabled(true);
        _imgShareLayoutComponent.setPositionPercentX(0.71);
        _imgShareLayoutComponent.setPositionPercentYEnabled(true);
        _imgShareLayoutComponent.setPositionPercentY(0.1133);
        this._imgShare.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgShare.setUnifySizeEnabled(false);
        this._imgShare.ignoreContentAdaptWithSize(false);
        this._imgShare.setContentSize(cc.size(206, 81));
        this._imgShare.setTouchEnabled(false);

        ///// # _txtPlay
        this._txtPlay = new ck.Text();
        this._txtPlay.setName("_txtPlay");
        this._imgShare.addChild(this._txtPlay);
        this._txtPlay.setCascadeOpacityEnabled(true);
        this._txtPlay.setCascadeColorEnabled(true);
        this._txtPlay.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtPlay, 0.5, 0.55);
        this._txtPlay.setTextColor(cc.color(81, 57, 0, 255));
        let _txtPlayLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtPlay);
        _txtPlayLayoutComponent.setPositionPercentXEnabled(true);
        _txtPlayLayoutComponent.setPositionPercentX(0.5);
        _txtPlayLayoutComponent.setPositionPercentYEnabled(true);
        _txtPlayLayoutComponent.setPositionPercentY(0.55);
        this._txtPlay.setTouchEnabled(false);
        this._txtPlay.ignoreContentAdaptWithSize(true);
        this._txtPlay.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtPlay.setDefaultFontSize(35);
        this._txtPlay.setString(gm.localize.getText("TXT_SHARE_NOW"));
        this._txtPlay.setTextHorizontalAlignment(1);
        this._txtPlay.setTextVerticalAlignment(1);

        ///// # _txtTimeLeftTitle
        this._txtTimeLeftTitle = new ck.Text();
        this._txtTimeLeftTitle.setName("_txtTimeLeftTitle");
        this._layoutPopup.addChild(this._txtTimeLeftTitle);
        this._txtTimeLeftTitle.setCascadeOpacityEnabled(true);
        this._txtTimeLeftTitle.setCascadeColorEnabled(true);
        this._txtTimeLeftTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTimeLeftTitle, 0.5, 0.0393);
        let _txtTimeLeftTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTimeLeftTitle);
        _txtTimeLeftTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLeftTitleLayoutComponent.setPositionPercentX(0.5);
        _txtTimeLeftTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLeftTitleLayoutComponent.setPositionPercentY(0.0393);
        this._txtTimeLeftTitle.setTouchEnabled(false);
        this._txtTimeLeftTitle.ignoreContentAdaptWithSize(true);
        this._txtTimeLeftTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTimeLeftTitle.setDefaultFontSize(35);
        this._txtTimeLeftTitle.setString(gm.localize.getText("TXT_TIME_LEFT"));
        this._txtTimeLeftTitle.setTextHorizontalAlignment(1);
        this._txtTimeLeftTitle.setTextVerticalAlignment(1);
        this._txtTimeLeftTitle.enableOutline(cc.color(0, 80, 0, 255), 1);

        ///// # _txtTimeLeft
        this._txtTimeLeft = new ck.Text();
        this._txtTimeLeft.setName("_txtTimeLeft");
        this._layoutPopup.addChild(this._txtTimeLeft);
        this._txtTimeLeft.setCascadeOpacityEnabled(true);
        this._txtTimeLeft.setCascadeColorEnabled(true);
        this._txtTimeLeft.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTimeLeft, 0.5, 0.0045);
        let _txtTimeLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTimeLeft);
        _txtTimeLeftLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentX(0.5);
        _txtTimeLeftLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentY(0.0045);
        this._txtTimeLeft.setTouchEnabled(false);
        this._txtTimeLeft.ignoreContentAdaptWithSize(true);
        this._txtTimeLeft.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTimeLeft.setDefaultFontSize(35);
        this._txtTimeLeft.setTextHorizontalAlignment(1);
        this._txtTimeLeft.setTextVerticalAlignment(1);
        this._txtTimeLeft.enableOutline(cc.color(0, 80, 0, 255), 1);

    },



});

/**
 * Create EventCollectorBanner
 * @returns {_ccs.EventCollectorBanner}
 */
_ccs.EventCollectorBanner.create = function () {
    return new _ccs.EventCollectorBanner();
};
