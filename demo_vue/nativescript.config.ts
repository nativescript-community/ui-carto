import { NativeScriptConfig } from '@nativescript/core';

export default {
    id: 'com.akylas.nativescript.cartodemo',
    webpackConfigPath: './app.webpack.config.js',
    appResourcesPath: 'app/App_Resources',
    android: {
        v8Flags: '--expose_gc',
        markingMode: 'none',
    },
    appPath: 'app',
} as NativeScriptConfig;
