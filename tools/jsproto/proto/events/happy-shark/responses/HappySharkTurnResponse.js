class HappySharkTurnResponse {
    _errorCode: Byte;
    // if (this._errorCode >= 1) {
    _token: Int;
    _currentPosition: Short;
    _currentMilestoneToken: Int;
    _claimedMilestoneToken: Int;
    _results: Array<Short, HappySharkResultData>;
    // }
}