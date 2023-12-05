/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.AvatarSkinWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.AvatarSkinWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgItemBgr: null,
    /** @type {ccui.ImageView} */
    _imgItem: null,
    /** @type {ccui.ImageView} */
    _imgItemFrameChosen: null,
    /** @type {ck.Text} */
    _txtNew: null,
    /** @type {ck.Text} */
    _txtUsed: null,
    /** @type {ck.Text} */
    _txtTimeLeft: null,
    /** @type {ccui.Layout} */
    _layoutDisable: null,


    /**
     * _ccs.AvatarSkinWidget constructor
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
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(192, 192));

        ///// # _imgItemBgr
        this._imgItemBgr = new ccui.ImageView();
        this._imgItemBgr.setName("_imgItemBgr");
        this._layoutRoot.addChild(this._imgItemBgr);
        this._imgItemBgr.setCascadeOpacityEnabled(true);
        this._imgItemBgr.setCascadeColorEnabled(true);
        this._imgItemBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgItemBgr, 0.5, 0.5);
        let _imgItemBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgItemBgr);
        _imgItemBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgItemBgrLayoutComponent.setPositionPercentX(0.5);
        _imgItemBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgItemBgrLayoutComponent.setPositionPercentY(0.5);
        this._imgItemBgr.loadTexture("basics/other/Box_15.png", 1);
        this._imgItemBgr.setUnifySizeEnabled(false);
        this._imgItemBgr.ignoreContentAdaptWithSize(false);
        this._imgItemBgr.setContentSize(cc.size(187, 188));
        this._imgItemBgr.setTouchEnabled(false);

        ///// # _imgItem
        this._imgItem = new ccui.ImageView();
        this._imgItem.setName("_imgItem");
        this._layoutRoot.addChild(this._imgItem);
        this._imgItem.setCascadeOpacityEnabled(true);
        this._imgItem.setCascadeColorEnabled(true);
        this._imgItem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgItem, 0.5, 0.5);
        let _imgItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgItem);
        _imgItemLayoutComponent.setPositionPercentXEnabled(true);
        _imgItemLayoutComponent.setPositionPercentX(0.5);
        _imgItemLayoutComponent.setPositionPercentYEnabled(true);
        _imgItemLayoutComponent.setPositionPercentY(0.5);
        this._imgItem.loadTexture("avatars/Circle02.png", 1);
        this._imgItem.setUnifySizeEnabled(false);
        this._imgItem.ignoreContentAdaptWithSize(false);
        this._imgItem.setContentSize(cc.size(172.8, 172.8));
        this._imgItem.setTouchEnabled(false);

        ///// # _imgItemFrameChosen
        this._imgItemFrameChosen = new ccui.ImageView();
        this._imgItemFrameChosen.setName("_imgItemFrameChosen");
        this._layoutRoot.addChild(this._imgItemFrameChosen);
        this._imgItemFrameChosen.setCascadeOpacityEnabled(true);
        this._imgItemFrameChosen.setCascadeColorEnabled(true);
        this._imgItemFrameChosen.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgItemFrameChosen, 0.5, 0.5);
        let _imgItemFrameChosenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgItemFrameChosen);
        _imgItemFrameChosenLayoutComponent.setPositionPercentXEnabled(true);
        _imgItemFrameChosenLayoutComponent.setPositionPercentX(0.5);
        _imgItemFrameChosenLayoutComponent.setPositionPercentYEnabled(true);
        _imgItemFrameChosenLayoutComponent.setPositionPercentY(0.5);
        this._imgItemFrameChosen.loadTexture("basics/other/Box_16.png", 1);
        this._imgItemFrameChosen.setUnifySizeEnabled(false);
        this._imgItemFrameChosen.ignoreContentAdaptWithSize(false);
        this._imgItemFrameChosen.setContentSize(cc.size(191, 190));
        this._imgItemFrameChosen.setTouchEnabled(false);

        ///// # _txtNew
        this._txtNew = new ck.Text();
        this._txtNew.setName("_txtNew");
        this._layoutRoot.addChild(this._txtNew);
        this._txtNew.setCascadeOpacityEnabled(true);
        this._txtNew.setCascadeColorEnabled(true);
        this._txtNew.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNew, 0.965, 0.865);
        this._txtNew.setTextColor(cc.color(255, 223, 73, 255));
        let _txtNewLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNew);
        _txtNewLayoutComponent.setPositionPercentXEnabled(true);
        _txtNewLayoutComponent.setPositionPercentX(0.965);
        _txtNewLayoutComponent.setPositionPercentYEnabled(true);
        _txtNewLayoutComponent.setPositionPercentY(0.865);
        this._txtNew.setTouchEnabled(false);
        this._txtNew.ignoreContentAdaptWithSize(true);
        this._txtNew.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtNew.setDefaultFontSize(36);
        this._txtNew.setString(gm.localize.getText("TXT_NEW"));
        this._txtNew.setTextHorizontalAlignment(1);
        this._txtNew.setTextVerticalAlignment(1);
        this._txtNew.enableOutline(cc.color(123, 29, 19, 255), 2);

        ///// # _txtUsed
        this._txtUsed = new ck.Text();
        this._txtUsed.setName("_txtUsed");
        this._layoutRoot.addChild(this._txtUsed);
        this._txtUsed.setCascadeOpacityEnabled(true);
        this._txtUsed.setCascadeColorEnabled(true);
        this._txtUsed.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtUsed, 0.96, 0.865);
        this._txtUsed.setTextColor(cc.color(144, 238, 144, 255));
        let _txtUsedLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtUsed);
        _txtUsedLayoutComponent.setPositionPercentXEnabled(true);
        _txtUsedLayoutComponent.setPositionPercentX(0.96);
        _txtUsedLayoutComponent.setPositionPercentYEnabled(true);
        _txtUsedLayoutComponent.setPositionPercentY(0.865);
        this._txtUsed.setTouchEnabled(false);
        this._txtUsed.ignoreContentAdaptWithSize(true);
        this._txtUsed.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtUsed.setDefaultFontSize(36);
        this._txtUsed.setString(gm.localize.getText("TXT_USED"));
        this._txtUsed.setTextHorizontalAlignment(1);
        this._txtUsed.setTextVerticalAlignment(1);
        this._txtUsed.enableOutline(cc.color(0, 128, 0, 255), 2);

        ///// # _txtTimeLeft
        this._txtTimeLeft = new ck.Text();
        this._txtTimeLeft.setName("_txtTimeLeft");
        this._layoutRoot.addChild(this._txtTimeLeft);
        this._txtTimeLeft.setCascadeOpacityEnabled(true);
        this._txtTimeLeft.setCascadeColorEnabled(true);
        this._txtTimeLeft.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTimeLeft, 0.04, 0.1);
        let _txtTimeLeftLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTimeLeft);
        _txtTimeLeftLayoutComponent.setPositionPercentXEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentX(0.04);
        _txtTimeLeftLayoutComponent.setPositionPercentYEnabled(true);
        _txtTimeLeftLayoutComponent.setPositionPercentY(0.1);
        this._txtTimeLeft.setTouchEnabled(false);
        this._txtTimeLeft.ignoreContentAdaptWithSize(true);
        this._txtTimeLeft.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtTimeLeft.setDefaultFontSize(25);
        this._txtTimeLeft.setTextHorizontalAlignment(0);
        this._txtTimeLeft.setTextVerticalAlignment(0);
        this._txtTimeLeft.enableOutline(cc.color(0, 0, 0, 255), 1);

        ///// # _layoutDisable
        this._layoutDisable = new ccui.Layout();
        this._layoutDisable.setName("_layoutDisable");
        this._layoutRoot.addChild(this._layoutDisable);
        this._layoutDisable.setCascadeOpacityEnabled(true);
        this._layoutDisable.setCascadeColorEnabled(true);
        this._layoutDisable.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutDisable, 0.5, 0.5);
        this._layoutDisable.setVisible(false);
        let _layoutDisableLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutDisable);
        _layoutDisableLayoutComponent.setPositionPercentXEnabled(true);
        _layoutDisableLayoutComponent.setPositionPercentX(0.5);
        _layoutDisableLayoutComponent.setPositionPercentYEnabled(true);
        _layoutDisableLayoutComponent.setPositionPercentY(0.5);
        _layoutDisableLayoutComponent.setPercentWidthEnabled(true);
        _layoutDisableLayoutComponent.setPercentWidth(1);
        _layoutDisableLayoutComponent.setPercentHeightEnabled(true);
        _layoutDisableLayoutComponent.setPercentHeight(1);
        this._layoutDisable.setTouchEnabled(false);
        this._layoutDisable.setUnifySizeEnabled(false);
        this._layoutDisable.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutDisable, 1, 1);
        this._layoutDisable.setBackGroundColorType(1);
        this._layoutDisable.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._layoutDisable.setBackGroundColorOpacity(177);

    },



});

/**
 * Create AvatarSkinWidget
 * @returns {_ccs.AvatarSkinWidget}
 */
_ccs.AvatarSkinWidget.create = function () {
    return new _ccs.AvatarSkinWidget();
};
