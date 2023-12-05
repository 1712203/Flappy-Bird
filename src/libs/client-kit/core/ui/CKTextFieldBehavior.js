/**
 * behaviours
 *
 * @class
 * @extends cc.Class
 */
ck.TextFieldBehavior = cc.Class.extend({
    
    ctor: function () {
        /** @type {cc.EditBox} */
        this._editBox = null;               // cc.EditBox
        this._isEditing = false;            // is edit box editing
        this._upperCaseAll = false;         // upper case all input value
        this._placeHolder = "";             // place holder text
        this._text = "";                    // actual text

        this._changeStateListener = null;   // listener when state change from empty to have text and vice versa, param: is edit box empty
        this._editingListener = null;       // listener when editing, param: value of edit box
        this._returnListener = null;       // listener when return, param: value of edit box
    },

    _initTextField: function () {
        this._layoutEditBoxBackground.getChildren().forEach(child => {
            let childName = child.getName();
            if (childName && childName.startsWith("_imgEditBoxBackground")) this._imgEditBoxBackground = child;
            if (childName && childName.startsWith("_imgEditBoxIcon")) this._imgEditBoxIcon = child;
        }, this)
        this._layoutEditBoxText.getChildren().forEach(child => {
            let childName = child.getName();
            if (childName && childName.startsWith("_txtEditBoxTextDisplay")) this._txtEditBoxTextDisplay = child;
        }, this)
        this._addFakeCursor();
        this._addEditBox();
        this._setTextAndFontEditBox();
    },

    _addEditBox: function () {
        let container = this._layoutEditBoxText;
        if (!cc.sys.isObjectValid(container)) return;

        // basic
        const size = container.getContentSize();
        const editBox = new cc.EditBox(size, new cc.Scale9Sprite());
        container.addChild(editBox);
        editBox.setAnchorPoint(cc.p(0.5, 0.5));
        editBox.setPosition(size.width * 0.5, size.height * 0.5);
        editBox.setCascadeColorEnabled(true);
        editBox.setCascadeOpacityEnabled(true);

        // input
        editBox.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        editBox.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);

        editBox.setDelegate(this);
        editBox.setPlaceHolder("");

        editBox.setFontColor(cc.color(0, 0, 0, 0));

        this._editBox = editBox;
    },

    _setTextAndFontEditBox: function () {
        let text = this._txtEditBoxTextDisplay;
        if (!cc.sys.isObjectValid(text)) return;

        // text & font
        const fontSize = text.getFontSize();
        const fontColor = text.getTextColor();
        this._editBox.setFontSize(text.getFontSize());

        let textStr = text.getString();
        this.setPlaceHolder(gm.localize.getText(textStr));
    },

    _addFakeCursor: function () {
        let text = this._txtEditBoxTextDisplay;
        if (!cc.sys.isObjectValid(text)) return;

        // text & font
        const fontName = text.getFontName();
        const fontSize = text.getFontSize();
        const fontColor = text.getTextColor();
        let cursor = new ccui.Text("|", fontName, fontSize);
        cursor.setTextColor(fontColor);
        cursor.setVisible(false);
        this._cursor = cursor;
        this._layoutEditBoxText.addChild(cursor);
        this.updateCursorPosition();
        AnimationUtils.fadeIdle(this._cursor, 0.5, 0.2);
    },

    showCursor: function () {
        this._cursor.setVisible(true);
        this.updateCursorPosition();
    },

    hideCursor: function () {
        this._cursor.setVisible(false);
    },

    updateCursorPosition: function () {
        let text = this._txtEditBoxTextDisplay;
        this._cursor.setPosition(text.x + text.width * 0.5, text.y);
    },

    getEditBox: function () {
        return this._editBox;
    },

    isEditing: function () {
        return this._isEditing;
    },

    setPlaceHolder: function (placeHolder) {
        this._placeHolder = placeHolder;
        this.setText(placeHolder);
    },

    getText: function () {
        if (this._isEditing)
            return this._editBox.getString();
        return this._text;
    },

    setText: function (text) {
        if (text === undefined || text === null) {
            cc.error("CKEditBox", "text is not valid!!");
            return;
        }
        if (!cc.isString(text)) text = text.toString();
        this._text = text === this._placeHolder ? "" : text;
        if (text === "") text = this._placeHolder;
        this._editBox.setString(this._upperCaseAll ? this._text.toUpperCase() : this._text);
        this._txtEditBoxTextDisplay.setString(this._upperCaseAll ? text.toUpperCase() : text);
        this.updateCursorPosition();
    },

    setUpperCaseAll: function (enable) {
        this._upperCaseAll = enable;
    },

    /**
     * listener when state change from empty to have text and vice versa, param: is edit box empty
     * @param listener {function} function (is edit box empty)
     */
    setChangeStateListener: function (listener) {
        this._changeStateListener = listener;
    },

    /**
     * listener when editing, param: value of edit box
     * @param listener {function} function (value of edit box)
     */
    setEditingListener: function (listener) {
        this._editingListener = listener;
    },

    /**
     * listener when return, param: value of edit box
     * @param listener {function} function (value of edit box)
     */
    setReturnListener: function (listener) {
        this._returnListener = listener;
    },

    setIcon: function (fileName, texType) {
        this._imgEditBoxIcon.loadTexture(fileName, texType);
    },

    setEditBoxEnabled: function (enable) {
        this._editBox.setTouchEnabled(enable);
    },

    clearText: function () {
        this.setText("");
        this._editBox.setString("");
        if (this._changeStateListener && cc.isFunction(this._changeStateListener))
            this._changeStateListener(true);
        if (this._editingListener && cc.isFunction(this._editingListener))
            this._editingListener("");
    },
    // --------------------------- DELEGATE FUNCTION ---------------------------------

    /**
     * This method is called when an edit box gains focus after keyboard is shown.
     * @param {cc.EditBox} sender
     */
    editBoxEditingDidBegin: function (sender) {
        this._isEditing = true;
        let str = this._txtEditBoxTextDisplay.getString();
        if (str.toLowerCase() === this._placeHolder.toLowerCase()) str = "";
        this._txtEditBoxTextDisplay.setString(str);
        sender.setString(str);
        this.showCursor();
        this._editBox.setVisible(false);
    },

    /**
     * This method is called when an edit box loses focus after keyboard is hidden.
     * @param {cc.EditBox} sender
     */
    editBoxEditingDidEnd: function (sender) {
        this._isEditing = false;
        let str = sender.getString();

        if (this._changeStateListener && cc.isFunction(this._changeStateListener))
            this._changeStateListener(str === "");

        let value = this._upperCaseAll ? str.toUpperCase(): str
        this._text = value;
        if (value === "") value = this._upperCaseAll ? this._placeHolder.toUpperCase() : this._placeHolder;
        this._txtEditBoxTextDisplay.setString(value);
        this.hideCursor();
        this._editBox.setVisible(true);
    },

    /**
     * This method is called when the edit box text was changed.
     * @param {cc.EditBox} sender
     * @param {string} text
     */
    editBoxTextChanged: function (sender, text) {
        text = this._upperCaseAll ? text.toUpperCase() : text;
        if (text === "" && !this._isEditing) text = this._upperCaseAll ? this._placeHolder.toUpperCase() : this._placeHolder;
        this._txtEditBoxTextDisplay.setString(text);
        let str = this.getText();
        if (this._changeStateListener && cc.isFunction(this._changeStateListener))
            this._changeStateListener(str === "");
        if (this._editingListener && cc.isFunction(this._editingListener))
            this._editingListener(str);
        this.updateCursorPosition();
    },

    /**
     * This method is called when the return button was pressed.
     * @param {cc.EditBox} sender
     */
    editBoxReturn: function (sender) {
        let str = this.getText();
        if (this._returnListener && cc.isFunction(this._returnListener))
            this._returnListener(str);
        this._editBox.setVisible(true);
    },
});