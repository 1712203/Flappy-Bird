/** @class
 * @extends ck.GameManager
 * */
let GameManager = ck.GameManager.extend({


    
    ctor: function () {
        ck.GameManager.prototype.ctor.call(this);
    },

    /** @override */
    _initManagers: function () {
        ck.GameManager.prototype._initManagers.call(this);

    },

    /**
     * @override
     * Init object pools
     */
    initPools: function () {
        if (this._isPoolInit) return;
        ck.GameManager.prototype.initPools.call(this);
    },
});

/** @return {GameManager}
 * @private */
GameManager.create = function () {
    return new GameManager();
};

/** @type {GameManager}
 * @static
 * @private */
GameManager._instance = null;

/** @return {GameManager} */
GameManager.getInstance = function () {
    if (!GameManager._instance) {
        GameManager._instance = GameManager.create();
    }
    return GameManager._instance;
};

/** Game design size
 * @constant
 * @type {cc.Size} */
GameManager.DESIGN_SIZE = cc.size(640, 1136);

/** Game default font path
 * @constant
 * @type {String} */
GameManager.DEFAULT_FONT = "fonts/BebasNeueProBold.ttf";

/** Game default font path
 * @constant
 * @type {String} */
GameManager.NUMBER_FONT = "fonts/LilitaOneRegular.ttf";

let _p = GameManager.prototype;
cc.defineGetterSetter(_p, "pisti", _p.getPisti);
cc.defineGetterSetter(_p, "jackpot", _p.getJackpot);
cc.defineGetterSetter(_p, "inviteFriend", _p.getInviteFriend);
cc.defineGetterSetter(_p, "bingo", _p.getBingo);
cc.defineGetterSetter(_p, "newComer", _p.getNewComer);
cc.defineGetterSetter(_p, "cardFlip", _p.getCardFlip);
cc.defineGetterSetter(_p, "slotThree", _p.getSlotThree);
cc.defineGetterSetter(_p, "buildUpPay", _p.getBuildUpPay);
cc.defineGetterSetter(_p, "happyShark", _p.getHappyShark);
cc.defineGetterSetter(_p, "poker", _p.getPoker);
cc.defineGetterSetter(_p, "gourdCrab", _p.getGourdCrab);
cc.defineGetterSetter(_p, "suggestPlay", _p.getSuggestPlay);
cc.defineGetterSetter(_p, "dualWheel", _p.getDualWheel);
cc.defineGetterSetter(_p, "itemFactor", _p.getItemFactor);
cc.defineGetterSetter(_p, "continuousPurchase", _p.getContinuousPurchase);
cc.defineGetterSetter(_p, "expPass", _p.getExpPass);
cc.defineGetterSetter(_p, "eventCollector", _p.getEventCollector);
cc.defineGetterSetter(_p, "pinball", _p.getPinball);
cc.defineGetterSetter(_p, "eventVanCat", _p.getEventVanCat);
cc.defineGetterSetter(_p, "goldSuggest", _p.getGoldSuggest);
_p = null;
