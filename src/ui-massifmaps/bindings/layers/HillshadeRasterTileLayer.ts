// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { Color } from '@nativescript/core';
import { MapVec } from '../../core/index';
import { HillshadeMethod } from '../../layers/raster';

/** com.massifmaps.layers.HillshadeRasterTileLayer / MSFHillshadeRasterTileLayer */
export const METHODS = ['getAccentColor', 'getContourColor', 'getContourInterval', 'getContourWidth', 'getContrast', 'getElevation', 'getElevations', 'getExagerateHeightScaleEnabled', 'getExaggeration', 'getHeightScale', 'getHighlightColor', 'getHillshadeMethod', 'getIlluminationDirection', 'getIlluminationMapRotationEnabled', 'getNormalMapLightingShader', 'getShadowColor', 'isContourEnabled', 'isElevationEncodingEnabled', 'isLegacyHeightScaleEnabled', 'isTerrainPaintEnabled', 'isTerrainPaintFullDetailEnabled', 'setAccentColor', 'setContourColor', 'setContourEnabled', 'setContourInterval', 'setContourWidth', 'setContrast', 'setElevationEncodingEnabled', 'setExagerateHeightScaleEnabled', 'setExaggeration', 'setHeightScale', 'setHighlightColor', 'setHillshadeMethod', 'setIlluminationDirection', 'setIlluminationMapRotationEnabled', 'setLegacyHeightScaleEnabled', 'setNormalMapLightingShader', 'setShadowColor', 'setTerrainPaintEnabled', 'setTerrainPaintFullDetailEnabled'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getAccentColor(): Color;
    getContourColor(): Color;
    getContourInterval(): number;
    getContourWidth(): number;
    getContrast(): number;
    getElevation(arg0: any): number;
    getElevations(arg0: any): any;
    getExagerateHeightScaleEnabled(): boolean;
    getExaggeration(): number;
    getHeightScale(): number;
    getHighlightColor(): Color;
    getHillshadeMethod(): HillshadeMethod;
    getIlluminationDirection(): MapVec;
    getIlluminationMapRotationEnabled(): boolean;
    getNormalMapLightingShader(): string;
    getShadowColor(): Color;
    isContourEnabled(): boolean;
    isElevationEncodingEnabled(): boolean;
    isLegacyHeightScaleEnabled(): boolean;
    isTerrainPaintEnabled(): boolean;
    isTerrainPaintFullDetailEnabled(): boolean;
    setAccentColor(arg0: Color | string): void;
    setContourColor(arg0: Color | string): void;
    setContourEnabled(arg0: boolean): void;
    setContourInterval(arg0: number): void;
    setContourWidth(arg0: number): void;
    setContrast(arg0: number): void;
    setElevationEncodingEnabled(arg0: boolean): void;
    setExagerateHeightScaleEnabled(arg0: boolean): void;
    setExaggeration(arg0: number): void;
    setHeightScale(arg0: number): void;
    setHighlightColor(arg0: Color | string): void;
    setHillshadeMethod(arg0: HillshadeMethod): void;
    setIlluminationDirection(arg0: MapVec): void;
    setIlluminationMapRotationEnabled(arg0: boolean): void;
    setLegacyHeightScaleEnabled(arg0: boolean): void;
    setNormalMapLightingShader(arg0: string): void;
    setShadowColor(arg0: Color | string): void;
    setTerrainPaintEnabled(arg0: boolean): void;
    setTerrainPaintFullDetailEnabled(arg0: boolean): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    accentColor: ['getAccentColor', 'setAccentColor'],
    contourColor: ['getContourColor', 'setContourColor'],
    contourEnabled: ['isContourEnabled', 'setContourEnabled'],
    contourInterval: ['getContourInterval', 'setContourInterval'],
    contourWidth: ['getContourWidth', 'setContourWidth'],
    contrast: ['getContrast', 'setContrast'],
    elevationEncodingEnabled: ['isElevationEncodingEnabled', 'setElevationEncodingEnabled'],
    exagerateHeightScaleEnabled: ['getExagerateHeightScaleEnabled', 'setExagerateHeightScaleEnabled'],
    exaggeration: ['getExaggeration', 'setExaggeration'],
    heightScale: ['getHeightScale', 'setHeightScale'],
    highlightColor: ['getHighlightColor', 'setHighlightColor'],
    hillshadeMethod: ['getHillshadeMethod', 'setHillshadeMethod'],
    illuminationDirection: ['getIlluminationDirection', 'setIlluminationDirection'],
    illuminationMapRotationEnabled: ['getIlluminationMapRotationEnabled', 'setIlluminationMapRotationEnabled'],
    legacyHeightScaleEnabled: ['isLegacyHeightScaleEnabled', 'setLegacyHeightScaleEnabled'],
    normalMapLightingShader: ['getNormalMapLightingShader', 'setNormalMapLightingShader'],
    shadowColor: ['getShadowColor', 'setShadowColor'],
    terrainPaintEnabled: ['isTerrainPaintEnabled', 'setTerrainPaintEnabled'],
    terrainPaintFullDetailEnabled: ['isTerrainPaintFullDetailEnabled', 'setTerrainPaintFullDetailEnabled'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    accentColor: Color | string;
    contourColor: Color | string;
    contourEnabled: boolean;
    contourInterval: number;
    contourWidth: number;
    contrast: number;
    elevationEncodingEnabled: boolean;
    exagerateHeightScaleEnabled: boolean;
    exaggeration: number;
    heightScale: number;
    highlightColor: Color | string;
    hillshadeMethod: HillshadeMethod;  // com.massifmaps.layers.HillshadeMethod
    illuminationDirection: MapVec;
    illuminationMapRotationEnabled: boolean;
    legacyHeightScaleEnabled: boolean;
    normalMapLightingShader: string;
    shadowColor: Color | string;
    terrainPaintEnabled: boolean;
    terrainPaintFullDetailEnabled: boolean;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [['accentColor', 'colorConverter'], ['contourColor', 'colorConverter'], ['highlightColor', 'colorConverter'], ['illuminationDirection', 'mapVecConverter'], ['shadowColor', 'colorConverter']] as const;

export const SELECTORS: Record<string, string> = {};
