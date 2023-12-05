const BaseAnimParser = require("./BaseAnimParser");

class PositionParser extends BaseAnimParser {
    constructor(animName, frames, startFrame, endFrame, speed) {
        super(animName, frames, startFrame, endFrame, speed);
    }

    /**
     * 
     * @param {PositionKeyFrame} frame
     * @param {number} duration
     * @param {PositionKeyFrame} lastFrame
     */
    getAction(frame, duration, lastFrame) {
        return this.getPositionAction(duration, frame.x, frame.y);
    }

    /**
     *
     * @param {PositionKeyFrame} frame
     */
    parseProperty(frame) {
        return this.parsePosition(frame.x, frame.y);
    }
}

module.exports = PositionParser;