/**
 * @class
 * @extends cc.Layer
 * @extends ck.BaseMainLayer
 */
ck.FlappyBirdLayer = _ccs.FlappyBirdLayer.extend({

    ctor: function () {
        this._loadAssets();
        _ccs.FlappyBirdLayer.prototype.ctor.call(this);
        ck.BaseMainLayer.prototype.ctor.call(this);
        this._init();
    },

    onEnterTransitionDidFinish: function (){
        this._super();
    },

    _loadAssets: function () {
        gm.loading.loadSceneAssets(ck.SceneID.FLAPPY_BIRD);
    },

    _init: function () {
        this._initData();
        this._initChimneyMap();
        this._initTouchEvents();
    },

    _initData: function () {
        /** @type {boolean} */
        this._startGame = false;

        /** @type {Number} */
        this._tapTime = 0;

        /** @type {Number} */
        this._v = FlappyBirdLayer.V0;

        /** @type {Number} */
        this._hMax = 0;
    },

    _initChimneyMap: function () {
        /** @type {ck.FlappyBirdChimneyTileMap} */
        this._chimneyMap = new ck.FlappyBirdChimneyTileMap();
        this._imgBgr.addChild(this._chimneyMap);
        this._layoutLand.setLocalZOrder(1);
        this._bird.setLocalZOrder(1);
    },

    /**
     * @override
     * @param {ck.FlappyBirdData} data
     */
    setData: function (data) {

    },

    _initTouchEvents: function () {
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function (keycode, event) {
                this.startGame();
                switch (keycode) {
                    case cc.KEY.escape:
                        this.removeFromParent(true);
                        break;
                    case cc.KEY.space:
                        this.onTapped();
                        break;
                }
            }.bind(this),
        }, -1);
    },


    /** @return {boolean} */
    checkFlyingUp: function () {
        return this._hMax > 0;
    },

    startGame: function () {
        if (this._startGame)
            return;

        this._startGame = true;
        this.playCCSAnimIdle(0, null, -1);
        this.scheduleUpdate();

        cc.log("start gameeeee");
    },

    endGame: function () {
        this.unscheduleUpdate();
        this.resetCCSAnimIdle()
        this._bird.stopAnimation();
    },

    onTapped: function () {
        this._v = FlappyBirdLayer.V0_THROW;
        this._hMax = (this._v * this._v) / (2 * FlappyBirdLayer.G) - 1; // -1 tranh sai so
        this._tapTime = TimeUtils.getCurrentSecond();
    },

    update: function (d_t) {
        if (!this._startGame)
            return;

        this._chimneyMap.updateChimneys(d_t);
        let d_y = 0;
        let new_y = 0;
        let max_y = 0;
        let d_rotation = 0;
        let new_rotation = 0;

        if (this.checkFlyingUp()) {
            d_y = this._v * d_t - 0.5 * FlappyBirdLayer.G * d_t * d_t;
            d_rotation = d_t * FlappyBirdLayer.V_ROTATION * 2;
            new_rotation = this._bird.getRotation() - d_rotation;
            new_y = this._bird.y + d_y;
            max_y = cc.winSize.height - this._bird.height;

            this._bird.y = new_y >= max_y ? max_y : new_y;
            this._bird.setRotation(new_rotation <= -30 ? -30 : new_rotation);

            this._v = this._v - FlappyBirdLayer.G * d_t;
            this._hMax -= d_y;
            if (this._hMax <= 0) this._v = FlappyBirdLayer.V0;

            this.checkCollision();
            return;
        }

        d_y = this._v * d_t + 0.5 * FlappyBirdLayer.G * d_t * d_t;
        d_rotation = d_t * FlappyBirdLayer.V_ROTATION;
        new_rotation = this._bird.getRotation() + d_rotation;

        this._bird.y -= d_y;
        this._bird.setRotation(new_rotation >= FlappyBirdLayer.MIN_ROTATION ? FlappyBirdLayer.MIN_ROTATION : new_rotation);

        this._v = this._v + FlappyBirdLayer.G * d_t;
        this.checkCollision();
    },

    checkCollision: function () {
        var isCollisionWithGround = this.checkCollisionWithGround();
        var isCollisionWithChimneys = this.checkCollisionWithChimneys();

        if (isCollisionWithGround || isCollisionWithChimneys) {
            this.endGame();
        }

        if (isCollisionWithGround) {
            this._bird.y = this._layoutLand.height * this._layoutLand.getScaleY() + this._bird.getRadius();
        }
    },

    /** @return {boolean} */
    checkCollisionWithGround: function () {
        var birdRadius = this._bird.getRadius();
        var birdPosition = this._bird.getWorldPosition();
        var groundPosition = UIUtils.getWorldPosition(this._layoutLand);
        return this._layoutLand.height * this._layoutLand.getScaleY() + birdRadius >= birdPosition.y;
    },

    /** @return {boolean} */
    checkCollisionWithChimneys: function () {
        return false;
    },
});



ck.extend(ck.FlappyBirdLayer, ck.BaseMainLayer);

/**
 * @class
 * @extends ck.FlappyBirdLayer
 */
let FlappyBirdLayer = ck.FlappyBirdLayer;

/**
 * @returns {FlappyBirdLayer}
 */
FlappyBirdLayer.create = function () {
    return new FlappyBirdLayer();
};

FlappyBirdLayer.G = 1500;
FlappyBirdLayer.V0 = 0;
FlappyBirdLayer.V0_THROW = 570;
FlappyBirdLayer.V_ROTATION = 240;
FlappyBirdLayer.MIN_ROTATION = 90;
FlappyBirdLayer.MAX_ROTATION = -30;