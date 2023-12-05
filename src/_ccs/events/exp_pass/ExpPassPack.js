/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ExpPassPack
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ExpPassPack = ccui.Widget.extend({

    /** @type {ccui.ImageView} */
    imgBgr: null,
    /** @type {ck.Text} */
    labelName: null,
    /** @type {ccui.ImageView} */
    imgStatus: null,


    /**
     * _ccs.ExpPassPack constructor
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

        ///// # imgBgr
        this.imgBgr = new ccui.ImageView();
        this.imgBgr.setName("imgBgr");
        this.addChild(this.imgBgr);
        this.imgBgr.setCascadeOpacityEnabled(true);
        this.imgBgr.setCascadeColorEnabled(true);
        this.imgBgr.setAnchorPoint(cc.p(0.5, 0.5));
        let imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgBgr);
        imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        imgBgrLayoutComponent.setPositionPercentX(0);
        imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        imgBgrLayoutComponent.setPositionPercentY(0);
        this.imgBgr.loadTexture("e12_pass_1.png", 1);
        this.imgBgr.setUnifySizeEnabled(false);
        this.imgBgr.ignoreContentAdaptWithSize(false);
        this.imgBgr.setContentSize(cc.size(174, 99));
        this.imgBgr.setTouchEnabled(false);

        ///// # labelName
        this.labelName = new ck.Text();
        this.labelName.setName("labelName");
        this.imgBgr.addChild(this.labelName);
        this.labelName.setCascadeOpacityEnabled(true);
        this.labelName.setCascadeColorEnabled(true);
        this.labelName.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this.labelName, 0.5, 0.1003);
        this.labelName.setRotationX(8);
        this.labelName.setTextColor(cc.color(248, 216, 1, 255));
        let labelNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.labelName);
        labelNameLayoutComponent.setPositionPercentXEnabled(true);
        labelNameLayoutComponent.setPositionPercentX(0.5);
        this.labelName.setTouchEnabled(false);
        this.labelName.setUnifySizeEnabled(false);
        this.labelName.ignoreContentAdaptWithSize(false);
        this.labelName.setContentSize(cc.size(282.916, 42));
        this.labelName.setFontName("fonts/LilitaOneRegular.ttf");
        this.labelName.setDefaultFontSize(27);
        this.labelName.setString(gm.localize.getText("TXT_GROWTH_PASS"));
        this.labelName.setTextHorizontalAlignment(1);
        this.labelName.setTextVerticalAlignment(1);
        this.labelName.enableOutline(cc.color(168, 92, 11, 255), 1);
        this.labelName.enableShadow(cc.color(119, 54, 24, 255), cc.size(0, -2), 0);

        ///// # imgStatus
        this.imgStatus = new ccui.ImageView();
        this.imgStatus.setName("imgStatus");
        this.imgBgr.addChild(this.imgStatus);
        this.imgStatus.setCascadeOpacityEnabled(true);
        this.imgStatus.setCascadeColorEnabled(true);
        this.imgStatus.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgStatus, 0.0783, 0.9271);
        let imgStatusLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgStatus);
        this.imgStatus.loadTexture("icon_lock_yellow.png", 1);
        this.imgStatus.setUnifySizeEnabled(false);
        this.imgStatus.ignoreContentAdaptWithSize(false);
        this.imgStatus.setContentSize(cc.size(54, 62));
        this.imgStatus.setTouchEnabled(false);

    },



});

/**
 * Create ExpPassPack
 * @returns {_ccs.ExpPassPack}
 */
_ccs.ExpPassPack.create = function () {
    return new _ccs.ExpPassPack();
};
