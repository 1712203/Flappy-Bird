const fs = require("fs");
const path = require("path");

let FileUtils = {};

/**
 * Iterator to each file/folder in a dir (include sub-dirs) and call a function with each sub dir
 * @param {string} rootDir
 * @param {function(fileDir: string)} fileCallback
 * @param {function(fileDir: string)} [folderCallback=null]
 */
FileUtils.forEach = function (rootDir, fileCallback, folderCallback = null) {
    const dirs = fs.readdirSync(rootDir);
    dirs.forEach(dir => {
        let fullDir = path.resolve(rootDir, dir);
        if (fs.lstatSync(fullDir).isFile()) {
            fileCallback && fileCallback(fullDir);
        } else {
            FileUtils.forEach(fullDir, fileCallback, folderCallback);
        }
    });
    folderCallback && folderCallback(rootDir);
};

/**
 * Remove a folder and its content
 * @param {string} rootDir
 */
FileUtils.removeDir = function (rootDir) {
    if (!fs.existsSync(rootDir)) return;
    const fileCb = fileDir => fs.unlinkSync(fileDir);
    const folderCb = folder => fs.rmdirSync(folder);
    FileUtils.forEach(rootDir, fileCb, folderCb);
};

/**
 * Create a directory if it not exists yet
 * @param {string} dir
 */
FileUtils.makeDir = function (dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
};

/**
 * Remove all contents inside a directory
 * @param {string} dir
 */
FileUtils.clearDir = function (dir) {
    FileUtils.removeDir(dir);
    FileUtils.makeDir(dir);
};

/**
 * Ensure a directory exist, if it not create it
 * @param {string} dir
 */
FileUtils.ensureDirectoryExistence = function (dir) {
    if (fs.existsSync(dir)) return;
    FileUtils.ensureDirectoryExistence(path.dirname(dir));
    fs.mkdirSync(dir);
};

/**
 * Create an empty file
 * @param {string} fileDir
 */
FileUtils.createFile = function (fileDir) {
    FileUtils.ensureDirectoryExistence(path.dirname(fileDir));
    fs.writeFileSync(fileDir, '');
};

/**
 * @param {string} fileDir
 * @return {string}
 */
FileUtils.getFileNameWithoutExtension = function (fileDir) {
    if(!fileDir) return "";
    let arr = fileDir.match(/([^\/]+)\.[^\/]+$/);
    return arr && arr[1] ? arr[1] : "";
};

/**
 * @param {string} srcFilePath
 * @param {string} destFilePath
 * @param {boolean} overwrite
 */
FileUtils.copyFile = function (srcFilePath, destFilePath) {
    if (!fs.existsSync(srcFilePath)) {
        console.log("[FileUtils.copyFile] ERROR: input file path not found: " + srcFilePath);
        return;
    }
    fs.copyFile(srcFilePath, destFilePath, (error) => {
        if (error) console.log("[FileUtils.copyFile] ERROR: " + error);
    });
};

module.exports = FileUtils;