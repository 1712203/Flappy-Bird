/**
 * @class
 * @extends ck.LoadingManager
 */
let LoadingManager = ck.LoadingManager.extend({
    ctor: function () {
        ck.LoadingManager.prototype.ctor.call(this);
    },

    _createScene: function (id) {
        switch (id) {
	    case SceneID.POKER:
                return new PokerScene();
            case SceneID.BINGO:
                return new BingoScene();
            case SceneID.CARD_FLIP:
                return new CardFlipScene();
            case SceneID.GOURD_CRAB:
                return new GourdCrabScene();
            case SceneID.HAPPY_SHARK:
                return new HappySharkScene();
            case SceneID.PINBALL:
                return new PinballScene();
        }
        return ck.LoadingManager.prototype._createScene.call(this, id);
    },
});

/**
 * @return {LoadingManager}
 */
LoadingManager.create = function () {
    return new LoadingManager();
};
