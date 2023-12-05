var vm = require("vm");
var fs = require("fs");
var config = require("./config.js");
var template = require("./template.js");
var {camelize,
    splitWithTail,
    getStrFrom2Char,
    addIndentAllLine,
    logMap,
    deleteEmptyLine} = require("./utility.js");

// -------------------------------------- DEFINE --------------------------------------

var nl = config.newline;
var indent = config.indentation;


// read template
var objectTemplateString = fs.readFileSync(config.objectTemplatePath).toString();

var defineFiles = fs.readdirSync(config.objectDir);
defineFiles.forEach((file, index) => {
    var objectWriteString = createObjectFile(config.objectDir + "/" + file);
    var outputDirPath = config.outputDirPath;
    fs.mkdir(outputDirPath, {recursive: true}, (err) => {
        if (err) throw err;
        fs.writeFile(outputDirPath + "/" + file, objectWriteString, (err) => {
            if (err)
                console.log('\x1b[31m', "Error has occurred when write file: " + file, err);
            else {
                console.log('\x1b[0m', "Done " + file);
            }
        });
    })
});

function createObjectFile(filePath) {
    var initPropertyArr = [];
    var defaultValuePropertyArr = [];
    var copyFromPropertyArr = [];
    var remParamConstructorArr = [];
    var paramConstructorArr = [];
    var paramArr = [];
    var getSetArr = [];
    var setPropertyArr = [];

    var fileString = fs.readFileSync(filePath).toString();
    var header = splitWithTail(fileString, "{", 2)[0].split(" ");
    var className = header[1];
    var extendsClassName = "cc.Class";
    if (header.length >= 4) extendsClassName = header[3];

    var propDefines = getStrFrom2Char(fileString, "{", "}").split(nl);
    propDefines = propDefines.filter((str, index) => {
        return str !== "";
    });

    propDefines.forEach((propDefine, index) => {
        propDefine = propDefine.trim();
        var prop = propDefine.split(": ")[0].trim();
        var param = prop.replace("_", "");
        var type = propDefine.split(": ")[1].split("[")[0].replace(";", "").replace("]", "");
        type = getTypeName(type);
        var defaultValue = getStrFrom2Char(propDefine, "[", "]");

        initPropertyArr.push(getInitProperty(prop, type));
        copyFromPropertyArr.push(getCopyFromProperty(prop, type));
        remParamConstructorArr.push(getRemParamConstructor(param, type, defaultValue));
        paramConstructorArr.push(getParamConstructor(param, defaultValue));
        paramArr.push(param);
        setPropertyArr.push(getSetProperty(param));
        var defaultValueProp = getDefaultValueProperty(prop, defaultValue);
        if (defaultValueProp)
            defaultValuePropertyArr.push(getDefaultValueProperty(prop, defaultValue));
        getSetArr.push(getGetSetFunc(prop, type));
    });

    var initProperty = initPropertyArr.join(nl);
    var remParamConstructor = remParamConstructorArr.join(nl);
    var paramConstructor = paramConstructorArr.join(", ");
    var paramParser = paramArr.join(", ");
    var initFunction = defaultValuePropertyArr.join(nl);
    var copyFromProperty = copyFromPropertyArr.join(nl);
    var getSet = getSetArr.join(nl);
    var setProperty = setPropertyArr.join(nl);
    var ctor = "this._init();";
    if (extendsClassName !== "cc.Class")
        ctor = "this._super();" + nl + ctor;

    // write file
    initProperty = (initProperty !== "" ? addIndentAllLine(initProperty, 1) : "");
    var remParamConstructor1 = (remParamConstructor !== "" ? addIndentAllLine(remParamConstructor, 1, "     ") : "");
    var remParamConstructor2 = (remParamConstructor !== "" ? addIndentAllLine(remParamConstructor, 1, " ") : "");
    ctor = (ctor !== "" ? addIndentAllLine(ctor, 2) : "");
    initFunction = (initFunction !== "" ? addIndentAllLine(initFunction, 2) : "");
    copyFromProperty = (copyFromProperty !== "" ? addIndentAllLine(copyFromProperty, 2) : "");
    getSet = (getSet !== "" ? addIndentAllLine(getSet, 1) : "");
    setProperty = (setProperty !== "" ? addIndentAllLine(setProperty, 1) : "");
    return objectTemplateString.split("ClassName").join(className)
        .split("cc.Class").join(extendsClassName)
        .replace("    // init-property", initProperty)
        .replace("     * rem-param-constructor", remParamConstructor1)
        .replace(" * rem-param-constructor", remParamConstructor2)
        .split("/** param-constructor */").join(paramConstructor)
        .split("/** param */").join(paramParser)
        .replace("        // ctor", ctor)
        .replace("        // init", initFunction)
        .replace("        // copy-from", copyFromProperty)
        .replace("    // get-set", getSet)
        .replace("    // set-property", setProperty);
}

function isPrimitiveType(type) {
    return Array.from(config.defaultValueTypeMap.keys()).indexOf(type) >= 0;
}

function getFunctionGet(prop, type) {
    var functionName = prop.replace("_", "");
    functionName = "get " + functionName;
    functionName = camelize(functionName);
    return template.getFunction.replace("{functionName}", functionName)
        .split("{prop}").join(prop)
        .split("{type}").join(type);
}

function getFunctionSet(prop, type) {
    var functionName = prop.replace("_", "");
    functionName = "set " + functionName;
    functionName = camelize(functionName);
    return template.setFunction.replace("{functionName}", functionName)
        .split("{prop}").join(prop)
        .split("{type}").join(type);
}

function getInitProperty(prop, type) {
    var initValue = config.defaultValueTypeMap.get(type) ? config.defaultValueTypeMap.get(type) : "null";
    return template.initProperty.replace("{prop}", prop)
        .replace("{initValue}", initValue)
        .replace("{type}", type);
}

function getSetProperty(param) {
    var functionName = camelize("set " + param);
    return `object.${functionName}(${param});`
}

function getCopyFromProperty(prop, type) {
    var functionName = prop.replace("_", "");
    let getFunctionName = camelize("get " + functionName);
    let setFunctionName = camelize("set " + functionName);
    return template.copyFromProperty.replace("{setPropFunction}", setFunctionName)
        .replace("{getPropFunction}", getFunctionName)
}

function getDefaultValueProperty(prop, defaultValue) {
    if (!defaultValue) return null;
    return template.defaultValueProperty.replace("{prop}", prop)
        .replace("{defaultValue}", defaultValue);
}

function getGetSetFunc(prop, type) {
    var getFunc = getFunctionGet(prop, type) + ",";
    var setFunc = getFunctionSet(prop, type) + ",";
    return getFunc + nl + nl + setFunc;
}

function getParamConstructor(param, defaultValue) {
    if (!defaultValue) return param;
    else return `${param} = ${defaultValue}`;
}

function getRemParamConstructor(param, type, defaultValue) {
    return `* @param {${type}} [${getParamConstructor(param, defaultValue)}] ${param}`;
}

function getTypeName(type) {
    if (type.startsWith("CK")) {
        return type.replace("CK", "ck.");
    }
    if (type.startsWith("Array")) {
        let strType = getStrFrom2Char(type, "<", ">");
        let arrayType = splitWithTail(strType, ",", 2)[0].trim();
        return `Array<${getTypeName(arrayType)}>`
    }
    return type;
}