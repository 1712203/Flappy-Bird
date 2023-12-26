/**
 * @class
 * @extends cc.Class
 * @property {cc.Point} pos
 * @property {Number} radius
 * @property {ccui.Widget} parent
 */
let ObjectCircleBody = cc.Class.extend({
    /** @type {cc.Point} */
    pos: null,

    /** @type {Number} */
    radius: 0,

    /** @type {ccui.Widget} */
    parent: null,

    /**
     * @param {cc.Point} pos
     * @param {Number} radius
     * */
    ctor: function (pos, radius) {
        this.pos = pos;
        this.radius = radius;
    },

    /**
     * @param {cc.Point} point
     * @param {Number} factor
     * */
    updateFactor: function (point, factor) {
        var dXY = cc.pMult(point, factor);
        this.pos = cc.pSub(this.pos, dXY);
    },

    /** @param {ccui.Widget} parent */
    setParent: function (parent) {
        this.parent = parent;
    },

    /** @return {cc.Point} */
    getWorldPosition: function () {
        return this.parent ? this.parent.convertToWorldSpace(this.pos) : this.pos;
    }
})

/**
 * @class
 * @extends cc.Class
 */
var ObjectCircleConfigInfo = cc.Class.extend({
    /** @param {String} */
    name: "",

    /** @type {ObjectCircleBody[]} */
    circleBody: null,

    ctor: function () {
        this.circleBody = [];
    },

    /**
     * @param {cc.Point} point
     * @param {Number} factor
     * */
    updateFactor: function (point, factor) {
        this.circleBody.forEach(function (circle) {
            if (circle) circle.updateFactor(point, factor);
        });
    }
});

let FlappyBirdObjectPhysicCircleBodyConfig = (function () {
    return {
        /** @type {{name circleBody: {pos, radius}[]}[]} */
        dataConfig: null,

        /** @type {Object<String, ObjectCircleConfigInfo>} */
        listConfig: null,

        init: function (data) {
            if (data == null) return;
            this.dataConfig = data;
            this.listConfig = {};
            this.readConfig();
        },

        readConfig: function () {
            var config = null;

            this.dataConfig.forEach(function(info){
                config = new ObjectCircleConfigInfo();
                config.name = info["name"];
                var circles = info["circleBody"];
                circles.forEach(function(circle){
                    var pos = circle["pos"];
                    var radius = circle["radius"];
                    config.circleBody.push(new ObjectCircleBody(cc.p(pos["x"], pos["y"]), radius));
                })
                this.listConfig[config.name] = config;
            }.bind(this))
        },

        /**
         * @param {String} name
         * @return {ObjectCircleBody[]}
         * */
        getBodyConfigByObjectName: function (name) {
            var config = this.listConfig[name];
            return config ?  [...config.circleBody] : null;
        }
    }
})();
