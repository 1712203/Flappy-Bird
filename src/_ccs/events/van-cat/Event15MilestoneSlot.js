/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.Event15MilestoneSlot
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.Event15MilestoneSlot = ccui.Widget.extend({

    /** @type {ck.Text} */
    _txtAccum: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ccui.Button} */
    _btnSlot: null,
    /** @type {ccui.ImageView} */
    _imgState: null,


    /**
     * _ccs.Event15MilestoneSlot constructor
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

        ///// # _txtAccum
        this._txtAccum = new ck.Text();
        this._txtAccum.setName("_txtAccum");
        this.addChild(this._txtAccum);
        this._txtAccum.setCascadeOpacityEnabled(true);
        this._txtAccum.setCascadeColorEnabled(true);
        this._txtAccum.setAnchorPoint(cc.p(0.5, 0.5));
        this._txtAccum.setPosition(0, 46.0001);
        let _txtAccumLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAccum);
        this._txtAccum.setTouchEnabled(false);
        this._txtAccum.ignoreContentAdaptWithSize(true);
        this._txtAccum.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAccum.setDefaultFontSize(25);
        this._txtAccum.setString("3");
        this._txtAccum.setTextHorizontalAlignment(1);
        this._txtAccum.setTextVerticalAlignment(1);
        this._txtAccum.enableOutline(cc.color(26, 26, 26, 255), 2);
        this._txtAccum.enableShadow(cc.color(77, 77, 77, 255), cc.size(0, -2), 0);

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0);
        this._imgIcon.loadTexture("event15_cat_head.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(49, 55));
        this._imgIcon.setTouchEnabled(false);

        ///// # _btnSlot
        this._btnSlot = new ccui.Button();
        this._btnSlot.setName("_btnSlot");
        this.addChild(this._btnSlot);
        this._btnSlot.setCascadeOpacityEnabled(true);
        this._btnSlot.setCascadeColorEnabled(true);
        this._btnSlot.setAnchorPoint(cc.p(0.5, 0));
        this._btnSlot.setPosition(0, 66.0002);
        let _btnSlotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnSlot);
        this._btnSlot.loadTextureDisabled("event15_slot_milestone_1.png", 1);
        this._btnSlot.loadTexturePressed("event15_slot_milestone_1.png", 1);
        this._btnSlot.loadTextureNormal("event15_slot_milestone_1.png", 1);
        this._btnSlot.setUnifySizeEnabled(false);
        this._btnSlot.ignoreContentAdaptWithSize(false);
        this._btnSlot.setScale9Enabled(true);
        this._btnSlot.setCapInsets(cc.rect(15, 11, 125, 185));
        this._btnSlot.setContentSize(cc.size(155, 207));
        this._btnSlot.setTouchEnabled(true);

        ///// # _imgState
        this._imgState = new ccui.ImageView();
        this._imgState.setName("_imgState");
        this._btnSlot.addChild(this._imgState);
        this._imgState.setCascadeOpacityEnabled(true);
        this._imgState.setCascadeColorEnabled(true);
        this._imgState.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgState, 0.8768, 0.9429);
        let _imgStateLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgState);
        this._imgState.loadTexture("event15_icon_block.png", 1);
        this._imgState.setUnifySizeEnabled(false);
        this._imgState.ignoreContentAdaptWithSize(false);
        this._imgState.setContentSize(cc.size(47, 57));
        this._imgState.setTouchEnabled(false);

    },



});

/**
 * Create Event15MilestoneSlot
 * @returns {_ccs.Event15MilestoneSlot}
 */
_ccs.Event15MilestoneSlot.create = function () {
    return new _ccs.Event15MilestoneSlot();
};
