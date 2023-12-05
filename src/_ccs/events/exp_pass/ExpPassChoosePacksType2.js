/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ExpPassChoosePacksType2
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ExpPassChoosePacksType2 = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    imgBgr: null,
    /** @type {ccui.Button} */
    btnLeft: null,
    /** @type {ccui.Button} */
    btnRight: null,
    /** @type {ccui.PageView} */
    pageView: null,
    /** @type {ck.Text} */
    labelName: null,


    /**
     * _ccs.ExpPassChoosePacksType2 constructor
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
        this.imgBgr = new ccui.Layout();
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
        this.imgBgr.setTouchEnabled(true);
        this.imgBgr.setUnifySizeEnabled(false);
        this.imgBgr.ignoreContentAdaptWithSize(false);
        this.imgBgr.setContentSize(cc.size(338, 146));

        ///// # btnLeft
        this.btnLeft = new ccui.Button();
        this.btnLeft.setName("btnLeft");
        this.imgBgr.addChild(this.btnLeft);
        this.btnLeft.setCascadeOpacityEnabled(true);
        this.btnLeft.setCascadeColorEnabled(true);
        this.btnLeft.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.btnLeft, 0.06, 0.4521);
        this.btnLeft.setScale(1.3, 1.3);
        this.btnLeft.setFlippedX(true);
        let btnLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.btnLeft);
        btnLeftLayoutComponent.setPositionPercentXEnabled(true);
        btnLeftLayoutComponent.setPositionPercentX(0.06);
        btnLeftLayoutComponent.setPositionPercentYEnabled(true);
        btnLeftLayoutComponent.setPositionPercentY(0.4521);
        this.btnLeft.loadTextureDisabled("e12_btn_right.png", 1);
        this.btnLeft.loadTexturePressed("e12_btn_right.png", 1);
        this.btnLeft.loadTextureNormal("e12_btn_right.png", 1);
        this.btnLeft.setUnifySizeEnabled(false);
        this.btnLeft.ignoreContentAdaptWithSize(false);
        this.btnLeft.setScale9Enabled(true);
        this.btnLeft.setCapInsets(cc.rect(9, 11, 11, 35));
        this.btnLeft.setContentSize(cc.size(29, 57));
        this.btnLeft.setTouchEnabled(true);

        ///// # btnRight
        this.btnRight = new ccui.Button();
        this.btnRight.setName("btnRight");
        this.imgBgr.addChild(this.btnRight);
        this.btnRight.setCascadeOpacityEnabled(true);
        this.btnRight.setCascadeColorEnabled(true);
        this.btnRight.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.btnRight, 0.94, 0.4521);
        this.btnRight.setScale(1.3, 1.3);
        let btnRightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.btnRight);
        btnRightLayoutComponent.setPositionPercentXEnabled(true);
        btnRightLayoutComponent.setPositionPercentX(0.94);
        btnRightLayoutComponent.setPositionPercentYEnabled(true);
        btnRightLayoutComponent.setPositionPercentY(0.4521);
        this.btnRight.loadTextureDisabled("e12_btn_right.png", 1);
        this.btnRight.loadTexturePressed("e12_btn_right.png", 1);
        this.btnRight.loadTextureNormal("e12_btn_right.png", 1);
        this.btnRight.setUnifySizeEnabled(false);
        this.btnRight.ignoreContentAdaptWithSize(false);
        this.btnRight.setScale9Enabled(true);
        this.btnRight.setCapInsets(cc.rect(9, 11, 11, 35));
        this.btnRight.setContentSize(cc.size(29, 57));
        this.btnRight.setTouchEnabled(true);

        ///// # pageView
        this.pageView = new ccui.PageView();
        this.pageView.setName("pageView");
        this.imgBgr.addChild(this.pageView);
        this.pageView.setCascadeOpacityEnabled(true);
        this.pageView.setCascadeColorEnabled(true);
        this.pageView.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.pageView, 0.5, 0.5);
        let pageViewLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.pageView);
        pageViewLayoutComponent.setPositionPercentXEnabled(true);
        pageViewLayoutComponent.setPositionPercentX(0.5);
        pageViewLayoutComponent.setPositionPercentYEnabled(true);
        pageViewLayoutComponent.setPositionPercentY(0.5);
        pageViewLayoutComponent.setPercentHeightEnabled(true);
        pageViewLayoutComponent.setPercentHeight(1);
        this.pageView.setTouchEnabled(true);
        this.pageView.setUnifySizeEnabled(false);
        this.pageView.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this.pageView, 1);
        this.pageView.setContentSize(cc.size(196.2657, this.pageView.height));

        ///// # labelName
        this.labelName = new ck.Text();
        this.labelName.setName("labelName");
        this.imgBgr.addChild(this.labelName);
        this.labelName.setCascadeOpacityEnabled(true);
        this.labelName.setCascadeColorEnabled(true);
        this.labelName.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this.labelName, 0.5, 1.12);
        this.labelName.setTextColor(cc.color(248, 216, 1, 255));
        let labelNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.labelName);
        labelNameLayoutComponent.setPositionPercentXEnabled(true);
        labelNameLayoutComponent.setPositionPercentX(0.5);
        labelNameLayoutComponent.setPositionPercentYEnabled(true);
        labelNameLayoutComponent.setPositionPercentY(1.12);
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

    },



});

/**
 * Create ExpPassChoosePacksType2
 * @returns {_ccs.ExpPassChoosePacksType2}
 */
_ccs.ExpPassChoosePacksType2.create = function () {
    return new _ccs.ExpPassChoosePacksType2();
};
