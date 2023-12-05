/**
 * Called when the game start
 * @callback
 */
cc.game.onStart = function () {
    // Pass true to enable retina display, disabled by default to improve performance
    cc.view.enableRetina(false);
    
    // Adjust viewport meta
    cc.view.adjustViewPort(true);

    // Set frameSize (For view in simulator)
    // var frameSize = cc.view.getFrameSize();
    // cc.view.setFrameSize(frameSize.width * 1.5, frameSize.height * 1.5);
    // cc.view.setFrameSize(1080 * 0.5, 2280 * 0.5); // Pixel 4
    // cc.view.setFrameSize(1080*0.5, 2520*0.5); // xperia 5
    // cc.view.setFrameSize(1125*0.5, 2436*0.5); // iphoneX
    // cc.view.setFrameSize(834*1.0, 1112*1.0); // ipad Pro

    // Start game
    ck.startGame();

    if (UIUtils.hasLogLayer()){
        var tempCCLog = cc.log;
        cc.log = function(...args){
            UIUtils.customLog(...args);
            tempCCLog(...args);
        }
    }
};

/**
 * Callback when game exits.
 * @callback
 */
cc.game.onStop = function () {
    cc.log("[cc.game.onStop]");
    gm.login.logout();
};

// Run the game
cc.game.run();
