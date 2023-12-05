/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.JackpotTabSelectorItem
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.JackpotTabSelectorItem = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgBgrNormal: null,
    /** @type {ccui.ImageView} */
    _imgBgrSelected: null,
    /** @type {ccui.ImageView} */
    Highlight: null,
    /** @type {ck.Text} */
    _txtName: null,
    /** @type {ccui.ImageView} */
    _imgTicketBgr: null,
    /** @type {ck.Text} */
    _txtTicket: null,


    /**
     * _ccs.JackpotTabSelectorItem constructor
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
        this._layoutRoot.setPosition(0.0001, 0);
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        this._layoutRoot.setTouchEnabled(true);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(125, 75));

        ///// # _imgBgrNormal
        this._imgBgrNormal = new ccui.ImageView();
        this._imgBgrNormal.setName("_imgBgrNormal");
        this._layoutRoot.addChild(this._imgBgrNormal);
        this._imgBgrNormal.setCascadeOpacityEnabled(true);
        this._imgBgrNormal.setCascadeColorEnabled(true);
        this._imgBgrNormal.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgrNormal, 0.5, 0.5);
        let _imgBgrNormalLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrNormal);
        _imgBgrNormalLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrNormalLayoutComponent.setPositionPercentX(0.5);
        _imgBgrNormalLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrNormalLayoutComponent.setPositionPercentY(0.5);
        _imgBgrNormalLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrNormalLayoutComponent.setPercentWidth(1);
        _imgBgrNormalLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrNormalLayoutComponent.setPercentHeight(1);
        this._imgBgrNormal.loadTexture("basics/other/BlueBox.png", 1);
        this._imgBgrNormal.setUnifySizeEnabled(false);
        this._imgBgrNormal.ignoreContentAdaptWithSize(false);
        this._imgBgrNormal.setScale9Enabled(true);
        this._imgBgrNormal.setCapInsets(cc.rect(15, 11, 1, 2));
        ck.UIUtils.setSizePercent(this._imgBgrNormal, 1, 1);
        this._imgBgrNormal.setTouchEnabled(false);

        ///// # _imgBgrSelected
        this._imgBgrSelected = new ccui.ImageView();
        this._imgBgrSelected.setName("_imgBgrSelected");
        this._layoutRoot.addChild(this._imgBgrSelected);
        this._imgBgrSelected.setCascadeOpacityEnabled(true);
        this._imgBgrSelected.setCascadeColorEnabled(true);
        this._imgBgrSelected.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgrSelected, 0.5, 0.5);
        let _imgBgrSelectedLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrSelected);
        _imgBgrSelectedLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrSelectedLayoutComponent.setPositionPercentX(0.5);
        _imgBgrSelectedLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrSelectedLayoutComponent.setPositionPercentY(0.5);
        _imgBgrSelectedLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrSelectedLayoutComponent.setPercentWidth(1);
        _imgBgrSelectedLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrSelectedLayoutComponent.setPercentHeight(1);
        this._imgBgrSelected.loadTexture("basics/other/BlueBox.png", 1);
        this._imgBgrSelected.setUnifySizeEnabled(false);
        this._imgBgrSelected.ignoreContentAdaptWithSize(false);
        this._imgBgrSelected.setScale9Enabled(true);
        this._imgBgrSelected.setCapInsets(cc.rect(15, 11, 1, 2));
        ck.UIUtils.setSizePercent(this._imgBgrSelected, 1, 1);
        this._imgBgrSelected.setTouchEnabled(false);

        ///// # Highlight
        this.Highlight = new ccui.ImageView();
        this.Highlight.setName("Highlight");
        this._imgBgrSelected.addChild(this.Highlight);
        this.Highlight.setCascadeOpacityEnabled(true);
        this.Highlight.setCascadeColorEnabled(true);
        this.Highlight.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.Highlight, 0.5, 0.5324);
        let HighlightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.Highlight);
        HighlightLayoutComponent.setPositionPercentXEnabled(true);
        HighlightLayoutComponent.setPositionPercentX(0.5);
        HighlightLayoutComponent.setPositionPercentYEnabled(true);
        HighlightLayoutComponent.setPositionPercentY(0.5324);
        HighlightLayoutComponent.setPercentWidthEnabled(true);
        HighlightLayoutComponent.setPercentWidth(0.9341);
        HighlightLayoutComponent.setPercentHeightEnabled(true);
        HighlightLayoutComponent.setPercentHeight(0.8648);
        this.Highlight.loadTexture("basics/other/Green.png", 1);
        this.Highlight.setUnifySizeEnabled(false);
        this.Highlight.ignoreContentAdaptWithSize(false);
        this.Highlight.setScale9Enabled(true);
        this.Highlight.setCapInsets(cc.rect(30, 16, 70, 18));
        ck.UIUtils.setSizePercent(this.Highlight, 0.9341, 0.8648);
        this.Highlight.setTouchEnabled(false);

        ///// # _txtName
        this._txtName = new ck.Text();
        this._txtName.setName("_txtName");
        this._layoutRoot.addChild(this._txtName);
        this._txtName.setCascadeOpacityEnabled(true);
        this._txtName.setCascadeColorEnabled(true);
        this._txtName.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName, 0.5, 0.5367);
        let _txtNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName);
        _txtNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameLayoutComponent.setPositionPercentX(0.5);
        _txtNameLayoutComponent.setPositionPercentYEnabled(true);
        _txtNameLayoutComponent.setPositionPercentY(0.5367);
        this._txtName.setTouchEnabled(false);
        this._txtName.setUnifySizeEnabled(false);
        this._txtName.ignoreContentAdaptWithSize(false);
        this._txtName.setContentSize(cc.size(101.8611, 70));
        this._txtName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName.setDefaultFontSize(28);
        this._txtName.setString(gm.localize.getText("TXT_MEGA"));
        this._txtName.setTextHorizontalAlignment(1);
        this._txtName.setTextVerticalAlignment(1);
        this._txtName.enableOutline(cc.color(31, 100, 124, 255), 2);

        ///// # _imgTicketBgr
        this._imgTicketBgr = new ccui.ImageView();
        this._imgTicketBgr.setName("_imgTicketBgr");
        this._layoutRoot.addChild(this._imgTicketBgr);
        this._imgTicketBgr.setCascadeOpacityEnabled(true);
        this._imgTicketBgr.setCascadeColorEnabled(true);
        this._imgTicketBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgTicketBgr, 0.9174, 0.9107);
        let _imgTicketBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTicketBgr);
        _imgTicketBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgTicketBgrLayoutComponent.setPositionPercentX(0.9174);
        _imgTicketBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgTicketBgrLayoutComponent.setPositionPercentY(0.9107);
        this._imgTicketBgr.loadTexture("basics/other/RedDot.png", 1);
        this._imgTicketBgr.setUnifySizeEnabled(false);
        this._imgTicketBgr.ignoreContentAdaptWithSize(false);
        this._imgTicketBgr.setContentSize(cc.size(31, 31));
        this._imgTicketBgr.setTouchEnabled(false);

        ///// # _txtTicket
        this._txtTicket = new ck.Text();
        this._txtTicket.setName("_txtTicket");
        this._imgTicketBgr.addChild(this._txtTicket);
        this._txtTicket.setCascadeOpacityEnabled(true);
        this._txtTicket.setCascadeColorEnabled(true);
        this._txtTicket.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTicket, 0.5, 0.55);
        let _txtTicketLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTicket);
        _txtTicketLayoutComponent.setPositionPercentXEnabled(true);
        _txtTicketLayoutComponent.setPositionPercentX(0.5);
        _txtTicketLayoutComponent.setPositionPercentYEnabled(true);
        _txtTicketLayoutComponent.setPositionPercentY(0.55);
        this._txtTicket.setTouchEnabled(false);
        this._txtTicket.ignoreContentAdaptWithSize(true);
        this._txtTicket.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtTicket.setDefaultFontSize(18);
        this._txtTicket.setString("10");
        this._txtTicket.setTextHorizontalAlignment(1);
        this._txtTicket.setTextVerticalAlignment(1);
        this._txtTicket.enableOutline(cc.color(172, 0, 0, 255), 1);

    },



});

/**
 * Create JackpotTabSelectorItem
 * @returns {_ccs.JackpotTabSelectorItem}
 */
_ccs.JackpotTabSelectorItem.create = function () {
    return new _ccs.JackpotTabSelectorItem();
};
