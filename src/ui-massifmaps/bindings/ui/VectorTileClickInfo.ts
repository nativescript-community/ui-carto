// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { ClickType } from '../../core/index';

/** com.massifmaps.ui.VectorTileClickInfo / MSFVectorTileClickInfo */
export const METHODS = ['getClickInfo', 'getClickPos', 'getClickType', 'getFeature', 'getFeatureClickPos', 'getFeatureId', 'getFeatureLayerName', 'getFeaturePosIndex', 'getLayer', 'getMapTile'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getClickInfo(): any;
    getClickPos(): any;
    getClickType(): ClickType;
    getFeature(): any;
    getFeatureClickPos(): any;
    getFeatureId(): number;
    getFeatureLayerName(): string;
    getFeaturePosIndex(): number;
    getLayer(): any;
    getMapTile(): any;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
