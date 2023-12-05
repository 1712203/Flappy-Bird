/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.GourdCrabNPCWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.GourdCrabNPCWidget = ccui.Widget.extend({

    /** @type {ccui.ImageView} */
    _imgDiskShadow: null,
    /** @type {ccui.ImageView} */
    _imgDisk: null,
    /** @type {ccui.ImageView} */
    _imgResult00: null,
    /** @type {ccui.ImageView} */
    _imgResult01: null,
    /** @type {ccui.ImageView} */
    _imgResult02: null,
    /** @type {ccui.ImageView} */
    _imgBoxShadow: null,
    /** @type {ccui.ImageView} */
    _imgBox: null,
    /** @type {ccui.Layout} */
    _layoutNPC: null,
    /** @type {ccui.Layout} */
    _layoutSpineNPC: null,
    /** @type {cc.Node} */
    _nodeTextShake: null,
    /** @type {ccui.ImageView} */
    _imgTextShake01: null,
    /** @type {ccui.ImageView} */
    _imgTextShake00: null,


    /**
     * _ccs.GourdCrabNPCWidget constructor
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

        ///// # _imgDiskShadow
        this._imgDiskShadow = new ccui.ImageView();
        this._imgDiskShadow.setName("_imgDiskShadow");
        this.addChild(this._imgDiskShadow);
        this._imgDiskShadow.setCascadeOpacityEnabled(true);
        this._imgDiskShadow.setCascadeColorEnabled(true);
        this._imgDiskShadow.setAnchorPoint(cc.p(0.5, 0.6));
        this._imgDiskShadow.setPosition(0, 14);
        this._imgDiskShadow.setOpacity(74);
        this._imgDiskShadow.setColor(cc.color(0, 0, 0, 255));
        let _imgDiskShadowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDiskShadow);
        this._imgDiskShadow.loadTexture("gourd-crab/Disk.png", 1);
        this._imgDiskShadow.setUnifySizeEnabled(false);
        this._imgDiskShadow.ignoreContentAdaptWithSize(false);
        this._imgDiskShadow.setContentSize(cc.size(348, 288));
        this._imgDiskShadow.setTouchEnabled(false);

        ///// # _imgDisk
        this._imgDisk = new ccui.ImageView();
        this._imgDisk.setName("_imgDisk");
        this.addChild(this._imgDisk);
        this._imgDisk.setCascadeOpacityEnabled(true);
        this._imgDisk.setCascadeColorEnabled(true);
        this._imgDisk.setAnchorPoint(cc.p(0.4962, 0.6));
        this._imgDisk.setPosition(0, 24);
        let _imgDiskLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDisk);
        this._imgDisk.loadTexture("gourd-crab/Disk.png", 1);
        this._imgDisk.setUnifySizeEnabled(false);
        this._imgDisk.ignoreContentAdaptWithSize(false);
        this._imgDisk.setContentSize(cc.size(452, 305));
        this._imgDisk.setTouchEnabled(false);

        ///// # _imgResult00
        this._imgResult00 = new ccui.ImageView();
        this._imgResult00.setName("_imgResult00");
        this._imgDisk.addChild(this._imgResult00);
        this._imgResult00.setCascadeOpacityEnabled(true);
        this._imgResult00.setCascadeColorEnabled(true);
        this._imgResult00.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgResult00, 0.3831, 0.6657);
        this._imgResult00.setScale(0.8, 0.8);
        let _imgResult00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgResult00);
        _imgResult00LayoutComponent.setHorizontalEdge(ccui.LayoutComponent.horizontalEdge.CENTER);
        _imgResult00LayoutComponent.setLeftMargin(127.1612);
        _imgResult00LayoutComponent.setRightMargin(232.8388);
        _imgResult00LayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.CENTER);
        _imgResult00LayoutComponent.setTopMargin(51.4615);
        _imgResult00LayoutComponent.setBottomMargin(152.5385);
        this._imgResult00.loadTexture("gourd-crab/Dice00.png", 1);
        this._imgResult00.setUnifySizeEnabled(false);
        this._imgResult00.ignoreContentAdaptWithSize(false);
        this._imgResult00.setContentSize(cc.size(92, 101));
        this._imgResult00.setTouchEnabled(false);

        ///// # _imgResult01
        this._imgResult01 = new ccui.ImageView();
        this._imgResult01.setName("_imgResult01");
        this._imgDisk.addChild(this._imgResult01);
        this._imgResult01.setCascadeOpacityEnabled(true);
        this._imgResult01.setCascadeColorEnabled(true);
        this._imgResult01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgResult01, 0.5915, 0.6479);
        this._imgResult01.setScale(0.8, 0.8);
        let _imgResult01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgResult01);
        _imgResult01LayoutComponent.setHorizontalEdge(ccui.LayoutComponent.horizontalEdge.CENTER);
        _imgResult01LayoutComponent.setLeftMargin(220.358);
        _imgResult01LayoutComponent.setRightMargin(137.642);
        _imgResult01LayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.CENTER);
        _imgResult01LayoutComponent.setTopMargin(55.3905);
        _imgResult01LayoutComponent.setBottomMargin(145.6095);
        this._imgResult01.loadTexture("gourd-crab/Dice10.png", 1);
        this._imgResult01.setUnifySizeEnabled(false);
        this._imgResult01.ignoreContentAdaptWithSize(false);
        this._imgResult01.setContentSize(cc.size(94, 104));
        this._imgResult01.setTouchEnabled(false);

        ///// # _imgResult02
        this._imgResult02 = new ccui.ImageView();
        this._imgResult02.setName("_imgResult02");
        this._imgDisk.addChild(this._imgResult02);
        this._imgResult02.setCascadeOpacityEnabled(true);
        this._imgResult02.setCascadeColorEnabled(true);
        this._imgResult02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgResult02, 0.478, 0.4795);
        this._imgResult02.setScale(0.8, 0.8);
        let _imgResult02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgResult02);
        _imgResult02LayoutComponent.setHorizontalEdge(ccui.LayoutComponent.horizontalEdge.CENTER);
        _imgResult02LayoutComponent.setLeftMargin(173.556);
        _imgResult02LayoutComponent.setRightMargin(193.444);
        _imgResult02LayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.CENTER);
        _imgResult02LayoutComponent.setTopMargin(113.2525);
        _imgResult02LayoutComponent.setBottomMargin(100.7475);
        this._imgResult02.loadTexture("gourd-crab/Dice20.png", 1);
        this._imgResult02.setUnifySizeEnabled(false);
        this._imgResult02.ignoreContentAdaptWithSize(false);
        this._imgResult02.setContentSize(cc.size(85, 91));
        this._imgResult02.setTouchEnabled(false);

        ///// # _imgBoxShadow
        this._imgBoxShadow = new ccui.ImageView();
        this._imgBoxShadow.setName("_imgBoxShadow");
        this.addChild(this._imgBoxShadow);
        this._imgBoxShadow.setCascadeOpacityEnabled(true);
        this._imgBoxShadow.setCascadeColorEnabled(true);
        this._imgBoxShadow.setAnchorPoint(cc.p(0.5, 0));
        this._imgBoxShadow.setPosition(0, -83);
        this._imgBoxShadow.setOpacity(63);
        this._imgBoxShadow.setColor(cc.color(0, 0, 0, 255));
        let _imgBoxShadowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBoxShadow);
        this._imgBoxShadow.loadTexture("gourd-crab/Box.png", 1);
        this._imgBoxShadow.setUnifySizeEnabled(false);
        this._imgBoxShadow.ignoreContentAdaptWithSize(false);
        this._imgBoxShadow.setContentSize(cc.size(237, 206));
        this._imgBoxShadow.setTouchEnabled(false);

        ///// # _imgBox
        this._imgBox = new ccui.ImageView();
        this._imgBox.setName("_imgBox");
        this.addChild(this._imgBox);
        this._imgBox.setCascadeOpacityEnabled(true);
        this._imgBox.setCascadeColorEnabled(true);
        this._imgBox.setAnchorPoint(cc.p(0.5, 0));
        this._imgBox.setPosition(0, -73);
        let _imgBoxLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBox);
        this._imgBox.loadTexture("gourd-crab/Box.png", 1);
        this._imgBox.setUnifySizeEnabled(false);
        this._imgBox.ignoreContentAdaptWithSize(false);
        this._imgBox.setContentSize(cc.size(237, 206));
        this._imgBox.setTouchEnabled(false);

        ///// # _layoutNPC
        this._layoutNPC = new ccui.Layout();
        this._layoutNPC.setName("_layoutNPC");
        this.addChild(this._layoutNPC);
        this._layoutNPC.setCascadeOpacityEnabled(true);
        this._layoutNPC.setCascadeColorEnabled(true);
        this._layoutNPC.setAnchorPoint(cc.p(0.5, 0));
        this._layoutNPC.setPosition(0, -220);
        let _layoutNPCLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutNPC);
        this._layoutNPC.setTouchEnabled(true);
        this._layoutNPC.setUnifySizeEnabled(false);
        this._layoutNPC.ignoreContentAdaptWithSize(false);
        this._layoutNPC.setContentSize(cc.size(351, 362));

        ///// # _layoutSpineNPC
        this._layoutSpineNPC = new ccui.Layout();
        this._layoutSpineNPC.setName("_layoutSpineNPC");
        this._layoutNPC.addChild(this._layoutSpineNPC);
        this._layoutSpineNPC.setCascadeOpacityEnabled(true);
        this._layoutSpineNPC.setCascadeColorEnabled(true);
        this._layoutSpineNPC.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._layoutSpineNPC, 0.5, 0);
        let _layoutSpineNPCLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutSpineNPC);
        this._layoutSpineNPC.setTouchEnabled(true);
        this._layoutSpineNPC.setUnifySizeEnabled(false);
        this._layoutSpineNPC.ignoreContentAdaptWithSize(false);
        this._layoutSpineNPC.setContentSize(cc.size(351, 362));

        ///// # _nodeTextShake
        this._nodeTextShake = new cc.Node();
        this._nodeTextShake.setName("_nodeTextShake");
        this._layoutNPC.addChild(this._nodeTextShake);
        this._nodeTextShake.setCascadeOpacityEnabled(true);
        this._nodeTextShake.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeTextShake, 1.2821, 0.4972);
        let _nodeTextShakeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeTextShake);

        ///// # _imgTextShake01
        this._imgTextShake01 = new ccui.ImageView();
        this._imgTextShake01.setName("_imgTextShake01");
        this._nodeTextShake.addChild(this._imgTextShake01);
        this._imgTextShake01.setCascadeOpacityEnabled(true);
        this._imgTextShake01.setCascadeColorEnabled(true);
        this._imgTextShake01.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgTextShake01.setPosition(-130.4518, 61.1277);
        this._imgTextShake01.setRotationX(25.7385);
        this._imgTextShake01.setRotationY(25.7379);
        this._imgTextShake01.setOpacity(0);
        let _imgTextShake01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTextShake01);
        this._imgTextShake01.loadTexture("texts/gourd-crab/Shake.png", 1);
        this._imgTextShake01.setTouchEnabled(false);

        ///// # _imgTextShake00
        this._imgTextShake00 = new ccui.ImageView();
        this._imgTextShake00.setName("_imgTextShake00");
        this._nodeTextShake.addChild(this._imgTextShake00);
        this._imgTextShake00.setCascadeOpacityEnabled(true);
        this._imgTextShake00.setCascadeColorEnabled(true);
        this._imgTextShake00.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgTextShake00.setPosition(-130.45, 61.1277);
        this._imgTextShake00.setRotationX(25.7385);
        this._imgTextShake00.setRotationY(25.7379);
        this._imgTextShake00.setOpacity(0);
        let _imgTextShake00LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgTextShake00);
        this._imgTextShake00.loadTexture("texts/gourd-crab/Shake.png", 1);
        this._imgTextShake00.setTouchEnabled(false);

    },


    playCCSAnimOpen: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimOpen();
    
        let _imgDiskAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(16 / (60 * speed), 0, 24),
                    cc.moveTo(10 / (60 * speed), 0, 19),
                    cc.moveTo(4 / (60 * speed), 0, 24),
                    cc.moveTo(30 / (60 * speed), 0, 24)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgDisk.setPosition(0, 24);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgDiskAction = _imgDiskAction.repeatForever();
        } else _imgDiskAction = cc.sequence(
            cc.delayTime(delay),
            _imgDiskAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgDisk.runAction(_imgDiskAction);
    
        let _imgBoxShadowAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(32 / (60 * speed), 0, -83),
                    cc.moveTo(28 / (60 * speed), -405, 535).easing(cc.easeQuinticActionInOut())
                ),
                cc.sequence(
                    cc.scaleTo(32 / (60 * speed), 1, 1),
                    cc.scaleTo(6 / (60 * speed), 0.8, 0.7265),
                    cc.scaleTo(6 / (60 * speed), 0.9375, 0.8135),
                    cc.scaleTo(8 / (60 * speed), 0.93, 0.79),
                    cc.scaleTo(8 / (60 * speed), 0.9374, 0.8121)
                ),
                cc.sequence(
                    cc.fadeTo(38 / (60 * speed), 63),
                    cc.fadeTo(1 / (60 * speed), 0),
                    cc.fadeTo(21 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgBoxShadow.setPosition(0, -83);
                this._imgBoxShadow.setScale(1, 1);
                this._imgBoxShadow.setOpacity(63);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgBoxShadowAction = _imgBoxShadowAction.repeatForever();
        } else _imgBoxShadowAction = cc.sequence(
            cc.delayTime(delay),
            _imgBoxShadowAction.repeat(repeat)
        )
        
        this._imgBoxShadow.runAction(_imgBoxShadowAction);
    
        let _imgBoxAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(16 / (60 * speed), 0, -73),
                    cc.moveTo(10 / (60 * speed), 0, -72),
                    cc.moveTo(4 / (60 * speed), 0, -73),
                    cc.moveTo(2 / (60 * speed), 0, -73),
                    cc.moveTo(28 / (60 * speed), -405, 535).easing(cc.easeQuinticActionInOut())
                ),
                cc.sequence(
                    cc.scaleTo(16 / (60 * speed), 1, 1),
                    cc.scaleTo(10 / (60 * speed), 1.05, 0.95),
                    cc.scaleTo(6 / (60 * speed), 1, 1),
                    cc.scaleTo(20 / (60 * speed), 0.93, 0.79).easing(cc.easeQuinticActionInOut()),
                    cc.scaleTo(8 / (60 * speed), 0.93, 0.79).easing(cc.easeQuinticActionInOut())
                ),
                cc.sequence(
                    cc.rotateBy(38 / (60 * speed), 0, 0),
                    cc.rotateBy(22 / (60 * speed), -28, -28).easing(cc.easeCubicActionOut())
                ),
                cc.sequence(
                    cc.fadeTo(40 / (60 * speed), 255),
                    cc.fadeTo(12 / (60 * speed), 0),
                    cc.fadeTo(8 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgBox.setPosition(0, -73);
                this._imgBox.setScale(1, 1);
                this._imgBox.setRotation(0);
                this._imgBox.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgBoxAction = _imgBoxAction.repeatForever();
        } else _imgBoxAction = cc.sequence(
            cc.delayTime(delay),
            _imgBoxAction.repeat(repeat)
        )
        
        this._imgBox.runAction(_imgBoxAction);
    },

    resetCCSAnimOpen: function () {
        this._imgDisk.stopAllActions();
        this._imgDisk.setPosition(0, 24);
    
        this._imgBoxShadow.stopAllActions();
        this._imgBoxShadow.setPosition(0, -83);
        this._imgBoxShadow.setScale(1, 1);
        this._imgBoxShadow.setOpacity(63);
    
        this._imgBox.stopAllActions();
        this._imgBox.setPosition(0, -73);
        this._imgBox.setScale(1, 1);
        this._imgBox.setRotation(0);
        this._imgBox.setOpacity(255);
    },

    playCCSAnimClose: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimClose();
    
        let _imgDiskAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(30 / (60 * speed), 0, 24),
                    cc.moveTo(4 / (60 * speed), 0, 19),
                    cc.moveTo(10 / (60 * speed), 0, 24),
                    cc.moveTo(16 / (60 * speed), 0, 24)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgDisk.setPosition(0, 24);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgDiskAction = _imgDiskAction.repeatForever();
        } else _imgDiskAction = cc.sequence(
            cc.delayTime(delay),
            _imgDiskAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgDisk.runAction(_imgDiskAction);
    
        let _imgBoxShadowAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(28 / (60 * speed), 0, -83).easing(cc.easeQuinticActionInOut()),
                    cc.moveTo(32 / (60 * speed), 0, -83)
                ),
                cc.sequence(
                    cc.scaleTo(8 / (60 * speed), 0.93, 0.79),
                    cc.scaleTo(8 / (60 * speed), 0.9375, 0.8135),
                    cc.scaleTo(5 / (60 * speed), 0.8, 0.7265),
                    cc.scaleTo(7 / (60 * speed), 1, 1),
                    cc.scaleTo(32 / (60 * speed), 1, 1)
                ),
                cc.sequence(
                    cc.fadeTo(21 / (60 * speed), 0),
                    cc.fadeTo(1 / (60 * speed), 63),
                    cc.fadeTo(38 / (60 * speed), 63)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgBoxShadow.setPosition(-405, 535);
                this._imgBoxShadow.setScale(0.9374, 0.8121);
                this._imgBoxShadow.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgBoxShadowAction = _imgBoxShadowAction.repeatForever();
        } else _imgBoxShadowAction = cc.sequence(
            cc.delayTime(delay),
            _imgBoxShadowAction.repeat(repeat)
        )
        
        this._imgBoxShadow.runAction(_imgBoxShadowAction);
    
        let _imgBoxAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(28 / (60 * speed), 0, -73).easing(cc.easeQuinticActionInOut()),
                    cc.moveTo(2 / (60 * speed), 0, -73),
                    cc.moveTo(4 / (60 * speed), 0, -72),
                    cc.moveTo(10 / (60 * speed), 0, -73),
                    cc.moveTo(16 / (60 * speed), 0, -73)
                ),
                cc.sequence(
                    cc.scaleTo(8 / (60 * speed), 0.93, 0.79).easing(cc.easeQuinticActionInOut()),
                    cc.scaleTo(20 / (60 * speed), 1, 1).easing(cc.easeQuinticActionInOut()),
                    cc.scaleTo(6 / (60 * speed), 1.05, 0.95),
                    cc.scaleTo(10 / (60 * speed), 1, 1),
                    cc.scaleTo(16 / (60 * speed), 1, 1)
                ),
                cc.sequence(
                    cc.rotateBy(22 / (60 * speed), 28, 28).easing(cc.easeCubicActionIn()),
                    cc.rotateBy(38 / (60 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(8 / (60 * speed), 0),
                    cc.fadeTo(12 / (60 * speed), 255),
                    cc.fadeTo(40 / (60 * speed), 255)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgBox.setPosition(-405, 535);
                this._imgBox.setScale(0.93, 0.79);
                this._imgBox.setRotation(-28);
                this._imgBox.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgBoxAction = _imgBoxAction.repeatForever();
        } else _imgBoxAction = cc.sequence(
            cc.delayTime(delay),
            _imgBoxAction.repeat(repeat)
        )
        
        this._imgBox.runAction(_imgBoxAction);
    },

    resetCCSAnimClose: function () {
        this._imgDisk.stopAllActions();
        this._imgDisk.setPosition(0, 24);
    
        this._imgBoxShadow.stopAllActions();
        this._imgBoxShadow.setPosition(-405, 535);
        this._imgBoxShadow.setScale(0.9374, 0.8121);
        this._imgBoxShadow.setOpacity(0);
    
        this._imgBox.stopAllActions();
        this._imgBox.setPosition(-405, 535);
        this._imgBox.setScale(0.93, 0.79);
        this._imgBox.setRotation(-28);
        this._imgBox.setOpacity(0);
    },

    playCCSAnimShake: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimShake();
    
        let _imgTextShake01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(70 / (60 * speed), -44.0266, 181.5037).easing(cc.easeSineInOut()),
                    cc.moveTo(20 / (60 * speed), -44.0266, 181.5037)
                ),
                cc.sequence(
                    cc.scaleTo(70 / (60 * speed), 1.2, 1.2),
                    cc.scaleTo(20 / (60 * speed), 1.2, 1.2)
                ),
                cc.sequence(
                    cc.rotateBy(70 / (60 * speed), -26.1098, -26.1103),
                    cc.rotateBy(20 / (60 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(50 / (60 * speed), 255),
                    cc.fadeTo(20 / (60 * speed), 0),
                    cc.fadeTo(20 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgTextShake01.setPosition(-130.4518, 61.1277);
                this._imgTextShake01.setScale(1, 1);
                this._imgTextShake01.setRotation(25.7385);
                this._imgTextShake01.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgTextShake01Action = _imgTextShake01Action.repeatForever();
        } else _imgTextShake01Action = cc.sequence(
            cc.delayTime(delay),
            _imgTextShake01Action.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgTextShake01.runAction(_imgTextShake01Action);
    
        let _imgTextShake00Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(20 / (60 * speed), -130.45, 61.1277),
                    cc.moveTo(20 / (60 * speed), -130.45, 61.1277).easing(cc.easeSineInOut()),
                    cc.moveTo(30 / (60 * speed), -78.596, 133.3533),
                    cc.moveTo(20 / (60 * speed), -44.0266, 181.5037)
                ),
                cc.sequence(
                    cc.scaleTo(20 / (60 * speed), 1, 1),
                    cc.scaleTo(20 / (60 * speed), 1, 1),
                    cc.scaleTo(30 / (60 * speed), 1.12, 1.12),
                    cc.scaleTo(20 / (60 * speed), 1.2, 1.2)
                ),
                cc.sequence(
                    cc.rotateBy(20 / (60 * speed), 0, 0),
                    cc.rotateBy(20 / (60 * speed), 0, 0),
                    cc.rotateBy(30 / (60 * speed), -15.665899999999999, -15.6662),
                    cc.rotateBy(20 / (60 * speed), -10.4439, -10.4441)
                ),
                cc.sequence(
                    cc.fadeTo(20 / (60 * speed), 0),
                    cc.fadeTo(20 / (60 * speed), 0),
                    cc.fadeTo(30 / (60 * speed), 255),
                    cc.fadeTo(20 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgTextShake00.setPosition(-130.45, 61.1277);
                this._imgTextShake00.setScale(1, 1);
                this._imgTextShake00.setRotation(25.7385);
                this._imgTextShake00.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgTextShake00Action = _imgTextShake00Action.repeatForever();
        } else _imgTextShake00Action = cc.sequence(
            cc.delayTime(delay),
            _imgTextShake00Action.repeat(repeat)
        )
        
        this._imgTextShake00.runAction(_imgTextShake00Action);
    },

    resetCCSAnimShake: function () {
        this._imgTextShake01.stopAllActions();
        this._imgTextShake01.setPosition(-130.4518, 61.1277);
        this._imgTextShake01.setScale(1, 1);
        this._imgTextShake01.setRotation(25.7385);
        this._imgTextShake01.setOpacity(0);
    
        this._imgTextShake00.stopAllActions();
        this._imgTextShake00.setPosition(-130.45, 61.1277);
        this._imgTextShake00.setScale(1, 1);
        this._imgTextShake00.setRotation(25.7385);
        this._imgTextShake00.setOpacity(0);
    }
});

/**
 * Create GourdCrabNPCWidget
 * @returns {_ccs.GourdCrabNPCWidget}
 */
_ccs.GourdCrabNPCWidget.create = function () {
    return new _ccs.GourdCrabNPCWidget();
};
