/**
 * behaviours
 *
 * @class
 * @extends cc.Class
 */
ck.EditBoxBehavior = cc.Class.extend({
    
    ctor: function () {
        this._editBox = null;               // cc.EditBox
        this._isEditing = false;            // is edit box editing
        this._upperCaseAll = false;         // upper case all input value
        this._placeHolder = "";             // place holder text
        this._text = "";                    // actual text
        this._timeEditingEnded = 0;         // To keep track of the time editing ended (milliseconds)

        this._changeStateListener = null;   // listener when state change from empty to have text and vice versa, param: is edit box empty
        this._editingListener = null;       // listener when editing, param: value of edit box
        this._returnListener = null;       // listener when return, param: value of edit box

        this._editBoxValueToInputValueParser = null   // parser to change edit box value to input value
        this._inputValueToEditBoxValueParser = null   // parser to change input value to edit box value

        this._layerWillAdjustY = null;
        this._oriY = 0;
    },

    setLayerWillAdjustY:function (layer){
        this._layerWillAdjustY = layer;
        this._oriY = this._layerWillAdjustY.y;
    },

    _initEditBox: function () {
        this._layoutEditBoxBackground.getChildren().forEach(child => {
            let childName = child.getName();
            if (childName && childName.startsWith("_imgEditBoxBackground")) this._imgEditBoxBackground = child;
            if (childName && childName.startsWith("_imgEditBoxIcon")) this._imgEditBoxIcon = child;
        }, this)
        this._layoutEditBoxText.getChildren().forEach(child => {
            let childName = child.getName();
            if (childName && childName.startsWith("_txtEditBoxTextDisplay")) this._txtEditBoxTextDisplay = child;
        }, this)
        this._addEditBox();
        this._setTextAndFontEditBox();
    },

    _addEditBox: function () {
        let container = this._layoutEditBoxText;
        if (!cc.sys.isObjectValid(container)) return;

        // basic
        const size = container.getContentSize();
        let editBoxSize = cc.size(size.width, size.height);

        if (ck.isAndroid()) editBoxSize.height += 10;
        const editBox = new cc.EditBox(editBoxSize, new cc.Scale9Sprite());
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
        
        this._editBox = editBox;
    },

    _setTextAndFontEditBox: function () {
        let text = this._txtEditBoxTextDisplay;
        if (!cc.sys.isObjectValid(text)) return;

        // text & font
        let fontSize = text.getFontSize();
        let fontColor = text.getTextColor();

        if (ck.isAndroid()) fontSize -= 5;

        this._editBox.setFontSize(fontSize);
        this._editBox.setFontColor(fontColor);

        let textStr = text.getString();
        this.setPlaceHolder(gm.localize.getText(textStr));
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

    /**
     * @return {string}
     */
    getText: function () {
        let text = this._text;
        if (this._isEditing)
            text = this._editBox.getString();
        if (cc.isFunction(this._editBoxValueToInputValueParser)) {
            return this._editBoxValueToInputValueParser(text);
        } else return text;
    },

    setText: function (text) {
        if (text === undefined || text === null) {
            cc.error("CKEditBox", "text is not valid!!");
            return;
        }
        if (!cc.isString(text)) text = text.toString();
        this._text = text === this._placeHolder ? "" : text;
        if (text === "") text = this._placeHolder;
        if (cc.isFunction(this._inputValueToEditBoxValueParser)) {
            text = this._inputValueToEditBoxValueParser(text);
        }
        this._txtEditBoxTextDisplay.setString(this._upperCaseAll ? text.toUpperCase() : text);
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

    /**
     * parser to change edit box value to input value, param: value of edit box
     * @param parser {function} function (value of edit box)
     */
    setEditBoxValueToInputValueParser: function (parser) {
        this._editBoxValueToInputValueParser = parser;
    },

    /**
     * parser to change input value to edit box value, param: value of user input
     * @param parser {function} function (value of user input)
     */
    setInputValueToEditBoxValueParser: function (parser) {
        this._inputValueToEditBoxValueParser = parser;
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

    toNumberEditBox: function () {
        this.setEditBoxValueToInputValueParser(function (text) {
            return StringUtils.toNumber(text);
        }.bind(this));
        this.setInputValueToEditBoxValueParser(function (value) {
            return StringUtils.formatNumber(value);
        }.bind(this));
    },
    // --------------------------- DELEGATE FUNCTION ---------------------------------

    /**
     * This method is called when an edit box gains focus after keyboard is shown.
     * @param {cc.EditBox} sender
     */
    editBoxEditingDidBegin: function (sender) {
        this._isEditing = true;
        this._txtEditBoxTextDisplay.setVisible(false);
        let str = this._txtEditBoxTextDisplay.getString();
        if (str.toLowerCase() === this._placeHolder.toLowerCase()) str = "";
        if (cc.isFunction(this._editBoxValueToInputValueParser)) {
            str = this._editBoxValueToInputValueParser(str);
        }
        sender.setString(str);

        var pos = UIUtils.getWorldPosition(sender);
        if(pos.y <= cc.winSize.height*0.5 && !fr.wrapper.isEmulator()){
            var dy = (cc.winSize.height*0.5 + 50) - pos.y;
            this.adjustY(dy);
        }
    },

    /**
     * This method is called when an edit box loses focus after keyboard is hidden.
     * @param {cc.EditBox} sender
     */
    editBoxEditingDidEnd: function (sender) {
        this.revertYLayerWillAdjustY();
        this._isEditing = false;
        this._timeEditingEnded = TimeUtils.now();
        let str = sender.getString();

        if (this._changeStateListener && cc.isFunction(this._changeStateListener))
            this._changeStateListener(str === "");

        let value = this._upperCaseAll ? str.toUpperCase(): str
        this._text = value;
        if (value === "") value = this._upperCaseAll ? this._placeHolder.toUpperCase() : this._placeHolder;
        if (cc.isFunction(this._inputValueToEditBoxValueParser)) {
            value = this._inputValueToEditBoxValueParser(value);
        }
        this._txtEditBoxTextDisplay.setString(value);
        this._txtEditBoxTextDisplay.setVisible(true);
        UIUtils.doInNextFrame(function () {
            if (!this || !cc.sys.isObjectValid(this)) {
                return;
            }
            this.setString("");
        }.bind(sender));
    },

    /**
     * This method is called when the edit box text was changed.
     * @param {cc.EditBox} sender
     * @param {string} text
     */
    editBoxTextChanged: function (sender, text) {
        let str = this.getText();
        if (this._changeStateListener && cc.isFunction(this._changeStateListener))
            this._changeStateListener(str === "");
        if (this._editingListener && cc.isFunction(this._editingListener))
            this._editingListener(str);
    },

    /**
     * This method is called when the return button was pressed.
     * @param {cc.EditBox} sender
     */
    editBoxReturn: function (sender) {
        let str = this.getText();
        if (this._returnListener && cc.isFunction(this._returnListener))
            this._returnListener(str);
    },

    /**
     * @returns {number}
     */
    getTimeEditingEnded: function () {
        return this._timeEditingEnded;
    },

    adjustY:function (dy){
        if(cc.sys.isObjectValid(this._layerWillAdjustY)){
            this._layerWillAdjustY.y = this._oriY + dy;
        }
    },

    revertYLayerWillAdjustY:function (){
        if(cc.sys.isObjectValid(this._layerWillAdjustY)){
            this._layerWillAdjustY.y = this._oriY;
        }
    }
});