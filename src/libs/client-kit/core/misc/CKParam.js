/**
 * Used to define param for functions that has a lot of parameters
 * 
 * @class
 * @abstract
 * @extends cc.Class
 */
ck.Param = cc.Class.extend({
    copyFrom: function (obj) {
        if (!obj) return;
        for (let key in this) {
            if (obj.hasOwnProperty(key)) {
                this[key] = obj[key];
            }
        }
    }
});
