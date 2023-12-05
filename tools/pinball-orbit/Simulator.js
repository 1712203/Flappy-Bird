/**
 * @typedef {number} rewardId
 */

var Matter = Matter || {};
var Bodies = Matter.Bodies,
    Body = Matter.Body,
    Composite = Matter.Composite,
    Events = Matter.Events,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Vector = Matter.Vector,
    Vertices = Matter.Vertices,
    Engine = Matter.Engine,
    Svg = Matter.Svg,
    Common = Matter.Common;

if (typeof Utils == "undefined")
    var Utils = require("./libs/utils")

if (typeof module != "undefined")
    var OrbitInfo = require("./OrbitInfo")

var BallLabel = "Ball";
class Simulator {
    constructor() {
        this.padding = 20;
        this.canvasSize = {};
        this.engine = null;
        this.render = null;
        this.ball = null;
        this.ballPositions = [];
        this.currentVelocity = 0;

        this.reachedRewardId = "";
        this.currentPath = [];
        this.collisionIndices = [];
        this.forceInNextFrame = null;

        this.enoughPath = false;
        this.ballLabel = "Ball";
        this._nReward = 0;

        this.config = {
            ballRestitution: 0.8,
            elasticForce: 0.008,
            gravity: 0.8
        };
    }

    setMatter(matter) {
        Matter = matter;
        Bodies = Matter.Bodies;
        Body = Matter.Body;
        Composite = Matter.Composite;
        Events = Matter.Events;
        Render = Matter.Render;
        Runner = Matter.Runner;
        Vertices = Matter.Vertices;
        Vector = Matter.Vector;
        Engine = Matter.Engine;
        Svg = Matter.Svg;
        Common = Matter.Common;
    }

    setConfig(config, specificLimit){
        this.config = config;
        this.limitPathCntByReward = Object.assign({
            "default": {min: config.minPathCnt, max: config.maxPathCnt},
        }, specificLimit) ;
    }

    initPhysicsWorld(data) {
        var bodies = this.createBodies(data);
        if (!bodies)
            return;
        this.engine = Engine.create();
        this.engine.world.gravity.y = this.config.gravity;

        Composite.add(this.engine.world, bodies);
        Runner.run(this.engine);
        Events.on(this.engine, 'collisionStart', this.collisionStart.bind(this));
        Events.on(this.engine, 'beforeUpdate', this.beforeUpdateEngine.bind(this));
    }

    addWallSvg(url){
        Utils.loadSvg(url)
            .then(root => {
                var vertexSets = Utils.select(root, 'path')
                    .map(path => Matter.Svg.pathToVertices(path, 8));

                this.addWallFromVertices(vertexSets);
            })
    }

    addWallFromVertices(vertexSets){
        this.wallVertices = vertexSets;
        var upperLeftPos = Vector.create(10, 10);
        this.wall = Bodies.fromVertices(0, 0, vertexSets, {isStatic: true}, true);
        let {max, min} = this.wall.bounds;
        var diff = Vector.sub(upperLeftPos, min)
        var correctPos = Vector.add(this.wall.position, diff);
        Body.setPosition(this.wall, correctPos);
        Composite.add(this.engine.world, this.wall);
    }

    /** @return {Object<rewardId, OrbitInfo[]>[]} */
    generatePaths() {
        /** @type {Object<rewardId, OrbitInfo[]>[]} */
        var pathToRewards = [];
        var velocities = this.config.velocities;
        this._rewardIds = [];
        for (let i = 1; i <= this._nReward; i++)
            this._rewardIds.push(i);

        for (let i = 0; i < velocities.length; i++)
            pathToRewards.push(this.generatePath(velocities[i]));

        Runner.stop(this.engine);
        return pathToRewards;
    }

    /**
     * @param {number} velocity
     * @return {Object<rewardId, OrbitInfo[]>}
     */
    generatePath(velocity) {
        let i = 0;
        this.currentVelocity = velocity;
        /** @type {Object<rewardId, OrbitInfo[]>} */
        var listPathToReward = {};
        while (true) {
            if (i % 20 == 0)
                console.log("Run simulation velocity i", velocity, i);
            /** @type {{rewardIdStr: string, orbit: OrbitInfo}} */
            var simulationResult = this.runSimulation();
            this.checkSimulationResult(listPathToReward, simulationResult);
            if (this.checkEnoughPath(listPathToReward) || i >= this.config.maxLoop)
                break;
            i++;
        }
        return listPathToReward;
    }

    /**
     * @param {Object<rewardId, OrbitInfo[]>} listPathToReward
     * @param {{rewardIdStr: string, orbit: OrbitInfo}} simulationResult
     * @return {null}
     */
    checkSimulationResult(listPathToReward, simulationResult) {
        var {rewardIdStr, orbit} = simulationResult;
        if (!rewardIdStr)
            return null;

        var rewardLimitation = this.limitPathCntByReward[rewardIdStr];
        rewardLimitation = rewardLimitation || this.limitPathCntByReward["default"];

        /** @type {OrbitInfo[]} */
        var paths = listPathToReward[rewardIdStr] || [];
        var nPath = paths.length;
        if (nPath >= rewardLimitation.max)
            return null;

        var points = orbit.getPoints();
        var nPoint = points.length;
        if (nPoint < this.config.minPointCnt || nPoint > this.config.maxPointCnt)
            return null;

        paths.push(orbit);
        listPathToReward[rewardIdStr] = paths;
    }

    /**
     * @param {Object<rewardId, OrbitInfo[]>} listPathToReward
     * @return {boolean}
     */
    checkEnoughPath(listPathToReward) {
        if (Object.keys(listPathToReward).length <= 0)
            return false;

        for (let i = 0; i < this._rewardIds.length; i++) {
            var rewardId = this._rewardIds[i];
            var rewardLimitation = this.limitPathCntByReward[rewardId];
            rewardLimitation = rewardLimitation || this.limitPathCntByReward["default"];
            if (!listPathToReward[rewardId] || listPathToReward[rewardId].length < rewardLimitation.min) {
                return false;
            }
        }
        return true;
    }

    /** @return {{rewardIdStr: string, orbit: OrbitInfo}} */
    runSimulation() {
        this.resetBall();
        var range = this.config.velocityRandomRange;
        var randomValue = Utils.random(range[0], range[1]);
        var velocity = this.currentVelocity + randomValue;
        this.shootBall(velocity);

        this.forceInNextFrame = null;
        this.currentPath = [];
        this.collisionIndices = [];

        this.reachedRewardId = "";
        for (let i = 0; i < 500; i++) {
            this.updateEngine();
            if (this.reachedRewardId)
                break;
        }
        return {rewardIdStr: this.reachedRewardId, orbit: OrbitInfo.create(this.currentPath, this.collisionIndices)};
    }

    updateEngine() {
        Engine.update(this.engine);
        var pos = this.translateToCCSPoint(this.ball.position);
        pos.x = Utils.roundNumber(pos.x);
        pos.y = Utils.roundNumber(pos.y);
        this.currentPath.push([pos.x, pos.y]);
    }

    onReachReward(rewardLabel) {
        var prefixLen = "_reward".length;
        this.reachedRewardId = rewardLabel.substr(prefixLen);
    }

    beforeUpdateEngine() {
        if (this.forceInNextFrame) {
            Body.applyForce(this.ball, this.ball.position, this.forceInNextFrame);
            this.forceInNextFrame = null;
        }
    }

    collisionStart(event) {
        var pairs = event.pairs;
        for (let i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            var labelA = pair.bodyA.label;
            var labelB = pair.bodyB.label;

            var labelOther = this.isBallAndOther(labelA, labelB);
            if (!labelOther)
                continue;

            if (labelOther == "peg"){
                this.collisionIndices.push(this.currentPath.length);
            }

            if (labelOther.indexOf("_reward") >= 0)
                this.onReachReward(labelOther);

            if (labelOther == "elasticPeg") {
                var forceMagnitude = this.config.elasticForce;
                var normal = pair.collision.normal;
                this.forceInNextFrame = Vector.neg(Vector.mult(normal, forceMagnitude));
            }
        }
    }

    shootBall(vel) {
        Body.setVelocity(this.ball, Vector.create(0, -vel));
    }

    resetBall() {
        this.reachedRewardId = "";
        Body.setAngle(this.ball, 0);
        Body.setVelocity(this.ball, Vector.create(0, 0));

        var position = this.ballPositions[0];
        Body.setPosition(this.ball, position);
    }

    createBodies(data) {
        var widget = parseCCSJson(data);

        /** @type {CCSObject} */
        var layoutContainer = widget.getChildByName("_layoutContainer");
        if (!layoutContainer)
            return null;

        /** @type {CCSObject} */
        var layoutPhysic = layoutContainer.getChildByName("_layoutPhysic");
        var layoutSize = layoutPhysic.getSize();
        this.canvasSize = {width: layoutSize.width + this.padding * 2, height: layoutSize.height + this.padding * 2};

        /** @type {CCSObject} */
        var layoutBoundaries = layoutPhysic.getChildByName("_layoutBoudaries");
        var boundaries = layoutBoundaries.getChildren().map(child => {
            var centerPoint = child.getCenterPosition();
            var size = child.getSize();
            return MatterUtils.createStaticRectangleBody(this.translateToMatterPoint(centerPoint), size.width, size.height);
        });

        /** @type {CCSObject} */
        var layoutPegs = layoutPhysic.getChildByName("_layoutPegs");
        var pegs = layoutPegs.getChildren().map(child => {
            var pos = child.getPosition();
            var size = child.getSize();
            var label = "peg";
            var r = size.width / 2;
            var userData = child.getUserData();
            if (userData && userData.indexOf("elasticPeg") >= 0)
                label = "elasticPeg";

            var body = MatterUtils.createCircleBody(this.translateToMatterPoint(pos), r, {isStatic: true, friction: 0});
            if (label)
                body.label = label;
            return body;
        });

        /** @type {CCSObject} */
        var layoutRewards = layoutPhysic.getChildByName("_layoutRewards");
        var children = layoutRewards.getChildren();
        this._nReward = children.length;
        var rewards = children.map(child => {
            var pos = child.getCenterPosition();
            var size = child.getSize();
            var reward = MatterUtils.createCircleBody(
                this.translateToMatterPoint(pos), size.width/2, {isStatic: true, friction: 0}
            );
            reward.label = child.getName();
            return reward;
        });

        /** @type {CCSObject} */
        var layoutPipes = layoutPhysic.getChildByName("_layoutPipes");
        if (layoutPipes) {
            var pipePositions = layoutPipes.getChildren().map(child => child.getPosition());
            this.ballPositions = pipePositions.map(pos => this.translateToMatterPoint(pos));
        }

        /** @type {CCSObject} */
        let imgBall = layoutPhysic.getChildByName("_imgBall");
        var ballPos = imgBall.getPosition()
        var ballSize = imgBall.getSize();
        this.ball = MatterUtils.createCircleBody(this.translateToMatterPoint(ballPos),
            ballSize.width / 2, {restitution: this.config.ballRestitution, friction: 0});

        this.ball.label = this.ballLabel;
        this.ballPositions = [Vector.clone(this.ball.position)]

        return [...boundaries, ...pegs, ...rewards, this.ball];
    }

    translateToMatterPoint(point) {
        return Vector.create(point.x + this.padding, this.canvasSize.height - point.y - this.padding);
    }

    translateToCCSPoint(point) {
        return Vector.create(point.x - this.padding, this.canvasSize.height - point.y - this.padding);
    }

    isBallAndOther(labelA, labelB) {
        if (labelA != this.ballLabel && labelB != this.ballLabel)
            return null;
        return labelA == this.ballLabel ? labelB : labelA;
    }
}

var MatterUtils = {
    createCircleBody: function (point, radius, options = {}) {
        return Bodies.circle(point.x, point.y, radius, options);
    },

    createStaticRectangleBody: function (pos, width, height) {
        return Bodies.rectangle(pos.x, pos.y, width, height, {isStatic: true, friction: 0});
    },

    createBoundariesFromVertices: function (vertices, thickness) {
        var res = [];
        for (let i = 0; i < vertices.length; i++) {
            var p1 = vertices[i];
            var p2 = i == vertices.length - 1 ? vertices[0] : vertices[i + 1];
            res.push(MatterUtils.createBodyFrom2Point(p1, p2, thickness));
        }
        return res;
    },

    createBodyFrom2Point: function (p1, p2, thickness) {
        var dx = p2.x - p1.x
        var dy = p2.y - p1.y
        var angle = Math.atan2(dy, dx)
        var length = Math.sqrt(dx * dx + dy * dy)
        var vertices = Vertices.fromPath('0 0 ' + length + ' 0 ' + length + ' ' + thickness + ' 0 ' + thickness);
        Vertices.rotate(vertices, angle, {x: 0, y: 0});
        Vertices.translate(vertices, {x: p1.x, y: p1.y});
        var pos = {x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2}
        return Bodies.fromVertices(pos.x, pos.y, vertices, {isStatic: true, friction: 0});
    }
}


if (typeof module != "undefined")
    module.exports = Simulator;

/** @return {CCSObject} */
function parseCCSJson(ccsJson){
    var objectData = ccsJson.Content.Content.ObjectData;
    return new CCSObject(objectData);
}

class CCSObject {
    constructor(jsonData) {
        this._data = jsonData;
        this._children = [];
        var childrenObject = this._data.Children;
        if (childrenObject)
            this._children = childrenObject.map(obj => new CCSObject(obj));
    }


    /** @return {CCSObject[]} */
    getChildren() {
        return this._children;
    }

    /** @return {CCSObject[]} */
    getAnchorPoint() {
        var anchorPoint = this._data.AnchorPoint;
        var anchorX = anchorPoint.ScaleX || 0;
        var anchorY = anchorPoint.ScaleY || 0;
        return Vector.create(anchorX, anchorY);
    }

    /** @return {CCSObject} */
    getChildByName(name) {
        return this.getChildren().find(child => child.getName() == name);
    }

    getPosition() {
        return Vector.create(this._data.Position.X, this._data.Position.Y)
    }

    getCenterPosition() {
        var pos = this.getPosition();
        var anchorPoint = this.getAnchorPoint();
        var size = this.getSize();
        var adjust = Vector.create(size.width * (0.5 - anchorPoint.x), size.height * (0.5 - anchorPoint.y));
        return Vector.add(pos, adjust);
    }

    /** @return {string} */
    getUserData() {
        return this._data.UserData;
    }

    getSize() {
        return {width: this._data.Size.X, height: this._data.Size.Y};
    }

    getName() {
        return this._data.Name;
    }
}