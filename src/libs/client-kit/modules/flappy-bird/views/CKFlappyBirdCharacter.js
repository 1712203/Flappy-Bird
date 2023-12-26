/**
 * @class
 * @extends ccui.Widget
 */
ck.FlappyBirdCharacter = _ccs.FlappyBirdCharacter.extend({

    ctor: function () {
        _ccs.FlappyBirdCharacter.prototype.ctor.call(this);
    },

    onEnterTransitionDidFinish: function (){
        this._super();
        this._loadAnimation();
    },

    _loadAnimation: function () {
        const flappyBird = gm.flappyBird;
        const data = flappyBird.getData();
        const config = flappyBird.getConfig();
        const color = data.getBirdColor();
        const frames = config.getBirdFrames(color);

        if (frames) {
            const delay = 0.2;
            const repeat = -1;
            const animation = AnimationUtils.createFrameByFrame("bird_anim_" + color, frames, delay, repeat);
            this._spriteBird.runAction(animation);
        }
    },

    stopAnimation: function () {
        if (this._spriteBird) this._spriteBird.stopAllActions();
    },

    /** @return {Number} */
    getRadius: function () {
        return this._spriteBird.width * this._spriteBird.getScaleX() * 0.5;
    },
});

/**
 * @class
 * @extends ck.FlappyBirdCharacter
 */
let FlappyBirdCharacter = ck.FlappyBirdCharacter;

/**
 * @returns {FlappyBirdCharacter}
 */
FlappyBirdCharacter.create = function () {
    return new FlappyBirdCharacter();
};

FlappyBirdCharacter.COLOR = {
    RED: 1,
    BLUE: 2,
    YELLOW: 3
}
