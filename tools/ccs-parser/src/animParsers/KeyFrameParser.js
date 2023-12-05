const config = require("../../config");

let KeyFrameParser = {};
KeyFrameParser.parse = function (json) {
    let keyFrameLine = new KeyFrameLine();
    keyFrameLine.parse(json);
    return keyFrameLine;
}

class KeyFrameLine {
    constructor(actionTag, property, frames) {
        this.actionTag = actionTag || 0;
        this.property = property || "";
        this.frames = frames || [];
    }

    parse(json) {
        this.actionTag = json["ActionTag"];
        this.property = json["Property"];
        this.frames = json["Frames"];

        this.frames = this.frames.map(frame => {
            let keyFrame = this.createKeyFrame();
            if (keyFrame)
                keyFrame.parse(frame);
            return keyFrame;
        }, this).filter(keyFrame => keyFrame !== null);
    }

    createKeyFrame() {
        switch (this.property) {
            case config.AnimProperty.POSITION:
                return new PositionKeyFrame(this.actionTag, this.property);
            case config.AnimProperty.SCALE:
                return new ScaleKeyFrame(this.actionTag, this.property);
            case config.AnimProperty.ROTATION:
                return new RotationKeyFrame(this.actionTag, this.property);
            case config.AnimProperty.OPACITY:
                return new OpacityKeyFrame(this.actionTag, this.property);
            case config.AnimProperty.COLOR:
                return new ColorKeyFrame(this.actionTag, this.property);
            case config.AnimProperty.VISIBLE:
                return new VisibleKeyFrame(this.actionTag, this.property);
            case config.AnimProperty.NESTED_ACTION:
                return new NestedActionKeyFrame(this.actionTag, this.property);
            case config.AnimProperty.SPRITE_FRAME:
                return new SpriteFrameKeyFrame(this.actionTag, this.property);
        }
        return null;
    }

    getFrames() {
        return this.frames;
    }
}

/**
 * @property actionTag {number}
 * @property property {string}
 * @property frameIndex {number}
 * @property easingType {number}
 */
class BaseKeyFrame {
    constructor(actionTag, property, frameIndex, easingType) {
        this.actionTag = actionTag || 0;
        this.property = property || "";
        this.frameIndex = frameIndex || 0;
        this.easingType = easingType || 0;
    }

    parse(json) {
        this.frameIndex = json["FrameIndex"];
        this.easingType = json["EasingData"] ? json["EasingData"]["Type"] : 0;
    }
}

/**
 * @property x {number}
 * @property y {number}
 */
class PositionKeyFrame extends BaseKeyFrame {
    constructor(actionTag, property, frameIndex, easingType, x, y) {
        super(actionTag, property, frameIndex, easingType);
        this.x = x || 0;
        this.y = y || 0;
    }

    parse(json) {
        super.parse(json);
        this.x = json["X"];
        this.y = json["Y"];
    }
}

/**
 * @property x {number}
 * @property y {number}
 */
class ScaleKeyFrame extends BaseKeyFrame {
    constructor(actionTag, property, frameIndex, easingType, x, y) {
        super(actionTag, property, frameIndex, easingType);
        this.x = x || 0;
        this.y = y || 0;
    }

    parse(json) {
        super.parse(json);
        this.x = json["X"];
        this.y = json["Y"];
    }
}

/**
 * @property x {number}
 * @property y {number}
 */
class RotationKeyFrame extends BaseKeyFrame {
    constructor(actionTag, property, frameIndex, easingType, x, y) {
        super(actionTag, property, frameIndex, easingType);
        this.x = x || 0;
        this.y = y || 0;

    }

    parse(json) {
        super.parse(json);
        this.x = json["X"];
        this.y = json["Y"];
    }
}

/**
 * @property value {number}
 */
class OpacityKeyFrame extends BaseKeyFrame {
    constructor(actionTag, property, frameIndex, easingType, value) {
        super(actionTag, property, frameIndex, easingType);
        this.value = value || 0;
    }

    parse(json) {
        super.parse(json);
        this.value = json["Value"];
    }
}

/**
 * @property value {number}
 */
class ColorKeyFrame extends BaseKeyFrame {
    constructor(actionTag, property, frameIndex, easingType, value) {
        super(actionTag, property, frameIndex, easingType);
        this.value = value || 0;
    }

    parse(json) {
        super.parse(json);
        this.value = json["Color"];
    }
}

/**
 * @property value {boolean}
 */
class VisibleKeyFrame extends BaseKeyFrame {
    constructor(actionTag, property, frameIndex, easingType, value) {
        super(actionTag, property, frameIndex, easingType);
        this.value = value || true;
    }

    parse(json) {
        super.parse(json);
        this.value = json["Value"];
    }
}

/**
 * @property innerActionType {string}
 * @property currentAnimationName {string}
 * @property singleFrameIndex {number}
 */
class NestedActionKeyFrame extends BaseKeyFrame {
    constructor(actionTag, property, frameIndex, easingType, innerActionType, currentAnimationName, singleFrameIndex) {
        super(actionTag, property, frameIndex, easingType);
        this.innerActionType = innerActionType || "";
        this.currentAnimationName = currentAnimationName || "";
        this.singleFrameIndex = singleFrameIndex || 0;
    }

    parse(json) {
        super.parse(json);
        this.innerActionType = json["InnerActionType"];
        this.currentAnimationName = json["CurrentAniamtionName"];
        this.SingleFrameIndex = json["SingleFrameIndex"];
    }
}

/**
 * @property textureType {string}
 * @property path {string}
 */
class SpriteFrameKeyFrame extends BaseKeyFrame {
    constructor(actionTag, property, frameIndex, easingType, textureType, path) {
        super(actionTag, property, frameIndex, easingType);
        this.textureType = textureType || "";
        this.path = path || "";
    }

    parse(json) {
        super.parse(json);
        this.textureType = json["TextureFile"]["Type"];
        this.path = json["TextureFile"]["Path"];
    }
}

module.exports = KeyFrameParser;