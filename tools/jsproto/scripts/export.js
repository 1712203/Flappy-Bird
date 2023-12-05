let vm = require("vm");
let fs = require("fs");
let config = require("./config.js");
let template = require("./template.js");
let {camelize,
    splitWithTail,
    getStrFrom2Char,
    addIndentAllLine,
    logMap,
    deleteEmptyLine} = require("./utility.js");

// -------------------------------------- DEFINE --------------------------------------

let nl = config.newline;
let indent = config.indentation;
let defineFiles = fs.readdirSync(config.defineDir);
let objectReadMap = new Map(config.primitiveReadMap);
let objectWriteMap = new Map(config.primitiveWriteMap);
let objectFunctionMap = new Map();
let objectRelativeFunctionMap = new Map();

defineFiles.forEach((file, index) => {
    let objectTypeString = fs.readFileSync(config.defineDir + "/" + file).toString();
    let className = splitWithTail(objectTypeString, "{", 2)[0].split(" ")[1];
    let objectString = camelize(className);
    let initString = template.initObject.replace("{object}", objectString).replace("{objectType}", getInitClassName(className));

    let read = {
        syntax: [],
        functionRelative: [],
    }
    read.syntax.push(initString);

    let write = {
        syntax: [],
        functionRelative: [],
    }

    let propDefines = splitWithTail(objectTypeString, "{", 2)[1].split(nl);
    propDefines = propDefines.filter((str, index) => {
        return str !== "" && str !== "}";
    });
    propDefines.forEach((propDefine, index) => {
        propDefine = propDefine.trim();
        if (propDefine.startsWith("//")) {
            read.syntax.push(propDefine.substr(2).trim());
            write.syntax.push(propDefine.substr(2).trim());
            return;
        }
        let prop = propDefine.split(": ")[0].trim();
        let type = propDefine.split(": ")[1].trim().replace(";", "");

        genReadSyntaxByType(prop, type, objectString, read);

        genWriteSyntaxByType(prop, type, objectString, write);
    });
    read.syntax.push(`return ${objectString};`);

    let readFunctionName = "_read" + className;
    let readFunctionSyntax = template.function.replace("{functionName}", readFunctionName)
        .replace("{param}", "")
        .replace("{content}", addIndentAllLine(read.syntax.join(nl), 1, indent));
    objectReadMap.set(className, readFunctionName);
    objectFunctionMap.set(readFunctionName, readFunctionSyntax);
    objectRelativeFunctionMap.set(readFunctionName, read.functionRelative);

    let writeFunctionName = "_write" + className;
    let writeFunctionSyntax = template.function.replace("{functionName}", writeFunctionName)
        .replace("{param}", objectString)
        .replace("{content}", addIndentAllLine(write.syntax.join(nl), 1, indent));
    objectWriteMap.set(className, writeFunctionName);
    objectFunctionMap.set(writeFunctionName, writeFunctionSyntax);
    objectRelativeFunctionMap.set(writeFunctionName, write.functionRelative);
});

let moduleDirs = fs.readdirSync(config.moduleDir);

// handle a group of multiple modules
let listNameModuleGroup = ["events", "minigames"];
for (let i = 0; i < moduleDirs.length; i++) {
    let module = moduleDirs[i];
    if (listNameModuleGroup.indexOf(module) >= 0) {
        let childModules = fs.readdirSync(config.moduleDir + "/" + module);
        childModules = childModules.map(childModule => module + "/" + childModule);
        moduleDirs.splice(i, 1, ...childModules);
        i += childModules.length - 1;
    }
}

console.log(moduleDirs);

// -------------------------------------- RESPONSE --------------------------------------

// read template response
let responseTemplateString = fs.readFileSync(config.responseTemplatePath).toString();

// read all response file
moduleDirs.forEach((module, index) => {
    let responseDir = config.moduleDir + "/" + module + "/" + config.responseDirName;
    if (!fs.existsSync(responseDir)) return;
    let responseFiles = fs.readdirSync(responseDir);
    responseFiles.forEach((file, index) => {
        let responseWriteString = createResponseFile(responseDir + "/" + file);
        let outputDirPath = config.outputDirPath.replace("{module}", module) + config.responseDirName;
        fs.mkdir(outputDirPath, {recursive: true}, (err) => {
            if (err) throw err;
            fs.writeFile(outputDirPath + "/" + file, responseWriteString, (err) => {
                if (err)
                    console.log('\x1b[31m', "Error has occurred when write file: " + file, err);
                else {
                    console.log('\x1b[0m', "Done " + file);
                }
            });
        })
    })
})

function createResponseFile(filePath) {
    let initPropertyArr = [];
    let defaultValuePropertyArr = [];
    let readFunctionArr = [];
    let getSetArr = [];
    let read = {
        syntax: [],
        functionRelative: []
    }

    let fileString = fs.readFileSync(filePath).toString();
    let className = splitWithTail(fileString, "{", 2)[0].split(" ")[1];
    let propDefines = getStrFrom2Char(fileString, "{", "}").split(nl);
    propDefines = propDefines.filter((str, index) => {
        return str !== "";
    });

    propDefines.forEach((propDefine, index) => {
        propDefine = propDefine.trim();
        if (propDefine.startsWith("//")) {
            read.syntax.push(propDefine.substr(2).trim());
            return;
        }
        let prop = propDefine.split(": ")[0].trim();
        let type = propDefine.split(": ")[1].split("[")[0].replace(";", "").replace("]", "");
        let defaultValue = getStrFrom2Char(propDefine, "[", "]");

        initPropertyArr.push(getInitProperty(prop, type));
        let defaultValueProp = getDefaultValueProperty(prop, defaultValue);
        if (defaultValueProp)
            defaultValuePropertyArr.push(getDefaultValueProperty(prop, defaultValue));
        getSetArr.push(getGetSetFunc(prop, type));

        genReadSyntaxByType(prop, type, "this", read);
    });

    let initProperty = initPropertyArr.join(nl);
    let defaultValueProperty = defaultValuePropertyArr.join(nl);
    let getSet = getSetArr.join(nl + nl);
    let ctor = "this._super(data);"
    if (defaultValueProperty !== "")
        ctor = defaultValueProperty + nl + ctor;

    let readData = read.syntax.join(nl);
    Array.from(new Set(read.functionRelative)).forEach((func, index) => {
        if (objectFunctionMap.has(func)) {
            readFunctionArr.push(objectFunctionMap.get(func) + ",");
        }
    })
    let readFunction = readFunctionArr.join(nl + nl);

    // write file
    initProperty = (initProperty !== "" ? addIndentAllLine(initProperty, 1) : "");
    ctor = (ctor !== "" ? addIndentAllLine(ctor, 2) : "");
    readData = (readData !== "" ? addIndentAllLine(readData, 2) : "");
    readFunction = (readFunction !== "" ? addIndentAllLine(readFunction, 1) : "");
    getSet = (getSet !== "" ? addIndentAllLine(getSet, 1) : "");
    return responseTemplateString.split("ClassName").join(className)
        .replace("    // init-property", initProperty)
        .replace("        // ctor", ctor)
        .replace("        // read-data", readData)
        .replace("    // read-function", readFunction)
        .replace("    // get-set", getSet);
}

// -------------------------------------- REQUEST --------------------------------------

// read template request
let requestTemplateString = fs.readFileSync(config.requestTemplatePath).toString();

// read all request file
moduleDirs.forEach((module, index) => {
    let requestDir = config.moduleDir + "/" + module + "/" + config.requestDirName;
    if (!fs.existsSync(requestDir)) return;
    let requestFiles = fs.readdirSync(requestDir);
    requestFiles.forEach((file, index) => {
        let requestWriteString = createRequestFile(requestDir + "/" + file);
        let outputDirPath = config.outputDirPath.replace("{module}", module) + config.requestDirName;
        fs.mkdir(outputDirPath, {recursive: true}, (err) => {
            if (err) throw err;
            fs.writeFile(outputDirPath + "/" + file, requestWriteString, (err) => {
                if (err)
                    console.log('\x1b[31m', "Error has occurred when write file: " + file, err);
                else {
                    console.log('\x1b[0m', "Done " + file);
                }
            });
        })
    })
})

function createRequestFile(filePath) {
    let initPropertyArr = [];
    let defaultValuePropertyArr = [];
    let remParamConstructorArr = [];
    let paramConstructorArr = [];
    let paramArr = [];
    let writeFunctionArr = [];
    let getSetArr = [];
    let write = {
        syntax: [],
        functionRelative: []
    }

    let fileString = fs.readFileSync(filePath).toString();
    let packetID = fileString.split(nl)[0].split("=")[1].trim().replace(";", "");
    let className = splitWithTail(fileString.substr(fileString.indexOf("class")), "{", 2)[0].split(" ")[1];
    let propDefines = getStrFrom2Char(fileString, "{", "}").split(nl);
    propDefines = propDefines.filter((str, index) => {
        return str !== "";
    });

    propDefines.forEach((propDefine, index) => {
        propDefine = propDefine.trim();
        if (propDefine.startsWith("//")) {
            write.syntax.push(propDefine.substr(2).trim());
            return;
        }
        let prop = propDefine.split(": ")[0].trim();
        let param = prop.replace("_", "");
        let type = propDefine.split(": ")[1].split("[")[0].replace(";", "").replace("]", "");
        let defaultValue = getStrFrom2Char(propDefine, "[", "]");

        initPropertyArr.push(getInitProperty(prop, type));
        remParamConstructorArr.push(getRemParamConstructor(param, type, defaultValue));
        paramConstructorArr.push(getParamConstructor(param, defaultValue));
        paramArr.push(param);
        defaultValuePropertyArr.push(getDefaultValueProperty(prop, param));
        getSetArr.push(getGetSetFunc(prop, type));

        genWriteSyntaxByType(prop, type, "this", write);
    });

    let initProperty = initPropertyArr.join(nl);
    let remParamConstructor = remParamConstructorArr.join(nl);
    let paramConstructor = paramConstructorArr.join(", ");
    let paramParser = paramArr.join(", ");
    let defaultValueProperty = defaultValuePropertyArr.join(nl);
    let getSet = getSetArr.join(nl + nl);
    let ctor = `this._super(${packetID});`;
    if (defaultValueProperty !== "")
        ctor += nl + defaultValueProperty;

    let writeData = write.syntax.join(nl);
    write.functionRelative.forEach((func, index) => {
        if (objectFunctionMap.has(func)) {
            writeFunctionArr.push(objectFunctionMap.get(func) + ",");
        }
    })
    let writeFunction = writeFunctionArr.join(nl + nl);

    // write file
    initProperty = (initProperty !== "" ? addIndentAllLine(initProperty, 1) : "");
    let remParamConstructor1 = (remParamConstructor !== "" ? addIndentAllLine(remParamConstructor, 1, "     ") : "");
    let remParamConstructor2 = (remParamConstructor !== "" ? addIndentAllLine(remParamConstructor, 1, " ") : "");
    ctor = (ctor !== "" ? addIndentAllLine(ctor, 2) : "");
    writeData = (writeData !== "" ? addIndentAllLine(writeData, 2) : "");
    writeFunction = (writeFunction !== "" ? addIndentAllLine(writeFunction, 1) : "");
    getSet = (getSet !== "" ? addIndentAllLine(getSet, 1) : "");
    return requestTemplateString.split("ClassName").join(className)
        .replace("    // init-property", initProperty)
        .replace("     * rem-param-constructor", remParamConstructor1)
        .replace(" * rem-param-constructor", remParamConstructor2)
        .split("/** param-constructor */").join(paramConstructor)
        .split("/** param */").join(paramParser)
        .replace("        // ctor", ctor)
        .replace("        // write-data", writeData)
        .replace("    // write-function", writeFunction)
        .replace("    // get-set", getSet);
}

// -------------------------------------- SUPPORT FUNCTION --------------------------------------

function genReadSyntaxByType(prop, type, objectString, read) {
    type = type.split(" ").join("");
    let readFunc = getReadFunction(type, read);
    return read.syntax.push(template.readDataLine.replace("{object}", objectString)
        .replace("{prop}", prop)
        .replace("{readFunc}", readFunc));
}

function genWriteSyntaxByType(prop, type, objectString, write) {
    type = type.split(" ").join("");
    let writeFunc = getWriteFunction(type, write);
    return write.syntax.push(template.writeDataLine.replace("{object}", objectString)
        .replace("{prop}", prop)
        .replace("{writeFunc}", writeFunc));
}

function isPrimitiveType(type) {
    return Array.from(config.primitiveReadMap.keys()).indexOf(type) >= 0;
}

function getReadFunctionNameByType(type) {
    type = type.split(" ").join(" ");
    type = type.split(">").join(" ");
    type = type.split("<").join(" ");
    type = type.split(",").join(" ");
    type = "_read " + type;
    return camelize(type);
}

function getWriteFunctionNameByType(type) {
    type = type.split(" ").join(" ");
    type = type.split(">").join(" ");
    type = type.split("<").join(" ");
    type = type.split(",").join(" ");
    type = "_write " + type;
    return camelize(type);
}

function getReadFunction(type, read) {
    let readFunc;
    if (objectReadMap.has(type)) {
        readFunc = objectReadMap.get(type);
    } else if (type.startsWith(config.primitiveType.array)) readFunc = getReadArrayFunction(type, read);
    else if (!isPrimitiveType(type)) readFunc = getReadFunctionNameByType(type);

    if (read.functionRelative.indexOf(readFunc) < 0) {
        read.functionRelative.push(readFunc);
        if (objectRelativeFunctionMap.has(readFunc))
            read.functionRelative = read.functionRelative.concat(objectRelativeFunctionMap.get(readFunc));
    }
    return readFunc;
}

function getWriteFunction(type, write) {
    let writeFunc;
    if (objectWriteMap.has(type)) {
        writeFunc = objectWriteMap.get(type);
    } else if (type.startsWith(config.primitiveType.array)) writeFunc = getWriteArrayFunction(type, write);
    else if (!isPrimitiveType(type)) writeFunc = getWriteFunctionNameByType(type);

    if (write.functionRelative.indexOf(writeFunc) < 0) {
        write.functionRelative.push(writeFunc);
        if (objectRelativeFunctionMap.has(writeFunc))
            write.functionRelative = write.functionRelative.concat(objectRelativeFunctionMap.get(writeFunc));
    }
    return writeFunc;
}

function getReadArrayFunction(type, read) {
    objectReadMap.set(type, getReadFunctionNameByType(type));
    let readSyntax = "";
    let arrayName = "arr"
    let lengthVar = "n"

    let strType = getStrFrom2Char(type, "<", ">");
    let lengthType = splitWithTail(strType, ",", 2)[0];
    let arrayType = splitWithTail(strType, ",", 2)[1];

    readSyntax += `let ${arrayName} = [];` + nl
    readSyntax += `let ${lengthVar} = this.${objectReadMap.get(lengthType)}();` + nl;
    let contentForLoop = "";
    let arrayTypeReadFunction = getReadFunction(arrayType, read);
    contentForLoop += `${indent}${arrayName}.push(this.${arrayTypeReadFunction}());`
    readSyntax += template.forLoop.replace("{lengthVar}", lengthVar)
        .replace("{content}", contentForLoop);
    readSyntax += nl + `return ${arrayName};`
    let functionSyntax = `${objectReadMap.get(type)}: function () {${nl + addIndentAllLine(readSyntax, 1, indent) + nl}}`;
    objectFunctionMap.set(getReadFunctionNameByType(type), functionSyntax);
    objectRelativeFunctionMap.set(getReadFunctionNameByType(type), [arrayTypeReadFunction]);

    return getReadFunctionNameByType(type);
}

function getWriteArrayFunction(type, write) {
    objectWriteMap.set(type, getWriteFunctionNameByType(type));
    let writeSyntax = "";
    let arrayName = "arr"
    let lengthVar = "n"

    let strType = getStrFrom2Char(type, "<", ">");
    let lengthType = splitWithTail(strType, ",", 2)[0];
    let arrayType = splitWithTail(strType, ",", 2)[1];

    writeSyntax += `this.${objectWriteMap.get(lengthType)}(${arrayName}.length);` + nl;
    let contentForLoop = "";
    contentForLoop += `${indent}this.${getWriteFunction(arrayType, write)}(${arrayName}[i]);`
    writeSyntax += template.forLoop.replace("{lengthVar}", lengthVar)
        .replace("{content}", contentForLoop);
    let functionSyntax = `${objectWriteMap.get(type)}: function (${arrayName}) {${nl + addIndentAllLine(writeSyntax, 1, indent) + nl}}`;
    objectFunctionMap.set(getWriteFunctionNameByType(type), functionSyntax);

    return getWriteFunctionNameByType(type);
}

function getFunctionGet(prop, type) {
    let functionName = prop.replace("_", "");
    functionName = "get " + functionName;
    functionName = camelize(functionName);
    return template.getFunction.replace("{functionName}", functionName)
        .split("{prop}").join(prop)
        .split("{type}").join(getRemType(type));
}

function getFunctionSet(prop, type) {
    let functionName = prop.replace("_", "");
    functionName = "set " + functionName;
    functionName = camelize(functionName);
    return template.setFunction.replace("{functionName}", functionName)
        .split("{prop}").join(prop)
        .split("{type}").join(getRemType(type));
}

function getInitProperty(prop, type) {
    let initValue = config.defaultValueTypeMap.get(type) ? config.defaultValueTypeMap.get(type) : "null";
    return template.initProperty.replace("{prop}", prop)
        .replace("{initValue}", initValue)
        .replace("{type}", getRemType(type));
}

function getDefaultValueProperty(prop, defaultValue) {
    if (!defaultValue) return null;
    return template.defaultValueProperty.replace("{prop}", prop)
        .replace("{defaultValue}", defaultValue);
}

function getGetSetFunc(prop, type) {
    let getFunc = getFunctionGet(prop, type) + ",";
    let setFunc = getFunctionSet(prop, type) + ",";
    return getFunc + nl + nl + setFunc;
}

function getParamConstructor(param, defaultValue) {
    if (!defaultValue) return param;
    else return `${param} = ${defaultValue}`;
}

function getRemParamConstructor(param, type, defaultValue) {
    if (!defaultValue) return param;
    else return `* @param {${getRemType(type)}} [${getParamConstructor(param, defaultValue)}] ${param}`;
}

function getRemType(type) {
    if (type.startsWith(config.primitiveType.array)) {
        let childType = getStrFrom2Char(type, "<", ">").split(",")[1].trim();
        return `${config.primitiveType.array}<${getInitClassName(childType)}>`;
    }
    return type;
}

function getInitClassName(className) {
    if (className.startsWith("CK")) {
        return className.replace("CK", "ck.");
    }
    return className;
}