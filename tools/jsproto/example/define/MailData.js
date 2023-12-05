class MailData {
    _id: Double;
    _senderId: Int;
    _senderName: String;
    _sendTime: Int;
    _type: Short;
    _expired: Int;
    _content: String;

    // if (this._type === 0) {
    _gifts: Array<Short, Gifts>;
    // } else {
    _url: String;
    // }
}