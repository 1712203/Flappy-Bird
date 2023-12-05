/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.AroundTheWorldSelectRewardPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.AroundTheWorldSelectRewardPopup = ccui.Widget.extend({

    /** @type {ccui.ImageView} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgRibbon: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ck.Text} */
    _txtMessage: null,
    /** @type {ck.GridViewVertical} */
    _gridSelections: null,
    /** @type {ccui.ImageView} */
    _imgOk: null,
    /** @type {ck.Text} */
    _txtOk: null,


    /**
     * _ccs.AroundTheWorldSelectRewardPopup constructor
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
        this._root = new ccui.ImageView();
        this._root.setName("_root");
        this.addChild(this._root);
        this._root.setCascadeOpacityEnabled(true);
        this._root.setCascadeColorEnabled(true);
        this._root.setAnchorPoint(cc.p(0.5, 0.5));
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.loadTexture("around-the-world/Popup_01.png", 1);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setScale9Enabled(true);
        this._root.setCapInsets(cc.rect(39, 200, 43, 106));
        this._root.setContentSize(cc.size(583, 570.0148));
        this._root.setTouchEnabled(false);

        ///// # _imgRibbon
        this._imgRibbon = new ccui.ImageView();
        this._imgRibbon.setName("_imgRibbon");
        this._root.addChild(this._imgRibbon);
        this._imgRibbon.setCascadeOpacityEnabled(true);
        this._imgRibbon.setCascadeColorEnabled(true);
        this._imgRibbon.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgRibbon, 0.5, 1);
        let _imgRibbonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRibbon);
        _imgRibbonLayoutComponent.setPositionPercentXEnabled(true);
        _imgRibbonLayoutComponent.setPositionPercentX(0.5);
        _imgRibbonLayoutComponent.setPositionPercentYEnabled(true);
        _imgRibbonLayoutComponent.setPositionPercentY(1);
        this._imgRibbon.loadTexture("around-the-world/RibbonBlue.png", 1);
        this._imgRibbon.setUnifySizeEnabled(false);
        this._imgRibbon.ignoreContentAdaptWithSize(false);
        this._imgRibbon.setContentSize(cc.size(465, 127));
        this._imgRibbon.setTouchEnabled(false);

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._root.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 0.989);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(0.989);
        this._imgHeader.loadTexture("texts/around-the-world/ParisReward.png", 1);
        this._imgHeader.setTouchEnabled(false);

        ///// # _txtMessage
        this._txtMessage = new ck.Text();
        this._txtMessage.setName("_txtMessage");
        this._root.addChild(this._txtMessage);
        this._txtMessage.setCascadeOpacityEnabled(true);
        this._txtMessage.setCascadeColorEnabled(true);
        this._txtMessage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMessage, 0.5, 0.8367);
        let _txtMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMessage);
        _txtMessageLayoutComponent.setPositionPercentXEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentX(0.5);
        _txtMessageLayoutComponent.setPositionPercentYEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentY(0.8367);
        this._txtMessage.setTouchEnabled(false);
        this._txtMessage.ignoreContentAdaptWithSize(true);
        this._txtMessage.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMessage.setDefaultFontSize(30);
        this._txtMessage.setString(gm.localize.getText("TXT_SELECT_YOUR_PARIS_REWARDS"));
        this._txtMessage.setTextHorizontalAlignment(1);
        this._txtMessage.setTextVerticalAlignment(1);
        this._txtMessage.enableOutline(cc.color(51, 90, 147, 255), 2);

        ///// # _gridSelections
        this._gridSelections = new ck.GridViewVertical();
        this._gridSelections.setName("_gridSelections");
        this._root.addChild(this._gridSelections);
        this._gridSelections.setCascadeOpacityEnabled(true);
        this._gridSelections.setCascadeColorEnabled(true);
        this._gridSelections.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridSelections, 0.5, 0.4789);
        let _gridSelectionsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridSelections);
        _gridSelectionsLayoutComponent.setPositionPercentXEnabled(true);
        _gridSelectionsLayoutComponent.setPositionPercentX(0.5);
        _gridSelectionsLayoutComponent.setPositionPercentYEnabled(true);
        _gridSelectionsLayoutComponent.setPositionPercentY(0.4789);

        ///// # _imgOk
        this._imgOk = new ccui.ImageView();
        this._imgOk.setName("_imgOk");
        this._root.addChild(this._imgOk);
        this._imgOk.setCascadeOpacityEnabled(true);
        this._imgOk.setCascadeColorEnabled(true);
        this._imgOk.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgOk, 0.5, 0.03);
        let _imgOkLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgOk);
        _imgOkLayoutComponent.setPositionPercentXEnabled(true);
        _imgOkLayoutComponent.setPositionPercentX(0.5);
        _imgOkLayoutComponent.setPositionPercentYEnabled(true);
        _imgOkLayoutComponent.setPositionPercentY(0.03);
        this._imgOk.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgOk.setUnifySizeEnabled(false);
        this._imgOk.ignoreContentAdaptWithSize(false);
        this._imgOk.setContentSize(cc.size(206, 81));
        this._imgOk.setTouchEnabled(true);

        ///// # _txtOk
        this._txtOk = new ck.Text();
        this._txtOk.setName("_txtOk");
        this._imgOk.addChild(this._txtOk);
        this._txtOk.setCascadeOpacityEnabled(true);
        this._txtOk.setCascadeColorEnabled(true);
        this._txtOk.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtOk, 0.5, 0.5281);
        let _txtOkLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtOk);
        _txtOkLayoutComponent.setPositionPercentXEnabled(true);
        _txtOkLayoutComponent.setPositionPercentX(0.5);
        _txtOkLayoutComponent.setPositionPercentYEnabled(true);
        _txtOkLayoutComponent.setPositionPercentY(0.5281);
        this._txtOk.setTouchEnabled(false);
        this._txtOk.ignoreContentAdaptWithSize(true);
        this._txtOk.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtOk.setDefaultFontSize(40);
        this._txtOk.setString(gm.localize.getText("TXT_SELECT"));
        this._txtOk.setTextHorizontalAlignment(1);
        this._txtOk.setTextVerticalAlignment(1);
        this._txtOk.enableOutline(cc.color(158, 82, 9, 255), 3);

    },



});

/**
 * Create AroundTheWorldSelectRewardPopup
 * @returns {_ccs.AroundTheWorldSelectRewardPopup}
 */
_ccs.AroundTheWorldSelectRewardPopup.create = function () {
    return new _ccs.AroundTheWorldSelectRewardPopup();
};
