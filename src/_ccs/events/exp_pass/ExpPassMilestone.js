/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ExpPassMilestone
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ExpPassMilestone = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _imgBackground: null,
    /** @type {ccui.Layout} */
    imgBgNormal: null,
    /** @type {ccui.Layout} */
    imgBgVIP: null,
    /** @type {ccui.ImageView} */
    _imgLevelBox: null,
    /** @type {ck.Text} */
    _lbLevel: null,
    /** @type {ccui.ImageView} */
    _imgLine: null,


    /**
     * _ccs.ExpPassMilestone constructor
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

        ///// # _imgBackground
        this._imgBackground = new ccui.Layout();
        this._imgBackground.setName("_imgBackground");
        this.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(0);
        this._imgBackground.setTouchEnabled(true);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setContentSize(cc.size(640, 189));

        ///// # imgBgNormal
        this.imgBgNormal = new ccui.Layout();
        this.imgBgNormal.setName("imgBgNormal");
        this._imgBackground.addChild(this.imgBgNormal);
        this.imgBgNormal.setCascadeOpacityEnabled(true);
        this.imgBgNormal.setCascadeColorEnabled(true);
        this.imgBgNormal.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgBgNormal, 0.75, 0.5);
        let imgBgNormalLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgBgNormal);
        imgBgNormalLayoutComponent.setPositionPercentXEnabled(true);
        imgBgNormalLayoutComponent.setPositionPercentX(0.75);
        imgBgNormalLayoutComponent.setPositionPercentYEnabled(true);
        imgBgNormalLayoutComponent.setPositionPercentY(0.5);
        imgBgNormalLayoutComponent.setPercentHeightEnabled(true);
        imgBgNormalLayoutComponent.setPercentHeight(1);
        this.imgBgNormal.setTouchEnabled(true);
        this.imgBgNormal.setUnifySizeEnabled(false);
        this.imgBgNormal.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this.imgBgNormal, 1);
        this.imgBgNormal.setContentSize(cc.size(276, this.imgBgNormal.height));

        ///// # imgBgVIP
        this.imgBgVIP = new ccui.Layout();
        this.imgBgVIP.setName("imgBgVIP");
        this._imgBackground.addChild(this.imgBgVIP);
        this.imgBgVIP.setCascadeOpacityEnabled(true);
        this.imgBgVIP.setCascadeColorEnabled(true);
        this.imgBgVIP.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.imgBgVIP, 0.25, 0.5);
        let imgBgVIPLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imgBgVIP);
        imgBgVIPLayoutComponent.setPositionPercentXEnabled(true);
        imgBgVIPLayoutComponent.setPositionPercentX(0.25);
        imgBgVIPLayoutComponent.setPositionPercentYEnabled(true);
        imgBgVIPLayoutComponent.setPositionPercentY(0.5);
        imgBgVIPLayoutComponent.setPercentHeightEnabled(true);
        imgBgVIPLayoutComponent.setPercentHeight(1);
        this.imgBgVIP.setTouchEnabled(true);
        this.imgBgVIP.setUnifySizeEnabled(false);
        this.imgBgVIP.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setHeightPercent(this.imgBgVIP, 1);
        this.imgBgVIP.setContentSize(cc.size(276, this.imgBgVIP.height));

        ///// # _imgLevelBox
        this._imgLevelBox = new ccui.ImageView();
        this._imgLevelBox.setName("_imgLevelBox");
        this._imgBackground.addChild(this._imgLevelBox);
        this._imgLevelBox.setCascadeOpacityEnabled(true);
        this._imgLevelBox.setCascadeColorEnabled(true);
        this._imgLevelBox.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLevelBox, 0.5, 0.5);
        let _imgLevelBoxLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLevelBox);
        _imgLevelBoxLayoutComponent.setPositionPercentXEnabled(true);
        _imgLevelBoxLayoutComponent.setPositionPercentX(0.5);
        _imgLevelBoxLayoutComponent.setPositionPercentYEnabled(true);
        _imgLevelBoxLayoutComponent.setPositionPercentY(0.5);
        this._imgLevelBox.loadTexture("e12_star.png", 1);
        this._imgLevelBox.setUnifySizeEnabled(false);
        this._imgLevelBox.ignoreContentAdaptWithSize(false);
        this._imgLevelBox.setContentSize(cc.size(83, 85));
        this._imgLevelBox.setTouchEnabled(false);

        ///// # _lbLevel
        this._lbLevel = new ck.Text();
        this._lbLevel.setName("_lbLevel");
        this._imgLevelBox.addChild(this._lbLevel);
        this._lbLevel.setCascadeOpacityEnabled(true);
        this._lbLevel.setCascadeColorEnabled(true);
        this._lbLevel.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lbLevel, 0.5, 0.52);
        this._lbLevel.setTextColor(cc.color(122, 65, 9, 255));
        let _lbLevelLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lbLevel);
        _lbLevelLayoutComponent.setPositionPercentXEnabled(true);
        _lbLevelLayoutComponent.setPositionPercentX(0.5);
        _lbLevelLayoutComponent.setPositionPercentYEnabled(true);
        _lbLevelLayoutComponent.setPositionPercentY(0.52);
        this._lbLevel.setTouchEnabled(false);
        this._lbLevel.ignoreContentAdaptWithSize(true);
        this._lbLevel.setFontName("fonts/LilitaOneRegular.ttf");
        this._lbLevel.setDefaultFontSize(35);
        this._lbLevel.setString("2");
        this._lbLevel.setTextHorizontalAlignment(1);
        this._lbLevel.setTextVerticalAlignment(1);

        ///// # _imgLine
        this._imgLine = new ccui.ImageView();
        this._imgLine.setName("_imgLine");
        this._imgBackground.addChild(this._imgLine);
        this._imgLine.setCascadeOpacityEnabled(true);
        this._imgLine.setCascadeColorEnabled(true);
        this._imgLine.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgLine, 0.5, 0);
        let _imgLineLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLine);
        _imgLineLayoutComponent.setPositionPercentXEnabled(true);
        _imgLineLayoutComponent.setPositionPercentX(0.5);
        _imgLineLayoutComponent.setPositionPercentYEnabled(true);
        _imgLineLayoutComponent.setPositionPercentY(0);
        this._imgLine.loadTexture("e12_line.png", 1);
        this._imgLine.setUnifySizeEnabled(false);
        this._imgLine.ignoreContentAdaptWithSize(false);
        this._imgLine.setContentSize(cc.size(640, 7));
        this._imgLine.setTouchEnabled(false);

    },



});

/**
 * Create ExpPassMilestone
 * @returns {_ccs.ExpPassMilestone}
 */
_ccs.ExpPassMilestone.create = function () {
    return new _ccs.ExpPassMilestone();
};
