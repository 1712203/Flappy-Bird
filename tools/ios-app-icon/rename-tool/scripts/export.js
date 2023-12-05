let fs = require("fs");
let config = require("./config.js");
let FileUtils = require("./FileUtils");

FileUtils.clearDir(config.outputRoot);
Object.entries(config.SIMPLE_FILE_NAME).forEach(([dimension, filename]) => {
    if (!fs.existsSync(config.inputRoot)) {
        console.log("ERROR: input dir path not found: " + config.inputRoot);
        return;
    }

    const inputFilePath = config.inputRoot + "/" + filename;
    if (!fs.existsSync(inputFilePath)) {
        console.log("ERROR: input file path not found: " + inputFilePath);
        return;
    }

    const filenameWithDimension = config.CONVERTED_FILE_NAME[dimension];
    if (Array.isArray(filenameWithDimension)) {
        filenameWithDimension.forEach(f => copy(filename, f));
    } else {
        copy(filename, filenameWithDimension);
    }
})

function copy(inputFileName, outputFileName) {
    const inputFilePath = config.inputRoot + "/" + inputFileName;
    const outputFilePath = config.outputRoot + "/" + outputFileName;
    FileUtils.copyFile(inputFilePath, outputFilePath);
}