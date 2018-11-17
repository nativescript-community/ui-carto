import { View } from 'tns-core-modules/ui/page/page';
import { EventData } from 'tns-core-modules/data/observable';
import { IProjection, Projection } from '../projections/projection';
import { Layer } from '../layers/layer';
import { MapPos } from '../core/core';

export function registerLicense(key: string);

export const MapReadyEvent: string;
/**
 * Listener method that gets called when map is in 'stable' state - map animations have finished,
 user has lifted fingers from the screen.
 */
export const MapStableEvent: string;
/**
 * Listener method that gets called at the end of the rendering process when the
map view needs no further refreshing.
 */
export const MapIdleEvent: string;
/**
 * Listener method that gets called when the map is panned, rotated, tilted or zoomed.
 */
export const MapMovedEvent: string;
export const MapClickedEvent: string;

export interface MapEventData extends EventData {
    data: any;
}
export interface MapPosEventData extends EventData {
    MapPos: MapPos;
}

export class MapOptions {
    getAmbientLightColor(): any;
    getBackgroundBitmap(): any;
    getBaseProjection(): any;
    getClearColor(): any;
    getDPI(): number;
    getDrawDistance(): number;
    getEnvelopeThreadPoolSize(): number;
    getFieldOfViewY(): number;
    getFocusPointOffset(): any;
    getMainLightColor(): any;
    getMainLightDirection(): any;
    getPanBounds(): any;
    getPanningMode(): any;
    getPivotMode(): any;
    getProjectionMode(): any;
    getSkyBitmap(): any;
    getTileDrawSize(): number;
    getTileThreadPoolSize(): number;
    getTiltRange(): any;
    getWatermarkAlignmentX(): number;
    getWatermarkAlignmentY(): number;
    getWatermarkBitmap(): any;
    getWatermarkPadding(): any;
    getWatermarkScale(): number;
    getZoomRange(): any;
    isClickTypeDetection(): boolean;
    isKineticPan(): boolean;
    isKineticRotation(): boolean;
    isKineticZoom(): boolean;
    isRestrictedPanning(): boolean;
    isRotatable(): boolean;
    isSeamlessPanning(): boolean;
    isTiltGestureReversed(): boolean;
    isUserInput(): boolean;
    isZoomGestures(): boolean;
    setAmbientLightColor(color: any): void;
    setBackgroundBitmap(backgroundBitmap: any): void;
    setBaseProjection(baseProjection: any): void;
    setClearColor(color: any): void;
    setClickTypeDetection(enabled: boolean): void;
    setDPI(dpi: number): void;
    setDrawDistance(drawDistance: number): void;
    setEnvelopeThreadPoolSize(poolSize: number): void;
    setFieldOfViewY(fovY: number): void;
    setFocusPointOffset(offset: any): void;
    setKineticPan(enabled: boolean): void;
    setKineticRotation(enabled: boolean): void;
    setKineticZoom(enabled: boolean): void;
    setMainLightColor(color: any): void;
    setMainLightDirection(direction: any): void;
    setPanBounds(panBounds: any): void;
    setPanningMode(panningMode: any): void;
    setPivotMode(pivotMode: any): void;
    setProjectionMode(projectionMode: any): void;
    setRestrictedPanning(enabled: boolean): void;
    setRotatable(enabled: boolean): void;
    setSeamlessPanning(enabled: boolean): void;
    setSkyBitmap(skyBitmap: any): void;
    setTileDrawSize(tileDrawSize: number): void;
    setTileThreadPoolSize(poolSize: number): void;
    setTiltGestureReversed(reversed: boolean): void;
    setTiltRange(tiltRange: any): void;
    setUserInput(enabled: boolean): void;
    setWatermarkAlignmentX(alignmentX: number): void;
    setWatermarkAlignmentY(alignmentY: number): void;
    setWatermarkBitmap(watermarkBitmap: any): void;
    // setWatermarkPaddingX(padding: any): void;
    setWatermarkScale(scale: number): void;
    setZoomGestures(enabled: boolean): void;
    setZoomRange(zoomRange: any);
}

export class CartoMap extends View {
    public projection: Projection;
    focusPos: MapPos;
    zoom: number;
    bearing: number;
    tilt: number;
    restrictedPanning: boolean;
    readonly metersPerPixel: number;

    addLayer(layer: Layer<any, any>, index?:number);
    removeLayer(layer: Layer<any, any>);
    screenToMap(x: number, y: number);
    sendEvent(eventName: string, data?);
    fromNativeMapPos(position: any): MapPos;
    getOptions():MapOptions

    setZoom(value: number, duration: number);
    setBearing(value: number, duration: number);
    setTilt(value: number, duration: number);
    setFocusPos(value: string | MapPos, duration: number);
}
