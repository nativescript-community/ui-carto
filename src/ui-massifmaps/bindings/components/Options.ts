// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { Color, ImageAsset, ImageSource } from '@nativescript/core';
import { MapRange, MapVec } from '../../core/index';
import { PanningMode, RenderProjectionMode } from '../../ui/index';
import { EnumValue, FreeRoamMode, PanningSpeedMode, PivotMode } from '../enums';

/** com.massifmaps.components.Options / MSFOptions */
export const METHODS = ['getAmbientLightColor', 'getBackgroundBitmap', 'getBaseProjection', 'getClearColor', 'getDPI', 'getDoubleClickMaxDuration', 'getDrawDistance', 'getEnvelopeThreadPoolSize', 'getFieldOfViewY', 'getFocusPointOffset', 'getFogOptions', 'getFreeRoamLookSensitivity', 'getFreeRoamMode', 'getFreeRoamMoveSpeed', 'getLightOptions', 'getLongClickDuration', 'getMainLightColor', 'getMainLightDirection', 'getPanBounds', 'getPanningMode', 'getPanningSpeedMode', 'getPivotMode', 'getRenderProjectionMode', 'getSkyColor', 'getSkyOptions', 'getTerrainOptions', 'getTileDrawSize', 'getTileLODFactor', 'getTileThreadPoolSize', 'getTiltRange', 'getZoomRange', 'isClickTypeDetection', 'isDebugTileBorders', 'isDoubleClickDetection', 'isKineticPan', 'isKineticRotation', 'isKineticZoom', 'isLayersLabelsProcessedInReverseOrder', 'isRestrictedPanning', 'isRotatable', 'isRotationGestures', 'isSeamlessPanning', 'isTiltGestureReversed', 'isUserInput', 'isZoomGestures', 'setAmbientLightColor', 'setBackgroundBitmap', 'setBaseProjection', 'setClearColor', 'setClickTypeDetection', 'setDPI', 'setDebugTileBorders', 'setDoubleClickDetection', 'setDoubleClickMaxDuration', 'setDrawDistance', 'setEnvelopeThreadPoolSize', 'setFieldOfViewY', 'setFocusPointOffset', 'setFogOptions', 'setFreeRoamLookSensitivity', 'setFreeRoamMode', 'setFreeRoamMoveSpeed', 'setKineticPan', 'setKineticRotation', 'setKineticZoom', 'setLayersLabelsProcessedInReverseOrder', 'setLightOptions', 'setLongClickDuration', 'setMainLightColor', 'setMainLightDirection', 'setPanBounds', 'setPanningMode', 'setPanningSpeedMode', 'setPivotMode', 'setRenderProjectionMode', 'setRestrictedPanning', 'setRotatable', 'setRotationGestures', 'setSeamlessPanning', 'setSkyColor', 'setSkyOptions', 'setTerrainOptions', 'setTileDrawSize', 'setTileLODFactor', 'setTileThreadPoolSize', 'setTiltGestureReversed', 'setTiltRange', 'setUserInput', 'setZoomGestures', 'setZoomRange'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getAmbientLightColor(): Color;
    getBackgroundBitmap(): ImageSource;
    getBaseProjection(): any;
    getClearColor(): Color;
    getDPI(): number;
    getDoubleClickMaxDuration(): number;
    getDrawDistance(): number;
    getEnvelopeThreadPoolSize(): number;
    getFieldOfViewY(): number;
    getFocusPointOffset(): any;
    getFogOptions(): any;
    getFreeRoamLookSensitivity(): number;
    getFreeRoamMode(): FreeRoamMode;
    getFreeRoamMoveSpeed(): number;
    getLightOptions(): any;
    getLongClickDuration(): number;
    getMainLightColor(): Color;
    getMainLightDirection(): MapVec;
    getPanBounds(): any;
    getPanningMode(): PanningMode;
    getPanningSpeedMode(): PanningSpeedMode;
    getPivotMode(): PivotMode;
    getRenderProjectionMode(): RenderProjectionMode;
    getSkyColor(): Color;
    getSkyOptions(): any;
    getTerrainOptions(): any;
    getTileDrawSize(): number;
    getTileLODFactor(): number;
    getTileThreadPoolSize(): number;
    getTiltRange(): MapRange;
    getZoomRange(): MapRange;
    isClickTypeDetection(): boolean;
    isDebugTileBorders(): boolean;
    isDoubleClickDetection(): boolean;
    isKineticPan(): boolean;
    isKineticRotation(): boolean;
    isKineticZoom(): boolean;
    isLayersLabelsProcessedInReverseOrder(): boolean;
    isRestrictedPanning(): boolean;
    isRotatable(): boolean;
    isRotationGestures(): boolean;
    isSeamlessPanning(): boolean;
    isTiltGestureReversed(): boolean;
    isUserInput(): boolean;
    isZoomGestures(): boolean;
    setAmbientLightColor(arg0: Color | string): void;
    setBackgroundBitmap(arg0: string | ImageSource | ImageAsset): void;
    setBaseProjection(arg0: any): void;
    setClearColor(arg0: Color | string): void;
    setClickTypeDetection(arg0: boolean): void;
    setDPI(arg0: number): void;
    setDebugTileBorders(arg0: boolean): void;
    setDoubleClickDetection(arg0: boolean): void;
    setDoubleClickMaxDuration(arg0: number): void;
    setDrawDistance(arg0: number): void;
    setEnvelopeThreadPoolSize(arg0: number): void;
    setFieldOfViewY(arg0: number): void;
    setFocusPointOffset(arg0: any): void;
    setFogOptions(arg0: any): void;
    setFreeRoamLookSensitivity(arg0: number): void;
    setFreeRoamMode(arg0: EnumValue<FreeRoamMode>): void;
    setFreeRoamMoveSpeed(arg0: number): void;
    setKineticPan(arg0: boolean): void;
    setKineticRotation(arg0: boolean): void;
    setKineticZoom(arg0: boolean): void;
    setLayersLabelsProcessedInReverseOrder(arg0: boolean): void;
    setLightOptions(arg0: any): void;
    setLongClickDuration(arg0: number): void;
    setMainLightColor(arg0: Color | string): void;
    setMainLightDirection(arg0: MapVec): void;
    setPanBounds(arg0: any): void;
    setPanningMode(arg0: EnumValue<PanningMode>): void;
    setPanningSpeedMode(arg0: EnumValue<PanningSpeedMode>): void;
    setPivotMode(arg0: EnumValue<PivotMode>): void;
    setRenderProjectionMode(arg0: EnumValue<RenderProjectionMode>): void;
    setRestrictedPanning(arg0: boolean): void;
    setRotatable(arg0: boolean): void;
    setRotationGestures(arg0: boolean): void;
    setSeamlessPanning(arg0: boolean): void;
    setSkyColor(arg0: Color | string): void;
    setSkyOptions(arg0: any): void;
    setTerrainOptions(arg0: any): void;
    setTileDrawSize(arg0: number): void;
    setTileLODFactor(arg0: number): void;
    setTileThreadPoolSize(arg0: number): void;
    setTiltGestureReversed(arg0: boolean): void;
    setTiltRange(arg0: MapRange): void;
    setUserInput(arg0: boolean): void;
    setZoomGestures(arg0: boolean): void;
    setZoomRange(arg0: MapRange): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    ambientLightColor: ['getAmbientLightColor', 'setAmbientLightColor'],
    backgroundBitmap: ['getBackgroundBitmap', 'setBackgroundBitmap'],
    baseProjection: ['getBaseProjection', 'setBaseProjection'],
    clearColor: ['getClearColor', 'setClearColor'],
    clickTypeDetection: ['isClickTypeDetection', 'setClickTypeDetection'],
    debugTileBorders: ['isDebugTileBorders', 'setDebugTileBorders'],
    doubleClickDetection: ['isDoubleClickDetection', 'setDoubleClickDetection'],
    doubleClickMaxDuration: ['getDoubleClickMaxDuration', 'setDoubleClickMaxDuration'],
    dpi: ['getDPI', 'setDPI'],
    drawDistance: ['getDrawDistance', 'setDrawDistance'],
    envelopeThreadPoolSize: ['getEnvelopeThreadPoolSize', 'setEnvelopeThreadPoolSize'],
    fieldOfViewY: ['getFieldOfViewY', 'setFieldOfViewY'],
    focusPointOffset: ['getFocusPointOffset', 'setFocusPointOffset'],
    fogOptions: ['getFogOptions', 'setFogOptions'],
    freeRoamLookSensitivity: ['getFreeRoamLookSensitivity', 'setFreeRoamLookSensitivity'],
    freeRoamMode: ['getFreeRoamMode', 'setFreeRoamMode'],
    freeRoamMoveSpeed: ['getFreeRoamMoveSpeed', 'setFreeRoamMoveSpeed'],
    kineticPan: ['isKineticPan', 'setKineticPan'],
    kineticRotation: ['isKineticRotation', 'setKineticRotation'],
    kineticZoom: ['isKineticZoom', 'setKineticZoom'],
    layersLabelsProcessedInReverseOrder: ['isLayersLabelsProcessedInReverseOrder', 'setLayersLabelsProcessedInReverseOrder'],
    lightOptions: ['getLightOptions', 'setLightOptions'],
    longClickDuration: ['getLongClickDuration', 'setLongClickDuration'],
    mainLightColor: ['getMainLightColor', 'setMainLightColor'],
    mainLightDirection: ['getMainLightDirection', 'setMainLightDirection'],
    panBounds: ['getPanBounds', 'setPanBounds'],
    panningMode: ['getPanningMode', 'setPanningMode'],
    panningSpeedMode: ['getPanningSpeedMode', 'setPanningSpeedMode'],
    pivotMode: ['getPivotMode', 'setPivotMode'],
    renderProjectionMode: ['getRenderProjectionMode', 'setRenderProjectionMode'],
    restrictedPanning: ['isRestrictedPanning', 'setRestrictedPanning'],
    rotatable: ['isRotatable', 'setRotatable'],
    rotationGestures: ['isRotationGestures', 'setRotationGestures'],
    seamlessPanning: ['isSeamlessPanning', 'setSeamlessPanning'],
    skyColor: ['getSkyColor', 'setSkyColor'],
    skyOptions: ['getSkyOptions', 'setSkyOptions'],
    terrainOptions: ['getTerrainOptions', 'setTerrainOptions'],
    tileDrawSize: ['getTileDrawSize', 'setTileDrawSize'],
    tileLODFactor: ['getTileLODFactor', 'setTileLODFactor'],
    tileThreadPoolSize: ['getTileThreadPoolSize', 'setTileThreadPoolSize'],
    tiltGestureReversed: ['isTiltGestureReversed', 'setTiltGestureReversed'],
    tiltRange: ['getTiltRange', 'setTiltRange'],
    userInput: ['isUserInput', 'setUserInput'],
    zoomGestures: ['isZoomGestures', 'setZoomGestures'],
    zoomRange: ['getZoomRange', 'setZoomRange'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    ambientLightColor: Color | string;
    backgroundBitmap: string | ImageSource | ImageAsset;
    baseProjection: any;  // com.massifmaps.projections.Projection
    clearColor: Color | string;
    clickTypeDetection: boolean;
    debugTileBorders: boolean;
    doubleClickDetection: boolean;
    doubleClickMaxDuration: number;
    dpi: number;
    drawDistance: number;
    envelopeThreadPoolSize: number;
    fieldOfViewY: number;
    focusPointOffset: any;  // com.massifmaps.core.ScreenPos
    fogOptions: any;  // com.massifmaps.components.FogOptions
    freeRoamLookSensitivity: number;
    freeRoamMode: EnumValue<FreeRoamMode>;  // com.massifmaps.components.FreeRoamMode
    freeRoamMoveSpeed: number;
    kineticPan: boolean;
    kineticRotation: boolean;
    kineticZoom: boolean;
    layersLabelsProcessedInReverseOrder: boolean;
    lightOptions: any;  // com.massifmaps.components.LightOptions
    longClickDuration: number;
    mainLightColor: Color | string;
    mainLightDirection: MapVec;
    panBounds: any;  // com.massifmaps.core.MapBounds
    panningMode: EnumValue<PanningMode>;  // com.massifmaps.components.PanningMode
    panningSpeedMode: EnumValue<PanningSpeedMode>;  // com.massifmaps.components.PanningSpeedMode
    pivotMode: EnumValue<PivotMode>;  // com.massifmaps.components.PivotMode
    renderProjectionMode: EnumValue<RenderProjectionMode>;  // com.massifmaps.components.RenderProjectionMode
    restrictedPanning: boolean;
    rotatable: boolean;
    rotationGestures: boolean;
    seamlessPanning: boolean;
    skyColor: Color | string;
    skyOptions: any;  // com.massifmaps.components.SkyOptions
    terrainOptions: any;  // com.massifmaps.components.TerrainOptions
    tileDrawSize: number;
    tileLODFactor: number;
    tileThreadPoolSize: number;
    tiltGestureReversed: boolean;
    tiltRange: MapRange;
    userInput: boolean;
    zoomGestures: boolean;
    zoomRange: MapRange;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [['ambientLightColor', 'colorConverter'], ['backgroundBitmap', 'massifImageConverter'], ['clearColor', 'colorConverter'], ['mainLightColor', 'colorConverter'], ['mainLightDirection', 'mapVecConverter'], ['skyColor', 'colorConverter'], ['tiltRange', 'mapRangeConverter'], ['zoomRange', 'mapRangeConverter']] as const;

export const SELECTORS: Record<string, string> = {};
