let vm = require("vm");
let fs = require("fs");
let XLSX = require("./xlsx.mini.min");
let filterKeywords = require("./filterKeywords");
let dirRoot = "../"

let fileName = process.argv.length >= 3? process.argv[2] : "Texts.xlsx";
let folderExport = process.argv.length >= 4? process.argv[3] : "temp";

let config = {
    blankCell: "#N/A",
    prefix: "",
    indentation: "  ", //"\t" or 4 spaces, or 2 spaces
    exportDir: dirRoot + folderExport,
    localizeDir: dirRoot + "localize",
    newline: "\r\n",
    sheetIndex: 0,
    inputDir: dirRoot + "xlsx",
    projectResDir: "",
    allTxtName: "ALL.txt",
    keyMapName: "KeyMap.json",
    srcDir: dirRoot + "../../src",
    missingFileName: "Missing.xlsx",
    localizeFileName: "Localize_{country}.xlsx",
}

if (!fs.existsSync(config.exportDir)){
    fs.mkdirSync(config.exportDir)
}
if (!fs.existsSync(config.localizeDir)){
    fs.mkdirSync(config.localizeDir)
}
// make missing xlsx
let allTextKeySet = new Set();
readAllFilesInDirectory(config.srcDir, (filePath)=>{
    let texts = getAllTextInFile(filePath);
    texts.forEach(text => allTextKeySet.add(text));
});

// read all text sheet except Missing file
let files = fs.readdirSync(config.inputDir);
let listSheetJson = [];
let keyMap = {};
let listSheetString = "";
//["KEY", "VN", "EN", ...]
let markets = [];

files.forEach((file) => {
    if (file === config.missingFileName || file.startsWith("~$") || !file.endsWith("xlsx"))
        return;
    let path = config.inputDir + "/" + file;
    var sheetJson = readTextSheet(path);

    listSheetString += `---------------------------------------[${path}]---------------------------------------${config.newline}`;
    listSheetString += JSON.stringify(sheetJson, null, 4);
    listSheetString += `${config.newline}${config.newline}`;
    keyMap[path] = sheetJson.slice(1).map(row => row[0]);
    markets = sheetJson.shift();
    sheetJson.forEach(row => row.file = file);
    listSheetJson.push(sheetJson);
}, this);

let mergedSheetJson = [].concat.apply([], listSheetJson);
let mergedSheetKeys = mergedSheetJson.map(row => row[0]);
let missingKeys = [];
allTextKeySet.forEach(key => {
    if (mergedSheetKeys.indexOf(key) < 0) missingKeys.push(key);
}, this);

let missingJsonSheet = missingKeys.map(key => {
    return [key, key.substr(4).replace(/_/g, " ")];
});

let finalSheetJson = [...mergedSheetJson, ...missingJsonSheet];
saveMissingText([markets, ...missingJsonSheet]);

listSheetString += `---------------------------------------[${config.inputDir + "/" + config.missingFileName}]---------------------------------------${config.newline}`;
listSheetString += JSON.stringify(missingJsonSheet, null, 4);
writeToFile(listSheetString, config.exportDir, config.allTxtName)
writeToFile(JSON.stringify(keyMap, null, 4), config.exportDir, config.keyMapName)
let finalLangObject = createLangObject(finalSheetJson, markets);
let localizeObject = createLocalizeObject(mergedSheetJson, markets);
exportLangObject(finalLangObject);
saveLocalizeText(localizeObject);

/**
 * @param {string} path: xlsx file path
 * @return {string[][]} 2-dimensions from excel file
 */
function readTextSheet(path) {
    let xls = fs.readFileSync(path);
    let workbook = XLSX.read(xls);
    let sheetName = workbook.SheetNames[config.sheetIndex];
    let sheet = workbook.Sheets[sheetName];

    //Get real range, which actually has data, original range include formatted cell
    let topLeftCell = { c: null, r: null };
    let botRightCell = { c: null, r: null };
    for (let attr in sheet) {
        if (attr[0] === '!')
            continue;
        let cell = attr;
        let col = cell.replace(/[^a-zA-Z]+/g, '');
        let row = parseInt(cell.replace(/[^0-9]+/g, ''));
        if (!topLeftCell.r || topLeftCell.r > row)
            topLeftCell.r = row;
        if (!topLeftCell.c || topLeftCell.c > col)
            topLeftCell.c = col;
        if (!botRightCell.r || botRightCell.r < row)
            botRightCell.r = row;
        if (!botRightCell.c || botRightCell.c < col)
            botRightCell.c = col;
    }

    sheet["!ref"] = `${topLeftCell.c}${topLeftCell.r}:${botRightCell.c}${botRightCell.r}`;
    /* sheetJson example:
        ["KEY", "VN", "EN", "TK"],
        ["TXT_KEY", "Text Vi", "Text EN, ""],
        . . .
     */
    return XLSX.utils.sheet_to_json(sheet, {header: 1, defval: config.blankCell, blankrows: false});
}

function readAllFilesInDirectory(path, doFunction) {
    let files = fs.readdirSync(path);
    files.forEach((file, index) => {
        let subPath = path + "/" + file;
        if (fs.statSync(subPath).isDirectory()) {
            readAllFilesInDirectory(subPath, doFunction)
        } else {
            if (typeof doFunction === "function") doFunction(subPath);
        }
    }, this);
}

/**
 * @param {string} filePath
 * @return {string[]}
 */
function getAllTextInFile(filePath) {
    let fileString = fs.readFileSync(filePath).toString();
    return fileString.split("\"TXT_").map((subString, index) => {
        if (index === 0) return "";
        let markIndex = subString.indexOf("\"");
        return "TXT_" + subString.substr(0, markIndex);
    }, this).filter(string => string !== "");
}

/**
 * @param {[][]} allTexts [[TXT_KEY, "Text VI", "Text EN"], ...]
 * @param {string[]} countries [KEY, VN, EN,...]
 * @return {Object<country, Object<key, text>[]>}
 */
function createLangObject(allTexts, countries){
    var res = {};
    for (let i = 1; i < countries.length; i++) {
        res[countries[i]] = {};
    }

    /** @type {Object<key, file[]>} */
    let sourceFileInfo = {};
    /** @type {[Object<key, value>]} */
    let ignoreKeyValues = [];

    allTexts.forEach(rowTexts => {
        var key = rowTexts[0];
        if (!sourceFileInfo[key])
            sourceFileInfo[key] = [];
        sourceFileInfo[key].push(rowTexts.file);

        for(var i = 1; i < rowTexts.length; i++){
            let market = countries[i];
            let text = rowTexts[i];
            let defaultText = rowTexts[1];
            if (!res[market][key] && text !== config.blankCell){ //Check key is existed
                if (isIgnoreValue(key) || isIgnoreValue(text)) {
                    ignoreKeyValues.push({
                        key: key, value: text
                    });
                } else res[market][key] = text;
            }
            else if (defaultText) res[market][key] = defaultText;
        }
    })

    for (let key in sourceFileInfo){
        if (sourceFileInfo.hasOwnProperty(key)){
            if (sourceFileInfo[key].length >= 2)
                console.log(`WARNING: KEY DUPLICATE: ${key} in [${sourceFileInfo[key].join(", ")}]`);
        }
    }

    ignoreKeyValues.forEach(obj => {
        console.log(`IGNORE KEY: ${obj.key} - ${obj.value}`);
    })
    return res;
}

function isIgnoreValue(value) {
    let result = false;
    filterKeywords.forEach(keyWord => {
        if (value.toLowerCase().includes(keyWord.toLowerCase())) result = true;
    });
    return result;
}

/**
 * @param {[][]} allTexts [[TXT_KEY, "Text VI", "Text EN"], ...]
 * @param {string[]} countries [KEY, VN, EN,...]
 * @return {Object<country, Object<key, text>[]>}
 */
function createLocalizeObject(allTexts, countries){
    let localize = {};
    for (let i = 1; i < countries.length; i++) {
        localize[countries[i]] = {};
    }

    allTexts.forEach(rowTexts => {
        let key = rowTexts[0];
        let defaultMarket = countries[1];
        let defaultText = rowTexts[1];
        for(var i = 1; i < rowTexts.length; i++){
            let market = countries[i];
            if (!localize[market][key]){ //Check key is existed
                let text = rowTexts[i];
                if (text === config.blankCell) {
                    localize[market][key] = rowTexts[i];
                    localize[defaultMarket][key] = defaultText;
                }
            }
        }
    })
    return localize;
}

/**
 * Create XX.json file
 * @param {Object<country, Object<key, text>[]>} langObject
 */
function exportLangObject(langObject) {
    console.log("Start export");
    for (let market in langObject){
        if (!langObject.hasOwnProperty(market))
            continue;
        let jsonStr = JSON.stringify(langObject[market], (k, v) => {
            if (typeof v =="string")
                v = v.replace(/\r+/g, "\r")
                    .replace(/\\n/g, "\n")
                    .replace(/\r\n/g, "\n");
            return v;
        }, config.indentation);
        let fileName = config.prefix + market + ".json";
        writeToFile(jsonStr, config.exportDir, fileName);
    }
}

/**
 * Create XX.json file
 * @param {Object<country, Object<key, text>[]>} langObject
 */
function exportLocalizeObject(langObject) {
    console.log("Start export");
    for (let market in langObject){
        if (!langObject.hasOwnProperty(market))
            continue;
        let jsonStr = JSON.stringify(langObject[market], (k, v) => {
            if (typeof v =="string")
                v = v.replace(/\\n/g, "\n")
                    .replace(/\r\n/g, "\n");
            return v;
        }, config.indentation);
        let fileName = config.prefix + market + ".json";
        writeToFile(jsonStr, config.exportDir, fileName);
    }
}

function writeToFile(str, dir, fileName){
    fs.writeFile(dir + "/" + fileName, str, (err) => {
        if (err)
            console.log('\x1b[31m', "Error has occurred when write file: " + fileName, err);
        else console.log('\x1b[0m', "Done " + fileName);
    });
}

function saveMissingText(dataArray) {
    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet(dataArray, {skipHeader: true});
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, config.inputDir + "/" + config.missingFileName, {type: "file"});
}

function saveLocalizeText(localizeObject) {
    let localizeMarkets = Object.keys(localizeObject);
    let defaultMarketKey = localizeMarkets[0];
    let defaultMarketObject = localizeObject[defaultMarketKey];
    for (let i = 1; i < localizeMarkets.length; i++) {
        let market = localizeMarkets[i];
        let object = localizeObject[market];
        let dataArray = [];
        let header = ["KEY", defaultMarketKey, market];
        dataArray.push(header);

        for (let j = 0; j < Object.keys(object).length; j++) {
            let key = Object.keys(object)[j];
            let defaultText = defaultMarketObject[key];
            dataArray.push([key, defaultText, ""]);
        }

        let wb = XLSX.utils.book_new();
        let ws = XLSX.utils.json_to_sheet(dataArray, {skipHeader: true});
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        XLSX.writeFile(wb, config.localizeDir + "/" + config.localizeFileName.replace("{country}", market), {type: "file"});
    }
}