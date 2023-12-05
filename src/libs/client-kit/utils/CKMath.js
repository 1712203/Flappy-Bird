/**
 * @class
 * @static
 */
ck.Math = {};

/**
 * Random float in range [min, max)
 * @param {number} min
 * @param {number} max
 * @return {number}
 * @example
 *  var float = ck.Math.randomFloat(1, 100); // --> 50.21
 */
ck.Math.randomFloat = function (min, max) {
    return Math.random() * (max - min) + min;
};

/**
 * Random integer in range [min, max]
 * @param {number} min
 * @param {number} max
 */
ck.Math.randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Random an array index
 * @param {number} length Array length
 */
ck.Math.randomArrayIndex = function (length) {
    return ck.Math.randomInt(0, length - 1);
};

/**
 * Random a point inside a circle quarter (x >= 0 and y >= 0)
 * @param {number} radius - Circle radius
 * @returns {cc.Point}
 */
ck.Math.randomPointInCircleQuarter = function (radius) {
    const x = ck.Math.randomFloat(0, radius);
    const maxY = Math.sqrt(radius * radius - x * x);
    const y = ck.Math.randomFloat(0, maxY);
    return cc.p(x, y);
};

/**
 * Caculate Logarithm to base 'base' of 'value'.
 * If base <= 0 || value <= 0, return NaN.
 * If base == 1 && value == 1, return NaN.
 * @param {Number} base
 * @param {Number} value
 * @returns {Number} Logarithm to base 'base' of 'value'
 * @example
 * log(2, 8) = 3
 * log(0, 0) = NaN
 * log(10, 10000) = 4
 */
ck.Math.log = function (base, value) {
    if (base <= 0 || value <= 0) {
        return NaN;
    }
    return Math.log(value) / Math.log(base);
}

/**
 * Returns value clamped to the range [minValue, maxValue]
 * @param {number} value
 * @param {number} minValue
 * @param {number} maxValue
 * @returns {number}
 */
ck.Math.clamp = function (value, minValue, maxValue) {
    return Math.min(Math.max(value, minValue), maxValue);
}
