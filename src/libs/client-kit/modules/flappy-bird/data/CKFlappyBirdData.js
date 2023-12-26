/**
 * @class
 * @extends ck.BaseData
 * @property {FlappyBirdCharacter.COLOR} birdColor
 */
ck.FlappyBirdData = ck.BaseData.extend({

    /** @type {FlappyBirdCharacter.COLOR} */
    _birdColor: 1,

    ctor: function () {
        ck.BaseData.prototype.ctor.call(this);
    },

    reset: function () {
        ck.BaseData.prototype.reset.call(this);

        this._birdColor = FlappyBirdCharacter.COLOR.YELLOW;
    },

    /** @return {FlappyBirdCharacter.COLOR} */
    getBirdColor: function () { return this._birdColor; }
});

/**
 * @class
 * @extends ck.FlappyBirdData
 */
let FlappyBirdData = ck.FlappyBirdData;

/**
 * @returns {FlappyBirdData}
 */
FlappyBirdData.create = function () {
    return new FlappyBirdData();
};

/**
 * @return {ck.FlappyBirdData}
 */
ck.FlappyBirdData.create = function () {
    return new ck.FlappyBirdData();
}


let _p = ck.FlappyBirdData.prototype;
cc.defineGetterSetter(_p, "birdColor", _p.getBirdColor);
_p = null;
