class GourdCrabEnterResponse {
    _listCoinBetValue: Array<Byte, Int>;
    _listGemBetValue: Array<Byte, Int>;
    _listUser: Array<Byte, GourdCrabUserData>;
    _remainGiftCoinLimit: Int;
    _dailyCoinReceive: Int;
    _listCoinInteractItem: Array<Short, GourdCrabInteractItemData>;
    _remainGiftGemLimit: Int;
    _dailyGemReceive: Int;
    _listGemInteractItem: Array<Short, GourdCrabInteractItemData>;
}