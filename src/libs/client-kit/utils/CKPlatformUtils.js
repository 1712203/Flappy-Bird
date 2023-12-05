/**
 * @class
 * @static
 */
ck.PlatformUtils = {};

/**
 * @class
 * @static
 */
let PlatformUtils = ck.PlatformUtils;

PlatformUtils.CONSTANTS = {
    FANPAGE_ID: 101731606003382,
    FACEBOOK_APP_PACKAGE_NAME: "com.facebook.katana",
    YOUTUBE_APP_PACKAGE_NAME: "com.google.android.youtube",
    INSTAGRAM_APP_PACKAGE_NAME: "com.instagram.android",
    FACEBOOK_URL: "www.facebook.com",
    YOUTUBE_URL: "www.youtube.com",
    INSTAGRAM_URL: "www.instagram.com",
    GOOGLE_PLAY_STORE_URL: "play.google.com",
    FACEBOOK_PAGE_PREFIX_ANDROID: "fb://page/",                         //format: FACEBOOK_PAGE_PREFIX + pageId, check Utility.openFacebookFanpage
    FACEBOOK_PAGE_PREFIX_IOS: "fb://profile/",                         //format: FACEBOOK_PAGE_PREFIX + pageId, check Utility.openFacebookFanpage
    YOUTUBE_DEEP_LINK_PREFIX: "vnd.youtube://",                 //format: YOUTUBE_DEEP_LINK_PREFIX + idVideo, check Utility.openYoutube
    PRIVACY_POLICY_URL: "https://play.zing.vn/privacy"
}

PlatformUtils.openTab = function (url) {
    const a = window.document.createElement("a");
    a.target = "_blank";
    a.href = url;
    a.location = "no";

    const e = window.document.createEvent("MouseEvent");
    e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
};

PlatformUtils.openFacebook = function (externalLink) {
    if (!cc.sys.isNative)
        PlatformUtils.openTab(externalLink);
    else cc.Application.getInstance().openURL(externalLink);
};

PlatformUtils.openFacebookFanpage = function (id) {
    const pagePrefix = ck.isIOS() ? PlatformUtils.CONSTANTS.FACEBOOK_PAGE_PREFIX_IOS : PlatformUtils.CONSTANTS.FACEBOOK_PAGE_PREFIX_ANDROID;
    const facebookLink = pagePrefix + id;
    const url = "https://www.facebook.com/" + id;
    if (!cc.sys.isNative)
        PlatformUtils.openTab(url);
    else if (!cc.Application.getInstance().openURL(facebookLink))
        cc.Application.getInstance().openURL(url);
};

PlatformUtils.openYoutube = function (url) {
    // getID of video
    let video_id = url.split('v=')[1];
    const ampersandPosition = video_id.indexOf('&');
    if (ampersandPosition !== -1) {
        video_id = video_id.substring(0, ampersandPosition);
    }

    const youtubeLink = PlatformUtils.CONSTANTS.YOUTUBE_DEEP_LINK_PREFIX + video_id;
    if (!cc.sys.isNative)
        PlatformUtils.openTab(url);
    else if (!cc.Application.getInstance().openURL(youtubeLink))
        cc.Application.getInstance().openURL(url);
};

/**
 * @param {string} [fileName="screen_shot.jpg"]
 * @param {number} [fileType=cc.IMAGE_FORMAT_JPG]
 * @param {Function} callback
 */
PlatformUtils.takeScreenShot = function (fileName = "screen_shot.jpg", fileType = cc.IMAGE_FORMAT_JPG, callback) {
    const curScene = cc.director.getRunningScene();
    const pixelFormat = cc.Texture2D.PIXEL_FORMAT_RGBA8888;
    const depthStencilFormat = 0x88F0;
    const renderer = new cc.RenderTexture(cc.winSize.width, cc.winSize.height, pixelFormat, depthStencilFormat);
    renderer.setPosition(cc.p(0, 0));
    renderer.begin();
    curScene.visit();
    renderer.end();
    cc.log("[ck.PlatformUtils]", "Taking a screen shot ...");
    return renderer.saveToFile(fileName, fileType, function () {
        cc.log("[ck.PlatformUtils]", "Take a screen shot successful !!!");
        if (callback)
            callback();
    }.bind(this, callback));
};

PlatformUtils.haveFacebookApp = function () {
    return fr.wrapper.isInstalledApp(PlatformUtils.CONSTANTS.FACEBOOK_APP_PACKAGE_NAME);
};

PlatformUtils.haveYoutubeApp = function () {
    return fr.wrapper.isInstalledApp(PlatformUtils.CONSTANTS.YOUTUBE_APP_PACKAGE_NAME);
};

PlatformUtils.haveInstagramApp = function () {
    return fr.wrapper.isInstalledApp(PlatformUtils.CONSTANTS.INSTAGRAM_APP_PACKAGE_NAME);
};

PlatformUtils.hasNotch = function () {
    const modelName = fr.wrapper.getDeviceModel();
    const frameSize = cc.view.getFrameSize();
    return modelName.indexOf("iPhone") >= 0 && frameSize.height > 2 * frameSize.width;
};

PlatformUtils.NOTCH_HEIGHT = 58;
PlatformUtils.MARGIN_BOTTOM = 0;