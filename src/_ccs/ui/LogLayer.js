/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.LogLayer
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @extends cc.Layer
 *
 */
_ccs.LogLayer = cc.Layer.extend({

    /** @type {ccui.Layout} */
    _mainPnl: null,
    /** @type {ccui.Layout} */
    _line: null,
    /** @type {ccui.ListView} */
    _listViewConsole: null,
    /** @type {ccui.Layout} */
    _btnMove: null,
    /** @type {ccui.Layout} */
    _thumb: null,
    /** @type {ccui.Layout} */
    _btnClear: null,
    /** @type {ck.Text} */
    Text_1: null,
    /** @type {ck.Text} */
    _txtAutoscroll: null,
    /** @type {ccui.Layout} */
    _btnCopy: null,
    /** @type {ck.Text} */
    Text_1: null,


    /**
     * _ccs.LogLayer constructor
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

        ///// # _mainPnl
        this._mainPnl = new ccui.Layout();
        this._mainPnl.setName("_mainPnl");
        this.addChild(this._mainPnl);
        this._mainPnl.setCascadeOpacityEnabled(true);
        this._mainPnl.setCascadeColorEnabled(true);
        this._mainPnl.setAnchorPoint(cc.p(1, 0.5));
        ck.UIUtils.setPositionPercent(this._mainPnl, 0, 0.4);
        let _mainPnlLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._mainPnl);
        _mainPnlLayoutComponent.setPositionPercentXEnabled(true);
        _mainPnlLayoutComponent.setPositionPercentX(0);
        _mainPnlLayoutComponent.setPositionPercentYEnabled(true);
        _mainPnlLayoutComponent.setPositionPercentY(0.4);
        this._mainPnl.setTouchEnabled(false);
        this._mainPnl.setUnifySizeEnabled(false);
        this._mainPnl.ignoreContentAdaptWithSize(false);
        this._mainPnl.setContentSize(cc.size(500, 625.5057));
        this._mainPnl.setBackGroundColorType(1);
        this._mainPnl.setBackGroundColor(cc.color(0, 0, 0, 255));
        this._mainPnl.setBackGroundColorOpacity(204);

        ///// # _line
        this._line = new ccui.Layout();
        this._line.setName("_line");
        this._mainPnl.addChild(this._line);
        this._line.setCascadeOpacityEnabled(true);
        this._line.setCascadeColorEnabled(true);
        ck.UIUtils.setPositionPercent(this._line, 0, 0.0751);
        let _lineLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._line);
        _lineLayoutComponent.setPositionPercentXEnabled(true);
        _lineLayoutComponent.setPositionPercentX(0);
        _lineLayoutComponent.setPercentWidthEnabled(true);
        _lineLayoutComponent.setPercentWidth(1);
        this._line.setTouchEnabled(true);
        this._line.setUnifySizeEnabled(false);
        this._line.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setWidthPercent(this._line, 1);
        this._line.setContentSize(cc.size(this._line.width, 1));
        this._line.setBackGroundColorType(1);
        this._line.setBackGroundColor(cc.color(255, 159, 25, 255));

        ///// # _listViewConsole
        this._listViewConsole = new ccui.ListView();
        this._listViewConsole.setName("_listViewConsole");
        this._mainPnl.addChild(this._listViewConsole);
        this._listViewConsole.setCascadeOpacityEnabled(true);
        this._listViewConsole.setCascadeColorEnabled(true);
        this._listViewConsole.setAnchorPoint(cc.p(0.5, 0));
        ck.UIUtils.setPositionPercent(this._listViewConsole, 0.5, 0.0799);
        let _listViewConsoleLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._listViewConsole);
        _listViewConsoleLayoutComponent.setPositionPercentXEnabled(true);
        _listViewConsoleLayoutComponent.setPositionPercentX(0.5);
        _listViewConsoleLayoutComponent.setPositionPercentYEnabled(true);
        _listViewConsoleLayoutComponent.setPositionPercentY(0.0799);
        _listViewConsoleLayoutComponent.setPercentWidthEnabled(true);
        _listViewConsoleLayoutComponent.setPercentWidth(0.95);
        _listViewConsoleLayoutComponent.setPercentHeightEnabled(true);
        _listViewConsoleLayoutComponent.setPercentHeight(0.9001);
        this._listViewConsole.setTouchEnabled(true);
        this._listViewConsole.setUnifySizeEnabled(false);
        this._listViewConsole.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._listViewConsole, 0.95, 0.9001);
        this._listViewConsole.setDirection(ccui.ScrollView.DIR_VERTICAL);
        this._listViewConsole.setBounceEnabled(true);

        ///// # _btnMove
        this._btnMove = new ccui.Layout();
        this._btnMove.setName("_btnMove");
        this._mainPnl.addChild(this._btnMove);
        this._btnMove.setCascadeOpacityEnabled(true);
        this._btnMove.setCascadeColorEnabled(true);
        this._btnMove.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._btnMove, 1, 0.5);
        let _btnMoveLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnMove);
        _btnMoveLayoutComponent.setPositionPercentXEnabled(true);
        _btnMoveLayoutComponent.setPositionPercentX(1);
        _btnMoveLayoutComponent.setPositionPercentYEnabled(true);
        _btnMoveLayoutComponent.setPositionPercentY(0.5);
        this._btnMove.setTouchEnabled(false);
        this._btnMove.setUnifySizeEnabled(false);
        this._btnMove.ignoreContentAdaptWithSize(false);
        this._btnMove.setContentSize(cc.size(50, 50));

        ///// # _thumb
        this._thumb = new ccui.Layout();
        this._thumb.setName("_thumb");
        this._btnMove.addChild(this._thumb);
        this._thumb.setCascadeOpacityEnabled(true);
        this._thumb.setCascadeColorEnabled(true);
        this._thumb.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._thumb, 0, 0.5);
        let _thumbLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._thumb);
        _thumbLayoutComponent.setPositionPercentYEnabled(true);
        _thumbLayoutComponent.setPositionPercentY(0.5);
        _thumbLayoutComponent.setPercentWidthEnabled(true);
        _thumbLayoutComponent.setPercentWidth(0.5);
        _thumbLayoutComponent.setPercentHeightEnabled(true);
        _thumbLayoutComponent.setPercentHeight(0.5);
        this._thumb.setTouchEnabled(false);
        this._thumb.setUnifySizeEnabled(false);
        this._thumb.ignoreContentAdaptWithSize(false);
        ck.UIUtils.setSizePercent(this._thumb, 0.5, 0.5);
        this._thumb.setBackGroundColorType(1);
        this._thumb.setBackGroundColor(cc.color(150, 200, 255, 255));
        this._thumb.setBackGroundColorOpacity(102);

        ///// # _btnClear
        this._btnClear = new ccui.Layout();
        this._btnClear.setName("_btnClear");
        this._mainPnl.addChild(this._btnClear);
        this._btnClear.setCascadeOpacityEnabled(true);
        this._btnClear.setCascadeColorEnabled(true);
        this._btnClear.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._btnClear, 0.7308, 0.0059);
        let _btnClearLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnClear);
        _btnClearLayoutComponent.setPositionPercentXEnabled(true);
        _btnClearLayoutComponent.setPositionPercentX(0.7308);
        this._btnClear.setTouchEnabled(true);
        this._btnClear.setUnifySizeEnabled(false);
        this._btnClear.ignoreContentAdaptWithSize(false);
        this._btnClear.setContentSize(cc.size(80, 40));
        this._btnClear.setBackGroundColorType(1);
        this._btnClear.setBackGroundColor(cc.color(255, 20, 0, 255));
        this._btnClear.setBackGroundColorOpacity(102);

        ///// # Text_1
        this.Text_1 = new ck.Text();
        this.Text_1.setName("Text_1");
        this._btnClear.addChild(this.Text_1);
        this.Text_1.setCascadeOpacityEnabled(true);
        this.Text_1.setCascadeColorEnabled(true);
        this.Text_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.Text_1, 0.477, 0.4863);
        let Text_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.Text_1);
        this.Text_1.setTouchEnabled(false);
        this.Text_1.ignoreContentAdaptWithSize(true);
        this.Text_1.setFontName("fonts/BebasNeueProBold.ttf");
        this.Text_1.setDefaultFontSize(20);
        this.Text_1.setString(gm.localize.getText("TXT_CLEAR"));
        this.Text_1.setTextHorizontalAlignment(0);
        this.Text_1.setTextVerticalAlignment(0);

        ///// # _txtAutoscroll
        this._txtAutoscroll = new ck.Text();
        this._txtAutoscroll.setName("_txtAutoscroll");
        this._mainPnl.addChild(this._txtAutoscroll);
        this._txtAutoscroll.setCascadeOpacityEnabled(true);
        this._txtAutoscroll.setCascadeColorEnabled(true);
        this._txtAutoscroll.setAnchorPoint(cc.p(0, 0.5));
        ck.UIUtils.setPositionPercent(this._txtAutoscroll, 0.0268, 0.0366);
        let _txtAutoscrollLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._txtAutoscroll);
        this._txtAutoscroll.setTouchEnabled(false);
        this._txtAutoscroll.ignoreContentAdaptWithSize(true);
        this._txtAutoscroll.setFontName("fonts/BebasNeueProBold.ttf");
        this._txtAutoscroll.setDefaultFontSize(18);
        this._txtAutoscroll.setString("Autoscroll with output");
        this._txtAutoscroll.setTextHorizontalAlignment(0);
        this._txtAutoscroll.setTextVerticalAlignment(0);

        ///// # _btnCopy
        this._btnCopy = new ccui.Layout();
        this._btnCopy.setName("_btnCopy");
        this._mainPnl.addChild(this._btnCopy);
        this._btnCopy.setCascadeOpacityEnabled(true);
        this._btnCopy.setCascadeColorEnabled(true);
        this._btnCopy.setAnchorPoint(cc.p(1, 0));
        ck.UIUtils.setPositionPercent(this._btnCopy, 0.9111, 0.006);
        let _btnCopyLayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this._btnCopy);
        _btnCopyLayoutComponent.setPositionPercentXEnabled(true);
        _btnCopyLayoutComponent.setPositionPercentX(0.9111);
        this._btnCopy.setTouchEnabled(true);
        this._btnCopy.setUnifySizeEnabled(false);
        this._btnCopy.ignoreContentAdaptWithSize(false);
        this._btnCopy.setContentSize(cc.size(80, 40));
        this._btnCopy.setBackGroundColorType(1);
        this._btnCopy.setBackGroundColor(cc.color(255, 20, 0, 255));
        this._btnCopy.setBackGroundColorOpacity(102);

        ///// # Text_1
        this.Text_1 = new ck.Text();
        this.Text_1.setName("Text_1");
        this._btnCopy.addChild(this.Text_1);
        this.Text_1.setCascadeOpacityEnabled(true);
        this.Text_1.setCascadeColorEnabled(true);
        this.Text_1.setAnchorPoint(cc.p(0.5, 0.5));
        ck.UIUtils.setPositionPercent(this.Text_1, 0.477, 0.4863);
        let Text_1LayoutComponent = ccui.LayoutComponent.bindLayoutComponent(this.Text_1);
        this.Text_1.setTouchEnabled(false);
        this.Text_1.ignoreContentAdaptWithSize(true);
        this.Text_1.setFontName("fonts/BebasNeueProBold.ttf");
        this.Text_1.setDefaultFontSize(20);
        this.Text_1.setString(gm.localize.getText("TXT_COPY"));
        this.Text_1.setTextHorizontalAlignment(0);
        this.Text_1.setTextVerticalAlignment(0);

    },



});

/**
 * Create LogLayer
 * @returns {_ccs.LogLayer}
 */
_ccs.LogLayer.create = function () {
    return new _ccs.LogLayer();
};
