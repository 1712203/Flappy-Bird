/**
 * String utility
 * @static
 * @class
 */
ck.StringUtils = {};

ck.StringUtils.NUMBER_CHARS = ["", "K", "M", "B", "T"]

ck.StringUtils.DELIMITER = ",";

/**
 * @static
 * @class
 */
let StringUtils = ck.StringUtils;

/**
 * Base64 table - used for base64 decode
 * @constant
 * @type {string}
 */
StringUtils.BASE64_TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

/**
 * Pad front string with chars
 * @param {string} str
 * @param {number} targetLength
 * @param {string} char
 */
StringUtils.padStar = function (str, targetLength, char) {
    let copy = str.slice();
    while (copy.length < targetLength) {
        copy = char + copy;
    }
    return copy;
};

/**
 * Pad front number with zeros
 * @param {number} number
 * @param {number} targetLength
 * @returns {string}
 * @example
 * StringUtils.padNumber(3, 5) -> "00003"
 * StringUtils.padNumber(25, 5) -> "00025"
 */
StringUtils.padNumber = function (number, targetLength) {
    return StringUtils.padStar(number.toString(), targetLength, "0");
};

/**
 * @param {number} targetLength
 * @returns {string}
 */
Number.prototype.pad = function (targetLength) {
    return StringUtils.padNumber(this, targetLength);
};

/**
 * Decode base64 string
 * @param {string} data
 * @returns {string|Array}
 */
StringUtils.base64Decode = function (data) {
    let o1, o2, o3, h1, h2, h3, h4, bits, i = 0;
    const result = [];
    if (!data) return data;
    data += "";
    do {
        h1 = StringUtils.BASE64_TABLE.indexOf(data.charAt(i++));
        h2 = StringUtils.BASE64_TABLE.indexOf(data.charAt(i++));
        h3 = StringUtils.BASE64_TABLE.indexOf(data.charAt(i++));
        h4 = StringUtils.BASE64_TABLE.indexOf(data.charAt(i++));
        bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
        o1 = bits >> 16 & 0xff;
        o2 = bits >> 8 & 0xff;
        o3 = bits & 0xff;
        result.push(o1);
        if (h3 !== 64) {
            result.push(o2);
            if (h4 !== 64) {
                result.push(o3);
            }
        }
    } while (i < data.length);
    return result;
};

/**
 * Helper function for base64 decoder
 * @param {string} key
 * @param {number} i
 */
StringUtils.keyCharAt = function (key, i) {
    return key.charCodeAt(Math.floor(i % key.length));
};

/**
 * XOR Decrypt
 * @param {string} key
 * @param {string} data
 */
StringUtils.xorDecrypt = function (key, data) {
    let str = "";
    for (let i = 0; i < data.length; i++) {
        str += String.fromCharCode(data[i] ^ StringUtils.keyCharAt(key, i));
    }
    return str;
};

/**
 * XOR decode
 * @param {string} data
 * @param {string} key
 */
StringUtils.decodeXOR = function (data, key) {
    if (!data) return "";
    data = StringUtils.base64Decode(data);
    return StringUtils.xorDecrypt(key, data);
};

/**
 * @param {number} value
 * @param {number} [fractionDigits=2]
 * @return {string}
 * @example
 *
 */
ck.StringUtils.abbreviateNumber = function (value, fractionDigits = 2) {
    let signChar = value < 0 ? '-' : '';
    value = Math.abs(value);
    var newValue = value.toString();
    if (value >= 1000) {
        var suffixNum = Math.floor(ck.Math.log(1000, value)) || 0;
        let abbreviateValue = (suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value);
        if (abbreviateValue % 1 !== 0) {
            abbreviateValue = abbreviateValue.toFixed(fractionDigits);
        }
        newValue = abbreviateValue + ck.StringUtils.NUMBER_CHARS[suffixNum];
    }
    return signChar + newValue;
};


/**
 * Convert number to string with commas
 * If number >= maxValue or number <= minValue, it will be abbreviated (Ex. 10m, 20.5b, 12k)
 * @param {number} number
 * @param {number} [maxValue=1000000000000] - Default value is 1.000.000.000.000
 * @param {number} [minValue=-maxValue] - Default value -maxValue
 * @returns {string} Formatted string
 * @example
 * StringUtils.formatNumber(123456789.1234) -> '123,456,789.12'
 */
StringUtils.formatNumber = function (number, maxValue, minValue, fractionDigits = 2) {
    if (maxValue === undefined) maxValue = 1000000000000;
    if (minValue === undefined) minValue = -maxValue;
    const inRange = number < maxValue && number > minValue;
    if (inRange) {
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + ck.StringUtils.DELIMITER);
    }

    return ck.StringUtils.abbreviateNumber(number, fractionDigits);
};

ck.StringUtils.formatNumberMaxChar = function (number, maxCharacter) {
    if (!maxCharacter)
        return ck.StringUtils.formatNumber(number);

    var maxValue = Math.pow(10, maxCharacter);
    return ck.StringUtils.formatNumber(number, maxValue);
}

/**
 * Make a string shorter with max length of string and postfix character
 * @param {string} string
 * @param {number} maxLength Default value is 8
 * @param {string} postfix Default value is "..."
 * @returns {string} Shorted string
 * @example
 * StringUtils.formatNumber("shorter this string", 10) -> "shorter th..."
 */
StringUtils.shortString = function (string, maxLength = 8, postfix = "...") {
    if (!string)
        return "";
    if (string.length <= maxLength)
        return string;
    return string.substring(0, maxLength) + postfix;
};

/**
 * Get a formatted error message
 * @param {string} message Message
 * @param {number} code Error code
 */
StringUtils.getErrorMessage = function (message, code) {
    return cc.formatStr("%s (%d)", message, code);
};

/**
 * @param {string} str
 * @param {number} [defaultValue=0]
 * @return {number}
 */
StringUtils.toNumber = function (str, defaultValue = 0) {
    if (str === null || str === undefined) return defaultValue;
    if (!cc.isString(str)) {
        if (!cc.isFunction(str.toString)) {
            return Number(str) || defaultValue;
        }
        str = str.toString();
    }
    str = str.split(ck.StringUtils.DELIMITER).join('');
    return Number(str) || defaultValue;
};

/**
 * Get all var of an url. Return a object with key:value
 * @param {string} str
 * @return {Object}
 */
StringUtils.getVarsFromUrl = function (str) {
    var vars = {};
    var parts = str.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
};
