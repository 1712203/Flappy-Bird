let fs = require("fs");
let XLSX = require("./xlsx.mini.min");
let dirRoot = "../"

let config = {
    blankCell: "#N/A",
    prefix: "",
    indentation: "  ", //"\t" or 4 spaces, or 2 spaces
    newline: "\r\n",
    sheetIndex: 0,
    missingFileName: "Missing.xlsx",
}

class KeyDetail {
    constructor(key, market, value) {
        this.key = key || "";
        this.market = market || "";
        this.value = value || ""
    }
}

/** @type {Map<String, KeyDetail>} */
let gMapKey = new Map();

let importRoot = dirRoot + "import";
importFolder(importRoot);

let exportRoot = dirRoot + "xlsx";
applyForAllExportFile(exportRoot);

function importFolder(folderPath) {
    if (!fs.existsSync(folderPath)) {
        console.log("ERROR! Import folder not exits. Path: " + folderPath);
        return ;
    }
    let importFiles = fs.readdirSync(folderPath);
    if (importFiles.length <= 0) {
        console.log("ERROR! Import folder don't have any file. Path: " + folderPath);
        return ;
    }
    gMapKey.clear();
    importFiles.forEach(file => {
        importFile(folderPath + "/" + file);
    });
}

function importFile(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log("ERROR! Import file not exits. Path: " + filePath);
        return;
    }
    let json = fileToJson(filePath);
    let markets = json.shift();
    json.forEach(row => {
        let key = row[0];
        markets.forEach((market, index) => {
            if (market.toUpperCase() === "KEY" || market.toUpperCase() === "EN") return;
            let val = row[index];
            if (val === "" || val === config.blankCell || val === null || val === undefined) {
                console.log("ERROR! Don't have market value for this key yet. Market: " + market);
                console.log("Key: " + key);
                return;
            }
            gMapKey.set(key, new KeyDetail(key, market, val));
        })
    })
}

function getColIndexByMarket(markets, market) {
    return markets.map(m => m.toUpperCase()).indexOf(market.toUpperCase());
}

function applyForAllExportFile(folderPath) {
    if (!fs.existsSync(folderPath)) {
        console.log("ERROR! Export folder not exits. Path: " + folderPath);
        return ;
    }
    let exportFiles = fs.readdirSync(folderPath);
    if (exportFiles.length <= 0) {
        console.log("ERROR! Export folder don't have any file. Path: " + folderPath);
        return ;
    }
    exportFiles.forEach(file => {
        applyForExportFile(folderPath + "/" + file, file);
    });
}

function applyForExportFile(filePath, fileName) {
    if (fileName === config.missingFileName) return;
    if (!fs.existsSync(filePath)) {
        console.log("ERROR! Export file not exits. Path: " + filePath);
        return;
    }
    let xls = fs.readFileSync(filePath);
    let workbook = XLSX.read(xls, {cellStyles: true, cellText: true, cellDates: true, cellNF: true});
    let sheetName = workbook.SheetNames[config.sheetIndex];
    let sheet = workbook.Sheets[sheetName];
    let changed = false;
    let json = workbookToJson(workbook);
    let markets = json[0];
    json.forEach((row, index) => {
        let key = row[0];
        let keyDetail = gMapKey.get(key);
        if (!keyDetail) return;
        let c = getColIndexByMarket(markets, keyDetail.market);
        let r = index;
        let cellData = keyDetail.value;
        let cell = getCell(sheet, r, c);
        if (cell !== undefined && cell.v !== undefined) {
            console.log("WARNING: Cell value in this cell be replaced!");
            console.log("File path: " + filePath);
            console.log("Address: " + XLSX.utils.encode_cell({c: c, r: r}));
            console.log("Old value: " + cell.v);
        }
        addValueToSheet(sheet, cellData, r, c);
        changed = true;
    })
    if (changed) {
        XLSX.writeFile(workbook, filePath, {cellStyles: true, cellText: true, cellDates: true, cellNF: true});
        console.log("SUCCESSFUL: " + fileName + " was changed!");
    }
}

/**
 * @param path
 * @return {[]}
 */
function fileToJson(path) {
    let xls = fs.readFileSync(path);
    let workbook = XLSX.read(xls);
    return workbookToJson(workbook);
}

function workbookToJson(workbook) {
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

function getCell(sheet, row, col) {
    let addr = XLSX.utils.encode_cell({c: col, r: row});
    return sheet[addr];
}

function addValueToSheet(sheet, value, row, col) {
    let addr = XLSX.utils.encode_cell({c: col, r: row});
    XLSX.utils.sheet_add_aoa(sheet, [[value]], {origin: addr});
}