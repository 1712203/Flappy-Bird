const BaseAnimParser = require("./BaseAnimParser");

class NestedActionParser extends BaseAnimParser {
    constructor(animName, frames, startFrame, endFrame, speed) {
        super(animName, frames, startFrame, endFrame, speed);
    }

    /**
     * 
     * @param {NestedActionKeyFrame} frame
     * @param {number} duration
     * @param {NestedActionKeyFrame} lastFrame
     */
    getAction(frame, duration, lastFrame) {
        return this.getNestedActionAction(duration, frame.innerActionType, frame.currentAnimationName, lastFrame.currentAnimationName);
    }

    /**
     *
     * @param {NestedActionKeyFrame} frame
     */
    parseProperty(frame) {
        return this.parseNestedAction(frame.innerActionType, frame.currentAnimationName);
    }
}

module.exports = NestedActionParser;