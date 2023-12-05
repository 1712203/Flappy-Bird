ck.SchedulerUtils = {};

ck.SchedulerUtils.schedule = function (key, callback, target, interval) {
    interval = interval || 1/60;
    cc.director.getScheduler().schedule(callback, target, interval, cc.REPEAT_FOREVER, 0, false, key);
};

ck.SchedulerUtils.unschedule = function (key, target) {
    cc.director.getScheduler().unschedule(key, target);
};