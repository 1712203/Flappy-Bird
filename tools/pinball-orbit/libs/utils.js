var Utils = {
    random: function (min, max) {
        return Math.random() * (max - min) + min;
    },

    randomSign: function (min, max) {
        return Math.random() > 0.5 ? 1 : -1;
    },

    degreesToRadians: function (angle) {
        return angle * Math.PI / 180;
    },

    radiansToDegrees: function (angle) {
        return angle * 180 / Math.PI;
    },

    roundNumber: function (float) {
        return Math.round(float * 1000) / 1000;
    },

    select: function (root, selector) {
        return Array.prototype.slice.call(root.querySelectorAll(selector));
    },

    loadSvg: function (url) {
        return fetch(url)
            .then(response => response.text())
            .then(raw => (new window.DOMParser()).parseFromString(raw, 'image/svg+xml'));
    }
}

if (typeof module != "undefined")
    module.exports = Utils;