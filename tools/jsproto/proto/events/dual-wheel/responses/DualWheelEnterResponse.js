class DualWheelEnterResponse {
    _errorCode: Byte;
    // if (this._errorCode >= 1) {
    _token: Double;
    _spinCost: Int;
    _items: Array<Short, DualWheelItem>;
    _multiples: Array<Short, DualWheelMultiple>;
    // }
}