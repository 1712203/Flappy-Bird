/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.ItemInfoBubbleWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.ItemInfoBubbleWidget = ccui.Widget.extend({

    /** @type {cc.Node} */
    _nodeDirection: null,
    /** @type {cc.Node} */
    _nodeCallout: null,
    /** @type {ccui.Layout} */
    _layoutContent: null,
    /** @type {ccui.ImageView} */
    _imgCallout: null,
    /** @type {ccui.ImageView} */
    _imgIcon: null,
    /** @type {ck.Text} */
    _txtName: null,
    /** @type {ck.Text} */
    _txtDescription: null,
    /** @type {ck.Text} */
    _txtNote: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundItemDuration: null,
    /** @type {ck.Text} */
    _txtDuration: null,
    /** @type {cc.Node} */
    _nodeArrow: null,
    /** @type {ccui.ImageView} */
    _imgArrow: null,


    /**
     * _ccs.ItemInfoBubbleWidget constructor
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

        ///// # _nodeDirection
        this._nodeDirection = new cc.Node();
        this._nodeDirection.setName("_nodeDirection");
        this.addChild(this._nodeDirection);
        this._nodeDirection.setCascadeOpacityEnabled(true);
        this._nodeDirection.setCascadeColorEnabled(true);
        this._nodeDirection.setScale(-1, -1);
        let _nodeDirectionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeDirection);

        ///// # _nodeCallout
        this._nodeCallout = new cc.Node();
        this._nodeCallout.setName("_nodeCallout");
        this._nodeDirection.addChild(this._nodeCallout);
        this._nodeCallout.setCascadeOpacityEnabled(true);
        this._nodeCallout.setCascadeColorEnabled(true);
        let _nodeCalloutLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeCallout);

        ///// # _layoutContent
        this._layoutContent = new ccui.Layout();
        this._layoutContent.setName("_layoutContent");
        this._nodeCallout.addChild(this._layoutContent);
        this._layoutContent.setCascadeOpacityEnabled(true);
        this._layoutContent.setCascadeColorEnabled(true);
        this._layoutContent.setAnchorPoint(cc.p(0.5, 0.5));
        this._layoutContent.setPosition(102.6, -119.18);
        let _layoutContentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutContent);
        this._layoutContent.setTouchEnabled(true);
        this._layoutContent.setUnifySizeEnabled(false);
        this._layoutContent.ignoreContentAdaptWithSize(false);
        this._layoutContent.setContentSize(cc.size(248, 181));

        ///// # _imgCallout
        this._imgCallout = new ccui.ImageView();
        this._imgCallout.setName("_imgCallout");
        this._layoutContent.addChild(this._imgCallout);
        this._imgCallout.setCascadeOpacityEnabled(true);
        this._imgCallout.setCascadeColorEnabled(true);
        this._imgCallout.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgCallout, 0.5, 0.5);
        this._imgCallout.setScale(-1, -1);
        let _imgCalloutLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgCallout);
        _imgCalloutLayoutComponent.setPositionPercentXEnabled(true);
        _imgCalloutLayoutComponent.setPositionPercentX(0.5);
        _imgCalloutLayoutComponent.setPositionPercentYEnabled(true);
        _imgCalloutLayoutComponent.setPositionPercentY(0.5);
        _imgCalloutLayoutComponent.setPercentWidthEnabled(true);
        _imgCalloutLayoutComponent.setPercentWidth(1);
        _imgCalloutLayoutComponent.setPercentHeightEnabled(true);
        _imgCalloutLayoutComponent.setPercentHeight(1);
        this._imgCallout.loadTexture("basics/other/ChatBubble_01.png", 1);
        this._imgCallout.setUnifySizeEnabled(false);
        this._imgCallout.ignoreContentAdaptWithSize(false);
        this._imgCallout.setScale9Enabled(true);
        this._imgCallout.setCapInsets(cc.rect(15, 15, 272, 34));
        ck.UIUtils.setSizePercent(this._imgCallout, 1, 1);
        this._imgCallout.setTouchEnabled(false);

        ///// # _imgIcon
        this._imgIcon = new ccui.ImageView();
        this._imgIcon.setName("_imgIcon");
        this._imgCallout.addChild(this._imgIcon);
        this._imgIcon.setCascadeOpacityEnabled(true);
        this._imgIcon.setCascadeColorEnabled(true);
        this._imgIcon.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIcon, 0.154, 0.9945);
        let _imgIconLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIcon);
        _imgIconLayoutComponent.setPositionPercentXEnabled(true);
        _imgIconLayoutComponent.setPositionPercentX(0.154);
        this._imgIcon.loadTexture("icons/color/items/Eye.png", 1);
        this._imgIcon.setUnifySizeEnabled(false);
        this._imgIcon.ignoreContentAdaptWithSize(false);
        this._imgIcon.setContentSize(cc.size(52, 52));
        this._imgIcon.setTouchEnabled(false);

        ///// # _txtName
        this._txtName = new ck.Text();
        this._txtName.setName("_txtName");
        this._imgCallout.addChild(this._txtName);
        this._txtName.setCascadeOpacityEnabled(true);
        this._txtName.setCascadeColorEnabled(true);
        this._txtName.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtName, 0.6159, 0.9945);
        this._txtName.setTextColor(cc.color(255, 199, 0, 255));
        let _txtNameLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtName);
        _txtNameLayoutComponent.setPositionPercentXEnabled(true);
        _txtNameLayoutComponent.setPositionPercentX(0.6159);
        _txtNameLayoutComponent.setPercentWidthEnabled(true);
        _txtNameLayoutComponent.setPercentWidth(0.71);
        this._txtName.setTouchEnabled(false);
        this._txtName.setUnifySizeEnabled(false);
        this._txtName.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtName, 0.71);
        this._txtName.setContentSize(cc.size(this._txtName.width, 60));
        this._txtName.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtName.setDefaultFontSize(35);
        this._txtName.setTextHorizontalAlignment(1);
        this._txtName.setTextVerticalAlignment(1);
        this._txtName.enableOutline(cc.color(115, 90, 0, 255), 1);
        this._txtName.enableShadow(cc.color(110, 110, 110, 255), cc.size(0, -2), 0);
        this._txtName.autoFitSingleLine();

        ///// # _txtDescription
        this._txtDescription = new ck.Text();
        this._txtDescription.setName("_txtDescription");
        this._imgCallout.addChild(this._txtDescription);
        this._txtDescription.setCascadeOpacityEnabled(true);
        this._txtDescription.setCascadeColorEnabled(true);
        this._txtDescription.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDescription, 0.5039, 0.5912);
        this._txtDescription.setTextColor(cc.color(111, 80, 2, 255));
        let _txtDescriptionLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDescription);
        _txtDescriptionLayoutComponent.setPositionPercentXEnabled(true);
        _txtDescriptionLayoutComponent.setPositionPercentX(0.5039);
        _txtDescriptionLayoutComponent.setPercentWidthEnabled(true);
        _txtDescriptionLayoutComponent.setPercentWidth(0.9209);
        this._txtDescription.setTouchEnabled(false);
        this._txtDescription.setUnifySizeEnabled(false);
        this._txtDescription.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._txtDescription, 0.9209);
        this._txtDescription.setContentSize(cc.size(this._txtDescription.width, 90.5442));
        this._txtDescription.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDescription.setDefaultFontSize(27);
        this._txtDescription.setTextHorizontalAlignment(1);
        this._txtDescription.setTextVerticalAlignment(1);
        this._txtDescription.autoFitMultipleLine();

        ///// # _txtNote
        this._txtNote = new ck.Text();
        this._txtNote.setName("_txtNote");
        this._imgCallout.addChild(this._txtNote);
        this._txtNote.setCascadeOpacityEnabled(true);
        this._txtNote.setCascadeColorEnabled(true);
        this._txtNote.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._txtNote, 0.5, 0.3646);
        this._txtNote.setTextColor(cc.color(111, 80, 2, 255));
        let _txtNoteLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtNote);
        _txtNoteLayoutComponent.setPositionPercentXEnabled(true);
        _txtNoteLayoutComponent.setPositionPercentX(0.5);
        _txtNoteLayoutComponent.setPercentWidthEnabled(true);
        _txtNoteLayoutComponent.setPercentWidth(0.9148);
        _txtNoteLayoutComponent.setPercentHeightEnabled(true);
        _txtNoteLayoutComponent.setPercentHeight(0.1215);
        this._txtNote.setTouchEnabled(false);
        this._txtNote.setUnifySizeEnabled(false);
        this._txtNote.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._txtNote, 0.9148, 0.1215);
        this._txtNote.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtNote.setDefaultFontSize(20);
        this._txtNote.setTextHorizontalAlignment(1);
        this._txtNote.setTextVerticalAlignment(0);
        this._txtNote.autoFitSingleLine();

        ///// # _imgBackgroundItemDuration
        this._imgBackgroundItemDuration = new ccui.ImageView();
        this._imgBackgroundItemDuration.setName("_imgBackgroundItemDuration");
        this._imgCallout.addChild(this._imgBackgroundItemDuration);
        this._imgBackgroundItemDuration.setCascadeOpacityEnabled(true);
        this._imgBackgroundItemDuration.setCascadeColorEnabled(true);
        this._imgBackgroundItemDuration.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundItemDuration, 0.4916, 0.1381);
        let _imgBackgroundItemDurationLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundItemDuration);
        _imgBackgroundItemDurationLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundItemDurationLayoutComponent.setPositionPercentX(0.4916);
        this._imgBackgroundItemDuration.loadTexture("basics/other/Box_07.png", 1);
        this._imgBackgroundItemDuration.setUnifySizeEnabled(false);
        this._imgBackgroundItemDuration.ignoreContentAdaptWithSize(false);
        this._imgBackgroundItemDuration.setScale9Enabled(true);
        this._imgBackgroundItemDuration.setCapInsets(cc.rect(49, 20, 53, 114));
        this._imgBackgroundItemDuration.setContentSize(cc.size(120, 35));
        this._imgBackgroundItemDuration.setTouchEnabled(false);

        ///// # _txtDuration
        this._txtDuration = new ck.Text();
        this._txtDuration.setName("_txtDuration");
        this._imgBackgroundItemDuration.addChild(this._txtDuration);
        this._txtDuration.setCascadeOpacityEnabled(true);
        this._txtDuration.setCascadeColorEnabled(true);
        this._txtDuration.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtDuration, 0.5, 0.5);
        let _txtDurationLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtDuration);
        _txtDurationLayoutComponent.setPositionPercentXEnabled(true);
        _txtDurationLayoutComponent.setPositionPercentX(0.5);
        _txtDurationLayoutComponent.setPositionPercentYEnabled(true);
        _txtDurationLayoutComponent.setPositionPercentY(0.5);
        this._txtDuration.setTouchEnabled(false);
        this._txtDuration.setUnifySizeEnabled(false);
        this._txtDuration.ignoreContentAdaptWithSize(false);
        this._txtDuration.setContentSize(cc.size(104.8997, 29.4022));
        this._txtDuration.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtDuration.setDefaultFontSize(30);
        this._txtDuration.setTextHorizontalAlignment(1);
        this._txtDuration.setTextVerticalAlignment(1);
        this._txtDuration.autoFitSingleLine();

        ///// # _nodeArrow
        this._nodeArrow = new cc.Node();
        this._nodeArrow.setName("_nodeArrow");
        this._nodeCallout.addChild(this._nodeArrow);
        this._nodeArrow.setCascadeOpacityEnabled(true);
        this._nodeArrow.setCascadeColorEnabled(true);
        let _nodeArrowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeArrow);

        ///// # _imgArrow
        this._imgArrow = new ccui.ImageView();
        this._imgArrow.setName("_imgArrow");
        this._nodeArrow.addChild(this._imgArrow);
        this._imgArrow.setCascadeOpacityEnabled(true);
        this._imgArrow.setCascadeColorEnabled(true);
        this._imgArrow.setAnchorPoint(cc.p(0.8768, 0.1612));
        this._imgArrow.setScale(0.8, 0.8);
        this._imgArrow.setFlippedX(true);
        this._imgArrow.setFlippedY(true);
        let _imgArrowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgArrow);
        this._imgArrow.loadTexture("basics/other/ChatBubbleArrow_01.png", 1);
        this._imgArrow.setUnifySizeEnabled(false);
        this._imgArrow.ignoreContentAdaptWithSize(false);
        this._imgArrow.setContentSize(cc.size(28, 29));
        this._imgArrow.setTouchEnabled(false);
        this._imgArrow.setFlippedX(true);
        this._imgArrow.setFlippedY(true);

    },


    playCCSAnimOpen: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimOpen();
    
        let _nodeCalloutAction = cc.sequence(
            cc.spawn(
                cc.scaleTo(20 / (90 * speed), 1, 1).easing(cc.easeBackOut()),
                cc.fadeTo(20 / (90 * speed), 255)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._nodeCallout.setScale(0.0001, 0.0001);
                this._nodeCallout.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _nodeCalloutAction = _nodeCalloutAction.repeatForever();
        } else _nodeCalloutAction = cc.sequence(
            cc.delayTime(delay),
            _nodeCalloutAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._nodeCallout.runAction(_nodeCalloutAction);
    },

    resetCCSAnimOpen: function () {
        this._nodeCallout.stopAllActions();
        this._nodeCallout.setScale(0.0001, 0.0001);
        this._nodeCallout.setOpacity(0);
    },

    playCCSAnimClose: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimClose();
    
        let _nodeCalloutAction = cc.sequence(
            cc.spawn(
                cc.scaleTo(20 / (90 * speed), 0.0001, 0.0001).easing(cc.easeBackIn()),
                cc.fadeTo(20 / (90 * speed), 0)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._nodeCallout.setScale(1, 1);
                this._nodeCallout.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _nodeCalloutAction = _nodeCalloutAction.repeatForever();
        } else _nodeCalloutAction = cc.sequence(
            cc.delayTime(delay),
            _nodeCalloutAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._nodeCallout.runAction(_nodeCalloutAction);
    },

    resetCCSAnimClose: function () {
        this._nodeCallout.stopAllActions();
        this._nodeCallout.setScale(1, 1);
        this._nodeCallout.setOpacity(255);
    },

    playCCSAnimBotRight: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimBotRight();
    
    
    
    
    },

    resetCCSAnimBotRight: function () {
        this._imgCallout.stopAllActions();
        this._imgCallout.setScale(1, 1);
    
        this._nodeDirection.stopAllActions();
        this._nodeDirection.setScale(1, 1);
    },

    playCCSAnimBotLeft: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimBotLeft();
    
    
    
    
    },

    resetCCSAnimBotLeft: function () {
        this._imgCallout.stopAllActions();
        this._imgCallout.setScale(-1, 1);
    
        this._nodeDirection.stopAllActions();
        this._nodeDirection.setScale(-1, 1);
    },

    playCCSAnimTopRight: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimTopRight();
    
    
    
    
    },

    resetCCSAnimTopRight: function () {
        this._imgCallout.stopAllActions();
        this._imgCallout.setScale(1, -1);
    
        this._nodeDirection.stopAllActions();
        this._nodeDirection.setScale(1, -1);
    },

    playCCSAnimTopLeft: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimTopLeft();
    
    
    
    
    },

    resetCCSAnimTopLeft: function () {
        this._imgCallout.stopAllActions();
        this._imgCallout.setScale(-1, -1);
    
        this._nodeDirection.stopAllActions();
        this._nodeDirection.setScale(-1, -1);
    },

    playCCSAnimLayoutWithoutDuration: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimLayoutWithoutDuration();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    },

    resetCCSAnimLayoutWithoutDuration: function () {
        this._imgIcon.stopAllActions();
        this._imgIcon.setPosition(38.192, 144);
    
        this._txtName.stopAllActions();
        this._txtName.setPosition(152.7432, 144);
    
        this._txtDescription.stopAllActions();
        this._txtDescription.setPosition(124.9672, 71);
    
        this._txtNote.stopAllActions();
        this._txtNote.setPosition(124, 30);
    
        this._imgBackgroundItemDuration.stopAllActions();
        this._imgBackgroundItemDuration.setPosition(121.9168, 25);
    
        this._layoutContent.stopAllActions();
        this._layoutContent.setPosition(102.6, -101.18);
    
        this._nodeCallout.stopAllActions();
        this._nodeCallout.setScale(1, 1);
        this._nodeCallout.setOpacity(255);
    },

    playCCSAnimLayoutWithDuration: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimLayoutWithDuration();
    
    
    
    
    
    
    
    
    
    
    },

    resetCCSAnimLayoutWithDuration: function () {
        this._imgIcon.stopAllActions();
        this._imgIcon.setPosition(38.192, 180);
    
        this._txtName.stopAllActions();
        this._txtName.setPosition(152.7432, 180);
    
        this._txtDescription.stopAllActions();
        this._txtDescription.setPosition(124.9672, 107);
    
        this._txtNote.stopAllActions();
        this._txtNote.setPosition(124, 66);
    
        this._layoutContent.stopAllActions();
        this._layoutContent.setPosition(102.6, -119.18);
    }
});

/**
 * Create ItemInfoBubbleWidget
 * @returns {_ccs.ItemInfoBubbleWidget}
 */
_ccs.ItemInfoBubbleWidget.create = function () {
    return new _ccs.ItemInfoBubbleWidget();
};
