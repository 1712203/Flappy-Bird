/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.PistiChatBubbleWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.PistiChatBubbleWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.Layout} */
    _layoutBubble: null,
    /** @type {ccui.Layout} */
    _layoutContent: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundContent: null,
    /** @type {ck.Text} */
    _txtContent: null,
    /** @type {ccui.Layout} */
    _layoutArrow: null,
    /** @type {ccui.ImageView} */
    _imgArrow: null,


    /**
     * _ccs.PistiChatBubbleWidget constructor
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
        let _layoutRootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutRoot);
        this._layoutRoot.setTouchEnabled(true);
        this._layoutRoot.setUnifySizeEnabled(false);
        this._layoutRoot.ignoreContentAdaptWithSize(false);
        this._layoutRoot.setContentSize(cc.size(50, 50));

        ///// # _layoutBubble
        this._layoutBubble = new ccui.Layout();
        this._layoutBubble.setName("_layoutBubble");
        this._layoutRoot.addChild(this._layoutBubble);
        this._layoutBubble.setCascadeOpacityEnabled(true);
        this._layoutBubble.setCascadeColorEnabled(true);
        this._layoutBubble.setScale(0.0001, 0.0001);
        let _layoutBubbleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutBubble);
        this._layoutBubble.setTouchEnabled(true);
        this._layoutBubble.setUnifySizeEnabled(false);
        this._layoutBubble.ignoreContentAdaptWithSize(false);
        this._layoutBubble.setContentSize(cc.size(50, 50));

        ///// # _layoutContent
        this._layoutContent = new ccui.Layout();
        this._layoutContent.setName("_layoutContent");
        this._layoutBubble.addChild(this._layoutContent);
        this._layoutContent.setCascadeOpacityEnabled(true);
        this._layoutContent.setCascadeColorEnabled(true);
        this._layoutContent.setAnchorPoint(cc.p(0.5, 0));
        let _layoutContentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutContent);
        this._layoutContent.setTouchEnabled(true);
        this._layoutContent.setUnifySizeEnabled(false);
        this._layoutContent.ignoreContentAdaptWithSize(false);
        this._layoutContent.setContentSize(cc.size(200, 100));

        ///// # _imgBackgroundContent
        this._imgBackgroundContent = new ccui.ImageView();
        this._imgBackgroundContent.setName("_imgBackgroundContent");
        this._layoutContent.addChild(this._imgBackgroundContent);
        this._imgBackgroundContent.setCascadeOpacityEnabled(true);
        this._imgBackgroundContent.setCascadeColorEnabled(true);
        this._imgBackgroundContent.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundContent, 0.5, 0.5);
        let _imgBackgroundContentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundContent);
        _imgBackgroundContentLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundContentLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundContentLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundContentLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundContentLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundContentLayoutComponent.setPercentWidth(1);
        _imgBackgroundContentLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundContentLayoutComponent.setPercentHeight(1);
        this._imgBackgroundContent.loadTexture("basics/other/ChatBubble_01.png", 1);
        this._imgBackgroundContent.setUnifySizeEnabled(false);
        this._imgBackgroundContent.ignoreContentAdaptWithSize(false);
        this._imgBackgroundContent.setScale9Enabled(true);
        this._imgBackgroundContent.setCapInsets(cc.rect(99, 21, 104, 22));
        ck.UIUtils.setSizePercent(this._imgBackgroundContent, 1, 1);
        this._imgBackgroundContent.setTouchEnabled(false);

        ///// # _txtContent
        this._txtContent = new ck.Text();
        this._txtContent.setName("_txtContent");
        this._layoutContent.addChild(this._txtContent);
        this._txtContent.setCascadeOpacityEnabled(true);
        this._txtContent.setCascadeColorEnabled(true);
        this._txtContent.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtContent, 0.5, 0.53);
        this._txtContent.setTextColor(cc.color(26, 26, 26, 255));
        let _txtContentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtContent);
        _txtContentLayoutComponent.setPositionPercentXEnabled(true);
        _txtContentLayoutComponent.setPositionPercentX(0.5);
        _txtContentLayoutComponent.setPositionPercentYEnabled(true);
        _txtContentLayoutComponent.setPositionPercentY(0.53);
        _txtContentLayoutComponent.setPercentWidthEnabled(true);
        _txtContentLayoutComponent.setPercentWidth(0.9);
        _txtContentLayoutComponent.setPercentHeightEnabled(true);
        _txtContentLayoutComponent.setPercentHeight(0.8);
        this._txtContent.setTouchEnabled(false);
        this._txtContent.setUnifySizeEnabled(false);
        this._txtContent.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtContent, 0.9, 0.8);
        this._txtContent.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtContent.setDefaultFontSize(35);
        this._txtContent.setTextHorizontalAlignment(1);
        this._txtContent.setTextVerticalAlignment(1);
        this._txtContent.autoFitMultipleLine();

        ///// # _layoutArrow
        this._layoutArrow = new ccui.Layout();
        this._layoutArrow.setName("_layoutArrow");
        this._layoutBubble.addChild(this._layoutArrow);
        this._layoutArrow.setCascadeOpacityEnabled(true);
        this._layoutArrow.setCascadeColorEnabled(true);
        this._layoutArrow.setAnchorPoint(cc.p(0.17, 0.26));
        this._layoutArrow.setVisible(false);
        let _layoutArrowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutArrow);
        this._layoutArrow.setTouchEnabled(true);
        this._layoutArrow.setUnifySizeEnabled(false);
        this._layoutArrow.ignoreContentAdaptWithSize(false);
        this._layoutArrow.setContentSize(cc.size(28, 29));

        ///// # _imgArrow
        this._imgArrow = new ccui.ImageView();
        this._imgArrow.setName("_imgArrow");
        this._layoutArrow.addChild(this._imgArrow);
        this._imgArrow.setCascadeOpacityEnabled(true);
        this._imgArrow.setCascadeColorEnabled(true);
        this._imgArrow.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgArrow, 0.5, 0.5);
        this._imgArrow.setScale(-1, 1);
        let _imgArrowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgArrow);
        _imgArrowLayoutComponent.setPositionPercentXEnabled(true);
        _imgArrowLayoutComponent.setPositionPercentX(0.5);
        _imgArrowLayoutComponent.setPositionPercentYEnabled(true);
        _imgArrowLayoutComponent.setPositionPercentY(0.5);
        this._imgArrow.loadTexture("basics/other/ChatBubbleArrow_01.png", 1);
        this._imgArrow.setUnifySizeEnabled(false);
        this._imgArrow.ignoreContentAdaptWithSize(false);
        this._imgArrow.setContentSize(cc.size(28, 29));
        this._imgArrow.setTouchEnabled(false);

    },


    playCCSAnimOpen: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimOpen();
    
        let _layoutBubbleAction = cc.sequence(
            cc.spawn(
                cc.scaleTo(30 / (60 * speed), 1, 1).easing(cc.easeBackOut())
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._layoutBubble.setScale(0.0001, 0.0001);
            }.bind(this))
        );
        if (repeat <= 0) {
            _layoutBubbleAction = _layoutBubbleAction.repeatForever();
        } else _layoutBubbleAction = cc.sequence(
            cc.delayTime(delay),
            _layoutBubbleAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._layoutBubble.runAction(_layoutBubbleAction);
    },

    resetCCSAnimOpen: function () {
        this._layoutBubble.stopAllActions();
        this._layoutBubble.setScale(0.0001, 0.0001);
    },

    playCCSAnimClose: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimClose();
    
        let _layoutBubbleAction = cc.sequence(
            cc.spawn(
                cc.scaleTo(30 / (60 * speed), 0.0001, 0.0001).easing(cc.easeBackIn())
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._layoutBubble.setScale(1, 1);
            }.bind(this))
        );
        if (repeat <= 0) {
            _layoutBubbleAction = _layoutBubbleAction.repeatForever();
        } else _layoutBubbleAction = cc.sequence(
            cc.delayTime(delay),
            _layoutBubbleAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._layoutBubble.runAction(_layoutBubbleAction);
    },

    resetCCSAnimClose: function () {
        this._layoutBubble.stopAllActions();
        this._layoutBubble.setScale(1, 1);
    }
});

/**
 * Create PistiChatBubbleWidget
 * @returns {_ccs.PistiChatBubbleWidget}
 */
_ccs.PistiChatBubbleWidget.create = function () {
    return new _ccs.PistiChatBubbleWidget();
};
