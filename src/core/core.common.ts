export type LatitudeKeys = 'latitude' | 'lat';
export type LongitudeKeys = 'longitude' | 'lon' | 'lng';

export interface MapPos {
    latitude?: number;
    lat?: number;
    longitude?: number;
    lon?: number;
    lng?: number;
    speed?: number;
    altitude?: number;
}

export interface ScreenPos {
    x: number;
    y: number;
}
export interface MapVec {
    x: number;
    y: number;
    z: number;
}
export interface MapRange {
    min: number;
    max: number;
}

export interface MapBounds {
    northeast: MapPos;
    southwest: MapPos;
}
export interface ScreenBounds {
    min: ScreenPos;
    max: ScreenPos;
}
// export namespace MapBounds {
//     function fromCoordinates(southwest: MapPos, northeast: MapPos): MapBounds;
// }
export let LatitudeKey: LatitudeKeys = 'latitude';
export let LongitudeKey: LongitudeKeys = 'longitude';

export function setMapPosKeys(latitude: LatitudeKeys, longitude: LongitudeKeys) {
    LatitudeKey = latitude;
    LongitudeKey = longitude;
}
