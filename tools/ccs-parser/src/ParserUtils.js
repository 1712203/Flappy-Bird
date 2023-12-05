let ParserUtils = {
    parseColor(color){
        if (!color) return "";
        if (color["R"] === undefined && color["G"] === undefined && color["B"] === undefined && color["A"] === undefined)
            return "cc.color.WHITE";
        const red = color["R"] !== undefined ? color["R"] : 255;
        const green = color["G"] !== undefined ? color["G"] : 255;
        const blue = color["B"] !== undefined ? color["B"] : 255;
        const alpha = color["A"] !== undefined ? color["A"] : 255;
        return "cc.color(red, green, blue, alpha)"
            .replace("red", red)
            .replace("green", green)
            .replace("blue", blue)
            .replace("alpha", alpha);
    },

    upperCaseFirstChar(str){
        if (typeof str !== 'string' || str.length <= 0) return "";
        return str[0].toUpperCase() + str.slice(1);
    }
}

module.exports = ParserUtils;
