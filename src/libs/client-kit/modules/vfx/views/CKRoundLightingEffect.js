ck.RoundLightingEffect = ccui.Widget.extend({
    _dots: null,
    _streaks: null,

    N_DOTS: 2,

    ctor: function () {
        this._super();
        this._dots = [];
        this._streaks = [];
        this._createDots();
        this._createStreaks();
        this.schedule(this.onDotMove);
    },

    _createDots: function () {
        for (let i = 0; i < this.N_DOTS; i++) {
            const dot = new ccui.ImageView("basics/effects/LightDot_00.png", 1);
            this.addChild(dot);
            dot.setVisible(false);
            this._dots.push(dot);
        }
    },

    _createStreaks: function () {
        for (let i = 0; i < this.N_DOTS; i++) {
            const streak = new cc.MotionStreak(1, 2, 25, cc.color.WHITE, "sprites/basics/Streak.png");
            this.addChild(streak, -1);
            streak.setVisible(false);
            this._streaks.push(streak);
        }
    },

    onDotMove: function () {
        for (let i = 0; i < this.N_DOTS; i++) {
            this._streaks[i].setPosition(this._dots[i].getPosition());
        }
    },

    setVisibleAllDot: function (visible) {
        for (let i = 0; i < this.N_DOTS; i++) {
            this._dots[i].setVisible(visible);
        }
    },

    setVisibleAllStreak: function (visible) {
        for (let i = 0; i < this.N_DOTS; i++) {
            this._streaks[i].setVisible(visible);
        }
    },

    play: function () {
        const width = this.getContentSize().width;
        const height = this.getContentSize().height;
        const point00 = cc.p(0, height);
        const point01 = cc.p(width, height);
        const point02 = cc.p(width, 0);
        const point03 = cc.p(0, 0);
        const speed = 300;
        const moveTo00 = cc.moveTo(height / speed, point00).easing(cc.easeCircleActionInOut());
        const moveTo01 = cc.moveTo(width / speed, point01).easing(cc.easeCircleActionInOut());
        const moveTo02 = cc.moveTo(height / speed, point02).easing(cc.easeCircleActionInOut());
        const moveTo03 = cc.moveTo(width / speed, point03).easing(cc.easeCircleActionInOut());

        const sequence00 = cc.sequence(moveTo01.clone(), moveTo02.clone(), moveTo03.clone(), moveTo00.clone());
        const sequence01 = cc.sequence(moveTo02.clone(), moveTo03.clone(), moveTo00.clone(), moveTo01.clone());
        const sequence02 = cc.sequence(moveTo03.clone(), moveTo00.clone(), moveTo01.clone(), moveTo02.clone());
        const sequence03 = cc.sequence(moveTo00.clone(), moveTo01.clone(), moveTo02.clone(), moveTo03.clone());
        let sequences = [sequence00, sequence02, sequence01, sequence03];
        let points = [point00, point02, point01, point03];

        for (let i = 0; i < this.N_DOTS; i++) {
            this._dots[i].stopAllActions();
            this._dots[i].setVisible(true);
            this._streaks[i].setVisible(true);
            this._dots[i].setPosition(points[i]);
            this._dots[i].runAction(sequences[i].repeatForever());
        }
    },

    stop: function () {
        for (let i = 0; i < this.N_DOTS; i++) {
            this._dots[i].stopAllActions();
            this._dots[i].setVisible(false);
            this._streaks[i].setVisible(false);
        }
    },
});

/**
 * @class
 * @extends ck.RoundLightingEffect
 */
let RoundLightingEffect = ck.RoundLightingEffect;

/**
 * @return {ck.RoundLightingEffect}
 */
ck.RoundLightingEffect.create = function () {
    return new ck.RoundLightingEffect();
};