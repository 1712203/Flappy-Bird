var dirRoot = "../";
var outputRoot = "../temp";

var primitiveType = {
    bool: "Bool",
    byte: "Byte",
    short: "Short",
    int: "Int",
    long: "Long",
    double: "Double",
    string: "String",
    array: "Array"
}

var defaultValueTypeMap = new Map();
defaultValueTypeMap.set(primitiveType.bool, "false");
defaultValueTypeMap.set(primitiveType.byte, "0");
defaultValueTypeMap.set(primitiveType.short, "0");
defaultValueTypeMap.set(primitiveType.int, "0");
defaultValueTypeMap.set(primitiveType.long, "0");
defaultValueTypeMap.set(primitiveType.double, "0");
defaultValueTypeMap.set(primitiveType.string, "null");
defaultValueTypeMap.set(primitiveType.array, "null");

module.exports = {
    dirRoot: dirRoot,
    newline: "\r\n",
    indentation: "    ",
    objectDir: dirRoot + "object",
    primitiveTypeFile: dirRoot + "define/PrimitiveType.js",
    moduleDir: dirRoot + "ts",
    outputDirPath: outputRoot,
    responseDirName: "responses",
    requestDirName: "requests",
    objectTemplatePath: dirRoot + "template/object.js",
    primitiveType: primitiveType,
    defaultValueTypeMap: defaultValueTypeMap
}