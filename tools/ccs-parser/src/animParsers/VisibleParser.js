const BaseAnimParser = require("./BaseAnimParser");

class VisibleParser extends BaseAnimParser {
    constructor(animName, frames, startFrame, endFrame, speed) {
        super(animName, frames, startFrame, endFrame, speed);
    }

    /**
     * 
     * @param {VisibleKeyFrame} frame
     * @param {number} duration
     * @param {VisibleKeyFrame} lastFrame
     */
    getAction(frame, duration, lastFrame) {
        return this.getVisibleAction(duration, frame.value);
    }

    /**
     *
     * @param {VisibleKeyFrame} frame
     */
    parseProperty(frame) {
        return this.parseVisible(frame.value);
    }

    _getMainActionFromArrAction(arrAction) {
        if (arrAction.length <= 0) return "";
        return this.getSequence(arrAction);
    }
}

module.exports = VisibleParser;