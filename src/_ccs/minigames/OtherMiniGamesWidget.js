/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.OtherMiniGamesWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.OtherMiniGamesWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {MiniGameButtonWidget} */
    _btnOtherMiniGames: null,
    /** @type {ck.GridViewVertical} */
    _gridViewOtherMiniGames: null,


    /**
     * _ccs.OtherMiniGamesWidget constructor
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
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(297, 500));

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._root.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
        _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentX(0);
        _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentY(0);
        _imgBgrLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrLayoutComponent.setPercentWidth(1);
        _imgBgrLayoutComponent.setPercentHeightEnabled(true);
        _imgBgrLayoutComponent.setPercentHeight(1);
        this._imgBgr.loadTexture("home/BoxMinigames.png", 1);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setScale9Enabled(true);
        this._imgBgr.setCapInsets(cc.rect(0, 134, 297, 139));
        ck.UIUtils.setSizePercent(this._imgBgr, 1, 1);
        this._imgBgr.setTouchEnabled(false);

        ///// # _btnOtherMiniGames
        this._btnOtherMiniGames = new MiniGameButtonWidget();
        this._btnOtherMiniGames.setName("_btnOtherMiniGames");
        this._root.addChild(this._btnOtherMiniGames);
        this._btnOtherMiniGames.setCascadeOpacityEnabled(true);
        this._btnOtherMiniGames.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._btnOtherMiniGames, 0.2593, 0.14);
        let _btnOtherMiniGamesLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnOtherMiniGames);

        ///// # _gridViewOtherMiniGames
        this._gridViewOtherMiniGames = new ck.GridViewVertical();
        this._gridViewOtherMiniGames.setName("_gridViewOtherMiniGames");
        this._root.addChild(this._gridViewOtherMiniGames);
        this._gridViewOtherMiniGames.setCascadeOpacityEnabled(true);
        this._gridViewOtherMiniGames.setCascadeColorEnabled(true);
        this._gridViewOtherMiniGames.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridViewOtherMiniGames, 0.5, 0.531);
        let _gridViewOtherMiniGamesLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridViewOtherMiniGames);
        _gridViewOtherMiniGamesLayoutComponent.setPercentWidthEnabled(true);
        _gridViewOtherMiniGamesLayoutComponent.setPercentWidth(1);

    },


    playCCSAnimShow: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimShow();
    
        let _imgBgrAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(25 / (60 * speed), 1.0127, 1.03).easing(cc.easeSineInOut()),
                    cc.scaleTo(5 / (60 * speed), 1, 1).easing(cc.easeSineInOut())
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgBgr.setScale(0.54, 0.32);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgBgrAction = _imgBgrAction.repeatForever();
        } else _imgBgrAction = cc.sequence(
            cc.delayTime(delay),
            _imgBgrAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgBgr.runAction(_imgBgrAction);
    },

    resetCCSAnimShow: function () {
        this._imgBgr.stopAllActions();
        this._imgBgr.setScale(0.54, 0.32);
    },

    playCCSAnimHide: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimHide();
    
        let _imgBgrAction = cc.sequence(
            cc.spawn(
                cc.scaleTo(30 / (60 * speed), 0.54, 0.32).easing(cc.easeSineInOut())
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgBgr.setScale(1, 1);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgBgrAction = _imgBgrAction.repeatForever();
        } else _imgBgrAction = cc.sequence(
            cc.delayTime(delay),
            _imgBgrAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgBgr.runAction(_imgBgrAction);
    },

    resetCCSAnimHide: function () {
        this._imgBgr.stopAllActions();
        this._imgBgr.setScale(1, 1);
    }
});

/**
 * Create OtherMiniGamesWidget
 * @returns {_ccs.OtherMiniGamesWidget}
 */
_ccs.OtherMiniGamesWidget.create = function () {
    return new _ccs.OtherMiniGamesWidget();
};
