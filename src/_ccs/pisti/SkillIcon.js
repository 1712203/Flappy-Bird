/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.SkillIcon
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.SkillIcon = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {cc.ProgressTimer} */
    _timer: null,
    /** @type {ccui.ImageView} */
    _imgCheck: null,
    /** @type {ccui.ImageView} */
    _imgAmountDuration: null,
    /** @type {ccui.Layout} */
    _layoutAmount: null,
    /** @type {ck.Text} */
    _txtAmount: null,
    /** @type {ck.Text} */
    _txtItemFactor: null,
    /** @type {ck.Text} */
    _txtDuration: null,


    /**
     * _ccs.SkillIcon constructor
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
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(false);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(80, 80));

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._root.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.5);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.5);
        this._imgIcon.loadTexture("icons/color/items/Swapper.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(80, 80));
        this._imgIcon.setTouchEnabled(false);

        ///// # _timer
        let __sprite = new cc.Sprite();
        __sprite.setSpriteFrame(cc.spriteFrameCache.getSpriteFrame("avatars/CountdownYellow.png"));
        this._timer = new cc.ProgressTimer(__sprite);
        this._timer.setName("_timer");
        this._root.addChild(this._timer);
        this._timer.setCascadeOpacityEnabled(true);
        this._timer.setCascadeColorEnabled(true);
        this._timer.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._timer, 0.5, 0.5);
        this._timer.setScale(0.6, 0.6);
        let _timerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._timer);
        _timerLayoutComponent.setPositionPercentXEnabled(true);
        _timerLayoutComponent.setPositionPercentX(0.5);
        _timerLayoutComponent.setPositionPercentYEnabled(true);
        _timerLayoutComponent.setPositionPercentY(0.5);
        this._timer.setType(cc.ProgressTimer.TYPE_RADIAL);

        ///// # _imgCheck
        this._imgCheck = new ccui.ImageView();
        this._imgCheck.setName("_imgCheck");
        this._root.addChild(this._imgCheck);
        this._imgCheck.setCascadeOpacityEnabled(true);
        this._imgCheck.setCascadeColorEnabled(true);
        this._imgCheck.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCheck, 0.5, 0.55);
        let _imgCheckLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCheck);
        _imgCheckLayoutComponent.setPositionPercentXEnabled(true);
        _imgCheckLayoutComponent.setPositionPercentX(0.5);
        _imgCheckLayoutComponent.setPositionPercentYEnabled(true);
        _imgCheckLayoutComponent.setPositionPercentY(0.55);
        this._imgCheck.loadTexture("basics/other/CheckCircle.png", 1);
        this._imgCheck.setUnifySizeEnabled(false);
        this._imgCheck.ignoreContentAdaptWithSize(false);
        this._imgCheck.setContentSize(cc.size(69.4566, 60.6166));
        this._imgCheck.setTouchEnabled(false);

        ///// # _imgAmountDuration
        this._imgAmountDuration = new ccui.ImageView();
        this._imgAmountDuration.setName("_imgAmountDuration");
        this._root.addChild(this._imgAmountDuration);
        this._imgAmountDuration.setCascadeOpacityEnabled(true);
        this._imgAmountDuration.setCascadeColorEnabled(true);
        this._imgAmountDuration.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._imgAmountDuration, 0.9738, 0.1639);
        let _imgAmountDurationLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgAmountDuration);
        _imgAmountDurationLayoutComponent.setPositionPercentXEnabled(true);
        _imgAmountDurationLayoutComponent.setPositionPercentX(0.9738);
        _imgAmountDurationLayoutComponent.setPositionPercentYEnabled(true);
        _imgAmountDurationLayoutComponent.setPositionPercentY(0.1639);
        this._imgAmountDuration.loadTexture("basics/other/NumberBox.png", 1);
        this._imgAmountDuration.setUnifySizeEnabled(false);
        this._imgAmountDuration.ignoreContentAdaptWithSize(false);
        this._imgAmountDuration.setScale9Enabled(true);
        this._imgAmountDuration.setCapInsets(cc.rect(14, 14, 2, 2));
        this._imgAmountDuration.setContentSize(cc.size(32, 32));
        this._imgAmountDuration.setTouchEnabled(false);

        ///// # _layoutAmount
        this._layoutAmount = new ccui.Layout();
        this._layoutAmount.setName("_layoutAmount");
        this._imgAmountDuration.addChild(this._layoutAmount);
        this._layoutAmount.setCascadeOpacityEnabled(true);
        this._layoutAmount.setCascadeColorEnabled(true);
        this._layoutAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutAmount, 0.5, 0.5);
        let _layoutAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutAmount);
        _layoutAmountLayoutComponent.setPositionPercentXEnabled(true);
        _layoutAmountLayoutComponent.setPositionPercentX(0.5);
        _layoutAmountLayoutComponent.setPositionPercentYEnabled(true);
        _layoutAmountLayoutComponent.setPositionPercentY(0.5);
        _layoutAmountLayoutComponent.setPercentWidthEnabled(true);
        _layoutAmountLayoutComponent.setPercentWidth(1);
        _layoutAmountLayoutComponent.setPercentHeightEnabled(true);
        _layoutAmountLayoutComponent.setPercentHeight(1);
        this._layoutAmount.setTouchEnabled(false);
        this._layoutAmount.setUnifySizeEnabled(false);
        this._layoutAmount.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._layoutAmount, 1, 1);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._layoutAmount.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.5, 0.5);
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.5);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.5);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(true);
        this._txtAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmount.setDefaultFontSize(18);
        this._txtAmount.setTextHorizontalAlignment(1);
        this._txtAmount.setTextVerticalAlignment(1);
        this._txtAmount.enableOutline(cc.color(0, 74, 0, 255), 2);

        ///// # _txtItemFactor
        this._txtItemFactor = new ck.Text();
        this._txtItemFactor.setName("_txtItemFactor");
        this._layoutAmount.addChild(this._txtItemFactor);
        this._txtItemFactor.setCascadeOpacityEnabled(true);
        this._txtItemFactor.setCascadeColorEnabled(true);
        this._txtItemFactor.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtItemFactor, 0.5, 0.5);
        let _txtItemFactorLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtItemFactor);
        _txtItemFactorLayoutComponent.setPositionPercentXEnabled(true);
        _txtItemFactorLayoutComponent.setPositionPercentX(0.5);
        _txtItemFactorLayoutComponent.setPositionPercentYEnabled(true);
        _txtItemFactorLayoutComponent.setPositionPercentY(0.5);
        this._txtItemFactor.setTouchEnabled(false);
        this._txtItemFactor.ignoreContentAdaptWithSize(true);
        this._txtItemFactor.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtItemFactor.setDefaultFontSize(18);
        this._txtItemFactor.setTextHorizontalAlignment(1);
        this._txtItemFactor.setTextVerticalAlignment(1);
        this._txtItemFactor.enableOutline(cc.color(0, 74, 0, 255), 2);

        ///// # _txtDuration
        this._txtDuration = new ck.Text();
        this._txtDuration.setName("_txtDuration");
        this._imgAmountDuration.addChild(this._txtDuration);
        this._txtDuration.setCascadeOpacityEnabled(true);
        this._txtDuration.setCascadeColorEnabled(true);
        this._txtDuration.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDuration, 0.5, 0.5);
        let _txtDurationLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDuration);
        _txtDurationLayoutComponent.setPositionPercentXEnabled(true);
        _txtDurationLayoutComponent.setPositionPercentX(0.5);
        _txtDurationLayoutComponent.setPositionPercentYEnabled(true);
        _txtDurationLayoutComponent.setPositionPercentY(0.5);
        this._txtDuration.setTouchEnabled(false);
        this._txtDuration.ignoreContentAdaptWithSize(true);
        this._txtDuration.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtDuration.setDefaultFontSize(18);
        this._txtDuration.setTextHorizontalAlignment(1);
        this._txtDuration.setTextVerticalAlignment(1);
        this._txtDuration.enableOutline(cc.color(0, 74, 0, 255), 2);

    },



});

/**
 * Create SkillIcon
 * @returns {_ccs.SkillIcon}
 */
_ccs.SkillIcon.create = function () {
    return new _ccs.SkillIcon();
};
