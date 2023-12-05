/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.anim
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 */
_ccs.anim = {};

_ccs.anim.getActionButtonRelease = function (speed = 1) {
    return cc.sequence(
    cc.spawn(
        cc.sequence(
            cc.scaleTo(20 / (60 * speed), 1.05, 1.05).easing(cc.easeCubicActionOut()),
            cc.scaleTo(5 / (60 * speed), 1, 1),
            cc.delayTime(35 / (60 * speed))
        )
    )
);
};

_ccs.anim.getActionButtonPress = function (speed = 1) {
    return cc.sequence(
    cc.spawn(
        cc.sequence(
            cc.scaleTo(15 / (60 * speed), 0.8, 0.8).easing(cc.easeCubicActionOut()),
            cc.scaleTo(5 / (60 * speed), 0.82, 0.82),
            cc.scaleTo(5 / (60 * speed), 0.8, 0.8),
            cc.delayTime(35 / (60 * speed))
        )
    )
);
};

_ccs.anim.getActionGoToMiddleAndOut = function (speed = 1) {
    return cc.sequence(
    cc.spawn(
        cc.sequence(
            cc.moveTo(15 / (60 * speed), 320, 568).easing(cc.easeBackOut()),
            cc.moveTo(30 / (60 * speed), 320, 568),
            cc.moveTo(15 / (60 * speed), 889.6, 568).easing(cc.easeBackIn())
        ),
        cc.sequence(
            cc.scaleTo(15 / (60 * speed), 1, 1).easing(cc.easeBackOut()),
            cc.scaleTo(30 / (60 * speed), 1, 1),
            cc.scaleTo(15 / (60 * speed), 1.2, 0.8).easing(cc.easeBackIn())
        ),
        cc.sequence(
            cc.rotateBy(15 / (60 * speed), 0, 0).easing(cc.easeBackOut()),
            cc.rotateBy(30 / (60 * speed), 0, 0),
            cc.rotateBy(15 / (60 * speed), 0, 0).easing(cc.easeBackIn())
        )
    )
);
};