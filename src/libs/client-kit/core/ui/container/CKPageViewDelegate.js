/**
 * PageViewDelegate with some more elements like arrows, page dots
 * @abstract
 * @class
 * @extends cc.Class
 */
ck.PageViewDelegate = cc.Class.extend({
    /**
     * @type {ccui.PageView}
     */
    _pageView: null,

    /**
     * @type {cc.Sprite[]}
     */
    _dots: null,

    /**
     * @type {cc.Sprite}
     */
    _dotCurrent: null,

    /**
     * @type {ccui.Button}
     */
    _btnArrowLeft: null,

    /**
     * @type {ccui.Button}
     */
    _btnArrowRight: null,

    /**
     * @type {number}
     */
    _currentPageIndex: -1,

    /**
     * @constructor
     */
    ctor: function () {
        this._initPageViewDelegate();
        this._pageView.addEventListener(this.onPageViewTurned, this);
        UIUtils.initPressableWidget(this._btnArrowLeft, this.onArrowLeftPressed.bind(this));
        UIUtils.initPressableWidget(this._btnArrowRight, this.onArrowRightPressed.bind(this));
    },

    /**
     * This function is called once in constructor
     * Call this function again if need to init after constructor
     * @protected
     */
    _initPageViewDelegate: function () {
        this._currentPageIndex = -1;
        this._initPages();
        const nPages = this._pageView.getPages().length;
        if (nPages === 0)
            return;

        this._dots = [];
        for (let i = 0; i < nPages; i++) {
            const dot = this.getDot(i);
            if (dot) {
                this._dots.push(dot);
            }
        }
        this.setCurrentPageIndex(0);
    },

    /**
     * Init pages here (Don't need to init if has already added pages in ccs)
     * @virtual
     * @protected
     */
    _initPages: function () {},

    /**
     * @param {number} index
     * @virtual
     */
    onPageViewTurnedIndex: function (index) {},

    /**
     * @param {number} index
     * @returns {cc.Sprite|null}
     */
    getDot: function (index) {
        const dot = this.getDotPrefix() + this.getIndexString(index);
        return this[dot];
    },

    /**
     * @returns {string}
     */
    getDotPrefix: function () {
        return "_dot"
    },

    /**
     * @param {number} index
     * @returns {string}
     */
    getIndexString: function (index) {
        const padLength = this.getPadLength();
        return index.pad(padLength);
    },

    /**
     * @returns {number}
     */
    getPadLength: function () {
        return 2;
    },

    /**
     * @param {ccui.PageView} sender
     * @param {number} type
     */
    onPageViewTurned: function (sender, type) {
        if (!ck.isValid(this)) return;
        if (type === ccui.PageView.EVENT_TURNING) {
            let index = this._pageView.getCurPageIndex();
            if (this.setCurrentPageIndex(index)) {
                this.onPageViewTurnedIndex(index);
            }
        }
    },

    onArrowLeftPressed: function () {
        if (!ck.isValid(this)) return;
        const index = this._pageView.getCurPageIndex() - 1;
        const length = this._pageView.getPages().length;
        if (index >= 0 && index < length) {
            this._pageView.scrollToPage(index);
            this.setCurrentPageIndex(index);
            this.onPageViewTurnedIndex(index);
        }
    },

    onArrowRightPressed: function () {
        if (!ck.isValid(this)) return;
        const index = this._pageView.getCurPageIndex() + 1;
        const length = this._pageView.getPages().length;
        if (index >= 0 && index < length) {
            this._pageView.scrollToPage(index);
            this.setCurrentPageIndex(index);
            this.onPageViewTurnedIndex(index);
        }
    },

    /**
     * @param {number} index
     */
    scrollPageViewToPage: function (index) {
        if (!ck.isValid(this)) return;
        const length = this._pageView.getPages().length;
        if (index >= 0 && index < length) {
            this._pageView.scrollToPage(index);
        }
    },

    /**
     * @param {number} index
     * @returns {boolean} Has turned page
     */
    setCurrentPageIndex: function (index) {
        if (!ck.isValid(this)) return false;
        if (this._currentPageIndex === index) return false;
        this._currentPageIndex = index;
        const length = this._pageView.getPages().length;
        this.setBtnArrowLeftEnabled(index > 0);
        this.setBtnArrowRightEnabled(index < length - 1);
        let dotSprite = this._dots[index];
        if (dotSprite) {
            this._dotCurrent.setPosition(dotSprite.getPosition());
        }
        return true;
    },

    /**
     * @param {boolean} enabled
     */
    setBtnArrowLeftEnabled: function (enabled) {
        if (!ck.isValid(this)) return;
        this._btnArrowLeft.setEnabled(enabled);
    },

    /**
     * @param {boolean} enabled
     */
    setBtnArrowRightEnabled: function (enabled) {
        if (!ck.isValid(this)) return;
        this._btnArrowRight.setEnabled(enabled);
    },

    /**
     * @param {ccui.PageView} pageView
     */
    setAliasPageView: function (pageView) {
        this._pageView = pageView;
    },

    /**
     * @param {ccui.Button} btnArrowLeft
     */
    setAliasBtnArrowLeft: function (btnArrowLeft) {
        this._btnArrowLeft = btnArrowLeft;
    },

    /**
     * @param {ccui.Button} btnArrowRight
     */
    setAliasBtnArrowRight: function (btnArrowRight) {
        this._btnArrowRight = btnArrowRight;
    },
});