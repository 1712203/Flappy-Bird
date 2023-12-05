const BaseAnimParser = require("./BaseAnimParser");

class ColorParser extends BaseAnimParser {
    constructor(animName, frames, startFrame, endFrame, speed) {
        super(animName, frames, startFrame, endFrame, speed);
    }

    /**
     * 
     * @param {OpacityKeyFrame} frame
     * @param {number} duration
     * @param {ScaleKeyFrame} lastFrame
     */
    getAction(frame, duration, lastFrame) {
        return this.getTintAction(duration, frame.value);
    }

    /**
     *
     * @param {ColorKeyFrame} frame
     */
    parseProperty(frame) {
        return this.parseColor(frame.value);
    }

    getTintAction(duration, color){
        color = this.getColor(color);
        return "cc.tintTo({duration}, {color})"
            .replace("{duration}", duration)
            .replace("{color}", color);
    }
}

module.exports = ColorParser;