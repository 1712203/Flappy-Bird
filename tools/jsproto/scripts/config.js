var dirRoot = "../";
var outputRoot = "../../../src/modules";

var primitiveType = {
    bool: "Bool",
    byte: "Byte",
    short: "Short",
    int: "Int",
    long: "Long",
    double: "Double",
    string: "String",
    array: "Array",
}

var primitiveReadMap = new Map();
primitiveReadMap.set(primitiveType.bool, "getBool");
primitiveReadMap.set(primitiveType.byte, "getByte");
primitiveReadMap.set(primitiveType.short, "getShort");
primitiveReadMap.set(primitiveType.int, "getInt");
primitiveReadMap.set(primitiveType.long, "getLong");
primitiveReadMap.set(primitiveType.double, "getDouble");
primitiveReadMap.set(primitiveType.string, "getString");

var primitiveWriteMap = new Map();
primitiveWriteMap.set(primitiveType.bool, "putBool");
primitiveWriteMap.set(primitiveType.byte, "putByte");
primitiveWriteMap.set(primitiveType.short, "putShort");
primitiveWriteMap.set(primitiveType.int, "putInt");
primitiveWriteMap.set(primitiveType.long, "putLong");
primitiveWriteMap.set(primitiveType.double, "putDouble");
primitiveWriteMap.set(primitiveType.string, "putString");

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
    defineDir: dirRoot + "define",
    primitiveTypeFile: dirRoot + "define/PrimitiveType.js",
    moduleDir: dirRoot + "proto",
    outputDirPath: `${outputRoot}/{module}/network/`,
    responseDirName: "responses",
    requestDirName: "requests",
    responseTemplatePath: dirRoot + "template/response.js",
    requestTemplatePath: dirRoot + "template/request.js",
    primitiveType: primitiveType,
    primitiveReadMap: primitiveReadMap,
    primitiveWriteMap: primitiveWriteMap,
    defaultValueTypeMap: defaultValueTypeMap
}