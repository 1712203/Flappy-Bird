const fs = require("fs");
const path = require("path");
const config = require('./config.js');
const FileUtils = require('../utils/FileUtils.js');
const Parser = require('./src/Parser.js')

function main() {
    FileUtils.clearDir(config.CLASS_DIR);
    Parser.parseClasses(config.CCS_DIR);
    Parser.parseAnimFile(config.ANIM_DIR);
}

main();