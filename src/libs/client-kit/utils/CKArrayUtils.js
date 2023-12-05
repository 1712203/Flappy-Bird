/**
 * @class
 * @static
 */
ck.ArrayUtils = {};

/**
 * @class
 * @static
 */
let ArrayUtils = ck.ArrayUtils;

/**
 * Shuffle an array using Fisher-Yates modern algorithm
 * @param {Array} array - Array will be modified
 * @returns The modified array
 */
ArrayUtils.shuffle = function (array) {
    if (!array) return;
    let currentIndex = array.length, randomIndex;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        const temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
};

/**
 * Merge 2 map into 1
 * @param {Map} mapA
 * @param {Map} mapB
 * @return {Map}
 */
ArrayUtils.mergeMaps = function (mapA, mapB) {
    let result = new Map();
    mapA.forEach((value, key) => {
        result.set(key, value);
    });
    mapB.forEach((value, key) => {
        result.set(key, value);
    });
    return result;
};

/**
 * Create an array with 'length' and fill with '0'
 * @param length
 * @return {number[]}
 */
ArrayUtils.createZeros = function (length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(0);
    }
    return arr;
};

/**
 * @param {any[]} array
 * @param {function(value: any, index: number, obj: any[]): boolean} predicate
 * @example
 *     ck.ArrayUtils.remove(items, item => item.getID() === id);
 */
ck.ArrayUtils.removeIf = function (array, predicate) {
    const index = array.findIndex(predicate);
    if (index < 0) return;
    array.splice(index, 1);
};

/**
 * @param {any[]} array
 * @param {number} index0
 * @param {number} index1
 * @example
 *     ck.ArrayUtils.swap(0, 1);
 */
ck.ArrayUtils.swap = function (array, index0, index1) {
    if (!cc.isArray(array) || array.length < 2 || index0 === index1) return;
    let temp = array[index0];
    array[index0] = array[index1];
    array[index1] = temp;
};
