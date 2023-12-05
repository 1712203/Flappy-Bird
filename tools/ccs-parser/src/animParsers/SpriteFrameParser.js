const BaseAnimParser = require("./BaseAnimParser");

class SpriteFrameParser extends BaseAnimParser {
    constructor(animName, frames, startFrame, endFrame, speed) {
        super(animName, frames, startFrame, endFrame, speed);
    }

    /**
     * 
     * @param {SpriteFrameKeyFrame} frame
     * @param {number} duration
     * @param {SpriteFrameKeyFrame} lastFrame
     */
    getAction(frame, duration, lastFrame) {
        return this.getSpriteFrameAction(duration, frame.textureType, frame.path);
    }

    /**
     *
     * @param {SpriteFrameKeyFrame} frame
     */
    parseProperty(frame) {
        return this.parseSpriteFrame(frame.textureType, frame.path);
    }

    _getMainActionFromArrAction(arrAction) {
        if (arrAction.length <= 0) return "";
        return this.getSequence(arrAction);
    }

    parseAction() {
        let frames = this.frames.filter(frame => frame.frameIndex >= this.startFrame && frame.frameIndex <= this.endFrame);
        if (frames.length <= 0) return "";
        let isAnimationFrameByFrame = true;
        if (frames.length < 2) isAnimationFrameByFrame = false;
        else {
            let frameStep = frames[1].frameIndex - frames[0].frameIndex;
            for (let i = 2; i < frames.length; i++) {
                if (frameStep !== (frames[i].frameIndex - frames[i-1].frameIndex))
                    isAnimationFrameByFrame = false;
            }
        }

        if (isAnimationFrameByFrame) {
            return this.parseAnimationFrameByFrame();
        } else {
            return super.parseAction();
        }
    }

    parseAnimationFrameByFrame() {
        let frames = this.frames.filter(frame => frame.frameIndex >= this.startFrame && frame.frameIndex <= this.endFrame);
        if (frames.length <= 0) return "";
        let animationName = `ANIMATION_${this.animName}_${this.nodeName}`;
        let frameStep = frames[1].frameIndex - frames[0].frameIndex;
        let duration = this.getDuration(frameStep);
        let framePaths = frames.map(frame => '"' + frame.path + '"');
        let framePathStr = `[${framePaths.join(", ")}]`;
        return `AnimationUtils.createFrameByFrame("${animationName}", ${framePathStr}, ${duration}, 1)`;
    }
}

module.exports = SpriteFrameParser;