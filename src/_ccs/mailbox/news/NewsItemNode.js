/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.NewsItemNode
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.NewsItemNode = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ck.Text} */
    _txtTitle: null,
    /** @type {ck.Text} */
    _txtDescription: null,
    /** @type {ck.Text} */
    _txtTime: null,
    /** @type {ccui.ImageView} */
    _imgReddot: null,
    /** @type {ccui.ImageView} */
    _imgLine: null,


    /**
     * _ccs.NewsItemNode constructor
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
        this._layoutRoot.setTouchEnabled(true);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(466, 186));

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._layoutRoot.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.5);
        this._imgBackground.setColor(cc.color(223, 205, 183, 255));
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundLayoutComponent.setPercentWidth(1);
        _imgBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundLayoutComponent.setPercentHeight(1);
        this._imgBackground.loadTexture("basics/shapes/RoundedRectangle_64px_5px.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setScale9Enabled(true);
        this._imgBackground.setCapInsets(cc.rect(10, 10, 44, 44));
        ck.UIUtils.setSizePercent(this._imgBackground, 1, 1);
        this._imgBackground.setTouchEnabled(false);

        ///// # _txtTitle
        this._txtTitle = new ck.Text();
        this._txtTitle.setName("_txtTitle");
        this._layoutRoot.addChild(this._txtTitle);
        this._txtTitle.setCascadeOpacityEnabled(true);
        this._txtTitle.setCascadeColorEnabled(true);
        this._txtTitle.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle, 0.02, 0.8556);
        this._txtTitle.setTextColor(cc.color(109, 91, 76, 255));
        let _txtTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle);
        _txtTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentX(0.02);
        _txtTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentY(0.8556);
        this._txtTitle.setTouchEnabled(false);
        this._txtTitle.setUnifySizeEnabled(false);
        this._txtTitle.ignoreContentAdaptWithSize(false);
        this._txtTitle.setContentSize(cc.size(260.2718, 30));
        this._txtTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTitle.setDefaultFontSize(30);
        this._txtTitle.setTextHorizontalAlignment(0);
        this._txtTitle.setTextVerticalAlignment(1);

        ///// # _txtDescription
        this._txtDescription = new ck.Text();
        this._txtDescription.setName("_txtDescription");
        this._layoutRoot.addChild(this._txtDescription);
        this._txtDescription.setCascadeOpacityEnabled(true);
        this._txtDescription.setCascadeColorEnabled(true);
        this._txtDescription.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._txtDescription, 0.5, 0.7028);
        this._txtDescription.setTextColor(cc.color(111, 58, 48, 255));
        let _txtDescriptionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDescription);
        _txtDescriptionLayoutComponent.setPositionPercentXEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentX(0.5);
        _txtDescriptionLayoutComponent.setPositionPercentYEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentY(0.7028);
        this._txtDescription.setTouchEnabled(false);
        this._txtDescription.setUnifySizeEnabled(false);
        this._txtDescription.ignoreContentAdaptWithSize(false);
        this._txtDescription.setContentSize(cc.size(446.5434, 120.7444));
        this._txtDescription.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDescription.setDefaultFontSize(25);
        this._txtDescription.setTextHorizontalAlignment(0);
        this._txtDescription.setTextVerticalAlignment(0);

        ///// # _txtTime
        this._txtTime = new ck.Text();
        this._txtTime.setName("_txtTime");
        this._layoutRoot.addChild(this._txtTime);
        this._txtTime.setCascadeOpacityEnabled(true);
        this._txtTime.setCascadeColorEnabled(true);
        this._txtTime.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTime, 0.9512, 0.8626);
        this._txtTime.setTextColor(cc.color(160, 134, 114, 255));
        let _txtTimeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTime);
        _txtTimeLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLayoutComponent.setPositionPercentX(0.9512);
        _txtTimeLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLayoutComponent.setPositionPercentY(0.8626);
        this._txtTime.setTouchEnabled(false);
        this._txtTime.setUnifySizeEnabled(false);
        this._txtTime.ignoreContentAdaptWithSize(false);
        this._txtTime.setContentSize(cc.size(142, 30));
        this._txtTime.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTime.setDefaultFontSize(24);
        this._txtTime.setTextHorizontalAlignment(2);
        this._txtTime.setTextVerticalAlignment(1);

        ///// # _imgReddot
        this._imgReddot = new ccui.ImageView();
        this._imgReddot.setName("_imgReddot");
        this._layoutRoot.addChild(this._imgReddot);
        this._imgReddot.setCascadeOpacityEnabled(true);
        this._imgReddot.setCascadeColorEnabled(true);
        this._imgReddot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgReddot, 0.9752, 0.9336);
        this._imgReddot.setScale(0.8, 0.8);
        let _imgReddotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgReddot);
        _imgReddotLayoutComponent.setPositionPercentXEnabled(true);
        _imgReddotLayoutComponent.setPositionPercentX(0.9752);
        _imgReddotLayoutComponent.setPositionPercentYEnabled(true);
        _imgReddotLayoutComponent.setPositionPercentY(0.9336);
        this._imgReddot.loadTexture("basics/other/RedDot.png", 1);
        this._imgReddot.setUnifySizeEnabled(false);
        this._imgReddot.ignoreContentAdaptWithSize(false);
        this._imgReddot.setContentSize(cc.size(31, 31));
        this._imgReddot.setTouchEnabled(false);

        ///// # _imgLine
        this._imgLine = new ccui.ImageView();
        this._imgLine.setName("_imgLine");
        this._layoutRoot.addChild(this._imgLine);
        this._imgLine.setCascadeOpacityEnabled(true);
        this._imgLine.setCascadeColorEnabled(true);
        this._imgLine.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLine, 0.5, -0.018);
        this._imgLine.setVisible(false);
        let _imgLineLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLine);
        _imgLineLayoutComponent.setPositionPercentXEnabled(true);
        _imgLineLayoutComponent.setPositionPercentX(0.5);
        _imgLineLayoutComponent.setPositionPercentYEnabled(true);
        _imgLineLayoutComponent.setPositionPercentY(-0.018);
        _imgLineLayoutComponent.setPercentWidthEnabled(true);
        _imgLineLayoutComponent.setPercentWidth(0.9828);
        this._imgLine.loadTexture("basics/other/LightBlueLine.png", 1);
        this._imgLine.setUnifySizeEnabled(false);
        this._imgLine.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._imgLine, 0.9828);
        this._imgLine.setContentSize(cc.size(this._imgLine.width, 12));
        this._imgLine.setTouchEnabled(false);

    },



});

/**
 * Create NewsItemNode
 * @returns {_ccs.NewsItemNode}
 */
_ccs.NewsItemNode.create = function () {
    return new _ccs.NewsItemNode();
};
