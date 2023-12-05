/**
 * Server ids
 * @enum
 */
ck.ServerID = {
    LOCAL: 0,
    DEV: 1,
    SANDBOX: 2,
    LIVE: 3,
    HAPPY: 4
};

/**
 * @enum
 */
let ServerID = ck.ServerID;

/**
 * @enum
 */
ck.SocialName = {
    NONE: "none",
    FACEBOOK: "facebook",
    GOOGLE: "google",
    GUEST: "guest",
    VK: "vk",
    OKRU: "okru",
    APPLE: "apple"
};

/**
 * @enum
 */
let SocialName = ck.SocialName;

/**
 * @enum
 */
ck.LoginType = {
    NONE: 0,
    GUEST: 1,
    ID: 2,
    FACEBOOK: 3,
    GOOGLE: 4,
    APPLE: 5
};

/**
 * @enum
 */
let LoginType = ck.LoginType;

ck.LoginEvents = {
    ON_LOGIN_SUCCESS: "ON_LOGIN_SUCCESS"
};
