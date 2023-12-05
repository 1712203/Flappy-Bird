/**
 * Behavior for a tab selector item
 * @class
 * @abstract
 * @extends ck.GridViewCell
 */
ck.TabSelectorItem = ck.GridViewCell.extend({

    /**
     * Root layout
     * @type {ccui.Layout}
     */
    _layoutRoot: null,

    /**
     * Background shown when tab is NOT selected
     * @type {ccui.ImageView}
     */
    _imgBgrNormal: null,

    /**
     * Background shown when tab is selected
     * @type {ccui.ImageView}
     */
    _imgBgrSelected: null,

    /**
     * Tab name text
     * @type {ccui.Text}
     */
    _txtName: null,

    /**
     * Red dot of tab
     * @type {ccui.ImageView}
     */
    _imgRedDot: null,
    
    /**
     * Tab id
     * @number
     */
    _id: -1,

    /**
     * Call when this widget is pressed
     * @type {function(sender: ck.TabSelectorItem): void}
     */
    _pressCallback: null,

    /**
     * @constructor
     */
    ctor: function () {
        ck.UIUtils.fillContainer(this, this._layoutRoot);
        ck.UIUtils.initPressableWidget(this._layoutRoot, this.onPressed.bind(this));
        this.setSelected(false);
    },

    onPressed: function () {
        if (this._pressCallback) {
            this._pressCallback(this);
        }
    },

    /**
     * @returns {number}
     */
    getID: function () {
        return this._id;
    },

    /**
     * @param {number} id
     */
    setID: function (id) {
        this._id = id;
    },

    /**
     * Set press callback
     * @param {function(sender: ck.TabSelectorItem): void} pressCallback
     */
    setPressCallback: function (pressCallback) {
        this._pressCallback = pressCallback;
    },

    /**
     * Set is selected or not
     * @param {boolean} isSelected
     */
    setSelected: function (isSelected) {
        if (!ck.isValid(this)) return;
        if (this._imgBgrSelected) this._imgBgrSelected.setVisible(isSelected);
        if (this._imgBgrNormal) this._imgBgrNormal.setVisible(!isSelected);
        if (this._imgRedDot && isSelected) {
            this._imgRedDot.setVisible(false);
        }
    },

    /**
     * Set tab name text
     * @param {string} name
     */
    setTabName: function (name) {
        if (!ck.isValid(this._txtName)) return;
        this._txtName.setString(name);
    },

    /**
     * Set tab name color
     * @param {cc.Color} color
     */
    setColorTabName: function (color) {
        if (!ck.isValid(this._txtName)) return;
        this._txtName.setTextColor(color);
    },

    /**
     * Set red dot visible or not
     * @param {boolean} isVisible
     */
    setRedDotVisible: function (isVisible) {
        if (!ck.isValid(this._imgRedDot)) return;
        this._imgRedDot.setVisible(isVisible);
    },

    /**
     * Reset
     */
    reset: function () {
        if (!ck.isValid(this)) return;
        this.setID(-1);
        this.setTabName("");
        this.setRedDotVisible(false);
    },

    /**
     * Set data
     * @override
     * @param {ck.TabSelectorItemData} data
     */
    setData: function (data) {
        if (!data) return;
        this.setID(data.getID());
        this.setTabName(data.getName());
        this.setRedDotVisible(data.hasRedDot());
    },
});
