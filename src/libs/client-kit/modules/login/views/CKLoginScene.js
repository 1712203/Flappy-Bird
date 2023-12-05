/**
 * @class
 * @extends ck.BaseScene
 */
ck.LoginScene = ck.BaseScene.extend({
    ctor: function () {
        ck.BaseScene.prototype.ctor.call(this);
    },

    /**
     * @override
     * @return {ck.SceneID|number}
     */
    _getID: function () {
        return ck.SceneID.LOGIN;
    },

    /**
     * @override
     * @return {Loginlayer}
     * @private
     */
    _createMainLayer: function () {
        return LoginLayer.create();
    },
});

/**
 * @class
 * @extends ck.LoginScene
 */
let LoginScene = ck.LoginScene;

/**
 * @returns {LoginScene}
 */
LoginScene.create = function () {
    return new LoginScene();
};