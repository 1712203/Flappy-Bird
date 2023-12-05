class OrbitInfo {

    static create(points, indices){
        var res = new OrbitInfo();
        res.setPoints(points);
        res.setCollisionIndices(indices);
        return res;
    }

    constructor() {
        this._points = [];
        this._collisionIndices = [];
    }

    /** @return {Array<[number, number]>} */
    getPoints() {return this._points}
    setPoints(value) {this._points = value;}

    /** @return {Array<number>} */
    getCollisionIndices() {return this._collisionIndices}
    setCollisionIndices(value) {this._collisionIndices = value;}
}

if (typeof module != "undefined")
    module.exports = OrbitInfo;
