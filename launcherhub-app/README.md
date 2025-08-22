# LauncherHub Mobile App

This Expo project demonstrates Firebase-backed authentication, catalog navigation with filtering, file download, OTA updates in two phases and device discovery.

## Setup

```bash
npm install
npm start
```

Before running, export the Firebase keys as environment variables (values are stored in your project secrets):

```bash
export GH_API_KEY="<apiKey>"
export GH_AUTH_DOMAIN="<authDomain>"
export GH_PROJ_ID="<projectId>"
export GH_STORAGE="<storageBucket>"
export GH_MSG_SENDR="<messagingSenderId>"
export GH_APP_ID="<appId>"
```

The catalog is loaded from the Firestore collection `firmwares`. Each document should contain:

```json
{
  "name": "Firmware A",
  "brand": "BrandX",
  "device": "Device 1000",
  "description": "...",
  "image": "https://...",
  "versions": [ { "version": "1.0.0", "url": "https://..." } ]
}
```

## Testing

```bash
npm test
```

## Building

Compile a debug build for Android using the local Android SDK:

```bash
npm run android
```

For iOS, run:

```bash
npm run ios
```

Both commands require the respective platform toolchains to be installed (Android Studio or Xcode) and use Expo's native `run` workflow to produce a build.

When building for Android ensure that `ANDROID_SDK_ROOT` points to your SDK installation and that SDK/NDK licenses are accepted, e.g.:

```bash
export ANDROID_SDK_ROOT="$HOME/Android/Sdk"
yes | "$ANDROID_SDK_ROOT/cmdline-tools/latest/bin/sdkmanager" --licenses
```

## Features
- Login screen using Firebase Authentication
- Catalog screen listing firmware files from Firestore with brand/device/name filters
- Cards show firmware image, brand and device with expandable description
- Dedicated firmware screen with version downloads
- Download files using `expo-file-system`
- Device discovery (placeholder mDNS) or manual IP entry
- Two phase OTA update: upload then apply
