const BaseAnimParser = require("./BaseAnimParser");

class RotationParser extends BaseAnimParser {
    constructor(animName, frames, startFrame, endFrame, speed) {
        super(animName, frames, startFrame, endFrame, speed);
    }

    /**
     * 
     * @param {RotationKeyFrame} frame
     * @param {number} duration
     * @param {RotationKeyFrame} lastFrame
     */
    getAction(frame, duration, lastFrame) {
        let lastFrameX = lastFrame ? lastFrame.x : 0;
        let lastFrameY = lastFrame ? lastFrame.y : 0;
        let deltaAngleX = frame.x - lastFrameX;
        let deltaAngleY = frame.y - lastFrameY;
        return this.getRotationAction(duration, deltaAngleX, deltaAngleY);
    }

    /**
     *
     * @param {RotationKeyFrame} frame
     */
    parseProperty(frame) {
        return this.parseRotation(frame.x);
    }
}

module.exports = RotationParser;