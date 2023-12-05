/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.DragonKnightBanner
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.DragonKnightBanner = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {cc.Node} */
    _nodeHeader: null,
    /** @type {cc.Node} */
    _nodeDragon: null,
    /** @type {ccui.ImageView} */
    _imgLearnMore: null,
    /** @type {ck.Text} */
    _txtLearnMore: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,


    /**
     * _ccs.DragonKnightBanner constructor
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

        ///// # _root
        this._root = new ccui.Layout();
        this._root.setName("_root");
        this.addChild(this._root);
        this._root.setCascadeOpacityEnabled(true);
        this._root.setCascadeColorEnabled(true);
        this._root.setAnchorPoint(cc.p(0.5, 0.5));
        this._root.setPosition(0.0012, 0.0001);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(582, 932.9359));

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._root.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.6125);
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(0.6125);
        this._imgBackground.loadTexture("dragon-knight/Banner.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setContentSize(cc.size(582, 536));
        this._imgBackground.setTouchEnabled(false);

        ///// # _nodeHeader
        this._nodeHeader = new cc.Node();
        this._nodeHeader.setName("_nodeHeader");
        this._root.addChild(this._nodeHeader);
        this._nodeHeader.setCascadeOpacityEnabled(true);
        this._nodeHeader.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeHeader, 0.5, 0.9);
        let _nodeHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeHeader);
        _nodeHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _nodeHeaderLayoutComponent.setPositionPercentX(0.5);
        _nodeHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _nodeHeaderLayoutComponent.setPositionPercentY(0.9);

        ///// # _nodeDragon
        this._nodeDragon = new cc.Node();
        this._nodeDragon.setName("_nodeDragon");
        this._root.addChild(this._nodeDragon);
        this._nodeDragon.setCascadeOpacityEnabled(true);
        this._nodeDragon.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeDragon, 0.5, 0.32);
        let _nodeDragonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeDragon);
        _nodeDragonLayoutComponent.setPositionPercentXEnabled(true);
        _nodeDragonLayoutComponent.setPositionPercentX(0.5);
        _nodeDragonLayoutComponent.setPositionPercentYEnabled(true);
        _nodeDragonLayoutComponent.setPositionPercentY(0.32);

        ///// # _imgLearnMore
        this._imgLearnMore = new ccui.ImageView();
        this._imgLearnMore.setName("_imgLearnMore");
        this._root.addChild(this._imgLearnMore);
        this._imgLearnMore.setCascadeOpacityEnabled(true);
        this._imgLearnMore.setCascadeColorEnabled(true);
        this._imgLearnMore.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgLearnMore, 0.5, 0.0432);
        let _imgLearnMoreLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgLearnMore);
        _imgLearnMoreLayoutComponent.setPositionPercentXEnabled(true);
        _imgLearnMoreLayoutComponent.setPositionPercentX(0.5);
        _imgLearnMoreLayoutComponent.setPositionPercentYEnabled(true);
        _imgLearnMoreLayoutComponent.setPositionPercentY(0.0432);
        this._imgLearnMore.loadTexture("buttons/rectangles/02_Green.png", 1);
        this._imgLearnMore.setUnifySizeEnabled(false);
        this._imgLearnMore.ignoreContentAdaptWithSize(false);
        this._imgLearnMore.setContentSize(cc.size(240, 88));
        this._imgLearnMore.setTouchEnabled(false);

        ///// # _txtLearnMore
        this._txtLearnMore = new ck.Text();
        this._txtLearnMore.setName("_txtLearnMore");
        this._imgLearnMore.addChild(this._txtLearnMore);
        this._txtLearnMore.setCascadeOpacityEnabled(true);
        this._txtLearnMore.setCascadeColorEnabled(true);
        this._txtLearnMore.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtLearnMore, 0.5, 0.55);
        this._txtLearnMore.setTextColor(cc.color(28, 119, 7, 255));
        let _txtLearnMoreLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtLearnMore);
        _txtLearnMoreLayoutComponent.setPositionPercentXEnabled(true);
        _txtLearnMoreLayoutComponent.setPositionPercentX(0.5);
        _txtLearnMoreLayoutComponent.setPositionPercentYEnabled(true);
        _txtLearnMoreLayoutComponent.setPositionPercentY(0.55);
        this._txtLearnMore.setTouchEnabled(false);
        this._txtLearnMore.setUnifySizeEnabled(false);
        this._txtLearnMore.ignoreContentAdaptWithSize(false);
        this._txtLearnMore.setContentSize(cc.size(222, 65));
        this._txtLearnMore.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtLearnMore.setDefaultFontSize(45);
        this._txtLearnMore.setString(gm.localize.getText("TXT_LEARN_MORE"));
        this._txtLearnMore.setTextHorizontalAlignment(1);
        this._txtLearnMore.setTextVerticalAlignment(1);
        this._txtLearnMore.enableShadow(cc.color(192, 241, 92, 255), cc.size(0, -2), 0);
        this._txtLearnMore.autoFitSingleLine();

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._root.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.9595, 0.968);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.9595);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.968);
        this._imgClose.loadTexture("buttons/circles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(68, 76));
        this._imgClose.setTouchEnabled(false);

    },



});

/**
 * Create DragonKnightBanner
 * @returns {_ccs.DragonKnightBanner}
 */
_ccs.DragonKnightBanner.create = function () {
    return new _ccs.DragonKnightBanner();
};
