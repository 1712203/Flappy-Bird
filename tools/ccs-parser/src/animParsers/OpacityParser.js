const BaseAnimParser = require("./BaseAnimParser");

class OpacityParser extends BaseAnimParser {
    constructor(animName, frames, startFrame, endFrame, speed) {
        super(animName, frames, startFrame, endFrame, speed);
    }

    /**
     * 
     * @param {OpacityKeyFrame} frame
     * @param {number} duration
     * @param {OpacityKeyFrame} lastFrame
     */
    getAction(frame, duration, lastFrame) {
        return this.getOpacityAction(duration, frame.value);
    }

    /**
     *
     * @param {OpacityKeyFrame} frame
     */
    parseProperty(frame) {
        return this.parseOpacity(frame.value);
    }
}

module.exports = OpacityParser;