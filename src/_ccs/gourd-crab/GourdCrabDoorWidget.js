/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.GourdCrabDoorWidget
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.GourdCrabDoorWidget = ccui.Widget.extend({

    /** @type {ccui.Layout} */
    _layoutRoot: null,
    /** @type {ccui.ImageView} */
    _imgDoor: null,
    /** @type {ccui.Layout} */
    _layoutCoin: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundCoin: null,
    /** @type {ccui.ImageView} */
    _imgIconCoin: null,
    /** @type {ck.Text} */
    _txtAmountCoin: null,
    /** @type {ccui.Layout} */
    _layoutGem: null,
    /** @type {ccui.ImageView} */
    _imgBackgroundGem: null,
    /** @type {ccui.ImageView} */
    _imgIconGem: null,
    /** @type {ck.Text} */
    _txtAmountGem: null,
    /** @type {cc.Node} */
    _nodeEffect: null,
    /** @type {ccui.ImageView} */
    imageGlow: null,
    /** @type {ccui.ImageView} */
    imageGlowLight: null,
    /** @type {ccui.ImageView} */
    imageLightCircle: null,
    /** @type {cc.Node} */
    _nodeResultLight0: null,
    /** @type {ccui.ImageView} */
    _imgResultLight01: null,
    /** @type {ccui.ImageView} */
    _imgResultLight02: null,
    /** @type {cc.Node} */
    _nodeResultLight1: null,
    /** @type {ccui.ImageView} */
    _imgResultLight11: null,
    /** @type {ccui.ImageView} */
    _imgResultLight12: null,


    /**
     * _ccs.GourdCrabDoorWidget constructor
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
        this._layoutRoot.setContentSize(cc.size(109, 109));

        ///// # _imgDoor
        this._imgDoor = new ccui.ImageView();
        this._imgDoor.setName("_imgDoor");
        this._layoutRoot.addChild(this._imgDoor);
        this._imgDoor.setCascadeOpacityEnabled(true);
        this._imgDoor.setCascadeColorEnabled(true);
        this._imgDoor.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgDoor, 0.5, 0.5);
        let _imgDoorLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgDoor);
        this._imgDoor.loadTexture("gourd-crab/ButtonDoor00.png", 1);
        this._imgDoor.setUnifySizeEnabled(false);
        this._imgDoor.ignoreContentAdaptWithSize(false);
        this._imgDoor.setContentSize(cc.size(114, 114));
        this._imgDoor.setTouchEnabled(false);

        ///// # _layoutCoin
        this._layoutCoin = new ccui.Layout();
        this._layoutCoin.setName("_layoutCoin");
        this._layoutRoot.addChild(this._layoutCoin);
        this._layoutCoin.setCascadeOpacityEnabled(true);
        this._layoutCoin.setCascadeColorEnabled(true);
        this._layoutCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutCoin, 0.5, -0.0642);
        let _layoutCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutCoin);
        _layoutCoinLayoutComponent.setPositionPercentXEnabled(true);
        _layoutCoinLayoutComponent.setPositionPercentX(0.5);
        this._layoutCoin.setTouchEnabled(false);
        this._layoutCoin.setUnifySizeEnabled(false);
        this._layoutCoin.ignoreContentAdaptWithSize(false);
        this._layoutCoin.setContentSize(cc.size(105, 25));

        ///// # _imgBackgroundCoin
        this._imgBackgroundCoin = new ccui.ImageView();
        this._imgBackgroundCoin.setName("_imgBackgroundCoin");
        this._layoutCoin.addChild(this._imgBackgroundCoin);
        this._imgBackgroundCoin.setCascadeOpacityEnabled(true);
        this._imgBackgroundCoin.setCascadeColorEnabled(true);
        this._imgBackgroundCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundCoin, 0.5, 0.5);
        this._imgBackgroundCoin.setOpacity(102);
        this._imgBackgroundCoin.setColor(cc.color(0, 0, 0, 255));
        let _imgBackgroundCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundCoin);
        _imgBackgroundCoinLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundCoinLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundCoinLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundCoinLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundCoinLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundCoinLayoutComponent.setPercentWidth(1);
        _imgBackgroundCoinLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundCoinLayoutComponent.setPercentHeight(1);
        this._imgBackgroundCoin.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgBackgroundCoin.setUnifySizeEnabled(false);
        this._imgBackgroundCoin.ignoreContentAdaptWithSize(false);
        this._imgBackgroundCoin.setScale9Enabled(true);
        this._imgBackgroundCoin.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgBackgroundCoin, 1, 1);
        this._imgBackgroundCoin.setTouchEnabled(false);

        ///// # _imgIconCoin
        this._imgIconCoin = new ccui.ImageView();
        this._imgIconCoin.setName("_imgIconCoin");
        this._layoutCoin.addChild(this._imgIconCoin);
        this._imgIconCoin.setCascadeOpacityEnabled(true);
        this._imgIconCoin.setCascadeColorEnabled(true);
        this._imgIconCoin.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconCoin, 0.8286, 0.5);
        let _imgIconCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconCoin);
        _imgIconCoinLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconCoinLayoutComponent.setPositionPercentY(0.5);
        this._imgIconCoin.loadTexture("icons/color/coins/Coin.png", 1);
        this._imgIconCoin.setUnifySizeEnabled(false);
        this._imgIconCoin.ignoreContentAdaptWithSize(false);
        this._imgIconCoin.setContentSize(cc.size(25, 25));
        this._imgIconCoin.setTouchEnabled(false);

        ///// # _txtAmountCoin
        this._txtAmountCoin = new ck.Text();
        this._txtAmountCoin.setName("_txtAmountCoin");
        this._layoutCoin.addChild(this._txtAmountCoin);
        this._txtAmountCoin.setCascadeOpacityEnabled(true);
        this._txtAmountCoin.setCascadeColorEnabled(true);
        this._txtAmountCoin.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmountCoin, 0.7143, 0.49);
        this._txtAmountCoin.setTextColor(cc.color(252, 206, 0, 255));
        let _txtAmountCoinLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmountCoin);
        _txtAmountCoinLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountCoinLayoutComponent.setPositionPercentY(0.49);
        this._txtAmountCoin.setTouchEnabled(false);
        this._txtAmountCoin.ignoreContentAdaptWithSize(true);
        this._txtAmountCoin.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmountCoin.setDefaultFontSize(24);
        this._txtAmountCoin.setTextHorizontalAlignment(0);
        this._txtAmountCoin.setTextVerticalAlignment(0);
        this._txtAmountCoin.enableOutline(cc.color(0, 0, 0, 255), 1);
        this._txtAmountCoin.enableShadow(cc.color(0, 0, 0, 255), cc.size(1, -1), 0);

        ///// # _layoutGem
        this._layoutGem = new ccui.Layout();
        this._layoutGem.setName("_layoutGem");
        this._layoutRoot.addChild(this._layoutGem);
        this._layoutGem.setCascadeOpacityEnabled(true);
        this._layoutGem.setCascadeColorEnabled(true);
        this._layoutGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._layoutGem, 0.5, -0.3119);
        let _layoutGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._layoutGem);
        _layoutGemLayoutComponent.setPositionPercentXEnabled(true);
        _layoutGemLayoutComponent.setPositionPercentX(0.5);
        this._layoutGem.setTouchEnabled(false);
        this._layoutGem.setUnifySizeEnabled(false);
        this._layoutGem.ignoreContentAdaptWithSize(false);
        this._layoutGem.setContentSize(cc.size(105, 25));

        ///// # _imgBackgroundGem
        this._imgBackgroundGem = new ccui.ImageView();
        this._imgBackgroundGem.setName("_imgBackgroundGem");
        this._layoutGem.addChild(this._imgBackgroundGem);
        this._imgBackgroundGem.setCascadeOpacityEnabled(true);
        this._imgBackgroundGem.setCascadeColorEnabled(true);
        this._imgBackgroundGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackgroundGem, 0.5, 0.5);
        this._imgBackgroundGem.setOpacity(102);
        this._imgBackgroundGem.setColor(cc.color(0, 0, 0, 255));
        let _imgBackgroundGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackgroundGem);
        _imgBackgroundGemLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundGemLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundGemLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundGemLayoutComponent.setPositionPercentY(0.5);
        _imgBackgroundGemLayoutComponent.setPercentWidthEnabled(true);
        _imgBackgroundGemLayoutComponent.setPercentWidth(1);
        _imgBackgroundGemLayoutComponent.setPercentHeightEnabled(true);
        _imgBackgroundGemLayoutComponent.setPercentHeight(1);
        this._imgBackgroundGem.loadTexture("basics/shapes/RoundedRectangle_64px.png", 1);
        this._imgBackgroundGem.setUnifySizeEnabled(false);
        this._imgBackgroundGem.ignoreContentAdaptWithSize(false);
        this._imgBackgroundGem.setScale9Enabled(true);
        this._imgBackgroundGem.setCapInsets(cc.rect(21, 21, 22, 22));
        ck.UIUtils.setSizePercent(this._imgBackgroundGem, 1, 1);
        this._imgBackgroundGem.setTouchEnabled(false);

        ///// # _imgIconGem
        this._imgIconGem = new ccui.ImageView();
        this._imgIconGem.setName("_imgIconGem");
        this._layoutGem.addChild(this._imgIconGem);
        this._imgIconGem.setCascadeOpacityEnabled(true);
        this._imgIconGem.setCascadeColorEnabled(true);
        this._imgIconGem.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgIconGem, 0.8286, 0.5);
        let _imgIconGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgIconGem);
        _imgIconGemLayoutComponent.setPositionPercentYEnabled(true);
        _imgIconGemLayoutComponent.setPositionPercentY(0.5);
        this._imgIconGem.loadTexture("icons/color/gems/Gem.png", 1);
        this._imgIconGem.setUnifySizeEnabled(false);
        this._imgIconGem.ignoreContentAdaptWithSize(false);
        this._imgIconGem.setContentSize(cc.size(25, 25));
        this._imgIconGem.setTouchEnabled(false);

        ///// # _txtAmountGem
        this._txtAmountGem = new ck.Text();
        this._txtAmountGem.setName("_txtAmountGem");
        this._layoutGem.addChild(this._txtAmountGem);
        this._txtAmountGem.setCascadeOpacityEnabled(true);
        this._txtAmountGem.setCascadeColorEnabled(true);
        this._txtAmountGem.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAmountGem, 0.7143, 0.49);
        this._txtAmountGem.setTextColor(cc.color(243, 192, 255, 255));
        let _txtAmountGemLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAmountGem);
        _txtAmountGemLayoutComponent.setPositionPercentYEnabled(true);
        _txtAmountGemLayoutComponent.setPositionPercentY(0.49);
        this._txtAmountGem.setTouchEnabled(false);
        this._txtAmountGem.ignoreContentAdaptWithSize(true);
        this._txtAmountGem.setFontName("fonts/LilitaOneRegular.ttf");
        this._txtAmountGem.setDefaultFontSize(24);
        this._txtAmountGem.setTextHorizontalAlignment(0);
        this._txtAmountGem.setTextVerticalAlignment(0);
        this._txtAmountGem.enableOutline(cc.color(0, 0, 0, 255), 1);
        this._txtAmountGem.enableShadow(cc.color(0, 0, 0, 255), cc.size(1, -1), 0);

        ///// # _nodeEffect
        this._nodeEffect = new cc.Node();
        this._nodeEffect.setName("_nodeEffect");
        this._layoutRoot.addChild(this._nodeEffect);
        this._nodeEffect.setCascadeOpacityEnabled(true);
        this._nodeEffect.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeEffect, 0.5, 0.5);
        let _nodeEffectLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeEffect);
        _nodeEffectLayoutComponent.setPositionPercentXEnabled(true);
        _nodeEffectLayoutComponent.setPositionPercentX(0.5);
        _nodeEffectLayoutComponent.setPositionPercentYEnabled(true);
        _nodeEffectLayoutComponent.setPositionPercentY(0.5);

        ///// # imageGlow
        this.imageGlow = new ccui.ImageView();
        this.imageGlow.setName("imageGlow");
        this._nodeEffect.addChild(this.imageGlow);
        this.imageGlow.setCascadeOpacityEnabled(true);
        this.imageGlow.setCascadeColorEnabled(true);
        this.imageGlow.setAnchorPoint(cc.p(0.5, 0.5));
        this.imageGlow.setScale(3, 3);
        this.imageGlow.setOpacity(0);
        let imageGlowLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imageGlow);
        imageGlowLayoutComponent.setHorizontalEdge(ccui.LayoutComponent.horizontalEdge.CENTER);
        imageGlowLayoutComponent.setLeftMargin(-46);
        imageGlowLayoutComponent.setRightMargin(-46);
        imageGlowLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.CENTER);
        imageGlowLayoutComponent.setTopMargin(-46);
        imageGlowLayoutComponent.setBottomMargin(-46);
        this.imageGlow.loadTexture("gourd-crab/YellowRingShine.png", 1);
        this.imageGlow.setUnifySizeEnabled(false);
        this.imageGlow.ignoreContentAdaptWithSize(false);
        this.imageGlow.setContentSize(cc.size(92, 92));
        this.imageGlow.setTouchEnabled(false);

        ///// # imageGlowLight
        this.imageGlowLight = new ccui.ImageView();
        this.imageGlowLight.setName("imageGlowLight");
        this._nodeEffect.addChild(this.imageGlowLight);
        this.imageGlowLight.setCascadeOpacityEnabled(true);
        this.imageGlowLight.setCascadeColorEnabled(true);
        this.imageGlowLight.setAnchorPoint(cc.p(0.5, 0.1));
        this.imageGlowLight.setPosition(0, -37.5681);
        this.imageGlowLight.setScale(1, 0.3);
        this.imageGlowLight.setOpacity(0);
        let imageGlowLightLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imageGlowLight);
        this.imageGlowLight.loadTexture("gourd-crab/LightGrow.png", 1);
        this.imageGlowLight.setUnifySizeEnabled(false);
        this.imageGlowLight.ignoreContentAdaptWithSize(false);
        this.imageGlowLight.setContentSize(cc.size(132, 252));
        this.imageGlowLight.setTouchEnabled(false);

        ///// # imageLightCircle
        this.imageLightCircle = new ccui.ImageView();
        this.imageLightCircle.setName("imageLightCircle");
        this._nodeEffect.addChild(this.imageLightCircle);
        this.imageLightCircle.setCascadeOpacityEnabled(true);
        this.imageLightCircle.setCascadeColorEnabled(true);
        this.imageLightCircle.setAnchorPoint(cc.p(0.5, 0.5));
        this.imageLightCircle.setScale(0.5, 0.5);
        this.imageLightCircle.setOpacity(0);
        let imageLightCircleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.imageLightCircle);
        imageLightCircleLayoutComponent.setHorizontalEdge(ccui.LayoutComponent.horizontalEdge.CENTER);
        imageLightCircleLayoutComponent.setLeftMargin(-179);
        imageLightCircleLayoutComponent.setRightMargin(-179);
        imageLightCircleLayoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.CENTER);
        imageLightCircleLayoutComponent.setTopMargin(-179);
        imageLightCircleLayoutComponent.setBottomMargin(-179);
        this.imageLightCircle.loadTexture("gourd-crab/LightDot.png", 1);
        this.imageLightCircle.setUnifySizeEnabled(false);
        this.imageLightCircle.ignoreContentAdaptWithSize(false);
        this.imageLightCircle.setContentSize(cc.size(358, 358));
        this.imageLightCircle.setTouchEnabled(false);

        ///// # _nodeResultLight0
        this._nodeResultLight0 = new cc.Node();
        this._nodeResultLight0.setName("_nodeResultLight0");
        this._layoutRoot.addChild(this._nodeResultLight0);
        this._nodeResultLight0.setCascadeOpacityEnabled(true);
        this._nodeResultLight0.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeResultLight0, 0.5, -0.0642);
        this._nodeResultLight0.setVisible(false);
        let _nodeResultLight0LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeResultLight0);
        _nodeResultLight0LayoutComponent.setPositionPercentXEnabled(true);
        _nodeResultLight0LayoutComponent.setPositionPercentX(0.5);

        ///// # _imgResultLight01
        this._imgResultLight01 = new ccui.ImageView();
        this._imgResultLight01.setName("_imgResultLight01");
        this._nodeResultLight0.addChild(this._imgResultLight01);
        this._imgResultLight01.setCascadeOpacityEnabled(true);
        this._imgResultLight01.setCascadeColorEnabled(true);
        this._imgResultLight01.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgResultLight01.setPosition(-4, 0);
        let _imgResultLight01LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgResultLight01);
        this._imgResultLight01.loadTexture("gourd-crab/LightEffect01.png", 1);
        this._imgResultLight01.setUnifySizeEnabled(false);
        this._imgResultLight01.ignoreContentAdaptWithSize(false);
        this._imgResultLight01.setContentSize(cc.size(126, 67));
        this._imgResultLight01.setTouchEnabled(false);

        ///// # _imgResultLight02
        this._imgResultLight02 = new ccui.ImageView();
        this._imgResultLight02.setName("_imgResultLight02");
        this._nodeResultLight0.addChild(this._imgResultLight02);
        this._imgResultLight02.setCascadeOpacityEnabled(true);
        this._imgResultLight02.setCascadeColorEnabled(true);
        this._imgResultLight02.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgResultLight02.setPosition(2, 0);
        this._imgResultLight02.setOpacity(0);
        let _imgResultLight02LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgResultLight02);
        this._imgResultLight02.loadTexture("gourd-crab/LightEffect02.png", 1);
        this._imgResultLight02.setUnifySizeEnabled(false);
        this._imgResultLight02.ignoreContentAdaptWithSize(false);
        this._imgResultLight02.setContentSize(cc.size(126, 67));
        this._imgResultLight02.setTouchEnabled(false);

        ///// # _nodeResultLight1
        this._nodeResultLight1 = new cc.Node();
        this._nodeResultLight1.setName("_nodeResultLight1");
        this._layoutRoot.addChild(this._nodeResultLight1);
        this._nodeResultLight1.setCascadeOpacityEnabled(true);
        this._nodeResultLight1.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodeResultLight1, 0.5, -0.1881);
        this._nodeResultLight1.setVisible(false);
        let _nodeResultLight1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodeResultLight1);
        _nodeResultLight1LayoutComponent.setPositionPercentXEnabled(true);
        _nodeResultLight1LayoutComponent.setPositionPercentX(0.5);

        ///// # _imgResultLight11
        this._imgResultLight11 = new ccui.ImageView();
        this._imgResultLight11.setName("_imgResultLight11");
        this._nodeResultLight1.addChild(this._imgResultLight11);
        this._imgResultLight11.setCascadeOpacityEnabled(true);
        this._imgResultLight11.setCascadeColorEnabled(true);
        this._imgResultLight11.setAnchorPoint(cc.p(0.5, 0.5));
        let _imgResultLight11LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgResultLight11);
        this._imgResultLight11.loadTexture("gourd-crab/LightEffect11.png", 1);
        this._imgResultLight11.setUnifySizeEnabled(false);
        this._imgResultLight11.ignoreContentAdaptWithSize(false);
        this._imgResultLight11.setContentSize(cc.size(121, 76));
        this._imgResultLight11.setTouchEnabled(false);

        ///// # _imgResultLight12
        this._imgResultLight12 = new ccui.ImageView();
        this._imgResultLight12.setName("_imgResultLight12");
        this._nodeResultLight1.addChild(this._imgResultLight12);
        this._imgResultLight12.setCascadeOpacityEnabled(true);
        this._imgResultLight12.setCascadeColorEnabled(true);
        this._imgResultLight12.setAnchorPoint(cc.p(0.5, 0.5));
        this._imgResultLight12.setPosition(-0.0002, 4);
        this._imgResultLight12.setOpacity(0);
        let _imgResultLight12LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgResultLight12);
        this._imgResultLight12.loadTexture("gourd-crab/LightEffect12.png", 1);
        this._imgResultLight12.setUnifySizeEnabled(false);
        this._imgResultLight12.ignoreContentAdaptWithSize(false);
        this._imgResultLight12.setContentSize(cc.size(120, 76));
        this._imgResultLight12.setTouchEnabled(false);

    },


    playCCSAnimResultX1: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimResultX1();
    
        let _imgDoorAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(26 / (60 * speed), 1, 1),
                    cc.scaleTo(6 / (60 * speed), 1.6, 1.6),
                    cc.scaleTo(6 / (60 * speed), 0.6, 0.6),
                    cc.scaleTo(6 / (60 * speed), 1.3, 1.3),
                    cc.scaleTo(6 / (60 * speed), 0.9, 0.9),
                    cc.scaleTo(4 / (60 * speed), 1.1, 1.1),
                    cc.scaleTo(6 / (60 * speed), 0.95, 0.95),
                    cc.scaleTo(6 / (60 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgDoor.setScale(1, 1);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgDoorAction = _imgDoorAction.repeatForever();
        } else _imgDoorAction = cc.sequence(
            cc.delayTime(delay),
            _imgDoorAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgDoor.runAction(_imgDoorAction);
    
        let imageGlowAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(16 / (60 * speed), 1.39, 1.39),
                    cc.scaleTo(50 / (60 * speed), 1.39, 1.39)
                ),
                cc.sequence(
                    cc.fadeTo(8 / (60 * speed), 191),
                    cc.fadeTo(8 / (60 * speed), 0),
                    cc.fadeTo(50 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this.imageGlow.setScale(3, 3);
                this.imageGlow.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            imageGlowAction = imageGlowAction.repeatForever();
        } else imageGlowAction = cc.sequence(
            cc.delayTime(delay),
            imageGlowAction.repeat(repeat)
        )
        
        this.imageGlow.runAction(imageGlowAction);
    
        let imageGlowLightAction = cc.sequence(
            cc.spawn(
                cc.fadeTo(66 / (60 * speed), 0)
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this.imageGlowLight.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            imageGlowLightAction = imageGlowLightAction.repeatForever();
        } else imageGlowLightAction = cc.sequence(
            cc.delayTime(delay),
            imageGlowLightAction.repeat(repeat)
        )
        
        this.imageGlowLight.runAction(imageGlowLightAction);
    
        let imageLightCircleAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(12 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(4 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(20 / (60 * speed), 1.2, 1.2),
                    cc.scaleTo(30 / (60 * speed), 1.2, 1.2)
                ),
                cc.sequence(
                    cc.fadeTo(12 / (60 * speed), 0),
                    cc.fadeTo(4 / (60 * speed), 102),
                    cc.fadeTo(6 / (60 * speed), 255),
                    cc.fadeTo(10 / (60 * speed), 0),
                    cc.fadeTo(34 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this.imageLightCircle.setScale(0.5, 0.5);
                this.imageLightCircle.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            imageLightCircleAction = imageLightCircleAction.repeatForever();
        } else imageLightCircleAction = cc.sequence(
            cc.delayTime(delay),
            imageLightCircleAction.repeat(repeat)
        )
        
        this.imageLightCircle.runAction(imageLightCircleAction);
    },

    resetCCSAnimResultX1: function () {
        this._imgDoor.stopAllActions();
        this._imgDoor.setScale(1, 1);
    
        this.imageGlow.stopAllActions();
        this.imageGlow.setScale(3, 3);
        this.imageGlow.setOpacity(0);
    
        this.imageGlowLight.stopAllActions();
        this.imageGlowLight.setOpacity(0);
    
        this.imageLightCircle.stopAllActions();
        this.imageLightCircle.setScale(0.5, 0.5);
        this.imageLightCircle.setOpacity(0);
    },

    playCCSAnimLightEffect0: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimLightEffect0();
    
        let _imgResultLight01Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 0),
                    cc.fadeTo(10 / (60 * speed), 255)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgResultLight01.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgResultLight01Action = _imgResultLight01Action.repeatForever();
        } else _imgResultLight01Action = cc.sequence(
            cc.delayTime(delay),
            _imgResultLight01Action.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgResultLight01.runAction(_imgResultLight01Action);
    
        let _imgResultLight02Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(10 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgResultLight02.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgResultLight02Action = _imgResultLight02Action.repeatForever();
        } else _imgResultLight02Action = cc.sequence(
            cc.delayTime(delay),
            _imgResultLight02Action.repeat(repeat)
        )
        
        this._imgResultLight02.runAction(_imgResultLight02Action);
    },

    resetCCSAnimLightEffect0: function () {
        this._imgResultLight01.stopAllActions();
        this._imgResultLight01.setOpacity(255);
    
        this._imgResultLight02.stopAllActions();
        this._imgResultLight02.setOpacity(0);
    },

    playCCSAnimLightEffect1: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimLightEffect1();
    
        let _imgResultLight11Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 0),
                    cc.fadeTo(10 / (60 * speed), 255)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgResultLight11.setOpacity(255);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgResultLight11Action = _imgResultLight11Action.repeatForever();
        } else _imgResultLight11Action = cc.sequence(
            cc.delayTime(delay),
            _imgResultLight11Action.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgResultLight11.runAction(_imgResultLight11Action);
    
        let _imgResultLight12Action = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.fadeTo(10 / (60 * speed), 255),
                    cc.fadeTo(10 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgResultLight12.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgResultLight12Action = _imgResultLight12Action.repeatForever();
        } else _imgResultLight12Action = cc.sequence(
            cc.delayTime(delay),
            _imgResultLight12Action.repeat(repeat)
        )
        
        this._imgResultLight12.runAction(_imgResultLight12Action);
    },

    resetCCSAnimLightEffect1: function () {
        this._imgResultLight11.stopAllActions();
        this._imgResultLight11.setOpacity(255);
    
        this._imgResultLight12.stopAllActions();
        this._imgResultLight12.setOpacity(0);
    },

    playCCSAnimResultX2: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimResultX2();
    
        let _imgDoorAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(26 / (60 * speed), 1, 1),
                    cc.scaleTo(6 / (60 * speed), 1.6, 1.6),
                    cc.scaleTo(6 / (60 * speed), 0.6, 0.6),
                    cc.scaleTo(6 / (60 * speed), 1.3, 1.3),
                    cc.scaleTo(6 / (60 * speed), 0.9, 0.9),
                    cc.scaleTo(4 / (60 * speed), 1.1, 1.1),
                    cc.scaleTo(6 / (60 * speed), 0.95, 0.95),
                    cc.scaleTo(6 / (60 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgDoor.setScale(1, 1);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgDoorAction = _imgDoorAction.repeatForever();
        } else _imgDoorAction = cc.sequence(
            cc.delayTime(delay),
            _imgDoorAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgDoor.runAction(_imgDoorAction);
    
        let imageGlowAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(16 / (60 * speed), 1.39, 1.39),
                    cc.scaleTo(50 / (60 * speed), 1.39, 1.39)
                ),
                cc.sequence(
                    cc.fadeTo(8 / (60 * speed), 191),
                    cc.fadeTo(8 / (60 * speed), 0),
                    cc.fadeTo(50 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this.imageGlow.setScale(3, 3);
                this.imageGlow.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            imageGlowAction = imageGlowAction.repeatForever();
        } else imageGlowAction = cc.sequence(
            cc.delayTime(delay),
            imageGlowAction.repeat(repeat)
        )
        
        this.imageGlow.runAction(imageGlowAction);
    
        let imageGlowLightAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(20 / (60 * speed), 1, 0.3),
                    cc.scaleTo(8 / (60 * speed), 1.2, 1.4),
                    cc.scaleTo(16 / (60 * speed), 1, 1.2),
                    cc.delayTime(22 / (60 * speed))
                ),
                cc.sequence(
                    cc.delayTime(20 / (60 * speed)),
                    cc.callFunc(function () {
                        this.imageGlowLight.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(46 / (60 * speed))
                ),
                cc.sequence(
                    cc.fadeTo(20 / (60 * speed), 0),
                    cc.fadeTo(6 / (60 * speed), 255),
                    cc.fadeTo(10 / (60 * speed), 0),
                    cc.delayTime(30 / (60 * speed))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this.imageGlowLight.setScale(1, 0.3);
                this.imageGlowLight.setVisible(true);
                this.imageGlowLight.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            imageGlowLightAction = imageGlowLightAction.repeatForever();
        } else imageGlowLightAction = cc.sequence(
            cc.delayTime(delay),
            imageGlowLightAction.repeat(repeat)
        )
        
        this.imageGlowLight.runAction(imageGlowLightAction);
    
        let imageLightCircleAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(12 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(4 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(20 / (60 * speed), 1.2, 1.2),
                    cc.scaleTo(30 / (60 * speed), 1.2, 1.2)
                ),
                cc.sequence(
                    cc.fadeTo(12 / (60 * speed), 0),
                    cc.fadeTo(4 / (60 * speed), 102),
                    cc.fadeTo(6 / (60 * speed), 255),
                    cc.fadeTo(10 / (60 * speed), 0),
                    cc.fadeTo(34 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this.imageLightCircle.setScale(0.5, 0.5);
                this.imageLightCircle.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            imageLightCircleAction = imageLightCircleAction.repeatForever();
        } else imageLightCircleAction = cc.sequence(
            cc.delayTime(delay),
            imageLightCircleAction.repeat(repeat)
        )
        
        this.imageLightCircle.runAction(imageLightCircleAction);
    },

    resetCCSAnimResultX2: function () {
        this._imgDoor.stopAllActions();
        this._imgDoor.setScale(1, 1);
    
        this.imageGlow.stopAllActions();
        this.imageGlow.setScale(3, 3);
        this.imageGlow.setOpacity(0);
    
        this.imageGlowLight.stopAllActions();
        this.imageGlowLight.setScale(1, 0.3);
        this.imageGlowLight.setVisible(true);
        this.imageGlowLight.setOpacity(0);
    
        this.imageLightCircle.stopAllActions();
        this.imageLightCircle.setScale(0.5, 0.5);
        this.imageLightCircle.setOpacity(0);
    },

    playCCSAnimResultX3: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimResultX3();
    
        let _imgDoorAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(26 / (60 * speed), 1, 1),
                    cc.scaleTo(6 / (60 * speed), 1.6, 1.6),
                    cc.scaleTo(6 / (60 * speed), 0.6, 0.6),
                    cc.scaleTo(6 / (60 * speed), 1.3, 1.3),
                    cc.scaleTo(6 / (60 * speed), 0.9, 0.9),
                    cc.scaleTo(4 / (60 * speed), 1.1, 1.1),
                    cc.scaleTo(6 / (60 * speed), 0.95, 0.95),
                    cc.scaleTo(6 / (60 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgDoor.setScale(1, 1);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgDoorAction = _imgDoorAction.repeatForever();
        } else _imgDoorAction = cc.sequence(
            cc.delayTime(delay),
            _imgDoorAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgDoor.runAction(_imgDoorAction);
    
        let imageGlowAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(16 / (60 * speed), 1.39, 1.39),
                    cc.scaleTo(50 / (60 * speed), 1.39, 1.39)
                ),
                cc.sequence(
                    cc.fadeTo(8 / (60 * speed), 191),
                    cc.fadeTo(8 / (60 * speed), 0),
                    cc.fadeTo(50 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this.imageGlow.setScale(3, 3);
                this.imageGlow.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            imageGlowAction = imageGlowAction.repeatForever();
        } else imageGlowAction = cc.sequence(
            cc.delayTime(delay),
            imageGlowAction.repeat(repeat)
        )
        
        this.imageGlow.runAction(imageGlowAction);
    
        let imageGlowLightAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(20 / (60 * speed), 1, 0.3),
                    cc.scaleTo(8 / (60 * speed), 1.6, 1.68),
                    cc.scaleTo(16 / (60 * speed), 1, 1.2),
                    cc.delayTime(22 / (60 * speed))
                ),
                cc.sequence(
                    cc.delayTime(20 / (60 * speed)),
                    cc.callFunc(function () {
                        this.imageGlowLight.setVisible(true);
                    }.bind(this)),
                    cc.delayTime(46 / (60 * speed))
                ),
                cc.sequence(
                    cc.fadeTo(20 / (60 * speed), 0),
                    cc.fadeTo(6 / (60 * speed), 255),
                    cc.fadeTo(10 / (60 * speed), 0),
                    cc.delayTime(30 / (60 * speed))
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this.imageGlowLight.setScale(1, 0.3);
                this.imageGlowLight.setVisible(true);
                this.imageGlowLight.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            imageGlowLightAction = imageGlowLightAction.repeatForever();
        } else imageGlowLightAction = cc.sequence(
            cc.delayTime(delay),
            imageGlowLightAction.repeat(repeat)
        )
        
        this.imageGlowLight.runAction(imageGlowLightAction);
    
        let imageLightCircleAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(12 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(4 / (60 * speed), 0.5, 0.5),
                    cc.scaleTo(20 / (60 * speed), 1.2, 1.2),
                    cc.scaleTo(30 / (60 * speed), 1.2, 1.2)
                ),
                cc.sequence(
                    cc.fadeTo(12 / (60 * speed), 0),
                    cc.fadeTo(4 / (60 * speed), 102),
                    cc.fadeTo(6 / (60 * speed), 255),
                    cc.fadeTo(10 / (60 * speed), 0),
                    cc.fadeTo(34 / (60 * speed), 0)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this.imageLightCircle.setScale(0.5, 0.5);
                this.imageLightCircle.setOpacity(0);
            }.bind(this))
        );
        if (repeat <= 0) {
            imageLightCircleAction = imageLightCircleAction.repeatForever();
        } else imageLightCircleAction = cc.sequence(
            cc.delayTime(delay),
            imageLightCircleAction.repeat(repeat)
        )
        
        this.imageLightCircle.runAction(imageLightCircleAction);
    },

    resetCCSAnimResultX3: function () {
        this._imgDoor.stopAllActions();
        this._imgDoor.setScale(1, 1);
    
        this.imageGlow.stopAllActions();
        this.imageGlow.setScale(3, 3);
        this.imageGlow.setOpacity(0);
    
        this.imageGlowLight.stopAllActions();
        this.imageGlowLight.setScale(1, 0.3);
        this.imageGlowLight.setVisible(true);
        this.imageGlowLight.setOpacity(0);
    
        this.imageLightCircle.stopAllActions();
        this.imageLightCircle.setScale(0.5, 0.5);
        this.imageLightCircle.setOpacity(0);
    },

    playCCSAnimShrugs: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimShrugs();
    
        let _imgDoorAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.moveTo(12 / (60 * speed), 54.5, 54.5),
                    cc.moveTo(8 / (60 * speed), 54.5, 79.5),
                    cc.moveTo(8 / (60 * speed), 54.5, 54.5),
                    cc.moveTo(6 / (60 * speed), 54.5, 54.5)
                ),
                cc.sequence(
                    cc.scaleTo(12 / (60 * speed), 1.15, 0.85),
                    cc.scaleTo(8 / (60 * speed), 0.85, 1.25),
                    cc.scaleTo(8 / (60 * speed), 1.05, 0.95),
                    cc.scaleTo(6 / (60 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgDoor.setPosition(54.5, 54.5);
                this._imgDoor.setScale(1, 1);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgDoorAction = _imgDoorAction.repeatForever();
        } else _imgDoorAction = cc.sequence(
            cc.delayTime(delay),
            _imgDoorAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgDoor.runAction(_imgDoorAction);
    },

    resetCCSAnimShrugs: function () {
        this._imgDoor.stopAllActions();
        this._imgDoor.setPosition(54.5, 54.5);
        this._imgDoor.setScale(1, 1);
    }
});

/**
 * Create GourdCrabDoorWidget
 * @returns {_ccs.GourdCrabDoorWidget}
 */
_ccs.GourdCrabDoorWidget.create = function () {
    return new _ccs.GourdCrabDoorWidget();
};
