/**
 * @namespace
 */
let _ccs = _ccs || {};

/**
 * _ccs.AroundTheWorldLandBehavior
 *
 * Generated from ccs-generator tool </br>
 * Do NOT modify!
 *
 * @class
 * @abstract
 *
 */
_ccs.AroundTheWorldLandBehavior = cc.Class.extend({

    /** @type {ccui.ImageView} */
    _imgBuilding: null,
    /** @type {ccui.ImageView} */
    _imgBuildingName: null,
    /** @type {ccui.ImageView} */
    _imgCheck: null,
    /** @type {ck.Text} */
    _txtCheck: null,


    /**
     * _ccs.AroundTheWorldLandBehavior constructor
     * @constructor
     */
    ctor: function () {

    },

    playCCSAnimIdle: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimIdle();
    
        let _imgBuildingAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(30 / (60 * speed), 1.03, 0.97),
                    cc.scaleTo(30 / (60 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgBuilding.setScale(1, 1);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgBuildingAction = _imgBuildingAction.repeatForever();
        } else _imgBuildingAction = cc.sequence(
            cc.delayTime(delay),
            _imgBuildingAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgBuilding.runAction(_imgBuildingAction);
    },

    resetCCSAnimIdle: function () {
        this._imgBuilding.stopAllActions();
        this._imgBuilding.setScale(1, 1);
    },

    playCCSAnimPlaneOver: function (delay = 0, callback = null, repeat = 1, speed = 1) {
        this.resetCCSAnimPlaneOver();
    
        let _imgBuildingAction = cc.sequence(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(15 / (60 * speed), 1.15, 0.85),
                    cc.scaleTo(15 / (60 * speed), 1, 1)
                )
            ),
            cc.callFunc(function () {
                if (repeat === 1) return;
                this._imgBuilding.setScale(1, 1);
            }.bind(this))
        );
        if (repeat <= 0) {
            _imgBuildingAction = _imgBuildingAction.repeatForever();
        } else _imgBuildingAction = cc.sequence(
            cc.delayTime(delay),
            _imgBuildingAction.repeat(repeat),
            cc.callFunc(function () { if (cc.isFunction(callback)) callback(); }.bind(this))
        )
        
        this._imgBuilding.runAction(_imgBuildingAction);
    },

    resetCCSAnimPlaneOver: function () {
        this._imgBuilding.stopAllActions();
        this._imgBuilding.setScale(1, 1);
    }
});
