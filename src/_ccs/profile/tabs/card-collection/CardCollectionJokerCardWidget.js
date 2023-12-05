/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.CardCollectionJokerCardWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.CardCollectionJokerCardWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgCardAvatar: null,


    /**
     * _ccs.CardCollectionJokerCardWidget constructor
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
        this._layoutRoot.setContentSize(cc.size(130, 181));

        ///// # _imgCardAvatar
        this._imgCardAvatar = new ccui.ImageView();
        this._imgCardAvatar.setName("_imgCardAvatar");
        this._layoutRoot.addChild(this._imgCardAvatar);
        this._imgCardAvatar.setCascadeOpacityEnabled(true);
        this._imgCardAvatar.setCascadeColorEnabled(true);
        this._imgCardAvatar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCardAvatar, 0.5, 0.5);
        let _imgCardAvatarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCardAvatar);
        _imgCardAvatarLayoutComponent.setPositionPercentXEnabled(true);
        _imgCardAvatarLayoutComponent.setPositionPercentX(0.5);
        _imgCardAvatarLayoutComponent.setPositionPercentYEnabled(true);
        _imgCardAvatarLayoutComponent.setPositionPercentY(0.5);
        this._imgCardAvatar.loadTexture("card-collection/joker-card/Avatar.png", 1);
        this._imgCardAvatar.setUnifySizeEnabled(false);
        this._imgCardAvatar.ignoreContentAdaptWithSize(false);
        this._imgCardAvatar.setContentSize(cc.size(130, 181));
        this._imgCardAvatar.setTouchEnabled(false);

    },



});

/**
 * Create CardCollectionJokerCardWidget
 * @returns {_ccs.CardCollectionJokerCardWidget}
 */
_ccs.CardCollectionJokerCardWidget.create = function () {
    return new _ccs.CardCollectionJokerCardWidget();
};
