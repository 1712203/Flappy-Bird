/**
 * A Loader layer used to load assets with a callback
 * Override this class to used as a scene loader, and add other task (Ex. Request HTTP, load json config, etc.)
 *
 * @class
 * @extends _ccs.LoaderLayer
 */
ck.LoaderLayer = _ccs.LoaderLayer.extend({

    _percent: 0,
    _assetTargetPercent: 100,
    _currentAssetIndex: 0,
    _percentEachAsset: 0,
    _progressTargetPercent: 0,
    _percentStartLoadingAssets: 0,
    _animPercent: 10,

    /** @type {AssetInfo[]} */
    _assets: null,

    /** @type {Function} */
    _callback: null,

    /** @type {Function} */
    _progressCallback: null,

    /**
     * @constructor
     */
    ctor: function () {
        _ccs.LoaderLayer.prototype.ctor.call(this);
        this._relayoutBackground();
        this._assets = [];
        this.setPercent(0);
        this.setHint(gm.loading.config.getRandomTip());
    },

    _relayoutBackground: function () {
        let scaleX = this._imgBgr.getParent().width / this._imgBgr.width;
        let scaleY = this._imgBgr.getParent().height / this._imgBgr.height;
        let scale = scaleX > scaleY ? scaleX : scaleY;
        this._imgBgr.setContentSize(this._imgBgr.width * scale, this._imgBgr.height * scale);
    },

    /**
     * This function is called when all assets is loaded
     * Override it if you want to do some tasks after loading assets
     * @callback
        */
    _onAssetsLoaded: function () {
        this._onEverythingLoaded();
    },

    /**
     * This function called when every thing is loaded
     * The callback will be called
     * @callback
        */
    _onEverythingLoaded: function () {
        if (this._callback) {
            this._callback();
        }
    },

    /**
     * @override
     * @param data
     */
    setData: function (data) {

    },

    /**
     * Update function
     * @param {number} dt
     * @override
     */
    update: function (dt) {
        if (this._percent >= this._progressTargetPercent) {
            this.unscheduleUpdate();
            if (this._progressCallback) {
                this._progressCallback();
            }
        } else {
            this.setPercent(this._percent + this._animPercent);
        }
    },

    /**
     * @override
     */
    onEnter: function () {
        cc.Layer.prototype.onEnter.call(this);
        this.scheduleOnce(this.startLoading, 0.3);
    },

    /**
     * Add assets to load
     * @param {Array<AssetInfo>} assets
     */
    addAssets: function (assets) {
        if (!assets) return;
        assets.forEach(function (asset) {
            this.addAsset(asset);
        }.bind(this));
    },

    /**
     * Add an asset to load
     * @param {AssetInfo} asset
     */
    addAsset: function (asset) {
        this._assets.push(asset);
    },

    /**
     * Add assets to load by file names
     * @param {Array<String>} fileNames
     */
    addAssetByFileNames: function (fileNames) {
        fileNames.forEach(function (fileName) {
            this.addAsset(fileName);
        }.bind(this));
    },

    /**
     * Add asset to load by file name
     * @param {string} fileName
     */
    addAssetByFileName: function (fileName) {
        this.addAsset(ck.AssetInfo.create(fileName));
    },

    /**
     * Set callback function
     * @param {Function} callback
     */
    setCallback: function (callback) {
        this._callback = callback;
    },

    /**
     * Override this function to update your UI
     * @param {number} percent Percent in range [0, 100]
     */
    setPercent: function (percent) {
        if (percent < 0) percent = 0;
        if (percent > 100) percent = 100;
        this._percent = percent;

        if (this._loadingBar) {
            this._loadingBar.setPercent(percent);
        }
        if (this._txtPercent) {
            this._txtPercent.setString(Math.ceil(percent) + "%");
        }
        if (this._nodeLoadingHead) {
            this._nodeLoadingHead.x = this._loadingBar.width * percent / 100;
        }
    },

    /**
     * Set time of loading bar animation
     *
     * @param {number} seconds Time for animation of loading bar
     */
    setAnimationTime: function (seconds) {
        const fps = 1 / cc.director.getAnimationInterval();
        const frames = fps * seconds;
        const percent = frames > 0 ? 100 / frames : 1;
        this._animPercent = Math.max(1, percent);
    },

    /**
     * Progress to a percent, then call the callback
     * @param {number} percent
     * @param {Function} callback
     */
    progressTo: function (percent, callback) {
        this._progressTargetPercent = percent;
        this._progressCallback = callback;
        this.scheduleUpdate();
    },

    /**
     * Load current asset `this._currentAssetIndex` in `this._assets`
     * @private
     */
    loadCurrentAsset: function () {
        if (this._currentAssetIndex < this._assets.length) {
            const asset = this._assets[this._currentAssetIndex];
            if (asset) {
                ck.loader.loadAsset(asset);
            }
            this._currentAssetIndex++;
            const percent = this._percentStartLoadingAssets + this._percentEachAsset * this._currentAssetIndex;
            this.progressTo(percent, this.loadCurrentAsset.bind(this));
        } else {
            this.progressTo(this._assetTargetPercent, this._onAssetsLoaded.bind(this));
        }
    },

    /**
     * Start loading
     * Override this function if you want to do something before loading asset
     * Call `startLoadingAssets` when you want to start loading assets
     * @protected
     */
    startLoading: function () {
        let cb = () => {this.startLoadingAssets(100);};
        this.loadGC(25, cb);
    },

    loadGC: function (percent, callback) {
        this.progressTo(percent, () => {
            this.callGC();
            callback && callback();
        });
    },

    callGC: function () {
        cc.sys.garbageCollect();
    },

    /**
     * Start loading assets
     */
    startLoadingAssets: function (targetPercent) {
        this._assetTargetPercent = targetPercent || 100;
        this._percentStartLoadingAssets = this._percent;
        this._currentAssetIndex = 0;
        const nAssets = this._assets.length;
        this._percentEachAsset = nAssets > 0 ? (this._assetTargetPercent - this._percentStartLoadingAssets) / nAssets : 100;
        if (this._percentEachAsset < 0) this._percentEachAsset = 0;
        if (this._percentEachAsset > 100) this._percentEachAsset = 100;
        this.loadCurrentAsset();
    },

    /**
     * Set hint
     * @param {string} hint
     */
    setHint: function (hint) {
        if (!hint || hint === "")
            hint = gm.localize.getText("TXT_LOADING") + "...";
        this._txtHint.setString(hint);
    },

    showLoadingBar: function () {
        if (this._layoutBar) this._layoutBar.setVisible(true);
        if (this._txtHint) this._txtHint.setVisible(true);
    },

    hideLoadingBar: function () {
        if (this._layoutBar) this._layoutBar.setVisible(false);
        if (this._txtHint) this._txtHint.setVisible(false);
    },
});

/**
 * @class
 * @extends ck.LoaderLayer
 */
let LoaderLayer = ck.LoaderLayer;

/**
 * @returns {LoaderLayer}
 */
LoaderLayer.create = function () {
    return new LoaderLayer();
};
