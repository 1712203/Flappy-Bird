/**
 * @class
 * @extends cc.Class
 * @property {cc.Point} pos
 * @property {Number} radius
 * @property {ccui.Widget} parent
 */
let ObjectCircleBody = cc.Class.extend({
    /**
     * @param {cc.Point} pos
     * @param {Number} radius
     * */
    ctor: function (pos, radius) {
        /** @type {cc.Point} */
        this.pos = pos;

        /** @type {Number} */
        this.radius = radius;

        /** @type {ccui.Widget} */
        this.parent = null;

        /** @type {cc.Point} */
        this.factorPos = cc.p(0, 0);
    },

    /**
     * @param {cc.Point} point
     * @param {Number} factor
     * */
    updateFactor: function (point, factor) {
        var dXY = cc.pMult(point, factor);
        this.factorPos = cc.pSub(this.pos, dXY);
    },

    /** @param {ccui.Widget} parent */
    setParent: function (parent) {
        this.parent = parent;
    },

    /** @return {cc.Point} */
    getWorldPosition: function (parent) {
        return parent ? parent.convertToWorldSpace(this.pos) : this.factorPos;
    }
})

/**
 * @class
 * @extends cc.Class
 */
var ObjectCircleConfigInfo = cc.Class.extend({
    ctor: function () {
        /** @param {String} */
        this.name = "";

        /** @type {ObjectCircleBody[]} */
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
            return config ?  Array.from(config.circleBody) : null;
        }
    }
})();
