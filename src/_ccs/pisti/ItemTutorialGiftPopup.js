/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ItemTutorialGiftPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ItemTutorialGiftPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBack: null,
    /** @type {ccui.ImageView} */
    _imgFont: null,
    /** @type {ck.CustomRichTextExtend} */
    _txtItemGiftGot: null,
    /** @type {SkillIcon} */
    _itemGiftIcon: null,
    /** @type {ck.Text} */
    _txtItemGiftDescription: null,
    /** @type {ccui.ImageView} */
    _imgButton: null,
    /** @type {ck.Text} */
    _txtButton: null,


    /**
     * _ccs.ItemTutorialGiftPopup constructor
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
        this._root.setContentSize(cc.size(389, 421));

        ///// # _imgBack
        this._imgBack = new ccui.ImageView();
        this._imgBack.setName("_imgBack");
        this._root.addChild(this._imgBack);
        this._imgBack.setCascadeOpacityEnabled(true);
        this._imgBack.setCascadeColorEnabled(true);
        this._imgBack.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBack, 0.5, 0.5);
        let _imgBackLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBack);
        _imgBackLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackLayoutComponent.setPositionPercentX(0.5);
        _imgBackLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackLayoutComponent.setPositionPercentY(0.5);
        _imgBackLayoutComponent.setPercentWidthEnabled(true);
        _imgBackLayoutComponent.setPercentWidth(1);
        _imgBackLayoutComponent.setPercentHeightEnabled(true);
        _imgBackLayoutComponent.setPercentHeight(1);
        this._imgBack.loadTexture("basics/popup/Back_03.png", 1);
        this._imgBack.setUnifySizeEnabled(false);
        this._imgBack.ignoreContentAdaptWithSize(false);
        this._imgBack.setScale9Enabled(true);
        this._imgBack.setCapInsets(cc.rect(69, 57, 251, 307));
        ck.UIUtils.setSizePercent(this._imgBack, 1, 1);
        this._imgBack.setTouchEnabled(false);

        ///// # _imgFont
        this._imgFont = new ccui.ImageView();
        this._imgFont.setName("_imgFont");
        this._root.addChild(this._imgFont);
        this._imgFont.setCascadeOpacityEnabled(true);
        this._imgFont.setCascadeColorEnabled(true);
        this._imgFont.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._imgFont, 0.5, 0.97);
        let _imgFontLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFont);
        _imgFontLayoutComponent.setPositionPercentXEnabled(true);
        _imgFontLayoutComponent.setPositionPercentX(0.5);
        _imgFontLayoutComponent.setPositionPercentYEnabled(true);
        _imgFontLayoutComponent.setPositionPercentY(0.97);
        _imgFontLayoutComponent.setPercentWidthEnabled(true);
        _imgFontLayoutComponent.setPercentWidth(0.95);
        _imgFontLayoutComponent.setPercentHeightEnabled(true);
        _imgFontLayoutComponent.setPercentHeight(0.725);
        this._imgFont.loadTexture("basics/popup/Font_03.png", 1);
        this._imgFont.setUnifySizeEnabled(false);
        this._imgFont.ignoreContentAdaptWithSize(false);
        this._imgFont.setScale9Enabled(true);
        this._imgFont.setCapInsets(cc.rect(52, 48, 265, 215));
        ck.UIUtils.setSizePercent(this._imgFont, 0.95, 0.725);
        this._imgFont.setTouchEnabled(false);

        ///// # _txtItemGiftGot
        this._txtItemGiftGot = new ck.CustomRichTextExtend(cc.size(311.2, 90));
        this._txtItemGiftGot.setName("_txtItemGiftGot");
        this._root.addChild(this._txtItemGiftGot);
        this._txtItemGiftGot.setCascadeOpacityEnabled(true);
        this._txtItemGiftGot.setCascadeColorEnabled(true);
        this._txtItemGiftGot.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtItemGiftGot, 0.5, 0.83);
        this._txtItemGiftGot.setDefaultColor(cc.color(135, 110, 80, 255));
        let _txtItemGiftGotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtItemGiftGot);
        _txtItemGiftGotLayoutComponent.setPositionPercentXEnabled(true);
        _txtItemGiftGotLayoutComponent.setPositionPercentX(0.5);
        _txtItemGiftGotLayoutComponent.setPositionPercentYEnabled(true);
        _txtItemGiftGotLayoutComponent.setPositionPercentY(0.83);
        _txtItemGiftGotLayoutComponent.setPercentWidthEnabled(true);
        _txtItemGiftGotLayoutComponent.setPercentWidth(0.8);
        _txtItemGiftGotLayoutComponent.setPercentHeightEnabled(true);
        _txtItemGiftGotLayoutComponent.setPercentHeight(0.2138);
        this._txtItemGiftGot.setTouchEnabled(false);
        this._txtItemGiftGot.setDefaultFont("fonts/BebasNeueProBold.ttf");
        this._txtItemGiftGot.setDefaultSize(40);
        this._txtItemGiftGot.setDefaultAlignHorizontal(2);
        this._txtItemGiftGot.setDefaultAlignVertical(5);
        this._txtItemGiftGot.setString(gm.localize.getText("TXT_GUIDE_GOT_ITEM"));

        ///// # _itemGiftIcon
        this._itemGiftIcon = new SkillIcon();
        this._itemGiftIcon.setName("_itemGiftIcon");
        this._root.addChild(this._itemGiftIcon);
        this._itemGiftIcon.setCascadeOpacityEnabled(true);
        this._itemGiftIcon.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._itemGiftIcon, 0.5, 0.6);
        this._itemGiftIcon.setScale(1.35, 1.35);
        let _itemGiftIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._itemGiftIcon);
        _itemGiftIconLayoutComponent.setPositionPercentXEnabled(true);
        _itemGiftIconLayoutComponent.setPositionPercentX(0.5);
        _itemGiftIconLayoutComponent.setPositionPercentYEnabled(true);
        _itemGiftIconLayoutComponent.setPositionPercentY(0.6);

        ///// # _txtItemGiftDescription
        this._txtItemGiftDescription = new ck.Text();
        this._txtItemGiftDescription.setName("_txtItemGiftDescription");
        this._root.addChild(this._txtItemGiftDescription);
        this._txtItemGiftDescription.setCascadeOpacityEnabled(true);
        this._txtItemGiftDescription.setCascadeColorEnabled(true);
        this._txtItemGiftDescription.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtItemGiftDescription, 0.5, 0.38);
        this._txtItemGiftDescription.setTextColor(cc.color(135, 110, 80, 255));
        let _txtItemGiftDescriptionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtItemGiftDescription);
        _txtItemGiftDescriptionLayoutComponent.setPositionPercentXEnabled(true);
        _txtItemGiftDescriptionLayoutComponent.setPositionPercentX(0.5);
        _txtItemGiftDescriptionLayoutComponent.setPositionPercentYEnabled(true);
        _txtItemGiftDescriptionLayoutComponent.setPositionPercentY(0.38);
        _txtItemGiftDescriptionLayoutComponent.setPercentWidthEnabled(true);
        _txtItemGiftDescriptionLayoutComponent.setPercentWidth(0.8);
        this._txtItemGiftDescription.setTouchEnabled(false);
        this._txtItemGiftDescription.setUnifySizeEnabled(false);
        this._txtItemGiftDescription.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtItemGiftDescription, 0.8);
        this._txtItemGiftDescription.setContentSize(cc.size(this._txtItemGiftDescription.width, 88));
        this._txtItemGiftDescription.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtItemGiftDescription.setDefaultFontSize(28);
        this._txtItemGiftDescription.setTextHorizontalAlignment(1);
        this._txtItemGiftDescription.setTextVerticalAlignment(1);

        ///// # _imgButton
        this._imgButton = new ccui.ImageView();
        this._imgButton.setName("_imgButton");
        this._root.addChild(this._imgButton);
        this._imgButton.setCascadeOpacityEnabled(true);
        this._imgButton.setCascadeColorEnabled(true);
        this._imgButton.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgButton, 0.5, 0.135);
        let _imgButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgButton);
        _imgButtonLayoutComponent.setPositionPercentXEnabled(true);
        _imgButtonLayoutComponent.setPositionPercentX(0.5);
        _imgButtonLayoutComponent.setPositionPercentYEnabled(true);
        _imgButtonLayoutComponent.setPositionPercentY(0.135);
        this._imgButton.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgButton.setUnifySizeEnabled(false);
        this._imgButton.ignoreContentAdaptWithSize(false);
        this._imgButton.setContentSize(cc.size(206, 81));
        this._imgButton.setTouchEnabled(false);

        ///// # _txtButton
        this._txtButton = new ck.Text();
        this._txtButton.setName("_txtButton");
        this._imgButton.addChild(this._txtButton);
        this._txtButton.setCascadeOpacityEnabled(true);
        this._txtButton.setCascadeColorEnabled(true);
        this._txtButton.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtButton, 0.5, 0.5);
        let _txtButtonLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtButton);
        _txtButtonLayoutComponent.setPositionPercentXEnabled(true);
        _txtButtonLayoutComponent.setPositionPercentX(0.5);
        _txtButtonLayoutComponent.setPositionPercentYEnabled(true);
        _txtButtonLayoutComponent.setPositionPercentY(0.5);
        this._txtButton.setTouchEnabled(false);
        this._txtButton.ignoreContentAdaptWithSize(true);
        this._txtButton.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtButton.setDefaultFontSize(40);
        this._txtButton.setString(gm.localize.getText("TXT_RECEIVE"));
        this._txtButton.setTextHorizontalAlignment(1);
        this._txtButton.setTextVerticalAlignment(1);
        this._txtButton.enableOutline(cc.color(158, 82, 9, 255), 2);

    },



});

/**
 * Create ItemTutorialGiftPopup
 * @returns {_ccs.ItemTutorialGiftPopup}
 */
_ccs.ItemTutorialGiftPopup.create = function () {
    return new _ccs.ItemTutorialGiftPopup();
};
