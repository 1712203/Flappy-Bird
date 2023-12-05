/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ExpPassToken
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ExpPassToken = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    imageBgr: null,
    /** @type {ccui.ImageView} */
    imgIcon: null,
    /** @type {ck.Text} */
    labelNum: null,
    /** @type {ccui.ImageView} */
    imageBgrTips: null,
    /** @type {ck.Text} */
    text_Tips: null,


    /**
     * _ccs.ExpPassToken constructor
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

        ///// # imageBgr
        this.imageBgr = new ccui.Layout();
        this.imageBgr.setName("imageBgr");
        this.addChild(this.imageBgr);
        this.imageBgr.setCascadeOpacityEnabled(true);
        this.imageBgr.setCascadeColorEnabled(true);
        this.imageBgr.setAnchorPoint(cc.p(0.5, 0.5));
        let imageBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imageBgr);
        imageBgrLayoutComponent.setPositionPercentXEnabled(true);
        imageBgrLayoutComponent.setPositionPercentX(0);
        imageBgrLayoutComponent.setPositionPercentYEnabled(true);
        imageBgrLayoutComponent.setPositionPercentY(0);
        this.imageBgr.setTouchEnabled(true);
        this.imageBgr.setUnifySizeEnabled(false);
        this.imageBgr.ignoreContentAdaptWithSize(false);
        this.imageBgr.setContentSize(cc.size(105, 50));

        ///// # imgIcon
        this.imgIcon = new ccui.ImageView();
        this.imgIcon.setName("imgIcon");
        this.imageBgr.addChild(this.imgIcon);
        this.imgIcon.setCascadeOpacityEnabled(true);
        this.imgIcon.setCascadeColorEnabled(true);
        this.imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgIcon, 0.5804, 0.46);
        this.imgIcon.setScale(0.5, 0.5);
        this.imgIcon.setRotationY(-0.0007);
        let imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgIcon);
        imgIconLayoutComponent.setPositionPercentXEnabled(true);
        imgIconLayoutComponent.setPositionPercentX(0.5804);
        imgIconLayoutComponent.setPositionPercentYEnabled(true);
        imgIconLayoutComponent.setPositionPercentY(0.46);
        this.imgIcon.loadTexture("e12_pass_4.png", 1);
        this.imgIcon.setUnifySizeEnabled(false);
        this.imgIcon.ignoreContentAdaptWithSize(false);
        this.imgIcon.setContentSize(cc.size(170, 107));
        this.imgIcon.setTouchEnabled(false);

        ///// # labelNum
        this.labelNum = new ck.Text();
        this.labelNum.setName("labelNum");
        this.imageBgr.addChild(this.labelNum);
        this.labelNum.setCascadeOpacityEnabled(true);
        this.labelNum.setCascadeColorEnabled(true);
        this.labelNum.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.labelNum, 0.1, 0.5553);
        let labelNumLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.labelNum);
        labelNumLayoutComponent.setPositionPercentYEnabled(true);
        labelNumLayoutComponent.setPositionPercentY(0.5553);
        this.labelNum.setTouchEnabled(false);
        this.labelNum.ignoreContentAdaptWithSize(true);
        this.labelNum.setFontName("fonts/LilitaOneRegular.ttf");
        this.labelNum.setDefaultFontSize(30);
        this.labelNum.setString("+");
        this.labelNum.setTextHorizontalAlignment(2);
        this.labelNum.setTextVerticalAlignment(1);
        this.labelNum.enableOutline(cc.color(0, 79, 157, 255), 1);

        ///// # imageBgrTips
        this.imageBgrTips = new ccui.ImageView();
        this.imageBgrTips.setName("imageBgrTips");
        this.imageBgr.addChild(this.imageBgrTips);
        this.imageBgrTips.setCascadeOpacityEnabled(true);
        this.imageBgrTips.setCascadeColorEnabled(true);
        this.imageBgrTips.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this.imageBgrTips, 0.5, 0.9473);
        this.imageBgrTips.setRotationY(-0.0022);
        let imageBgrTipsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imageBgrTips);
        imageBgrTipsLayoutComponent.setPositionPercentXEnabled(true);
        imageBgrTipsLayoutComponent.setPositionPercentX(0.5);
        imageBgrTipsLayoutComponent.setPositionPercentYEnabled(true);
        imageBgrTipsLayoutComponent.setPositionPercentY(0.9473);
        this.imageBgrTips.loadTexture("basics/other/Box_12.png", 1);
        this.imageBgrTips.setUnifySizeEnabled(false);
        this.imageBgrTips.ignoreContentAdaptWithSize(false);
        this.imageBgrTips.setScale9Enabled(true);
        this.imageBgrTips.setCapInsets(cc.rect(24, 9, 106, 108));
        this.imageBgrTips.setContentSize(cc.size(189, 65));
        this.imageBgrTips.setTouchEnabled(false);

        ///// # text_Tips
        this.text_Tips = new ck.Text();
        this.text_Tips.setName("text_Tips");
        this.imageBgrTips.addChild(this.text_Tips);
        this.text_Tips.setCascadeOpacityEnabled(true);
        this.text_Tips.setCascadeColorEnabled(true);
        this.text_Tips.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.text_Tips, 0.5, 0.5);
        this.text_Tips.setRotationY(-0.0009);
        let text_TipsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.text_Tips);
        text_TipsLayoutComponent.setPositionPercentXEnabled(true);
        text_TipsLayoutComponent.setPositionPercentX(0.5);
        text_TipsLayoutComponent.setPositionPercentYEnabled(true);
        text_TipsLayoutComponent.setPositionPercentY(0.5);
        text_TipsLayoutComponent.setPercentWidthEnabled(true);
        text_TipsLayoutComponent.setPercentWidth(1);
        text_TipsLayoutComponent.setPercentHeightEnabled(true);
        text_TipsLayoutComponent.setPercentHeight(1);
        this.text_Tips.setTouchEnabled(false);
        this.text_Tips.setUnifySizeEnabled(false);
        this.text_Tips.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this.text_Tips, 1, 1);
        this.text_Tips.setFontName("fonts/BebasNeueProBold.ttf");
        this.text_Tips.setDefaultFontSize(20);
        this.text_Tips.setString(gm.localize.getText("TXT_DÙNG_ĐỂ_CHƠI_HAPPY_SHARK"));
        this.text_Tips.setTextHorizontalAlignment(1);
        this.text_Tips.setTextVerticalAlignment(1);
        this.text_Tips.enableShadow(cc.color(77, 77, 77, 255), cc.size(0, -2), 0);

    },



});

/**
 * Create ExpPassToken
 * @returns {_ccs.ExpPassToken}
 */
_ccs.ExpPassToken.create = function () {
    return new _ccs.ExpPassToken();
};
