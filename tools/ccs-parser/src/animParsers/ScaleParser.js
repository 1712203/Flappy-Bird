const BaseAnimParser = require("./BaseAnimParser");

class ScaleParser extends BaseAnimParser {
    constructor(animName, frames, startFrame, endFrame, speed) {
        super(animName, frames, startFrame, endFrame, speed);
    }

    /**
     * 
     * @param {ScaleKeyFrame} frame
     * @param {number} duration
     * @param {ScaleKeyFrame} lastFrame
     */
    getAction(frame, duration, lastFrame) {
        return this.getScaleAction(duration, frame.x, frame.y);
    }

    /**
     *
     * @param {ScaleKeyFrame} frame
     */
    parseProperty(frame) {
        return this.parseScale(frame.x, frame.y);
    }
}

module.exports = ScaleParser;