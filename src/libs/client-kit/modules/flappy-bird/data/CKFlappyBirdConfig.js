ck.FlappyBirdConfig = ck.BaseConfig.extend({
    /**
     * @type {Map<FlappyBirdCharacter.COLOR, String[]>}
     */
    _birdFrames: null,

    ctor: function () {
        ck.BaseConfig.prototype.ctor.call(this);
        this._birdFrames = new Map();
    },

    /**
     * @override
     */
    load: function (file) {
        ck.BaseConfig.prototype.load.call(this, file);

        const obj = ck.loader.loadJson(file);
        if (!obj) {
            cc.warn("[LoadingConfig] <load> Load failed", file);
            return;
        }

        const birdFrames = obj["birdFrames"];
        birdFrames.forEach(function(birdFrame) {
            let color = birdFrame["color"]
            let frames = birdFrame["frames"]
            this._birdFrames.set(color, frames);
        }.bind(this));

        FlappyBirdObjectPhysicCircleBodyConfig.init(ck.loader.loadJson(ck.FlappyBirdConfig.OBJECT_CIRCLE_BODY_FILE));
    },

    /**
     * @param {FlappyBirdCharacter.COLOR} color
     * @return {String[]}
     */
    getBirdFrames: function (color) {
        return this._birdFrames.get(color);
    },
});

/**
 * @class
 * @extends ck.FlappyBirdConfig
 */
let FlappyBirdConfig = ck.FlappyBirdConfig;

/**
 * @returns {FlappyBirdConfig}
 */
FlappyBirdConfig.create = function () {
    return new FlappyBirdConfig();
};

ck.FlappyBirdConfig.OBJECT_CIRCLE_BODY_FILE = "configs/object_body_circle.json";