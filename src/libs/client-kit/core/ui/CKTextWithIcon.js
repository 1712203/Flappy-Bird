/**
 * @class
 * @extends ccui.Widget
 */
ck.TextWithIcon = ccui.Widget.extend({
    /**
     * @type {number}
     */
    _dx: 2,

    /**
     * @type {ccui.Text}
     */
    _text: null,

    /**
     * @type {ccui.ImageView}
     */
    _icon: null,

    /**
     * @type {boolean}
     */
    _isIconBeforeText: false,

    /**
     * @param {string} text
     * @param {string} font
     * @param {string} icon
     * @param {number} texType
     */
    ctor: function (text, font, icon, texType) {
        ccui.Widget.prototype.ctor.call(this);
        icon = icon || Item.DEFAULT_ICON;
        this._init(text, font, icon, texType);
    },

    _init: function (text, font, icon, texType) {
        this._addText(text, font);
        this._addIcon(icon, texType);
        this._alignCenterText();
        this._enableCascadeOpacity();
        this.setCascadeColorEnabled(true);
    },

    _addText: function (text, font) {
        this._text = new ccui.Text(text, font, ck.TextWithIcon.DEFAULT_FONT_SIZE);
        this.addChild(this._text);
        this._text.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
        this._text.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
        this._text.ignoreContentAdaptWithSize(true);
    },

    _addIcon: function (icon = "", texType = 1) {
        this._icon = new ccui.ImageView();
        this.addChild(this._icon, 1);
        this._icon.loadTexture(icon, texType);
    },

    _alignCenterText: function () {
        const haveIcon = this._icon.isVisible();
        const dx = haveIcon ? this._dx : 0; // distance between text and icon
        this._dx = dx;
        const iconWidth = haveIcon ? this._icon.width * this._icon.scaleX : 0; // rendered icon's width
        const dwidth = haveIcon ? dx + iconWidth : 0; // additional width
        const relativeX = this._text.getVirtualRendererSize().width * 0.5 + dx + iconWidth * 0.5;

        if (!this._isIconBeforeText) {
            this._text.x = -dwidth * 0.5;
            this._icon.x = this._text.x + relativeX;
        }
        else {
            this._text.x = dwidth * 0.5;
            this._icon.x = this._text.x - relativeX;
        }
    },

    _enableCascadeOpacity: function () {
        this.setCascadeOpacityEnabled(true);
        this._text.setCascadeOpacityEnabled(true);
        this._icon.setCascadeOpacityEnabled(true);
    },

    setIcon: function (file, texType) {
        this._icon.loadTexture(file, texType);
        this._alignCenterText();
    },

    setIconScale: function (scale) {
        this._icon.setScale(scale);
        this._alignCenterText();
    },

    setTextColor: function (color) {
        this.setColor(color);
    },

    setColor: function (color) {
        this._text.setColor(color);
    },

    setString: function (str) {
        this._text.setString(str);
        this._alignCenterText();
    },

    setDx: function (dx) {
        this._dx = dx;
        this._alignCenterText();
    },

    enableOutline: function (color, size) {
        this._text.enableOutline(color, size);
    },

    enableShadow: function (color, size) {
        this._text.enableShadow(color, size);
    },

    setFontSize: function (fontSize) {
        this._text.setFontSize(fontSize);
        this._alignCenterText();
    },

    getFontSize: function () {
        return this._text.getFontSize();
    },

    setFontName: function (fontName) {
        this._text.setFontName(fontName);
        this._alignCenterText();
    },

    setIconVisible: function (visible) {
        this._icon.setVisible(visible);
        this._alignCenterText();
    },

    /**
     * @param {boolean} isIconBeforeText
     */
    setIsIconBeforeText: function (isIconBeforeText) {
        this._isIconBeforeText = isIconBeforeText;
    },

    getIcon: function () {
        return this._icon;
    },
    
    getWidth: function () {
        const width = this._text.getVirtualRendererSize().width;
        return width + this._icon.width * this._icon.scaleX + this._dx;
    },

    getHeight: function () {
        return Math.max(this._text.height, this._icon.height * this._icon.scaleY);
    },

    fitIconHeight: function () {
        const scale = this._text.height / this._icon.height;
        this.setIconScale(scale);
        this._alignCenterText();
    },

    /**
     * @param {ItemID} itemID
     * @param {string} strAmount
     */
    setItemAmount: function (itemID, strAmount) {
        const icon = gm.item.config.getItemIcon(itemID);
        if (icon) {
            this.setIcon(icon, ccui.Widget.PLIST_TEXTURE);
        }
        this.setString(strAmount);
    },
});

/**
 * @returns {ck.TextWithIcon}
 */
ck.TextWithIcon.create = function (text, font, icon, texType) {
    return new ck.TextWithIcon(text, font, icon, texType);
};

/**
 * @param {ItemID} itemID
 * @param {string} strAmount
 * @returns {ck.TextWithIcon|null}
 */
ck.TextWithIcon.createItemAmount = function (itemID, strAmount = "") {
    const icon = gm.item.config.getItemIcon(itemID);
    if (!icon) return null;
    return ck.TextWithIcon.create(strAmount, ck.GameManager.NUMBER_FONT, icon, ccui.Widget.PLIST_TEXTURE)
};

ck.TextWithIcon.DEFAULT_FONT_SIZE = 30;
