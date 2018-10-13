import { View } from 'tns-core-modules/ui/page/page';
import { EventData } from 'tns-core-modules/data/observable';
import { IProjection, Projection } from '../projections/projection';
import { TileLayer } from '../layers/layer';

export function setLicenseKey(key: string);

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
export interface PositionEventData extends EventData {
    position: Position;
}

export class CartoMap extends View {
    public projection: IProjection;
    addLayer(layer: TileLayer<any, any>);
    getFocusPos(): Position;
    setFocusPos(pos: Position);
    getZoom(): number;
    setZoom(pos: number);
    getBearing(): number;
    setBearing(pos: number);
    getTilt(): number;
    setTilt(pos: number);
    screenToMap(x: number, y: number);
    fromNativeMapPos(pos);
    sendEvent(eventName: string, data?);
    getMetersPerPixel(): number;
}
