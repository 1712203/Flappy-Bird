let Matter = require("./libs/matter");
var Simulator = require("./Simulator")
var fs = require("fs");
var vm = require("vm");

var ProjectDir = "../../";
var InputFile = ProjectDir + "res/_ccs/pinball/PinballTable.json";
var WallVerticesFile = "./Event20WallVertices.json";
var OutputJson = "./output/PinballOrbitConfig.json";
var OutputBin = ProjectDir + "res/configs/PinballOrbitConfig.bin";

var config = {
    ballRestitution: 0.8, //Độ nảy của banh, càng lớn càng nảy
    elasticForce: 0.008, //Không dùng
    gravity: 0.8, //Trọng lực (từ 0-1)

    maxPointCnt: 500, //Độ dài tối đa của orbit
    minPointCnt: 100, //Độ dài tối thiểu của orbit
    minPathCnt: 15, //Số orbit tối thiểu đến ô đích với lực v
    maxPathCnt: 30, //Số orbit tối đa đến ô đích với lực v
    maxLoop: 50000, //Số lần chạy giả lập tối đa với lực v, cho dù chưa đủ số orbit thỏa mãn cũng dừng
    velocities: [
        24,
        26,
        28,
        30,
    ],
    velocityRandomRange: [-1, 1]
}

//Một số quà quý hiếm gặp thì không cần sinh quá nhiều orbit
var specificLimit = {
    "5": {min: 5, max: 10},
    "12": {min: 10, max: 15},
}

runScript("./libs/decomp.js");
var simulator = new Simulator();
simulator.setMatter(Matter);
simulator.setConfig(config, specificLimit);
var data = JSON.parse(fs.readFileSync(InputFile));
simulator.initPhysicsWorld(data);
var wallVertices = JSON.parse(fs.readFileSync(WallVerticesFile));
simulator.addWallFromVertices(wallVertices[0]);

/** @type {Object<rewardId, OrbitInfo[]>[]} */
var generatedOrbits = simulator.generatePaths();
var summary = {};
generatedOrbits.forEach((pathsByReward, index) => {
    summary[index] = {};
    Object.keys(pathsByReward).forEach(rewardId => {
        summary[index][rewardId] = pathsByReward[rewardId].length;
    })
})
console.table(summary);
fs.writeFileSync(OutputJson, JSON.stringify(generatedOrbits));

writeOrbit(generatedOrbits, OutputBin);
console.log("DONE");

function convertTypedArray(src, type) {
    var buffer = new ArrayBuffer(src.byteLength);
    var baseView = new src.constructor(buffer).set(src);
    return new type(buffer);
}

/**
 * @param {Object<rewardId, OrbitInfo[]>[]} generatedOrbits
 * @param {string} output
 */
function writeOrbit(generatedOrbits, output){
    console.log("Processing...");
    var writer = fs.createWriteStream(output);
    var nForce = generatedOrbits.length;
    var nReward = Object.keys(generatedOrbits[0]).length;
    writer.write(new Uint8Array([nForce]));
    writer.write(new Uint8Array([nReward]));

    for(var i = 0; i < nForce; i++){
        var pathsByReward = generatedOrbits[i];
        for(let rewardId in pathsByReward){
            /** @type {OrbitInfo[]} */
            var pathConfigs = pathsByReward[rewardId];

            var nPathFromForceToReward = pathConfigs.length;
            writer.write(new Uint8Array([nPathFromForceToReward]));

            pathConfigs.forEach(orbitInfo => {
                let path = orbitInfo.getPoints();
                let collisionIndices = orbitInfo.getCollisionIndices();

                var nPoint = convertTypedArray(new Uint16Array([path.length]), Uint8Array);
                writer.write(nPoint);

                var numbers = [];
                path.forEach(Array2 => {numbers.push(...Array2);})
                var points = convertTypedArray(new Float32Array(numbers), Uint8Array);
                writer.write(points);

                var nCollision = convertTypedArray(new Uint16Array([collisionIndices.length]), Uint8Array);
                writer.write(nCollision);

                var indices = convertTypedArray(new Uint16Array(collisionIndices), Uint8Array);
                writer.write(indices);
            })
        }
    }
    console.log("Exporting...");
    writer.end();
    console.log("Exported file successful!");
}

function runScript(file){
    //Run lib to create XLSX Object
    var files = fs.readFileSync(file);
    var scriptStr = files.toString();
    const script = new vm.Script(scriptStr);
    script.runInThisContext();
}
