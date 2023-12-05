/**
 * @class
 * @static
 */
ck.TimeUtils = {};

/**
 * @class
 * @static
 */
let TimeUtils = ck.TimeUtils;

/**
 * @constant
 * @type {number}
 */
ck.SECONDS_PER_HOUR = 3600;

/**
 * @constant
 * @type {number}
 */
ck.HOURS_PER_DAY = 24;

/**
 * @constant
 * @type {number}
 */
ck.SECONDS_PER_DAY = 86400;

/**
 * @constant
 * @type {number}
 */
ck.MILLISECONDS_PER_DAY = 86400000;

/**
 * @constant
 * @type {number}
 */
ck.SECONDS_PER_MINUTE = 60;

/**
 * @constant
 * @type {number}
 */
ck.MINUTES_PER_HOUR = 60;

/**
 * 8,640,000,000,000 seconds <br/>
 * The Max Date (Converted to seconds) that can be represented in JavaScript <br/>
 * @constant
 * @type {number}
 */
ck.MAX_DATE_AS_SECONDS = 8640000000000;

/**
 * Returns unix time in milliseconds
 * @returns {number}
 */
TimeUtils.now = function () {
    return Date.now();
};

/**
 * Returns unix time in seconds
 * @returns {number}
 */
TimeUtils.getCurrentSecond = function () {
    return Math.round(Date.now() * 0.001);
};

/**
 * Returns is expired based on expiredTime
 * @param {number} expiredTime (unix time in seconds)
 * @returns {boolean}
 */
TimeUtils.isExpired = function (expiredTime) {
    return expiredTime <= TimeUtils.getCurrentSecond();
};

/**
 * Returns time string with format '00:00:00'
 * @param {number} seconds
 * @example
 */
TimeUtils.formatTime = function (seconds) {
    if (seconds <= 0) return '00:00:00';
    const hours = Math.floor(seconds / ck.SECONDS_PER_HOUR);
    const minutes = Math.floor(seconds / ck.SECONDS_PER_MINUTE) % ck.MINUTES_PER_HOUR;
    const secondsLeft = seconds % ck.SECONDS_PER_MINUTE;
    return ck.StringUtils.padNumber(hours, 2) + ':'
        + ck.StringUtils.padNumber(minutes, 2) + ':'
        + ck.StringUtils.padNumber(secondsLeft, 2);
};

/**
 * Returns time string with format '00:00:00'
 * @param {number} seconds
 * @example
 */
TimeUtils.formatTimeMMSS = function (seconds) {
    if (seconds <= 0) return '00:00';
    const minutes = Math.floor(seconds / ck.SECONDS_PER_MINUTE) % ck.MINUTES_PER_HOUR;
    const secondsLeft = seconds % ck.SECONDS_PER_MINUTE;
    return ck.StringUtils.padNumber(minutes, 2) + ':'
        + ck.StringUtils.padNumber(secondsLeft, 2);
};

/**
 * Returns time string with format `10d20h`
 * @param {number} seconds
 * @returns {string}
 */
TimeUtils.toDDHH = function (seconds) {
    const isValid = seconds > 0;
    const day = isValid ? Math.floor(seconds / ck.SECONDS_PER_DAY) : 0;
    const hour = isValid ? Math.floor(seconds / ck.SECONDS_PER_HOUR) % ck.HOURS_PER_DAY : 0;
    return cc.formatStr('%dd %dh', day, hour);
};

/**
 * Returns time string with format DDHH if time is longer than a day or 00:00:00 otherwise
 * @param {number} seconds
 * @returns {string} DDHH if day > 0, else HH:MM:SS
 */
TimeUtils.formatCountdownTime = function (seconds) {
    let day = Math.floor(seconds / ck.SECONDS_PER_DAY);
    return day > 0 ? TimeUtils.toDDHH(seconds) : TimeUtils.formatTime(seconds);
};

/**
 * Returns current day string in English
 * Some usages: used for cache data that only available in a day
 * @returns {string}
 * @example
 * "Thu Jan 01 2022" -> Today is Thursday 01/01/2022
 */
TimeUtils.getCurrentDateString = function () {
    const date = new Date();
    return date.toDateString();
};

/**
 * @example Wed Nov 23 2022
 * @param {number} currentSeconds
 * @return {string}
 */
TimeUtils.toDateString = function (currentSeconds) {
    const date = new Date(currentSeconds * 1000);
    return date.toDateString();
};

/**
 * @example Wed Nov 23 2022 18:23:16 GMT+0700 (SE Asia Standard Time)
 * @param {number} currentSeconds
 * @return {string}
 */
TimeUtils.toFullDateString = function (currentSeconds) {
    const date = new Date(currentSeconds * 1000);
    return date.toString();
};

/**
 * If day > 0, returns '10d' </br>
 * If hours > 0, returns '10h' </br>
 * If minutes > 0, returns '10m' </br>
 * returns '10s' </br>
 * @param seconds
 * @return {string}
 */
TimeUtils.toString = function (seconds) {
    if (seconds <= 0) return '0d';
    const days = Math.ceil(seconds / ck.SECONDS_PER_DAY);
    if (days > 1) return cc.formatStr('%dd', days);
    const hours = Math.ceil(seconds / ck.SECONDS_PER_HOUR);
    if (hours > 1) return cc.formatStr('%dh', hours);
    const minutes = Math.ceil(seconds / ck.SECONDS_PER_MINUTE);
    if (minutes > 1) return cc.formatStr('%dm', minutes);
    return cc.formatStr('%ds', seconds);
};

/**
 *
 * @param timeServer {Number} time server (seconds)
 * @return {String} a string of time with format: @numTime@ @typeTime@ ago/left
 *
 * @example
 * var str = TimeUtils.getTimeText(now - 125 second);
 * str is "2 minute ago"
 */
TimeUtils.getTimeText = function (timeServer) {
    const currentSecond = gm.system.data.getServerTime();
    const duration = Math.abs(Math.floor(currentSecond - timeServer));
    const minute = Math.floor(duration / ck.SECONDS_PER_MINUTE % ck.MINUTES_PER_HOUR);
    const hour = Math.floor(duration / ck.SECONDS_PER_HOUR % ck.HOURS_PER_DAY);
    const day = Math.floor(duration / ck.SECONDS_PER_DAY);
    let typeTime;
    let textTime;
    if (day > 0) {
        textTime = day.toString();
        typeTime = gm.localize.getText("DAY_TEXT");
    } else if (hour > 0) {
        textTime = hour.toString();
        typeTime = gm.localize.getText("HOUR_TEXT");
    } else if (minute > 0) {
        textTime = minute.toString();
        typeTime = gm.localize.getText("MINUTE_TEXT");
    } else {
        textTime = duration.toString();
        typeTime = gm.localize.getText("SECOND_TEXT");
    }

    let str;
    if (currentSecond - timeServer > 0) {
        str = gm.localize.getText("TXT_FORMAT_TIME_AGO");
        str = str.replace("{time}", textTime);
        str = str.replace("{type}", typeTime);
    } else if (currentSecond === timeServer) {
        str = gm.localize.getText("TXT_A_MOMENT_AGO");
    } else {
        str = gm.localize.getText("TXT_FORMAT_TIME_AFTER");
        str = str.replace("{time}", textTime);
        str = str.replace("{type}", typeTime);
    }
    return str;
};

/**
 * Returns current num of days
 * @returns {number}
 */
TimeUtils.getCurrentNumOfDays = function () {
    return Math.floor(new Date().getTime() / ck.MILLISECONDS_PER_DAY);
};

/**
 * @param {Number} seconds
 * @param {Number} maxUnit
 * @param {Boolean} shortType ? 3d 1h 5m 4s | 3 Day 1 hours 5 minutes 4 seconds
 * @returns {String}
 *
 * @example
 * var str = TimeUtils.formatDurationTime(72000, 1, false);
 * str is "20 hour"
 *
 * var str = TimeUtils.formatDurationTime(70, 2, true);
 * str is "1m10s"
 */
TimeUtils.formatDurationTime = function (seconds, maxUnit, shortType = false) {
    seconds = seconds || 0;
    maxUnit = maxUnit || 4;
    var txtDay = shortType ? "d" : gm.localize.getText('DAY_TEXT');
    var txtHour = shortType ? "h" : gm.localize.getText('HOUR_TEXT');
    var txtMinute = shortType ? "m" : gm.localize.getText('MINUTE_TEXT');
    var txtSecond = shortType ? "s" : gm.localize.getText('SECOND_TEXT');

    var day = Math.floor(seconds / 86400);
    var hour = Math.floor((seconds / 3600) % 24);
    var minute = Math.floor((seconds % 3600) / 60);
    var second = seconds % 60;

    var res = '';
    var count = 0;
    var space = shortType ? '' : ' '
    if (day > 0) {
        count++;
        res += day + space + txtDay;
    }
    if (hour > 0 && count < maxUnit) {
        count++;
        res += ' ' + hour + space + txtHour;
    }
    if (minute > 0 && count < maxUnit) {
        count++;
        res += ' ' + minute + space + txtMinute;
    }
    if (count < 1 || (second > 0 && count < maxUnit)) {
        count++;
        res += ' ' + second + space + txtSecond;
    }

    res.trim();

    return res;
};

TimeUtils.isNight = function () {
    let hours = (new Date()).getHours();
    cc.log(hours);
    return hours <= 6 || hours >= 18
}