/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.TrophyReceiveTrophyPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.TrophyReceiveTrophyPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ccui.ImageView} */
    _imgTextHeader: null,
    /** @type {ck.Text} */
    _txtDescription: null,
    /** @type {Glow} */
    _glow: null,
    /** @type {SpotLight} */
    _spot: null,
    /** @type {ccui.Layout} */
    _layoutWidgets: null,
    /** @type {ck.TableView} */
    _tableViewWidgets: null,
    /** @type {ck.GridViewVertical} */
    _gridViewWidgets: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,
    /** @type {ShareImageRewardWidget} */
    _nodeShareReward: null,


    /**
     * _ccs.TrophyReceiveTrophyPopup constructor
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
        this._root.setPosition(0, -0.0001);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(false);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(538, 722));

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._root.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.5);
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(0.5);
        this._imgBackground.loadTexture("basics2/popup/PopupReward_01.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setScale9Enabled(true);
        this._imgBackground.setCapInsets(cc.rect(69, 57, 400, 608));
        this._imgBackground.setContentSize(cc.size(538, 722));
        this._imgBackground.setTouchEnabled(false);

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._root.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 0.99);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(0.99);
        this._imgHeader.loadTexture("basics2/popup/Header_01.png", 1);
        this._imgHeader.setUnifySizeEnabled(false);
        this._imgHeader.ignoreContentAdaptWithSize(false);
        this._imgHeader.setContentSize(cc.size(409, 99));
        this._imgHeader.setTouchEnabled(false);

        ///// # _imgTextHeader
        this._imgTextHeader = new ccui.ImageView();
        this._imgTextHeader.setName("_imgTextHeader");
        this._imgHeader.addChild(this._imgTextHeader);
        this._imgTextHeader.setCascadeOpacityEnabled(true);
        this._imgTextHeader.setCascadeColorEnabled(true);
        this._imgTextHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTextHeader, 0.5, 0.5);
        let _imgTextHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTextHeader);
        _imgTextHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgTextHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgTextHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgTextHeaderLayoutComponent.setPositionPercentY(0.5);
        this._imgTextHeader.loadTexture("texts/other/Congraz_02.png", 1);
        this._imgTextHeader.setTouchEnabled(false);

        ///// # _txtDescription
        this._txtDescription = new ck.Text();
        this._txtDescription.setName("_txtDescription");
        this._root.addChild(this._txtDescription);
        this._txtDescription.setCascadeOpacityEnabled(true);
        this._txtDescription.setCascadeColorEnabled(true);
        this._txtDescription.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDescription, 0.5, 0.866);
        this._txtDescription.setTextColor(cc.color(255, 236, 186, 255));
        let _txtDescriptionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDescription);
        _txtDescriptionLayoutComponent.setPositionPercentXEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentX(0.5);
        _txtDescriptionLayoutComponent.setPositionPercentYEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentY(0.866);
        this._txtDescription.setTouchEnabled(false);
        this._txtDescription.setUnifySizeEnabled(false);
        this._txtDescription.ignoreContentAdaptWithSize(false);
        this._txtDescription.setContentSize(cc.size(425, 80));
        this._txtDescription.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDescription.setDefaultFontSize(30);
        this._txtDescription.setString(gm.localize.getText("TXT_TROPHY_RECEIVE_TROPHY_DESCRIPTION").toUpperCase());
        this._txtDescription.setTextHorizontalAlignment(1);
        this._txtDescription.setTextVerticalAlignment(1);
        this._txtDescription.autoFitMultipleLine();

        ///// # _glow
        this._glow = new Glow();
        this._glow.setName("_glow");
        this._root.addChild(this._glow);
        this._glow.setCascadeOpacityEnabled(true);
        this._glow.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._glow, 0.5, 0.465);
        this._glow.setScale(0.8, 0.8);
        this._glow.setOpacity(178);
        let _glowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._glow);
        _glowLayoutComponent.setPositionPercentXEnabled(true);
        _glowLayoutComponent.setPositionPercentX(0.5);
        _glowLayoutComponent.setPositionPercentYEnabled(true);
        _glowLayoutComponent.setPositionPercentY(0.465);

        ///// # _spot
        this._spot = new SpotLight();
        this._spot.setName("_spot");
        this._root.addChild(this._spot);
        this._spot.setCascadeOpacityEnabled(true);
        this._spot.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._spot, 0.5, 0.04);
        this._spot.setScale(0.8, 0.8);
        this._spot.setOpacity(153);
        let _spotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spot);
        _spotLayoutComponent.setPositionPercentXEnabled(true);
        _spotLayoutComponent.setPositionPercentX(0.5);
        _spotLayoutComponent.setPositionPercentYEnabled(true);
        _spotLayoutComponent.setPositionPercentY(0.04);

        ///// # _layoutWidgets
        this._layoutWidgets = new ccui.Layout();
        this._layoutWidgets.setName("_layoutWidgets");
        this._root.addChild(this._layoutWidgets);
        this._layoutWidgets.setCascadeOpacityEnabled(true);
        this._layoutWidgets.setCascadeColorEnabled(true);
        this._layoutWidgets.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutWidgets, 0.5, 0.465);
        let _layoutWidgetsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutWidgets);
        _layoutWidgetsLayoutComponent.setPositionPercentXEnabled(true);
        _layoutWidgetsLayoutComponent.setPositionPercentX(0.5);
        _layoutWidgetsLayoutComponent.setPositionPercentYEnabled(true);
        _layoutWidgetsLayoutComponent.setPositionPercentY(0.465);
        _layoutWidgetsLayoutComponent.setPercentWidthEnabled(true);
        _layoutWidgetsLayoutComponent.setPercentWidth(0.85);
        _layoutWidgetsLayoutComponent.setPercentHeightEnabled(true);
        _layoutWidgetsLayoutComponent.setPercentHeight(0.65);
        this._layoutWidgets.setTouchEnabled(false);
        this._layoutWidgets.setUnifySizeEnabled(false);
        this._layoutWidgets.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutWidgets, 0.85, 0.65);

        ///// # _tableViewWidgets
        this._tableViewWidgets = new ck.TableView();
        this._tableViewWidgets.setName("_tableViewWidgets");
        this._layoutWidgets.addChild(this._tableViewWidgets);
        this._tableViewWidgets.setCascadeOpacityEnabled(true);
        this._tableViewWidgets.setCascadeColorEnabled(true);
        this._tableViewWidgets.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._tableViewWidgets, 0.5, 0.5);
        let _tableViewWidgetsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._tableViewWidgets);
        _tableViewWidgetsLayoutComponent.setPositionPercentXEnabled(true);
        _tableViewWidgetsLayoutComponent.setPositionPercentX(0.5);
        _tableViewWidgetsLayoutComponent.setPositionPercentYEnabled(true);
        _tableViewWidgetsLayoutComponent.setPositionPercentY(0.5);
        _tableViewWidgetsLayoutComponent.setPercentWidthEnabled(true);
        _tableViewWidgetsLayoutComponent.setPercentWidth(1);
        _tableViewWidgetsLayoutComponent.setPercentHeightEnabled(true);
        _tableViewWidgetsLayoutComponent.setPercentHeight(1);

        ///// # _gridViewWidgets
        this._gridViewWidgets = new ck.GridViewVertical();
        this._gridViewWidgets.setName("_gridViewWidgets");
        this._layoutWidgets.addChild(this._gridViewWidgets);
        this._gridViewWidgets.setCascadeOpacityEnabled(true);
        this._gridViewWidgets.setCascadeColorEnabled(true);
        this._gridViewWidgets.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridViewWidgets, 0.5, 0.5);
        let _gridViewWidgetsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewWidgets);
        _gridViewWidgetsLayoutComponent.setPositionPercentXEnabled(true);
        _gridViewWidgetsLayoutComponent.setPositionPercentX(0.5);
        _gridViewWidgetsLayoutComponent.setPositionPercentYEnabled(true);
        _gridViewWidgetsLayoutComponent.setPositionPercentY(0.5);
        _gridViewWidgetsLayoutComponent.setPercentWidthEnabled(true);
        _gridViewWidgetsLayoutComponent.setPercentWidth(1);
        _gridViewWidgetsLayoutComponent.setPercentHeightEnabled(true);
        _gridViewWidgetsLayoutComponent.setPercentHeight(1);

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._root.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.98, 0.98);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.98);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.98);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(81, 83));
        this._imgClose.setTouchEnabled(false);

        ///// # _nodeShareReward
        this._nodeShareReward = new ShareImageRewardWidget();
        this._nodeShareReward.setName("_nodeShareReward");
        this._root.addChild(this._nodeShareReward);
        this._nodeShareReward.setCascadeOpacityEnabled(true);
        this._nodeShareReward.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeShareReward, 0.5, 0);
        let _nodeShareRewardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeShareReward);
        _nodeShareRewardLayoutComponent.setPositionPercentXEnabled(true);
        _nodeShareRewardLayoutComponent.setPositionPercentX(0.5);
        _nodeShareRewardLayoutComponent.setPositionPercentYEnabled(true);
        _nodeShareRewardLayoutComponent.setPositionPercentY(0);

    },



});

/**
 * Create TrophyReceiveTrophyPopup
 * @returns {_ccs.TrophyReceiveTrophyPopup}
 */
_ccs.TrophyReceiveTrophyPopup.create = function () {
    return new _ccs.TrophyReceiveTrophyPopup();
};
