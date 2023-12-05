/**
 * behaviours
 *
 * @class
 * @extends cc.Class
 */
ck.ChatHistoryBehavior = cc.Class.extend({

    _chatMessages: null,
    _scrollViewScrollListener: null,
    
    ctor: function () {
        this._chatMessages = [];
    },

    _initChatHistory: function () {
        if (!this._scrollViewChatMessages) {
            cc.warn("[ck.ChatHistoryBehavior]", "_initChatHistory", "missing _scrollViewChatMessages");
            return;
        }
        this._scrollViewChatMessages.getChildren().forEach(child => {
            let childName = child.getName();
            if (childName && childName.startsWith("_layoutChatMessages")) this._layoutChatMessages = child;
        }, this)
        if (!this._layoutChatMessages) {
            cc.warn("[ck.ChatHistoryBehavior]", "_initChatHistory", "missing _layoutChatMessages");
            return;
        }
        this._layoutChatMessages.getChildren().forEach(child => {
            let childName = child.getName();
            if (childName && childName.startsWith("_txtChatMessages")) this._txtChatMessages = child;
        }, this);
        if (!this._txtChatMessages) {
            cc.warn("[ck.ChatHistoryBehavior]", "_initChatHistory", "missing _txtChatMessages");
            return;
        }

        this._txtChatMessages.setString("");
        this._txtChatMessages.setTextContentSize(cc.size(this._layoutChatMessages.width - 20, 0));

        this._scrollViewChatMessages.addCCSEventListener(function (sender, type) {
            switch (type) {
                case 0:
                case 1:
                    if (cc.isFunction(this._scrollViewScrollListener)) this._scrollViewScrollListener();
            }
        }.bind(this));
    },

    /**
     *
     * @param chatMessages {ChatMessageData[]}
     */
    setChatMessages: function (chatMessages) {
        this._chatMessages = chatMessages;
        let messageFormat = "<color = #ff9f16>%s</color>: %s";
        let arrMessages = chatMessages.map(message => {
            return cc.formatStr(messageFormat, message.getPlayerName(), message.getMessage());
        })

        let str = arrMessages.join("\n");
        this._txtChatMessages.setString(str);
        this._layoutChatMessages.height = this._txtChatMessages.height + 20;
        this._scrollViewChatMessages.setInnerContainerSize(this._layoutChatMessages.getContentSize());
        this._scrollViewChatMessages.jumpToBottom();
    },

    /**
     *
     * @param chatMessage {ChatMessageData}
     */
    addChatMessage: function (chatMessage) {
        this.setChatMessages([...this._chatMessages, chatMessage]);
    },
    
    addScrollViewScrollListener: function (listener) {
        this._scrollViewScrollListener = listener;
    },
});