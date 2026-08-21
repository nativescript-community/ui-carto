// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { Color } from '@nativescript/core';

/** com.massifmaps.components.LightOptions / MSFLightOptions */
export const METHODS = ['getAmbientIntensity', 'getShadowBias', 'getShadowCascades', 'getShadowCasterMargin', 'getShadowDistance', 'getShadowMapSize', 'getShadowNormalOffset', 'getShadowSoftness', 'getShadowStrength', 'getSunAltitude', 'getSunAzimuth', 'getSunColor', 'getSunIntensity', 'isTerrainLightingEnabled', 'setAmbientIntensity', 'setShadowBias', 'setShadowCascades', 'setShadowCasterMargin', 'setShadowDistance', 'setShadowMapSize', 'setShadowNormalOffset', 'setShadowSoftness', 'setShadowStrength', 'setSunAltitude', 'setSunAzimuth', 'setSunColor', 'setSunIntensity', 'setSunPositionFromTime', 'setTerrainLightingEnabled'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getAmbientIntensity(): number;
    getShadowBias(): number;
    getShadowCascades(): number;
    getShadowCasterMargin(): number;
    getShadowDistance(): number;
    getShadowMapSize(): number;
    getShadowNormalOffset(): number;
    getShadowSoftness(): number;
    getShadowStrength(): number;
    getSunAltitude(): number;
    getSunAzimuth(): number;
    getSunColor(): Color;
    getSunIntensity(): number;
    isTerrainLightingEnabled(): boolean;
    setAmbientIntensity(arg0: number): void;
    setShadowBias(arg0: number): void;
    setShadowCascades(arg0: number): void;
    setShadowCasterMargin(arg0: number): void;
    setShadowDistance(arg0: number): void;
    setShadowMapSize(arg0: number): void;
    setShadowNormalOffset(arg0: number): void;
    setShadowSoftness(arg0: number): void;
    setShadowStrength(arg0: number): void;
    setSunAltitude(arg0: number): void;
    setSunAzimuth(arg0: number): void;
    setSunColor(arg0: Color | string): void;
    setSunIntensity(arg0: number): void;
    setSunPositionFromTime(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
    setTerrainLightingEnabled(arg0: boolean): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    ambientIntensity: ['getAmbientIntensity', 'setAmbientIntensity'],
    shadowBias: ['getShadowBias', 'setShadowBias'],
    shadowCascades: ['getShadowCascades', 'setShadowCascades'],
    shadowCasterMargin: ['getShadowCasterMargin', 'setShadowCasterMargin'],
    shadowDistance: ['getShadowDistance', 'setShadowDistance'],
    shadowMapSize: ['getShadowMapSize', 'setShadowMapSize'],
    shadowNormalOffset: ['getShadowNormalOffset', 'setShadowNormalOffset'],
    shadowSoftness: ['getShadowSoftness', 'setShadowSoftness'],
    shadowStrength: ['getShadowStrength', 'setShadowStrength'],
    sunAltitude: ['getSunAltitude', 'setSunAltitude'],
    sunAzimuth: ['getSunAzimuth', 'setSunAzimuth'],
    sunColor: ['getSunColor', 'setSunColor'],
    sunIntensity: ['getSunIntensity', 'setSunIntensity'],
    terrainLightingEnabled: ['isTerrainLightingEnabled', 'setTerrainLightingEnabled'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    ambientIntensity: number;
    shadowBias: number;
    shadowCascades: number;
    shadowCasterMargin: number;
    shadowDistance: number;
    shadowMapSize: number;
    shadowNormalOffset: number;
    shadowSoftness: number;
    shadowStrength: number;
    sunAltitude: number;
    sunAzimuth: number;
    sunColor: Color | string;
    sunIntensity: number;
    terrainLightingEnabled: boolean;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [['sunColor', 'colorConverter']] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    setSunPositionFromTime: 'setSunPositionFromTimeMonthDayHourMinuteLatitudeLongitude',
};
