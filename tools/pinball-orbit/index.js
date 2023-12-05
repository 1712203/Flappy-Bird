fetch("../../res/_ccs/pinball/PinballTable.json")
    .then((response) => response.json())
    .then((data) => onFetchData(data));

/** @type {Simulator} */
var simulator;
function onFetchData(data){
    simulator = new Simulator();
    simulator.initPhysicsWorld(data);
    simulator.resetBall();
    simulator.addWallSvg("./images/wall.svg");

    var render = Render.create({
        element: document.body,
        engine: simulator.engine,
        options: {
            width: simulator.canvasSize.width,
            height: simulator.canvasSize.height,
            wireframes: true,
            // showAngleIndicator: true,
        }
    });
    Render.run(render);
}

function testMap(vel){
    if (!vel)
        vel = Utils.random(23, 31);
    console.log("Run Test. Velocity = ", vel)
    simulator.resetBall();
    simulator.shootBall(vel);
}

function downloadVertices(){
    saveAsJson(simulator.wallVertices, "Event20WallVertices")
}

function saveAsJson(object, fileName){
    var blob = new Blob([JSON.stringify(object)], {type: "text/json"});
    saveAs(blob, fileName + ".json");
}

