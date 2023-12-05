/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.RamadanShareImageFrame3
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.RamadanShareImageFrame3 = cc.Layer.extend({

    /** @type {ccui.ImageView} */
    _imgBackground: null,
    /** @type {ccui.ImageView} */
    _imgText: null,
    /** @type {cc.Node} */
    _nodePhone: null,
    /** @type {ccui.ImageView} */
    _imgScreenShot: null,
    /** @type {ccui.Layout} */
    _imgBgrNotch: null,
    /** @type {ccui.ImageView} */
    _imgPhone: null,
    /** @type {ccui.ImageView} */
    _imgBgrCode: null,
    /** @type {ck.Text} */
    _txtTitle: null,
    /** @type {ck.Text} */
    _txtCode: null,
    /** @type {ck.Text} */
    _txtExpireTime: null,
    /** @type {ccui.ImageView} */
    _imgAppIconSearchBar: null,


    /**
     * _ccs.RamadanShareImageFrame3 constructor
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

        ///// # _imgBackground
        this._imgBackground = new ccui.ImageView();
        this._imgBackground.setName("_imgBackground");
        this.addChild(this._imgBackground);
        this._imgBackground.setCascadeOpacityEnabled(true);
        this._imgBackground.setCascadeColorEnabled(true);
        this._imgBackground.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._imgBackground, 0.5, 0.5);
        let _imgBackgroundLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBackground);
        _imgBackgroundLayoutComponent.setPositionPercentXEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentX(0.5);
        _imgBackgroundLayoutComponent.setPositionPercentYEnabled(true);
        _imgBackgroundLayoutComponent.setPositionPercentY(0.5);
        this._imgBackground.loadTexture("share-image/frames/ramadan/Background_03.png", 1);
        this._imgBackground.setUnifySizeEnabled(false);
        this._imgBackground.ignoreContentAdaptWithSize(false);
        this._imgBackground.setContentSize(cc.size(600, 600));
        this._imgBackground.setTouchEnabled(false);

        ///// # _imgText
        this._imgText = new ccui.ImageView();
        this._imgText.setName("_imgText");
        this._imgBackground.addChild(this._imgText);
        this._imgText.setCascadeOpacityEnabled(true);
        this._imgText.setCascadeColorEnabled(true);
        this._imgText.setAnchorPoint(cc.p(0, 1));
        ck.UIUtils.setPositionPercent(this._imgText, 0.03, 0.8633);
        let _imgTextLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgText);
        this._imgText.loadTexture("texts/share-image/ramadan/ShareImage_03.png", 1);
        this._imgText.setTouchEnabled(false);

        ///// # _nodePhone
        this._nodePhone = new cc.Node();
        this._nodePhone.setName("_nodePhone");
        this._imgBackground.addChild(this._nodePhone);
        this._nodePhone.setCascadeOpacityEnabled(true);
        this._nodePhone.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._nodePhone, 0.625, 0.1667);
        let _nodePhoneLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._nodePhone);

        ///// # _imgScreenShot
        this._imgScreenShot = new ccui.ImageView();
        this._imgScreenShot.setName("_imgScreenShot");
        this._nodePhone.addChild(this._imgScreenShot);
        this._imgScreenShot.setCascadeOpacityEnabled(true);
        this._imgScreenShot.setCascadeColorEnabled(true);
        let _imgScreenShotLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgScreenShot);
        this._imgScreenShot.loadTexture("Default/ImageFile.png", 0);
        this._imgScreenShot.setUnifySizeEnabled(false);
        this._imgScreenShot.ignoreContentAdaptWithSize(false);
        this._imgScreenShot.setContentSize(cc.size(200, 400));
        this._imgScreenShot.setTouchEnabled(false);

        ///// # _imgBgrNotch
        this._imgBgrNotch = new ccui.Layout();
        this._imgBgrNotch.setName("_imgBgrNotch");
        this._nodePhone.addChild(this._imgBgrNotch);
        this._imgBgrNotch.setCascadeOpacityEnabled(true);
        this._imgBgrNotch.setCascadeColorEnabled(true);
        this._imgBgrNotch.setAnchorPoint(cc.p(0.5, 0));
        this._imgBgrNotch.setPosition(100, 399);
        let _imgBgrNotchLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrNotch);
        this._imgBgrNotch.setTouchEnabled(true);
        this._imgBgrNotch.setUnifySizeEnabled(false);
        this._imgBgrNotch.ignoreContentAdaptWithSize(false);
        this._imgBgrNotch.setContentSize(cc.size(203.1273, 17.371));
        this._imgBgrNotch.setBackGroundColorType(1);
        this._imgBgrNotch.setBackGroundColor(cc.color(26, 26, 26, 255));

        ///// # _imgPhone
        this._imgPhone = new ccui.ImageView();
        this._imgPhone.setName("_imgPhone");
        this._nodePhone.addChild(this._imgPhone);
        this._imgPhone.setCascadeOpacityEnabled(true);
        this._imgPhone.setCascadeColorEnabled(true);
        this._imgPhone.setPosition(-17, -16.5);
        let _imgPhoneLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgPhone);
        this._imgPhone.loadTexture("other/Phone.png", 1);
        this._imgPhone.setUnifySizeEnabled(false);
        this._imgPhone.ignoreContentAdaptWithSize(false);
        this._imgPhone.setScale9Enabled(true);
        this._imgPhone.setCapInsets(cc.rect(40, 50, 148, 363));
        this._imgPhone.setContentSize(cc.size(233, 448));
        this._imgPhone.setTouchEnabled(false);

        ///// # _imgBgrCode
        this._imgBgrCode = new ccui.ImageView();
        this._imgBgrCode.setName("_imgBgrCode");
        this._imgBackground.addChild(this._imgBgrCode);
        this._imgBgrCode.setCascadeOpacityEnabled(true);
        this._imgBgrCode.setCascadeColorEnabled(true);
        this._imgBgrCode.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._imgBgrCode, 0.2684, 0.025);
        let _imgBgrCodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgBgrCode);
        _imgBgrCodeLayoutComponent.setPositionPercentXEnabled(true);
        _imgBgrCodeLayoutComponent.setPositionPercentX(0.2684);
        _imgBgrCodeLayoutComponent.setPositionPercentYEnabled(true);
        _imgBgrCodeLayoutComponent.setPositionPercentY(0.025);
        _imgBgrCodeLayoutComponent.setPercentWidthEnabled(true);
        _imgBgrCodeLayoutComponent.setPercentWidth(0.2867);
        this._imgBgrCode.loadTexture("basics2/other/Box_07.png", 1);
        this._imgBgrCode.setUnifySizeEnabled(false);
        this._imgBgrCode.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._imgBgrCode, 0.2867);
        this._imgBgrCode.setContentSize(cc.size(this._imgBgrCode.width, 88));
        this._imgBgrCode.setTouchEnabled(false);

        ///// # _txtTitle
        this._txtTitle = new ck.Text();
        this._txtTitle.setName("_txtTitle");
        this._imgBgrCode.addChild(this._txtTitle);
        this._txtTitle.setCascadeOpacityEnabled(true);
        this._txtTitle.setCascadeColorEnabled(true);
        this._txtTitle.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtTitle, 0.5, 1.1);
        let _txtTitleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtTitle);
        _txtTitleLayoutComponent.setPositionPercentXEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentX(0.5);
        _txtTitleLayoutComponent.setPositionPercentYEnabled(true);
        _txtTitleLayoutComponent.setPositionPercentY(1.1);
        this._txtTitle.setTouchEnabled(false);
        this._txtTitle.setUnifySizeEnabled(false);
        this._txtTitle.ignoreContentAdaptWithSize(false);
        this._txtTitle.setContentSize(cc.size(150, 31));
        this._txtTitle.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtTitle.setDefaultFontSize(28);
        this._txtTitle.setString(gm.localize.getText("TXT_DAILY_CODE"));
        this._txtTitle.setTextHorizontalAlignment(1);
        this._txtTitle.setTextVerticalAlignment(1);
        this._txtTitle.autoFitSingleLine();

        ///// # _txtCode
        this._txtCode = new ck.Text();
        this._txtCode.setName("_txtCode");
        this._imgBgrCode.addChild(this._txtCode);
        this._txtCode.setCascadeOpacityEnabled(true);
        this._txtCode.setCascadeColorEnabled(true);
        this._txtCode.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtCode, 0.5, 0.5);
        this._txtCode.setTextColor(cc.color(255, 241, 168, 255));
        let _txtCodeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtCode);
        _txtCodeLayoutComponent.setPositionPercentXEnabled(true);
        _txtCodeLayoutComponent.setPositionPercentX(0.5);
        _txtCodeLayoutComponent.setPositionPercentYEnabled(true);
        _txtCodeLayoutComponent.setPositionPercentY(0.5);
        this._txtCode.setTouchEnabled(false);
        this._txtCode.setUnifySizeEnabled(false);
        this._txtCode.ignoreContentAdaptWithSize(false);
        this._txtCode.setContentSize(cc.size(130, 60));
        this._txtCode.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtCode.setDefaultFontSize(60);
        this._txtCode.setTextHorizontalAlignment(1);
        this._txtCode.setTextVerticalAlignment(1);
        this._txtCode.autoFitSingleLine();

        ///// # _txtExpireTime
        this._txtExpireTime = new ck.Text();
        this._txtExpireTime.setName("_txtExpireTime");
        this._imgBgrCode.addChild(this._txtExpireTime);
        this._txtExpireTime.setCascadeOpacityEnabled(true);
        this._txtExpireTime.setCascadeColorEnabled(true);
        this._txtExpireTime.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this._txtExpireTime, 0.5, -0.05);
        let _txtExpireTimeLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtExpireTime);
        _txtExpireTimeLayoutComponent.setPositionPercentXEnabled(true);
        _txtExpireTimeLayoutComponent.setPositionPercentX(0.5);
        _txtExpireTimeLayoutComponent.setPositionPercentYEnabled(true);
        _txtExpireTimeLayoutComponent.setPositionPercentY(-0.05);
        this._txtExpireTime.setTouchEnabled(false);
        this._txtExpireTime.setUnifySizeEnabled(false);
        this._txtExpireTime.ignoreContentAdaptWithSize(false);
        this._txtExpireTime.setContentSize(cc.size(150, 20));
        this._txtExpireTime.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtExpireTime.setDefaultFontSize(18);
        this._txtExpireTime.setTextHorizontalAlignment(1);
        this._txtExpireTime.setTextVerticalAlignment(1);
        this._txtExpireTime.autoFitSingleLine();

        ///// # _imgAppIconSearchBar
        this._imgAppIconSearchBar = new ccui.ImageView();
        this._imgAppIconSearchBar.setName("_imgAppIconSearchBar");
        this._imgBackground.addChild(this._imgAppIconSearchBar);
        this._imgAppIconSearchBar.setCascadeOpacityEnabled(true);
        this._imgAppIconSearchBar.setCascadeColorEnabled(true);
        this._imgAppIconSearchBar.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._imgAppIconSearchBar, 0.9833, 0.0083);
        this._imgAppIconSearchBar.setScale(0.6, 0.6);
        let _imgAppIconSearchBarLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._imgAppIconSearchBar);
        this._imgAppIconSearchBar.loadTexture("other/AppIconSearchBar.png", 1);
        this._imgAppIconSearchBar.setUnifySizeEnabled(false);
        this._imgAppIconSearchBar.ignoreContentAdaptWithSize(false);
        this._imgAppIconSearchBar.setContentSize(cc.size(360, 106));
        this._imgAppIconSearchBar.setTouchEnabled(false);

    },



});

/**
 * Create RamadanShareImageFrame3
 * @returns {_ccs.RamadanShareImageFrame3}
 */
_ccs.RamadanShareImageFrame3.create = function () {
    return new _ccs.RamadanShareImageFrame3();
};
