ck.DataView = cc.Class.extend({
    ctor: function (buffer){
        this._dataView = new DataView(buffer);
        this._byteOffset = 0;
    },

    setByteOffset: function (value){
        this._byteOffset = value;
    },

    getUint8: function (){
        var res = this._dataView.getUint8(this._byteOffset)
        this._byteOffset += 1;
        return res;
    },

    getUint16: function (){
        var res = this._dataView.getUint16(this._byteOffset, true)
        this._byteOffset += 2;
        return res;
    },

    getFloat32: function (){
        var res = this._dataView.getFloat32(this._byteOffset, true)
        this._byteOffset += 4;
        return res;
    },

    getArrayUint16: function (length){
        var res = [];
        for(var i = 0; i < length; i++)
            res.push(this.getUint16())
        return res;
    },

    getArrayFloat32: function (length){
        var res = [];
        for(var i = 0; i < length; i++)
            res.push(this.getFloat32())
        return res;
    }
})

ck.DataView.create = function (buffer){
    return new ck.DataView(buffer);
}

ck.DataView.createFromFile = function (path){
    // if (jsb.fileUtils.isFileExist(path)){
    //     cc.error("<ck.DataView> File not found !!!!!", path);
    //     return null;
    // }
    var data = jsb.fileUtils.getDataFromFile(path);
    return ck.DataView.create(data.buffer);
}