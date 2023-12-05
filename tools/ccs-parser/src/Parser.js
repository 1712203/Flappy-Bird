const fs = require("fs");
const path = require("path");
const FileUtils = require("../../utils/FileUtils");
const config = require("../config");
const AnimParser = require("./animParsers/AnimParser");
const AnimFileParser = require("./animParsers/AnimFileParser");
const ParserResult = require("./ParserResult");
const BaseParser = require("./parsers/BaseParser");
const CCNodeParser = require("./parsers/CCNodeParser");
const CCSpriteParser = require("./parsers/CCSpriteParser");
const CCProgressTimerParser = require("./parsers/CCProgressTimerParser");
const CCUIButtonParser = require("./parsers/CCUIButtonParser");
const CCUIImageViewParser = require("./parsers/CCUIImageViewParser");
const CCUITextParser = require("./parsers/CCUITextParser");
const CCUITextBMFontParser = require("./parsers/CCUITextBMFontParser");
const CCUILayoutParser = require("./parsers/CCUILayoutParser");
const CCUIListViewParser = require("./parsers/CCUIListViewParser");
const CKLoadingBarParser = require("./parsers/CKLoadingBarParser");
const CCUIPageViewParser = require("./parsers/CCUIPageViewParser");
const CCUIScrollViewParser = require("./parsers/CCUIScrollViewParser");
const CCUICheckBoxParser = require("./parsers/CCUICheckBoxParser");
const AvatarParser = require("./parsers/AvatarParser");
const CCEditBoxParser = require("./parsers/CCEditBoxParser");
const AsyncButtonParser = require("./parsers/AsyncButtonParser");
const CKEditBoxParser = require("./parsers/CKEditBoxParser");
const CKTextFieldParser = require("./parsers/CKTextFieldParser");
const RichTextParser = require("./parsers/RichTextParser");
const ChatHistoryWidgetParser = require("./parsers/ChatHistoryWidgetParser");
const CKSlotParser = require("./parsers/CKSlotParser");
const CKSlotMachineParser = require("./parsers/CKSlotMachineParser");

let Parser = {};

/**
 * @param jsonDir
 * @return {string}
 */
Parser.parseClassName = function (jsonDir) {
    return path.basename(jsonDir).replace('.json', '');
};

/**
 * @param json
 */
Parser.parseExtendClassName = function (json) {
    const type = json["Type"] || "";
    return config.EXTEND_CLASSES[type] || config.DEFAULT_EXTEND_CLASS;
};

/**
 * @param json
 * @return {string}
 */
Parser.getNodeClassName = function (json) {
    const customClassName = json["FrameEvent"];
    if (customClassName) {
        return customClassName;
    }
    const type = json["ctype"];
    if (type === "ProjectNodeObjectData")
        return FileUtils.getFileNameWithoutExtension(json["FileData"]["Path"]);
    return config.TYPE_TO_CLASS[type] || "cc.Node";
};

/**
 * @param className
 * @return {BaseParser}
 */
Parser.getParser = function (className) {
    switch (className) {
        case config.Classes.CC_NODE:
            return new CCNodeParser(className);
        case config.Classes.CC_SPRITE:
            return new CCSpriteParser(className);
        case config.Classes.CC_PROGRESS_TIMER:
            return new CCProgressTimerParser(className);
        case config.Classes.CC_EDITBOX:
            return new CCEditBoxParser(className);
        case config.Classes.CCUI_BUTTON:
            return new CCUIButtonParser(className);
        case config.Classes.CCUI_IMAGE_VIEW:
            return new CCUIImageViewParser(className);
        case config.Classes.CCUI_TEXT:
            return new CCUITextParser(className);
        case config.Classes.CCUI_TEXT_BM_FONT:
            return new CCUITextBMFontParser(className);
        case config.Classes.CCUI_LAYOUT:
            return new CCUILayoutParser(className);
        case config.Classes.CCUI_LISTVIEW:
            return new CCUIListViewParser(className);
        case config.Classes.CK_LOADING_BAR:
            return new CKLoadingBarParser(className);
        case config.Classes.CCUI_PAGE_VIEW:
            return new CCUIPageViewParser(className);
        case config.Classes.CCUI_SCROLL_VIEW:
            return new CCUIScrollViewParser(className);
        case config.Classes.CCUI_CHECK_BOX:
            return new CCUICheckBoxParser(className);
        case config.Classes.AVATAR:
            return new AvatarParser(className);
        case config.Classes.ASYNC_BUTTON:
            return new AsyncButtonParser(className);
        case config.Classes.CK_EDITBOX:
            return new CKEditBoxParser(className);
        case config.Classes.CK_TEXT_FIELD:
            return new CKTextFieldParser(className);
        case config.Classes.RICH_TEXT:
            return new RichTextParser(className);
        case config.Classes.CHAT_HISTORY_WIDGET:
            return new ChatHistoryWidgetParser(className);
        case config.Classes.CK_SLOT:
            return new CKSlotParser(className);
        case config.Classes.CK_SLOT_MACHINE:
            return new CKSlotMachineParser(className);
    }
    return new BaseParser(className);
};

/**
 * Parse a json to a node
 * @param {string} json - ccs json object
 * @param {string} [parent="this"] - parent string
 * @param {string} [parentType=""] - parent type string
 * @return {ParserResult}
 */
Parser.parseChild = function (json, parent = "this", parentType = "") {
    const className = Parser.getNodeClassName(json);
    if(className === "Fake") return new ParserResult();
    const parser = Parser.getParser(className);
    let result = parser.parse(json, parent, parentType);
    const name = json["Name"];
    const actionTag = json["ActionTag"];
    result.putActionTag(actionTag, name);
    result.append(Parser.parseChildren(json, "this." + name, className));
    result.appendCode(parser.parseAfterInitAllChild(json));
    return result;
};

/**
 * @param {string} json - ccs json object
 * @param {string} [parent="this"] - parent string
 * @param {string} [parentType=""] - parent type string
 * @return {ParserResult}
 */
Parser.parseChildren = function (json, parent = "this", parentType = "") {
    let result = new ParserResult();
    let children = json["Children"];
    if (!children) return result;
    children.forEach(json => {
        result.append(Parser.parseChild(json, parent, parentType));
    });
    return result;
};

/**
 * Parse class from a ccs json file and write it to 'src/_ccs' folder
 * @param {string} jsonDir - ccs json file dir
 */
Parser.parseClass = function (jsonDir) {
    if (!jsonDir.endsWith('.json')) return;
    const json = JSON.parse(fs.readFileSync(jsonDir, 'utf8'));
    const userData = json["Content"]["Content"]["ObjectData"]["UserData"];
    const isAbstract = userData && userData.includes("Abstract");
    const isMainLayer = userData && userData.includes("MainLayer");
    const isFullScreenPopup = userData && userData.includes("FullScreenPopup");
    let templateFile = config.TEMPLATE_CLASS_FILE;
    if (isAbstract) templateFile = config.TEMPLATE_ABSTRACT_CLASS_FILE;
    else if (isMainLayer) templateFile = config.TEMPLATE_MAIN_LAYER_CLASS_FILE;
    else if (isFullScreenPopup) templateFile = config.TEMPLATE_FULL_SCREEN_POPUP_CLASS_FILE;
    const template = fs.readFileSync(templateFile, 'utf8');
    const className = Parser.parseClassName(jsonDir);
    const extendClassName = Parser.parseExtendClassName(json);

    if (className === "Anim") return;

    let result = Parser.parseChildren(json["Content"]["Content"]["ObjectData"]);
    result.appendAnim(AnimParser.parseAnims(json["Content"]["Content"]["Animation"], json["Content"]["Content"]["AnimationList"], result.actionTagMap));
    let code = template.replace(/TemplateClass/g, className);
    code = code.replace(/ccui.Widget/g, extendClassName);
    if (!isAbstract) {
        code = code.replace('        // {InitCode}', isAbstract ? "" : result.code);
    }
    code = code.replace('    // {ClassMembers}', result.memberCode);
    code = code.replace('    // {CCSAnim}', result.animCode);

    const jsDir = jsonDir.replace('res', 'src').replace('json', 'js');
    FileUtils.createFile(jsDir);
    fs.writeFileSync(jsDir, code);
};

/**
 * Parse anim file from anim.json file and write it to 'src/_ccs' folder
 * @param {string} jsonDir - ccs json file dir
 */
Parser.parseAnimFile = function (jsonDir) {
    if (!jsonDir.endsWith('.json')) return;
    const json = JSON.parse(fs.readFileSync(jsonDir, 'utf8'));
    const template = fs.readFileSync(config.TEMPLATE_ANIM_FILE, 'utf8');

    let result = Parser.parseChildren(json["Content"]["Content"]["ObjectData"]);
    result.appendAnim(AnimFileParser.parseAnims(json["Content"]["Content"]["Animation"], result.actionTagMap));
    let code = template.replace('// {CCSAnim}', result.animCode);
    const jsDir = jsonDir.replace('res', 'src')
        .replace('json', 'js')
        .replace('_anim/', '');
    FileUtils.createFile(jsDir);
    fs.writeFileSync(jsDir, code);
};

Parser.parseClasses = function (ccsRootDir) {
    FileUtils.forEach(ccsRootDir, dir => Parser.parseClass(dir));
};

module.exports = Parser;
