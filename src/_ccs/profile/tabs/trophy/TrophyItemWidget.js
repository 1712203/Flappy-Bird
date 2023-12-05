/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.TrophyItemWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.TrophyItemWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutItem: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ccui.ImageView} */
    _imgStar01: null,
    /** @type {ccui.ImageView} */
    _imgStar02: null,
    /** @type {ccui.ImageView} */
    _imgStar03: null,
    /** @type {ck.Text} */
    _txtName: null,


    /**
     * _ccs.TrophyItemWidget constructor
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

        ///// # _layoutRoot
        this._layoutRoot = new ccui.Layout();
        this._layoutRoot.setName("_layoutRoot");
        this.addChild(this._layoutRoot);
        this._layoutRoot.setCascadeOpacityEnabled(true);
        this._layoutRoot.setCascadeColorEnabled(true);
        this._layoutRoot.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        _layoutRootLayoutComponent.setPositionPercentXEnabled(true);
        _layoutRootLayoutComponent.setPositionPercentX(0);
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(136, 174));
        this._layoutRoot.setBackGroundColorType(1);
        this._layoutRoot.setBackGroundColor(cc.color(150, 200, 255, 255));
        this._layoutRoot.setBackGroundColorOpacity(0);

        ///// # _layoutItem
        this._layoutItem = new ccui.Layout();
        this._layoutItem.setName("_layoutItem");
        this._layoutRoot.addChild(this._layoutItem);
        this._layoutItem.setCascadeOpacityEnabled(true);
        this._layoutItem.setCascadeColorEnabled(true);
        this._layoutItem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutItem, 0.5, 0.5632);
        let _layoutItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutItem);
        _layoutItemLayoutComponent.setPositionPercentXEnabled(true);
        _layoutItemLayoutComponent.setPositionPercentX(0.5);
        this._layoutItem.setTouchEnabled(false);
        this._layoutItem.setUnifySizeEnabled(false);
        this._layoutItem.ignoreContentAdaptWithSize(false);
        this._layoutItem.setContentSize(cc.size(136, 150));
        this._layoutItem.setBackGroundColorType(1);
        this._layoutItem.setBackGroundColor(cc.color(150, 200, 255, 255));
        this._layoutItem.setBackGroundColorOpacity(0);

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._layoutItem.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.3667);
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        this._imgBackground.loadTexture("trophy/medals/Background.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setContentSize(cc.size(136, 110));
        this._imgBackground.setTouchEnabled(false);

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._layoutItem.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.1);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        this._imgIcon.loadTexture("trophy/icons/Icon_02.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(115, 111));
        this._imgIcon.setTouchEnabled(false);

        ///// # _imgStar01
        this._imgStar01 = new ccui.ImageView();
        this._imgStar01.setName("_imgStar01");
        this._layoutItem.addChild(this._imgStar01);
        this._imgStar01.setCascadeOpacityEnabled(true);
        this._imgStar01.setCascadeColorEnabled(true);
        this._imgStar01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStar01, 0.1618, 0.82);
        this._imgStar01.setScale(1.2, 1.2);
        this._imgStar01.setRotation(-10);
        let _imgStar01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStar01);
        this._imgStar01.loadTexture("trophy/medals/StarGray.png", 1);
        this._imgStar01.setUnifySizeEnabled(false);
        this._imgStar01.ignoreContentAdaptWithSize(false);
        this._imgStar01.setContentSize(cc.size(35, 34));
        this._imgStar01.setTouchEnabled(false);

        ///// # _imgStar02
        this._imgStar02 = new ccui.ImageView();
        this._imgStar02.setName("_imgStar02");
        this._layoutItem.addChild(this._imgStar02);
        this._imgStar02.setCascadeOpacityEnabled(true);
        this._imgStar02.setCascadeColorEnabled(true);
        this._imgStar02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStar02, 0.5, 0.87);
        this._imgStar02.setScale(1.2, 1.2);
        let _imgStar02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStar02);
        this._imgStar02.loadTexture("trophy/medals/StarGray.png", 1);
        this._imgStar02.setUnifySizeEnabled(false);
        this._imgStar02.ignoreContentAdaptWithSize(false);
        this._imgStar02.setContentSize(cc.size(35, 34));
        this._imgStar02.setTouchEnabled(false);

        ///// # _imgStar03
        this._imgStar03 = new ccui.ImageView();
        this._imgStar03.setName("_imgStar03");
        this._layoutItem.addChild(this._imgStar03);
        this._imgStar03.setCascadeOpacityEnabled(true);
        this._imgStar03.setCascadeColorEnabled(true);
        this._imgStar03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStar03, 0.8382, 0.82);
        this._imgStar03.setScale(1.2, 1.2);
        this._imgStar03.setRotation(10);
        let _imgStar03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStar03);
        this._imgStar03.loadTexture("trophy/medals/StarGray.png", 1);
        this._imgStar03.setUnifySizeEnabled(false);
        this._imgStar03.ignoreContentAdaptWithSize(false);
        this._imgStar03.setContentSize(cc.size(35, 34));
        this._imgStar03.setTouchEnabled(false);

        ///// # _txtName
        this._txtName = new ck.Text();
        this._txtName.setName("_txtName");
        this._layoutRoot.addChild(this._txtName);
        this._txtName.setCascadeOpacityEnabled(true);
        this._txtName.setCascadeColorEnabled(true);
        this._txtName.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName, 0.5, 0.1609);
        this._txtName.setTextColor(cc.color(77, 77, 77, 255));
        let _txtNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName);
        _txtNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameLayoutComponent.setPositionPercentX(0.5);
        this._txtName.setTouchEnabled(false);
        this._txtName.setUnifySizeEnabled(false);
        this._txtName.ignoreContentAdaptWithSize(false);
        this._txtName.setContentSize(cc.size(160, 66));
        this._txtName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName.setDefaultFontSize(26);
        this._txtName.setTextHorizontalAlignment(1);
        this._txtName.setTextVerticalAlignment(1);
        this._txtName.enableOutline(cc.color.WHITE, 2);
        this._txtName.autoFitMultipleLine();

    },



});

/**
 * Create TrophyItemWidget
 * @returns {_ccs.TrophyItemWidget}
 */
_ccs.TrophyItemWidget.create = function () {
    return new _ccs.TrophyItemWidget();
};
