/**
 * @class
 * @extends _ccs.FlappyBirdChimneyLayer
 */
ck.FlappyBirdChimneyLayer = _ccs.FlappyBirdChimneyLayer.extend({

    ctor: function () {
        _ccs.FlappyBirdChimneyLayer.prototype.ctor.call(this);
    },

    _initCCSChildren: function () {
        this._super();
        this._chimneyUp.setType(FlappyBirdChimney.TYPE.UP);
        this._chimneyDown.setType(FlappyBirdChimney.TYPE.DOWN);
        this._randomPosition();
    },

    _randomPosition: function () {
        let x = ck.Math.randomFloat(this.width * 0.3, this.width * 0.9);
        let y = ck.Math.randomFloat(this.height * 0.35, this.height * 0.7);
        this._nodeChimney.setPosition(cc.p(x, y));
    },

});

/**
 * @class
 * @extends ck.FlappyBirdChimneyLayer
 */
let FlappyBirdChimneyLayer = ck.FlappyBirdChimneyLayer;

/** @returns {FlappyBirdChimneyLayer} */
FlappyBirdChimneyLayer.create = function () {
    return new FlappyBirdChimneyLayer();
};

/**
 * @class
 * @extends ccui.Widget
 */
ck.FlappyBirdChimneyTileMap = ccui.Widget.extend({

    ctor: function () {
        this._super();
        this._init();
        this.setCascadeOpacityEnabled(true);
    },

    _init: function () {
        this._initBase();
    },

    _initBase: function () {
        /** @type {FlappyBirdChimneyLayer[]} */
        this._chimneys = [];

        let start_x = cc.winSize.width * 1;
        let nChimney = 2;
        for (var i = 0; i < nChimney; i++) {
            var chimney = new FlappyBirdChimneyLayer();
            chimney.setPosition(cc.p(start_x + cc.winSize.width * i, 0));
            this.addChild(chimney);
            this._chimneys.push(chimney);
        }
    },

    _genNewChimney: function () {
        let last_chimney = this._chimneys[this._chimneys.length - 1];
        let chimney = new FlappyBirdChimneyLayer();
        chimney.x = last_chimney ? last_chimney.x + cc.winSize.width : 0;
        this.addChild(chimney);
        this._chimneys.push(chimney);
    },

    /** @return {cc.Rect[]} */
    getChimneysBoundingBox: function () {
        let chimneys_bounding_box = [];

        // this._chimneys.forEach(function (chimney) {
        //     if (chimney) chimneys_bounding_box = chimneys_bounding_box.concat(chimney.getChimneysBoundingBox());
        // }.bind(this));

        return chimneys_bounding_box;
    },

    /** @param {Number} dt */
    updateChimneys: function (dt) {
        var dx = ck.FlappyBirdChimneyTileMap.V_X * dt;

        this._chimneys.forEach(function (chimney) {
            if (chimney) chimney.x -= dx;
        });

        var minX = -cc.winSize.width;
        var first_chimney = this._chimneys[0];
        if (first_chimney && first_chimney.x <= minX) {
            first_chimney.removeFromParent(true);
            this._chimneys.shift();
            this._genNewChimney();
        }
    }
});

ck.FlappyBirdChimneyTileMap.V_X = cc.winSize.width * 0.15;