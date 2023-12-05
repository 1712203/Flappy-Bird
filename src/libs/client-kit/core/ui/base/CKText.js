ck.Text = ccui.Text.extend({
    __autoFitSingleLine: false,
    __autoFitMultipleLine: false,
    __customSize: null,
    __strokeColor: null,
    __strokeSize: 0,
    __strokeEnabled: false,
    __shadowColor: null,
    __shadowOffset: null,
    __shadowBlurRadius: null,
    __shadowEnabled: false,
    __defaultFontSize: null,

    ctor: function (textContent, fontName, fontSize) {
        this._super(textContent, fontName, fontSize);
    },

    /**
     * Changes the  value of ccui.Text.
     * @param {String} text
     */
    setString: function (text) {
        if (!ck.isValid(this)) return;
        this._super(text);
        this.fitSingleLine();
        this.fitMultipleLine();
    },

    fitSingleLine: function () {
        if (this.__autoFitSingleLine) {
            if (this.__defaultFontSize !== null && this.__defaultFontSize !== undefined) {
                this.setFontSize(this.__defaultFontSize);
            }
            UIUtils.fitTextCustomSizeSingleLine(this);
        }
    },

    fitMultipleLine: function () {
        if (this.__autoFitMultipleLine) {
            if (this.__defaultFontSize !== null && this.__defaultFontSize !== undefined) {
                this.setFontSize(this.__defaultFontSize);
            }
            UIUtils.fitTextCustomSizeMultipleLine(this);
        }
    },

    autoFitSingleLine: function (enable = true) {
        this.__autoFitSingleLine = enable;
        this.fitSingleLine();
    },

    autoFitMultipleLine: function (enable = true) {
        this.__autoFitMultipleLine = enable;
        this.fitMultipleLine();
    },

    setContentSize: function (contentSize, height) {
        let locWidth = (height === undefined) ? contentSize.width : contentSize;
        let locHeight = (height === undefined) ? contentSize.height : height;
        this._super(locWidth, locHeight);
        this.__customSize = cc.size(locWidth, locHeight);
    },

    setDefaultFontSize: function (fontSize) {
        this.setFontSize(fontSize);
        this.__defaultFontSize = fontSize;
    },

    enableOutline: function (outlineColor, outlineSize) {
        this._super(outlineColor, outlineSize);
        this.__strokeColor = outlineColor;
        this.__strokeSize = outlineSize;
        this.__strokeEnabled = true;
    },

    enableShadow: function (shadowColor, offset, blurRadius = 0) {
        this._super(shadowColor, offset, blurRadius);
        this.__shadowColor = shadowColor;
        this.__shadowOffset = offset;
        this.__shadowBlurRadius = blurRadius;
        this.__shadowEnabled = true;
    },
});

ck.Text.create = function (textContent, fontName, fontSize) {
    return new ck.Text(textContent, fontName, fontSize);
};