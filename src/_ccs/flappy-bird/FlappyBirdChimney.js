/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.FlappyBirdChimney
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.FlappyBirdChimney = ccui.Widget.extend({

    /** @type {ccui.ImageView} */
    _chimney: null,


    /**
     * _ccs.FlappyBirdChimney constructor
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

        ///// # _chimney
        this._chimney = new ccui.ImageView();
        this._chimney.setName("_chimney");
        this.addChild(this._chimney);
        this._chimney.setCascadeOpacityEnabled(true);
        this._chimney.setCascadeColorEnabled(true);
        this._chimney.setAnchorPoint(cc.p(0.5, 0));
        this._chimney.setScale(2, 2);
        let _chimneyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._chimney);
        this._chimney.loadTexture("sprites/flappy-bird/pipe-green.png", 0);
        this._chimney.setUnifySizeEnabled(false);
        this._chimney.ignoreContentAdaptWithSize(false);
        this._chimney.setContentSize(cc.size(52, 320));
        this._chimney.setTouchEnabled(false);

    },



});

/**
 * Create FlappyBirdChimney
 * @returns {_ccs.FlappyBirdChimney}
 */
_ccs.FlappyBirdChimney.create = function () {
    return new _ccs.FlappyBirdChimney();
};
