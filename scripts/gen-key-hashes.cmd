echo Generate debug key hash

keytool -exportcert -alias androiddebugkey -keystore "C:\Users\CPU10387-local\.android\debug.keystore" | openssl sha1 -binary | openssl base64

echo Generate release key hash

keytool -exportcert -alias bcol -keystore "D:\projects\pisti\client\build\tr-release\build.keystore" | openssl sha1 -binary | openssl base64

pause