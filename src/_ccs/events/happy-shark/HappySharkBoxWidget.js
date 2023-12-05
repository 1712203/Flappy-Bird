/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.HappySharkBoxWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.HappySharkBoxWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutItem: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtAmount: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,


    /**
     * _ccs.HappySharkBoxWidget constructor
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
        this._layoutRoot.setContentSize(cc.size(100, 100));

        ///// # _layoutItem
        this._layoutItem = new ccui.Layout();
        this._layoutItem.setName("_layoutItem");
        this._layoutRoot.addChild(this._layoutItem);
        this._layoutItem.setCascadeOpacityEnabled(true);
        this._layoutItem.setCascadeColorEnabled(true);
        this._layoutItem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutItem, 0.5, 0.5);
        let _layoutItemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutItem);
        this._layoutItem.setTouchEnabled(false);
        this._layoutItem.setUnifySizeEnabled(false);
        this._layoutItem.ignoreContentAdaptWithSize(false);
        this._layoutItem.setContentSize(cc.size(100, 100));

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._layoutItem.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.5, 0.5);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.5);
        _imgIconLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconLayoutComponent.setPositionPercentY(0.5);
        this._imgIcon.loadTexture("happy-shark/ui/Box.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(80, 80));
        this._imgIcon.setTouchEnabled(false);

        ///// # _txtAmount
        this._txtAmount = new ck.Text();
        this._txtAmount.setName("_txtAmount");
        this._layoutItem.addChild(this._txtAmount);
        this._txtAmount.setCascadeOpacityEnabled(true);
        this._txtAmount.setCascadeColorEnabled(true);
        this._txtAmount.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmount, 0.5, 0.3);
        let _txtAmountLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmount);
        _txtAmountLayoutComponent.setPositionPercentXEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentX(0.5);
        _txtAmountLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountLayoutComponent.setPositionPercentY(0.3);
        this._txtAmount.setTouchEnabled(false);
        this._txtAmount.setUnifySizeEnabled(false);
        this._txtAmount.ignoreContentAdaptWithSize(false);
        this._txtAmount.setContentSize(cc.size(74, 38));
        this._txtAmount.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmount.setDefaultFontSize(30);
        this._txtAmount.setTextHorizontalAlignment(1);
        this._txtAmount.setTextVerticalAlignment(1);
        this._txtAmount.enableOutline(cc.color(0, 16, 47, 255), 2);
        this._txtAmount.autoFitSingleLine();

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._layoutItem.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr, 0.5, 0.5);
        let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
        _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentY(0.5);
        this._imgBgr.loadTexture("happy-shark/ui/BubbleNormal.png", 1);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setContentSize(cc.size(110, 110));
        this._imgBgr.setTouchEnabled(false);

    },


    playCCSAnimIdle: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimIdle();
    
        let _imgBgrAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(20 / (30 * speed), 0.95, 1.02),
                    cc.scaleTo(30 / (30 * speed), 1.05, 0.95),
                    cc.scaleTo(10 / (30 * speed), 1, 1)
                ),
                cc.delayTime(60 / (30 * speed))
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgBgr.setScale(1, 1);
                this._imgBgr.setOpacity(255);
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
    
        let _layoutItemAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(20 / (30 * speed), 50, 65),
                    cc.moveTo(30 / (30 * speed), 50, 47),
                    cc.moveTo(10 / (30 * speed), 50, 50)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._layoutItem.setPosition(50, 50);
            }.bind(this))
        );
        if (repeat <= 0) {
            _layoutItemAction = _layoutItemAction.repeatForever();
        } else _layoutItemAction = cc.sequence(
            cc.delayTime(delay),
            _layoutItemAction.repeat(repeat)
        )
        
        this._layoutItem.runAction(_layoutItemAction);
    },

    resetCCSAnimIdle: function () {
        this._imgBgr.stopAllActions();
        this._imgBgr.setScale(1, 1);
        this._imgBgr.setOpacity(255);
    
        this._layoutItem.stopAllActions();
        this._layoutItem.setPosition(50, 50);
    },

    playCCSAnimBroken: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimBroken();
    
        let _imgBgrAction = cc.sequence(
            cc.spawn(
                cc.scaleTo(10 / (30 * speed), 1.2, 1.2),
                cc.fadeTo(10 / (30 * speed), 0)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgBgr.setScale(1, 1);
                this._imgBgr.setOpacity(255);
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

    resetCCSAnimBroken: function () {
        this._imgBgr.stopAllActions();
        this._imgBgr.setScale(1, 1);
        this._imgBgr.setOpacity(255);
    },

    playCCSAnimReset: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimReset();
    
    
    
    
    },

    resetCCSAnimReset: function () {
        this._imgBgr.stopAllActions();
        this._imgBgr.setScale(1, 1);
        this._imgBgr.setOpacity(255);
    
        this._layoutItem.stopAllActions();
        this._layoutItem.setPosition(50, 50);
    }
});

/**
 * Create HappySharkBoxWidget
 * @returns {_ccs.HappySharkBoxWidget}
 */
_ccs.HappySharkBoxWidget.create = function () {
    return new _ccs.HappySharkBoxWidget();
};
