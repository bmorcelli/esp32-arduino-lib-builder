import 'dotenv/config';

export default ({ config }) => ({
  ...config,
  expo: {
    name: 'LauncherHub',
    slug: 'launcherhub',
    version: '1.0.0',
    android: {
      package: 'com.launcherhub.app'
    },
    ios: {
      bundleIdentifier: 'com.launcherhub.app'
    },
    extra: {
      firebase: {
        apiKey: process.env.GH_API_KEY,
        authDomain: process.env.GH_AUTH_DOMAIN,
        projectId: process.env.GH_PROJ_ID,
        storageBucket: process.env.GH_STORAGE,
        messagingSenderId: process.env.GH_MSG_SENDR,
        appId: process.env.GH_APP_ID
      }
    }
  }
});
