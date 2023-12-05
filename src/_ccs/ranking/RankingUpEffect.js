/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.RankingUpEffect
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.RankingUpEffect = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutPlayers: null,
    /** @type {RankingUpWidget} */
    _blur00: null,
    /** @type {RankingUpWidget} */
    _blur01: null,
    /** @type {RankingUpWidget} */
    _blur02: null,
    /** @type {RankingUpWidget} */
    _blur03: null,
    /** @type {RankingUpWidget} */
    _blur04: null,
    /** @type {RankingUpWidget} */
    _player00: null,
    /** @type {RankingUpWidget} */
    _player01: null,
    /** @type {RankingUpWidget} */
    _player02: null,
    /** @type {ccui.ImageView} */
    _imgBorder: null,
    /** @type {ccui.ImageView} */
    _imgHeader: null,
    /** @type {ck.Text} */
    _txtHeader: null,


    /**
     * _ccs.RankingUpEffect constructor
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
        this._layoutRoot.setPosition(0.0002, 0);
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        this._layoutRoot.setTouchEnabled(false);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(531.6289, 407.6296));

        ///// # _layoutPlayers
        this._layoutPlayers = new ccui.Layout();
        this._layoutPlayers.setName("_layoutPlayers");
        this._layoutRoot.addChild(this._layoutPlayers);
        this._layoutPlayers.setCascadeOpacityEnabled(true);
        this._layoutPlayers.setCascadeColorEnabled(true);
        this._layoutPlayers.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutPlayers, 0.5, 0.48);
        let _layoutPlayersLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutPlayers);
        _layoutPlayersLayoutComponent.setPositionPercentXEnabled(true);
        _layoutPlayersLayoutComponent.setPositionPercentX(0.5);
        _layoutPlayersLayoutComponent.setPositionPercentYEnabled(true);
        _layoutPlayersLayoutComponent.setPositionPercentY(0.48);
        this._layoutPlayers.setTouchEnabled(false);
        this._layoutPlayers.setUnifySizeEnabled(false);
        this._layoutPlayers.ignoreContentAdaptWithSize(false);
        this._layoutPlayers.setContentSize(cc.size(600, 320));
        this._layoutPlayers.setClippingEnabled(true);

        ///// # _blur00
        this._blur00 = new RankingUpWidget();
        this._blur00.setName("_blur00");
        this._layoutPlayers.addChild(this._blur00);
        this._blur00.setCascadeOpacityEnabled(true);
        this._blur00.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._blur00, 0.5, 1.16);
        this._blur00.setColor(cc.color(189, 189, 189, 255));
        let _blur00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._blur00);
        _blur00LayoutComponent.setPositionPercentXEnabled(true);
        _blur00LayoutComponent.setPositionPercentX(0.5);
        _blur00LayoutComponent.setPositionPercentYEnabled(true);
        _blur00LayoutComponent.setPositionPercentY(1.16);

        ///// # _blur01
        this._blur01 = new RankingUpWidget();
        this._blur01.setName("_blur01");
        this._layoutPlayers.addChild(this._blur01);
        this._blur01.setCascadeOpacityEnabled(true);
        this._blur01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._blur01, 0.5, 0.83);
        this._blur01.setColor(cc.color(189, 189, 189, 255));
        let _blur01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._blur01);
        _blur01LayoutComponent.setPositionPercentXEnabled(true);
        _blur01LayoutComponent.setPositionPercentX(0.5);
        _blur01LayoutComponent.setPositionPercentYEnabled(true);
        _blur01LayoutComponent.setPositionPercentY(0.83);

        ///// # _blur02
        this._blur02 = new RankingUpWidget();
        this._blur02.setName("_blur02");
        this._layoutPlayers.addChild(this._blur02);
        this._blur02.setCascadeOpacityEnabled(true);
        this._blur02.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._blur02, 0.5, 0.5);
        this._blur02.setColor(cc.color(189, 189, 189, 255));
        let _blur02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._blur02);
        _blur02LayoutComponent.setPositionPercentXEnabled(true);
        _blur02LayoutComponent.setPositionPercentX(0.5);
        _blur02LayoutComponent.setPositionPercentYEnabled(true);
        _blur02LayoutComponent.setPositionPercentY(0.5);

        ///// # _blur03
        this._blur03 = new RankingUpWidget();
        this._blur03.setName("_blur03");
        this._layoutPlayers.addChild(this._blur03);
        this._blur03.setCascadeOpacityEnabled(true);
        this._blur03.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._blur03, 0.5, 0.17);
        this._blur03.setColor(cc.color(189, 189, 189, 255));
        let _blur03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._blur03);
        _blur03LayoutComponent.setPositionPercentXEnabled(true);
        _blur03LayoutComponent.setPositionPercentX(0.5);
        _blur03LayoutComponent.setPositionPercentYEnabled(true);
        _blur03LayoutComponent.setPositionPercentY(0.17);

        ///// # _blur04
        this._blur04 = new RankingUpWidget();
        this._blur04.setName("_blur04");
        this._layoutPlayers.addChild(this._blur04);
        this._blur04.setCascadeOpacityEnabled(true);
        this._blur04.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._blur04, 0.5, -0.16);
        this._blur04.setColor(cc.color(189, 189, 189, 255));
        let _blur04LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._blur04);
        _blur04LayoutComponent.setPositionPercentXEnabled(true);
        _blur04LayoutComponent.setPositionPercentX(0.5);
        _blur04LayoutComponent.setPositionPercentYEnabled(true);
        _blur04LayoutComponent.setPositionPercentY(-0.16);

        ///// # _player00
        this._player00 = new RankingUpWidget();
        this._player00.setName("_player00");
        this._layoutPlayers.addChild(this._player00);
        this._player00.setCascadeOpacityEnabled(true);
        this._player00.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._player00, 0.5, 0.83);
        this._player00.setVisible(false);
        this._player00.setColor(cc.color(189, 189, 189, 255));
        let _player00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._player00);
        _player00LayoutComponent.setPositionPercentXEnabled(true);
        _player00LayoutComponent.setPositionPercentX(0.5);
        _player00LayoutComponent.setPositionPercentYEnabled(true);
        _player00LayoutComponent.setPositionPercentY(0.83);

        ///// # _player01
        this._player01 = new RankingUpWidget();
        this._player01.setName("_player01");
        this._layoutPlayers.addChild(this._player01);
        this._player01.setCascadeOpacityEnabled(true);
        this._player01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._player01, 0.5, 0.5);
        let _player01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._player01);
        _player01LayoutComponent.setPositionPercentXEnabled(true);
        _player01LayoutComponent.setPositionPercentX(0.5);
        _player01LayoutComponent.setPositionPercentYEnabled(true);
        _player01LayoutComponent.setPositionPercentY(0.5);

        ///// # _player02
        this._player02 = new RankingUpWidget();
        this._player02.setName("_player02");
        this._layoutPlayers.addChild(this._player02);
        this._player02.setCascadeOpacityEnabled(true);
        this._player02.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._player02, 0.5, 0.17);
        this._player02.setVisible(false);
        this._player02.setColor(cc.color(189, 189, 189, 255));
        let _player02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._player02);
        _player02LayoutComponent.setPositionPercentXEnabled(true);
        _player02LayoutComponent.setPositionPercentX(0.5);
        _player02LayoutComponent.setPositionPercentYEnabled(true);
        _player02LayoutComponent.setPositionPercentY(0.17);

        ///// # _imgBorder
        this._imgBorder = new ccui.ImageView();
        this._imgBorder.setName("_imgBorder");
        this._layoutRoot.addChild(this._imgBorder);
        this._imgBorder.setCascadeOpacityEnabled(true);
        this._imgBorder.setCascadeColorEnabled(true);
        this._imgBorder.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBorder, 0.5, 0.5049);
        let _imgBorderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBorder);
        _imgBorderLayoutComponent.setPositionPercentXEnabled(true);
        _imgBorderLayoutComponent.setPositionPercentX(0.5);
        _imgBorderLayoutComponent.setPositionPercentYEnabled(true);
        _imgBorderLayoutComponent.setPositionPercentY(0.5049);
        _imgBorderLayoutComponent.setPercentWidthEnabled(true);
        _imgBorderLayoutComponent.setPercentWidth(1);
        _imgBorderLayoutComponent.setPercentHeightEnabled(true);
        _imgBorderLayoutComponent.setPercentHeight(1);
        this._imgBorder.loadTexture("basics/popup/Pattern01.png", 1);
        this._imgBorder.setUnifySizeEnabled(false);
        this._imgBorder.ignoreContentAdaptWithSize(false);
        this._imgBorder.setScale9Enabled(true);
        this._imgBorder.setCapInsets(cc.rect(88, 83, 7, 6));
        ck.UIUtils.setSizePercent(this._imgBorder, 1, 1);
        this._imgBorder.setTouchEnabled(false);

        ///// # _imgHeader
        this._imgHeader = new ccui.ImageView();
        this._imgHeader.setName("_imgHeader");
        this._layoutRoot.addChild(this._imgHeader);
        this._imgHeader.setCascadeOpacityEnabled(true);
        this._imgHeader.setCascadeColorEnabled(true);
        this._imgHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgHeader, 0.5, 1.0049);
        let _imgHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgHeader);
        _imgHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentX(0.5);
        _imgHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _imgHeaderLayoutComponent.setPositionPercentY(1.0049);
        this._imgHeader.loadTexture("basics/popup/HeaderYellow.png", 1);
        this._imgHeader.setUnifySizeEnabled(false);
        this._imgHeader.ignoreContentAdaptWithSize(false);
        this._imgHeader.setContentSize(cc.size(346, 84));
        this._imgHeader.setTouchEnabled(false);

        ///// # _txtHeader
        this._txtHeader = new ck.Text();
        this._txtHeader.setName("_txtHeader");
        this._imgHeader.addChild(this._txtHeader);
        this._txtHeader.setCascadeOpacityEnabled(true);
        this._txtHeader.setCascadeColorEnabled(true);
        this._txtHeader.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtHeader, 0.5, 0.55);
        this._txtHeader.setTextColor(cc.color(222, 247, 255, 255));
        let _txtHeaderLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtHeader);
        _txtHeaderLayoutComponent.setPositionPercentXEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentX(0.5);
        _txtHeaderLayoutComponent.setPositionPercentYEnabled(true);
        _txtHeaderLayoutComponent.setPositionPercentY(0.55);
        this._txtHeader.setTouchEnabled(false);
        this._txtHeader.ignoreContentAdaptWithSize(true);
        this._txtHeader.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtHeader.setDefaultFontSize(55);
        this._txtHeader.setString(gm.localize.getText("TXT_RANKING"));
        this._txtHeader.setTextHorizontalAlignment(1);
        this._txtHeader.setTextVerticalAlignment(1);
        this._txtHeader.enableOutline(cc.color(160, 88, 0, 255), 2);
        this._txtHeader.enableShadow(cc.color(207, 113, 0, 255), cc.size(0, -2), 0);

    },



});

/**
 * Create RankingUpEffect
 * @returns {_ccs.RankingUpEffect}
 */
_ccs.RankingUpEffect.create = function () {
    return new _ccs.RankingUpEffect();
};
