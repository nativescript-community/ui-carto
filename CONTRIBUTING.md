# Contributing

## What is generated and what is not

| Path | Owner |
| --- | --- |
| `src/ui-massifmaps/typings/*.d.ts` | generated — `npm run typings` |
| `src/ui-massifmaps/bindings/**` | generated — `npm run bindings` |
| `packages/ui-massifmaps/platforms/{android,ios}/native-api-usage.json` | generated — `npm run bindings` |
| everything else under `src/ui-massifmaps/` | hand-written wrappers |
| `packages/ui-massifmaps/**` (except the two files above) | build output — `npm run build` |

Generated files carry a `GENERATED FILE - do not edit by hand` header. Editing one is always the
wrong fix: change the generator, or change the hand-written wrapper it feeds.

Both scripts take `-h`:

```sh
node scripts/typings/index.mjs -h
npm run bindings -- -h
```

## Updating to a new SDK release

1. **Point the plugin at the new SDK.**
   - android: bump the `massifSDKVersion` default in
     `packages/ui-massifmaps/platforms/android/include.gradle`.
   - iOS: replace `packages/ui-massifmaps/platforms/ios/MassifMaps.xcframework/`.

2. **Regenerate the ambient typings.**

   ```sh
   npm run typings
   ```

   Android reads the maven coordinates and default version straight out of `include.gradle`, so
   the typings can never be generated against a version the plugin does not link. It resolves the
   `.aar` from the gradle cache or downloads it, then runs `dts-generator.jar` — running
   `ns prepare android` in `demo-svelte` first if the jar is not there yet.

   iOS is a full `ns typings ios` build in `demo-svelte` and takes minutes cold. `--no-build`
   reuses whatever is already in `demo-svelte/typings/ios`.

   `ns.massifmaps.android.d.ts` (the plugin's own java additions) needs
   `packages/ui-massifmaps/platforms/android/ui_massifmaps.aar`, which only exists after a demo
   android build. Without it the script says so and skips that file; `--skip-additions` asks for
   the same thing explicitly.

3. **Regenerate the binding tables and the native-api-usage files.**

   ```sh
   npm run bindings
   ```

4. **See what the new SDK brought in.**

   ```sh
   npm run bindings -- --coverage   # unforwarded methods, and per-platform gaps
   npm run bindings -- --audit      # hand-written classes vs the model
   ```

   `--coverage` reports four kinds of gap besides the unforwarded methods, all of which are
   silent at build time:

   - a binding table bound in `index.android.ts` but not `index.ios.ts`, or the reverse —
     the property then does nothing on the other platform instead of failing;
   - a wrapper class implemented on one platform only;
   - a class both platforms implement that no `.d.ts` declares, so nothing importing the
     plugin can see it;
   - an SDK class with a generated table and no wrapper at all.

   It exits non-zero on any of those, except a class whose SDK counterpart is android-only
   to begin with — that one is reported and marked, not counted.

5. **Typecheck, then run both demos.**

   ```sh
   ./node_modules/.bin/tsc --build packages/ui-massifmaps/tsconfig.json
   npm run demo.svelte.android
   npm run demo.svelte.ios
   ```

## When the SDK adds a class

`--coverage` lists every SDK class with no binding table. For each one worth exposing:

```sh
npm run bindings -- --scaffold RasterTileFilter        # or --scaffold-all
npm run bindings -- --scaffold CelestialArc, CelestialLayer, CelestialSprite   # several at once
```

Scaffolds land in `scaffold/` (never `src/`) as three files per class — `<Name>.d.ts`,
`<Name>.android.ts` and `<Name>.ios.ts`, the same three legs every module in `src/` has. The
`.d.ts` carries the `<Name>Options` interface and the `Accessors`/`Methods` merge, so a scaffolded
class is not missing its public types.

A class taking a listener — `setCelestialEventListener(CelestialEventListener)` — also gets the
glue, which is the same shape every time: a plain TS interface in the `.d.ts`, the
`com.nativescript.massifmaps.additions.*` subclass wired up on android, an `NSMSF*` delegate class
on iOS, one stub per callback, and an `exclude` on `bindNative` so the synthesised accessor cannot
bypass any of it. Only the argument marshalling is left as a TODO.

The native halves come with it when the plugin does not already ship them:

```
scaffold/platforms/android/java/com/nativescript/massifmaps/additions/<X>.java
scaffold/platforms/ios/src/NSMSF<X>.h
scaffold/platforms/ios/src/NSMSF<X>.mm
```

Both are the same main-thread hop every existing listener does — `SynchronousHandler.postAndWait`
on android, `dispatch_sync(dispatch_get_main_queue(), ...)` on iOS — around a `<name>Threaded`
stub the TypeScript delegate overrides. The ObjC selectors are read out of the SDK's own framework
header, labels included, because an override that misses a label compiles and then silently never
fires. Copy the files into `packages/ui-massifmaps/platforms/`, then add the `#import` line the
command prints to `platforms/ios/src/MassifMapsAdditions.h` — the clang module does not see a
header the umbrella does not name.

Pick the right native constructor, fill in the TODOs, move all three into
`src/ui-massifmaps/<pkg>/`, and export them from that package's index. Then re-run
`npm run bindings` so the class reaches `native-api-usage.json`, and
`npm run bindings -- --coverage` to confirm nothing is left on one platform only.

A class android has and iOS does not is reported at the end of `npm run bindings` and is
deliberately not bound — the binding tables only cover what both platforms have.

## When the SDK changes an existing API

Regenerate the typings first, then:

```sh
npm run bindings -- --audit
```

It reports three things:

- **properties declared with no matching native accessor** — the SDK renamed or dropped the
  accessor behind a `@nativeProperty`. A wrapper targeting one of our own `NSMSF*`/`additions`
  subclasses shows up here legitimately: the SDK base class genuinely does not declare those
  members.
- **properties whose decorator disagrees with the native type** — e.g. a plain `@nativeProperty`
  where the accessor now returns a `Color` and needs `colorConverter`.
- **classes with native accessors the plugin does not expose** — new API on a class already wrapped.

To move a hand-written class onto the generated table:

```sh
npm run bindings -- --migrate RasterTileLayer VectorTileLayer   # or --migrate-all
```

That attaches `METHODS`/`ACCESSORS`/`SELECTORS` and prunes the `@nativeProperty` declarations the
table now covers (`--no-prune` keeps them). Review the diff: a class that marshals some members
itself needs an `exclude` for them.

## Enums

Enums are not bound. They are hand-written constant objects that read the native value:

```ts
export const RasterTileFilterMode = {
    get RASTER_TILE_FILTER_MODE_NEAREST() {
        return com.massifmaps.layers.RasterTileFilterMode.RASTER_TILE_FILTER_MODE_NEAREST;
    },
    ...
};
```

That works because android compiles a SWIG enum to a real java class with static fields. iOS
compiles the same enum to a `const enum` — plain integers, nothing to look up.

The android consequence: **every SWIG enum needs a `native-api-usage.json` entry**, or the metadata
filter strips the class and the getter returns `undefined`. `npm run bindings` emits all of them —
do not maintain the list by hand. Whitelisting only the enums a bound method mentions is not
enough: `MBTilesScheme` appears solely in a constructor signature, which the parser drops as noise.

## native-api-usage.json

Both files come out of the same model, so they cannot drift apart:

- android matches `package:Class` — `com.massifmaps.layers:RasterTileLayer`
- iOS matches `clangModule:ObjCInterface` — `MassifMaps:MSFRasterTileLayer`

`npm run bindings -- --no-api-usage` skips them.

A consuming app has its own `App_Resources/Android/native-api-usage.json` with
`"whitelist-plugins-usages": true`, which is what pulls this plugin's `uses` list in. An app only
needs its own entries for SDK classes it touches directly, outside the plugin's wrappers.

## Fallback: generating typings by hand

Only if `scripts/typings` fails. The cleanup passes it does — stripping `*JNI` classes, swig
plumbing (`delete`, `swigGetDirectorObject`, `swigCreatePolymorphicInstance`, `swigCMemOwn`, …),
ObjC `description()`/`hash()`, and reserved parameter names — then have to be redone by hand. See
`scripts/typings/swig.mjs` for what they are.

android:

```sh
java -jar build/libs/dts-generator.jar -skip-declarations -input path/to/massif.jar
```

iOS, from `demo-svelte`:

```sh
TNS_TYPESCRIPT_DECLARATIONS_PATH="$(pwd)/typings" ns build ios --bundle
```
