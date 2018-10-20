/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
/// <reference path="./app/nativescript-carto/references.d.ts" />

declare module "*.scss";

declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
  }