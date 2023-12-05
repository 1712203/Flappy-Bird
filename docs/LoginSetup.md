# Login setup

## Facebook

### Create Facebook App

- Create facebook app / request permission (@tungdt2)

### Build config

Modify `buid/<your-build-config-folder>/config.json`.

```json5
    // ...
    "social": {
        "facebook": {
            // Facebook app id (from developers.facebook.com)
            "id": "1057698851657671",

            "use_provider": true,

            // Facebook client id (from developers.facebook.com)
            "token": "2190e93896be7c3aaf1086a00b50b2ce"
        },
        // ...
    },
    // ...
```

- `social.facebook.use_provider` - true

- `social.facebook.token` - Facebook client token (copy from `Settings/Advanced/ClientToken` on `developers.facebook.com`)

### Setup on developers.facebook.com

Choose setup Facebook Login for Android

- Step #1-2: Setup SDK (skip)

- Step #3: Fill your package name & Default Activity Class Name (`org.cocos2dx.javascript.AppActivity` for standalone build, `gsn.game.zingplaynew.AppActivity` for portal build)

- Step #4: Add key hashes

```cmd
# For debug key
keytool -exportcert -alias androiddebugkey -keystore "C:\Users\USERNAME\.android\debug.keystore" | "PATH_TO_OPENSSL_LIBRARY\bin\openssl" sha1 -binary | "PATH_TO_OPENSSL_LIBRARY\bin\openssl" base64

# For release key
keytool -exportcert -alias YOUR_RELEASE_KEY_ALIAS -keystore YOUR_RELEASE_KEY_PATH | openssl sha1 -binary | openssl base64
```


