# ionic-firebase


### Treco do package.json com as configurações dos plugins

```
....
"cordova": {
    "plugins": {
      "cordova-plugin-whitelist": {},
      "cordova-plugin-statusbar": {},
      "cordova-plugin-device": {},
      "cordova-plugin-splashscreen": {},
      "cordova-plugin-ionic-webview": {
        "ANDROID_SUPPORT_ANNOTATIONS_VERSION": "27.+"
      },
      "cordova-plugin-ionic-keyboard": {},
      "cordova-plugin-firebase-analytics": {
        "ANALYTICS_COLLECTION_ENABLED": "true",
        "AUTOMATIC_SCREEN_REPORTING_ENABLED": "true",
        "ANDROID_FIREBASE_ANALYTICS_VERSION": "19.0.0"
      },
      "cordova-plugin-firebase-messaging": {
        "ANDROID_FIREBASE_MESSAGING_VERSION": "22.0.0",
        "ANDROIDX_CORE_VERSION": "1.6.+"
      },
      "cordova-plugin-firebase-crashlytics": {
        "ANDROID_FIREBASE_ANALYTICS_VERSION": "19.0.0",
        "ANDROID_FIREBASE_CRASHLYTICS_VERSION": "18.1.0"
      },
      "cordova-plugin-androidx": {},
      "cordova-plugin-androidx-adapter": {}
    },
    ....
}
....
```