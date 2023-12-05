/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.RatingPopup
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.RatingPopup = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _root: null,
    /** @type {ccui.ImageView} */
    _imgBgr: null,
    /** @type {ccui.ImageView} */
    _imgFiveStars: null,
    /** @type {ccui.ImageView} */
    _imgVoteFiveStars: null,
    /** @type {ccui.ImageView} */
    _imgMessage: null,
    /** @type {ccui.ImageView} */
    _imgRate: null,
    /** @type {ck.Text} */
    _txtRate: null,
    /** @type {ccui.ImageView} */
    _imgStar: null,
    /** @type {ccui.ImageView} */
    _imgNPC: null,
    /** @type {ccui.ImageView} */
    _imgClose: null,


    /**
     * _ccs.RatingPopup constructor
     * @constructor
     */
    ctor: function () {
        cc.Layer.prototype.ctor.call(this);
        this.setCascadeOpacityEnabled(true);
        this._initCCSChildren();
    },

    /**
     * Init nodes from ccs
     * @private
     */
    _initCCSChildren: function () {

        ///// # _root
        this._root = new ccui.Layout();
        this._root.setName("_root");
        this.addChild(this._root);
        this._root.setCascadeOpacityEnabled(true);
        this._root.setCascadeColorEnabled(true);
        this._root.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._root, 0.5, 0.5);
        let _rootLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._root);
        _rootLayoutComponent.setPositionPercentXEnabled(true);
        _rootLayoutComponent.setPositionPercentX(0.5);
        _rootLayoutComponent.setPositionPercentYEnabled(true);
        _rootLayoutComponent.setPositionPercentY(0.5);
        _rootLayoutComponent.setPercentWidthEnabled(true);
        _rootLayoutComponent.setPercentWidth(1);
        _rootLayoutComponent.setPercentHeightEnabled(true);
        _rootLayoutComponent.setPercentHeight(1);
        this._root.setTouchEnabled(true);
        this._root.setUnifySizeEnabled(false);
        this._root.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._root, 1, 1);

        ///// # _imgBgr
        this._imgBgr = new ccui.ImageView();
        this._imgBgr.setName("_imgBgr");
        this._root.addChild(this._imgBgr);
        this._imgBgr.setCascadeOpacityEnabled(true);
        this._imgBgr.setCascadeColorEnabled(true);
        this._imgBgr.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBgr, 0.5, 0.6285);
        let _imgBgrLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgr);
        _imgBgrLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentX(0.5);
        _imgBgrLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrLayoutComponent.setPositionPercentY(0.6285);
        this._imgBgr.loadTexture("rating/Background.png", 1);
        this._imgBgr.setUnifySizeEnabled(false);
        this._imgBgr.ignoreContentAdaptWithSize(false);
        this._imgBgr.setContentSize(cc.size(635, 642));
        this._imgBgr.setTouchEnabled(false);

        ///// # _imgFiveStars
        this._imgFiveStars = new ccui.ImageView();
        this._imgFiveStars.setName("_imgFiveStars");
        this._root.addChild(this._imgFiveStars);
        this._imgFiveStars.setCascadeOpacityEnabled(true);
        this._imgFiveStars.setCascadeColorEnabled(true);
        this._imgFiveStars.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgFiveStars, 0.5, 0.8363);
        let _imgFiveStarsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgFiveStars);
        _imgFiveStarsLayoutComponent.setPositionPercentXEnabled(true);
        _imgFiveStarsLayoutComponent.setPositionPercentX(0.5);
        _imgFiveStarsLayoutComponent.setPositionPercentYEnabled(true);
        _imgFiveStarsLayoutComponent.setPositionPercentY(0.8363);
        this._imgFiveStars.loadTexture("rating/FiveStars.png", 1);
        this._imgFiveStars.setUnifySizeEnabled(false);
        this._imgFiveStars.ignoreContentAdaptWithSize(false);
        this._imgFiveStars.setContentSize(cc.size(517, 212));
        this._imgFiveStars.setTouchEnabled(false);

        ///// # _imgVoteFiveStars
        this._imgVoteFiveStars = new ccui.ImageView();
        this._imgVoteFiveStars.setName("_imgVoteFiveStars");
        this._root.addChild(this._imgVoteFiveStars);
        this._imgVoteFiveStars.setCascadeOpacityEnabled(true);
        this._imgVoteFiveStars.setCascadeColorEnabled(true);
        this._imgVoteFiveStars.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgVoteFiveStars, 0.5, 0.7193);
        let _imgVoteFiveStarsLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgVoteFiveStars);
        _imgVoteFiveStarsLayoutComponent.setPositionPercentXEnabled(true);
        _imgVoteFiveStarsLayoutComponent.setPositionPercentX(0.5);
        _imgVoteFiveStarsLayoutComponent.setPositionPercentYEnabled(true);
        _imgVoteFiveStarsLayoutComponent.setPositionPercentY(0.7193);
        this._imgVoteFiveStars.loadTexture("texts/rating/VoteFiveStars.png", 1);
        this._imgVoteFiveStars.setTouchEnabled(false);

        ///// # _imgMessage
        this._imgMessage = new ccui.ImageView();
        this._imgMessage.setName("_imgMessage");
        this._root.addChild(this._imgMessage);
        this._imgMessage.setCascadeOpacityEnabled(true);
        this._imgMessage.setCascadeColorEnabled(true);
        this._imgMessage.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgMessage, 0.5, 0.5829);
        let _imgMessageLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgMessage);
        _imgMessageLayoutComponent.setPositionPercentXEnabled(true);
        _imgMessageLayoutComponent.setPositionPercentX(0.5);
        _imgMessageLayoutComponent.setPositionPercentYEnabled(true);
        _imgMessageLayoutComponent.setPositionPercentY(0.5829);
        this._imgMessage.loadTexture("texts/rating/IfYouLikeTheGame.png", 1);
        this._imgMessage.setTouchEnabled(false);

        ///// # _imgRate
        this._imgRate = new ccui.ImageView();
        this._imgRate.setName("_imgRate");
        this._root.addChild(this._imgRate);
        this._imgRate.setCascadeOpacityEnabled(true);
        this._imgRate.setCascadeColorEnabled(true);
        this._imgRate.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgRate, 0.5, 0.4164);
        let _imgRateLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgRate);
        _imgRateLayoutComponent.setPositionPercentXEnabled(true);
        _imgRateLayoutComponent.setPositionPercentX(0.5);
        _imgRateLayoutComponent.setPositionPercentYEnabled(true);
        _imgRateLayoutComponent.setPositionPercentY(0.4164);
        this._imgRate.loadTexture("buttons/rectangles/Yellow.png", 1);
        this._imgRate.setUnifySizeEnabled(false);
        this._imgRate.ignoreContentAdaptWithSize(false);
        this._imgRate.setContentSize(cc.size(258.0558, 101.4685));
        this._imgRate.setTouchEnabled(true);

        ///// # _txtRate
        this._txtRate = new ck.Text();
        this._txtRate.setName("_txtRate");
        this._imgRate.addChild(this._txtRate);
        this._txtRate.setCascadeOpacityEnabled(true);
        this._txtRate.setCascadeColorEnabled(true);
        this._txtRate.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtRate, 0.3833, 0.5058);
        let _txtRateLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtRate);
        _txtRateLayoutComponent.setPositionPercentXEnabled(true);
        _txtRateLayoutComponent.setPositionPercentX(0.3833);
        _txtRateLayoutComponent.setPositionPercentYEnabled(true);
        _txtRateLayoutComponent.setPositionPercentY(0.5058);
        this._txtRate.setTouchEnabled(false);
        this._txtRate.ignoreContentAdaptWithSize(true);
        this._txtRate.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtRate.setDefaultFontSize(60);
        this._txtRate.setTextHorizontalAlignment(1);
        this._txtRate.setTextVerticalAlignment(1);
        this._txtRate.enableOutline(cc.color(158, 82, 9, 255), 3);

        ///// # _imgStar
        this._imgStar = new ccui.ImageView();
        this._imgStar.setName("_imgStar");
        this._imgRate.addChild(this._imgStar);
        this._imgStar.setCascadeOpacityEnabled(true);
        this._imgStar.setCascadeColorEnabled(true);
        this._imgStar.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgStar, 0.7537, 0.5195);
        let _imgStarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgStar);
        _imgStarLayoutComponent.setPositionPercentXEnabled(true);
        _imgStarLayoutComponent.setPositionPercentX(0.7537);
        _imgStarLayoutComponent.setPositionPercentYEnabled(true);
        _imgStarLayoutComponent.setPositionPercentY(0.5195);
        this._imgStar.loadTexture("rating/Star.png", 1);
        this._imgStar.setUnifySizeEnabled(false);
        this._imgStar.ignoreContentAdaptWithSize(false);
        this._imgStar.setContentSize(cc.size(60, 57));
        this._imgStar.setTouchEnabled(false);

        ///// # _imgNPC
        this._imgNPC = new ccui.ImageView();
        this._imgNPC.setName("_imgNPC");
        this._root.addChild(this._imgNPC);
        this._imgNPC.setCascadeOpacityEnabled(true);
        this._imgNPC.setCascadeColorEnabled(true);
        let _imgNPCLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgNPC);
        _imgNPCLayoutComponent.setPositionPercentXEnabled(true);
        _imgNPCLayoutComponent.setPositionPercentX(0);
        _imgNPCLayoutComponent.setPositionPercentYEnabled(true);
        _imgNPCLayoutComponent.setPositionPercentY(0);
        this._imgNPC.loadTexture("rating/NPC.png", 1);
        this._imgNPC.setUnifySizeEnabled(false);
        this._imgNPC.ignoreContentAdaptWithSize(false);
        this._imgNPC.setContentSize(cc.size(329, 475));
        this._imgNPC.setTouchEnabled(false);

        ///// # _imgClose
        this._imgClose = new ccui.ImageView();
        this._imgClose.setName("_imgClose");
        this._root.addChild(this._imgClose);
        this._imgClose.setCascadeOpacityEnabled(true);
        this._imgClose.setCascadeColorEnabled(true);
        this._imgClose.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgClose, 0.9128, 0.8414);
        let _imgCloseLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgClose);
        _imgCloseLayoutComponent.setPositionPercentXEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentX(0.9128);
        _imgCloseLayoutComponent.setPositionPercentYEnabled(true);
        _imgCloseLayoutComponent.setPositionPercentY(0.8414);
        this._imgClose.loadTexture("buttons/rectangles/Close.png", 1);
        this._imgClose.setUnifySizeEnabled(false);
        this._imgClose.ignoreContentAdaptWithSize(false);
        this._imgClose.setContentSize(cc.size(81, 83));
        this._imgClose.setTouchEnabled(false);

    },



});

/**
 * Create RatingPopup
 * @returns {_ccs.RatingPopup}
 */
_ccs.RatingPopup.create = function () {
    return new _ccs.RatingPopup();
};
