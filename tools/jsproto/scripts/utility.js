module.exports = {
    camelize: function (str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, "");
    },

    splitWithTail: function (str, delimitation, count) {
        var parts = str.split(delimitation);
        var tail = parts.splice(count - 1).join(delimitation);
        var result = parts.splice(0, count - 1);
        result.push(tail);
        return result;
    },

    getStrFrom2Char: function (str, char1, char2) {
        var index1 = str.indexOf(char1);
        if (index1 >= 0) {
            index1 += char1.length;
        } else return null;
        var index2 = str.lastIndexOf(char2);
        return str.substring(index1, index2);
    },

    addIndentAllLine: function (str, numberOfIndent = 1, indent = "    ") {
        return indent.repeat(numberOfIndent) + str.split("\r\n").join("\r\n" + indent.repeat(numberOfIndent));
    },

    logMap: function (map) {
        Array.from(map.keys()).forEach((key, index) => {
            console.log(`----------------------- ${key} -----------------------`);
            console.log(map.get(key));
            console.log("\r\n");
        })
    },

    deleteEmptyLine: function (str) {
        return str.split("\r\n").filter(subStr => {
            return subStr !== ""
        }).join("\r\n");
    }
}