fr.Portal = cc.Class.extend({
    setPositionFox:function (newPosOrxValue, yValue) {
        let locPosition = cc.p(0, 0);
        if (yValue === undefined) {
            locPosition.x = newPosOrxValue.x;
            locPosition.y = newPosOrxValue.y;
        } else {
            locPosition.x = newPosOrxValue;
            locPosition.y = yValue;
        }
        if (typeof(injection) != 'undefined' && injection.fox != null
            && injection.fox.setFoxPosition != null && typeof(injection.fox.setFoxPosition) == 'function') {
            injection.fox.setFoxPosition(locPosition.x, locPosition.y);
        }
    },

    migrateAccessToken: function (accessToken) {
        // access token của social hiện tại đang login
        cc.sys.localStorage.setItem("portal_access_token", accessToken);
    },

    migrateSessionKey: function (sessionKey) {
        // session key của game
        let gameSessionKey = {};
        gameSessionKey[gm.login.getConfig().getGameID()] = sessionKey;
        cc.sys.localStorage.setItem("portal_game_session", JSON.stringify(gameSessionKey));
    },

    migrateSocialId: function (gameSocialId) {
        let socialId = -1;
        switch (gameSocialId) {
            case ck.LoginType.NONE:
            case ck.LoginType.ID:
                break;
            case ck.LoginType.FACEBOOK:
                socialId = fr.Portal.SOCIAL_ID.FACEBOOK;
                break;
            case ck.LoginType.GOOGLE:
                socialId = fr.Portal.SOCIAL_ID.GOOGLE;
                break;
            case ck.LoginType.APPLE:
                socialId = fr.Portal.SOCIAL_ID.APPLE;
                break;
            case ck.LoginType.GUEST:
                socialId = fr.Portal.SOCIAL_ID.ZACCOUNT;
                break;
        }
        // id của social hiện tại đang login, được định nghĩa ở SOCIAL_ID
        if (socialId > 0) {
            cc.sys.localStorage.setItem("portal_social_id", socialId);
        }
    },

    migrateOtherKeys: function (jsonStr = "{}") {
        // các key khác cần được giữ sau khi biến hình thành portal
        //  jsonStr: {
        //      key: value,
        //      key1: value1,
        //      ...
        //  }
        // "key" là key của item cần cache
        // value là giá trị sẽ cache của key
        cc.sys.localStorage.setItem("need_migrate_items", jsonStr);
    },

    isIOSPortal: function () {
        return ck.cache.getBool(ck.TransformPortal, false);
    },

    transform: function (portal = true) {
        return ck.cache.setBool(ck.TransformPortal, portal);
    }
});

fr.Portal._instance = null;

fr.Portal.getInstance = function () {
    if (!fr.Portal._instance) {
        fr.Portal._instance = new fr.Portal();
    }
    return fr.Portal._instance;
};

/**
 * @type {fr.Portal}
 */
fr.portal = fr.Portal.getInstance();

fr.Portal.SOCIAL_ID = {
    FACEBOOK: 1,
    ZALO: 2,
    GOOGLE: 3,
    ZINGME: 4,
    ZACCOUNT: 5,
    ZPACCOUNT: 6,
    GUESTBR: 7,
    GUESTSEA: 8,
    APPLE: 9,
    VK: 10,
    OKRU: 11
};