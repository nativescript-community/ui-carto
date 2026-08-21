// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { Color } from '@nativescript/core';

/** com.massifmaps.components.SkyOptions / MSFSkyOptions */
export const METHODS = ['getGroundColor', 'getHorizonBlend', 'getHorizonColor', 'getShaderSource', 'getSkyColor', 'isEnabled', 'isSunDiscEnabled', 'setEnabled', 'setGroundColor', 'setHorizonBlend', 'setHorizonColor', 'setShaderSource', 'setSkyColor', 'setSunDiscEnabled'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getGroundColor(): Color;
    getHorizonBlend(): number;
    getHorizonColor(): Color;
    getShaderSource(): string;
    getSkyColor(): Color;
    isEnabled(): boolean;
    isSunDiscEnabled(): boolean;
    setEnabled(arg0: boolean): void;
    setGroundColor(arg0: Color | string): void;
    setHorizonBlend(arg0: number): void;
    setHorizonColor(arg0: Color | string): void;
    setShaderSource(arg0: string): void;
    setSkyColor(arg0: Color | string): void;
    setSunDiscEnabled(arg0: boolean): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    enabled: ['isEnabled', 'setEnabled'],
    groundColor: ['getGroundColor', 'setGroundColor'],
    horizonBlend: ['getHorizonBlend', 'setHorizonBlend'],
    horizonColor: ['getHorizonColor', 'setHorizonColor'],
    shaderSource: ['getShaderSource', 'setShaderSource'],
    skyColor: ['getSkyColor', 'setSkyColor'],
    sunDiscEnabled: ['isSunDiscEnabled', 'setSunDiscEnabled'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    enabled: boolean;
    groundColor: Color | string;
    horizonBlend: number;
    horizonColor: Color | string;
    shaderSource: string;
    skyColor: Color | string;
    sunDiscEnabled: boolean;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [['groundColor', 'colorConverter'], ['horizonColor', 'colorConverter'], ['skyColor', 'colorConverter']] as const;

export const SELECTORS: Record<string, string> = {};
