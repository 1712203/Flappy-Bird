/**
 * @namespace
 */
ck.cache = {};

/**
 * @param {string} key
 * @return {boolean}
 */
ck.cache.has = function (key) {
    const value = cc.sys.localStorage.getItem(key);
    return value !== null && value !== undefined;
};

/**
 * @param {string} key
 */
ck.cache.remove = function (key) {
    cc.sys.localStorage.removeItem(key);
};

/**
 * Clear cache
 */
ck.cache.clear = function () {
    cc.sys.localStorage.clear();
};

/**
 * @param {string} key
 * @param {string} [defaultValue=""]
 * @return {string}
 */
ck.cache.getString = function (key, defaultValue = "") {
    return cc.sys.localStorage.getItem(key) || defaultValue;
};

/**
 * @param {string} key
 * @param {string} value
 */
ck.cache.setString = function (key, value) {
    cc.sys.localStorage.setItem(key, value)
};

/**
 * @param {string} key
 * @param {number} [defaultValue=0]
 * @return {number}
 */
ck.cache.getNumber = function (key, defaultValue = 0) {
    const value = cc.sys.localStorage.getItem(key);
    if (value === null || value === undefined || value === "") {
        return defaultValue;
    }
    return Number(value);
};

/**
 * @param {string} key
 * @param {number} value
 */
ck.cache.setNumber = function (key, value) {
    cc.sys.localStorage.setItem(key, value)
};

/**
 * @param {string} key
 * @param {boolean} defaultValue
 * @return {boolean}
 */
ck.cache.getBool = function (key, defaultValue) {
    defaultValue = defaultValue || false;
    const value = cc.sys.localStorage.getItem(key);
    if (value === null || value === undefined || value === "") {
        return defaultValue;
    }
    return Number(value) !== 0;
};

/**
 * @param {string} key
 * @param {boolean} value
 */
ck.cache.setBool = function (key, value) {
    cc.sys.localStorage.setItem(key, value ? 1 : 0);
};
