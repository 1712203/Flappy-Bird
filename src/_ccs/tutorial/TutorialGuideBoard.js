/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.TutorialGuideBoard
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.TutorialGuideBoard = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {cc.Sprite} */
    _spriteCharacter: null,
    /** @type {ck.Text} */
    _txtMessage: null,


    /**
     * _ccs.TutorialGuideBoard constructor
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
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(600, 150));

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this._root.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.5);
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundLayoutComponent.setPercentWidth(1);
        _imgBackgroundLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundLayoutComponent.setPercentHeight(1);
        this._imgBackground.loadTexture("basics/other/BoardText.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setScale9Enabled(true);
        this._imgBackground.setCapInsets(cc.rect(75, 50, 21, 12));
        ck.UIUtils.setSizePercent(this._imgBackground, 1, 1);
        this._imgBackground.setTouchEnabled(false);

        ///// # _spriteCharacter
        this._spriteCharacter = new cc.Sprite();
        this._spriteCharacter.setName("_spriteCharacter");
        this._root.addChild(this._spriteCharacter);
        this._spriteCharacter.setCascadeOpacityEnabled(true);
        this._spriteCharacter.setCascadeColorEnabled(true);
        this._spriteCharacter.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._spriteCharacter, 0.088, 0.7706);
        let _spriteCharacterLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spriteCharacter);
        let sf = cc.spriteFrameCache.getSpriteFrame("basics/other/Character.png"); if (sf) this._spriteCharacter.setSpriteFrame(sf);
        let _spriteCharacterBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _spriteCharacterBlendFunc.src = 1;
        _spriteCharacterBlendFunc.dst = 771;
        this._spriteCharacter.setBlendFunc(_spriteCharacterBlendFunc);

        ///// # _txtMessage
        this._txtMessage = new ck.Text();
        this._txtMessage.setName("_txtMessage");
        this._root.addChild(this._txtMessage);
        this._txtMessage.setCascadeOpacityEnabled(true);
        this._txtMessage.setCascadeColorEnabled(true);
        this._txtMessage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtMessage, 0.5919, 0.5039);
        this._txtMessage.setTextColor(cc.color(87, 60, 38, 255));
        let _txtMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtMessage);
        _txtMessageLayoutComponent.setPositionPercentXEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentX(0.5919);
        _txtMessageLayoutComponent.setPositionPercentYEnabled(true);
        _txtMessageLayoutComponent.setPositionPercentY(0.5039);
        this._txtMessage.setTouchEnabled(false);
        this._txtMessage.setUnifySizeEnabled(false);
        this._txtMessage.ignoreContentAdaptWithSize(false);
        this._txtMessage.setContentSize(cc.size(448.7921, 124.813));
        this._txtMessage.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtMessage.setDefaultFontSize(36);
        this._txtMessage.setTextHorizontalAlignment(1);
        this._txtMessage.setTextVerticalAlignment(1);

    },



});

/**
 * Create TutorialGuideBoard
 * @returns {_ccs.TutorialGuideBoard}
 */
_ccs.TutorialGuideBoard.create = function () {
    return new _ccs.TutorialGuideBoard();
};
