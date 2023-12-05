// noinspection JSUnusedLocalSymbols

/**
 * A pre-built edit box with custom text, icon, background, ... and behaviours
 * This widget class use for ccs-parser
 *
 * @class
 * @extends ccui.Widget
 * @extends ck.ChatHistoryBehavior
 */
ck.ChatHistoryWidget = ccui.Widget.extend({

    ctor: function () {
        this._init();
        ccui.Widget.prototype.ctor.call(this);
        ck.ChatHistoryBehavior.prototype.ctor.call(this);
        this._initState();
    },

    _init: function () {
        this._layoutBackground = null;
        this._scrollViewChatMessages = null;
        this._layoutChatMessages = null;
        this._txtChatMessages = null;
    },

    _initState: function () {

    },

    addChild: function (child) {
        ccui.Widget.prototype.addChild.call(this, child);

        let childName = child.getName();
        if (childName.startsWith("_layoutBackground")) this._layoutBackground = child;
        if (childName.startsWith("_scrollViewChatMessages")) this._scrollViewChatMessages = child;
    },
});

ck.extend(ck.ChatHistoryWidget, ck.ChatHistoryBehavior);

/**
 * A pre-built edit box with custom text, icon, background, ... and behaviours
 * This widget class use for ccs-parser
 *
 * @class
 * @extends ck.ChatHistoryWidget
 */
let ChatHistoryWidget = ck.ChatHistoryWidget

/**
 * @return {ck.ChatHistoryWidget}
 */
ck.ChatHistoryWidget.create = function () {
    return new ck.ChatHistoryWidget();
};