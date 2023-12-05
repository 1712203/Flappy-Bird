/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.GuiCardFlipPlayer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.GuiCardFlipPlayer = cc.Layer.extend({

    /** @type {Avatar} */
    _avatarNode: null,
    /** @type {ccui.ImageView} */
    _imgGoldBgr: null,
    /** @type {ccui.ImageView} */
    _imgGold: null,
    /** @type {ck.Text} */
    _txtNumGold: null,


    /**
     * _ccs.GuiCardFlipPlayer constructor
     * @constructor
     */
    ctor: function () {
        cc.Layer.prototype.ctor.call(this);
        this.setCascadeOpacityEnabled(true);
        this._initCCSChildren();
    },

    /**
     * Init nodes from ccs
     * @private
     */
    _initCCSChildren: function () {

        ///// # _avatarNode
        this._avatarNode = new Avatar(ck.AvatarType.CIRCLE);
        this._avatarNode.setName("_avatarNode");
        this.addChild(this._avatarNode);
        this._avatarNode.setCascadeOpacityEnabled(true);
        this._avatarNode.setCascadeColorEnabled(true);
        this._avatarNode.setAnchorPoint(cc.p(0.5, 0.5));
        let _avatarNodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._avatarNode);
        this._avatarNode.setWidth(70);

        ///// # _imgGoldBgr
        this._imgGoldBgr = new ccui.ImageView();
        this._imgGoldBgr.setName("_imgGoldBgr");
        this.addChild(this._imgGoldBgr);
        this._imgGoldBgr.setCascadeOpacityEnabled(true);
        this._imgGoldBgr.setCascadeColorEnabled(true);
        this._imgGoldBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGoldBgr, 2.5, -55);
        let _imgGoldBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGoldBgr);
        this._imgGoldBgr.loadTexture("basics/other/Box_11.png", 1);
        this._imgGoldBgr.setUnifySizeEnabled(false);
        this._imgGoldBgr.ignoreContentAdaptWithSize(false);
        this._imgGoldBgr.setContentSize(cc.size(80, 29));
        this._imgGoldBgr.setTouchEnabled(false);

        ///// # _imgGold
        this._imgGold = new ccui.ImageView();
        this._imgGold.setName("_imgGold");
        this._imgGoldBgr.addChild(this._imgGold);
        this._imgGold.setCascadeOpacityEnabled(true);
        this._imgGold.setCascadeColorEnabled(true);
        this._imgGold.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgGold, 0.06, 0.55);
        let _imgGoldLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgGold);
        _imgGoldLayoutComponent.setPositionPercentXEnabled(true);
        _imgGoldLayoutComponent.setPositionPercentX(0.06);
        _imgGoldLayoutComponent.setPositionPercentYEnabled(true);
        _imgGoldLayoutComponent.setPositionPercentY(0.55);
        this._imgGold.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgGold.setUnifySizeEnabled(false);
        this._imgGold.ignoreContentAdaptWithSize(false);
        this._imgGold.setContentSize(cc.size(40, 40));
        this._imgGold.setTouchEnabled(false);

        ///// # _txtNumGold
        this._txtNumGold = new ck.Text();
        this._txtNumGold.setName("_txtNumGold");
        this._imgGoldBgr.addChild(this._txtNumGold);
        this._txtNumGold.setCascadeOpacityEnabled(true);
        this._txtNumGold.setCascadeColorEnabled(true);
        this._txtNumGold.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtNumGold, 1, 0.5);
        this._txtNumGold.setTextColor(cc.color(254, 247, 55, 255));
        let _txtNumGoldLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNumGold);
        _txtNumGoldLayoutComponent.setPositionPercentXEnabled(true);
        _txtNumGoldLayoutComponent.setPositionPercentX(1);
        _txtNumGoldLayoutComponent.setPositionPercentYEnabled(true);
        _txtNumGoldLayoutComponent.setPositionPercentY(0.5);
        this._txtNumGold.setTouchEnabled(false);
        this._txtNumGold.ignoreContentAdaptWithSize(true);
        this._txtNumGold.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtNumGold.setDefaultFontSize(22);
        this._txtNumGold.setTextHorizontalAlignment(2);
        this._txtNumGold.setTextVerticalAlignment(1);
        this._txtNumGold.enableOutline(cc.color(0, 0, 0, 255), 1);

    },



});

/**
 * Create GuiCardFlipPlayer
 * @returns {_ccs.GuiCardFlipPlayer}
 */
_ccs.GuiCardFlipPlayer.create = function () {
    return new _ccs.GuiCardFlipPlayer();
};
