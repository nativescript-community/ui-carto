export type LatitudeKeys = 'latitude' | 'lat';
export type LongitudeKeys = 'longitude' | 'lon' | 'lng';
export type AltitudeKeys = 'altitude' | 'alt' | 'ele';

export interface DefaultLatLonKeys {
    latitude: number;
    longitude: number;
    altitude?: number;
}

export type GenericMapPos<T = DefaultLatLonKeys> = {
    [P in keyof T]: number;
} & {
    speed?: number;
};
export type MapPos<T = DefaultLatLonKeys> = GenericMapPos<T>;

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

export class ScreenBounds {
    min: ScreenPos;
    max: ScreenPos;
}
// export namespace MapBounds {
//     function fromCoordinates(southwest: MapPos, northeast: MapPos): MapBounds;
// }
export let LatitudeKey: LatitudeKeys = 'latitude';
export let LongitudeKey: LongitudeKeys = 'longitude';
export let AltitudeKey: AltitudeKeys = 'altitude';

export function setMapPosKeys(latitude: LatitudeKeys, longitude: LongitudeKeys, altitude?: AltitudeKeys) {
    LatitudeKey = latitude;
    LongitudeKey = longitude;
    if (altitude) {
        AltitudeKey = altitude;
    }
}

export function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            const descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);

            if (name === 'constructor') return;
            if (descriptor && (!descriptor.writable || !descriptor.configurable || descriptor.get || descriptor.set)) {
                Object.defineProperty(derivedCtor.prototype, name, descriptor);
            } else {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
        Object.getOwnPropertySymbols(baseCtor.prototype).forEach(symbol => {
            derivedCtor.prototype[symbol] = baseCtor.prototype[symbol];
        });
    });
}
