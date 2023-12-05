module.exports = {
    readDataLine: "{object}.{prop} = this.{readFunc}();",
    writeDataLine: "this.{writeFunc}({object}.{prop});",
    initObject: "var {object} = new {objectType}();",
    copyFromProperty: "this.{setPropFunction}(newData.{getPropFunction}());",
    forLoop: "for (var i = 0; i < {lengthVar}; i++) {\r\n{content}\r\n}",
    function: "{functionName}: function ({param}) {\r\n{content}\r\n}",
    initProperty:   "/** @type {{type}} */\r\n" +
                    "{prop}: {initValue},",
    defaultValueProperty: "this.{prop} = {defaultValue};",
    getFunction:    "/**\r\n" +
                    " * get {prop}\r\n" +
                    " * @return {{type}}\r\n" +
                    " */\r\n" +
                    "{functionName}: function () {\r\n" +
                    "    return this.{prop};\r\n" +
                    "}",
    setFunction:    "/**\r\n" +
                    " * set {prop}\r\n" +
                    " * @param {{type}} value\r\n" +
                    " */\r\n" +
                    "{functionName}: function (value) {\r\n" +
                    "    this.{prop} = value;\r\n" +
                    "}",
}