## android typings

```
java -jar build/libs/dts-generator.jar -skip-declarations -input /Volumes/data/dev/carto/mobile-sdk/dist/android/carto-mobile-sdk.jar
```

### clean up typings

* regexp: ```export class .*?JNI {(.|[\r\n])*?}```
* regexp: ```export module .*? {([\t\r\n])*?}``` twice
* regexp: ```declare module com {([\t\r\n])*?}``` twice