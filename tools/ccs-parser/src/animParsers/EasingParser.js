const config = require("../../config");

let EasingParser = {};

EasingParser.getEasing = function (easingType) {
    switch (easingType) {
        case config.EasingType.LINEAR:
            return "";
        case config.EasingType.SINE_EASEIN:
            return "easeSineIn"
        case config.EasingType.SINE_EASEOUT:
            return "easeSineOut"
        case config.EasingType.SINE_EASEINOUT:
            return "easeSineInOut"
        case config.EasingType.QUAD_EASEIN:
            return "easeQuadraticActionIn"
        case config.EasingType.QUAD_EASEOUT:
            return "easeQuadraticActionOut"
        case config.EasingType.QUAD_EASEINOUT:
            return "easeQuadraticActionInOut"
        case config.EasingType.CUBIC_EASEIN:
            return "easeCubicActionIn"
        case config.EasingType.CUBIC_EASEOUT:
            return "easeCubicActionOut"
        case config.EasingType.CUBIC_EASEINOUT:
            return "easeCubicActionInOut"
        case config.EasingType.QUART_EASEIN:
            return "easeQuarticActionIn"
        case config.EasingType.QUART_EASEOUT:
            return "easeQuarticActionOut"
        case config.EasingType.QUART_EASEINOUT:
            return "easeQuarticActionInOut"
        case config.EasingType.QUINT_EASEIN:
            return "easeQuinticActionIn"
        case config.EasingType.QUINT_EASEOUT:
            return "easeQuinticActionOut"
        case config.EasingType.QUINT_EASEINOUT:
            return "easeQuinticActionInOut"
        case config.EasingType.EXPO_EASEIN:
            return "easeExponentialIn"
        case config.EasingType.EXPO_EASEOUT:
            return "easeExponentialOut"
        case config.EasingType.EXPO_EASEINOUT:
            return "easeExponentialInOut"
        case config.EasingType.CIRC_EASEIN:
            return "easeCircleActionIn"
        case config.EasingType.CIRC_EASEOUT:
            return "easeCircleActionOut"
        case config.EasingType.CIRC_EASEINOUT:
            return "easeCircleActionInOut"
        case config.EasingType.ELASTIC_EASEIN:
            return "easeElasticIn"
        case config.EasingType.ELASTIC_EASEOUT:
            return "easeElasticOut"
        case config.EasingType.ELASTIC_EASEINOUT:
            return "easeElasticInOut"
        case config.EasingType.BACK_EASEIN:
            return "easeBackIn"
        case config.EasingType.BACK_EASEOUT:
            return "easeBackOut"
        case config.EasingType.BACK_EASEINOUT:
            return "easeBackInOut"
        case config.EasingType.BOUNCE_EASEIN:
            return "easeBounceIn"
        case config.EasingType.BOUNCE_EASEOUT:
            return "easeBounceOut"
        case config.EasingType.BOUNCE_EASEINOUT:
            return "easeBounceInOut"
    }
    return "";
}

module.exports = EasingParser;