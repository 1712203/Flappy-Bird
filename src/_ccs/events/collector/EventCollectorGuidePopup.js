/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.EventCollectorGuidePopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.EventCollectorGuidePopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutPopup: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundBack: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundFront: null,
    /** @type {cc.Sprite} */
    _dot00: null,
    /** @type {cc.Sprite} */
    _dot01: null,
    /** @type {cc.Sprite} */
    _dotCurrent: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundTitle: null,
    /** @type {ck.Text} */
    _txtTitle: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ccui.PageView} */
    _pageView: null,
    /** @type {ccui.Layout} */
    _page01: null,
    /** @type {ccui.Layout} */
    _layoutStep01: null,
    /** @type {ccui.ImageView} */
    _imgBgr01: null,
    /** @type {ccui.ImageView} */
    _imgStep01: null,
    /** @type {ck.Text} */
    _txtTitle01: null,
    /** @type {cc.Sprite} */
    _spriteStep01: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtStep01: null,
    /** @type {cc.Sprite} */
    _spriteToken01: null,
    /** @type {cc.Sprite} */
    _spriteToken02: null,
    /** @type {cc.Sprite} */
    _spriteToken03: null,
    /** @type {cc.Sprite} */
    _spriteToken04: null,
    /** @type {cc.Sprite} */
    _spriteToken05: null,
    /** @type {ccui.Layout} */
    _layoutStep02: null,
    /** @type {ccui.ImageView} */
    _imgBgr02: null,
    /** @type {ccui.ImageView} */
    _imgStep02: null,
    /** @type {ck.Text} */
    _txtTitle02: null,
    /** @type {cc.Sprite} */
    _spriteStep02: null,
    /** @type {ck.Text} */
    _txtStep02: null,
    /** @type {ccui.Layout} */
    _layoutStep03: null,
    /** @type {ccui.ImageView} */
    _imgBgr03: null,
    /** @type {ccui.ImageView} */
    _imgStep03: null,
    /** @type {ck.Text} */
    _txtTitle03: null,
    /** @type {cc.Sprite} */
    _spriteStep03: null,
    /** @type {ck.Text} */
    _txtStep03: null,
    /** @type {ccui.Layout} */
    _page02: null,
    /** @type {ccui.Layout} */
    _layoutStep04: null,
    /** @type {ccui.ImageView} */
    _imgBgr04: null,
    /** @type {ccui.ImageView} */
    _imgStep04: null,
    /** @type {ck.Text} */
    _txtTitle04: null,
    /** @type {cc.Sprite} */
    _spriteStep04: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtStep04: null,
    /** @type {ccui.Layout} */
    _layoutStep05: null,
    /** @type {ccui.ImageView} */
    _imgBgr05: null,
    /** @type {ccui.ImageView} */
    _imgStep05: null,
    /** @type {ck.Text} */
    _txtTitle05: null,
    /** @type {cc.Sprite} */
    _spriteStep05: null,
    /** @type {ck.Text} */
    _txtStep05: null,
    /** @type {ccui.Layout} */
    _layoutStep06: null,
    /** @type {ccui.ImageView} */
    _imgBgr06: null,
    /** @type {ccui.ImageView} */
    _imgStep06: null,
    /** @type {ck.Text} */
    _txtTitle06: null,
    /** @type {cc.Sprite} */
    _spriteStep06: null,
    /** @type {ck.Text} */
    _txtStep06: null,
    /** @type {ccui.Button} */
    _btnArrowLeft: null,
    /** @type {ccui.Button} */
    _btnArrowRight: null,


    /**
     * _ccs.EventCollectorGuidePopup constructor
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
        let _layoutPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPopup);
        this._layoutPopup.setTouchEnabled(true);
        this._layoutPopup.setUnifySizeEnabled(false);
        this._layoutPopup.ignoreContentAdaptWithSize(false);
        this._layoutPopup.setContentSize(cc.size(540, 830));

        ///// # _imgBackgroundBack
        this._imgBackgroundBack = new ccui.ImageView();
        this._imgBackgroundBack.setName("_imgBackgroundBack");
        this._layoutPopup.addChild(this._imgBackgroundBack);
        this._imgBackgroundBack.setCascadeOpacityEnabled(true);
        this._imgBackgroundBack.setCascadeColorEnabled(true);
        this._imgBackgroundBack.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundBack, 0.5, 0.5);
        let _imgBackgroundBackLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundBack);
        _imgBackgroundBackLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundBackLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundBackLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundBackLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundBackLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundBackLayoutComponent.setPercentWidth(1);
        _imgBackgroundBackLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundBackLayoutComponent.setPercentHeight(1);
        this._imgBackgroundBack.loadTexture("basics/popup/Back.png", 1);
        this._imgBackgroundBack.setUnifySizeEnabled(false);
        this._imgBackgroundBack.ignoreContentAdaptWithSize(false);
        this._imgBackgroundBack.setScale9Enabled(true);
        this._imgBackgroundBack.setCapInsets(cc.rect(69, 57, 72, 61));
        ck.UIUtils.setSizePercent(this._imgBackgroundBack, 1, 1);
        this._imgBackgroundBack.setTouchEnabled(false);

        ///// # _imgBackgroundFront
        this._imgBackgroundFront = new ccui.ImageView();
        this._imgBackgroundFront.setName("_imgBackgroundFront");
        this._layoutPopup.addChild(this._imgBackgroundFront);
        this._imgBackgroundFront.setCascadeOpacityEnabled(true);
        this._imgBackgroundFront.setCascadeColorEnabled(true);
        this._imgBackgroundFront.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundFront, 0.5, 0.5);
        let _imgBackgroundFrontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundFront);
        _imgBackgroundFrontLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundFrontLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundFrontLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPercentWidth(0.95);
        _imgBackgroundFrontLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundFrontLayoutComponent.setPercentHeight(0.96);
        this._imgBackgroundFront.loadTexture("basics/popup/Font.png", 1);
        this._imgBackgroundFront.setUnifySizeEnabled(false);
        this._imgBackgroundFront.ignoreContentAdaptWithSize(false);
        this._imgBackgroundFront.setScale9Enabled(true);
        this._imgBackgroundFront.setCapInsets(cc.rect(69, 57, 15, 31));
        ck.UIUtils.setSizePercent(this._imgBackgroundFront, 0.95, 0.96);
        this._imgBackgroundFront.setTouchEnabled(false);

        ///// # _dot00
        this._dot00 = new cc.Sprite();
        this._dot00.setName("_dot00");
        this._layoutPopup.addChild(this._dot00);
        this._dot00.setCascadeOpacityEnabled(true);
        this._dot00.setCascadeColorEnabled(true);
        this._dot00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._dot00, 0.48, 0.05);
        this._dot00.setScale(1.25, 1.25);
        let _dot00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._dot00);
        _dot00LayoutComponent.setPositionPercentXEnabled(true);
        _dot00LayoutComponent.setPositionPercentX(0.48);
        _dot00LayoutComponent.setPositionPercentYEnabled(true);
        _dot00LayoutComponent.setPositionPercentY(0.05);
        let sf = cc.spriteFrameCache.getSpriteFrame("basics/other/Dot_01.png"); if (sf) this._dot00.setSpriteFrame(sf);
        let _dot00BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _dot00BlendFunc.src = 1;
        _dot00BlendFunc.dst = 771;
        this._dot00.setBlendFunc(_dot00BlendFunc);

        ///// # _dot01
        this._dot01 = new cc.Sprite();
        this._dot01.setName("_dot01");
        this._layoutPopup.addChild(this._dot01);
        this._dot01.setCascadeOpacityEnabled(true);
        this._dot01.setCascadeColorEnabled(true);
        this._dot01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._dot01, 0.52, 0.05);
        this._dot01.setScale(1.25, 1.25);
        let _dot01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._dot01);
        _dot01LayoutComponent.setPositionPercentXEnabled(true);
        _dot01LayoutComponent.setPositionPercentX(0.52);
        _dot01LayoutComponent.setPositionPercentYEnabled(true);
        _dot01LayoutComponent.setPositionPercentY(0.05);
        let sf = cc.spriteFrameCache.getSpriteFrame("basics/other/Dot_01.png"); if (sf) this._dot01.setSpriteFrame(sf);
        let _dot01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _dot01BlendFunc.src = 1;
        _dot01BlendFunc.dst = 771;
        this._dot01.setBlendFunc(_dot01BlendFunc);

        ///// # _dotCurrent
        this._dotCurrent = new cc.Sprite();
        this._dotCurrent.setName("_dotCurrent");
        this._layoutPopup.addChild(this._dotCurrent);
        this._dotCurrent.setCascadeOpacityEnabled(true);
        this._dotCurrent.setCascadeColorEnabled(true);
        this._dotCurrent.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._dotCurrent, 0.48, 0.05);
        this._dotCurrent.setScale(1.25, 1.25);
        let _dotCurrentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._dotCurrent);
        _dotCurrentLayoutComponent.setPositionPercentXEnabled(true);
        _dotCurrentLayoutComponent.setPositionPercentX(0.48);
        _dotCurrentLayoutComponent.setPositionPercentYEnabled(true);
        _dotCurrentLayoutComponent.setPositionPercentY(0.05);
        let sf = cc.spriteFrameCache.getSpriteFrame("basics/other/Dot_02.png"); if (sf) this._dotCurrent.setSpriteFrame(sf);
        let _dotCurrentBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _dotCurrentBlendFunc.src = 1;
        _dotCurrentBlendFunc.dst = 771;
        this._dotCurrent.setBlendFunc(_dotCurrentBlendFunc);

        ///// # _imgBackgroundTitle
        this._imgBackgroundTitle = new ccui.ImageView();
        this._imgBackgroundTitle.setName("_imgBackgroundTitle");
        this._layoutPopup.addChild(this._imgBackgroundTitle);
        this._imgBackgroundTitle.setCascadeOpacityEnabled(true);
        this._imgBackgroundTitle.setCascadeColorEnabled(true);
        this._imgBackgroundTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundTitle, 0.5, 1);
        let _imgBackgroundTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundTitle);
        _imgBackgroundTitleLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundTitleLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundTitleLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundTitleLayoutComponent.setPositionPercentY(1);
        this._imgBackgroundTitle.loadTexture("basics/popup/HeaderBlue.png", 1);
        this._imgBackgroundTitle.setUnifySizeEnabled(false);
        this._imgBackgroundTitle.ignoreContentAdaptWithSize(false);
        this._imgBackgroundTitle.setContentSize(cc.size(346, 84));
        this._imgBackgroundTitle.setTouchEnabled(false);

        ///// # _txtTitle
        this._txtTitle = new ck.Text();
        this._txtTitle.setName("_txtTitle");
        this._imgBackgroundTitle.addChild(this._txtTitle);
        this._txtTitle.setCascadeOpacityEnabled(true);
        this._txtTitle.setCascadeColorEnabled(true);
        this._txtTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle, 0.5, 0.5226);
        this._txtTitle.setTextColor(cc.color(255, 252, 225, 255));
        let _txtTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle);
        _txtTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentX(0.5);
        _txtTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentY(0.5226);
        this._txtTitle.setTouchEnabled(false);
        this._txtTitle.ignoreContentAdaptWithSize(true);
        this._txtTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTitle.setDefaultFontSize(55);
        this._txtTitle.setString(gm.localize.getText("TXT_GUIDE"));
        this._txtTitle.setTextHorizontalAlignment(0);
        this._txtTitle.setTextVerticalAlignment(0);
        this._txtTitle.enableOutline(cc.color(155, 68, 38, 255), 2);
        this._txtTitle.enableShadow(cc.color(155, 68, 38, 255), cc.size(0, -2), 0);

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._layoutPopup.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.99, 0.99);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.99);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.99);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(81, 83));
        this._imgClose.setTouchEnabled(false);

        ///// # _pageView
        this._pageView = new ccui.PageView();
        this._pageView.setName("_pageView");
        this._layoutPopup.addChild(this._pageView);
        this._pageView.setCascadeOpacityEnabled(true);
        this._pageView.setCascadeColorEnabled(true);
        this._pageView.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._pageView, 0.5, 0.4916);
        let _pageViewLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._pageView);
        _pageViewLayoutComponent.setPositionPercentXEnabled(true);
        _pageViewLayoutComponent.setPositionPercentX(0.5);
        _pageViewLayoutComponent.setPositionPercentYEnabled(true);
        _pageViewLayoutComponent.setPositionPercentY(0.4916);
        this._pageView.setTouchEnabled(true);
        this._pageView.setUnifySizeEnabled(false);
        this._pageView.ignoreContentAdaptWithSize(false);
        this._pageView.setContentSize(cc.size(490.8706, 734.8258));

        ///// # _page01
        this._page01 = new ccui.Layout();
        this._page01.setName("_page01");
        this._pageView.addPage(this._page01);
        this._page01.setCascadeOpacityEnabled(true);
        this._page01.setCascadeColorEnabled(true);
        let _page01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._page01);
        this._page01.setTouchEnabled(true);
        this._page01.setUnifySizeEnabled(false);
        this._page01.ignoreContentAdaptWithSize(false);
        this._page01.setContentSize(cc.size(490.8706, 734.8258));

        ///// # _layoutStep01
        this._layoutStep01 = new ccui.Layout();
        this._layoutStep01.setName("_layoutStep01");
        this._page01.addChild(this._layoutStep01);
        this._layoutStep01.setCascadeOpacityEnabled(true);
        this._layoutStep01.setCascadeColorEnabled(true);
        this._layoutStep01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutStep01, 0.5167, 0.8148);
        let _layoutStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutStep01);
        _layoutStep01LayoutComponent.setPositionPercentXEnabled(true);
        _layoutStep01LayoutComponent.setPositionPercentX(0.5167);
        _layoutStep01LayoutComponent.setPositionPercentYEnabled(true);
        _layoutStep01LayoutComponent.setPositionPercentY(0.8148);
        this._layoutStep01.setTouchEnabled(true);
        this._layoutStep01.setUnifySizeEnabled(false);
        this._layoutStep01.ignoreContentAdaptWithSize(false);
        this._layoutStep01.setContentSize(cc.size(450.3445, 190.6198));

        ///// # _imgBgr01
        this._imgBgr01 = new ccui.ImageView();
        this._imgBgr01.setName("_imgBgr01");
        this._layoutStep01.addChild(this._imgBgr01);
        this._imgBgr01.setCascadeOpacityEnabled(true);
        this._imgBgr01.setCascadeColorEnabled(true);
        this._imgBgr01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr01, 0.5, 0.5);
        this._imgBgr01.setColor(cc.color(217, 195, 168, 255));
        let _imgBgr01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr01);
        _imgBgr01LayoutComponent.setPositionPercentXEnabled(true);
        _imgBgr01LayoutComponent.setPositionPercentX(0.5);
        _imgBgr01LayoutComponent.setPositionPercentYEnabled(true);
        _imgBgr01LayoutComponent.setPositionPercentY(0.5);
        _imgBgr01LayoutComponent.setPercentWidthEnabled(true);
        _imgBgr01LayoutComponent.setPercentWidth(1);
        _imgBgr01LayoutComponent.setPercentHeightEnabled(true);
        _imgBgr01LayoutComponent.setPercentHeight(1);
        this._imgBgr01.loadTexture("sprites/basics/Rounded32x32.png", 0);
        this._imgBgr01.setUnifySizeEnabled(false);
        this._imgBgr01.ignoreContentAdaptWithSize(false);
        this._imgBgr01.setScale9Enabled(true);
        this._imgBgr01.setCapInsets(cc.rect(10, 10, 12, 12));
        ck.UIUtils.setSizePercent(this._imgBgr01, 1, 1);
        this._imgBgr01.setTouchEnabled(false);

        ///// # _imgStep01
        this._imgStep01 = new ccui.ImageView();
        this._imgStep01.setName("_imgStep01");
        this._layoutStep01.addChild(this._imgStep01);
        this._imgStep01.setCascadeOpacityEnabled(true);
        this._imgStep01.setCascadeColorEnabled(true);
        this._imgStep01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStep01, 0.0113, 0.975);
        let _imgStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep01);
        _imgStep01LayoutComponent.setPositionPercentXEnabled(true);
        _imgStep01LayoutComponent.setPositionPercentX(0.0113);
        _imgStep01LayoutComponent.setPositionPercentYEnabled(true);
        _imgStep01LayoutComponent.setPositionPercentY(0.975);
        _imgStep01LayoutComponent.setPercentWidthEnabled(true);
        _imgStep01LayoutComponent.setPercentWidth(0.1332);
        _imgStep01LayoutComponent.setPercentHeightEnabled(true);
        _imgStep01LayoutComponent.setPercentHeight(0.3189);
        this._imgStep01.loadTexture("event-collector/tutorial/Title.png", 1);
        this._imgStep01.setUnifySizeEnabled(false);
        this._imgStep01.ignoreContentAdaptWithSize(false);
        this._imgStep01.setScale9Enabled(true);
        this._imgStep01.setCapInsets(cc.rect(10, 10, 40, 39));
        ck.UIUtils.setSizePercent(this._imgStep01, 0.1332, 0.3189);
        this._imgStep01.setTouchEnabled(false);

        ///// # _txtTitle01
        this._txtTitle01 = new ck.Text();
        this._txtTitle01.setName("_txtTitle01");
        this._imgStep01.addChild(this._txtTitle01);
        this._txtTitle01.setCascadeOpacityEnabled(true);
        this._txtTitle01.setCascadeColorEnabled(true);
        this._txtTitle01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle01, 0.4668, 0.483);
        let _txtTitle01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle01);
        _txtTitle01LayoutComponent.setPositionPercentXEnabled(true);
        _txtTitle01LayoutComponent.setPositionPercentX(0.4668);
        _txtTitle01LayoutComponent.setPositionPercentYEnabled(true);
        _txtTitle01LayoutComponent.setPositionPercentY(0.483);
        this._txtTitle01.setTouchEnabled(false);
        this._txtTitle01.ignoreContentAdaptWithSize(true);
        this._txtTitle01.setFontName("fonts/GroBold.ttf");
        this._txtTitle01.setDefaultFontSize(35);
        this._txtTitle01.setString("1");
        this._txtTitle01.setTextHorizontalAlignment(0);
        this._txtTitle01.setTextVerticalAlignment(0);
        this._txtTitle01.enableOutline(cc.color(0, 74, 0, 255), 2);

        ///// # _spriteStep01
        this._spriteStep01 = new cc.Sprite();
        this._spriteStep01.setName("_spriteStep01");
        this._layoutStep01.addChild(this._spriteStep01);
        this._spriteStep01.setCascadeOpacityEnabled(true);
        this._spriteStep01.setCascadeColorEnabled(true);
        this._spriteStep01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteStep01, 0.255, 0.5);
        let _spriteStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteStep01);
        _spriteStep01LayoutComponent.setPositionPercentXEnabled(true);
        _spriteStep01LayoutComponent.setPositionPercentX(0.255);
        _spriteStep01LayoutComponent.setPositionPercentYEnabled(true);
        _spriteStep01LayoutComponent.setPositionPercentY(0.5);
        let sf = cc.spriteFrameCache.getSpriteFrame("event-collector/tutorial/Step_01.png"); if (sf) this._spriteStep01.setSpriteFrame(sf);
        let _spriteStep01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteStep01BlendFunc.src = 1;
        _spriteStep01BlendFunc.dst = 771;
        this._spriteStep01.setBlendFunc(_spriteStep01BlendFunc);

        ///// # _txtStep01
        this._txtStep01 = new ck.CustomRichTextExtend(cc.size(233.839, 97.4466));
        this._txtStep01.setName("_txtStep01");
        this._layoutStep01.addChild(this._txtStep01);
        this._txtStep01.setCascadeOpacityEnabled(true);
        this._txtStep01.setCascadeColorEnabled(true);
        this._txtStep01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtStep01, 0.7243, 0.6141);
        this._txtStep01.setDefaultColor(cc.color(135, 110, 80, 255));
        let _txtStep01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep01);
        _txtStep01LayoutComponent.setPositionPercentXEnabled(true);
        _txtStep01LayoutComponent.setPositionPercentX(0.7243);
        _txtStep01LayoutComponent.setPositionPercentYEnabled(true);
        _txtStep01LayoutComponent.setPositionPercentY(0.6141);
        this._txtStep01.setTouchEnabled(false);
        this._txtStep01.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtStep01.setDefaultSize(26);
        this._txtStep01.setDefaultAlignHorizontal(2);
        this._txtStep01.setDefaultAlignVertical(5);
        this._txtStep01.setString(gm.localize.getText("TXT_EVENT_COLLECTOR_GUIDE_01"));

        ///// # _spriteToken01
        this._spriteToken01 = new cc.Sprite();
        this._spriteToken01.setName("_spriteToken01");
        this._layoutStep01.addChild(this._spriteToken01);
        this._spriteToken01.setCascadeOpacityEnabled(true);
        this._spriteToken01.setCascadeColorEnabled(true);
        this._spriteToken01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteToken01, 0.5231, 0.25);
        this._spriteToken01.setScale(0.32, 0.32);
        let _spriteToken01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteToken01);
        _spriteToken01LayoutComponent.setPositionPercentXEnabled(true);
        _spriteToken01LayoutComponent.setPositionPercentX(0.5231);
        _spriteToken01LayoutComponent.setPositionPercentYEnabled(true);
        _spriteToken01LayoutComponent.setPositionPercentY(0.25);
        let sf = cc.spriteFrameCache.getSpriteFrame("event-collector/IconToken_01.png"); if (sf) this._spriteToken01.setSpriteFrame(sf);
        let _spriteToken01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteToken01BlendFunc.src = 1;
        _spriteToken01BlendFunc.dst = 771;
        this._spriteToken01.setBlendFunc(_spriteToken01BlendFunc);

        ///// # _spriteToken02
        this._spriteToken02 = new cc.Sprite();
        this._spriteToken02.setName("_spriteToken02");
        this._layoutStep01.addChild(this._spriteToken02);
        this._spriteToken02.setCascadeOpacityEnabled(true);
        this._spriteToken02.setCascadeColorEnabled(true);
        this._spriteToken02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteToken02, 0.6163, 0.25);
        this._spriteToken02.setScale(0.32, 0.32);
        let _spriteToken02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteToken02);
        _spriteToken02LayoutComponent.setPositionPercentXEnabled(true);
        _spriteToken02LayoutComponent.setPositionPercentX(0.6163);
        _spriteToken02LayoutComponent.setPositionPercentYEnabled(true);
        _spriteToken02LayoutComponent.setPositionPercentY(0.25);
        let sf = cc.spriteFrameCache.getSpriteFrame("event-collector/IconToken_02.png"); if (sf) this._spriteToken02.setSpriteFrame(sf);
        let _spriteToken02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteToken02BlendFunc.src = 1;
        _spriteToken02BlendFunc.dst = 771;
        this._spriteToken02.setBlendFunc(_spriteToken02BlendFunc);

        ///// # _spriteToken03
        this._spriteToken03 = new cc.Sprite();
        this._spriteToken03.setName("_spriteToken03");
        this._layoutStep01.addChild(this._spriteToken03);
        this._spriteToken03.setCascadeOpacityEnabled(true);
        this._spriteToken03.setCascadeColorEnabled(true);
        this._spriteToken03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteToken03, 0.7177, 0.25);
        this._spriteToken03.setScale(0.32, 0.32);
        let _spriteToken03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteToken03);
        _spriteToken03LayoutComponent.setPositionPercentXEnabled(true);
        _spriteToken03LayoutComponent.setPositionPercentX(0.7177);
        _spriteToken03LayoutComponent.setPositionPercentYEnabled(true);
        _spriteToken03LayoutComponent.setPositionPercentY(0.25);
        let sf = cc.spriteFrameCache.getSpriteFrame("event-collector/IconToken_03.png"); if (sf) this._spriteToken03.setSpriteFrame(sf);
        let _spriteToken03BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteToken03BlendFunc.src = 1;
        _spriteToken03BlendFunc.dst = 771;
        this._spriteToken03.setBlendFunc(_spriteToken03BlendFunc);

        ///// # _spriteToken04
        this._spriteToken04 = new cc.Sprite();
        this._spriteToken04.setName("_spriteToken04");
        this._layoutStep01.addChild(this._spriteToken04);
        this._spriteToken04.setCascadeOpacityEnabled(true);
        this._spriteToken04.setCascadeColorEnabled(true);
        this._spriteToken04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteToken04, 0.8227, 0.25);
        this._spriteToken04.setScale(0.32, 0.32);
        let _spriteToken04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteToken04);
        _spriteToken04LayoutComponent.setPositionPercentXEnabled(true);
        _spriteToken04LayoutComponent.setPositionPercentX(0.8227);
        _spriteToken04LayoutComponent.setPositionPercentYEnabled(true);
        _spriteToken04LayoutComponent.setPositionPercentY(0.25);
        let sf = cc.spriteFrameCache.getSpriteFrame("event-collector/IconToken_04.png"); if (sf) this._spriteToken04.setSpriteFrame(sf);
        let _spriteToken04BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteToken04BlendFunc.src = 1;
        _spriteToken04BlendFunc.dst = 771;
        this._spriteToken04.setBlendFunc(_spriteToken04BlendFunc);

        ///// # _spriteToken05
        this._spriteToken05 = new cc.Sprite();
        this._spriteToken05.setName("_spriteToken05");
        this._layoutStep01.addChild(this._spriteToken05);
        this._spriteToken05.setCascadeOpacityEnabled(true);
        this._spriteToken05.setCascadeColorEnabled(true);
        this._spriteToken05.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteToken05, 0.9257, 0.25);
        this._spriteToken05.setScale(0.32, 0.32);
        let _spriteToken05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteToken05);
        _spriteToken05LayoutComponent.setPositionPercentXEnabled(true);
        _spriteToken05LayoutComponent.setPositionPercentX(0.9257);
        _spriteToken05LayoutComponent.setPositionPercentYEnabled(true);
        _spriteToken05LayoutComponent.setPositionPercentY(0.25);
        let sf = cc.spriteFrameCache.getSpriteFrame("event-collector/IconToken_05.png"); if (sf) this._spriteToken05.setSpriteFrame(sf);
        let _spriteToken05BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteToken05BlendFunc.src = 1;
        _spriteToken05BlendFunc.dst = 771;
        this._spriteToken05.setBlendFunc(_spriteToken05BlendFunc);

        ///// # _layoutStep02
        this._layoutStep02 = new ccui.Layout();
        this._layoutStep02.setName("_layoutStep02");
        this._page01.addChild(this._layoutStep02);
        this._layoutStep02.setCascadeOpacityEnabled(true);
        this._layoutStep02.setCascadeColorEnabled(true);
        this._layoutStep02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutStep02, 0.5167, 0.496);
        let _layoutStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutStep02);
        _layoutStep02LayoutComponent.setPositionPercentXEnabled(true);
        _layoutStep02LayoutComponent.setPositionPercentX(0.5167);
        _layoutStep02LayoutComponent.setPositionPercentYEnabled(true);
        _layoutStep02LayoutComponent.setPositionPercentY(0.496);
        this._layoutStep02.setTouchEnabled(true);
        this._layoutStep02.setUnifySizeEnabled(false);
        this._layoutStep02.ignoreContentAdaptWithSize(false);
        this._layoutStep02.setContentSize(cc.size(450.3445, 190.6198));

        ///// # _imgBgr02
        this._imgBgr02 = new ccui.ImageView();
        this._imgBgr02.setName("_imgBgr02");
        this._layoutStep02.addChild(this._imgBgr02);
        this._imgBgr02.setCascadeOpacityEnabled(true);
        this._imgBgr02.setCascadeColorEnabled(true);
        this._imgBgr02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr02, 0.5, 0.5);
        this._imgBgr02.setColor(cc.color(217, 195, 168, 255));
        let _imgBgr02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr02);
        _imgBgr02LayoutComponent.setPositionPercentXEnabled(true);
        _imgBgr02LayoutComponent.setPositionPercentX(0.5);
        _imgBgr02LayoutComponent.setPositionPercentYEnabled(true);
        _imgBgr02LayoutComponent.setPositionPercentY(0.5);
        _imgBgr02LayoutComponent.setPercentWidthEnabled(true);
        _imgBgr02LayoutComponent.setPercentWidth(1);
        _imgBgr02LayoutComponent.setPercentHeightEnabled(true);
        _imgBgr02LayoutComponent.setPercentHeight(1);
        this._imgBgr02.loadTexture("sprites/basics/Rounded32x32.png", 0);
        this._imgBgr02.setUnifySizeEnabled(false);
        this._imgBgr02.ignoreContentAdaptWithSize(false);
        this._imgBgr02.setScale9Enabled(true);
        this._imgBgr02.setCapInsets(cc.rect(10, 10, 12, 12));
        ck.UIUtils.setSizePercent(this._imgBgr02, 1, 1);
        this._imgBgr02.setTouchEnabled(false);

        ///// # _imgStep02
        this._imgStep02 = new ccui.ImageView();
        this._imgStep02.setName("_imgStep02");
        this._layoutStep02.addChild(this._imgStep02);
        this._imgStep02.setCascadeOpacityEnabled(true);
        this._imgStep02.setCascadeColorEnabled(true);
        this._imgStep02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStep02, 0.0113, 0.975);
        let _imgStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep02);
        _imgStep02LayoutComponent.setPositionPercentXEnabled(true);
        _imgStep02LayoutComponent.setPositionPercentX(0.0113);
        _imgStep02LayoutComponent.setPositionPercentYEnabled(true);
        _imgStep02LayoutComponent.setPositionPercentY(0.975);
        _imgStep02LayoutComponent.setPercentWidthEnabled(true);
        _imgStep02LayoutComponent.setPercentWidth(0.1332);
        _imgStep02LayoutComponent.setPercentHeightEnabled(true);
        _imgStep02LayoutComponent.setPercentHeight(0.3189);
        this._imgStep02.loadTexture("event-collector/tutorial/Title.png", 1);
        this._imgStep02.setUnifySizeEnabled(false);
        this._imgStep02.ignoreContentAdaptWithSize(false);
        this._imgStep02.setScale9Enabled(true);
        this._imgStep02.setCapInsets(cc.rect(10, 10, 40, 39));
        ck.UIUtils.setSizePercent(this._imgStep02, 0.1332, 0.3189);
        this._imgStep02.setTouchEnabled(false);

        ///// # _txtTitle02
        this._txtTitle02 = new ck.Text();
        this._txtTitle02.setName("_txtTitle02");
        this._imgStep02.addChild(this._txtTitle02);
        this._txtTitle02.setCascadeOpacityEnabled(true);
        this._txtTitle02.setCascadeColorEnabled(true);
        this._txtTitle02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle02, 0.4668, 0.483);
        let _txtTitle02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle02);
        _txtTitle02LayoutComponent.setPositionPercentXEnabled(true);
        _txtTitle02LayoutComponent.setPositionPercentX(0.4668);
        _txtTitle02LayoutComponent.setPositionPercentYEnabled(true);
        _txtTitle02LayoutComponent.setPositionPercentY(0.483);
        this._txtTitle02.setTouchEnabled(false);
        this._txtTitle02.ignoreContentAdaptWithSize(true);
        this._txtTitle02.setFontName("fonts/GroBold.ttf");
        this._txtTitle02.setDefaultFontSize(35);
        this._txtTitle02.setString("2");
        this._txtTitle02.setTextHorizontalAlignment(0);
        this._txtTitle02.setTextVerticalAlignment(0);
        this._txtTitle02.enableOutline(cc.color(0, 74, 0, 255), 2);

        ///// # _spriteStep02
        this._spriteStep02 = new cc.Sprite();
        this._spriteStep02.setName("_spriteStep02");
        this._layoutStep02.addChild(this._spriteStep02);
        this._spriteStep02.setCascadeOpacityEnabled(true);
        this._spriteStep02.setCascadeColorEnabled(true);
        this._spriteStep02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteStep02, 0.255, 0.5);
        let _spriteStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteStep02);
        _spriteStep02LayoutComponent.setPositionPercentXEnabled(true);
        _spriteStep02LayoutComponent.setPositionPercentX(0.255);
        _spriteStep02LayoutComponent.setPositionPercentYEnabled(true);
        _spriteStep02LayoutComponent.setPositionPercentY(0.5);
        let sf = cc.spriteFrameCache.getSpriteFrame("event-collector/tutorial/Step_02.png"); if (sf) this._spriteStep02.setSpriteFrame(sf);
        let _spriteStep02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteStep02BlendFunc.src = 1;
        _spriteStep02BlendFunc.dst = 771;
        this._spriteStep02.setBlendFunc(_spriteStep02BlendFunc);

        ///// # _txtStep02
        this._txtStep02 = new ck.Text();
        this._txtStep02.setName("_txtStep02");
        this._layoutStep02.addChild(this._txtStep02);
        this._txtStep02.setCascadeOpacityEnabled(true);
        this._txtStep02.setCascadeColorEnabled(true);
        this._txtStep02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtStep02, 0.7243, 0.5092);
        this._txtStep02.setTextColor(cc.color(135, 110, 80, 255));
        let _txtStep02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep02);
        _txtStep02LayoutComponent.setPositionPercentXEnabled(true);
        _txtStep02LayoutComponent.setPositionPercentX(0.7243);
        _txtStep02LayoutComponent.setPositionPercentYEnabled(true);
        _txtStep02LayoutComponent.setPositionPercentY(0.5092);
        this._txtStep02.setTouchEnabled(false);
        this._txtStep02.setUnifySizeEnabled(false);
        this._txtStep02.ignoreContentAdaptWithSize(false);
        this._txtStep02.setContentSize(cc.size(233.839, 137.9668));
        this._txtStep02.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtStep02.setDefaultFontSize(26);
        this._txtStep02.setString(gm.localize.getText("TXT_EVENT_COLLECTOR_GUIDE_02"));
        this._txtStep02.setTextHorizontalAlignment(1);
        this._txtStep02.setTextVerticalAlignment(1);

        ///// # _layoutStep03
        this._layoutStep03 = new ccui.Layout();
        this._layoutStep03.setName("_layoutStep03");
        this._page01.addChild(this._layoutStep03);
        this._layoutStep03.setCascadeOpacityEnabled(true);
        this._layoutStep03.setCascadeColorEnabled(true);
        this._layoutStep03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutStep03, 0.5167, 0.1803);
        let _layoutStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutStep03);
        _layoutStep03LayoutComponent.setPositionPercentXEnabled(true);
        _layoutStep03LayoutComponent.setPositionPercentX(0.5167);
        _layoutStep03LayoutComponent.setPositionPercentYEnabled(true);
        _layoutStep03LayoutComponent.setPositionPercentY(0.1803);
        this._layoutStep03.setTouchEnabled(true);
        this._layoutStep03.setUnifySizeEnabled(false);
        this._layoutStep03.ignoreContentAdaptWithSize(false);
        this._layoutStep03.setContentSize(cc.size(450.3445, 190.6198));

        ///// # _imgBgr03
        this._imgBgr03 = new ccui.ImageView();
        this._imgBgr03.setName("_imgBgr03");
        this._layoutStep03.addChild(this._imgBgr03);
        this._imgBgr03.setCascadeOpacityEnabled(true);
        this._imgBgr03.setCascadeColorEnabled(true);
        this._imgBgr03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr03, 0.5, 0.5);
        this._imgBgr03.setColor(cc.color(217, 195, 168, 255));
        let _imgBgr03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr03);
        _imgBgr03LayoutComponent.setPositionPercentXEnabled(true);
        _imgBgr03LayoutComponent.setPositionPercentX(0.5);
        _imgBgr03LayoutComponent.setPositionPercentYEnabled(true);
        _imgBgr03LayoutComponent.setPositionPercentY(0.5);
        _imgBgr03LayoutComponent.setPercentWidthEnabled(true);
        _imgBgr03LayoutComponent.setPercentWidth(1);
        _imgBgr03LayoutComponent.setPercentHeightEnabled(true);
        _imgBgr03LayoutComponent.setPercentHeight(1);
        this._imgBgr03.loadTexture("sprites/basics/Rounded32x32.png", 0);
        this._imgBgr03.setUnifySizeEnabled(false);
        this._imgBgr03.ignoreContentAdaptWithSize(false);
        this._imgBgr03.setScale9Enabled(true);
        this._imgBgr03.setCapInsets(cc.rect(10, 10, 12, 12));
        ck.UIUtils.setSizePercent(this._imgBgr03, 1, 1);
        this._imgBgr03.setTouchEnabled(false);

        ///// # _imgStep03
        this._imgStep03 = new ccui.ImageView();
        this._imgStep03.setName("_imgStep03");
        this._layoutStep03.addChild(this._imgStep03);
        this._imgStep03.setCascadeOpacityEnabled(true);
        this._imgStep03.setCascadeColorEnabled(true);
        this._imgStep03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStep03, 0.0113, 0.975);
        let _imgStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep03);
        _imgStep03LayoutComponent.setPositionPercentXEnabled(true);
        _imgStep03LayoutComponent.setPositionPercentX(0.0113);
        _imgStep03LayoutComponent.setPositionPercentYEnabled(true);
        _imgStep03LayoutComponent.setPositionPercentY(0.975);
        _imgStep03LayoutComponent.setPercentWidthEnabled(true);
        _imgStep03LayoutComponent.setPercentWidth(0.1332);
        _imgStep03LayoutComponent.setPercentHeightEnabled(true);
        _imgStep03LayoutComponent.setPercentHeight(0.3189);
        this._imgStep03.loadTexture("event-collector/tutorial/Title.png", 1);
        this._imgStep03.setUnifySizeEnabled(false);
        this._imgStep03.ignoreContentAdaptWithSize(false);
        this._imgStep03.setScale9Enabled(true);
        this._imgStep03.setCapInsets(cc.rect(10, 10, 40, 39));
        ck.UIUtils.setSizePercent(this._imgStep03, 0.1332, 0.3189);
        this._imgStep03.setTouchEnabled(false);

        ///// # _txtTitle03
        this._txtTitle03 = new ck.Text();
        this._txtTitle03.setName("_txtTitle03");
        this._imgStep03.addChild(this._txtTitle03);
        this._txtTitle03.setCascadeOpacityEnabled(true);
        this._txtTitle03.setCascadeColorEnabled(true);
        this._txtTitle03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle03, 0.4668, 0.483);
        let _txtTitle03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle03);
        _txtTitle03LayoutComponent.setPositionPercentXEnabled(true);
        _txtTitle03LayoutComponent.setPositionPercentX(0.4668);
        _txtTitle03LayoutComponent.setPositionPercentYEnabled(true);
        _txtTitle03LayoutComponent.setPositionPercentY(0.483);
        this._txtTitle03.setTouchEnabled(false);
        this._txtTitle03.ignoreContentAdaptWithSize(true);
        this._txtTitle03.setFontName("fonts/GroBold.ttf");
        this._txtTitle03.setDefaultFontSize(35);
        this._txtTitle03.setString("3");
        this._txtTitle03.setTextHorizontalAlignment(0);
        this._txtTitle03.setTextVerticalAlignment(0);
        this._txtTitle03.enableOutline(cc.color(0, 74, 0, 255), 2);

        ///// # _spriteStep03
        this._spriteStep03 = new cc.Sprite();
        this._spriteStep03.setName("_spriteStep03");
        this._layoutStep03.addChild(this._spriteStep03);
        this._spriteStep03.setCascadeOpacityEnabled(true);
        this._spriteStep03.setCascadeColorEnabled(true);
        this._spriteStep03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteStep03, 0.255, 0.5);
        let _spriteStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteStep03);
        _spriteStep03LayoutComponent.setPositionPercentXEnabled(true);
        _spriteStep03LayoutComponent.setPositionPercentX(0.255);
        _spriteStep03LayoutComponent.setPositionPercentYEnabled(true);
        _spriteStep03LayoutComponent.setPositionPercentY(0.5);
        let sf = cc.spriteFrameCache.getSpriteFrame("event-collector/tutorial/Step_03.png"); if (sf) this._spriteStep03.setSpriteFrame(sf);
        let _spriteStep03BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteStep03BlendFunc.src = 1;
        _spriteStep03BlendFunc.dst = 771;
        this._spriteStep03.setBlendFunc(_spriteStep03BlendFunc);

        ///// # _txtStep03
        this._txtStep03 = new ck.Text();
        this._txtStep03.setName("_txtStep03");
        this._layoutStep03.addChild(this._txtStep03);
        this._txtStep03.setCascadeOpacityEnabled(true);
        this._txtStep03.setCascadeColorEnabled(true);
        this._txtStep03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtStep03, 0.7243, 0.5092);
        this._txtStep03.setTextColor(cc.color(135, 110, 80, 255));
        let _txtStep03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep03);
        _txtStep03LayoutComponent.setPositionPercentXEnabled(true);
        _txtStep03LayoutComponent.setPositionPercentX(0.7243);
        _txtStep03LayoutComponent.setPositionPercentYEnabled(true);
        _txtStep03LayoutComponent.setPositionPercentY(0.5092);
        this._txtStep03.setTouchEnabled(false);
        this._txtStep03.setUnifySizeEnabled(false);
        this._txtStep03.ignoreContentAdaptWithSize(false);
        this._txtStep03.setContentSize(cc.size(233.839, 137.9668));
        this._txtStep03.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtStep03.setDefaultFontSize(26);
        this._txtStep03.setString(gm.localize.getText("TXT_EVENT_COLLECTOR_GUIDE_03"));
        this._txtStep03.setTextHorizontalAlignment(1);
        this._txtStep03.setTextVerticalAlignment(1);

        ///// # _page02
        this._page02 = new ccui.Layout();
        this._page02.setName("_page02");
        this._pageView.addPage(this._page02);
        this._page02.setCascadeOpacityEnabled(true);
        this._page02.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._page02, 0.5, 0);
        let _page02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._page02);
        this._page02.setTouchEnabled(true);
        this._page02.setUnifySizeEnabled(false);
        this._page02.ignoreContentAdaptWithSize(false);
        this._page02.setContentSize(cc.size(490.8706, 734.8258));

        ///// # _layoutStep04
        this._layoutStep04 = new ccui.Layout();
        this._layoutStep04.setName("_layoutStep04");
        this._page02.addChild(this._layoutStep04);
        this._layoutStep04.setCascadeOpacityEnabled(true);
        this._layoutStep04.setCascadeColorEnabled(true);
        this._layoutStep04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutStep04, 0.5167, 0.8148);
        let _layoutStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutStep04);
        _layoutStep04LayoutComponent.setPositionPercentXEnabled(true);
        _layoutStep04LayoutComponent.setPositionPercentX(0.5167);
        _layoutStep04LayoutComponent.setPositionPercentYEnabled(true);
        _layoutStep04LayoutComponent.setPositionPercentY(0.8148);
        this._layoutStep04.setTouchEnabled(true);
        this._layoutStep04.setUnifySizeEnabled(false);
        this._layoutStep04.ignoreContentAdaptWithSize(false);
        this._layoutStep04.setContentSize(cc.size(450.3445, 190.6198));

        ///// # _imgBgr04
        this._imgBgr04 = new ccui.ImageView();
        this._imgBgr04.setName("_imgBgr04");
        this._layoutStep04.addChild(this._imgBgr04);
        this._imgBgr04.setCascadeOpacityEnabled(true);
        this._imgBgr04.setCascadeColorEnabled(true);
        this._imgBgr04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr04, 0.5, 0.5);
        this._imgBgr04.setColor(cc.color(217, 195, 168, 255));
        let _imgBgr04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr04);
        _imgBgr04LayoutComponent.setPositionPercentXEnabled(true);
        _imgBgr04LayoutComponent.setPositionPercentX(0.5);
        _imgBgr04LayoutComponent.setPositionPercentYEnabled(true);
        _imgBgr04LayoutComponent.setPositionPercentY(0.5);
        _imgBgr04LayoutComponent.setPercentWidthEnabled(true);
        _imgBgr04LayoutComponent.setPercentWidth(1);
        _imgBgr04LayoutComponent.setPercentHeightEnabled(true);
        _imgBgr04LayoutComponent.setPercentHeight(1);
        this._imgBgr04.loadTexture("sprites/basics/Rounded32x32.png", 0);
        this._imgBgr04.setUnifySizeEnabled(false);
        this._imgBgr04.ignoreContentAdaptWithSize(false);
        this._imgBgr04.setScale9Enabled(true);
        this._imgBgr04.setCapInsets(cc.rect(10, 10, 12, 12));
        ck.UIUtils.setSizePercent(this._imgBgr04, 1, 1);
        this._imgBgr04.setTouchEnabled(false);

        ///// # _imgStep04
        this._imgStep04 = new ccui.ImageView();
        this._imgStep04.setName("_imgStep04");
        this._layoutStep04.addChild(this._imgStep04);
        this._imgStep04.setCascadeOpacityEnabled(true);
        this._imgStep04.setCascadeColorEnabled(true);
        this._imgStep04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStep04, 0.0113, 0.975);
        let _imgStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep04);
        _imgStep04LayoutComponent.setPositionPercentXEnabled(true);
        _imgStep04LayoutComponent.setPositionPercentX(0.0113);
        _imgStep04LayoutComponent.setPositionPercentYEnabled(true);
        _imgStep04LayoutComponent.setPositionPercentY(0.975);
        _imgStep04LayoutComponent.setPercentWidthEnabled(true);
        _imgStep04LayoutComponent.setPercentWidth(0.1332);
        _imgStep04LayoutComponent.setPercentHeightEnabled(true);
        _imgStep04LayoutComponent.setPercentHeight(0.3189);
        this._imgStep04.loadTexture("event-collector/tutorial/Title.png", 1);
        this._imgStep04.setUnifySizeEnabled(false);
        this._imgStep04.ignoreContentAdaptWithSize(false);
        this._imgStep04.setScale9Enabled(true);
        this._imgStep04.setCapInsets(cc.rect(10, 10, 40, 39));
        ck.UIUtils.setSizePercent(this._imgStep04, 0.1332, 0.3189);
        this._imgStep04.setTouchEnabled(false);

        ///// # _txtTitle04
        this._txtTitle04 = new ck.Text();
        this._txtTitle04.setName("_txtTitle04");
        this._imgStep04.addChild(this._txtTitle04);
        this._txtTitle04.setCascadeOpacityEnabled(true);
        this._txtTitle04.setCascadeColorEnabled(true);
        this._txtTitle04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle04, 0.4668, 0.483);
        let _txtTitle04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle04);
        _txtTitle04LayoutComponent.setPositionPercentXEnabled(true);
        _txtTitle04LayoutComponent.setPositionPercentX(0.4668);
        _txtTitle04LayoutComponent.setPositionPercentYEnabled(true);
        _txtTitle04LayoutComponent.setPositionPercentY(0.483);
        this._txtTitle04.setTouchEnabled(false);
        this._txtTitle04.ignoreContentAdaptWithSize(true);
        this._txtTitle04.setFontName("fonts/GroBold.ttf");
        this._txtTitle04.setDefaultFontSize(35);
        this._txtTitle04.setString("4");
        this._txtTitle04.setTextHorizontalAlignment(0);
        this._txtTitle04.setTextVerticalAlignment(0);
        this._txtTitle04.enableOutline(cc.color(0, 74, 0, 255), 2);

        ///// # _spriteStep04
        this._spriteStep04 = new cc.Sprite();
        this._spriteStep04.setName("_spriteStep04");
        this._layoutStep04.addChild(this._spriteStep04);
        this._spriteStep04.setCascadeOpacityEnabled(true);
        this._spriteStep04.setCascadeColorEnabled(true);
        this._spriteStep04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteStep04, 0.255, 0.5);
        let _spriteStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteStep04);
        _spriteStep04LayoutComponent.setPositionPercentXEnabled(true);
        _spriteStep04LayoutComponent.setPositionPercentX(0.255);
        _spriteStep04LayoutComponent.setPositionPercentYEnabled(true);
        _spriteStep04LayoutComponent.setPositionPercentY(0.5);
        let sf = cc.spriteFrameCache.getSpriteFrame("event-collector/tutorial/Step_04.png"); if (sf) this._spriteStep04.setSpriteFrame(sf);
        let _spriteStep04BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteStep04BlendFunc.src = 1;
        _spriteStep04BlendFunc.dst = 771;
        this._spriteStep04.setBlendFunc(_spriteStep04BlendFunc);

        ///// # _txtStep04
        this._txtStep04 = new ck.CustomRichTextExtend(cc.size(233.839, 137.9668));
        this._txtStep04.setName("_txtStep04");
        this._layoutStep04.addChild(this._txtStep04);
        this._txtStep04.setCascadeOpacityEnabled(true);
        this._txtStep04.setCascadeColorEnabled(true);
        this._txtStep04.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtStep04, 0.7399, 0.5092);
        this._txtStep04.setDefaultColor(cc.color(135, 110, 80, 255));
        let _txtStep04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep04);
        _txtStep04LayoutComponent.setPositionPercentXEnabled(true);
        _txtStep04LayoutComponent.setPositionPercentX(0.7399);
        _txtStep04LayoutComponent.setPositionPercentYEnabled(true);
        _txtStep04LayoutComponent.setPositionPercentY(0.5092);
        this._txtStep04.setTouchEnabled(false);
        this._txtStep04.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtStep04.setDefaultSize(26);
        this._txtStep04.setDefaultAlignHorizontal(2);
        this._txtStep04.setDefaultAlignVertical(5);
        this._txtStep04.setString(gm.localize.getText("TXT_EVENT_COLLECTOR_GUIDE_04"));

        ///// # _layoutStep05
        this._layoutStep05 = new ccui.Layout();
        this._layoutStep05.setName("_layoutStep05");
        this._page02.addChild(this._layoutStep05);
        this._layoutStep05.setCascadeOpacityEnabled(true);
        this._layoutStep05.setCascadeColorEnabled(true);
        this._layoutStep05.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutStep05, 0.5167, 0.496);
        let _layoutStep05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutStep05);
        _layoutStep05LayoutComponent.setPositionPercentXEnabled(true);
        _layoutStep05LayoutComponent.setPositionPercentX(0.5167);
        _layoutStep05LayoutComponent.setPositionPercentYEnabled(true);
        _layoutStep05LayoutComponent.setPositionPercentY(0.496);
        this._layoutStep05.setTouchEnabled(true);
        this._layoutStep05.setUnifySizeEnabled(false);
        this._layoutStep05.ignoreContentAdaptWithSize(false);
        this._layoutStep05.setContentSize(cc.size(450.3445, 190.6198));

        ///// # _imgBgr05
        this._imgBgr05 = new ccui.ImageView();
        this._imgBgr05.setName("_imgBgr05");
        this._layoutStep05.addChild(this._imgBgr05);
        this._imgBgr05.setCascadeOpacityEnabled(true);
        this._imgBgr05.setCascadeColorEnabled(true);
        this._imgBgr05.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr05, 0.5, 0.5);
        this._imgBgr05.setColor(cc.color(217, 195, 168, 255));
        let _imgBgr05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr05);
        _imgBgr05LayoutComponent.setPositionPercentXEnabled(true);
        _imgBgr05LayoutComponent.setPositionPercentX(0.5);
        _imgBgr05LayoutComponent.setPositionPercentYEnabled(true);
        _imgBgr05LayoutComponent.setPositionPercentY(0.5);
        _imgBgr05LayoutComponent.setPercentWidthEnabled(true);
        _imgBgr05LayoutComponent.setPercentWidth(1);
        _imgBgr05LayoutComponent.setPercentHeightEnabled(true);
        _imgBgr05LayoutComponent.setPercentHeight(1);
        this._imgBgr05.loadTexture("sprites/basics/Rounded32x32.png", 0);
        this._imgBgr05.setUnifySizeEnabled(false);
        this._imgBgr05.ignoreContentAdaptWithSize(false);
        this._imgBgr05.setScale9Enabled(true);
        this._imgBgr05.setCapInsets(cc.rect(10, 10, 12, 12));
        ck.UIUtils.setSizePercent(this._imgBgr05, 1, 1);
        this._imgBgr05.setTouchEnabled(false);

        ///// # _imgStep05
        this._imgStep05 = new ccui.ImageView();
        this._imgStep05.setName("_imgStep05");
        this._layoutStep05.addChild(this._imgStep05);
        this._imgStep05.setCascadeOpacityEnabled(true);
        this._imgStep05.setCascadeColorEnabled(true);
        this._imgStep05.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStep05, 0.0113, 0.975);
        let _imgStep05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep05);
        _imgStep05LayoutComponent.setPositionPercentXEnabled(true);
        _imgStep05LayoutComponent.setPositionPercentX(0.0113);
        _imgStep05LayoutComponent.setPositionPercentYEnabled(true);
        _imgStep05LayoutComponent.setPositionPercentY(0.975);
        _imgStep05LayoutComponent.setPercentWidthEnabled(true);
        _imgStep05LayoutComponent.setPercentWidth(0.1332);
        _imgStep05LayoutComponent.setPercentHeightEnabled(true);
        _imgStep05LayoutComponent.setPercentHeight(0.3189);
        this._imgStep05.loadTexture("event-collector/tutorial/Title.png", 1);
        this._imgStep05.setUnifySizeEnabled(false);
        this._imgStep05.ignoreContentAdaptWithSize(false);
        this._imgStep05.setScale9Enabled(true);
        this._imgStep05.setCapInsets(cc.rect(10, 10, 40, 39));
        ck.UIUtils.setSizePercent(this._imgStep05, 0.1332, 0.3189);
        this._imgStep05.setTouchEnabled(false);

        ///// # _txtTitle05
        this._txtTitle05 = new ck.Text();
        this._txtTitle05.setName("_txtTitle05");
        this._imgStep05.addChild(this._txtTitle05);
        this._txtTitle05.setCascadeOpacityEnabled(true);
        this._txtTitle05.setCascadeColorEnabled(true);
        this._txtTitle05.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle05, 0.4668, 0.483);
        let _txtTitle05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle05);
        _txtTitle05LayoutComponent.setPositionPercentXEnabled(true);
        _txtTitle05LayoutComponent.setPositionPercentX(0.4668);
        _txtTitle05LayoutComponent.setPositionPercentYEnabled(true);
        _txtTitle05LayoutComponent.setPositionPercentY(0.483);
        this._txtTitle05.setTouchEnabled(false);
        this._txtTitle05.ignoreContentAdaptWithSize(true);
        this._txtTitle05.setFontName("fonts/GroBold.ttf");
        this._txtTitle05.setDefaultFontSize(35);
        this._txtTitle05.setString("5");
        this._txtTitle05.setTextHorizontalAlignment(0);
        this._txtTitle05.setTextVerticalAlignment(0);
        this._txtTitle05.enableOutline(cc.color(0, 74, 0, 255), 2);

        ///// # _spriteStep05
        this._spriteStep05 = new cc.Sprite();
        this._spriteStep05.setName("_spriteStep05");
        this._layoutStep05.addChild(this._spriteStep05);
        this._spriteStep05.setCascadeOpacityEnabled(true);
        this._spriteStep05.setCascadeColorEnabled(true);
        this._spriteStep05.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteStep05, 0.255, 0.5);
        let _spriteStep05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteStep05);
        _spriteStep05LayoutComponent.setPositionPercentXEnabled(true);
        _spriteStep05LayoutComponent.setPositionPercentX(0.255);
        _spriteStep05LayoutComponent.setPositionPercentYEnabled(true);
        _spriteStep05LayoutComponent.setPositionPercentY(0.5);
        let sf = cc.spriteFrameCache.getSpriteFrame("event-collector/tutorial/Step_05.png"); if (sf) this._spriteStep05.setSpriteFrame(sf);
        let _spriteStep05BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteStep05BlendFunc.src = 1;
        _spriteStep05BlendFunc.dst = 771;
        this._spriteStep05.setBlendFunc(_spriteStep05BlendFunc);

        ///// # _txtStep05
        this._txtStep05 = new ck.Text();
        this._txtStep05.setName("_txtStep05");
        this._layoutStep05.addChild(this._txtStep05);
        this._txtStep05.setCascadeOpacityEnabled(true);
        this._txtStep05.setCascadeColorEnabled(true);
        this._txtStep05.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtStep05, 0.7399, 0.5092);
        this._txtStep05.setTextColor(cc.color(135, 110, 80, 255));
        let _txtStep05LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep05);
        _txtStep05LayoutComponent.setPositionPercentXEnabled(true);
        _txtStep05LayoutComponent.setPositionPercentX(0.7399);
        _txtStep05LayoutComponent.setPositionPercentYEnabled(true);
        _txtStep05LayoutComponent.setPositionPercentY(0.5092);
        this._txtStep05.setTouchEnabled(false);
        this._txtStep05.setUnifySizeEnabled(false);
        this._txtStep05.ignoreContentAdaptWithSize(false);
        this._txtStep05.setContentSize(cc.size(233.839, 137.9668));
        this._txtStep05.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtStep05.setDefaultFontSize(26);
        this._txtStep05.setString(gm.localize.getText("TXT_EVENT_COLLECTOR_GUIDE_05"));
        this._txtStep05.setTextHorizontalAlignment(1);
        this._txtStep05.setTextVerticalAlignment(1);

        ///// # _layoutStep06
        this._layoutStep06 = new ccui.Layout();
        this._layoutStep06.setName("_layoutStep06");
        this._page02.addChild(this._layoutStep06);
        this._layoutStep06.setCascadeOpacityEnabled(true);
        this._layoutStep06.setCascadeColorEnabled(true);
        this._layoutStep06.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutStep06, 0.5167, 0.1803);
        let _layoutStep06LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutStep06);
        _layoutStep06LayoutComponent.setPositionPercentXEnabled(true);
        _layoutStep06LayoutComponent.setPositionPercentX(0.5167);
        _layoutStep06LayoutComponent.setPositionPercentYEnabled(true);
        _layoutStep06LayoutComponent.setPositionPercentY(0.1803);
        this._layoutStep06.setTouchEnabled(true);
        this._layoutStep06.setUnifySizeEnabled(false);
        this._layoutStep06.ignoreContentAdaptWithSize(false);
        this._layoutStep06.setContentSize(cc.size(450.3445, 190.6198));

        ///// # _imgBgr06
        this._imgBgr06 = new ccui.ImageView();
        this._imgBgr06.setName("_imgBgr06");
        this._layoutStep06.addChild(this._imgBgr06);
        this._imgBgr06.setCascadeOpacityEnabled(true);
        this._imgBgr06.setCascadeColorEnabled(true);
        this._imgBgr06.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr06, 0.5, 0.5);
        this._imgBgr06.setColor(cc.color(217, 195, 168, 255));
        let _imgBgr06LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr06);
        _imgBgr06LayoutComponent.setPositionPercentXEnabled(true);
        _imgBgr06LayoutComponent.setPositionPercentX(0.5);
        _imgBgr06LayoutComponent.setPositionPercentYEnabled(true);
        _imgBgr06LayoutComponent.setPositionPercentY(0.5);
        _imgBgr06LayoutComponent.setPercentWidthEnabled(true);
        _imgBgr06LayoutComponent.setPercentWidth(1);
        _imgBgr06LayoutComponent.setPercentHeightEnabled(true);
        _imgBgr06LayoutComponent.setPercentHeight(1);
        this._imgBgr06.loadTexture("sprites/basics/Rounded32x32.png", 0);
        this._imgBgr06.setUnifySizeEnabled(false);
        this._imgBgr06.ignoreContentAdaptWithSize(false);
        this._imgBgr06.setScale9Enabled(true);
        this._imgBgr06.setCapInsets(cc.rect(10, 10, 12, 12));
        ck.UIUtils.setSizePercent(this._imgBgr06, 1, 1);
        this._imgBgr06.setTouchEnabled(false);

        ///// # _imgStep06
        this._imgStep06 = new ccui.ImageView();
        this._imgStep06.setName("_imgStep06");
        this._layoutStep06.addChild(this._imgStep06);
        this._imgStep06.setCascadeOpacityEnabled(true);
        this._imgStep06.setCascadeColorEnabled(true);
        this._imgStep06.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStep06, 0.0113, 0.975);
        let _imgStep06LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStep06);
        _imgStep06LayoutComponent.setPositionPercentXEnabled(true);
        _imgStep06LayoutComponent.setPositionPercentX(0.0113);
        _imgStep06LayoutComponent.setPositionPercentYEnabled(true);
        _imgStep06LayoutComponent.setPositionPercentY(0.975);
        _imgStep06LayoutComponent.setPercentWidthEnabled(true);
        _imgStep06LayoutComponent.setPercentWidth(0.1332);
        _imgStep06LayoutComponent.setPercentHeightEnabled(true);
        _imgStep06LayoutComponent.setPercentHeight(0.3189);
        this._imgStep06.loadTexture("event-collector/tutorial/Title.png", 1);
        this._imgStep06.setUnifySizeEnabled(false);
        this._imgStep06.ignoreContentAdaptWithSize(false);
        this._imgStep06.setScale9Enabled(true);
        this._imgStep06.setCapInsets(cc.rect(10, 10, 40, 39));
        ck.UIUtils.setSizePercent(this._imgStep06, 0.1332, 0.3189);
        this._imgStep06.setTouchEnabled(false);

        ///// # _txtTitle06
        this._txtTitle06 = new ck.Text();
        this._txtTitle06.setName("_txtTitle06");
        this._imgStep06.addChild(this._txtTitle06);
        this._txtTitle06.setCascadeOpacityEnabled(true);
        this._txtTitle06.setCascadeColorEnabled(true);
        this._txtTitle06.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle06, 0.4668, 0.483);
        let _txtTitle06LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle06);
        _txtTitle06LayoutComponent.setPositionPercentXEnabled(true);
        _txtTitle06LayoutComponent.setPositionPercentX(0.4668);
        _txtTitle06LayoutComponent.setPositionPercentYEnabled(true);
        _txtTitle06LayoutComponent.setPositionPercentY(0.483);
        this._txtTitle06.setTouchEnabled(false);
        this._txtTitle06.ignoreContentAdaptWithSize(true);
        this._txtTitle06.setFontName("fonts/GroBold.ttf");
        this._txtTitle06.setDefaultFontSize(35);
        this._txtTitle06.setString("6");
        this._txtTitle06.setTextHorizontalAlignment(0);
        this._txtTitle06.setTextVerticalAlignment(0);
        this._txtTitle06.enableOutline(cc.color(0, 74, 0, 255), 2);

        ///// # _spriteStep06
        this._spriteStep06 = new cc.Sprite();
        this._spriteStep06.setName("_spriteStep06");
        this._layoutStep06.addChild(this._spriteStep06);
        this._spriteStep06.setCascadeOpacityEnabled(true);
        this._spriteStep06.setCascadeColorEnabled(true);
        this._spriteStep06.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteStep06, 0.255, 0.5);
        let _spriteStep06LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteStep06);
        _spriteStep06LayoutComponent.setPositionPercentXEnabled(true);
        _spriteStep06LayoutComponent.setPositionPercentX(0.255);
        _spriteStep06LayoutComponent.setPositionPercentYEnabled(true);
        _spriteStep06LayoutComponent.setPositionPercentY(0.5);
        let sf = cc.spriteFrameCache.getSpriteFrame("event-collector/tutorial/Step_06.png"); if (sf) this._spriteStep06.setSpriteFrame(sf);
        let _spriteStep06BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteStep06BlendFunc.src = 1;
        _spriteStep06BlendFunc.dst = 771;
        this._spriteStep06.setBlendFunc(_spriteStep06BlendFunc);

        ///// # _txtStep06
        this._txtStep06 = new ck.Text();
        this._txtStep06.setName("_txtStep06");
        this._layoutStep06.addChild(this._txtStep06);
        this._txtStep06.setCascadeOpacityEnabled(true);
        this._txtStep06.setCascadeColorEnabled(true);
        this._txtStep06.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtStep06, 0.7376, 0.5092);
        this._txtStep06.setTextColor(cc.color(135, 110, 80, 255));
        let _txtStep06LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtStep06);
        _txtStep06LayoutComponent.setPositionPercentXEnabled(true);
        _txtStep06LayoutComponent.setPositionPercentX(0.7376);
        _txtStep06LayoutComponent.setPositionPercentYEnabled(true);
        _txtStep06LayoutComponent.setPositionPercentY(0.5092);
        this._txtStep06.setTouchEnabled(false);
        this._txtStep06.setUnifySizeEnabled(false);
        this._txtStep06.ignoreContentAdaptWithSize(false);
        this._txtStep06.setContentSize(cc.size(233.839, 137.9668));
        this._txtStep06.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtStep06.setDefaultFontSize(26);
        this._txtStep06.setString(gm.localize.getText("TXT_EVENT_COLLECTOR_GUIDE_06"));
        this._txtStep06.setTextHorizontalAlignment(1);
        this._txtStep06.setTextVerticalAlignment(1);

        ///// # _btnArrowLeft
        this._btnArrowLeft = new ccui.Button();
        this._btnArrowLeft.setName("_btnArrowLeft");
        this._layoutPopup.addChild(this._btnArrowLeft);
        this._btnArrowLeft.setCascadeOpacityEnabled(true);
        this._btnArrowLeft.setCascadeColorEnabled(true);
        this._btnArrowLeft.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._btnArrowLeft, 0.05, 0.5);
        let _btnArrowLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnArrowLeft);
        _btnArrowLeftLayoutComponent.setPositionPercentXEnabled(true);
        _btnArrowLeftLayoutComponent.setPositionPercentX(0.05);
        _btnArrowLeftLayoutComponent.setPositionPercentYEnabled(true);
        _btnArrowLeftLayoutComponent.setPositionPercentY(0.5);
        this._btnArrowLeft.loadTextureDisabled("icons/color/other/ArrowGray.png", 1);
        this._btnArrowLeft.loadTexturePressed("icons/color/other/Arrow.png", 1);
        this._btnArrowLeft.loadTextureNormal("icons/color/other/Arrow.png", 1);
        this._btnArrowLeft.setUnifySizeEnabled(false);
        this._btnArrowLeft.ignoreContentAdaptWithSize(false);
        this._btnArrowLeft.setContentSize(cc.size(51, 99));
        this._btnArrowLeft.setTouchEnabled(true);

        ///// # _btnArrowRight
        this._btnArrowRight = new ccui.Button();
        this._btnArrowRight.setName("_btnArrowRight");
        this._layoutPopup.addChild(this._btnArrowRight);
        this._btnArrowRight.setCascadeOpacityEnabled(true);
        this._btnArrowRight.setCascadeColorEnabled(true);
        this._btnArrowRight.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._btnArrowRight, 0.95, 0.5);
        this._btnArrowRight.setFlippedX(true);
        let _btnArrowRightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnArrowRight);
        _btnArrowRightLayoutComponent.setPositionPercentXEnabled(true);
        _btnArrowRightLayoutComponent.setPositionPercentX(0.95);
        _btnArrowRightLayoutComponent.setPositionPercentYEnabled(true);
        _btnArrowRightLayoutComponent.setPositionPercentY(0.5);
        this._btnArrowRight.loadTextureDisabled("icons/color/other/ArrowGray.png", 1);
        this._btnArrowRight.loadTexturePressed("icons/color/other/Arrow.png", 1);
        this._btnArrowRight.loadTextureNormal("icons/color/other/Arrow.png", 1);
        this._btnArrowRight.setUnifySizeEnabled(false);
        this._btnArrowRight.ignoreContentAdaptWithSize(false);
        this._btnArrowRight.setContentSize(cc.size(51, 99));
        this._btnArrowRight.setTouchEnabled(true);

    },



});

/**
 * Create EventCollectorGuidePopup
 * @returns {_ccs.EventCollectorGuidePopup}
 */
_ccs.EventCollectorGuidePopup.create = function () {
    return new _ccs.EventCollectorGuidePopup();
};
