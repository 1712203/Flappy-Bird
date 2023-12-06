/**
 * @class
 * @extends ck.BaseData
 */
ck.FlappyBirdData = ck.BaseData.extend({

    ctor: function () {
        ck.BaseData.prototype.ctor.call(this);
    },

    reset: function () {
        ck.BaseData.prototype.reset.call(this);
    },
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
};

let LoginData = ck.FlappyBirdData;
