// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { Color } from '@nativescript/core';

/** com.massifmaps.components.TerrainOptions / MSFTerrainOptions */
export const METHODS = ['getBackgroundColor', 'getBillboardOcclusionTolerance', 'getCameraClampDuration', 'getCameraClearance', 'getDataSource', 'getDepthBias', 'getDrapeResolution', 'getElevation', 'getElevationDecoder', 'getElevations', 'getExaggeration', 'getMaxTileZoomCoarsening', 'getMaxTileZoomOffset', 'getMeshResolution', 'getMinZoom', 'getNoDrapeLayerFilter', 'getSurfaceColorParameter', 'getSurfaceParameter', 'getSurfaceShaderSource', 'getViewDistance', 'getViewDistanceFactor', 'isBackgroundBitmapEnabled', 'isBillboardOcclusionEnabled', 'isDrapeFillsEnabled', 'isDrapeLinesEnabled', 'isElevationPrefetchEnabled', 'isEnabled', 'isSeamlessTileEdgesEnabled', 'isTileEdgeStitchingEnabled', 'setBackgroundBitmapEnabled', 'setBackgroundColor', 'setBillboardOcclusionEnabled', 'setBillboardOcclusionTolerance', 'setCameraClampDuration', 'setCameraClearance', 'setDepthBias', 'setDrapeFillsEnabled', 'setDrapeLinesEnabled', 'setDrapeResolution', 'setElevationPrefetchEnabled', 'setEnabled', 'setExaggeration', 'setMaxTileZoomCoarsening', 'setMaxTileZoomOffset', 'setMeshResolution', 'setMinZoom', 'setNoDrapeLayerFilter', 'setSeamlessTileEdgesEnabled', 'setSurfaceColorParameter', 'setSurfaceParameter', 'setSurfaceShaderSource', 'setTileEdgeStitchingEnabled', 'setViewDistance', 'setViewDistanceFactor'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getBackgroundColor(): Color;
    getBillboardOcclusionTolerance(): number;
    getCameraClampDuration(): number;
    getCameraClearance(): number;
    getDataSource(): any;
    getDepthBias(): number;
    getDrapeResolution(): number;
    getElevation(arg0: any): number;
    getElevationDecoder(): any;
    getElevations(arg0: any): any;
    getExaggeration(): number;
    getMaxTileZoomCoarsening(): number;
    getMaxTileZoomOffset(): number;
    getMeshResolution(): number;
    getMinZoom(): number;
    getNoDrapeLayerFilter(): string;
    getSurfaceColorParameter(arg0: string): Color;
    getSurfaceParameter(arg0: string): number;
    getSurfaceShaderSource(): string;
    getViewDistance(): number;
    getViewDistanceFactor(): number;
    isBackgroundBitmapEnabled(): boolean;
    isBillboardOcclusionEnabled(): boolean;
    isDrapeFillsEnabled(): boolean;
    isDrapeLinesEnabled(): boolean;
    isElevationPrefetchEnabled(): boolean;
    isEnabled(): boolean;
    isSeamlessTileEdgesEnabled(): boolean;
    isTileEdgeStitchingEnabled(): boolean;
    setBackgroundBitmapEnabled(arg0: boolean): void;
    setBackgroundColor(arg0: Color | string): void;
    setBillboardOcclusionEnabled(arg0: boolean): void;
    setBillboardOcclusionTolerance(arg0: number): void;
    setCameraClampDuration(arg0: number): void;
    setCameraClearance(arg0: number): void;
    setDepthBias(arg0: number): void;
    setDrapeFillsEnabled(arg0: boolean): void;
    setDrapeLinesEnabled(arg0: boolean): void;
    setDrapeResolution(arg0: number): void;
    setElevationPrefetchEnabled(arg0: boolean): void;
    setEnabled(arg0: boolean): void;
    setExaggeration(arg0: number): void;
    setMaxTileZoomCoarsening(arg0: number): void;
    setMaxTileZoomOffset(arg0: number): void;
    setMeshResolution(arg0: number): void;
    setMinZoom(arg0: number): void;
    setNoDrapeLayerFilter(arg0: string): void;
    setSeamlessTileEdgesEnabled(arg0: boolean): void;
    setSurfaceColorParameter(arg0: string, arg1: Color | string): void;
    setSurfaceParameter(arg0: string, arg1: number): void;
    setSurfaceShaderSource(arg0: string): void;
    setTileEdgeStitchingEnabled(arg0: boolean): void;
    setViewDistance(arg0: number): void;
    setViewDistanceFactor(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    backgroundBitmapEnabled: ['isBackgroundBitmapEnabled', 'setBackgroundBitmapEnabled'],
    backgroundColor: ['getBackgroundColor', 'setBackgroundColor'],
    billboardOcclusionEnabled: ['isBillboardOcclusionEnabled', 'setBillboardOcclusionEnabled'],
    billboardOcclusionTolerance: ['getBillboardOcclusionTolerance', 'setBillboardOcclusionTolerance'],
    cameraClampDuration: ['getCameraClampDuration', 'setCameraClampDuration'],
    cameraClearance: ['getCameraClearance', 'setCameraClearance'],
    depthBias: ['getDepthBias', 'setDepthBias'],
    drapeFillsEnabled: ['isDrapeFillsEnabled', 'setDrapeFillsEnabled'],
    drapeLinesEnabled: ['isDrapeLinesEnabled', 'setDrapeLinesEnabled'],
    drapeResolution: ['getDrapeResolution', 'setDrapeResolution'],
    elevationPrefetchEnabled: ['isElevationPrefetchEnabled', 'setElevationPrefetchEnabled'],
    enabled: ['isEnabled', 'setEnabled'],
    exaggeration: ['getExaggeration', 'setExaggeration'],
    maxTileZoomCoarsening: ['getMaxTileZoomCoarsening', 'setMaxTileZoomCoarsening'],
    maxTileZoomOffset: ['getMaxTileZoomOffset', 'setMaxTileZoomOffset'],
    meshResolution: ['getMeshResolution', 'setMeshResolution'],
    minZoom: ['getMinZoom', 'setMinZoom'],
    noDrapeLayerFilter: ['getNoDrapeLayerFilter', 'setNoDrapeLayerFilter'],
    seamlessTileEdgesEnabled: ['isSeamlessTileEdgesEnabled', 'setSeamlessTileEdgesEnabled'],
    surfaceShaderSource: ['getSurfaceShaderSource', 'setSurfaceShaderSource'],
    tileEdgeStitchingEnabled: ['isTileEdgeStitchingEnabled', 'setTileEdgeStitchingEnabled'],
    viewDistance: ['getViewDistance', 'setViewDistance'],
    viewDistanceFactor: ['getViewDistanceFactor', 'setViewDistanceFactor'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    backgroundBitmapEnabled: boolean;
    backgroundColor: Color | string;
    billboardOcclusionEnabled: boolean;
    billboardOcclusionTolerance: number;
    cameraClampDuration: number;
    cameraClearance: number;
    depthBias: number;
    drapeFillsEnabled: boolean;
    drapeLinesEnabled: boolean;
    drapeResolution: number;
    elevationPrefetchEnabled: boolean;
    enabled: boolean;
    exaggeration: number;
    maxTileZoomCoarsening: number;
    maxTileZoomOffset: number;
    meshResolution: number;
    minZoom: number;
    noDrapeLayerFilter: string;
    seamlessTileEdgesEnabled: boolean;
    surfaceShaderSource: string;
    tileEdgeStitchingEnabled: boolean;
    viewDistance: number;
    viewDistanceFactor: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [['backgroundColor', 'colorConverter']] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    setSurfaceColorParameter: 'setSurfaceColorParameterColor',
    setSurfaceParameter: 'setSurfaceParameterValue',
};
