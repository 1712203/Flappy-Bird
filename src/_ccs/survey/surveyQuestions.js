/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.surveyQuestions
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends ccui.Widget
 *
 */
_ccs.surveyQuestions = ccui.Widget.extend({

    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ck.Text} */
    _lbContent: null,
    /** @type {ccui.ImageView} */
    _imgNumber: null,
    /** @type {ck.Text} */
    _lbNumber: null,
    /** @type {ccui.Layout} */
    _panelOptions: null,


    /**
     * _ccs.surveyQuestions constructor
     * @constructor
     */
    ctor: function () {
        ccui.Widget.prototype.ctor.call(this);
        this.setCascadeOpacityEnabled(true);
        this._initCCSChildren();
    },

    /**
     * Init nodes from ccs
     * @private
     */
    _initCCSChildren: function () {

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 1));
        let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
        _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentX(0);
        _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentY(0);
        this._imgBgr.loadTexture("payment/Board_text.png", 1);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setScale9Enabled(true);
        this._imgBgr.setCapInsets(cc.rect(7, 9, 452, 88));
        this._imgBgr.setContentSize(cc.size(500, 320));
        this._imgBgr.setTouchEnabled(false);

        ///// # _lbContent
        this._lbContent = new ck.Text();
        this._lbContent.setName("_lbContent");
        this._imgBgr.addChild(this._lbContent);
        this._lbContent.setCascadeOpacityEnabled(true);
        this._lbContent.setCascadeColorEnabled(true);
        this._lbContent.setAnchorPoint(cc.p(0.5, 1));
        ck.UIUtils.setPositionPercent(this._lbContent, 0.5, 0.904);
        this._lbContent.setTextColor(cc.color(106, 37, 37, 255));
        let _lbContentLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lbContent);
        _lbContentLayoutComponent.setPositionPercentXEnabled(true);
        _lbContentLayoutComponent.setPositionPercentX(0.5);
        _lbContentLayoutComponent.setPositionPercentYEnabled(true);
        _lbContentLayoutComponent.setPositionPercentY(0.904);
        this._lbContent.setTouchEnabled(false);
        this._lbContent.setUnifySizeEnabled(false);
        this._lbContent.ignoreContentAdaptWithSize(false);
        this._lbContent.setContentSize(cc.size(475.2667, 106.907));
        this._lbContent.setFontName("fonts/BebasNeueProBold.ttf");
        this._lbContent.setDefaultFontSize(27);
        this._lbContent.setTextHorizontalAlignment(1);
        this._lbContent.setTextVerticalAlignment(0);

        ///// # _imgNumber
        this._imgNumber = new ccui.ImageView();
        this._imgNumber.setName("_imgNumber");
        this._imgBgr.addChild(this._imgNumber);
        this._imgNumber.setCascadeOpacityEnabled(true);
        this._imgNumber.setCascadeColorEnabled(true);
        this._imgNumber.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgNumber, 0.0143, 0.9669);
        this._imgNumber.setScale(1.5, 1.5);
        let _imgNumberLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNumber);
        _imgNumberLayoutComponent.setPositionPercentXEnabled(true);
        _imgNumberLayoutComponent.setPositionPercentX(0.0143);
        _imgNumberLayoutComponent.setPositionPercentYEnabled(true);
        _imgNumberLayoutComponent.setPositionPercentY(0.9669);
        this._imgNumber.loadTexture("basics/other/NumberBox.png", 1);
        this._imgNumber.setUnifySizeEnabled(false);
        this._imgNumber.ignoreContentAdaptWithSize(false);
        this._imgNumber.setContentSize(cc.size(30, 30));
        this._imgNumber.setTouchEnabled(false);

        ///// # _lbNumber
        this._lbNumber = new ck.Text();
        this._lbNumber.setName("_lbNumber");
        this._imgBgr.addChild(this._lbNumber);
        this._lbNumber.setCascadeOpacityEnabled(true);
        this._lbNumber.setCascadeColorEnabled(true);
        this._lbNumber.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._lbNumber, 0.0113, 0.9639);
        let _lbNumberLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._lbNumber);
        _lbNumberLayoutComponent.setPositionPercentXEnabled(true);
        _lbNumberLayoutComponent.setPositionPercentX(0.0113);
        _lbNumberLayoutComponent.setPositionPercentYEnabled(true);
        _lbNumberLayoutComponent.setPositionPercentY(0.9639);
        this._lbNumber.setTouchEnabled(false);
        this._lbNumber.ignoreContentAdaptWithSize(true);
        this._lbNumber.setFontName("fonts/LilitaOneRegular.ttf");
        this._lbNumber.setDefaultFontSize(22);
        this._lbNumber.setTextHorizontalAlignment(1);
        this._lbNumber.setTextVerticalAlignment(1);

        ///// # _panelOptions
        this._panelOptions = new ccui.Layout();
        this._panelOptions.setName("_panelOptions");
        this._imgBgr.addChild(this._panelOptions);
        this._panelOptions.setCascadeOpacityEnabled(true);
        this._panelOptions.setCascadeColorEnabled(true);
        this._panelOptions.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._panelOptions, 0.5, 0.2989);
        let _panelOptionsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._panelOptions);
        _panelOptionsLayoutComponent.setPositionPercentXEnabled(true);
        _panelOptionsLayoutComponent.setPositionPercentX(0.5);
        _panelOptionsLayoutComponent.setPositionPercentYEnabled(true);
        _panelOptionsLayoutComponent.setPositionPercentY(0.2989);
        this._panelOptions.setTouchEnabled(true);
        this._panelOptions.setUnifySizeEnabled(false);
        this._panelOptions.ignoreContentAdaptWithSize(false);
        this._panelOptions.setContentSize(cc.size(469.3809, 176.6434));

    },



});

/**
 * Create surveyQuestions
 * @returns {_ccs.surveyQuestions}
 */
_ccs.surveyQuestions.create = function () {
    return new _ccs.surveyQuestions();
};
