// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { Color } from '@nativescript/core';

/** com.massifmaps.renderers.PostProcessEffect / MSFPostProcessEffect */
export const METHODS = ['getColorParameter', 'getFloatParameter', 'getFragmentShader', 'getName', 'isTerrainDepthRequired', 'setColorParameter', 'setFloatParameter', 'setTerrainDepthRequired'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getColorParameter(arg0: string): Color;
    getFloatParameter(arg0: string): number;
    getFragmentShader(): string;
    getName(): string;
    isTerrainDepthRequired(): boolean;
    setColorParameter(arg0: string, arg1: Color | string): void;
    setFloatParameter(arg0: string, arg1: number): void;
    setTerrainDepthRequired(arg0: boolean): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    terrainDepthRequired: ['isTerrainDepthRequired', 'setTerrainDepthRequired'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    terrainDepthRequired: boolean;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    setColorParameter: 'setColorParameterColor',
    setFloatParameter: 'setFloatParameterValue',
};
