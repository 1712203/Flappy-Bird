/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.Toast
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.Toast = ccui.Widget.extend({

    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ck.Text} */
    _txtMessage: null,


    /**
     * _ccs.Toast constructor
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

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgBgr.setOpacity(191);
        this._imgBgr.setColor(cc.color(0, 0, 0, 255));
        let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
        _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentX(0);
        _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentY(0);
        this._imgBgr.loadTexture("sprites/basics/Rounded32x32.png", 0);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setScale9Enabled(true);
        this._imgBgr.setCapInsets(cc.rect(15, 15, 2, 2));
        this._imgBgr.setContentSize(cc.size(200, 50));
        this._imgBgr.setTouchEnabled(false);

        ///// # _txtMessage
        this._txtMessage = new ck.Text();
        this._txtMessage.setName("_txtMessage");
        this.addChild(this._txtMessage);
        this._txtMessage.setCascadeOpacityEnabled(true);
        this._txtMessage.setCascadeColorEnabled(true);
        this._txtMessage.setAnchorPoint(cc.p(0.5, 0.5));
        let _txtMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMessage);
        _txtMessageLayoutComponent.setPositionPercentXEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentX(0);
        _txtMessageLayoutComponent.setPositionPercentYEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentY(0);
        this._txtMessage.setTouchEnabled(false);
        this._txtMessage.ignoreContentAdaptWithSize(true);
        this._txtMessage.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMessage.setDefaultFontSize(25);
        this._txtMessage.setTextHorizontalAlignment(1);
        this._txtMessage.setTextVerticalAlignment(1);

    },



});

/**
 * Create Toast
 * @returns {_ccs.Toast}
 */
_ccs.Toast.create = function () {
    return new _ccs.Toast();
};
