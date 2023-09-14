## android typings

```
java -jar build/libs/dts-generator.jar -skip-declarations -input /Volumes/data/dev/carto/mobile-sdk/dist/android/carto-mobile-sdk.jar
```

### clean up typings
* regexp:```declare module com \{\n\t*export module carto \{\n\t*export module \w* \{\n\t*export class \w*JNI extends [\w.]* \{([^}]|\n)*\}\n\t*\}\n\t*\}\n\}```
* regexp:```declare module com \{\n\t*export module carto \{\n\t*export module \w* \{\n\t*export module \w* \{\n\t*export class \w*JNI extends [\w.]* \{([^}]|\n)*\}\n\t*\}\n\t*\}\n\t*\}\n\}```
* regexp:```\t*public (delete|swigGetDirectorObject|swigGetClassName|swigGetClassName|swigDirectorDisconnect|swigReleaseOwnership|finalize|swigTakeOwnership)\(\): (void|number|string|any);\n```
* regexp:```\t*public static (swigCreatePolymorphicInstance|getCPtr)\(.*\): .*;\n```
* regexp:```\t*public (swigCMemOwn): .*;\n```

<!-- * regexp: ```/export class .*?JNI {(.|[\r\n])*?}//```
* regexp: ```/export module .*? {([\t\r\n])*?}//``` twice
* regexp: ```/declare module com {([\t\r\n])*?}/``` -->

## ios typings

run in the demo app
```
TNS_TYPESCRIPT_DECLARATIONS_PATH="$(pwd)/typings" tns build ios --bundle
```

### clean up typings

* regexp: ```/description\(\): string;//```
* regexp: ```/hash\(\): number;//```
* regexp: ```/var:/variant:/```