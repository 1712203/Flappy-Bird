/**
 * @class
 * @extends ck.BroadcastResponse
 */
let BroadcastResponse = ck.BroadcastResponse.extend({

    ctor: function (data) {
        ck.BroadcastResponse.prototype.ctor.call(this, data);
    },

    _readBroadcastInfoByType: function (type) {
        ck.BroadcastResponse.prototype._readBroadcastInfoByType.call(this, type);
        switch (type) {
            case BroadcastType.DUAL_WHEEL:
                this._broadcasts.push(this.readDualWheelBroadcast());
                break;
        }
    },

    readDualWheelBroadcast: function () {
        cc.log("readDualWheelBroadcast");
        let broadcast = DualWheelBroadcast.create();
        broadcast.setPlayerName(this.getString());
        broadcast.setID(this.getInt());
        broadcast.setAmount(this.getLong());
        broadcast.setMultiple(this.getInt());
        cc.log("[broadcast]", JSON.stringify(broadcast, null, 4));
        return broadcast;
    }
});

/**
 * @param {string} data
 * @returns {BroadcastResponse}
 */
BroadcastResponse.create = function (data) {
    return new BroadcastResponse(data);
};