/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ChestWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ChestWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutChestOpen: null,
    /** @type {ccui.ImageView} */
    _imgChestOpen: null,
    /** @type {ccui.Layout} */
    _layoutChestClose: null,
    /** @type {ccui.ImageView} */
    _imgChestClose: null,


    /**
     * _ccs.ChestWidget constructor
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

        ///// # _layoutChestOpen
        this._layoutChestOpen = new ccui.Layout();
        this._layoutChestOpen.setName("_layoutChestOpen");
        this.addChild(this._layoutChestOpen);
        this._layoutChestOpen.setCascadeOpacityEnabled(true);
        this._layoutChestOpen.setCascadeColorEnabled(true);
        this._layoutChestOpen.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutChestOpenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutChestOpen);
        this._layoutChestOpen.setTouchEnabled(false);
        this._layoutChestOpen.setUnifySizeEnabled(false);
        this._layoutChestOpen.ignoreContentAdaptWithSize(false);
        this._layoutChestOpen.setContentSize(cc.size(153, 135));

        ///// # _imgChestOpen
        this._imgChestOpen = new ccui.ImageView();
        this._imgChestOpen.setName("_imgChestOpen");
        this._layoutChestOpen.addChild(this._imgChestOpen);
        this._imgChestOpen.setCascadeOpacityEnabled(true);
        this._imgChestOpen.setCascadeColorEnabled(true);
        this._imgChestOpen.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgChestOpen, 0.5, 2.2704);
        this._imgChestOpen.setOpacity(0);
        let _imgChestOpenLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgChestOpen);
        _imgChestOpenLayoutComponent.setPositionPercentXEnabled(true);
        _imgChestOpenLayoutComponent.setPositionPercentX(0.5);
        this._imgChestOpen.loadTexture("basics/chests/Chest_00_07.png", 1);
        this._imgChestOpen.setUnifySizeEnabled(false);
        this._imgChestOpen.ignoreContentAdaptWithSize(false);
        this._imgChestOpen.setContentSize(cc.size(153, 135));
        this._imgChestOpen.setTouchEnabled(false);

        ///// # _layoutChestClose
        this._layoutChestClose = new ccui.Layout();
        this._layoutChestClose.setName("_layoutChestClose");
        this.addChild(this._layoutChestClose);
        this._layoutChestClose.setCascadeOpacityEnabled(true);
        this._layoutChestClose.setCascadeColorEnabled(true);
        this._layoutChestClose.setAnchorPoint(cc.p(0.5, 0.5));
        let _layoutChestCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutChestClose);
        this._layoutChestClose.setTouchEnabled(false);
        this._layoutChestClose.setUnifySizeEnabled(false);
        this._layoutChestClose.ignoreContentAdaptWithSize(false);
        this._layoutChestClose.setContentSize(cc.size(153, 135));

        ///// # _imgChestClose
        this._imgChestClose = new ccui.ImageView();
        this._imgChestClose.setName("_imgChestClose");
        this._layoutChestClose.addChild(this._imgChestClose);
        this._imgChestClose.setCascadeOpacityEnabled(true);
        this._imgChestClose.setCascadeColorEnabled(true);
        this._imgChestClose.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgChestClose, 0.5, 0);
        this._imgChestClose.setOpacity(0);
        let _imgChestCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgChestClose);
        _imgChestCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgChestCloseLayoutComponent.setPositionPercentX(0.5);
        this._imgChestClose.loadTexture("basics/chests/Chest_00_07.png", 1);
        this._imgChestClose.setUnifySizeEnabled(false);
        this._imgChestClose.ignoreContentAdaptWithSize(false);
        this._imgChestClose.setContentSize(cc.size(153, 135));
        this._imgChestClose.setTouchEnabled(false);

    },


    playCCSAnimShow: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimShow();
    
        let _imgChestOpenAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(5 / (25 * speed), 76.5, 0),
                    cc.moveTo(3 / (25 * speed), 76.5, 20),
                    cc.moveTo(2 / (25 * speed), 76.5, 0),
                    cc.moveTo(10 / (25 * speed), 76.5, 0)
                ),
                cc.sequence(
                    cc.scaleTo(4 / (25 * speed), 1, 1),
                    cc.scaleTo(1 / (25 * speed), 1.2, 0.8),
                    cc.scaleTo(2 / (25 * speed), 0.9, 1.1),
                    cc.scaleTo(2 / (25 * speed), 1.05, 0.95),
                    cc.scaleTo(1 / (25 * speed), 1, 1),
                    cc.scaleTo(10 / (25 * speed), 1, 1)
                ),
                cc.sequence(
                    cc.rotateBy(5 / (25 * speed), 0, 0),
                    cc.rotateBy(2 / (25 * speed), 10, 10),
                    cc.rotateBy(2 / (25 * speed), -20, -20),
                    cc.rotateBy(1 / (25 * speed), 10, 10),
                    cc.rotateBy(10 / (25 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(3 / (25 * speed), 255),
                    cc.fadeTo(17 / (25 * speed), 255)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgChestOpen.setPosition(76.5, 306.5);
                this._imgChestOpen.setScale(1, 1);
                this._imgChestOpen.setRotation(0);
                this._imgChestOpen.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgChestOpenAction = _imgChestOpenAction.repeatForever();
        } else _imgChestOpenAction = cc.sequence(
            cc.delayTime(delay),
            _imgChestOpenAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgChestOpen.runAction(_imgChestOpenAction);
    
        let _imgChestCloseAction = cc.sequence(
            cc.spawn(
                cc.scaleTo(20 / (25 * speed), 1, 1),
                cc.fadeTo(20 / (25 * speed), 0)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgChestClose.setScale(1, 1);
                this._imgChestClose.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgChestCloseAction = _imgChestCloseAction.repeatForever();
        } else _imgChestCloseAction = cc.sequence(
            cc.delayTime(delay),
            _imgChestCloseAction.repeat(repeat)
        )
        
        this._imgChestClose.runAction(_imgChestCloseAction);
    },

    resetCCSAnimShow: function () {
        this._imgChestOpen.stopAllActions();
        this._imgChestOpen.setPosition(76.5, 306.5);
        this._imgChestOpen.setScale(1, 1);
        this._imgChestOpen.setRotation(0);
        this._imgChestOpen.setOpacity(0);
    
        this._imgChestClose.stopAllActions();
        this._imgChestClose.setScale(1, 1);
        this._imgChestClose.setOpacity(0);
    },

    playCCSAnimReadyOpen: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimReadyOpen();
    
        let _imgChestOpenAction = cc.sequence(
            cc.spawn(
                cc.moveTo(7 / (25 * speed), 76.5, 0),
                cc.sequence(
                    cc.scaleTo(5 / (25 * speed), 1.2, 0.8),
                    cc.scaleTo(2 / (25 * speed), 0.7, 1.3)
                ),
                cc.rotateBy(7 / (25 * speed), 0, 0),
                cc.sequence(
                    cc.fadeTo(6 / (25 * speed), 255),
                    cc.fadeTo(1 / (25 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgChestOpen.setPosition(76.5, 0);
                this._imgChestOpen.setScale(1, 1);
                this._imgChestOpen.setRotation(0);
                this._imgChestOpen.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgChestOpenAction = _imgChestOpenAction.repeatForever();
        } else _imgChestOpenAction = cc.sequence(
            cc.delayTime(delay),
            _imgChestOpenAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgChestOpen.runAction(_imgChestOpenAction);
    
        let _imgChestCloseAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(5 / (25 * speed), 1.2, 0.8),
                    cc.scaleTo(2 / (25 * speed), 0.7, 1.3)
                ),
                cc.sequence(
                    cc.fadeTo(6 / (25 * speed), 0),
                    cc.fadeTo(1 / (25 * speed), 255)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgChestClose.setScale(1, 1);
                this._imgChestClose.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgChestCloseAction = _imgChestCloseAction.repeatForever();
        } else _imgChestCloseAction = cc.sequence(
            cc.delayTime(delay),
            _imgChestCloseAction.repeat(repeat)
        )
        
        this._imgChestClose.runAction(_imgChestCloseAction);
    },

    resetCCSAnimReadyOpen: function () {
        this._imgChestOpen.stopAllActions();
        this._imgChestOpen.setPosition(76.5, 0);
        this._imgChestOpen.setScale(1, 1);
        this._imgChestOpen.setRotation(0);
        this._imgChestOpen.setOpacity(255);
    
        this._imgChestClose.stopAllActions();
        this._imgChestClose.setScale(1, 1);
        this._imgChestClose.setOpacity(0);
    },

    playCCSAnimOpen: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimOpen();
    
        let _imgChestOpenAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(7 / (25 * speed), 76.5, 0),
                    cc.moveTo(5 / (25 * speed), 76.5, 0)
                ),
                cc.sequence(
                    cc.scaleTo(5 / (25 * speed), 1.2, 0.8),
                    cc.scaleTo(2 / (25 * speed), 0.7, 1.3),
                    cc.scaleTo(5 / (25 * speed), 0.7, 1.3)
                ),
                cc.sequence(
                    cc.rotateBy(7 / (25 * speed), 0, 0),
                    cc.rotateBy(5 / (25 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(6 / (25 * speed), 255),
                    cc.fadeTo(1 / (25 * speed), 0),
                    cc.fadeTo(5 / (25 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgChestOpen.setPosition(76.5, 0);
                this._imgChestOpen.setScale(1, 1);
                this._imgChestOpen.setRotation(0);
                this._imgChestOpen.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgChestOpenAction = _imgChestOpenAction.repeatForever();
        } else _imgChestOpenAction = cc.sequence(
            cc.delayTime(delay),
            _imgChestOpenAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgChestOpen.runAction(_imgChestOpenAction);
    
        let _imgChestCloseAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(5 / (25 * speed), 1.2, 0.8),
                    cc.scaleTo(2 / (25 * speed), 0.7, 1.3),
                    cc.scaleTo(2 / (25 * speed), 1.2, 0.8),
                    cc.scaleTo(2 / (25 * speed), 0.9, 1.1),
                    cc.scaleTo(1 / (25 * speed), 1, 1)
                ),
                cc.sequence(
                    cc.fadeTo(6 / (25 * speed), 0),
                    cc.fadeTo(1 / (25 * speed), 255),
                    cc.fadeTo(5 / (25 * speed), 255)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgChestClose.setScale(1, 1);
                this._imgChestClose.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgChestCloseAction = _imgChestCloseAction.repeatForever();
        } else _imgChestCloseAction = cc.sequence(
            cc.delayTime(delay),
            _imgChestCloseAction.repeat(repeat)
        )
        
        this._imgChestClose.runAction(_imgChestCloseAction);
    },

    resetCCSAnimOpen: function () {
        this._imgChestOpen.stopAllActions();
        this._imgChestOpen.setPosition(76.5, 0);
        this._imgChestOpen.setScale(1, 1);
        this._imgChestOpen.setRotation(0);
        this._imgChestOpen.setOpacity(255);
    
        this._imgChestClose.stopAllActions();
        this._imgChestClose.setScale(1, 1);
        this._imgChestClose.setOpacity(0);
    }
});

/**
 * Create ChestWidget
 * @returns {_ccs.ChestWidget}
 */
_ccs.ChestWidget.create = function () {
    return new _ccs.ChestWidget();
};
