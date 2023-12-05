/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ShareImageRewardWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ShareImageRewardWidget = ccui.Widget.extend({

    /** @type {ccui.ImageView} */
    _imgShareRewardBgr: null,
    /** @type {cc.Sprite} */
    _spriteShareRewardLight: null,
    /** @type {ck.Text} */
    _txtHintShareReward: null,
    /** @type {ccui.ImageView} */
    _imgShareRewardGlow: null,
    /** @type {ShareImageRewardItemWidget} */
    _shareRewardWidget00: null,
    /** @type {ShareImageRewardItemWidget} */
    _shareRewardWidget01: null,
    /** @type {ccui.ImageView} */
    _imgBtnShare: null,
    /** @type {ck.Text} */
    _txtShare: null,


    /**
     * _ccs.ShareImageRewardWidget constructor
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

        ///// # _imgShareRewardBgr
        this._imgShareRewardBgr = new ccui.ImageView();
        this._imgShareRewardBgr.setName("_imgShareRewardBgr");
        this.addChild(this._imgShareRewardBgr);
        this._imgShareRewardBgr.setCascadeOpacityEnabled(true);
        this._imgShareRewardBgr.setCascadeColorEnabled(true);
        this._imgShareRewardBgr.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgShareRewardBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgShareRewardBgr);
        this._imgShareRewardBgr.loadTexture("basics2/other/Box_04.png", 1);
        this._imgShareRewardBgr.setUnifySizeEnabled(false);
        this._imgShareRewardBgr.ignoreContentAdaptWithSize(false);
        this._imgShareRewardBgr.setContentSize(cc.size(424, 172));
        this._imgShareRewardBgr.setTouchEnabled(false);

        ///// # _spriteShareRewardLight
        this._spriteShareRewardLight = new cc.Sprite();
        this._spriteShareRewardLight.setName("_spriteShareRewardLight");
        this._imgShareRewardBgr.addChild(this._spriteShareRewardLight);
        this._spriteShareRewardLight.setCascadeOpacityEnabled(true);
        this._spriteShareRewardLight.setCascadeColorEnabled(true);
        this._spriteShareRewardLight.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteShareRewardLight, 0.5, 0.5);
        let _spriteShareRewardLightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteShareRewardLight);
        _spriteShareRewardLightLayoutComponent.setPositionPercentXEnabled(true);
        _spriteShareRewardLightLayoutComponent.setPositionPercentX(0.5);
        _spriteShareRewardLightLayoutComponent.setPositionPercentYEnabled(true);
        _spriteShareRewardLightLayoutComponent.setPositionPercentY(0.5);
        let sf = cc.spriteFrameCache.getSpriteFrame("basics2/other/Box_04_Light_01.png"); if (sf) this._spriteShareRewardLight.setSpriteFrame(sf);
        let _spriteShareRewardLightBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteShareRewardLightBlendFunc.src = 1;
        _spriteShareRewardLightBlendFunc.dst = 771;
        this._spriteShareRewardLight.setBlendFunc(_spriteShareRewardLightBlendFunc);

        ///// # _txtHintShareReward
        this._txtHintShareReward = new ck.Text();
        this._txtHintShareReward.setName("_txtHintShareReward");
        this._imgShareRewardBgr.addChild(this._txtHintShareReward);
        this._txtHintShareReward.setCascadeOpacityEnabled(true);
        this._txtHintShareReward.setCascadeColorEnabled(true);
        this._txtHintShareReward.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHintShareReward, 0.5, 0.8);
        let _txtHintShareRewardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHintShareReward);
        _txtHintShareRewardLayoutComponent.setPositionPercentXEnabled(true);
        _txtHintShareRewardLayoutComponent.setPositionPercentX(0.5);
        _txtHintShareRewardLayoutComponent.setPositionPercentYEnabled(true);
        _txtHintShareRewardLayoutComponent.setPositionPercentY(0.8);
        this._txtHintShareReward.setTouchEnabled(false);
        this._txtHintShareReward.setUnifySizeEnabled(false);
        this._txtHintShareReward.ignoreContentAdaptWithSize(false);
        this._txtHintShareReward.setContentSize(cc.size(325, 27));
        this._txtHintShareReward.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHintShareReward.setDefaultFontSize(24);
        this._txtHintShareReward.setString(gm.localize.getText("TXT_SHARE_TO_GET_ADDITIONAL_REWARD"));
        this._txtHintShareReward.setTextHorizontalAlignment(1);
        this._txtHintShareReward.setTextVerticalAlignment(1);
        this._txtHintShareReward.autoFitSingleLine();

        ///// # _imgShareRewardGlow
        this._imgShareRewardGlow = new ccui.ImageView();
        this._imgShareRewardGlow.setName("_imgShareRewardGlow");
        this._imgShareRewardBgr.addChild(this._imgShareRewardGlow);
        this._imgShareRewardGlow.setCascadeOpacityEnabled(true);
        this._imgShareRewardGlow.setCascadeColorEnabled(true);
        this._imgShareRewardGlow.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgShareRewardGlow, 0.5, 0.5);
        let _imgShareRewardGlowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgShareRewardGlow);
        _imgShareRewardGlowLayoutComponent.setPositionPercentXEnabled(true);
        _imgShareRewardGlowLayoutComponent.setPositionPercentX(0.5);
        _imgShareRewardGlowLayoutComponent.setPositionPercentYEnabled(true);
        _imgShareRewardGlowLayoutComponent.setPositionPercentY(0.5);
        this._imgShareRewardGlow.loadTexture("basics2/other/Box_04_Glow.png", 1);
        this._imgShareRewardGlow.setUnifySizeEnabled(false);
        this._imgShareRewardGlow.ignoreContentAdaptWithSize(false);
        this._imgShareRewardGlow.setContentSize(cc.size(349, 54));
        this._imgShareRewardGlow.setTouchEnabled(false);

        ///// # _shareRewardWidget00
        this._shareRewardWidget00 = new ShareImageRewardItemWidget();
        this._shareRewardWidget00.setName("_shareRewardWidget00");
        this._imgShareRewardBgr.addChild(this._shareRewardWidget00);
        this._shareRewardWidget00.setCascadeOpacityEnabled(true);
        this._shareRewardWidget00.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._shareRewardWidget00, 0.3, 0.5);
        let _shareRewardWidget00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._shareRewardWidget00);
        _shareRewardWidget00LayoutComponent.setPositionPercentXEnabled(true);
        _shareRewardWidget00LayoutComponent.setPositionPercentX(0.3);
        _shareRewardWidget00LayoutComponent.setPositionPercentYEnabled(true);
        _shareRewardWidget00LayoutComponent.setPositionPercentY(0.5);

        ///// # _shareRewardWidget01
        this._shareRewardWidget01 = new ShareImageRewardItemWidget();
        this._shareRewardWidget01.setName("_shareRewardWidget01");
        this._imgShareRewardBgr.addChild(this._shareRewardWidget01);
        this._shareRewardWidget01.setCascadeOpacityEnabled(true);
        this._shareRewardWidget01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._shareRewardWidget01, 0.7, 0.5);
        let _shareRewardWidget01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._shareRewardWidget01);
        _shareRewardWidget01LayoutComponent.setPositionPercentXEnabled(true);
        _shareRewardWidget01LayoutComponent.setPositionPercentX(0.7);
        _shareRewardWidget01LayoutComponent.setPositionPercentYEnabled(true);
        _shareRewardWidget01LayoutComponent.setPositionPercentY(0.5);

        ///// # _imgBtnShare
        this._imgBtnShare = new ccui.ImageView();
        this._imgBtnShare.setName("_imgBtnShare");
        this.addChild(this._imgBtnShare);
        this._imgBtnShare.setCascadeOpacityEnabled(true);
        this._imgBtnShare.setCascadeColorEnabled(true);
        this._imgBtnShare.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgBtnShare.setPosition(0, -85);
        let _imgBtnShareLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBtnShare);
        _imgBtnShareLayoutComponent.setPositionPercentXEnabled(true);
        _imgBtnShareLayoutComponent.setPositionPercentX(0);
        this._imgBtnShare.loadTexture("buttons/rectangles/Green.png", 1);
        this._imgBtnShare.setUnifySizeEnabled(false);
        this._imgBtnShare.ignoreContentAdaptWithSize(false);
        this._imgBtnShare.setContentSize(cc.size(206, 81));
        this._imgBtnShare.setTouchEnabled(true);

        ///// # _txtShare
        this._txtShare = new ck.Text();
        this._txtShare.setName("_txtShare");
        this._imgBtnShare.addChild(this._txtShare);
        this._txtShare.setCascadeOpacityEnabled(true);
        this._txtShare.setCascadeColorEnabled(true);
        this._txtShare.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtShare, 0.5, 0.54);
        let _txtShareLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtShare);
        _txtShareLayoutComponent.setPositionPercentXEnabled(true);
        _txtShareLayoutComponent.setPositionPercentX(0.5);
        _txtShareLayoutComponent.setPositionPercentYEnabled(true);
        _txtShareLayoutComponent.setPositionPercentY(0.54);
        this._txtShare.setTouchEnabled(false);
        this._txtShare.setUnifySizeEnabled(false);
        this._txtShare.ignoreContentAdaptWithSize(false);
        this._txtShare.setContentSize(cc.size(180, 60));
        this._txtShare.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtShare.setDefaultFontSize(55);
        this._txtShare.setString(gm.localize.getText("TXT_SHARE"));
        this._txtShare.setTextHorizontalAlignment(1);
        this._txtShare.setTextVerticalAlignment(1);
        this._txtShare.enableOutline(cc.color(22, 92, 56, 255), 2);
        this._txtShare.enableShadow(cc.color(22, 92, 56, 255), cc.size(0, -3), 0);
        this._txtShare.autoFitSingleLine();

    },



});

/**
 * Create ShareImageRewardWidget
 * @returns {_ccs.ShareImageRewardWidget}
 */
_ccs.ShareImageRewardWidget.create = function () {
    return new _ccs.ShareImageRewardWidget();
};
