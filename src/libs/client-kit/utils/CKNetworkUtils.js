/**
 * @class
 * @static
 */
ck.NetworkUtils = {};

/**
 * @class
 * @static
 */
let NetworkUtils = ck.NetworkUtils;

/**
 * @constant
 * @type {number}
 */
NetworkUtils.DEFAULT_TIMEOUT = 10000;

/**
 * Send a http get request
 * @param {string} url http/https url
 * @param {Function} callback callback(isSuccess, data) - data is json string
 */
NetworkUtils.sendHttpGet = function (url, callback) {
    if (!url) {
        if (cc.isFunction(callback)) {
            callback(false, null);
        }
        return;
    }
    const timeout = setTimeout(function () {
        if (cc.isFunction(callback)) {
            callback(false, null);
        }
    }, NetworkUtils.DEFAULT_TIMEOUT);

    const cb = function (isSuccess, data) {
        clearTimeout(timeout);
        if (cc.isFunction(callback)) {
            callback(isSuccess, data);
        }
    };

    const xhr = cc.loader.getXMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status <= 207)) {
            cb(true, xhr.responseText);
        }
        else {
            cb(false, null);
        }
    };
    xhr.onerror = function () {
        cb(false, null);
    };
    xhr.ontimeout = function () {
        cb(false, null);
    };
    xhr.onabort = function () {
        cb(false, null);
    };
    xhr.timeout = 10000;
    xhr.open("GET", url, true);
    xhr.send();
};

/**
 * Send a http get request (return json object)
 * @param {string} url http/https url
 * @param {Function} callback callback(isSuccess, data)
 */
NetworkUtils.sendHttpGetJson = function (url, callback) {
    return NetworkUtils.sendHttpGet(url, function(isSuccess, data){
        if (isSuccess) {
            const obj = JSON.parse(data);
            if (cc.isFunction(callback)) {
                callback(true, obj);
            }
        } else {
            if (cc.isFunction(callback)) {
                callback(false, null);
            }
        }
    });
};