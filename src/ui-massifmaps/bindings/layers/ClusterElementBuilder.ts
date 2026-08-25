// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { ClusterBuilderMode, EnumValue } from '../enums';

/** com.massifmaps.layers.ClusterElementBuilder / MSFClusterElementBuilder */
export const METHODS = ['buildClusterElement', 'getBuilderMode'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    buildClusterElement(arg0: any, arg1: number): any;
    getBuilderMode(): ClusterBuilderMode;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    buildClusterElement: 'buildClusterElementElements',
};
