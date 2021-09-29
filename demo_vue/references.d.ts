/// <reference path="./node_modules/@nativescript/types-android/lib/android-29.d.ts" />
/// <reference path="./node_modules/@nativescript/types-ios/lib/ios.d.ts" />
/// <reference path="./node_modules/@nativescript/core/global-types.d.ts" />

declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}
declare module '*.scss';

declare const TNS_ENV;
