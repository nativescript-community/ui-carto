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


    setZoom(value: number, duration: number);
    setBearing(value: number, duration: number);
    setTilt(value: number, duration: number);
    setFocusPos(value: string | MapPos, duration: number);
}
