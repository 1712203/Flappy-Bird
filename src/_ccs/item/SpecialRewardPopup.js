/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.SpecialRewardPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.SpecialRewardPopup = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {Glow} */
    _glowPopup: null,
    /** @type {cc.Sprite} */
    _popupShadow01: null,
    /** @type {cc.Sprite} */
    _popupShadow02: null,
    /** @type {cc.Sprite} */
    _popupShadow03: null,
    /** @type {cc.Sprite} */
    _popup: null,
    /** @type {ccui.ImageView} */
    _header: null,
    /** @type {Glow} */
    _glowRewards: null,
    /** @type {SpotLight} */
    _spot: null,
    /** @type {ck.GridViewVertical} */
    _gridRewards: null,
    /** @type {ccui.ImageView} */
    _imgClaim: null,
    /** @type {ck.Text} */
    _txtClaim: null,
    /** @type {Blink} */
    _blink01: null,
    /** @type {Blink} */
    _blink02: null,
    /** @type {ShareImageRewardWidget} */
    _nodeShareReward: null,


    /**
     * _ccs.SpecialRewardPopup constructor
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
        this._root.setPosition(0.002, 0.0003);
        this._root.setOpacity(0);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        this._root.setContentSize(cc.size(535.2185, 699.6665));

        ///// # _glowPopup
        this._glowPopup = new Glow();
        this._glowPopup.setName("_glowPopup");
        this._root.addChild(this._glowPopup);
        this._glowPopup.setCascadeOpacityEnabled(true);
        this._glowPopup.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._glowPopup, 0.5, 0.44);
        this._glowPopup.setScale(1.2, -1.2);
        this._glowPopup.setOpacity(178);
        let _glowPopupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._glowPopup);
        _glowPopupLayoutComponent.setPositionPercentXEnabled(true);
        _glowPopupLayoutComponent.setPositionPercentX(0.5);
        _glowPopupLayoutComponent.setPositionPercentYEnabled(true);
        _glowPopupLayoutComponent.setPositionPercentY(0.44);

        ///// # _popupShadow01
        this._popupShadow01 = new cc.Sprite();
        this._popupShadow01.setName("_popupShadow01");
        this._root.addChild(this._popupShadow01);
        this._popupShadow01.setCascadeOpacityEnabled(true);
        this._popupShadow01.setCascadeColorEnabled(true);
        this._popupShadow01.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._popupShadow01, 0.5, 0.5);
        this._popupShadow01.setScale(0.6, 0.6);
        this._popupShadow01.setRotation(-200);
        this._popupShadow01.setOpacity(0);
        let _popupShadow01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._popupShadow01);
        _popupShadow01LayoutComponent.setPositionPercentXEnabled(true);
        _popupShadow01LayoutComponent.setPositionPercentX(0.5);
        _popupShadow01LayoutComponent.setPositionPercentYEnabled(true);
        _popupShadow01LayoutComponent.setPositionPercentY(0.5);
        let sf = cc.spriteFrameCache.getSpriteFrame("basics/popup/PopupReward_01.png"); if (sf) this._popupShadow01.setSpriteFrame(sf);
        let _popupShadow01BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _popupShadow01BlendFunc.src = 1;
        _popupShadow01BlendFunc.dst = 771;
        this._popupShadow01.setBlendFunc(_popupShadow01BlendFunc);

        ///// # _popupShadow02
        this._popupShadow02 = new cc.Sprite();
        this._popupShadow02.setName("_popupShadow02");
        this._root.addChild(this._popupShadow02);
        this._popupShadow02.setCascadeOpacityEnabled(true);
        this._popupShadow02.setCascadeColorEnabled(true);
        this._popupShadow02.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._popupShadow02, 0.5, 0.5);
        this._popupShadow02.setScale(0.6, 0.6);
        this._popupShadow02.setRotation(-200);
        this._popupShadow02.setOpacity(0);
        let _popupShadow02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._popupShadow02);
        _popupShadow02LayoutComponent.setPositionPercentXEnabled(true);
        _popupShadow02LayoutComponent.setPositionPercentX(0.5);
        _popupShadow02LayoutComponent.setPositionPercentYEnabled(true);
        _popupShadow02LayoutComponent.setPositionPercentY(0.5);
        let sf = cc.spriteFrameCache.getSpriteFrame("basics/popup/PopupReward_01.png"); if (sf) this._popupShadow02.setSpriteFrame(sf);
        let _popupShadow02BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _popupShadow02BlendFunc.src = 1;
        _popupShadow02BlendFunc.dst = 771;
        this._popupShadow02.setBlendFunc(_popupShadow02BlendFunc);

        ///// # _popupShadow03
        this._popupShadow03 = new cc.Sprite();
        this._popupShadow03.setName("_popupShadow03");
        this._root.addChild(this._popupShadow03);
        this._popupShadow03.setCascadeOpacityEnabled(true);
        this._popupShadow03.setCascadeColorEnabled(true);
        this._popupShadow03.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._popupShadow03, 0.5, 0.5);
        this._popupShadow03.setScale(0.6, 0.6);
        this._popupShadow03.setRotation(-200);
        this._popupShadow03.setOpacity(0);
        let _popupShadow03LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._popupShadow03);
        _popupShadow03LayoutComponent.setPositionPercentXEnabled(true);
        _popupShadow03LayoutComponent.setPositionPercentX(0.5);
        _popupShadow03LayoutComponent.setPositionPercentYEnabled(true);
        _popupShadow03LayoutComponent.setPositionPercentY(0.5);
        let sf = cc.spriteFrameCache.getSpriteFrame("basics/popup/PopupReward_01.png"); if (sf) this._popupShadow03.setSpriteFrame(sf);
        let _popupShadow03BlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _popupShadow03BlendFunc.src = 1;
        _popupShadow03BlendFunc.dst = 771;
        this._popupShadow03.setBlendFunc(_popupShadow03BlendFunc);

        ///// # _popup
        this._popup = new cc.Sprite();
        this._popup.setName("_popup");
        this._root.addChild(this._popup);
        this._popup.setCascadeOpacityEnabled(true);
        this._popup.setCascadeColorEnabled(true);
        this._popup.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._popup, 0.5, 0.5);
        this._popup.setScale(0.6, 0.6);
        this._popup.setRotation(-200);
        this._popup.setOpacity(0);
        let _popupLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._popup);
        _popupLayoutComponent.setPositionPercentXEnabled(true);
        _popupLayoutComponent.setPositionPercentX(0.5);
        _popupLayoutComponent.setPositionPercentYEnabled(true);
        _popupLayoutComponent.setPositionPercentY(0.5);
        let sf = cc.spriteFrameCache.getSpriteFrame("basics/popup/PopupReward_01.png"); if (sf) this._popup.setSpriteFrame(sf);
        let _popupBlendFunc = cc.BlendFunc.ALPHA_PREMULTIPLIED;
        _popupBlendFunc.src = 1;
        _popupBlendFunc.dst = 771;
        this._popup.setBlendFunc(_popupBlendFunc);

        ///// # _header
        this._header = new ccui.ImageView();
        this._header.setName("_header");
        this._popup.addChild(this._header);
        this._header.setCascadeOpacityEnabled(true);
        this._header.setCascadeColorEnabled(true);
        this._header.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._header, 0.4844, 0.8013);
        this._header.setScale(0.8, 0.8);
        let _headerLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._header);
        this._header.loadTexture("texts/item/Congraz.png", 1);
        this._header.setTouchEnabled(false);

        ///// # _glowRewards
        this._glowRewards = new Glow();
        this._glowRewards.setName("_glowRewards");
        this._root.addChild(this._glowRewards);
        this._glowRewards.setCascadeOpacityEnabled(true);
        this._glowRewards.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._glowRewards, 0.5, 0.4407);
        this._glowRewards.setScale(0.8, 0.8);
        this._glowRewards.setOpacity(178);
        let _glowRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._glowRewards);
        _glowRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _glowRewardsLayoutComponent.setPositionPercentX(0.5);
        _glowRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _glowRewardsLayoutComponent.setPositionPercentY(0.4407);

        ///// # _spot
        this._spot = new SpotLight();
        this._spot.setName("_spot");
        this._root.addChild(this._spot);
        this._spot.setCascadeOpacityEnabled(true);
        this._spot.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._spot, 0.4864, -0.5753);
        this._spot.setScale(0.8, 0.8);
        this._spot.setOpacity(153);
        let _spotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._spot);
        _spotLayoutComponent.setPositionPercentXEnabled(true);
        _spotLayoutComponent.setPositionPercentX(0.4864);
        _spotLayoutComponent.setPositionPercentYEnabled(true);
        _spotLayoutComponent.setPositionPercentY(-0.5753);

        ///// # _gridRewards
        this._gridRewards = new ck.GridViewVertical();
        this._gridRewards.setName("_gridRewards");
        this._root.addChild(this._gridRewards);
        this._gridRewards.setCascadeOpacityEnabled(true);
        this._gridRewards.setCascadeColorEnabled(true);
        this._gridRewards.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._gridRewards, 0.5, 0.45);
        this._gridRewards.setScale(0.84, 0.84);
        let _gridRewardsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._gridRewards);
        _gridRewardsLayoutComponent.setPositionPercentXEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentX(0.5);
        _gridRewardsLayoutComponent.setPositionPercentYEnabled(true);
        _gridRewardsLayoutComponent.setPositionPercentY(0.45);

        ///// # _imgClaim
        this._imgClaim = new ccui.ImageView();
        this._imgClaim.setName("_imgClaim");
        this._root.addChild(this._imgClaim);
        this._imgClaim.setCascadeOpacityEnabled(true);
        this._imgClaim.setCascadeColorEnabled(true);
        this._imgClaim.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClaim, 0.5001, 0.127);
        let _imgClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClaim);
        _imgClaimLayoutComponent.setPositionPercentXEnabled(true);
        _imgClaimLayoutComponent.setPositionPercentX(0.5001);
        _imgClaimLayoutComponent.setPositionPercentYEnabled(true);
        _imgClaimLayoutComponent.setPositionPercentY(0.127);
        this._imgClaim.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgClaim.setUnifySizeEnabled(false);
        this._imgClaim.ignoreContentAdaptWithSize(false);
        this._imgClaim.setContentSize(cc.size(168.1729, 66.1262));
        this._imgClaim.setTouchEnabled(false);

        ///// # _txtClaim
        this._txtClaim = new ck.Text();
        this._txtClaim.setName("_txtClaim");
        this._imgClaim.addChild(this._txtClaim);
        this._txtClaim.setCascadeOpacityEnabled(true);
        this._txtClaim.setCascadeColorEnabled(true);
        this._txtClaim.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtClaim, 0.5, 0.52);
        let _txtClaimLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtClaim);
        _txtClaimLayoutComponent.setPositionPercentXEnabled(true);
        _txtClaimLayoutComponent.setPositionPercentX(0.5);
        _txtClaimLayoutComponent.setPositionPercentYEnabled(true);
        _txtClaimLayoutComponent.setPositionPercentY(0.52);
        this._txtClaim.setTouchEnabled(false);
        this._txtClaim.ignoreContentAdaptWithSize(true);
        this._txtClaim.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtClaim.setDefaultFontSize(40);
        this._txtClaim.setString(gm.localize.getText("TXT_CLAIM"));
        this._txtClaim.setTextHorizontalAlignment(1);
        this._txtClaim.setTextVerticalAlignment(1);
        this._txtClaim.enableOutline(cc.color(158, 82, 9, 255), 3);

        ///// # _blink01
        this._blink01 = new Blink();
        this._blink01.setName("_blink01");
        this._root.addChild(this._blink01);
        this._blink01.setCascadeOpacityEnabled(true);
        this._blink01.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._blink01, 0.7499, 0.2503);
        let _blink01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._blink01);

        ///// # _blink02
        this._blink02 = new Blink();
        this._blink02.setName("_blink02");
        this._root.addChild(this._blink02);
        this._blink02.setCascadeOpacityEnabled(true);
        this._blink02.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._blink02, 0.2512, 0.6935);
        let _blink02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._blink02);

        ///// # _nodeShareReward
        this._nodeShareReward = new ShareImageRewardWidget();
        this._nodeShareReward.setName("_nodeShareReward");
        this._root.addChild(this._nodeShareReward);
        this._nodeShareReward.setCascadeOpacityEnabled(true);
        this._nodeShareReward.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeShareReward, 0.5, -0.06);
        let _nodeShareRewardLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeShareReward);
        _nodeShareRewardLayoutComponent.setPositionPercentXEnabled(true);
        _nodeShareRewardLayoutComponent.setPositionPercentX(0.5);
        _nodeShareRewardLayoutComponent.setPositionPercentYEnabled(true);
        _nodeShareRewardLayoutComponent.setPositionPercentY(-0.06);

    },


    playCCSAnimShow: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimShow();
    
        let _popupShadow01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(10 / (30 * speed), 0.6, 0.6),
                    cc.scaleTo(7 / (30 * speed), 0.87, 0.87),
                    cc.scaleTo(15 / (30 * speed), 0.87, 0.87)
                ),
                cc.sequence(
                    cc.rotateBy(10 / (30 * speed), 0, 0),
                    cc.rotateBy(7 / (30 * speed), -200, -200),
                    cc.rotateBy(3 / (30 * speed), 70, 70),
                    cc.rotateBy(3 / (30 * speed), 0, 0),
                    cc.rotateBy(3 / (30 * speed), -50, -50),
                    cc.rotateBy(3 / (30 * speed), 15, 15),
                    cc.rotateBy(3 / (30 * speed), 5, 5)
                ),
                cc.sequence(
                    cc.fadeTo(9 / (30 * speed), 0),
                    cc.fadeTo(2 / (30 * speed), 51),
                    cc.fadeTo(21 / (30 * speed), 51)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._popupShadow01.setScale(0.6, 0.6);
                this._popupShadow01.setRotation(-200);
                this._popupShadow01.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _popupShadow01Action = _popupShadow01Action.repeatForever();
        } else _popupShadow01Action = cc.sequence(
            cc.delayTime(delay),
            _popupShadow01Action.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._popupShadow01.runAction(_popupShadow01Action);
    
        let _popupShadow02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(9 / (30 * speed), 0.6, 0.6),
                    cc.scaleTo(7 / (30 * speed), 0.87, 0.87),
                    cc.scaleTo(16 / (30 * speed), 0.87, 0.87)
                ),
                cc.sequence(
                    cc.rotateBy(9 / (30 * speed), 0, 0),
                    cc.rotateBy(7 / (30 * speed), -200, -200),
                    cc.rotateBy(3 / (30 * speed), 70, 70),
                    cc.rotateBy(3 / (30 * speed), 0, 0),
                    cc.rotateBy(3 / (30 * speed), -50, -50),
                    cc.rotateBy(3 / (30 * speed), 15, 15),
                    cc.rotateBy(3 / (30 * speed), 5, 5),
                    cc.rotateBy(1 / (30 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(8 / (30 * speed), 0),
                    cc.fadeTo(2 / (30 * speed), 51),
                    cc.fadeTo(22 / (30 * speed), 51)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._popupShadow02.setScale(0.6, 0.6);
                this._popupShadow02.setRotation(-200);
                this._popupShadow02.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _popupShadow02Action = _popupShadow02Action.repeatForever();
        } else _popupShadow02Action = cc.sequence(
            cc.delayTime(delay),
            _popupShadow02Action.repeat(repeat)
        )
        
        this._popupShadow02.runAction(_popupShadow02Action);
    
        let _popupShadow03Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(8 / (30 * speed), 0.6, 0.6),
                    cc.scaleTo(7 / (30 * speed), 0.87, 0.87),
                    cc.scaleTo(17 / (30 * speed), 0.87, 0.87)
                ),
                cc.sequence(
                    cc.rotateBy(8 / (30 * speed), 0, 0),
                    cc.rotateBy(7 / (30 * speed), -200, -200),
                    cc.rotateBy(3 / (30 * speed), 70, 70),
                    cc.rotateBy(3 / (30 * speed), 0, 0),
                    cc.rotateBy(3 / (30 * speed), -50, -50),
                    cc.rotateBy(3 / (30 * speed), 15, 15),
                    cc.rotateBy(4 / (30 * speed), 5, 5),
                    cc.rotateBy(1 / (30 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(7 / (30 * speed), 0),
                    cc.fadeTo(2 / (30 * speed), 127),
                    cc.fadeTo(23 / (30 * speed), 127)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._popupShadow03.setScale(0.6, 0.6);
                this._popupShadow03.setRotation(-200);
                this._popupShadow03.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _popupShadow03Action = _popupShadow03Action.repeatForever();
        } else _popupShadow03Action = cc.sequence(
            cc.delayTime(delay),
            _popupShadow03Action.repeat(repeat)
        )
        
        this._popupShadow03.runAction(_popupShadow03Action);
    
        let _popupAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(7 / (30 * speed), 0.6, 0.6),
                    cc.scaleTo(7 / (30 * speed), 0.87, 0.87),
                    cc.scaleTo(18 / (30 * speed), 0.87, 0.87)
                ),
                cc.sequence(
                    cc.rotateBy(7 / (30 * speed), 0, 0),
                    cc.rotateBy(7 / (30 * speed), -200, -200),
                    cc.rotateBy(3 / (30 * speed), 70, 70),
                    cc.rotateBy(3 / (30 * speed), 0, 0),
                    cc.rotateBy(3 / (30 * speed), -50, -50),
                    cc.rotateBy(3 / (30 * speed), 15, 15),
                    cc.rotateBy(4 / (30 * speed), 5, 5),
                    cc.rotateBy(2 / (30 * speed), 0, 0)
                ),
                cc.sequence(
                    cc.fadeTo(6 / (30 * speed), 0),
                    cc.fadeTo(2 / (30 * speed), 255),
                    cc.fadeTo(24 / (30 * speed), 255)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._popup.setScale(0.6, 0.6);
                this._popup.setRotation(-200);
                this._popup.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _popupAction = _popupAction.repeatForever();
        } else _popupAction = cc.sequence(
            cc.delayTime(delay),
            _popupAction.repeat(repeat)
        )
        
        this._popup.runAction(_popupAction);
    
        let _rootAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(5 / (30 * speed), 255),
                    cc.delayTime(27 / (30 * speed))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._root.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _rootAction = _rootAction.repeatForever();
        } else _rootAction = cc.sequence(
            cc.delayTime(delay),
            _rootAction.repeat(repeat)
        )
        
        this._root.runAction(_rootAction);
    },

    resetCCSAnimShow: function () {
        this._popupShadow01.stopAllActions();
        this._popupShadow01.setScale(0.6, 0.6);
        this._popupShadow01.setRotation(-200);
        this._popupShadow01.setOpacity(0);
    
        this._popupShadow02.stopAllActions();
        this._popupShadow02.setScale(0.6, 0.6);
        this._popupShadow02.setRotation(-200);
        this._popupShadow02.setOpacity(0);
    
        this._popupShadow03.stopAllActions();
        this._popupShadow03.setScale(0.6, 0.6);
        this._popupShadow03.setRotation(-200);
        this._popupShadow03.setOpacity(0);
    
        this._popup.stopAllActions();
        this._popup.setScale(0.6, 0.6);
        this._popup.setRotation(-200);
        this._popup.setOpacity(0);
    
        this._root.stopAllActions();
        this._root.setOpacity(0);
    },

    playCCSAnimHide: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimHide();
    
        let _rootAction = cc.sequence(
            cc.spawn(
                cc.fadeTo(10 / (30 * speed), 0)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._root.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _rootAction = _rootAction.repeatForever();
        } else _rootAction = cc.sequence(
            cc.delayTime(delay),
            _rootAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._root.runAction(_rootAction);
    },

    resetCCSAnimHide: function () {
        this._root.stopAllActions();
        this._root.setOpacity(255);
    }
});

/**
 * Create SpecialRewardPopup
 * @returns {_ccs.SpecialRewardPopup}
 */
_ccs.SpecialRewardPopup.create = function () {
    return new _ccs.SpecialRewardPopup();
};
