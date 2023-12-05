/**
 * @class
 * @extends _ccs.WebView
 * @extends ck.SimpleAnimatedNode
 */
ck.WebView = _ccs.WebView.extend({

    /**
     * @type {ccui.WebView}
     */
    _webView: null,

    /**
     * @constructor
     * @param {string} [title=""]
     * @param {string} [url=""]
     */
    ctor: function (title = "", url = "") {
        _ccs.WebView.prototype.ctor.call(this);
        ck.SimpleAnimatedNode.prototype.ctor.call(this);
        this.initWebView();
        this.initButtons();
        this.setTitle(title);
        this.load(url);
    },

    initWebView: function () {
        if (ck.isWindows()) return;
        this._webView = new ccui.WebView();
        this.addChild(this._webView);
        this._webView.setAnchorPoint(this._layoutWebView.getAnchorPoint());
        this._webView.setPosition(this._layoutWebView.getPosition());
        this._webView.setContentSize(this._layoutWebView.getContentSize());
        if (cc.sys.isNative)
            this._webView.setScalesPageToFit(true);
    },

    initButtons: function () {
        ck.UIUtils.initPressableWidget(this._imgClose, this.onClosePressed.bind(this));
    },

    onClosePressed: function () {
        this.hide();
    },

    load: function (url) {
        if (!ck.isValid(this._webView)) return;
        if (!url) return;
        this._webView.loadURL(url);
    },

    setTitle: function (title) {
        if (!ck.isValid(this)) return;
        this._txtTitle.setString(title);
    },
});

ck.extend(ck.WebView, ck.SimpleAnimatedNode);

/**
 * @class
 * @extends ck.WebView
 */
let WebView = ck.WebView;

/**
 * Create ck.WebView
 * @returns {ck.WebView}
 */
ck.WebView.create = function (title, url) {
    return new WebView(title, url);
};

/**
 * @constant
 * @type {string}
 */
ck.WebView.NAME = "WebView";

/**
 * Show a web view in current scene
 * @param title
 * @param url
 * @return {ck.WebView}
 */
ck.WebView.show = function (title, url) {
    let parent = gm.loading.getCurrentScene();
    if (!ck.isValid(parent)) return;
    let webView = ck.WebView.create(title, url);
    parent.addChild(webView);
    webView.show();
    webView.setName(ck.WebView.NAME);
    return webView;
};

/**
 * Hide web view in current scene
 */
ck.WebView.hide = function () {
    let parent = gm.loading.getCurrentScene();
    if (!ck.isValid(parent)) return;
    let webview = parent.getChildByName(ck.WebView.NAME);
    webview.hide();
};


