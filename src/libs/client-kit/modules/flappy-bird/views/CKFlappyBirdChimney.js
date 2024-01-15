/**
 * @class
 * @extends _ccs.FlappyBirdChimney
 */
ck.FlappyBirdChimney = _ccs.FlappyBirdChimney.extend({

    ctor: function () {
        _ccs.FlappyBirdChimney.prototype.ctor.call(this);
        this.setCascadeOpacityEnabled(true);
        this._initCircleBody();
    },

    /** @param {FlappyBirdChimney.TYPE} type */
    setType: function (type) {
        switch (type) {
            case FlappyBirdChimney.TYPE.UP:
                this._chimney.setFlippedY(true);
                break;
            case FlappyBirdChimney.TYPE.DOWN:
                this._chimney.setFlippedY(false);
                break;
        }
    },

    _initCircleBody: function () {
        this._circleBodies = FlappyBirdObjectPhysicCircleBodyConfig.getBodyConfigByObjectName("chimney");
        this._circleBodies.forEach(function (circleBody) {
            if (circleBody) {
                circleBody.setParent(this._chimney);
                circleBody.updateFactor(cc.pFromSize(this._chimney), this._chimney.getScaleX() * 0.5);
            }
        }.bind(this));
        this.drawPhysicCircleBody();
    },

    drawPhysicCircleBody: function () {
        var drawCircle = new cc.DrawNode();
        var dXY = cc.pMult(cc.pFromSize(this._chimney), this._chimney.getScaleX() * 0.5);
        for (var i = 0; i < this._circleBodies.length; i++) {
            var circle = this._circleBodies[i];
            var p = cc.pSub(circle.pos, dXY);
            drawCircle.drawCircle(p, circle.radius,
                0.0, 32.0, true, 3, cc.color(255, 255, 255, 100));
        }

        drawCircle.setPosition(cc.p(this._chimney.width * this._chimney.getScaleX() * 0.5 ,
            this._chimney.height * this._chimney.getScaleY() * 0.5));
        this._chimney.addChild(drawCircle);
    },

    /** @return {Array} */
    getCircleBodyToCheckCollision: function () {
        var circles = [];
        this._circleBodies.forEach(function (circle) {
            circles.push({
                "radius": circle.radius,
                "pos": circle.getWorldPosition(this._chimney)
            })
        }.bind(this));
        cc.log("xxx: ", this._chimney.getWorldPosition().x);
        return circles;
    },
});

/**
 * @class
 * @extends ck.FlappyBirdChimney
 */
let FlappyBirdChimney = ck.FlappyBirdChimney;

/** @returns {FlappyBirdChimney} */
FlappyBirdChimney.create = function () {
    return new FlappyBirdChimney();
};

FlappyBirdChimney.TYPE = {
    UP: 1,
    DOWN: 2
}
