var LogStepDefine = {
    Payment: {
        Prefix: "Payment",
        Channel: {
            "5": "Google",
            "6": "Apple",
            "8": "Bank",
            "22": "Voda",
            "23": "Tele",
            "25": "Papa"
        },
        Step: {
            ShowShopTab: "ShowShopTab",
            ClickPack: "ClickPack",
            //-----
            ShowPhoneNumberPopup: "ShowPhoneNumberPopup",
            ClosePhoneNumberPopup: "ClosePhoneNumberPopup",
            InputPhoneNumberError: "InputPhoneNumberError",
            ShowCardPopup: "ShowCardPopup",
            //-----
            LaunchSMS: "LaunchSMS",
            ShowInstruction: "ShowInstruction",
            ShowOTPPopup: "ShowOTPPopup",
            CloseOTPPopup: "CloseOTPPopup",
            InputOTPError: "InputOTPError",
            OpenWebView: "OpenWebView",
            //-----
            SuccessOnline: "SuccessOnline",
            SuccessOffline: "SuccessOffline",
            _end_: "_end_",
        },
    },
}

var StepTracking = cc.Class.extend({
    /**
     * @type {number}
     */
    _lastChannelLogPayment: 0,

    /**
     * @type {LogStepDefine.Payment.Step}
     */
    _lastStepLogPayment: "",

    ctor: function () {
        this.LOG_TAG = "[StepTracking]";
        this.reset();
    },

    reset: function() {
    },

    /**
     * @param {number} channel
     * @param {LogStepDefine.Payment.Step} step
     */
    logPayment: function (channel, step) {
        const validChannel = Object.keys(LogStepDefine.Payment.Channel).some(k => k === "" + channel);
        const validStep = Object.keys(LogStepDefine.Payment.Step).some(k => k === step);
        if (validChannel && validStep) {
            this._lastChannelLogPayment = channel;
            this._lastStepLogPayment = step;
            const groupName = LogStepDefine.Payment.Prefix + LogStepDefine.Payment.Channel[channel];
            cc.log(this.LOG_TAG, "logPayment", groupName, step);
            fr.tracker.logStepStart(groupName, step);
        }
    },

    /**
     * @returns {number}
     */
    getLastChannelLogPayment: function () {
        return this._lastChannelLogPayment;
    },

    /**
     * @returns {LogStepDefine.Payment.Step}
     */
    getLastStepLogPayment: function () {
        return this._lastStepLogPayment;
    },
})

StepTracking._instance = null;
/**
 * @returns {StepTracking}
 */
StepTracking.getInstance = function(){
    if (!StepTracking._instance){
        StepTracking._instance = new StepTracking();
    }
    return StepTracking._instance;
}