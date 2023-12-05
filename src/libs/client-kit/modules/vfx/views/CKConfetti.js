ck.Confetti = cc.Layer.extend({
    _confetti_map: null,

    /**
     * @constructor
     * @param {number} [showAfter=0]
     * @param {number} [totalParticles=7000]
     */
    ctor: function (showAfter = 0, totalParticles = 7000) {
        this._super();
        this._showAfter = showAfter;
        this._totalParticles = totalParticles;
        if(cc.sys.isNative)
            this._confetti_map = jsb.fileUtils.getValueMapFromFile(ck.Confetti.PARTICLE_CONFETTI_PATH);
    },

    onEnter: function () {
        this._super();
        this.run();
    },

    onExit: function () {
        this._super();
    },

    run: function () {
        var _list_pos_confetti = [cc.p(-700, -60), cc.p(700, -60), cc.p(-700, -250), cc.p(700, -250)];
        var _id_confetti = 0;
        var _p = cc.p(this.width * 0.5, this.height * 0.5);

        _id_confetti = 0;
        var delayShow = new cc.DelayTime(this._showAfter);
        var dl1 = new cc.DelayTime(0.07);
        var dl2 = new cc.DelayTime(0.15);
        var f = new cc.CallFunc(function()
        {
            var confetti_1 = null;
            if(!cc.sys.isNative){
                confetti_1 = new cc.ParticleSystem(ck.Confetti.PARTICLE_CONFETTI_PATH);
            }
            else {
                confetti_1 = new cc.ParticleSystem();
                confetti_1.initWithDictionary(this._confetti_map, ck.Confetti.PARTICLE_PATH);
            }

            if (confetti_1) {
                confetti_1.setPosition(_p.x + _list_pos_confetti[_id_confetti].x, _p.y + _list_pos_confetti[_id_confetti].y);
                confetti_1.setBlendFunc(cc.BlendFunc.ALPHA_PREMULTIPLIED);
                confetti_1.setAutoRemoveOnFinish(true);
                confetti_1.setTotalParticles(this._totalParticles);
                this.addChild(confetti_1, 4);
            }

            if (_list_pos_confetti[_id_confetti].x > 0) {
                confetti_1.setScaleX(-1);
                confetti_1.setPositionX(confetti_1.getPositionX() + 150);
                confetti_1.setPositionY(confetti_1.getPositionY() + 100);
            }
            else {
                confetti_1.setPositionX(confetti_1.getPositionX() - 150);
                confetti_1.setPositionY(confetti_1.getPositionY() + 100);
            }

            var confetti_2 = new cc.ParticleSystem();
            confetti_2.initWithDictionary(this._confetti_map, ck.Confetti.PARTICLE_PATH);
            confetti_2.setPosition(_p.x + _list_pos_confetti[_id_confetti].x, _p.y + _list_pos_confetti[_id_confetti].y);
            confetti_2.setBlendFunc(cc.BlendFunc.ALPHA_PREMULTIPLIED);
            confetti_2.setAutoRemoveOnFinish(true);
            confetti_2.setTotalParticles(this._totalParticles);
            this.addChild(confetti_2, 4);
            if (_list_pos_confetti[_id_confetti].x > 0)
                confetti_2.setScaleX(-1);

            _id_confetti += 1;
        }.bind(this));
        var seq1 = new cc.Sequence(delayShow, f, dl1, f, dl2, f, dl1, f);
        this.runAction(seq1);
    },
});

ck.Confetti.PARTICLE_CONFETTI_PATH = "particles/Confetti.plist";
ck.Confetti.PARTICLE_PATH = "particles/";

/**
 * @class
 * @extends ck.Confetti
 */
let Confetti = ck.Confetti;

/**
 * Create Confetti
 * @param {number} [showAfter=0]
 * @param {number} [totalParticles=7000]
 * @returns {Confetti}
 */
Confetti.create = function (showAfter = 0, totalParticles = 7000) {
    return new Confetti(showAfter, totalParticles);
};