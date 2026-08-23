/**
 * The MassifMaps surface API.
 *
 * One entry point on both platforms: the whole layer is shared, and the only per-platform code is
 * `bridge.android.ts` / `bridge.ios.ts`, which `index.common.ts` reaches through `./bridge`.
 *
 * Import it namespaced from the plugin root, so it sits beside the object API rather than
 * colliding with it:
 *
 * ```ts
 * import { api } from '@nativescript-community/ui-massifmaps';
 * ```
 */
export * from './index.common';
