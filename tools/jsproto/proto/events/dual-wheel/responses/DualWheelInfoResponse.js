class DualWheelInfoResponse {
    _startTime: Int;
    // this._startTime = gm.system.toClientTime(this._startTime);
    _endTime: Int;
    // this._endTime = gm.system.toClientTime(this._endTime);
    _price: Double;
    _tokensEachPrice: Int;
    _maxHistory: Short;
    _token: Double;
    _accumulations: Array<Short, DualWheelAccumulateMilestone>;
}