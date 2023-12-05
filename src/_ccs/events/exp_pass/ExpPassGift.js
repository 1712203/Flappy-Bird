/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ExpPassGift
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ExpPassGift = ccui.Widget.extend({

    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ccui.ImageView} */
    imgGift3: null,
    /** @type {ccui.ImageView} */
    imgGift2: null,
    /** @type {ccui.ImageView} */
    imgGift1: null,
    /** @type {ccui.ImageView} */
    imgLock: null,
    /** @type {ccui.ImageView} */
    _imgIconStatus: null,
    /** @type {ccui.ImageView} */
    _imgClaim: null,
    /** @type {ck.Text} */
    _txtClaim: null,


    /**
     * _ccs.ExpPassGift constructor
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

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
        _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentX(0);
        _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentY(0);
        this._imgBgr.loadTexture("item_box_normal.png", 1);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setScale9Enabled(true);
        this._imgBgr.setCapInsets(cc.rect(43, 43, 50, 59));
        this._imgBgr.setContentSize(cc.size(136, 145));
        this._imgBgr.setTouchEnabled(false);

        ///// # imgGift3
        this.imgGift3 = new ccui.ImageView();
        this.imgGift3.setName("imgGift3");
        this._imgBgr.addChild(this.imgGift3);
        this.imgGift3.setCascadeOpacityEnabled(true);
        this.imgGift3.setCascadeColorEnabled(true);
        this.imgGift3.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgGift3, 0.7069, 0.4159);
        let imgGift3LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgGift3);
        imgGift3LayoutComponent.setPositionPercentXEnabled(true);
        imgGift3LayoutComponent.setPositionPercentX(0.7069);
        imgGift3LayoutComponent.setPositionPercentYEnabled(true);
        imgGift3LayoutComponent.setPositionPercentY(0.4159);
        this.imgGift3.loadTexture("Default/ImageFile.png", 0);
        this.imgGift3.setUnifySizeEnabled(false);
        this.imgGift3.ignoreContentAdaptWithSize(false);
        this.imgGift3.setContentSize(cc.size(46, 46));
        this.imgGift3.setTouchEnabled(false);

        ///// # imgGift2
        this.imgGift2 = new ccui.ImageView();
        this.imgGift2.setName("imgGift2");
        this._imgBgr.addChild(this.imgGift2);
        this.imgGift2.setCascadeOpacityEnabled(true);
        this.imgGift2.setCascadeColorEnabled(true);
        this.imgGift2.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgGift2, 0.2823, 0.4176);
        let imgGift2LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgGift2);
        imgGift2LayoutComponent.setPositionPercentXEnabled(true);
        imgGift2LayoutComponent.setPositionPercentX(0.2823);
        imgGift2LayoutComponent.setPositionPercentYEnabled(true);
        imgGift2LayoutComponent.setPositionPercentY(0.4176);
        this.imgGift2.loadTexture("Default/ImageFile.png", 0);
        this.imgGift2.setUnifySizeEnabled(false);
        this.imgGift2.ignoreContentAdaptWithSize(false);
        this.imgGift2.setContentSize(cc.size(46, 46));
        this.imgGift2.setTouchEnabled(false);

        ///// # imgGift1
        this.imgGift1 = new ccui.ImageView();
        this.imgGift1.setName("imgGift1");
        this._imgBgr.addChild(this.imgGift1);
        this.imgGift1.setCascadeOpacityEnabled(true);
        this.imgGift1.setCascadeColorEnabled(true);
        this.imgGift1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgGift1, 0.4896, 0.7682);
        let imgGift1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgGift1);
        imgGift1LayoutComponent.setPositionPercentXEnabled(true);
        imgGift1LayoutComponent.setPositionPercentX(0.4896);
        imgGift1LayoutComponent.setPositionPercentYEnabled(true);
        imgGift1LayoutComponent.setPositionPercentY(0.7682);
        this.imgGift1.loadTexture("Default/ImageFile.png", 0);
        this.imgGift1.setUnifySizeEnabled(false);
        this.imgGift1.ignoreContentAdaptWithSize(false);
        this.imgGift1.setContentSize(cc.size(46, 46));
        this.imgGift1.setTouchEnabled(false);

        ///// # imgLock
        this.imgLock = new ccui.ImageView();
        this.imgLock.setName("imgLock");
        this._imgBgr.addChild(this.imgLock);
        this.imgLock.setCascadeOpacityEnabled(true);
        this.imgLock.setCascadeColorEnabled(true);
        this.imgLock.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgLock, 0.5, 0.5);
        this.imgLock.setOpacity(89);
        this.imgLock.setColor(cc.color(26, 26, 26, 255));
        let imgLockLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgLock);
        imgLockLayoutComponent.setPositionPercentXEnabled(true);
        imgLockLayoutComponent.setPositionPercentX(0.5);
        imgLockLayoutComponent.setPositionPercentYEnabled(true);
        imgLockLayoutComponent.setPositionPercentY(0.5);
        this.imgLock.loadTexture("item_box_normal.png", 1);
        this.imgLock.setUnifySizeEnabled(false);
        this.imgLock.ignoreContentAdaptWithSize(false);
        this.imgLock.setContentSize(cc.size(136, 145));
        this.imgLock.setTouchEnabled(false);

        ///// # _imgIconStatus
        this._imgIconStatus = new ccui.ImageView();
        this._imgIconStatus.setName("_imgIconStatus");
        this._imgBgr.addChild(this._imgIconStatus);
        this._imgIconStatus.setCascadeOpacityEnabled(true);
        this._imgIconStatus.setCascadeColorEnabled(true);
        this._imgIconStatus.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconStatus, 0.4982, 0.0853);
        let _imgIconStatusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconStatus);
        _imgIconStatusLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconStatusLayoutComponent.setPositionPercentX(0.4982);
        _imgIconStatusLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconStatusLayoutComponent.setPositionPercentY(0.0853);
        this._imgIconStatus.loadTexture("icon_lock_yellow.png", 1);
        this._imgIconStatus.setUnifySizeEnabled(false);
        this._imgIconStatus.ignoreContentAdaptWithSize(false);
        this._imgIconStatus.setContentSize(cc.size(54, 62));
        this._imgIconStatus.setTouchEnabled(false);

        ///// # _imgClaim
        this._imgClaim = new ccui.ImageView();
        this._imgClaim.setName("_imgClaim");
        this._imgBgr.addChild(this._imgClaim);
        this._imgClaim.setCascadeOpacityEnabled(true);
        this._imgClaim.setCascadeColorEnabled(true);
        this._imgClaim.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClaim, 0.5, 0.1);
        let _imgClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClaim);
        _imgClaimLayoutComponent.setPositionPercentXEnabled(true);
        _imgClaimLayoutComponent.setPositionPercentX(0.5);
        _imgClaimLayoutComponent.setPositionPercentYEnabled(true);
        _imgClaimLayoutComponent.setPositionPercentY(0.1);
        this._imgClaim.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgClaim.setUnifySizeEnabled(false);
        this._imgClaim.ignoreContentAdaptWithSize(false);
        this._imgClaim.setContentSize(cc.size(106, 41));
        this._imgClaim.setTouchEnabled(false);

        ///// # _txtClaim
        this._txtClaim = new ck.Text();
        this._txtClaim.setName("_txtClaim");
        this._imgClaim.addChild(this._txtClaim);
        this._txtClaim.setCascadeOpacityEnabled(true);
        this._txtClaim.setCascadeColorEnabled(true);
        this._txtClaim.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtClaim, 0.5, 0.4954);
        let _txtClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtClaim);
        _txtClaimLayoutComponent.setPositionPercentXEnabled(true);
        _txtClaimLayoutComponent.setPositionPercentX(0.5);
        _txtClaimLayoutComponent.setPositionPercentYEnabled(true);
        _txtClaimLayoutComponent.setPositionPercentY(0.4954);
        this._txtClaim.setTouchEnabled(false);
        this._txtClaim.setUnifySizeEnabled(false);
        this._txtClaim.ignoreContentAdaptWithSize(false);
        this._txtClaim.setContentSize(cc.size(105.9333, 34));
        this._txtClaim.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtClaim.setDefaultFontSize(25);
        this._txtClaim.setString(gm.localize.getText("TXT_CLAIM"));
        this._txtClaim.setTextHorizontalAlignment(1);
        this._txtClaim.setTextVerticalAlignment(1);
        this._txtClaim.enableOutline(cc.color(29, 115, 25, 255), 2);
        this._txtClaim.enableShadow(cc.color(29, 115, 25, 255), cc.size(0, -1), 0);

    },



});

/**
 * Create ExpPassGift
 * @returns {_ccs.ExpPassGift}
 */
_ccs.ExpPassGift.create = function () {
    return new _ccs.ExpPassGift();
};
