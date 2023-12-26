/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.FlappyBirdCharacter
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.FlappyBirdCharacter = ccui.Widget.extend({

    /** @type {cc.Sprite} */
    _spriteBird: null,


    /**
     * _ccs.FlappyBirdCharacter constructor
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

        ///// # _spriteBird
        this._spriteBird = new cc.Sprite();
        this._spriteBird.setName("_spriteBird");
        this.addChild(this._spriteBird);
        this._spriteBird.setCascadeOpacityEnabled(true);
        this._spriteBird.setCascadeColorEnabled(true);
        this._spriteBird.setAnchorPoint(cc.p(0.5, 0.5));
        this._spriteBird.setScale(1.5, 1.5);
        let _spriteBirdLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteBird);
        _spriteBirdLayoutComponent.setPositionPercentYEnabled(true);
        _spriteBirdLayoutComponent.setPositionPercentY(0);
        this._spriteBird.setTexture("sprites/flappy-bird/yellowbird-downflap.png");
        let _spriteBirdBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteBirdBlendFunc.src = 1;
        _spriteBirdBlendFunc.dst = 771;
        this._spriteBird.setBlendFunc(_spriteBirdBlendFunc);

    },



});

/**
 * Create FlappyBirdCharacter
 * @returns {_ccs.FlappyBirdCharacter}
 */
_ccs.FlappyBirdCharacter.create = function () {
    return new _ccs.FlappyBirdCharacter();
};
