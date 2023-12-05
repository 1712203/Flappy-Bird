/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.Paris
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.Paris = ccui.Widget.extend({

    /** @type {ccui.ImageView} */
    _imgBuilding: null,
    /** @type {ccui.ImageView} */
    _imgBuildingName: null,
    /** @type {ccui.ImageView} */
    _imgCheck: null,
    /** @type {ck.Text} */
    _txtCheck: null,


    /**
     * _ccs.Paris constructor
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

        ///// # _imgBuilding
        this._imgBuilding = new ccui.ImageView();
        this._imgBuilding.setName("_imgBuilding");
        this.addChild(this._imgBuilding);
        this._imgBuilding.setCascadeOpacityEnabled(true);
        this._imgBuilding.setCascadeColorEnabled(true);
        this._imgBuilding.setAnchorPoint(cc.p(0.5, 0.05));
        this._imgBuilding.setPosition(-0.0001, -48.0007);
        let _imgBuildingLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBuilding);
        this._imgBuilding.loadTexture("around-the-world/BuildingParis.png", 1);
        this._imgBuilding.setUnifySizeEnabled(false);
        this._imgBuilding.ignoreContentAdaptWithSize(false);
        this._imgBuilding.setContentSize(cc.size(167, 242));
        this._imgBuilding.setTouchEnabled(false);

        ///// # _imgBuildingName
        this._imgBuildingName = new ccui.ImageView();
        this._imgBuildingName.setName("_imgBuildingName");
        this.addChild(this._imgBuildingName);
        this._imgBuildingName.setCascadeOpacityEnabled(true);
        this._imgBuildingName.setCascadeColorEnabled(true);
        this._imgBuildingName.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgBuildingName.setPosition(2.2366, -22.2446);
        let _imgBuildingNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBuildingName);
        this._imgBuildingName.loadTexture("around-the-world/TextParis.png", 1);
        this._imgBuildingName.setUnifySizeEnabled(false);
        this._imgBuildingName.ignoreContentAdaptWithSize(false);
        this._imgBuildingName.setContentSize(cc.size(115, 38));
        this._imgBuildingName.setTouchEnabled(false);

        ///// # _imgCheck
        this._imgCheck = new ccui.ImageView();
        this._imgCheck.setName("_imgCheck");
        this.addChild(this._imgCheck);
        this._imgCheck.setCascadeOpacityEnabled(true);
        this._imgCheck.setCascadeColorEnabled(true);
        this._imgCheck.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgCheck.setPosition(-0.0001, 51.9985);
        let _imgCheckLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCheck);
        this._imgCheck.loadTexture("basics/other/RedBox.png", 1);
        this._imgCheck.setUnifySizeEnabled(false);
        this._imgCheck.ignoreContentAdaptWithSize(false);
        this._imgCheck.setContentSize(cc.size(84, 32));
        this._imgCheck.setTouchEnabled(false);

        ///// # _txtCheck
        this._txtCheck = new ck.Text();
        this._txtCheck.setName("_txtCheck");
        this._imgCheck.addChild(this._txtCheck);
        this._txtCheck.setCascadeOpacityEnabled(true);
        this._txtCheck.setCascadeColorEnabled(true);
        this._txtCheck.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCheck, 0.5, 0.5);
        this._txtCheck.setTextColor(cc.color(233, 62, 67, 255));
        let _txtCheckLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCheck);
        _txtCheckLayoutComponent.setPositionPercentXEnabled(true);
        _txtCheckLayoutComponent.setPositionPercentX(0.5);
        _txtCheckLayoutComponent.setPositionPercentYEnabled(true);
        _txtCheckLayoutComponent.setPositionPercentY(0.5);
        this._txtCheck.setTouchEnabled(false);
        this._txtCheck.ignoreContentAdaptWithSize(true);
        this._txtCheck.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCheck.setDefaultFontSize(18);
        this._txtCheck.setString(gm.localize.getText("TXT_CLAIMED"));
        this._txtCheck.setTextHorizontalAlignment(1);
        this._txtCheck.setTextVerticalAlignment(1);
        this._txtCheck.enableOutline(cc.color.WHITE, 1);

    },



});

/**
 * Create Paris
 * @returns {_ccs.Paris}
 */
_ccs.Paris.create = function () {
    return new _ccs.Paris();
};
