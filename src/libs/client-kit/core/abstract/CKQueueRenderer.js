/**
 * Use this class to implement a view that render logic
 * The render progress though animation will do step by step
 * 
 * @class
 * @abstract
 * @extends cc.Class
 */
ck.QueueRenderer = cc.Class.extend({
    /**
     * Queue of functions (tasks)
     * @type {ck.Queue}
     */
    _renderTasks: null,

    /**
     * @type {boolean}
     */
    _isDoingTask: false,

    ctor: function () {
        this._renderTasks = ck.Queue.create();
    },

    /**
     * @param {Function} task
     */
    addRenderTask: function (task) {
        this._renderTasks.push(task);
        this.checkToDoRenderTask();
    },

    checkToDoRenderTask: function () {
        if (this._isDoingTask) return;
        this.popAndDoRenderTask();
    },

    popAndDoRenderTask: function () {
        let task = this._renderTasks.pop();
        if (task) {
            this._isDoingTask = true;
            task();
        }
    },

    onRenderTaskDone: function () {
        this._isDoingTask = false;
        this.popAndDoRenderTask();
    },

    clearTasks: function () {
        this._renderTasks.clear();
        this._isDoingTask = false;
    }
});
